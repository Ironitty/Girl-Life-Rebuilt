import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/grab/fbhouse.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> leads you to his house, and gallantly opens the door for you. He in...
  scene.text(`${((s as any).boydesc || '')} leads you to his house, and gallantly opens the door for you. He invites you to take a seat on the couch and then sits down next to you, putting his arm around you. After you cuddle for a while, he puts his hand on your chin as he guides your face towards his.`);
  scene.actions([
    { label: 'Kiss him', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).parkfuckboy = ((s as any).parkfuckboy ?? 0) + (1);
    (s as any).fbhousetimes = ((s as any).fbhousetimes ?? 0) + (1);
    (s as any).pphj = 0;
    (s as any).ppbj = 0;
    (s as any).ppsex = 0;
    (s as any).ppanal = 0;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kiss/fbhkiss.jpg');
    // TODO-QSP: dynamic text: He's cute! You open your mouth and kiss <<$boydesc>> enthusiastically, and don't...
    scene.text(`He's cute! You open your mouth and kiss ${((s as any).boydesc || '')} enthusiastically, and don't stop him when you feel his hands tugging at your clothes. He's slowly trying to undress you, but doesn't get very far in this position. After a while he gives up and just focuses on kissing you back, rubbing his slightly trembling hand over your thigh.`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    (s as any).ppbj = ((s as any).ppbj ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/fbhbj.jpg');
    // TODO-QSP: dynamic text: After a few minutes you begin to feel sorry for <<$boydesc>>. You can tell he wa...
    scene.text(`After a few minutes you begin to feel sorry for ${((s as any).boydesc || '')}. You can tell he wants you badly, but he's too nervous to ask you to take off your clothes. You tell him: "Just sit back and relax, baby… I'll make you feel good", and slowly make your way down to his groin. He nods and shifts his hips a bit so you can pull his pants down, and moans your name softly when you close your lips around his ${((s as any).dick || '')}cm dick. You do your best to make him feel good, and tease him a little with your tongue before focusing on giving him your best blowjob.`);
    // TODO-QSP: dynamic text: Your eagerness to please him seems to have inspired <<$boydesc>>, and after a fe...
    scene.text(`Your eagerness to please him seems to have inspired ${((s as any).boydesc || '')}, and after a few minutes he's no longer the nervous guy you went home with. He gently but firmly pulls his hips away from your mouth, and looks at you eagerly.`);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    (s as any).tiprand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).tiprand ?? 0))) {
      (s as any).pose = 1;
      // TODO-QSP: dynamic text: <<$boydesc>> gets up and helps you take off your clothes, before he puts his han...
      scene.text(`${((s as any).boydesc || '')} gets up and helps you take off your clothes, before he puts his hands on your shoulders and motions for you to get on your hands and knees so he can fuck you from behind.`);
    } else {
      (s as any).pose = 0;
      // TODO-QSP: dynamic text: <<$boydesc>> gets up and helps you take off your clothes, before he puts his han...
      scene.text(`${((s as any).boydesc || '')} gets up and helps you take off your clothes, before he puts his hands on your shoulders and pushes you back against the couch, telling you to lie down on your back and spread your legs for him.`);
    }
    scene.actions([
      { label: '<<$fbhactname>>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).ppsex = ((s as any).ppsex ?? 0) + (1);
    qspCall(s, 'stat', '');
    if ((!((s as any).tiprand ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/shared/sex/vag/doggy/fbhdog.jpg"></center...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/shared/sex/vag/doggy/fbhdog.jpg"></center>`);
    }
    if (((s as any).tiprand ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/shared/sex/vag/miss/fbhmiss.jpg"></center...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/shared/sex/vag/miss/fbhmiss.jpg"></center>`);
    }
    qspCall(s, 'dinSex', 'wear_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Brush up', handler: (st: GameState) => {
    if (((s as any).ppbj ?? 0) > 0) {
      if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
    }
    if (((s as any).pphj ?? 0) > 0) {
      if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['hj'] = ((s as any).stat['hj'] ?? 0) + (1);
    }
    if (((s as any).ppsex ?? 0) > 0) {
      if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (1);
    }
    if (((s as any).ppanal ?? 0) > 0) {
      if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['anal'] = ((s as any).stat['anal'] ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/undress/fbhend.jpg');
    // TODO-QSP: dynamic text: Once you're finished, you quickly brush up and begin to put your clothes back on...
    scene.text(`Once you're finished, you quickly brush up and begin to put your clothes back on. ${((s as any).boydesc || '')} smiles at you, already dressed again in a clean fancy dress shirt and pants. You see him think for a few seconds, as if he's not sure how to bring it up. Then he says: "Thanks ${((s as any).pcs_nickname || '')}, I really needed that! I'd love to spend more time with you, but I'm afraid I have to get back to work now. You should go."`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
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

export const fbHouse: LocationDef = {
  name: 'fbHouse',
  region: 'other',
  enter: enter,
};
