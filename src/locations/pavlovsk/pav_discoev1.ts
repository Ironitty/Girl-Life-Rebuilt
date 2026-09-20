import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMarcus(s: GameState, scene: SceneBuilder): void {
  (s as any).Marcus_sextype = 1;
  qspCall(s, 'fame', 'pav', 'sex', 1);
  (s as any).loc = 'gdktoilet_mens';
  (s as any).locM = 'gdktoilet_mens';
  (s as any).loc_arg = 'mens';
  (s as any).locM_arg = 'mens';
  scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/bj1.jpg');
  scene.text('The two of you leave the dance floor and sneak off to the restrooms. Marcus looks into the men\'s restroom and then waves you in when he sees that nobody is inside. The two of you quickly sneak into the last stall and he pulls his dick out. You sit down on the toilet, take it into your mouth and start sucking on it. He moans softly as you do.');
  qspCall(s, 'arousal', 'bj', 3);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep sucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/bj2.jpg');
    // TODO-QSP: dynamic text: As you suck him off, he places his hand on the back of your head and encourages ...
    scene.text(`As you suck him off, he places his hand on the back of your head and encourages you to take him as deep as you can into your mouth. He doesn't force you or gag you, but you can feel the pressure of his hand encouraging you to deep throat him. A few minutes later he speaks up between moans. "I really want to fuck you, ${((st as any).pcs_nickname || '')}."`);
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/cum.jpg');
    scene.text('You pull his cock out of your mouth long enough to reply. "Not tonight, I just want to suck you off."');
    scene.text('He nods with a smile and you go back to sucking him off. He starts moaning and starts to tense up. "I\'m gonna cum!" You start to pull away, but the first shot of cum blasts into your mouth and several more splatter against your face. Once he finally finishes cumming, he tucks his dick away and buttons up his pants. "Fuck you\'re amazing, but we should get back before people start talking."');
    scene.text('You nod in agreement. "Yeah, go ahead. I need to clean up first."');
    scene.text('He smiles and walks out of the restroom, leaving you in the stall with the taste of cum in your mouth as it drips down your face.');
    qspCall(st, 'arousal', 'bj', 3);
    qspCall(st, 'cum_call', 'mouth_swallow', 'A146', 1);
    qspCall(st, 'cum_call', 'face', 'A146', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/bathroom_mens.jpg');
    scene.text('You crack open the stall door and peek around the corner. With nobody around, you make a dash for the sinks and look in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> at your cum plastered face.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Let him fuck you', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A146');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/vaginal1.jpg');
    // TODO-QSP: dynamic text: You pop his dick out of your mouth to reply. "Okay, you can fuck me." He grins a...
    scene.text(`You pop his dick out of your mouth to reply. "Okay, you can fuck me." He grins and pulls you up before turning you around. Now bent over the toilet, you both strip from the waist down. He rubs your clit until you're wet before he lines his cock up with your slit and slides it in. You feel his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick stretching your pussy as he slowly slides it inside you and starts to slowly fuck you.`);
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/vaginal2.jpg');
    scene.text('He keeps fucking you, slowly picking up speed and going a little deeper the louder you moan, but slows down when he senses you tensing up, trying his best to find the depth and speed that you most enjoy. "I really want to fuck your ass. can I?"');
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/cum.jpg');
    scene.text('You shake your head and look back over your shoulder at him. "No, just fuck my pussy."');
    scene.text('You can tell he is a little disappointed, but he smiles and keeps fucking you. Within a few minutes, he starts grunting before he quickly pulls out of you, grabs you by the arm and turns you around. You sink to your knees in time for his cum to hit you in the face, with a spurt shooting into your mouth as several more coat your face. When he finishes cumming, he tucks his dick away and buttons up his pants. "Fuck you\'re amazing, but we should get back before people start talking."');
    scene.text('You nod in agreement. "Yeah, go ahead. I need to clean up first."');
    scene.text('He smiles and walks out of the restroom, leaving you in the stall with the taste of cum in your mouth as it drips down your face.');
    qspCall(st, 'arousal', 'vaginal', 3);
    qspCall(st, 'cum_call', 'mouth_swallow', 'A146', 1);
    qspCall(st, 'cum_call', 'face', 'A146', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/bathroom_mens.jpg');
    scene.text('You crack open the stall door and peek around the corner. With nobody around, you make a dash for the sinks and look in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> at your cum plastered face.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Get butt fucked', goto: ['pav_discoev1', 'marcus_anal'] },
    ]);
  } },
    ]);
  } },
      { label: 'Tell him to fuck your ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/bj2.jpg');
    scene.text('You pop his dick out of your mouth to reply. "Okay, you can fuck me, but only in the ass." you say with a smile.');
    scene.text('"Works for me!" he grins before pulling you up and turning you around. Now bent over the toilet, you both strip from the waist down.');
    qspCall(st, 'arousal', 'bj', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', goto: ['pav_discoev1', 'marcus_anal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMarcusAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/anal1.jpg');
  scene.text('He rubs your clit until you\'re wet and lubes up his dick before he gently starts pressing the tip against your asshole. The pressure builds until the head of his dick pops into your ass and he stops, letting you adjust. When you relax, he starts to slowly fuck your ass, gradually working himself deeper.');
  qspCall(s, 'arousal', 'anal', 3, 'lube');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/anal2.jpg');
    scene.text('He slowly works himself deeper into your ass until he feels you start to tense up, at which point he backs off. He eventually finds the depth and speed that you enjoy the most and you both start moaning in pleasure. After a few minutes, you feel him starting to tense up and grunt loudly.');
    qspCall(st, 'arousal', 'anal', 3, 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/disco/cum.jpg');
    scene.text('He keeps fucking you for a few more minutes before he pulls out of you, grabs you by the arm and turns you around. You sink to your knees in time for his cum to hit you in the face, with a spurt shooting into your mouth as several more coat your face. When he finishes cumming, he tucks his dick away and buttons up his pants. "Fuck you\'re amazing, but we should get back before people start talking."');
    scene.text('You nod in agreement. "Yeah, go ahead. I need to clean up first."');
    scene.text('He smiles and walks out of the restroom, leaving you in the stall with the taste of cum in your mouth as it drips down your face.');
    qspCall(st, 'arousal', 'anal', 3);
    qspCall(st, 'cum_call', 'mouth_swallow', 'A146', 1);
    qspCall(st, 'cum_call', 'face', 'A146', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/bathroom_mens.jpg');
    scene.text('You crack open the stall door and peek around the corner. With nobody around, you make a dash for the sinks and look in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> at your cum plastered face.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAndreyStasyaMarcus(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).hour ?? 0) > 19) {
    ((s as any).discobloc = (s as any).discobloc ?? {})['A147'] = ((s as any).daystart ?? 0);
    ((s as any).discobloc = (s as any).discobloc ?? {})['A139'] = ((s as any).daystart ?? 0);
    ((s as any).discobloc = (s as any).discobloc ?? {})['A146'] = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/andreyhome/home.jpg');
  scene.text('The four of you walk to Andrey\'s house and you quickly realize that the plan is for you all to have a foursome. Andrey and Marcus seem really pumped while Stasya is a little more reluctant, but agrees anyway, seemingly to make Andrey happy. Once at the door, Andrey unlocks it and holds it open for you and Stasya. "Let\'s go have a hell of a night girls! After you."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A147', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A139', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A146', 'dislike');
    scene.img('images/locations/pavlovsk/resident/andreyhome/home.jpg');
    scene.text('You shake your head. "Sorry, but I… I can\'t do this. I need to go… Sorry." You hurry off and hear Andrey and Marcus grumbling, but you just ignore them and keep moving.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    { label: 'Go in', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A146', 'a');
    qspCall(st, 'npcStat', 'A147', 'b');
    qspCall(st, 'npcStat', 'A139', 'c');
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some1.jpg');
    scene.text('You walk into the house and into the living room, where Andrey and Marcus take a seat on the couch. "Don\'t worry, my parents took a trip to the city for the night, so why don\'t you girls start undressing each other?" Marcus grins as he watches, just as eager as Andrey. Stasya looks at Andrey lovingly before turning to you and pulling your clothes off. You return the favor and start to undress her as well.');
    scene.actions([
      { label: 'Blow them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some2.jpg');
    scene.text('Once the two of you are mostly naked, the boys get up and stand next to you. You share some kisses with Marcus while Andrey and Stasya passionately make out before you\'re both pushed to your knees. You start sucking Marcus\'s cock while Stasya sucks Andrey\'s.');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some3.jpg');
    scene.text('The boys high five each other before Andrey suggests switching. Marcus nods and they switch places.');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID2 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some4.jpg');
    // TODO-QSP: dynamic text: After a while, the boys pull you over to the couch and lay you down next to each...
    scene.text(`After a while, the boys pull you over to the couch and lay you down next to each other. Marcus moves between your legs and quickly slides his ${((st as any).dick1 || '')}cm ${((st as any).dick_girth1 || '')} dick inside you, stretching your pussy. You hear Stasya moaning and glance over to see Andrey starting to fuck her as well.`);
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some5.jpg');
    // TODO-QSP: dynamic text: Several minutes go by before Andrey again tells Marcus to switch. The boys pull ...
    scene.text(`Several minutes go by before Andrey again tells Marcus to switch. The boys pull out and sit on the couch before Andrey pulls you over to him while Marcus does the same with Stasya. You lower yourself down until you feel Andrey's ${((st as any).dick2 || '')}cm ${((st as any).dick_girth2 || '')} dick slide inside you. He grabs your hips and pulls you all the way down until he is balls deep inside you. You glance over at Stasya moaning as Marcus penetrates her pussy as well.`);
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID2 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'In the ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some6.jpg');
    // TODO-QSP: dynamic text: A few minutes later, Stasya climbs off Marcus and Andrey lifts you off of him. H...
    scene.text(`A few minutes later, Stasya climbs off Marcus and Andrey lifts you off of him. He lays Stasya down on her back with her legs spread and pushes you onto all fours with your face between her legs. Andrey pushes your face down to her pussy and you start to lick it as you feel Marcus climb over you before feeling his ${((st as any).dick_girth1 || '')} cock force it's way into your ass. You keep licking Stasya's pussy as Marcus starts fucking your ass.`);
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID1 ?? 0), 'group', 'lube');
    qspCall(st, 'arousal', 'cuni_give', (-3), ((st as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'DPed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some7.jpg');
    scene.text('As this is happening, Andrey moves up behind you and you feel his dick slide into your pussy as Marcus continues to fuck your ass. Andrey starts fucking your pussy while you keep licking Stasya\'s wet pussy. She seems to be enjoying it a great deal.');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID1 ?? 0), 'group', 'lube');
    qspCall(st, 'arousal', 'vaginal', (-3), ((st as any).npcID2 ?? 0), 'group');
    qspCall(st, 'arousal', 'cuni_give', (-3), ((st as any).npcID3 ?? 0), 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Switch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some8.jpg');
    scene.text('"Let me have some of that ass." Andrey says and the two boys stop fucking you. Marcus pulls out of your ass and sits down before pulling you on top of him so his dick slides back into your pussy. Andrey moves up behind you and slides his dick into your gaping asshole while pulling Stasya over so she has to watch him fuck your ass.');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'arousal', 'anal', (-3), ((st as any).npcID2 ?? 0), 'group', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Flip over', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some9.jpg');
    scene.text('After a few minutes, Andrey pulls out of your ass and Marcus lifts you up before they effortlessly flip you over. You are lowered back down until Marcus\'s cock slides back into your ass while Andrey pushes back into your pussy and the two of them start fucking you again.');
    qspCall(st, 'arousal', 'anal', 3, ((st as any).npcID1 ?? 0), 'group', 'lube');
    qspCall(st, 'arousal', 'vaginal', (-3), ((st as any).npcID2 ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stasya\'s turn', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some10.jpg');
    scene.text('Your fucking is interrupted by Andrey. "Okay Asya, get over here." You are lifted up and they help Stasya over and lower her down until Marcus\'s massive dick slides up her ass. "FUCK!!!" she cries out and squeezes her eyes closed as her ass gets stretched by Marcus. Andrey starts fucking her pussy, and her groans give way to moans before she starts shaking in orgasm.');
    scene.text('"Fuck, I\'m gonna cum!" Marcus cries out at the same time.');
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/andreyhome/sex/4some11.jpg');
    scene.text('You and Stasya are quickly forced down to your knees and the two boys start jerking off. You close your eyes as Marcus starts grunting and his cum starts splattering over your face, with some of it going in your open mouth. Once he finishes, you glance over to see Stasya\'s face covered in Andrey\'s cum.');
    scene.text('Stasya gets up and grabs her clothes. "I need to take a shower." She hurries off upstairs to the bathroom as Andrey laughs and shakes his head before he and Marcus start getting cleaned up. Marcus hands you some tissues, which you use to clean your face before getting dressed.');
    scene.text('Andrey grins at you. "That was amazing! We\'ll have to do that again some time. You can hang out if you want, Stasya should be back soon." You glance over at the clock and shake your head. "No, it\'s getting late and I should really get going. I had fun though." The boys walk you to the door and make a few lewd jokes, making sure you know they enjoyed it and want to do it again.');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID1 ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0), 1);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID2 ?? 0), 1);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID2 ?? 0), 1);
    qspCall(st, 'cum_cleanup', '', 12);
    qspCall(st, 'arousal', 'end');
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIgorPeg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg1.jpg');
  if (((s as any).strapNumber ?? 0) >= 5) {
    scene.text('You lead Igor down one of the halls to some offices. After checking a few doors, you find one that\'s unlocked and the two of you slip inside the office. You pull the strap-on harness out of your purse and hold it in your hand. "Beg me to fuck you."');
    scene.text('His eyes grow wide. You can tell he\'s turned on by you taking charge like this, but he\'s also shaking his head at the massive size of the dildo.');
    scene.text('"Oh my god, that thing is huge! It would hurt too much! Are you crazy?!"');
    scene.text('"What? You already let me fuck you with one before." you grin while looking at him.');
    scene.text('"No, that is way too big! A smaller one is okay, but not that thing!" he says while shaking his head.');
    scene.text('You sigh and look down at the monster dildo, knowing he won\'t budge on trying it. "Okay, I\'ll get something smaller and we can do it next time."');
    scene.text('He nods. "Sounds good, I can\'t wait." The two of you talk for a bit before you decide it\'s time to leave.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } else {
    scene.text('You lead Igor down one of the halls to some offices. After checking a few doors, you find one that\'s unlocked and the two of you slip inside the office. You pull the strap-on harness out of your purse and hold it in your hand. "Beg me to fuck you."');
    // TODO-QSP: dynamic text: He blushes brightly, but gets down on his knees and puts his hands together. "Pl...
    scene.text(`He blushes brightly, but gets down on his knees and puts his hands together. "Please fuck me with your strap-on, ${((s as any).pcs_nickname || '')}."`);
    scene.actions([
      { label: 'Put on the harness', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg2.jpg');
    if (((st as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
      scene.text('You step into the harness and pull it up into place. With Igor\'s help, you quickly get the harness strapped tightly in place. You could use a moment to cast the Penis Envy spell if you like.');
      if ((!((st as any).penisEnvyVariable ?? 0))) {
        scene.actions([
          { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(st, 'castSpell', 'penisenvy');
    if (((st as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Get a blowjob', goto: ['pav_discoev1', 'strapon_igor_magic'] },
      ]);
    } else {
      scene.actions([
        { label: 'Get a blowjob', goto: ['pav_discoev1', 'strapon_igor_bj'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get a blowjob', goto: ['pav_discoev1', 'strapon_igor_magic'] },
        ]);
      }
    } else {
      scene.text('You step into the harness and pull it up into place. With Igor\'s help, you quickly get the harness strapped tightly in place.');
      scene.actions([
        { label: 'Get a blowjob', goto: ['pav_discoev1', 'strapon_igor_bj'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStraponIgorBj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg3.jpg');
  scene.text('You turn toward him and find he is still kneeling next to you. "Be a good little bitch and suck my dick!"');
  scene.text('He eagerly starts sucking on your fake cock. It looks like he\'s been practicing and is showing very good technique.');
  qspCall(s, 'arousal', 'foreplay', 2, 'dom', 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Deepthroat him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg4.jpg');
    scene.text('You reach back, place a hand on the back of his head and start forcing him to take your dick deeper and deeper until you start gagging him as he deep throats you. He surprisingly doesn\'t gag much at all, and you\'re sure he\'s been practicing. "That\'s it, get my cock nice and wet!"');
    qspCall(st, 'arousal', 'foreplay', 3, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn him around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg5.jpg');
    scene.text('You pull your cock out of his mouth. "Turn around and pull your pants down. I\'m ready to fuck you now."');
    scene.text('He quickly and eagerly turns around before unbuttoning his pants and pulling them and his underwear down to his mid thighs as he glances back at you. You stroke your fake cock as you watch him eagerly get in position to get fucked by you.');
    qspCall(st, 'arousal', 'foreplay', 1, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.actions([
        { label: 'Use lube', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg6.jpg');
    scene.text('You kneel down, grab some lube from your purse and rub it into your fake cock, getting it nice and slick. Once your cock is lubed up, you push him forward before he reaches back, grabs his ass cheeks and spreads them for you.');
    qspCall(st, 'arousal', 'foreplay', 1, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck him', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'D' + ((st as any).strapNumber ?? 0) + '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg7.jpg');
    // TODO-QSP: dynamic text: You guide your cock to his asshole and slide your slick <<dick>>cm <<$dick_girth...
    scene.text(`You guide your cock to his asshole and slide your slick ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} fake dick deep into his ass, making him moan loudly. "I love feeling your cock inside of me." He moans out.`);
    qspCall(st, 'arousal', 'anal_strap_give', 2, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg8.jpg');
    scene.text('"Oh yes, yes… I love your cock in my ass!" He moans out as you keep fucking him. A few minutes later, he starts moaning really loudly. "Don\'t stop, I\'m cumming!" He tenses up before relaxing with a loud deep moan. You can tell his just blew his load, but you\'re not sure if you\'re finished with him just yet…');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'BDSM', 'force', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Establish dominance', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Establish dominance', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg9.jpg');
    scene.text('"Who said you were allowed to cum yet?" You grab hold of his hips and start hammering his ass with your fake dick balls deep. He starts moaning and groaning loudly as you fuck him hard and fast.');
    // TODO-QSP: dynamic text: "I''m sorry <<$pcs_nickname>>! Please punish me!" He moans and groans as you pou...
    scene.text(`"I'm sorry ${((st as any).pcs_nickname || '')}! Please punish me!" He moans and groans as you pound his asshole, and after several minutes you're starting to feel a little tired from the exertion. You pull your cock out of his ass and stand up. He sighs loudly as you do.`);
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg10.jpg');
    scene.text('You take off the harness and clean it up before putting it back in your purse. Igor gets up and pulls his pants up before cleaning himself up as well. "We should get back before someone notices." you tell him and he blushes bright red, but nods. Once you\'re both sure everything is how it should be, you leave one at a time and return to the disco.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg10.jpg');
    scene.text('You pull your cock out of his ass and stand up. He sighs loudly as you take off the harness and clean it up before putting it back in your purse. He gets up and pulls his pants up before cleaning himself up as well. "We should get back before someone notices." you tell him and he blushes bright red, but nods. Once you\'re both sure everything is how it should be, you leave one at a time and return to the disco.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
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
      scene.actions([
        { label: 'Just fuck him', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'D' + ((st as any).strapNumber ?? 0) + '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg7.jpg');
    // TODO-QSP: dynamic text: You guide your cock to his asshole and force the <<dick>>cm <<$dick_girth>> fake...
    scene.text(`You guide your cock to his asshole and force the ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} fake dick deep into his ass, making him groan loudly. It takes a bit of effort to shove your fake cock all the way up his ass, with only his saliva for lube. "Tell me you love my cock in your ass!"`);
    scene.text('He groans loudly. "I love feeling your cock fucking my ass!"');
    qspCall(st, 'arousal', 'anal_strap_give', 2, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fucking him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg8.jpg');
    scene.text('His loud groans give way to moans of pleasure, and a few minutes later he starts moaning really loudly. "Don\'t stop, I\'m cumming!" He tenses up before relaxing with a loud deep moan. You can tell he just blew his load, but you\'re not sure if you\'re finished with him just yet…');
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'BDSM', 'force', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Establish dominance', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Establish dominance', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg9.jpg');
    scene.text('"Who said you were allowed to cum yet?" You grab hold of his hips and start hammering his ass with your fake dick balls deep. He starts moaning and groaning loudly as you fuck him hard and fast.');
    // TODO-QSP: dynamic text: "I''m sorry <<$pcs_nickname>>! Please punish me!" He moans and groans as you pou...
    scene.text(`"I'm sorry ${((st as any).pcs_nickname || '')}! Please punish me!" He moans and groans as you pound his asshole, and after several minutes you're starting to feel a little tired from the exertion. You pull your cock out of his ass and stand up. He sighs loudly as you do.`);
    qspCall(st, 'arousal', 'anal_strap_give', 3, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg10.jpg');
    scene.text('You take off the harness and clean it up before putting it back in your purse. Igor gets up and pulls his pants up before cleaning himself up as well. "We should get back before someone notices." you tell him and he blushes bright red, but nods. Once you\'re both sure everything is how it should be, you leave one at a time and return to the disco.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg10.jpg');
    scene.text('You pull your cock out of his ass and stand up. He sighs loudly as you take off the harness and clean it up before putting it back in your purse. He gets up and pulls his pants up before cleaning himself up as well. "We should get back before someone notices." you tell him and he blushes bright red, but nods. Once you\'re both sure everything is how it should be, you leave one at a time and return to the disco.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
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

function enterStraponIgorMagic(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_or = 'no';
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg3.jpg');
  scene.text('You turn toward him and find he is still kneeling next to you. "Be a good little bitch and suck my dick!"');
  scene.text('He eagerly starts sucking on your fake cock. It feels like he\'s been practicing, you can feel his lips tightly gripped around the shaft of your cock, while his tongue presses against the bottom of your shaft, it feels wonderful.');
  qspCall(s, 'arousal', 'magicd_bj', 2, 'dom', 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Deep throat him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg4.jpg');
    scene.text('You reach back, place a hand on the back of his head and start forcing him to take your dick deeper and deeper until you start gagging him as he deep throats you. He surprisingly doesn\'t gag much at all, and you\'re sure he\'s been practicing. "That\'s it, get my cock nice and wet!"');
    qspCall(st, 'arousal', 'magicd_bj', 3, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn him around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg5.jpg');
    scene.text('You pull your cock out of his mouth. "Turn around and pull your pants down. I\'m ready to fuck you now."');
    scene.text('He quickly and eagerly turns around before unbuttoning his pants and pulling them and his underwear down to his mid thighs as he glances back at you. You stroke your fake cock, feeling the pleasure of that simple act, as you watch him eagerly get in position to get fucked by you.');
    qspCall(st, 'arousal', 'foreplay', 1, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.actions([
        { label: 'Use lube', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg6.jpg');
    scene.text('You kneel down, grab some lube from your purse and rub it into your fake cock, getting it nice and slick. Once your cock is lubed up, you push him forward before he reaches back, grabs his ass cheeks and spreads them for you.');
    qspCall(st, 'arousal', 'foreplay', 1, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Slip your cock in his ass', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'D' + ((st as any).strapNumber ?? 0) + '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg7.jpg');
    // TODO-QSP: dynamic text: You guide your cock to his asshole and slide your slick <<dick>>cm <<$dick_girth...
    scene.text(`You guide your cock to his asshole and slide your slick ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} fake dick deep into his ass, making him moan loudly, as your dick easily slides into his well-lubed asshole. "I love feeling your cock inside of me." He moans out. As his asshole grips your cock you can't help but moan in pleasure as well.`);
    qspCall(st, 'arousal', 'magicd_anal', 2, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg8.jpg');
    scene.text('"Oh yes, yes… I love your cock in my ass!" He moans out as you keep fucking him. A few minutes later, he starts moaning really loudly. "Don\'t stop, I\'m cumming!" He tenses up, causing his asshole to tighten up around the shaft of your cock, before relaxing with a loud deep moan. You can tell his just blew his load, but you havn\'t shot your load yet, you could fuck him until you cum as well.');
    qspCall(st, 'arousal', 'magicd_anal', 3, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'force', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep fucking him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep fucking him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg9.jpg');
    scene.text('"Who said you were allowed to cum yet?" You grab hold of his hips and start hammering his ass with your fake dick balls deep, you can feel your balls smack against his ass, with each thrust. He starts moaning and groaning loudly as you fuck him hard and fast.');
    // TODO-QSP: dynamic text: "I''m sorry <<$pcs_nickname>>! Please punish me!" He moans and groans as you pou...
    scene.text(`"I'm sorry ${((st as any).pcs_nickname || '')}! Please punish me!" He moans and groans as you pound his asshole, and after several minutes you feel your balls tighten and you can tell you are about to cum.`);
    qspCall(st, 'arousal', 'magicd_anal', 2, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum in his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_internal_butt_cum1.jpg');
    (st as any).orgasm_or = 'yes';
    (st as any).orgasm_txt = 'You bury your cock one last time balls deep into his ass, as you feel your cock twitch as you empty your load into his ass. You moan loudly as you fill his ass with your cum, with the last spurt finished, you pull your cock out of his ass and stand up. He sighs loudly as you do. As you step back you can see your cum leaking out of his gaping hole.';
    qspCall(st, 'arousal', 'magicd_anal', 2, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg10.jpg');
    scene.text('As you take off the harness, you can feel the magic leaving your body as your connection to the strapon fades and it once more just becomes a normal strapon. You clean the strapon up before putting it back in your purse. Igor gets up and pulls his pants up before cleaning himself up as well. "We should get back before someone notices." you tell him and he blushes bright red, but nods. Once you\'re both sure everything is how it should be, you leave one at a time and return to the disco.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg10.jpg');
    scene.text('As you take off the harness, you can feel the magic leaving your body as your connection to the strapon fades and it once more just becomes a normal strapon. You clean the strapon up before putting it back in your purse. Igor gets up and pulls his pants up before cleaning himself up as well. "We should get back before someone notices." you tell him and he blushes bright red, but nods. Once you\'re both sure everything is how it should be, you leave one at a time and return to the disco.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
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
      scene.actions([
        { label: 'Just slip your cock in his ass', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'D' + ((st as any).strapNumber ?? 0) + '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg7.jpg');
    // TODO-QSP: dynamic text: You push him forward before he reaches back, grabs his ass cheeks and spreads th...
    scene.text(`You push him forward before he reaches back, grabs his ass cheeks and spreads them for you. You guide your cock to his asshole and force the ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} fake dick into his ass. It takes a bit of effort to shove your fake cock all the way up his ass, with only his saliva for lube, he groans a little in pain and winces a bit as you do. "Tell me you love my cock in your ass!"`);
    scene.text('He groans loudly. "I love feeling your cock fucking my ass!"');
    qspCall(st, 'arousal', 'magicd_anal', 2, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg8.jpg');
    scene.text('"Oh fuck it kinda hurts!" He moans out as you keep fucking him.');
    scene.text('You slam your cock deep in his ass, causing him to groan in pain a little but still moan in pleasure as you ask. "Do you want me to stop?"');
    scene.text('He starts moaning really loudly. "Don\'t stop, fuck my ass with your cock." He begs.');
    scene.text('So you go back to fucking his ass, feeling his unlubed asshole cling to the shaft of your cock with each stroke, a couple of minutes later he starts moaning louders. "I\'m cumming!" He tenses up, causing his asshole to tighten up around the shaft of your cock, before relaxing with a loud deep moan. You can tell his just blew his load, but you havn\'t shot your load yet, you could fuck him until you cum as well.');
    qspCall(st, 'arousal', 'magicd_anal', 3, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'sex', 'force', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep fucking him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep fucking him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg9.jpg');
    scene.text('"Who said you were allowed to cum yet?" You grab hold of his hips and start hammering his ass with your fake dick balls deep, you can feel your balls smack against his ass, with each thrust. He starts moaning and groaning loudly as you fuck him hard and fast.');
    // TODO-QSP: dynamic text: "I''m sorry <<$pcs_nickname>>! Please punish me!" He moans and groans as you pou...
    scene.text(`"I'm sorry ${((st as any).pcs_nickname || '')}! Please punish me!" He moans and groans as you pound his asshole, and after several minutes you feel your balls tighten and you can tell you are about to cum.`);
    qspCall(st, 'arousal', 'magicd_anal', 2, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum in his ass', handler: (st: GameState) => {
    scene.img('images/pc/magic/penis_envy/guy_internal_butt_cum1.jpg');
    (st as any).orgasm_or = 'yes';
    (st as any).orgasm_txt = 'You bury your cock one last time balls deep into his ass, as you feel your cock twitch as you empty your load into his ass. You moan loudly as you fill his ass with your cum, with the last spurt finished, you pull your cock out of his ass and stand up. He sighs loudly as you do. As you step back you can see your cum leaking out of his gaping hole.';
    qspCall(st, 'arousal', 'magicd_anal', 2, 'dom', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg10.jpg');
    scene.text('As you take off the harness, you can feel the magic leaving your body as your connection to the strapon fades and it once more just becomes a normal strapon. You clean the strapon up before putting it back in your purse. Igor gets up and pulls his pants up before cleaning himself up as well. "We should get back before someone notices." you tell him and he blushes bright red, but nods. Once you\'re both sure everything is how it should be, you leave one at a time and return to the disco.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/disco/disco_peg10.jpg');
    scene.text('As you take off the harness, you can feel the magic leaving your body as your connection to the strapon fades and it once more just becomes a normal strapon. You clean the strapon up before putting it back in your purse. Igor gets up and pulls his pants up before cleaning himself up as well. "We should get back before someone notices." you tell him and he blushes bright red, but nods. Once you\'re both sure everything is how it should be, you leave one at a time and return to the disco.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
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

function enterIgorDiscoBj(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Get down on your knees', handler: (st: GameState) => {
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A4'] = 1;
    qspCall(st, 'boyStat', 'A4');
    scene.img('images/shared/sex/blowjob/cocksucker5.jpg');
    scene.text('You sit on your haunches and Igor pulls his dick out of his pants. It takes all of your resolve to remain straight-faced. His penis is tiny! His small, thin member sticks out of his pubic hair like a mushroom in a meadow - that image alone is enough to almost make you burst into laughter, especially considering that you\'ve seen mushrooms bigger than that.');
    scene.text('Luckily, it\'s too dark for him to see your face and a few coughs cover your stifled laughter until you\'re mentally prepared to do what you came here to do.');
    // TODO-QSP: dynamic text: Feeling somewhat disappointed by his size, you gently wrap your <<$pc_desc[''lip...
    scene.text(`Feeling somewhat disappointed by his size, you gently wrap your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips around the small cock. Sucking on it like you would a normal penis doesn't work because you simply can't bob up and down its length when there's no length to begin with. Even sucking on it is hard because of its size, or lack thereof.`);
    scene.text('Instead, you begin to \'fondle it\' inside your mouth, squeezing it with your lips and licking it all over, easily swirling your tongue around most of it. Igor groans, audibly enjoying the treatment. More so than you expected, in fact, because not a minute after you\'ve started, you feel his hips bucking against your head and taste a few bland drops of semen that would barely constitute a sip of water.');
    scene.text('You can\'t help but feel a little sorry for Igor: Having a tiny dick, no stamina <i>and</i> only a few droplets of semen? This was memorable in all the wrong ways.');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A4', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'At least it\'s over', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIgorDimaDiscoBj(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Get down on your knees', handler: (st: GameState) => {
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A4'] = 1;
    qspCall(st, 'boyStat', 'A1');
    scene.img('images/shared/sex/group/cocksucker6.jpg');
    scene.text('You sit on your haunches and Igor pulls his dick out of his pants. It takes all of your resolve to remain straight-faced. His penis is tiny! His small, thin member sticks out of his pubic hair like a mushroom in a meadow - that image alone is enough to almost make you burst into laughter, especially considering that you\'ve seen mushrooms bigger than that. Dimka\'s dick looks like a tree trunk in comparison and only by focusing your eyes on him do you manage to maintain your composure.');
    scene.text('You take a cock into each hand and move your mouth back and forth between them. Until now, you haven\'t been able to tell what a difference it makes to have a large dick to play with but now, being able to compare them side by side, it\'s a lot more satisfying to suck a bigger one like Dimka\'s, and it shows in your enthusiasm.');
    scene.text('Not that Igor seems to mind, as long as you don\'t stop. In fact, even though you\'re paying more attention to Dimka, Igor is the first to be ready to cum and Dimka roughly uses your mouth to catch up before they both stick the tips of their dicks between your lips and start cumming in your mouth.');
    scene.text('Igor\'s sperm is barely worth mentioning, but Dimka cums so much you almost can\'t keep it all in your mouth. You swallow the semen down in two gulps, lick your lips and show them your empty mouth. Satisfied, the boys button up their pants and go back inside.');
    qspCall(st, 'boyStat', 'A4');
    qspCall(st, 'arousal', 'bj', 5);
    qspCall(st, 'boyStat', 'A1');
    qspCall(st, 'arousal', 'bj', (-5));
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A4', 1);
    qspCall(st, 'cum_call', 'mouth_swallow', 'A1', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Time to leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGirlfriendAsk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the disco', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You go outside with Igor. In a bout of passion, he takes you by the hand and looks you in the eyes.');
    // TODO-QSP: dynamic text: "You''re such a pretty girl, <<$pcs_nickname>>. Every time I see you, my mood ge...
    scene.text(`"You're such a pretty girl, ${((st as any).pcs_nickname || '')}. Every time I see you, my mood gets better, even when I'm feeling down. I like you very much, ${((st as any).pcs_nickname || '')}, and I'd really like to start a relationship with you."`);
    scene.actions([
      { label: 'Refuse and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Agree', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Lover'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    // TODO-QSP: dynamic text: You agree to date Igor and a smile blossoms on his face as he hugs you tightly. ...
    scene.text(`You agree to date Igor and a smile blossoms on his face as he hugs you tightly. "I'm so happy, ${((st as any).pcs_nickname || '')}! Now that we're a couple… Can we kiss?"`);
    scene.text('Something about the eagerness with which he suggests this makes you think he\'s never kissed a girl before. Without waiting for your answer, he\'s already leaning in to kiss you…');
    qspCall(st, 'willpower', 'kiss', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Domina'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You tell Igor that you\'re not going to just give away kisses like that, and even though you\'re grinning, your demeanor is unmistakably dominant. So much so that Igor blushes and kneels before you.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I beg you, on my knees, just one kiss! I''ll do anything for...
    scene.text(`"${((st as any).pcs_nickname || '')}, I beg you, on my knees, just one kiss! I'll do anything for you - I'll be your willing slave."`);
    scene.text('Even though you expected him to be put off by your refusal, he seems… happy that you\'re taking charge and not just letting him do as he pleases. It\'s almost as if he <i>wants</i> to be dominated…');
    qspCall(st, 'willpower', 'misc', 'force', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make him submit', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make him submit', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Love'] = ((st as any).IgorQW['Love'] ?? 0) + (20);
    scene.img('images/shared/sex/dom/leg.jpg');
    scene.text('You smile at Igor, kneeling at your feet, right here in public, and tell him that he may kiss your foot. He immediately scrambles to perform the task with more enthusiasm than you thought possible. In no time at all, he\'s kissing your naked foot, caressing it with reverence and licking your toes, his tongue tickling you.');
    scene.text('He\'s hunched over, leaning on one elbow. At first, you don\'t understand why but simply enjoy this strange foot massage. It\'s not until he groans and you see a tiny jet of sperm hit the pavement that you realize he had been masturbating to your feet - literally - right here in front of you while he kissed and caressed your toes.');
    scene.text('As weird of a scene as that was, it feels oddly empowering that he could get off like that within the confines of what you allowed him to do. Even stranger is how he\'s thanking you profusely.');
    qspCall(st, 'arousal', 'kiss', 5, 'dom', 'feet');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'That was unexpected', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let\'s not overdo it', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Love'] = ((st as any).IgorQW['Love'] ?? 0) + (10);
    scene.img('images/shared/sex/kiss/kiss.jpg');
    scene.text('You tell Igor to get back on his feet and, meeting his eyes, kiss him. He responds with such passion that you think your dominance has aroused him a little.');
    qspCall(st, 'arousal', 'kiss', 5, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Enough for now', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him kiss you', handler: (st: GameState) => {
    ((st as any).IgorQW = (st as any).IgorQW ?? {})['Love'] = ((st as any).IgorQW['Love'] ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    scene.text('You give in and give him a gentle kiss. He gives you a smile afterwards, but almost seems a little disappointed, although you can\'t tell why.');
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Enough of this', handler: (st: GameState) => {
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

function enterSonia(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 19) {
    ((s as any).discobloc = (s as any).discobloc ?? {})['A25'] = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'npcStat', 'A25');
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco1.jpg');
  scene.text('You walk back to Sonia\'s house. She seems to be in a pretty good mood, chatting about a variety of subjects while you hold hands.');
  scene.text('Once at her home, she unlocks the door. "Be quiet. My mom is asleep."');
  scene.text('The two of you sneak to her room before hopping on the bed and quickly stripping down to your underwear.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco2.jpg');
    scene.text('Before you can strip more, Sonia starts kissing you. You return her passionate kiss with one of your own and you quickly start to get lost in the moment as everything else just seems to fade away.');
    qspCall(st, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Foreplay', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco3.jpg');
    scene.text('She exposes your tits and breaks the kiss to nuzzle, kiss, lick and suck on your nipples. You moan in pleasure as her hands roam around your body at the same time.');
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck her nipple', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco4.jpg');
    scene.text('She pulls her bra off and pushes her small tits into your face. You return the favor by kissing, licking and sucking her nipples and she moans in pleasure as you do. She slides her panties off as you play with her tits.');
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco5.jpg');
    scene.text('She pulls away and lays back on her bed with her legs spread wide. You can see her glistening wet pussy and place your head between her legs and start licking it. She moans loudly as you do, enjoying the attention of your tongue.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep licking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco6.jpg');
    scene.text('You slip your tongue inside of her, causing her to moan even louder. She places a hand on the back of your head to pull it against her crotch as she rotates her hips, grinding her pussy against your face.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get eaten', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco7.jpg');
    scene.text('She makes you stop before she cums. "Okay, your turn." she giggles. You lay back and spread you legs as she eagerly crawls up to you and starts lapping away at your clit and pussy. She also slides her tongue inside you.');
    qspCall(st, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco8.jpg');
    scene.text('She keeps eating you out, and seems to be getting better at it. Her tongue darts around expertly and she pays plenty of attention to each area, changing things up to keep you on the edge.');
    qspCall(st, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Tribbing', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/sonia/sex/disco/disco9.jpg');
    // TODO-QSP: dynamic text: She suddenly stops and climbs on top of you before spreading her legs so your cl...
    scene.text(`She suddenly stops and climbs on top of you before spreading her legs so your clits are touching. She starts grinding her pussy against yours, and this goes on for several minutes until she starts moaning loudly and starts shaking in orgasm. She lies down beside you and you just lay side by side breathing heavily. "That was wonderful, ${((st as any).pcs_nickname || '')}."`);
    scene.text('You glance over and grin at her. "Yeah, it was pretty amazing." You then glance over at the clock. "It\'s getting late, I should really get home before my mother throws a fit."');
    // TODO-QSP: dynamic text: Sonia nods and giggles before she kisses you and you both get dressed. Once you'...
    scene.text(`Sonia nods and giggles before she kisses you and you both get dressed. Once you're done, she pulls you into another long kiss. "See you later, ${((st as any).pcs_nickname || '')}."`);
    scene.text('You nod. "Yeah, see you later." She walks you to the door and lets you out, locking the door behind you once you\'re outside.');
    qspCall(st, 'arousal', 'trib', 3, 'lesbian');
    qspCall(st, 'arousal', 'end');
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
  scene.build();
}

function enterDan(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A10'] = 1;
  (s as any).DansOralSlut = 1;
  qspCall(s, 'fame', 'pav', 'sex', 1);
  scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco1.jpg');
  scene.text('You meekly nod and lower yourself in front of Dan, who eagerly unbuttons his pants and pulls out his erect dick. You tentatively lick the engorged head, coaxing a moan out of him. "That\'s it baby! Now take it into your mouth."');
  scene.text('You nod and part your lips, slowly guiding his cock into your mouth. Dan puts his hand on your head and gets a firm grip of your hair, but to your surprise he doesn\'t make you take more of his cock in. You\'re still in control of the pace, and gently bob your head up and down on his cock as he gently strokes your hair.');
  qspCall(s, 'arousal', 'bj', 3, 'sub', 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco2.jpg');
    scene.text('You keep sucking his dick as he moans softly. "That\'s it baby. Keep sucking it like a good girl."');
    scene.text('He lets go of your hair and lets you guide the action, but after a while he starts moving his hips forward to force his dick further into your mouth.');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'inhibition');
    qspCall(st, 'stat', '');
    if ((Math.floor(Math.random() * 4) + 1) === 1  &&  ((st as any).stat ?? 0)?.['vaginal'] > 0) {
      scene.text('He reaches down and pulls you up before roughly shoving you over to the railing and bending you over it. He quickly strips you from the waist down and you feel him rubbing the tip of his hard cock against your wet slit.');
      scene.actions([
        { label: 'Get fucked', goto: ['pav_discoev1', 'dan_fuck'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 4) + 1) === 2) {
        if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
          scene.text('He reaches down and pulls you up before roughly shoving you over to the railing and bending you over it. He quickly strips you from the waist down and you feel him rubbing the tip of his hard cock against your asshole. He spits in your ass crack and works it in to add a little lubrication.');
          scene.text('You quickly reach into your purse and pull out the bottle of lube before handing it to him. "Please use this."');
          scene.text('He snorts and takes the bottle before you feel him squirt some lube onto your asshole and work it in.');
          // TODO-QSP: dynamic text: "Fuck, you''re such a slut, <<$pcs_nickname>>! Carrying around a bottle of lube ...
          scene.text(`"Fuck, you're such a slut, ${((st as any).pcs_nickname || '')}! Carrying around a bottle of lube so guys can fuck you in the ass!" he says with a laugh.`);
          scene.actions([
            { label: 'Get butt fucked', goto: ['pav_discoev1', 'dan_buttfuck'] },
          ]);
        } else {
          scene.text('He reaches down and pulls you up before roughly shoving you over to the railing and bending you over it. He quickly strips you from the waist down and you feel him rubbing the tip of his hard cock against your asshole. He spits in your ass crack and works it in to add a little lubrication.');
          scene.actions([
            { label: 'Get butt fucked', goto: ['pav_discoev1', 'dan_buttfuck'] },
          ]);
        }
      } else {
        scene.actions([
          { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco3.jpg');
    scene.text('You keep sucking his dick as he moans softly. "Not bad. You\'ve been practicing, haven\'t you?"');
    scene.text('He starts sliding his dick in and out of your mouth as you continue sucking on it.');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get throat fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco3.jpg');
    scene.text('He starts fucking your throat, making you gag as his balls slap against your chin.');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'inhibition', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco9.jpg');
    scene.text('After a few minutes, you feel him tense up before his warm cum spurts into your mouth. When he\'s finished, he pulls out and wipes his dick against your cheek before tucking it back into his pants as you wipe your mouth with the back of your hand.');
    // TODO-QSP: dynamic text: He nods happily. "Not bad, <<$pcs_nickname>>. Your technique is still a bit lack...
    scene.text(`He nods happily. "Not bad, ${((st as any).pcs_nickname || '')}. Your technique is still a bit lacking, but we'll work on that next time."`);
    scene.text('With that, he turns around and walks down the stairs without looking back, leaving you with a mouthful of cum dribbling down your chin.');
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'inhibition');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A10', 1);
    qspCall(st, 'cum_call', 'face', 'A10', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterDanFuck(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A10'] = 1;
  qspCall(s, 'boyStat', 'A10');
  qspCall(s, 'fame', 'pav', 'sex', 1);
  scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco5.jpg');
  // TODO-QSP: dynamic text: He slides his <<dick>>cm <<$dick_girth>> dick into your pussy and begins to fuck...
  scene.text(`He slides his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick into your pussy and begins to fuck you. He grabs hold of your hips with his hands to hold you in place as he slowly starts picking up speed and fucking you harder.`);
  qspCall(s, 'arousal', 'vaginal', 3, 'sub', 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco6.jpg');
    scene.text('He slams his hips against your ass, the slapping sound of flesh on flesh echoing into the stairwell as he pounds you hard and fast. The two of you moan loudly as his balls slap against your clit with each thrust and you have to hold onto the railing to keep your balance.');
    qspCall(st, 'arousal', 'vaginal', 3, 'sub', 'inhibition', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco9.jpg');
    scene.text('He suddenly pulls out, grabs you by the hair and forces you down to your knees.');
    scene.text('"Open your mouth!" he orders.');
    scene.text('You open your mouth as his cum starts splattering against your face and onto your tongue. When he\'s finished, he wipes his dick off against your cheek before tucking it back into his pants as you wipe your mouth with the back of your hand.');
    // TODO-QSP: dynamic text: He nods happily. "Not bad, <<$pcs_nickname>>. Your technique is still a bit lack...
    scene.text(`He nods happily. "Not bad, ${((st as any).pcs_nickname || '')}. Your technique is still a bit lacking, but we'll work on that next time."`);
    scene.text('With that, he turns around and walks down the stairs without looking back at you, leaving you with a mouthful of cum dribbling down your chin.');
    qspCall(st, 'arousal', 'auto_lube', 'anal');
    qspCall(st, 'arousal', 'vaginal', 3, 'sub', 'inhibition');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A10', 1);
    qspCall(st, 'cum_call', 'face', 'A10', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDanButtfuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A10');
  qspCall(s, 'fame', 'pav', 'sex', 1);
  scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco7.jpg');
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    // TODO-QSP: dynamic text: With the help of the lube, he easily slides his <<dick>>cm <<$dick_girth>> dick ...
    scene.text(`With the help of the lube, he easily slides his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick into your asshole and starts fucking you. He grabs hold of your hips and holds you in place as he slowly starts picking up speed, fucking you harder as he does.`);
  } else {
    // TODO-QSP: dynamic text: With only some spit and his precum as lube, it takes a bit of effort for him to ...
    scene.text(`With only some spit and his precum as lube, it takes a bit of effort for him to force his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick into your asshole, causing you to groan in pain as he forces himself up your ass.`);
    // TODO-QSP: dynamic text: He pushes deep before he grabs hold of your hips to hold you in place as he slow...
    scene.text(`He pushes deep before he grabs hold of your hips to hold you in place as he slowly starts fucking you. "Fuck ${((s as any).pcs_nickname || '')}, your ass is so tight!"`);
  }
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  qspCall(s, 'arousal', 'anal', 3, 'sub', 'inhibition', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco8.jpg');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.text('The lube helps him easily slide in and out of your asshole as he slams his hips against your ass, the slapping sound of flesh on flesh echoing into the stairwell as he pounds you hard and fast.');
      scene.text('The two of you moan loudly as his balls slap against your pussy with each thrust and you have to hold onto the railing to keep your balance.');
    } else {
      scene.text('It\'s a little painful with little lubrication, but Dan keeps fucking your ass regardless as he slams his hips against your ass, the slapping sound of flesh on flesh echoing into the stairwell as he pounds you hard and fast.');
      scene.text('He moans in pleasure and your groan in pain as his balls slap against your pussy with each thrust and you have to hold onto the railing to keep your balance.');
    }
    qspCall(st, 'arousal', 'auto_lube', 'anal');
    qspCall(st, 'arousal', 'anal', 3, 'sub', 'inhibition', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dan/sex/disco/disco9.jpg');
    scene.text('He suddenly pulls out, grabs you by the hair and forces you down to your knees.');
    scene.text('"Open your mouth!" he orders.');
    scene.text('You open your mouth as his cum starts splattering against your face and onto your tongue. When he\'s finished, he wipes his dick off against your cheek before tucking it back into his pants as you wipe your mouth with the back of your hand.');
    // TODO-QSP: dynamic text: He nods happily. "Not bad, <<$pcs_nickname>>. Your technique is still a bit lack...
    scene.text(`He nods happily. "Not bad, ${((st as any).pcs_nickname || '')}. Your technique is still a bit lacking, but we'll work on that next time."`);
    scene.text('With that, he turns around and walks down the stairs without looking back at you, leaving you with a mouthful of cum dribbling down your chin.');
    qspCall(st, 'arousal', 'anal', 3, 'sub', 'inhibition');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A10', 1);
    qspCall(st, 'cum_call', 'face', 'A10', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRadomir(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A154');
  ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A154'] = 1;
  qspCall(s, 'fame', 'pav', 'sex', 1);
  (s as any).loc = 'gdktoilet_mens';
  (s as any).locM = 'gdktoilet_mens';
  (s as any).loc_arg = 'mens';
  (s as any).locM_arg = 'mens';
  scene.img('images/characters/pavlovsk/school/boy/radomir/sex/disco/radbj1.jpg');
  scene.text('Radomir leads you to the mens room and pulls you inside - luckily nobody is inside. He drags you to the last stall and pulls you inside, where he pulls out his semi erect cock as soon as you get inside.');
  scene.text('"Let me see that pretty pussy of yours," he orders and you do as he asks and expose your pussy to him.');
  scene.text('"Nice… Well? Go on then…" he says while motioning to his cock.');
  qspCall(s, 'arousal', 'voyeur', 3, 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Jerk him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/disco/radbj2.jpg');
    scene.text('You step closer, take his dick into your hand and start stroking it. As you do, he reaches down and starts rubbing your clit, causing you to moan in pleasure as you feel your pussy getting wet.');
    scene.text('As you continue to jerk him off, he starts finger banging you. Just as it starts to really feel good, he stops and you feel his other hand on top of your head as he pushes you down to your knees.');
    qspCall(st, 'arousal', 'hj', (-3), 'inhibition');
    qspCall(st, 'arousal', 'vaginal_finger', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/disco/radbj3.jpg');
    scene.text('Once on your knees, you open your mouth and start sucking his cock, taking it deep and bobbing your head back and forth with your lips wrapped tightly around his shaft.');
    scene.text('He starts moaning loudly in pleasure. "Oh yeah, that\'s it! Suck my dick, bitch!"');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/disco/radbj4.jpg');
    scene.text('You take hold of his shaft with one hand and start jerking him off in rhythm with your blowjob.');
    qspCall(st, 'arousal', 'hj', (-3), 'inhibition');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/disco/radbj5.jpg');
    scene.text('You feel him place his hand on the back of your head and start forcing you to take his cock deeper into your mouth. You remove your hand from his shaft and start deepthroating him as best you can, his hand on your head forcing it down your throat and causing you to gag.');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/disco/radbj6.jpg');
    scene.text('You keep sucking before you suddenly feel his cum squirting into your mouth. You pull away in surprise and the rest of his cum splatters across your face as you swallow what\'s in your mouth.');
    scene.text('Once he\'s finished, he wipes his dick against your cheek before tucking it back into his pants.');
    scene.text('"You could have warned me, asshole!" you scream at him.');
    scene.text('He just laughs in response. "<i>Please!</i> All you bitches love the taste of cum! Don\'t try and deny it."');
    scene.text('With that, he walks out of the stall without looking back, leaving you with cum dribbling down your chin.');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A154', 1);
    qspCall(st, 'cum_call', 'face', 'A154', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Men\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/bathroom_mens.jpg');
    scene.text('You crack open the stall door and peek around the corner. With nobody around, you make a dash for the sinks and look in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> at your cum plastered face.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
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

function enterValentin(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A158'] = 1;
  qspCall(s, 'core_library', 'setloc', 'gdktoilet', 'womens');
  scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_bj1.jpg');
  scene.text('Valentin leads you to the women\'s room, where he peeks in before pulling you inside with him. He drags you to the last stall and pulls out his dick once inside.');
  scene.text('You take a seat on the toilet and start sucking his cock, which causes him to moan softly as you feel his semi hard dick start to harden in your mouth.');
  qspCall(s, 'arousal', 'bj', 3, 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Interrupted', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_bj2.jpg');
    scene.text('You keep sucking Valentin\'s dick and he starts moaning louder when you suddenly hear the voice of a girl. "Is someone in here?"');
    scene.text('You keep sucking his dick, trying to be quiet, but the stall door is pushed open and you see a girl standing there, staring at you as you. It\'s Marisha, one of your brother\'s friends you\'ve seen around a few times.');
    scene.text('She clamps her hand over her mouth and makes a little squealing noise. "Oh. My. God! You\'re totally sucking his dick… and it\'s so big… Is that normal?! What does it taste like?"');
    scene.text('She starts barraging you with questions, seemingly not caring that you\'re in the middle of giving Valentin a blowjob. He gives her a confused stare before looking at you and shrugging, not caring that she\'s watching.');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let her watch', handler: (st: GameState) => {
    (st as any).marisha_watched = 1;
    (st as any).watched = 1;
    qspCall(st, 'fame', 'pav', 'sex', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_bj3.jpg');
    scene.text('You just ignore her and continue sucking Valentin\'s dick while ignoring her questions.');
    scene.text('"Oh my god, this is so fucking hot! I\'m getting so wet watching this."');
    scene.text('Before she can say more, Valentin interrupts. "How about you let me fuck that sweet little pussy of yours?"');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Agree', goto: ['pav_discoev1', 'valentin_cuni'] },
      { label: 'Just suck him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_bj4.jpg');
    scene.text('You stop sucking his dick and shake your head. "Maybe some other time?"');
    scene.text('He chuckles and nods as you go back to sucking his dick, bobbing your head back and forth. He reaches down and pulls your clothes aside to expose your breasts, playing with them as Marisha bites her lip.');
    scene.text('"His dick is so big! Does it hurt your jaw to suck on it?"');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_bj5.jpg');
    scene.text('You feel him place his hand on the back of your head and start forcing you to take his cock deeper into your mouth, so you remove your hand from his shaft and start deepthroating him as best you can, his hand on your head forcing it down your throat and causing you to gag.');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_cum.jpg');
    scene.text('A few minutes later, he starts to tense up and grunt before he pulls out and his cum splatters across your breasts.');
    scene.text('"Jesus, that\'s so much cum!" Marisha exclaims, seemingly turned on and intrigued by what she sees.');
    // TODO-QSP: dynamic text: "Fuck, I needed that!" Valentin grunts as he tucks his dick away and walks out o...
    scene.text(`"Fuck, I needed that!" Valentin grunts as he tucks his dick away and walks out of the stall. "That was great, ${((st as any).pcs_nickname || '')}. We should do it again sometime."`);
    scene.text('Marisha clamps her hand over her mouth. "You guys do this all the time?!"');
    scene.text('You sigh. "No, not <i>all</i> the time, Just… sometimes, when I\'m in the mood."');
    scene.text('Valentin grins and shakes his head, then walks out of the restroom. You can feel his cum dripping from your breasts as Marisha asks you more questions.');
    scene.text('"Look, we can talk about this later, okay?" you say, interrupting her endless questioning. "I need to get cleaned up."');
    scene.text('"Oh… Sorry…" she blushes before she looks you over a final time, then hurries out of the restroom.');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'cum_call', 'breasts', 'A158', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Women\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/womens/bathroom_women.jpg');
    scene.text('You crack open the stall door and peek around the corner. With nobody around, you make a dash for the sinks and look in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> at your cum covered breasts.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
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
      { label: 'Tell her to go away', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_bj4.jpg');
    scene.text('You pull his dick out of your mouth and turn towards her. "What the fuck?! Marisha?! Go away!"');
    scene.text('"Sorry!" she squeaks before she closes the door.');
    scene.text('You glance up at Valentin, who just starts laughing as you shake your head and go back to sucking his dick.');
    scene.text('"Let me fuck that pretty pussy of yours!" he says a few minutes later.');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Agree', goto: ['pav_discoev1', 'valentin_cuni'] },
      { label: 'Just suck him off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_bj5.jpg');
    scene.text('You stop sucking his dick and shake your head. "Maybe some other time?"');
    scene.text('He chuckles and nods, and you go back to sucking his dick, bobbing your head back and forth. He reaches down and pulls your clothes aside so he can play with your breasts.');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_cum.jpg');
    scene.text('A few minutes later, he starts to tense up and grunt before he pulls out and his cum splatters across your breast.');
    // TODO-QSP: dynamic text: "Fuck, I needed that!" he grunts as he tucks his dick away and walks out of the ...
    scene.text(`"Fuck, I needed that!" he grunts as he tucks his dick away and walks out of the stall. "That was great, ${((st as any).pcs_nickname || '')}. We should do it again sometime."`);
    scene.text('You nod in response and he grins before walking out of the restroom.');
    qspCall(st, 'arousal', 'bj', 3, 'inhibition');
    qspCall(st, 'cum_call', 'breasts', 'A158', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Women\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/womens/bathroom_women.jpg');
    scene.text('You crack open the stall door and peek around the corner. With nobody around, you make a dash for the sinks and look in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> at your cum covered breasts.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
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

function enterValentinCuni(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_cuni1.jpg');
  scene.text('"Sure, I\'m up for getting some," you respond and he grins.');
  scene.text('"Well let\'s get you nice and wet then," he grins before he pulls you up and gets down on his knees. He then moves your clothes aside to expose your pussy and starts licking and sucking on your clit, causing you to moan in pleasure.');
  if (((s as any).watched ?? 0) === 1) {
    scene.text('"Oh wow, does that feel good? It sounds like it does! I didn\'t know guys would do that!" Marisha says as she watches.');
  }
  qspCall(s, 'arousal', 'cuni', 3, 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_eat2.jpg');
    scene.text('He starts licking your slit and tongue fucking you while using his fingers to rub your clit, making you wet as you moan loudly.');
    scene.text('After a few minutes, he stops and stands up. "Let\'s stretch that little pussy out now, shall we?"');
    if (((st as any).watched ?? 0) === 1) {
      scene.text('You hear Marisha squeal a little. "Oh my god! This is so fucking hot!"');
    }
    qspCall(st, 'arousal', 'cuni', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', goto: ['pav_discoev1', 'valentin_vag'] },
      { label: 'Just the ass', goto: ['pav_discoev1', 'valentin_anal'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterValentinVag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A158');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/alylav4.jpg');
  // TODO-QSP: dynamic text: He strips you from the waist down and turns you around before you feel his <<dic...
  scene.text(`He strips you from the waist down and turns you around before you feel his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick slide into your wet pussy, causing you to moan in pleasure as he starts slowly fucking you, picking up speed and going deeper the louder you moan.`);
  if (((s as any).watched ?? 0) === 1) {
    scene.text('"Holy shit, he\'s actually fucking you with that thing! It\'s so fucking big! Does it hurt? I mean it\'s as big as my forearm! Well, you sound like you\'re liking it… Does it really feel that good?" Marisha excitedly keeps asking, despite you not answering her.');
  }
  qspCall(s, 'arousal', 'vaginal', 3, 'inhibition');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_vag2.jpg');
    if (((st as any).watched ?? 0) === 1) {
      scene.text('Several minutes go by and Marisha never stops talking, although you\'re so focused that you don\'t really pay attention. By now, Valentin is fucking you hard and fast, his balls slapping against your clit as he buries himself inside you.');
      scene.text('You then suddenly feel him applying some lube to your asshole.');
    } else {
      scene.text('Several minutes go by and Valentin starts to fuck you hard and fast, his balls slapping against your clit as he buries himself inside you. You then suddenly feel him applying some lube to your asshole.');
    }
    qspCall(st, 'arousal', 'vaginal', 3, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', goto: ['pav_discoev1', 'valentin_anal'] },
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_cum.jpg');
    if (((st as any).watched ?? 0) === 1) {
      scene.text('You reach back and grab his hand. "Just fuck my pussy."');
      scene.text('He looks a little disappointed, but nods and keeps fucking your pussy.');
      scene.text('A few minutes later, he starts to tense up and grunt before he pulls out of you, quickly turns you around and pushes you down onto the toilet. He then jerks his dick and his cum starts splattering over your breasts.');
      scene.text('"Jesus, that\'s so much cum!" She seems utterly shocked, turned on and intrigued by what she sees.');
      // TODO-QSP: dynamic text: "Fuck, I needed that!" Valentin grunts as he tucks his dick away and walks out o...
      scene.text(`"Fuck, I needed that!" Valentin grunts as he tucks his dick away and walks out of the stall. "That was great, ${((st as any).pcs_nickname || '')}. We should do it again sometime."`);
      scene.text('Marisha clamps her hand over her mouth. "You guys do this all the time?!"');
      scene.text('You sigh and shake your head. "No, not <i>all</i> the time, Just… sometimes, when I\'m in the mood."');
      scene.text('Valentin grins and shakes his head, then walks out of the restroom. You can feel his cum dripping from your breasts as Marisha asks you more questions.');
      scene.text('"Look, we can talk about this later, okay?" you say, interrupting her endless questioning. "I need to get cleaned up."');
      scene.text('"Oh… Sorry…" she blushes before she looks you over a final time, then hurries out of the restroom.');
    } else {
      scene.text('You reach back and grab his hand. "Just fuck my pussy."');
      scene.text('He looks a little disappointed, but nods and keeps fucking your pussy.');
      scene.text('A few minutes later, he starts to tense up and grunt before he pulls out of you, quickly turns you around and pushes you down onto the toilet. He jerks his dick and his cum starts splattering across your breasts.');
      // TODO-QSP: dynamic text: "Fuck, I needed that!" he grunts as he tucks his dick away and walks out of the ...
      scene.text(`"Fuck, I needed that!" he grunts as he tucks his dick away and walks out of the stall. "That was great, ${((st as any).pcs_nickname || '')}. We should do it again sometime."`);
      scene.text('You nod in response and he grins before walking out of the restroom.');
    }
    qspCall(st, 'cum_call', 'breasts', 'A158', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Women\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/womens/bathroom_women.jpg');
    scene.text('You crack open the stall door and peek around the corner. With nobody around, you make a dash for the sinks and look in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> at your cum covered breasts.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterValentinAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_anal1.jpg');
  if (((s as any).watched ?? 0) === 1) {
    scene.text('He lubes up his dick and your asshole before turning you around and bending you over. You place your hands on the door frame to balance yourself as you feel his large dick pushing against your asshole until it painfully pops into your ass. You hiss in pain and he stops moving to let you adjust before he slowly starts fucking you.');
    // TODO-QSP: dynamic text: "Fuck <<$pcs_nickname>>, your ass is so tight!"
    scene.text(`"Fuck ${((s as any).pcs_nickname || '')}, your ass is so tight!"`);
    scene.text('Marisha\'s mouth drops open and her eyes grow wide. "OH MY GOD! Did he really stick that massive dick in your ass? My god, doesn\'t that hurt? That thing is huge! I think I would be screaming in pain, but you sound like you\'re enjoying it. Do you really like it?"');
  } else {
    scene.text('He lubes up his dick and your asshole before turning you around and bending you over. You place your hands on the door frame to balance yourself as you feel his large dick pushing against your asshole until it painfully pops into your ass. You hiss in pain and he stops moving to let you adjust before he slowly starts fucking you.');
    // TODO-QSP: dynamic text: "Fuck <<$pcs_nickname>>, your ass is so tight!"
    scene.text(`"Fuck ${((s as any).pcs_nickname || '')}, your ass is so tight!"`);
  }
  qspCall(s, 'arousal', 'anal', 3, 'inhibition', 'lube');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_anal2.jpg');
    scene.text('He starts fucking you hard and fast until you start grunting in pain, at which point he backs off until you start moaning in pleasure again and keeps to that speed and depth as he fucks your ass. "Fuck, I love butt sluts! You\'re almost as big of a butt slut as Nush!"');
    scene.text('You\'re barely paying attention to him as you start getting completely lost in the pleasure.');
    if (((st as any).watched ?? 0) === 1) {
      scene.text('You don\'t know what Marisha is saying anymore, just that she hasn\'t shut up yet.');
    }
    qspCall(st, 'arousal', 'anal', 3, 'inhibition', 'lube');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/valentin/sex/disco/watched_cum.jpg');
    if (((st as any).watched ?? 0) === 1) {
      scene.text('A few minutes later, he starts to tense up and grunt before he pulls out of you, quickly turns you around and pushes you down onto the toilet. He jerks his dick and his cum starts splattering across your breasts.');
      scene.text('"Jesus, that\'s so much cum!" She seems utterly shocked, turned on and intrigued by what she sees.');
      // TODO-QSP: dynamic text: "Fuck, I needed that!" Valentin grunts as he tucks his dick away and walks out o...
      scene.text(`"Fuck, I needed that!" Valentin grunts as he tucks his dick away and walks out of the stall. "That was great, ${((st as any).pcs_nickname || '')}. We should do it again sometime."`);
      scene.text('Marisha clamps her hand over her mouth. "You guys do this all the time?!"');
      scene.text('You sigh and shake your head. "No, not <i>all</i> the time, Just… sometimes, when I\'m in the mood."');
      scene.text('Valentin grins and shakes his head, then walks out of the restroom. You can feel his cum dripping from your breasts as Marisha asks you more questions.');
      scene.text('"Look, we can talk about this later, okay?" you say, interrupting her endless questioning. "I need to get cleaned up."');
      scene.text('"Oh… Sorry…" she blushes before she looks you over a final time, then hurries out of the restroom.');
    } else {
      scene.text('A few minutes later, he starts to tense up and grunt before he pulls out of you, quickly turns you around and pushes you down onto the toilet. He jerks his dick and his cum starts splattering across your breasts.');
      // TODO-QSP: dynamic text: "Fuck, I needed that!" Once he finishes, he tucks his dick away and walks out of...
      scene.text(`"Fuck, I needed that!" Once he finishes, he tucks his dick away and walks out of the stall. "That was great ${((st as any).pcs_nickname || '')}. We should do it again sometime."`);
      scene.text('You nod in response and he grins before walking out of the restroom.');
    }
    qspCall(st, 'cum_call', 'breasts', 'A158', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Women\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/womens/bathroom_women.jpg');
    scene.text('You crack open the stall door and peek around the corner. With nobody around, you make a dash for the sinks and look in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> at your cum covered breasts.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLera(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'core_library', 'setloc', 'gdktoilet', 'womens');
  qspCall(s, 'npcStat', 'A21');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom1.jpg');
  scene.text('You make your way down to the women\'s restroom and head inside. You glance under the stall doors, but don\'t see any feet. Lera must not have come this way you like you thought.');
  scene.text('You glance over at the mirrors along one wall and walk over to check and touch-up your makeup.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Greet Lera', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom2.jpg');
    scene.text('As you\'re touching up your makeup, you see Lera in the reflection of the mirror walking up behind you. "Oh hey, Lera."');
    scene.text('She frowns at you. "Were you following me?"');
    scene.text('You turn away from the mirror to face her. "You just walked off, so I wanted to make sure you were okay."');
    scene.text('She walks up and grabs the lipstick out of your hand before looking in the mirror herself. You know she doesn\'t wear a lot of makeup, and is much more subtle with it than most of the other girls in school.');
    scene.actions([
      { label: 'Let her use it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom3.jpg');
    scene.text('You roll your eyes. "Sure, be my guest. Use my makeup. I don\'t mind…" you sarcastically quip.');
    scene.text('She smirks in the mirror before putting some of the lipstick on. "Thanks, I will."');
    scene.text('After she\'s done using it, you put out your hand. "Can I have it back now?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom5.jpg');
    scene.text('She hands it back to you and starts to walk away, but then stops and spins back around to face you. Pushing you up against the sink, she leans forward with her face only inches from yours.');
    scene.text('"You don\'t have a problem with me using your lipstick, do you?"');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom6.jpg');
    scene.text('You don\'t know why you suddenly feel the urge to do so, but you lean towards her and start kissing her on the lips.');
    if (((st as any).pcs_hotcat ?? 0) >= 5  &&  ((st as any).npc_rel ?? 0)?.['A21'] >= 50) {
      scene.text('She starts kissing you back almost at once as her hands slide down your body to your thighs.');
      qspCall(st, 'arousal', 'kiss', 3, 'inhibition', 'lesbian');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Make out', goto: ['pav_discoev1', 'lera_sex'] },
      ]);
    } else {
      qspCall(st, 'npc_relationship', 'modify', 'A21', 'dislike');
      scene.text('She jerks away and wipes her lips with the back of her hand. "What the fuck is wrong with you?!"');
      scene.text('You shake your head. "I… I don\'t know! It just felt… right."');
      scene.text('She gives you a dirty look. "Well it wasn\'t! Get the fuck away from me!"');
      scene.text('She angrily turns around and storms out of the restroom. You just sigh and walk out yourself a few minutes later.');
      qspCall(st, 'arousal', 'kiss', 3, 'inhibition', 'lesbian');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
      ]);
    }
  } },
      { label: 'Pull away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom7.jpg');
    scene.text('You pull back from her. "No, but it would\'ve been nice if you asked first is all…"');
    scene.text('She laughs. "I\'ll keep that in mind."');
    scene.text('She then turns and walks out of the restroom, leaving you alone. You just sigh and walk out yourself a few minutes later.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'That\'s mine', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom4.jpg');
    scene.text('You grab her and shove her against the wall. "That\'s mine, bitch! I didn\'t say you could use it!" you scream as you snatch your lipstick out of her hand.');
    scene.text('She just laughs, seemingly not bothered in the slightest.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom5.jpg');
    if (((st as any).pcs_hotcat ?? 0) >= 5  &&  ((st as any).npc_rel ?? 0)?.['A21'] >= 50) {
      scene.text('She starts to walk past you, but then stops and spins back to face you. Pushing you up against the sink, she leans forward with her face only inches from yours.');
      scene.text('"You have a problem with me using your lipstick?"');
      scene.text('You defiantly stand your ground. "You should have asked first, instead of just tak…');
      scene.text('You\'re interrupted when she suddenly leans in and kisses you.');
      scene.actions([
        { label: 'Kiss her back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom6.jpg');
    scene.text('You don\'t know what\'s going on, but you return the kiss just as passionately as her hands slide down to your thighs.');
    qspCall(st, 'arousal', 'kiss', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Make out', goto: ['pav_discoev1', 'lera_sex'] },
    ]);
  } },
        { label: 'Pull away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'npc_relationship', 'modify', 'A21', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom7.jpg');
    scene.text('You pull away from her. "What was that?"');
    scene.text('She blushes before quickly turning around. "Nothing! I\'m just a little drunk is all."');
    scene.text('She quickly rushes out of the restroom, leaving you alone. You just sigh and walk out yourself a few minutes later.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.text('She pushes you up against the sink and leans forward with her face only inches from yours. "You have a problem with me using your lipstick?"');
      scene.text('You pull away from her. "You should have asked first, instead of just taking it."');
      scene.text('She laughs. "I\'ll keep that in mind."');
      scene.text('She then turns and walks out of the restroom, leaving you alone. You just sigh and walk out yourself a few minutes later.');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
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

function enterLeraSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom8.jpg');
  scene.text('As the two of you make out, you feel one of her hands slide down to your crotch and make it\'s way inside your clothes, pulling them aside. Her fingers brush against your clit and then start rubbing it, causing you to moan into her mouth as the two of you continue kissing.');
  scene.text('Her fingers then slide into your pussy and she starts slowly fingerbanging you, going faster the louder you moan.');
  qspCall(s, 'arousal', 'vaginal_finger', 3, 'inhibition', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get eaten out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom9.jpg');
    scene.text('She pulls your clothes off until you\'re naked from the waist down, then drops to her knees and starts licking your pussy, paying a lot of attention to your clit.');
    scene.text('She\'s rather good at this…');
    qspCall(st, 'arousal', 'cuni', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom10.jpg');
    scene.text('She suddenly grabs you by the hips and spins you around to face the mirror, then pushes you forward until your face is almost against the mirror. She then lifts one of your legs up so your knee is on the counter, giving her easier access to your pussy.');
    qspCall(st, 'arousal', 'cuni', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return the favor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom11.jpg');
    scene.text('When she stops, you turn and see that she\'s pulled her shirt up to expose and play with her breasts, so you quickly drop down in front of her and pull her panties down before you start to lick and suck on her clit, causing her to moan loudly in pleasure.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep licking her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom12.jpg');
    scene.text('She pulls her panties off and puts one foot up on the counter, spreading her legs wide as you continue licking and sucking on her clit, even working your way down to dart your tongue inside her soaking wet pussy.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom13.jpg');
    scene.text('She moves to grab the backpack that she often carries around. Curious, you stop and stand up to see what she\'s doing. She opens the pack and reaches before pulling out a small vibrator.');
    scene.actions([
      { label: 'Take it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom14.jpg');
    scene.text('She helps lift you up so you\'re sitting on the counter top. You then spread your legs as she gets on her knees and sucks on the vibrator before sliding it into your pussy and fucking you with it.');
    qspCall(st, 'arousal', 'vaginal_dildo', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'She eats your pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom15.jpg');
    scene.text('She stops fucking you with the vibrator and buries her face back in your crotch as she tongue fucks you. You moan loudly as she sits the vibrator on the counter next to you and keeps plunging her tongue in and out of you.');
    qspCall(st, 'arousal', 'cuni', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Use it on her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom16.jpg');
    scene.text('You reluctantly pull her away from you and climb off the counter before pushing her against it, bending her over slightly as you take the wet vibrator and plunge it into her pussy.');
    scene.text('She moans loudly as you fuck her with it, and within a few minutes her moaning gets very loud and she has a shuddering orgasm, barely able to remain standing until her legs give out.');
    scene.text('With your help, she gently sinks to the floor and lies on her back.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Aftermath', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lera/sex/disco/restroom17.jpg');
    // TODO-QSP: dynamic text: Laying side by side on the restroom floor, basking in the afterglow, the two of ...
    scene.text(`Laying side by side on the restroom floor, basking in the afterglow, the two of you kiss on and off for several minutes before she gets up and starts getting dressed. "Thanks ${((st as any).pcs_nickname || '')}, I needed that."`);
    scene.text('You laugh in response. "You\'re welcome. I enjoyed it too. Maybe we can do it again some time?"');
    scene.text('She smiles at you. "Yeah maybe, but I should get going."');
    scene.text('She gives you a quick kiss on the lips after you both finish getting dressed before she walks out of the restroom.');
    qspCall(st, 'arousal', 'kiss', 3, 'inhibition', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.text('<center><b>Community Center - Women\'s Restroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/womens/bathroom_women.jpg');
    scene.text('Now alone in the restroom, you check your makeup in the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> before leaving yourself.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
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

function enterAlyona(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'core_library', 'setloc', 'gdktoilet', 'womens');
  qspCall(s, 'npcStat', 'A143');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom1.jpg');
  scene.text('On her way out, Alyona stops to grab a bottle of wine from one of the other gopniks, then makes her way down to the restrooms. She staggers into the women\'s room and you follow her inside.');
  scene.text('You enter to see her standing by one of the stalls, gulping down the wine. After taking a huge swig, she turns towards you and offers you the bottle. "Here, want a drink?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gdktoilet', 'start'] },
    { label: 'Take a drink', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'wine', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom2.jpg');
    scene.text('You nod and take a swig of the wine before handing the bottle back to her.');
    scene.actions([
      { label: 'Pass it back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom3.jpg');
    scene.text('"So why did you follow me?" she asks before taking another drink, then offering the bottle back to you.');
    scene.actions([
      { label: 'Take another drink', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'wine', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom4.jpg');
    scene.text('You take the nearly empty bottle back. "I just wanted to check on you and make sure you were okay. You seem pretty drunk," you reply as you finish off the bottle of wine.');
    scene.text('"Pffft… I\'m fine, just having a little fun. You guys worry too much…"');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom5.jpg');
    if (((st as any).npc_rel ?? 0)?.['A143'] >= 50  &&  ((st as any).pcs_hotcat ?? 0) >= 5) {
      scene.text('You feel the urge to lean in and kiss her. She\'s startled at first, but then starts kissing you back as her hands start roaming over your body.');
      qspCall(st, 'arousal', 'kiss', 3, 'inhibition', 'lesbian');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Make out', goto: ['pav_discoev1', 'alyona_makeout'] },
      ]);
    } else {
      qspCall(st, 'npc_relationship', 'modify', 'A143', 'dislike');
      scene.text('You feel the urge to lean in and kiss her, but she instantly pulls away from you.');
      scene.text('"What the fuck are you doing!?" she shouts and pushes you away.');
      scene.text('You shake your head while blushing. "Sorry, I… I just got caught up in the moment…"');
      scene.text('She angrily pushes past you and stumbles out of the restroom. "Whatever, freak!"');
      qspCall(st, 'arousal', 'kiss', 1, 'inhibition', 'lesbian');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['gdktoilet', 'start'] },
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
  scene.build();
}

function enterAlyonaMakeout(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom6.jpg');
  scene.text('She starts stripping you as you continue to make out, and very quickly has your pussy exposed.');
  qspCall(s, 'arousal', 'kiss', 3, 'inhibition', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fingered', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom7.jpg');
    scene.text('She slides her hand down to your pussy and her fingers start rubbing your clit, causing you to moan in pleasure.');
    scene.text('You quickly start getting wet, and a few seconds laters, she slides her fingers inside your pussy and starts fingerbanging you.');
    qspCall(st, 'arousal', 'vaginal_finger', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get licked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom8.jpg');
    scene.text('You pull her fingers out of you and she slides down to her knees. She encourages you to lift one of your legs and spread them apart before she leans forward and starts licking and sucking on your clit. She then moves down to your wet folds, her tongue sliding inside you as she does.');
    qspCall(st, 'arousal', 'cuni', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let her keep going', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom9.jpg');
    scene.text('You moan loudly as she licks your pussy and reach down to place a hand on the back of her head and pull her face tighter against your crotch.');
    scene.text('You start to rotate your hips as she licks you, and she reaches down and hikes her dress up as she keeps eating you out.');
    qspCall(st, 'arousal', 'cuni', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return the favor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom10.jpg');
    scene.text('She stands up and gives you a kiss before you drop down to your knees behind her and start licking her slit as she starts moaning and thrusting her hips back, burying your face in her crotch.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'inhibition', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep licking her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom11.jpg');
    scene.text('She moves over to kneel on the toilet with her hands on the floor and her legs slightly spread, giving you much better access to her pussy.');
    scene.text('You move in and start licking and tongue fucking her again until she starts to tremble and nearly falls off the toilet as an intense orgasm rocks her body.');
    qspCall(st, 'arousal', 'cuni_give', 3, 'inhibition', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/alyona/sex/disco/restroom12.jpg');
    scene.text('Once her orgasm has passed, she stands up and pulls her panties up and her dress back down. You quickly get dressed as well and you give each other a quick hug before she stumbles out of the restroom, leaving you alone standing in front of the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>.');
    scene.actions([
      { label: 'Leave', goto: ['gdktoilet', 'start'] },
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

function enterDimkaSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj1.jpg');
  scene.text('He leads you down the hall and finally stops at one of the other rooms. He opens the door and steps in, closing the door after you enter.');
  scene.text('Once inside, he pushes you up again the wall and leans in close so his face is only a few inches from yours. "Get on your knees, bitch."');
  scene.text('You obey him and slowly sink to your knees. You don\'t have to be told what to do next. You reach up and start undoing his pants.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get him hard', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj2.jpg');
    scene.text('You pull his limp dick free from his pants and start stroking it with your hand while sucking on his balls. You feel him getting hard in your hand.');
    qspCall(st, 'arousal', 'hj', 2, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A1');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj3.jpg');
    // TODO-QSP: dynamic text: Once he''s hard, you open your mouth and take his <<dick>>cm <<$dick_girth>> dic...
    scene.text(`Once he's hard, you open your mouth and take his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick into your mouth. You wrap your lips around his shaft and start bobbing your head back and forth on his dick as you look up at him.`);
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj4.jpg');
    scene.text('As you keep sucking his cock, you wrap one of your hands around his shaft and start stroking his dick with your hand in sequence with your lips.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj5.jpg');
    scene.text('He reaches down and starts stroking it himself before pulling it out of your mouth. Spurts of his cum soon start landing on your face before he shoves his dick back in your mouth.');
    scene.text('"Suck me clean, slut!" he barks.');
    scene.text('You suck the cum off his dick and the last few drops out of him.');
    qspCall(st, 'cum_call', 'face', 'A1');
    qspCall(st, 'arousal', 'bj', 2, 'sub');
    qspCall(st, 'arousal', 'end');
    if (((st as any).dimka_debt ?? 0) > 0) {
      scene.text('"I want my money by next week," he growls as he buttons up his pants before walking out, leaving you to get cleaned up on your own.');
      scene.actions([
        { label: 'Go back to the disco', goto: ['pav_disco', ''] },
      ]);
    } else {
      qspCall(st, 'money', 'debt_add', 'dimka_debt', 2000);
      scene.text('"I want my money by next week," he growls as he buttons up his pants.');
      scene.text('He tosses a small baggy of white powder on the floor as he walks out, leaving you to get cleaned up on your own. Not even thinking about the cum on your face, you quickly snatch up the baggy.');
      scene.actions([
        { label: 'Go back to the disco', goto: ['pav_disco', ''] },
        { label: 'Do a line', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'drugs', 'cocaine', 1);
    scene.img('images/shared/drugs/lineschool.jpg');
    scene.text('You get up and rush over to a table, where you pour out a line and quickly snort it, immediately feeling the sensation of relief and pleasure rushing through your body.');
    scene.text('You then spend a few minutes in a stupor before heading back to the disco.');
    scene.actions([
      { label: 'Go back to the disco', goto: ['pav_disco', ''] },
    ]);
  } },
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
  scene.build();
}

function enterKatjaMarcusStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 19) {
    ((s as any).discobloc = (s as any).discobloc ?? {})['A14'] = ((s as any).daystart ?? 0);
  }
  scene.img('images/characters/pavlovsk/school/girl/katja/katja_dance.jpg');
  if (((s as any).katjaQW ?? 0)?.['marcus_disco'] === 0) {
    scene.text('Katja leans into your ear.');
    scene.text('"So the door to the corridor next to the women\'s toilet isn\'t closed," she whispers. "Go through there and take the first left, which will lead to a staircase taking you to the maintenance basement. Nobody will hear us down there. I\'ll go first, telling everyone I\'m tired and going home. You get Marcus and join me."');
    scene.text('It\'s clear that she\'s very serious about not letting anybody know about her sex life when she can come up with such an elaborate plan in her very horny state.');
    // TODO-QSP: 'You agree to her plan and Katja '+iif( discoenable['A15'] = 1, ' tells Vicky that she''s going to t...
  } else {
    scene.text('Katja leans into your ear. "You remember how we did it last time?"');
    scene.text('You nod and she smiles. "Okay. Go and get Marcus."');
    // TODO-QSP: 'Katja turns and leaves'+iif( discoenable['A15'] = 1, ', telling Vicky that she''s going to the toil...
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get Marcus', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/marcus_grind2.jpg');
    scene.text('You see Marcus on the dance floor and move over to him.');
    scene.text('Grinding yourself against him, you lean in and whisper in his ear. "Up for some fun with me and Katja?"');
    scene.text('A huge grin appears on his face. "Always!"');
    if (((st as any).katjaQW ?? 0)?.['marcus_disco'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['marcus_disco'] = 1;
      scene.text('You give him Katja\'s directions and he says he\'ll follow you in a few minutes so he doesn\'t raise any suspicion.');
    } else {
      scene.text('You tell him to meet you in the same place as last time and he says he\'ll follow you in a few minutes.');
    }
    scene.actions([
      { label: 'Meet Katja in the basement', goto: ['pav_discoev1', 'marcus_katja_disco'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMarcusKatjaDisco(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npcStat', 'A146');
  qspCall(s, 'npcStat', 'A14', 'a');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks1.jpg');
  scene.text('You head down to the basement and find Katja waiting. "I talked to him. He\'ll be down in a few minutes."');
  scene.text('Katja blushes, but nods and smiles.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for Marcus', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks2.jpg');
    scene.text('You chat while waiting for Marcus, who doesn\'t take long to show up. He smiles when he sees you. "Come on girls, get out of those clothes and show me those sexy bodies."');
    scene.text('You and Katja giggle and start taking off each other\'s clothes off while Marcus watches.');
    scene.text('He soon pulls down his pants and starts stroking his cock. "Why don\'t you come over here and suck my dick?"');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks3.jpg');
    scene.text('You drop to your knees in front of Marcus, take his massive dick in your mouth and start sucking it. He moans as you bob your head up and down and Katja kneels next to you.');
    qspCall(st, 'arousal', 'bj', 2, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Offer his cock to Katja', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks4.jpg');
    scene.text('You pull his cock out of your mouth and offer it to Katja, who immediately takes his dick as deeply as she can into her mouth and starts sucking him off as best she can. You can tell she\'s excited by how hard she\'s trying.');
    scene.text('As Katja sucks him off, he looks at you. "Get up on that stool over there."');
    scene.text('You look over to see a stool and move to take a seat on it. Once you do, he pulls out of Katja\'s mouth and walks over to you, grabbing your legs and spreading them wide until he\'s standing between them.');
    qspCall(st, 'arousal', 'voyeur_sex', 2, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A146');
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks5.jpg');
    // TODO-QSP: dynamic text: He rubs the tip of his dick against your wet slit, making you moan softly before...
    scene.text(`He rubs the tip of his dick against your wet slit, making you moan softly before he gently slides his ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} cock into your pussy, filling and stretching it out.`);
    scene.text('You moan loudly as he pushes it in, filling you completely. Katja squats down next to you to watch as he starts slowly fucking you, but slowly picking up pace the louder you moan.');
    qspCall(st, 'arousal', 'vaginal', 2, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks6.jpg');
    scene.text('Without warning, he pulls out of you and turns so his cock is in front of Katja\'s face. She greedily starts sucking on his glistening wet cock, sucking your pussy juices off it as you put your hand on the back of her head to encourage her to take his cock as deep as she can.');
    scene.text('He then takes a step back, pulling his cock out of her mouth. "Switch places girls."');
    scene.text('You get off the stool as Katja pulls off the last of her clothes and climbs on the stool before spreading her legs.');
    qspCall(st, 'arousal', 'voyeur_sex', 1, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Katja get fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks7.jpg');
    scene.text('You squat down and watch him do the same to her. He rubs the tip of his wet dick against her slit, getting both even wetter before he slides it in, causing her to cry out a little and moan loudly.');
    scene.text('He starts fucking her slowly, but picks up his pace the louder she moans as you reach down with one hand and start rubbing your clit as you watch Katja get fucked.');
    qspCall(st, 'arousal', 'clit_finger', 3, 'group', 'masturbate');
    qspCall(st, 'arousal', 'voyeur_sex', (-3), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck Marcus\'s cock', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks8.jpg');
    scene.text('Just as Katja is really getting into it, he pulls out of her and shoves his cock in your face. You start sucking it, tasting Katja\'s wetness on it.');
    scene.text('You keep rubbing your clit while you suck him off as he looks at Katja. "Get up and bend over the stool," he says and she quickly does as he asks.');
    qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Katja get fucked again', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks9.jpg');
    scene.text('He pulls his dick out of your mouth and moves behind Katja, quickly sliding his dick back into her dripping wet pussy. He\'s soon pounding her pretty hard and fast, causing her to moan louder and louder.');
    scene.text('After a few minutes, she starts to tremble and cry out loudly as she has an orgasm that makes her nearly fall over. Only Marcus\'s strong arms and her leaning against the stool keeps her on her feet.');
    scene.text('Once her orgasm passes, he pulls out of her and presents his dick to you again.');
    qspCall(st, 'arousal', 'voyeur_sex', 3, 'group');
    qspCall(st, 'arousal', 'clit_finger', (-3), 'group', 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck Marcus\'s cock again', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks10.jpg');
    scene.text('You suck on his wet cock again as you keep rubbing your clit. Katja slides off the stool and rests to catch her breath.');
    scene.text('Almost as soon as Katja is out of the way, he pulls you up and pushes you towards the stool.');
    qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'clit_finger', (-1), 'group', 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks11.jpg');
    scene.text('You turn around and bend over the stool, knowing what he wants. You\'re barely even turned around before you feel his massive dick slide back into your soaking wet pussy.');
    scene.text('You moan loudly as he fills you up again and starts fucking you at a medium pace, speeding up the louder you moan. As he fucks you, Katja recovers and squats down next to you.');
    scene.text('Within a few minutes, he starts grunting and you can feel him tensing up inside you.');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch Katja suck Marcus', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks12.jpg');
    scene.text('He suddenly pulls out of you, leaving your pussy feeling empty. Katja starts sucking his dick and he moans loudly as he cums in her mouth.');
    scene.text('This doesn\'t stop her, and she keeps sucking his dick as he shoots his load down her throat. You climb off the stool and squat down next to Katja just as he finishes.');
    qspCall(st, 'arousal', 'voyeur_sex', 1, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Share cum', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    scene.img('images/locations/pavlovsk/community/disco/sex/marcus_katja_sveta/mks13.jpg');
    scene.text('Instead of swallowing, she starts kissing you. You can taste his salty cum on her tongue before you open your mouth and she spits it into your mouth.');
    scene.text('"Fuck, that\'s hot as hell!" Marcus grins as you both swallow his cum.');
    scene.text('"We need to do this again sometime," Marcus says as he starts getting dressed.');
    scene.text('You glance over at Katja, who blushes bright red, but returns your look and nods.');
    scene.text('She quickly starts getting dressed as you turn back to him. "We\'ll let you know."');
    scene.text('He just chuckles and you all get dressed before taking turns leaving.');
    qspCall(st, 'arousal', 'kiss', 1, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go back to the toilets', goto: ['gdktoilet', 'start'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'marcus':
      enterMarcus(s, scene);
      break;
    case 'marcus_anal':
      enterMarcusAnal(s, scene);
      break;
    case 'andrey_stasya_marcus':
      enterAndreyStasyaMarcus(s, scene);
      break;
    case 'igor_peg':
      enterIgorPeg(s, scene);
      break;
    case 'strapon_igor_bj':
      enterStraponIgorBj(s, scene);
      break;
    case 'strapon_igor_magic':
      enterStraponIgorMagic(s, scene);
      break;
    case 'igor_disco_bj':
      enterIgorDiscoBj(s, scene);
      break;
    case 'igor_dima_disco_bj':
      enterIgorDimaDiscoBj(s, scene);
      break;
    case 'girlfriend_ask':
      enterGirlfriendAsk(s, scene);
      break;
    case 'sonia':
      enterSonia(s, scene);
      break;
    case 'dan':
      enterDan(s, scene);
      break;
    case 'dan_fuck':
      enterDanFuck(s, scene);
      break;
    case 'dan_buttfuck':
      enterDanButtfuck(s, scene);
      break;
    case 'radomir':
      enterRadomir(s, scene);
      break;
    case 'valentin':
      enterValentin(s, scene);
      break;
    case 'valentin_cuni':
      enterValentinCuni(s, scene);
      break;
    case 'valentin_vag':
      enterValentinVag(s, scene);
      break;
    case 'valentin_anal':
      enterValentinAnal(s, scene);
      break;
    case 'lera':
      enterLera(s, scene);
      break;
    case 'lera_sex':
      enterLeraSex(s, scene);
      break;
    case 'alyona':
      enterAlyona(s, scene);
      break;
    case 'alyona_makeout':
      enterAlyonaMakeout(s, scene);
      break;
    case 'dimka_sex':
      enterDimkaSex(s, scene);
      break;
    case 'katja_marcus_start':
      enterKatjaMarcusStart(s, scene);
      break;
    case 'marcus_katja_disco':
      enterMarcusKatjaDisco(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_discoev1: LocationDef = {
  name: 'pav_discoev1',
  title: 'Community Center - Men\'s Restroom',
  region: 'pavlovsk',
  enter: enter,
};
