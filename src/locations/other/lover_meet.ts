import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0));
  (s as any).npc_meetday[String((s as any).npcID ?? 0)] = 0;
  (s as any).npc_dates[String((s as any).npcID ?? 0)] = ((s as any).npc_dates[String((s as any).npcID ?? 0)] ?? 0) + (1);
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
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
      (s as any).randchan = Math.floor(Math.random() * 3) + 0;
      if ((!((s as any).randchan ?? 0))) {
      } else {
        if (((s as any).randchan ?? 0) === 2) {
        }
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
          (s as any).randchan = Math.floor(Math.random() * 2) + 0;
          if ((!((s as any).randchan ?? 0))) {
          }
        }
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
            (s as any).randchan = Math.floor(Math.random() * 3) + 0;
            if ((!((s as any).randchan ?? 0))) {
            } else {
              if (((s as any).randchan ?? 0) === 2) {
              }
              if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
                (s as any).randchan = Math.floor(Math.random() * 2) + 0;
                if ((!((s as any).randchan ?? 0))) {
                }
              }
              if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 75) {
                (s as any).randchan = Math.floor(Math.random() * 3) + 0;
                if ((!((s as any).randchan ?? 0))) {
                } else {
                  if (((s as any).randchan ?? 0) === 2) {
                  }
                  if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
                    (s as any).randchan = Math.floor(Math.random() * 2) + 0;
                    if ((!((s as any).randchan ?? 0))) {
                    }
                  }
                }
                qspCall(s, 'lover_love', '');
                (s as any).didPushAway = 0;
                if (((s as any).pcs_skin ?? 0) < 20) {
                  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
                } else {
                  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
                  if (((s as any).pcs_skin ?? 0) < 60) {
                  } else {
                    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
                    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
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
                    if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                    }
                  }
                  // TODO-QSP: dynamic text: At the entrance <<$meetskin>> stands <<$npcdesc>>. <<$Xec>> comes over to you an...
                  scene.text(`At the entrance ${((s as any).meetskin ?? 0)} stands ${((s as any).npcdesc ?? 0)}. ${((s as any).Xec ?? 0)} comes over to you and ${((s as any).greet ?? 0)}`);
                  qspCall(s, 'lover_likes', 'hairPref');
                  qspCall(s, 'lover_likes', 'makePrefTmp');
                  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> looks like a timid and not very confident young <<$person>> <<$clom...
                    scene.text(`${((s as any).npcdesc ?? 0)} looks like a timid and not very confident young ${((s as any).person ?? 0)} ${((s as any).clom ?? 0)}`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> looks like an average young <<$person>> <<$clom>>
                    scene.text(`${((s as any).npcdesc ?? 0)} looks like an average young ${((s as any).person ?? 0)} ${((s as any).clom ?? 0)}`);
                    // TODO-QSP: dynamic text: <<$npcdesc>> looks like a cocky and brash young <<$person>> <<$clom>>
                    scene.text(`${((s as any).npcdesc ?? 0)} looks like a cocky and brash young ${((s as any).person ?? 0)} ${((s as any).clom ?? 0)}`);
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
                    scene.text(`${((s as any).npcdesc ?? 0)} gets close to you, and you can tell by ${((s as any).Xyr ?? 0)} body movements ${((s as any).Xe ?? 0)} wants to kiss you.`);
                    scene.actions([
                      { label: 'Kiss with tongue', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: You take the initiative and when <<$Xe>> opens <<$Xyr>> mouth you thrust your to...
    scene.text(`You take the initiative and when ${((s as any).Xe ?? 0)} opens ${((s as any).Xyr ?? 0)} mouth you thrust your tongue into ${((s as any).Xyr ?? 0)} mouth.`);
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
      scene.text(`${((s as any).npcdesc ?? 0)} takes a closer look at you and says, "What is wrong with your lips? They are very sore. Is that genital herpes? I better go, I do not want to get infected. I'm sorry, goodbye."`);
      qspCall(s, 'mood', 'lower', 'medium');
      scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: Normally this would have made <<$Xem>> feel uncomfortable, but as you pull away ...
        scene.text(`Normally this would have made ${((s as any).Xem ?? 0)} feel uncomfortable, but as you pull away ${((s as any).Xe ?? 0)} smiles and sighs contently.`);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        // TODO-QSP: dynamic text: <<$Xec>> goes with it a blink and in moments your tongues are intertwined.
        scene.text(`${((s as any).Xec ?? 0)} goes with it a blink and in moments your tongues are intertwined.`);
        // TODO-QSP: dynamic text: It seems as <<$npcdesc>> had the same idea, as <<$Xe>> pushes <<$Xyr>> tongue in...
        scene.text(`It seems as ${((s as any).npcdesc ?? 0)} had the same idea, as ${((s as any).Xe ?? 0)} pushes ${((s as any).Xyr ?? 0)} tongue into your mouth as much as you push into ${((s as any).Xyr ?? 0)}.`);
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
      }
      if ((((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        if (((s as any).cumloc ?? 0)[11] === 1) {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
            scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but underneath ${((s as any).Xyr ?? 0)} shy demener you know that it only turns ${((s as any).Xem ?? 0)} on.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
            scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but you know that it only turns ${((s as any).Xem ?? 0)} on more.`);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
            scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but by the bulge in ${((s as any).Xyr ?? 0)} pants you know it only turns ${((s as any).Xem ?? 0)} on.`);
          }
        } else {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
            scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but underneath ${((s as any).Xyr ?? 0)} shy demener you know that it only turns ${((s as any).Xem ?? 0)} on.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
            scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but you know that it only turns ${((s as any).Xem ?? 0)} on more.`);
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
            scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but by the bulge in ${((s as any).Xyr ?? 0)} pants you know it only turns ${((s as any).Xem ?? 0)} on.`);
          }
        }
      } else {
        if (((s as any).cumloc ?? 0)[11] === 1) {
          if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
            qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
          } else {
            qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
          }
          // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "H-Hey- <<$pcs_firstname>>! What the…?!...
          scene.text(`${((s as any).Xec ?? 0)} notices the sperm on your face, "H-Hey- ${((s as any).pcs_firstname ?? 0)}! What the…?! You dirty whore!", ${((s as any).Xe ?? 0)} then pushes you out of ${((s as any).Xyr ?? 0)} face. "We are through, I don't want to see your face again!`);
          qspCall(s, 'mood', 'lower', 'medium');
          scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "<<$pcs_firstname>>! What the…?! You dir...
          scene.text(`${((s as any).Xec ?? 0)} notices the sperm on your ass, "${((s as any).pcs_firstname ?? 0)}! What the…?! You dirty whore!", ${((s as any).Xe ?? 0)} then pushes you away. "We are through, I don't want to see your face again!`);
          qspCall(s, 'mood', 'lower', 'medium');
          scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss with lips', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: You press your <<$meetlip>> softly against <<$Xyr>>, and for a split second time...
    scene.text(`You press your ${((s as any).meetlip ?? 0)} softly against ${((s as any).Xyr ?? 0)}, and for a split second time seems to stop.`);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).cumloc ?? 0)[11] === 0  &&  (((s as any).cumloc ?? 0)[6] === 0  &&  ((s as any).cumloc ?? 0)[7] === 0)) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$Xec>> wraps arms around you, you both stay like this for at least a couple of...
        scene.text(`${((s as any).Xec ?? 0)} wraps arms around you, you both stay like this for at least a couple of seconds and as you pull away ${((s as any).Xe ?? 0)} looks into your eyes and smiles.`);
        qspCall(s, 'arousal', 'kiss', 5);
        qspCall(s, 'stat', '');
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$Xec>> kisses you back with such skill it turns you on.
        scene.text(`${((s as any).Xec ?? 0)} kisses you back with such skill it turns you on.`);
        qspCall(s, 'arousal', 'kiss', 5);
        qspCall(s, 'stat', '');
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$Xec>> kisses you back with such passion you feel a tingle within you.
        scene.text(`${((s as any).Xec ?? 0)} kisses you back with such passion you feel a tingle within you.`);
        qspCall(s, 'arousal', 'kiss', 5);
        qspCall(s, 'stat', '');
      }
    } else {
      if (((s as any).cumloc ?? 0)[11] === 1) {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but underneath ${((s as any).Xyr ?? 0)} shy demener you know that it only turns ${((s as any).Xem ?? 0)} on.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but you know that it only turns ${((s as any).Xem ?? 0)} on more.`);
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but by the bulge in ${((s as any).Xyr ?? 0)} pants you know it only turns ${((s as any).Xem ?? 0)} on.`);
        }
      } else {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but underneath ${((s as any).Xyr ?? 0)} shy demener you know that it only turns ${((s as any).Xem ?? 0)} on.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but you know that it only turns ${((s as any).Xem ?? 0)} on more.`);
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but by the bulge in ${((s as any).Xyr ?? 0)} pants you know it only turns ${((s as any).Xem ?? 0)} on.`);
        }
        if (((s as any).cumloc ?? 0)[12] === 1) {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but underneath <<$Xyr>> shy demene...
            scene.text(`${((s as any).Xec ?? 0)} can smell the scent of sperm on you, but underneath ${((s as any).Xyr ?? 0)} shy demener you know that it only turns ${((s as any).Xem ?? 0)} on.`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but you know that it only turns <<...
            scene.text(`${((s as any).Xec ?? 0)} can smell the scent of sperm on you, but you know that it only turns ${((s as any).Xem ?? 0)} on more.`);
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            // TODO-QSP: dynamic text: <<$Xec>> can smell the scent of sperm on you, but you know by the bulge in <<$Xy...
            scene.text(`${((s as any).Xec ?? 0)} can smell the scent of sperm on you, but you know by the bulge in ${((s as any).Xyr ?? 0)} pants it only turns ${((s as any).Xem ?? 0)} on more.`);
          }
        }
        if ((((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
          if (((s as any).cumloc ?? 0)[11] === 1) {
            if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
              qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
            } else {
              qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
            }
            // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "<<$pcs_firstname>>! What the…?! You di...
            scene.text(`${((s as any).Xec ?? 0)} notices the sperm on your face, "${((s as any).pcs_firstname ?? 0)}! What the…?! You dirty whore!", ${((s as any).Xe ?? 0)} then pushes you out of ${((s as any).Xyr ?? 0)} face. "We are through, I don't want to see your face again!`);
            qspCall(s, 'mood', 'lower', 'medium');
            scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
          } else {
            if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
              qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
            } else {
              qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
            }
            // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "<<$pcs_firstname>>! What the…?! You dir...
            scene.text(`${((s as any).Xec ?? 0)} notices the sperm on your ass, "${((s as any).pcs_firstname ?? 0)}! What the…?! You dirty whore!", ${((s as any).Xe ?? 0)} then pushes you away. "We are through, I don't want to see your face again!`);
            qspCall(s, 'mood', 'lower', 'medium');
            scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
          }
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
      ]);
    }
    scene.actions([
      { label: 'Hint for a kiss on the cheek', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: You make a cute pouty face and turn your cheek toward <<$npcdesc>>. <<$Xec>> und...
    scene.text(`You make a cute pouty face and turn your cheek toward ${((s as any).npcdesc ?? 0)}. ${((s as any).Xec ?? 0)} understands and though ${((s as any).Xe ?? 0)} wanted to kiss you, ${((s as any).Xe ?? 0)} settles with giving you a peck on the cheek`);
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).cumloc ?? 0)[11] === 0  &&  (((s as any).cumloc ?? 0)[6] === 0  &&  ((s as any).cumloc ?? 0)[7] === 0)) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$Xec>> gives you a soft kiss on the cheek, and you can tell <<$Xe>> finds this...
        scene.text(`${((s as any).Xec ?? 0)} gives you a soft kiss on the cheek, and you can tell ${((s as any).Xe ?? 0)} finds this act very cute.`);
        qspCall(s, 'arousal', 'kiss', 5);
        qspCall(s, 'stat', '');
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        // TODO-QSP: dynamic text: <<$Xec>> kisses you on the cheek and before <<$Xe>> pulls away you feel a quick ...
        scene.text(`${((s as any).Xec ?? 0)} kisses you on the cheek and before ${((s as any).Xe ?? 0)} pulls away you feel a quick kiss on the forehead.`);
        qspCall(s, 'arousal', 'kiss', 5);
        qspCall(s, 'stat', '');
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 0);
        // TODO-QSP: dynamic text: Though you can tell <<$Xe>> is a bit disappointed, <<$Xe>> gives you a kiss on t...
        scene.text(`Though you can tell ${((s as any).Xe ?? 0)} is a bit disappointed, ${((s as any).Xe ?? 0)} gives you a kiss on the cheek. As ${((s as any).Xe ?? 0)} pulls away ${((s as any).Xe ?? 0)} gives your ass a quick squeeze.`);
        qspCall(s, 'arousal', 'kiss', 5);
        qspCall(s, 'stat', '');
      }
    } else {
      if (((s as any).cumloc ?? 0)[11] === 1) {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but underneath <<$Xyr>> shy demener you kno...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but underneath ${((s as any).Xyr ?? 0)} shy demener you know that it only turns ${((s as any).Xem ?? 0)} on.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but you know that it only turns <<$Xem>> on...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but you know that it only turns ${((s as any).Xem ?? 0)} on more.`);
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your face, but by the bulge in <<$Xyr>> pants you know...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your face, but by the bulge in ${((s as any).Xyr ?? 0)} pants you know it only turns ${((s as any).Xem ?? 0)} on.`);
        }
      } else {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but underneath <<$Xyr>> shy demener you know...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but underneath ${((s as any).Xyr ?? 0)} shy demener you know that it only turns ${((s as any).Xem ?? 0)} on.`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but you know that it only turns <<$Xem>> on ...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but you know that it only turns ${((s as any).Xem ?? 0)} on more.`);
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          // TODO-QSP: dynamic text: <<$Xec>> can see sperm on your ass, but by the bulge in <<$Xyr>> pants you know ...
          scene.text(`${((s as any).Xec ?? 0)} can see sperm on your ass, but by the bulge in ${((s as any).Xyr ?? 0)} pants you know it only turns ${((s as any).Xem ?? 0)} on.`);
        }
      }
      if (((s as any).cumloc ?? 0)[12]+((s as any).cumloc ?? 0)[11]+((s as any).cumloc ?? 0)[6]+((s as any).cumloc ?? 0)[7] > 0  &&  ((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
        if (((s as any).cumloc ?? 0)[11] > 0) {
          if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
            qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
          } else {
            qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
          }
          // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your face, "H-Hey- <<$pcs_firstname>>! What the…?!...
          scene.text(`${((s as any).Xec ?? 0)} notices the sperm on your face, "H-Hey- ${((s as any).pcs_firstname ?? 0)}! What the…?! You dirty whore!", ${((s as any).Xe ?? 0)} then pushes you out of ${((s as any).Xyr ?? 0)} face. "We are through, I don't want to see your face again!`);
          qspCall(s, 'mood', 'lower', 'medium');
          scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
        } else {
          if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
            qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
          } else {
            qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
          }
          // TODO-QSP: dynamic text: <<$Xec>> notices the sperm on your ass, "H-Hey- <<$pcs_firstname>>! What the…?! ...
          scene.text(`${((s as any).Xec ?? 0)} notices the sperm on your ass, "H-Hey- ${((s as any).pcs_firstname ?? 0)}! What the…?! You dirty whore!", ${((s as any).Xe ?? 0)} then pushes you away. "We are through, I don't want to see your face again!`);
          qspCall(s, 'mood', 'lower', 'medium');
          scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
          if (((s as any).cumloc ?? 0)[12] > 0) {
            if (((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
              qspCall(s, 'lover', 'remove_boyfriend', ((s as any).npcID ?? 0));
            } else {
              qspCall(s, 'lover', 'remove_girlfriend', ((s as any).npcID ?? 0));
            }
            // TODO-QSP: dynamic text: <<$Xec>> realizes your mouth smells like sperm, "H-Hey- <<$pcs_firstname>>! What...
            scene.text(`${((s as any).Xec ?? 0)} realizes your mouth smells like sperm, "H-Hey- ${((s as any).pcs_firstname ?? 0)}! What the…?! You dirty whore!", ${((s as any).Xe ?? 0)} then pushes you away. "We are through, I don't want to see your face again!"`);
            qspCall(s, 'mood', 'lower', 'medium');
            scene.actions([{ label: 'Continue', goto: ['lover_meet', 'go_home'] }]);
          }
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
        ]);
      }
      scene.actions([
        { label: 'Push <<$Xyr>> face away', handler: (st: GameState) => {
    (s as any).didPushAway = 1;
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    // TODO-QSP: dynamic text: Maybe you had a bad day, maybe you don't want a kiss, you rudely push <<$Xyr>> f...
    scene.text(`Maybe you had a bad day, maybe you don't want a kiss, you rudely push ${((s as any).Xyr ?? 0)} face away, and by the looks of it, hurting ${((s as any).Xyr ?? 0)} feelings in the process.`);
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-4, -3));
      // TODO-QSP: dynamic text: <<$Xec>> stands there slightly embarrassed, and you can tell this hurt your rela...
      scene.text(`${((s as any).Xec ?? 0)} stands there slightly embarrassed, and you can tell this hurt your relationship a good amount.`);
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-3, -2));
      // TODO-QSP: dynamic text: <<$Xec>> looks at you slightly concerned, but backs off and gives you your space...
      scene.text(`${((s as any).Xec ?? 0)} looks at you slightly concerned, but backs off and gives you your space.`);
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-5));
      // TODO-QSP: dynamic text: <<$Xec>> begins to get angry, <<$Xe>> takes a deep breath and gives you space.
      scene.text(`${((s as any).Xec ?? 0)} begins to get angry, ${((s as any).Xe ?? 0)} takes a deep breath and gives you space.`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lover_meet', 'likes'
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
                    ]);
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

export const lover_meet: LocationDef = {
  name: 'lover_meet',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
