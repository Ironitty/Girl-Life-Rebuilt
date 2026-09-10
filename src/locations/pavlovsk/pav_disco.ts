import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 19) {
    (s as any).pav_disco_in = ((s as any).daystart ?? 0);
  }
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 80;
    (s as any).music_loop = 1;
  }
  qspCall(s, 'core_library', 'setloc', 'pav_disco', '');
  (s as any).boynumBlock = 0;
  (s as any).stat['last_disco'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  if (((s as any).social_check ?? 0)?.['disco'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6) {
    (s as any).social_check['disco'] = ((s as any).daystart ?? 0);
    if (qspFunc(s, 'pcs_has_attr', 'clothes_pants_any')) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
      if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_high')) {
        (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
      }
    }
    if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_low')) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (5);
    } else {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    }
    if (((s as any).PCloInhibit ?? 0) >= 35) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (3);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
    } else {
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
      (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    }
    if (qspFunc(s, 'pcs_has_attr', 'shoes_quality_low')) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
    } else {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    }
    if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_flat')) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (2);
    }
    if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_running')) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (5);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (5);
      (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    } else {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (5);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (3);
      (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_light')) {
        (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
      } else {
        (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_bimbo')) {
          (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (3);
        } else {
          (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (3);
          (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (5);
          (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
          (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
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
        if (((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 4  &&  ((s as any).dimadisco ?? 0) === 0) {
          // TODO-QSP: gt 'dimaRevenge', 5, 'disco'
        }
        if (Math.floor(Math.random() * 3) + 0 === 0  &&  ((s as any).soniaQW ?? 0)?.['slut'] < 1  &&  ((s as any).soniadisco_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).month ?? 0) > 9  &&  ((s as any).npc_grupTipe ?? 0)?.['A25'] !== 5  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['attendance_count'] > 0  &&  ((s as any).hour ?? 0) < 22) {
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
    }
  }
  scene.build();
}

export const pav_disco: LocationDef = {
  name: 'pav_disco',
  title: 'Disco',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
