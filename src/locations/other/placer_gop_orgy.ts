import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'vodka', 2);
  qspCall(s, 'stat', '');
  scene.text(`You, ${((s as any).ev_name ?? '')} and the guys enter what seems to be an otherwise abandoned apartment. The place barely has any furniture, and there is rubbish and dirt everywhere. Are you even allowed to be in here?`);
  scene.text(`The boys don't pay any attention to their surroundings, and pour out some vodka from a bottle into several cups they brought while they actively flirt with you and your friend. You soon forget about your surroundings as you're having fun with the guys, and undress alongside ${((s as any).ev_name ?? '')}. The boys quickly clear an area of bottles and other debris, so you can lie down.`);
  (s as any).ciklkm = ((((s as any).placerParameter ?? {})?.['number_of_man'] ?? 0) / 2) + 1;
  (s as any).guy = ((s as any).guy ?? 0) + (((s as any).ciklkm ?? 0));
  if ((!((s as any).goporgyeQW ?? 0))) {
    (s as any).goporgyeQW = 1;
  }
  if (((s as any).placerParameter ?? 0)?.['friend_index'] === 14) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
    if (((s as any).katjaQW ?? 0)?.['park_sex'] < 3) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['park_sex'] = 3;
    }
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['sex_in_the_park_comment'] = 3;
    qspCall(s, 'arousal', 'foreplay', 10, 'group');
    qspCall(s, 'stat', '');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/gopgang2.jpg');
    scene.text('The guys ogle your naked bodies greedily, you can tell that all of them want a turn on both of you. In a way it\'s rather flattering, having so many guys lust over your naked bodies like that.');
    scene.text(`You willingly spread your legs and hold ${((st as any).ev_name ?? '')}'s hand, squealing as the both of you get fucked by the Gopniks.`);
    while (true) {
      if ((Math.floor(Math.random() * 3) + 0) < 2) {
        qspCall(st, 'dinsex', 'vaginal_sex', 10);
        qspCall(st, 'dinsex', 'sexcum');
        qspCall(st, 'arousal', 'vaginal', 15, 'group', 'sub');
        qspCall(st, 'stat', '');
      } else {
        qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri');
        qspCall(st, 'dinsex', 'analsex');
        qspCall(st, 'arousal', 'anal', 15, 'group');
        qspCall(st, 'stat', '');
      }
      (st as any).ciklkm = ((st as any).ciklkm ?? 0) - (1);
      if (((st as any).ciklkm ?? 0) > 0) {
        scene.text(`All of the guys want to fuck you or ${((st as any).ev_name ?? '')} at least once. You see one of them impatiently stroking his cock, keeping it erect while he is waiting for the Gopnik that is currently fucking you to finish. There might be more beyond your vision range though, you're not quite sure.`);
      }
      scene.text(`Once the Gopnik finishes, his friend quickly takes his place and offers you his dick. You quietly close your fingers around it, and glance to your right to see how ${((st as any).ev_name ?? '')} is holding up. She seems to be having a blast! One of the Gopniks is fucking her roughly from behind, while she's enthusiastically sucking another guy's cock.`);
      qspCall(st, 'arousal', 'hj', 15, 'group', 'sub');
      qspCall(st, 'arousal', 'vaginal', (-15), 'group', 'sub');
      qspCall(st, 'stat', '');
      if (((st as any).ciklkm ?? 0) > 0) {
        qspCall(st, 'npcgeneratec', '0', 'Gopnik from the park', (Math.floor(Math.random() * 11) + 18));
        qspCall(st, 'boyStat', '$npclastgenerated');
        break;
      }
      scene.text(`The guys are finally done with the two of you, and you feel a tad embarrassed when you look at ${((st as any).ev_name ?? '')}. You can see she feels the same way, but at the same time… that was so hot! She loved getting treated like a piece of meat, and you certainly enjoyed watching her while they did the same to you. The two of you quickly get dressed and leave the house, exchanging glances.`);
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['placer_end', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

export const placer_gop_orgy: LocationDef = {
  name: 'placer_gop_orgy',
  region: 'other',
  enter: enter,
};
