import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['KnowsHouse'] === 0) {
    (s as any).AlbinaQW['KnowsHouse'] = 1;
  }
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['albride'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['albina_house_events', 'first_visit'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['albinahome', 'hallway'] }]);
  }
  scene.build();
}

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  (s as any).AlbinaQW['albride'] = 2;
  scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
  scene.text('Albina leads you to the rather well-furnished and decorated sitting room. "You\'ll have to excuse the mess. The maid was... loyal to my father, so she had to go."');
  scene.text('She then disappears into the kitchen. While she\'s gone, her phone vibrates on the table. You look and see that "Mama" is trying to call her.');
  scene.text('<i>"Strange. She\'s never mentioned her mother. Hell, she barely talks about her father,"</i> you think to yourself.');
  scene.text('The phone rings out as Albina returns with a bottle of wine and two glasses and places them on the table. Noticing her missed call, she quickly picks her phone up and types a message before stuffing it in her pocket.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('"<i>This,</i>" she grunts while twisting a corkscrew into the top of the wine bottle, "was one of my father\'s favorite things. A bottle of stupidly expensive wine that he always refused to open. So let\'s fucking open it!"');
    scene.text('With a grin and a dramatic flourish, she yanks the cork out of the top and pours the contents into the glasses, handing one over before taking the seat next to you.');
    scene.text('She gleeflully chugs the whole glass in practically a single gulp, not bothering to even taste it.');
    scene.actions([
      { label: 'Drink with her', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'wine');
    (s as any).AlbinaQW['first_visit_drink'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/drink_wine.jpg');
    scene.text('You pick up a glass and take a small sip as she gulps down her entire glass.');
    scene.actions([
      { label: '"What\'s going on?"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'wine', 1);
    qspCall(s, 'stat', '');
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
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort.jpg');
    scene.text('"Albina..." you start. "I-');
    scene.text('"My father turned me into a fucking whore!" she blurts out. "He sold me! Let men drag me away and fuck me however they pleased! And they\'d give him money. Donate right into his campaign fund like it was charity."');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] > 0) {
      scene.text('She turns to face you, her eyes brimming with tears. "And when it wasn\'t enough, he made me sell my friends too. Sell <i>you</i>."');
      // TODO-QSP: dynamic text: She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ...
      scene.text(`She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ${((s as any).pcs_nickname ?? 0)}!" she wails. "I'm so sorry! I should've stopped them! But I didn't! I just handed you over to be raped-! Because I didn't want it to be me-! I had-! You-! I-! I'm-! <i>UWAHHHH!!</i>"`);
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
      // TODO-QSP: dynamic text: She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ...
      scene.text(`She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ${((s as any).pcs_nickname ?? 0)}!" she wails. "I didn't want to! But I didn't stop them! I just handed them over to be raped because I didn't want it to be me! I had-! They-! I-! I'm-! <i>UWAHHHH!!</i>"`);
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
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('"Not for me, thanks," you say and shake your head.');
    scene.text('"Fine! Whatever," she scowls before downing both glasses in a single gulp each.');
    scene.actions([
      { label: '"What\'s going on?"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
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
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/comfort.jpg');
    scene.text('"Albina..." you start. "I-');
    scene.text('"My father turned me into a fucking whore!" she blurts out. "He sold me! Let men drag me away and fuck me however they pleased! And they\'d give him money. Donate right into his campaign fund like it was charity."');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] > 0) {
      scene.text('She turns to face you, her eyes brimming with tears. "And when it wasn\'t enough, he made me sell my friends too. Sell <i>you</i>."');
      // TODO-QSP: dynamic text: She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ...
      scene.text(`She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ${((s as any).pcs_nickname ?? 0)}!" she wails. "I'm so sorry! I should've stopped them! But I didn't! I just handed you over to be raped-! Because I didn't want it to be me-! I had-! You-! I-! I'm-! <i>UWAHHHH!!</i>"`);
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
      // TODO-QSP: dynamic text: She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ...
      scene.text(`She then suddenly breaks, bawling loudly as sobs rack her body. "I'm a monster, ${((s as any).pcs_nickname ?? 0)}!" she wails. "I didn't want to! But I didn't stop them! I just handed them over to be raped because I didn't want it to be me! I had-! They-! I-! I'm-! <i>UWAHHHH!!</i>"`);
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
      { label: 'Pull away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Pull away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-5));
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'drugs', 'alcohol', 'wine', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('You jump back in fright, breaking the kiss and nearly falling off the sofa. In turn, Albina jumps back from you, looking distraught.');
    // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>! I-! I shouldn't have... I don't know what came ov...
    scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}! I-! I shouldn't have... I don't know what came over me! I... I'm sorry," she repeats. "You should go... I don't want to..."`);
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
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'npc_relationship', 'modify', 'A23', 10);
    qspCall(s, 'stat', '');
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
    qspCall(s, 'arousal', 'kiss', (-5));
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
    qspCall(s, 'arousal', 'kiss', (-5));
    scene.img('images/characters/pavlovsk/school/girl/albina/kissing.jpg');
    scene.text('Unwilling to leave Albina like this, you lean in and press your lips against hers.');
    // TODO-QSP: dynamic text: She stiffens. "No, <<$pcs_nickname>>," she says around your lips. "I don't want ...
    scene.text(`She stiffens. "No, ${((s as any).pcs_nickname ?? 0)}," she says around your lips. "I don't want to make you-"`);
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
  scene.actions([
    { label: 'Kiss her back', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'npc_relationship', 'modify', 'A23', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/kissing.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['first_visit_drink'] === 1) {
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
  scene.actions([
    { label: 'Take it further', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'rimming', 5, 'no_orgasm_msg', 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-5), 'no_orgasm_msg', 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/lesbian/uanuli22.jpg');
    scene.text('Albina breaks the kiss and flips you around, shoving two fingers into your pussy and her tongue up your ass. The second one causes you to gasp and she capitalizes on it, sending undulating motions through her tongue to drive you into a frenzy.');
    scene.text('"Oh Albina!" you moan. "I want to make you feel good too!"');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/69_1.mp4');
    scene.text('You turn, forcing her tongue away from your ass and towards your other hole instead, wrapping your thighs around her torso. In the same motion, you dive between her legs and run your tongue across her pussy. It\'s absolutely <i>soaked</i>. The two of you eat each other out with mutually reckless abandon as you relentlessly tease each other\'s clits. Albina\'s tongue occasionally slides up and rims your ass before moving back down to your pussy, which grows wetter and wetter.');
    scene.text('Albina\'s body begins to tense up and her legs pull you tight against her pussy, practically burying you in it. She\'s close, and you feel exactly the same way, mimicking her actions as you feel her lips against your labia. She shrieks into your pussy, her cry of orgasm vibrating through you as a burst of fluid suddenly sprays into your face and the shock sends you over the edge. Your eyes roll back in your head as you too release a wordless groan into her dripping wet pussy. You can feel her spasming underneath your tongue and her juices spray directly into your mouth. It\'s unbelievably hot, sustaining your orgasm for longer and longer.');
    scene.text('Finally, the tension gives out and both of you are left panting. You can feel Albina\'s breath between your legs.');
    (s as any).npc_had_sex['A23'] = 1;
    qspCall(s, 'arousal', 'cuni', 10, 'no_orgasm_msg', 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-10), 'no_orgasm_msg', 'lesbian');
    qspCall(s, 'arousal', 'rimming', (-5), 'no_orgasm_msg', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/nudealbina.jpg');
    scene.text('Albina untangles herself from your legs and flops onto her back, still breathing hard. You do the same, staring up at the ceiling. The sheets are soaked beneath you.');
    scene.text('Pulling her herself up, Albina turns herself around and gives you the most gentle kiss before pulling back. You can taste yourself on her lips.');
    scene.text('"That might have been... The biggest orgasm... I\'ve ever had..." she pants, giving you a sultry look as she combs back her disheveled hair. "Holy shit, you\'re wasted on men!"');
    scene.text('"You didn\'t... Tell me... You were a squirter!" you huff back.');
    scene.text('"You never asked..." she smirks and gives you another soft kiss.');
    qspCall(s, 'arousal', 'kiss', 1, 'no_orgasm_msg', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).pcs_hairbsh = (-1);
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'stat', '');
    scene.text('The two of you lay on her bed, slowly recovering after your high-intensity orgasms. Incredibly, Albina\'s pussy continues to trickle a steady stream of juices, even several minutes later.');
    // TODO-QSP: dynamic text: "Oh fuck," she breathes. "I get so wet after I cum, but this is just ridiculous!...
    scene.text(`"Oh fuck," she breathes. "I get so wet after I cum, but this is just ridiculous! What did you do to me, ${((s as any).pcs_nickname ?? 0)}?!"`);
    scene.text('You laugh, finally managing to prop yourself up. "You\'re one to talk! Your tongue piercing... Just... Wow! I\'ve never had <i>anything</i> stimulate my clit quite like that!"');
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
      scene.text('"I could say the same thing about you!" she grins. "I get what you mean, though. The way your piercing teased my clit made me way cum faster than I normally would have!"');
    } else {
      scene.text('"I can only imagine what that felt like," she grins. "I\'d say I\'m actually jealous! Maybe you should pierce <i>your</i> tongue and return the favor!"');
    }
    // TODO-QSP: dynamic text: You both laugh before her expression changes to something more... tender. "Thank...
    scene.text(`You both laugh before her expression changes to something more... tender. "Thanks ${((s as any).pcs_nickname ?? 0)}. It was nice to let it all out... and I'm not just talking about my feelings..." she says, her expression turning mischievous again. "Thanks for being a good friend."`);
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
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
    scene.text('You shake your head. "Not right now, thanks. I just noticed them, is all. Maybe some other time."');
    scene.text('She shrugs. "Sure. If you ever want to play, all you have to do is ask."');
    scene.actions([
      { label: 'Do something else', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['gamebet'] === 0) {
      scene.text('You and Albina lie down in front of the TV after picking one of the games. You play while chatting about various things and trash-talking each other. However, neither of you is giving your full attention to the game. Instead, you\'re just having fun together.');
      scene.actions([
        { label: 'Finish playing', goto: ['albinahome', 'bedroom'] },
        { label: 'Keep playing', goto: ['albina_house_events', 'tekken_play'] },
      ]);
    } else {
      scene.text('You and Albina lie down in front of the TV after picking one of the games. She turns towards you and gives you a grin. "Feel like putting your ass on the line and betting again?"');
      qspCall(s, 'willpower', 'sex', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse the bet [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-1));
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "Not this time."');
    scene.text('She\'s clearly a little disappointed, but turns her attention back to the game. "You\'re so going to lose!" she laughs. You play some games for a while, although things are a little awkward between you. Eventually, Albina stops. "Well, I had fun, but there\'s some stuff I need to take care of," she says as she turns the console off.');
    scene.text('Getting the hint, you get up as well. "Yeah, I should probably get going myself." You exchange a brief hug before you leave.');
    scene.actions([
      { label: 'Say goodbye and go home', handler: (st: GameState) => {
    (s as any).AlbinaQW['visiting'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['pav_residential', ''] },
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
  qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
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
        { label: 'Refuse the bet [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse the bet', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'npc_relationship', 'modify', 'A23', (-2));
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "Uhhh... I\'m really not interested in doing that."');
    scene.text('Albina puts the strapon away, and you can tell she\'s a little disappointed as she comes back over and lies down beside you again. "You\'re so going to lose!" she laughs.');
    scene.text('You continue to play games for a while, although things are awkward between you. Eventually, Albina stops. "Well, I had fun, but there\'s some stuff I need to take care of," she says as she turns the console off.');
    scene.text('Getting the hint, you get up as well. "Yeah, I should probably get going myself." You exchange a brief hug before you leave.');
    scene.actions([
      { label: 'Say goodbye and go home', handler: (st: GameState) => {
    (s as any).AlbinaQW['visiting'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Accept the bet', goto: ['albina_house_events', 'tekken_bet'] },
    ]);
  }
  scene.build();
}

function enterTekkenBet(s: GameState, scene: SceneBuilder): void {
  (s as any).AlbinaQW['gamebet'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'gaming', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
  scene.text('You smile. "You\'re on. You\'re so going to get fucked!"');
  scene.text('Albina laughs as she brings the strapon over with a bottle of lube and tosses them on the bed before she lies back beside you and picks her controller up. "<i>Please</i>! You\'re so going to lose!"');
  scene.text('She starts the game, and you both fall silent, your focus only on winning.');
  scene.actions([
    { label: 'Play until someone wins', handler: (st: GameState) => {
    (s as any).gameresult = ((s as any).rand ?? 0)(1, 100) + ((s as any).pcs_gaming ?? 0);
    if (((s as any).gameresult ?? 0) >= 150) {
      (s as any).albplay = 3;
    } else {
      (s as any).albplay = 2;
      if (((s as any).gameresult ?? 0) >= 75) {
        (s as any).albplay = 1;
      } else {
        (s as any).albplay = 0;
      }
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
      if (((s as any).albplay ?? 0) === 3) {
        scene.text('She doesn\'t even come close to beating you. Before the game can end, she lets out an exacerbated sigh and tosses her controller down in defeat, knowing she has no chance.');
        scene.text('You give her a gloating smirk as you both undress and grin as you slide the harness on.');
        scene.actions([
          { label: 'Continue', goto: ['albina_sex_scenes', 'wear_strapon'] },
        ]);
      } else {
        scene.text('It\'s close, but in the end, you just manage to win the game.');
        scene.text('"Yes!" you exclaim triumphantly before you both undress, grinning as you slide the harness on.');
        if (((s as any).albplay ?? 0) === 1) {
          scene.text('Although you try your best, Albina proves a worthy opponent and barely defeats you.');
          // TODO-QSP: dynamic text: "You're my bitch now, <<$pcs_nickname>>!" she laughs as you both undress and Alb...
          scene.text(`"You're my bitch now, ${((s as any).pcs_nickname ?? 0)}!" she laughs as you both undress and Albina slides the harness on with a smirk on her face.`);
          scene.actions([
            { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
          ]);
        } else {
          scene.text('Although you try your best, Albina simply outplays you at every turn. You stand no chance, and she easily beats you.');
          // TODO-QSP: dynamic text: "You're my bitch now, <<$pcs_nickname>>!" she laughs as you both undress and Alb...
          scene.text(`"You're my bitch now, ${((s as any).pcs_nickname ?? 0)}!" she laughs as you both undress and Albina slides the harness on with a smirk on her face.`);
          scene.actions([
            { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
          ]);
        }
        scene.actions([
          { label: 'Continue', goto: ['albina_sex_scenes', 'wear_strapon'] },
        ]);
      }
      scene.actions([
        { label: 'Throw the game', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/game.jpg');
    scene.text('You\'re not sure why, but part of you <i>wants</i> her to use the strap-on on you, so you purposefully lose the game.');
    // TODO-QSP: dynamic text: Albina looks at you suspiciously with a raised brow before smiling. "You're my b...
    scene.text(`Albina looks at you suspiciously with a raised brow before smiling. "You're my bitch now, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You both undress and Albina slides the harness on with a smirk on her face.');
    scene.actions([
      { label: 'Get fucked with the strapon', goto: ['albina_sex_scenes', 'receive_strapon'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const albina_house_events: LocationDef = {
  name: 'albina_house_events',
  title: 'Albina leads you to the rather well-furnished and decorated ',
  region: 'other',
  enter: enter,
};
