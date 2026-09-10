import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAlbinaJoggingPav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).socialchg['tAlbina_jog'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/event/park_jogging.jpg');
  scene.text('You walk over and greet her with a smile. "Hey Albina!"');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  (((s as any).grupTipe ?? 0) === 3  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 70)  ||  ((((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 60)) {
    // TODO-QSP: dynamic text: She glances up at you and smiles before returning her attention to her shoelace,...
    scene.text(`She glances up at you and smiles before returning her attention to her shoelace, re-tying it before standing up and stretching. "Hey ${((s as any).pcs_nickname ?? 0)}. Out and about enjoying yourself?"`);
    scene.text('"You could say that," you reply with a smile.');
    scene.text('"Well make the most of it. Now I\'d love to stay and chat, but I have a few more laps to do. I\'ll catch you later, yeah?"');
    scene.text('You nod and she gives you a parting smile before jogging away.');
  } else {
    scene.text('She glares up at you. "Ugh, it\'s <i>you</i>…" she scorns. "Go bother someone else."');
    scene.text('"What\'s your fucking problem, bitch? I just wanted to talk," you bite back.');
    scene.text('"I <i>was</i> setting a good lap time, but here I am wasting time talking to a fucking junkie!"');
    scene.text('Not waiting for your reply, she pushes past you and continues her jog, leaving you behind to curse her under your breath.');
    scene.text('She glances up at you before she finishes fixing her shoelace and stands up.');
    scene.text('"I don\'t have time to chat. I need to finish my run."');
    scene.text('She then jogs away without another word, leaving you behind.');
  }
  scene.actions([
    { label: 'Go back to the park', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterStudyDoor(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/doors.jpg');
  scene.text('As you make your way up the stairs, you take note of the double doors down the hallway. Albina got rather agitated and told you to leave it alone when you first mentioned it to her. She said the room was locked for a reason and under no circumstances would she ever open it.');
  // TODO-QSP: dynamic text: At this point, the maid walks out of the room and neglects to close the door bef...
  scene.text(`At this point, the maid walks out of the room and neglects to close the door before heading down the hall, smiling at you as she walks past. "Hello, Miss ${((s as any).pcs_firstname ?? 0)}."`);
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
    (s as any).AlbinaQW['flashdrive'] = 1;
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
    (s as any).AlbinaQW['studylock'] = 1;
  }, goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFlashDrive(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/items/accessories/computer/komp.jpg');
  scene.text('You plug the flash drive into your computer and find that it contains a single folder titled "Blackmail material". When you open it, you\'re presented with a series of videos and a note which reads "To be used if any \'associates\' get out of line."');
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
    (s as any).AlbinaQW['flashdrive'] = 2;
    (s as any).AlbinaQW['albina_ivanov'] = 1;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('Horrified at what you just watched, you quickly close the video and delete the flash drive\'s contents before throwing it out the window as hard as you can.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] === 0) {
      scene.text('Is that the kind of sick torture Albina had to go through to protect you from those vile men? You can\'t help but feel guilty, but decide to keep this to yourself. You know Albina feels extremely guilty about what she was forced to do and mentioning this to her will do more harm than good.');
    } else {
      scene.text('Is that the kind of sick torture Albina had to go through every time you refused to go with those men? You can\'t help but feel guilty and ashamed, but decide to keep this to yourself. You know Albina feels extremely guilty about what she was forced to do and mentioning this to her will do more harm than good.');
      scene.text('Your own experiences with these men were horrifying, but seeing what Albina suffered at the hands of these brutes to protect you and your fellow dancers from them makes you feel sick. You decide to keep this to yourself. Despite forgiving her, you know Albina feels extremely guilty about what she was forced to do and mentioning this to her will do more harm than good.');
    }
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('Disturbed by what you watched, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('A little disturbed by what you watched, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('A little disturbed by what you watched, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    (s as any).AlbinaQW['flashdrive'] = 2;
    scene.img('images/pc/items/accessories/computer/komp.jpg');
    scene.text('Feeling alarmed, you close the file and delete the flash drive\'s contents. You discard of it by tossing it in the trash, being careful to cover it so nobody finds it.');
    scene.actions([
      { label: 'Continue', goto: ['komp', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Stop', handler: (st: GameState) => {
    (s as any).AlbinaQW['flashdrive'] = 2;
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
    (s as any).AlbinaQW['school_photo'] = (-1);
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
    (s as any).AlbinaQW['school_photo'] = 1;
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
    scene.text(`"Like what you see, ${((s as any).pcs_nickname ?? 0)}?" she asks teasingly as you once again move around to shoot her from various angles.`);
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
    scene.text(`"That was fun, ${((s as any).pcs_nickname ?? 0)}. Have you ever considered becoming a professional model photographer?" she asks.`);
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
      scene.text(`"Are you following me again, ${((s as any).pcs_nickname ?? 0)}?"`);
      scene.text('You turn and smile. "Guilty as charged!"');
      scene.text('"Yes, I\'m coming from Lazar\'s place after spending the night with him again and yes, he pounded the shit out of me and I can barely walk. Now if you\'ll excuse me, I\'m in desperate need of a nice hot bath!"');
      scene.text('She walks back out to the main street without another word. You follow after her a few seconds later.');
      if (((s as any).AlbinaQW ?? 0)?.['know_walk_of_shame'] === 1) {
        (s as any).AlbinaQW['know_walk_of_shame'] = 2;
      }
      scene.actions([
        { label: 'Continue', goto: ['pav_residential', ''] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Are you following me, <<$pcs_nickname>>?"
      scene.text(`"Are you following me, ${((s as any).pcs_nickname ?? 0)}?"`);
      scene.text('You whip your head around and see Albina strutting over to you in her tight fitting black dress.');
      scene.text('"I didn\'t expect to see you here was all," you reply.');
      if (((s as any).AlbinaQW ?? 0)?.['Friends'] !== 2) {
        // TODO-QSP: dynamic text: She shakes her head. "I like you, <<$pcs_nickname>>, but stop being nosey and mi...
        scene.text(`She shakes her head. "I like you, ${((s as any).pcs_nickname ?? 0)}, but stop being nosey and mind your own business!"`);
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
    (s as any).AlbinaQW['know_walk_of_shame'] = 1;
    scene.text('"I\'ll take your word for it, but I know you jumped at the chance to jump on his dick!"');
    // TODO-QSP: dynamic text: "<i>Funny</i>…" she replies as she rolls her eyes. "I need to get going. My feet...
    scene.text(`"<i>Funny</i>…" she replies as she rolls her eyes. "I need to get going. My feet are killing in these heels! See you later, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('She walks back out to the main street without another word. You follow after her a few seconds later.');
    scene.actions([
      { label: 'Continue', goto: ['pav_residential', ''] },
    ]);
  } },
          { label: 'Show me', handler: (st: GameState) => {
    (s as any).AlbinaQW['know_walk_of_shame'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/albina/event/walk_of_shame2.jpg');
    scene.text('"How great are we talking?" you grin.');
    scene.text('She looks around to make sure nobody is looking before she smiles. "I\'ll show you…"');
    scene.text('She walks over to the nearby fence and wiggles her ass as she leans against it.');
    scene.text('"He had me up against the bedroom door like this as he pounded my ass," she says as she pulls her dress up and shows off her naked ass.');
    scene.text('"Did you lose your panties this morning as well?" you laugh.');
    scene.text('"No, I lost them last night," she grins. "I might have let him snap them off in the heat of the moment…"');
    scene.text('"Slut!" you grin and she smirks back.');
    // TODO-QSP: dynamic text: "You're just jealous that I got a good dicking last night," she says as she pull...
    scene.text(`"You're just jealous that I got a good dicking last night," she says as she pulls her dress back down. "Anyway, I need to get going. My feet are killing in these heels! See you later, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('She walks back out to the main street without another word. You follow after her a few seconds later.');
    scene.actions([
      { label: 'Continue', goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterAlbinaJoggingUni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('You wave in Albina\'s direction as she approaches you.');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
    // TODO-QSP: dynamic text: She smiles and pulls her earbuds out. "Hey <<$pcs_nickname>>. Out and about enjo...
    scene.text(`She smiles and pulls her earbuds out. "Hey ${((s as any).pcs_nickname ?? 0)}. Out and about enjoying yourself?"`);
    scene.text('"You could say that," you reply with a smile.');
    scene.text('"Well make the most of it. Now I\'d love to stay and chat, but I have a few more laps to do. I\'ll catch you later, yeah?"');
    scene.text('You nod and she gives you a parting smile before putting her earbuds back in and jogging away.');
  } else {
    scene.text('She just glances at you. "I don\'t have time to chat. I need to finish my run."');
    scene.text('She then jogs away without another word, leaving you behind.');
  }
  scene.actions([
    { label: 'Go back to the quad', goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterFirstInClassMeet(s: GameState, scene: SceneBuilder): void {
  (s as any).AlbinaQW['meet_uni_class'] = 1;
  (s as any).AlbinaQW['know_albina_uni'] = 1;
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  if (((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg') {
    // TODO-QSP: dynamic text: As you walk into the lecture hall, a slender, yet well toned brunette walks up t...
    scene.text(`As you walk into the lecture hall, a slender, yet well toned brunette walks up to you. "${((s as any).pcs_nickname ?? 0)}? I didn't know you wanted to become a nurse!"`);
    scene.text('"Oh, uh. I thought it would make for an interesting career," you reply while trying to remember who this girl is.');
    scene.text('"Okay. See you around then," she says before turning to find a seat.');
    // TODO-QSP: dynamic text: You check out her ass before quickly taking a seat and flipping through the page...
    scene.text(`You check out her ass before quickly taking a seat and flipping through the pages of the journal that Tatiana gave you. You find that the girl is called Albina and that she's a former classmate of the original ${((s as any).pcs_firstname ?? 0)}.`);
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
        scene.text(`As you enter the lecture hall, you hear a voice behind you. "${((s as any).pcs_nickname ?? 0)}!" You turn and see Albina running up to embrace you in a tight hug. "Having you here is going to make everything so much better!"`);
        scene.text('You return the hug. "It\'s good to see you too, Albina."');
        // TODO-QSP: dynamic text: She lets you go. "Did you know Lariska and Vicky are on this course as well?" Sh...
        scene.text(`She lets you go. "Did you know Lariska and Vicky are on this course as well?" She points the two girls out before going off to find a place to sit. "I look forward to seeing you around, ${((s as any).pcs_nickname ?? 0)}."`);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
          scene.text('As you enter the lecture hall, you hear a voice behind you. "I should\'ve guessed that I would see you here."');
          scene.text('When you turn round, you see your former classmate Albina standing there.');
          scene.text('"Was it really a surprise?" you reply with a smile.');
          scene.text('"No, not really, but it\'s nice to have somebody else I know in the class. Did you know Lariska and Vicky are on this course as well?"');
          scene.text('She points the two girls out before going off to find a place to sit.');
        } else {
          scene.text('You recognize Albina in the crowd and decide to approach her. "Hey Albina!"');
          scene.text('"Oh. It\'s <i>you</i>…" she replies, not looking particularly happy. "Dealing with you is the last thing I want right now," she says before walking away to find a place to sit.');
          // TODO-QSP: dynamic text: As you enter the lecture hall, you hear a voice behind you. "Hey <<$pcs_nickname...
          scene.text(`As you enter the lecture hall, you hear a voice behind you. "Hey ${((s as any).pcs_nickname ?? 0)}. I didn't know you were interested in nursing."`);
          scene.text('When you turn round, you see your former classmate Albina standing there.');
          scene.text('"I didn\'t think you were either," you reply.');
          scene.text('"It\'s nice to have people I already know in the class. Did you know Lariska and Vicky on this course as well?"');
          scene.text('She points the two girls out before going off to find a place to sit.');
        }
        if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
          // TODO-QSP: dynamic text: As you enter the lecture hall, you hear a voice behind you. "<<$pcs_nickname>>? ...
          scene.text(`As you enter the lecture hall, you hear a voice behind you. "${((s as any).pcs_nickname ?? 0)}? I didn't know you were on this course." When you turn round, you see your former classmate Albina.`);
          scene.text('"Well, surprise!" you reply.');
          scene.text('"It\'s nice to have people I know in the class. Did you know Lariska and Vicky are on this course as well?" She points the two girls out before going off to find a place to sit.');
        } else {
          scene.text('You recognize Albina in the crowd and decide to approach her. "Hey Albina!"');
          scene.text('"Oh. It\'s <i>you</i>…" she replies, not looking particularly happy. "Dealing with you is the last thing I want right now," she says before walking away to find a place to sit.');
          // TODO-QSP: dynamic text: As you enter the lecture hall, you hear a voice behind you. "Hey <<$pcs_nickname...
          scene.text(`As you enter the lecture hall, you hear a voice behind you. "Hey ${((s as any).pcs_nickname ?? 0)}. I didn't know you were interested in nursing." When you turn round, you see your former classmate Albina standing there.`);
          scene.text('"And why is that?" you reply.');
          scene.text('"Oh, no reason. It\'s just nice to have people I already know in the class. Did you know Lariska and Vicky are on this course as well?" She points the two girls out before going off to find a place to sit.');
        }
        scene.actions([
          { label: 'Find a place to sit', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_lessons1', $ARGS[1]
  } },
        ]);
      }
    }
  }
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
    default:
      enterAlbinaJoggingPav(s, scene);
      break;
  }
}

export const albina_events: LocationDef = {
  name: 'albina_events',
  title: 'University Cafeteria',
  region: 'other',
  description: ['You walk over and greet her with a smile. "Hey Albina!"'],
  enter: enter,
};
