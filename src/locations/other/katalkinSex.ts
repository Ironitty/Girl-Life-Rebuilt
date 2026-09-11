import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).schtraf = 0;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).katalkinNoexit = 0;
  (s as any).katalkinSexDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/katalkin/sex/kat.jpg');
  scene.text('Since he doesn\'t notice any clear objections from you, captain Katalkin\'s groping grows bolder.');
  // TODO-QSP: dynamic text: His hands now ravage your body as he roughly squeezes your <<$titsize>> breasts ...
  scene.text(`His hands now ravage your body as he roughly squeezes your ${((s as any).titsize ?? 0)} breasts and pinches your nipples before he pulls you up and reaches behind you, pawing at your ass as he pulls your clothes to the side for better access.`);
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Push his hands away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Push his hands away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/kat.jpg');
    scene.text('You try to object. "Wait! Please, I\'m on my period and I have a headache and…"');
    scene.text('You try to push his hands away, but he doesn\'t listen. If anything, he\'s groping you even harder now, trying to overcome your interruptions. He\'s slowly tugging and pulling at your clothes, attempting to take them off.');
    scene.actions([
      { label: 'Put your hand on his groin', goto: ['katalkinSex', 'sexgo'] },
      { label: 'Close your eyes', goto: ['katalkinSex', 'd_katsub'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Close your eyes [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Close your eyes [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['katalkinSex', 'd_katsub'] },
    ]);
  }
  scene.actions([
    { label: 'Kiss him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/kat.jpg');
    scene.text('You put your arms around him and kiss him on his lips, happy to let him grope your ass for the time being. He\'s surprisingly powerful for his figure, and the way he takes control of the kiss and aggressively shoves his tongue in your mouth makes you feel like he\'s used to getting his way.');
    qspCall(s, 'arousal', 'kiss', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Put your hand on his groin', goto: ['katalkinSex', 'sexgo'] },
      { label: 'Close your eyes', goto: ['katalkinSex', 'd_katsub'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexgo(s: GameState, scene: SceneBuilder): void {
  scene.text('You don\'t say anything, but simply smile as you put your hand on his groin and knead it softly with your fingers. This puts a lewd grin on his face. "I knew it! I knew you had a thing for men in uniform as soon as you walked through that door!"');
  scene.text('Within seconds, you can feel his penis grow more rigid, and before too long the outline of his erect cock is distinctly visible through his pants.');
  scene.text('He encourages you further. "You know… I could get my handcuffs and we could really have some fun… Nah, maybe next time. Keep going."');
  scene.actions([
    { label: 'Kneel before him', handler: (st: GameState) => {
    (s as any).katalkinSexOnce = 1;
    (s as any).katalkinSexDay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/kneel.jpg');
    scene.text('You drop down to your knees in front of captain Katalkin, your hand never leaving his groin as you tease him. "Captain, could you give me a hand please?"');
    scene.text('He\'s more than happy to oblige, and quickly undoes his pants and pulls them down. His erect cock springs out, nearly smacking you on the forehead. You close your fingers around it as you direct it towards your mouth, running your tongue over the head.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/bj.jpg');
    qspCall(s, 'dinsex', 'bj_random');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.actions([
        { label: 'Swallow his cum', handler: (st: GameState) => {
    (s as any).KatalkinSwallow = ((s as any).KatalkinSwallow ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/swallow.jpg');
    qspCall(s, 'dinsex', 'bj_swallow_random');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['katalkin', ''] },
    ]);
  } },
        { label: 'Take his load on your face', handler: (st: GameState) => {
    // TODO-QSP: Katalkin
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    scene.img('images/pc/body/cum/cumface/black/13.jpg');
    scene.text('When he\'s about to orgasm, you release his cock from your mouth and give it a few quick jerks with your fingers as you aim it over your face, closing your eyes in anticipation.');
    scene.text('Soon enough, you feel his warm load splattering all over your face. You lick your lips to have a taste. It tastes somewhat bitter, but not necessarily unpleasant.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['katalkin', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('You\'re doing your best to give captain Katalkin a good blowjob, but after a few minutes he suddenly pulls his dick out of your mouth and pulls you up.');
      scene.text('He grabs you by the ass cheeks and gives you another rough kiss. "That was nice, but now one of your other holes gets a turn…"');
      scene.actions([{ label: 'Continue', goto: ['katalkinSex', 'd_katsub'] }]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDKatanal(s: GameState, scene: SceneBuilder): void {
  (s as any).katalkinSexOnce = 1;
  (s as any).KatalkinAnal = ((s as any).KatalkinAnal ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/katalkin/sex/katanal.jpg');
  scene.text('Captain Katalkin quickly takes off his uniform and neatly puts it on a hanger before he walks over and tells you to lean over the table. He\'s clearly used to girls taking orders from him, and he expects nothing less from you.');
  scene.text('You quickly do as he says and he gives you a hard slap on your naked ass.');
  scene.text('"That\'s a nice ass you have, girl," he growls. "Maybe I should put you under arrest and have you stay for a couple of days? I bet my other boys would love to get a turn…"');
  qspCall(s, 'dinsex', 'boy_wants_anal');
  qspCall(s, 'dinsex', 'analsex');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/after.jpg');
    scene.text('Captain Katalkin enjoys the feeling of your ass squeezing around his cock for a few seconds before he slowly pulls out. A trickle of cum slowly dribbles out of your stretched asshole.');
    scene.text('When you try to get up, he pushes you back down against the table. "In a minute, girl! Show me your used hole first."');
    scene.text('You obey and pull your ass cheeks to the sides, showing him your stretched asshole as his cum slowly dribbles down over your pussy lips. He admires his work for a few more seconds before he slaps your ass, indicating that you can get up.');
    qspCall(s, 'arousal', 'anal', 3, 'sub');
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['katalkin', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDKatsub(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/katalkin/sex/bend.jpg');
  scene.text('You try to close yourself off from the world, focusing on the rough groping he\'s giving you. He clearly knows his way around your body, and you quietly enjoy the feeling.');
  scene.text('After a while, he roughly turns you around and puts his hand on your back, forcing you to lean over.');
  qspCall(s, 'arousal', 'foreplay', 3, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Lean against the wall', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/grop.jpg');
    scene.text('You open your eyes and rapidly see the wall approaching. You quickly place your hands up against the wall and lean against it as he kicks the insides of your heels to signal you to spread your legs more.');
    scene.text('As soon as you do, his hand finds its way between your legs and crudely massages your pussy and ass crack through your clothes.');
    scene.text('"Take off your clothes and get on your hands and knees over there," he hisses.');
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Undress and assume the position', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/katbeforeanal.jpg');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('For a brief second, you wonder how many girls he\'s had in his office like this before you. There definitely seems to be a degree of routine in how he treats you, and the way he commands you to do things reinforce that image. You quickly take off your clothes and drop to your hands and knees.');
      scene.text('You can tell he noticed your hesitation, and his commands get more impatient and strict. "Spread your ass cheeks and show me your holes."');
      scene.text('You quickly do as he says and he runs his hands over your ass cheeks before he pushes two fingers against your clenched sphincter.');
      scene.text('He then reaches for his dick and gives it a few strokes. "I think I\'d rather fuck your ass today," he growls. "Besides, as captain of the police department, I really can\'t have you getting pregnant on me."');
      qspCall(s, 'arousal', 'anal_finger', 3, 'sub');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['katalkinSex', 'd_katanal'] },
      ]);
    } else {
      scene.text('For a brief second, you wonder how many girls he\'s had in his office like this before you. There definitely seems to be a degree of routine in how he treats you, and the way he commands you to do things reinforce that image. You quickly take off your clothes and drop to your hands and knees.');
      scene.text('You can tell he noticed your hesitation, and his commands get more impatient and strict. "Spread your ass cheeks and show me your holes."');
      scene.text('You quickly do as he says and he runs his hands over your ass cheeks.');
      scene.text('"Got a condom?" he bluntly asks.');
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    (s as any).pose = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/sex.jpg');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 15, 'sub');
    qspCall(s, 'dinsex', 'sexcum');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['katalkin', ''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/katalkin/sex/katbeforeanal.jpg');
    scene.text('You shake your head. "Sorry, I don\'t."');
    scene.text('He grins. "It\'s okay girl, I was hoping you would say that. In that case, I\'m going to fuck you in the ass. Can\'t have you getting pregnant on me."');
    qspCall(s, 'arousal', 'anal_finger', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['katalkinSex', 'd_katanal'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sex':
      enterSex(s, scene);
      break;
    case 'sexgo':
      enterSexgo(s, scene);
      break;
    case 'd_katanal':
      enterDKatanal(s, scene);
      break;
    case 'd_katsub':
      enterDKatsub(s, scene);
      break;
    default:
      enterSex(s, scene);
      break;
  }
}

export const katalkinSex: LocationDef = {
  name: 'katalkinSex',
  title: 'Since he doesn\'t notice any clear objections from you, capta',
  region: 'other',
  description: ['Since he doesn\'t notice any clear objections from you, captain Katalkin\'s groping grows bolder.'],
  enter: enter,
};
