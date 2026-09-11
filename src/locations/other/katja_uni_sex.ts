import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFirstTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time1.jpg');
  scene.text('The two of you get on her bed and you slide your hand between her legs and start rubbing her clit through her panties. She moans softly at your touch while looking at you intently; you can see how turned on she is.');
  qspCall(s, 'arousal', 'foreplay_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her nipple', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time2.jpg');
    scene.text('As you keep rubbing her clit through her panties, you pull her top down to expose her breasts and erect nipples. You dip your head down and start kissing then sucking on her nipple softly, which makes her moan even more as she arches her back under you. "Yes, oh yes… More please."');
    qspCall(s, 'arousal', 'foreplay_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go down on her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time3.jpg');
    scene.text('You stop rubbing her clit and pull her panties off, tossing them aside as she looks at you with obvious desire and longing for more. She spreads her legs and you crawl between them to bury your face and tongue in her wet pussy. She pulls off the rest of her clothes as you eat her out and you start doing the same.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ask her to go down on you', goto: ['katja_uni_sex', 'first_time_cuni_get'] },
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time4.jpg');
    scene.text('Once you\'re both naked, you get back on your knees and pull her up into a sitting position and start passionately kissing her while your hands roam around her naked body. You can feel her hands returning the favor before you break the kiss. "Now it\'s your turn," you say seductively, leaving no doubt that you want her to go down on you.');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ask her to go down on you', goto: ['katja_uni_sex', 'first_time_cuni_get'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstTimeCuniGet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time5.jpg');
  scene.text('She bites her lower lip and grins as she crawls around behind you and gently pushes you forward until you\'re on all fours. Her wet tongue starts to lick your wet slit as her hair caresses your butt cheeks. You moan softly and lean forward until you\'re on your elbows and knees, giving her easier access to your wet pussy.');
  qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Grab her head', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['dom'] = (((s as any).katjaQW ?? {})['dom'] ?? 0) - (5);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time6.jpg');
    scene.text('It starts feeling really good, so you reach back and grab her head and pull it against you, grinding her face against your wet pussy as you push your hips backward. You start to take control and ride her face, using her mouth and tongue to give yourself maximum pleasure without a thought to her enjoyment. After a few minutes of this, you let go of her head and pull your dripping wet slit away from her face before you turn to face her, pulling her down on her back once more with her legs spread.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fingerbang her', goto: ['katja_uni_sex', 'first_time_fingerbang_her'] },
      { label: 'Eat her out', goto: ['katja_uni_sex', 'first_time_cuni_give'] },
    ]);
  } },
    { label: 'Fingerbang her', goto: ['katja_uni_sex', 'first_time_fingerbang_her'] },
  ]);
  scene.build();
}

function enterFirstTimeFingerbangHer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time7.jpg');
  scene.text('You slip one of your fingers into her soaking wet twat and she watches you intently, moaning and biting her lower lip as you slowly start fingering her. You slide in a second finger and finally a third as you fingering her pussy.');
  qspCall(s, 'arousal', 'vaginal_finger_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', goto: ['katja_uni_sex', 'first_time_cuni_give'] },
  ]);
  scene.build();
}

function enterFirstTimeCuniGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time8.jpg');
  scene.text('After a few minutes, you slip out all but one of your fingers, then dip your head down. You start licking, kissing and sucking at her clit while fingering her. Her moans are starting to get louder and you can feel her starting to tense up until she suddenly cries out as an orgasm rips through her body, leaving her shaking and breathing hard.');
  ((s as any).katjaQW ?? {})['horny'] = 0;
  qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-3), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Your turn', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time9.jpg');
    scene.text('Once she has recovered, she grins at you. "Oh my god, that was amazing! Let me return the favor," she says as she gets up and trades places with you. She slides one finger into you, followed by a second and third as she fingerbangs your pussy.');
    qspCall(s, 'arousal', 'vaginal_finger', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her finish you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time10.jpg');
    scene.text('It seems she\'s just mimicking exactly what you did as she pulls out all but one finger and then starts to lick, kiss, and suck on your clit while she continues to finger you.');
    (s as any).tempOrgasm = ((s as any).orgasm ?? 0);
    if (((s as any).tempOrgasm ?? 0) === ((s as any).orgasm ?? 0)) {
      scene.text('After some time, you feel the waves of pleasure come crashing over your body as you orgasm.');
    }
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/first_time11.jpg');
    scene.text('She grins as she watches you have your orgasm, seemingly pleased with herself. "That was fun! We should totally do that again." As you sit up, she leans forward and kisses you for a few minutes until you break away.');
    scene.text('"Yeah, it was. I look forward to our next chance," you tell her as the two of you start getting dressed.');
    scene.actions([
      { label: 'Finish', goto: ['katja_uni', 'try_clothes'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLibraryLicking1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_licking1.jpg');
  qspCall(s, 'katja_procedural', 'face_color');
  scene.text('You look at Katja, who is sitting writing at her laptop, very focused on what she\'s doing. You wonder if you should try to do something…');
  qspCall(s, 'willpower', 'cuni', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Crawl under the table to get to Katja\'s pussy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Crawl under the table to lick Katja\'s pussy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['katja_uni_sex', 'library_licking2'] },
    ]);
  }
  // TODO-QSP: act iif($university['enrolled_in'] = 'teaching_studies', 'Just finish studying', 'Continue to watch ...
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_together.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You finish studying together, and you are making good progress.');
  } else {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You continue to watch Katja while she finishes studying.');
  }
  qspCall(s, 'katja_uni_sex', 'library_leave_actions');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterLibraryLicking2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  qspCall(s, 'arousal', 'cuni_give', 1, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_licking2.jpg');
  // TODO-QSP: dynamic text: You quietly get under the table so as not to alert Katja. You then slowly crawl ...
  scene.text('You quietly get under the table so as not to alert Katja. You then slowly crawl closer to her as she continues typing away, seemingly not paying attention to anything else. Even hiking up her skirt\'+iif( katjaQW[\'pantiesQWstage\'] = 5 or katjaQW[\'take_of_panties_day\'] = daystart, \' \', \' and pulling her panties to the side \')+\'goes unnoticed. When you finally put your tongue to her pussy, she reacts with a startled yelp.');
  if (((s as any).katjaQW ?? 0)?.['horny'] <= 50  &&  ((s as any).katjaQW ?? 0)?.['slut'] < 60) {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'loathe');
    qspCall(s, 'arousal', 'end');
    // TODO-QSP: dynamic text: Katja abruptly pushes her chair back and quickly stands up, causing you to almos...
    scene.text(`Katja abruptly pushes her chair back and quickly stands up, causing you to almost fall to the ground. "What the hell are you doing, ${((s as any).pcs_nickname ?? 0)}?!" Katja almost shouts. "Get out of there right now!" You crawl out from under the table.`);
    scene.text('"What were you thinking?! This is a place for studying, not being a whore!" she exclaims. You don\'t think you\'ve ever seen her so mad before.');
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_together.jpg');
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.text('You apologize to Katja and quickly return to your studying. By the time you finish, Katja\'s anger seems to have blown over, and you think that you are making good progress in the subject.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('You apologize to Katja and she returns to her studying. You continue to watch her in silence and by the time she finishes, her anger seems to have blown over.');
    }
    qspCall(s, 'katja_uni_sex', 'library_leave_actions');
  } },
    ]);
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] < 40  ||  (((s as any).katjaQW ?? 0)?.['horny'] <= 50  &&  ((s as any).katjaQW ?? 0)?.['slut'] < 80)) {
      // TODO-QSP: dynamic text: Katja immediately reacts by clamping her legs together with your head still betw...
      scene.text(`Katja immediately reacts by clamping her legs together with your head still between them. "Stop it ${((s as any).pcs_nickname ?? 0)}. This isn't the place for such things. Get out of there," she says in a hard tone.`);
      qspCall(s, 'willpower', 'cuni', 'force', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Force her legs open and eat her pussy anyway [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Force her legs open and eat her pussy anyway [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
    ((s as any).katjaQW ?? {})['dom'] = (((s as any).katjaQW ?? {})['dom'] ?? 0) - (2);
    qspCall(s, 'willpower', 'pay', 'force');
  }, goto: ['katja_uni_sex', 'library_licking3'] },
        ]);
      }
      scene.actions([
        { label: 'Get out from under the table', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    ((s as any).katjaQW ?? {})['dom'] = (((s as any).katjaQW ?? {})['dom'] ?? 0) + (2);
    qspCall(s, 'arousal', 'end');
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_together.jpg');
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.text('Katja slowly opens her legs when she\'s sure you\'re not trying to do something. You crawl out from under the table and continue to study. When you finish, you think that you are making good progress in the subject.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('Katja slowly opens her legs when she\'s sure you\'re not trying to do something. You crawl out from under the table and continue to watch Katja while she finishes studying.');
    }
    qspCall(s, 'katja_uni_sex', 'library_leave_actions');
  } },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] < 80  ||  ((s as any).katjaQW ?? 0)?.['horny'] <= 50) {
        (s as any).katja_library_consent = 1;
        // TODO-QSP: dynamic text: After a moments pause, Katja replies in a low voice. "Stop it <<$pcs_nickname>>....
        scene.text(`After a moments pause, Katja replies in a low voice. "Stop it ${((s as any).pcs_nickname ?? 0)}. Not here. Later." She does not sound completely convincing though.`);
        qspCall(s, 'willpower', 'cuni', 'force', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Eat her pussy anyway [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Eat her pussy anyway [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['dom'] = (((s as any).katjaQW ?? {})['dom'] ?? 0) - (1);
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
  }, goto: ['katja_uni_sex', 'library_licking3'] },
          ]);
        }
        scene.actions([
          { label: 'Get out from under the table', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['dom'] = (((s as any).katjaQW ?? {})['dom'] ?? 0) + (2);
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (10);
    qspCall(s, 'arousal', 'end');
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_together.jpg');
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.text('You crawl out from under the table and continue to study. When you finish, you think that you are making good progress in the subject.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/studying_alone.jpg');
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.text('You crawl out from under the table and continue to watch Katja while she finishes studying.');
    }
    qspCall(s, 'katja_uni_sex', 'library_leave_actions');
  } },
        ]);
      } else {
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
        (s as any).katja_library_consent = 2;
        // TODO-QSP: dynamic text: After a moments pause, you hear Katja reply with a low sigh. "Yes… Don't stop <<...
        scene.text(`After a moments pause, you hear Katja reply with a low sigh. "Yes… Don't stop ${((s as any).pcs_nickname ?? 0)}… Please…"`);
        scene.actions([
          { label: 'Eat Katja\'s pussy', goto: ['katja_uni_sex', 'library_licking3'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLibraryLicking3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_licking3.jpg');
  if (((s as any).katja_library_consent ?? 0) === 2) {
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    scene.text('Katja relaxes and her pussy is soaked after a few licks.');
  } else {
    if (((s as any).katja_library_consent ?? 0) === 1) {
      qspCall(s, 'arousal', 'cuni_give', 4, 'lesbian');
      scene.text('Katja protests a little, but you can hear that she don\'t really mean it. She quickly relaxes and her pussy gets very wet after a few minutes.');
    } else {
      qspCall(s, 'arousal', 'cuni_give', 6, 'lesbian');
      scene.text('You force Katja\'s legs apart and continue to lick her pussy under her protest. She tries to continue working, but after a few minutes she gives up and relents when her pussy starts to get wet.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Use your tongue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_licking4.jpg');
    scene.text('Katja starts getting into it as you really start using your tongue on her. She leans back and puts one hand on your head as if she is afraid that you would stop.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_licking5.jpg');
    scene.text('As Katja is getting closer to an orgasm, she closes her eyes and puts both her hands on your head, pressing it into her pussy while you devour her. Her juices are really flowing now, and you taste them on your tongue.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bring her to an orgasm', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (3);
    ((s as any).katjaQW ?? {})['horny'] = 0;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_licking5.jpg');
    scene.text('Katja removes one on her hands to steady herself as you finally bring her to an orgasm. She is shaking for a long time, clearly trying to keep her voice down so as not to draw attention.');
    qspCall(s, 'arousal', 'cuni_give', 1, 'lesbian');
    qspCall(s, 'arousal', 'end');
    if (((s as any).katja_library_consent ?? 0) === 2) {
      // TODO-QSP: dynamic text: Katja comes down while you crawl out from under the table. "Thanks <<$pcs_nickna...
      scene.text(`Katja comes down while you crawl out from under the table. "Thanks ${((s as any).pcs_nickname ?? 0)}, I really needed that."`);
      scene.text('"Anytime," you reply. "I love eating your pussy."');
    } else {
      if (((s as any).katja_library_consent ?? 0) === 1) {
        // TODO-QSP: dynamic text: Katja comes down while you crawl out from under the table. "Thanks <<$pcs_nickna...
        scene.text(`Katja comes down while you crawl out from under the table. "Thanks ${((s as any).pcs_nickname ?? 0)}, that was amazing. But we really should not have done it here. What if somebody noticed?"`);
        scene.text('You smile. "That\'s what makes so exciting, don\'t you think?" you reply.');
        scene.text('"No… I mean maybe." Katja says, but her red face gives away her true thoughts.');
      } else {
        // TODO-QSP: dynamic text: Katja comes down while you crawl out from under the table. "You shouldn't have d...
        scene.text(`Katja comes down while you crawl out from under the table. "You shouldn't have done that ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('"Why not? Wasn\'t it good?" you ask.');
        scene.text('"That\'s besides the point. When I tell you no, I mean no!" she says looking angry. You apologize and her demeanor softens.');
      }
    }
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.text('You sit while Katja composes herself and the two of you continue to study. When you finish, you think that you are making good progress in the subject.');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('Katja composes herself and continues to study while you watch her.');
    }
    qspCall(s, 'katja_uni_sex', 'library_leave_actions');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLibraryLeaveActions(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).week ?? 0) < 6  ||  ((s as any).hour ?? 0) < 23)  &&  ((s as any).hour ?? 0) > 7) {
    qspCall(s, 'katja_meynold_schedule', '');
    if (((s as any).locat ?? 0)?.['katja'] === 29  &&  ((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      qspCall(s, 'katja_uni', 'study_select');
    } else {
      // TODO-QSP: dynamic text: "Well, I have to get going now," Katja says and starts to pack up her stuff. "It...
      scene.text('"Well, I have to get going now," Katja says and starts to pack up her stuff. "It was nice \'+iif($university[\'enrolled_in\'] = \'teaching_studies\', \'studying together. We should do it again sometime!\', \'having you here.\')+\'"');
      scene.text('She leaves the library, giving you a wave and a smile on the way out.');
    }
    scene.actions([
      { label: 'Say goodbye to Katja and return to the library entrance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Well, it looks like the library is closing up," Katja says, reaching to pack up...
    scene.text('"Well, it looks like the library is closing up," Katja says, reaching to pack up her stuff. "It was nice \'+iif($university[\'enrolled_in\'] = \'teaching_studies\', \'studying together. We should do it again sometime!\', \'having you here.\')+\'"');
    scene.text('You leave together, parting ways at the entrance with a wave and a smile.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye to Katja and leave the library', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterLibraryThreesome1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Hot Student', Math.floor(Math.random() * 11) + 18, 2);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome1.jpg');
  scene.text('While you and Katja are sitting in one of the reading rooms of the library, a handsome guy comes into the room. He leans over you. "So how are the studies going my beautiful angels?"');
  scene.text('"Good. good. It\'s going good," you manage to say as you notice Katja trying extremely hard to not start laughing over his corny lines.');
  // TODO-QSP: dynamic text: "Well if it's going so good, then perhaps you ladies need a break from your hard...
  scene.text(`"Well if it's going so good, then perhaps you ladies need a break from your hard work…" he continues. "I'm ${((s as any).npcdesc ?? 0)} and will of course be more than willing to offer my services to make sure that you ladies are entertained during your respite." You look at Katja and see that she also understands his intentions.`);
  if ((((s as any).katjaQW ?? 0)?.['boy_block'] === 1  ||  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] > 0)  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= (Math.floor(Math.random() * 51) + 50)) {
    scene.text('"Sorry, but neither you or any other boy could possibly have anything that could entertain us," Katja says in a completely deadpan voice. He look flabbergasted before quickly turning around and leaving. "Go girl. That was impressive!" you tell Katja, and she blushes slightly.');
    scene.actions([
      { label: 'Finish up', goto: ['katja_uni_sex', 'threeseome_over'] },
    ]);
  } else {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] < 6  ||  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1  ||  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] > 0) {
      scene.text('You can see Katja looking uncomfortable at his suggestion. "What the fuck? Get the hell away from us, perv!" you say in a harsh voice. He seems very surprised and doesn\'t know what to say, so he just slowly backs away.');
      scene.text('After he leaves the room, Katja can\'t hold it anymore and breaks out laughing "What a moron!" she says. "I can\'t believe that they let such idiots enter the uni."');
      scene.text('"Maybe he\'s a lab experiment that got loose?" you suggest, which just sends Katja into another giggling fit. After she stops laughing, you return to your work.');
      scene.actions([
        { label: 'Finish up', goto: ['katja_uni_sex', 'threeseome_over'] },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] > 80  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= (Math.floor(Math.random() * 51) + 50)) {
        scene.text('Katja turns and looks at you before leaning in and whispering. "I know his lines are corny, but he\'s hot and I\'m kind of horny." She looks at you with pleading eyes, waiting for your answer.');
        scene.actions([
          { label: 'Agree to a threesome', goto: ['katja_uni_sex', 'library_threesome2'] },
          { label: 'Say no', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['dom'] < -15) {
      scene.text('"No Katja, I don\'t feel like it," you tell her.');
      // TODO-QSP: dynamic text: She looks disappointed but turns to the guy and says "No, we're fine. We have no...
      scene.text(`She looks disappointed but turns to the guy and says "No, we're fine. We have no time for breaks." ${((s as any).npcdesc ?? 0)} takes the rejection with a smile. "Then I will leave you ladies to your work. Maybe another time?" he says before leaving you alone. It seems like he didn't expect his pick-up line to have worked anyway.`);
      scene.actions([
        { label: 'Finish up', goto: ['katja_uni_sex', 'threeseome_over'] },
      ]);
    } else {
      scene.text('"No Katja, I don\'t feel like it," you tell her.');
      // TODO-QSP: dynamic text: She doesn't look pleased. "Come on <<$pcs_nickname>>, don't be such a prude! I c...
      scene.text(`She doesn't look pleased. "Come on ${((s as any).pcs_nickname ?? 0)}, don't be such a prude! I can't believe I'm the daring one and you're the one afraid of getting caught. It's going to be fun! I really need this. Please ${((s as any).pcs_nickname ?? 0)}?" she says in a low voice, but you notice that ${((s as any).npcdesc ?? 0)} has clearly caught on to that she is trying to convince you.`);
      qspCall(s, 'willpower', 'group', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stand firm [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stand firm [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    scene.text('"I said no, Katja!" you tell her in a stern voice.');
    // TODO-QSP: dynamic text: She looks disappointed but turns to the guy and says "No, we're fine. My friend ...
    scene.text(`She looks disappointed but turns to the guy and says "No, we're fine. My friend has no time for a break." ${((s as any).npcdesc ?? 0)} looks a little sad, as if he had gotten his hopes up that his pick-up line would actually work. "Then I will leave you ladies to your work. Maybe another time?" he says before leaving you alone.`);
    scene.actions([
      { label: 'Finish up', goto: ['katja_uni_sex', 'threeseome_over'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Relent', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['dom'] = (((s as any).katjaQW ?? {})['dom'] ?? 0) + (2);
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  }, goto: ['katja_uni_sex', 'library_threesome2'] },
      ]);
    }
  } },
        ]);
      } else {
        // TODO-QSP: 'You look at Katja and '+iif(katjaQW['horny'] > 50 and katjaQW['slut'] > 40, 'she gives you a nod to...
        if (((s as any).katjaQW ?? 0)?.['horny'] > 50  &&  ((s as any).katjaQW ?? 0)?.['slut'] > 40) {
          scene.actions([
            { label: 'Agree and have a threesome', goto: ['katja_uni_sex', 'library_threesome2'] },
          ]);
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] > 50  ||  ((s as any).katjaQW ?? 0)?.['slut'] >= 60) {
            qspCall(s, 'willpower', 'group', 'force');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Convince Katja to have a threesome [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Convince Katja to have a threesome [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    ((s as any).katjaQW ?? {})['dom'] = (((s as any).katjaQW ?? {})['dom'] ?? 0) - (1);
    scene.text('You lean over and whisper in Katja\'s ear. "Come on Katja, it\'s going to be fun. You need to loosen up and try more things!" you tell her.');
    scene.text('"We\'re in the library. Somebody could come!" she protests.');
    // TODO-QSP: dynamic text: "That's what makes it more exciting! We're already leading <<$npcdesc>> on, so w...
    scene.text(`"That's what makes it more exciting! We're already leading ${((s as any).npcdesc ?? 0)} on, so we can't let him leave with blue balls!" Finally, Katja gives you a nod.`);
    scene.actions([
      { label: 'Have a threesome', goto: ['katja_uni_sex', 'library_threesome2'] },
    ]);
  } },
              ]);
            }
          }
        }
        scene.actions([
          { label: 'Tell <<$npcdesc>> that you are not interested', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You turn to <<$npcdesc>>. "Sorry, but I don't believe you have anything that cou...
    scene.text(`You turn to ${((s as any).npcdesc ?? 0)}. "Sorry, but I don't believe you have anything that could satisfy us."`);
    scene.text('He looks a little disappointed. "I believe you are wrong, but will accept the lady\'s wishes. You don\'t know what know what pleasures you will miss out on!"');
    scene.text('Once he is out of earshot, Katja scoffs. "What a jerk!"');
    scene.actions([
      { label: 'Finish up', goto: ['katja_uni_sex', 'threeseome_over'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLibraryThreesome2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14', 'a');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome2.jpg');
  scene.text('After you and Katja agree, you get up while Katja turns around to face him. "It\'s your lucky day," she says. "But don\'t think it\'s because of your cheesy pick-up lines."');
  scene.text('You get close to him and start taking his shirt off as Katja slides her hand over his abs. "It\'s only because you have something we need," you say, which prompts Katja to grab his already hard cock through his pants.');
  qspCall(s, 'arousal', 'foreplay_give', 1, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Show him that he is just your toy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome3.jpg');
    scene.text('After you get his shirt off, Katja gets up and, just to show him how much he is just a toy for the two of you, you and Katja kiss as if he wasn\'t there. It doesn\'t seem to bother him, however, and his hand finds Katja\'s ass.');
    qspCall(s, 'arousal', 'foreplay_give', (-1), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get you clothes off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome4.jpg');
    // TODO-QSP: dynamic text: You and Katja takes your clothes off and get down in front <<$npcdesc>> before p...
    scene.text(`You and Katja takes your clothes off and get down in front ${((s as any).npcdesc ?? 0)} before pulling his very hard cock out of his pants. You both start alternating between stroking his dick. He seems to get really turned on getting treated as a sex toy, so you decide to gently bite his nipple, which seems to turn him on even more.`);
    qspCall(s, 'arousal', 'hj', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start licking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome5.jpg');
    // TODO-QSP: dynamic text: You get up and lay him down at the table. You take his cock into your mouth whil...
    scene.text(`You get up and lay him down at the table. You take his cock into your mouth while Katja sits on his face. '+iif( pcs_throat < dick, 'You have a little trouble getting his big dick into your mouth', 'His cock easily slides into your mouth')+'. You continue sucking his dick while you hear Katja moan from getting her pussy eaten by ${((s as any).npcdesc ?? 0)}.`);
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Share with Katja', handler: (st: GameState) => {
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome6.jpg');
    // TODO-QSP: dynamic text: You beckon Katja forward and she leans down and takes <<$npcdesc>> into her mout...
    scene.text(`You beckon Katja forward and she leans down and takes ${((s as any).npcdesc ?? 0)} into her mouth. She '+iif( npc_throat['A14'] < dick, 'has a hard time taking his big dick in her mouth', 'Licks his cock like a pro')+' while he continues to lick her pussy and you look on.`);
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome7.jpg');
    scene.text('You signal to Katja to stop sucking and lean back, which she does, so much that now he is licking her anus instead of her pussy. You then get up and slowly sit down on his cock with your back to Katja. You start riding him while using your hand to stimulate your clit at the same time.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'clit_finger', (-2), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch positions', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome8.jpg');
    // TODO-QSP: dynamic text: You climb off his dick and tell Katja that it's her turn. You then guide his dic...
    scene.text(`You climb off his dick and tell Katja that it's her turn. You then guide his dick into her very wet pussy as she sits down on it. As she starts riding it, you get up and crawl over to ${((s as any).npcdesc ?? 0)}'s face before sitting on it and letting him eat your pussy.`);
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get on all fours', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome9.jpg');
    // TODO-QSP: dynamic text: You and Katja get off <<$npcdesc>>, who gets up from the table. You and Katja th...
    scene.text(`You and Katja get off ${((s as any).npcdesc ?? 0)}, who gets up from the table. You and Katja then get gown on all four on the edge of the table, and ${((s as any).npcdesc ?? 0)} slides his dick into you. He continues to fuck you from behind, but also starts alternating between fucking you and Katja.`);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On top of Katja', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (3);
    ((s as any).katjaQW ?? {})['horny'] = 0;
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome10.jpg');
    // TODO-QSP: dynamic text: After a while, as he is fucking Katja, you get up and lie yourself on top of Kat...
    scene.text(`After a while, as he is fucking Katja, you get up and lie yourself on top of Katja. ${((s as any).npcdesc ?? 0)} then starts alternating between pounding his dick into your pussy and into Katja's. After doing this for a while, you hear Katja cum while he is inside her. When she comes down, he switches to you and is clearly getting close to cumming himself.`);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome11.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('He continues to pound you, and you\'re wondering if he will manage to pull out before he pulls out at the last second, causing his cum to splatter all over your pussy. You then climb off Katja and she slides off the table.');
    // TODO-QSP: dynamic text: "That was amazing!" <<$npcdesc>> says while getting dressed.
    scene.text(`"That was amazing!" ${((s as any).npcdesc ?? 0)} says while getting dressed.`);
    // TODO-QSP: dynamic text: "Yeah, that wasn't bad," Katja replies. '+iif(katjaQW['slut'] >= 100, '"At least...
    scene.text(`"Yeah, that wasn't bad," Katja replies. '+iif(katjaQW['slut'] >= 100, '"At least he knows how to use his dick, even if he doesn't know how to use his words,"', '"Yes. We did get something useful out of him after all, who would have thought with such a corny come on" you say.')+' ${((s as any).npcdesc ?? 0)} doesn't seem to know how to react to that, and just puts on the rest of his clothes and leaves.`);
    scene.text('Once he\'s gone, you and Katja break down laughing before finally getting cleaned up, your clothes back on and returning to the books.');
    qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_cleanup', '', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish up', goto: ['katja_uni_sex', 'threeseome_over'] },
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
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterThreeseomeOver(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/library_threesome_aftermatch.jpg');
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You and Katja continue to study. Once you finish, you think that you are making good progress in the subject.');
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('Katja continues to study while you watch her.');
  }
  qspCall(s, 'katja_uni_sex', 'library_leave_actions');
  // TODO-QSP: end
  scene.build();
}

function enterLazarKatjaUni_3some(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  qspCall(s, 'npcStat', 'A149');
  qspCall(s, 'npcStat', 'A14', 'a');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some1.jpg');
  scene.text('You and Katja leave the dorms, making your way off-campus to where Lazar lives. It\'s not too far from the campus that you find the address. It\'s a surprisingly nice-looking house, fairly big too. At a guess, you would assume it has at least three or four bedrooms, maybe as many as five. You share a look as you take it in.');
  scene.text('"This is a really nice house," Katja says before knocking on the door.');
  scene.text('A few seconds later, Lazar opens the door and is all smiles. He steps aside to invite you both in before closing the door behind you. He leads you into a really nice living room that is open to the kitchen in the back. "Have a seat girls, make yourself comfortable."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit down', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some2.jpg');
    scene.text('The three of you take a seat. "Do you live here alone?" Katja asks.');
    scene.text('He shakes his head, "Nah, I got some roommates, but they\'re out at the moment." He looks the two of you over with a lustful look in his eyes. "So we got the place all to ourselves."');
    scene.text('Lazar takes out his phone and starts snapping photos of the two of you; Katja quickly gets into it and starts posing. He asks the two of you to scoot really close together and he takes several more pictures like that. "Okay girls, how about you kiss each other; girls making out is hot."');
    scene.actions([
      { label: 'Kiss Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some3.jpg');
    scene.text('You both share a glance at him and giggle, but Katja then leans in and starts kissing you. You return the kiss and it quickly turns into a passionate one. You start to get into it, forgetting that Lazar is even there until he speaks up.');
    scene.text('"Now how about both of you pull out your tits?" he asks with a smile. It\'s obvious he\'s enjoying the show, especially with the growing bulge in his pants.');
    qspCall(s, 'arousal', 'kiss', 1, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Show your tits', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some4.jpg');
    scene.text('Deciding to tease Lazar for a bit, you slowly pull your tops aside baring your breasts. He doesn\'t seem to mind the teasing as he continues taking photos of the two of you.');
    scene.text('"How about losing the tops altogether?" he asks as he starts to move closer, still taking pictures.');
    qspCall(s, 'arousal', 'flash', 1, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take off your top', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some5.jpg');
    scene.text('Your tops quickly hit the floor as you keep doing poses. You start to wonder if this is all Lazar wants you to do.');
    // TODO-QSP: dynamic text: Katja seems to be thinking the same thing. "Are you just going to keep taking pi...
    scene.text('Katja seems to be thinking the same thing. "Are you just going to keep taking pictures or are you going to come over here\'+iif(katjaQW[\'slut\'] > 70 and ( katjaQW[\'QWstage\'] > 4 or katjaQW[\'anal_quest\'] > 2), \' and fuck us\', \')+\'?" she asks.');
    qspCall(s, 'arousal', 'flash', 1, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get naked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some6.jpg');
    scene.text('Lazar laughs before tossing his phone aside. "I was just trying to get you two comfortable, but if you wanna jump straight to fucking, I can accommodate you."');
    scene.text('He pulls his shirt up over his head, exposing his ripped six pack abs as well as his chiseled muscular chest and arms. He takes a seat between the two of you and starts pulling at your clothes, helping the two of you strip them off. When you\'re both fully nude, Lazar pulls down his pants slightly until his stiff cock pops free. It\'s almost as long and thick as your forearm.');
    scene.text('He grins at the two of you, prideful of his enormous member. "So, which one of you ladies want to suck on it first?"');
    scene.text('You look over at Katja, who seems to be motioning that she wants you to go first.');
    qspCall(s, 'arousal', 'flash', 1, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck Lazar\'s dick', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 2);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some7.jpg');
    scene.text('You lower your head, open your mouth and take as much of his cock into your mouth as you comfortably can. You start bobbing your head up and down, sucking on his cock with your lips wrapped tightly around his shaft. Katja puts her head real close to yours and takes a hold of the base of his shaft and starts jerking him off while you keep sucking. After a bit, you pull your mouth off his dick and offer it to Katja.');
    qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID1 ?? 0), 'group');
    scene.actions([
      { label: 'Watch Katja suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some8.jpg');
    scene.text('Katja quickly takes his cock into her mouth and mimics what you did while stroking his shaft with her hand; Lazar starts to moan a little from the attention he is getting.');
    scene.text('"Okay, I need to fuck one of you," he groans.');
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'erotic_nudity', 1, 'group');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 5) {
      scene.text('He reaches over and slaps Katja on the ass. "You\'re up first." He then turns to you, "Sit at that end of the couch and spread your legs."');
      scene.actions([
        { label: 'Continue', goto: ['katja_uni_sex', 'katja_vag_fucked_lazar'] },
      ]);
    } else {
      scene.text('He reaches over and slaps Katja on the ass. "You\'re up first." He then turns to you, "Sit at that end of the couch and spread your legs."');
      scene.text('You don\'t move. "You only get to fuck our butts today."');
      scene.text('He snorts a laugh. "I can work with that. Get on your back and Katja can climb on top of you sixty-nine style."');
      scene.actions([
        { label: 'Continue', goto: ['katja_uni_sex', 'katja_anal_fucked'] },
      ]);
    }
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
  } },
  ]);
  scene.build();
}

function enterKatjaVagFuckedLazar(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some9.jpg');
  scene.text('You sit down at the end of the couch and spread your legs apart. Lazar tells Katja to get up on the couch on all fours, with her face near your crotch. He gets on the other end of the couch behind her.');
  if (((s as any).npc_vag ?? 0)?.['A14'] === 0) {
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (5);
    scene.text('Katja looks back at him, "Please be gentle, this is my first time."');
    scene.text('He looks a bit surprised. "You sure you want me to be your first? I can just fuck your ass instead…" He trails off as she interrupts him.');
    scene.text('"No, I\'m sure. I\'m ready and I want you to be my first," she says before turning her attention to you and starts licking your clit. You hear her moan into you and tense up as Lazar enters her from behind. He is very slow and gentle with her, before long she is starting to moan in pleasure as she eats you out. "This doesn\'t hurt nearly as much as I thought it would." She says.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (3);
      scene.text('Katja looks back at him, "Please be gentle, this is my first time with a guy."');
      scene.text('He looks a bit surprised. "You\'re a virgin? I can just take you in the ass…" He trails off as she interrupts him.');
      scene.text('"No, not a virgin! I\'ve just never been with a guy before," she clarifies before turning her attention to you and starts licking your clit.');
      scene.text('"Oh," you can sense his slight confusion but he doesn\'t let that stop him. Katja moans into you when Lazar enters her from behind. He is very slow and gentle with her; before long she is starting to moan in pleasure while she eats you out.');
      scene.text('The louder she moans, the harder he starts to fuck her. "A dick feels different from a dildo, it is so much warmer!"');
    } else {
      if (((s as any).katjaQW ?? 0)?.['lazar_pussy'] === 0) {
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
        scene.text('Katja looks back at him. "I don\'t know what you like, but don\'t be too rough with me; I like to make love."');
        scene.text('He chuckles. "I will endeavor to give you the best lovemaking you have ever had." Then she turns her attention to you and starts licking your clit. Katja moans into you as Lazar enters her from behind. He is very slow and gentle with her, before long she is starting to moan in pleasure while she eats you out.');
        scene.text('The louder she moans, the harder he starts to fuck her, but he doesn\'t get too carried away. "I always heard you were really good; it\'s nice to find out the rumors are true!"');
      } else {
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
        scene.text('Katja starts licking your clit, already knowing what Lazar has in store for her. Lazar enters her and she moans into your cunt, followed by yells of ecstasy as he starts to fuck her. They quickly find their rhythm, already knowing well their bodies and desires.');
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['lazer_pussy'] === 0) {
    ((s as any).katjaQW ?? {})['lazer_pussy'] = 1;
  }
  if (((s as any).npc_vag ?? 0)?.['A14'] === 0) {
    ((s as any).npc_vag ?? {})['A14'] = 20;
  } else {
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
  }
  qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some10.jpg');
    // TODO-QSP: dynamic text: Katja's cries get louder, though they're mostly muffled by your pussy as she con...
    scene.text(`Katja's cries get louder, though they're mostly muffled by your pussy as she continues to eat you out. While he pounds Katja's twat, you noticed he's now looking directly at you, like he wants to swap and fuck you now. He grins. "Alright, I don't want ${((s as any).pcs_nickname ?? 0)} to feel left out."`);
    scene.text('He pulls his cock from Katja\'s pussy and takes a seat at his end of the couch before inviting you to ride him.');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn', goto: ['katja_uni_sex', 'get_fucked_by_lazar'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGetFuckedByLazar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some11.jpg');
  scene.text('You move down the couch and straddle him, holding yourself over his dick.');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('"Please, be gentle. This is my first time," you tell him.');
    scene.text('He looks surprised. "You sure? I could fuck you in the ass instead if you want."');
    scene.text('You shake your head. "No, I\'m sure. I\'m ready and I want you to by my first."');
    scene.text('You start to lower yourself, you feel the tip of his dick slide into your twat and you slow down as you take more of his length into you. You feel the pain of your hymen tearing, but it also feels good, better than you\'d have thought.');
    scene.text('Lazar seems content to let you control things and he coaxes Katja to sit on his face.');
  } else {
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('"Please be gentle, this is my first time with a man," you tell him.');
      scene.text('He looks a bit surprised. "You\'re a virgin? You sure? I could fuck you in the ass instead if you want."');
      scene.text('"No, I\'m not a virgin! I\'ve just never been with a guy before," you tell him as you slowly start lowering yourself down, guiding his dick into your wet slit.');
      scene.text('"Oh," You can sense his slight confusion. As you slowly lower yourself more until you feel completely full, Lazar seems content to just let you control things and he coaxes Katja to sit on his face so he can eat her out.');
      // TODO-QSP: dynamic text: You moan loudly as you take more of his <<dick>>cm <<$dick_girth>> dick inside o...
      scene.text(`You moan loudly as you take more of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside of you. "A dick feels different from a dildo, it is so much warmer!" You say to Katja as you slowly ride Lazar's cock.`);
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A149'] === 0) {
        scene.text('While you straddle him, you look at him. "I don\'t know what you like, but I\'m going to control this, okay?"');
        scene.text('He chuckles, "Sure thing."');
        scene.text('Lazar seems content to just let you control things, and he coaxes Katja to sit on his face so he can eat her out.');
        // TODO-QSP: dynamic text: You moan loudly as you take more of his <<dick>>cm <<$dick_girth>> dick inside o...
        scene.text(`You moan loudly as you take more of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside of you. "He's so much bigger than I was expecting!" you say to Katja as you slowly ride Lazar's cock.`);
      } else {
        // TODO-QSP: dynamic text: You slowly start lowering yourself down, guiding his dick into your wet slit. Yo...
        scene.text(`You slowly start lowering yourself down, guiding his dick into your wet slit. You moan loudly as you take more of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside of you. "Ohh, he is so big! I love it," you say to Katja as you slowly ride Lazar's cock.`);
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some12.jpg');
    // TODO-QSP: dynamic text: You watch Katja sitting on Lazar's face while you continue riding him. It feels ...
    scene.text(`You watch Katja sitting on Lazar's face while you continue riding him. It feels so good to be in control of the rhythm and depth. Just as you feel you were reaching your peak, Lazar has Katja get off his face and he grabs you by the waist and pulls you off from him, his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock popping free from your cunt.`);
    scene.text('"Okay, girls, before I finish, there\'s still one more hole of yours that I need to fuck."');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['anal_quest'] > 1) {
      scene.actions([
        { label: 'Continue', goto: ['katja_uni_sex', 'katja_anal_fucked'] },
      ]);
    } else {
      scene.actions([
        { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some11.jpg');
    scene.text('You resist him trying to move you. "Nope, no ass for you today. Just be quiet and let me ride you." It feels so good to be in control. As you straddle his lap and plunge his dick back in your wet pussy, Katja remounts his face as you keep riding him.');
    scene.text('"Fuck… I\'m about to cum," he groans loudly, and you both quickly climb off him.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to your knees', goto: ['katja_uni_sex', 'lazar_katja_cum'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterKatjaAnalFucked(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some13.jpg');
  scene.text('Still holding on to you, Lazar puts you gently down on the couch before picking up Katja and setting her on top of you in a sixty-nine position. Katja lowers herself so her cunt is against your mouth and you start licking and sucking. Lazar grabs a bottle of lubricant before propping himself up behind Katja pressing his cock against her asshole.');
  if (((s as any).npc_ass ?? 0)?.['A14'] === 0) {
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (5);
    scene.text('Katja looks back at Lazar, pleadingly. "Um, this is my first time trying anal. So please, go slow."');
    scene.text('He chuckles and gives her ass a slap. "Don\'t worry, your ass is in good hands; just relax."');
    scene.text('He presses his dick against her asshole and pushes until the head pops inside her. She hisses in pain and he stops. "Just take a deep breath and relax."');
    scene.text('She does as he says and he starts slowly fucking her butt, stopping occasionally to let her relax. After a while, she stops tensing up and he starts going a little deeper and faster, but still not too hard. "This doesn\'t hurt like I thought it would! It actually feels kind of good," she says.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (3);
      scene.text('Katja looks back at Lazar. "This is my first time with a guy, so let\'s take it slow. Okay?"');
      scene.text('He chuckles and gives her ass a slap. "Don\'t worry your ass is in good hands; just stay relaxed."');
      scene.text('He presses his dick against her asshole and pushes until the head pops inside her. She groans and he stops. "Just take a deep breath and relax."');
      scene.text('She does as he says and he starts slowly fucking her ass, but he realizes that she seems rather into it so he starts going a bit deeper and harder. She starts moaning in pleasure; the louder she gets, the harder he fucks her. "A dick feels different from a dildo, it is so much hotter."');
    } else {
      if (((s as any).katjaQW ?? 0)?.['lazar_anal'] === 0) {
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
        scene.text('Katja glances back at Lazar. "I\'m not sure what you like, but just don\'t get too rough with me."');
        scene.text('He chuckles, "I will endeavor to give you the best anal fucking you\'ve ever had."');
        scene.text('He presses his dick against her asshole and pushes until the head pops inside her. Katja moans from the double pleasure of having her ass penetrated and you licking her pussy; she\'s quickly getting into it.');
        scene.text('The louder she gets with her moans, the harder Lazar fucks her; though he still shows some restraint.');
        scene.text('"Yes, that\'s it!" she cries. "Not too deep! Just like that! Oh, mmm, yes!"');
      } else {
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
        scene.text('Katja glances back at Lazar. "You know I like it, but don\'t go too deep or get too rough!"');
        scene.text('He chuckles and slaps her ass. "You and I both know you love it when I fuck your ass!"');
        scene.text('He presses his dick against her asshole and pushes until the head pops inside her. Katja moans from the double pleasure of having her ass penetrated and you licking her pussy; she\'s quickly getting into it.');
        scene.text('"Yes, that\'s it!" she cries. "Not too deep! Just like that! Oh, mmm, yes!"');
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['lazer_anal'] === 0) {
    ((s as any).katjaQW ?? {})['lazer_anal'] = 1;
  }
  if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
    ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
  }
  if (((s as any).npc_ass ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
    ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
  }
  qspCall(s, 'arousal', 'erotic', 3);
  qspCall(s, 'arousal', 'cuni_give', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep eating her out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some14.jpg');
    // TODO-QSP: dynamic text: While you lick at Katja's pussy, you watch as Lazar sinks his <<dick>>cm <<$dick...
    scene.text(`While you lick at Katja's pussy, you watch as Lazar sinks his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick most of the way up her ass. She occasionally grunts and flinches when he goes a little too fast or pushes in a little too deep, but he always pulls backs and holds her in place.`);
    scene.text('Katja\'s moans start to get louder and her pussy juice is running down your face as she quickly approaches an orgasm. Lazar continues fucking her ass as she spasms over you but he pulls out of her once she\'s done.');
    // TODO-QSP: dynamic text: He looks down at you, "Come on, <<$pcs_nickname>>. I want to fuck your ass now."
    scene.text(`He looks down at you, "Come on, ${((s as any).pcs_nickname ?? 0)}. I want to fuck your ass now."`);
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'arousal', 'cuni_give', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck your ass', goto: ['katja_uni_sex', 'fucked_anal_by_lazar'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckedAnalByLazar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some15.jpg');
  scene.text('He turns you around and lays beside you. Katja, still wearing a blissful smile, kneels down and lifts your leg up to hold it in place. Lazar rubs some more lube on his cock and against your asshole.');
  if ((!((s as any).pcs_ass ?? 0))) {
    scene.text('You reach back and place your hand on Lazar\'s chest. "I haven\'t done this before, so please…"');
    // TODO-QSP: dynamic text: He grabs your hand and gives it a squeeze. "It's alright, <<$pcs_nickname>>, I'l...
    scene.text(`He grabs your hand and gives it a squeeze. "It's alright, ${((s as any).pcs_nickname ?? 0)}, I'll be gentle. I'll put it in nice and slow; you just breathe and relax, okay?"`);
    scene.text('You take a deep breath and slowly release it as you feel the tip of his cock pressing against your virgin sphincter.');
    scene.text('You let out a gasp when his head pops into your butt. "See, that wasn\'t so bad," he says as you adjust to his member inside of your ass.');
    // TODO-QSP: dynamic text: He starts to slowly move his cock inside of you. Katja places her head next to y...
    scene.text(`He starts to slowly move his cock inside of you. Katja places her head next to yours. "It doesn't feel that painful, does it, ${((s as any).pcs_nickname ?? 0)}? Feels really good?"`);
  } else {
    if (((s as any).stat ?? 0)?.['anal'] === 0) {
      scene.text('"This is my first time trying this with a guy," you tell him.');
      scene.text('He looks at you and smiles. "Don\'t worry, it will feel good. Just remember to breathe and relax."');
      scene.text('You take a deep breath and slowly release it as you feel the tip of his cock pressing against your butthole.');
      // TODO-QSP: dynamic text: His head pops into your butt and he slowly fills you up with his <<dick>>cm memb...
      scene.text(`His head pops into your butt and he slowly fills you up with his ${((s as any).dick ?? 0)}cm member. He stops for a second before he starts to slowly fuck you.`);
      // TODO-QSP: dynamic text: "It feels so different from a dildo, doesn't it, <<$pcs_nickname>>?" Katja asks ...
      scene.text(`"It feels so different from a dildo, doesn't it, ${((s as any).pcs_nickname ?? 0)}?" Katja asks you. "It's so much hotter than a toy!"`);
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A149'] === 0) {
        scene.text('"I\'m not sure what you like, but don\'t get too rough," you tell him.');
        scene.text('"Don\'t worry," he says in his most reassuring voice. "It will feel good. Just remember to breathe and relax."');
        scene.text('You take a deep breath and slowly release it as you feel the tip of his cock pressing against your butthole.');
        // TODO-QSP: dynamic text: His head pops into your butt and he slowly fills you up with his <<dick>>cm memb...
        scene.text(`His head pops into your butt and he slowly fills you up with his ${((s as any).dick ?? 0)}cm member. He stops for a second before he starts to slowly fuck you.`);
        scene.text('"He\'s so big; it feels like he is about to push it out your throat, doesn\'t it?" Katja asks while she watches Lazar fuck you.');
      } else {
        scene.text('You take a deep breath and slowly release it, trying to relax as much as you can. You feel the tip of his dick pushing into your asshole and Lazar starts to slowly fuck you; not too deep and not too fast.');
        scene.text('"I just love watching his huge dick disappear up your ass," Katja says.');
      }
    }
  }
  qspCall(s, 'arousal', 'anal', 2, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get anally fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some16.jpg');
    // TODO-QSP: dynamic text: He starts slowly pushing his <<dick>>cm <<$dick_girth>> cock deeper up your ass,...
    scene.text(`He starts slowly pushing his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock deeper up your ass, fucking you faster until he figures out your limit. Once he finds that sweet spot, he tries to stay in it.`);
    scene.text('Sometimes he goes too deep or fast, which makes you cry out a bit, but he quickly backs off until he makes it feel as good as he can. After a bit, Katja reaches down and starts rubbing your clit.');
    scene.text('Suddenly, Lazar yanks his dick out of your ass and scrambles to his feet. "Fuck, I\'m cumming!"');
    qspCall(s, 'arousal', 'anal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'clit_finger', (-3), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Back to your knees', goto: ['katja_uni_sex', 'lazar_katja_cum'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarKatjaCum(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW ?? {})['horny'] = 0;
  ((s as any).npc_had_sex ?? {})['A149'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_katja_uni_3some17.jpg');
  scene.text('You and Katja kneel down in front of Lazar as he starts furiously jerking off. You face each other with your mouths open and your tongues out, and soon you are rewarded with your treat when Lazar starts shooting cum all over your faces.');
  scene.text('He swaps between the two of you repeatedly until he finally stops cumming.');
  scene.text('Panting and sweating, he moves over and drops onto the couch to catch his breath while he looks at the two of you covered in his cum.');
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'katja_meynold_schedule', '');
    qspCall(s, 'cum_cleanup', '', 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT2.jpg');
    scene.text('You clean up, get dressed and say goodbye to Lazar. He tells you it was great having you over and that you should come again. You answer him that it was a great time.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
      ((s as any).katjaQW ?? {})['QWstage'] = 6;
      ((s as any).katjaQW ?? {})['anal_quest'] = 3;
      scene.text('As you walk back towards the campus, Katja is silent and looks a little thoughtful. "So? How was your first time having sex with a boy?" you ask.');
      scene.text('"It was great!" she answers. "Having a cock in my pussy and ass was so exciting! I don\'t thing many girls do both for the first time at the same time," she continues, practically gleaming.');
      scene.text('"This is definitely something we need to repeat," she says. "Don\'t worry, I still love your tongue on my pussy."');
    } else {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        ((s as any).katjaQW ?? {})['QWstage'] = 6;
        scene.text('As you walk back towards the campus, Katja is silent and looks a little thoughtful. "So? How was your first time having sex with a boy?" you ask.');
        scene.text('"It was good," she answers "It\'s definitely something we need to repeat," she says "Don\'t worry, I still love your tongue on my pussy."');
      } else {
        if (((s as any).katjaQW ?? 0)?.['anal_quest'] === 2) {
          ((s as any).katjaQW ?? {})['anal_quest'] = 3;
          scene.text('As you walk back towards the campus, Katja is silent and looks a little thoughtful. "So? How was your first time having a dick in your ass?" you ask.');
          scene.text('"It was an interesting experience and kind of exciting," she says "This is something I want to try again. Don\'t worry, I still love your tongue on my pussy."');
        } else {
          scene.text('As you walk back towards the campus, Katja starts talking about how great the sex with Lazar was, to which you agree.');
        }
      }
    }
    if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] > ((s as any).daystart ?? 0)) {
      scene.text('"Are you on birth control?" you ask. "Yes but I don\'t think it is working yet. I should probably go take a morning-after pill to be safe" Katja says looking a little worried.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
        scene.text('"Are you on birth control?" you ask. "No. But I definitely should be. I will go get started tomorrow, and maybe also take a morning-after pill to be safe" Katja says looking a little worried.');
        ((s as any).katjaQW ?? {})['birth_control_start_day'] = ((s as any).daystart ?? 0) + 15;
      } else {
        if (((s as any).katjaQW ?? 0)?.['birth_control_know'] === 0) {
          ((s as any).katjaQW ?? {})['birth_control_know'] = 1;
          scene.text('"Are you on birth control?" you ask. "Yes. Of course I am prepared" Katja says looking a little proud.');
        }
      }
    }
    scene.text('You continue to chat about the experience on the way back.');
    if (((s as any).locat ?? 0)?.['katja'] === 31) {
      scene.text('"Want to come back to my dorm room?" she asks as you reach campus.');
      scene.actions([
        { label: 'Go with Katja to her room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 44) {
        scene.text('"I\'m going to the city mall to look at clothes. Want to come?" she asks before you arrive at the campus.');
        scene.actions([
          { label: 'Go with Katja to the city mall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katja_city', 'metro'] },
        ]);
      } else {
        if (((s as any).locat ?? 0)?.['katja'] === 29) {
          scene.text('"I need to go to the library to study. Want to join me?" she asks as you reach campus.');
          scene.actions([
            { label: 'Go to the library with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katja_uni', 'library2'] },
          ]);
        } else {
          scene.text('"I have to run and do something. See you soon," she says as you reach campus.');
        }
      }
    }
    scene.actions([
      { label: 'Say goodbye to Katja', goto: ['uni_grounds', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarIvanKatjaUni_4some(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npcStat', 'A141');
  qspCall(s, 'npcStat', 'A3', 'a');
  qspCall(s, 'npcStat', 'A149', 'b');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KH.jpg');
  // TODO-QSP: dynamic text: You and Katja make your way towards Lazar's house. '+iif(katjaQW['ivan_anal'] = ...
  scene.text('You and Katja make your way towards Lazar\'s house. \'+iif(katjaQW[\'ivan_anal\'] = 1, \'"It\'s going to be fun having Ivan there. He really knows how to use his cock in your ass,"\', \'"I\'ve heard that Ivan has a big cock and only fucks girls in the ass. At least I have some experience with that,"\')+\' Katja says with a giggle.');
  // TODO-QSP: dynamic text: "'+iif(IvanShowerQW = 11, 'Ivan definitely knows how to please a girl during ana...
  scene.text('"\'+iif(IvanShowerQW = 11, \'Ivan definitely knows how to please a girl during anal sex,\', \'I\'ve heard the same and I\'m looking forward to trying it,\')+\'" you answer.');
  // TODO-QSP: iif(katjaQW['ivan_anal'] = 1, '"Good thing we get to experience it again,"', '"Well now '+iif(IvanSh...
  // TODO-QSP: dynamic text: You arrive at Lazar's house and he lets you in. Ivan is sitting and '+iif(katjaQ...
  scene.text('You arrive at Lazar\'s house and he lets you in. Ivan is sitting and \'+iif(katjaQW[\'ivan_anal\'] = 1, \'gets up to give both you and Katja a big hug,\', \'gets up to greet you\')+\' and tells you it\'s great seeing you again.');
  scene.text('You sit down and the four of you spend some time talking. It\'s mostly just Ivan talking about how his training is going, with Lazar taking occasional jabs at him not being a professional yet. Ivan just shoots back at him for studying instead of playing football.');
  scene.text('After a while, you can see that Katja is getting more and more horny so you lean over to her and whisper "Why don\'t we give them a show to get this party started?" She agrees with an enthusiastic nod.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Strip with Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some1.jpg');
    scene.text('The two of you get up and begin dancing, removing your outer clothes to reveal the matching black bodysuits that you had prepared. You start dancing intimately, kissing each other on occasion before slowly peeling off each other\'s bodysuits.');
    scene.text('"Yes. Go, girls!" Lazar shouts.');
    // TODO-QSP: iif(katjaQW['ivan_anal'] = 1, '"Whoa. This is really hot. Fantastic to finally see two of the hottes...
    scene.text('Encouraged, you and Katja continue and are so engrossed by each other that you don\'t notice that the guys have taken their clothes off.');
    qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'The guys join', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some2.jpg');
    // TODO-QSP: dynamic text: While you and Katja are sitting on your knees on the couch, sharing a long kiss,...
    scene.text(`While you and Katja are sitting on your knees on the couch, sharing a long kiss, the guys move in. Katja quickly has Lazar's ${((s as any).dick2 ?? 0)} cm, ${((s as any).dick_girth2 ?? 0)} dick in her hand, while Ivan approaches you from behind.`);
    scene.text('You and Katja break off your kiss and, with a look, decide to give the guys some attention.');
    qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-2), ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck some dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some3.jpg');
    // TODO-QSP: dynamic text: You turn around and take Ivan's <<dick1>> cm, <<$dick_girth1>> cock in your eage...
    scene.text(`You turn around and take Ivan's ${((s as any).dick1 ?? 0)} cm, ${((s as any).dick_girth1 ?? 0)} cock in your eager mouth. At the same time, Katja is exploring Lazar's cock with her mouth.`);
    scene.text('"Suck that dick," Ivan says.');
    scene.text('"Yeah, show us what good little cocksucking sluts you are!" Lazar adds, and the two of you start sucking eagerly to show off your skills.');
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swap cocks', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some4.jpg');
    scene.text('"Let\'s see if you both are equally skilled," Ivan says when he pulls you off his cock.');
    scene.text('"Yes, let\'s switch," Lazar agrees, letting Katja off his dick.');
    scene.text('You and Katja turn around and, without changing places, start devouring Lazar\'s cock while Katja takes Ivan\'s dick in her hungry mouth.');
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some5.jpg');
    scene.text('"I want to see how far you can take our dicks down your throats," Lazar says, removing your head from his cock.');
    scene.text('"Sounds great," Ivan replies, removing Katja\'s mouth from his cock.');
    scene.text('He then grabs you and throws you down on your back on the couch with your feet in the air and head dangling free. Meanwhile, Lazar does the same to Katja.');
    if (((s as any).katjaQW ?? 0)?.['deepthroat'] === 0) {
      ((s as any).katjaQW ?? {})['deepthroat'] = 1;
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (5);
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (10);
      if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
        ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (2);
      }
      scene.text('Katja is very surprised as Lazar rams his cock down her throat, and it is clearly causing her problems. But she seems almost too shocked to do anything and is just laying there as he has his way with her.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['deepthroat'] < 10  ||  2*((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
        ((s as any).katjaQW ?? {})['deepthroat'] = (((s as any).katjaQW ?? {})['deepthroat'] ?? 0) + (1);
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (3);
        ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) - (5);
        if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
          ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (2);
        }
        scene.text('Katja knows what\'s coming, but is still not completely prepared, when Lazar rams his cock down her throat. She tries to take it like a pro, but she clearly has problems not gagging under Lazar\'s onslaught.');
      } else {
        ((s as any).katjaQW ?? {})['deepthroat'] = (((s as any).katjaQW ?? {})['deepthroat'] ?? 0) + (1);
        ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
        ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (10);
        if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
          ((s as any).npc_throat ?? {})['A14'] = (((s as any).npc_throat ?? {})['A14'] ?? 0) + (1);
        }
        scene.text('Katja is ready as Lazar rams his cock down her throat. She takes it like a pro under Lazar\'s onslaught, seemingly having no gag reflex, and even seems to be enjoying it.');
      }
    }
    if (2*((s as any).pcs_throat ?? 0) < ((s as any).dick1 ?? 0)) {
      // TODO-QSP: dynamic text: You only have a moment before Ivan stuffs his <<$dick_girth1>> cock in your thro...
      scene.text(`You only have a moment before Ivan stuffs his ${((s as any).dick_girth1 ?? 0)} cock in your throat. You have a lot of trouble accommodating it and your gag reflex is constantly giving you problems.`);
    } else {
      if (((s as any).pcs_throat ?? 0) < ((s as any).dick1 ?? 0)) {
        // TODO-QSP: dynamic text: You only have a moment before Ivan stuffs his <<$dick_girth1>> cock in your thro...
        scene.text(`You only have a moment before Ivan stuffs his ${((s as any).dick_girth1 ?? 0)} cock in your throat. You have a little trouble accommodating it and your gag reflex is occasionally giving you problems.`);
      } else {
        // TODO-QSP: dynamic text: You only have a moment before Ivan stuffs his <<$dick_girth1>> cock in your thro...
        scene.text(`You only have a moment before Ivan stuffs his ${((s as any).dick_girth1 ?? 0)} cock in your throat. You have no trouble taking it all and you deepthroat it like a pro.`);
      }
    }
    qspCall(s, 'arousal', 'bj', 4, ((s as any).npcID2 ?? 0), 'group', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start getting butt fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some6.jpg');
    scene.text('"Time to try those assholes," Ivan says and Lazar quickly agrees.');
    scene.text('"Get on all fours," Lazar demands.');
    scene.text('You and Katja quickly follow orders and crawl up on the couch, discarding the rest of your bodysuits as you do so and present your butts to the guys.');
    if (((s as any).auto_anal_lube ?? 0) === 1) {
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        ((s as any).mc_inventory ?? {})['lubricant'] = (((s as any).mc_inventory ?? {})['lubricant'] ?? 0) - (1);
        scene.text('You hand your bottle of lube to Ivan. "Use this," you tell him.');
        scene.text('"Okay," he answers and squirts some on your butthole and uses his fingers to apply it properly.');
        scene.text('You look over at Katja and see that she\'s doing the same with Lazar.');
      } else {
        scene.text('You grab your bottle of lube but notice it\'s empty. A little panicked, you look over and see that Katja has already handed Lazar her bottle of lube and he\'s applying it to her asshole.');
        scene.text('"Katja, can I borrow some lube please?" you ask.');
        scene.text('"Of course," she answers.');
        scene.text('Lazar passes the bottle to Ivan, and you soon feel the cool ointment being spread on your asshole by Ivan\'s finger.');
      }
      scene.text('After both of you are lubed up, the guys position their dicks at your assholes.');
      qspCall(s, 'arousal', 'anal_finger', 1, ((s as any).npcID1 ?? 0), 'lube', 'group');
      ((s as any).katjaQW ?? {})['lube'] = 1;
    } else {
      scene.text('Ivan applies some spit to your asshole and you can see Lazar doing the same to Katja before they position their dicks.');
    }
    // TODO-QSP: dynamic text: They then slowly push their dicks into your assholes. '+iif(IvanShowerQW = 11, '...
    scene.text('They then slowly push their dicks into your assholes. \'+iif(IvanShowerQW = 11, \'"Your ass is great as always,"\', \'"I\'ve wanted to try your asshole for a long time,"\')+\' Ivan says. You don\'t answer him because your mouth has found Katja\'s and you are kissing her.');
    qspCall(s, 'arousal', 'anal', 2, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-2), ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your ass pounded', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some7.jpg');
    // TODO-QSP: dynamic text: The guys start picking up the pace and they're soon pounding your assholes fast ...
    scene.text(`The guys start picking up the pace and they're soon pounding your assholes fast and hard. You can see that Katja is '+iif( npc_ass['A14'] + 8*katjaQW['lube'] < dick2, 'taking Lazar's ${((s as any).boydesc2 ?? 0)}, ${((s as any).dick_girth2 ?? 0)} cock like a pro and', 'having some trouble taking Lazar's ${((s as any).boydesc2 ?? 0)}, ${((s as any).dick_girth2 ?? 0)} cock, so you')+' decide to give her another deep kiss.`);
    // TODO-QSP: dynamic text: While you and Katja's tongues are fighting in each other's mouths, you hear Ivan...
    scene.text('While you and Katja\'s tongues are fighting in each other\'s mouths, you hear Ivan say "This\'+iif( pcs_ass < dick1, \' is a nice, tight asshole\', \' asshole is used to taking big dicks, but it\'s still great\')+\'."');
    qspCall(s, 'arousal', 'anal', 4, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-4), ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
      ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_ass ?? 0)?.['A14']*2 < ((s as any).dick2 ?? 0)) {
      ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
    }
    // TODO-QSP: dynamic text: After a few minutes, the guys get off you. "I want some pussy now," Lazar says a...
    scene.text(`After a few minutes, the guys get off you. "I want some pussy now," Lazar says as he lies on his back on the couch. "Jump on, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'Get on Lazar\'s cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some8.jpg');
    // TODO-QSP: dynamic text: You do as Lazar says and sit down on his <<$dick_girth2>> dick. Ivan moves so th...
    scene.text(`You do as Lazar says and sit down on his ${((s as any).dick_girth2 ?? 0)} dick. Ivan moves so that his cock is in your face and Katja joins you in sucking it while you ride Lazar.`);
    scene.text('After a short period, Ivan moves away and gets behind you, lining his dick with your asshole.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] < 2) {
      scene.actions([
        { label: 'Tell them you have never had a double penetration before', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some8b.jpg');
    scene.text('"Stop, Ivan! I\'ve never had two cocks at the same time," you say.');
    scene.text('"So you want me to not do it?" he asks. "I\'ll be gentle and I\'m sure you\'ll like it," he continues.');
    scene.actions([
      { label: 'Tell him to do it', goto: ['katja_uni_sex', 'lazar_ivan_dp'] },
      { label: 'Tell him to not do it', handler: (st: GameState) => {
    scene.text('"No, I don\'t want you to do it," you tell him.');
    scene.text('"Okay," he answers, "I want to try Katja\'s ass anyway," he says.');
    scene.actions([
      { label: 'Back to butt fucking', goto: ['katja_uni_sex', 'lazar_ivan_anal2'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell Ivan to stuff your ass', goto: ['katja_uni_sex', 'lazar_ivan_dp'] },
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarIvanDp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 0) {
    ((s as any).katjaQW ?? {})['Lazar_Ivan_4some'] = 2;
  } else {
    if (((s as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 1) {
      ((s as any).katjaQW ?? {})['Lazar_Ivan_4some'] = 3;
    }
  }
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some9.jpg');
  scene.text('Lazar stops moving and Katja moves down to see the penetrations and starts playing with his balls before Ivan slowly puts his dick into your ass, pausing for a short while after it\'s completely in.');
  scene.text('Seeing they are completely in, Katja says "Start moving, guys!" and they slowly start thrusting, eventually picking up the speed. Katja continues to excitedly encourage them to go faster and faster.');
  qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID2 ?? 0), 'group');
  qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID1 ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get both of your holes pounded', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some10.jpg');
    scene.text('They have really amped up the intensity and you\'re getting both your ass and pussy pounded hard. Katja moves around and her mouth and tongue find yours and you start making out.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.text('After some minutes, the guys stop. "Now it\'s Katja\'s turn," Lazar says.');
    scene.text('"Yeah, I also want to try her ass," Ivan agrees.');
    if (((s as any).katjaQW ?? 0)?.['dp'] === 0) {
      scene.text('"I\'ve never tried something like that!" Katja says, a little shocked. "I don\'t know if I\'ll… be able to…" she stammers.');
      scene.text('"Well, there\'s a first time for everything," Lazar says.');
      if (((s as any).katjaQW ?? 0)?.['slut'] < 100  ||  ((s as any).katjaQW ?? 0)?.['horny'] < 100) {
        scene.text('"No," Katja suddenly says in a firm voice. "No, there doesn\'t need to be a first time, and definitely not now!"');
        scene.text('The guys look disappointed, but understand that there might be other opportunities in the future.');
        scene.text('"At least let me fuck your ass," Ivan says.');
        scene.text('"Okay, we can do that," she says.');
        scene.actions([
          { label: 'More butt fucking', goto: ['katja_uni_sex', 'lazar_ivan_anal2'] },
        ]);
      } else {
        scene.text('After a long pause, Katja says "Okay… I do want to try. But please be gentle."');
        scene.text('The two guys look very excited.');
        scene.actions([
          { label: 'Watch Katja\'s first DP', goto: ['katja_uni_sex', 'lazar_ivan_katja_dp'] },
        ]);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['dp'] < 5) {
        scene.text('"Okay… But please be gentle," Katja says, making the guys look very excited.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['dp'] < 10) {
          scene.text('"Okay. Let\'s do it," she says, making the guys look very excited.');
        } else {
          scene.text('"What are you waiting for? I need both my holes stuffed right now!" Katja says, making the guys almost lose their minds in excitement.');
        }
      }
      scene.actions([
        { label: 'Katja gets a DP', goto: ['katja_uni_sex', 'lazar_ivan_katja_dp'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterLazarIvanKatjaDp(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some11.jpg');
  scene.text('Ivan removes his dick from your ass and you get off Lazar. You then take hold of Lazar\'s dick and tell Katja to get on it.');
  if (((s as any).katjaQW ?? 0)?.['dp'] === 0) {
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (5);
    // TODO-QSP: dynamic text: She does so after a little hesitation, '+iif(npc_vag['A14'] < dick2, 'still not ...
    scene.text(`She does so after a little hesitation, '+iif(npc_vag['A14'] < dick2, 'still not completely comfortable with a dick his size', 'taking his ${((s as any).boydesc2 ?? 0)} cock like it was something she does every day')+'.`);
    // TODO-QSP: dynamic text: You then'+iif(katjaQW['lube'] = 1, ' start adding more lube to her asshole and '...
    scene.text('You then\'+iif(katjaQW[\'lube\'] = 1, \' start adding more lube to her asshole and \', \' \')+\'decide to give Ivan\'s cock a good sloppy blowjob to apply more lubrication.');
    // TODO-QSP: dynamic text: After a minute of getting his dick ready and Katja comfortable on Lazar's cock, ...
    scene.text(`After a minute of getting his dick ready and Katja comfortable on Lazar's cock, you guide Ivan's ${((s as any).dick_girth1 ?? 0)} dick into Katja's'+iif(npc_ass['A14'] < 5, ' tiny', ' '+iif(npc_vag['A14'] < 10, 'somewhat', 'well')+'used')+' asshole.`);
  } else {
    if (((s as any).katjaQW ?? 0)?.['dp'] < 5) {
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (3);
      // TODO-QSP: dynamic text: She does so with little hesitation '+iif(npc_vag['A14'] < dick2, 'still not comp...
      scene.text(`She does so with little hesitation '+iif(npc_vag['A14'] < dick2, 'still not completely comfortable with dicks his size', 'taking his ${((s as any).boydesc2 ?? 0)} cock as if it were something she does everyday')+'.`);
      // TODO-QSP: dynamic text: You then'+iif(katjaQW['lube'] = 1, ' start adding more lube to her asshole and '...
      scene.text('You then\'+iif(katjaQW[\'lube\'] = 1, \' start adding more lube to her asshole and \', \' \')+\'decide to give Ivan\'s cock a good sloppy blowjob to apply more lubrication.');
      // TODO-QSP: dynamic text: After a minute of getting his dick ready with Katja already riding Lazar's cock,...
      scene.text(`After a minute of getting his dick ready with Katja already riding Lazar's cock, you stop her and guide Ivan's ${((s as any).dick_girth1 ?? 0)} dick into Katja's'+iif(npc_ass['A14'] < 5, ' tiny', ' '+iif(npc_vag['A14'] < 10, 'somewhat', 'well')+'used')+' asshole.`);
    } else {
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
      // TODO-QSP: dynamic text: She quickly jumps on it '+iif(npc_vag['A14'] < dick2, 'still not completely comf...
      scene.text(`She quickly jumps on it '+iif(npc_vag['A14'] < dick2, 'still not completely comfortable with dicks his size', 'taking his ${((s as any).boydesc2 ?? 0)} cock as if it were something she does everyday')+'.`);
      // TODO-QSP: dynamic text: You then'+iif(katjaQW['lube'] = 1, ' start adding more lube to her asshole and '...
      scene.text('You then\'+iif(katjaQW[\'lube\'] = 1, \' start adding more lube to her asshole and \', \' \')+\'decide to give Ivan\'s cock a good sloppy blowjob to apply more lubrication, while Katja starts to ride Lazar hard.');
      // TODO-QSP: dynamic text: After a minute of getting his dick ready, Katja starts yelling at you. "<<$pcs_n...
      scene.text(`After a minute of getting his dick ready, Katja starts yelling at you. "${((s as any).pcs_nickname ?? 0)}, get his cock in my ass now!"`);
      // TODO-QSP: dynamic text: You guide Ivan's <<$dick_girth1>> dick into Katja's'+iif(npc_ass['A14'] < 5, ' t...
      scene.text(`You guide Ivan's ${((s as any).dick_girth1 ?? 0)} dick into Katja's'+iif(npc_ass['A14'] < 5, ' tiny', ' '+iif(npc_vag['A14'] < 10, 'somewhat', 'well')+'used')+' asshole.`);
    }
  }
  qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'bj', (-1), ((s as any).npcID1 ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch Katja get two cocks at once', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some12.jpg');
    // TODO-QSP: dynamic text: Ivan slowly pushes his cock into Katja's ass, taking his time to get as much in ...
    scene.text('Ivan slowly pushes his cock into Katja\'s ass, taking his time to get as much in he can.\'+iif(pcs_ass[\'A14\'] + 4*katjaQW[\'lube\'] < dick1 or 2*pcs_vag[\'A14\'] < dick2, \' Katja is clearly looking uncomfortable, biting her lips to hide the pain\', \'Katja is taking it fine\')+\'.');
    if (((s as any).katjaQW ?? 0)?.['dp'] === 0) {
      scene.text('When Ivan finally stops pushing, Katja lets out a sigh. "Whoa, so this is how it feels having a dick in both your ass and pussy," she says, sounding surprised.');
      scene.text('After a moment, Ivan asks if Katja is okay and if they can start to move. She agrees with a slight nod. The guys then start moving and try to coordinate their thrusts to give Katja the most pleasure.');
    } else {
      if (((s as any).pcs_ass ?? 0)?.['A14'] + 4*((s as any).katjaQW ?? 0)?.['lube'] < ((s as any).dick1 ?? 0)  ||  2*((s as any).pcs_vag ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
        scene.text('When Ivan finally stops pushing, you ask Katja if she is okay. She says she is, though she does not sound convincing, so you signal to Ivan that he should hold.');
        scene.text('After a little while, Katja doesn\'t seem to be in pain anymore. Ivan asks if she\'s okay and if they can start to move, and she agrees with a slight nod. The guys start moving and try to coordinate their thrusts to give Katja the most pleasure.');
      } else {
        // TODO-QSP: dynamic text: When Ivan stops pushing, he waits for a little until Katja '+iif(katjaQW['dp'] <...
        scene.text('When Ivan stops pushing, he waits for a little until Katja \'+iif(katjaQW[\'dp\'] < 5, \'tells them to start moving.\', \'yells in frustration, "Fuck me! Use those cocks!"\')+\' Then the guys start to moving and they try to coordinate their thrusts to give Katja the most pleasure.');
      }
    }
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick2 ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick2 ?? 0)) {
      ((s as any).npc_vag ?? {})['A14'] = (((s as any).npc_vag ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_ass ?? 0)?.['A14']*2 < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_ass ?? {})['A14'] = (((s as any).npc_ass ?? {})['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'foreplay', 1, ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Katja get both holes plowed at the same time', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some13.jpg');
    // TODO-QSP: dynamic text: The guys begin to pick up pace and before long, they are plowing both of Katja's...
    scene.text('The guys begin to pick up pace and before long, they are plowing both of Katja\'s holes. \'+iif( pcs_ass[\'A14\'] + 4*katjaQW[\'lube\'] < dick1 or 2*pcs_vag[\'A14\'] < dick2, \'Katja is clearly feeling a mixture of pain and pleasure, but endures\', \'Katja seems to take a lot of pleasure from it, and enjoys\')+\' the pounding.');
    // TODO-QSP: dynamic text: After some minutes with Katja letting out moans of'+iif( pcs_ass['A14'] + 4* kat...
    scene.text(`After some minutes with Katja letting out moans of'+iif( pcs_ass['A14'] + 4* katjaQW['lube'] < dick1 or 2*pcs_vag['A14'] < dick2, ' pain and ', ' ')+'pleasure, Lazar says, "I want some of ${((s as any).pcs_nickname ?? 0)}'s sweet ass!" and the guys stop.`);
    ((s as any).katjaQW ?? {})['dp'] = (((s as any).katjaQW ?? {})['dp'] ?? 0) + (1);
    if (((s as any).katjaQW ?? 0)?.['ivan_lazar_dp'] === 0) {
      ((s as any).katjaQW ?? {})['ivan_lazar_dp'] = 1;
    }
    qspCall(s, 'arousal', 'foreplay', 3, ((s as any).npcID ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to butt fucking', goto: ['katja_uni_sex', 'lazar_ivan_anal2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarIvanAnal2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some14.jpg');
  scene.text('The guys get up and you and Katja quickly end on your backs on the couch with your heads close together. Ivan stuffs his cock in Katja\'s ass while Lazar stuffs his cock in yours.');
  scene.text('They start fucking your butts hard, almost like they are almost competing. After a short while, Ivan says "Let\'s switch girls again!"');
  qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID2 ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change partners', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some15.jpg');
    scene.text('After Lazar has left you, Ivan suddenly picks you up and puts you down on the floor so that your ass is up leaning on the couch, and then Lazar does the same with Katja.');
    scene.text('Then they start to fuck you deep, and after a short while, Lazar pulls out of Katja and says that he is cumming.');
    qspCall(s, 'arousal', 'anal', (-3), ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum shots', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/sex/lazar_ivan_katja_uni_4some15.jpg');
    scene.text('Lazar cums fast all over Katja\'s face. Soon after, Ivan pulls out of you and you and Katja get up and receive his cum all over your faces. To the guys\' amazement, you start licking the cum off each other\'s faces.');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID2 ?? 0), 1, 0, 10000, 20);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1, 0, 10000, 20);
    (s as any).cumspclnt = 1;
    qspCall(s, 'cum_cleanup', '');
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (2);
    ((s as any).katjaQW ?? {})['horny'] = 0;
    ((s as any).katjaQW ?? {})['lube'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You and Katja clean up and the guys look exhausted as the two of you get dressed. Katja picks up both of the bodysuits and places them in her purse. You say goodbye to Lazar and Ivan before leaving the apartment.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'katja_meynold_schedule', '');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT2.jpg');
    if (((s as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 0  ||  ((s as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 2) {
      if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] < 2) {
        ((s as any).katjaQW ?? {})['simultanous_boys'] = 2;
      }
      if (((s as any).katjaQW ?? 0)?.['Lazar_Ivan_4some'] === 0) {
        ((s as any).katjaQW ?? {})['Lazar_Ivan_4some'] = 1;
      } else {
        ((s as any).katjaQW ?? {})['Lazar_Ivan_4some'] = 3;
      }
      // TODO-QSP: dynamic text: As you walk back towards the campus, Katja is silent and looks a little thoughtf...
      scene.text('As you walk back towards the campus, Katja is silent and looks a little thoughtful. "So? How was your first time having sex with \'+iif(katjaQW[\'simultanous_boys\'] < 2, \'two guys at once\', \'both Ivan and Lazar\')+\'?" you ask.');
      // TODO-QSP: '"It was great!" she answers. '+iif(katjaQW['dp'] = 1, '"So exciting! Trying to have a dick in both ...
      // TODO-QSP: dynamic text: "It was also nice trying Ivan's cock'+iif( katjaQW['ivan_anal'] = 1, ' again,', ...
      scene.text('"It was also nice trying Ivan\'s cock\'+iif( katjaQW[\'ivan_anal\'] = 1, \' again,\', \'. He really is an ass man like the rumors said,\')+\'" Katja says. "This is definitely something we need to repeat."');
      if (((s as any).katjaQW ?? 0)?.['ivan_anal'] === 0) {
        ((s as any).katjaQW ?? {})['ivan_anal'] = 1;
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['dp'] === 1) {
        scene.text('As you walk back towards the campus, Katja is silent and looks a little thoughtful. "So? How was your first double penetration?" you ask.');
        scene.text('"It was an interesting experience, trying to have a dick in both my pussy and ass at the same time. I think I need to try it again to really know if it\'s something I like," Katja answers.');
      } else {
        scene.text('As you walk back towards the campus, Katja starts talking about how great the sex with Lazar and Ivan was, to which you agree.');
      }
    }
    // TODO-QSP: dynamic text: "'+iif( katjaQW['slut'] < 100, 'But I do feel like a huge slut right now', 'What...
    scene.text('"\'+iif( katjaQW[\'slut\'] < 100, \'But I do feel like a huge slut right now\', \'What great sluts we are\')+\'," Katja says before she bursts out laughing.');
    scene.text('You continue to chat about the experience on the way back.');
    if (((s as any).locat ?? 0)?.['katja'] === 31) {
      scene.text('"Want to come back to my dorm room?" she asks as you reach campus.');
      scene.actions([
        { label: 'Go with Katja to her room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 44) {
        scene.text('"I\'m going to the city mall to look at clothes. Want to come?" she asks before you arrive at the campus.');
        scene.actions([
          { label: 'Go with Katja to the city mall', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katja_city', 'metro'] },
        ]);
      } else {
        if (((s as any).locat ?? 0)?.['katja'] === 29) {
          scene.text('"I need to go to the library to study. Want to join me?" she asks as you reach campus.');
          scene.actions([
            { label: 'Go to the library with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katja_uni', 'library2'] },
          ]);
        } else {
          scene.text('"I have to go do something else. See you soon," she says as you reach campus.');
        }
      }
    }
    scene.actions([
      { label: 'Say goodbye to Katja', goto: ['uni_grounds', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterMovieMasturbation1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  qspCall(s, 'arousal', 'erotic', 2);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation1.jpg');
  scene.text('Katja moves her hand to her panties and starts to gently stroke her pussy through the fabric. She doesn\'t seem to mind that you\'re watching her.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep watching', goto: ['katja_uni_sex', 'after_movie_masturbation_solo1'] },
    { label: 'Join her on the bed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'arousal', 'erotic', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation2.jpg');
    scene.text('You quickly strip down to your underwear and get back on the bed as Katja stops fondling herself.');
    scene.text('You move close in to her and whisper in her ear. "Let\'s get rid of those panties, yes?"');
    scene.actions([
      { label: 'Strip naked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation3.jpg');
    scene.text('Katja sits up and you start by removing her bra, exposing her ample breasts.');
    if (((s as any).braworntype ?? 0) === 'none') {
      scene.actions([
        { label: 'Now her panties', goto: ['katja_uni_sex', 'after_movie_masturbation2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Katja returns the favor', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation4.jpg');
    // TODO-QSP: dynamic text: Katja starts pulling down your bra, which uncovers your <<$pc_desc['breast']>> b...
    scene.text(`Katja starts pulling down your bra, which uncovers your ${((s as any).pc_desc ?? 0)?.['breast']} breasts. You then proceed to take your bras off.`);
    scene.actions([
      { label: 'Now her panties', goto: ['katja_uni_sex', 'after_movie_masturbation2'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterMovieMasturbation2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  qspCall(s, 'arousal', 'foreplay_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation5.jpg');
  scene.text('"Come on Katja, let\'s get these panties off," you say. Katja starts slowly to remove her panties but feeling impatient, you decide to help her.');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'And now your panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation6.jpg');
    scene.text('You get up on your knees so Katja can pull down your panties.');
    scene.actions([
      { label: 'Lie down', goto: ['katja_uni_sex', 'after_movie_masturbation3'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Lie down', goto: ['katja_uni_sex', 'after_movie_masturbation3'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterMovieMasturbation3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation7.jpg');
  scene.text('You and Katja lie down completely naked. Katja just looks at you and does not seem completely sure how to proceed. You just smile at her and whisper "Just continue doing what you started before I interrupted you."');
  scene.text('She slowly moves her hand towards her pussy and you follow her lead.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Masturbate', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'clit_finger', 3, 'masturbate');
    qspCall(s, 'arousal', 'erotic', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation8.jpg');
    scene.text('You both start to rub your clits. Katja is a little hesitant, and often looks at how you\'re doing it, as if trying to see how it\'s done.');
    // TODO-QSP: dynamic text: You just smile at her '+iif(katjaQW['slut'] > 80 or katjaQW['QWstage'] > 5 or ka...
    scene.text('You just smile at her \'+iif(katjaQW[\'slut\'] > 80 or katjaQW[\'QWstage\'] > 5 or katjaQW[\'anal_quest\'] > 2, \'perceived \', \' \')+\'innocence.');
    scene.actions([
      { label: 'Get into it', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'masturbate');
    qspCall(s, 'arousal', 'erotic', (-3));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation9.jpg');
    scene.text('Both of you are getting into it as you reach out and grab Katja\'s hand with the one you\'re not using on your pussy. You occasionally look at each other as you both moan in pleasure.');
    scene.text('Hand in hand, you both start approaching orgasm.');
    scene.actions([
      { label: 'Katja\'s orgasm', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'masturbate');
    qspCall(s, 'arousal', 'erotic', (-3));
    qspCall(s, 'stat', '');
    ((s as any).katjaQW ?? {})['horny'] = 0;
    if (((s as any).katjaQW ?? 0)?.['slut'] < 60) {
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (2);
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation10.jpg');
    scene.text('Katja curls up and turns her back to you. Not wanting to miss it, you slow yourself down a little and stretch your neck so you can see what\'s going on.');
    scene.text('Katja cums hard with a lot of noise, even if she seems to be trying not to. Once she comes down, you return your focus to your own pussy.');
    scene.actions([
      { label: 'Your turn to cum', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'masturbate');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation11.jpg');
    scene.text('Katja sits back up and gently plays with her pussy and breast while watching you. After a short period of furiously stuffing two of your fingers into your pussy, your orgasm comes as a huge explosion of overwhelming pleasure.');
    scene.actions([
      { label: 'Relax', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation12.jpg');
    scene.text('You both collapse back on the bed and spend a few minutes just lying there with your heads close together. "Whoa… That was intense!" Katja says after some time.');
    scene.text('"Yeah… It was," you answer.');
    scene.text('"I\'m completely exhausted now," she says. "I think I\'ll just go to bed now."');
    scene.text('"Okay, I\'ll be going then," you answer as you get up and start getting dressed. Katja keeps lying on the bed and looking at you.');
    scene.text('"See you around," you say as you prepare to leave and Katja just answers with a weak smile. As you close the door, she still hasn\'t moved and you wonder if she\'ll just fall asleep as she is.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
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
  scene.build();
}

function enterAfterMovieMasturbationSolo1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', 3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation_solo1.jpg');
  scene.text('Katja continues to idly caress her panties for a little while, gently stroking the pussy hidden behind it before she sits up and slowly starts to remove her bra while fondling her breasts.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue to watch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation_solo2.jpg');
    scene.text('After the bra comes off, she lies back and continues to play with her ample breasts, pinching her nipples a couple of times. She seems completely oblivious to the fact that you are standing there watching her.');
    scene.actions([
      { label: 'Watch her remove her panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation_solo3.jpg');
    scene.text('She then gets up on her knees and starts to pull down her panties. At one point during this, she looks at you and gives you a small wink, before continuing on as though you weren\'t there.');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation_solo4.jpg');
    scene.text('After her panties are off, she lies down on her back and touches her breasts with one hand, while she stuffs two fingers into her very wet pussy with the other hand.');
    scene.actions([
      { label: 'Continue to watch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation_solo5.jpg');
    scene.text('As she is getting closer to an orgasm, her fingers leave her wet slit and start to directly stroke her clit. She softly moans a few times, but they quickly become louder and louder.');
    scene.actions([
      { label: 'Watch her come', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 2);
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['slut'] < 50) {
      ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (1);
    }
    ((s as any).katjaQW ?? {})['horny'] = 0;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation_solo6.jpg');
    scene.text('She comes with a loud cry with one hand touching her clit, and grasping her right boob with the other. She shakes for a long time afterward and it was clearly an explosive orgasm she had.');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_mastubation_solo7.jpg');
    scene.text('After she comes down from her orgasm, she just turns around on her side with a smile on her face, showing her nice round bottom to you. She still acts as if she was alone in the room.');
    scene.text('So you decide to leave without saying anything, keeping the illusion that you just illicitly watched her masturbate like another voyeur, even though it was clear that she was aware of you the whole time,');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
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
  } },
  ]);
  scene.build();
}

function enterAfterMovieSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex1.jpg');
  scene.text('Katja unclasps your bra and you turn around so you face each other. She then continues to take off your bra, and starts playing with your nipple while you take her bra off.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss some more', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'foreplay_give', (-3), 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex2.jpg');
    scene.text('After you both have your bras off, you start kissing again while exploring each other\'s breasts.');
    scene.actions([
      { label: 'Off with her panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'foreplay_give', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex3.jpg');
    scene.text('You lie Katja back down and start licking her tit while she still fondles your breasts. You then proceed to remove her panties, not taking your mouth off her now very hard nipple.');
    scene.actions([
      { label: 'More sucking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay_give', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex4.jpg');
    scene.text('After you got her panties off, you continue to lick her breast and start sucking on her nipple almost like a baby expecting to get milk out of it.');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'And now your panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex5.jpg');
    scene.text('You stop sucking her tit and move up for another kiss, giving Katja access to your panties, which she promptly starts to remove, and soon you are both completely naked.');
    scene.actions([
      { label: 'Lick some pussy', goto: ['katja_uni_sex', 'after_movie_sex2'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Lick some pussy', goto: ['katja_uni_sex', 'after_movie_sex2'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterMovieSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex6.jpg');
  scene.text('You move down and place a pillow under Katja\'s bottom, and start licking her sweet pussy. she starts to slightly moan and puts one hand on your head to keep you from stopping and the other hand she uses to fondle her breasts.');
  qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start using hands instead', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex7.jpg');
    scene.text('You stop licking Katja and move up behind her, moving your hand to her pussy and begin playing with her clit. She quickly returns the favor, and for a while, you are playing with each other\'s clits, both moaning louder and louder.');
    qspCall(s, 'arousal', 'clit_finger', 3, 'lesbian');
    qspCall(s, 'arousal', 'clit_finger_give', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja\'s turn to lick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex8.jpg');
    scene.text('After some time, Katja moves off the bed and down to her knees before positioning you so that she has access to your pussy. She starts to lick you and it doesn\'t take too long before you\'re moaning even louder than before.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'You are ready to come', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex9.jpg');
    scene.text('Katja stops using her tongue and switches to direct application of her fingers to your clit. She moves behind you and treats your clit like she was masturbating herself. She is actually quite skilled at this and gets you to a crashing orgasm in no time.');
    qspCall(s, 'arousal', 'clit_finger', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Now to Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex10.jpg');
    scene.text('After you come, Katja starts kissing you and letting her hands explore your breasts. You find her pussy and put a finger inside and start to fuck her with it.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-3), 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja\'s turn to come', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    ((s as any).katjaQW ?? {})['horny'] = 0;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex11.jpg');
    scene.text('You remove your finger from her pussy and start rubbing her clit, as you can feel Katja getting closer to coming. When she does, Katja removes her mouth from yours and lets out a loud moan.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-3), 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Relax', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/after_movie_sex12.jpg');
    // TODO-QSP: dynamic text: After Katja comes down, she lies on top of you and looks into your eyes for a wh...
    scene.text(`After Katja comes down, she lies on top of you and looks into your eyes for a while before she finally gets up. "That was great, ${((s as any).pcs_nickname ?? 0)}! Just what I needed. But it is getting late and I should probably go to bed."`);
    scene.text('You take the hint. "It was definitely fantastic, we should do this more often. But I really should get going," you tell her, causing her to blush. You start to get dressed while Katja gets ready for bed, before saying your goodbyes.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
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
  } },
  ]);
  scene.build();
}

function enterComingHomeFromDate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'core_library', 'setloc', 'katja_dorm', 'start');
  qspCall(s, 'npcStat', 'A14');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party1.jpg');
  // TODO-QSP: dynamic text: You walk back to Katja's dorm room, talking about what you experienced tonight. ...
  scene.text('You walk back to Katja\'s dorm room, talking about what you experienced tonight. Katja\'+iif(katjaQW[\'horny\'] > 100, \' constantly brings up the more naughty stuff\', \' is a little less talkative than usual\')+\'.');
  // TODO-QSP: 'As she turns the key to her door, '+func('katja_procedural', 'face_color', 'func')
  scene.text('After you go into her room, she sits down and, absentmindedly, starts to gently caress her body.');
  // TODO-QSP: end
  scene.actions([
    { label: 'See what she does', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party2.jpg');
    scene.text('Katja first pulls down the straps of her dress, exposing her nice, round C-cup breasts.');
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5  ||  (((s as any).katjaQW ?? 0)?.['take_of_panties_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 5)  ||  (((s as any).katjaQW ?? 0)?.['take_of_panties_day'] === ((s as any).daystart ?? 0) -1  &&  ((s as any).hour ?? 0) < 5)) {
      scene.text('She then hikes up her skirt, exposing her bare pussy.');
    } else {
      scene.text('She then hikes up her skirt, exposing her panty-clad pussy, and proceeds to remove her underwear.');
    }
    scene.text('She spreads her legs apart before grabbing her breasts and then looks you directly in the eyes, almost like an invitation…');
    qspCall(s, 'arousal', 'erotic', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ignore her for now', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party3.jpg');
    scene.text('She starts to massage her breasts, before running her left hand down her body to play with her pussy.');
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her play with herself and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'end');
    ((s as any).katjaQW ?? {})['horny'] = 0;
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
    if (((s as any).katjaQW ?? 0)?.['masturbates'] === 0) {
      ((s as any).katjaQW ?? {})['masturbates'] = 1;
    }
    qspCall(s, 'stat', '');
  }, goto: ['uni_dorm', 'second_floor'] },
      { label: 'Crawl up to her', goto: ['katja_uni_sex', 'after_date_sex1'] },
    ]);
  } },
      { label: 'Crawl up to her', goto: ['katja_uni_sex', 'after_date_sex1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAfterDateSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex1.jpg');
  // TODO-QSP: 'You get down on your hands and knees and start to slowly crawl towards the redhead, who continues s...
  qspCall(s, 'arousal', 'erotic_nudity', 3, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finger her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex2.jpg');
    scene.text('Katja lies back when you get close enough to touch her. You get between her legs and glide your finger into her very wet pussy.');
    // TODO-QSP: 'She''s still staring into your eyes with '+iif(katjaQW['couple'] = 1, 'longing.', 'anticipation.')
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex3.jpg');
    scene.text('You lean down and start to make out passionately with Katja while you continue to glide your fingers in and out of her slit and play with her clit.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-3), 'lesbian');
    qspCall(s, 'arousal', 'clit_finger_give', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex4.jpg');
    scene.text('You stop kissing to move down and replace your fingers with your tongue and start to lick her, now extremely wet, pussy to Katja\'s loud moans.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back to fingers and kissing', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex5.jpg');
    scene.text('After tasting her sweet pussy for a couple of minutes, you slide up behind her and guide your fingers back into her wet slit and start moving them in and out, in an increasingly faster pace.');
    scene.text('Katja moves her one hand to play with her clit and turns her head to you. Her mouth finds yours and your tongues start battling as she gets closer and closer to coming.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-3), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get her off', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['slut'] = (((s as any).katjaQW ?? {})['slut'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    ((s as any).katjaQW ?? {})['horny'] = 0;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex6.jpg');
    scene.text('Your fingers pump into her at a very fast pace until her mouth lets go of yours and she comes with a scream.');
    scene.text('You slow down your movement while Katja continues to moan loudly, seemingly having several small orgasms before finally just lying there, panting with a satisfied look on her face.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn', goto: ['katja_uni_sex', 'after_date_sex2'] },
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
  scene.build();
}

function enterAfterDateSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex7.jpg');
  scene.text('After Katja has come down, she whispers, "Your turn now."');
  // TODO-QSP: 'You get up on your knees and take off your dress'+iif($braworntype = 'none', ',', ' and remove your...
  scene.text('She then licks your left nipple while moving her hand down to your vagina, and starts to push her fingers inside, back and forth.');
  qspCall(s, 'arousal', 'vaginal_finger', 3, 'lesbian');
  qspCall(s, 'arousal', 'foreplay', (-3), 'lesbian');
  ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her guide you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex8.jpg');
    scene.text('Katja removes her fingers from your pussy, before gently laying you down on your back, while her mouth is still giving your nipple attention.');
    scene.text('She slowly kisses her way down your body while her fingers start playing with your slit again.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-2), 'lesbian');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your pussy eaten', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex9.jpg');
    scene.text('Katja\'s mouth reaches your pussy and she gently licks your clit, while her fingers move in and out of your pussy.');
    scene.text('She slowly increases her speed until her fingers are moving at a fast pace. Meanwhile, she continues to suck on your clit, as if it were the only thing worth doing, bring you closer and closer to an orgasm.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-3), 'lesbian');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex10.jpg');
    scene.text('Katja\'s tongue finally makes you reach an orgasm, and you feel an explosion of pleasure overtake you. You let out an almost primal scream while you cum extremely hard.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian', 'no_orgasm_msg');
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Relax', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['couple'] === 1) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex11b.jpg');
      scene.text('You lie there for a while with your eyes closed after the fantastic orgasm you just had. When you finally open your eyes, you see that Katja has crawled on top of you with her face very close to yours.');
      scene.text('She stares into your eyes for several minutes with a look that is full of tenderness and longing, showing her deep love for you.');
      qspCall(s, 'arousal', 'erotic_nudity', 3, 'lesbian');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/sex/katja_after_party_sex11a.jpg');
      scene.text('You lie there for a while with your eyes closed after the fantastic orgasm you just had. When you finally open your eyes, you see that Katja has crawled on top of you with her face very close to yours.');
      scene.text('She then moves in with one deep, passionate kiss.');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    }
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.text('Katja finally gets up and takes off her dress that is still around her waist like a belt. She changes into her sleepwear while you get dressed.');
    if (((s as any).hour ?? 0) < 22  &&  ((s as any).hour ?? 0) > 7) {
      ((s as any).locat ?? {})['katja'] = 52;
      ((s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
      ((s as any).locat ?? {})['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
      scene.text('"It\'s still early," Katja says after looking at her phone. "I think I want to watch a movie before I go to bed. Wanna join me?"');
      scene.actions([
        { label: 'Watch a movie with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Sounds good," you reply. "Anything I can help with?"');
    scene.text('"Yes, go to the kitchen to get a bowl of popcorn," she answers.');
    scene.text('You go the to kitchen and prepare the popcorn while Katja finishes setting up the movie. You both sit down on her bed and start watching the film she has selected.');
    scene.actions([
      { label: 'Watch the movie', goto: ['katja_dorm', 'watch_movie'] },
    ]);
  } },
        { label: 'Don\'t watch a movie with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I don\'t feel like watching a movie right now," you say.');
    scene.text('"Okay. What we just did was still a perfect way to end our evening," Katja replies.');
    // TODO-QSP: dynamic text: "See you some other time, '+iif(katjaQW['couple'] = 1, 'my love', '<<$pcs_nickna...
    scene.text(`"See you some other time, '+iif(katjaQW['couple'] = 1, 'my love', '${((s as any).pcs_nickname ?? 0)}')+'," she says before'+iif(katjaQW['couple'] = 1, ' she gives you a quick kiss, and ', ' ')+'starts to set up her computer for a movie.`);
    scene.actions([
      { label: 'Leave her room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      ]);
    } else {
      ((s as any).locat ?? {})['katja'] = 20;
      if (((s as any).hour ?? 0) < 8) {
        ((s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0)-1;
      } else {
        ((s as any).locat ?? {})['katja_rand2'] = ((s as any).daystart ?? 0);
      }
      ((s as any).locat ?? {})['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
      scene.text('"What we just did was still a perfect way to end our evening," Katja says.');
      scene.text('"Yes, it was," you agree.');
      scene.text('"Now I\'m off to bed," Katja continues.');
      // TODO-QSP: dynamic text: "See you some other time, '+iif(katjaQW['couple'] = 1, 'my love', '<<$pcs_nickna...
      scene.text(`"See you some other time, '+iif(katjaQW['couple'] = 1, 'my love', '${((s as any).pcs_nickname ?? 0)}')+'," she says before'+iif(katjaQW['couple'] = 1, ' she gives you a quick kiss, and ', ' ')+'starts to set up her computer for a movie.`);
      scene.actions([
        { label: 'Leave her room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'first_time':
      enterFirstTime(s, scene);
      break;
    case 'first_time_cuni_get':
      enterFirstTimeCuniGet(s, scene);
      break;
    case 'first_time_fingerbang_her':
      enterFirstTimeFingerbangHer(s, scene);
      break;
    case 'first_time_cuni_give':
      enterFirstTimeCuniGive(s, scene);
      break;
    case 'library_licking1':
      enterLibraryLicking1(s, scene);
      break;
    case 'library_licking2':
      enterLibraryLicking2(s, scene);
      break;
    case 'library_licking3':
      enterLibraryLicking3(s, scene);
      break;
    case 'library_leave_actions':
      enterLibraryLeaveActions(s, scene);
      break;
    case 'library_threesome1':
      enterLibraryThreesome1(s, scene);
      break;
    case 'library_threesome2':
      enterLibraryThreesome2(s, scene);
      break;
    case 'threeseome_over':
      enterThreeseomeOver(s, scene);
      break;
    case 'lazar_katja_uni_3some':
      enterLazarKatjaUni_3some(s, scene);
      break;
    case 'katja_vag_fucked_lazar':
      enterKatjaVagFuckedLazar(s, scene);
      break;
    case 'get_fucked_by_lazar':
      enterGetFuckedByLazar(s, scene);
      break;
    case 'katja_anal_fucked':
      enterKatjaAnalFucked(s, scene);
      break;
    case 'fucked_anal_by_lazar':
      enterFuckedAnalByLazar(s, scene);
      break;
    case 'lazar_katja_cum':
      enterLazarKatjaCum(s, scene);
      break;
    case 'lazar_ivan_katja_uni_4some':
      enterLazarIvanKatjaUni_4some(s, scene);
      break;
    case 'lazar_ivan_dp':
      enterLazarIvanDp(s, scene);
      break;
    case 'lazar_ivan_katja_dp':
      enterLazarIvanKatjaDp(s, scene);
      break;
    case 'lazar_ivan_anal2':
      enterLazarIvanAnal2(s, scene);
      break;
    case 'after_movie_masturbation1':
      enterAfterMovieMasturbation1(s, scene);
      break;
    case 'after_movie_masturbation2':
      enterAfterMovieMasturbation2(s, scene);
      break;
    case 'after_movie_masturbation3':
      enterAfterMovieMasturbation3(s, scene);
      break;
    case 'after_movie_masturbation_solo1':
      enterAfterMovieMasturbationSolo1(s, scene);
      break;
    case 'after_movie_sex1':
      enterAfterMovieSex1(s, scene);
      break;
    case 'after_movie_sex2':
      enterAfterMovieSex2(s, scene);
      break;
    case 'coming_home_from_date':
      enterComingHomeFromDate(s, scene);
      break;
    case 'after_date_sex1':
      enterAfterDateSex1(s, scene);
      break;
    case 'after_date_sex2':
      enterAfterDateSex2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_uni_sex: LocationDef = {
  name: 'katja_uni_sex',
  title: 'The two of you get on her bed and you slide your hand betwee',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  enter: enter,
};
