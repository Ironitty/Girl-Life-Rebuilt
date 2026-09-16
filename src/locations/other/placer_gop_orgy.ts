import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'vodka', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: You, <<$ev_name>> and the guys enter what seems to be an otherwise abandoned apa...
  scene.text(`You, ${((s as any).ev_name || '')} and the guys enter what seems to be an otherwise abandoned apartment. The place barely has any furniture, and there is rubbish and dirt everywhere. Are you even allowed to be in here?`);
  // TODO-QSP: dynamic text: The boys don't pay any attention to their surroundings, and pour out some vodka ...
  scene.text(`The boys don't pay any attention to their surroundings, and pour out some vodka from a bottle into several cups they brought while they actively flirt with you and your friend. You soon forget about your surroundings as you're having fun with the guys, and undress alongside ${((s as any).ev_name || '')}. The boys quickly clear an area of bottles and other debris, so you can lie down.`);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/gopgang2.jpg');
    scene.text('The guys ogle your naked bodies greedily, you can tell that all of them want a turn on both of you. In a way it\'s rather flattering, having so many guys lust over your naked bodies like that.');
    // TODO-QSP: dynamic text: You willingly spread your legs and hold <<$ev_name>>'s hand, squealing as the bo...
    scene.text(`You willingly spread your legs and hold ${((s as any).ev_name || '')}'s hand, squealing as the both of you get fucked by the Gopniks.`);
    // TODO-QSP: :markgopgang
    if ((Math.floor(Math.random() * 3) + 0) < 2) {
      qspCall(s, 'dinsex', 'vaginal_sex', 10);
      qspCall(s, 'dinsex', 'sexcum');
      qspCall(s, 'arousal', 'vaginal', 15, 'group', 'sub');
      qspCall(s, 'stat', '');
    } else {
      qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri');
      qspCall(s, 'dinsex', 'analsex');
      qspCall(s, 'arousal', 'anal', 15, 'group');
      qspCall(s, 'stat', '');
    }
    (s as any).ciklkm = ((s as any).ciklkm ?? 0) - (1);
    if (((s as any).ciklkm ?? 0) > 0) {
      // TODO-QSP: dynamic text: All of the guys want to fuck you or <<$ev_name>> at least once. You see one of t...
      scene.text(`All of the guys want to fuck you or ${((s as any).ev_name || '')} at least once. You see one of them impatiently stroking his cock, keeping it erect while he is waiting for the Gopnik that is currently fucking you to finish. There might be more beyond your vision range though, you're not quite sure.`);
    }
    // TODO-QSP: dynamic text: Once the Gopnik finishes, his friend quickly takes his place and offers you his ...
    scene.text(`Once the Gopnik finishes, his friend quickly takes his place and offers you his dick. You quietly close your fingers around it, and glance to your right to see how ${((s as any).ev_name || '')} is holding up. She seems to be having a blast! One of the Gopniks is fucking her roughly from behind, while she's enthusiastically sucking another guy's cock.`);
    qspCall(s, 'arousal', 'hj', 15, 'group', 'sub');
    qspCall(s, 'arousal', 'vaginal', (-15), 'group', 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).ciklkm ?? 0) > 0) {
      qspCall(s, 'npcgeneratec', '', 0, 'Gopnik from the park', Math.floor(Math.random() * 11) + 18);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
      // TODO-QSP: jump 'markgopgang'
    }
    // TODO-QSP: dynamic text: The guys are finally done with the two of you, and you feel a tad embarrassed wh...
    scene.text(`The guys are finally done with the two of you, and you feel a tad embarrassed when you look at ${((s as any).ev_name || '')}. You can see she feels the same way, but at the same time… that was so hot! She loved getting treated like a piece of meat, and you certainly enjoyed watching her while they did the same to you. The two of you quickly get dressed and leave the house, exchanging glances.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['placer_end', ''] },
    ]);
  } },
  ]);
  scene.build();
}

export const placer_gop_orgy: LocationDef = {
  name: 'placer_gop_orgy',
  region: 'other',
  enter: enter,
};
