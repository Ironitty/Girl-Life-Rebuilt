import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: If $ARGS[0] = '':
  (s as any).vitekvisit = ((s as any).vitekvisit ?? 0) + (1);
  qspCall(s, 'boyStat', 'A9');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  if (((s as any).vitekvisit ?? 0) <= 10) {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
    }
    // TODO-QSP: dynamic text: Vitek begins to grope you, while he aggressively kisses you on your lips. He gru...
    scene.text(`Vitek begins to grope you, while he aggressively kisses you on your lips. He grunts: "${((s as any).pcs_nickname ?? 0)}, take off your clothes."`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        scene.actions([
          { label: '"I\'m still a virgin!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/embarrassed.mp4');
    if (((s as any).vitekvisit ?? 0) <= 5) {
      scene.text('You try to slow Vitek down, and tell him you\'re still a virgin.');
      scene.text('He scratches his head for a second, but decides to settle for an alternative: "I understand, babe. That\'s okay, there are other ways we can have fun. How about I fuck your tight ass instead, or you give me a nice blowjob? Don\'t worry, I won\'t tell anyone…"');
      scene.actions([
        { label: 'Take his cock in your mouth', goto: ['kotovSex', 'bj'] },
        { label: 'Suggest he fucks your ass', goto: ['kotovSex', 'anal'] },
      ]);
    } else {
      scene.text('Vitek looks at you hesitantly, and says: "Baby, we\'ve been dating for a while now. I want to be your first… don\'t worry, I\'m not going to hurt you."');
      scene.text('You\'re not so sure, and say: "Look honey… I love you, but if mother finds out she\'s going to kill me!"');
      scene.text('He shrugs: "So what? Just tell her we\'re the real deal. Love until death do us part and all that jazz. She\'ll understand, now come here…"');
      qspCall(s, 'willpower', 'sex', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/embarrassed.mp4');
    // TODO-QSP: dynamic text: You avoid his gaze as you say: "I'm sorry, Vitek. I would like to, but it's just...
    scene.text(`You avoid his gaze as you say: "I'm sorry, Vitek. I would like to, but it's just too early for me. My ${((s as any).npc_nickname ?? 0)?.['A29']} would never forgive me."`);
    // TODO-QSP: dynamic text: Vitek loses his patience and angrily says: "Damnit, <<$pcs_nickname>>. You're <<...
    scene.text(`Vitek loses his patience and angrily says: "Damnit, ${((s as any).pcs_nickname ?? 0)}. You're ${((s as any).age ?? 0)} years old, and hot as hell. You're my bitch, and I say it's time we fuck… I've waited long enough!"`);
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep refusing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep Refusing', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).kotovLoveQW = (-1);
    (s as any).npc_rel[String((s as any).boy ?? 0)] = 0;
    scene.text('When you keep refusing, he pushes you away and shouts: "Fine, go to your mother! Just leave me the fuck alone, we are done for! I\'m so fucking done with this!"');
    scene.text('Nothing you say can change his mind. Vitek feels like you\'ve been leading him on for too long, and now he wants nothing to do with you.');
    scene.actions([
      { label: 'Leave his apartment', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Lose your innocence', goto: ['kotovSex', 'first_sex'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Lose your innocence', goto: ['kotovSex', 'first_sex'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: '"I\'m still a virgin!"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You try to slow Vitek down, and tell him you\'re still a virgin.');
    scene.text('He grins at you and says: "Really, kitten? You\'ve finished school, you\'re an adult now! You can do whatever you want! If you really want to wait, you can use your mouth or ass to please me, but come on… don\'t you think it\'s time?"');
    scene.actions([
      { label: 'Take his cock in your mouth', goto: ['kotovSex', 'bj'] },
      { label: 'Suggest he fucks your ass', goto: ['kotovSex', 'anal'] },
      { label: 'Spread your legs for him', goto: ['kotovSex', 'sex'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Take off your clothes', handler: (st: GameState) => {
    scene.img('images/shared/sex/undress/kotovpre1\'+rand(1, 4)+\'.mp4');
    qspCall(s, 'shortgs', 'undress');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You quickly take off your clothes, and can\'t help but admire Vitek\'s muscular body when he does the same.');
    scene.actions([
      { label: 'Spread your legs for him', goto: ['kotovSex', 'sex'] },
      { label: 'Suggest he fucks your ass', goto: ['kotovSex', 'anal'] },
      { label: 'Take his cock in your mouth', goto: ['kotovSex', 'bj'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).ekQW ?? 0)?.['piercing_tongue'] === 0) {
      (s as any).ekQW['piercing_tongue'] = 1;
      scene.text('Vitek notices a glimmer in your mouth when you talk, and asks: "Wait, what\'s that in your mouth?"');
      scene.text('You stick out your tongue and show him your piercing. He grins at you: "Oh, nice… aren\'t those supposed to make it feel better when you suck a dick? Is that why you got it?"');
      scene.text('You act insulted and give him a weak slap on his chest: "Viktor, come on!"');
      // TODO-QSP: dynamic text: He's still grinning, intrigued by your tongue piercing. He says: "Don't worry, <...
      scene.text(`He's still grinning, intrigued by your tongue piercing. He says: "Don't worry, ${((s as any).pcs_nickname ?? 0)}. I won't tell anyone. Now I really want to know how it feels on my cock, though…"`);
    }
  } else {
    (s as any).npc_had_sex[String((s as any).boy ?? 0)] = 1;
    (s as any).i = Math.floor(Math.random() * 6) + 1;
    if (((s as any).i ?? 0) <= 2) {
      scene.img('images/shared/sex/sequence/kotovpre\'+rand(0, 4)+\'.mp4');
      if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
        scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
      }
      scene.text('Vitek begins to grope you, while he aggressively kisses you on your lips. You enthusiastically kiss him back, and sit down next to him when he falls back onto his bed.');
      qspCall(s, 'arousal', 'kiss', 5);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Hop on his lap', handler: (st: GameState) => {
    scene.img('images/shared/sex/sequence/kotovpre2\'+rand(0, 3)+\'.mp4');
    scene.text('You eagerly hop onto your boyfriend\'s lap, and keep kissing him while you grind your groin against his. You can clearly feel his erection through his clothes.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him slip his cock inside you', goto: ['kotovSex', 'sex_cow<<rand (1,5)>>'] },
      { label: 'Kneel down before him', goto: ['kotovSex', 'bj'] },
    ]);
  } },
        { label: 'Take off your clothes', handler: (st: GameState) => {
    scene.img('images/shared/sex/undress/kotovpre1\'+rand(1, 4)+\'.mp4');
    scene.text('You quickly take off your clothes, and can\'t help but admire Vitek\'s muscular body when he does the same.');
    qspCall(s, 'shortgs', 'undress');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', goto: ['kotovSex', 'sex_cow<<rand (1,5)>>'] },
      { label: 'Missionary', goto: ['kotovSex', 'misionary<<rand (1,4)>>'] },
      { label: 'Kneel down before him', goto: ['kotovSex', 'bj'] },
      { label: 'Do whatever he wants', goto: ['kotovSex', 'sub'] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/shared/sex/kiss/kotovpre30.mp4');
      if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
        scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
        qspCall(s, 'arousal', 'kiss', 5);
      }
      scene.text('Vitek throws you down onto his bed, and pounces on top of you.');
      scene.text('You eagerly begin to kiss him again, and silently pray that he didn\'t rip your clothes in his enthusiasm to get you naked. At the same time, you\'re too horny to even be mad at him if he did, you want him badly!');
      qspCall(s, 'shortgs', 'undress');
      qspCall(s, 'arousal', 'kiss', 5);
      qspCall(s, 'stat', '');
      if (((s as any).i ?? 0) === 4) {
        scene.img('images/shared/sex/undress/kotovpre50.mp4');
        if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
          scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
          qspCall(s, 'arousal', 'kiss', 5);
        }
        scene.text('Vitek throws you down onto his bed, and pounces on top of you. He slowly works his way down your body, and then eagerly buries his face between your legs. Soon, you feel his tongue on your puffy pussy lips.');
        qspCall(s, 'arousal', 'foreplay', 5);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Enjoy', goto: ['kotovSex', 'kuni'] },
        ]);
      } else {
        scene.img('images/shared/sex/undress/kotovpre60.mp4');
        if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
          scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
        }
        scene.text('You and Vitek kiss a while longer, slowly undressing one another. His hands work his way towards your breasts, and he teasingly pinches your nipples while you rub your fingers over his erect penis. When he puts one hand on your shoulder and pushes you down lightly, you immediately understand what he wants…');
        qspCall(s, 'shortgs', 'undress');
        qspCall(s, 'arousal', 'foreplay', 5);
        qspCall(s, 'stat', '');
        if (((s as any).i ?? 0) === 6) {
          scene.img('images/shared/sex/undress/kotovpre4\'+rand(0, 2)+\'.mp4');
          if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
            scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
          }
          scene.text('When the two of you burst into his room, Vitek immediately pushes you down to your hands and knees and begins to take off your clothes, eagerly running his hands over your ass cheeks.');
          qspCall(s, 'shortgs', 'undress');
          qspCall(s, 'arousal', 'foreplay', 5);
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Stay on your hands and knees for him', goto: ['kotovSex', 'dog<<rand (1,4)>>'] },
          ]);
        }
        if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).ekQW ?? 0)?.['piercing_tongue'] === 0) {
          (s as any).ekQW['piercing_tongue'] = 1;
          scene.text('Vitek notices a glimmer in your mouth when you talk, and asks: "Wait, what\'s that in your mouth?"');
          scene.text('You stick out your tongue and show him your piercing. He grins at you: "Oh, nice! Aren\'t those supposed to make it feel better for the guy when you suck his dick? Is that why you got it?"');
          scene.text('You act insulted and give him a weak slap on his chest: "Viktor, come on!"');
          // TODO-QSP: dynamic text: He's still grinning, intrigued by your tongue piercing. He says: "Don't worry <<...
          scene.text(`He's still grinning, intrigued by your tongue piercing. He says: "Don't worry ${((s as any).pcs_nickname ?? 0)}, I won't tell anyone. Now I really want to know how it feels on my cock, though…"`);
        }
        scene.actions([
          { label: 'Kneel down before him', goto: ['kotovSex', 'bj'] },
        ]);
      }
      scene.actions([
        { label: 'Spread your legs for him', goto: ['kotovSex', 'misionary<<rand (1,4)>>'] },
      ]);
    }
  }
  scene.build();
}

export const kotovSex: LocationDef = {
  name: 'kotovSex',
  title: 'You give Vitek a light kiss on his lips, and whisper in his ',
  region: 'other',
  description: ['You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"'],
  enter: enter,
};
