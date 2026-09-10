import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMinorDebtPayoff(s: GameState, scene: SceneBuilder): void {
  (s as any).workDisk = 0;
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === ((s as any).home ?? 0)?.['location']) {
    (s as any).debt_payoff_at_home = 1;
  } else {
    (s as any).debt_payoff_at_home = 0;
  }
  scene.img('images/locations/city/residential/street/bug.jpg');
  if (((s as any).debt_payoff_at_home ?? 0)) {
    scene.text('As you approach the entrance to your apartment, you see two large guys approaching you. They seem to be carrying guns. As they get closer to you, one of them says, "It\'s time for you to pay back your debts."');
  } else {
    scene.text('Two large guys corner you, seemingly out of nowhere. They seem to be carrying guns. As they get closer to you, one of them says, "It\'s time for you to pay back your debts."');
  }
  if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).workDolg ?? 0), 'cash')) {
    qspCall(s, 'money', 'debt_pay', 'workDolg', 'cash');
    scene.text('You quickly dig into your purse and pull out the money, handing it over. One of them grabs it from you and starts counting it. Once he sees it is all there, he just grunts, and they both turn around and leave.');
  } else {
    qspCall(s, 'money', 'debt_pay', 'workDolg', 'desk');
    scene.text('"I have the money up in my apartment. Let me go get it," you say, moving towards the door. You quickly rush inside, take the money out of the drawer and go back to pay them. They take the money and count it, then look at each other, nod and leave.');
    qspCall(s, 'money', 'debt_pay', 'workDolg', ((((s as any).debt_payoff_at_home ?? 0)) ? ('desk') : ('cash')));
    qspCall(s, 'money', 'debt_add', 'workDolg', 10000);
    if (((s as any).debt_payoff_at_home ?? 0)) {
      scene.text('You tell them that you don\'t have enough money. They smack you, push you into your apartment, and follow you inside. Rummaging through your stuff, they find your stash and take it.');
    } else {
      scene.text('You tell them that you don\'t have enough money. They smack you and go through your bag and pockets, taking everything you have on you.');
    }
    // TODO-QSP: dynamic text: The brutes take everything that you have then explain your situation. In short, ...
    scene.text('The brutes take everything that you have then explain your situation. In short, you have a debt of \' + $func(\'money\', \'string_debt\', workDolg) + \'. Your debt has grown by \' + $func(\'money\', \'string_debt_addition\', 10000) + \', and since you cannot pay it off. As your job obviously doesn\'t pay well enough, they decide they\'ll help you out with that. The brutes drag you to the street and throw you into the back seat of their car. They get in, one of them sitting next to you and the other in the driver\'s seat. He starts the car and drives away. They refuse to answer any of your questions. You have no choice but to sit quietly and see where they take you.');
    scene.actions([
      { label: 'Out of the car', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.text('You are at the sauna. The brutes drag you into a room and start to explain. "You\'re going to live here and work until you have cleared your debt. Got it? Try to contact the authorities or escape, we\'ll put a bullet in your head and bury you in the woods, understand?"');
    scene.text('You become frightened as they\'re convincing, so you just nod.');
    scene.actions([
      { label: 'Look around', goto: ['city_sauna', 'saunaroom'] },
    ]);
  } },
    ]);
  }
  return;
  scene.build();
}

function enterMinorDidntDeliverDisk(s: GameState, scene: SceneBuilder): void {
  (s as any).workDisk = 1;
  (s as any).workDiskAtkPlayer = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/car.jpg');
  scene.text('You are grabbed and thrown into the back seat of a car. Right and left of you, there are two angry Indian men sitting. In the front seat, the porn studio manager turns around. "Where is the envelope?" he demands.');
  if ((!((s as any).konvert ?? 0))) {
    qspCall(s, 'money', 'debt_add', 'workDolg', 200000);
    (s as any).workDolgDay = 7;
    (s as any).job_termination_reason['city_pornstudio_delivery'] = 'blacklisted';
    qspCall(s, 'jobs', 'set_fired', 'city_pornstudio_delivery');
    scene.text('"It was stolen."');
    // TODO-QSP: dynamic text: "WHAT! But how could this happen! Do you realize what you have done?! You owe me...
    scene.text('"WHAT! But how could this happen! Do you realize what you have done?! You owe me \' + $func(\'money\', \'string_debt_addition\', 200000) + \', bring it to my office, you have until next Friday. If you fail to do so, prepare yourself for a world of hurt."');
  } else {
    (s as any).konvert = 0;
    qspCall(s, 'money', 'earn', 5000, 'cash');
    scene.text('You give him the envelope. He warns you that such delays in the future may be harmful to your business relationships.');
  }
  return;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterMinorTatianaUnlockMagic(s: GameState, scene: SceneBuilder): void {
  (s as any).mainQW = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/lab/event/main.jpg');
  if (((s as any).loc ?? 0) === ((s as any).home ?? 0)?.['location']) {
    scene.text('In front of your building, you see Tatiana and Gustav. Tatiana adjusts her glasses and looks around, while Gustav seems to be distracted, glancing here and there with a strange look on his face as his tattoos are not visible.');
  } else {
    scene.text('Tatiana and Gustav approach you. Tatiana adjusts her glasses and looks around, while Gustav seems to be distracted, glancing here and there with a strange look on his face as his tattoos are not visible.');
  }
  scene.text('Tatiana looks at you closely, "I felt a burst of energy. Were you attacked by a magician?"');
  return;
  scene.actions([
    { label: 'No', goto: ['mainQW', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'minor_debt_payoff':
      enterMinorDebtPayoff(s, scene);
      break;
    case 'minor_didnt_deliver_disk':
      enterMinorDidntDeliverDisk(s, scene);
      break;
    case 'minor_tatiana_unlock_magic':
      enterMinorTatianaUnlockMagic(s, scene);
      break;
    default:
      enterMinorDebtPayoff(s, scene);
      break;
  }
}

export const street_events_home: LocationDef = {
  name: 'street_events_home',
  title: 'As you approach the entrance to your apartment, you see two ',
  region: 'other',
  description: ['As you approach the entrance to your apartment, you see two large guys approaching you. They seem to be carrying guns. As they get closer to you, one of them says, "It\'s time for you to pay back your debts."'],
  enter: enter,
};
