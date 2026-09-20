import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['KnowsHouse'] === 0) {
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['KnowsHouse'] = 1;
  }
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['albride'] === 1) {
    qspGoto(s, 'albina_house_events', 'first_visit');
  } else {
    qspGoto(s, 'albinahome', 'hallway');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['albride'] = 2;
  scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
  scene.text('Albina leads you to the rather well-furnished and decorated sitting room. "You\'ll have to excuse the mess. The maid was... loyal to my father, so she had to go."');
  scene.text('She then disappears into the kitchen. While she\'s gone, her phone vibrates on the table. You look and see that "Mama" is trying to call her.');
  scene.text('<i>"Strange. She\'s never mentioned her mother. Hell, she barely talks about her father,"</i> you think to yourself.');
  scene.text('The phone rings out as Albina returns with a bottle of wine and two glasses and places them on the table. Noticing her missed call, she quickly picks her phone up and types a message before stuffing it in her pocket.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('"<i>This,</i>" she grunts while twisting a corkscrew into the top of the wine bottle, "was one of my father\'s favorite things. A bottle of stupidly expensive wine that he always refused to open. So let\'s fucking open it!"');
    scene.text('With a grin and a dramatic flourish, she yanks the cork out of the top and pours the contents into the glasses, handing one over before taking the seat next to you.');
    scene.text('She gleeflully chugs the whole glass in practically a single gulp, not bothering to even taste it.');
    scene.actions([
      { label: 'Drink with her', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'wine');
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['first_visit_drink'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/drink_wine.jpg');
    scene.text('You pick up a glass and take a small sip as she gulps down her entire glass.');
    scene.actions([
      { label: '"What\'s going on?"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'wine', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/drink_wine.jpg');
    scene.text('"What\'s going on, Albina? What\'s this about?"');
    scene.text('"He\'s finally fucking gone!" she rants as if that makes any more sense. "Everyone has finally seen what a fucking scumbag he is!"');
    scene.text('"Albina, what are you talking about?"');
    scene.text('"Just shut up and drink!" she scorns while filling her glass a second time. You take another small sip while she downs the whole thing again. Several minutes go by in silence, broken only by your occasional sips and the glugging of Albina pouring herself glass after glass until the bottle is empty.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('"<i><b>FUCKING BASTARD!!</b></i>"');
    scene.text('Without warning, Albina smashes her glass down on the table, causing you to jump. The glass snaps at the stem and she blankly stares at the broken remains in her hand, as if she doesn\'t understand how they got there. You look at her in fright and watch tears begin to stream from her unblinking eyes before she hurls the rest of the glass across the room. It shatters against a cabinet as she lets out a loud scream.');
    scene.actions([
      { label: 'Try to talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort.jpg');
    scene.text('"Albina..." you start. "I-');
    scene.text('"My father turned me into a fucking whore!" she blurts out. "He sold me! Let men drag me away and fuck me however they pleased! And they\'d give him money. Donate right into his campaign fund like it was charity."');
    if (((st as any).AlbinaQW ?? 0)?.['StarletsWhore'] > 0) {
      scene.text('She turns to face you, her eyes brimming with tears. "And when it wasn\'t enough, he made me sell my friends too. Sell <i>you</i>."');
      // TODO-QSP: dynamic text: She then suddenly breaks, bawling loudly as sobs rack her body. "I''m a monster,...
      scene.text(`She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ${((st as any).pcs_nickname || '')}!" she wails. "I'm so sorry! I should've stopped them! But I didn't! I just handed you over to be raped-! Because I didn't want it to be me-! I had-! You-! I-! I'm-! <i>UWAHHHH!!</i>"`);
      scene.text('You throw your arms around her, wrapping her in a tight hug as she continues to cry, her fingers gripped tightly across your back as her tears soak into your shoulder.');
      scene.actions([
        { label: 'Forgive her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort1.jpg');
    scene.text('"Shhhh, shhhh. It\'s okay..." you whisper comfortingly.');
    scene.text('"It\'s not okay!" she wails back. "I-! I-!"');
    scene.text('"It\'s okay..." you continue on cooing. "I forgive you. I\'m not holding this against you."');
    scene.text('"But I-!"');
    scene.text('"I don\'t care. You\'re still my friend."');
    scene.text('Your last words cause her to bawl even harder and she becomes completely unintelligible for the next few minutes as she releases what you can only imagine to be years of frustration and trauma.');
    scene.actions([
      { label: 'Continue', goto: ['albina_house_events', 'first_visit2'] },
    ]);
  } },
      ]);
    } else {
      scene.text('She turns to face you, her eyes brimming with tears. "And when it wasn\'t enough, he made me sell my friends too."');
      // TODO-QSP: dynamic text: She then suddenly breaks, bawling loudly as sobs rack her body. "I''m a monster,...
      scene.text(`She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ${((st as any).pcs_nickname || '')}!" she wails. "I didn't want to! But I didn't stop them! I just handed them over to be raped because I didn't want it to be me! I had-! They-! I-! I'm-! <i>UWAHHHH!!</i>"`);
      scene.text('You throw your arms around her, wrapping her in a tight hug as she continues to cry, her fingers gripped tightly across the back of your top as her tears soak into your shoulder.');
    }
    scene.actions([
      { label: 'It\'s not your fault', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort1.jpg');
    scene.text('"Shhhh, shhhh. It\'s okay..." you whisper comfortingly.');
    scene.text('"It\'s not okay!" she wails back. "I-! I-!"');
    scene.text('"It\'s okay..." you continue on cooing. "It\'s not your fault."');
    scene.text('"But I-!"');
    scene.text('"It\'s not. No matter what you tell yourself, it wasn\'t your fault. And no matter what you think, you\'re still my friend."');
    scene.text('Your last words cause her to bawl even harder and she becomes completely unintelligible for the next few minutes as she releases what you can only imagine to be years of frustration and trauma.');
    scene.actions([
      { label: 'Continue', goto: ['albina_house_events', 'first_visit2'] },
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
      { label: 'Don\'t drink', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('"Not for me, thanks," you say and shake your head.');
    scene.text('"Fine! Whatever," she scowls before downing both glasses in a single gulp each.');
    scene.actions([
      { label: '"What\'s going on?"', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('"What\'s going on, Albina? I don\'t understand."');
    scene.text('"He\'s finally fucking gone!" she rants as if that makes any more sense. "Everyone has finally seen what a fucking scumbag he is!"');
    scene.text('"Albina, what are you talking about?"');
    scene.text('She silently scowls while filling her glass and several minutes go by in silence, broken only by the glugging of Albina pouring herself glass after glass until the bottle is empty.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('"<i><b>FUCKING BASTARD!!</b></i>"');
    scene.text('Without warning, Albina smashes her glass down on the table, causing you to jump. The glass snaps at the stem and she blankly stares at the broken remains in her hand, as if she doesn\'t understand how they got there. You look at her in fright and watch tears begin to stream from her unblinking eyes before she hurls the rest of the glass across the room. It shatters against a cabinet as she lets out a loud scream.');
    scene.actions([
      { label: 'Try to talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort.jpg');
    scene.text('"Albina..." you start. "I-');
    scene.text('"My father turned me into a fucking whore!" she blurts out. "He sold me! Let men drag me away and fuck me however they pleased! And they\'d give him money. Donate right into his campaign fund like it was charity."');
    if (((st as any).AlbinaQW ?? 0)?.['StarletsWhore'] > 0) {
      scene.text('She turns to face you, her eyes brimming with tears. "And when it wasn\'t enough, he made me sell my friends too. Sell <i>you</i>."');
      // TODO-QSP: dynamic text: She then suddenly breaks, bawling loudly as sobs rack her body. "I''m a monster,...
      scene.text(`She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ${((st as any).pcs_nickname || '')}!" she wails. "I'm so sorry! I should've stopped them! But I didn't! I just handed you over to be raped-! Because I didn't want it to be me-! I had-! You-! I-! I'm-! <i>UWAHHHH!!</i>"`);
      scene.text('You throw your arms around her, wrapping her in a tight hug as she continues to cry, her fingers gripped tightly across your back as her tears soak into your shoulder.');
      scene.actions([
        { label: 'Forgive her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort1.jpg');
    scene.text('"Shhhh, shhhh. It\'s okay..." you whisper comfortingly.');
    scene.text('"It\'s not okay!" she wails back. "I-! I-!"');
    scene.text('"It\'s okay..." you continue on cooing. "I forgive you. I\'m not holding this against you."');
    scene.text('"But I-!"');
    scene.text('"I don\'t care. You\'re still my friend."');
    scene.text('Your last words cause her to bawl even harder and she becomes completely unintelligible for the next few minutes as she releases what you can only imagine to be years of frustration and trauma.');
    scene.actions([
      { label: 'Continue', goto: ['albina_house_events', 'first_visit2'] },
    ]);
  } },
      ]);
    } else {
      scene.text('She turns to face you, her eyes brimming with tears. "And when it wasn\'t enough, he made me sell my friends too."');
      // TODO-QSP: dynamic text: She then suddenly breaks, bawling loudly as sobs rack her body. "I''m a monster,...
      scene.text(`She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ${((st as any).pcs_nickname || '')}!" she wails. "I didn't want to! But I didn't stop them! I just handed them over to be raped because I didn't want it to be me! I had-! They-! I-! I'm-! <i>UWAHHHH!!</i>"`);
      scene.text('You throw your arms around her, wrapping her in a tight hug as she continues to cry, her fingers gripped tightly across the back of your top as her tears soak into your shoulder.');
    }
    scene.actions([
      { label: 'It\'s not your fault', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort1.jpg');
    scene.text('"Shhhh, shhhh. It\'s okay..." you whisper comfortingly.');
    scene.text('"It\'s not okay!" she wails back. "I-! I-!"');
    scene.text('"It\'s okay..." you continue on cooing. "It\'s not your fault."');
    scene.text('"But I-!"');
    scene.text('"It\'s not. No matter what you tell yourself, it wasn\'t your fault. And no matter what you think, you\'re still my friend."');
    scene.text('Your last words cause her to bawl even harder and she becomes completely unintelligible for the next few minutes as she releases what you can only imagine to be years of frustration and trauma.');
    scene.actions([
      { label: 'Continue', goto: ['albina_house_events', 'first_visit2'] },
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

function enterFirstVisit2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/comfort.jpg');
  scene.text('Eventually, Albina\'s body stops shuddering and she pulls back. Her eyes are bloodshot and the fierce sobs that coursed through her have been reduced to small hiccuping gasps.');
  scene.text('"My mama is coming home you know," she whispers with a small smile. She glances up at you with eyes that look like they could burst into tears again at any moment, but this time with joy. "All these years after he chased her away... She\'s going to come home. She\'s going to come back to me! <i>For</i> me!"');
  scene.text('"You really miss her, don\'t you?"');
  scene.text('Instead of answering you, she leans forward and presses her lips against yours, forcing her tongue between them.');
  qspCall(s, 'willpower', 'kiss', 'resist', 'medium');
  qspCall(s, 'arousal', 'kiss', (-5));
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Pull away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Pull away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'drugs', 'alcohol', 'wine', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('You jump back in fright, breaking the kiss and nearly falling off the sofa. In turn, Albina jumps back from you, looking distraught.');
    // TODO-QSP: dynamic text: "I''m sorry, <<$pcs_nickname>>! I-! I shouldn''t have... I don''t know what came...
    scene.text(`"I'm sorry, ${((st as any).pcs_nickname || '')}! I-! I shouldn't have... I don't know what came over me! I... I'm sorry," she repeats. "You should go... I don't want to..."`);
    scene.actions([
      { label: 'Do as she suggests', handler: (st: GameState) => {
    scene.text('Not saying anything else, you awkwardly pick up your things and walk towards the door. Albina sits in silence, her shoulders hunched as she stares downward. As far as you know, she doesn\'t move even as you close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Comfort her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort.jpg');
    scene.text('You shake your head. "No, it\'s okay. I was just... surprised. I didn\'t mean to react that way."');
    scene.text('"You should go..." she says again, her voice flat.');
    scene.text('"No, I\'m not leaving you like this. If you want, I could just sit here and we could chat for a while?"');
    scene.text('Raising her head, she looks at you with a sad smile. "I\'d like that."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'npc_relationship', 'modify', 'A23', 10);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('You sit by her side as she tells you everything about herself that was once hidden from you. How her father never wanted children. How he abused her mother because of her birth. The way he chased her mother away and then blamed Albina for it after. Many of her rapes, described in graphic, painful detail.');
    scene.text('You do nothing but sit and nod along the entire time, listening intently.');
    scene.text('At the end of an hour, it seems a weight has been lifted from her shoulders and she has <i>slightly</i> sobered up.');
    scene.text('"I\'ve never told anyone that before," she says. "You... You really don\'t think worse of me?"');
    scene.actions([
      { label: 'No I don\'t', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinahome.jpg');
    scene.text('"No," you shake your head. "I don\'t. I think you\'re one of the bravest people I\'ve ever met."');
    scene.text('Your friend truly comforted, you finally collect your things and bid her farewell. She takes you to the door and as you walk down the driveway, both of you waving goodbye, you think you catch sight of the first genuine smile you\'ve ever seen on Albina\'s face.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Kiss her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', (-5));
    scene.img('images/characters/pavlovsk/school/girl/albina/kissing.jpg');
    scene.text('Instead of answering with words, you lean in and press your lips against Albina\'s. She practically melts into it, opening her mouth to brush her tongue across your lips.');
    scene.text('You oblige and open your mouth to press back against her with your own tongue. You feel heat spreading through your entire body when she suddenly breaks off the kiss.');
    scene.text('"My room?" she asks breathlessly.');
    scene.text('"Your room," you reply.');
    scene.text('Grabbing you by the arm, she practically drags you upstairs.');
    scene.actions([
      { label: 'Follow her', goto: ['albina_house_events', 'first_sex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Kiss her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', (-5));
    scene.img('images/characters/pavlovsk/school/girl/albina/kissing.jpg');
    scene.text('Unwilling to leave Albina like this, you lean in and press your lips against hers.');
    // TODO-QSP: dynamic text: She stiffens. "No, <<$pcs_nickname>>," she says around your lips. "I don''t want...
    scene.text(`She stiffens. "No, ${((st as any).pcs_nickname || '')}," she says around your lips. "I don't want to make you-"`);
    scene.text('"I was just surprised," you whisper back. "I don\'t mind. I want this."');
    scene.text('You press your tongue against her lips and she melts into it, opening her mouth to allow you in. Her piercing adds a surprisingly erotic sensation to your kiss as her tongue swirls around yours; you feel heat spreading through your entire body when she suddenly breaks off the kiss.');
    scene.text('"My room?" she asks breathlessly.');
    scene.text('"Your room," you reply.');
    scene.text('Grabbing you by the arm, she practically drags you upstairs.');
    scene.actions([
      { label: 'Follow her', goto: ['albina_house_events', 'first_sex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her back', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 2);
    qspCall(st, 'npc_relationship', 'modify', 'A23', 2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/kissing.jpg');
    if (((st as any).AlbinaQW ?? 0)?.['first_visit_drink'] === 1) {
      scene.text('You\'re not sure if it\'s just the alcohol or if something else is compelling you, but you go right along with it, opening your mouth wider to let her plunge her tongue even deeper. Her tongue piercing adds a surprisingly erotic sensation to your kiss as you feel heat spreading through your entire body before she suddenly breaks away.');
      scene.text('"My room?" she asks breathlessly.');
      scene.text('"Your room," you reply.');
      scene.text('Grabbing you by the arm, she practically drags you upstairs.');
      scene.actions([
        { label: 'Follow her', goto: ['albina_house_events', 'first_sex'] },
      ]);
    } else {
      scene.text('You\'re not sure what compels you, but you go right along with it, opening your mouth wider to let her plunge her tongue even deeper. Her tongue piercing adds a surprisingly erotic sensation to your kiss as you feel heat spreading through your entire body before she suddenly breaks away.');
      scene.text('"My room?" she asks breathlessly.');
      scene.text('"Your room," you reply.');
      scene.text('Grabbing you by the arm, she practically drags you upstairs.');
      scene.actions([
        { label: 'Follow her', goto: ['albina_house_events', 'first_sex'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterFirstSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/lesbian/kiss1.mp4');
  scene.text('The moment you get into her room, you start tearing each other\'s clothes off and tossing them aside without a care. Her thong is soaked through and comes away with a trail of juices as she wiggles out of it. As soon as you\'re completely naked, she pushes you back onto the bed and climbs on top of you.');
  scene.text('You wrap your legs around her back and you go right back to passionately making out again. But it isn\'t enough. You can feel Albina\'s juices smearing against your thigh and you\'re pretty sure she can feel the same from you.');
  qspCall(s, 'arousal', 'kiss', 2, 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'massage', (-2), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take it further', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'rimming', 5, 'no_orgasm_msg', 'lesbian');
    qspCall(st, 'arousal', 'vaginal_finger', (-5), 'no_orgasm_msg', 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/lesbian/uanuli22.jpg');
    scene.text('Albina breaks the kiss and flips you around, shoving two fingers into your pussy and her tongue up your ass. The second one causes you to gasp and she capitalizes on it, sending undulating motions through her tongue to drive you into a frenzy.');
    scene.text('"Oh Albina!" you moan. "I want to make you feel good too!"');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/69_1.mp4');
    scene.text('You turn, forcing her tongue away from your ass and towards your other hole instead, wrapping your thighs around her torso. In the same motion, you dive between her legs and run your tongue across her pussy. It\'s absolutely <i>soaked</i>. The two of you eat each other out with mutually reckless abandon as you relentlessly tease each other\'s clits. Albina\'s tongue occasionally slides up and rims your ass before moving back down to your pussy, which grows wetter and wetter.');
    scene.text('Albina\'s body begins to tense up and her legs pull you tight against her pussy, practically burying you in it. She\'s close, and you feel exactly the same way, mimicking her actions as you feel her lips against your labia. She shrieks into your pussy, her cry of orgasm vibrating through you as a burst of fluid suddenly sprays into your face and the shock sends you over the edge. Your eyes roll back in your head as you too release a wordless groan into her dripping wet pussy. You can feel her spasming underneath your tongue and her juices spray directly into your mouth. It\'s unbelievably hot, sustaining your orgasm for longer and longer.');
    scene.text('Finally, the tension gives out and both of you are left panting. You can feel Albina\'s breath between your legs.');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A23'] = 1;
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 10, 'no_orgasm_msg', 'lesbian');
    qspCall(st, 'arousal', 'cuni_give', (-10), 'no_orgasm_msg', 'lesbian');
    qspCall(st, 'arousal', 'rimming', (-5), 'no_orgasm_msg', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/nudealbina.jpg');
    scene.text('Albina untangles herself from your legs and flops onto her back, still breathing hard. You do the same, staring up at the ceiling. The sheets are soaked beneath you.');
    scene.text('Pulling her herself up, Albina turns herself around and gives you the most gentle kiss before pulling back. You can taste yourself on her lips.');
    scene.text('"That might have been... The biggest orgasm... I\'ve ever had..." she pants, giving you a sultry look as she combs back her disheveled hair. "Holy shit, you\'re wasted on men!"');
    scene.text('"You didn\'t... Tell me... You were a squirter!" you huff back.');
    scene.text('"You never asked..." she smirks and gives you another soft kiss.');
    qspCall(st, 'arousal', 'kiss', 1, 'no_orgasm_msg', 'lesbian');
    qspCall(st, 'arousal', 'end');
    (st as any).pcs_hairbsh = (-1);
    if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
      (st as any).pcs_makeup = 0;
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    scene.text('The two of you lay on her bed, slowly recovering after your high-intensity orgasms. Incredibly, Albina\'s pussy continues to trickle a steady stream of juices, even several minutes later.');
    // TODO-QSP: dynamic text: "Oh fuck," she breathes. "I get so wet after I cum, but this is just ridiculous!...
    scene.text(`"Oh fuck," she breathes. "I get so wet after I cum, but this is just ridiculous! What did you do to me, ${((st as any).pcs_nickname || '')}?!"`);
    scene.text('You laugh, finally managing to prop yourself up. "You\'re one to talk! Your tongue piercing... Just... Wow! I\'ve never had <i>anything</i> stimulate my clit quite like that!"');
    if (((st as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
      scene.text('"I could say the same thing about you!" she grins. "I get what you mean, though. The way your piercing teased my clit made me way cum faster than I normally would have!"');
    } else {
      scene.text('"I can only imagine what that felt like," she grins. "I\'d say I\'m actually jealous! Maybe you should pierce <i>your</i> tongue and return the favor!"');
    }
    // TODO-QSP: dynamic text: You both laugh before her expression changes to something more... tender. "Thank...
    scene.text(`You both laugh before her expression changes to something more... tender. "Thanks ${((st as any).pcs_nickname || '')}. It was nice to let it all out... and I'm not just talking about my feelings..." she says, her expression turning mischievous again. "Thanks for being a good friend."`);
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinahome.jpg');
    scene.text('She helps you clean up before you get dressed and you finally collect your things, preparing to bid her farewell. She forgoes her clothes, choosing to walk you to the door instead.');
    scene.text('As you walk down the driveway, you turn and see her, standing naked in the doorway waving you goodbye and you think you catch sight of the first genuine smile you\'ve ever seen on Albina\'s face.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
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

function enterTekkenGame(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('You notice the flat-screen TV and a games console sitting in front of it. A row of various Tekken and Mortal Kombat games sit underneath them.');
  scene.text('"I wish I could afford a console..." you mumble.');
  scene.text('She smiles at you. "You want to play a few games?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('You shake your head. "Not right now, thanks. I just noticed them, is all. Maybe some other time."');
    scene.text('She shrugs. "Sure. If you ever want to play, all you have to do is ask."');
    scene.actions([
      { label: 'Do something else', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'exp_gain', 'react', (Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'exp_gain', 'gaming', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A23', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
    if (((st as any).AlbinaQW ?? 0)?.['gamebet'] === 0) {
      scene.text('You and Albina lie down in front of the TV after picking one of the games. You play while chatting about various things and trash-talking each other. However, neither of you is giving your full attention to the game. Instead, you\'re just having fun together.');
      scene.actions([
        { label: 'Finish playing', goto: ['albinahome', 'bedroom'] },
        { label: 'Keep playing', goto: ['albina_house_events', 'tekken_play'] },
      ]);
    } else {
      scene.text('You and Albina lie down in front of the TV after picking one of the games. She turns towards you and gives you a grin. "Feel like putting your ass on the line and betting again?"');
      qspCall(st, 'willpower', 'sex', 'resist', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse the bet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'exp_gain', 'react', (Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'exp_gain', 'gaming', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-1));
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You shake your head. "Not this time."');
    scene.text('She\'s clearly a little disappointed, but turns her attention back to the game. "You\'re so going to lose!" she laughs. You play some games for a while, although things are a little awkward between you. Eventually, Albina stops. "Well, I had fun, but there\'s some stuff I need to take care of," she says as she turns the console off.');
    scene.text('Getting the hint, you get up as well. "Yeah, I should probably get going myself." You exchange a brief hug before you leave.');
    scene.actions([
      { label: 'Say goodbye and go home', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['visiting'] = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Accept the bet', goto: ['albina_house_events', 'tekken_bet'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterTekkenPlay(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'exp_gain', 'react', (Math.floor(Math.random() * 2) + 0));
  qspCall(s, 'exp_gain', 'gaming', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
  scene.text('The two of you keep playing games while trash-talking and even bumping each other to try and screw each other up. Still, neither of you are taking it seriously. Instead, you mostly just laugh at the silly mistakes you both make while only partially paying attention to the game.');
  if (((s as any).pcs_hotcat ?? 0) < 5) {
    scene.text('Albina turns to you. "So, want to lose again?"');
    scene.text('You shove her gently. "Oh please! I was winning!"');
    scene.actions([
      { label: 'Finish playing', goto: ['albina_chat', 'chat_exit'] },
      { label: 'Keep playing', goto: ['albina_house_events', 'tekken_play'] },
    ]);
  } else {
    scene.text('Once you finish the game, Albina turns to you instead of starting another one. "How about we see who actually <i>is</i> the better gamer?" she asks with a confident smile.');
    scene.text('You laugh and nod. "Sure, but you\'re so going down!"');
    scene.text('She laughs in response. "You\'re that sure? How about we make it a bit more interesting then?"');
    scene.text('You arch your brow curiously. "What do you have in mind?"');
    scene.text('She grins at you, gets up and walks over to her dresser. She rummages around in it before pulling out a strapon harness with a large black dildo attached. "The winner gets to use this on the loser... However. They. Want," she says with a smirk.');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse the bet', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse the bet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'exp_gain', 'react', (Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'exp_gain', 'gaming', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'npc_relationship', 'modify', 'A23', (-2));
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You shake your head. "Uhhh... I\'m really not interested in doing that."');
    scene.text('Albina puts the strapon away, and you can tell she\'s a little disappointed as she comes back over and lies down beside you again. "You\'re so going to lose!" she laughs.');
    scene.text('You continue to play games for a while, although things are awkward between you. Eventually, Albina stops. "Well, I had fun, but there\'s some stuff I need to take care of," she says as she turns the console off.');
    scene.text('Getting the hint, you get up as well. "Yeah, I should probably get going myself." You exchange a brief hug before you leave.');
    scene.actions([
      { label: 'Say goodbye and go home', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['visiting'] = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Accept the bet', goto: ['albina_house_events', 'tekken_bet'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTekkenBet(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['gamebet'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'exp_gain', 'react', (Math.floor(Math.random() * 2) + 0));
  qspCall(s, 'exp_gain', 'gaming', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
  scene.text('You smile. "You\'re on. You\'re so going to get fucked!"');
  scene.text('Albina laughs as she brings the strapon over with a bottle of lube and tosses them on the bed before she lies back beside you and picks her controller up. "<i>Please</i>! You\'re so going to lose!"');
  scene.text('She starts the game, and you both fall silent, your focus only on winning.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Play until someone wins', handler: (st: GameState) => {
    (st as any).gameresult = (Math.floor(Math.random() * 100) + 1) + ((st as any).pcs_gaming ?? 0);
    if (((st as any).gameresult ?? 0) >= 150) {
      (st as any).albplay = 3;
    } else {
      if (((st as any).gameresult ?? 0) >= 100) {
        (st as any).albplay = 2;
      } else {
        if (((st as any).gameresult ?? 0) >= 75) {
          (st as any).albplay = 1;
        } else {
          (st as any).albplay = 0;
        }
      }
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
    if (((st as any).albplay ?? 0) === 3) {
      scene.text('She doesn\'t even come close to beating you. Before the game can end, she lets out an exacerbated sigh and tosses her controller down in defeat, knowing she has no chance.');
      scene.text('You give her a gloating smirk as you both undress and grin as you slide the harness on.');
      scene.actions([
        { label: 'Continue', goto: ['albina_sex_scenes', 'wear_strapon'] },
      ]);
    } else {
      if (((st as any).albplay ?? 0) === 2) {
        scene.text('It\'s close, but in the end, you just manage to win the game.');
        scene.text('"Yes!" you exclaim triumphantly before you both undress, grinning as you slide the harness on.');
        scene.actions([
          { label: 'Continue', goto: ['albina_sex_scenes', 'wear_strapon'] },
        ]);
      } else {
        if (((st as any).albplay ?? 0) === 1) {
          scene.text('Although you try your best, Albina proves a worthy opponent and barely defeats you.');
          // TODO-QSP: dynamic text: "You''re my bitch now, <<$pcs_nickname>>!" she laughs as you both undress and Al...
          scene.text(`"You're my bitch now, ${((st as any).pcs_nickname || '')}!" she laughs as you both undress and Albina slides the harness on with a smirk on her face.`);
          scene.actions([
            { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
          ]);
        } else {
          if ((!((st as any).albplay ?? 0))) {
            scene.text('Although you try your best, Albina simply outplays you at every turn. You stand no chance, and she easily beats you.');
            // TODO-QSP: dynamic text: "You''re my bitch now, <<$pcs_nickname>>!" she laughs as you both undress and Al...
            scene.text(`"You're my bitch now, ${((st as any).pcs_nickname || '')}!" she laughs as you both undress and Albina slides the harness on with a smirk on her face.`);
            scene.actions([
              { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
            ]);
          }
        }
      }
    }
  } },
    { label: 'Throw the game', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
    scene.text('You\'re not sure why, but part of you <i>wants</i> her to use the strap-on on you, so you purposefully lose the game.');
    // TODO-QSP: dynamic text: Albina looks at you suspiciously with a raised brow before smiling. "You''re my ...
    scene.text(`Albina looks at you suspiciously with a raised brow before smiling. "You're my bitch now, ${((st as any).pcs_nickname || '')}!"`);
    scene.text('You both undress and Albina slides the harness on with a smirk on her face.');
    scene.actions([
      { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSwimWinter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('You head up to Albina\'s room and just as you reach for the doorknob, it flies open up and Albina nearly runs straight into you, wearing a silk robe that barely reaches below her hips.');
  if (((s as any).AlbinaQW ?? 0)?.['winter_hot_tub_dip'] < 1) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I didn''t know you were here! I was just going to go for a s...
    scene.text(`"${((s as any).pcs_nickname || '')}! I didn't know you were here! I was just going to go for a swim, care to join me?"`);
    scene.text('"You want to go swimming in <i>this</i> weather?" you ask, raising your eyebrow, following her as she walks past you down the stairs.');
    scene.text('She smirks at you. "Not swimming, just a quick dip! Just long enough to get your nipples rock hard."');
    scene.text('"And <i>why</i> would I want to do that?"');
    // TODO-QSP: dynamic text: "So you can jump in the hot tub after!" She looks at you pointedly. "What, you m...
    scene.text(`"So you can jump in the hot tub after!" She looks at you pointedly. "What, you mean you've never jumped in the lake before a sauna session before? Don't you know anything about enjoying yourself, ${((s as any).pcs_nickname || '')}?"`);
    scene.text('She drops her robe, revealing that she\'s wearing only a skimpy bikini thong as she starts strutting towards the back door. Opening it up, she shudders as a cold wind blows over her before glancing back at you. "Well? You coming or what?"');
  } else {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I didn''t know you were here! I was just going to go jump in...
    scene.text(`"${((s as any).pcs_nickname || '')}! I didn't know you were here! I was just going to go jump in the pool. You coming?"`);
    scene.text('"And hot tub after?" you ask.');
    scene.text('"Duh! You think I enjoy splashing around in ice cold water for the fun of it?" she says, rolling her eyes as she opens up the back door.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSwimWinter2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'No swimsuit', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    scene.text('"I don\'t have a swimsuit," you protest, but Albina just gives you an amused look.');
    scene.text('"Then go in your underwear," she smirks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSwimWinter2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSwimWinter2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'ll pass', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['skip_tub'] = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 6;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/albinapool.jpg');
    scene.text('"I\'ll pass, thanks."');
    scene.text('"Your loss," she shrugs before taking a running leap towards the pool. You hear a loud splash followed by a gleeful shriek and walk out to see Albina floating around in the pool. She smiles at you and turns to dive under the water, giving you a view of her anus as she goes under. Knowing Albina, she likely done this on purpose.');
    scene.text('After a few seconds, she swims over to the adjoining wall of the hot tub and throws herself over the side.');
    scene.actions([
      { label: 'Do something else while she\'s in the tub', handler: (st: GameState) => {
    scene.text('You decide not to join her in the tub and sit in one of the chairs near the pool and play with your phone until she climbs out and wraps herself in a towel before motioning for you to follow her.');
    (st as any).minut = ((st as any).minut ?? 0) + 6;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Join her in the tub', handler: (st: GameState) => {
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Strip to your panties', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['skinny_dip'] = 0;
    qspGoto(st, 'albina_house_events', 'winter_hot_tub');
  } },
      ]);
    }
    scene.actions([
      { label: 'Strip naked', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['skinny_dip'] = 1;
    qspGoto(st, 'albina_house_events', 'winter_hot_tub');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Hesitantly join her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    scene.text('"I... I guess..." you say. ');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSwimWinter2Strip(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Enthusiastically join her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    scene.text('"Sounds fun!" You quickly start stripping out of your clothing while Albina stands by the door, jumping up and down and shivering in the cold breeze.');
    scene.text('"Hurry up!" The moment you take off your last piece of fabric, you sprint straight out the door past her.');
    scene.text('"Waiting on you now!" you call over your shoulder before leaping into the pool. The immediate shock of the icy cold sends shivers through your whole body and you gasp as your head breaches the surface, just in time to see Albina jump over you and into the water behind. "<i>Ohmygod!</i>" you manage to chatter out, shivering tremendously but unable to stop yourself from smiling at Albina when she comes up for air.');
    scene.text('"Now into the hot tub! Hurry!" The two of your swim over to the adjoining wall of the hot tub and pull yourselves over the side.');
    scene.actions([
      { label: 'Continue', goto: ['albina_house_events', 'winter_hot_tub'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSwimWinter2Strip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Strip to your panties', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['skinny_dip'] = 0;
    scene.text('You strip down while Albina keeps standing by the door, jumping up and down and shivering in the cold breeze.');
    scene.text('"Hurry up! I\'m freezing my ass off here!"');
    scene.text('"Okay okay!" you say, getting down to just your panties and joining her poolside.');
    scene.text('<i>Brrrr! It really is cold out here!</i> you as you feel a pair of warm hands on your ass.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSwimWinter3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Strip to your underwear', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['skinny_dip'] = 0;
    scene.text('You strip down while Albina stands by the door, jumping up and down and shivering in the cold breeze.');
    scene.text('"Hurry up! I\'m freezing my ass off here!"');
    scene.text('"Okay okay!" you say, leaving your bra and your panties on and joining her poolside.');
    scene.text('<i>Brrrr! It really is cold out here!</i> you think before you feel a pair of warm hands on your ass.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSwimWinter3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Strip naked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['skinny_dip'] = 1;
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.text('You strip down while Albina stands by the door, jumping up and down and shivering in the cold breeze.');
      scene.text('"No panties," she grins. "Nice!"');
      if (((st as any).AlbinaQW ?? 0)?.['commando_know'] > 0) {
        scene.actions([
          { label: 'You know I don\'t wear them', handler: (st: GameState) => {
    if (((st as any).AlbinaQW ?? 0)?.['commando_know'] === 3) {
      scene.text('"You know I don\'t wear panties," you smirk, skipping out the door to join her poolside.');
    } else {
      scene.text('"You know I don\'t always wear them," you smirk, skipping out the door to join her poolside.');
    }
    scene.text('<i>Brrrr! It really is cold out here!</i> you think before you feel a pair of warm hands on your ass.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSwimWinter3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Blush', handler: (st: GameState) => {
    scene.text('Your cheeks flush with crimson heat, but you don\'t say anything else, skipping out the door to join her poolside.');
    scene.text('<i>Brrrr! It really is cold out here!</i> you think before you feel a pair of warm hands on your ass.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSwimWinter3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Play it off', handler: (st: GameState) => {
    scene.text('"Like you\'ve never gone commando before," you wink, skipping out the door to join her poolside.');
    scene.text('<i>Brrrr! It really is cold out here!</i> you think before you feel a pair of warm hands on your ass.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSwimWinter3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.text('You strip down while Albina stands by the door, jumping up and down and shivering in the cold breeze.');
      scene.text('"Hurry up! I\'m freezing my ass off here!"');
      scene.text('"Okay okay!" You finish by pulling your panties down your legs and tossing them into the pile.');
      scene.text('"Full skinny dip, eh?" she grins as you skip out the door to join her. "Nice."');
      scene.text('<i>Brrrr! It really is cold out here!</i> you as you feel a pair of warm hands on your ass.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSwimWinter3(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterSwimWinter3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Hesitate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    scene.text('You get right up to the edge of the pool and stop. You dip your toe into the water and it sends a chilly shiver through your entire body.');
    scene.text('"You know, maybe I don\'t want to-"');
    if (((st as any).AlbinaQW ?? 0)?.['skinny_dip'] === 1) {
      scene.text('Before you can finish, Albina swiftly cracks her hand across your bare ass. A sharp sting spreads through your cheeks and you yelp just before you\'re shoved from behind. You hit the water and the shocking cold goes right through you, instantly feeling like you\'ve just been turned into a block of ice.');
      scene.text('As your head breaks through the water, Albina leaps over, splashing into the pool behind you and sending another freezing wave washing over your head. She comes up looking just as cold as you, but wearing the biggest grin you\'ve ever seen on her before.');
    } else {
      scene.text('Before you can finish, Albina shoves you from behind. The shocking cold goes right through you and you feel like you\'ve just been turned into a block of ice. As your head breaks through the water, Albina leaps over, splashing into the pool behind you and sending another freezing wave washing over your head. She comes up looking just as cold as you, but wearing the biggest grin you\'ve ever seen on her before.');
    }
    scene.text('"You bitch!" you shriek as Albina swims over to the side.');
    scene.text('"Come on!" she says with chattering teeth. "Get out before you get frostbite and jump in the hot tub with me!"');
    scene.text('The two of you swim over to the adjoining wall of the hot tub and throw yourselves over the side.');
    scene.actions([
      { label: 'Continue', goto: ['albina_house_events', 'winter_hot_tub'] },
    ]);
  } },
    { label: 'Jump in with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    scene.text('With a running start and a scream, the two of you leap into the water together. The immediate shock of ice cold sends shivers through your whole body.');
    scene.text('"Fuck!" you gasp. "Why did I let you talk me into this?!"');
    scene.text('Albina just grins at you and quickly swims over to the side, hauling herself up while clearly trembling in the cold. "Come on!" she says with chattering teeth. "Hurry up before you get frostbite!"');
    scene.text('The two of you swim over to the adjoining wall of the hot tub and throw yourselves over the side.');
    scene.actions([
      { label: 'Continue', goto: ['albina_house_events', 'winter_hot_tub'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWinterHotTub(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['hottub_count'] = ((s as any).AlbinaQW['hottub_count'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
  if (((s as any).AlbinaQW ?? 0)?.['skip_tub'] !== ((s as any).daystart ?? 0)) {
    scene.text('Your skin hits the water and you gasp for the second time, this time for the opposite reason. The difference between the icy pool and the hot tub is so extreme that it feels scalding.');
    scene.text('Regardless, you follow Albina\'s lead and sink down into it up to your neck. The burning sensation is so intense that you almost can\'t bear it for several seconds. Then, slowly, you start to become accustomed to it and your muscles begin to loosen up, your entire body relaxing in the all encompassing heat.');
    if (((s as any).AlbinaQW ?? 0)?.['skinny_dip'] === 1) {
      scene.text('"<i>Ohhhhhhh...</i>"');
      scene.text('You stretch out your body, enjoying the contrast between the chilly air and the warmth of the water as you bob up and down in it. Glancing over, you see Albina staring at you.');
      scene.text('"What?" you ask.');
    } else {
      scene.text('"<i>Ohhhhhhh...</i>"');
      scene.text('You stretch out your body, enjoying the contrast between the chilly air and the warmth of the water as you bob up and down in it. Glancing over, you see Albina smirking at you.');
      scene.text('"See? Told you it was good."');
    }
  } else {
    scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['skinny_dip'] === 1) {
      scene.text('You strip out of your clothes and pad over to join Albina in the hot tub, shivering the whole way. Starting with your toes, you carefully slip in across from Albina, closing your eyes and sighing at the intense heat.');
      scene.text('When you open them, you find Albina staring at you.');
      scene.text('"What?" you ask.');
    } else {
      scene.text('You strip out of your clothes and pad over to join Albina in the hot tub, shivering the whole way. Starting with your toes, you carefully slip in across from Albina, hissing and sighing at the intense heat.');
      scene.text('She gives you a smirk that somehow conveys both a sense of superiority and disappointment.');
      scene.text('She shakes her head while relaxing back into the tub. "You don\'t even know what you\'re missing," ');
    }
  }
  if (((s as any).AlbinaQW ?? 0)?.['skinny_dip'] === 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albina_house_events', 'winter_hot_tub_no_panties1');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Relax', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
    scene.text('The two of you spend several minutes soaking in the tub together before Albina stands up.');
    scene.text('"Come on, let\'s get out before we start pruning."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSwimShower(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWinterHotTubNoPanties1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
  scene.text('Albina grins back at you and starts wriggling around beneath the bubbling water. Her knees briefly breach the surface and a moment later, she pulls up a thin, stringy, piece of fabric. She stretches it between her hands and slingshots it past your head, making a wet slapping sound when it lands on the deck.');
  scene.text('Turning your head to see what it was, you realize as soon as you lay eyes on it: it\'s her thong.');
  scene.text('"Oh <i>fuck...</i>" she moans, leaning further into the water as she turns a dial on the side. "I should do this more often..."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albina_house_events', 'winter_hot_tub_no_panties2');
  } },
  ]);
  scene.build();
}

function enterWinterHotTubNoPanties2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
  scene.text('Albina cranks the dial hard and you gasp. Hot water is blasting directly against your pussy, softly tickling your clit. It\'s turning you on and you can feel heat spreading through your hips that <i>isn\'t</i> coming from the water.');
  scene.text('It seems to be having a similar effect on Albina, who\'s openly panting and staring at you with "fuck me" eyes. You lose track of time, but it\'s a very pleasurable experience.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax', handler: (st: GameState) => {
    qspCall(st, 'albina_house_events', 'winter_hot_tub_no_panties3');
  } },
  ]);
  scene.build();
}

function enterWinterHotTubNoPanties3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
  scene.text('After a while, Albina sighs and shuts off the tub before standing up. Her nude body radiates steam vapors in the winter cold.');
  scene.text('"Come on," she says ruefully. "Let\'s get out before we start pruning."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['albina_house_events', 'after_swim_shower'] },
  ]);
  scene.build();
}

function enterNakedSwim(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'albinahome', 'zoya_schedule');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('"It\'s pretty warm today. I think that pool of yours is calling us," you wink.');
  if (((s as any).locat ?? 0)?.['zoya'] === 8) {
    scene.text('She pouts. "It is, but Mama is sunbathing out there right now and she doesn\'t like to be disturbed unless it\'s <i>super</i> important. Maybe later?"');
    scene.text('You just nod your head. "Sure."');
    scene.actions([
      { label: 'Do something else', goto: ['albinahome', 'bedroom'] },
    ]);
  } else {
    scene.text('She smiles back at you. "You read my mind! Last one there has to suck Lesco\'s dick!"');
    scene.text('She jumps off the bed and sprints out of the room before you can even react.');
    scene.text('"Hey! Wait up!" you call out as you chase after her.');
    scene.actions([
      { label: 'Catch up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinapool.jpg');
    scene.text('By the time you catch up with her at the pool, she\'s already stripped down and tossed her clothes aside.');
    // TODO-QSP: dynamic text: "Hurry up, <<$pcs_nickname>>!" she says as she bounces up and down in excitement...
    scene.text(`"Hurry up, ${((st as any).pcs_nickname || '')}!" she says as she bounces up and down in excitement. "I want to go swimming!"`);
    scene.text('"Naked?" you ask. "What if Milena sees us? Or your mother?"');
    if (((st as any).locat ?? 0)?.['zoya'] === 4) {
      scene.text('"Milena won\'t care and Mama is at work," she replies. "Now hurry up and get naked! Or just swim in your panties if you\'re going to be so prudish!"');
    } else {
      if (((st as any).locat ?? 0)?.['zoya'] === 7) {
        scene.text('"Milena won\'t care and Mama is in the city," she replies. "Now hurry up and get naked! Or just swim in your panties if you\'re going to be so prudish!"');
      } else {
        scene.text('She brushes off your concerns without much thought. "They won\'t care! Now hurry up and get naked! Or just swim in your panties if you\'re going to be so prudish!"');
      }
    }
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinapool.jpg');
    scene.text('You start undressing and neatly place your clothes aside, as opposed to the messy pile that Albina has left behind.');
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.text('Your lack of panties doesn\'t go unnoticed by Albina.');
      scene.text('"Why are you acting so prudish about getting naked when you\'re not even wearing any panties? Now hurry up and get in the pool with me!"');
      scene.text('You join her at the edge of the pool, the warm sun heating your naked skin.');
      scene.actions([
        { label: 'Jump into the water', goto: ['albina_house_events', 'naked_swim1'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Moment of truth, <<$pcs_nickname>>," she says. "Are the panties coming off or n...
      scene.text(`"Moment of truth, ${((st as any).pcs_nickname || '')}," she says. "Are the panties coming off or not?"`);
      scene.text('You hesitate as you decide what to do. Lost in your decision making, you don\'t notice Albina walking around behind you...');
      scene.text('You shriek when you suddenly feel your panties being pulled down to your ankles and look down at a grinning Albina.');
      // TODO-QSP: dynamic text: "Too slow, <<$pcs_nickname>>. Trust me, swimming naked in weather like this is o...
      scene.text(`"Too slow, ${((st as any).pcs_nickname || '')}. Trust me, swimming naked in weather like this is one of the best feelings ever!"`);
      scene.text('You step out of your panties before you join her at the edge of the pool, the warm sun heating your naked skin.');
      scene.actions([
        { label: 'Jump into the water', goto: ['albina_house_events', 'naked_swim1'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNakedSwim1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier1', 30, 'stren', 'vital');
  (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 5) + 0));
  qspCall(s, 'albinahome', 'zoya_schedule');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/nakedswim.jpg');
  scene.text('You jump into the pool with Albina, the refreshing water cooling your sun soaked skin as you surface to see Albina grinning at you.');
  scene.text('"What did I tell you? Best feeling ever, right?"');
  scene.text('The two of you start swimming and floating around the pool together. Despite her occasionally splashing you with water, it was a good workout and you feel rather refreshed as you both swim up to the edge of the pool.');
  if (((s as any).locat ?? 0)?.['zoya'] === 3  ||  ((s as any).locat ?? 0)?.['zoya'] === 5) {
    scene.text('Albina starts climbing out of the water. "Come on, we should get out befo-"');
    scene.text('"Just what do you think you\'re doing, young lady?!"');
    scene.text('Zoya\'s soft, yet booming voice cuts through the ripples of the water as you instinctively try to hide your naked body under the water.');
    scene.text('"We were just swimming to cool off, Mama!" Albina replies as she strains the water from her hair.');
    // TODO-QSP: dynamic text: Zoya just sighs. "You don''t need to do it <i>naked</i>, Albina!" she states as ...
    scene.text(`Zoya just sighs. "You don't need to do it <i>naked</i>, Albina!" she states as she pulls some towels out of the nearby storage unit. "Put this on and go for a shower! I don't want to catch you doing this again. The same goes for you too, ${((s as any).pcs_firstname || '')}."`);
    scene.text('You can feel your cheeks burning in embarrassment as you climb out of the water and wrap yourself in the towel that Zoya offers you before dashing to one of the guest bathrooms.');
    scene.actions([
      { label: 'Shower', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['shampoo'] = ((st as any).mc_inventory['shampoo'] ?? 0) + (1);
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You enter the bathroom and place your clothes in a neat pile before you turn the shower on and lock the door as you wait for the water to warm up. When it\'s the right temperature, you step in and start washing yourself.');
    scene.text('A lot of expensive looking stuff litters the shelves, but you limit yourself to using only what you need.');
    qspCall(st, 'din_van', 'showerdin');
    scene.text('After giving yourself a thorough wash, you turn the water off and step out. You find a towel and dry yourself before getting dressed.');
    scene.text('Once you\'re finished, you step out into the hallway, walk down to Albina\'s bedroom and knock on the door. She tells you to enter.');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/nudealbina.jpg');
    scene.text('You enter the room and are taken aback slightly when you find a nude Albina laying on her bed with her legs spread as she sucks on her wet fingers. She smiles at you knowingly, but doesn\'t say anything.');
    scene.text('It\'s obvious that she was rubbing one out before you disturbed her, but she doesn\'t seem to care and stands up and walks over to her closet. She slides on a lacy white thong and skimpy tank top.');
    // TODO-QSP: dynamic text: "Don''t act all shy, <<$pcs_nickname>>," she grins. "It''s nothing you haven''t ...
    scene.text(`"Don't act all shy, ${((st as any).pcs_nickname || '')}," she grins. "It's nothing you haven't seen before."`);
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('Albina starts climbing out of the water. "Come on, we should get out and shower before Mama sees us."');
    scene.text('You follow her lead and she offers you a towel to dry off. Once you\'re done, you gather up your clothes while Albina simply tosses her towel aside and strolls back into the house entirely naked with a lot of sway in her hips.');
    scene.text('You don\'t even have time to get dressed before she starts calling after you. Blushing a little, you walk back into the house naked as well.');
    scene.actions([
      { label: 'Follow her', goto: ['albina_house_events', 'after_swim_shower'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterSwimShower(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 4) + 0) === 0  &&  (((s as any).locat ?? 0)?.['zoya'] === 4  ||  ((s as any).locat ?? 0)?.['zoya'] === 6  ||  ((s as any).locat ?? 0)?.['zoya'] === 7)) {
    scene.actions([
      { label: 'Continue', goto: ['albina_wine_event', 'wine_invite'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('The two of you walk through her house, leaving a trail of droplets and wet footprints until you end up just outside Albina\'s room.');
    scene.text('"The guest bathroom is just down the hall on the left. That is..." She trails off, looking you dead in the eye with a mischievous smile. "... unless you want to join me in the bath? It\'s big enough for two..."');
    scene.text('That twinkle is back in her eye again and you reflexively swallow, knowing exactly what will happen if you take her up on the offer.');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You turn down her offer and she looks a little disappointed, but directs you to one of the guest bathrooms anyway.');
    scene.text('"Use whatever you want in there. There\'s towels in the cupboard," she says before disappearing into her bedroom.');
    scene.text('You walk down to the bathroom, enter and place your clothes in a neat pile. You turn the shower on and lock the door as you wait for the water to warm up. When it\'s the right temperature, you step in and start washing yourself.');
    scene.actions([
      { label: 'Shower', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['shampoo'] = ((st as any).mc_inventory['shampoo'] ?? 0) + (1);
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('A lot of expensive looking stuff litters the shelves, but you limit yourself to using only what you need.');
    qspCall(st, 'din_van', 'showerdin');
    scene.text('After giving yourself a thorough wash, you turn the water off and step out. You find a towel and dry yourself before getting dressed.');
    scene.text('Once you\'re finished, you step out into the hallway, walk down to Albina\'s bedroom and knock on the door. She tells you to enter.');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/nudealbina.jpg');
    scene.text('You enter the room and are taken aback slightly when you find a nude Albina laying on her bed with her legs spread as she sucks on her wet fingers. She smiles at you knowingly, but doesn\'t say anything. It\'s obvious that she was rubbing one out before you disturbed her, but she doesn\'t seem to care and stands up and walks over to her closet.');
    scene.text('She slides on a lacy white thong and skimpy tank top and walks out. "My favourite show is about to start. I think you\'ll like it."');
    scene.actions([
      { label: 'Go and watch TV', goto: ['albina_house_events', 'tv_1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/bathroom.jpg');
    scene.text('"Sure," you say, returning her smile. "Why not?" Her smile turns into a grin and she grabs your hand, pulling you through her bedroom and into the bathroom.');
    scene.text('Once inside, she releases you, bending over to turn on the water. She seems to be a little far away, needing to stretch to reach it. You can see all of the muscles in her toned legs go taut and her posture gives you a great view of both her holes. She hesitates just before turning the tap, glancing back at you, and you realize she\'s doing this on purpose. Shit. What are you getting yourself into here?');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/bathroom.jpg');
    scene.text('She turns the faucet and steaming water immediately comes rushing out. She must pay a lot of money to have such good plumbing. As the tub begins to fill, you see her grab various bottles, squeezing a small squirt of liquid from each into the tumbling waterfall. They don\'t seem to change the color of the water or add any bubbles, but a sharp aromatic scent immediately spreads through the room. She also grabs a few handfuls of salt, sprinkling them generously into the tub.');
    scene.text('"Some of the best muscle relaxant money can buy. You\'ll feel like a brand new woman when we\'re finished," she smiles while stepping into the bath, one shapely leg at a time. She kneels in the water as she gives you an innocent look while flaunting her perky breasts. "Well? Are you just going to stare or are you getting in?"');
    scene.text('Unable to resist her teasing, you smile and climb into the bath beside her, the warm water immediately relaxing your muscles. She wasn\'t kidding about whatever it was she put in here!');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 2, 'lesbian', 'no_orgasm_msg');
    qspCall(st, 'arousal', 'cuni_give', (-2), 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/bathroom/1.jpg');
    scene.text('You immediately start passionately making out and groping each other\'s bodies, covering each other\'s breasts with soapy water before she breaks the kiss and sits up on the edge of the bath, beckoning you over with her finger as she spreads her legs.');
    scene.text('You smile at her before you slide underneath her and start gently tracing your tongue along her pussy before you reach her clit. You then start licking and sucking on her clit, causing her to throw her head back as she moans in pleasure.');
    // TODO-QSP: dynamic text: The minutes go by and you continue teasing Albina''s clit before she suddenly gr...
    scene.text(`The minutes go by and you continue teasing Albina's clit before she suddenly grabs the back of your head and starts grinding against you, smearing you with her wetness. "Don't stop, ${((st as any).pcs_nickname || '')}! I'm going to cum!"`);
    scene.text('A few seconds later, she pushes you away and vigorously rubs her clit before bucking her hips and screaming loudly as her juices squirt all over both you and the bathtub. When she finishes, you start licking the juices that drip from her pussy as she rides through her orgasm with a satisfied smile on her face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', (-2), 'lesbian', 'no_orgasm_msg');
    qspCall(st, 'arousal', 'vaginal_finger', (-2), 'no_orgasm_msg');
    qspCall(st, 'arousal', 'cuni', (-2), 'no_orgasm_msg');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/bathroom/2.jpg');
    scene.text('You sit up and make out with her before she slides back into the water and you take her place on the edge of the tub. You lean back and Albina spreads your legs and smiles up at you before she slowly starts rubbing your clit, eliciting a soft moan from you before she slides her finger into your pussy.');
    scene.text('She slowly fingers you before inserting a second finger, making you moan even louder. She then starts fingerbanging you, causing you to shriek loudly in pleasure. After a few minutes of this, she pulls her fingers out and holds them up to your mouth. You take them into your mouth and suck them, getting a good taste of yourself as she grins at you before sliding back down.');
    scene.text('You gasp loudly in pleasured surprise when you suddenly feel her tongue piercing swirling over your clit and look down to see her grinning up at you. You place your hand on the back of her head and hold her down as you sit back and let her pleasure you, her tongue expertly flicking and rolling over your clit as she passionately eats your pussy. She\'s <i>really</i> good at this and her piercing only adds to your pleasure.');
    scene.text('You don\'t want her to stop and feel your orgasm building when she suddenly shoves her fingers back inside you and starts vigorously fingerbanging you as she sucks on your clit.');
    scene.text('A few minutes of this is enough to send you over the edge and you scream loudly in pleasure as you have an explosive orgasm, smearing Albina\'s face with your wetness.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 2, 'no_orgasm_msg');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/bathroom/3.jpg');
    scene.text('Once you finish riding through your orgasm, you slide back down into the water with her and you both start passionately making out and groping each other\'s bodies again. After a few minutes of this, you both climb out of the tub and she pulls the plug before grabbing a towel and walking out to her room, leaving you to get dressed.');
    // TODO-QSP: dynamic text: You grab yourself a towel and dry off before getting dressed. When you walk into...
    scene.text(`You grab yourself a towel and dry off before getting dressed. When you walk into Albina's room, you're greeted by the sight of her wearing only a skimpy thong as she dries her hair. "Just give me a few seconds to get dressed and we can do something, ${((st as any).pcs_nickname || '')}."`);
    scene.text('She finishes drying her hair and pulls on an equally skimpy tank top before leading you out the door. "My favourite show is about to start. I think you\'ll like it."');
    scene.actions([
      { label: 'Go and watch TV', goto: ['albina_house_events', 'tv_1'] },
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
  // TODO-QSP: end
  scene.build();
}

function enterHotTubAsk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'albinahome', 'zoya_schedule');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('"You fancy going for a dip in the hot tub?" you ask.');
  if (((s as any).locat ?? 0)?.['zoya'] === 8) {
    scene.text('She pouts. "It is, but Mama is sunbathing out there right now and she doesn\'t like to be disturbed unless it\'s <i>super</i> important. Maybe later?"');
    scene.text('You just nod your head. "Sure."');
    scene.actions([
      { label: 'Do something else', goto: ['albinahome', 'bedroom'] },
    ]);
  } else {
    scene.text('She smiles back at you. "You read my mind! Last one there has to suck Lesco\'s dick!"');
    scene.text('She jumps off the bed and sprints out of the room before you can even react.');
    scene.text('"Hey! Wait up!" you call out as you chase after her.');
    scene.actions([
      { label: 'Chase after her', goto: ['albina_house_events', 'hot_tub2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHotTub1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  // TODO-QSP: dynamic text: As you walk up to the door, it opens and Albina excitedly greets you. She''s wea...
  scene.text(`As you walk up to the door, it opens and Albina excitedly greets you. She's wearing a short silk robe that ends just below her groin. "${((s as any).pcs_nickname || '')}! You want to jump in my hot tub?"`);
  scene.text('A hot tub sounds pretty good right now, so you nod your head and she leads you through the house.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/albinahome/pool.jpg');
    }
    scene.text('When you reach the pool out back, you see a large hot tub attached. Albina turns the jets on and slips off her robe to reveal she\'s only wearing a tiny black thong. She climbs in and takes a seat, sighing as she does. She looks at you and beckons you to join her.');
    // TODO-QSP: dynamic text: "Don''t worry about your panties getting wet <<$pcs_nickname>>," she says. "I''l...
    scene.text(`"Don't worry about your panties getting wet ${((st as any).pcs_nickname || '')}," she says. "I'll give you something to wear until they dry."`);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'albina_house_events', 'hot_tub3');
  } },
  ]);
  scene.build();
}

function enterHotTub2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
  } else {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool.jpg');
  }
  scene.text('The two of you start heading towards the pool and Albina strips the whole way there, tossing her clothes randomly aside without a care. By the time you reach the back door, she\'s down to just her thong.');
  scene.text('She opens the door before she struts over to the hot tub and climbs in, sighing as she does. She looks at you and beckons you to join her.');
  // TODO-QSP: dynamic text: "Don''t worry about your panties getting wet <<$pcs_nickname>>," she says. "I''l...
  scene.text(`"Don't worry about your panties getting wet ${((s as any).pcs_nickname || '')}," she says. "I'll give you something to wear until they dry."`);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspGoto(s, 'albina_house_events', 'hot_tub3');
  // TODO-QSP: end
  scene.build();
}

function enterHotTub3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Strip down', goto: ['albina_house_events', 'hot_tub_no_panties'] },
    ]);
  } else {
    scene.actions([
      { label: 'Get in', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
    scene.text('You smile and peel off the rest of your clothes until you\'re left in just your panties and climb in across from her as she closes her eyes, leaning back and relaxing. "This is the fucking life, am I right?"');
    scene.text('You murmur in agreement and you both spend quite a bit of time in the tub relaxing and chatting away.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albinahome', 'zoya_schedule');
    if (((st as any).locat ?? 0)?.['zoya'] !== 3  &&  ((st as any).locat ?? 0)?.['zoya'] !== 5) {
      scene.text('After a while, Albina climbs out and peels off her wet thong before walking over to the side where a stack of folded towels sit. You climb out after her and she tosses you one of the towels before the two of you dry off together.');
      scene.text('Right next to the towels are some robes and Albina hands you one of those as well before shrugging into one herself. "My favourite show is about to start. I think you\'ll like it."');
      scene.text('She motions for you to follow her to the sitting room. Putting the robe on, you follow her.');
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['robe'] = 1;
      scene.actions([
        { label: 'Go and watch TV', goto: ['albina_house_events', 'tv_2'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
      scene.text('Albina has a look in her eye - she\'s horny. You see her clearly slide her hand down her thong and start rubbing her clit.');
      scene.text('"You\'ll take any opportunity to be as naked as possible, won\'t you?"');
      scene.text('You both turn in shock and see Zoya standing there, shaking her head as she throws some towels at you. "Well next time, can you bring the towels with you <i>before</i> you get in? I don\'t want you ruining the carpets by dripping water all over them!"');
      scene.text('She walks back into the house and Albina rolls her eyes, climbs out and dries herself off before wrapping herself back in her robe.');
      scene.text('"Mama will have a fit if you go in there naked, so you better get dressed," she warns as she passes you a towel. "You\'ll just have to make do without your panties for now."');
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/albinahome/pool.jpg');
    }
    if (((st as any).PCloDress ?? 0) === 1) {
      scene.text('"So she\'s okay with us being topless out here?" you inquire, struggling to tug your dry dress down over your wet shoulders.');
    } else {
      if (((st as any).PCloSkirt ?? 0) > 0) {
        scene.text('"So she\'s okay with us being topless out here?" you ask, struggling to tug your dry top over your wet skin.');
      } else {
        scene.text('"So she\'s okay with us being topless out here?" you ask, struggling to tug your dry pants up your wet legs.');
      }
    }
    scene.text('"She\'s protective of me, but she would be a hypocrite if she told me to wear something," Albina smiles. "She sunbathes topless out here all the time. But not nude. So that\'s the difference."');
    scene.text('You nod and finish dressing and walk back into the house. Albina leads you into the sitting room and sits on the sofa before turning the TV on and beckoning for you to sit down.');
    scene.text('"My favourite show is about to start. I think you\'ll like it."');
    scene.actions([
      { label: 'Go and watch TV', goto: ['albina_house_events', 'tv_2'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
      { label: 'Take your panties off', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
    scene.text('You decide you\'d rather skinny dip than go home with wet underwear and move to take them off as well. Though normally rather daring around you, Albina\'s eyes go wide in shock as you tug your panties down your legs and toss them with the rest of your disregarded clothing.');
    scene.text('It only takes her a moment to recover and she immediately starts wriggling around beneath the water as you step into the tub. A few seconds later, she pulls up her thong, grinning at you as she slingshots it onto the deck with a wet slap.');
    // TODO-QSP: dynamic text: "Oh <i>fuck</i>..." she moans softly. "Good choice, <<$pcs_nickname>>. This is <...
    scene.text(`"Oh <i>fuck</i>..." she moans softly. "Good choice, ${((st as any).pcs_nickname || '')}. This is <i>much</i> better..."`);
    scene.text('You soon realise what she means when you sit down and instantly feel the jets of warm water softly tickling your clit. It\'s slowly turning you on and you can feel your pussy flowing in response to the stimulation.');
    scene.text('It seems to have the same effect on Albina, who reaches over and turns up the bubbles even more. You lose track of time, but it\'s a very pleasurable experience.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'albinahome', 'zoya_schedule');
    if (((st as any).locat ?? 0)?.['zoya'] !== 3  &&  ((st as any).locat ?? 0)?.['zoya'] !== 5) {
      scene.text('After a while, Albina climbs out and struts over to the side where a stack of folded towels sit. You climb out after her and she tosses you one of the towels before the two of you dry off together.');
      scene.text('Right next to the towels are some robes and Albina hands you one of those as well before shrugging into one herself. "My favourite show is about to start. I think you\'ll like it."');
      scene.text('She motions for you to follow her to the sitting room. Putting the robe on, you follow her.');
      scene.actions([
        { label: 'Go and watch TV', goto: ['albina_house_events', 'tv_2'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
      scene.text('Albina has a look in her eye - she\'s horny. You clearly see her hand slither down between her legs as she locks eyes with you, biting her lip in obvious pleasure before her eyes go wide and she sits up straight.');
      scene.text('"You\'ll take any opportunity to be as naked as possible, won\'t you?"');
      scene.text('You turn in shock and see Zoya standing behind you, shaking her head as she throws some towels at you.');
      scene.text('"Well I think you two have had enough. Time to get out."');
      scene.text('She walks back into the house and Albina rolls her eyes, but obeys, climbing out of the tub and walking over to the side where a stack of folded towels sit.');
      scene.text('You climb out after her and she tosses you one of the towels before the two of you dry off together.');
      scene.text('"Mama will have a fit if you go in there naked, so you better get dressed," she warns as she passes you a towel.');
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/albinahome/pool.jpg');
    }
    if (((st as any).PCloDress ?? 0) === 1) {
      scene.text('"So she\'s okay with us being topless out here?" you inquire, struggling to tug your dry dress down over your wet shoulders.');
    } else {
      if (((st as any).PCloSkirt ?? 0) > 0) {
        scene.text('"So she\'s okay with us being topless out here?" you ask, struggling to tug your dry top over your wet skin.');
      } else {
        scene.text('"So she\'s okay with us being topless out here?" you ask, struggling to tug your dry pants up your wet legs.');
      }
    }
    scene.text('"She\'s protective of me, but she would be a hypocrite if she told me to wear something," Albina smiles. "She sunbathes topless out here all the time. But not nude. So that\'s the difference."');
    scene.text('You nod and finish dressing and walk back into the house. Albina leads you into the sitting room and sits on the sofa before turning the TV on and beckoning for you to sit down.');
    scene.text('"My favourite show is about to start. Want to watch it with me?"');
    scene.actions([
      { label: 'Go and watch TV', goto: ['albina_house_events', 'tv_2'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHotTubNoPanties(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
  scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
  scene.text('Stripping out of your clothes, you toss them in a pile on the floor.');
  // TODO-QSP: dynamic text: "No panties, <<$pcs_nickname>>? How <i>daring</i> of you!" Albina teases.
  scene.text(`"No panties, ${((s as any).pcs_nickname || '')}? How <i>daring</i> of you!" Albina teases.`);
  if (((s as any).albina ?? 0)?.['commando_know'] === 3) {
    scene.text('"You already know I don\'t wear them," you smirk back.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['commando_know'] > 0) {
      scene.text('"You already know I consider panties to be optional," you smirk back.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
        scene.text('"I hate wearing panties," you smirk, stepping into the tub with her.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0) {
          scene.text('"I don\'t always wear them," you smirk back, stepping into the tub with her.');
        } else {
          scene.text('"I uhh, may have forgotten to wear them today..." you blush before stepping into the tub with her.');
        }
      }
    }
  }
  if (((s as any).albina ?? 0)?.['commando_know'] === 0  &&  ((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGoodieTwoShoes(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHotTubNoPanties2(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['commando_know'] = ((s as any).trait_vars ?? 0)?.['panty_preference'];
  // TODO-QSP: end
  scene.build();
}

function enterHotTubNoPanties2(s: GameState, scene: SceneBuilder): void {
  scene.text('Albina grins back at you and starts wriggling around beneath the bubbling water. Her knees briefly breach the surface and a moment later, she pulls up a thin, stringy, piece of fabric. She stretches it between her hands and slingshots it past your head, making a wet slapping sound when it lands on the deck.');
  scene.text('Turning your head to see what it was, you realize as soon as you lay eyes on it: it\'s her thong. As you turn back, Albina takes a sharp gasp.');
  scene.text('"Oh <i>fuck...</i>" she moans, leaning further into the water. "I should do this more often..."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHotTubNoPanties3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHotTubNoPanties3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/hottub.jpg');
    scene.text('You think she\'s just teasing you until you sit down and gasp yourself. Hot water blasts directly across your pussy, softly tickling your clit. It\'s turning you on and you can feel heat spreading through your hips that <i>isn\'t</i> coming from the water.');
    scene.text('It seems to have the same effect on Albina, who reaches over and turns up the bubbles even more. She gives you a voyeuristic smile and openly panting to show you she\'s getting off on this too. You lose track of time, but it\'s a very pleasurable experience.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHotTubNoPanties4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterHotTubNoPanties4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    qspCall(st, 'albinahome', 'zoya_schedule');
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('After a while, you look up and see Albina has a mischievous twist in her lips. She slides through the water towards you and you feel her hand on your leg. It begins trailing up your leg until her fingers are right on top of your pussy. A finger starts to push its way in and-');
    if (((st as any).locat ?? 0)?.['zoya'] === 3  ||  ((st as any).locat ?? 0)?.['zoya'] === 5) {
      scene.text('"What on earth are you two doing?!"');
      scene.text('You jump back from each other and turn, seeing Albina\'s mother behind you.');
      scene.text('"Are you <i>naked</i>??" she scowls, eyeing Albina\'s thong on the deck. "This is very unhygenic! Hot tubs are full of bacteria. And who knows who could have seen you?! Don\'t move young lady!" she barks before she disappears into the house.');
      scene.text('She returns a few minutes later with some towels and throws them at you before walking back into the house. Albina just rolls her eyes, but climbs out and dries herself with one of the towels.');
      scene.text('"Mama will have a fit if you went in there naked, so you better get dressed," she warns as she passes you the other one.');
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/albinahome/pool.jpg');
    }
    if (((st as any).PCloDress ?? 0) === 1) {
      scene.text('"Just our luck for your mother to catch us skinny dipping!" you laugh, struggling to tug your dry dress down over your wet shoulders.');
    } else {
      if (((st as any).PCloSkirt ?? 0) > 0) {
        scene.text('"Just our luck for your mother to catch us skinny dipping!" you laugh, struggling to tug your dry top over your moist skin.');
      } else {
        scene.text('"Just our luck for your mother to catch us skinny dipping!" you laugh, struggling to tug your dry pants up your still-moist legs.');
      }
    }
    scene.text('"Totally worth it. We should do it again sometime. I <i>really</i> enjoyed it..." she winks suggestively, leaving her wet towel on the deck and shrugging into her robe.');
    scene.text('You finish dressing before walking back into the house, Albina leads you into the sitting room and drops down on the sofa. ');
    scene.text('She turns the TV on and beckons for you to sit down. "My favourite show is about to start. I think you\'ll like it."');
    scene.actions([
      { label: 'Watch TV', goto: ['albina_house_events', 'tv_2'] },
    ]);
  } },
      ]);
    } else {
      scene.text('She abruptly pulls away. "Not here. Mama or Milena will see us..."');
      scene.text('She climbs out and walks over to the side where a stack of folded towels sit. You climb out after her and she tosses you one of the towels before the two of you dry off together.');
      scene.text('Right next to the towels are some robes and Albina hands you one of those as well before shrugging into one herself. "My favourite show is about to start. I think you\'ll like it."');
      scene.text('She motions for you to follow her to the sitting room. Putting the robe on, you follow her.');
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['robe'] = 1;
      scene.actions([
        { label: 'Go and watch TV', goto: ['albina_house_events', 'tv_2'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterGoodieTwoShoes(s: GameState, scene: SceneBuilder): void {
  scene.text('A look of genuine surprise flashes across Albina\'s face. Her eyebrows scrunch together and she begins to study you more closely.');
  scene.text('"You know," she starts. "Before we became friends, I always thought you were a stuck up goodie two shoes. But you\'re actually kind of a slut, aren\'t you?"');
  if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0) {
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['goodie_two_shoes_commando'] = 1;
    scene.actions([
      { label: 'Guess you didn\'t know me', handler: (st: GameState) => {
    scene.text('"Guess you didn\'t know me so well back then," you shrug while smiling.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHotTubNoPanties2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Rebellious phase', handler: (st: GameState) => {
    scene.text('"I\'m going through my rebellious phase right now," you grin mischievously.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHotTubNoPanties2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Protest', handler: (st: GameState) => {
    scene.text('"I\'m not-" you stammer, blush deepening. "I told you, I just-"');
    // TODO-QSP: dynamic text: "Forgot?" she laughs. "Not even I ''forget'' to wear panties, <<$pcs_nickname>>....
    scene.text(`"Forgot?" she laughs. "Not even I 'forget' to wear panties, ${((st as any).pcs_nickname || '')}. Only a slut would forget."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHotTubNoPanties2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Offended', handler: (st: GameState) => {
    scene.text('"Look who\'s talking, bitch!" you scowl, making her laugh out loud.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHotTubNoPanties2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterTv_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/watchtv.jpg');
  scene.text('Albina grabs some snacks from the kitchen before leading you into the sitting room. You sit with her on the sofa as the show starts. It\'s some American medical drama that\'s been dubbed into Russian. Albina gets really engrossed in it, telling you everything she thinks you need to know about the plot and the characters.');
  scene.text('As the ending credits scroll, she turns to you with an excitement you never see, not even when she\'s dancing. "So, what did you think?"');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'It was cool', handler: (st: GameState) => {
    qspCall(st, 'albinahome', 'zoya_schedule');
    scene.img('images/locations/pavlovsk/resident/albinahome/watchtv.jpg');
    scene.text('"It was actually quite cool," you reply. "I might start watching it myself."');
    if (((st as any).locat ?? 0)?.['zoya'] === 5) {
      scene.text('She smiles, seemingly over the moon at your answer, and opens her mouth to speak when her mother walks in, clothed in a bathrobe with her hair wrapped in a towel. She takes one look at the two of you and sighs.');
      scene.text('"What have I told you about strutting around here in your underwear, young lady? I\'m going to get a glass of wine; you better be wearing something decent when I come back!"');
      scene.text('She doesn\'t bother waiting for a reply and leaves without another word.');
      scene.text('Albina completely ignores her directive and gets comfortable on the sofa, flicking through the channels to find something to watch. Unfortunately, she doesn\'t succeed and the two of you end up randomly channel surfing until Zoya reappears.');
      scene.text('She glares at Albina, tightly gripping the stem of her glass as she reaches into a nearby pile of clothes and rifles through it before throwing a pair of booty shorts at Albina.');
      scene.text('"Put these on. Don\'t you dare ignore me again or there will be consequences, young lady!"');
      scene.text('"Ugh! Why does it even matter, Mama? This is <i>our</i> house!"');
      scene.text('"Don\'t you talk back to me, Albina!"');
      scene.text('You take that as your cue to leave and awkwardly bid them farewell. Even once you reach the front door, you can still hear mother and daughter arguing about the latter\'s indecency.');
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['visiting'] = 0;
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('She smiles, seemingly over the moon at your answer.');
      scene.text('"This was fun. Do you want to go back to my room and do something... or <i>someone</i> else now?" she grins.');
      scene.actions([
        { label: 'Sure', handler: (st: GameState) => {
    scene.text('You nod and she switches the TV off before you head back upstairs to her bedroom.');
    scene.actions([
      { label: 'Find something else to do', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
        { label: 'I should go', handler: (st: GameState) => {
    scene.text('You shake your head. "It\'s time for me to go."');
    scene.text('She nods her head and you hug her goodbye before leaving.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
    { label: 'It was okay', handler: (st: GameState) => {
    qspCall(st, 'albinahome', 'zoya_schedule');
    scene.img('images/locations/pavlovsk/resident/albinahome/watchtv.jpg');
    scene.text('It was okay, I guess. Not really my kind of thing," you reply.');
    if (((st as any).locat ?? 0)?.['zoya'] === 5) {
      scene.text('Albina looks a little disheartened and opens her mouth to say something when her mother walks in, clothed in a bathrobe with her hair wrapped in a towel. She takes one look at the two of you and sighs.');
      scene.text('"What have I told you about strutting around here in your underwear, young lady? I\'m going to get a glass of wine; you better be wearing something decent when I come back!"');
      scene.text('She doesn\'t bother waiting for a reply and leaves without another word.');
      scene.text('Albina completely ignores her directive and gets comfortable on the sofa, flicking through the channels to find something to watch. Unfortunately, she doesn\'t succeed and the two of you end up randomly channel surfing until Zoya reappears.');
      scene.text('She glares at Albina, tightly gripping the stem of her glass as she reaches into a nearby pile of clothes and rifles through it before throwing a pair of booty shorts at Albina.');
      scene.text('"Put these on. Don\'t you dare ignore me again or there will be consequences, young lady!"');
      scene.text('"Ugh! Why does it even matter, Mama? This is <i>our</i> house!"');
      scene.text('"Don\'t you talk back to me, Albina!"');
      scene.text('You take that as your cue to leave and awkwardly bid them farewell. Even once you reach the front door, you can still hear mother and daughter arguing about the latter\'s indecency.');
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['visiting'] = 0;
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('Albina looks a little disheartened as she turns to you.');
      scene.text('"Well, I had fun anyway. Do you want to go back to my room and do something... or <i>someone</i> else now?" she grins.');
      scene.actions([
        { label: 'Sure', handler: (st: GameState) => {
    scene.text('You nod and she switches the TV off before you head back upstairs to her bedroom.');
    scene.actions([
      { label: 'Find something else to do', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
        { label: 'I should go', handler: (st: GameState) => {
    scene.text('You shake your head. "It\'s time for me to go."');
    scene.text('She nods her head and you hug her goodbye before leaving.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterTv_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/watchtv.jpg');
  scene.text('You sit down on the sofa in front of the TV as the show starts. It\'s some American medical drama that\'s been dubbed into Russian. Albina gets really engrossed in it, telling you everything she thinks you need to know about the plot and the characters.');
  scene.text('As the ending credits scroll, she turns to you with an excitement you never see, not even when she\'s dancing. "So, what did you think?"');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'It was cool', handler: (st: GameState) => {
    qspCall(st, 'albinahome', 'zoya_schedule');
    scene.img('images/locations/pavlovsk/resident/albinahome/watchtv.jpg');
    scene.text('"It was actually quite cool," you reply. "I might start watching it myself."');
    if (((st as any).locat ?? 0)?.['zoya'] === 5) {
      scene.text('She smiles, seemingly over the moon at your answer, and is about to speak when her mother enters the room, holding a glass of wine in her hand with a stack of papers tucked under her arm. She places the papers on the table before she sits next to Albina.');
      scene.text('"Are you watching that god awful American show again? I don\'t get what you like about it considering how inaccurate it is," she sighs.');
      scene.text('From someone else it might have seemed like a genuine criticism, but when Zoya says it, she leans in and hugs her daughter close, giving her a kiss on the head.');
      scene.text('"It\'s not awful! You just don\'t get it," Albina protests, snuggling closer to her mother. Looks like they\'re settling in for some mother-daughter time and you decide it\'s time for you to leave, bidding them farewell.');
      if (((st as any).AlbinaQW ?? 0)?.['robe'] === 1) {
        scene.text('You gather up your clothes and head off to the bathroom to get changed, leaving the robe in Albina\'s room before you quietly leave the house.');
      }
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['robe'] = 0;
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['visiting'] = 0;
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('She smiles, seemingly over the moon at your answer.');
      scene.text('"This was fun. Do you want to go back to my room and do something... or <i>someone</i> else now?" she grins.');
      scene.actions([
        { label: 'Sure', handler: (st: GameState) => {
    scene.text('You nod and she switches the TV off before you head back upstairs to her bedroom.');
    scene.actions([
      { label: 'Find something else to do', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
        { label: 'I should go', handler: (st: GameState) => {
    scene.text('You shake your head. "It\'s time for me to go."');
    scene.text('She nods her head and you hug her goodbye before leaving.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
    { label: 'It was okay', handler: (st: GameState) => {
    qspCall(st, 'albinahome', 'zoya_schedule');
    scene.img('images/locations/pavlovsk/resident/albinahome/watchtv.jpg');
    scene.text('"It was okay, I guess. Not really my kind of thing," you reply.');
    if (((st as any).locat ?? 0)?.['zoya'] === 5) {
      scene.text('Albina looks a little disheartened, but before she can speak, her mother enters the room, holding a glass of wine in her hand with a stack of papers tucked under her arm. She places the papers on the table before she sits next to Albina.');
      scene.text('"Are you watching that god awful American show again? I don\'t get what you like about it considering how inaccurate it is," she sighs.');
      scene.text('From someone else it might have seemed like a genuine criticism, but when Zoya says it, she leans in and hugs her daughter close, giving her a kiss on the head.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>> said the same thing! You two just don''t get it," Albina prot...
      scene.text(`"${((st as any).pcs_nickname || '')} said the same thing! You two just don't get it," Albina protests, snuggling closer to her mother. Looks like they're settling in for some mother-daughter time and you decide it's time for you to leave, bidding them farewell.`);
      if (((st as any).AlbinaQW ?? 0)?.['robe'] === 1) {
        scene.text('You gather up your clothes and head off to the bathroom to get changed, leaving the robe in Albina\'s room before you quietly leave the house.');
      }
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['robe'] = 0;
      ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['visiting'] = 0;
      scene.actions([
        { label: 'Go home', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('Albina looks a little disheartened as she turns to you.');
      scene.text('"Well, I had fun anyway. Do you want to go back to my room and do something... or <i>someone</i> else now?" she grins.');
      scene.actions([
        { label: 'Sure', handler: (st: GameState) => {
    scene.text('You nod and she switches the TV off before you head back upstairs to her bedroom.');
    scene.actions([
      { label: 'Find something else to do', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
        { label: 'I should go', handler: (st: GameState) => {
    scene.text('You shake your head. "It\'s time for me to go."');
    scene.text('She nods her head and you hug her goodbye before leaving.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterAssTooBig(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['extra_event'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/resident/albinahome/butt.jpg');
  scene.text('You walk into Albina\'s room and find her wearing a skimpy schoolgirl outfit that shows off her bubble butt quite nicely. She\'s checking herself out in her mirror and seems to like what she\'s seeing.');
  // TODO-QSP: dynamic text: "Oh hey, <<$pcs_nickname>>," she says with a smile. "Tell me, does my ass look b...
  scene.text(`"Oh hey, ${((s as any).pcs_nickname || '')}," she says with a smile. "Tell me, does my ass look big in this?" she asks and wiggles her ass at you.`);
  scene.text('You\'re not sure what to say and she just laughs. "I know, I know. My ass looks fucking great in this! I\'m going to wear it for Lazar next time he\'s here..." she says with a wink and proceeds to strip from the outfit and place it in her closet before putting her regular clothes back on.');
  scene.text('"So what do you want to do?" she asks as she finishes pulling her top on.');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['albinahome', 'bedroom'] },
  ]);
  scene.build();
}

function enterDancing(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['extra_event'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/resident/albinahome/dance.mp4');
  scene.text('As you make your way up the stairs, you hear music blaring from Albina\'s room. You walk in and see her dancing on her bed, unaware of your presence. She eventually notices you and smiles.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>!! Come and dance with me!"
  scene.text(`"${((s as any).pcs_nickname || '')}!! Come and dance with me!"`);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/dance1.jpg');
    scene.text('She doesn\'t give you a choice and pulls you up onto her bed. You both dance on the bed until you grow tired and stop, Albina turning the music off.');
    scene.text('"That was fun. I really need to go to a proper club instead of that god awful disco. Maybe you want to come with me?" she asks with a smile.');
    scene.text('You just shrug your shoulders and she asks what you want to do now.');
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterComputer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['CompUse'] === 0) {
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['CompUse'] = 1;
    scene.img('images/locations/pavlovsk/resident/albinahome/laptop.jpg');
    scene.text('You point towards the laptop sitting at the foot of her bed. "I should\'ve guessed that you would have something like that."');
    scene.text('"Yeah, I honestly don\'t know why I bought it. I sometimes look up workout techniques and look at clothes, but I mostly just use it to watch porn when I feel like rubbing one out."');
    scene.text('You\'re a little surprised that she would admit such a thing to you given how private and guarded she usually is about herself.');
    scene.actions([
      { label: 'Do something else', goto: ['albinahome', 'bedroom'] },
    ]);
  } else {
    scene.actions([
      { label: 'Use her laptop', handler: (st: GameState) => {
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('You decide to use Albina\'s laptop while she\'s gone, despite knowing she would be upset at you doing so.');
    if (((st as any).AlbinaQW ?? 0)?.['laptop_password'] === 0) {
      if ((!(Math.floor(Math.random() * 4) + 0))) {
        ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['laptop_password'] = 1;
        qspCall(st, 'stat', '');
        scene.text('You boot it up, but are confronted by a screen asking for a password. Taking a wild guess, you somehow manage to successfully input the correct password and her desktop loads up. You wonder if you should risk snooping around before she comes back.');
        scene.actions([
          { label: 'Turn it off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/laptop.jpg');
    scene.text('You decide not to risk it and turn the laptop off before closing the screen.');
    scene.actions([
      { label: 'Wait for Albina to return', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
          { label: 'Check out her porn', handler: (st: GameState) => {
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('You\'re curious about what sort of porn Albina would watch, so you click on the internet browser and proceed to look through her browsing history.');
    scene.text('You aren\'t surprised to find that she watches a <i>lot</i> of anal sex with the occasional lesbian video. You feel yourself getting aroused as you keep browsing.');
    qspCall(st, 'arousal', 'porn', 10);
    scene.actions([
      { label: 'Turn it off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/laptop.jpg');
    scene.text('Although you\'re turned on by what you\'ve seen, you decide not to risk getting caught and turn the laptop off before closing the screen.');
    scene.actions([
      { label: 'Wait for Albina to return', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/pc/items/accessories/computer/kompmas.jpg');
    scene.text('While browsing, you find a title you like the sound of and sit back on the bed to start watching it. It turns you on and your hand finds its way down to your clit before you start instinctively rubbing it.');
    scene.text('The video is very arousing and you find yourself getting wet after just a few seconds. Just as you\'re about to cum, your heart leaps into your mouth when you hear someone approaching. You quickly rip your hand from between your legs and slam the laptop screen down before Albina walks into the room.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Find something else to do', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    ]);
  } },
          { label: 'Snoop around', handler: (st: GameState) => {
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('You\'re curious about what sort of things Albina gets up to online, but end up snooping through her emails instead. You browse through a lot of junk and some emails to and from her mother before something catches your eye. It\'s an email from... <i>Vadim Bely</i>?!');
    scene.actions([
      { label: 'Leave it be', handler: (st: GameState) => {
    scene.text('You\'re not sure why she would be in contact with such a man and the idea of it spooks you. You quickly turn the laptop off before closing the screen.');
    scene.actions([
      { label: 'Wait for Albina to return', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Read it', handler: (st: GameState) => {
    scene.text('You wonder why she would be in contact with such a man and decide to read the back and forth emails between them.');
    scene.text('You\'re shocked to discover that Albina apparently went to Bely for help in taking her father down. Bely accepted on the condition that Albina do a "simple favor" for him in return.');
    scene.text('Albina having seemingly accepted the deal, his last email to her is him sarcastically congratulating her on her father\'s downfall, along with a taunting reminder of the "favor" she done for him.');
    scene.text('A video file is attached to the email with a note: "Tell me, Albina. Was it worth it to get rid of him?"');
    scene.actions([
      { label: 'Leave it be', handler: (st: GameState) => {
    scene.text('You\'ve invaded her privacy enough and the knowledge of what you\'ve already learned spooks you. You quickly turn the laptop off before closing the screen, promising yourself that you will <i>never</i> bring this up with Albina.');
    scene.actions([
      { label: 'Wait for Albina to return', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Watch the video', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/laying_down1.mp4');
    scene.text('You click the file and are greeted with a short video of Albina lying face down on a bed as Bely roughly fucks her. It ends with Bely seemingly blowing his load inside Albina, who squirms beneath him.');
    scene.text('You quickly turn the laptop off before closing the screen. The knowledge of what you\'ve learned and seen spooks you, but you promise yourself that you will <i>never</i> bring this up with Albina.');
    scene.actions([
      { label: 'Wait for Albina to return', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.img('images/pc/items/accessories/computer/komp.jpg');
        scene.text('Despite your best efforts, you fail to guess her password and stop before you end up locking it with another incorrect attempt. You close the screen before Albina walks back into the room.');
        scene.actions([
          { label: 'Find something else to do', goto: ['albinahome', 'bedroom'] },
        ]);
      }
    } else {
      scene.text('You enter the password and her desktop loads up, but wonder if you should risk snooping around again.');
      scene.actions([
        { label: 'Turn it off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/laptop.jpg');
    scene.text('You decide not to risk it and turn the laptop off before closing the screen.');
    scene.actions([
      { label: 'Wait for Albina to return', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
        { label: 'Watch some porn', handler: (st: GameState) => {
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('You click on the internet browser and find a porn website she recently visited in her browser history.');
    scene.text('You feel yourself getting aroused as you load it up and scroll through the videos.');
    qspCall(st, 'arousal', 'porn', (-3));
    scene.actions([
      { label: 'Turn it off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/laptop.jpg');
    scene.text('Although you\'re turned on by what you\'ve seen, you decide not to risk getting caught and turn the laptop off before closing the screen.');
    scene.actions([
      { label: 'Wait for Albina to return', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/pc/items/accessories/computer/kompmas.jpg');
    scene.text('While browsing, you find a title you like the sound of and sit back on the bed to start watching it. It turns you on and your hand finds its way down to your clit before you start instinctively rubbing it.');
    scene.text('The video is very arousing and you find yourself getting wet after just a few seconds. Just as you\'re about to cum, your heart leaps into your mouth when you hear someone approaching. You quickly rip your hand from between your legs and slam the laptop screen down before Albina walks into the room.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 3, 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Find something else to do', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Leave it alone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/laptop.jpg');
    scene.text('You know Albina greatly values her privacy and using her laptop without her permission would break the trust she has in you, so you decide to leave it alone.');
    scene.actions([
      { label: 'Return', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbYogaStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['daily_event'] = ((s as any).daystart ?? 0);
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['extra_event'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
  scene.text('"Miss Albina is in the gym right now," she replies. "You can find her there."');
  scene.text('Nodding in thanks, you head off to find your friend.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspGoto(st, 'albina_house_events', 'alb_yoga_1');
    } else {
      qspGoto(st, 'albina_house_events', 'alb_naked_yoga');
    }
  } },
  ]);
  scene.build();
}

function enterAlbYoga_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/albyoga.jpg');
  scene.text('You head to the home gym, where you find Albina doing yoga by herself. She smiles when she sees you before raising a finger, telling you to wait. The maid bows and leaves as you sit and watch Albina finish her routine.');
  scene.text('You know she\'s flexible, but some of the poses she does look like they should be impossible. She smiles when she sees your bewildered gaze.');
  scene.text('"You\'re not the only one who appreciates my flexibility. Lazar came over one time and loved my yoga display so much that we ended up having sex right here." She lets out a small laugh. "Dick brained idiot had seen too much porn and tried ripping my yoga pants open! You know how expensive these are?!" She rolls her eyes in a way that\'s somewhere between annoyance and tolerant affection.');
  scene.text('"Anyway, I showed him more of my flexibility by fucking him in positions he could never have imagined," she adds with a sly grin. A short while later, she finishes her routine and you follow her upstairs to her room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
    scene.text('You follow Albina to her room where she strips from her clothes and tosses them aside without a care.');
    scene.text('"I need to take a shower and wash all this sweat off. Care to join me?" she asks with a playful smile.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlbinaShowerTalkStart(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAlbNakedYoga(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['yoga_pose'] = (Math.floor(Math.random() * 5) + 1);
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['naked_yoga'] = ((s as any).daystart ?? 0);
  scene.img(`images/characters/pavlovsk/school/girl/albina/yoga/${((s as any).AlbinaQW ?? 0)?.['yoga_pose'] ?? ''}.jpg`);
  if (((s as any).AlbinaQW ?? 0)?.['yoga_pose'] === 1) {
    scene.text('You walk through the door of the mansion\'s home gym and come face to face with Albina completely naked on the floor, upside down with her head between her knees, her pussy directly facing you, and something black between her ass cheeks.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['yoga_pose'] === 2) {
      scene.text('You walk through the door of the mansion\'s home gym and come face to face with Albina completely naked upside down with her head on the floor, her knees on her elbows, and her legs wide open with her pussy spread and something black between her ass cheeks.');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['yoga_pose'] === 3) {
        scene.text('You walk through the door of the mansion\'s home gym and find Albina completely naked on the floor, head towards you, her legs completely straight, muscles taut with exertion, and her bare pussy pointed at the opposite wall.');
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['yoga_pose'] === 4) {
          scene.text('You walk through the door of the mansion\'s home gym and find Albina completely naked on the floor, arms stretched out behind her head and legs folded beneath her, her entire body still nearly flat against the floor.');
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['yoga_pose'] === 5) {
            scene.text('You walk through the door of the mansion\'s home gym and come face to face with Albina completely naked, upside down with her head between her hands and her feet pressed up to her tip toes as she arches her back, presenting her tight breasts directly towards you.');
          }
        }
      }
    }
  }
  scene.text('A pile of damp clothes lay just beside her.');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," she grunts as her muscles clench, her eyes not even mov...
  scene.text(`"Hey ${((s as any).pcs_nickname || '')}," she grunts as her muscles clench, her eyes not even moving in your direction as she concentrates on her exercise with pure focus. "Gimme a minute, I'm almost done here."`);
  scene.text('You watch as she slowly inhales one more time and then exhales even more slowly, the sound of her breath a soft wind blowing between her lips. As soon as the last of it is gone from her lungs, her body relaxes and unfolds from its contorted position.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/yoga/after.jpg');
    scene.text('"Hey," she smiles while standing up. "Nice to see you."');
    scene.text('Your gaze can\'t help but glance down at her tight body, her toned muscles swollen from exertion as beads of sweat cover her skin and run down her breasts.');
    scene.text('"Does your mom know you\'re in here naked?"');
    scene.text('"Fuck no," she grins. "But I get a better stretch this way."');
    scene.text('She pauses and reaches behind her hips. Her face contorts in a grimace and she lets out a small grunt before her hand reappears with a black buttplug.');
    scene.text('"And what about that?" you ask, giving her a look for an explanation.');
    scene.text('"I can get my core tighter with something in my ass," she says without a hint of humor as she strides past you. "Gives me something to clench on."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
    scene.text('She pads through the halls of her home naked without a care in the world.');
    scene.text('"You\'re just going to leave your clothes there?" you ask as you follow.');
    scene.text('"The maid will take care of it," she says flippantly. As you enter her room, she gives you a glance over her shoulder. "I need a shower. Wanna join me?"');
    scene.text('The look in her eye tells you she wants to do a lot more than shower right now.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlbinaShowerTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Shower with her', goto: ['albina_sex_scenes', 'albina_shower'] },
      { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"No thanks. I think I\'m fine without one," you say.');
    scene.text('"Suit yourself," she shrugs heading off towards the bathroom. "If you hear screams don\'t worry. I\'m just cumming on my showerhead."');
    scene.text('She winks at you and closes the door behind her.');
    scene.actions([
      { label: 'Wait for her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
    scene.text('You wait patiently for about 20 minutes before Albina finally exits the bathroom wearing only a towel around her hair, steam wafting out after her.');
    scene.text('"Fuck me, I needed that," she says, strolling over to her dresser and pulling on a thong that\'s not much more than a loopy string and a thin tank top without a bra while she chats to you before flopping down on the bed beside you.');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
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

function enterAlbinaSunbatheSolo(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['daily_event'] = ((s as any).daystart ?? 0);
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['extra_event'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/resident/albinahome/albpool.jpg');
  scene.text('"Miss Albina is out by the pool," she says and leads you out to the back door. You\'re a little surprised to find Albina stretched out on a lounger in the nude, her breasts and pussy on full display.');
  scene.text('"A visitor for you, Miss Albina," the maid announces. She keeps a straight face, but you see the awkward look in her eyes as she bows and goes back inside.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" Albina grins at you.
  scene.text(`"${((s as any).pcs_nickname || '')}!" Albina grins at you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Greet her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albpool1.jpg');
    scene.text('She sits up in her lounger and grabs her drink, which you assume to be alcoholic in some manner. Her smooth, tanned skin glistens in the sun as she sips and you smile.');
    scene.text('"Is your mother okay with this?"');
    scene.text('She shrugs her shoulders. "She actually expects me to live with <i>tan lines</i>?! Pfft! Besides, what she doesn\'t know can\'t hurt her. Milena won\'t say anything."');
    scene.text('You laugh and shake your head as she finishes her drink and gets up. She slips into her robe and heads back towards the house. "Come on, I\'ve had enough sun and need to wash this lotion off."');
    scene.actions([
      { label: 'Go with her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
    scene.text('You follow Albina to her room, where she removes her robe and playfully smiles at you. "Care to join me?"');
    scene.actions([
      { label: 'Join her', goto: ['albina_sex_scenes', 'albina_shower'] },
      { label: 'Just talk', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/showering.jpg');
    scene.text('"No thanks, but I wouldn\'t mind talking while you do."');
    scene.text('"Suit yourself," she shrugs and heads into her personal bathroom, leaving the door open for you to follow her in. You sit on the edge of her bath while she steps into the shower.');
    scene.text('"Do you always sunbathe naked?"');
    scene.text('"Only when Mama isn\'t here," her voice echoing back off the glass and tile. "She would lecture me if she caught me doing it, saying I shouldn\'t be worrying about tanlines. I swim naked when she\'s not home as well," she adds with a small laugh.');
    if (((st as any).motherKnowWhore ?? 0) > 0) {
      scene.text('"Pfft! Better than <i>my</i> mother. Ever since she found out I\'ve been having sex, she doesn\'t even call me by my name anymore. Usually just \'whore\' or \'slut\'. It fucking blows."');
      scene.text('The tap squeaks off and Albina steps out of the shower, grabbing a towel to dry herself off.');
      scene.text('"Well... still better than being called that because it\'s true..." Her expression goes blank and your conversation lulls into a melancholy silence for a moment, both of you thinking about her father. "At least that\'s not the case anymore," she continues, heading into her room.');
      scene.text('You follow behind her, sitting on her bed and chatting about lighter topics while she gets dressed.');
    } else {
      if (((st as any).motherKnowSpravka ?? 0) > 0) {
        scene.text('"Pff. Still better than my mother. She keeps lecturing me about sex. It\'s better than it was before, but it\'s still so annoying."');
        scene.text('"Mama always leaves condoms out for me even though I\'m on the pill," she says while stepping out of the shower and grabbing a towel. "I always thought it was a little overbearing, but I guess your mother\'s probably a lot worse, huh?"');
        scene.text('You follow her into her room to continue chatting while she gets dressed.');
      } else {
        if (((st as any).motherKnowDildo ?? 0) > 0) {
          scene.text('"Pfft! Still better than my mother. She keeps scolding me about leaving my dildos lying around the house. A girl has needs, you know?"');
          scene.text('"Ugh, I know exactly what you mean," she says while stepping out of the shower and grabbing a towel. "I love Mama, but I wish she wasn\'t so uptight about where I leave my toys. Always saying, \'What if a guest comes over and sees that laying around?\' or \'What if they catch you in your underwear?\' As if we have any guests these days other than my friends! Besides, isn\'t this what we have a maid for? Cleaning stuff up?"');
          scene.text('She heads into her room and you follow behind, sitting down on her bed and continuing to chat while she gets dressed.');
        } else {
          if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
            scene.text('"Pfft! Still better than my mother. She still makes me see the gyno every month just to confirm I\'m still a virgin!"');
            scene.text('"What??? There\'s no way you\'re still a virgin!"');
            scene.text('"I... have ways of getting around it."');
            scene.text('"Ways of \'getting around\' you mean!" she laughs while stepping out of the shower and grabbing her towel.');
            scene.text('"Bitch!" you laugh back, following her into her room to keep chatting while she gets dressed.');
          } else {
            scene.text('"Pfft! Still better than my mother. She still makes me see the gyno every month just to confirm I\'m still a virgin!"');
            scene.text('"What?! That\'s totally fucked up!"');
            scene.text('"I know right?!"');
            scene.text('"Maybe you should lose it," she says while stepping out of the shower and grabbing her towel. "Just to stick it to her, you know?"');
            scene.text('"I don\'t know... Maybe..."');
            scene.text('You follow her into her room and sit down on her bed, continuing to chat while she gets dressed.');
          }
        }
      }
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaShowerTalkStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbinaShowerTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Shower with her', goto: ['albina_sex_scenes', 'albina_shower'] },
    { label: 'I\'ll just wait', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
    scene.text('"No thanks. I\'ll just wait until you\'re done."');
    scene.text('"Suit yourself I guess," she shrugs and heads into the bathroom, closing the door behind her.');
    scene.text('You twiddle your thumbs for a few minutes until she comes back out, naked with only a towel wrapped around her hair.');
    scene.text('She heads straight to her dresser to start picking out clothes, chatting with you while she gets dressed.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaShowerTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk with her while she showers', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/showering.jpg');
    scene.text('"No thanks, but I wouldn\'t mind talking while you do."');
    scene.text('"Suit yourself," she shrugs before she heads into her personal bathroom, leaving the door open for you to follow her in. You sit on the edge of the bathtub while she steps into the shower.');
    if (((st as any).AlbinaQW ?? 0)?.['mother_daughter_sunbathe'] === ((st as any).daystart ?? 0)) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlbinaShowerTalkMotherSunbathe(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).AlbinaQW ?? 0)?.['naked_yoga'] === ((st as any).daystart ?? 0)) {
        scene.text('"Do you always work out like that?"');
        scene.text('"Naked you mean?" Her voice echoes off the glass and tile. You can hear the grin in it. "Not always. I was serious when I said I get a better stretch. Sweaty spandex gets really tight. And I\'m more flexible than it is. So naked yoga is the best yoga."');
        scene.text('"I meant the buttplug," you snicker as the tap squeaks off and Albina steps out grinning.');
        scene.text('"Only when I\'m sure Mama isn\'t looking," she says, grabbing a towel off the rack. You follow her into her room and sit on her bed, continuing to chat while she gets dressed.');
      } else {
        scene.text('"Do you always work out like that?"');
        scene.text('"When I can." Her voice echoes off the glass and tile. "Yoga\'s great for the core. Keeps my tummy tight. And exercise is the only real \'me time\' I get these days. Masturbation sessions not included."');
        scene.text('The tap squeaks off and Albina steps out of the shower with a grin before she grabs a towel to dry off. You follow her into her room and sit on her bed, continuing to chat while she gets dressed.');
      }
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaShowerTalkMotherSunbathe(s: GameState, scene: SceneBuilder): void {
  scene.text('"So you and your mom sunbathe together?"');
  scene.text('"When we can," she replies, her voice echoing off the glass and tile. "Sometimes I\'m busy, sometimes she\'s busy. I wish she\'d let me go full nude to avoid pantylines, but topless is the most she lets me get away with. Says I shouldn\'t be worrying about those kinds of tanlines anyways. I sneak in a few nude sessions when she\'s not home though," she adds with a small laugh.');
  if (((s as any).motherKnowWhore ?? 0) > 0) {
    scene.text('"Pfft! Better than <i>my</i> mother. Ever since she found out I\'ve been having sex, she doesn\'t even call me by my name anymore. Usually just \'whore\'. It fucking blows."');
    scene.text('The tap squeaks off and Albina steps out of the shower, grabbing a towel to dry herself off.');
    scene.text('"Well... Still better than being called that because it\'s true." Her expression goes blank and your conversation lulls into a melancholy silence for a moment, both of you thinking about her father. "At least that\'s not the case anymore," she continues, heading into her room. You follow behind her, sitting on her bed and chatting about lighter topics while she gets dressed.');
  } else {
    if (((s as any).motherKnowSpravka ?? 0) > 0) {
      scene.text('"Pff. Still better than my mother. She keeps lecturing me about sex. It\'s better than it was before, but it\'s still so annoying."');
      scene.text('"Mama always leaves condoms out for me even though I\'m on the pill," Albina says, stepping out of the shower and grabbing a towel. "I always thought it was a little overbearing, but I guess your mother\'s probably a lot worse huh?" You follow her into her room to continue chatting while she gets dressed.');
    } else {
      if (((s as any).motherKnowDildo ?? 0) > 0) {
        scene.text('"Pff. Still better than my mother. She keeps scolding me about leaving my dildos lying around the house. A girl has needs, you know?"');
        scene.text('"Ugh, I know exactly what you mean," she says, stepping out of the shower and grabbing a towel. "I love Mama, but I wish she wasn\'t so uptight about where I leave my toys. Always saying, \'What if a guest comes over and sees that laying around?\' or \'What if they catch you in your underwear?\' As if we have any guests these days other than you and Lazar. Besides, isn\'t this what we have a maid for? Cleaning stuff up?"');
        scene.text('She heads into her room and you follow behind, sitting on her bed and continuing to chat while she gets dressed.');
      } else {
        if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
          scene.text('"Pfft! Still better than my mother. She still makes me see the gyno every month just to confirm I\'m still a virgin!"');
          scene.text('"What? You\'re not a virgin!" she laughs.');
          scene.text('"I... have ways of getting around it."');
          scene.text('"Ways of \'getting around\' you mean!" she laughs louder before stepping out of the shower and grabbing her towel.');
          scene.text('"Bitch!" you laugh back, following her into her room to keep chatting while she gets dressed.');
        } else {
          scene.text('"Pfft! Still better than my mom. She still makes me see the gyno every month just to confirm I\'m still a virgin!"');
          scene.text('"What?! That\'s totally fucked up!"');
          scene.text('"I know right?!"');
          scene.text('"Maybe you should lose it," she says before stepping out of the shower and grabbing her towel. "Just to stick it to her, you know?"');
          scene.text('"I don\'t know... That seems... a lot..."');
          scene.text('You follow her into her room and sit on her bed, continuing to chat while she gets dressed.');
        }
      }
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['albinahome', 'bedroom'] },
  ]);
  scene.build();
}

function enterAlbinaShowerTalkNakedYoga(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaPhotos(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('"Would you mind if I... took some photographs of you?" you ask as you pull your camera out of your bag.');
  scene.text('She tilts her head in curiosity. "You have a camera?! That\'s so cool! Have you taken many photos with it?"');
  scene.text('Yeah, but I don\'t have my portfolio with me to show you anything," you reply.');
  scene.text('"And you want to add me to it?" she asks with a curious gaze.');
  scene.text('You nod. "I could really use the practice and I think you would be a great model."');
  scene.text('She smiles. "Okay. Wait for me by the pool. I\'m going to put on something a little more comfortable first."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head down to the pool', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/pose1.jpg');
    scene.text('You nod and head down to the pool out back, where you pull out your camera and set it up. A few minutes later, Albina strolls out wearing a floral pattern bikini. It\'s a surprisingly modest design compared to some of the ones you\'ve seen her wearing.');
    scene.text('You smile and start taking photos of her as she poses for you. "I told you you would make a good model. You\'re a natural, Albina!"');
    // TODO-QSP: dynamic text: She smirks. "You seem pretty good at this, <<$pcs_nickname>>. Would you do it pr...
    scene.text(`She smirks. "You seem pretty good at this, ${((st as any).pcs_nickname || '')}. Would you do it professionally?"`);
    scene.text('You shrug. "Maybe. It depends how good I can get."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/pose2.jpg');
    scene.text('After taking a few photos, you decide to change the pose. "Your ass is your best feature, so why don\'t you turn around and show it to me?"');
    scene.text('She smiles and turns around. "Like what you see?"');
    scene.text('You grin and continue snapping photos, moving in for some closeup shots of her ass as she slowly wiggles it at you and smiles, clearly enjoying herself.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/pose3.jpg');
    scene.text('"Do you feel comfortable posing nude?" you ask.');
    scene.text('She pauses. "Promise not to show anyone these pictures?"');
    scene.text('You nod. "I\'ll only use these photos with your permission, and your permission only. Anything you don\'t want to be seen will be kept private."');
    scene.text('"Okay," she says before removing her bikini top. She flicks her hair a little, causing it to cover one of her breasts as she finds a rather cute pose for you.');
    scene.text('She\'s a little awkward at first, but gradually becomes more comfortable with each flash of your camera. You snap a few more photos of her posing with her breasts exposed before you decide to move on.');
    scene.text('"Turn around for me again. Try and show off your tits and ass at the same time," you say with a wink.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/pose4.jpg');
    scene.text('She smiles as she angles herself in a way that allows you to photograph both her breasts and her ass at the same time.');
    scene.text('Her smile grows even brighter and she relaxes a little more as she gets more comfortable with the idea. As well as full body shots, you also snap a few closeups of her breasts and ass.');
    scene.text('"Are you okay with taking your bottoms off and going full nude?" you ask.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/pose5.jpg');
    scene.text('She smiles before tugging down her bikini bottom, teasingly exposing her naked ass as she smirks at you.');
    scene.text('You take a few photos before moving in to get some close up shots.');
    scene.text('"Are you comfortable losing the bottom now? We can finish with a few full nude shots, but they can be as tasteful as you wish."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/pose6.jpg');
    scene.text('She hesitates a little before she pulls her bikini bottom down and kicks it aside.');
    scene.text('You can\'t help but appreciate the sight in front of you. You\'ve seen her amazing figure plenty of times before, but being able to freely photograph it makes it even better.');
    scene.text('"Is this pose okay?" she asks as she lies down next to the pool, her pose tastefully highlighting her naked ass while also teasing you with a view of one of her breasts.');
    scene.text('"It\'s perfect!" you reply as you quickly snap a number of photos. "Like I said, you\'re a natural at this!"');
    scene.text('She smiles happily. It seems like she\'s grown comfortable with the idea of posing nude. You wonder if she would allow you to take some closeup shots?');
    scene.actions([
      { label: 'Ask her', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/pose7.jpg');
    scene.text('"It\'s okay if you don\'t feel comfortable with it, but would you be up for a few closeups?" you ask. "You don\'t have to expose yourself and can keep it tasteful if you wish."');
    scene.text('"You promise you won\'t show anyone if I let you?" she asks.');
    scene.text('You nod. "I promise. Like I said, I\'ll only use your photos with your permission. I\'ll even delete these closeup ones once we\'re done."');
    scene.text('She takes a few seconds to give it some thought before she nods. "Okay, but nobody else is to see these photos!"');
    scene.text('She shifts her position a little as you reposition yourself to take a few closeups. She keeps it tasteful and doesn\'t show off much, but you can see her pussy lips peeking out from between her legs.');
    // TODO-QSP: dynamic text: "Like what you see, <<$pcs_nickname>>?" she asks with a bright smile.
    scene.text(`"Like what you see, ${((st as any).pcs_nickname || '')}?" she asks with a bright smile.`);
    scene.text('You wonder if you could push her just a little further and get her to show her pussy?');
    qspCall(st, 'willpower', 'exhib', 'force', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/pose8.jpg');
    scene.text('"You\'ve come this far, Albina," you smile. "Don\'t get all shy and hide the goods. The camera <i>loves</i> you!"');
    // TODO-QSP: dynamic text: She smiles. "Was this all a ploy to see my pussy, <<$pcs_nickname>>? If so, it w...
    scene.text(`She smiles. "Was this all a ploy to see my pussy, ${((st as any).pcs_nickname || '')}? If so, it worked."`);
    scene.text('She shifts her position slightly and spreads her ass cheeks, giving you a full view of both her pussy and her asshole.');
    scene.text('You quickly start snapping photos as she grins down at you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).portfolio_people = (st as any).portfolio_people ?? {})[7] = 1;
    scene.img('images/pc/activities/photography/foto/people/7.jpg');
    scene.text('After taking a few final photos, you place your camera down. "That was fun! Thanks for helping me practice."');
    scene.text('She smiles at you. "That <i>was</i> fun! I can see why Mama did this. It feels so... liberating."');
    scene.text('She starts putting her bikini back on as you look through the photos for one you can use for your portfolio. "Do you mind if I use this one for my portfolio?"');
    scene.text('You show her a photo of her posing in the bikini and she nods. "That\'s an amazing photo! Can I steal it to post on my social media?"');
    scene.text('You laugh. "My work isn\'t free, but it can be yours for the right price."');
    scene.text('"I guessed that. So. Are you staying or going?" she asks.');
    scene.actions([
      { label: 'Stay', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('"I\'ll stay a little longer. I\'m sure there\'s something we can do."');
    scene.text('She giggles as she starts strolling back into the house. "Oh there\'s a <i>lot</i> of things I\'d do with you right now, but it\'s up to you what happens..."');
    scene.text('When you get back to her room, she removes the bikini and tosses it to one side before pulling her original clothes back on.');
    scene.actions([
      { label: 'Go back to her room', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('"I need to get going. I need to look these photos over for any flaws so I can improve my skills."');
    scene.text('She gives you a sly grin. "Yeah, \'look for flaws\'."');
    scene.text('You lightly punch her on the arm and she walks you to the door, where she hugs you tightly before looking you in the eyes.');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss4.jpg');
    scene.text('She wants it and you want it. You lean in and lock lips with her, your tongue plunging into her mouth and wrapping around her own.');
    scene.text('You passionately make out for a few seconds before Albina breaks the kiss, looking hot and heavy. You smile at each other and she watches you intently, her thighs gently rubbing together as you walk down the driveway.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('You look at the floor. "I should go..."');
    scene.text('You glance back up at Albina, who looks slightly disappointed but gives you a small smile. She watches you walk down the driveway, her thighs gently rubbing together as she does.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
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
    scene.actions([
      { label: 'Leave it be', handler: (st: GameState) => {
    ((st as any).portfolio_people = (st as any).portfolio_people ?? {})[7] = 1;
    scene.img('images/pc/activities/photography/foto/people/7.jpg');
    scene.text('You decide not to push her out of her comfort zone anymore than you have. After taking a few final photos, you place your camera down. "That was fun! Thanks for helping me practice."');
    scene.text('She smiles at you. "That <i>was</i> fun! I can see why Mama did this. It feels so... liberating."');
    scene.text('She starts putting her bikini back on as you look through the photos for one you can use for your portfolio. "Do you mind if I use this one for my portfolio?"');
    scene.text('You show her a photo of her posing in the bikini and she nods. "That\'s an amazing photo! Can I steal it to post on my social media?"');
    scene.text('You laugh. "My work isn\'t free, but it can be yours for the right price."');
    scene.text('"I guessed that. So. Are you staying or going?" she asks.');
    scene.actions([
      { label: 'Stay', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('"I\'ll stay a little longer. I\'m sure there\'s something we can do."');
    scene.text('She giggles as she starts strolling back into the house. "Oh there\'s a <i>lot</i> of things I\'d do with you right now, but it\'s up to you what happens..."');
    scene.text('When you get back to her room, she removes the bikini and tosses it to one side before pulling her original clothes back on.');
    scene.actions([
      { label: 'Go back to her room', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('"I need to get going. I need to look these photos over for any flaws so I can improve my skills."');
    scene.text('She gives you a sly grin. "Yeah, \'look for flaws\'."');
    scene.text('You lightly punch her on the arm and she walks you to the door, where she hugs you tightly before looking you in the eyes.');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss4.jpg');
    scene.text('She wants it and you want it. You lean in and lock lips with her, your tongue plunging into her mouth and wrapping around her own.');
    scene.text('You passionately make out for a few seconds before Albina breaks the kiss, looking hot and heavy. You smile at each other and she watches you intently, her thighs gently rubbing together as you walk down the driveway.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('You look at the floor. "I should go..."');
    scene.text('You glance back up at Albina, who looks slightly disappointed but gives you a small smile. She watches you walk down the driveway, her thighs gently rubbing together as she does.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Leave it be', handler: (st: GameState) => {
    ((st as any).portfolio_people = (st as any).portfolio_people ?? {})[7] = 1;
    scene.img('images/pc/activities/photography/foto/people/7.jpg');
    scene.text('You decide not to push her out of her comfort zone. After taking a few final photos, you place your camera down. "That was fun! Thanks for helping me practice."');
    scene.text('She smiles at you. "That <i>was</i> fun! I can see why Mama did this. It feels so... liberating."');
    scene.text('She starts putting her bikini back on as you look through the photos for one you can use for your portfolio. "Do you mind if I use this one for my portfolio?"');
    scene.text('You show her a photo of her posing in the bikini and she nods. "That\'s an amazing photo! Can I steal it to post on my social media?"');
    scene.text('You laugh. "My work isn\'t free, but it can be yours for the right price."');
    scene.text('"I guessed that. So. Are you staying or going?" she asks.');
    scene.actions([
      { label: 'Stay', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('"I\'ll stay a little longer. I\'m sure there\'s something we can do."');
    scene.text('She giggles as she starts strolling back into the house. "Oh there\'s a <i>lot</i> of things I\'d do with you right now, but it\'s up to you what happens..."');
    scene.text('When you get back to her room, she removes the bikini and tosses it to one side before pulling her original clothes back on.');
    scene.actions([
      { label: 'Go back to her room', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('"I need to get going. I need to look these photos over for any flaws so I can improve my skills."');
    scene.text('She gives you a sly grin. "Yeah, \'look for flaws\'."');
    scene.text('You lightly punch her on the arm and she walks you to the door, where she hugs you tightly before looking you in the eyes.');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/kiss4.jpg');
    scene.text('She wants it and you want it. You lean in and lock lips with her, your tongue plunging into her mouth and wrapping around her own.');
    scene.text('You passionately make out for a few seconds before Albina breaks the kiss, looking hot and heavy. You smile at each other and she watches you intently, her thighs gently rubbing together as you walk down the driveway.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/23.jpg');
    scene.text('You look at the floor. "I should go..."');
    scene.text('You glance back up at Albina, who looks slightly disappointed but gives you a small smile. She watches you walk down the driveway, her thighs gently rubbing together as she does.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
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

function enterAlbBedroomShower(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.img('images/shared/home/bathroom/towel_head1.jpg');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('You open the door just as another door opens across the room and Albina walks out of the bathroom, a towel wrapped around her head as her nude body glistens with moisture.');
      scene.text('She blinks in surprise, but it only takes a moment for that to fade and give way to a sly smile.');
      if (((s as any).AlbinaQW ?? 0)?.['shower_caught'] > 0) {
        scene.text('"You here to spy on me after my shower like you do at school?" she smirks.');
        scene.text('Without breaking eye contact, she drops the towel she was using to dry herself to the floor. "Like what you see?"');
      } else {
        scene.text('"Like what you see?" she smirks.');
        scene.text('Without breaking eye contact, she drops the towel she was using to dry herself to the floor.');
      }
      scene.text('She makes her way over to her dresser and picks a skimpy thong out of it before bending all the way down to her toes to start slowly pulling it up her toned legs, giving you a full view of both her holes.');
      scene.text('She pulls it much tighter than necessary, all the way up the crack of her ass, before letting it go with a loud <i>snap</i>, after which she turns around to show off her naked breasts and hit you with a sultry look.');
      scene.text('Reaching behind her without looking, she draws out a random tank top and puts it on in the slowest way possible, eye fucking you the whole time. The experience is like some kind of strange reverse-striptease.');
      scene.text('"So what\'s up?" she smiles as she flops down on the bed next to you.');
      scene.actions([
        { label: 'Continue', goto: ['albinahome', 'bedroom'] },
      ]);
    } else {
      scene.text('You open the door just as another door opens across the room and Albina walks out of the bathroom, a towel wrapped around her head as her nude body glistens with moisture.');
      scene.text('She blinks in surprise, but it only takes a moment for that to fade and give way to a warm smile.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" she beams. "You didn''t tell me you were coming over! You j...
      scene.text(`"${((s as any).pcs_nickname || '')}!" she beams. "You didn't tell me you were coming over! You just caught me after a workout. Give me a minute to get dressed."`);
      scene.text('She wipes herself with another towel before dropping both to the floor and pulling out a flimsy looking thong and a thin tank top to dress herself with. If she\'s at all embarrassed to be caught naked by you, she doesn\'t show it and quickly throws on her clothing before flopping down on the bed next to you.');
      scene.text('"So what\'s up?" she smiles.');
      scene.actions([
        { label: 'Continue', goto: ['albinahome', 'bedroom'] },
      ]);
    }
  } else {
    scene.img('images/locations/pavlovsk/resident/albinahome/caught_dressing.jpg');
    scene.text('You open the door and find yourself immediately greeted by the sight of Albina\'s naked pussy and asshole as she bends over a dresser. She looks over her shoulder, mouth open in initial surprise before it quickly transforms into a smile.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" she beams. "You caught me getting dressed. Give me a minute...
    scene.text(`"${((s as any).pcs_nickname || '')}!" she beams. "You caught me getting dressed. Give me a minute."`);
    scene.text('She quickly snaps on a thong and pulls some shorts on before throwing on a tank top without a bra.');
    scene.text('"So what\'s up?" she smiles as she flops down on the bed beside you.');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'first_visit':
      enterFirstVisit(s, scene);
      break;
    case 'first_visit2':
      enterFirstVisit2(s, scene);
      break;
    case 'first_sex':
      enterFirstSex(s, scene);
      break;
    case 'tekken_game':
      enterTekkenGame(s, scene);
      break;
    case 'tekken_play':
      enterTekkenPlay(s, scene);
      break;
    case 'tekken_bet':
      enterTekkenBet(s, scene);
      break;
    case 'swim_winter1':
      enterSwimWinter1(s, scene);
      break;
    case 'swim_winter2':
      enterSwimWinter2(s, scene);
      break;
    case 'swim_winter2_strip':
      enterSwimWinter2Strip(s, scene);
      break;
    case 'swim_winter3':
      enterSwimWinter3(s, scene);
      break;
    case 'winter_hot_tub':
      enterWinterHotTub(s, scene);
      break;
    case 'winter_hot_tub_no_panties1':
      enterWinterHotTubNoPanties1(s, scene);
      break;
    case 'winter_hot_tub_no_panties2':
      enterWinterHotTubNoPanties2(s, scene);
      break;
    case 'winter_hot_tub_no_panties3':
      enterWinterHotTubNoPanties3(s, scene);
      break;
    case 'naked_swim':
      enterNakedSwim(s, scene);
      break;
    case 'naked_swim1':
      enterNakedSwim1(s, scene);
      break;
    case 'after_swim_shower':
      enterAfterSwimShower(s, scene);
      break;
    case 'hot_tub_ask':
      enterHotTubAsk(s, scene);
      break;
    case 'hot_tub1':
      enterHotTub1(s, scene);
      break;
    case 'hot_tub2':
      enterHotTub2(s, scene);
      break;
    case 'hot_tub3':
      enterHotTub3(s, scene);
      break;
    case 'hot_tub_no_panties':
      enterHotTubNoPanties(s, scene);
      break;
    case 'hot_tub_no_panties2':
      enterHotTubNoPanties2(s, scene);
      break;
    case 'hot_tub_no_panties3':
      enterHotTubNoPanties3(s, scene);
      break;
    case 'hot_tub_no_panties4':
      enterHotTubNoPanties4(s, scene);
      break;
    case 'goodie_two_shoes':
      enterGoodieTwoShoes(s, scene);
      break;
    case 'tv_1':
      enterTv_1(s, scene);
      break;
    case 'tv_2':
      enterTv_2(s, scene);
      break;
    case 'ass_too_big':
      enterAssTooBig(s, scene);
      break;
    case 'dancing':
      enterDancing(s, scene);
      break;
    case 'computer':
      enterComputer(s, scene);
      break;
    case 'alb_yoga_start':
      enterAlbYogaStart(s, scene);
      break;
    case 'alb_yoga_1':
      enterAlbYoga_1(s, scene);
      break;
    case 'alb_naked_yoga':
      enterAlbNakedYoga(s, scene);
      break;
    case 'albina_sunbathe_solo':
      enterAlbinaSunbatheSolo(s, scene);
      break;
    case 'albina_shower_talk_start':
      enterAlbinaShowerTalkStart(s, scene);
      break;
    case 'albina_shower_talk':
      enterAlbinaShowerTalk(s, scene);
      break;
    case 'albina_shower_talk_mother_sunbathe':
      enterAlbinaShowerTalkMotherSunbathe(s, scene);
      break;
    case 'albina_shower_talk_naked_yoga':
      enterAlbinaShowerTalkNakedYoga(s, scene);
      break;
    case 'albina_photos':
      enterAlbinaPhotos(s, scene);
      break;
    case 'alb_bedroom_shower':
      enterAlbBedroomShower(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_house_events: LocationDef = {
  name: 'albina_house_events',
  title: 'Albina leads you to the rather well-furnished and decorated ',
  region: 'other',
  enter: enter,
};
