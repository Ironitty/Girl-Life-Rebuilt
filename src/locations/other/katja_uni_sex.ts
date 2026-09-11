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
