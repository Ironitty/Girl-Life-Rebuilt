import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStoryIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).lariska_ball = ((s as any).daystart ?? 0);
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 1;
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('You carefully walk up behind her, trying your best not to distract her as she effortlessly smacks the ball into the wall and having it return to her hands over and over again…');
  // TODO-QSP: $OpenInnerThought + '"What is she doing hanging around here,"' + $CloseInnerThought + ' you wonder.'
  scene.text('You stand there, observing her, trying to figure out why here of all places she would do this, instead of at a safer place like the Community Center, where she wouldn\'t have to worry about being messed with by the local gopniks. You know she doesn\'t live nearby either, which just feeds your curiosity.');
  scene.text('She catches the ball and stops, looking around as if trying to find someone. Noticing someone is behind her, she quickly spins around, but when she realizes it\'s you, her face goes bright red and she literally staggers backwards in surprise.');
  // TODO-QSP: $OpenInnerThought + '"I think she was looking for me,"' + $CloseInnerThought + ' you say to yourself...
  // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>," she says, sounding nervous. "I was just practicing my c...
  scene.text(`"Hi, ${((s as any).pcs_nickname || '')}," she says, sounding nervous. "I was just practicing my control. Impressed?"`);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You nod your head, "Yeah, you\'re amazing, Lariska. I didn\'t know you were such a good volleyball player!');
    // TODO-QSP: dynamic text: Lariska, breaks out in a huge smile and she says "Thanks, <<$pcs_nickname>>. I r...
    scene.text(`Lariska, breaks out in a huge smile and she says "Thanks, ${((s as any).pcs_nickname || '')}. I really got into the zone this time, usually I don't do this good."`);
    scene.text('"No need to be humble, it was really amazing, trust me. I\'ll let you go back to it, I don\'t want to bother you." you say with a smile.');
    scene.text('Smiling back, Lariska turns uncertainly back towards the wall and hits the ball again, only this time she misses it and it smacks her hard in the face.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pretend not to see that', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
    qspCall(s, 'stat', '');
    qspGoto(s, 'pav_complex', 'start');
  } },
      { label: 'Make sure she is OK', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You rush over to her and take her face in your hands, looking at the spot where the ball smacked her in the face. She tries to tell you she is fine, even though the spot is even more red than her blushing face.');
    scene.text('Surprisingly she stops protesting pretty quickly, and you catch her staring at your lips, which are now only a few centimeters from her own.');
    // TODO-QSP: $OpenInnerThought + '"Does she have a crush on me? Is that why she''s hanging around here, maybe loo...
    scene.text('This might be a dangerous thing to do, Christina controls Lariska, and she may not like you messing with her. Kissing her would pretty much be declaring war on Christina, if she ever found out.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'love');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her go', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('Letting go of her face and stepping back seems to bring her to her senses. Stammering something about needing to go, she grabs the ball and runs off, leaving you wondering if you should have kissed her.');
    scene.actions([
      { label: 'Continue', goto: ['pav_complex', 'start'] },
    ]);
  } },
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You slide one hand to the back of her head, cup her chin with the other, and lean in. As soon as your lips touch hers she panics, looks around like a deer caught in headlights, and bolts away looking terrified.');
    scene.text('Chuckling to yourself, you pick up the forgotten volleyball and take it with you. Returning it could be a good excuse to talk to her at school.');
    ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 2;
    scene.actions([
      { label: 'Continue', goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Play it off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('Wanting to play it off nonchalantly, you shake your head, chuckle, and tell her you\'ve seen others pull off even more impressive moves.');
    scene.text('Lariska tries to smile it off, but deep down you know that rattled her fragile ego, making her lash out with "Like you could do it better!"');
    scene.text('"Why would I need to prove myself over such a silly little thing," you say, laughing derisively');
    // TODO-QSP: dynamic text: By now you can clearly see that you've gotten under her skin. "Go away, <<$pcs_n...
    scene.text(`By now you can clearly see that you've gotten under her skin. "Go away, ${((s as any).pcs_nickname || '')}… Or else I'll make you regret it…"`);
    scene.text('Deciding she isn\'t going to give you any more entertainment for the day, you move on. Behind you the bouncing sounds start again, louder than before…');
    scene.actions([
      { label: 'Walk away', goto: ['pav_complex', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGettingToKnow(s: GameState, scene: SceneBuilder): void {
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 8;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('"So what does your mother do for a living?"');
  scene.text('Lariska turns a bit red and says "She works at a motel."');
  scene.text('You frown, thinking there is no way the apartment looks this nice without there being more to it.');
  scene.text('Seeing you frown, she sighs and says, "She has a second job too. A mansion in the city employs her to… uhm… make their customers happy."');
  scene.text('She fidgets a bit, not looking you in the eye, before saying "She uh… is a dominatrix. You know, black leather and a whip type of thing?"');
  scene.text('You cannot help but giggle at how nervous she is to tell you that, but decide to change the subject and spare her anymore embarrassment.');
  if (((s as any).vballVars ?? 0)?.['lariska_team'] === 0  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    scene.text('"So when are you going to join the volleyball team? I\'ve seen you practice, you\'re pretty good at it! We could use you on the team."');
    scene.text('"I want to, I just don\'t know if I\'m good enough."');
    scene.text('"You are, you should try," you say, doing your best to encourage her.');
  } else {
    if (((s as any).vballVars ?? 0)?.['lariska_team'] === 0  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 0) {
      scene.text('"So when are you going to join the volleyball team? I\'ve seen you practice, you\'re pretty good at it! They could use you on the team."');
      scene.text('"I want to, I just don\'t know if I\'m good enough."');
      scene.text('"You are, you should try," you say, doing your best to encourage her.');
    } else {
      if (((s as any).vballVars ?? 0)?.['lariska_team'] === 1  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 1) {
        scene.text('"I\'m glad you joined the volleyball team, we have a much better chance of winning now that you\'re playing with us."');
        scene.text('She flushes at the praise and says "Thanks for getting me onto the team, I had been wanting to for so long."');
      } else {
        scene.text('"I\'m glad you joined the volleyball team, they have a much better chance of winning now that you\'re playing with them."');
        scene.text('She flushes at the praise and says "Thanks for getting me onto the team, I had been wanting to for so long."');
      }
    }
  }
  scene.text('You spend the next few minutes chatting about random stuff.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterBoyfriend_1(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaBoyDay = ((s as any).daystart ?? 0) + 7;
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 11;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  // TODO-QSP: dynamic text: "So… uuh…<<$pcs_nickname>>, I was wondering what you think about me finding a bo...
  scene.text(`"So… uuh…${((s as any).pcs_nickname || '')}, I was wondering what you think about me finding a boyfriend? I've never had one before, Christina never let me."`);
  scene.text('A little surprised, you can\'t help but ask her, "Are you a virgin?"');
  scene.text('"No, I\'ve had sex, I just never had an actual boyfriend. I like what we have been doing together, I don\'t want to stop, I just… I don\'t know… I want to see what having a boyfriend is like."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Yeah, that\'s ok with me. You should be able to have some fun, enjoy your life." You give her a smile, trying to let her know it won\'t bother you.');
    // TODO-QSP: dynamic text: "Thanks, <<$pcs_nickname>>. I was worried you would be mad at me for wanting tha...
    scene.text(`"Thanks, ${((s as any).pcs_nickname || '')}. I was worried you would be mad at me for wanting that." She leans in and gives you a kiss on the cheek.`);
    ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['boyfriend'] = 1;
    (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (2);
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'adore');
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  } },
    { label: 'Disagree', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Well what about us? Don\'t you like what we\'ve been doing?"');
    scene.text('"Yes! I love it, I just feel like I\'m missing out on something important, you know?"');
    scene.text('You sigh. "If you feel you need to, then go for it."');
    ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['boyfriend'] = 2;
    if (((s as any).lariskalove ?? 0) > 6) {
      (s as any).lariskalove = ((s as any).lariskalove ?? 0) - (1);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A13', 'loathe');
    }
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyfriend_2(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaBoyDay = 0;
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 12;
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_cooking_2.jpg');
  scene.text('Finding Lariska in the kitchen cooking dinner, you decide to join her and help prepare the food. Grabbing a knife, you start chopping vegetables while chatting with her.');
  scene.text('It doesn\'t take long before the two of you are laughing at each other\'s jokes and having a great time together. Suddenly her cellphone starts ringing, so she stops to answer it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen in', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_cooking_3.jpg');
    // TODO-QSP: dynamic text: "Oh hey Lev!" She pauses a moment while he talks, before replying, "Cooking dinn...
    scene.text(`"Oh hey Lev!" She pauses a moment while he talks, before replying, "Cooking dinner with ${((s as any).pcs_nickname || '')}. What are you up to?"`);
    // TODO-QSP: $OpenInnerThought + '"A boy! She moves fast. Did he have to call now though, we were having so much ...
    scene.text('After a few minutes of chatting with him she says goodbye and hangs up.');
    scene.text('"Well?" you say with a raised eyebrow. "Start talking."');
    scene.text('She turns a bit red but smiles, and says "I met him at the disco. He has been really sweet to me! I\'ve been meaning to ask, would you come with me to Del Parco next Saturday and meet him? It would mean a lot to me."');
    scene.actions([
      { label: 'Agree to the meet', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_cooking_4.jpg');
    scene.text('"Ok," you say, laughing at how adorable she is, needing your approval. Before long, the two of you are back to laughing and joking as you finish setting up the meal.');
    scene.text('Once everything is cooked you sit down together and eat, chatting comfortably with each other.');
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'love');
    (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (25);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (8);
    if (((s as any).pcs_energy ?? 0) >= 70) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
    }
    if (((s as any).pcs_hydra ?? 0) >= 60) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (80);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish Eating', goto: ['LariskaHome', 'kitchen'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyfriend_3(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaBoyDay = ((s as any).daystart ?? 0) + 7;
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 13;
  scene.img('images/characters/pavlovsk/school/girl/lariska/boyfriend/lev_lariska_meal.jpg');
  scene.text('You go into the restaurant and find Lariska and Lev already seated. They wave you over and you join them.');
  // TODO-QSP: dynamic text: "Lev, this is <<$pcs_firstname>>. <<$pcs_nickname>>, this is Lev, my new boyfrie...
  scene.text(`"Lev, this is ${((s as any).pcs_firstname || '')}. ${((s as any).pcs_nickname || '')}, this is Lev, my new boyfriend." The two of you greet each other as you sit down.`);
  scene.text('"So tell me about yourself, Lev. Lariska said you met at the disco?"');
  scene.text('"Yeah, I work there. I help set up and maintain the lights."');
  scene.text('"That\'s cool. How do you like it?"');
  scene.text('"It\'s a great job, I have free access to the club and don\'t really have much to do most nights, as long as nothing breaks."');
  scene.text('The three of you sit and chat for a while before a waitress shows up with the food they ordered.');
  scene.text('"I hope you don\'t mind, but Lariska ordered some Piroshki for you. My treat," Lev tells you.');
  scene.text('The conversation continues, although a little slower as you eat. You can\'t help but notice how cute they are together. Lariska seems pretty happy, laughing at his jokes and giving him her best smile whenever he\'s looking at her.');
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (25);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (7);
  if (((s as any).pcs_energy ?? 0) >= 70) {
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
  } else {
    if (((s as any).pcs_energy ?? 0) >= 50) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
    }
  }
  if (((s as any).pcs_hydra ?? 0) >= 80) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  } else {
    if (((s as any).pcs_hydra ?? 0) >= 60) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (80);
    }
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish Eating', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/boyfriend/lev_lariska_meal.jpg');
    scene.text('"Well, I have to get going soon. What are you two lovebirds going to do after this?"');
    scene.text('"We\'re going to take a walk in the park, maybe go see a movie. Thanks for coming to eat with us."');
    // TODO-QSP: dynamic text: She gives you a big hug and says, "See you later, <<$pcs_nickname>>."
    scene.text(`She gives you a big hug and says, "See you later, ${((s as any).pcs_nickname || '')}."`);
    scene.actions([
      { label: 'Walk away', goto: ['cafe_parco', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyfriend_4(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaBoyDay = 0;
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 14;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  // TODO-QSP: dynamic text: "So, <<$pcs_nickname>>, what did you think of Lev?" She leans forward, eager to ...
  scene.text(`"So, ${((s as any).pcs_nickname || '')}, what did you think of Lev?" She leans forward, eager to hear your opinion.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'He seemed nice', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You shrug and say, "Yeah, he seemed ok."');
    scene.text('Lariska seems to deflate a little at your response, apparently she was expecting you to be more impressed.');
    scene.text('"Well… uh… We talked about some things, and I wanted to know if you wanted to… you know… have some fun together, the three of us?"');
    scene.text('"Turning into a swinger already? You slut!"');
    scene.text('She throws a pillow at you, laughing, before saying "We made a Rule, he can be with other girls, as long as I\'m there too. I mostly made the Rule for you, since I don\'t really expect to involve other girls."');
    scene.text('"Well, what about us? Does he have to be here for us to play?"');
    scene.text('She giggles, "No, he knows we sometimes play together, he thought it was hot. So what do you think? Are you interested in involving him? I could invite him over right now."');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"I\'m not really into that idea, Lariska. Hope you\'re not mad about that."');
    // TODO-QSP: dynamic text: She seems disappointed and says, "It's ok, <<$pcs_nickname>>. If you change your...
    scene.text(`She seems disappointed and says, "It's ok, ${((s as any).pcs_nickname || '')}. If you change your mind let me know though."`);
    scene.actions([
      { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  } },
      { label: 'Call him over', handler: (st: GameState) => {
    (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Sure, sounds like fun!"');
    scene.text('"Ok, let me call him."');
    scene.actions([
      { label: 'Wait for him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    qspGoto(s, 'LariskaSex', 'boyfriend_sex');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'He was cute', handler: (st: GameState) => {
    (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"You did good, girl! He seemed sweet and he\'s definitely cute. Does he have any brothers?" You tease with a big smile.');
    scene.text('Her face turns bright red as she says "Well… uh… We talked about some things, and I wanted to know if you wanted to… you know… have some fun together, the three of us?"');
    scene.text('"Turning into a swinger already? You slut!"');
    scene.text('She throws a pillow at you, laughing, before saying "We made a Rule, he can be with other girls, as long as I\'m there too. I mostly made the Rule for you, since I don\'t really expect to involve other girls."');
    scene.text('"Well, what about us? Does he have to be here for us to play?"');
    scene.text('She giggles, "No, he knows we sometimes play together, he thought it was hot. So what do you think? Are you interested in involving him? I could invite him over right now."');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"I\'m not really into that idea, Lariska. Hope you\'re not mad about that."');
    // TODO-QSP: dynamic text: She seems disappointed and says, "It's ok, <<$pcs_nickname>>. If you change your...
    scene.text(`She seems disappointed and says, "It's ok, ${((s as any).pcs_nickname || '')}. If you change your mind let me know though."`);
    scene.actions([
      { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  } },
      { label: 'Call him over', handler: (st: GameState) => {
    (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Sure, sounds like fun!"');
    scene.text('"Ok, let me call him."');
    scene.actions([
      { label: 'Wait for him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    qspGoto(s, 'LariskaSex', 'boyfriend_sex');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyfriend_5(s: GameState, scene: SceneBuilder): void {
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 15;
  scene.img('images/characters/pavlovsk/school/girl/lariska/boyfriend/lev_nightclub.jpg');
  scene.text('As you enter the nightclub and look around, you recognize someone on the dancefloor. Looking closer, you realize it\'s Lev with his arms wrapped around someone with blonde hair. Surprised to find Lariska not only at the disco but actually dancing, you head towards them. About halfway there you catch a glimpse of her face and realize the girl he\'s groping isn\'t Lariska.');
  scene.text('You consider making a scene, but decide against it. Better to just tell Lariska the next time you are at her house. She is going to be devastated, she really liked him!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['pav_disco', ''] },
  ]);
  scene.build();
}

function enterBoyfriend_6(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaBoyDay = ((s as any).daystart ?? 0) + 14;
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 16;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('Knowing this wasn\'t going to be an easy conversation, you sit her down, take a deep breath, and say "I was at the Disco the other day. I\'m sorry Lariska, I saw Lev feeling up some blonde girl on the dancefloor."');
  if (((s as any).LariskaQW ?? 0)?.['boyfriend'] === 2) {
    if (((s as any).lariskalove ?? 0) >= 8) {
      (s as any).lariskalove = ((s as any).lariskalove ?? 0) - (2);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A13', '-15');
    }
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Lariska's face turns red with anger, but she catches you entirely by surprise wh...
    scene.text(`Lariska's face turns red with anger, but she catches you entirely by surprise when she says "What the fuck, ${((s as any).pcs_nickname || '')}, I know you didn't want me to get a boyfriend, but this is a low blow!"`);
    scene.text('"I\'m not making it up, I swear! I saw him with my own eyes, Lariska, it was him. She was blonde, so I thought it was you with him, but when I got closer and realized it wasn\'t…" You trailed off.');
    // TODO-QSP: dynamic text: "Where's the proof? Did you take a picture? No? It wasn't him. I don't know why ...
    scene.text(`"Where's the proof? Did you take a picture? No? It wasn't him. I don't know why you would make this up, but just drop it, ok ${((s as any).pcs_nickname || '')}."`);
    scene.text('She seemed to be completely in denial, this was NOT the way you expected this conversation to go! You mentally kick yourself for not taking a pic with your phone.');
  } else {
    scene.text('"What?! No, you have to be mistaken, it couldn\'t have been him. He loves me, he wouldn\'t do that to me."');
    scene.text('"I saw him with my own eyes, Lariska, it was him. She was blonde, so I thought it was you with him, but when I got closer and realized it wasn\'t…" You trailed off.');
    // TODO-QSP: dynamic text: "Where's the proof? Did you take a picture? No? It wasn't him. I don't know why ...
    scene.text(`"Where's the proof? Did you take a picture? No? It wasn't him. I don't know why you would make this up, but just drop it, ok ${((s as any).pcs_nickname || '')}."`);
    scene.text('She seemed to be completely in denial, this was NOT the way you expected this conversation to go! You mentally kick yourself for not taking a pic with your phone.');
    if (((s as any).lariskalove ?? 0) > 6) {
      (s as any).lariskalove = ((s as any).lariskalove ?? 0) - (1);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A13', '-10');
    }
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let it go for now', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterBoyfriend_7(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaBoyDay = 0;
  (s as any).LariskaBoyDay = ((s as any).daystart ?? 0) + 3;
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 17;
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('You can tell at a glance that Lariska is freaking out about something. "Honey, what\'s wrong?"');
  scene.text('Tears spring into her eyes and she bursts out "I\'m pregnant! Lev got me pregnant! We only had sex without a condom once and now I\'m pregnant and I don\'t know what to do… I wanted to play sports and go to University, but I\'m pregnant now and I don\'t know how he\'s gonna react. What\'s Mom going to say? What do I do? Oh God!"');
  scene.text('You quickly wrap your arms around her and just hold her, letting her vent all these fears out.');
  scene.text('Once she calms down a bit, she asks you "What should I do?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep the baby', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    if (((s as any).lariskalove ?? 0) < 11) {
      (s as any).lariskalove = 12;
    } else {
      (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (2);
    }
    scene.text('"No matter what Lev thinks about this, I will always be there for you, and I cannot even imagine your mother being anything but supportive, no matter what you choose."');
    // TODO-QSP: dynamic text: "Thanks, <<$pcs_nickname>>," she says, still sniffling. "I'm not getting an abor...
    scene.text(`"Thanks, ${((s as any).pcs_nickname || '')}," she says, still sniffling. "I'm not getting an abortion, I just can't do that. I don't want to give up on my dreams."`);
    scene.text('"There is no reason you cannot go to college because you\'re pregnant or a mother, and you can still exercise until the baby comes, then do your sports thing after. We\'ll figure it out, I promise."');
    scene.text('"O-Ok. I will wait until I\'ve calmed down a bit before I tell Lev, and him and I can tell Mom together."');
    ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['abort_no'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her rest', goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  } },
    { label: 'Get an abortion', handler: (st: GameState) => {
    if (((s as any).lariskalove ?? 0) >= 8) {
      (s as any).lariskalove = ((s as any).lariskalove ?? 0) - (2);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A13', '-10');
    }
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('"Abortion is always an option. You could still do your sports thing and attend University."');
    scene.text('Lariska gasps in shock. "No way. I couldn\'t do that! How could you even suggest that?!"');
    scene.text('"I\'m just giving you options. You can always get pregnant again, later on in life."');
    scene.text('"No. That\'s not an option." She takes a deep breath. "I have to figure out how I\'m going to tell Lev. Then I\'m going to have to tell Mom."');
    scene.text('"You got this, girl. I have faith in you, and I will help you however I can."');
    ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['abort_yes'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her rest', goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyfriend_8(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaBoyDay = 0;
  (s as any).LariskaBoyDay = ((s as any).daystart ?? 0) + 14;
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 18;
  (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (2);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('You find Lariska on her bed bawling her eyes out. You sit next to her and give her a hug without saying anything, knowing she is going through a lot right now. After the tears subside you ask her if she wants to talk about it.');
  scene.text('"I told Lev I was pregnant and he screamed at me about not using a morning-after pill. Then he demanded I get an abortion. We got into a huge fight, and when I demanded to know if he was actually groping some girl at the disco he didn\'t even deny it."');
  scene.text('"I\'m sorry, sweetie. I know you really liked him."');
  if (((s as any).LariskaQW ?? 0)?.['boyfriend'] === 2) {
    scene.text('"I should have listened to you about getting a boyfriend, then I denied that you saw him with some other girl. Even when I was so mean about it, you never abandoned me. Thank you, I don\'t think I could do this without you."');
  } else {
    scene.text('"I should have listened to you about him being with some other girl. Even when I was so mean about it, you never abandoned me. Thank you, I don\'t think I could do this without you."');
  }
  scene.text('"Don\'t worry, I\'m not going anywhere."');
  scene.text('"I still don\'t know how to tell my mom."');
  scene.text('"When you\'re ready, we can do it together."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterBoyfriend_9(s: GameState, scene: SceneBuilder): void {
  (s as any).LariskaBoyDay = 0;
  ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 19;
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('You find Lariska staring off into space, eyes puffy and nose red. She obviously has been crying recently, again, but for the moment her eyes were dry.');
  scene.text('"Are you doing ok, sweetie?"');
  scene.text('She looks at you, sniffling, and says "I told my mom and she took me to see the doctor today, but their tests said I had a miscarriage. My stomach has been hurting the last couple of days, but I just thought that was normal."');
  scene.text('Reaching out you take her hand, interlocking her fingers with yours. "Don\'t worry, there will be other guys, and more chances to have babies later on. For now you should just try to focus on the things you want in life, like sports, and getting ready for University."');
  if (((s as any).vballVars ?? 0)?.['lariska_team'] === 1) {
    scene.text('"Maybe you\'re right," she says, sighing. At least I never told Albina or Coach Mikhail I was pregnant, so I can still be a cheerleader and play Volleyball."');
  } else {
    scene.text('"Maybe you\'re right," she says, sighing. At least I never told Albina I was pregnant, so I can still be a cheerleader."');
  }
  scene.text('"See, It\'s going to be ok."');
  scene.text('"I\'m going to stop trying to find a boyfriend, and will stick to anal when I do mess around. Maybe someday, after I\'ve accomplished some things, I\'ll reconsider. For now though, can it just be us? Boys as toys only?"');
  scene.text('Giggling, you answer with "Yeah, for now it\'s just you and me."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'story_intro':
      enterStoryIntro(s, scene);
      break;
    case 'GettingToKnow':
      enterGettingToKnow(s, scene);
      break;
    case 'Boyfriend_1':
      enterBoyfriend_1(s, scene);
      break;
    case 'Boyfriend_2':
      enterBoyfriend_2(s, scene);
      break;
    case 'Boyfriend_3':
      enterBoyfriend_3(s, scene);
      break;
    case 'Boyfriend_4':
      enterBoyfriend_4(s, scene);
      break;
    case 'Boyfriend_5':
      enterBoyfriend_5(s, scene);
      break;
    case 'Boyfriend_6':
      enterBoyfriend_6(s, scene);
      break;
    case 'Boyfriend_7':
      enterBoyfriend_7(s, scene);
      break;
    case 'Boyfriend_8':
      enterBoyfriend_8(s, scene);
      break;
    case 'Boyfriend_9':
      enterBoyfriend_9(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lariska_storyline: LocationDef = {
  name: 'lariska_storyline',
  title: 'You carefully walk up behind her, trying your best not to di',
  region: 'other',
  enter: enter,
};
