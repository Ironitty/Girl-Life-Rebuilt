import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npcStat', 'A88');
  qspCall(s, 'npcStat', 'A39', 'a');
  qspCall(s, 'stat', '');
  scene.text('After arriving at Alexei\'s apartment, he offers you various alcoholic beverages before sitting down at a table in the living room to chat as he always does.');
  scene.text('Suddenly, the doorbell rings, and Alexei walks towards the door to answer it. You hear a man\'s voice in the hallway, "Hello Alexei, I hope I\'m not disturbing?" He answers, "Not at all, my friend. Come in."');
  if (((s as any).alexgangbang ?? 0) === 0) {
    scene.text('You\'re a little surprised and wonder who it could be, but then you see Alexander, the nightclub owner, enter the room. He greets you as he sits down on a chair.');
    scene.text('Alexei pours alcohol into three glasses and hands them out. All of you spend some time drinking and talking together. Before long, Alexander asked you to call him by his nickname, Sasha.');
    // TODO-QSP: dynamic text: After a while, Alexei puts the bottle aside to pull out his dick from his pants....
    scene.text(`After a while, Alexei puts the bottle aside to pull out his dick from his pants. "Come over here ${((s as any).pcs_firstname ?? 0)}", he commands. You look at him in surprise then glance at Sasha. Alexei urges you on, "C'mon and get over here. Don't worry since everything is fine."`);
  } else {
    scene.text('You see Alexander, the nightclub owner, enter the room. He greets you as he sits down on a chair.');
    scene.text('Alexei pours alcohol in three glasses in which you spend some time drinking, talking, and laughing together.');
    // TODO-QSP: dynamic text: After a while, Alexei puts the bottle aside to pull out his dick from his pants....
    scene.text(`After a while, Alexei puts the bottle aside to pull out his dick from his pants. "Get over here ${((s as any).pcs_firstname ?? 0)}", he commands.`);
  }
  scene.actions([
    { label: 'Get on your knees and give head', handler: (st: GameState) => {
    (s as any).alexgangbang = ((s as any).alexgangbang ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img(`images/shared/sex/blowjob/bj${Math.floor(Math.random() * 13) + 29}.jpg`);
    scene.text('Kneeling before him, you pull Alexei\'s pants all the way down then take a firm grasp of his erect cock.');
    // TODO-QSP: dynamic text: Leaning in closer, you give it a quick kiss with your <<$pc_desc['lips']>> lips ...
    scene.text(`Leaning in closer, you give it a quick kiss with your ${((s as any).pc_desc ?? 0)?.['lips']} lips before guiding it into your mouth.`);
    scene.text('As you suck on his hard dick, he relaxes in his chair and lets you take care of his needs.');
    scene.text('Suddenly, he removes his penis from your mouth and pulls you up on your feet. He leads you to his bedroom.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.text('Alexei lifts you up to put you down in front of the bed where Sasha has seated himself. He tells you to get on all fours with your head placed before Sasha. Sasha starts to unbutton his pants, which leaves no doubt as to what you\'re expected to do.');
    scene.actions([
      { label: 'Give Sasha a blowjob', handler: (st: GameState) => {
    if (((s as any).sashaclubsex ?? 0) === 0) {
      (s as any).sashaclubsex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    (s as any).alexgangbang = ((s as any).alexgangbang ?? 0) + (1);
    (s as any).pose = 1;
    scene.img(`images/shared/sex/group/gang${Math.floor(Math.random() * 10) + 16}.jpg`);
    scene.text('Kneeling on all fours, you start sucking Sasha\'s limp cock. As you lick, suck, and roll your tongue around his dick while stroking the shaft with your hands, you can feel it slowly stiffen in your mouth.');
    qspCall(s, 'dinSex', 'wear_condom');
    scene.text('The position you\'re in doesn\'t make it easy for you to move your head up and down. However with some determination, you manage to keep Sasha\'s cock in your mouth with the help of your hands.');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    scene.text('After a while, you feel Sasha\'s hard cock begin to throb. With a low grunt, he thrusts his hips forward, and you feel his sperm coat the insides of your mouth.');
    scene.text('He doesn\'t cum a whole lot, so you easily manage to swallow all of it. It still doesn\'t diminish the inherent thrill of the threesome you just participated in.');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'group');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const alexgang: LocationDef = {
  name: 'alexgang',
  title: 'After arriving at Alexei\'s apartment, he offers you various ',
  region: 'other',
  description: ['After arriving at Alexei\'s apartment, he offers you various alcoholic beverages before sitting down at a table in the living room to chat as he always does.'],
  enter: enter,
};
