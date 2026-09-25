import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'intro_initialization', 'init');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
      (s as any).temp_image = '2_sg/start_sg.jpg';
      (s as any).stat_explanation = 'sg';
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
        (s as any).temp_image = '2_sg/start_csg.jpg';
        (s as any).stat_explanation = 'sg_m';
      } else {
        (s as any).temp_image = '2_sg/start_csg.jpg';
        (s as any).stat_explanation = 'sg_tg';
      }
    }
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      (s as any).temp_image = '6_uni/uni_start.jpg';
      (s as any).stat_explanation = 'uni';
    } else {
      (s as any).temp_image = '5_city/city_start.jpg';
      (s as any).stat_explanation = 'city';
    }
  }
  scene.img(`images/system/1_openings/${((s as any).temp_image ?? '')}`);
  (s as any).temp_image = undefined;
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
      scene.text('Welcome to the Schoolgirl version! You will need to carry on with your school life, manage your relationships and deal with whatever else comes up along the way!');
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
        scene.text(`Welcome to the Cursed Schoolgirl version! Guide ${((s as any).pcs_nickname ?? '')} through her school life, relationships and myriad of other issues that might pop up, all with the added spice of magic to keep things interesting!`);
      } else {
        scene.text(`Welcome to the Transformation start! Although you've lost your masculinity and your old life, new possibilities are opening up before your eyes! Guide ${((s as any).pcs_nickname ?? '')} through her school life, relationships and the many other issues that might pop up.`);
      }
    }
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
        scene.text('Welcome to Girl Life.');
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
          scene.text('Welcome to the Cursed University Student version!');
        } else {
          scene.text('Welcome to the Transformation start! Although you\'ve lost your masculinity and your old life, new possibilities are opening up before your eyes, not least aided in your newfound knowledge of the magical nature of the world!');
        }
      }
      scene.text(`Guide ${((s as any).pcs_nickname ?? '')} through the many challenges of life at university. Manage coursework, a job, and relationships with the people you meet on your journey.`);
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
        scene.text('Welcome to Girl Life. You are finally free of your parents and ready to face all the freedoms and challenges that entails. Your options are nearly unlimited and now it\'s time to go out and discover them all.');
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
          scene.text(`Welcome to the magical girl version of Girl Life! You are finally free of your parents and ready to face all the freedoms and challenges that entails. Guide ${((s as any).pcs_nickname ?? '')} through her life, relationships and myriad of other issues that might pop up, all with the added spice of magic to keep things interesting!`);
        } else {
          scene.text('Welcome to the Transformation start! Although you\'ve lost your masculinity and your old life, new possibilities are opening up before your eyes, not least aided in your newfound knowledge of the magical nature of the world!');
        }
      }
      scene.text('Don\'t forget to enroll at the university in August if that\'s a goal you wish to pursue.');
    }
  }
  // TODO-QSP: savegame 'autosave_newgame.sav'
  scene.actions([
    { label: 'Start the game', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
      if ((!((st as any).start_location ?? 0))) {
        qspGoto(st, 'intro_sg', 'intro_pavlovsk');
      } else {
        if (((st as any).start_location ?? 0) === 1) {
          qspGoto(st, 'intro_sg', 'intro_gadukino');
        } else {
          if (((st as any).start_location ?? 0) === 2) {
            qspGoto(st, 'intro_sg', 'intro_pushkin');
          } else {
            qspGoto(st, 'intro_sg', 'intro_sharing');
          }
        }
      }
    } else {
      if (((st as any).start_type ?? 0)?.['loc'] === 'uni') {
        qspGoto(st, 'uni_grounds', '');
      } else {
        qspGoto(st, 'korr', '');
      }
    }
  } },
    { label: 'Introduction to character stats and the stat display', goto: ['$menu_settings', 'explanation_start'] },
  ]);
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_initialization', 'init');
  (s as any).music_loop = 0;
  // TODO-QSP: savegame 'autosave_newgame.sav'
  scene.actions([
    { label: 'Start the game', handler: (st: GameState) => {
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
      qspGoto(st, 'intro_sg', 'quick_start', ((st as any).start_location ?? ''));
    } else {
      if (((st as any).start_type ?? 0)?.['loc'] === 'uni') {
        qspGoto(st, 'uni_grounds', '');
      } else {
        qspGoto(st, 'korr', '');
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'quick_start':
      enterQuickStart(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_game_start: LocationDef = {
  name: 'intro_game_start',
  title: 'Welcome to the Schoolgirl version! You will need to carry on',
  region: 'other',
  enter: enter,
};
