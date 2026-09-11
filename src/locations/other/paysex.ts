import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) > 0) {
    (s as any).knwn = qspUntranslated(s, "ARGS[1]", { location: "paysex" });
    // TODO-QSP: :knownloop
    ((s as any).knownboy ?? {})[String((s as any).knwn ?? 0)] = 1;
    (s as any).knwn = ((s as any).knwn ?? 0) - (1);
    if (((s as any).knwn ?? 0) > 0) {
      // TODO-QSP: jump 'knownloop'
    }
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'sweat', 'add', 10);
  (s as any).picrand = Math.floor(Math.random() * 2) + 0;
  scene.actions([{ label: 'Continue', goto: ['paysex', 'var'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).temp_randpicture = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).temp_randpicture ?? 0))) {
  }
  if (((s as any).temp_randpicture ?? 0) === 1) {
  }
  if (((s as any).temp_randpicture ?? 0) === 2) {
  }
  scene.img(`images/locations/shared/sex/${((s as any).randpicture ?? 0)}${((s as any).picrand ?? 0)}.jpg`);
  // TODO-QSP: copyarr '$temp1', '$boy'
  (s as any).x = 0;
  // TODO-QSP: :randomorder
  (s as any).paysexrand = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('temp1') - 1);
  // TODO-QSP: $temp2[x] = $temp1[paysexrand]
  (s as any).x = ((s as any).x ?? 0) + (1);
  if (Object.keys((s as any).temp1 ?? {}).length > 0) {
    // TODO-QSP: jump 'randomorder'
  }
  (s as any).j = 0;
  (s as any).i = 0;
  // TODO-QSP: :arrayloop
  // TODO-QSP: gs 'boyStat', $temp2[j]
  if ((!((s as any).j ?? 0))) {
    if ((!((s as any).paysxsex ?? 0))) {
      (s as any).paysxsex = 1;
    }
    qspCall(s, 'arousal', 'vaginal', 5, 'prostitution');
    if (((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)] === '') {
      // TODO-QSP: dynamic text: <<$boydesc>> fucks your pussy.
      scene.text(`${((s as any).boydesc ?? 0)} fucks your pussy.`);
    } else {
      // TODO-QSP: dynamic text: <<$paysextext[j]>>
      scene.text(`${((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)]}`);
    }
    (s as any).cumprecheck = 1;
    if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
      // TODO-QSP: gs 'cum_call', '', $temp2[j], 1 else gs 'cum_call', '', $temp2[j]
    }
  } else {
    if (((s as any).j ?? 0) === 1) {
      if ((!((s as any).paysxanal ?? 0))) {
        (s as any).paysxanal = 1;
      }
      qspCall(s, 'arousal', 'anal', (-5), 'prostitution', 'gangbang');
      if (((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)] === '') {
        // TODO-QSP: dynamic text: <<$boydesc>> fucks your ass.
        scene.text(`${((s as any).boydesc ?? 0)} fucks your ass.`);
      } else {
        // TODO-QSP: dynamic text: <<$paysextext[j]>>
        scene.text(`${((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)]}`);
      }
    } else {
      if (((s as any).j ?? 0) === 2) {
        if ((!((s as any).paysxbj ?? 0))) {
          (s as any).paysxbj = 1;
        }
        qspCall(s, 'arousal', 'bj', (-5), 'prostitution', 'gangbang');
        if (((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)] === '') {
          // TODO-QSP: dynamic text: <<$boydesc>> fucks your mouth.
          scene.text(`${((s as any).boydesc ?? 0)} fucks your mouth.`);
        } else {
          // TODO-QSP: dynamic text: <<$paysextext[j]>>
          scene.text(`${((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)]}`);
        }
      } else {
        if (((s as any).j ?? 0) === 3) {
          if ((!((s as any).paysxhj ?? 0))) {
            (s as any).paysxhj = 1;
          }
          qspCall(s, 'arousal', 'hj', (-5), 'prostitution', 'gangbang');
          if (((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)] === '') {
            // TODO-QSP: dynamic text: <<$boydesc>> uses one of your hands to stroke his cock.
            scene.text(`${((s as any).boydesc ?? 0)} uses one of your hands to stroke his cock.`);
          } else {
            // TODO-QSP: dynamic text: <<$paysextext[j]>>
            scene.text(`${((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)]}`);
          }
        } else {
          if (((s as any).j ?? 0) === 4) {
            qspCall(s, 'arousal', 'hj', (-5), 'prostitution', 'gangbang');
            if (((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)] === '') {
              // TODO-QSP: dynamic text: <<$boydesc>> uses your other hand to stroke his cock.
              scene.text(`${((s as any).boydesc ?? 0)} uses your other hand to stroke his cock.`);
            } else {
              // TODO-QSP: dynamic text: <<$paysextext[j]>>
              scene.text(`${((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)]}`);
            }
          } else {
            if (((s as any).j ?? 0) > 4) {
              if (((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)] === '') {
                // TODO-QSP: dynamic text: <<$boydesc>> strokes himself standing over you waiting for his turn.
                scene.text(`${((s as any).boydesc ?? 0)} strokes himself standing over you waiting for his turn.`);
              } else {
                // TODO-QSP: dynamic text: <<$paysextext[j]>>
                scene.text(`${((s as any).paysextext ?? 0)?.[String((s as any).j ?? 0)]}`);
              }
            }
          }
        }
      }
    }
  }
  (s as any).j = ((s as any).j ?? 0) + (1);
  if (((s as any).j ?? 0) < ((s as any).i ?? 0)) {
    // TODO-QSP: jump 'arrayloop'
  }
  // TODO-QSP: $boy[0] = $boyP
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  if (((s as any).sexvar ?? 0) > 1) {
    scene.actions([
      { label: 'Continue', goto: ['paysex', 'var'] },
    ]);
  } else {
    scene.actions([
      { label: 'Finish', goto: ['paysex', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  // TODO-QSP: copyarr '$temp1', '$boy'
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  scene.img(`images/locations/shared/sex/cum${((s as any).picrand ?? 0)}.jpg`);
  (s as any).x = 0;
  // TODO-QSP: :randomend
  (s as any).paysexrand = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('temp1') - 1);
  // TODO-QSP: $temp2[x] = $temp1[paysexrand]
  (s as any).x = ((s as any).x ?? 0) + (1);
  if (Object.keys((s as any).temp1 ?? {}).length > 0) {
    // TODO-QSP: jump 'randomend'
  }
  (s as any).j = 0;
  (s as any).i = 0;
  // TODO-QSP: :arrayloopend
  // TODO-QSP: gs 'boyStat', $temp2[j]
  if ((!((s as any).j ?? 0))) {
    if ((Math.floor(Math.random() * 4) + 0) !== 0) {
      // TODO-QSP: dynamic text: <<$boydesc>> is cumming in your pussy.
      scene.text(`${((s as any).boydesc ?? 0)} is cumming in your pussy.`);
      if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
        // TODO-QSP: gs 'cum_call', '', $temp2[j], 1 else gs 'cum_call', '', $temp2[j]
      }
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your labia.
      scene.text(`${((s as any).boydesc ?? 0)} is cumming on your labia.`);
      if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
        // TODO-QSP: gs 'cum_call', 'labia', $temp2[j], 1 else gs 'cum_call', 'labia', $temp2[j]
      }
    }
  } else {
    if (((s as any).j ?? 0) === 1) {
      if ((Math.floor(Math.random() * 4) + 0) !== 0) {
        // TODO-QSP: dynamic text: <<$boydesc>> is cumming in your ass.
        scene.text(`${((s as any).boydesc ?? 0)} is cumming in your ass.`);
        if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
          // TODO-QSP: gs 'cum_call', 'anus', $temp2[j], 1 else gs 'cum_call', 'anus', $temp2[j]
        }
      } else {
        // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your ass.
        scene.text(`${((s as any).boydesc ?? 0)} is cumming on your ass.`);
        if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
          // TODO-QSP: gs 'cum_call', 'butt', $temp2[j], 1 else gs 'cum_call', 'butt', $temp2[j]
        }
      }
    } else {
      if (((s as any).j ?? 0) === 2) {
        if ((Math.floor(Math.random() * 4) + 0) !== 0) {
          // TODO-QSP: dynamic text: <<$boydesc>> is cumming in your mouth.
          scene.text(`${((s as any).boydesc ?? 0)} is cumming in your mouth.`);
          if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
            // TODO-QSP: gs 'cum_call', 'mouth', $temp2[j], 1 else gs 'cum_call', 'mouth', $temp2[j]
          }
        } else {
          // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your face.
          scene.text(`${((s as any).boydesc ?? 0)} is cumming on your face.`);
          if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
            // TODO-QSP: gs 'cum_call', 'face', $temp2[j], 1 else gs 'cum_call', 'face', $temp2[j]
          }
        }
      } else {
        if (((s as any).j ?? 0) > 2) {
          (s as any).cumrand = Math.floor(Math.random() * 9) + 0;
          if ((!((s as any).cumrand ?? 0))) {
            // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your tits.
            scene.text(`${((s as any).boydesc ?? 0)} is cumming on your tits.`);
            if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
              // TODO-QSP: gs 'cum_call', 'breasts', $temp2[j], 1 else gs 'cum_call', 'breasts', $temp2[j]
            }
          } else {
            if (((s as any).cumrand ?? 0) === 1) {
              // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your belly.
              scene.text(`${((s as any).boydesc ?? 0)} is cumming on your belly.`);
              if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
                // TODO-QSP: gs 'cum_call', 'stomach', $temp2[j], 1 else gs 'cum_call', 'stomach', $temp2[j]
              }
            } else {
              if (((s as any).cumrand ?? 0) === 2) {
                // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your hair.
                scene.text(`${((s as any).boydesc ?? 0)} is cumming on your hair.`);
                if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
                  // TODO-QSP: gs 'cum_call', 'hair', $temp2[j], 1 else gs 'cum_call', 'hair', $temp2[j]
                }
              } else {
                if (((s as any).cumrand ?? 0) === 3) {
                  // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your face.
                  scene.text(`${((s as any).boydesc ?? 0)} is cumming on your face.`);
                  if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
                    // TODO-QSP: gs 'cum_call', 'face', $temp2[j], 1 else gs 'cum_call', 'face', $temp2[j]
                  }
                } else {
                  if (((s as any).cumrand ?? 0) === 4) {
                    // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your ass.
                    scene.text(`${((s as any).boydesc ?? 0)} is cumming on your ass.`);
                    if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
                      // TODO-QSP: gs 'cum_call', 'butt', $temp2[j], 1 else gs 'cum_call', 'butt', $temp2[j]
                    }
                  } else {
                    if (((s as any).cumrand ?? 0) === 5) {
                      // TODO-QSP: dynamic text: <<$boydesc>> is cumming on your labia.
                      scene.text(`${((s as any).boydesc ?? 0)} is cumming on your labia.`);
                      if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
                        // TODO-QSP: gs 'cum_call', 'labia', $temp2[j], 1 else gs 'cum_call', 'labia', $temp2[j]
                      }
                    } else {
                      if (((s as any).cumrand ?? 0) === 6) {
                        // TODO-QSP: dynamic text: <<$boydesc>> is cumming in your pussy.
                        scene.text(`${((s as any).boydesc ?? 0)} is cumming in your pussy.`);
                        if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
                          // TODO-QSP: gs 'cum_call', '', $temp2[j], 1 else gs 'cum_call', '', $temp2[j]
                        }
                      } else {
                        if (((s as any).cumrand ?? 0) === 7) {
                          // TODO-QSP: dynamic text: <<$boydesc>> is cumming in your ass.
                          scene.text(`${((s as any).boydesc ?? 0)} is cumming in your ass.`);
                          if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
                            // TODO-QSP: gs 'cum_call', 'anus', $temp2[j], 1 else gs 'cum_call', 'anus', $temp2[j]
                          }
                        } else {
                          if (((s as any).cumrand ?? 0) === 8) {
                            // TODO-QSP: dynamic text: <<$boydesc>> is cumming in your mouth.
                            scene.text(`${((s as any).boydesc ?? 0)} is cumming in your mouth.`);
                            if (((s as any).knownboy ?? 0)?.[String((s as any).j ?? 0)] === 1) {
                              // TODO-QSP: gs 'cum_call', 'mouth', $temp2[j], 1 else gs 'cum_call', 'mouth', $temp2[j]
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
  (s as any).j = ((s as any).j ?? 0) + (1);
  if (((s as any).j ?? 0) < ((s as any).i ?? 0)) {
    // TODO-QSP: jump 'arrayloopend'
  }
  qspCall(s, 'stat', '');
  scene.text('After all of the guys had their way with your body, you can finally catch your breath.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).paysxbj = 0;
    (s as any).paysxsex = 0;
    (s as any).paysxanal = 0;
    (s as any).paysxhj = 0;
    (s as any).firstact = 0;
    if (((s as any).picrand ?? 0) === 16  ||  ((s as any).picrand ?? 0) === 17) {
      scene.actions([{ label: 'Continue', goto: ['office', 'work'] }]);
    } else {
      if (((s as any).picrand ?? 0) === 18) {
        scene.actions([{ label: 'Continue', goto: ['husbSex', 'dolgend'] }]);
      } else {
        scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'sexloc'); } }]);
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
    case 'var':
      enterVar(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const paysex: LocationDef = {
  name: 'paysex',
  title: 'After all of the guys had their way with your body, you can ',
  region: 'other',
  enter: enter,
};
