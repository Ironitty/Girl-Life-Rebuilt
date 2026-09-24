import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (2);
  (s as any).picrand = (Math.floor(Math.random() * 2) + 0);
  qspGoto(s, 'sexdvoe', 'var');
  // TODO-QSP: end
  scene.build();
}

function enterMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).SexTypeCheck ?? 0) === 0  &&  ((s as any).picrand ?? 0) > 1) {
    (s as any).SexTypeCheck = 1;
    if (((s as any).picrand ?? 0) === 12) {
      (s as any).DoubleBan = 1;
    }
    if (((s as any).picrand ?? 0) === 40) {
      (s as any).BlowBan = 1;
      (s as any).DoubleBan = 1;
    }
  }
  if ((!((s as any).BlowBan ?? 0))) {
    scene.actions([
      { label: 'Blow them', handler: (st: GameState) => {
    (st as any).sexdvoeloc = 0;
    qspGoto(st, 'sexdvoe', 'sex');
  } },
    ]);
  }
  if (((s as any).sameboy ?? 0) === 1) {
    if ((!((s as any).DoubleBan ?? 0))) {
      scene.actions([
        { label: 'Double penetration', handler: (st: GameState) => {
    (st as any).sexdvoeloc = (Math.floor(Math.random() * 2) + 1);
    qspGoto(st, 'sexdvoe', 'sex');
  } },
      ]);
    }
    if ((!((s as any).SpitVagBan ?? 0))) {
      scene.actions([
        { label: 'Spit roast (pussy)', handler: (st: GameState) => {
    (st as any).sexdvoeloc = (Math.floor(Math.random() * 2) + 3);
    qspGoto(st, 'sexdvoe', 'sex');
  } },
      ]);
    }
    if ((!((s as any).SpitAssBan ?? 0))) {
      scene.actions([
        { label: 'Spit roast (ass)', handler: (st: GameState) => {
    (st as any).sexdvoeloc = (Math.floor(Math.random() * 2) + 5);
    qspGoto(st, 'sexdvoe', 'sex');
  } },
      ]);
    }
  } else {
    if ((!((s as any).DoubleBan ?? 0))) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'DP (' + String((((s as any).npcdesc ?? 0)?.[0] ?? '') ?? '') + ' (' + String((((s as any).npcID ?? 0)?.[0] ?? '') ?? '') + ') in pussy)', handler: (st: GameState) => {
    (st as any).sexdvoeloc = 1;
    qspGoto(st, 'sexdvoe', 'sex');
  } },
        { label: '', labelFn: (s: GameState) => 'DP (' + String((((s as any).npcdesc ?? 0)?.[1] ?? '') ?? '') + ' (' + String((((s as any).npcID ?? 0)?.[1] ?? '') ?? '') + ') in pussy)', handler: (st: GameState) => {
    (st as any).sexdvoeloc = 2;
    qspGoto(st, 'sexdvoe', 'sex');
  } },
      ]);
    }
    if ((!((s as any).SpitVagBan ?? 0))) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Spit roast (' + String((((s as any).npcdesc ?? 0)?.[0] ?? '') ?? '') + ' (' + String((((s as any).npcID ?? 0)?.[0] ?? '') ?? '') + ') in pussy)', handler: (st: GameState) => {
    (st as any).sexdvoeloc = 3;
    qspGoto(st, 'sexdvoe', 'sex');
  } },
        { label: '', labelFn: (s: GameState) => 'Spit roast (' + String((((s as any).npcdesc ?? 0)?.[1] ?? '') ?? '') + ' (' + String((((s as any).npcID ?? 0)?.[1] ?? '') ?? '') + ') in pussy)', handler: (st: GameState) => {
    (st as any).sexdvoeloc = 4;
    qspGoto(st, 'sexdvoe', 'sex');
  } },
      ]);
    }
    if ((!((s as any).SpitAssBan ?? 0))) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Spit roast (' + String((((s as any).npcdesc ?? 0)?.[0] ?? '') ?? '') + ' (' + String((((s as any).npcID ?? 0)?.[0] ?? '') ?? '') + ') in ass)', handler: (st: GameState) => {
    (st as any).sexdvoeloc = 5;
    qspGoto(st, 'sexdvoe', 'sex');
  } },
        { label: '', labelFn: (s: GameState) => 'Spit roast (' + String((((s as any).npcdesc ?? 0)?.[1] ?? '') ?? '') + ' (' + String((((s as any).npcID ?? 0)?.[1] ?? '') ?? '') + ') in ass)', handler: (st: GameState) => {
    (st as any).sexdvoeloc = 6;
    qspGoto(st, 'sexdvoe', 'sex');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let them choose', handler: (st: GameState) => {
    if (((st as any).BlowBan ?? 0) === 1  &&  ((st as any).DoubleBan ?? 0) !== 1) {
      (st as any).sexdvoe = (Math.floor(Math.random() * 3) + 1);
    } else {
      if (((st as any).BlowBan ?? 0) === 1  &&  ((st as any).DoubleBan ?? 0) === 1) {
        (st as any).sexdvoe = (Math.floor(Math.random() * 2) + 2);
      } else {
        (st as any).sexdvoe = (Math.floor(Math.random() * 4) + 0);
      }
    }
    if ((!((st as any).sexdvoe ?? 0))) {
      (st as any).sexdvoeloc = 0;
      qspGoto(st, 'sexdvoe', 'sex');
    } else {
      if (((st as any).sexdvoe ?? 0) === 1) {
        (st as any).sexdvoeloc = (Math.floor(Math.random() * 2) + 3);
        qspGoto(st, 'sexdvoe', 'sex');
      } else {
        if (((st as any).sexdvoe ?? 0) === 2) {
          (st as any).sexdvoeloc = (Math.floor(Math.random() * 2) + 5);
          qspGoto(st, 'sexdvoe', 'sex');
        } else {
          (st as any).sexdvoeloc = (Math.floor(Math.random() * 2) + 1);
          qspGoto(st, 'sexdvoe', 'sex');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcID ?? 0)[0] === ((s as any).npcID ?? 0)[1]) {
    (s as any).sameboy = 1;
  }
  (s as any).sexstart = 1;
  (s as any).sexvar = (Math.floor(Math.random() * 4) + 3);
  scene.img('images/locations/shared/sex/sexdvoe/kiss.jpg');
  scene.text('After some kissing, it is time to move on to the next stage.');
  qspGoto(s, 'sexdvoe', 'menu');
  // TODO-QSP: end
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  if ((!((s as any).sexdvoeloc ?? 0))) {
    if (((s as any).sexvar ?? 0) > 0) {
      scene.img(`images/locations/shared/sex/sexdvoe/minet${((s as any).picrand ?? '')}.jpg`);
    } else {
      scene.img(`images/locations/shared/sex/sexdvoe/cum${((s as any).picrand ?? '')}.jpg`);
    }
    scene.text('You try to suck both of their cocks, but they really do not fit inside your mouth at the same time.');
    qspCall(s, 'arousal', 'bj', 10);
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).sexdvoeloc ?? 0) < 3) {
      scene.img(`images/locations/shared/sex/sexdvoe/dp${((s as any).picrand ?? '')}.jpg`);
      if (((s as any).sameboy ?? 0) === 1) {
        scene.text('Both of them fuck you, one of them your ass, the other your pussy. The double friction gives you great pleasure as they are pumping in and out of your body in tandem.');
        qspCall(s, 'arousal', 'vaginal', 10, (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
        qspCall(s, 'arousal', 'anal', (-10), (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
        qspCall(s, 'stat', '');
        (s as any).cumprecheck = 1;
        qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[0] ?? 0));
      } else {
        if (((s as any).sexdvoeloc ?? 0) === 1) {
          // TODO-QSP: dynamic text: Both of them fuck you, <<$boydesc[1]>> in your ass, <<$boydesc[0]>> in your puss...
          scene.text(`Both of them fuck you, ${(((s as any).boydesc ?? 0)?.[1] ?? '')} in your ass, ${(((s as any).boydesc ?? 0)?.[0] ?? '')} in your pussy. The double friction gives you great pleasure as they are pumping in and out of your body in tandem.`);
          qspCall(s, 'arousal', 'vaginal', 10, (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
          qspCall(s, 'arousal', 'anal', (-10), (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
          qspCall(s, 'stat', '');
          (s as any).cumprecheck = 1;
          if (((s as any).knownboy ?? 0)[0] === 1) {
            qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[0] ?? 0), 1);
          } else {
            qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[0] ?? 0));
          }
        } else {
          // TODO-QSP: dynamic text: Both of them fuck you, <<$npcdesc[0]>> in your ass, <<$npcdesc[1]>> in your puss...
          scene.text(`Both of them fuck you, ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} in your ass, ${(((s as any).npcdesc ?? 0)?.[1] ?? '')} in your pussy. The double friction gives you great pleasure as they are pumping in and out of your body in tandem.`);
          qspCall(s, 'arousal', 'vaginal', 10, (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
          qspCall(s, 'arousal', 'anal', (-10), (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
          qspCall(s, 'stat', '');
          (s as any).cumprecheck = 1;
          if (((s as any).knownboy ?? 0)[1] === 1) {
            qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[1] ?? 0), 1);
          } else {
            qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[1] ?? 0));
          }
        }
      }
    } else {
      if (((s as any).sexdvoeloc ?? 0) < 5) {
        scene.img(`images/locations/shared/sex/sexdvoe/vag${((s as any).picrand ?? '')}.jpg`);
        if (((s as any).sameboy ?? 0) === 1) {
          scene.text('While one guy is fucking your pussy, you diligently suck off the second.');
          qspCall(s, 'arousal', 'vaginal', 10, (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
          qspCall(s, 'arousal', 'bj', (-10), (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
          qspCall(s, 'stat', '');
          (s as any).cumprecheck = 1;
          qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[0] ?? 0));
        } else {
          if (((s as any).sexdvoeloc ?? 0) === 3) {
            // TODO-QSP: dynamic text: While <<$npcdesc[0]>> is fucking your pussy, you diligently suck off <<$npcdesc[...
            scene.text(`While ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} is fucking your pussy, you diligently suck off ${(((s as any).npcdesc ?? 0)?.[1] ?? '')}.`);
            qspCall(s, 'arousal', 'vaginal', 10, (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
            qspCall(s, 'arousal', 'bj', (-10), (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
            qspCall(s, 'stat', '');
            (s as any).cumprecheck = 1;
            if (((s as any).knownboy ?? 0)[0] === 1) {
              qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[0] ?? 0), 1);
            } else {
              qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[0] ?? 0));
            }
          } else {
            // TODO-QSP: dynamic text: While <<$npcdesc[1]>> is fucking your pussy, you diligently suck off <<$npcdesc[...
            scene.text(`While ${(((s as any).npcdesc ?? 0)?.[1] ?? '')} is fucking your pussy, you diligently suck off ${(((s as any).npcdesc ?? 0)?.[0] ?? '')}.`);
            qspCall(s, 'arousal', 'vaginal', 10, (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
            qspCall(s, 'arousal', 'bj', (-10), (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
            qspCall(s, 'stat', '');
            (s as any).cumprecheck = 1;
            if (((s as any).knownboy ?? 0)[1] === 1) {
              qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[1] ?? 0), 1);
            } else {
              qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[1] ?? 0));
            }
          }
        }
      } else {
        scene.img(`images/locations/shared/sex/sexdvoe/anal${((s as any).picrand ?? '')}.jpg`);
        if (((s as any).sameboy ?? 0) === 1) {
          scene.text('While one guy is fucking your ass, you diligently suck off the second.');
          qspCall(s, 'arousal', 'anal', 10, (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
          qspCall(s, 'arousal', 'bj', (-10), (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
        } else {
          if (((s as any).sexdvoeloc ?? 0) === 3) {
            // TODO-QSP: dynamic text: While <<$npcdesc[0]>> is fucking your ass, you diligently suck off <<$npcdesc[1]...
            scene.text(`While ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} is fucking your ass, you diligently suck off ${(((s as any).npcdesc ?? 0)?.[1] ?? '')}.`);
            qspCall(s, 'arousal', 'anal', 10, (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
            qspCall(s, 'arousal', 'bj', (-10), (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
          } else {
            // TODO-QSP: dynamic text: While <<$npcdesc[1]>> is fucking your ass, you diligently suck off <<$npcdesc[0]...
            scene.text(`While ${(((s as any).npcdesc ?? 0)?.[1] ?? '')} is fucking your ass, you diligently suck off ${(((s as any).npcdesc ?? 0)?.[0] ?? '')}.`);
            qspCall(s, 'arousal', 'anal', 10, (((s as any).npcID ?? 0)?.[1] ?? 0), 'sub');
            qspCall(s, 'arousal', 'bj', (-10), (((s as any).npcID ?? 0)?.[0] ?? 0), 'sub');
          }
        }
        qspCall(s, 'stat', '');
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) >= 80) {
    (s as any).orgasm_or = 'custom';
    (s as any).orgasm_txt = 'You have an orgasm.';
  }
  if (((s as any).sexvar ?? 0) > 0) {
    if (((s as any).sexvar ?? 0) === 1) {
      scene.text('<br>They indicate that they will cum soon.');
    }
    qspGoto(s, 'sexdvoe', 'menu');
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', 10);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if ((!((s as any).sexdvoeloc ?? 0))) {
    (s as any).temp = (Math.floor(Math.random() * 6) + 0);
    if ((!((s as any).temp ?? 0))) {
      qspCall(s, 'cum_call', 'hair', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
    } else {
      if (((s as any).temp ?? 0) < 3) {
        qspCall(s, 'cum_call', 'face', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
      } else {
        qspCall(s, 'cum_call', 'mouth', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
      }
    }
    (s as any).temp = (Math.floor(Math.random() * 6) + 0);
    if ((!((s as any).temp ?? 0))) {
      qspCall(s, 'cum_call', 'hair', (((s as any).npcID ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
    } else {
      if (((s as any).temp ?? 0) < 3) {
        qspCall(s, 'cum_call', 'face', (((s as any).npcID ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
      } else {
        qspCall(s, 'cum_call', 'mouth', (((s as any).npcID ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
      }
    }
    scene.text('With a groan, they both cum, mostly in your mouth, but some may have gotten on your face too.');
  } else {
    if (((s as any).sexdvoeloc ?? 0) === 1) {
      qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
      qspCall(s, 'cum_call', 'anus', (((s as any).npcdnpcIDesc ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
      if (((s as any).sameboy ?? 0) === 1) {
        scene.text('They groan, and you feel the copious amount of their seed they both pump inside your body at the same time.');
      } else {
        // TODO-QSP: dynamic text: They both groan, and you feel <<$npcdesc[0]>> pump your pussy full of his seed, ...
        scene.text(`They both groan, and you feel ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} pump your pussy full of his seed, while ${(((s as any).npcdesc ?? 0)?.[1] ?? '')}'s semen is released in your ass.`);
      }
    } else {
      if (((s as any).sexdvoeloc ?? 0) === 2) {
        qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
        qspCall(s, 'cum_call', 'anus', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
        if (((s as any).sameboy ?? 0) === 1) {
          scene.text('They groan, and you feel the copious amount of their seed they both pump inside your body at the same time.');
        } else {
          // TODO-QSP: dynamic text: They both groan, and you feel <<$npcdesc[1]>> pump your pussy full of his seed, ...
          scene.text(`They both groan, and you feel ${(((s as any).npcdesc ?? 0)?.[1] ?? '')} pump your pussy full of his seed, while ${(((s as any).npcdesc ?? 0)?.[0] ?? '')}'s semen is released in your ass.`);
        }
      } else {
        if (((s as any).sexdvoeloc ?? 0) === 3) {
          qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
          qspCall(s, 'cum_call', 'mouth', (((s as any).npcID ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
          if (((s as any).sameboy ?? 0) === 1) {
            // TODO-QSP: dynamic text: They groan, and you have to swallow one of the <<$npcdesc[0]>>''s seed while the...
            scene.text(`They groan, and you have to swallow one of the ${(((s as any).npcdesc ?? 0)?.[0] ?? '')}'s seed while the other pumps your pussy full of his own.`);
          } else {
            // TODO-QSP: dynamic text: They both groan, and you have to swallow <<$npcdesc[1]>>''s seed while <<$npcdes...
            scene.text(`They both groan, and you have to swallow ${(((s as any).npcdesc ?? 0)?.[1] ?? '')}'s seed while ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} pumps your pussy full of his own.`);
          }
        } else {
          if (((s as any).sexdvoeloc ?? 0) === 4) {
            qspCall(s, 'cum_call', '', (((s as any).npcID ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
            qspCall(s, 'cum_call', 'mouth', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
            if (((s as any).sameboy ?? 0) === 1) {
              // TODO-QSP: dynamic text: They groan, and you have to swallow one of the <<$npcdesc[0]>>''s seed while the...
              scene.text(`They groan, and you have to swallow one of the ${(((s as any).npcdesc ?? 0)?.[0] ?? '')}'s seed while the other pumps your pussy full of his own.`);
            } else {
              // TODO-QSP: dynamic text: They both groan, and you have to swallow <<$npcdesc[0]>>''s seed while <<$npcdes...
              scene.text(`They both groan, and you have to swallow ${(((s as any).npcdesc ?? 0)?.[0] ?? '')}'s seed while ${(((s as any).npcdesc ?? 0)?.[1] ?? '')} pumps your pussy full of his own.`);
            }
          } else {
            if (((s as any).sexdvoeloc ?? 0) === 5) {
              qspCall(s, 'cum_call', 'anus', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
              qspCall(s, 'cum_call', 'mouth', (((s as any).npcID ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
              if (((s as any).sameboy ?? 0) === 1) {
                scene.text('They groan at the same time, and you feel the taste of one of the guys as he cums inside your mouth, while the other one pumps your ass full of his own semen.');
              } else {
                // TODO-QSP: dynamic text: They groan at the same time, and you feel the taste of <<$npcdesc[1]>>''s seed a...
                scene.text(`They groan at the same time, and you feel the taste of ${(((s as any).npcdesc ?? 0)?.[1] ?? '')}'s seed as he cums inside your mouth, while ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} pumps your ass full of his semen.`);
              }
            } else {
              qspCall(s, 'cum_call', 'anus', (((s as any).npcID ?? 0)?.[1] ?? 0), ((((s as any).knownboy ?? 0)[1] === 1) ? (1) : (0)));
              qspCall(s, 'cum_call', 'mouth', (((s as any).npcID ?? 0)?.[0] ?? 0), ((((s as any).knownboy ?? 0)[0] === 1) ? (1) : (0)));
              if (((s as any).sameboy ?? 0) === 1) {
                scene.text('They groan at the same time, and you feel the taste of one of the guys as he cums inside your mouth, while the other one pumps your ass full of his own semen.');
              } else {
                // TODO-QSP: dynamic text: They groan at the same time, and you feel the taste of <<$npcdesc[0]>>''s seed a...
                scene.text(`They groan at the same time, and you feel the taste of ${(((s as any).npcdesc ?? 0)?.[0] ?? '')}'s seed as he cums inside your mouth, while ${(((s as any).npcdesc ?? 0)?.[1] ?? '')} pumps your ass full of his semen.`);
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).pcs_horny ?? 0) >= 80) {
    (s as any).orgasm_or = 'yes';
  }
  if (((s as any).picrand ?? 0) === 29) {
    scene.text('When it ends, boss says that you did well and today you are free and can go.');
  }
  if (((s as any).picrand ?? 0) === 39) {
    // TODO-QSP: dynamic text: Then <<$npcdesc[0]>> throws you out of the apartment.
    scene.text(`Then ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} throws you out of the apartment.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).picrand ?? 0) >= 24  &&  ((st as any).picrand ?? 0) <= 26) {
      qspGoto(st, 'office', 'work');
    }
    if (((st as any).picrand ?? 0) >= 30  &&  ((st as any).picrand ?? 0) <= 34) {
      qspGoto(st, 'office', 'work');
    }
    if (((st as any).picrand ?? 0) >= 35  &&  ((st as any).picrand ?? 0) <= 37) {
      qspGoto(st, 'nichApartment', '');
    }
    if (((st as any).picrand ?? 0) >= 40  &&  ((st as any).picrand ?? 0) <= 43) {
      qspGoto(st, 'dina', 'brodila');
    }
    if (((st as any).picrand ?? 0) === 38) {
      qspGoto(st, 'bed_events', 'vorend');
    }
    if (((st as any).picrand ?? 0) === 29  ||  ((st as any).picrand ?? 0) === 39) {
      qspGoto(st, 'city_industrial', '');
    }
    if (((st as any).kafesexrand ?? 0) === 1) {
      (st as any).kafesexrand = 0;
      qspGoto(st, 'city_kafe', 'workPred');
    }
    dynamicGoto(st, 'sexloc');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') > 0) {
    (s as any).knwn = ((s as any).locArgs?.[1] ?? 0);
    // TODO-QSP: :knownloop
    ((s as any).knownboy = (s as any).knownboy ?? {})[String((s as any).knwn ?? 0)] = 1;
    (s as any).knwn = ((s as any).knwn ?? 0) - (1);
    if (((s as any).knwn ?? 0) > 0) {
      // TODO-QSP: jump 'knownloop'
    }
  }
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'menu':
      enterMenu(s, scene);
      break;
    case 'var':
      enterVar(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sexdvoe: LocationDef = {
  name: 'sexdvoe',
  title: 'After some kissing, it is time to move on to the next stage.',
  region: 'other',
  enter: enter,
};
