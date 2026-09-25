import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A293');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
  scene.text('You climb into Viktor\'s car and he speeds off, clearly intent on getting you into bed as fast as possible.');
  if (((s as any).strip_club ?? 0)?.['guard_sex'] === 1) {
    scene.text('He pulls up to a red light and you glance over at him. He just smirks at you, though the bulge in his pants is quite obvious.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/carbj2.mp4');
    scene.text(`You can't wait until you reach his place. You feel an overwhelming need to suck his dick, so you unbuckle your seatbelt and get on your knees before leaning over to unzip his pants and pull out his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock.`);
    scene.text('He doesn\'t say anything and just continues silently driving as you take it into your mouth and start sucking, but you soon reach his apartment and he pulls your head up and tucks his dick away.');
    scene.text('He just grins as you wipe the saliva from your chin and eagerly follow him inside.');
    scene.actions([
      { label: 'Continue', goto: ['viktor_sex', 'viktor_sex1'] },
    ]);
  } },
      { label: 'Just wait', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.text('You\'re feeling rather horny, but manage to keep yourself under control until you arrive at Viktor\'s apartment.');
    scene.actions([
      { label: 'Follow him inside', goto: ['viktor_sex', 'viktor_sex1'] },
    ]);
  } },
    ]);
  } else {
    ((s as any).strip_club = (s as any).strip_club ?? {})['guard_sex'] = 1;
    scene.text('He soon pulls up to a red light and glances over at you. "Fuck it. I\'m not waiting any longer."');
    scene.text('As soon as the light turns green, he quickly turns down a side street and parks up behind one of the many abandoned factories in the area. He switches off the engine and looks over at you. "Well?"');
    scene.text(`You smile at him as you unbuckle your seatbelt and shift into position. You bite your lip as you unzip his pants and pull out his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock. It's already rock hard and throbbing in your hand.`);
    scene.actions([
      { label: 'Suck it', goto: ['viktor_sex', 'first_time'] },
    ]);
  }
  scene.build();
}

function enterFirstTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 5, 'rough');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/car.mp4');
  scene.text('After only a moment\'s hesitation, you part your lips and take the head of his cock into your mouth. He moans loudly as you start sucking while bobbing your head up and down as far as you can take it.');
  scene.text('After a few seconds, he suddenly wraps your hair around his fingers and forces you down on his cock, causing you to choke and gag as he thrusts it in and out of your throat. When he eventually pulls you up for air, tears run down your cheeks and drool dribbles from your mouth, but you smile at him.');
  scene.text('"Get over here. Time to pound that slutty little pussy."');
  scene.text('You awkwardly undress your lower half within the confines of the car before climbing over and straddling Viktor, the tip of his cock pressing against your slit.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 8, 'rough');
    qspCall(st, 'stat', '');
    scene.img('images/shared/prostitution/car/normal/sex/vaginal/vaginal_14.mp4');
    scene.text('You slide down onto his dick, moaning loudly as it stretches you out and fills you completely.');
    scene.text('"Fuck, such a tight pussy! I\'m going to have fun with this," he says as he grips your ass in his hands.');
    scene.text('You let out a lewd squeal as he thrusts up into you, bottoming out inside you as he starts fucking you.');
    scene.text('After a few minutes, the car is filled with your loud moans of pleasure and the sound of flesh slapping against flesh as Viktor pounds your pussy, overwhelming you with a wave of pleasure.');
    (st as any).orgasm_txt = 'The pleasure is overwhelming and you eventually scream out in ecstasy as a powerful orgasm washes over you, your legs going weak as a result.';
    (st as any).orgasm_or = 'custom';
    scene.text('Viktor keeps pounding you before his breathing intensifies and he starts fucking you even harder. "I\'m gonna cum, baby girl!"');
    scene.actions([
      { label: 'Creampie', goto: ['viktor_sex', 'first_creampie'] },
      { label: 'Swallow', goto: ['viktor_sex', 'first_swallow'] },
      { label: 'Pull out', goto: ['viktor_sex', 'first_pullout'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstCreampie(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'cum_call', '', 'A293', 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/normal/sex/cum/pussy_1.mp4');
  scene.text('You don\'t want him to stop. "Yes, cum inside me! Fill my tight little pussy with your hot cum!" you cry out and he thrusts as deep as he can into you. He groans loudly in pleasure as you feel his thick, warm cum spurting deep into your pussy.');
  scene.text('Once he\'s finished, he pulls out and you climb back into the passenger seat as his cum slowly starts leaking out of you. He lights a cigarette and takes a drag before offering you one.');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0) {
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke', 1);
    qspCall(st, 'cum_cleanup', '3');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_smoke.jpg');
    scene.text('You\'re craving a smoke after that performance and eagerly accept it. You lean back in your seat as you take a long drag and exhale.');
    scene.text('"That was some damn fine fucking pussy, baby girl," he says. "Can\'t say I\'ve had many girls be so eager to have me cum inside them."');
    scene.text('You take another drag as his cum continues trickling from your pussy. "I\'m not like most girls."');
    scene.text('"Clearly," he laughs and you both finish smoking before he offers you some tissues. You clean up and get dressed before he turns to you. "Where am I dropping you off?" he asks as he starts the engine.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'cum_cleanup', '3');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_smile.jpg');
    scene.text('You shake your head and he just shrugs before taking a long drag and exhaling as you check your phone.');
    scene.text('"That was some damn fine fucking pussy, baby girl," he says. "Can\'t say I\'ve had many girls be so eager to have me cum inside them."');
    scene.text('You smile as his cum continues trickling from your pussy. "I\'m not like most girls."');
    scene.text('"Clearly," he laughs before handing you some tissues. You clean up and get dressed before he turns to you. "Where am I dropping you off?" he asks as he starts the engine.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFirstSwallow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'cum_call', 'mouth_swallow', 'A293', 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/normal/sex/cum/mouth_2.mp4');
  scene.text('Hearing this, you quickly climb off of him and lean over to take his cock into your mouth before jerking it, his warm cum soon shooting into your throat as he groans loudly in pleasure.');
  scene.text('Once he\'s finished, you look up at him and obediently swallow his cum before wiping your mouth. He grins as he lights a cigarette and takes a drag before offering you one.');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0) {
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke', 1);
    qspCall(st, 'cum_cleanup', '2');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_smoke.jpg');
    scene.text('You\'re craving a smoke after that performance and eagerly accept it. You lean back in your seat as you take a long drag and exhale.');
    scene.text('"That was some damn fine fucking pussy, baby girl," he says. "And you fucking swallow!"');
    scene.text('You take another drag and smile as you exhale. "I\'m not like most girls."');
    scene.text('"Clearly," he laughs and you both finish smoking before he offers you some tissues. You clean up and get dressed before he turns to you. "Where am I dropping you off?" he asks as he starts the engine.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'cum_cleanup', '2');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_smile.jpg');
    scene.text('You shake your head and he just shrugs before taking a long drag and exhaling as you check your phone.');
    scene.text('"That was some damn fine fucking pussy, baby girl," he says. "And you fucking swallow!"');
    scene.text('You smile. "I\'m not like most girls..."');
    scene.text('"Clearly," he laughs before handing you some tissues. You clean up and get dressed before he turns to you. "Where am I dropping you off?" he asks as he starts the engine.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterFirstPullout(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'cum_call', 'labia', 'A293', 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/normal/sex/cum/pbelly_4.mp4');
  scene.text('You quickly pull yourself off of him and slump down in your seat as he jerks himself off. He soon groans loudly in pleasure as his warm cum splatters over your pussy.');
  scene.text('Once he\'s finished, you sit up in your seat as he lights a cigarette and takes a drag before offering you one.');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0) {
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke', 1);
    qspCall(st, 'cum_cleanup', '1');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_smoke.jpg');
    scene.text('You\'re craving a smoke after that performance and eagerly accept it. You lean back in your seat as you take a long drag and exhale.');
    scene.text('"That was some damn fine fucking pussy, baby girl," he says. "Shame I couldn\'t cum inside it."');
    scene.text('You take another drag of your cigarette. "Getting pregnant is the last thing I need right now."');
    scene.text('He doesn\'t say anything as you both finish smoking and he offers you some tissues. You clean up and get dressed before he turns to you. "Where am I dropping you off?" he asks as he starts the engine.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'cum_cleanup', '1');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_smile.jpg');
    scene.text('You shake your head and he just shrugs before taking a long drag and exhaling as you check your phone.');
    scene.text('"That was some damn fine fucking pussy, baby girl," he says. "Shame I couldn\'t cum inside it."');
    scene.text('You shake your head at him. "Getting pregnant is the last thing I need right now."');
    scene.text('He doesn\'t say anything as he offers you some tissues and you clean up and get dressed before he turns to you. "Where am I dropping you off?" he asks as he starts the engine.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSetHomeActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['student'] === 1) {
    scene.actions([
      { label: 'The metro to the university', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_ride.jpg');
    scene.text('You need to get back to the university, but the bridges are raised, so you ask him to drop you off at the metro station. He nods before putting the car into gear.');
    scene.text('After a short drive, you arrive at the station, where Viktor gives you a smack on the ass as you climb out of the car. "Until next time, baby girl."');
    scene.actions([
      { label: 'Walk into the station', handler: (st: GameState) => {
    qspCall(st, 'core_library', 'setloc', 'city_industrial', '');
    qspGoto(st, 'metro', 'start');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'The residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_ride.jpg');
    scene.text('You ask him to drop you off at the residential area and he nods before putting the car into gear.');
    scene.text('After a short drive, you arrive at the apartment complex, where Viktor gives you a smack on the ass as you climb out of the car. "Until next time, baby girl."');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
    { label: 'The city center', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_ride.jpg');
    scene.text('You ask him to drop you off in the city center. He frowns, seemingly in confusion, but quickly puts the car into gear and sets off.');
    scene.text('After a short drive, you arrive in the city center, where Viktor gives you a smack on the ass as you climb out of the car. "Until next time, baby girl."');
    scene.actions([
      { label: 'Head on your way', goto: ['city_center', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterViktorSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 2, ((s as any).rough ?? 0));
  qspCall(s, 'arousal', 'clit_finger', (-2));
  qspCall(s, 'pain', '2', 'hair', 'pull');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/oral5.mp4');
  scene.text(`Viktor wastes no time and immediately drags you into the bedroom, where he pulls your clothes off and throws you onto the bed. He then undresses himself and you spread your legs as he stands next to the bed, his rock hard ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock awaiting your attention.`);
  scene.text('You obediently take it into your mouth and start passionately sucking on it as you reach down and start teasing your clit. A few seconds later, Viktor wraps your hair in his hand and roughly pulls on it as he rams his cock into your mouth, causing you to choke and splutter as it slides in and out of your throat.');
  scene.text('He just moans loudly in pleasure as he roughly facefucks you.');
  scene.actions([
    { label: 'Missionary', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3, 'rough');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/miss/orgasm_rough1.mp4');
    scene.text('Your jaw is starting to ache and your eyes are starting to water when he finally pulls out. You cough and splutter as you gasp for breath, but Viktor roughly pulls you onto your back, causing you to yelp and giggle in surprise.');
    scene.text('He climbs onto the bed with you and spreads your legs wide before he shoves his dick straight into your pussy, causing you to gasp loudly before he starts pounding you.');
    scene.text('You moan loudly as he thrusts himself as deep inside you as he can, your moans of pleasure and the sound of flesh slapping against flesh loudly echoing around the room before he suddenly clamps his hand over your mouth.');
    scene.text('"Take my cock, slut! Take it all!" he barks as a grin appears on his face.');
    scene.text('Your grunts of pleasure are muffled as he rams his cock deep into your pussy, each thrust bottoming out inside you before he removes his hand and pins your arms above your head.');
    scene.text('He picks his pace back up, pounding your pussy before he suddenly grabs your waist and pulls you into his lap as he rolls over.');
    scene.actions([
      { label: 'Ride and grind', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'arousal', 'kiss', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/hug/kotovsex61.mp4');
    scene.text('You shift your position and start riding him in a sitting position while rotating and grinding your hips, causing the head of his cock to rub up against your inner walls as his shaft slides in and out of your pussy.');
    scene.text('"Just like that, you little slut!" he grunts before he suddenly pulls you in close and starts kissing you, your tongues becoming entwined as you continue to moan in pleasure.');
    scene.text('He grabs you by the hips and grins when he breaks the kiss. "Ready to <i>really</i> ride my dick now, baby girl?"');
    scene.actions([
      { label: 'Cowgirl', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3, 'rough');
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/hard4.mp4');
    scene.text('He falls on his back and you straddle him as he starts roughly thrusting up into your pussy, causing you to moan loudly as the sound of flesh frantically slapping against flesh once again fills the room.');
    scene.text('You squeal and moan as he paws at your ass and roughly spanks you, your ass soon left red and stinging as you eagerly ride him.');
    scene.text('You lose track of time and are reduced to a quivering mess of lewd moans as Viktor pounds your pussy before his cock slips out of you during one of his thrusts and you collapse on top of him, but he doesn\'t give you time to recover.');
    scene.actions([
      { label: 'Stand and carry', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3, 'rough');
    qspCall(st, 'arousal', 'kiss', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/hug/carry1.mp4');
    scene.text('Effortlessly lifting and holding your weight in his muscular arms, he stands up and slides you back down onto his dick, slowly bouncing you on his hips before he starts fucking you just as hard and fast as before.');
    scene.text('"Your tight little pussy is a fucking dream!" he grunts as you instinctively clamp your inner walls around his shaft, your pleasure gradually increasing with every passing second.');
    scene.text('You then wrap your arms around his neck and passionately make out with him, moaning into his mouth as he rams his cock in and out of your now dripping wet pussy, your ass loudly slapping against his hips with every thrust.');
    scene.actions([
      { label: 'Doggy', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3, 'rough');
    qspCall(st, 'pain', '5', 'asscheeks', 'spank');
    qspCall(st, 'pain', '2', 'hair', 'pull');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog11.mp4');
    scene.text('After a few minutes, he suddenly pulls out and drops you down on the bed on all fours. You straddle a pillow and spread your legs before Viktor moves in behind you, pinning you down with a single hand before he slides his dick back inside you and starts roughly fucking you doggystyle while continuing to spank your stinging ass cheeks.');
    scene.text('"Who\'s your daddy?!" he grunts as he suddenly pulls your hair while slamming himself balls deep into you. "Who\'s your fucking daddy, slut?!"');
    scene.text('You\'re too overwhelmed to do anything but scream in pleasure and beg him to go faster as you feel your orgasm approaching.');
    (st as any).orgasm_txt = 'A powerful wave of pleasure soon washes over you and leaves you quivering under Viktor as he continues fucking you throughout your orgasm.';
    (st as any).orgasm_or = 'custom';
    scene.actions([
      { label: 'Ride it out', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'arousal', 'kiss', (-3));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/facedown/kotovsexbonus20.mp4');
    scene.text('Your legs give out and you fall onto your stomach before Viktor pulls your head back and makes out with you, his rapid pounding of you having slowed to a gentle thrust as you ride out your orgasm.');
    scene.text('After a few minutes, he breaks the kiss and picks his pace back up a little before grunting and saying that he\'s about to cum.');
    scene.actions([
      { label: 'Creampie', goto: ['viktor_sex', 'viktor_creampie'] },
      { label: 'Pull out', goto: ['viktor_sex', 'viktor_pullout'] },
      { label: 'Facial', goto: ['viktor_sex', 'viktor_facial'] },
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

function enterViktorCreampie(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 1, 'rough');
  qspCall(s, 'cum_call', '', 'A293', 1);
  qspCall(s, 'arousal', 'end');
  scene.img('images/shared/sex/cum/vagcreampie/doggy5.mp4');
  scene.text('"Do... Do it! Fill... Fill my slutty pussy... With your hot cum..." you manage to say softly between waves of pleasure.');
  scene.text('In response, Viktor firmly grabs you by the hips and thrusts his entire dick into your pussy, groaning loudly as spurt after spurt of his warm cum shoots into you.');
  scene.text('He then pulls out and flops down on the bed next to you, his cum slowly trickling out of your ravaged pussy as he lights a cigarette.');
  scene.text('"Want one?" he asks.');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'I have my own', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke');
    qspCall(st, 'cum_cleanup', '1');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('You shake your head. "Thanks, but I\'ve got my own." He just nods as you bend over the edge of the bed to grab a cigarette from your purse.');
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')) {
      scene.text('You feel his hand squeezing your ass cheek. "God damn, am I in love with this perfect fucking ass of yours!"');
    }
    scene.text('Pulling a smoke out, you light it before flopping back down next to Viktor, taking a drag as the two of you sit in satisfied silence.');
    scene.text('Finishing your cigarette, you extinguish the butt in his ash tray and grab some tissues from his bedside table to clean yourself up.');
    scene.text('Exhausted, you then snuggle down on the bed and struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke', 1);
    qspCall(st, 'cum_cleanup', '1');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('You nod and he hands the cigarette. You light it and take a deep drag as you sit back on the bed, relaxing in satisfied silence with Viktor.');
    scene.text('Finishing your cigarette, you extinguish the butt in his ash tray and grab some tissues from his bedside table to clean yourself up.');
    scene.text('Exhausted, you then snuggle down on the bed and struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'cum_cleanup', '1');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/phone.jpg');
    scene.text('You shake your head and grab some tissues from his bedside table to clean yourself up as he takes a long drag and exhales, filling the room with smoke.');
    scene.text('Finishing his cigarette, he extinguishes the butt in his ash tray before leaving the room. You don\'t bother getting dressed and just roll over and check your phone in satisfied silence for a few minutes before snuggling down on the bed. Exhausted, you struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterViktorPullout(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 1, 'rough');
  qspCall(s, 'cum_call', 'butt', 'A293', 1);
  qspCall(s, 'arousal', 'end');
  scene.img('images/sahred/sex/cum/cum5.mp4');
  scene.text('"Don\'t... Don\'t cum... Inside me. Pull... Pull out..." you manage to say softly between waves of pleasure.');
  scene.text('Viktor slides his dick out of you and you soon feel his warm cum splattering over your ass cheek and lower back as he lets out a satisfied grunt.');
  scene.text('You\'re overwhelmed with pleasure as he flops down next to you and lights a cigarette. He takes a drag before looking at you. "Want one?"');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'I have my own', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke');
    qspCall(st, 'cum_cleanup', '3');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('You shake your head. "Thanks, but I\'ve got my own." He just nods as you bend over the edge of the bed to grab a cigarette from your purse.');
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')) {
      scene.text('You feel his hand squeezing your ass cheek. "God damn, am I in love with this perfect fucking ass of yours!"');
    }
    scene.text('Pulling a smoke out, you light it before flopping back down next to Viktor, taking a drag as the two of you sit in satisfied silence.');
    scene.text('Finishing your cigarette, you extinguish the butt in his ash tray and grab some tissues from his bedside table to clean yourself up.');
    scene.text('Exhausted, you then snuggle down on the bed and struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke', 1);
    qspCall(st, 'cum_cleanup', '3');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('You nod and he hands the cigarette. You light it and take a deep drag as you sit back on the bed, relaxing in satisfied silence with Viktor.');
    scene.text('Finishing your cigarette, you extinguish the butt in his ash tray and grab some tissues from his bedside table to clean yourself up.');
    scene.text('Exhausted, you then snuggle down on the bed and struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'cum_cleanup', '3');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/phone.jpg');
    scene.text('You shake your head and grab some tissues from his bedside table to clean yourself up as he takes a long drag and exhales, filling the room with smoke.');
    scene.text('Finishing his cigarette, he extinguishes the butt in his ash tray before leaving the room. You don\'t bother getting dressed and just roll over and check your phone in satisfied silence for a few minutes before snuggling down on the bed. Exhausted, you struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterViktorFacial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 1, 'rough');
  qspCall(s, 'cum_call', 'face', 'A293', 1);
  qspCall(s, 'arousal', 'end');
  scene.img('images/sahred/sex/cum/facial/jerk_him1.mp4');
  scene.text('"I want you to... Cum... Cum on my face..." you manage to say softly between waves of pleasure.');
  scene.text('Viktor slides his dick out of you and you quickly roll over onto your back as he straddles you. You grab his cock in your hand and quickly jerk him off, soon feeling his warm cum splattering over your face as he lets out a loud grunt.');
  scene.text('Satasfied, he flops down next to you and lights a cigarette before he takes a drag and looks at you. "Want one?"');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'I have my own', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke');
    qspCall(st, 'cum_cleanup', '1');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('You shake your head. "Thanks, but I\'ve got my own."');
    scene.text('He just nods as you bend over the edge of the bed to grab a cigarette from your purse.');
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')) {
      scene.text('You feel his hand squeezing your ass cheek. "God damn, am I in love with this perfect fucking ass of yours!"');
    }
    scene.text('Pulling a smoke out, you light it before flopping back down next to Viktor, taking a drag as the two of you sit in satisfied silence.');
    scene.text('Finishing your cigarette, you extinguish the butt in his ash tray and grab some tissues from his bedside table to clean yourself up.');
    scene.text('Exhausted, you then snuggle down on the bed and struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke', 1);
    qspCall(st, 'cum_cleanup', '1');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('You nod and he hands the cigarette. You light it and take a deep drag as you sit back on the bed, relaxing in satisfied silence with Viktor.');
    scene.text('Finishing your cigarette, you extinguish the butt in his ash tray and grab some tissues from his bedside table to clean yourself up.');
    scene.text('Exhausted, you then snuggle down on the bed and struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    qspCall(st, 'cum_cleanup', '1');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/phone.jpg');
    scene.text('You shake your head and grab some tissues from his bedside table to clean yourself up as he takes a long drag and exhales, filling the room with smoke.');
    scene.text('Finishing his cigarette, he extinguishes the butt in his ash tray before leaving the room. You don\'t bother getting dressed and just roll over and check your phone in satisfied silence for a few minutes before snuggling down on the bed. Exhausted, you struggle to keep your eyes open...');
    scene.actions([
      { label: '...', goto: ['viktor_sex', 'viktor_postsex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterViktorPostsex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1) {
    scene.text('A loud sound suddenly disrupts your sleep. As you slowly crack open your eyes, you see the illuminated screen of your phone, displaying your morning alarm and asking if you want to snooze it.');
    scene.text('You groggily tap it a few times before finally getting it to turn off.');
    scene.actions([
      { label: 'Go back to sleep', handler: (st: GameState) => {
    scene.text('You decide to ignore your alarm and stay in bed. You pull the covers back over yourself and immediately fall back asleep.');
    qspCall(st, 'sleep_simple', 'sleep');
    scene.actions([
      { label: 'Snooze', goto: ['viktor_sex', 'wakeup'] },
    ]);
  } },
      { label: 'Yawn', goto: ['viktor_sex', 'wakeup_alarm'] },
    ]);
  } else {
    qspCall(s, 'sleep_simple', 'sleep');
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).week ?? 0) < 5  &&  ((s as any).university ?? 0)?.['break'] === 0) {
      qspGoto(s, 'viktor_sex', 'wakeup_uni');
    } else {
      qspGoto(s, 'viktor_sex', 'wakeup');
    }
  }
  scene.build();
}

function enterWakeup(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
  scene.text('You awaken and slowly open your eyes. Looking at your surroundings, you realize that you fell asleep in Viktor\'s bed.');
  if (((s as any).hour ?? 0) > 10) {
    scene.text('You glance over and see that the bed next to you is empty, but find a note from Victor telling you he had a lot of fun last night and that you\'re free to use the shower before leaving.');
    scene.text('You check your phone. It reads:');
    scene.text('You lazily roll over and spend a few minutes just relaxing in the comfort of Viktor\'s bed.');
  } else {
    ((s as any).strip_club = (s as any).strip_club ?? {})['viktor_present'] = 1;
    scene.text('You glance over and see him still snoozing away before checking your phone.');
    scene.text('It reads:');
    scene.text('You lazily roll over and spend a few minutes just relaxing in the comfort of Viktor\'s bed.');
  }
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Have a smoke', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'drugs', 'smoke');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_bed_smoke.jpg');
    scene.text('Craving a smoke, you reach into your bag and pull out a cigarette before lighting it. You take a long drag as the events of last night come back to you. You look over at Viktor still snoozing, the memory of him ravaging your pussy becoming vivid in your mind.');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    if (((st as any).strip_club ?? 0)?.['viktor_present'] === 1) {
      scene.text('A few minutes later, you finish your cigarette and extinguish the butt in his ash tray before getting up. Leaving Viktor in bed, you walk out of the bedroom and find the bathroom, where you turn on the water in the shower and step inside.');
      scene.actions([
        { label: 'Clean up', goto: ['viktor_sex', 'wakeup_cleanup'] },
      ]);
    } else {
      scene.text('A few minutes later, you finish your cigarette and extinguish the butt in his ash tray before getting up. Walking out of the bedroom, you find the bathroom, where you turn on the water in the shower and step inside.');
      scene.actions([
        { label: 'Clean up', goto: ['viktor_sex', 'wakeup_cleanup_alone'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['cigarettes'] === 0) {
      scene.actions([
        { label: 'Take one of his cigarettes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'drugs', 'smoke');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_bed_smoke.jpg');
    scene.text('You\'re craving a smoke, but come up empty when you search your bag for a cigarette. You flop back down in frustration before you notice the pack of cigarettes sitting on the nightstand on Viktor\'s side of the bed.');
    scene.text('Without thinking, you reach over and slip one out of the pack before lighting it up and taking a drag. The events of last night come back to you as you look over at Viktor still snoozing, the memory of him ravaging your pussy becoming vivid in your mind...');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    if (((st as any).strip_club ?? 0)?.['viktor_present'] === 1) {
      scene.text('A few minutes later, you finish your cigarette and extinguish the butt in his ash tray before getting up. Leaving Viktor in bed, you walk out of the bedroom and find the bathroom, where you turn on the water in the shower and step inside.');
      scene.actions([
        { label: 'Clean up', goto: ['viktor_sex', 'wakeup_cleanup'] },
      ]);
    } else {
      scene.text('A few minutes later, you finish your cigarette and extinguish the butt in his ash tray before getting up. Walking out of the bedroom, you find the bathroom, where you turn on the water in the shower and step inside.');
      scene.actions([
        { label: 'Clean up', goto: ['viktor_sex', 'wakeup_cleanup_alone'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).strip_club ?? 0)?.['viktor_present'] === 1) {
    scene.actions([
      { label: 'Wake Viktor up', goto: ['viktor_sex', 'wakeup_viktor'] },
      { label: 'Wake Viktor up with a blowjob', goto: ['viktor_sex', 'wakeup_viktor_bj'] },
    ]);
  }
  scene.actions([
    { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    if (((st as any).strip_club ?? 0)?.['viktor_present'] === 1) {
      scene.text('After a few more minutes, you decide to get up and get ready. Leaving Viktor in bed, you walk out of the bedroom and find the bathroom, where you turn on the water in the shower and step inside.');
      scene.actions([
        { label: 'Clean up', goto: ['viktor_sex', 'wakeup_cleanup'] },
      ]);
    } else {
      scene.text('After a few more minutes, you decide to get up and get ready. Walking out of the bedroom, you find the bathroom, where you turn on the water in the shower and step inside.');
      scene.actions([
        { label: 'Clean up', goto: ['viktor_sex', 'wakeup_cleanup_alone'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWakeupAlarm(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
  scene.text('You open your mouth wide, yawning loudly and stretching your arms back as the covers fall off of you.');
  scene.text('Looking at your surroundings, you realize that you fell asleep in Viktor\'s bed. You look over to see him still snoozing away, having slept right through your blaring alarm.');
  scene.text('Checking your phone, the time reads:');
  scene.text('You lazily roll over and spend a few minutes just relaxing in the comfort of Viktor\'s bed before you force yourself to get up.');
  scene.actions([
    { label: 'Go for a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    scene.text('Leaving Viktor in bed, you walk out of the bedroom and find the bathroom, where you turn on the water in the shower and step inside.');
    scene.actions([
      { label: 'Clean up', goto: ['viktor_sex', 'wakeup_cleanup'] },
    ]);
  } },
    { label: 'Get dressed and leave', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(st, 'outfit', 'wear_last_worn');
    scene.text('You climb out of bed and grab your clothes before pulling them on. Deciding to leave Viktor in peace, you give him a quick kiss on the cheek before leaving his apartment.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWakeupUni(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
  scene.text('You awaken feeling groggy as you slowly open your eyes. Looking at your surroundings, you realize that you fell asleep in Viktor\'s bed, and have snuggled into him during the night. You look up to see him still snoozing away before checking your phone.');
  scene.text('It reads:');
  scene.actions([
    { label: 'University!', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(st, 'outfit', 'wear_last_worn');
    scene.text('The realization is enough to startle you awake. You\'re late for university!');
    scene.text('Practically tumbling out of the bed, you start grabbing your clothes and pulling them on as fast as you can.');
    scene.text('Your frantic efforts to get dressed causes Viktor to stir. "What the? Calm down, baby girl! What\'s wrong?"');
    scene.actions([
      { label: 'I need to be somewhere!', handler: (st: GameState) => {
    scene.text('"I\'m late for something!" you say hurriedly. "I need to go <i>now</i>!"');
    scene.text('With one last quick check, you make sure all your clothes are in place and rush out the door, leaving a bewildered Viktor behind.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'I\'m late for university!', handler: (st: GameState) => {
    scene.text('"I\'m late for university! I need to go <i>now</i>!" you huff. "I don\'t even have time for a shower! <i>Fuck!</i>"');
    scene.text('"You need a ride? I can drop you off," he offers.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.text('"No, I\'ll be fine. Thanks for the offer though."');
    scene.text('You quickly brush your hair and make sure all your clothes are in place before rushing out the door.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'That\'d be great', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.text('"Really?" you perk up. "That\'d be great!"');
    scene.text('You quickly brush your hair and collect your things while he pulls on a shirt and jeans before grabbing his keys, then both of you head outside and climb into his car.');
    if (((st as any).drugVars ?? 0)?.['cigarettes_used'] > 0) {
      if (((st as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
        (st as any).minut = ((st as any).minut ?? 0) + 10;
        qspCall(st, 'drugs', 'smoke');
        qspCall(st, 'stat', '');
        scene.img('images/locations/city/redlight/stripclub/viktor_car_smoke.jpg');
        scene.text('Feeling stressed, you rummage through your purse and pull out a cigarette. You light it up and sit back to take a drag, feeling yourself relax as the familiar tingling sensation fills your lungs as Viktor continues driving through the city center on the way to the island. You can only hope that nobody sees him dropping you off...');
        scene.text('You soon reach the university, where you give Viktor a quick kiss and thank him before climbing out of the car.');
        scene.actions([
          { label: 'Continue', goto: ['uni_grounds', ''] },
        ]);
      } else {
        (st as any).minut = ((st as any).minut ?? 0) + 10;
        qspCall(st, 'drugs', 'smoke', 1);
        qspCall(st, 'stat', '');
        scene.img('images/locations/city/redlight/stripclub/viktor_car_smoke.jpg');
        scene.text('Feeling stressed, you frantically rummage through your purse looking for a cigarette, only to come up empty. "<i>FUCK</i>!" you scream as you throw your head back in frustration.');
        scene.text('Seeing your dilemma, Viktor offers you one. You snatch it from his hand and quickly light it up, feeling yourself relax as the familiar tingling sensation fills your lungs.');
        scene.text('"Thanks," you say before sitting back to take another long drag. Viktor just nods as he continues driving; you can only hope that nobody sees him dropping you off...');
        scene.text('You soon reach the university, where you give Viktor a quick kiss and thank him before climbing out of the car.');
        scene.actions([
          { label: 'Continue', goto: ['uni_grounds', ''] },
        ]);
      }
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      qspCall(st, 'stat', '');
      scene.img('images/locations/city/redlight/stripclub/viktor_car_ride.jpg');
      scene.text('Viktor drives through the city center on the way to the island. All you can do is sit back and hope that nobody sees him dropping you off...');
      scene.text('You soon reach the university, where you give Viktor a quick kiss and thank him before climbing out of the car.');
      scene.actions([
        { label: 'Continue', goto: ['uni_grounds', ''] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWakeupCleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'din_van', 'showerdin');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('Your deodorant gets washed away in the shower.');
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('You spend a few seconds just letting the warm water rain down on your head before you give yourself a thorough wash, spending a few more minutes in the shower\'s warm embrace before turning the water off and stepping out.');
  scene.text('Grabbing a towel, you dry yourself off before wrapping it around your body and stepping out into the hallway.');
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You make your way back into the bedroom, where you toss the towel aside and get dressed before giving your hair a quick brush. Feeling clean and refreshed, you turn to see Viktor waking up.');
    scene.text('"Leaving already?" he asks with a smirk.');
    scene.text('"Yeah," you reply. "Got places to be."');
    scene.text('"I\'ll just be a few minutes if you need a lift anywhere?"');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
    scene.text('You shake your head. "Thanks, but I can manage."');
    scene.text('"Okay," he shrugs. "See you at work then."');
    scene.text('You collect your things before giving Viktor a quick kiss, who slaps you on the ass before he pulls out a cigarette and lights it as you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
    scene.text('"That\'d be great!" you reply.');
    scene.text('You collect your things while he pulls on a shirt and jeans before grabbing his keys, then both of you head outside and climb into his car.');
    scene.text('"Where to?" he asks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWakeupSetDropoffActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWakeupCleanupAlone(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'din_van', 'showerdin');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('Your deodorant gets washed away in the shower.');
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('You spend a few seconds just letting the warm water rain down on your head before you give yourself a thorough wash, spending a few more minutes in the shower\'s warm embrace before turning the water off and stepping out.');
  scene.text('Grabbing a towel, you dry yourself off before wrapping it around your body and stepping out into the hallway.');
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You make your way back into the bedroom, where you toss the towel aside and get dressed before giving your hair a quick brush. Feeling clean and refreshed, you grab your belongings and prepare to leave.');
    scene.actions([
      { label: 'Leave Viktor a note', handler: (st: GameState) => {
    ((st as any).strip_club = (st as any).strip_club ?? {})['viktor_present'] = 0;
    scene.text('You quickly write a note for Viktor, thanking him for a good time last night and for letting you stay over. Placing it on the bedside table, you give yourself a quick check over in the mirror before leaving his apartment.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    ((st as any).strip_club = (st as any).strip_club ?? {})['viktor_present'] = 0;
    scene.text('You give yourself a quick check over in the mirror before leaving his apartment.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWakeupSetDropoffActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['student'] === 1) {
    scene.actions([
      { label: 'The university', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_ride.jpg');
    scene.text('"Can you drop me off at the university?"');
    scene.text('"Sure thing, baby girl."');
    scene.text('After a short drive, you arrive at the university, where you lean over and give Viktor a quick kiss before climbing out of the car. He drives off as soon as you close the door.');
    scene.actions([
      { label: 'Continue', goto: ['uni_grounds', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'The residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/viktor_car_ride.jpg');
    scene.text('"Can you drop me off at the residential area?"');
    scene.text('"Sure thing, baby girl."');
    scene.text('After a short drive, you arrive at the apartment complex, where you lean over and give Viktor a quick kiss before climbing out of the car. He drives off as soon as you close the door.');
    scene.actions([
      { label: 'Continue', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWakeupViktor(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
  scene.text('You kiss Viktor softly on the lips, which causes him to stir slightly and open his eyes. "Mmmhm, five more minutes, baby girl. Go take a shower if you want."');
  scene.actions([
    { label: 'Get up', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    scene.text('You leave Viktor in bed as you walk out of the bedroom and find the bathroom, where you turn on the water in the shower and step inside.');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You spend a few seconds just letting the warm water rain down on your head before you give yourself a thorough wash, spending a few more minutes in the shower\'s warm embrace before turning the water off and stepping out.');
    scene.text('Grabbing a towel, you dry yourself off before wrapping it around your body and stepping out into the hallway.');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'hj', 5);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/foreplay/standing1.jpg');
    scene.text('You barely make it back into the bedroom when Viktor suddenly and effortlessly rips away your towel and pulls you into a tight embrace. You moan softly as he runs his hand between the back of your legs and nuzzles your neck. You in turn grab his cock and start slowly jerking it, feeling it quickly grow hard in your hand.');
    scene.text('"Such a sexy little body... I\'d love to go another round with you, but I have places to be..." he pouts.');
    scene.actions([
      { label: 'So do I', handler: (st: GameState) => {
    scene.text('"So do I. Can I get dressed now?" you ask and he somewhat reluctantly lets you go.');
    scene.text('"Need a lift anywhere once you\'re ready?" he asks.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You shake your head. "Thanks, but I can manage."');
    scene.text('You collect your things before giving Viktor a quick kiss, who slaps you on the ass before you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
    scene.text('"That\'d be great!" you reply.');
    scene.text('Once you\'re dressed, he grabs his keys and you head outside and climb into his car.');
    scene.text('"Where to?" he asks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWakeupSetDropoffActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Suggest a blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'cum_call', 'mouth_swallow', 'A293', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images//locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral1.mp4');
    scene.text('You continue letting his hands roam over your body. "Surely you have enough time for me to suck your dick?" you ask teasingly as you continue jerking his now rock hard cock.');
    scene.text(`He doesn't need to be asked twice and pushes you down onto your knees in front of him. You immediately take his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock into your mouth, swallowing as much of his shaft as you can before you start sucking and bobbing your head up and down.`);
    scene.text('You spend the next few minutes passionately sucking him off before he suddenly wraps your hair around his hand and slams you down on his cock. You choke and gag as he roughly slides you up and down his shaft before he pushes you down and holds you firmly in place.');
    scene.text('You close your eyes and soon feel spurts of warm cum splattering into your throat as Viktor grunts loudly. You quickly start gulping it down to stop yourself from choking.');
    scene.text('"That was just what I needed to start my day, baby girl!" he laughs as he slides his dick out of your mouth. "Need a lift anywhere once you\'re ready?"');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You cough while shaking your head. "Thanks, but I can manage."');
    scene.text('You get dressed, quickly brush your hair and collect your things before giving Viktor a quick kiss, who slaps you on the ass before you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
    scene.text('"That\'d... Thad\'t be great!" you reply through coughs.');
    scene.text('Once you\'re dressed, he grabs his keys and you head outside and climb into his car.');
    scene.text('"Where to?" he asks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWakeupSetDropoffActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
    scene.text('You make your way back into the bedroom, where you toss the towel aside and get dressed before giving your hair a quick brush before looking over and seeing Viktor waking up.');
    scene.text('"Need a lift anywhere?" he asks as he lights a cigarette.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.text('You shake your head. "Thanks, but I can manage."');
    scene.text('You collect your things before giving Viktor a quick kiss, who slaps you on the ass before you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
    scene.text('"That\'d be great!" you reply and you collect your things as he quickly gets dressed.');
    scene.text('After making sure everything is in order, you both head outside and climb into his car. "Where to?" he asks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWakeupSetDropoffActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
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

function enterWakeupViktorBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 2);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/handjob/hj2.mp4');
  scene.text('The memory of last night is still fresh in your mind and you\'re feeling a little naughty, so you pull the covers back and grope Viktor\'s bulge through his shorts. He moans softly as you pull his shorts down and start jerking his dick in your hand before you slide down and start sucking on his balls.');
  scene.actions([
    { label: 'Keep going', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 2);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/bj0.mp4');
    scene.text(`You continue sucking on Viktor's balls and jerking his cock as he moans softly in his sleep. After a few minutes of this, you take his now rock hard ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock into your mouth and start sucking while taking as much of it into your throat as you can.`);
    scene.text('Viktor groans loudly and you look up to see him grinning down at you.');
    scene.text('"Best alarm clock ever..."');
    scene.actions([
      { label: 'Keep sucking his dick', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 2);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/bj3.mp4');
    scene.text('You keep sucking as you shift position and lie down next to him. You start deepthroating his huge cock as he lies back and lets you control the action. After a few minutes, he grunts and tells you he\'s about to cum.');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', 'A293', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/cum/mouth/cum1.mp4');
    scene.text('You keep your lips wrapped firmly around his cock as you feel it twitching in your mouth and spurts of cum shoot into your throat. When he finishes blowing his load with a satisfied groan, you slide his dick out of your mouth and look up at him as you swallow his cum.');
    scene.text('He grins at you. "God damn baby girl, that was the best way to wake up. You\'re free to use the shower if you want to clean up."');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    scene.text('You get up and head to the bathroom, where you turn on the water in the shower and step inside.');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You spend a few seconds just letting the warm water rain down on your head before you give yourself a thorough wash, spending a few more minutes in the shower\'s warm embrace before turning the water off and stepping out.');
    scene.text('Grabbing a towel, you dry yourself off before wrapping it around your body and stepping out into the hallway.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You make your way back into the bedroom, where you toss the towel aside and get dressed before giving your hair a quick brush, all under Viktor\'s gaze.');
    scene.text('"Need a lift anywhere?" he asks.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
    scene.text('You shake your head. "Thanks, but I can manage."');
    scene.text('"Okay," he shrugs. "See you at work then."');
    scene.text('You collect your things before giving Viktor a quick kiss, who slaps you on the ass before he pulls out a cigarette and lights it as you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
    scene.text('"That\'d be great!" you reply.');
    scene.text('You collect your things while he grabs his keys, then both of you head outside and climb into his car.');
    scene.text('"Where to?" he asks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWakeupSetDropoffActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Facial', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', 'A293', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/cum/facial/facial35.jpg');
    scene.text('Hearing this, you quickly pop his dick out of your mouth and start jerking him off. He starts grunting loudly and spurts of cum are soon splattering across your face and chin. He finishes with a satisfied groan and you take his cock back into your mouth and suck it clean before flopping down next to him.');
    scene.text('He grins at you. "God damn baby girl, that was the best way to wake up! You\'re free to use the shower if you want to clean up."');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    scene.text('You get up and head to the bathroom, where you turn on the water in the shower and step inside.');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You spend a few seconds just letting the warm water rain down on your head before you give yourself a thorough wash, spending a few more minutes in the shower\'s warm embrace before turning the water off and stepping out.');
    scene.text('Grabbing a towel, you dry yourself off before wrapping it around your body and stepping out into the hallway.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You make your way back into the bedroom, where you toss the towel aside and get dressed before giving your hair a quick brush, all under Viktor\'s gaze.');
    scene.text('"You need a lift anywhere?" he asks.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
    scene.text('You shake your head. "Thanks, but I can manage."');
    scene.text('"Okay," he shrugs. "See you at work then."');
    scene.text('You collect your things before giving Viktor a quick kiss, who slaps you on the ass before he pulls out a cigarette and lights it as you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
    scene.text('"That\'d be great!" you reply.');
    scene.text('You collect your things while he grabs his keys, then both of you head outside and climb into his car.');
    scene.text('"Where to?" he asks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWakeupSetDropoffActs(st, scene); (st as any).locArgs = __savedLocArgs; }
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
      { label: 'Have a quickie', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/hard4.mp4');
    scene.text('The memories of last night continue drifting into your mind and you start getting a little wet. You need his cock inside you. "How about you fuck my little pussy like you did last night?" you ask teasingly while stroking his cock.');
    scene.text('"I guess we have time for a quick one," he grins before quickly pulling you on top of him. You guide his dick into your eager pussy, moaning softly as it stretches you out.');
    scene.text('He doesn\'t waste any time and starts pounding you hard and fast, causing you to moan and squeal loudly in pleasure as his dick thrusts deep into your pussy. After a few minutes of this, Viktor grunts that he\'s about to cum.');
    scene.actions([
      { label: 'Creampie', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 2);
    qspCall(st, 'cum_call', '', 'A293', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/cum/cowgirl1.jpg');
    scene.text('"Cum inside me! I want to feel your hot cum inside my pussy!" you cry out and Viktor goes even faster until he thrusts as deeply as he can inside you. You feel his dick twitching inside you as spurt after spurt of warm cum shoot deep into your pussy.');
    scene.text('He finishes with a satisfied groan and you pull yourself off of his cock to show him his cum slowly leaking out of you.');
    scene.text('"What a great start to the day," he laughs. "You can use the shower to clean up."');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    scene.text('You get up and head to the bathroom, where you turn on the water in the shower and step inside.');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'cum_cleanup', '3');
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You spend a few seconds just letting the warm water rain down on your head before you give yourself a thorough wash, spending a few more minutes in the shower\'s warm embrace before turning the water off and stepping out.');
    scene.text('Grabbing a towel, you dry yourself off before wrapping it around your body and stepping out into the hallway.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You make your way back into the bedroom, where you toss the towel aside and get dressed before giving your hair a quick brush. Feeling clean and refreshed, you turn to see Viktor waking up.');
    scene.text('"Leaving already?" he asks with a smirk.');
    scene.text('"Yeah," you reply. "Got places to be."');
    scene.text('"I\'ll just be a few minutes if you need a lift anywhere?"');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
    scene.text('You shake your head. "Thanks, but I can manage."');
    scene.text('"Okay," he shrugs. "See you at work then."');
    scene.text('You collect your things before giving Viktor a quick kiss, who slaps you on the ass before he pulls out a cigarette and lights it as you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
    scene.text('"That\'d be great!" you reply.');
    scene.text('You collect your things while he grabs his keys, then both of you head outside and climb into his car.');
    scene.text('"Where to?" he asks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWakeupSetDropoffActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 2);
    qspCall(st, 'cum_call', 'butt', 'A293', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/cum/cum4.jpg');
    scene.text('You quickly pull yourself off of his dick just as he\'s about to cum and feel his warm cum splattering over your ass as you sit on his lap. He finishes with a satisfied groan and you smile at each other.');
    scene.text('"What a great start to the day," he laughs. "You can use the shower to clean up."');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/romance/misc/nude_walk1.mp4');
    scene.text('You get up and head to the bathroom, where you turn on the water in the shower and step inside.');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You spend a few seconds just letting the warm water rain down on your head before you give yourself a thorough wash, spending a few more minutes in the shower\'s warm embrace before turning the water off and stepping out.');
    scene.text('Grabbing a towel, you dry yourself off before wrapping it around your body and stepping out into the hallway.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You make your way back into the bedroom, where you toss the towel aside and get dressed before giving your hair a quick brush, all under Viktor\'s gaze.');
    scene.text('"You need a lift anywhere?" he asks.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/homes/multibedroom/1/bedroom.jpg');
    scene.text('You shake your head. "Thanks, but I can manage."');
    scene.text('"Okay," he shrugs. "See you at work then."');
    scene.text('You collect your things before giving Viktor a quick kiss, who slaps you on the ass before he pulls out a cigarette and lights it as you head on your way.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
    scene.text('"That\'d be great!" you reply.');
    scene.text('You collect your things while he grabs his keys, then both of you head outside and climb into his car.');
    scene.text('"Where to?" he asks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWakeupSetDropoffActs(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'first_time':
      enterFirstTime(s, scene);
      break;
    case 'first_creampie':
      enterFirstCreampie(s, scene);
      break;
    case 'first_swallow':
      enterFirstSwallow(s, scene);
      break;
    case 'first_pullout':
      enterFirstPullout(s, scene);
      break;
    case 'set_home_acts':
      enterSetHomeActs(s, scene);
      break;
    case 'viktor_sex1':
      enterViktorSex1(s, scene);
      break;
    case 'viktor_creampie':
      enterViktorCreampie(s, scene);
      break;
    case 'viktor_pullout':
      enterViktorPullout(s, scene);
      break;
    case 'viktor_facial':
      enterViktorFacial(s, scene);
      break;
    case 'viktor_postsex':
      enterViktorPostsex(s, scene);
      break;
    case 'wakeup':
      enterWakeup(s, scene);
      break;
    case 'wakeup_alarm':
      enterWakeupAlarm(s, scene);
      break;
    case 'wakeup_uni':
      enterWakeupUni(s, scene);
      break;
    case 'wakeup_cleanup':
      enterWakeupCleanup(s, scene);
      break;
    case 'wakeup_cleanup_alone':
      enterWakeupCleanupAlone(s, scene);
      break;
    case 'wakeup_set_dropoff_acts':
      enterWakeupSetDropoffActs(s, scene);
      break;
    case 'wakeup_viktor':
      enterWakeupViktor(s, scene);
      break;
    case 'wakeup_viktor_bj':
      enterWakeupViktorBj(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const viktor_sex: LocationDef = {
  name: 'viktor_sex',
  title: 'You climb into Viktor\'s car and he speeds off, clearly inten',
  region: 'other',
  enter: enter,
};
