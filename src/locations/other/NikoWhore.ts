import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLockerRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
  scene.text('Niko wraps his arm around your neck and leads you to the locker room. When you enter, he closes the door and takes a quick look around to see if anyone is present before he walks up behind you and whispers in your ear. "Take off your clothes."');
  scene.text('You obediently do as he asks and he collects your clothes and puts them in a bag. You can\'t help but feel nervous.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a deep breath', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/jewelry/cuffs.jpg');
    scene.text('You reassure yourself as you see Niko take out the collar you wore the other day and place it around your neck, followed by a pair of matching leather cuffs which he places around your wrists. You can feel your heart racing even faster.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    (st as any).NikoDate_Day = ((st as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker1.mp4');
    scene.text('Niko attaches the leash to your cuffs and walks you towards a nearby pipe before pushing you down on your knees. He unbuttons his pants before taking them off and pressing his dick against your lips. You obediently do as he commands, opening your mouth and letting his dick slide into your mouth. You feel your gag reflex kicking in as it brushes against your throat, but do your best to suppress it, not wanting to disappoint him. After a few thrusts, Niko pauses and gives you a confident wink while pointing down to his dick.');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'arousal', 'bj', (-5), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker2.mp4');
    // TODO-QSP: dynamic text: You immediately understand what he wants and start sucking his dick, trying your...
    scene.text(`You immediately understand what he wants and start sucking his dick, trying your best to please him as he looks down at you. "You're doing great ${((st as any).pcs_nickname || '')}, keep it up."`);
    scene.text('His approval gives you a warm feeling in your heart.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow3.mp4');
    scene.text('Niko starts lightly moaning before grabbing your hair and pushing his cock down your throat, filling it with his warm cum. You enjoy the feeling of his dick pumping his cum down your throat.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker3.mp4');
    scene.text('Once he\'s fully spent, he puts his pants back on before kneeling to attach the leash to your collar, which he then ties to the nearby pipe. He gives you an approving pat on the head before leaving the locker room.');
    scene.actions([
      { label: 'Try to remove cuffs', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.img(`${qspUntranslated(s, "FUNC('face_image')", { location: "NikoWhore" })}`);
    scene.text('You squirm for a few seconds, attempting to free yourself from the cuffs until you hear the locker room door open and quickly look up in excitement.');
    scene.actions([
      { label: '???', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You\'re shocked and disappointed when you see Dan standing in front of you with a wolfish grin on his face. "Well well, I never thought that you were into this kind of stuff," he grins as he starts pinching your nipples, making you squeal.');
    scene.text('"Dan, stop! What are you doing here?"');
    scene.text('He grins even wider. "Ever since I saw Niko walking you around, I\'ve been keeping an eye on you and saw you doing some pretty naughty things. I like naughty things." He then lifts you to your feet.');
    scene.actions([
      { label: 'Let go of me!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker4.jpg');
    scene.text('"Let go of me or I\'ll scream!" you exclaim, but Dan\'s grin just grows wider.');
    scene.text('"Who would hear you, you dumb bitch? Everyone\'s in the cafeteria and even if someone did hear you, would you want them to see you chained up naked like a dog? Maybe I should just walk you into the cafeteria where you can scream all you want?"');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker5.mp4');
    scene.text('You lower your head in submission and Dan quickly turns you around and unbuttons his pants before sliding his dick into your ass, causing a sharp pain to shoot through you. Dan wastes no time and starts fucking your ass, gradually picking up the pace. He continues fucking your ass when his phone starts ringing.');
    // TODO-QSP: dynamic text: He doesn''t stop fucking you as he answers his phone. "I can''t right now. I''m ...
    scene.text(`He doesn't stop fucking you as he answers his phone. "I can't right now. I'm too busy fucking ${((st as any).pcs_nickname || '')}'s ass." Your eyes widen as Dan continues. "Yeah, I'm in the locker room. Sure, you can come."`);
    (st as any).orgasm_txt = '';
    qspCall(st, 'arousal', 'anal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Who was that?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/locker6.mp4');
    scene.text('Dan hangs up. "That was Vitek. Don\'t worry about it."');
    scene.text('He starts fucking you harder as you try to speak. "Why… mmmmm… Why\'d you… mmmm… tell him abo…"');
    scene.text('Dan wraps his hand around your neck, bringing your head to his face. "He\'s my friend and I believe in sharing. Don\'t you?"');
    scene.text('You suddenly hear the locker room door open and turn to see who it is.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'arousal', 'anal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn to see', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'boyStat', 'A10');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    if (((st as any).kotovLoveQW ?? 0) > 0) {
      (st as any).kotovLoveQW = (-1);
      // TODO-QSP: dynamic text: Vitek and Vasily enter the room and Vitek starts shouting. "What the fuck do you...
      scene.text(`Vitek and Vasily enter the room and Vitek starts shouting. "What the fuck do you think you're doing? ${((st as any).pcs_firstname || '')} is mine!" Dan suddenly rams his dick deep into your ass, causing you to scream as he fills your ass with his cum. Vitek suddenly wraps his hand around Dan's throat. "Answer my fucking question! What are you doing fucking my girl?"`);
      // TODO-QSP: dynamic text: Dan chokes on his words as he tries to explain. "<<$pcs_firstname>> is a… whore ...
      scene.text(`Dan chokes on his words as he tries to explain. "${((st as any).pcs_firstname || '')} is a… whore and I can… grr… prove it. Check this out…" Dan reaches into his pocket, pulls out his phone and taps the screen a few times. He holds his phone up so Vitek can see. A video plays where you hear sucking sounds, followed by a groan. You then hear yourself…`);
      scene.text('"I love you Nikolai! I love you with all my heart!" You realize that Dan must have recorded you sucking Niko\'s dick in the hallway after school. Vitek watches the video for a few more seconds before releasing Dan\'s throat and turning to you, his face seething with rage. "You fucking worthless whore!" He then lifts his hand and smacks you hard, knocking you to the ground before kicking a nearby garbage can in rage before Dan places his hand on his shoulder.');
      scene.text('"It\'s alright Vitek, you don\'t need her. You never did." Vitek takes a few seconds to calm himself before brushing Dan\'s hand off his shoulder as he unbuttons his pants. He walks up to you and pushes his dick against your lips.');
      scene.text('"What are you waiting for, whore? Start sucking." You meekly nod before wrapping your lips around his dick.');
    } else {
      scene.text('Vitek and Vasily enter the room and quickly start whistling at you. "I thought Dan was fucking with me when he told me about this," Vitek says as Dan suddenly rams his dick deep into your ass, causing you to scream as he fills your ass with his cum. You take a second to catch your breath and look up to see Vitek\'s dick in your face. "What are you waiting for, slut? Start sucking."');
      scene.text('"Please don\'t. I need to get back to…" you plead, but Vitek wraps his hand around your throat.');
      scene.text('"That can wait, now get sucking." Dan pulls out of you, causing a moan to escape your mouth. Vitek immediately takes advantage of this and shoves his dick into your mouth.');
    }
    (st as any).orgasm_txt = '';
    qspCall(st, 'cum_call', 'anus', 'A10', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'arousal', 'bj', (-5), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck Vitek\'s dick', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A9');
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    if (((st as any).kotovLoveQW ?? 0) === -1) {
      scene.text('You start obediently sucking Vitek\'s dick, knowing better than to anger him further. Vasily has his dick out too and pokes your cheek with it, so you quickly pull away from Vitek\'s dick and suck on Vasily\'s. You spend the next few minutes alternating between their cocks while Vitek roughly squeezes your breasts.');
    } else {
      scene.text('You start obediently sucking Vitek\'s dick, knowing better than to anger him. Vasily has his dick out too and pokes your cheek with it, so you quickly pull away from Vitek\'s dick and suck on Vasily\'s. You spend the next few minutes alternating between their cocks while Vitek squeezes your breasts.');
    }
    qspCall(st, 'arousal', 'bj', (-5), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/swallow9.mp4');
    if (((st as any).kotovLoveQW ?? 0) === -1) {
      scene.text('Vitek grabs your hair, forcing his dick down your throat as he fills your mouth with his cum. You swallow as much as you can before Vasily pulls your head up to his dick and cums on your face. You take a few seconds to catch your breath as you listen to them talk.');
      scene.text('"I told you she was a freak! She loves getting fucked. She was basically begging me to fuck her ass!" Dan laughs.');
      // TODO-QSP: dynamic text: "Come on guys, we already have Sonia. We don''t need <<$pcs_nickname>> too," Vas...
      scene.text(`"Come on guys, we already have Sonia. We don't need ${((st as any).pcs_nickname || '')} too," Vasily responds.`);
      scene.text('"She might be Sonia 2.0! It would be wrong for us <i>not</i> to show her off. Now is the perfect time too. I saw the teachers leaving the cafeteria while I was on my way here," Dan adds.');
      // TODO-QSP: dynamic text: "Sounds good to me. You hear that <<$pcs_nickname>>? You''re gonna get what a wh...
      scene.text(`"Sounds good to me. You hear that ${((st as any).pcs_nickname || '')}? You're gonna get what a whore like you deserves. Now get up! You're coming with us!" Vitek says while roughly pulling you to your feet.`);
    } else {
      scene.text('Vitek grabs your hair, forcing his dick down your throat as he fills you throat with his cum. You swallow as much as you can before Vasily pulls your head to his dick then begins cumming on your face, covering your face in his warm cum. You take a few seconds catching your breath as you listen to them talk.');
      scene.text('"I told you she was a freak! She loves getting fucked. She was basically begging me to fuck her ass!" Dan laughs.');
      // TODO-QSP: dynamic text: "Come on guys, we already have Sonia. We don''t need <<$pcs_nickname>> too," Vas...
      scene.text(`"Come on guys, we already have Sonia. We don't need ${((st as any).pcs_nickname || '')} too," Vasily responds.`);
      scene.text('"She might be Sonia 2.0! It would be wrong for us <i>not</i> to show her off. Now is the perfect time too. The boys are still on the stairwell," Dan adds.');
      if (((st as any).pcs_hotcat ?? 0) >= 7  &&  ((st as any).pcs_bmi ?? 0) <= 25) {
        // TODO-QSP: dynamic text: "That sounds like a great idea. <<$pcs_nickname>> is much hotter than Sonia anyw...
        scene.text(`"That sounds like a great idea. ${((st as any).pcs_nickname || '')} is much hotter than Sonia anyway. Let's do it," Vitek responds before pulling you to your feet. "You're coming with us."`);
      } else {
        scene.text('"That sounds like a great idea. She looks like an overgrown pig, but we can always fuck her from behind. Alright, let\'s do it," Vitek responds before pulling you to your feet. "You\'re coming with us."');
      }
    }
    qspCall(st, 'cum_call', 'mouth_swallow', 'A9', 1);
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'boyStat', 'A11');
    qspCall(st, 'cum_call', 'face', 'A11', 1);
    qspCall(st, 'arousal', 'bj', (-5), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Plead', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (2);
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/wos.jpg');
    scene.text('"Please don\'t! I\'ll do anything! Just let me go!" you plead before Vitek roughly pulls on your collar and starts walking you out of the locker room.');
    // TODO-QSP: dynamic text: "Don''t worry <<$pcs_nickname>>, you''ll get used to it. Imagine it, every boy i...
    scene.text(`"Don't worry ${((st as any).pcs_nickname || '')}, you'll get used to it. Imagine it, every boy in school will be giving you a lot of attention. You'll be <i>very</i> popular!" Dan laughs.`);
    // TODO-QSP: dynamic text: You look back at Vasily and he whispers in your ear. "I''m sorry <<$pcs_nickname...
    scene.text(`You look back at Vasily and he whispers in your ear. "I'm sorry ${((st as any).pcs_nickname || '')}, but I can't help you. It's too late." He follows closely behind in silence.`);
    scene.actions([
      { label: 'Continue walking', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('Your heart is pounding and tears stream down your eyes. You close your eyes, trying to wake up from this nightmare when you hear the sounds of chatting and laughter, informing you that you\'re passing the cafeteria.');
    if (((st as any).fedorKozlovQW ?? 0) > 1  ||  ((st as any).fedorKozlovQW ?? 0) < -10) {
      // TODO-QSP: dynamic text: You suddenly hear Fedor shouting. "What are you guys doing with <<$pcs_nickname>...
      scene.text(`You suddenly hear Fedor shouting. "What are you guys doing with ${((st as any).pcs_nickname || '')}?" Dan laughs as he replies. "Didn't ${((st as any).pcs_nickname || '')} tell you? She wants to join Sonia as our fuck puppet." Fedor looks at you with concerning eyes. "They're lying, aren't they?"`);
      if (((st as any).fedorKozlovQW ?? 0) < -10) {
        scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
      } else {
        scene.img('images/characters/shared/headshots_main/big5.jpg');
      }
    }
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    if (((st as any).fedorKozlovQW ?? 0) > 1  &&  ((st as any).FedorLove ?? 0) === 1  ||  ((st as any).fedorKozlovQW ?? 0) < -10) {
      scene.actions([
        { label: 'Run to Fedor', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/fedor.jpg');
    // TODO-QSP: dynamic text: You run to Fedor and jump into his arms as he stares into your eyes. "Don''t wor...
    scene.text(`You run to Fedor and jump into his arms as he stares into your eyes. "Don't worry ${((st as any).pcs_nickname || '')}. I'll keep you safe."`);
    scene.text('"Hey, she\'s ours now! Give her back!" Vitek shouts, but Fedor stands his ground.');
    scene.text('"No, she\'s mine!"');
    scene.text('Vitek walks up to him. "What did you say, punk?"');
    // TODO-QSP: dynamic text: Dan approaches them. "Hey, I''m sure that Fedor is just misunderstanding what''s...
    scene.text(`Dan approaches them. "Hey, I'm sure that Fedor is just misunderstanding what's going on. Let me explain. ${((st as any).pcs_nickname || '')} has been a very naughty girl, fucking other students."`);
    // TODO-QSP: dynamic text: Fedor is taken aback. "Bullshit! I know <<$pcs_nickname>> and she''s better than...
    scene.text(`Fedor is taken aback. "Bullshit! I know ${((st as any).pcs_nickname || '')} and she's better than that."`);
    scene.text('Dan snorts. "Oh really? Watch this and decide for yourself."');
    // TODO-QSP: dynamic text: He shows Fedor the video of you sucking off Niko and confessing your love to him...
    scene.text(`He shows Fedor the video of you sucking off Niko and confessing your love to him. Fedor's face grows pale. "Why ${((st as any).pcs_nickname || '')}?… Why?"`);
    scene.text('You lower your head. "I…" You can\'t collect your words as Fedor clenches his fist.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, promise me right here and now, that you will never see Niko ...
    scene.text(`"${((st as any).pcs_nickname || '')}, promise me right here and now, that you will never see Niko ever again!"`);
    scene.actions([
      { label: 'I promise [<font color=#c600ff>Break up with Niko</font>]', handler: (st: GameState) => {
    (st as any).NikoBreakup = 1;
    (st as any).NikoEv = (-1);
    (st as any).NikoLuv = (-8);
    (st as any).NikoVolkovQW = (-1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    if (((st as any).fedorKozlovQW ?? 0) < -10) {
      scene.img('images/characters/shared/headshots_main/big9.jpg');
      scene.text('Fedor leans over and whispers in your ear. "Run."');
      scene.text('You quickly take off as Fedor tosses a nearby trash can at Vitek. Vitek blocks it as Fedor charges him and tackles him to the ground. You continue running as Vitek and Dan beat up Fedor. You look back to see Dan climb off Fedor and start running at you before Vasily pretends to trip and falls on Dan, causing them both to fall to the ground long enough for you to make you way to the locker room where you find the bag with your clothes in it.');
      scene.text('You spent a minute getting dressed before walking to the hallway just outside your classroom.');
    } else {
      scene.img('images/characters/pavlovsk/school/boy/ivan/School/jocks.jpg');
      // TODO-QSP: dynamic text: Fedor suddenly pulls you behind him. "<<$pcs_nickname>> is not going with you an...
      scene.text(`Fedor suddenly pulls you behind him. "${((st as any).pcs_nickname || '')} is not going with you and that's final!"`);
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
    if (((st as any).fedorKozlovQW ?? 0) > 1) {
      (st as any).fedorKozlovQW = (-1);
    }
    if (((st as any).fedorKozlovQW ?? 0) < -10) {
      (st as any).fedorKozlovQW = (-10);
      (st as any).FedorOutcast = (-1);
    }
    qspCall(st, 'npc_relationship', 'set', 'A5', 25);
    (st as any).FedorLove = 0;
    (st as any).FedorHome = (-1);
    (st as any).FedorShelter = (-1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
    scene.text('You lower you head in silence and Fedor sighs. "I guess that you care more for him than me… Fine. Have fun with your new boyfriend. I don\'t care anymore." He walks away without saying another word.');
    scene.actions([
      { label: 'Run to Fedor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/wos.jpg');
    scene.text('Vitek grabs you by the hair. "You\'ve wasted enough of our time. Let\'s get moving."');
    // TODO-QSP: dynamic text: "It''s time to show you off <<$pcs_nickname>>. Aren''t you excited?" Dan asks as...
    scene.text(`"It's time to show you off ${((st as any).pcs_nickname || '')}. Aren't you excited?" Dan asks as they walk you towards the stairwell.`);
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
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
      if (((st as any).fedorKozlovQW ?? 0) > 1  &&  (!((st as any).FedorLove ?? 0))) {
        scene.actions([
          { label: 'Run to Fedor', handler: (st: GameState) => {
    (st as any).fedorKozlovQW = (-1);
    (st as any).FedorHome = (-1);
    (st as any).FedorShelter = (-1);
    qspCall(st, 'npc_relationship', 'set', 'A5', 25);
    qspCall(st, 'arousal', 'flash', 5, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/fedor.jpg');
    // TODO-QSP: dynamic text: You run to Fedor and jump into his arms as he stares into your eyes. "Don''t wor...
    scene.text(`You run to Fedor and jump into his arms as he stares into your eyes. "Don't worry ${((st as any).pcs_nickname || '')}. I'll keep you safe."`);
    scene.text('"Hey, she\'s ours now! Give her back!" Vitek shouts, but Fedor stands his ground.');
    scene.text('"No, she\'s mine!"');
    scene.text('Vitek walks up to him. "What did you say, punk?"');
    // TODO-QSP: dynamic text: Dan approaches them. "Hey, I''m sure that Fedor is just misunderstanding what''s...
    scene.text(`Dan approaches them. "Hey, I'm sure that Fedor is just misunderstanding what's going on. Let me explain. ${((st as any).pcs_nickname || '')} has been a very naughty girl, fucking other students."`);
    // TODO-QSP: dynamic text: Fedor is taken aback. "Bullshit! I know <<$pcs_nickname>> and she''s better than...
    scene.text(`Fedor is taken aback. "Bullshit! I know ${((st as any).pcs_nickname || '')} and she's better than that."`);
    scene.text('Dan snorts. "Oh really? Watch this and decide for yourself."');
    scene.actions([
      { label: 'See what happens', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
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
        ]);
      } else {
        scene.actions([
          { label: 'Enter the stairwell', goto: ['NikoWhore', 'Exposed'] },
        ]);
      }
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
  ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A189'] = 600;
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (10);
  qspCall(s, 'arousal', 'flash', 5, 'sub', 'humiliation', 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/wos.jpg');
  scene.text('You close your eyes as you\'re led down the hallway. You can hear other students talking about you.');
  scene.text('"What the fuck was she thinking? Why would she do this to herself? Is she that desperate for dick?" Lariska asks.');
  scene.text('"I always thought she was a nice girl, but I guess she was just a whore all along. She hid it well," Lina responds.');
  scene.text('Christina laughs. "You\'re both so stupid! I knew she was a fucking whore all along, you just have to look at how she acts. So weak and pathetic and eager to please any boy that paid any attention to her." You hear several of the other girls agree with her.');
  if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).pcs_bmi ?? 0) <= 25) {
    // TODO-QSP: dynamic text: "Fuck yeah! I''ve been wanting to fuck <<$pcs_nickname>> since I first saw her d...
    scene.text(`"Fuck yeah! I've been wanting to fuck ${((s as any).pcs_nickname || '')} since I first saw her drop that chalk in math class!" Roman laughs.`);
  } else {
    // TODO-QSP: dynamic text: "I always thought about what it would be like to fuck <<$pcs_firstname>> since I...
    scene.text(`"I always thought about what it would be like to fuck ${((s as any).pcs_firstname || '')} since I first saw her drop that chalk in math class. If only she wasn't so ugly…" Roman laughs.`);
  }
  scene.text('"So another girl turning into a slut…" Lizaveta says as she shakes her head. "Why do so many girls have no self respect? The boys are gonna love this." She takes out her phone and starts recording you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue toward the stairwell', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (5);
    qspCall(st, 'boyStat', 'A154');
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    if (((st as any).npc_grupTipe ?? 0)?.['A25'] === 5) {
      // TODO-QSP: dynamic text: You reach the stairwell, where Vitek pushes you forward. "Hey boys! Look who''s ...
      scene.text(`You reach the stairwell, where Vitek pushes you forward. "Hey boys! Look who's decided to join Sonia as the school whore! ${((st as any).pcs_firstname || '')} ${((st as any).pcs_lastname || '')}!" he shouts out and the gopniks get noticeably excited as they start talking to each other.`);
      if (((st as any).pcs_hotcat ?? 0) > 6) {
        // TODO-QSP: dynamic text: "So <<$pcs_nickname>> decided to join the party? She looks good enough. Ever bee...
        scene.text(`"So ${((st as any).pcs_nickname || '')} decided to join the party? She looks good enough. Ever been with a real man before?" Radomir asks with a grin.`);
        scene.text('"She\'s better looking than Sonia, I\'ll give her that," Valentin adds.');
      } else {
        // TODO-QSP: dynamic text: "So <<$pcs_nickname>> decided to join the party? She''s always looked so trashy ...
        scene.text(`"So ${((st as any).pcs_nickname || '')} decided to join the party? She's always looked so trashy though. Like one of those trailer park girls," Radomir says insultingly.`);
        scene.text('"Yeah, I\'ve seen better looking bitches in the chess club," Valentin adds.');
      }
    } else {
      // TODO-QSP: dynamic text: You reach the stairwell, where Vitek pushes you forward. "Hey boys! Look who''s ...
      scene.text(`You reach the stairwell, where Vitek pushes you forward. "Hey boys! Look who's decided to become the school whore! ${((st as any).pcs_firstname || '')} ${((st as any).pcs_lastname || '')}!" he shouts out and the gopniks get noticeably excited as they start talking to each other.`);
      if (((st as any).pcs_hotcat ?? 0) >= 6) {
        // TODO-QSP: dynamic text: "So <<$pcs_nickname>> decided to join the party? She looks good enough. Ever bee...
        scene.text(`"So ${((st as any).pcs_nickname || '')} decided to join the party? She looks good enough. Ever been with a real man before?" Radomir asks with a grin.`);
      } else {
        // TODO-QSP: dynamic text: "So <<$pcs_nickname>> decided to join the party? She''s so fucking ugly I imagin...
        scene.text(`"So ${((st as any).pcs_nickname || '')} decided to join the party? She's so fucking ugly I imagine the only way she can get any attention is to give it away to anyone willing to have a go," Radomir says insultingly.`);
        scene.text('"Yeah, I\'ve seen better looking bitches skulking around in the city alleyways," Valentin adds.');
      }
    }
    scene.text('"Enough gawking. I\'m gonna fuck this bitch!" Arkadi says while approaching you.');
    scene.text('"Now that\'s what I like to hear," Roman adds.');
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big145.jpg');
    scene.text('The boys immediately take on aggressive postures, wolfish grins on their faces, when Katyusha suddenly speaks loudly enough to be heard over everyone. "You guys have to drag this fucking skank here? I\'m trying to eat my lunch!"');
    scene.text('You have a moment of hope that someone might save you, but when your eyes meet her\'s, she gives you a look of utter disgust and your heart sinks.');
    scene.text('Dan smirks and turns towards Katyusha. "Hey, if you don\'t like it, you can always eat somewhere else."');
    scene.actions([
      { label: 'See what happens next', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('Katyusha stands up and roughly shoves Dan. "Watch it or I\'ll make you eat something of your own."');
    // TODO-QSP: dynamic text: Dan puts his hands up and she walks up the stairs, seemingly to eat in peace. He...
    scene.text(`Dan puts his hands up and she walks up the stairs, seemingly to eat in peace. He snickers once she walks away as Pauline pulls out her phone and starts recording you. "Don't worry ${((st as any).pcs_nickname || '')}, we'll make you a star… Now smile for the camera!" she says in a patronizing tone.`);
    scene.actions([
      { label: 'Lower your head', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 3, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/Lena.jpg');
    scene.text('You lower your head in embarrassment. You don\'t want to be recorded, but you\'re not in any position to stop her. Lena quickly approaches and grabs you by the hair before holding your face up to the camera. "She said smile bitch! Do you have cum in your ears?"');
    scene.text('"Maybe she\'s just shy?" Lera sarcastically adds and Lena laughs.');
    scene.text('"Shy? Does she look shy to you?" Lena runs her hand up your thigh to your pussy before pinching your clitoris. You can see the boys are getting very excited.');
    scene.actions([
      { label: 'See what Lena does', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/exposed1.jpg');
    // TODO-QSP: dynamic text: "Alright, let''s not keep everyone waiting. If <<$pcs_nickname>> wants some dick...
    scene.text(`"Alright, let's not keep everyone waiting. If ${((st as any).pcs_nickname || '')} wants some dick, then let's get her some dick," she says before pushing you over to the boys, who quickly start fondling your body. You can feel yourself trembling as some of the boys run their hands across your body and Dan spanks your ass.`);
    scene.text('"Alright, who wants to fuck this slut?" he asks and your jaw opens in shock and your entire body trembles. Everything you had; your friends, your dignity and your reputation are now gone.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    if (((st as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('Anushka gets up and walks down the stairs. "Okay, that\'s enough! Show\'s over, get lost!"');
      // TODO-QSP: dynamic text: Roman steps up to her. "Fuck you bitch! Why do you care? Are you jealous of <<$p...
      scene.text(`Roman steps up to her. "Fuck you bitch! Why do you care? Are you jealous of ${((st as any).pcs_nickname || '')}? Wish that you were in her place? I always knew you were a slut!"`);
      scene.text('Anushka slaps him across the face, causing him to recoil back before immediately winding his hand back to slap her, but Valentin quickly grabs Roman by the wrist, stopping him while Arkadi speaks up.');
      scene.text('"Come on, back off man. There\'s no need for that."');
      scene.text('"Watch it. You\'re talking about our girl there," Radomir adds in a stern tone.');
      scene.text('Roman shoves Valentin, but doesn\'t break Valentin\'s hold on his wrist. "The bitch slapped me! I\'m going to fuck her up!"');
      scene.text('Things start to get tense before Valentin releases Roman. "If you ever lay a hand on her, then I will fuck you up. If I somehow can\'t, you know what her dad would do to you…" he says in a low tone full of menace.');
      scene.text('The mention of Anushka\'s father causes Roman to stiffen before he turns to Anushka. "That\'s your one free pass bitch! Hit me again and I\'ll drag your face through the dirt!"');
      scene.text('As he finally backs down, which you\'ve never seen him do before, Valentin turns to Roman again. "Back off!" Arkadi pulls Roman away while Roman gives Valentin a cold glare.');
    } else {
      if (((st as any).npc_rel ?? 0)?.['A144'] >= 50) {
        scene.text('Anushka gets up and comes down the stairs. "I tried to warn you about Niko, now look at what he\'s done to you."');
        scene.text('You look down, unable to meet her gaze. "But I love him…"');
        scene.text('You hear her sigh and Alyona speaks up. "Have some fucking backbone and self respect!"');
        scene.text('"He doesn\'t love you! If he did, then he wouldn\'t let this happen. Come with us."');
        scene.text('Roman steps between you and them. "This slut isn\'t going anywhere. You\'d best leave before you end up joining her."');
        qspCall(st, 'willpower', 'sex', 'resist', 'hard');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Go with them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go with them', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('Alyona pulls out a switch blade as a response to the threat. "Try it and I\'ll cut your dick off, asshole!"');
    scene.text('"Do you even know how to use that thing, little girl?" Romans responds in a menacing tone as Valentin quickly grabs the girls and pulls them away as Arkadi pulls Roman back, clearly trying to calm him down. You realize that if you don\'t act now, then you won\'t be able to, so you burst into tears and rush over to them.');
    scene.text('Dan grabs the leash attached to your collar and jerks you back. "Where the fuck do you think you\'re going?"');
    scene.text('"Let her go now!" Anushka exclaims, but Dan snorts and yanks on the leash again.');
    scene.text('"Make me bitch!" he says mockingly as Valentin steps up and gets in his face.');
    scene.text('"Back off," he warns as Anushka uses the time to take the collar off your neck. When the rest notice, Roman steps forward, but Valentin steps in his way.');
    scene.actions([
      { label: 'See what happens next', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
        scene.actions([
          { label: 'Do nothing', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
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
        ]);
      } else {
        if (((st as any).npc_rel ?? 0)?.['A144'] <= 20) {
          scene.text('You can see Anushka and Alyona watching. "This is like watching a really bad porno, but it still turns me on," Anushka comments and Dan turns towards them.');
          scene.text('"Just speak up, we can give you a turn too," he says with a laugh as Alyona and Anushka both flip him off.');
          scene.text('"As if… I like to fuck, but I\'m not going to be some slut who lets everyone fuck her whenever and where ever." Anushka says while glancing at you with a look of disgust on her face before looking back at Dan. "If I ever wanted to fuck you, it would be on <i>my</i> terms."');
        } else {
          scene.text('You can see Anushka and Alyona watching. "This is like watching a really bad porno. You know, the ones where the girl is a total slut and just lets everyone gangbang her because she delivered a pizza or some stupid shit like that," Anushka comments.');
          scene.text('Dan turns towards them. "Maybe we can make a good porno? Just come down here and we\'ll make you a star!" he says with a laugh as Alyona and Anushka both flip him off.');
          scene.text('"As if… I like to fuck, but I\'m not going to be some slut who lets everyone fuck her whenever and where ever. If I ever wanted to fuck you, it would be on <i>my</i> terms," Anushka says with a laugh.');
        }
      }
    }
    scene.actions([
      { label: 'See what happens next', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    if (((st as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('Anushka holds out her hand to you. "Come on, let\'s get out of here!"');
      // TODO-QSP: dynamic text: Dan walks in front of her. "Leave it, Nush. <<$pcs_nickname>> likes it. She want...
      scene.text(`Dan walks in front of her. "Leave it, Nush. ${((st as any).pcs_nickname || '')} likes it. She wants to stay." He turns towards you. "Don't you, slut?"`);
      qspCall(st, 'willpower', 'sex', 'resist', 'hard');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go with them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go with them', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    // TODO-QSP: dynamic text: You stare at Anushka, too terrified to speak. "<<$pcs_nickname>>! Say something!...
    scene.text(`You stare at Anushka, too terrified to speak. "${((st as any).pcs_nickname || '')}! Say something!"`);
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
    qspCall(st, 'stat', '');
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
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    // TODO-QSP: dynamic text: You stare at Anushka, too terrified to speak. "<<$pcs_nickname>>! Say something!...
    scene.text(`You stare at Anushka, too terrified to speak. "${((st as any).pcs_nickname || '')}! Say something!"`);
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
      if (((st as any).npc_rel ?? 0)?.['A144'] <= 20) {
        scene.text('Dan takes a step closer to them. "Yeah? I\'m cool with that, just let me know. We can do that now if you want."');
        scene.text('Anushka and Alyona look at him, then at each other and back to him before laughing. "You wish. Go back to your pathetic slut, weak ass bitches like her is the only pussy you can get."');
        scene.text('Dan gets slightly embarrassed and angry. "Fuck you, bitches!"');
        scene.text('"Never going to happen." They get up and walk away together laughing while an annoyed Dan turns back to you.');
        scene.actions([
          { label: 'Watch them leave', goto: ['NikoWhore', 'no_escape'] },
        ]);
      } else {
        scene.text('Dan takes a step closer to them. "Yeah? I\'m cool with that, just let me know. We can do that now if you want."');
        scene.text('Anushka and Alyona look at him, then at each other and back to him before laughing. "As if." They get up and walk away together laughing while an annoyed Dan turns back to you.');
        scene.actions([
          { label: 'Watch them leave', goto: ['NikoWhore', 'no_escape'] },
        ]);
      }
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
  scene.build();
}

function enterNoEscape(s: GameState, scene: SceneBuilder): void {
  ((s as any).VKGroup = (s as any).VKGroup ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "NikoWhore" });
  ((s as any).VKGroup = (s as any).VKGroup ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "NikoWhore" });
  ((s as any).VKGroup = (s as any).VKGroup ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "NikoWhore" });
  ((s as any).VKGroup = (s as any).VKGroup ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "NikoWhore" });
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 0;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 0;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 0;
  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 0;
  ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[1] = 0;
  ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[2] = 0;
  ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[3] = 0;
  ((s as any).old_grupvalue = (s as any).old_grupvalue ?? {})[4] = 0;
  if (((s as any).grupTipe ?? 0) === 1) {
    (s as any).VKGroup = 1;
    (s as any).grupTipe = 5;
  }
  if (((s as any).grupTipe ?? 0) === 2) {
    (s as any).VKGroup = 2;
    (s as any).grupTipe = 5;
  }
  if (((s as any).grupTipe ?? 0) === 3) {
    (s as any).VKGroup = 3;
    (s as any).grupTipe = 5;
  }
  if (((s as any).grupTipe ?? 0) === 4) {
    (s as any).VKGroup = 4;
    (s as any).grupTipe = 5;
  }
  if (((s as any).grupTipe ?? 0) === 6) {
    (s as any).VKGroup = 6;
    (s as any).grupTipe = 5;
  }
  qspCall(s, 'fame', 'pav', 'sex', 100);
  qspCall(s, 'fame', 'pav', 'sex', 100);
  qspCall(s, 'fame', 'pav', 'sex', 100);
  qspCall(s, 'fame', 'pav', 'sex', 100);
  qspCall(s, 'fame', 'pav', 'sex', 100);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/exposed2.jpg');
    scene.text('Once Anushka and Alyona leave, Radomir steps up to you and starts fingering your pussy. "I want to fuck her first."');
    scene.text('Dan laughs. "You mean second, right?" He turns you around and spreads your ass cheeks, causing his cum to leak out of your ass.');
    scene.text('Radomir laughs. "Shit, she really is a filthy whore! I\'m still fucking her though." He grabs you by the hair and unbuttons his pants before lying down and pulling you on top of him.');
    (s as any).orgasm_txt = '';
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride his cock', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (5);
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/lock1.mp4');
    scene.text('You feel your pussy stretching as your weight pushes his cock completely inside you. Knowing that it\'s too late to go back, you start riding Radomir. You can hear the boys cheering as they enjoy the show. Pauline continues recording you and you can see the malicious smirks on the other girls\' faces.');
    (st as any).orgasm_txt = '';
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'feet', 'A158', 1);
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum7.mp4');
    scene.text('Radomir pulls out of you and starts cumming on your feet as you milk him. You use the comfort of his warm cum to distract you from your racing thoughts.');
    (st as any).orgasm_txt = '';
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/stair1.mp4');
    // TODO-QSP: dynamic text: Radomir crawls out from under you and the other boys quickly approach you with t...
    scene.text(`Radomir crawls out from under you and the other boys quickly approach you with their dicks in their hands. You obediently start sucking them one by one as you hear Lena sarcastically ask "Is that enough dick for you, ${((st as any).pcs_nickname || '')}? Or do you need more?"`);
    scene.text('You try to ignore her as you continue sucking dick, doing your best not to leave anyone out. After a few seconds, Roman leans down to look you in the eyes. "You ready to ride my dick, bitch?"');
    scene.actions([
      { label: 'Meekly nod', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'massage', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/stair2.mp4');
    scene.text('You meekly nod and Roman grabs you by the hair before dragging you in front of the stairs as he sits down and pulls you on top of his dick. You moan loudly as you feel his dick forcefully thrusting into your pussy. You hold still for a few seconds before Roman shouts out. "Hurry up slut! Ride my dick!"');
    scene.text('You quickly nod before thrusting on top of his dick as the other boys grab and fondle your breasts and Lera hollers "Oh boy, look at her go!"');
    scene.text('"I wonder how many she can fit in there?" Lena adds.');
    scene.text('"I\'m sure we\'ll soon find out," Pauline laughs.');
    scene.text('The girls laugh before you suddenly hear someone shouting. "Eww, what the fuck is this!?"');
    (st as any).orgasm_txt = '';
    scene.actions([
      { label: 'Turn to see who it was', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big22.jpg');
    scene.text('Bella, who seems to have just walked down the stairs, continues shouting at the boys. "I don\'t want to see this disgusting shit! Why can\'t you fucking perverts do this somewhere else?"');
    scene.text('She tries making her way past everyone without letting anyone touch her as Dan speaks up. "You heard her. Let\'s take this bitch back to the locker room. Everyone who wants to join can tag along."');
    scene.text('He and Roman grab your arms and start leading you towards the locker room as many of the boys and a few girls follow along.');
    scene.actions([
      { label: 'Locker room', goto: ['NikoWhore', 'Locker Room 2'] },
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
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/stair1.mp4');
    scene.text('Once Anushka and Alyona leave, Radomir stands up. "You guys have fun, but I\'m out of here."');
    scene.text('Dan looks at him. "What? You passing up free pussy?"');
    scene.text('Radomir laughs. "I\'ve got standards man. I only fuck prime pussy, not some ugly slut like this." He shakes his head. "If I look at her much longer, I think I\'m going to lose my lunch." Several of the others laugh as Radomir walks off and Roman forces you to your knees.');
    // TODO-QSP: dynamic text: The other boys quickly approach you with their dicks in their hands and you obed...
    scene.text(`The other boys quickly approach you with their dicks in their hands and you obediently start sucking them one by one as you hear Lena sarcastically ask "Is that enough dick for you, ${((s as any).pcs_nickname || '')}? Or do you need more?"`);
    scene.text('You try to ignore her as you continue sucking dick, doing your best not to leave anyone out. After a few more seconds, Roman leans down to look you in the eyes. "You ready to ride my dick, bitch?"');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Meekly nod', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'massage', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/stair2.mp4');
    scene.text('You meekly nod and Roman grabs you by the hair before dragging you in front of the stairs as he sits down and pulls you on top of his dick. You moan loudly as you feel his dick forcefully thrusting into your pussy. You hold still for few seconds before Roman shouts out. "Hurry up slut! Ride my dick!"');
    scene.text('You quickly nod before thrusting on top of his dick as the other boys grab and fondle your breasts and Lera hollers "Oh boy, look at her go!"');
    scene.text('"I wonder how many she can fit in there?" Lena adds.');
    scene.text('"I\'m sure we\'ll soon find out," Pauline laughs.');
    scene.text('The girls laugh before you suddenly hear someone shouting. "Eww, what the fuck is this!?"');
    (st as any).orgasm_txt = '';
    scene.actions([
      { label: 'Turn to see who it was', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'arousal', 'flash', 2, 'sub', 'humiliation', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big22.jpg');
    scene.text('Bella, who seems to have just walked down the stairs, continues shouting at the boys. "I don\'t want to see this disgusting shit! Why can\'t you fucking perverts do this somewhere else?"');
    scene.text('She tries making her way past everyone without letting anyone touch her and Dan speaks up. "You heard her. Let\'s take this bitch back to the locker room. Everyone who wants to join can tag along."');
    scene.text('He and Roman grab your arms and start leading you toward the locker room as many of the boys and a few girls follow along.');
    scene.actions([
      { label: 'Locker room', goto: ['NikoWhore', 'Locker Room 2'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLockerRoom2(s: GameState, scene: SceneBuilder): void {
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/lock2.mp4');
  // TODO-QSP: dynamic text: As soon as you reach the locker room, Dan shoves you into the crowd. Roman catch...
  scene.text(`As soon as you reach the locker room, Dan shoves you into the crowd. Roman catches you and turns you around. You feel his dick entering your pussy and his pace begins increasing as he holds onto your waist, pushing you against his crotch. Roman leans forward and whispers in your ear. "How does my dick feel ${((s as any).pcs_nickname || '')}? Isn't it the biggest dick you've ever had?"`);
  (s as any).orgasm_txt = '';
  // TODO-QSP: end
  scene.actions([
    { label: 'Nod', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    scene.img('images/shared/sex/cum/cum5.mp4');
    // TODO-QSP: dynamic text: You meekly nod, not wanting to upset him. After a few more seconds, Roman pulls ...
    scene.text(`You meekly nod, not wanting to upset him. After a few more seconds, Roman pulls out of you and groans as he covers your back in his cum. He finishes by giving your ass a firm smack. "Damn ${((st as any).pcs_nickname || '')}, you have a tight pussy. We have to do this again sometime."`);
    scene.text('"Don\'t hog her to yourself!" Arkadi suddenly shouts out and Roman laughs as he pulls up his pants and pushes you toward the other boys, causing you to fall on your knees in front of them.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'cum_call', 'back', 'A157', 1);
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck their dicks', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/lock3.mp4');
    scene.text('You wrap your lips around the first dick you see and use your hands to jerk off the others. Valentin brushes your hair out of your face. "That\'s a good girl. Just like that." You look up and he gives you an approving smile. You can hear some of the other gopniks talking about you.');
    // TODO-QSP: dynamic text: "I never thought that <<$pcs_nickname>> would end up being a whore. Did you?" Ar...
    scene.text(`"I never thought that ${((st as any).pcs_nickname || '')} would end up being a whore. Did you?" Arkadi asks.`);
    scene.text('"Well all girls are sluts. Some are just better at hiding it," Radomir responds.');
    // TODO-QSP: dynamic text: "Come on guys, let''s not talk about <<$pcs_nickname>> like she isn''t here," La...
    scene.text(`"Come on guys, let's not talk about ${((st as any).pcs_nickname || '')} like she isn't here," Lavrenti adds.`);
    scene.text('"Are you her boyfriend now? If you want to ask her out, she\'s right down there," Lena laughs.');
    scene.text('"You can give her a kiss, but you might want to use this to wipe off the cum first… Unless you\'re into that kind of thing," Lera adds and holds a tissue in front of him, which he swats away.');
    scene.text('"Shut it! That\'s not what I meant."');
    scene.actions([
      { label: 'Suck their dicks', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/building/sex/rand_scoolboy6.mp4');
    scene.text('Arkadi gently rubs your head while giving you a warm welcoming smile. You pull away from Valentin\'s dick and start sucking on his. You spend the next few minutes alternating between cocks.');
    qspCall(st, 'arousal', 'bj', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/lock4.mp4');
    scene.text('After a few seconds, Vitek lifts you up by the shoulders. "Enough warm up. Who\'s ready to fuck this bitch?"');
    scene.text('Dan waves his hand. "I could go for seconds." Vitek gives him an approving nod as he lowers you on top of Dan\'s cock. You let out a loud moan as his cock enters you. You start riding Dan, feeling him pushing deeper inside you before you look around and see a few of the nerds peeking in from the doorway. They\'re rubbing their crotches while looking around to make sure no one notices them. "Get ready for another facial, slut!" Dan suddenly shouts out.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take his load', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/facial5.mp4');
    // TODO-QSP: dynamic text: You quickly pull off Dan and drop to your knees as he covers your face in his cu...
    scene.text(`You quickly pull off Dan and drop to your knees as he covers your face in his cum. Once he's finished, he pulls his pants up and smiles. "You're a nasty little slut, aren't you ${((st as any).pcs_nickname || '')}?" He then casually walks toward the door, turning to Vasily on the way. "You just gonna stand there? Go on, help yourself."`);
    scene.text('Vasily lowers his head, obviously lost in thought before Lena approaches him. "Go on Shulga. What are you waiting for?"');
    // TODO-QSP: dynamic text: Lera stands right beside him. "Maybe he''s in love with our little whore? Is tha...
    scene.text(`Lera stands right beside him. "Maybe he's in love with our little whore? Is that true Shulga? Do you loooovvve ${((st as any).pcs_nickname || '')}? Do you want her to have your babies?"`);
    scene.text('Vasily shakes his head before responding. "No, of course not. I could never love a whore!" He then quickly approaches you.');
    qspCall(st, 'cum_call', 'face', 'A10', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let Vasily fuck you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/lock5.mp4');
    // TODO-QSP: dynamic text: Vasily spreads your legs and pushes his dick inside you, causing a wave of pleas...
    scene.text(`Vasily spreads your legs and pushes his dick inside you, causing a wave of pleasure to shoot through you. He stares you in the eyes with a very sad look on his face. "I wish things ended up differently ${((st as any).pcs_nickname || '')}, but there's no turning back now," he softly whispers before he starts fucking you, his frown disappearing as he starts getting into it.`);
    (st as any).orgasm_txt = '';
    qspCall(st, 'arousal', 'vaginal', 5, 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make Vasily cum', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cum110.mp4');
    // TODO-QSP: dynamic text: You continue staring into Vasily''s eyes as you hear him groan. He pulls out of ...
    scene.text(`You continue staring into Vasily's eyes as you hear him groan. He pulls out of you and shoots his cum over your chest as you instinctively stroke his cock. He takes a few seconds to catch his breath before whispering in your ear. "You're so beautiful ${((st as any).pcs_nickname || '')}. Too bad it had to come to this, but you'll get used to it."`);
    scene.text('He climbs off you and pulls his pants up, giving Vitek a high five before leaving the locker room. Vitek then lifts you up. "You better be ready bitch, because I\'m ready for seconds." He pushes you onto your knees and has you lube his dick before he shoves it into your ass.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'cum_call', 'breasts', 'A11', 1);
    qspCall(st, 'arousal', 'vaginal', (-5), 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog9.mp4');
    scene.text('Vitek fucks your ass slowly at first, but then picks up the pace. You let out high pitch squeals as you feel his cock pushing its way deeper inside you as he firmly grips your hair. You feel completely at his mercy as he continues to ram his cock into your sore asshole.');
    (st as any).orgasm_txt = '';
    scene.actions([
      { label: 'Close your eyes', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/analcreampie/cumanal2.mp4');
    scene.text('After a few more seconds, Vitek laughs at you. "This is what a whore like you deserves." You feel a sudden warmth fill your ass as he cums deep inside you before pulling out, causing his cum to drip out of your ass. "You better get used to this, bitch. This is your life now," he firmly states before he pulls up his pants and leaves the locker room.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'cum_call', 'anus', 'A9', 1);
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/lock6.mp4');
    // TODO-QSP: dynamic text: Valentin walks up to you. "I guess I''m up. Don''t worry <<$pcs_nickname>>, I''l...
    scene.text(`Valentin walks up to you. "I guess I'm up. Don't worry ${((st as any).pcs_nickname || '')}, I'll make this quick." He pushes his cock inside your pussy, causing a jolt of pain as your sore pussy is once again used. Valentin continuously rams his cock into your pussy, slamming the head of his dick against your g-spot. You don't have enough breath to moan, but with Valentin's rough thrusts, you can feel Vitek's cum leaking out of your ass as you hear Lera say "Damn, look at this dirty bitch leaking like an overfilled water balloon!"`);
    scene.text('The girls giggle as Valentin pulls out of you. "Open your mouth, slut!"');
    (st as any).orgasm_txt = '';
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum1,3.mp4');
    // TODO-QSP: dynamic text: You obediently open your mouth and Valentin grabs your head and holds it to his ...
    scene.text(`You obediently open your mouth and Valentin grabs your head and holds it to his dick before jerking off. He shoots his load onto your tongue; the taste is horrible, but you know that you have no choice. After Valentin finishes, he gently brushes your cheek. "That's how you do it, ${((st as any).pcs_nickname || '')}." He then zips up his pants and walks out of the locker room, leaving you on the floor.`);
    qspCall(st, 'cum_call', 'mouth_swallow', 'A158', 1);
    qspCall(st, 'arousal', 'bj', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Catch your breath', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big20.jpg');
    scene.text('You lay still, trying to catch your breath when Lena and Lera walk over to you. "Enjoy yourself? Well you better, because I\'m going to make sure that you remember your place," Lena says.');
    scene.text('"And I\'ll be sure that the whole school remembers that you\'re nothing more than a filthy whore!" Lera adds.');
    scene.text('"Don\'t worry girls, I\'ll make sure that no one forgets," Pauline says as she continues to record you. She even pushes your ass cheeks apart to record the cum leaking out of it.');
    // TODO-QSP: dynamic text: Lena looks at you for a few seconds. "Would you boys like to fuck <<$pcs_nicknam...
    scene.text(`Lena looks at you for a few seconds. "Would you boys like to fuck ${((st as any).pcs_nickname || '')} too?" She turns to the door where three underclass boys are peeking.`);
    qspCall(st, 'arousal', 'flash', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'See what happens next', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    // TODO-QSP: dynamic text: The boys have surprised looks on their faces. "If you''d like to fuck her, then ...
    scene.text(`The boys have surprised looks on their faces. "If you'd like to fuck her, then how about chipping in and paying… hmmm… ${qspFunc(s, 'money', 'string_profit', 1000)}?"`);
    scene.text('The boys start whispering at each other before nodding and pooling their money together to pay Lera. They then approach you as Lena and Lera stare at each other with a shocked look, obviously surprised that it worked.');
    qspCall(st, 'arousal', 'flash', 5, 'sub', 'exhibitionism', 'humiliation', 'gangbang', 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('Your energy sapped and your will broken, you lie in silence as the boys move closer. Tears begin streaming down your cheeks as you look up to see the three boys standing over you.');
    scene.actions([
      { label: 'See what they do', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/lock7.mp4');
    scene.text('One starts fondling your breasts as another spreads your legs, pulls out his dick and lines it up with your pussy. You groan as you feel his dick entering your sore pussy, lying in silence as he starts fucking you. Barely able to feel anything anymore, you look around the room and only see the three boys, Lena, Lera and Pauline. Pauline continues filming you as the others watch you get fucked. His pace increases as he gets more excited and you can hear his balls slapping against your ass.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang', 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'See what he does', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/cum/facial7.mp4');
    scene.text('He suddenly pulls out of you and his cum splatters over your stomach. Satisfied, he buttons his pants and gives you a light kiss on the cheek before leaving the room. You suddenly hear heavy breathing over you and look up to see another boy standing over you with his dick in his hand, stroking it over your face. He then suddenly groans as he cums over your face. Once he\'s finished, he storms out of the room as the last boy pushes his dick inside you.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'cum_call', 'stomach', 'A2', 1);
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang', 'prostitution');
    qspCall(st, 'cum_call', 'face', 'A159', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/lock8.mp4');
    scene.text('He starts fucking you, thrusting at an increased pace as he holds your legs open to give himself easier access. You have no fight left; your strength is gone, your entire body is numb and you feel nothing as he continues using your body.');
    (st as any).orgasm_txt = '';
    qspCall(st, 'cum_call', 'stomach', 'A6', 1);
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'exhibitionism', 'humiliation', 'gangbang', 'prostitution');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: '…', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$face_image', '') + '');
    // TODO-QSP: dynamic text: You can feel your consciousness fading in and out. You can hear some words, but ...
    scene.text(`You can feel your consciousness fading in and out. You can hear some words, but they too seem to fade in and out… "You'll be a star, ${((st as any).pcs_nickname || '')}. An even bigger whore than Sonia."… "You look all tuckered out. Had a good time?…" "I think we broke our new toy already…" … "It looks like she passed out… Too much fun maybe."…`);
    scene.text('You hear footsteps as they leave the room and everything starts to fade until you hear… "How could they do this to her?"…"Oh wow, she looks… Sticky."…" This isn\'t the time for jokes, Vicky! We need to do something! We can\'t just leave her like this!" …');
    scene.actions([
      { label: '…', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['NikoDreams', 'family'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalkOfShame(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 100);
  qspCall(s, 'fame', 'pav', 'sex', 100);
  qspCall(s, 'fame', 'pav', 'sex', 100);
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'themes', 'indoors');
  ((s as any).npc_grupTipe = (s as any).npc_grupTipe ?? {})['A189'] = 4;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/hallway/wos1.jpg');
  scene.text('You walk into the school building and hear many of the students whispering to each other before one of the girls you calls out. "Look who it is! The filthy whore!"');
  scene.text('You immediately lower your head in shame, pretending not to hear her.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to ignore them', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/hallway/wos2.jpg');
    // TODO-QSP: dynamic text: One of the boys walks alongside you. "Hey <<$pcs_firstname>>, I saw the pictures...
    scene.text(`One of the boys walks alongside you. "Hey ${((st as any).pcs_firstname || '')}, I saw the pictures. You have such a gorgeous body. Can I fuck it?"`);
    scene.text('Roman suddenly pushes him aside. "Don\'t listen to him. He doesn\'t know how to treat a babe as fine as yourself. Why don\'t you join me in the restroom where we can get to know each other better?"');
    scene.actions([
      { label: 'Accept his offer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$face_image', '') + '');
    scene.text('You meekly nod and his eyes light up. "Great! Let\'s get going." He grabs your arm and guides you to the restroom.');
    scene.actions([
      { label: 'Follow him to the restroom', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('You arrive at the restroom and Roman pulls you up to a mirror and stands behind you. "You were amazing yesterday and I can\'t stop thinking about your hot body and cute face. I want another round! Don\'t worry, I\'ll be gentle."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A154');
    qspCall(st, 'outfit', 'strip_all');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/1.jpg');
    scene.text('He starts undressing you as he runs his hands down your body. You can feel your shirt being removed, followed by your pants. He finishes undressing you and slides his hand up your leg before he starts fingering you as you close your eyes, letting him do as he wants to your body.');
    scene.text('After a few seconds, he starts taking off his shirt and pulling down his pants. "I\'ve never had a girl suck my balls before. I want you to be the first." He lightly pushes down on your shoulders.');
    scene.actions([
      { label: 'Suck Roman\'s balls', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/2.jpg');
    // TODO-QSP: dynamic text: You obediently start licking Roman''s balls before wrapping your lips around the...
    scene.text(`You obediently start licking Roman's balls before wrapping your lips around them and sucking firmly. After a few seconds, he scoffs. "Easy ${((st as any).pcs_nickname || '')}, not so hard."`);
    scene.text('You quickly stop before sucking again, but more gently this time.');
    qspCall(st, 'arousal', 'bj', (-5), 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/3.jpg');
    scene.text('You continue sucking while Roman looks down at you. "That\'s it girl, keep doing that." You continue gently sucking on his balls for a few more seconds before Roman grabs onto your shoulders and lifts you up and passionately kisses you.');
    qspCall(st, 'arousal', 'kiss', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'See what he does next', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/4.jpg');
    scene.text('Roman lifts you to your feet and turns you around before pressing his dick against your anus.');
    scene.actions([
      { label: 'Let him fuck your ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/5.jpg');
    scene.text('You suddenly feel Roman\'s cock ram its way into your ass, causing a sudden jolt of pain to shoot through you. You scream out loud before Roman covers your mouth with his hand for a few seconds as the pain reduces to a manageable level. As he starts rapidly fucking your ass, you try to speak between grunts. "Can you… ehh… take it slow… please…" Roman continues fucking you at the same pace. He\'s either ignoring you or didn\'t hear you.');
    scene.text('You close your eyes and wait for it to be over before he suddenly wraps his arms around yours and drops back, causing you to fall on top of him with his dick still in your ass. "Ride me."');
    qspCall(st, 'arousal', 'anal', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/6.jpg');
    // TODO-QSP: dynamic text: Even though the pain is quite severe, you do as he says, not wanting to disappoi...
    scene.text(`Even though the pain is quite severe, you do as he says, not wanting to disappoint him. Feeling his dry dick grinding against your inner ass, you close your eyes and try to think of anything other than the pain. To your relief, you hear Roman groan and feel his warm cum filling your ass. You focus on it as he continues pumping you with his cum. Once he's finished, he pushes you off of him. "You were great, ${((st as any).pcs_nickname || '')}. We should do this again sometime."`);
    scene.text('He gives you a wink as he gets dressed before leaving you alone in the restroom. A few seconds later, you suddenly hear someone speaking. "There you are! I\'ve been looking all over for you."');
    qspCall(st, 'cum_call', 'anus', 'A189', 1);
    qspCall(st, 'arousal', 'anal', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A189');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    // TODO-QSP: dynamic text: You turn to see Niko standing over you. "I''ve been so worried about you! I hear...
    scene.text(`You turn to see Niko standing over you. "I've been so worried about you! I heard what happened yesterday and I'm so sorry! Don't worry, you're safe with me ${((st as any).pcs_firstname || '')}." He then hugs you.`);
    scene.actions([
      { label: 'Return the hug', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('You tightly return the hug and he gently pats your back while comforting you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
    scene.text('He kisses your forehead. "You know that you can always trust me, right?"');
    scene.text('You eagerly nod with a big smile on your face. "Of course I do. I love you, Nikolai."');
    scene.text('He returns the smile and leans forward to give you a very passionate kiss as he gently strokes your cheek. "I know that you\'ve been through a lot, but you look so beautiful and your body is so perfect. Could you please suck my dick? I would be so grateful." He continues to stroke your cheek.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (st as any).NikoEv = 11;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/kotovbj23.mp4');
    scene.text('"Of course I will! You need only ask." You eagerly unbutton his pants and pull out his dick before quickly wrapping your lips around it, hearing Niko moan as you start passionately sucking his dick.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', 'A189', 1);
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/cum/mouth/cum1.11.mp4');
    scene.text('You continue firmly sucking Niko\'s dick while staring into his eyes, enjoying the pleased look that he\'s giving you. His eyes suddenly squint as he groans, filling your mouth with his warm cum.');
    // TODO-QSP: dynamic text: Once he''s finished, you eagerly swallow it all, enjoying the warmth of it slidi...
    scene.text(`Once he's finished, you eagerly swallow it all, enjoying the warmth of it sliding down your throat as he places his hand on your cheek and gently strokes it with his thumb. "You're so perfect, ${((st as any).pcs_firstname || '')}. I'm so lucky to have you and don't worry, I'll find a way to fix what happened yesterday. Meet me after school and we'll go out on a nice walk. We'll discuss what to do next then." He then kisses you on your forehead before zipping his pants up and leaving the restroom.`);
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['gschool_grounds', 'building'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Pull away', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/sad2.jpg');
    scene.text('You pull away from him. "Where the fuck were you yesterday?!" you exclaim. "You left me cuffed on the floor and I was raped and humiliated!"');
    // TODO-QSP: dynamic text: He sighs. "I totally forgot <<$pcs_firstname>>, I''m sorry. I know that''s no ex...
    scene.text(`He sighs. "I totally forgot ${((st as any).pcs_firstname || '')}, I'm sorry. I know that's no excuse, but we can make things better."`);
    scene.text('"Make things better?!" you quickly shout back. "How the fuck can you make things better? Everyone thinks I\'m just a cheap whore now! I\'ve lost everything!"');
    scene.text('He smirks. "I know someone that can restore your reputation for you." You recoil in shock and he grins. "Let\'s talk about this at my place tonight."');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).NikoEv = 11;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('You lower your posture. "Alright, what do I have to lose? I doubt things can get any worse."');
    // TODO-QSP: dynamic text: Niko wraps his arms around you and brings his face to yours. "Come on <<$pcs_fir...
    scene.text(`Niko wraps his arms around you and brings his face to yours. "Come on ${((st as any).pcs_firstname || '')}. That attitude won't solve anything. Meet me after school and we'll work on fixing your reputation. Trust me and try to cheer up." You nod your head while giving him a warm smile.`);
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss2.mp4');
    scene.text('You lean forward and give him a passionate kiss. After the kiss, Niko smiles. "You\'re such an incredible girl. I always feel so lucky to have you. Now don\'t forget to meet me after school. I\'ll be waiting in the courtyard." You nod your head as he turns around and walks out of the restroom. You quickly get dressed and follow him out.');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['gschool_grounds', 'building'] },
    ]);
  } },
    ]);
  } },
      { label: 'Refuse  [+$func(\'wrap\', \'neg\', \'Break up with Niko...]', handler: (st: GameState) => {
    (st as any).NikoEv = (-1);
    (st as any).NikoLuv = (-8);
    (st as any).NikoDate = (-1);
    (st as any).NikoVolkovQW = (-1);
    (st as any).NikoPayback = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/ouch.jpg');
    scene.text('You quickly push him away. "Fuck you! You\'re just lying to me like you always do! I\'m not trusting you anymore! Stay away from me!"');
    scene.text('Niko gets noticeably angry. "You ungrateful bitch! I\'ve done so much for you and spent so much on you. You better fucking apologize!"');
    scene.text('You nod your head. "Sure, I\'ll apologize." You take two steps forward and ram your knee into his balls before spitting on him. You then quickly grab your clothes and walk out of the restroom.');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'restore');
  }, goto: ['gschool_grounds', 'building'] },
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
    { label: 'Walk away', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/hallway/wos3.jpg');
    scene.text('You keep your head lowered as you quicken your pace. One of the boys smacks your ass hard, causing you to jump, but you try to ignore it as tears stream down your face.');
    scene.actions([
      { label: 'Continue walking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/hallway/wos4.jpg');
    // TODO-QSP: dynamic text: You continue quickly walking through the hall as the students continue whisperin...
    scene.text(`You continue quickly walking through the hall as the students continue whispering about you when you suddenly hear someone calling you out. "Hey ${((st as any).pcs_nickname || '')}, are you alright? I've been so worried about you!"`);
    scene.actions([
      { label: 'Look up', goto: ['NikoWhore', 'Walk Of Shame 2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWalkOfShame2(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
  scene.text('You look up to see Niko with a very distressed look on his face. "Please tell me you\'re okay."');
  scene.text('You take a few seconds to collect your thoughts before responding. "I… I\'m scared Niko. I don\'t think things will ever be normal for me again. I\'m just a whore to everyone. What do I do Niko? What do I do?"');
  scene.text('Tears are streaming down your face as Niko holds you in his arms. "I\'m sorry about what happened to you. I wish I was there to prevent it, but I\'ll always be here for you when you need me. Remember that. I will always be here for you." You start weeping in his arms as he holds you tighter.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Weep in his arms', handler: (st: GameState) => {
    (st as any).NikoEv = 11;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$face_image', '') + '');
    scene.text('You let out your tears, submitting to your own sorrow.');
    scene.actions([
      { label: 'Embrace him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    scene.text('You tighten your arms around Niko as he firmly kisses your neck. "Everything will be alright. I\'ll find a way to fix this, just follow my lead and everything will be alright, okay?"');
    scene.text('"I\'ll do whatever you say Nikolai, just please stay with me. I need you now more than ever."');
    // TODO-QSP: dynamic text: He smiles softly. "Don''t worry <<$pcs_firstname>>, I''m not going anywhere. Now...
    scene.text(`He smiles softly. "Don't worry ${((st as any).pcs_firstname || '')}, I'm not going anywhere. Now let's get you to class."`);
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gschool_grounds', 'building'] },
    ]);
  } },
    ]);
  } },
    { label: 'Push him away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    scene.text('You pull away from him. "Where the fuck were you yesterday?!" you exclaim. "You left me cuffed on the floor and I was raped and humiliated!"');
    // TODO-QSP: dynamic text: He sighs. "I totally forgot <<$pcs_firstname>>, I''m sorry. I know that''s no ex...
    scene.text(`He sighs. "I totally forgot ${((st as any).pcs_firstname || '')}, I'm sorry. I know that's no excuse, but we can make things better."`);
    scene.text('"Make things better?" you quickly shout back. "How the fuck can you make things better? Everyone thinks I\'m just a cheap whore now! I\'ve lost everything!"');
    scene.text('He smirks. "I know someone that can restore your reputation for you." You recoil in shock and he grins. "Let\'s talk about this at my place tonight."');
    scene.actions([
      { label: 'Stay with Niko', handler: (st: GameState) => {
    (st as any).NikoEv = 11;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile2.jpg');
    scene.text('You lower your posture. "Alright, what do I have to lose? I doubt things can get any worst."');
    // TODO-QSP: dynamic text: Niko wraps his arms around you and brings his face to yours before responding. "...
    scene.text(`Niko wraps his arms around you and brings his face to yours before responding. "Come on ${((st as any).pcs_firstname || '')}. That attitude won't solve anything. Meet me after school and we'll work on fixing your reputation. Trust me and try to cheer up." You nod your head while giving him a warm smile.`);
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/kiss2.mp4');
    scene.text('You lean forward and give him a passionate kiss. After the kiss, Niko smiles. "You\'re such an incredible girl. I always feel so lucky to have you. Now don\'t forget to meet me after school. I\'ll be waiting in the courtyard." You nod your head as he turns around and walks out of the restroom. You quickly get dressed and follow him out.');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gschool_grounds', 'building'] },
    ]);
  } },
    ]);
  } },
      { label: 'Break up with Niko', handler: (st: GameState) => {
    (st as any).NikoEv = (-1);
    (st as any).NikoLuv = (-8);
    (st as any).NikoDate = (-1);
    (st as any).NikoVolkovQW = (-1);
    (st as any).NikoPayback = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/ouch.jpg');
    scene.text('You quickly push him away. "Fuck you! You\'re just lying to me like you always do! I\'m not trusting you anymore! Stay away from me!"');
    scene.text('Niko gets noticeably angry. "You ungrateful bitch! I\'ve done so much for you and spent so much on you. You better fucking apologize!"');
    scene.text('You nod your head. "Sure, I\'ll apologize." You take two steps forward and ram your knee into his balls before spitting on him. You then quickly grab your clothes and walk out of the restroom.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_grounds', 'building'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLeaveWithNush(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'themes', 'indoors');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  scene.text('With you between them, Anushka and Alyona turn and lead you away. Anushka takes off her school jacket and slips it over your shoulders while Alyona tie hers around your waist. As you walk down the hall, you pass by Petka, who clearly wonders why you\'re dressed this way. You blush and turn your head as Anushka wraps an arm around your shoulders and Alyona walks up to Petka. "What the fuck are you looking at? Keep walking or I\'ll cut those eyes out. Got it?" He doesn\'t answer, instead choosing to simply run away in fear.');
  scene.text('"Where are your clothes?" Anushka asks and you tell her that they\'re in the locker room. They lead you there and you find your clothes still there in a bag. You return their jackets as you get redressed.');
  scene.text('Once you\'re dressed, you don\'t want to leave and go back to class. Not now, maybe not ever. "I don\'t want to face anyone, I can\'t!" you tell them through sobs.');
  scene.text('You hear one of them sigh before Anushka replies. "Alright, fuck school anyways. Let\'s take you home."');
  scene.text('"Sorry, I can\'t." Alyona chimes in. "They said if I miss any more classes this month, they\'re going to expel me. My dad would fucking kill me if that happened." She sounds genuinely worried.');
  scene.text('"It\'s cool, I got her. You get to class and I\'ll call you later."');
  scene.text('They exchange goodbyes and Alyona starts to leave. "Come on, let\'s go," Anushka says and places a hand on your shoulder.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with her.', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/school/walk_homeg1.jpg');
    scene.text('You lean on her and she leads you out of the locker room. You lean on her as you walk, ashamed of what happened and not knowing what to say. Anushka on the other hand mostly talks about how much of a piece of shit Niko is. You have mixed feelings; he left you to be found like that, but you still love him… At least you think you do…');
    if (((st as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('When you arrive at the door to your apartment, she waits for you to unlock your door. You walk inside and invite her in, but she shakes her head. "I should really get back to school. I can still catch my last two classes."');
      scene.text('You nod and call out to her as she walks away. "Thanks for helping me. I know what it cost you."');
      scene.text('She stops and smiles at you. "Fuck them, you\'re my friend. I\'ll always have your back." Then she frowns. "Just break the fuck up with Niko next time you see him. He doesn\'t love you, not like I do, so do it for me… I\'ll see you later." With that she turns and starts walking down the stairs. You close the door as her words ring in your head. You feel confused and afraid. You don\'t know what to do…');
    } else {
      scene.text('When you arrive at the door to your apartment, she waits for you to unlock your door. You walk inside and invite her in, but she shakes her head. "I should really get back to school. I can still catch my last two classes."');
      scene.text('You nod and call out to her as she walks away. "Thanks for helping me. I know what it cost you."');
      scene.text('She stops and smiles at you. "I like you, and fuck them." Then she frowns. "But you need to break up with Niko next time you see him. I won\'t be there to save you every time." With that she turns and starts walking down the stairs. You close the door as her words ring in your head, as you feel a shot of fear run through your body at her parting words. What if this happens again and no one is around to save you? You feel confused and afraid. You don\'t know what to do…');
    }
    scene.actions([
      { label: 'Your apartment', goto: ['korrPar', ''] },
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
    case 'no_escape':
      enterNoEscape(s, scene);
      break;
    case 'Locker Room 2':
      enterLockerRoom2(s, scene);
      break;
    case 'Walk Of Shame':
      enterWalkOfShame(s, scene);
      break;
    case 'Walk Of Shame 2':
      enterWalkOfShame2(s, scene);
      break;
    case 'leave_with_nush':
      enterLeaveWithNush(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const NikoWhore: LocationDef = {
  name: 'NikoWhore',
  title: 'Break up with Niko',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
