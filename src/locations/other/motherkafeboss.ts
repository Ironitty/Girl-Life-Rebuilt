import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterConfrontation(s: GameState, scene: SceneBuilder): void {
  (s as any).slavatalk = 1;
  scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
  scene.text('You walk up to Borislav and he turns to face you.');
  // TODO-QSP: dynamic text: "Hello there, <<$pcs_nickname>>. What brings you by today? Did you want somethin...
  scene.text(`"Hello there, ${((s as any).pcs_nickname ?? 0)}. What brings you by today? Did you want something to eat?"`);
  // TODO-QSP: dynamic text: Ignoring his question you bluntly say, "I know you've been fucking <<$npc_nickna...
  scene.text(`Ignoring his question you bluntly say, "I know you've been fucking ${((s as any).npc_nickname ?? 0)?.['A29']}." He pauses briefly at your words and glances around the room at the customers.`);
  scene.text('"Why don\'t we talk about this in the back?" he says calmly. "We don\'t want to cause trouble for your mother do we?" You give him a hard look and follow him as he escorts you into a back room of the cafe.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
    scene.text('Once both inside, he shuts the door behind you and sits down casually in his desk chair.');
    scene.text('"So. What\'s this about?"');
    // TODO-QSP: dynamic text: "I told you. I know you've been fucking my <<$npc_nickname['A29']>>. She told me...
    scene.text(`"I told you. I know you've been fucking my ${((s as any).npc_nickname ?? 0)?.['A29']}. She told me everything."`);
    scene.text('He raises his eyebrow as you say this. "What exactly did she tell you?"');
    scene.text('"She told me that you only hire her because she lets you fuck her! And since she needs the job, she can\'t do anything but continue to let you fuck her and make a cuck out of dad!"');
    scene.text('Borislav shifts in his chair and studies you. Given the subject of the conversation, you can\'t help but feel that he\'s acting too calmly."');
    scene.text('"So? This doesn\'t explain why you\'re here. What do you want from me?"');
    scene.actions([
      { label: '"I want you to stop blackmailing <<$npc_nickname[\'A29\']>>"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
    // TODO-QSP: dynamic text: "I want you to stop blackmailing <<$npc_nickname['A29']>>," you say. "Stop extor...
    scene.text(`"I want you to stop blackmailing ${((s as any).npc_nickname ?? 0)?.['A29']}," you say. "Stop extorting her for sex and just let her work here as a normal waitress."`);
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
    scene.text(`"Stop fucking ${((s as any).npc_nickname ?? 0)?.['A29']}. And in return…" you trail off into a pause. "I'll let you fuck me instead."`);
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
    scene.text('He curiously follows you in and shuts the door behind him.');
    // TODO-QSP: dynamic text: What's this about <<$pcs_nickname>>? Did you want to talk about something?"
    scene.text(`What's this about ${((s as any).pcs_nickname ?? 0)}? Did you want to talk about something?"`);
    scene.actions([
      { label: 'I thought we had a deal!', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
    scene.text('"Yeah I wanted to talk about something!" you say with a raised voice, practically shouting. "I thought we had a deal!"');
    scene.text('Slava seems to have a confused look on his face. "We do have a deal, and I\'m--"');
    // TODO-QSP: dynamic text: You cut him off. "I know you're still fucking <<$npc_nickname['A29']>>! I saw yo...
    scene.text(`You cut him off. "I know you're still fucking ${((s as any).npc_nickname ?? 0)?.['A29']}! I saw you when you closed the cafe again! What do you think you're doing? You said we had a deal but you're not--"`);
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
    scene.text(`He smiles at you and continues. "You see ${((s as any).pcs_firstname ?? 0)}, I never extorted your mother to begin with. That story she told you about how I fuck her in return for letting her work here is the real lie. She's a good worker and an excellent waitress. Her contributions here are what earns her place here, not anything else. The truth is that your mother is just a slut."`);
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Fuck <<$npc_nickname[\'A29\']>>! I\'m fucking him!', handler: (st: GameState) => {
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
  }, goto: ['motherkafeboss', 'cloth_bj'] },
    ]);
  } },
      { label: 'No, I just want to be free', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "No, this isn't about her," you say before teasingly circling your tongue around...
    scene.text(`"No, this isn't about her," you say before teasingly circling your tongue around his tip. "I've been locked up in this cage of chastity for too long. It's not about ${((s as any).npc_nickname ?? 0)?.['A29']}, it's about me. I'm free to do whatever I want and no one is going to tell me otherwise anymore." You give him one last smile before plunging onto his cock headfirst.`);
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'kafe');
  }, goto: ['motherkafeboss', 'cloth_bj'] },
    ]);
  } },
      { label: 'No, you just helped me realize I love sex', handler: (st: GameState) => {
    scene.text('"Nope!" you say, teasingly circling the tip of his cock with your tongue. "You just helped me realize how much I love sex." And with that, you waste no more time and plunge yourself headfirst onto his cock.');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'kafe');
  }, goto: ['motherkafeboss', 'cloth_bj'] },
    ]);
  } },
      { label: 'I\'m going to become a huge slut just to show her', handler: (st: GameState) => {
    scene.text('"Exactly," you say. "I\'m going to become a huge slut just to piss her off. She thinks she fucked around when she was my age? I\'ll show her. I\'ll show everyone what it really means to be a slut. And I might not be satisfied until I\'ve tasted every cock in this town, maybe even every cock in St. Petersburg!"');
    scene.text('And with that declaration, you can\'t take it anymore and climb onto the sofa to ride his cock.');
    scene.actions([
      { label: 'Fuck him', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'kafe');
  }, goto: ['motherkafeboss', 'cloth_fuck'] },
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
  scene.text(`You worked as a waitress for 2 hours and made ${qspFunc(s, 'money', 'string_profit', 300)} plus ${qspFunc(s, 'money', 'string_profit', ((s as any).pcafetip ?? 0))} in tips.`);
  if (((s as any).slavadealfuck ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('As you finish up your shift, Slava catches your eye and gestures towards the back room.');
    scene.actions([
      { label: 'Uphold the deal', handler: (st: GameState) => {
    (s as any).slavadealfuck = ((s as any).daystart ?? 0);
  }, goto: ['motherkafeboss', 'slava_deal'] },
    ]);
  } else {
    scene.text('You finish up your shift and glance at Slava but since you\'ve already fucked today, your end of the deal has already been upheld and he doesn\'t pay attention to you.');
    scene.actions([
      { label: 'Finish your shift', goto: ['gkafe', ''] },
      { label: 'You want to fuck anyway', goto: ['motherkafeboss', 'slava_deal'] },
    ]);
  }
  scene.build();
}

function enterWorkCock(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/cafe/waitress_client.jpg');
  scene.text('Placeholder');
  (s as any).pcafetip = Math.floor(Math.random() * 101) + 40;
  // TODO-QSP: gs 'money', 'earn', 300 + pcafetip
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  // TODO-QSP: dynamic text: You worked as a waitress for 2 hours and made <<$func('money', 'string_profit', ...
  scene.text(`You worked as a waitress for 2 hours and made ${qspFunc(s, 'money', 'string_profit', 300)} plus ${qspFunc(s, 'money', 'string_profit', ((s as any).pcafetip ?? 0))} in tips.`);
  if (((s as any).slavadealfuck ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('As you finish up your shift, Slava catches your eye and gestures towards the back room.');
    scene.actions([
      { label: 'Uphold the deal', handler: (st: GameState) => {
    (s as any).slavadealfuck = ((s as any).daystart ?? 0);
  }, goto: ['motherkafeboss', 'slava_deal'] },
    ]);
  } else {
    scene.text('You finish up your shift and glance at Slava but since you\'ve already fucked today, your end of the deal has already been upheld and he doesn\'t pay attention to you.');
    scene.actions([
      { label: 'Finish your shift', goto: ['gkafe', ''] },
      { label: 'You want to fuck anyway', goto: ['motherkafeboss', 'slava_deal'] },
    ]);
  }
  scene.build();
}

function enterFirstSex1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/cafe/backroom.jpg');
  scene.text('"W-what??" you stammer, instinctively backing up as he comes closer.');
  // TODO-QSP: dynamic text: "Oh come now <<$pcs_nickname>>, I thought you were serious about this. If you're...
  scene.text(`"Oh come now ${((s as any).pcs_nickname ?? 0)}, I thought you were serious about this. If you're going to take your mother's place then you might as well start now, shouldn't you?"`);
  scene.text('"I-! I-!" You have to admit, you didn\'t entirely think this through. When you talked about the deal you thought of it as something in the distant future, not something about to happen right now!');
  scene.text('"W-w-what about your customers?" you try to say as an excuse.');
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
    scene.text(`<i>This is for the best. I'm doing this because I love ${((s as any).npc_nickname ?? 0)?.['A29']} and dad. ${((s as any).npc_nickname ?? 0)?.['A29']} won't have to suffer for our sake anymore.</i>`);
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
      // TODO-QSP: '"Anyways, you''ll need to get a uniform if you want to work here. You can pick one up from the G
      // TODO-QSP: M store. Your available hours are any time your mother isn''t working here."'
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
      // TODO-QSP: '"Hey, I''d be careful of doing that if I were you. You''re about to work for me, it might be more w...
      // TODO-QSP: M store. Your available hours are any time your mother isn''t working here."'
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
    scene.text(`Borislav fucks you roughly with no regard for your comfort or enjoyment. His large ${((s as any).dick ?? 0)} cm cock and not only fills you wall to wall but painfully stretches your virgin sex. There's a brief moment where you want to cry, but thinking of your mother and what you're doing for your parents' marriage, you resign yourself to the situation.`);
    // TODO-QSP: dynamic text: <i>This is for the best. I'm doing this because I love <<$npc_nickname['A29']>> ...
    scene.text(`<i>This is for the best. I'm doing this because I love ${((s as any).npc_nickname ?? 0)?.['A29']} and dad. They won't have to suffer anymore and any price is worth that. Even my virginity.</i>`);
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
    scene.text(`<i>Is this what ${((s as any).npc_nickname ?? 0)?.['A29']} feels every day she goes to work?</i> you think to yourself. <i>Is this how much she loves us?</i>`);
    scene.text('"Hey, don\'t just sit there. Clean me up," Slava says, interrupting your train of thought by sticking his cock in your face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    scene.img('images/locations/pavlovsk/cafe/cum_clean.jpg');
    scene.text('Your thoughts still on your mother, you give him a thorough tongue bath to clean off your slick pussy juices. As much as you try not to think about it, you can\'t help but notice the taste of blood from your torn hymen mixed in with his cum and your pussy juice. You try to distract yourself from these thoughts by sucking hard on Slava\'s dick to draw the last remnants of semen from his sperm duct. Pulling your lips from his head, you look around but don\'t see any tissues or anything else to do with what\'s in your mouth. Unable to come up with an alternative solution, you swallow, once again trying to focus on the taste of his sperm rather than your blood.');
    scene.text('"Oooooohhh… There\'s nothing better than a girl who knows how to suck to the last drop. Always much better than when it seeps out into your underwear later. Nice to see good etiquette runs in the family," he says with a cheeky grin.');
    if (((s as any).pcafejob ?? 0) === 2) {
      // TODO-QSP: '"Anyways, you''ll need to get a uniform if you want to work here. You can pick one up from the G
      // TODO-QSP: M store. Your available hours are any time your mother isn''t working here."'
    }
    if (((s as any).pcafejob ?? 0) === 1) {
      scene.text('"Anyways, if you ever change your mind about that job, let me know. The offer still stands. As much as I enjoy getting you as a fucktoy for free, I could honestly use another part time waitress. Come see me if you change your mind."');
    }
    scene.text('He pulls up his trousers and moves to the door, bidding you goodbye.');
    scene.text('"I look forward to our future relationship with this deal. And oh," he says, looking back at you. "Don\'t forget to clean your face up. Can\'t have rumors spreading about you, can we?" before shutting the door behind him.');
    // TODO-QSP: dynamic text: The door clicks shut and you sigh. <i>For <<$npc_nickname['A29']>> and dad…</i> ...
    scene.text(`The door clicks shut and you sigh. <i>For ${((s as any).npc_nickname ?? 0)?.['A29']} and dad…</i> you think to yourself as you squint to stop another dribble of cum from sliding into your eye.`);
    scene.text('You pick up your clothes and get ready to leave.');
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
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
    scene.text(`You grit your teeth as Borislav fucks you roughly with no regard for your comfort or enjoyment. His large ${((s as any).dick ?? 0)} cm cock and not only fills you wall to wall but painfully stretches your virgin sex. With every thrust, you grind your teeth more and more to prevent yourself from crying out in pain.`);
    // TODO-QSP: dynamic text: Even through the pain you think to yourself, <i>This is fucking bullshit. I can'...
    scene.text(`Even through the pain you think to yourself, <i>This is fucking bullshit. I can't believe this is how I'm losing my virginity. Practically getting raped on a table in the back of a cafe. If it weren't for ${((s as any).npc_nickname ?? 0)?.['A29']}, I wouldn't ev--</i>`);
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
      // TODO-QSP: '"Hey, I''d be careful of doing that if I were you. You''re about to work for me, it might be more w...
      // TODO-QSP: M store. Your available hours are any time your mother isn''t working here."'
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
    dynamicGoto(st, 'loc', 'loc_arg');
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
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).slavafuck ?? 0) < 6) {
      scene.actions([
        { label: 'Reluctantly let him use you', goto: ['motherkafeboss', 'duty'] },
      ]);
    } else {
      scene.actions([
        { label: 'Dutifully fuck him', goto: ['motherkafeboss', 'duty'] },
        { label: 'Happily fuck him', goto: ['motherkafeboss', 'duty'] },
      ]);
    }
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
  }
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
    default:
      enterConfrontation(s, scene);
      break;
  }
}

export const motherkafeboss: LocationDef = {
  name: 'motherkafeboss',
  title: '"Or do you want to have some fun?"',
  region: 'other',
  description: ['You walk up to Borislav and he turns to face you.'],
  enter: enter,
};
