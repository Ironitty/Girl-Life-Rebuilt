import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) > 0) {
    (s as any).knwn = qspUntranslated(s, "ARGS[1]", { location: "sexdvoe" });
    // TODO-QSP: :knownloop
    if (!(s as any).knownboy) (s as any).knownboy = {}; (s as any).knownboy[String((s as any).knwn ?? 0)] = 1;
    (s as any).knwn = ((s as any).knwn ?? 0) - (1);
    if (((s as any).knwn ?? 0) > 0) {
      // TODO-QSP: jump 'knownloop'
    }
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (2);
  (s as any).picrand = Math.floor(Math.random() * 2) + 0;
  scene.actions([{ label: 'Continue', goto: ['sexdvoe', 'var'] }]);
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
    (s as any).sexdvoeloc = 0;
  }, goto: ['sexdvoe', 'sex'] },
    ]);
  }
  if (((s as any).sameboy ?? 0) === 1) {
    if ((!((s as any).DoubleBan ?? 0))) {
      scene.actions([
        { label: 'Double penetration', handler: (st: GameState) => {
    (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 1;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
    if ((!((s as any).SpitVagBan ?? 0))) {
      scene.actions([
        { label: 'Spit roast (pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 3;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
    if ((!((s as any).SpitAssBan ?? 0))) {
      scene.actions([
        { label: 'Spit roast (ass)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 5;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
  } else {
    if ((!((s as any).DoubleBan ?? 0))) {
      scene.actions([
        { label: 'DP (<<$npcdesc[0]>> (<<$npcID[0]>>) in pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 1;
  }, goto: ['sexdvoe', 'sex'] },
        { label: 'DP (<<$npcdesc[1]>> (<<$npcID[1]>>) in pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 2;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
    if ((!((s as any).SpitVagBan ?? 0))) {
      scene.actions([
        { label: 'Spit roast (<<$npcdesc[0]>> (<<$npcID[0]>>) in pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 3;
  }, goto: ['sexdvoe', 'sex'] },
        { label: 'Spit roast (<<$npcdesc[1]>> (<<$npcID[1]>>) in pussy)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 4;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
    if ((!((s as any).SpitAssBan ?? 0))) {
      scene.actions([
        { label: 'Spit roast (<<$npcdesc[0]>> (<<$npcID[0]>>) in ass)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 5;
  }, goto: ['sexdvoe', 'sex'] },
        { label: 'Spit roast (<<$npcdesc[1]>> (<<$npcID[1]>>) in ass)', handler: (st: GameState) => {
    (s as any).sexdvoeloc = 6;
  }, goto: ['sexdvoe', 'sex'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let them choose', handler: (st: GameState) => {
    if (((s as any).BlowBan ?? 0) === 1  &&  ((s as any).DoubleBan ?? 0) !== 1) {
      (s as any).sexdvoe = Math.floor(Math.random() * 3) + 1;
    } else {
      if (((s as any).BlowBan ?? 0) === 1  &&  ((s as any).DoubleBan ?? 0) === 1) {
        (s as any).sexdvoe = Math.floor(Math.random() * 2) + 2;
      } else {
        (s as any).sexdvoe = Math.floor(Math.random() * 4) + 0;
      }
    }
    if ((!((s as any).sexdvoe ?? 0))) {
      (s as any).sexdvoeloc = 0;
      scene.actions([{ label: 'Continue', goto: ['sexdvoe', 'sex'] }]);
    } else {
      if (((s as any).sexdvoe ?? 0) === 1) {
        (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 3;
        scene.actions([{ label: 'Continue', goto: ['sexdvoe', 'sex'] }]);
      } else {
        if (((s as any).sexdvoe ?? 0) === 2) {
          (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 5;
          scene.actions([{ label: 'Continue', goto: ['sexdvoe', 'sex'] }]);
        } else {
          (s as any).sexdvoeloc = Math.floor(Math.random() * 2) + 1;
          scene.actions([{ label: 'Continue', goto: ['sexdvoe', 'sex'] }]);
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
  (s as any).sexvar = Math.floor(Math.random() * 4) + 3;
  scene.img('images/locations/shared/sex/sexdvoe/kiss.jpg');
  scene.text('After some kissing, it is time to move on to the next stage.');
  scene.actions([{ label: 'Continue', goto: ['sexdvoe', 'menu'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  if ((!((s as any).sexdvoeloc ?? 0))) {
    if (((s as any).sexvar ?? 0) > 0) {
      scene.img(`images/locations/shared/sex/sexdvoe/minet${((s as any).picrand ?? 0)}.jpg`);
    } else {
      scene.img(`images/locations/shared/sex/sexdvoe/cum${((s as any).picrand ?? 0)}.jpg`);
    }
    scene.text('You try to suck both of their cocks, but they really do not fit inside your mouth at the same time.');
    qspCall(s, 'arousal', 'bj', 10);
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).sexdvoeloc ?? 0) < 3) {
      scene.img(`images/locations/shared/sex/sexdvoe/dp${((s as any).picrand ?? 0)}.jpg`);
      if (((s as any).sameboy ?? 0) === 1) {
        scene.text('Both of them fuck you, one of them your ass, the other your pussy. The double friction gives you great pleasure as they are pumping in and out of your body in tandem.');
        // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[0], 'sub'
        // TODO-QSP: gs 'arousal', 'anal', -10, $npcID[1], 'sub'
        qspCall(s, 'stat', '');
        (s as any).cumprecheck = 1;
        // TODO-QSP: gs 'cum_call', '', $npcID[0]
      } else {
        if (((s as any).sexdvoeloc ?? 0) === 1) {
          // TODO-QSP: dynamic text: Both of them fuck you, <<$boydesc[1]>> in your ass, <<$boydesc[0]>> in your puss...
          scene.text(`Both of them fuck you, ${qspUntranslated(s, "boydesc[1]", { location: "sexdvoe" })} in your ass, ${qspUntranslated(s, "boydesc[0]", { location: "sexdvoe" })} in your pussy. The double friction gives you great pleasure as they are pumping in and out of your body in tandem.`);
          // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[0], 'sub'
          // TODO-QSP: gs 'arousal', 'anal', -10, $npcID[1], 'sub'
          qspCall(s, 'stat', '');
          (s as any).cumprecheck = 1;
          if (((s as any).knownboy ?? 0)[0] === 1) {
            // TODO-QSP: gs 'cum_call', '', $npcID[0], 1
          } else {
            // TODO-QSP: gs 'cum_call', '', $npcID[0]
          }
        } else {
          // TODO-QSP: dynamic text: Both of them fuck you, <<$npcdesc[0]>> in your ass, <<$npcdesc[1]>> in your puss...
          scene.text(`Both of them fuck you, ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })} in your ass, ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })} in your pussy. The double friction gives you great pleasure as they are pumping in and out of your body in tandem.`);
          // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[1], 'sub'
          // TODO-QSP: gs 'arousal', 'anal', -10, $npcID[0], 'sub'
          qspCall(s, 'stat', '');
          (s as any).cumprecheck = 1;
          if (((s as any).knownboy ?? 0)[1] === 1) {
            // TODO-QSP: gs 'cum_call', '', $npcID[1], 1
          } else {
            // TODO-QSP: gs 'cum_call', '', $npcID[1]
          }
        }
      }
    } else {
      if (((s as any).sexdvoeloc ?? 0) < 5) {
        scene.img(`images/locations/shared/sex/sexdvoe/vag${((s as any).picrand ?? 0)}.jpg`);
        if (((s as any).sameboy ?? 0) === 1) {
          scene.text('While one guy is fucking your pussy, you diligently suck off the second.');
          // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[1], 'sub'
          // TODO-QSP: gs 'arousal', 'bj', -10, $npcID[0], 'sub'
          qspCall(s, 'stat', '');
          (s as any).cumprecheck = 1;
          // TODO-QSP: gs 'cum_call', '', $npcID[0]
        } else {
          if (((s as any).sexdvoeloc ?? 0) === 3) {
            // TODO-QSP: dynamic text: While <<$npcdesc[0]>> is fucking your pussy, you diligently suck off <<$npcdesc[...
            scene.text(`While ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })} is fucking your pussy, you diligently suck off ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })}.`);
            // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[0], 'sub'
            // TODO-QSP: gs 'arousal', 'bj', -10, $npcID[1], 'sub'
            qspCall(s, 'stat', '');
            (s as any).cumprecheck = 1;
            if (((s as any).knownboy ?? 0)[0] === 1) {
              // TODO-QSP: gs 'cum_call', '', $npcID[0], 1
            } else {
              // TODO-QSP: gs 'cum_call', '', $npcID[0]
            }
          } else {
            // TODO-QSP: dynamic text: While <<$npcdesc[1]>> is fucking your pussy, you diligently suck off <<$npcdesc[...
            scene.text(`While ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })} is fucking your pussy, you diligently suck off ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })}.`);
            // TODO-QSP: gs 'arousal', 'vaginal', 10, $npcID[1], 'sub'
            // TODO-QSP: gs 'arousal', 'bj', -10, $npcID[0], 'sub'
            qspCall(s, 'stat', '');
            (s as any).cumprecheck = 1;
            if (((s as any).knownboy ?? 0)[1] === 1) {
              // TODO-QSP: gs 'cum_call', '', $npcID[1], 1
            } else {
              // TODO-QSP: gs 'cum_call', '', $npcID[1]
            }
          }
        }
      } else {
        scene.img(`images/locations/shared/sex/sexdvoe/anal${((s as any).picrand ?? 0)}.jpg`);
        if (((s as any).sameboy ?? 0) === 1) {
          scene.text('While one guy is fucking your ass, you diligently suck off the second.');
          // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[0], 'sub'
          // TODO-QSP: gs 'arousal', 'bj', -10, $npcID[1], 'sub'
        } else {
          if (((s as any).sexdvoeloc ?? 0) === 3) {
            // TODO-QSP: dynamic text: While <<$npcdesc[0]>> is fucking your ass, you diligently suck off <<$npcdesc[1]...
            scene.text(`While ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })} is fucking your ass, you diligently suck off ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })}.`);
            // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[0], 'sub'
            // TODO-QSP: gs 'arousal', 'bj', -10, $npcID[1], 'sub'
          } else {
            // TODO-QSP: dynamic text: While <<$npcdesc[1]>> is fucking your ass, you diligently suck off <<$npcdesc[0]...
            scene.text(`While ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })} is fucking your ass, you diligently suck off ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })}.`);
            // TODO-QSP: gs 'arousal', 'anal', 10, $npcID[1], 'sub'
            // TODO-QSP: gs 'arousal', 'bj', -10, $npcID[0], 'sub'
          }
        }
        qspCall(s, 'stat', '');
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) >= 80) {
  }
  if (((s as any).sexvar ?? 0) > 0) {
    if (((s as any).sexvar ?? 0) === 1) {
      scene.text('<br>They indicate that they will cum soon.');
    }
    scene.actions([{ label: 'Continue', goto: ['sexdvoe', 'menu'] }]);
  } else {
    qspCall(s, 'sexdvoe', 'end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', 10);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if ((!((s as any).sexdvoeloc ?? 0))) {
    (s as any).temp = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp ?? 0))) {
      // TODO-QSP: gs 'cum_call', 'hair', $npcID[0], iif(knownboy[0] = 1, 1, 0)
    } else {
      if (((s as any).temp ?? 0) < 3) {
        // TODO-QSP: gs 'cum_call', 'face', $npcID[0], iif(knownboy[0] = 1, 1, 0)
      } else {
        // TODO-QSP: gs 'cum_call', 'mouth', $npcID[0], iif(knownboy[0] = 1, 1, 0)
      }
    }
    (s as any).temp = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp ?? 0))) {
      // TODO-QSP: gs 'cum_call', 'hair', $npcID[1], iif(knownboy[1] = 1, 1, 0)
    } else {
      if (((s as any).temp ?? 0) < 3) {
        // TODO-QSP: gs 'cum_call', 'face', $npcID[1], iif(knownboy[1] = 1, 1, 0)
      } else {
        // TODO-QSP: gs 'cum_call', 'mouth', $npcID[1], iif(knownboy[1] = 1, 1, 0)
      }
    }
    scene.text('With a groan, they both cum, mostly in your mouth, but some may have gotten on your face too.');
  } else {
    if (((s as any).sexdvoeloc ?? 0) === 1) {
      // TODO-QSP: gs 'cum_call', '', $npcID[0], iif(knownboy[0] = 1, 1, 0)
      // TODO-QSP: gs 'cum_call', 'anus', $npcdnpcIDesc[1], iif(knownboy[1] = 1, 1, 0)
      if (((s as any).sameboy ?? 0) === 1) {
        scene.text('They groan, and you feel the copious amount of their seed they both pump inside your body at the same time.');
      } else {
        // TODO-QSP: dynamic text: They both groan, and you feel <<$npcdesc[0]>> pump your pussy full of his seed, ...
        scene.text(`They both groan, and you feel ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })} pump your pussy full of his seed, while ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })}'s semen is released in your ass.`);
      }
    } else {
      if (((s as any).sexdvoeloc ?? 0) === 2) {
        // TODO-QSP: gs 'cum_call', '', $npcID[1], iif(knownboy[1] = 1, 1, 0)
        // TODO-QSP: gs 'cum_call', 'anus', $npcID[0], iif(knownboy[0] = 1, 1, 0)
        if (((s as any).sameboy ?? 0) === 1) {
          scene.text('They groan, and you feel the copious amount of their seed they both pump inside your body at the same time.');
        } else {
          // TODO-QSP: dynamic text: They both groan, and you feel <<$npcdesc[1]>> pump your pussy full of his seed, ...
          scene.text(`They both groan, and you feel ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })} pump your pussy full of his seed, while ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })}'s semen is released in your ass.`);
        }
      } else {
        if (((s as any).sexdvoeloc ?? 0) === 3) {
          // TODO-QSP: gs 'cum_call', '', $npcID[0], iif(knownboy[0] = 1, 1, 0)
          // TODO-QSP: gs 'cum_call', 'mouth', $npcID[1], iif(knownboy[1] = 1, 1, 0)
          if (((s as any).sameboy ?? 0) === 1) {
            // TODO-QSP: dynamic text: They groan, and you have to swallow one of the <<$npcdesc[0]>>'s seed while the ...
            scene.text(`They groan, and you have to swallow one of the ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })}'s seed while the other pumps your pussy full of his own.`);
          } else {
            // TODO-QSP: dynamic text: They both groan, and you have to swallow <<$npcdesc[1]>>'s seed while <<$npcdesc...
            scene.text(`They both groan, and you have to swallow ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })}'s seed while ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })} pumps your pussy full of his own.`);
          }
        } else {
          if (((s as any).sexdvoeloc ?? 0) === 4) {
            // TODO-QSP: gs 'cum_call', '', $npcID[1], iif(knownboy[1] = 1, 1, 0)
            // TODO-QSP: gs 'cum_call', 'mouth', $npcID[0], iif(knownboy[0] = 1, 1, 0)
            if (((s as any).sameboy ?? 0) === 1) {
              // TODO-QSP: dynamic text: They groan, and you have to swallow one of the <<$npcdesc[0]>>'s seed while the ...
              scene.text(`They groan, and you have to swallow one of the ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })}'s seed while the other pumps your pussy full of his own.`);
            } else {
              // TODO-QSP: dynamic text: They both groan, and you have to swallow <<$npcdesc[0]>>'s seed while <<$npcdesc...
              scene.text(`They both groan, and you have to swallow ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })}'s seed while ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })} pumps your pussy full of his own.`);
            }
          } else {
            if (((s as any).sexdvoeloc ?? 0) === 5) {
              // TODO-QSP: gs 'cum_call', 'anus', $npcID[0], iif(knownboy[0] = 1, 1, 0)
              // TODO-QSP: gs 'cum_call', 'mouth', $npcID[1], iif(knownboy[1] = 1, 1, 0)
              if (((s as any).sameboy ?? 0) === 1) {
                scene.text('They groan at the same time, and you feel the taste of one of the guys as he cums inside your mouth, while the other one pumps your ass full of his own semen.');
              } else {
                // TODO-QSP: dynamic text: They groan at the same time, and you feel the taste of <<$npcdesc[1]>>'s seed as...
                scene.text(`They groan at the same time, and you feel the taste of ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })}'s seed as he cums inside your mouth, while ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })} pumps your ass full of his semen.`);
              }
            } else {
              // TODO-QSP: gs 'cum_call', 'anus', $npcID[1], iif(knownboy[1] = 1, 1, 0)
              // TODO-QSP: gs 'cum_call', 'mouth', $npcID[0], iif(knownboy[0] = 1, 1, 0)
              if (((s as any).sameboy ?? 0) === 1) {
                scene.text('They groan at the same time, and you feel the taste of one of the guys as he cums inside your mouth, while the other one pumps your ass full of his own semen.');
              } else {
                // TODO-QSP: dynamic text: They groan at the same time, and you feel the taste of <<$npcdesc[0]>>'s seed as...
                scene.text(`They groan at the same time, and you feel the taste of ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })}'s seed as he cums inside your mouth, while ${qspUntranslated(s, "npcdesc[1]", { location: "sexdvoe" })} pumps your ass full of his semen.`);
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).pcs_horny ?? 0) >= 80) {
  }
  if (((s as any).picrand ?? 0) === 29) {
    scene.text('When it ends, boss says that you did well and today you are free and can go.');
  }
  if (((s as any).picrand ?? 0) === 39) {
    // TODO-QSP: dynamic text: Then <<$npcdesc[0]>> throws you out of the apartment.
    scene.text(`Then ${qspUntranslated(s, "npcdesc[0]", { location: "sexdvoe" })} throws you out of the apartment.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).picrand ?? 0) >= 24  &&  ((s as any).picrand ?? 0) <= 26) {
      scene.actions([{ label: 'Continue', goto: ['office', 'work'] }]);
    }
    if (((s as any).picrand ?? 0) >= 30  &&  ((s as any).picrand ?? 0) <= 34) {
      scene.actions([{ label: 'Continue', goto: ['office', 'work'] }]);
    }
    if (((s as any).picrand ?? 0) >= 35  &&  ((s as any).picrand ?? 0) <= 37) {
      scene.actions([{ label: 'Continue', goto: ['nichApartment', ''] }]);
    }
    if (((s as any).picrand ?? 0) >= 40  &&  ((s as any).picrand ?? 0) <= 43) {
      scene.actions([{ label: 'Continue', goto: ['dina', 'brodila'] }]);
    }
    if (((s as any).picrand ?? 0) === 38) {
      scene.actions([{ label: 'Continue', goto: ['bed_events', 'vorend'] }]);
    }
    if (((s as any).picrand ?? 0) === 29  ||  ((s as any).picrand ?? 0) === 39) {
      scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
    }
    if (((s as any).kafesexrand ?? 0) === 1) {
      (s as any).kafesexrand = 0;
      scene.actions([{ label: 'Continue', goto: ['city_kafe', 'workPred'] }]);
    }
    dynamicGoto(st, 'sexloc');
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
