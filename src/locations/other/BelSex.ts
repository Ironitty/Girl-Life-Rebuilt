import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'boyStat', 'A113');
  if ((!((s as any).sashaBeliSex ?? 0))) {
    (s as any).sashaBeliSex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  (s as any).belact = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: You suck <<$boydesc>>'s tongue as he kisses you, doing your best to please him i...
  scene.text(`You suck ${((s as any).boydesc || '')}'s tongue as he kisses you, doing your best to please him in any way you can… because who knows what he'll do if you don't. He crudely kneads your butt and upper thighs, grabbing your ass cheeks and slapping them, making your ass cheeks jiggle.`);
  qspCall(s, 'arousal', 'kiss', 5, 'sub', 'prostitution');
  qspCall(s, 'arousal', 'foreplay', (-5), 'sub', 'prostitution');
  qspCall(s, 'stat', '');
  (s as any).belybj = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).belybj ?? 0))) {
    // TODO-QSP: dynamic text: <<$boydesc>> puts his large hands on your shoulders and forces you downwards. Ev...
    scene.text(`${((s as any).boydesc || '')} puts his large hands on your shoulders and forces you downwards. Even though you're trying to cooperate and drop to your knees as soon as you realize what he wants, he's still kind of rough with you. "Start sucking, ${((s as any).pcs_nickname || '')}."`);
    scene.actions([
      { label: 'On your knees', goto: ['BelSex', 'bj1'] },
    ]);
  } else {
    if (((s as any).belybj ?? 0) === 1) {
      // TODO-QSP: dynamic text: <<$boydesc>> tugs at your clothes, letting you know that he wants you naked. You...
      scene.text(`${((s as any).boydesc || '')} tugs at your clothes, letting you know that he wants you naked. You quickly obey and assist him in taking your clothes off. He nods approvingly, definitely liking what he sees. "Very nice, girl… but you'd look even better with my cock in you."`);
      scene.actions([
        { label: 'Drop down on your knees', goto: ['BelSex', 'bj2'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> is staring intently into your eyes, pawing between your legs while ...
      scene.text(`${((s as any).boydesc || '')} is staring intently into your eyes, pawing between your legs while you unbutton his pants, grabbing hold, and pulling them down to his knees. His cock is hanging freely, twitching from excitement…`);
      scene.actions([
        { label: 'What now?', goto: ['BelSex', 'bj3'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBj1(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).picrand = Math.floor(Math.random() * 13) + 0;
  scene.img(`images/shared/sex/blowjob/bj${((s as any).picrand || '')}.mp4`);
  // TODO-QSP: dynamic text: You take <<$boydesc>>'s <<dick>> cm cock in your mouth and begin stimulating his...
  scene.text(`You take ${((s as any).boydesc || '')}'s ${((s as any).dick || '')} cm cock in your mouth and begin stimulating his glans. You can clearly see on ${((s as any).boydesc || '')}'s face that he's getting irritated at you for trying to prolong things and just wants you to suck him off quickly.`);
  // TODO-QSP: dynamic text: You do your best to suck him off, trying to go deep as possible, but <<$boydesc>...
  scene.text(`You do your best to suck him off, trying to go deep as possible, but ${((s as any).boydesc || '')} is not pleased. He grabs you by the back of your head and begins forcing it closer and closer towards his fat stomach. You start gagging but he just tells you to relax your throat and it will all be fine.`);
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution', 'deepthroat');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    // TODO-QSP: dynamic text: <<$boydesc>> groans, clearly enjoying himself. He stands up, grabs you by the ha...
    scene.text(`${((s as any).boydesc || '')} groans, clearly enjoying himself. He stands up, grabs you by the hair, and begins fucking your mouth. "Wider, you little slut, I don't want to feel any teeth."`);
    scene.text('Not daring to make him more upset, you make sure your teeth don\'t get in the way and open your mouth even wider.');
    scene.actions([
      { label: 'Open wide', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 11) + 0;
    scene.img(`images/shared/sex/cum/mouth/cum${((s as any).picrand || '')}.mp4`);
    // TODO-QSP: dynamic text: <<$boydesc>> indicates that he's about to come, telling you to "Open wide, <<$pc...
    scene.text(`${((s as any).boydesc || '')} indicates that he's about to come, telling you to "Open wide, ${((s as any).pcs_nickname || '')}. You're going to swallow every little drop."`);
    scene.text('You meekly nod and let out "Yes, Mr. Bely…" doing as he says, opening your mouth as wide as you can. He jerks himself off all over your face and you soon feel his warm jets of sperm landing on your left cheek. He adjusts his aim a bit and some of it ends up in your mouth as well. You decide to just sit there with your eyes closed and your mouth open until he tells you otherwise, doing your best to ignore the taste.');
    (s as any).belsexpayment = 300;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get up', goto: ['BelSex', 'shower'] },
    ]);
  } },
    ]);
  }
  if (((s as any).belact ?? 0) > 0) {
    (s as any).belyvag = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).belyvag ?? 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>> grunts loudly while you suck him off. "Time to give you a real poun...
      scene.text(`${((s as any).boydesc || '')} grunts loudly while you suck him off. "Time to give you a real pounding!"`);
      scene.actions([
        { label: 'Get in position', goto: ['BelSex', 'vaginal1'] },
      ]);
    } else {
      if (((s as any).belyvag ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$boydesc>> paws at your ass while you suck him off before he tells you "Get on...
        scene.text(`${((s as any).boydesc || '')} paws at your ass while you suck him off before he tells you "Get on your back, ${((s as any).pcs_nickname || '')}. I'm going to fill you up."`);
        scene.actions([
          { label: 'Lie down on your back', goto: ['BelSex', 'vaginal2'] },
        ]);
      } else {
        if (((s as any).belyvag ?? 0) === 2) {
          // TODO-QSP: dynamic text: <<$boydesc>> looks down on you as you're sucking. He pulls out his cock, lifts y...
          scene.text(`${((s as any).boydesc || '')} looks down on you as you're sucking. He pulls out his cock, lifts you up and throws you onto the bed. "Show me your ass, ${((s as any).pcs_nickname || '')}."`);
          scene.actions([
            { label: 'Get on all fours', goto: ['BelSex', 'doggy'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: <<$boydesc>> lies down on his back and begins playing with his cock waiting for ...
          scene.text(`${((s as any).boydesc || '')} lies down on his back and begins playing with his cock waiting for you to straddle him.`);
          scene.actions([
            { label: 'Ride him', goto: ['BelSex', 'cowgirl'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBj2(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).picrand = Math.floor(Math.random() * 13) + 0;
  scene.img(`images/shared/sex/blowjob/bj${((s as any).picrand || '')}.mp4`);
  // TODO-QSP: dynamic text: You look at <<$boydesc>> with lust in your eyes. Dropping down on your knees wit...
  scene.text(`You look at ${((s as any).boydesc || '')} with lust in your eyes. Dropping down on your knees without being asked, you unbutton his pants, exposing his fully erect cock. Wrapping your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips around his strong and warm cock, you quickly begin by sucking the head, caressing it with your tongue and lips.`);
  // TODO-QSP: dynamic text: <<$boydesc>> lets out a small groan, clearly enjoying himself. Turned on by seei...
  scene.text(`${((s as any).boydesc || '')} lets out a small groan, clearly enjoying himself. Turned on by seeing ${((s as any).boydesc || '')} enjoying the blowjob, you start sucking his cock while caressing his balls.`);
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    scene.text('Your tongue is giving every bit of his cock it can reach its attention as you bob your head back and forth.');
    scene.text('Your lust takes over and you take him as deep into your mouth as you can, keeping him there until you start to gag and have to come up for air. Taking a few breaths to recover, you take him inside again, rapidly moving your head, sucking and deepthroating him for all you\'re worth.');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 11) + 0;
    scene.img(`images/shared/sex/cum/mouth/cum${((s as any).picrand || '')}.mp4`);
    // TODO-QSP: dynamic text: Redoubling your efforts, you reach the base of his wet cock with your <<$pc_desc...
    scene.text(`Redoubling your efforts, you reach the base of his wet cock with your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips. ${((s as any).boydesc || '')} stares you in the face while your lips glide up and down on his hard dick. You know he must be close now.`);
    scene.text('You don\'t want him to cum yet so you switch it up, using your tongue instead, sliding up and down his shaft, pulling out all of your tricks to make him feel good. You even use some techniques you learned to stall his orgasm for a moment, making it all the more intense for him when he shoots his load into your mouth.');
    (s as any).belsexpayment = 300;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  } },
    ]);
  }
  if (((s as any).belact ?? 0) > 0) {
    (s as any).belyvag = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).belyvag ?? 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>> grunts loudly while you suck him off. "Time to give you a real poun...
      scene.text(`${((s as any).boydesc || '')} grunts loudly while you suck him off. "Time to give you a real pounding!"`);
      scene.actions([
        { label: 'Get in position', goto: ['BelSex', 'vaginal1'] },
      ]);
    } else {
      if (((s as any).belyvag ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$boydesc>> paws at your ass while you suck him off before he tells you "Get on...
        scene.text(`${((s as any).boydesc || '')} paws at your ass while you suck him off before he tells you "Get on your back, ${((s as any).pcs_nickname || '')}. I'm going to fill you up."`);
        scene.actions([
          { label: 'Lie down on your back', goto: ['BelSex', 'vaginal2'] },
        ]);
      } else {
        if (((s as any).belyvag ?? 0) === 2) {
          // TODO-QSP: dynamic text: <<$boydesc>> looks down on you as you're sucking. He pulls out his cock, lifts y...
          scene.text(`${((s as any).boydesc || '')} looks down on you as you're sucking. He pulls out his cock, lifts you up, and throws you onto the bed. "Show me your ass, ${((s as any).pcs_nickname || '')}."`);
          scene.actions([
            { label: 'Get on all fours', goto: ['BelSex', 'doggy'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: <<$boydesc>> lies down on his back and begins playing with his cock waiting for ...
          scene.text(`${((s as any).boydesc || '')} lies down on his back and begins playing with his cock waiting for you to straddle him.`);
          scene.actions([
            { label: 'Ride him', goto: ['BelSex', 'cowgirl'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBj3(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).picrand = Math.floor(Math.random() * 13) + 0;
  scene.img(`images/shared/sex/blowjob/bj${((s as any).picrand || '')}.mp4`);
  // TODO-QSP: dynamic text: "Get down on your knees!" he commands. Unfazed by his boldness, you kneel down i...
  scene.text(`"Get down on your knees!" he commands. Unfazed by his boldness, you kneel down in front of him and lick up and down his length a few times before you take his ${((s as any).dick || '')} cm cock into your mouth. As his cock enters, a rank odor enters your nostrils. You disregard the nasty aroma and begin moving your tongue around the head and you suck his dick as you start bobbing your head up and down while your hands take turns playing with his hairy balls. It's hard for you to decide whether you want to move slowly and tease him, or speed up to avoid getting caught, but what you are doing seems to be to his liking.`);
  scene.text('"Good girl", he whispers, "I knew you could suck cock as soon as I saw you." His praise causes you to smile a little around his dick and you take him a little deeper in response.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'prostitution', 'deepthroat');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    // TODO-QSP: dynamic text: <<$boydesc>> is grimacing, enjoying himself. He is sitting down, letting you do ...
    scene.text(`${((s as any).boydesc || '')} is grimacing, enjoying himself. He is sitting down, letting you do all the work. Encouraged, you take his cock deeper, trying to hold it down as long as possible.`);
    scene.text('"Good girl, keep on sucking my cock." All of a sudden his cock gets stiffer and he pulls out of your mouth. "I\'m ready to cum…" You move your head towards his cock but he stops you…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 11) + 0;
    (s as any).belsexpayment = 300;
    scene.img(`images/shared/sex/cum/mouth/cum${((s as any).picrand || '')}.mp4`);
    // TODO-QSP: dynamic text: Instead, <<$boydesc>> starts jerking off, telling you "I'll be done soon, <<$pcs...
    scene.text(`Instead, ${((s as any).boydesc || '')} starts jerking off, telling you "I'll be done soon, ${((s as any).pcs_nickname || '')}. I want you to swallow every little drop." He doesn't last much longer and cums all over your face.`);
    scene.text('He squeezes the last few drops of sperm into your mouth and then sticks his dick in your mouth. You swallow his cum obediently and then suck his dick clean, licking every tasty inch of it you can reach. Once he goes soft in your mouth, he pulls out his cock.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  } },
    ]);
  }
  if (((s as any).belact ?? 0) > 0) {
    (s as any).belyvag = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).belyvag ?? 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>> grunts loudly while you suck him off. "Time to give you a real poun...
      scene.text(`${((s as any).boydesc || '')} grunts loudly while you suck him off. "Time to give you a real pounding!"`);
      scene.actions([
        { label: 'Get in position', goto: ['BelSex', 'vaginal1'] },
      ]);
    } else {
      if (((s as any).belyvag ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$boydesc>> paws at your ass while you suck him off before he tells you "Get on...
        scene.text(`${((s as any).boydesc || '')} paws at your ass while you suck him off before he tells you "Get on your back, ${((s as any).pcs_nickname || '')}. I'm going to fill you up."`);
        scene.actions([
          { label: 'Lie down on your back', goto: ['BelSex', 'vaginal2'] },
        ]);
      } else {
        if (((s as any).belyvag ?? 0) === 2) {
          // TODO-QSP: dynamic text: <<$boydesc>> looks down on you as you're sucking. He pulls out his cock, lifts y...
          scene.text(`${((s as any).boydesc || '')} looks down on you as you're sucking. He pulls out his cock, lifts you up, and throws you onto the bed. "Show me your ass, ${((s as any).pcs_nickname || '')}."`);
          scene.actions([
            { label: 'Get on all fours', goto: ['BelSex', 'doggy'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: <<$boydesc>> lies down on his back and begins playing with his cock waiting for ...
          scene.text(`${((s as any).boydesc || '')} lies down on his back and begins playing with his cock waiting for you to straddle him.`);
          scene.actions([
            { label: 'Ride him', goto: ['BelSex', 'cowgirl'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVaginal1(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).sex_temp = ((s as any).sex_temp ?? 0) + (1);
  (s as any).picrand = Math.floor(Math.random() * 8) + 0;
  scene.img(`images/characters/pavlovsk/vadim/sex/mitka${((s as any).picrand || '')}.mp4`);
  // TODO-QSP: dynamic text: <<$boydesc>> lifts you up, grabs you by the hair, and shoves you onto the bed. Y...
  scene.text(`${((s as any).boydesc || '')} lifts you up, grabs you by the hair, and shoves you onto the bed. You land on your back, as he quickly moves in, you spread your legs. He starts touching your pussy lips with his fat fingers, you let out a moan as he penetrates you with his finger.`);
  scene.text('"That\'s enough, you\'re all wet and ready now." he says. He grabs ahold of his penis and slowly slides it into your wet cunt, softly parting your nether lips. As your pussy walls envelop his cock you let out a soft moan.');
  // TODO-QSP: dynamic text: Hanging over you, looking into your eyes he starts to build up quite a bit of sp...
  scene.text(`Hanging over you, looking into your eyes he starts to build up quite a bit of speed. "You're a pretty good fuck ${((s as any).pcs_nickname || '')}, but I've had better." he says as his sweat drips all over you.`);
  qspCall(s, 'arousal', 'vaginal', 15, 'sub', 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    qspCall(s, 'cum_call', '', '', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).belsexpayment = 600;
    scene.img('images/shared/sex/cum/vagcreampie/creampie3.mp4');
    // TODO-QSP: dynamic text: <<$boydesc>>'s movements speed up as he keeps pounding you balls deep without sh...
    scene.text(`${((s as any).boydesc || '')}'s movements speed up as he keeps pounding you balls deep without showing any signs of slowing down. You think this will go on for a while, but suddenly you hear ${((s as any).boydesc || '')} grunting while cumming deep inside you.`);
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  }
  if (((s as any).belact ?? 0) > 0) {
    (s as any).belanal = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).belanal ?? 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>>'s sweat is dripping all over your body. He is huffing and puffing a...
      scene.text(`${((s as any).boydesc || '')}'s sweat is dripping all over your body. He is huffing and puffing as he pulls out. "Give me a second to catch my breath and then I'll finish this. Give me your sweet little ass," he says, breathing heavily`);
      scene.actions([
        { label: 'Take him in your ass', goto: ['BelSex', 'anal1'] },
      ]);
    } else {
      if (((s as any).belanal ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$boydesc>> wipes the sweat off his forehead, clearly worked up from fucking yo...
        scene.text(`${((s as any).boydesc || '')} wipes the sweat off his forehead, clearly worked up from fucking you. Nevertheless, he's not done with you and tells you that he wants your ass next.`);
        scene.actions([
          { label: 'Present your ass', goto: ['BelSex', 'anal2'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$boydesc>> pulls out of your pussy as the sensations make you moan; "Oh don't ...
        scene.text(`${((s as any).boydesc || '')} pulls out of your pussy as the sensations make you moan; "Oh don't worry sweetheart, I'm not done yet. It's your asshole next. Assume the position."`);
        scene.actions([
          { label: 'Get fucked from behind', goto: ['BelSex', 'analdoggy'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVaginal2(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).sex_temp = ((s as any).sex_temp ?? 0) + (1);
  (s as any).picrand = Math.floor(Math.random() * 8) + 0;
  scene.img(`images/characters/pavlovsk/vadim/sex/mitka${((s as any).picrand || '')}.mp4`);
  // TODO-QSP: dynamic text: <<$boydesc>> lifts you up, grabs you by the hair, and shoves you onto the bed. H...
  scene.text(`${((s as any).boydesc || '')} lifts you up, grabs you by the hair, and shoves you onto the bed. His cock, well greased from the blowjob, easily slides into your pussy.`);
  scene.text('You feel his glans stretching the inner walls of your pussy and you let out a loud moan with each penetration. As he keeps fucking you it doesn\'t take long before you get accustomed to his movements.');
  scene.text('"Let\'s see how deep I can go," he says as he rams his cock so deep that your pubes touch. You scream out loud, breathing fast and heavily and he continues pounding you.');
  qspCall(s, 'arousal', 'vaginal', 15, 'sub', 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    qspCall(s, 'cum_call', '', '', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).belsexpayment = 600;
    scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    // TODO-QSP: dynamic text: <<$boydesc>> groans loudly. His cock stiffens as you feel a jet of warm sperm hi...
    scene.text(`${((s as any).boydesc || '')} groans loudly. His cock stiffens as you feel a jet of warm sperm hitting deep inside your womb.`);
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  }
  if (((s as any).belact ?? 0) > 0) {
    (s as any).belanal = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).belanal ?? 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>>'s sweat is dripping all over your body. He is huffing and puffing a...
      scene.text(`${((s as any).boydesc || '')}'s sweat is dripping all over your body. He is huffing and puffing as he pulls out. "Give me a second to catch my breath and then I'll finish this. Give me your sweet little ass," he says, breathing heavily`);
      scene.actions([
        { label: 'Take him in your ass', goto: ['BelSex', 'anal1'] },
      ]);
    } else {
      if (((s as any).belanal ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$boydesc>> wipes the sweat off his forehead, clearly worked up from fucking yo...
        scene.text(`${((s as any).boydesc || '')} wipes the sweat off his forehead, clearly worked up from fucking you. Nevertheless, he's not done with you and tells you to that he wants your ass next.`);
        scene.actions([
          { label: 'Present your ass', goto: ['BelSex', 'anal2'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$boydesc>> pulls out of your pussy as the sensations make you moan. "Oh don't ...
        scene.text(`${((s as any).boydesc || '')} pulls out of your pussy as the sensations make you moan. "Oh don't worry sweetheart, I'm not done yet. It's your asshole next. Assume the position."`);
        scene.actions([
          { label: 'Get fucked from behind', goto: ['BelSex', 'analdoggy'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoggy(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).sex_temp = ((s as any).sex_temp ?? 0) + (1);
  (s as any).picrand = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/shared/sex/vag/doggy/vagdog${((s as any).picrand || '')}.jpg`);
  scene.text('With his cock rock-hard and nicely wet he lifts your body, turns you around, and tells you to get on all fours on the floor. He gets down on his knees. Stretching your butt cheeks slowly, he runs his shaft along your wet pussy, teasing you, all of a sudden he shoves his cock into your pussy and starts pounding away, not caring about your enjoyment. He just wants to fuck.');
  scene.text('Holding you by the hips, he pounds on without slowing the pace, only occasionally stopping to catch a breath. "Isn\'t he going to slow down soon?" you think to yourself. But you\'ve underestimated him, instead, he grabs your hair and pushes himself even deeper inside.');
  scene.text('You moan loudly as he rams his cock deeper and deeper. You hear him panting and grunting; he must\'ve reached his limit…');
  qspCall(s, 'arousal', 'vaginal', 15, 'sub', 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    qspCall(s, 'cum_call', '', '', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).belsexpayment = 600;
    scene.img('images/shared/sex/cum/vagcreampie/creampie4.mp4');
    // TODO-QSP: dynamic text: <<$boydesc>> keeps on pounding you from behind. You feel his cock getting stiffe...
    scene.text(`${((s as any).boydesc || '')} keeps on pounding you from behind. You feel his cock getting stiffer and twitching inside of you. You turn your head and look him in the eyes, pleading that he pulls out and cums on your ass instead. But ${((s as any).boydesc || '')} isn't budging. He keeps on going, pulling your hips towards him, filling your womb with splashes of semen.`);
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  }
  if (((s as any).belact ?? 0) > 0) {
    (s as any).belanal = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).belanal ?? 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>>'s sweat is dripping all over your body. He is huffing and puffing a...
      scene.text(`${((s as any).boydesc || '')}'s sweat is dripping all over your body. He is huffing and puffing as he pulls out. "Give me a second to catch my breath and then I'll finish this. Give me your sweet little ass." he says, breathing heavily`);
      scene.actions([
        { label: 'Take him in your ass', goto: ['BelSex', 'anal1'] },
      ]);
    } else {
      if (((s as any).belanal ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$boydesc>> wipes the sweat off his forehead, clearly worked up from fucking yo...
        scene.text(`${((s as any).boydesc || '')} wipes the sweat off his forehead, clearly worked up from fucking you. Nevertheless, he's not done with you and tells you that he wants your ass next.`);
        scene.actions([
          { label: 'Present your ass', goto: ['BelSex', 'anal2'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$boydesc>> pulls out of your pussy as the sensations make you moan. "Oh don't ...
        scene.text(`${((s as any).boydesc || '')} pulls out of your pussy as the sensations make you moan. "Oh don't worry sweetheart, I'm not done yet. It's your asshole next. Assume the position."`);
        scene.actions([
          { label: 'Get fucked from behind', goto: ['BelSex', 'analdoggy'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirl(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).sex_temp = ((s as any).sex_temp ?? 0) + (1);
  (s as any).picrand = Math.floor(Math.random() * 6) + 1;
  scene.img(`images/shared/sex/vag/cowgirl/vagcow${((s as any).picrand || '')}.jpg`);
  // TODO-QSP: dynamic text: <<$boydesc>> lies on the bed. He smirks as he tells you that you'll be doing all...
  scene.text(`${((s as any).boydesc || '')} lies on the bed. He smirks as he tells you that you'll be doing all the work today. You look at him, still a bit confused after the blowjob you've given him. Wasn't that enough? "Don't waste my time ${((s as any).pcs_nickname || '')}. Come here!" Not daring to upset him even more, you crawl on top of ${((s as any).boydesc || '')} and guide his cock inside your vagina.`);
  scene.text('He grabs your hips, controlling the rhythm as you ride him. He wants it fast. Fast, deep and hard, without any regard to you, or that he actually bumps into your cervix in this position. You keep riding him at the same rhythm as he moves his hands grabbing your breasts instead.');
  // TODO-QSP: dynamic text: Unable to think of anything but the pleasure, you moan so loudly that you are al...
  scene.text(`Unable to think of anything but the pleasure, you moan so loudly that you are almost screaming. Wanting to ride out this intense feeling, you completely forget that you're supposed to please ${((s as any).boydesc || '')} as you orgasm while riding him.`);
  qspCall(s, 'arousal', 'vaginal', 15, 'sub', 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    qspCall(s, 'cum_call', '', '', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).belsexpayment = 600;
    scene.img('images/shared/sex/cum/vagcreampie/creampie2.mp4');
    // TODO-QSP: dynamic text: You keep switching the tempo as you ride <<$boydesc>>, from the looks on his fac...
    scene.text(`You keep switching the tempo as you ride ${((s as any).boydesc || '')}, from the looks on his face he's ready to explode. You speed up even more wanting him to finish as soon as possible. As you're thinking about pulling out not wanting him to cum inside you, you realize that you are too late. ${((s as any).boydesc || '')} suddenly explodes inside of you.`);
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  }
  if (((s as any).belact ?? 0) > 0) {
    (s as any).belanal = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).belanal ?? 0))) {
      // TODO-QSP: dynamic text: <<$boydesc>>'s sweat is dripping all over your body. He is huffing and puffing a...
      scene.text(`${((s as any).boydesc || '')}'s sweat is dripping all over your body. He is huffing and puffing as he pulls out. "Give me a second to catch my breath and then I'll finish this. Give me your sweet little ass," he says, breathing heavily`);
      scene.actions([
        { label: 'Take him in your ass', goto: ['BelSex', 'anal1'] },
      ]);
    } else {
      if (((s as any).belanal ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$boydesc>> wipes the sweat off his forehead, clearly worked up from fucking yo...
        scene.text(`${((s as any).boydesc || '')} wipes the sweat off his forehead, clearly worked up from fucking you. Nevertheless, he's not done with you and tells you that he wants your ass next.`);
        scene.actions([
          { label: 'Present your ass', goto: ['BelSex', 'anal2'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$boydesc>> pulls out of your pussy as the sensations make you moan. "Oh don't ...
        scene.text(`${((s as any).boydesc || '')} pulls out of your pussy as the sensations make you moan. "Oh don't worry sweetheart, I'm not done yet. It's your asshole next. Assume the position."`);
        scene.actions([
          { label: 'Get fucked from behind', goto: ['BelSex', 'analdoggy'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal1(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).anal_temp = ((s as any).anal_temp ?? 0) + (1);
  scene.img('images/shared/sex/anal/piledriver/kotovsexanal36.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> begins rubbing the tip of his dick against your anus. Before you ca...
  scene.text(`${((s as any).boydesc || '')} begins rubbing the tip of his dick against your anus. Before you can even protest, his ${((s as any).dick || '')} cm cock has already painfully penetrated your ass. You instinctively want to flinch away, but he grabs your hips with surprising strength and forces his dick as far into your ass as he can… before he starts hammering away.`);
  scene.text('"All the other girls I\'ve fucked over the years loved getting their ass destroyed," he informs you between slaps of flesh against flesh. "I hope you don\'t mind." The only response you manage to let out is a little squeak as if you\'re giving him permission to continue on, not that he needs it.');
  qspCall(s, 'arousal', 'anal', 15, 'sub', 'prostitution', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    qspCall(s, 'cum_call', 'anus', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).belsexpayment = 600;
    (s as any).picrand = Math.floor(Math.random() * 2) + 1;
    scene.img(`images/shared/sex/cum/analcreampie/cumanal${((s as any).picrand || '')}.mp4`);
    // TODO-QSP: dynamic text: You can tell <<$boydesc>> is close to his orgasm. He huffs and puffs quite heavi...
    scene.text(`You can tell ${((s as any).boydesc || '')} is close to his orgasm. He huffs and puffs quite heavily now. Seconds later he firmly grabs your hips, his movements more erratic, and you feel his cock spasming inside you as he shoots his cum deep inside your asshole. The cum feels kind of warm inside you, and it slowly dribbles from your asshole once he pulls out his cock.`);
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal2(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).anal_temp = ((s as any).anal_temp ?? 0) + (1);
  (s as any).picrand = Math.floor(Math.random() * 5) + 30;
  scene.img(`images/shared/sex/anal/cowgirl/kotovsexanal${((s as any).picrand || '')}.mp4`);
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  // TODO-QSP: dynamic text: <<$boydesc>> lies on the bed, as you climb on top of him. <<$boydesc>> grabs hol...
  scene.text(`${((s as any).boydesc || '')} lies on the bed, as you climb on top of him. ${((s as any).boydesc || '')} grabs hold of his cock, guiding his cock inside your tight anus.`);
  scene.text('You gasp as you start moving back and forth, controlling the rhythm as you ride him. First, slowly, as you adjust yourself. Soon enough you\'re speeding up: fast, deep, and hard. You feel a sharp pain that quickly turns into a pleasant ache. You keep riding him at the same pace as he begins panting more and more.');
  qspCall(s, 'arousal', 'anal', 15, 'sub', 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    qspCall(s, 'cum_call', 'anus', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).belsexpayment = 600;
    scene.img('images/shared/sex/cum/analcreampie/analcum.jpg');
    // TODO-QSP: dynamic text: You can tell <<$boydesc>> is close to his orgasm. His cock is stiff and has gott...
    scene.text(`You can tell ${((s as any).boydesc || '')} is close to his orgasm. His cock is stiff and has gotten larger inside your anus. Seconds later he firmly grabs your hips and you feel his cock spasming inside you as he shoots his cum deep inside your asshole. The cum feels kind of warm inside you, and it slowly dribbles out as you get up off of him.`);
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnaldoggy(s: GameState, scene: SceneBuilder): void {
  (s as any).belact = ((s as any).belact ?? 0) - (1);
  (s as any).anal_temp = ((s as any).anal_temp ?? 0) + (1);
  (s as any).picrand = Math.floor(Math.random() * 13) + 0;
  scene.img(`images/shared/sex/anal/doggy/anal${((s as any).picrand || '')}.mp4`);
  // TODO-QSP: dynamic text: <<$boydesc>> pulls his cock out of your pussy and begins to slowly rub against y...
  scene.text(`${((s as any).boydesc || '')} pulls his cock out of your pussy and begins to slowly rub against your asshole. "Don't worry, ${((s as any).pcs_nickname || '')}. I'll be gentle," he says grinning as he has you on all fours, wide spread.`);
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  // TODO-QSP: dynamic text: "Enough foreplay. Your ass is ready me!" he shouts as <<$boydesc>> starts poundi...
  scene.text(`"Enough foreplay. Your ass is ready me!" he shouts as ${((s as any).boydesc || '')} starts pounding himself balls deep into you immediately. You bury your face into a pillow as he pounds your asshole roughly. The pain is unbearable and you flop with your legs trying to get away, but it only encourages ${((s as any).boydesc || '')} on as he keeps pummeling your anus.`);
  qspCall(s, 'arousal', 'anal', 15, 'sub', 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).belact ?? 0) <= 0) {
    qspCall(s, 'cum_call', 'anus', 'A113', 1);
    qspCall(s, 'stat', '');
    (s as any).belsexpayment = 600;
    scene.img('images/shared/sex/cum/analcreampie/kafeanpie.jpg');
    scene.text('You\'re at your limit and just as you want to beg him to take it easier, you feel him twitching behind you. All of a sudden you feel his warm cum shooting inside you. It slowly dribbles down your thighs as he pulls out of you.');
    scene.actions([
      { label: 'Take a shower', goto: ['BelSex', 'shower'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$boydesc>> is finally done with you. He looks at you all pleased as you get up...
  scene.text(`${((s as any).boydesc || '')} is finally done with you. He looks at you all pleased as you get up and head off to the bathroom to take a quick shower and freshen up.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a 15 minute shower', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'fame', 'pav', 'prostitute', 1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + 1;
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 1;
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You get into the nice, hot water stream of the shower and lather your body up with a soapy sponge. You carefully make sure to wash all of his cum that\'s dripping out your holes, you then shampoo your hair and rinse that out as well. You\'re squeaky clean now.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get out of the bathroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    if (((s as any).belgangPay ?? 0) <= 0) {
      qspCall(s, 'money', 'earn', ((s as any).belsexpayment ?? 0));
      // TODO-QSP: dynamic text: Vadim looks at you and says, "That was a good fuck, <<$pcs_nickname>>. Here, thi...
      scene.text(`Vadim looks at you and says, "That was a good fuck, ${((s as any).pcs_nickname || '')}. Here, this is for you," and with those words he hands you ' + $func('money', 'string_profit', belsexpayment) + '.`);
    } else {
      qspCall(s, 'money', 'debt_pay', 'belgangPay', ((s as any).belsexpayment ?? 0), 'none');
      qspCall(s, 'money', 'debt_pay', 'belgangPayWeek', ((s as any).belsexpayment ?? 0), 'none');
      qspCall(s, 'belgang', 'update_debt_calendar');
      // TODO-QSP: dynamic text: "You're getting there, whore." <<$boydesc>> writes off ' + $func('money', 'strin...
      scene.text(`"You're getting there, whore." ${((s as any).boydesc || '')} writes off ' + $func('money', 'string_debt_reduction', belsexpayment) + ' from your debt. He looks at you probably planning what he could do next to you. "Run along now, I have business to take care of," he says as he's escorting you to the door. As he's closing the door you hear him say, "Don't you ever forget who's your master, ${((s as any).pcs_nickname || '')}."`);
      scene.text(' ');
      // TODO-QSP: 'You owe him: ' + $func('money', 'string_debt', belgangPay)
      if (((s as any).belgangPayWeek ?? 0) >= 0) {
        // TODO-QSP: 'This week you need to pay him: ' + $func('money', 'string_debt', belgangPayWeek)
      } else {
        // TODO-QSP: dynamic text: This week you need to pay him: <<$func('money', 'format', 0)>>
        scene.text(`This week you need to pay him: ${qspFunc(s, 'money', 'format', 0)}`);
        // TODO-QSP: 'You have reduced your next weeks payment by: ' + $func('money', 'string_debt_reduction', -1*belgang...
      }
    }
    if (((s as any).PSwim ?? 0) === 1) {
      // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['swim'], lastwornclothingnumber['swim']
      // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
      // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
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
    case 'bj1':
      enterBj1(s, scene);
      break;
    case 'bj2':
      enterBj2(s, scene);
      break;
    case 'bj3':
      enterBj3(s, scene);
      break;
    case 'vaginal1':
      enterVaginal1(s, scene);
      break;
    case 'vaginal2':
      enterVaginal2(s, scene);
      break;
    case 'doggy':
      enterDoggy(s, scene);
      break;
    case 'cowgirl':
      enterCowgirl(s, scene);
      break;
    case 'anal1':
      enterAnal1(s, scene);
      break;
    case 'anal2':
      enterAnal2(s, scene);
      break;
    case 'analdoggy':
      enterAnaldoggy(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const BelSex: LocationDef = {
  name: 'BelSex',
  title: 'Not daring to make him more upset, you make sure your teeth ',
  region: 'other',
  enter: enter,
};
