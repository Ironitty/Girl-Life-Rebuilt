import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWatchSonia(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/park/watch/sonia_boy1.jpg');
  scene.text('You carefully walk through an opening between the trees and bushes, pushing some branches aside to see what\'s happening. There, you see Sonia on her haunches in front of Svyatoslav, sucking on the head of his dick while using one hand to stroke his shaft.');
  qspCall(s, 'arousal', 'voyeur_sex', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave them be', goto: ['pav_park', 'deeper_park'] },
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/park/watch/sonia_boy2.jpg');
    scene.text('After a few minutes, Svyatoslav reaches down and grabs Sonia by the hair before pulling her forward, forcing his cock deep into her mouth. You can hear her gagging from here, yet he doesn\'t relent as he starts fucking her face.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave them be', goto: ['pav_park', 'deeper_park'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/park/watch/sonia_boy3.jpg');
    scene.text('Svyatoslav pushes Sonia\'s head away and pulls her up until she stands and starts pulling her shorts off. Once her shorts and panties are down around her ankles, he roughly turns her around and reaches down between her legs to rub her pussy, making her moan.');
    scene.text('"Fuck, you\'re a dirty little whore! You\'re already wet and ready for my cock," he says as he guides his cock into her and starts fucking her.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave them be', goto: ['pav_park', 'deeper_park'] },
      { label: 'Watch some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/park/watch/sonia_boy4.jpg');
    scene.text('Svyatoslav pushes Sonia forward until she\'s bent over. Then, grabbing her hips with both hands, he starts pounding her pussy as hard and fast as he can. She moans and grunts with each thrust as he buries his cock balls deep into her pussy.');
    scene.text('"Oh… Fuck me… Fuck me harder!" she cries out.');
    scene.text('Svyatoslav tries to pound her even harder. "Yeah, take it, you dirty slut! Take my cock!"');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave them be', goto: ['pav_park', 'deeper_park'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/park/watch/sonia_boy5.jpg');
    scene.text('Svyatoslav grabs one of her legs and lifts it off the ground, holding her body with one hand and pinning one of her legs against his arm and body as he jackhammers into her, grunting with each thrust as she moans and cries out.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave them be', goto: ['pav_park', 'deeper_park'] },
      { label: 'Watch them finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/park/watch/sonia_boy6.jpg');
    scene.text('He grunts louder, then lets go of her leg and pulls his dick out of her pussy. Her raised foot barely touches the ground before he shoves her down hard on her knees and starts jerking off in front of her face. A few seconds later, he starts shooting his cum all over her face.');
    scene.text('Once he finishes, he shoves his dick back in her mouth to let her suck him clean. He then pulls up his pants, tucks his dick away and turns away from her without a word. You take this as your queue and quickly leave before you get caught spying on them.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
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

function enterOldmanHouse(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera1.jpg');
  scene.text('You nod your head. "Okay, sure. Lead the way," you say as you pull your clothes back in place and zip your jacket back up.');
  scene.text('He smiles warmly at you. "Fantastic, come with me. My home isn\'t far."');
  scene.text('He leads you on a walk through the park, cutting through the middle of it so you emerge on the outskirts of Pavlovsk. There are a few tiny older homes in the area, and he leads you to one in the best shape. He stops and unlocks the door, then shows you inside.');
  scene.text('The tiny house is about the same size as your apartment. You notice it\'s in excellent shape on the inside, but wonder why he doesn\'t have much furniture as he leads you into the bedroom, which has a small bed on the floor and some photograph lights on stands spaced around.');
  scene.text('He sets up a video camera on a tripod facing you before he looks up at you. "Would you mind taking off your top now?" he asks as he starts turning on the modelling lights.');
  qspCall(s, 'willpower', 'exhib', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera_no.jpg');
    scene.text('You shake your head. "No, sorry. I shouldn\'t have come here. It was a mistake," you say as you walk past him and head for the front door.');
    scene.text('"Okay. Maybe some other time then…" he says before you walk out the door, closing it behind you.');
    scene.actions([
      { label: 'Leave his house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Start to strip', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/strip1.mp4');
    scene.text('You smile at him and he picks up the video camera and walks around you, filming you as you strip down. Once you\'re topless, he has you move around in various poses. He seems to know what he\'s doing.');
    scene.text('"You seem to know what you\'re doing and have the right stuff. Do you do photography for a living?" you ask.');
    scene.text('He pauses and gives you a slightly sad look. "I used to, long ago. That\'s how I met my wife, God rest her soul. She was a model, one of the first girls I ever worked with."');
    scene.text('He doesn\'t seems to want to talk about it, so you let it drop. "Okay, now strip out of the rest of your clothes, slowly and sexy."');
    qspCall(st, 'arousal', 'flash', 2, 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'exhib', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera_no.jpg');
    scene.text('You shake your head. "No, sorry, this is too much. This was a mistake," you say as you quickly redress. Once fully clothed, you walk past him and head for the front door.');
    scene.text('"Okay. Maybe some other time then…" he says before you walk out the door, closing it behind you.');
    scene.actions([
      { label: 'Leave his house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Finish stripping', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/strip2.mp4');
    scene.text('You start stripping out of the rest of your clothes. At first, you have the instinct to cover yourself up with your hands in front of a stranger, but as he films you, you slowly relax. He gets you to move your hands and start posing for him in various poses.');
    scene.text('As you sit on his bed, he puts the tripod down and sets it up so it will keep filming as he walks over to you, smiles and starts undoing his pants. "How about we make a little homemade erotic nudity?"');
    qspCall(st, 'arousal', 'flash', 2, 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/oldman_camera_no.jpg');
    scene.text('You shake your head. "This is too much. What do you think I am, you old pervert?" you scornfully reply.');
    scene.text('"Sorry, I didn\'t mean anything by it. I was just lonely, and you\'re so pretty…" he says as you quickly redress. Once fully clothed, you walk past him and head for the front door.');
    scene.actions([
      { label: 'Leave his house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stroke his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera2.jpg');
    scene.text('You nod at him and he quickly gets undressed before you take his semi-hard cock in your hand and start stroking it. It doesn\'t take long before he\'s rock-hard in your hand.');
    scene.text('"Oh yeah… That\'s it… Now suck it."');
    qspCall(st, 'arousal', 'hj', 2, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'A Male', 65);
    ((st as any).npc_dick = (st as any).npc_dick ?? {})[String((st as any).npclastgenerated ?? 0)] = 2;
    qspCall(st, 'boyStat', '$npclastgenerated');
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera3.jpg');
    scene.text('You take his fairly average-sized dick into your mouth and start sucking it. You glance over at the camera and see it pointing right at you as you tightly wrap your lips around the shaft of his cock and bop your head back and forth, sucking him off while listening to him moaning in pleasure.');
    scene.text('"Oh yeah…" he groans. "Turn around and get on all fours."');
    qspCall(st, 'arousal', 'bj', 2, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride him', goto: ['pav_park_sex', 'oldman_cowgirl'] },
      { label: 'Get on all fours', goto: ['pav_park_sex', 'oldman_doggy'] },
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

function enterOldmanCowgirl(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera4.jpg');
  scene.text('You stop sucking his dick and look up at him. "I want to ride you instead."');
  scene.text('He chuckles. "That\'s fine by me, girly."');
  scene.text('He lays down on the bed next to you on his back as you crawl over and straddle him. You slowly lower yourself down, guiding his dick into your pussy.');
  scene.text('You feel his cock slide into your slit, letting go of his dick as you lower yourself further and start riding him.');
  qspCall(s, 'arousal', 'vaginal', 3, 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep riding him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera5.jpg');
    scene.text('"Oh god, your pussy is so tight!" he roars and slaps your ass with his hand, encouraging you to ride him harder.');
    scene.text('You ride him hard and fast, listening to his praises of how good you are and how tight your young pussy is for a few minutes.');
    scene.text('"Okay, now turn around. I want to see that sweet little ass of yours as you ride me."');
    qspCall(st, 'arousal', 'vaginal', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera6.jpg');
    scene.text('You get up, feeling his cock slide out of you before you turn around and lower yourself back down, feeling his cock slide back into your wet slit. You feel his hands grab you by the hips and he uses his arms to force you down until you take his cock balls deep inside your pussy.');
    scene.text('After a few minutes, he suddenly pulls you off him and tosses you to the side of the bed before rolling out of the bed and struggling to get to his feet. "I\'m about to cum. Get over here and jerk me off on your face."');
    qspCall(st, 'arousal', 'vaginal', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Jerk him off', goto: ['pav_park_sex', 'oldman_finish'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOldmanDoggy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera7.jpg');
  scene.text('You stop sucking his dick and look up at him before climbing on the bed on all fours with your ass pointed towards him.');
  scene.text('He chuckles. "That\'s a good girly."');
  scene.text('He kneels down behind you and you feel the tip of his dick sliding up and down your slit, making you and it wet with your pussy juices.');
  scene.text('A moment later, he slides his dick into your pussy and slowly starts to fuck you. "Oh god, your pussy is so tight!"');
  qspCall(s, 'arousal', 'vaginal', 3, 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay on all fours', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera8.jpg');
    scene.text('He slides his cock into you until you feel his balls bouncing off your clit. He then starts fucking you at a steady pace, but goes as deep as he can.');
    qspCall(st, 'arousal', 'vaginal', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera9.jpg');
    scene.text('He slaps one of your ass cheeks with one hand as he fucks you. "You have one fine-looking ass to go along with this tight little pussy. I feel so damn lucky!"');
    scene.text('He keeps complimenting you as he spanks and fucks you. He then suddenly pulls out of you and struggles to his feet. "I\'m about to cum. Come over here and jerk me off on your face."');
    qspCall(st, 'arousal', 'vaginal', 3, 'inhibition');
    qspCall(st, 'pain', '1', 'asscheeks', 'spank');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Jerk him off', goto: ['pav_park_sex', 'oldman_finish'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOldmanFinish(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'Old Man', 52);
  qspCall(s, 'boyStat', '$npclastgenerated');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera7.jpg');
  scene.text('You slide off the bed onto your knees in front of him and take his wet dick in your hand before jerking him off.');
  scene.text('It doesn\'t take long until you feel his cum hitting your lips and chin before he pulls away from you. "Stay right there, just like that. Don\'t move."');
  qspCall(s, 'arousal', 'hj', 1, 'inhibition');
  qspCall(s, 'cum_call', 'face', 'Old Man', 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t move', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/walk/day/deep/sex/old_man_camera8.jpg');
    scene.text('You stay still as he walks over and grabs his camera. He lifts it up and walks towards you, filming you on your knees with your face covered in his cum. He walks around you and moves the camera really close to your face.');
    scene.text('After a few minutes, he turns the camera off and puts it aside. "Okay, you can get dressed now."');
    scene.text('By the time you finish getting dressed, so is he. "Thank you, girly, for a wonderful time. I don\'t mean to be rude, but I\'ve got somewhere I need to be."');
    scene.text('He then escorts you to the door and heads out with you. He locks his door, then turns to you and pats your ass. "You\'re a good girl. You made an old man really happy today."');
    qspCall(st, 'arousal', 'flash', 3, 'inhibition');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave his house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEatlera(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  if (((s as any).park ?? 0)?.['girl_eatlera'] >= 1) {
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/girls/lera.jpg');
    scene.text('You bite your lip and look at her inviting pussy before glancing at the other girls; they seem to be encouraging you to do it. As you get down on your knees, Lera pulls her pants and panties off and pulls up her long shirt, lifting up one of her legs and spreading them to give you easy access.');
    scene.text('You lean in and start to lap at her clit and pussy as she moans softly and the other girls whistle and catcall.');
    scene.text('Lera, on the other hand, has her own words of encouragement. "Mmhmm, that\'s right, bitch. Eat my pussy."');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian', 'exhibitionism', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/girls/lera.jpg');
    scene.text('She reaches out her hand and clasps the back of your head, pulling your face against her pussy as she grinds against you.');
    scene.text('"Look at that bitch go! She fucking loves eating pussy!" Lena says.');
    scene.text('Lera seems utterly unaware of what the other girls are saying as she starts moaning louder, gripping your hair tightly and forcing your face against her crotch as hard as she can as she grinds against you.');
    // TODO-QSP: dynamic text: A few minutes later, she lets out a cry and shudders against you, then lets go o...
    scene.text(`A few minutes later, she lets out a cry and shudders against you, then lets go of your head and steps back. "Fuck, that was good. You're great at eating pussy, ${((st as any).pcs_nickname ?? '')}." As she puts her pants back on, she bites her lip and gives you a once over.`);
    scene.text('Lena grabs you by the hair and drags you over to her, where she turns around and bends over.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian', 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Start licking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/girls/lena.jpg');
    scene.text('Lena leans back against your face as you start eating her out. It doesn\'t take long until she\'s soaking wet herself, and you begin to get into it. You can hear the other girls making catcalls and other comments, but you don\'t notice or pay attention to what they say. Instead, you just lose yourself in the moment until Lena starts shuddering and cums really hard on your face.');
    // TODO-QSP: dynamic text: "Look at her. She never cared about the beer, she just loves pussy. She looks li...
    scene.text(`"Look at her. She never cared about the beer, she just loves pussy. She looks like she's about to cum herself," Alyona comments as she lays back with her pants pulled off and her panties pulled aside. "Come on over and give my kitty a tongue bath, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('"Fuck, this is so hot. I\'m already wet just watching," Anushka says as she bites her lower lip and watches you.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian', 'exhibitionism', 'sub');
    scene.actions([
      { label: 'Lick Alyona next', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/girls/alyona.jpg');
    scene.text('As you start licking her slit, Alyona grabs you by the hair and starts rubbing her clit against your face as you lick her. She rubs one out on your face while you lick her before she starts grinding harder against your face; you can hear the others still chatting away, but you don\'t pay attention to anything they say. You just focus on the pussy in front of you.');
    scene.text('Before long, Alyona cries out as she has an orgasm. "Fuck, that was nice. A girl could get used to this."');
    // TODO-QSP: dynamic text: Lena glances over at Alyona. "Maybe we should make this a regular thing? <<$pcs_...
    scene.text(`Lena glances over at Alyona. "Maybe we should make this a regular thing? ${((st as any).pcs_nickname ?? '')} seems to love it." She then turns her head to look at you. "Well? come on, you've got one left."`);
    scene.text('You glance over and see Anuska with her panties off and her skirt hiked up already lying on her back on the picnic table with her legs spread for you, watching you with hungry eyes.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian', 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish off Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/girls/nush.jpg');
    scene.text('You move over, your face already wet with pussy juices. When your tongue touches Anushka\'s pussy, you can feel how soaking wet she is. As soon as you start, she starts moaning loudly. "Oh fuck… Yeah… Just like that, baby."');
    scene.text('"Damn, Nush, you going to bust a nut already?" Lera asks with a laugh.');
    scene.text('"Well, she did have to wait until last," Alyona chimes in. "Got to admit, watching live erotic nudity is kind of hot…"');
    scene.text('You hear Lena and Lera agreeing, but soon block them all out as you concentrate on eating Anushka out. Finally, after only a few minutes more quickly than any other girl, Anushka grabs you by the hair and starts grinding against your face as she has an orgasm.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian', 'exhibitionism', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.text('Once you finish, the other girls are already dressed. Anushka just lays there for a bit with her pussy exposed, basking in the afterglow while the rest of you go back to chatting.');
    scene.text('You clean your face off as best you can before Alyona gets up and slaps Anushka on the leg. "Put your pussy away. We\'ve got to go."');
    scene.text('Anushka slides off the table, pulls her panties on and pulls her skirt down. "Yeah yeah, I know."');
    scene.text('As they head off, saying their goodbyes to all, Lena and Lera leave as well, leaving you behind with nothing but memories and a lot of empty beer bottles.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/girls/lera.jpg');
    scene.text('You bite your lip and look at her inviting pussy before glancing at the other girls; they seem to be encouraging you to do it. As you get down on your knees, Lera pulls her pants and panties off and pulls up her long shirt, lifting up one of her legs and spreading them to give you easy access.');
    scene.text('You lean in and start to lap at her clit and pussy as she moans softly and the other girls whistle and catcall.');
    scene.text('Lera, on the other hand, has her own words of encouragement. "Mmhmm, that\'s right, bitch. Eat my pussy."');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian', 'exhibitionism', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/girls/lera.jpg');
    scene.text('She reaches out her hand and clasps the back of your head, pulling your face against her pussy as she grinds against you.');
    scene.text('"Look at that bitch go! She must really want a fucking beer," Lena says.');
    scene.text('"I think she just likes eating pussy," Alyona adds.');
    scene.text('Anushka snorts. "Oh please, everyone here has been on her knees eating pussy before, so don\'t act like you\'ve never done this."');
    scene.text('"Not for a beer I haven\'t!" Lena replies.');
    scene.text('"Yeah, well… " Anushka trails off, unsure what to say in response.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian', 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/girls/lera.jpg');
    scene.text('Lera seems utterly unaware of what the other girls are saying as she starts moaning louder and grips your hair tightly, forcing your face against her crotch as hard as she can as she grinds against you.');
    // TODO-QSP: dynamic text: A few minutes later, she lets out a cry and shudders against you, then lets go o...
    scene.text(`A few minutes later, she lets out a cry and shudders against you, then lets go of your head and steps back. "Fuck, that was good. You're great at eating pussy, ${((st as any).pcs_nickname ?? '')}" As she puts her pants back on, she bites her lip and gives you a once-over.`);
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian', 'exhibitionism', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.text('You wipe your face off and grab another beer, only to find that there\'s none left. Lena, Anushka and Alyona are all finishing one as you watch.');
    scene.text('"What? You took too long, lez," Lena shrugs with a laugh.');
    scene.text('"Yeah, look at her. She doesn\'t care if there\'s no beer, she just wanted some pussy," Alyona adds.');
    scene.text('"Yeah? Well, she can eat mine next time," Lena replies.');
    scene.text('"When you bring the beer, which is never. You\'re almost as bad as Mooch," Lera tells Lena, and the other girls laugh.');
    scene.text('You all fall back into some banter before everyone decides it\'s time to go.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPressuredForBra(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
  // TODO-QSP: dynamic text: You''re really starting to get wasted as Dan speaks up. "Hey, <<$pcs_nickname>>,...
  scene.text(`You're really starting to get wasted as Dan speaks up. "Hey, ${((s as any).pcs_nickname ?? '')}, what colour is your bra?"`);
  scene.text('You look at him, a little confused. "What?"');
  scene.text('"You were going to show us what colour your bra is," he says as if it were a fact.');
  scene.text('The guys all agree while Pauline offers more helpful advice. "Go on, don\'t be a tease."');
  qspCall(s, 'willpower', 'flash', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A11', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A156', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
    scene.text('You shake your head. You know you didn\'t say that, and don\'t understand why they\'re acting this way. "No, I didn\'t."');
    scene.text('"Yes, you did. Now stop being a tease and show us already!" Dan replies.');
    scene.text('You keep shaking your head. "No, I didn\'t. There\'s no way I\'m going to do that!"');
    scene.text('You see several of them start glaring at you.');
    scene.text('"Then get the fuck out of here before we make you!" Roman snarls. "And don\'t come back, bitch!"');
    scene.text('You\'ve heard the rumors about Roman and don\'t want to find out if they\'re authentic, so you hurry away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Expose your bra', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    (st as any).svetafall = ((st as any).svetafall ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip2.jpg');
    scene.text('You grin, get up in front of everyone and expose your bra for everyone to see. The boys hoot and holler while Pauline records the whole thing on her phone.');
    scene.text('You stand with your bra for several minutes for them, and you can\'t help but smile at how happy it makes them all. Arkadi then speaks up.');
    if (((st as any).grupTipe ?? 0) === 1) {
      (st as any).grp_msg = 'You know, being one of the stuck-up bitches, you\'re much cooler than I expected.';
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        (st as any).grp_msg = 'You know, being one of the brain-dead jocks, you\'re much cooler than I expected.';
      } else {
        (st as any).grp_msg = 'You know, being such a nerd, you\'re much less shy than I expected.';
      }
    }
    // TODO-QSP: dynamic text: "<<$grp_msg>> Not to mention a hell of a lot more fun."
    scene.text(`"${((st as any).grp_msg ?? '')} Not to mention a hell of a lot more fun."`);
    scene.text('The rest all agree and you blush at the compliment as you put your top back on.');
    scene.text('Shortly after, the party is over and everyone starts to go their own way, but Vitek calls out to you as you walk away. "You should really come back and hang out with us again."');
    scene.text('Most of the others agree before they split up and head off.');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub', 'inhibition', 'humiliation');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPressuredForPanties(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
  // TODO-QSP: dynamic text: You''re really starting to get wasted as Dan speaks up. "<<$pcs_nickname>>, what...
  scene.text(`You're really starting to get wasted as Dan speaks up. "${((s as any).pcs_nickname ?? '')}, what colour are your panties?"`);
  scene.text('You look at him, a little confused. "What?"');
  scene.text('"You were going to show us what colour your panties are," he says as if it were a fact.');
  scene.text('The guys all agree while Pauline offers more helpful advice. "Go on, don\'t be a tease."');
  qspCall(s, 'willpower', 'flash', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A11', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A156', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
    scene.text('You shake your head. You know you didn\'t say that, and don\'t understand why they\'re acting this way. "No, I didn\'t."');
    scene.text('"Yes, you did. Now stop being a tease and show us already!" Dan replies.');
    scene.text('You keep shaking your head. "No, I didn\'t. There\'s no way I\'m going to do that."');
    scene.text('You see several of them start glaring at you.');
    scene.text('"Then get the fuck out of here before we make you!" Roman snarls. "And don\'t come back, bitch!"');
    scene.text('You\'ve heard the rumors about Roman and don\'t want to find out if they\'re authentic, so you hurry away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Expose your panties', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 2);
    (st as any).svetafall = ((st as any).svetafall ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip3.jpg');
    scene.text('You grin and get up in front of everyone and expose your panties for all to see, turning around to give them a complete view. The boys hoot and holler while Pauline records the whole thing on her phone.');
    scene.text('You stand with your panties exposed for several minutes for them, and you can\'t help but smile at how happy it makes them all. Arkadi then speaks up.');
    if (((st as any).grupTipe ?? 0) === 1) {
      (st as any).grp_msg = 'You know, being one of the stuck-up bitches, you\'re much cooler than I expected.';
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        (st as any).grp_msg = 'You know, being one of the brain-dead jocks, you\'re much cooler than I expected.';
      } else {
        (st as any).grp_msg = 'You know, being such a nerd, you\'re much less shy than I expected.';
      }
    }
    // TODO-QSP: dynamic text: "<<$grp_msg>> Not to mention a hell of a lot more fun."
    scene.text(`"${((st as any).grp_msg ?? '')} Not to mention a hell of a lot more fun."`);
    scene.text('The rest all agree and you blush at the compliment as you put your bottoms back on.');
    scene.text('Shortly after, the party is over and everyone starts to go their own way, but Vitek calls out to you as you begin to walk away. "You should really come back and hang out with us again."');
    scene.text('Most of the others agree before they split up and head off.');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub', 'inhibition', 'humiliation');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPressuredForTits(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
  // TODO-QSP: dynamic text: You''re really starting to get wasted now. As you do, Dan speaks up. "Hey, <<$pc...
  scene.text(`You're really starting to get wasted now. As you do, Dan speaks up. "Hey, ${((s as any).pcs_nickname ?? '')}, show us your tits."`);
  scene.text('You look at him, a little confused. "What?"');
  scene.text('"You were going to show us your tits," Dan says as if it were a fact.');
  scene.text('The guys all agree while Pauline offers more helpful advice. "Yeah, you said you had nice tits. So go on and prove it."');
  qspCall(s, 'willpower', 'flash', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A11', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A156', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
    scene.text('You shake your head. You know you didn\'t say that, and don\'t understand why they\'re acting this way. "No, I didn\'t."');
    scene.text('"Yes, you did. Now stop being a tease and show us already!" Dan replies.');
    scene.text('You keep shaking your head. "No, I didn\'t. There\'s no way I\'m going to do that."');
    scene.text('You see several of them start glaring at you.');
    scene.text('"Then get the fuck out of here before we make you!" Roman snarls. "And don\'t come back, bitch!"');
    scene.text('You\'ve heard the rumors about Roman and don\'t want to find out if they\'re authentic, so you hurry away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Expose your tits', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 3);
    (st as any).svetafall = ((st as any).svetafall ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip4.jpg');
    scene.text('You grin, get up in front of everyone and expose your breasts for all to see. The boys hoot and holler while Pauline records the whole thing on her phone.');
    scene.text('You kneel with your breasts out for several minutes for them, and you can\'t help but smile at how happy it makes them all. Arkadi then speaks up.');
    if (((st as any).grupTipe ?? 0) === 1) {
      (st as any).grp_msg = 'You have nice tits for one of the stuck-up princesses.';
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        (st as any).grp_msg = 'You have nice tits for one of the juiced-up jocks. You\'re a lot cooler than I was expecting.';
      } else {
        (st as any).grp_msg = 'You have nice tits for one of the nerds. You should wear tighter clothes and show them off more.';
      }
    }
    // TODO-QSP: dynamic text: "<<$grp_msg>> Not to mention a hell of a lot more fun."
    scene.text(`"${((st as any).grp_msg ?? '')} Not to mention a hell of a lot more fun."`);
    scene.text('The rest all agree and you blush at the compliment as you put your top back on.');
    scene.text('Shortly after, the party is over and everyone starts to go their own way, but Vitek calls out to you as you begin to walk away. "You should really come back and hang out with us again."');
    scene.text('Most of the others agree before they split up and head off.');
    qspCall(st, 'arousal', 'flash', 5, 'sub', 'inhibition', 'humiliation');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPressuredForPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
  // TODO-QSP: dynamic text: You''re really starting to get wasted as Dan speaks up. "Hey, <<$pcs_nickname>>,...
  scene.text(`You're really starting to get wasted as Dan speaks up. "Hey, ${((s as any).pcs_nickname ?? '')}, show us your pussy."`);
  scene.text('You look at him, a little confused. "What?"');
  scene.text('"You were going to show us your pussy," he says as if it were a fact.');
  scene.text('The guys all agree while Pauline offers more helpful advice. "Yeah, you said you had a pretty pussy, so go on and prove it."');
  qspCall(s, 'willpower', 'flash', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A11', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A156', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
    scene.text('You shake your head. You know you didn\'t say that, and don\'t understand why they\'re acting this way. "No, I didn\'t."');
    scene.text('"Yes, you did. Stop being such a tease and show us already!" Dan replies.');
    scene.text('You keep shaking your head. "No, I didn\'t. There\'s no way I\'m going to do that."');
    scene.text('You see several of them start glaring at you.');
    scene.text('"Then get the fuck out of here before we make you!" Roman snarls. "And don\'t come back, bitch!"');
    scene.text('You\'ve heard the rumors about Roman and don\'t want to find out if they\'re authentic, so you hurry away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Expose your pussy', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 4);
    (st as any).svetafall = ((st as any).svetafall ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip5.jpg');
    scene.text('You grin and get up before everyone, stripping down and exposing your pussy for all to see. The boys hoot and holler while Pauline records the whole thing on her phone.');
    scene.text('You stand with your pussy exposed for several minutes for them, and you can\'t help but smile at how happy it makes them all. Arkadi then speaks up.');
    if (((st as any).grupTipe ?? 0) === 1) {
      (st as any).grp_msg = 'For one of the stuck-up queens, you\'re a lot cooler than I expected.';
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        (st as any).grp_msg = 'For one of the jocks, you\'re much cooler than I was expecting.';
      } else {
        (st as any).grp_msg = 'For one of the nerds, you\'re a lot cooler than I was expecting.';
      }
    }
    // TODO-QSP: dynamic text: "You have a real fuckable looking pussy. <<$grp_msg>> Not to mention a hell of a...
    scene.text(`"You have a real fuckable looking pussy. ${((st as any).grp_msg ?? '')} Not to mention a hell of a lot more fun."`);
    scene.text('The rest all agree and you blush at the compliment as you put your top back on.');
    scene.text('Shortly after, the party is over and everyone starts to go their own way, but Vitek calls out to you as you begin to walk away. "You should really come back and hang out with us again."');
    scene.text('Most of the others agree before they split up and head off.');
    qspCall(st, 'arousal', 'flash', 5, 'sub', 'inhibition', 'humiliation');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPressuredForBlowjob(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
  scene.text('Vitek gets up and walks over to you. "Your lips are gorgeous too… I bet you like to suck on things."');
  scene.text('You slap his chest indignantly. "Vitek! Have you lost your mind?!"');
  scene.text('He raises his hands in defence and smirks. "Whoa, calm down! Weren\'t you just saying how you give the best blowjobs?"');
  scene.text('You turn red and mutter under your breath. You can\'t remember; you\'re pretty drunk, but you don\'t think you said that.');
  scene.text('Pauline nods as she pulls out her phone. "You did, but I personally don\'t buy it. I doubt you\'ve even sucked a dick before."');
  scene.text('"Of course I know how to give good blowjobs!" you reply before stopping when you realize what you just said.');
  scene.text('"Oh really?" Vitek smirks. "Then get down on your knees and suck my dick, then we\'ll know if you\'re any good."');
  scene.text('As he talks, he unzips his pants and pulls out his dick.');
  qspCall(s, 'willpower', 'bj', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A11', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A156', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
    scene.text('You shake your head. You know you didn\'t say that, and don\'t understand why they\'re acting this way. "No, I\'m not sucking your dick, especially not in front of everyone! I just wanted to hang out and get to know you guys."');
    scene.text('You see several of them start glaring at you.');
    scene.text('"Then get the fuck out of here before we rape your ass!" Roman snarls. "And don\'t come back, bitch!"');
    scene.text('You\'ve heard the rumors about Roman and don\'t want to find out if they\'re authentic, so you hurry away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 10);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    (st as any).svetafall = ((st as any).svetafall ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (4);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/bj/bj1.jpg');
    scene.text('You do as you\'re told and get down on your knees before you open your mouth, take Vitek\'s cock into it and start sucking it. You stroke his shaft with one hand as you bob your head on his dick.');
    scene.text('You can hear the others catcalling, hollering or making rude remarks, but you do your best to ignore the fact you have an audience. It\'s hard, especially when you hear Pauline calling your name.');
    qspCall(st, 'arousal', 'bj', 2, 'sub', 'inhibition', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Look at Pauline', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/bj/bj2.jpg');
    scene.text('You look over at Pauline and see her squatting down in front of you, her phone in hand, recording the whole thing. "I have to admit, you look like you know what you\'re doing." She glances up at Vitek as you keep sucking his dick. "So, how good is she?"');
    scene.text('Vitek chuckles. "Pretty good. This definitely isn\'t her first time."');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'inhibition', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/bj/bj3.jpg');
    scene.text('You try to ignore that you\'re being filmed, but every time you start to look away, Pauline reminds you to look at her. Vitek also often reaches down and turns your head so you\'re looking at the camera.');
    qspCall(st, 'arousal', 'bj', 2, 'sub', 'inhibition', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/bj/bj4.jpg');
    scene.text('Vitek suddenly moans and holds your head as he pumps his cum into your mouth before he pulls his dick out and another spurt of cum lands on your chin. "That\'s it, show the camera. Open your mouth."');
    scene.text('You open your mouth to show it full of his cum. "That\'s a good girl. Now swallow it."');
    scene.text('You do as you\'re told and swallow it down, then open your mouth again. Pauline gets up close to get a closeup of the cum still on your chin.');
    scene.text('"We were wrong. You\'re a pretty good cock sucker after all," Vitek says with a laugh before they start breaking up and leaving.');
    scene.text('Pauline is the last one to go as she keeps filming you with a smirk until she stops and walks away, leaving you alone with cum on your face, wondering what you just did and how this might not have been the smartest thing you\'ve ever done.');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'inhibition', 'humiliation');
    qspCall(st, 'cum_call', 'mouth', 'A9', 1);
    qspCall(st, 'cum_call', 'face', 'A9', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
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

function enterPressuredForOralGb(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
  scene.text('Vitek gets up and walks over to you. "Since we know you love sucking cock, how about you suck mine again?"');
  scene.text('You turn red and mutter. "I…" You don\'t know what to say.');
  scene.text('Pauline nods as she pulls out her phone and starts recording you. "You sure look liked you loved it last time. Go on and get back down on your knees again."');
  scene.text('The rest agree as Vitek smirks. "Come on, get down on your knees and suck my dick. We all know you want to."');
  scene.text('As he talks, he unzips his pants and pulls out his dick.');
  qspCall(s, 'willpower', 'bj', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A11', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A156', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
    scene.text('You shake your head. You know you didn\'t say that, and don\'t understand why they\'re acting this way. "No, I\'m not sucking your dick again, especially not in front of everyone!"');
    scene.text('"I told you she was a prude," Dan replies. "She doesn\'t want to party with us. She just wants our free beer and gives nothing in return."');
    scene.text('You keep shaking your head. "I just wanted to hang out and get to know you guys."');
    scene.text('You see several of them start glaring at you.');
    scene.text('"Then get the fuck out of here before we rape your ass!" Roman snarls. "And don\'t come back, bitch!"');
    scene.text('You\'ve heard the rumors about Roman and don\'t want to find out if they\'re authentic, so you hurry away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 50);
    (st as any).svetafall = ((st as any).svetafall ?? 0) + (1);
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    qspCall(st, 'npcStat', 'A9');
    qspCall(st, 'npcStat', 'A10', 1);
    qspCall(st, 'npcStat', 'A11', 2);
    qspCall(st, 'npcStat', 'A155', 3);
    qspCall(st, 'npcStat', 'A156', 4);
    qspCall(st, 'npcStat', 'A157', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/blowbang/blowbang1.jpg');
    scene.text('You get down on your knees and start to suck Vitek off again. Next thing you know, all the guys are around you with your dicks out. You don\'t know what to do, but with all of them encouraging you, you start jerking them off.');
    qspCall(st, 'arousal', 'bj', 2, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Look at Pauline', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/blowbang/blowbang2.jpg');
    scene.text('"Look at the camera," Pauline says and you look up at her as you take turns jerking all the guys off and sucking their dicks.');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck each of them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/blowbang/blowbang3.jpg');
    scene.text('You continue jerking their dicks and sucking each one in turn as the guys all compliment your skills.');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Mouthful', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/blowbang/blowbang4.jpg');
    scene.text('While sucking Vasily\'s dick, you suddenly feel his cock twitch before he starts pumping his cum into your mouth. He holds onto the back of your head so you can\'t pull away, filling your mouth with his seed.');
    scene.text('Once he finishes, he wipes the tip of his dick against your clothes and walks away. Before you can even say anything, another dick is shoved in your mouth.');
    scene.text('"Open your mouth, bitch!" Roman suddenly barks.');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'cum_call', 'mouth', (((st as any).npcID ?? 0)?.[2] ?? 0), 1);
    qspCall(st, 'cum_call', 'clothes', (((st as any).npcID ?? 0)?.[2] ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/blowbang/blowbang5.jpg');
    scene.text('He jerks off, shooting his cum in your mouth as well. This starts a chain reaction, and soon the other guys are all around you, jerking their dicks before they start shooting their cum all over your face.');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-1), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'group', 'gangbang');
    qspCall(st, 'cum_call', 'mouth', (((st as any).npcID ?? 0)?.[5] ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Covered', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/blowbang/blowbang6.jpg');
    scene.text('Before you know it, your face and clothes are covered in cum, so much so you can\'t even open your eyes. Once the last drops of cum land on your face, you wipe your eyes and see everyone walking away, leaving you on your knees with a face covered in their cum.');
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[0] ?? 0), 1);
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[1] ?? 0), 1);
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[3] ?? 0), 1);
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[4] ?? 0), 1);
    qspCall(st, 'cum_call', 'clothes', (((st as any).npcID ?? 0)?.[0] ?? 0), 1);
    qspCall(st, 'cum_call', 'clothes', (((st as any).npcID ?? 0)?.[1] ?? 0), 1);
    qspCall(st, 'cum_call', 'clothes', (((st as any).npcID ?? 0)?.[3] ?? 0), 1);
    qspCall(st, 'cum_call', 'clothes', (((st as any).npcID ?? 0)?.[4] ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
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

function enterPressuredForGangbang(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
  scene.text('Vitek gets up and walks over to you. "Since we know you love cock so much, how about you get naked so I can fuck you?"');
  scene.text('You turn bright red and mutter. "I…" You don\'t know what to say.');
  scene.text('Pauline nods as she pulls out her phone and starts recording you. "You sure look liked you loved it last time. Go on and show us how good of a fuck you are."');
  scene.text('The rest agree as Vitek smirks. "Come on, what do you say? We all know you want to."');
  scene.text('As he talks, he unzips his pants and pulls out his dick.');
  qspCall(s, 'willpower', 'gangbang', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A9', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A10', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A11', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A24', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A155', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A156', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A157', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/fall_strip1.jpg');
    scene.text('You shake your head. You know you didn\'t say that, and don\'t understand why they\'re acting this way. "No, I\'m not letting you all fuck me while Pauline records it!"');
    scene.text('"I told you she was just a blue-balling tease!" Dan replies and the rest all agree with him.');
    scene.text('You keep shaking your head. "I just wanted to hang out and get to know you guys."');
    scene.text('You see several of them start glaring at you before Roman says "I say we just fuck the bitch regardless of what she wants." You\'ve heard the rumors about Roman and don\'t want to find out if they\'re true. Lavrenti looks uneasy while the rest seem to be debating it, so you decide you don\'t want to wait for them to make up their minds and quickly run away.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 100);
    (st as any).svetafall = 6;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A24', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A155', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A156', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A157', 1);
    qspCall(st, 'npcStat', 'A9');
    qspCall(st, 'npcStat', 'A10', 1);
    qspCall(st, 'npcStat', 'A11', 2);
    qspCall(st, 'npcStat', 'A155', 3);
    qspCall(st, 'npcStat', 'A156', 4);
    qspCall(st, 'npcStat', 'A157', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang1.jpg');
    scene.text('You nod your head before you feel many hands roughly grabbing you, manhandling you as they roughly pull all your clothes off. Before long, you find yourself completely naked, surrounded by the guys with their dicks out.');
    scene.text('You start to say something, but as soon as you open your mouth, a dick is shoved in it.');
    scene.text('"Look at the camera!" Pauline smirks. "We\'re about to make you a star!"');
    qspCall(st, 'arousal', 'foreplay', 2, 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Look at Pauline', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang2.jpg');
    scene.text('You look up at her as you take turns jerking all the guys off and sucking their dicks.');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck each of them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang3.jpg');
    scene.text('You suck each of them off in turn while jerking off two more simultaneously as Pauline keeps recording and the guys keep encouraging you.');
    scene.text('You\'re soon lost in the moment and no longer thinking about what you\'re doing, but your moment of bliss is soon interrupted by Roman. "Come on, she\'s got more than one hole."');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'hj', (-2), (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang4.jpg');
    // TODO-QSP: dynamic text: You''re pushed down on all fours and Vitek shoves his dick back in your mouth be...
    scene.text(`You're pushed down on all fours and Vitek shoves his dick back in your mouth before you feel a ${(((st as any).dick_length ?? 0)?.[4] ?? '')}cm ${(((st as any).dick_girth ?? 0)?.[4] ?? '')} dick being shoved in your wet pussy.`);
    scene.text('"Damn, this bitch is sopping wet already," Arkadi states.');
    scene.text('Vitek speaks up next. "Alright, move. My turn with this slut."');
    scene.text('He has barely pulled his dick out of your mouth when Dan shoves his dick in.');
    qspCall(st, 'arousal', 'bj', 3, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-3), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep getting fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang5.jpg');
    // TODO-QSP: dynamic text: You feel a dick being pulled out of you, only to have a <<dick_length[0]>>cm <<$...
    scene.text(`You feel a dick being pulled out of you, only to have a ${(((st as any).dick_length ?? 0)?.[0] ?? '')}cm ${(((st as any).dick_girth ?? 0)?.[0] ?? '')} cock shoved back in. You keep sucking dick as you're roughly getting fucked - the guys only treat you as a warm wet hole to fuck for their pleasure.`);
    qspCall(st, 'arousal', 'vaginal', 3, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', (-3), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let them take their turns', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang6.jpg');
    // TODO-QSP: dynamic text: Dan is the next one to take his turn fucking you with his <<dick_length[1]>>cm <...
    scene.text(`Dan is the next one to take his turn fucking you with his ${(((st as any).dick_length ?? 0)?.[1] ?? '')}cm ${(((st as any).dick_girth ?? 0)?.[1] ?? '')} dick while you suck off Lavrenti.`);
    scene.text('Shortly after, Lavrenti is taking his turn fucking you while you suck off Vasily before he switches places and starts to fuck you while you suck off Roman.');
    qspCall(st, 'arousal', 'vaginal', 10, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', (-10), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Roman\'s turn', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang7.jpg');
    scene.text('"My turn," Roman says as he moves behind you and Vitek\'s dick takes his place in your mouth. "God damn, look at that pussy gaping. It looks like a wet-bitten-off burrito. Fuck that."');
    // TODO-QSP: dynamic text: The next thing you feel is spit between your cheeks, and then the tip of a dick ...
    scene.text(`The next thing you feel is spit between your cheeks, and then the tip of a dick shoved against your asshole before Roman forces his ${(((st as any).dick_length ?? 0)?.[5] ?? '')}cm ${(((st as any).dick_girth ?? 0)?.[5] ?? '')} cock into your ass, making you groan loudly and try and pull away, but with Vitek in front of you, you have nowhere to go. You can hear several boys laughing as you try and pull away.`);
    scene.text('"Oh yeah, at least her ass is still tight!" Roman says as he forces his dick balls deep inside you before he starts hammering your ass as hard and fast as he can. Pauline walks over and you hear and feel her spit in the crack of your ass, somewhat lubing you up.');
    qspCall(st, 'arousal', 'anal', 3, (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', (-3), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'They take turns on your ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang8.jpg');
    scene.text('Vitek pulls his dick out of your mouth. "I want a piece of that ass."');
    scene.text('He gets up, moves around behind you, and plunges his dick into your sore and gaping ass. He then hammers away at it as the others line up to take a turn with your ass.');
    // TODO-QSP: dynamic text: Next up is Vasily, who plunges his <<dick[2]>>cm <<$dick_girth[2]>> dick balls-d...
    scene.text(`Next up is Vasily, who plunges his ${(((st as any).dick ?? 0)?.[2] ?? '')}cm ${(((st as any).dick_girth ?? 0)?.[2] ?? '')} dick balls-deep into your ass and starts hammering away.`);
    qspCall(st, 'arousal', 'anal', 5, (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang9.jpg');
    scene.text('One after another takes their turn fucking your ass raw, with Lavrenti up last. He spits on your ass and is a lot more slow and gentle, but the other guys are soon giving him grief and he starts pounding your ass balls deep.');
    scene.text('Roman once again speaks up speaking up in annoyance. "Fuck, I can\'t wait anymore! She has two more holes."');
    qspCall(st, 'arousal', 'anal', 5, (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get filled up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang10.jpg');
    scene.text('He crawls under you and slides his dick inside your pussy, while someone else shoves his cock up your ass. Finally, a dick is shoved in your mouth.');
    scene.text('You\'re fucked like this for several minutes before they change places. After that, you lose track of who is fucking you in which hole.');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'It doesn\'t end', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupdpasi1.0.jpg');
    scene.text('Dicks keep sliding in and out of your holes before you start hearing some of them grunting.');
    scene.text('"On your knees, slut!" Vitek barks.');
    scene.text('You feel all the dicks slide out of you and get on your knees, exhausted and sore all over.');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'bj', 1, (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', (-1), (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[0] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[1] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[2] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[3] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[4] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'anal', (-1), (((st as any).npcID ?? 0)?.[5] ?? 0), 'sub', 'inhibition', 'humiliation', 'group', 'gangbang');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Kneel', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang12.jpg');
    scene.text('Once you\'re on your knees, the boys crowd around you, jerking off in your face and moving aside as one after another cums on your face. It doesn\'t take long until your face is covered in the cum of six boys.');
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[0] ?? 0), 1);
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[1] ?? 0), 1);
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[2] ?? 0), 1);
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[3] ?? 0), 1);
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[4] ?? 0), 1);
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[5] ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Covered', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/sveta_fall/gangbang/gangbang13.jpg');
    // TODO-QSP: dynamic text: Once they''re all finished, you hear Pauline speaking. "Give us a smile. This is...
    scene.text(`Once they're all finished, you hear Pauline speaking. "Give us a smile. This is going to make you famous. Just wait until all our classmates see the adventures of ${((st as any).pcs_nickname ?? '')} the slut."`);
    scene.text('You realize, with horror, that she\'s going to really do it. You beg her not to, but all she does is laugh and walk away. The boys join in laughing, all but Lavrenti, who looks like he regrets what happened, but doesn\'t say anything.');
    scene.text('You sit on your heels with your face covered in layers of cum as you watch everyone walk away, knowing you\'ve just ruined your life.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
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
  } },
  ]);
  scene.build();
}

function enterRadomirWalk(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/walk_rad.jpg');
  scene.text('As you walk along, Radomir talks and, for once, is relatively charming while talking about a variety of topics, not just himself or his music. He often makes compliments about how pretty you are as you walk.');
  scene.text('When you come out into a field, you think you\'ve actually left the park at this point as he stops and looks around. "It can be peaceful to come to a place out in the open, with no people, no buildings, no noise."');
  scene.text('You look around and admit that it\'s very peaceful, with no one and nothing around. "Yeah, it is," you say in agreement.');
  scene.text('He looks over at you and grins. "I can think of no better place to make love to a beautiful girl. So how about you get down on your knees?" he says as his hands push down your shoulders, forcing you down to your knees.');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A154', (-5));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/walk/walk_day.jpg');
    scene.text('He\'s stronger than you would have guessed from his build, but you manage to pull away from him. "What the fuck, Rad?"');
    scene.text('He looks annoyed. "What the fuck? If you didn\'t want to fuck, why did you come out here with me?"');
    scene.text('You sigh. Like most boys, he only thinks about one thing when it comes to girls. "That\'s a good question. I thought we could just hang out and talk, but I guess not."');
    scene.text('"Pfft, whatever. Look, we were already hanging out and talking back there. Now I want a little action," he says as he steps closer to you again and puts his hands on your shoulders, trying to push you back down on your knees.');
    scene.text('You pull away again and take several steps back. "No! I said no!"');
    scene.text('He gives you a disgusted look. "Whatever! Fucking tease…"');
    scene.text('He then turns and walks away, leaving you alone in the field.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A154');
    qspCall(st, 'fame', 'pav', 'sex', 3);
    qspCall(st, 'npc_relationship', 'modify', 'A154', 1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (4);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/park/radomir1.jpg');
    scene.text('You let him push you down to your knees, and he paws at your top until your breasts are exposed. You know what he wants, so you start undoing his pants. Once you have the belt undone and unbuttoned his pants, you pull his flaccid dick out and start sucking on it.');
    scene.text('You feel it quickly get hard in your mouth as you keep sucking on it.');
    scene.text('"Oooh yeah, that\'s it, baby," he groans. "Suck my big cock."');
    qspCall(st, 'arousal', 'bj', 2, 'sub', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/park/radomir2.jpg');
    scene.text('"Damn, you\'re a good little cock sucker," he says between groans.');
    scene.text('You don\'t respond to his comment. Instead, you focus on your task of sucking his dick, taking him further into your mouth until you start to gag. You stay where it\'s comfortable for you as you bob your head on his cock.');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/park/radomir3.jpg');
    // TODO-QSP: dynamic text: You suddenly feel his hand on the back of your head and the next thing you know,...
    scene.text(`You suddenly feel his hand on the back of your head and the next thing you know, he forces your head down. His ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick slides down your throat, gagging you. From that moment on, he keeps his hand in place for the next few minutes, forcing your head all the way down. "Ah fuck yeah… Now that's how you suck cock!"`);
    scene.text('After a few minutes that feel much longer, he grabs you by the hair and pulls your head back far enough that his cock leaves your mouth.');
    scene.text('You feel drool from your mouth running down your chin as you gasp for breath. As you recover, he quickly and roughly strips you out of your clothes before he manhandles you onto all fours.');
    scene.text('"Now that\'s what I\'m talking about. Look at that sweet little ass!"');
    qspCall(st, 'arousal', 'bj', 2, 'sub', 'inhibition', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'On all fours', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/park/radomir4.jpg');
    scene.text('You feel his spit hit your asshole and he rubs it in with the tip of his dick that is wet from your slobber.');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.text('You quickly grab your purse as you know what\'s about to happen. You quickly dig out your lube and pass it back to him. You swear you hear him sigh before he squirts some on your ass, but not as much as you would prefer.');
    }
    scene.text('Seconds later, you feel the pressure of his dick pressing against your asshole until you feel the head pop into you. You let out a grunt and he lets out a moan.');
    scene.text('"Oh fuck yeah, I love tearing up tight little asses."');
    scene.text('He quickly shoves his dick further and starts fucking you hard and fast.');
    qspCall(st, 'arousal', 'anal_finger', (-3), 'lube');
    qspCall(st, 'arousal', 'anal', 3, 'sub', 'inhibition', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take it balls deep', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/park/radomir5.jpg');
    scene.text('He doesn\'t waste any time and shoves his dick deep into your ass, his balls slapping against your wet pussy with each thrust. Any time you start to sit up, he shoves you back down with your head on the ground.');
    scene.text('"Fuck yeah… Take my cock… You little fucking slut!"');
    qspCall(st, 'arousal', 'anal', 2, 'sub', 'inhibition', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get your ass pounded', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/park/radomir6.jpg');
    scene.text('He pounds your ass without mercy. "Yeah, you love this, don\'t you slut? Dirty little whore loves having her ass ripped up!"');
    scene.text('This goes on for several more minutes before he suddenly pulls out of you and grabs you by the hair.');
    qspCall(st, 'arousal', 'anal', 3, 'sub', 'inhibition', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/park/radomir7.jpg');
    scene.text('He pulls you up by the hair until you kneel and turns your head just in time for his cum to hit you right in the face. After several spurts of cum land on you, he lets go of you and steps back to take a deep breath. He looks flushed and out of breath, and you notice the sweat running down him. It seems he worked himself out fucking you.');
    scene.text('He smiles at you. "I needed that. You\'re a pretty good fuck," he says before he starts getting dressed while talking about other girls he\'s fucked and how you stack up. It seems you\'re above average in his mind, top five or six, according to him.');
    scene.text('You start to wipe off the cum, but he stops you. "No, leave it. You look good." You leave it and start getting dressed as he looks over at you. "I\'ll call you sometime. Maybe we can hang out again?"');
    scene.text('He then walks away humming a tune, leaving you to finish getting dressed with his cum still on your face.');
    qspCall(st, 'cum_call', 'face', 'A154', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
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

function enterValNushWalk(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  qspCall(s, 'npcStat', 'A158');
  qspCall(s, 'npcStat', 'A144', 'a');
  scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush1.jpg');
  scene.text('The three of you walk for a while, discussing what you could do before Valentin speaks up. "Oh, I know the perfect spot! Come on."');
  scene.text('His arms are wrapped around your shoulders as he sets off, guiding the two of you along. Anushka doesn\'t seem that curious. Maybe she already knows? Regardless, you walk and talk about various things before you come to a slight rise. As you get to the top, you find yourself looking over the lake.');
  scene.text('"Great, isn\'t it?" Valentin says as he lets go of the two of you, walks over to the edge, and takes a seat on a rock with a good view of the lake. Anushka follows suit and sits on his left, leaving you to sit on the right of Valentin.');
  scene.text('You take your seat and the three of you go back to talking for a while, Valentin talking about wanting to take a road trip across the country or maybe even across Europe or the US someday. Anushka agrees that she would also like to travel the world.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time to go', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush2.jpg');
    scene.text('After a while, you just sit quietly as Valentin and Anushka speak.');
    scene.text('"Well, guess it\'s time to go, girls," Valentin says as he stands up, offering a hand to help each of you as he looks at Anushka\'s breasts. "You cold or just turned on?"');
    scene.text('She glances down, and you can also see the faint outlines of her nipples. "As if you could turn me on," she says in a sarcastic, yet teasing tone.');
    scene.text('He laughs at her comment, then grabs her by her waistband and pulls her close to him. "Let\'s see then."');
    scene.text('His hand snakes down the front of her shorts and her breath suddenly catches as she bites her lower lip and moaning softly.');
    scene.text('"Not turned on my ass. You\'re so fucking wet, I\'m surprised the rock doesn\'t have a wet spot where you were sitting."');
    scene.text('By the motion of his hand in her shorts, you can tell he\'s finger-banging her as she starts moaning louder. "Oh fuck… OH… Don\'t stop… Yeah… Just like that."');
    scene.text('As you watch, Valentin turns to look at you and leans his face in close to you.');
    qspCall(st, 'arousal', 'erotic_nudity', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'kiss', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Don\'t kiss him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t kiss him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A158', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/walk/walk_day.jpg');
    scene.text('You pull away from him, stepping back out of reach as Anushka rolls her eyes at you while Valentin shrugs.');
    scene.text('"Suit yourself, but if you don\'t mind…" he says, indicating you should leave the two of them in peace. Anushka is no longer paying attention to you; instead, she pulls Valentin\'s hard dick out of his pants and starts stroking it.');
    scene.text('You sigh and decide to leave the lovers in peace, making your way down to the lake. Once there, you glance up, but can\'t see them.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_lake', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss Valentin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush3.jpg');
    scene.text('As you kiss him, Anushka stops moaning and you feel his hands on your face as he gives you a soft but passionate kiss.');
    scene.text('After a minute or so, he breaks the kiss. "Now kiss Nush," he says while looking you in the eyes.');
    qspCall(st, 'arousal', 'kiss', 1, ((st as any).npcID ?? 0), 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Don\'t kiss her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-5));
    qspCall(st, 'npc_relationship', 'modify', 'A158', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/walk/walk_day.jpg');
    scene.text('You pull away from the kiss with Anushka and shake your head. Anushka gives you a bit of a glare. "Whatever. Why don\'t you go find some people you want to hang out with?"');
    scene.text('You start to say you didn\'t mean it like that, but Valentin talks over you and gives you a displeased look. "You should go."');
    scene.text('You can tell anything you say or do right now will just make things worse, so you decide to leave the lovers in peace and make your way down to the lake. Once there, you glance up, but can\'t really see them.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_lake', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss Anushka', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush4.jpg');
    scene.text('As you turn to face Anushka, you feel Valentin\'s hand on the small of your back pushing you towards Anushka and your lips meet directly in front of Valentin. As her soft lips meet yours, the kiss becomes much more passionate, and you soon find her tongue exploring your mouth.');
    scene.text('"There are few more beautiful things than watching two hot girls make out," Valentin says. However, you\'re barely paying attention to anything but kissing Anushka.');
    scene.text('When she finally breaks the kiss with you, you notice Valentin has his dick out and is stroking it. Anushka turns to kiss him while using one hand to encourage you to squat down in front of him.');
    qspCall(st, 'arousal', 'kiss', 1, ((st as any).npcID1 ?? 0), 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A144', (-1));
    qspCall(st, 'npc_relationship', 'modify', 'A158', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/walk/walk_day.jpg');
    scene.text('You pull away from them and shake your head as Anushka breaks her kiss with Valentin long enough to roll her eyes at you while Valentin shrugs.');
    scene.text('"Suit yourself, but if you don\'t mind…" he says, indicating you should leave the two of them in peace.');
    scene.text('You sigh and decide to leave the lovers in peace, making your way down to the lake. Once there, you glance up, but can\'t really see them.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_lake', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck Valentin\'s dick', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A158', 1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (4);
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush5.jpg');
    scene.text('You squat down in front of Valentin, take his cock into your mouth, and start sucking it. He is already rock-hard before you start. Anushka kisses him and starts taking his clothes off as you keep sucking his dick before she squats down next to you and Valentin pulls you back up.');
    qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Kiss Valentin again', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush6.jpg');
    scene.text('Anushka starts sucking his dick while Valentin starts kissing you and pulling your clothes off until you feel the air kiss your nipples. As you keep kissing him, you can feel small soft hands stripping you from the waist down, then pulling you down until you\'re squatting in front of his cock again. You glance at her and see she\'s already gotten herself naked.');
    qspCall(st, 'arousal', 'kiss', 1, ((st as any).npcID ?? 0), 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his dick again', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush7.jpg');
    scene.text('Valentin reaches down and points his dick at you. Opening your mouth, you start sucking it.');
    scene.text('"Look at her go! She must love sucking cock," you hear Anushka say and spot her watching you out of the corner of your eye.');
    scene.text('She looks really turned on as Valentin pulls his dick out of your mouth and points it at her. She immediately starts sucking it.');
    qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'inhibition');
    scene.actions([
      { label: 'Watch Anushka suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush8.jpg');
    scene.text('Valentin has one of the biggest dicks you\'ve ever seen, but she\'s able to take it deep into her throat. She gags a little, but otherwise smoothly deepthroats him, causing him to moan.');
    // TODO-QSP: dynamic text: "OH… fuck Nush… Okay, I can''t wait anymore!" He points over at the rock he was ...
    scene.text(`"OH… fuck Nush… Okay, I can't wait anymore!" He points over at the rock he was sitting on. "Sit there, ${((st as any).pcs_nickname ?? '')}."`);
    qspCall(st, 'arousal', 'erotic_nudity', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Sit down', goto: ['pav_park_sex', 'nush_fucked'] },
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

function enterNushFucked(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  if (((s as any).npcID ?? 0) !== 'A158') {
    qspCall(s, 'npcStat', 'A158');
    // TODO-QSP: !! Valentin
  }
  if (((s as any).npcID ?? 0) !== 'A144') {
    qspCall(s, 'npcStat', 'A144', 'a');
    // TODO-QSP: !! Anushka
  }
  scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush9.jpg');
  scene.text('You sit on the rock and he steps over and pushes your legs wide apart before shoving Anushka\'s face in your crotch. She starts licking your clit as Valentin gets her up on all fours and starts eating her out. She occasionally stops licking you to moan loudly; when she does, you rub your own clit while watching them.');
  qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID1 ?? 0), 'inhibition', 'lesbian', 'masturbate');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush10.jpg');
    scene.text('He stops eating her out and moves behind her, her sudden loud moan leaving no doubt he just started fucking her. He reaches down and shoves her face back in your crotch, causing her to start playing with your clit.');
    scene.text('"Oh yes… My pussy is so wet for you, Val… Fuck me…"');
    scene.text('You grin as you watch Valentin and listen to Anushka. "You heard her. Fuck her harder!"');
    qspCall(st, 'arousal', 'cuni', 3, ((st as any).npcID1 ?? 0), 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Encourage Valentin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush11.jpg');
    scene.text('He reaches up to grab her shoulders as he starts fucking her hard and fast, making her moan louder.');
    scene.text('She continues to lick your wet pussy and play with your clit as Valentin roughly fucks her doggy style.');
    scene.text('"Fuck, you have such a tight pussy, Nush!" He then looks up at you. "Don\'t worry, I haven\'t forgotten you. I think it\'s your turn," he says between pants.');
    qspCall(st, 'arousal', 'cuni', 2, ((st as any).npcID1 ?? 0), 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A158', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush9.jpg');
    scene.text('You shake your head. "No thanks, I\'m good."');
    scene.text('He gives you a surprised look, but just shrugs before standing up. Pulling out of her, he bends down to lick her again before he pulls both of you to your feet, then has you bend over with Anushka laying on your back as he moves behind her. He grabs her purse and pulls out a tube of lube, applying a generous amount to his dick and then her ass.');
    scene.actions([
      { label: 'Act as a support', goto: ['pav_park_sex', 'nush_anal_fucked'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Your turn', goto: ['pav_park_sex', 'fucked_by_val'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckedByVal(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  if (((s as any).npcID ?? 0) !== 'A158') {
    qspCall(s, 'npcStat', 'A158');
    // TODO-QSP: !! Valentin
  }
  if (((s as any).npcID ?? 0) !== 'A144') {
    qspCall(s, 'npcStat', 'A144', 'a');
    // TODO-QSP: !! Anushka
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush12.jpg');
  scene.text('You nod in agreement and he has you and Anushka switch places. You get on all fours while Anushka sits with her legs in front of you as you start rubbing her clit with your fingers, soon sliding them into her soaking wet pussy.');
  scene.text('Valentin, meanwhile, eats you out until you\'re soaking wet and desperate to feel a cock inside you.');
  qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID ?? 0), 'inhibition');
  qspCall(s, 'arousal', 'vaginal_finger_give', 2, ((s as any).npcID1 ?? 0), 'inhibition', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush13.jpg');
    // TODO-QSP: dynamic text: He stops licking you just when you''re about to tell him to fuck you and glance ...
    scene.text(`He stops licking you just when you're about to tell him to fuck you and glance back to see him getting in place behind you. Moments later, you feel his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick sliding into your wet slit, filling you up as you moan loudly.`);
    scene.text('As Valentin fucks you, Anushka watches and furiously rubs her clit, biting her lower lip and moaning loudly.');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID ?? 0), 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Enjoy it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush14.jpg');
    scene.text('He fucks you for several minutes as you watch Anushka rub one out in front of you. He then pulls out of you and has you bend over with Anushka leaning on your back as he moves behind her.');
    scene.text('He grabs her purse and pulls out a tube of lube, applying a generous amount to his dick and then her ass.');
    qspCall(st, 'arousal', 'vaginal', 2, ((st as any).npcID ?? 0), 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stand up', goto: ['pav_park_sex', 'nush_anal_fucked'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNushAnalFucked(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  if (((s as any).npcID ?? 0) !== 'A158') {
    qspCall(s, 'npcStat', 'A158');
    // TODO-QSP: !! Valentin
  }
  if (((s as any).npcID ?? 0) !== 'A144') {
    qspCall(s, 'npcStat', 'A144', 'a');
    // TODO-QSP: !! Anushka
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush15.jpg');
  scene.text('You glance back, unable to see a lot from where you are, but you hear Anushka take several quick deep breaths, obviously trying to relax before she moans and groans simultaneously.');
  scene.text('"OH fuck! You\'re so big, Val… My poor little ass… can\'t handle that monster!" Despite her words, she sounds more turned on than anything.');
  scene.text('He just chuckles. "You say that every time, and before you know it, you\'re begging me to fuck your ass harder."');
  scene.text('You feel her fingers rubbing your clit from behind, making you moan before they slide inside you as she finger bangs you while Valentin fucks her ass.');
  scene.text('"Ahhh… OH… You\'re so deep… Go slow… Slow…" she cries out.');
  qspCall(s, 'arousal', 'erotic', 3);
  qspCall(s, 'arousal', 'vaginal_finger', (-3), ((s as any).npcID1 ?? 0), 'inhibition', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy the finger banging', handler: (st: GameState) => {
    scene.text('As he starts fucking her ass harder, she starts finger-banging you faster and deeper, and both of you moan in pleasure. "OH… Fuck my ass… Tear my little ass up with your huge cock, Val!"');
    scene.text('As he said, she\'s now begging him to fuck her ass even harder, which he\'s only too happy to do. You feel her body pushing against yours with every thrust he makes.');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush16.jpg');
    qspCall(st, 'arousal', 'erotic', 2);
    qspCall(st, 'arousal', 'vaginal_finger', (-2), ((st as any).npcID1 ?? 0), 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Listen to Anushka get butt fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush17.jpg');
    scene.text('Her fingers slip out of your pussy, too distracted with getting her ass pounded to keep fingering you. You slide your own hand between your legs and start rubbing your clit, listening to Anushka moaning louder while sometimes gasping or grunting from an especially hard thrust before she cries out and you feel her body shaking against your own in orgasm.');
    scene.text('After a moment, her legs give out and Valentin has to hold her up. He slowly lowers her to the ground, still shaking, where she sits on her knees breathing hard. Looking at her, she seems completely out of it.');
    scene.text('Valentin then looks at you. "Guess your ass is next…"');
    qspCall(st, 'arousal', 'erotic', 3);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'npc_relationship', 'modify', 'A158', (-1));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush9.jpg');
    scene.text('You shake your head. "No thanks, I\'m good."');
    scene.text('He gives you a reasonably annoyed look, but then starts jerking off. You kneel next to Anushka as you watch him.');
    scene.actions([
      { label: 'Just watch', goto: ['pav_park_sex', 'nush_val_cum'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him fuck your ass', goto: ['pav_park_sex', 'fucked_anal_by_val'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckedAnalByVal(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  if (((s as any).npcID ?? 0) !== 'A158') {
    qspCall(s, 'npcStat', 'A158');
    // TODO-QSP: !! Valentin
  }
  if (((s as any).npcID ?? 0) !== 'A144') {
    qspCall(s, 'npcStat', 'A144', 'a');
    // TODO-QSP: !! Anushka
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush18.jpg');
  scene.text('You stay bent over as you feel Valentin squirting a healthy amount of lube against your asshole and working it in with his finger. Once you\'re lubed up, you feel the tip of his cock pressing against your asshole until the head pops in.');
  // TODO-QSP: dynamic text: He stops for a moment to give you a chance to relax before he slowly starts slid...
  scene.text(`He stops for a moment to give you a chance to relax before he slowly starts sliding his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock up your ass, filling you as it stretches you out.`);
  qspCall(s, 'arousal', 'anal', 2, ((s as any).npcID ?? 0), 'inhibition', 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get anally fucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush19.jpg');
    scene.text('As your asshole stretches out and gets used to his size, he slowly starts going deeper and faster until he\'s fucking you pretty hard and fast, only backing off when he hears you hiss or tense up.');
    scene.text('You notice Anushka squat next to Valentin, intently watching his cock slide in and out of your ass. "Fuck, that\'s so hot. I\'m getting turned on again already," she says as she watches you get fucked.');
    scene.text('Valentin seems pretty focused before he suddenly pulls out of you. As he does, Anushka pulls you down to squat next to her, and the two of you watch Valentin start jerking off in front of you.');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID ?? 0), 'inhibition', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'On your knees', goto: ['pav_park_sex', 'nush_val_cum'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNushValCum(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_park_sex';
  (s as any).location_type = 'public_outdoors';
  if (((s as any).npcID ?? 0) !== 'A158') {
    qspCall(s, 'npcStat', 'A158');
    // TODO-QSP: !! Valentin
  }
  if (((s as any).npcID ?? 0) !== 'A144') {
    qspCall(s, 'npcStat', 'A144', 'a');
    // TODO-QSP: !! Anushka
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush18.jpg');
  scene.text('Anushka sticks out her tongue and Valentin shoots his load into her mouth, stroking his dick until the last little drop comes out and drips onto her tongue. She closes her mouth, then turns to you, intending to kiss you.');
  qspCall(s, 'arousal', 'erotic_nudity', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush19.jpg');
    scene.text('You kiss her, your soft lips against hers before she opens her mouth, her tongue exploring your mouth as you get a taste of Valentin\'s cum. You passionately kiss for a minute or more, sharing his cum between you.');
    scene.text('"God damn… That is so fucking hot!"');
    scene.text('His voice breaks the spell and brings you both back to reality. She breaks the kiss with you and you swallow the cum in your mouth before each of you starts getting dressed.');
    scene.text('"We should totally do this again sometime," Anushka says, with Valentin completely agreeing with her. Once you\'re all dressed, you get up and start walking again.');
    qspCall(st, 'arousal', 'kiss', 1, ((st as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Walk with them again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/gopnik/sex/hangout/val_nush/val_nush1.jpg');
    scene.text('The three of you walk in silence, with Valentin once more between the two of you with his arms wrapped around your shoulders.');
    scene.text('"Fuck, my ass hurts…" Anushka complains, breaking the silence. You glance over at her and see her glancing at you. "Does your ass hurt?"');
    scene.text('You grin. "It\'s maybe a little sore."');
    scene.text('She looks up at Valentin. "I don\'t know why I let you fuck my ass. It\'s sore every time afterwards."');
    scene.text('Valentin chuckles. "Because you love it. You love it when a big dick tears up your ass. You\'re such an anal slut, Nush."');
    scene.text('She slaps his chest with her hand and giggles, but doesn\'t deny it. He walks the two of you back to the residential area before letting go of you.');
    scene.text('"Well girls, I had fun, but I need to get going." He starts to walk away, only to turn and walk back for a few steps to say "See you girls later."');
    scene.text('He smiles before turning and walking away as Anushka takes a deep breath and sighs.');
    scene.text('"I should get going too. I think I\'m going to go home and take a shower. Talk to you later, slut," she says, slapping you on the ass before she walks away towards her apartment with a happy sway to her hips.');
    scene.text('You just shake your head and watch her walk away before wondering what to do next.');
    scene.actions([
      { label: 'Go on your way', goto: ['pav_residential', ''] },
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
    case 'watch_sonia':
      enterWatchSonia(s, scene);
      break;
    case 'oldman_house':
      enterOldmanHouse(s, scene);
      break;
    case 'oldman_cowgirl':
      enterOldmanCowgirl(s, scene);
      break;
    case 'oldman_doggy':
      enterOldmanDoggy(s, scene);
      break;
    case 'oldman_finish':
      enterOldmanFinish(s, scene);
      break;
    case 'eatlera':
      enterEatlera(s, scene);
      break;
    case 'pressured_for_bra':
      enterPressuredForBra(s, scene);
      break;
    case 'pressured_for_panties':
      enterPressuredForPanties(s, scene);
      break;
    case 'pressured_for_tits':
      enterPressuredForTits(s, scene);
      break;
    case 'pressured_for_pussy':
      enterPressuredForPussy(s, scene);
      break;
    case 'pressured_for_blowjob':
      enterPressuredForBlowjob(s, scene);
      break;
    case 'pressured_for_oral_gb':
      enterPressuredForOralGb(s, scene);
      break;
    case 'pressured_for_gangbang':
      enterPressuredForGangbang(s, scene);
      break;
    case 'radomir_walk':
      enterRadomirWalk(s, scene);
      break;
    case 'val_nush_walk':
      enterValNushWalk(s, scene);
      break;
    case 'nush_fucked':
      enterNushFucked(s, scene);
      break;
    case 'fucked_by_val':
      enterFuckedByVal(s, scene);
      break;
    case 'nush_anal_fucked':
      enterNushAnalFucked(s, scene);
      break;
    case 'fucked_anal_by_val':
      enterFuckedAnalByVal(s, scene);
      break;
    case 'nush_val_cum':
      enterNushValCum(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_park_sex: LocationDef = {
  name: 'pav_park_sex',
  title: 'You carefully walk through an opening between the trees and ',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
