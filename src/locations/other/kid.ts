import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).pcs_mothername ?? 0) === '') {
    (s as any).pcs_mothername = window.prompt("What name do you wish your children to call you by? (Leave it blank for 'Mom')") ?? '';
    if (((s as any).pcs_mothername ?? 0) === '') {
      (s as any).pcs_mothername = 'Mom';
    }
  }
  if (((s as any).kid ?? 0) > 0) {
    (s as any).k = 0;
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).pain ?? 0)?.['nipples'] > 60) {
    scene.text('You cannot breast feed right now. Your nipples are too sore.');
  }
  while (true) {
    if (((s as any).k ?? 0) < ((s as any).kid ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKidlist(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).k = ((s as any).k ?? 0) + (1);
      break;
    }
    scene.text(`Child Selected: ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')}`);
    if (((s as any).ks ?? 0) < (((s as any).kid ?? 0) - 1)) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.ks +=1; return s; }); window.__gameStore.getState().doGoto(\u0027kid\u0027, \u0027start\u0027); return false;">Select Next Child</a>');
      scene.actions([
        { label: 'Select Next Child', handler: (st: GameState) => {
    (st as any).ks = ((st as any).ks ?? 0) + (1);
  }, goto: ['kid', 'start'] },
      ]);
    }
    if (((s as any).ks ?? 0) > 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.ks -=1; return s; }); window.__gameStore.getState().doGoto(\u0027kid\u0027, \u0027start\u0027); return false;">Select Previous Child</a>');
      scene.actions([
        { label: 'Select Previous Child', handler: (st: GameState) => {
    (st as any).ks = ((st as any).ks ?? 0) - (1);
  }, goto: ['kid', 'start'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).ks = undefined;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterKidlist(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 1) {
    if (((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)] === ((s as any).year ?? 0)) {
      if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]) < 1  &&  (((s as any).day ?? 0) - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)]) < 7) {
        ((s as any).kiddaycalc = (s as any).kiddaycalc ?? {})[String((s as any).k ?? 0)] = ((s as any).day ?? 0) - (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] ?? 0);
        if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' day old';
        } else {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' days old';
        }
      } else {
        if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)]) < 1) {
          ((s as any).kiddaycalc = (s as any).kiddaycalc ?? {})[String((s as any).k ?? 0)] = (((s as any).day ?? 0) - (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] ?? 0)) / 7;
          if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' week old';
          } else {
            ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' weeks old';
          }
        } else {
          ((s as any).kidmonthcalc = (s as any).kidmonthcalc ?? {})[String((s as any).k ?? 0)] = (((s as any).month ?? 0) - (((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] ?? 0));
          if (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' month old';
          } else {
            ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' months old';
          }
        }
      }
    } else {
      if (((s as any).month ?? 0) === 1  &&  ((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] === 12) {
        if (31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0) < 7) {
          ((s as any).kiddaycalc = (s as any).kiddaycalc ?? {})[String((s as any).k ?? 0)] = 31 - (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ((s as any).day ?? 0);
          if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
            ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' day old';
          } else {
            ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' days old';
          }
        } else {
          if (31 - ((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] + ((s as any).day ?? 0) >= 7) {
            ((s as any).kiddaycalc = (s as any).kiddaycalc ?? {})[String((s as any).k ?? 0)] = 31 - (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ((s as any).day ?? 0) / 7;
            if (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
              ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' week old';
            } else {
              ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' weeks old';
            }
          } else {
            if (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] > ((s as any).day ?? 0)) {
              ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' month old';
            }
          }
        }
      } else {
        if (((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] - ((s as any).day ?? 0) <= 0) {
          ((s as any).kidmonthcalc = (s as any).kidmonthcalc ?? {})[String((s as any).k ?? 0)] = (12 - (((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ((s as any).month ?? 0));
        } else {
          ((s as any).kidmonthcalc = (s as any).kidmonthcalc ?? {})[String((s as any).k ?? 0)] = (11 - (((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ((s as any).month ?? 0));
        }
        if (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] === 1) {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' month old';
        } else {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kidmonthcalc ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' months old';
        }
      }
    }
  } else {
    if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 1) {
      ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' year old';
    } else {
      ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).k ?? 0)] = '' + (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] ?? 0) + ' years old';
    }
  }
  if (((s as any).polreb ?? 0)?.[String((s as any).k ?? 0)] === 'girl') {
    ((s as any).sdtext = (s as any).sdtext ?? {})[String((s as any).k ?? 0)] = 'daughter';
  } else {
    if (((s as any).polreb ?? 0)?.[String((s as any).k ?? 0)] === 'boy') {
      ((s as any).sdtext = (s as any).sdtext ?? {})[String((s as any).k ?? 0)] = 'son';
    }
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    ((s as any).kidPosPro = (s as any).kidPosPro ?? {})[String((s as any).k ?? 0)] = 'her';
  } else {
    ((s as any).kidPosPro = (s as any).kidPosPro ?? {})[String((s as any).k ?? 0)] = 'his';
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    ((s as any).kidPosProc = (s as any).kidPosProc ?? {})[String((s as any).k ?? 0)] = 'Her';
  } else {
    ((s as any).kidPosProc = (s as any).kidPosProc ?? {})[String((s as any).k ?? 0)] = 'His';
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    ((s as any).kidPosProPN = (s as any).kidPosProPN ?? {})[String((s as any).k ?? 0)] = 'She';
  } else {
    ((s as any).kidPosProPN = (s as any).kidPosProPN ?? {})[String((s as any).k ?? 0)] = 'He';
  }
  if (((s as any).ks ?? 0) === ((s as any).k ?? 0)) {
    scene.text(`<font color= #06992D>Your ${(((s as any).sdtext ?? 0)?.[String((s as any).k ?? 0)] ?? '')} ${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is ${(((s as any).kidagetext ?? 0)?.[String((s as any).k ?? 0)] ?? '')}. ${(((s as any).kidPosProc ?? 0)?.[String((s as any).k ?? 0)] ?? '')} date of birth is ${(((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] ?? '')}/${(((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] ?? '')}/${(((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)] ?? '')}.</font>`);
  } else {
    scene.text(`Your ${(((s as any).sdtext ?? 0)?.[String((s as any).k ?? 0)] ?? '')} ${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is ${(((s as any).kidagetext ?? 0)?.[String((s as any).k ?? 0)] ?? '')}. ${(((s as any).kidPosProc ?? 0)?.[String((s as any).k ?? 0)] ?? '')} date of birth is ${(((s as any).monthkid ?? 0)?.[String((s as any).k ?? 0)] ?? '')}/${(((s as any).daykid ?? 0)?.[String((s as any).k ?? 0)] ?? '')}/${(((s as any).yearkid ?? 0)?.[String((s as any).k ?? 0)] ?? '')}.`);
  }
  if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 1) {
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18) {
      (s as any).babyloc = 'onto the blanket';
      scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')}</a> is laying on a blanket`);
    } else {
      (s as any).babyloc = 'into the crib';
      scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is asleep, lying in ${(((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)] ?? '')} crib.`);
    }
  } else {
    if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 7) {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).rkidloc ?? 0) < 8) {
        (s as any).totloc = 'playing with toys on the floor';
        scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is playing with toys.`);
      } else {
        if (((s as any).hour ?? 0) < 9  ||  ((s as any).hour ?? 0) >= 21) {
          scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is asleep in ${(((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)] ?? '')} bed.`);
        } else {
          (s as any).totloc = 'watching TV';
          scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is watching TV.`);
        }
      }
    } else {
      if (((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).k ?? 0)] < 18) {
        if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
          scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is asleep in ${(((s as any).kidPosPro ?? 0)?.[String((s as any).k ?? 0)] ?? '')} bed.`);
        } else {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 9) {
            scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is getting ready for school.`);
          } else {
            if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 16) {
              scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is at school.`);
            } else {
              if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).homework ?? 0)?.[String((s as any).k ?? 0)] < ((s as any).daystart ?? 0)) {
                (s as any).kidloc = 'working on homework';
                scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is working on homework.`);
              } else {
                (s as any).kidloc = 'watching TV';
                scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).k ?? 0)] ?? '')} is watching TV.`);
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
        { label: '', labelFn: (s: GameState) => 'Breast Feed ' + String((((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '') ?? ''), handler: (st: GameState) => {
    // TODO-QSP: dyneval($breastfeed)
  } },
      ]);
    }
    if (((s as any).babyloc ?? 0) === 'onto the blanket') {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Play with ' + String((((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '') ?? '') + ' (0:20)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($playWithKid)
  } },
      ]);
    }
  }
  if (((s as any).kid ?? 0) > 0  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] < 7) {
    if (((s as any).totloc ?? 0) === 'playing with toys on the floor') {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Play with ' + String((((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '') ?? '') + '(0:30)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($totplay)
  } },
      ]);
    } else {
      if (((s as any).totloc ?? 0) === 'watching tv') {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Watch TV with ' + String((((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '') ?? '') + '(1:00)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($tottv)
  } },
        ]);
      }
    }
  }
  if (((s as any).kid ?? 0) > 0  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).ks ?? 0)] < 18) {
    if (((s as any).kidloc ?? 0) === 'watching TV') {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Watch TV with ' + String((((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '') ?? '') + ' (1:00)', handler: (st: GameState) => {
    // TODO-QSP: dyneval($kidtv)
  } },
      ]);
    } else {
      if (((s as any).kidloc ?? 0) === 'working on homework') {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Help ' + String((((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '') ?? '') + ' with homework.', handler: (st: GameState) => {
    // TODO-QSP: dyneval($homework)
  } },
        ]);
      }
    }
  }
  scene.text('<hr>');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).breastfeed = qspUntranslated(s, "{", { location: "kid" });
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} ${((s as any).pcs_lastname ?? '')}</b></center>`);
  scene.img('images/pc/body/tits/breast_feed.jpg');
  scene.text(`You pick up ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} from ${(((s as any).kidPosPro ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} crib and cuddle for a moment before exposing your breast.`);
  if ((Math.floor(Math.random() * 10) + 1) === 10) {
    scene.text(`You lift ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} to your breast but your ${(((s as any).sdtext ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} doesn't latch on.`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).breastcounter = ((s as any).breastcounter ?? 0) + (1);
    (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 2, 15);
    if (((s as any).milkedvolume ?? 0) < 800) {
      scene.text(`You lift ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} to your breast and feed your baby ${(((s as any).polreb ?? 0)?.[String((s as any).ks ?? 0)] ?? '')}. Your baby doesn't seem to be satisfied with the amount of milk.`);
    } else {
      scene.text(`You lift ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} to your breast and feed your baby ${(((s as any).polreb ?? 0)?.[String((s as any).ks ?? 0)] ?? '')}. Your baby seems satisfied with the amount of your milk.`);
    }
  }
  scene.text(`You gently lay ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} back ${((s as any).babyloc ?? '')}.`);
  (s as any).playWithKid = qspUntranslated(s, "{", { location: "kid" });
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} ${((s as any).pcs_lastname ?? '')}</b></center>`);
  scene.img('images/pc/activities/baby_play.jpg');
  scene.text(`You get down on the floor with your ${(((s as any).sdtext ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} and begin to make face and noises to your little ${(((s as any).polreb ?? 0)?.[String((s as any).ks ?? 0)] ?? '')}.`);
  scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} giggles in delight and squirms on the floor in response to you.`);
  scene.text('After a while you get up and straighten your clothes before going on with your day.');
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).totplay = qspUntranslated(s, "{", { location: "kid" });
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} ${((s as any).pcs_lastname ?? '')}</b></center>`);
  scene.img('images/pc/activities/tot_play.jpg');
  scene.text(`"${((s as any).pcs_mothername ?? '')}! ${((s as any).pcs_mothername ?? '')}! ${((s as any).pcs_mothername ?? '')}! ${((s as any).pcs_mothername ?? '')}!" Yells ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')}, "Come play with me!"`);
  scene.text(`"Ok ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')}!" You reply.`);
  scene.text('You pull out a bin of blocks and spend a period of time playing and building with your child.');
  scene.text(`After a short time, ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} pushes over the small tower you have built, snickers and runs off`);
  scene.text('You get up, straighten up your clothes, laugh, and move on with your day');
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).tottv = qspUntranslated(s, "{", { location: "kid" });
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} ${((s as any).pcs_lastname ?? '')}</b></center>`);
  scene.img('images/shared/home/tv/kid_tv.jpg');
  scene.text(`You pull ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} up onto the couch with you and cuddle up to watch TV`);
  scene.text('You watch a cartoon featuring a Rabbit, a Duck, and a Pig that is quite silly');
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).kidtv = qspUntranslated(s, "{", { location: "kid" });
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} ${((s as any).pcs_lastname ?? '')}</b></center>`);
  scene.img('images/shared/home/tv/kid_tv2.jpg');
  scene.text(`You attempt to curl up on the couch with ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')}`);
  scene.text(`"${((s as any).pcs_mothername ?? '')}! I'm trying to watch TV!" ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} says.`);
  scene.text(`"Well I am gonna watch with you." You reply, followed by tickling ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} to open up a spot on the couch for you to sit.`);
  scene.text('You watch a kids TV show about two American teenagers that barely catches your interest.');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).homework = qspUntranslated(s, "{", { location: "kid" });
  if (((s as any).polkid ?? 0)?.[String((s as any).k ?? 0)] === 0) {
    ((s as any).kidPosPronn = (s as any).kidPosPronn ?? {})[String((s as any).ks ?? 0)] = 'her';
  } else {
    ((s as any).kidPosPronn = (s as any).kidPosPronn ?? {})[String((s as any).ks ?? 0)] = 'him';
  }
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} ${((s as any).pcs_lastname ?? '')}</b></center>`);
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/homework1.jpg');
  scene.text(`You see that ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} is working on a pile of homework. They give kids so much homework now days.`);
  scene.text(`"Does my little darling want ${((s as any).pcs_mothername ?? '')} to help you with some of that?" you ask`);
  scene.text(`${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} replies, "${((s as any).pcs_mothername ?? '')}?!… ${((s as any).pcs_mothername ?? '')} stop treating me like a baby… but yes, I would like some help."`);
  scene.text('<br>');
  scene.text(`You sit down at the table next to ${(((s as any).kidname ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} and begin to help ${(((s as any).kidPosPronn ?? 0)?.[String((s as any).ks ?? 0)] ?? '')} with the homework`);
  if (((s as any).class ?? 0)?.['school_grade_average'] > 50) {
    scene.text('The homework is completed quickly thanks to the attention you paid in school. An A should be an easy achievement.');
  } else {
    scene.text('You really wish you had paid more attention in school. The homework is not overly complex but is still not the easiest thing for you.');
  }
  ((s as any).homework = (s as any).homework ?? {})[String((s as any).ks ?? 0)] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 51) + 30));
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    if (((st as any).pcs_mothername ?? 0) === '') {
      (st as any).pcs_mothername = window.prompt("What name do you wish your children to call you by? (Leave it blank for 'Mom')") ?? '';
      if (((st as any).pcs_mothername ?? 0) === '') {
        (st as any).pcs_mothername = 'Mom';
      }
    }
    qspGoto(st, 'kid', 'start');
  } },
    { label: 'Done', handler: (st: GameState) => {
    qspGoto(st, 'kid', 'start');
  } },
    { label: 'Done', handler: (st: GameState) => {
    qspGoto(st, 'kid', 'start');
  } },
    { label: 'Done', handler: (st: GameState) => {
    qspGoto(st, 'kid', 'start');
  } },
    { label: 'Done', handler: (st: GameState) => {
    qspGoto(st, 'kid', 'start');
  } },
    { label: 'Done', handler: (st: GameState) => {
    qspGoto(st, 'kid', 'start');
  } },
  ]);
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'kidlist':
      enterKidlist(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kid: LocationDef = {
  name: 'kid',
  region: 'other',
  enter: enter,
};
