import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>pre-trial chamber</b></center>');
  scene.img('images/characters/city/ilyushkin/event/kpz.jpg');
  scene.text('Large chamber with wooden benches.');
  if (((s as any).kameraKPZ ?? 0) < 3) {
    scene.actions([
      { label: 'Sit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).kameraKPZ = ((s as any).kameraKPZ ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You sat on the hard wooden bench and began to consider your position.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: By lattice policeman came and Anatoly Borisovich. The policeman immediately step...
    scene.text(`By lattice policeman came and Anatoly Borisovich. The policeman immediately stepped aside and host bystroezhki said. "${((s as any).pcs_nickname || '')}, ${((s as any).pcs_nickname || '')}, well, how could you?"`);
    scene.actions([
      { label: 'Tell him how everything was.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ilyushkin/event/kpz.jpg');
    // TODO-QSP: dynamic text: You were telling Ilyushkin tried to persuade you to have sex and you refused him...
    scene.text(`You were telling Ilyushkin tried to persuade you to have sex and you refused him as he naplel you tales about your raise and gave you the keys. As you took the envelope and gave it to Ilyushkin. Anatoly Borisovich sad you looked through the bars. "${((s as any).pcs_nickname || '')}. Ilyushkin showed himself a true professional and honest person. He made his way to the main managers of the lower classes. And you mean to tell me that he was tempted by what is 650000? Risking all, his position, his career, reputation, only to have that would steal the money and annoy you? You just dishwasher. What sense would he do that? Besides Ilyushkin decent salary and maybe soon it will become director of the branch. "`);
    scene.actions([
      { label: 'Convinced of his innocence', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ilyushkin/event/kpz.jpg');
    scene.text('You began to convince the owner bystroezhki his innocence. Anatoly Borisovich thinking about something. "Raison put you there is no me. I need to get my money back. And if we assume that you\'re not lying, then I warmed the snake on his chest.\'s What I tell you. Pohodataystvuyu I, what would you have released on bail. You where it will be a month before the trial that would clear himself. If you can not, then I\'m sorry, I can not help. "');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 260;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/ilyushkin/event/kpz.jpg');
    scene.text('Certainly no choice and you do not agree with Anatoly. He quickly went to it and after a while you have been released from the bullpen. Anatoly Borisovich met you in his car and invited you to sit down to it.');
    scene.actions([
      { label: 'Go with Anatoly', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['IlyQWPoliceDayCount'] = 1;
    ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['IlyQWTatianaHelp'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/car.jpg');
    scene.text('You got into the car and drove off. Anatoly said. "Now I\'ll take you to your house. I think you need some rest. Ilyushkin lives in the city industrial region, act like you know. But remember, if it is what mischief again, I\'m not going to pull out. And remember girl. You have to court where it month. During this time, you should either give me back my money, or prove me guilty of Ilyushkin, or you sit. I\'ll make sure that your term would not have been suspended. Otpravishsya six years quilted stitching in some sort of wilderness surrounded by old prostitutes drug addicts, cheats and other charges. And by the court you will transfer the money to me until you have paid the entire amount. If anything, find me in bystroezhke. " You came to your house and said goodbye with Anatoly.');
    scene.actions([
      { label: 'Out of the car.', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const kameraKPZ: LocationDef = {
  name: 'kameraKPZ',
  title: 'pre-trial chamber',
  region: 'other',
  description: ['Large chamber with wooden benches.'],
  enter: enter,
};
