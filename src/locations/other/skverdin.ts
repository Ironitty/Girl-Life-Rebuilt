import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDParkPlacerBj(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  (s as any).parkfuckboy = ((s as any).parkfuckboy ?? 0) + (1);
  (s as any).parktimes = ((s as any).parktimes ?? 0) + (1);
  (s as any).pphj = 0;
  (s as any).ppbj = 0;
  (s as any).ppsex = 0;
  (s as any).ppanal = 0;
  scene.actions([
    { label: 'Take his member in your hand', goto: ['skverdin', 'd_pp_hand'] },
    { label: 'Squat down', goto: ['skverdin', 'd_pp_squat'] },
  ]);
  scene.build();
}

function enterDPpHand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/handjob/hj.jpg');
  // TODO-QSP: dynamic text: You clasp your fingers around his erect <<dick>>cm cock and pull back the foresk...
  scene.text(`You clasp your fingers around his erect ${((s as any).dick ?? 0)}cm cock and pull back the foreskin to reveal the purple head, then start to slowly move your hand back and forth.`);
  qspCall(s, 'arousal', 'hj', 2, 'sub');
  qspCall(s, 'stat', '');
  if (Math.floor(Math.random() * 2) + 0 === 0) {
    if (Math.floor(Math.random() * 5) + 0 === 0) {
      // TODO-QSP: dynamic text: <<$boydesc>> takes you by the shoulders and pushes down, trying to force you to ...
      scene.text(`${((s as any).boydesc ?? 0)} takes you by the shoulders and pushes down, trying to force you to kneel.`);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> says impatiently, "<<$pcs_nickname>>, put your mouth on it."
      scene.text(`${((s as any).boydesc ?? 0)} says impatiently, "${((s as any).pcs_nickname ?? 0)}, put your mouth on it."`);
    }
    scene.actions([
      { label: 'Squat down', goto: ['skverdin', 'd_pp_squat'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<$boydesc>> stands still and looks down at you expectantly.
    scene.text(`${((s as any).boydesc ?? 0)} stands still and looks down at you expectantly.`);
    qspCall(s, 'willpower', 'hj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Give him a handjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Give him a handjob', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['skverdin', 'd_pp_hjcum'] },
      ]);
    }
    scene.actions([
      { label: 'Squat down', goto: ['skverdin', 'd_pp_squat'] },
    ]);
  }
  scene.build();
}

function enterDPpHjcum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'hj', 2, 'sub');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/pphjcum.jpg');
  // TODO-QSP: *p 'You speed up your movements and tighten your grip, continuing to stroke his cock until he reache...
  if (Math.floor(Math.random() * 100) + 0 < 20) {
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0));
  }
  scene.actions([
    { label: 'Clean yourself up', goto: ['skverdin', 'd_pp_goend'] },
  ]);
  scene.build();
}

function enterDPpSquat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/squat.jpg');
  // TODO-QSP: dynamic text: You squat down on your haunches and find yourself face to face with his erect <<...
  scene.text(`You squat down on your haunches and find yourself face to face with his erect ${((s as any).dick ?? 0)}cm cock.`);
  scene.actions([
    { label: 'Suck his cock', goto: ['skverdin', 'd_pp_bj'] },
  ]);
  scene.build();
}

function enterDPpBj(s: GameState, scene: SceneBuilder): void {
  (s as any).parkslut = ((s as any).parkslut ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/ppbj.jpg');
  // TODO-QSP: dynamic text: You wrap your lips around his hard <<dick>>cm cock and suck it carefully, explor...
  scene.text(`You wrap your lips around his hard ${((s as any).dick ?? 0)}cm cock and suck it carefully, exploring it with your tongue.`);
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).tiprand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).tiprand ?? 0) === 100) {
    // TODO-QSP: dynamic text: Suddenly, he laughs and calls out, "Shit, <<$boydesc>>, you can't even last fift...
    scene.text(`Suddenly, he laughs and calls out, "Shit, ${((s as any).boydesc ?? 0)}, you can't even last fifteen minutes before some slut is already sucking you off." His friend laughs and turns to him, "What are you waiting for? Come over!" The second guy immediately approaches and pulls his dick out of his pants.`);
    scene.actions([
      { label: 'Oh my god!', goto: ['skverdin', 'd_pp_double'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<$boydesc>> suddenly pulls his member out of your mouth and begins to lift you ...
    scene.text(`${((s as any).boydesc ?? 0)} suddenly pulls his member out of your mouth and begins to lift you up, turning you around so your back is to him.`);
    if (((s as any).tiprand ?? 0) >= 70) {
      // TODO-QSP: dynamic text: <<$boydesc>> whispers to you, "<<$pcs_nickname>>, isn't your mouth getting tired...
      scene.text(`${((s as any).boydesc ?? 0)} whispers to you, "${((s as any).pcs_nickname ?? 0)}, isn't your mouth getting tired? Want to switch positions?"`);
      scene.actions([
        { label: 'Bend over', goto: ['skverdin', 'd_pp_sex'] },
        { label: 'Continue sucking', goto: ['skverdin', 'd_pp_bjcum'] },
      ]);
    } else {
      scene.text('You feel his cock stiffen - it seems he\'s about to finish.');
      scene.actions([
        { label: 'Stroke faster', goto: ['skverdin', 'd_pp_hjcum'] },
        { label: 'Continue sucking', goto: ['skverdin', 'd_pp_bjcum'] },
      ]);
    }
    scene.actions([
      { label: 'Bend over', goto: ['skverdin', 'd_pp_sex'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'd_park_placer_bj':
      enterDParkPlacerBj(s, scene);
      break;
    case 'd_pp_hand':
      enterDPpHand(s, scene);
      break;
    case 'd_pp_hjcum':
      enterDPpHjcum(s, scene);
      break;
    case 'd_pp_squat':
      enterDPpSquat(s, scene);
      break;
    case 'd_pp_bj':
      enterDPpBj(s, scene);
      break;
    default:
      enterDParkPlacerBj(s, scene);
      break;
  }
}

export const skverdin: LocationDef = {
  name: 'skverdin',
  title: 'You continue to suck and in less than a minute his member er',
  region: 'other',
  enter: enter,
};
