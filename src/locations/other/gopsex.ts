import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *P ''
  scene.build();
}

function enterSettings(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shgopsex_vasya_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).shgopsex_vasya_count = 2;
    (s as any).shgopsex_vasya_day = ((s as any).daystart ?? 0);
  }
  if (((s as any).shgopsex_den_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).shgopsex_den_count = 2;
    (s as any).shgopsex_den_day = ((s as any).daystart ?? 0);
  }
  if (((s as any).shgopsex_vitya_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).shgopsex_vitya_count = 2;
    (s as any).shgopsex_vitya_day = ((s as any).daystart ?? 0);
  }
  if (((s as any).shgopsex_gr_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).shgopsex_gr_count = 1;
    (s as any).shgopsex_gr_day = ((s as any).daystart ?? 0);
  }
  (s as any).shgopsex_count = Math.floor(Math.random() * 4) + 4;
  (s as any).shgopsex_group_count = Math.floor(Math.random() * 3) + 3;
  (s as any).shgopsex_init = 1;
  // TODO-QSP: end
  scene.build();
}

function enterGgDevstDeflor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      (s as any).pcs_horny = 0;
      qspCall(s, 'mood', 'lower', 'medium');
      scene.text('You tell them it\'s your first time and ask them to be gentle.');
      scene.text('<font color = red><b>You bite your lip in pain and tears well up in your eyes when his member enters your pussy, breaking your hymen. You are crying and moaning as the sturdy cock fucks your bloody pussy.</b></font>');
    } else {
      scene.text('You tell them it\'s your first time and ask them to be gentle.');
      scene.text('His member enters you with some resistance, but it doesn\'t hurt. If anything, it feels good. You expected your first time to be painful and with some blood, yet there is none.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGgSexOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mesec ?? 0) > 0) {
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'small');
    scene.text('<font color = red><b>You have a period. As his cock rams your cunt, period blood is leaking out of your box.</b></font>');
  } else {
    if (((s as any).pcs_horny ?? 0) >= 50) {
      (s as any).horny_orgasm_text = Math.floor(Math.random() * 12) + 0;
      if ((!((s as any).horny_orgasm_text ?? 0))) {
        // TODO-QSP: dynamic text: You are trying to come, and you beg him to ' + func('gopsex', 'hide', 'gop_sexte...
        scene.text('You are trying to come, and you beg him to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you harder.');
      } else {
        if (((s as any).horny_orgasm_text ?? 0) === 1) {
          scene.text('You try to reach your peak, so you start bouncing faster.');
        } else {
          if (((s as any).horny_orgasm_text ?? 0) === 2) {
            scene.text('You are about to cum, and you ask him to push his dick deeper.');
          } else {
            if (((s as any).horny_orgasm_text ?? 0) === 3) {
              // TODO-QSP: dynamic text: You are trying to come and ask him to ' + func('gopsex', 'hide', 'gop_sextext1')...
              scene.text('You are trying to come and ask him to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you faster.');
            } else {
              if (((s as any).horny_orgasm_text ?? 0) === 4) {
                scene.text('You want to come badly, so you try to catch his pace and bounce his hard dick.');
              } else {
                if (((s as any).horny_orgasm_text ?? 0) === 5) {
                  scene.text('You want to reach your peak, so you begin actively humping his dick.');
                } else {
                  if (((s as any).horny_orgasm_text ?? 0) === 6) {
                    scene.text('You are trying to come, and you ask him to hurry.');
                  } else {
                    if (((s as any).horny_orgasm_text ?? 0) === 7) {
                      // TODO-QSP: dynamic text: You crave for them to ' + func('gopsex', 'hide', 'gop_sextext1') + ' you harder…
                      scene.text('You crave for them to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you harder…');
                    } else {
                      if (((s as any).horny_orgasm_text ?? 0) === 8) {
                        scene.text('You want to finish and plead with him to treat you rough.');
                      } else {
                        if (((s as any).horny_orgasm_text ?? 0) === 9) {
                          // TODO-QSP: dynamic text: You beg your partner to ' + func('gopsex', 'hide', 'gop_sextext1') + ' you harde...
                          scene.text('You beg your partner to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you harder.');
                        } else {
                          if (((s as any).horny_orgasm_text ?? 0) === 10) {
                            scene.text('You yell smut naming yourself a dirty whore to provoke your partner and reach your peak.');
                          } else {
                            if (((s as any).horny_orgasm_text ?? 0) === 11) {
                              // TODO-QSP: dynamic text: You are overexcited, and you want to climax. So you beg your partner to ' + func...
                              scene.text('You are overexcited, and you want to climax. So you beg your partner to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you heavily.');
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (((s as any).pcs_horny ?? 0) >= 70) {
        (s as any).orgasm = ((s as any).orgasm ?? 0) + (1);
        (s as any).pcs_horny = 0;
        qspCall(s, 'mood', 'raise', 'small');
        (s as any).pcs_hairbsh = 0;
        (s as any).orgasm_text = Math.floor(Math.random() * 12) + 0;
        if ((!((s as any).orgasm_text ?? 0))) {
          scene.text('The excitement exceeds your limits, and you scream loudly as you undergo an intense climax.');
        } else {
          if (((s as any).orgasm_text ?? 0) === 1) {
            scene.text('Your body begins shaking, and you cum violently.');
          } else {
            if (((s as any).orgasm_text ?? 0) === 2) {
              scene.text('A loud groan comes from your mouth, and an intense orgasm engulfs your body.');
            } else {
              if (((s as any).orgasm_text ?? 0) === 3) {
                scene.text('You shiver in convulsions and begin to finish.');
              } else {
                if (((s as any).orgasm_text ?? 0) === 4) {
                  scene.text('You are breathing heavily, being excited, and you\'ll reach your climax soon.');
                } else {
                  if (((s as any).orgasm_text ?? 0) === 5) {
                    scene.text('Thanks to the skillfulness of your partner, you experience an intense orgasm.');
                  } else {
                    if (((s as any).orgasm_text ?? 0) === 6) {
                      scene.text('Amazing feeling overfilled your senses, and you finish loudly.');
                    } else {
                      if (((s as any).orgasm_text ?? 0) === 7) {
                        scene.text('You\'ve never experienced such an intense orgasm before. You shiver still for a couple of minutes until your climax fades.');
                      } else {
                        if (((s as any).orgasm_text ?? 0) === 8) {
                          scene.text('Experiencing incredible feelings, you reach a pinnacle.');
                        } else {
                          if (((s as any).orgasm_text ?? 0) === 9) {
                            scene.text('You moan loudly, and thanks to the skillful actions of your partner, you climax.');
                          } else {
                            if (((s as any).orgasm_text ?? 0) === 10) {
                              scene.text('The room fills with your screams. Finally, you finish loudly, no matter who can hear you.');
                            } else {
                              if (((s as any).orgasm_text ?? 0) === 11) {
                                scene.text('You are overcome by surging emotions and finish with a loud groan.');
                              }
                            }
                          }
                        }
                      }
                    }
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

function enterMasturbGg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mesec ?? 0) > 0) {
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.text('<font color = red><b>What you see makes you a little excited, but since it\'s your time of the month, you don\'t feel like masturbating and getting your fingers bloody…</b></font>');
  } else {
    if (((s as any).mesec ?? 0) <= 0) {
      if (((s as any).pcs_horny ?? 0) >= 50) {
        if (((s as any).pantyworntype ?? 0) === 'none') {
        }
        if (((s as any).PCloSkirt ?? 0) > 0) {
        }
        if (((s as any).PCloPants ?? 0) > 0) {
        }
        if (((s as any).PCloPants ?? 0) > 2) {
        }
        (s as any).rnd_masturb_text = Math.floor(Math.random() * 3) + 1;
        if (((s as any).rnd_masturb_text ?? 0) === 1) {
          // TODO-QSP: dynamic text: The view is quite exciting. You slip your hand <<$dummywhere>> and start rubbing...
          scene.text(`The view is quite exciting. You slip your hand ${((s as any).dummywhere || '')} and start rubbing your clit.`);
        } else {
          if (((s as any).rnd_masturb_text ?? 0) === 2) {
            // TODO-QSP: dynamic text: You are very excited about this view. Of course, you can't help, but your hand s...
            scene.text(`You are very excited about this view. Of course, you can't help, but your hand slips ${((s as any).dummywhere || '')}, and you start rubbing your itching pussy.`);
          } else {
            if (((s as any).rnd_masturb_text ?? 0) === 3) {
              // TODO-QSP: dynamic text: Watching the scene, you become enormously excited. You <<$dummywhat>>, slip your...
              scene.text(`Watching the scene, you become enormously excited. You ${((s as any).dummywhat || '')}, slip your hand ${((s as any).dummywhere || '')}, and start masturbating.`);
            }
          }
        }
      }
      if (((s as any).pcs_horny ?? 0) >= 60) {
        scene.text('Your excitement grows, and you start even faster to rub your pussy, poking your fingers deeper into your love hole and teasing your clit.');
      }
      if (((s as any).pcs_horny ?? 0) >= 70) {
      }
      qspCall(s, 'arousal', 'clit_finger', 3, 'masturbate');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGopsexSelect(s: GameState, scene: SceneBuilder): void {
  (s as any).gop_sex_lubri = 0;
  (s as any).gop_groupsex_lubri = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettings(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) < 50  &&  ((s as any).PCloStyle ?? 0) !== 4) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/shu...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/body/b' + rand(1, 17) + '.jpg"></center> <br> You want sex.`);
  }
  if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).PCloStyle ?? 0) !== 4) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/shu...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/body/g' + rand(1, 20) + '.jpg"></center> <br> You are overexcited, and you strongly want to fuck.`);
  }
  if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/shu...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/body/h' + rand(1, 17) + '.jpg"></center>`);
  }
  if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  (((s as any).alko ?? 0) >= 3  &&  ((s as any).shgopsex_gr_count ?? 0) > 0)  ||  (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).shgopsex_gr_count ?? 0) > 0)) {
      scene.actions([
        { label: 'Participate in group sex', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Have sex with Dan', handler: (st: GameState) => {
    if (((s as any).shgopsex_den_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Dan says, "' + func('gopsex', 'hide', 'gop_gg_name') + ', you've fucked me enoug...
      scene.text('Dan says, "\' + func(\'gopsex\', \'hide\', \'gop_gg_name\') + \', you\'ve fucked me enough today. Get out!"');
      scene.actions([
        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      (s as any).gopsex_n_npc = 0;
      (s as any).shgopsex_den_day = ((s as any).daystart ?? 0);
      (s as any).shgopsex_den_count = ((s as any).shgopsex_den_count ?? 0) - (1);
      if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A10'] = 1;
      qspCall(s, 'npcStat', 'A10');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsex(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
      { label: 'Have sex with Vitek', handler: (st: GameState) => {
    if (((s as any).shgopsex_vitya_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Vitek says, "Sorry, <<$pcs_nickname>>, I can't fuck you more today."
      scene.text(`Vitek says, "Sorry, ${((s as any).pcs_nickname || '')}, I can't fuck you more today."`);
      scene.actions([
        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      (s as any).gopsex_n_npc = 2;
      (s as any).shgopsex_vitya_day = ((s as any).daystart ?? 0);
      (s as any).shgopsex_vitya_count = ((s as any).shgopsex_vitya_count ?? 0) - (1);
      if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A9'] = 1;
      qspCall(s, 'npcStat', 'A9');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsex(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  qspCall(s, 'willpower', 'sex', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['vasilyhome', 'livingroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have sex with  [+func(\'gopsex\', \'hide\', \'Shulga_var_name\'...]', handler: (st: GameState) => {
    if (((s as any).shgopsex_vasya_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Vasily said, "<<$pcs_nickname>>, you fucked with me already. It's enough fun for...
      scene.text(`Vasily said, "${((s as any).pcs_nickname || '')}, you fucked with me already. It's enough fun for today, don't bother."`);
      scene.actions([
        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      (s as any).gopsex_n_npc = 1;
      (s as any).shgopsex_vasya_day = ((s as any).daystart ?? 0);
      (s as any).shgopsex_vasya_count = ((s as any).shgopsex_vasya_count ?? 0) - (1);
      if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A11'] = 1;
      qspCall(s, 'npcStat', 'A11');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsex(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterShgopsex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== 'cont') {
    // TODO-QSP: dynamic text: "So <<$npcdesc>>, do you want to have fun with me?" You lick your lips sensually...
    scene.text(`"So ${((s as any).npcdesc || '')}, do you want to have fun with me?" You lick your lips sensually and ask him: "What can I do for you?"`);
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('<font color = red><b>You warn him that you\'re on your period, so your pussy is off-limits!</b></font>');
    } else {
      if (((s as any).mesec ?? 0) <= 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        scene.text('<font color = red><b>You tell him that you want to save your virginity so your pussy is available only for eating.</b></font>');
      }
    }
  }
  if (((s as any).pcs_throat ?? 0) >= 20) {
    scene.actions([
      { label: 'Deep Throat', goto: ['gopsex', 'shgopsex_throat'] },
    ]);
  }
  if (((s as any).mesec ?? 0) <= 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: 'Sex', goto: ['gopsex', 'shgopsex_vag'] },
    ]);
  }
  if (((s as any).mesec ?? 0) <= 0) {
    scene.actions([
      { label: 'Sixty nine', goto: ['gopsex', 'shgopsex_69'] },
      { label: 'Cunnilingus', goto: ['gopsex', 'shgopsex_lick'] },
    ]);
  }
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['vasilyhome', 'livingroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Hand job', goto: ['gopsex', 'shgopsex_hj'] },
    { label: 'Blow job', goto: ['gopsex', 'shgopsex_bj'] },
    { label: 'Anal sex', goto: ['gopsex', 'shgopsex_anal'] },
    { label: 'Grope boobs', goto: ['gopsex', 'shgopsex_tits'] },
  ]);
  scene.build();
}

function enterShgopsexEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).sh_bjandhj_cum ?? 0) >= 1) {
    scene.actions([
      { label: 'In your mouth', goto: ['gopsex', 'hide', '\'shgopsex_swallow\''] },
      { label: 'On your face', goto: ['gopsex', 'hide', '\'shgopsex_cumface\''] },
      { label: 'On your body', goto: ['gopsex', 'hide', '\'shgopsex_cumbelly\''] },
    ]);
  } else {
    if (((s as any).sh_bjandhj_cum ?? 0) <= 0) {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
        scene.actions([
          { label: 'In your pussy', goto: ['gopsex', 'hide', '\'shgopsex_cumvag\''] },
        ]);
      }
      scene.actions([
        { label: 'In your mouth', goto: ['gopsex', 'hide', '\'shgopsex_swallow\''] },
        { label: 'On your face', goto: ['gopsex', 'hide', '\'shgopsex_cumface\''] },
        { label: 'On your body', goto: ['gopsex', 'hide', '\'shgopsex_cumbelly\''] },
        { label: 'In your butt', goto: ['gopsex', 'hide', '\'shgopsex_cumanal\''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShgopsexLick(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).gopsex_n_npc ?? 0) === 1) {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
      // TODO-QSP: dynamic text: <<$pcs_nickname>>, you are a <<$gnikname>>. It's unpleasant for me to lick the c...
      scene.text(`${((s as any).pcs_nickname || '')}, you are a ${((s as any).gnikname || '')}. It's unpleasant for me to lick the cunt of such a girl. God knows how many cocks you have got there today. So go ahead, expose your whorish holes! I'm going to fuck you.`);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 5) + 3);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/lick/lick\' + rand(1, 11) + \'.jpg');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cun']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if (((s as any).gopsex_n_npc ?? 0) === 2) {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
      // TODO-QSP: dynamic text: <<$pcs_nickname>>, you are a <<$gnikname>>. It's unpleasant for me to lick the c...
      scene.text(`${((s as any).pcs_nickname || '')}, you are a ${((s as any).gnikname || '')}. It's unpleasant for me to lick the cunt of such a girl. God knows how many cocks you have got there today. So go ahead, show me better your whorish holes!`);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 5) + 3);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/lick/lick\' + rand(1, 11) + \'.jpg');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cun']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if ((!((s as any).gopsex_n_npc ?? 0))) {
    scene.text('"Dan, lick my pussy, please." You ask sweetly.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, aren't you screwy to ask me to do such stuff?"
    scene.text(`"${((s as any).pcs_nickname || '')}, aren't you screwy to ask me to do such stuff?"`);
    scene.text('"And what\'s wrong with that? Are you ashamed to do me nicely?"');
    scene.text('"Yes, it\'s unpleasant for me to lick cunt of a slut. God knows how many cocks you have got there today… So come on! Don\'t fuck with me… Expose your whorish holes! I\'m going to fuck you."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
  ]);
  scene.build();
}

function enterShgopsex_69(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).gopsex_n_npc ?? 0) >= 1) {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
      // TODO-QSP: dynamic text: <<$pcs_nickname>>, you are a <<$gnikname>>. It's unpleasant for me to lick the c...
      scene.text(`${((s as any).pcs_nickname || '')}, you are a ${((s as any).gnikname || '')}. It's unpleasant for me to lick the cunt of such a girl. God knows how many cocks you have got there today. So go ahead, show me better your whorish holes!`);
      scene.actions([
        { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        qspCall(s, 'arousal', 'bj', 5);
        qspCall(s, 'arousal', 'cuni', (-5));
        (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
        (s as any).sh_bjandhj_cum = 1;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/lick/69_\' + rand(1, 3) + \'.jpg');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_69']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).shgopsex_count ?? 0) > 0) {
          scene.actions([
            { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
          ]);
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } else {
    if ((!((s as any).gopsex_n_npc ?? 0))) {
      // TODO-QSP: dynamic text: - "No, <<$pcs_nickname>>, I won't lick your pussy!"
      scene.text(`- "No, ${((s as any).pcs_nickname || '')}, I won't lick your pussy!"`);
      scene.actions([
        { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShgopsexTits(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 1);
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/tits/tits\' + rand(1, 6) + \'.jpg');
  // TODO-QSP: dynamic text: "Well, <<$npcdesc>>, do you like my boobies' ' + func('gopsex', 'hide', 'gop_tex...
  scene.text(`"Well, ${((s as any).npcdesc || '')}, do you like my boobies' ' + func('gopsex', 'hide', 'gop_text3') + '?"`);
  // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>, you've got awesome tits!"
  scene.text(`"Yes, ${((s as any).pcs_nickname || '')}, you've got awesome tits!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck boobs', goto: ['gopsex', 'hide', '\'shgopsex_eattits\''] },
    { label: 'Titty fuck', goto: ['gopsex', 'hide', '\'shgopsex_fucktits\''] },
    { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
  ]);
  scene.build();
}

function enterShgopsexHj(s: GameState, scene: SceneBuilder): void {
  (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
  (s as any).sh_bjandhj_cum = 1;
  qspCall(s, 'arousal', 'hj', Math.floor(Math.random() * 5) + 3);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/hj\' + rand(1, 12) + \'.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_hj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shgopsex_count ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont']; enterShgopsex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterShgopsexBj(s: GameState, scene: SceneBuilder): void {
  (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
  (s as any).sh_bjandhj_cum = 1;
  qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 5) + 3);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/oral/bj\' + rand(1, 25) + \'.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_bj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shgopsex_count ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont']; enterShgopsex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterShgopsexThroat(s: GameState, scene: SceneBuilder): void {
  (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
  (s as any).sh_bjandhj_cum = 1;
  qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 5) + 3, 'deepthroat');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/oral/throat\' + rand(1, 15) + \'.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_bjt']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shgopsex_count ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont']; enterShgopsex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterShgopsexVag(s: GameState, scene: SceneBuilder): void {
  (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
  (s as any).sh_bjandhj_cum = 0;
  qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 5) + 3);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/pussy/dog\' + rand(1, 20) + \'.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgDevstDeflor(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_doggy']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shgopsex_count ?? 0) > 0) {
    scene.actions([
      { label: 'Change position: missionary', goto: ['gopsex', 'hide', '\'shgopsex_vag1\''] },
      { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', '\'shgopsex_vag2\''] },
      { label: 'Change position: screw sex', goto: ['gopsex', 'hide', '\'shgopsex_vag3\''] },
      { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterShgopsexAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
  (s as any).sh_bjandhj_cum = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/dog\' + rand(1, 20) + \'.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 5) + 3);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_doggy_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shgopsex_count ?? 0) > 0) {
    scene.actions([
      { label: 'Change position: missionary', goto: ['gopsex', 'hide', '\'shgopsex_anal1\''] },
      { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', '\'shgopsex_anal2\''] },
      { label: 'Change position: screw sex', goto: ['gopsex', 'hide', '\'shgopsex_anal3\''] },
      { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterShgopsexGroup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A9', '3');
  qspCall(s, 'npcStat', 'A10', '1');
  qspCall(s, 'npcStat', 'A11', '2');
  if (((s as any).locArgs?.[1] ?? 0) !== 'cont') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'group_sex_text']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).mesec ?? 0) > 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.text('<font color = red><b>You warn them that you\'re on your period, so your pussy is off-limits!</b></font>');
    } else {
      if (((s as any).mesec ?? 0) <= 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        scene.text('<font color = red><b>You remind them that you want to preserve your virginity, so your pussy is not available for play!</b></font>');
      }
    }
  }
  if (((s as any).stat ?? 0)?.['bj'] >= 50) {
    scene.actions([
      { label: 'Suck all at once', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'hide', 'group_sex_start');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_bja'] },
    ]);
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).mesec ?? 0) <= 0) {
    scene.actions([
      { label: 'The pussy', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'hide', 'group_sex_start');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_vag'] },
    ]);
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).mesec ?? 0) <= 0) {
    scene.actions([
      { label: 'In the pussy and ass', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'hide', 'group_sex_start');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_dp'] },
    ]);
  }
  if (((s as any).pcs_ass ?? 0) >= 20) {
    scene.actions([
      { label: 'Two cocks in the ass', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'hide', 'group_sex_start');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_twoanal'] },
    ]);
  }
  if (((s as any).pcs_ass ?? 0) >= 30) {
    scene.actions([
      { label: 'Three cocks in the ass', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'hide', 'group_sex_start');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_tripleanal'] },
    ]);
  }
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['vasilyhome', 'livingroom'] },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck one by one', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'hide', 'group_sex_start');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_bj'] },
    { label: 'In the ass', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'hide', 'group_sex_start');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_anal'] },
  ]);
  scene.build();
}

function enterHide(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'ind_stamina_groupnpc') {
    (s as any).sh_ind = ((s as any).shgopsex_group_count ?? 0);
    if (((s as any).sh_ind ?? 0) === 5) {
    }
    if (((s as any).sh_ind ?? 0) === 4) {
    }
    if (((s as any).sh_ind ?? 0) === 3) {
    }
    if (((s as any).sh_ind ?? 0) === 2) {
    }
    if (((s as any).sh_ind ?? 0) === 1) {
    }
    if (((s as any).sh_ind ?? 0) <= 0) {
    }
    // TODO-QSP: dynamic text: <center>The ' + func('gopsex', 'hide', 'gop_text_npcr') + ' are ' + func('gopsex...
    scene.text(`<center>The ' + func('gopsex', 'hide', 'gop_text_npcr') + ' are ' + func('gopsex', 'hide', 'gop_sextext3') + ' you, their endurance: ${((s as any).ind_npc || '')}</center>`);
    // TODO-QSP: end & !! ---- ind_stamina_groupnpc ------
    if (((s as any).locArgs?.[1] ?? 0) === 'ind_stamina_npc') {
      (s as any).sh_ind = ((s as any).shgopsex_count ?? 0);
      if (((s as any).sh_ind ?? 0) === 7) {
      }
      if (((s as any).sh_ind ?? 0) === 6) {
      }
      if (((s as any).sh_ind ?? 0) === 5) {
      }
      if (((s as any).sh_ind ?? 0) === 4) {
      }
      if (((s as any).sh_ind ?? 0) === 3) {
      }
      if (((s as any).sh_ind ?? 0) === 2) {
      }
      if (((s as any).sh_ind ?? 0) === 1) {
      }
      if (((s as any).sh_ind ?? 0) <= 0) {
      }
      // TODO-QSP: dynamic text: <center>You have sex with <<$npcdesc>>, his stamina: <<$ind_npc>></center>
      scene.text(`<center>You have sex with ${((s as any).npcdesc || '')}, his stamina: ${((s as any).ind_npc || '')}</center>`);
      // TODO-QSP: end & !! --- ind_stamina_npc ---
      if (((s as any).locArgs?.[1] ?? 0) === 'npc_orgasm') {
        if ((!((s as any).shgopsex_count ?? 0))) {
          (s as any).npc_orgasm_txt = Math.floor(Math.random() * 5) + 1;
          if (((s as any).npc_orgasm_txt ?? 0) === 1) {
            // TODO-QSP: dynamic text: "Oh shit, <<$pcs_nickname>>, I can't hold it any longer. I'll finish right now!"...
            scene.text(`"Oh shit, ${((s as any).pcs_nickname || '')}, I can't hold it any longer. I'll finish right now!" ${((s as any).npcdesc || '')} warns you.`);
          }
          if (((s as any).npc_orgasm_txt ?? 0) === 2) {
            // TODO-QSP: dynamic text: <<$npcdesc>> warns you, "<<$pcs_nickname>>, I'm going to cum right now, finish!"
            scene.text(`${((s as any).npcdesc || '')} warns you, "${((s as any).pcs_nickname || '')}, I'm going to cum right now, finish!"`);
          }
          if (((s as any).npc_orgasm_txt ?? 0) === 3) {
            // TODO-QSP: dynamic text: <<$npcdesc>>, "So <<$pcs_nickname>>, where should I offload my cum? It doesn't m...
            scene.text(`${((s as any).npcdesc || '')}, "So ${((s as any).pcs_nickname || '')}, where should I offload my cum? It doesn't matter? Well, I'll choose myself!"`);
          }
          if (((s as any).npc_orgasm_txt ?? 0) === 4) {
            // TODO-QSP: dynamic text: "I'm ready to finish! <<$pcs_nickname>>, where do you want my semen? You don't k...
            scene.text(`"I'm ready to finish! ${((s as any).pcs_nickname || '')}, where do you want my semen? You don't know? Well, I'll choose myself!"`);
          }
          if (((s as any).npc_orgasm_txt ?? 0) === 5) {
            // TODO-QSP: dynamic text: <<$npcdesc>> tells you, "<<$pcs_nickname>>, I'm on the top. I'll cum soon!"
            scene.text(`${((s as any).npcdesc || '')} tells you, "${((s as any).pcs_nickname || '')}, I'm on the top. I'll cum soon!"`);
          }
        }
        // TODO-QSP: end & !! --- npc_orgasm ---
        if (((s as any).locArgs?.[1] ?? 0) === 'gop_sex_analPlugIn') {
          if (((s as any).analPlugIn ?? 0) === 1) {
            (s as any).analPlugIn = 0;
            (s as any).analPlugOut = 1;
            // TODO-QSP: dynamic text: "What?! Do you have a buttplug in your ass?" <<$npcdesc>> asks in surprise.
            scene.text(`"What?! Do you have a buttplug in your ass?" ${((s as any).npcdesc || '')} asks in surprise.`);
            scene.text('"Aha, you are loosening your anus."');
            scene.text('"That\'s great, but it\'s in the way right now." He comments and pulls the plug out from your ass.<br>');
          }
          // TODO-QSP: end & !! --- gop_sex_analPlugIn ---
          if (((s as any).locArgs?.[1] ?? 0) === 'group_sex_start') {
            if (((s as any).shgopsex_gr_day ?? 0) !== ((s as any).daystart ?? 0)) {
              if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
            }
            (s as any).shgopsex_gr_day = ((s as any).daystart ?? 0);
            (s as any).shgopsex_gr_count = ((s as any).shgopsex_gr_count ?? 0) - (1);
            if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A9'] = 1;
            if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A10'] = 1;
            if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A11'] = 1;
            // TODO-QSP: end & !! --- group_sex_start ---
            if (((s as any).locArgs?.[1] ?? 0) === 'gop_sex_lubri') {
              if ((!((s as any).gop_sex_lubri ?? 0))) {
                if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
                  if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
                  if (((s as any).agape ?? 0) > 1) {
                    (s as any).agape = 1;
                  }
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
                  (s as any).gop_sex_lubri = 1;
                } else {
                  if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
                    if (((s as any).agape ?? 0) > 2) {
                      (s as any).agape = 2;
                    }
                    (s as any).pcs_horny = 0;
                  }
                }
              }
              // TODO-QSP: end & !! --- gop_sex_lubri ---
              if (((s as any).locArgs?.[1] ?? 0) === 'gop_groupsex_analPlugIn') {
                if (((s as any).analPlugIn ?? 0) === 1) {
                  (s as any).analPlugIn = 0;
                  (s as any).analPlugOut = 1;
                  // TODO-QSP: dynamic text: "What?! Do you have a buttplug in your ass?" ' + func('gopsex', 'hide', 'gop_nam...
                  scene.text('"What?! Do you have a buttplug in your ass?" \' + func(\'gopsex\', \'hide\', \'gop_name_npc\') + \' asks in surprise.');
                  scene.text('"Aha, you are loosening your anus."');
                  scene.text('"That\'s great, but it\'s in the way right now." He comments and pulls the plug out from your ass.<br>');
                }
                // TODO-QSP: end & !! --- gop_groupsex_analPlugIn ---
                if (((s as any).locArgs?.[1] ?? 0) === 'gop_groupsex_lubri') {
                  if ((!((s as any).gop_groupsex_lubri ?? 0))) {
                    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
                      if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
                      if (((s as any).agape ?? 0) > 1) {
                        (s as any).agape = 1;
                      }
                      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
                      (s as any).gop_groupsex_lubri = 1;
                    } else {
                      if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
                        if (((s as any).agape ?? 0) > 2) {
                          (s as any).agape = 2;
                        }
                        (s as any).pcs_horny = 0;
                      }
                    }
                  }
                  // TODO-QSP: end & !! --- gop_groupsex_lubri ---
                  if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_vag1') {
                    (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 5) + 3);
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/pussy/miss\' + rand(1, 20) + \'.jpg');
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_miss']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                    if (((s as any).shgopsex_count ?? 0) > 0) {
                      scene.actions([
                        { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_vag'] },
                        { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', '\'shgopsex_vag2\''] },
                        { label: 'Change position: screw sex', goto: ['gopsex', 'hide', '\'shgopsex_vag3\''] },
                        { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
                      ]);
                    } else {
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                    }
                    qspCall(s, 'stat', '');
                    // TODO-QSP: end & !! --- shgopsex_vag1 ---
                    if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_vag2') {
                      (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                      qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 5) + 3);
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/pussy/cow\' + rand(1, 20) + \'.jpg');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cow']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                      if (((s as any).shgopsex_count ?? 0) > 0) {
                        scene.actions([
                          { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_vag'] },
                          { label: 'Change position: missionary', goto: ['gopsex', 'hide', '\'shgopsex_vag1\''] },
                          { label: 'Change position: screw sex', goto: ['gopsex', 'hide', '\'shgopsex_vag3\''] },
                          { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
                        ]);
                      } else {
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                      }
                      qspCall(s, 'stat', '');
                      // TODO-QSP: end & !! --- shgopsex_vag2 ---
                      if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_vag3') {
                        (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                        qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 5) + 3);
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                        scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/pussy/bok\' + rand(1, 3) + \'.jpg');
                        scene.text('screw sex');
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                        if (((s as any).shgopsex_count ?? 0) > 0) {
                          scene.actions([
                            { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_vag'] },
                            { label: 'Change position: missionary', goto: ['gopsex', 'hide', '\'shgopsex_vag1\''] },
                            { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', '\'shgopsex_vag2\''] },
                            { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
                          ]);
                        } else {
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                        }
                        qspCall(s, 'stat', '');
                        // TODO-QSP: end & !! --- shgopsex_vag3 ---
                        if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_anal1') {
                          (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/miss\' + rand(1, 20) + \'.jpg');
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_miss_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 5) + 3);
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          if (((s as any).shgopsex_count ?? 0) > 0) {
                            scene.actions([
                              { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_anal'] },
                              { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', '\'shgopsex_anal2\''] },
                              { label: 'Change position: screw sex', goto: ['gopsex', 'hide', '\'shgopsex_anal3\''] },
                              { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
                            ]);
                          } else {
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                          }
                          qspCall(s, 'stat', '');
                          // TODO-QSP: end & !! --- shgopsex_anal1 ---
                          if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_anal2') {
                            (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/cow\' + rand(1, 20) + \'.jpg');
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cow_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 5) + 3);
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            if (((s as any).shgopsex_count ?? 0) > 0) {
                              scene.actions([
                                { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_anal'] },
                                { label: 'Change position: missionary', goto: ['gopsex', 'hide', '\'shgopsex_anal1\''] },
                                { label: 'Change position: screw sex', goto: ['gopsex', 'hide', '\'shgopsex_anal3\''] },
                                { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
                              ]);
                            } else {
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                            }
                            qspCall(s, 'stat', '');
                            // TODO-QSP: end & !! --- shgopsex_anal2 ---
                            if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_anal3') {
                              (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                              scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/bok\' + rand(1, 9) + \'.jpg');
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                              qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 5) + 3);
                              scene.text('On the side');
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                              if (((s as any).shgopsex_count ?? 0) > 0) {
                                scene.actions([
                                  { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_anal'] },
                                  { label: 'Change position: missionary', goto: ['gopsex', 'hide', '\'shgopsex_anal1\''] },
                                  { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', '\'shgopsex_anal2\''] },
                                  { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
                                ]);
                              } else {
                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                              }
                              qspCall(s, 'stat', '');
                              // TODO-QSP: end & !! --- shgopsex_anal3 ---
                              if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_eattits') {
                                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                                (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 1);
                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/tits/eat\' + rand(1, 2) + \'.jpg');
                                // TODO-QSP: dynamic text: <<$npcdesc>> is nibbling on your nipples.
                                scene.text(`${((s as any).npcdesc || '')} is nibbling on your nipples.`);
                                // TODO-QSP: end & !! --- shgopsex_eattits ---
                                if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_fucktits') {
                                  (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                                  (s as any).sh_bjandhj_cum = 1;
                                  qspCall(s, 'arousal', 'breasts', Math.floor(Math.random() * 5) + 3);
                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/tits/tj\' + rand(1, 9) + \'.jpg');
                                  // TODO-QSP: dynamic text: <<$npcdesc>> wants to tittyfuck you, and you don't mind.
                                  scene.text(`${((s as any).npcdesc || '')} wants to tittyfuck you, and you don't mind.`);
                                  if (((s as any).shgopsex_count ?? 0) > 0) {
                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont']; enterShgopsex(s, scene); (s as any).locArgs = __savedLocArgs; }
                                  } else {
                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                                  }
                                  qspCall(s, 'stat', '');
                                  // TODO-QSP: end & !! --- shgopsex_fucktits ---
                                  if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_swallow') {
                                    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 1);
                                    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
                                    scene.img('images/pc/body/cum/swallow/swallow\' + rand(1, 19) + \'.jpg');
                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                    qspCall(s, 'stat', '');
                                    // TODO-QSP: end & !! --- shgopsex_swallow ---
                                    if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_cumface') {
                                      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 1);
                                      qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                      if (((s as any).pcs_haircol ?? 0) < 4) {
                                        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/pc/body/cum/cumface/<<$pcs_haircolor>>/' ...
                                        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/pc/body/cum/cumface/${((s as any).pcs_haircolor || '')}/' + rand(1, 19) + '.jpg"></center>`);
                                      }
                                      if (((s as any).pcs_haircol ?? 0) > 3) {
                                        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/pc/body/cum/cumface/custom/' + rand(1, 19...
                                        scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/pc/body/cum/cumface/custom/' + rand(1, 19) + '.jpg"></center>`);
                                      }
                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumface']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                      qspCall(s, 'stat', '');
                                      // TODO-QSP: end & !! --- shgopsex_cumface ---
                                      if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_cumbelly') {
                                        (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 1);
                                        qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
                                        scene.img('images/pc/body/cum/cumbelly/cumbelly\' + rand(1, 13) + \'.jpg');
                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumbody']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                        qspCall(s, 'stat', '');
                                        // TODO-QSP: end & !! --- shgopsex_cumbelly ---
                                        if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_cumvag') {
                                          (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 1);
                                          qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
                                          scene.img('images/pc/body/cum/creampie/cumpussy\' + rand(1, 17) + \'.jpg');
                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumvag']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                          qspCall(s, 'stat', '');
                                          // TODO-QSP: end & !! --- shgopsex_cumvag ---
                                          if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_cumanal') {
                                            (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 1);
                                            qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1);
                                            scene.img('images/pc/body/cum/cumanal/cumanal\' + rand(1, 11) + \'.jpg');
                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumass']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                            qspCall(s, 'stat', '');
                                            // TODO-QSP: end & !! --- shgopsex_cumanal ---
                                            if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_end') {
                                              if (((s as any).sh_bjandhj_cum ?? 0) >= 1) {
                                                scene.actions([
                                                  { label: 'In your mouth', goto: ['gopsex', 'hide', '\'shgopsex_group_swallow\''] },
                                                  { label: 'On your face', goto: ['gopsex', 'hide', '\'shgopsex_group_cumface\''] },
                                                  { label: 'On your body', goto: ['gopsex', 'hide', '\'shgopsex_group_cumbelly\''] },
                                                ]);
                                              } else {
                                                if (((s as any).sh_bjandhj_cum ?? 0) <= 0) {
                                                  scene.actions([
                                                    { label: 'In your mouth', goto: ['gopsex', 'hide', '\'shgopsex_group_swallow\''] },
                                                    { label: 'On your face', goto: ['gopsex', 'hide', '\'shgopsex_group_cumface\''] },
                                                    { label: 'On your body', goto: ['gopsex', 'hide', '\'shgopsex_group_cumbelly\''] },
                                                    { label: 'On your pussy', goto: ['gopsex', 'hide', '\'shgopsex_group_cumvag\''] },
                                                    { label: 'On your ass', goto: ['gopsex', 'hide', '\'shgopsex_group_cumanal\''] },
                                                  ]);
                                                }
                                              }
                                              qspCall(s, 'stat', '');
                                              // TODO-QSP: end & !! --- shgopsex_group_end ---
                                              if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_bj') {
                                                (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                (s as any).sh_bjandhj_cum = 1;
                                                // TODO-QSP: gs 'arousal', 'bj', rand(1, 5), $npcID[3], 'group', 'gangbang'
                                                // TODO-QSP: gs 'arousal', 'bj', rand(1, 5), $npcID[1], 'group', 'gangbang'
                                                // TODO-QSP: gs 'arousal', 'bj', rand(1, 5), $npcID[2], 'group', 'gangbang'
                                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/oral/bj\' + rand(1, 3) + \'.jpg');
                                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_bj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                }
                                                qspCall(s, 'stat', '');
                                                // TODO-QSP: end & !! --- shgopsex_group_bj ---
                                                if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_bja') {
                                                  (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                  (s as any).sh_bjandhj_cum = 1;
                                                  // TODO-QSP: gs 'arousal', 'bj', rand(1, 4), $npcID[3], 'group', 'gangbang'
                                                  // TODO-QSP: gs 'arousal', 'bj', rand(1, 4), $npcID[1], 'group', 'gangbang'
                                                  // TODO-QSP: gs 'arousal', 'bj', rand(1, 4), $npcID[2], 'group', 'gangbang'
                                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/oral/bja\' + rand(1, 25) + \'.jpg');
                                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_bjall']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                  if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                  }
                                                  qspCall(s, 'stat', '');
                                                  // TODO-QSP: end & !! --- shgopsex_group_bja ---
                                                  if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_vag') {
                                                    (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                    (s as any).sh_bjandhj_cum = 0;
                                                    // TODO-QSP: gs 'arousal', 'vaginal', rand(10, 15), $npcID[1], 'group', 'gangbang'
                                                    // TODO-QSP: gs 'arousal', 'hj', -5, $npcID[2], 'group', 'gangbang'
                                                    // TODO-QSP: gs 'arousal', 'bj', -5, $npcID[3], 'group', 'gangbang'
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/vag\' + rand(1, 25) + \'.jpg');
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_vag']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    }
                                                    qspCall(s, 'stat', '');
                                                    // TODO-QSP: end & !! --- shgopsex_group_vag ---
                                                    if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_anal') {
                                                      (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                      (s as any).sh_bjandhj_cum = 0;
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/anal\' + rand(1, 18) + \'.jpg');
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      // TODO-QSP: gs 'arousal', 'anal', rand(10, 15), $npcID[2], 'group', 'gangbang'
                                                      // TODO-QSP: gs 'arousal', 'anal', -5, $npcID[3], 'group', 'gangbang'
                                                      // TODO-QSP: gs 'arousal', 'anal', -5, $npcID[1], 'group', 'gangbang'
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      }
                                                      qspCall(s, 'stat', '');
                                                      // TODO-QSP: end & !! --- shgopsex_group_anal ---
                                                      if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_dp') {
                                                        (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                        (s as any).sh_bjandhj_cum = 0;
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/dp\' + rand(1, 30) + \'.jpg');
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_dp']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        // TODO-QSP: gs 'arousal', 'vaginal', rand(7, 15), $npcID[3], 'group', 'gangbang'
                                                        // TODO-QSP: gs 'arousal', 'anal', -rand(7, 15), $npcID[2], 'group', 'gangbang'
                                                        // TODO-QSP: gs 'arousal', 'bj', -5, $npcID[1], 'group', 'gangbang'
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        }
                                                        qspCall(s, 'stat', '');
                                                        // TODO-QSP: end & !! --- shgopsex_group_dp ---
                                                        if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_twoanal') {
                                                          (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                          (s as any).sh_bjandhj_cum = 0;
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/dpa\' + rand(1, 10) + \'.jpg');
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_dpa']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          // TODO-QSP: gs 'arousal', 'anal', rand(7, 15), $npcID[2], 'group', 'gangbang'
                                                          // TODO-QSP: gs 'arousal', 'anal', rand(7, 15), $npcID[1], 'group', 'gangbang'
                                                          // TODO-QSP: gs 'arousal', 'hj', -6, $npcID[3], 'group', 'gangbang'
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          }
                                                          qspCall(s, 'stat', '');
                                                          // TODO-QSP: end & !! --- shgopsex_group_twoanal ---
                                                          if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_tripleanal') {
                                                            (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                            (s as any).sh_bjandhj_cum = 0;
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/triple\' + rand(1, 4) + \'.jpg');
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_triple']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            // TODO-QSP: gs 'arousal', 'anal', rand(4, 6), $npcID[1], 'group', 'gangbang'
                                                            // TODO-QSP: gs 'arousal', 'anal', rand(4, 6), $npcID[3], 'group', 'gangbang'
                                                            // TODO-QSP: gs 'arousal', 'anal', rand(4, 6), $npcID[2], 'group', 'gangbang'
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            }
                                                            qspCall(s, 'stat', '');
                                                            // TODO-QSP: end & !! --- shgopsex_group_tripleanal ---
                                                            if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_cumface') {
                                                              (s as any).pcs_hairbsh = 0;
                                                              (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
                                                              (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                              qspCall(s, 'npcStat', 'A<<O mod 12>>');
                                                              qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                                              qspCall(s, 'npcStat', 'A<<(O/12) mod 12>>');
                                                              qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                                              qspCall(s, 'npcStat', 'A<<O/144>>');
                                                              qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
                                                              scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/cumface\' + rand(1, 16) + \'.jpg');
                                                              // TODO-QSP: dynamic text: The ' + func('gopsex', 'hide', 'gop_text_npcr') + ' spray their cum all over you...
                                                              scene.text('The \' + func(\'gopsex\', \'hide\', \'gop_text_npcr\') + \' spray their cum all over your face');
                                                              qspCall(s, 'arousal', 'end');
                                                              qspCall(s, 'stat', '');
                                                              // TODO-QSP: end & !! --- shgopsex_group_cumface ---
                                                              if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_swallow') {
                                                                (s as any).pcs_hairbsh = 0;
                                                                (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
                                                                (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                                qspCall(s, 'npcStat', 'A<<O mod 12>>');
                                                                qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
                                                                qspCall(s, 'npcStat', 'A<<(O/12) mod 12>>');
                                                                qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
                                                                qspCall(s, 'npcStat', 'A<<O/144>>');
                                                                qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                                                qspCall(s, 'stat', '');
                                                                scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/swallow\' + rand(1, 11) + \'.jpg');
                                                                // TODO-QSP: dynamic text: One by one the ' + func('gopsex', 'hide', 'gop_text_npcr') + ' cum their semen i...
                                                                scene.text('One by one the \' + func(\'gopsex\', \'hide\', \'gop_text_npcr\') + \' cum their semen into your mouth and you swallow it all.');
                                                                qspCall(s, 'arousal', 'end');
                                                                // TODO-QSP: end & !! --- shgopsex_group_swallow ---
                                                                if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_cumbelly') {
                                                                  (s as any).pcs_hairbsh = 0;
                                                                  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
                                                                  (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                                  qspCall(s, 'npcStat', 'A<<O mod 12>>');
                                                                  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
                                                                  qspCall(s, 'npcStat', 'A<<(O/12) mod 12>>');
                                                                  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
                                                                  qspCall(s, 'npcStat', 'A<<O/144>>');
                                                                  qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
                                                                  qspCall(s, 'arousal', 'end');
                                                                  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/cumbody\' + rand(1, 15) + \'.jpg');
                                                                  // TODO-QSP: dynamic text: The ' + func('gopsex', 'hide', 'gop_text_npcr') + ' come, squirting their hot st...
                                                                  scene.text('The \' + func(\'gopsex\', \'hide\', \'gop_text_npcr\') + \' come, squirting their hot sticky cum all over your body.');
                                                                  // TODO-QSP: end & !! --- shgopsex_group_cumbelly ---
                                                                  if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_cumvag') {
                                                                    (s as any).pcs_hairbsh = 0;
                                                                    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
                                                                    (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                                    qspCall(s, 'npcStat', 'A<<O mod 12>>');
                                                                    qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0), 1);
                                                                    qspCall(s, 'npcStat', 'A<<(O/12) mod 12>>');
                                                                    qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0), 1);
                                                                    qspCall(s, 'npcStat', 'A<<O/144>>');
                                                                    qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
                                                                    qspCall(s, 'arousal', 'end');
                                                                    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/cumvag\' + rand(1, 4) + \'.jpg');
                                                                    // TODO-QSP: dynamic text: One by one the ' + func('gopsex', 'hide', 'gop_text_npcr') + ' take their turns ...
                                                                    scene.text('One by one the \' + func(\'gopsex\', \'hide\', \'gop_text_npcr\') + \' take their turns and shot their hot cum onto your pussy.');
                                                                    // TODO-QSP: end & !! --- shgopsex_group_cumvag ---
                                                                    if (((s as any).locArgs?.[1] ?? 0) === 'shgopsex_group_cumanal') {
                                                                      (s as any).pcs_hairbsh = 0;
                                                                      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
                                                                      (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                                      qspCall(s, 'npcStat', 'A<<O mod 12>>');
                                                                      qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1);
                                                                      qspCall(s, 'npcStat', 'A<<(O/12) mod 12>>');
                                                                      qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
                                                                      qspCall(s, 'npcStat', 'A<<O/144>>');
                                                                      qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
                                                                      qspCall(s, 'arousal', 'end');
                                                                      scene.img('images/pc/body/cum/cumass/cumass\' + rand(1, 19) + \'.jpg');
                                                                      // TODO-QSP: dynamic text: One by one the ' + func('gopsex', 'hide', 'gop_text_npcr') + ' take their turns ...
                                                                      scene.text('One by one the \' + func(\'gopsex\', \'hide\', \'gop_text_npcr\') + \' take their turns and cover your asshole with their sperm.');
                                                                      // TODO-QSP: end & !! --- shgopsex_group_cumanal ---
                                                                      if (((s as any).locArgs?.[1] ?? 0) === 'accview_ggsex') {
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 9) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 15) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 10) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 14) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 15) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 14) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 10) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 14) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 7) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 14) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 10) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 14) {
                                                                        }
                                                                        if ((Math.floor(Math.random() * 2) + 0) === 1) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 6) + 1;
                                                                        if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          if ((!(Math.floor(Math.random() * 2) + 0))) {
                                                                          }
                                                                        } else {
                                                                          if (((s as any).momslut ?? 0) >= 1) {
                                                                          } else {
                                                                            if (((s as any).pcs_vag ?? 0) >= 30) {
                                                                            } else {
                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                              } else {
                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                } else {
                                                                                  if (((s as any).temp_rand ?? 0) === 3) {
                                                                                    // TODO-QSP: "It''s not my fault, the idea, to go here, occurred to the boys. As soon as they finish, I''ll come ...
                                                                                  } else {
                                                                                    if (((s as any).temp_rand ?? 0) === 4) {
                                                                                    } else {
                                                                                      if (((s as any).temp_rand ?? 0) === 5) {
                                                                                      } else {
                                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 4) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).momslut ?? 0) >= 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).momslut ?? 0) < 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).momslut ?? 0) >= 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).momslut ?? 0) < 1) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 13) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7  &&  ((s as any).evgenQW ?? 0) < 4) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7  &&  ((s as any).evgenQW ?? 0) >= 4) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 10) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          if ((!((s as any).motherKnowSpravka ?? 0))) {
                                                                            (s as any).motherKnowSpravka = 1;
                                                                          }
                                                                          if ((!((s as any).motherKnowWhore ?? 0))) {
                                                                            (s as any).motherKnowWhore = 1;
                                                                          }
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                          if (((s as any).brotherQW ?? 0)?.['know_slut'] < 2) {
                                                                            if (!(s as any).brotherQW) (s as any).brotherQW = {}; (s as any).brotherQW['know_slut'] = 2;
                                                                          }
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                        }
                                                                        (s as any).temp_rand = Math.floor(Math.random() * 101) + 0;
                                                                        if (((s as any).temp_rand ?? 0) < 50) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) >= 50  &&  ((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 5) {
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) >= 50  &&  ((s as any).hour ?? 0) >= 5  &&  ((s as any).hour ?? 0) <= 23) {
                                                                        }
                                                                        // TODO-QSP: dynamic text: <<$rnd_caughtgg_view>>
                                                                        scene.text(`${((s as any).rnd_caughtgg_view || '')}`);
                                                                        // TODO-QSP: end & !! --- accview_ggsex ---
                                                                        if (((s as any).locArgs?.[1] ?? 0) === 'gg_whore_text') {
                                                                          (s as any).temp_rand = Math.floor(Math.random() * 8) + 0;
                                                                          if ((!((s as any).temp_rand ?? 0))) {
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 2) {
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 3) {
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 4) {
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 5) {
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 6) {
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 7) {
                                                                          }
                                                                          // TODO-QSP: end & !! --- gg_whore_text ---
                                                                          if (((s as any).locArgs?.[1] ?? 0) === 'gop_gg_name') {
                                                                            (s as any).temp_rand = Math.floor(Math.random() * 31) + 0;
                                                                            if ((!((s as any).temp_rand ?? 0))) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 1) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 2) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 3) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 4) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 5) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 6) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 7) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 8) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 9) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 10) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 11) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 12) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 13) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 14) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 15) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 16) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 17) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 18) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 19) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 20) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 21) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 22) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 23) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 24) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 25) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 26) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 27) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 28) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 29) {
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 30) {
                                                                            }
                                                                            // TODO-QSP: end & !! --- gop_gg_name ---
                                                                            if (((s as any).locArgs?.[1] ?? 0) === 'gop_gg_name2') {
                                                                              (s as any).temp_rand = Math.floor(Math.random() * 11) + 1;
                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 2) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 3) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 4) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 5) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 6) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 7) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 8) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 9) {
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 10) {
                                                                              }
                                                                              // TODO-QSP: end & !! --- gop_gg_name2 ---
                                                                              if (((s as any).locArgs?.[1] ?? 0) === 'gop_text_npcr') {
                                                                                (s as any).temp_rand = Math.floor(Math.random() * 4) + 1;
                                                                                if (((s as any).temp_rand ?? 0) === 1) {
                                                                                }
                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                }
                                                                                if (((s as any).temp_rand ?? 0) === 3) {
                                                                                }
                                                                                if (((s as any).temp_rand ?? 0) === 4) {
                                                                                }
                                                                                // TODO-QSP: end & !! --- gop_text_npcr ---
                                                                                if (((s as any).locArgs?.[1] ?? 0) === 'gop_family_npc') {
                                                                                  (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
                                                                                  if (((s as any).temp_rand ?? 0) === 1) {
                                                                                  }
                                                                                  if (((s as any).temp_rand ?? 0) === 2) {
                                                                                  }
                                                                                  if (((s as any).temp_rand ?? 0) === 3) {
                                                                                  }
                                                                                  // TODO-QSP: end & !! --- gop_family_npc ---
                                                                                  if (((s as any).locArgs?.[1] ?? 0) === 'gop_sextext1') {
                                                                                    (s as any).temp_rand = Math.floor(Math.random() * 8) + 0;
                                                                                    if ((!((s as any).temp_rand ?? 0))) {
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 1) {
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 2) {
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 3) {
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 4) {
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 5) {
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 6) {
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 7) {
                                                                                    }
                                                                                    // TODO-QSP: end & !! --- gop_sextext1 ---
                                                                                    if (((s as any).locArgs?.[1] ?? 0) === 'gop_sextext2') {
                                                                                      (s as any).temp_rand = Math.floor(Math.random() * 8) + 0;
                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 2) {
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 3) {
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 4) {
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 5) {
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 6) {
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 7) {
                                                                                      }
                                                                                      // TODO-QSP: end & !! --- gop_sextext2 ---
                                                                                      if (((s as any).locArgs?.[1] ?? 0) === 'gop_sextext3') {
                                                                                        (s as any).temp_rand = Math.floor(Math.random() * 9) + 0;
                                                                                        if ((!((s as any).temp_rand ?? 0))) {
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                                        }
                                                                                        // TODO-QSP: end & !! --- gop_sextext3 ---
                                                                                        if (((s as any).locArgs?.[1] ?? 0) === 'gop_text3') {
                                                                                          (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
                                                                                          if ((!((s as any).temp_rand ?? 0))) {
                                                                                          }
                                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                                          }
                                                                                          if (((s as any).temp_rand ?? 0) === 2) {
                                                                                          }
                                                                                          if (((s as any).temp_rand ?? 0) === 3) {
                                                                                          }
                                                                                          if (((s as any).temp_rand ?? 0) === 4) {
                                                                                          }
                                                                                          // TODO-QSP: end & !! --- gop_text3 ---
                                                                                          if (((s as any).locArgs?.[1] ?? 0) === 'gop_name_npc') {
                                                                                            (s as any).dummyi = Math.floor(Math.random() * 3) + 0;
                                                                                            // TODO-QSP: $dummy[0] = 'A11'
                                                                                            // TODO-QSP: $dummy[1] = 'A9'
                                                                                            // TODO-QSP: $dummy[2] = 'A10'
                                                                                            // TODO-QSP: $dummy[0] = 'Vasily'
                                                                                            // TODO-QSP: $dummy[1] = 'Vitek'
                                                                                            // TODO-QSP: $dummy[2] = 'Dan'
                                                                                            // TODO-QSP: end & !! --- gop_name_npc ---
                                                                                            if (((s as any).locArgs?.[1] ?? 0) === 'gop_text_beer2') {
                                                                                              (s as any).dummyi = Math.floor(Math.random() * 10) + 0;
                                                                                              if ((!((s as any).dummyi ?? 0))) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 1) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 2) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 3) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 4) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 5) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 6) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 7) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 8) {
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 9) {
                                                                                              }
                                                                                              // TODO-QSP: end & !! --- gop_text_beer2 ----
                                                                                              if (((s as any).locArgs?.[1] ?? 0) === 'Shulga_var_name') {
                                                                                                // TODO-QSP: $dummy[0] = 'Shulga'
                                                                                                // TODO-QSP: $dummy[1] = 'Vasily'
                                                                                                // TODO-QSP: $dummy[2] = 'Vaska'
                                                                                                // TODO-QSP: $dummy[3] = 'Vasily'
                                                                                                // TODO-QSP: end & !! --- Shulga_var_name ---
                                                                                                if (((s as any).locArgs?.[1] ?? 0) === 'gop_beer_drova') {
                                                                                                  (s as any).temp_rand = 0;
                                                                                                  if ((!((s as any).temp_rand ?? 0))) {
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 7) {
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 8) {
                                                                                                  }
                                                                                                  // TODO-QSP: end & !! --- gop_beer_drova ---
                                                                                                  if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_cun') {
                                                                                                    (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
                                                                                                    if ((!((s as any).temp_rand ?? 0))) {
                                                                                                    }
                                                                                                    // TODO-QSP: "You have got a nice pussy indeed!"
                                                                                                    // TODO-QSP: You smiled: "I know"
                                                                                                    // TODO-QSP: His tongue penetrates slowly into your pussy parting your meaty nether lips. Your moaning gradually ...
                                                                                                    if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                    }
                                                                                                    // TODO-QSP: "Do you like?" You ask.
                                                                                                    // TODO-QSP: "Very much!" He replies and touches your clit with his lips and starts caressing it with his tongue....
                                                                                                    // TODO-QSP: "You''re good at it. Have you trained it?"
                                                                                                    // TODO-QSP: "Sometimes" He replies with a smile.
                                                                                                    // TODO-QSP: "Do you have a girlfriend?"
                                                                                                    // TODO-QSP: "No…" He answers, when has a short rest.
                                                                                                    // TODO-QSP: "Who taught you then?"
                                                                                                    // TODO-QSP: "I got a friend."
                                                                                                    // TODO-QSP: "Ooh. Do I know her? Is she at school?
                                                                                                    // TODO-QSP: "No. I''ll tell you later."'
                                                                                                    if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                    }
                                                                                                    if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                    }
                                                                                                    if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                    }
                                                                                                    if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                    }
                                                                                                    // TODO-QSP: "With pleasure!" He replies.
                                                                                                    // TODO-QSP: <<$npcdesc>> lowers his mouth to your groin and starts licking your pussy skillfully.'
                                                                                                    // TODO-QSP: dynamic text: <<$txt_sex_cun>>
                                                                                                    scene.text(`${((s as any).txt_sex_cun || '')}`);
                                                                                                    // TODO-QSP: end & !! --- text_sex_cun ---
                                                                                                    if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_69') {
                                                                                                      (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
                                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                                      }
                                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                      }
                                                                                                      // TODO-QSP: dynamic text: <<$txt_sex_69>>
                                                                                                      scene.text(`${((s as any).txt_sex_69 || '')}`);
                                                                                                      // TODO-QSP: end & !! --- text_sex_69 ---
                                                                                                      if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_hj') {
                                                                                                        (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
                                                                                                        if ((!((s as any).temp_rand ?? 0))) {
                                                                                                        }
                                                                                                        scene.text('"That\'s like jerk off." You say laughing, take his member into your hand and start pumping.');
                                                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                        }
                                                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                        }
                                                                                                        scene.text('"Don\'t release it and move your hand up and down…" He takes hold showing how to do it.');
                                                                                                        scene.text('"Not so sharply… yes so. Don\'t pull… Yes, that\'s it. Great…! More… More.!"');
                                                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                        }
                                                                                                        // TODO-QSP: dynamic text: <<$txt_sex_hj>>
                                                                                                        scene.text(`${((s as any).txt_sex_hj || '')}`);
                                                                                                        // TODO-QSP: end & !! --- text_sex_hj ---
                                                                                                        if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_bj') {
                                                                                                          (s as any).temp_rand = Math.floor(Math.random() * 8) + 0;
                                                                                                          if ((!((s as any).temp_rand ?? 0))) {
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 7) {
                                                                                                          }
                                                                                                          // TODO-QSP: dynamic text: <<$txt_sex_bj>>
                                                                                                          scene.text(`${((s as any).txt_sex_bj || '')}`);
                                                                                                          // TODO-QSP: end & !! --- text_sex_bj ---
                                                                                                          if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_bjt') {
                                                                                                            (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
                                                                                                            if ((!((s as any).temp_rand ?? 0))) {
                                                                                                            }
                                                                                                            if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                            }
                                                                                                            if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                            }
                                                                                                            // TODO-QSP: dynamic text: <<$txt_sex_bjt>>
                                                                                                            scene.text(`${((s as any).txt_sex_bjt || '')}`);
                                                                                                            // TODO-QSP: end & !! --- text_sex_bjt ---
                                                                                                            if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_doggy') {
                                                                                                              (s as any).temp_rand = Math.floor(Math.random() * 7) + 0;
                                                                                                              if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                if (((s as any).PCloSkirt ?? 0) > 0) {
                                                                                                                } else {
                                                                                                                  if (((s as any).PCloPants ?? 0) > 2) {
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                              }
                                                                                                              // TODO-QSP: "Good job, bitch, keep banging with your fanny. Come on sweetie, do it faster!" <<$npcdesc>> is urgi...
                                                                                                              if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                              }
                                                                                                              // TODO-QSP: You obey dumbly, and you get on all fours. You like to be fucked in this way.
                                                                                                              // TODO-QSP: "<<$pcs_nickname>> bend backwards and lower your head!"
                                                                                                              // TODO-QSP: "Yes, <<$npcdesc>>." You say excitedly and arch your back more and lower your head. Your bum move up...
                                                                                                              // TODO-QSP: "Mmmm… aaah… mmm," you moaned.
                                                                                                              // TODO-QSP: <<$npcdesc>> puts both hands on your bum and starts plowing your pussy with his prick with delight.'
                                                                                                              if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                              }
                                                                                                              // TODO-QSP: dynamic text: <<$txt_sex_doggy>>
                                                                                                              scene.text(`${((s as any).txt_sex_doggy || '')}`);
                                                                                                              // TODO-QSP: end & !! --- text_sex_doggy ---
                                                                                                              if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_doggy_anal') {
                                                                                                                (s as any).temp_rand = Math.floor(Math.random() * 9) + 0;
                                                                                                                if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                }
                                                                                                                // TODO-QSP: "Oh yess…! mmm… deeper…! mmmm…"
                                                                                                                // TODO-QSP: He grabs your hips and starts banging increasing his pace gradually. You diligently fuck back wantin...
                                                                                                                if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                }
                                                                                                                // TODO-QSP: "You have got a nice big butt, <<$pcs_nickname>>…", he tells you, still keeping his pace."
                                                                                                                // TODO-QSP: "Mmmm… yesss… yess… harder… deeper… mmm… oh yesss, you have such big cock… hmmmm…" you are cheering ...
                                                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 7) {
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 8) {
                                                                                                                }
                                                                                                                // TODO-QSP: dynamic text: <<$txt_sex_doggy_anal>>
                                                                                                                scene.text(`${((s as any).txt_sex_doggy_anal || '')}`);
                                                                                                                // TODO-QSP: end & !! --- text_sex_doggy_anal ---
                                                                                                                if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_cow') {
                                                                                                                  (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
                                                                                                                  if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                  }
                                                                                                                  if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                  }
                                                                                                                  // TODO-QSP: "Oh my god! That''s so great!" you sigh and wiggle your hips and then you start bouncing up and down...
                                                                                                                  if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                  }
                                                                                                                  // TODO-QSP: dynamic text: <<$txt_sex_cow>>
                                                                                                                  scene.text(`${((s as any).txt_sex_cow || '')}`);
                                                                                                                  // TODO-QSP: end & !! --- text_sex_cow ---
                                                                                                                  if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_cow_anal') {
                                                                                                                    // TODO-QSP: dynamic text: <<$txt_sex_cow_anal>>
                                                                                                                    scene.text(`${((s as any).txt_sex_cow_anal || '')}`);
                                                                                                                    // TODO-QSP: end & !! --- text_sex_cow_anal ---
                                                                                                                    if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_miss') {
                                                                                                                      (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
                                                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                      }
                                                                                                                      // TODO-QSP: You turn on your back and invitingly spread your legs. He doesn''t need to be asked twice. <<$npcdes...
                                                                                                                      if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                      }
                                                                                                                      // TODO-QSP: dynamic text: <<$txt_sex_miss>>
                                                                                                                      scene.text(`${((s as any).txt_sex_miss || '')}`);
                                                                                                                      // TODO-QSP: end & !! --- text_sex_miss ---
                                                                                                                      if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_miss_anal') {
                                                                                                                        (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
                                                                                                                        if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                        }
                                                                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                        }
                                                                                                                        // TODO-QSP: You turn on your back and invitingly spread your legs. He doesn''t need to be asked twice.'
                                                                                                                        // TODO-QSP: dynamic text: <<$txt_sex_miss_anal>>
                                                                                                                        scene.text(`${((s as any).txt_sex_miss_anal || '')}`);
                                                                                                                        // TODO-QSP: end & !! --- text_sex_miss_anal ---
                                                                                                                        if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_sideways') {
                                                                                                                          (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
                                                                                                                          if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                          }
                                                                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                          }
                                                                                                                          // TODO-QSP: dynamic text: <<$txt_sex_sideways>>
                                                                                                                          scene.text(`${((s as any).txt_sex_sideways || '')}`);
                                                                                                                          // TODO-QSP: end & !! --- text_sex_sideways ---
                                                                                                                          if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_sideways_anal') {
                                                                                                                            (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
                                                                                                                            if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                            }
                                                                                                                            if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                            }
                                                                                                                            // TODO-QSP: dynamic text: <<$txt_sex_sideways_anal>>
                                                                                                                            scene.text(`${((s as any).txt_sex_sideways_anal || '')}`);
                                                                                                                            // TODO-QSP: end & !! --- text_sex_sideways_anal ---
                                                                                                                            if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_cumm') {
                                                                                                                              (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
                                                                                                                              if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                              }
                                                                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                              }
                                                                                                                              if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                              }
                                                                                                                              // TODO-QSP: dynamic text: <<$txt_sex_cumm>>
                                                                                                                              scene.text(`${((s as any).txt_sex_cumm || '')}`);
                                                                                                                              // TODO-QSP: end & !! --- text_sex_cumm ---
                                                                                                                              if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_cumface') {
                                                                                                                                (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
                                                                                                                                if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                }
                                                                                                                                if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                }
                                                                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                }
                                                                                                                                if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                }
                                                                                                                                // TODO-QSP: dynamic text: <<$txt_sex_cumface>>
                                                                                                                                scene.text(`${((s as any).txt_sex_cumface || '')}`);
                                                                                                                                // TODO-QSP: end & !! --- text_sex_cumface ---
                                                                                                                                if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_cumbody') {
                                                                                                                                  (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
                                                                                                                                  if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                  }
                                                                                                                                  if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                  }
                                                                                                                                  // TODO-QSP: dynamic text: <<$txt_sex_cumbody>>
                                                                                                                                  scene.text(`${((s as any).txt_sex_cumbody || '')}`);
                                                                                                                                  // TODO-QSP: end & !! --- text_sex_cumbody ---
                                                                                                                                  if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_cumvag') {
                                                                                                                                    (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
                                                                                                                                    if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                    }
                                                                                                                                    if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                    }
                                                                                                                                    if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                    }
                                                                                                                                    if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                    }
                                                                                                                                    // TODO-QSP: dynamic text: <<$txt_sex_cumvag>>
                                                                                                                                    scene.text(`${((s as any).txt_sex_cumvag || '')}`);
                                                                                                                                    // TODO-QSP: end & !! --- text_sex_cumvag ---
                                                                                                                                    if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_cumass') {
                                                                                                                                      (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
                                                                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                      }
                                                                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                      }
                                                                                                                                      // TODO-QSP: dynamic text: <<$txt_sex_cumass>>
                                                                                                                                      scene.text(`${((s as any).txt_sex_cumass || '')}`);
                                                                                                                                      // TODO-QSP: end & !! --- text_sex_cumass ---
                                                                                                                                      if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_group_bjall') {
                                                                                                                                        (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
                                                                                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                        }
                                                                                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                        }
                                                                                                                                        // TODO-QSP: "Vitek, why are you standing and staring? Get her your member, I can see that it''s hard already and...
                                                                                                                                        // TODO-QSP: "Come on! <<$pcs_nickname>> take me in your mouth too!" Vitek asks kindly and simply. Dan takes his ...
                                                                                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                        }
                                                                                                                                        // TODO-QSP: dynamic text: <<$txt_sex_group_bjall>>
                                                                                                                                        scene.text(`${((s as any).txt_sex_group_bjall || '')}`);
                                                                                                                                        // TODO-QSP: end & !! --- text_sex_group_bjall ---
                                                                                                                                        if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_group_bj') {
                                                                                                                                          (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                          }
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                          }
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                          }
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                                          }
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                                          }
                                                                                                                                          // TODO-QSP: dynamic text: <<$txt_sex_group_bj>>
                                                                                                                                          scene.text(`${((s as any).txt_sex_group_bj || '')}`);
                                                                                                                                          // TODO-QSP: end & !! --- text_sex_group_bj ---
                                                                                                                                          if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_group_vag') {
                                                                                                                                            (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
                                                                                                                                            if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                            }
                                                                                                                                            if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                            }
                                                                                                                                            // TODO-QSP: Vasily comes with noticeable eagerness and shoves his cock into your mouth. His dick isn''t so big a...
                                                                                                                                            // TODO-QSP: dynamic text: <<$txt_sex_group_vag>>
                                                                                                                                            scene.text(`${((s as any).txt_sex_group_vag || '')}`);
                                                                                                                                            // TODO-QSP: end & !! --- text_sex_group_vag ---
                                                                                                                                            if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_group_anal') {
                                                                                                                                              (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
                                                                                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                              }
                                                                                                                                              if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                              }
                                                                                                                                              // TODO-QSP: dynamic text: <<$txt_sex_group_anal>>
                                                                                                                                              scene.text(`${((s as any).txt_sex_group_anal || '')}`);
                                                                                                                                              // TODO-QSP: end & !! --- text_sex_group_anal ---
                                                                                                                                              if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_group_dp') {
                                                                                                                                                (s as any).temp_rand = Math.floor(Math.random() * 4) + 1;
                                                                                                                                                if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                                }
                                                                                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                                }
                                                                                                                                                if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                                }
                                                                                                                                                if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                                                }
                                                                                                                                                // TODO-QSP: dynamic text: <<$txt_sex_group_dp>>
                                                                                                                                                scene.text(`${((s as any).txt_sex_group_dp || '')}`);
                                                                                                                                                // TODO-QSP: end & !! --- text_sex_group_dp ---
                                                                                                                                                if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_group_dpa') {
                                                                                                                                                  // TODO-QSP: dynamic text: <<$txt_sex_group_dpa>>
                                                                                                                                                  scene.text(`${((s as any).txt_sex_group_dpa || '')}`);
                                                                                                                                                  // TODO-QSP: end & !! --- text_sex_group_dpa ---
                                                                                                                                                  if (((s as any).locArgs?.[1] ?? 0) === 'text_sex_group_triple') {
                                                                                                                                                    // TODO-QSP: dynamic text: <<$txt_sex_group_triple>>
                                                                                                                                                    scene.text(`${((s as any).txt_sex_group_triple || '')}`);
                                                                                                                                                    // TODO-QSP: end & !! --- text_sex_group_triple ---
                                                                                                                                                    if (((s as any).locArgs?.[1] ?? 0) === 'group_sex_text') {
                                                                                                                                                      (s as any).temp_rand = Math.floor(Math.random() * 9) + 0;
                                                                                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 7) {
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 8) {
                                                                                                                                                      }
                                                                                                                                                      // TODO-QSP: end & !! --- group_sex_text ---
                                                                                                                                                      if (((s as any).locArgs?.[1] ?? 0) === 'rndorder3') {
                                                                                                                                                        if (!(s as any).rndorder) (s as any).rndorder = {}; (s as any).rndorder[1] = 9;
                                                                                                                                                        if (!(s as any).rndorder) (s as any).rndorder = {}; (s as any).rndorder[2] = 10;
                                                                                                                                                        if (!(s as any).rndorder) (s as any).rndorder = {}; (s as any).rndorder[3] = 11;
                                                                                                                                                        (s as any).irndorder = 1;
                                                                                                                                                        // TODO-QSP: :rndorderjump
                                                                                                                                                        if (((s as any).irndorder ?? 0) < 4) {
                                                                                                                                                          (s as any).jrndorder = Math.floor(Math.random() * 3) + 1;
                                                                                                                                                          (s as any).krndorder = ((s as any).rndorder ?? 0)?.[String((s as any).irndorder ?? 0)];
                                                                                                                                                          if (!(s as any).rndorder) (s as any).rndorder = {}; (s as any).rndorder[String((s as any).irndorder ?? 0)] = ((s as any).rndorder ?? 0)?.[String((s as any).jrndorder ?? 0)];
                                                                                                                                                          if (!(s as any).rndorder) (s as any).rndorder = {}; (s as any).rndorder[String((s as any).jrndorder ?? 0)] = ((s as any).krndorder ?? 0);
                                                                                                                                                          (s as any).irndorder = ((s as any).irndorder ?? 0) + (1);
                                                                                                                                                          // TODO-QSP: jump 'rndorderjump'
                                                                                                                                                        }
                                                                                                                                                        (s as any).result = ((s as any).rndorder ?? 0)[1] + 12 * ((s as any).rndorder ?? 0)[2] + 144 * ((s as any).rndorder ?? 0)[3];
                                                                                                                                                        // TODO-QSP: end & !! --- rndorder3 ---
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                      scene.actions([
                                                                        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                                                      ]);
                                                                    }
                                                                    scene.actions([
                                                                      { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                                                    ]);
                                                                  }
                                                                  scene.actions([
                                                                    { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                                                  ]);
                                                                }
                                                                scene.actions([
                                                                  { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                                                ]);
                                                              }
                                                              scene.actions([
                                                                { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                                              ]);
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            scene.actions([
                                              { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                            ]);
                                          }
                                          scene.actions([
                                            { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                          ]);
                                        }
                                        scene.actions([
                                          { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                        ]);
                                      }
                                      scene.actions([
                                        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                      ]);
                                    }
                                    scene.actions([
                                      { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
                                    ]);
                                  }
                                }
                                scene.actions([
                                  { label: 'Do a tit job or a titty fuck', goto: ['gopsex', 'hide', '\'shgopsex_fucktits\''] },
                                  { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', 'shgopsex', 'cont');
  } },
                                ]);
                              }
                            }
                          }
                        }
                      }
                    }
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'settings':
      enterSettings(s, scene);
      break;
    case 'gg_devst_deflor':
      enterGgDevstDeflor(s, scene);
      break;
    case 'gg_sex_orgasm':
      enterGgSexOrgasm(s, scene);
      break;
    case 'masturb_gg':
      enterMasturbGg(s, scene);
      break;
    case 'gopsex_select':
      enterGopsexSelect(s, scene);
      break;
    case 'shgopsex':
      enterShgopsex(s, scene);
      break;
    case 'shgopsex_end':
      enterShgopsexEnd(s, scene);
      break;
    case 'shgopsex_lick':
      enterShgopsexLick(s, scene);
      break;
    case 'shgopsex_69':
      enterShgopsex_69(s, scene);
      break;
    case 'shgopsex_tits':
      enterShgopsexTits(s, scene);
      break;
    case 'shgopsex_hj':
      enterShgopsexHj(s, scene);
      break;
    case 'shgopsex_bj':
      enterShgopsexBj(s, scene);
      break;
    case 'shgopsex_throat':
      enterShgopsexThroat(s, scene);
      break;
    case 'shgopsex_vag':
      enterShgopsexVag(s, scene);
      break;
    case 'shgopsex_anal':
      enterShgopsexAnal(s, scene);
      break;
    case 'shgopsex_group':
      enterShgopsexGroup(s, scene);
      break;
    case 'hide':
      enterHide(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gopsex: LocationDef = {
  name: 'gopsex',
  title: ' ███__ ',
  region: 'other',
  enter: enter,
};
