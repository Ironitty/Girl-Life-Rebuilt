import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterShowerRostislav1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A272');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower5.jpg');
  scene.text('You drop to your knees in front of him, his hard cock right in your face. He shoves his dick in your mouth before you have a chance to do it yourself. You start sucking on the tip of his dick while you stroke the shaft.');
  scene.text('"Oh yeah, you\'re an experienced little cock sucker, aren\'t you? Did my son teach you how to suck cock so good? Or is it just from practicing on a lot of them?" he says with a laugh.');
  qspCall(s, 'arousal', 'bj', 3);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep sucking his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower6.jpg');
    scene.text('You bop your head back and forth sucking his cock, slowly taking him deeper into your mouth until you feel the tip hitting the back of your mouth.');
    scene.text('"Yeah that\'s it. Take it all, you little slut…" He starts thrusting his hips forward, fucking your mouth. "You\'re almost as good as my wife, but you have a lot of natural talent."');
    scene.text('You feel him grab the back of your head with his hands before he shoves his dick down your throat, causing you to gag.');
    qspCall(s, 'arousal', 'bj', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get deepthroated', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower7.jpg');
    scene.text('He starts fucking your throat, causing you to gag as you feel his balls bouncing off your chin.');
    scene.text('"Oh fuck yeah, that feels so good! Such a tight little young throat…"');
    qspCall(s, 'arousal', 'bj', 3, 'deepthroat');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'He cums', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/rostislav/post_shower8.jpg');
    scene.text('He suddenly thrusts his dick all the way down your throat and holds it. You then feel it twitching in your mouth and his cum shoots down your throat. He then pulls out and the next few spurts of cum land on your face. Once he stops, he shoves his dick back in your open mouth. "Suck it clean and swallow."');
    scene.text('You do as you\'re told and swallow the cum in your mouth before sucking his dick clean of any remaining cum and swallowing that as well.');
    scene.text('With that, he pulls his dick out of your mouth and tucks it back into his pants. "You\'re a fine little cock sucker. You\'re welcome over any time you want. Maybe next time I\'ll tear up that little teen pussy of yours instead."');
    scene.text('He then pats you on the head like you were a dog before he turns and walks out without another word. You slowly get up off your knees and glance at your reflection in the mirror, seeing your face covered in his cum. You quickly wipe it off.');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A272', 1);
    qspCall(s, 'cum_call', 'face', 'A272', 1);
    (s as any).cumspclnt = 20;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerRadislav1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower3.jpg');
  scene.text('You drop to your knees in front of him, his hard cock right in your face. He shoves his dick in your mouth before you have a chance to do it yourself. You start sucking on the tip of his dick while you stroke the shaft.');
  scene.text('"Yeah, you\'ve sucked a lot of cocks in your time, haven\'t you?" he says with a laugh.');
  scene.text('After you suck his dick for a few minutes, he pulls you up to your feet and slides his hand between your legs, exploring your pussy with his fingers.');
  qspCall(s, 'arousal', 'bj', 3);
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('He grins. "Still a virgin? I\'m not surprised my brother has failed to seal the deal. I won\'t pop your cherry this time, but lucky for me you have another hole I can use," he says as he spins you around and bends you over the sink.');
    scene.actions([
      { label: 'Get butt fucked', goto: ['radaptev1', 'shower_radislav1_anal'] },
    ]);
  } else {
    if (((s as any).radomirQW ?? 0)?.['radislav_shower_sex'] === 0) {
      ((s as any).radomirQW ?? {})['radislav_shower_sex'] = 1;
      scene.text('He grins. "Yeah, this is a well used cunt. Look how wet you are already. I bet your pussy is just aching to get fucked by a big cock, isn\'t it?" he says as he lifts you up and sits you on the sink.');
      scene.actions([
        { label: 'Get fucked', goto: ['radaptev1', 'shower_radislav1_vag'] },
      ]);
    } else {
      if (((s as any).radomirQW ?? 0)?.['radislav_shower_sex'] === 1) {
        ((s as any).radomirQW ?? {})['radislav_shower_sex'] = 2;
        scene.text('He grins. "Yeah, this is a well used cunt. Look how wet you are already. I bet your pussy is just aching to get fucked by a big cock, isn\'t it? Tough luck. I want to try that ass of yours this time," he says as he spins you around and bends you over the sink.');
        scene.actions([
          { label: 'Get butt fucked', goto: ['radaptev1', 'shower_radislav1_anal'] },
        ]);
      } else {
        (s as any).temp = Math.floor(Math.random() * 2) + 0;
        if ((!((s as any).temp ?? 0))) {
          scene.text('He grins. "Damn, soaking wet already. I bet you\'re craving a big cock in your pussy, aren\'t you? It\'s your lucky day then as I feel like fucking you again," he says as he lifts you up and sits you on the sink.');
          scene.actions([
            { label: 'Get fucked', goto: ['radaptev1', 'shower_radislav1_vag'] },
          ]);
        } else {
          scene.text('He grins at you. "Damn, soaking wet already. I bet you\'re craving a big cock in your pussy, aren\'t you? Tough luck. I\'ll have another go of that ass instead," he says as he spins you around and bends you over the sink.');
          scene.actions([
            { label: 'Get butt fucked', goto: ['radaptev1', 'shower_radislav1_anal'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterShowerRadislav1Vag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A273');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower_vag1.jpg');
  scene.text('Once he has placed you on the edge of the sink, he strips out of his clothes before he steps forward and lines his dick up with your wet pussy and slides it in, causing you to moan as he starts fucking you. His dick is longer than most, but a bit on the skinny side for how long it is.');
  scene.text('"Yeah, this cunt is soaking wet. You just love taking cock, don\'t you slut?"');
  scene.text('You can tell he\'s not expecting an answer from you by the way he said it; he isn\'t even looking at you since he\'s too busy watching his dick slide in and out of your pussy, so you say nothing.');
  qspCall(s, 'arousal', 'vaginal', 3);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep getting fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower_vag2.jpg');
    // TODO-QSP: dynamic text: He reaches up to wrap both his hands behind your head and pull you closer as he ...
    scene.text(`He reaches up to wrap both his hands behind your head and pull you closer as he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock balls deep inside your pussy before he starts hammering away at your pussy as hard, fast and deep as he can.`);
    scene.text('"Fuck yeah! Take it, slut! Take my cock!" he says, not caring in the slightest if you\'re enjoying it or not.');
    qspCall(s, 'arousal', 'vaginal', 3, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hard and deep', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower_vag3.jpg');
    scene.text('You can feel his balls bouncing off your ass with each thrust as he bottoms out inside you. After a few minutes, he pulls out and lets go of you, causing you to almost slip off the sink.');
    qspCall(s, 'arousal', 'vaginal', 3, 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'He cums', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower_vag_cum.jpg');
    scene.text('His dick suddenly starts spurting his cum over your stomach. "Stroke my dick and get every last drop out," he orders.');
    scene.text('You reach around your hip and grip his dick, stroking it until every last drop of cum has come out of it. Once you let go of his cock, he wipes the tip of it against your thigh.');
    scene.text('He grabs his clothes and starts to get dressed. "Quite a nice little pussy you have there. You should go have him eat you out now. I bet he\'ll like the taste of my cock. I know he loved it with his other sluts," he laughs as he finishes getting dressed. "Maybe next time, I\'ll fuck that little ass of yours."');
    scene.text('Once he\'s finished getting dressed, he doesn\'t say another word to you before he walks out, leaving you to clean yourself up.');
    qspCall(s, 'cum_call', 'stomach', 'A273', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerRadislav1Anal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A273');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower_anal1.jpg');
  scene.text('You look back over your shoulder as he moves up behind you and you feel the tip of his dick pressing against your asshole. "Use some lube," you tell him.');
  // TODO-QSP: dynamic text: He suddenly forces his dick into your ass, the only lube being saliva from your ...
  scene.text(`He suddenly forces his dick into your ass, the only lube being saliva from your blowjob. You cry out in pain as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock forces it's way into your ass.`);
  scene.text('"There\'s plenty of lube from your slobber," he says as he grips your hips and forces his dick deeper into your ass. "See? It fits just fine," he says as he starts fucking your ass.');
  qspCall(s, 'arousal', 'anal', 3, 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get dry fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower_anal2.jpg');
    scene.text('You grit your teeth in pain as he starts pounding your ass hard and fast.');
    scene.text('"Fuck yeah, you have a tight little asshole!"');
    scene.text('You reach back to try and keep him from going so fast or deep, but he just grabs your hand and holds it before he works himself balls deep into your asshole. All you can do is grin and bare it.');
    qspCall(s, 'arousal', 'anal', 3, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Painal', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/radapt/sex/bathroom/radislav/shower_anal3.jpg');
    scene.text('He keeps fucking your ass, completely ignoring your grunts and cries of pain. Just as you\'re about to beg him to stop, he buries his dick balls deep in your ass and holds it. You feel his dick twitching inside you and filling your ass with his cum.');
    scene.text('To your relief, he finally pulls his dick out of your ass, but the burning sensation doesn\'t go away.');
    scene.text('He gives your ass a good slap. "Fine ass! I look forward to fucking it again."');
    scene.text('With that, he pulls his pants up and walks out, leaving you to clean yourself up.');
    qspCall(s, 'arousal', 'anal', 3, 'rough');
    qspCall(s, 'cum_call', 'anus', 'A273', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['radapt', 'bathroom'] },
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
    case 'shower_rostislav1':
      enterShowerRostislav1(s, scene);
      break;
    case 'shower_radislav1':
      enterShowerRadislav1(s, scene);
      break;
    case 'shower_radislav1_vag':
      enterShowerRadislav1Vag(s, scene);
      break;
    case 'shower_radislav1_anal':
      enterShowerRadislav1Anal(s, scene);
      break;
    default:
      enterShowerRostislav1(s, scene);
      break;
  }
}

export const radaptev1: LocationDef = {
  name: 'radaptev1',
  title: 'You drop to your knees in front of him, his hard cock right ',
  region: 'other',
  locationType: 'bathroom',
  description: ['You drop to your knees in front of him, his hard cock right in your face. He shoves his dick in your mouth before you have a chance to do it yourself. You start sucking on the tip of his dick while you stroke the shaft.'],
  enter: enter,
};
