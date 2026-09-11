import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSub(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 1, 'Elektra', 27);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).bdsmclub['training_daystart'] = ((s as any).daystart ?? 0);
  if (((s as any).bdsmclub ?? 0)?.['subtraining'] === 0) {
    (s as any).bdsmclub['subtraining'] = 1;
    scene.actions([{ label: 'Continue', goto: ['bdsm_training', 'sub_1'] }]);
  } else {
    if (((s as any).bdsmclub ?? 0)?.['subtraining'] === 1) {
      (s as any).bdsmclub['subtraining'] = 2;
      scene.actions([{ label: 'Continue', goto: ['bdsm_training', 'sub_2'] }]);
    } else {
      if (((s as any).bdsmclub ?? 0)?.['subtraining'] === 2) {
        (s as any).bdsmclub['subtraining'] = 3;
        scene.actions([{ label: 'Continue', goto: ['bdsm_training', 'sub_3'] }]);
      }
    }
  }
  scene.build();
}

function enterSub_1(s: GameState, scene: SceneBuilder): void {
  (s as any).bdsmclub['training_daystart'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/r2_1.jpg');
  scene.text('You are in the Club, security checks your name off the list and lets you in. You give an elderly bookkeeper money and the security guard takes you into a small outbuilding away from the mansion. As you enter, you understand, that almost the entire wing is a large room for BDSM sessions.');
  scene.text('Hanging from the ceiling chains with hooks and ropes, on the walls – lashes, whips, handcuffs, gags. Submerged in the darkness of the far end of the hall you can just make out pads, tables, crosses and some odd device, you can only guess as to what it does. You are met by the lady from yesterday, her suit replaced by tight leather. She holds in her hands a stick with glands at the ends.');
  scene.text('"W-Hello," you just about manage.');
  scene.text('"Get undressed." Orders Mistress. "Now!"');
  scene.text('She brings the stick to your nose, and cracks it across your cheek.');
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r2_2.jpg');
    scene.text('"This is for electrical shocks." Explains Mistress. "You will meet him later."');
    scene.text('She licks the contacts, then shifts her gaze to you.');
    scene.text('"Are you still dressed, bitch?"');
    scene.text('The whip touches your skin just below the neck. You tense, waiting for the blow. The lady laughs.');
    scene.text('"Scared? Good!"');
    scene.text('She moves away and looks at you. You realize what to do, and quickly take off all your clothes.');
    scene.text('"Spread your legs! Hand behind your back! And the other!"');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Obey', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r2_3.jpg');
    scene.text('The Mistress removes you from the wall and puts a leather collar on you, then wrist cuffs and ankle bracelets with hooks. The collar presses. You reach up to loosen it, but that earns you a slap. The Mistress walks around, the toe of her boot pushes your feet.');
    scene.text('"That\'s right! This is the posture of attention. Does this position make the sub?');
    scene.text('"I don\'t know, Mistress!" You answer. Between your legs burns a flame, you feel it building and flowing down your legs.');
    scene.text('"Of course not, but you listened." Mistress nods.');
    scene.text('She walks around you, unceremoniously grabbing and squeezing, pushing fingers into your most secret holes. You feel like produce she might buy.');
    scene.text('"Listen to the rules. During the session, all commands are executed quickly and without hesitation. Failure to comply will be punished – always! You call me Mistress, in conversations with others you call me "Mistress Elektra". Hope that\'s clear, what\'s my name?');
    scene.text('Mistress!');
    scene.text('Mistress removes a lash from a hook.');
    scene.text('"Sorry flower, this will burn, but don\'t cry. Take this!');
    scene.text('The whip whistles in the air, your back is burning with fire. You look at your shoulder and see the red marks.');
    scene.text('"Listen carefully!"');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r2_4.jpg');
    scene.text('Mistress hits you a few times on your inner thighs.');
    scene.text('"During the session, the submissive only speaks with permission. You may ask for permission to speak, but only if very important. Without permission sub only breathes. Permission is required to move, change positions or cum… we may only cum with permission.');
    scene.text('Cumming without permission will be punished. You will usually be given just one minute to cum. Don\'t manage it in that minute and you stop, immediately. When you cum, we need to report it.');
    scene.text('The hostess walks around you, patting the whip on your shoulders, ass and back.');
    scene.text('"Now the main thing, safeword, to stop, this word is "red". As soon as you say "red", the session is ended. If your mouth is busy, three times shake your head and hum "and-and". If you can\'t shake your head three times you slam the palm of your hand. Clear?"');
    scene.text('"Yes, Mistress!');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Remember', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r2_5.jpg');
    scene.text('You feel covered in arousal. The Mistress sees your condition and puts her hand between your legs.');
    scene.text('"You\'re all wet! I knew that you were a perverted bitch. Yes?');
    scene.text('"Yes, Mistress, yes!');
    scene.text('Skillfully Mistress\'s finger finds the right spot and hits you with a wave of bliss.');
    scene.text('"Want to cum, bitch?"');
    scene.text('"Yesss…!"');
    scene.text('"What do you do?"');
    scene.text('You are shaking, ready to cum, but Mistress knows her stuff, she doesn\'t allow you to reach the peak, masterfully holding you on the crest of a wave.');
    scene.text('"Mistress, PL… please, let me cum!" You barely squeeze out, almost biting your tongue.');
    scene.text('"I didn\'t catch that." Mistress pretends.');
    scene.text('"Please… you must… let me CUM!');
    scene.text('"Too soon!"');
    scene.text('Mistress withdraws her hand. You look at it, like a child, who was given candy, only to have it taken away. Unable to tolerate it, you reach a hand to your crotch.');
    scene.text('No!');
    scene.text('Pain shoots through your face. You fall to your knees, your vision is a little blurry and you can taste copper. Mistress stands over you.');
    scene.text('"Do not dare!"');
    scene.text('You slowly work it out, earlier you were looking at a cattle prod, and now you have been formally introduced.');
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Breathe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/r2_6.jpg');
    scene.text('"Now we have found the first topic to practice - restraint."');
    scene.text('Mistresses manicured finger lifts your chin and looks you in the eye.');
    scene.text('"Cum only with permission, bitch! Clear?"');
    scene.text('"Yes, Mistress! Yes!');
    scene.actions([
      { label: 'Follow', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r2_7.jpg');
    scene.text('Mistress leads you to the diagonal cross and latches the bracelets to you. You can not move.');
    scene.text('"Failure to comply will be punished."');
    scene.text('Skillfully, Mistress plays with your clit, first fingers, then various tools. You moan, ready to cum, but she is very much aware. Noticing your condition, she removes her hand from your flower and whips you in the stomach.');
    scene.text('Gradually the excitement calms, but you can feel it there, just below the surface. She again starts to caress you, alternating caresses with spanking.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'arousal', 'vaginal_finger', (-10), 'sub', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Endure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).pcs_horny ?? 0) < 100) {
      (s as any).pcs_horny = 100;
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/r2_8.jpg');
    scene.text('Eventually, you stop noticing the difference between pain and pleasure. Your face is covered in sweat, you squirm on the cross. You beg mistress to let you cum, but she is adamant.');
    scene.text('"You must earn it!"');
    qspCall(s, 'willpower', 'hj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Cheat and cum [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Cheat and cum [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = 10;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'willpower', 'hj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/r2_9.jpg');
    scene.text('You decide to cheat and, with an incredible force of will, take control of the body. It goes unnoticed, Mistress continues, and you rapidly cum.');
    scene.text('"What\'s going on?!" Yells Mistress in your ear. "You bitch, tricking me like that!');
    scene.text('She unhooks you from the cross, puts you on your knees and slaps you a few times. You are so happy, being able to cum, that you laugh.');
    scene.text('"Laugh? Well, I\'ll fix that!"');
    scene.text('Mistress picks up a rope and wraps it around your breasts, tightly binding the left and right. The pain makes you start crying, but Mistress is not through, she hangs on you nipple clamps with weights and forces you to crouch, so, the weights are swinging. You hurt, but at the same time it\'s nice, and you stay there as instructed.');
    scene.actions([
      { label: 'Further', goto: ['bdsm_training', 'BDSMend'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Hold back', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).pcs_horny ?? 0) < 100) {
      (s as any).pcs_horny = 100;
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/r2_8.jpg');
    scene.text('Mistress forbids you to cum, and you struggle, hampered.');
    scene.actions([
      { label: 'Further', goto: ['bdsm_training', 'BDSMend'] },
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

function enterBDSMend(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/r2_10.jpg');
  scene.text('"Well, enough for today." You do not immediately understand when Mistress announces the completion of the session. "A good start, but there is still work to do."');
  scene.text('"Is that all?" You ask, having temporarily forgotten about the real world.');
  scene.text('"Almost…"');
  scene.text('Mistress puts you on your knees in front of her and forces you to lick her pussy. The session had excited not only you, but Mistress too, and she cums from a few movements of your tongue. After, having licked up every drop from Mistress, you go.');
  qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'lesbian', 'maso', 'bound');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave', goto: ['bdsm_mansion', 'start'] },
  ]);
  scene.build();
}

function enterSub_2(s: GameState, scene: SceneBuilder): void {
  (s as any).bdsmclub['training_daystart'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/r3_1.jpg');
  scene.text('You are in the Club and go to the training hall. You are scared and excited. The thought of what awaits you, and of Mistress, has you wet between your legs.');
  scene.text('Once you enter the hall, mistress walks up to you and slaps you.');
  scene.text('"Late, bitch? I\'ll teach you!"');
  scene.text('She grabs you by the hair, puts you on your knees and pushes your head to the floor.');
  scene.text('"You should kiss the ground, I walk on, for the opportunity to join the Club!"');
  scene.text('"Yes, Mistress!"');
  scene.text('You hurriedly undress.');
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/suburb/bdsm_club/r3_2.jpg');
    scene.text('Mistress puts a collar, foot and hand bracelets on you, and puts you on the wooden platform.');
    scene.text('"A good spanking will teach you not to be late!"');
    scene.text('Mistress ties you onto the platform face down and picks up the whip.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r3_3.jpg');
    scene.text('You are lying on the platform, Mistress, slowly and methodically, punishes you, using various whips, lashes and paddles.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Endure', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r3_4.jpg');
    scene.text('It is becoming unbearable, and Mistress says.');
    scene.text('"Tired, bitch? Take a break!"');
    scene.text('She then sits in front of you, and squatting raises your head to her pussy. You diligently use your tongue to stimulate the labia and clitoris of mistress.');
    qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (((s as any).pcs_horny ?? 0) < 90) {
      (s as any).pcs_horny = 90;
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/suburb/bdsm_club/r3_5.jpg');
    scene.text('"Well, you deserve a little encouragement…"');
    scene.text('Mistress unties you, flips you on your back and locks you up again. She holds up a huge vibrator and knows it is intended for your pussy. Soon it has you ready to cum. Looking at Misstress, you ask.');
    scene.text('"Mistress, cum! Please!');
    scene.text('"No! And don\'t look at me with those puppy dog eyes! Not allowed!');
    scene.text('Mistress almost brings you to orgasm, then takes the vibrator.');
    qspCall(s, 'arousal', 'vaginal_vibe', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r3_6.jpg');
    scene.text('Flogging resumes. The whole time you are kept on the brink of pain and pleasure.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r3_7.jpg');
    scene.text('"Let\'s get weaving…"');
    scene.text('Mistress unties you, leads to a large box, makes to climb on top with your butt in the air. Squinting your eyes, you see, she is unwinding the rope. It is Immediately obvious, that she has great experience.');
    scene.text('Ropes cover your ankles, wrists, knees and pull your neck, forcing your nose to the box. After a few minutes you realize, that can\'t move. Your ass points to the ceiling, feet apart, displaying your pussy and ass. From helplessness and complete openness, you get excited once more.');
    scene.text('"Welcome to rope club!" Announces Mistress and spanks your butt with her palm.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/suburb/bdsm_club/r3_8.jpg');
    scene.text('Mistress puts on a strap-on, makes you lick and suck it, then walks around behind you. You feel it press against your pussy, slipping inside with no resistance, it begins to thrust back and forth.');
    qspCall(s, 'arousal', 'vaginal_strap', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r3_9.jpg');
    scene.text('Mistress Fucks you with a strapon and again brings you to your peak, but does not give you the finish the desire.');
    scene.text('"Boring…" Disappointedly Mistress pulls out, while you try to catch your breath. "How about hanging you?"');
    scene.text('Mistresses fingers flash so quickly, you can\'t keep up. She changes the location of the ropes, turns to you and rattles some chains. You realize with horror, she has tied you hanging from the ceiling chain. The motor sounds, and your body rises.');
    qspCall(s, 'arousal', 'vaginal_strap', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'arousal', 'foreplay', (-10), 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    scene.img('images/locations/city/suburb/bdsm_club/r3_10.jpg');
    scene.text('The ropes cut into your skin, but mistress knows her stuff. For all it hurts, it isn\'t so much as to drive away the excitement. You hang upside down and the room slowly rotates around you.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    (s as any).vgape = 2;
    scene.img('images/locations/city/suburb/bdsm_club/r3_9.jpg');
    scene.text('"Well, let\'s see, how ready is your hole!"');
    scene.text('Mistress pulls out a huge Dildo, attached to a stick, and enters it into your pussy. You think you are being torn apart. You scream out and beg for mercy, but it is useless. Mistress energetically moves the stick up and down, like she is unblocking a toilet.');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'lesbian', 'maso', 'bound', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop it', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r3_12.jpg');
    scene.text('Just as you are ready to scream "Red!", mistress takes the dildo out of you. Again the motor buzzes, you kneel on the floor. Madam binds your hands behind your back and puts you on the knees.');
    scene.text('"Rest!"');
    scene.text('Mistresses leg is in your face, and you understand what to do. You kiss and lick the foot, sucking her toes.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound', 'feet');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Adore', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    (s as any).agape = 2;
    scene.img('images/locations/city/suburb/bdsm_club/r3_13.jpg');
    scene.text('"And now for the ass!" Declares Mistress and knocks you sideways. You lose your balance and she quickly has you upside down supported on your shoulders and bound hands.');
    scene.text('Her strapon rests on the edge of your anus, Mistress hisses with displeasure and with a sharp move of her hips, drives it in entirely. You scream and moan, but quickly the pain turns to pleasure.');
    scene.text('"Oh fuck, cum! Please!" You can hardly form the words.');
    scene.text('"Fuck you, bitch! Fine, hurry it though!"');
    scene.text('With those words you are rapidly orgasming, which is immediately followed by a second extremely intense one. You squirm so much, that even the ropes are coming free.');
    qspCall(s, 'arousal', 'anal_strap', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Recover', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r3_14.jpg');
    scene.text('"Finished?" Mistress leans over to you.');
    scene.text('"Yes, Mistress, thank you, Mistress!" You cry.');
    scene.text('Mistress unties you. For a moment you think, that the session is ending, but no. Rope again binds your wrists, and she plugs your mouth with a ball-gag.');
    scene.text('"This will keep your mouth closed! I\'m tired of listening to your whining!"');
    scene.text('Madam binds the rope around your wrists to the ceiling, and attaches a chain leash with which she pulls you to the box.');
    scene.text('"Now show me, how you please a man!"');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/suburb/bdsm_club/r3_15.jpg');
    scene.text('Mistress lies on her back, and forces you to ride her, and you are grinding on her strap-on. The satisfied moans of Mistress and the clear visual evidence tell you she has already cum several times.');
    scene.text('Satisfied, Mistress unties you, approvingly slaps you on the cheek and lets you go, ordering you to come tomorrow.');
    qspCall(s, 'arousal', 'vaginal_strap', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['bdsm_mansion', 'start'] },
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

function enterSub_3(s: GameState, scene: SceneBuilder): void {
  (s as any).bdsmclub['training_daystart'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/r4_1.jpg');
  scene.text('You enter the training hall for your next training session. Mistress said this session is the last one before you will be admitted to the mansion. If you manage to fulfill all her instructions.');
  scene.text('"Did you dress up pretty for me?" Says Mistress as she checks you out in a predatory manner, "Well, ready then? Get undressed and get over here!');
  scene.actions([
    { label: 'Obey', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r4_2.jpg');
    scene.text('Mistress orders you to get into the cage, you are reminded of a parrot cage. Your body does not fit entirely, and your legs hang out. Your neck is held by a heavy iron collar, attached by chains to the bars of the cage. Mistress pushes a button and the cage rises.');
    scene.text('"Straighten your legs! In front of you, here!" Orders Mistress. Your bare feet are in front of her.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'bound', 'feet');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r4_3.jpg');
    scene.text('Mistress tickles your heels and growls at you every time you try to move your legs.');
    scene.text('"Return to position!"');
    scene.text('You obey. Mistress leans forward and you feel something touching your pussy. Then you hear a buzzing sound, and you feel the vibration.');
    qspCall(s, 'arousal', 'vaginal_vibe', 10, 'sub', 'lesbian', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r4_4.jpg');
    scene.text('"Leg!"');
    scene.text('You lift up your leg. Mistress is holding a thin cane, with considerable force, she hits the sole of your foot.');
    scene.text('"And again…"');
    scene.text('Mistress walks around you asking questions, at the slightest hitch in your response you get hit by the cane.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound', 'feet');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r4_5.jpg');
    scene.text('You are responding, feeling waves of pleasure spread through your body. The vibrator buzzing and twitching, driving you crazy. Unable to restrain himself, you shout.');
    scene.text('"Mistress, please! Come!"');
    scene.text('"No! Restraint! Restraint!"');
    qspCall(s, 'arousal', 'vaginal_vibe', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Restrain', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r4_6.jpg');
    scene.text('Mistress monitors your condition, and the moment before you orgasm, she turns off the vibrator.');
    scene.text('"Well, you know the rules… Now let\'s see you in action…"');
    scene.text('Mistress frees you from the cage and puts you on your knees.');
    scene.text('"Come!" She says imperatively, you understand, she\'s not talking to you.');
    scene.text('From a dark corner, you see someone covered from head to toe in what appears to be tight leather. The man, his cock the only thing not covered, is dangling between his legs, a thick sausage. The mask on the mans head has two holes for his eyes. He bows to Mistress and walks closer.');
    qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'lesbian', 'maso', 'bound');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Await orders', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.img('images/locations/city/suburb/bdsm_club/r4_7.jpg');
    scene.text('"Show me you know how to suck!"');
    scene.text('You obediently take cock in your mouth and carefully suck. Mistress walks around and says.');
    scene.text('"C grade suck, C grade! Need to practice!"');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Next', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/suburb/bdsm_club/r4_8.jpg');
    scene.text('At a sign from Mistress, the man lies on the box. You climb up, lower your pussy onto his dick and start to ride. Mistress walks around and encourages with the cane.');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r4_9.jpg');
    scene.text('"Stop!" Orders Mistress.');
    scene.text('You stop, freezing in position. Mistress gets clothespins tied to ropes and begins to attach them to you. The clothespins hurt, especially on your nipples and tongue, but you endure. At a silent command from Mistress, you resume movement.');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'maso');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Grind', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    scene.img('images/locations/city/suburb/bdsm_club/r4_10.jpg');
    scene.text('"Now jerk!" Orders Mistress.');
    scene.text('You begin to pull at your clit, while grinding on the dick. Soon you feel, that you are at the brink, and ask permission.');
    scene.text('"Finish!" Allows Mistress.');
    scene.text('You shout "Cumming!". You are having an orgasm of unprecedented power. At the peak point, Mistress abruptly pulls the strings, tearing the clothespins from you. You think that she ripped off the skin, it is very painful and pleasant at the same time.');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'maso');
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'sub', 'maso');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Breathe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/city/suburb/bdsm_club/r4_11.jpg');
    scene.text('The lady takes you by the hair and turns your face to hers.');
    scene.text('"Welcome to the Club, slave!"');
    scene.text('Hardly able to walk and your legs buckling you get in the shower. As you exit, you are handed a membership card, you can now enter to the Club as a full member.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['bdsm_mansion', 'start'] },
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

function enterDom(s: GameState, scene: SceneBuilder): void {
  (s as any).bdsmclub['domtraining'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/r2_1.jpg');
  scene.text('You enter the club, security checks your name off on their list and lets you in. You give an elderly bookkeeper money they direct you to a small outbuilding away from the mansion. As you enter, you see that almost the entire building is a large room for BDSM sessions.');
  scene.text('Hanging from the ceiling chains with hooks and ropes, on the walls – lashes, whips, handcuffs, gags. Submerged in the darkness of the far end of the hall you can just make out pads, tables, crosses and some odd device, you can only guess as to what it does. You are met by the lady from the front desk, her suit replaced by tight leather.');
  scene.text('She holds in her hands a long whip.');
  scene.actions([
    { label: 'Greet her', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/r2_2.jpg');
    scene.text('"Hello." you say to her, confidently.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>." She replies. "We were not formally introduced, I am M...
    scene.text(`"Hello ${((s as any).pcs_nickname ?? 0)}." She replies. "We were not formally introduced, I am Mistress Elektra, you may call me Elektra."`);
    scene.text('She raises the whip and cracks it against the floor dramatically.');
    scene.text('"This is a simple listing of rules and such, I always found it terribly boring, so I find it more useful to demonstrate."');
    scene.text('"As you were told last time a sub can earn tips and one way is to help me in these sessions. Follow me."');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/suburb/bdsm_club/sex/r2_3.jpg');
    scene.text('Mistress Elektra walks over to a woman, naked except for collar and cuffs and attaches a leash to her collar.');
    scene.text('"A sub should be obedient and not speak unless spoken to, unless naked or wearing bondage gear, sub women should dress as maids and men as butlers."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 1, 'Elektra\'s sub', 32);
    scene.img('images/locations/city/suburb/bdsm_club/sex/r2_6.jpg');
    scene.text('Elektra helps the sub into a harness and boots then points to the floor. The submissive woman kneels down, being careful to position her legs and arms very precisely.');
    scene.text('"This is the "slave" position, it displays your dominance over the sub. A dominant can do anything to a sub, but must not cause lasting harm."');
    scene.text('"You must also stop immediately if they use their safeword, this is always "red". As soon as they say "red", the session is ended. If their mouth is busy, they can shake their head 3 times and hum "and-and". If they can\'t do either they can slam the palm of their hand. Clear?"');
    qspCall(s, 'arousal', 'erotic', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Carry on', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
    scene.img('images/locations/city/suburb/bdsm_club/sex/r3_5.jpg');
    scene.text('Elektra removes the harness and boots from the sub and leads her to a rectangular section of wooden floor and ties to it. Making a show of how she tied the knots and talking you through it.');
    scene.text('"This isn\'t actually required as I have covered the rules, except to say you must wear expensive or formal clothing when visiting the club. So this is a little bonus for you."');
    scene.text('You do feel quite aroused and are about to thank Elektra, when she hands you a body massager. Normally she would have to ask to cum, but as this is your treat, you can stop when ever you like. For the first time since you met Elektra she cracks a smile.');
    scene.text('Using the body massager you tease the sub for about 10 minutes, but stop short of letting her orgasm. Elektra surprises you by kissing you on the cheek, "I think I\'m going to like having you around."');
    scene.text('She walks back to the front gate with you and gives you a shiny new membership card. Suddenly realizing she is still in her leather outfit she blushes lightly and briskly walks back.');
    qspCall(s, 'arousal', 'vaginal_vibe_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['bdsm_mansion', 'start'] },
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
    case 'sub':
      enterSub(s, scene);
      break;
    case 'sub_1':
      enterSub_1(s, scene);
      break;
    case 'BDSMend':
      enterBDSMend(s, scene);
      break;
    case 'sub_2':
      enterSub_2(s, scene);
      break;
    case 'sub_3':
      enterSub_3(s, scene);
      break;
    case 'dom':
      enterDom(s, scene);
      break;
    default:
      enterSub(s, scene);
      break;
  }
}

export const bdsm_training: LocationDef = {
  name: 'bdsm_training',
  title: 'You are in the Club, security checks your name off the list ',
  region: 'other',
  enter: enter,
};
