import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMiraApologise(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).gadboyday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/turn_back.jpg');
  scene.text('Walking through the village, you hear someone catching up to you. Turning around, you see Mira nearing you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    qspCall(st, 'miroslava', 'miraclothes');
    scene.text('Mira immediately ran up to you and started gossiping.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I heard what happened," She gasped for breath. "I overheard ...
    scene.text(`"${((st as any).pcs_nickname ?? '')}, I heard what happened," She gasped for breath. "I overheard Mitka and Kolyamba."`);
    scene.text('You stood there in silence, waiting for her to catch her breath and see what she\'d say.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you ever forgive me for acting like a fool? I treated ...
    scene.text(`"${((st as any).pcs_nickname ?? '')}, could you ever forgive me for acting like a fool? I treated you like shit," she continued. "I had an epiphany and realized you're my only true friend here."`);
    scene.text('"So what now?" you asked, looking at her.');
    scene.text('"Well, if you want, I can make it up to you?" she answered, a bit embarrassed.');
    scene.text('While you ponder what to answer, Mira stares at you, biting her lip impatiently.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    ((st as any).MiraVars = (st as any).MiraVars ?? {})['had_sex'] = 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'miroslava', 'miraclothes');
    scene.text('You finally decide what to answer.');
    scene.text('"Okay, I agree to a truce," you say, smiling, genuinely filled with joy ending all the drama. "I forgive you."');
    scene.text('"And…?" Mira asks you.');
    scene.text('Instead of answering her, you grab her by the arm and pull her into the bushes.');
    scene.actions([
      { label: 'Continue', goto: ['mirasex', 'miralick_first'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    ((st as any).MiraVars = (st as any).MiraVars ?? {})['had_sex'] = 3;
    qspCall(st, 'stat', '');
    qspCall(st, 'miroslava', 'miraclothes');
    scene.text('You finally decide what to answer.');
    scene.text('"Okay, I agree to a truce," you say, smiling, genuinely filled with joy that all the drama has ended. "I forgive you."');
    scene.text('"And…?" Mira asks you.');
    scene.text('"No, Mira, I don\'t want anything more from you," you reply. "I\'m not sexually interested in girls."');
    scene.text('"Well, if you ever change your mind…" said Mira. "Let\'s get back to the village."');
    scene.text('You walk back to the village, gossiping about the boys from the village.');
    scene.actions([
      { label: 'Go back to the village', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMitkaApologise(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).gadboyday = ((s as any).daystart ?? 0);
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['river_gang'] = 4;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/turn_back.jpg');
  scene.text('Walking through the village, you hear someone catching up to you. Turning around, you see Mitka running towards you. Knowing from experience that boys are faster runners, you stop and wait for him to catch up.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Mitka Pin</b></center>');
    scene.img('images/characters/shared/headshots_main/big63.jpg');
    scene.text('Mitka catches up to you and strikes up a conversation.');
    // TODO-QSP: dynamic text: "Listen, <<$pcs_nickname>>. I beat up the other guys," he said with a smirk, see...
    scene.text(`"Listen, ${((st as any).pcs_nickname ?? '')}. I beat up the other guys," he said with a smirk, seeing the fear on your face. "I told them not to touch you anymore, and if they want anything to do with you, they have to come and speak to me first."`);
    scene.text('You stood silently and waited to see what more he had to say.');
    scene.text('"In short, I remember you as one of my best childhood friends, so I don\'t want to argue anymore about Mira," he said with a grin. "Friends?"');
    if (((st as any).MiraVars ?? 0)?.['QW'] >= 12) {
      scene.text('"So you won\'t have sex with Mira anymore?" you ask, relieved.');
      scene.text('"Don\'t worry, Mira won\'t mind." Mitka snickered.');
      scene.text('"You must stop having sex with her." you look at Mitka with distrust.');
      scene.text('"Well, what can I do. If she begs me to do it, I can\'t promise I\'ll say no." he laughed. "Well, I think we\'re all set. I\'ll try to avoid Mira… But I won\'t say no if she begs me to fuck her."');
      scene.text('Mitka starts walking towards Kolyamba\'s house. You watch him for a while until he disappears behind a corner.');
    } else {
      if (((st as any).MiraVars ?? 0)?.['QW'] >= 3) {
        scene.text('"And you must stop having sex with Mira." you look at Mitka with distrust.');
        scene.text('"Well, what can I do. If she begs me to do it, I can\'t promise I\'ll say no." he laughed. "Well, I think we\'re all set. I\'ll try to avoid Mira… But I won\'t say no if she begs me to fuck her."');
        scene.text('Mitka starts walking towards Kolyamba\'s house. You watch him for a while until he disappears behind a corner.');
      }
    }
    scene.actions([
      { label: 'Go back to the village', goto: ['gadukino', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGangApologise(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).gadboyday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/turn_back.jpg');
  scene.text('Walking through the village, you suddenly hear someone calling out to you. Turning back, you see that it is Stepan coming your way. Remembering his recent participation in the village gangbang makes you pick up your pace. There is no way you want to deal with it right now.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, wait, I need to speak with you," Stepan yelled from afar, se...
  scene.text(`"${((s as any).pcs_nickname ?? '')}, wait, I need to speak with you," Stepan yelled from afar, seeing that you were getting ready to run away.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Run away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/girl_escapes.jpg');
    scene.text('You started running away from the road, not stopping before you felt you were in the clear.');
    scene.text('"Good thing I ran away from that pervy bastard. I cannot believe how much I\'ve looked up to him." you thought, looking around.');
    scene.actions([
      { label: 'Continue', goto: ['gad_meadow', 'start'] },
    ]);
  } },
    { label: 'Wait and see', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Stepan</b></center>');
    scene.img('images/characters/shared/headshots_main/big171.jpg');
    scene.text('For a moment, you hesitate, wondering what he wants. Then, while contemplating whether to stay or run away, he catches up with you. He shifts nervously from foot to foot, clearly not knowing how to begin the conversation. You look puzzled at him, thinking he would be prepared, when he finally speaks up.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, -uh," he began but immediately faltered. "I''m truly sorry f...
    scene.text(`"${((st as any).pcs_nickname ?? '')}, -uh," he began but immediately faltered. "I'm truly sorry for what happened the other day… I don't know what came over us. It was like a demon possessed me. I got aroused by Mitka's drunken tales of you."`);
    scene.text('He looked at you with sorrow in his eyes. But, of course, you did not expect anyone to be sorry.');
    scene.text('"I had a talk with the other men in the morning, and, uh," Stepan lost his composure. "Well, I decided I wanted to talk to you. So I apologize and ask if you could forget about yesterday… But, again, I\'m sorry and worried we might have damaged you physically."');
    scene.text('You look sceptically at your "uncle", not knowing if he\'s joking.');
    scene.actions([
      { label: 'Okay…', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/10000.jpg');
    scene.text('Feeling that you\'re still skeptical, Stepan reached into his sweatpants and pulled out a bundle, handing it over to you.');
    // TODO-QSP: dynamic text: "Here," he showed the money in your hand. "It''s <<$func(''money'', ''string_pro...
    scene.text(`"Here," he showed the money in your hand. "It's ${qspFunc(s, 'money', 'string_profit', 10000)}."`);
    scene.text('"What do you want me to do with this?" you asked, somewhat annoyed.');
    scene.text('"I don\'t know, you can do whatever you want with it," replied Uncle Stepan. "Spend it on something relaxing, or buy yourself something nice."');
    scene.text('Not knowing what to choose, you look at the money, then at your "uncle."');
    qspCall(st, 'willpower', 'prostitution', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).GadBoy = (st as any).GadBoy ?? {})['river_gang'] = 3;
    qspCall(st, 'willpower', 'prostitution', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    scene.text('"I don\'t need your fucking money. I\'m not a prostitute or a whore" you said in a firm voice, clearly annoyed, looking straight into Stepan\'s eyes. "You think you can buy my silence with some money? Are you really that dumb?"');
    scene.text('He starts acting anxiously, telling you once more to take the money. "I\'ve already said I don\'t want your fucking money! But you don\'t need to worry. I won\'t tell anyone what happened." you sternly tell him.');
    scene.text('"That\'s a relief…" Stepan says. "I\'ll be on my way."');
    scene.text('Just as you were leaving, Stepan added:');
    // TODO-QSP: dynamic text: "One last thing <<$pcs_nickname>>. None of the men will try to fuck you like tha...
    scene.text(`"One last thing ${((st as any).pcs_nickname ?? '')}. None of the men will try to fuck you like that anymore. Mitka warned everyone that if it happens again, their cannon would be shooting blanks for the rest of their life… So if anyone approaches you, you come to me, and I'll sort it out."`);
    scene.text('"I understand…" you answer, turning away and walking away from him.');
    scene.text('"There is no way I can really trust them, is there?" you think to yourself gloomily and wonder which area of the village you should try to avoid…');
    scene.actions([
      { label: 'Walk back to the village', goto: ['gadukino', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take the money', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).GadBoy = (st as any).GadBoy ?? {})['river_gang'] = 2;
    qspCall(st, 'prostitution_functions', 'set_gadukino_prostitute');
    qspCall(st, 'money', 'earn', 10000);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/take_money.jpg');
    scene.text('"Okay, I accept your money," you finally decide. "Let\'s just try to move on from that crazy day."');
    scene.text('You take the money from his hand.');
    scene.text('"That\'s a relief…" Stepan says. "I\'ll be on my way."');
    scene.text('You were about to turn and leave when Stepan added:');
    // TODO-QSP: dynamic text: "And yeah… <<$pcs_nickname>>, none of the men will fuck you like that again. So ...
    scene.text(`"And yeah… ${((st as any).pcs_nickname ?? '')}, none of the men will fuck you like that again. So there's no need to be afraid."`);
    scene.text('"I understand…" you answer, turning away and walking away from him.');
    scene.text('"So village men will continue to fuck me, they just won\'t outright rape me." you think to yourself gloomily and wonder why you allowed things to become like this…');
    scene.text('What will your life in Gadukino be like now?');
    scene.actions([
      { label: 'Walk back to the village', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGadriverGang(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['river_gang'] = 1;
  (s as any).gadboyday = ((s as any).daystart ?? 0);
  ((s as any).npc_QW = (s as any).npc_QW ?? {})['A63'] = 21;
  if (((s as any).pcs_health ?? 0) <= 100) {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (100);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/river/gadriver_gang.jpg');
  scene.text('You walk by yourself and get lost in your thoughts. You pass by a crowd of drunken men from the village but decide not to pay them attention. Then, seeing you\'re alone, the drunkards turn their attention to you.');
  scene.text('One of the men grabs your arm and forcefully leads you away from the village\'s main path as the rest of the men cheer and follow you.');
  scene.text('They remove all your clothes and leer at your naked body before surrounding you on all sides. Then, they take out their cocks and start to stroke, getting ready for an outdoor gangbang.');
  scene.text('You think about running away or resisting, but consider your tattered reputation and how men from the village are already treating you.');
  scene.text('You don\'t even have the will to stop or give a damn about your imminent fuck fest.');
  scene.text('One of the men puts both of his hands on your shoulders and not so gently pushes you down on your knees. You sighed and opened your mouth willingly, resigned to your fate…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start to suck', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all', 'VillageRiver');
    qspCall(st, 'npcgeneratec', '0', 'drunk man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_oral1.jpg');
    scene.text('You caress and start to please one of the men with your mouth while bringing pleasure to two other men with your hands. Stroking and jerking their hardened cocks.');
    qspCall(st, 'arousal', 'hj', 5, 'sub', 'gangbang');
    qspCall(st, 'arousal', 'bj', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck the next guy', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'some country guy', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'a');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_oral2.jpg');
    scene.text('You turn the other way and start sucking on the cock you\'ve been stroking…');
    scene.text('You give him a wink before twisting the tip of your tongue on the head of the man\'s penis. You received a demanding and appreciative groan in return.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Two cocks at once', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'some country guy', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'b');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_oral3.jpg');
    // TODO-QSP: dynamic text: The drunk and horny men continue to line up, one after another. Finally, some me...
    scene.text(`The drunk and horny men continue to line up, one after another. Finally, some men are impossibly horny that you are stuffed with two cocks in your mouth at once. You eventually suck each of them off, embracing and welcoming their hard penis with your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips, pleasuring them all.`);
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make the first trio cum', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).boy1 ?? 0), 1);
    qspCall(st, 'cum_call', 'stomach', ((st as any).boy2 ?? 0), 1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_cum1.jpg');
    scene.text('It doesn\'t take long before the first group of men finish, cumming in your mouth and on your face and tits. After that, you feel pretty accomplished and enjoy the feeling of warm and gooey cum sliding down your face and dripping onto your body.');
    scene.text('However, you soon return to your senses at a loud cheering sound around you and start to suck the rest of the men.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get penetrated', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'some country man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog1.jpg');
    scene.text('You actually feel a bit ecstatic from all that has happened and want to experience more of it.');
    scene.text('You didn\'t even notice when and how, but you\'re now on all-fours in front of the men. Your wiggle and sticks out your butt in anticipation. One of the men plunges his cock into your wet and willing vagina from behind. In contrast, another man fucks your throat quite enthusiastically.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue the sex fest', goto: ['gadukino_event', 'gadriver_gang2'] },
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

function enterGadriverGang2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npcgeneratec', '0', 'man', (Math.floor(Math.random() * 27) + 19));
  qspCall(s, 'boyStat', '$npclastgenerated');
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog2.jpg');
  scene.text('The man that fucks your pussy slows down after a good while of wild and savage thrusting. Then, another man taps him on the shoulder and takes his place, then proceed to hammer your vagina just the same.');
  scene.text('All the men near you are greeted by your moans of pleasure and your begging for them to fuck you and use your holes harder.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).protect = (Math.floor(Math.random() * 2) + 0);
  (s as any).pose = 1;
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    qspCall(s, 'dinsex', 'sexcum');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let the men fuck your ass', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'drunk man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog3.jpg');
    // TODO-QSP: dynamic text: The third man was in no hurry to to start pounding your pussy, instead you felt ...
    scene.text(`The third man was in no hurry to to start pounding your pussy, instead you felt his index finger probing and exploring your ${((st as any).anustipe ?? '')} anus.`);
    if (((st as any).pcs_ass ?? 0) <= 5) {
      scene.text('"Well, well, what a tight hole you have here…" you hear a male voice from behind you. "Let me help you stretch it out."');
    }
    if (((st as any).pcs_ass ?? 0) <= 10) {
      scene.text('You could only muffle in protest since your mouth was busy servicing another man.');
    }
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri');
    qspCall(st, 'dinsex', 'analsex');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'gangbang');
    qspCall(st, 'arousal', 'anal_finger', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A63');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog2.jpg');
    scene.text('The next man, wanting to outdo the man before, grabbed his cock, thrust it into your anus, and started to relentlessly slamming into your eager butt.');
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri');
    qspCall(st, 'dinsex', 'analsex');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'gangbang', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lie on your back', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A171');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_mis1.jpg');
    scene.text('You\'re on your back. You move your head, wanting to see who\'s about to ravage you next, and you see Stepan, the fisherman, the man you are close to and found of…');
    scene.text('You look into his eyes and ask him not to do this while Stepan readies his cock between your splayed legs… You only hear him say, "I\'ve been fantasizing about this for a long time."');
    scene.text('Your eyes widen in shock as Stepan\'s full length enters your body, and you feel your heart break a little. To the drunk Stepan, you are nothing but a lubricated meat tunnel that exists only to please his cock.');
    scene.text('Stepan starts to groan and soon finishes, releases his load inside you, stumbles off to the side, and soon falls into a peaceful slumber…');
    scene.text('You take your mind off him and bite inside your cheek as you realize there are still many men left waiting to be pleasured…');
    (st as any).pose = 0;
    (st as any).protect = (Math.floor(Math.random() * 2) + 0);
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(st, 'dinsex', 'sexcum');
    }
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'village man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_mis2.jpg');
    scene.text('The next man lifts your leg up to allow himself better access to your pussy with his impressive cock.');
    scene.text('You enjoy the sensation and moan out quite unabashedly as the tip of the man\'s cock presses lightly against your cervix.');
    scene.text('The man who has been fucking your mouth soon tenses up and cups your face as he ejaculates into your mouth. You swallow his cum without much thought and lick your upper lips seductively at him.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'gangbang', 'rough');
    (st as any).protect = (Math.floor(Math.random() * 2) + 0);
    (st as any).pose = 0;
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(st, 'dinsex', 'sexcum');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Vasyan\'s turn', goto: ['gadukino_event', 'gadriver_gang3'] },
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

function enterGadriverGang3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'boyStat', 'A62');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  scene.img('images/locations/gadukino/sex/river/gadriver_gang_mis3.jpg');
  scene.text('You see another familiar face, this time, it\'s Vasyan.');
  scene.text('"Mitka and Kolyamba are also here somewhere, waiting for their turn", he says and smiles wickedly at you.');
  scene.text('You shudder as he parts your pussy lips with his hands and then buries his lengthy cock deep inside you.');
  scene.text('Vasyan fucks your pussy hard, and without tenderness, your begging does nothing to slow down his unfaltering and domineering thrust. Your ecstatic moans soon fill the air…');
  scene.text('Vasyan start to tense up and climax. He releases his load on your stomach, and with his own hand, he mushes your cum and spreads it on your skin…');
  scene.text('He walks off and receives loud cheering and high-fives from men, leaving you a quivering mess on the ground with still many cocks to serve…');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
  (s as any).protect = (Math.floor(Math.random() * 2) + 0);
  (s as any).pose = 0;
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    qspCall(s, 'dinsex', 'sexcum');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kneel and suck', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).pcs_health ?? 0) <= 100) {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (100);
    }
    qspCall(st, 'npcgeneratec', '0', 'unknown drunk guy', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_oral4.jpg');
    scene.text('The men decide to give you a short rest from fucking, so the next group of men are here for you to please them with your mouth.');
    scene.text('They tell you to get on your knees and order you to suck. You nod meekly and start to kiss and caress their cocks before opening your mouth to serve them.');
    scene.actions([
      { label: 'Make them cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'npcgeneratec', '0', 'unknown drunk guy', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang');
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    qspCall(st, 'npcgeneratec', '0', 'unknown drunk guy', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang');
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_cum2.jpg');
    scene.text('You can feel their cocks pulsate, getting hotter and harder. Finally, the trio of men cry out in pleasure, and one holds your head in place as the rest of them orgasm and coat your face with their cum.');
    scene.text('They steady themselves after a moment and start to walk away while receiving high-fives from other men. Then, finally, they tell you they definitely want to group fuck you and fill your little holes next time.');
    scene.text('You blush at the crude and lewd compliments but bat your eyelashes at them at hollering and laughing men around you.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Bend over again', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog5.jpg');
    scene.text('After the short rest, you\'re ready to be fucked again as the remaining men cheer you on.');
    scene.text('They tell you to be on all fours and stick out your butt. Then, one of the men starts to mount you from behind and starts to fuck you in earnest.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
    (st as any).pose = 1;
    (st as any).protect = (Math.floor(Math.random() * 2) + 0);
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(st, 'dinsex', 'sexcum');
    }
    scene.text('The men cum inside you, slowly backing out from you, feeling satisfied. Then, he proclaimed loudly that he loves fucking your pussy and proceeded to motorboat you despite the presence of other men\'s cum.');
    scene.text('The crowd laughs and gives him a thumbs up as the man takes his leaves.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Please them all', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'unfamiliar guy', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog6.jpg');
    scene.text('The next trio of men stepped up while arguing about who will get to fuck you first…');
    scene.text('You give those men your best come-hither look and beg them just come here to cock-roast you!');
    scene.text('The men chuckle, and soon you receive your wish of pleasuring three cocks at once and again.');
    scene.text('These men are fucking you quite ferociously and without wanting to slow down…');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
    (st as any).protect = (Math.floor(Math.random() * 2) + 0);
    (st as any).pose = 1;
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(st, 'dinsex', 'sexcum');
    }
    scene.text('They soon cum all over your body. Finally, one of them twisted your nipples lightly before giving you a wink before they all departed.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue the sex fest', goto: ['gadukino_event', 'gadriver_gang4'] },
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

function enterGadriverGang4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'guy', (Math.floor(Math.random() * 27) + 19));
  qspCall(s, 'boyStat', '$npclastgenerated');
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog7.jpg');
  scene.text('Then someone else grabs your hips and starts to penetrate your ass.');
  (s as any).protect = (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri');
  qspCall(s, 'dinsex', 'analsex');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Slow down a little', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'Drunk man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog8.jpg');
    scene.text('Next up is a drunk man barely able to stand up straight. His cock is pretty limp, as he\'s having difficulty getting an erection. However, he doesn\'t seem to mind much as he enters your anus.');
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri');
    qspCall(st, 'dinsex', 'analsex');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Another one', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A172');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog9.jpg');
    if (((st as any).hunterVars ?? 0)?.['were_met'] === 0) {
      scene.text('You squint a little to see who\'s next in line while sucking someone\'s cock. But, instead, you see an unknown village man penetrating your ass.');
    }
    if (((st as any).hunterVars ?? 0)?.['were_met'] === 1) {
      scene.text('When another man starts penetrating your ass, you squint a little to see who it is, and to your horror, Andrei is thrusting away. There\'s no doubt that Igor and Sergei will find out…');
    }
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri');
    qspCall(st, 'dinsex', 'analsex');
    scene.text('Andrei cums and whispers, "You better prepare to serve me, or I\'ll tell the others everything…"');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Kolyamba\'s waiting', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'a man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dog10.jpg');
    scene.text('While you are sucking the men near you. In the corner of your eye, you notice Kolyamba stepping up and getting ready for his turn with you.');
    scene.text('You whimper a little as another man plunges deep inside you, hard and fast.');
    scene.text('"What a good little fuck doll, so ready and willing to please, huh?" Kolyamba grins, and he watches as you keep copulating with others.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'gangbang');
    (st as any).pose = 1;
    (st as any).protect = (Math.floor(Math.random() * 2) + 0);
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(st, 'dinsex', 'sexcum');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Kneel again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).pcs_health ?? 0) <= 100) {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (100);
    }
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_oral5.jpg');
    scene.text('You suddenly realize that no one is fucking your pussy or ass.');
    scene.text('"I hope that that was the last one, it was okay, but my body feels sore all over." you think.');
    scene.text('This turns out to be wishful thinking as other naked drunken men soon occupy the empty space around you again.');
    scene.text('You kneel obediently in front of the men, and several shove their cocks to your face immediately.');
    scene.actions([
      { label: 'Continue on', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'stranger', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_cow1.jpg');
    scene.text('"And now, let the little nympho fuck puppy work herself for a while." you hear someone say. Then, turning your head, you see a naked man lying on the ground and gesture to get on top of him.');
    scene.text('You climb on top of him and start grinding up and down his cock, lost in the pleasure every time his cock impales you.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
    (st as any).protect = (Math.floor(Math.random() * 2) + 0);
    (st as any).pose = 0;
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(st, 'dinsex', 'sexcum');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Impale yourself onto the next cock', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'drunk guy', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_cow2.jpg');
    scene.text('Another guy lies down beside the man that you\'re currently riding. Again, you climb on top of him and proceed to fuck him just as hard and without hesitation.');
    scene.text('Someone else steps up to you with his cock at your face level. You respond immediately by opening your mouth and beginning to suck.');
    (st as any).dick = (Math.floor(Math.random() * 11) + 10);
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    (st as any).protect = (Math.floor(Math.random() * 2) + 0);
    (st as any).pose = 1;
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(st, 'dinsex', 'sexcum');
    }
    scene.actions([
      { label: 'Continue on', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'a man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_cow3.jpg');
    scene.text('You see a third man lying on the ground, and you might as well just do it. So you climb on top of him as well.');
    (st as any).protect = (Math.floor(Math.random() * 2) + 0);
    (st as any).pose = 1;
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'dinsex', 'sexcum');
    }
    scene.text('Bouncing on the cock of another guy, you suddenly hear the voice of Kolyamba.');
    scene.text('"Fuck yeah, finally. I was fucking getting tired of waiting. It is worth it, though." He winks as you blush.');
    // TODO-QSP: dynamic text: He immediately grabs and shoves his cock in your <<$anustipe>> anus.
    scene.text(`He immediately grabs and shoves his cock in your ${((st as any).anustipe ?? '')} anus.`);
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Who\'s next?', goto: ['gadukino_event', 'gadriver_gang5'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGadriverGang5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'unknown man', (Math.floor(Math.random() * 27) + 19));
  qspCall(s, 'boyStat', '$npclastgenerated');
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'boyStat', 'A61', 2);
  // TODO-QSP: npc_had_sex[$boy[2]] = 1
  scene.img('images/locations/gadukino/sex/river/gadriver_gang_dp1.jpg');
  scene.text('Kolyamba and the other man start double pounding you. The feeling you\'re experiencing is indescribable.');
  scene.text('"Wow, a sandwich," you hear someone\'s drunken laughter followed by other drunkards.');
  scene.text('Kolyamba soon finishes like others and takes a moment to compose himself.');
  scene.text('Kolyamba tells you that Mitka takes off already to visit Mira because he doesn\'t want to wait any longer.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-5), (((s as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sandwiched again', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'a villager', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    qspCall(st, 'npcgeneratec', '0', 'a man', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'b');
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_dp2.jpg');
    scene.text('The following two men appreciating the joke, start fucking you also simultaneously.');
    scene.text('Kolyamba gives them a nod before he takes off.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-5), ((st as any).npcID2 ?? 0), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'End in sight', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).pcs_health ?? 0) <= 100) {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (100);
    }
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_oral6.jpg');
    scene.text('Finally, with a handful of men left, you want this village-gang-fuck-slash-rape-fest to end. You are sore all over, even in places you didn\'t know existed.');
    scene.text('You gesture for them to gather around you as you kneel down again. Then, you began sucking them off and double-fisting, pumping some cock, trying to finish them off quickly.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck the last men off', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npcgeneratec', '0', 'stranger', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'a');
    qspCall(st, 'npcgeneratec', '0', 'stranger', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'b');
    qspCall(st, 'npcgeneratec', '0', 'stranger', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'c');
    qspCall(st, 'npcgeneratec', '0', 'stranger', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'd');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy1 ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).boy2 ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_cum3.jpg');
    scene.text('Not unlike the final dash of a runner. You give it all into sucking and pleasuring the remaining men.');
    scene.text('Your endeavour didn\'t go unnoticed. Some men began to groan appreciatively and start cumming in your mouth, and some on your face.');
    scene.text('There was so much sperm that your chest and abdomen also got covered.');
    scene.actions([
      { label: 'Finally finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy3 ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).boy4 ?? 0), 1);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/river/gadriver_gang_cum4.jpg');
    scene.text('The crowd began to disperse when the last men finally came, leaving you wrapped in a tattered blanket. You hear them sharing impressions of their drunken antics.');
    scene.text('Some of them even give you a thumbs up. You just don\'t know what to feel about this whole thing…');
    scene.text('You hated being forced into anything, but it would be a lie that you did not enjoy at some level as well…');
    scene.text('More importantly, what will you do now, and how will you face people in the village?');
    scene.text('"Best to clean up first and deal with the consequences later." You think to yourself.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'outfit', 'wear_last_worn');
    qspGoto(st, 'gad_beach', 'start');
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

function enterGadukinoMitka(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Mitka Shkvoryen</b></center>');
  scene.img('images/characters/shared/headshots_main/big63.jpg');
  scene.text('Walking through the village, you meet Mitka. Seeing you, he started rubbing his crotch and said with a grin.');
  // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>, let''s have some fun getting rid of this boner you gave...
  scene.text(`"Hey, ${((s as any).pcs_nickname ?? '')}, let's have some fun getting rid of this boner you gave me."`);
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A63', (-3));
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You tell him to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with him', goto: ['mitkasex', 'gad1', 'A63'] },
  ]);
  scene.build();
}

function enterGadukinoKolyamba(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolyamba Pyut</b></center>');
  scene.img('images/characters/shared/headshots_main/big61.jpg');
  scene.text('Walking through the village, you meet Kolyamba. Seeing you, he reached into his pants and started playing with his balls. He then grabbed you by the arm and dragged you into the bushes next to the road.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A61', (-3));
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You tell him to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with him', goto: ['mitkasex', 'gad1', 'A61'] },
  ]);
  scene.build();
}

function enterGadukinoVasyan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vasyan Paket</b></center>');
  scene.img('images/characters/shared/headshots_main/big62.jpg');
  scene.text('Walking through the village, you meet Vasyan. Seeing you, he smiled and waved you over to him. He kisses you and asks you to join him as he walks into the bushes next to the road.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A62', (-3));
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You tell him to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with him', goto: ['mitkasex', 'gad1', 'A62'] },
  ]);
  scene.build();
}

function enterGadukino_2boys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 8) {
    scene.img('images/locations/gadukino/village/2boys.1.jpg');
  } else {
    scene.img('images/locations/gadukino/village/2boys.2.jpg');
  }
  if (String((s as any).locArgs?.[1] ?? '') === '1') {
    ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).daystart ?? 0);
    ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).daystart ?? 0);
    scene.text('Walking through the village, you meet Mitka and Kolyamba. Seeing you, they grin, grab you by the arms and drag you into the bushes.');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === '2') {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).daystart ?? 0);
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).daystart ?? 0);
      scene.text('Walking through the village, you meet Mitka and Vasyan. Seeing you, they grin, grab you by the arms and drag you into the bushes.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === '3') {
        ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).daystart ?? 0);
        ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).daystart ?? 0);
        scene.text('Walking through the village, you meet Kolyamba and Vasyan. Seeing you, they grin, grab you by the arms and drag you into the bushes.');
      }
    }
  }
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    if (Math.max(parseFloat(((st as any).locArgs?.[1] ?? 0)), ((st as any).locArgs?.[1] ?? 0)) === 1) {
      qspCall(st, 'npc_relationship', 'modify', 'A63', (-3));
      qspCall(st, 'npc_relationship', 'modify', 'A61', (-3));
    } else {
      if (Math.max(parseFloat(((st as any).locArgs?.[1] ?? 0)), ((st as any).locArgs?.[1] ?? 0)) === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A63', (-3));
        qspCall(st, 'npc_relationship', 'modify', 'A62', (-3));
      } else {
        if (Math.max(parseFloat(((st as any).locArgs?.[1] ?? 0)), ((st as any).locArgs?.[1] ?? 0)) === 3) {
          qspCall(st, 'npc_relationship', 'modify', 'A61', (-3));
          qspCall(st, 'npc_relationship', 'modify', 'A62', (-3));
        }
      }
    }
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You tell them to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with them', goto: ['mitkasex', 'gad2'] },
  ]);
  scene.build();
}

function enterMiraMitka(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Mitka Shkvoryen</b></center>');
  scene.img('images/characters/shared/headshots_main/big63.jpg');
  scene.text('Walking with Mira in the village, you met Mitka. Seeing you and Mira, he starts playing with his balls and says with a grin.');
  scene.text('"Oh hey, girls, let\'s have some fun getting rid of this boner you both gave me."');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A63', (-3));
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You take Mira by the hand and tell him to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with him', goto: ['mitkasex', 'forest1', 'A63'] },
  ]);
  scene.build();
}

function enterMiraKolyamba(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolyamba Pyut</b></center>');
  scene.img('images/characters/shared/headshots_main/big61.jpg');
  scene.text('Walking with Mira in the village, you meet Kolyamba. Seeing you and Mira, he starts playing with his balls and tries to grab you both by the hand.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A61', (-3));
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You take Mira by the hand and tell him to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with him', goto: ['mitkasex', 'forest1', 'A61'] },
  ]);
  scene.build();
}

function enterMiraVasyan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vasyan Paket</b></center>');
  scene.img('images/characters/shared/headshots_main/big62.jpg');
  scene.text('Walking with Mira in the village, you meet Vasyan. Seeing you and Mira, he smiles and tries to grab you both by the hand.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A62', (-3));
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You take Mira by the hand and tell him to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with them', goto: ['mitkasex', 'forest1', 'A62'] },
  ]);
  scene.build();
}

function enterMira_2boys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 8) {
    scene.img('images/locations/gadukino/village/2boys.1.jpg');
  } else {
    scene.img('images/locations/gadukino/village/2boys.2.jpg');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).daystart ?? 0);
    ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).daystart ?? 0);
    scene.text('Walking with Mira in the village, you meet Mitka and Kolyamba. Seeing you both, they smile at each other and drag you both into the bushes.');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).daystart ?? 0);
      ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).daystart ?? 0);
      scene.text('Walking with Mira in the village, you meet Mitka and Vasyan. Seeing you both, they smile at each other and drag you both into the bushes.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).daystart ?? 0);
        ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).daystart ?? 0);
        scene.text('Walking with Mira in the village, you meet Kolyamba and Vasyan. Seeing you both, they smile at each other and drag you both into the bushes.');
      }
    }
  }
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    if (String((st as any).locArgs?.[1] ?? '') === 1) {
      qspCall(st, 'npc_relationship', 'modify', 'A63', (-3));
      qspCall(st, 'npc_relationship', 'modify', 'A61', (-3));
    } else {
      if (String((st as any).locArgs?.[1] ?? '') === 2) {
        qspCall(st, 'npc_relationship', 'modify', 'A63', (-3));
        qspCall(st, 'npc_relationship', 'modify', 'A62', (-3));
      } else {
        if (String((st as any).locArgs?.[1] ?? '') === 3) {
          qspCall(st, 'npc_relationship', 'modify', 'A61', (-3));
          qspCall(st, 'npc_relationship', 'modify', 'A62', (-3));
        }
      }
    }
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You take Mira by the hand and tell them to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with them', goto: ['mitkasex', 'forest2', 'ARGS[1]'] },
  ]);
  scene.build();
}

function enterMira_3boys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['mitka_day'] = ((s as any).daystart ?? 0);
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['kolyamba_day'] = ((s as any).daystart ?? 0);
  ((s as any).GadBoy = (s as any).GadBoy ?? {})['vasyan_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 8) {
    scene.img('images/locations/gadukino/village/3boys.1.jpg');
  } else {
    scene.img('images/locations/gadukino/village/drunk.jpg');
  }
  scene.text('Walking with Mira in the village, you meet Mitka, Kolyamba, and Vasyan. Seeing you both, they smile at each other and drag you both into the bushes.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A63', (-3));
    qspCall(st, 'npc_relationship', 'modify', 'A62', (-3));
    qspCall(st, 'npc_relationship', 'modify', 'A61', (-3));
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You take Mira by the hand and tell them to go away while quickly walking away in the other direction.');
    scene.actions([
      { label: 'Walk away', goto: ['gadukino', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with them', goto: ['mitkasex', 'forest3'] },
  ]);
  scene.build();
}

function enterSound(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >=11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >=1  &&  ((s as any).month ?? 0) <=3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mira_apologise':
      enterMiraApologise(s, scene);
      break;
    case 'mitka_apologise':
      enterMitkaApologise(s, scene);
      break;
    case 'gang_apologise':
      enterGangApologise(s, scene);
      break;
    case 'gadriver_gang':
      enterGadriverGang(s, scene);
      break;
    case 'gadriver_gang2':
      enterGadriverGang2(s, scene);
      break;
    case 'gadriver_gang3':
      enterGadriverGang3(s, scene);
      break;
    case 'gadriver_gang4':
      enterGadriverGang4(s, scene);
      break;
    case 'gadriver_gang5':
      enterGadriverGang5(s, scene);
      break;
    case 'gadukino_mitka':
      enterGadukinoMitka(s, scene);
      break;
    case 'gadukino_kolyamba':
      enterGadukinoKolyamba(s, scene);
      break;
    case 'gadukino_vasyan':
      enterGadukinoVasyan(s, scene);
      break;
    case 'gadukino_2boys':
      enterGadukino_2boys(s, scene);
      break;
    case 'mira_mitka':
      enterMiraMitka(s, scene);
      break;
    case 'mira_kolyamba':
      enterMiraKolyamba(s, scene);
      break;
    case 'mira_vasyan':
      enterMiraVasyan(s, scene);
      break;
    case 'mira_2boys':
      enterMira_2boys(s, scene);
      break;
    case 'mira_3boys':
      enterMira_3boys(s, scene);
      break;
    case 'sound':
      enterSound(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gadukino_event: LocationDef = {
  name: 'gadukino_event',
  title: 'Mitka Pin',
  region: 'gadukino',
  enter: enter,
};
