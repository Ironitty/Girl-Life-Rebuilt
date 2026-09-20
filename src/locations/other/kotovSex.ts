import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
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
    scene.text(`Vitek begins to grope you, while he aggressively kisses you on your lips. He grunts: "${((s as any).pcs_nickname ?? '')}, take off your clothes."`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        scene.actions([
          { label: '"I\'m still a virgin!"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/embarrassed.mp4');
    if (((st as any).vitekvisit ?? 0) <= 5) {
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
      qspCall(st, 'willpower', 'sex', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/embarrassed.mp4');
    // TODO-QSP: dynamic text: You avoid his gaze as you say: "I''m sorry, Vitek. I would like to, but it''s ju...
    scene.text(`You avoid his gaze as you say: "I'm sorry, Vitek. I would like to, but it's just too early for me. My ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} would never forgive me."`);
    // TODO-QSP: dynamic text: Vitek loses his patience and angrily says: "Damnit, <<$pcs_nickname>>. You''re <...
    scene.text(`Vitek loses his patience and angrily says: "Damnit, ${((st as any).pcs_nickname ?? '')}. You're ${((st as any).age ?? '')} years old, and hot as hell. You're my bitch, and I say it's time we fuck… I've waited long enough!"`);
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep refusing', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep Refusing', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).kotovLoveQW = (-1);
    ((st as any).npc_rel = (st as any).npc_rel ?? {})[String((st as any).boy ?? 0)] = 0;
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
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
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
    scene.img('images/shared/sex/undress/kotovpre1' + (Math.floor(Math.random() * 4) + 1) + '.mp4');
    qspCall(st, 'shortgs', 'undress');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
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
      ((s as any).ekQW = (s as any).ekQW ?? {})['piercing_tongue'] = 1;
      scene.text('Vitek notices a glimmer in your mouth when you talk, and asks: "Wait, what\'s that in your mouth?"');
      scene.text('You stick out your tongue and show him your piercing. He grins at you: "Oh, nice… aren\'t those supposed to make it feel better when you suck a dick? Is that why you got it?"');
      scene.text('You act insulted and give him a weak slap on his chest: "Viktor, come on!"');
      // TODO-QSP: dynamic text: He''s still grinning, intrigued by your tongue piercing. He says: "Don''t worry,...
      scene.text(`He's still grinning, intrigued by your tongue piercing. He says: "Don't worry, ${((s as any).pcs_nickname ?? '')}. I won't tell anyone. Now I really want to know how it feels on my cock, though…"`);
    }
  } else {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    (s as any).i = (Math.floor(Math.random() * 6) + 1);
    if (((s as any).i ?? 0) <= 2) {
      scene.img('images/shared/sex/sequence/kotovpre' + (Math.floor(Math.random() * 5) + 0) + '.mp4');
      if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
        scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
      }
      scene.text('Vitek begins to grope you, while he aggressively kisses you on your lips. You enthusiastically kiss him back, and sit down next to him when he falls back onto his bed.');
      qspCall(s, 'arousal', 'kiss', 5);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Hop on his lap', handler: (st: GameState) => {
    scene.img('images/shared/sex/sequence/kotovpre2' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
    scene.text('You eagerly hop onto your boyfriend\'s lap, and keep kissing him while you grind your groin against his. You can clearly feel his erection through his clothes.');
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him slip his cock inside you', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
      { label: 'Kneel down before him', goto: ['kotovSex', 'bj'] },
    ]);
  } },
        { label: 'Take off your clothes', handler: (st: GameState) => {
    scene.img('images/shared/sex/undress/kotovpre1' + (Math.floor(Math.random() * 4) + 1) + '.mp4');
    scene.text('You quickly take off your clothes, and can\'t help but admire Vitek\'s muscular body when he does the same.');
    qspCall(st, 'shortgs', 'undress');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
      { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
      { label: 'Kneel down before him', goto: ['kotovSex', 'bj'] },
      { label: 'Do whatever he wants', goto: ['kotovSex', 'sub'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).i ?? 0) === 3) {
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
        scene.actions([
          { label: 'Spread your legs for him', goto: ['kotovSex', 'misionary' + 0 + ''] },
        ]);
      } else {
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
          if (((s as any).i ?? 0) === 5) {
            scene.img('images/shared/sex/undress/kotovpre60.mp4');
            if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
              scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
            }
            scene.text('You and Vitek kiss a while longer, slowly undressing one another. His hands work his way towards your breasts, and he teasingly pinches your nipples while you rub your fingers over his erect penis. When he puts one hand on your shoulder and pushes you down lightly, you immediately understand what he wants…');
            qspCall(s, 'shortgs', 'undress');
            qspCall(s, 'arousal', 'foreplay', 5);
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Kneel down before him', goto: ['kotovSex', 'bj'] },
            ]);
          } else {
            if (((s as any).i ?? 0) === 6) {
              scene.img('images/shared/sex/undress/kotovpre4' + (Math.floor(Math.random() * 3) + 0) + '.mp4');
              if (((s as any).LariskaQW ?? 0)?.['VitekHelp'] === 1  &&  ((s as any).lariskaQwestDay ?? 0) === ((s as any).daystart ?? 0)) {
                scene.text('You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"');
              }
              scene.text('When the two of you burst into his room, Vitek immediately pushes you down to your hands and knees and begins to take off your clothes, eagerly running his hands over your ass cheeks.');
              qspCall(s, 'shortgs', 'undress');
              qspCall(s, 'arousal', 'foreplay', 5);
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Stay on your hands and knees for him', goto: ['kotovSex', 'dog' + 0 + ''] },
              ]);
            }
          }
        }
      }
    }
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).ekQW ?? 0)?.['piercing_tongue'] === 0) {
      ((s as any).ekQW = (s as any).ekQW ?? {})['piercing_tongue'] = 1;
      scene.text('Vitek notices a glimmer in your mouth when you talk, and asks: "Wait, what\'s that in your mouth?"');
      scene.text('You stick out your tongue and show him your piercing. He grins at you: "Oh, nice! Aren\'t those supposed to make it feel better for the guy when you suck his dick? Is that why you got it?"');
      scene.text('You act insulted and give him a weak slap on his chest: "Viktor, come on!"');
      // TODO-QSP: dynamic text: He''s still grinning, intrigued by your tongue piercing. He says: "Don''t worry ...
      scene.text(`He's still grinning, intrigued by your tongue piercing. He says: "Don't worry ${((s as any).pcs_nickname ?? '')}, I won't tell anyone. Now I really want to know how it feels on my cock, though…"`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  (s as any).bjrand = (Math.floor(Math.random() * 7) + 0);
  (s as any).kotovBJtimes = ((s as any).kotovBJtimes ?? 0) + (1);
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
    (s as any).textsexkotov = 'caressing his cock with your tongue piercing as much as you can, knowing how much he loves it';
  } else {
    (s as any).textsexkotov = 'caressing his cock with the tip of your tongue as much as you can';
  }
  scene.img(`images/shared/sex/blowjob/kotovbj${((s as any).bjrand ?? '')}.jpg`);
  scene.text('You lightly pat his crotch while you give him a teasing grin: "Oooo, feels like someone is happy to see me!" when his cock becomes more and more erect.');
  scene.text('Vitek wastes no time and quickly takes off his pants, and you close your fingers around his exposed cock immediately. "Just relax, Vitek…" you whisper in his ears, before closing your lips around the head.');
  // TODO-QSP: dynamic text: You do your best to give your boyfriend a good blowjob, <<$textsexkotov>>. Befor...
  scene.text(`You do your best to give your boyfriend a good blowjob, ${((s as any).textsexkotov ?? '')}. Before you know it, his cock is mostly in your mouth and you feel the head pushing against your throat. Vitek groans: "${((s as any).pcs_nickname ?? '')}, I'm going to come!"`);
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'bj', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Jerk him off instead', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Jerk him off instead', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/shared/sex/handjob/kotovhj.jpg');
    scene.text('You silently think to yourself: "Aww… what a gentleman! Most guys wouldn\'t bother warning me," while you jerk him off enthusiastically, wanting to make him feel good even though he\'s no longer in your mouth.');
    qspCall(st, 'arousal', 'hj', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Point his cock at your face', handler: (st: GameState) => {
    scene.img('images/pc/body/cum/cumface/brown/12.jpg');
    scene.text('You point his cock at your face and smile at him, encouraging him: "You can cum all over my face, babe… no need to hold back."');
    scene.text('Vitek groans, and you feel his warm sperm land on your cheeks almost immediately. When you don\'t feel any more land on your face, you carefully open your eyes and look him at him with a wide grin on your face.');
    qspCall(st, 'arousal', 'hj', 5, 'dom');
    qspCall(st, 'cum_call', 'hands', 'A9', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } },
      { label: 'Keep jerking him off', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/bossbjcum.jpg');
    scene.text('You squeeze the head of his cock with every stroke, and before too long he shoots his load in your hand. You smile when you feel his warm sperm drip down your fingers slowly.');
    qspCall(st, 'arousal', 'hj', 5, 'dom');
    qspCall(st, 'cum_call', 'hands', 'A9', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/kotovbjcum.jpg');
    scene.text('It\'s nice of him to warn you, but you\'re not scared of taking his load in your mouth. Unfazed, you keep sucking on his cock and chuckle when you feel the first jet of his sperm enter your mouth.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'cum_call', 'mouth', 'A9', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Swallow his load while he cums', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth_swallow', 'A9', 1);
    scene.img('images/shared/sex/cum/mouth/cocksuck2.jpg');
    scene.text('You swallow the sperm as much as you can, when you feel it in your mouth. You didn\'t get all of it, but obediently swallow most of his load and keep sucking his dick even when it begins to soften. Vitek groans and pulls away from you, saying: "Wow, it\'s so sensitive! Please stop!"');
    scene.text('You simply smile at him and say: "Just trying to make you feel good, babe…"');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } },
      { label: 'Gather his cum in your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/kotovbjcum4.jpg');
    scene.text('You keep sucking on his cock, making sure you don\'t swallow any of his cum. It slowly gathers in your mouth while you keep sucking dutifully. Eventually, he\'s the one to pull away from you when he realizes you\'re not going to give up.');
    scene.actions([
      { label: 'Spit it out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/shared/sex/cum/gop8.jpg');
    scene.text('You smile at him and quickly go to the bathroom, discretely spitting his load into the sink.');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'kotovdom', 'vann');
  } },
      { label: 'Swallow it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth_swallow', 'A9', 1);
    scene.img('images/shared/sex/cum/mouth/cum19.jpg');
    scene.text('When he pulls out you show his load in your mouth before swallowing it, and opening your mouth again to show him that it\'s gone. Vitek grins at you with an adoring look in this eyes… he loves it when you do that.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } },
      { label: 'Play with his sperm', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth_swallow', 'A9', 1);
    scene.img('images/shared/sex/cum/kotovbjcum2.jpg');
    scene.text('When he pulls out you show his load in your mouth and play with it, tossing it around with your tongue and blowing bubbles. Vitek grins at you with an adoring look in this eyes… he loves it when you act like a slut for him.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  scene.img('images/shared/sex/anal/doggy/anal31.jpg');
  qspCall(s, 'dinSex', 'boy_wants_anal');
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  // TODO-QSP: dynamic text: He laughs: "Wow <<$pcs_nickname>>, you fuck like a bunny! You''ve drained me com...
  scene.text(`He laughs: "Wow ${((s as any).pcs_nickname ?? '')}, you fuck like a bunny! You've drained me completely, for now… I really don't think I can go again! You were great though…"`);
  qspCall(s, 'arousal', 'anal', 15, 'sub');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', 'anus', 'A9', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: '"Baby, I want more…"', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('Once he recovers a bit, you grin at Vitek while you gently rub his cock: "Babe, do you think you can go again? I\'d be up for more, if you are…"');
    scene.text('He smirks: "You\'re insatiable! Give me a minute and keep doing what you\'re doing, that feels nice…"');
    scene.actions([
      { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
      { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
      { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
      { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    ]);
  } },
    { label: 'Relax for a while', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  scene.img('images/shared/sex/vag/miss/sex.jpg');
  qspCall(s, 'dinsex', 'boy_puts_condom');
  scene.text('You lie down on your back and willingly spread your legs for Vitek, inviting him to fuck you.');
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  (s as any).kotovVagSex = ((s as any).kotovVagSex ?? 0) + (1);
  // TODO-QSP: dynamic text: He laughs: "Wow <<$pcs_nickname>>, you fuck like a bunny! You''ve drained me com...
  scene.text(`He laughs: "Wow ${((s as any).pcs_nickname ?? '')}, you fuck like a bunny! You've drained me completely, for now… I really don't think I can go again! It was great though…"`);
  qspCall(s, 'arousal', 'vaginal', 15, 'sub');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', '', '', 'A9', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask for more', handler: (st: GameState) => {
    scene.text('Once he recovers a bit, you grin at Vitek while you gently rub his cock: "Babe, do you think you can go again? I\'d be up for more, if you are…"');
    scene.text('He smirks: "You\'re insatiable! Give me a minute and keep doing what you\'re doing, that feels nice…"');
    scene.actions([
      { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
      { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
      { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
      { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
      { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
      { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
      { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
      { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    ]);
  } },
    { label: 'Relax for a while', handler: (st: GameState) => {
    (st as any).dikos = 0;
  }, goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCumface7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cumf70.mp4');
  qspCall(s, 'sweat', 'add', 10);
  scene.text('While he licks your snatch, you suddenly feel his cock swell and you\'re surprised when you taste his bitter sperm on your tongue. You move your head back, and Vitek shoots the rest of his load onto your face while you jerk him off impulsively, wanting to please your boyfriend.');
  scene.text('He apologizes: "Sorry, kitten… I couldn\'t hold it in any longer, your sweet pussy is just too intoxicating!"');
  scene.text('"That\'s okay, babe," you say, smiling at the compliment while your face is covered in his cum.');
  qspCall(s, 'arousal', 'hj', 5, 'dom');
  qspCall(s, 'cum_call', 'face', 'A9', 1, '', '', 30);
  qspCall(s, 'cum_call', 'mouth', 'A9', 1, '', '', 10);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCumface6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cumf60.mp4');
  qspCall(s, 'sweat', 'add', 10);
  // TODO-QSP: dynamic text: You feel his member throb down your throat, and you hold still to let him enjoy ...
  scene.text(`You feel his member throb down your throat, and you hold still to let him enjoy his orgasm the way he pleases. You swallow most of his sperm, but don't catch all of it. With your ${((s as any).pcs_eyecolor ?? '')} eyes fixated onto his, you let it leak out of your mouth and eventually suck his cock clean when you feel he's finished.`);
  // TODO-QSP: dynamic text: He laughs at your lewd display and says: "You''re such an insatiable slut, <<$pc...
  scene.text(`He laughs at your lewd display and says: "You're such an insatiable slut, ${((s as any).pcs_nickname ?? '')}. That was exactly what I needed today."`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'cum_call', 'mouth_swallow', 'A9', 1);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCumface5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cumf50.mp4');
  scene.text('A powerful jet of sperm hits you in the chin when he orgasms, and several more land on your face. When you open your eyes again, you\'re just in time to see that he was deliberately aiming for your face, and grin at his apologetic look. Some of his cum ended between your boobs as well.');
  scene.text('He smiles at you happily and says admiringly: "I love your boobs, kitten. I think they might very well be the best set of tits in the whole wide world."');
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'cum_call', 'face', 'A9', 1, '', '', 20);
  qspCall(s, 'cum_call', 'breasts', 'A9', 1, '', '', 20);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCumface4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cumf40.mp4');
  scene.text('When Vitek is close to orgasming, you point his cock at your boobs and keep jerking him off until his sperm is all over them. When you\'re certain he has nothing left, you let go of him and give him a lewd smile while you rub his cum out all over them.');
  // TODO-QSP: dynamic text: Vitek flashes you a grin and jokes: "Hey <<$pcs_nickname>>… do you think it''s t...
  scene.text(`Vitek flashes you a grin and jokes: "Hey ${((s as any).pcs_nickname ?? '')}… do you think it's true that boobs can grow by doing that a lot? I'd love for you to be my busty beauty…"`);
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'arousal', 'hj', 5);
  qspCall(s, 'cum_call', 'breasts', 'A9', 1);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCumface3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cumf30.mp4');
  scene.text('You smirk at him and softly say while you\'re edging him: "Stop resisting, babe… you know you love it when I touch your cock, no matter how. Go ahead, cum for me." Just as you say that, you stop stimulating him and put your fingers around the base of his shaft.');
  scene.text('Not two seconds later, thick ropes of his cum fly through the air while he groans, and you smile at him proudly.');
  qspCall(s, 'arousal', 'hj', 5, 'dom');
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCumface2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cumf20.mp4');
  scene.text('You know he\'s about to blow, and rub his cock against your tongue while you gently jerk him off. When you feel him shooting his load into your mouth, you do your best to gather all of it on your tongue and show it off to him.');
  qspCall(s, 'arousal', 'hj', 5, 'dom');
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'mouth', 'A9', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Swallow it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_' + (Math.floor(Math.random() * 2) + 13) + '.mp4');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'mouth_swallow', 'A9', 1);
    scene.text('You\'ve actually grown to like the taste, and swallow every drop with great pleasure. When you\'re finished, you smile at him happily.');
    scene.text('He grins at you proudly: "I love that my kitten is such a slut for cum… don\'t forget to wash your mouth babe, I do want to kiss you later."');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } },
    { label: 'Spit it out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_16.mp4');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text('You wince when you notice the taste of his cum, it\'s so bitter! You feel slightly bad about it with your boyfriend watching you, but there\'s no way you can swallow it. You don\'t want to make a mess so you spit it out onto your boobs, slowly letting it trickle down for a while before you rub it out with your hands.');
    scene.text('Vitek looks slightly disappointed, but is not insulted. He says: "You don\'t like the taste of my sperm, kitten? I thought all chicks loved sperm… I\'m sorry mine doesn\'t taste good."');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumface1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cumf10.mp4');
  // TODO-QSP: dynamic text: You open your mouth widely for him and look up to him with your <<$pcs_eyecolor>...
  scene.text(`You open your mouth widely for him and look up to him with your ${((s as any).pcs_eyecolor ?? '')} eyes, inviting him to shoot as much sperm in your mouth as he can. He tries, but when he shoots his load, very little of it ends up in your mouth.`);
  // TODO-QSP: dynamic text: "You''re such a cute little slut with my cum on your face, <<$pcs_nickname>>… I ...
  scene.text(`"You're such a cute little slut with my cum on your face, ${((s as any).pcs_nickname ?? '')}… I love it!" he grins at you, while he helps you up from your kneeled position. You give him a cute smile while pretending you want to kiss him, and he laughs while he tries to keep you away from his face.`);
  qspCall(s, 'arousal', 'hj', 5, 'dom');
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'mouth', 'A9', 1, '', '', 5);
  qspCall(s, 'cum_call', 'face', 'A9', 1, '', '', 35);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCum11(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  if (((s as any).protect ?? 0) === 1) {
    scene.img('images/shared/sex/cum/cum61.jpg');
    scene.text('Suddenly Vitek\'s thrusts become shorter and more intense, and from his groaning you realize he must be shooting his load. Because he\'s wearing a condom, you don\'t feel any of it.');
    scene.text('He puts you back on the ground, and supports your weight when you warn him you\'re still a bit weak in the knees from the fucking he just gave you.');
    qspCall(s, 'cum_call', '', '', 'A9', 1, 3);
    if (((s as any).sexcontra ?? 0) === 4) {
      scene.text('He pulls out of you. The condom is broken.');
      scene.text('Your guy completely relaxed, threw where-the condom and lay down contentedly on the bed.');
    } else {
      if (((s as any).sexcontra ?? 0) === 5) {
        scene.text('He pulls out of you, the condom is missing.');
      } else {
        scene.text('After a while you give him a kiss and take the filled condom off his penis, and secretly admire the size of his load for a second before getting rid of the condom. You lie back down on the bed together with Vitek and give him a soft kiss on the cheek, happy to just relax and cuddle with him for a moment.');
      }
    }
    (s as any).protect = 0;
    (s as any).sexcontra = 0;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } else {
    if (((s as any).protect ?? 0) !== 1) {
      scene.img('images/shared/sex/cum/cum111.jpg');
      scene.text('Suddenly Vitek\'s thrusts become shorter and more intense and while he hammers his cock into you, hot jets of his sperm are being squirted deep inside your body.');
      scene.text('He puts you back on the ground, and supports your weight when you warn him you\'re still a bit weak in the knees from the fucking he just gave you. You give him a kiss and idly run your finger over your pussy lips, enjoying the slippery feeling. After a moment you say you\'re okay, and he kisses you again on the forehead before crashing down on his bed to relax for a while.');
      qspCall(s, 'cum_call', '', '', 'A9', 1);
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCum10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cum110.mp4');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  scene.text('Vitek pulls his cock out of you just before he reaches his orgasm, and you immediately close your fingers around his slick shaft and jerk him to completion. Several jets of his hot sperm land on your belly and your tits, slowly flowing downwards while you and him both admire your artwork for a second.');
  scene.text('You exhausted him for now and he\'s just lying relaxed and contently on his back, offering you a weak smile.');
  qspCall(s, 'cum_call', 'stomach', 'A9', 1, '', '', 25);
  qspCall(s, 'cum_call', 'breasts', 'A9', 1, '', '', 15);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
  ]);
  scene.build();
}

function enterCum9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  if (((s as any).protect ?? 0) === 1) {
    scene.img('images/shared/sex/cum/cum91.jpg');
    qspCall(s, 'cum_call', '', '', 'A9', 1, 3);
    scene.text('Vitek begins to groan, and after a few more powerful thrusts he holds still, gasping and holding onto your hips tightly. You realize he must be shooting his load. Because he\'s wearing a condom, you don\'t feel any of it.');
    if (((s as any).sexcontra ?? 0) === 4) {
      scene.text('He pulls out of you. The condom is broken.');
      scene.text('Your guy completely relaxed, threw where-the condom and lay down contentedly on the bed.');
    } else {
      if (((s as any).sexcontra ?? 0) === 5) {
        scene.text('He pulls out of you, the condom is missing.');
      } else {
        scene.text('Eventually he gets up and removes the filled condom from his dick, putting it between your ass cheeks for you to dispose of. Vitek whispers in your ear: "Soon you\'re going to have loads like that inside of you every day, kitten…"');
        scene.text('You feel a shiver run down your spine as you blush, and secretly admire the size of his load for a second before getting rid of the condom. You lie back down on the bed next to Vitek and give him a soft kiss on the cheek, happy to just relax and cuddle with him for a moment.');
      }
    }
    (s as any).protect = 0;
    (s as any).sexcontra = 0;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } else {
    if (((s as any).protect ?? 0) !== 1) {
      scene.img('images/shared/sex/cum/cum111.jpg');
      scene.text('Suddenly Vitek\'s thrusts become shorter and more intense and while he hammers his cock into you, hot jets of his sperm are being squirted inside your body.');
      qspCall(s, 'cum_call', '', '', 'A9', 1);
      scene.text('Eventually he pulls out, and watches his cum slowly dribble out of your pussy with a satisfied grin.');
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCum8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  if (((s as any).protect ?? 0) === 1) {
    scene.img('images/shared/sex/cum/cum81.jpg');
    scene.text('Suddenly Vitek\'s thrusts become short and intense, and from his groaning you realize he must be shooting his load. Because he\'s wearing a condom, you don\'t feel any of it.');
    qspCall(s, 'cum_call', '', '', 'A9', 1, 3);
    if (((s as any).sexcontra ?? 0) === 4) {
      scene.text('He pulls out of you. The condom is broken.');
      scene.text('Your guy completely relaxed, threw where-the condom and lay down contentedly on the bed.');
    } else {
      if (((s as any).sexcontra ?? 0) === 5) {
        scene.text('He pulls out of you, the condom is missing.');
      } else {
        scene.text('Eventually you get up and remove the filled condom from his dick, and secretly admire the size of his load for a second before getting rid of it. You lie back down on the bed next to Vitek and give him a soft kiss on the cheek, happy to just relax and cuddle with him for a moment.');
      }
    }
    (s as any).protect = 0;
    (s as any).sexcontra = 0;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } else {
    if (((s as any).protect ?? 0) !== 1) {
      scene.img('images/shared/sex/cum/cum8.mp4');
      scene.text('Suddenly Vitek\'s thrusts become shorter and more intense, and while he groans you feel hot jets of his sperm being squirted into your body. His cock remains erect for a while longer and you happily keep riding him while you can, not wanting to give up on this great feeling just yet.');
      scene.text('Eventually you get up, and give him a kiss on the cheek while he just relaxes on the bed in an euphoric haze.');
      qspCall(s, 'cum_call', '', '', 'A9', 1);
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCum7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  if (((s as any).protect ?? 0) === 1) {
    scene.img('images/shared/sex/cum/cum71.jpg');
    scene.text('Suddenly Vitek\'s thrusts become short and intense, and from his groaning you realize he must be shooting his load. Because he\'s wearing a condom, you don\'t feel any of it.');
    qspCall(s, 'cum_call', '', '', 'A9', 1, 3);
    if (((s as any).sexcontra ?? 0) === 4) {
      scene.text('He pulls out of you. The condom is broken.');
      scene.text('Your guy completely relaxed, threw where-the condom and lay down contentedly on the bed.');
    } else {
      if (((s as any).sexcontra ?? 0) === 5) {
        scene.text('He pulls out of you, the condom is missing.');
      } else {
        scene.text('Eventually he pulls out of you and gets rid of the filled condom, before crashing down on the bed and just lying there contently for a while.');
      }
    }
    (s as any).protect = 0;
    (s as any).sexcontra = 0;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } else {
    if (((s as any).protect ?? 0) !== 1) {
      scene.img('images/shared/sex/cum/cum7.mp4');
      scene.text('Suddenly Vitek\'s thrusts become shorter and more intense, and while he groans you feel hot jets of his sperm being squirted into your body. Eventually he pulls out, and watches his cum slowly dribble out of your pussy with a satisfied grin.');
      qspCall(s, 'cum_call', '', '', 'A9', 1);
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCum6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  if (((s as any).protect ?? 0) === 1) {
    scene.img('images/shared/sex/cum/cum61.jpg');
    scene.text('Suddenly Vitek\'s thrusts become shorter and more intense, and from his groaning you realize he must be shooting his load. Because he\'s wearing a condom, you don\'t feel any of it.');
    qspCall(s, 'cum_call', '', '', 'A9', 1, 3);
    if (((s as any).sexcontra ?? 0) === 4) {
      scene.text('He pulls out of you. The condom is broken.');
      scene.text('Your guy completely relaxed, threw where-the condom and lay down contentedly on the bed.');
    } else {
      if (((s as any).sexcontra ?? 0) === 5) {
        scene.text('He pulls out of you, the condom is missing.');
      } else {
        scene.text('Eventually he pulls out of you and gets rid of the filled condom, before crashing down on the bed and just lying there contently for a while.');
      }
    }
    (s as any).protect = 0;
    (s as any).sexcontra = 0;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
    ]);
  } else {
    if (((s as any).protect ?? 0) !== 1) {
      scene.img('images/shared/sex/cum/cum6.jpg');
      scene.text('Suddenly Vitek\'s thrusts become shorter and more intense, and while he groans you feel hot jets of his sperm being squirted into your body. Eventually he pulls out, and watches his cum slowly dribble out of your pussy with a satisfied grin.');
      qspCall(s, 'cum_call', '', '', 'A9', 1);
      qspCall(s, 'cuminsidereact', '');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCum5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cum5.mp4');
  scene.text('Vitek pulls his cock out of you just before he reaches his orgasm, and you feel warm drops land on your back and ass cheeks.');
  scene.text('You exhausted him for now and he\'s just lying relaxed and contently on his back, offering you a weak smile.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'butt', 'A9', 1, '', '', 20);
  qspCall(s, 'cum_call', 'back', 'A9', 1, '', '', 20);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCum4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/cum4.jpg');
  scene.text('Vitek pulls his cock out of you just before he reaches his orgasm, and you feel warm drops land on your back and ass cheeks.');
  scene.text('You exhausted him for now and he\'s just lying relaxed and contently on his back, offering you a weak smile.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'butt', 'A9', 1, '', '', 20);
  qspCall(s, 'cum_call', 'back', 'A9', 1, '', '', 20);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax in his room', goto: ['kotovdom', 'after_sex'] },
  ]);
  scene.build();
}

function enterCum3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  scene.img('images/shared/sex/cum/cum3.mp4');
  scene.text('Vitek pulls his cock out of you just before he reaches his orgasm, and you feel warm drops land on your back and ass cheeks.');
  // TODO-QSP: dynamic text: He then helps you up from the bed and says with a satisfied smile on his face: "...
  scene.text(`He then helps you up from the bed and says with a satisfied smile on his face: "Hell, ${((s as any).pcs_nickname ?? '')}… you kept going and going in this position, you are insatiable!" before kissing you gently on the cheek.`);
  qspCall(s, 'cum_call', 'butt', 'A9', 1, '', '', 20);
  qspCall(s, 'cum_call', 'legs', 'A9', 1, '', '', 20);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
  ]);
  scene.build();
}

function enterCum2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  scene.img('images/shared/sex/cum/cum2.mp4');
  scene.text('Vitek pulls his cock out of you just before he reaches his orgasm, and shoots several thick ropes of cum over your stomach and boobs. You eagerly put your hands on it and milk him, and don\'t let go until you\'re certain he has no more spunk left.');
  scene.text('Vitek kisses you passionately and smiles blissfully at you: "Wow, kitten… that felt fantastic! We should do that more often!"');
  qspCall(s, 'cum_call', 'breasts', 'A9', 1, '', '', 20);
  qspCall(s, 'cum_call', 'stomach', 'A9', 1, '', '', 20);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
  ]);
  scene.build();
}

function enterCum1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  scene.img('images/shared/sex/cum/cum1.mp4');
  scene.text('"Oh, Vitek!" you groan, while you feel his hot cum spread inside your colon. When he pulls his cock out of you, some of his thick sperm slowly dribbles out of your used anus.');
  scene.text('Vitek kisses your forehead gently and smiles blissfully at you: "Wow, kitten… that was great! You\'re the best!"');
  qspCall(s, 'cum_call', 'anus', 'A9', 1);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go freshen up', goto: ['kotovdom', 'vann'] },
  ]);
  scene.build();
}

function enterBellAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/facedown/kotovsexanal20.mp4');
  qspCall(s, 'dinsex', 'boy_wants_anal');
  scene.text('You silently smile to yourself when you feel Vitek\'s finger rubbing against your tight sphincter; luckily you prepared for anal today!');
  scene.text('You hesitate for just a second when you realize what position you\'re in, you have no control whatsoever of how deep and fast he can go! Nevertheless, you trust him and you give him a confident wink while he guides his cock to your ass.');
  scene.text('Your tight ass is too much for Vitek to withstand any longer, he\'s going to cum!');
  qspCall(s, 'arousal', 'anal_finger', 10, 'sub');
  qspCall(s, 'arousal', 'anal', (-10), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Make him cum', handler: (st: GameState) => {
    // TODO-QSP: if rand(0, 1) = 1 : gt 'kotovSex', 'cum1' else gt 'kotovSex'...
  } },
  ]);
  scene.build();
}

function enterCowAnal1(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    scene.img('images/shared/sex/anal/cowgirl/kotovsexanal34.mp4');
  } else {
    scene.img('images/shared/sex/anal/cowgirl/kotovsexanal3' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
  }
  qspCall(s, 'dinsex', 'boy_wants_anal');
  scene.text('You silently smile to yourself when you feel Vitek\'s finger rubbing against your tight sphincter; luckily you prepared for anal today! You look over your shoulder and give hin a lewd wink, while he guides his cock to your ass.');
  scene.text('Your tight ass is too much for Vitek to withstand any longer, he\'s going to cum!');
  qspCall(s, 'arousal', 'anal_finger', 10, 'sub');
  qspCall(s, 'arousal', 'anal', (-10), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Make him cum', handler: (st: GameState) => {
    // TODO-QSP: if rand(0, 1) = 1 : gt 'kotovSex', 'cum1' else gt 'kotovSex'...
  } },
  ]);
  scene.build();
}

function enterDogAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/doggy/kotovsexanal1' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  qspCall(s, 'dinsex', 'boy_wants_anal');
  scene.text('You silently smile to yourself when Vitek makes you get on your hands and knees and rubs his finger against your tight sphincter; luckily you prepared for anal today!');
  scene.text('Your tight ass is too much for Vitek to withstand any longer, he\'s going to cum!');
  qspCall(s, 'arousal', 'anal_finger', 10, 'sub');
  qspCall(s, 'arousal', 'anal', (-10), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Make him cum', handler: (st: GameState) => {
    // TODO-QSP: if rand(0, 1) = 1 : gt 'kotovSex', 'cum1' else gt 'kotovSex'...
  } },
  ]);
  scene.build();
}

function enterMisionaryAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/mis/kotovsexanal' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  qspCall(s, 'dinsex', 'boy_wants_anal');
  scene.text('You silently smile to yourself when Vitek pushes you back against the bed and rubs his finger against your tight sphincter; luckily you prepared for anal today!');
  scene.text('When he doesn\'t notice any objections from you he slowly slips one finger in, and then a second and a third after lubing them up with some saliva.');
  scene.text('Your tight ass is too much for Vitek to withstand any longer, he\'s going to cum!');
  qspCall(s, 'arousal', 'anal_finger', 10, 'sub');
  qspCall(s, 'arousal', 'anal', (-10), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Make him cum', goto: ['kotovSex', 'cum1'] },
  ]);
  scene.build();
}

function enterAnalNo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).anal_no = 1;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/anal/kotovsexanalno.mp4');
  scene.text('You quickly stop him when he reaches for your anus: "Sorry babe, I did not prepare for that. Wouldn\'t want to make a mess, if you know what I mean."');
  scene.text('He looks disappointed for just a second, but rebounds quickly: "I understand. Make sure you\'re clean next time, okay? I want your ass, kitten." He then suggests you…');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enter69(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/69/kotovsex7' + (Math.floor(Math.random() * 3) + 0) + '.mp4');
  scene.text('While Vitek is laying on the bed, you straddle his face and grind your wet snatch against his mouth. Before he can object you close your fingers around his cock and guide it to your mouth, sucking him off passionately.');
  scene.text('Vitek licks your pussy skillfully, and you have to take a moment to catch your breath and recover before you continue to suck on his dick. For someone who pretends to not be into this, he\'s awfully good at it…');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).orgasm_or = 'custom';
    (s as any).orgasm_txt = 'You bite your lips to keep yourself from screaming while you have an orgasm, barely holding yourself back from grinding your pussy against his face like a wanton whore.';
  } else {
    scene.text('Even though it feels nice, you realize you won\'t get an orgasm out of this. After a few minutes you pull away from him, and kiss him on the lips before he can object. Mmm… you taste good.');
    (s as any).orgasm_or = 'no';
  }
  qspCall(s, 'arousal', 'cuni', 5, 'sub');
  qspCall(s, 'arousal', 'bj', (-5), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterHand2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/hug/kotovsex51.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('You support your weight by wrapping your arms around his neck and ride his cock with reckless abandon, feeling his cock bottoming out in your cunt with every thrust.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum11'] },
  ]);
  scene.build();
}

function enterHand1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/hug/kotovsex50.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('Vitek puts his strong hands on your legs while you wrap your arms around his neck, and he pulls you up effortlessly. It\'s as if you\'re as light as a feather to him… he\'s so strong! He enters you abruptly, and begins to fuck you with long firm strokes.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum11'] },
  ]);
  scene.build();
}

function enterBell3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/facedown/kotovsexbonus10.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('Vitek puts his hand on your neck, and stops moving when he notices you\'re lazily moving your ass in circles with his cock in you.');
  scene.text('He tightens his grip on your neck, and whispers: "Oh yeah, kitten. Fuck yourself with that cock. Wiggle that ass for me…"');
  scene.text('You blush for a moment, realizing you fully gave into your pleasure and forgot all about what was happening. Nevertheless, it\'s kind of a turn-on when he takes control like this! And it feels great…');
  scene.text('You obediently grind your ass against him, while he keeps telling you what a good little slut you are for him.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum9'] },
  ]);
  scene.build();
}

function enterBell2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/facedown/kotovsexbonus20.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('You want to kiss him as much as he wants to kiss you. You raise your head and close your eyes, and return his kiss passionately when you feel his lips against yours. All the while, Vitek continues to fuck you at a steady pace from behind, making you quiver with desire.');
  qspCall(s, 'arousal', 'kiss', 5, 'sub');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum9'] },
  ]);
  scene.build();
}

function enterBell1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/facedown/kotovsex4' + (Math.floor(Math.random() * 6) + 0) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('You smile and just lay down on your stomach, offering him the chance to fuck you how he likes. Vitek wastes no time getting on top of you and eagerly guides his cock to your wet snatch, while he puts one hand in your neck.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum9'] },
  ]);
  scene.build();
}

function enterSexCow5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/hug/kotovsex61.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('You kiss passionately, while you continue to buck your hips against his. He pulls you even tighter against him, and you can\'t help but feel safe and secure in his arms while you share an intimate moment together.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum8'] },
  ]);
  scene.build();
}

function enterSexCow4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/hug/kotovsex60.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('Almost immediately, Vitek sits up and puts his strong muscular arms around you, pulling you tightly against his chest. Meanwhile you put your slender arms around his neck, and try not to moan too loudly in his ear when he keeps driving his cock deep inside your cunt.');
  // TODO-QSP: dynamic text: He''s firmly in control of you in this position, and groans softly: "You''re suc...
  scene.text(`He's firmly in control of you in this position, and groans softly: "You're such a hot little bitch, ${((s as any).pcs_nickname ?? '')}. <i>My</i> hot little bitch."`);
  scene.text('Before you can respond he puts his mouth on your nipple, and you do your best to stifle a cry when he bites down on it softly.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.text('When he lets go of your boob for a second, you quickly put your hand on his chin and kiss him when he looks up.');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum8'] },
  ]);
  scene.build();
}

function enterSexCow3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/kotovsexbonus' + (Math.floor(Math.random() * 3) + 17) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('With your back turned to him, the way his dick enters your pussy feels different. Maybe even better? You mostly pretend to ignore him, just using his body for your pleasure while you keep sliding his stiff cock in your wet pussy.');
  scene.text('Vitek can\'t resist playing with your ass cheeks, and gently kneads them while he moans: "Damn, babe… your ass looks so fucking great…"');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum8'] },
  ]);
  scene.build();
}

function enterSexCow2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/kotovsexbonus' + (Math.floor(Math.random() * 3) + 14) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('Vitek can\'t believe his luck, you\'re so eager to please him! He stopped moving his hips completely, offering you the initiative.');
  scene.text('You fuck him like you have something to prove and bounce up and down on his cock rhythmically, grinding your hips against his every once in a while.');
  scene.text('When he begins to move his hips involuntarily, you lightly slap him on the chest and tell him: "No. It\'s all me now babe, just relax… let me make you feel good…"');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.text('You pause for a second and slowly turn your back to him, making sure his cock doesn\'t slip out while you do.');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum8'] },
  ]);
  scene.build();
}

function enterSexCow1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/kotovsex2' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('Vitek gets on his back, and offers you a helping hand while you sit down on his lap, guiding his cock inside your eager pussy.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum8'] },
  ]);
  scene.build();
}

function enterDog4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/sequence/kotovsexbonus' + (Math.floor(Math.random() * 3) + 11) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('You\'re not about to let him show you up! While you grind your ass back against his hips you say: "Hold still babe, I\'m going to fuck myself with your cock."');
  // TODO-QSP: dynamic text: He reluctantly stops, looking at you questioningly. When he sees what you means,...
  scene.text(`He reluctantly stops, looking at you questioningly. When he sees what you means, he grins and encourages you: "You're like a little bitch in heat, ${((s as any).pcs_nickname ?? '')}! I love it… keep going! Come on, harder!"`);
  qspCall(s, 'arousal', 'vaginal', 5, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum7'] },
  ]);
  scene.build();
}

function enterDog3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/doggy/kotovsexbonus' + (Math.floor(Math.random() * 3) + 7) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('You lazily lean down against the mattress, happy to let him do the work while you focus on the pleasure he is giving you. With a blissful smile you rest your face on his soft sheets, while Vitek continues to pound you from behind.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum7'] },
  ]);
  scene.build();
}

function enterDog2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/sequence/kotovsexbonus' + (Math.floor(Math.random() * 2) + 21) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('Vitek puts his powerful arms around you and helps you get up, his cock never leaving your pussy. When you\'re standing up straight, he holds you tightly and redoubles his efforts. The sounds of him violently slamming his hard cock into your hole over and over and your loud moaning fill the room, and you feel like a ragdoll in his hands when he treats you like this. And to be honest… you love every second of it!');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum7'] },
  ]);
  scene.build();
}

function enterDog1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/doggy/kotovsex1' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('Vitek picks you up and throws you down onto the bed, making you land on your hands and knees in front of him. With a devious smile you arch your back and stick out your ass as much as you can while you look over your shoulder, asking in a seductive voice: "See anything you like, babe?"');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Masturbate him', goto: ['kotovSex', 'bj6'] },
    { label: 'Lick his balls', goto: ['kotovSex', 'bj7'] },
    { label: 'Lick his anus', goto: ['kotovSex', 'bj8'] },
    { label: 'Deepthroat him', goto: ['kotovSex', 'bj9'] },
    { label: 'Relax your throat and let him fuck it', goto: ['kotovSex', 'bj10'] },
    { label: 'Only suck on the head of his dick', goto: ['kotovSex', 'bj11'] },
    { label: 'Suck without using your hands', goto: ['kotovSex', 'bj12'] },
    { label: 'Rub his cock against your nipple', goto: ['kotovSex', 'bj13'] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum7'] },
  ]);
  scene.build();
}

function enterMisionary4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/kotovsexbonus' + (Math.floor(Math.random() * 2) + 5) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('When you put your lips on his and kiss him passionately, Vitek slows down a bit and kisses you back. After your kiss, his warm breath on your neck makes you shiver with delight.');
  scene.text('For the next few minutes he keeps kissing you passionately while he fucks you slowly, making it a very intimate session. He can be so tender sometimes, when you least expect it…');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum6'] },
  ]);
  scene.build();
}

function enterMisionary3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'agil', 1);
  scene.img('images/shared/sex/vag/miss/kotovsexbonus4.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('He reluctantly does as you say, not really wanting to pause. However, when he sees you put your legs behind your head his jaw drops.');
  scene.text('"Wow, babe… I can\'t believe you can do that, that looks so hot!" he mutters, staring blankly at your body for a second.');
  scene.text('You give him a cute smile, reveling in his admiring gaze. Then you snap him out of it and encourage him: "Don\'t just look at it, silly… get back to making me feel good!"');
  scene.text('He nods and slips his cock back inside your snatch. It feels so intense this way! You moan softly as he begins to fuck you carefully, but gradually increases the length and power of his thrusts when he notices you can take it just fine.');
  qspCall(s, 'arousal', 'vaginal', 5, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum6'] },
  ]);
  scene.build();
}

function enterMisionary2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/kotovsexbonus' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('With your legs pulled up even further, you give Vitek an incredible view of your pussy. Your pussy lips are slightly parted in this position, and you give him an inviting smile without saying a word.');
  scene.text('The sight of your exposed pussy greatly arouses him, and Vitek eagerly climbs on top of you and fucks you roughly in this position. Just the way you like it.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum6'] },
  ]);
  scene.build();
}

function enterKuni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if ((!((s as any).kotov_kuni ?? 0))) {
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A9'] <= 75) {
      // TODO-QSP: dynamic text: Vitek flat out refuses to lick your pussy: "Don''t be ridiculous, <<$pcs_nicknam...
      scene.text(`Vitek flat out refuses to lick your pussy: "Don't be ridiculous, ${((s as any).pcs_nickname ?? '')}. I'm a man, not some kid! Come on, spread your legs and let's fuck."`);
      scene.actions([
        { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
      ]);
    } else {
      scene.text('He\'s not very enthusiastic about it, but reluctantly agrees: "Well… okay babe, but only because it\'s you. But don\'t tell any of my friends that I did this! I\'d never hear the end of it…"');
      scene.actions([
        { label: 'Spread your legs and present your pussy', handler: (st: GameState) => {
    (st as any).kotov_kuni = 1;
    scene.img('images/shared/sex/kuni/kotovsex3' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
    scene.text('You secretly smile to yourself when he agrees, you must mean a lot to him. Being the cocky alpha male that he is, he\'d never agree to do this if he didn\'t really care for you. He moves his head between your legs and begins to work your pussy with his tongue, without a whole lot of enthusiasm but a surprising amount of skill.');
    qspCall(st, 'arousal', 'cuni', 5, 'dom');
    if (((st as any).pcs_horny ?? 0) >= 90) {
      qspCall(st, 'mood', 'raise', 'small');
      (st as any).orgasm_or = 'custom';
      (st as any).orgasm_txt = 'Wow, he\'s good! You bite your lips to keep yourself from screaming while you have an orgasm, barely holding yourself back from grinding your pussy against his face like a wanton whore.';
    } else {
      scene.text('Even though it feels nice, you realize you won\'t get an orgasm out of this. After a few minutes you pull away from him, and kiss him on the lips before he can object. Mmm… you taste good.');
      (st as any).orgasm_or = 'no';
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
      { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
      { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
      { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
      { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
      { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
      { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
      { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
      { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
      { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
      { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
      { label: 'Make him cum', goto: ['kotovSex', 'cum10'] },
    ]);
  } },
      ]);
    }
  } else {
    scene.img('images/shared/sex/kuni/kotovsex3' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
    scene.text('Vitek smiles and gets between your legs without protest, spreading them slightly further with his hands. He does his best to make you feel good, enthusiastically rubbing his tongue over and between your wet pussy lips.');
    if (((s as any).pcs_horny ?? 0) >= 90) {
      qspCall(s, 'mood', 'raise', 'small');
      (s as any).orgasm_or = 'custom';
      (s as any).orgasm_txt = 'Wow, he\'s good! You bite your lips to keep yourself from screaming while you have an orgasm, barely holding yourself back from grinding your pussy against his face like a wanton whore.';
    } else {
      scene.text('Even though it feels nice, you realize you won\'t get an orgasm out of this. After a few minutes you pull away from him, and kiss him on the lips before he can object. Mmm… you taste good.');
      (s as any).orgasm_or = 'no';
    }
    qspCall(s, 'arousal', 'cuni', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
      { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
      { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
      { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
      { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
      { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
      { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
      { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
      { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
      { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
      { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
      { label: 'Make him cum', goto: ['kotovSex', 'cum10'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMisionary1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/kotovsex' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
  if ((!((s as any).protect ?? 0))) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  scene.text('Vitek pushes you down on your back eagerly, and you automatically spread your legs for him.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum6'] },
  ]);
  scene.build();
}

function enterTitjob(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj14' + (Math.floor(Math.random() * 3) + 0) + '.mp4');
  scene.text('You give him a devious smile and ask him: "Honey… you like my boobs, don\'t you?"');
  scene.text('He nods eagerly: "You know I do, babe… they\'re amazing!"');
  scene.text('"Why don\'t you show me?" you challenge him.');
  // TODO-QSP: dynamic text: Vitek knows exactly what you''re getting at, and rests his penis between your <<...
  scene.text(`Vitek knows exactly what you're getting at, and rests his penis between your ${((s as any).titsize ?? '')} breasts. You squeeze your breasts together for him and spit on his cock for lubrication, as he slowly begins to move his hips.`);
  scene.text('After a while he pushes your hands away and takes over, pushing your tits tighter around his cock while he fucks them harder.');
  scene.text('You moan softly, this feels even better than you thought it would…');
  qspCall(s, 'arousal', 'titjob', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cum10'] },
  ]);
  scene.build();
}

function enterBj13(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj13' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  scene.text('You firmly grasp his member, and rub the head of his cock against your nipple while you talk dirty to him. Your nipple hardens at the touch of his erection, and you get even more turned on when the precum he\'s leaking makes everything even slicker.');
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj12(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj12' + (Math.floor(Math.random() * 3) + 0) + '.mp4');
  scene.text('He looks down at you happily, and suggests: "How about you blow me, babe? But to make it more challenging, without using your hands…"');
  scene.text('A challenge? You\'re not one to back down from a challenge! You close your lips around his cock while you theatrically show that your hands are nowhere near it, and slowly begin to bob your head up and down. His cock is pretty big, and you don\'t feel confident you can take it down much more than half-way.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj11(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj11' + (Math.floor(Math.random() * 5) + 0) + '.mp4');
  scene.text('You grab the base of his penis and guide it to your mouth, beginning to suck on it greedily.');
  scene.text('His cock is fairly large, and you\'re not sure you want to shove it all the way into that little mouth of yours right now. Instead, you suck on the head of his cock and look at him seductively while your slender fingers work his shaft.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj10' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
  scene.text('Even though he\'s more gentle with you than you thought he would be before hooking up with him, you know he likes to assert his dominance over girls from time to time.');
  scene.text('When he tells you he\'s going to fuck your throat next, you meekly nod and fully relax your throat while he begins to work his cock further into your mouth.');
  scene.text('You nearly choke and have to do your best to suppress your gag reflex while he slowly fucks your throat. Nevertheless, the proud grin on his face makes it all worth it. It\'s not something you would do all the time, but maybe you secretly enjoy surrendering yourself to him like this every once in a while?');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj9' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  scene.text('You tell him to keep his hands to himself, and slowly wrap your lips around his cock before taking more and more of his length in your mouth.');
  scene.text('Eventually the head of his cock is around where your throat begins, and you stimulate it teasingly by swallowing, squeezing your throat tightly against the head every time.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj8(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj8' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  scene.text('You work your way down and gently lick the underside of his testicles, before you slip your tongue over his anus. At first he assumes it\'s a mistake, but he looks a bit panicked when you keep teasing it rhythmically with the tip of your tongue.');
  // TODO-QSP: dynamic text: He groans: "Oh shit, <<$pcs_nickname>>! What are you doing!?"
  scene.text(`He groans: "Oh shit, ${((s as any).pcs_nickname ?? '')}! What are you doing!?"`);
  scene.text('When you look into his eyes and just keep licking it with the tip of your tongue, a soft moan escapes his lips. After a few seconds he admits: "That… that feels great! Just don\'t tell the boys, okay?"');
  qspCall(s, 'arousal', 'cuni_give', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj7(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj7' + (Math.floor(Math.random() * 5) + 0) + '.mp4');
  scene.text('You slowly work your way down, and caress his balls with your tongue. His groaning makes you feel like he\'s enjoying it, and encourages you to lick them more vigorously.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj6(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj6' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  scene.text('You take his dick in your hand, and begin to stroke him off while you look at him confidently. You know this isn\'t what he wants, but it\'s fun to get a rise out of him!');
  // TODO-QSP: dynamic text: It doesn''t take long for him to say: "<<$pcs_nickname>>… it doesn''t feel bad, ...
  scene.text(`It doesn't take long for him to say: "${((s as any).pcs_nickname ?? '')}… it doesn't feel bad, but I can just jerk myself off whenever I want. Why aren't you putting your lady parts to use?"`);
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj5(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj5' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
  scene.text('You don\'t take his cock in your mouth just yet. Instead you lick its entire length in long, firm strokes, enjoying the warm rigid feeling against your tongue, and the slightly salty taste of his precum whenever you reach the head. Slowly but surely, you\'re coating his entire dick with your saliva.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj4(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj4' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  scene.text('It feels so nice in your hand. You rub the shaft, admiring the way his foreskin pops over the head of his cock and back when you masturbate him slowly. The head of his cock becomes more and more slippery with precum.');
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj3(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  scene.img('images/shared/sex/blowjob/kotovbj3' + (Math.floor(Math.random() * 2) + 0) + '.mp4');
  // TODO-QSP: dynamic text: You wrap your delicate fingers around the shaft of his cock, guiding it to your ...
  scene.text(`You wrap your delicate fingers around the shaft of his cock, guiding it to your mouth. Ignoring his pleas, you don't take it in your mouth and just put your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips lips against it, kissing it over and over.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj2(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
    (s as any).textsexkotov = 'close your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips lips around the head of his cock and suck him off eagerly, making sure you rub the barbell piercing in your tongue against his dick as often as you can';
  } else {
    (s as any).textsexkotov = 'close your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips lips around the head of his cock and suck him off eagerly';
  }
  scene.img('images/shared/sex/blowjob/kotovbj2' + (Math.floor(Math.random() * 7) + 0) + '.mp4');
  // TODO-QSP: dynamic text: You <<$textsexkotov>>. You clench your <<$pc_desc[''lips'']>> lips lips around h...
  scene.text(`You ${((s as any).textsexkotov ?? '')}. You clench your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips lips around his cock tightly, and try to give him the best blowjob you've ever given.`);
  scene.text('The tenderness of your lips is driving Vitek crazy, and he can do little more than moan uncontrollably while you keep sucking.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterBj1(s: GameState, scene: SceneBuilder): void {
  (s as any).kotov_bj_times = ((s as any).kotov_bj_times ?? 0) + (1);
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
    (s as any).textsexkotov = 'lick the head of his dick with your tongue. Since he\'s so infatuated with your tongue piercing, you make an extra effort in making sure he feels the barbell rubbing against his cock';
  } else {
    (s as any).textsexkotov = 'lick the head of his cock with your tongue';
  }
  scene.img('images/shared/sex/blowjob/kotovbj1' + (Math.floor(Math.random() * 4) + 0) + '.mp4');
  // TODO-QSP: dynamic text: You gently <<$textsexkotov>>.
  scene.text(`You gently ${((s as any).textsexkotov ?? '')}.`);
  scene.text('When you flick your tongue against the opening of his urethra, his body spasms a little. You found a sensitive spot, that should be fun!');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterSub(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/dom/kotovsub.jpg');
  scene.text('You quiver slightly while you stand before him. All you want to do is please him, you\'d do whatever he wants. Just the thought of his strong body taking control over you makes you feel hornier than ever.');
  scene.text('Vitek recognizes the look in your eyes, and smirks. He lightly runs his fingers over your lips, and you obediently open your mouth while he ponders: "Hmm… what shall we do with you today…"');
  scene.text('Then he tells you to…');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'blowjob', goto: ['kotovSex', 'bj' + (Math.floor(Math.random() * 13) + 1) + ''] },
    { label: 'Use your tits to please him', goto: ['kotovSex', 'titjob'] },
    { label: 'Missionary', goto: ['kotovSex', 'misionary' + 0 + ''] },
    { label: 'Ride him', goto: ['kotovSex', 'sex_cow' + 0 + ''] },
    { label: 'Get on your hands and knees', goto: ['kotovSex', 'dog' + 0 + ''] },
    { label: 'Lie down on your stomach', goto: ['kotovSex', 'bell' + 0 + ''] },
    { label: 'Lie down on your stomach anal', goto: ['kotovSex', 'bell_anal'] },
    { label: 'Get on your hands and knees anal', goto: ['kotovSex', 'dog_anal'] },
    { label: 'Ride him anal', goto: ['kotovSex', 'cow_anal1'] },
    { label: 'Missionary anal', goto: ['kotovSex', 'misionary_anal'] },
    { label: 'Ride him standing up', goto: ['kotovSex', 'hand' + 0 + ''] },
    { label: 'Make him cum', goto: ['kotovSex', 'cumface' + (Math.floor(Math.random() * 7) + 1) + ''] },
  ]);
  scene.build();
}

function enterFirstSex(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  (s as any).kotovVagSex = ((s as any).kotovVagSex ?? 0) + (1);
  scene.img('images/shared/sex/oface/kotovfirst.jpg');
  scene.text('He has a point… he has been very patient with you, and you want this as much as he does.');
  scene.text('You don\'t object as Vitek pushes you down onto your back and spreads your legs, slowly guiding his cock to your virgin pussy.');
  qspCall(s, 'arousal', 'vaginal', 30, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Recover', handler: (st: GameState) => {
    qspCall(st, 'shortgs', 'dress');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/oface/kotovfirst1.jpg');
    scene.text('Vitek smiles at you proudly and says: "You did great, kitten… congratulations, you\'re a woman now! How do you feel?"');
    scene.text('You groan at him and mutter: "Everything hurts down there! We are never doing this again!"');
    scene.text('He grins: "Heh, we\'ll see about that. Do you want to stay over, or is your mother looking for you already?"');
    scene.text('You sigh wistfully: "I\'d like to stay, but I really should go home."');
    scene.text('"Alright. Give me a second, I\'ll walk you home," he says, as he gets off the bed and puts on some pants.');
    scene.actions([
      { label: 'Let him walk you home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/sex/grab/ass_grab1.mp4');
    scene.text('You don\'t talk about much while he walks you home, but you\'re touched by the fact that he\'s holding your hand. He\'s usually not this sensitive… taking your virginity must\'ve meant a lot to him too.');
    scene.text('When you arrive at your apartment door, Vitek kisses you goodbye. It\'s a long and deep kiss, and his hands are groping your ass the whole time.');
    // TODO-QSP: dynamic text: With a grin on his face he says: "See you soon, <<$pcs_nickname>>."
    scene.text(`With a grin on his face he says: "See you soon, ${((st as any).pcs_nickname ?? '')}."`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Thank him for walking you home and leave', goto: ['pod_ezd', 'etaj_2'] },
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
    case 'bj':
      enterBj(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'cumface7':
      enterCumface7(s, scene);
      break;
    case 'cumface6':
      enterCumface6(s, scene);
      break;
    case 'cumface5':
      enterCumface5(s, scene);
      break;
    case 'cumface4':
      enterCumface4(s, scene);
      break;
    case 'cumface3':
      enterCumface3(s, scene);
      break;
    case 'cumface2':
      enterCumface2(s, scene);
      break;
    case 'cumface1':
      enterCumface1(s, scene);
      break;
    case 'cum11':
      enterCum11(s, scene);
      break;
    case 'cum10':
      enterCum10(s, scene);
      break;
    case 'cum9':
      enterCum9(s, scene);
      break;
    case 'cum8':
      enterCum8(s, scene);
      break;
    case 'cum7':
      enterCum7(s, scene);
      break;
    case 'cum6':
      enterCum6(s, scene);
      break;
    case 'cum5':
      enterCum5(s, scene);
      break;
    case 'cum4':
      enterCum4(s, scene);
      break;
    case 'cum3':
      enterCum3(s, scene);
      break;
    case 'cum2':
      enterCum2(s, scene);
      break;
    case 'cum1':
      enterCum1(s, scene);
      break;
    case 'bell_anal':
      enterBellAnal(s, scene);
      break;
    case 'cow_anal1':
      enterCowAnal1(s, scene);
      break;
    case 'dog_anal':
      enterDogAnal(s, scene);
      break;
    case 'misionary_anal':
      enterMisionaryAnal(s, scene);
      break;
    case 'anal_no':
      enterAnalNo(s, scene);
      break;
    case '69':
      enter69(s, scene);
      break;
    case 'hand2':
      enterHand2(s, scene);
      break;
    case 'hand1':
      enterHand1(s, scene);
      break;
    case 'bell3':
      enterBell3(s, scene);
      break;
    case 'bell2':
      enterBell2(s, scene);
      break;
    case 'bell1':
      enterBell1(s, scene);
      break;
    case 'sex_cow5':
      enterSexCow5(s, scene);
      break;
    case 'sex_cow4':
      enterSexCow4(s, scene);
      break;
    case 'sex_cow3':
      enterSexCow3(s, scene);
      break;
    case 'sex_cow2':
      enterSexCow2(s, scene);
      break;
    case 'sex_cow1':
      enterSexCow1(s, scene);
      break;
    case 'dog4':
      enterDog4(s, scene);
      break;
    case 'dog3':
      enterDog3(s, scene);
      break;
    case 'dog2':
      enterDog2(s, scene);
      break;
    case 'dog1':
      enterDog1(s, scene);
      break;
    case 'misionary4':
      enterMisionary4(s, scene);
      break;
    case 'misionary3':
      enterMisionary3(s, scene);
      break;
    case 'misionary2':
      enterMisionary2(s, scene);
      break;
    case 'kuni':
      enterKuni(s, scene);
      break;
    case 'misionary1':
      enterMisionary1(s, scene);
      break;
    case 'titjob':
      enterTitjob(s, scene);
      break;
    case 'bj13':
      enterBj13(s, scene);
      break;
    case 'bj12':
      enterBj12(s, scene);
      break;
    case 'bj11':
      enterBj11(s, scene);
      break;
    case 'bj10':
      enterBj10(s, scene);
      break;
    case 'bj9':
      enterBj9(s, scene);
      break;
    case 'bj8':
      enterBj8(s, scene);
      break;
    case 'bj7':
      enterBj7(s, scene);
      break;
    case 'bj6':
      enterBj6(s, scene);
      break;
    case 'bj5':
      enterBj5(s, scene);
      break;
    case 'bj4':
      enterBj4(s, scene);
      break;
    case 'bj3':
      enterBj3(s, scene);
      break;
    case 'bj2':
      enterBj2(s, scene);
      break;
    case 'bj1':
      enterBj1(s, scene);
      break;
    case 'sub':
      enterSub(s, scene);
      break;
    case 'first_sex':
      enterFirstSex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kotovSex: LocationDef = {
  name: 'kotovSex',
  title: 'You give Vitek a light kiss on his lips, and whisper in his ',
  region: 'other',
  description: ['You give Vitek a light kiss on his lips, and whisper in his ear: "It\'s time my hero gets his reward…"'],
  enter: enter,
};
