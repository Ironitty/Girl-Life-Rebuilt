import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
  scene.build();
}

function enterGgSexOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mesec ?? 0) > 0) {
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'small');
    scene.text('<font color = red><b>You have a period. As his cock rams your cunt, period blood is leaking out of your box.</b></font>');
  } else {
    (s as any).horny_orgasm_text = Math.floor(Math.random() * 12) + 0;
    if (((s as any).horny_orgasm_text ?? 0) === 0) {
      // TODO-QSP: dynamic text: You are trying to come, and you beg him to ' + func('gopsex', 'hide', 'gop_sexte...
      scene.text('You are trying to come, and you beg him to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you harder.');
    } else {
      scene.text('You try to reach your peak, so you start bouncing faster.');
      if (((s as any).horny_orgasm_text ?? 0) === 2) {
        scene.text('You are about to cum, and you ask him to push his dick deeper.');
      } else {
        // TODO-QSP: dynamic text: You are trying to come and ask him to ' + func('gopsex', 'hide', 'gop_sextext1')...
        scene.text('You are trying to come and ask him to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you faster.');
        if (((s as any).horny_orgasm_text ?? 0) === 4) {
          scene.text('You want to come badly, so you try to catch his pace and bounce his hard dick.');
        } else {
          scene.text('You want to reach your peak, so you begin actively humping his dick.');
          if (((s as any).horny_orgasm_text ?? 0) === 6) {
            scene.text('You are trying to come, and you ask him to hurry.');
          } else {
            // TODO-QSP: dynamic text: You crave for them to ' + func('gopsex', 'hide', 'gop_sextext1') + ' you harder…
            scene.text('You crave for them to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you harder…');
            if (((s as any).horny_orgasm_text ?? 0) === 8) {
              scene.text('You want to finish and plead with him to treat you rough.');
            } else {
              // TODO-QSP: dynamic text: You beg your partner to ' + func('gopsex', 'hide', 'gop_sextext1') + ' you harde...
              scene.text('You beg your partner to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you harder.');
              if (((s as any).horny_orgasm_text ?? 0) === 10) {
                scene.text('You yell smut naming yourself a dirty whore to provoke your partner and reach your peak.');
              } else {
                // TODO-QSP: dynamic text: You are overexcited, and you want to climax. So you beg your partner to ' + func...
                scene.text('You are overexcited, and you want to climax. So you beg your partner to \' + func(\'gopsex\', \'hide\', \'gop_sextext1\') + \' you heavily.');
              }
              if (((s as any).pcs_horny ?? 0) >= 70) {
                (s as any).orgasm = ((s as any).orgasm ?? 0) + (1);
                (s as any).pcs_horny = 0;
                qspCall(s, 'mood', 'raise', 'small');
                (s as any).pcs_hairbsh = 0;
                (s as any).orgasm_text = Math.floor(Math.random() * 12) + 0;
                if (((s as any).orgasm_text ?? 0) === 0) {
                  scene.text('The excitement exceeds your limits, and you scream loudly as you undergo an intense climax.');
                } else {
                  scene.text('Your body begins shaking, and you cum violently.');
                  if (((s as any).orgasm_text ?? 0) === 2) {
                    scene.text('A loud groan comes from your mouth, and an intense orgasm engulfs your body.');
                  } else {
                    scene.text('You shiver in convulsions and begin to finish.');
                    if (((s as any).orgasm_text ?? 0) === 4) {
                      scene.text('You are breathing heavily, being excited, and you\'ll reach your climax soon.');
                    } else {
                      scene.text('Thanks to the skillfulness of your partner, you experience an intense orgasm.');
                      if (((s as any).orgasm_text ?? 0) === 6) {
                        scene.text('Amazing feeling overfilled your senses, and you finish loudly.');
                      } else {
                        scene.text('You\'ve never experienced such an intense orgasm before. You shiver still for a couple of minutes until your climax fades.');
                        if (((s as any).orgasm_text ?? 0) === 8) {
                          scene.text('Experiencing incredible feelings, you reach a pinnacle.');
                        } else {
                          scene.text('You moan loudly, and thanks to the skillful actions of your partner, you climax.');
                          if (((s as any).orgasm_text ?? 0) === 10) {
                            scene.text('The room fills with your screams. Finally, you finish loudly, no matter who can hear you.');
                          } else {
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
    default:
      enterSettings(s, scene);
      break;
  }
}

export const gopsex: LocationDef = {
  name: 'gopsex',
  title: ' ███__ ',
  region: 'other',
  enter: enter,
};
