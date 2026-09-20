import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sleep_simple', 'sleep_until', 31, 0);
  scene.img('images/characters/city/katja/slip.jpg');
  scene.text('Katja walks you to her house, supporting you by wrapping an arm around you as you walk… you still feel a bit woozy from the sunstroke.');
  scene.text('She doesn\'t live far from the lake and guides you to an apartment and into her bed. She lies down next to you and softly strokes your hair as she says: "You\'re fine… just sleep. I will see you in the morning."');
  scene.text('You fall asleep next to her and wake up early in the morning. Katja wrestles free from your bear grip and smiles benevolently as she says: "Go back to sleep… I have to go to work now. I\'ll leave you a key, so you can close up behind you."');
  scene.text('She gives you a kiss on the mouth and leaves you, and you promptly fall asleep again.');
  scene.text('A few hours later, you wake up again, and a man you\'ve never seen before is watching you curiously from the couch. He must be one of Kat\'s many friends-with-benefits she told you about.');
  scene.actions([
    { label: 'Leave Kat\'s house', goto: ['city_residential', ''] },
    { label: 'Seduce the guy', handler: (st: GameState) => {
    scene.img('images/characters/city/katja/kathouse1.jpg');
    scene.text('He\'s rather cute! You wouldn\'t mind him joining you in bed…');
    scene.text('You give him a weak smile and slowly pull down your panties, rubbing a finger over your engorged pussy lips. Then, when you notice how wet you are, you slip in two fingers slowly and let out a soft moan while you look him straight in the eye.');
    scene.text('The guy shifts his position a few times, watching you intently. You can tell he\'s enjoying your little show a lot.');
    scene.actions([
      { label: 'Invite him over', handler: (st: GameState) => {
    (st as any).sexloc = 'katspalnya';
    qspCall(st, 'npcgeneratec', '', 0, 'Kat\'s lover', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    (st as any).picrand = (Math.floor(Math.random() * 41) + 0);
    qspGoto(st, 'sex', 'start');
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const kathouse0: LocationDef = {
  name: 'kathouse0',
  title: 'Katja walks you to her house, supporting you by wrapping an ',
  region: 'other',
  description: ['Katja walks you to her house, supporting you by wrapping an arm around you as you walk… you still feel a bit woozy from the sunstroke.'],
  enter: enter,
};
