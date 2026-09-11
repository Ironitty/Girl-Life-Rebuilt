import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'leave_break_events') {
    // TODO-QSP: act 'Continue': gt 'gschool_events', 'leave_break_events2'
  }
  scene.build();
}

function enterTeacherGreet(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big26.jpg');
  scene.text('You walk down the corridor, past countless classrooms. On the next corner, you see Mr. Tsarev.');
  if (((s as any).npc_rel ?? 0)?.['A26'] > 20  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
    scene.actions([
      { label: 'Seduce', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big26.jpg');
    scene.text('You decide to try a more direct route to earn some extra points with your teacher.');
    if (((s as any).pcs_inhib ?? 0) > 25) {
      scene.actions([
        { label: 'Drop some textbooks', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
      qspCall(s, 'arousal', 'flash', (-5));
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
      scene.img('images/locations/pavlovsk/school/building/bendover.jpg');
      qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
      scene.text('You drop some books and bend over to pick up them up, showing off your panty-clad ass.');
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you really should squat down instead of bending over like t...
      scene.text(`"${((s as any).pcs_firstname ?? 0)}, you really should squat down instead of bending over like that. One of the boys might take advantage!" he says with a smile.`);
    } else {
      qspCall(s, 'flash', 'butt', 'indoors', 1, 1);
      qspCall(s, 'arousal', 'flash', (-10));
      scene.img('images/locations/pavlovsk/school/building/bendoverbare.jpg');
      qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
      scene.text('You drop some books and bend over to pick up them up, showing off your naked ass.');
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you really should squat down instead of bending over like t...
      scene.text(`"${((s as any).pcs_firstname ?? 0)}, you really should squat down instead of bending over like that. One of the boys might take advantage!" he says with a smile.`);
    }
    if (((s as any).pcs_inhib ?? 0) > 35) {
      if (((s as any).pantyworntype ?? 0) === 'none') {
        scene.actions([
          { label: 'Show more', handler: (st: GameState) => {
    qspCall(s, 'flash', 'butt', 'indoors', 1, 1);
    qspCall(s, 'flash', 'pussy', 'indoors', 1, 1);
    qspCall(s, 'arousal', 'flash', (-15));
    scene.img('images/locations/pavlovsk/school/building/bendoverbare.jpg');
    scene.text('You don\'t pay attention to him and decide to have a little more fun. Reaching for the next book, you inadvertently pull your skirt up, giving him a full view of your pussy and ass.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>! Please cover up!" he says when he notices that you're n...
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}! Please cover up!" he says when he notices that you're not wearing any panties. He quickly runs up to you and pulls your skirt down, covering up your naked ass.`);
    scene.text('He gives you a lecture on how to properly pick up books from the floor before you both leave, not saying a word to each other.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Show more', handler: (st: GameState) => {
    qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
    qspCall(s, 'arousal', 'flash', (-10));
    scene.img('images/locations/pavlovsk/school/building/bendover.jpg');
    scene.text('You don\'t pay attention to him and decide to have a little more fun. Reaching for the next book, you inadvertently pull your skirt up, giving him a full view of your panty-clad ass.');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>! Please cover up!" he says before he rushes to you and p...
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}! Please cover up!" he says before he rushes to you and pulls your skirt down, covering your ass.`);
    scene.text('He gives you a lecture on how to properly pick up books from the floor before you both leave, not saying a word to each other.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Stand up and try to start a conversation', handler: (st: GameState) => {
    scene.text('"Well, I was lucky that it was you then. A grown and respectable man and not some kid. I don\'t really understand boys and therefore prefer to make friends and chat with more… <i>mature</i> people…" you reply.');
    // TODO-QSP: dynamic text: "Yes, <<$pcs_firstname>>, their behavior is often bad," he says. Before leaving,...
    scene.text(`"Yes, ${((s as any).pcs_firstname ?? 0)}, their behavior is often bad," he says. Before leaving, he gently runs his hand over your back.`);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (3);
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Lick lips', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/licklips.jpg');
    scene.text('You decide to tease him and, catching his eyes on you, you lick your lips.');
    scene.text('Seeing this, he smiles for a moment, but then pretends nothing happened and goes on his way.');
    qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
      { label: 'Stumble and fall towards him', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big26.jpg');
    if ((Math.floor(Math.random() * 5) + 0) > 0) {
      scene.text('You stumble and fall into your teacher\'s arms as he deftly catches you.');
      // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>! Are you okay? Did you hurt yourself?"
      scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}! Are you okay? Did you hurt yourself?"`);
      scene.text('Once he makes sure you\'re fine, he goes on about his business.');
    } else {
      scene.text('You stumble and fall in front of him. However, he lacks the agility to catch you. You bruise your knees from falling as he bends over to help you up.');
      scene.text('"Oh-Oh-Oh, my leg hurts! Oh please look! Is it alright?" you say and stretch out your leg in front of him. He inspects your leg, one hand at the ankle, the other stroking your thigh just above the bruise.');
      // TODO-QSP: dynamic text: "You need to be more careful, <<$pcs_firstname>>! You have very beautiful legs a...
      scene.text(`"You need to be more careful, ${((s as any).pcs_firstname ?? 0)}! You have very beautiful legs and it would be a shame if you badly injured them," he gently whispers to you "It doesn't look bad, but you should go to the infirmary so they can check it out."`);
      scene.text('He helps you back to your feet and goes about his business.');
      qspCall(s, 'npc_relationship', 'modify', 'A26', 2);
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Hello', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A26'] < 10) {
      if (((s as any).pcs_hotcat ?? 0) < 5) {
        scene.img('images/characters/shared/headshots_main/big26.jpg');
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.text('"Good morning, Mr. Tsarev!" you smile. "Have a nice day."');
          scene.text('He just nods his head in your direction and passes, not paying attention to you.');
        } else {
          scene.text('"Hello Mr. Tsarev!" you smile. "I\'m looking forward to your class!"');
          scene.text('"Hello Anna! You better hurry to class before you\'re late!" he replies. He doesn\'t even remember your name…');
        }
        qspCall(s, 'mood', 'lower', 'tiny');
      } else {
        scene.img('images/characters/shared/headshots_main/big26.jpg');
        scene.text('"Good morning, Mr. Tsarev!" you smile. "I look forward to your lesson!"');
        // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>. I also look forward to such a wonderful student like ...
        scene.text(`"Hello ${((s as any).pcs_firstname ?? 0)}. I also look forward to such a wonderful student like you being in my class," he replies while not looking you in the eye, but somewhere on the level of your hips.`);
        qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
      }
    } else {
      scene.img('images/characters/shared/headshots_main/big26.jpg');
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('"Good morning Mr. Tsarev!" you smile. "I hope you have a nice day. I\'m looking forward to your lesson."');
        // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>. I'm expecting your homework today. Are you prepared, ...
        scene.text(`"Hello ${((s as any).pcs_firstname ?? 0)}. I'm expecting your homework today. Are you prepared, or should I not ask you for it?" he asks in a friendly manner.`);
        scene.text('"I tried to do my homework, but something came up late last night. Can I give it to you tomorrow?" you plead, giving him your sweetest face.');
        scene.text('"Fine, but this is the last time!" he says, but he\'s said that more than once over the years.');
        scene.text('"Thank you, you\'re such a nice man! I need to find a nice man for myself," you reply while smiling at him.');
        scene.text('"Sorry, I\'m married," he replies and you both laugh.');
        qspCall(s, 'mood', 'raise', 'tiny');
      } else {
        scene.text('"What will the lesson be about today, Mr. Tsarev?" you ask. "The new subject? And maybe you can let us go early?" you ask.');
        scene.text('"Yes, today will be about the new subject. Unfortunately, I can\'t let you leave early. The new headmistress strictly monitors us," he replies.');
      }
      qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
    { label: 'Flirt', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/building/flirty.jpg');
    if (((s as any).npc_rel ?? 0)?.['A26'] < 10) {
      if (((s as any).pcs_hotcat ?? 0) < 5) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.text('"You\'re looking so handsome today, Mr. Tsarev!" you say, trying to attract his attention with a smile.');
          // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, you shouldn't be saying things like that," he replies, ...
          scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, you shouldn't be saying things like that," he replies, but still smiles back at you in response.`);
        } else {
          scene.text('You\'re about to greet him, but notice he\'s quite sour. You decide to cheer him up with a smile and wave at him.');
          scene.text('He quickly smiles back at you before he goes on about his business.');
        }
        qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
      } else {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          scene.text('"You\'re looking so handsome today, Mr. Tsarev!" you say, trying to attract his attention with a smile.');
          // TODO-QSP: dynamic text: "Thank you, Miss <<$pcs_lastname>>. I'd pay you a compliment, but we're not supp...
          scene.text(`"Thank you, Miss ${((s as any).pcs_lastname ?? 0)}. I'd pay you a compliment, but we're not supposed to have such informal relationships with students," he replies, but still smiles back.`);
          qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
        } else {
          scene.text('"Good morning Mr. Tsarev. I see you have a new suit, so chic," you say in a very erotic voice.');
          scene.text('Hearing your words, he awkwardly picks up his pace while heading towards the mens room. You hear him muttering incoherently - you think he was trying to say hello or respond to the compliment, but apparently was a little flustered.');
        }
      }
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('"You\'re looking a little glum today, Mr. Tsarev," you say, trying to attract his attention with a smile.');
        scene.text('"My wife had the night shift at work, so I had to eat at the cafe this morning," he replies and you laugh together.');
        scene.text('"Well, maybe I can cook for you sometime, to say thank you for what I\'ve learned in your class?" you answer in a serious voice.');
        scene.text('"We could arrange something like that. Yes, a tea party for the class! The girls can make cakes and the boys can prepare the classroom," he replies, clearly not understanding your hint.');
        scene.text('"That\'s not what I meant…" you mutter before you walk away.');
        qspCall(s, 'mood', 'lower', 'small');
        qspCall(s, 'npc_relationship', 'modify', 'A26', (-1));
      } else {
        scene.text('"Good morning, Mr. Tsarev! I see you have a new suit, so chic!" you say in a very erotic voice.');
        // TODO-QSP: dynamic text: "Thank you, <<$pcs_firstname>>. I bought it myself with my last paycheck," he re...
        scene.text(`"Thank you, ${((s as any).pcs_firstname ?? 0)}. I bought it myself with my last paycheck," he replies.`);
        qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
    { label: 'Silently pass by', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big26.jpg');
    if (((s as any).npc_rel ?? 0)?.['A26'] < 10) {
      if (((s as any).pcs_hotcat ?? 0) < 5) {
        scene.text('You hurry down the hallway. You\'re already late, so decide to just pass by. He wasn\'t even looking in your direction.');
      } else {
        // TODO-QSP: dynamic text: "Good morning, Miss <<$pcs_lastname>>. No time to say hello to your teacher?" he...
        scene.text(`"Good morning, Miss ${((s as any).pcs_lastname ?? 0)}. No time to say hello to your teacher?" he asks.`);
        scene.text('"Oh Mr. Tsarev! Good morning! Sorry, I didn\'t notice you. I was busy daydreaming," you reply and run away.');
      }
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
      ]);
    } else {
      scene.img('images/characters/shared/headshots_main/big26.jpg');
      // TODO-QSP: dynamic text: "Good morning, Miss <<$pcs_lastname>>. Why don't you say hello? A teacher can't ...
      scene.text(`"Good morning, Miss ${((s as any).pcs_lastname ?? 0)}. Why don't you say hello? A teacher can't punish or reward such actions. You've still got this year's exam and should behave more kindly," he jokes.`);
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big26.jpg');
    scene.text('"Oh Mr. Tsarev! I\'m sorry, I didn\'t see you. Of course, good day to you. I look forward to our lesson," you say smiling.');
    qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
        { label: 'Touch and apologize', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big26.jpg');
    scene.text('"Oh Mr. Tsarev! I\'m sorry, I didn\'t see you," you say happily, coming closer and, as if by accident, touching his arm.');
    scene.text('He\'s either oblivious or pretends not to notice it.');
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
      qspCall(s, 'npc_relationship', 'modify', 'A26', 1);
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
        { label: 'Ignore the comment', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big26.jpg');
    scene.text('You pretend not to hear his remark and go on about your business.');
    qspCall(s, 'npc_relationship', 'modify', 'A26', (-1));
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'morning'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBreakEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).break_rand ?? 0)[1] + (Math.floor(Math.random() * 6) + 5) < ((s as any).daystart ?? 0)  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 50) {
    ((s as any).break_rand ?? {})[1] = ((s as any).daystart ?? 0);
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: gt 'gossips', 'school', 'boys_slutrep'
    } else {
      // TODO-QSP: gt 'gossips', 'school', 'girls_slutrep'
    }
  }
  qspCall(s, 'gschool_events', 'leave_break_events');
  (s as any).break_rand = Math.floor(Math.random() * 72) + 1;
  if (((s as any).break_rand ?? 0) === 1  &&  ((s as any).pcs_hotcat ?? 0) > 5) {
    if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).pcs_inhib ?? 0) < 60) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    }
    scene.img('images/locations/pavlovsk/school/events/schoolhall_break.jpg');
    // TODO-QSP: 'As you walk through the hallways, a hand suddenly swoops in, giving you a hard swat on the ass.'+ii...
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      qspCall(s, 'willpower', 'exhib', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lift your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lift your skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (2);
    scene.img('images/locations/pavlovsk/school/events/skirtupfront.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'flash', 'panties', 'indoors', 1, 1);
      qspCall(s, 'arousal', 'flash', (-5));
    } else {
      qspCall(s, 'flash', 'butt', 'indoors', 1, 1);
      qspCall(s, 'arousal', 'flash', (-5));
    }
    scene.text('Not even breaking your stride, you call over your shoulder.');
    // TODO-QSP: '"You''ll have to spank me harder than that if you want to get up to my standards!" you say as you f...
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
        ]);
      }
    }
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      qspCall(s, 'gschool_events', 'rand_boy_arg', 0, 0, 0, 1, 0, 0);
    } else {
      qspCall(s, 'gschool_events', 'rand_boy_arg', 1, 1, 0, 0, 0, 0);
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Slap the boy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Slap the boy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).school_static_num ?? 0), (-5));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    // TODO-QSP: dynamic text: The moment the hand makes contact with your ass, you jump mid-stride and squeal ...
    scene.text(`The moment the hand makes contact with your ass, you jump mid-stride and squeal at the stinging pain. You whip around and glare furiously at ${((s as any).rand_boy ?? 0)}, who is standing right behind you with a shit eating grin on his face.`);
    scene.text('"What the fuck do you think you\'re doing, you fucking perv?!" you scream in his face before swinging your hand, your smack causing a resounding clap that is echoed by the "Ooooh!" of your classmates.');
    // TODO-QSP: 'Before giving him a chance to respond, you storm off in the direction you were originally headed'+i...
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
        ]);
      }
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tease the boy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tease the boy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (3);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/events/tease.jpg');
    // TODO-QSP: dynamic text: You turn to face <<$rand_boy>>, who is standing there with a huge grin on his fa...
    scene.text(`You turn to face ${((s as any).rand_boy ?? 0)}, who is standing there with a huge grin on his face. You step towards him and, with a sultry smile, move your lips up to his ear.`);
    scene.text('"If you wanted to cop a feel, all you had to do was ask…" you whisper as your hand gently slides up his thigh to caress his now rapidly stiffening member through his trousers. As the word "ask" leaves your lips, you give a gentle blow into his ear before quickly turning back and cheerfully continuing down the hallway before he can even respond, lifting your skirt slightly to show off your hip.');
    // TODO-QSP: 'Observant individuals might notice the slight skip in your step and '+iif(PCloSkirt > 0 and $pantyw...
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Ignore it', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (3);
    scene.img('images/locations/pavlovsk/school/events/ignore.jpg');
    scene.text('After a brief shock and a slight jump on the moment of impact, you decide that such an act does not even dignify a response from you and continue walking as if nothing happened, although your cheeks are visibly flushed.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    ]);
  } else {
    if (((s as any).break_rand ?? 0) === 2) {
      scene.img('images/locations/pavlovsk/school/events/irina_stumble.jpg');
      scene.text('As you walk through the hallway and head up the stairs, you see Irina in front of you talking to and flirting with Lazar. She misses one of the steps and suddenly stumbles forward, but manages to catch herself with her hands.');
      scene.text('Unfortunately, her books go tumbling down the stairs. Even worse, everyone behind and below her can see her panty-clad ass under her skirt. Several boys and even a few girls whistle or make rude remarks as she quickly stands up and blushes. Lazar helps her gather up her books as you walk past the two of them.');
      qspCall(s, 'arousal', 'erotic_nudity', 2);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'gschool_events', 'leave_break_events');
    } else {
      if (((s as any).break_rand ?? 0) <= 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200  &&  ((s as any).grupTipe ?? 0) !== 4) {
        scene.img('images/characters/shared/headshots_main/big9.jpg');
        if (((s as any).AlbinaQW ?? 0)?.['Friends'] >= 1  &&  ((s as any).SchoolGossip ?? 0) > 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
          ((s as any).AlbinaQW ?? {})['Protect'] = 1;
          (s as any).minut = ((s as any).minut ?? 0) + 60;
          // TODO-QSP: dynamic text: During the break, you're approached by Vitek and some other gopniks. "I know why...
          scene.text(`During the break, you're approached by Vitek and some other gopniks. "I know why you look so glum, ${((s as any).pcs_nickname ?? 0)}. You miss our cocks! Don't worry, you can come with us and we'll give you all the dick you want."`);
          scene.text('They tightly grab your arms and start dragging you to the restroom. Your futile attempts to resist are met with laughter and you\'re forcefully pulled along, hoping for some miracle to get you out of this nightmare. When you arrive at the restroom, Albina suddenly blocks the doorway. They try to shove her out the way, but she stands firm and doesn\'t budge, which annoys Vitek. "Get the fuck out of my way, rich bitch! Or do you want to join us? I know you\'d love having my dick in your ass, right between those big juicy cheeks of yours!" he says with a laugh and the others join in.');
          // TODO-QSP: dynamic text: Albina isn't amused. "Like I'd actually feel anything with your micro dick," she...
          scene.text(`Albina isn't amused. "Like I'd actually feel anything with your micro dick," she replies while holding up her pinky finger. "Now fuck off and leave ${((s as any).pcs_nickname ?? 0)} alone. If I see any of you pestering her again, then I'll kick your balls back up inside you. Got it?!"`);
          scene.text('Vitek stands fuming, his fists clenched in anger before he loudly scoffs and storms off. "Come on boys, these whores aren\'t worth it. Let\'s find a girl who actually knows what she\'s good for!"');
          scene.text('The other gopniks let you go and follow Vitek away. You give Albina a weak smile in gratitude and she gives you a pat on the shoulder before continuing on her way.');
          qspCall(s, 'gschool_events', 'leave_break_events');
        } else {
          // TODO-QSP: dynamic text: During the break, you're approached by some gopniks. "<<$pcs_firstname>>, I hear...
          scene.text(`During the break, you're approached by some gopniks. "${((s as any).pcs_firstname ?? 0)}, I hear you're an amazing cocksucker. I think you should show us. Come on, let's go to a restroom and you can show us your skills."`);
          scene.text('They put their hands around your arms and start guiding you to the restrooms. Knowing you can\'t take all of them on, you follow along meekly, hoping for some miracle to save you.');
          qspCall(s, 'willpower', 'bj', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Threaten to scream [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Threaten to scream [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'fame', 'pav', 'sex', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A9', (-5));
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (5);
    scene.text('"Let me go or I\'ll scream! Then you\'ll have to explain to the teachers what you were trying to do to me!" you say, causing Vitek to suddenly grab you by the throat and slam you up against the wall, squeezing until you can\'t breathe.');
    scene.text('"You threatening me, bitch? I should beat the shit out of you for that!" he growls as you struggle in his grip, but his friends notice everyone starting to stare and grab him by the arm.');
    scene.text('"Come on Vitek, we can deal with the bitch later! Let\'s go!" He jerks free from them, but does let you go and you collapse to the floor, gasping for air.');
    scene.text('"This isn\'t over, bitch!" He storms off just as one of the teachers takes notice that something was going on, but seeing that whatever it was is over, they lose interest. You get up slowly, rubbing your bruised throat and wondering if you just made a huge mistake.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
            ]);
          }
          scene.actions([
            { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    // TODO-QSP: dynamic text: Your heart is pounding as you let them guide you along. You know perfectly well ...
    scene.text(`Your heart is pounding as you let them guide you along. You know perfectly well that they won't let you go now, no matter what you say. When you arrive at the men's restroom, one of the gopniks stays by the door to keep watch while the others shove you in. The walls are covered in all sorts of crude text. A lot of it involves you. Across the entire wall, a large text reads "${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}".`);
    scene.text('Vitek quickly grabs you by your hair, snarling in your face. "You know why you\'re here, slut. Now get down and get to work."');
    scene.actions([
      { label: 'Suck Vitek\'s dick', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 50;
    ((s as any).npc_had_sex ?? {})['A9'] = 1;
    qspCall(s, 'cum_call', 'mouth_swallow', 'A9', 1);
    qspCall(s, 'arousal', 'bj', 10);
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/blowjob/toiletbj.jpg');
    // TODO-QSP: dynamic text: You obediently kneel before him, rubbing your hand over the bulge in Vitek's swe...
    scene.text(`You obediently kneel before him, rubbing your hand over the bulge in Vitek's sweatpants before pulling out his dick. Clasping your ${((s as any).pc_desc ?? 0)?.['lips']} lips around the head, you run your tongue around the head a few times before sucking it in a bit deeper. You don't want him to get angry at you, so you put some effort into it, sometimes licking his balls and taking his cock down your throat without really straining yourself. He mistakes your obedience for enthusiasm though and, laughing, turns to his friends and says "Just look at this whore going at it, she's loving it!"`);
    scene.text('A few minutes later, Vitek is about to cum. "Good job, cocksucker. I\'m going to drop my load in your mouth now and when I do, you\'re going to swallow it all and lick me clean. If you spill anything, you\'re licking it up from the floor. Got that?"');
    scene.text('You nod up at him and as soon as his cum hits your tongue, you diligently swallow his load, making sure not to let a single drop escape. When you\'re sure he\'s finished, you lick and suck his slowly softening dick clean before tucking it back into his pants for him.');
    // TODO-QSP: dynamic text: "That was great, <<$pcs_firstname>>. I see you've certainly earned your reputati...
    scene.text(`"That was great, ${((s as any).pcs_firstname ?? 0)}. I see you've certainly earned your reputation. We'll definitely be doing this more often, maybe next time I'll make sure the other boys can have a turn as well. We'll come find you when we want you. Understood?"`);
    scene.text('You\'re not looking forward to the prospect, but not knowing what else to do, you just nod. After the guys leave the bathroom you quickly have a drink, trying to wash the nasty taste of his cum out of your mouth.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    ]);
  } },
          ]);
        }
      } else {
        if (((s as any).break_rand ?? 0) === 6  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 250) {
          scene.img('images/locations/pavlovsk/school/lunch/blowme.jpg');
          // TODO-QSP: dynamic text: During the break, some guy you've never seen before approaches you. "Hi! <<$pcs_...
          scene.text(`During the break, some guy you've never seen before approaches you. "Hi! ${((s as any).pcs_nickname ?? 0)}, right? I hear you're the best in the school at giving blowjobs! Want to… Umm… Want to come with me and prove it?"`);
          if (((s as any).fame ?? 0)?.['pav_prostitute'] >= ((s as any).fame ?? 0)?.['pav_sex']) {
            qspCall(s, 'willpower', 'prostitution', 'resist');
            // TODO-QSP: dynamic text: "I'll give you <<$func('money', 'string_profit', 50)>>?" he offers.
            scene.text(`"I'll give you ${qspFunc(s, 'money', 'string_profit', 50)}?" he offers.`);
          } else {
            qspCall(s, 'willpower', 'bj', 'resist');
          }
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Tell him to get lost [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Tell him to get lost [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/flipoff.mp4');
    if (((s as any).fame ?? 0)?.['pav_prostitute'] >= ((s as any).fame ?? 0)?.['pav_sex']) {
      scene.text('You give him a haughty smile. "Sweetie, does it look like I\'m working now? Come find me at my home later, or at the disco."');
    } else {
      qspCall(s, 'fame', 'pav', 'sex', (-2));
      scene.text('You\'re outraged by the suggestion and he quickly turns and leaves, running as fast as he can as your cussing echoes through the hallway.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
            ]);
          }
          scene.actions([
            { label: 'Go to the men\'s restroom with him', handler: (st: GameState) => {
    if (((s as any).fame ?? 0)?.['pav_prostitute'] >= ((s as any).fame ?? 0)?.['pav_sex']) {
      qspCall(s, 'fame', 'pav', 'prostitute', 5);
      qspCall(s, 'money', 'earn', 50);
    } else {
      qspCall(s, 'fame', 'pav', 'sex', 5);
    }
  }, goto: ['gschool_sex', 'lunch_bj'] },
          ]);
        } else {
          if (((s as any).break_rand ?? 0) <= 9  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200  &&  ((s as any).soniaQW ?? 0)?.['slut'] >= 3) {
            // TODO-QSP: dynamic text: During the break, you're approached by some gopniks. "I know why you look so glu...
            scene.text(`During the break, you're approached by some gopniks. "I know why you look so glum, ${((s as any).pcs_nickname ?? 0)}. You miss our cocks! Ain't that right, cocksucker? Don't worry, you can come along with us. We'll give you all the dick you want."`);
            scene.text('You struggle as the guys try to grab you, and you can see them get frustrated. "Ah, forget about her," one of them says. "We already have Sonia in there, ready and willing. She\'ll just have to suck the dicks for both of them today."');
            scene.text('They let you go and head for the restroom, laughing loudly. Some of them are already undoing their pants.');
            scene.actions([
              { label: 'Go and look inside the men\'s room', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/toilet.jpg');
    scene.text('You walk to the restroom and carefully look inside, making sure not to draw any attention to yourself. You see Sonia resting on her knees, a cock deep down her throat. She must\'ve had a lot of practice, because it looks like she has no gag reflex whatsoever.');
    scene.text('Just around the corner are two more gopniks stroking their dicks, getting them hard for when it\'s their turn. You watch Sonia\'s head bob up and down the cock for a few minutes before you decide to leave while you still can.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
              { label: 'Quickly leave', goto: ['gschool_events', 'leave_break_events2'] },
            ]);
          } else {
            if (((s as any).break_rand ?? 0) === 10  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200) {
              scene.img('images/locations/pavlovsk/school/lunch/blowme.jpg');
              // TODO-QSP: dynamic text: During the break, some guy you've never seen before approaches you. "Hi. <<$pcs_...
              scene.text(`During the break, some guy you've never seen before approaches you. "Hi. ${((s as any).pcs_nickname ?? 0)}, right? I hear you're the best fuck in school! Want to… Umm. Want to come with me and prove it?"`);
              if (((s as any).fame ?? 0)?.['pav_prostitute'] >= ((s as any).fame ?? 0)?.['pav_sex']) {
                qspCall(s, 'willpower', 'prostitution', 'resist');
                // TODO-QSP: dynamic text: "I'll give you <<$func('money', 'string_profit', 200)>>?" he offers.
                scene.text(`"I'll give you ${qspFunc(s, 'money', 'string_profit', 200)}?" he offers.`);
              } else {
                qspCall(s, 'willpower', 'sex', 'resist');
              }
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.text('<br>You don\'t have enough willpower to refuse.');
              } else {
                scene.actions([
                  { label: 'Tell him to get lost [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/flipoff.mp4');
    if (((s as any).fame ?? 0)?.['pav_prostitute'] >= ((s as any).fame ?? 0)?.['pav_sex']) {
      scene.text('You give him a haughty smile. "Sweetie, does it look like I\'m working now? Come find me at my home later, or at the disco."');
    } else {
      qspCall(s, 'fame', 'pav', 'sex', (-2));
      scene.text('You\'re outraged by the suggestion and let him know just that! When he notices your angry face he quickly turns and leaves, running as fast as he can while your cussing echoes through the hallway.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                ]);
              }
              scene.actions([
                { label: 'Go to the roof with him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/sex/roof.jpg');
    scene.text('You\'re bored, horny as hell and want a good fuck. Making sure no one is watching, you smile at him. "Alright then, come with me."');
    scene.text('You take him by the hand and quickly guide him to the roof. He\'s seemingly surprised you agreed and you have to pull him along at first, but he\'s soon eagerly leading the way and pulling you along.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).fame ?? 0)?.['pav_prostitute'] >= ((s as any).fame ?? 0)?.['pav_sex']) {
      qspCall(s, 'fame', 'pav', 'prostitute', 5);
      qspCall(s, 'money', 'earn', 200);
    } else {
      qspCall(s, 'fame', 'pav', 'sex', 5);
    }
  }, goto: ['gschool_sex', 'lunch_sex'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).break_rand ?? 0) === 11  &&  ((s as any).pcs_hotcat ?? 0) > 5) {
                scene.img('images/locations/pavlovsk/school/events/skirtpulledup.jpg');
                scene.text('As you walk down the hallway, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your ass. As you move to turn around, the hand quickly pulls away.');
                scene.text('You can tell from the embarrassed look on his face and the admiring glances of his friends that Feofan was the one touching your ass.');
                qspCall(s, 'willpower', 'misc', 'self', 'medium');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Slap him across the face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Slap him across the face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A152', (-5));
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('It\'s bad enough he did it, but it\'s worse because you\'re on your period. "You fucking pervert!" you shout angrily and slap him across the face as hard as you can.');
      scene.text('You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('After rubbing his face, he looks at you in disbelief. "Sorry, I was just messing with you…"');
    } else {
      scene.text('"You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('After rubbing his face, he looks at you in disbelief. "Sorry, I was just messing with you…"');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                  ]);
                }
                qspCall(s, 'willpower', 'misc', 'self', 'hard');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Kick him in the balls [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Kick him in the balls [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A152', (-10));
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy8.jpg');
    scene.text('You kick Feofan in the balls, sending him and all of his classmates the message that you will not put up with this kind of behavior.');
    scene.text('You watch him writhe in pain on the floor for a second before collecting your things and making your way to your next class.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                  ]);
                }
                qspCall(s, 'willpower', 'exhib', 'self');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A152', 5);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (3);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'arousal', 'flash', (-5));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    // TODO-QSP: dynamic text: You pretend the other boys aren't there and step closer. "Come on Feofan, you kn...
    scene.text('You pretend the other boys aren\'t there and step closer. "Come on Feofan, you know you only have to ask if you want to see more…" you smile sweetly as you slowly begin to lift your skirt. He looks down, eyes wide. Just before your skirt is high enough to reveal \'+iif($pantyworntype ! \'none\', \'your panties\', \'your pussy\')+\', you drop it and skip backward, giggling.');
    scene.text('"Pfft! You really thought I was gonna give everyone a show like that? Keep dreaming!"');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                  ]);
                }
                qspCall(s, 'willpower', 'exhib', 'self', 'hard');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Taunt him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Taunt him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A152', 3);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy4.jpg');
    scene.text('You\'re so horny you decide to tease him and see if you can push him into doing more. You put your finger in your mouth and give him a flirty smirk.');
    scene.text('"Come on Feofan, is that all you have for me?" you quietly ask in a lewd voice.');
    scene.text('His friends heard your question and are now daring him to take you to the men\'s room. He doesn\'t seem so sure.');
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You lean in close and whisper in his ear, loud enough for the others to hear. "This is what I have for you…"');
    scene.text('You start sliding your skirt slowly up your thighs, but just before it gets high enough to show them anything, you let it go and it drops back in place.');
    scene.text('"Which is nothing," you say with a giggle.');
    scene.text('As you walk away, you hear one of the boys talking to his friend. "God, so close! She\'s such a tease…"');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A152', 1);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (3);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (5);
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('You turn away and keep walking, ignoring what just happened.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                  { label: 'Slap him playfully', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A152', 2);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy2.jpg');
    scene.text('You give him a playful slap in the face. It\'s not hard enough to really hurt him, but enough to send a message.');
    scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                ]);
              } else {
                if (((s as any).break_rand ?? 0) === 12  &&  ((s as any).pcs_hotcat ?? 0) > 5  &&  ((s as any).PCloSkirt ?? 0) > 0) {
                  scene.img('images/locations/pavlovsk/school/events/skirtpulledup.jpg');
                  if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_ass_big', 'body_ass_heart', 'body_ass_bubble')) {
                    scene.text('As you walk down the hallway, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel a hand firmly squeezing your ass. As you move to turn around, the hand quickly pulls away.');
                    scene.text('You can tell from his admiring expression that Lazar was the one groping your ass. All the workouts you\'ve been doing have made your ass big and firm enough to impress him.');
                  } else {
                    scene.text('As you walk down the hallway, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your ass. As you move to turn around, the hand quickly pulls away.');
                    scene.text('You can tell from his disappointed expression that Lazar was the one groping your ass. Perhaps he was expecting something firmer after hanging out with the athletic girls so much? Maybe you should work out more…');
                  }
                  qspCall(s, 'willpower', 'misc', 'self', 'medium');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Slap him across the face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Slap him across the face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A149', (-5));
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('It\'s bad enough he did it, but it\'s worse because you\'re on your period. "You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('After rubbing his face, he looks at you in disbelief. "What the fuck was that for?! I was just messing with you!"');
    } else {
      scene.text('"You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('After rubbing his face, he looks at you in disbelief. "What the fuck was that for?! I was just messing with you!"');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                    ]);
                  }
                  qspCall(s, 'willpower', 'misc', 'self', 'hard');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Kick him in the balls [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Kick him in the balls [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A149', (-10));
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy8.jpg');
    scene.text('You kick Lazar in the balls, sending him and all of his classmates the message that you will not put up with this kind of behavior.');
    scene.text('You watch him writhe in pain on the floor for a second before collecting your things and making your way to your next class.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                    ]);
                  }
                  qspCall(s, 'willpower', 'exhib', 'self');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A149', 5);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (3);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'arousal', 'flash', (-5));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You pretend the other boys aren\'t there and step closer. "Come on Lazar, you know you only have to ask if you want to see more…" you smile sweetly as you slowly begin to lift your skirt.');
    // TODO-QSP: dynamic text: He grins expectantly at you, confident you're going to show him the goods. Just ...
    scene.text('He grins expectantly at you, confident you\'re going to show him the goods. Just before your skirt is high enough to reveal \'+iif($pantyworntype ! \'none\', \'your panties\', \'your pussy\')+\', you drop it and skip backward, giggling.');
    scene.text('"Pfft! You really thought I was gonna give everyone a show like that? Keep dreaming!"');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                    ]);
                  }
                  qspCall(s, 'willpower', 'exhib', 'self', 'hard');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Taunt him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Taunt him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A149', 3);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy4.jpg');
    scene.text('You\'re so horny you decide to tease him and see if you can push him into doing more. You put your finger in your mouth and give him a flirty smirk.');
    scene.text('"Come on Lazar, is that all you have for me?" you quietly ask in a lewd voice.');
    scene.text('His friends heard your question and are now daring him to take you to the men\'s room.');
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You can see him starting to get aroused as you lean in close and whisper in his ear, loud enough for the others to hear. "This is what I have for you…"');
    scene.text('You start sliding your skirt slowly up your thighs, but just before it gets high enough to show them anything, you let it go and it drops back in place.');
    scene.text('"Which is nothing," you say with a giggle.');
    scene.text('As you walk away, you hear one of the boys talking to his friend. "God, so close! She\'s such a tease…"');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    ]);
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A149', 1);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (3);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (5);
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    scene.text('You turn away and keep walking, ignoring what just happened.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                    { label: 'Slap him playfully', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A149', 2);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy2.jpg');
    scene.text('You give him a playful slap in the face. It\'s not hard enough to really hurt him, but enough to send a message.');
    scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                  ]);
                } else {
                  if (((s as any).break_rand ?? 0) === 13  &&  ((s as any).pcs_hotcat ?? 0) > 5  &&  ((s as any).PCloSkirt ?? 0) > 0) {
                    scene.img('images/locations/pavlovsk/school/events/skirtpulledup.jpg');
                    scene.text('As you walk down the hallway, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your ass. As you move to turn around, the hand quickly pulls away.');
                    scene.text('The brazen look on his face betrays Roman. Knowing him, he probably would\'ve gone further if there weren\'t so many people here.');
                    qspCall(s, 'willpower', 'misc', 'self', 'medium');
                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                      scene.actions([
                        { label: 'Slap him across the face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Slap him across the face [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A157', (-5));
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
    qspCall(s, 'pain', '', 4, 'cheeks', 'slap');
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy1.jpg');
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('It\'s bad enough he did it, but it\'s worse because you\'re on your period. "You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('He blinks at you, seemingly surprised you slapped him, then backhands you across the face, nearly knocking you off your feet. Your face stings in pain as he gets right up in your face, his eyes hard.');
      scene.text('"Don\'t ever fucking slap me, bitch!" he snarls before storming off.');
    } else {
      scene.text('"You fucking pervert!" you shout angrily and slap him across the face as hard as you can. You shake the stinging out of your hand while he clutches his cheek in agony, the outline of your hand clearly visible. That\'s going to leave a bruise.');
      scene.text('The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
      scene.text('He blinks at you, seemingly surprised you slapped him, then backhands you across the face, nearly knocking you off your feet. Your face stings in pain and he gets right up in your face, his eyes hard.');
      scene.text('"Don\'t ever fucking slap me, bitch!" he snarls before storming off.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                      ]);
                    }
                    qspCall(s, 'willpower', 'exhib', 'self');
                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                      scene.actions([
                        { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Tease him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A157', 5);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (3);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'arousal', 'flash', (-5));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You pretend the other boys aren\'t there and step closer. "Come on Roman, you know you only have to ask if you want to see more…" you smile sweetly as you slowly begin to lift your skirt.');
    // TODO-QSP: dynamic text: He grins expectantly at you, confident you're going to show him the goods, but j...
    scene.text('He grins expectantly at you, confident you\'re going to show him the goods, but just before your skirt is high enough to reveal \'+iif($pantyworntype ! \'none\', \'your panties\', \'your pussy\')+\', you drop it and skip backward, giggling.');
    scene.text('"Pfft! You really thought I was gonna give everyone a show like that? Keep dreaming!"');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                      ]);
                    }
                    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
                    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                      scene.actions([
                        { label: 'Taunt him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Taunt him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A157', 3);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy4.jpg');
    scene.text('You\'re so horny you decide to tease him and see if you can push him into doing more. You put your finger in your mouth and give him a flirty smirk.');
    scene.text('"Come on Roman, is that all you have for me?" you quietly ask in a lewd voice.');
    scene.text('His friends heard your question and are now daring him to take you to the men\'s room.');
    scene.actions([
      { label: 'Tease him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You can see him starting to get aroused as you lean in close and whisper in his ear, loud enough for the others to hear. "This is what I have for you…"');
    scene.text('You start sliding your skirt slowly up your thighs, but just before it gets high enough to show them anything, you let it go and it drops back in place.');
    scene.text('"Which is nothing," you say with a giggle.');
    scene.text('As you walk away, you hear one of the boys talking to his friend. "God, so close! She\'s such a tease…"');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    ]);
  } },
                      ]);
                    }
                    scene.actions([
                      { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A157', 1);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (3);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (5);
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('You turn away from him and keep walking, ignoring what just happened.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                      { label: 'Slap him playfully', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A157', 2);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy2.jpg');
    scene.text('You give him a playful slap in the face. It\'s not hard enough to really hurt him, but enough to send a message. The other boys laugh loudly. This is the best entertainment they\'ve had during the break in a long time.');
    scene.text('As you turn to walk away, he shoves you hard against the lockers before storming off. You try to pass it off as nothing as you walk the other way.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                    ]);
                  } else {
                    if (((s as any).break_rand ?? 0) === 14) {
                      scene.img('images/locations/pavlovsk/school/events/skirtpulledup.jpg');
                      scene.text('As you walk down the hallway, you feel someone moving in behind you and quickly pulling your skirt up. Your skirt is barely in the air before you feel hands pawing at your ass. As you move to turn around, the hand quickly pulls away.');
                      scene.text('Lesco is trembling slightly, his eyes shifting back and forth as he awkwardly tries not to be noticed by you. It must\'ve been him.');
                      scene.text('The nearby gopniks burst out into laughter as you see the panic on Lesco\'s face. He quickly raises his hands in defense, rapidly apologizing.');
                      scene.text('"Please, I didn\'t want to! They made me do it! I\'m sorry!"');
                      scene.text('You stare him down for a few seconds and realize he\'s not lying. You know Lesco doesn\'t have an easy time in school, so you let him off the hook. "Alright, I believe you. Just don\'t do it again, okay?"');
                      scene.text('You turn to the other guys and consider your options while Lesco quickly leaves, visibly relieved you didn\'t report him.');
                      qspCall(s, 'willpower', 'exhib', 'self');
                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                        scene.actions([
                          { label: 'Tease them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Tease them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'socialgroup_setting_boys', 3, 3, 0, 3, 3, 0);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (4);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (3);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (6);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (2);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'arousal', 'flash', (-5));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You pretend the other people aren\'t there and sweetly smile at them.');
    scene.text('"Come on boys, you know you only have to ask if you want to see more…" you tease as you slowly start to lift your skirt. The boys just stare at you in disbelief, surprised that their ploy worked.');
    // TODO-QSP: dynamic text: Just before your skirt is high enough to reveal '+iif($pantyworntype ! 'none', '...
    scene.text('Just before your skirt is high enough to reveal \'+iif($pantyworntype ! \'none\', \'your panties\', \'your pussy\')+\', you drop it and skip back, giggling. "Just kidding, you perverts!"');
    scene.text('You give them all a cute wink as their faces all become flustered.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                        ]);
                      }
                      qspCall(s, 'willpower', 'exhib', 'self', 'hard');
                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                        scene.actions([
                          { label: 'Taunt them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Taunt them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'socialgroup_setting_boys', 2, 2, 0, 2, 2, 0);
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (2);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) - (5);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy4.jpg');
    scene.text('You\'re so horny you decide to tease them and see if you can push them into doing more. You put your finger in your mouth and give them a flirty smirk.');
    scene.text('"Come on boys, is that all you have for me?" you quietly ask in a lewd voice.');
    scene.text('They start daring each other to take you to the men\'s room, but none of them act.');
    scene.actions([
      { label: 'Tease them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy3.jpg');
    scene.text('You lean in close to one of them and whisper in his ear, loud enough for the others to hear. "Because this is what I have for you…"');
    scene.text('You start sliding your skirt slowly up your thighs, but just before it gets high enough to show anything, you let it go and it drops back in place.');
    scene.text('"Which is nothing!" you say with a giggle.');
    scene.text('You hear one of the boys saying to his friend. "God, so close! She\'s such a tease…"');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    ]);
  } },
                        ]);
                      }
                      scene.actions([
                        { label: 'Give them a derogatory look', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (3);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (5);
    scene.img('images/pc/reactions/glare.jpg');
    scene.text('You look at the guys and give them the stink eye, then turn away and keep walking, ignoring what just happened.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                      ]);
                    } else {
                      if (((s as any).break_rand ?? 0) === 15) {
                        scene.img('images/locations/pavlovsk/school/lunch/irinaphone.jpg');
                        scene.text('You notice Irina sitting by herself with her phone out; she has one of her knees up and legs slightly spread. This position causes her skirt to ride up and provide a perfect panty shot.');
                        scene.text('You wonder if she\'s aware of this fact as you notice a lot of the guys staring at her, but figure she most likely is since she knows how to work the boys.');
                        qspCall(s, 'arousal', 'erotic', 5);
                        qspCall(s, 'arousal', 'end');
                      } else {
                        if (((s as any).break_rand ?? 0) === 16  &&  ((s as any).pcs_hotcat ?? 0) > 5) {
                          scene.img('images/locations/pavlovsk/school/lunch/hallflirt.jpg');
                          scene.text('As you close your locker door and turn around, you nearly run into a boy leaning against the lockers next to you. When you stop, he leans in very close to you, smiling.');
                          scene.text('He starts complimenting you and flirting for all he\'s worth.');
                          scene.actions([
                            { label: 'Walk away', handler: (st: GameState) => {
    scene.text('You\'re not in the mood to play his game.');
    scene.text('You silently turn and walk away, causing him to call you a bitch.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
      { label: 'Flip him off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/afterschool/teasefo.mp4');
    scene.text('You turn around and suck on your fingers before flipping him off.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    ]);
  } },
                            { label: 'Flirt back', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/lunch/hallflirt.jpg');
    scene.text('You decide to flirt back, placing your hand on his chest and telling him he isn\'t so bad himself. You\'re soon flirting back just as much as he\'s flirting with you.');
    scene.text('After a while, you notice he\'s now sporting a raging hard-on.');
    scene.text('"Want to go somewhere private and have some fun?" he grins.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not today [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not today [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/hallflirt.jpg');
    scene.text('You shake your head. "Maybe some other time? I really need to run. Talk to you later."');
    scene.text('You quickly hurry away, leaving him unsure if this was a good or bad thing.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
      ]);
    }
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', (-1));
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/lunch/flipoff.mp4');
    scene.text('"No! What kind of girl do you think I am?! Whatever, I don\'t even want to know."');
    scene.text('You quickly turn and storm off, leaving him behind.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
      ]);
    }
    if (((s as any).pcs_horny ?? 0) > 50) {
      scene.actions([
        { label: 'Offer to fuck him', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 3);
    scene.img('images/locations/pavlovsk/school/lunch/hallflirt.jpg');
    scene.text('You think about it for a few seconds before you lean in close to him. "I\'ll fuck you if you promise not to tell anyone…"');
    scene.text('Before you even finish saying it, he\'s grinning and nodding his head. "I swear I won\'t tell a soul!"');
    scene.text('You grab his hand and lead him to the roof.');
    scene.actions([
      { label: 'Take him to the roof', goto: ['gschool_sex', 'lunch_sex'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Offer to suck him off', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 2);
    scene.img('images/locations/pavlovsk/school/lunch/hallflirt.jpg');
    scene.text('You think about it for a few seconds before you lean in close to him. "I\'ll suck your dick if you promise not to tell anyone…"');
    scene.text('Before you even finish saying it, he\'s grinning and nodding his head. "I swear I won\'t tell a soul!"');
    scene.text('You grab his hand and lead him to the restroom.');
    scene.actions([
      { label: 'Take him to the men\'s restroom', goto: ['gschool_sex', 'lunch_bj'] },
    ]);
  } },
    ]);
  } },
                          ]);
                        } else {
                          if (((s as any).break_rand ?? 0) === 17) {
                            scene.img('images/locations/pavlovsk/school/events/bendover.jpg');
                            scene.text('As you walk down the hallway, you see Veronika writing something in her notebook as she walks along. Not looking where she\'s going, she bumps into one of the other students and ends up dropping her pencil.');
                            scene.text('Without thinking, she bends over and picks it up, giving everyone in the hallway a nice view of her panty-clad ass, which elicits hoots, hollers and whistles from the other students, especially the boys.');
                            scene.text('She quickly stands up, blushing as she smooths her skirt back in place. She gives some of the more vocal boys a dirty look as she hurries on her way.');
                            qspCall(s, 'arousal', 'erotic', 1);
                            qspCall(s, 'arousal', 'end');
                          } else {
                            if (((s as any).break_rand ?? 0) === 18) {
                              scene.img('images/locations/pavlovsk/school/events/girldryhump.jpg');
                              scene.text('As you walk down the hallway, you see a commotion ahead. Several students are clustered together looking at something.');
                              scene.text('As you get closer, you see Anushka bent over with Alyona standing behind her, pulling her hair as she pretends to fuck her from behind, much to the delight of the boys watching.');
                              scene.text('A teacher suddenly starts loudly asking what\'s going on and everyone quickly disperses.');
                              qspCall(s, 'arousal', 'erotic', 5);
                              qspCall(s, 'arousal', 'end');
                            } else {
                              if (((s as any).break_rand ?? 0) === 19) {
                                scene.img('images/locations/pavlovsk/school/events/girlsbj.jpg');
                                scene.text('As you walk down the hallway, you see two girls from your brother\'s class. One of them bends over and starts pretending to suck the other girl\'s imaginary dick.');
                                scene.text('The first girl just stands there proudly for a moment, then grabs the second girl\'s head to force her to deepthroat the imaginary dick. They carry on for a few more seconds until a teacher starts coming down the hallway, attracted by all the noise the boys are making.');
                                qspCall(s, 'arousal', 'erotic', 5);
                                qspCall(s, 'arousal', 'end');
                              } else {
                                if (((s as any).break_rand ?? 0) === 20) {
                                  scene.img('images/locations/pavlovsk/school/events/girlskiss.jpg');
                                  scene.text('As you stop at your locker, you see a few of the cool kids hanging out. Andrey starts trying to get Stasya and Lizaveta to kiss, with several other boys and some of the girls joining in with the encouragement.');
                                  scene.text('Lizaveta is shaking her head as Stasya looks over at Andrey, who nods and winks. Stasya rolls her eyes, but grabs Lizaveta, says something to her, and starts kissing her.');
                                  scene.text('Lizaveta resists at first, but as the others all keep up the encouragement, she gives in and returns the kiss. They quickly break the kiss and Andrey hugs and kisses Stasya, while Lizaveta blushes at the attention.');
                                  scene.text('Before long, a teacher hollers down the hallway asking what\'s going on, which causes everyone to break up.');
                                  qspCall(s, 'arousal', 'erotic', 2);
                                  qspCall(s, 'arousal', 'end');
                                } else {
                                  if (((s as any).break_rand ?? 0) === 21) {
                                    scene.img('images/locations/pavlovsk/school/events/girlsskirtup.jpg');
                                    scene.text('As you stop at your locker, you hear a group of girls teasing some boys about how they aren\'t wearing panties under their skirt.');
                                    scene.text('The boys ask, beg, plead and demand the girls prove it. The girls grin before they lift up their skirts to show off their boy shorts, which annoys the boys to no end as the girls laugh at them.');
                                    qspCall(s, 'arousal', 'erotic', 1);
                                    qspCall(s, 'arousal', 'end');
                                  } else {
                                    if (((s as any).break_rand ?? 0) === 22) {
                                      scene.img('images/locations/pavlovsk/school/events/handstand.jpg');
                                      if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
                                        scene.text('As you stop by your locker, you see some girls from your brother\'s class doing handstands against the wall. Every time their skirts flip down, the boys watching all cheer.');
                                        scene.text('Giggling, they keep doing it until a teacher is spotted and everybody scatters.');
                                      } else {
                                        scene.text('As you stop at your locker, you overhear Christina berating Lariska and Lina about yesterday\'s practice. They try to apologise and promise to do better, but Christina is having none of it. She tells the girls to do handstands in the hallway until the next class.');
                                        scene.text('"But our skirts will fall up and everyone will see our panties!" Lariska points out.');
                                        scene.text('Christina just shrugs. "You should have thought of that and played better."');
                                        scene.text('After a few minutes, when it\'s obvious Christina isn\'t going to relent, both Lariska and Lina do as they\'re told and, with predictable results, their skirts fall down around their stomachs, showing off their panties.');
                                        scene.text('They blush as the boys and some of the girls whistle and comment about their choice in panties, but do as Christina demands. Christina grins smugly, clearly enjoying what\'s happening.');
                                        qspCall(s, 'arousal', 'erotic', 1);
                                        qspCall(s, 'arousal', 'end');
                                      }
                                    } else {
                                      if (((s as any).break_rand ?? 0) === 23) {
                                        scene.img('images/locations/pavlovsk/school/events/hellokitty.jpg');
                                        scene.text('As you walk down the hallway, you overhear a girl asking one of the boys if he would like to see her kitty. He does a double take and grins while nodding at her.');
                                        scene.text('She smiles and pulls up her skirt to show off a pair of boyshorts with Hello Kitty on them. The boy looks disappointed while the girl laughs.');
                                        qspCall(s, 'arousal', 'erotic', 1);
                                        qspCall(s, 'arousal', 'end');
                                      } else {
                                        if (((s as any).break_rand ?? 0) === 24) {
                                          scene.img('images/locations/pavlovsk/school/events/legsup.jpg');
                                          scene.text('As you stop at your locker, a girl starts taking pictures of her two friends, who start posing in funny, seductive or teasing stances.');
                                          qspCall(s, 'arousal', 'erotic', 2);
                                          qspCall(s, 'arousal', 'end');
                                        } else {
                                          if (((s as any).break_rand ?? 0) === 25) {
                                            scene.img('images/locations/pavlovsk/school/events/makeupgirl.jpg');
                                            scene.text('As you walk down the hallway, you see Bella sitting on one of the window ledges, ignoring her classmates as she touches up her makeup with her compact.');
                                          } else {
                                            if (((s as any).break_rand ?? 0) === 26  &&  ((s as any).christinaQW ?? 0)?.['fight'] < 1  &&  ((s as any).christinaQW ?? 0)?.['blackmail'] < 2) {
                                              scene.img('images/locations/pavlovsk/school/events/nastymessage.jpg');
                                              if (((s as any).christinaQW ?? 0)?.['subpath'] > 1) {
                                                scene.text('As you walk down the hallway, you see Christina writing something on your locker. You know your place now, so you walk up to her while keeping your eyes on the floor.');
                                                scene.text('"Hello, Pet. Somebody took the artwork off your locker, so I added it back for you. Now thank me and tell me why the last one was removed."');
                                                scene.actions([
                                                  { label: 'Thank her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/nastymessage2.jpg');
    scene.text('"Thank you, Christina. The janitor must have removed it. I left it there so others knew who I belong to…"');
    scene.text('She gives you a long stare. "Hmmm. I\'ll accept it this time, but if it happens again, then I\'ll assume you\'re lying and will punish you." She then gives you a smirk. "Later, Pet."');
    scene.text('You quickly hurry off to your next class.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                                                ]);
                                              } else {
                                                scene.text('As you walk down the hallway, you see Christina writing a nasty message on a locker. Your locker. Again. It took forever to get it off last time!');
                                                scene.actions([
                                                  { label: 'Ignore it', goto: ['gschool_events', 'leave_break_events2'] },
                                                  { label: 'Avoid eye contact', handler: (st: GameState) => {
    ((s as any).christinaQW ?? {})['bully'] = (((s as any).christinaQW ?? {})['bully'] ?? 0) + (2);
    scene.img('images/locations/pavlovsk/school/events/nastymessage2.jpg');
    scene.text('Keeping your eyes on the floor, you try to walk by but she notices you.');
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. Somebody took the artwork off your locker, so I added it...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}. Somebody took the artwork off your locker, so I added it back for you. No need to thank me."`);
    scene.text('You hurry away before she does anything else.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                                                  { label: 'Yell at her', handler: (st: GameState) => {
    ((s as any).christinaQW ?? {})['bully'] = (((s as any).christinaQW ?? {})['bully'] ?? 0) - (2);
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('You head straight at her. "What the fuck, Christina?!" you yell, causing other students to start drifting in your direction, sensing a fight is about to happen.');
    // TODO-QSP: dynamic text: "Oh, hey <<$pcs_nickname>>. Somebody took the artwork off your locker, so I adde...
    scene.text(`"Oh, hey ${((s as any).pcs_nickname ?? 0)}. Somebody took the artwork off your locker, so I added it back for you. No need to thank me." She gives you a dangerous look despite the calm tone in her voice.`);
    scene.text('Curling your hands into fists causes her to drop her marker and do the same, but before either of you can throw a punch, a teacher\'s voice calls out demanding to know what\'s happening.');
    scene.text('Christina melts into the crowd that\'s rapidly dispersing, a dark promise in her eyes.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
                                                ]);
                                              }
                                            } else {
                                              if (((s as any).break_rand ?? 0) === 27) {
                                                scene.img('images/locations/pavlovsk/school/events/nopanties.jpg');
                                                scene.text('As you pass the stairwell, you see a cluster of boys, including your brother, around a girl. You stop for a second to see what they\'re doing.');
                                                scene.text('The boys quickly give the girl some money and she lifts up her skirt, showing them her lack of panties and her pussy. She quickly pulls it back down, only giving them the briefest of looks.');
                                                scene.text('You wonder if you should say something when a teacher starts coming down the stairs and they all scatter.');
                                                qspCall(s, 'arousal', 'erotic_nudity', 5);
                                                qspCall(s, 'arousal', 'end');
                                              } else {
                                                if (((s as any).break_rand ?? 0) === 28) {
                                                  scene.img('images/locations/pavlovsk/school/events/shhh.jpg');
                                                  scene.text('You notice Lena and Lera sitting on the floor near the end of the hallway. Lera leans over to say something and Lena grabs her by the hair and forces her face down to her crotch.');
                                                  scene.text('As you watch, Lena makes a "shhh" motion at you. You can\'t tell if Lera is really going down on Lena or if they\'re just messing around.');
                                                  qspCall(s, 'arousal', 'voyeur', 2);
                                                  qspCall(s, 'arousal', 'end');
                                                } else {
                                                  if (((s as any).break_rand ?? 0) === 29) {
                                                    if (((s as any).NatbelQW ?? 0)?.['panty_stuff_day'] === ((s as any).daystart ?? 0)) {
                                                      scene.img('images/locations/pavlovsk/school/events/buttgrab_nopanties.jpg');
                                                      scene.text('As you pass by some of the nerds, you see Dan suddenly reach out and grab the back of Natasha\'s skirt before pulling it up, showing off her naked ass to everyone.');
                                                      scene.text('She fights to pull her skirt out of his hand to no avail. Feofan tells him to let go and gets shoved into a locker for his trouble, but it does make Dan let go of Natasha\'s skirt.');
                                                      scene.text('Before you can say anything, a teacher looks out from one of the classrooms and asks what\'s going on. Everyone says nothing and they go about their way, but the look Dan gives Feofan promises it might not be over.');
                                                      qspCall(s, 'arousal', 'erotic_nudity', 1);
                                                      qspCall(s, 'arousal', 'end');
                                                    } else {
                                                      scene.img('images/locations/pavlovsk/school/events/skirt_pulled_up.jpg');
                                                      scene.text('As you pass by some of the nerds, you see Dan suddenly reach out and grab the back of Natasha\'s skirt before pulling it up, showing off her panty-clad ass to everyone.');
                                                      scene.text('She fights to pull her skirt out of his hand to no avail. Feofan tells him to let go and gets shoved into a locker for his trouble, but it does make Dan let go of Natasha\'s skirt.');
                                                      scene.text('Before you can say anything, a teacher looks out from one of the classrooms and asks what\'s going on. Everyone says nothing and they go about their way, but the look Dan gives Feofan promises it might not be over.');
                                                      qspCall(s, 'arousal', 'erotic', 1);
                                                      qspCall(s, 'arousal', 'end');
                                                    }
                                                  } else {
                                                    if (((s as any).break_rand ?? 0) === 30) {
                                                      scene.img('images/locations/pavlovsk/school/events/skirtupback.jpg');
                                                      if (((s as any).christinaQW ?? 0)?.['blackmail'] >= 1) {
                                                        scene.text('You see Christina walk past Mr. Nikolaevich. As she does, she briefly flips up the back of her skirt to show off her panty-clad ass.');
                                                        scene.text('Mr. Nikolaevich gives her a stern look, but otherwise doesn\'t say anything. You roll your eyes and wonder how you were the first person that figured out she was fucking him.');
                                                        qspCall(s, 'arousal', 'erotic', 1);
                                                        qspCall(s, 'arousal', 'end');
                                                      } else {
                                                        scene.text('You see Christina walk past Mr. Nikolaevich. As she does, she briefly flips up the back of her skirt to show off her panty-clad ass.');
                                                        scene.text('Mr. Nikolaevich gives her a stern look but otherwise doesn\'t say anything. It does make you wonder what kind of relationship they have with each other…');
                                                        qspCall(s, 'arousal', 'erotic', 1);
                                                        qspCall(s, 'arousal', 'end');
                                                      }
                                                    } else {
                                                      if (((s as any).break_rand ?? 0) === 31) {
                                                        scene.img('images/locations/pavlovsk/school/events/teaseteacher.jpg');
                                                        scene.text('You notice Pauline, Lena, Lera and Katyusha sitting by one of the windows, talking and occasionally hassling the other students.');
                                                        scene.text('When Mr. Yenotin comes over to ask them what they\'re doing, Lena, Lera and Pauline occasionally open their legs wide to show off their panties while faking innocence. When he demands they stop, they act like they don\'t know what he\'s talking about before turning it around on him, asking him if he\'s trying to look up their skirts.');
                                                        scene.text('Flustered and not making any progress, he tells them to behave and hurries away as the girls all burst out laughing.');
                                                        qspCall(s, 'arousal', 'erotic', 1, 'unknown');
                                                        qspCall(s, 'arousal', 'end');
                                                      } else {
                                                        if (((s as any).break_rand ?? 0) === 32) {
                                                          scene.img('images/locations/pavlovsk/school/events/tieshoe.jpg');
                                                          scene.text('As you walk down the hallway, you see Irina has stopped. She lifts her foot up to place it on the window ledge as she bends over to tie her shoe, her skirt riding way up and showing off her ass.');
                                                          scene.text('It\'s only for a moment, but you\'re almost certain she wasn\'t wearing panties. You briefly wonder if she was even aware of how much the others could see.');
                                                          qspCall(s, 'arousal', 'erotic_nudity', 1);
                                                          qspCall(s, 'arousal', 'end');
                                                        } else {
                                                          if (((s as any).break_rand ?? 0) === 33) {
                                                            scene.img('images/locations/pavlovsk/school/events/walkaround.jpg');
                                                            scene.text('As you walk down the hallway, you see Pauline, Lena and Lera practically laying in the middle of the hallway. This forces the other students to carefully walk around them and they berate those who step too close to them.');
                                                            scene.text('You\'re sure they\'re enjoying making the other students lives harder by just being in their way.');
                                                          } else {
                                                            if (((s as any).break_rand ?? 0) <= 35  &&  ((s as any).month ?? 0) !== 9  &&  ((s as any).cheerleaders_on ?? 0) === 1  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 0  &&  ((s as any).cheerleadingQW ?? 0)?.['gossip'] === 4  &&  ((s as any).cheerleadingQW ?? 0)?.['gossip_day'] < ((s as any).daystart ?? 0)) {
                                                              scene.actions([{ label: 'Continue', goto: ['gschool_cheerleading', 'poster'] }]);
                                                            } else {
                                                              if (((s as any).break_rand ?? 0) <= 35  &&  ((s as any).cheerleaders_on ?? 0) === 1  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === -1  &&  ((s as any).cheerleadingQW ?? 0)?.['reject'] + 30 >= ((s as any).daystart ?? 0)) {
                                                                scene.actions([{ label: 'Continue', goto: ['gschool_cheerleading', 'poster_repeat'] }]);
                                                              } else {
                                                                if (((s as any).break_rand ?? 0) <= 36 + ((s as any).lernHome ?? 0)*2 + ((s as any).petkaQW ?? 0)?.['homework']*(Math.floor(Math.random() * 11) + 10)  &&  ((s as any).petka_homework_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).week ?? 0) > 1) {
                                                                  (s as any).petka_homework_day = ((s as any).daystart ?? 0);
                                                                  qspCall(s, 'stat', '');
                                                                  scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
                                                                  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 4) {
                                                                    scene.text('As you walk down the hallway, you notice Petka stop at the boys bathroom door and look around, like he\'s afraid to go inside. He opens the door and looks in, then apparently liking what he sees, goes in.');
                                                                    scene.text('He must have been checking if any gopniks were already in there waiting to bully him or something. That likely means he\'s alone in there. Looking around, you see the hall starting to clear of people.');
                                                                  } else {
                                                                    scene.text('As you walk down the hallway, you notice Petka stop at the boys bathroom door and look around, like he\'s afraid to go inside. He opens the door and looks in, then apparently liking what he sees, goes in.');
                                                                    scene.text('He must have been checking if any gopniks were already in there waiting to bully him or something. You don\'t blame him for being cautious as you go about your business.');
                                                                  }
                                                                  if (((s as any).lernHome ?? 0) > 1) {
                                                                    scene.actions([
                                                                      { label: 'Follow Petka', goto: ['petkaev', 'follow_petka'] },
                                                                    ]);
                                                                  } else {
                                                                    if (((s as any).petkaQW ?? 0)?.['homework'] > 0) {
                                                                      scene.text('<br>You\'ve already done all your homework and don\'t need his help today.');
                                                                    } else {
                                                                      scene.text('<br>If you forgot to do your homework, now would be a good time to convince him to do it for you.');
                                                                    }
                                                                  }
                                                                  scene.actions([
                                                                    { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
                                                                  ]);
                                                                } else {
                                                                  scene.actions([{ label: 'Continue', goto: ['gschool_events', 'leave_break_events2'] }]);
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterLeaveBreakEvents2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).eventtype ?? 0) === 'before_school') {
    scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'morning'] }]);
  } else {
    if (((s as any).eventtype ?? 0) === 'lunch') {
      scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'lunch'] }]);
    } else {
      if (((s as any).eventtype ?? 0) === 'long_break') {
        scene.actions([{ label: 'Continue', goto: ['gschool_lunch', 'break'] }]);
      } else {
        if (((s as any).eventtype ?? 0) === 'after_school') {
          scene.actions([{ label: 'Continue', goto: ['gschool_grounds', 'main'] }]);
        }
      }
    }
  }
  scene.build();
}

function enterAfterschoolEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).christinaQW ?? 0)?.['subpath'] === 0  &&  ((s as any).christinaQW ?? 0)?.['blackmail'] === 0  &&  ((s as any).christinaQW ?? 0)?.['fight'] === 0  &&  (Math.floor(Math.random() * 4) + 1) === 4) {
    scene.actions([{ label: 'Continue', goto: ['Zvereva_events', 'christina_bu_2'] }]);
  } else {
    (s as any).break_rand = Math.floor(Math.random() * 32) + 1;
    if (((s as any).break_rand ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/school/events/afterschool/alyona1.jpg');
      scene.text('As you walk down the hallway, you see Alyona squatting on the floor next to her locker with a bottle of vodka in her hands.');
      scene.actions([
        { label: 'Ignore her and leave', goto: ['gschool_grounds', 'main'] },
        { label: 'Talk to her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/alyona2.jpg');
    if (((s as any).grupTipe ?? 0) === 4  ||  ((s as any).npc_rel ?? 0)?.['A143'] > 60) {
      scene.text('You walk up to her. "What\'s up Alyona?"');
      scene.text('She gives you a dirty look. "Just hanging out. Why?"');
      scene.text('"No reason," you reply. "I just wanted to say hi."');
      scene.text('She shrugs as she takes a long swig from the bottle before offering it to you. "Want a drink?"');
      qspCall(s, 'willpower', 'drink', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A143', (-2));
    scene.img('images/locations/pavlovsk/school/events/afterschool/alyona2.jpg');
    scene.text('You shake your head and don\'t take the offered bottle. "No thanks."');
    scene.text('She gives you a sour look. "Then fuck off and get your pussy ass out of here!"');
    scene.text('Not sure what to say and not wishing to piss her off more, you decide to leave her alone.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Take a drink', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 1);
    scene.img('images/pc/activities/drinking/alcohol.jpg');
    scene.text('You take the offered bottle and take a swig of it. This is some of the cheapest vodka you\'ve ever tasted and it burns as it goes down.');
    scene.text('Coughing, you hand it back to her. "Fuck, that\'s strong!"');
    scene.text('She takes another long swig from the bottle. "I don\'t drink this shit for the effect, not the taste."');
    scene.text('She offers you the bottle again.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/afterschool/alyona3.jpg');
    scene.text('You shake your head and don\'t take the offered bottle. "No thanks, I need to be able to walk home."');
    scene.text('She laughs and takes another long swig herself. The two of you talk as she drinks. Well, you talk and she drinks. Before long, she\'s completely wasted. She puts the bottle away and falls on her ass as she starts to get up.');
    scene.text('You offer to help, but she pushes you away. "Fuck off, I don\'t need any help!"');
    scene.text('You back off and let her get up on her own, but it takes her a few tries. Once up, she turns and stumbles for the exit, not sure what to do. You head out after her, at least making sure she gets outside in one piece.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take another swig', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A143', 2);
    scene.img('images/locations/pavlovsk/school/events/afterschool/alyona3.jpg');
    scene.text('You take the bottle and take another swig. It burns a little less this time. "If I drink much more of this, I won\'t be able to walk home!"');
    scene.text('She laughs and take another long swig herself. The two of you talk and drink. Well, you talk while she drinks even more than you do. Before long, you\'re both wasted. She puts the bottle away and falls on her ass as she starts to get up.');
    scene.text('You offer to help, but she pushes you away. She then sighs and takes your hand as you pull her to her feet and the two of you stumble outside together. After taking a breath of fresh air, you feel a little better.');
    // TODO-QSP: dynamic text: She stumbles away, but calls back. "I gotta go. See you around, <<$pcs_nickname>...
    scene.text(`She stumbles away, but calls back. "I gotta go. See you around, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You walk up to her. "What\'s up, Alyona?"');
      scene.text('She gives you a dirty look. "What the fuck do you want, skank?"');
      scene.text('You\'re taken a bit aback by her comment. "Nothing. I just wanted to say hi."');
      scene.text('"Well fuck off before you get hurt, bitch!" She sounds serious and, knowing she carries a knife and isn\'t afraid of using it, you decide not to press the issue.');
      scene.actions([
        { label: 'Leave', goto: ['gschool_grounds', 'main'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).break_rand ?? 0) === 2) {
        scene.img('images/locations/pavlovsk/school/events/afterschool/andsta1.jpg');
        scene.text('As you walk down the hallway, you see Andrey leaning against the lockers, talking to Stasya as she\'s getting something out of her locker.');
        scene.actions([
          { label: 'Ignore them', goto: ['gschool_grounds', 'main'] },
          { label: 'Watch them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/andsta2.jpg');
    scene.text('As you watch, Andrey steps closer, saying something to her softly that you can\'t make out while putting one hand on the back of her neck.');
    scene.text('She puts her hands against his chest as if to push him away, but they start kissing passionately as his hands start roaming over her body.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/andsta3.jpg');
    scene.text('Within a few seconds, Andrey has pushed Stasya\'s shirt up, exposing her perky breasts as his right hand slides up her legs and starts rubbing her pussy through her panties.');
    scene.text('Things start to get more heated before she says something to him, then takes him by the hand before the two of them quickly duck into one of the empty classrooms and close the door. You hear the lock slide into place as you head on your way.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).break_rand ?? 0) === 3) {
          scene.img('images/locations/pavlovsk/school/events/afterschool/braflash.jpg');
          scene.text('As you walk down the hallway, you see several of the gopnik boys giving Pauline a bit of a hard time. She flips them off and shoves the closer ones away.');
          scene.text('Before she walks away, she flips up her shirt to flash them her bra and laughs at their reaction before walking away, the boys calling her a tease as she does.');
          qspCall(s, 'arousal', 'erotic', 1);
          qspCall(s, 'arousal', 'end');
        } else {
          if (((s as any).break_rand ?? 0) === 4) {
            scene.img('images/locations/pavlovsk/school/events/afterschool/nakedgirl\' + rand(1, 2) + \'.jpg');
            scene.text('As you walk down the hallway, you\'re greeted by an unusual sight. A girl from your brother\'s class walking around the hallway naked. When she sees you, she lets out a squeal and runs off before you can ask her what she\'s doing.');
            scene.text('Not feeling like trying to chase a naked girl around school and since it\'s really not your business anyway, you continue on your way.');
            qspCall(s, 'arousal', 'erotic_nudity', 5);
            qspCall(s, 'arousal', 'end');
          } else {
            if (((s as any).break_rand ?? 0) === 5) {
              scene.img('images/locations/pavlovsk/school/events/afterschool/nushflash1.jpg');
              scene.text('As you walk down the hallway, you\'re greeted by a naked Anushka.');
              qspCall(s, 'arousal', 'erotic_nudity', 5, 'unknown');
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Ignore her and leave', goto: ['gschool_grounds', 'main'] },
                { label: 'Ask her what\'s going on', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/nushflash2.jpg');
    // TODO-QSP: dynamic text: You walk up to her and she turns to face you, giving you a full view of everythi...
    scene.text(`You walk up to her and she turns to face you, giving you a full view of everything she has. "What's up, ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('You smile at how casual she is about everything. "You tell me! I was about to ask you the same thing."');
    scene.text('She smiles. "Oh you know, same old same old," she says and you just nod as she gets dressed.');
    scene.text('"I need to go. See you around," she says before turning and heading out.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).break_rand ?? 0) === 6  &&  ((s as any).NatbelQW ?? 0)?.['chrispaid'] <= 2) {
                scene.img('images/locations/pavlovsk/school/events/afterschool/onlypanties.jpg');
                scene.text('As you walk down the hallway, you\'re greeted by an unusual sight. Natasha wearing only her panties as she frantically tries to open her locker.');
                qspCall(s, 'arousal', 'erotic_nudity', 5, 'unknown');
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Ignore her and leave', goto: ['gschool_grounds', 'main'] },
                  { label: 'Ask her what\'s going on', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
    scene.img('images/locations/pavlovsk/school/events/afterschool/onlypanties.jpg');
    scene.text('You walk up to her and she blushes a deep red as she notices you. "What\'s going on? Where are your clothes?" you ask.');
    scene.text('If anything, she blushes even more. "Nothing…" she replies and then, noticing that you don\'t believe her, hastely says "Christina took them. I owed her some money and she took my clothes as interest."');
    scene.text('You nod, knowing Christina can be a real bully.');
    scene.text('"You need any help?" you ask.');
    scene.text('She shakes her head as she opens her locker, pulls out a gym bag and starts getting dressed. "Thanks, but I got it. See you around."');
    scene.text('She finishes getting dressed then hurries away, likely to run home.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).break_rand ?? 0) === 7  &&  ((s as any).soniaQW ?? 0)?.['slut'] >= 3) {
                  scene.img('images/locations/pavlovsk/school/events/afterschool/sonialeash.jpg');
                  scene.text('As you walk down the hallway, you\'re greeted by an unusual sight. Sonia crawling along on all fours, a collar around her neck with a leash attached to it. Vitek holds onto the leash, walking Sonia like a dog with several other gopniks walking along with them.');
                  scene.text('The boys are making crude jokes about Sonia being "their little bitch" and how after the walk, they\'re going to show her "a real good time". Sonia keeps her head down while a few of the gopniks look at at you as they pass. Knowing you couldn\'t do anything about it even if you wanted to, you go on your way.');
                } else {
                  if (((s as any).break_rand ?? 0) === 8) {
                    scene.img('images/locations/pavlovsk/school/events/afterschool/streakers.jpg');
                    scene.text('The hallways are almost completely empty as you leave school, but then you hear giggling. You look up just in time to see two naked girls run by and up the stairs to the second floor of the school. You\'re fairly certain it was Anushka and Alyona.');
                    scene.text('With the little show over, you head out.');
                    qspCall(s, 'arousal', 'erotic_nudity', 5);
                    qspCall(s, 'arousal', 'end');
                  } else {
                    if (((s as any).break_rand ?? 0) === 9) {
                      scene.img('images/locations/pavlovsk/school/events/afterschool/strip1.jpg');
                      scene.text('You\'re running a bit late leaving school and the hallways are deserted. Or so you thought. You hear some voices down one of the corridors and slow down to peek around the corner.');
                      scene.text('You see several of the jock boys and Lariska, who seems unsure about something as you hear the boys encouraging her to give them a peek and show off her great body. She glances up and down the hallway, obviously afraid of being seen, but also just as obviously about to give in to peer pressure…');
                      qspCall(s, 'willpower', 'misc', 'self', 'medium');
                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                        scene.actions([
                          { label: 'Intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A13', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip1.jpg');
    scene.text('You decide to give her an out and head right for her. "There you are! You ready to go?" you ask.');
    scene.text('She seems confused for a second, but quickly nods. She smiles at the boys before the two of you head out.');
    scene.text('The boys grumble as the two of you walk away. Once outside, Lariska thanks you and hurries off.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
                        ]);
                      }
                      scene.actions([
                        { label: 'Ignore what\'s happening and leave', goto: ['gschool_grounds', 'main'] },
                        { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip2.jpg');
    scene.text('After a few seconds, they encourage her to take off her jacket. She seems unsure, but after one more quick glance around, she pulls off her jacket, smiling as the boys whistle and compliment her.');
    scene.text('She seems to be a little more agreeable with it since the boys are complimenting her. They then start encouraging her to show them her underwear.');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A13', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip1.jpg');
    scene.text('You decide to give her an out and head right for her. "There you are! You ready to go?" you ask.');
    scene.text('She seems confused for a second, but quickly nods. She smiles at the boys before the two of you head out.');
    scene.text('The boys grumble as the two of you walk away. Once outside, Lariska thanks you and hurries off.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ignore what\'s happening and leave', goto: ['gschool_grounds', 'main'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip3.jpg');
    scene.text('She hesitates again, but the boys keep encouraging her, pointing out that no one is around and it\'s just her underwear, which covers as much as the bikini they\'ve seen her in anyway. After a few more glances around, she unbuttons her shirt and takes it off, then her skirt, leaving her standing in front of them in her underwear, blushing as the boys really compliment her. You can\'t tell if she\'s blushing from the embarrassment or because she likes the attention.');
    scene.text('The boys then start encouraging her to take off her bra. She now looks a little less confident, looking around and partially using her hands to cover herself up from time to time, but the boys keep complimenting and encouraging her. She resists at first, but she slowly seems to be giving in under the peer pressure.');
    qspCall(s, 'arousal', 'erotic', 5, 'unknown');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A13', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip1.jpg');
    scene.text('You decide to give her an out and head right for her. "There you are! You ready to go?" you ask.');
    scene.text('She seems confused for a second, but quickly nods. She smiles at the boys before the two of you head out.');
    scene.text('The boys grumble as the two of you walk away. Once outside, Lariska thanks you and hurries off.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ignore what\'s happening and leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_grounds', 'main'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip4.jpg');
    scene.text('After a few minutes of encouragement, she finally relents and takes off her bra, showing off her perky breasts to the boys, who now really hoot, whistle and show their appreciation for the little show they\'re getting. She really seems torn between loving it and being ashamed of herself.');
    scene.text('However, the boys aren\'t done and start encouraging her to take her panties off as well, pointing out she\'s already practically naked. Again, you can tell she seems to be on the verge of giving in.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Intervene [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A13', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip1.jpg');
    scene.text('You decide to give her an out and head right for her. "There you are! You ready to go?" you ask.');
    scene.text('She seems confused for a second, but quickly nods. She smiles at the boys before the two of you head out.');
    scene.text('The boys grumble as the two of you walk away. Once outside, Lariska thanks you and hurries off.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ignore what\'s happening and leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_grounds', 'main'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/strip5.jpg');
    scene.text('Finally, she gives in and pulls her panties down and steps out of them. She\'s now completely naked in front of the boys, who seem to be loving the show. She seems torn between enjoying the approval of the boys and the embarrassment of being naked as she lets the boys look at her naked body for a few more minutes before she seems to change her mind and starts to quickly get dressed. The boys try to get her to stay naked, but she gets dressed.');
    scene.text('The boys take it in their stride and comment about how great she looks and how cool she is. Once she\'s dressed, they all leave together, leaving you to go on your way as well.');
    qspCall(s, 'arousal', 'erotic_nudity', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).break_rand ?? 0) === 10) {
                        scene.img('images/locations/pavlovsk/school/events/afterschool/upset.jpg');
                        scene.text('As you walk down the hallway, you see a girl you don\'t know from your brother\'s class sitting on the floor with her head in her hands. She looks visibly upset and you think you can hear sniffs, as if she\'s crying.');
                        scene.actions([
                          { label: 'Ignore her', handler: (st: GameState) => {
    if (((s as any).grupTipe ?? 0) !== 4) {
      qspCall(s, 'mood', 'lower', 'small');
    }
    qspCall(s, 'stat', '');
    // TODO-QSP: 'You feel bad for the girl, but don''t have time to deal with other people''s problems right now.'+i...
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
                          { label: 'Ask if she\'s okay', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/afterschool/upset.jpg');
    scene.text('You stop beside her. "Are you okay?" you ask.');
    scene.text('She looks up, a bit startled. She quickly rubs her eyes, making it very obvious she was crying. "I\'m fine."');
    scene.text('Her tone suggests she\'s anything but fine, but before you can say more she starts to get up, clearly wanting to get away.');
    qspCall(s, 'willpower', 'misc', 'self', ((((s as any).grupTipe ?? 0) !== 4) ? ('easy') : ('')));
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Try to talk her through her troubles [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Try to talk her through her troubles [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'small');
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (2);
    if (((s as any).grupTipe ?? 0) === 4) {
      ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/afterschool/upset.jpg');
    scene.text('When she sees you\'re not going to let her be, she sits back down and starts explaining what happened to her. It sounds like she had a pretty rough day.');
    scene.text('You let her pour out her worries, offering words of comfort and sympathy along the way. In the end, she looks much less distressed and thanks you for listening to her. She insists she\'s okay and that you can go, so you simply offer her a brief hug and go on your way, feeling a bit better about yourself too.');
    scene.actions([
      { label: 'Leave the school', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave her be', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
                        ]);
                      } else {
                        if (((s as any).break_rand ?? 0) === 11) {
                          scene.img('images/locations/pavlovsk/school/events/afterschool/sex/lazarlina.jpg');
                          scene.text('The school is nearly empty and you must be one of the last people left in the building. As you walk past one of the hallways, you catch sight of something, so you stop and peek back around the corner.');
                          scene.text('Halfway down the hallway, you see Lazar leaning against the wall with his pants around his ankles while Lina kneels in front of him, sucking his dick. She seems to be enjoying herself almost as much as he is.');
                          scene.text('After watching them for a few seconds, you decide to leave them in peace and go on your way.');
                          qspCall(s, 'arousal', 'voyeur_sex', 10);
                          qspCall(s, 'arousal', 'end');
                        } else {
                          if (((s as any).break_rand ?? 0) === 12) {
                            scene.img('images/locations/pavlovsk/school/events/afterschool/sex/lenalera.jpg');
                            scene.text('The school is nearly empty and you must be one of the last people left in the building. As you walk past one of the hallways, you catch sight of something, so you stop and peek back around the corner.');
                            scene.text('Down at the end of the hallway, you see Lena leaning against the wall with her skirt pushed up while Lera kneels in front of her with her face buried in her crotch, eating Lena out.');
                            scene.text('After watching them for a few seconds, you decide to leave the girls in peace and go on your way.');
                            qspCall(s, 'arousal', 'voyeur_sex', 10);
                            qspCall(s, 'arousal', 'end');
                          } else {
                            if (((s as any).break_rand ?? 0) === 13  &&  ((s as any).kotovLoveQW ?? 0) <= 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 250  &&  ((s as any).grupTipe ?? 0) === 4) {
                              scene.img('images/characters/shared/headshots_main/big9.jpg');
                              scene.text('As you\'re heading out of school, you see a group of gopniks ahead of you. Just before you walk past them, Vitek steps in front of you and blocks your path. You step away from him, pulling out of his reach as you turn around.');
                              scene.text('You point your finger at him. "Don\'t make me hurt you! You know I will."');
                              // TODO-QSP: dynamic text: He laughs and steps up closer again, crowding you but keeping his hands to himse...
                              scene.text(`He laughs and steps up closer again, crowding you but keeping his hands to himself. "Come on ${((s as any).pcs_nickname ?? 0)}. You know you want to have some fun. Stop acting like you're not all hot and bothered by this. We can help you with that itch."`);
                              qspCall(s, 'willpower', 'bj', 'resist');
                              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                scene.actions([
                                  { label: 'Back off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                ]);
                              } else {
                                scene.actions([
                                  { label: 'Back off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (2);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/lunch/buttflash.mp4');
    scene.text('You snort at him and look at his friends before looking back at him. ');
    scene.text('You wiggle your middle finger at him, flipping him off while pretending you\'re wiggling your finger for another reason. "If I needed something that small to satisfy my itch, I could just use this."');
    scene.text('His friends howl with laughter as he fumes at you. You turn and walk away with a laugh, flashing your ass at them as you do, teasing them on what they\'re missing out on.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
                                ]);
                              }
                              scene.actions([
                                { label: 'Go with them', handler: (st: GameState) => {
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
    qspCall(s, 'fame', 'pav', 'sex', 2);
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('You agree and they lead you to the men\'s room, where they all crowd around you in a circle and unzip their pants.');
    scene.text('The walls of the restroom are covered in crude texts, quite a few of them involving you in some way.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
      // TODO-QSP: dynamic text: "<b><<$pcs_nickname>> <<$pcs_lastname>> = <<$gnikname>>"</b> is scrawled across ...
      scene.text(`"<b>${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)} = ${((s as any).gnikname ?? 0)}"</b> is scrawled across one of the walls in large letters.`);
    }
    scene.actions([
      { label: 'Start sucking', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A11');
    qspCall(s, 'npcStat', 'A10', 'a');
    qspCall(s, 'npcStat', 'A9', 'b');
    qspCall(s, 'npcStat', 'A157', 'c');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    // TODO-QSP: dynamic text: You kneel down and wrap your <<$pc_desc['lips']>> lips around <<$boydesc>>'s har...
    scene.text(`You kneel down and wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips around ${((s as any).boydesc ?? 0)}'s hard cock and start sucking. Not forgetting the others, you spend some time alternating between all the cocks, stroking the ones you're not sucking with your hands.`);
    // TODO-QSP: dynamic text: Finally, you feel his cum hit the back of your throat and <<$boydesc>> moans. "T...
    scene.text(`Finally, you feel his cum hit the back of your throat and ${((s as any).boydesc ?? 0)} moans. "That's right bitch! Swallow it all like a good little slut." ${((s as any).boydesc ?? 0)} seems satisfied and tucks his cock back in his pants.`);
    scene.text('You immediately switch to another cock and receive another mouthful from him. You carefully swallow his load as well, which earns you a nod of approval and a pat on the head. "Good little whore."');
    // TODO-QSP: dynamic text: He moves aside as well and you finish off the last two guys. As you get up off y...
    scene.text(`He moves aside as well and you finish off the last two guys. As you get up off your knees, you hear one of them laugh. "You're the best cock sucker we got, ${((s as any).pcs_nickname ?? 0)}!" they say as they leave you alone in the bathroom, more horny than when you started.`);
    scene.text('"Fucking assholes!" you yell after them before you clean up and leave.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID2 ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID3 ?? 0), 'group', 'sub');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID3 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
                              ]);
                            } else {
                              if (((s as any).break_rand ?? 0) === 13  &&  ((s as any).kotovLoveQW ?? 0) <= 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 300  &&  ((s as any).grupTipe ?? 0) !== 4) {
                                scene.img('images/characters/shared/headshots_main/big9.jpg');
                                scene.text('As you\'re heading out of school, you see a group of gopniks ahead of you. Just before you walk past them, Vitek steps in front of you and blocks your path.');
                                scene.text('You look at Vitek with contempt. "What the fuck do you want?"');
                                // TODO-QSP: dynamic text: He's not impressed in the slightest. "I'll show you what the fuck I want, slut."...
                                scene.text(`He's not impressed in the slightest. "I'll show you what the fuck I want, slut." He suddenly grabs you by the hair and presses your face against his desk. "What I want is your lips around my dick, right now. Everyone already knows you're a ${((s as any).gnikname ?? 0)}, so you better start acting like it or there will be consequences."`);
                                scene.text('He turns to his friends. "Come on boys, this whore doesn\'t understand her place in life. It\'s about time we show her."');
                                qspCall(s, 'gschool_events', 'rand_boy_arg', 0, 1, 0, 0, 0, 0);
                                if (((s as any).npc_rel ?? 0)?.[String((s as any).school_static_num ?? 0)] > 50  &&  ((s as any).npc_gender ?? 0)?.[String((s as any).school_static_num ?? 0)] === 0  &&  ((s as any).npc_grupTipe ?? 0)?.[String((s as any).school_static_num ?? 0)] === 2) {
                                  // TODO-QSP: dynamic text: As you try and pull away, <<$rand_boy>> comes over, pulls the gopnik off you and...
                                  scene.text(`As you try and pull away, ${((s as any).rand_boy ?? 0)} comes over, pulls the gopnik off you and turns to him. "Leave her alone!"`);
                                  scene.text('The gopnik turns towards him and narrows his eyes. "Or what, pussy?"');
                                  // TODO-QSP: dynamic text: <<$rand_boy>> steps up close, crowding him. "Or I'll kick your fucking ass right...
                                  scene.text(`${((s as any).rand_boy ?? 0)} steps up close, crowding him. "Or I'll kick your fucking ass right here, right now!"`);
                                  scene.text('They start shoving each other, but before more can happen a teacher interrupts. "What\'s going on here? Break it up, all of you!"');
                                  // TODO-QSP: dynamic text: Everyone goes their own way as the teacher watches and you word a thank you to <...
                                  scene.text(`Everyone goes their own way as the teacher watches and you word a thank you to ${((s as any).rand_boy ?? 0)} as you slip away.`);
                                  scene.actions([
                                    { label: 'Continue', goto: ['gschool_grounds', 'main'] },
                                  ]);
                                } else {
                                  qspCall(s, 'willpower', 'bj', 'resist');
                                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                    scene.actions([
                                      { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                    ]);
                                  } else {
                                    scene.actions([
                                      { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/resistgop.jpg');
    scene.text('You manage to pull away from him, but the others are blocking you. You back up, but eventually find your back against one of the walls and turn your head away from him.');
    scene.text('The boy leans in close to you. "Just do as you\'re told or this will be a lot worse for you."');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Threaten to scream [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Threaten to scream [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/events/resistgop.jpg');
    scene.text('"I\'ll scream and when the teachers arrive, I\'ll tell them that you tried to rape me!"');
    scene.text('He fumes and leans in close. "You\'ll regret this slut! I promise."');
    scene.text('He then relents and leaves with the others following him, all giving you looks you would rather not think about.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to the men\'s room with them', goto: ['gschool_events1', 'toilet_bj1'] },
    ]);
  } },
                                    ]);
                                  }
                                  scene.actions([
                                    { label: 'Go to the men\'s room with them', goto: ['gschool_events1', 'toilet_bj1'] },
                                  ]);
                                }
                              } else {
                                if (((s as any).break_rand ?? 0) <= 16) {
                                  scene.img('images/locations/pavlovsk/school/events/afterschool/leavingsch.jpg');
                                  scene.text('As you\'re leaving school, you pass by one of the classrooms and think you hear something inside.');
                                  scene.actions([
                                    { label: 'Ignore it and leave', goto: ['gschool_grounds', 'main'] },
                                    { label: 'Take a peek', goto: ['gschool_events', 'afterschool_classroom_events'] },
                                  ]);
                                } else {
                                  scene.actions([{ label: 'Continue', goto: ['gschool_grounds', 'main'] }]);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  }
  scene.build();
}

function enterAfterschoolClassroomEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).soniaQW ?? 0)?.['slut'] === 5) {
    (s as any).break_rand = Math.floor(Math.random() * 9) + 1;
  } else {
    (s as any).break_rand = Math.floor(Math.random() * 8) + 1;
  }
  if (((s as any).break_rand ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/school/events/afterschool/classroom/girlsnudeboy.jpg');
    scene.text('You step over to the classroom door, look up and down the hallway and see no one around. You gently pull the door open just a crack and peek inside.');
    scene.text('You notice Lavrenti sitting at one of the desks completely naked while Pauline, Lera and Lena are sitting on a desk near him. You\'re not sure what\'s going on as you can\'t quite make out what they\'re saying, but the girls are teasing him about something.');
    scene.text('You decide you\'d rather not get caught spying, so you gently close the door and hurry away.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
  } else {
    if (((s as any).break_rand ?? 0) === 2) {
      scene.img('images/locations/pavlovsk/school/events/afterschool/classroom/nudegirl\' + rand(1, 2) + \'.jpg');
      scene.text('You step over to the classroom door, look up and down the hallway and see no one around. You gently pull the door open just a crack and peek inside.');
      scene.text('You see a girl from your brother\'s class sitting at a desk completely naked, talking softly to someone out of view. You can\'t tell what they\'re talking about, but she seems happy about it.');
      scene.text('You decide you\'d rather not get caught spying, so you gently close the door and hurry away.');
      qspCall(s, 'arousal', 'voyeur', 5);
      qspCall(s, 'arousal', 'end');
    } else {
      if (((s as any).break_rand ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/school/events/afterschool/classroom/nudegirls2.jpg');
        scene.text('You step over to the classroom door, look up and down the hallway and see no one around. You gently pull the door open just a crack and peek inside.');
        scene.text('Within are two naked girls standing at the teachers desk facing the back of the classroom. They\'re giggling and laughing while looking at something outside of your view, most likely another person at the back of the classroom, who they seem to be teasing or modeling for.');
        scene.text('You decide you\'d rather not get caught spying, so you gently close the door and hurry away.');
        qspCall(s, 'arousal', 'voyeur', 5);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).break_rand ?? 0) === 4) {
          scene.img('images/locations/pavlovsk/school/events/afterschool/classroom/nudegirls1.jpg');
          scene.text('You step over to the classroom door, look up and down the hallway and see no one around. You gently pull the door open just a crack and peek inside.');
          scene.text('Two naked girls sit at one of the desks with books in front of them. They look unhappy about what\'s going on as you hear a male voice tell them to start reading. It sounds like one of the teachers, but you can\'t tell as his voice is low and partially muffled.');
          scene.text('You decide you\'d rather not get caught spying, so you gently close the door and hurry away.');
          qspCall(s, 'arousal', 'voyeur', 5);
          qspCall(s, 'arousal', 'end');
        } else {
          if (((s as any).break_rand ?? 0) === 5) {
            scene.img('images/locations/pavlovsk/school/events/afterschool/classroom/nudepunish.jpg');
            scene.text('You step over to the classroom door, look up and down the hallway and see no one around. You gently pull the door open just a crack and peek inside.');
            scene.text('You see Ms. Braakman sitting at her desk, a stern look on her face as a cane rests across her lap. She\'s watching a naked girl standing at the blackboard writing something. From your angle, you can\'t tell who the girl is or what she\'s writing.');
            scene.text('After a few seconds, Ms. Braakman smacks the girl\'s bare ass with her cane, causing her to yelp and start writing faster. Ms. Braakman says something, but you can\'t make it out.');
            scene.text('You decide you\'d rather not get caught spying and likely end up in this position yourself, so you gently close the door and hurry away.');
            qspCall(s, 'arousal', 'voyeur', 5);
            qspCall(s, 'arousal', 'end');
          } else {
            if (((s as any).break_rand ?? 0) === 6) {
              scene.img('images/locations/pavlovsk/school/events/afterschool/classroom/sex/bjstudent.jpg');
              scene.text('You step over to the classroom door, look up and down the hallway and see no one around. You gently pull the door open just a crack and peek inside.');
              scene.text('Lazar is standing near the windows as Lizaveta kneels before him with his cock in her mouth, sucking him off. His moans get louder until he sighs and his cock starts twitching as he cums in her mouth.');
              scene.text('You quickly close the door and hurry away before you get caught, wondering if you should start spreading some rumors and see how Lizaveta likes it for once.');
              qspCall(s, 'arousal', 'voyeur', 10);
              qspCall(s, 'arousal', 'end');
            } else {
              if (((s as any).break_rand ?? 0) === 7) {
                scene.img('images/locations/pavlovsk/school/events/afterschool/classroom/sex/bjteacher.jpg');
                scene.text('You step over to the classroom door, look up and down the hallway and see no one around. You gently pull the door open just a crack and peek inside.');
                scene.text('Mr. Kuznetsov is standing near his desk with his pants around his ankles as Ms. Orlov kneels before him sucking his dick. His moans get louder until he sighs and his cock starts twitching as he cums in her mouth.');
                scene.text('You quickly close the door and hurry away before you get caught.');
                qspCall(s, 'arousal', 'voyeur_sex', 10);
                qspCall(s, 'arousal', 'end');
              } else {
                if (((s as any).break_rand ?? 0) === 8) {
                  scene.img('images/locations/pavlovsk/school/afterschool/sex/marcus_irina.mp4');
                  scene.text('You gently pull the door open just a crack and peek inside. You\'re greeted by the sight of Marcus sitting in a chair with his pants around his ankles as a half naked Irina kneels in front of him, using her breasts to pleasure him.');
                  scene.text('"I can feel your big, hard cock throbbing… You like it when I use my tits like this, don\'t you?" she says teasingly with a flirty smile.');
                  scene.text('Marcus just groans as she stops titfucking him and swirls her tongue around the tip of his cock. "You want me to suck it and make you cum?" she asks with a giggle and he nods.');
                  scene.text('"Too bad," she replies as she stands up and pulls her panties down before bending over the teacher\'s desk. "Eat my pussy first and I\'ll think about it," she says as she flips her skirt up.');
                  scene.text('You take this as your cue to leave before you\'re caught.');
                  qspCall(s, 'arousal', 'voyeur_sex', 10);
                  qspCall(s, 'arousal', 'end');
                } else {
                  if (((s as any).break_rand ?? 0) === 9  &&  ((s as any).soniaQW ?? 0)?.['slut'] === 5) {
                    scene.img('images/locations/pavlovsk/school/lunch/school.jpg');
                    scene.text('As you walk past the Computer Science classroom, you hear a strange moaning coming from inside.');
                    scene.actions([
                      { label: 'See what\'s happening', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.teach0,\'+rand(0, 1)+\'.jpg');
    scene.text('You carefully look around the corner, trying to see inside the classroom. You see Sonia and Mr. Ivanov, both half naked. Sonia did her best to look the part, even wearing glasses to complete her look as a desperate schoolgirl in need of help.');
    scene.text('Her good grades in his class suddenly make perfect sense; Mr. Ivanov doesn\'t miss his chance to take advantage of the school slut in exchange for a decent grade. Sonia is currently giving him a very skillful blowjob, really giving it her all; you can see Mr. Ivanov\'s cock glistening with saliva all the way from where you\'re standing.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/school/sonia.teach1,0.jpg');
    scene.text('When Mr. Ivanov has had enough of her mouth, he pulls her up by her hair and turns her around, having her put her hands on his desk before he slides his slick cock into her pussy, fucking her from behind.');
    scene.text('He\'s quite rough about it, but Sonia doesn\'t seem to mind at all and moans like a wanton whore. Realizing the loud moans might attract more attention from outside the class, you leave before anyone finds you staring.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
                    ]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterSweet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'normal'  ||  ((s as any).locArgs?.[1] ?? 0) === '') {
    if (((s as any).class ?? 0)?.['school_grade_average'] >= 90) {
      (s as any).sweet_talk = 10;
    } else {
      if (((s as any).class ?? 0)?.['school_grade_average'] >= 80) {
        (s as any).sweet_talk = 5;
      } else {
        if (((s as any).class ?? 0)?.['school_grade_average'] >= 70) {
          (s as any).sweet_talk = 0;
        } else {
          if (((s as any).class ?? 0)?.['school_grade_average'] >= 60) {
            (s as any).sweet_talk = (-5);
          } else {
            if (((s as any).class ?? 0)?.['school_grade_average'] >= 50) {
              (s as any).sweet_talk = (-10);
            } else {
              (s as any).sweet_talk = (-20);
            }
          }
        }
      }
    }
    if (((s as any).grupTipe ?? 0) === 1) {
      (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (10);
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (5);
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (20);
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (10);
          }
        }
      }
    }
    if (((s as any).pcs_chrsm ?? 0) < 20) {
      (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (20);
    } else {
      if (((s as any).pcs_chrsm ?? 0) < 40) {
      } else {
        if (((s as any).pcs_chrsm ?? 0) < 60) {
          (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (10);
        } else {
          if (((s as any).pcs_chrsm ?? 0) < 80) {
            (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (20);
          } else {
            if (((s as any).pcs_chrsm ?? 0) < 90) {
              (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (30);
            } else {
              (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (40);
            }
          }
        }
      }
    }
    (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (Math.floor(Math.random() * 11) + 0);
    if (((s as any).pcs_hotcat ?? 0) < 5) {
      (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + ((((s as any).pcs_hotcat ?? 0) - 5) * 5);
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'sex') {
      if (((s as any).class ?? 0)?.['school_grade_average'] >= 90) {
        (s as any).sweet_talk = (-20);
      } else {
        if (((s as any).class ?? 0)?.['school_grade_average'] >= 80) {
          (s as any).sweet_talk = (-10);
        } else {
          if (((s as any).class ?? 0)?.['school_grade_average'] >= 70) {
            (s as any).sweet_talk = 0;
          } else {
            if (((s as any).class ?? 0)?.['school_grade_average'] >= 60) {
              (s as any).sweet_talk = 5;
            } else {
              if (((s as any).class ?? 0)?.['school_grade_average'] >= 50) {
                (s as any).sweet_talk = 10;
              } else {
                (s as any).sweet_talk = 20;
              }
            }
          }
        }
      }
      if (((s as any).grupTipe ?? 0) === 1) {
        (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (10);
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (10);
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (40);
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (20);
            }
          }
        }
      }
      if (((s as any).pcs_chrsm ?? 0) < 20) {
        (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - (20);
      } else {
        if (((s as any).pcs_chrsm ?? 0) < 40) {
        } else {
          if (((s as any).pcs_chrsm ?? 0) < 60) {
            (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (10);
          } else {
            if (((s as any).pcs_chrsm ?? 0) < 80) {
              (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (20);
            } else {
              if (((s as any).pcs_chrsm ?? 0) < 90) {
                (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (30);
              } else {
                (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (40);
              }
            }
          }
        }
      }
      (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) + (Math.floor(Math.random() * 21) + 15);
      if (((s as any).pcs_hotcat ?? 0) < 5) {
        (s as any).sweet_talk = ((s as any).sweet_talk ?? 0) - ((((s as any).pcs_hotcat ?? 0) - 5) * 5);
      }
    }
  }
  scene.build();
}

function enterRandBoyArg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).school_static_num ?? 0) !== 'A0') {
  }
  scene.build();
}

function enterRandBoyArg1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :rnd_boy1_loop
  if (((s as any).school_static_num ?? 0) !== 'A0') {
    if (((s as any).rand_boy ?? 0) === ((s as any).rand_boy1 ?? 0)) {
      // TODO-QSP: jump 'rnd_boy1_loop'
    }
  }
  scene.build();
}

function enterRandGirlArg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).school_static_num ?? 0) !== 'A0') {
  }
  scene.build();
}

function enterRandGirlArg1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :rnd_girl1_loop
  if (((s as any).school_static_num ?? 0) !== 'A0') {
    if (((s as any).rand_girl ?? 0) === ((s as any).rand_girl1 ?? 0)) {
      // TODO-QSP: jump 'rnd_girl1_loop'
    }
  }
  scene.build();
}

function enterRandTeacherArg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).school_static_num ?? 0) !== 'A0') {
  }
  scene.build();
}

function enterRandomPers(s: GameState, scene: SceneBuilder): void {
  (s as any).tmpArrIdx = 0;
  // TODO-QSP: :rand_pers_fill_loop
  if (((s as any).schoolenable ?? 0)?.[String((s as any).school_static_num ?? 0)] === 1  &&  (((s as any).locArgs?.[1] ?? 0) === -1  ||  ((s as any).npc_gender ?? 0)?.[String((s as any).school_static_num ?? 0)] === ((s as any).locArgs?.[1] ?? 0))  &&  (((s as any).npc_grupTipe ?? 0)?.[String((s as any).school_static_num ?? 0)] === ((s as any).locArgs?.[2] ?? 0)  ||  ((s as any).npc_grupTipe ?? 0)?.[String((s as any).school_static_num ?? 0)] === ((s as any).locArgs?.[3] ?? 0)*2  ||  ((s as any).npc_grupTipe ?? 0)?.[String((s as any).school_static_num ?? 0)] === ((s as any).locArgs?.[4] ?? 0)*3  ||  ((s as any).npc_grupTipe ?? 0)?.[String((s as any).school_static_num ?? 0)] === ((s as any).locArgs?.[5] ?? 0)*4  ||  ((s as any).npc_grupTipe ?? 0)?.[String((s as any).school_static_num ?? 0)] === ((s as any).locArgs?.[6] ?? 0)*5  ||  ((s as any).npc_grupTipe ?? 0)?.[String((s as any).school_static_num ?? 0)] === ((s as any).locArgs?.[7] ?? 0)*6)) {
    // TODO-QSP: $tmpCandidateArr[] = $school_static_num
  }
  (s as any).tmpArrIdx = ((s as any).tmpArrIdx ?? 0) + (1);
  if (((s as any).tmpArrIdx ?? 0) < Object.keys((s as any).school_static_num ?? {}).length) {
    // TODO-QSP: jump 'rand_pers_fill_loop'
  }
  if (Object.keys((s as any).tmpCandidateArr ?? {}).length > 0) {
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'teacher_greet':
      enterTeacherGreet(s, scene);
      break;
    case 'break_events':
      enterBreakEvents(s, scene);
      break;
    case 'leave_break_events2':
      enterLeaveBreakEvents2(s, scene);
      break;
    case 'afterschool_events':
      enterAfterschoolEvents(s, scene);
      break;
    case 'afterschool_classroom_events':
      enterAfterschoolClassroomEvents(s, scene);
      break;
    case 'sweet':
      enterSweet(s, scene);
      break;
    case 'rand_boy_arg':
      enterRandBoyArg(s, scene);
      break;
    case 'rand_boy_arg1':
      enterRandBoyArg1(s, scene);
      break;
    case 'rand_girl_arg':
      enterRandGirlArg(s, scene);
      break;
    case 'rand_girl_arg1':
      enterRandGirlArg1(s, scene);
      break;
    case 'rand_teacher_arg':
      enterRandTeacherArg(s, scene);
      break;
    case 'random_pers':
      enterRandomPers(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_events: LocationDef = {
  name: 'gschool_events',
  title: 'You walk down the corridor, past countless classrooms. On th',
  region: 'other',
  enter: enter,
};
