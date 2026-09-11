import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
    ((s as any).AnnaQW ?? {})['switch'] = (((s as any).AnnaQW ?? {})['switch'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (2);
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['dom'] = (((s as any).AnnaQW ?? {})['dom'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['switch'] = (((s as any).AnnaQW ?? {})['switch'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenarm.jpg');
    scene.text('You take the multi wheel and roll it on your arm. You start really softly and you can feel that if you use more strength it would be painful; nonetheless with the force you applied you have a tickling sensation for the most part. "That\'s a good starting point… can you feel what I mean about the different effects you can have? Not only does the strength allow to have different effects, but also the area you are stimulating is meaningful… just think if it\'s applied to the feet; if they are really into tickling when stimulated. While on the other hand applying this to the chest area the sensations will mainly register as pain, while genital area… well I told you : it\'s a mix… Mmm… about that… are willing to try how does it feel on your breast. We\'ll use the multi wheel; it will be easier for you to understand the meaning of "mix" between pain and pleasure… what do you say?"');
    scene.actions([
      { label: 'I-it\'s ok… just… go easy on me Anna…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['dom'] = (((s as any).AnnaQW ?? {})['dom'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['switch'] = (((s as any).AnnaQW ?? {})['switch'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/Wattenarm.jpg');
    scene.text('You take the multi wheel and roll it on your arm surface. You made a good choice starting really softly because you can feel that if you use more strength it could be painful; nonetheless with the force you have applied you get a tickling sensation. "That\'s a good starting point… can you feel what I mean about the different effects you can get? Not only does the strength allow you to have different effects, but also the area you are stimulating is meaningful… just think to the feet for example; if they are really into tickling when stimulated. On the other hand like the chest are the sensations will feel mainly as pain, while on the genital area… well like I told you: it\'s a mix… Mmm… about that… maybe you are willing to try how does it feel on your breast. If you agree I can let you feel on them… only one circle item that case; it will be easier for you to understand the meaning of "mix" between pain and pleasure… what do you say?"');
    scene.actions([
      { label: 'Well… if you think it could be useful…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.text('"Mmm… I see. Anyway you have nothing to worry about. Stimulation has its purpose after all, and how sensations could be feels can be totally different from person to person. But we have done enough for today, I don\'t want to keep you here all evening. Let me show you out." You say thank you and go outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Clit…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.text('"Mmm… I see. Anyway there is nothing to worry about. Stimulation has its purpose after all, and how these sensations are felt are totally different from person to person. But we have done enough for today, you probably have some homework to do. Let me show you out." You say thank you and go outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Both', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['dom'] = (((s as any).AnnaQW ?? {})['dom'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['switch'] = (((s as any).AnnaQW ?? {})['switch'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.text('"Mmm… I can understand that… Anyway you have nothing to be worried about. Stimulation is the purpose after all, and how sensations are felt can be totally different from person to person. I think we\'ll end it for today, you probably have some chores to do. Let me show you out." You shake her hand and go outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Clit…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.text('"Mmm… feels nice dosen\'t it?… Anyway you have nothing to be worried about. Stimulation is the purpose after all, and how sensations feel totally different from person to person. But I thinks that\'s enough for today, I don\'t want to waste your time and I got to get started on dinner. Let me show you out." You shake her hand and head outside.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Both', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['switch'] = (((s as any).AnnaQW ?? {})['switch'] ?? 0) + (1);
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
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.text('"That\'s nothing to worry about. Stimulation is the purpose after all, and how sensations feel can be completely different from person to person. But I believe that\'s enough for today. Let me show you to the door." Anna leads you to the door, you shake her hand and head outside to the residential area.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Clit…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.text('"And do you like it?. Stimulation is the purpose after all. The sensations felt can be totally different from one person to another. But I think we\'ll end it at that for today. Let me show you out." Anna leads you to the door, you shake her hand and go outside and head towards the residential area.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'hotel_anna_gear', 'toys_images_clear');
  }, goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Both', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
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
    if (((s as any).annaToy ?? 0) === 2  ||  ((s as any).annaToy ?? 0) === 4) {
    } else {
      if (((s as any).annaToy ?? 0) === 3) {
        if (((s as any).annaToy ?? 0) === 2) {
        }
      }
    }
  }
  scene.build();
}

function enterToysImagesClear(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRestraintsRope(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
  scene.text('"What can you tell me about ropes?"');
  scene.text('"They are pretty simple, you can use them to restrain a sub or restrict movements, but there are other uses: For example they can be used to create elaborate patterns tied into a harness called "shibari" but that takes years of training.');
  scene.text('"Also ropes can be used for suspension this is an advantage over tape as ropes are very strong, the ropes we use have soft fibres, sometimes silk so that they are comfortable. A base knowledge of knots is normally required in the beginning you can get away with any knots but if they are used in a suspension game you have to be sure the knots are strong and can be undone quickly if something goes wrong.');
  // TODO-QSP: dynamic text: "Ropes are a dominant choice and the best way to learn is by doing so <<$pcs_nic...
  scene.text(`"Ropes are a dominant choice and the best way to learn is by doing so ${((s as any).pcs_nickname ?? 0)}, do you want to tie me up?`);
  scene.actions([
    { label: 'That sounds fun', handler: (st: GameState) => {
    ((s as any).AnnaQW ?? {})['dom'] = (((s as any).AnnaQW ?? {})['dom'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
  }, goto: ['hotel_anna_gear', 'restraints_rope_dom'] },
    { label: 'Excuse yourself', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text('"Thank you Anna, but I don\'t think I\'m ready for this."');
    // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, you are free to learn at your own pace and only ...
    scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}, you are free to learn at your own pace and only do what you are comfortable with. Next time something a bit more exciting, if I can get it arranged in time."`);
    scene.text('"Thank you Anna, goodbye."');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestraintsRopeDom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'BDSM_give', 5);
  qspCall(s, 'stat', '');
  ((s as any).AnnaQW ?? {})['dom'] = (((s as any).AnnaQW ?? {})['dom'] ?? 0) + (1);
  (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
  scene.text('"Ropes can be dangerous so you have to follow my instructions to the letter."');
  scene.text('"This will be easiest if I\'m naked, ropes can get caught in clothing unless you know exactly what you are doing." Anna strips down. "I\'m keeping the stockings on as they make my legs look great and will not be in the way." She smiles.');
  scene.text('"Ok, now pass that rope around my above my right breast and then below the left, I\'ll correct any mistakes at the end." You follow Anna\'s instructions until you have wrapped the rope tightly around her breasts in a figure of eight.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/restropea0.jpg');
    scene.text('""Mmmm… this one and this one… Can you see your mistake?"');
    scene.text('"Yeah, I see."');
    scene.text('"We are going for suspension play next so the knots have to be really strong, also this one is a false knot. If you pull that it\'ll come loose. You also forgot to make the knot for suspension on my back. Ok look…" Anna corrects all the mistakes you made basically re-doing it all, you manage to learn something though. When she finishes, she passes the end of her back ropes through a ring pending from the ceiling and hands it to you. "Now pull that"');
    scene.actions([
      { label: 'Pull', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/restropea1.jpg');
    scene.text('"Gahhhh!… Ufffffff… Gahhhhh!" Despite your effort you aren\'t able to rise Anna more than an a couple of centimetres and cannot hold her off the ground.');
    scene.text('"I know its tough, you will need more strength if you want to start suspending people but it\'s not only a matter of strength, there is technique and with more advanced setups pulley systems that make it much easier."');
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
    scene.text('You feed the rope back through the hoop and help Anna out of the rope you tied around her.');
    // TODO-QSP: dynamic text: "Don't worry, we'll get there." Anna says reassuringly as she puts her clothes b...
    scene.text(`"Don't worry, we'll get there." Anna says reassuringly as she puts her clothes back on, and after a brief chat she leads you to the door. "Next time I hope to have something a little more exciting if I can get it arranged, see you then ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Thank you Anna, goodbye."');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestraintsHarness(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
  scene.text('"Ummm… let see… this one Anna. What can you tell me about this?"');
  // TODO-QSP: dynamic text: "The harness? Well a harness is one of the most popular things in BDSM; this is ...
  scene.text(`"The harness? Well a harness is one of the most popular things in BDSM; this is a classic leather harness both for subs and Dominants who love to show some skin. There are models that more clearly shows the role but this is a neutral harness. This harness can also be a restriction device… for example a locked harness could become a chastity belt, or it can be used in pet play. Harnesses are made typically with leather; that's why they are considered one of the more classic items in the BDSM community. Anyway today we have a great many materials used to make BDSM items. So ${((s as any).pcs_nickname ?? 0)}… do you want to try that one?"`);
  scene.actions([
    { label: 'Ok', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harnessn.jpg');
    // TODO-QSP: dynamic text: "Great! Here let me help you." Anna helps you disrobe. "Wow! Stunning. You have ...
    scene.text(`"Great! Here let me help you." Anna helps you disrobe. "Wow! Stunning. You have a great figure ${((s as any).pcs_nickname ?? 0)}."</font>`);
    scene.actions([
      { label: 'Thanks…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harness0.jpg');
    scene.text('"Thank you Anna… it\'s a bit strange to receive such a compliment by a woman."');
    // TODO-QSP: dynamic text: "Nonsense. You have a beautiful body <<$pcs_nickname>> and this harness is made ...
    scene.text(`"Nonsense. You have a beautiful body ${((s as any).pcs_nickname ?? 0)} and this harness is made to show some skin as I said just turn around so I can see your back."</font>`);
    scene.actions([
      { label: 'Turn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harness1.jpg');
    scene.text('You slowly turn trying to put on a show on for Anna. "beautiful body. But we are not here to make you blush or feel uncomfortable. I don\'t know how much you can feel the leather, but I can assure you that leather has its own unique appeal; it\'s a matter on how feels to the skin, its smell… and other things you will eventually discover. I don\'t think we\'re gonna go any further today so we\'ll call it a night. Let me get your clothes." Anna gives you your clothes and you put them on, after few words she walks you the door and you head out to the residential area.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'I think I\'m done for today, I really have to go…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
    scene.text('"That\'s okay… I hope you learned a little about the harness and what it brings. Here let me get your clothes." Anna gives you your clothes and you put them back on, Anna talks a little bit about different harnesses before you leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Thank you Anna, but I have to go…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text('"Hope you don\'t mind Anna, but I have to get home."');
    scene.text('"Understandable. The main thing is you got the basic idea about the harness and what it can do. Here let me get your clothes." Anna gives you your clothes and you put them back on, Anna talks a little bit about her first experience with harnesses before you leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Why don\'t you try it on so I can see how it looks on you?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['dom'] = (((s as any).AnnaQW ?? {})['dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
    scene.text('"The idea here is that you wear the harness to get the idea of how it feels. So there\'s no particular point in me wearing it"');
    scene.actions([
      { label: 'If you say so…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harnessd0.jpg');
    scene.text('"Ok… I don\'t know how you were able to convince me but… okay I\'ll try it."');
    scene.text('"I don\'t think I need to tell you, but the feeling of leather is unique, there\'s nothing quite like it; the feeling of it to the skin, the smell… and so much more. Now turn around so I can see the back."');
    scene.actions([
      { label: 'Reply', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harnessd1.jpg');
    scene.text('"No… this is enough. I\'m not a doll that you can just boss around."');
    scene.text('"My dear I can assure you that wasn\'t an order… anyway I won\'t press you on it… you are free to do what you want. I think it\'s best if we end it for today. The main thing is that you have an idea about the harness. Let me get your clothes." You put your clothes back on. After few words about today Anna reassures you there was no reason to be worried, and that your reaction was completely normal. Soon you finish discussing and you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Turn and tease', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harness1.jpg');
    // TODO-QSP: dynamic text: You slowly turn swinging your back to tease Anna. "Mmmm… there's no need to put ...
    scene.text(`You slowly turn swinging your back to tease Anna. "Mmmm… there's no need to put a show on… but… ok: if that make you feel comfortable by all means… go on. Just remember, we don't have all day ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Ok ok… you\'re no fun… but I got the message." You stop from teasing Anna.');
    scene.text('"Don\'t take it the wrong way… you can try to tease me on our free time if you\'d like. But we are here for your session. I reckon by now you\'ve gotten to feel the leather a bit and how nice it feels against your skin, it\'s texture and smell, there really isn\'t anything quite like leather. I think that\'s enough for today. Let me get your clothes." Anna gives you your clothes and you redress yourself, and after a brief conversation you both say goodbye.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'We can stop here…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
    scene.text('"Tha\'s okay… I think it best if we end it for today then. I hope you learned something from our session here today. Let me get you your clothes." Anna gives you your clothes and you redress. You chat a little bit about the harness before saying goodbye');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Thanks for your offer Anna, but I have to go…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text('"Hope you don\'t mind Anna, but I really have to go."');
    scene.text('"That\'s fine, we can pick this up again next time. I hope that you got a little bit of an insight into what this harness can bring. You can take it off now and redress." You put your clothes back on, and after some small talk you say goodbye and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'On me?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).Anna_see_aswitch = ((s as any).Anna_see_aswitch ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
    scene.text('"Despite the fact that I like to wear that from time to time, this is a matter of you trying the harness to understand how it feels. There\'s no meaning in me trying it on."');
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harnessn.jpg');
    scene.text('"Great! Let me help you." Anna helps you put on the harness.');
    // TODO-QSP: dynamic text: "You have a beautiful figure <<$pcs_nickname>>."
    scene.text(`"You have a beautiful figure ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'Thanks…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harness0.jpg');
    scene.text('"Thank you Anna… I\'m not very used to get compliments from a woman"');
    // TODO-QSP: dynamic text: "You have a beautiful body my dear <<$pcs_nickname>> and this harness is made to...
    scene.text(`"You have a beautiful body my dear ${((s as any).pcs_nickname ?? 0)} and this harness is made to show that now turn around so I can see the back."`);
    scene.actions([
      { label: 'Turn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/harness1.jpg');
    // TODO-QSP: dynamic text: You slowly turn as to put a show on for Anna. "As I said <<$pcs_nickname>> you h...
    scene.text(`You slowly turn as to put a show on for Anna. "As I said ${((s as any).pcs_nickname ?? 0)} you have a great body. But we are not here to make you blush or feel uncomfortable. Now, do you feel how nice the leather feels against your body? Just the smell of leather can be arousing to some you know. Nothing quite beats leather. I think we'll end it there and continue next time. You can take the harness off now and get dressed." You put your clothes back on and talk a bit about leather harnesses before you say goodbye and go outside.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'I think we\'ve done for today, I have to go', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
    scene.text('"Then I think we should wrap it up for today. I hope that you see what a wonderful addition a harness can bring to BDSM. You can get dressed again now." Anna gives you your clothes and you get dressed, after some small talk you both say goodbye and you head out to the residential area.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Thank you Anna, but I have to go…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text('"Hope you don\'t mind Anna, I really have to get going."');
    scene.text('"That\'s okay, we can continue this another day then. I hope you\'ve learned something here today." You get dressed before chatting a bit with Anna about school before you say goodbye and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Thank you Anna, but I have to go…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text('"As you wish. We\'ll continue another time. Hopefully I\'ve given you some things to think about tonight. Let me show you out." You chat a bit on the way to the door when you reach the door you kindly say goodbye and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestraintsCuff(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
  scene.text('"Ummm… let see… What about the cuffs, what can you tell me about those?"');
  // TODO-QSP: dynamic text: "Cuffs uh? well for that we should move to the bedroom." You and Anna moves to t...
  scene.text(`"Cuffs uh? well for that we should move to the bedroom." You and Anna moves to the bedroom. Anna moves some pillows to make some room. "${((s as any).pcs_nickname ?? 0)}… please take a seat. Just pretend like you're at home." The bed seems comfy.`);
  scene.actions([
    { label: 'Find a spot on the bed', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuffn.jpg');
    scene.text('"Now, the cuffs, cuffs are one of the fastest way to lock limbs together; they also come in all sort of different materials and can provide a variety of uses. Usually cuffs need to be attached together but there are exceptions such as handcuffs."');
    scene.text('"Handcuffs are actually a type of manacle. Manacles usually come chained together, while cuffs have to be linked."');
    scene.text('"Their use is to restrict movement of course, but they are also a great sign of submission: if otherwise told, letting Master/Mistress find His/Her sub/subs just cuffed without waiting, is a great sign of obedience. Less than being collared and both is just, chef\'s kiss…"');
    scene.text('"Now these are all about submission training and there is no way you can understand them without being the one wearing them and submitting."');
    // TODO-QSP: dynamic text: "So <<$pcs_nickname>>, are you willing to try on some cuffs?"
    scene.text(`"So ${((s as any).pcs_nickname ?? 0)}, are you willing to try on some cuffs?"`);
    scene.actions([
      { label: 'Mmmm… what should I do?', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuffn.jpg');
    scene.text('"First of all, lay on your belly and remove your panties; this will help you with understanding some of the aspects of BDSM."');
    scene.actions([
      { label: 'O-ok…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuff0.jpg');
    scene.text('You do what Anna orders you to. "L-like… t-this?"');
    scene.text('"Exactly, now I will take care of the rest."');
    scene.actions([
      { label: 'Let Anna do her work…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuff1.jpg');
    scene.text('Anna puts a couple of cuffs on your wrists and ankles, then she link them together with a x cross strap. "I… am… chained… and exposed." You blush at the thought of Anna looking at you.');
    // TODO-QSP: dynamic text: "Exactly, cuffs can be used to made subs assume revealing positions. We could ta...
    scene.text(`"Exactly, cuffs can be used to made subs assume revealing positions. We could talk about all the different positions, but that would take all night. Anyway this should help you have an idea… So, immpressions?… Feelings?… Sensations?.. .Tell me ${((s as any).pcs_nickname ?? 0)}… how is it?"`);
    scene.actions([
      { label: 'I-i…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuff1.jpg');
    scene.text('"I-i…"');
    scene.text('"Well… if that left you speechless you felt something for sure. I won\'t push things though the main thing is to improve your knowledge, so I think we\'ll end it there. Just let me free you now." Anna smiles at you in a reassuring way; once free and with your panties on, you chat a little bit with Anna before you say goodbye and leave');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'C-can you free me now?', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuff1.jpg');
    // TODO-QSP: dynamic text: "Sure <<$pcs_nickname>> Just lay still and I'll unlock the cuffs." Anna starts f...
    scene.text(`"Sure ${((s as any).pcs_nickname ?? 0)} Just lay still and I'll unlock the cuffs." Anna starts freeing your ankles and wrists.`);
    scene.text('"Just remember, I won\'t force you to do anything you don\'t want… the main things is to improve your knowledge about this, and I feel you learned something today." Anna smiles at you in a reassuring way."');
    scene.text('"Once free and with your panties back on, she directs you to the door where you say goodbye');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Is that necessary?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuffn.jpg');
    scene.text('"Like I told you the only way to understand what the cuffs symbolize is from the perspective of a submissive and in order to experience that you must be vulnerable."');
    scene.text('"You can\'t be much more vulnerable than lying on my bed with no panties one, can you?"');
    scene.text('Her weird logic does make sense even if you suspect being used.');
    scene.text('"You do want to understand exactly what cuffs can be used for, and when to use them?"');
    scene.actions([
      { label: 'O-ok…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuff0.jpg');
    scene.text('You do as Anna says. "L-like… t-this way?"');
    scene.text('"Exactly, now I\'ll take care of the rest, lay still."');
    scene.actions([
      { label: 'Let Anna work…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuff1.jpg');
    scene.text('Anna locks a couple of cuffs both in your wrists and ankles, then she links them together with a x cross strap. "I… am… chained… and exposed." You blush at the thought of Anna looking at you.');
    // TODO-QSP: dynamic text: "Exactly, cuffs can be used to made subs assume a desired position. I could talk...
    scene.text(`"Exactly, cuffs can be used to made subs assume a desired position. I could talk for hours about all the different positions but we don't have that much time. Anyway this should help you have a general idea… So Immpressions?… Feelings?… Sensations?… Tell me ${((s as any).pcs_nickname ?? 0)}… what are your feelings right now?"`);
    scene.actions([
      { label: 'I-i…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).Anna_see_asub ?? 0) >= 10) {
      ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuff2.jpg');
    scene.text('"I-i…"');
    scene.text('"Cat got your tongue? You definitely felt something then. I won\'t push it though the main thing is that you learn, and you\'ve certainly learned a bit today so we\'ll stop for today. Let me unlock you so you can get dressed." Anna smiles at you in a reassuring way; once free and with your panties on, you talk a little bit about school before saying goodbye');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'C-can you free me now?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).Anna_see_asub ?? 0) >= 10) {
      (s as any).Anna_see_asub = ((s as any).Anna_see_asub ?? 0) - (1);
    }
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuff1.jpg');
    // TODO-QSP: dynamic text: "Of course <<$pcs_nickname>> wait a sec. Just lay still so I can unlock the cuff...
    scene.text(`"Of course ${((s as any).pcs_nickname ?? 0)} wait a sec. Just lay still so I can unlock the cuffs." Anna starts freeing your ankles and wrists. "I want you to remember that I won't push this on you… the main thing that you learn, and I'd say you've learned some today, now get dressed." She smiles at you in a reassuring way… Once free and with your panties back on, you thank Anna for tonight and say goodbye.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'I\'m sorry Anna, I cannot do that', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"No worries." Anna smiles at you in a reassuring way. "If you don\'t want to I will not force you. We\'ll end it here, but I hope you\'ve learnt a little bit and it does seem you are starting to understand you boundaries with power dynamics." She says with a smile.');
    scene.text('"Now, I think it\'s time you got home, you probably have homework to do." Anna leads you to the door and you say goodbye and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'I\'m sorry Anna, I cannot do that…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuffn.jpg');
    scene.text('"That\'s okay." Anna smiles at you in a reassuring way.');
    scene.text('"I\'m not going to push you into doing things you don\'t want to, We\'ll wrap this up for now, but I hope you\'ve learned a thing or two about cuffs and what they can be used for. Now you should get going home, it\'s getting late and I got some housework to do." Anna leads you to the door and you say goodbye and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'I\'m sorry Anna, I can\'t…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/cuffn.jpg');
    scene.text('"No worries." Anna smiles at you in a reassuring way. Submission isn\'t for everyone."');
    scene.text('"Ok, then I think we\'re done for today; I hope you\'ve learned a little bit more about BDSM. Let me walk you out" Anna leads you to the door and you return to the hotel lobby.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/annaintro1.jpg');
    scene.text('"Alright. If you don\'t want to I can understand that and I won\'t force you. Just think about some of the things you\'ve seen here today okay? Now, let me show you out." Anna leads you to the door and you return to the hotel lobby.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestraintsLeash(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
  scene.text('"What about this. What can you tell me about the collar and leash?"');
  scene.text('"The choice of a submissive, a collar and leash is a classic… That one is a simple leather set, there\'s not much to say though they are quite self explanatory."');
  scene.text('"I brought them to explain to you something else. Getting collared is a meaningful ritual within the BDSM community: to be collared means that the slave is owned by the Master/Mistress; it\'s one of the highest signs of obedience for the slave."');
  scene.text('"The leash is intended to be the hand that grips slave\'s life, and a tool to guide them."');
  // TODO-QSP: dynamic text: "So <<$pcs_nickname>>… are you willing to try the collar and the leash? If so ju...
  scene.text(`"So ${((s as any).pcs_nickname ?? 0)}… are you willing to try the collar and the leash? If so just strip this will allow me to explain its purpose better."`);
  scene.actions([
    { label: 'OK', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (1);
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/collnomean.mp4');
    scene.text('You strip down; Anna puts the collar on you and closes it around your neck, she has you kneel down so she can attach the leash. "Some collars can be worn as a jewelry you know. You look wonderful dear."');
    // TODO-QSP: dynamic text: "Ok <<$pcs_nickname>>… let's go for a walk? Just a few steps around the room, no...
    scene.text(`"Ok ${((s as any).pcs_nickname ?? 0)}… let's go for a walk? Just a few steps around the room, nothing serious. First, can you show me what it is to be submissive?"`);
    scene.actions([
      { label: 'Show her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashow.jpg');
    scene.text('You show Anna what it means to be a good puppy… You stand naked in front of her holding the leash in your mouth. Anna seems to be pleased, but she seems to not be really interested in your willing performance."');
    scene.text('"That\'s a good way to show obedience. Just remember there is no right or wrong today, this just to for you to get a feeling of the collar and the leash." She looks at you kindly. "Shall we go?"');
    scene.text('You nod.');
    scene.actions([
      { label: 'Follow Anna\'s lead…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leash.mp4');
    scene.text('Anna walks you around the room a little, you feel exposed and a little humiliated."');
    // TODO-QSP: dynamic text: "How is it going so far <<$pcs_nickname>>?"
    scene.text(`"How is it going so far ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.actions([
      { label: '"Fine, I think"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashnakfine.jpg');
    // TODO-QSP: dynamic text: "I'm happy to hear it… anyway we should stop for now. The walk ends. "We shouldn...
    scene.text(`"I'm happy to hear it… anyway we should stop for now. The walk ends. "We shouldn't get carried away, this is a practice session after all, so ${((s as any).pcs_nickname ?? 0)} I hope it has been instructive for you, you should have a better idea about the collar and the leash. You can get dressed now, and we'll continue next time"`);
    scene.text('"Thank you Anna." You get dressed and chat a little about collars before saying goodbye and leaving.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: '"Please stop"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashnakstop.jpg');
    scene.text('You lose all interest in completing the walk. "Uh? Oh… ok." The walk ends. Anna immediately stops as soon as she sees you no longer want to continue. She dosen\'t tighten her grip but you feel the sudden stop through the collar.');
    // TODO-QSP: dynamic text: "I think we should end it here, you should get dressed <<$pcs_nickname>>."
    scene.text(`"I think we should end it here, you should get dressed ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Y-yes…"');
    scene.text('You can\'t even complete your sentence as the shame pushes down on you. You quickly put your clothes back and exchange few words with Anna.');
    scene.text('She reassures you about the session and your feelings, telling you again that there\'s no reason to worry and it\'s only a learning session.');
    scene.text('You finally finish the chat and leave for today.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Too turned on to speak', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashnakwet.jpg');
    // TODO-QSP: dynamic text: No answer comes from you. "Uh?…" Anna immediately stops moving worried by the la...
    scene.text(`No answer comes from you. "Uh?…" Anna immediately stops moving worried by the lack of answer. "Is there a problem ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('"Y-yes."');
    scene.text('"What\'s wrong?"');
    scene.text('You are too ashamed to lift your head: you are soaking wet.');
    scene.text('"M-my, my pussy." is all you can manage.');
    scene.text('Anna immediately realizes what you are talking about. "Oh… interesting." Anna says as if its completely normal.');
    scene.text('"Don\'t worry. This can be a highly arousing situation regardless of which end of the leash you\'re on. It\'s totally natural, but I think we\'ll end it there, you\'ve learned enough for today."');
    scene.text('You put your clothes back on while trying to focus on something else. She reassures you about the session and your feelings. after a brief chat and time to calm down you say goodbye and leave the apartment.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Defy her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashowno.jpg');
    scene.text('You are naked and kneeling in front of Anna and will not be more submissive, so you stand up and loo her in eye to show your dominance.');
    scene.text('Anna smiles, "You are starting to understand power dynamics and what you want, very good."');
    scene.text('"As I told you, I have no ulterior motive, but I can understand your reaction, and won\'t force you to do anything you do not want."');
    scene.text('"As I was saying, the collar is a great sign of obedience, and leash is used to guide the slave. When used together it becomes an activity known as pet play."');
    scene.text('"Now, if you want to go for a walk just around the room we can do that, nothing serious."');
    scene.actions([
      { label: 'Follow Anna\'s lead…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).Anna_see_adom ?? 0) >= 10) {
      ((s as any).AnnaQW ?? {})['switch'] = (((s as any).AnnaQW ?? {})['switch'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leash.mp4');
    // TODO-QSP: dynamic text: Anna lets you walk in the room a little; understanding the aspects of being on d...
    scene.text(`Anna lets you walk in the room a little; understanding the aspects of being on display like this, like a pet. "How is it going so far ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.actions([
      { label: 'Fine… I think…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashnakfine.jpg');
    // TODO-QSP: dynamic text: "I'm happy to hear it… But we should stop for now." The walk ends. "We shouldn't...
    scene.text(`"I'm happy to hear it… But we should stop for now." The walk ends. "We shouldn't drag this on too long, this is for you to learn after all, so ${((s as any).pcs_nickname ?? 0)} I hope it has been a learning experience for you, hopefully you should have a better idea about the collar and the leash. You can get dressed now, and we'll follow up on this next time"`);
    scene.text('"Thank you Anna."You get dressed and chat a little about collars before saying goodbye and leaving.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'S-stop…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashnakstop.jpg');
    // TODO-QSP: dynamic text: You freeze up completely. "Uh? Oh… ok."</font> Anna stops the walk as soon as sh...
    scene.text(`You freeze up completely. "Uh? Oh… ok."</font> Anna stops the walk as soon as she sees you don't want to continue. she dosen't tighten her grip, the only tightness you feel is from when you stopped moving. "I suppose it got to be too much for you. It's probably best if we end it here, you should get dressed ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Y-yes…" You weren\'t able to complete your sentence feeling too much shame from the walk. As soon as you put clothes back on you exchange few words with Anna. She reassures you about the session and your feelings, telling again that there\'s no reason to worry as it\'s only a learning session. When you finish the chat you say goodbye and leave for today.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Don\'t…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashownoend.jpg');
    // TODO-QSP: dynamic text: You shake your head. "Well <<$pcs_nickname>>, in that case we should end it for ...
    scene.text(`You shake your head. "Well ${((s as any).pcs_nickname ?? 0)}, in that case we should end it for today. Hopefully I've given you some things to think about and we've made some steps forward." She unclips the leash from your collar.`);
    scene.text('"Move your hair so I can get the collar off." Anna removes the collar and you get dressed.');
    scene.text('You chat a little with Anna and she reassures you that learning about BSDM practices can sometimes mean being submissive or Dominant even if that is not in your nature.');
    scene.text('After your chat you say your thanks and head out to the hotel lobby.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).Anna_see_asub ?? 0) <= 10) {
      ((s as any).AnnaQW ?? {})['switch'] = (((s as any).AnnaQW ?? {})['switch'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashownoend.jpg');
    scene.text('"I can\'t I\'m sorry Anna."');
    // TODO-QSP: dynamic text: "Well <<$pcs_nickname>>… in that case we'll call it a day. The main thing is tha...
    scene.text(`"Well ${((s as any).pcs_nickname ?? 0)}… in that case we'll call it a day. The main thing is that you learn… and we've made progress." She removes the leash from your collar.`);
    scene.text('"Move your hair so I can get the collar off." Anna removes the collar and you get dressed.');
    scene.text('You chat a little with Anna and she reassures you that learning about BSDM practices can sometimes mean being submissive or Dominant even if that is not in your nature.');
    scene.text('After your chat you say your thanks and head out to the hotel lobby.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Why don\'t you let me put the collar on you?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
    scene.text('"That will not teach you what the collar means. It would maybe help me understand it more but honesty I\'ve worn so many of them I don\'t think it will."');
    scene.text('"This is about your education of BDSM and if you want to understand the collar and leash I must insist that you wear them."');
    scene.text('"You will not be a submissive just for experimenting, so will you wear them?"');
    scene.actions([
      { label: 'Ok I\'ll do it. But I\'m not putting on a show', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).BDSM_Knowledge = ((s as any).BDSM_Knowledge ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/collnomean.mp4');
    scene.text('You strip down to your lingerie; Anna takes the collar and closes it around your neck, she then links the leash to the collar. "I\'m starting to regret this decision."');
    // TODO-QSP: dynamic text: "There's no reason to be worried <<$pcs_nickname>>… let's go for a walk a few st...
    scene.text(`"There's no reason to be worried ${((s as any).pcs_nickname ?? 0)}… let's go for a walk a few steps in the room, nothing serious can you do that?. I won't ask you to show me submission… even if this is a learning experience without any consequence and it could be really instructive."`);
    scene.actions([
      { label: 'Woof…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashlingshow.jpg');
    // TODO-QSP: dynamic text: "Exactly! That is a good sign a slave can show to show their obedience <<$pcs_ni...
    scene.text(`"Exactly! That is a good sign a slave can show to show their obedience ${((s as any).pcs_nickname ?? 0)}. Shall we go for a walk?"</font>…`);
    scene.actions([
      { label: 'Follow Anna\'s lead…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashling.mp4');
    // TODO-QSP: dynamic text: Anna lets you walk in the room for a little bit; you can understand the meaning ...
    scene.text(`Anna lets you walk in the room for a little bit; you can understand the meaning of being the submissive to a dominant partner. "How are you doing ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.actions([
      { label: 'It\'s not so bad', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).Anna_see_adom ?? 0) <= 10) {
      ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashlingfine.jpg');
    // TODO-QSP: dynamic text: "I'm happy to hear it wasn't a problem for you. Ok <<$pcs_nickname>> I hope it w...
    scene.text(`"I'm happy to hear it wasn't a problem for you. Ok ${((s as any).pcs_nickname ?? 0)} I hope it was an instructive session; you should have a better idea about collar, leash, submission and petplay. now we'll end it here for today, let me remove the collar and get your clothes." You get dressed and after a brief chat you leave Anna's apartment.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Stop!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashlingstop.jpg');
    scene.text('As you stop moving you feel the collar pressing against your throat. "Uh?" Anna immediately drops the leash.');
    // TODO-QSP: dynamic text: "Sometimes it can get a bit too much, let me get this collar off and get your cl...
    scene.text(`"Sometimes it can get a bit too much, let me get this collar off and get your clothes ${((s as any).pcs_nickname ?? 0)} we're done for today."`);
    scene.text('"I shouldn\'t have done this."');
    scene.text('"It\'s okay, we wanted to you to learn about this and we\'ve learned more today, there\'s nothing to worry about." You try to answer but you can\'t find the words, you just want to go home. Anna removes the collar and gives you your clothes, once you\'ve gotten dressed you say goodbye to Anna before hurrying out the door.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Meh…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).Anna_see_abrat = ((s as any).Anna_see_abrat ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashmeh.jpg');
    scene.text('"I\'m not feeling like I\'m learning anything here"');
    scene.text('"Nothing. are you sure?"');
    scene.text('"Really dosen\'t feel like it."');
    scene.text('"That\'s okay, perhaps being in the submissive state of this isn\'t your thing, or maybe this just isn\'t the right setting. But in any case we\'ll end it here for today, let me get that collar and you can get dressed." Once you\'ve gotten your clothes back on you thank her for taking the time to try and teach you before you leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Hey!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashlingshowno.jpg');
    scene.text('Despite standing in such a humiliating position you refuse to show submission. "I\'m not stupid… I know where this ends, and I\'m not doing it." Surprisingly, Anna takes the leash and gives to you. "I said I won\'t force you, when you say stop we stop, you are in control here today so that you can learn, so you have nothing to worry about. So if you\'d like you can try being the submissive for today and we can try going for a walk so you can get a sense of what it\'s like, do you want us to do that?"');
    scene.actions([
      { label: 'Follow Anna\'s lead…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['trust'] = (((s as any).AnnaQW ?? {})['trust'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashling.mp4');
    // TODO-QSP: dynamic text: Anna lets you walk in the room a little; you start to understand what she means ...
    scene.text(`Anna lets you walk in the room a little; you start to understand what she means about being the submissive. "How are you doing ${((s as any).pcs_nickname ?? 0)}, everything okay so far?"`);
    scene.actions([
      { label: 'It\'s not that bad', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).Anna_see_adom ?? 0) <= 10) {
      ((s as any).AnnaQW ?? {})['sub'] = (((s as any).AnnaQW ?? {})['sub'] ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashlingfine.jpg');
    scene.text('"Glad to hear it wasn\'t too bad for you, let\'s end it here for today." The walk ends. "Now, as you already know this is a learning session, this dosen\'t mean anything between us. what you take from this is entirely up to you, but I hope you\'ve learned a little bit about what it\'s like for the submissive to be led by their master or mistress. Anyways, let\'s get that collar off so you can get dressed." You put your clothes back on and after a brief talk about the role of being submissive you say goodbye and leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Stop!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashlingstop.jpg');
    // TODO-QSP: dynamic text: Your body freezes completely, feeling the collar yank against your neck. "What?"...
    scene.text(`Your body freezes completely, feeling the collar yank against your neck. "What?" Anna drops the leash immediately letting it fall. "Are you okay ${((s as any).pcs_nickname ?? 0)}? I think we've gone far enough for today."`);
    scene.text('"I shouldn\'t have done this."');
    scene.text('"It\'s okay, maybe this part of it isn\'t for you, we\'ve learned something today so focus on that." You find yourself unable to answer feeling only embarrassed and wanting to hide. Anna removes your collar and tells you again that it\'s okay and you shouldn\'t think too much into it. Once you\'ve gotten your clothes you say goodbye to Anna, wanting to get away from all this as soon as possible.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Meh…', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).Anna_see_abrat = ((s as any).Anna_see_abrat ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashmeh.jpg');
    scene.text('"I don\'t feel like I\'m learning anything"');
    scene.text('"Nothing? Are you sure?"');
    scene.text('"Yeah, I\'m not really feeling it"');
    scene.text('"Well, that really depends on perspective dosen\'t it, we have learned today that this dosen\'t really do anything for you. you can always find some way to learn for everything you do. But we\'ll end it here so this doesn\'t turn into a school lecture, let me get that collar off so you can get dressed". After getting dressed you thank Anna for her time today and walk out of the apartment.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Now hold on!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashlingno.jpg');
    scene.text('"I know what you\'re trying to do and I\'m not doing it."');
    // TODO-QSP: dynamic text: "I'm only trying to teach you <<$pcs_nickname>>. But I think it's time to stop h...
    scene.text(`"I'm only trying to teach you ${((s as any).pcs_nickname ?? 0)}. But I think it's time to stop here for today then. Hopefully you'll have learned something from this." Anna removes the collar and gives you your clothes. "There we go." After you've gotten dressed you talk a little with Anna, she seems to be understanding of your feeling and says that it's perfectly normal to feel like this. After you've finished talking you thank her and leave.`);
  } },
    ]);
  } },
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leashlingno.jpg');
    scene.text('"I\'m not so sure I wanna do this anymore"');
    // TODO-QSP: dynamic text: "That's okay <<$pcs_nickname>> you are in charge here today, you say stop, we st...
    scene.text(`"That's okay ${((s as any).pcs_nickname ?? 0)} you are in charge here today, you say stop, we stop. Hopefully you've learned a little bit and maybe that'll is enough for today." Anna helps you remove the collar and gives you your dress. After getting dressed you exchange few words with Anna; you tell her again that even if there's no underlying meaning this is just too much for you; she doesn't seem to criticize your decision, and listens to you with kind eyes. Once you've finished talking you say goodbye and go out to the residential area.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).AnnaQW ?? {})['dom'] = (((s as any).AnnaQW ?? {})['dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr5.jpg');
    scene.text('"Fine it\'s better than nothing but you won\'t really understand the meaning. Wait here, i\'ll be back." Anna leaves you alone.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leasha0.jpg');
    scene.text('"I know it\'s not polite to leave guests alone… but my bells was in the other room." Anna comes back after about a minute.');
    scene.text('She\'s now naked and kneeling in front of you collared with a leash and a couple of bells on her nipples. She hold her hands behind her head as if waiting for something you can\'t help but stare at her. "Are we going for a walk?"');
    scene.actions([
      { label: 'Take the leash and walk in the room for a little', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'BDSM_give', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/leash.mp4');
    // TODO-QSP: dynamic text: "So <<$pcs_nickname>>, how does it feel to be walking your slave around naked, i...
    scene.text(`"So ${((s as any).pcs_nickname ?? 0)}, how does it feel to be walking your slave around naked, it's exhilarating isn't it?"`);
    scene.text('"I\'ve never heard of a puppy talking."');
    scene.text('Anna does not reply but crawls around where you lead her enthusiastically.');
    scene.text('After a few minutes and with you not really sure what you are doing you stop and tell Anna you are done.');
    scene.text('She kneels in front of you and talks as if there is nothing different than during any of your other conversations explaining how petplay works and how it can be used to reinforce other aspects of D/s.');
    scene.text('Once your chat is over you hand her back the leash handle, which she had told you was the correct way to end such a session.');
    scene.actions([
      { label: 'Return to hotel lobby', goto: ['pav_hotel', ''] },
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
    case 'toys_images_clear':
      enterToysImagesClear(s, scene);
      break;
    case 'restraints_rope':
      enterRestraintsRope(s, scene);
      break;
    case 'restraints_rope_dom':
      enterRestraintsRopeDom(s, scene);
      break;
    case 'restraints_harness':
      enterRestraintsHarness(s, scene);
      break;
    case 'restraints_cuff':
      enterRestraintsCuff(s, scene);
      break;
    case 'restraints_leash':
      enterRestraintsLeash(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hotel_anna_gear: LocationDef = {
  name: 'hotel_anna_gear',
  title: '"let see… this one Anna. What can you tell me about paddles?',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
