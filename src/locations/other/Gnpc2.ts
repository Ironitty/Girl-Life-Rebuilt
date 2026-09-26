import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).boydesc = (((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? 0);
  (s as any).din_gboy_end_to_disco = qspUntranslated(s, "{", { location: "Gnpc2" });
  (s as any).music_loop = 0;
  (s as any).discofirsttime = ((s as any).discofirsttime ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
    (s as any).gdeystboyrand = (Math.floor(Math.random() * 2) + 0);
    if ((!((s as any).gdeystboyrand ?? 0))) {
      scene.text(`${((s as any).boydesc ?? '')} invites you to his home.`);
      dynamicGoto(s, String((s as any).din_gboy_go_to_boyhome || ''));
      qspCall(s, 'willpower', 'sex', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (10);
  }, goto: ['pav_residential', ''] },
        ]);
      }
    } else {
      if (((s as any).gdeystboyrand ?? 0) === 1) {
        scene.text(`${((s as any).boydesc ?? '')} offers to accompany you home.`);
        scene.actions([
          { label: 'go home', goto: ['pav_residential', ''] },
        ]);
      }
    }
  } else {
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
      scene.text(`${((s as any).boydesc ?? '')} invites you to his home.`);
      dynamicGoto(s, String((s as any).din_gboy_go_to_boyhome || ''));
      qspCall(s, 'willpower', 'sex', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (10);
  }, goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  (s as any).din_gboy_go_to_disco = qspUntranslated(s, "{", { location: "Gnpc2" });
  (s as any).din_gboy_tits = qspUntranslated(s, "{", { location: "Gnpc2" });
  scene.text(`${((s as any).boydesc ?? '')} began to get your ${((s as any).titsize ?? '')} breasts out of the garment.`);
  qspCall(s, 'willpower', 'mast', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Remove his hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You remove his hands from your exposed breasts, and he looks puzzled, not sure why.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  (s as any).din_gboy_kiss = qspUntranslated(s, "{", { location: "Gnpc2" });
  (s as any).din_gboy_knee = qspUntranslated(s, "{", { location: "Gnpc2" });
  qspCall(s, 'willpower', 'sex', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Remove his hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You remove his hand from your knee and he shakes his head, puzzled what to do next.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 75) {
    qspCall(s, 'willpower', 'kiss', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Kiss him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'kiss', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'kiss', 5);
    ((st as any).kissBoyFrend = (st as any).kissBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).kissBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    scene.text(`You turn your head to the guy and your lips meet. ${((st as any).boydesc ?? '')} starts to passionately caress your body with his hands as he kisses you.`);
    dynamicGoto(st, String((st as any).din_gboy_tits || ''));
  } },
      ]);
    }
  }
  (s as any).din_gboy_go_to_boyhome = qspUntranslated(s, "{", { location: "Gnpc2" });
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).boydesc ?? '')}</b></center>`);
  scene.img(`images/characters/shared/headshots_main/big${((s as any).numnpc ?? '')}.jpg`);
  scene.text(`You're on a date with ${((s as any).boydesc ?? '')}. ${(((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')}`);
  if (((s as any).hour ?? 0) < 20) {
    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80) {
      scene.text(`${((s as any).boydesc ?? '')} offered to take you home.`);
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
        (s as any).gdeystboyrand = (Math.floor(Math.random() * 2) + 0);
        if ((!((s as any).gdeystboyrand ?? 0))) {
          scene.text(`${((s as any).boydesc ?? '')} suggested that you two go to his home.`);
          dynamicGoto(s, String((s as any).din_gboy_go_to_boyhome || ''));
          qspCall(s, 'willpower', 'sex', 'resist', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse to go to his home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse to go to his home', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (10);
  }, goto: ['pav_residential', ''] },
            ]);
          }
        } else {
          if (((s as any).gdeystboyrand ?? 0) === 1) {
            scene.text(`${((s as any).boydesc ?? '')} offered to take you home.`);
            scene.actions([
              { label: 'Go home', goto: ['pav_residential', ''] },
            ]);
          }
        }
      } else {
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
          scene.text(`${((s as any).boydesc ?? '')} suggested that you two go to his home.`);
          dynamicGoto(s, String((s as any).din_gboy_go_to_boyhome || ''));
          qspCall(s, 'willpower', 'sex', 'resist', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse to go to his home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse to go to his home', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (10);
  }, goto: ['pav_residential', ''] },
            ]);
          }
        }
      }
    }
  } else {
    if (((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23) {
      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80) {
        scene.text(`${((s as any).boydesc ?? '')} offered to take you home.`);
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      } else {
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
          (s as any).tipgbrand = (Math.floor(Math.random() * 2) + 0);
          if ((!((s as any).tipgbrand ?? 0))) {
            scene.text(`${((s as any).boydesc ?? '')} suggested going to the disco.`);
            dynamicGoto(s, String((s as any).din_gboy_go_to_disco || ''));
            qspCall(s, 'willpower', 'misc', 'resist', 'easy');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Refuse and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Refuse and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (10);
  }, goto: ['pav_residential', ''] },
              ]);
            }
          } else {
            if (((s as any).tipgbrand ?? 0) === 1) {
              scene.text(`${((s as any).boydesc ?? '')} offered to go to his home.`);
              dynamicGoto(s, String((s as any).din_gboy_go_to_boyhome || ''));
              scene.actions([
                { label: 'Refuse and go home', handler: (st: GameState) => {
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (10);
  }, goto: ['pav_residential', ''] },
              ]);
            }
          }
        } else {
          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
            (s as any).gdeystboyrand = (Math.floor(Math.random() * 2) + 0);
            if ((!((s as any).gdeystboyrand ?? 0))) {
              scene.text(`${((s as any).boydesc ?? '')} offered to go to his home.`);
              dynamicGoto(s, String((s as any).din_gboy_go_to_boyhome || ''));
              scene.actions([
                { label: 'Refuse and go home', handler: (st: GameState) => {
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (10);
  }, goto: ['pav_residential', ''] },
              ]);
            } else {
              if (((s as any).gdeystboyrand ?? 0) === 1) {
                scene.text(`${((s as any).boydesc ?? '')} offered to go to the disco.`);
                dynamicGoto(s, String((s as any).din_gboy_go_to_disco || ''));
                qspCall(s, 'willpower', 'misc', 'resist', 'easy');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Refuse and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Refuse and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (10);
  }, goto: ['pav_residential', ''] },
                  ]);
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).hour ?? 0) >= 23) {
        scene.text(`${((s as any).boydesc ?? '')} offered to take you home.`);
        scene.actions([
          { label: 'go home', goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Go to the club', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (st as any).track_loop = 'sound/komb.mp3';
      (st as any).volume = 100;
      (st as any).music_loop = 1;
    }
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    if (((st as any).pcs_danc ?? 0) < 50  &&  ((st as any).pcs_agil ?? 0) >= ((st as any).pcs_danc ?? 0)) {
      qspCall(st, 'exp_gain', 'danc', 1);
    }
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    (st as any).diskoIvrand = (Math.floor(Math.random() * 101) + 0);
    if ((!((st as any).discofirsttime ?? 0))) {
      (st as any).diskoIvrand = 0;
    }
    (st as any).clubDescription = '<h1><center><b><font color="maroon">Inside the club</font></b></center></h1><center><img ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/community/disco/club.jpg"></center><br />';
    scene.text(`You accompany ${((st as any).boydesc ?? '')} and when you reach the club he pays the entrance fee and you both walk in. Together with your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} you head to the dance floor and start dancing.`);
    if (((st as any).diskoIvrand ?? 0) >= 80) {
      (st as any).diskoIvTiperand = (Math.floor(Math.random() * 2) + 0);
      if ((!((st as any).diskoIvTiperand ?? 0))) {
        scene.text(`While you are dancing with ${((st as any).boydesc ?? '')} a drunk kid in sweatpants and sweatshirt approaches.`);
        qspCall(st, 'npcgeneratec', '0', 'Gopnik', ((st as any).age ?? 0) + (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1))));
        qspCall(st, 'boyStat', '$npclastgenerated', 1);
        if (((st as any).fame ?? 0)?.['pav_slut'] < 150) {
          scene.text(`The Gopnik pushes ${((st as any).boydesc ?? '')} to the side and grabs you by the waist. "Let's dance, babe!"`);
          qspCall(st, 'willpower', 'misc', 'resist', 'easy');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).tiprand = (Math.floor(Math.random() * 101) + 0);
    scene.text(`You escape from the clutches of the Gopnik. ${((st as any).boydesc ?? '')} pushes the drunk kid away who immediately goes to his Gopnik buddies who were standing nearby. It didn't take them long to approach your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} and an argument starts. The Gopnik raises his fists, showing your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} that he wants to fight.`);
    if (((st as any).tiprand ?? 0) <= 70) {
      scene.text(`Fortunately, ${((st as any).boydesc ?? '')} manages to win the fight verbally, accusing the Gopnik of grabbing you, his girlfriend. But the evening was spoiled and finally ${((st as any).boydesc ?? '')} suggests that it would be better if you both head home.`);
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      if (((st as any).tiprand ?? 0) <= 85) {
        ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (20);
        scene.text(`The Gopnik quickly pounces on your guy and punches him in the face. It seems that ${((st as any).boydesc ?? '')} doesn't stand a chance against the three Gopniks and before he gets completely beaten up he offers all his money to the angry Gopniks and apologizes repeatedly before all of them. You quickly leave the dance floor and ${((st as any).boydesc ?? '')} suggests that you both head home.`);
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.text(`The discussion escalates quickly into a fight and soon the Gopniks charge at your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} in the middle of the club.`);
        (st as any).bfDiscoBadEnd = 'The Gopniks meanwhile drag ' + ((st as any).boydesc ?? 0) + ' into the streets, where they beat him some more and steal all his money. Then they take off his shoes and throw him into the bushes.<br />Once you get back to your feet you start looking for your ' + (((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0) + ' and find him outside the club, still lying in the bushes. You help him up and bring him home. His face is covered in blood and bruises everywhere.';
        (st as any).stumble = 'You stumble and come crashing down to the floor, hitting your head hard.';
        (st as any).looseTooth = 'You are dazed, bells are ringing in your head and you realize that you are lying on the floor. You start to feel severe pain on your jaw and your mouth is full of blood. You spit on the floor and see that they <b>knocked out one of your teeth</b>.';
        qspCall(st, 'willpower', 'skill_base', 'stren', 'force', 'medium');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Separate them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Separate them', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    if (((st as any).pcs_stren ?? 0) < 60) {
      qspCall(st, 'mood', 'lower', 'medium');
      qspCall(st, 'pain', '6', 'head', 'hit');
      qspCall(st, 'stat', '');
      scene.text('You try to push the Gopnik, but someone pushes you roughly away from the fight.');
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('You push back the Gopnik with all your strength and he stumbles backwards, hitting his head on the floor. But the second Gopnik turns to you and swings his fist towards your face.');
      if (((st as any).pcs_agil ?? 0) < 60) {
        qspCall(st, 'mood', 'lower', 'large');
        (st as any).pcs_missing_teeth = ((st as any).pcs_missing_teeth ?? 0) + (1);
        qspCall(st, 'pain', '8', 'mouth', 'hit');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.text('You react just in time and quickly move your head to the side barely avoiding his punch.');
        (st as any).discoScratch1 = 'You dig your nails into the punk\'s face and begin to gouge and rip into it. The Gopnik is in so much pain that he stops attacking ' + ((st as any).boydesc ?? 0) + '. Your ' + (((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0) + ' meanwhile topples one of the Gopniks and then manages to punch a second, again and again. The Gopnik falls to the floor like a sack.';
        (st as any).discoScratch2 = 'The Gopnik with the scratched face seems to be recovering already because he tries to pounce on your ' + (((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0) + ' again. Luckily he fails miserably with all this blood flooding his eyes from your handiwork. ' + ((st as any).boydesc ?? 0) + ' punches him in the face knocking him down on his ass. In the meantime, the previous Gopnik got back up. "Okay, motherfucker, we\'ll leave for now. We\'ll get you and your bitch when you least expect it!"';
        (st as any).discoScratch3 = '' + ((st as any).boydesc ?? 0) + ' puts his arm around your shoulders and you both leave the club.';
        scene.actions([
          { label: 'Punch him in his face', handler: (st: GameState) => {
    if (((st as any).pcs_agil ?? 0) >= 40) {
      qspCall(st, 'mood', 'lower', 'large');
      (st as any).pcs_missing_teeth = ((st as any).pcs_missing_teeth ?? 0) + (1);
      qspCall(st, 'pain', '8', 'mouth', 'hit');
      qspCall(st, 'pain', '6', 'face', 'hit');
      qspCall(st, 'pain', '6', 'nose', 'hit');
      qspCall(st, 'pain', '6', 'lips', 'hit');
      qspCall(st, 'stat', '');
      scene.text('You swing at the Gopnik and hit him right on the nose. He staggers briefly and then yells angrily at you, "Oh, you bitch!". He charges quickly at you and then a barrage of punches comes raining down on you.');
      scene.text(String((st as any).looseTooth ?? ''));
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      qspCall(st, 'mood', 'lower', 'medium');
      qspCall(st, 'pain', '6', 'head', 'hit');
      qspCall(st, 'stat', '');
      scene.text('You try to hit the hooligan with a punch to the face but your blow is too slow. The Gopnik dodges your weak attempt and pushes you roughly away.');
      scene.text(String((st as any).stumble ?? ''));
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    }
  } },
          { label: 'Kick him in his face', handler: (st: GameState) => {
    if (((st as any).pcs_agil ?? 0) >= 60) {
      scene.text('You manage to give the punk a good kick in his face. His head swings back violently and then he grabs his face. "Shit! Fucking bitch, you broke my nose! Now I will break your whole fucking face!"');
      scene.text(`At this point ${((st as any).boydesc ?? '')} comes from the side and punches the hooligan hard on his already broken nose. The poor guy flies backwards and comes crashing down to the floor. Two other Gopniks used the distraction to grab onto your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} and try to pin his arms.`);
      scene.actions([
        { label: 'Scratch one of the Gopnik\'s face', handler: (st: GameState) => {
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (5);
    ((st as any).GopWin = (st as any).GopWin ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).GopWin[String((st as any).numnpc ?? 0)] ?? 0) + (1);
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('You try to kick the hooligan in his face but he is faster than you and manages to shove you away before you even got your leg up.');
      qspCall(st, 'mood', 'lower', 'medium');
      qspCall(st, 'pain', '6', 'head', 'hit');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    }
  } },
          { label: 'Kick him in his balls', handler: (st: GameState) => {
    (st as any).badKick = 'You try to kick the hooligan between his legs but he saw it coming. He blocks your kick and shoves you roughly away.';
    if (((st as any).pcs_agil ?? 0) >= 70) {
      (st as any).bollrand = (Math.floor(Math.random() * 2) + 0);
      if ((!((st as any).bollrand ?? 0))) {
        scene.text(`You kick your foot directly in the Gopnick's crotch, hitting his balls hard. He flops down on his knees howling and clutching his crotch. Two Gopniks grab your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} and try to hold his arms.`);
        scene.actions([
          { label: 'Scratch one of the Gopnik\'s face', handler: (st: GameState) => {
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (5);
    ((st as any).GopWin = (st as any).GopWin ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).GopWin[String((st as any).numnpc ?? 0)] ?? 0) + (1);
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      } else {
        qspCall(st, 'mood', 'lower', 'medium');
        qspCall(st, 'pain', '6', 'head', 'hit');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      }
    } else {
      qspCall(st, 'mood', 'lower', 'medium');
      qspCall(st, 'pain', '6', 'head', 'hit');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    }
  } },
        ]);
      }
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Watch them fight', handler: (st: GameState) => {
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (20);
    qspCall(st, 'stat', '');
    scene.text(`${((st as any).boydesc ?? '')} can't escape the attacks of the three Gopniks and soon falls under a barrage of punches. The Gopniks drag him into the streets where they steal all his money, take off his shoes, and throw him into the bushes.`);
    scene.text(`Once they left, you help your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} to his feet and manage to get him back home. His face is covered in blood and bruises everywhere.`);
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Dance with the Gopnik', handler: (st: GameState) => {
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    (st as any).DPtipe = 2;
    qspCall(st, 'stat', '');
    scene.text(`You decide to dance with the Gopnik. For a moment ${((st as any).boydesc ?? '')} is staring at you in disbelieve, then he approaches the guy and grabs his shoulder. "Hey you! That's my girl!" Suddenly a couple of Gopniks grab your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} and keep him from interrupting the hooligan dancing with you.`);
    scene.text(`After a few minutes ${((st as any).boydesc ?? '')} stops struggling and the Gopniks let him free. He curses and glares angrily at you, while you are still dancing with the Gopnik, and then stomps out of the club.`);
    scene.text(`The Gopnik dancing with you is grinning and suggests that you should dump your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}. His hands wander down to your ass as he offers you to go outside and have some fun.`);
    scene.actions([
      { label: 'Have fun', handler: (st: GameState) => {
    qspCall(st, 'boyStat', '$npclastgenerated');
    scene.text(`Your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} is unlikely to come back, so why not have some fun with this guy? You give him a slinky smile, grab his hands and move towards the exit.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_disco_sex', 'outside'] },
    ]);
  } },
      { label: 'Leave alone', handler: (st: GameState) => {
    scene.text('You have already done enough damage. You tell him that you need to use the restroom, untangle yourself from his clutches and then move towards the exit.');
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
          qspCall(st, 'mood', 'lower', 'small');
          qspCall(st, 'pain', '4', 'cheeks', 'slap');
          qspCall(st, 'stat', '');
          scene.text(`The Gopnik takes one look at you and then starts laughing, "Listen, buddy. Why are you wasting your time dancing with her? ${((st as any).pcs_nickname ?? '')} is a ${((st as any).gnikname ?? '')}. Just take her into the bushes out back, but don't hurt her mouth. That sweet set of lips can really smack when sucking dick." You blush scarlet red from the Gopnik's words, deeply embarrassed. ${((st as any).boydesc ?? '')} rushes up to the guy, "What did you say? Come again!" But the hooligan just went back to join his friends. "Listen, boy, no need to argue. Everyone in the neighborhood knows she is a ${((st as any).gnikname ?? '')}." ${((st as any).boydesc ?? '')} looks at you in surprise. "Is this true?" The boys laugh "Well, everyone except you." ${((st as any).boydesc ?? '')} glares angrily at you and then he slaps you hard across the face. "Go fuck yourself, slut!" He abruptly leaves the dance floor.`);
          scene.actions([
            { label: 'Rub your cheek', goto: ['pav_disco', ''] },
          ]);
        }
      } else {
        if (((st as any).diskoIvTiperand ?? 0) === 1) {
          scene.text(`You enjoy dancing with your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}. After a while ${((st as any).boydesc ?? '')} says that he could do with a beer and invites you to a drink.`);
          qspCall(st, 'willpower', 'drink', 'resist', 'easy');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Decline his offer and keep dancing', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Decline his offer and keep dancing', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    if (((st as any).pcs_danc ?? 0) < 50  &&  ((st as any).pcs_agil ?? 0) >= ((st as any).pcs_danc ?? 0)) {
      qspCall(st, 'exp_gain', 'danc', 1);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`Your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} gets himself a beer at the bar and in the meantime you continue to dance.`);
    if (((st as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.text(`Someone walks up to you "Hey, I've been watching you having fun with your boyfriend here. He still does't know that you are a ${((st as any).gnikname ?? '')}? Maybe I should tell him?"`);
      (st as any).bfBreakup = 'You tell the guy to go to hell and he walks away with a sullen look on his face. At this point, ' + ((st as any).boydesc ?? 0) + ' comes back and asks, "What did that guy want from you?" You quickly lie, "He wanted to dance with me, but I turned him down." Unfortunately, the guy comes back and pulls your ' + (((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0) + ' to the side. After a while, ' + ((st as any).boydesc ?? 0) + ' returns and says "We\'re through. Based on the shit I was just told, I won\'t waste another minute on the likes of a whore like you!"';
      qspCall(st, 'willpower', 'misc', 'self');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him to piss off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him to piss off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'mood', 'lower', 'small');
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch him leave', goto: ['pav_disco', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Beg him not to tell', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`You plead with the guy not to say anything to your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}. He chuckles, "Well, if you keep your mouth closed sucking on my dick, I'll keep my mouth closed as well and won't tell him."`);
    qspCall(st, 'willpower', 'bj', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him to piss off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to piss off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'mood', 'lower', 'small');
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch him leave', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'Gopnik', ((st as any).age ?? 0) + (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1))));
    ((st as any).boy = (st as any).boy ?? {})[1] = ((st as any).boy ?? 0);
    qspCall(st, 'boyStat', '$npclastgenerated');
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Men\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/bathroom_entrance.jpg');
    scene.text('You agree to the blowjob and the guy leads you to the toilets. You start feeling depressed. The toilets in the club are something of a thoroughfare, someone smoking here, someone else defecating in booths over there, with little privacy. The guy walks with you into the men\'s room. When you open the door, you see some drunk guys standing in a cloud of smoke. In one of the booths you hear the sound of someone puking.');
    scene.text('The boys look at you bewildered, "Did you make a mistake? This is the men\'s room." The guy who brought you smiles "Nah, She\'s with me." He turns to you, "Okay, cocksucker, get your mouth working." You look at the other guys and ask, "What, right here?" The Boys laugh, "C\'mon. You\'re not embarrassed, are you?"');
    qspCall(st, 'willpower', 'bj', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'boyStat', '$boy[1]');
    qspCall(st, 'stat', '');
    qspCall(st, 'mood', 'lower', 'small');
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'stat', '');
    scene.text(`You angrily spit at him, "Go fuck yourself, asshole!", and storm out of the restroom. Just as you reach the dance floor you see that ${((st as any).boydesc ?? '')} is returning from the bar. You quickly grab his hands and begin dancing with him, still a little furious about the incident.`);
    scene.text(`${((st as any).boydesc ?? '')} notices your bad mood and asks, "What's wrong, ${((st as any).pcs_nickname ?? '')}?". At this moment, you see the guy from the restrooms returning. He walks up to your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} and pulls him to the side. After a while, ${((st as any).boydesc ?? '')} returns and says "We're through. Based on the shit I was just told, I won't waste another minute on the likes of a whore like you!"`);
    scene.actions([
      { label: 'Watch him leave', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck his cock', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    qspCall(st, 'stat', '');
    scene.text('<center><b>Men\'s room</b></center>');
    scene.img('images/shared/sex/blowjob/public.jpg');
    scene.text(`You squat in front of the guy and unbutton his pants to pull out his stiff dick. The other boys continue smoking and watch the scene. You begin to lick the purple head of his swollen cock and then you open your ${(((st as any).pc_desc ?? 0)?.['lips'] ?? '')} lips and take the cock in your mouth. The Boys start laughing and commenting at what they see, "Look how she smacks those lips." Another echoed, "Where did you find such a cocksucker?" Unfortunately, there's someone who knows you. "Hey that's ${((st as any).pcs_nickname ?? '')} ${((st as any).pcs_lastname ?? '')}. Hot Damn!"`);
    scene.text('You blush and your face burns with shame, sucking this dick in front of other guys. Finally the guy starts to cum in your mouth and you try as quickly as possible to swallow his warm sperm. When his cock finally goes limp he tucks it back in his pants. You get up from the floor and begin to wipe your mouth, knowing it now smells like cum. One of the guys chuckled, "Great blowjob, I wouldn\'t mind one myself."');
    qspCall(st, 'boyStat', '$boy[1]');
    scene.actions([
      { label: 'Slip out of the restroom', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`You try to ignore the guys as you slip out of the restroom and walk back to the dance floor. ${((st as any).boydesc ?? '')} has been looking for you. He comes up to you and asks, "Where have you been? I looked everywhere for you." You say the first thing that comes to your mind, "I went to the toilet." ${((st as any).boydesc ?? '')} asks "Why are you wiping your mouth?"`);
    qspCall(st, 'willpower', 'misc', 'force', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suggest to leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suggest to leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    scene.text(`You suggest to your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} to leave the club. ${((st as any).boydesc ?? '')} shrugs and you both walk out to the exit.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'pain', '3', 'cheeks', 'slap');
    qspCall(st, 'stat', '');
    scene.text(`You continue to dance with your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}. A few minutes pass and then you see the guys that watched your whole blowjob scene coming out of the toilet. They also see you and guffaw, noisily discussing something. ${((st as any).boydesc ?? '')} looks at them puzzled, "What's with them?" The boys shout to him, "While you were wandering around the place, your girlfriend was in the toilet sucking on a dick!" ${((st as any).boydesc ?? '')} comes up to them, "Are you crazy?"`);
    scene.text(`The Boys start to tell him how you just sucked off a guy in front of them. ${((st as any).boydesc ?? '')} rushes back over to you and slaps you across the face "Get the fuck out, slut! I don't want to see you ever again!"`);
    scene.actions([
      { label: 'Leave', goto: ['pav_commcenter', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text(`While ${((st as any).boydesc ?? '')} went for a beer another guy comes up to you and asks for a dance.`);
      qspCall(st, 'willpower', 'misc', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (5);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.text(`You politely refuse his invitation. The guy looks dejected but leaves without making any fuss. A few minutes later ${((st as any).boydesc ?? '')} returns to the dance floor, a beer in his hand. You have a fun time dancing with your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} and soon after he finishes his beer he suggests to leave.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (20);
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'stat', '');
    scene.text(`You start to dance with him. A few minutes later ${((st as any).boydesc ?? '')} comes up to you and pulls you by the hand, dragging you away from the other guy. "What the fuck is wrong with you? I leave for a minute, and you're already dancing with someone else!" He angrily leaves the club.`);
    scene.actions([
      { label: 'Stand there and watch him leave', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Have a drink with him', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.text(`You head to the bar and ${((st as any).boydesc ?? '')} orders your drinks. When you finally get them you move to the outdoor area and find a secluded place to enjoy your drinks.`);
    qspCall(st, 'willpower', 'kiss', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Kiss', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'kiss', 5);
    ((st as any).kissBoyFrend = (st as any).kissBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).kissBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    scene.text(`You tenderly embrace ${((st as any).boydesc ?? '')} and began to kiss his lips.`);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] > 0) {
      scene.text(`${((st as any).boydesc ?? '')} whispered in your ear, "${((st as any).pcs_nickname ?? '')} want to do something right here?"`);
      scene.actions([
        { label: 'Jerk guy', handler: (st: GameState) => {
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    (st as any).dick = (((st as any).dickBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0);
    qspCall(st, 'arousal', 'hj', 5);
    (st as any).hja = ((st as any).hja ?? 0) + (1);
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 6) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You got his hard and hot cock out of his pants and wrapped your hand around it. You started kissing him at the same time you masturbate his penis. Finally the guy groaned and you watch his cock shoot off his sperm.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
        { label: 'Take by mouth', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    (st as any).bja = ((st as any).bja ?? 0) + (1);
    (st as any).dick = (((st as any).dickBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksucker.jpg');
    scene.text('You squatted in front of him and bring your face to his cock.');
    qspCall(st, 'dinSex', 'bj_random');
    scene.text(`Soon ${((st as any).boydesc ?? '')} groaned "${((st as any).pcs_nickname ?? '')}, I'm going to come."`);
    scene.actions([
      { label: 'Suck on', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum49.jpg');
    qspCall(st, 'dinsex', 'bj_swallow_random');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
      { label: 'Remove from the mouth', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial21.jpg');
    scene.text('You remove his member from your mouth just as a stream of hot sperm hits your face, then another and another and finally he stopped dumping his thick cum on your face.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You feel your guy\'s hands caress your breasts.');
      qspCall(st, 'arousal', 'foreplay', (-1));
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
        { label: 'Let him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
    scene.text(`${((st as any).boydesc ?? '')} pulls your ${((st as any).titsize ?? '')} breast out of your top and begins to knead your boobs and kiss on them. He takes your hand and puts it against his groin, and you feel that he's got a hard cock.`);
    qspCall(st, 'willpower', 'mast', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    scene.text('You remove your hand from his pants and then your guy sticks his hand into your pants, and you feel his fingers caress your wet pussy.');
    qspCall(st, 'willpower', 'mast', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You take his hand out of your pants, and he shakes his head, not understanding.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal_finger', 5);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    scene.text(`You cease to resist and just relax feeling the pleasant warmth as your guy caresses your pussy. ${((st as any).boydesc ?? '')} begins to undress you and soon you are naked.`);
    qspCall(st, 'willpower', 'anal', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).anala = ((st as any).anala ?? 0) + (1);
    qspCall(st, 'boyStat', '', (((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0));
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img(`images/shared/sex/anal/doggy/anal${(Math.floor(Math.random() * 13) + 0)}.mp4`);
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    scene.text('Finally the guy finishes and you feel something warm fill your ass.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Surrender', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).sexa = ((st as any).sexa ?? 0) + (1);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'boyStat', '', (((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0));
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    scene.text('He quickly takes off his clothes and lays down on top of you.');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    qspCall(st, 'dinsex', 'sexcum');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Caress his cock through his pants', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/grab/cock.jpg');
    scene.text('You start stroking his crotch, feeling his dick bulging as it expands in his pants.');
    if (((st as any).pcs_horny ?? 0) < 80) {
      scene.actions([
        { label: 'Remove hands', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You remove his hands from your exposed breasts, and he looks puzzled, not sure why.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go into your guy\'s pants', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'hj', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/grab/cock2.jpg');
    scene.text('You slide your hand into his pants and wrap your fingers around his hard cock.');
    qspCall(st, 'willpower', 'hj', 'self', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Jerk him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Jerk him off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'hj', 5);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    (st as any).dick = (((st as any).dickBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0);
    (st as any).hja = ((st as any).hja ?? 0) + (1);
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 6) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You got his hard and hot cock out of his pants and hold it in your hand. You start kissing him at the same time you stroke his penis. Finally the guy lets out a groan and you watch as loads of cum shoot out of his cock.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take by mouth', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    (st as any).bja = ((st as any).bja ?? 0) + (1);
    (st as any).dick = (((st as any).dickBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksucker.jpg');
    scene.text('You squat in front of your guy and bring your face to his cock.');
    qspCall(st, 'dinSex', 'bj_random');
    scene.text(`Soon ${((st as any).boydesc ?? '')} groaned "${((st as any).pcs_nickname ?? '')}, I'm going to come."`);
    scene.actions([
      { label: 'Suck on', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    qspCall(st, 'stat', '');
    scene.img(`images/shared/sex/public/c0${(Math.floor(Math.random() * 11) + 0)}.mp4`);
    qspCall(st, 'dinsex', 'bj_swallow_random');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
      { label: 'Remove it from the mouth', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial21.jpg');
    scene.text('You remove his member from your mouth and then a stream of hot sperm hits your face, then another and another and finally your guy stops shooting his thick cum on your face.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave the club', handler: (st: GameState) => {
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    ]);
  } },
          ]);
        } else {
          if (((st as any).diskoIvTiperand ?? 0) === 2) {
          } else {
            if (((st as any).diskoIvTiperand ?? 0) === 3) {
            }
          }
        }
      }
      return;
    }
    if (((st as any).kissBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] > 0) {
    } else {
      if (((st as any).kissBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      }
    }
    dynamicGoto(st, String((st as any).din_gboy_end_to_disco || ''));
  } },
    { label: 'Let him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
    scene.text(`${((st as any).boydesc ?? '')} pulls your ${((st as any).titsize ?? '')} breasts outside and begins to knead your breasts and kiss them. Guy takes your hand and puts it on the groin, you feel that he's got a hard cock.`);
    qspCall(st, 'willpower', 'mast', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    scene.text('You remove your hand from his pants and he immediately reaches his hand into your pants, as you feel his fingers caress your wet pussy.');
    qspCall(st, 'willpower', 'mast', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You pull his hand from your pussy, and he just looks at you, slightly confused.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal_finger', 5);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    scene.text(`You cease to resist and just relax feeling that pleasant warmth of a guy caressing your pussy with his fingers. ${((st as any).boydesc ?? '')} begins to undress you and soon you are completely naked.`);
    qspCall(st, 'willpower', 'anal', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'boyStat', '', (((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0));
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/anal/doggy/anal31.jpg');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinSex', 'boy_wants_anal', 'lubri\' & gs \'dinsex', 'analsex');
    scene.text('Finally he reaches his peak and you feel something warm filling your ass.');
    scene.actions([
      { label: 'Leave.', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Surrender', handler: (st: GameState) => {
    (st as any).sexa = ((st as any).sexa ?? 0) + (1);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'boyStat', '', (((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0));
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    scene.text('He quickly takes off his clothes and lays down on top of you.');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 15);
    qspCall(st, 'dinsex', 'sexcum');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Caress his cock through his pants', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/grab/cock.jpg');
    scene.text('You start stroking your guy\'s crotch, feeling the hardness of his member pressing against the cloth of his trousers.');
    qspCall(st, 'willpower', 'mast', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You take his hand out of your pants, and he shakes his head, not understanding.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Going into the guy\'s pants', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'hj', 3);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/grab/cock2.jpg');
    scene.text('You slide your hand inside his pants, enfolding your fingers around his hard hot cock.');
    qspCall(st, 'willpower', 'hj', 'self', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Jerk him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Jerk him off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'hj', 5);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    (st as any).dick = (((st as any).dickBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0);
    (st as any).hja = ((st as any).hja ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You pull his hard and hot cock out of his pants and wrap your hand around it. You start kissing him while stroking his penis. Finally the guy groans and you watch as loads of his sperm erupt again and again from his cock.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take by mouth', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    (st as any).bja = ((st as any).bja ?? 0) + (1);
    (st as any).dick = (((st as any).dickBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksucker.jpg');
    scene.text('You squat in front of your guy and bring your face to his cock.');
    qspCall(st, 'dinSex', 'bj_random');
    scene.text(`Soon ${((st as any).boydesc ?? '')} groaned "${((st as any).pcs_nickname ?? '')}, I'm going to come."`);
    qspCall(st, 'willpower', 'anal', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).anala = ((st as any).anala ?? 0) + (1);
    qspCall(st, 'boyStat', '', (((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0));
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/anal/doggy/anal31.jpg');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    scene.text('Finally he reaches his peak and you feel something warm filling your ass.');
    scene.actions([
      { label: 'Leave.', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck on', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum49.jpg');
    qspCall(st, 'dinsex', 'bj_swallow_random');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Remove it from your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial21.jpg');
    scene.text('You remove his member from your mouth just as a stream of hot sperm hits you in the face, then another and another until he eventually finished coating your face with his cum.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Surrender', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).sexa = ((st as any).sexa ?? 0) + (1);
    if (((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] === 0) {
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 1;
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'boyStat', '', (((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? 0));
    qspCall(st, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 0));
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    scene.text('He quickly takes off his clothes and lays down on top of you.');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    qspCall(st, 'dinsex', 'sexcum');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Kiss', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 5);
    ((st as any).kissBoyFrend = (st as any).kissBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).kissBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    scene.text(`You turn your head to the guy and your lips meet. ${((st as any).boydesc ?? '')} starts to passionately caress your body with his hands as he kisses you.`);
    dynamicGoto(st, String((st as any).din_gboy_tits || ''));
  } },
    { label: 'Pretend that nothing is happening', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/boyfriend/groped.jpg');
    scene.text(`You pretend not to notice his hand and ${((st as any).boydesc ?? '')} doesn't hesitate to pull your thigh closer to his. ${((st as any).boydesc ?? '')} tilted towards your face trying to kiss you.`);
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You remove his hand from your knee and he shakes his head, puzzled what to do next.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    dynamicGoto(st, String((st as any).din_gboy_kiss || ''));
  } },
    { label: 'Go to his home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text(`${((st as any).boydesc ?? '')} takes you to his home. You came to a small two-story house, in which there are several apartments and ${((st as any).boydesc ?? '')} guides you to his apartment. He opened the door with a key and lets you inside.`);
    (st as any).boyhouserand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).boyhouserand ?? 0))) {
      scene.text('There was no one else at home and he suggested you go to the recreation room and watch a movie.');
      scene.actions([
        { label: 'Watch Movie', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.text(`You settled comfortably on the sofa and ${((st as any).boydesc ?? '')} rummages in the drawers, finds a movie, and puts it in the VCR and starts it, then sits down next to you.`);
    (st as any).boyvideorand = (Math.floor(Math.random() * 4) + 0);
    if ((!((st as any).boyvideorand ?? 0))) {
      scene.text('When the movie starts you quickly realize it\'s a porn video. The actors do not have time to exchange but a few sentences before the girl was already naked and kneeling in front of the guy with his cock in her mouth.');
      qspCall(st, 'willpower', 'voyeur', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse to watch', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse to watch', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (20);
    qspCall(st, 'stat', '');
    scene.text(`You got up from the couch upset with the guy claiming that you are not interested in watching that type of trash. ${((st as any).boydesc ?? '')} gets embarrassed and blushing began stuttering an apology.`);
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Watch porn', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/boyfriend/groped.jpg');
    scene.text(`You continue watching the porn and what you saw was gradually exciting you. You feel ${((st as any).boydesc ?? '')} put his hand on your knee and began to stroke it.`);
    dynamicGoto(st, String((st as any).din_gboy_knee || ''));
  } },
      ]);
    } else {
      if (((st as any).boyvideorand ?? 0) > 0) {
        scene.text('A Hollywood thriller started playing in which the protagonist smashed everything around him while he managed to not even get scratched. In the film, he ends up killing his best friend, after which the hero drops to his knees beside the body screaming "NO!" in the rain. Finally the hero and main villain meet and after a hard fight he killed the bad guy, the film ends as expected, with an explosion in the background from which the hero escaped.');
        (st as any).boyprirand = (Math.floor(Math.random() * 3) + 0);
        if ((!((st as any).boyprirand ?? 0))) {
          scene.text('You feel him lay hand on your knee and began to stroke it.');
          qspCall(st, 'willpower', 'sex', 'resist', 'easy');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Remove his hand', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.text('You remove his hand from your knee and he shakes his head, puzzled what to do next.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
            ]);
          }
          dynamicGoto(st, String((st as any).din_gboy_knee || ''));
        } else {
          if (((st as any).pcs_horny ?? 0) >= 75) {
            qspCall(st, 'willpower', 'sex', 'self', 'easy');
            if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Kiss him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    scene.text(`You turn your head to the guy and your lips meet. ${((st as any).boydesc ?? '')} starts to passionately caress your body with his hands as he kisses you.`);
    dynamicGoto(st, String((st as any).din_gboy_tits || ''));
  } },
              ]);
            }
          }
          scene.actions([
            { label: 'Go home', goto: ['pav_residential', ''] },
          ]);
        }
      }
    }
  } },
      ]);
    } else {
      if (((st as any).boyhouserand ?? 0) === 1) {
        scene.img('images/characters/shared/boyfriend/groped.jpg');
        scene.text('There was no one else at home and he suggested that you both go to his room. In his room, he sat next to you and started stroking your knee.');
        dynamicGoto(st, String((st as any).din_gboy_knee || ''));
      } else {
        if (((st as any).boyhouserand ?? 0) === 2) {
          scene.img('images/characters/shared/boyfriend/groped.jpg');
          scene.text('When you went inside his home, he realizes that his parents were home and he quickly walks you to his room. In his room, he sat next to you and started stroking your knee.');
          dynamicGoto(st, String((st as any).din_gboy_knee || ''));
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const Gnpc2: LocationDef = {
  name: 'Gnpc2',
  title: 'Men\'s Room',
  region: 'other',
  enter: enter,
};
