import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterVasilyHomeMomgg1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/momgg/ev1_1.jpg');
  // TODO-QSP: dynamic text: Oops, uncle Sergey has a woman over! Just as you're about to leave them alone, y...
  scene.text(`Oops, uncle Sergey has a woman over! Just as you're about to leave them alone, you're shocked by the realization. "Wait a minute… ${((s as any).npc_nickname ?? 0)?.['A29']}?!"`);
  scene.text('Sergey\'s hands are roving over your mother\'s body, fondling her breasts and caressing her ass while she moans like a wanton whore. Sergey runs his hands over her pussy, rubbing her clit until your mother tries to scoot away from him.');
  scene.text('He smirks at her and moves his head to her inner thighs. He\'s placing kisses all over the place, carefully avoiding her pussy.');
  scene.text('"Just lick me already, you bastard!" your mother groans, and moans happily as Sergey thrusts his tongue inside her. Your mother lets out a satisfied sigh and closes her eyes, thoroughly enjoying his mouth on her wet cunt.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'gopsex', 'masturb_gg');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- vasily_home_momgg1 ---
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/momgg/ev1_2.jpg');
    scene.text('After licking your mother\'s pussy for a few minutes, he grabs her by the arms and pulls her up from the couch, putting her down on her knees in front of him. Without needing any prompting, she eagerly closes her lips around the head of his cock and begins to take it further and further into her mouth. They\'ve definitely done this before.');
    scene.text('Sergey grips your mother\'s hair firmly and thrusts his hips forward, forcing his cock all the way down her throat.');
    scene.text('"That\'s it Natasha, take it all the way… Rub your lipstick all over my groin," he grins, looking her straight in the eye before he begins to fuck her mouth furiously. Your mother takes it like a champ, not showing any gag reflex whatsoever.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'gopsex', 'masturb_gg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/momgg/ev1_3_\'+rand(1, 2)+\'.jpg');
    scene.text('When Sergey pulls your mother\'s head away from his cock, a thick strand of saliva dribbles down from it onto the floor.');
    scene.text('"On the couch, Natasha," Sergey commands. "You know what I want next."');
    scene.text('Your mother nods and eagerly gets down on the couch, moaning at him. "Fuck me, Sergey! Fuck me hard!"');
    scene.text('Sergey spreads her ass cheeks with his hands and guides his cock to her cunt. He\'s not very gentle and begins to pound her furiously, as if his life depended on it.');
    scene.text('Your mother looks like she wouldn\'t have it any other way and rhythmically bounces her ass back against his hips, matching his thrusts. "Yes! Keep fucking me! Just like that! Aaahhh…"');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'gopsex', 'masturb_gg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/momgg/ev1_4_\'+rand(1, 3)+\'.jpg');
    scene.text('You know you shouldn\'t be watching this… but wow! Sergey is treating your mother like a cheap whore, and she\'s loving it!');
    scene.text('Sergey decides to change things up a bit and sits on the couch, his cock still firmly erect. Your mother immediately mounts him with a lewd grin on her face and rides his cock eagerly.');
    scene.text('Sergey roughly pinches your mother\'s nipples while he keeps degrading her, talking about what a huge slut she is for him and how he can\'t believe how often she\'s coming upstairs to see him lately. Your mother just groans and rides him even harder.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'gopsex', 'masturb_gg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/momgg/ev1_5.jpg');
    scene.text('Your mother quickly gets up and drops down on her knees before Sergey when she notices he\'s about to cum. Seconds later, Sergey roars and throws his head back while your mother jerks him off, opening her mouth to catch the jets of his hot sperm.');
    scene.text('She\'s not very good at aiming it; the majority of it lands on her cheeks and chin. When Sergey recovers a little, he grins down and watches your mother lick and suck on his slowly softening cock, some of his load slowly running down her chin and dripping down to her breasts.');
    scene.text('He lovingly strokes her hair for a second and says "You\'re insatiable, Natasha. I\'m glad Vladimir decided the two of you should live here, right below me!"');
    scene.text('"What can I say? Vladimir just can\'t keep me satisfied by himself. A woman has her needs, you know…" she grins. "I better freshen up and head back downstairs though, before anyone notices I\'m gone. See you soon?"');
    scene.text('Sergey nods happily. "Absolutely!"');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Hide while your mother leaves', goto: ['vasilyhome', 'hallway'] },
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
    case 'vasily_home_momgg1':
      enterVasilyHomeMomgg1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vasily_home_sex: LocationDef = {
  name: 'vasily_home_sex',
  title: 'Sergey\'s hands are roving over your mother\'s body, fondling ',
  region: 'other',
  enter: enter,
};
