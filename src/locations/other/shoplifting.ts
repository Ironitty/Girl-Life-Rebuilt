import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCity(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Attempt to steal makeup', handler: (st: GameState) => {
    qspCall(st, 'item_cart', 'shopping_var_clear');
    (st as any).picrand = (Math.floor(Math.random() * 8) + 0);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/shared/shoplift/steal${((st as any).picrand ?? '')}.jpg`);
    scene.text('Standing in front of the make-up section of the supermarket, you nervously look over your shoulder to make sure none of the employees are able to spot you.');
    scene.text('Seeing no one, you casually reach out for the make-up you usually use and tuck it away…');
    scene.text('After looking around the cosmetic section for a while more, you decide it\'s time to make your escape.');
    scene.actions([
      { label: 'Leave the store', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/leave.jpg');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, just act normal…" you sigh quietly as you step towards ...
    scene.text(`"Okay ${((st as any).pcs_nickname ?? '')}, just act normal…" you sigh quietly as you step towards the exit, trying to not draw any attention towards yourself.`);
    scene.text('Don\'t panic…');
    scene.text('Walk casually…');
    scene.text('Almost there…');
    scene.text('Don\'t panic…');
    scene.text('Walk casually…');
    scene.text('Almost there…');
    scene.text('The exit of the supermarket comes closer and closer with every step, and you try to do whatever you can to control your nerves.');
    if ((Math.floor(Math.random() * 5) + 0) !== 0  ||  ((st as any).pcs_observ ?? 0) + ((st as any).pcs_persuas ?? 0) > 150  ||  ((((st as any).pcs_observ ?? 0) + ((st as any).pcs_persuas ?? 0) > 50)  &&  (((st as any).hour ?? 0) === 12  ||  ((st as any).hour ?? 0) === 17))) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) + (50);
      qspCall(st, 'archetypes', 'gain', 'punk', 'small', 'Shoplifting');
      scene.text('As you walk by the counters and leave the supermarket, you feel a rush of excitement. You\'re almost there now, feeling relieved as well as triumphant. You\'re going to make it for sure!');
      scene.text('You feel your hands trembling in your pockets, getting worse with every step. No matter what you do, you can\'t shake the feeling that someone must\'ve spotted you… surely they\'ve spotted you!');
      scene.text('You desperately try to calm yourself down as with every step you get closer to the exit. No one seems to be stopping you so far… maybe you got lucky?');
      scene.text('Before you know it, you\'re standing outside, having managed to get away with your loot. You turn back one last time to make sure that no one is following you.');
      scene.actions([
        { label: 'Keep on walking', goto: ['city_mall', ''] },
      ]);
    } else {
      if (((st as any).pcs_observ ?? 0) + ((st as any).pcs_persuas ?? 0) + ((st as any).pcs_run ?? 0) > 200) {
        scene.text('You feel your hands trembling in your pockets, getting worse with every step. No matter what you do, you can\'t shake the feeling that someone must\'ve spotted you… surely they\'ve spotted you!');
        scene.text('You desperately try to calm yourself down as with every step you get closer to the exit. No one seems to be stopping you so far… maybe you got lucky?');
        scene.text('You nervously look around, making sure there isn\'t anyone following you as you pass the counter. All of a sudden, you see a guard appear and walk towards you…');
        scene.actions([
          { label: 'Try to escape', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/running.jpg');
    scene.text('Realizing he\'s out after you and not wanting to get caught, you make a dash for it. You can\'t get caught for a small thing like this.');
    if (((st as any).pcs_run ?? 0) > 70) {
      qspCall(st, 'exp_gain', 'observ', 5);
      qspCall(st, 'exp_gain', 'run', 5);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) + (50);
      qspCall(st, 'archetypes', 'gain', 'punk', 'small', 'Shoplifting');
      scene.text('You keep running while the security guard follows close behind… You turn a corner and then quickly take another corner as you try to shake him off…');
      scene.text('The guard is not easily giving up, but after a few minutes, you\'ve managed to outrun him as you make your escape from the supermarket. You can hear the guard screaming behind you…');
      scene.actions([
        { label: 'Catch your breath', goto: ['city_center', ''] },
      ]);
    } else {
      ((st as any).policeQW = (st as any).policeQW ?? {})['shoplift_caught'] = ((st as any).policeQW['shoplift_caught'] ?? 0) + (1);
      scene.text('You keep running while the security guard follows close behind… You turn a corner and then quickly take another corner as you try to shake him off…');
      scene.text('But the guard is not easily giving up, and as you turn the corner, you reach a dead-end. You quickly try to turn around and run another way but it\'s too late as you\'re tackled.');
      scene.text('Lying on the ground, the security guard quickly lifts you up and leads you toward the security room.');
      scene.actions([
        { label: 'Get lead to the security room', goto: ['shoplifting', 'securityroom'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.text('You feel your hands trembling in your pockets, getting worse with every step. No matter what you do, you can\'t shake the feeling that someone must\'ve spotted you… surely they\'ve spotted you!');
        scene.text('You desperately try to calm yourself down as with every step you get closer to the exit. No one seems to be stopping you so far… maybe you got lucky?');
        scene.text('You pass by the counter, and seeing no one reacting, you relax for a bit and let down your guard. Just as you\'re about to leave through the entrance, you feel a hand grab you by the shoulder.');
        scene.text('You instantly turn around, seeing a security guard is holding you and dragging you back inside. Before you\'re even able to speak up, he is forcefully leading you back to his office.');
        scene.actions([
          { label: 'Get dragged into the back room', goto: ['shoplifting', 'securityroom'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSecurityroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).policeQW ?? 0)?.['toldonguard'] === 1) {
    qspGoto(s, 'shoplifting', 'punish');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_value'] = 1300;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/caught.jpg');
  scene.text('"Where are you taking me?" you shout out, "I haven\'t done anything wrong!" You look around trying to catch someone\'s attention. People are staring at you in disgust and turning their heads.');
  scene.text('The security guard keeps quiet as he forcefully pushes you away from the supermarket. You go through a dark hallway and stop at a door, which he unlocks before pushing you inside.');
  scene.text('He orders you to take a seat on a basic chair, and you quietly comply…');
  scene.text('He sits down next to you and lets out a deep sigh, "You might as well admit what you\'ve done. We have you on tape stealing…"');
  qspCall(s, 'willpower', 'misc', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Deny', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Deny', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('You defiantly tell him that he\'s grabbed the wrong person and that you have no idea what he\'s talking about.');
    scene.text('"Listen here, girl. We\'ve got you on tape as you shoplifted…" he proudly boasts.');
    scene.text('You know you\'ve been caught, but you keep on sticking to you story, "That could be whoever on that tape, how can you prove that\'s me?"');
    scene.text('The security guard chuckles, "Don\'t worry about that. I\'ll go and get the manager, and then we\'ll see what he decides to do with you…"');
    scene.text('"Wait!" you squeal, "We don\'t need to get him involved…"');
    scene.text('The security guard crosses his hands, "So what possibly could you offer me?"');
    scene.actions([
      { label: 'Masturbate for him', goto: ['shoplifting', 'show'] },
      { label: 'Offer him relief', goto: ['shoplifting', 'bj'] },
      { label: 'Offer a bribe', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'shoplifting', 'bribe');
    }
  } },
      { label: 'Keep quiet', goto: ['shoplifting', 'quiet'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Admit', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You hang your head in resignation, realizing there\'s no denying that you\'ve been caught. Your eyes tear up with crocodile tears as you try to come up with a way to get out of this, "I admit I\'ve stolen…"');
    scene.text('The guard clears his throat, "Well, that\'s a start… Now I just need to go and have a talk with the store manager on how we\'ll deal with you…"');
    scene.text('Pleadingly, you look at him, "Can\'t we work something out? Do you really have to go and talk to the manager?"');
    scene.text('Looking at you, the security guard starts pondering, and after a short moment, he speaks up, "So what would you be able to offer me?"');
    scene.actions([
      { label: 'Masturbate for him', goto: ['shoplifting', 'show'] },
      { label: 'Offer him relief', goto: ['shoplifting', 'bj'] },
      { label: 'Offer a bribe', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'shoplifting', 'bribe');
    }
  } },
      { label: 'Keep quiet', goto: ['shoplifting', 'quiet'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 3, 'sub', 'exhibition');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/sex/show/show1.jpg');
  scene.text('"How about a little show? I\'ll help you get off, and you can even direct me on how the show will carry on…" you desperately proclaim.');
  scene.text('The security guard stops, pondering about it for a moment… All of a sudden you can see him smirking, "And you\'ll follow my instructions to the latter?"');
  scene.text('You nod and slyly smile, giving into the fantasy that you\'re going to be entirely subdued by him…');
  scene.text('"Fine, let\'s begin then," he excitingly exclaims, "Stand up and let me take a look at you. I want you to tease yourself for a while, I love seeing girls getting off."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Comply', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 3, 'masturbate', 'sub', 'exhibition');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/show/show2.jpg');
    scene.text('You comply and stand up, pressing yourself against the wall. He begins grabbing your clothes, wanting to remove them. While he\'s doing this, you hear him say, "I want you to touch yourself." You prepare yourself by taking a deep breath and slowly slide your hand down towards your panties. As you finally reach your clit, you slowly begin touching it, biting your lip as your body reacts to the soft touches.');
    scene.text('The security guard is observing you satisfied, rubbing his cock throughout his pants. He\'s clearly aroused, and you fear a bit what might come next, but you manage to keep focus as you know this will determine your fate.');
    scene.text('"I wonder, are your panties soaked yet, girl?" he asks.');
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'sub', 'exhibition');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/show/show3.jpg');
    scene.text('Your answer comes as a gentle nod and a soft moan letting him know that his orders has succeeded in making you wet.');
    scene.text('Pleased, he nods his head as he continues on, "Remove your clothing, I want to see them wet panties."');
    scene.text('Once again, you comply and remove you clothing piece by piece as he carefully scans your body, "Good, now sit back down again and spread your legs, slide your panties down, I want to see that vulva exposed…"');
    scene.actions([
      { label: 'Remove your panties', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 3, 'masturbate', 'sub', 'exhibition');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/show/show4.jpg');
    scene.text('"I hate you…" you whisper softly as you obey.');
    scene.text('He starts chuckling, "Good, I want you to hate me, this is making you feel humiliated. Use that frustration to begin touching yourself and pick up the pace this time."');
    scene.text('You look madly at him as you use your fingers to rub on your exposed clit, picking up the pace. Just as you\'re feeling excited, he tells you to slow down as he doesn\'t want you to get too much pleasure out of this…');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 3, 'masturbate', 'sub', 'exhibition');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/show/show5.jpg');
    scene.text('By the time you\'ve gradually slowed down, the security guard himself has started jerking off as he closely observes your every move, turned on by your obedience.');
    scene.text('Suddenly, an urge overcomes you, and without him commanding you, your other hand travels upward, stopping at your breast. You carefully begin to play with one of your nipples, gently rubbing it in a circular motion building up your arousal.');
    scene.text('You don\'t even care anymore if he approves or not. You\'re too excited, and it\'s getting the best of you as you begin picking up the pace again, moaning loudly by now.');
    scene.text('"You little minx! Who told you to take the control?" he manages to say between his panting, "I\'ll let you off this time as I love seeing you squirm, as you appease me… but use this instead" as he hands over a fake cock.');
    scene.actions([
      { label: 'Continue on', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'D2');
    qspCall(st, 'stat', '');
    qspCall(st, 'boyStat', 'd3');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal_dildo', 3, 'masturbate', 'sub', 'exhibition');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/show/show6.jpg');
    scene.text('Your eagerly grab the fake cock and rub it against your clit swiftly. Your pussy lips have turned bright pink, and you just want to explode. You look at him pleadingly, begging him to let you orgasm.');
    scene.text('But to your dismay, the security guard is only focused on himself as he\'s furiously stroking his cock…');
    scene.text('You pick up the pace, not wanting to be outpaced by him, but just as you\'re about to orgasm, the security guard seems to decide that it\'s time for some payback, as he smugly commands you to stop touching yourself right away…');
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'vaginal_dildo', 3, 'sub', 'exhibition');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/show/show7.jpg');
    scene.text('All of your body is screaming in agony as you obey and stop, your pulsating pussy deprived of an orgasm and your mind about to snap…');
    scene.text('The security guard continues stroking as you look at him pleadingly again, letting out a small whimper, "Please, let me continue, I was so close…"');
    scene.text('The room turns almost silent as you can only hear the sound from his squishy strokes, and after a few moments, he barely manages to tell you to continue on. You eagerly sit on the fake cock, spreading your swollen pussy, as you don\'t know if he\'ll stop you anew.');
    scene.text('It doesn\'t take long before you hear loud panting and groaning as he finishes, but you\'ve managed to faze him out as you\'re approaching an orgasm once again, now furiously penetrating yourself. You want to make sure that you\'re able to finish before he\'s able to stop you.');
    scene.text('His commanding tone and the build up has finally come to fruition as your legs stiffen, your pussy goes numb and you orgasm violently, trembling, barely able to sit still on the chair. The orgasm is so immense that you feel your ears ringing afterwards for a few minutes.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/city/shared/shoplift/sex/show/show8.jpg');
    scene.text('You keep the fake cock inside you for a while as you calm down. The security guard is looking pleased at you.');
    scene.text('Ashamed, you quickly grab your clothes and start putting them on. While you\'re getting dressed, you look at him with disgust and impatiently ask, "Are we done now?"');
    scene.text('The security guard grins and tells you to wait for a moment while he goes away, explaining that he needs to go to take care of a thing and that he will be right back…');
    scene.text('You make yourself look as compliant as possible as you smile and nod, just wanting this to be over with so you can continue on with your day.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).policeCalled = (Math.floor(Math.random() * 13) + 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/show/show9.jpg');
    scene.text('You patiently sit and wait for the security guard to return. You closely listen to every little sound happening outside the office hoping that he\'ll return soon and let you go.');
    scene.text('All of a sudden, you hear footsteps and someone opening the door…');
    if (((st as any).policeCalled ?? 0) <= 4) {
      scene.text('To your dismay the security guard has not only called the manager but there\'s even a police officer standing there with them.');
      scene.text('The security guard smugly proclaims, "Here she is officer. I had her locked up the whole time…" He turns to the manager, "Don\'t worry sir, I\'ve already recovered the video evidence…"');
      scene.text('The manager nods while the police officer approaches you resolutely, telling you to stand and turn around so he can handcuff you.');
      scene.text('You obediently turn around, and the police officer tightens his cuffs so they sit real tight. As he finishes, he grabs you by the arm and leads you away…');
      scene.actions([
        { label: 'Go to the police station', goto: ['police_station', 'entrance', 'shoplift'] },
      ]);
    } else {
      scene.text('The door opens, and thankfully, there\'s only the security guard standing there holding a video cassette in his hand. "Sorry for the wait, it took me a while to get hold of the cassette."');
      scene.text('Your face brightens as you know that he went through all sorts of trouble to leave no trace behind that you\'ve ever been here.');
      scene.text('"Here take the tape and destroy it," he states, "Be gone now before anyone spots you and we both get in trouble."');
      scene.text('You nod and hurriedly jump away from the chair, grabbing the tape as you walk by the security guard…');
      scene.actions([
        { label: 'Head outside', goto: ['city_center', ''] },
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
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/sex/bj/bj1.jpg');
  scene.text('"How about I give you a blowjob and you let me go?" you calmly suggest.');
  scene.text('The security guard is taken aback a little by your suggestion, but it doesn\'t take long before you notice a smirk on his face. "How about this, if you perform well enough, I\'ll let you go, otherwise I\'ll be calling the cops."');
  scene.text('Not having lot of choice, you look him in the eyes and nod.');
  scene.text('"Good! But before we begin I want a memento to remember you by," he adds as he pulls out his cellphone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take picture', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj2.jpg');
    scene.text('You happily stand up and smile as you can hear his cellphone camera snap.');
    scene.text('"This will do. I can\'t wait to show you off to my friends," he tells you.');
    scene.text('You can\'t do anything more than smile and nod as you need to play along so he lets you go.');
    scene.text('"That\'s enough, girl! Time to get to it. Remove your clothes, let me see your naked body!" he commands.');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj3.jpg');
    scene.text('You pleadingly look at him, but he turns his head around to avoid meeting your eyes. Seeing he won\'t budge, you slowly start taking off your clothes.');
    scene.text('The security guard\'s gaze turns to you again, and he carefully watches as you remove one cloth after another as you try to cover up your naked body.');
    scene.text('"Good job, girl! Look at your fine breasts. Don\'t be shy and cover yourself, the plan is to arouse me…" he smirks, "Now get on your knees."');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj4.jpg');
    scene.text('You get down on your knees and wait while he rubs his cock through his pants.');
    scene.text('After a short while, he unzips the pants and releases his cock. As it pops out, you let out a gasp, surprised by the massive size. "You\'re way bigger than I expected," you say as you observe his stiff cock.');
    scene.text('He lets out a laugh and jokes, "Are you sure that it will be able to fit in your mouth?"');
    scene.actions([
      { label: 'Play with his glans', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj5.jpg');
    scene.text('Triggered by his joke and wanting to show him up, you slowly move your lips near his cock and give his glans a little kiss. You can hear him let out a soft groan. He must be really sensitive.');
    scene.text('Feeling encouraged, you start moving your lips around his glans, letting out your tongue to tease his penis head.');
    scene.text('The security guard doesn\'t say anything and seems to be pleased by your performance…');
    scene.text('You look up at him and give him a little smile, biting your lip before moving your tongue up and down his shaft…');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj6.jpg');
    scene.text('Not wanting to tease him anymore, you wrap your lips around his glans and slowly let the head glide deeper inside your mouth. You didn\'t expect him to taste this good…');
    scene.text('The security guard didn\'t expect you to be this bold as you feel his whole body stiffen…');
    scene.text('After a few moments, you pick up the pace, and before you know it, you\'ve swallowed half his cock. You\'re totally engulfed and even manage to forget why you\'re sucking him off.');
    scene.text('It doesn\'t take long before his cock is twitching and he tells you to pull out before he cums…');
    scene.actions([
      { label: 'Tug his cock', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'hj', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj7.jpg');
    scene.text('Disappointed, you pull out and let out a loud mouth sound as you remove your lips from his cock.');
    scene.text('By now, the security guard is panting heavily, and you give him a minute to recover before you start tugging his cock.');
    scene.text('You grab his cock quite hard, and you start quickly stroking him up and down. You\'re enjoying yourself as you\'re in command and he\'s at your mercy.');
    scene.text('You notice a little pre-cum come out, and you feel this urge to slow down and tease him as you want to drag this out for as long as possible…');
    scene.actions([
      { label: 'Let him cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'breasts', 'Security guard');
    (st as any).spafinloc = 15;
    qspCall(st, 'arousal', 'hj', 2, 'dom');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj8.jpg');
    scene.text('"Don\'t you dare slowing down!" he manages to yell out just as you start to…');
    scene.text('Surprised by his reaction, you quickly pick up the pace, and as your hand moves up and down his cock, it stops twitching and gets really stiff. After two more tugs, he shoots all over your chest area…');
    scene.text('As you look down, you notice you\'re covered in his thick cum… You give his cock a few more tugs to get it all out and then let go of it as it continues to twitch.');
    scene.text('"Get cleaned up, and I\'ll be back soon!" he tells you as he zips his pants and leaves the office…');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).policeCalled = (Math.floor(Math.random() * 13) + 0);
    (st as any).cumspclnt = 16;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj9.jpg');
    scene.text('You clean yourself up and get dressed as soon you hear the door close. There\'s nothing more to do than patiently sit and wait for the security guard to return.');
    scene.text('You closely pay attention to every little sound happening outside the office, hoping that he\'ll return soon and let you go. All of a sudden you hear footsteps and someone opening the door…');
    if (((st as any).policeCalled ?? 0) <= 3) {
      ((st as any).policeQW = (st as any).policeQW ?? {})['toldonguard'] = 2;
      scene.text('To your dismay, the security guard has not only called the manager but there\'s even a police officer standing there with them.');
      scene.text('The security guard smugly proclaims, "Here she is officer I had her locked up the whole time…" He turns to the manager, "Don\'t worry sir, I\'ve already recovered the video evidence…"');
      scene.text('The manager nods while the police officer approaches you resolutely, telling you to stand and turn around so he can handcuff you.');
      scene.text('You obediently turn around, and the police officer tightens his cuffs so they sit real tight. As he finishes, he grabs you by the arm and leads you away…');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Go to the police station', goto: ['police_station', 'entrance', 'shplft'] },
      ]);
    } else {
      scene.text('The door opens, and thankfully, there\'s only the security guard standing there holding a video cassette in his hand. "Sorry for the wait, it took me a while to get hold of the cassette."');
      scene.text('Your face brightens as you know that he went through all sorts of trouble to leave no trace behind that you\'ve ever been here.');
      scene.text('"Here take the tape and destroy it," he states, "Be gone now before anyone spots you and we both get in trouble."');
      scene.text('You nod and hurriedly jump away from the chair, grabbing the tape as you walk by the security guard…');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Head outside', goto: ['city_center', ''] },
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
  scene.build();
}

function enterBribe(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/offermoney.jpg');
  scene.text('You look the security guard straight in the eyes, "I can offer you money if you let me go."');
  scene.text('The security guard begins to chuckle, "You? Offer me money? Don\'t be silly girl, you can\'t possibly bribe me… Where would you have the money for that…"');
  scene.text('You pout a little as you listen to him, "Just tell me how much you want, and I\'ll pay you off…" As you finish, you give him a little wink.');
  scene.text('"If you can afford the stuff, why did you steal?" he remarks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Explain', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/offermoney.jpg');
    scene.text('"You want my honest answer?" you look at him, a serious expression on your face, "Simply put, because I can and the adrenaline kick is amazing!"');
    scene.text('The security guard smirks, "So you\'re only doing it for the fun of it?"');
    scene.text('Looking pleased, you give him a satisfied nod.');
    // TODO-QSP: dynamic text: All of a sudden, he changes his posture, "I don''t usually do this, but if you g...
    scene.text('All of a sudden, he changes his posture, "I don\'t usually do this, but if you give me 5000₽, then we\'re all good."');
    scene.text('"And if I don\'t?" you curiously inquire.');
    scene.text('"You\'ll have to face the consequences then…" he shortly replies.');
    scene.actions([
      { label: 'Pay up', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'money', 'pay', 5000, 'cash');
      qspCall(st, 'stat', '');
      scene.img('images/locations/city/shared/shoplift/offermoney.jpg');
      scene.text('You burst out in laughter, "Fine, fine. I\'ll pay up don\'t worry… Relax, I was only joking around with you."');
      scene.text('"Sure, sure… Hurry up now, show me the money before anyone shows up…" he hurries you on.');
      scene.text('You keep on laughing as you hand over the money to him.');
      scene.text('He quickly counts the money and then has you stand up and hurries you outside the office, pushing you on. He tells you which way to take and not to talk to anyone.');
      scene.text('You give him a smile and thank him for being so nice to you… You turn around one last time to tease him before turning the corner.');
      scene.actions([
        { label: 'Walk out', goto: ['city_center', ''] },
      ]);
    }
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/arrested.jpg');
    scene.text('You shake your head, "I\'m not interested in paying you off. Do your worst…" you challenge him.');
    scene.text('His face turns red with anger as he turns away from you and walks out of the office…');
    scene.text('Some minutes pass while you patiently wait for him to return. You closely pay attention to every little sound happening outside the office. All of a sudden, you hear footsteps and someone opening the door…');
    scene.text('To your dismay, you see the security guard has returned with a police officer in tow. "There she is officer. This girl was stealing from the supermarket. We\'ve got evidence and everything," the guard states, clearly irritated by your arrogance.');
    scene.text('The officer sighs and determinedly walks over to you, "Turn around girl, I need to cuff you…"');
    scene.text('Without uttering a word, you turn around and let the officer cuff you. The cuffs are sitting tight, but you refuse to give the security guard the smallest satisfaction by letting him know that.');
    scene.text('The police officer chats with the security guard before leading you away to the police station…');
    scene.actions([
      { label: 'Go to the police station', goto: ['police_station', 'entrance', 'shplft'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQuiet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/quiet.jpg');
  scene.text('All of a sudden you hesitate. Why should you offer him anything? You might as well keep quiet as the end result will still be the same.');
  scene.text('"Well girl, don\'t test my patience, I don\'t have all the day. Tell me now what do you have to offer."');
  scene.text('You give him a look full of disgust. You\'re going to see this through, no matter the consequences.');
  scene.text('"Well? Why did you go all quiet all of a sudden?" he demands. Noticing that you won\'t reply, his face turns red and he stomps out of the room, slamming the door behind him…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/arrested.jpg');
    scene.text('Some minutes pass while you patiently wait for him to return. You closely pay attention to every little sound happening outside the office. All of a sudden, you hear footsteps and someone opening the door…');
    scene.text('To your dismay, you see the security guard has returned with a police officer in tow. "There she is officer. This girl was stealing from the supermarket. We\'ve got evidence and everything," the guard states, clearly irritated by your arrogance.');
    scene.text('The officer sighs and determinedly walks over to you, "Turn around girl, I need to cuff you…"');
    scene.text('Without uttering a word, you turn around and let the officer cuff you. The cuffs are sitting tight, but you refuse to give the security guard the smallest satisfaction by letting him know that.');
    scene.text('The police officer chats with the security guard before leading you away to the police station…');
    scene.actions([
      { label: 'Go to the police station', goto: ['police_station', 'entrance', 'shplft'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPunish(s: GameState, scene: SceneBuilder): void {
  ((s as any).policeQW = (s as any).policeQW ?? {})['toldonguard'] = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/sex/revenge/revenge1.jpg');
  scene.text('The guard forcefully drags you into the room and shoves you towards the chair. "Well well, look who\'s back… if it isn\'t the little rat!" he heatedly comments.');
  // TODO-QSP: dynamic text: <i>Fuck it''s the same guard, now you''ve done it, <<$pcs_nickname>>, get prepar...
  scene.text(`<i>Fuck it's the same guard, now you've done it, ${((s as any).pcs_nickname ?? '')}, get prepared for whatever awaits you… your fate is in his hands…</i>`);
  scene.text('"I hate you fucking rats. Do you know what I had to go through to get away from ending up in jail. Luckily one of the pigs didn\'t mind getting bribed so I got away," he grins, "And now for your punishment."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Beg', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/revenge/revenge2.jpg');
    scene.text('You squirm and look apologetically at him. "Please… You have to believe me, I didn\'t have any option. They made me confess that you forced yourself onto me…" you try to deceive him.');
    scene.text('Fuming, he lunges towards you, "Listen here, you little slut. I don\'t give a shit if they forced you into anything. You ratted and you need to be taught a lesson."');
    scene.text('You put together your hands pleading for mercy as a last ditch effort to make him rethink it all.');
    scene.text('But to your dismay, he doesn\'t budge, and before you know it, he\'s standing next you. "Like pleading will help you now, slut!"');
    scene.actions([
      { label: 'Squeak', handler: (st: GameState) => {
    qspCall(st, 'pain', '', 4, 'breasts', 'twist');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/revenge/revenge3.jpg');
    scene.text('Before you\'re able to react to what he\'s saying, you feel a cold hand sliding down your body towards your breasts.');
    scene.text('Reacting instinctively, you look up only to see the security guard\'s eyes filled with rage and arousal. His hand keeps sliding down, and it doesn\'t take long before he is fondling one of your breasts.');
    scene.text('You let out a soft moan as he softly touches your nipple, making you shiver with excitement. "You\'re enjoying yourself, aren\'t you slut?" he inquires as you let out another moan as an answer.');
    scene.text('All of a sudden, you can feel the mood change as he violently grabs hold of your breast and starts roughly kneading it. "It\'s not one of those times where you\'re supposed to feel excited, slut." The pain you feel in your breast is almost unbearable.');
    scene.actions([
      { label: 'Plead', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'Security Guard', 42);
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'humiliation', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/revenge/revenge4.jpg');
    scene.text('In sheer desperation, you begin to look for a way to convince him to stop. You try looking at him pleadingly but to no avail. Next you try to speak up, but he kneads your breast even harder. "Want this to stop?" he asks.');
    scene.text('Urgently wanting that, you uncontrollably nod. "On your knees then whore. I want you to go deep and don\'t you dare let me feel those teeth either," he says as he lets go of your sore breast.');
    scene.text('You quickly get down on your knees and unbutton his pants, exposing his bare cock. You grab hold of his shaft and gently lick on his glans to get him ready. You open your mouth and wrap your lips around his cock and slowly begin working your way up and down.');
    scene.text('While you\'re doing this, you hear an annoyed sigh, and you feel a hand on the back of your head locking you in. Without any hesitation, the security guard begins thrusting, going deeper with every thrust. "Remember what I said, I don\'t want to feel any teeth!"');
    scene.text('Fearing what he might do, you try your best to accommodate him. His thrusts become more rapid, and he goes really deep down your throat. There are several times you feel that you\'re close to throwing up. "Lube it up whore if you don\'t want to feel any pain…" you hear him say as you gag once more on his cock.');
    scene.actions([
      { label: 'Comply', handler: (st: GameState) => {
    qspCall(st, 'pain', '', 7, 'vaginal', 'tear');
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'humiliation', 'rough');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/revenge/revenge5.jpg');
    scene.text('"That\'s enough of that!" he yells out as he pulls quickly out of your mouth with a wet plop. He grabs you harshly by the shoulders and leads you over to the desk, which he bends you over, giving him a full look at your orifices.');
    scene.text('"Which one should we take," he teases as you await him to decide, hoping whichever he picks he\'ll be gentle. "This one will suffice today!" he declares as he furiously pushes inside your pussy without any care in the world. As he penetrates, you let out a loud scream from the sheer pain you\'re experiencing.');
    scene.text('"Scream as much as you want!" he yells out between his thrusts, "It only turns me on even more!" he continues frantically pounding you. He\'s going deep, and you can feel his cock hitting your cervix.');
    scene.text('After a few minutes, you expect him to slow down, but he persists, grabbing you by the hair and continuing on pounding you, leaving you in despair between pain and pleasure.');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'breasts', 'Security guard');
    (st as any).spafinloc = 15;
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'humiliation', 'rough');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/revenge/revenge6.jpg');
    scene.text('You can feel your excitement being built up as you near an orgasm and prepare for it. The security guard is still pounding you away, but you\'ve adjusted really well, and by now, you\'re feeling more pleasure than pain.');
    scene.text('You\'re loudly moaning but so is he as your pussy walls tighten and squish his cock. Just as you\'re about to orgasm, he pulls out, leaving your hole empty, craving for his cock to enter you again. "Did you really expect that I would let you orgasm?" he smirks, "Didn\'t I tell you no pleasure for you today!"');
    scene.text('You look meekly at him as he pushes you down on your knees and begins jerking off himself. You\'re still feeling cheated on your orgasm and pout as he begins to groan, and it doesn\'t take long before your breasts are covered by his warm cum.');
    scene.text('He gives his cock a few more jerks, making sure he\'s drained it, and he keenly looks at your chest, admiring his work. As everything settles down, you almost tear up, reminded by the pain you feel in your vagina and breast.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    (st as any).cumspclnt = 16;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/city/shared/shoplift/sex/revenge/revenge7.jpg');
    scene.text('"Here, get cleaned up and dress yourself!" he hands you over a towel. The security guard remains observing you while you clean yourself up, making sure you do it properly not leaving a trace behind.');
    scene.text('While you\'re putting on your clothes, you can\'t let go of the feeling of shame from what you\'ve experienced and try your best to avoid eye contact.');
    scene.text('"Sit down on that chair and wait for me to return whore!" he commands as you barely manage to even give him a subtle nod. As you sit down, he walks up to you, "Listen here. Don\'t you dare go telling anyone about this… I know who you are and where you live and the next time I won\'t be as gentle as this time." With that, he turns and walks out of the office, locking it, leaving you to ponder on what\'s about to happen next.');
    scene.text('Some minutes pass by, and you hear several voices approaching the door. As it opens up, you see the security guard standing there with a police officer. "This one?" the officer asks as he points at you. The security guard nods his head, "Yeah she\'s a real pain in the ass."');
    scene.text('The officer walks over to you, cuffs you and begins leading you away. As you\'re being led by the security guard, he flashes you a smile, mocking you.');
    scene.actions([
      { label: 'Go to the police station', goto: ['police_station', 'entrance', 'shplft'] },
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

function enterPav(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Attempt to steal makeup', handler: (st: GameState) => {
    qspCall(st, 'item_cart', 'shopping_var_clear');
    (st as any).observ_exp = ((st as any).observ_exp ?? 0) + (5);
    (st as any).picrand = (Math.floor(Math.random() * 8) + 0);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/shared/shoplift/steal${((st as any).picrand ?? '')}.jpg`);
    scene.text('Standing in front of the make-up section of the supermarket, you nervously look over your shoulder to make sure none of the employees are able to spot you.');
    scene.text('Seeing no one, you casually reach out for the make-up you usually use and tuck it away…');
    scene.text('After looking around the cosmetic section for a while more, you decide it\'s time to make your escape.');
    scene.actions([
      { label: 'Leave the store', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/leave.jpg');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, just act normal…" you sigh quietly as you step towards ...
    scene.text(`"Okay ${((st as any).pcs_nickname ?? '')}, just act normal…" you sigh quietly as you step towards the exit, trying to not draw any attention towards yourself.`);
    scene.text('Don\'t panic…');
    scene.text('Walk casually…');
    scene.text('Almost there…');
    scene.text('Don\'t panic…');
    scene.text('Walk casually…');
    scene.text('Almost there…');
    scene.text('The exit of the supermarket comes closer and closer with every step, and you try to do whatever you can to control your nerves.');
    if ((Math.floor(Math.random() * 5) + 0) > 0  ||  ((st as any).pcs_observ ?? 0) + ((st as any).pcs_persuas ?? 0) > 150  ||  ((((st as any).pcs_observ ?? 0) + ((st as any).pcs_persuas ?? 0) > 50)  &&  (((st as any).hour ?? 0) === 12  ||  ((st as any).hour ?? 0) === 17))) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) + (50);
      scene.text('As you walk by the counters and leave the supermarket, you feel a rush of excitement. You\'re almost there now, feeling relieved as well as triumphant. You\'re going to make it for sure!');
      scene.text('You feel your hands trembling in your pockets, getting worse with every step. No matter what you do, you can\'t shake the feeling that someone must\'ve spotted you… surely they\'ve spotted you!');
      scene.text('You desperately try to calm yourself down as with every step you get closer to the exit. No one seems to be stopping you so far… maybe you got lucky?');
      scene.text('Before you know it, you\'re standing outside, having managed to get away with your loot. You turn back one last time to make sure that no one is following you.');
      scene.actions([
        { label: 'Keep on walking', goto: ['pav_commercial', ''] },
      ]);
    } else {
      if (((st as any).pcs_observ ?? 0) + ((st as any).pcs_persuas ?? 0) + ((st as any).pcs_run ?? 0) > 200) {
        scene.text('You feel your hands trembling in your pockets, getting worse with every step. No matter what you do, you can\'t shake the feeling that someone must\'ve spotted you… surely they\'ve spotted you!');
        scene.text('You desperately try to calm yourself down as with every step you get closer to the exit. No one seems to be stopping you so far… maybe you got lucky?');
        scene.text('You nervously look around, making sure there isn\'t anyone following you as you pass the counter. All of a sudden, you see a guard appear and walk towards you…');
        scene.actions([
          { label: 'Try to escape', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/running.jpg');
    scene.text('Realizing he\'s out after you and not wanting to get caught, you make a dash for it. You can\'t get caught for a small thing like this.');
    if (((st as any).pcs_run ?? 0) > 70) {
      (st as any).run_exp = ((st as any).run_exp ?? 0) + (5);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) + (50);
      scene.text('You keep running while the security guard follows close behind… You turn a corner and then quickly take another corner as you try to shake him off…');
      scene.text('The guard is not easily giving up, but after a few minutes, you\'ve managed to outrun him as you make your escape from the supermarket. You can hear the guard screaming behind you…');
      scene.actions([
        { label: 'Catch your breath', goto: ['pav_commercial', ''] },
      ]);
    } else {
      scene.text('You keep running while the security guard follows close behind… You turn a corner and then quickly take another corner as you try to shake him off…');
      scene.text('But the guard is not easily giving up, and as you turn the corner, you reach a dead-end. You quickly try to turn around and run another way but it\'s too late as you\'re tackled.');
      scene.text('Lying on the ground, the security guard quickly lifts you up and leads you toward the security room.');
      scene.actions([
        { label: 'Get lead to the security room', goto: ['shoplifting', 'securityroom_pav'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.text('You feel your hands trembling in your pockets, getting worse with every step. No matter what you do, you can\'t shake the feeling that someone must\'ve spotted you… surely they\'ve spotted you!');
        scene.text('You desperately try to calm yourself down as with every step you get closer to the exit. No one seems to be stopping you so far… maybe you got lucky?');
        scene.text('You pass by the counter, and seeing no one reacting, you relax for a bit and let down your guard. Just as you\'re about to leave through the entrance, you feel a hand grab you by the shoulder.');
        scene.text('You instantly turn around, seeing a security guard is holding you and dragging you back inside. Before you\'re even able to speak up, he is forcefully leading you back to his office.');
        scene.actions([
          { label: 'Get dragged into the back room', goto: ['shoplifting', 'securityroom_pav'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSecurityroomPav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_value'] = 1300;
  ((s as any).policeQW = (s as any).policeQW ?? {})['shoplift_caught'] = ((s as any).policeQW['shoplift_caught'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/caught.jpg');
  if (((s as any).policeQW ?? 0)?.['shoplift_caught'] === 1) {
    scene.text('"Where are you taking me?" you shout out, "I haven\'t done anything wrong!" You look around trying to catch someone\'s attention. People are staring at you in disgust and turning their heads.');
    scene.text('The security guard keeps quiet as he forcefully pushes you away from the supermarket. You go through a dark hallway and stop at a door, which he unlocks before pushing you inside.');
    scene.text('He orders you to take a seat on a basic chair, and you quietly comply…');
    scene.text('He sits down next to you and lets out a deep sigh, "You\'re Anya\'s little sister are you not?"');
    scene.text('You brighten a bit, maybe he has a crush on your sister, so you nod. "Yes I am."');
    scene.text('He frowns a bit. "Ok well I guess we all make mistakes. So I will let you off with just a warning this time, next time I am calling the cops. Got it?"');
    scene.text('You nod. "Yes, thank you. Don\'t you worry I won\'t do it again." With that he takes the cosmetics you stole off you and then lets you out of his office.');
    scene.actions([
      { label: 'Head outside', goto: ['pav_commercial', ''] },
    ]);
  } else {
    scene.text('"Where are you taking me?" you shout out, "I haven\'t done anything wrong!" You look around trying to catch someone\'s attention. People are staring at you in disgust and turning their heads.');
    scene.text('The security guard keeps quiet as he forcefully pushes you away from the supermarket. You go through a dark hallway and stop at a door, which he unlocks before pushing you inside.');
    scene.text('He orders you to take a seat on a basic chair, and you quietly comply…');
    scene.text('He sits down next to you and lets out a deep sigh, "I gave you a chance last time and here we are again. So you might as well admit it, we have you on tape. Either way I will be calling the police to have you arrested this time."');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Deny', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Deny', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('You defiantly tell him that he\'s grabbed the wrong person and that you have no idea what he\'s talking about.');
    scene.text('"Listen here, girl. We\'ve got you on tape as you shoplifted and I already let you off because your sister works here." he says.');
    scene.text('You know you\'ve been caught, but you keep on sticking to you story, "That could be whoever on that tape, how can you prove that\'s me?"');
    scene.text('The security guard chuckles, "Don\'t worry about that. I\'ll call the police and they can deal with you."');
    scene.text('"Wait!" you squeal, "We don\'t need to get them involved…"');
    scene.text('The security guard crosses his hands, "Why not?"');
    scene.actions([
      { label: 'Offer him blowjob', goto: ['shoplifting', 'bj_pav'] },
      { label: 'Offer a bribe', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'shoplifting', 'bribe_pav');
    }
  } },
      { label: 'Keep quiet', goto: ['shoplifting', 'quiet_pav'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Admit', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You hang your head in resignation, realizing there\'s no denying that you\'ve been caught. Your eyes tear up with crocodile tears as you try to come up with a way to get out of this, "I admit I\'ve stolen…"');
    scene.text('The guard clears his throat, "Well, that\'s a start… Now I just need to call the police and have them come pick you up."');
    scene.text('Pleadingly, you look at him, "Can\'t we work something out? Do you really have to call the police?"');
    scene.text('Looking at you, the security guard starts pondering, and after a short moment, he speaks up, "So what would you be able to offer me?"');
    scene.actions([
      { label: 'Offer him a blowjob', goto: ['shoplifting', 'bj_pav'] },
      { label: 'Offer a bribe', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'shoplifting', 'bribe_pav');
    }
  } },
      { label: 'Keep quiet', goto: ['shoplifting', 'quiet_pav'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjPav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/sex/bj/bj1.jpg');
  if (((s as any).policeQW ?? 0)?.['securitybj_pav'] === 0) {
    scene.text('"How about I give you a blowjob and you let me go?" you calmly suggest.');
    scene.text('The security guard is taken aback a little by your suggestion, but it doesn\'t take long before you notice a smirk on his face. "How about this, if you perform well enough, I\'ll let you go, otherwise I\'ll be calling the cops."');
    scene.text('Not having lot of choice, you look him in the eyes and nod.');
    scene.text('"Good! But before we begin I want a memento to remember you by," he adds as he pulls out his cellphone.');
  } else {
    scene.text('"How about I give you a blowjob again and you let me go?" you calmly suggest.');
    scene.text('The security guard is taken aback a little by your suggestion, but it doesn\'t take long before you notice a smirk on his face. "How about this, if you perform well enough, I\'ll let you go, otherwise I\'ll be calling the cops."');
    scene.text('Not having lot of choice, you look him in the eyes and nod.');
    scene.text('"Good! But before we begin I want a memento to remember you by," he adds as he pulls out his cellphone.');
  }
  ((s as any).policeQW = (s as any).policeQW ?? {})['securitybj_pav'] = ((s as any).policeQW['securitybj_pav'] ?? 0) + (1);
  // TODO-QSP: end
  scene.actions([
    { label: 'Take picture', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj2.jpg');
    scene.text('You happily stand up and smile as you can hear his cellphone camera snap.');
    scene.text('"This will do. I can\'t wait to show you off to my friends," he tells you.');
    scene.text('You can\'t do anything more than smile and nod as you need to play along so he lets you go.');
    scene.text('"That\'s enough, girl! Time to get to it. Remove your clothes, let me see your naked body!" he commands.');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj3.jpg');
    scene.text('You pleadingly look at him, but he turns his head around to avoid meeting your eyes. Seeing he won\'t budge, you slowly start taking off your clothes.');
    scene.text('The security guard\'s gaze turns to you again, and he carefully watches as you remove one cloth after another as you try to cover up your naked body.');
    scene.text('"Good job, girl! Look at your fine breasts. Don\'t be shy and cover yourself, the plan is to arouse me…" he smirks, "Now get on your knees."');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj4.jpg');
    scene.text('You get down on your knees and wait while he rubs his cock through his pants.');
    scene.text('After a short while, he unzips the pants and releases his cock. As it pops out, you let out a gasp, surprised by the massive size. "You\'re way bigger than I expected," you say as you observe his stiff cock.');
    scene.text('He lets out a laugh and jokes, "Are you sure that it will be able to fit in your mouth?"');
    scene.actions([
      { label: 'Play with his glans', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj5.jpg');
    scene.text('Triggered by his joke and wanting to show him up, you slowly move your lips near his cock and give his glans a little kiss. You can hear him let out a soft groan. He must be really sensitive.');
    scene.text('Feeling encouraged, you start moving your lips around his glans, letting out your tongue to tease his penis head.');
    scene.text('The security guard doesn\'t say anything and seems to be pleased by your performance…');
    scene.text('You look up at him and give him a little smile, biting your lip before moving your tongue up and down his shaft…');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj6.jpg');
    scene.text('Not wanting to tease him anymore, you wrap your lips around his glans and slowly let the head glide deeper inside your mouth. You didn\'t expect him to taste this good…');
    scene.text('The security guard didn\'t expect you to be this bold as you feel his whole body stiffen…');
    scene.text('After a few moments, you pick up the pace, and before you know it, you\'ve swallowed half his cock. You\'re totally engulfed and even manage to forget why you\'re sucking him off.');
    scene.text('It doesn\'t take long before his cock is twitching and he tells you to pull out before he cums…');
    scene.actions([
      { label: 'Tug his cock', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'hj', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj7.jpg');
    scene.text('Disappointed, you pull out and let out a loud mouth sound as you remove your lips from his cock.');
    scene.text('By now, the security guard is panting heavily, and you give him a minute to recover before you start tugging his cock.');
    scene.text('You grab his cock quite hard, and you start quickly stroking him up and down. You\'re enjoying yourself as you\'re in command and he\'s at your mercy.');
    scene.text('You notice a little pre-cum come out, and you feel this urge to slow down and tease him as you want to drag this out for as long as possible…');
    scene.actions([
      { label: 'Let him cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'breasts', 'Security guard');
    (st as any).spafinloc = 15;
    qspCall(st, 'arousal', 'hj', 2, 'dom');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj8.jpg');
    scene.text('"Don\'t you dare slowing down!" he manages to yell out just as you start to…');
    scene.text('Surprised by his reaction, you quickly pick up the pace, and as your hand moves up and down his cock, it stops twitching and gets really stiff. After two more tugs, he shoots all over your chest area…');
    scene.text('As you look down, you notice you\'re covered in his thick cum… You give his cock a few more tugs to get it all out and then let go of it as it continues to twitch.');
    scene.text('"Get cleaned up, and I\'ll be back soon!" he tells you as he zips his pants and leaves the office…');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).cumspclnt = 16;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/city/shared/shoplift/sex/bj/bj9.jpg');
    scene.text('You clean yourself up and get dressed as soon you hear the door close. There\'s nothing more to do than patiently sit and wait for the security guard to return.');
    scene.text('You closely pay attention to every little sound happening outside the office, hoping that he\'ll return soon and let you go. All of a sudden you hear footsteps and someone opening the door…');
    scene.text('The door opens, and thankfully, there\'s only the security guard standing there holding a video cassette in his hand. "Sorry for the wait, it took me a while to get hold of the cassette."');
    scene.text('Your face brightens as you know that he went through all sorts of trouble to leave no trace behind that you\'ve ever been here.');
    scene.text('"Here take the tape and destroy it," he states, "Be gone now before anyone spots you and we both get in trouble."');
    scene.text('You nod and hurriedly jump away from the chair, grabbing the tape as you walk by the security guard…');
    scene.actions([
      { label: 'Head outside', goto: ['pav_commercial', ''] },
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

function enterBribePav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/offermoney.jpg');
  scene.text('You look the security guard straight in the eyes, "I can offer you money if you let me go."');
  scene.text('The security guard begins to chuckle, "You? Offer me money? Don\'t be silly girl, you can\'t possibly bribe me… Where would you have the money for that…"');
  scene.text('You pout a little as you listen to him, "Just tell me how much you want, and I\'ll pay you off…" As you finish, you give him a little wink.');
  scene.text('"If you can afford the stuff, why did you steal?" he remarks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Explain', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/shoplift/offermoney.jpg');
    scene.text('"You want my honest answer?" you look at him, a serious expression on your face, "Simply put, because I can and the adrenaline kick is amazing!"');
    scene.text('The security guard smirks, "So you\'re only doing it for the fun of it?"');
    scene.text('Looking pleased, you give him a satisfied nod.');
    // TODO-QSP: dynamic text: All of a sudden, he changes his posture, "I don''t usually do this, but if you g...
    scene.text('All of a sudden, he changes his posture, "I don\'t usually do this, but if you give me 5000₽, then we\'re all good."');
    scene.text('"And if I don\'t?" you curiously inquire.');
    scene.text('"You\'ll have to face the consequences then…" he shortly replies.');
    scene.actions([
      { label: 'Pay up', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'money', 'pay', 5000, 'cash');
      qspCall(st, 'stat', '');
      scene.img('images/locations/city/shared/shoplift/offermoney.jpg');
      scene.text('You burst out in laughter, "Fine, fine. I\'ll pay up don\'t worry… Relax, I was only joking around with you."');
      scene.text('"Sure, sure… Hurry up now, show me the money before anyone shows up…" he hurries you on.');
      scene.text('You keep on laughing as you hand over the money to him.');
      scene.text('He quickly counts the money and then has you stand up and hurries you outside the office, pushing you on. He tells you which way to take and not to talk to anyone.');
      scene.text('You give him a smile and thank him for being so nice to you… You turn around one last time to tease him before turning the corner.');
      scene.actions([
        { label: 'Walk out', goto: ['pav_commercial', ''] },
      ]);
    }
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/arrested.jpg');
    scene.text('You shake your head, "I\'m not interested in paying you off. Do your worst…" you challenge him.');
    scene.text('His face turns red with anger as he turns away from you and walks out of the office…');
    scene.text('Some minutes pass while you patiently wait for him to return. You closely pay attention to every little sound happening outside the office. All of a sudden, you hear footsteps and someone opening the door…');
    scene.text('To your dismay, you see the security guard has returned with a police officer in tow. "There she is officer. This girl was stealing from the supermarket. We\'ve got evidence and everything," the guard states, clearly irritated by your arrogance.');
    scene.text('The officer sighs and determinedly walks over to you, "Turn around girl, I need to cuff you…"');
    scene.text('Without uttering a word, you turn around and let the officer cuff you. The cuffs are sitting tight, but you refuse to give the security guard the smallest satisfaction by letting him know that.');
    scene.text('The police officer chats with the security guard before leading you away to the police station…');
    scene.actions([
      { label: 'Go to the police station', goto: ['pav_station', 'entrance', 'shplft'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQuietPav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/shoplift/quiet.jpg');
  scene.text('All of a sudden you hesitate. Why should you offer him anything? You might as well keep quiet as the end result will still be the same.');
  scene.text('"Well girl, don\'t test my patience, I don\'t have all the day. Tell me now what do you have to offer."');
  scene.text('You give him a look full of disgust. You\'re going to see this through, no matter the consequences.');
  scene.text('"Well? Why did you go all quiet all of a sudden?" he demands. Then he walks out of the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Offer him blowjob', goto: ['shoplifting', 'bj_pav'] },
    { label: 'Offer a bribe', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'shoplifting', 'bribe_pav');
    }
  } },
    { label: 'Wait', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/arrested.jpg');
    scene.text('Some minutes pass while you patiently wait for him to return. You closely pay attention to every little sound happening outside the office. All of a sudden, you hear footsteps and someone opening the door…');
    scene.text('To your dismay, you see the security guard has returned with a police officer in tow. "There she is officer. This girl was stealing from the supermarket. We\'ve got evidence and everything," the guard states, clearly irritated by your arrogance.');
    scene.text('The officer sighs and determinedly walks over to you, "Turn around girl, I need to cuff you…"');
    scene.text('Without uttering a word, you turn around and let the officer cuff you. The cuffs are sitting tight, but you refuse to give the security guard the smallest satisfaction by letting him know that.');
    scene.text('The police officer chats with the security guard before leading you away to the police station…');
    scene.actions([
      { label: 'Go to the police station', goto: ['pav_station', 'entrance', 'shplft'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'city':
      enterCity(s, scene);
      break;
    case 'securityroom':
      enterSecurityroom(s, scene);
      break;
    case 'show':
      enterShow(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'bribe':
      enterBribe(s, scene);
      break;
    case 'quiet':
      enterQuiet(s, scene);
      break;
    case 'punish':
      enterPunish(s, scene);
      break;
    case 'pav':
      enterPav(s, scene);
      break;
    case 'securityroom_pav':
      enterSecurityroomPav(s, scene);
      break;
    case 'bj_pav':
      enterBjPav(s, scene);
      break;
    case 'bribe_pav':
      enterBribePav(s, scene);
      break;
    case 'quiet_pav':
      enterQuietPav(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shoplifting: LocationDef = {
  name: 'shoplifting',
  title: '"Where are you taking me?" you shout out, "I haven\'t done an',
  region: 'other',
  enter: enter,
};
