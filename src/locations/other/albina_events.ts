import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAlbinaJoggingPav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (!(s as any).socialchg) (s as any).socialchg = {}; (s as any).socialchg['tAlbina_jog'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/event/park_jogging.jpg');
  scene.text('You walk over and greet her with a smile. "Hey Albina!"');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  (((s as any).grupTipe ?? 0) === 3  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 70)  ||  ((((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 60)) {
    // TODO-QSP: dynamic text: She glances up at you and smiles before returning her attention to her shoelace,...
    scene.text(`She glances up at you and smiles before returning her attention to her shoelace, re-tying it before standing up and stretching. "Hey ${((s as any).pcs_nickname || '')}. Out and about enjoying yourself?"`);
    scene.text('"You could say that," you reply with a smile.');
    scene.text('"Well make the most of it. Now I\'d love to stay and chat, but I have a few more laps to do. I\'ll catch you later, yeah?"');
    scene.text('You nod and she gives you a parting smile before jogging away.');
  } else {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('She glares up at you. "Ugh, it\'s <i>you</i>…" she scorns. "Go bother someone else."');
      scene.text('"What\'s your fucking problem, bitch? I just wanted to talk," you bite back.');
      scene.text('"I <i>was</i> setting a good lap time, but here I am wasting time talking to a fucking junkie!"');
      scene.text('Not waiting for your reply, she pushes past you and continues her jog, leaving you behind to curse her under your breath.');
    } else {
      scene.text('She glances up at you before she finishes fixing her shoelace and stands up.');
      scene.text('"I don\'t have time to chat. I need to finish my run."');
      scene.text('She then jogs away without another word, leaving you behind.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the park', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterStudyDoor(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/doors.jpg');
  scene.text('As you make your way up the stairs, you take note of the double doors down the hallway. Albina got rather agitated and told you to leave it alone when you first mentioned it to her. She said the room was locked for a reason and under no circumstances would she ever open it.');
  // TODO-QSP: dynamic text: At this point, the maid walks out of the room and neglects to close the door bef...
  scene.text(`At this point, the maid walks out of the room and neglects to close the door before heading down the hall, smiling at you as she walks past. "Hello, Miss ${((s as any).pcs_firstname || '')}."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Investigate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/study.jpg');
    scene.text('Your curiosity gets the better of you and you quietly make your way down the hall. Peeking through the door, the room appears to be some kind of study.');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    scene.text('Your curiosity again gets the better of you and, after some brief hesitation, you quickly duck into the room.');
    scene.text('You find yourself in a modern, lavishly decorated study. You take a quick look around, but find nothing of any real interest to you. This was clearly her father\'s study. No wonder Albina hates coming in here.');
    scene.text('Just as you\'re about to leave, you see something sticking out from behind the large painting on the wall behind the desk. Taking a closer look, you find a small flash drive taped to the wall.');
    scene.text('You reach in and pull it out before pocketing it, curious about why someone would hide it. You just need a computer to access it.');
    scene.text('With nothing else to see, you quickly duck back out of the study, being careful to leave the door in its original ajar position before heading to Albina\'s bedroom.');
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['flashdrive'] = 1;
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'Leave it alone', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/doors.jpg');
    scene.text('You decide not to overstep your bounds as a guest and back away from the door. It would be difficult explaining yourself if you were caught snooping inside. You quickly make your way to Albina\'s room before the maid returns.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['studylock'] = 1;
  }, goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFlashDrive(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/items/accessories/computer/komp.jpg');
  scene.text('You plug the flash drive into your computer and find that it contains a single folder titled "Blackmail material". When you open it, you\'re presented with a series of videos and a note which reads "To be used if any \'associates\' get out of line."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the first video', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/laptop/video1.mp4');
    scene.text('You click the first video and watch as a girl in a maid outfit is fucked from behind. You recognise the man\'s voice. It\'s Albina\'s father fucking a girl who barely looks older than you, but sounds like she\'s enjoying herself and is really getting into it.');
    scene.text('"Now I remember why I hired you. You\'re a cock hungry little whore who loves pleasing her master with her tight hole!"');
    scene.text('The girl moans and giggles. "I serve only to please you, sir! Fuck my pussy as you please!"');
    scene.text('This must be the old maid Albina told you about, the one her father was fucking.');
    scene.text('An attached note reads: "Leak this to her social media if the little slut gets ideas above her station."');
    scene.actions([
      { label: 'Watch the second video', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/laptop/video2.mp4');
    scene.text('You open the second video and are presented with a surprising view. Albina, wearing her school uniform, tied up with a paddle in her mouth as a large man roughly fucks her while verbally and physically abusing her.');
    if (((s as any).AlbinaQW ?? 0)?.['client1'] === 1) {
      scene.text('You quickly recognise the man. He\'s the fat Armenian you were sold to as a Starlet. He quickly grunts and groans as he cums inside Albina, who looks to the side and avoids eye contact with him.');
    } else {
      scene.text('You don\'t recognise the man, but it\'s clear that Albina isn\'t a willing participant in this depraved sex scene. He quickly grunts and groans as he cums inside her, and she looks to the side and avoids eye contact with him.');
    }
    scene.text('Satisfied, he pulls out and grabs Albina by the neck before roughly slapping her across the face, his handprint visible on her cheek.');
    scene.text('Albina lets out a muffled cry and whimpers as his cum slowly trickles out of her pussy.');
    scene.text('An attached note reads: "M. is a well known sex fiend back home, so no useful blackmail material here. Useful as a reminder for my stupid daughter when she acts out of line though."');
    scene.actions([
      { label: 'Watch the third video', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/laptop/video3.mp4');
    scene.text('The third video opens with Albina standing in her bedroom in her school uniform. You hear her whimper slightly as the door opens and loudly slams before a figure grabs her and forces her over his knee.');
    scene.text('He flips her skirt up and delivers a series of stinging smacks to her exposed ass, but other than a few grunts, Albina takes it without complaint, which seems to annoy the man. By now, you\'ve identified him as her father, who grabs her hair and roughly pulls her head back as he gives her now bright red ass another hard smack.');
    scene.text('Albina yelps as strands of her hair visibly snap and she finally breaks. "I\'m sorry, daddy! I\'m sorry! I\'ll be a good girl from now on!"');
    scene.text('He smiles. "Good. Don\'t you <i>dare</i> embarrass me in front of my associates like that again, else you\'ll get the usual punishment again!"');
    scene.text('He throws Albina off of his knee and leaves the room. Albina sits on her bed quietly sobbing before glaring at the door with fire in her eyes.');
    scene.text('An attached note reads: "Keep this as a reminder for my stupid daughter when she feels brave enough to act out of line again."');
    scene.actions([
      { label: 'Watch the fourth video', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/laptop/video4.mp4');
    scene.text('You open the fourth video and immediately notice that it was taken from a hidden camera in the study where you found the flash drive. Albina is on her knees wearing only a crop top that\'s been pulled up to expose her breasts, looking at the floor and avoiding eye contact with the naked man in front of her. The man grabs a fistful of her hair and pulls her head up to slap her face.');
    scene.text('"Look at me when I\'m talking to you, bitch!" he snarls and you hear Albina holding in her sobs before the man slaps his erect cock against her face before shoving it into her mouth. "That\'s better. Now be a good little whore and suck my dick!"');
    scene.text('Still holding her by her hair, he starts forcing her head up and down on his cock, not caring as she gags and splutters before he forces her to deepthroat him. This continues for a few more minutes before he finally lets her go and she gasps loudly for air as drool drips from her mouth. She then kicks and screams in protest as the mysterious man grabs her tightly by the wrist and roughly drags her out of sight before the video cuts off.');
    scene.text('An attached note reads: "Local business owner. Paying a fair amount for this video to never be seen by his wife. Might leak it anyway to watch him squirm."');
    scene.actions([
      { label: 'Watch the fifth video', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/laptop/video5.mp4');
    scene.text('You open the fifth video and see a middle aged man relaxing on a bed as Albina rides him. She clearly isn\'t enjoying it and constantly looks to the hidden camera in distress.');
    scene.text('"I thought you were cute the moment I saw you and all I had to do to fuck you was \'donate\' to my rival\'s election campaign! Best money I\'ve ever spent!" he smugly grins.');
    scene.text('Albina just whimpers and you see tears welling up in her eyes as she\'s forced to keep going.');
    scene.text('An attached note reads: "Mayoral rival\'s campaign manager. Dirty bastard couldn\'t resist the bait. Paying a handsome sum to keep this out of the public eye. Might leak once I\'m elected."');
    scene.actions([
      { label: 'Watch the last video', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/laptop/video6.mp4');
    scene.text('You open the last video and immediately see Albina lying on a bed as a man records himself ejaculating on her face before slapping his spent cock against her lips. She looks almost docile, as if she\'s been… drugged?');
    scene.text('"It felt good putting you in your place, bitch," the man says in a muffled voice, as if he were covering his face with something to hide his identity. You watch as he scrawls "WHORE" across Albina\'s forehead with a marker pen. "I saw how much you enjoyed taking my cock in your dirty little hole, begging for more even in that drugged state."');
    scene.text('He then takes a picture of Albina. "A worthless slut like you will never amount to anything more than a common street whore spreading her legs to pay for her next fix. Remember that when you\'re failing at school."');
    scene.text('Something about the man\'s voice and what he\'s saying sparks your curiosity. You listen to it over and over again before… Is that Mr. Ivanov?! You can\'t be entirely certain, but the man in the video does sound similar to him.');
    scene.text('You shudder at the thought as you watch Albina stir and whimper on the bed. She looks up at him, but doesn\'t seem to know who the man is in her drugged state.');
    scene.text('"Shit! The sedative wasn\'t supposed to wear off that fast!" you hear him say in a panic before the video suddenly cuts off.');
    scene.text('An attached note reads: "Arrogant fool thought he could hide behind that stupid mask and use this as blackmail. Scared of his boss seeing this, so use it to keep him in check."');
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['flashdrive'] = 2;
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['albina_ivanov'] = 1;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('Horrified at what you just watched, you quickly close the video and delete the flash drive\'s contents before throwing it out the window as hard as you can.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] === 0) {
      scene.text('Is that the kind of sick torture Albina had to go through to protect you from those vile men? You can\'t help but feel guilty, but decide to keep this to yourself. You know Albina feels extremely guilty about what she was forced to do and mentioning this to her will do more harm than good.');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] === 0) {
        scene.text('Is that the kind of sick torture Albina had to go through every time you refused to go with those men? You can\'t help but feel guilty and ashamed, but decide to keep this to yourself. You know Albina feels extremely guilty about what she was forced to do and mentioning this to her will do more harm than good.');
      } else {
        scene.text('Your own experiences with these men were horrifying, but seeing what Albina suffered at the hands of these brutes to protect you and your fellow dancers from them makes you feel sick. You decide to keep this to yourself. Despite forgiving her, you know Albina feels extremely guilty about what she was forced to do and mentioning this to her will do more harm than good.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('Disturbed by what you watched, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('A little disturbed by what you watched, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('A little disturbed by what you watched, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('Feeling alarmed, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('Feeling alarmed, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSchoolPhoto(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('You approach Albina and are about to greet her when she smiles and starts pulling you down the hall. "Do you have your camera on you?"');
  scene.text('"Yeah. Why?" you ask.');
  scene.text('"You\'ll see," she replies as you stop outside one of the classrooms. It\'s Mrs. Sokoloff\'s. "Ha! This will be great!"');
  scene.text('She opens the door and quickly drags you inside before closing and locking it behind you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'What\'s going on?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/school1.jpg');
    scene.text('"Albina?" you ask while watching her sit on the teacher\'s desk. "What\'s going on?"');
    scene.text('She smiles. "I had fun when we done that photoshoot by my pool and wanted to do it again."');
    scene.text('"Here?" you reply. "What if someone sees us?"');
    scene.text('"That\'s why I locked the door. Now are we doing this or not?" she asks while lifting her skirt slightly, giving you a teasing view of her thong-clad ass.');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['school_photo'] = (-1);
    qspCall(s, 'stat', '');
    scene.text('You shake your head. Sorry, but I don\'t think this is a good idea."');
    scene.text('She pouts. "Are you sure? This is a one time only deal!"');
    scene.text('You nod. "Yes, I\'m sure. I don\'t want to get caught doing this by Mrs. Sokoloff of all people!"');
    scene.text('She climbs off the desk and smooths her skirt out. "Okay then. Let\'s head back."');
    scene.text('She unlocks the door and walks out without saying another word. You follow close behind.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['school_photo'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/school2.jpg');
    scene.text('You look around before nodding your head. "Okay, but let\'s make it quick. I don\'t want to get caught by Mrs. Sokoloff of all people!"');
    scene.text('She smiles as she gets up on her knees and flips her skirt up to show off her ass as she gazes at you. "Well? Let\'s get started then!"');
    scene.text('You grin as you quickly pull your camera out of your bag and start snapping photos. She seems to really be into it this time.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/school3.jpg');
    scene.text('After a few minutes, she climbs off the desk and removes her shirt, revealing her black lacy bra.');
    scene.text('"Was this just an excuse to show me your sexy underwear?" you smirk.');
    scene.text('She only offers you a smile as she pulls one of the straps down before lifting her skirt.');
    scene.text('"Nice," you say with a grin. "I like the sexy teasing look you\'re going for here."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/school4.jpg');
    scene.text('You spend a few minutes photographing Albina from various angles before you decide to move on.');
    scene.text('"Lose the bra and turn around. Show off that nice ass a little," you order and she smiles.');
    scene.text('"I see you\'re enjoying this as much as I am," she says as she removes her bra and turns around.');
    scene.text('"Like this?" she asks as she pulls her thong down, exposing her naked ass.');
    scene.text('You just smile before you start snapping photos, moving around to shoot her from various angles.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/school5.jpg');
    scene.text('"Keep your panties pulled down, but put your tie back on," you order. "Then sit back up on the desk for me."');
    scene.text('She smiles as she does what you tell her before climbing up on the desk, the sight of naked body arousing you slightly.');
    // TODO-QSP: dynamic text: "Like what you see, <<$pcs_nickname>>?" she asks teasingly as you once again mov...
    scene.text(`"Like what you see, ${((s as any).pcs_nickname || '')}?" she asks teasingly as you once again move around to shoot her from various angles.`);
    scene.text('You just smile. There\'s a risque pose she could do to finish the shoot, but you\'re not sure if she would agree to it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', (-1));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/photo/school6.jpg');
    scene.text('You\'re about to ask before she suddenly lies back on the desk and pulls her legs up, giving you a view of both her pussy and her asshole.');
    scene.text('"Is this what you were looking for?" she grins as she firmly grips her ass with her hands.');
    scene.text('Surprised at her eagerness, you take a few seconds to compose yourself before you start snapping photos.');
    scene.text('Albina seems to enjoy herself, the smile never leaving her lips as you finish your little photoshoot.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('You look through the pictures you\'ve taken as Albina slides off the desk and starts pulling her clothes back on.');
    // TODO-QSP: dynamic text: "That was fun, <<$pcs_nickname>>. Have you ever considered becoming a profession...
    scene.text(`"That was fun, ${((s as any).pcs_nickname || '')}. Have you ever considered becoming a professional model photographer?" she asks.`);
    scene.text('You shrug your shoulders. "Maybe. I would need a lot of practice before I could ever consider that a career option!"');
    scene.text('She adjusts her tie and smooths out her skirt. "Well, that\'s why you have me to practice on. Come on. Let\'s get out of here before the old bat turns up."');
    scene.text('You giggle and place your camera back in your bag before following her out of the classroom.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
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
  scene.img('images/characters/pavlovsk/school/girl/albina/event/walk_of_shame1.jpg');
  scene.text('Curious, you decide to follow her down the alleyway. However, you lose sight of her as you enter what turns out to be some fenced off waste ground. Where did she go?');
  if (((s as any).npc_rel ?? 0)?.['A23'] < 60) {
    scene.text('"Stop following me, you creep!"');
    scene.text('You whip your head around and see Albina strutting over to you in her tight fitting black dress.');
    scene.text('"What?" you reply. "I wasn\'t following you!"');
    scene.text('"Don\'t lie," she scoffs. "I saw you out on the street and only came this way to see if you would follow me."');
    scene.text('She roughly barges past you. "You did, so I\'m telling you this now. Stop being a nosey cunt and mind your own fucking business!"');
    scene.text('She walks back out to the main street and you follow after her a few seconds later.');
    scene.actions([
      { label: 'Continue', goto: ['pav_residential', ''] },
    ]);
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['know_walk_of_shame'] > 0) {
      // TODO-QSP: dynamic text: "Are you following me again, <<$pcs_nickname>>?"
      scene.text(`"Are you following me again, ${((s as any).pcs_nickname || '')}?"`);
      scene.text('You turn and smile. "Guilty as charged!"');
      scene.text('"Yes, I\'m coming from Lazar\'s place after spending the night with him again and yes, he pounded the shit out of me and I can barely walk. Now if you\'ll excuse me, I\'m in desperate need of a nice hot bath!"');
      scene.text('She walks back out to the main street without another word. You follow after her a few seconds later.');
      if (((s as any).AlbinaQW ?? 0)?.['know_walk_of_shame'] === 1) {
        if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_walk_of_shame'] = 2;
      }
      scene.actions([
        { label: 'Continue', goto: ['pav_residential', ''] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Are you following me, <<$pcs_nickname>>?"
      scene.text(`"Are you following me, ${((s as any).pcs_nickname || '')}?"`);
      scene.text('You whip your head around and see Albina strutting over to you in her tight fitting black dress.');
      scene.text('"I didn\'t expect to see you here was all," you reply.');
      if (((s as any).AlbinaQW ?? 0)?.['Friends'] !== 2) {
        // TODO-QSP: dynamic text: She shakes her head. "I like you, <<$pcs_nickname>>, but stop being nosey and mi...
        scene.text(`She shakes her head. "I like you, ${((s as any).pcs_nickname || '')}, but stop being nosey and mind your own business!"`);
        scene.text('She walks back out to the main street without another word. You follow after her a few seconds later.');
        scene.actions([
          { label: 'Continue', goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.text('"If you must know, I\'m heading home after spending the night <i>not</i> at home. This is the walk of shame as they call it."');
        scene.text('"You hooked up with someone last night?" you ask.');
        scene.text('She grins. "I was <i>so fucking horny</i> last night, so I talked Lazar into taking me home after the disco. An amazing end to the night, and even better start to the morning…"');
        scene.text('"Oh my god, you had wake up sex with him as well?" you gasp. "You slut!"');
        scene.text('"It\'s not I planned it!" she protests. "He <i>loves</i> how great my ass looks in this dress."');
        scene.actions([
          { label: 'I\'ll take your word for it', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_walk_of_shame'] = 1;
    scene.text('"I\'ll take your word for it, but I know you jumped at the chance to jump on his dick!"');
    // TODO-QSP: dynamic text: "<i>Funny</i>…" she replies as she rolls her eyes. "I need to get going. My feet...
    scene.text(`"<i>Funny</i>…" she replies as she rolls her eyes. "I need to get going. My feet are killing in these heels! See you later, ${((s as any).pcs_nickname || '')}."`);
    scene.text('She walks back out to the main street without another word. You follow after her a few seconds later.');
    scene.actions([
      { label: 'Continue', goto: ['pav_residential', ''] },
    ]);
  } },
          { label: 'Show me', handler: (st: GameState) => {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_walk_of_shame'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/albina/event/walk_of_shame2.jpg');
    scene.text('"How great are we talking?" you grin.');
    scene.text('She looks around to make sure nobody is looking before she smiles. "I\'ll show you…"');
    scene.text('She walks over to the nearby fence and wiggles her ass as she leans against it.');
    scene.text('"He had me up against the bedroom door like this as he pounded my ass," she says as she pulls her dress up and shows off her naked ass.');
    scene.text('"Did you lose your panties this morning as well?" you laugh.');
    scene.text('"No, I lost them last night," she grins. "I might have let him snap them off in the heat of the moment…"');
    scene.text('"Slut!" you grin and she smirks back.');
    // TODO-QSP: dynamic text: "You're just jealous that I got a good dicking last night," she says as she pull...
    scene.text(`"You're just jealous that I got a good dicking last night," she says as she pulls her dress back down. "Anyway, I need to get going. My feet are killing in these heels! See you later, ${((s as any).pcs_nickname || '')}."`);
    scene.text('She walks back out to the main street without another word. You follow after her a few seconds later.');
    scene.actions([
      { label: 'Continue', goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaJoggingUni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('You wave in Albina\'s direction as she approaches you.');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
    // TODO-QSP: dynamic text: She smiles and pulls her earbuds out. "Hey <<$pcs_nickname>>. Out and about enjo...
    scene.text(`She smiles and pulls her earbuds out. "Hey ${((s as any).pcs_nickname || '')}. Out and about enjoying yourself?"`);
    scene.text('"You could say that," you reply with a smile.');
    scene.text('"Well make the most of it. Now I\'d love to stay and chat, but I have a few more laps to do. I\'ll catch you later, yeah?"');
    scene.text('You nod and she gives you a parting smile before putting her earbuds back in and jogging away.');
  } else {
    scene.text('She just glances at you. "I don\'t have time to chat. I need to finish my run."');
    scene.text('She then jogs away without another word, leaving you behind.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the quad', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterFirstInClassMeet(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['meet_uni_class'] = 1;
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_albina_uni'] = 1;
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  if (((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg') {
    // TODO-QSP: dynamic text: As you walk into the lecture hall, a slender, yet well toned brunette walks up t...
    scene.text(`As you walk into the lecture hall, a slender, yet well toned brunette walks up to you. "${((s as any).pcs_nickname || '')}? I didn't know you wanted to become a nurse!"`);
    scene.text('"Oh, uh. I thought it would make for an interesting career," you reply while trying to remember who this girl is.');
    scene.text('"Okay. See you around then," she says before turning to find a seat.');
    // TODO-QSP: dynamic text: You check out her ass before quickly taking a seat and flipping through the page...
    scene.text(`You check out her ass before quickly taking a seat and flipping through the pages of the journal that Tatiana gave you. You find that the girl is called Albina and that she's a former classmate of the original ${((s as any).pcs_firstname || '')}.`);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
      if (((s as any).npc_rel ?? 0)?.['A23'] >= 70  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
        scene.text('As you enter the lecture hall, you hear a voice behind you. "Blowjobs aren\'t a recognised form of medical treatment you know, even if the patient enjoys it." You turn round and see your old classmate Albina grinning at you.');
        scene.text('"It\'s going to get awfully boring if all I do is study for five years," you shrug. "There\'s a ton of good looking boys here. I think I\'ll have plenty of ways to have fun."');
        scene.text('"A slut never changes her stripes. Just be careful, okay?" she says before finding a place to sit.');
      } else {
        scene.text('As you look around, you see your former classmate Albina. She gives you a look of disgust before turning away from you.');
      }
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
        // TODO-QSP: dynamic text: As you enter the lecture hall, you hear a voice behind you. "<<$pcs_nickname>>!"...
        scene.text(`As you enter the lecture hall, you hear a voice behind you. "${((s as any).pcs_nickname || '')}!" You turn and see Albina running up to embrace you in a tight hug. "Having you here is going to make everything so much better!"`);
        scene.text('You return the hug. "It\'s good to see you too, Albina."');
        // TODO-QSP: dynamic text: She lets you go. "Did you know Lariska and Vicky are on this course as well?" Sh...
        scene.text(`She lets you go. "Did you know Lariska and Vicky are on this course as well?" She points the two girls out before going off to find a place to sit. "I look forward to seeing you around, ${((s as any).pcs_nickname || '')}."`);
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
            scene.text('As you enter the lecture hall, you hear a voice behind you. "I should\'ve guessed that I would see you here."');
            scene.text('When you turn round, you see your former classmate Albina standing there.');
            scene.text('"Was it really a surprise?" you reply with a smile.');
            scene.text('"No, not really, but it\'s nice to have somebody else I know in the class. Did you know Lariska and Vicky are on this course as well?"');
            scene.text('She points the two girls out before going off to find a place to sit.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
              scene.text('You recognize Albina in the crowd and decide to approach her. "Hey Albina!"');
              scene.text('"Oh. It\'s <i>you</i>…" she replies, not looking particularly happy. "Dealing with you is the last thing I want right now," she says before walking away to find a place to sit.');
            } else {
              // TODO-QSP: dynamic text: As you enter the lecture hall, you hear a voice behind you. "Hey <<$pcs_nickname...
              scene.text(`As you enter the lecture hall, you hear a voice behind you. "Hey ${((s as any).pcs_nickname || '')}. I didn't know you were interested in nursing."`);
              scene.text('When you turn round, you see your former classmate Albina standing there.');
              scene.text('"I didn\'t think you were either," you reply.');
              scene.text('"It\'s nice to have people I already know in the class. Did you know Lariska and Vicky on this course as well?"');
              scene.text('She points the two girls out before going off to find a place to sit.');
            }
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
            // TODO-QSP: dynamic text: As you enter the lecture hall, you hear a voice behind you. "<<$pcs_nickname>>? ...
            scene.text(`As you enter the lecture hall, you hear a voice behind you. "${((s as any).pcs_nickname || '')}? I didn't know you were on this course." When you turn round, you see your former classmate Albina.`);
            scene.text('"Well, surprise!" you reply.');
            scene.text('"It\'s nice to have people I know in the class. Did you know Lariska and Vicky are on this course as well?" She points the two girls out before going off to find a place to sit.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
              scene.text('You recognize Albina in the crowd and decide to approach her. "Hey Albina!"');
              scene.text('"Oh. It\'s <i>you</i>…" she replies, not looking particularly happy. "Dealing with you is the last thing I want right now," she says before walking away to find a place to sit.');
            } else {
              // TODO-QSP: dynamic text: As you enter the lecture hall, you hear a voice behind you. "Hey <<$pcs_nickname...
              scene.text(`As you enter the lecture hall, you hear a voice behind you. "Hey ${((s as any).pcs_nickname || '')}. I didn't know you were interested in nursing." When you turn round, you see your former classmate Albina standing there.`);
              scene.text('"And why is that?" you reply.');
              scene.text('"Oh, no reason. It\'s just nice to have people I already know in the class. Did you know Lariska and Vicky are on this course as well?" She points the two girls out before going off to find a place to sit.');
            }
          }
        }
      }
      scene.actions([
        { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFloorEightSex(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 4) + 0))) {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/albina_bj.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
      scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a white girl kneeling on a sofa next to \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'a black guy\')+\', gagging loudly as she sucks on his monstrous dick, trying to take as much of it into her mouth as she can. She lets out a muffled moan when he roughly spanks her ass.');
      scene.text('"You white girls sure love sucking black cock!" he moans as he gropes and paws at her ass.');
      scene.text('She then suddenly pulls herself up so only the tip is still in her mouth and glances over at the door. Shit. Did she hear you?!');
      scene.text('You quickly close the door before you\'re caught. That girl was very pretty, and you can\'t help but feel like you should recognize her face. Maybe you\'ve seen her somewhere before?');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 0) {
        if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_ermias_sex'] = 1;
        // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
        scene.text('You turn the handle and gently push the door open just wide enough to look inside and are shocked to see Albina kneeling on a sofa next to \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'a black guy\')+\', gagging loudly as she sucks on his monstrous dick, trying to take as much of it into her mouth as she can. She lets out a muffled moan when he roughly spanks her ass.');
        scene.text('"You white girls sure love sucking black cock!" he moans as he gropes and paws at her ass.');
        scene.text('She then suddenly pulls herself up so only the tip is still in her mouth and glances over at the door. Shit. Did she hear you?!');
        scene.text('You quickly close the door before you\'re caught. You wonder if you should even mention this to Albina…');
      } else {
        // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
        scene.text('You turn the handle and gently push the door open just wide enough to look inside and see Albina sucking on \'+iif((AlbinaQW[\'know_ermias_sex\'] = 2 or ErmiasQW[\'meet\'] = 1), \'Ermias\'s\', \'the same black guy as last time\'s\')+\' monstrous dick, causing her to gag as drool drips from her mouth.');
        scene.text('"You might be the best dick sucker in the whole dorm!" he grunts as he gropes and paws at her ass.');
        scene.text('She suddenly glances in your direction, so you quickly close the door before you\'re caught, although not without sneaking a last, somewhat jealous glance at the massive, drool covered cock in front of you.');
      }
    }
  } else {
    if ((Math.floor(Math.random() * 4) + 0) === 1) {
      scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/albina_vag.jpg');
      if (((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
        // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
        scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a white girl and \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'a black guy\')+\' on a sofa, the girl moaning loudly as she rides his monstrous dick while he roughly spanks and squeezes her ass.');
        scene.text('"You like getting your little white pussy fucked by a big black cock?" he grunts. "Ride it, slut!"');
        scene.text('The girl cries out in pleasure and starts begging him to fuck her even harder, so you quickly close the door before you\'re caught.');
        scene.text('That girl was very pretty, and you can\'t help but feel like you should recognize her face. Maybe you\'ve seen her somewhere before?');
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 0) {
          if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_ermias_sex'] = 1;
          // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
          scene.text('You turn the handle and gently push the door open just wide enough to look inside and are shocked to see Albina and \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'a black guy\')+\' on a sofa, Albina moaning loudly as she rides his monstrous dick and he roughly spanks and squeezes her ass.');
          scene.text('"You like getting your little white pussy fucked by a big black cock, slut?" he grunts.');
          scene.text('She cries out in pleasure and starts begging him to fuck her even harder, so you quickly close the door before you\'re caught. You wonder if you should even mention this to Albina…');
        } else {
          // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
          scene.text('You turn the handle and gently push the door open just wide enough to look inside and see Albina riding \'+iif((AlbinaQW[\'know_ermias_sex\'] = 2 or ErmiasQW[\'meet\'] = 1), \'Ermias\', \'the same black guy as last time\')+\' on the sofa. You watch as he firmly grabs her waist and pulls her down while thrusting his hips upwards, his monstrous dick slowly sinking almost balls deep into her pussy.');
          scene.text('"<i>Fuuuuuccckkk</i>… I can feel it in my stomach!" she cries out as she shivers in pleasure. "Feel… So… Full!"');
          scene.text('"Your little white pussy will not be so tight when I am done stretching it out!" he grunts and smacks her ass. "Now ride it, slut!"');
          scene.text('Albina starts hammering herself up and down on his cock and you quickly close the door before you\'re caught, although not without sneaking a last, somewhat jealous glance at the massive black cock in front of you that glistens with saliva and pussy juices as it slides in and out of Albina\'s pussy.');
        }
      }
    } else {
      if ((Math.floor(Math.random() * 4) + 0) === 2) {
        scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/albina_anal.jpg');
        if (((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
          // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
          scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked white girl on her back on the sofa, moaning loudly as \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'a black guy\')+\' very roughly pounds her ass with his monstrous dick.');
          scene.text('The girl cries out in pleasure and starts rubbing her clit while begging him to fuck her even harder, so you quickly close the door before you\'re caught.');
          scene.text('That girl was very pretty, and you can\'t help but feel like you should recognize her face. Maybe you\'ve seen her somewhere before?');
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 0) {
            if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_ermias_sex'] = 1;
            // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
            scene.text('You turn the handle and gently push the door open just wide enough to look inside and are shocked to see Albina on her back on the sofa, moaning loudly as \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'a black guy\')+\' very roughly pounds her ass with his monstrous dick.');
            scene.text('She cries out in pleasure and starts rubbing her clit while begging him to fuck her even harder, so you quickly close the door before you\'re caught. You wonder if you should even mention this to Albina…');
          } else {
            // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
            scene.text('You turn the handle and gently push the door open just wide enough to look inside and see Albina on her back on the sofa, moaning loudly as \'+iif((AlbinaQW[\'know_ermias_sex\'] = 2 or ErmiasQW[\'meet\'] = 1), \'Ermias\', \'the same black guy as last time\')+\' fucks her ass.');
            scene.text('"Do all white girls like taking black cocks up the ass as much as you?" he grunts.');
            scene.text('Albina starts rubbing her clit while begging him to fuck her harder, so you quickly close the door before you\'re caught, although not without sneaking a last, somewhat jealous glance at the massive black cock in front of you.');
          }
        }
      } else {
        if ((Math.floor(Math.random() * 4) + 0) === 3  &&  (((s as any).hour ?? 0) === 20  &&  ((s as any).minut ?? 0) > 30)) {
          scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/albina_facial.jpg');
          if (((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
            // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
            scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see a naked white girl quickly getting down on her knees and sticking her tongue out as \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'a black guy\')+\' stands over her while stroking his monstrous dick.');
            scene.text('The girl gazes lustfully at his huge cock while begging him to cum over her face. A few seconds later, he grunts loudly as he reaches climax, plastering the girl\'s face and tongue with a huge load of thick cum. When he finally finishes, she gazes up at him with a happy smile before making a show of swallowing the cum in her mouth.');
            scene.text('She then takes the thick tip of his cock into her mouth and greedily sucks on it as his cum drips from her chin onto her breasts.');
            scene.text('You quickly close the door before you\'re caught. That girl was very pretty, and you can\'t help but feel like you should recognize her face. Maybe you\'ve seen her somewhere before?');
          } else {
            if (((s as any).AlbinaQW ?? 0)?.['know_ermias_sex'] === 0) {
              if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['know_ermias_sex'] = 1;
              // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
              scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see Albina quickly getting down on her knees and sticking her tongue out as \'+iif(ErmiasQW[\'meet\'] = 1, \'Ermias\', \'a black guy\')+\' stands over her while stroking his monstrous dick.');
              scene.text('She gazes lustfully at his huge cock while begging him to cum over her face. A few seconds later, he grunts loudly as he reaches climax, plastering her face and tongue with a huge load of thick cum. When he finally finishes, she gazes up at him with a happy smile before making a show of swallowing the cum in her mouth.');
              scene.text('She then takes the thick tip of his cock into her mouth and greedily sucks on it as his cum drips from her chin onto her breasts. You wonder if you should even mention this to Albina…');
            } else {
              // TODO-QSP: dynamic text: You turn the handle and gently push the door open just wide enough to look insid...
              scene.text('You turn the handle and gently push the door open just wide enough to look inside. You see Albina getting on her knees and sticking her tongue out as \'+iif((AlbinaQW[\'know_ermias_sex\'] = 2 or ErmiasQW[\'meet\'] = 1), \'Ermias\', \'the same black guy as last time\')+\' stands over her while stroking his monstrous dick.');
              scene.text('"I am going to cover your pretty little face with my cum!" he grunts before he suddenly reaches climax and plasters Albina\'s face and tongue with a huge load of thick cum. When he finally finishes, she gazes up at him with a happy smile before making a show of swallowing the cum in her mouth.');
              scene.text('She then takes the thick tip of his cock into her mouth and greedily sucks on it as his cum drips from her chin onto her breasts.');
              scene.text('You quickly close the door before you\'re caught, although not without sneaking a last, somewhat jealous glance at the massive black cock in front of you.');
            }
          }
        }
      }
    }
  }
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
  ]);
  scene.build();
}

function enterCastingVideo(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['porno'] = 2;
  scene.img('images/pc/items/accessories/computer/porno.jpg');
  scene.text('You hate yourself for even looking it up, but you\'re curious about Albina\'s porno. After some significant searching, you eventually find it, but it\'s locked behind a paywall.');
  scene.text('A banner reads: <b>"Subscribe now to unlock the premium Casting Corner experience, including the FULL video (featuring POV AND post sex interview!), plus the FULL image set of this shoot!"</b>');
  scene.text('Looks like you\'ll have to make do with browsing the limited amount of free images.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look at the first image', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting1.jpg');
    scene.text('You load up the first image, which features a smiling Albina posing naked on a bed. To your surprise, her smile looks genuine, but she did say she was enjoying herself at first.');
    scene.text('You can\'t help but admire the image. She\'s a natural at erotic modelling and knows how to flaunt her body.');
    scene.actions([
      { label: 'Stop looking', goto: ['komp', 'porno'] },
      { label: 'Look at the next image', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting2.jpg');
    scene.text('You move onto the next image, which shows Albina on all fours, her pussy and asshole both on full display as she gazes back at the talent scout pointing a handheld camera at her while running his hand over her ass.');
    scene.text('You imagine that she twerked her ass at least once for the camera here.');
    if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] > 1) {
      scene.text('Even though you\'ve filmed with him yourself, you still don\'t understand why he\'s hiding his face behind a wall of pixels. Isn\'t fucking hot girls something guys like this love to brag about?');
    } else {
      scene.text('You can\'t help but wonder why he\'s hiding his face behind a wall of pixels. Isn\'t fucking hot girls something guys like this love to brag about?');
    }
    scene.actions([
      { label: 'Stop looking', goto: ['komp', 'porno'] },
      { label: 'Look at the next image', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting3.jpg');
    scene.text('The next image shows the talent scout recording Albina as she gives him a blowjob, her gaze fixed firmly on the camera in front of her as she sucks his dick.');
    if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] > 1) {
      scene.text('Seeing this image reminds you of being on your knees, gazing up at his camera with his cock in your mouth...');
    } else {
      scene.text('He has a pretty nice looking cock... You wonder what it would feel like to suck on it yourself...');
    }
    scene.actions([
      { label: 'Stop looking', goto: ['komp', 'porno'] },
      { label: 'Look at the next image', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting4.jpg');
    scene.text('The images move on to showing the actual sex scenes, but without the premium POV shots, of course.');
    scene.text('This image shows Albina back on all fours at the edge of the bed, arching her back and spreading her legs as the camera captures the gasp of pleasure on her face as he penetrates her pussy.');
    if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] > 1) {
      scene.text('This guy offered you quite a lot of money to film you. Knowing Albina, she likely demanded a higher price than you.');
    } else {
      scene.text('You wonder how much money he offered to her so she would agree to do this. It must have been significant for her to have even <i>considered</i> it...');
    }
    scene.actions([
      { label: 'Stop looking', goto: ['komp', 'porno'] },
      { label: 'Look at the next image', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting5.jpg');
    scene.text('The next image shows Albina on her back, her legs spread wide as she watches him fucking her pussy.');
    scene.text('There\'s not much to go on with this image but, knowing Albina, pussy spreading and a <i>lot</i> of clit play were likely involved here.');
    scene.actions([
      { label: 'Stop looking', goto: ['komp', 'porno'] },
      { label: 'Look at the next image', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting6.jpg');
    scene.text('The next image shows Albina riding him reverse cowgirl as he films a shot of her ass bouncing up and down on his cock.');
    scene.text('Despite his face being pixelated, you can tell from his body language that he\'s trying his hardest not to blow his load.');
    scene.actions([
      { label: 'Stop looking', goto: ['komp', 'porno'] },
      { label: 'Look at the next image', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting7.jpg');
    scene.text('The next image is, surprisingly, a POV shot that heavily implies that Albina has swallowed his cum as she gazes happily into the camera.');
    if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] > 1) {
      scene.text('He had a lot of fun filming with you, but you imagine that fucking a girl like Albina was a dream come true for him.');
    } else {
      scene.text('Whoever this guy is, he probably couldn\'t believe his luck at being able to fuck a girl like Albina.');
    }
    scene.actions([
      { label: 'Stop looking', goto: ['komp', 'porno'] },
      { label: 'Look at the last image', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting8.jpg');
    scene.text('The last image shows Albina in the shower, her ass pressed firmly up against the glass door as she washes her breasts.');
    if (((s as any).strip_club ?? 0)?.['porn_scout_pickup'] > 1) {
      scene.text('You\'re well aware from your own video that this is a teaser for the post sex interview. You wonder how Albina answered his questions...');
    } else {
      scene.text('This is a very teasing image, likely added here to lure viewers into subscribing so they can watch the "post sex interview" that was mentioned earlier. You wonder what kind of questions were asked...');
    }
    scene.text('She really did film a porno. Even if she does regret it, you can\'t deny that she clearly enjoyed herself here.');
    scene.actions([
      { label: 'Read the comments', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/casting/alb_casting8.jpg');
    scene.text('You browse through the comments, almost of all of which have replies from the talent scout.');
    scene.text('@BigWhiteDuke: "That\'s one smoking hot babe, and with a juicy bubble butt and a cute pussy to boot! You lucky bastard!"');
    scene.text('@CastingCorner: "She\'s definitely one of the hottest girls I\'ve fucked. I don\'t think I\'ll meet a girl with an ass as perfect as hers again!"');
    scene.text('@6InchesWhenFloppy: "Looked like you had to hold yourself back there a few times, bro! Pussy too good?"');
    scene.text('@CastingCorner: "100% the tightest pussy I\'ve ever had the pleasure of fucking. This girl was on another level!"');
    scene.text('@CallMeDaddy: "This girl is a fucking goddess! And that ass! That POV shot of her bent over on all fours thrusting back against your cock... I would die happy if I could fuck a girl with an ass that jiggled like that!"');
    scene.text('@CastingCorner: "Definitely a view to die for! Had to hold back at that part so I could keep fucking her and finish the video."');
    scene.text('@PAWG_Worshipper: "That shower interview at the end... Just wow! I would have been jumping in there with her and helping her scrub that phenomenal fucking ass of hers if I had been in your place!"');
    scene.text('@CastingCorner: "Glad you enjoyed the content! I guess you could say she needed a good hard clean after the sex we had! She truly was something else!"');
    scene.text('@Bananaking: "Absolute PAWG! I would have been spanking that big sexy ass until it was red raw!"');
    scene.text('@CastingCorner: "It did cross my mind, but I had to hold the camera still to get such good shots. Pros and cons of the job, I guess."');
    scene.text('You quickly close the webpage, not knowing what to feel. While you did have to go out of your way to find this, it\'s probably a good thing that it\'s locked behind a paywall where nobody she knows can watch it.');
    scene.text('Still, it\'s probably for the best that you never mention that you were even looking this up, never mind trying to watch it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'porno'] },
    ]);
  } },
      { label: 'Leave the site', goto: ['komp', 'porno'] },
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

function enterUniCafe(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A23', 'like', 1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>University Cafeteria</b></center>');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('You approach Albina and give her a smile. "Hey Albina!"');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
    if (((s as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('She looks up from her phone and smiles.');
      scene.text('"You\'re having cock for lunch, yeah?" she asks.');
      scene.text('You just smile while shaking your head at her jest.');
      scene.text('"I\'d love to chat, but I need to get going," she says.');
      scene.text('You just nod as she finishes her lunch and gets up before leaving.');
    } else {
      // TODO-QSP: dynamic text: She looks up from her phone and smiles. "Oh hey <<$pcs_nickname>>."
      scene.text(`She looks up from her phone and smiles. "Oh hey ${((s as any).pcs_nickname || '')}."`);
      scene.text('You sit and talk to her for a few minutes before her phone buzzes. She looks at it and quickly finishes her lunch.');
      if (((s as any).AlbinaQW ?? 0)?.['dorm_invite'] === 0) {
        if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['dorm_invite'] = 1;
        scene.text('"Sorry, I need to go, but you should come and visit me in my dorm room sometime."');
        if (((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg') {
          scene.text('"Really?" you reply. "You want me to come to your room?"');
          scene.text('"Totally!" she smiles. "There\'s something different about you and I want to get to the bottom of it! Seventh floor, room 707."');
        } else {
          scene.text('"Sure," you reply. "When should I come by?"');
          scene.text('"I\'m home most evenings. Seventh floor, room 707. Don\'t keep me waiting!"');
        }
        (s as any).temp_showtext = 0;
        (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_events" });
        if (((s as any).temp_index ?? 0) < 0) {
          qspCall(s, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
          (s as any).temp_showtext = 1;
        } else {
          if (((s as any).contactAnon ?? 0)?.[String((s as any).temp_index ?? 0)] !== 0) {
            if (!(s as any).contactAnon) (s as any).contactAnon = {}; (s as any).contactAnon[String((s as any).temp_index ?? 0)] = 0;
            (s as any).temp_showtext = 1;
          }
        }
        if (((s as any).temp_showtext ?? 0)) {
          scene.text('"Oh, before I go," she says. "Here\'s my number so we can text each other."');
          scene.text('You add each other\'s numbers to your phones before you say goodbye and she walks away.');
        }
      } else {
        scene.text('"Sorry, I need to go, but we should hang out again sometime."');
        scene.text('You just nod and say goodbye before she walks away.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
      if (((s as any).fame ?? 0)?.['city_slut'] > 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 250) {
        scene.text('"Ugh…" she scowls in disgust. "The slut is on the hunt for a dick to milk. Piss off and do that shit somewhere else, you disease ridden cum dumpster!"');
        scene.text('You quickly turn and walk away before she causes a scene. Seems that even moving to a new city can\'t get you away from your reputation as a slut…');
      } else {
        scene.text('She look up at you from her phone and scowls. "Go bother someone else, loser. I\'m trying to chill out here."');
        scene.text('You\'re not going to get any conversation out of her, so you just walk away.');
      }
    } else {
      scene.text('She looks up from her phone and smiles at you, but doesn\'t offer much else as you sit and talk to her for a few minutes before her phone buzzes. She looks at it and quickly finishes her lunch.');
      scene.text('"Sorry, but I need to go. Maybe I\'ll see you around?" she says before she walks away.');
      scene.text('"Yeah, sure…" you say, but she\'s already out of earshot.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterCoffeeHole1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['coffee_meet'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
    if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      scene.text('You approach Albina and give her a smile. "Hey Albina!"');
      scene.text('Albina smiles at you and the woman turns to face you. You\'re surprised to see that it\'s Zoya.');
      // TODO-QSP: dynamic text: "Oh hello <<$pcs_firstname>>. I wasn't expecting to meet you here," she smiles.
      scene.text(`"Oh hello ${((s as any).pcs_firstname || '')}. I wasn't expecting to meet you here," she smiles.`);
      scene.text('"Sorry, I was just in the area and saw Albina was here, so I just came over to say hi."');
      scene.text('"No need to apologize," Zoya replies. "It\'s always a pleasure to meet my daughter\'s friends, especially ones as good to her as you."');
      scene.text('"Mama!" Albina exclaims, a slight hint of embarrassment in her voice.');
      // TODO-QSP: dynamic text: "Tell me, <<$pcs_firstname>>. Are you studying at the university as well?"
      scene.text(`"Tell me, ${((s as any).pcs_firstname || '')}. Are you studying at the university as well?"`);
      if (((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
        scene.text('"Yes. Albina and I are in the same class as each other, actually," you reply.');
        scene.text('"You\'re also choosing to study medicine? My Albina here must have rubbed off on you, no?"');
        if (((s as any).npc_had_sex ?? 0)?.['A23']) {
          scene.text('You and Albina both hold in a laugh at her comment. If only she knew what you and Albina have been getting up to in private…');
        }
        scene.text('"You could say that, yeah…" you smile.');
      } else {
        if (((s as any).university ?? 0)?.['student'] === 1) {
          scene.text('"Yes, but I\'m studying for a different degree than Albina. I still see her around campus though," you reply.');
          scene.text('Zoya smiles. "It\'s always nice to see young girls such as yourselves studying hard for a better life."');
        } else {
          scene.text('"Uhhh, no actually…" you sheepishly reply.');
          // TODO-QSP: dynamic text: "That's nothing to be ashamed about, <<$pcs_firstname>>," she says with a smile....
          scene.text(`"That's nothing to be ashamed about, ${((s as any).pcs_firstname || '')}," she says with a smile. "You can do plenty of things in life without a university degree. You just need to work hard for it."`);
        }
      }
      scene.text('"I should get going. I\'ve disturbed your lunch enough already," you say.');
      // TODO-QSP: dynamic text: "Again, there's no need to feel awkward, <<$pcs_firstname>>," Zoya replies. "You...
      scene.text(`"Again, there's no need to feel awkward, ${((s as any).pcs_firstname || '')}," Zoya replies. "You're welcome any time."`);
      scene.text('You smile at Albina before you excuse yourself, leaving the two of them to resume their conversation.');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['meet_zoya'] === 0) {
        if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['meet_zoya'] = 1;
        scene.text('You approach Albina and give her a smile. "Hey Albina!"');
        scene.text('Albina smiles at you and the woman turns to face you. You don\'t recognize her, but she bears a striking resemblance to Albina.');
        scene.text('"Is this a friend of yours, Albina?" the woman asks.');
        // TODO-QSP: dynamic text: "Yes Mama," Albina replies. "This is <<$pcs_firstname>>, but most people just ca...
        scene.text(`"Yes Mama," Albina replies. "This is ${((s as any).pcs_firstname || '')}, but most people just call her ${((s as any).pcs_nickname || '')}."`);
        // TODO-QSP: dynamic text: "It's nice to meet you, <<$pcs_firstname>>," the woman replies. "I'm Zoya, Albin...
        scene.text(`"It's nice to meet you, ${((s as any).pcs_firstname || '')}," the woman replies. "I'm Zoya, Albina's mother."`);
        scene.text('"Likewise," you smile. "I didn\'t mean to intrude, I just wanted to say hi to Albina. I\'ll leave you two to enjoy your lunch."');
        scene.text('"Not at all," Zoya replies. "It\'s always nice to meet my daughter\'s friends."');
        scene.text('You just smile and excuse yourself, leaving the two of them to resume their conversation.');
      } else {
        scene.text('You approach Albina and give her a smile. "Hey Albina!"');
        scene.text('Albina smiles at you and the woman turns to face you. It\'s Zoya, her mother.');
        // TODO-QSP: dynamic text: "Hello again, <<$pcs_firstname>>," Zoya says with a smile.
        scene.text(`"Hello again, ${((s as any).pcs_firstname || '')}," Zoya says with a smile.`);
        scene.text('"Hello… uh…" you stammer.');
        // TODO-QSP: dynamic text: "Just call me Zoya. Tell me, <<$pcs_firstname>>. Are you studying at the univers...
        scene.text(`"Just call me Zoya. Tell me, ${((s as any).pcs_firstname || '')}. Are you studying at the university as well?"`);
        if (((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
          scene.text('"Yes. Albina and I are in the same class as each other, actually," you reply.');
          scene.text('"You\'re also choosing to study medicine? My Albina here must have rubbed off on you, no?"');
          if (((s as any).npc_had_sex ?? 0)?.['A23']) {
            scene.text('You and Albina both hold in a laugh at her comment. If only she knew what you and Albina have been getting up to in private…');
          }
          scene.text('"You could say that, yeah…" you smile.');
        } else {
          if (((s as any).university ?? 0)?.['student'] === 1) {
            scene.text('"Yes, but I\'m studying for a different degree than Albina. I still see her around campus though," you reply.');
            scene.text('Zoya smiles. "It\'s always nice to see young girls such as yourselves studying hard for a better life."');
          } else {
            scene.text('"Uhhh, no actually.." you sheepishly reply.');
            // TODO-QSP: dynamic text: "That's nothing to be ashamed about, <<$pcs_firstname>>," she says with a smile....
            scene.text(`"That's nothing to be ashamed about, ${((s as any).pcs_firstname || '')}," she says with a smile. "You can do plenty of things in life without a university degree. You just need to work hard for it."`);
          }
        }
        scene.text('"I should get going. I\'ve disturbed your lunch enough already," you say.');
        // TODO-QSP: dynamic text: "Again, there's no need to feel awkward, <<$pcs_firstname>>," Zoya replies. "You...
        scene.text(`"Again, there's no need to feel awkward, ${((s as any).pcs_firstname || '')}," Zoya replies. "You're welcome any time."`);
        scene.text('You smile at Albina before you excuse yourself, leaving the two of them to resume their conversation.');
      }
    }
  } else {
    scene.text('Albina isn\'t your biggest fan and you don\'t want to cause a scene in front of this woman, whoever she is, so you leave them be.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Leave them be', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterCoffeeHole2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['coffee_meet'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('You approach Albina and give her a smile. "Hey Albina!"');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
    if (((s as any).fame ?? 0)?.['city_slut'] > 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 250) {
      scene.text('She looks up from her phone and smiles.');
      scene.text('"Are you here for some \'cream\' in your coffee?" she asks.');
      scene.text('You just smile while shaking your head at her jest.');
      scene.text('"I\'d love to chat, but I need to get going," she says.');
      scene.text('You just nod as she finishes her drink and gets up before leaving.');
    } else {
      // TODO-QSP: dynamic text: She looks up from her phone and smiles. "Oh hey <<$pcs_nickname>>."
      scene.text(`She looks up from her phone and smiles. "Oh hey ${((s as any).pcs_nickname || '')}."`);
      scene.text('"What brings you here?" you ask.');
      if (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) === 19) {
        scene.text('"I needed to get out of the dorm for a bit of quiet time after that study session I just done," she replies before glancing over at the table where the nerds are playing. "Not that that has been easy with those geeks over there doing… whatever it is they\'re doing."');
        scene.text('You look over your shoulder at the table where the nerds have set up. They\'re playing what looks like a board game of some kind and are pretty loud about it, seemingly forgetting they\'re in the middle of a coffee shop.');
        scene.text('"I don\'t mind them being here, but they don\'t need to be so fucking loud about it," she says before rolling her eyes and taking a sip of her coffee.');
      } else {
        if (((s as any).hour ?? 0) === 19) {
          scene.text('"I needed to get out of the dorm for a bit of quiet time after that study session I just done," she replies.');
          scene.text('"Look at that! The head cheerleader has turned into a massive nerd!" you jest.');
          scene.text('She just laughs before jokingly flipping you off.');
        } else {
          scene.text('"I was in the area and decided to drop in for a while before I head back to the uni."');
          scene.text('"And what could possibly be bringing the high and mighty princess to this part of town?" you jest.');
          scene.text('She just laughs before jokingly flipping you off.');
        }
      }
      scene.text('You continue to sit and chat with her for a few minutes before her phone buzzes. She looks at it and finishes her drink.');
      if (((s as any).AlbinaQW ?? 0)?.['dorm_invite'] === 0) {
        if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['dorm_invite'] = 1;
        scene.text('"Sorry, I need to go, but you should come and visit me in my dorm room sometime."');
        if (((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg') {
          scene.text('"Really?" you reply. "You want me to come to your room?"');
          scene.text('"Totally!" she smiles. "There\'s something different about you and I want to get to the bottom of it! Seventh floor, room 707."');
        } else {
          scene.text('"Sure," you reply. "When should I come by?"');
          scene.text('"I\'m home most evenings. Seventh floor, room 707. Don\'t keep me waiting!"');
        }
        scene.text('She gives you directions to her room as she stands up. "Here\'s my number so we can text each other."');
        (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'A23')", { location: "albina_events" });
        if ((Array.isArray((s as any).contact) ? ((s as any).contact as any[]).indexOf('A23') : -1) < 0) {
          qspCall(s, 'telefon', 'AddContact', 'A23', 'images/characters/shared/headshots_main/23.jpg', 0);
        } else {
          if (((s as any).contactAnon ?? 0)?.[String((s as any).temp_index ?? 0)] !== 0) {
            if (!(s as any).contactAnon) (s as any).contactAnon = {}; (s as any).contactAnon[String((s as any).temp_index ?? 0)] = 0;
          }
        }
        scene.text('You add each other\'s numbers to your phones before you say goodbye and she walks away.');
      } else {
        scene.text('"Sorry, I need to go, but we should hang out sometime."');
        scene.text('You just nod and say goodbye before she heads outside and walks away.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
      if (((s as any).fame ?? 0)?.['city_slut'] > 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 250) {
        scene.text('"Ugh…" she scowls in disgust. "The slut is on the hunt for a dick to milk. Piss off and do that shit somewhere else, you disease ridden cum dumpster!"');
        scene.text('You quickly turn and walk away before she causes a scene. Seems that even moving to a new city can\'t get you away from your reputation as a slut…');
      } else {
        scene.text('She look up at you from her phone and scowls. "Go bother someone else, loser. I\'m trying to chill out here."');
        scene.text('You\'re not going to get any conversation out of her, so you just walk away.');
      }
    } else {
      scene.text('She looks up from her phone and smiles at you, but doesn\'t offer much else as you sit and talk to her for a few minutes before her phone buzzes. She looks at it and finishes her drink.');
      scene.text('"Sorry, but I need to go. Maybe I\'ll see you around?" she says before she heads outside and walks away.');
      scene.text('"Yeah, sure…" you say, but she\'s already out of earshot.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Leave her be', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterMoncheri(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['boutique'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/event/browsing.jpg');
  scene.text('You approach Albina with a smile as she examines a set of panties.');
  scene.text('Given that she\'s rather wealthy, you\'re not surprised to find her here.');
  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
    if (((s as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('She grins when she sees you. "You suck enough dicks to afford shopping here?"');
      scene.text('You blush at her jest and she smiles. "Just stay safe, okay?"');
      scene.text('You just nod and allow her to go back to browsing.');
    } else {
      // TODO-QSP: dynamic text: She smiles when she sees you. "<<$pcs_nickname>>? I didn't expect to ever see yo...
      scene.text(`She smiles when she sees you. "${((s as any).pcs_nickname || '')}? I didn't expect to ever see you in here."`);
      scene.text('"I was just browsing," you reply.');
      scene.text('"Same," she says. "These kind of panties aren\'t my style, but I like to treat myself to a new dress or two from time to time."');
      scene.text('You chat for a few more minutes before she excuses herself.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A23'] > 20  &&  ((s as any).npc_rel ?? 0)?.['A23'] < 60) {
      if (((s as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('She gives you an awkward smile in return before turning away from you.');
        scene.text('It\'s obvious she doesn\'t want to be seen talking to you.');
      } else {
        scene.text('She gives you a small smile in return, but doesn\'t seem too interested in having a conversation with you.');
        scene.text('You eventually give up and allow her to go back to her browsing.');
      }
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
        scene.text('She frowns when she sees you. "How did <i>you</i> get in here? Go and find a cock to suck somewhere a little more fitting, slut."');
        scene.text('She then turns away and proceeds to ignore you.');
      } else {
        scene.text('She frowns when she sees you. "I don\'t have time to talk to you."');
        scene.text('She barges past you and walks over to another section of the store.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop_moncheri', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'albina_jogging_pav':
      enterAlbinaJoggingPav(s, scene);
      break;
    case 'study_door':
      enterStudyDoor(s, scene);
      break;
    case 'flash_drive':
      enterFlashDrive(s, scene);
      break;
    case 'school_photo':
      enterSchoolPhoto(s, scene);
      break;
    case 'walk_of_shame':
      enterWalkOfShame(s, scene);
      break;
    case 'albina_jogging_uni':
      enterAlbinaJoggingUni(s, scene);
      break;
    case 'first_in_class_meet':
      enterFirstInClassMeet(s, scene);
      break;
    case 'floor_eight_sex':
      enterFloorEightSex(s, scene);
      break;
    case 'casting_video':
      enterCastingVideo(s, scene);
      break;
    case 'uni_cafe':
      enterUniCafe(s, scene);
      break;
    case 'coffee_hole1':
      enterCoffeeHole1(s, scene);
      break;
    case 'coffee_hole2':
      enterCoffeeHole2(s, scene);
      break;
    case 'moncheri':
      enterMoncheri(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_events: LocationDef = {
  name: 'albina_events',
  title: 'University Cafeteria',
  region: 'other',
  enter: enter,
};
