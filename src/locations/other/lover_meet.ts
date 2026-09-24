import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npcStat', '$ARGS[1]');
  ((s as any).npc_meetday = (s as any).npc_meetday ?? {})[String((s as any).npcID ?? 0)] = 0;
  ((s as any).npc_dates = (s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_dates[String((s as any).npcID ?? 0)] ?? 0) + (1);
  qspCall(s, 'lover_pref', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  (s as any).changeFind = '';
  (s as any).clotDay = 9;
  (s as any).bodyDay = 21;
  (s as any).pierDay = 21;
  (s as any).tattDay = 21;
  (s as any).lipsDay = 27;
  (s as any).titsDay = 36;
  (s as any).figureDay = 45;
  scene.img(`${(((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
      (s as any).randchan = (Math.floor(Math.random() * 3) + 0);
      if ((!((s as any).randchan ?? 0))) {
        (s as any).greet = 'says with love in ' + ((s as any).Xyr ?? 0) + ' eyes, "Hey ' + ((s as any).pcs_nickname ?? 0) + '."';
      } else {
        if (((s as any).randchan ?? 0) === 1) {
          (s as any).greet = 'says lovingly, "Hello love. I\'m glad so see you."';
        } else {
          if (((s as any).randchan ?? 0) === 2) {
            (s as any).greet = 'says quietly while looking into your eyes, "Hello love." ';
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
        (s as any).randchan = (Math.floor(Math.random() * 2) + 0);
        if ((!((s as any).randchan ?? 0))) {
          (s as any).greet = 'says with a faint smile, "Hey ' + ((s as any).pcs_nickname ?? 0) + '."';
        } else {
          if (((s as any).randchan ?? 0) === 1) {
            (s as any).greet = 'says with a smile, "Hi ' + ((s as any).pcs_nickname ?? 0) + '."';
          }
        }
      } else {
        (s as any).greet = 'says, "Hi ' + ((s as any).pcs_firstname ?? 0) + '."';
      }
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
        (s as any).randchan = (Math.floor(Math.random() * 3) + 0);
        if ((!((s as any).randchan ?? 0))) {
          (s as any).greet = 'says, "Hey love. I am so happy to see you."';
        } else {
          if (((s as any).randchan ?? 0) === 1) {
            (s as any).greet = 'says intimately, "Hello my angel."';
          } else {
            if (((s as any).randchan ?? 0) === 2) {
              (s as any).greet = 'says while admiring you, "Hello ' + ((s as any).pcs_nickname ?? 0) + ' beautiful."';
            }
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
          (s as any).randchan = (Math.floor(Math.random() * 2) + 0);
          if ((!((s as any).randchan ?? 0))) {
            (s as any).greet = 'says with a smile, "Hey ' + ((s as any).pcs_nickname ?? 0) + ', glad to see you."';
          } else {
            if (((s as any).randchan ?? 0) === 1) {
              (s as any).greet = 'says with a soft tone, "Hello beautiful."';
            }
          }
        } else {
          (s as any).greet = 'says, "Hello ' + ((s as any).pcs_nickname ?? 0) + '."';
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
        (s as any).randchan = (Math.floor(Math.random() * 3) + 0);
        if ((!((s as any).randchan ?? 0))) {
          (s as any).greet = 'says with a loving voice, "There\'s my sexy gal."';
        } else {
          if (((s as any).randchan ?? 0) === 1) {
            (s as any).greet = 'says with a toothful grin, "There is my goddess."';
          } else {
            if (((s as any).randchan ?? 0) === 2) {
              (s as any).greet = 'says with a rather loud enduring voice, "Hey babe!"';
            }
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
          (s as any).randchan = (Math.floor(Math.random() * 2) + 0);
          if ((!((s as any).randchan ?? 0))) {
            (s as any).greet = 'says with a grin, "Hey ' + ((s as any).pcs_nickname ?? 0) + '."';
          } else {
            if (((s as any).randchan ?? 0) === 1) {
              (s as any).greet = 'says with a chuckle, "Hey\'ya ' + ((s as any).pcs_nickname ?? 0) + '."';
            }
          }
        } else {
          (s as any).greet = 'says, "Hey ' + ((s as any).pcs_nickname ?? 0) + '."';
        }
      }
    }
  }
  qspCall(s, 'lover_love', '');
  (s as any).didPushAway = 0;
  if (((s as any).pcs_skin ?? 0) < 20) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
    (s as any).meetskin = 'looking at ' + ((s as any).Xyr ?? 0) + ' feet';
  } else {
    if (((s as any).pcs_skin ?? 0) < 40) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      (s as any).meetskin = 'giving you a quick glance';
    } else {
      if (((s as any).pcs_skin ?? 0) < 60) {
        (s as any).meetskin = 'looking at you';
      } else {
        if (((s as any).pcs_skin ?? 0) < 80) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
          (s as any).meetskin = 'smiling at you';
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          (s as any).meetskin = 'smiling at you';
        }
      }
    }
  }
  if ((!((s as any).pcs_lip ?? 0))) {
    (s as any).meetlip = 'thin lips';
  }
  if (((s as any).pcs_lip ?? 0) === 1) {
    (s as any).meetlip = 'soft lips';
  }
  if (((s as any).pcs_lip ?? 0) === 2) {
    (s as any).meetlip = 'plump lips';
  }
  if (((s as any).pcs_lip ?? 0) === 3) {
    (s as any).meetlip = 'large, plump lips';
  }
  if (((s as any).pcs_lip ?? 0) === 4) {
    (s as any).meetlip = 'thick and huge lips';
  }
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    (s as any).clom = 'dressed in a tracksuit.';
  } else {
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      (s as any).clom = 'dressed in jeans and a sweater.';
    } else {
      if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        (s as any).clom = 'dressed in a respectable and expensive jacket.';
      } else {
        if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          (s as any).clom = 'dressed in a beautiful and expensive dress.';
        }
      }
    }
  }
  // TODO-QSP: dynamic text: At the entrance <<$meetskin>> stands <<$npcdesc>>. <<$Xec>> comes over to you an...
  scene.text(`At the entrance ${((s as any).meetskin ?? '')} stands ${((s as any).npcdesc ?? '')}. ${((s as any).Xec ?? '')} comes over to you and ${((s as any).greet ?? '')}`);
  qspCall(s, 'lover_likes', 'hairPref');
  qspCall(s, 'lover_likes', 'makePrefTmp');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> looks like a timid and not very confident young <<$person>> <<$clom...
    scene.text(`${((s as any).npcdesc ?? '')} looks like a timid and not very confident young ${((s as any).person ?? '')} ${((s as any).clom ?? '')}`);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> looks like an average young <<$person>> <<$clom>>
      scene.text(`${((s as any).npcdesc ?? '')} looks like an average young ${((s as any).person ?? '')} ${((s as any).clom ?? '')}`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> looks like a cocky and brash young <<$person>> <<$clom>>
      scene.text(`${((s as any).npcdesc ?? '')} looks like a cocky and brash young ${((s as any).person ?? '')} ${((s as any).clom ?? '')}`);
    }
  }
  (s as any).likeCount = 0;
  (s as any).like1 = 99;
  (s as any).like2 = 99;
  (s as any).like3 = 99;
  if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] <= 30) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
    ]);
  } else {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 0);
    // TODO-QSP: dynamic text: <<$npcdesc>> gets close to you, and you can tell by <<$Xyr>> body movements <<$X...
    scene.text(`${((s as any).npcdesc ?? '')} gets close to you, and you can tell by ${((s as any).Xyr ?? '')} body movements ${((s as any).Xe ?? '')} wants to kiss you.`);
    scene.actions([
      { label: 'Kiss with tongue', handler: (st: GameState) => {
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: You take the initiative and when <<$Xe>> opens <<$Xyr>> mouth you thrust your to...
    scene.text(`You take the initiative and when ${((st as any).Xe ?? '')} opens ${((st as any).Xyr ?? '')} mouth you thrust your tongue into ${((st as any).Xyr ?? '')} mouth.`);
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    if (((st as any).Venera ?? 0) > 4) {
      if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 3) {
        qspCall(st, 'lover', 'remove_boyfriend', ((st as any).npcID ?? 0));
      } else {
        qspCall(st, 'lover', 'remove_girlfriend', ((st as any).npcID ?? 0));
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> takes a closer look at you and says, "What is wrong with your lips?...
      scene.text(`${((st as any).npcdesc ?? '')} takes a closer look at you and says, "What is wrong with your lips? They are very sore. Is that genital herpes? I better go, I do not want to get infected. I'm sorry, goodbye."`);
      qspCall(st, 'mood', 'lower', 'medium');
      qspGoto(st, 'lover_meet', 'go_home');
    } else {
      if (((st as any).Venera ?? 0) < 4  &&  ((st as any).cumloc ?? 0)[11] === 0  &&  (((st as any).cumloc ?? 0)[6] === 0  &&  ((st as any).cumloc ?? 0)[7] === 0)) {
        if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: Normally this would have made <<$Xem>> feel uncomfortable, but as you pull away ...
          scene.text(`Normally this would have made ${((st as any).Xem ?? '')} feel uncomfortable, but as you pull away ${((st as any).Xe ?? '')} smiles and sighs contently.`);
        } else {
          if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
            qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
            // TODO-QSP: dynamic text: <<$Xec>> goes with it a blink and in moments your tongues are intertwined.
            scene.text(`${((st as any).Xec ?? '')} goes with it a blink and in moments your tongues are intertwined.`);
          } else {
            // TODO-QSP: dynamic text: It seems as <<$npcdesc>> had the same idea, as <<$Xe>> pushes <<$Xyr>> tongue in...
            scene.text(`It seems as ${((st as any).npcdesc ?? '')} had the same idea, as ${((st as any).Xe ?? '')} pushes ${((st as any).Xyr ?? '')} tongue into your mouth as much as you push into ${((st as any).Xyr ?? '')}.`);
            qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
          }
        }
      } else {
        if ((((st as any).cumloc ?? 0)[11] === 1  ||  ((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)  &&  ((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
          if (((st as any).cumloc ?? 0)[11] === 1) {
            if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
              qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
              (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
              scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but underneath ${((st as any).Xyr ?? '')} shy demener you know that it only turns ${((st as any).Xem ?? '')} on.`);
            } else {
              if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
                qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
                (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
                scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but you know that it only turns ${((st as any).Xem ?? '')} on more.`);
              } else {
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
                scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but by the bulge in ${((st as any).Xyr ?? '')} pants you know it only turns ${((st as any).Xem ?? '')} on.`);
              }
            }
          } else {
            if ((((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)) {
              if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
                qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
                (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
                scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but underneath ${((st as any).Xyr ?? '')} shy demener you know that it only turns ${((st as any).Xem ?? '')} on.`);
              } else {
                if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
                  qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
                  (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                  // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
                  scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but you know that it only turns ${((st as any).Xem ?? '')} on more.`);
                } else {
                  qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
                  (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                  // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
                  scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but by the bulge in ${((st as any).Xyr ?? '')} pants you know it only turns ${((st as any).Xem ?? '')} on.`);
                }
              }
            }
          }
        } else {
          if ((((st as any).cumloc ?? 0)[11] === 1  ||  ((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)  &&  (((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] !== 1  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0)) {
            if (((st as any).cumloc ?? 0)[11] === 1) {
              if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 3) {
                qspCall(st, 'lover', 'remove_boyfriend', ((st as any).npcID ?? 0));
              } else {
                qspCall(st, 'lover', 'remove_girlfriend', ((st as any).npcID ?? 0));
              }
              // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "H-Hey- <<$pcs_firstname>>! What the…?!...
              scene.text(`${((st as any).Xec ?? '')} notices the sperm on your face, "H-Hey- ${((st as any).pcs_firstname ?? '')}! What the…?! You dirty whore!", ${((st as any).Xe ?? '')} then pushes you out of ${((st as any).Xyr ?? '')} face. "We are through, I don't want to see your face again!`);
              qspCall(st, 'mood', 'lower', 'medium');
              qspGoto(st, 'lover_meet', 'go_home');
            } else {
              if ((((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)) {
                qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
                // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "<<$pcs_firstname>>! What the…?! You dir...
                scene.text(`${((st as any).Xec ?? '')} notices the sperm on your ass, "${((st as any).pcs_firstname ?? '')}! What the…?! You dirty whore!", ${((st as any).Xe ?? '')} then pushes you away. "We are through, I don't want to see your face again!`);
                qspCall(st, 'mood', 'lower', 'medium');
                qspGoto(st, 'lover_meet', 'go_home');
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
    ]);
  } },
      { label: 'Kiss with lips', handler: (st: GameState) => {
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: You press your <<$meetlip>> softly against <<$Xyr>>, and for a split second time...
    scene.text(`You press your ${((st as any).meetlip ?? '')} softly against ${((st as any).Xyr ?? '')}, and for a split second time seems to stop.`);
    qspCall(st, 'mood', 'raise', 'tiny');
    if (((st as any).cumloc ?? 0)[11] === 0  &&  (((st as any).cumloc ?? 0)[6] === 0  &&  ((st as any).cumloc ?? 0)[7] === 0)) {
      if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$Xec>> wraps arms around you, you both stay like this for at least a couple of...
        scene.text(`${((st as any).Xec ?? '')} wraps arms around you, you both stay like this for at least a couple of seconds and as you pull away ${((st as any).Xe ?? '')} looks into your eyes and smiles.`);
        qspCall(st, 'arousal', 'kiss', 5);
        qspCall(st, 'stat', '');
      } else {
        if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
          qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: <<$Xec>> kisses you back with such skill it turns you on.
          scene.text(`${((st as any).Xec ?? '')} kisses you back with such skill it turns you on.`);
          qspCall(st, 'arousal', 'kiss', 5);
          qspCall(st, 'stat', '');
        } else {
          qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: <<$Xec>> kisses you back with such passion you feel a tingle within you.
          scene.text(`${((st as any).Xec ?? '')} kisses you back with such passion you feel a tingle within you.`);
          qspCall(st, 'arousal', 'kiss', 5);
          qspCall(st, 'stat', '');
        }
      }
    } else {
      if ((((st as any).cumloc ?? 0)[11] === 1  ||  ((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1  ||  ((st as any).cumloc ?? 0)[12] === 1)  &&  ((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        if (((st as any).cumloc ?? 0)[11] === 1) {
          if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
            qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
            (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
            scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but underneath ${((st as any).Xyr ?? '')} shy demener you know that it only turns ${((st as any).Xem ?? '')} on.`);
          } else {
            if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
              qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
              (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
              scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but you know that it only turns ${((st as any).Xem ?? '')} on more.`);
            } else {
              qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
              (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
              scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but by the bulge in ${((st as any).Xyr ?? '')} pants you know it only turns ${((st as any).Xem ?? '')} on.`);
            }
          }
        } else {
          if ((((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)) {
            if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
              qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
              (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
              scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but underneath ${((st as any).Xyr ?? '')} shy demener you know that it only turns ${((st as any).Xem ?? '')} on.`);
            } else {
              if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
                qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
                (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
                scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but you know that it only turns ${((st as any).Xem ?? '')} on more.`);
              } else {
                qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
                (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
                scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but by the bulge in ${((st as any).Xyr ?? '')} pants you know it only turns ${((st as any).Xem ?? '')} on.`);
              }
            }
          } else {
            if (((st as any).cumloc ?? 0)[12] === 1) {
              if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
                qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
                (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but underneath <<$Xyr>> shy demene...
                scene.text(`${((st as any).Xec ?? '')} can smell the scent of sperm on you, but underneath ${((st as any).Xyr ?? '')} shy demener you know that it only turns ${((st as any).Xem ?? '')} on.`);
              } else {
                if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
                  qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
                  (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                  // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but you know that it only turns <<...
                  scene.text(`${((st as any).Xec ?? '')} can smell the scent of sperm on you, but you know that it only turns ${((st as any).Xem ?? '')} on more.`);
                } else {
                  qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
                  (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                  // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but you know by the bulge in <<$Xy...
                  scene.text(`${((st as any).Xec ?? '')} can smell the scent of sperm on you, but you know by the bulge in ${((st as any).Xyr ?? '')} pants it only turns ${((st as any).Xem ?? '')} on more.`);
                }
              }
            }
          }
        }
      } else {
        if ((((st as any).cumloc ?? 0)[11] === 1  ||  ((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)  &&  ((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
          if (((st as any).cumloc ?? 0)[11] === 1) {
            if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 3) {
              qspCall(st, 'lover', 'remove_boyfriend', ((st as any).npcID ?? 0));
            } else {
              qspCall(st, 'lover', 'remove_girlfriend', ((st as any).npcID ?? 0));
            }
            // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "<<$pcs_firstname>>! What the…?! You di...
            scene.text(`${((st as any).Xec ?? '')} notices the sperm on your face, "${((st as any).pcs_firstname ?? '')}! What the…?! You dirty whore!", ${((st as any).Xe ?? '')} then pushes you out of ${((st as any).Xyr ?? '')} face. "We are through, I don't want to see your face again!`);
            qspCall(st, 'mood', 'lower', 'medium');
            qspGoto(st, 'lover_meet', 'go_home');
          } else {
            if ((((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)) {
              if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 3) {
                qspCall(st, 'lover', 'remove_boyfriend', ((st as any).npcID ?? 0));
              } else {
                qspCall(st, 'lover', 'remove_girlfriend', ((st as any).npcID ?? 0));
              }
              // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "<<$pcs_firstname>>! What the…?! You dir...
              scene.text(`${((st as any).Xec ?? '')} notices the sperm on your ass, "${((st as any).pcs_firstname ?? '')}! What the…?! You dirty whore!", ${((st as any).Xe ?? '')} then pushes you away. "We are through, I don't want to see your face again!`);
              qspCall(st, 'mood', 'lower', 'medium');
              qspGoto(st, 'lover_meet', 'go_home');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
    ]);
  } },
      { label: 'Hint for a kiss on the cheek', handler: (st: GameState) => {
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: You make a cute pouty face and turn your cheek toward <<$npcdesc>>. <<$Xec>> und...
    scene.text(`You make a cute pouty face and turn your cheek toward ${((st as any).npcdesc ?? '')}. ${((st as any).Xec ?? '')} understands and though ${((st as any).Xe ?? '')} wanted to kiss you, ${((st as any).Xe ?? '')} settles with giving you a peck on the cheek`);
    qspCall(st, 'mood', 'raise', 'tiny');
    if (((st as any).cumloc ?? 0)[11] === 0  &&  (((st as any).cumloc ?? 0)[6] === 0  &&  ((st as any).cumloc ?? 0)[7] === 0)) {
      if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$Xec>> gives you a soft kiss on the cheek, and you can tell <<$Xe>> finds this...
        scene.text(`${((st as any).Xec ?? '')} gives you a soft kiss on the cheek, and you can tell ${((st as any).Xe ?? '')} finds this act very cute.`);
        qspCall(st, 'arousal', 'kiss', 5);
        qspCall(st, 'stat', '');
      } else {
        if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
          qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
          // TODO-QSP: dynamic text: <<$Xec>> kisses you on the cheek and before <<$Xe>> pulls away you feel a quick ...
          scene.text(`${((st as any).Xec ?? '')} kisses you on the cheek and before ${((st as any).Xe ?? '')} pulls away you feel a quick kiss on the forehead.`);
          qspCall(st, 'arousal', 'kiss', 5);
          qspCall(st, 'stat', '');
        } else {
          qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0);
          // TODO-QSP: dynamic text: Though you can tell <<$Xe>> is a bit disappointed, <<$Xe>> gives you a kiss on t...
          scene.text(`Though you can tell ${((st as any).Xe ?? '')} is a bit disappointed, ${((st as any).Xe ?? '')} gives you a kiss on the cheek. As ${((st as any).Xe ?? '')} pulls away ${((st as any).Xe ?? '')} gives your ass a quick squeeze.`);
          qspCall(st, 'arousal', 'kiss', 5);
          qspCall(st, 'stat', '');
        }
      }
    } else {
      if ((((st as any).cumloc ?? 0)[11] === 1  ||  ((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1  ||  ((st as any).cumloc ?? 0)[12] === 1)  &&  ((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        if (((st as any).cumloc ?? 0)[11] === 1) {
          if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
            qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
            (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
            scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but underneath ${((st as any).Xyr ?? '')} shy demener you know that it only turns ${((st as any).Xem ?? '')} on.`);
          } else {
            if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
              qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
              (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
              scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but you know that it only turns ${((st as any).Xem ?? '')} on more.`);
            } else {
              qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
              (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
              scene.text(`${((st as any).Xec ?? '')} can see sperm on your face, but by the bulge in ${((st as any).Xyr ?? '')} pants you know it only turns ${((st as any).Xem ?? '')} on.`);
            }
          }
        } else {
          if ((((st as any).cumloc ?? 0)[6] === 1  ||  ((st as any).cumloc ?? 0)[7] === 1)) {
            if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
              qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
              (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
              scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but underneath ${((st as any).Xyr ?? '')} shy demener you know that it only turns ${((st as any).Xem ?? '')} on.`);
            } else {
              if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
                qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
                (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
                scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but you know that it only turns ${((st as any).Xem ?? '')} on more.`);
              } else {
                qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
                (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
                scene.text(`${((st as any).Xec ?? '')} can see sperm on your ass, but by the bulge in ${((st as any).Xyr ?? '')} pants you know it only turns ${((st as any).Xem ?? '')} on.`);
              }
            }
          }
        }
      } else {
        if (((st as any).cumloc ?? 0)[12]+((st as any).cumloc ?? 0)[11]+((st as any).cumloc ?? 0)[6]+((st as any).cumloc ?? 0)[7] > 0  &&  ((st as any).npc_pervert ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
          if (((st as any).cumloc ?? 0)[11] > 0) {
            if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 3) {
              qspCall(st, 'lover', 'remove_boyfriend', ((st as any).npcID ?? 0));
            } else {
              qspCall(st, 'lover', 'remove_girlfriend', ((st as any).npcID ?? 0));
            }
            // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "H-Hey- <<$pcs_firstname>>! What the…?!...
            scene.text(`${((st as any).Xec ?? '')} notices the sperm on your face, "H-Hey- ${((st as any).pcs_firstname ?? '')}! What the…?! You dirty whore!", ${((st as any).Xe ?? '')} then pushes you out of ${((st as any).Xyr ?? '')} face. "We are through, I don't want to see your face again!`);
            qspCall(st, 'mood', 'lower', 'medium');
            qspGoto(st, 'lover_meet', 'go_home');
          } else {
            if (((st as any).cumloc ?? 0)[6]+((st as any).cumloc ?? 0)[7] > 0) {
              if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 3) {
                qspCall(st, 'lover', 'remove_boyfriend', ((st as any).npcID ?? 0));
              } else {
                qspCall(st, 'lover', 'remove_girlfriend', ((st as any).npcID ?? 0));
              }
              // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "H-Hey- <<$pcs_firstname>>! What the…?! ...
              scene.text(`${((st as any).Xec ?? '')} notices the sperm on your ass, "H-Hey- ${((st as any).pcs_firstname ?? '')}! What the…?! You dirty whore!", ${((st as any).Xe ?? '')} then pushes you away. "We are through, I don't want to see your face again!`);
              qspCall(st, 'mood', 'lower', 'medium');
              qspGoto(st, 'lover_meet', 'go_home');
            } else {
              if (((st as any).cumloc ?? 0)[12] > 0) {
                if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 3) {
                  qspCall(st, 'lover', 'remove_boyfriend', ((st as any).npcID ?? 0));
                } else {
                  qspCall(st, 'lover', 'remove_girlfriend', ((st as any).npcID ?? 0));
                }
                // TODO-QSP: dynamic text: <<$Xec>> realizes your mouth smells like sperm, "H-Hey- <<$pcs_firstname>>! What...
                scene.text(`${((st as any).Xec ?? '')} realizes your mouth smells like sperm, "H-Hey- ${((st as any).pcs_firstname ?? '')}! What the…?! You dirty whore!", ${((st as any).Xe ?? '')} then pushes you away. "We are through, I don't want to see your face again!"`);
                qspCall(st, 'mood', 'lower', 'medium');
                qspGoto(st, 'lover_meet', 'go_home');
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
    ]);
  } },
      { label: '', labelFn: (s: GameState) => 'Push ' + String(((s as any).Xyr ?? '') ?? '') + ' face away', handler: (st: GameState) => {
    (st as any).didPushAway = 1;
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: Maybe you had a bad day, maybe you don''t want a kiss, you rudely push <<$Xyr>> ...
    scene.text(`Maybe you had a bad day, maybe you don't want a kiss, you rudely push ${((st as any).Xyr ?? '')} face away, and by the looks of it, hurting ${((st as any).Xyr ?? '')} feelings in the process.`);
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * ((-3) - (-4) + 1)) + ((-4))));
      // TODO-QSP: dynamic text: <<$Xec>> stands there slightly embarrassed, and you can tell this hurt your rela...
      scene.text(`${((st as any).Xec ?? '')} stands there slightly embarrassed, and you can tell this hurt your relationship a good amount.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * ((-2) - (-3) + 1)) + ((-3))));
        // TODO-QSP: dynamic text: <<$Xec>> looks at you slightly concerned, but backs off and gives you your space...
        scene.text(`${((st as any).Xec ?? '')} looks at you slightly concerned, but backs off and gives you your space.`);
      } else {
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-5));
        // TODO-QSP: dynamic text: <<$Xec>> begins to get angry, <<$Xe>> takes a deep breath and gives you space.
        scene.text(`${((st as any).Xec ?? '')} begins to get angry, ${((st as any).Xe ?? '')} takes a deep breath and gives you space.`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLikes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] >= ((s as any).clotDay ?? 0)) {
    qspCall(s, 'lover_likes', 'clothesPref');
  }
  if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] >= ((s as any).bodyDay ?? 0)) {
    qspCall(s, 'lover_likes', 'bodyPrefTmp');
  }
  qspGoto(s, 'lover_meet', 'actions');
  // TODO-QSP: end
  scene.build();
}

function enterActions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Can I ask you how you think I look?', handler: (st: GameState) => {
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: <<$npcdesc>> says "If you insist" and tells you exactly how <<$Xe>> thinks you l...
    scene.text(`${((st as any).npcdesc ?? '')} says "If you insist" and tells you exactly how ${((st as any).Xe ?? '')} thinks you look based on what ${((st as any).Xe ?? '')} likes:`);
    qspCall(st, 'lover_likes', 'allPref');
    scene.actions([
      { label: 'Okay, lets talk about something else', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'actions'
  } },
    ]);
  } },
    { label: 'What do you want to do today?', handler: (st: GameState) => {
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: You tell <<$Xem>> you would rather have <<$Xem>> decide what we do today.
    scene.text(`You tell ${((st as any).Xem ?? '')} you would rather have ${((st as any).Xem ?? '')} decide what we do today.`);
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0);
      // TODO-QSP: dynamic text: Not used to being given the opportunity to choose, <<$Xe>> thinks what to do…
      scene.text(`Not used to being given the opportunity to choose, ${((st as any).Xe ?? '')} thinks what to do…`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0);
        // TODO-QSP: dynamic text: <<$Xec>> thinks about what to do today.
        scene.text(`${((st as any).Xec ?? '')} thinks about what to do today.`);
      } else {
        qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
        // TODO-QSP: dynamic text: You can tell <<$Xe>> is happy you gave <<$Xem>> the ability to choose what to do...
        scene.text(`You can tell ${((st as any).Xe ?? '')} is happy you gave ${((st as any).Xem ?? '')} the ability to choose what to do today.`);
      }
    }
    if (((st as any).npc_compliance ?? 0)?.[String((st as any).npcID ?? 0)] >= -2) {
      (st as any).loverResist = 'easy';
    } else {
      if (((st as any).npc_compliance ?? 0)?.[String((st as any).npcID ?? 0)] >= -4) {
        (st as any).loverResist = 'medium';
      } else {
        (st as any).loverResist = 'hard';
      }
    }
    qspCall(st, 'willpower', 'misc', 'self', ((st as any).loverResist ?? 0));
    ((st as any).lover_meet = (st as any).lover_meet ?? {})['ChangeActions'] = qspUntranslated(s, "{", { location: "lover_meet" });
    // TODO-QSP: !$ARGS[0] = name of thing being changed
    // TODO-QSP: !$ARGS[1] = Parameter for lover_change procedure
    ((st as any).lover_meet = (st as any).lover_meet ?? {})['ChangeName'] = ((st as any).locArgs?.[0] ?? 0);
    ((st as any).lover_meet = (st as any).lover_meet ?? {})['ChangeParamName'] = ((st as any).locArgs?.[1] ?? 0);
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'I like my ' + String(((st as any).lover_meet ?? 0)?.['ChangeName'] ?? '' ?? '') + ' just the way it is', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'I like my ' + String(((st as any).lover_meet ?? 0)?.['ChangeName'] ?? '' ?? '') + ' just the way it is', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * ((-1) - (-2) + 1)) + ((-2))));
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: <<$npcdesc>> realizes you will not give in this situation, and walks away mumbli...
    scene.text(`${((st as any).npcdesc ?? '')} realizes you will not give in this situation, and walks away mumbling to ${((st as any).Xemself ?? '')}.`);
    qspGoto(st, 'lover_meet', 'go_home');
  } },
      ]);
    }
    if (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      (st as any).randchan = (Math.floor(Math.random() * 3) + 0);
      if ((!((st as any).randchan ?? 0))) {
        (st as any).temp_pref_check = 1;
        if (qspFunc(s, 'lover_pref', 'check_piercings') === 0) {
          (st as any).temp_pref_check = 0;
        }
        if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0) {
          (st as any).temp_pref_check = 0;
        }
        if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
          (st as any).temp_pref_check = 0;
        }
        if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
          (st as any).temp_pref_check = 0;
        }
        if (((st as any).temp_pref_check ?? 0)) {
          (st as any).randchan = (Math.floor(Math.random() * 2) + 1);
        }
      }
      if ((!((st as any).randchan ?? 0))) {
        // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
        scene.text(`"Actually can I talk to you about something?", ${((st as any).npcdesc ?? '')} asks you.`);
        // TODO-QSP: dynamic text: "Whats up <<$npcdesc>>?"
        scene.text(`"Whats up ${((st as any).npcdesc ?? '')}?"`);
        scene.text('"There is just a trait about you that bugs me, can we change that?"');
        if (((st as any).npc_compliance ?? 0)?.[String((st as any).npcID ?? 0)] < 0) {
          // TODO-QSP: dynamic text: You know you have changed for <<$Xem>> before, and you want to avoid to changing...
          scene.text(`You know you have changed for ${((st as any).Xem ?? '')} before, and you want to avoid to changing into something you are not.`);
        }
        qspCall(st, 'lover_likes', 'compliance');
        scene.text('"And what did you want to change about me?"');
        qspCall(st, 'lover_likes', 'checkPier');
        if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> looks at your hair and says, "can we get your hair dyed?"
          scene.text(`${((st as any).npcdesc ?? '')} looks at your hair and says, "can we get your hair dyed?"`);
        } else {
          if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> thinks about it and says "Can you wear <<$func(''lover_pref'', ''ge...
            scene.text(`${((st as any).npcdesc ?? '')} thinks about it and says "Can you wear ${qspFunc(s, 'lover_pref', 'get_makeup_pref')} makeup from now on?"`);
          } else {
            if (qspFunc(s, 'lover_pref', 'check_piercings') === 0  &&  ((st as any).pierDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
              // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don''t have the right amount of piercings.
              scene.text(`${((st as any).npcdesc ?? '')} talks about how you just don't have the right amount of piercings.`);
              if (qspFunc(s, 'lover_pref', 'get_pier_change') === 'decrease') {
                // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less piercings.
                scene.text(`${((st as any).Xec ?? '')} tells you that you should have less piercings.`);
              } else {
                // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more piercings.
                scene.text(`${((st as any).Xec ?? '')} tells you that you should have more piercings.`);
              }
            } else {
              if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0  &&  ((st as any).tattDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don''t have the right amount of tattoos.
                scene.text(`${((st as any).npcdesc ?? '')} talks about how you just don't have the right amount of tattoos.`);
                if (qspFunc(s, 'lover_pref', 'get_tatt_change') === 'decrease') {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less tattoos.
                  scene.text(`${((st as any).Xec ?? '')} tells you that you should have less tattoos.`);
                } else {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more tattoos.
                  scene.text(`${((st as any).Xec ?? '')} tells you that you should have more tattoos.`);
                }
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> stares at you and must have gotten lost in your eyes .. "Actually, ...
                scene.text(`${((st as any).npcdesc ?? '')} stares at you and must have gotten lost in your eyes .. "Actually, nevermind. Let's not do this today.."`);
                scene.actions([
                  { label: 'Well then…', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'actions'
  } },
                ]);
              }
            }
          }
        }
      } else {
        if (((st as any).randchan ?? 0) === 1  &&  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> suggest you and <<$Xem>> drink a beer in the stairwell.
          scene.text(`${((st as any).npcdesc ?? '')} suggest you and ${((st as any).Xem ?? '')} drink a beer in the stairwell.`);
          scene.actions([
            { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0 - (1 + (Math.floor(Math.random() * ((((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) - -(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) + 1)) + (-(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0)))));
    qspGoto(st, 'lover_meet', 'go_home');
  } },
            { label: '', labelFn: (s: GameState) => 'Go with ' + String(((st as any).Xem ?? '') ?? ''), goto: ['lover_meet', 'go_stairwell_date'] },
          ]);
        } else {
          if (((st as any).randchan ?? 0) === 2  ||  ((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you take a walk in the park.
            scene.text(`${((st as any).npcdesc ?? '')} suggests that you take a walk in the park.`);
            scene.actions([
              { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0 - (1 + (Math.floor(Math.random() * ((((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) - -(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) + 1)) + (-(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0)))));
    qspGoto(st, 'lover_meet', 'go_home');
  } },
              { label: '', labelFn: (s: GameState) => 'Go with ' + String(((st as any).Xem ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'lover_meet', '');
  } },
            ]);
          }
        }
      }
    } else {
      if (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        (st as any).randchan = (Math.floor(Math.random() * 4) + 0);
        if ((!((st as any).randchan ?? 0))) {
          (st as any).temp_pref_check = 1;
          if (qspFunc(s, 'lover_pref', 'check_piercings') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_tits') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_lips') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (((st as any).temp_pref_check ?? 0)) {
            scene.text('Takes one look at your body and loves every part of it.');
            (st as any).randchan = (Math.floor(Math.random() * 3) + 1);
          }
        }
        if ((!((st as any).randchan ?? 0))) {
          // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
          scene.text(`"Actually can I talk to you about something?", ${((st as any).npcdesc ?? '')} asks you.`);
          // TODO-QSP: dynamic text: "Whats up <<$npcdesc>>?"
          scene.text(`"Whats up ${((st as any).npcdesc ?? '')}?"`);
          scene.text('"There is just a trait about you that bugs me, can we change that?"');
          if (((st as any).npc_compliance ?? 0)?.[String((st as any).npcID ?? 0)] < 0) {
            // TODO-QSP: dynamic text: You know you have changed for <<$Xem>> before, and you want to avoid to changing...
            scene.text(`You know you have changed for ${((st as any).Xem ?? '')} before, and you want to avoid to changing into something you are not.`);
          }
          qspCall(st, 'lover_likes', 'compliance');
          scene.text('"And what did you want to change about me?"');
          qspCall(st, 'lover_likes', 'checkPier');
          if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your hair and says, "can we get your hair dyed?"
            scene.text(`${((st as any).npcdesc ?? '')} looks at your hair and says, "can we get your hair dyed?"`);
          } else {
            if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
              // TODO-QSP: dynamic text: <<$npcdesc>> thinks about it and says "Can you wear <<func(''lover_pref'', ''get...
              scene.text(`${((st as any).npcdesc ?? '')} thinks about it and says "Can you wear ${qspFunc(s, 'lover_pref', 'get_makeup_pref')} makeup from now on?"`);
            } else {
              if (qspFunc(s, 'lover_pref', 'check_piercings') === 0  &&  ((st as any).pierDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don''t have the right amount of piercings.
                scene.text(`${((st as any).npcdesc ?? '')} talks about how you just don't have the right amount of piercings.`);
                if (qspFunc(s, 'lover_pref', 'get_pier_change') === 'decrease') {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less piercings.
                  scene.text(`${((st as any).Xec ?? '')} tells you that you should have less piercings.`);
                } else {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more piercings.
                  scene.text(`${((st as any).Xec ?? '')} tells you that you should have more piercings.`);
                }
              } else {
                if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0  &&  ((st as any).tattDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                  if (qspFunc(s, 'lover_pref', 'get_tatt_change') === 'decrease') {
                    // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less tattoos.
                    scene.text(`${((st as any).Xec ?? '')} tells you that you should have less tattoos.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more tattoos.
                    scene.text(`${((st as any).Xec ?? '')} tells you that you should have more tattoos.`);
                  }
                } else {
                  if (qspFunc(s, 'lover_pref', 'check_lips') === 0  &&  ((st as any).lipsDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> tells you your lips are just not the right size.
                    scene.text(`${((st as any).npcdesc ?? '')} tells you your lips are just not the right size.`);
                    if (qspFunc(s, 'lover_pref', 'get_lip_change') === 'decrease') {
                      // TODO-QSP: dynamic text: <<$Xec>> tells you that you should get lip injections.
                      scene.text(`${((st as any).Xec ?? '')} tells you that you should get lip injections.`);
                    } else {
                      // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have lip reduction.
                      scene.text(`${((st as any).Xec ?? '')} tells you that you should have lip reduction.`);
                    }
                  } else {
                    if (qspFunc(s, 'lover_pref', 'check_tits') === 0  &&  ((st as any).titsDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> tells you your breasts are just not right.
                      scene.text(`${((st as any).npcdesc ?? '')} tells you your breasts are just not right.`);
                      if (((st as any).tits ?? 0) < ((st as any).titMin ?? 0)) {
                        // TODO-QSP: dynamic text: <<$Xec>> tells you that you should get breast implants.
                        scene.text(`${((st as any).Xec ?? '')} tells you that you should get breast implants.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have a breast reduction.
                        scene.text(`${((st as any).Xec ?? '')} tells you that you should have a breast reduction.`);
                      }
                    } else {
                      // TODO-QSP: dynamic text: <<$npcdesc>> stares at you and must have gotten lost in your eyes .. "Actually, ...
                      scene.text(`${((st as any).npcdesc ?? '')} stares at you and must have gotten lost in your eyes .. "Actually, nevermind. Let's not do this today.."`);
                      scene.actions([
                        { label: '"Well then…"', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'actions'
  } },
                      ]);
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((st as any).randchan ?? 0) === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to the movies.
            scene.text(`${((st as any).npcdesc ?? '')} suggests that you go to the movies.`);
            scene.actions([
              { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0 - (1 + (Math.floor(Math.random() * ((((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) - -(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) + 1)) + (-(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0)))));
    qspGoto(st, 'lover_meet', 'go_home');
  } },
              { label: '', labelFn: (s: GameState) => 'Go with ' + String(((st as any).Xem ?? '') ?? ''), goto: ['lover_meet', 'go_movie_date'] },
            ]);
          } else {
            if (((st as any).randchan ?? 0) === 2) {
              // TODO-QSP: dynamic text: <<$npcdesc>> suggest that you take a walk in the park
              scene.text(`${((st as any).npcdesc ?? '')} suggest that you take a walk in the park`);
              scene.actions([
                { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0 - (1 + (Math.floor(Math.random() * ((((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) - -(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) + 1)) + (-(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0)))));
    qspGoto(st, 'lover_meet', 'go_home');
  } },
                { label: '', labelFn: (s: GameState) => 'Go with ' + String(((st as any).Xem ?? '') ?? ''), goto: ['lover_meet', 'go_park_date'] },
              ]);
            } else {
              if (((st as any).randchan ?? 0) === 3) {
                // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to a cafe.
                scene.text(`${((st as any).npcdesc ?? '')} suggests that you go to a cafe.`);
                scene.actions([
                  { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0 - (1 + (Math.floor(Math.random() * ((((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) - -(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) + 1)) + (-(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0)))));
    qspGoto(st, 'lover_meet', 'go_home');
  } },
                  { label: '', labelFn: (s: GameState) => 'Go with ' + String(((st as any).Xem ?? '') ?? ''), goto: ['lover_meet', 'go_cafe_date'] },
                ]);
              }
            }
          }
        }
      } else {
        (st as any).randchan = (Math.floor(Math.random() * 4) + 0);
        if ((!((st as any).randchan ?? 0))) {
          (st as any).temp_pref_check = 1;
          if (qspFunc(s, 'lover_pref', 'check_piercings') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_tits') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_lips') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_bmi') === 0) {
            (st as any).temp_pref_check = 0;
          }
          if (((st as any).temp_pref_check ?? 0)) {
            scene.text('Takes one look at your body and loves every part of it.');
            (st as any).randchan = (Math.floor(Math.random() * 3) + 1);
          }
        }
        if ((!((st as any).randchan ?? 0))) {
          if (((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
            scene.text(`"Actually can I talk to you about something?", ${((st as any).npcdesc ?? '')} asks you.`);
          } else {
            if (((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
              // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
              scene.text(`"Actually can I talk to you about something?", ${((st as any).npcdesc ?? '')} asks you.`);
            } else {
              // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
              scene.text(`"Actually can I talk to you about something?", ${((st as any).npcdesc ?? '')} asks you.`);
            }
          }
          // TODO-QSP: dynamic text: "Whats up <<$npcdesc>>?"
          scene.text(`"Whats up ${((st as any).npcdesc ?? '')}?"`);
          scene.text('"There is just a trait about you that bugs me, can we change that?"');
          if (((st as any).npc_compliance ?? 0)?.[String((st as any).npcID ?? 0)] < 0) {
            // TODO-QSP: dynamic text: You know you have changed for <<$Xem>> before, and you want to avoid to changing...
            scene.text(`You know you have changed for ${((st as any).Xem ?? '')} before, and you want to avoid to changing into something you are not.`);
          }
          qspCall(st, 'lover_likes', 'compliance');
          scene.text('"And what did you want to change about me?"');
          qspCall(st, 'lover_likes', 'checkPier');
          if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your hair and says, "can we get your hair dyed?"
            scene.text(`${((st as any).npcdesc ?? '')} looks at your hair and says, "can we get your hair dyed?"`);
          } else {
            if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
              // TODO-QSP: dynamic text: <<$npcdesc>> thinks about it and says "Can you wear <<func(''lover_pref'', ''get...
              scene.text(`${((st as any).npcdesc ?? '')} thinks about it and says "Can you wear ${qspFunc(s, 'lover_pref', 'get_makeup_pref')} makeup from now on?"`);
            } else {
              if (qspFunc(s, 'lover_pref', 'check_piercings') === 0  &&  ((st as any).pierDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don''t have the right amount of piercings.
                scene.text(`${((st as any).npcdesc ?? '')} talks about how you just don't have the right amount of piercings.`);
                if (qspFunc(s, 'lover_pref', 'get_pier_change') === 'decrease') {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less piercings.
                  scene.text(`${((st as any).Xec ?? '')} tells you that you should have less piercings.`);
                } else {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more piercings.
                  scene.text(`${((st as any).Xec ?? '')} tells you that you should have more piercings.`);
                }
              } else {
                if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0  &&  ((st as any).tattDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don''t have the right amount of tattoos.
                  scene.text(`${((st as any).npcdesc ?? '')} talks about how you just don't have the right amount of tattoos.`);
                  if (qspFunc(s, 'lover_pref', 'get_tatt_change') === 'decrease') {
                    // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less tattoos.
                    scene.text(`${((st as any).Xec ?? '')} tells you that you should have less tattoos.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more tattoos.
                    scene.text(`${((st as any).Xec ?? '')} tells you that you should have more tattoos.`);
                  }
                } else {
                  if (qspFunc(s, 'lover_pref', 'check_lips') === 0  &&  ((st as any).lipsDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> tells you your lips are just not the right size.
                    scene.text(`${((st as any).npcdesc ?? '')} tells you your lips are just not the right size.`);
                    if (qspFunc(s, 'lover_pref', 'get_lip_change') === 'decrease') {
                      // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have lip reduction.
                      scene.text(`${((st as any).Xec ?? '')} tells you that you should have lip reduction.`);
                    } else {
                      // TODO-QSP: dynamic text: <<$Xec>> tells you that you should get lip injections.
                      scene.text(`${((st as any).Xec ?? '')} tells you that you should get lip injections.`);
                    }
                  } else {
                    if (qspFunc(s, 'lover_pref', 'check_tits') === 0  &&  ((st as any).titsDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> tells you your breasts are just not right.
                      scene.text(`${((st as any).npcdesc ?? '')} tells you your breasts are just not right.`);
                      if (((st as any).tits ?? 0) < ((st as any).titMin ?? 0)) {
                        // TODO-QSP: dynamic text: <<$Xec>> tells you that you should get breast implants.
                        scene.text(`${((st as any).Xec ?? '')} tells you that you should get breast implants.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have a breast reduction.
                        scene.text(`${((st as any).Xec ?? '')} tells you that you should have a breast reduction.`);
                      }
                    } else {
                      if (qspFunc(s, 'lover_pref', 'check_bmi') === 0  &&  ((st as any).figureDay ?? 0) <= ((st as any).npc_dates ?? 0)?.[String((st as any).npcID ?? 0)]) {
                        // TODO-QSP: dynamic text: <<$npcdesc>> tells you your body is just too thick.
                        scene.text(`${((st as any).npcdesc ?? '')} tells you your body is just too thick.`);
                        // TODO-QSP: dynamic text: <<$Xec>> offers to pay for you to get lyposuction.
                        scene.text(`${((st as any).Xec ?? '')} offers to pay for you to get lyposuction.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$npcdesc>> stares at you and must have gotten lost in your eyes .. "Actually, ...
                        scene.text(`${((st as any).npcdesc ?? '')} stares at you and must have gotten lost in your eyes .. "Actually, nevermind. Let's not do this today.."`);
                        scene.actions([
                          { label: '"Well then…"', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'actions'
  } },
                        ]);
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((st as any).randchan ?? 0) === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to a cafe.
            scene.text(`${((st as any).npcdesc ?? '')} suggests that you go to a cafe.`);
            scene.actions([
              { label: 'Sorry, but I need to leave', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0 - (1 + (Math.floor(Math.random() * ((((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) - -(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) + 1)) + (-(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0)))));
    qspGoto(st, 'lover_meet', 'go_home');
  } },
              { label: '', labelFn: (s: GameState) => 'Go with ' + String(((st as any).Xem ?? '') ?? ''), goto: ['lover_meet', 'go_cafe_date'] },
            ]);
          } else {
            if (((st as any).randchan ?? 0) === 2) {
              // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to a restaurant.
              scene.text(`${((st as any).npcdesc ?? '')} suggests that you go to a restaurant.`);
              scene.actions([
                { label: 'Sorry, but I need to leave', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0 - (1 + (Math.floor(Math.random() * ((((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) - -(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) + 1)) + (-(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0)))));
    qspGoto(st, 'lover_meet', 'go_home');
  } },
                { label: '', labelFn: (s: GameState) => 'Go with ' + String(((st as any).Xem ?? '') ?? ''), goto: ['lover_meet', 'go_restaurant_date'] },
              ]);
            } else {
              if (((st as any).randchan ?? 0) === 3) {
                // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to the movies.
                scene.text(`${((st as any).npcdesc ?? '')} suggests that you go to the movies.`);
                scene.actions([
                  { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 0 - (1 + (Math.floor(Math.random() * ((((st as any).npc_rough ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) - -(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0) + 1)) + (-(((st as any).npc_gentle ?? 0)?.[String((st as any).npcID ?? 0)] ?? 0)))));
    qspGoto(st, 'lover_meet', 'go_home');
  } },
                  { label: '', labelFn: (s: GameState) => 'Go with ' + String(((st as any).Xem ?? '') ?? ''), goto: ['lover_meet', 'go_movie_date'] },
                ]);
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Agree with ' + String(((st as any).Xem ?? '') ?? '') + ' to change your ' + String(((st as any).lover_meet ?? 0)?.['ChangeName'] ?? '' ?? ''), goto: ['lover_change', '' + ((st as any).lover_meet ?? 0)?.['ChangeParamName'] + ''] },
    ]);
  } },
    { label: 'I want to do something today', handler: (st: GameState) => {
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: "What do you want to do?", <<$Xe>> asks
    scene.text(`"What do you want to do?", ${((st as any).Xe ?? '')} asks`);
    if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: '"Let\'s go just relax in the stairwell and drink some beer."', goto: ['lover_meet', 'go_stairwell_date'] },
        { label: '"Let\'s take a walk in the park"', goto: ['lover_meet', 'go_park_date'] },
        { label: '"Let\'s go see a movie"', goto: ['lover_meet', 'go_movie_date'] },
        { label: '"Let\'s go to the cafe."', goto: ['lover_meet', 'go_cafe_date'] },
      ]);
    } else {
      if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        (st as any).telsob = '' + ((st as any).npcdesc ?? 0) + '';
        if (((st as any).month ?? 0) > 5  &&  ((st as any).temper ?? 0) > 20  &&  ((st as any).sunWeather ?? 0) === 1) {
          scene.actions([
            { label: 'Invite to the park', goto: ['lover_meet', 'go_park_date'] },
          ]);
        }
        scene.actions([
          { label: 'Invite to a movie', goto: ['lover_meet', 'go_movie_date'] },
          { label: 'Invite to the pool hall', goto: ['lover_meet', 'go_pool_hall_date'] },
          { label: 'Invite to the cafe', goto: ['lover_meet', 'go_cafe_date'] },
          { label: 'Invite to the casino', goto: ['lover_meet', 'go_casino_date'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Never mind…', goto: ['lover_meet', 'actions'] },
    ]);
  } },
    { label: 'I think we should break up…', handler: (st: GameState) => {
    scene.img(`${(((st as any).npc_pic ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}`);
    // TODO-QSP: dynamic text: <<$Xec>> looks hurt, but you insist it is for the best. You both say goodbye and...
    scene.text(`${((st as any).Xec ?? '')} looks hurt, but you insist it is for the best. You both say goodbye and part ways.`);
    if (((st as any).npc_gender ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      qspCall(st, 'lover', 'remove_boyfriend', ((st as any).npcID ?? 0));
    } else {
      qspCall(st, 'lover', 'remove_girlfriend', ((st as any).npcID ?? 0));
    }
    scene.actions([
      { label: 'Continue', goto: ['lover_meet', 'go_home'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGoParkDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    qspGoto(s, 'parkM', 'start');
  } else {
    (s as any).telsob = ((s as any).npcdesc ?? 0);
    qspGoto(s, 'parksvid', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoMovieDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    qspGoto(s, 'kinoM', 'start');
  } else {
    (s as any).telsob = ((s as any).npcdesc ?? 0);
    qspGoto(s, 'kinosvid', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoCafeDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    qspGoto(s, 'kafeM', 'start');
  } else {
    (s as any).telsob = ((s as any).npcdesc ?? 0);
    qspGoto(s, 'kafesvid', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoRestaurantDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    qspGoto(s, 'restoranM', 'start');
  } else {
    (s as any).telsob = ((s as any).npcdesc ?? 0);
    qspGoto(s, 'kafesvid', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoCasinoDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).telsob = ((s as any).npcdesc ?? 0);
  qspGoto(s, 'kazinosvid', '');
  // TODO-QSP: end
  scene.build();
}

function enterGoPoolHallDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).telsob = ((s as any).npcdesc ?? 0);
  qspGoto(s, 'billsvid', '');
  // TODO-QSP: end
  scene.build();
}

function enterGoStairwellDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'podezdM', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterGoHome(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'homes_properties', 'go_home');
  // TODO-QSP: end
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'likes':
      enterLikes(s, scene);
      break;
    case 'actions':
      enterActions(s, scene);
      break;
    case 'go_park_date':
      enterGoParkDate(s, scene);
      break;
    case 'go_movie_date':
      enterGoMovieDate(s, scene);
      break;
    case 'go_cafe_date':
      enterGoCafeDate(s, scene);
      break;
    case 'go_restaurant_date':
      enterGoRestaurantDate(s, scene);
      break;
    case 'go_casino_date':
      enterGoCasinoDate(s, scene);
      break;
    case 'go_pool_hall_date':
      enterGoPoolHallDate(s, scene);
      break;
    case 'go_stairwell_date':
      enterGoStairwellDate(s, scene);
      break;
    case 'go_home':
      enterGoHome(s, scene);
      break;
    case 'cleanup':
      enterCleanup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lover_meet: LocationDef = {
  name: 'lover_meet',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
