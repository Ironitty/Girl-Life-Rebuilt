import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLockerRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
  scene.text('Niko wraps his arm around your neck and leads you to the locker room. When you enter, he closes the door and takes a quick look around to see if anyone is present before he walks up behind you and whispers in your ear. "Take off your clothes."');
  scene.text('You obediently do as he asks and he collects your clothes and puts them in a bag. You can\'t help but feel nervous.');
  scene.actions([
    { label: 'Take a deep breath', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/jewelry/cuffs.jpg');
    scene.text('You reassure yourself as you see Niko take out the collar you wore the other day and place it around your neck, followed by a pair of matching leather cuffs which he places around your wrists. You can feel your heart racing even faster.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    (s as any).NikoDate_Day = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker1.mp4');
    scene.text('Niko attaches the leash to your cuffs and walks you towards a nearby pipe before pushing you down on your knees. He unbuttons his pants before taking them off and pressing his dick against your lips. You obediently do as he commands, opening your mouth and letting his dick slide into your mouth. You feel your gag reflex kicking in as it brushes against your throat, but do your best to suppress it, not wanting to disappoint him. After a few thrusts, Niko pauses and gives you a confident wink while pointing down to his dick.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'bj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker2.mp4');
    // TODO-QSP: dynamic text: You immediately understand what he wants and start sucking his dick, trying your...
    scene.text(`You immediately understand what he wants and start sucking his dick, trying your best to please him as he looks down at you. "You're doing great ${((s as any).pcs_nickname ?? 0)}, keep it up."`);
    scene.text('His approval gives you a warm feeling in your heart.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow3.mp4');
    scene.text('Niko starts lightly moaning before grabbing your hair and pushing his cock down your throat, filling it with his warm cum. You enjoy the feeling of his dick pumping his cum down your throat.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker3.mp4');
    scene.text('Once he\'s fully spent, he puts his pants back on before kneeling to attach the leash to your collar, which he then ties to the nearby pipe. He gives you an approving pat on the head before leaving the locker room.');
    scene.actions([
      { label: 'Try to remove cuffs', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.img(`${qspUntranslated(s, "FUNC(''face_image'')", { location: "NikoWhore" })}`);
    scene.text('You squirm for a few seconds, attempting to free yourself from the cuffs until you hear the locker room door open and quickly look up in excitement.');
    scene.actions([
      { label: '???', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You\'re shocked and disappointed when you see Dan standing in front of you with a wolfish grin on his face. "Well well, I never thought that you were into this kind of stuff," he grins as he starts pinching your nipples, making you squeal.');
    scene.text('"Dan, stop! What are you doing here?"');
    scene.text('He grins even wider. "Ever since I saw Niko walking you around, I\'ve been keeping an eye on you and saw you doing some pretty naughty things. I like naughty things." He then lifts you to your feet.');
    scene.actions([
      { label: 'Let go of me!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker4.jpg');
    scene.text('"Let go of me or I\'ll scream!" you exclaim, but Dan\'s grin just grows wider.');
    scene.text('"Who would hear you, you dumb bitch? Everyone\'s in the cafeteria and even if someone did hear you, would you want them to see you chained up naked like a dog? Maybe I should just walk you into the cafeteria where you can scream all you want?"');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker5.mp4');
    scene.text('You lower your head in submission and Dan quickly turns you around and unbuttons his pants before sliding his dick into your ass, causing a sharp pain to shoot through you. Dan wastes no time and starts fucking your ass, gradually picking up the pace. He continues fucking your ass when his phone starts ringing.');
    // TODO-QSP: dynamic text: He doesn't stop fucking you as he answers his phone. "I can't right now. I'm too...
    scene.text(`He doesn't stop fucking you as he answers his phone. "I can't right now. I'm too busy fucking ${((s as any).pcs_nickname ?? 0)}'s ass." Your eyes widen as Dan continues. "Yeah, I'm in the locker room. Sure, you can come."`);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Who was that?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker6.mp4');
    scene.text('Dan hangs up. "That was Vitek. Don\'t worry about it."');
    scene.text('He starts fucking you harder as you try to speak. "Why… mmmmm… Why\'d you… mmmm… tell him abo…"');
    scene.text('Dan wraps his hand around your neck, bringing your head to his face. "He\'s my friend and I believe in sharing. Don\'t you?"');
    scene.text('You suddenly hear the locker room door open and turn to see who it is.');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn to see', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'boyStat', 'A10');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    if (((s as any).kotovLoveQW ?? 0) > 0) {
      (s as any).kotovLoveQW = (-1);
      // TODO-QSP: dynamic text: Vitek and Vasily enter the room and Vitek starts shouting. "What the fuck do you...
      scene.text(`Vitek and Vasily enter the room and Vitek starts shouting. "What the fuck do you think you're doing? ${((s as any).pcs_firstname ?? 0)} is mine!" Dan suddenly rams his dick deep into your ass, causing you to scream as he fills your ass with his cum. Vitek suddenly wraps his hand around Dan's throat. "Answer my fucking question! What are you doing fucking my girl?"`);
      // TODO-QSP: dynamic text: Dan chokes on his words as he tries to explain. "<<$pcs_firstname>> is a… whore ...
      scene.text(`Dan chokes on his words as he tries to explain. "${((s as any).pcs_firstname ?? 0)} is a… whore and I can… grr… prove it. Check this out…" Dan reaches into his pocket, pulls out his phone and taps the screen a few times. He holds his phone up so Vitek can see. A video plays where you hear sucking sounds, followed by a groan. You then hear yourself…`);
      scene.text('"I love you Nikolai! I love you with all my heart!" You realize that Dan must have recorded you sucking Niko\'s dick in the hallway after school. Vitek watches the video for a few more seconds before releasing Dan\'s throat and turning to you, his face seething with rage. "You fucking worthless whore!" He then lifts his hand and smacks you hard, knocking you to the ground before kicking a nearby garbage can in rage before Dan places his hand on his shoulder.');
      scene.text('"It\'s alright Vitek, you don\'t need her. You never did." Vitek takes a few seconds to calm himself before brushing Dan\'s hand off his shoulder as he unbuttons his pants. He walks up to you and pushes his dick against your lips.');
      scene.text('"What are you waiting for, whore? Start sucking." You meekly nod before wrapping your lips around his dick.');
    } else {
      scene.text('Vitek and Vasily enter the room and quickly start whistling at you. "I thought Dan was fucking with me when he told me about this," Vitek says as Dan suddenly rams his dick deep into your ass, causing you to scream as he fills your ass with his cum. You take a second to catch your breath and look up to see Vitek\'s dick in your face. "What are you waiting for, slut? Start sucking."');
      scene.text('"Please don\'t. I need to get back to…" you plead, but Vitek wraps his hand around your throat.');
      scene.text('"That can wait, now get sucking." Dan pulls out of you, causing a moan to escape your mouth. Vitek immediately takes advantage of this and shoves his dick into your mouth.');
    }
    qspCall(s, 'cum_call', 'anus', 'A10', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'arousal', 'bj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck Vitek\'s dick', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A9');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    if (((s as any).kotovLoveQW ?? 0) === -1) {
      scene.text('You start obediently sucking Vitek\'s dick, knowing better than to anger him further. Vasily has his dick out too and pokes your cheek with it, so you quickly pull away from Vitek\'s dick and suck on Vasily\'s. You spend the next few minutes alternating between their cocks while Vitek roughly squeezes your breasts.');
    } else {
      scene.text('You start obediently sucking Vitek\'s dick, knowing better than to anger him. Vasily has his dick out too and pokes your cheek with it, so you quickly pull away from Vitek\'s dick and suck on Vasily\'s. You spend the next few minutes alternating between their cocks while Vitek squeezes your breasts.');
    }
    qspCall(s, 'arousal', 'bj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow9.mp4');
    if (((s as any).kotovLoveQW ?? 0) === -1) {
      scene.text('Vitek grabs your hair, forcing his dick down your throat as he fills your mouth with his cum. You swallow as much as you can before Vasily pulls your head up to his dick and cums on your face. You take a few seconds to catch your breath as you listen to them talk.');
      scene.text('"I told you she was a freak! She loves getting fucked. She was basically begging me to fuck her ass!" Dan laughs.');
      // TODO-QSP: dynamic text: "Come on guys, we already have Sonia. We don't need <<$pcs_nickname>> too," Vasi...
      scene.text(`"Come on guys, we already have Sonia. We don't need ${((s as any).pcs_nickname ?? 0)} too," Vasily responds.`);
      scene.text('"She might be Sonia 2.0! It would be wrong for us <i>not</i> to show her off. Now is the perfect time too. I saw the teachers leaving the cafeteria while I was on my way here," Dan adds.');
      // TODO-QSP: dynamic text: "Sounds good to me. You hear that <<$pcs_nickname>>? You're gonna get what a who...
      scene.text(`"Sounds good to me. You hear that ${((s as any).pcs_nickname ?? 0)}? You're gonna get what a whore like you deserves. Now get up! You're coming with us!" Vitek says while roughly pulling you to your feet.`);
    } else {
      scene.text('Vitek grabs your hair, forcing his dick down your throat as he fills you throat with his cum. You swallow as much as you can before Vasily pulls your head to his dick then begins cumming on your face, covering your face in his warm cum. You take a few seconds catching your breath as you listen to them talk.');
      scene.text('"I told you she was a freak! She loves getting fucked. She was basically begging me to fuck her ass!" Dan laughs.');
      // TODO-QSP: dynamic text: "Come on guys, we already have Sonia. We don't need <<$pcs_nickname>> too," Vasi...
      scene.text(`"Come on guys, we already have Sonia. We don't need ${((s as any).pcs_nickname ?? 0)} too," Vasily responds.`);
      scene.text('"She might be Sonia 2.0! It would be wrong for us <i>not</i> to show her off. Now is the perfect time too. The boys are still on the stairwell," Dan adds.');
      if (((s as any).pcs_hotcat ?? 0) >= 7  &&  ((s as any).pcs_bmi ?? 0) <= 25) {
        // TODO-QSP: dynamic text: "That sounds like a great idea. <<$pcs_nickname>> is much hotter than Sonia anyw...
        scene.text(`"That sounds like a great idea. ${((s as any).pcs_nickname ?? 0)} is much hotter than Sonia anyway. Let's do it," Vitek responds before pulling you to your feet. "You're coming with us."`);
      } else {
        scene.text('"That sounds like a great idea. She looks like an overgrown pig, but we can always fuck her from behind. Alright, let\'s do it," Vitek responds before pulling you to your feet. "You\'re coming with us."');
      }
    }
    qspCall(s, 'cum_call', 'mouth_swallow', 'A9', 1);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'boyStat', 'A11');
    qspCall(s, 'cum_call', 'face', 'A11', 1);
    qspCall(s, 'arousal', 'bj', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Plead', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/wos.jpg');
    scene.text('"Please don\'t! I\'ll do anything! Just let me go!" you plead before Vitek roughly pulls on your collar and starts walking you out of the locker room.');
    // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, you'll get used to it. Imagine it, every boy in ...
    scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}, you'll get used to it. Imagine it, every boy in school will be giving you a lot of attention. You'll be <i>very</i> popular!" Dan laughs.`);
    // TODO-QSP: dynamic text: You look back at Vasily and he whispers in your ear. "I'm sorry <<$pcs_nickname>...
    scene.text(`You look back at Vasily and he whispers in your ear. "I'm sorry ${((s as any).pcs_nickname ?? 0)}, but I can't help you. It's too late." He follows closely behind in silence.`);
    scene.actions([
      { label: 'Continue walking', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '\'$face_image\'', '')}`);
    scene.text('Your heart is pounding and tears stream down your eyes. You close your eyes, trying to wake up from this nightmare when you hear the sounds of chatting and laughter, informing you that you\'re passing the cafeteria.');
    if (((s as any).fedorKozlovQW ?? 0) > 1  ||  ((s as any).fedorKozlovQW ?? 0) < -10) {
      // TODO-QSP: dynamic text: You suddenly hear Fedor shouting. "What are you guys doing with <<$pcs_nickname>...
      scene.text(`You suddenly hear Fedor shouting. "What are you guys doing with ${((s as any).pcs_nickname ?? 0)}?" Dan laughs as he replies. "Didn't ${((s as any).pcs_nickname ?? 0)} tell you? She wants to join Sonia as our fuck puppet." Fedor looks at you with concerning eyes. "They're lying, aren't they?"`);
      if (((s as any).fedorKozlovQW ?? 0) < -10) {
        scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
      } else {
        scene.img('images/characters/shared/headshots_main/big5.jpg');
      }
    }
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    if (((s as any).fedorKozlovQW ?? 0) > 1  &&  ((s as any).FedorLove ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) < -10) {
      scene.actions([
        { label: 'Run to Fedor', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/fedor.jpg');
    // TODO-QSP: dynamic text: You run to Fedor and jump into his arms as he stares into your eyes. "Don't worr...
    scene.text(`You run to Fedor and jump into his arms as he stares into your eyes. "Don't worry ${((s as any).pcs_nickname ?? 0)}. I'll keep you safe."`);
    scene.text('"Hey, she\'s ours now! Give her back!" Vitek shouts, but Fedor stands his ground.');
    scene.text('"No, she\'s mine!"');
    scene.text('Vitek walks up to him. "What did you say, punk?"');
    // TODO-QSP: dynamic text: Dan approaches them. "Hey, I'm sure that Fedor is just misunderstanding what's g...
    scene.text(`Dan approaches them. "Hey, I'm sure that Fedor is just misunderstanding what's going on. Let me explain. ${((s as any).pcs_nickname ?? 0)} has been a very naughty girl, fucking other students."`);
    // TODO-QSP: dynamic text: Fedor is taken aback. "Bullshit! I know <<$pcs_nickname>> and she's better than ...
    scene.text(`Fedor is taken aback. "Bullshit! I know ${((s as any).pcs_nickname ?? 0)} and she's better than that."`);
    scene.text('Dan snorts. "Oh really? Watch this and decide for yourself."');
    // TODO-QSP: dynamic text: He shows Fedor the video of you sucking off Niko and confessing your love to him...
    scene.text(`He shows Fedor the video of you sucking off Niko and confessing your love to him. Fedor's face grows pale. "Why ${((s as any).pcs_nickname ?? 0)}?… Why?"`);
    scene.text('You lower your head. "I…" You can\'t collect your words as Fedor clenches his fist.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, promise me right here and now, that you will never see Niko ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, promise me right here and now, that you will never see Niko ever again!"`);
    scene.actions([
      { label: 'I promise [<font color=#c600ff>Break up with Niko</font>]', handler: (st: GameState) => {
    (s as any).NikoBreakup = 1;
    (s as any).NikoEv = (-1);
    (s as any).NikoLuv = (-8);
    (s as any).NikoVolkovQW = (-1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    if (((s as any).fedorKozlovQW ?? 0) < -10) {
      scene.img('images/characters/shared/headshots_main/big9.jpg');
      scene.text('Fedor leans over and whispers in your ear. "Run."');
      scene.text('You quickly take off as Fedor tosses a nearby trash can at Vitek. Vitek blocks it as Fedor charges him and tackles him to the ground. You continue running as Vitek and Dan beat up Fedor. You look back to see Dan climb off Fedor and start running at you before Vasily pretends to trip and falls on Dan, causing them both to fall to the ground long enough for you to make you way to the locker room where you find the bag with your clothes in it.');
      scene.text('You spent a minute getting dressed before walking to the hallway just outside your classroom.');
    } else {
      scene.img('images/characters/pavlovsk/school/boy/ivan/School/jocks.jpg');
      // TODO-QSP: dynamic text: Fedor suddenly pulls you behind him. "<<$pcs_nickname>> is not going with you an...
      scene.text(`Fedor suddenly pulls you behind him. "${((s as any).pcs_nickname ?? 0)} is not going with you and that's final!"`);
      scene.text('In response, Vitek rams his fist into Fedor\'s stomach, knocking him back and bringing him to his knees. You quickly sneak away as the gopniks surround Fedor. Shortly after, you hear someone shouting. "What the fuck is going on here?" You see Ivan and a few of the other jocks walking out of the cafeteria as Vitek shouts at them.');
      scene.text('"Get lost! This doesn\'t concern you."');
      scene.text('Ivan gets up in Vitek\'s face. "When you attack my friend, then it does concern me." The jocks surround the gopniks as Vitek looks around in silence before speaking.');
      scene.text('"Whatever, I have better things to do anyway. Let\'s get going boys," he says before turning around and walking away as the jocks move out of their way, letting them go. Fedor turns to you and gives you a wink before being helped up by Ivan. You quickly run back to the locker room and find the bag with your clothes, which you put on before returning to the hallway.');
    }
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Remain silent [<font color=#FF00FF>Lose Fedor</font>]', handler: (st: GameState) => {
    if (((s as any).fedorKozlovQW ?? 0) > 1) {
      (s as any).fedorKozlovQW = (-1);
    }
    if (((s as any).fedorKozlovQW ?? 0) < -10) {
      (s as any).fedorKozlovQW = (-10);
      (s as any).FedorOutcast = (-1);
    }
    qspCall(s, 'npc_relationship', 'set', 'A5', 25);
    (s as any).FedorLove = 0;
    (s as any).FedorHome = (-1);
    (s as any).FedorShelter = (-1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
    scene.text('You lower you head in silence and Fedor sighs. "I guess that you care more for him than me… Fine. Have fun with your new boyfriend. I don\'t care anymore." He walks away without saying another word.');
    scene.actions([
      { label: 'Run to Fedor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/wos.jpg');
    scene.text('Vitek grabs you by the hair. "You\'ve wasted enough of our time. Let\'s get moving."');
    // TODO-QSP: dynamic text: "It's time to show you off <<$pcs_nickname>>. Aren't you excited?" Dan asks as t...
    scene.text(`"It's time to show you off ${((s as any).pcs_nickname ?? 0)}. Aren't you excited?" Dan asks as they walk you towards the stairwell.`);
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enter the stairwell', goto: ['NikoWhore', 'Exposed'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run to Fedor', handler: (st: GameState) => {
    (s as any).fedorKozlovQW = (-1);
    (s as any).FedorHome = (-1);
    (s as any).FedorShelter = (-1);
    qspCall(s, 'npc_relationship', 'set', 'A5', 25);
    qspCall(s, 'arousal', 'flash', 5, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/fedor.jpg');
    // TODO-QSP: dynamic text: You run to Fedor and jump into his arms as he stares into your eyes. "Don't worr...
    scene.text(`You run to Fedor and jump into his arms as he stares into your eyes. "Don't worry ${((s as any).pcs_nickname ?? 0)}. I'll keep you safe."`);
    scene.text('"Hey, she\'s ours now! Give her back!" Vitek shouts, but Fedor stands his ground.');
    scene.text('"No, she\'s mine!"');
    scene.text('Vitek walks up to him. "What did you say, punk?"');
    // TODO-QSP: dynamic text: Dan approaches them. "Hey, I'm sure that Fedor is just misunderstanding what's g...
    scene.text(`Dan approaches them. "Hey, I'm sure that Fedor is just misunderstanding what's going on. Let me explain. ${((s as any).pcs_nickname ?? 0)} has been a very naughty girl, fucking other students."`);
    // TODO-QSP: dynamic text: Fedor is taken aback. "Bullshit! I know <<$pcs_nickname>> and she's better than ...
    scene.text(`Fedor is taken aback. "Bullshit! I know ${((s as any).pcs_nickname ?? 0)} and she's better than that."`);
    scene.text('Dan snorts. "Oh really? Watch this and decide for yourself."');
    scene.actions([
      { label: 'See what happens', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    scene.text('Dan shows Fedor the video of you sucking off Niko and confessing your love to him. Fedor\'s face grows red with anger. "You… you bitch! How could you just use me like that?!"');
    scene.text('You lower your head. "I…" You can\'t collect your words as Fedor grabs the back of your neck and pushes you towards Vitek.');
    scene.text('"Have fun with her. I don\'t want her anymore."');
    scene.text('Dan pats Fedor on the back. "Why don\'t you join us? We were just about to show her off to everyone else."');
    scene.text('Fedor shakes his head and walks away as the gopniks lead you to the stairwell.');
    scene.actions([
      { label: 'Enter the stairwell', goto: ['NikoWhore', 'Exposed'] },
    ]);
  } },
    ]);
  } },
        { label: 'Enter the stairwell', goto: ['NikoWhore', 'Exposed'] },
      ]);
    }
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
  scene.build();
}

function enterExposed(s: GameState, scene: SceneBuilder): void {
  (s as any).school_lunch = 0;
  (s as any).NikoEv = 10;
  (s as any).npc_grupTipe['A189'] = 600;
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (10);
  qspCall(s, 'arousal', 'flash', 5, 'sub', 'humiliation', 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/wos.jpg');
  scene.text('You close your eyes as you\'re led down the hallway. You can hear other students talking about you.');
  scene.text('"What the fuck was she thinking? Why would she do this to herself? Is she that desperate for dick?" Lariska asks.');
  scene.text('"I always thought she was a nice girl, but I guess she was just a whore all along. She hid it well," Lina responds.');
  scene.text('Christina laughs. "You\'re both so stupid! I knew she was a fucking whore all along, you just have to look at how she acts. So weak and pathetic and eager to please any boy that paid any attention to her." You hear several of the other girls agree with her.');
  if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).pcs_bmi ?? 0) <= 25) {
    // TODO-QSP: dynamic text: "Fuck yeah! I've been wanting to fuck <<$pcs_nickname>> since I first saw her dr...
    scene.text(`"Fuck yeah! I've been wanting to fuck ${((s as any).pcs_nickname ?? 0)} since I first saw her drop that chalk in math class!" Roman laughs.`);
  } else {
    // TODO-QSP: dynamic text: "I always thought about what it would be like to fuck <<$pcs_firstname>> since I...
    scene.text(`"I always thought about what it would be like to fuck ${((s as any).pcs_firstname ?? 0)} since I first saw her drop that chalk in math class. If only she wasn't so ugly…" Roman laughs.`);
  }
  scene.text('"So another girl turning into a slut…" Lizaveta says as she shakes her head. "Why do so many girls have no self respect? The boys are gonna love this." She takes out her phone and starts recording you.');
  scene.actions([
    { label: 'Continue toward the stairwell', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (5);
    qspCall(s, 'boyStat', 'A154');
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '\'$face_image\'', '')}`);
    if (((s as any).npc_grupTipe ?? 0)?.['A25'] === 5) {
      // TODO-QSP: dynamic text: You reach the stairwell, where Vitek pushes you forward. "Hey boys! Look who's d...
      scene.text(`You reach the stairwell, where Vitek pushes you forward. "Hey boys! Look who's decided to join Sonia as the school whore! ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}!" he shouts out and the gopniks get noticeably excited as they start talking to each other.`);
      if (((s as any).pcs_hotcat ?? 0) > 6) {
        // TODO-QSP: dynamic text: "So <<$pcs_nickname>> decided to join the party? She looks good enough. Ever bee...
        scene.text(`"So ${((s as any).pcs_nickname ?? 0)} decided to join the party? She looks good enough. Ever been with a real man before?" Radomir asks with a grin.`);
        scene.text('"She\'s better looking than Sonia, I\'ll give her that," Valentin adds.');
      } else {
        // TODO-QSP: dynamic text: "So <<$pcs_nickname>> decided to join the party? She's always looked so trashy t...
        scene.text(`"So ${((s as any).pcs_nickname ?? 0)} decided to join the party? She's always looked so trashy though. Like one of those trailer park girls," Radomir says insultingly.`);
        scene.text('"Yeah, I\'ve seen better looking bitches in the chess club," Valentin adds.');
      }
    } else {
      // TODO-QSP: dynamic text: You reach the stairwell, where Vitek pushes you forward. "Hey boys! Look who's d...
      scene.text(`You reach the stairwell, where Vitek pushes you forward. "Hey boys! Look who's decided to become the school whore! ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}!" he shouts out and the gopniks get noticeably excited as they start talking to each other.`);
      if (((s as any).pcs_hotcat ?? 0) >= 6) {
        // TODO-QSP: dynamic text: "So <<$pcs_nickname>> decided to join the party? She looks good enough. Ever bee...
        scene.text(`"So ${((s as any).pcs_nickname ?? 0)} decided to join the party? She looks good enough. Ever been with a real man before?" Radomir asks with a grin.`);
      } else {
        // TODO-QSP: dynamic text: "So <<$pcs_nickname>> decided to join the party? She's so fucking ugly I imagine...
        scene.text(`"So ${((s as any).pcs_nickname ?? 0)} decided to join the party? She's so fucking ugly I imagine the only way she can get any attention is to give it away to anyone willing to have a go," Radomir says insultingly.`);
        scene.text('"Yeah, I\'ve seen better looking bitches skulking around in the city alleyways," Valentin adds.');
      }
    }
    scene.text('"Enough gawking. I\'m gonna fuck this bitch!" Arkadi says while approaching you.');
    scene.text('"Now that\'s what I like to hear," Roman adds.');
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big145.jpg');
    scene.text('The boys immediately take on aggressive postures, wolfish grins on their faces, when Katyusha suddenly speaks loudly enough to be heard over everyone. "You guys have to drag this fucking skank here? I\'m trying to eat my lunch!"');
    scene.text('You have a moment of hope that someone might save you, but when your eyes meet her\'s, she gives you a look of utter disgust and your heart sinks.');
    scene.text('Dan smirks and turns towards Katyusha. "Hey, if you don\'t like it, you can always eat somewhere else."');
    scene.actions([
      { label: 'See what happens next', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('Katyusha stands up and roughly shoves Dan. "Watch it or I\'ll make you eat something of your own."');
    // TODO-QSP: dynamic text: Dan puts his hands up and she walks up the stairs, seemingly to eat in peace. He...
    scene.text(`Dan puts his hands up and she walks up the stairs, seemingly to eat in peace. He snickers once she walks away as Pauline pulls out her phone and starts recording you. "Don't worry ${((s as any).pcs_nickname ?? 0)}, we'll make you a star… Now smile for the camera!" she says in a patronizing tone.`);
    scene.actions([
      { label: 'Lower your head', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 3, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/Lena.jpg');
    scene.text('You lower your head in embarrassment. You don\'t want to be recorded, but you\'re not in any position to stop her. Lena quickly approaches and grabs you by the hair before holding your face up to the camera. "She said smile bitch! Do you have cum in your ears?"');
    scene.text('"Maybe she\'s just shy?" Lera sarcastically adds and Lena laughs.');
    scene.text('"Shy? Does she look shy to you?" Lena runs her hand up your thigh to your pussy before pinching your clitoris. You can see the boys are getting very excited.');
    scene.actions([
      { label: 'See what Lena does', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/exposed1.jpg');
    // TODO-QSP: dynamic text: "Alright, let's not keep everyone waiting. If <<$pcs_nickname>> wants some dick,...
    scene.text(`"Alright, let's not keep everyone waiting. If ${((s as any).pcs_nickname ?? 0)} wants some dick, then let's get her some dick," she says before pushing you over to the boys, who quickly start fondling your body. You can feel yourself trembling as some of the boys run their hands across your body and Dan spanks your ass.`);
    scene.text('"Alright, who wants to fuck this slut?" he asks and your jaw opens in shock and your entire body trembles. Everything you had; your friends, your dignity and your reputation are now gone.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('Anushka gets up and walks down the stairs. "Okay, that\'s enough! Show\'s over, get lost!"');
      // TODO-QSP: dynamic text: Roman steps up to her. "Fuck you bitch! Why do you care? Are you jealous of <<$p...
      scene.text(`Roman steps up to her. "Fuck you bitch! Why do you care? Are you jealous of ${((s as any).pcs_nickname ?? 0)}? Wish that you were in her place? I always knew you were a slut!"`);
      scene.text('Anushka slaps him across the face, causing him to recoil back before immediately winding his hand back to slap her, but Valentin quickly grabs Roman by the wrist, stopping him while Arkadi speaks up.');
      scene.text('"Come on, back off man. There\'s no need for that."');
      scene.text('"Watch it. You\'re talking about our girl there," Radomir adds in a stern tone.');
      scene.text('Roman shoves Valentin, but doesn\'t break Valentin\'s hold on his wrist. "The bitch slapped me! I\'m going to fuck her up!"');
      scene.text('Things start to get tense before Valentin releases Roman. "If you ever lay a hand on her, then I will fuck you up. If I somehow can\'t, you know what her dad would do to you…" he says in a low tone full of menace.');
      scene.text('The mention of Anushka\'s father causes Roman to stiffen before he turns to Anushka. "That\'s your one free pass bitch! Hit me again and I\'ll drag your face through the dirt!"');
      scene.text('As he finally backs down, which you\'ve never seen him do before, Valentin turns to Roman again. "Back off!" Arkadi pulls Roman away while Roman gives Valentin a cold glare.');
    } else {
      scene.text('Anushka gets up and comes down the stairs. "I tried to warn you about Niko, now look at what he\'s done to you."');
      scene.text('You look down, unable to meet her gaze. "But I love him…"');
      scene.text('You hear her sigh and Alyona speaks up. "Have some fucking backbone and self respect!"');
      scene.text('"He doesn\'t love you! If he did, then he wouldn\'t let this happen. Come with us."');
      scene.text('Roman steps between you and them. "This slut isn\'t going anywhere. You\'d best leave before you end up joining her."');
      qspCall(s, 'willpower', 'sex', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go with them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go with them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('Alyona pulls out a switch blade as a response to the threat. "Try it and I\'ll cut your dick off, asshole!"');
    scene.text('"Do you even know how to use that thing, little girl?" Romans responds in a menacing tone as Valentin quickly grabs the girls and pulls them away as Arkadi pulls Roman back, clearly trying to calm him down. You realize that if you don\'t act now, then you won\'t be able to, so you burst into tears and rush over to them.');
    scene.text('Dan grabs the leash attached to your collar and jerks you back. "Where the fuck do you think you\'re going?"');
    scene.text('"Let her go now!" Anushka exclaims, but Dan snorts and yanks on the leash again.');
    scene.text('"Make me bitch!" he says mockingly as Valentin steps up and gets in his face.');
    scene.text('"Back off," he warns as Anushka uses the time to take the collar off your neck. When the rest notice, Roman steps forward, but Valentin steps in his way.');
    scene.actions([
      { label: 'See what happens next', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Before things spiral even further out of control, Vitek finally stands up. "Enough!" he loudly shouts and everyone stops, although Anushka moves you behind her so she\'s between you and the rest.');
    scene.text('Vitek approaches and looks at you, then at Anushka. "You sure about this? You sure you want to choose her over us?" She\'s putting her reputation with the gopniks on the line by standing up for you.');
    scene.text('She\'s quiet for only a second before nodding. "Yeah, I\'m sure."');
    scene.text('Vitek gives her a disgusted look, then looks over her shoulder right into your eyes. "You\'re lucky that someone is willing to stand up for you, bitch." He then looks back at Anushka. "Take her and go."');
    scene.actions([
      { label: 'Leave with them', goto: ['NikoWhore', 'leave_with_nush'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
        scene.text('You can see Anushka and Alyona watching. "This is like watching a really bad porno, but it still turns me on," Anushka comments and Dan turns towards them.');
        scene.text('"Just speak up, we can give you a turn too," he says with a laugh as Alyona and Anushka both flip him off.');
        scene.text('"As if… I like to fuck, but I\'m not going to be some slut who lets everyone fuck her whenever and where ever." Anushka says while glancing at you with a look of disgust on her face before looking back at Dan. "If I ever wanted to fuck you, it would be on <i>my</i> terms."');
      } else {
        scene.text('You can see Anushka and Alyona watching. "This is like watching a really bad porno. You know, the ones where the girl is a total slut and just lets everyone gangbang her because she delivered a pizza or some stupid shit like that," Anushka comments.');
        scene.text('Dan turns towards them. "Maybe we can make a good porno? Just come down here and we\'ll make you a star!" he says with a laugh as Alyona and Anushka both flip him off.');
        scene.text('"As if… I like to fuck, but I\'m not going to be some slut who lets everyone fuck her whenever and where ever. If I ever wanted to fuck you, it would be on <i>my</i> terms," Anushka says with a laugh.');
      }
      scene.actions([
        { label: 'Do nothing', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('Alyona pulls out a switch blade as a response to the threat. "Try it and I\'ll cut your dick off, asshole!"');
    scene.text('"Do you even know how to use that thing, little girl?" Romans responds in a menacing tone as Valentin quickly grabs the girls and pulls them away as Arkadi pulls Roman back, clearly trying to calm him down. They seem to be arguing, but you can\'t hear what they\'re saying. Anushka eventually jerks her arm free and Alyona makes a threatening motion with the knife again.');
    scene.text('Valentin puts his hands up and takes a step back. "Fucking assholes! All of you!" Anushka exclaims before giving you one final glance, her eyes begging you to come to her, but when you don\'t, she just looks at you with pity and walks away, flipping Valentin off as he chases after her.');
    scene.text('"Don\'t be like that Nush, come on!" He eventually turns and walks back to the group as Lena laughs.');
    scene.text('"Nobody\'s coming to save you now, slut."');
    scene.actions([
      { label: 'Watch them leave', goto: ['NikoWhore', 'no_escape'] },
    ]);
  } },
        { label: 'See what happens next', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('Anushka holds out her hand to you. "Come on, let\'s get out of here!"');
      // TODO-QSP: dynamic text: Dan walks in front of her. "Leave it, Nush. <<$pcs_nickname>> likes it. She want...
      scene.text(`Dan walks in front of her. "Leave it, Nush. ${((s as any).pcs_nickname ?? 0)} likes it. She wants to stay." He turns towards you. "Don't you, slut?"`);
      qspCall(s, 'willpower', 'sex', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go with them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go with them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    // TODO-QSP: dynamic text: You stare at Anushka, too terrified to speak. "<<$pcs_nickname>>! Say something!...
    scene.text(`You stare at Anushka, too terrified to speak. "${((s as any).pcs_nickname ?? 0)}! Say something!"`);
    scene.text('You want to speak, but your body won\'t let you. Taking your silence as acceptance, Anushka just sighs in a defeated tone and gives you a look of pity as Dan laughs. "See, what did I tell you? Now stop being such a buzz kill and either join in or piss off!"');
    scene.text('"Fuck you, asshole!" she replies and Dan grins.');
    scene.text('"Anywhere, anytime sweet cheeks."');
    scene.text('Valentin grabs Anushka by the arm and pulls her aside. You realize that if you don\'t act now, you won\'t be able to, so you burst into tears and rush over to them. "I don\'t want to stay!"');
    scene.text('Dan grabs the leash attached to your collar and jerks you back. "Just where the fuck do you think you\'re going?"');
    scene.text('"Let her go now!" Anushka exclaims, but Dan snorts and yanks on the leash again.');
    scene.text('"Make me bitch!" he says mockingly as Valentin steps up and gets in his face.');
    scene.text('"Back off," he warns as Anushka uses the time to take the collar off your neck. When the rest notice, Roman steps forward, but Valentin steps in his way.');
    scene.actions([
      { label: 'See what happens next', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Before things spiral even more out of control among the gopniks, Vitek finally stands up." Enough!" he loudly shouts and everyone stops, although Anushka moves you behind her so she\'s between you and the rest. Vitek approaches and looks at you, then at Anushka. "You sure about this? You sure you want to choose her over us?" She\'s putting her reputation with the gopniks on the line by standing up for you.');
    scene.text('She glances back over her shoulder at you. Your eyes meet and she smiles at you, then turns back to Vitek. "Fuck yeah, I\'m choosing her over some wannabe rapist."');
    scene.text('Vitek\'s eyes narrow, but you can tell she\'s made several of them uncomfortable. Lena and Lera suddenly seem a lot quieter, Valentin stiffens and Lavrenti stands up. "Okay, this has gone on long enough. Just let them go if they want to go."');
    scene.text('Valentin speaks up. "Fun\'s fun, but this is starting to go too far."');
    scene.text('Vitek looks around and sees that everyone is turning against the idea. He looks over Anushka\'s shoulder right into your eyes. "You\'re lucky that someone is willing to stand up for you, bitch." He looks back at Anushka. "Take her and go."');
    scene.actions([
      { label: 'Leave with them', goto: ['NikoWhore', 'leave_with_nush'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do nothing', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    // TODO-QSP: dynamic text: You stare at Anushka, too terrified to speak. "<<$pcs_nickname>>! Say something!...
    scene.text(`You stare at Anushka, too terrified to speak. "${((s as any).pcs_nickname ?? 0)}! Say something!"`);
    scene.text('You want to speak, but your body won\'t let you. Taking your silence as acceptance, Anushka just sighs in a defeated tone and gives you a look of pity as Dan laughs. "See, what did I tell you? Now stop being such a buzz kill and either join in or piss off!"');
    scene.text('"Fuck you, asshole!" she replies and Dan grins.');
    scene.text('"Anywhere, any time, sweet cheeks."');
    scene.text('Valentin pulls Anushka away while Alyona follows, but Anushka jerks her arm away and Valentin puts his hands in the air. "Just go Nush, you can\'t do anything here."');
    scene.text('She shakes her head in disgust. "Fuck you, Val!" She then turns and walks away while Alyona gives Roman a dirty look as she follows Anushka and Valentin calls after them. "Come on, don\'t be like that Nush!"');
    scene.text('Once Anushka\'s gone, he starts walking back towards the group. "Fuck. She is pissed."');
    scene.text('Radomir pats him on the shoulder. "She\'ll get over it. She always does."');
    scene.actions([
      { label: 'Watch them leave', goto: ['NikoWhore', 'no_escape'] },
    ]);
  } },
      ]);
    } else {
      scene.text('Dan takes a step closer to them. "Yeah? I\'m cool with that, just let me know. We can do that now if you want."');
      scene.text('Anushka and Alyona look at him, then at each other and back to him before laughing. "You wish. Go back to your pathetic slut, weak ass bitches like her is the only pussy you can get."');
      scene.text('Dan gets slightly embarrassed and angry. "Fuck you, bitches!"');
      scene.text('"Never going to happen." They get up and walk away together laughing while an annoyed Dan turns back to you.');
      scene.text('Dan takes a step closer to them. "Yeah? I\'m cool with that, just let me know. We can do that now if you want."');
      scene.text('Anushka and Alyona look at him, then at each other and back to him before laughing. "As if." They get up and walk away together laughing while an annoyed Dan turns back to you.');
      scene.actions([
        { label: 'Watch them leave', goto: ['NikoWhore', 'no_escape'] },
        { label: 'Watch them leave', goto: ['NikoWhore', 'no_escape'] },
      ]);
    }
  } },
      ]);
    }
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Locker Room':
      enterLockerRoom(s, scene);
      break;
    case 'Exposed':
      enterExposed(s, scene);
      break;
    default:
      enterLockerRoom(s, scene);
      break;
  }
}

export const NikoWhore: LocationDef = {
  name: 'NikoWhore',
  title: 'Break up with Niko',
  region: 'other',
  locationType: 'public_indoors',
  description: ['Niko wraps his arm around your neck and leads you to the locker room. When you enter, he closes the door and takes a quick look around to see if anyone is present before he walks up behind you and whispers in your ear. "Take off your clothes."'],
  enter: enter,
};
