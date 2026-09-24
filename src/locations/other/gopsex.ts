import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
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
  (s as any).shgopsex_count = (Math.floor(Math.random() * 4) + 4);
  (s as any).shgopsex_group_count = (Math.floor(Math.random() * 3) + 3);
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
      (s as any).horny_orgasm_text = (Math.floor(Math.random() * 12) + 0);
      if ((!((s as any).horny_orgasm_text ?? 0))) {
        // TODO-QSP: dynamic text: 'You are trying to come, and you beg him to ' + func('gopsex', 'hide', 'gop_sext...
        scene.text('You are trying to come, and you beg him to ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' you harder.');
      } else {
        if (((s as any).horny_orgasm_text ?? 0) === 1) {
          scene.text('You try to reach your peak, so you start bouncing faster.');
        } else {
          if (((s as any).horny_orgasm_text ?? 0) === 2) {
            scene.text('You are about to cum, and you ask him to push his dick deeper.');
          } else {
            if (((s as any).horny_orgasm_text ?? 0) === 3) {
              // TODO-QSP: dynamic text: 'You are trying to come and ask him to ' + func('gopsex', 'hide', 'gop_sextext1'...
              scene.text('You are trying to come and ask him to ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' you faster.');
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
                      // TODO-QSP: dynamic text: 'You crave for them to ' + func('gopsex', 'hide', 'gop_sextext1') + ' you harder...
                      scene.text('You crave for them to ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' you harder…');
                    } else {
                      if (((s as any).horny_orgasm_text ?? 0) === 8) {
                        scene.text('You want to finish and plead with him to treat you rough.');
                      } else {
                        if (((s as any).horny_orgasm_text ?? 0) === 9) {
                          // TODO-QSP: dynamic text: 'You beg your partner to ' + func('gopsex', 'hide', 'gop_sextext1') + ' you hard...
                          scene.text('You beg your partner to ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' you harder.');
                        } else {
                          if (((s as any).horny_orgasm_text ?? 0) === 10) {
                            scene.text('You yell smut naming yourself a dirty whore to provoke your partner and reach your peak.');
                          } else {
                            if (((s as any).horny_orgasm_text ?? 0) === 11) {
                              // TODO-QSP: dynamic text: 'You are overexcited, and you want to climax. So you beg your partner to ' + fun...
                              scene.text('You are overexcited, and you want to climax. So you beg your partner to ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' you heavily.');
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
        (s as any).orgasm_text = (Math.floor(Math.random() * 12) + 0);
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
        (s as any).dummywhere = 'into your panties';
        if (((s as any).pantyworntype ?? 0) === 'none') {
          (s as any).dummywhere = 'to your pussy';
        }
        if (((s as any).PCloSkirt ?? 0) > 0) {
          (s as any).dummywhat = 'lift up your skirt';
        }
        if (((s as any).PCloPants ?? 0) > 0) {
          (s as any).dummywhat = 'unbutton and unzip your pants';
        }
        if (((s as any).PCloPants ?? 0) > 2) {
          (s as any).dummywhat = 'unbutton and unzip your shorts';
        }
        (s as any).rnd_masturb_text = (Math.floor(Math.random() * 3) + 1);
        if (((s as any).rnd_masturb_text ?? 0) === 1) {
          // TODO-QSP: dynamic text: The view is quite exciting. You slip your hand <<$dummywhere>> and start rubbing...
          scene.text(`The view is quite exciting. You slip your hand ${((s as any).dummywhere ?? '')} and start rubbing your clit.`);
        } else {
          if (((s as any).rnd_masturb_text ?? 0) === 2) {
            // TODO-QSP: dynamic text: You are very excited about this view. Of course, you can''t help, but your hand ...
            scene.text(`You are very excited about this view. Of course, you can't help, but your hand slips ${((s as any).dummywhere ?? '')}, and you start rubbing your itching pussy.`);
          } else {
            if (((s as any).rnd_masturb_text ?? 0) === 3) {
              // TODO-QSP: dynamic text: Watching the scene, you become enormously excited. You <<$dummywhat>>, slip your...
              scene.text(`Watching the scene, you become enormously excited. You ${((s as any).dummywhat ?? '')}, slip your hand ${((s as any).dummywhere ?? '')}, and start masturbating.`);
            }
          }
        }
      }
      if (((s as any).pcs_horny ?? 0) >= 60) {
        scene.text('Your excitement grows, and you start even faster to rub your pussy, poking your fingers deeper into your love hole and teasing your clit.');
      }
      if (((s as any).pcs_horny ?? 0) >= 70) {
        (s as any).orgasm_txt = 'You are overcome by surging emotions and finish with a loud groan.';
        (s as any).orgasm_or = 'yes';
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
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/body/b` + (Math.floor(Math.random() * 17) + 1) + '.jpg"></center> <br> You want sex.');
  }
  if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).PCloStyle ?? 0) !== 4) {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/body/g` + (Math.floor(Math.random() * 20) + 1) + '.jpg"></center> <br> You are overexcited, and you strongly want to fuck.');
  }
  if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/body/h` + (Math.floor(Math.random() * 17) + 1) + '.jpg"></center>');
  }
  if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  (((s as any).alko ?? 0) >= 3  &&  ((s as any).shgopsex_gr_count ?? 0) > 0)  ||  (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).shgopsex_gr_count ?? 0) > 0)) {
      scene.actions([
        { label: 'Participate in group sex', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShgopsexGroup(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Have sex with Dan', handler: (st: GameState) => {
    if (((st as any).shgopsex_den_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: 'Dan says, "' + func('gopsex', 'hide', 'gop_gg_name') + ', you''ve fucked me eno...
      scene.text('Dan says, "' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name') + ', you\'ve fucked me enough today. Get out!"');
      scene.actions([
        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      (st as any).gopsex_n_npc = 0;
      (st as any).shgopsex_den_day = ((st as any).daystart ?? 0);
      (st as any).shgopsex_den_count = ((st as any).shgopsex_den_count ?? 0) - (1);
      ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A10'] = 1;
      qspCall(st, 'npcStat', 'A10');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShgopsex(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
      { label: 'Have sex with Vitek', handler: (st: GameState) => {
    if (((st as any).shgopsex_vitya_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Vitek says, "Sorry, <<$pcs_nickname>>, I can''t fuck you more today."
      scene.text(`Vitek says, "Sorry, ${((st as any).pcs_nickname ?? '')}, I can't fuck you more today."`);
      scene.actions([
        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      (st as any).gopsex_n_npc = 2;
      (st as any).shgopsex_vitya_day = ((st as any).daystart ?? 0);
      (st as any).shgopsex_vitya_count = ((st as any).shgopsex_vitya_count ?? 0) - (1);
      ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A9'] = 1;
      qspCall(st, 'npcStat', 'A9');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShgopsex(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'vasilyhome', 'livingroom');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have sex with  [+func(\'gopsex\', \'hide\', \'Shulga_var_name\'...]', handler: (st: GameState) => {
    if (((st as any).shgopsex_vasya_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Vasily said, "<<$pcs_nickname>>, you fucked with me already. It''s enough fun fo...
      scene.text(`Vasily said, "${((st as any).pcs_nickname ?? '')}, you fucked with me already. It's enough fun for today, don't bother."`);
      scene.actions([
        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      (st as any).gopsex_n_npc = 1;
      (st as any).shgopsex_vasya_day = ((st as any).daystart ?? 0);
      (st as any).shgopsex_vasya_count = ((st as any).shgopsex_vasya_count ?? 0) - (1);
      ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A11'] = 1;
      qspCall(st, 'npcStat', 'A11');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShgopsex(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterShgopsex(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') !== 'cont') {
    // TODO-QSP: dynamic text: "So <<$npcdesc>>, do you want to have fun with me?" You lick your lips sensually...
    scene.text(`"So ${((s as any).npcdesc ?? '')}, do you want to have fun with me?" You lick your lips sensually and ask him: "What can I do for you?"`);
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
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'vasilyhome', 'livingroom');
  } },
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
      { label: 'In your mouth', goto: ['gopsex', 'hide', 'shgopsex_swallow'] },
      { label: 'On your face', goto: ['gopsex', 'hide', 'shgopsex_cumface'] },
      { label: 'On your body', goto: ['gopsex', 'hide', 'shgopsex_cumbelly'] },
    ]);
  } else {
    if (((s as any).sh_bjandhj_cum ?? 0) <= 0) {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
        scene.actions([
          { label: 'In your pussy', goto: ['gopsex', 'hide', 'shgopsex_cumvag'] },
        ]);
      }
      scene.actions([
        { label: 'In your mouth', goto: ['gopsex', 'hide', 'shgopsex_swallow'] },
        { label: 'On your face', goto: ['gopsex', 'hide', 'shgopsex_cumface'] },
        { label: 'On your body', goto: ['gopsex', 'hide', 'shgopsex_cumbelly'] },
        { label: 'In your butt', goto: ['gopsex', 'hide', 'shgopsex_cumanal'] },
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
      // TODO-QSP: dynamic text: <<$pcs_nickname>>, you are a <<$gnikname>>. It''s unpleasant for me to lick the ...
      scene.text(`${((s as any).pcs_nickname ?? '')}, you are a ${((s as any).gnikname ?? '')}. It's unpleasant for me to lick the cunt of such a girl. God knows how many cocks you have got there today. So go ahead, expose your whorish holes! I'm going to fuck you.`);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 5) + 3));
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/lick/lick` + (Math.floor(Math.random() * 11) + 1) + '.jpg"></center>');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cun']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if (((s as any).gopsex_n_npc ?? 0) === 2) {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
      // TODO-QSP: dynamic text: <<$pcs_nickname>>, you are a <<$gnikname>>. It''s unpleasant for me to lick the ...
      scene.text(`${((s as any).pcs_nickname ?? '')}, you are a ${((s as any).gnikname ?? '')}. It's unpleasant for me to lick the cunt of such a girl. God knows how many cocks you have got there today. So go ahead, show me better your whorish holes!`);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 5) + 3));
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/lick/lick` + (Math.floor(Math.random() * 11) + 1) + '.jpg"></center>');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cun']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if ((!((s as any).gopsex_n_npc ?? 0))) {
    scene.text('"Dan, lick my pussy, please." You ask sweetly.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, aren''t you screwy to ask me to do such stuff?"
    scene.text(`"${((s as any).pcs_nickname ?? '')}, aren't you screwy to ask me to do such stuff?"`);
    scene.text('"And what\'s wrong with that? Are you ashamed to do me nicely?"');
    scene.text('"Yes, it\'s unpleasant for me to lick cunt of a slut. God knows how many cocks you have got there today… So come on! Don\'t fuck with me… Expose your whorish holes! I\'m going to fuck you."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
  ]);
  scene.build();
}

function enterShgopsex_69(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).gopsex_n_npc ?? 0) >= 1) {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
      // TODO-QSP: dynamic text: <<$pcs_nickname>>, you are a <<$gnikname>>. It''s unpleasant for me to lick the ...
      scene.text(`${((s as any).pcs_nickname ?? '')}, you are a ${((s as any).gnikname ?? '')}. It's unpleasant for me to lick the cunt of such a girl. God knows how many cocks you have got there today. So go ahead, show me better your whorish holes!`);
      scene.actions([
        { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
        qspCall(s, 'arousal', 'bj', 5);
        qspCall(s, 'arousal', 'cuni', (-5));
        (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
        (s as any).sh_bjandhj_cum = 1;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/lick/69_` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_69']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).shgopsex_count ?? 0) > 0) {
          scene.actions([
            { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
          ]);
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } else {
    if ((!((s as any).gopsex_n_npc ?? 0))) {
      // TODO-QSP: dynamic text: - "No, <<$pcs_nickname>>, I won''t lick your pussy!"
      scene.text(`- "No, ${((s as any).pcs_nickname ?? '')}, I won't lick your pussy!"`);
      scene.actions([
        { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShgopsexTits(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 1));
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/tits/tits` + (Math.floor(Math.random() * 6) + 1) + '.jpg"></center>');
  // TODO-QSP: dynamic text: '"Well, <<$npcdesc>>, do you like my boobies'' ' + func('gopsex', 'hide', 'gop_t...
  scene.text('"Well, ' + ((s as any).npcdesc ?? '') + ', do you like my boobies\' \' + func(\'gopsex\', \'hide\', \'gop_text3\') + \'?"');
  // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>, you''ve got awesome tits!"
  scene.text(`"Yes, ${((s as any).pcs_nickname ?? '')}, you've got awesome tits!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck boobs', goto: ['gopsex', 'hide', 'shgopsex_eattits'] },
    { label: 'Titty fuck', goto: ['gopsex', 'hide', 'shgopsex_fucktits'] },
    { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
  ]);
  scene.build();
}

function enterShgopsexHj(s: GameState, scene: SceneBuilder): void {
  (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
  (s as any).sh_bjandhj_cum = 1;
  qspCall(s, 'arousal', 'hj', (Math.floor(Math.random() * 5) + 3));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/hj` + (Math.floor(Math.random() * 12) + 1) + '.jpg"></center>');
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
  qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 5) + 3));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/oral/bj` + (Math.floor(Math.random() * 25) + 1) + '.jpg"></center>');
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
  qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 5) + 3), 'deepthroat');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/oral/throat` + (Math.floor(Math.random() * 15) + 1) + '.jpg"></center>');
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
  qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 5) + 3));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/pussy/dog` + (Math.floor(Math.random() * 20) + 1) + '.jpg"></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgDevstDeflor(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_doggy']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shgopsex_count ?? 0) > 0) {
    scene.actions([
      { label: 'Change position: missionary', goto: ['gopsex', 'hide', 'shgopsex_vag1'] },
      { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', 'shgopsex_vag2'] },
      { label: 'Change position: screw sex', goto: ['gopsex', 'hide', 'shgopsex_vag3'] },
      { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
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
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/dog` + (Math.floor(Math.random() * 20) + 1) + '.jpg"></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 5) + 3));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_doggy_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shgopsex_count ?? 0) > 0) {
    scene.actions([
      { label: 'Change position: missionary', goto: ['gopsex', 'hide', 'shgopsex_anal1'] },
      { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', 'shgopsex_anal2'] },
      { label: 'Change position: screw sex', goto: ['gopsex', 'hide', 'shgopsex_anal3'] },
      { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
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
  if (String((s as any).locArgs?.[1] ?? '') !== 'cont') {
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
    qspCall(st, 'gopsex', '');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_bja'] },
    ]);
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).mesec ?? 0) <= 0) {
    scene.actions([
      { label: 'The pussy', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_vag'] },
    ]);
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).mesec ?? 0) <= 0) {
    scene.actions([
      { label: 'In the pussy and ass', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_dp'] },
    ]);
  }
  if (((s as any).pcs_ass ?? 0) >= 20) {
    scene.actions([
      { label: 'Two cocks in the ass', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_twoanal'] },
    ]);
  }
  if (((s as any).pcs_ass ?? 0) >= 30) {
    scene.actions([
      { label: 'Three cocks in the ass', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
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
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'vasilyhome', 'livingroom');
  } },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck one by one', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_bj'] },
    { label: 'In the ass', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  }, goto: ['gopsex', 'hide', 'shgopsex_group_anal'] },
  ]);
  scene.build();
}

function enterHide(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'ind_stamina_groupnpc') {
    (s as any).sh_ind = ((s as any).shgopsex_group_count ?? 0);
    if (((s as any).sh_ind ?? 0) === 5) {
      (s as any).ind_npc = '<font color = green  > █████ </font>';
    }
    if (((s as any).sh_ind ?? 0) === 4) {
      (s as any).ind_npc = '<font color = green  > ████_ </font>';
    }
    if (((s as any).sh_ind ?? 0) === 3) {
      (s as any).ind_npc = qspFunc(s, 'wrap', 'accent', ' ███__ ');
    }
    if (((s as any).sh_ind ?? 0) === 2) {
      (s as any).ind_npc = qspFunc(s, 'wrap', 'accent', ' ██___ ');
    }
    if (((s as any).sh_ind ?? 0) === 1) {
      (s as any).ind_npc = '<font color = red  > █____ </font>';
    }
    if (((s as any).sh_ind ?? 0) <= 0) {
      (s as any).ind_npc = '<font color = red  > Cumming! </font>';
    }
    // TODO-QSP: dynamic text: '<center>The ' + func('gopsex', 'hide', 'gop_text_npcr') + ' are ' + func('gopse...
    scene.text('<center>The \' + func(\'gopsex\', \'hide\', \'gop_text_npcr\') + \' are \' + func(\'gopsex\', \'hide\', \'gop_sextext3\') + \' you, their endurance: ' + ((s as any).ind_npc ?? '') + '</center>');
    // TODO-QSP: end & !! ---- ind_stamina_groupnpc ------
    if (String((s as any).locArgs?.[1] ?? '') === 'ind_stamina_npc') {
      (s as any).sh_ind = ((s as any).shgopsex_count ?? 0);
      if (((s as any).sh_ind ?? 0) === 7) {
        (s as any).ind_npc = '<font color = green  > ███████ </font> ';
      }
      if (((s as any).sh_ind ?? 0) === 6) {
        (s as any).ind_npc = '<font color = green  > ██████_ </font> ';
      }
      if (((s as any).sh_ind ?? 0) === 5) {
        (s as any).ind_npc = '<font color = green  > █████__ </font> ';
      }
      if (((s as any).sh_ind ?? 0) === 4) {
        (s as any).ind_npc = qspFunc(s, 'wrap', 'accent', ' ████___ ') + ' ';
      }
      if (((s as any).sh_ind ?? 0) === 3) {
        (s as any).ind_npc = qspFunc(s, 'wrap', 'accent', ' ███____ ') + ' ';
      }
      if (((s as any).sh_ind ?? 0) === 2) {
        (s as any).ind_npc = '<font color = red  > ██_____ </font> ';
      }
      if (((s as any).sh_ind ?? 0) === 1) {
        (s as any).ind_npc = '<font color = red  > █______ </font> ';
      }
      if (((s as any).sh_ind ?? 0) <= 0) {
        (s as any).ind_npc = '<font color = red  > Cumming! </font> ';
      }
      // TODO-QSP: dynamic text: <center>You have sex with <<$npcdesc>>, his stamina: <<$ind_npc>></center>
      scene.text(`<center>You have sex with ${((s as any).npcdesc ?? '')}, his stamina: ${((s as any).ind_npc ?? '')}</center>`);
      // TODO-QSP: end & !! --- ind_stamina_npc ---
      if (String((s as any).locArgs?.[1] ?? '') === 'npc_orgasm') {
        if ((!((s as any).shgopsex_count ?? 0))) {
          (s as any).npc_orgasm_txt = (Math.floor(Math.random() * 5) + 1);
          if (((s as any).npc_orgasm_txt ?? 0) === 1) {
            // TODO-QSP: dynamic text: "Oh shit, <<$pcs_nickname>>, I can''t hold it any longer. I''ll finish right now...
            scene.text(`"Oh shit, ${((s as any).pcs_nickname ?? '')}, I can't hold it any longer. I'll finish right now!" ${((s as any).npcdesc ?? '')} warns you.`);
          }
          if (((s as any).npc_orgasm_txt ?? 0) === 2) {
            // TODO-QSP: dynamic text: <<$npcdesc>> warns you, "<<$pcs_nickname>>, I''m going to cum right now, finish!...
            scene.text(`${((s as any).npcdesc ?? '')} warns you, "${((s as any).pcs_nickname ?? '')}, I'm going to cum right now, finish!"`);
          }
          if (((s as any).npc_orgasm_txt ?? 0) === 3) {
            // TODO-QSP: dynamic text: <<$npcdesc>>, "So <<$pcs_nickname>>, where should I offload my cum? It doesn''t ...
            scene.text(`${((s as any).npcdesc ?? '')}, "So ${((s as any).pcs_nickname ?? '')}, where should I offload my cum? It doesn't matter? Well, I'll choose myself!"`);
          }
          if (((s as any).npc_orgasm_txt ?? 0) === 4) {
            // TODO-QSP: dynamic text: "I''m ready to finish! <<$pcs_nickname>>, where do you want my semen? You don''t...
            scene.text(`"I'm ready to finish! ${((s as any).pcs_nickname ?? '')}, where do you want my semen? You don't know? Well, I'll choose myself!"`);
          }
          if (((s as any).npc_orgasm_txt ?? 0) === 5) {
            // TODO-QSP: dynamic text: <<$npcdesc>> tells you, "<<$pcs_nickname>>, I''m on the top. I''ll cum soon!"
            scene.text(`${((s as any).npcdesc ?? '')} tells you, "${((s as any).pcs_nickname ?? '')}, I'm on the top. I'll cum soon!"`);
          }
        }
        // TODO-QSP: end & !! --- npc_orgasm ---
        if (String((s as any).locArgs?.[1] ?? '') === 'gop_sex_analPlugIn') {
          if (((s as any).analPlugIn ?? 0) === 1) {
            (s as any).analPlugIn = 0;
            (s as any).analPlugOut = 1;
            // TODO-QSP: dynamic text: "What?! Do you have a buttplug in your ass?" <<$npcdesc>> asks in surprise.
            scene.text(`"What?! Do you have a buttplug in your ass?" ${((s as any).npcdesc ?? '')} asks in surprise.`);
            scene.text('"Aha, you are loosening your anus."');
            scene.text('"That\'s great, but it\'s in the way right now." He comments and pulls the plug out from your ass.<br>');
          }
          // TODO-QSP: end & !! --- gop_sex_analPlugIn ---
          if (String((s as any).locArgs?.[1] ?? '') === 'group_sex_start') {
            if (((s as any).shgopsex_gr_day ?? 0) !== ((s as any).daystart ?? 0)) {
              ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
            }
            (s as any).shgopsex_gr_day = ((s as any).daystart ?? 0);
            (s as any).shgopsex_gr_count = ((s as any).shgopsex_gr_count ?? 0) - (1);
            ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A9'] = 1;
            ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A10'] = 1;
            ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A11'] = 1;
            // TODO-QSP: end & !! --- group_sex_start ---
            if (String((s as any).locArgs?.[1] ?? '') === 'gop_sex_lubri') {
              if ((!((s as any).gop_sex_lubri ?? 0))) {
                if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
                  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
                  if (((s as any).agape ?? 0) > 1) {
                    (s as any).agape = 1;
                  }
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
                  (s as any).gop_sex_lubri = 1;
                  (s as any).pod_whore_lubri_text = '"' + ((s as any).npcdesc ?? 0) + ', wait! If you want to fuck me in the ass, you should lube up my hole!" You say and pull a tube out of your purse. You take the cap off, squeeze some lube onto your fingers, and smear your anus with lube.';
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
              if (String((s as any).locArgs?.[1] ?? '') === 'gop_groupsex_analPlugIn') {
                if (((s as any).analPlugIn ?? 0) === 1) {
                  (s as any).analPlugIn = 0;
                  (s as any).analPlugOut = 1;
                  // TODO-QSP: dynamic text: '"What?! Do you have a buttplug in your ass?" ' + func('gopsex', 'hide', 'gop_na...
                  scene.text('"What?! Do you have a buttplug in your ass?" ' + qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' asks in surprise.');
                  scene.text('"Aha, you are loosening your anus."');
                  scene.text('"That\'s great, but it\'s in the way right now." He comments and pulls the plug out from your ass.<br>');
                }
                // TODO-QSP: end & !! --- gop_groupsex_analPlugIn ---
                if (String((s as any).locArgs?.[1] ?? '') === 'gop_groupsex_lubri') {
                  if ((!((s as any).gop_groupsex_lubri ?? 0))) {
                    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
                      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
                      if (((s as any).agape ?? 0) > 1) {
                        (s as any).agape = 1;
                      }
                      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
                      (s as any).gop_groupsex_lubri = 1;
                      (s as any).pod_whore_lubri_text = '"' + qspFunc(s, 'gopsex', 'hide', 'gop_text_npcr') + ', wait! If you want to fuck me in the ass, you should lube up my hole!" You say and pull a tube out of your purse. You take the cap off, squeeze some lube onto your fingers, and smear your anus with lube.';
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
                  if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_vag1') {
                    (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                    qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 5) + 3));
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/pussy/miss` + (Math.floor(Math.random() * 20) + 1) + '.jpg"></center>');
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_miss']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                    if (((s as any).shgopsex_count ?? 0) > 0) {
                      scene.actions([
                        { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_vag'] },
                        { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', 'shgopsex_vag2'] },
                        { label: 'Change position: screw sex', goto: ['gopsex', 'hide', 'shgopsex_vag3'] },
                        { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
                      ]);
                    } else {
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                    }
                    qspCall(s, 'stat', '');
                    // TODO-QSP: end & !! --- shgopsex_vag1 ---
                    if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_vag2') {
                      (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                      qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 5) + 3));
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                      // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/pussy/cow` + (Math.floor(Math.random() * 20) + 1) + '.jpg"></center>');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cow']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                      if (((s as any).shgopsex_count ?? 0) > 0) {
                        scene.actions([
                          { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_vag'] },
                          { label: 'Change position: missionary', goto: ['gopsex', 'hide', 'shgopsex_vag1'] },
                          { label: 'Change position: screw sex', goto: ['gopsex', 'hide', 'shgopsex_vag3'] },
                          { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
                        ]);
                      } else {
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                      }
                      qspCall(s, 'stat', '');
                      // TODO-QSP: end & !! --- shgopsex_vag2 ---
                      if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_vag3') {
                        (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                        qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 5) + 3));
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/pussy/bok` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
                        scene.text('screw sex');
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                        if (((s as any).shgopsex_count ?? 0) > 0) {
                          scene.actions([
                            { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_vag'] },
                            { label: 'Change position: missionary', goto: ['gopsex', 'hide', 'shgopsex_vag1'] },
                            { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', 'shgopsex_vag2'] },
                            { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
                          ]);
                        } else {
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                        }
                        qspCall(s, 'stat', '');
                        // TODO-QSP: end & !! --- shgopsex_vag3 ---
                        if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_anal1') {
                          (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                          scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/miss` + (Math.floor(Math.random() * 20) + 1) + '.jpg"></center>');
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_miss_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 5) + 3));
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                          if (((s as any).shgopsex_count ?? 0) > 0) {
                            scene.actions([
                              { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_anal'] },
                              { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', 'shgopsex_anal2'] },
                              { label: 'Change position: screw sex', goto: ['gopsex', 'hide', 'shgopsex_anal3'] },
                              { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
                            ]);
                          } else {
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                          }
                          qspCall(s, 'stat', '');
                          // TODO-QSP: end & !! --- shgopsex_anal1 ---
                          if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_anal2') {
                            (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                            scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/cow` + (Math.floor(Math.random() * 20) + 1) + '.jpg"></center>');
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cow_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 5) + 3));
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                            if (((s as any).shgopsex_count ?? 0) > 0) {
                              scene.actions([
                                { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_anal'] },
                                { label: 'Change position: missionary', goto: ['gopsex', 'hide', 'shgopsex_anal1'] },
                                { label: 'Change position: screw sex', goto: ['gopsex', 'hide', 'shgopsex_anal3'] },
                                { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
                              ]);
                            } else {
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                            }
                            qspCall(s, 'stat', '');
                            // TODO-QSP: end & !! --- shgopsex_anal2 ---
                            if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_anal3') {
                              (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                              // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                              scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/sex/anal/bok` + (Math.floor(Math.random() * 9) + 1) + '.jpg"></center>');
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_sex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                              qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 5) + 3));
                              scene.text('On the side');
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                              if (((s as any).shgopsex_count ?? 0) > 0) {
                                scene.actions([
                                  { label: 'Change position: doggie', goto: ['gopsex', 'shgopsex_anal'] },
                                  { label: 'Change position: missionary', goto: ['gopsex', 'hide', 'shgopsex_anal1'] },
                                  { label: 'Change position: cowgirl', goto: ['gopsex', 'hide', 'shgopsex_anal2'] },
                                  { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
  } },
                                ]);
                              } else {
                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                              }
                              qspCall(s, 'stat', '');
                              // TODO-QSP: end & !! --- shgopsex_anal3 ---
                              if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_eattits') {
                                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                                (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/tits/eat` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
                                // TODO-QSP: dynamic text: <<$npcdesc>> is nibbling on your nipples.
                                scene.text(`${((s as any).npcdesc ?? '')} is nibbling on your nipples.`);
                                // TODO-QSP: end & !! --- shgopsex_eattits ---
                                if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_fucktits') {
                                  (s as any).shgopsex_count = ((s as any).shgopsex_count ?? 0) - (1);
                                  (s as any).sh_bjandhj_cum = 1;
                                  qspCall(s, 'arousal', 'breasts', (Math.floor(Math.random() * 5) + 3));
                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_npc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/tits/tj` + (Math.floor(Math.random() * 9) + 1) + '.jpg"></center>');
                                  // TODO-QSP: dynamic text: <<$npcdesc>> wants to tittyfuck you, and you don''t mind.
                                  scene.text(`${((s as any).npcdesc ?? '')} wants to tittyfuck you, and you don't mind.`);
                                  if (((s as any).shgopsex_count ?? 0) > 0) {
                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont']; enterShgopsex(s, scene); (s as any).locArgs = __savedLocArgs; }
                                  } else {
                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShgopsexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
                                  }
                                  qspCall(s, 'stat', '');
                                  // TODO-QSP: end & !! --- shgopsex_fucktits ---
                                  if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_swallow') {
                                    (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                                    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
                                    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/cum/swallow/swallow' + rand(1, 1...
                                    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/body/cum/swallow/swallow` + (Math.floor(Math.random() * 19) + 1) + '.jpg"></center>');
                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                    qspCall(s, 'stat', '');
                                    // TODO-QSP: end & !! --- shgopsex_swallow ---
                                    if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_cumface') {
                                      (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                                      qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                      if (((s as any).pcs_haircol ?? 0) < 4) {
                                        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/cum/cumface/<<$pcs_haircolor>>/'...
                                        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/body/cum/cumface/${((s as any).pcs_haircolor ?? '')}/` + (Math.floor(Math.random() * 19) + 1) + '.jpg"></center>');
                                      }
                                      if (((s as any).pcs_haircol ?? 0) > 3) {
                                        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/cum/cumface/custom/' + rand(1, 1...
                                        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/body/cum/cumface/custom/` + (Math.floor(Math.random() * 19) + 1) + '.jpg"></center>');
                                      }
                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumface']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                      qspCall(s, 'stat', '');
                                      // TODO-QSP: end & !! --- shgopsex_cumface ---
                                      if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_cumbelly') {
                                        (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                                        qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
                                        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/cum/cumbelly/cumbelly' + rand(1,...
                                        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/body/cum/cumbelly/cumbelly` + (Math.floor(Math.random() * 13) + 1) + '.jpg"></center>');
                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumbody']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                        qspCall(s, 'stat', '');
                                        // TODO-QSP: end & !! --- shgopsex_cumbelly ---
                                        if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_cumvag') {
                                          (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                                          qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0), 1);
                                          // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/cum/creampie/cumpussy' + rand(1,...
                                          scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/body/cum/creampie/cumpussy` + (Math.floor(Math.random() * 17) + 1) + '.jpg"></center>');
                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumvag']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                          qspCall(s, 'stat', '');
                                          // TODO-QSP: end & !! --- shgopsex_cumvag ---
                                          if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_cumanal') {
                                            (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                                            qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1);
                                            // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/cum/cumanal/cumanal' + rand(1, 1...
                                            scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/body/cum/cumanal/cumanal` + (Math.floor(Math.random() * 11) + 1) + '.jpg"></center>');
                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_cumass']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                            qspCall(s, 'stat', '');
                                            // TODO-QSP: end & !! --- shgopsex_cumanal ---
                                            if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_end') {
                                              if (((s as any).sh_bjandhj_cum ?? 0) >= 1) {
                                                scene.actions([
                                                  { label: 'In your mouth', goto: ['gopsex', 'hide', 'shgopsex_group_swallow'] },
                                                  { label: 'On your face', goto: ['gopsex', 'hide', 'shgopsex_group_cumface'] },
                                                  { label: 'On your body', goto: ['gopsex', 'hide', 'shgopsex_group_cumbelly'] },
                                                ]);
                                              } else {
                                                if (((s as any).sh_bjandhj_cum ?? 0) <= 0) {
                                                  scene.actions([
                                                    { label: 'In your mouth', goto: ['gopsex', 'hide', 'shgopsex_group_swallow'] },
                                                    { label: 'On your face', goto: ['gopsex', 'hide', 'shgopsex_group_cumface'] },
                                                    { label: 'On your body', goto: ['gopsex', 'hide', 'shgopsex_group_cumbelly'] },
                                                    { label: 'On your pussy', goto: ['gopsex', 'hide', 'shgopsex_group_cumvag'] },
                                                    { label: 'On your ass', goto: ['gopsex', 'hide', 'shgopsex_group_cumanal'] },
                                                  ]);
                                                }
                                              }
                                              qspCall(s, 'stat', '');
                                              // TODO-QSP: end & !! --- shgopsex_group_end ---
                                              if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_bj') {
                                                (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                (s as any).sh_bjandhj_cum = 1;
                                                qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 5) + 1), (((s as any).npcID ?? 0)?.[3] ?? 0), 'group', 'gangbang');
                                                qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 5) + 1), (((s as any).npcID ?? 0)?.[1] ?? 0), 'group', 'gangbang');
                                                qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 5) + 1), (((s as any).npcID ?? 0)?.[2] ?? 0), 'group', 'gangbang');
                                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/oral/bj` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
                                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_bj']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                }
                                                qspCall(s, 'stat', '');
                                                // TODO-QSP: end & !! --- shgopsex_group_bj ---
                                                if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_bja') {
                                                  (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                  (s as any).sh_bjandhj_cum = 1;
                                                  qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 4) + 1), (((s as any).npcID ?? 0)?.[3] ?? 0), 'group', 'gangbang');
                                                  qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 4) + 1), (((s as any).npcID ?? 0)?.[1] ?? 0), 'group', 'gangbang');
                                                  qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 4) + 1), (((s as any).npcID ?? 0)?.[2] ?? 0), 'group', 'gangbang');
                                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/oral/bja` + (Math.floor(Math.random() * 25) + 1) + '.jpg"></center>');
                                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_bjall']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                  if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                  }
                                                  qspCall(s, 'stat', '');
                                                  // TODO-QSP: end & !! --- shgopsex_group_bja ---
                                                  if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_vag') {
                                                    (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                    (s as any).sh_bjandhj_cum = 0;
                                                    qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 10), (((s as any).npcID ?? 0)?.[1] ?? 0), 'group', 'gangbang');
                                                    qspCall(s, 'arousal', 'hj', (-5), (((s as any).npcID ?? 0)?.[2] ?? 0), 'group', 'gangbang');
                                                    qspCall(s, 'arousal', 'bj', (-5), (((s as any).npcID ?? 0)?.[3] ?? 0), 'group', 'gangbang');
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/vag` + (Math.floor(Math.random() * 25) + 1) + '.jpg"></center>');
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_vag']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                    }
                                                    qspCall(s, 'stat', '');
                                                    // TODO-QSP: end & !! --- shgopsex_group_vag ---
                                                    if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_anal') {
                                                      (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                      (s as any).sh_bjandhj_cum = 0;
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/anal` + (Math.floor(Math.random() * 18) + 1) + '.jpg"></center>');
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_anal']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 6) + 10), (((s as any).npcID ?? 0)?.[2] ?? 0), 'group', 'gangbang');
                                                      qspCall(s, 'arousal', 'anal', (-5), (((s as any).npcID ?? 0)?.[3] ?? 0), 'group', 'gangbang');
                                                      qspCall(s, 'arousal', 'anal', (-5), (((s as any).npcID ?? 0)?.[1] ?? 0), 'group', 'gangbang');
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                      }
                                                      qspCall(s, 'stat', '');
                                                      // TODO-QSP: end & !! --- shgopsex_group_anal ---
                                                      if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_dp') {
                                                        (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                        (s as any).sh_bjandhj_cum = 0;
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/dp` + (Math.floor(Math.random() * 30) + 1) + '.jpg"></center>');
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_dp']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 9) + 7), (((s as any).npcID ?? 0)?.[3] ?? 0), 'group', 'gangbang');
                                                        qspCall(s, 'arousal', 'anal', -(Math.floor(Math.random() * 9) + 7), (((s as any).npcID ?? 0)?.[2] ?? 0), 'group', 'gangbang');
                                                        qspCall(s, 'arousal', 'bj', (-5), (((s as any).npcID ?? 0)?.[1] ?? 0), 'group', 'gangbang');
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                        }
                                                        qspCall(s, 'stat', '');
                                                        // TODO-QSP: end & !! --- shgopsex_group_dp ---
                                                        if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_twoanal') {
                                                          (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                          (s as any).sh_bjandhj_cum = 0;
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                          scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/dpa` + (Math.floor(Math.random() * 10) + 1) + '.jpg"></center>');
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_dpa']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 9) + 7), (((s as any).npcID ?? 0)?.[2] ?? 0), 'group', 'gangbang');
                                                          qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 9) + 7), (((s as any).npcID ?? 0)?.[1] ?? 0), 'group', 'gangbang');
                                                          qspCall(s, 'arousal', 'hj', (-6), (((s as any).npcID ?? 0)?.[3] ?? 0), 'group', 'gangbang');
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                          }
                                                          qspCall(s, 'stat', '');
                                                          // TODO-QSP: end & !! --- shgopsex_group_twoanal ---
                                                          if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_tripleanal') {
                                                            (s as any).shgopsex_group_count = ((s as any).shgopsex_group_count ?? 0) - (1);
                                                            (s as any).sh_bjandhj_cum = 0;
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ind_stamina_groupnpc']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                            scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/sex/triple` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_analPlugIn']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gop_groupsex_lubri']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'text_sex_group_triple']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 3) + 4), (((s as any).npcID ?? 0)?.[1] ?? 0), 'group', 'gangbang');
                                                            qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 3) + 4), (((s as any).npcID ?? 0)?.[3] ?? 0), 'group', 'gangbang');
                                                            qspCall(s, 'arousal', 'anal', (Math.floor(Math.random() * 3) + 4), (((s as any).npcID ?? 0)?.[2] ?? 0), 'group', 'gangbang');
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGgSexOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'npc_orgasm']; enterHide(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            if (((s as any).shgopsex_group_count ?? 0) > 0) {
                                                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cont\' else gs \'gopsex', 'hide', 'shgopsex_group_end']; enterShgopsexGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
                                                            }
                                                            qspCall(s, 'stat', '');
                                                            // TODO-QSP: end & !! --- shgopsex_group_tripleanal ---
                                                            if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_cumface') {
                                                              (s as any).pcs_hairbsh = 0;
                                                              (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
                                                              (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                              qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0) % 12 + '');
                                                              qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                                              qspCall(s, 'npcStat', 'A' + (((s as any).O ?? 0)/12) % 12 + '');
                                                              qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                                              qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0)/144 + '');
                                                              qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
                                                              // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                              scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/cumface` + (Math.floor(Math.random() * 16) + 1) + '.jpg"></center>');
                                                              // TODO-QSP: dynamic text: 'The ' + func('gopsex', 'hide', 'gop_text_npcr') + ' spray their cum all over yo...
                                                              scene.text('The ' + qspFunc(s, 'gopsex', 'hide', 'gop_text_npcr') + ' spray their cum all over your face');
                                                              qspCall(s, 'arousal', 'end');
                                                              qspCall(s, 'stat', '');
                                                              // TODO-QSP: end & !! --- shgopsex_group_cumface ---
                                                              if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_swallow') {
                                                                (s as any).pcs_hairbsh = 0;
                                                                (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
                                                                (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                                qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0) % 12 + '');
                                                                qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
                                                                qspCall(s, 'npcStat', 'A' + (((s as any).O ?? 0)/12) % 12 + '');
                                                                qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
                                                                qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0)/144 + '');
                                                                qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                                                qspCall(s, 'stat', '');
                                                                // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                                scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/swallow` + (Math.floor(Math.random() * 11) + 1) + '.jpg"></center>');
                                                                // TODO-QSP: dynamic text: 'One by one the ' + func('gopsex', 'hide', 'gop_text_npcr') + ' cum their semen ...
                                                                scene.text('One by one the ' + qspFunc(s, 'gopsex', 'hide', 'gop_text_npcr') + ' cum their semen into your mouth and you swallow it all.');
                                                                qspCall(s, 'arousal', 'end');
                                                                // TODO-QSP: end & !! --- shgopsex_group_swallow ---
                                                                if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_cumbelly') {
                                                                  (s as any).pcs_hairbsh = 0;
                                                                  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
                                                                  (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                                  qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0) % 12 + '');
                                                                  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
                                                                  qspCall(s, 'npcStat', 'A' + (((s as any).O ?? 0)/12) % 12 + '');
                                                                  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
                                                                  qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0)/144 + '');
                                                                  qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
                                                                  qspCall(s, 'arousal', 'end');
                                                                  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                                  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/cumbody` + (Math.floor(Math.random() * 15) + 1) + '.jpg"></center>');
                                                                  // TODO-QSP: dynamic text: 'The ' + func('gopsex', 'hide', 'gop_text_npcr') + ' come, squirting their hot s...
                                                                  scene.text('The ' + qspFunc(s, 'gopsex', 'hide', 'gop_text_npcr') + ' come, squirting their hot sticky cum all over your body.');
                                                                  // TODO-QSP: end & !! --- shgopsex_group_cumbelly ---
                                                                  if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_cumvag') {
                                                                    (s as any).pcs_hairbsh = 0;
                                                                    (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
                                                                    (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                                    qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0) % 12 + '');
                                                                    qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0), 1);
                                                                    qspCall(s, 'npcStat', 'A' + (((s as any).O ?? 0)/12) % 12 + '');
                                                                    qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0), 1);
                                                                    qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0)/144 + '');
                                                                    qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
                                                                    qspCall(s, 'arousal', 'end');
                                                                    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
                                                                    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/group/cum/cumvag` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
                                                                    // TODO-QSP: dynamic text: 'One by one the ' + func('gopsex', 'hide', 'gop_text_npcr') + ' take their turns...
                                                                    scene.text('One by one the ' + qspFunc(s, 'gopsex', 'hide', 'gop_text_npcr') + ' take their turns and shot their hot cum onto your pussy.');
                                                                    // TODO-QSP: end & !! --- shgopsex_group_cumvag ---
                                                                    if (String((s as any).locArgs?.[1] ?? '') === 'shgopsex_group_cumanal') {
                                                                      (s as any).pcs_hairbsh = 0;
                                                                      (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
                                                                      (s as any).O = qspFunc(s, 'gopsex', 'hide', 'rndorder3');
                                                                      qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0) % 12 + '');
                                                                      qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1);
                                                                      qspCall(s, 'npcStat', 'A' + (((s as any).O ?? 0)/12) % 12 + '');
                                                                      qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
                                                                      qspCall(s, 'npcStat', 'A' + ((s as any).O ?? 0)/144 + '');
                                                                      qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
                                                                      qspCall(s, 'arousal', 'end');
                                                                      // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/cum/cumass/cumass' + rand(1, 19)...
                                                                      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/body/cum/cumass/cumass` + (Math.floor(Math.random() * 19) + 1) + '.jpg"></center>');
                                                                      // TODO-QSP: dynamic text: 'One by one the ' + func('gopsex', 'hide', 'gop_text_npcr') + ' take their turns...
                                                                      scene.text('One by one the ' + qspFunc(s, 'gopsex', 'hide', 'gop_text_npcr') + ' take their turns and cover your asshole with their sperm.');
                                                                      // TODO-QSP: end & !! --- shgopsex_group_cumanal ---
                                                                      if (String((s as any).locArgs?.[1] ?? '') === 'accview_ggsex') {
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 9) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_domdela_text = 'cook some dinner';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_domdela_text = 'do homework';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                          (s as any).rnd_domdela_text = 'clean your room';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                          (s as any).rnd_domdela_text = 'wash dishes';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                          (s as any).rnd_domdela_text = 'go to bakery for a loaf of bread';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                          (s as any).rnd_domdela_text = 'wash your fanny';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                          (s as any).rnd_domdela_text = 'go to shop';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                          (s as any).rnd_domdela_text = 'cook some supper';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                          (s as any).rnd_domdela_text = 'do the laundry';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 15) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_telogg_text = '"That\'s no pussy but a bucket fanny."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_telogg_text = '"The girl is thoroughly fucked."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                          (s as any).rnd_telogg_text = '"Our ' + ((s as any).pcs_nickname ?? 0) + ' has got a bottomless hole!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                          (s as any).rnd_telogg_text = '"Again, ' + ((s as any).pcs_nickname ?? 0) + ', you sleep around in a row…"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                          (s as any).rnd_telogg_text = '"They are ' + ((s as any).gop_sextext3 ?? 0) + ' you again, ' + ((s as any).pcs_nickname ?? 0) + '? Is it possible? Aren\'t you tired of lending your holes to everybody in a row…"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                          (s as any).rnd_telogg_text = '"Poor girl, ' + ((s as any).gop_sextext2 ?? 0) + ' at every corner."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                          (s as any).rnd_telogg_text = '"' + ((s as any).pcs_nickname ?? 0) + ' unfailing \' + func(\'gopsex\', \'hide\', \'gop_gg_name2\') + \'!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                          (s as any).rnd_telogg_text = '"Poor ' + ((s as any).pcs_nickname ?? 0) + ', they probably fuck up all her holes."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                          (s as any).rnd_telogg_text = '"Blimey, ' + ((s as any).pcs_nickname ?? 0) + ', damn, you\'re a worn cunt!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 10) {
                                                                          (s as any).rnd_telogg_text = '"What have we here, ' + ((s as any).pcs_nickname ?? 0) + '?! How come they stretch you here so?"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11) {
                                                                          (s as any).rnd_telogg_text = '"She lost her fear completely, ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name2') + '!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12) {
                                                                          (s as any).rnd_telogg_text = '"She lost her shyness completely, ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name2') + '!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13) {
                                                                          (s as any).rnd_telogg_text = '"How can you shamelessly expose your holes right, left and center, ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name2') + '?"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 14) {
                                                                          (s as any).rnd_telogg_text = '"' + ((s as any).pcs_nickname ?? 0) + ', you are so shameless, \' + func(\'gopsex\', \'hide\', \'gop_gg_name2\') + \'!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 15) {
                                                                          (s as any).rnd_telogg_text = '"Oh, ' + ((s as any).pcs_nickname ?? 0) + ', aren\'t you sorry for yourself?"';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 14) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_telogg2_text = '"' + ((s as any).pcs_nickname ?? 0) + ', aren\'t you ashamed of working at such a filthy place?"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_telogg2_text = '"' + ((s as any).pcs_nickname ?? 0) + ', are you earning extra money even here?"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                          (s as any).rnd_telogg2_text = '"' + ((s as any).pcs_nickname ?? 0) + ', are you selling your body like a whore?"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                          (s as any).rnd_telogg2_text = '"You found customers, and you\'re working wholeheartedly ' + ((s as any).pcs_nickname ?? 0) + '."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                          (s as any).rnd_telogg2_text = '"You are quickly finding your customers, ' + ((s as any).pcs_nickname ?? 0) + '. I\'m amazed!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                          (s as any).rnd_telogg2_text = '"Look ' + ((s as any).pcs_nickname ?? 0) + ', if they ruin all your holes, you\'ll be unable to do your business!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                          (s as any).rnd_telogg2_text = '"' + ((s as any).pcs_nickname ?? 0) + ', if you\'ll serve anywhere and anybody, you\'ll wear out your slit, and you\'ll be out of work!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                          (s as any).rnd_telogg2_text = '"Who do I see, ' + ((s as any).pcs_nickname ?? 0) + '? You sell your body again! I\'m surprised you are such a natural \' + func(\'gopsex\', \'hide\', \'gop_gg_name2\') + \'!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                          (s as any).rnd_telogg2_text = '"You sell your body, so you are a \' + func(\'gopsex\', \'hide\', \'gop_gg_name2\') + \'. ' + ((s as any).pcs_nickname ?? 0) + '. I can\'t understand after whom."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 10) {
                                                                          (s as any).rnd_telogg2_text = '"You are giving yourself to anybody for a hundred bucks again. Doesn\'t it bother you?"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11) {
                                                                          (s as any).rnd_telogg2_text = '"' + ((s as any).pcs_nickname ?? 0) + ', even a \' + func(\'gopsex\', \'hide\', \'gop_gg_name2\') + \' takes a day off!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12) {
                                                                          (s as any).rnd_telogg2_text = '"Well, you are a \' + func(\'gopsex\', \'hide\', \'gop_gg_name2\') + \' ' + ((s as any).pcs_nickname ?? 0) + '. If I don\'t pass by, you sell your pussy…"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13) {
                                                                          (s as any).rnd_telogg2_text = '"Complete ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name2') + ', she was lost to shame, she is giving to in underpass…"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 14) {
                                                                          (s as any).rnd_telogg2_text = '"Whore lost her shame completely, she\'s ready for 50 bucks her box in the street expose…"';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 3) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_rodnya_text = 'Passing by you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_rodnya_text = 'Walking past you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                          (s as any).rnd_rodnya_text = 'Going past you';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 7) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_viewgg_text = 'notices you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_viewgg_text = 'spots you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                          (s as any).rnd_viewgg_text = 'spies you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                          (s as any).rnd_viewgg_text = 'catches a sight of you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                          (s as any).rnd_viewgg_text = 'throws a look at you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                          (s as any).rnd_viewgg_text = 'casts a look at you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                          (s as any).rnd_viewgg_text = 'notices you being ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext2') + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                          (s as any).rnd_viewgg_text = 'sees you being ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext2') + '';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 2) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_talkgg_text = 'tells you';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_talkgg_text = 'says';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 14) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_talkgg2_text = 'gently';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_talkgg2_text = 'sarky';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                          (s as any).rnd_talkgg2_text = 'in a low voice';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                          (s as any).rnd_talkgg2_text = 'softly';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                          (s as any).rnd_talkgg2_text = 'arrogantly';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                          (s as any).rnd_talkgg2_text = 'with a smirk';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                          (s as any).rnd_talkgg2_text = 'loudly';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                          (s as any).rnd_talkgg2_text = 'roughly';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                          (s as any).rnd_talkgg2_text = 'sotto voce';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 10) {
                                                                          (s as any).rnd_talkgg2_text = 'looking';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11) {
                                                                          (s as any).rnd_talkgg2_text = 'calmly';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12) {
                                                                          (s as any).rnd_talkgg2_text = 'with a laugh';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13) {
                                                                          (s as any).rnd_talkgg2_text = 'drowsily';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 14) {
                                                                          (s as any).rnd_talkgg2_text = 'wickedly';
                                                                        }
                                                                        if ((Math.floor(Math.random() * 2) + 0) === 1) {
                                                                          (s as any).rnd_namesis_text = 'Sister';
                                                                        } else {
                                                                          (s as any).rnd_namesis_text = 'Sis';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 2) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_mom_txt1 = '" It\'s all, ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', I\'ll come right away."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_mom_txt1 = '" ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', one more to be served and I\'ll come right away."';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 6) + 1);
                                                                        if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          if ((!(Math.floor(Math.random() * 2) + 0))) {
                                                                            (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - ' + ((s as any).rnd_telogg2_text ?? 0) + '';
                                                                          } else {
                                                                            (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "Well, ' + ((s as any).pcs_nickname ?? 0) + ', you found a place, where customers take."';
                                                                          }
                                                                        } else {
                                                                          if (((s as any).momslut ?? 0) >= 1) {
                                                                            (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "When you\'ve served the boys, don\'t forget to ' + ((s as any).rnd_domdela_text ?? 0) + '"';
                                                                          } else {
                                                                            if (((s as any).pcs_vag ?? 0) >= 30) {
                                                                              (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "Girl, you should have a rest and not to fuck for a while - your cunny is like a bucket, it isn\'t closing."';
                                                                            } else {
                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                                (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - ' + ((s as any).rnd_telogg_text ?? 0) + '';
                                                                              } else {
                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                  (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "You are naughty again ' + ((s as any).pcs_nickname ?? 0) + '? I begged you not to fuck at every corner, you got fully out of hand, slut!"';
                                                                                } else {
                                                                                  if (((s as any).temp_rand ?? 0) === 3) {
                                                                                    // TODO-QSP: "It''s not my fault, the idea, to go here, occurred to the boys. As soon as they finish, I''ll come ...
                                                                                  } else {
                                                                                    if (((s as any).temp_rand ?? 0) === 4) {
                                                                                      (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).pcs_nickname ?? 0) + ', instead of fucking the whole town, you should do your homework." "Yes ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', I\'ve done it!"';
                                                                                    } else {
                                                                                      if (((s as any).temp_rand ?? 0) === 5) {
                                                                                        (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - "Girl, you should have a break and not to fuck for a while."';
                                                                                      } else {
                                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                                          (s as any).rnd_caught_mom = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - "Girl, how come they bitched you so…? Will you be home soon?" ' + ((s as any).rnd_mom_txt1 ?? 0) + '';
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 4) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_sister = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).rnd_namesis_text ?? 0) + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ':  "' + ((s as any).npc_nickname ?? 0)?.['A29'] + ' asked me to tell you, not forget to ' + ((s as any).rnd_domdela_text ?? 0) + ', when you\'ve finished."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_sister = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).rnd_namesis_text ?? 0) + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "You\'re such slut, ' + ((s as any).pcs_nickname ?? 0) + '"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_sister = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).rnd_namesis_text ?? 0) + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': ' + ((s as any).rnd_telogg_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_sister = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).rnd_namesis_text ?? 0) + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': ' + ((s as any).rnd_telogg2_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                          (s as any).rnd_caught_sister = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).rnd_namesis_text ?? 0) + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "I\'m running about and searching her high and low… and it emerges that she is being fucked here. Put a bell on your neck or something, so I could find you easier next time. Give me your keys, filthy slut, I forgot my keys at home… Okay! let it be, I\'ll do it myself. In your purse? Take out the dick out of your mouth, when an elder inquires you! In your pocket? Ok, I found them… If you go into bathroom, clean it all with powder. The last thing I need is being after you by Holy Ghost knocked up."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_sister = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).rnd_namesis_text ?? 0) + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).pcs_nickname ?? 0) + ', ' + ((s as any).npc_nickname ?? 0)?.['A29'] + ' is looking for you, and you are being fucked right here! How long do you need?" "Oh sis, it\'s so enjoyable… another ten minutes they fuck me and then I\'ll come right."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_sister = '' + ((s as any).rnd_rodnya_text ?? 0) + ' your ' + ((s as any).rnd_namesis_text ?? 0) + ', ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).pcs_nickname ?? 0) + ', you are with clients? How long yet? You\'ve to wake up early tomorrow." Your sister turns to the boys that were standing in line. "Have you fucked her already?" "Nope, the first just started."';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 3) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).momslut ?? 0) >= 1) {
                                                                          (s as any).rnd_caught_brother = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your brother ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).npc_nickname ?? 0)?.['A29'] + ' asked me to tell you, not forget to ' + ((s as any).rnd_domdela_text ?? 0) + ', when you\'ve finished."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).momslut ?? 0) < 1) {
                                                                          (s as any).rnd_caught_brother = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your brother ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "You\'re such slut, ' + ((s as any).pcs_nickname ?? 0) + '"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_brother = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your brother ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': ' + ((s as any).rnd_telogg_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_brother = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your brother ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': ' + ((s as any).rnd_telogg2_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_brother = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your brother ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).pcs_nickname ?? 0) + ', you do only blowjob to my buddies so heaven knows to whom you allow to fuck your pussy?" "So, they didn\'t request to do it. If they ask, they may fuck either my pussy or my ass."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_brother = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your brother ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).pcs_nickname ?? 0) + ', you do only blowjob to my buddies so heaven knows to whom you allow to fuck your pussy?" "Well, I\'m still willing to give free of charge to your friends. Let they rejoice getting blowjobs for free."';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 2) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).momslut ?? 0) >= 1) {
                                                                          (s as any).rnd_caught_stepfather = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your stepfather ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).npc_nickname ?? 0)?.['A29'] + ' asked me to tell you, not forget to ' + ((s as any).rnd_domdela_text ?? 0) + ', when you\'ve finished."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).momslut ?? 0) < 1) {
                                                                          (s as any).rnd_caught_stepfather = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your stepfather ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "You\'re such slut, ' + ((s as any).pcs_nickname ?? 0) + '"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_stepfather = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your stepfather ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': ' + ((s as any).rnd_telogg_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_stepfather = '' + ((s as any).rnd_rodnya_text ?? 0) + ', your stepfather ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': ' + ((s as any).rnd_telogg2_text ?? 0) + '';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 13) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', uncle Misha ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': ' + ((s as any).rnd_telogg_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', uncle Misha ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': ' + ((s as any).rnd_telogg2_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_othernpc = 'Passing by, \' + func(\'gopsex\', \'hide\', \'Shulga_var_name\') + \' sees me being \' + func(\'gopsex\', \'hide\', \'gop_sextext2\') + \'. He shows a thumbs-up to the boys and says: ' + ((s as any).rnd_telogg_text ?? 0) + ' and he went on about his business.';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_othernpc = 'Passing by, \' + func(\'gopsex\', \'hide\', \'Shulga_var_name\') + \' sees me being \' + func(\'gopsex\', \'hide\', \'gop_sextext2\') + \'. He shows a thumbs-up to the boys and without hiding a smile he tells you: ' + ((s as any).rnd_telogg2_text ?? 0) + ' and went on about his business';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ' aunt Luda, ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - ' + ((s as any).rnd_telogg_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ' aunt Luda, ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': -' + ((s as any).rnd_telogg2_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ' Natasha Belova, ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - ' + ((s as any).rnd_telogg_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ' Natasha Belova, ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - ' + ((s as any).rnd_telogg2_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ' Julia Milov, ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - ' + ((s as any).rnd_telogg_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ' Julia Milov, ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': - ' + ((s as any).rnd_telogg2_text ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                          (s as any).rnd_caught_othernpc = 'Young boys notice you. Nudging each other, they click on their phone to see what\'s happening. You overhear their talk vaguely: "Look…! Look…! Not here, over there…! There is… Oh shit…!" "Shoot! Shoot! Faster…!" "Holy shit!", I\'ve never seen a woman being fucked in real." "What the fuck…?" "That\'s a cunt!" "Can it be done also in the ass?" "Idiot, they\'re able almost whole forearm insert there. Heifers want it so. I\'ve seen pics at Kirian\'s." "Don\'t brag…!" "Let\'s no quarrel!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7  &&  ((s as any).evgenQW ?? 0) < 4) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', uncle Misha ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "Oh dear! What kind of people! Like mother, like daughter! Exactly the same! Boobs exposed, legs apart. And the eyes are so cunning… Come to me then, we need to talk."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 7  &&  ((s as any).evgenQW ?? 0) >= 4) {
                                                                          (s as any).rnd_caught_othernpc = 'Your brother\'s football buddies notice you, when they are walking past you. They stop and start talking about you intensively: "Oh, my fuck, we treat her like a princess: only in her mouth… thank you… please… see you! It turns out that she is quite a prostitute. Oh shit, if we had known it then, we would have \' + func(\'gopsex\', \'hide\', \'gop_sextext2\') + \' that ripper in one gate all three of us, as we had wanted always. Well… Svetochka… It isn\'t hard for you to help us, is it…? After all, you are Kolya\'s sister… moreover older. Cavaliers, fuck… Now we get all. After all, they don\'t ask whores, they bang them right with their cocks, do they? Am I right, ' + ((s as any).pcs_nickname ?? 0) + '?"… "Hurrah, she nodded! Oooh, you\'re such our sweetie! Fuck yeah! We\'re lucky: We have got our cum dumpster now. See you soon, fuckhole! Prepare your butt hole! Let\'s delight Kolya. He has been always jacking off dreaming about her… I call dibs on her ass!" "Can she hold three at once in her mouth? We should try it long ago. Fuck, we were too shy to suggest it, frigging gentlemen!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                          (s as any).rnd_caught_othernpc = 'You are approached by a charwoman in the stairwell: "Well boys, step back and let your toy have a rest for a while. Don\'t throw away bottle, just put them on window sill when you\'re done. I\'ll take them away. Don\'t make a mess with scumbags everywhere! I gather up after you on half a bucket each day! Better, don\'t use them at all: it will be much pleasurable for you and your smasher without them or stack them neatly into her purse: she can take her trophies home with her, when she is done. Oi! Oi!!! Fuckbunny! Swallow, don\'t spit on the floor! Did you understand? Washing the floor after every whore, I would ruin my health. Don\'t drain your pussy onto the floor otherwise I\'ll make you lick all the scum!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 9) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', Aunt Luda ' + ((s as any).rnd_viewgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "Hey, ' + ((s as any).pcs_nickname ?? 0) + ', how is your sex life? Just think, it was only recently, when a tweeny, bows in her hair, blushing and stuttering, bought pads in my pharmacy for the first time. And now her lap squelches here all around so one can hear even on the street. You grew up very early. You better not stand like doggie here, fool. Do you know, what distinguishes sluts from decent girls? Scraped knees. Come for Green, I\'ll give it to you for a half price, goof!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 10) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', a mother with her little daughter notice you. The mother takes daughter by the hand and tells her: "Turn away and don\'t watch! This girl just did not obey her mama and that\'s why she\'s punished. Do you hear her calling her mama now? Obey mama and you\'ll never end up like her!" She turns to you: "Couldn\'t you wait, until you get home, slut? Do you have to shake buttocks just here? By the way, children walk here."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', \' + func(\'gopsex\', \'hide\', \'Shulga_var_name\') + \' notices you and stops. He asked you: "' + ((s as any).pcs_nickname ?? 0) + ', why do you go with these tadpoles?" You smirks and reply: "Frankly, I go with everybody."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 11  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', \' + func(\'gopsex\', \'hide\', \'Shulga_var_name\') + \' notices you and stops. He asks you: -"' + ((s as any).pcs_nickname ?? 0) + ', do you have a session of beneficence today, or something?" You are taken aback and you reply: "Why on earth? I don\'t go with strangers for free."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', uncle Misha ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).pcs_nickname ?? 0) + ', you are already hyped up, could you gratify the old boy?" You smile at him and reply: "Uncle Misha, as soon as I\'ve finished it here, I\'ll drop by you."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 12  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', uncle Misha ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).pcs_nickname ?? 0) + ', you are already hyped up, could you gratify the old boy?" You turn to him and reply: "Uncle Misha, I\'ll drop by you late in the evening, but for free I can do only a blowjob, fucking my pussy or my ass is for money. He bobbed: "OK, I\'ll consider about it and I\'ll be waiting for you in the evening!"';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', aunt Luda ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ':  "' + ((s as any).pcs_nickname ?? 0) + ', you brought your fuckers again! You\'ve been heard all over the house!"  You smirk and reply: "Aunt Luda, I cannot do it quietly."';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 13  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
                                                                          (s as any).rnd_caught_othernpc = '' + ((s as any).rnd_rodnya_text ?? 0) + ', aunt Luda ' + ((s as any).rnd_viewgg_text ?? 0) + ' and ' + ((s as any).rnd_talkgg_text ?? 0) + ' ' + ((s as any).rnd_talkgg2_text ?? 0) + ': "' + ((s as any).pcs_nickname ?? 0) + ', you make again the plan for me tomorrow!"';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                          (s as any).rnd_caughtgg_npc = '' + ((s as any).rnd_caught_mom ?? 0) + '';
                                                                          if ((!((s as any).motherKnowSpravka ?? 0))) {
                                                                            (s as any).motherKnowSpravka = 1;
                                                                          }
                                                                          if ((!((s as any).motherKnowWhore ?? 0))) {
                                                                            (s as any).motherKnowWhore = 1;
                                                                          }
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                          (s as any).rnd_caughtgg_npc = '' + ((s as any).rnd_caught_othernpc ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                          (s as any).rnd_caughtgg_npc = '' + ((s as any).rnd_caught_sister ?? 0) + '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                          (s as any).rnd_caughtgg_npc = '' + ((s as any).rnd_caught_brother ?? 0) + '';
                                                                          if (((s as any).brotherQW ?? 0)?.['know_slut'] < 2) {
                                                                            ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 2;
                                                                          }
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                          (s as any).rnd_caughtgg_npc = '' + ((s as any).rnd_caught_stepfather ?? 0) + '';
                                                                        }
                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 101) + 0);
                                                                        if (((s as any).temp_rand ?? 0) < 50) {
                                                                          (s as any).rnd_caughtgg_view = '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) >= 50  &&  ((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 5) {
                                                                          (s as any).rnd_caughtgg_view = '';
                                                                        }
                                                                        if (((s as any).temp_rand ?? 0) >= 50  &&  ((s as any).hour ?? 0) >= 5  &&  ((s as any).hour ?? 0) <= 23) {
                                                                          (s as any).rnd_caughtgg_view = '<br><font color = red>' + ((s as any).rnd_caughtgg_npc ?? 0) + '</font>';
                                                                        }
                                                                        // TODO-QSP: dynamic text: <<$rnd_caughtgg_view>>
                                                                        scene.text(`${((s as any).rnd_caughtgg_view ?? '')}`);
                                                                        // TODO-QSP: end & !! --- accview_ggsex ---
                                                                        if (String((s as any).locArgs?.[1] ?? '') === 'gg_whore_text') {
                                                                          (s as any).temp_rand = (Math.floor(Math.random() * 8) + 0);
                                                                          if ((!((s as any).temp_rand ?? 0))) {
                                                                            (s as any).dummy = 'slut';
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                            (s as any).dummy = 'prostitute';
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 2) {
                                                                            (s as any).dummy = 'whore';
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 3) {
                                                                            (s as any).dummy = 'hooker';
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 4) {
                                                                            (s as any).dummy = 'sporting lady';
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 5) {
                                                                            (s as any).dummy = 'floozy';
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 6) {
                                                                            (s as any).dummy = 'hoochie';
                                                                          }
                                                                          if (((s as any).temp_rand ?? 0) === 7) {
                                                                            (s as any).dummy = 'working girl';
                                                                          }
                                                                          (s as any).result = ((s as any).dummy ?? 0);
                                                                          // TODO-QSP: end & !! --- gg_whore_text ---
                                                                          if (String((s as any).locArgs?.[1] ?? '') === 'gop_gg_name') {
                                                                            (s as any).temp_rand = (Math.floor(Math.random() * 31) + 0);
                                                                            if ((!((s as any).temp_rand ?? 0))) {
                                                                              (s as any).dummy = 'floozy';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 1) {
                                                                              (s as any).dummy = 'slag';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 2) {
                                                                              (s as any).dummy = 'whore';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 3) {
                                                                              (s as any).dummy = 'scrub';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 4) {
                                                                              (s as any).dummy = 'broad';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 5) {
                                                                              (s as any).dummy = 'hole';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 6) {
                                                                              (s as any).dummy = 'cunt';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 7) {
                                                                              (s as any).dummy = 'slut';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 8) {
                                                                              (s as any).dummy = 'hoochie';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 9) {
                                                                              (s as any).dummy = 'moll';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 10) {
                                                                              (s as any).dummy = 'bitch';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 11) {
                                                                              (s as any).dummy = 'total hole';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 12) {
                                                                              (s as any).dummy = 'anal bitch';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 13) {
                                                                              (s as any).dummy = 'hooker';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 14) {
                                                                              (s as any).dummy = 'our toy';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 15) {
                                                                              (s as any).dummy = 'fuckbunny';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 16) {
                                                                              (s as any).dummy = 'sporting lady';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 17) {
                                                                              (s as any).dummy = 'free whore';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 18) {
                                                                              (s as any).dummy = 'working girl';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 19) {
                                                                              (s as any).dummy = '' + ((s as any).pcs_nickname ?? 0) + '-sweetie';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 20) {
                                                                              (s as any).dummy = 'promiscuous hole';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 21) {
                                                                              (s as any).dummy = '' + ((s as any).pcs_nickname ?? 0) + '-nymphet';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 22) {
                                                                              (s as any).dummy = 'sausage jockey';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 23) {
                                                                              (s as any).dummy = 'tart';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 24) {
                                                                              (s as any).dummy = 'cum dumpster';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 25) {
                                                                              (s as any).dummy = 'village bicycle';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 26) {
                                                                              (s as any).dummy = 'school bike';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 27) {
                                                                              (s as any).dummy = 'garden tool';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 28) {
                                                                              (s as any).dummy = 'slut';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 29) {
                                                                              (s as any).dummy = '' + ((s as any).gnikname ?? 0) + '';
                                                                            }
                                                                            if (((s as any).temp_rand ?? 0) === 30) {
                                                                              (s as any).dummy = '' + ((s as any).pcs_nickname ?? 0) + '-prostitot';
                                                                            }
                                                                            (s as any).result = ((s as any).dummy ?? 0);
                                                                            // TODO-QSP: end & !! --- gop_gg_name ---
                                                                            if (String((s as any).locArgs?.[1] ?? '') === 'gop_gg_name2') {
                                                                              (s as any).temp_rand = (Math.floor(Math.random() * 11) + 1);
                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                                (s as any).dummy = 'floozy';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 2) {
                                                                                (s as any).dummy = 'slag';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 3) {
                                                                                (s as any).dummy = 'whore';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 4) {
                                                                                (s as any).dummy = 'bitch';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 5) {
                                                                                (s as any).dummy = 'scrub';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 6) {
                                                                                (s as any).dummy = 'slut';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 7) {
                                                                                (s as any).dummy = 'broad';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 8) {
                                                                                (s as any).dummy = 'hooker';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 9) {
                                                                                (s as any).dummy = 'tramp';
                                                                              }
                                                                              if (((s as any).temp_rand ?? 0) === 10) {
                                                                                (s as any).dummy = 'prostitute';
                                                                              }
                                                                              (s as any).result = ((s as any).dummy ?? 0);
                                                                              // TODO-QSP: end & !! --- gop_gg_name2 ---
                                                                              if (String((s as any).locArgs?.[1] ?? '') === 'gop_text_npcr') {
                                                                                (s as any).temp_rand = (Math.floor(Math.random() * 4) + 1);
                                                                                if (((s as any).temp_rand ?? 0) === 1) {
                                                                                  (s as any).dummy = 'boys';
                                                                                }
                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                  (s as any).dummy = 'guys';
                                                                                }
                                                                                if (((s as any).temp_rand ?? 0) === 3) {
                                                                                  (s as any).dummy = 'buddies';
                                                                                }
                                                                                if (((s as any).temp_rand ?? 0) === 4) {
                                                                                  (s as any).dummy = 'companions';
                                                                                }
                                                                                (s as any).result = ((s as any).dummy ?? 0);
                                                                                // TODO-QSP: end & !! --- gop_text_npcr ---
                                                                                if (String((s as any).locArgs?.[1] ?? '') === 'gop_family_npc') {
                                                                                  (s as any).temp_rand = (Math.floor(Math.random() * 3) + 1);
                                                                                  if (((s as any).temp_rand ?? 0) === 1) {
                                                                                    (s as any).dummy = 'Shulga';
                                                                                  }
                                                                                  if (((s as any).temp_rand ?? 0) === 2) {
                                                                                    (s as any).dummy = 'Kotov';
                                                                                  }
                                                                                  if (((s as any).temp_rand ?? 0) === 3) {
                                                                                    (s as any).dummy = 'Ryzhov';
                                                                                  }
                                                                                  (s as any).result = ((s as any).dummy ?? 0);
                                                                                  // TODO-QSP: end & !! --- gop_family_npc ---
                                                                                  if (String((s as any).locArgs?.[1] ?? '') === 'gop_sextext1') {
                                                                                    (s as any).temp_rand = (Math.floor(Math.random() * 8) + 0);
                                                                                    if ((!((s as any).temp_rand ?? 0))) {
                                                                                      (s as any).dummy = 'plow';
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 1) {
                                                                                      (s as any).dummy = 'ram';
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 2) {
                                                                                      (s as any).dummy = 'fuck';
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 3) {
                                                                                      (s as any).dummy = 'hump';
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 4) {
                                                                                      (s as any).dummy = 'pound';
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 5) {
                                                                                      (s as any).dummy = 'bang';
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 6) {
                                                                                      (s as any).dummy = 'screw';
                                                                                    }
                                                                                    if (((s as any).temp_rand ?? 0) === 7) {
                                                                                      (s as any).dummy = 'hump';
                                                                                    }
                                                                                    (s as any).result = ((s as any).dummy ?? 0);
                                                                                    // TODO-QSP: end & !! --- gop_sextext1 ---
                                                                                    if (String((s as any).locArgs?.[1] ?? '') === 'gop_sextext2') {
                                                                                      (s as any).temp_rand = (Math.floor(Math.random() * 8) + 0);
                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                        (s as any).dummy = 'fucked';
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                        (s as any).dummy = 'banged';
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 2) {
                                                                                        (s as any).dummy = 'pounded';
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 3) {
                                                                                        (s as any).dummy = 'fucked';
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 4) {
                                                                                        (s as any).dummy = 'rammed';
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 5) {
                                                                                        (s as any).dummy = 'plowed';
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 6) {
                                                                                        (s as any).dummy = 'screwed';
                                                                                      }
                                                                                      if (((s as any).temp_rand ?? 0) === 7) {
                                                                                        (s as any).dummy = 'humped';
                                                                                      }
                                                                                      (s as any).result = ((s as any).dummy ?? 0);
                                                                                      // TODO-QSP: end & !! --- gop_sextext2 ---
                                                                                      if (String((s as any).locArgs?.[1] ?? '') === 'gop_sextext3') {
                                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 9) + 0);
                                                                                        if ((!((s as any).temp_rand ?? 0))) {
                                                                                          (s as any).dummy = 'fucking';
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                                          (s as any).dummy = 'humping';
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                                          (s as any).dummy = 'screwing';
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                                          (s as any).dummy = 'banging';
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 4) {
                                                                                          (s as any).dummy = 'bonking';
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 5) {
                                                                                          (s as any).dummy = 'plowing';
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 6) {
                                                                                          (s as any).dummy = 'shagging';
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 7) {
                                                                                          (s as any).dummy = 'pounding';
                                                                                        }
                                                                                        if (((s as any).temp_rand ?? 0) === 8) {
                                                                                          (s as any).dummy = 'ramming';
                                                                                        }
                                                                                        (s as any).result = ((s as any).dummy ?? 0);
                                                                                        // TODO-QSP: end & !! --- gop_sextext3 ---
                                                                                        if (String((s as any).locArgs?.[1] ?? '') === 'gop_text3') {
                                                                                          (s as any).temp_rand = (Math.floor(Math.random() * 5) + 0);
                                                                                          if ((!((s as any).temp_rand ?? 0))) {
                                                                                            (s as any).dummy = 'touch';
                                                                                          }
                                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                                            (s as any).dummy = 'grope';
                                                                                          }
                                                                                          if (((s as any).temp_rand ?? 0) === 2) {
                                                                                            (s as any).dummy = 'feel';
                                                                                          }
                                                                                          if (((s as any).temp_rand ?? 0) === 3) {
                                                                                            (s as any).dummy = 'fondle';
                                                                                          }
                                                                                          if (((s as any).temp_rand ?? 0) === 4) {
                                                                                            (s as any).dummy = 'caress';
                                                                                          }
                                                                                          (s as any).result = ((s as any).dummy ?? 0);
                                                                                          // TODO-QSP: end & !! --- gop_text3 ---
                                                                                          if (String((s as any).locArgs?.[1] ?? '') === 'gop_name_npc') {
                                                                                            (s as any).dummyi = (Math.floor(Math.random() * 3) + 0);
                                                                                            // TODO-QSP: $dummy[0] = 'A11'
                                                                                            // TODO-QSP: $dummy[1] = 'A9'
                                                                                            // TODO-QSP: $dummy[2] = 'A10'
                                                                                            (s as any).gop_ID_npc = (((s as any).dummy ?? 0)?.[String((s as any).dummyi ?? 0)] ?? 0);
                                                                                            // TODO-QSP: $dummy[0] = 'Vasily'
                                                                                            // TODO-QSP: $dummy[1] = 'Vitek'
                                                                                            // TODO-QSP: $dummy[2] = 'Dan'
                                                                                            (s as any).result = (((s as any).dummy ?? 0)?.[String((s as any).dummyi ?? 0)] ?? 0);
                                                                                            // TODO-QSP: end & !! --- gop_name_npc ---
                                                                                            if (String((s as any).locArgs?.[1] ?? '') === 'gop_text_beer2') {
                                                                                              (s as any).dummyi = (Math.floor(Math.random() * 10) + 0);
                                                                                              if ((!((s as any).dummyi ?? 0))) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' opens a new bottle of beer, he makes a couple of sips and passes the bottle to you. You stay to drink with the boys.';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 1) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' pours beer into an empty glass and hands it to you. You stay to drink with the guys.';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 2) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' hands you a bottle of beer. You take a draught. ' + qspFunc(s, 'gopsex', 'hide', 'gop_family_npc') + ' says loudly, "Drunken slut".';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 3) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' uncorks and gives you a can of beer. You eagerly drain it in one gulp. "Wow" ' + qspFunc(s, 'gopsex', 'hide', 'gop_text_npcr') + ' gives a sigh of admiration seeing it.';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 4) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' take a flask, pours beer into a glass, and hands it to you. You sit down on the bench and sprawl leisurely boozing with chavs.';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 5) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' opens a bottle of beer and hands it to you. You sip beer slowly.';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 6) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' uncork a bottle of beer and gives it to you. You eagerly drain it and plop the empty bottle on the bench.';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 7) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' take a sip from a big PET-bottle and hands it to you. You take few gulps and ' + qspFunc(s, 'gopsex', 'hide', 'gop_family_npc') + ' takes the bottle from you.';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 8) {
                                                                                                (s as any).dummy = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' take a sip from a can and hands it to you. You begin eagerly swig the beer… ' + qspFunc(s, 'gopsex', 'hide', 'gop_family_npc') + ' takes the can away from you "Fuck, let some for us, fool!"';
                                                                                              }
                                                                                              if (((s as any).dummyi ?? 0) === 9) {
                                                                                                (s as any).dummy = '"Have one." ' + qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' hands you a bottle of unfinished Zhiguli and he smirks seeing as you drink it eagerly. Your mood lightenes.';
                                                                                              }
                                                                                              (s as any).result = ((s as any).dummy ?? 0);
                                                                                              // TODO-QSP: end & !! --- gop_text_beer2 ----
                                                                                              if (String((s as any).locArgs?.[1] ?? '') === 'Shulga_var_name') {
                                                                                                // TODO-QSP: $dummy[0] = 'Shulga'
                                                                                                // TODO-QSP: $dummy[1] = 'Vasily'
                                                                                                // TODO-QSP: $dummy[2] = 'Vaska'
                                                                                                // TODO-QSP: $dummy[3] = 'Vasily'
                                                                                                (s as any).result = 0;
                                                                                                // TODO-QSP: end & !! --- Shulga_var_name ---
                                                                                                if (String((s as any).locArgs?.[1] ?? '') === 'gop_beer_drova') {
                                                                                                  (s as any).temp_rand = 0;
                                                                                                  if ((!((s as any).temp_rand ?? 0))) {
                                                                                                    (s as any).dummy = '"' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name') + ', you drank all the beer! Get up, let\'s ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' you!"';
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                    (s as any).dummy = '"You drank up all our beer, ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name') + '!, Get up, it\'s time to work off your share."';
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                    (s as any).dummy = '"' + ((s as any).pcs_nickname ?? 0) + ', stop drinking! Come on. Get up and serve us."';
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                    (s as any).dummy = '"Fuck you ' + ((s as any).pcs_nickname ?? 0) + '-drunkard, no more drink, you are almost dopey. Get up, let\'s \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you!"';
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                    (s as any).dummy = '"Are you drunk? It\'s time to work off: Get up, prepare your box!"';
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                    (s as any).dummy = '"Well ' + ((s as any).pcs_nickname ?? 0) + '. You drank all the beer, \' + func(\'gopsex\', \'hide\', \'gop_gg_name\') + \'! Get up, it\'s time to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you!"';
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                    (s as any).dummy = '"Well ' + ((s as any).pcs_nickname ?? 0) + ', freebies ran out. Get up, let\'s \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you!"';
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 7) {
                                                                                                    (s as any).dummy = '"You aren\'t ruined yet, ' + ((s as any).pcs_nickname ?? 0) + '? So no more drink! You roped in beer us, now get up and work off the treat!"';
                                                                                                  }
                                                                                                  if (((s as any).temp_rand ?? 0) === 8) {
                                                                                                    (s as any).dummy = '"At this rate, we would fuck a rubber doll, and I don\'t like it so. \' + func(\'gopsex\', \'hide\', \'gop_text_npcr\') + \', don\'t pour her glass more! Come on, ' + ((s as any).pcs_nickname ?? 0) + '! Get up and show off your box!"';
                                                                                                  }
                                                                                                  (s as any).result = ((s as any).dummy ?? 0);
                                                                                                  // TODO-QSP: end & !! --- gop_beer_drova ---
                                                                                                  if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_cun') {
                                                                                                    (s as any).temp_rand = (Math.floor(Math.random() * 6) + 0);
                                                                                                    if ((!((s as any).temp_rand ?? 0))) {
                                                                                                    }
                                                                                                    if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                    }
                                                                                                    if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                      (s as any).txt_sex_cun = 'You lie down on your back and spread your thighs wide apart. ' + ((s as any).npcdesc ?? 0) + ' pulls your panties aside and his mouth clings to your wet pussy. He licks and sucks your cunt lips, your clit, and from time to time his tongue slides into your box. You moan, holding his head and pressing it tightly to your wet pussy.';
                                                                                                    }
                                                                                                    if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                      (s as any).txt_sex_cun = '' + ((s as any).npcdesc ?? 0) + ' puts you on your back and moves to your wet box. He licks your clitoris, then he puts straight two fingers into your wet pussy and starts fingering you. Squishing sounds are coming from your cunny and your moaning resounds surroundings. ' + ((s as any).npcdesc ?? 0) + ' grins and his hand moves even faster';
                                                                                                    }
                                                                                                    if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                      (s as any).txt_sex_cun = 'You part your legs apart exposing your pussy to his view. Without hesitation, ' + ((s as any).npcdesc ?? 0) + ' starts kissing your box. He tickles your clit with his tongue and then he ran down between your pussy lips to your love hole, which was really very wet. You were ready for sex already so you could start fucking right now. But ' + ((s as any).npcdesc ?? 0) + ' is not in a hurry. He caresses you with both his tongue and his fingers listening to your sweet moans. You writhes with eagerness, but you don\'t beg just enjoy the moment.';
                                                                                                    }
                                                                                                    if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                    }
                                                                                                    // TODO-QSP: dynamic text: <<$txt_sex_cun>>
                                                                                                    scene.text(`${((s as any).txt_sex_cun ?? '')}`);
                                                                                                    // TODO-QSP: end & !! --- text_sex_cun ---
                                                                                                    if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_69') {
                                                                                                      (s as any).temp_rand = (Math.floor(Math.random() * 2) + 0);
                                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                                        (s as any).txt_sex_69 = 'Your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips softly accept his member sucking it passionately all round like a lollipop, helping yourself with your nimble tongue tickling his frenulum. At the same time ' + ((s as any).npcdesc ?? 0) + ' grasps your clit with his fingertips rubbing it gently between them. Simultaneously he examines your love hole with his tongue, which has been already prepared to accept something bigger.';
                                                                                                      }
                                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                        (s as any).txt_sex_69 = '' + ((s as any).npcdesc ?? 0) + ' lies down on his back, takes your leg and shifts it over himself so your tushie was just in front of his face. Running his tongue between your nether lips, he feels you take his cock deep into your mouth again. You loosen your grasp a bit then and start sucking it with your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips.';
                                                                                                      }
                                                                                                      // TODO-QSP: dynamic text: <<$txt_sex_69>>
                                                                                                      scene.text(`${((s as any).txt_sex_69 ?? '')}`);
                                                                                                      // TODO-QSP: end & !! --- text_sex_69 ---
                                                                                                      if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_hj') {
                                                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 4) + 0);
                                                                                                        if ((!((s as any).temp_rand ?? 0))) {
                                                                                                          (s as any).txt_sex_hj = 'Without talking, ' + ((s as any).npcdesc ?? 0) + ' shoves his cock in your face.';
                                                                                                        }
                                                                                                        scene.text('"That\'s like jerk off." You say laughing, take his member into your hand and start pumping.');
                                                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                          (s as any).txt_sex_hj = 'You take his still soft cock into your hand and it starts growing noticeably. You begin a hand job feasting your eyes on his strong prick.';
                                                                                                        }
                                                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                          (s as any).txt_sex_hj = '' + ((s as any).npcdesc ?? 0) + ' shoves his cock into your hand. Your fingers grip on his fat elastic trunk shakily. He tells you to hold it firmer.';
                                                                                                        }
                                                                                                        scene.text('"Don\'t release it and move your hand up and down…" He takes hold showing how to do it.');
                                                                                                        scene.text('"Not so sharply… yes so. Don\'t pull… Yes, that\'s it. Great…! More… More.!"');
                                                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                          (s as any).txt_sex_hj = '' + ((s as any).npcdesc ?? 0) + ' asks you to do hand job to him. You take his dick firmly into your hand and start to rub the skin back and forth.';
                                                                                                        }
                                                                                                        // TODO-QSP: dynamic text: <<$txt_sex_hj>>
                                                                                                        scene.text(`${((s as any).txt_sex_hj ?? '')}`);
                                                                                                        // TODO-QSP: end & !! --- text_sex_hj ---
                                                                                                        if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_bj') {
                                                                                                          (s as any).temp_rand = (Math.floor(Math.random() * 8) + 0);
                                                                                                          if ((!((s as any).temp_rand ?? 0))) {
                                                                                                            (s as any).txt_sex_bj = 'You take his member into your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips, and ' + ((s as any).npcdesc ?? 0) + ' starts to fuck your mouth.';
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                            (s as any).txt_sex_bj = 'You take his member into your mouth, and start to suck it. ' + ((s as any).npcdesc ?? 0) + ' takes hold of your ' + ((s as any).pcs_haircolor ?? 0) + ' ' + ((s as any).curly_txt ?? 0) + ' hair and impales your head at his prick. Slurping, you swallow his member. You could feel with your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips every vein and bump on its skin.';
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                            (s as any).txt_sex_bj = 'You grasp his member with your hand and pumping, you take with your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips its head into your mouth. His dick stiffens more and gains impressive size. You learned to swallow a cock quite well long ago, and you used it always since that time. ' + ((s as any).npcdesc ?? 0) + ' was fascinated. You fondle his balls with one hand, and stroke his prick with other one, you release it from time to time so that you can take his shaft in your mouth fully.';
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                            (s as any).txt_sex_bj = 'Without talking, ' + ((s as any).npcdesc ?? 0) + ', seizes you by your ' + ((s as any).pcs_haircolor ?? 0) + ' ' + ((s as any).curly_txt ?? 0) + ' hair, tilts your head towards his penis. He starts swinging his hips fucking your mouth in such way.';
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                            (s as any).txt_sex_bj = '' + ((s as any).npcdesc ?? 0) + ', seizes you by your ' + ((s as any).pcs_haircolor ?? 0) + ' ' + ((s as any).curly_txt ?? 0) + ' hair and starts moving with your head in pace of his swinging. You choke a bit but continued in sucking.';
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                            (s as any).txt_sex_bj = 'You start to lick his dick with yout nimble tongue, then gather a little saliva, you take his prick in your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips and begin to suck, rubbing it with your hand at the same time.';
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                            (s as any).txt_sex_bj = 'You take his dick in your mouth, your tongue caress its sides, then the bottom and then the tip of head. You purse your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips and start moving back and forth faster. You let his dick slid out of your mouth and you examine a result of your job with excitement. The head becomes even harder, purple and shiny. You feel a faint ache in your lower abdomen. You bend upward the hard shaft and run your tongue from the balls to the cock head, then you tickle it from all sides digging your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips in the head.';
                                                                                                          }
                                                                                                          if (((s as any).temp_rand ?? 0) === 7) {
                                                                                                            (s as any).txt_sex_bj = 'You gently wrap his prick with your wet ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips and let it slide in your mouth. You rub it with your nimble tongue, stroke its trunk and fondling his sack with your hands. You captur it stronger, slurping juices and your saliva enveloping its head. You are tickling it with your tongue and you hear ' + ((s as any).npcdesc ?? 0) + '\'s sweet moaning.';
                                                                                                          }
                                                                                                          // TODO-QSP: dynamic text: <<$txt_sex_bj>>
                                                                                                          scene.text(`${((s as any).txt_sex_bj ?? '')}`);
                                                                                                          // TODO-QSP: end & !! --- text_sex_bj ---
                                                                                                          if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_bjt') {
                                                                                                            (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
                                                                                                            if ((!((s as any).temp_rand ?? 0))) {
                                                                                                              (s as any).txt_sex_bjt = 'He shove his prick deep into your throat squeezing it with his hand. Your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips grip tightly his trunk. You aren\'t giving a blowjob. ' + ((s as any).npcdesc ?? 0) + ' is simply fucking your throat and you both have a lot of fun.';
                                                                                                            }
                                                                                                            if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                              (s as any).txt_sex_bjt = 'You try to swallow his cock deeper with your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips. You are rubbing it with you hand again, and caressing it with your mouth simultaneously. With each thrust you take it deeper and deeper in your mouth until it reaches your throat. Tears well in your eyes but you still try to put it in even deeper. ' + ((s as any).npcdesc ?? 0) + ' grabbs your ' + ((s as any).pcs_haircolor ?? 0) + ' ' + ((s as any).curly_txt ?? 0) + ' hair and took the initiative and starts pulling your head on his shaft.';
                                                                                                            }
                                                                                                            if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                              (s as any).txt_sex_bjt = 'The cock head bumps into your throat and it even moves farther, but you can\'t take it more - it was simply too thick. Nevertheless, at each thrust, bit by bit, it moves deeper and deeper. A rope of your saliva oozes out of your mouth down to your chin and drips on the ground.';
                                                                                                            }
                                                                                                            // TODO-QSP: dynamic text: <<$txt_sex_bjt>>
                                                                                                            scene.text(`${((s as any).txt_sex_bjt ?? '')}`);
                                                                                                            // TODO-QSP: end & !! --- text_sex_bjt ---
                                                                                                            if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_doggy') {
                                                                                                              (s as any).temp_rand = (Math.floor(Math.random() * 7) + 0);
                                                                                                              if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                if (((s as any).PCloSkirt ?? 0) > 0) {
                                                                                                                  (s as any).dummytxt = 'He hikes up your skirt';
                                                                                                                } else {
                                                                                                                  if (((s as any).PCloPants ?? 0) > 2) {
                                                                                                                    (s as any).dummytxt = 'He pulls your shorts down to your knees';
                                                                                                                  } else {
                                                                                                                    (s as any).dummytxt = 'He pulls your pants down to your knees';
                                                                                                                  }
                                                                                                                }
                                                                                                                (s as any).txt_sex_doggy = 'You delight ' + ((s as any).npcdesc ?? 0) + '. He jumps, and prompts you to bend forward. ' + ((s as any).dummytxt ?? 0) + ' revealing your cute tushy, and shoves his dick into your pussy from behind. You don\'t expect such abrupt action, but he is fucking you for ten minutes, almost without slowing the pace, only occasionally stopping to take a breath. You think he would be tired soon, but it turns out that he is more tenacious than one might assume. The last five minutes you forget where you are, and screaming your head off. ' + ((s as any).npcdesc ?? 0) + ' is growling spanking your butt with one hand and pulling your ' + ((s as any).pcs_haircolor ?? 0) + ' ' + ((s as any).curly_txt ?? 0) + ' hair with the other.';
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                (s as any).txt_sex_doggy = '' + ((s as any).npcdesc ?? 0) + ' jerks off and then plants you on his cock. You start jiggle with your ass and his prick slides fully into your cunny and hits your cervix. You arch back and he grabs firmly your butt and starts fucking you stronger.';
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                (s as any).txt_sex_doggy = '' + ((s as any).npcdesc ?? 0) + ' has made you bend forward and then he stands behind you. Thereafter, he thrusts his cock into your wet cunt in one sharp move. You twitch and scream with searing and sharp pain, but stay obediently forward bending. He starts screwing you to the hilt roughly, he is ramming his shaft into you as if he wanted to get with each thrust deeper and deeper into your hole. He is fucking violently his classmate, holding your ' + ((s as any).pcs_haircolor ?? 0) + ' ' + ((s as any).curly_txt ?? 0) + ' hair with one hand. ' + ((s as any).npcdesc ?? 0) + '\'s moves are sharp and strong. Silence is breaking with smacking sounds when his pelvis rebound with force from your springy butt, and you silently moan through gritted teeth.';
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                (s as any).txt_sex_doggy = 'Holding your waist, ' + ((s as any).npcdesc ?? 0) + ' is banging you, slowly increasing his pace. You are diligently fucking back moaning with pleasure and in quest to please him. Your boobs are swaying and your pink swollen nipples are sticking out seductively. You feel as his strong member alternately fills and pleasantly stretches your pussy at one moment and then it gets out fully. You feel like a whore and you like it.';
                                                                                                              }
                                                                                                              if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                                (s as any).txt_sex_doggy = '' + ((s as any).npcdesc ?? 0) + ' turns you, prompts you to bend forward and without ceremony he starts banging your pussy. Slaps beoame louder and louder. His chest and back are glistening with sweat, his fingers dig into your butt and the thrusts become stronger and shorter. ' + ((s as any).npcdesc ?? 0) + ' is not pulling out his prick fully from your cunt but just a bit. His cock is in your box completely and still keeps pounding. It seems that he won\'t stop.';
                                                                                                              }
                                                                                                              // TODO-QSP: dynamic text: <<$txt_sex_doggy>>
                                                                                                              scene.text(`${((s as any).txt_sex_doggy ?? '')}`);
                                                                                                              // TODO-QSP: end & !! --- text_sex_doggy ---
                                                                                                              if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_doggy_anal') {
                                                                                                                (s as any).temp_rand = (Math.floor(Math.random() * 9) + 0);
                                                                                                                if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                  (s as any).txt_sex_doggy_anal = '"I missed your tight tushie, baby! I\'m going to fuck your bum now, my sweet chick". You feel that his prick is hard and jostles against your butt. ' + ((s as any).npcdesc ?? 0) + ' spits into his palm, greases his cock head and sets the glans to your anus. He starts pushing and slowly and gentle shoves his cock in your ass. As soon as the cock is fully in your bum, ' + ((s as any).npcdesc ?? 0) + ' starts wiggling with his pelvis holding your hips. You moan loudly and start fucking back and impaling yourself on his big cock.';
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                  (s as any).txt_sex_doggy_anal = '' + ((s as any).npcdesc ?? 0) + ' puts his cock head to your narrow entrance and pushes in. Your sphincter stretches and allows his thin prick to slide into your bum without exceptional resistance. He grabs your hips and starts fucking fast your bum. You shriek out at each thrust, which he enjoyes it a lot he is banging you faster and faster. He was seize with animal instincts and he desires so as you scream louder and louder continuously. ' + ((s as any).npcdesc ?? 0) + ' shoves his prick deep into your bowels so his balls smash your taint.';
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                  (s as any).txt_sex_doggy_anal = '' + ((s as any).npcdesc ?? 0) + ' moves you on your knees and he spoons to you from behind. He holds your bum with one hand and with other hand he aims his prick into the brown eye. It is seen that you enjoyed it. Holding your butt firmly, he is swinging his hips back and forth so forcefully, so smacks are somewhat frenzied, are both sonorous and muffled. And so fast: a swing, a hit, a swing, a hit. He starts drawing you close, when he reaches your womb, he draws close your ass, which rippled by his strokes.';
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                  (s as any).txt_sex_doggy_anal = '' + ((s as any).npcdesc ?? 0) + ' drags you with him. You find yourself being on elbows and knees and you grasp that he is about to penetrate you. He leans tip of his cock against your anus and jostles. It is a little painful, but the desire to pleasure outweighed. ' + ((s as any).npcdesc ?? 0) + ' gradually accelerates his screwing. Your anus relaxes and stretches so his prick could pass easily now.';
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                                  (s as any).txt_sex_doggy_anal = 'You stand with legs slightly apart, bending forward, he is holding your butt and his prick is fully hid in your ass hole. Breathing heavily, you are taking pleasure in this state. You want so that ' + ((s as any).npcdesc ?? 0) + ' is fully in you and your whole butt feels his strong bangs, and his member is moving back and forth, and waves induced by his banging, fly along your bum. You want to be fucked as a filthy whore.';
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 7) {
                                                                                                                  (s as any).txt_sex_doggy_anal = '' + ((s as any).npcdesc ?? 0) + ' is holding your bum firmly and screwing your brown eye with his prick in full swing. He is banging you heftily and with a backswing. Stronger and even stronger, helping yourself with his hands, he pulls your firm bum towards him. You don\'t feel pain in your anus yet, it gives nice pleasant itching, and you feel something hot and flexible which penetrated deeper and deeper, and disappearing somewhere there.';
                                                                                                                }
                                                                                                                if (((s as any).temp_rand ?? 0) === 8) {
                                                                                                                  (s as any).txt_sex_doggy_anal = '' + ((s as any).npcdesc ?? 0) + ' instructs you to bend forward and aims the head of his cock to your anus and starts pushing his member into your butt. Your ass is already relaxed and stretched and his cock slide fully into your bowels. ' + ((s as any).npcdesc ?? 0) + ' starts screwing you roughly. Bang! Bang! Bang! Smack! The cock moves back and forth. Waves caused by his blows, fly along your arse, your boobs are shaking, your head shudders in the pace of his strokes. Moan of pleasure flies from your lips. You try to resist to his violent pressure and the bonking. Your vision becomes blurred and color shadows and patterns filled your mind. Squeezing your ass, ' + ((s as any).npcdesc ?? 0) + ' is fucking it strongly and tiresome.';
                                                                                                                }
                                                                                                                // TODO-QSP: dynamic text: <<$txt_sex_doggy_anal>>
                                                                                                                scene.text(`${((s as any).txt_sex_doggy_anal ?? '')}`);
                                                                                                                // TODO-QSP: end & !! --- text_sex_doggy_anal ---
                                                                                                                if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_cow') {
                                                                                                                  (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
                                                                                                                  if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                    (s as any).txt_sex_cow = '' + ((s as any).npcdesc ?? 0) + ' sits down on the couch, you straddle him and slowly lower yourself on his cock slipping it all of the way up inside your tight cunt. You start bouncing your hips sliding up and down his shaft. You are fucking, your eyes closed and you forget everything but her lust';
                                                                                                                  }
                                                                                                                  if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                  }
                                                                                                                  if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                    (s as any).txt_sex_cow = 'You swing your leg over and straddle him, reaching down, you grasp his hard cock and guide it to your wet pussy. Fucking him, you occasionally lean and kiss him and at that time your boobs touch his chest. After a while, you start squeezing him more with your legs and you press tightly to his groin, trying to get his member deeper into your box.';
                                                                                                                  }
                                                                                                                  // TODO-QSP: dynamic text: <<$txt_sex_cow>>
                                                                                                                  scene.text(`${((s as any).txt_sex_cow ?? '')}`);
                                                                                                                  // TODO-QSP: end & !! --- text_sex_cow ---
                                                                                                                  if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_cow_anal') {
                                                                                                                    (s as any).txt_sex_cow_anal = 'You squat so you could control height of your ass better. You lift your bum up firstly and then slowly lower your ass again, trying impale yourself on ' + ((s as any).npcdesc ?? 0) + '\'s dick. As soon as its head passes your sphincter, you start swaying your hips slightly. During the riding, you feet that your ass became accustomed to his member, there is no pain. You realize that you have started spontaneously sliding lower and lower.';
                                                                                                                    // TODO-QSP: dynamic text: <<$txt_sex_cow_anal>>
                                                                                                                    scene.text(`${((s as any).txt_sex_cow_anal ?? '')}`);
                                                                                                                    // TODO-QSP: end & !! --- text_sex_cow_anal ---
                                                                                                                    if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_miss') {
                                                                                                                      (s as any).temp_rand = (Math.floor(Math.random() * 6) + 0);
                                                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                        (s as any).txt_sex_miss = '' + ((s as any).npcdesc ?? 0) + ' pushes you to lay on your back and then he lies down at you. The boy puts the soft purple head of his cock to your box and pushes in. You sigh feebly and clasp your legs around his butt. He slides to the hilt in your box and starts carefully moving as if he is afraid to cause you pain. Your cunt is wet inside and hot like a furnace. You catch his pace and fucking back you fully forget about the rest of world.';
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                        (s as any).txt_sex_miss = '' + ((s as any).npcdesc ?? 0) + ' puts you down on your back, he spreads your legs with his pelvis to sides and he lies down his stomach at you. He penetrates you groaning and watching his member sliding fast into your love hole, softly parting your nether lips. Elastic walls of your cunt softly envelope and captivate his member. He leans his hands on the bed hanging down over you, looking into your face and you keep your eyes on him. You are quite skilled, despite your age. When he is in you, you tightly squeeze your feet beneath him and to further stimulate his member with your hips. He is screwing you experiences a special gripping pleasure, being tightly captured with your hips.';
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                        (s as any).txt_sex_miss = 'His member is tossing in your cunt like a crazy bull, you sense his hard trunk every time when ' + ((s as any).npcdesc ?? 0) + ' literally stamps your tender groin with his pelvis. He tenses up somewhat and starts banging you tirelessly, what make his dick quite hot.';
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                        (s as any).txt_sex_miss = 'You are lying on your back, ' + ((s as any).npcdesc ?? 0) + ' starts running along yours nether lips with his bare glans. You feel very ticklish sensation, when he rubs your clit. Later, when he reaches your hole, he starts dipping there a bit more, ramming several times and then he gets out again. Gradually the deepness increases and finally he is fucking you fully. To say true, the position isn\'t very comfortable, but on the other hand he can see the whole body of his moaning mate and it was worth seeing. Suddenly you moans : "More…! More…! Come on!"';
                                                                                                                      }
                                                                                                                      if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                        (s as any).txt_sex_miss = 'Your pussy is well greased and his member slides easily into your love hole. You feel as his mushroom head is stretching inner walls of your fanny. You let out moan with each penetration. It doesn\'t last long and you get accustomed. You put your hands on his buttock and start set the pace. "Faster! faster!" Your whisper is melting into moaning and you tilt your head back. ' + ((s as any).npcdesc ?? 0) + ' doesn\'t contain himself and he rams his prick so deep so your pubes touched. You are breathing fast and heavily through your teeth. After a while ' + ((s as any).npcdesc ?? 0) + ' is fucking you openly. In turn, you seize his back and moan monotonously.';
                                                                                                                      }
                                                                                                                      // TODO-QSP: dynamic text: <<$txt_sex_miss>>
                                                                                                                      scene.text(`${((s as any).txt_sex_miss ?? '')}`);
                                                                                                                      // TODO-QSP: end & !! --- text_sex_miss ---
                                                                                                                      if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_miss_anal') {
                                                                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 2) + 0);
                                                                                                                        if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                          (s as any).txt_sex_miss_anal = '' + ((s as any).npcdesc ?? 0) + ' pushes you to lay on your back and then he lies down at you. The boy puts the soft purple head of his cock to your pucker and pushes in. You sigh feebly and clasp your legs around his butt. He slides to the hilt in your bum and starts carefully moving as if he is afraid to cause you pain. Your anus is well lubbed and hot like a furnace. You catch his pace and fucking back you fully forget about the rest of world.';
                                                                                                                        }
                                                                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                        }
                                                                                                                        // TODO-QSP: dynamic text: <<$txt_sex_miss_anal>>
                                                                                                                        scene.text(`${((s as any).txt_sex_miss_anal ?? '')}`);
                                                                                                                        // TODO-QSP: end & !! --- text_sex_miss_anal ---
                                                                                                                        if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_sideways') {
                                                                                                                          (s as any).temp_rand = (Math.floor(Math.random() * 2) + 0);
                                                                                                                          if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                            (s as any).txt_sex_sideways = '';
                                                                                                                          }
                                                                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                            (s as any).txt_sex_sideways = '';
                                                                                                                          }
                                                                                                                          // TODO-QSP: dynamic text: <<$txt_sex_sideways>>
                                                                                                                          scene.text(`${((s as any).txt_sex_sideways ?? '')}`);
                                                                                                                          // TODO-QSP: end & !! --- text_sex_sideways ---
                                                                                                                          if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_sideways_anal') {
                                                                                                                            (s as any).temp_rand = (Math.floor(Math.random() * 2) + 0);
                                                                                                                            if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                              (s as any).txt_sex_sideways_anal = '';
                                                                                                                            }
                                                                                                                            if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                              (s as any).txt_sex_sideways_anal = '';
                                                                                                                            }
                                                                                                                            // TODO-QSP: dynamic text: <<$txt_sex_sideways_anal>>
                                                                                                                            scene.text(`${((s as any).txt_sex_sideways_anal ?? '')}`);
                                                                                                                            // TODO-QSP: end & !! --- text_sex_sideways_anal ---
                                                                                                                            if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_cumm') {
                                                                                                                              (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
                                                                                                                              if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                (s as any).txt_sex_cumm = '' + ((s as any).npcdesc ?? 0) + ' quickly pulls out his cock and shoves it into your mouth. You don\'t succeed in making an objection and stream of his hot cum hits your tonsils, you instinctively cling closer to him. He cumms and several long torrents of hot juice flood your mouth. In spite of that you try to swallow it all, surplus of his semen runs out of your mouth down your chin.';
                                                                                                                              }
                                                                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                (s as any).txt_sex_cumm = 'You willingly take his cock in your mouth and you are sucking it with delight until ' + ((s as any).npcdesc ?? 0) + ' pours into your mouth a fair dose of his sticky baby batter.';
                                                                                                                              }
                                                                                                                              if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                (s as any).txt_sex_cumm = 'You swallow his dick, your tongue is tickling his big balls and don\'t last long and his throbbing member spills hot stream of semen into your mouth.';
                                                                                                                              }
                                                                                                                              // TODO-QSP: dynamic text: <<$txt_sex_cumm>>
                                                                                                                              scene.text(`${((s as any).txt_sex_cumm ?? '')}`);
                                                                                                                              // TODO-QSP: end & !! --- text_sex_cumm ---
                                                                                                                              if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_cumface') {
                                                                                                                                (s as any).temp_rand = (Math.floor(Math.random() * 4) + 0);
                                                                                                                                if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                  (s as any).txt_sex_cumface = '' + ((s as any).npcdesc ?? 0) + ' covers all your face with his hot sticky semen.';
                                                                                                                                }
                                                                                                                                if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                  (s as any).txt_sex_cumface = '' + ((s as any).npcdesc ?? 0) + ' pulls out his cock and aims it at your face. You see its purple head from which spurts his cum. You feel as warm sticky blobs are landing on your face and after a while his hot cum runs down over your chin and drips on the ground.';
                                                                                                                                }
                                                                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                  (s as any).txt_sex_cumface = '"Oh fuck!" ' + ((s as any).npcdesc ?? 0) + ' shouts out and pulls his cock out of your sweet captivity and takes it in his hand. A first long stream appears, you screw up your eyes and feel as a trickle of semen hits your chin and made a rope over your cheek. The second shot he aims deliberately straight at your cheek so you have barely a chance to close your eyes. This eruption is rich enough to cover your face with sticky cream.';
                                                                                                                                }
                                                                                                                                if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                  (s as any).txt_sex_cumface = '' + ((s as any).npcdesc ?? 0) + ' shifts his cock up to front of your face. At that moment a sticky stream strikes straight into your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips. Trickles of semen is flowing down along your chin and drips on the ground. Ropes of sticky cum hangs down from your chin now. ' + ((s as any).npcdesc ?? 0) + ' spots it after a while when he finally complacently releases last drops of his semen.';
                                                                                                                                }
                                                                                                                                // TODO-QSP: dynamic text: <<$txt_sex_cumface>>
                                                                                                                                scene.text(`${((s as any).txt_sex_cumface ?? '')}`);
                                                                                                                                // TODO-QSP: end & !! --- text_sex_cumface ---
                                                                                                                                if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_cumbody') {
                                                                                                                                  (s as any).temp_rand = (Math.floor(Math.random() * 2) + 0);
                                                                                                                                  if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                    (s as any).txt_sex_cumbody = 'A minute later, he is barely having time to pull his dick out of you, ' + ((s as any).npcdesc ?? 0) + ' cumms on your boobs, even your face is partially messed with his semen.';
                                                                                                                                  }
                                                                                                                                  if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                    (s as any).txt_sex_cumbody = '' + ((s as any).npcdesc ?? 0) + ' runs his member over your tummy and finishes. It is so hot, his hard member and warm thick seed.';
                                                                                                                                  }
                                                                                                                                  // TODO-QSP: dynamic text: <<$txt_sex_cumbody>>
                                                                                                                                  scene.text(`${((s as any).txt_sex_cumbody ?? '')}`);
                                                                                                                                  // TODO-QSP: end & !! --- text_sex_cumbody ---
                                                                                                                                  if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_cumvag') {
                                                                                                                                    (s as any).temp_rand = (Math.floor(Math.random() * 4) + 0);
                                                                                                                                    if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                      (s as any).txt_sex_cumvag = 'After a while you feel that ' + ((s as any).npcdesc ?? 0) + ' even more increased his furious pace and wheezes. He finishes very explosively. You feel as from his throbbing member spurts his jizz, one jet after another. When ' + ((s as any).npcdesc ?? 0) + ' dick pulls his cock out of your pussy, his sticky cum oozes out of it.';
                                                                                                                                    }
                                                                                                                                    if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                      (s as any).txt_sex_cumvag = 'After some time ' + ((s as any).npcdesc ?? 0) + ' can feel as your pussy begins to shrink and throb. You loudly and sensually groan, fuck back wildly moaning with pleasure. He grabs you stronger and begins to bang you even faster and in a few minutes he reaches the peak too. ' + ((s as any).npcdesc ?? 0) + ' cumms right into your pussy. You can feel that your pussy fills with his hot semen…';
                                                                                                                                    }
                                                                                                                                    if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                      (s as any).txt_sex_cumvag = 'Suddenly you tighten muscles of your pussy and ' + ((s as any).npcdesc ?? 0) + ' feels that your pussy is even tighter. He can\'t hold it longer and begins to finish right into your pussy. You tense your cunt muscles to milk his sperm from his cock.';
                                                                                                                                    }
                                                                                                                                    if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                      (s as any).txt_sex_cumvag = 'Holding your waist, ' + ((s as any).npcdesc ?? 0) + ' pulls you stronger to him not letting his member slid out. His big cock throbs and twitches indicating so that ' + ((s as any).npcdesc ?? 0) + ' is about to cum. Thanks to your skillful effort his orgasm begins and it is so strong that he is cumming into your pussy at least thirty seconds.';
                                                                                                                                    }
                                                                                                                                    // TODO-QSP: dynamic text: <<$txt_sex_cumvag>>
                                                                                                                                    scene.text(`${((s as any).txt_sex_cumvag ?? '')}`);
                                                                                                                                    // TODO-QSP: end & !! --- text_sex_cumvag ---
                                                                                                                                    if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_cumass') {
                                                                                                                                      (s as any).temp_rand = (Math.floor(Math.random() * 2) + 0);
                                                                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                        (s as any).txt_sex_cumass = '' + ((s as any).npcdesc ?? 0) + ' shoves his dick in your ass but not whole, only its head. He starts jerking off his prick keeping the head inside of your bum and after some time he pours in your ass huge dose of his semen, which runs down along your thighs and drips on the ground.';
                                                                                                                                      }
                                                                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                        (s as any).txt_sex_cumass = '' + ((s as any).npcdesc ?? 0) + ' begins to cum into your ass, his sperm melts and thins in your bowels. When he finished, he tries to shove his cock even deeper, and he presses onto your ass with full strength of his body.';
                                                                                                                                      }
                                                                                                                                      // TODO-QSP: dynamic text: <<$txt_sex_cumass>>
                                                                                                                                      scene.text(`${((s as any).txt_sex_cumass ?? '')}`);
                                                                                                                                      // TODO-QSP: end & !! --- text_sex_cumass ---
                                                                                                                                      if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_group_bjall') {
                                                                                                                                        (s as any).temp_rand = (Math.floor(Math.random() * 3) + 1);
                                                                                                                                        if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                          (s as any).txt_sex_group_bjall = 'You decide to give blow job to all three guys at once. They poke their soft purple glans into your full lips immediately and when you\'ve opened your mouth they try to get into. You suck their thick members one by one and meanwhile one of them fucks your mouth, you are doing a hand job to other two guys with your hands. The boys are in seven heaven.';
                                                                                                                                        }
                                                                                                                                        if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                        }
                                                                                                                                        if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                          (s as any).txt_sex_group_bjall = 'Vitek feel that he has free hand, so one time he stuffs his whole cock into your mouth so his sack hits your chin and another time he pulls it whole out, and moistens your lips with his precum. Vasily watches you for a while and then he pulls out his already hard member. He stands next to Vitek and they let you suck their cocks alternately, sometimes even both at once. Dan joins after a few minutes, your mouth is fucked by three guys now, one by one, but sometimes they try to insert into your mouth their members at once…';
                                                                                                                                        }
                                                                                                                                        // TODO-QSP: dynamic text: <<$txt_sex_group_bjall>>
                                                                                                                                        scene.text(`${((s as any).txt_sex_group_bjall ?? '')}`);
                                                                                                                                        // TODO-QSP: end & !! --- text_sex_group_bjall ---
                                                                                                                                        if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_group_bj') {
                                                                                                                                          (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                            (s as any).txt_sex_group_bj = 'The boys move you to your knees and they start to jerk off over your face. You begin to serve them successively and blow job each boy for a few minutes. It lasts quite a long time and you take delight in kneeling there and giving the boys the pleasure.';
                                                                                                                                          }
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                            (s as any).txt_sex_group_bj = 'They move you to your knees and you start to blow job each participating boy around.';
                                                                                                                                          }
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                            (s as any).txt_sex_group_bj = 'The boys are standing around you and one by one each boy lets you suck his cock.';
                                                                                                                                          }
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                                            (s as any).txt_sex_group_bj = 'Look, you are on your knees and boys alternate to fuck your mouth, groping your boobs, slightly smacking in your face and they call you foul names like to a last whore. You are only even more excited with all that.';
                                                                                                                                          }
                                                                                                                                          if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                                            (s as any).txt_sex_group_bj = 'You are on your knees with your mouth open, the boys one by one coming and you take their cocks deep into your beautiful mouth using no hands. No, you don\'t suck them, they just fuck hard your mouth.';
                                                                                                                                          }
                                                                                                                                          // TODO-QSP: dynamic text: <<$txt_sex_group_bj>>
                                                                                                                                          scene.text(`${((s as any).txt_sex_group_bj ?? '')}`);
                                                                                                                                          // TODO-QSP: end & !! --- text_sex_group_bj ---
                                                                                                                                          if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_group_vag') {
                                                                                                                                            (s as any).temp_rand = (Math.floor(Math.random() * 2) + 1);
                                                                                                                                            if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                              (s as any).txt_sex_group_vag = '"Suck my dick now!" Dan commands you. You obey and incline to his member and start working intensively with your tongue. You lick his sweaty balls, then his groin and finally you lick his hard shaft up until you reach his cock head. Now you take the shaft into your mouth and let it slide deep into your throat. You take it in your mouth almost whole, your nose touch his belly. Vasily take his place next to Dan and asks you to blow job his cock too and so you begin to handle two cocks with your mouth. Meanwhile, Vitek starts to draw close to you from behind. You feel his fingers parting your cunt lips, and you spread your thighs more. In a wink you feet as his hard cock slides into your wet pussy. He starts humping you rhythmically and he manages squeezing your boobs and butt at the same time. His prick is big enough and you feel as its head leans against your cervix each time when he inserts his tool into your box. It lasts about five minutes and the boys choose to make change.';
                                                                                                                                            }
                                                                                                                                            if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                            }
                                                                                                                                            // TODO-QSP: dynamic text: <<$txt_sex_group_vag>>
                                                                                                                                            scene.text(`${((s as any).txt_sex_group_vag ?? '')}`);
                                                                                                                                            // TODO-QSP: end & !! --- text_sex_group_vag ---
                                                                                                                                            if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_group_anal') {
                                                                                                                                              (s as any).temp_rand = (Math.floor(Math.random() * 2) + 1);
                                                                                                                                              if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                                (s as any).txt_sex_group_anal = 'Suddenly the boys have a desire to fuck you in the ass. You agree delightedly. They move you into proper position and Vasily starts to fuck your butt and you are doing hand-job and blow-job to the rest. After a while the guys swap their places. Vasily pulls his dick out of your ass and shoves it into your mouth, Dan goes up to you from behind and starts fucking your anus. You gasp at each stroke and you choke each time when a cock gets deep into your mouth. Behind you start to be hot, Dan and Vitek in turn start to exploit your anus. They take apparently delight in fucking your butt and shoving their cocks into your mouth then.';
                                                                                                                                              }
                                                                                                                                              if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                                (s as any).txt_sex_group_anal = 'Dan suggests: "Let\'s go guys, two from sides and one from behind." You bend down, resting your hands. Two boys stand on your sides putting their members to your face, and the third goes up to you from behind. He gropes your ass and starts poking his hard member between your ass cheeks and heading to your brown star. When his cock finally enters into your bum, you give a sigh of pleasure. Vitek starts to fuck your bum, and you are turning your head to one side or the other, and you are giving blow-jobs to the guys standing next to you. The pace of the member in your ass grow gradually and in the same way your excitement grows.';
                                                                                                                                              }
                                                                                                                                              // TODO-QSP: dynamic text: <<$txt_sex_group_anal>>
                                                                                                                                              scene.text(`${((s as any).txt_sex_group_anal ?? '')}`);
                                                                                                                                              // TODO-QSP: end & !! --- text_sex_group_anal ---
                                                                                                                                              if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_group_dp') {
                                                                                                                                                (s as any).temp_rand = (Math.floor(Math.random() * 4) + 1);
                                                                                                                                                if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                                  (s as any).txt_sex_group_dp = 'Dan is pressing you tight against his chest and starts banging your cunt forcefully and so deep so his prick is ramming into your cervix. He turns his head towards Vasily after a while and tells him to stop wanking and shove his prick into your butt hole instead. Vasily expects such opportunity, so he quickly moves behind your butt, kneels and digs his prick into your anus. Dan stops and firmly holds your back, allowing so Vasily penetrate your hole. Your relaxed butt hole adopts his prick naturally almost without resistance. As his prick deep works his way along Dan\'s big shaft, it seems to you that they rip a wall between the holes and that they fuck one big hole together. Vitek can\'t resist this view. He comes before you and shoves his cock head into your mouth and you start to suck his hard member. At first only Vasily is banging your butt and Dan is lying on his back and squeezing your boobs. After a while, they fuck you alternately and at the end, they dig your holes together in the same pace. You are sandwiched between them like a burger in a bun and as your mouth is plugged by Vita\'s cock, you can only softly moaned with pleasure.';
                                                                                                                                                }
                                                                                                                                                if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                                  (s as any).txt_sex_group_dp = 'Everybody wants to screw you, so the guys decide to bonk you all together. Dan shoves his prick into your pussy, Vitek sink his member into your ass-hole and Vasily lets you suck his shaft and they gradually increase the pace dipping their cocks deeper into your holes. Vitek is kissing your body and fondles you boobs gently, Dan strokes and squeezes your butt and he helps you mount their cocks. It is so weird and exciting that it alters your thinking. The boys are now so gentle and loving so you become less tense and finally start feeling pleasure. You start to sway back and forth your bum and help so the guys fuck your holes and you even open your mouth more to allow Vasily to shove his prick into your throat. Vitek whispers you into your ear flattery and you hear that you are the best slut in his life and that he has never fucked so nice girl and more and more…';
                                                                                                                                                }
                                                                                                                                                if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                                  (s as any).txt_sex_group_dp = 'You get Vitek to laid down on his back and you straddle him and impale yourself on his sticking hard prick. You let him slide deep into your cunt and then start to ride him slowly. Dan offers you to suck his hard prick and when you take it in your mouth he starts to fuck your mouth as deep as he can. You are in heaven and you wish it lasts forever. At the moment you feet as Vasily shoves his cock into your bum. It was incredible, you sense as the cocks grind one against another through thin wall of your pussy. You feet like a rubber doll, every your hole is stacked with a hard dick.';
                                                                                                                                                }
                                                                                                                                                if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                                                  (s as any).txt_sex_group_dp = 'You climb at Vasily and sit down at his shaft. It slides slowly into your box giving an incredible pleasure to its wearer. Dan take his hard cock and begins to poke into your ass. His member is long and thin, but your anus is not relaxed so he can stretch it still. Dan increases the pressure and his shaft arches and wrinkles a bit, but gradually bit by bit his cock-head disappears into your butt-hole leaving its foreskin outside. It doesn\'t last long and Dan shoves his whole prick into your bum. Vasily breathes heavily and fuckes vigorously your wet squelching pussy. You are wriggling at their cocks and you feel as inside is growing long-forgotten feeling of coming climax. Something soft and warm begins to touch your lips. It is Vitek\'s member, you open your eyes and take his prick into your hand and start suck its head and rub the shaft with your hand.';
                                                                                                                                                }
                                                                                                                                                // TODO-QSP: dynamic text: <<$txt_sex_group_dp>>
                                                                                                                                                scene.text(`${((s as any).txt_sex_group_dp ?? '')}`);
                                                                                                                                                // TODO-QSP: end & !! --- text_sex_group_dp ---
                                                                                                                                                if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_group_dpa') {
                                                                                                                                                  (s as any).txt_sex_group_dpa = 'Dan is pressing you tight against his chest and starts to ram forcefully his prick deep into your butt. He turns his head towards Vasily after a while and tells him to stop wanking and shove his prick into your butt hole instead. Vasily expects such opportunity, so he quickly moves behind your butt, kneels and digs his prick into your anus. Dan stops and firmly holds your back, allowing so Vasily penetrate your hole. Your relaxed butt hole adopts his prick naturally almost without resistance. As he shoves his prick deep into your ass, both guys start together to fuck your stretched hole. You think that your hole remained gaping and it will be loose for any pricks. Vitek can\'t resist this view. He comes before you and shoves his cock head into your mouth. You start to suck his prick and at the same time you are wiggling your ass to increase its penetration.';
                                                                                                                                                  // TODO-QSP: dynamic text: <<$txt_sex_group_dpa>>
                                                                                                                                                  scene.text(`${((s as any).txt_sex_group_dpa ?? '')}`);
                                                                                                                                                  // TODO-QSP: end & !! --- text_sex_group_dpa ---
                                                                                                                                                  if (String((s as any).locArgs?.[1] ?? '') === 'text_sex_group_triple') {
                                                                                                                                                    (s as any).txt_sex_group_triple = 'The boys remove rests of your clothes, and then they lie you on the bed. You resign and let them to treat you like a rubber doll, which can fulfill any imagination. You cannot remember that your ass was filled with three cocks. They simply use your body along their perverse fantasy…';
                                                                                                                                                    // TODO-QSP: dynamic text: <<$txt_sex_group_triple>>
                                                                                                                                                    scene.text(`${((s as any).txt_sex_group_triple ?? '')}`);
                                                                                                                                                    // TODO-QSP: end & !! --- text_sex_group_triple ---
                                                                                                                                                    if (String((s as any).locArgs?.[1] ?? '') === 'group_sex_text') {
                                                                                                                                                      (s as any).temp_rand = (Math.floor(Math.random() * 9) + 0);
                                                                                                                                                      if ((!((s as any).temp_rand ?? 0))) {
                                                                                                                                                        (s as any).group_sex_text = 'You ask playfully: "Well ' + qspFunc(s, 'gopsex', 'hide', 'gop_text_npcr') + ', how are you gonna ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' me?"';
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 1) {
                                                                                                                                                        (s as any).group_sex_text = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' asks: "How can we ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' you ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name') + ' ?"';
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 2) {
                                                                                                                                                        (s as any).group_sex_text = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' dares you: "Make your slit ready ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name') + '! You\'ll go round now.';
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 3) {
                                                                                                                                                        (s as any).group_sex_text = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' asks: "' + ((s as any).pcs_nickname ?? 0) + ', It seems to me that your holes are itching. Do you fancy ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext3') + ', don\'t you?"';
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 4) {
                                                                                                                                                        (s as any).group_sex_text = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' asks: "' + ((s as any).pcs_nickname ?? 0) + ' - ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name') + ' are you ready to serve three dicks?"';
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 5) {
                                                                                                                                                        (s as any).group_sex_text = qspFunc(s, 'gopsex', 'hide', 'gop_name_npc') + ' asks: "' + ((s as any).pcs_nickname ?? 0) + ', what about if we\'ll ' + qspFunc(s, 'gopsex', 'hide', 'gop_sextext1') + ' you into all holes at once?"';
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 6) {
                                                                                                                                                        (s as any).group_sex_text = qspFunc(s, 'gopsex', 'hide', 'gop_family_npc') + ' tells you: "' + ((s as any).pcs_nickname ?? 0) + ', you\'re our ' + qspFunc(s, 'gopsex', 'hide', 'gop_gg_name') + ', Let\'s get into all your holes!"';
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 7) {
                                                                                                                                                        (s as any).group_sex_text = 'You wink at the guys and say: "Boys, yours ' + ((s as any).pcs_nickname ?? 0) + ' is ready for anything. How do you want to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' me?"';
                                                                                                                                                      }
                                                                                                                                                      if (((s as any).temp_rand ?? 0) === 8) {
                                                                                                                                                        (s as any).group_sex_text = 'You smile wickedly and say: "Yours ' + ((s as any).pcs_nickname ?? 0) + ' wants some jizz. How do you\'ll be \' + func(\'gopsex\', \'hide\', \'gop_sextext3\') + \' me?"';
                                                                                                                                                      }
                                                                                                                                                      // TODO-QSP: end & !! --- group_sex_text ---
                                                                                                                                                      if (String((s as any).locArgs?.[1] ?? '') === 'rndorder3') {
                                                                                                                                                        ((s as any).rndorder = (s as any).rndorder ?? {})[1] = 9;
                                                                                                                                                        ((s as any).rndorder = (s as any).rndorder ?? {})[2] = 10;
                                                                                                                                                        ((s as any).rndorder = (s as any).rndorder ?? {})[3] = 11;
                                                                                                                                                        (s as any).irndorder = 1;
                                                                                                                                                        // TODO-QSP: :rndorderjump
                                                                                                                                                        if (((s as any).irndorder ?? 0) < 4) {
                                                                                                                                                          (s as any).jrndorder = (Math.floor(Math.random() * 3) + 1);
                                                                                                                                                          (s as any).krndorder = (((s as any).rndorder ?? 0)?.[String((s as any).irndorder ?? 0)] ?? 0);
                                                                                                                                                          ((s as any).rndorder = (s as any).rndorder ?? {})[String((s as any).irndorder ?? 0)] = (((s as any).rndorder ?? 0)?.[String((s as any).jrndorder ?? 0)] ?? 0);
                                                                                                                                                          ((s as any).rndorder = (s as any).rndorder ?? {})[String((s as any).jrndorder ?? 0)] = ((s as any).krndorder ?? 0);
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
                                  { label: 'Do a tit job or a titty fuck', goto: ['gopsex', 'hide', 'shgopsex_fucktits'] },
                                  { label: 'Sex selection', handler: (st: GameState) => {
    qspCall(st, 'gopsex', '');
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
  // TODO-QSP: *P ''
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
  title: '███__',
  region: 'other',
  enter: enter,
};
