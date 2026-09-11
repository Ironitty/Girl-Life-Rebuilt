import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 19) {
    (s as any).pav_disco_in = ((s as any).daystart ?? 0);
  }
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 80;
    (s as any).music_loop = 1;
  }
  qspCall(s, 'core_library', 'setloc', 'pav_disco', '');
  (s as any).boynumBlock = 0;
  ((s as any).stat ?? {})['last_disco'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  if (((s as any).social_check ?? 0)?.['disco'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6) {
    ((s as any).social_check ?? {})['disco'] = ((s as any).daystart ?? 0);
    if (qspFunc(s, 'pcs_has_attr', 'clothes_pants_any')) {
      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
      if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_high')) {
        ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
      }
    }
    if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_low')) {
      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (5);
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_medium')) {
        ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
      }
    }
    if (((s as any).PCloInhibit ?? 0) >= 35) {
      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (3);
      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    } else {
      if (((s as any).PCloInhibit ?? 0) >= 20) {
        ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
        ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
      }
    }
    if (qspFunc(s, 'pcs_has_attr', 'shoes_quality_low')) {
      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    } else {
      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    }
    if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_flat')) {
      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (2);
    }
    if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_running')) {
      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (5);
      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
      ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_none')) {
        ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (5);
        ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (3);
        ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_light')) {
          ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_moderate')) {
            ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_bimbo')) {
              ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (3);
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_goth')) {
                ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (3);
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
              } else {
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
                ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).NikoVolkovQW ?? 0) === 5  &&  ((s as any).NikoEv ?? 0) === 7  &&  ((s as any).NikoDate_Day ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['NikoDates', 'disco'] }]);
  }
  if (((s as any).hour ?? 0) < 20) {
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/locations/pavlovsk/community/disco/closing.jpg');
    scene.text('The club is closing for the night. The main lights go on, the music fades and everyone starts leaving.');
    scene.actions([
      { label: 'Go outside', goto: ['pav_commcenter', ''] },
    ]);
  } else {
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/locations/pavlovsk/community/disco/club.jpg');
    if (((s as any).LariskaQW ?? 0)?.['story'] === 14) {
      scene.text('You think you see <a href="exec: gt \'lariska_storyline\', \'Boyfriend_5\'">someone</a> you know on the dance floor.');
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).yearstart ?? 0) <= 1) {
      scene.text('You see a few of your <a href="exec: gt \'pav_disco_classmates\', \'classmates\'">classmates</a>. Some of them dancing, while others stick to their own groups and talk.');
    }
    if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.actions([
        { label: 'Text Artem to come to the disco', goto: ['pav_disco', 'artem_disco'] },
      ]);
    }
    if (((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 4  &&  (!((s as any).dimadisco ?? 0))) {
      // TODO-QSP: gt 'dimaRevenge', 5, 'disco'
    }
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).soniaQW ?? 0)?.['slut'] < 1  &&  ((s as any).soniadisco_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).month ?? 0) > 9  &&  ((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['attendance_count'] > 0  &&  ((s as any).hour ?? 0) < 22) {
      scene.text('You notice Sonia talking to Vitek about something.');
      scene.actions([
        { label: 'Watch Sonia', handler: (st: GameState) => {
    (st as any).soniadisco_day = ((st as any).daystart ?? 0);
  }, goto: ['soniadisco', 'start'] },
      ]);
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      // TODO-QSP: act 'Look for your classmates': gt 'pav_disco_classmates', 'classmates'
    }
    scene.actions([
      { label: 'Go outside', goto: ['pav_commcenter', ''] },
      { label: 'Go to the toilets', goto: ['gdktoilet', 'start'] },
      { label: 'Dance (0:15)', goto: ['pav_disco', 'disco_dance'] },
      { label: 'Stand at the wall', goto: ['pav_disco', 'wall_stand'] },
      { label: 'Dance provocatively', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 1);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'archetypes', 'lose', 'prude', 'tiny', 'Dancing provocatively at the disco');
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
    scene.text('You head out to the dance floor with the intention of attracting some attention. It\'s not long before you catch someone\'s eye...');
    qspCall(s, 'pav_disco', 'dance_partner');
    qspCall(s, 'stat', '');
    return;
  } },
    ]);
  }
  scene.build();
}

function enterDiscoDance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).pav_discocum = ((s as any).daystart ?? 0);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/locations/pavlovsk/community/disco/sex/cumface1.jpg');
    scene.text('As you head out on the dance floor, a guy walks up to you, notices the cum still splattered on you and points at you.');
    scene.text('"Check out this cocksucker! Hey guys, this chick has cum smeared all over her face!" The ones standing near him come closer. "Did you forget to swallow, slut?"');
    scene.text('Your cheeks blush with shame and you quickly head for the exit.');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 1);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    if ((!((s as any).alko ?? 0))) {
      scene.text('<center><b>Disco</b></center>');
      scene.img('images/locations/pavlovsk/community/disco/dance.jpg');
      if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
        scene.text('You look around and smile. Nobody knows you\'re not wearing any panties and you feel a thrilling sensation rush through your body as you think about it.');
      }
      if (((s as any).pcs_danc ?? 0) <= 30) {
        scene.text('You\'re having a lot of fun out on the dance floor. Your horribly awkward attempt at dancing makes it look like you\'re having a seizure, but you don\'t care. You\'re not paying attention to anyone else or even the music.');
      } else {
        if (((s as any).pcs_danc ?? 0) <= 60) {
          scene.text('You\'re having a lot of fun out on the dance floor and barely pay attention to anyone else as you move around.');
        } else {
          if (((s as any).pcs_dancero ?? 0) <= 40) {
            ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
            ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
            scene.text('You\'re having a lot of fun out on the dance floor, moving your body around in an erotic manner to the beat of the music.');
          } else {
            ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
            ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
            scene.text('You\'re having a lot of fun out on the dance floor, expertly moving your body around in a seductive manner to the beat of the music.');
          }
        }
      }
    } else {
      if (((s as any).alko ?? 0) === 1) {
        scene.text('<center><b>Disco</b></center>');
        scene.img('images/locations/pavlovsk/community/disco/tipsy_dance.jpg');
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
          (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
          scene.text('You look around and smile. Nobody knows you\'re not wearing any panties and you feel a thrilling sensation rush through your body as you think about it.');
        }
        if (((s as any).pcs_danc ?? 0) <= 30) {
          scene.text('You\'re having a lot of fun out on the dance floor, even though you\'re a terrible dancer and being buzzed doesn\'t help.');
          scene.text('Your awkward movements look more like a seizure than dancing, but you don\'t care. You\'re not paying attention to anyone else or even the music.');
        } else {
          if (((s as any).pcs_danc ?? 0) <= 60) {
            scene.text('You\'re having a lot of fun out on the dance floor. You barely pay attention to anyone else as you move around on the dance floor, feeling a little buzzed.');
          } else {
            if (((s as any).pcs_dancero ?? 0) <= 40) {
              ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
              scene.text('You\'re having a lot of fun out on the dance floor and are dancing pretty well despite how buzzed you are. You move your body around in an erotic manner to the beat of the music.');
            } else {
              ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
              scene.text('You\'re having a lot of fun out on the dance floor. Most people would have a hard time telling you were buzzed as you expertly move your body around in a seductive manner to the beat of the music.');
            }
          }
        }
      } else {
        if (((s as any).alko ?? 0) < 4) {
          scene.text('<center><b>Disco</b></center>');
          scene.img('images/locations/pavlovsk/community/disco/tipsy_dance.jpg');
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
            (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
            scene.text('You look around and smile. Nobody knows you\'re not wearing any panties and you feel a thrilling sensation rush through your body as you think about it.');
          }
          if (((s as any).pcs_danc ?? 0) <= 30) {
            scene.text('You\'re having a lot of fun out on the dance floor, even though you\'re a terrible dancer and being tipsy doesn\'t help.');
            scene.text('Your awkward movements look more like a seizure than dancing, but you don\'t care. You\'re not paying attention to anyone else or even the music.');
          } else {
            if (((s as any).pcs_danc ?? 0) <= 60) {
              scene.text('You\'re having a lot of fun out on the dance floor. You barely pay attention to anyone else as you move around on the dance floor, feeling a little tipsy.');
            } else {
              if (((s as any).pcs_dancero ?? 0) <= 40) {
                ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
                scene.text('You\'re having a lot of fun out on the dance floor and are dancing pretty well despite how tipsy you are. You move your body around in an erotic manner to the beat of the music.');
              } else {
                ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
                scene.text('You\'re having a lot of fun out on the dance floor. Most people would have a hard time telling you were tipsy as you expertly move your body in a seductive manner to the beat of the music.');
              }
            }
          }
        } else {
          if (((s as any).alko ?? 0) < 6) {
            scene.text('<center><b>Disco</b></center>');
            scene.img('images/locations/pavlovsk/community/disco/drunk_dance.jpg');
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
              (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
              scene.text('You look around and smile. Nobody knows you\'re not wearing any panties and you feel a thrilling sensation rush through your body as you think about it.');
            }
            if (((s as any).pcs_danc ?? 0) <= 30) {
              ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (3);
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (3);
              ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
              scene.text('You\'re having a lot of fun out on the dance floor, even though you\'re a terrible dancer and being drunk doesn\'t help.');
              scene.text('Your awkward movements look more like a seizure than dancing, but you don\'t care. You\'re not paying attention to anyone else or even the music.');
            } else {
              if (((s as any).pcs_danc ?? 0) <= 60) {
                ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (2);
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
                ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
                scene.text('You\'re having a lot of fun out on the dance floor. You barely pay attention to anyone else as you move around on the dance floor, feeling rather drunk.');
              } else {
                if (((s as any).pcs_dancero ?? 0) <= 40) {
                  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
                  ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
                  scene.text('You\'re having a lot of fun out on the dance floor and are dancing pretty well despite how drunk you are. You move your body around in an erotic manner to the beat of the music');
                } else {
                  ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
                  scene.text('You\'re having a lot of fun out on the dance floor. Most people would have a hard time telling you were drunk as you expertly move your body in a seductive manner to the beat of the music.');
                }
              }
            }
            qspCall(s, 'pav_disco', 'too_drunk_low_chance');
          } else {
            if (((s as any).alko ?? 0) < 10) {
              if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
                (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (3);
                scene.text('<center><b>Disco</b></center>');
                scene.img('images/locations/pavlovsk/community/disco/very_drunk_dance.mp4');
                if (((s as any).pcs_danc ?? 0) <= 25) {
                  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (6);
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (6);
                  ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (2);
                  scene.text('You\'re very drunk and forget that you don\'t have any panties on. As you awkwardly attempt to dance, you\'re too drunk to notice your skirt riding up, exposing your pussy to the observant people on the dance floor with you.');
                } else {
                  if (((s as any).pcs_danc ?? 0) <= 40) {
                    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (5);
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
                    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (2);
                    scene.text('You\'re very drunk and forget that you don\'t have any panties on. As you drunkenly dance around, your skirt rides up and exposes your pussy to the more observant people on the dance floor with you.');
                  } else {
                    if (((s as any).pcs_dancero ?? 0) <= 30) {
                      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (4);
                      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (4);
                      ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (2);
                      scene.text('You\'re very drunk and forget that you don\'t have any panties on. You dance pretty well for how drunk you are, but are too drunk to notice your skirt riding up, exposing your pussy to the more observant people on the dance floor with you.');
                    } else {
                      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (3);
                      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (3);
                      ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (2);
                      scene.text('You\'re very drunk and forget that you don\'t have any panties on.');
                      scene.text('Most people would have a hard time knowing you were very drunk as you expertly move your body around in a seductive manner, but you\'re too drunk to notice your skirt riding up, exposing your pussy to the more observant people on the dance floor with you.');
                    }
                  }
                }
                qspCall(s, 'pav_disco', 'too_drunk_medium_chance');
              } else {
                scene.text('<center><b>Disco</b></center>');
                scene.img('images/locations/pavlovsk/community/disco/very_drunk_dance.jpg');
                if (((s as any).pcs_danc ?? 0) <= 25) {
                  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (4);
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (4);
                  scene.text('You\'re very drunk, but are having a lot of fun out on the dance floor anyway. You\'re a terrible dancer, and being drunk doesn\'t help.');
                  scene.text('Your awkward movements look more like a seizure than dancing, but you don\'t care. You\'re not paying attention to anyone else or even the music.');
                } else {
                  if (((s as any).pcs_danc ?? 0) <= 40) {
                    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (3);
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (3);
                    scene.text('You\'re very drunk, but are having a lot of fun out on the dance floor anyway. As you dance around, you barely pay attention to anyone else.');
                  } else {
                    if (((s as any).pcs_dancero ?? 0) <= 30) {
                      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (2);
                      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
                      scene.text('You\'re very drunk, but are having a lot of fun out on the dance floor anyway. You dance pretty well for how drunk you are, and move your body around in an erotic manner to the beat of the music.');
                    } else {
                      ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
                      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
                      scene.text('You\'re very drunk, but are having a lot of fun out on the dance floor anyway. Most people would have a hard time knowing you were drunk as you expertly move your body around in a seductive manner to the beat of the music.');
                    }
                  }
                }
                qspCall(s, 'pav_disco', 'too_drunk_medium_chance');
              }
            } else {
              ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (5);
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (5);
              ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
              scene.img('images/locations/pavlovsk/community/disco/wasted_dance.jpg');
              scene.text('You\'re far too drunk and are barely able to stay on your feet. You\'re mostly just drunkenly bumping into other people as you try and dance.');
              qspCall(s, 'pav_disco', 'too_drunk_high_chance');
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    if (((s as any).alko ?? 0) < 6) {
      if ((Math.floor(Math.random() * 100) + 0) < ((s as any).pcs_danc ?? 0)) {
        qspCall(s, 'pav_disco', 'dance_partner');
        qspCall(s, 'stat', '');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
    ]);
  }
  scene.build();
}

function enterTooDrunkLowChance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_disco', 'too_drunk_base', Math.floor(Math.random() * 10) + 0);
  scene.build();
}

function enterTooDrunkMediumChance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_disco', 'too_drunk_base', (Math.floor(Math.random() * (7 - -1 + 1)) + (-1)));
  scene.build();
}

function enterTooDrunkHighChance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_disco', 'too_drunk_base', (Math.floor(Math.random() * (5 - -2 + 1)) + (-2)));
  scene.build();
}

function enterTooDrunkBase(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    (s as any).temp_rand = qspUntranslated(s, "ARGS[1]", { location: "pav_disco" });
    if (((s as any).temp_rand ?? 0) <= 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco', 'katja_too_drunk'] }]);
    } else {
      if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((s as any).discobloc ?? 0)?.['A25'] !== ((s as any).daystart ?? 0)  &&  ((s as any).soniaQW ?? 0)?.['hate'] < 1  &&  (((s as any).soniaQW ?? 0)?.['fallenangel'] < 1  ||  ((s as any).daystart ?? 0) > ((s as any).soniaQW ?? 0)?.['fallday'] + 7)) {
        scene.actions([{ label: 'Continue', goto: ['pav_disco', 'sonia_too_drunk'] }]);
      } else {
        if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).locat ?? 0)?.['A144'] === 25) {
          scene.actions([{ label: 'Continue', goto: ['pav_disco', 'anushka_too_drunk'] }]);
        } else {
          if (((s as any).temp_rand ?? 0) === 3  &&  (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  (((s as any).npc_rel ?? 0)?.['A23'] >= 70  &&  ((s as any).grupTipe ?? 0) <= 3))  &&  ((s as any).locat ?? 0)?.['A23'] === 5) {
            scene.actions([{ label: 'Continue', goto: ['pav_disco', 'albina_too_drunk'] }]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterWallStand(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'lower', 'tiny');
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Disco</b></center>');
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).pav_discocum = ((s as any).daystart ?? 0);
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/cumface1.jpg');
    scene.text('While standing by the wall, a guy notices the cum on your clothes and points and shouts.');
    scene.text('"Look, this chick is covered in cum! Did you forget to swallow slut?" he says mockingly while laughing.');
    scene.text('Your cheeks blush with shame and you head for the exit.');
    return;
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  }
  scene.img('images/locations/pavlovsk/community/disco/wallflower.jpg');
  if (((s as any).alko ?? 0) > 0) {
    if (((s as any).alko ?? 0) === 1) {
      scene.text('You\'re buzzed and stand against the wall while watching the others dance.');
    } else {
      if (((s as any).alko ?? 0) < 4) {
        scene.text('You\'re tipsy and stand against the wall while watching the others dance.');
      } else {
        if (((s as any).alko ?? 0) < 6) {
          scene.text('You\'re pretty drunk and stand against the wall for support as you watch the others dance.');
          qspCall(s, 'pav_disco', 'too_drunk_low_chance');
        } else {
          scene.text('You\'re too drunk to dance and lean against the wall for support to stop yourself from falling.');
          qspCall(s, 'pav_disco', 'too_drunk_medium_chance');
        }
      }
    }
  } else {
    scene.text('You stand next to the wall while watching the others dance.');
  }
  qspCall(s, 'stat', '');
  if (((s as any).alko ?? 0) < 6) {
    if ((Math.floor(Math.random() * 11) + 0) <= ((s as any).pcs_hotcat ?? 0)) {
      qspCall(s, 'pav_disco', 'dance_partner');
      qspCall(s, 'stat', '');
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_disco', ''] },
  ]);
  scene.build();
}

function enterDancePartner(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp ?? {})['pav_disco_partner'] = Math.floor(Math.random() * 300) + 1;
  if (((s as any).temp ?? 0)?.['pav_disco_partner'] > ((s as any).boynum ?? 0)  ||  (Object.keys((s as any).hookup_partners ?? {}).length === 0)) {
    qspCall(s, 'npcgeneratec', '', 0, 'guy from the disco', 0, Math.floor(Math.random() * 4) + 1, 1, 'like');
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((s as any).npc_age ?? 0)?.[String((s as any).npcID ?? 0)] < 26) {
      ((s as any).npc_age ?? {})[String((s as any).npcID ?? 0)] = Math.floor(Math.random() * 20) + 26;
    }
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    ((s as any).temp ?? {})['pav_disco_partner'] = Math.floor(Math.random() * 101) + 0;
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] < 2) {
      // TODO-QSP: dynamic text: A guy dressed in <<$npc_outfit[$npcID]>> dances his way over to you.
      scene.text(`A guy dressed in ${((s as any).npc_outfit ?? 0)?.[String((s as any).npcID ?? 0)]} dances his way over to you.`);
      if ((Math.floor(Math.random() * 101) + 0) > 70) {
        ((s as any).temp ?? {})['drunk_guy'] = 1;
        scene.text('He\'s clearly drunk.');
      } else {
        ((s as any).temp ?? {})['drunk_guy'] = 0;
      }
    } else {
      // TODO-QSP: dynamic text: A guy dressed in <<$npc_outfit[$npcID]>> dances his way over to you. His clothes...
      scene.text(`A guy dressed in ${((s as any).npc_outfit ?? 0)?.[String((s as any).npcID ?? 0)]} dances his way over to you. His clothes look expensive.`);
    }
    scene.actions([
      { label: 'Move away', goto: ['pav_disco', ''] },
      { label: 'Dance with the guy', goto: ['pav_disco', 'dance_boy'] },
    ]);
  } else {
    qspCall(s, 'npcStat', '', qspFunc(s, 'lover', 'draw_random_from', 'all'));
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential'  ||  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco', 'known_partner'] }]);
    } else {
      qspCall(s, 'pav_disco', 'dance_partner');
    }
  }
  scene.build();
}

function enterKotovLove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Disco</b></center>');
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  scene.text('Vitek storms up to you and angrily shoves the guy.');
  scene.text('"Who the fuck are you? This is <i>my</i> girl! You want me to bust you up?!"');
  if (((s as any).DPgrup ?? 0) === 1) {
    (s as any).fightboyrand = Math.floor(Math.random() * 11) + 0;
    if (((s as any).fightboyrand ?? 0) <= 5) {
      scene.text('The frightened man begins to speak. "I didn\'t know! I\'m leaving."');
      scene.text('Vitek pushes the guy. "Get out of here and don\'t come back!"');
    } else {
      if (((s as any).fightboyrand ?? 0) > 5  &&  ((s as any).fightboyrand ?? 0) < 10) {
        scene.text('The guy shoves Vitek back. "Get your hands off me, asshole!"');
        scene.text('Vitek suddenly kicks the guy with a fast and powerful blow. The guy falls to the floor in pain and Vitek steps over him. Grabbing him by his shirt, he yanks him off the floor and slams him into the wall.');
        scene.text('"Well, motherfucker?! You think you can take what\'s mine?! How about I take what\'s yours?!"');
        scene.text('The frightened guy curls up in pain. "You can have anything, anything I\'ve got!"');
      } else {
        if (((s as any).fightboyrand ?? 0) >= 10) {
          scene.text('The guy punches Vitek in the face. He recoils from the hit and lands a powerful kick of his own. They then start fighting, fists and kicks landing from both sides.');
          scene.text('Finally, a very powerful hit by Vitek sends the guy flying into the wall, where he slumps to the floor. Vitek then runs up to him and starts punching him in the face.');
          scene.text('The guy stops resisting, apparently having lost consciousness.');
        }
      }
    }
  } else {
    if (((s as any).DPgrup ?? 0) === 2) {
      scene.text('The guy has a smug look on his face as he calls over his friends, who all come over to crowd around Vitek.');
      scene.text('Vitek\'s friends in turn come over to back him up, but after some tough talk and shoving, the two groups break apart peacefully and go their own ways.');
    } else {
      if (((s as any).DPgrup ?? 0) === 3) {
        scene.text('The guy throws up his hands. "Sorry man, I didn\'t know she was with you."');
        scene.text('Vitek pushes the guy. "Go back to the city and stay there."');
      }
    }
  }
  scene.actions([
    { label: 'Go to Vitek', handler: (st: GameState) => {
    (s as any).numnpc = 9;
    qspCall(s, 'npc', 'intro', 'A9', 'images/characters/shared/headshots_main/big9.jpg');
    qspCall(s, 'kotovtalker', '');
  } },
  ]);
  scene.build();
}

function enterReaktDance(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Disco</b></center>');
  scene.img('images/locations/pavlovsk/community/disco/club_dance1.jpg');
  if (((s as any).alko ?? 0) >= 3) {
    scene.text('You feel yourself getting aroused by the guy\'s actions.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
  } else {
    if (((s as any).pcs_horny ?? 0) > 0) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (5);
    }
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.text('You feel disgusted by the guy\'s actions.');
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterDanceBoy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_danc ?? 0) < 50  &&  ((s as any).pcs_agil ?? 0) >= ((s as any).pcs_danc ?? 0)) {
    qspCall(s, 'exp_gain', 'danc', 1);
  }
  if (((s as any).pcs_inhib ?? 0) < 40) {
    qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 2) + 1);
  }
  if ((Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1) > 0) {
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Disco</b></center>');
  if (((s as any).temp ?? 0)?.['drunk_guy'] === 0) {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.img('images/locations/pavlovsk/community/disco/club_dance4.jpg');
      // TODO-QSP: dynamic text: You accept the offer and <<$tempnameL>> takes you by the hand and leads you out ...
      scene.text(`You accept the offer and ${((s as any).tempnameL ?? 0)} takes you by the hand and leads you out onto the dance floor, where you start dancing together.`);
      // TODO-QSP: dynamic text: <<$tempnameU>> dances close to you, moving so close you can feel your breasts br...
      scene.text(`${((s as any).tempnameU ?? 0)} dances close to you, moving so close you can feel your breasts brushing against his chest as he reaches around to paw and squeeze your ass.`);
      if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
        scene.text('Which is nothing to say of the <i>enormous</i> hard-on you feel poking you from the front. You can see the entire outline going down the leg of his pants and it\'s hard to imagine how he dances at all with that thing bulging in his pants.');
      } else {
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big') {
          scene.text('Which is nothing to say of the <i>large</i> hard-on you feel poking you from the front. You can see the outline going down the leg of his pants and you\'re certain it\'s larger than the standard equipment.');
        } else {
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'average') {
            scene.text('Which is nothing to say of the hard-on you feel poking you from the front. You can see it fully stiff in the crotch of his pants as it bumps up against your belly and occasionally one of your thighs.');
          } else {
            if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
              scene.text('Which is nothing to say of the hard-on you feel poking you from the front. The occasional glance doesn\'t reveal anything to your eye, but it makes its presence known anyways with hard bumps against your belly and occasionally one of your thighs. Not a very good indication of size...');
            }
          }
        }
      }
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.img('images/locations/pavlovsk/community/disco/club_dance3.jpg');
        // TODO-QSP: dynamic text: You accept the offer and <<$tempnameL>> takes you by the hand and leads you out ...
        scene.text(`You accept the offer and ${((s as any).tempnameL ?? 0)} takes you by the hand and leads you out onto the dance floor, where you start dancing together.`);
        // TODO-QSP: dynamic text: <<$tempnameU>> dances with you, holding your waist with his hands in a way that ...
        scene.text(`${((s as any).tempnameU ?? 0)} dances with you, holding your waist with his hands in a way that lets you feel their presence but is almost like he's barely even touching you.`);
      } else {
        scene.img('images/locations/pavlovsk/community/disco/club_dance3.jpg');
        // TODO-QSP: dynamic text: You accept the offer and <<$tempnameL>> takes you by the hand and leads you out ...
        scene.text(`You accept the offer and ${((s as any).tempnameL ?? 0)} takes you by the hand and leads you out onto the dance floor, where you start dancing together.`);
        // TODO-QSP: dynamic text: <<$tempnameU>> dances right by your side, hopping up and down and occasionally b...
        scene.text(`${((s as any).tempnameU ?? 0)} dances right by your side, hopping up and down and occasionally bumping hips with you, clearly having a good time.`);
        if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
          scene.text('It\'s hard not for you to notice <i>something</i> that bounces in his pants along with the rest of him. It could be his phone, but you\'re pretty sure that "package" is bigger than a phone...');
        }
      }
    }
    qspCall(s, 'pav_disco', 'dance_react');
  } else {
    if (((s as any).temp ?? 0)?.['drunk_guy'] === 1) {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.img('images/locations/pavlovsk/community/disco/club_dance4.jpg');
        // TODO-QSP: dynamic text: You accept the offer and <<$tempnameL>> takes you by the hand and leads you out ...
        scene.text(`You accept the offer and ${((s as any).tempnameL ?? 0)} takes you by the hand and leads you out onto the dance floor, where you start dancing together.`);
        // TODO-QSP: dynamic text: <<$tempnameU>> dances close to you, drunkenly grinding his body up against yours...
        scene.text(`${((s as any).tempnameU ?? 0)} dances close to you, drunkenly grinding his body up against yours. You feel your breasts literally flatten against the man's chest as he reaches around to paw and squeeze your ass.`);
      } else {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.img('images/locations/pavlovsk/community/disco/club_dance3.jpg');
          // TODO-QSP: dynamic text: You accept the offer and <<$tempnameL>> takes you by the hand and leads you out ...
          scene.text(`You accept the offer and ${((s as any).tempnameL ?? 0)} takes you by the hand and leads you out onto the dance floor, where you start dancing together.`);
          // TODO-QSP: dynamic text: <<$tempnameU>> dances with you, holding your waist with his hands in a way that ...
          scene.text(`${((s as any).tempnameU ?? 0)} dances with you, holding your waist with his hands in a way that lets you feel their presence but is almost like he's barely even touching you. His feet move only <i>slightly</i> clumsily from his tipsy condition.`);
        } else {
          scene.img('images/locations/pavlovsk/community/disco/club_dance3.jpg');
          // TODO-QSP: dynamic text: You accept the offer and <<$tempnameL>> takes you by the hand and leads you out ...
          scene.text(`You accept the offer and ${((s as any).tempnameL ?? 0)} takes you by the hand and leads you out onto the dance floor, where you start dancing together.`);
          // TODO-QSP: dynamic text: <<$tempnameU>> dances right by your side, hopping up and down and clumsily bumpi...
          scene.text(`${((s as any).tempnameU ?? 0)} dances right by your side, hopping up and down and clumsily bumping his hip into yours in his drunkenness.`);
          if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
            scene.text('It\'s hard not for you to notice <i>something</i> that bounces in his pants along with the rest of him. It could be his phone, but you\'re pretty sure that "package" is bigger than a phone...');
          }
        }
      }
      qspCall(s, 'pav_disco', 'dance_react');
    }
  }
  scene.build();
}

function enterDanceReact(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'He\'s boring', handler: (st: GameState) => {
    if (((s as any).pcs_horny ?? 0) > 0) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (5);
    }
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'stat', '');
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('<i>Ugh, this guy is so boring,</i> you think as he grabs another palmful of ass, this time with more force. <i>Typical douchebag...</i>');
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('<i>Ugh, this guy is so boring,</i> you think, unable to help but notice the way he holds you so gingerly, as if you\'re going to shatter into pieces if he held your hand like a real man.');
      } else {
        scene.text('<i>Ugh, this guy is so boring,</i> you think, watching him bounce up and down next to you. <i>Couldn\'t he have found his own place to dance?</i>');
      }
    }
    // TODO-QSP: xgt 'pav_disco', 'dance_boy2', 'boring_react'
  } },
    { label: 'Enjoy dancing with him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Disco</b></center>');
    scene.img('images/locations/pavlovsk/community/disco/club_dance1.jpg');
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'arousal_oneline', 'foreplay', 5);
      scene.text('A thrill goes through you he grabs another palmful of ass, this time with more force. This guy\'s assertion and aggression is really pushing all of your buttons.');
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'arousal_oneline', 'foreplay', 5);
        scene.text('Smiling, you put your hands on his shoulders, letting him lead you around to the music. Catching a glance of some other girl having her ass squeezed like a stress ball, you find this guy\'s gentle touch to be endearing.');
      } else {
        qspCall(s, 'arousal_oneline', 'foreplay', 5);
        // TODO-QSP: 'His excitement is infectious and you find yourself hopping and bumping into him with an energy to m...
      }
    }
    qspCall(s, 'stat', '');
    // TODO-QSP: xgt 'pav_disco', 'dance_boy2', 'enjoy_react'
  } },
  ]);
  scene.build();
}

function enterDanceBoy2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stop dancing with him', handler: (st: GameState) => {
    if (((s as any).locArgs?.[1] ?? 0) === 'enjoy_react') {
      scene.text('You have a really good time dancing with this guy, that\'s all you really wanted. So when the song ends and he tries to move closer to you, instead you quickly move yourself away.');
    } else {
      // TODO-QSP: dynamic text: Disgust overwhelms you and you quickly move away from <<$tempnameL>>.
      scene.text(`Disgust overwhelms you and you quickly move away from ${((s as any).tempnameL ?? 0)}.`);
    }
    scene.actions([
      { label: 'Leave the dance floor', goto: ['pav_disco', ''] },
      { label: 'Keep dancing', goto: ['pav_disco', 'disco_dance'] },
    ]);
  } },
    { label: 'Continue to dance with him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Disco</b></center>');
    if (((s as any).locArgs?.[1] ?? 0) === 'enjoy_react') {
      ((s as any).temp ?? {})['disco_mood'] = 'enjoy_md';
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'arousal_oneline', 'foreplay', 5);
        scene.img('images/shared/sex/grab/ass_grab1.mp4');
        // TODO-QSP: 'As the song continues, you keep dancing with him, letting your hips roll, pressing your ass back in...
      } else {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.img('images/locations/pavlovsk/community/disco/club_dance3.jpg');
          scene.text('The dance continues for a while, both of you swaying to the rhythm and making doe eyes at one another.');
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirtShortness ?? 0) >= 3) {
            scene.img('images/locations/pavlovsk/community/disco/club_dance5.jpg');
            scene.text('You keep dancing with him, bouncing up and down along side him. There are a couple of moments you\'re sure he sees when your skirt flips up and shows you aren\'t wearing panties.');
          } else {
            scene.img('images/locations/pavlovsk/community/disco/club_dance6.jpg');
            scene.text('You keep dancing with him, bouncing up and down along side him thoroughly enjoying your time together.');
          }
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'boring_react') {
        ((s as any).temp ?? {})['disco_mood'] = 'bore_md';
      }
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'arousal_oneline', 'foreplay', 5);
        scene.img('images/shared/sex/grab/ass_grab1.mp4');
        scene.text('As the song continues, you keep dancing with him, trying to bury your disgust as he keeps pawing your ass. Soon enough, he is grabbing your cheeks so hard you can feel his fingers riding up between them through the fabric.');
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          scene.text('"I could grab this ass all night," he nearly shouts in your ear.');
          scene.text('<i>That\'s already what you\'ve been doing!</i> you mentally shout back while holding a strained smile on your face.');
        } else {
          scene.text('"Fuck! You aren\'t wearing panties, are you!" he growls in your ear, shoving his fingers deeper through your clothing.');
        }
      } else {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.img('images/locations/pavlovsk/community/disco/club_dance3.jpg');
          scene.text('The dance continues for a while, both of you swaying to the rhythm, while you stiffle sighs the whole time.');
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirtShortness ?? 0) >= 3) {
            scene.img('images/locations/pavlovsk/community/disco/club_dance5.jpg');
            scene.text('You keep dancing, more trying to ignore him than dance with him, though you\'re sure he doesn\'t see it that way. There are a couple of moments you\'re sure he sees when your skirt flips up and shows you aren\'t wearing panties.');
          } else {
            scene.img('images/locations/pavlovsk/community/disco/club_dance6.jpg');
            scene.text('You keep dancing, more trying to ignore him than dance with him, though you\'re sure he doesn\'t see it that way.');
          }
        }
      }
    }
    scene.text('Eventually the song comes to an end and the asks you with a grin, "Hey, you want to talk outside for a while?"');
    if (((s as any).alko ?? 0) < 6  ||  ((s as any).pcs_horny ?? 0) <= 75) {
      scene.actions([
        { label: 'Refuse', goto: ['pav_disco', ''] },
      ]);
    } else {
      qspCall(s, 'willpower', 'misc', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (((s as any).pcs_sprt ?? 0) <= 30) {
      qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 2) + 0);
    }
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/dk_night.jpg');
    if (((s as any).locArgs?.[1] ?? 0) === 'enjoy_react') {
      scene.text('"Sure," you smile and let him lead you outside.');
    } else {
      scene.text('"Sure, I guess," you say, a little flatly, and let him lead you outside.');
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_disco_outside', 'routing_matrix'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterInviteOutside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] < 2) {
    if (((s as any).temp ?? 0)?.['drunk_guy'] === 0) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('The guy constantly grabs your ass, breasts and tries kissing you, clearly feeling rather excited. Every time you press up against him, you feel something hard in his pants.');
          scene.text('The song then finally ends and the guy offers to take you outside for a drink.');
        } else {
          // TODO-QSP: dynamic text: "I'm <<$npcdesc>>. What's your name?" the guy asks.
          scene.text(`"I'm ${((s as any).npcdesc ?? 0)}. What's your name?" the guy asks.`);
          // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but people call me <<$pcs_nickname>>," you reply.
          scene.text(`"${((s as any).pcs_firstname ?? 0)}, but people call me ${((s as any).pcs_nickname ?? 0)}," you reply.`);
          scene.text('Once the song ends, the guy asks you to sit with him and chat.');
        }
        scene.actions([
          { label: 'Go with the guy', goto: ['pav_disco_outside', 'routing_matrix'] },
        ]);
      } else {
        if (((s as any).DPtipe ?? 0) === 1) {
          // TODO-QSP: dynamic text: "I'm <<$npcdesc>>. What's your name?" the guy asks.
          scene.text(`"I'm ${((s as any).npcdesc ?? 0)}. What's your name?" the guy asks.`);
          // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but people call me <<$pcs_nickname>>," you reply.
          scene.text(`"${((s as any).pcs_firstname ?? 0)}, but people call me ${((s as any).pcs_nickname ?? 0)}," you reply.`);
          scene.text('Once the song ends, the guy asks if you want to go outside with him.');
        } else {
          if (((s as any).DPtipe ?? 0) === 2) {
            // TODO-QSP: dynamic text: "I'm <<$npcdesc>>. What's your name?" the drunk guy asks.
            scene.text(`"I'm ${((s as any).npcdesc ?? 0)}. What's your name?" the drunk guy asks.`);
            // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but people call me <<$pcs_nickname>>," you reply.
            scene.text(`"${((s as any).pcs_firstname ?? 0)}, but people call me ${((s as any).pcs_nickname ?? 0)}," you reply.`);
            scene.text('His face is flushed with excitement as he asks you to leave with him to get some fresh air and talk outside.');
          }
        }
        scene.actions([
          { label: 'Go with the guy', goto: ['pav_disco', 'hookup_nice'] },
        ]);
      }
    } else {
      if (((s as any).temp ?? 0)?.['drunk_guy'] === 1) {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: "I'm <<$npcdesc>>. What's your name?" the guy asks.
            scene.text(`"I'm ${((s as any).npcdesc ?? 0)}. What's your name?" the guy asks.`);
            // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but people call me <<$pcs_nickname>>," you reply.
            scene.text(`"${((s as any).pcs_firstname ?? 0)}, but people call me ${((s as any).pcs_nickname ?? 0)}," you reply.`);
            scene.text('His face is flushed with excitement as he asks you to leave with him to get some fresh air and talk outside.');
            scene.actions([
              { label: 'Go outside', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'outside', 'aggressiv'
  } },
            ]);
          } else {
            scene.text('The guy constantly grabs your ass, breasts and tries kissing you, clearly feeling rather excited. Every time you press up against him, you feel something hard in his pants.');
            scene.text('The song then finally ends and the guy offers to take you outside for a drink.');
            qspCall(s, 'arousal', 'foreplay', 5);
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Go outside', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'outside', 'aggressiv'
  } },
            ]);
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            scene.text('The guy constantly grabs your ass, breasts and tries kissing you, clearly feeling rather excited. Every time you press up against him, you feel something hard in his pants.');
            scene.text('The song then finally ends and the guy asks if you want to go outside and get some fresh air.');
            qspCall(s, 'arousal', 'foreplay', 5);
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Go with him', goto: ['pav_disco', 'hookup_aggressive'] },
            ]);
          } else {
            scene.text('The guy constantly grabs your ass, breasts and tries kissing you, clearly feeling rather excited. Every time you press up against him, you feel something hard in his pants.');
            scene.text('The song then finally ends and the guy asks if you want to go outside and get some fresh air.');
            qspCall(s, 'arousal', 'foreplay', 5);
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Go with him', goto: ['pav_disco', 'hookup_aggressive'] },
            ]);
          }
        }
      }
    }
  } else {
    // TODO-QSP: $npc_usedname[$npcID] = $npc_nickname[$npcID]
    qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0));
    if (((s as any).temp ?? 0)?.['drunk_guy'] === 0) {
      scene.text('The man dances with confidence and elegance. When the song ends, he offers to take you outside for some fresh air.');
      scene.actions([
        { label: 'Go with the man', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    // TODO-QSP: dynamic text: You go outside with the man. As you walk, he put his arm around your waist. "I'm...
    scene.text(`You go outside with the man. As you walk, he put his arm around your waist. "I'm ${((s as any).npcdesc ?? 0)}. What's your name?" he asks.`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but people call me <<$pcs_nickname>>," you answer and the m...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, but people call me ${((s as any).pcs_nickname ?? 0)}," you answer and the man continues.`);
    scene.text('"That\'s a nice name. I\'m in town on a business trip and I\'m staying at a nearby hotel. There\'s virtually nothing to do in this town, so why don\'t you come back to my hotel with me? We can drink some whiskey and chat."');
    if (((s as any).alko ?? 0) < 6  ||  ((s as any).pcs_horny ?? 0) <= 75  ||  ((s as any).fame ?? 0)?.['pav_slut'] <= 50) {
      qspCall(s, 'willpower', 'drink', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    if (((s as any).pcs_sprt ?? 0) <= 30) {
      qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 2) + 0);
    }
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Go to the hotel', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['pav_hotel'] = 1
  }, goto: ['pav_disco_sex', 'hotel'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp ?? 0)?.['drunk_guy'] === 1) {
        scene.text('The drunk man molests you for the entire dance.');
        // TODO-QSP: dynamic text: When the song finally ends, he whispers in your ear. "My name is <<$npcdesc>>. W...
        scene.text(`When the song finally ends, he whispers in your ear. "My name is ${((s as any).npcdesc ?? 0)}. What's yours?"`);
        // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but people call me <<$pcs_nickname>>," you answer, feeling ...
        scene.text(`"${((s as any).pcs_firstname ?? 0)}, but people call me ${((s as any).pcs_nickname ?? 0)}," you answer, feeling somewhat disgusted.`);
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>... I'm not... Local. I'm staying in a... Nearby... Hotel, so ...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}... I'm not... Local. I'm staying in a... Nearby... Hotel, so let's... Take a taxi and go to... To my room..." he drunkenly stutters.`);
        qspCall(s, 'arousal', 'foreplay', 5);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Go to the hotel', goto: ['pav_disco_sex', 'hotel'] },
        ]);
      }
    }
  }
  if (((s as any).kotovLoveQW ?? 0) > 0) {
    scene.actions([{ label: 'Continue', goto: ['pav_disco', 'kotov_love'] }]);
  }
  scene.build();
}

function enterSlutInvite(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).gdk_nice_guy ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250)  ||  (((s as any).gdk_nice_guy ?? 0) === 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150)) {
    qspCall(s, 'boymass', 'B');
    // TODO-QSP: dynamic text: "Let's cut the crap; the whole town knows you're a slut. I want a blowjob, so he...
    scene.text(`"Let's cut the crap; the whole town knows you're a slut. I want a blowjob, so here's ${qspFunc(s, 'money', 'string_profit', 100)}."`);
    scene.text('He pulls his cock out of his pants and looks at you expectantly.');
    qspCall(s, 'pav_disco_sex', 'decline', 250);
    scene.actions([
      { label: 'Squat down before him', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'blowjob', 'paid'
  } },
    ]);
  } else {
    if ((((s as any).gdk_nice_guy ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 200  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250)  ||  (((s as any).gdk_nice_guy ?? 0) === 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 130  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150)) {
      // TODO-QSP: dynamic text: My buddies told me you're a <<$gnikname>>. So I want to have some fun with you t...
      scene.text(`My buddies told me you're a ${((s as any).gnikname ?? 0)}. So I want to have some fun with you too!"`);
      scene.text('He pulls his cock out of his pants and looks at you expectantly.');
      qspCall(s, 'pav_disco_sex', 'decline', 200);
      qspCall(s, 'pav_disco_sex', 'handjob');
      scene.actions([
        { label: 'Squat down before him', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'blowjob', 'unpaid'
  } },
      ]);
    } else {
      if ((!(Math.floor(Math.random() * 4) + 0))) {
        // TODO-QSP: dynamic text: I heard you're pretty good with your mouth <<$pcs_firstname>>, so let's have som...
        scene.text(`I heard you're pretty good with your mouth ${((s as any).pcs_firstname ?? 0)}, so let's have some fun!"`);
        scene.text('He pulls his cock out of his pants and looks at you expectantly.');
      } else {
        // TODO-QSP: dynamic text: I heard you're quite the tease, <<$pcs_firstname>>. So come on, let's have some ...
        scene.text(`I heard you're quite the tease, ${((s as any).pcs_firstname ?? 0)}. So come on, let's have some fun!"`);
        scene.text('He pulls his cock out of his pants and looks at you expectantly.');
      }
      qspCall(s, 'pav_disco_sex', 'decline', 130);
      qspCall(s, 'pav_disco_sex', 'handjob');
      scene.actions([
        { label: 'Squat down before him', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'blowjob', 'unpaid'
  } },
      ]);
    }
  }
  if ((((s as any).gdk_nice_guy ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 130)  ||  (((s as any).gdk_nice_guy ?? 0) === 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 70)) {
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      if (((s as any).temp ?? 0)?.['pav_disco_partner'] < 90) {
        scene.actions([
          { label: 'Tell him to fuck off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        // TODO-QSP: $npc_residence[$npcID] = 'city_center'
        ((s as any).npc_finance ?? {})[String((s as any).npcID ?? 0)] = 2;
        (s as any).bmtimeTipe = 2;
        (s as any).DrunkDPTrand = Math.floor(Math.random() * 101) + 0;
      }
    } else {
      scene.actions([
        { label: 'Tell him to fuck off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (((s as any).gdk_nice_guy ?? 0) === 1) {
      if (((s as any).fame ?? 0)?.['pav_sex'] > 10) {
        qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * (-4 - -2 + 1)) + (-2)));
      }
      if (((s as any).fame ?? 0)?.['pav_prostitute'] > 10) {
        qspCall(s, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * (-4 - -2 + 1)) + (-2)));
      }
    } else {
      if ((!((s as any).gdk_nice_guy ?? 0))) {
        if (((s as any).fame ?? 0)?.['pav_sex'] > 10) {
          qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * (-2 - 0 + 1)) + (0)));
        }
        if (((s as any).fame ?? 0)?.['pav_prostitute'] > 10) {
          qspCall(s, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * (-2 - 0 + 1)) + (0)));
        }
      }
    }
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/fuckoff3.jpg');
    scene.text('"What the fuck?!" you shout angrily. "What kind of idiot are you?! You can\'t just tell a girl to do that!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> is taken aback by your sudden outburst. "But... The boys said that ...
    scene.text(`${((s as any).npcdesc ?? 0)} is taken aback by your sudden outburst. "But... The boys said that yo-"`);
    scene.text('"That doesn\'t make it true! Ugh, men can be so gullible sometimes!" you tell him, barely holding yourself back from screaming it at him.');
    // TODO-QSP: dynamic text: <<$npcdesc>> is seriously rattled now and quickly apologizes. "Look, I'm sorry! ...
    scene.text(`${((s as any).npcdesc ?? 0)} is seriously rattled now and quickly apologizes. "Look, I'm sorry! I didn't know they were having a laugh!"`);
    scene.text('You shrug and leave without saying another word, secretly smiling to yourself. Men really <i>are</i> gullible sometimes.');
    scene.text('While walking back to the disco, several guys give you confused looks. The word spreads fast, and guys get a message that you\'re no easy lay after all. Your reputation improves a little as a result.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    if (((((s as any).gdk_nice_guy ?? 0) === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250)  ||  (((s as any).gdk_nice_guy ?? 0) === 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150))  &&  (((s as any).stat ?? 0)?.['prostitution_count'] > 0)) {
      scene.actions([
        { label: 'Tell him you\'ll do it for money', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (((s as any).gdk_nice_guy ?? 0) === 1) {
      qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 3) + 1);
    } else {
      if ((!((s as any).gdk_nice_guy ?? 0))) {
        qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 7) + 3);
      }
    }
    qspCall(s, 'money', 'earn', 200);
    ((s as any).stat ?? {})['prostitution_count'] = (((s as any).stat ?? {})['prostitution_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    if (((s as any).stat ?? 0)?.['prostitution_count'] <= 10) {
      scene.text('You take a deep breath. You don\'t want to touch him, but you can get something out of it. "I don\'t do favours like that for just anyone! If you pay me, however..." you shrug.');
    }
    if (((s as any).stat ?? 0)?.['prostitution_count'] > 10) {
      // TODO-QSP: dynamic text: You've done worse. "<<$func('money', 'string_profit', 200)>>," is all you say.
      scene.text(`You've done worse. "${qspFunc(s, 'money', 'string_profit', 200)}," is all you say.`);
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> looks a little confused but gives you <<$func('money', 'string_prof...
    scene.text(`${((s as any).npcdesc ?? 0)} looks a little confused but gives you ${qspFunc(s, 'money', 'string_profit', 200)}.`);
    scene.actions([
      { label: 'Squat down before him', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_disco_sex', 'blowjob', 'paid'
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterKnownPartner(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0));
  qspCall(s, 'stat', '');
  if ((Array.isArray((s as any).fuckbuddy) ? ((s as any).fuckbuddy as any[]).indexOf(((s as any).npcID ?? 0)) : -1) > 0) {
    scene.text('"Hey."');
    // TODO-QSP: dynamic text: You turn at the calling and see <<$npcdesc>> moving in to dance with you.
    scene.text(`You turn at the calling and see ${((s as any).npcdesc ?? 0)} moving in to dance with you.`);
  } else {
    if ((Array.isArray((s as any).hookup_partners) ? ((s as any).hookup_partners as any[]).indexOf(((s as any).npcID ?? 0)) : -1) > 0) {
    }
  }
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] < 2) {
    scene.img('images/locations/pavlovsk/community/disco/normal1.jpg');
    // TODO-QSP: dynamic text: A man you recognize, dressed in <<$npc_outfit[$npcID]>>, dances his way over to ...
    scene.text(`A man you recognize, dressed in ${((s as any).npc_outfit ?? 0)?.[String((s as any).npcID ?? 0)]}, dances his way over to you.`);
  } else {
    scene.img('images/locations/pavlovsk/community/disco/normal1.jpg');
    // TODO-QSP: dynamic text: A man you recognize, dressed in expensive looking <<$npc_outfit[$npcID]>>, dance...
    scene.text(`A man you recognize, dressed in expensive looking ${((s as any).npc_outfit ?? 0)?.[String((s as any).npcID ?? 0)]}, dances his way over to you.`);
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
    // TODO-QSP: dynamic text: "Hey <<$pcs_usedname[$npcID]>>," he smiles, wrapping his arm around you possessi...
    scene.text(`"Hey ${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," he smiles, wrapping his arm around you possessively. "Fancy seeing you here."`);
    scene.text('He leans over to whisper in your ear.');
    scene.text('"I have a hotel and cash to burn. Why don\'t we get out of here so I can spend it?"');
    scene.actions([
      { label: 'Not tonight', handler: (st: GameState) => {
    scene.text('"Sorry daddy. I can\'t tonight. Maybe another time."');
    scene.text('You give him a wry smile as you move away from him.');
    scene.actions([
      { label: 'Leave', goto: ['pav_disco', ''] },
      { label: 'Keep dancing', goto: ['pav_disco', 'disco_dance'] },
    ]);
  } },
      { label: 'Accept the offer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"That sounds nice," you smile sweetly and let him take your arm as he leads you out into the street. He calls a taxi and the two of you head off to the hotel together.');
    scene.actions([
      { label: 'Go to the hotel with him', goto: ['sex_ev_start', 'fb_hotel_start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
      // TODO-QSP: dynamic text: <<$npcdesc>> wraps his arm around you possessively. "Fancy seeing you here."
      scene.text(`${((s as any).npcdesc ?? 0)} wraps his arm around you possessively. "Fancy seeing you here."`);
      scene.text('He leans over to whisper in your ear.');
      if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        scene.text('"Why don\'t we get a hotel and fuck each other\'s brains out?"');
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center'  ||  ((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
          scene.text('"Why don\'t we go back to my place in the city and fuck our brains out?"');
        } else {
          scene.text('"Why don\'t we get out of here and have some real fun?"');
        }
      }
      if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        scene.actions([
          { label: 'Go back to the hotel', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('"That sounds like fun," you smirk back sweetly and let him take your arm as he leads you out into the street to the hotel by the market.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'hotel_start'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go back to his place', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('"That sounds like fun," you smirk back sweetly and let him take your arm as he leads you out into the street and back to his place.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_start', 'npc_home_start'] },
    ]);
  } },
        ]);
      }
      qspCall(s, 'family_schedule', '');
      if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1  &&  ((s as any).home ?? 0)?.['current'] === 'parents_home') {
        scene.actions([
          { label: 'Back to your place', handler: (st: GameState) => {
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center'  ||  ((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
      // TODO-QSP: dynamic text: "But the city is so far," you pout. After a moment of holding the expression, yo...
      scene.text(`"But the city is so far," you pout. After a moment of holding the expression, you let it melt into a sultry smile as you lean in to whisper in ${((s as any).npcdesc ?? 0)}'s ear. "Why don't we go back to my place? <i>My parents aren't home tonight...</i>"`);
    } else {
      // TODO-QSP: dynamic text: With a sultry smirk, you lean in to whisper in <<$npcdesc>>'s ear.
      scene.text(`With a sultry smirk, you lean in to whisper in ${((s as any).npcdesc ?? 0)}'s ear.`);
      scene.text('"<i>My parents aren\'t home tonight...</i>"');
    }
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the estate together.');
    scene.actions([
      { label: 'Rush home', goto: ['sex_ev_start', 'pc_home_start'] },
    ]);
  } },
        ]);
      }
      if (((s as any).home ?? 0)?.['current'] === 'mey_home') {
        scene.actions([
          { label: 'Back to the Meynolds', handler: (st: GameState) => {
    scene.text('"That sounds like fun. Wanna come back to my place?" you ask. "My housemates won\'t mind."');
    scene.text('The look in his eyes is all you need to know and the two of you rush back to the Meynold\'s house together.');
    scene.actions([
      { label: 'Rush home', goto: ['sex_ev_start', 'pc_home_start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Not tonight', handler: (st: GameState) => {
    scene.text('"Sorry, I can\'t tonight. Maybe another time."');
    scene.text('You give him a wry smile as you move away from him.');
    scene.actions([
      { label: 'Leave', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
        // TODO-QSP: dynamic text: It's <<$npcdesc>>, your boyfriend.
        scene.text(`It's ${((s as any).npcdesc ?? 0)}, your boyfriend.`);
        scene.text('"Fancy seeing you here," he smiles at you.');
        scene.actions([
          { label: 'Dance with him', goto: ['pav_disco', 'dance_boy'] },
        ]);
      } else {
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'hookup'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
          if (((s as any).virgin_stats ?? 0)?.['taker_ID'] === ((s as any).npcID ?? 0)) {
            // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. I popped your cherry."
            scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. I popped your cherry."`);
          } else {
            if (((s as any).npc_hookup ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
              if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] >= ((s as any).daystart ?? 0) - 7) {
                // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. We hooked up the other day."
                scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. We hooked up the other day."`);
              } else {
                if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] >= ((s as any).daystart ?? 0) - 30) {
                  // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. We hooked up a few weeks ago."
                  scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. We hooked up a few weeks ago."`);
                } else {
                  // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. We hooked up a while back."
                  scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. We hooked up a while back."`);
                }
              }
            } else {
              if (((s as any).npc_anal_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. I fucked your ass."
                scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. I fucked your ass."`);
              } else {
                if (((s as any).npc_vaginal_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                  // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. We fucked?"
                  scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. We fucked?"`);
                } else {
                  if (((s as any).npc_titstuff_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                    // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. You gave me titfuck you."
                    scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. You gave me titfuck you."`);
                  } else {
                    if (((s as any).npc_oral_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                      // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. You gave me a blowjob."
                      scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. You gave me a blowjob."`);
                    } else {
                      if (((s as any).npc_handstuff_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                        // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. You gave me a handjob."
                        scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. You gave me a handjob."`);
                      } else {
                        if (((s as any).bmGANG ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                          // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. You let me and my friend fuck you."
                          scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. You let me and my friend fuck you."`);
                        } else {
                          if (((s as any).bmKISS ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).bmTITS ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                            // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. We hung out and drank together beer."
                            scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. We hung out and drank together beer."`);
                          } else {
                            // TODO-QSP: dynamic text: "Remember me? I'm <<$npcdesc>>. We danced together."
                            scene.text(`"Remember me? I'm ${((s as any).npcdesc ?? 0)}. We danced together."`);
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
            { label: 'Dance with him', goto: ['pav_disco', 'dance_boy'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: It's <<$npcdesc>>.
          scene.text(`It's ${((s as any).npcdesc ?? 0)}.`);
          scene.actions([
            { label: 'Dance with him', goto: ['pav_disco', 'dance_boy'] },
          ]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_disco', ''] },
    { label: 'Dance', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] < 2) {
      // TODO-QSP: dynamic text: After the dance, <<$npcdesc>> offers to go out and drink beer.
      scene.text(`After the dance, ${((s as any).npcdesc ?? 0)} offers to go out and drink beer.`);
    } else {
      // TODO-QSP: dynamic text: After the dance, <<$npcdesc>> offers to go to his hotel.
      scene.text(`After the dance, ${((s as any).npcdesc ?? 0)} offers to go to his hotel.`);
    }
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
      ]);
    }
    // TODO-QSP: end}
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).boynumBlock = 1;
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 0) {
      (s as any).gdk_nice_guy = 1;
      scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'outside'] }]);
    }
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'outside'] }]);
    }
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 2) {
      (s as any).DPtipe = 2;
      ((s as any).sex_ev ?? {})['pav_hotel'] = 1;
      scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'hotel'] }]);
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
    case 'disco_dance':
      enterDiscoDance(s, scene);
      break;
    case 'too_drunk_low_chance':
      enterTooDrunkLowChance(s, scene);
      break;
    case 'too_drunk_medium_chance':
      enterTooDrunkMediumChance(s, scene);
      break;
    case 'too_drunk_high_chance':
      enterTooDrunkHighChance(s, scene);
      break;
    case 'too_drunk_base':
      enterTooDrunkBase(s, scene);
      break;
    case 'wall_stand':
      enterWallStand(s, scene);
      break;
    case 'dance_partner':
      enterDancePartner(s, scene);
      break;
    case 'kotov_love':
      enterKotovLove(s, scene);
      break;
    case 'reakt_dance':
      enterReaktDance(s, scene);
      break;
    case 'dance_boy':
      enterDanceBoy(s, scene);
      break;
    case 'dance_react':
      enterDanceReact(s, scene);
      break;
    case 'dance_boy2':
      enterDanceBoy2(s, scene);
      break;
    case 'invite_outside':
      enterInviteOutside(s, scene);
      break;
    case 'slut_invite':
      enterSlutInvite(s, scene);
      break;
    case 'known_partner':
      enterKnownPartner(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_disco: LocationDef = {
  name: 'pav_disco',
  title: 'Disco',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['The club is closing for the night. The main lights go on, the music fades and everyone starts leaving.'],
  enter: enter,
};
