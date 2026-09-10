import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).vika_sleep ?? 0) === 1) {
    qspCall(s, 'Vika', 'text', 'asleep');
    qspCall(s, 'Vika', 'actions', 'asleep');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A220'] >= 60  &&  ((s as any).birthday ?? 0) === ((s as any).day ?? 0)  &&  ((s as any).birthmonth ?? 0) === ((s as any).month ?? 0)  &&  ((s as any).vikaslut ?? 0) === 1  &&  ((s as any).b_vika_present_Day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).b_vika_present_Day = ((s as any).daystart ?? 0);
      qspCall(s, 'Vika', 'text', 'awake', 'birthday');
      qspCall(s, 'Vika', 'actions', 'awake', 'birthday');
    } else {
      qspCall(s, 'Vika', 'text', 'awake');
      qspCall(s, 'Vika', 'actions', 'awake');
    }
  }
  scene.build();
}

function enterText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vika Kirilova</b></center>');
  if (((s as any).locArgs?.[1] ?? 0) === 'asleep') {
    qspCall(s, 'Vika', 'asleep_text');
  } else {
    qspCall(s, 'Vika', 'awake_text', ((s as any).locArgs?.[2] ?? 0));
  }
  scene.build();
}

function enterActions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) === 'asleep') {
    qspCall(s, 'Vika', 'asleep_actions');
  } else {
    qspCall(s, 'Vika', 'awake_actions', ((s as any).locArgs?.[2] ?? 0));
  }
  scene.build();
}

function enterAsleepText(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).vikaslut ?? 0) === 1) {
    scene.img('images/characters/city/university/girl/vika/vika_sleep_b.jpg');
    scene.text('Vika is sleeping in her bed, naked. You wonder what she got up at the brothel tonight.');
  } else {
    scene.img('images/characters/city/university/girl/vika/vika_sleep.jpg');
    scene.text('Vika is sleeping in her bed after a night of adventures. You wonder what she got up to tonight.');
  }
  scene.build();
}

function enterAsleepActions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterAwakeText(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'birthday') {
    scene.img('images/characters/city/university/girl/vika/vika1.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big220.jpg');
  }
  // TODO-QSP: dynamic text: Your roommate is Vika Kirilova, who is <<age + 1>> years old. She comes from a t...
  scene.text(`Your roommate is Vika Kirilova, who is ${((s as any).age ?? 0) + 1} years old. She comes from a town much further away than yours and, like you, comes from a poor family.`);
  if (((s as any).vikaslut ?? 0) === 1) {
    scene.text('You know she works as a whore in a brothel in the red light district.');
  } else {
    scene.text('You don\'t really know much about her yet.');
  }
  if (((s as any).npc_rel ?? 0)?.['A220'] < 20) {
    scene.text('You and Vika are strangers to each other.');
  } else {
    scene.text('You and Vika are getting to know each other.');
    if (((s as any).npc_rel ?? 0)?.['A220'] < 60) {
      scene.text('You and Vika are on friendly terms.');
    } else {
      scene.text('The two of you are friends.');
      scene.text('The two of you are best friends.');
    }
    scene.text('');
    if (((s as any).locArgs?.[1] ?? 0) === 'birthday') {
      scene.text('You don\'t have time to say a word before Vika practically pounces on you.');
      scene.text('"There\'s my favorite birthday girl! Happy birthday!" she screeches as she hugs and kisses you on the cheek.');
      scene.text('"Wow! This is so unexpected," you reply.');
      scene.text('"Here\'s a present for you," she says before handing you a box. Inside is a sheer, pale blue teddy made of silk.');
      scene.text('"Oh Vika, this is too much!" you exclaim. "It\'s way too expensive!"');
      scene.text('"The least you could do is model it for me, so hurry up and put it on!" she says in a commanding voice while winking at you.');
      scene.text('You\'re a little embarrassed, but you quickly strip off your clothes and put the teddy on. It looks even more sheer on your body. It hides absolutely nothing; your nipples and pussy lips are clearly visible.');
      scene.text('You turn and model it for Vika. A nice gift, but definitely <i>not</i> for everyday use!');
      scene.text('"You look great! I was worried it wouldn\'t fit because I had to guess your size. Put this on, we need to go to your other present."');
      scene.text('She throws you a bathrobe and grabs you by the arm before dragging you out of the room as you struggle to get the robe on in time.');
    }
    qspCall(s, 'Vika', 'leave_for_night');
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'text':
      enterText(s, scene);
      break;
    case 'actions':
      enterActions(s, scene);
      break;
    case 'asleep_text':
      enterAsleepText(s, scene);
      break;
    case 'asleep_actions':
      enterAsleepActions(s, scene);
      break;
    case 'awake_text':
      enterAwakeText(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Vika: LocationDef = {
  name: 'Vika',
  title: 'Vika Kirilova',
  region: 'other',
  enter: enter,
};
