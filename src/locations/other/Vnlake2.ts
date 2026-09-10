import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/lake/sex/vnlake2/vnlake1.jpg');
  scene.text('Whilst tanning, you doze off, and you dream about your breasts being caressed as someone\'s tongue pleasures your pussy. You open your eyes and understand that this is not a dream. Next to you, two men one caressing your breasts, the second has already dug his head between your legs.');
  qspCall(s, 'willpower', 'sex', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Push them away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Push them away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['Nudelake', ''] },
    ]);
  }
  scene.actions([
    { label: 'Touch member', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'guy from the nudist beach', Math.floor(Math.random() * 10) + 21);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'guy from the nudist beach', Math.floor(Math.random() * 10) + 21);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    scene.img('images/locations/city/residential/lake/sex/vnlake2/vnlake2.jpg');
    scene.text('You touch one of their members and smile invitingly as you get up onto your knees. The men rise and stand next to you, their members close to you. You take them in your hands and begin to suck them, alternating between one and the other.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stand on all fours', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vnlake2/vnlake3.jpg');
    scene.text('Having sucked them enough, you get on to all fours. One of the men lies in front of you, and you take his cock in your mouth. The second kneels behind you and drives himself into your vagina.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'vaginal', (-10), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vnlake2/vnlake4.jpg');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    scene.text('You move forwards and sit on the cock that was in your mouth. Hands on your buttocks, you present your ass to the other. Encouraged, he accepts. They fuck you in both holes, while you moan loudly.');
    scene.text('This continues for what feels like forever as you are lost in bliss. Finally, the member in your ass is removed. You are spent and happy to finish now.');
    scene.text('"Sit your ass here," says the man on the bottom.');
    qspCall(s, 'arousal', 'vaginal', 20, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'anal', (-20), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take your seat', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vnlake2/vnlake5.jpg');
    scene.text('You get up, turn around and sit your ass down on his member. The other man stands next to your face, and you eagerly take his cock in your mouth. Soon, you feel that your ass has been flooded with sperm and the dick in your mouth is twitching as the guy struggles to hold back.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Remove from mouth', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/lake/sex/vnlake2/vnlake6.jpg');
    scene.text('You spit the dick out of your mouth, and the man splatters your face with his load.');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stay on the beach', goto: ['Nudelake', ''] },
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

export const Vnlake2: LocationDef = {
  name: 'Vnlake2',
  title: 'Whilst tanning, you doze off, and you dream about your breas',
  region: 'other',
  description: ['Whilst tanning, you doze off, and you dream about your breasts being caressed as someone\'s tongue pleasures your pussy. You open your eyes and understand that this is not a dream. Next to you, two men one caressing your breasts, the second has already dug his head between your legs.'],
  enter: enter,
};
