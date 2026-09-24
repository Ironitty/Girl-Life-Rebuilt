import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetMainSexAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Have sex with Natasha', goto: ['natbel_kissinggames', 'main'] },
  ]);
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha24a.mp4');
  scene.text('You take hold of Natasha\'s hand and gently lead her to the bed and notice that she\'s looking at you longingly. Your eyes wander down to her delicious lips as you both make your way towards her bed.');
  scene.text('She slowly leans in towards you. Taking hold of her face, you press your lips against hers and begin a long, sensual kiss.');
  scene.text('After what seems like ages, but was probably only a few seconds, you breathlessly pull apart.');
  scene.text('Smiling, you say. "Hello, hot stuff!"');
  scene.text('"Well, hello to my sizzling girlfriend, too!" she replies, grinning at you and licking her lips. "Fuck! That was hot!"');
  scene.text('"You think?!" you say to her as she sits there for a moment with a silly grin plastered over her face. "You ain\'t seen nothing yet."');
  scene.text('With a small giggle she murmurs softly, "No I guess not." With that she leans back in towards you and starts kissing you again.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Undress', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'outfit', 'strip_all');
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha25.mp4');
    scene.text('You slowly wriggle out of your top, allowing it to slip down your body.');
    scene.text('You are both overcome by a loving feeling towards each other and lust quickly takes over.');
    scene.text('She slowly makes her way down your body and tenderly starts kissing and sucking on your breasts.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSetSexActs1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  qspCall(s, 'npcStat', 'D2', 'a');
  if (((s as any).temp_last_sexact ?? 0) !== 'breast') {
    scene.actions([
      { label: 'Breast play', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'breast';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha26.mp4');
    scene.text('Natasha crawls over to you and starts slowly playing with and sucking on your boobs while gently massaging them. She then follows up by flicking her tongue over your nipple.');
    scene.text('You don\'t want her to feel left out, so you reciprocate.');
    qspCall(st, 'arousal', 'foreplay', (-5), 'lesbian');
    qspCall(st, 'arousal', 'foreplay_give', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'rub_clit') {
    scene.actions([
      { label: 'Rub her clit', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'rub_clit';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha27.mp4');
    scene.text('Natasha turns over slowly and lying on her front she spreads her legs sticking her bum in the air giving you easy access to that sexy arse.');
    // TODO-QSP: iif(pcs_horny >= 50, 'You are already very turned on and', 'You') + ' quickly get to work massaging ...
    scene.text('Not wanting you to feel left out, she ensures that you receive the same attention by concentrating on your for a while.');
    qspCall(st, 'arousal', 'clit_finger_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'clit_finger', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'lick_pussy') {
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'lick_pussy';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha28.mp4');
    // TODO-QSP: iif(pcs_horny >= 50, 'Both of you are dripping with arousal as y', 'Y') +'ou push Natasha onto her b...
    scene.text('Breathing heavily, she lies back while you slowly take her to the edge before stopping, teasing her.');
    scene.text('When you pull back, Natasha takes a few seconds to gather herself before she puts her mouth against your sex and returns the favor.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'cuni', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'dildo') {
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Lose your virginity', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'dildo';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29a.mp4');
    scene.text('Natasha opens her bedside cabinet drawer and pulls out a double dildo and, after placing it inside her pussy, lines it up with yours.');
    scene.text('Saying nothing, you slowly lower yourself onto it and start rocking to and fro, so that you are fucking Natasha while stimulating yourself at the same time.');
    scene.text('You are starting to really enjoy the feeling and the building fire within your body and smiling between pants you tell Natasha, "Well <i>girlfriend</i>, I guess you just popped my cherry!"');
    // TODO-QSP: dynamic text: She looks astonished and pulls you in for a long and passionate kiss. "Wow, than...
    scene.text(`She looks astonished and pulls you in for a long and passionate kiss. "Wow, thank you, ${((st as any).pcs_nickname ?? '')}. You should have said something. I would have stopped."`);
    scene.text('"No, I was ready. Anyway enough talk!"');
    qspCall(st, 'arousal', 'vaginal_strap', 5, 'A16', 'D2', 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'No, I\'m a virgin', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'dildo';
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29b.jpg');
    scene.text('Realising what\'s happening, you decide to stop Natasha. "Wait, I\'m still a virgin!"');
    // TODO-QSP: dynamic text: She immediately stops and removes the dildo. "I''m sorry, <<$pcs_nickname>>! I d...
    scene.text(`She immediately stops and removes the dildo. "I'm sorry, ${((st as any).pcs_nickname ?? '')}! I didn't know. Okay, let's leave that for now."`);
    scene.text('You nod. "Thank you. Maybe next time?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use a dildo', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'dildo';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29.mp4');
    scene.text('Natasha opens her bedside cabinet drawer and pulls out a double dildo and, after placing it inside her pussy, lines it up with yours.');
    scene.text('You slowly lower yourself onto it and start rocking to and fro, so that you are fucking Natasha while stimulating yourself at the same time.');
    qspCall(st, 'arousal', 'vaginal_strap', 5, 'A16', 'D2', 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  if (((s as any).NatbelQW ?? 0)?.['horny'] >= 100) {
    scene.actions([
      { label: 'Scissoring', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha30.mp4');
    // TODO-QSP: iif(pcs_horny >= 50, 'Overcome with arousal, y', 'Y') +'ou lay back on the bed with your legs wide o...
    scene.text('Placing one leg between yours and straddling your right leg, she starts to grind on you, bringing you both closer and closer to the edge of an orgasm.');
    qspCall(st, 'arousal', 'trib', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Orgasm', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha31.mp4');
    scene.text('As the crescendo builds, you both speed up until the dam is ready to burst and you are desperate to cum together.');
    scene.text('Your pussy starts tightening as Natasha picks up the pace. It\'s not long before you let out a muted scream and squeeze your legs around Natasha as she brings you an explosive orgasm. You relax your grip slightly and speed up for Natasha who grips you and lies on the bed, riding the waves of pleasure rushing through her.');
    scene.text('You both simply collapse on the bed and smile at each other in the afterglow, cuddling each other. Natasha gives you a long passionate kiss.');
    // TODO-QSP: dynamic text: "Fuck, <<$pcs_nickname>>, that was something else!" she says, still short of bre...
    scene.text(`"Fuck, ${((st as any).pcs_nickname ?? '')}, that was something else!" she says, still short of breath.`);
    scene.text('"Yeah, Natasha, you are one foxy little minx, that\'s for sure!"');
    scene.text('"You want to go again or are you good? Gotta make sure my girlfriend is happy."');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'trib', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'natbel_kissinggames', '');
  } },
      { label: 'Satisfied', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha32.jpg');
    scene.text('You reply, "No, I\'m very satisfied, thanks. You?"');
    scene.text('"Yes, I\'m happy and content."');
    scene.text('"Okay, I better go before I get tempted and we both end up exhausted. I\'ll see you soon."');
    scene.text('"I\'m looking forward to it," Natasha says as she leans over and gently kisses your boob. "Till next time, sexy."');
    scene.text('You slip out of her bed, get redressed and exit her apartment.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetMainEndActs(st, scene); (st as any).locArgs = __savedLocArgs; }
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

function enterSetMainEndActs(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom'  ||  ((s as any).loc ?? 0) === 'HotelRoom')  &&  ((s as any).hour ?? 0) >= 22) {
    scene.actions([
      { label: 'Go to bed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha32.jpg');
    scene.text('"Sorry, Natasha, I\'m done!"');
    scene.text('"She leans over and gives you a soft passionate kiss. "Stay with me," she suggests lovingly while licking her lips and savouring your taste. She then slowly moves down to your boobs and gives them a final kiss before settling down next to you.');
    scene.text('You answer by cuddling up to her and you both drift off to sleep.');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
    qspGoto(st, 'pre_sleep', 'start');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'natbelapt') {
      qspGoto(st, 'pod_ezd', 'etaj_4');
    } else {
      dynamicGoto(st, 'prevLoc', 'prevArg');
    }
  } },
  ]);
  scene.build();
}

function enterSetWakeupSexAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Wake up sex', goto: ['natbel_kissinggames', 'wakeup_sex'] },
  ]);
  scene.build();
}

function enterWakeupEventText(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha50.jpg');
  scene.text('You slowly wake up and look over at Natasha who is still asleep.');
  // TODO-QSP: end
  scene.build();
}

function enterWakeupSex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha50.jpg');
  // TODO-QSP: dynamic text: Natasha slowly wakes and slides over to you and wraps her arm around you. "Umm, ...
  scene.text(`Natasha slowly wakes and slides over to you and wraps her arm around you. "Umm, this is a nice way to wake up ${((s as any).pcs_nickname ?? '')}" she says as she starts playing with your breast`);
  scene.text('"Umm… Yeah…" You respond closing your eyes and enjoying her embrace as you slowly start to feel your arousal building.');
  scene.text('It seems that the same is happening to Natasha as you can hear her breathing change and she starts moving against you ever so slightly at first…');
  scene.text('You lie pretty still just letting your body respond to her actions as you let her take control of the pace.');
  scene.text('It\'s not long before she gives you a long passionate kiss which you fully return as you roll over facing her.');
  (s as any).natbel_wakeupsex_endact = 'Return';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInitWakeupSexRoutine(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterInitWakeupSexRoutine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['horny'] = 0;
  (s as any).temp_last_sexact = '';
  (s as any).orgasm_txt = '';
  (s as any).orgasm_or = 'no';
  if (((s as any).natbel_wakeupsex_endact ?? 0) === '') {
    (s as any).natbel_wakeupsex_endact = 'Return';
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetSexActs2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSetSexActs2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_last_sexact ?? 0) !== 'boob_kiss') {
    scene.actions([
      { label: 'Boob kiss', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'boob_kiss';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha52.jpg');
    scene.text('You crawl on top of her and tweak her nipples at first.');
    scene.text('Slowly you begin kissing, licking and sucking them then letting her nipple pop out before recommencing as you keep your eyes focused directly on hers.');
    qspCall(st, 'arousal', 'foreplay_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'scissoring') {
    scene.actions([
      { label: 'Scissoring', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'scissoring';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha53.jpg');
    scene.text('As both of your passion builds neither of you can resist moving so that your legs are intertwined.');
    scene.text('You both begin rocking back and forth slowly at first but gradually increasing in speed and intensity bring you both higher and higher.');
    qspCall(st, 'arousal', 'trib', 5, 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'special') {
    scene.actions([
      { label: 'Special pussy massage', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'special';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha54.jpg');
    scene.text('You decide to use your boob to massage her pussy and slowly lower yourself down her body until you can feel Natasha\'s wetness.');
    (st as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      scene.text('Slowly moving your body up and down you start edging her using your boob.');
      scene.text('It\'s not long before her hand appears between her leg gently brushing against your boob as she slowly massages her clit in rhythm with your actions.');
    } else {
      if (((st as any).temp_rand ?? 0) === 1) {
        scene.text('You decide to use your boob to massage her pussy and slowly lower yourself down her body until you can feel Natasha\'s wetness.');
        scene.text('Slowly moving your body up and down you start edging her using your boob, your hard erect nipple gliding over her soaking wet slit.');
        scene.text('It\'s not long before her hand appears between her leg gently brushing against your boob as she slowly massages her clit.');
      } else {
        scene.text('You decide to use your boob to massage her pussy and slowly lower yourself down her body until you can feel Natasha\'s wetness.');
        scene.text('Slowly moving your body up and down you start edging her using your boob, your hard erect nipple gliding over her soaking wet slit.');
        scene.text('It\'s not long before her hand appears between her leg gently brushing against your boob as she slowly massages her clit in rhythm with your actions.');
      }
    }
    qspCall(st, 'arousal', 'foreplay_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'breasts', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['horny'] % 10000 >= 100) {
    scene.actions([
      { label: 'Making Natasha cum', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = 10000 + ((((st as any).NatbelQW ?? {})?.['horny'] ?? 0) / 10000) * 10000;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha55.jpg');
    (st as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      scene.text('After you lie back and spread your legs for Natasha to lick you out. However, she smiles and shakes her head and instead climbs on top of you and slowly kisses your body as she gradually works her way down and begins licking you from above after kissing your pussy.');
      scene.text('Her own is directly above your face and you can see it glistening with arousal with the odd drip forming.');
      scene.text('It\'s just so tempting that you lick up her moistness then flick your tongue in and out of her pussy at which point Natasha groans.');
      scene.text('It seems that she\'s nearly there so you run your tongue up and down flicking it in and out of her and stopping to suck up her juices which are by now freely flowing.');
      scene.text('All of a sudden she stops licking and kissing you as her breathing gets ragged and she grabs hold of your right leg cuddling it and bringing it up to her face as she cums, her juices flowing into your waiting mouth.');
    } else {
      if (((st as any).temp_rand ?? 0) === 1) {
        scene.text('After you lie back and spread your legs for Natasha to lick you out she smiles and shakes her head and instead climbs on top of you and slowly kisses your body as she gradually works her way down and begins licking you from above after kissing your pussy.');
        scene.text('Her own is directly above your face and you can see it glistening with arousal with the odd drip forming.');
        scene.text('It\'s just so tempting that you lick up her moistness then flick your tongue in and out of her pussy at which point Natasha groans.');
        scene.text('It seems that she\'s nearly there so you run your tongue up and down flicking it in and out of her and stopping to suck up her juices which are by now freely flowing.');
        scene.text('All of a sudden she stops licking and kissing you as her breathing gets ragged and at the same time starts to tremble uncontrollably. She grabs hold of your right leg cuddling it and bringing it up to her face as she cums, her juices flowing into your waiting mouth.');
      } else {
        scene.text('After you lie back and spread your legs for Natasha to lick you out. However, she smiles and shakes her head and instead climbs on top of you and slowly kisses your body as she gradually works her way down and begins licking you from above after kissing your pussy.');
        scene.text('Her own is directly above your face and you can see it glistening with arousal with the odd drip forming.');
        scene.text('It\'s just so tempting that you lick up her moistness then flick your tongue in and out of her pussy at which point Natasha groans.');
        scene.text('It seems that she\'s nearly there so you run your tongue up and down flicking it in and out of her and stopping to suck up her juices which are by now freely flowing.');
        scene.text('All of a sudden she stops licking and kissing you as her breathing gets ragged and at the same time starts to tremble uncontrollably. She grabs hold of your right leg cuddling it and bringing it up to her face as she cums, her juices flowing into your waiting mouth.');
      }
    }
    if (((st as any).pcs_makeup ?? 0) > 1) {
      (st as any).pcs_makeup = 0;
    }
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'cuni', (-1), 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['horny'] >= 10000) {
    scene.actions([
      { label: 'Natasha makes you cum', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = 0;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha56.mp4');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.text('Your excitement has been building a while but you managed to contain it and keep yourself on the edge, however, all of a sudden Natasha starts changing the pace and her tongue hits just the right spot!');
      scene.text('Unable to hold back any longer you groan loudly and squirt into her mouth as you grab her arse squeezing her buttocks together.');
      scene.text('You both lie next to each other catching your breath before considering what to do next.');
    } else {
      scene.text('Your excitement has been building a while but you managed to contain it and keep yourself on the edge, however, all of a sudden Natasha starts changing the pace and her tongue hits just the right spot!');
      scene.text('Unable to hold back any longer you groan loudly and squirt into her mouth as you grab her arse squeezing her buttocks together.');
      scene.text('You then spend a few minutes in each other\'s arms enjoying the afterglow and a little reluctant to move.');
    }
    (st as any).orgasm_txt = '';
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'trib', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(st, 'arousal', 'end');
    // TODO-QSP: act $natbel_wakeupsex_endact:
    qspCall(st, 'outfit', 'wear_last_worn');
    if (((st as any).loc ?? 0) === 'natbelapt') {
      qspGoto(st, 'natbelapt', 'natroom');
    } else {
      dynamicGoto(st, 'prevLoc', 'prevArg');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterSetSexActs3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_last_sexact ?? 0) !== 'breast_play') {
    scene.actions([
      { label: 'Breast play', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'breast_play';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha26a.mp4');
    scene.text('Natasha crawls over to you and starts slowly playing with and sucking on your boobs while gently massaging them. She then follows up by flicking her tongue over your nipple.');
    scene.text('You don\'t want her to feel left out, so you reciprocate.');
    qspCall(st, 'arousal', 'foreplay_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'clit_rub') {
    scene.actions([
      { label: 'Rub her clit', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'clit_rub';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha27.mp4');
    scene.text('Natasha turns over slowly and lying on her front she spreads her legs sticking her bum in the air giving you easy access to that sexy arse.');
    // TODO-QSP: dynamic text: 'You ' + iif(pcs_horny >= 50, 'are already very turned on and ', '') +'quickly g...
    scene.text('You ' + ((((st as any).pcs_horny ?? 0) >= 50) ? ('are already very turned on and ') : ('')) + 'quickly get to work massaging her clit and soon both of you are soaking wet.');
    scene.text('Not wanting you to feel left out, she ensures that you receive the same attention by concentrating on your for a while.');
    qspCall(st, 'arousal', 'clit_finger_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'pussy_lick') {
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'pussy_lick';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha28.mp4');
    if (((st as any).pcs_horny ?? 0) >= 50) {
      scene.text('Both of you are dripping with arousal as you push Natasha onto her back and bring your mouth to her pussy and start eating her out.');
    }
    scene.text('Breathing heavily, she lies back while you slowly take her to the edge before stopping, teasing her.');
    scene.text('When you pull back, Natasha takes a few seconds to gather herself before she puts her mouth against your sex and returns the favour.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(st, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'scissoring') {
    scene.actions([
      { label: 'Scissoring', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'scissoring';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha30.mp4');
    if (((st as any).pcs_arousal ?? 0) >= 50) {
      scene.text('Overcome with arousal, you lay back on the bed with your legs wide open and pull Natasha on top of you.');
    }
    scene.text('Placing one leg between yours and straddling your right leg, she starts to grind on you, bringing you both closer and closer to the edge of an orgasm.');
    qspCall(st, 'arousal', 'trib', 5, 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'dildo') {
    scene.actions([
      { label: 'Use a dildo', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'dildo';
    if (((st as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29.mp4');
      scene.text('Natasha opens her bedside cabinet drawer and pulls out a double dildo and, after placing it inside her pussy, lines it up with yours.');
      scene.text('You slowly lower yourself onto it and start rocking to and fro, so that you are fucking Natasha while stimulating yourself at the same time.');
      qspCall(st, 'arousal', 'vaginal_strap', 5, 'A16', 'D2', 'lesbian');
      qspCall(st, 'stat', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29b.jpg');
      scene.text('Natasha opens her bedside cabinet drawer and pulls out a double dildo and, after placing it inside her pussy, lines it up with yours.');
      scene.actions([
        { label: 'Lose your virginity', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29a.mp4');
    scene.text('Natasha opens her bedside cabinet drawer and pulls out a double dildo and, after placing it inside her pussy, lines it up with yours.');
    scene.text('Saying nothing, you slowly lower yourself onto it and start rocking to and fro, so that you are fucking Natasha while stimulating yourself at the same time.');
    scene.text('You are starting to really enjoy the feeling and the building fire within your body and smiling between pants you tell Natasha, "Well <i>girlfriend</i>, I guess you just popped my cherry!"');
    // TODO-QSP: dynamic text: She looks astonished and pulls you in for a long and passionate kiss. "Wow, than...
    scene.text(`She looks astonished and pulls you in for a long and passionate kiss. "Wow, thank you, ${((st as any).pcs_nickname ?? '')}. You should have said something. I would have stopped."`);
    scene.text('Holding her face gently you give her a lingering kiss then reply. "I know but I wanted to give it to you. I love you <i>girlfriend</i> and I was ready. Anyway enough talk!"');
    qspCall(st, 'arousal', 'vaginal_strap', 5, 'A16', 'D2', 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'No, I\'m a virgin', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29b.jpg');
    scene.text('Realising what\'s happening, you decide to stop Natasha. "Wait, I\'m still a virgin!"');
    // TODO-QSP: dynamic text: She immediately stops and removes the dildo. "I''m sorry, <<$pcs_nickname>>! I d...
    scene.text(`She immediately stops and removes the dildo. "I'm sorry, ${((st as any).pcs_nickname ?? '')}! I didn't know. Okay, let's leave that for now."`);
    scene.text('You nod. "Thank you. Maybe next time?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).temp_last_sexact ?? 0) !== 'special') {
    scene.actions([
      { label: 'Special pussy massage', handler: (st: GameState) => {
    (st as any).temp_last_sexact = 'special';
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = ((st as any).NatbelQW['horny'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha54.jpg');
    scene.text('You decide to use your boob to massage her pussy and slowly lower yourself down her body until you can feel Natasha\'s wetness.');
    (st as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      scene.text('Slowly moving your body up and down you start edging her using your boob.');
      scene.text('It\'s not long before her hand appears between her leg gently brushing against your boob as she slowly massages her clit in rhythm with your actions.');
    } else {
      if (((st as any).temp_rand ?? 0) === 1) {
        scene.text('You decide to use your boob to massage her pussy and slowly lower yourself down her body until you can feel Natasha\'s wetness.');
        scene.text('Slowly moving your body up and down you start edging her using your boob, your hard erect nipple gliding over her soaking wet slit.');
        scene.text('It\'s not long before her hand appears between her leg gently brushing against your boob as she slowly massages her clit.');
      } else {
        scene.text('You decide to use your boob to massage her pussy and slowly lower yourself down her body until you can feel Natasha\'s wetness.');
        scene.text('Slowly moving your body up and down you start edging her using your boob, your hard erect nipple gliding over her soaking wet slit.');
        scene.text('It\'s not long before her hand appears between her leg gently brushing against your boob as she slowly massages her clit in rhythm with your actions.');
      }
    }
    qspCall(st, 'arousal', 'foreplay_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'breasts', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['horny'] % 10000 >= 100) {
    scene.actions([
      { label: 'Making Natasha cum', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = 10000 + ((((st as any).NatbelQW ?? {})?.['horny'] ?? 0) / 10000) * 10000;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha55.jpg');
    (st as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      scene.text('After you lie back and spread your legs for Natasha to lick you out. However, she smiles and shakes her head and instead climbs on top of you and slowly kisses your body as she gradually works her way down and begins licking you from above after kissing your pussy.');
      scene.text('Her own is directly above your face and you can see it glistening with arousal with the odd drip forming.');
      scene.text('It\'s just so tempting that you lick up her moistness then flick your tongue in and out of her pussy at which point Natasha groans.');
      scene.text('It seems that she\'s nearly there so you run your tongue up and down flicking it in and out of her and stopping to suck up her juices which are by now freely flowing.');
      scene.text('All of a sudden she stops licking and kissing you as her breathing gets ragged and she grabs hold of your right leg cuddling it and bringing it up to her face as she cums, her juices flowing into your waiting mouth.');
    } else {
      if (((st as any).temp_rand ?? 0) === 1) {
        scene.text('After you lie back and spread your legs for Natasha to lick you out she smiles and shakes her head and instead climbs on top of you and slowly kisses your body as she gradually works her way down and begins licking you from above after kissing your pussy.');
        scene.text('Her own is directly above your face and you can see it glistening with arousal with the odd drip forming.');
        scene.text('It\'s just so tempting that you lick up her moistness then flick your tongue in and out of her pussy at which point Natasha groans.');
        scene.text('It seems that she\'s nearly there so you run your tongue up and down flicking it in and out of her and stopping to suck up her juices which are by now freely flowing.');
        scene.text('All of a sudden she stops licking and kissing you as her breathing gets ragged and at the same time starts to tremble uncontrollably. She grabs hold of your right leg cuddling it and bringing it up to her face as she cums, her juices flowing into your waiting mouth.');
      } else {
        scene.text('After you lie back and spread your legs for Natasha to lick you out. However, she smiles and shakes her head and instead climbs on top of you and slowly kisses your body as she gradually works her way down and begins licking you from above after kissing your pussy.');
        scene.text('Her own is directly above your face and you can see it glistening with arousal with the odd drip forming.');
        scene.text('It\'s just so tempting that you lick up her moistness then flick your tongue in and out of her pussy at which point Natasha groans.');
        scene.text('It seems that she\'s nearly there so you run your tongue up and down flicking it in and out of her and stopping to suck up her juices which are by now freely flowing.');
        scene.text('All of a sudden she stops licking and kissing you as her breathing gets ragged and at the same time starts to tremble uncontrollably. She grabs hold of your right leg cuddling it and bringing it up to her face as she cums, her juices flowing into your waiting mouth.');
      }
    }
    if (((st as any).pcs_makeup ?? 0) > 1) {
      (st as any).pcs_makeup = 0;
    }
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'cuni', (-1), 'lesbian');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetSexActs3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['horny'] >= 10000) {
    scene.actions([
      { label: 'Natasha makes you cum', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['horny'] = 0;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha56.mp4');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.text('Your excitement has been building a while but you managed to contain it and keep yourself on the edge, however, all of a sudden Natasha starts changing the pace and her tongue hits just the right spot!');
      scene.text('Unable to hold back any longer you groan loudly and squirt into her mouth as you grab her arse squeezing her buttocks together.');
      scene.text('You both lie next to each other catching your breath before considering what to do next.');
    } else {
      scene.text('Your excitement has been building a while but you managed to contain it and keep yourself on the edge, however, all of a sudden Natasha starts changing the pace and her tongue hits just the right spot!');
      scene.text('Unable to hold back any longer you groan loudly and squirt into her mouth as you grab her arse squeezing her buttocks together.');
      scene.text('You then spend a few minutes in each other\'s arms enjoying the afterglow and a little reluctant to move.');
    }
    (st as any).orgasm_txt = '';
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'trib', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(st, 'arousal', 'end');
    // TODO-QSP: act $natbel_wakeupsex_endact:
    qspCall(st, 'outfit', 'wear_last_worn');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterNatbelaptKiss(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha24a.mp4');
  scene.text('When you get to Natasha\'s bed room, you notice that she\'s giving you a longing look. Your eyes wander down to her delicious looking lips and you start lusting after your girlfriend. You make your way towards her bed and she quickly joins you.');
  scene.text('She slowly leans in towards you. Taking hold of her face, you press your lips against hers and begin a long, sensual kiss.');
  scene.text('After what seems like ages, but was probably only a few seconds, you breathlessly pull apart.');
  scene.text('Smiling, you greet her. "Hello, hot stuff!"');
  scene.text('"Well, hello to my sizzling girlfriend, too!" she replies, grinning at you and licking her lips. "Fuck! That was hot!"');
  scene.text('You both just sit there for a moment with a silly grin plastered on both your faces while you look at each other.');
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8) {
    scene.actions([
      { label: 'Return', goto: ['natbelapt', 'natroom'] },
      { label: 'Chat with Natasha', goto: ['natbel_chat', 'chat'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Undress', handler: (st: GameState) => {
    if (((st as any).NatbelQW ?? 0)?.['FriendLover'] < 8) {
      ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['FriendLover'] = 8;
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha25.mp4');
    scene.text('You slowly wriggle out of your top, allowing it to slip down your body.');
    scene.text('You are both overcome by a loving feeling towards each other and lust quickly takes over.');
    scene.text('She slowly makes her way down your body and tenderly starts kissing and sucking on your breasts.');
    scene.actions([
      { label: 'Breast play', goto: ['natbel_kissinggames', 'natbelapt_sex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNatbelaptSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  qspCall(s, 'npcStat', 'D2', 'a');
  (s as any).orgasm_or = 'no';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha26.mp4');
  scene.text('Natasha crawls over to you and starts slowly playing with and sucking on your boobs while gently massaging them. She then follows up by flicking her tongue over your nipple.');
  scene.text('You don\'t want her to feel left out, so you reciprocate.');
  qspCall(s, 'arousal', 'massage', 5, 'lesbian');
  qspCall(s, 'arousal', 'massage', (-5), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Rub her clit', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha27.mp4');
    scene.text('Natasha turns over slowly and lying on her front she spreads her legs sticking her bum in the air giving you easy access to that sexy arse.');
    // TODO-QSP: iif(pcs_horny >= 50, 'You are already very turned on and ', 'You ') +'quickly get to work massaging ...
    scene.text('Not wanting you to feel left out, she ensures that you receive the same attention by concentrating on your for a while.');
    qspCall(st, 'arousal', 'clit_finger_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'clit_finger', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha28.mp4');
    // TODO-QSP: iif(pcs_horny >= 50, 'Both of you are dripping with arousal as y', 'Y') +'ou push Natasha onto her b...
    scene.text('Breathing heavily, she lies back while you slowly take her to the edge before stopping, teasing her.');
    scene.text('When you pull back, Natasha takes a few seconds to gather herself before she puts her mouth against your sex and returns the favor.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'cuni', (-5), 'lesbian');
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Lose your virginity', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['virginity_lost'] = 1;
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A16'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29a.mp4');
    scene.text('Natasha opens her bedside cabinet drawer and pulls out a double dildo and, after placing it inside her pussy, lines it up with yours.');
    scene.text('Saying nothing, you slowly lower yourself onto it and start rocking to and fro, so that you are fucking Natasha while stimulating yourself at the same time.');
    scene.text('You are starting to really enjoy the feeling and the building fire within your body and smiling between pants you tell Natasha, "Well <i>girlfriend</i>, I guess you just popped my cherry!"');
    qspCall(st, 'arousal', 'vaginal_strap_give', 5, 'A16', 'D2', 'lesbian');
    qspCall(st, 'arousal', 'vaginal_strap', (-5), 'A16', 'D2', 'lesbian');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: She looks astonished and pulls you in for a long and passionate kiss. "Wow, than...
    scene.text(`She looks astonished and pulls you in for a long and passionate kiss. "Wow, thank you, ${((st as any).pcs_nickname ?? '')}. You should have said something. I would have stopped."`);
    scene.text('"No, I was ready. Anyway enough talk!"');
    scene.actions([
      { label: 'Scissoring', goto: ['natbel_kissinggames', 'natbelapt_sex_climax'] },
    ]);
  } },
        { label: 'No, I\'m a virgin', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29b.jpg');
    scene.text('Realising what\'s happening, you decide to stop Natasha. "Wait, I\'m still a virgin!"');
    // TODO-QSP: dynamic text: She immediately stops and removes the dildo. "I''m sorry, <<$pcs_nickname>>! I d...
    scene.text(`She immediately stops and removes the dildo. "I'm sorry, ${((st as any).pcs_nickname ?? '')}! I didn't know. Okay, let's leave that for now."`);
    scene.text('You nod. "Thank you. Maybe next time?"');
    scene.actions([
      { label: 'Scissoring', goto: ['natbel_kissinggames', 'natbelapt_sex_climax'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use a dildo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha29.mp4');
    scene.text('Natasha opens her bedside cabinet drawer and pulls out a double dildo and, after placing it inside her pussy, lines it up with yours.');
    scene.text('You slowly lower yourself onto it and start rocking to and fro, so that you are fucking Natasha while stimulating yourself at the same time.');
    qspCall(st, 'arousal', 'vaginal_strap_give', 5, 'A16', 'D2', 'lesbian');
    qspCall(st, 'arousal', 'vaginal_strap', (-5), 'A16', 'D2', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Scissoring', goto: ['natbel_kissinggames', 'natbelapt_sex_climax'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNatbelaptSexClimax(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A16'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha30.mp4');
  scene.text('You lay back on the bed with your legs wide open and pull Natasha on top of you.');
  scene.text('Placing one leg between yours and straddling your right leg, she starts to grind on you, bringing you both closer and closer to the edge of an orgasm.');
  qspCall(s, 'arousal', 'trib', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Orgasm', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha31.mp4');
    scene.text('As the crescendo builds, you both speed up until the dam is ready to burst and you are desperate to cum together.');
    scene.text('Your pussy starts tightening as Natasha picks up the pace. It\'s not long before you let out a muted scream and squeeze your legs around Natasha as she brings you an explosive orgasm. You relax your grip slightly and speed up for Natasha who grips you and lies on the bed, riding the waves of pleasure rushing through her.');
    scene.text('You both simply collapse on the bed and smile at each other in the afterglow, cuddling each other. Natasha gives you a long passionate kiss.');
    // TODO-QSP: dynamic text: "Fuck, <<$pcs_nickname>>, that was something else!" she says, still short of bre...
    scene.text(`"Fuck, ${((st as any).pcs_nickname ?? '')}, that was something else!" she says, still short of breath.`);
    scene.text('"Yeah, Natasha, you are one foxy little minx, that\'s for sure!"');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'trib', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    if (((st as any).NatbelQW ?? 0)?.['virginity_lost'] !== 1) {
      scene.text('"You want to go again or are you good? Gotta make sure my girlfriend is happy."');
      scene.actions([
        { label: 'Yes', goto: ['natbel_kissinggames', 'natbelapt_sex'] },
      ]);
    }
    scene.actions([
      { label: 'Satisfied (Leave)', handler: (st: GameState) => {
    if (((st as any).NatbelQW ?? 0)?.['virginity_lost'] === 1) {
      qspCall(st, 'array', 'remove_element', 'NatbelQW', 'virginity_lost');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha32.jpg');
    scene.text('You reply, "No, I\'m very satisfied, thanks. You?"');
    scene.text('"Yes, I\'m happy and content."');
    scene.text('"Okay, I better go before I get tempted and we both end up exhausted. I\'ll see you soon."');
    scene.text('"I\'m looking forward to it," Natasha says as she leans over and gently kisses your boob. "Till next time, sexy."');
    scene.text('You slip out of her bed, get redressed and exit her apartment.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
      { label: 'Satisfied (Sleep here)', handler: (st: GameState) => {
    if (((st as any).NatbelQW ?? 0)?.['virginity_lost'] === 1) {
      qspCall(st, 'array', 'remove_element', 'NatbelQW', 'virginity_lost');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha32.jpg');
    scene.text('"Sorry, Natasha, I\'m done!"');
    scene.text('"She leans over and gives you a soft passionate kiss. "Stay with me," she asks, lovingly. She then slowly moves down to your boobs and gives them a final kiss before settling down next to you.');
    scene.text('You answer by cuddling up to her and you both drift off to sleep.');
    qspCall(st, 'arousal', 'end');
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    qspCall(st, 'core_library', 'setloc', 'natbelapt', 'natroom');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
    qspGoto(st, 'pre_sleep', 'start');
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
    case 'set_main_sex_act':
      enterSetMainSexAct(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    case 'set_sex_acts1':
      enterSetSexActs1(s, scene);
      break;
    case 'set_main_end_acts':
      enterSetMainEndActs(s, scene);
      break;
    case 'set_wakeup_sex_act':
      enterSetWakeupSexAct(s, scene);
      break;
    case 'wakeup_event_text':
      enterWakeupEventText(s, scene);
      break;
    case 'wakeup_sex':
      enterWakeupSex(s, scene);
      break;
    case 'init_wakeup_sex_routine':
      enterInitWakeupSexRoutine(s, scene);
      break;
    case 'set_sex_acts2':
      enterSetSexActs2(s, scene);
      break;
    case 'set_sex_acts3':
      enterSetSexActs3(s, scene);
      break;
    case 'natbelapt_kiss':
      enterNatbelaptKiss(s, scene);
      break;
    case 'natbelapt_sex':
      enterNatbelaptSex(s, scene);
      break;
    case 'natbelapt_sex_climax':
      enterNatbelaptSexClimax(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natbel_kissinggames: LocationDef = {
  name: 'natbel_kissinggames',
  title: 'You take hold of Natasha\'s hand and gently lead her to the b',
  region: 'other',
  locclass: 'bedr',
  enter: enter,
};
