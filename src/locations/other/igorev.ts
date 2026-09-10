import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMovies(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Walk to the theater', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/theater/kinoteatr.jpg');
    scene.text('On your way to the theater, the two of you talk about nothing in particular. It turns out to be a very pleasant walk.');
    scene.actions([
      { label: 'Go to the movies', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/theater/cinema.jpg');
    scene.text('You stand inside the cinema, looking at the board to see what\'s playing tonight. Igor finally settles on a movie he wants to see and offers to buy you both tickets.');
    scene.actions([
      { label: 'Agree to see a movie', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/watchmovie.jpg');
    scene.text('After buying the tickets, he takes you to the concession stand and buys some drinks, candy and popcorn for the two of you before you head into the movie theater and find a seat. You sit down and wait for the movie to start.');
    scene.actions([
      { label: 'Watch the movie', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/watchmovie.jpg');
    scene.text('You quietly sit with Igor and watch the movie. Once the credits roll, the two of you leave the theater. Once back outside, he turns to you. "Would you like to come back to my place?"');
    scene.actions([
      { label: 'Agree and go back to Igor\'s house', goto: ['igorhome', 'hallway'] },
      { label: 'Decline and go home', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Make out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).IgorQW['Lover'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/kissmovie.jpg');
    scene.text('The movie is fairly boring and Igor strokes your thigh, so you return the favor and lean in close to him. He turns to you and you share a kiss. You spend the rest of the movie making out, with no idea what the movie is even about.');
    scene.text('Once the credits roll, the two of you leave the theater. Once back outside, he turns to you. "Would you like to come back to my place?"');
    scene.actions([
      { label: 'Agree and go back to Igor\'s house', goto: ['igorhome', 'hallway'] },
      { label: 'Decline and go home', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'You don\'t feel like watching a movie', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.text('"Let\'s just keep it to a walk," you say. "I\'m not that keen on watching a movie."');
    scene.text('You continue to walk, but the conversation is really stale and not much is said.');
    scene.text('After a while, you decide to go back to Igor\'s house. On the way there, you keep thinking that a movie may have been more interesting.');
    scene.actions([
      { label: 'Return to Igor\'s house', goto: ['igorhome', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorQW ?? 0)?.['horny'] < 40  &&  ((s as any).pcs_horny ?? 0) < 40) {
    qspCall(s, 'mood', 'raise', 'large');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).IgorQW['Horny'] = ((s as any).IgorQW['Horny'] ?? 0) + (15);
    (s as any).IgorQW['Love'] = ((s as any).IgorQW['Love'] ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/kiss.mp4');
    scene.text('You start kissing each other, Igor is really being gentle, kissing your neck as you sigh at the sensation.');
    scene.text('He notices you getting turned on and starts kissing you on the lips again, biting your lower lip.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'chat'] },
    ]);
  } else {
    qspCall(s, 'mood', 'raise', 'large');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).IgorQW['Horny'] = ((s as any).IgorQW['Horny'] ?? 0) + (10);
    (s as any).IgorQW['Love'] = ((s as any).IgorQW['Love'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/kiss.mp4');
    scene.text('The two of you kiss as he starts groping your breasts and stroking your crotch.');
    scene.text('"I want you so bad," he whispers in your ear. "Come on, baby…"');
    scene.text('He grabs you and pushes you onto the bed.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'force', 'easy');
    if (((s as any).IgorQW ?? 0)?.['crossdressSex'] >= 1  &&  ((s as any).IgorQW ?? 0)?.['kdsexday'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Crossdress sex [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Crossdress sex', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('As you\'re not that keen about getting penetrated right now, you decide to suggest a more… \'special\' kind of sex, something kinky he might enjoy.');
    scene.actions([
      { label: 'Propose "special" sex instead', handler: (st: GameState) => {
    // TODO-QSP: IgorQW['Love'] += 10
  }, goto: ['igorsex', 'din_krossdresssex'] },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['strapon'] >= 1) {
      scene.actions([
        { label: 'Take out the strap-on', goto: ['igorsex', 'strap on'] },
      ]);
    }
    scene.actions([
      { label: 'Agree to have sex', handler: (st: GameState) => {
    // TODO-QSP: IgorQW['Love'] += 10
  }, goto: ['igorsex', 'din_sex'] },
      { label: 'Stop him', handler: (st: GameState) => {
    (s as any).IgorQW['sub'] = ((s as any).IgorQW['sub'] ?? 0) + (1);
    scene.text('"Please, let\'s stop now," you tell him, but he continues to kiss your neck and lightly blows in your ear, not taking no for an answer.');
    scene.actions([
      { label: 'I said NO', handler: (st: GameState) => {
    // TODO-QSP: IgorQW['sub'] += 2
  }, goto: ['igorhome', 'chat'] },
      { label: 'Well…', goto: ['igorsex', 'din_sex'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterDinSisterkom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorQW ?? 0)?.['Lover'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['igorsex', 'din_sisterkom_krossdress'] }]);
  }
  scene.text('<center><b>Igor\'s sister\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/komsister.jpg');
  scene.text('You walk into Igor\'s sister\'s room which, to put it mildly, is a complete mess.');
  scene.text('"Apparently cleaning isn\'t her favorite activity!" you say and smile at Igor.');
  scene.text('"That\'s for sure!" he grins back.');
  scene.actions([
    { label: 'Open the closet', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/chto_nadet.jpg');
    scene.text('You walk over to the closet door and open it. You have to jump aside as an avalanche of clothes spills out across the floor.');
    scene.text('"What the fuck?! How many clothes does she have?!" you ask in surprise.');
    scene.text('"I told you my sister is a shopaholic. She has yet to pass a clothes sale she can refuse," he replies.');
    scene.actions([
      { label: 'Try out clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/coco/dress/\'+rand(1, 300)+\'.jpg');
    scene.text('You look in the closet and on the floor and spot many different styles of clothes. Some of them are ugly, but many range from okay to down right lovely. You pick up an outfit off the floor.');
    scene.text('"What do you say? Does this look good on me?" you ask Igor while holding it up and spinning around. Igor nods and smiles.');
    scene.actions([
      { label: 'Keep trying out clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/coco/dress/\'+rand(1, 300)+\'.jpg');
    scene.text('You drop the first outfit and grab another that you want to try on.');
    scene.text('"Okay, I\'m going to try this one on. Turn around. You can look again once I\'m dressed. And you better not try to sneak a peak!" you tell Igor, who dutifully turns around.');
    scene.text('You quickly strip down to your undrewear and start putting on the new outfit. "I said no peeking, you perv!" you tell Igor when you catch him turning for a look.');
    scene.actions([
      { label: 'Keep trying out clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/coco/dress/\'+rand(1, 300)+\'.jpg');
    scene.text('You notice another outfit you think is cute.');
    scene.text('"What do you say about this one? Do you like it?" you continue.');
    scene.actions([
      { label: 'Keep trying out clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/coco/dress/\'+rand(1, 300)+\'.jpg');
    scene.text('"How about this outfit then?" you ask him.');
    scene.text('"You look good in whatever you wear," he answers.');
    scene.actions([
      { label: 'Call it a day', handler: (st: GameState) => {
    (s as any).IgorQW['eqwtday'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/ystala.jpg');
    scene.text('You\'ve gotten tired of trying on different outfits and want to call it a day, so you say goodbye to Igor and quickly depart.');
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
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

function enterCaught(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/igorhome/kor.jpg');
  scene.text('"I think we need to talk. Can we go to your room?" you ask.');
  scene.text('"Yeah, I guess," he replies and leads you to his room.');
  scene.actions([
    { label: 'Go to his room', handler: (st: GameState) => {
    (s as any).IgorQW['crossdress'] = 1;
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/igorhome/kom.jpg');
    scene.text('Once you\'re both in his room, you sit down on the edge of his bed and take a deep breath as he sits next to you. "I saw you through the window."');
    scene.text('He grows pale. "I don\'t know what you mean." He tries to play it off, but you can see the fear on his face.');
    scene.text('You sigh. "I saw you wearing girls clothes, and before you try to deny that you\'re the one I saw… I watched you take off the wig. I know."');
    scene.text('He looks absolutely terrified. "Please, please don\'t tell anyone!" he begs.');
    scene.actions([
      { label: 'Promise not to tell', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A4', 'adore');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You give him a reassuring hug. "I would never do that to you. I promise I won\'t tell a soul."');
    scene.text('He lets out the breath he was holding and relaxes as he hugs you back. "Thank you, I\'m so relieved to hear you say that!"');
    scene.text('You smile at him. "It was actually kind of sexy, but why do you do it? I mean if you\'re so worried about anyone knowing, why do it at all?"');
    scene.text('He shrugs. "I don\'t really know. One day I was home alone and bored, so I went into my sister\'s room and saw all those clothes. I just suddenly had an urge to try them on, so I did and it felt great. I guess I\'ve always been curious what it would be like to be a girl."');
    scene.text('You nod. "I can see that. We are all trying to figure out who we\'re going to be."');
    scene.text('He offers a faint smile. "Yeah, I guess I just wish I was a girl instead."');
    if (((s as any).lernHome ?? 0) > 0) {
      scene.actions([
        { label: 'Let\'s study', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).lernHome ?? 0) > 1) {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 1, 'A4');
    } else {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A4');
    }
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You give him a few minutes to think. "I hope you figure things out and I promise not to tell anyone, but I actually came over to study, so if you don\'t mind, do you think you could help me with my homework now?"');
    scene.text('He looks overjoyed. "Of course! Where were we?"');
    scene.text('The two of you soon start studying. After a while, you finish up and decide to head home.');
    scene.actions([
      { label: 'Leave Igor\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just chat to him', goto: ['igorhome', 'chat'] },
      { label: 'Offer to help him', goto: ['igorev', 'help_crossdress'] },
    ]);
  } },
      { label: 'Blackmail him', handler: (st: GameState) => {
    (s as any).IgorQW['blackmail'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You lean back and smile at him. "Okay, I\'ll keep your secret, but you\'ll owe me. I want to have some fun with this."');
    scene.text('He looks at you in shock. "What?! No!"');
    scene.text('You frown. "It\'s either that or I can tell everyone. Don\'t worry, I just want to have a little fun. Nothing too big."');
    scene.text('You see the panicked look on his face before he sighs and nods his head, knowing he doesn\'t really have much of a choice.');
    scene.text('You grin. "Great! Now how about you go dress yourself up again. I have something in mind."');
    scene.text('He brightens up for a moment before becoming a little guarded, but he gets up does as you command regardless. A few minutes later, he comes back all dressed up the way you had seen him before. You sit him down and pull out your makeup, applying it to his face and explaining what you\'re doing and why as you go. He asks a few questions, obviously wanting to learn how to do it himself.');
    scene.text('After a while, you\'re done and stand back to admire your work. "Come see for yourself," you say as you walk over to the mirror.');
    scene.text('He gets up and looks at his reflection with a sharp intake of breath. "Wow, is that really me?! I look amazing! You did such a great job!"');
    scene.actions([
      { label: 'Ask him why', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You smile at him. "It was actually kind of sexy, but why do you do it? I mean if you\'re so worried about anyone knowing, why do it at all?"');
    scene.text('He shrugs. "I don\'t really know. One day I was home alone and bored, so I went into my sister\'s room and saw all those clothes. I just suddenly had an urge to try them on, so I did and it felt great. I guess I\'ve always been curious what it would be like to be a girl."');
    scene.text('You nod. "I can see that. We are all trying to figure out who we\'re going to be."');
    scene.text('He offers a faint smile. "Yeah, I guess I just wish I was a girl instead."');
    if (((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
      scene.actions([
        { label: 'You have a strapon', goto: ['igorsex', 'strap on'] },
      ]);
    }
    scene.actions([
      { label: 'Let\'s go for a walk', goto: ['igorev', 'crossdress_walk1'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ask him why', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You smile at him. "It was actually kind of sexy, but why do you do it? I mean if you\'re so worried about anyone knowing, why do it at all?"');
    scene.text('He shrugs. "I don\'t really know. One day I was home alone and bored, so I went into my sister\'s room and saw all those clothes. I just suddenly had an urge to try them on, so I did and it felt great. I guess I\'ve always been curious what it would be like to be a girl."');
    scene.text('You nod. "I can see that. We are all trying to figure out who we\'re going to be."');
    scene.text('He offers a faint smile. "Yeah, I guess I just wish I was a girl instead."');
    scene.actions([
      { label: 'Promise not to tell', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A4', 'adore');
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You give him a few minutes to think. "I hope you figure things out and I promise not to tell anyone, but I actually came over to study, so if you don\'t mind, do you think you could help me with my homework now?"');
    scene.text('He looks overjoyed. "Of course! Where were we?"');
    scene.text('The two of you soon start studying. After a while, you finish up and decide to head home.');
    if (((s as any).lernHome ?? 0) > 0) {
      scene.actions([
        { label: 'Let\'s study', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).lernHome ?? 0) > 1) {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 1, 'A4');
    } else {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A4');
    }
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You give him a few minutes to think. "I hope you figure things out and I promise not to tell anyone, but I actually came over to study, so if you don\'t mind, do you think you could help me with my homework now?"');
    scene.text('He looks overjoyed. "Of course! Where were we?"');
    scene.text('The two of you soon start studying. After a while, you finish up and decide to head home.');
    scene.actions([
      { label: 'Leave Igor\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go home', goto: ['pav_residential', ''] },
      { label: 'Offer to help him', goto: ['igorev', 'help_crossdress'] },
    ]);
  } },
      { label: 'Dress like a girl or be a girl?', handler: (st: GameState) => {
    (s as any).IgorQW['bi_curious'] = 1;
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You consider what he said. "Do you like dressing up and looking like a girl or do you really want to be a girl?"');
    scene.text('After taking a few minutes to think, he finally responds. "I don\'t know. I love dressing up like a girl and I\'m curious what it feels like to be one, but I don\'t know if I would want to be one forever. Maybe for a day or two."');
    if (((s as any).lernHome ?? 0) > 0) {
      scene.actions([
        { label: 'Let\'s study', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if (((s as any).lernHome ?? 0) > 1) {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 1, 'A4');
    } else {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A4');
    }
    qspCall(s, 'stat', '');
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('You give him a few minutes to think. "I hope you figure things out and I promise not to tell anyone, but I actually came over to study, so if you don\'t mind, do you think you could help me with my homework now?"');
    scene.text('He looks overjoyed. "Of course! Where were we?"');
    scene.text('The two of you soon start studying. After a while, you finish up and decide to head home.');
    scene.actions([
      { label: 'Leave Igor\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Offer to help him', goto: ['igorev', 'help_crossdress'] },
      { label: 'Just chat to him', goto: ['igorhome', 'chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHelpCrossdress(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.text('<center><b>Igor\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/makeup.jpg');
  scene.text('You think about it for a moment. If he really wants to know, then maybe you could help him? "I can help you out with it if you want? To learn what it\'s like to be a girl, I mean. I can teach you how to do makeup and other stuff."');
  scene.text('He\'s a bit taken aback. "Really? You would do that for me?"');
  scene.text('"Of course I would. I think it would be fun. In fact, why don\'t we do it now? Let me put some makeup on you."');
  scene.text('You sit him down and pull out your makeup, applying it to his face while explaining it as you go.');
  scene.text('"Go grab some clothes and I\'ll show you how to get dressed and look like a girl," you tell him once you\'re done with his makeup.');
  scene.actions([
    { label: 'Igor goes to get clothes', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed1.jpg');
    scene.text('He looks a little unsure at first before he gets up and practically runs out of the room, returning a few minutes later carrying some girls clothes in his hands.');
    scene.text('"Take off your clothes," you command.');
    scene.text('He blushes. "What?"');
    scene.text('You smile. "Girls get naked in front of each other all the time, so get undressed."');
    scene.text('He bites his lip before he nods and starts removing what he\'s wearing. You then start helping him get dressed.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed2.jpg');
    scene.text('You help him with the panties, then the dress, the shoes and finally the wig. You explain a few things as you go about styles and how to make a nice outfit as he again asks a lot of questions, eager to learn.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed3.jpg');
    scene.text('After a while, you\'re done and stand back to admire your work. "Come see for yourself," you say as you walk over to the mirror, looping your arm around his back to pull him over.');
    scene.text('He looks at his reflection and takes a sharp breath. "Wow, is that really me?! I look amazing! You did such a great job! Thank you, thank you very much!"');
    if (((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
      scene.actions([
        { label: 'You have a strapon', goto: ['igorsex', 'strapon_crossdress'] },
      ]);
    }
    scene.actions([
      { label: 'Let\'s go for a walk', goto: ['igorev', 'crossdress_walk1'] },
      { label: 'Just chat to him', handler: (st: GameState) => {
    scene.text('<center><b>Igor\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
    scene.text('After giving him a few minutes to admire himself, you sit down again. "I\'m glad you like it, but I actually came over to study or hang out, so what do you want to talk about?"');
    scene.text('Igor quickly changes back to his normal clothes and then practically skips over. "Of course."');
    scene.actions([
      { label: 'Chat', goto: ['igorhome', 'chat'] },
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

function enterCrossdressWalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/kd.jpg');
  scene.text('"You know, hiding such a beauty at home is a crime!"');
  scene.text('"What did you say?" he asks as he shoots you a glance.');
  scene.text('"How about we go for a walk outside?!" you enthusiastically suggest.');
  scene.text('"No way! What if someone sees me and recognizes me?" he replies in a trembling voice.');
  scene.text('"Come on, it\'ll be fun! Why bother making yourself look beautiful if you don\'t share it with the world?" you tease, knowing he really wants to anyway.');
  scene.text('"I guess you\'re right, but can you imagine what would happen if someone recognises me?! I shudder just thinking about it…" he says, showing his goosebumps.');
  scene.text('"You worry too much! Nobody is going find out. Come on, lets go have fun," you say as you start tugging his arm.');
  scene.text('"Damn it. Alright, but not for long! I decide when we\'ll return home!" he says, finally agreeing.');
  scene.text('"Of course, of course! Let\'s go!" you say impatiently.');
  scene.actions([
    { label: 'Go for a walk around town', handler: (st: GameState) => {
    (s as any).IgorQW['kdwalk'] = 2;
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/progulka_1.jpg');
    scene.text('You go for a walk in the park. Igor is very scared, leaning onto you and holding your hand. You\'re both constantly looking around, fearing seeing someone you know.');
    scene.text('"Igor, please calm down! You\'re drawing attention to yourself. Just act like you\'re enjoying yourself and no one will notice," you tell him as you hold his hand.');
    scene.text('"I swear it looks like everyone is staring at me! I\'m so screwed!" he says while shivering nervously.');
    scene.text('"Don\'t worry. No one has recognized you yet," you reassure him.');
    scene.actions([
      { label: 'Continue walking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/progulka_3.jpg');
    scene.text('You continue to walk by the benches where several young men are sitting and drinking. As you walk by, you overhear one of them whistle. "Look at those gorgeous asses! Do you want a drink?"');
    scene.text('"Hell yeah, especially the one on the right. Looking good babe!" another one of the young men shouts.');
    scene.text('Igor starts squeezing your hand really hard. You, keeping your cool, turn your head and smile back at them, but continue walking on. You walk a little longer before you decide to call it a day.');
    scene.actions([
      { label: 'Head back to Igor\'s', handler: (st: GameState) => {
    scene.text('<center><b>Entrance hall</b></center>');
    scene.img('images/locations/pavlovsk/resident/igorhome/kor.jpg');
    scene.text('When you finally return to Igor\'s home, he immediately takes off his wig and sighs.');
    scene.text('"Well? Did you enjoy the walk?" you ask with a smile.');
    scene.text('"I\'m still shaking and my heart is still pounding! I can barely breathe!" he rasps between heavy breaths and a sigh of relief.');
    scene.text('"Really? And when those guys on the bench were appreciating your ass? What was that like for you?" you ask while playfully biting your lip.');
    scene.text('"I think I had a little heart attack! But honestly, it was… uh… fun. I was so pumped up on adrenaline, I loved it!" he says with a huge grin on his face.');
    scene.text('"Alright then. We\'ll have to do this again!" you say as you happily hug him.');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorQW ?? 0)?.['kdwalk'] < 2) {
    qspCall(s, 'igorev', 'kruglov_desc');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed.jpg');
    scene.text('"I miss my girl friend, so let\'s get dressed," you say with a smile.');
    scene.text('"Sure! I\'ve been hoping that you would mention it again," he replies excitedly.');
    scene.text('"Go pick out some of your sister\'s clothes. When you get back, I\'ll help you with your makeup again."');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/makeup.jpg');
    scene.text('He returns dressed in one of his sister\'s dresses and sits down on a chair in front of you.');
    scene.text('"Watch carefully now. After all, it\'s time you learned to get better at this yourself," you tell him.');
    scene.text('You start applying the makeup while explaining all the tricks you\'ve learned.');
    scene.actions([
      { label: 'Done', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/kd.jpg');
    scene.text('"Wow, you\'re as beautiful as ever!" you say and he smiles while checking the mirror.');
    scene.text('"Thank you," he says while blushing.');
    scene.text('Without hesitating, you lean forward and kiss him before playfully biting "her" lip.');
    scene.text('"You know, hiding such a beauty at home is a crime! How about we go for a walk outside?!" you enthusiastically suggest.');
    scene.text('"No way! What if someone sees me and recognizes me?" Igor said with trembling voice.');
    scene.text('"Come on, it\'ll be fun! Why bother making yourself look beautiful if you don\'t share it with the world?" you tease, knowing he really wants to anyway.');
    scene.text('"I guess you\'re right, but can you imagine what would happen if I someone finds out?! I shudder just thinking about it…" he says, showing his goosebumps.');
    scene.text('"You worry too much! Nobody is going find out. Come on, lets go have fun," you say as you start tugging his arm.');
    scene.text('"Damn it. Alright, but not for long! I decide when we\'ll return home!" he says, finally agreeing.');
    scene.text('"Of course, of course! Let\'s go!" you say impatiently.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go for a walk around town', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).IgorQW['kdwalk'] = 2;
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/progulka_1.jpg');
    scene.text('You go for a walk in the park. Igor is very scared, leaning onto you and holding your hand. You\'re both constantly looking around, fearing seeing someone you know.');
    scene.text('"Igor, please calm down! You\'re drawing attention to yourself. Just act like you\'re enjoying yourself and no one will notice," you tell him as you hold his hand.');
    scene.text('"I swear it looks like everyone is staring at me! I\'m so screwed!" he says while shivering nervously.');
    scene.text('"Don\'t worry. No one has recognized you yet," you reassure him.');
    scene.actions([
      { label: 'Continue walking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/progulka_3.jpg');
    scene.text('You continue to walk by the benches where several young men are sitting and drinking. As you walk by, you overhear one of them whistle. "Look at those gorgeous asses! Do you want a drink?"');
    scene.text('"Hell yeah, especially the one on the right. Looking good babe!" another one of the young men shouts.');
    scene.text('Igor starts squeezing your hand really hard. You, keeping your cool, turn your head and smile back at them, but continue walking on. You walk a little longer before you decide to call it a day.');
    scene.actions([
      { label: 'Head back to Igor\'s', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Entrance hall</b></center>');
    scene.img('images/locations/pavlovsk/resident/igorhome/kor.jpg');
    scene.text('When you finally return to Igor\'s home, he immediately takes off his wig and sighs.');
    scene.text('"Well? Did you enjoy the walk?" you ask with a smile.');
    scene.text('"I\'m still shaking and my heart is still pounding! I can barely breathe!" he rasps between heavy breaths and a sigh of relief.');
    scene.text('"Really? And when those guys on the bench were appreciating your ass? What was that like for you?" you ask while playfully biting your lip.');
    scene.text('"I think I had a little heart attack! But honestly, it was… uh… fun. I was so pumped up on adrenaline, I loved it!" he says with a huge grin on his face.');
    scene.text('"Alright then. We\'ll have to do this again!" you say as you happily hug him.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
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
  } else {
    qspCall(s, 'igorev', 'kruglov_desc');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed.jpg');
    scene.text('"Come on, let\'s get you dressed and go for a walk," you say as you pull out your makeup kit.');
    (s as any).IgorQW['event1'] = 0;
    qspCall(s, 'igorev', 'kruglov_desc');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/getdressed.jpg');
    scene.text('"Let\'s get you dressed and go for a walk."');
    scene.text('Igor stops you as you get your makeup out. "I bought some makeup of my own, so I don\'t have to keep using yours or my sister\'s."');
    scene.text('"That\'s great!" you respond.');
    scene.text('Igor sits down in front of the mirror and starts putting his makeup on. He does a pretty amazing job, far better than you could do at first. He seems to have a natural knack for it. As soon as he finishes, he quickly runs over to his sister\'s room and gets dressed.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/kd.jpg');
    scene.text('He comes back all dressed up and applies his own makeup. You notice that he\'s starting to get really good at it. He must have been practicing. "All right. Are you done, beautiful?"');
    scene.text('"I really am stunning," he says with a smile while looking at himself in the mirror.');
    scene.text('"Yes you are, sweetie. Are you ready to go show the world?"');
    scene.text('"Yes, let\'s go."');
    scene.actions([
      { label: 'Go out for a walk', handler: (st: GameState) => {
    (s as any).IgorQW['kdwalk'] = 3;
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/progulka_2.jpg');
    scene.text('You go for a walk in the park, Igor slowly building up his confidence as he walks with you. He even waves at a man who was staring at him.');
    scene.actions([
      { label: 'Back to Igor\'s house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Entrance hall</b></center>');
    scene.img('images/locations/pavlovsk/resident/igorhome/kor.jpg');
    scene.text('You return to Igor\'s home. "So how was the walk today?" you ask with a smile.');
    scene.text('"Better," he replies. "It was actually a lot of fun! I loved seeing the other boys\' reaction. Was it a little embarrassing when I waved to that one guy?"');
    scene.text('"No, not at all. I\'m happy to see you enjoying yourself. Did you like waving to that guy?"');
    scene.text('He grins. "Yeah, yeah I did. I really did. I…" He trails off, looking a little unsure.');
    scene.text('"What is it? You can tell me," you reassure him.');
    scene.text('He blushes a deep red. "Well, it\'s… It\'s just… Well, I really wanted to flirt with him. He was so cute!"');
    scene.text('You give him a resasuring hug. "If it makes you happy, then that\'s all that matters. Do you think you might like boys?"');
    scene.text('He seems taken aback by the question, but considers his answer. "I don\'t know. I just think I wish I was a girl is all."');
    scene.text('"Okay, we\'ll try flirting next time and see how it feels then."');
    scene.text('He nods. "I better get changed before my parents get home," he says before he goes and changes back into his regular clothes.');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/kd.jpg');
    scene.text('"You look sexy as hell! You\'re going to drive the boys crazy!" you boldly tell him.');
    scene.text('"I hope so. Let\'s go!" he smiles and eagerly heads for the door.');
    scene.actions([
      { label: 'Go out for a walk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/crossdress/progulka_4.jpg');
    scene.text('You go for a walk in the park. Igor is much more bold and confident, shamelessly flirting with the boys you pass. You almost feel a little jealous as he seems to be getting more of the attention. As you walk, you talk about small tricks on how to apply makeup.');
    (s as any).temprand = Math.floor(Math.random() * 10) + 1;
    if (((s as any).temprand ?? 0) <= 2  &&  ((s as any).IgorQW ?? 0)?.['DimaNos'] === 0  ||  ((s as any).IgorQW ?? 0)?.['DimaNos'] === 1) {
      scene.actions([
        { label: 'Dimka', goto: ['igorev', 'dimka_crossdress_walk'] },
      ]);
    } else {
      if (((s as any).temprand ?? 0) === 4  &&  ((s as any).IgorQW ?? 0)?.['natashacross'] === 0) {
        scene.actions([
          { label: 'Natasha', goto: ['igorev', 'natasha_crossdress_walk'] },
        ]);
      } else {
        scene.actions([
          { label: 'Back to Igor\'s house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).IgorQW['event1'] = 1;
    scene.text('<center><b>Entrance hall</b></center>');
    scene.img('images/locations/pavlovsk/resident/igorhome/kor.jpg');
    scene.text('You return to Igor\'s home. "So how was the walk today?" you ask with a smile.');
    scene.text('"Better," he replies. "It was actually a lot of fun! I loved seeing the other boys reaction. Was it a little embarrassing when I waved to that one guy?"');
    scene.text('"No, not at all. I\'m happy to see you enjoying yourself. Did you like waving to that guy?"');
    scene.text('He grins. "Yeah, yeah I did. I really did. I…" He trails off, looking a little unsure.');
    scene.text('"What is it? You can tell me," you reassure him.');
    scene.text('He blushes a deep red. "Well, it\'s… It\'s just… I got turned on flirting with that guy. He was so cute!"');
    scene.text('You give him a resasuring hug. "If it makes you happy, then that\'s all that matters. Do you think you might like boys?"');
    scene.text('He seems taken aback by the question, but considers his answer. "I don\'t know. I just think I wish I was a girl is all."');
    scene.text('"Well take it a step further next time and see how it feels then."');
    scene.text('He nods. "I better get changed before my parents get home," he says before he goes and changes back into his regular clothes.');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Anushka', goto: ['igorev', 'anushka_crossdress_walk_first'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'Ask about Diana\'s date') {
    if (((s as any).IgorQW ?? 0)?.['DimaNos'] === 2) {
      (s as any).IgorQW['DimaNos'] = 3;
      if (((s as any).week ?? 0) > 4) {
        (s as any).IgorQW['DimaNos_day'] = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 13;
      } else {
        (s as any).IgorQW['DimaNos_day'] = ((s as any).daystart ?? 0) -((s as any).week ?? 0) + 6;
      }
      qspCall(s, 'igorev', 'kruglov_desc');
      scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
      scene.text('"How did your date with Dimka go?" you ask.');
      scene.text('"It went well. We took a walk together," he replies.');
      scene.text('"I want to hear all the details, no matter how small! Leave nothing out!" you excitedly tell him.');
      scene.actions([
        { label: 'Listen to his tale', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/kd.jpg');
    scene.text('"Well, we had our date on Saturday, so I started preparing for the date quite early. I put on the makeup just like you taught me and dressed up in one of my sister\'s better outfits. When I was sure I was looking spectacular, I went to meet Dimka."');
    scene.actions([
      { label: 'Continue to listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/vsheky.mp4');
    scene.text('"I went to the square in the center of the town as we agreed. Dimka was already waiting for me there. He saw me, came over and gave me a kiss me on the cheek."');
    scene.text('"Why not on the lips?" you think out loud and immediately regret it as you interrupt Igor.');
    scene.text('He looks at you accusingly before continuing with the story. "Please be silent. I don\'t lose track of the events."');
    scene.actions([
      { label: 'Continue to listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/zaryky.jpg');
    scene.text('"Okay, where was I? Oh, yes. He took me by the hand and we went for a walk. He told me many stories and some jokes. He really has a dark sense of humor. He never saw through the makeup and the clothes so I guess, all in all, the date went quite well."');
    scene.text('"Wait a second… You were going to tell him to that you couldn\'t continue dating? Right?" you ask.');
    scene.text('"Well, at first I thought I should tell him immediately, but then decided to do it after the walk," he confesses.');
    scene.text('"And what happened next?"');
    scene.actions([
      { label: 'Continue to listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/ozero.jpg');
    scene.text('"Well, while we were walking past the lake, he suddenly grabbed me in his arms and acted like he wanted to throw me in the water. I\'m ashamed to admit it, but I screamed like a girl. I grabbed onto his neck with my hands."');
    scene.actions([
      { label: 'Continue to listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/ozero.jpg');
    scene.text('"I clung to him and begged him not to do it."');
    scene.text('"And…?" you spur him on. "Did he listen to you?"');
    scene.text('Igor raises an eyebrow, somewhat irritated. "Well, not really…"');
    scene.actions([
      { label: 'As?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/ozero3.mp4');
    scene.text('"What happened?" you ask, fully engaged in the tale.');
    scene.text('"Well, with me in his arms and my arms around his neck, he ran into the water. So we both got wet."');
    scene.actions([
      { label: 'What happened after that?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/yshipnyl.mp4');
    scene.text('"What happened then? Did you end the date with that?"');
    scene.text('"No, we dried off a bit, then went to back to walking. While we were walking, he started getting a bit frisky… He pinched me on the ass, but I immediately removed his hand. Then we passed by the market, and he asked me to wait a few minutes while he ran off."');
    scene.actions([
      { label: 'Where did he go?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/podarok.jpg');
    scene.text('"So he just left you there alone?" you indignantly ask.');
    scene.text('"Yes, but only for a few minutes. When he came back, he had a stuffed bear in his hands and gave it to me!"');
    scene.text('"Wow, how cute. I never would have thought that Dimka is such a romantic!" you chuckle.');
    scene.text('"Neither did I…" Igor grins back.');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/kiss.jpg');
    scene.text('Igor continues. "Then we walked a little more. It was only then it finally hit me that this was in fact a real date I was on."');
    scene.text('"It was getting late in the afternoon as we walked we seemed to wander around. All of a sudden, we found ourselves near his home. It was now that I decided that it was the time to finish the date. I thought of following my initial plan, saying that we couldn\'t date and this would be the first and only time he would be seeing me."');
    scene.text('"However, I was having such a good time with him! I had fun and he was complimenting me. It was so sweet! I never knew that side of him existed. And I really wanted to thank him. I wanted to kiss him…"');
    scene.text('"Wait, WHAT?! What made you decide to do that?" you gasp in surprise.');
    scene.text('"It was the whole situation! My feelings got the better of me and I decided to kiss him!"');
    scene.text('"So what happened next?!" you eagerly ask.');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/kiss5.mp4');
    scene.text('"I kissed him again. We ended up kissing for a few minutes, and then he asked me to go with him back to his house. I was shocked and I started to overthink everything, so I started to hesitate. Before I could answer, Dimka took me by my hand and led me to his house."');
    scene.text('"We went to his house, and up to his room. Once there, he asked me if I wanted to snort some cocaine, but I refused. I know he enjoys taking a couple of lines every once in a while, but I don\'t."');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/medlyak.mp4');
    scene.text('"Then he hugged me and we began to dance. He was still complimenting me, saying that this was the best date he\'d ever been on."');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/krovat.jpg');
    scene.text('"Then he laid me on the bed and laid next to me. I was quivering inside and could feel the panic creeping up on me."');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/kiss4.mp4');
    scene.text('Then he whispered in my ear. "I want to have sex with you…"');
    scene.text('"I started panicking, wondering what I was supposed to do as he was about to undress me, so I said the first thing that came to mind. "I\'m on my period. I can\'t have sex."');
    scene.text('"And he was like, \'Fuck, I\'m so turned on and hard as a rock! Can\'t you help me out?\'"');
    scene.actions([
      { label: 'And?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/dimdate/kneel.jpg');
    scene.text('"So I got even more confused. Next thing I know he lays his hands on my shoulders and lowers me down.');
    scene.text('"He took off his pants and started approaching me. He stopped right in front of me, with his cock dangling in my face!"');
    scene.text('"I was freaking out, but part of me really wanted to suck his dick too. It felt like I was thinking about what to do for several minutes, but I finally opened my mouth. And he got even closer…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/dimdate/bj.jpg');
    scene.text('"Before I knew it, he had already stuck his cock in my mouth. And then he started fucking my mouth. FUCK, I can\'t believe I did it! Part of me was disgusted by it, but another part of me loved it, loved the feeling of cock in my mouth…"');
    scene.actions([
      { label: 'How did it all end?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).DimaLoveIgor = 2;
    qspCall(s, 'igorev', 'kruglov_desc');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/dimdate/cum.jpg');
    scene.text('"So you kept sucking his cock?" you ask. "Did he cum in your mouth?"');
    scene.text('"Yeah… Not knowing what else to do, I even swallowed it… As soon as he was done, I got up and went home."');
    scene.text('You shake your head while smiling. "What a wild story!"');
    scene.text('He lowers his gaze and blushes. "I was so afraid to tell you about it…"');
    scene.text('"Don\'t be silly! You can talk to me about absolutely everything, especially about Diana and Dimka…" you smile while approvingly patting him on the cheek.');
    scene.text('"There is no more Diana and Dimka. That adventure is done," he says firmly.');
    scene.text('"Oh? You just said you loved doing it, so what\'s the problem?"');
    scene.text('"What\'s the problem?! Next time he\'ll want to fuck me and I\'m sure you\'ve noticed that I don\'t have a pussy!"');
    scene.text('"Yeah, that\'s kind of hard to avoid, but maybe you can tell him the truth? If he really cares, maybe it will work out?"');
    scene.text('Igor scoffs at you. "Okay, don\'t then. But you could tell him you\'re shy and want to do it with the lights off. If you guide him into your ass, he most likely wouldn\'t even be able to tell the difference."');
    scene.text('He wants to respond, but stops and seems to think about it. "That might work, but it\'s such a huge gamble."');
    scene.text('"Igor, if this makes you happy, then you need to be true to yourself. Just don\'t overthink it. Keep it simple."');
    scene.text('He nods and seems to already be thinking about how to manage the situation.');
    scene.actions([
      { label: 'Finish', goto: ['igorhome', 'igorroom'] },
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
  } },
    ]);
  } },
      ]);
    } else {
      (s as any).IgorQW['DimaNos'] = 4;
      qspCall(s, 'igorev', 'kruglov_desc');
      scene.img('images/characters/pavlovsk/school/boy/igor/talk.jpg');
      scene.text('"How did your second date with Dimka go?" you ask.');
      scene.text('"It went well. We took a walk together." he replies.');
      scene.text('"I want to hear all the details, no matter how small! Don\'t leave anything out!" you excitedly tell him.');
      scene.actions([
        { label: 'Listen to his tale', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/kd.jpg');
    scene.text('"Well, we had our date on Saturday, so I started preparing for the date quite early. I put on the makeup just like you taught me and dressed up in one of my sister\'s better outfits. When I was sure I was looking spectacular, I went to meet Dimka."');
    scene.actions([
      { label: 'Continue to listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/vsheky.mp4');
    scene.text('"I went to the square in the center of the town and Dimka was already waiting for me there. He saw me, came over and gave me a kiss me on the cheek. It was sweet."');
    scene.actions([
      { label: 'Continue to listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/zaryky.jpg');
    scene.text('"He took me by the hand and we went for a walk. He told me many more stories and some jokes. If anything, it was better than our first date."');
    scene.text('"And what happened next?" you ask.');
    scene.actions([
      { label: 'Continue to listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/ozero.jpg');
    scene.text('"We stopped at a park bench and just sat and talked for a few hours. It was amazing! He was so sweet and attentive to me."');
    scene.actions([
      { label: 'What happened next?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/kiss.jpg');
    scene.text('Igor continues. "Then we got up and walked a little more. I could tell he was walking me back to his house again. When we got there, I suddenly wanted to thank him for the great time. I wanted to kiss him."');
    scene.text('"So what happened next?" you eagerly ask.');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/kiss5.mp4');
    scene.text('"I kissed him again and then he asked me to come into his house with him before he took me by the hand and led me to his room."');
    scene.text('"When we ended up in the room, we sat down on the couch and I started kissing him again. And… I liked it so much that I started to get excited."');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/spalil.mp4');
    // TODO-QSP: dynamic text: "Dimka told me 'You're so special, not like the other girls at school!' My God <...
    scene.text(`"Dimka told me 'You're so special, not like the other girls at school!' My God ${((s as any).pcs_nickname ?? 0)}, it was so exciting! My cock was already at half mast!"`);
    scene.text('"I got so hard that when I stood up, he saw my boner. He was reaching out to me for another kiss and stopped immediately when he noticed it…"');
    scene.text('He said, "Uh… Diana? Is that a fucking cock?"');
    scene.text('I tried to make up an excuse and tried to smooth my clothes, but my cock popped right up again… And that\'s when he pulled my wig off!"');
    scene.text('<b>"IGOR?"</b> he screamed. "He was shocked."');
    scene.text('"Hi…" I told him and smiled.');
    scene.actions([
      { label: 'Oh no', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/ybeshal.mp4');
    scene.text('"I immediately got up from the sofa and ran away. I locked myself in his bathroom."');
    scene.actions([
      { label: 'What happened?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/otkroi.mp4');
    scene.text('"He started banging on the door, screaming. Then he kind of calmed down and asked if I could open the door, just so we could talk."');
    scene.actions([
      { label: 'And you opened the door?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/otkril.mp4');
    scene.text('"Yeah? What else could I do? I was at his house with nowhere to run! So I decided to open the door."');
    scene.actions([
      { label: 'And that was that?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/dimanos/poimal.mp4');
    scene.text('"No. He yelled and screamed, threatened to tell everyone. I begged him not to and reminded him about all the years we had been friends. He finally calmed down enough that we were able to talk. I explained everything, why I did it and how I felt."');
    scene.text('"What did he say?" you ask, eagerly awaiting the rest of the story.');
    scene.text('"He was worried I would tell everyone I tricked him. I swore I wouldn\'t and in the end I convinced him, but only after I let him record me in drag," he sighs.');
    scene.text('"What?" you ask.');
    scene.text('"That\'s when he said our friendship wouldn\'t be the same anymore. I had betrayed his trust and if I wanted to be a whore so bad, he would treat me like one, or he would send that recording to everyone in school and my parents."');
    scene.actions([
      { label: 'What a dick!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/dimdate/fuck.mp4');
    scene.text('"He told me to get on my knees and suck his dick. I didn\'t know what else to do, so I did it. Once he was good and hard, he laid me down and fucked my ass."');
    scene.text('"He came inside me and told me to get out, so I got dressed and left. As I was leaving, he told me that any time he felt having sex, he would call me over and fuck me like the whore I want to be."');
    scene.text('You rub his arm. "I\'m sorry he treated you like that."');
    scene.text('"No, he was right to be upset. I betrayed him and got exactly what I deserved." He shakes his head and then laughs. "Hell, if I\'m being honest, I got exactly what I was hoping for. I just hope in time he can forgive me and we can become close again. I don\'t mind being his girl."');
    scene.text('"So you liked it? You liked being fucked by him?"');
    scene.text('He thinks for a moment. "Yeah, I did. I mean he was really rough and it hurt a lot at first, but I still kind of liked it. Look, I don\'t really want to talk about this anymore, okay?"');
    scene.text('You don\'t know what else to do, so you get up and leave.');
    scene.actions([
      { label: 'Leave quickly', goto: ['pav_residential', ''] },
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
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Movies':
      enterMovies(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'din_sisterkom':
      enterDinSisterkom(s, scene);
      break;
    case 'caught':
      enterCaught(s, scene);
      break;
    case 'help_crossdress':
      enterHelpCrossdress(s, scene);
      break;
    case 'crossdress_walk1':
      enterCrossdressWalk1(s, scene);
      break;
    case 'walk':
      enterWalk(s, scene);
      break;
    default:
      enterMovies(s, scene);
      break;
  }
}

export const igorev: LocationDef = {
  name: 'igorev',
  title: 'Igor\'s sister\'s room',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
