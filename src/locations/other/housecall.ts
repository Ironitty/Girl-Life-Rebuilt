import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterNinel0(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/apartment/event/sick/ninel00.jpg');
  scene.text('You open the door and see a pretty young girl carrying a medical bag in her hand standing on the threshold.');
  scene.text('She smiles at you. "Hello. My name is Ninel Pavlovna, and I\'m the new local doctor. Where is the patient?"');
  scene.text('"That would be me," you reply.');
  scene.text('She nods. "I see. Then I need you to go back to bed."');
  scene.actions([
    { label: 'Let her help you back to bed', handler: (st: GameState) => {
    (s as any).ninelmet = 1;
    scene.text('Ninel sits on the edge of your bed and looks you over.');
    // TODO-QSP: dynamic text: "What are the symptoms, <<$pcs_nickname>>? Can I call you that?" she asks.
    scene.text(`"What are the symptoms, ${((s as any).pcs_nickname ?? 0)}? Can I call you that?" she asks.`);
    scene.text('You smile weakly and nod. "Of course, Doctor. I think I have the flu. My coughs are just killing me, making my throat very sore, and I think I have a fever too."');
    scene.text('She feels your forehead. "Runny nose? Headaches? Aching body?"');
    scene.text('You nod. "Yes. And sneezing!"');
    scene.text('She nods. "I\'ll need to examine you. Please undress."');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/nadom1.jpg');
    scene.text('Once you\'re undressed, Ninel listens to your lungs with a stethoscope, her hands feeling cool and gentle as they touch and caress your skin.');
    scene.text('"Yes, wheezing. Now open your mouth."');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/ninel03.jpg');
    scene.text('You open your mouth and she examines your sore throat.');
    scene.text('She uses a tongue depressor to look in your mouth. "Hmmm… Your throat is very red and inflamed. Now I need to take your temperature."');
    scene.actions([
      { label: 'Take temperature', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/ninel04.jpg');
    scene.text('You keep your mouth open for the thermometer, but she shakes her head. "No, not orally. For a more accurate reading, we need to take your temperature rectally."');
    scene.text('Your eyes widen with surprise and you blush slightly. "Oh."');
    // TODO-QSP: dynamic text: She smiles reassuringly at you. "Don't be embarrassed or afraid, <<$pcs_nickname...
    scene.text(`She smiles reassuringly at you. "Don't be embarrassed or afraid, ${((s as any).pcs_nickname ?? 0)}. It's not painful."`);
    scene.text('You hesitate. "Well, if you\'re sure…"');
    scene.text('She pats your shoulder. "I\'m sure. Now lie down and roll over onto your stomach. I\'ll need you to use your hands to spread your buttocks."');
    scene.actions([
      { label: 'Do as the doctor asks', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom2.jpg');
    scene.text('You obediently roll over and spread your ass cheeks as Ninel lubricates your anus thoroughly and deftly slides the thermometer into your ass. You flinch slightly, not from pain, but pleasure, as she slowly slides the thermometer in and out of your ass. As she does, you feel your excitement growing and your pussy getting wet.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (8);
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 50) {
      scene.actions([
        { label: 'Moan with pleasure', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom3.jpg');
    scene.text('She pulls the thermometer out of your ass and tuts while shaking her head. "39.2. Very bad. Please turn over on your back. I need to palpate the lymph nodes."');
    scene.actions([
      { label: 'Roll back over', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom5.jpg');
    scene.text('You roll back over and she strokes and kneads your stomach and thighs. You\'re not so sure if this is an actual medical procedure since she seems to take too long and is too tender, but it feels very nice and you do not object.');
    scene.text('Your excitement is growing and you feel your pussy moisten as you moan sweetly.');
    qspCall(s, 'arousal', 'massage', 15, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blush with embarrassment', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom6.jpg');
    scene.text('You blush with embarrassment, but the doctor\'s hands work their way down to your pussy.');
    scene.text('"Doctor, what are you doing?!" You feel embarrassed, outraged and frightened at the same time.');
    scene.text('"Masturbating you, silly. I feel the magic in you, which means you\'re one of us, and I can use my healing powers on you," she says as she continues to caress your clitoris.');
    scene.text('"So you\'re a succubus too?!"');
    scene.text('"Yes, only mine is a special kind of magic. Tantric. Have you heard of it?"');
    scene.text('You shake your head. "No, I don\'t think so…"');
    scene.text('"It\'s magic based on sensuality and sex. Roughly speaking, I can cast only while I\'m having sex."');
    scene.text('"So?" you ask.');
    scene.text('Since you haven\'t asked her to stop, she keeps caressing your clitoris. "That is, if we have sex, I can heal you if you agree of course. Do you agree?"');
    scene.text('"And what should I do in return?"');
    scene.text('"Nothing. I\'m doing this solely for my own satisfaction."');
    scene.text('Feeling your arousal mounting you find yourself nodding your head. "Then I agree."');
    qspCall(s, 'arousal', 'vaginal_finger', 15, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Agree', goto: ['housecall', 'ninel2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Indignant', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom3.jpg');
    scene.text('You\'re starting to feel confused. "Doctor, what are you doing?"');
    scene.text('She slides the thermometer out of your ass. "Your temperature is 39.2. Very bad," she calmly replies.');
    if (((s as any).sick ?? 0) < 48) {
      scene.actions([
        { label: 'Doctor, what\'s wrong with me?', handler: (st: GameState) => {
    scene.text('Your voice shakes slightly with fear. "Doctor, what\'s wrong with me?"');
    scene.text('"You really do have the flu. Now I\'ll give you an injection of antibiotic and antipyretic which should make you feel better soon. Now roll back over so I can give you your shot."');
    scene.actions([
      { label: 'Lie on your stomach', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).sick = ((s as any).sick ?? 0) - (2);
    (s as any).lekar = ((s as any).lekar ?? 0) + (3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/nadom4.jpg');
    scene.text('Once you roll back over, Ninel gives you an injection in the ass and you wince slightly in pain.');
    scene.text('She gives you a slight reassuring pat. "We\'re just about done with everything. I\'m prescribing you lots of bed rest, hot drinks, antibiotics, nose drops and a balanced diet. When your temperature drops, make an appointment at the clinic for a follow-up."');
    scene.text('You nod. "Thank you, Doctor."');
    // TODO-QSP: dynamic text: She gets up. "Goodbye, <<$pcs_nickname>>. Get lots of rest," she says before lea...
    scene.text(`She gets up. "Goodbye, ${((s as any).pcs_nickname ?? 0)}. Get lots of rest," she says before leaving.`);
    scene.actions([
      { label: 'Back to bed', goto: ['bedr', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).sick ?? 0) >= 48) {
        scene.actions([
          { label: 'Doctor, what\'s wrong with me?', handler: (st: GameState) => {
    scene.text('Your voice shakes slightly with fear. "Doctor, what\'s wrong with me?"');
    // TODO-QSP: dynamic text: She shakes her head. "I'm afraid that you have angina, <<$pcs_nickname>>. I woul...
    scene.text(`She shakes her head. "I'm afraid that you have angina, ${((s as any).pcs_nickname ?? 0)}. I would advise you to check yourself in."`);
    scene.text('"What, in the hospital or something?"');
    scene.text('She nods her head. "Yes."');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.text('You start crying and coughing. "If you think I really need to…"');
    scene.text('"I\'m afraid so. This is a serious disease."');
    scene.text('You nod. "Okay, if I need to go…"');
    scene.actions([
      { label: 'Go to hospital', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
  }, goto: ['city_clinic', 'drPP'] },
    ]);
  } },
      { label: 'Don\'t want to go', handler: (st: GameState) => {
    scene.text('You start crying and coughing. "I don\'t want to go to the hospital!"');
    scene.text('She frowns slightly, then looks thoughtful. "Well, I guess we could try an outpatient treatment. In that case, I\'ll need to give you a few shots to start with."');
    scene.text('You stop crying and smile at her. "Oh, thank you, doctor!"');
    scene.actions([
      { label: 'Lie on your stomach', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/nadom9.jpg');
    scene.text('She gives you a few shots in the ass and you find yourself suddenly becoming incredibly aroused, your pussy growing wet and aching to be invaded as your breath quickens and your nipples grow hard with desire.');
    scene.text('"Doctor, what\'s happening?!" You practically moan out the words.');
    scene.text('She nods knowingly. "I knew it! I can feel the magic in you, which means you\'re one of us, and I can use my powers to heal you!"');
    scene.text('"So you\'re a succubus too?!"');
    scene.text('"Yes, only mine is a special kind of magic. Tantric. Have you heard of it?"');
    scene.text('You shake your head. "No, I don\'t think so…"');
    scene.text('"It\'s magic based on sensuality and sex. Roughly speaking, I can cast only while I\'m having sex."');
    scene.text('"So?" you ask.');
    scene.text('"That is, if we have sex, I can heal you, if you agree of course. Do you agree?"');
    scene.text('"And what should I do in return?"');
    scene.text('"Nothing. I\'m doing this solely for my own satisfaction."');
    scene.text('Feeling your arousal mounting, you find yourself nodding your head. "Then I agree."');
    scene.actions([
      { label: 'Agree', goto: ['housecall', 'ninel2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
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
  scene.build();
}

function enterNinel1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/apartment/event/sick/sex/ninel10.jpg');
  scene.text('Thankfully, you left the door unlocked so you wouldn\'t have to get up again. When the doorbell rings, you hoarsely shout "It\'s open! I\'m in the bedroom!"');
  scene.text('A pretty young girl carrying a medical bag walks into your bedroom and stops beside the bed, carefully looking you over.');
  scene.text('She smiles at you. "Hello. My name is Ninel Pavlovna, and I\'m the new local doctor. I assume you\'re the patient?"');
  scene.text('"Yes, that\'s me."');
  // TODO-QSP: dynamic text: She nods. "I see. What are your symptoms, <<$pcs_nickname>>? Can I call you that...
  scene.text(`She nods. "I see. What are your symptoms, ${((s as any).pcs_nickname ?? 0)}? Can I call you that?"`);
  scene.actions([
    { label: 'Complain', handler: (st: GameState) => {
    (s as any).ninelmet = 1;
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel11.jpg');
    scene.text('You nod. "Of course, Doctor. I think I have the flu. My coughs are just killing me, making my throat very sore, and I think I have a fever too."');
    scene.text('She feels your forehead. "Runny nose? Headaches? Aching body?"');
    scene.text('You nod. "Yes. And sneezing!"');
    scene.text('She sits on the edge of your bed and takes your arm by the wrist, feeling your pulse.');
    scene.text('For a moment, you think you feel power emanating from her fingers, but decide your fever is making you imagine it.');
    scene.text('She looks at you. "Undress so I can examine you please."');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel12.jpg');
    scene.text('Once you\'re undressed, Ninel listens to your lungs with a stethoscope, her hands feeling cool and gentle as they touch and caress your skin.');
    scene.text('"Yes, wheezing. Now open your mouth."');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/ninel03.jpg');
    scene.text('You open your mouth and she examines your sore throat.');
    scene.text('She uses a tongue depressor to look in your mouth. "Hmmm… Your throat is very red and inflamed. Now I need to take your temperature."');
    scene.actions([
      { label: 'Let her take your temperature', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/ninel04.jpg');
    scene.text('You keep your mouth open for the thermometer, but she shakes her head. "No, not orally. For a more accurate reading, we need to take your temperature rectally."');
    scene.text('Your eyes widen with surprise and you blush slightly. "Oh."');
    // TODO-QSP: dynamic text: She smiles reassuringly at you. "Don't be embarrassed or afraid, <<$pcs_nickname...
    scene.text(`She smiles reassuringly at you. "Don't be embarrassed or afraid, ${((s as any).pcs_nickname ?? 0)}. It's not painful."`);
    scene.text('You hesitate. "Well, if you\'re sure…"');
    scene.text('She pats your shoulder. "I\'m sure. Now lie down and roll over onto your stomach. I\'ll need you to use your hands to spread your buttocks."');
    scene.actions([
      { label: 'Roll over', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/rectaltemp.jpg');
    scene.text('You obediently roll over and spread your ass cheeks with your hands as Ninel lubricates your anus thoroughly and deftly slides the thermometer into your ass. You flinch slightly, not from pain, but pleasure, as she slowly slides the thermometer in and out of your ass. As she does, you feel your excitement growing and your pussy getting wet.');
    scene.text('Again, you swear that you feel power emanating from her fingers.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (8);
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doctor, what\'s happening?', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel13.jpg');
    scene.text('Ninel lies down next to you and starts to kiss and caress your naked body. You feel confused and horrified by her behavior, but she\'s so gentle. Your body responds to her kisses and caressing, your nipples growing hard and your pussy becoming soaking wet. You\'re too excited to resist and moan out in pleasure.');
    scene.text('"Doctor, what are you doing? What\'s going on?"');
    scene.text('She nods knowingly. "I knew it! I can feel the magic in you, which means you\'re one of us, and I can use my powers to heal you!"');
    scene.text('"So you\'re a succubus too?!"');
    scene.text('"Yes, only mine is a special kind of magic. Tantric. Have you heard of it?"');
    scene.text('Shaking your head. "No, I don\'t think so…"');
    scene.text('"It\'s magic based on sensuality and sex. Roughly speaking, I can cast only while I\'m having sex."');
    scene.text('"So?" you ask.');
    scene.text('"That is, if we have sex, I can heal you if you agree of course. Do you agree?"');
    scene.text('"And what should I do in return?"');
    scene.text('"Nothing. I\'m doing this solely for my own satisfaction."');
    scene.text('Feeling your arousal mounting, you find yourself nodding your head. "Then I agree."');
    qspCall(s, 'arousal', 'kiss', 10, 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel14.jpg');
    scene.text('Ninel opens her blouse, exposing her breasts, her nipples already hard. You realize she\'s just as aroused as you.');
    scene.text('She caresses your breasts with her hands, then lowers her mouth to your breast and starts sucking on your nipple. You moan softly as your arousal grows even stronger.');
    scene.text('Ninel slides her hand down your stomach and between your thighs, her fingers caressing your clitoris. After a few minutes, she slips her fingers inside your pussy as you moan in pleasure.');
    qspCall(s, 'arousal', 'kiss', 10, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel15.jpg');
    scene.text('You moan under the caressing sensation of her lips and fingers, she slides her body down alongside yours, her tongue trailing down your skin.');
    scene.text('As her head reaches your waist, she crawls between your legs and you feel her tongue lapping at your soaking wet pussy seconds later before her tongue starts exploring inside your wet depths.');
    scene.text('As your arousal peaks, you feel yourself screaming in ecstasy, your body trembling as wave after wave of pleasure rips through your body, your orgasms come so hard and fast you can barely catch your breath. "Ah, Ah, yes! More, more-oh-oh-oh! Oh god yes!"');
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'lesbian');
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel16.jpg');
    scene.text('As your orgasm wracks your body, Ninel crawls forward and straddles your stomach as she leans forward and her fingers plunge back into your wet depths. You can feel her pussy juices flowing down her thighs and onto your stomach. You groan as your hands ecstatically squeeze her ass, holding onto her tightly.');
    scene.text('Her fingers frantically plunge in and out of your pussy, her own breath coming in short gasps now.');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>!" she exhales. "I want to feel your fingers in me!
    scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}!" she exhales. "I want to feel your fingers in me!`);
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Caress her', handler: (st: GameState) => {
    (s as any).ninelsex = ((s as any).ninelsex ?? 0) + (1);
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel17.jpg');
    scene.text('You crawl out from under her, leaving her on all fours. Your fingers seek out her wet pussy, rubbing her clit and lips before sliding inside her pussy. You start finger fucking her while your other hand slides up to her asshole, leaving a trail of wetness from your soaking-wet fingers. You then slide your finger into her ass.');
    scene.text('She screams in ecstasy, her muscles clenching and tightening around your fingers as you furiously finger fuck her, adding a third finger inside her pussy and a second inside her ass as she squirms under you.');
    scene.text('"Please don\'t stop! Yes! Oh yeah!"');
    qspCall(s, 'arousal', 'vaginal_finger_give', 10, 'lesbian');
    qspCall(s, 'arousal', 'anal_finger_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Orgasm', handler: (st: GameState) => {
    if (((s as any).ninelsex ?? 0) === 1) {
      (s as any).girl = ((s as any).girl ?? 0) + (1);
    }
    (s as any).sick = 0;
    (s as any).pcs_health = ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5 + 1000;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel18.jpg');
    scene.text('You feel like you\'re about to explode again and Ninel seems to sense this, turning around and pushing you down on your back. She straddles your face as she leans forward to bury her face in your crotch again.');
    scene.text('Without hesitation, you plunge your fingers deep inside her again while Ninel uses her tongue to lap at your swollen clit before slipping it back inside your pussy, flicking her tongue around inside of you. Within seconds, her body shakes and spasms as her juices flow down her inner thighs and drip on your face while she buries her tongue as deeply inside you as it will go.');
    scene.text('You have a feeling of ecstasy so powerful it overwhelms you, leaving you stunned at the sheer intensity of your orgasm. You shout and wither against the almost unbearable pleasure and it goes on and on, seemingly without end. You feel like you\'re about to pass out when it almost mercifully passes.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 10, 'lesbian');
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie exhausted', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel19.jpg');
    scene.text('You lay panting, sweating and exhausted on your bed. Ninel snuggles as the two of you share a gentle kiss.');
    scene.text('She looks at you. "Well? How do you feel?"');
    scene.text('"Ooohh. Perfect…" you answer and only then do you realize just how well you do feel. The sickness seems to have passed and you feel perfectly healthy, not to mention the wonderful mood you\'re suddenly in. The sweet bouquet of sex drifts in the air and the exhaustion makes this an even more pleasant sensation.');
    scene.text('She smiles at you. "Well, It\'s magic, baby. Mm-m, you\'re just a miracle. I\'ve haven\'t received so much pleasure from my magic in a long time. If you get sick again, just call me. You can also look for me in the clinic if you just want to see me.');
    scene.text('You close your eyes and fall asleep as Ninel quietly gets dressed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Sleep', goto: ['bed2', ''] },
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

function enterNinel2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/apartment/event/sick/sex/ninel13.jpg');
  scene.text('Ninel lies down next to you and starts to kiss and caress your naked body. You feel confused and horrified by her behavior, but she\'s so gentle. Your body responds to her kisses and caresses, your nipples grow hard and your pussy grows wet. You\'re too excited to resist…');
  qspCall(s, 'arousal', 'kiss', 10, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Surrender to your arousal', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel14.jpg');
    scene.text('Ninel opens her blouse, exposing her breasts, her nipples already hard. You realize she\'s just as aroused as you.');
    scene.text('She caresses your breasts with her hands, then lowers her mouth to your breast and starts sucking on your nipple. You moan softly as your arousal grows even stronger.');
    scene.text('Ninel slides her hand down your stomach and between your thighs, her fingers caressing your clitoris. After a few minutes, she slips her fingers inside your pussy as you moan in pleasure.');
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel15.jpg');
    scene.text('You moan under the caressing of her lips and fingers. "Oh god, that feels amazing!" She slides her body down alongside yours, her tongue trailing down your skin.');
    scene.text('As her head reaches your waist, she crawls between your legs and you feel her tongue lapping at your soaking wet pussy before it starts exploring inside your wet depths.');
    scene.text('As your arousal grows, you feel yourself screaming in ecstasy, your body trembling as wave after wave of pleasure rips through you, your orgasms coming so hard and fast that you can barely catch your breath. "Ah, ah, yes! More, more-oh-oh-oh! Oh god yes!"');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel16.jpg');
    scene.text('As an orgasm wracks your body, Ninel crawls forward and straddles your stomach. She leans forward and her hand slides down to your crotch as her fingers plunge back into your wet depths. You can feel her pussy juices flowing down her thighs onto your stomach. You groan as your hands ecstatically squeeze her ass, holding onto her tightly.');
    scene.text('Ninel fingers frantically plunge in and out of your pussy, her own breath coming in short gasps now.');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>!" She exhales. "I want to feel your fingers in me!"
    scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}!" She exhales. "I want to feel your fingers in me!"`);
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return the favor', handler: (st: GameState) => {
    (s as any).ninelsex = ((s as any).ninelsex ?? 0) + (1);
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel17.jpg');
    scene.text('You crawl out from under her, leaving her on all fours. Your fingers seek out her wet pussy, rubbing her clit and lips before sliding inside her pussy. You start finger fucking her while your other hand slides up to her asshole, leaving a trail of wetness from your soaking-wet fingers. You then slide your finger into her ass.');
    scene.text('She screams in ecstasy, her muscles clenching and tightening around your fingers as you furiously finger fuck her, adding a third finger inside her pussy and a second inside her ass as she squirms under you.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 10, 'lesbian');
    qspCall(s, 'arousal', 'anal_finger_give', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Orgasm', handler: (st: GameState) => {
    if (((s as any).ninelsex ?? 0) === 1) {
      (s as any).girl = ((s as any).girl ?? 0) + (1);
    }
    (s as any).sick = 0;
    (s as any).pcs_health = ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5 + 1000;
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel18.jpg');
    scene.text('You feel like you\'re about to explode again and Ninel seems to sense this, turning around and pushing you down on your back. She straddles your face as she leans forward to bury her face in your crotch again.');
    scene.text('Without hesitation, you plunge your fingers deep inside her again while Ninel uses her tongue to lap at your swollen clit before slipping it back inside your pussy, flicking her tongue around inside of you. Within seconds, her body shakes and spasms as her juices flow down her inner thighs and drip on your face while she buries her tongue as deeply inside you as it will go.');
    scene.text('You have a feeling of ecstasy so powerful it overwhelms you, leaving you stunned at the sheer intensity of your orgasm. You shout and wither against the almost unbearable pleasure and it goes on and on, seemingly without end. You feel like you\'re about to pass out when it almost mercifully passes.');
    qspCall(s, 'arousal', 'vaginal_finger_give', 10, 'lesbian');
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie exhausted', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel19.jpg');
    scene.text('You lay panting, sweating and exhausted on your bed. Ninel snuggles as the two of you share a gentle kiss.');
    scene.text('She looks at you. "Well? How do you feel?"');
    scene.text('"Ooohh. Perfect…" you answer and only then do you realize just how well you do feel. The sickness seems to have passed and you feel perfectly healthy, not to mention the wonderful mood you\'re suddenly in. The sweet bouquet of sex drifts in the air and the exhaustion makes this an even more pleasant sensation.');
    scene.text('She smiles at you. "Well, It\'s magic, baby. Mm-m, you\'re just a miracle. I\'ve haven\'t received so much pleasure from my magic in a long time. If you get sick again, just call me. You can also look for me in the clinic if you just want to see me.');
    scene.text('You close your eyes and fall asleep as Ninel quietly gets dressed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Sleep', goto: ['bedr', ''] },
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

function enterNinel3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/apartment/event/sick/sex/ninel20.jpg');
  scene.text('You lie in bed quietly waiting for Ninel, your fingers rubbing your pussy as you prepare yourself for her visit. When the doorbell rings, your pussy is soaking wet and ready.');
  qspCall(s, 'arousal', 'clit_finger', 10);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'It\'s open!', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel21.jpg');
    scene.text('When you hear the doorbell, you shout "It\'s open!" Your throat sore is wheezing as Ninel enters the room.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>. Sick again?"
    scene.text(`"Hello ${((s as any).pcs_nickname ?? 0)}. Sick again?"`);
    scene.text('You cough. "Yeah, can you use your magic again?"');
    scene.text('"Sure, baby. Undress and let me examine you."');
    scene.text('"Why? You\'re a magician."');
    scene.text('She laughs. "Silly. How could you know this little about magic? I need to know what I need to treat you for, otherwise, it will happen as the old song says. \'Try to make a thunderstorm and get a goat.\' Magic must be precise."');
    scene.text('"Oh. Okay…"');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel22.jpg');
    scene.text('You undress and Ninel listens to your lungs with her stethoscope. As usual, her hands are light and gentle while touching you. You feel your body flushing with heat.');
    scene.text('"You\'re wheezing again. Is your temperature high as well?"');
    scene.text('You sneeze. "Yes. 39.6."');
    scene.text('"Oh, you poor thing."');
    scene.text('You start to roll over to let her take your temperature. "The usual?"');
    scene.text('She shakes her head as she smiles at you. "Well, no. You\'re far too excited for a rectal reading. We\'ll have to do it orally this time."');
    scene.text('You lay back on your back. "Do you have a different one?"');
    scene.text('She holds up an oral thermometer. "You mean like this?" she asks before placing it in your mouth.');
    scene.actions([
      { label: 'Taking your temperature', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel23.jpg');
    scene.text('Ninel pulls the thermometer out of your mouth and looks at it, shaking her head.');
    scene.text('"Yes, it\'s bad again. Don\'t worry, I can help."');
    scene.text('She slowly pulls down your blanket.');
    scene.actions([
      { label: 'Unbutton her dress', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel24.jpg');
    scene.text('You can no longer hold back. Feeling the blanket slide down your naked skin, you reach up and start unbuttoning her dress.');
    scene.text('Her skillful hands glide slowly over your body. "Caress me, I\'m burning up! I want you so much!" you breathless whisper.');
    scene.text('Instead, she stops and grins. "Tell me how much you want me."');
    scene.text('"Ninel, please caress me! Take me, I\'m all yours! I beg you! I beg you!"');
    scene.text('She just grins at you. "Beg me more!"');
    scene.text('Your eyes tear up at the lack of her touch. "Please, please, please! I beg you, please caress me! I\'m dying!"');
    scene.actions([
      { label: 'Beg and plead', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel25.jpg');
    scene.text('As you beg and plead, Ninel finally takes pity on you and consents to your pleas. Leaning down and putting her face between your thighs, her tongue darts out and caresses your clit. You moan in pleasure as her tongue skillfully slips inside you.');
    scene.text('You shriek and moan as the heat waves of your sickness diverge from your body. Your pussy is overflowing as Ninel laps it up like a kitten with a bowl of milk.');
    scene.text('You feel yourself nearing climax when Ninel suddenly interrupts your blissful moment with a hard voice of command. "Now you will appease me!"');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ninel takes control', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel26.jpg');
    scene.text('Ninel lays back on the bed as you crawl over to her and start licking her clit. She moans from your tongue lashing you\'re giving her clit, her pussy oozing out her juices as you eagerly lap away at it. She then suddenly grabs your hair with her hand and pushes your face into her crotch, your tongue darting inside her pussy as she grinds your face against her crotch, smearing her juices all over your face.');
    scene.text('"Good, A-ah! Good girl. I\'m cumming, ah!" she moans loudly.');
    qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel27.jpg');
    scene.text('She pulls you up by the hair and turns you around so you can 69 each other. Your tongue eagerly seeks out her pussy as you both explore each other\'s pussies with your tongues, both of you moaning and gasping louder.');
    scene.text('You\'re getting closer to your peak, and Ninel seems too as well, but then she stops again.');
    scene.text('"Please, please, go on!" you beg. "I\'m about to cum!" You caress her insistently, hoping she will relent, but she pulls herself away from you.');
    scene.text('"No! I want you to masturbate yourself."');
    qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
    qspCall(s, 'arousal', 'cuni', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel29.jpg');
    scene.text('She has you sit on her stomach. With a groan, you obey and start furiously and desperately rubbing your throbbing pussy. Ninel is doing the same thing underneath you. The room smells of your juices and lewd moans escape you as you furiously work your pussy, slowly bringing yourself to the peak of bliss again. You scream and squirm in orgasm at the same time as Ninel.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay exhausted', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    (s as any).ninelsex = ((s as any).ninelsex ?? 0) + (1);
    (s as any).sick = 0;
    (s as any).pcs_health = ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5 + 1000;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sex/ninel28.jpg');
    scene.text('You lay back against her as her arms hold you tightly against her, her breath hot against the back of your neck as you pant from exhaustion.');
    scene.text('Your body slowly recovers from the crushing orgasm and you feel healthy but exhausted.');
    scene.text('"Thank you," you whisper.');
    scene.text('"You\'re welcome," she replies. "Come visit me in the clinic sometime."');
    scene.text('You promise to visit her and quickly fall asleep as Ninel quietly gets dressed.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Sleep', goto: ['bedr', ''] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ninel0':
      enterNinel0(s, scene);
      break;
    case 'ninel1':
      enterNinel1(s, scene);
      break;
    case 'ninel2':
      enterNinel2(s, scene);
      break;
    case 'ninel3':
      enterNinel3(s, scene);
      break;
    default:
      enterNinel0(s, scene);
      break;
  }
}

export const housecall: LocationDef = {
  name: 'housecall',
  title: 'You open the door and see a pretty young girl carrying a med',
  region: 'other',
  description: ['You open the door and see a pretty young girl carrying a medical bag in her hand standing on the threshold.'],
  enter: enter,
};
