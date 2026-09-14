import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterOlusex(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['sex'] = 1;
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A55'] = 1;
  qspCall(s, 'boyStat', 'A55');
  scene.img('images/characters/pavlovsk/resident/olu/sex/firstbj1.jpg');
  scene.text('You return his kiss and feel yourself getting aroused as his hands start roaming around your body before you\'re suddenly lifted into the air as he carries you in his arms through the hallway and down to the bedroom. He tosses you onto the bed, where you bounce from the landing before he starts pulling your clothes off, quickly getting you naked. He then takes his pants off you\'re greeted by the sight of the largest dick you\'ve ever seen. The thing is massive and your eyes bulge as you wonder if it will even fit inside you.');
  scene.text('As your thoughts drift, he sits on the bed next to you and gently pushes you off onto your knees before pulling you between his legs. You know what he wants, his hard cock right in front of your face leaving no doubt, so you open your mouth and struggle to take his massive dick in your mouth.');
  qspCall(s, 'arousal', 'bj', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take him deeper', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstbj2.jpg');
    scene.text('You suck on the head of his cock and tease it with your tongue before you open your mouth as wide as you can and try to take it deeper. You\'ve not even taken half of it into your mouth when you feel it stretching your jaw and gagging you, so you start sucking on it, bobbing your head up and down along his shaft. It doesn\'t take too long before you feel your jaw starting to ache, so you pop his dick out and take a deep breath before working your jaw.');
    scene.text('He seems to understand the signs. "Are you a virgin?"');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['vaginal'] = ((s as any).OluQW['vaginal'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstvag1.jpg');
    scene.text('You shake your head. "No, I\'m not a virgin."');
    scene.text('He nods and smiles. "Good good, then more fun for us." He then lifts you up and lays you on the bed on your back before pulling you to the edge of the bed and spreads you legs. He grabs some lube from the night stand and lubes up his monster dick; seeing the size of that thing, you\'re not going to argue.');
    scene.text('He rubs the tip of his cock against your vaginal lips and you feel yourself getting wet. Once he seems happy, he pushes forward, stretching your pussy wider than you even thought possible as you feel it filling you completely, his thick head brushing against your walls. He starts gently fucking you at first, slowly picking up speed and pushing himself deeper as you start to moan in pleasure.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A55');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstvag2.jpg');
    // TODO-QSP: dynamic text: He pulls out of your pussy and rolls you over. Before you can do anything, he li...
    scene.text(`He pulls out of your pussy and rolls you over. Before you can do anything, he lifts you up and place you on all fours before pulling you back towards the edge of the bed. Within seconds, you feel his huge cock slide back into your pussy, causing you to moan in pleasure. He slides his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock all the way into you, his balls slapping against your clit as he fucks you.`);
    scene.text('You feel him applying some lube to your ass and start fingering it as he fucks your pussy. Just as it starts to really feel good, he leans forward and whispers in your ear. "I\'m going to fuck your ass now."');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anal'] = ((s as any).OluQW['anal'] ?? 0) + (1);
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
    }
    (s as any).agape = 3;
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstanal1.jpg');
    // TODO-QSP: dynamic text: He pulls his dick out of you and wraps one of his hands around your hips to hold...
    scene.text(`He pulls his dick out of you and wraps one of his hands around your hips to hold you in place. You then feel his thick cock pressing against your asshole. You're not sure it's going to fit and are about to say something when he suddenly shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock into your ass, the sudden sharp pain making you cry out. Your ass feels like it's on fire and you try to scoot away, but he grabs you by the hip and uses both of his powerful hands to firmly hold you in place.`);
    scene.text('As you cry out in pain, he starts gently fucking your ass. Your ass is stretched wide and feels like someone has shoved a bottle up it.');
    scene.text('You start rubbing your pussy, hoping it might distract from the pain. It somewhat works, but he seems to have never ending stamina. As you start to moan a little in pleasure from rubbing your clit, he seems to take that as a hint you\'re enjoying it and starts fucking you harder and deeper. He pushes a few more inches in and it feels like it\'s pressing against your stomach.');
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstanal2.jpg');
    scene.text('Your ass is really starting to hurt, but he\'s showing no signs of slowing down, manages to push even more of his massive cock into your ass.');
    scene.text('You\'re not sure how much more of this you can take before he finally starts to grunt and pulls out of you before pushing you down onto your knees in front of him.');
    qspCall(s, 'arousal', 'anal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).pcs_hairbsh = 0;
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstcum.jpg');
    scene.text('You quickly start jerking him off as you open your mouth and stick out your tongue. Cum soon splatters across your cheek and chin, as well as into your mouth. You milk the last few drops out of his monster dick before swallowing the cum in your mouth.');
    scene.text('Your gaping asshole feels like it might never close as a dull, throbbing ache pulses through it. After he catches his breath, Olu gently helps you up from the bed and even helps you get dressed. He doesn\'t seem to realize there\'s anything wrong and just keeps smiling at you like he has been ever since you first met him. After he walks you to the door and lets you out of the apartment, you take a second to lean against the wall in the stairwell. Only then do you realize you still have his cum on your face.');
    qspCall(s, 'cum_call', 'mouth', 'A55', 1);
    qspCall(s, 'cum_call', 'face', 'A55', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['think_virgin'] = 1;
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anal'] = ((s as any).OluQW['anal'] ?? 0) + (1);
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
    }
    (s as any).agape = 3;
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstanal2.jpg');
    scene.text('You nod your head. "Yes, I\'m still a virgin," you admit to him.');
    scene.text('He nods and smiles. "Don\'t worry, I won\'t take your virginity. I\'ll leave that for you to give to a boy you love." He then lifts you up and places you on the bed on all fours before pulling you over to the edge.');
    scene.text('He walks over and grabs a bottle of lube sitting on the night stand before he walks back around behind you. You can feel him squirting some lube onto your asshole before using a finger to rub it around and work it up into your anus. As you look back over your shoulder, he squirts a generous amount of lube onto his cock, lubing it up really well. He then wraps one of his hands around your hips to hold you in place.');
    // TODO-QSP: dynamic text: You then feel his thick cock pressing against your asshole. You're not sure it's...
    scene.text(`You then feel his thick cock pressing against your asshole. You're not sure it's going to fit and are about to say something when he suddenly shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock into your ass, the sudden sharp pain making you cry out. Your ass feels like it's on fire and you try to scoot away, but he grabs you by the hip and uses both of his powerful hands to firmly hold you in place.`);
    scene.text('As you cry out in pain, he starts gently fucking your ass. Your ass is stretched wide and feels like someone has shoved a bottle up it.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstanal1.jpg');
    scene.text('You start rubbing your pussy, hoping it might distract from the pain. It somewhat works, but he seems to have never ending stamina. As you start to moan a little in pleasure from rubbing your clit, he seems to take that as a hint you\'re enjoying it and starts fucking you harder and deeper. He pushes a few more inches in and it feels like it\'s pressing against your stomach.');
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstanal2.jpg');
    scene.text('Your ass is really starting to hurt, but he\'s showing no signs of slowing down, manages to push even more of his massive cock into your ass.');
    scene.text('You\'re not sure how much more of this you can take before he finally starts to grunt, suddenly pulling out of you and rolling you over onto your back.');
    scene.text('"Open mouth!" he demands.');
    qspCall(s, 'arousal', 'anal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).pcs_hairbsh = 0;
    scene.img('images/characters/pavlovsk/resident/olu/sex/firstcum.jpg');
    scene.text('You quickly start jerking him off as you open your mouth and stick out your tongue. Cum soon splatters across your cheek and chin, as well as into your mouth. You milk the last few drops out of his monster dick before swallowing the cum in your mouth.');
    scene.text('Your gaping asshole feels like it might never close as a dull, throbbing ache pulses through it. After he catches his breath, Olu gently helps you up from the bed and even helps you get dressed. He doesn\'t seem to realize there\'s anything wrong and just keeps smiling at you like he has been ever since you first met him. After he walks you to the door and lets you out of the apartment, you take a second to lean against the wall in the stairwell. Only then do you realize you still have his cum on your face.');
    qspCall(s, 'cum_call', 'mouth', 'A55', 1);
    qspCall(s, 'cum_call', 'face', 'A55', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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

function enterSeduction(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/pavlovsk/resident/olu/sex/seduction1.jpg');
  scene.text('About fifteen minutes later, he comes back wearing just a towel around his waist. The split in the towel means you get glimpses of his massive cock swinging from time to time.');
  scene.text('He sits on the couch next to you and shows you his phone. "I love my new phone, the camera on it is very good. Look at pictures I have taken."');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you have to go', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction2.jpg');
    scene.text('You shake your head. "I should really get going. Maybe some other time? Talk to you later."');
    scene.text('You quickly get up and head for the door. You guess what he has in mind and just want to get out of here.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
    { label: 'Check out his phone', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction2.jpg');
    scene.text('You look over at his phone and he leans over to give you a better view. As he does, his towel opens slightly and you can\'t help but look at his massive cock peeking out. You try to pay attention to the images, most of which are just the local park or other things he found pretty.');
    qspCall(s, 'arousal', 'erotic_nudity', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Look at more pictures', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction3.jpg');
    scene.text('He keeps showing you more of the pictures he\'s taken, even some of young attractive girls.');
    scene.text('"Yes, they\'re very pretty," you tell him.');
    scene.text('He smiles. "You are very pretty. Let me take your picture."');
    qspCall(s, 'arousal', 'erotic', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tell him you have to go', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction2.jpg');
    scene.text('You shake your head. "Maybe some other time, I should really get going. Talk to you later."');
    scene.text('You quickly get up and head for the apartment door. You have a good idea of what he has in mind and want to get out of here.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
      { label: 'Agree to model', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction4.jpg');
    scene.text('You get up and strike several poses for him as he takes your picture.');
    scene.text('After a few minutes, he smiles at you. "Take top off."');
    qspCall(s, 'arousal', 'flashlite', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tell him you have to go', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction2.jpg');
    scene.text('You shake your head. "Maybe some other time, I should really get going. Talk to you later."');
    scene.text('You quickly head for the apartment door. You have a good idea of what he has in mind and want to get out of here.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
      { label: 'Agree to strip', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction5.jpg');
    scene.text('You strip down enough to expose your breasts and he grins as he keeps taking pitures, asking you to pose in several new poses showing off your breasts.');
    scene.text('"Now the bottoms, please."');
    qspCall(s, 'arousal', 'flashlite', 3);
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.actions([
        { label: 'Strip naked', goto: ['olu', 'seduction_strip'] },
      ]);
    } else {
      scene.actions([
        { label: 'Strip down to your panties', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction6.jpg');
    scene.text('You pull all your clothes off until all you\'re left wearing is your panties. You continue to do poses for him as he keeps taking your pictures.');
    scene.text('"Panties off please," he asks and you reach down and start pulling your panties down.');
    qspCall(s, 'arousal', 'flashlite', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Strip naked', goto: ['olu', 'seduction_strip'] },
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

function enterSeductionStrip(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/olu/sex/seduction7.jpg');
  scene.text('You remove the last of your clothes until you\'re standing in front of him completely naked. He again directs you to stand in several poses so he can take naked pictures of you. As he does so, he stands up to change position and his towel falls away, leaving his semi hard massive cock in full view.');
  scene.text('"Down on knees now please," he grins.');
  qspCall(s, 'arousal', 'flash', 3);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you have to go', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction2.jpg');
    scene.text('You shake your head and gather up your clothes. "Maybe some other time, I should really get going. Talk to you later."');
    scene.text('You quickly get dressed and head for the apartment door. You barely manage to get your clothes on by the time you exit the apartment.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
    { label: 'Suck his dick', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['sex'] = 1;
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A55'] = 1;
    qspCall(s, 'boyStat', 'A55');
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction8.jpg');
    scene.text('You drop down to your knees in front of him and start kissing and licking the shaft of his cock before you part your lips and take the head of his monstrous cock into your mouth. Feeling your jaw stretching as you start sucking on it, you can\'t go very far down his shaft without gagging. He sits down as you keep sucking his dick.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take him deeper', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction9.jpg');
    scene.text('You open your mouth as wide as you can and slide your mouth further down on his cock. You\'re not even halfway down the length of the shaft and you can already feel it stretching your jaw and starting to gag you. You decide this is deep enough and start sucking while bobbing your head up and down.');
    scene.text('It doesn\'t take long before you feel your jaw starting to ache from being forced open so wide, so you slide his dick out of your mouth and take a deep breath before working your jaw. He just stands up and smiles. "I want sex with you."');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Okay', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['think_virgin'] = 0;
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['vaginal'] = ((s as any).OluQW['vaginal'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction10.jpg');
    scene.text('You nod at him. "Okay."');
    scene.text('He smiles before he lifts you up and pulls you on top of him. You spread your legs as you straddle him and slowly lower yourself down. He rubs the tip of his cock against your vaginal lips, you feel yourself getting wet. Once he seems happy with how slippery you are he pushes upward, you feel your pussy lips stretch apart. It just keeps stretching until it you don\'t think it can stretch until you feel completely full. You start to slowly ride him control the speed and depth of of the fucking.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction11.jpg');
    // TODO-QSP: dynamic text: He lifts you up suddenly until he pulls out of your twat and then rolls you over...
    scene.text(`He lifts you up suddenly until he pulls out of your twat and then rolls you over onto your back on the couch. He pushes your legs up and apart as he positions himself between your legs and then he slips his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock all the way into you, until you can feel his balls slapping against your butt cheeks as he fucks you. Just as it starts to really feel good, he leans forward and whispers in your ear. "I'm going to fuck your ass now."`);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction12.jpg');
    scene.text('True to his word, he pulls out of you, grabs your hands and places them on your ass cheeks, encouraging you to pull them apart.');
    if (((s as any).OluQW ?? 0)?.['anal'] === 0) {
      // TODO-QSP: dynamic text: He pushes your legs up and apart before he guides his cock against your asshole....
      scene.text(`He pushes your legs up and apart before he guides his cock against your asshole. You're not sure it's going to fit and you're about to say something when he suddenly shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock up your ass, the sudden sharp pain causing you to cry out.`);
      scene.text('He starts slowly fucking your ass as you groan in pain.');
    } else {
      // TODO-QSP: dynamic text: He pushes your legs up and apart before he guides his cock against your asshole....
      scene.text(`He pushes your legs up and apart before he guides his cock against your asshole. The pressure builds until he suddenly shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock up your ass, the sudden sharp pain causing you to cry out.`);
      scene.text('You\'re able to relax as he slowly starts fucking your ass.');
    }
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anal'] = ((s as any).OluQW['anal'] ?? 0) + (1);
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
    }
    (s as any).agape = 3;
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction13.jpg');
    scene.text('He pulls out of you and flips you over onto your knees before he moves back into position behind you and shoves his dick back in your ass. It slides in much easier this time and doesn\'t hurt nearly as much. You start rubbing your pussy, hoping it might distract from the pain and make it not as bad. It somewhat works, but he seems to have never ending stamina. As you start to moan a little in pleasure from rubbing your clit, he seems to take that as a hint you\'re enjoying it and starts fucking you harder and deeper. It feels like it\'s pushing against your stomach.');
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction14.jpg');
    scene.text('He manages to push even deeper into you until you feel his balls slapping against your pussy.');
    scene.text('You\'re not sure how much more of this you can take before he suddenly pulls out of you and drags you off the couch onto your knees. "Open mouth!"');
    qspCall(s, 'arousal', 'anal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).pcs_hairbsh = 0;
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction15.jpg');
    scene.text('You open your mouth, stick out your tongue and start jerking him off as he stands next to you. A few seconds later, cum shoots into your mouth and against the back of your throat, the last drops dripping out onto your tongue as it starts to go soft in your hand. You swallow the cum in your mouth before smiling up at him.');
    scene.text('Your ass feels like it might never close as a dull throbbing ache pulses through it. He starts to clean up and you start to get dressed. Once you finish getting dressed, you bid him farewell and head out of the apartment.');
    qspCall(s, 'cum_call', 'mouth', 'A55', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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
    }
    scene.actions([
      { label: 'Just fuck my ass', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction12.jpg');
    scene.text('You nod your head. "Okay, but just my ass, okay?"');
    scene.text('"Just ass okay with me," he grins before he lifts you up and places you on the couch on your back before pulling you towards the edge so your ass is nearly hanging over the edge.');
    scene.text('He opens the end table and grabs a bottle of lube from within. You can feel him squirting some lube onto your asshole before he uses a finger to rub it around and work it up into your anus.');
    scene.text('He then squirts a generous amount onto his cock, lubing it up really well.');
    if (((s as any).OluQW ?? 0)?.['anal'] === 0) {
      // TODO-QSP: dynamic text: He grabs your hands and places them on your ass cheeks, encouraging you to pull ...
      scene.text(`He grabs your hands and places them on your ass cheeks, encouraging you to pull them apart. He then pushes your legs up and apart before he guides his cock against your asshole. You're not sure it's going to fit and are about to say something when he suddenly shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock up your ass, the sudden sharp pain causing you to cry out.`);
      scene.text('You try to relax as he slowly starts fucking your ass.');
    } else {
      // TODO-QSP: dynamic text: He grabs your hands and places them on your ass cheeks, encouraging you to pull ...
      scene.text(`He grabs your hands and places them on your ass cheeks, encouraging you to pull them apart. He then pushes your legs up and apart before he guides his cock against your asshole. The pressure builds until he suddenly shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock in your ass, the sudden sharp pain causing you to cry out.`);
      scene.text('You\'re able to relax a little as he slowly starts fucking your ass.');
    }
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anal'] = ((s as any).OluQW['anal'] ?? 0) + (1);
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
    }
    (s as any).agape = 3;
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction13.jpg');
    scene.text('He pulls out of you and flips you over onto your knees before he moves back into position behind you and shoves his dick back in your ass. It slides in much easier this time and doesn\'t hurt nearly as much. You start rubbing your pussy, hoping it might distract from the pain and make it not as bad. It somewhat works, but he seems to have never ending stamina.');
    scene.text('As you start to moan a little in pleasure, he seems to take that as a hint that you\'re enjoying it and starts fucking you even harder and deeper. It feels like it\'s pushing against your stomach.');
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction14.jpg');
    scene.text('He manages to push even deeper into you until you feel his large balls slapping against your pussy. You\'re not sure how much more of this you can take before he suddenly starts grunting and pulls out.');
    scene.text('He then drags you off the couch and onto your knees in front of him. "Open mouth!"');
    qspCall(s, 'arousal', 'anal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).pcs_hairbsh = 0;
    scene.img('images/characters/pavlovsk/resident/olu/sex/seduction15.jpg');
    scene.text('You open your mouth, stick out your tongue and start jerking him off as he stands next to you. A few seconds later, cum shoots into your mouth and against the back of your throat, the last drops dripping out onto your tongue as it starts to go soft in your hand. You swallow the cum in your mouth before smiling up at him.');
    scene.text('Your ass feels like it might never close as a dull throbbing ache pulses through it. He starts to clean up and you start to get dressed. Once you finish getting dressed, you bid him farwell and head out of the apartment.');
    qspCall(s, 'cum_call', 'mouth', 'A55', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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

function enterOlusex1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['sex'] = 1;
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A55'] = 1;
  qspCall(s, 'boyStat', 'A55');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/olu/sex/sex1.jpg');
  scene.text('He walks over to the couch with you, but doesn\'t sit down, looking at you with hungry eyes instead.');
  scene.text('"Take off clothes please," he says as his eyes roam over your body.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Strip for him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex2.jpg');
    scene.text('You make a little show of it, stripping your clothes off one piece at a time until you\'re completely naked. When you glance back at him, you see he has his pants pulled down to his knees and his cock is already hard and waiting for you.');
    qspCall(s, 'arousal', 'flashlite', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Squat down', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex3.jpg');
    scene.text('You walk over and squat down in front of him, taking his massive cock in your hands and stroking it.');
    qspCall(s, 'arousal', 'hj', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex4.jpg');
    scene.text('After you stroke him a few times, you wrap your lips around his massive cock and start sucking it. You try and go as deep as you can, but can\'t even get halfway down the shaft.');
    scene.text('"Deeper," he says and you try again and get a little further, but his dick is just too big.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex5.jpg');
    scene.text('You feel him place his hand on the back of your head and take up a handful of your hair. When you try to go deeper again, he helps you by pushing your head down, forcing his dick down your throat. You can feel your throat stretching from the massive girth of his dick as he stops pushing and lets you pull back and catch your breath.');
    scene.text('He does this a few more times until you feel his balls against your chin, having taken his full length down your throat.');
    scene.text('"I want sex with you," he says.');
    qspCall(s, 'arousal', 'bj', 5, 'deepthroat');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Okay', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['think_virgin'] = 0;
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['vaginal'] = ((s as any).OluQW['vaginal'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex6.jpg');
    scene.text('You nod at him. "Okay."');
    scene.text('He smiles before he lifts you up and places you on the couch on your hands and knees. He then steps up behind you and rubs the tip against your slit before he slides his massive cock inside you. You feel your pussy stretching as he starts slowly fucking you.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A55');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex7.jpg');
    // TODO-QSP: dynamic text: He pushes his <<dick>>cm <<$dick_girth>> cock all the way into you. Just as it s...
    scene.text(`He pushes his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock all the way into you. Just as it starts to really feel good, he leans forward and whispers in your ear. "I'm going to fuck your ass now."`);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anal'] = ((s as any).OluQW['anal'] ?? 0) + (1);
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
    }
    (s as any).agape = 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex8.jpg');
    scene.text('You nod your head. "Okay."');
    scene.text('He grins and pulls out of you before opening the end table and grabbing a bottle of lube from within. You feel him squirting some onto your asshole before he uses a finger to rub it around and work it up into your anus. You glance back and watch as he then squirts a generous amount onto his cock, lubing it up really well.');
    // TODO-QSP: dynamic text: He grabs one of your hands and places it on your ass cheek, encouraging you to s...
    scene.text(`He grabs one of your hands and places it on your ass cheek, encouraging you to spread your ass as he guides his cock against your asshole. The pressure builds until he suddenly shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock up your ass, the sudden sharp pain causing you to cry out.`);
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex9.jpg');
    scene.text('He places one hand on your hip while another grabs your hair and hangs onto it as he starts fucking your ass a bit harder than before. It hurts a little, but you\'re getting used to his massive cock now. You don\'t even feel the need to rub your clit to distract you anymore.');
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex10.jpg');
    scene.text('He pushes a little deeper up your ass until you feel his balls slapping against your pussy. You\'re not sure your ass can handle much more before he suddenly pulls out of you and drags you off the couch. You quickly squat in front of him and open your mouth before he even says it.');
    qspCall(s, 'arousal', 'anal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open mouth', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).pcs_hairbsh = 0;
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex11.jpg');
    scene.text('You stick out your tongue as you grab his huge shaft and start jerking him off. His cum soon shoots in your mouth and against the back of your throat as even more of it splatters across your face. The last few spurts drip out onto your tongue as his cock starts to go soft in your hand. You swallow the cum in your mouth and smile up at him.');
    scene.text('Your ass feels like it might never close as a dull throbbing ache pulses through it. He starts to clean up and you start to get dressed. Once you finish getting dressed, he walks you to the door and lets you out of the apartment, where you take a second to lean against the wall in the stairwell, only then realizing your face is still covered in his cum.');
    qspCall(s, 'cum_call', 'mouth', 'A55', 1);
    qspCall(s, 'cum_call', 'face', 'A55', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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
    }
    scene.actions([
      { label: 'Just fuck my ass', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anal'] = ((s as any).OluQW['anal'] ?? 0) + (1);
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
    }
    (s as any).agape = 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex8.jpg');
    scene.text('You nod your head. "Okay, but just my ass."');
    scene.text('"Just ass okay with me," he grins before he lifts you up and places you on the couch on your hands and knees.');
    scene.text('He opens the end table and grabs a bottle of lube from within before you feel him squirting some lube onto your asshole and using a finger to rub it around and work it up into your anus. As look back over your shoulder, you watch as he squirts a generous amount onto his cock, lubing it up really well.');
    // TODO-QSP: dynamic text: He grabs one of your hands and places it on your ass cheek, encouraging you to s...
    scene.text(`He grabs one of your hands and places it on your ass cheek, encouraging you to spread your ass as he guides his cock against your asshole. The pressure builds until he suddenly shoves his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock up your ass, the sudden sharp pain causing you to cry out.`);
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex9.jpg');
    scene.text('He places one hand on your hip while another grabs your hair and hangs onto it as he starts fucking your ass a bit harder than before. It hurts a little, but you\'re getting used to his massive cock now. You don\'t even feel the need to rub your clit to distract you anymore.');
    qspCall(s, 'arousal', 'anal', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex10.jpg');
    scene.text('He pushes a little deeper up your ass until you feel his balls slapping against your pussy. You\'re not sure your ass can handle much more before he suddenly pulls out of you and drags you off the couch. You quickly squat in front of him and open your mouth before he even says it.');
    qspCall(s, 'arousal', 'anal', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).pcs_hairbsh = 0;
    scene.img('images/characters/pavlovsk/resident/olu/sex/sex11.jpg');
    scene.text('You stick out your tongue as you grab his huge shaft and start jerking him off. His cum soon shoots in your mouth and against the back of your throat as even more of it splatters across your face. The last few spurts drip out onto your tongue as his cock starts to go soft in your hand. You swallow the cum in your mouth and smile up at him.');
    scene.text('Your ass feels like it might never close as a dull throbbing ache pulses through it. He starts to clean up and you start to get dressed. Once you finish getting dressed, he walks you to the door and lets you out of the apartment, where you take a second to lean against the wall in the stairwell, only then realizing your face is still covered in his cum.');
    qspCall(s, 'cum_call', 'mouth', 'A55', 1);
    qspCall(s, 'cum_call', 'face', 'A55', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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

function enterOluanya(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anya_count'] = ((s as any).OluQW['anya_count'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolu1.jpg');
  scene.text('After several minutes, you hear a knock at the door and get up to answer it. You see Anya standing there, glancing past you into the room.');
  scene.text('"Come in, he\'s waiting for you," you smirk and she grins as she walks into the apartment. Once you close the door, you turn to see both Olu and Anya undressing.');
  scene.text('He stands next to her as she sits on the couch, opens her mouth and starts eagerly sucking his massive cock as he grabs her hair.');
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Join in', goto: ['olu', 'anyaolusvet'] },
    { label: 'Watch Anya get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolu2.jpg');
    scene.text('He gently pushes her down on her back and spreads her legs before he slowly pushes his dick inside her pussy. She moans and groans loudly as he slowly starts filling her up with his huge cock. As he starts fucking her, she starts relaxing and moaning in pleasure before she suddenly glances up at you.');
    scene.text('"You don\'t have to watch, you know."');
    scene.text('You grin at her. "I know."');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
      { label: 'Balls deep', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolu3.jpg');
    scene.text('Olu starts fucking her hard and fast, going balls deep into her pussy. She seems to quickly forget that you\'re even there as he hammers away at her pussy, making her moan and wither in pleasure under him. He then rolls her over onto her side and lays down behind her, still pounding her balls deep the whole time. She doesn\'t seem to mind being his play thing and lets him do whatever he wants.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Into the ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolu4.jpg');
    scene.text('He suddenly pulls out of her and reaches over to grab a bottle of lube off the end table, squirting some onto his fingers and rubbing them on her anus before sticking a finger up her ass, working the lube in and stretching her ass a little.');
    scene.text('Once he seems satisfied, he pulls his fingers out, tosses the bottle aside and pushes his monster dick against her asshole.');
    scene.text('"Fuck, you\'re so big!" she cries out as he slowly enters her ass.');
    scene.text('He goes slow at first and they start to kiss, but she quickly seems to get into it and he starts going a little harder.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch her get butt fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolu5.jpg');
    scene.text('Several minutes go by before he pulls out and stands up. She looks up at him as he pulls her up and turns her around. She seems to get what he wants and kneels on the couch doggy style. You can see her asshole is gaping wide as he moves up behind her and easily slides his dick easily back into her ass, slowly pushing himself slowly deeper and deeper until Anya reaches back.');
    scene.text('"Not so deep!" she hisses and he backs off a little, only going about half way into her ass. She doesn\'t seem to mind when he starts going a little faster.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Creampie', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolu6.jpg');
    scene.text('He starts to grunt and Anya looks back at him. "I want you to cum in my ass," she says and he grins.');
    scene.text('He keeps fucking her ass until he suddenly groans loudly before he pulls out of her, his cum slowly oozing out of her stretched asshole as the two of them pant loudly.');
    scene.text('Anya quickly rolls off the couch and they both start getting dressed. Once they\'re finished, Olu smiles at her. "Luda says you are much like her and now I agree."');
    scene.text('Anya looks puzzled before she laughs. "I\'ll take that as a compliment, but I need to get going. Talk to you later, sis," she says with a smile before she heads out.');
    scene.text('You get up as well. "I should get going as well. See you later, Olu."');
    scene.text('He nods and smiles. "Yes, later. Come by any time."');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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

function enterAnyaolusvet(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['threesome'] = ((s as any).OluQW['threesome'] ?? 0) + (1);
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A55'] = 1;
  qspCall(s, 'npcStat', 'A55');
  qspCall(s, 'npcStat', 'A33', 'a');
  scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolusvet1.jpg');
  scene.text('As you watch your sister suck Olu\'s supersized cock, you feel your mouth watering and want to join in, so you strip off your clothes and kneel down next to them. Olu takes the cue and sits down before leaning back as Anya glances at you with a smile and pulls away, allowing you to take his cock into your mouth and start sucking.');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Swap again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolusvet2.jpg');
    scene.text('After a few minutes, Anya wants a turn again, so you pull back and let Olu\'s dick pop out of your mouth. She starts sucking on it again while you stroke the long shaft.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Right up her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolusvet3.jpg');
    scene.text('Olu grabs some lube and reaches over to start lubing up Anya\'s ass as she continues sucking on the head of his dick. Once he\'s worked it in, he pulls her up has her straddle him. As she lowers herself, he reaches down and guides his dick to her ass.');
    scene.text('"Fuck, it\'s so big!" she cries out before she starts slowly riding it, only managing to go about halfway down his shaft.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anal'] = ((s as any).OluQW['anal'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolusvet4.jpg');
    scene.text('He easily lifts her off him and his dick slides out of her ass. He places her to his side and she kneels on the couch as he grabs you and pushes you towards the couch. You stumble against it and kneel on it before he rubs some lube onto your anus and works first one and then two fingers up your ass, stretching you out a little.');
    scene.text('He then pulls his fingers out and you feel the head of his monstrous cock pressing against your asshole. It soon pops into your ass and the familiar pain shoots through you as your asshole is stretched wide. Anya watches intently as he starts fucking your ass.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swap back again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolusvet5.jpg');
    scene.text('You suddenly feel Olu pull out of you and glance back to see him getting Anya to bend over on fours. You scramble up next to your sister and grab her ass cheeks before pulling them apart, exposing her gaping asshole.');
    scene.text('He easily slides it back inside her ass and starts fucking her, but presses his luck and tries to go deeper, only for Anya to glance back and scowl at him. He backs off a little, but is still pretty far up her ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Back up your butt', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolusvet6.jpg');
    scene.text('Anya starts rubbing her clit as he fucks her ass and several minutes pass before she suddenly starts squirming and crying out as she cums hard. Once she finishes, he pulls out of her and grabs you by the hair. Pushing you to bend over in front of him, his monster cock slides back into your gaping asshole fairly easily. He keeps pushing deeper and deeper until you\'re forced to reach back and stop him. He seems content and starts fucking you without trying to push deeper.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Double facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anya/anyaolusvet7.jpg');
    scene.text('Once your sister has recovered, she kneels down next to him and watches him buttfuck you. Not long after, he pulls out and starts stroking his cock as Anya pulls you down next to her just in time for large spurts of cum to hit you in the face before he alternates between you and Anya. Once he\'s done, he groans loudly and flops down on the couch.');
    scene.text('As you sit on the floor with your sister, your faces covered in your aunt\'s boyfriend\'s cum, you wonder if your family is normal or weird, but your thoughts are broken up as they both start getting cleaned up and dressed. You follow suit and clean the cum off your face and get dressed as well.');
    scene.text('Once Anya is finished, she kisses you on the cheek. "I need to get going. Talk to you later." She then waves at Olu as she heads for the door. "I had fun!"');
    scene.text('Olu waves back and you smile at him. "I should really get going as well. Talk to you later, okay?"');
    scene.text('He nods and you head out shortly after your sister. You see her heading down the stairs just as you walk out the door.');
    qspCall(s, 'arousal', 'foreplay', 5, 'group');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_cleanup', '', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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

function enterOlunush(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholu1.jpg');
  if (((s as any).OluQW ?? 0)?.['nush_count'] === 0) {
    scene.text('After a while, you hear a knock on the door and get up to answer it. You see Anushka standing there, staring at you with a questioning look on her face. "Well? Where\'s this huge massive cock you promised me?"');
    scene.text('You grin and shake your head before opening the door to let her in. "Olu, this is my friend, Nush."');
    scene.text('He smiles at her and stands up. "Hello. You are very pretty."');
    // TODO-QSP: dynamic text: She walks over to him and starts stripping. "You're not so bad yourself. <<$pcs_...
    scene.text(`She walks over to him and starts stripping. "You're not so bad yourself. ${((s as any).pcs_nickname || '')} told me you have a big cock?" she practically purrs.`);
    scene.text('He smiles, almost proudly. "Yes, very big. How you say… massive, yes?"');
    scene.text('She stops next to him, having stripped down to just her underwear and grabs his crotch. "Massive might be an understatement," she grins. "I don\'t know if it will fit, but I want to try."');
    scene.text('She turns and starts rubbing her ass against his crotch. "I want you to tear up my tight little white holes with your monster black dick. I want you to fuck me hard and rough and rip my tight little holes up."');
    scene.text('He grins. "Okay, I no be gentle with you."');
  } else {
    scene.text('After a while you hear a knock on the door, you get up and go answer it. You see Anushka standing there looking at you with a questioning look. "Well? Where\'s Cockzilla at?"');
    scene.text('You grin and shake your head before opening the door to let her in. "He\'s over there, slut," you say to her as you point towards the couch.');
    scene.text('He smiles at her and stands up. "Hello, again."');
    scene.text('She walks over to him and strips down to her underwear before turning and rubbing her ass against his crotch. "I want you to tear up my tight little white holes with your monster black dick again. I want you to fuck me even harder and rougher than last time. I want you to rip my tight little holes up."');
    scene.text('He grins. "Okay, I fuck you even harder this time."');
  }
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['nush_count'] = ((s as any).OluQW['nush_count'] ?? 0) + (1);
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Join in', goto: ['olu', 'nusholusvet'] },
    { label: 'Watch the show', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholu2.jpg');
    scene.text('With her back still towards him, he takes her bra off and tosses it aside. With that removed, he spins her around roughly and shoves her down on her knees before he pulls his cock out and smacks her in the face with it, which makes her giggle.');
    scene.text('"Careful! You might knock me out with that thi…" Her eyes are glued to his massive dick before she manages to finish what she was going to say. He shoves it in her mouth and she tries to deepthroat him, but gags and fails to get him all the way in her mouth.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholu3.jpg');
    scene.text('He steps away and pulls her up before turning her to face away from the couch. He then sits on the couch and pulls her onto his lap. She reaches between her legs as she straddles him, lines his dick up with her pussy and slowly lowers herself onto it. She gasps when it starts sliding in.');
    scene.text('"Oh god, it\'s like giving birth in reverse!"');
    scene.text('She manages to get about halfway down his length before she seems to hesitate. "Oh fuck, it\'s so big!" she whines as she starts riding him.');
    scene.text('Olu though reaches up, grabs her by the hips and forces her down as he thrusts up, his dick now suddenly balls deep inside her pussy.');
    scene.text('"FUUUUUUCCCCCCCKKKKK!" she cries out as he starts hammering away into her pussy. You can\'t tell if she\'s enjoying it or is in pain.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholu4.jpg');
    scene.text('You\'re pretty sure she\'s trying to pull herself up, but his large powerful hands hold her in places as he thrusts up over and over, balls deep into her.');
    scene.text('"YES! YES! Fuck my little tight pussy! Rip it up!" she cries out and he redoubles his efforts. "OH GOD! OH GOD! YES! YES!"');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholu5.jpg');
    scene.text('Olu suddenly stands up with Anushka still impaled on his dick. She starts to fall forward, but his hands catch her.');
    scene.text('"EEK!" she cries out in surprise as he throws her face first down on the couch before grabbing the bottle of lube from the end table and squirting some onto his dick.');
    scene.text('"You want rough, I give you rough," he says as he scoots up behind her and slides his dick between her ass cheeks.');
    scene.text('She inhales sharply. "Fuck! It\'s too big, it\'s too big! it\'s not going to fit!"');
    scene.text('He grabs onto her hip with one hand and keeps her pushed against the couch on her stomach so she has no where to go. "It fit," he says as he thrust forwards.');
    scene.text('"AAAAAAHHHH, FFFFFUUUUCCCCKKKK!" She looks like she\'s in a great deal of pain as he starts fucking her ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholu6.jpg');
    scene.text('She\'s grunting as he fucks her ass, but is also starting to sound like she\'s enjoying it too.');
    scene.text('He starts thrusting harder, nearly pulling out of her ass before slamming back in balls deep a few times before he just buries it balls deep and starts pounding her, which causes her to start loudly crying out.');
    scene.text('You think she\'s starting to enjoy it, but it\'s hard to tell with her.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholu7.jpg');
    scene.text('As he hammers away at her ass, her tone suddenly changes. "OH, OOOOHHH! Yes, yees, YEEESSS! FUCK ME! FUCK ME!"');
    if (((s as any).anushkaQW ?? 0)?.['radspy'] === 1) {
      scene.text('Maybe Radomir was right. Maybe she does like it hard and rough and getting off on both pain and pleasure.');
    }
    scene.text('As he keeps pounding her ass, she starts shaking and crying out as she has a very intense orgasm that just seems to keep going and going to the point that you think she\'s just having a string of rolling orgasms, one after the other. He keeps hammering away as sweat starts to pour off his body.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholu8.jpg');
    scene.text('He suddenly groans loudly and pulls out of her before standing up and pulling her up to her knees. Just as she gets up on her knees in front of him, he starts cumming. The first spurt lands in her hair, the next few splatter her face and the rest goes into her mouth.');
    scene.text('Once he finishes, she grabs her phone and takes a selfie of her cum covered face as his gigantic dick hangs over her shoulder.');
    scene.text('He then starts getting dressed as she cleans up her face and starts to get dressed as well. Once she\'s dressed, she smiles at you. "That was fun! We have to do it again. Call me sometime."');
    scene.text('Olu grins and gives her a kiss on the cheek. "Yes, I had much fun."');
    scene.text('She giggles. "Yeah, I bet you did."');
    scene.text('You walk her out and she heads out the door in front of you.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
      { label: 'Grab her ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/assgrab.jpg');
    scene.text('You follow just behind her as she leaves the apartment. As the door closes, you reach out and grab her ass.');
    scene.text('"How\'s your ass feel?" you ask in a teasing tone.');
    scene.text('"Ow! Fuck," she says as she pulls away from you and pushes your hands away. "What do you think? My ass hurts, bitch!" Despite her harsh tone, you know she\'s just fucking with you.');
    scene.text('"You really are a butt slut, you know that? You just love having your ass fucked hard and rough," you saying teasingly.');
    scene.text('She laughs slightly. "Fuck you. At least I\'m not fucking my aunt\'s boyfriend, your future uncle. Now <i>that</i> is a real slut, fucking any and everything."');
    if (((s as any).anushkaQW ?? 0)?.['radspy'] === 1) {
      scene.text('You smirk at her response. "You know I think Rad is right about you. You just like being fucked hard and rough. You fucking love it."');
      scene.text('She just gives you a fuck off look and flips you off with both fingers before she walks down them, raising her hands up over her head and double flipping you off again before she disappears. You can\'t help but smile.');
    } else {
      scene.text('You smirk at her. "I learned from the best."');
      scene.text('She rolls her eyes at you. "Whatever, slut. Talk to you later," she says before she heads down the stairs.');
      scene.text('"Later!" you call after her as she disappears down the next flight of stairs.');
    }
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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

function enterNusholusvet(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['threesome'] = ((s as any).OluQW['threesome'] ?? 0) + (1);
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A55'] = 1;
  qspCall(s, 'npcStat', 'A55');
  qspCall(s, 'npcStat', 'A144', 'a');
  scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet1.jpg');
  scene.text('You start talking off your clothes and walk over to them. "Mind if I join in?"');
  scene.text('Olu smiles and nods before Anushka can say anything. "Come, come, let\'s go to bed."');
  scene.text('He then leads the two of you down to the bedroom. As you walk in, Anushka finishes stripping down, as do you. He then directs you both to the bed, where he stands near the end and gets you both to lay on your stomachs facing him.');
  scene.text('He walks over to Anushka, who opens her mouth and lets him shove his cock inside. She tries to take him as deep as she can, but can barely take him halfway down her throat.');
  qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet2.jpg');
    scene.text('You watch as he steps away from her, sliding his dick out of her mouth before he steps over to you. You part your lips and he slides his wet dick into your mouth. You suck on it and take as much of it as you can into your mouth.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anushka rides him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet3.jpg');
    scene.text('A few minutes go by as you take turns sucking his dick before he crawls on the bed himself and lays on his back. He then pulls Anushka on top of him, who straddles him and slides down, slowly impaling herself on his monster cock.');
    scene.text('She moans loudly as she starts slowly riding it, taking about half his length into her. You lay next to them and watch his massive dick stretch her pussy.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet4.jpg');
    scene.text('After a few minutes, he smacks her on the ass. "Get off." Then he turns and looks at you. "Come."');
    scene.text('Anushka crawls off him and you crawl on top of him before lowering yourself, his wet dick pressing against your slit before you feel your lips part and stretch as his massive dick slides inside you.');
    scene.text('You go down as far as you find comfortable, taking as much of him into you as you can and before you start riding him. Anushka, not wanting to be left out, scoots up to his face and straddles it. He starts licking her pussy as you ride him.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Up your ass', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet5.jpg');
    scene.text('He lifts Anushka off him and rolls off the bed before he motions for the two of you to come to the edge of the bed. "Turn around and bend over."');
    scene.text('You both turn around and get on all fours as he grabs a bottle of lube out of the nightstand and squirts some on your asshole and uses his finger to work it in. You glance over and see him doing the same to Anushka. Once he\'s done, he squirts some lube on his dick and lubes it up.');
    scene.text('He stands on the bed behind you and you feel the massive head of his cock pressing against your asshole before it pops inside you. You hiss a little in pain as he gently starts fucking your ass while grabs hold of you and Anushka\'s hair and Anushka\'s hair and pulls on it.');
    scene.text('He slowly works his way deeper into your ass and you feel like it\'s about to push into your stomach.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anushka\'s butt', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet6.jpg');
    scene.text('After a few minutes, you suddenly feel him pull out of you and watch him move over behind Anushka.');
    scene.text('"It\'s too big, it\'s too bi… AAAAAHHH, FFFUUCCCKK! Oh my god!" you hear her cry out as he pushes his huge dick into her ass. You can\'t tell if she is in pain or enjoying it as he starts fucking her ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet7.jpg');
    scene.text('You hear Anushka moan loudly before you feel Olu moving around behind you again. His dick slides into your ass much easier this time and he starts going deeper than before. You start to scoot forward a little, but he places his hands on your hips and holds you in place.');
    scene.text('He keeps going deeper and deeper until you finally feel his balls slapping against your pussy as he starts fucking you balls deep.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Her anal pounding', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet8.jpg');
    scene.text('Several minutes later, you feel him pull out of you, leaving your ass gaping as he moves behind Anushka again, who bites her lower lip, eager for her turn again.');
    scene.text('She gasps while gripping the sheets tightly as he grips her hair tightly and pulls her back while still holding onto your hair with his other hand. You glance over and see him really going to town on her ass as she starts moaning louder and louder. "YEESSS! OH GOD YES! Fuck me harder!"');
    scene.text('He starts really hammering away as hard and fast as he can before she screams and starts shaking as she has a massive orgasm. He keeps pounding her ass throughout until he finally pulls away.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Double facial', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/anushka/nusholusvet9.jpg');
    scene.text('He gets off the bed with a look of concentration on his face. "On knees," he orders.');
    scene.text('You both slide off the bed and get on your knees in front of him, taking turns jerking him off until cum starts spurting over your faces and into your mouths. Once he finishes, he backs off and flops down on the bed on his back. "You girls wear me out, I need a nap."');
    scene.text('His dick slowly starts to go limp as he lays on his back and Anushka gathers up her underwear and heads for the living room. You start gathering your own clothes up from where you dropped them in the hall before following her back to the living room.');
    scene.text('"Wait!" Anuskha says as you\'re about to wipe the cum off your face.');
    scene.text('You look at her in confusion. "What?"');
    scene.text('She stands next to you and holds up her phone, taking a selfie of both of you with cum on your faces before she gives you a devious grin, the one she gives when she\'s up to something. "Get dressed, but leave the cum on your face."');
    scene.text('"Why?!" you ask as she finishes getting dressed, but leaves the cum on her face.');
    scene.text('She grins. "Just trust me."');
    scene.text('You sigh and get dressed while leaving Olu\'s cum on your face. "Well?" you ask.');
    scene.text('She takes you by the hand and starts to pull your towards the door. "Come on, let\'s go."');
    scene.text('You\'re a little shocked at the thought of walking out into the apartment stairwell with cum on your face. "But I have cum on my face."');
    scene.text('She pulls on you a little harder and grins back at you. "Exactly. Now come on."');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/facial.jpg');
    scene.text('You pull your hand away and stop. "No way! I\'m not going out there with cum on my face! What if someone sees me?"');
    scene.text('She sighs. "No one\'s going to see, and even if they do, they won\'t realize what it is."');
    scene.text('You shake your head and grab some tissues to start cleaning your face. She just shakes her head and leaves without you.');
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A144', 'love');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/sex/facial.jpg');
    scene.text('You let her pull you along as she opens the door and looks out both ways before she drags you out into the stairwell. You\'re still worried about someone seeing you, but Anushka is hard to resist when she\'s in such a playful mood.');
    scene.text('She keeps a tight grip on your hand as she starts up the stairs, pausing at the top to see if anyone is there before continuing up the stairs to the roof.');
    scene.text('You keep looking around as she pulls you up the stairs before you make it to the roof door. She flings it open with a bang and drags you out onto the roof with her. You hear the door close behind you before looking around. You don\'t see anyone, not that you expected anyone to be here.');
    scene.text('Anusha walks out onto the roof and spins in place, causing her skirt to swirl up and nearly expose her panties before she stops at the edge of the roof and waves you over. As you walk over to her, you can\'t help but focus on the cum covering her face.');
    scene.actions([
      { label: 'Go to the roof', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/toroof.jpg');
    scene.text('You walk over to the edge of the roof as she turns to look out over the edge.');
    scene.text('"WWWWOOOOOO!!!" she suddenly screams, startling you a little as you notice several people on the ground look up. Most quickly turn away, but a few of them watch you out of curiosity more than anything else.');
    scene.text('"Fuck, that was amazing, but it feels like someone stuck a hot car exhaust pipe up my ass!" she says with a giggle and starts flipping off some of the people still watching you.');
    scene.text('You can\'t help but giggle and shake your head. "Yeah, it was pretty amazing. I\'m already a little sore myself."');
    scene.text('She stops flipping off the people below to look at you. "Sore? If I didn\'t know any better, I\'d swear my ass was literately on fire right now! Tomorrow is going to be worse, but fuck it, it was fun."');
    scene.text('She then gives you a kiss in plain sight of anyone still watching below. You can taste the cum on her lips before she pulls away. "I need to go, got some stuff I need to do. Talk to you later, okay?"');
    scene.text('She pulls a tissue out of her purse and starts cleaning her face as she walks back to the door to the stairwell.');
    scene.text('"Sure. Talk to you later, Nush," you reply and she gives you a half wave without looking back before quickly disappearing through the door, leaving you standing on the roof with cum on your face.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'roof'] },
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

function enterOlunat(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['nat_count'] = ((s as any).OluQW['nat_count'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolu1.jpg');
  scene.text('After a few minutes, you hear a knock on the door and get up to answer it. You see Natasha standing there, looking down. "Well? Come in, he\'s waiting for you."');
  scene.text('She nods a little and then walks inside.');
  scene.text('"Take off those clothes, girl," you order and she starts stripping.');
  scene.text('As she does, Olu stands up and pulls out his massive dick before he starts stroking it. By the time Natasha is down to her panties, he walks up to her and pushes her down on her knees.');
  scene.text('She drops down, opens her mouth and starts sucking on his huge dick without having to be told, sliding a hand inside her panties and rubbing herself as she does.');
  qspCall(s, 'arousal', 'voyeur_sex', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Join in', goto: ['olu', 'natolusvet'] },
    { label: 'Watch Natasha get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolu2.jpg');
    scene.text('As she sucks his dick, he strips off the rest of his clothes while you take a seat on a chair to watch');
    scene.text('Once he\'s naked, he pulls her to her feet and places her on the couch on her back. He yanks off her panties and pushes her legs apart before he guides his dick to her pussy and rubs the tip of it back and forth across her slit, which makes her moan a little before he slides his massive cock into her.');
    scene.text('She gasps as his dick stretches her pussy and slowly slides deeper into her. Once she starts moaning loudly in pleasure, he picks up the pace and starts fucking her.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolu3.jpg');
    scene.text('As he fucks her pussy, he reaches over and grabs a bottle of lube out of the end table. He then pulls out of her and squirts some lube onto his fingers, which he works into her ass.');
    scene.text('Once he\'s satisfied, he tosses the bottle aside and pushes his giant dick into her ass. She tenses up and groans in pain, causing him to briefly stop and let her adjust before he slowly starts fucking her ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolu4.jpg');
    scene.text('He then suddenly pulls out of her ass and easily flips her over. She lets out a little frightened squeal before she settles into a doggy style position. Once she\'s on all fours on the couch leaning against the back of it, he moves up behind her, slides back into her pussy and starts fucking her with hard, causing her to moan and groan loudly.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolu5.jpg');
    scene.text('Without warning, he then pulls out of her pussy and shoves his massive cock back up her ass without missing a beat. This causes her to tense up and gasp in pain before she slowly settles down and starts moaning and groaning in a mix of pleasure and pain.');
    scene.text('As she does, he starts fucking her a little harder and a little faster, placing a hand on her hip to keep her from pulling away from him.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolu6.jpg');
    scene.text('After several minutes, he starts tensing up and moaning himself before he pulls out of her ass. "On knees and open mouth."');
    scene.text('Natasha quickly slides off the couch onto her knees before taking his massive cock in her hand and jerking him off. He soon starts cumming and almost all of it goes straight into her mouth. Once he\'s finished, she lets go and swallows his load before looking up at him with a big grin. She then seems to remember you\'re watching as she glances over at you and blushes bright red. "Um… Can I go now?"');
    scene.text('Olu nods and you smile. "Yes, you did good. Looks like you enjoyed yourself too." You continue teasing her a little, which causes her to blush even more as she quickly gets dressed.');
    scene.text('Once she\'s dressed, she looks down in embarrassment. "Bye…" she mumbles.');
    scene.text('You\'re not sure if she was talking to you or Olu, but she doesn\'t wait for a reply and quickly leaves. He watches her leave before you get up as well. "I should get going too. See you later, Olu."');
    scene.text('He smiles at you. "It was nice seeing you. Come as often as you want. You and your friends are always welcome."');
    scene.text('You giggle slightly as you head out of the door.');
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
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

function enterNatolusvet(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['threesome'] = ((s as any).OluQW['threesome'] ?? 0) + (1);
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A55'] = 1;
  if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['vaginal'] = ((s as any).OluQW['vaginal'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'A55');
  qspCall(s, 'npcStat', 'A16', 'a');
  scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolusvet1.jpg');
  scene.text('You strip out of your clothes as Natasha kneels and sucks Olu\'s dick, causing Olu to glance over at and grin.');
  scene.text('You smile at him. "She can\'t have all the fun."');
  scene.text('He happily nods. "Yes yes, more the better"');
  scene.text('Once you\'re fully naked, you walk over to the two of them and he pulls away from Natasha, causing his cock to pop out of her mouth before he sits down on the couch and pulls you down with him.');
  scene.text('You straddle him and sit on his lap before reaching between your legs and grabbing his cock, lining it up with your pussy before you slowly lower yourself down. You feel it sliding in and stretching your pussy, causing you to moan in pleasure as you start riding him.');
  scene.text('Natasha gets up on the couch beside you to watch.');
  qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Spin around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolusvet2.jpg');
    scene.text('Olu encourages you to spin around and you do so, sitting back and riding his huge cock reverse cowgirl style.');
    scene.text('As you do, Olu pulls Natasha over to him she spread her legs and sits on his face, letting him lick her pussy as you slowly work him deeper inside you.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'In the ass', handler: (st: GameState) => {
    if (!(s as any).OluQW) (s as any).OluQW = {}; (s as any).OluQW['anal'] = ((s as any).OluQW['anal'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolusvet3.jpg');
    scene.text('After a few minutes, he lifts Natasha off him and sets her aside before effortlessly lifting you. Your pussy suddenly feels empty without his massive dick inside you as he sets you down on the couch and wrangles you onto all fours before he pulls Natasha over. You glance back and see him fucking her mouth.');
    scene.text('As she sucks him, he grabs the lube and pours some onto your asshole before rubbing it around and into your ass with his finger.');
    scene.text('Once he\'s finished doing that, you watch Natasha spread your ass cheeks apart before you feel the pressure of Olu\'s cock pushing against your asshole. Even with the lube, he has to push fairly hard before his cock suddenly pops into your ass.');
    scene.text('You gasp and grasp the couch tightly, but he doesn\'t move until you relax a little. He then starts slowly fucking your ass, but gradually picks up speed.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Natasha\'s turn', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolusvet4.jpg');
    scene.text('He then suddenly slaps you on the as he pulls out of you. "Swap."');
    scene.text('You and Natasha switch positions and she gets down on all fours in front of him as you kneel next to her. You grab her ass cheeks in your hands and spread them as wide as they will go as he pours some lube onto her asshole and works it in before tossing the bottle aside again.');
    scene.text('He then lines up his massive dick and pushes it into her ass. It slides in easier than you expected and you briefly wonder if she\'s been practicing at home with a dildo or something. She groans loudly as he start slowly fucking her ass.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolusvet5.jpg');
    scene.text('He pulls out of her and looks at you. "Swap again."');
    scene.text('You get back down on all fours and she again grabs your ass cheeks and spreads them as he lines up his huge cock and pushes it into your ass.');
    scene.text('It slides in much easier this time and he starts slowly fucking your asshole, but quickly picks up the pace since you seem more relaxed this time.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Natasha pleasures you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolusvet6.jpg');
    scene.text('Several minutes pass before he pulls out of you again and suddenly flips you over. As you recover, he pulls Natasha up and pushes her head between your legs. She starts licking your pussy as he mounts her from behind. You lay back and enjoy her eating your pussy as Olu fucks her ass again.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'arousal', 'cuni', (-5), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/sex/natasha/natolusvet7.jpg');
    scene.text('Minutes go by before you feel Natasha pull away. You glance up and see her crawling on top of you before Olu shoves his dick into her mouth and she starts sucking him off.');
    scene.text('A few seconds later, he starts groaning loudly before he pulls out of her mouth and a few small spurts of cum splatter onto your crotch, as do a few drops dripping from Natasha\'s mouth.');
    scene.text('Olu gets up and starts getting dressed as Natasha climbs off you and does the same. Once you can get up, you wipe the cum off your crotch and get dressed as well.');
    scene.text('Once you\'re all dressed, Olu speaks up. "Care for tea?"');
    scene.text('Natasha shakes her head, not meeting his eyes or yours. "No thanks. I have homework I still need to do, so I need to get going."');
    scene.text('She glances at you and you nod slightly. She quickly leaves without looking back.');
    scene.text('Olu then glances at you, but you shake your head as well. "Sorry, but I should really get going as well. This was fun though. See you later."');
    scene.text('He smiles. "Yes much fun, come back any time. Bring friends any time you want."');
    scene.text('You giggle at that before you leave.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).cumspclnt = 20;
    // TODO-QSP: gs 'cum_cleanup'
  }, goto: ['pod_ezd', 'etaj_4'] },
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
    case 'olusex':
      enterOlusex(s, scene);
      break;
    case 'seduction':
      enterSeduction(s, scene);
      break;
    case 'seduction_strip':
      enterSeductionStrip(s, scene);
      break;
    case 'olusex1':
      enterOlusex1(s, scene);
      break;
    case 'oluanya':
      enterOluanya(s, scene);
      break;
    case 'anyaolusvet':
      enterAnyaolusvet(s, scene);
      break;
    case 'olunush':
      enterOlunush(s, scene);
      break;
    case 'nusholusvet':
      enterNusholusvet(s, scene);
      break;
    case 'olunat':
      enterOlunat(s, scene);
      break;
    case 'natolusvet':
      enterNatolusvet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const olu: LocationDef = {
  name: 'olu',
  title: 'You return his kiss and feel yourself getting aroused as his',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
