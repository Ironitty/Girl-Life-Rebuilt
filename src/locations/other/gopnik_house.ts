import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: You take your glass of vodka and sit down on a rickety chair at the table, betwe...
  scene.text(`You take your glass of vodka and sit down on a rickety chair at the table, between two of the guys. The apartment is in rather poor condition; there's very little furniture, and the wallpaper is peeling off the walls. Nevertheless, you enjoy the Gopniks' company, ${((s as any).boydesc || '')}'s in particular.`);
  if (((s as any).alko ?? 0) < 6) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
    scene.text('The vodka has you feeling quite drunk, but you are still able to think. At a certain point in the conversation, you see the smiles on the Gopniks\' faces make place for rather greedy grins. Suddenly everyone\'s looking at you, ogling your body from top to bottom.');
    // TODO-QSP: dynamic text: A few of the guys approach you and pick you up, despite your meek protests. You'...
    scene.text(`A few of the guys approach you and pick you up, despite your meek protests. You're too drunk to stop them, and just let it happen. While they carry you to another room, one of them hisses to you: "You've made use of our hospitality for long enough, ${((s as any).pcs_nickname || '')}… it's time you do something for us in return."`);
    scene.text('You guess this is what they do with all the unlucky girls they meet in the park. The room they\'re carrying you to has no furniture; just a mattress on the ground. The Gopniks unceremoniously dump you on top of it, and reach down for their pants.');
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (20);
    scene.text('The vodka has you feeling quite drunk, and soon you are too drunk to really think straight. When you hold onto the table to stop yourself from falling off your chair, you see the smiles on the Gopniks\' faces make place for rather greedy grins. Suddenly everyone\'s looking at you, ogling your body from top to bottom.');
    scene.text('A few of the guys approach you and pick you up, despite your meek protests. You\'re way too drunk to stop them, and just let it happen. The world won\'t stop spinning while they haul you around, and you feel rather disoriented when the Gopniks dump you down onto a sole mattress in an otherwise empty room.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
    ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    (s as any).guy = ((s as any).guy ?? 0) + (((s as any).placerParameter ?? 0)?.['number_of_man']);
    (s as any).ciklkm = ((s as any).placerParameter ?? 0)?.['number_of_man'];
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gopnik_house', 'rape');
  } },
  ]);
  scene.build();
}

function enterRape(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/gop/sex/gop/podval.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).tiprand = Math.floor(Math.random() * 3) + 0;
  if (((s as any).tiprand ?? 0) < 2) {
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
  } else {
    if (((s as any).tiprand ?? 0) === 2) {
      qspCall(s, 'dinSex', 'boy_wants_anal', 'lubri');
      qspCall(s, 'dinsex', 'analsex');
    }
  }
  qspCall(s, 'stat', '');
  (s as any).ciklkm = ((s as any).ciklkm ?? 0) - (1);
  if (((s as any).ciklkm ?? 0) > 0) {
    if (((s as any).ciklkm ?? 0) < ((s as any).placerParameter ?? 0)?.['number_of_man']) {
      scene.text('All of the guys want to fuck you at least once. You see one of them impatiently stroking his cock, keeping it erect while he is waiting for the Gopnik that is currently fucking you to finish. There might be more beyond your vision range though, you\'re not quite sure. And frankly, you\'re also too drunk to care.');
    }
    if (((s as any).ciklkm ?? 0) < ((s as any).placerParameter ?? 0)?.['number_of_man']) {
      scene.text('Once the Gopnik finishes, his friend quickly takes his place between your legs.');
    }
    qspCall(s, 'npcgeneratec', '', 0, 'Gopnik from the park', Math.floor(Math.random() * 11) + 16);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.actions([
      { label: 'Continue', goto: ['gopnik_house', 'rape'] },
    ]);
  } else {
    qspGoto(s, 'gopnik_house', 'rape_end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterRapeEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.text('Finally the Gopniks are finished with you. They talk loudly about what a good fuck you were while they get dressed. When they realize you\'re too drunk to get dressed, they help you pull your clothes back on and sloppily button them up, before they drag you outside.');
    // TODO-QSP: dynamic text: After you walk for a few minutes, <<$boydesc>> slaps your ass and tells you: "Yo...
    scene.text(`After you walk for a few minutes, ${((s as any).boydesc || '')} slaps your ass and tells you: "You should be able to find your way home from here. You were a good fuck, ${((s as any).pcs_nickname || '')}. Come look us up in the park again if you want more where that came from."`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Find your way back to the main streets', handler: (st: GameState) => {
    (st as any).podvalrape = 0;
    (st as any).dormrape = 0;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).body_write = 5;
    (s as any).face_write = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/podvalwrite\'+rand(1, 6)+\'.jpg');
    scene.text('You passed out at some point during their fuck session. When you come to your body aches, your head is throbbing, and some kid is mocking you.');
    scene.text('When you look down, you realize why: those bastards have written obscene words all over your face and body! You look like a public toilet, and quickly cover up their writing as best you can while you get up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Find your way back to the main streets', handler: (st: GameState) => {
    (st as any).podvalrape = 0;
    (st as any).dormrape = 0;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'rape':
      enterRape(s, scene);
      break;
    case 'rape_end':
      enterRapeEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gopnik_house: LocationDef = {
  name: 'gopnik_house',
  title: 'The vodka has you feeling quite drunk, but you are still abl',
  region: 'other',
  enter: enter,
};
