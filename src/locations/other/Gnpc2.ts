import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  // TODO-QSP: close all
  (s as any).discofirsttime = ((s as any).discofirsttime ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
    (s as any).gdeystboyrand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).gdeystboyrand ?? 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>> invites you to his home.
      scene.text(`${((s as any).boydesc ?? 0)} invites you to his home.`);
      qspCall(s, 'willpower', 'sex', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline and go home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    // TODO-QSP: otnBoyFrend[numnpc] -= 10
  }, goto: ['pav_residential', ''] },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> offers to accompany you home.
      scene.text(`${((s as any).boydesc ?? 0)} offers to accompany you home.`);
      scene.actions([
        { label: 'go home', goto: ['pav_residential', ''] },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: <<$boydesc>> invites you to his home.
    scene.text(`${((s as any).boydesc ?? 0)} invites you to his home.`);
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and go home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    // TODO-QSP: otnBoyFrend[numnpc] -= 10
  }, goto: ['pav_residential', ''] },
      ]);
    }
  }
  scene.actions([
    { label: 'Go to the club', handler: (st: GameState) => {
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (s as any).volume = 100;
      (s as any).music_loop = 1;
    }
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    if (((s as any).pcs_danc ?? 0) < 50  &&  ((s as any).pcs_agil ?? 0) >= ((s as any).pcs_danc ?? 0)) {
      qspCall(s, 'exp_gain', 'danc', 1);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    (s as any).diskoIvrand = Math.floor(Math.random() * 101) + 0;
    if ((!((s as any).discofirsttime ?? 0))) {
      (s as any).diskoIvrand = 0;
    }
    // TODO-QSP: set $clubDescription = '<h1><center><b><font color="maroon">Inside the club</font></b></center></h1>...
    // TODO-QSP: dynamic text: You accompany <<$boydesc>> and when you reach the club he pays the entrance fee ...
    scene.text(`You accompany ${((s as any).boydesc ?? 0)} and when you reach the club he pays the entrance fee and you both walk in. Together with your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} you head to the dance floor and start dancing.`);
    if (((s as any).diskoIvrand ?? 0) >= 80) {
      (s as any).diskoIvTiperand = Math.floor(Math.random() * 2) + 0;
      if ((!((s as any).diskoIvTiperand ?? 0))) {
        // TODO-QSP: dynamic text: While you are dancing with <<$boydesc>> a drunk kid in sweatpants and sweatshirt...
        scene.text(`While you are dancing with ${((s as any).boydesc ?? 0)} a drunk kid in sweatpants and sweatshirt approaches.`);
        // TODO-QSP: gs 'npcgeneratec', 0, 'Gopnik', age + rand(-1, 1)
        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 1);
        if (((s as any).fame ?? 0)?.['pav_slut'] < 150) {
          // TODO-QSP: dynamic text: The Gopnik pushes <<$boydesc>> to the side and grabs you by the waist. "Let's da...
          scene.text(`The Gopnik pushes ${((s as any).boydesc ?? 0)} to the side and grabs you by the waist. "Let's dance, babe!"`);
          qspCall(s, 'willpower', 'misc', 'resist', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Resist', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).tiprand = Math.floor(Math.random() * 101) + 0;
    // TODO-QSP: dynamic text: You escape from the clutches of the Gopnik. <<$boydesc>> pushes the drunk kid aw...
    scene.text(`You escape from the clutches of the Gopnik. ${((s as any).boydesc ?? 0)} pushes the drunk kid away who immediately goes to his Gopnik buddies who were standing nearby. It didn't take them long to approach your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} and an argument starts. The Gopnik raises his fists, showing your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} that he wants to fight.`);
    if (((s as any).tiprand ?? 0) <= 70) {
      // TODO-QSP: dynamic text: Fortunately, <<$boydesc>> manages to win the fight verbally, accusing the Gopnik...
      scene.text(`Fortunately, ${((s as any).boydesc ?? 0)} manages to win the fight verbally, accusing the Gopnik of grabbing you, his girlfriend. But the evening was spoiled and finally ${((s as any).boydesc ?? 0)} suggests that it would be better if you both head home.`);
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (20);
      // TODO-QSP: dynamic text: The Gopnik quickly pounces on your guy and punches him in the face. It seems tha...
      scene.text(`The Gopnik quickly pounces on your guy and punches him in the face. It seems that ${((s as any).boydesc ?? 0)} doesn't stand a chance against the three Gopniks and before he gets completely beaten up he offers all his money to the angry Gopniks and apologizes repeatedly before all of them. You quickly leave the dance floor and ${((s as any).boydesc ?? 0)} suggests that you both head home.`);
      // TODO-QSP: dynamic text: The discussion escalates quickly into a fight and soon the Gopniks charge at you...
      scene.text(`The discussion escalates quickly into a fight and soon the Gopniks charge at your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} in the middle of the club.`);
      // TODO-QSP: set $bfDiscoBadEnd = 'The Gopniks meanwhile drag <<$boydesc>> into the streets, where they beat him ...
      // TODO-QSP: set $stumble = 'You stumble and come crashing down to the floor, hitting your head hard.'
      // TODO-QSP: set $looseTooth = 'You are dazed, bells are ringing in your head and you realize that you are lying ...
      qspCall(s, 'willpower', 'skill_base', 'stren', 'force', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Separate them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Separate them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (((s as any).pcs_stren ?? 0) < 60) {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'pain', '', 6, 'head', 'hit');
      qspCall(s, 'stat', '');
      scene.text('You try to push the Gopnik, but someone pushes you roughly away from the fight.');
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('You push back the Gopnik with all your strength and he stumbles backwards, hitting his head on the floor. But the second Gopnik turns to you and swings his fist towards your face.');
      if (((s as any).pcs_agil ?? 0) < 60) {
        qspCall(s, 'mood', 'lower', 'large');
        (s as any).pcs_missing_teeth = ((s as any).pcs_missing_teeth ?? 0) + (1);
        qspCall(s, 'pain', '', 8, 'mouth', 'hit');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.text('You react just in time and quickly move your head to the side barely avoiding his punch.');
        // TODO-QSP: set $discoScratch1 = 'You dig your nails into the punk''s face and begin to gouge and rip into it. T...
        // TODO-QSP: set $discoScratch2 = 'The Gopnik with the scratched face seems to be recovering already because he t...
        // TODO-QSP: set $discoScratch3 = '<<$boydesc>> puts his arm around your shoulders and you both leave the club.'
        scene.actions([
          { label: 'Punch him in his face', handler: (st: GameState) => {
    if (((s as any).pcs_agil ?? 0) >= 40) {
      qspCall(s, 'mood', 'lower', 'large');
      (s as any).pcs_missing_teeth = ((s as any).pcs_missing_teeth ?? 0) + (1);
      qspCall(s, 'pain', '', 8, 'mouth', 'hit');
      qspCall(s, 'pain', '', 6, 'face', 'hit');
      qspCall(s, 'pain', '', 6, 'nose', 'hit');
      qspCall(s, 'pain', '', 6, 'lips', 'hit');
      qspCall(s, 'stat', '');
      scene.text('You swing at the Gopnik and hit him right on the nose. He staggers briefly and then yells angrily at you, "Oh, you bitch!". He charges quickly at you and then a barrage of punches comes raining down on you.');
      // TODO-QSP: $looseTooth
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'pain', '', 6, 'head', 'hit');
      qspCall(s, 'stat', '');
      scene.text('You try to hit the hooligan with a punch to the face but your blow is too slow. The Gopnik dodges your weak attempt and pushes you roughly away.');
      // TODO-QSP: $stumble
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    }
  } },
          { label: 'Kick him in his face', handler: (st: GameState) => {
    if (((s as any).pcs_agil ?? 0) >= 60) {
      scene.text('You manage to give the punk a good kick in his face. His head swings back violently and then he grabs his face. "Shit! Fucking bitch, you broke my nose! Now I will break your whole fucking face!"');
      // TODO-QSP: dynamic text: At this point <<$boydesc>> comes from the side and punches the hooligan hard on ...
      scene.text(`At this point ${((s as any).boydesc ?? 0)} comes from the side and punches the hooligan hard on his already broken nose. The poor guy flies backwards and comes crashing down to the floor. Two other Gopniks used the distraction to grab onto your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} and try to pin his arms.`);
      scene.actions([
        { label: 'Scratch one of the Gopnik\'s face', handler: (st: GameState) => {
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (5);
    (s as any).GopWin[String((s as any).numnpc ?? 0)] = ((s as any).GopWin[String((s as any).numnpc ?? 0)] ?? 0) + (1);
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('You try to kick the hooligan in his face but he is faster than you and manages to shove you away before you even got your leg up.');
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'pain', '', 6, 'head', 'hit');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    }
  } },
          { label: 'Kick him in his balls', handler: (st: GameState) => {
    // TODO-QSP: set $badKick = 'You try to kick the hooligan between his legs but he saw it coming. He blocks your k...
    if (((s as any).pcs_agil ?? 0) >= 70) {
      (s as any).bollrand = Math.floor(Math.random() * 2) + 0;
      if ((!((s as any).bollrand ?? 0))) {
        // TODO-QSP: dynamic text: You kick your foot directly in the Gopnick's crotch, hitting his balls hard. He ...
        scene.text(`You kick your foot directly in the Gopnick's crotch, hitting his balls hard. He flops down on his knees howling and clutching his crotch. Two Gopniks grab your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} and try to hold his arms.`);
        scene.actions([
          { label: 'Scratch one of the Gopnik\'s face', handler: (st: GameState) => {
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (5);
    (s as any).GopWin[String((s as any).numnpc ?? 0)] = ((s as any).GopWin[String((s as any).numnpc ?? 0)] ?? 0) + (1);
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      } else {
        qspCall(s, 'mood', 'lower', 'medium');
        qspCall(s, 'pain', '', 6, 'head', 'hit');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      }
    } else {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'pain', '', 6, 'head', 'hit');
      qspCall(s, 'stat', '');
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
        { label: 'Go home', goto: ['pav_residential', ''] },
        { label: 'Watch them fight', handler: (st: GameState) => {
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (20);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$boydesc>> can't escape the attacks of the three Gopniks and soon falls under ...
    scene.text(`${((s as any).boydesc ?? 0)} can't escape the attacks of the three Gopniks and soon falls under a barrage of punches. The Gopniks drag him into the streets where they steal all his money, take off his shoes, and throw him into the bushes.`);
    // TODO-QSP: dynamic text: Once they left, you help your <<$bfTitle[numnpc]>> to his feet and manage to get...
    scene.text(`Once they left, you help your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} to his feet and manage to get him back home. His face is covered in blood and bruises everywhere.`);
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Dance with the Gopnik', handler: (st: GameState) => {
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = 0;
    (s as any).DPtipe = 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You decide to dance with the Gopnik. For a moment <<$boydesc>> is staring at you...
    scene.text(`You decide to dance with the Gopnik. For a moment ${((s as any).boydesc ?? 0)} is staring at you in disbelieve, then he approaches the guy and grabs his shoulder. "Hey you! That's my girl!" Suddenly a couple of Gopniks grab your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} and keep him from interrupting the hooligan dancing with you.`);
    // TODO-QSP: dynamic text: After a few minutes <<$boydesc>> stops struggling and the Gopniks let him free. ...
    scene.text(`After a few minutes ${((s as any).boydesc ?? 0)} stops struggling and the Gopniks let him free. He curses and glares angrily at you, while you are still dancing with the Gopnik, and then stomps out of the club.`);
    // TODO-QSP: dynamic text: The Gopnik dancing with you is grinning and suggests that you should dump your <...
    scene.text(`The Gopnik dancing with you is grinning and suggests that you should dump your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]}. His hands wander down to your ass as he offers you to go outside and have some fun.`);
    scene.actions([
      { label: 'Have fun', handler: (st: GameState) => {
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    // TODO-QSP: dynamic text: Your <<$bfTitle[numnpc]>> is unlikely to come back, so why not have some fun wit...
    scene.text(`Your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} is unlikely to come back, so why not have some fun with this guy? You give him a slinky smile, grab his hands and move towards the exit.`);
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
          (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = 0;
          qspCall(s, 'mood', 'lower', 'small');
          qspCall(s, 'pain', '', 4, 'cheeks', 'slap');
          qspCall(s, 'stat', '');
          // TODO-QSP: dynamic text: The Gopnik takes one look at you and then starts laughing, "Listen, buddy. Why a...
          scene.text(`The Gopnik takes one look at you and then starts laughing, "Listen, buddy. Why are you wasting your time dancing with her? ${((s as any).pcs_nickname ?? 0)} is a ${((s as any).gnikname ?? 0)}. Just take her into the bushes out back, but don't hurt her mouth. That sweet set of lips can really smack when sucking dick." You blush scarlet red from the Gopnik's words, deeply embarrassed. ${((s as any).boydesc ?? 0)} rushes up to the guy, "What did you say? Come again!" But the hooligan just went back to join his friends. "Listen, boy, no need to argue. Everyone in the neighborhood knows she is a ${((s as any).gnikname ?? 0)}." ${((s as any).boydesc ?? 0)} looks at you in surprise. "Is this true?" The boys laugh "Well, everyone except you." ${((s as any).boydesc ?? 0)} glares angrily at you and then he slaps you hard across the face. "Go fuck yourself, slut!" He abruptly leaves the dance floor.`);
          scene.actions([
            { label: 'Rub your cheek', goto: ['pav_disco', ''] },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: You enjoy dancing with your <<$bfTitle[numnpc]>>. After a while <<$boydesc>> say...
        scene.text(`You enjoy dancing with your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]}. After a while ${((s as any).boydesc ?? 0)} says that he could do with a beer and invites you to a drink.`);
        qspCall(s, 'willpower', 'drink', 'resist', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Decline his offer and keep dancing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Decline his offer and keep dancing', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (((s as any).pcs_danc ?? 0) < 50  &&  ((s as any).pcs_agil ?? 0) >= ((s as any).pcs_danc ?? 0)) {
      qspCall(s, 'exp_gain', 'danc', 1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Your <<$bfTitle[numnpc]>> gets himself a beer at the bar and in the meantime you...
    scene.text(`Your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} gets himself a beer at the bar and in the meantime you continue to dance.`);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      // TODO-QSP: dynamic text: Someone walks up to you "Hey, I've been watching you having fun with your boyfri...
      scene.text(`Someone walks up to you "Hey, I've been watching you having fun with your boyfriend here. He still does't know that you are a ${((s as any).gnikname ?? 0)}? Maybe I should tell him?"`);
      // TODO-QSP: set $bfBreakup = 'You tell the guy to go to hell and he walks away with a sullen look on his face. A...
      qspCall(s, 'willpower', 'misc', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him to piss off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him to piss off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch him leave', goto: ['pav_disco', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Beg him not to tell', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You plead with the guy not to say anything to your <<$bfTitle[numnpc]>>. He chuc...
    scene.text(`You plead with the guy not to say anything to your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]}. He chuckles, "Well, if you keep your mouth closed sucking on my dick, I'll keep my mouth closed as well and won't tell him."`);
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him to piss off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to piss off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch him leave', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    // TODO-QSP: gs 'npcgeneratec', 0, 'Gopnik', age + rand(-1, 1)
    // TODO-QSP: $boy[1] = $boy
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Men\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/bathroom_entrance.jpg');
    scene.text('You agree to the blowjob and the guy leads you to the toilets. You start feeling depressed. The toilets in the club are something of a thoroughfare, someone smoking here, someone else defecating in booths over there, with little privacy. The guy walks with you into the men\'s room. When you open the door, you see some drunk guys standing in a cloud of smoke. In one of the booths you hear the sound of someone puking.');
    scene.text('The boys look at you bewildered, "Did you make a mistake? This is the men\'s room." The guy who brought you smiles "Nah, She\'s with me." He turns to you, "Okay, cocksucker, get your mouth working." You look at the other guys and ask, "What, right here?" The Boys laugh, "C\'mon. You\'re not embarrassed, are you?"');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    // TODO-QSP: gs 'boyStat', $boy[1]
    qspCall(s, 'stat', '');
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You angrily spit at him, "Go fuck yourself, asshole!", and storm out of the rest...
    scene.text(`You angrily spit at him, "Go fuck yourself, asshole!", and storm out of the restroom. Just as you reach the dance floor you see that ${((s as any).boydesc ?? 0)} is returning from the bar. You quickly grab his hands and begin dancing with him, still a little furious about the incident.`);
    // TODO-QSP: dynamic text: <<$boydesc>> notices your bad mood and asks, "What's wrong, <<$pcs_nickname>>?"....
    scene.text(`${((s as any).boydesc ?? 0)} notices your bad mood and asks, "What's wrong, ${((s as any).pcs_nickname ?? 0)}?". At this moment, you see the guy from the restrooms returning. He walks up to your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} and pulls him to the side. After a while, ${((s as any).boydesc ?? 0)} returns and says "We're through. Based on the shit I was just told, I won't waste another minute on the likes of a whore like you!"`);
    scene.actions([
      { label: 'Watch him leave', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck his cock', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Men\'s room</b></center>');
    scene.img('images/shared/sex/blowjob/public.jpg');
    // TODO-QSP: dynamic text: You squat in front of the guy and unbutton his pants to pull out his stiff dick....
    scene.text(`You squat in front of the guy and unbutton his pants to pull out his stiff dick. The other boys continue smoking and watch the scene. You begin to lick the purple head of his swollen cock and then you open your ${((s as any).pc_desc ?? 0)?.['lips']} lips and take the cock in your mouth. The Boys start laughing and commenting at what they see, "Look how she smacks those lips." Another echoed, "Where did you find such a cocksucker?" Unfortunately, there's someone who knows you. "Hey that's ${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)}. Hot Damn!"`);
    scene.text('You blush and your face burns with shame, sucking this dick in front of other guys. Finally the guy starts to cum in your mouth and you try as quickly as possible to swallow his warm sperm. When his cock finally goes limp he tucks it back in his pants. You get up from the floor and begin to wipe your mouth, knowing it now smells like cum. One of the guys chuckled, "Great blowjob, I wouldn\'t mind one myself."');
    // TODO-QSP: gs 'boyStat', $boy[1]
    scene.actions([
      { label: 'Slip out of the restroom', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You try to ignore the guys as you slip out of the restroom and walk back to the ...
    scene.text(`You try to ignore the guys as you slip out of the restroom and walk back to the dance floor. ${((s as any).boydesc ?? 0)} has been looking for you. He comes up to you and asks, "Where have you been? I looked everywhere for you." You say the first thing that comes to your mind, "I went to the toilet." ${((s as any).boydesc ?? 0)} asks "Why are you wiping your mouth?"`);
    qspCall(s, 'willpower', 'misc', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suggest to leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suggest to leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    // TODO-QSP: dynamic text: You suggest to your <<$bfTitle[numnpc]>> to leave the club. <<$boydesc>> shrugs ...
    scene.text(`You suggest to your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} to leave the club. ${((s as any).boydesc ?? 0)} shrugs and you both walk out to the exit.`);
    scene.actions([
      { label: 'Leave',  },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'pain', '', 3, 'cheeks', 'slap');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You continue to dance with your <<$bfTitle[numnpc]>>. A few minutes pass and the...
    scene.text(`You continue to dance with your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]}. A few minutes pass and then you see the guys that watched your whole blowjob scene coming out of the toilet. They also see you and guffaw, noisily discussing something. ${((s as any).boydesc ?? 0)} looks at them puzzled, "What's with them?" The boys shout to him, "While you were wandering around the place, your girlfriend was in the toilet sucking on a dick!" ${((s as any).boydesc ?? 0)} comes up to them, "Are you crazy?"`);
    // TODO-QSP: dynamic text: The Boys start to tell him how you just sucked off a guy in front of them. <<$bo...
    scene.text(`The Boys start to tell him how you just sucked off a guy in front of them. ${((s as any).boydesc ?? 0)} rushes back over to you and slaps you across the face "Get the fuck out, slut! I don't want to see you ever again!"`);
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
      // TODO-QSP: dynamic text: While <<$boydesc>> went for a beer another guy comes up to you and asks for a da...
      scene.text(`While ${((s as any).boydesc ?? 0)} went for a beer another guy comes up to you and asks for a dance.`);
      qspCall(s, 'willpower', 'misc', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (5);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You politely refuse his invitation. The guy looks dejected but leaves without ma...
    scene.text(`You politely refuse his invitation. The guy looks dejected but leaves without making any fuss. A few minutes later ${((s as any).boydesc ?? 0)} returns to the dance floor, a beer in his hand. You have a fun time dancing with your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)]} and soon after he finishes his beer he suggests to leave.`);
    scene.actions([
      { label: 'Leave',  },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (20);
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You start to dance with him. A few minutes later <<$boydesc>> comes up to you an...
    scene.text(`You start to dance with him. A few minutes later ${((s as any).boydesc ?? 0)} comes up to you and pulls you by the hand, dragging you away from the other guy. "What the fuck is wrong with you? I leave for a minute, and you're already dancing with someone else!" He angrily leaves the club.`);
    scene.actions([
      { label: 'Stand there and watch him leave', goto: ['pav_disco', ''] },
    ]);
  } },
      ]);
    }
  } },
          ]);
        }
        if (((s as any).diskoIvTiperand ?? 0) === 2) {
        }
        return;
        scene.actions([
          { label: 'Have a drink with him', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You head to the bar and <<$boydesc>> orders your drinks. When you finally get th...
    scene.text(`You head to the bar and ${((s as any).boydesc ?? 0)} orders your drinks. When you finally get them you move to the outdoor area and find a secluded place to enjoy your drinks.`);
    qspCall(s, 'willpower', 'kiss', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Kiss [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'kiss', 5);
    (s as any).kissBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).kissBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    // TODO-QSP: dynamic text: You tenderly embrace <<$boydesc>> and began to kiss his lips.
    scene.text(`You tenderly embrace ${((s as any).boydesc ?? 0)} and began to kiss his lips.`);
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$boydesc>> whispered in your ear, "<<$pcs_nickname>> want to do something righ...
      scene.text(`${((s as any).boydesc ?? 0)} whispered in your ear, "${((s as any).pcs_nickname ?? 0)} want to do something right here?"`);
      scene.actions([
        { label: 'Jerk guy', handler: (st: GameState) => {
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).dick = ((s as any).dickBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)];
    qspCall(s, 'arousal', 'hj', 5);
    (s as any).hja = ((s as any).hja ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You got his hard and hot cock out of his pants and wrapped your hand around it. You started kissing him at the same time you masturbate his penis. Finally the guy groaned and you watch his cock shoot off his sperm.');
    scene.actions([
      { label: 'Further',  },
    ]);
  } },
        { label: 'Take by mouth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    (s as any).dick = ((s as any).dickBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)];
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksucker.jpg');
    scene.text('You squatted in front of him and bring your face to his cock.');
    qspCall(s, 'dinSex', 'bj_random');
    // TODO-QSP: dynamic text: Soon <<$boydesc>> groaned "<<$pcs_nickname>>, I'm going to come."
    scene.text(`Soon ${((s as any).boydesc ?? 0)} groaned "${((s as any).pcs_nickname ?? 0)}, I'm going to come."`);
    scene.actions([
      { label: 'Suck on', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum49.jpg');
    qspCall(s, 'dinsex', 'bj_swallow_random');
    scene.actions([
      { label: 'Further',  },
    ]);
  } },
      { label: 'Remove from the mouth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial21.jpg');
    scene.text('You remove his member from your mouth just as a stream of hot sperm hits your face, then another and another and finally he stopped dumping his thick cum on your face.');
    scene.actions([
      { label: 'Further',  },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You feel your guy\'s hands caress your breasts.');
      qspCall(s, 'arousal', 'foreplay', (-1));
      scene.actions([
        { label: 'Stop',  },
        { label: 'Let him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> pulls your <<$titsize>> breast out of your top and begins to knead ...
    scene.text(`${((s as any).boydesc ?? 0)} pulls your ${((s as any).titsize ?? 0)} breast out of your top and begins to knead your boobs and kiss on them. He takes your hand and puts it against his groin, and you feel that he's got a hard cock.`);
    qspCall(s, 'willpower', 'mast', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    scene.text('You remove your hand from his pants and then your guy sticks his hand into your pants, and you feel his fingers caress your wet pussy.');
    qspCall(s, 'willpower', 'mast', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.text('You take his hand out of your pants, and he shakes his head, not understanding.');
    scene.actions([
      { label: 'Further',  },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 5);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    // TODO-QSP: dynamic text: You cease to resist and just relax feeling the pleasant warmth as your guy cares...
    scene.text(`You cease to resist and just relax feeling the pleasant warmth as your guy caresses your pussy. ${((s as any).boydesc ?? 0)} begins to undress you and soon you are naked.`);
    qspCall(s, 'willpower', 'anal', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Substitute ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).anala = ((s as any).anala ?? 0) + (1);
    // TODO-QSP: gs 'boyStat', $nameBoyfrend[numnpc]
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img(`images/shared/sex/anal/doggy/anal${Math.floor(Math.random() * 13) + 0}.mp4`);
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    scene.text('Finally the guy finishes and you feel something warm fill your ass.');
    scene.actions([
      { label: 'Further',  },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Surrender', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).sexa = ((s as any).sexa ?? 0) + (1);
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    // TODO-QSP: gs 'boyStat', $nameBoyfrend[numnpc]
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    scene.text('He quickly takes off his clothes and lays down on top of you.');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    scene.actions([
      { label: 'Further',  },
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
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/grab/cock.jpg');
    scene.text('You start stroking his crotch, feeling his dick bulging as it expands in his pants.');
    if (((s as any).pcs_horny ?? 0) < 80) {
      scene.actions([
        { label: 'Remove hands', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.text('You remove his hands from your exposed breasts, and he looks puzzled, not sure why.');
    scene.actions([
      { label: 'Further',  },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go into your guy\'s pants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'hj', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/grab/cock2.jpg');
    scene.text('You slide your hand into his pants and wrap your fingers around his hard cock.');
    qspCall(s, 'willpower', 'hj', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Jerk him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Jerk him off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'hj', 5);
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).dick = ((s as any).dickBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)];
    (s as any).hja = ((s as any).hja ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/handjob/hj.jpg');
    scene.text('You got his hard and hot cock out of his pants and hold it in your hand. You start kissing him at the same time you stroke his penis. Finally the guy lets out a groan and you watch as loads of cum shoot out of his cock.');
    scene.actions([
      { label: 'Further',  },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take by mouth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    (s as any).dick = ((s as any).dickBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)];
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksucker.jpg');
    scene.text('You squat in front of your guy and bring your face to his cock.');
    qspCall(s, 'dinSex', 'bj_random');
    // TODO-QSP: dynamic text: Soon <<$boydesc>> groaned "<<$pcs_nickname>>, I'm going to come."
    scene.text(`Soon ${((s as any).boydesc ?? 0)} groaned "${((s as any).pcs_nickname ?? 0)}, I'm going to come."`);
    scene.actions([
      { label: 'Suck on', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img(`images/shared/sex/public/c0${Math.floor(Math.random() * 11) + 0}.mp4`);
    qspCall(s, 'dinsex', 'bj_swallow_random');
    scene.actions([
      { label: 'Further',  },
    ]);
  } },
      { label: 'Remove it from the mouth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial21.jpg');
    scene.text('You remove his member from your mouth and then a stream of hot sperm hits your face, then another and another and finally your guy stops shooting his thick cum on your face.');
    scene.actions([
      { label: 'Further',  },
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
      { label: 'Leave the club',  },
    ]);
  } },
        ]);
      }
      if (((s as any).kissBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
      }
    }
    // TODO-QSP: dynamic text: <<$boydesc>> began to get your <<$titsize>> breasts out of the garment.
    scene.text(`${((s as any).boydesc ?? 0)} began to get your ${((s as any).titsize ?? 0)} breasts out of the garment.`);
    qspCall(s, 'willpower', 'mast', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.text('You remove his hands from your exposed breasts, and he looks puzzled, not sure why.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(s, 'stat', '');
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
          { label: 'Kiss him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'kiss', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'kiss', 5);
    (s as any).kissBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).kissBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    // TODO-QSP: dynamic text: You turn your head to the guy and your lips meet. <<$boydesc>> starts to passion...
    scene.text(`You turn your head to the guy and your lips meet. ${((s as any).boydesc ?? 0)} starts to passionately caress your body with his hands as he kisses you.`);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Let him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/tits.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> pulls your <<$titsize>> breasts outside and begins to knead your br...
    scene.text(`${((s as any).boydesc ?? 0)} pulls your ${((s as any).titsize ?? 0)} breasts outside and begins to knead your breasts and kiss them. Guy takes your hand and puts it on the groin, you feel that he's got a hard cock.`);
    qspCall(s, 'willpower', 'mast', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    scene.text('You remove your hand from his pants and he immediately reaches his hand into your pants, as you feel his fingers caress your wet pussy.');
    qspCall(s, 'willpower', 'mast', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.text('You pull his hand from your pussy, and he just looks at you, slightly confused.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 5);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/pet/petting.jpg');
    // TODO-QSP: dynamic text: You cease to resist and just relax feeling that pleasant warmth of a guy caressi...
    scene.text(`You cease to resist and just relax feeling that pleasant warmth of a guy caressing your pussy with his fingers. ${((s as any).boydesc ?? 0)} begins to undress you and soon you are completely naked.`);
    qspCall(s, 'willpower', 'anal', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Substitute ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    // TODO-QSP: gs 'boyStat', $nameBoyfrend[numnpc]
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/anal/doggy/anal31.jpg');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinSex', 'boy_wants_anal', 'lubri\' & gs \'dinsex', 'analsex');
    scene.text('Finally he reaches his peak and you feel something warm filling your ass.');
    scene.actions([
      { label: 'Leave.', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Surrender', handler: (st: GameState) => {
    (s as any).sexa = ((s as any).sexa ?? 0) + (1);
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    // TODO-QSP: gs 'boyStat', $nameBoyfrend[numnpc]
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    scene.text('He quickly takes off his clothes and lays down on top of you.');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 15);
    qspCall(s, 'dinsex', 'sexcum');
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
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/grab/cock.jpg');
    scene.text('You start stroking your guy\'s crotch, feeling the hardness of his member pressing against the cloth of his trousers.');
    qspCall(s, 'willpower', 'mast', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.text('You take his hand out of your pants, and he shakes his head, not understanding.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Going into the guy\'s pants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'hj', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/grab/cock2.jpg');
    scene.text('You slide your hand inside his pants, enfolding your fingers around his hard hot cock.');
    qspCall(s, 'willpower', 'hj', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Jerk him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Jerk him off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'hj', 5);
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).dick = ((s as any).dickBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)];
    (s as any).hja = ((s as any).hja ?? 0) + (1);
    qspCall(s, 'stat', '');
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
    qspCall(s, 'arousal', 'bj', 5);
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    (s as any).dick = ((s as any).dickBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)];
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/cocksucker.jpg');
    scene.text('You squat in front of your guy and bring your face to his cock.');
    qspCall(s, 'dinSex', 'bj_random');
    // TODO-QSP: dynamic text: Soon <<$boydesc>> groaned "<<$pcs_nickname>>, I'm going to come."
    scene.text(`Soon ${((s as any).boydesc ?? 0)} groaned "${((s as any).pcs_nickname ?? 0)}, I'm going to come."`);
    qspCall(s, 'willpower', 'anal', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Substitute ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Substitute ass', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).anala = ((s as any).anala ?? 0) + (1);
    // TODO-QSP: gs 'boyStat', $nameBoyfrend[numnpc]
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/anal/doggy/anal31.jpg');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    scene.text('Finally he reaches his peak and you feel something warm filling your ass.');
    scene.actions([
      { label: 'Leave.', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum49.jpg');
    qspCall(s, 'dinsex', 'bj_swallow_random');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Remove it from your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial21.jpg');
    scene.text('You remove his member from your mouth just as a stream of hot sperm hits you in the face, then another and another until he eventually finished coating your face with his cum.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Surrender', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).sexa = ((s as any).sexa ?? 0) + (1);
    if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
      (s as any).gnpcSex[String((s as any).numnpc ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    // TODO-QSP: gs 'boyStat', $nameBoyfrend[numnpc]
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 9) + 0);
    (s as any).GboyBalabol[String((s as any).numnpc ?? 0)] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    scene.text('He quickly takes off his clothes and lays down on top of you.');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
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
    qspCall(s, 'arousal', 'kiss', 5);
    (s as any).kissBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).kissBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    // TODO-QSP: dynamic text: You turn your head to the guy and your lips meet. <<$boydesc>> starts to passion...
    scene.text(`You turn your head to the guy and your lips meet. ${((s as any).boydesc ?? 0)} starts to passionately caress your body with his hands as he kisses you.`);
  } },
      { label: 'Pretend that nothing is happening', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/boyfriend/groped.jpg');
    // TODO-QSP: dynamic text: You pretend not to notice his hand and <<$boydesc>> doesn't hesitate to pull you...
    scene.text(`You pretend not to notice his hand and ${((s as any).boydesc ?? 0)} doesn't hesitate to pull your thigh closer to his. ${((s as any).boydesc ?? 0)} tilted towards your face trying to kiss you.`);
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove his hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.text('You remove his hand from your knee and he shakes his head, puzzled what to do next.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Go to his home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$boydesc>> takes you to his home. You came to a small two-story house, in whic...
    scene.text(`${((s as any).boydesc ?? 0)} takes you to his home. You came to a small two-story house, in which there are several apartments and ${((s as any).boydesc ?? 0)} guides you to his apartment. He opened the door with a key and lets you inside.`);
    (s as any).boyhouserand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).boyhouserand ?? 0))) {
      scene.text('There was no one else at home and he suggested you go to the recreation room and watch a movie.');
      scene.actions([
        { label: 'Watch Movie', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You settled comfortably on the sofa and <<$boydesc>> rummages in the drawers, fi...
    scene.text(`You settled comfortably on the sofa and ${((s as any).boydesc ?? 0)} rummages in the drawers, finds a movie, and puts it in the VCR and starts it, then sits down next to you.`);
    (s as any).boyvideorand = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).boyvideorand ?? 0))) {
      scene.text('When the movie starts you quickly realize it\'s a porn video. The actors do not have time to exchange but a few sentences before the girl was already naked and kneeling in front of the guy with his cock in her mouth.');
      qspCall(s, 'willpower', 'voyeur', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse to watch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse to watch', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (20);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You got up from the couch upset with the guy claiming that you are not intereste...
    scene.text(`You got up from the couch upset with the guy claiming that you are not interested in watching that type of trash. ${((s as any).boydesc ?? 0)} gets embarrassed and blushing began stuttering an apology.`);
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Watch porn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/boyfriend/groped.jpg');
    // TODO-QSP: dynamic text: You continue watching the porn and what you saw was gradually exciting you. You ...
    scene.text(`You continue watching the porn and what you saw was gradually exciting you. You feel ${((s as any).boydesc ?? 0)} put his hand on your knee and began to stroke it.`);
  } },
      ]);
    } else {
      scene.text('A Hollywood thriller started playing in which the protagonist smashed everything around him while he managed to not even get scratched. In the film, he ends up killing his best friend, after which the hero drops to his knees beside the body screaming "NO!" in the rain. Finally the hero and main villain meet and after a hard fight he killed the bad guy, the film ends as expected, with an explosion in the background from which the hero escaped.');
      (s as any).boyprirand = Math.floor(Math.random() * 3) + 0;
      if ((!((s as any).boyprirand ?? 0))) {
        scene.text('You feel him lay hand on your knee and began to stroke it.');
        qspCall(s, 'willpower', 'sex', 'resist', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Remove his hand [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Remove his hand', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.text('You remove his hand from your knee and he shakes his head, puzzled what to do next.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
    ]);
  } },
          ]);
        }
      } else {
        if (((s as any).pcs_horny ?? 0) >= 75) {
          qspCall(s, 'willpower', 'sex', 'self', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Kiss him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You turn your head to the guy and your lips meet. <<$boydesc>> starts to passion...
    scene.text(`You turn your head to the guy and your lips meet. ${((s as any).boydesc ?? 0)} starts to passionately caress your body with his hands as he kisses you.`);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      }
    }
  } },
      ]);
    } else {
      scene.img('images/characters/shared/boyfriend/groped.jpg');
      scene.text('There was no one else at home and he suggested that you both go to his room. In his room, he sat next to you and started stroking your knee.');
      if (((s as any).boyhouserand ?? 0) === 2) {
        scene.img('images/characters/shared/boyfriend/groped.jpg');
        scene.text('When you went inside his home, he realizes that his parents were home and he quickly walks you to his room. In his room, he sat next to you and started stroking your knee.');
      }
    }
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).boydesc ?? 0)}</b></center>`);
    scene.img(`images/characters/shared/headshots_main/big${((s as any).numnpc ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: You're on a date with <<$boydesc>>. <<$bfRelationship[numnpc]>>
    scene.text(`You're on a date with ${((s as any).boydesc ?? 0)}. ${((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)]}`);
    if (((s as any).hour ?? 0) < 20) {
      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80) {
        // TODO-QSP: dynamic text: <<$boydesc>> offered to take you home.
        scene.text(`${((s as any).boydesc ?? 0)} offered to take you home.`);
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
        ]);
      } else {
        (s as any).gdeystboyrand = Math.floor(Math.random() * 2) + 0;
        if ((!((s as any).gdeystboyrand ?? 0))) {
          // TODO-QSP: dynamic text: <<$boydesc>> suggested that you two go to his home.
          scene.text(`${((s as any).boydesc ?? 0)} suggested that you two go to his home.`);
          qspCall(s, 'willpower', 'sex', 'resist', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse to go to his home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse to go to his home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    // TODO-QSP: otnBoyFrend[numnpc] -= 10
  }, goto: ['pav_residential', ''] },
            ]);
          }
        } else {
          // TODO-QSP: dynamic text: <<$boydesc>> offered to take you home.
          scene.text(`${((s as any).boydesc ?? 0)} offered to take you home.`);
          scene.actions([
            { label: 'Go home', goto: ['pav_residential', ''] },
          ]);
        }
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
          // TODO-QSP: dynamic text: <<$boydesc>> suggested that you two go to his home.
          scene.text(`${((s as any).boydesc ?? 0)} suggested that you two go to his home.`);
          qspCall(s, 'willpower', 'sex', 'resist', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse to go to his home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse to go to his home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    // TODO-QSP: otnBoyFrend[numnpc] -= 10
  }, goto: ['pav_residential', ''] },
            ]);
          }
        }
        if (((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23) {
          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80) {
            // TODO-QSP: dynamic text: <<$boydesc>> offered to take you home.
            scene.text(`${((s as any).boydesc ?? 0)} offered to take you home.`);
            scene.actions([
              { label: 'Go home', goto: ['pav_residential', ''] },
            ]);
          } else {
            (s as any).tipgbrand = Math.floor(Math.random() * 2) + 0;
            if ((!((s as any).tipgbrand ?? 0))) {
              // TODO-QSP: dynamic text: <<$boydesc>> suggested going to the disco.
              scene.text(`${((s as any).boydesc ?? 0)} suggested going to the disco.`);
              qspCall(s, 'willpower', 'misc', 'resist', 'easy');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Refuse and go home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Refuse and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    // TODO-QSP: otnBoyFrend[numnpc] -= 10
  }, goto: ['pav_residential', ''] },
                ]);
              }
            } else {
              // TODO-QSP: dynamic text: <<$boydesc>> offered to go to his home.
              scene.text(`${((s as any).boydesc ?? 0)} offered to go to his home.`);
              scene.actions([
                { label: 'Refuse and go home', handler: (st: GameState) => {
    // TODO-QSP: otnBoyFrend[numnpc] -= 10
  }, goto: ['pav_residential', ''] },
              ]);
            }
            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
              (s as any).gdeystboyrand = Math.floor(Math.random() * 2) + 0;
              if ((!((s as any).gdeystboyrand ?? 0))) {
                // TODO-QSP: dynamic text: <<$boydesc>> offered to go to his home.
                scene.text(`${((s as any).boydesc ?? 0)} offered to go to his home.`);
                scene.actions([
                  { label: 'Refuse and go home', handler: (st: GameState) => {
    // TODO-QSP: otnBoyFrend[numnpc] -= 10
  }, goto: ['pav_residential', ''] },
                ]);
              } else {
                // TODO-QSP: dynamic text: <<$boydesc>> offered to go to the disco.
                scene.text(`${((s as any).boydesc ?? 0)} offered to go to the disco.`);
                qspCall(s, 'willpower', 'misc', 'resist', 'easy');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Refuse and go home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Refuse and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    // TODO-QSP: otnBoyFrend[numnpc] -= 10
  }, goto: ['pav_residential', ''] },
                  ]);
                }
              }
            }
            if (((s as any).hour ?? 0) >= 23) {
              // TODO-QSP: dynamic text: <<$boydesc>> offered to take you home.
              scene.text(`${((s as any).boydesc ?? 0)} offered to take you home.`);
              scene.actions([
                { label: 'go home', goto: ['pav_residential', ''] },
              ]);
            }
          }
        }
      }
    }
  } },
    ]);
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
