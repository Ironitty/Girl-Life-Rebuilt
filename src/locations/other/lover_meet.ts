import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0));
  if (!(s as any).npc_meetday) (s as any).npc_meetday = {}; (s as any).npc_meetday[String((s as any).npcID ?? 0)] = 0;
  if (!(s as any).npc_dates) (s as any).npc_dates = {}; (s as any).npc_dates[String((s as any).npcID ?? 0)] = ((s as any).npc_dates[String((s as any).npcID ?? 0)] ?? 0) + (1);
  qspCall(s, 'lover_pref', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  (s as any).clotDay = 9;
  (s as any).bodyDay = 21;
  (s as any).pierDay = 21;
  (s as any).tattDay = 21;
  (s as any).lipsDay = 27;
  (s as any).titsDay = 36;
  (s as any).figureDay = 45;
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
      (s as any).randchan = Math.floor(Math.random() * 3) + 0;
      if ((!((s as any).randchan ?? 0))) {
      } else {
        if (((s as any).randchan ?? 0) === 1) {
        } else {
          if (((s as any).randchan ?? 0) === 2) {
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
        (s as any).randchan = Math.floor(Math.random() * 2) + 0;
        if ((!((s as any).randchan ?? 0))) {
        } else {
          if (((s as any).randchan ?? 0) === 1) {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
        (s as any).randchan = Math.floor(Math.random() * 3) + 0;
        if ((!((s as any).randchan ?? 0))) {
        } else {
          if (((s as any).randchan ?? 0) === 1) {
          } else {
            if (((s as any).randchan ?? 0) === 2) {
            }
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
          (s as any).randchan = Math.floor(Math.random() * 2) + 0;
          if ((!((s as any).randchan ?? 0))) {
          } else {
            if (((s as any).randchan ?? 0) === 1) {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
        (s as any).randchan = Math.floor(Math.random() * 3) + 0;
        if ((!((s as any).randchan ?? 0))) {
        } else {
          if (((s as any).randchan ?? 0) === 1) {
          } else {
            if (((s as any).randchan ?? 0) === 2) {
            }
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
          (s as any).randchan = Math.floor(Math.random() * 2) + 0;
          if ((!((s as any).randchan ?? 0))) {
          } else {
            if (((s as any).randchan ?? 0) === 1) {
            }
          }
        }
      }
    }
  }
  qspCall(s, 'lover_love', '');
  (s as any).didPushAway = 0;
  if (((s as any).pcs_skin ?? 0) < 20) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
  } else {
    if (((s as any).pcs_skin ?? 0) < 40) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
    } else {
      if (((s as any).pcs_skin ?? 0) < 60) {
      } else {
        if (((s as any).pcs_skin ?? 0) < 80) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        }
      }
    }
  }
  if ((!((s as any).pcs_lip ?? 0))) {
  }
  if (((s as any).pcs_lip ?? 0) === 1) {
  }
  if (((s as any).pcs_lip ?? 0) === 2) {
  }
  if (((s as any).pcs_lip ?? 0) === 3) {
  }
  if (((s as any).pcs_lip ?? 0) === 4) {
  }
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
  } else {
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    } else {
      if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      } else {
        if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        }
      }
    }
  }
  // TODO-QSP: dynamic text: At the entrance <<$meetskin>> stands <<$npcdesc>>. <<$Xec>> comes over to you an...
  scene.text(`At the entrance ${((s as any).meetskin || '')} stands ${((s as any).npcdesc || '')}. ${((s as any).Xec || '')} comes over to you and ${((s as any).greet || '')}`);
  qspCall(s, 'lover_likes', 'hairPref');
  qspCall(s, 'lover_likes', 'makePrefTmp');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> looks like a timid and not very confident young <<$person>> <<$clom...
    scene.text(`${((s as any).npcdesc || '')} looks like a timid and not very confident young ${((s as any).person || '')} ${((s as any).clom || '')}`);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> looks like an average young <<$person>> <<$clom>>
      scene.text(`${((s as any).npcdesc || '')} looks like an average young ${((s as any).person || '')} ${((s as any).clom || '')}`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> looks like a cocky and brash young <<$person>> <<$clom>>
      scene.text(`${((s as any).npcdesc || '')} looks like a cocky and brash young ${((s as any).person || '')} ${((s as any).clom || '')}`);
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
    scene.text(`${((s as any).npcdesc || '')} gets close to you, and you can tell by ${((s as any).Xyr || '')} body movements ${((s as any).Xe || '')} wants to kiss you.`);
    scene.actions([
      { label: 'Kiss with tongue', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: You take the initiative and when <<$Xe>> opens <<$Xyr>> mouth you thrust your to...
    scene.text(`You take the initiative and when ${((s as any).Xe || '')} opens ${((s as any).Xyr || '')} mouth you thrust your tongue into ${((s as any).Xyr || '')} mouth.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    if (((s as any).Venera ?? 0) > 4) {
      if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
        qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
      } else {
        qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> takes a closer look at you and says, "What is wrong with your lips?...
      scene.text(`${((s as any).npcdesc || '')} takes a closer look at you and says, "What is wrong with your lips? They are very sore. Is that genital herpes? I better go, I do not want to get infected. I'm sorry, goodbye."`);
      qspCall(s, 'mood', 'lower', 'medium');
      scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
    } else {
      if (((s as any).Venera ?? 0) < 4  &&  ((s as any).cumloc ?? 0)[11] === 0  &&  (((s as any).cumloc ?? 0)[6] === 0  &&  ((s as any).cumloc ?? 0)[7] === 0)) {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: Normally this would have made <<$Xem>> feel uncomfortable, but as you pull away ...
          scene.text(`Normally this would have made ${((s as any).Xem || '')} feel uncomfortable, but as you pull away ${((s as any).Xe || '')} smiles and sighs contently.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
            // TODO-QSP: dynamic text: <<$Xec>> goes with it a blink and in moments your tongues are intertwined.
            scene.text(`${((s as any).Xec || '')} goes with it a blink and in moments your tongues are intertwined.`);
          } else {
            // TODO-QSP: dynamic text: It seems as <<$npcdesc>> had the same idea, as <<$Xe>> pushes <<$Xyr>> tongue in...
            scene.text(`It seems as ${((s as any).npcdesc || '')} had the same idea, as ${((s as any).Xe || '')} pushes ${((s as any).Xyr || '')} tongue into your mouth as much as you push into ${((s as any).Xyr || '')}.`);
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          }
        }
      } else {
        if ((((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          if (((s as any).cumloc ?? 0)[11] === 1) {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
              scene.text(`${((s as any).Xec || '')} can see sperm on your face, but underneath ${((s as any).Xyr || '')} shy demener you know that it only turns ${((s as any).Xem || '')} on.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
                scene.text(`${((s as any).Xec || '')} can see sperm on your face, but you know that it only turns ${((s as any).Xem || '')} on more.`);
              } else {
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
                scene.text(`${((s as any).Xec || '')} can see sperm on your face, but by the bulge in ${((s as any).Xyr || '')} pants you know it only turns ${((s as any).Xem || '')} on.`);
              }
            }
          } else {
            if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
                scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but underneath ${((s as any).Xyr || '')} shy demener you know that it only turns ${((s as any).Xem || '')} on.`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                  // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
                  scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but you know that it only turns ${((s as any).Xem || '')} on more.`);
                } else {
                  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                  // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
                  scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but by the bulge in ${((s as any).Xyr || '')} pants you know it only turns ${((s as any).Xem || '')} on.`);
                }
              }
            }
          }
        } else {
          if ((((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0)) {
            if (((s as any).cumloc ?? 0)[11] === 1) {
              if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
                qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
              } else {
                qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
              }
              // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "H-Hey- <<$pcs_firstname>>! What the…?!...
              scene.text(`${((s as any).Xec || '')} notices the sperm on your face, "H-Hey- ${((s as any).pcs_firstname || '')}! What the…?! You dirty whore!", ${((s as any).Xe || '')} then pushes you out of ${((s as any).Xyr || '')} face. "We are through, I don't want to see your face again!`);
              qspCall(s, 'mood', 'lower', 'medium');
              scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
            } else {
              if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
                qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
                // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "<<$pcs_firstname>>! What the…?! You dir...
                scene.text(`${((s as any).Xec || '')} notices the sperm on your ass, "${((s as any).pcs_firstname || '')}! What the…?! You dirty whore!", ${((s as any).Xe || '')} then pushes you away. "We are through, I don't want to see your face again!`);
                qspCall(s, 'mood', 'lower', 'medium');
                scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
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
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: You press your <<$meetlip>> softly against <<$Xyr>>, and for a split second time...
    scene.text(`You press your ${((s as any).meetlip || '')} softly against ${((s as any).Xyr || '')}, and for a split second time seems to stop.`);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).cumloc ?? 0)[11] === 0  &&  (((s as any).cumloc ?? 0)[6] === 0  &&  ((s as any).cumloc ?? 0)[7] === 0)) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$Xec>> wraps arms around you, you both stay like this for at least a couple of...
        scene.text(`${((s as any).Xec || '')} wraps arms around you, you both stay like this for at least a couple of seconds and as you pull away ${((s as any).Xe || '')} looks into your eyes and smiles.`);
        qspCall(s, 'arousal', 'kiss', 5);
        qspCall(s, 'stat', '');
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: <<$Xec>> kisses you back with such skill it turns you on.
          scene.text(`${((s as any).Xec || '')} kisses you back with such skill it turns you on.`);
          qspCall(s, 'arousal', 'kiss', 5);
          qspCall(s, 'stat', '');
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: <<$Xec>> kisses you back with such passion you feel a tingle within you.
          scene.text(`${((s as any).Xec || '')} kisses you back with such passion you feel a tingle within you.`);
          qspCall(s, 'arousal', 'kiss', 5);
          qspCall(s, 'stat', '');
        }
      }
    } else {
      if ((((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1  ||  ((s as any).cumloc ?? 0)[12] === 1)  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).cumloc ?? 0)[11] === 1) {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
            scene.text(`${((s as any).Xec || '')} can see sperm on your face, but underneath ${((s as any).Xyr || '')} shy demener you know that it only turns ${((s as any).Xem || '')} on.`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
              scene.text(`${((s as any).Xec || '')} can see sperm on your face, but you know that it only turns ${((s as any).Xem || '')} on more.`);
            } else {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
              scene.text(`${((s as any).Xec || '')} can see sperm on your face, but by the bulge in ${((s as any).Xyr || '')} pants you know it only turns ${((s as any).Xem || '')} on.`);
            }
          }
        } else {
          if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
              scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but underneath ${((s as any).Xyr || '')} shy demener you know that it only turns ${((s as any).Xem || '')} on.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
                scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but you know that it only turns ${((s as any).Xem || '')} on more.`);
              } else {
                qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
                scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but by the bulge in ${((s as any).Xyr || '')} pants you know it only turns ${((s as any).Xem || '')} on.`);
              }
            }
          } else {
            if (((s as any).cumloc ?? 0)[12] === 1) {
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but underneath <<$Xyr>> shy demene...
                scene.text(`${((s as any).Xec || '')} can smell the scent of sperm on you, but underneath ${((s as any).Xyr || '')} shy demener you know that it only turns ${((s as any).Xem || '')} on.`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                  // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but you know that it only turns <<...
                  scene.text(`${((s as any).Xec || '')} can smell the scent of sperm on you, but you know that it only turns ${((s as any).Xem || '')} on more.`);
                } else {
                  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                  // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but you know by the bulge in <<$Xy...
                  scene.text(`${((s as any).Xec || '')} can smell the scent of sperm on you, but you know by the bulge in ${((s as any).Xyr || '')} pants it only turns ${((s as any).Xem || '')} on more.`);
                }
              }
            }
          }
        }
      } else {
        if ((((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
          if (((s as any).cumloc ?? 0)[11] === 1) {
            if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
              qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
            } else {
              qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
            }
            // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "<<$pcs_firstname>>! What the…?! You di...
            scene.text(`${((s as any).Xec || '')} notices the sperm on your face, "${((s as any).pcs_firstname || '')}! What the…?! You dirty whore!", ${((s as any).Xe || '')} then pushes you out of ${((s as any).Xyr || '')} face. "We are through, I don't want to see your face again!`);
            qspCall(s, 'mood', 'lower', 'medium');
            scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
          } else {
            if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
              if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
                qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
              } else {
                qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
              }
              // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "<<$pcs_firstname>>! What the…?! You dir...
              scene.text(`${((s as any).Xec || '')} notices the sperm on your ass, "${((s as any).pcs_firstname || '')}! What the…?! You dirty whore!", ${((s as any).Xe || '')} then pushes you away. "We are through, I don't want to see your face again!`);
              qspCall(s, 'mood', 'lower', 'medium');
              scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
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
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: You make a cute pouty face and turn your cheek toward <<$npcdesc>>. <<$Xec>> und...
    scene.text(`You make a cute pouty face and turn your cheek toward ${((s as any).npcdesc || '')}. ${((s as any).Xec || '')} understands and though ${((s as any).Xe || '')} wanted to kiss you, ${((s as any).Xe || '')} settles with giving you a peck on the cheek`);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).cumloc ?? 0)[11] === 0  &&  (((s as any).cumloc ?? 0)[6] === 0  &&  ((s as any).cumloc ?? 0)[7] === 0)) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$Xec>> gives you a soft kiss on the cheek, and you can tell <<$Xe>> finds this...
        scene.text(`${((s as any).Xec || '')} gives you a soft kiss on the cheek, and you can tell ${((s as any).Xe || '')} finds this act very cute.`);
        qspCall(s, 'arousal', 'kiss', 5);
        qspCall(s, 'stat', '');
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          // TODO-QSP: dynamic text: <<$Xec>> kisses you on the cheek and before <<$Xe>> pulls away you feel a quick ...
          scene.text(`${((s as any).Xec || '')} kisses you on the cheek and before ${((s as any).Xe || '')} pulls away you feel a quick kiss on the forehead.`);
          qspCall(s, 'arousal', 'kiss', 5);
          qspCall(s, 'stat', '');
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 0);
          // TODO-QSP: dynamic text: Though you can tell <<$Xe>> is a bit disappointed, <<$Xe>> gives you a kiss on t...
          scene.text(`Though you can tell ${((s as any).Xe || '')} is a bit disappointed, ${((s as any).Xe || '')} gives you a kiss on the cheek. As ${((s as any).Xe || '')} pulls away ${((s as any).Xe || '')} gives your ass a quick squeeze.`);
          qspCall(s, 'arousal', 'kiss', 5);
          qspCall(s, 'stat', '');
        }
      }
    } else {
      if ((((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1  ||  ((s as any).cumloc ?? 0)[12] === 1)  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).cumloc ?? 0)[11] === 1) {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
            scene.text(`${((s as any).Xec || '')} can see sperm on your face, but underneath ${((s as any).Xyr || '')} shy demener you know that it only turns ${((s as any).Xem || '')} on.`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
              scene.text(`${((s as any).Xec || '')} can see sperm on your face, but you know that it only turns ${((s as any).Xem || '')} on more.`);
            } else {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
              scene.text(`${((s as any).Xec || '')} can see sperm on your face, but by the bulge in ${((s as any).Xyr || '')} pants you know it only turns ${((s as any).Xem || '')} on.`);
            }
          }
        } else {
          if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
              // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
              scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but underneath ${((s as any).Xyr || '')} shy demener you know that it only turns ${((s as any).Xem || '')} on.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
                scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but you know that it only turns ${((s as any).Xem || '')} on more.`);
              } else {
                qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
                scene.text(`${((s as any).Xec || '')} can see sperm on your ass, but by the bulge in ${((s as any).Xyr || '')} pants you know it only turns ${((s as any).Xem || '')} on.`);
              }
            }
          }
        }
      } else {
        if (((s as any).cumloc ?? 0)[12]+((s as any).cumloc ?? 0)[11]+((s as any).cumloc ?? 0)[6]+((s as any).cumloc ?? 0)[7] > 0  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
          if (((s as any).cumloc ?? 0)[11] > 0) {
            if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
              qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
            } else {
              qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
            }
            // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "H-Hey- <<$pcs_firstname>>! What the…?!...
            scene.text(`${((s as any).Xec || '')} notices the sperm on your face, "H-Hey- ${((s as any).pcs_firstname || '')}! What the…?! You dirty whore!", ${((s as any).Xe || '')} then pushes you out of ${((s as any).Xyr || '')} face. "We are through, I don't want to see your face again!`);
            qspCall(s, 'mood', 'lower', 'medium');
            scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
          } else {
            if (((s as any).cumloc ?? 0)[6]+((s as any).cumloc ?? 0)[7] > 0) {
              if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
                qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
              } else {
                qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
              }
              // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "H-Hey- <<$pcs_firstname>>! What the…?! ...
              scene.text(`${((s as any).Xec || '')} notices the sperm on your ass, "H-Hey- ${((s as any).pcs_firstname || '')}! What the…?! You dirty whore!", ${((s as any).Xe || '')} then pushes you away. "We are through, I don't want to see your face again!`);
              qspCall(s, 'mood', 'lower', 'medium');
              scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
            } else {
              if (((s as any).cumloc ?? 0)[12] > 0) {
                if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
                  qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
                } else {
                  qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
                }
                // TODO-QSP: dynamic text: <<$Xec>> realizes your mouth smells like sperm, "H-Hey- <<$pcs_firstname>>! What...
                scene.text(`${((s as any).Xec || '')} realizes your mouth smells like sperm, "H-Hey- ${((s as any).pcs_firstname || '')}! What the…?! You dirty whore!", ${((s as any).Xe || '')} then pushes you away. "We are through, I don't want to see your face again!"`);
                qspCall(s, 'mood', 'lower', 'medium');
                scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
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
      { label: 'Push <<$Xyr>> face away', handler: (st: GameState) => {
    (s as any).didPushAway = 1;
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: Maybe you had a bad day, maybe you don't want a kiss, you rudely push <<$Xyr>> f...
    scene.text(`Maybe you had a bad day, maybe you don't want a kiss, you rudely push ${((s as any).Xyr || '')} face away, and by the looks of it, hurting ${((s as any).Xyr || '')} feelings in the process.`);
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-3) - (-4) + 1)) + ((-4))));
      // TODO-QSP: dynamic text: <<$Xec>> stands there slightly embarrassed, and you can tell this hurt your rela...
      scene.text(`${((s as any).Xec || '')} stands there slightly embarrassed, and you can tell this hurt your relationship a good amount.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-2) - (-3) + 1)) + ((-3))));
        // TODO-QSP: dynamic text: <<$Xec>> looks at you slightly concerned, but backs off and gives you your space...
        scene.text(`${((s as any).Xec || '')} looks at you slightly concerned, but backs off and gives you your space.`);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-5));
        // TODO-QSP: dynamic text: <<$Xec>> begins to get angry, <<$Xe>> takes a deep breath and gives you space.
        scene.text(`${((s as any).Xec || '')} begins to get angry, ${((s as any).Xe || '')} takes a deep breath and gives you space.`);
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
  scene.actions([{ label: 'Continue', goto: ['lover_meet', 'actions'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterActions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Can I ask you how you think I look?', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: <<$npcdesc>> says "If you insist" and tells you exactly how <<$Xe>> thinks you l...
    scene.text(`${((s as any).npcdesc || '')} says "If you insist" and tells you exactly how ${((s as any).Xe || '')} thinks you look based on what ${((s as any).Xe || '')} likes:`);
    qspCall(s, 'lover_likes', 'allPref');
    scene.actions([
      { label: 'Okay, lets talk about something else', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'actions'
  } },
    ]);
  } },
    { label: 'What do you want to do today?', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: You tell <<$Xem>> you would rather have <<$Xem>> decide what we do today.
    scene.text(`You tell ${((s as any).Xem || '')} you would rather have ${((s as any).Xem || '')} decide what we do today.`);
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 0);
      // TODO-QSP: dynamic text: Not used to being given the opportunity to choose, <<$Xe>> thinks what to do…
      scene.text(`Not used to being given the opportunity to choose, ${((s as any).Xe || '')} thinks what to do…`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 0);
        // TODO-QSP: dynamic text: <<$Xec>> thinks about what to do today.
        scene.text(`${((s as any).Xec || '')} thinks about what to do today.`);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        // TODO-QSP: dynamic text: You can tell <<$Xe>> is happy you gave <<$Xem>> the ability to choose what to do...
        scene.text(`You can tell ${((s as any).Xe || '')} is happy you gave ${((s as any).Xem || '')} the ability to choose what to do today.`);
      }
    }
    if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] >= -2) {
    } else {
      if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] >= -4) {
      }
    }
    qspCall(s, 'willpower', 'misc', 'self', ((s as any).loverResist ?? 0));
    if (!(s as any).lover_meet) (s as any).lover_meet = {}; (s as any).lover_meet['ChangeActions'] = qspUntranslated(s, "{", { location: "lover_meet" });
    // TODO-QSP: !$ARGS[0] = name of thing being changed
    // TODO-QSP: !$ARGS[1] = Parameter for lover_change procedure
    if (!(s as any).lover_meet) (s as any).lover_meet = {}; (s as any).lover_meet['ChangeName'] = ((s as any).locArgs?.[0] ?? 0);
    if (!(s as any).lover_meet) (s as any).lover_meet = {}; (s as any).lover_meet['ChangeParamName'] = ((s as any).locArgs?.[1] ?? 0);
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I like my <<$lover_meet["ChangeName"]>> just the way it is', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I like my <<$lover_meet["ChangeName"]>> just the way it is', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-1) - (-2) + 1)) + ((-2))));
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: <<$npcdesc>> realizes you will not give in this situation, and walks away mumbli...
    scene.text(`${((s as any).npcdesc || '')} realizes you will not give in this situation, and walks away mumbling to ${((s as any).Xemself || '')}.`);
  }, goto: ['lover_meet', 'go_home'] },
      ]);
    }
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      (s as any).randchan = Math.floor(Math.random() * 3) + 0;
      if ((!((s as any).randchan ?? 0))) {
        (s as any).temp_pref_check = 1;
        if (qspFunc(s, 'lover_pref', 'check_piercings') === 0) {
          (s as any).temp_pref_check = 0;
        }
        if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0) {
          (s as any).temp_pref_check = 0;
        }
        if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
          (s as any).temp_pref_check = 0;
        }
        if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
          (s as any).temp_pref_check = 0;
        }
        if (((s as any).temp_pref_check ?? 0)) {
          (s as any).randchan = Math.floor(Math.random() * 2) + 1;
        }
      }
      if ((!((s as any).randchan ?? 0))) {
        // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
        scene.text(`"Actually can I talk to you about something?", ${((s as any).npcdesc || '')} asks you.`);
        // TODO-QSP: dynamic text: "Whats up <<$npcdesc>>?"
        scene.text(`"Whats up ${((s as any).npcdesc || '')}?"`);
        scene.text('"There is just a trait about you that bugs me, can we change that?"');
        if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] < 0) {
          // TODO-QSP: dynamic text: You know you have changed for <<$Xem>> before, and you want to avoid to changing...
          scene.text(`You know you have changed for ${((s as any).Xem || '')} before, and you want to avoid to changing into something you are not.`);
        }
        qspCall(s, 'lover_likes', 'compliance');
        scene.text('"And what did you want to change about me?"');
        qspCall(s, 'lover_likes', 'checkPier');
        if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> looks at your hair and says, "can we get your hair dyed?"
          scene.text(`${((s as any).npcdesc || '')} looks at your hair and says, "can we get your hair dyed?"`);
        } else {
          if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> thinks about it and says "Can you wear <<$func('lover_pref', 'get_m...
            scene.text(`${((s as any).npcdesc || '')} thinks about it and says "Can you wear ${qspFunc(s, 'lover_pref', 'get_makeup_pref')} makeup from now on?"`);
          } else {
            if (qspFunc(s, 'lover_pref', 'check_piercings') === 0  &&  ((s as any).pierDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
              // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don't have the right amount of piercings.
              scene.text(`${((s as any).npcdesc || '')} talks about how you just don't have the right amount of piercings.`);
              if (qspFunc(s, 'lover_pref', 'get_pier_change') === 'decrease') {
                // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less piercings.
                scene.text(`${((s as any).Xec || '')} tells you that you should have less piercings.`);
              } else {
                // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more piercings.
                scene.text(`${((s as any).Xec || '')} tells you that you should have more piercings.`);
              }
            } else {
              if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0  &&  ((s as any).tattDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don't have the right amount of tattoos.
                scene.text(`${((s as any).npcdesc || '')} talks about how you just don't have the right amount of tattoos.`);
                if (qspFunc(s, 'lover_pref', 'get_tatt_change') === 'decrease') {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less tattoos.
                  scene.text(`${((s as any).Xec || '')} tells you that you should have less tattoos.`);
                } else {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more tattoos.
                  scene.text(`${((s as any).Xec || '')} tells you that you should have more tattoos.`);
                }
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> stares at you and must have gotten lost in your eyes .. "Actually, ...
                scene.text(`${((s as any).npcdesc || '')} stares at you and must have gotten lost in your eyes .. "Actually, nevermind. Let's not do this today.."`);
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
        if (((s as any).randchan ?? 0) === 1  &&  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> suggest you and <<$Xem>> drink a beer in the stairwell.
          scene.text(`${((s as any).npcdesc || '')} suggest you and ${((s as any).Xem || '')} drink a beer in the stairwell.`);
          scene.actions([
            { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $npcID, 0 - (1 + rand(-npc_gentle[$npcID], npc_rough[$npcID]))
  }, goto: ['lover_meet', 'go_home'] },
            { label: 'Go with <<$Xem>>', goto: ['lover_meet', 'go_stairwell_date'] },
          ]);
        } else {
          if (((s as any).randchan ?? 0) === 2  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you take a walk in the park.
            scene.text(`${((s as any).npcdesc || '')} suggests that you take a walk in the park.`);
            scene.actions([
              { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $npcID, 0 - (1 + rand(-npc_gentle[$npcID], npc_rough[$npcID]))
  }, goto: ['lover_meet', 'go_home'] },
              { label: 'Go with <<$Xem>>', handler: (st: GameState) => {
    qspCall(st, 'lover_meet', 'go_park_date');
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        (s as any).randchan = Math.floor(Math.random() * 4) + 0;
        if ((!((s as any).randchan ?? 0))) {
          (s as any).temp_pref_check = 1;
          if (qspFunc(s, 'lover_pref', 'check_piercings') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_tits') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_lips') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (((s as any).temp_pref_check ?? 0)) {
            scene.text('Takes one look at your body and loves every part of it.');
            (s as any).randchan = Math.floor(Math.random() * 3) + 1;
          }
        }
        if ((!((s as any).randchan ?? 0))) {
          // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
          scene.text(`"Actually can I talk to you about something?", ${((s as any).npcdesc || '')} asks you.`);
          // TODO-QSP: dynamic text: "Whats up <<$npcdesc>>?"
          scene.text(`"Whats up ${((s as any).npcdesc || '')}?"`);
          scene.text('"There is just a trait about you that bugs me, can we change that?"');
          if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] < 0) {
            // TODO-QSP: dynamic text: You know you have changed for <<$Xem>> before, and you want to avoid to changing...
            scene.text(`You know you have changed for ${((s as any).Xem || '')} before, and you want to avoid to changing into something you are not.`);
          }
          qspCall(s, 'lover_likes', 'compliance');
          scene.text('"And what did you want to change about me?"');
          qspCall(s, 'lover_likes', 'checkPier');
          if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your hair and says, "can we get your hair dyed?"
            scene.text(`${((s as any).npcdesc || '')} looks at your hair and says, "can we get your hair dyed?"`);
          } else {
            if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
              // TODO-QSP: dynamic text: <<$npcdesc>> thinks about it and says "Can you wear <<func('lover_pref', 'get_ma...
              scene.text(`${((s as any).npcdesc || '')} thinks about it and says "Can you wear ${qspFunc(s, 'lover_pref', 'get_makeup_pref')} makeup from now on?"`);
            } else {
              if (qspFunc(s, 'lover_pref', 'check_piercings') === 0  &&  ((s as any).pierDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don't have the right amount of piercings.
                scene.text(`${((s as any).npcdesc || '')} talks about how you just don't have the right amount of piercings.`);
                if (qspFunc(s, 'lover_pref', 'get_pier_change') === 'decrease') {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less piercings.
                  scene.text(`${((s as any).Xec || '')} tells you that you should have less piercings.`);
                } else {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more piercings.
                  scene.text(`${((s as any).Xec || '')} tells you that you should have more piercings.`);
                }
              } else {
                if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0  &&  ((s as any).tattDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                  if (qspFunc(s, 'lover_pref', 'get_tatt_change') === 'decrease') {
                    // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less tattoos.
                    scene.text(`${((s as any).Xec || '')} tells you that you should have less tattoos.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more tattoos.
                    scene.text(`${((s as any).Xec || '')} tells you that you should have more tattoos.`);
                  }
                } else {
                  if (qspFunc(s, 'lover_pref', 'check_lips') === 0  &&  ((s as any).lipsDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> tells you your lips are just not the right size.
                    scene.text(`${((s as any).npcdesc || '')} tells you your lips are just not the right size.`);
                    if (qspFunc(s, 'lover_pref', 'get_lip_change') === 'decrease') {
                      // TODO-QSP: dynamic text: <<$Xec>> tells you that you should get lip injections.
                      scene.text(`${((s as any).Xec || '')} tells you that you should get lip injections.`);
                    } else {
                      // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have lip reduction.
                      scene.text(`${((s as any).Xec || '')} tells you that you should have lip reduction.`);
                    }
                  } else {
                    if (qspFunc(s, 'lover_pref', 'check_tits') === 0  &&  ((s as any).titsDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> tells you your breasts are just not right.
                      scene.text(`${((s as any).npcdesc || '')} tells you your breasts are just not right.`);
                      if (((s as any).tits ?? 0) < ((s as any).titMin ?? 0)) {
                        // TODO-QSP: dynamic text: <<$Xec>> tells you that you should get breast implants.
                        scene.text(`${((s as any).Xec || '')} tells you that you should get breast implants.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have a breast reduction.
                        scene.text(`${((s as any).Xec || '')} tells you that you should have a breast reduction.`);
                      }
                    } else {
                      // TODO-QSP: dynamic text: <<$npcdesc>> stares at you and must have gotten lost in your eyes .. "Actually, ...
                      scene.text(`${((s as any).npcdesc || '')} stares at you and must have gotten lost in your eyes .. "Actually, nevermind. Let's not do this today.."`);
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
          if (((s as any).randchan ?? 0) === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to the movies.
            scene.text(`${((s as any).npcdesc || '')} suggests that you go to the movies.`);
            scene.actions([
              { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $npcID, 0 - (1 + rand(-npc_gentle[$npcID], npc_rough[$npcID]))
  }, goto: ['lover_meet', 'go_home'] },
              { label: 'Go with <<$Xem>>', goto: ['lover_meet', 'go_movie_date'] },
            ]);
          } else {
            if (((s as any).randchan ?? 0) === 2) {
              // TODO-QSP: dynamic text: <<$npcdesc>> suggest that you take a walk in the park
              scene.text(`${((s as any).npcdesc || '')} suggest that you take a walk in the park`);
              scene.actions([
                { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $npcID, 0 - (1 + rand(-npc_gentle[$npcID], npc_rough[$npcID]))
  }, goto: ['lover_meet', 'go_home'] },
                { label: 'Go with <<$Xem>>', goto: ['lover_meet', 'go_park_date'] },
              ]);
            } else {
              if (((s as any).randchan ?? 0) === 3) {
                // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to a cafe.
                scene.text(`${((s as any).npcdesc || '')} suggests that you go to a cafe.`);
                scene.actions([
                  { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $npcID, 0 - (1 + rand(-npc_gentle[$npcID], npc_rough[$npcID]))
  }, goto: ['lover_meet', 'go_home'] },
                  { label: 'Go with <<$Xem>>', goto: ['lover_meet', 'go_cafe_date'] },
                ]);
              }
            }
          }
        }
      } else {
        (s as any).randchan = Math.floor(Math.random() * 4) + 0;
        if ((!((s as any).randchan ?? 0))) {
          (s as any).temp_pref_check = 1;
          if (qspFunc(s, 'lover_pref', 'check_piercings') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_tits') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_lips') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (qspFunc(s, 'lover_pref', 'check_bmi') === 0) {
            (s as any).temp_pref_check = 0;
          }
          if (((s as any).temp_pref_check ?? 0)) {
            scene.text('Takes one look at your body and loves every part of it.');
            (s as any).randchan = Math.floor(Math.random() * 3) + 1;
          }
        }
        if ((!((s as any).randchan ?? 0))) {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
            scene.text(`"Actually can I talk to you about something?", ${((s as any).npcdesc || '')} asks you.`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
              scene.text(`"Actually can I talk to you about something?", ${((s as any).npcdesc || '')} asks you.`);
            } else {
              // TODO-QSP: dynamic text: "Actually can I talk to you about something?", <<$npcdesc>> asks you.
              scene.text(`"Actually can I talk to you about something?", ${((s as any).npcdesc || '')} asks you.`);
            }
          }
          // TODO-QSP: dynamic text: "Whats up <<$npcdesc>>?"
          scene.text(`"Whats up ${((s as any).npcdesc || '')}?"`);
          scene.text('"There is just a trait about you that bugs me, can we change that?"');
          if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] < 0) {
            // TODO-QSP: dynamic text: You know you have changed for <<$Xem>> before, and you want to avoid to changing...
            scene.text(`You know you have changed for ${((s as any).Xem || '')} before, and you want to avoid to changing into something you are not.`);
          }
          qspCall(s, 'lover_likes', 'compliance');
          scene.text('"And what did you want to change about me?"');
          qspCall(s, 'lover_likes', 'checkPier');
          if (qspFunc(s, 'lover_pref', 'check_haircol') === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your hair and says, "can we get your hair dyed?"
            scene.text(`${((s as any).npcdesc || '')} looks at your hair and says, "can we get your hair dyed?"`);
          } else {
            if (qspFunc(s, 'lover_pref', 'check_makeup') === 0) {
              // TODO-QSP: dynamic text: <<$npcdesc>> thinks about it and says "Can you wear <<func('lover_pref', 'get_ma...
              scene.text(`${((s as any).npcdesc || '')} thinks about it and says "Can you wear ${qspFunc(s, 'lover_pref', 'get_makeup_pref')} makeup from now on?"`);
            } else {
              if (qspFunc(s, 'lover_pref', 'check_piercings') === 0  &&  ((s as any).pierDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don't have the right amount of piercings.
                scene.text(`${((s as any).npcdesc || '')} talks about how you just don't have the right amount of piercings.`);
                if (qspFunc(s, 'lover_pref', 'get_pier_change') === 'decrease') {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less piercings.
                  scene.text(`${((s as any).Xec || '')} tells you that you should have less piercings.`);
                } else {
                  // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more piercings.
                  scene.text(`${((s as any).Xec || '')} tells you that you should have more piercings.`);
                }
              } else {
                if (qspFunc(s, 'lover_pref', 'check_tattoos') === 0  &&  ((s as any).tattDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> talks about how you just don't have the right amount of tattoos.
                  scene.text(`${((s as any).npcdesc || '')} talks about how you just don't have the right amount of tattoos.`);
                  if (qspFunc(s, 'lover_pref', 'get_tatt_change') === 'decrease') {
                    // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have less tattoos.
                    scene.text(`${((s as any).Xec || '')} tells you that you should have less tattoos.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have more tattoos.
                    scene.text(`${((s as any).Xec || '')} tells you that you should have more tattoos.`);
                  }
                } else {
                  if (qspFunc(s, 'lover_pref', 'check_lips') === 0  &&  ((s as any).lipsDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> tells you your lips are just not the right size.
                    scene.text(`${((s as any).npcdesc || '')} tells you your lips are just not the right size.`);
                    if (qspFunc(s, 'lover_pref', 'get_lip_change') === 'decrease') {
                      // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have lip reduction.
                      scene.text(`${((s as any).Xec || '')} tells you that you should have lip reduction.`);
                    } else {
                      // TODO-QSP: dynamic text: <<$Xec>> tells you that you should get lip injections.
                      scene.text(`${((s as any).Xec || '')} tells you that you should get lip injections.`);
                    }
                  } else {
                    if (qspFunc(s, 'lover_pref', 'check_tits') === 0  &&  ((s as any).titsDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> tells you your breasts are just not right.
                      scene.text(`${((s as any).npcdesc || '')} tells you your breasts are just not right.`);
                      if (((s as any).tits ?? 0) < ((s as any).titMin ?? 0)) {
                        // TODO-QSP: dynamic text: <<$Xec>> tells you that you should get breast implants.
                        scene.text(`${((s as any).Xec || '')} tells you that you should get breast implants.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$Xec>> tells you that you should have a breast reduction.
                        scene.text(`${((s as any).Xec || '')} tells you that you should have a breast reduction.`);
                      }
                    } else {
                      if (qspFunc(s, 'lover_pref', 'check_bmi') === 0  &&  ((s as any).figureDay ?? 0) <= ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)]) {
                        // TODO-QSP: dynamic text: <<$npcdesc>> tells you your body is just too thick.
                        scene.text(`${((s as any).npcdesc || '')} tells you your body is just too thick.`);
                        // TODO-QSP: dynamic text: <<$Xec>> offers to pay for you to get lyposuction.
                        scene.text(`${((s as any).Xec || '')} offers to pay for you to get lyposuction.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$npcdesc>> stares at you and must have gotten lost in your eyes .. "Actually, ...
                        scene.text(`${((s as any).npcdesc || '')} stares at you and must have gotten lost in your eyes .. "Actually, nevermind. Let's not do this today.."`);
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
          if (((s as any).randchan ?? 0) === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to a cafe.
            scene.text(`${((s as any).npcdesc || '')} suggests that you go to a cafe.`);
            scene.actions([
              { label: 'Sorry, but I need to leave', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $npcID, 0 - (1 + rand(-npc_gentle[$npcID], npc_rough[$npcID]))
  }, goto: ['lover_meet', 'go_home'] },
              { label: 'Go with <<$Xem>>', goto: ['lover_meet', 'go_cafe_date'] },
            ]);
          } else {
            if (((s as any).randchan ?? 0) === 2) {
              // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to a restaurant.
              scene.text(`${((s as any).npcdesc || '')} suggests that you go to a restaurant.`);
              scene.actions([
                { label: 'Sorry, but I need to leave', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $npcID, 0 - (1 + rand(-npc_gentle[$npcID], npc_rough[$npcID]))
  }, goto: ['lover_meet', 'go_home'] },
                { label: 'Go with <<$Xem>>', goto: ['lover_meet', 'go_restaurant_date'] },
              ]);
            } else {
              if (((s as any).randchan ?? 0) === 3) {
                // TODO-QSP: dynamic text: <<$npcdesc>> suggests that you go to the movies.
                scene.text(`${((s as any).npcdesc || '')} suggests that you go to the movies.`);
                scene.actions([
                  { label: 'Sorry, but I need to go', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $npcID, 0 - (1 + rand(-npc_gentle[$npcID], npc_rough[$npcID]))
  }, goto: ['lover_meet', 'go_home'] },
                  { label: 'Go with <<$Xem>>', goto: ['lover_meet', 'go_movie_date'] },
                ]);
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Agree with <<$Xem>> to change your <<$lover_meet["ChangeName"]>>', goto: ['lover_change', '<<$lover_meet["ChangeParamName"]>>'] },
    ]);
  } },
    { label: 'I want to do something today', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: "What do you want to do?", <<$Xe>> asks
    scene.text(`"What do you want to do?", ${((s as any).Xe || '')} asks`);
    if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: '"Let\'s go just relax in the stairwell and drink some beer."', goto: ['lover_meet', 'go_stairwell_date'] },
        { label: '"Let\'s take a walk in the park"', goto: ['lover_meet', 'go_park_date'] },
        { label: '"Let\'s go see a movie"', goto: ['lover_meet', 'go_movie_date'] },
        { label: '"Let\'s go to the cafe."', goto: ['lover_meet', 'go_cafe_date'] },
      ]);
    } else {
      if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if (((s as any).month ?? 0) > 5  &&  ((s as any).temper ?? 0) > 20  &&  ((s as any).sunWeather ?? 0) === 1) {
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
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}`);
    // TODO-QSP: dynamic text: <<$Xec>> looks hurt, but you insist it is for the best. You both say goodbye and...
    scene.text(`${((s as any).Xec || '')} looks hurt, but you insist it is for the best. You both say goodbye and part ways.`);
    if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
    } else {
      qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
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
    scene.actions([{ label: 'Continue', goto: ['parkM', 'start'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['parksvid', ''] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoMovieDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([{ label: 'Continue', goto: ['kinoM', 'start'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['kinosvid', ''] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoCafeDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([{ label: 'Continue', goto: ['kafeM', 'start'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['kafesvid', ''] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoRestaurantDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([{ label: 'Continue', goto: ['restoranM', 'start'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['kafesvid', ''] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGoCasinoDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([{ label: 'Continue', goto: ['kazinosvid', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterGoPoolHallDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([{ label: 'Continue', goto: ['billsvid', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterGoStairwellDate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([{ label: 'Continue', goto: ['podezdM', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterGoHome(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([{ label: 'Continue', goto: ['homes_properties', 'go_home'] }]);
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
