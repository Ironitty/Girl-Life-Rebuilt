import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFirstdate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
  scene.img(`images/locations/shared/park/walk_${Math.floor(Math.random() * 2) + 1}.jpg`);
  scene.text('You enjoy a pleasant walk in the park while making small talk with Artem.');
  scene.text('After a while, you end up near the movie theater. Artem\'s eyes light up when he sees it. "Hey, let\'s go see a movie!"');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Sounds like fun', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/shared/cinema/kino_${Math.floor(Math.random() * 3) + 1}.jpg`);
    scene.text('You enter the movie theater with Artem. After he buys the tickets and some popcorn, candy and soda for the two of you, you head into the dark theater and find some seats in the back row to watch the movie.');
    scene.actions([
      { label: 'Leave the theater', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/shared/park/walk_${Math.floor(Math.random() * 2) + 1}.jpg`);
    if ((Math.floor(Math.random() * 5) + 1) === 1  &&  ((s as any).hour ?? 0) >= 20) {
      scene.text('When the movie ends, you and Artem leave the theater and he offers to walk you home. The two of you head back through the park, but see a group of older gopniks hanging out around a bench just up ahead. They\'re drinking and are a little rowdy.');
      scene.actions([
        { label: 'Just walk past them', goto: ['artem_date_events', 'artemGopSkver'] },
      ]);
    } else {
      scene.text('When the movie ends, you and Artem leave the theater and he offers to walk you home.');
      // TODO-QSP: dynamic text: Arriving outside your apartment door, Artem stops and looks at you. "I had fun, ...
      scene.text(`Arriving outside your apartment door, Artem stops and looks at you. "I had fun, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('You smile at him. "Me too."');
      scene.text('He smiles widely. "Great! Maybe we can do it again some time?"');
      scene.text('You nod. "Maybe. We\'ll see."');
      scene.text('He smiles and nods. "Okay, I better get home. Talk to you later."');
      scene.text('"Bye Artem," you reply and he walks back down the stairs to his apartment.');
      scene.actions([
        { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Just keep walking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/shared/park/walk_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('You don\'t really feel like going to the cinema. "Let\'s just enjoy the walk we\'re on."');
    if ((Math.floor(Math.random() * 5) + 1) === 1  &&  ((s as any).hour ?? 0) >= 20) {
      scene.text('Artem is happy enough to just spend time with you, regardless of what the two of you are doing. He nods as you continue on your walk, talking about everyday things. After walking for a while, you see a group of older gopniks hanging out around a bench just up ahead. They\'re drinking and are a little rowdy.');
      scene.actions([
        { label: 'Just walk past them', goto: ['artem_date_events', 'artemGopSkver'] },
      ]);
    } else {
      scene.text('Artem is happy enough to just spend time with you, regardless of what the two of you are doing. He nods as you continue on your walk, talking about everyday things. After a while, he checks his watch. "We should be getting back. I\'ll walk you to your door."');
      // TODO-QSP: dynamic text: Once you're outside your apartment door, Artem stops and looks at you. "I had fu...
      scene.text(`Once you're outside your apartment door, Artem stops and looks at you. "I had fun, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('You smile at him. "Me too."');
      scene.text('He smiles widely. "Great! Maybe we can do it again some time?"');
      scene.text('You nod. "Maybe. We\'ll see."');
      scene.text('He smiles and nods. "Okay, I better get home. Talk to you later."');
      scene.text('"Bye Artem," you reply and he walks back down the stairs to his apartment.');
      scene.actions([
        { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterArtemDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
  scene.actions([{ label: 'Continue', goto: ['artem_date_events', 'firstdate'] }]);
  scene.build();
}

function enterArtemGopSkver(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/walkgop.jpg');
  if (((s as any).grupTipe ?? 0) === 4) {
    scene.text('Just as you\'re about to make it past them, several of the gopniks get in your way, making a circle around you. You\'ve seen them around before, but don\'t really know them.');
    // TODO-QSP: dynamic text: Somehow, one of them knows your name. They look at you with disdain and the lead...
    scene.text(`Somehow, one of them knows your name. They look at you with disdain and the leader of their group says "${((s as any).pcs_nickname ?? 0)}? What are you doing with this bitch?"`);
    scene.actions([
      { label: 'Tell them to mind their own business', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
    scene.img('images/pc/reactions/fuckoff1.jpg');
    scene.text('You give them a look of disdain showing you\'re not impressed. "Mind your own fucking business," you reply and Artem tenses up beside you.');
    scene.text('The leader laughs. "Come on, don\'t be like that. Dump this loser and have some fun with us, girl."');
    scene.text('You push your way past him and flip them the bird. Fortunately, other than throwing a few taunting remarks at you, they leave you alone. Once you make it away from them, Artem relaxes a little and walks you home.');
    // TODO-QSP: dynamic text: Arriving at your apartment, Artem smiles. "I had fun <<$pcs_nickname>>, you know...
    scene.text(`Arriving at your apartment, Artem smiles. "I had fun ${((s as any).pcs_nickname ?? 0)}, you know other than when we ran into those gopniks. I can't believe you said that!"`);
    scene.text('You smile back at him. "They respect strength and attitude. Don\'t take their shit and they will respect you for it, just be willing to back it up if you have to. Anyway, I had fun too."');
    scene.text('He smiles widely. "Great! I\'m glad you had fun, maybe we can do it again some time?"');
    scene.text('You nod. "Maybe. We\'ll see."');
    scene.text('He smiles and nods. "Okay, I better get home. Talk to you later."');
    scene.text('"Bye Artem," you reply and he walks back down the stairs to his apartment.');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } else {
    scene.text('Just as you\'re about to make it past them, several of the gopniks get in your way, making a circle around you and Artem.');
    // TODO-QSP: dynamic text: You don't recognize them, yet one of them knows your name. They look at you with...
    scene.text(`You don't recognize them, yet one of them knows your name. They look at you with disdain and the leader of their group says "${((s as any).pcs_nickname ?? 0)}? What are you doing with this bitch?"`);
    scene.actions([
      { label: 'Ignore them and keep walking', handler: (st: GameState) => {
    (s as any).gopniktrouble = Math.floor(Math.random() * 2) + 1;
    if (((s as any).gopniktrouble ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/walkgop.jpg');
      scene.text('The leader steps directly in front of Artem and the others close in, giving you nowhere to go as the leader speaks to Artem. "This is our part of the park and you owe us a toll for using it. Pay it and your girl can pass, bitch."');
      scene.text('You can tell Artem is scared and will likely do what they ask. You don\'t want him to lose all his money, but saying something could make things worse.');
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stand up to them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stand up to them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['artem_date_events', 'stand_up'] },
        ]);
      }
      scene.actions([
        { label: 'Say nothing', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/walkgop.jpg');
    scene.text('Artem glances at you, then reaches into his pocket and pulls out his wallet. The leader snatches it away and pulls out all the money before throwing the empty wallet back at Artem\'s face. "God, what a bitch. Come on guys, drinks are on this loser!" he says with a laugh and they all walk away. Artem blushes and picks up his wallet before he walks you back to your apartment. He doesn\'t say anything until you reach your door.');
    // TODO-QSP: dynamic text: "I had fun <<$pcs_nickname>>, you know other than when we ran into those gopniks...
    scene.text(`"I had fun ${((s as any).pcs_nickname ?? 0)}, you know other than when we ran into those gopniks."`);
    scene.text('You smile at him. "Yeah, it was a little scary. Sorry they took all your money, but I had fun too."');
    scene.text('He smiles. "Don\'t worry about it. I keep most of my money in the bank, so they didn\'t get much. I\'m glad you had fun though. Maybe we can do it again some time?"');
    scene.text('You nod. "Maybe. We\'ll see."');
    scene.text('He smiles and nods. "Okay, I better get home. Talk to you later."');
    scene.text('"Bye Artem," you reply and he walks back down the stairs to his apartment.');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
      ]);
    } else {
      scene.img(`images/locations/shared/park/walk_${Math.floor(Math.random() * 2) + 1}.jpg`);
      scene.text('You hold Artem\'s hand tightly and pick up the pace, pretending you didn\'t hear the gopniks as you quickly walk away from them. Fortunately, other throwing a few taunting remarks at you, they leave you alone. Once you make it away from them, Artem relaxes a little and walks you home.');
      // TODO-QSP: dynamic text: Arriving at your apartment, Artem smiles. "I had fun <<$pcs_nickname>>, you know...
      scene.text(`Arriving at your apartment, Artem smiles. "I had fun ${((s as any).pcs_nickname ?? 0)}, you know other than when we ran into those gopniks."`);
      scene.text('You smile back at him. "Yeah, it was a little scary. I had fun too though."');
      scene.text('He smiles widely. "Great! Maybe we can do it again some time?"');
      scene.text('You nod. "Maybe. We\'ll see."');
      scene.text('He smiles and nods. "Okay, I better get home. Talk to you later."');
      scene.text('"Bye Artem," you reply and he walks back down the stairs to his apartment.');
      scene.actions([
        { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
      ]);
    }
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stand up to them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stand up to them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['artem_date_events', 'stand_up'] },
    ]);
  }
  scene.build();
}

function enterStandUp(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/walkgop.jpg');
  scene.text('"He\'s not a bitch! Artem is my friend!" you indignantly reply');
  scene.text('The gopnik walks up to Artem and pokes him in the chest. "Oh really?" he asks. "What do you think, bitch? Are you a bitch or what?"');
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get between them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get between them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'set', 0);
    qspCall(s, 'npc_relationship', 'modify', 'A2', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/walkgop_knee.jpg');
    scene.text('You quickly get in between Artem and the gopnik, shielding him with your body. "Don\'t touch him or I\'ll call the police!" you say in your most threatening manner.');
    // TODO-QSP: dynamic text: The gopnik isn't impressed. He pulls out a knife and puts it against your throat...
    scene.text(`The gopnik isn't impressed. He pulls out a knife and puts it against your throat. "Why are you wasting your time with this loser, ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('You can see his friends slowly encroaching around you. There\'s no way you can run away now.');
    scene.text('You look into his eyes and sigh. "Come on, just let us leave. Please? You can take my money."');
    scene.text('The gopnik is satisfied with that prospect, and lowers the knife. After you give him all your money, he lets you and Artem leave. You feel bad for getting robbed like that, but you still feel you did the right thing. Who knows what they would\'ve done to Artem if you didn\'t get involved?');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img(`images/locations/shared/park/walk_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('Once you make it away from them, Artem relaxes a little. Artem walks you back home.');
    // TODO-QSP: dynamic text: Arriving at your apartment, Artem smiles. "I had fun <<$pcs_nickname>>, you know...
    scene.text(`Arriving at your apartment, Artem smiles. "I had fun ${((s as any).pcs_nickname ?? 0)}, you know other than when we ran into those gopniks."`);
    scene.text('You smile back at him. "Yeah, it was a little scary, but I had fun too."');
    scene.text('He smiles widely. "Great! Maybe we can do it again some time?"');
    scene.text('You nod. "Maybe. We\'ll see."');
    scene.text('He smiles and nods. "Okay, I better get home. Talk to you later."');
    scene.text('"Bye Artem," you reply and he walks back down the stairs to his apartment.');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Watch in silence', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/walkgop_udar.jpg');
    scene.text('"I\'m not a bitch…", Artem says quietly.');
    scene.text('The gopnik grins. "We\'ll see about that!"');
    scene.text('He hits Artem hard in the stomach, causing him to buckle over and fall to his knees. The gopnik and his friends laugh while Artem lies groaning on the ground.');
    // TODO-QSP: dynamic text: He then turns to you. "Everyone can see he's a bitch, <<$pcs_nickname>>. What do...
    scene.text(`He then turns to you. "Everyone can see he's a bitch, ${((s as any).pcs_nickname ?? 0)}. What do you even see in him? Seriously…" An evil smirk then appears on his face. "So… you really like him? Enough to help him out of this mess he talked himself into?"`);
    scene.text('He places a hand on your shoulder. "There is something you can do… A striptease! If it\'s a good one, we\'ll leave him alone. Someone play some music." The other gopniks all laugh.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'humiliation', 'resist', 'hard');
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
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/walkgop_udar2.jpg');
    scene.text('"Wait, what!?" you answer. "No way, you perverts! Just leave us alone!"');
    scene.text('The gopnik walks back over to Artem and kicks him in the face. A few seconds later, one of his friends also kicks Artem in the back and they\'re all soon kicking him. You can\'t take it anymore and quickly throw yourself on top of Artem so they can\'t continue.');
    scene.text('The gopnik looks down at the two of you and spits on the ground. "Fucking bitch needs his girl to save him. What a loser!"');
    scene.text('The gopniks leave you alone and go deeper into the park as you carefully help Artem to his feet.');
    scene.text('He wipes the blood from his face, deeply embarrassed that you had to see him like this. You walk in silence as you help him get home.');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, but you can go now." Not sure what to say, you do as ...
    scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, but you can go now." Not sure what to say, you do as he asks and leave.`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Dance for them', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/strip1.jpg');
    // TODO-QSP: dynamic text: You start awkwardly dancing to the music and are immediately chastised. "We said...
    scene.text(`You start awkwardly dancing to the music and are immediately chastised. "We said striptease, ${((s as any).pcs_nickname ?? 0)}! Not dance!"`);
    scene.text('You nod and slowly start slowly undressing to the music while trying to avoid their greedy looks.');
    // TODO-QSP: dynamic text: Artem notices what's happening. "<<$pcs_nickname>>, stop! You don't have to do t...
    scene.text(`Artem notices what's happening. "${((s as any).pcs_nickname ?? 0)}, stop! You don't have to do this!"`);
    scene.text('The gopnik kicks him in the ribs. "Shut up, bitch! She\'s saving your ass, so show some respect!"');
    scene.text('Artem is too afraid to argue with them as you awkwardly remove your top, showing off your breasts which finally gets them hooting, hollering and laughing.');
    scene.actions([
      { label: 'Strip naked', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'mood', 'lower', 'medium');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/strip2.jpg');
    if (((s as any).pcs_hotcat ?? 0) <= 4) {
      scene.text('You slowly remove all of your clothes until you\'re completely naked in front of them and they turn off the music. The leader walks up to you with a scowl. "Fuck, you\'re even uglier naked. I didn\'t think that was even possible. Put some clothes on before I throw up." The others all burst out laughing before they all walk away laughing. You quickly get dressed as Artem struggles to his feet and wipes the blood from his face, deeply embarrassed you had to see him like this. You walk in silence as you help him get home.');
      scene.text('Once you get him home, you help him to bed. "You didn\'t have to do that."');
      scene.text('You smile at him. "I couldn\'t let them hurt you like that."');
      scene.text('He frowns. "I would have healed! Anyway, I could use some rest, so see you later okay?" He rolls over, obviously not wanting to talk anymore, so you get up and leave.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: You slowly remove all of your clothes until you're completely naked in front of ...
      scene.text(`You slowly remove all of your clothes until you're completely naked in front of them and they turn off the music. They all gather round you as the leader grins. "Not bad, ${((s as any).pcs_nickname ?? 0)}. You've got nice tits, just a shame that you're wasting them on him. Now you're going to suck all us off. If you do a good job, we'll let you go."`);
      scene.text('Trying to fight them all would most likely result in you getting the shit beat out of you and raped. Maybe you can make a run for it if you distract them first?');
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Fight them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Fight them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['artem_date_events', 'fight_gang'] },
        ]);
      }
      qspCall(s, 'willpower', 'group', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Run away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'group', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).escape = ((s as any).pcs_stren ?? 0) + ((s as any).pcs_run ?? 0);
    if (((s as any).escape ?? 0) < 50) {
      (s as any).artemRand = Math.floor(Math.random() * 10) + 1;
    } else {
      (s as any).artemRand = Math.floor(Math.random() * 5) + 1;
      if (((s as any).escape ?? 0) >= 100  &&  ((s as any).escape ?? 0) < 150) {
        (s as any).artemRand = Math.floor(Math.random() * 2) + 1;
      } else {
        (s as any).artemRand = 1;
      }
      if (((s as any).artemRand ?? 0) === 1) {
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/school/boy/artem/walk_save.jpg');
        scene.text('You look around and suddenly shout in a random direction. "Dad, I\'m over here!"');
        scene.text('As the gopniks turn to see who you\'re shouting at, you quickly grab Artem by the arm and start running. When you\'re sure the gopniks are no longer following you, you find a quiet area and put your clothes back on as Artem wipes the blood from his face, deeply embarrassed you had to see him like this. You walk in silence as you help him get home.');
        scene.text('Once you get him home, you help him to bed. "You didn\'t have to do that," he remarks.');
        scene.text('You smile at him. "I couldn\'t let them hurt you like that."');
        scene.text('He frowns. "I would have healed! Anyway, I could use some rest, so see you later okay?" He rolls over, obviously not wanting to talk anymore, so you get up and leave.');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/run.jpg');
        scene.text('You look around you and suddenly shout "Dad, I\'m over here!"');
        scene.text('As the gopniks turn to see who you\'re shouting at, you quickly grab Artem by the arm and start running. Unfortunately, one of the gopniks wasn\'t fooled by your diversion, and grabs Artem before shoving him hard to the ground.');
        // TODO-QSP: dynamic text: "Run, <<$pcs_nickname>>!" Artem shouts behind you. You hear them beating Artem a...
        scene.text(`"Run, ${((s as any).pcs_nickname ?? 0)}!" Artem shouts behind you. You hear them beating Artem as someone chases you.`);
        scene.actions([
          { label: 'Try to escape', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * (100 + ((s as any).pcs_run ?? 0) - 1 + 1)) + (1)) < 80) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/caught.jpg');
      scene.text('You\'re not in great shape and aren\'t good at running, so you don\'t make it very far when one of them tackles you to the ground, knocking the wind out of you.');
      // TODO-QSP: dynamic text: By now, the other gopniks have caught up and you're surrounded again. The leader...
      scene.text(`By now, the other gopniks have caught up and you're surrounded again. The leader drops to his knees and grabs you by the hair while you lie flat on your stomach. "We warned you, ${((s as any).pcs_nickname ?? 0)}. Since you made us work for it, we're just going to take what we want."`);
      scene.text('You could try and fight them off, but you\'re likely to just be beaten and raped anyway…');
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Fight them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Fight them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['artem_date_events', 'fight_gang'] },
        ]);
      }
      scene.actions([
        { label: 'Get raped', goto: ['artem_date_events', 'gang_rape'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/run.jpg');
      scene.text('Thanks to your natural aptitude and practice at running, you manage to get away. After what seems like forever, you suddenly hear nothing behind you. You glance back and see no one, stopping long enough to put your clothes on before you jog to the edge of the park where several people give you funny looks. You stop and catch your breath while looking back for Artem.');
      scene.actions([
        { label: 'Run home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/park/run.jpg');
    scene.text('After catching your breath and not seeing Artem anywhere, you run the rest of the way home. You don\'t stop for anyone or anything until you\'re safely inside your apartment.');
    scene.actions([
      { label: 'Home', goto: ['korrPar', ''] },
    ]);
  } },
        { label: 'Wait for Artem', handler: (st: GameState) => {
    (s as any).artemQW['waited'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/walk_save.jpg');
    scene.text('After a while, you finally see Artem limping towards you. He smiles through busted bloody lips when he sees you. You rush over to him and help him walk, putting one of his arms over your shoulder as he wipes the blood from his face, deeply embarrassed you had to see him like this. "I\'m glad you got away. They said they were going to rape you if they caught you," he says as he hugs you. He seems genuinely glad you\'re safe as you walk in silence helping him home.');
    // TODO-QSP: dynamic text: Once you get him home, you help him to bed and tend to him as best as you can. "...
    scene.text(`Once you get him home, you help him to bed and tend to him as best as you can. "Thank you ${((s as any).pcs_nickname ?? 0)}. For everything. For helping me home, for going out with me and for helping me now. I just wish it could have been a better date."`);
    scene.text('You smile at him and place a finger on his lips. "Shhh, it\'s fine. I\'m just sorry you got hurt."');
    scene.text('He smiles. "Yeah? Well maybe our next date won\'t be so exciting. The pain meds are kicking in and I could really use some sleep, so I\'ll see you later, okay?" You get up and leave him to rest.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
        { label: 'Call the police', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).artemQW['called_police'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/patrol.jpg');
    scene.text('Once you\'re safe, you pull out your phone and call the police, telling them that the gopniks are assaulting Artem and tried to attack you as well. After you give them all the details you can, you hang up. Almost half an hour later, a police car pulls up at the entrance of the park and two officers get out. You hurry over to them and try and get them to hurry, but they write down your information and ask you several questions. They won\'t be hurried and each time you try, they just tell you to calm down and answer their questions. In frustration, you finally answer all their questions while they write it all down.');
    scene.text('By the time they finish, you see Artem limping towards you. He smiles through busted bloody lips when he sees you. You rush over to him and help him walk, putting one of his arms over your shoulder as he wipes the blood from his face, deeply embarrassed you have to see him like this. "I\'m glad you got away. They said they were going to rape you if they caught you."');
    scene.text('Before you can help him, the police walk over and help Artem over to their car before they start asking him questions. They tell you go home, warning you that this is no place for a young lady such as yourself.');
    scene.actions([
      { label: 'Home', goto: ['korrPar', ''] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Get down on your knees', goto: ['artem_date_events', 'blow_bang'] },
      ]);
    }
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
    case 'firstdate':
      enterFirstdate(s, scene);
      break;
    case 'artem_date':
      enterArtemDate(s, scene);
      break;
    case 'artemGopSkver':
      enterArtemGopSkver(s, scene);
      break;
    case 'stand_up':
      enterStandUp(s, scene);
      break;
    default:
      enterFirstdate(s, scene);
      break;
  }
}

export const artem_date_events: LocationDef = {
  name: 'artem_date_events',
  title: 'You enjoy a pleasant walk in the park while making small tal',
  region: 'other',
  description: ['You enjoy a pleasant walk in the park while making small talk with Artem.'],
  enter: enter,
};
