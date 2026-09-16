import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'boyStat', 'A119');
  scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
  if (((s as any).pcafejob ?? 0) <= 0) {
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>," he greets you. "Enjoying the cafe?"
    scene.text(`"${((s as any).pcs_firstname || '')}," he greets you. "Enjoying the cafe?"`);
  }
  if (((s as any).pcafejob ?? 0) >=2  &&  ((s as any).pcafejob ?? 0) <= 4) {
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>," he greets you. "Are you here to work a shift?"
    scene.text(`"${((s as any).pcs_firstname || '')}," he greets you. "Are you here to work a shift?"`);
  }
  if (((s as any).pcafejob ?? 0) === 4  &&  ((s as any).slavadealfuck ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('"Or do you want to have some fun?"');
  }
  if (((s as any).pcafejob ?? 0) === 1) {
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>," he greets you. "Are you here for another interview to disc...
    scene.text(`"${((s as any).pcs_firstname || '')}," he greets you. "Are you here for another interview to discuss that 'job offer?' he says with the faintest hint of a smile at the corners of his lips.`);
  }
  if (((s as any).pcafejob ?? 0) === 1  &&  ((s as any).slavadealfuck ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Let\'s get this over with', goto: ['motherkafeboss', 'slava_deal'] },
      { label: 'I\'ve reconsidered the job offer', handler: (st: GameState) => {
    (s as any).pcafejob = 2;
    scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
    scene.text('"If I\'m going to do this, then you have to pay me as a waitress."');
    scene.text('"So long as you recognize you\'re going to work as a waitress too. I don\'t need to spend extra money paying for a whore. If I wanted that, I\'d just get it from your mother for free."');
    scene.text('You grit your teeth in anger at his final comment as he stands from his chair and moves towards you.');
    scene.text('You can start right away.');
    scene.actions([
      { label: 'Start shift', goto: ['motherkafeboss', 'work_shift'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcafejob ?? 0) >=2  &&  ((s as any).pcafejob ?? 0) <= 4) {
    scene.actions([
      { label: 'Work a shift', goto: ['motherkafeboss', 'work_shift'] },
    ]);
  }
  if (((s as any).momslut ?? 0) === 2  &&  (!((s as any).slavatalk ?? 0))) {
    scene.actions([
      { label: 'Confront him about your mother', goto: ['motherkafeboss', 'confrontation'] },
    ]);
  }
  if (((s as any).slavatalk ?? 0) === 2) {
    scene.actions([
      { label: 'Confront him about your deal', goto: ['motherkafeboss', 'dealbreaker'] },
    ]);
  }
  if (((s as any).pcafejob ?? 0) === 4  &&  ((s as any).slavadealfuck ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Fuck Slava', goto: ['motherkafeboss', 'slava_deal'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterConfrontation(s: GameState, scene: SceneBuilder): void {
  (s as any).slavatalk = 1;
  scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
  scene.text('You walk up to Borislav and he turns to face you.');
  // TODO-QSP: dynamic text: "Hello there, <<$pcs_nickname>>. What brings you by today? Did you want somethin...
  scene.text(`"Hello there, ${((s as any).pcs_nickname || '')}. What brings you by today? Did you want something to eat?"`);
  // TODO-QSP: dynamic text: Ignoring his question you bluntly say, "I know you've been fucking <<$npc_nickna...
  scene.text(`Ignoring his question you bluntly say, "I know you've been fucking ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}." He pauses briefly at your words and glances around the room at the customers.`);
  scene.text('"Why don\'t we talk about this in the back?" he says calmly. "We don\'t want to cause trouble for your mother do we?" You give him a hard look and follow him as he escorts you into a back room of the cafe.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
    scene.text('Once both inside, he shuts the door behind you and sits down casually in his desk chair.');
    scene.text('"So. What\'s this about?"');
    // TODO-QSP: dynamic text: "I told you. I know you've been fucking my <<$npc_nickname['A29']>>. She told me...
    scene.text(`"I told you. I know you've been fucking my ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}. She told me everything."`);
    scene.text('He raises his eyebrow as you say this. "What exactly did she tell you?"');
    scene.text('"She told me that you only hire her because she lets you fuck her! And since she needs the job, she can\'t do anything but continue to let you fuck her and make a cuck out of dad!"');
    scene.text('Borislav shifts in his chair and studies you. Given the subject of the conversation, you can\'t help but feel that he\'s acting too calmly."');
    scene.text('"So? This doesn\'t explain why you\'re here. What do you want from me?"');
    scene.actions([
      { label: '', labelFn: (s: GameState) => '"I want you to stop blackmailing ' + String(((s as any).npc_nickname ?? 0)?.['A29'] ?? '' ?? '') + '"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
    // TODO-QSP: dynamic text: "I want you to stop blackmailing <<$npc_nickname['A29']>>," you say. "Stop extor...
    scene.text(`"I want you to stop blackmailing ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}," you say. "Stop extorting her for sex and just let her work here as a normal waitress."`);
    scene.text('Borislav snorts slightly, dismissive of your suggestion. "And why should I do that?" You start to raise your voice and tell him of the consequences when he interrupts you.');
    scene.text('"Say you go to the police about this, you have no proof that I\'ve done anything wrong here. And even if you did, it doesn\'t work out for you in the end does it? If I get punished or go to jail, your mother is out of a job so you lose anyways."');
    scene.text('Your arguments die in your throat. He\'s right. Even if you win here, you still lose.');
    scene.text('"Did you have anything else you wanted to get off your chest or are we done here?" Borislav asks while inattentively checking the time on his watch.');
    scene.actions([
      { label: 'Make a deal', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('You think about what he just said, mind racing for a way out of this to make everyone happy, or at least solve the problems with your parents marriage. Suddenly, you realize there\'s only one thing you can do…');
    scene.actions([
      { label: 'Offer yourself instead', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('"I\'ll make a deal with you." you say firmly.');
    scene.text('"Oh?" Slava seems to be interested in what you have to say for the first time. "What kind of deal?"');
    // TODO-QSP: dynamic text: "Stop fucking <<$npc_nickname['A29']>>. And in return…" you trail off into a pau...
    scene.text(`"Stop fucking ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}. And in return…" you trail off into a pause. "I'll let you fuck me instead."`);
    if (((s as any).age ?? 0) < 20) {
      scene.text('"Oh ho ho," he chuckles. "I must admit, I wasn\'t expecting this. I\'d be lying if I didn\'t find this offer tempting," he says, eyeing your nubile teenage body. "The younger model does seem like it might be more fun than the older one… But still, I\'m not sure how I feel about taking something like this without giving something in return. Are you also looking for a job here? Something to supplement your family\'s income? Or are you just doing this for the sake of your mother\'s -- or should I say stepfather\'s -- honor?"');
    }
    if (((s as any).age ?? 0) >= 20) {
      scene.text('"Oh ho ho," he chuckles. "I must admit, I wasn\'t expecting this. I\'d be lying if I didn\'t find this offer tempting," he says, eyeing your young nubile body. "The younger model does seem like it might be more fun than the older one… But still, I\'m not sure how I feel about taking something like this without giving something in return. Are you also looking for a job here? Something to supplement your family\'s income? Or are you just doing this for the sake of your mother\'s -- or should I say stepfather\'s -- honor?"');
    }
    scene.actions([
      { label: 'Take the job', handler: (st: GameState) => {
    (s as any).pcafejob = 2;
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('You mull it over in your mind. In a strange way, if you took the job, it <i>would</i> feel like justice. Even if he\'s still getting away with something, he\'ll essentially be doubling his payment having to pay both your mother and you.');
    scene.text('"Yes. I want compensation. If I\'m going to do this, then you have to pay me as a waitress."');
    scene.text('"So long as you recognize you\'re going to work as a waitress too. I don\'t need to spend extra money paying for a whore. If I wanted that, I\'d just get it from your mother for free."');
    scene.text('You grit your teeth in anger at his final comment as he stands from his chair and moves towards you.');
    scene.text('"Right then. Take off your clothes!"');
    scene.actions([
      { label: '"What??"', goto: ['motherkafeboss', 'first_sex1'] },
    ]);
  } },
      { label: 'You\'re doing this for family', handler: (st: GameState) => {
    (s as any).pcafejob = 1;
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('"No!" you cry. "I won\'t let you make this about money! I\'m doing this to save my parent\'s marriage."');
    scene.text('Slava laughs again. "Very well, your choice. If you ever change your mind, feel free to let me know." He gets up from his chair and moves towards you.');
    scene.text('"Right then. Take off your clothes!"');
    scene.actions([
      { label: '"What??"', goto: ['motherkafeboss', 'first_sex1'] },
    ]);
  } },
    ]);
  } },
      { label: 'You don\'t want to do this, ever!', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    scene.img('images/locations/pavlovsk/trainstation/cafe/gkafe2.jpg');
    scene.text('No. You just can\'t do it. Even if it\'s for your parents sake, you can\'t make a deal like this.');
    scene.text('"Well?" he asks, impatiently checking his watch again.');
    scene.text('You shake your head in anger, more at yourself than at him. Borislav walks past you to open the door and you leave with your head held low.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Accept defeat - for now.', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).slavatalk = 0;
    scene.img('images/locations/pavlovsk/trainstation/cafe/gkafe2.jpg');
    scene.text('There\'s nothing you can do. With a sinking heart you shake your head before Borislav gets up and opens the door, watching you walk away before going back to his customers.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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

function enterDealbreaker(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/trainstation/cafe/gkafe2.jpg');
  scene.text('"Back room. Now."');
  scene.text('You forcefully spit words at him and then move straightaway to the back room and wait for him at his desk.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('He curiously follows you in and shuts the door behind him.');
    // TODO-QSP: dynamic text: What's this about <<$pcs_nickname>>? Did you want to talk about something?"
    scene.text(`What's this about ${((s as any).pcs_nickname || '')}? Did you want to talk about something?"`);
    scene.actions([
      { label: 'I thought we had a deal!', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
    scene.text('"Yeah I wanted to talk about something!" you say with a raised voice, practically shouting. "I thought we had a deal!"');
    scene.text('Slava seems to have a confused look on his face. "We do have a deal, and I\'m--"');
    // TODO-QSP: dynamic text: You cut him off. "I know you're still fucking <<$npc_nickname['A29']>>! I saw yo...
    scene.text(`You cut him off. "I know you're still fucking ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}! I saw you when you closed the cafe again! What do you think you're doing? You said we had a deal but you're not--"`);
    scene.text('It\'s Slava\'s turn to cut you off this time only it\'s with laughter. Wholehearted, cheerful laughter. You can\'t believe what you\'re seeing. How can he laugh at you like this?"');
    scene.text('"Oh so you think it\'s so funny that you\'re just fucking my family like this? How can you do this? What\'s so funny about this?!"');
    scene.actions([
      { label: '"Unbelievable…"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
    scene.text('Slava finishes his laughter and chuckles while you sit there in front of him fuming before he finally speaks.');
    scene.text('"Well, it is true that I was lying to you about our deal. But in some ways I supposed that finding out the truth would be much more painful."');
    scene.text('"What?? How could the truth be more painful than--" he holds up his hand to stop you.');
    scene.text('"Let me explain," he says. "I don\'t deny that I acted selfishly, getting a little extra on the side from you. After all, it\'s hard to turn down the opportunity to fuck a younger girl\'s pussy. But the only lie I told was when I let you believe I was blackmailing your mother."');
    scene.actions([
      { label: '"What?"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('"What are you talking about?" you ask suspiciously.');
    // TODO-QSP: dynamic text: He smiles at you and continues. "You see <<$pcs_firstname>>, I never extorted yo...
    scene.text(`He smiles at you and continues. "You see ${((s as any).pcs_firstname || '')}, I never extorted your mother to begin with. That story she told you about how I fuck her in return for letting her work here is the real lie. She's a good worker and an excellent waitress. Her contributions here are what earns her place here, not anything else. The truth is that your mother is just a slut."`);
    scene.text('"How dare you!" you shout back. "How dare you shame my mother and drag her name through the gutter like this! All just to keep pretending you\'re not lying! How dare you call her a slut!"');
    scene.text('Slava starts to laugh again. "Girl, if your mother\'s name is in the gutter it\'s because she put it there herself. Your mother has been a slut since as long as this town can remember. She was a slut when she was in school, she was a slut before she got pregnant, she was a slut after she had kids, and she\'s still a slut today. I fuck your mother because she asks me to and no other reasons."');
    scene.text('You feel your face go pale as you consider what he\'s saying. "But-!"');
    scene.text('"But what?" he interrupts. "Think about what you saw, really. Did it look like I was blackmailing her? Did she look reluctant or unhappy? Or did she look like a wanton whore, ready, willing, and wanting to please?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('You slump your shoulders and lean back against the desk with the realizations. How loud your mother\'s moans were even through the window, how quickly she\'d drop to her knees after he came inside her, the whispers you hear about your family around town. He\'s right. Your mother is undeniably a slut.');
    if (((s as any).gaveSlavaVirginity ?? 0) === 1) {
      scene.text('"B-but… You took my virginity." you state with a look of horror on your face.');
      scene.text('He laughs again, even more cheerful this time. "That I did. Breaking in your young virgin pussy was enjoyable."');
    }
    if (((s as any).pcafejob ?? 0) === 2) {
      scene.text('"Listen," he says. "Since you\'ve found out the truth, our bargain doesn\'t hold up anymore. If you want to stop that, you can even still work here, no strings attached. Like I said, I need another waitress anyways. How does that sound?"');
    }
    scene.actions([
      { label: 'Leave without saying anything', handler: (st: GameState) => {
    (s as any).pcafejob = 3;
    (s as any).slavatalk = 3;
    scene.text('Unable to say a word, you just walk out, your head spinning as you do.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'I can\'t work here anymore', handler: (st: GameState) => {
    (s as any).pcafejob = 5;
    (s as any).slavatalk = 3;
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('"No," you say. "I can\'t work here anymore." Everything about this has shaken you to your core. You can\'t just keep going on like nothing happened.');
    scene.text('Slava nods. "I understand. If you ever change your mind, just let me know."');
    scene.text('You don\'t know how you\'re supposed to feel about that. The only thing you\'re sure of is that you feel like throwing up…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'I need to think about this', handler: (st: GameState) => {
    (s as any).pcafejob = 3;
    (s as any).slavatalk = 3;
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('"I… I need to think about this…" you say, and stumble out of the room before Slava can respond.');
    scene.text('Everything about this has shaken you to your core. Your head is spinning. What are you supposed to do about this?');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((s as any).npc_nickname ?? 0)?.['A29'] ?? '' ?? '') + '! I\'m fucking him!', handler: (st: GameState) => {
    (s as any).pcafejob = 4;
    (s as any).slavatalk = 3;
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('As thoughts of your mother circulate you suddenly think of her obsessive controlling behavior.');
    scene.text('How she made you go to the doctor to prove your virginity every month…');
    scene.text('How much she tells you to stay away from boys…');
    scene.text('How she keeps telling you not to become a slut…');
    scene.text('All these thoughts about your mother\'s hypocritical behavior whirl through your head and you finally snap.');
    scene.text('"I have an idea instead…" you say mischievously.');
    scene.actions([
      { label: 'Strip down', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'backup', 'kafe');
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/undress/kotovpre11.mp4');
    scene.text('You start to tear off your clothes and soon enough you\'re completely naked.');
    scene.text('"I must admit, this is not the reaction I was expecting," Slava smiles appreciatively as you back him up and push him down onto the couch.');
    scene.text('You smile back and kneel down to unzip his trousers, "My mother has been telling me not to be a slut or have a boyfriend or do anything sexual for as long as I can remember. Let\'s just say I\'m sick of that."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/kotovbj1.jpg');
    scene.text('You pull Slava\'s already hardening cock out, gently jacking it off and licking the tip.');
    scene.text('"You\'re doing all this just to get back at your mother?"');
    scene.actions([
      { label: 'Exactly', handler: (st: GameState) => {
    scene.text('"Exactly," you say, before getting down to business.');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'kafe');
    qspGoto(s, 'motherkafeboss', 'cloth_bj');
  } },
    ]);
  } },
      { label: 'No, I just want to be free', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "No, this isn't about her," you say before teasingly circling your tongue around...
    scene.text(`"No, this isn't about her," you say before teasingly circling your tongue around his tip. "I've been locked up in this cage of chastity for too long. It's not about ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, it's about me. I'm free to do whatever I want and no one is going to tell me otherwise anymore." You give him one last smile before plunging onto his cock headfirst.`);
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'kafe');
    qspGoto(s, 'motherkafeboss', 'cloth_bj');
  } },
    ]);
  } },
      { label: 'No, you just helped me realize I love sex', handler: (st: GameState) => {
    scene.text('"Nope!" you say, teasingly circling the tip of his cock with your tongue. "You just helped me realize how much I love sex." And with that, you waste no more time and plunge yourself headfirst onto his cock.');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'kafe');
    qspGoto(s, 'motherkafeboss', 'cloth_bj');
  } },
    ]);
  } },
      { label: 'I\'m going to become a huge slut just to show her', handler: (st: GameState) => {
    scene.text('"Exactly," you say. "I\'m going to become a huge slut just to piss her off. She thinks she fucked around when she was my age? I\'ll show her. I\'ll show everyone what it really means to be a slut. And I might not be satisfied until I\'ve tasted every cock in this town, maybe even every cock in St. Petersburg!"');
    scene.text('And with that declaration, you can\'t take it anymore and climb onto the sofa to ride his cock.');
    scene.actions([
      { label: 'Fuck him', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'kafe');
    qspGoto(s, 'motherkafeboss', 'cloth_fuck');
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

function enterWorkShift(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/cafe/waitress_client.jpg');
  scene.text('Placeholder');
  (s as any).pcafetip = Math.floor(Math.random() * 101) + 40;
  // TODO-QSP: gs 'money', 'earn', 300 + pcafetip
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  if (((s as any).pcs_servng ?? 0) < 100) {
    qspCall(s, 'exp_gain', 'servng', 1);
  }
  // TODO-QSP: dynamic text: You worked as a waitress for 2 hours and made <<$func('money', 'string_profit', ...
  scene.text(`You worked as a waitress for 2 hours and made ${qspFunc(s, 'money', 'string_profit', 300)} plus ${qspFunc(s, 'money', 'string_profit', ((s as any).pcafetip || ''))} in tips.`);
  if (((s as any).slavadealfuck ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('As you finish up your shift, Slava catches your eye and gestures towards the back room.');
    scene.actions([
      { label: 'Uphold the deal', handler: (st: GameState) => {
    (s as any).slavadealfuck = ((s as any).daystart ?? 0);
    qspGoto(s, 'motherkafeboss', 'slava_deal');
  } },
    ]);
  } else {
    scene.text('You finish up your shift and glance at Slava but since you\'ve already fucked today, your end of the deal has already been upheld and he doesn\'t pay attention to you.');
    scene.actions([
      { label: 'Finish your shift', goto: ['gkafe', ''] },
      { label: 'You want to fuck anyway', goto: ['motherkafeboss', 'slava_deal'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWorkCock(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/cafe/waitress_client.jpg');
  scene.text('Placeholder');
  (s as any).pcafetip = Math.floor(Math.random() * 101) + 40;
  // TODO-QSP: gs 'money', 'earn', 300 + pcafetip
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  // TODO-QSP: dynamic text: You worked as a waitress for 2 hours and made <<$func('money', 'string_profit', ...
  scene.text(`You worked as a waitress for 2 hours and made ${qspFunc(s, 'money', 'string_profit', 300)} plus ${qspFunc(s, 'money', 'string_profit', ((s as any).pcafetip || ''))} in tips.`);
  if (((s as any).slavadealfuck ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('As you finish up your shift, Slava catches your eye and gestures towards the back room.');
    scene.actions([
      { label: 'Uphold the deal', handler: (st: GameState) => {
    (s as any).slavadealfuck = ((s as any).daystart ?? 0);
    qspGoto(s, 'motherkafeboss', 'slava_deal');
  } },
    ]);
  } else {
    scene.text('You finish up your shift and glance at Slava but since you\'ve already fucked today, your end of the deal has already been upheld and he doesn\'t pay attention to you.');
    scene.actions([
      { label: 'Finish your shift', goto: ['gkafe', ''] },
      { label: 'You want to fuck anyway', goto: ['motherkafeboss', 'slava_deal'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstSex1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
  scene.text('"W-what??" you stammer, instinctively backing up as he comes closer.');
  // TODO-QSP: dynamic text: "Oh come now <<$pcs_nickname>>, I thought you were serious about this. If you're...
  scene.text(`"Oh come now ${((s as any).pcs_nickname || '')}, I thought you were serious about this. If you're going to take your mother's place then you might as well start now, shouldn't you?"`);
  scene.text('"I-! I-!" You have to admit, you didn\'t entirely think this through. When you talked about the deal you thought of it as something in the distant future, not something about to happen right now!');
  scene.text('"W-w-what about your customers?" you try to say as an excuse.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Eek-!"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/strip2.mp4');
    scene.text('You yelp when you suddenly feel Slava\'s hand on your ass, giving it a firm groping.');
    scene.text('"They\'ll be fine without me for a few minutes. It\'s not like this is going to take very long… Now come on. Clothes off. <i>Now.</i> Or the deal is off."');
    scene.actions([
      { label: 'Reluctantly undress', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/strip2.mp4');
    scene.text('On the verge of crying, you begin to take off your clothes one by one until you stand completely nude. Your clothes littering the floor around you, you cover your breasts and pussy in shame and look away.');
    scene.text('Suddenly you hear a sound and you look back to see Borislav unzipping his trousers and pulling his cock out.');
    scene.text('"Get on your knees."');
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/blowjob_forced.mp4');
    scene.text('Kneeling down, his cock practically slaps you in the face as he waves it around in front of you.');
    scene.text('"I don\'t have all day for this girl," he says, roughly grabbing you by the hair and forcing his cock into your mouth.');
    scene.text('Your eyes go wide and tear up. You concentrate on keeping your mouth as wide as possible and it\'s all you can do not to choke on it. Soon one thrust turns into five and five into fifteen and soon you have no idea how long it\'s been, unable to keep track of anything but the tip of his cock bumping into the back of your throat and your silent prayer that he\'ll cum soon and it will be over.');
    scene.text('Finally, Slava pulls out completely and lets go of your hair, leaving you gasping for breath.');
    scene.text('"You\'re really starting to make me question this deal you know," he says, looking down at you as you cough a few more times. "At least Natasha gets into it and gives me a proper blowjob. I love a good facefucking as much as the next man, but feeling a woman suck like a vacuum is always a superior experience.');
    scene.text('"Now, get on the table."');
    scene.actions([
      { label: 'Do as he says', goto: ['motherkafeboss', 'first_sex2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Bravely undress', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/strip2.mp4');
    scene.text('You steel yourself and remember why you\'re doing this. This is your decision, you\'re going through with it.');
    scene.text('Without another hesitation, you mechanically take off your clothes until they lay in a pile on the ground and you stand before him completely nude. You watch him unzip his unzip his trousers and pull out his already hardening cock.');
    scene.text('"Get on your knees."');
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/blowjob_grope.mp4');
    scene.text('Borislav\'s cock hangs in your face before you. Wanting to get this over with quickly, you wrap your lips around him and start to suck as hard as you can.');
    scene.text('He grunts in satisfaction and reaches down to slap your breast. It initially gives you a shock but as both hands come down to grope both your breasts simultaneously, you ignore his fondling to concentrate on the blowjob. You thought about putting in a token effort, but you figure if you focus on your task, you might get lucky and he\'ll cum sooner. Though hopefully not in your mouth.');
    scene.text('"Ahh…" he sighs. "I have to say, Natasha is still better at giving head but a younger and more supple pair of breasts…" he says, emphasizing his words with hard squeezes, "is always better than an older pair."');
    scene.text('You ignore his comments and press on, trying to get a little deeper when he suddenly pulls you upward by your breasts. You feel conflicted with your vague sense of disappointment to no longer have your mouth around him, but you attribute it to your hope to get it over with sooner.');
    scene.text('Now standing in front of Borislav, he says, "Time for the main course. Get on the table."');
    scene.actions([
      { label: 'Do as he says', goto: ['motherkafeboss', 'first_sex2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Angrily undress', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/strip2.mp4');
    scene.text('Despite recognizing that you put yourself up to this, you can\'t help but be angry with his audacity in the situation.');
    scene.text('You mechanically take off your clothes, glaring at Borislav the whole time until they lay in a pile on the ground and you stand before him completely nude. You watch him unzip his unzip his trousers and pull out his already hardening cock.');
    scene.text('"Get on your knees."');
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/blowjob_grope.mp4');
    scene.text('"Ugh." Kneeling down, Borislav\'s cock hangs before you in front of your face. You briefly consider biting his dick off, but you want to get this over with quickly. Rather than indulge in your fantasies, you waste no more time and start blowing him.');
    scene.text('He grunts in satisfaction and reaches down to slap your breast. Your eyes widen at the impact and you go back to thinking about biting down before his other hand joins the first and begins to massage your breasts skillfully. You decide to fuck around with him and put in a token effort, lightly sucking on the head of his cock instead of trying to go for depth.');
    scene.text('<i>No balls like blue balls…</i> you think to yourself.');
    scene.text('"Ahh…" he sighs. "I have to say, Natasha is still better at giving head but a younger and more supple pair of breasts…" he says, emphasizing his words with hard squeezes, "is always better than an older pair."');
    scene.text('With his comments about your mother while he\'s abusing your body, you\'re ready to snap. You try to get a little deeper so when you bite you can take off as much of his dick as possible when he suddenly yanks you upward by your breasts. You feel genuinely disappointed you couldn\'t have blown him for a couple more seconds or he\'d have become an eunuch.');
    scene.text('Now standing in front of Borislav, he pushes you backwards onto the desk and says, "Time for the main course."');
    scene.actions([
      { label: 'Continue', goto: ['motherkafeboss', 'first_sex2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstSex2(s: GameState, scene: SceneBuilder): void {
  (s as any).slavafuck = ((s as any).slavafuck ?? 0) + (1);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    scene.img('images/locations/pavlovsk/cafe/pre.jpg');
    scene.text('Pushing you backwards onto the table, Borislav now lines up his cock to fuck your pussy.');
    scene.actions([
      { label: 'Cry', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/table.mp4');
    scene.text('Unable to contain yourself any longer, you begin to cry as he thrusts all the way inside in one smooth motion. His cock is thick and long and you can\'t help but cry louder as he fills you completely. He grabs your legs and pulls you closer with each thrust and you can\'t believe it\'s come to this.');
    scene.text('He wastes no time and immediately starts fucking you at a steady pace without any buildup whatsoever. The room is filled with the sound of your flesh slapping together, the squelching sounds of his thick cock pumping in and out of your pussy, and your soft cries that go up in volume at intervals that correspond with his cock bumping against your cervix. You lose track of everything but the sound of your own crying and the feeling of his cock violating you and just as your mind is about to go blank you feel him pull out and pull you off the desk.');
    scene.text('"Get back on your knees," you hear him growl.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('He forces you down and starts jacking off in front of you.');
    scene.text('"Cumming inside Natasha is one thing, but I could get in serious trouble for cumming inside her daughter. Thankfully, that\'s what your pretty face is for."');
    scene.text('As he finishes his sentence you feel hot liquid spatter on your skin, Borislav ejaculating all over your face.');
    scene.text('You don\'t even flinch, exhausted from the ordeal as more droplets hit you in the face. As Borislav\'s fresh cum drips down your cheeks, you wonder to yourself, <i>Is this really worth it?</i>');
    scene.text('"Hey, don\'t just sit there. Clean me up."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/cum_clean.jpg');
    scene.text('In your state of shock, you barely even notice when Slava pushes his cock into your mouth. It automatically opens for him and you can feel him exploring every part of your mouth, essentially using your tongue and lips to wipe himself clean. In the back of your mind, you vaguely notice that you can taste your own pussy juices and his cum mixing together in your mouth.');
    scene.text('Eventually he pulls back, wipes his manhood on your hair and tells you to get dressed.');
    if (((s as any).pcafejob ?? 0) === 2) {
      scene.text('"Come by later to pick out which uniform you want to wear. Your available hours are any time your mother isn\'t working here."');
    }
    if (((s as any).pcafejob ?? 0) === 1) {
      scene.text('If you ever change your mind about that job, let me know. The offer still stands. As much as I enjoy getting you as a fucktoy for free, I could honestly use another part time waitress. Come see me if you change your mind."');
    }
    scene.text('He pulls up his trousers and moves to the door, bidding you goodbye.');
    scene.text('"I look forward to our future relationship with this deal. And oh," he says, looking back at you. "Don\'t forget to clean your face up. Can\'t have rumors spreading about you, can we?" before shutting the door behind him.');
    scene.text('You look back down at yourself and the feeling of emptiness between your legs and you wonder what control over your body you\'ve just relinquished. Another drop of cum slides off your face onto the ground where your clothes are scattered before you start to move again, putting your clothes back on.');
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    dynamicGoto(s, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Think of your family', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/table.mp4');
    scene.text('There\'s a moment of apprehension as you feel him press into you, but thinking of your mother and what you\'re doing for your parents\' marriage, you resign yourself to the situation.');
    // TODO-QSP: dynamic text: <i>This is for the best. I'm doing this because I love <<$npc_nickname['A29']>> ...
    scene.text(`<i>This is for the best. I'm doing this because I love ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} and dad. ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} won't have to suffer for our sake anymore.</i>`);
    scene.text('Your thoughts are interrupted as Borislav grabs you by the thighs and thrusts all the way inside you in one go, causing an involuntary gasp. His cock is quite large and seems to fill you wall to wall. You\'re glad that you gave him a good blowjob to help lube him up for this.');
    scene.text('Without hesitation or any slow buildup, he begins fucking you at a steady speed. The room is filled with the sound of your flesh slapping together and the squelching sound of his cock pumping in and out of your pussy. Between his grunts you hear the sound of your own voice as you instinctively start to moan, the tip of his cock eliciting involuntary cries whenever it bumps against your cervix.');
    scene.text('After several minutes of this, he suddenly pulls out, growling, "Get on your knees."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('Holding you by the shoulders, he forces you down and starts jacking off in front of you.');
    scene.text('"Cumming inside Natasha is one thing, but I could get in serious trouble for cumming inside her daughter. Thankfully, that\'s what your pretty face is for."');
    scene.text('As he finishes his sentence you flinch, feeling hot liquid spatter on your skin, Borislav ejaculating all over your face.');
    scene.text('You squint hard, trying to keep it out of your eyes, feeling it dribble down your face.');
    scene.text('<i>At least he has the decency not to cum inside me,</i> you think to yourself. <i>Or in a way, is this actually <b>more</b> degrading?</i>');
    scene.text('"Hey, don\'t just sit there. Clean me up," Slava says, interrupting your train of thought by sticking his cock in your face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/cum_clean.jpg');
    scene.text('Resigned to the fact that this is just going to be part of the deal you give him a thorough tongue bath to clean off your slick pussy juices before finishing with another blowjob, sucking hard to draw the last remnants of semen from his sperm duct. Looking around you don\'t see any tissues or anything else to do with what\'s in your mouth so you swallow, tasting the strange combination of your juices and his sperm.');
    scene.text('"Oooooohhh… There\'s nothing better than a girl who knows how to suck cum to the last drop. Always much better than when it seeps out into your underwear later. Nice to see good etiquette runs in the family," he says with a cheeky grin.');
    if (((s as any).pcafejob ?? 0) === 2) {
      scene.text('"Anyways, you\'ll need to get a uniform if you want to work here. You can pick one up from the G&M store. Your available hours are any time your mother isn\'t working here."');
    }
    if (((s as any).pcafejob ?? 0) === 1) {
      scene.text('"Anyways, if you ever change your mind about that job, let me know. The offer still stands. As much as I enjoy getting you as a fucktoy for free, I could honestly use another part time waitress. Come see me if you change your mind."');
    }
    scene.text('He pulls up his trousers and moves to the door, bidding you goodbye.');
    scene.text('"I look forward to our future relationship with this deal. And oh," he says, looking back at you. "Don\'t forget to clean your face up. Can\'t have rumors spreading about you, can we?" before shutting the door behind him.');
    scene.text('<i>Yeah, thanks for the help looking out for me…</i> you think to yourself as you squint to stop another dribble of cum from sliding into your eye.');
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    dynamicGoto(s, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Grit your teeth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/table.mp4');
    scene.text('As the tip of his cock penetrates your sex, you can\'t help but clench and grind your teeth in anger.');
    scene.text('<i>I can\'t believe he\'s taking advantage of us, of me like this! Who does he think he is pulling shit like th-!</i>');
    scene.text('Your thoughts are interrupted as Borislav grabs you by the thighs and thrusts all the way inside you in one go, causing an involuntary gasp. His cock is quite large and seems to fill you wall to wall. Despite your anger, you feel a vague sense of regret you didn\'t give him a better blowjob to lube him up for this. That almost split you in half!');
    scene.text('Without hesitation or any slow buildup, he begins fucking you at a steady speed. The room is filled with the sound of your flesh slapping together and the squelching sound of his cock pumping in and out of your pussy. With every grunt you hear from him you feel your teeth clench harder and your hands ball into fists. The idea that he\'s using your body like this is so repulsive that it makes you want to stop but you still remember why you\'re doing this and focus on the feeling of your nails digging into the palms of your hands.');
    scene.text('Your concentration is interrupted when you hear him say, "Oh yeah, keep tightening up like that! Feels great when a young girl like you knows how to clamp down on a cock!"');
    scene.text('For a second you don\'t know what he\'s talking about when you realize that your anger is unconsciously making your pussy tighter. Ironically, the realization causes your rage to build even further and tensing your body even more. His grunts become even more satisfactory, creating a vicious cycle of anger and pleasure between you and Slava.');
    scene.text('After several minutes of this, he suddenly pulls out, growling, "Get on your knees."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('Grabbing you by the shoulders, he forces you down and starts jacking off in front of you.');
    scene.text('"Cumming inside Natasha is one thing, but I could get in serious trouble for cumming inside her daughter. Thankfully, that\'s what your pretty face is for."');
    scene.text('As he finishes his sentence you flinch, feeling Borislav ejaculate all over your face.');
    scene.text('You squint hard and grimace, trying to keep it out of your eyes, feeling it dribble down your face.');
    scene.text('<i>Ugh, could there have been anything more degrading than this?</i> you think to yourself. <i>Making a girl take a cumshot to the face as part of a deal to stop fucking her mother. This is just ridiculous.</i>');
    scene.text('"Hey, don\'t just sit there. Clean me up," Slava says, interrupting your train of thought when you feel his cock poking you in the face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/cum_clean.jpg');
    scene.text('Your mouth briefly hangs agape in awe of his audacity. Only for the sake of your mother do you hold your tongue (or rather your teeth). In an act of malicious compliance, you glare at Borislav and give him a thorough tongue bath to clean your slick pussy juices off his still-hard cock. With every lick and every taste of his cock, you continue to stare at him, never breaking eye contact, doing your best to know how much you hate this. Finally, you wrap him in your mouth and suck as hard as you can to draw the last remnants of semen from his sperm duct, hoping you can turn intense pleasure into pain.');
    scene.text('Your hopes are shattered when he says, "Oooooohhh… There\'s nothing better than a girl who knows how to suck cum to the last drop. Always much better than when it seeps out into your underwear later. Nice to see good etiquette runs in the family," he says with a cheeky grin. You say nothing in response but feeling the mixture of cum and pussy juice in your mouth, you viscous spit it onto the floor where it lands with a satisfying splat.');
    if (((s as any).pcafejob ?? 0) === 2) {
      scene.text('"Hey, I\'d be careful of doing that if I were you. You\'re about to work for me, it might be more work for you if you\'re the one cleaning it up in the end. Anyways, you\'ll need to get a uniform if you want to work here. You can pick one up from the G&M store. Your available hours are any time your mother isn\'t working here."');
    }
    if (((s as any).pcafejob ?? 0) === 1) {
      scene.text('"Anyways, if you ever change your mind about that job, let me know. The offer still stands. As much as I enjoy getting you as a fucktoy for free, I could honestly use another part time waitress. Come see me if you change your mind."');
    }
    scene.text('He pulls up his trousers and moves to the door, bidding you goodbye.');
    scene.text('"I look forward to our future relationship with this deal. And oh," he says, looking back at you. "Don\'t forget to clean your face up. Can\'t have rumors spreading about you, can we?" before shutting the door behind him.');
    scene.text('<i>Yeah, thanks for the help looking out for me…</i> you think to yourself as you squint to stop another dribble of cum from sliding into your eye.');
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    dynamicGoto(s, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/cafe/pre.jpg');
    scene.text('Pushing you backwards onto the table, Borislav lines up his cock to fuck your pussy. He presses inside and stops when he bumps up against your hymen.');
    scene.text('"Is this…" he pauses. "Are you a virgin?" Before you can say anything he continues on, "Unexpected, but I\'m not going to deny myself a treat when offered!" and plunges into you balls deep.');
    (s as any).gaveSlavaVirginity = 1;
    scene.actions([
      { label: '!!!', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/deflower.jpg');
    scene.text('You shriek in pain as Borislav thrusts the entirety of his manhood inside you, tearing your hymen with such force that for a brief moment you thought that your entire body would split in two.');
    scene.text('"Ahh, nothing better than popping a cherry in one go," he sighs as he pulls back out. You look down and see the blood of your virginity leaking from your pussy and coating his dick. "Virgins are always so tight! Can\'t waste that by being too gentle," he grunts, thrusting back inside full force.');
    scene.actions([
      { label: 'Cry', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/table.mp4');
    scene.text('Unable to contain yourself any longer, you begin to cry. Losing your virginity like this is simply too much for you to bear. His cock is thick and long, filling you up and stretching you out, too big for your virgin pussy. He grabs your legs and pulls you closer with each thrust and you can\'t believe it\'s come to this.');
    scene.text('The room is filled with the sound of your flesh slapping together, the squelching sounds of his thick cock pumping in and out of your bloody pussy, and your soft cries that go up in volume at intervals that correspond with his cock bumping against your cervix. You lose track of everything but the sound of your own crying and the feeling of his cock violating you and just as your mind is about to go blank you feel him pull out and pull you off the desk.');
    scene.text('"Get back on your knees," you hear him growl.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('He forces you down and starts jacking off in front of you.');
    scene.text('"Cumming inside Natasha is one thing, but I could get in serious trouble if I cum inside her virgin daughter. Thankfully, that\'s what your pretty face is for."');
    scene.text('As he finishes his sentence, Borislav ejaculates all over your face.');
    scene.text('You don\'t even flinch, exhausted from the ordeal as the hot sticky liquid spatters across your face. Borislav\'s fresh cum drips down your cheeks, mixing with your tears and you think dejectedly to yourself, <i>Is this what my virginity was worth?</i>');
    scene.text('"Hey, don\'t just sit there. Clean me up."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/cum_clean.jpg');
    scene.text('In your state of shock, you barely even notice when Slava pushes his cock into your mouth. It automatically opens for him and you can feel him exploring every part of your mouth, essentially using your tongue and lips to wipe himself clean. You can taste the tart of pussy juice and the salt of cum and the copper of blood mixing together in your mouth.');
    scene.text('Eventually he pulls back, wipes his manhood on your hair and tells you to get dressed.');
    if (((s as any).pcafejob ?? 0) === 2) {
      scene.text('"Come by later to pick out which uniform you want to wear. Your available hours are any time your mother isn\'t working here."');
    }
    if (((s as any).pcafejob ?? 0) === 1) {
      scene.text('If you ever change your mind about that job, let me know. The offer still stands. As much as I enjoy getting you as a fucktoy for free, I could honestly use another part time waitress. Come see me if you change your mind."');
    }
    scene.text('He pulls up his trousers and moves to the door, bidding you goodbye.');
    scene.text('"I look forward to our future relationship with this deal. And oh," he says, looking back at you. "Don\'t forget to clean your face up. Can\'t have rumors spreading about you, can we?" before shutting the door behind him.');
    scene.text('You look back down at yourself, vision blurred by tears, feeling the emptiness between your legs and the residual pain of your lost virginity and you wonder what control over your body you\'ve just relinquished. Another drop of cum slides off your face onto the ground where your clothes are scattered before you start to move again, putting your clothes back on.');
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    dynamicGoto(s, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Think of your family', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/table.mp4');
    // TODO-QSP: dynamic text: Borislav fucks you roughly with no regard for your comfort or enjoyment. His lar...
    scene.text(`Borislav fucks you roughly with no regard for your comfort or enjoyment. His large ${((s as any).dick || '')} cm cock and not only fills you wall to wall but painfully stretches your virgin sex. There's a brief moment where you want to cry, but thinking of your mother and what you're doing for your parents' marriage, you resign yourself to the situation.`);
    // TODO-QSP: dynamic text: <i>This is for the best. I'm doing this because I love <<$npc_nickname['A29']>> ...
    scene.text(`<i>This is for the best. I'm doing this because I love ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} and dad. They won't have to suffer anymore and any price is worth that. Even my virginity.</i>`);
    scene.text('The room is filled with the sound of your flesh slapping together and the squelching sound of his cock pumping in and out of your bloody pussy. Between his grunts you hear the sound of your own voice as you instinctively start to moan, the tip of his cock eliciting involuntary cries whenever it bumps against your cervix.');
    scene.text('After several minutes he suddenly pulls out, growling, "Get on your knees."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('Holding you by the shoulders, he forces you down and starts jacking off in front of you.');
    scene.text('"Cumming inside Natasha is one thing, but I could get in serious trouble if I cum inside her virgin daughter. Thankfully, that\'s what your pretty face is for."');
    scene.text('As he finishes his sentence you flinch as Borislav ejaculates all over your face.');
    scene.text('You squint hard, trying to keep it out of your eyes, feeling the hot liquid spatter across your face.');
    // TODO-QSP: dynamic text: <i>Is this what <<$npc_nickname['A29']>> feels every day she goes to work?</i> y...
    scene.text(`<i>Is this what ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} feels every day she goes to work?</i> you think to yourself. <i>Is this how much she loves us?</i>`);
    scene.text('"Hey, don\'t just sit there. Clean me up," Slava says, interrupting your train of thought by sticking his cock in your face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/cum_clean.jpg');
    scene.text('Your thoughts still on your mother, you give him a thorough tongue bath to clean off your slick pussy juices. As much as you try not to think about it, you can\'t help but notice the taste of blood from your torn hymen mixed in with his cum and your pussy juice. You try to distract yourself from these thoughts by sucking hard on Slava\'s dick to draw the last remnants of semen from his sperm duct. Pulling your lips from his head, you look around but don\'t see any tissues or anything else to do with what\'s in your mouth. Unable to come up with an alternative solution, you swallow, once again trying to focus on the taste of his sperm rather than your blood.');
    scene.text('"Oooooohhh… There\'s nothing better than a girl who knows how to suck to the last drop. Always much better than when it seeps out into your underwear later. Nice to see good etiquette runs in the family," he says with a cheeky grin.');
    if (((s as any).pcafejob ?? 0) === 2) {
      scene.text('"Anyways, you\'ll need to get a uniform if you want to work here. You can pick one up from the G&M store. Your available hours are any time your mother isn\'t working here."');
    }
    if (((s as any).pcafejob ?? 0) === 1) {
      scene.text('"Anyways, if you ever change your mind about that job, let me know. The offer still stands. As much as I enjoy getting you as a fucktoy for free, I could honestly use another part time waitress. Come see me if you change your mind."');
    }
    scene.text('He pulls up his trousers and moves to the door, bidding you goodbye.');
    scene.text('"I look forward to our future relationship with this deal. And oh," he says, looking back at you. "Don\'t forget to clean your face up. Can\'t have rumors spreading about you, can we?" before shutting the door behind him.');
    // TODO-QSP: dynamic text: The door clicks shut and you sigh. <i>For <<$npc_nickname['A29']>> and dad…</i> ...
    scene.text(`The door clicks shut and you sigh. <i>For ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} and dad…</i> you think to yourself as you squint to stop another dribble of cum from sliding into your eye.`);
    scene.text('You pick up your clothes and get ready to leave.');
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    dynamicGoto(s, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Grit your teeth', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/table.mp4');
    // TODO-QSP: dynamic text: You grit your teeth as Borislav fucks you roughly with no regard for your comfor...
    scene.text(`You grit your teeth as Borislav fucks you roughly with no regard for your comfort or enjoyment. His large ${((s as any).dick || '')} cm cock and not only fills you wall to wall but painfully stretches your virgin sex. With every thrust, you grind your teeth more and more to prevent yourself from crying out in pain.`);
    // TODO-QSP: dynamic text: Even through the pain you think to yourself, <i>This is fucking bullshit. I can'...
    scene.text(`Even through the pain you think to yourself, <i>This is fucking bullshit. I can't believe this is how I'm losing my virginity. Practically getting raped on a table in the back of a cafe. If it weren't for ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, I wouldn't ev--</i>`);
    scene.text('Your thoughts are interrupted as Borislav grabs you by the thighs and thrusts even deeper inside you, causing an involuntary gasp followed by a grunt of pain.');
    scene.text('<i>Fuck! He could at least pretend that he cares about making this feel good for me!</i>');
    scene.text('The room is filled with the sound of your flesh slapping together and the squelching sound of his cock pumping in and out of your bloody pussy. With every grunt you hear from him you feel your teeth clench harder and your hands ball into fists. The idea that he\'s using your body like this is so repulsive that it makes you want to stop. In the best case scenario your mother never finds out about this, but you still hope she\'s fucking grateful. After that thought, you try to focus on the feeling of your nails digging into the palms of your hands instead of Slava\'s stupid dick fucking your cunt.');
    scene.text('Your concentration is interrupted when you hear him say, "Oh yeah, keep tightening up like that! Feels great when a young girl like you knows how to clamp down on a cock!"');
    scene.text('For a second you don\'t know what he\'s talking about when you realize that your anger is unconsciously making you flex your muscles and it\'s making your pussy tighter. Ironically, the realization only causes your rage to build even further and you feel your snatch clench harder on his invading cock. His grunts become even more satisfactory, creating a vicious cycle of anger and pleasure between you and Slava.');
    scene.text('After several minutes he suddenly pulls out, growling, "Get on your knees."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('Grabbing you by the shoulders, he forces you down and starts jacking off in front of you.');
    scene.text('"Cumming inside Natasha is one thing, but I could get in serious trouble if I cum inside her virgin daughter. Thankfully, that\'s what your pretty face is for."');
    scene.text('As he finishes his sentence, Borislav ejaculates, his spunk spattering all over your face.');
    scene.text('You scowl and squint hard, trying to keep it out of your eyes as it dribbles down your face.');
    scene.text('<i>Ugh, could there have been anything more vile than this?</i> you think to yourself. <i>Making a girl blow you, then taking her virginity, and then cumming on her face, all just to get him to stop fucking her mother. Just despicable…</i>');
    scene.text('"Hey, don\'t just sit there. Clean me up," Slava says, interrupting your train of thought when you feel his cock poking you in the face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/cum_clean.jpg');
    scene.text('Your mouth hangs agape in awe of his audacity. "Come on, get to it. This isn\'t going to clean itself. Or would you rather it fuck your mother dirty?" You glare daggers at Borislav and give him a thorough tongue bath to clean your slick pussy juices off his still-hard cock. With every lick and every taste of his cock, you continue to stare him right in the eyes, doing your best to know how much you hate this. The only time you break eye contact is when you taste the blood of your virginity, involuntarily grimacing. Finally, you wrap him in your mouth and suck as hard as you can to draw the last remnants of semen from his sperm duct, hoping you can turn intense pleasure into pain.');
    scene.text('Your hopes are shattered when he bites his lip in pleasure saying, "Oooooohhh… There\'s nothing better than a girl who knows how to suck cum to the last drop. Always much better than when it seeps out into your underwear later. Nice to see good etiquette runs in the family," he says with a cheeky grin. You say nothing in response but feeling the strange mixture of cum, blood, and pussy juice in your mouth, you viscous spit it onto the floor where it lands with a satisfying splat.');
    if (((s as any).pcafejob ?? 0) === 2) {
      scene.text('"Hey, I\'d be careful of doing that if I were you. You\'re about to work for me, it might be more work for you if you\'re the one cleaning it up in the end. Anyways, you\'ll need to get a uniform if you want to work here. You can pick one up from the G&M store. Your available hours are any time your mother isn\'t working here."');
    }
    if (((s as any).pcafejob ?? 0) === 1) {
      scene.text('"Anyways, if you ever change your mind about that job, let me know. The offer still stands. As much as I enjoy getting you as a fucktoy for free, I could honestly use another part time waitress. Come see me if you change your mind."');
    }
    scene.text('He pulls up his trousers and moves to the door, bidding you goodbye.');
    scene.text('"I look forward to our future relationship with this deal. And oh," he says, looking back at you. "Don\'t forget to clean your face up. Can\'t have rumors spreading about you, can we?" before shutting the door behind him.');
    scene.text('<i>Yeah, thanks for the help looking out for me…</i> you think to yourself as you feel your sore pussy throb and squint to stop another dribble of cum from sliding into your eye.');
    scene.text('Picking up your scattered clothes, you begin to get ready to leave.');
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    dynamicGoto(s, 'prevLoc', 'prevArg');
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

function enterSlavaDeal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
  scene.text('You follow Slava into the back room where he unzips his trousers and pulls out his cock expectantly.');
  if ((!((s as any).slava_condom_ask ?? 0))) {
    scene.actions([
      { label: '"Can we at least use a condom?"', handler: (st: GameState) => {
    (s as any).slava_condom_ask = 1;
    scene.text('"Can we please use condoms?" you ask pleadingly.');
    scene.text('"I don\'t use that rubber shit," Slava laughs at you. "Don\'t worry though, unlike younger men I have real self control. I promise I won\'t cum anywhere but on that pretty face of yours."');
    scene.text('You frown in skepticism and paranoia, but there\'s nothing you can really do to convince him. You suppose you could always start birth control as a precaution…');
    scene.actions([
      { label: 'Reluctantly let him use you', goto: ['motherkafeboss', 'duty'] },
      { label: 'Walk out the door', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([
        { label: 'Ask to give a blowjob since you\'re on your period', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('"Slava, I\'m on my period. Can I just blow you today?"');
    scene.text('"Well, there\'s nothing we can do about that I suppose," he says and you sigh in relief.');
    scene.text('"Well? Get to it."');
    scene.actions([
      { label: 'Don\'t undress, just blow him', goto: ['motherkafeboss', 'cloth_bj'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).slavafuck ?? 0) < 6) {
        scene.actions([
          { label: 'Reluctantly let him use you', goto: ['motherkafeboss', 'duty'] },
        ]);
      } else {
        if (((s as any).slavafuck ?? 0) < 9) {
          scene.actions([
            { label: 'Dutifully fuck him', goto: ['motherkafeboss', 'duty'] },
          ]);
        } else {
          scene.actions([
            { label: 'Happily fuck him', goto: ['motherkafeboss', 'duty'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDuty(s: GameState, scene: SceneBuilder): void {
  (s as any).slava_fuck_pick = Math.floor(Math.random() * 1) + 4;
  if (((s as any).slava_fuck_pick ?? 0) === 1) {
    qspGoto(s, 'motherkafeboss', 'cloth_pre_fuck');
  }
  if (((s as any).slava_fuck_pick ?? 0) === 2) {
    qspGoto(s, 'motherkafeboss', 'cloth_bj');
  }
  if (((s as any).slava_fuck_pick ?? 0) === 3) {
    qspGoto(s, 'motherkafeboss', 'cloth_pre_fuck');
  }
  if (((s as any).slava_fuck_pick ?? 0) === 4) {
    qspGoto(s, 'motherkafeboss', 'cloth_bj');
  }
  // TODO-QSP: end
  scene.build();
}

function enterClothBj(s: GameState, scene: SceneBuilder): void {
  (s as any).slava_bj = ((s as any).slava_bj ?? 0) + (1);
  (s as any).slava_cumming = Math.floor(Math.random() * 2) + 1;
  qspCall(s, 'arousal', 'bj', 3);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/cafe/cloth_bj.mp4');
  scene.text('Slava sits in his chair with his cock hanging out and you kneel in front of him. You dutifully suck his cock, using your tongue and everything at your disposal to make him feel good. You do this partially to honor the deal but also out of worry that if you\'re a bad lay he might go back to extorting your mother.');
  if (((s as any).slava_cumming ?? 0) === 1) {
    scene.text('"Oh shit!" Slava suddenly exclaims. "It\'s too much! I\'m cumming!"');
    scene.actions([
      { label: 'Take it in your mouth', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/clothed_bj_shot.mp4');
    scene.text('Your real effort paid off today. Since he\'s cumming now, he probably won\'t fuck you afterwards. You pull off his cock and when he makes no move to blow his load on your face, you open your mouth. You figure that if he\'s going to make you clean his cock anyways you would swallow rather than leave with a facial.');
    scene.text('Slava starts to cum and you catch as much of it as you can on your tongue until you don\'t feel anymore come out. You swallow and clean him off by licking up the rest.');
    // TODO-QSP: dynamic text: "Ahh, that was satisfying," he says while zipping up his trousers. "Keep up the ...
    scene.text(`"Ahh, that was satisfying," he says while zipping up his trousers. "Keep up the good work ${((s as any).pcs_nickname || '')}," and with that he leaves the room.`);
    scene.text('It was all over so quickly that you think there\'s something you\'re forgetting to do but since you never took off your clothes and don\'t have anything to clean off your face, you shrug and leave behind him.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).slava_cumming ?? 0) === 2) {
      scene.text('After a couple minutes of blowing him he pulls you back and says, "Alright, time for the main course," and bends you over the table.');
      // TODO-QSP: !{ elseif slava_cumming = 3:
      scene.text('After a couple minutes of blowing him he pulls you back and says, "Alright, time for the main course," and begins to undress.');
      scene.actions([
        { label: 'Undress', goto: ['motherkafeboss', 'cloth_pre_fuck'] },
        { label: 'Undress', handler: (st: GameState) => {
    // TODO-QSP: gt 'motherkafeboss', 'table_fuck' !}
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClothPreFuck(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    qspCall(s, 'underwear', 'remove');
    if (((s as any).slavafuck ?? 0) < 4) {
      scene.text('"I feel like fucking you in your uniform today," he says, pulling down your panties and in one quick thrust plunges balls deep inside you. You grunt at the unexpected sensation of his entire cock filling you so suddenly and he sighs. "Ahh… Even after over a dozen years of owning a cafe, there novelty of fucking a waitress never wears off."');
    } else {
      if (((s as any).slavafuck ?? 0) < 10) {
        scene.text('"I feel like fucking you in your uniform today," he says, pulling down your panties. You hold your breath as Slava thrusts hard, plunging the full length of his cock into you. The sensation causes you to exhale with force almost like you\'ve been winded. You\'re getting used to his antics but it doesn\'t make it any more comfortable that he insists on going balls deep on the first thrust every time. He sighs saying, "Maybe it\'s just me being spoiled by your youth but it always feels like you\'re tighter when you\'re still in uniform," before beginning to fuck you.');
      } else {
        scene.text('"I feel like fucking you in your uniform today," he says, pulling down your panties. You barely even flinch when Slava thrusts the entirety of his manhood into you in one go. Whether you like it or not, it seems your body has gotten used to having his large cock rammed balls deep into you. "Just as enjoyable as the first time," he says, pausing to appreciate the tightness of your pussy. He begins to fuck you saying, "Good coochie must run in the family."');
      }
    }
  } else {
    if (((s as any).slavafuck ?? 0) < 4) {
      scene.text('"I feel like fucking you in your uniform today," he says, reaching for your panties only to find your bare pussy. "Oooh," You can feel his grin even from behind you. "I hope you got some nice tips today," he says, causing you to blush. Without warning he plunges balls deep into you with one quick thrust. You grunt at the unexpected sensation of his entire cock filling you so suddenly and he sighs. "Ahh… Even after over a dozen years of owning a cafe, the novelty of fucking a waitress never wears off."');
    } else {
      if (((s as any).slavafuck ?? 0) < 10) {
        scene.text('"I feel like fucking you in your uniform today," he says, reaching for your panties only to find your bare pussy. "Oooh," You can feel his grin even from behind you. "I hope you got some nice tips today," he says, causing you to blush. You hold your breath as Slava thrusts hard, plunging the full length of his cock into you. The sensation causes you to exhale with force almost like you\'ve been winded. You\'re getting used to his antics but it doesn\'t make it any more comfortable that he insists on going balls deep on the first thrust every time. He sighs saying, "Maybe it\'s just me being spoiled by your youth but it always feels like you\'re tighter when you\'re still in uniform," before beginning to fuck you.');
      } else {
        scene.text('"I feel like fucking you in your uniform today," he says, reaching for your panties only to find your bare pussy. "Oooh! Good girl…" You can feel his grin even from behind you. "You keep this up, I\'ll have the most popular cafe in Pavlovsky. Or are you doing it just for me?" he says, causing you to blush. You barely even flinch when Slava thrusts the entirety of his manhood into you in one go. Whether you like it or not, it seems your body has gotten used to having his large cock rammed balls deep into you. "Just as enjoyable as the first time," he says, pausing to appreciate the tightness of your pussy. He begins to fuck you saying, "Good coochie must run in the family."');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['motherkafeboss', 'cloth_fuck'] },
  ]);
  scene.build();
}

function enterClothFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
  scene.text('As usual, he wastes no time, not bothering to build up the tempo slowly but instead preferring to go straight to full fuck speed. The table rocks underneath you and creates a strange melody of squeaking wood, slapping flesh, and moans and grunts. In the middle of this hypnotic rhythm, you find your mind thinking of…');
  (s as any).slavafuck = ((s as any).slavafuck ?? 0) + (1);
  if (((s as any).slavafuck ?? 0) < 4) {
    scene.actions([
      { label: 'Nothing in particular', handler: (st: GameState) => {
    scene.text('Your mind wanders but doesn\'t focus on any one thought in particular. Mostly you just get lost in the rhythmic sounds and Slava\'s cock pounding in and out of your pussy.');
    scene.text('Eventually Slava pulls out and tells you to get on your knees.');
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('You do as he commands as he starts jacking off. He doesn\'t cum immediately but you patiently wait and as you see his face begin to contort you position yourself under his cock and close your eyes, feeling his hot sperm dribble all over your face.');
    scene.text('Afterwards, you dutifully clean his cock, licking off your pussy juice and sucking out the remnants as you did before. He pulls up his trousers and leaves you wishing that he had a sink or at least would bring a tissue box back here to clean up your face afterwards.');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Your mother', handler: (st: GameState) => {
    scene.text('Once again, your thoughts become centered on your mother. This experience isn\'t very enjoyable for you but if your mother could endure it for you, you can endure it for her.');
    scene.text('Your thoughts are interrupted when Slava pulls out and tells you to get on your knees.');
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('You do as he commands as he starts jacking off. He doesn\'t cum immediately but you patiently wait and as you see his face begin to contort you position yourself under his cock and close your eyes, feeling his hot sperm dribble all over your face.');
    scene.text('Afterwards, you dutifully clean his cock, licking off your pussy juice and sucking out the remnants as you did before. He pulls up his trousers and leaves you wishing that he had a sink or at least would bring a tissue box back here to clean up your face afterwards.');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Am I… enjoying this?', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.text('You notice a feeling between your legs. Something building up inside you. With every thrust of Slava\'s cock it builds more and more. You squirm, unable to figure out what\'s going on. You wonder if you\'re having a panic attack when it suddenly hits you.');
      scene.text('You\'re about to cum.');
      scene.text('The very thought that you could be enjoying this on any level bewilders you. You\'re being blackmailed right? You can\'t be enjoying this! You can\'t be about to cum from this large well shaped cock, pounding in and out of you, hard and… filling you up… just right…');
      scene.actions([
        { label: 'Try to resist', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
    scene.text('You lose your balance on the table and fall down to one shoulder, your face pressed against the desk. Your teeth are clenched together and your eyes squeezed shut, thinking to yourself, <i>Please don\'t cum! Please don\'t cum! Please don\'t cum!</i> over and over in some kind of mantra.');
    scene.text('But despite your best efforts you can\'t hold back what\'s about to happen. You clamp your hand over your mouth to stop yourself from screaming as you explosively climax. Your whole body spasms and your legs quiver trying to stay standing. You feel your pussy clenching hard on Slava\'s cock, which is still fucking you hard and the sensation is driving you insane. Finally, he thrusts into you one last time and holds it there while you ride out the rest of your orgasm.');
    scene.text('You release your mouth from your hand, breathing hard, drooling onto the table a little bit. In a twist of terrible irony, it seems your efforts to hold yourself back only resulted in an even more powerful climax. You feel exhausted.');
    // TODO-QSP: dynamic text: "Did you just cum <<$pcs_nickname>>?" Slava asks. You can't turn around right no...
    scene.text(`"Did you just cum ${((s as any).pcs_nickname || '')}?" Slava asks. You can't turn around right now but you can feel his grin from behind you all the same. "Glad to see you're enjoying this deal as much as I am. All the same, feeling you tighten up on me like that brought me pretty close. Turn around, I'll give you what you came here for."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('Slava pulls out of you and you turn around, kneeling down. You can\'t help but be aware of how empty you feel and the slick pussy juices you feel running down your legs. With great shame, you realize having his cock so close in front of your face is causing your juices to flow even more, practically on the edge of a secondary orgasm when his hot sticky cum spatters onto your face.');
    scene.text('As per usual, he pushes his dick towards your mouth afterwards and you obediently clean it despite your exhaustion, subconsciously trying to savour the thickness of him and every last drop of his cum.');
    scene.text('Afterwards, he pulls up his trousers saying, "I\'ll just leave you here a while to collect yourself. Don\'t want you going back outside and collapsing do we?" He smirks at you and closes the door behind him.');
    scene.text('Still sitting on the ground, his cum plastering your face and your juices sticking to your legs, you think to yourself…');
    scene.text('<i>How could this happen…</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Give into the pleasure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
    scene.text('You can\'t hold back and scream in orgasm, gripping the edge of the table until your knuckles turn white.');
    scene.text('Your whole body shudders and your legs quiver trying to stay standing. You feel your pussy clenching hard on Slava\'s cock, which is still fucking you hard and the sensation is driving you insane. Finally, he thrusts into you one last time and holds it there while you ride out the rest of your orgasm.');
    scene.text('As your orgasm winds down, you lean forward onto the table, breathing hard.');
    // TODO-QSP: dynamic text: "Did you just cum <<$pcs_nickname>>?" Slava asks. You can't turn around right no...
    scene.text(`"Did you just cum ${((s as any).pcs_nickname || '')}?" Slava asks. You can't turn around right now but you can feel his grin from behind you all the same. "Glad to see you're enjoying this deal as much as I am. All the same, feeling you tighten up on me like that brought me pretty close. Turn around, I'll give you what you came here for."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('Slava pulls out of you and you turn around, kneeling down. You can\'t help but be aware of how empty you feel and the slick pussy juices you feel running down your legs. You undeniably want more and having his cock so close in front of your face makes you squirm, wishing it was still inside you. You\'re practically on the edge of a second orgasm when his hot sticky cum spatters onto your face.');
    scene.text('As per usual, he pushes his dick towards your mouth afterwards and you jump at the chance to wrap something of yourself around it. Your lips and tongue explore every centimeter of his cock, trying to savour the feeling and every last drop of his cum.');
    scene.text('Much to your regret, he eventually pulls away from you like a mother pulls away her nipple from her baby. His cock disappears back inside his trousers and he says, "I\'ll just leave you here a while to collect yourself. Don\'t want you going back outside and collapsing do we?" He smirks at you and closes the door behind him.');
    scene.text('You continue to sit on the ground awhile thinking about what just happened with mixed feelings and his cum still plastering your face, your juices sticking to your legs.');
    scene.text('<i>Is this okay? Am I allowed to be enjoying this…?</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You notice a feeling between your legs. Something is different today. Something about Slava\'s cock. Is it smoother today? Is it not as big? There\'s something about this that-- And suddenly it hits you.');
      scene.text('You\'re wet.');
      scene.text('His cock is so slick with your juices that his furious fucking feels smoother. And it\'s not just your natural wetness, you can feel your pussy leaking noticeably more than before, so much that it\'s starting to drip down your thighs.');
      scene.actions([
        { label: 'Panic', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
    scene.text('You start to go into a panic, your mind racing.');
    scene.text('<i>How can I be getting wet? Am I enjoying this? How can I be enjoying this? I\'m being blackmailed into letting him fuck me, I can\'t be enjoying his cock! His big… hard… cock… that fills me just righ-! No!! This can\'t be happening!</i>');
    scene.text('You\'re so absorbed in your anxiety that you don\'t hear whatever it is Slava is saying and you suddenly find yourself thrusting your hips backward into empty air. You stop, confused for a moment before you realize what happened. You were so caught up in it that you didn\'t notice him pull out. Your eyes go wide with a worse realization. You were moving your hips on your own. You were fucking him as much as he was fucking you. You slowly turn your head around to look at him in horror.');
    // TODO-QSP: dynamic text: "Glad to see you're enjoying this deal as much as I am," Slava says, grinning. N...
    scene.text(`"Glad to see you're enjoying this deal as much as I am," Slava says, grinning. Noticing the expression on your face he continues, "Oh, don't look like that ${((s as any).pcs_nickname || '')}. It's natural for a girl your age to be enjoying sex. Here, kneel down and I'll cheer you up with something."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('Still in your state of shock, Slava pulls you down to your knees in front of him. You can\'t help but be aware of how empty you feel and the slick pussy juices you feel running down your legs. With great shame, you realize having his cock so close in front of your face is causing your juices to flow even more. With even greater shame you realize it\'s because you want him back inside you.');
    scene.text('His hot cum spatters across your face and you hear him whisper, "There you go. A nice treat for a nice girl." As per usual, after he finishes cumming he pushes his dick towards your mouth for cleaning. You obediently clean it, subconsciously moving with eagerness to have his cock back inside you, even if only your mouth.');
    // TODO-QSP: dynamic text: He pulls his trousers back up and grins at you again. "Oh, cheer up <<$pcs_first...
    scene.text(`He pulls his trousers back up and grins at you again. "Oh, cheer up ${((s as any).pcs_firstname || '')}. You can always come back again tomorrow if you want to fuck some more," and closes the door behind him.`);
    scene.text('After he leaves you sink to the ground, his cum plastering your face and your juices sticking to your legs. You think to yourself…');
    scene.text('<i>Am I really enjoying this…? How could this happen…</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Enjoy yourself', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
    scene.text('Now that you notice how good it feels, you can\'t help but sink into the feeling. You press your hands into the table, leaning your ass back into Slava and his hard cock. Your moaning becomes louder and more natural, flowing out of your mouth like juices out of your pussy.');
    scene.text('<i>Uh! Uhh! Ahh! Aah!</i>');
    scene.text('You\'re so absorbed in your pleasure that you don\'t hear whatever it is Slava is saying and you suddenly find yourself thrusting your hips backward into empty air. You stop, confused, almost frustrated, for a moment wondering what happened to that good feeling. You slowly turn your head around to see what happened and see Slava slowly jacking himself. You were so caught up in it that you didn\'t notice him pull out. He pulled out when your body wanted to keep going and missing his cock, your hips kept thrusting anyways. You were fucking him as much as he was fucking you. ');
    // TODO-QSP: dynamic text: "Glad to see you're enjoying this deal as much as I am," Slava says, grinning. N...
    scene.text(`"Glad to see you're enjoying this deal as much as I am," Slava says, grinning. Noticing the expression on your face he continues, "Oh, don't look like that ${((s as any).pcs_firstname || '')}. If you want more, we can keep fucking tomorrow. Here, kneel down and I'll cheer you up with something."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('Slava pulls you down to your knees in front of him and speeds up his masturbation. You can\'t help but be aware of how empty you feel and the slick pussy juices you feel running down your legs. You realize having his cock so close in front of your face is causing your juices to flow even more. You lick your lips and realize even more, it\'s because you want him back inside you.');
    scene.text('His hot cum spatters across your face and you hear him whisper, "There you go. A nice treat for a nice girl." As per usual, after he finishes cumming he pushes his dick towards your mouth for cleaning. You obediently clean it, moving with eagerness to have his cock back inside you, even if only your mouth. You lick every centimeter of his cock and balls and suck hard, savouring him to the last drop before he pulls away, your lips trailing behind like your hips did earlier.');
    scene.text('He pulls his trousers back up and grins at you again. "I\'m glad to see you\'re getting as much out of this deal as I am," he says and closes the door behind him.');
    scene.text('After he leaves you sink to the ground, his cum plastering your face and your juices sticking to your legs. You think to yourself…');
    scene.text('<i>Is it okay? Is it bad to be enjoying this?</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).motherthoughts ?? 0) === 0  &&  ((s as any).gaveIntoSlavaPleasure ?? 0) < 3) {
      scene.actions([
        { label: 'Your mother', handler: (st: GameState) => {
    (s as any).motherthoughts = 1;
    scene.text('You try to think of your mother as you did before but you find it impossible to focus. After all these times with Slava you don\'t feel sympathy for your mother in the way that you used to. For whatever reason, you find that thoughts of her no longer help you to endure this and can only suffer in moans and groans as Slava\'s cock roughly pumps in and out of you ');
    scene.text('These troubling thoughts swirling through your head, this fucking feels like it drags on forever, even though it\'s probably only been a few minutes. Eventually, Slava pulls out and tells you to get on your knees.');
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('You do as he commands as he starts jacking off. He doesn\'t cum immediately but you patiently wait and as you see his face begin to contort you position yourself under his cock and close your eyes, feeling his hot sperm dribble all over your face.');
    scene.text('Afterwards, you dutifully clean his cock, licking off your pussy juice and sucking out the remnants as you did before. He pulls up his trousers and leaves you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('Once you\'re alone, your thoughts go back to when Slava was fucking you. Up until now, you used thoughts of your mother to keep yourself going during this time. You tried to remember that you were doing it for her so she wouldn\'t have to but it didn\'t help. You feel empty inside as you realize that thoughts of your mother no longer drive you.');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).gaveIntoSlavaPleasure ?? 0) < 3) {
      scene.actions([
        { label: 'This isn\'t so bad', handler: (st: GameState) => {
    scene.text('It\'s been a while since you made this deal with Slava and you notice that your body seems to accept Slava\'s cock more easily. Your pussy audably squelches as he thrusts into you. You find yourself unable to stop yourself from moaning loudly each time his cock reaches deep inside.');
    scene.text('The pleasure you feel from his large cock builds more and more. The rough fucking you\'re receiving isn\'t so bad, you think to yourself.');
    scene.text('Then he suddennly pulls his cock out of you and you feel empty. He tells you to get to your knees.');
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('You do as he commands as he starts jacking off. He doesn\'t cum immediately but you patiently wait and as you see his face begin to contort you position yourself under his cock and close your eyes, feeling his hot sperm dribble all over your face.');
    scene.text('Afterwards, you dutifully clean his cock, licking off your pussy juice and sucking out the remnants as you did before. He pulls up his trousers and leaves you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('You sit alone in the room with Slava\'s cum plastered across your face. Your thoughts drift back to how Slava\'s cock felt inside of you. How big he was. How full you felt. Your pussy leaks onto the floor as you become lost in your thoughts, but you push these intrusive feelings away.');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).gaveIntoSlavaPleasure ?? 0) < 3) {
      scene.actions([
        { label: 'Am I… enjoying this?', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.text('You notice a feeling between your legs. Something building up inside you. With every thrust of Slava\'s cock it builds more and more. You squirm, unable to figure out what\'s going on. You wonder if you\'re having a panic attack when it suddenly hits you.');
      scene.text('You\'re about to cum.');
      scene.text('The very thought that you could be enjoying this on any level bewilders you. You\'re being blackmailed right? You can\'t be enjoying this! You can\'t be about to cum from this large well shaped cock, pounding in and out of you, hard and… filling you up… just right…');
      scene.actions([
        { label: 'Try to resist', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
    scene.text('You lose your balance on the table and fall down to one shoulder, your face pressed against the desk. Your teeth are clenched together and your eyes squeezed shut, thinking to yourself, <i>Please don\'t cum! Please don\'t cum! Please don\'t cum!</i> over and over in some kind of mantra.');
    scene.text('But despite your best efforts you can\'t hold back what\'s about to happen. You clamp your hand over your mouth to stop yourself from screaming as you explosively climax. Your whole body spasms and your legs quiver trying to stay standing. You feel your pussy clenching hard on Slava\'s cock, which is still fucking you hard and the sensation is driving you insane. Finally, he thrusts into you one last time and holds it there while you ride out the rest of your orgasm.');
    scene.text('You release your mouth from your hand, breathing hard, drooling onto the table a little bit. In a twist of terrible irony, it seems your efforts to hold yourself back only resulted in an even more powerful climax. You feel exhausted.');
    // TODO-QSP: dynamic text: "Did you just cum <<$pcs_nickname>>?" Slava asks. You can't turn around right no...
    scene.text(`"Did you just cum ${((s as any).pcs_nickname || '')}?" Slava asks. You can't turn around right now but you can feel his grin from behind you all the same. "Glad to see you're enjoying this deal as much as I am. All the same, feeling you tighten up on me like that brought me pretty close. Turn around, I'll give you what you came here for."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('Slava pulls out of you and you turn around, kneeling down. You can\'t help but be aware of how empty you feel and the slick pussy juices you feel running down your legs. With great shame, you realize having his cock so close in front of your face is causing your juices to flow even more, practically on the edge of a secondary orgasm when his hot sticky cum spatters onto your face.');
    scene.text('As per usual, he pushes his dick towards your mouth afterwards and you obediently clean it despite your exhaustion, subconsciously trying to savour the thickness of him and every last drop of his cum.');
    scene.text('Afterwards, he pulls up his trousers saying, "I\'ll just leave you here a while to collect yourself. Don\'t want you going back outside and collapsing do we?" He smirks at you and closes the door behind him.');
    scene.text('Still sitting on the ground, his cum plastering your face and your juices sticking to your legs, you think to yourself…');
    scene.text('<i>How could this happen…</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Give into the pleasure', handler: (st: GameState) => {
    (s as any).gaveIntoSlavaPleasure = ((s as any).gaveIntoSlavaPleasure ?? 0) + (1);
    scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
    scene.text('You can\'t hold back and scream in orgasm, gripping the edge of the table until your knuckles turn white.');
    scene.text('Your whole body shudders and your legs quiver trying to stay standing. You feel your pussy clenching hard on Slava\'s cock, which is still fucking you hard and the sensation is driving you insane. Finally, he thrusts into you one last time and holds it there while you ride out the rest of your orgasm.');
    scene.text('As your orgasm winds down, you lean forward onto the table, breathing hard.');
    // TODO-QSP: dynamic text: "Did you just cum <<$pcs_nickname>>?" Slava asks. You can't turn around right no...
    scene.text(`"Did you just cum ${((s as any).pcs_nickname || '')}?" Slava asks. You can't turn around right now but you can feel his grin from behind you all the same. "Glad to see you're enjoying this deal as much as I am. All the same, feeling you tighten up on me like that brought me pretty close. Turn around, I'll give you what you came here for."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('Slava pulls out of you and you turn around, kneeling down. You can\'t help but be aware of how empty you feel and the slick pussy juices you feel running down your legs. You undeniably want more and having his cock so close in front of your face makes you squirm, wishing it was still inside you. You\'re practically on the edge of a second orgasm when his hot sticky cum spatters onto your face.');
    scene.text('As per usual, he pushes his dick towards your mouth afterwards and you jump at the chance to wrap something of yourself around it. Your lips and tongue explore every centimeter of his cock, trying to savour the feeling and every last drop of his cum.');
    scene.text('Much to your regret, he eventually pulls away from you like a mother pulls away her nipple from her baby. His cock disappears back inside his trousers and he says, "I\'ll just leave you here a while to collect yourself. Don\'t want you going back outside and collapsing do we?" He smirks at you and closes the door behind him.');
    scene.text('You continue to sit on the ground awhile thinking about what just happened with mixed feelings and his cum still plastering your face, your juices sticking to your legs.');
    scene.text('<i>Is this okay? Am I allowed to be enjoying this…?</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You notice a feeling between your legs. Something is different today. Something about Slava\'s cock. Is it smoother today? Is it not as big? There\'s something about this that-- And suddenly it hits you.');
      scene.text('You\'re wet.');
      scene.text('His cock is so slick with your juices that his furious fucking feels smoother. And it\'s not just your natural wetness, you can feel your pussy leaking noticeably more than before, so much that it\'s starting to drip down your thighs.');
      scene.actions([
        { label: 'Panic', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
    scene.text('You start to go into a panic, your mind racing.');
    scene.text('<i>How can I be getting wet? Am I enjoying this? How can I be enjoying this? I\'m being blackmailed into letting him fuck me, I can\'t be enjoying his cock! His big… hard… cock… that fills me just righ-! No!! This can\'t be happening!</i>');
    scene.text('You\'re so absorbed in your anxiety that you don\'t hear whatever it is Slava is saying and you suddenly find yourself thrusting your hips backward into empty air. You stop, confused for a moment before you realize what happened. You were so caught up in it that you didn\'t notice him pull out. Your eyes go wide with a worse realization. You were moving your hips on your own. You were fucking him as much as he was fucking you. You slowly turn your head around to look at him in horror.');
    // TODO-QSP: dynamic text: "Glad to see you're enjoying this deal as much as I am," Slava says, grinning. N...
    scene.text(`"Glad to see you're enjoying this deal as much as I am," Slava says, grinning. Noticing the expression on your face he continues, "Oh, don't look like that ${((s as any).pcs_nickname || '')}. It's natural for a girl your age to be enjoying sex. Here, kneel down and I'll cheer you up with something."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('Still in your state of shock, Slava pulls you down to your knees in front of him. You can\'t help but be aware of how empty you feel and the slick pussy juices you feel running down your legs. With great shame, you realize having his cock so close in front of your face is causing your juices to flow even more. With even greater shame you realize it\'s because you want him back inside you.');
    scene.text('His hot cum spatters across your face and you hear him whisper, "There you go. A nice treat for a nice girl." As per usual, after he finishes cumming he pushes his dick towards your mouth for cleaning. You obediently clean it, subconsciously moving with eagerness to have his cock back inside you, even if only your mouth.');
    // TODO-QSP: dynamic text: He pulls his trousers back up and grins at you again. "Oh, cheer up <<$pcs_first...
    scene.text(`He pulls his trousers back up and grins at you again. "Oh, cheer up ${((s as any).pcs_firstname || '')}. You can always come back again tomorrow if you want to fuck some more," and closes the door behind him.`);
    scene.text('After he leaves you sink to the ground, his cum plastering your face and your juices sticking to your legs. You think to yourself…');
    scene.text('<i>Am I really enjoying this…? How could this happen…</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Enjoy yourself', handler: (st: GameState) => {
    (s as any).gaveIntoSlavaPleasure = ((s as any).gaveIntoSlavaPleasure ?? 0) + (1);
    scene.img('images/locations/pavlovsk/cafe/wait_fuck.mp4');
    scene.text('Now that you notice how good it feels, you can\'t help but sink into the feeling. You press your hands into the table, leaning your ass back into Slava and his hard cock. Your moaning becomes louder and more natural, flowing out of your mouth like juices out of your pussy.');
    scene.text('<i>Uh! Uhh! Ahh! Aah!</i>');
    scene.text('You\'re so absorbed in your pleasure that you don\'t hear whatever it is Slava is saying and you suddenly find yourself thrusting your hips backward into empty air. You stop, confused, almost frustrated, for a moment wondering what happened to that good feeling. You slowly turn your head around to see what happened and see Slava slowly jacking himself. You were so caught up in it that you didn\'t notice him pull out. He pulled out when your body wanted to keep going and missing his cock, your hips kept thrusting anyways. You were fucking him as much as he was fucking you. ');
    // TODO-QSP: dynamic text: "Glad to see you're enjoying this deal as much as I am," Slava says, grinning. N...
    scene.text(`"Glad to see you're enjoying this deal as much as I am," Slava says, grinning. Noticing the expression on your face he continues, "Oh, don't look like that ${((s as any).pcs_firstname || '')}. If you want more, we can keep fucking tomorrow. Here, kneel down and I'll cheer you up with something."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('Slava pulls you down to your knees in front of him and speeds up his masturbation. You can\'t help but be aware of how empty you feel and the slick pussy juices you feel running down your legs. You realize having his cock so close in front of your face is causing your juices to flow even more. You lick your lips and realize even more, it\'s because you want him back inside you.');
    scene.text('His hot cum spatters across your face and you hear him whisper, "There you go. A nice treat for a nice girl." As per usual, after he finishes cumming he pushes his dick towards your mouth for cleaning. You obediently clean it, moving with eagerness to have his cock back inside you, even if only your mouth. You lick every centimeter of his cock and balls and suck hard, savouring him to the last drop before he pulls away, your lips trailing behind like your hips did earlier.');
    scene.text('He pulls his trousers back up and grins at you again. "I\'m glad to see you\'re getting as much out of this deal as I am," he says and closes the door behind him.');
    scene.text('After he leaves you sink to the ground, his cum plastering your face and your juices sticking to your legs. You think to yourself…');
    scene.text('<i>Is it okay? Is it bad to be enjoying this?</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).gaveIntoSlavaPleasure ?? 0) > 2) {
      scene.actions([
        { label: 'Finally… His Cock…', handler: (st: GameState) => {
    scene.text('You buck your hips into Slava\'s thrusts, matching his pace as his wonderful cock pounds into you. Your cunt squelches loudly with each thrust and your juices drool down your thighs. You moan loudly, savouring the girth and shape of his cock. ');
    scene.text('<i>Uh! Uhh! Ahh! Aah! Slava! Ah! Yes!</i>');
    // TODO-QSP: dynamic text: Slava suddenly pulls his cock out of your pussy and you squeel in protest. "Put ...
    scene.text(`Slava suddenly pulls his cock out of your pussy and you squeel in protest. "Put it in! Please!" You buck your hips at him, But Slava responds by giving your ass a hard swat. "On your knees, ${((s as any).pcs_firstname || '')}. I'll fuck you again tomorrow."`);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-5), 'no_orgasm_msg');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/cafe/facial.mp4');
    scene.text('You obediently kneel in front of Slava, opening your mouth for his incoming load. You stick your tongue out and try to be as enticing as possible for him. Slava masturbates his dick until he begins to groan.');
    scene.text('His hot cum spatters across your face and you hear him whisper, "Ahhhh. Another face full of cum. Looks good on you." As per usual, after he finishes cumming he pushes his dick towards your mouth for cleaning. You obediently clean it, moving with eagerness to have his cock back inside you, even if only your mouth. You lick every centimeter of his cock and balls and suck hard, savouring him to the last drop before he pulls away, your lips trailing behind like your hips did earlier.');
    scene.text('He pulls his trousers back up and grins at you again. "I\'m glad to see you\'re getting as much out of this deal as I am," he says and closes the door behind him.');
    scene.text('After he leaves you sink to the ground, his cum plastering your face and your juices sticking to your legs. You think to yourself…');
    scene.text('<i>I need more…</i>');
    scene.actions([
      { label: 'Find your panties and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    qspGoto(s, 'gkafe', '');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'confrontation':
      enterConfrontation(s, scene);
      break;
    case 'dealbreaker':
      enterDealbreaker(s, scene);
      break;
    case 'work_shift':
      enterWorkShift(s, scene);
      break;
    case 'work_cock':
      enterWorkCock(s, scene);
      break;
    case 'first_sex1':
      enterFirstSex1(s, scene);
      break;
    case 'first_sex2':
      enterFirstSex2(s, scene);
      break;
    case 'slava_deal':
      enterSlavaDeal(s, scene);
      break;
    case 'duty':
      enterDuty(s, scene);
      break;
    case 'cloth_bj':
      enterClothBj(s, scene);
      break;
    case 'cloth_pre_fuck':
      enterClothPreFuck(s, scene);
      break;
    case 'cloth_fuck':
      enterClothFuck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const motherkafeboss: LocationDef = {
  name: 'motherkafeboss',
  title: '"Or do you want to have some fun?"',
  region: 'other',
  description: ['"Or do you want to have some fun?"'],
  enter: enter,
};
