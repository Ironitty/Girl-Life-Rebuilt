import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'boystat', 'A81');
  qspCall(s, 'stat', '');
  scene.text('Arriving at Alexey\'s apartment, he offers you various alcoholic beverages, and the two of you sit down at a table in the hall to talk to each other.');
  scene.text('After a while of talking and drinking you feel a bit drunk, and Alexey asks you to come closer.');
  scene.actions([
    { label: 'Get on your knees and take it in your mouth', handler: (st: GameState) => {
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    (st as any).alexeySex = ((st as any).alexeySex ?? 0) + (1);
    scene.img(`images/shared/sex/blowjob/bj${(Math.floor(Math.random() * 13) + 29)}.jpg`);
    scene.text('Kneeling before him, you unbutton his pants and take a firm grasp of his erect cock.');
    scene.text(`Leaning in closer, you give it a quick kiss with your ${(((st as any).pc_desc ?? 0)?.['lips'] ?? '')} lips before guiding it to your mouth.`);
    scene.text('As you suck on his hard dick, Alexey relaxes in his chair, letting you take care of his needs.');
    scene.text('Suddenly, he removes his penis from your mouth, pulls you up on your feet and leads you to the bedroom.');
    qspCall(st, 'arousal', 'bj', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    (st as any).pose = 1;
    scene.img('images/characters/city/alexey/sex/sex.jpg');
    scene.text('You barely have enough time to undress before Alexey practically throws you on the bed.');
    qspCall(st, 'dinsex', 'boy_puts_his_condom');
    scene.text('Not wasting any time, he quickly pulls your ass up and without warning shoves his rock-hard cock deep in your pussy.');
    qspCall(st, 'dinsex', 'vaginal_sex', 10, 'sub');
    scene.text('Alexey slaps you on your ass with the palm of his hand and says, "You\'re wet like a slut already, do you like being fucked like this?"');
    if (((st as any).analPlugIn ?? 0) === 1) {
      scene.text('Alexey pulls the plug out of your narrow and tight ass.');
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
    }
    scene.text('Without stopping his relentless pounding of your pussy, Alexey smears one of his fingers with your lovejuices, and sticks it in your anus.');
    scene.text('He moves his finger slowly, probing your anus and preparing it for his dick.');
    scene.text('Suddenly you feel his cock exiting your vagina. Not wanting him to stop, you push your hips against him to try and keep his dick inside you.');
    scene.text('But instead of entering your wet pussy, his cock slides into your anus.');
    qspCall(st, 'arousal', 'anal_finger', 10, 'sub');
    (st as any).anal_slip = ((st as any).anal_slip ?? 0) + (4);
    qspCall(st, 'arousal', 'anal', (-10), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pose = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexey/sex/anal.jpg');
    qspCall(st, 'dinsex', 'analsex');
    qspCall(st, 'BDsex', 'ancum');
    qspCall(st, 'arousal', 'end');
    scene.text('After finishing, Alexey slips out of bed goes to the bathroom.');
    qspCall(st, 'dinsex', 'after_anal', 'no_plug');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const alex: LocationDef = {
  name: 'alex',
  title: 'Arriving at Alexey\'s apartment, he offers you various alcoho',
  region: 'other',
  description: ['Arriving at Alexey\'s apartment, he offers you various alcoholic beverages, and the two of you sit down at a table in the hall to talk to each other.'],
  enter: enter,
};
