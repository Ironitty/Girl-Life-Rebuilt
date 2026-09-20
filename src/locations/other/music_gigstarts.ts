import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterZariyahPassingBy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'music_checks', 'zariyah_approach');
  if (((s as any).ml_approach ?? 0)) {
    qspGoto(s, 'music_gigstarts', 'delparco_start');
  } else {
    qspCall(s, 'music_actions', 'finish');
  }
  // TODO-QSP: end
  scene.build();
}

function enterDelparcoStart(s: GameState, scene: SceneBuilder): void {
  (s as any).rules = 0;
  if (((s as any).ml_delparcoQW ?? 0)?.['Drinking Rule'] === 1) {
    (s as any).ruletext = 'be sober';
    (s as any).rules = 1;
  }
  if (((s as any).ml_delparcoQW ?? 0)?.['Weed Rule'] === 1) {
    if (((s as any).ruletext ?? 0) !== ''  &&  ((s as any).ml_delparcoQW ?? 0)?.['Outfit Rule'] === 0) {
      // TODO-QSP: $ruletext += 'and don''t be high'
    } else {
      if (((s as any).ruletext ?? 0) !== ''  &&  ((s as any).ml_delparcoQW ?? 0)?.['Outfit Rule'] === 1) {
        // TODO-QSP: $ruletext += ', don''t be high'
      } else {
        (s as any).ruletext = 'don\'t be high';
      }
    }
    (s as any).rules = 1;
  }
  if (((s as any).ml_delparcoQW ?? 0)?.['Outfit Rule'] === 1) {
    if (((s as any).ruletext ?? 0) !== '') {
      // TODO-QSP: $ruletext += 'and wear appropriate clothing.'
    } else {
      (s as any).ruletext = 'wear and appropriate outfit.';
    }
    (s as any).rules = 1;
  }
  scene.img('images/pc/activities/music/busking.jpg');
  if (((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 99) {
    scene.text('As you finish your set, a tall woman steps up to you with a smile. "Hi, you are really good at this." she looks at you thoughtfully for a brief second');
    scene.text('"I\'m Zariyah, I\'m managing Del Parco and we are planning to run some live music evenings and I\'m looking for musicians. I wouldn\'t want to drag you into this right now,"');
    scene.text('she says, looking at your swollen belly "but I was thinking that maybe when you gave birth and recovered a little, you would be interested." She reaches into her purse,');
    scene.text('and pulls out a business card "Here is my number and obviously, you can come to the cafe if that\'s better. I\'m there every weekday." ');
    // TODO-QSP: dynamic text: You take the card a bit hesitantly "Hi, I''m <<$pcs_nickname>> and thank you… I ...
    scene.text(`You take the card a bit hesitantly "Hi, I'm ${((s as any).pcs_nickname || '')} and thank you… I will think about it." you answer a bit confused, looking at the smiling woman "Splendid," she says `);
    scene.text('"I\'m looking forward to it and please rest and don\'t tire yourself out. And I really, really would like to see you again and meet the baby too… oh, damn " she looks at her watch');
    // TODO-QSP: dynamic text: "I must run to work, but it was lovely to meet you <<$pcs_nickname>>, I hope I w...
    scene.text(`"I must run to work, but it was lovely to meet you ${((s as any).pcs_nickname || '')}, I hope I will run into you soon and looking forward to your answer!" she gives you a last smile and hurries off.`);
    qspCall(s, 'music_checks', 'reset_checks');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'finish');
  } },
    ]);
  } else {
    if (((s as any).rules ?? 0) === 1) {
      scene.text('As you finish your set, you notice a tall woman watching you carefully, her head tilted to the side.');
      scene.text('She bites her lip thoughtfully, hesitating for a moment then steps up to you with a smile.');
      scene.text('"Hi, you are really good at this." she looks at you thoughtfully, then nods. "I\'m Zariyah, I\'m managing Del Parco and we are planning to run some live music evenings.');
      scene.text('Would you be interested in playing in a more formal setting?"');
    } else {
      scene.text('As you finish your set, a tall woman steps up to you with a smile. "Hi, you are really good at this."');
      scene.text('"I\'m Zariyah, I\'m managing Del Parco and we are planning to run some live music evenings. Would you be interested in playing in a more formal setting?"');
    }
    qspCall(s, 'music_actions', 'willpower_cost');
    if ((!((s as any).will_cost ?? 0))) {
      scene.actions([
        { label: 'Accept', goto: ['music_gigstarts', 'delparco_accept'] },
      ]);
    } else {
      if (((s as any).will_cost ?? 0) <= ((s as any).pcs_willpwr ?? 0)) {
        scene.actions([
          { label: 'Accept', goto: ['music_gigstarts', 'delparco_accept'] },
        ]);
      } else {
        scene.actions([
          { label: 'Accept', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Decline', goto: ['music_gigstarts', 'delparco_decline'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDelparcoAccept(s: GameState, scene: SceneBuilder): void {
  ((s as any).ml_venues = (s as any).ml_venues ?? {})['del_parco'] = 1;
  ((s as any).ml_delparcoQW = (s as any).ml_delparcoQW ?? {})['Stage'] = 2;
  ((s as any).ml_delparcoQW = (s as any).ml_delparcoQW ?? {})['Next Date'] = ((s as any).daystart ?? 0) + (12 - ((s as any).week ?? 0));
  scene.img('images/pc/activities/music/zariyah.jpg');
  scene.text('You look at the woman a bit surprised, then you smile back "Of course! I mean… you mean like a proper stage performance?"');
  if ((!((s as any).rules ?? 0))) {
    scene.text('She nods "Well, it\'s a small cafe so you wouldn\'t be playing on a stage, per se, but yes, in front of people. You would sing and play your music." she looks at her watch "I will have to go, but please come to the cafe before next Friday, during the week, and we can discuss the details. Poka!" she gives a small wave and hurries off.');
  } else {
    scene.text('She nods "Well, it\'s a small cafe so you wouldn\'t be playing on a stage, per se, but yes, in front of people. You would sing and play your music." she looks at her watch "I will have to go, but please come to the cafe before next Friday, during the week, and we can discuss the details. Poka!" she gives a small wave but then turns around');
    // TODO-QSP: dynamic text: "Oh, just one thing, please, when you visit me and whenever you play at the café...
    scene.text(`"Oh, just one thing, please, when you visit me and whenever you play at the café${((s as any).ruletext || '')}" she smiles at you and hurries off.`);
  }
  qspCall(s, 'music_checks', 'reset_checks');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'finish');
  } },
  ]);
  scene.build();
}

function enterDelparcoDecline(s: GameState, scene: SceneBuilder): void {
  ((s as any).ml_venues = (s as any).ml_venues ?? {})['del_parco'] = 1;
  ((s as any).ml_delparcoQW = (s as any).ml_delparcoQW ?? {})['Stage'] = 1;
  scene.img('images/pc/activities/music/zariyah.jpg');
  scene.text('You look at the woman a bit surprised - "I\'m… that\'s really nice but… I\'m not sure… "');
  if ((!((s as any).rules ?? 0))) {
    scene.text('She looks at you for a long moment then shakes her head - "You need to be a bit more confident if you want do anything with music. Listen, " - she looks at her watch - " I have to run, but please, think about it and if you change your mind, come to the cafe on any weekday to talk. You are good, and you should not miss out on opportunities." - she says, giving you an encouraging smile before heading off.');
  } else {
    if (((s as any).ml_delparcoQW ?? 0)?.['Drinking Rule'] === 0  &&  ((s as any).ml_delparcoQW ?? 0)?.['Weed Rule'] === 0) {
      scene.text('She looks at you for a long moment then shakes her head "You need to be a bit more confident if you want do anything with music. Listen, " - she looks at her watch - " I have to run, but if you change your mind, come to the cafe on any weekday to talk. You are good, and you should not miss out on opportunities." she says, smiling at you.');
    } else {
      scene.text('She looks at you for a long moment then shakes her head "You need to be a bit more confident if you want do anything with music. Listen, " - she looks at her watch - " I have to run, but I would like you to think about it when you are… calmer… and if you change your mind, come to the cafe on a weekday and we can talk. You are good, and you should not miss out on opportunities." - she says, smiling at you.');
    }
    // TODO-QSP: dynamic text: "Oh, just one thing, please, when you visit me and if you decide to play at the ...
    scene.text(`"Oh, just one thing, please, when you visit me and if you decide to play at the café${((s as any).ruletext || '')}" - she waves goodbye and hurries off.`);
  }
  qspCall(s, 'music_checks', 'reset_checks');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'finish');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'zariyah_passing_by':
      enterZariyahPassingBy(s, scene);
      break;
    case 'delparco_start':
      enterDelparcoStart(s, scene);
      break;
    case 'delparco_accept':
      enterDelparcoAccept(s, scene);
      break;
    case 'delparco_decline':
      enterDelparcoDecline(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const music_gigstarts: LocationDef = {
  name: 'music_gigstarts',
  title: 'As you finish your set, a tall woman steps up to you with a ',
  region: 'other',
  enter: enter,
};
