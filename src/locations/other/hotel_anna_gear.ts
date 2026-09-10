import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterToysPaddle(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hotel_anna_gear', 'toys_images');
  qspCall(s, 'stat', '');
  // TODO-QSP: $anna_toys_image5
  scene.text('"let see… this one Anna. What can you tell me about paddles?"');
  // TODO-QSP: dynamic text: "Paddles huh? Well they are flat instruments used for spanking purposes; usually...
  scene.text(`"Paddles huh? Well they are flat instruments used for spanking purposes; usually made of wood or some other rigid material. This one is a simple carved paddle that leaves some pretty writing on the butt cheeks. Paddles are the preferred toy for spanking but it's not exclusive. You can use your bare hands or something else like hairbrush, ruler, your imagination is the only limit. So ${((s as any).pcs_nickname ?? 0)}, are you willing to try the paddle a little?"`);
  qspCall(s, 'hotel_anna_gear', 'toys_paddle_options');
  scene.actions([
    { label: 'Oh… no, thank you for the offer Anna…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"I think it\'s time for me to leave."');
    scene.text('"Of course my dear, maybe another time if you desire." Anna leads you to the door');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    { label: 'Uh? On me?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['switch'] = ((s as any).AnnaQW['switch'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    // TODO-QSP: $anna_toys_image2
    scene.text('"Not necessarily. I\'m "quite open" to both when it comes to BDSM, hehehe. I don\'t mind if you want to try the paddle on your own butt and if you prefer to try it on a test subject, look no further."');
    qspCall(s, 'hotel_anna_gear', 'toys_paddle_options');
  } },
  ]);
  scene.build();
}

function enterToysPaddleOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) >= 30) {
    scene.actions([
      { label: 'Disrobe and try the paddle', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['sub'] = ((s as any).AnnaQW['sub'] ?? 0) + (2);
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/selfspankn.mp4');
    scene.text('You remove all your clothes and bend over on the table, preparing yourself for the task…');
    scene.text('You then proceed to strike your butt a few times as hard as you can from this angle.');
    scene.actions([
      { label: 'Look the result', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/paddleslut.jpg');
    scene.text('You look at your butt in the mirror the word "SLUT" is clearly imprinted on it.');
    scene.text('"See? Now you have a nice imprint on your butt!"');
    scene.text('"Emmm… thank you Anna… I think it\'s time to leave."');
    // TODO-QSP: dynamic text: "It was a pleasure <<$pcs_nickname>>. We'll continue another time." You put on y...
    scene.text(`"It was a pleasure ${((s as any).pcs_nickname ?? 0)}. We'll continue another time." You put on your clothes and let Anna lead you to the exit.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Try the paddle', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['sub'] = ((s as any).AnnaQW['sub'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/selfspankc.mp4');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('You remove your skirt leaving your panties on preparing yourself for the task…');
      scene.text('You then proceed to strike your butt a few times as hard as you can.');
    } else {
      scene.text('You remove your pants leaving your panties on preparing yourself for the task…');
      scene.text('You then proceed to strike your butt a few times as hard as you can.');
    }
    scene.actions([
      { label: 'Look the result', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/paddleslut.jpg');
    scene.text('You look at your butt in the mirror the word "SLUT" is clearly imprinted on it.');
    scene.text('Anna has a look, "That\'s worked really well you can read it so clearly"');
    scene.text('The word "SLUT" is imprinted on your butt. You admire it for a couple of minutes then redress.');
    // TODO-QSP: dynamic text: "OK <<$pcs_nickname>>, it's time for you to go, we can continue another time." A...
    scene.text(`"OK ${((s as any).pcs_nickname ?? 0)}, it's time for you to go, we can continue another time." Anna leads you to the door.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'I would prefer to test on you… (dom)', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    // TODO-QSP: $anna_toys_image6
    // TODO-QSP: dynamic text: "OK <<$pcs_nickname>>, just try as hard as you can. It's a 'bit' difficult to le...
    scene.text(`"OK ${((s as any).pcs_nickname ?? 0)}, just try as hard as you can. It's a 'bit' difficult to leave marks on me, ok?"`);
    scene.actions([
      { label: 'Spank Anna', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image7
    if (((s as any).annaToy ?? 0) !== 2) {
      // TODO-QSP: dynamic text: "Good effort, I really felt it but my butt will only show marks from a really he...
      scene.text(`"Good effort, I really felt it but my butt will only show marks from a really heavy beating ${((s as any).pcs_nickname ?? 0)}. That's because I'm well trained and my skin has gotten a bit tough. Still, the main thing is that you get the idea and understand the process. That's all for today come find me when you want to learn more." Anna leads you to the door.`);
    } else {
      // TODO-QSP: dynamic text: "Mmmh, it seems mommy <<$pcs_nickname>> will need a lot of practice. Hehehe. Unf...
      scene.text(`"Mmmh, it seems mommy ${((s as any).pcs_nickname ?? 0)} will need a lot of practice. Hehehe. Unfortunately for you i've got a steel butt from plenty of practice. Still, the main thing is that you get the idea and understand the process. That's all for today come find me when you want to learn more." Anna leads you to the door.`);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterToysVacuum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hotel_anna_gear', 'toys_images');
  qspCall(s, 'stat', '');
  // TODO-QSP: $anna_toys_image5
  scene.text('"Ummm… let me see… what can you tell me about vacuum cups…?"');
  // TODO-QSP: dynamic text: "Vacuum cups uh? Well here we have some manual vacuum cups. With cupping we mean...
  scene.text(`"Vacuum cups uh? Well here we have some manual vacuum cups. With cupping we mean the placing of suction devices on the skin to increase blood flow. Typically these are used on the nipples and the genitalia to increase sensation. Those little one are manual cups, but they can also be linked to a mechanical vacuum pump. Cups can be placed all over the body to create elaborate patterns. I have to tell you that even if they seem harmless, cupping can be considered an edgeplay: leaving a vacuum cup on for too much time with really high negative pressure value, can be very dangerous. Nonetheless I have to say that when cupping is done within the right limits… mmmm… definitively a must have. Say ${((s as any).pcs_nickname ?? 0)}, are you willing to try the cups a little?"`);
  scene.actions([
    { label: 'I-is it safe?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Absolutely. Nothing will go wrong I can promise you that. I have to stay here and monitor as is edgeplay after all, and I cannot allow you to do that alone. Hope you can understand. If you want you could try the manual cups; they are more difficult to use but they are safer and easier to control for inexperienced people. I\'ll put one on you and you\'ll follow my example with another one. Ready?"');
    scene.actions([
      { label: 'OK…', handler: (st: GameState) => {
    // TODO-QSP: AnnaQW['sub'] += 1
  }, goto: ['hotel_anna_gear', 'toys_vacuum3'] },
      { label: 'I\'m sorry Anna, maybe another time…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Well, I told you I won\'t force you and I\'m faithful to my promise. Next time I\'ll teach you about restraints and maybe another time you can try the vacuum cups if you desire."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Mmmh… no. But I\'d like to see it in action', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Ok, i\'ll give you a demonstration, pay attention because without trying this on yourself you won\'t understand what\'s the correct pressure and adjustments you have to mak1e to have a secure grip can be compromised."');
    scene.actions([
      { label: 'OK', handler: (st: GameState) => {
    // TODO-QSP: AnnaQW['dom'] += 1
  }, goto: ['hotel_anna_gear', 'toys_vacuum2'] },
      { label: 'Perhaps some other time.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text('"Well, I told you I won\'t force you and I\'m faithful to my promise. Next time I\'ll teach you about restraints and maybe another time you can try the vacuum cups if you desire."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'On me?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['switch'] = ((s as any).AnnaQW['switch'] ?? 0) + (1);
    // TODO-QSP: $anna_toys_image5
    scene.text('"Well if you are willing of course, but not without me being there. Nothing will go wrong I can promise you that, but this is edgeplay and I cannot allow you to this alone. I hope you can understand.');
    scene.text('I can make a practical demonstration on myself if you prefer but it\'s up to you. If you want to try by yourself you have to try with the manual cups, they are more difficult to use but they are safer and easier to control for inexperienced people. I\'ll put one on you and you\'ll follow my example with another one. Ready?"');
    scene.actions([
      { label: 'Ok… I\'ll try by myself…', goto: ['hotel_anna_gear', 'toys_vacuum3'] },
      { label: 'I prefer to watch you, Anna, if you don\'t mind…', goto: ['hotel_anna_gear', 'toys_vacuum2'] },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text('"Well, I told you I won\'t force you and i\'m faithful to my promise. Next time I\'l teach you about restraints and maybe another time you can try the vacuum cups if you desire."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterToysVacuum2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/vacuuma.mp4');
  scene.text('Anna puts the pump on and adjusts the settings to create a vacuum. "Hope you don\'t mind… I enjoy a bit more pressure than you can get with the manual ones." The cup stays firmly in place and you can see clearly that her nipple is dragged forward by the pressure; immediately Anna starts to move the cup.');
  scene.text('"Uh? Do you have to \'jerk\' the cup like that?"');
  scene.text('"No. I just like how it feels and it shows you how well the suction holds the cup in place"');
  scene.actions([
    { label: 'Got it', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('After a little time Anna releases the pressure and removes the cup from her nipple.');
    scene.text('"Thanks for the show Anna, it was… impressive."');
    // TODO-QSP: dynamic text: Anna smiles, "Thank you it comes with experience. OK <<$pcs_nickname>> that's al...
    scene.text(`Anna smiles, "Thank you it comes with experience. OK ${((s as any).pcs_nickname ?? 0)} that's all for today."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterToysVacuum3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/vacuums.mp4');
  scene.text('You remove your top and Anna puts a vacuum cup on one of your nipples. "Ok. Now you do the other one." You try to attach the cup following Anna instruction but the cup only stays in place for few seconds.');
  scene.text('"It won\'t stay in place!"');
  scene.text('"Exactly… they are more difficult to use. It\'s a matter of experience, but with the manual cups you can avoid any serious mistakes which you could make using the pump unit. Some lube or your own spit can help, the skin isn\'t like a mirror, so the grip isn\'t secure, especially at the beginning."');
  scene.text('You try again and this time manage to get it to attach, the sensation is weird and watching as you nipple it pulled forwards in the tube is very strange. You feel a little arousal but that is more from letting someone else play with your nipple than the cups.');
  scene.text('"The main point of this is to draw blood to the area and make the nerves work harder, you will be a bit more sensitive for a while afterwards."');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('Anna removes the cup from your nipple and you do the same with the other one.');
    // TODO-QSP: dynamic text: "Please, come find me when you want to learn some more <<$pcs_firstname>>."
    scene.text(`"Please, come find me when you want to learn some more ${((s as any).pcs_firstname ?? 0)}."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterToysWheel(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hotel_anna_gear', 'toys_images');
  qspCall(s, 'stat', '');
  // TODO-QSP: $anna_toys_image5
  scene.text('"Ummm… let see… this one Anna. What can you tell me about Wattenburg wheel…?"');
  // TODO-QSP: dynamic text: "Wattenburg wheel uh? Well, it's a medical pinwheel to stimulate or cause a ting...
  scene.text(`"Wattenburg wheel uh? Well, it's a medical pinwheel to stimulate or cause a tingling sensation, it can be used on the whole body or you can focus on preferred area. I prefer to use a single circle pinwheel instead of a multi circle pinwheel because of the area of the stimulation gets too big and sensations may be lessened on the body… but that's a personal preference. Depending on the usage of these instruments, you can have really different effects. If you use it with force it's a pain game; while if you use it with light pressure on the body you can cause, with the right person, an effect called knismolagnia: the sexual arousal from tickling. The use of the Wattenburg wheel on the genital area is a mix between pain and pleasure… if you know yourself and your partner you can reach the perfect mix between those states. Say ${((s as any).pcs_nickname ?? 0)}, are you willing to try the wheel a little?"`);
  scene.actions([
    { label: 'Okay', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    // TODO-QSP: dynamic text: "That's great <<$pcs_nickname>>…honestly I think that practice is always more in...
    scene.text(`"That's great ${((s as any).pcs_nickname ?? 0)}…honestly I think that practice is always more instructive. Here try the wheel on your hand for the moment, and try to see what kind of sensation you can have from that. You can use the multiwheel on your arm…"`);
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['sub'] = ((s as any).AnnaQW['sub'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenarm.jpg');
    scene.text('You take the multi wheel and roll it on your arm. You start really softly and you can feel that if you use more strength it would be painful; nonetheless with the force you applied you have a tickling sensation for the most part. "That\'s a good starting point… can you feel what I mean about the different effects you can have? Not only does the strength allow to have different effects, but also the area you are stimulating is meaningful… just think if it\'s applied to the feet; if they are really into tickling when stimulated. While on the other hand applying this to the chest area the sensations will mainly register as pain, while genital area… well I told you : it\'s a mix… Mmm… about that… are willing to try how does it feel on your breast. We\'ll use the multi wheel; it will be easier for you to understand the meaning of "mix" between pain and pleasure… what do you say?"');
    scene.actions([
      { label: 'I-it\'s ok… just… go easy on me Anna…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenbreast.mp4');
    scene.text('Anna smiles at you in a reassuring way, you ; you are sure she has no intention of forcing anything on you that you don\'t want to. You give her the ok to proceed and remove your shirt givng her access to your breast. You lay on the bed and Anna gets to work. "Ahhhh… ohhhhh… hahahaha… Annaaaahhh… hhhahahaa… mmmm… aaahh… hahaha…"');
    scene.text('"Shhhh… just focus on the differences."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Rush rush… I\'m curious!… Sensations?… "');
    scene.actions([
      { label: 'Arousing…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image4
    scene.text('"I-i… mmmh… emmmh… good?"');
    scene.text('"Well… I cannot guess as to your feelings… What can I say is that you have a really sensitive skin: I\'ve used almost no strength to be honest… Anyway I don\'t know if this is good for you: you are the only one who can answer that, and that depends on what are you looking for… Anyway we\'re done for today, let me show you out you have things to do and I gotta do some housework."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Mainly painful…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image4
    scene.text('"It hurts Anna! Well not only, but I fell mostly pain… is this bad?"');
    scene.text('"Well… I cannot know your feelings… What can I say is that you have a really delicate skin: I\'ve used almost no strength to be honest… Anyway how painful this is for you I can\'t know: you are the only one who can know that, and that depends on what are you looking for… Anyway we\'re done for today, let me lead to the exit you have things to do and I have other things to attend to."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'I-i… i\'m not sure…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image4
    scene.text('You say while panting. "I-I… I don\'t know Anna… I feel a lot… that\'s for sure…"');
    scene.text('"Well… I think you now have an idea about the mixed feelings we talked about. In time you will be able to more precisely what you are feeling if you want that is. Anyway we\'ve done for today, let me lead to the exit you have things to do and I have a tight schedule today."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Thank you for the offer Anna but I\'m a little scared…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"As you wish. I told you I will not force this on you and I always keep my promises." The session finish and after you exchange few other words Anna leads you to the exit.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Thank you for the offer Anna but i\'m a little scared…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"As you wish. I told you I won\'t make you do anything you don\'t want to and I always keep my promises." The session finish and after you exchange few other words Anna leads you to the exit.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Why don\'t I try it on you? It seems you are used to it…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    // TODO-QSP: dynamic text: "Hehehe <<$pcs_nickname>>, you are right but the answer is: no. There's no point...
    scene.text(`"Hehehe ${((s as any).pcs_nickname ?? 0)}, you are right but the answer is: no. There's no point for me trying the wheel on myself; it's a matter of you understanding what this tool can offer. You can get the right idea using the multiwheel on your arm… unless you're scared."`);
    scene.actions([
      { label: 'I\'m not scared! Give it to me…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenarm.jpg');
    scene.text('You take the multi wheel and roll it on your arm. You start softly; you can feel that if you use more strength it could be painful; nonetheless with the force you have applied you get a tickling sensation. "That\'s a good starting point… can you feel what I mean about the different effects it can have? Not only does the pressure allow you to have different sensations, but also the area you are stimulating can be meaningful… just think if it was used on the feet; if they are really into tickling when stimulated. While on the other hand applying this to the chest area the sensations will mainly register as pain, while on the genital area… well I told you: it\'s a mix… So are willing to try how it feels on your breast. If you agree you can feel how it is… We\'ll use the multi wheel; it will be easier for you to understand the meaning of the "mix" between pain and pleasure… what do you say?"');
    scene.actions([
      { label: 'Pain and pleasure, you said? Let see how it will feel…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenbreast.mp4');
    scene.text('Anna smiles at you in a reassuring way. You gave her the ok to proceed, and remove your shirt revealing your breasts. You lay down on the bed and Anna starts her work on you "Just focus on the differences."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Rush rush… I\'m curious!… Sensations?…"');
    scene.actions([
      { label: 'I can see the differences', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.text('"Well it has different uses, that\'s for sure."');
    scene.text('"Good! That was the main goal… Ok we\'ve done for today, let me show you out, you got have homework to do and I have to do some housework."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Meh…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"It dosen\'t really do anything for me…"');
    scene.text('"Maybe, or maybe it\'s something that simply isn\'t for you. In other words YKINMK: Your Kink Is Not My Kink. In a BDSM relationship there\'s never just one point of view; to have the maximal benefits from a BDSM relationship a good Dom should always consider a proper way to reward their Sub and the vice versa: a sub should always be faithful and consider their Dom\'s wishes. That can includes something that their counterpart maybe doesn\'t like; nonetheless it should be considered… and accepted, within limits of course. Ok we\'re done for today, let show you out, you have school tomorrow and I have to get the laundry."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Whatever…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenbreast.mp4');
    scene.text('Anna smiles at you reassuringly. You remove your shirt revealing breasts. You lay on the bed and Anna start to work. "Just focus on the differences."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Rush rush… I\'m curious!…Sensations?…"');
    scene.actions([
      { label: 'I can feel the differences', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.text('"Well it have different use, that\'s for sure."');
    scene.text('"Good! That was the goal… Ok we\'ve done for today, let show you out, you probably have dinner soon and I gotta get started on ours."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'I don\'t think this is for me', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"Dosen\'t really do anything for me."');
    scene.text('"That\'s fair. In other words YKINMK: Your Kink Is Not My Kink. In a BDSM relationship there\'s never just one point of view; to have the maximum benefit from a BDSM relationship a good Dom should always consider a proper way to reward their Sub and vice versa: a sub should always be faithful and consider their Dom\'s wishes. That can includes something that their counterpart maybe doesn\'t like; nonetheless it should be considered… and accepted, within limits of course. Ok we\'re done for today, let me show you out"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'I\'d rather not', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"As you wish. I told you I will not force anything you don\'t want on you and I always keep my promises… Anyway the main things is that you have an idea. Ok we\'re done for today." The session ends and after you exchange few words Anna leads you to the exit.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'I\'d rather not', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"Tha\'s fair. Like I told you I won\'t force this on you and I always keep my promises." The session ends and after you exchange few words, Anna leads you to the exit');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'On me?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>> there's no sense in me trying the wheel now is it; it's ...
    scene.text(`"Well ${((s as any).pcs_nickname ?? 0)} there's no sense in me trying the wheel now is it; it's a matter of you understanding what this tool can offer. You can get the right idea by using the multiwheel on your arm… if you want to see how it feels. I think that practice is more instructive in general. Here, why don't you try the multiwheel on your arm?."`);
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['switch'] = ((s as any).AnnaQW['switch'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenarm.jpg');
    scene.text('You take the multi wheel and roll it on your arm surface. You made a good choice starting really softly because you can feel that if you use more strength it could be painful; nonetheless with the force you have applied you get a tickling sensation. "That\'s a good starting point… can you feel what I mean about the different effects you can get? Not only does the strength allow you to have different effects, but also the area you are stimulating is meaningful… just think to the feet for example; if they are really into tickling when stimulated. On the other hand like the chest are the sensations will feel mainly as pain, while on the genital area… well like I told you: it\'s a mix… Mmm… about that… maybe you are willing to try how does it feel on your breast. If you agree I can let you feel on them… only one circle item that case; it will be easier for you to understand the meaning of "mix" between pain and pleasure… what do you say?"');
    scene.actions([
      { label: 'Well… if you think it could be useful…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenbreast.mp4');
    scene.text('Anna smiles at you in a reassuring way, not only do you have the feeling she won\'t do you any unnecessary harm; you are certain she has no intention of forcing this on you. You give her the ok to proceed and take of your shirt revealing breast… You lay on the bed and Anna starts to work on you. "Ahhhh… ohhhhh… hahahaha… Annaaaahhh… hhhahahaa… mmmm… aaahh… hahaha…"');
    scene.text('"Shhhh… just focus on the differences."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"So, how does it feel?"');
    scene.actions([
      { label: 'Arousing…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image3
    scene.text('"I-i… mmmh… emmmh… good?"');
    scene.text('"Well… I must say that you have really sensitive skin: i\'ve used almost no strength at all… Anyway You should think about if this is what you are looking for and if it feels good for you… Anyway we\'re done for today, let me lead to the door you gotta get home and I have to go get my daughter."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Mostly painful…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"It hurts Anna! Well not only pain… but that\'s what I feel the most… is that bad?"');
    scene.text('"I\'d say that you have very delicate skin: i\'ve used almost no strength at all to be honest… So you need to ask yourself if feeling mostly pain is the sensation you are looking for… Anyway we\'re done for today, let me lead to the door you probably got homework to do and I\'ve got to get started on dinner."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'I-i… i\'m not sure…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('You pant as you reply. "I-i… I don\'t know Anna… I feel a lot… that\'s for sure."');
    scene.text('"Well… I think you have an idea about the mixed feelings I mentioned. So if being kept at a mixed balance between pain and pleasure is what you are looking for this might be just what you are looking for… Anyway we\'re done for today, let me lead to the door your mother is probably wondering where you are and I got some laundry to do."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Thanks for the offer Anna but i\'m a little scared…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"I understand. I told you I won\'t force this on you and I always keep my promises." The session ends and after you exchange few words Anna leads you to the exit.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Thanks for the offer Anna but i\'m a little scared…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"I understand. Like I told you I won\'t make you do anything you don\'t want to and I always keep my promises." The session ends and after you exchange few words Anna leads you to the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterToysWand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'hotel_anna_gear', 'toys_images');
  qspCall(s, 'stat', '');
  // TODO-QSP: $anna_toys_image5
  scene.text('Ummm… let see… this one Anna. What can you tell me about this Violet wand…?"');
  // TODO-QSP: dynamic text: "Violet wand uh? Well, they are BDSM devices, that uses electric charges to appl...
  scene.text(`"Violet wand uh? Well, they are BDSM devices, that uses electric charges to apply intense stimulation. ${((s as any).pcs_nickname ?? 0)}…Do you want to try it?."`);
  scene.actions([
    { label: 'Is it safe?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"You\'ll see… it will be lighter putting your tongue on a battery like stupid boys do… Just let me regulate the voltage, I will use a low setting… Of course you have to agree… Why don\'t we try it on your hand?"');
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['sub'] = ((s as any).AnnaQW['sub'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/violetas.mp4');
    scene.text('You take the wand in your hand; Anna turns off the light in the room, she then begins to adjust the settings. "Put the tip of it near to your finger." You slowly move your fingers close to the wand. "Hey! It\'s… what\'s that?"');
    scene.text('"Nice isn\'t it? In a darkened room you can even see it… And of course you can feel it too… about that… do not worry if you can\'t control the movements of your fingers completely, the electricity is stimulating your muscles to move on their own. And as you can see there\'s no damage."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Well? I\'m curious… how was that?"');
    scene.actions([
      { label: 'I-is it normal… to have… some… bodily reactions?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image4
    scene.text('"Uh?" You look at Anna expectantly, waiting for her judgment.');
    scene.text('"Well… that means you are sensitive to electro play. But you shouldn\'t have had one with low voltage I used. Of course you are not referring to your hair… normally this is not felt as a surprise… ehhh… ok. Which one? Nip or clit?"');
    scene.actions([
      { label: 'Nip…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.text('"Mmm… I see. Anyway you have nothing to worry about. Stimulation has its purpose after all, and how sensations could be feels can be totally different from person to person. But we have done enough for today, I don\'t want to keep you here all evening. Let me show you out." You say thank you and go outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Clit…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.text('"Mmm… I see. Anyway there is nothing to worry about. Stimulation has its purpose after all, and how these sensations are felt are totally different from person to person. But we have done enough for today, you probably have some homework to do. Let me show you out." You say thank you and go outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Both', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    // TODO-QSP: dynamic text: "Interesting… A friend of mine would be really interested in that… it's not ever...
    scene.text(`"Interesting… A friend of mine would be really interested in that… it's not everybody that gets so aroused by such a low current; I assume you got wet? Ok ${((s as any).pcs_nickname ?? 0)}, I want you to know that's normal and you shouldn't worry. You are very sensitive to electro stimulation, This is one of the purposes of the violet wand. Okay I think that's enough for today, let me show you out, we can continue this another time."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Lie', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    (s as any).Anna_trust = ((s as any).Anna_trust ?? 0) - (1);
    scene.text('"No no! My hair reacts to the wand… it rises up! Yes… that\'s it." You try to avoid being honest with Anna.');
    scene.text('"Well assuming you are telling the truth… that\'s totally normal as I was saying… but it\'s not something that\'s usually a surprise to people; it\'s something that\'s expected from playing with electricity. Anyway, if you are telling the truth then I must say you are really impressionable. But we\'re done for today. Let me show you out." You shake her hand and leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'You don\'t see this everyday…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"That\'s because you don\'t often see these. And this was only a small taste of what it can offer but we\'ll explore that another day. Let me lead show you out it\'s getting late, and I need to get Lariska and I\'m sure you have things to do." You shake her hand and head out the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Emmmh… what am I suppose to feel?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    (s as any).Anna_see_abrat = ((s as any).Anna_see_abrat ?? 0) + (1);
    scene.text('"Don\'t be silly… if that was enough to move your finger you definitely felt something. Never left yourself be led by the rush, especially in BDSM world. It\'s easy to over estimate your limits, and that could be dangerous. As I said you must always, be honest with yourself. I think you\'ve learned something new today so we\'ll end it at that for today. Let me show you out, I gotta get started at dinner and you probably got homework." You shake her hand and leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Thanks for your offer Anna but I\'m really late…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"I understand, we can do this another time if you\'d like, but next time come a little earlier so you don\'t waste my time." You exchange few words with Anna and she shows you out.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Why don\'t you try that for me?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    // TODO-QSP: $anna_toys_image2
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>> of course I can… The question is: What do you get out of...
    scene.text(`"Well ${((s as any).pcs_nickname ?? 0)} of course I can… The question is: What do you get out of that? You are the one who's supposed to know more about the violet wand… Maybe you are scared by this little tool and what it can do" She says with a smile.`);
    scene.actions([
      { label: 'I\'m not scared! Give it to me!…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/violetas.mp4');
    scene.text('You take the violet wand in your hand; and Anna turns off the lights, then she starts to fiddle with the controls. "Put it near your finger." You do as she says. "Wow, what is that?"');
    scene.text('"Nice isn\'t it. If the room is darkened enough you can see them… Of course you can feel it as well… speaking of, do not worry if you can\'t control the movements of your finger completely, the electricity is stimulating your muscles to move on their own. And as you can see there\'s no damage."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"So, how did it feel?"');
    scene.actions([
      { label: 'It was… interesting.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    // TODO-QSP: $anna_toys_image2
    scene.text('"It\'s certainly a unique little thing with the pleasure it can bring. And it can offer more than this, this was only a little demonstration… But I think that\'s enough for today. Let me show you out, I have to do some laundry and you probably need to get home." You exchange an handshake and turn to your road.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Emmmh… what am I supposed to feel?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).Anna_see_abrat = ((s as any).Anna_see_abrat ?? 0) + (1);
    // TODO-QSP: $anna_toys_image2
    // TODO-QSP: dynamic text: "Playng the tough girl eh?. <<$pcs_nickname>>… if that was enough to move your f...
    scene.text(`"Playng the tough girl eh?. ${((s as any).pcs_nickname ?? 0)}… if that was enough to move your finger you felt something for sure. Never let yourself be seduced by the rush, especially in the BDSM world. It's easy to over estimate your limits, and that can be dangerous when we talk about BDSM. Always be honest with yourself and your partner: misjudgments could happen from both parts, and that has to be avoided, are we clear? We'll end it at that. Let me show you to the door, You need to get home and eat something and I need to do some housework." You shake her hand and walk out of the apartment.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Whatever…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/violetas.mp4');
    scene.text('You take the violet wand in your hand; and Anna turns off the lights, and starts to fiddle with the controls. "Put it near your finger." You do as she says. "Wow, what\'s that?"');
    scene.text('"Nice isn\'t it. If the room is darkened enough you can see them… Of course you can feel it as well… speaking of, do not worry if you can\'t control the movements of your finger completely, the electricity is stimulating your muscles to move on their own. And as you can see there\'s no damage."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"So, how was it?"');
    scene.actions([
      { label: 'It was certainly interesting…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    // TODO-QSP: $anna_toys_image2
    scene.text('"It\'s certainly a unique little thing with the pleasure it can bring. This was only a little taste of what it can give you. But I think you\'ve learned enough for today. Let me show you out, You need to get home before you mother starts to worry and I need to make some dinner." You shake her hand and leave the apartment.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Emmmh… what am I supposed to feel?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).Anna_see_abrat = ((s as any).Anna_see_abrat ?? 0) + (1);
    // TODO-QSP: $anna_toys_image2
    // TODO-QSP: dynamic text: "Such bravery. <<$pcs_nickname>>… don't be silly… if that was enough to move you...
    scene.text(`"Such bravery. ${((s as any).pcs_nickname ?? 0)}… don't be silly… if that was enough to move your finger you felt something for sure. Never let yourself be seduced by the rush, especially in the BDSM world. It's easy to over estimate your limits, and that can be dangerous when we talk about BDSM. Always be honest with yourself and your partner: misjudgments could happen from both parts, and that has to be avoided, are we clear? We'll end it at that. Let me show you to the door, You need to get home and eat something and I need to do some housework." You shake her hand and walk out of the apartment.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'I\'d rather not.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Understandable. Not all of these toys are for everyone… The main things is that you have an idea. Alright we\'re done for today." You exchange few more words with Anna and she leads you out');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'On me?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Well of course, there\'s no sense in me using it if you want to learn… well… there\'s some… but… It\'s a matter of understanding what this tool can offer. You can try it on your hand if you want, so you can get some feel of what it does."');
    scene.actions([
      { label: 'I don\'t know… i\'m a little scared…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    // TODO-QSP: dynamic text: Anna moves toward the control panel and turns it on. "<<$pcs_nickname>>, please,...
    scene.text(`Anna moves toward the control panel and turns it on. "${((s as any).pcs_nickname ?? 0)}, please, would you be so kind to turn it to max? I can't do that alone… well I can but it's more difficult… I want to hold my puppies."`);
    scene.actions([
      { label: 'Turn the wheel…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/violeta.mp4');
    scene.text('She puts the wand on her breast "Mmmm… as you can see it\'s safe… mmmh… and more… mmmmm… ready to try my little one?… mmmm… To the minimum power of course… mmmm… and on your hand." It seems Anna has no intention to move away from the violet wand, unless you try it.');
    scene.actions([
      { label: 'Try the wand on yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['switch'] = ((s as any).AnnaQW['switch'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/violetas.mp4');
    scene.text('You take the wand in your hand; Anna turns off the lights, she then grabs the controls and adjusts the settings. She pants as she says. "Put it near to your fingers."');
    scene.text('You do as she says. "What\'s that?"');
    scene.text('She keeps panting as she replies. "Nice isn\'t it? In a darkened room you can even see it… Of course you can feel it too… Do not worry if you can\'t control the movements of your fingers completely, the electricity is stimulating your muscles to move on their own. And there\'s no damage."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Well? how was it?"');
    scene.actions([
      { label: 'I-is it normal to get aroused?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image3
    scene.text('"Uh?"You look at Anna expectantly, waiting for her judgment.');
    scene.text('"Well… that means you are sensitive to electro play. There\'s nothing wrong with that, but the voltage was so low that you shouldn\'t have one. Where did you feel it the most? The nipples or the clit?"');
    scene.actions([
      { label: 'Nip…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.text('"Mmm… I can understand that… Anyway you have nothing to be worried about. Stimulation is the purpose after all, and how sensations are felt can be totally different from person to person. I think we\'ll end it for today, you probably have some chores to do. Let me show you out." You shake her hand and go outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Clit…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.text('"Mmm… feels nice dosen\'t it?… Anyway you have nothing to be worried about. Stimulation is the purpose after all, and how sensations feel totally different from person to person. But I thinks that\'s enough for today, I don\'t want to waste your time and I got to get started on dinner. Let me show you out." You shake her hand and head outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Both', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    // TODO-QSP: dynamic text: "Interesting… A friend of mine would be really interested in that… I think you s...
    scene.text(`"Interesting… A friend of mine would be really interested in that… I think you saw her once… You showed arousal in both your nipples and clit… and I assume you were wet? Ok ${((s as any).pcs_nickname ?? 0)}, I want you to know that's normal and you shouldn't be embarrassed. You are really sensitive to electro stimulation, but do not forget that this is one of the purpose of the wand… I have to warn you that you can't play with this without the right tools. Alright, I think we should end it here, we can continue another time… you got to get home… and… emmmh… I got something else to take care of."`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Lie', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    // TODO-QSP: $anna_toys_image2
    scene.text('"No no! My hair it\'s stands up! That\'s all!."You try to avoid being honest with Anna.');
    scene.text('"Well assuming you are telling the truth… that\'s totally normal it\'s not something that usually surprises people; it something that\'s expected from playing with the wand. Anyway, if you are telling the truth you are really impressionable, I have to say. But we\'re done for today. Let me show you out, you got homework to do and I have to do some laundry." You shake her hand and go outside');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'It\'s a bit weird…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image2
    scene.text('"The wand does have a unique way of stimulating. Well it can offer much more than this. This was only a little demonstration of what it can do… But I think this is enough for today, you learned something new so we\'ll end it here, let me show you out, we can continue this next time." Anna leads you to the door, you shake her hand and go outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Emmmh… what am I suppose to feel?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).Anna_see_abrat = ((s as any).Anna_see_abrat ?? 0) + (1);
    scene.text('"That was enough to move your finger you felt something that\'s for sure, don\'t be silly. Never left yourself be blinded by the rush, especially in the BDSM world. It\'s easy to over estimate your limits, and that can be dangerous. Always, be honest with yourself. I think that\'s enough for today. Let me show you out, we can continue this another time." Anna leads you to the door, you shake her hand and go outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'There\'s no need, I have to go…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"As you wish. We can continue this another time." You exchange few more words with Anna and she leads you to the door, you shake her hand and go out into the residential area.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'There\'s no need Anna really, I have to go…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"As you wish. We can continue this another time." You exchange few more words with Anna and she leads you to the door, you shake her hand and go out into the residential area.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Ok', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['switch'] = ((s as any).AnnaQW['switch'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/violetas.mp4');
    scene.text('You take the violet wand in your hand; and Anna turns off the lights, then she starts to fiddle with the controls. "Put it near your finger."');
    scene.text('You do as she says. "Wow, what is that?"');
    scene.text('"Nice isn\'t it. If the room is darkened enough you can see them… Of course you can feel it as well… speaking of, do not worry if you can\'t control the movements of your finger completely, the electricity is stimulating your muscles to move on their own. And as you can see there\'s no damage."');
    scene.actions([
      { label: 'Finish…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: $anna_toys_image5
    scene.text('"Well, how did it feel?"');
    scene.actions([
      { label: 'I-is it normal to get aroused?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Uh?" You look at Anna, waiting for her judgment.');
    scene.text('"Well… that just means your body is sensitive to electro play. Nothing is wrong, but the voltage was so low that you shouldn\'t really have felt anything. So where did you feel it the most? The nipples or the clit?"');
    scene.actions([
      { label: 'Nipples…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.text('"That\'s nothing to worry about. Stimulation is the purpose after all, and how sensations feel can be completely different from person to person. But I believe that\'s enough for today. Let me show you to the door." Anna leads you to the door, you shake her hand and head outside to the residential area.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Clit…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    scene.text('"And do you like it?. Stimulation is the purpose after all. The sensations felt can be totally different from one person to another. But I think we\'ll end it at that for today. Let me show you out." Anna leads you to the door, you shake her hand and go outside and head towards the residential area.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Both', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    // TODO-QSP: dynamic text: "Interesting… A friend of mine would be really interested to hear about this… no...
    scene.text(`"Interesting… A friend of mine would be really interested to hear about this… not everybody get's so aroused by a little shock; you seemed to show both on your breasts and you clitoris, did you get wet?. Ok ${((s as any).pcs_nickname ?? 0)}, I want you to know that's normal and you shouldn't worry. It just means you are really sensitive to electro stimulation, but don't forget that this is the purpose of the wand. I believe we should say that's enough for today, let me show you out, we can pick this up another time." Anna leads you to the door, you shake her hand and head out to the residential area.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Lie', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).Anna_trust = ((s as any).Anna_trust ?? 0) - (1);
    scene.text('"No no! It\'s just my hair that stands up! Yes… that\'s it." You try to avoid being honest with Anna.');
    scene.text('"Well assuming you are telling the truth… that\'s normal. It\'s not something that usually surprise people. Anyway, if you were telling the truth you are really impressionable, I have to say. But we\'ll leave that for another day. Let\'s head to the door, you probably have homework to do." Anna leads you to the door, you shake her hand and you return to the hotel lobby.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Never felt something like that before', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"The wand does have it\'s own special way of stimulating. It can offer so much more than this. This was only a little demonstration of what it can do… But I think this is enough for today, you learned something new so we\'ll end it here, let me show you out, we can continue this next time." Anna leads you to the door, you shake her hand and return to the hotel lobby.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Emmmh… what am I suppose to feel?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).Anna_see_abrat = ((s as any).Anna_see_abrat ?? 0) + (1);
    scene.text('"That was enough to move your finger so you definitely felt something that\'s for sure. Don\'t be blinded by the excitement, especially in BDSM world. It\'s easy to over estimate your limits, and that is dangerous when we talk about BDSM. Always, be honest with yourself. That\'s enough today. Let me follow you out." Anna leads you to the door, you shake her hand and return to the hotel lobby.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Thanks Anna, but I think I\'ll pass this time…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"As you wish. Don\'t feel like I\'m trying to push this on you, if you don\'t want to that\'s fine." The session ends and after you exchange few more words with Anna she leads you to the door');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterToysImages(s: GameState, scene: SceneBuilder): void {
  if (((s as any).annaToy ?? 0) === 1) {
  } else {
    if (((s as any).annaToy ?? 0) === 3) {
      if (((s as any).annaToy ?? 0) === 2) {
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'toys_paddle':
      enterToysPaddle(s, scene);
      break;
    case 'toys_paddle_options':
      enterToysPaddleOptions(s, scene);
      break;
    case 'toys_vacuum':
      enterToysVacuum(s, scene);
      break;
    case 'toys_vacuum2':
      enterToysVacuum2(s, scene);
      break;
    case 'toys_vacuum3':
      enterToysVacuum3(s, scene);
      break;
    case 'toys_wheel':
      enterToysWheel(s, scene);
      break;
    case 'toys_wand':
      enterToysWand(s, scene);
      break;
    case 'toys_images':
      enterToysImages(s, scene);
      break;
    default:
      enterToysPaddle(s, scene);
      break;
  }
}

export const hotel_anna_gear: LocationDef = {
  name: 'hotel_anna_gear',
  title: '"let see… this one Anna. What can you tell me about paddles?',
  region: 'other',
  locationType: 'event',
  description: ['"let see… this one Anna. What can you tell me about paddles?"'],
  enter: enter,
};
