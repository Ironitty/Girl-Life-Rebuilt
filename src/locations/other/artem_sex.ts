import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
  qspCall(s, 'npcStat', 'A2');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/hj1.jpg');
  scene.text('You rub his hard dick through his pants for a few seconds before sliding off his lap, kneeling next to the bed as you unbutton his pants and reach inside. His erect cock springs free as soon as you pull it out, and it seems to almost be pulsing by your touch. He moans softly as you slowly start stroking his dick.');
  qspCall(s, 'arousal', 'hj', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/hj2.jpg');
    scene.text('Several minutes go by and you\'re starting to think this will take a while when cum suddenly starts shooting out of his cock. It flies up, narrowly missing your face, and lands on his pants, the bed and your hands.');
    // TODO-QSP: dynamic text: "Wow, that was amazing, <<$pcs_nickname>>! You're the best!" he blurts out.
    scene.text(`"Wow, that was amazing, ${((s as any).pcs_nickname ?? 0)}! You're the best!" he blurts out.`);
    if (((s as any).artemQW ?? 0)?.['hj'] === 0) {
      scene.text('You smile at him. "Was that your first time?"');
      scene.text('He blushes hard. "Sorry… Was it that obvious? I\'ll do better next time…" He\'s deeply embarrassed at the idea of thinking he did something wrong.');
      scene.text('You shake your head. "No, I was just curious is all."');
      scene.text('He smiles, but is still bright red. "Oh… Okay."');
    }
    (s as any).artemQW['hj'] = ((s as any).artemQW['hj'] ?? 0) + (1);
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'cum_call', 'hands', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/cleanhands.jpg');
    scene.text('You grab some tissues off his nightstand and start cleaning his cum off your hands as he blushes. "Sorry."');
    scene.text('You smile at him. "Nothing to be sorry for. It\'s just part of sex."');
    scene.text('He just smiles and looks at you as if you\'re the most fantastic thing in the world. You finish cleaning off your hands, then give him a quick kiss.');
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_chat', 'chat'] },
      { label: 'Wander around his room', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
      { label: 'Lick it up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/lickupcum.jpg');
    scene.text('You keep hold of his dick and stroke it a few more times until you\'ve milked every last drop out of him before you start licking the cum from your hands. His eyes grow wide as he watches you. Once you lick your hands clean, you also lick his dick clean. "You didn\'t have to do that. I have tissues you can use."');
    scene.text('You smile at him. "It\'s okay. I like the way it tastes."');
    scene.text('He just smiles and looks at you as if you\'re the most fantastic thing in the world. You finish cleaning off your hands, then give him a quick kiss.');
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'cum_call', 'mouth', 'A2', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_chat', 'chat'] },
      { label: 'Wander around his room', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtemBj(s: GameState, scene: SceneBuilder): void {
  if (((s as any).artemQW ?? 0)?.['date'] === 5) {
    (s as any).artemQW['date'] = 6;
  }
  (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj2.jpg');
  scene.text('You slide off his lap and keep rubbing his dick through his jeans. As you do, you tell him to stand up. He does so and you unbutton his pants and reach inside, sliding your hand down until you can feel his cock in your hand.');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Pull his pants down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj3.jpg');
    scene.text('After giving it a few strokes, you pull your hand back out and finish unbuttoning his pants. Once they\'re entirely undone, you pull them and his underwear down to his mid-thighs, causing his dick to spring free. You take hold of it and start stroking it as you slide off the bed onto your knees.');
    qspCall(s, 'arousal', 'hj', 3);
    qspCall(s, 'stat', '');
    if (((s as any).artemQW ?? 0)?.['bj'] === 0) {
      scene.actions([
        { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).artemQW['bj'] = ((s as any).artemQW['bj'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj4.jpg');
    scene.text('You open your mouth and wrap your lips around his shaft while you keep stroking it with your hand. He moans loudly as soon as his cock is inside your mouth. After spending barely a few seconds sucking it, you suddenly feel a stream of cum shoot in your mouth without warning. The surprise of it causes you to pull away.');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj6.jpg');
    scene.text('As his dick leaves your mouth, another stream of cum hits you in the face, followed by a few smaller ones. You stroke him until he finally stops cumming, covering your lips, chin and cheek with cum while your tongue is also coated. Once he finishes, he apologizes rather sheepishly.');
    scene.text('You give him a smile as he grabs a tissue to clean up his dick.');
    scene.text('"First time?" you ask.');
    scene.text('He blushes hard. "Sorry… Was it that obvious? I\'ll do better next time…" He\'s deeply embarrassed at the idea of thinking he did something wrong.');
    scene.text('You shake your head. "No, I was just curious is all."');
    scene.text('He smiles, but is still bright red. "Oh… Okay."');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    qspCall(s, 'cum_call', 'mouth', 'A2', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_chat', 'chat'] },
      { label: 'Wander around his room', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).artemQW['bj'] = ((s as any).artemQW['bj'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj4.jpg');
    scene.text('You open your mouth and wrap your lips around his shaft while you keep stroking him with your hand. He moans softly as soon as his cock is inside your mouth and you start sucking while stroking it with one hand. Glancing up at him as you suck his dick, he seems to have a look of concentration on his face. If you had to guess, he\'s trying to make himself last as long as he can.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj5.jpg');
    // TODO-QSP: dynamic text: You remove your hand and wrap your lips as tightly as you can around his shaft b...
    scene.text(`You remove your hand and wrap your lips as tightly as you can around his shaft before bobbing your head back and forth, taking as much of him into your mouth as you can. You spend several minutes like this before he finally says "I'm cumming! I want to cum on your face, ${((s as any).pcs_nickname ?? 0)}!"`);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj6.jpg');
    scene.text('You pull your head back until his dick pops out of your mouth before you take it in your hand and quickly start jerking it. Almost at once, a hot stream of jizz hits you right on the lips, another hits your cheek and the last one lands on your chin. A few more drops splatter on the floor beneath you.');
    // TODO-QSP: dynamic text: "You're the best girlfriend a guy could hope for, <<$pcs_nickname>>," he says as...
    scene.text(`"You're the best girlfriend a guy could hope for, ${((s as any).pcs_nickname ?? 0)}," he says as he grabs a tissue to clean up.`);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_chat', 'chat'] },
      { label: 'Wander around his room', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_had_sex['A2'] = ((s as any).npc_had_sex['A2'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/first2.jpg');
  // TODO-QSP: dynamic text: You kiss him again as he puts his hands on your <<$titsize>> breasts and massage...
  scene.text(`You kiss him again as he puts his hands on your ${((s as any).titsize ?? 0)} breasts and massages them through your clothes. As you straddle his lap, you can feel his dick getting hard and pressing against you.`);
  scene.text('You impatiently tug at his clothes and finally manage to unbutton his pants. When you reach for his cock, you can feel it\'s already fully erect. You keep kissing him as you jerk him off.');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Strip down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first3.jpg');
    // TODO-QSP: dynamic text: You stop and climb off him. Then, standing on his bed, you start stripping in fr...
    scene.text(`You stop and climb off him. Then, standing on his bed, you start stripping in front of him, giving him a little show as you remove your clothes. You revel in his undivided attention. "You're so beautiful, ${((s as any).pcs_nickname ?? 0)}," he mutters.`);
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.text('"Nice buttplug," he grins. "Do you always…"');
      scene.text('"Hush…" you tell him while pressing a finger against his lips.');
    }
    qspCall(s, 'arousal', 'flashlite', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pull his pants off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first4.jpg');
    scene.text('With your clothes no longer a problem, you turn your attention to his own. You unbutton his pants, then grab them by the legs and pull them and his underwear off. With them free, you toss his pants and underwear across the room, his erect cock standing at attention now that it\'s free.');
    qspCall(s, 'arousal', 'foreplay', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first5.jpg');
    scene.text('You drop to your knees, stroking his cock before you take it into your mouth. You start enthusiastically sucking him off and do everything you can to make him feel good.');
    // TODO-QSP: dynamic text: After a few minutes, you hear him muttering "<<$pcs_nickname>>, I want you…"
    scene.text(`After a few minutes, you hear him muttering "${((s as any).pcs_nickname ?? 0)}, I want you…"`);
    scene.text('He gathers all his courage and looks at you expectantly. You can tell from the greedy look in his eyes that he wants to fuck you now.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    if (((s as any).mesec ?? 0) > 0) {
      if (((s as any).artemQW ?? 0)?.['anal'] > 0) {
        scene.actions([
          { label: 'Tell him you\'re on your period', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You take his dick out of your mouth. "Sorry Artem, but it\'s that time of the month. We can\'t."');
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.text('"Since you seem to like buttplugs so much, how about I fuck your ass again then?" he replies.');
    } else {
      scene.text('"How about I fuck your ass again then?" he replies.');
    }
    if (((s as any).analPlugIn ?? 0) === 1) {
      qspCall(s, 'willpower', 'anal', 'resist', 'hard');
    } else {
      qspCall(s, 'willpower', 'anal', 'resist', 'medium');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Finish him with your mouth [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Finish him with your mouth', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first5.jpg');
    scene.text('You take his dick out of your mouth and shake your head. "No. I know we did it before, but I don\'t want to do it this time."');
    // TODO-QSP: dynamic text: Artem looks at the floor. "I'm sorry, <<$pcs_nickname>>… I shouldn't have tried ...
    scene.text(`Artem looks at the floor. "I'm sorry, ${((s as any).pcs_nickname ?? 0)}… I shouldn't have tried to talk you into it."`);
    scene.text('You take his hand in yours and reassure him. "It\'s okay, babe. Just… Don\'t pressure me for anal, okay? I\'ll let you know when I\'m ready for it."');
    scene.text('He nods hopefully, pleased that you\'ll still give him a blowjob after his blunder and that you\'re still open to having anal sex with him someday.');
    scene.actions([
      { label: 'Just keep sucking', goto: ['artem_sex', 'bj'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to have anal sex instead', goto: ['artem_sex', 'anal'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him you\'re on your period', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You take his dick out of your mouth and smile at him apologetically. "Sorry Artem. I\'d love to, but it\'s that time of the month, you know? I bet I could still make you feel good with my mouth."');
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.text('Artem blushes, but presses on. "Since you\'re already wearing that buttplug, maybe I can try your ass then? I heard it would feel excellent for both of us…"');
    } else {
      scene.text('Artem blushes, but presses on. "Maybe I can try your ass then? I heard it would feel excellent for both of us…"');
    }
    if (((s as any).analPlugIn ?? 0) === 1) {
      qspCall(s, 'willpower', 'anal', 'resist', 'hard');
    } else {
      qspCall(s, 'willpower', 'anal', 'resist', 'medium');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Finish him with your mouth [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Finish him with your mouth', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first5.jpg');
    scene.text('You take his dick out of your mouth and shake your head. "No. I know we did it before, but I don\'t want to do it this time."');
    // TODO-QSP: dynamic text: Artem looks at the floor. "I'm sorry, <<$pcs_nickname>>… I shouldn't have tried ...
    scene.text(`Artem looks at the floor. "I'm sorry, ${((s as any).pcs_nickname ?? 0)}… I shouldn't have tried to talk you into it."`);
    scene.text('You take his hand in yours and reassure him. "It\'s okay, babe. Just… Don\'t pressure me for anal, okay? I\'ll let you know when I\'m ready for it."');
    scene.text('He nods hopefully, pleased that you\'ll still give him a blowjob after his blunder and that you\'re still open to the prospect of having anal sex with him someday.');
    scene.actions([
      { label: 'Just keep sucking', goto: ['artem_sex', 'bj'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to have anal sex instead', goto: ['artem_sex', 'anal'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('You take his dick out of your mouth for a second and smile apologetically. "Sorry Artem, but I\'m still a virgin, and I\'m not sure if I\'m ready yet. I bet I could still make you feel good with my mouth."');
      scene.text('Artem blushes, but presses on. "I\'d like to be your first. So it can be both of our first times together."');
      qspCall(s, 'arousal', 'bj', 1);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Lose your virginity', handler: (st: GameState) => {
    (s as any).artemQW['sex'] = ((s as any).artemQW['sex'] ?? 0) + (1);
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first7.jpg');
    if (((s as any).preziktype ?? 0) !== 1) {
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
        (s as any).mc_inventory['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
        (s as any).noprotect = 0;
        scene.text('You grab a condom out of your purse and tell him to put it on. He struggles to do so, but eventually manages to get it.');
      } else {
        (s as any).noprotect = 1;
        scene.text('"You do have a condom, right?" you ask.');
        scene.text('"I… No, I don\'t have any… I haven\'t exactly had any use for those yet," he says a little defensively.');
        scene.text('Not wanting to hurt his feelings, you tell him it\'s okay.');
      }
    } else {
      (s as any).noprotect = 1;
    }
    // TODO-QSP: dynamic text: You quickly roll over onto your back and spread your legs wide, offering yoursel...
    scene.text(`You quickly roll over onto your back and spread your legs wide, offering yourself to him. He gets up and crawls over to you, crawling between your legs as he kneels before you. He rubs the tip of his dick against your wet slit, getting the head of his dick wet before he slowly and gently pushes himself inside you. You feel his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock stretching your pussy and filling it. As he goes in further, you feel the sharp pain of your hymen tearing, but after a few minutes of him slowly making love to you while looking in your eyes with love and affection, the pain fades. After a while, you make a suggestion. "Why don't you lay on your back and let me get on top?"`);
    qspCall(s, 'pain', '', 2, 'vaginal', 'tear');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first9.jpg');
    scene.text('You crawl over to him, noticing a bit of your blood on his dick. A quick glance between your legs reveals a small trickle has also run out of your pussy. Using tissues from the nightstand, you wipe the blood away before straddling Artem.');
    scene.text('You take hold of his cock and guide it back inside your pussy as you slowly lower yourself. You then start eagerly riding him as he grunts loudly. You can tell he\'s going to cum soon.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['artem_sex', 'cum_surprise'] },
    ]);
  } },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first5.jpg');
    scene.text('You shake your head as you keep stroking his dick with your hand. "Sorry, I\'m not ready. Besides, my mother would kill me."');
    scene.text('He sighs and nods in understanding before blushing "Maybe I can try your ass then? I heard it would feel excellent for both of us…"');
    qspCall(s, 'arousal', 'hj', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree to have anal sex instead', goto: ['artem_sex', 'anal'] },
      { label: 'Just keep sucking', goto: ['artem_sex', 'bj'] },
    ]);
  } },
        { label: 'Do anal instead', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first5.jpg');
    if (((s as any).artemQW ?? 0)?.['anal'] > 0) {
      scene.text('You take his dick out of your mouth. "How about we have anal sex again?"');
      scene.text('"That sounds great!" he immediately replies.');
      if (((s as any).analPlugIn ?? 0) === 1) {
        scene.text('He immediately grabs your buttplug and slowly pulls it out of your ass.');
      }
      scene.text('With his encouragement you get into a doggystyle position.');
      scene.actions([
        { label: 'Get butt fucked', goto: ['artem_sex', 'anal'] },
      ]);
    } else {
      scene.text('You take his dick out of your mouth. "Would you like to fuck me in the ass?"');
      scene.text('"Uh, yeah, sure," he stutters. "That sounds great." He seems a little surprised at your suggestion, but likes the idea. With his encouragement, you get into a doggystyle position.');
      scene.actions([
        { label: 'Get butt fucked', goto: ['artem_sex', 'anal'] },
      ]);
    }
  } },
        { label: 'Have sex', handler: (st: GameState) => {
    (s as any).artemQW['sex'] = ((s as any).artemQW['sex'] ?? 0) + (1);
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first7.jpg');
    if (((s as any).preziktype ?? 0) !== 1) {
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
        (s as any).mc_inventory['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
        (s as any).noprotect = 0;
        scene.text('You grab a condom out of your purse and tell him to put it on. He struggles do so, but eventually manages to get it.');
      } else {
        (s as any).noprotect = 1;
        scene.text('"You do have a condom, right?" you ask.');
        scene.text('"I… No, I don\'t have any… I haven\'t exactly had any use for those yet," he says a little defensively.');
        scene.text('Not wanting to hurt his feelings, you tell him it\'s okay.');
      }
    } else {
      (s as any).noprotect = 1;
    }
    // TODO-QSP: dynamic text: You quickly roll over onto your back and spread your legs wide, offering yoursel...
    scene.text(`You quickly roll over onto your back and spread your legs wide, offering yourself to him. He gets up and crawls over to you, crawling between your legs as he kneels before you. He rubs the tip of his dick against your wet slit, getting the head of his dick wet before he slowly and gently pushes himself inside you. You feel his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock stretching your pussy and filling it. After a few minutes of him slowly making love to you, he speaks up. "I want to try doggystyle, please."`);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Roll over', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first8.jpg');
    scene.text('When he pulls out, you roll over and get on your hands and knees, presenting yourself to him. He moves in behind you and rubs the head of his dick against your wet slit before slowly pushing himself back inside you. He gently pushes himself inside you and squeezes and smacks your ass several times as he makes love to you. After several minutes he starts to pant, so you make a suggestion. "Why don\'t you get on your back and let me get on top?"');
    scene.text('He grins and pulls out of you before eagerly getting on his back.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/first9.jpg');
    scene.text('You crawl over to him, straddling him as you lower yourself down and guide his dick back inside your pussy before you start eagerly riding him as he grunts loudly. You can tell he\'s going to cum soon.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['artem_sex', 'cum_surprise'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
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

function enterCumSurprise(s: GameState, scene: SceneBuilder): void {
  if (Math.floor(Math.random() * 10) + 1 === 1  &&  ((s as any).noprotect ?? 0) === 1) {
    if (((s as any).artemQW ?? 0)?.['confidence'] === 0) {
      (s as any).artemQW['confidence'] = 1;
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (1);
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/firstcpie.jpg');
    scene.text('As you\'re riding him, getting lost in your own pleasure, you glance down and see him tense up before feeling his cum shoot into you. It oozes out of your pussy as you lift yourself up.');
    // TODO-QSP: dynamic text: That's when he realizes that he just came inside you. "Oh my god! I'm so sorry, ...
    scene.text(`That's when he realizes that he just came inside you. "Oh my god! I'm so sorry, ${((s as any).pcs_nickname ?? 0)}! I didn't mean to do that!"`);
    scene.text('You smile as you get off him. "It\'s okay, don\'t worry about it." He looks relieved, obviously thinking you\'re on birth control.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'artem_sex', 'after_sex', 'cp');
  } },
    ]);
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 2) {
      (s as any).artemQW['confidence'] = 2;
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/firstfacial.jpg');
    // TODO-QSP: dynamic text: As you're riding him, getting lost in your own pleasure, you glance down and see...
    scene.text(`As you're riding him, getting lost in your own pleasure, you glance down and see him tense up. "${((s as any).pcs_nickname ?? 0)}! I'm going to cum…" he warns you.`);
    scene.text('You quickly climb off him and he rolls up to his knees. You start jerking his cock and a stream of cum hits you in the face. You open your eyes once the last of his cum has landed on you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'artem_sex', 'after_sex', 'facial');
  } },
    ]);
  }
  scene.build();
}

function enterAfterSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  if (((s as any).artemQW ?? 0)?.['sex'] === 1) {
    scene.text('You run your hand over his chest and smile at him. "So… You\'re a man now…"');
    // TODO-QSP: dynamic text: He's not sure what to say. "<<$pcs_nickname>>… I… I love you…" he mutters.
    scene.text(`He's not sure what to say. "${((s as any).pcs_nickname ?? 0)}… I… I love you…" he mutters.`);
    scene.text('You don\'t say anything, but just cuddle with him for a while. You can tell it means a lot to him.');
  }
  scene.text('You get up and start getting dressed and cleaned up. "I should probably get going," you tell him.');
  if (((s as any).locArgs?.[1] ?? 0) === 'cp') {
    qspCall(s, 'cum_call', '', '', 'A2', 1);
  } else {
    qspCall(s, 'cum_call', 'face', 'A2', 1);
  }
  qspCall(s, 'arousal', 'vaginal', 2);
  qspCall(s, 'arousal', 'end');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).cumspclnt = 11;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
  ]);
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/first6.jpg');
  scene.text('You suck his cock while fondling yourself with one hand as the other strokes his dick. Several minutes go by as you listen to him moan as you pleasure both him and yourself.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>… I'm going to cum…" he warns you.
  scene.text(`"${((s as any).pcs_nickname ?? 0)}… I'm going to cum…" he warns you.`);
  qspCall(s, 'arousal', 'clit_finger', (-5), 'masturbate');
  qspCall(s, 'arousal', 'bj', 5, 'dom');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/firstfacial.jpg');
    scene.text('You keep sucking his dick until you\'re sure he\'s about to cum. You barely get your mouth off his cock before a stream of cum hits you in the face. You open your eyes once the last of his cum has landed on you.');
    scene.text('You give him a sweet smile as you give his cock a kiss. "I know it\'s not what you wanted, but did you enjoy it?"');
    // TODO-QSP: dynamic text: He happily nods. "It was great! Thanks <<$pcs_nickname>>, you're the best!"
    scene.text(`He happily nods. "It was great! Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!"`);
    scene.text('With that, you get up and start getting dressed and cleaned up. "I should probably get going," you tell him.');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).artemQW['anal'] = 1;
  if (((s as any).artemQW ?? 0)?.['anal'] === 0) {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 3) {
      (s as any).artemQW['confidence'] = 3;
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    }
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 3) {
      (s as any).artemQW['confidence'] = 3;
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
    }
  }
  qspCall(s, 'boyStat', 'A2');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/firstanal1.jpg');
  if (((s as any).analPlugIn ?? 0) === 1) {
    scene.text('You allow Artem to pull the buttplug out of your ass and then get in position.');
  }
  scene.text('Once you\'re on all fours, he grabs some lotion and rubs it on your asshole before rubbing some along his dick. He then scoots up behind you and you feel the tip of his dick pressing against your anus. The pressure keeps building up until the head of his dick suddenly pops into your ass.');
  if (((s as any).pcs_ass ?? 0) < 10) {
    // TODO-QSP: dynamic text: You hiss in pain and he stops moving. "Are you alright, <<$pcs_nickname>>?" he a...
    scene.text(`You hiss in pain and he stops moving. "Are you alright, ${((s as any).pcs_nickname ?? 0)}?" he asks in a concerned tone.`);
    scene.text('You nod and look back over your shoulder at him. "Yes. Just go slow, okay?"');
  } else {
    // TODO-QSP: dynamic text: You let out a soft groan and he stops moving. "Are you alright, <<$pcs_nickname>...
    scene.text(`You let out a soft groan and he stops moving. "Are you alright, ${((s as any).pcs_nickname ?? 0)}?" he asks in a concerned tone.`);
    scene.text('You nod and look back over your shoulder at him. "Yes, it feels nice. Just go slow, okay?"');
    // TODO-QSP: dynamic text: You let out a moan and he stops moving. "Are you alright, <<$pcs_nickname>>?" he...
    scene.text(`You let out a moan and he stops moving. "Are you alright, ${((s as any).pcs_nickname ?? 0)}?" he asks in a concerned tone.`);
    scene.text('You nod and look back over your shoulder at him. "Yes, it feels great. Just go slow, okay?"');
  }
  // TODO-QSP: dynamic text: He smiles at you. "I will, I promise." He slowly pushes his <<dick>>cm <<$dick_g...
  scene.text(`He smiles at you. "I will, I promise." He slowly pushes his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock further into your ass. He makes slow, shallow thrusts, letting you get used to him.`);
  qspCall(s, 'arousal', 'anal', 5, 'lube');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Anal bliss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/firstanal2.jpg');
    scene.text('Once you get used to his dick filling up your ass, he starts going a little deeper, but keeps thrusting gently, more making love to your ass than fucking it. You moan in pleasure and start rubbing your clit with one of your hands to make it feel better. You even start pushing back against him to take him a little deeper.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'arousal', 'clit_finger', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cumming', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/facial.jpg');
    // TODO-QSP: dynamic text: It doesn't seem like any time has passed when your thoughts are interrupted as h...
    scene.text(`It doesn't seem like any time has passed when your thoughts are interrupted as he pulls out of you. "I'm going to cum, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You quickly turn round and start jerking his cock before a stream of cum hits you in the face. You open your eyes once the last of his cum has landed on you.');
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.text('You grab your buttplug from where Artem dropped it on the bed and use some spit to lubricate it before you push it into your ass.');
      scene.text('It\'s not as good as being filled up with Artem\'s cock was, but you enjoy it.');
    }
    scene.text('With that, you get up and start getting dressed and cleaned up. "I should probably get going," you tell him.');
    qspCall(s, 'arousal', 'hj', 2);
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    qspCall(s, 'arousal', 'end');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).cumspclnt = 11;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlutBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  (s as any).artemQW['bj'] = ((s as any).artemQW['bj'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
  (s as any).artemQW['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj3.jpg');
  scene.text('You slide off the bed onto your knees in front of him. His stiff, erect cock is right in front of your face, so you grab it with your hand and start stroking and kissing it before you start licking the head, getting a taste of his precum. He moans softly as you play with his dick.');
  qspCall(s, 'arousal', 'hj', 3, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj4.jpg');
    scene.text('You open your mouth and wrap your lips around his shaft while you keep stroking him with your hand. He moans softly as soon as his cock is inside your mouth and you start sucking while stroking it with one hand. Glancing up at him as you suck his dick, he seems to have a look of concentration on his face. If you had to guess, he\'s trying to make himself last as long as he can.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj5.jpg');
    scene.text('You remove your hand and wrap your lips as tightly as you can around his shaft before bobbing your head back and forth, taking as much of him into your mouth as you can. You spend several minutes sucking him off, listening to him moan before he starts thrusting into your mouth, trying to fuck your mouth. You can tell he\'s about to cum as he moans louder and louder.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj6.jpg');
    scene.text('You pull your head back until his dick pops out of your mouth before you take it in your hand and quickly start jerking it. Almost at once, a hot stream of jizz hits you right on the lips, another hits your cheek and the last one lands on your chin. A few more drops splatter on the floor beneath you.');
    // TODO-QSP: dynamic text: "I think we're done for the day, <<$pcs_nickname>>. I have some things I need to...
    scene.text(`"I think we're done for the day, ${((s as any).pcs_nickname ?? 0)}. I have some things I need to do, so can you please leave now?" he asks as he grabs a tissue to clean up his dick, so you gather your clothes and get dressed.`);
    qspCall(s, 'arousal', 'hj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlutFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  if (((s as any).artemQW ?? 0)?.['confidence'] < 2) {
    (s as any).artemQW['confidence'] = 2;
  } else {
    (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
  }
  (s as any).artemQW['sex'] = ((s as any).artemQW['sex'] ?? 0) + (1);
  (s as any).artemQW['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/first3.jpg');
  scene.text('You start stripping before him, giving him a little show as you remove your clothes, revelling in his undivided attention.');
  scene.text('"Lie down on your side," he mutters once you\'re naked.');
  qspCall(s, 'arousal', 'flash', 2, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Lay on your side', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/slutfuck1.jpg');
    scene.text('Once you get on your side, he lies beside you and pulls your legs up; you accommodate him by pulling your knees up to your chest and spreading your legs wide to give him easy access. He grabs hold of his dick and scoots up until the head of his dick is against your pussy. It takes him a few tries to penetrate you, showing his inexperience. Once he does get it in though, he nearly jams it in balls deep with his first thrust.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/slutfuck2.jpg');
    scene.text('He scoots a little closer to you as he fucks your pussy balls deep as hard and fast as he can. He clearly doesn\'t care if you\'re enjoying it and is just doing what feels best for him.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).artemQW['sex'] = ((s as any).artemQW['sex'] ?? 0) + (1);
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/slutfuck3.jpg');
    scene.text('He continues to hammer away at your pussy. It seems even Artem is no different from any other guy; he only cares about getting it stuck in and doesn\'t care about the girl. You make the best of things and focus on enjoying it.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/facial.jpg');
    scene.text('He pulls his dick out of you and rolls onto his knees as you take his dick in your hand and start stroking it. Almost at once, a hot stream of jizz hits you right in the face, another hits your cheek and the last one lands on your chin.');
    // TODO-QSP: dynamic text: "I think we're done for the day, <<$pcs_nickname>>. I have some things I need to...
    scene.text(`"I think we're done for the day, ${((s as any).pcs_nickname ?? 0)}. I have some things I need to do, so can you please leave now?" he asks as he grabs a tissue to clean up his dick, so you gather your clothes and get dressed.`);
    qspCall(s, 'arousal', 'hj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
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

function enterSlutAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A2');
  if (((s as any).artemQW ?? 0)?.['anal'] === 0) {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 3) {
      (s as any).artemQW['confidence'] = 3;
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    }
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 3) {
      (s as any).artemQW['confidence'] = 3;
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
    }
  }
  (s as any).artemQW['anal'] = 1;
  (s as any).artemQW['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/first3.jpg');
  // TODO-QSP: dynamic text: You start stripping before him, giving him a little show as you remove your clot...
  scene.text(`You start stripping before him, giving him a little show as you remove your clothes, reveling in his undivided attention. Once you're fully naked, he mutters "Get on your hands and knees, ${((s as any).pcs_nickname ?? 0)}."`);
  qspCall(s, 'arousal', 'flash', 2, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get on your hands and knees', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/slutanal1.jpg');
    scene.text('Once you\'re on all-fours, he grabs some lotion and rubs it on your asshole, then rubs some along his dick. He scoots up behind you, and you feel the tip of his dick pressing against your anus. In his inexperienced haste, it takes him several tries until the head of his dick suddenly pops into your ass. You hiss in pain as he moans in pleasure. "It\'s tighter than I was expecting!"');
    scene.text('You nod and look back over your shoulder at him. "Yes. Just go slow, okay?"');
    scene.text('He snorts. "Like you don\'t get your ass pounded every day! Everyone knows sluts love it, or they wouldn\'t do it." He starts fucking your ass with hard, fast thrusts whiel grabbing hold of your hips so you can\'t pull away.');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/slutanal2.jpg');
    // TODO-QSP: dynamic text: He scoots closer to you as he fucks your ass until his <<dick>>cm <<$dick_girth>...
    scene.text(`He scoots closer to you as he fucks your ass until his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)}cock is balls deep inside you and he starts fucking you as hard and fast as he can. He clearly doesn't care if you're enjoying it and is just doing what feels best for him. It seems nice guy Artem is no different than any other guy; he only cares about getting it stuck in and doesn't care about the girl. You make the best of things and focus on enjoying it.`);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/facial.jpg');
    scene.text('He suddenly pulls his dick out of you. "I want to cum on your face."');
    scene.text('You do as he asks and turn round before taking his dick in your hand and stroking it. Almost at once, a hot stream of jizz hits you right in the face, another hits your cheek and the last one lands on your chin.');
    // TODO-QSP: dynamic text: "I think we're done for the day, <<$pcs_nickname>>. I have some things I need to...
    scene.text(`"I think we're done for the day, ${((s as any).pcs_nickname ?? 0)}. I have some things I need to do, so can you please leave now?" he asks as he grabs a tissue to clean up his dick, so you gather your clothes and get dressed.`);
    qspCall(s, 'arousal', 'hj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'A2', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3some(s: GameState, scene: SceneBuilder): void {
  (s as any).artemQW['nushart_oral'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some1.jpg');
  scene.text('He just nods and you talk about how things will go before your phone buzzes; it\'s a text from Anushka containing more emojis. Seeing this, Artem gets up and leaves the room, returning a few minutes later with Anushka following him.');
  scene.text('"Not a bad looking apartment," she says. "Looks way nicer than any of the others I\'ve seen around here."');
  scene.text('He nods, but you can see the proud smile. "Thanks."');
  scene.text('She looks around the room and you can see her smirking. "Yep, exactly how I pictured it. Nerd nirvana." He glances at you, but doesn\'t say anything. You\'re not sure if he knows how to take what she just said.');
  scene.text('As they get close to the couch, she pushes him down next to you while pulling you up with one hand. She starts stripping down to her underwear while silently encouraging you to do the same. You glance at Artem and see his eyes bulging. You\'re not sure if it\'s because of how she\'s acting or that it\'s really happening. With one of you on each side of him, you start exchanging kisses, but are sure to kiss Artem just as much. As you kiss Artem, Anushka pulls down her panties and bends over, inviting one of you to eat her out.');
  qspCall(s, 'arousal', 'kiss', 2, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Eat her out', goto: ['artem_sex', 'anushka_3some_oral2'] },
    { label: 'Make Artem eat her out', goto: ['artem_sex', 'anushka_3some_oral1'] },
  ]);
  scene.build();
}

function enterAnushka_3someOral1(s: GameState, scene: SceneBuilder): void {
  (s as any).artemQW['nushart_oral'] = ((s as any).artemQW['nushart_oral'] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some2.jpg');
  scene.text('You grab Artem by the hair and force his face into her crotch from behind, causing Anushka to moan loudly as you let go and watch the action. After a few minutes, you\'re ready to move on to something else, so you pull him away.');
  qspCall(s, 'arousal', 'erotic_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  if (((s as any).artemQW ?? 0)?.['nushart_oral'] <= 1) {
    scene.actions([
      { label: 'Eat her out', goto: ['artem_sex', 'anushka_3some_oral2'] },
    ]);
  } else {
    scene.actions([
      { label: 'Give Artem a blowjob', goto: ['artem_sex', 'anushka_3some_bj'] },
    ]);
  }
  scene.build();
}

function enterAnushka_3someOral2(s: GameState, scene: SceneBuilder): void {
  (s as any).artemQW['nushart_oral'] = ((s as any).artemQW['nushart_oral'] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some3.jpg');
  scene.text('You look at her inviting pussy and can\'t help yourself. You move in behind Anushka, bury your face in her pussy and start licking. She starts quickly getting wet as she moans loudly.');
  scene.text('You eat her out for a few minutes with no idea what Artem is doing before you pull away and see him staring at you wide-eyed and flushed.');
  qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).artemQW ?? 0)?.['nushart_oral'] <= 1) {
    scene.actions([
      { label: 'Make Artem eat her out', goto: ['artem_sex', 'anushka_3some_oral1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Give Artem a blowjob', goto: ['artem_sex', 'anushka_3some_bj'] },
    ]);
  }
  scene.build();
}

function enterAnushka_3someBj(s: GameState, scene: SceneBuilder): void {
  (s as any).artemQW['nushart_oral'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some4.jpg');
  scene.text('You all strip down before you push Artem onto his back on the ottoman. His dick is already hard from watching what happened or at the thought of what will come. You get on your hands and knees on the couch between his legs and start stroking his cock with your hand before you take it into your mouth, bobbing your head up and down on his shaft. As you do, you feel a warm wet tongue starts lapping at your clit as Anushka starts eating you out.');
  qspCall(s, 'arousal', 'bj', 2);
  qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Tell Anushka to suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some5.jpg');
    scene.text('You pop his dick out of your mouth and look back at Anushka. "Get up here and suck this cock like the good little slut you are!"');
    scene.text('She stops eating you out to look up at you with an amused smirk on her face before she moves up and kneels down beside the couch. She obediently takes his cock in one hand and starts stroking it while she takes the head of his dick into her mouth, tightly wraps her lips around his shaft and starts sucking. After you\'re satisfied that she\'s doing what you want, you start licking his balls and hear him moaning loudly.');
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some6.jpg');
    // TODO-QSP: dynamic text: You grab hold of Anushka's head and pull it up so you can kiss her, after which ...
    scene.text(`You grab hold of Anushka's head and pull it up so you can kiss her, after which you straddle him. You lift yourself up, lining his dick up with your pussy and slowly lower yourself down on it, taking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside you. As you start riding him, Anushka moves up to his head, straddles his face and lowers herself down, grinding her crotch into his face as you ride him. You both moan from the pleasure of the acts and watching each other get pleasured.`);
    qspCall(s, 'arousal', 'vaginal', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch with Anushka', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some7.jpg');
    scene.text('Looking at Anushka sitting on his face as you ride him, you pull yourself off him. "Get over here. I want to see you ride this cock, slut."');
    // TODO-QSP: dynamic text: Anushka laughs at your comment. "Whatever you say, nerd tamer." She lifts hersel...
    scene.text(`Anushka laughs at your comment. "Whatever you say, nerd tamer." She lifts herself up and shimmies down his body until she's above his dick. You straddle his face and he starts licking your wet pussy as you watch Anushka lower herself down, impaling herself on his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock. She moans softly as she starts riding him in reverse cowgirl style.`);
    qspCall(s, 'arousal', 'cuni', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay on your side', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some8.jpg');
    scene.text('After a few minutes, you lean forward and slap her ass, which causes her to yelp a little in surprise. "Don\'t be greedy. I want another go."');
    scene.text('She scoffs. "Me? Greedy? You rode him for longer than I did!" She rolls her eyes and climbs off him as you lie down on your side next to him and he turns on his side to face you. You hold up one of your legs and Artem wastes no time. He slips his dick back inside and starts gently thrusting as Anushka gets down and starts licking and sucking his balls.');
    scene.text('You turn your head to kiss him. "I thought you wanted a little payback for all the teasing she\'s done?" you whisper.');
    scene.text('He kisses you back as he gently fucks you. "I do. It\'s… I don\'t…" You can tell he wants to, but likely lacks the confidence to do it.');
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Encourage Artem to take charge', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some9.jpg');
    scene.text('You slide off the ottoman and pat his cheek. "Just do it!" Anushka stands up and he glances at you, so you give him a nod of encouragement. Emboldened, he grabs Anushka and pushes her down on the ottoman in a manner that\'s forceful for him.');
    scene.text('She gasps a little at his sudden action, then looks up at him and bites her lower lip. You can tell it turned her on. "I didn\'t think you had it in you. Maybe you\'re not the shy submissive nerd I always took you for…"');
    scene.text('He grabs her leg and pulls her towards him until her ass is almost hanging off the end. He then pushes her legs apart and plunges his cock back into her pussy, causing her to moan as you move up towards her head and sit on her face. She starts eating you out as you glance at Artem and gives him a reassuring smile.');
    scene.text('"Can you hand me the lube?" he asks after a few minutes.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hand him the lube', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some10.jpg');
    scene.text('You reach over and grab the lube while grinding your pussy against Anushka\'s face and pass it back to him. You don\'t know if Anushka heard him or if she\'s just ignoring what the two of you are saying. You keep riding her face until you hear her muffled groan louder and glance back to see that Artem has inserted his dick into her ass and is slowly and gently butt fucking her.');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'BDSM', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Encourage him to get rough [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Encourage him to get rough', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['artem_sex', 'anushka_3some_rough1'] },
      ]);
    }
    scene.actions([
      { label: 'Ask him to butt fuck you', goto: ['artem_sex', 'anushka_3some_anal'] },
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

function enterAnushka_3someRough1(s: GameState, scene: SceneBuilder): void {
  (s as any).artemQW['rough_anal_nush'] = 1;
  (s as any).anushkaQW['domnush'] = ((s as any).anushkaQW['domnush'] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some11.jpg');
  scene.text('He\'s being slow and gentle, but know he wants to get rough with her, so you climb off her and kneel beside her waist so you can get a good look at Artem\'s cock sliding in and out of her ass. "Come on, fuck her already! Give it to her like you mean it!"');
  scene.text('Anushka looks up at him while biting her lower lip, but doesn\'t say anything. He looks at you when you speak up, then looks at her, and his gaze hardens just a bit before he looks back at you and nods. He starts ramming into her harder than before but is still not going all out. Anushka responds by moaning louder.');
  qspCall(s, 'arousal', 'erotic_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Ask him to butt fuck you', goto: ['artem_sex', 'anushka_3some_anal'] },
    { label: 'Bend her over', goto: ['artem_sex', 'anushka_3some_doggy'] },
  ]);
  scene.build();
}

function enterAnushka_3someAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some12.jpg');
  scene.text('You reach up and cup his face in your hands, holding his gaze so he looks directly into your eyes. "I want you to fuck my ass now."');
  // TODO-QSP: dynamic text: He grins widely at you and you move to straddle Anushka's face while Artem moves...
  scene.text(`He grins widely at you and you move to straddle Anushka's face while Artem moves around behind you, near the top of her head. He squirts some lube onto your asshole and works it in before he gently slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock up your ass, pausing when you tense up and only moving again when you relax. He's soon slowly, yet lovingly fucking your ass while Anushka eats you out.`);
  qspCall(s, 'arousal', 'anal', 2);
  qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Bend her over', goto: ['artem_sex', 'anushka_3some_doggy'] },
    { label: 'Eat her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some13.jpg');
    scene.text('You lower your head between Anushka\'s legs and start lapping at her clit, and she does the same to you as Artem continues fucking your ass. You know a part of him is trying to get out, to be rough and dominant, and you want to help him feel that way.');
    qspCall(s, 'arousal', 'anal', 2);
    qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bend her over', goto: ['artem_sex', 'anushka_3some_doggy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3someDoggy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some14.jpg');
  scene.text('You get up, pulling yourself away from all those sensations that were threatening to overwhelm you and slap Anushka on the thigh. "Get up and switch with me."');
  scene.text('She sits up and gives you a bemused look as Artem takes a step back to watch, eager to get it stuck back in. Anushka gets up and you get on the ottoman bench with your head facing Artem before you encourage her to straddle you and start licking her pussy. You push her forward so her upper body is lying on you, then slide your hands back to her ass and pull her ass cheeks apart, causing her asshole to gape a little. This is all the encouragement Artem needs as he quickly steps closer and slides his dick back up her ass. You can hear her moan loudly as he does.');
  qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'BDSM', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Encourage him to fuck her harder [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Encourage him to fuck her harder', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    (s as any).artemQW['rough_anal_nush'] = 1;
    (s as any).anushkaQW['domnush'] = ((s as any).anushkaQW['domnush'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some15.jpg');
    scene.text('You stop licking her pussy to say a few encouraging words. "Come on, baby! Fuck this slut\'s ass! Show her who\'s boss!"');
    scene.text('Instead of Artem responding, Anushka does. "Save your breath. Your pussy ass bitch of a boyfriend doesn\'t know how to fuck me like a man." You can tell by her teasing tone that she\'s also encouraging him to get rougher.');
    scene.text('"Shut up, slut!" he growls before he starts fucking her harder, causing Anushka to start crying out and moaning loudly before you feel her body spasm as an orgasm rips through her, causing her to get pretty loud. After she cums, he starts to slow down a little again.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'BDSM', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Encourage him to really pound her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Encourage him to really pound her', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    (s as any).artemQW['rough_anal_nush'] = 2;
    (s as any).anushkaQW['domnush'] = ((s as any).anushkaQW['domnush'] ?? 0) + (1);
    (s as any).anushkaQW['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    (s as any).artemQW['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    qspCall(s, 'boyStat', 'A2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some16.jpg');
    scene.text('"Don\'t slow down, baby. Tear that ass up and show her who owns it!" you tell him as you grab hold of her hips to stop her from pulling away, as you go back to licking her pussy.');
    scene.text('You feel his hands reach up and firmly grab her by the hips, one hand reaching up to hold her by the shoulder as he slides his dick nearly entirely out of her before slamming it back in and hammering her balls deep. You can feel her trying to pull away, but he holds her firm. "That\'s right bitch, tonight your ass is mine!"');
    scene.text('Her moans start turning into grunts, but he\'s not done. "Who\'s the pussy assed bitch now!?"');
    scene.text('When she doesn\'t respond, he reaches up and grabs her by the hair before turning her head until she\'s looking back over her shoulder at him. "I asked you a question, bitch! Answer it!" You\'re a little shocked that you\'ve brought this side out of him, but are also feeling a little proud.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let this play out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some14.jpg');
    scene.text('You can hear her grunts turning back into moans as well, not to mention her already soaking wet pussy is soaking your face even more, she is getting off this big time. Your thoughts are interrupted as she answers him. "OOOHHH… I… am…" Her reply is breathless.');
    scene.text('You can hear the excitement in his voice, it seems he is really starting to get into this. "You are what?"');
    scene.text('"OH… OH… I\'m… the pussy… assed bitch." She struggles to get out from the hard fucking Artem is giving her, but her ever increasing soaking pussy tells you she\'s loving it.');
    scene.text('"That\'s right. I own your ass and I\'m going to tear it up because there\'s nothing you can do about it!"');
    scene.text('You have to admit that you wern\'t expecting him to be this assertive as she grips your leg tightly. "Oh fuck… Oh fuck… Not… So hard." She\'s starting to resist, but is still enjoying being used.');
    scene.text('"Shut that slut mouth up! I\'ll show you the same mercy you\'ve shown me over the years. None!" You can tell by his deep breathing, grunts and tensing body that he\'s trying really hard not to cum so he can keep fucking her, but it\'s too much and he jerks out of her. "I\'m cumming, bitch!" he cries out.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get on your knees', goto: ['artem_sex', 'anushka_3some_facial'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some15.jpg');
    scene.text('You decide not to encourage him further. If he doesn\'t have it in him, then that\'s his fault, but you know he\'ll be a little disappointed for not taking full advantage of his opportunity as you keep licking Anushka while Artem fucks her ass. It doesn\'t take much longer before he starts to grunt, and you can tell he\'s about to cum. In fact, he soon pulls out of Anushka\'s asshole and starts stroking his cock.');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get on your knees', goto: ['artem_sex', 'anushka_3some_facial'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Let him finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some15.jpg');
    scene.text('You decide not to encourage him further. If he doesn\'t have what it takes to fuck a girl roughly, then that\'s on him, but you know he\'ll be a little disappointed in himself for not taking full advantage of his opportunity as you keep licking Anushka while Artem fucks her ass. It doesn\'t take much longer before he starts to grunt, and you can tell he\'s about to cum. In fact, he soon pulls out of Anushka\'s asshole and starts stroking his cock.');
    qspCall(s, 'arousal', 'cuni_give', 4, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get on your knees', goto: ['artem_sex', 'anushka_3some_facial'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3someFacial(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some17.jpg');
  scene.text('Anushka climbs off you and you both get on your knees in front of Artem\'s cock as he strokes it, opening your mouth and sticking out your tongue. You pull Anushka up next to you before you feel the first splash of cum hit you in the face, Artem moaning loudly as he cums on both of you. Once he\'s done, he sits on the couch and sighs happily, watching the two of you with a massive grin on his face.');
  qspCall(s, 'cum_call', 'face', 'A2', 1);
  qspCall(s, 'cum_call', 'mouth', 'A2', 1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Clean up', goto: ['artem_sex', 'anushka_3some_cleanup'] },
    { label: 'Lick the cum from her face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/sex/nush3some18.jpg');
    scene.text('You turn your head and start licking the cum off Anushka\'s face. She patiently sits still as you clean her up with your tongue until you\'ve licked up every last drop of Artem\'s cum from her face. He sits on the couch and watches the two of you. Once you finish, you look over at him and notice that his dick is already hard again.');
    qspCall(s, 'cum_call', 'mouth', 'A2', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['artem_sex', 'anushka_3some_cleanup'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnushka_3someCleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 12;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/misc/dress_1.mp4');
  scene.text('You let go of Anushka and get up, grabbing some tissues to clean yourself before passing the box to her. Artem soon follows suit and starts cleaning himself up. Once you\'re all cleaned up, you start dressing before Anushka grabs her purse off the floor where she dropped it.');
  if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 1) {
    scene.text('"I must admit, the sex was better than I expected, especially from a nerd. At best, I was expecting this to be lackluster, but you surprised me, Artem. You fuck better than I expected, but you\'re not that great either."');
    scene.text('She looks directly at you and smirks. "You\'ve still got a fair bit of work training your nerd on how to fuck like a man."');
    scene.text('You\'re pretty sure she\'s teasing him and doesn\'t really mean it, but you doubt Artem will understand that.');
    scene.actions([
      { label: 'Defend Artem', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'love');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    (s as any).artemQW['nush3some_again'] = 1;
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('"Nush!" you say in a scolding tone. "He did great. You got off, so what more do you want?" You lean over and kiss him quickly. "You were great. Nush is just being a bitch."');
    scene.text('She just laughs. "Don\'t fill his head with lies. He was okay. You eating my pussy is what put me over the edge. He still has a lot to learn. Later losers."');
    scene.text('As she\'s about to walk out of his room, he glances at you briefly before looking back at her.');
    scene.text('"That might be true, but I know that I tore your ass up and from now on when we see each other at school…" He pauses while she stops and looks at him. "We\'ll both know my dick was buried deep in your ass."');
    scene.text('She lifts her eyebrows briefly in surprise, then grins in amusement. "The little tiger has a bit of a roar. I like it…" She then glances at you. "I might even be tempted to try this again. Maybe…"');
    scene.text('She walks out of his room and you hear the front door open and close.');
    scene.text('Artem gives you a side fist pump. "Fuck yeah, I stood up to her!" Looking at him, he seems happy, but you can tell her words bothered him. Just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
    scene.actions([
      { label: 'He had fun', goto: ['artem_sex', 'nush3some_had_fun'] },
      { label: 'Ask how he feels', goto: ['artem_sex', 'nush3some_how_he_feels'] },
    ]);
  } },
      { label: 'Agree with Anushka', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'loathe');
    (s as any).artemQW['nush3some'] = (-1);
    if (((s as any).artemQW ?? 0)?.['confidence'] >= 20) {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (5);
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (4);
      if (((s as any).artemQW ?? 0)?.['confidence'] >= 10) {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (3);
      } else {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (2);
        if (((s as any).artemQW ?? 0)?.['confidence'] >= 1) {
          (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (1);
        }
        qspCall(s, 'stat', '');
        scene.img('images/characters/shared/headshots_main/big144.jpg');
        scene.text('You look at her. "Nush, come on. I\'m working on it. It takes a while to train boys. Even you admitted he wasn\'t bad, and you did get off. I promise he\'ll be even better next time."');
        scene.text('She just laughs. "Next time? I don\'t know about that. You know I only like being with guys who know how to fuck." Looking at your expression, she sighs begrudgingly. "While I did get off, that was more from you licking my pussy than anything he did, but he wasn\'t bad. He just needs a bit more fire."');
        scene.text('You glance over at Artem and see his shoulders slump and his grin fade away as he listens to the two of you. "Anyway, see you losers later," she adds in a teasing tone as she walks out of his room. You hear the front door open and close a few seconds later.');
        scene.text('You and Artem sit in silence, but just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
        scene.text('You smile and try to kiss him, but he turns his head and you end up kissing his cheek. "Don\'t listen to her. You\'re getting better, and you\'re plenty good for me."');
        scene.text('He sighs loudly and shakes his head. "Yeah, sure. I know she\'s your friend, but I just don\'t and never will like her. Honestly, I don\'t like how you act around her. So please do me a favor and don\'t invite her to hang out with us anymore, okay?"');
        scene.text('You sigh and nod before he gives you a tight-lipped smile and walks you to the door.');
        scene.actions([
          { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
        ]);
      }
      scene.actions([
        { label: 'Say nothing', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    (s as any).artemQW['nush3some_again'] = 1;
    if (((s as any).artemQW ?? 0)?.['confidence'] >= 20) {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (3);
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (2);
      if (((s as any).artemQW ?? 0)?.['confidence'] >= 5) {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (1);
      }
      qspCall(s, 'stat', '');
      scene.img('images/characters/shared/headshots_main/big144.jpg');
      scene.text('You don\'t want to get in the middle of this. You glance at him, but don\'t meet his eyes, and his grin fades as he sighs and looks at her. "Sorry I wasn\'t very good…"');
      scene.text('She rolls her eyes slightly and shakes her head. You know she dislikes it when people won\'t stand up for themselves. "What. Ever. Later losers." She walks out of his room and you hear the front door open and close a few seconds later.');
      scene.text('Artem still seems happy, but you can tell her words bothered him. Just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
      scene.text('You smile and kiss him again. "Don\'t listen to her. You were great as always."');
      scene.text('He snorts softly. "Sure… Thanks for standing up for me then."');
      scene.actions([
        { label: 'You need to stand up for yourself', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You give him a hug, but he doesn\'t really return it. "I\'m sorry, but she\'s my friend, and I thought you could stand up for yourself."');
    scene.text('He starts to say something, then stops and sighs before nodding in agreement. "You\'re right. I should have stood up to her, but I shouldn\'t need my girlfriend to defend me. I\'m just so used to her and the other gopniks picking on me… That she intimidates me. I\'m not sure what I expected from her anyway. She is who she is."');
    scene.text('You give him another hug. "She\'s more bark than bite. Plus, you just got to fuck one of your bullies in the ass."');
    scene.text('He nods and smiles at your comment. "Yeah. Yeah, you\'re right! I guess I got her back a little; hopefully it hurt." He blushes at his own words and glances at you. "Do you think it did?"');
    scene.text('You smile at him and give him a reassuring look. "Hell yes, how you were pounding her there at the end. I bet her ass will be sore tomorrow too." He glances at you, then laughs, and you laugh with him.');
    scene.text('"Thanks, I needed that." He kisses you and thanks you for a great time before walking you to the door. Hoping this didn\'t bother him, you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
        { label: 'Apologize', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You give him a hug, but he doesn\'t really return it. "I\'m sorry. I should have stood up for you."');
    scene.text('He starts to say something. "No… I\'m nearly an adult, and I should\'ve stood up to her. My girlfriend shouldn\'t have to defend me, but I\'m just so used to her and the other gopniks picking on me that she intimidates me."');
    scene.text('You give him another hug. "She\'s more bark than bite. Plus, you just got to roughly fuck one of your bullies in the ass."');
    scene.text('He nods and smiles at your comment. "Yeah. Yeah, you\'re right! Not only did I get to fuck her, but I tore her ass up, something I never dreamed would ever happen. Yeah, I think I\'m good."');
    scene.text('He kisses you and thanks you for a great time before walking you to the door. Hoping this didn\'t bother him, you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
      ]);
    }
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 2) {
      scene.text('"I must admit, I was expecting this to be lackluster at best, but you surprised me, Artem. You were better than I expected." She looks directly at you and bites her lower lip. "You trained your nerd pretty well. I might be tempted to try again one day."');
      scene.text('You grin at her comment. "I told you he was a great lover."');
      scene.text('She just laughs. "Sure, he\'s a great \'lover\'." She makes it sound like it\'s a bad thing. "But he\'s still not a great fuck, at least not yet."');
      scene.text('You\'re pretty sure she\'s just teasing him on purpose and doesn\'t really mean it, but you doubt Artem will understand that.');
      scene.actions([
        { label: 'Defend Artem', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'love');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    (s as any).artemQW['nush3some_again'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('"Ha!" you say in a scolding tone. "He did great. He tore your slutty ass up." You then turn to Artem. "You were great. Nush is just being a bitch."');
    scene.text('She just laughs. "He was pretty good, but not great, and we both know it. Hell, look at him. Even he knows it." You glance over at Artem and his shoulders slump and his grin fades.');
    scene.text('As she\'s about to leave his room, he glances at you before looking back at her, then straightens up his shoulders. He seems more confident all of a sudden.');
    scene.text('"That might be true. I might not be, as you put it, a great fuck, but what\'s also true is that I bent you over and tore your ass up, showing you no mercy, and you couldn\'t do anything about it. You just meekly and submissively took it, from a lowly nerd like me, while I made you my bitch."');
    scene.text('She lifts her eyebrows in surprise. She starts to retort, but before she can, he continues. "When we see each other at school, we\'ll both know that I totally made you my bitch, and nothing will ever change that."');
    scene.actions([
      { label: 'Let him get it all out', handler: (st: GameState) => {
    (s as any).anushkaQW['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    // TODO-QSP: dynamic text: Once he finishes, an amused grin appears on her flushed face as she glances over...
    scene.text(`Once he finishes, an amused grin appears on her flushed face as she glances over at you. You just shrug and she looks back at him. "Wow, the mouth on him. Where was this Artem earlier? Would you have even done any of that if ${((s as any).pcs_nickname ?? 0)} and I hadn't encouraged you?" She steps up to him and places a hand on his chest while looking him in the eye.`);
    scene.text('"I don\'t think so," she says. "I like this new Artem. He\'s sexy, but I don\'t buy that it\'s you." She then walks out, stopping at the door to glance back one last time. "At least not yet," she says with a grin.');
    scene.text('He doesn\'t back down from her. "You\'re wrong and next time you\'ll know it too."');
    scene.text('She snorts. "Who says there will be a next time?"');
    scene.text('He steps up right to her, crowding her and forcing her to take a step back. "I do," he says in a firm voice and quickly glances at you before looking back at Anushka. You don\'t know if he was looking from encouragement from you or checking if he crossed a line, but he seems to believe he\'s good to go as he crowds her even more. "I finally figured you out. Deep down, you like guys that bully, dominate and humiliate you." He keeps crowding her and making her back up more and more until he finally corners her.');
    scene.actions([
      { label: 'Just watch', handler: (st: GameState) => {
    (s as any).artemQW['nush3some_again'] = 2;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('She smiles at him when her back bumps into the corner and she\'s unable to back up more. "Is that so?" She tries to act tough and defiant, but her breathless tone confirms what he\'s saying.');
    scene.text('You can\'t see his face, but his tone says he\'s in command and knows it. He places his hands on the wall on each side of her, giving her nowhere to go. "Yeah, it is. I also know you loved getting fucked and dominated by a nerd, just like you\'re loving this…" He pulls his right hand off the wall and slides it up her skirt, causing her to gasp. "Your wet pussy agrees with me. The idea of getting owned and humiliated by a nerd like me makes it even better, doesn\'t it?"');
    scene.text('You can just barely see her face. She looks very aroused and also in as much shock as you are by how Artem is acting; you\'ve never seen him like this. When she doesn\'t respond, he places his right hand back on the wall to block any escape. "Say it!" he demands in a forceful tone.');
    scene.text('"Yes…" she replies so quietly that you can barely hear her. There\'s a pause as she looks up at him towering over her. "I love the idea of a nerd making me his bitch… And humiliating me…" she continues.');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).artemQW['nush3some_again'] = 3;
    (s as any).anushkaQW['artem_dom'] = ((s as any).anushkaQW['artem_dom'] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You see his shoulders relax as his hands slide down from the wall and he steps back to make space for her. "Like I said, there will be another time. We\'ll let you know where and when, got it?"');
    scene.text('She casts her eyes down and bites her lower lip as she nods. "Yes…" she says softly.');
    scene.text('He crosses his arms and looks down at her. "Good. Now get your little ass out of here," he orders and she moves past him to the door and opens up the door. As she does, Artem reaches out and slaps her ass hard enough that the sound carries across the room.');
    scene.text('As Artem turns to you, you can see a grin on her face that tells you she loved ever moment of that and she gives you a wink as she closes the door. You hear the front door open and close a few seconds later.');
    scene.actions([
      { label: 'Ask how he feels', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('He walks back over and sits next to you. You smile and kiss him. "I won\'t lie, I was impressed by how you handled her. How did it make you feel?"');
    scene.text('He looks thoughtful for a second. "You know what? I feel great, I really do." He pauses, as if he\'s considering what to say next. "I don\'t know… I just suddenly had enough and thought I push back for once. As I told her what I thought and realized she was backing down from me… from ME!" He shakes his head. "That\'s when I had a real surge of confidence, so I pushed back even more. That\'s… That\'s when it suddenly hit me: She liked it and… I don\'t know, it\'s like so many things suddenly clicked in my head and it just seemed so much better."');
    scene.text('You give his hand a reassuring squeeze. "I\'m glad you had this moment. Confidence looks good on you."');
    scene.text('He turns his head and looks at you. "Thanks, but it was your encouragement that helped me get here. Without you…" He trails off.');
    scene.text('You shake your head. "No. While I might have helped get you here a little faster, this is who you always were, who I always saw you to be. You would have gotten here on your own eventually, but I\'m just glad I could help."');
    scene.text('He smiles. "Thanks… I still can\'t really believe I fucked Nush like a slut and then made her my bitch afterwards, forcing her to agree." He sounds elated beyond words and looks like the weight of the world has lifted off him.');
    scene.actions([
      { label: 'Ask if he wants to do it again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).artemQW ?? 0)?.['confidence'] < 9) {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (2);
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
    }
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('"So does that mean you want to do this again?" you ask.');
    scene.text('He nods. "Hell yes! Next time I\'m going to totally own her!" Then he looks at you and blushes. "I mean I\'d like to, if you want to, of course."');
    scene.text('You grin at how he can be so dominant one moment, but care about your feelings the next. "You made sure she said say yes already, so why waste that? I\'ll let you know when I\'m ready to invite her again." You also want to talk to Anushka about this now.');
    scene.text('He nods. "Of course, just let me know." The two of you then talk for a while before he stops. "My mom will be home soon and I need to get started on my homework."');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
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
        { label: 'Agree with Anushka', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'loathe');
    (s as any).artemQW['nush3some'] = (-1);
    if (((s as any).artemQW ?? 0)?.['confidence'] >= 20) {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (5);
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (4);
      if (((s as any).artemQW ?? 0)?.['confidence'] >= 10) {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (3);
      } else {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (2);
        if (((s as any).artemQW ?? 0)?.['confidence'] >= 1) {
          (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (1);
        }
        qspCall(s, 'stat', '');
        scene.img('images/characters/shared/headshots_main/big144.jpg');
        scene.text('You look at her. "Nush, come on. I\'m working on it. It takes a while to train boys. He\'ll be even better next time, I promise."');
        scene.text('She just laughs. "Next time? I don\'t know about that. You know I only like being with guys that know how to fuck me properly. Artem shows some promise, but he\'s a long way from that. Even with prompting from both of us, he was only okay." You glance over at Artem and see his shoulders slump and his grin fade as he listens to the two of you. "Anyway, I need to get going. Later losers." She walks out of his room and you hear the front door open and close a few seconds later.');
        scene.text('You and Artem sit in silence, but just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
        scene.text('You smile and try to kiss him, but he turns his head and you end up kissing his cheek. "Don\'t listen to her. You\'re getting better, and you\'re good enough for me."');
        scene.text('He sighs loudly and shakes his head. "Yeah, sure. It\'s okay. Not sure what I expected from her, she is who she is, but hey, I got to fuck her in the ass, something I never dreamed would ever happen, so I\'m good." He gives you a tight-lipped smile before walking you to the door.');
        scene.actions([
          { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
        ]);
      }
      scene.actions([
        { label: 'Say nothing', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    (s as any).artemQW['nush3some_again'] = 1;
    if (((s as any).artemQW ?? 0)?.['confidence'] >= 20) {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (3);
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (2);
      if (((s as any).artemQW ?? 0)?.['confidence'] >= 5) {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (1);
      }
      qspCall(s, 'stat', '');
      scene.img('images/characters/shared/headshots_main/big144.jpg');
      scene.text('You don\'t want to get in the middle of this. You glance at him, but don\'t meet his eyes as he takes a breath. "Is that so? Then why were you asking me to slow down then, huh?"');
      // TODO-QSP: dynamic text: She snorts. "Oh, I'll give it to you that for the last few minutes, you started ...
      scene.text(`She snorts. "Oh, I'll give it to you that for the last few minutes, you started to actually fuck me like a man, but that was only after ${((s as any).pcs_nickname ?? 0)} and I encouraged you several times." She steps up close to him and taps him on the chest. "Which means you have it in you, but where was that earlier, hmm? The last few minutes don't make up for the rest."`);
      scene.text('His grin fades and he sighs. "Sorry I wasn\'t very good…"');
      scene.text('She rolls her eyes and shakes her head. You know she dislikes it when people won\'t stand up for themselves. "What. Ever. Later losers." She walks out of his room and you hear the front door open and close a few seconds later.');
      scene.text('As she leaves, you can see he still seems happy, but tell her words bothered him. Just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
      scene.text('You smile and kiss him again. "Don\'t listen to her. You were great as always."');
      scene.text('He snorts softly. "Sure… Thanks for standing up for me then."');
      scene.actions([
        { label: 'You need to stand up for yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You give him a hug, but he doesn\'t really return it. "I\'m sorry, but she\'s my friend, and I thought you could stand up for yourself."');
    scene.text('He starts to say something, then stops and sighs before nodding his head in agreement. "You\'re right. I should have stood up to her, but I shouldn\'t need my girlfriend to defend me. I\'m just so used to her and the other gopniks picking on me… That she intimidates me. Hell, she was right! I was pretty meek and passive until the very end."');
    scene.actions([
      { label: 'Look on the bright side', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You give him a hug. "She\'s more bark than bite, but look on the bright side. You just got to fuck one of your bullies in the ass."');
    scene.text('He laughs at your comment. "Yeah. Yeah, you\'re right! I guess I got her back a little. Hopefully it hurt." He blushes at his own words and glances at you. "Do you think it did?"');
    scene.text('You smile at him and give him a reassuring look. "Hell yeah, with how you were pounding her there at the end? You felt her trying to pull away! I bet her asshole feels like it\'s on fire right now and will be really sore tomorrow."');
    scene.text('He looks at you and laughs even more, and you laugh with him. "Thanks, I needed that." Looking at him, he seems happy, but you can tell her words bothered him. Just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
    scene.actions([
      { label: 'He had fun', goto: ['artem_sex', 'nush3some_had_fun'] },
      { label: 'Ask how he feels', goto: ['artem_sex', 'nush3some_how_he_feels'] },
    ]);
  } },
      { label: 'Reassure him', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "Don\'t listen to her. You were great as always."');
    scene.text('He laughs and shakes his head. "It\'s okay. Not sure what I expected from her. She is who she is. I\'m good, really." He kisses you and thanks you for a great time before walking you to the door. It seems it didn\'t bother him too much, so you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
        { label: 'Apologize', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You give him a hug, but he doesn\'t really return it. "I\'m sorry. I should have stood up for you."');
    scene.text('"No. I\'m nearly an adult and I should have stood up to her! I shouldn\'t need my girlfriend to defend me, but I\'m just so used to her and the other gopniks picking on me that she intimidates me. She was right; I was pretty meek and passive until the very end when you both encouraged me."');
    scene.text('You give him a hug. "She\'s more bark than bite. Plus, you just got to fuck one of your bullies in the ass."');
    scene.text('He nods and smiles at your comment. "Yeah. Yeah, you\'re right! Not only did I get to fuck her, but I tore her ass up, something I never dreamed would ever happen. Yeah, I think I\'m good." He kisses you and thanks you for a great time before walking you to the door. Hoping this didn\'t bother him, you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
      ]);
    }
    scene.text('"It wasn\'t nearly as bad as I expected it to be. Don\'t get me wrong, it wasn\'t good either, but I expected it to be terrible. I\'m just disappointed with a case of girl blue balls. I\'ll need to rub one out tonight." She looks directly at you and smirks. "You still have a lot of work training your nerd to fuck like a man."');
    scene.text('You glance at Artem and see her words hit home.');
    scene.actions([
      { label: 'Defend Artem', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'love');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    (s as any).artemQW['nush3some_again'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('"Nush!" you say in a scolding tone. "He did just fine." You lean over and kiss him quickly. "You were great. Nush is just being a bitch!"');
    scene.text('She just laughs. "Don\'t lie to him. He needs to hear the truth if he ever wants to get better. Hell, I couldn\'t even get off with you eating me out at the same time." She glances at him before speaking to you again. "Look at him; even he knows it."');
    scene.text('You glance over at Artem and notice that his shoulders are slumped and his grin has faded. "Later losers. I\'m off to get off." She walks out of his room and you hear the front door open and close a few seconds later.');
    scene.text('When she leaves, Artem sighs. He still seems somewhat happy, but her words have bothered him a lot. Just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
    scene.actions([
      { label: 'Look on the bright side', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "Look on the bright side! You got to fuck one of your bullies in the ass. How many people ever get to say that?"');
    scene.text('He looks at you and laughs while shaking his head. "You\'re right… I just wish…"');
    scene.text('You look at him. "Wish what?"');
    scene.text('He sighs. "I wish I had taken better advantage of the situation, maybe really paid her back for all the teasing she\'s put me through over the years."');
    scene.text('Before you can reply, he kisses you before walking you to the door. It seems it didn\'t bother him too much, so you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
      { label: 'Reassure him', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile and kiss him again. "Don\'t listen to her. You were great as always."');
    scene.text('He laughs and shakes his head. "It\'s okay. I\'m not sure what I expected from her; she is who she is. I\'m good, honestly." He kisses you and thanks you for a great time before walking you to the door. It seems it didn\'t bother him too much, so you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
    ]);
  } },
      { label: 'Agree with Anushka', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'loathe');
    (s as any).artemQW['nush3some'] = (-1);
    if (((s as any).artemQW ?? 0)?.['confidence'] >= 20) {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (5);
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (4);
      if (((s as any).artemQW ?? 0)?.['confidence'] >= 10) {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (3);
      } else {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (2);
        if (((s as any).artemQW ?? 0)?.['confidence'] >= 1) {
          (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (1);
        }
        qspCall(s, 'stat', '');
        scene.img('images/characters/shared/headshots_main/big144.jpg');
        scene.text('You look at her. "Nush, come on. I\'m working on it. It takes a while to train boys. He\'ll be even better next time, I promise."');
        scene.text('She just laughs. "No, I don\'t think so. There won\'t be a next time. You know I only like being with guys that know how to fuck me good, ones that can get me off." You glance over at Artem and see his shoulders slump and his grin fades as he listens to the two of you. "Anyway, this was a mistake I don\'t plan on repeating. Later losers." She walks out of his room and you hear the front door open and close a few seconds later.');
        scene.text('You and Artem sit in silence, but just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
        scene.text('You smile and try to kiss him, but he turns his head and you end up kissing his cheek. "Don\'t listen to her; you getting better, and you\'re good enough for me."');
        scene.text('He sighs loudly and shakes his head. "Yeah, sure. I know she\'s your friend, but I just don\'t and never will like her. Honestly, I don\'t like how you act around her. So please do me a favor and don\'t invite her to hang out with us anymore, okay?"');
        scene.text('You sigh and nod before he gives you a tight-lipped smile and walks you to the door.');
        scene.actions([
          { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
        ]);
      }
      scene.actions([
        { label: 'Say nothing', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
    (s as any).artemQW['nush3some_again'] = 1;
    if (((s as any).artemQW ?? 0)?.['confidence'] >= 20) {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (3);
    } else {
      (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (2);
      if (((s as any).artemQW ?? 0)?.['confidence'] >= 5) {
        (s as any).artemQW['confidence'] = ((s as any).artemQW['confidence'] ?? 0) - (1);
      }
      qspCall(s, 'stat', '');
      scene.img('images/characters/shared/headshots_main/big144.jpg');
      scene.text('You don\'t want to get in the middle of this. You glance at him, but don\'t meet his eyes, and his grin fades as he sighs and looks at her. "Sorry I wasn\'t very good…"');
      scene.text('She rolls her eyes slightly and shakes her head. You know she dislikes it when people won\'t stand up for themselves. "Not good? Dude, you couldn\'t even get me off!"');
      scene.text('He blushes at the comment. "Sorry…" he says meekly while looking down at the floor, unable to meet her gaze.');
      scene.text('"What. Ever. Later losers." She walks out of his room and you hear the front door open and close a few seconds later.');
      scene.text('Once she leaves, you can tell her words bothered him a lot, but just as you\'re about to say something, he interrupts you. "My mom should be home soon and I need to get started on my homework."');
      scene.text('You smile and kiss him again. "Don\'t listen to her. You were great as always."');
      scene.text('He snorts softly. "Sure… Thanks for standing up for me then."');
      scene.actions([
        { label: 'Stand up for himself', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You give him a hug, but he doesn\'t really return it. "I\'m sorry, but she\'s my friend, and I thought you could stand up for yourself."');
    scene.text('He starts to say something, then stops and sighs before nodding in agreement. "You\'re right. I should have stood up to her, but I shouldn\'t need my girlfriend to defend me. I\'m just so used to her and the other gopniks picking on me… That she intimidates me. I\'m not sure what I expected from her anyway. She is who she is."');
    scene.text('You give him another hug. "She\'s more bark than bite. Plus, you just got to fuck one of your bullies in the ass."');
    scene.text('He nods and smiles at your comment. "Yeah. Yeah, you\'re right! I guess I got her back a little; hopefully it hurt." He blushes at his own words and glances at you. "Do you think it did?"');
    scene.text('You smile at him and give him a reassuring look. "Hell yes, how you were pounding her there at the end. I bet her ass will be sore tomorrow too." He glances at you, then laughs, and you laugh with him.');
    scene.text('"Thanks, I needed that." He kisses you and thanks you for a great time before walking you to the door. Hoping this didn\'t bother him, you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
        { label: 'Apologize', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You give him a hug, but he doesn\'t really return it. "I\'m sorry. I should have stood up for you."');
    scene.text('"No. I\'m nearly an adult and I should have stood up to her! I shouldn\'t need my girlfriend to defend me, but I\'m just so used to her and the other gopniks picking on me that she intimidates me. She was right; I was pretty meek and passive until the very end when you both encouraged me."');
    scene.text('You give him a hug. "She\'s more bark than bite. Plus, you just got to fuck one of your bullies in the ass."');
    scene.text('He nods and smiles at your comment. "Yeah. Yeah, you\'re right! Not only did I get to fuck her, but I tore her ass up, something I never dreamed would ever happen. Yeah, I think I\'m good." He kisses you and thanks you for a great time before walking you to the door. Hoping this didn\'t bother him, you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'hj':
      enterHj(s, scene);
      break;
    case 'artem_bj':
      enterArtemBj(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'cum_surprise':
      enterCumSurprise(s, scene);
      break;
    case 'after_sex':
      enterAfterSex(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'slut_bj':
      enterSlutBj(s, scene);
      break;
    case 'slut_fuck':
      enterSlutFuck(s, scene);
      break;
    case 'slut_anal':
      enterSlutAnal(s, scene);
      break;
    case 'anushka_3some':
      enterAnushka_3some(s, scene);
      break;
    case 'anushka_3some_oral1':
      enterAnushka_3someOral1(s, scene);
      break;
    case 'anushka_3some_oral2':
      enterAnushka_3someOral2(s, scene);
      break;
    case 'anushka_3some_bj':
      enterAnushka_3someBj(s, scene);
      break;
    case 'anushka_3some_rough1':
      enterAnushka_3someRough1(s, scene);
      break;
    case 'anushka_3some_anal':
      enterAnushka_3someAnal(s, scene);
      break;
    case 'anushka_3some_doggy':
      enterAnushka_3someDoggy(s, scene);
      break;
    case 'anushka_3some_facial':
      enterAnushka_3someFacial(s, scene);
      break;
    case 'anushka_3some_cleanup':
      enterAnushka_3someCleanup(s, scene);
      break;
    default:
      enterHj(s, scene);
      break;
  }
}

export const artem_sex: LocationDef = {
  name: 'artem_sex',
  title: 'You rub his hard dick through his pants for a few seconds be',
  region: 'other',
  description: ['You rub his hard dick through his pants for a few seconds before sliding off his lap, kneeling next to the bed as you unbutton his pants and reach inside. His erect cock springs free as soon as you pull it out, and it seems to almost be pulsing by your touch. He moans softly as you slowly start stroking his dick.'],
  enter: enter,
};
