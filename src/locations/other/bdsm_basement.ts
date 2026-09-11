import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_basement', 'start');
  qspCall(s, 'stat', '');
  (s as any).bdsm_basement_rand = Math.floor(Math.random() * 100) + 0;
  if (((s as any).bdsm_basement_rand ?? 0) < 61) {
    scene.img('images/locations/city/suburb/bdsm_club/basement.jpg');
    scene.text('Basement, for torture and whatnot');
    scene.actions([
      { label: 'Go upstairs', goto: ['bdsm_hallway', 'foyer'] },
    ]);
  } else {
    if (((s as any).bdsm_basement_rand ?? 0) < 64) {
      scene.img('images/locations/city/suburb/bdsm_club/sex/stacross.mp4');
      scene.text('A woman is shackled to a Saint Andrews Cross while several dom\'s take turns whipping her.');
      qspCall(s, 'bdsm_basement', 'end');
    } else {
      if (((s as any).bdsm_basement_rand ?? 0) < 67) {
        scene.img('images/locations/city/suburb/bdsm_club/sex/2domsub.mp4');
        scene.text('Two dommes fuck their subs wearing ball gags roughly, in a contest to see how can make their sub orgasm first.');
        qspCall(s, 'bdsm_basement', 'end_sex');
      } else {
        if (((s as any).bdsm_basement_rand ?? 0) < 70) {
          scene.img('images/locations/city/suburb/bdsm_club/sex/3dom.mp4');
          scene.text('Three dommes taking turn fucking their submissive male bent over a padded bench.');
          qspCall(s, 'bdsm_basement', 'end_sex');
        } else {
          if (((s as any).bdsm_basement_rand ?? 0) < 73) {
            scene.img('images/locations/city/suburb/bdsm_club/sex/subbyhubby.jpg');
            scene.text('A dominate wife wearing a strap-on fucks her husband with another man.');
            qspCall(s, 'bdsm_basement', 'end_sex');
          } else {
            if (((s as any).bdsm_basement_rand ?? 0) < 76) {
              scene.img('images/locations/city/suburb/bdsm_club/sex/baserand9.mp4');
              scene.text('You see a submissive woman, tied and being fucked by a dominant man. Their eyes are locked and they are oblivious to the crowd of people watching them.');
              qspCall(s, 'bdsm_basement', 'end_sex');
            } else {
              if (((s as any).bdsm_basement_rand ?? 0) < 79) {
                scene.img('images/locations/city/suburb/bdsm_club/sex/baserand8.mp4');
                scene.text('You see a submissive woman, tied and gagged and being fucked by a dominant man.');
                qspCall(s, 'bdsm_basement', 'end_sex');
              } else {
                if (((s as any).bdsm_basement_rand ?? 0) < 82) {
                  scene.img('images/locations/city/suburb/bdsm_club/sex/baserand7.jpg');
                  scene.text('You see three submissives, tied up and hanging upside down.');
                  qspCall(s, 'bdsm_basement', 'end');
                } else {
                  if (((s as any).bdsm_basement_rand ?? 0) < 85) {
                    scene.img('images/locations/city/suburb/bdsm_club/sex/baserand6.mp4');
                    scene.text('You see a two submissives being used by 2 dommes.');
                    qspCall(s, 'bdsm_basement', 'end_sex');
                  } else {
                    if (((s as any).bdsm_basement_rand ?? 0) < 88) {
                      scene.img('images/locations/city/suburb/bdsm_club/sex/baserand5.jpg');
                      scene.text('You see a submissive, tied up and waiting for someone to play with.');
                      qspCall(s, 'bdsm_basement', 'end');
                    } else {
                      if (((s as any).bdsm_basement_rand ?? 0) < 91) {
                        scene.img('images/locations/city/suburb/bdsm_club/sex/baserand4.mp4');
                        scene.text('You see a Mistress with two submissives, she is fucking one of them.');
                        qspCall(s, 'bdsm_basement', 'end_sex');
                      } else {
                        if (((s as any).bdsm_basement_rand ?? 0) < 94) {
                          scene.img('images/locations/city/suburb/bdsm_club/sex/baserand3.jpg');
                          scene.text('A submissive woman is tied up and displayed like an art exhibition, the sign tells people to use the whip on her.');
                          qspCall(s, 'bdsm_basement', 'end');
                        } else {
                          if (((s as any).bdsm_basement_rand ?? 0) < 97) {
                            scene.img('images/locations/city/suburb/bdsm_club/sex/baserand2.jpg');
                            scene.text('You see a submissive, tied up and waiting for someone to play with.');
                            qspCall(s, 'bdsm_basement', 'end');
                          } else {
                            scene.img('images/locations/city/suburb/bdsm_club/sex/baserand1.mp4');
                            scene.text('You see a Mistress with two submissives, she is fucking one of them.');
                            qspCall(s, 'bdsm_basement', 'end_sex');
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

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_basement', 'start'] },
  ]);
  scene.build();
}

function enterEndSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_basement', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'end_sex':
      enterEndSex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bdsm_basement: LocationDef = {
  name: 'bdsm_basement',
  title: 'Basement, for torture and whatnot',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
