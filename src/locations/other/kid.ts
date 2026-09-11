import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).pcs_mothername ?? 0) === '') {
    if (((s as any).pcs_mothername ?? 0) === '') {
    }
  }
  if (((s as any).kid ?? 0) > 0) {
    (s as any).k = 0;
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).pain ?? 0)?.['nipples'] > 60) {
    scene.text('You cannot breast feed right now. Your nipples are too sore.');
  }
  // TODO-QSP: :loop
  if (((s as any).k ?? 0) < ((s as any).kid ?? 0)) {
    qspCall(s, 'kid', 'kidlist');
    (s as any).k = ((s as any).k ?? 0) + (1);
    // TODO-QSP: jump 'loop'
  }
  // TODO-QSP: dynamic text: Child Selected: <<$kidname[ks]>>
  scene.text(`Child Selected: ${((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)]}`);
  if (((s as any).ks ?? 0) < (((s as any).kid ?? 0) - 1)) {
    // TODO-QSP: dynamic text: <a href="exec:ks += 1& gt 'kid', 'start' ">Select Next Child</a>
    scene.text('<a href="exec:ks += 1& gt \'kid\', \'start\' ">Select Next Child</a>');
    scene.actions([
      { label: 'Select Next Child', handler: (st: GameState) => {
    (st as any).ks = ((st as any).ks ?? 0) + (1);
  }, goto: ['kid', 'start'] },
    ]);
  }
  if (((s as any).ks ?? 0) > 0) {
    scene.text('<a href="exec:ks -= 1& gt \'kid\', \'start\' ">Select Previous Child</a>');
    scene.actions([
      { label: 'Select Previous Child', handler: (st: GameState) => {
    (st as any).ks = ((st as any).ks ?? 0) - (1);
  }, goto: ['kid', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterKidlist(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 1) {
    if (((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)] === ((s as any).year ?? 0)) {
      if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]) < 1  &&  (((s as any).day ?? 0) - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)]) < 7) {
        (s as any).kiddaycalc[String((s as any).k ?? 0)] = ((s as any).day ?? 0) - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)];
        if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
          // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> day old'
        } else {
          // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> days old'
        }
      } else {
        if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]) < 1) {
          (s as any).kiddaycalc[String((s as any).k ?? 0)] = (((s as any).day ?? 0) - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)]) / 7;
          if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> week old'
          } else {
            // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> weeks old'
          }
        } else {
          (s as any).kidmonthcalc[String((s as any).k ?? 0)] = (((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]);
          if (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> month old'
          } else {
            // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> months old'
          }
        }
      }
    } else {
      if (((s as any).month ?? 0) === 1  &&  ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] === 12) {
        if (31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0) < 7) {
          (s as any).kiddaycalc[String((s as any).k ?? 0)] = 31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0);
          if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> day old'
          } else {
            // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> days old'
          }
        } else {
          if (31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0) >= 7) {
            (s as any).kiddaycalc[String((s as any).k ?? 0)] = 31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0) / 7;
            if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
              // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> week old'
            } else {
              // TODO-QSP: $kidagetext[k] = '<<kiddaycalc[k]>> weeks old'
            }
          } else {
            if (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] > ((s as any).day ?? 0)) {
              // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> month old'
            }
          }
        }
      } else {
        if (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] - ((s as any).day ?? 0) <= 0) {
          (s as any).kidmonthcalc[String((s as any).k ?? 0)] = (12 - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).month ?? 0));
        } else {
          (s as any).kidmonthcalc[String((s as any).k ?? 0)] = (11 - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).month ?? 0));
        }
        if (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
          // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> month old'
        } else {
          // TODO-QSP: $kidagetext[k] = '<<kidmonthcalc[k]>> months old'
        }
      }
    }
  } else {
    if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 1) {
      // TODO-QSP: $kidagetext[k] = '<<kidage[k]>> year old'
    } else {
      // TODO-QSP: $kidagetext[k] = '<<kidage[k]>> years old'
    }
  }
  if (((s as any).polreb ?? 0)?.[String((s as any).k ?? 0)] === 'girl') {
    // TODO-QSP: $sdtext[k] = 'daughter'
  } else {
    if (((s as any).polreb ?? 0)?.[String((s as any).k ?? 0)] === 'boy') {
      // TODO-QSP: $sdtext[k] = 'son'
    }
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    // TODO-QSP: $kidPosPro[k] = 'her'
  } else {
    // TODO-QSP: $kidPosPro[k] = 'his'
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    // TODO-QSP: $kidPosProc[k] = 'Her'
  } else {
    // TODO-QSP: $kidPosProc[k] = 'His'
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    // TODO-QSP: $kidPosProPN[k] = 'She'
  } else {
    // TODO-QSP: $kidPosProPN[k] = 'He'
  }
  if (((s as any).ks ?? 0) === ((s as any).k ?? 0)) {
    // TODO-QSP: dynamic text: <font color= #06992D>Your <<$sdtext[k]>> <<$kidname[k]>> is <<$kidagetext[k]>>. ...
    scene.text(`<font color= #06992D>Your ${((s as any).sdtext ?? 0)?.[String((s as any).k ?? 0)]} ${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is ${((s as any).kidagetext ?? 0)?.[String((s as any).k ?? 0)]}. ${((s as any).kidPosProc ?? 0)?.[String((s as any).k ?? 0)]} date of birth is ${((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]}/${((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)]}/${((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)]}.</font>`);
  } else {
    // TODO-QSP: dynamic text: Your <<$sdtext[k]>> <<$kidname[k]>> is <<$kidagetext[k]>>. <<$kidPosProc[k]>> da...
    scene.text(`Your ${((s as any).sdtext ?? 0)?.[String((s as any).k ?? 0)]} ${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is ${((s as any).kidagetext ?? 0)?.[String((s as any).k ?? 0)]}. ${((s as any).kidPosProc ?? 0)?.[String((s as any).k ?? 0)]} date of birth is ${((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]}/${((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)]}/${((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)]}.`);
  }
  if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 1) {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18) {
      // TODO-QSP: dynamic text: <<$kidname[k]>></a> is laying on a blanket
      scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]}</a> is laying on a blanket`);
    } else {
      // TODO-QSP: dynamic text: <<$kidname[k]>> is asleep, lying in <<$kidPosPro[k]>> crib.
      scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is asleep, lying in ${((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)]} crib.`);
    }
  } else {
    if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 7) {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).rkidloc ?? 0) < 8) {
        // TODO-QSP: dynamic text: <<$kidname[k]>> is playing with toys.
        scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is playing with toys.`);
      } else {
        if (((s as any).hour ?? 0) < 9  ||  ((s as any).hour ?? 0) >= 21) {
          // TODO-QSP: dynamic text: <<$kidname[k]>> is asleep in <<$kidPosPro[k]>> bed.
          scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is asleep in ${((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)]} bed.`);
        } else {
          // TODO-QSP: dynamic text: <<$kidname[k]>> is watching TV.
          scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is watching TV.`);
        }
      }
    } else {
      if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 18) {
        if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
          // TODO-QSP: dynamic text: <<$kidname[k]>> is asleep in <<$kidPosPro[k]>> bed.
          scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is asleep in ${((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)]} bed.`);
        } else {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 9) {
            // TODO-QSP: dynamic text: <<$kidname[k]>> is getting ready for school.
            scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is getting ready for school.`);
          } else {
            if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 16) {
              // TODO-QSP: dynamic text: <<$kidname[k]>> is at school.
              scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is at school.`);
            } else {
              if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).homework ?? 0)?.[String((s as any).k ?? 0)] < ((s as any).daystart ?? 0)) {
                // TODO-QSP: dynamic text: <<$kidname[k]>> is working on homework.
                scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is working on homework.`);
              } else {
                // TODO-QSP: dynamic text: <<$kidname[k]>> is watching TV.
                scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)]} is watching TV.`);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).kid ?? 0) > 0  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] < 1) {
    if (((s as any).lactation ?? 0)?.['active'] > 0) {
      scene.actions([
        { label: 'Breast Feed <<$kidname[ks]>>', handler: (st: GameState) => {
    // TODO-QSP: dyneval($breastfeed)
  } },
      ]);
    }
    if (((s as any).babyloc ?? 0) === 'onto the blanket') {
      scene.actions([
        { label: 'Play with <<$kidname[ks]>> (0:20)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($playWithKid)
  } },
      ]);
    }
  }
  if (((s as any).kid ?? 0) > 0  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] < 7) {
    if (((s as any).totloc ?? 0) === 'playing with toys on the floor') {
      scene.actions([
        { label: 'Play with <<$kidname[ks]>>(0:30)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($totplay)
  } },
      ]);
    } else {
      if (((s as any).totloc ?? 0) === 'watching tv') {
        scene.actions([
          { label: 'Watch TV with <<$kidname[ks]>>(1:00)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($tottv)
  } },
        ]);
      }
    }
  }
  if (((s as any).kid ?? 0) > 0  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] < 18) {
    if (((s as any).kidloc ?? 0) === 'watching TV') {
      scene.actions([
        { label: 'Watch TV with <<$kidname[ks]>> (1:00)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($kidtv)
  } },
      ]);
    } else {
      if (((s as any).kidloc ?? 0) === 'working on homework') {
        scene.actions([
          { label: 'Help <<$kidname[ks]>> with homework.', handler: (st: GameState) => {
    // TODO-QSP: dyneval($homework)
  } },
        ]);
      }
    }
  }
  // TODO-QSP: "<hr>"
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'kidlist':
      enterKidlist(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const kid: LocationDef = {
  name: 'kid',
  title: '<<$kidname[ks]>> <<$pcs_lastname>>',
  region: 'other',
  description: ['You cannot breast feed right now. Your nipples are too sore.'],
  enter: enter,
};
