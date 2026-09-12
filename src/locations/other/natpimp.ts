import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGoSeeOlu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take her to see Olu for 500', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['nat_inv'] = 1;
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['nat_count'] = ((s as any).OluQW['nat_count'] ?? 0) + (1);
    qspCall(s, 'boystat', 'A55');
    if (!(s as any).NatbelQW) (s as any).NatbelQW = {}; (s as any).NatbelQW['Debt'] = ((s as any).NatbelQW['Debt'] ?? 0) - (500);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 9) {
      if (!(s as any).NatbelQW) (s as any).NatbelQW = {}; (s as any).NatbelQW['QWstage'] = 10;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big16.jpg');
    scene.text('You know you need to help out with Olu soon, but your ass is still too sore. Then you get a great idea, kill two birds with one stone. Have Natasha have sex with him, she owes you anyways, besides it might be fun to make the little bitch squeal.');
    scene.text('"Since I know you don\'t have my money, I have a way you can help me out and pay off some of that debt. We are going to see my Aunt\'s boyfriend Olu, he has a massive… sex drive and she can\'t keep up with him and I need a break too."');
    scene.text('Natasha seems a little unsure about this and perhaps a bit confused but she nods her head, you smile to her and lead her across the hall to your Aunts place.');
    scene.actions([
      { label: 'Introduce Olu', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Apartment Aunt</b></center>');
    scene.img('images/characters/pavlovsk/resident/olu/olu.jpg');
    scene.text('You take off your shoes and go straight to the living room, where you find Olu resting on the couch.');
    // TODO-QSP: dynamic text: He looks at you, that perpetual smile still on his face. "Hi, <<$pcs_nickname>>!...
    scene.text(`He looks at you, that perpetual smile still on his face. "Hi, ${((s as any).pcs_nickname ?? 0)}! Who's your friend?" He says in badly accented Russian`);
    scene.text('"Hello, Olu! This is Natasha, she wants you to fuck her." You say to him, pointing at his crotch and then slapping Natasha on the ass. He seems to understand quickly and nods with a huge grin holding up the bottle of lube.');
    scene.text('You glance at Natasha. "Well take off your clothes." She nods and does as you ask.');
    scene.actions([
      { label: 'Undress Natasha', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/olu4.jpg');
    scene.text('You can\'t help but smile, when you glance over and see Olu already naked with his massive dick swinging. Natasha looks up and, as she sees his huge dick, freezes looking at you with a slightly panicked look.');
    scene.text('You smile at her. "Yep it\'s huge I know, my ass needs a break and you need to pay me back so…" you trail off. It only takes a moment for Natasha to understand and then she realizes you said… ass!');
    scene.text('She squeaks a reply. "You want him to fuck me in the ass with that thing?" she asks in disbelief.');
    scene.text('"Yes I do, my ass could use a break and you owe me…"');
    scene.text('After a moment she lowers her gaze and then nods her head. You pat her shoulder. "Good girl and it won\'t be too bad, we have plenty of lube."');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let the fun begin', handler: (st: GameState) => {
    if (!(s as any).NatbelQW) (s as any).NatbelQW = {}; (s as any).NatbelQW['anal'] = ((s as any).NatbelQW['anal'] ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).Olu_pay = ((s as any).Olu_pay ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/olu2.jpg');
    // TODO-QSP: dynamic text: You help Natasha get undressed and then get her down on all fours in front of Ol...
    scene.text(`You help Natasha get undressed and then get her down on all fours in front of Olu. While he lubes up his dick and her ass, you get undressed as well. No reason he should have all the fun. You knee down beside Natasha and grab her butt cheeks with your hands and spread them wide for Olu. Not needing any more invitation than that, he kneels down behind her and lines his cock up, she squeals loudly as he forces ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into her ass.`);
    // TODO-QSP: dynamic text: He starts fucking her slowly at first but you encourage him to go faster and dee...
    scene.text(`He starts fucking her slowly at first but you encourage him to go faster and deeper, pulling on her hips. You feel your pussy getting wet listening to Natasha cries and watching the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock rip up her ass. You start rubbing your clit while watching.`);
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat me', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A16');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/olunat.jpg');
    scene.text('You move to sit in front of Natasha and spread your legs, then you pull her face to your pussy and she wastes no time and starts licking it. You\'re loving it all! You grinding your pussy into her face, her muffled cries while she eats you and Olu pounding her ass. You keep encouraging Olu to fuck her harder. The more she squeals the more turned on you get. Before long you are cumming, apparently seeing this is a turn on for Olu as well. As he shoots his load deep down her ass within a few moments of watching you cum.');
    scene.text('With that you all get cleaned up and start getting dressed again. Once you are dressed you help Natasha back to her apartment, as she seems to be having a little trouble walking. You feel a little bad for her. "You did great, it gets better I promise. Next time it won\'t hurt as much, believe me." Then you give her a passionate kiss on the lips. She gives you a smile, nods her head and goes back into her apartment walking quite bowlegged and probably painfully.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'cuni', (-5), 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['pod_ezd', 'etaj_4'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'go_see_olu':
      enterGoSeeOlu(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natpimp: LocationDef = {
  name: 'natpimp',
  title: 'Apartment Aunt',
  region: 'other',
  enter: enter,
};
