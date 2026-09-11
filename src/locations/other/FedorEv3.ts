import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFood(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/movies/seat.jpg');
  scene.text('Upon entering the theater you notice plenty of empty seats, a few seats in the front next to the big screen,');
  scene.text('2 seats in the crowded middle and 4 seats in the back in a secluded corner. Fedor turns to you and asks "which seat would you like?');
  scene.actions([
    { label: 'At the front', goto: ['FedorEv3', 'Front'] },
    { label: 'In the middle', goto: ['FedorEv3', 'Middle'] },
    { label: 'In the back', goto: ['FedorEv3', 'Back'] },
  ]);
  scene.build();
}

function enterFood2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (2);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (80);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/movies/seat.jpg');
  scene.text('Upon entering the theater you notice plenty of empty seats, a few seats in the front next to the big screen,');
  scene.text('2 seats in the crowded middle and 4 seats in the back in a secluded corner. Fedor turns to you and asks "which seat would you like?');
  scene.actions([
    { label: 'At the front', goto: ['FedorEv3', 'Front'] },
    { label: 'in the middle', goto: ['FedorEv3', 'Middle'] },
    { label: 'In the back', goto: ['FedorEv3', 'Back'] },
  ]);
  scene.build();
}

function enterFront(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('You point to the front seats. "Let\'s sit up front, so that we can get the best view in the theater." And Fedor responds, "Just seeing you is the best view I could ask for"');
  scene.text('You lightly flick his nose with your finger as you reply. "Oh stop, you\'re going to make me blush"');
  scene.actions([
    { label: 'Take a seat', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 70;
    qspCall(s, 'boyStat', 'A5');
    scene.text('You and Fedor take a seat and he hands you your popcorn and snacks then gives you a kiss on the cheek as the lights dim and the movie begins.');
    scene.text('You enjoy your snacks and popcorn as you continue watching the movie. You slowly turn to Fedor to see him staring at you with a sweet smile on his face,');
    // TODO-QSP: dynamic text: he then leans forward, kissing you while gazing into your <<$pcs_eyecolor>> eyes
    scene.text(`he then leans forward, kissing you while gazing into your ${((s as any).pcs_eyecolor ?? 0)} eyes`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/kissing.jpg');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Unzip his pants', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex2.jpg');
    scene.text('While kissing Fedor, you reach down and with one hand unzip his pants and start to jerk him off.');
    scene.text('He then starts carefully looking around to see if anyone is watching, obviously worried about getting caught, but the idea only excites you knowing that someone can look your way at any time.');
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue jerking him', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 10) + 1;
    if (((s as any).VK ?? 0) <= 8) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Front HJ'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Front Caught'] }]);
    }
  } },
      { label: 'Finish and continue watching the movie', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  } },
      { label: 'Finish and continue watching the movie', goto: ['FedorEv3', 'Movies 2'] },
      { label: 'Go to the restroom', goto: ['FedorEv3', 'Restroom Break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFrontHJ(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/hj.jpg');
  scene.text('You continue jerking Fedor off, feeling his warm cock in your hand start to lightly throb with pre-cum, hearing his faint moans.');
  scene.text('While enjoying the thrill of jerking Fedor off in a public theater, you start sliding your free hand down your body until it reaches your clitoris');
  scene.text('and you begin softly rubbing your clitoris both worried about someone seeing you and wanting someone to see you at the same time. After a few minutes, Fedor bites his lip');
  scene.text('and lets out a muffled groan as his cock starts to rapidly throb in your hand spraying cum all over your legs and leaking on your hand.');
  // TODO-QSP: dynamic text: Fedor leans over to you and whispers in your ear "You know just how to satisfy m...
  scene.text(`Fedor leans over to you and whispers in your ear "You know just how to satisfy me. Thanks ${((s as any).pcs_nickname ?? 0)}" as he kisses your cheek and then your lips.`);
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'hands', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'kiss', 5);
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish and continue watching the movie', goto: ['FedorEv3', 'Movies 2'] },
  ]);
  scene.build();
}

function enterFrontCaught(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex4.jpg');
  scene.text('You continue jerking Fedor off, feeling his warm cock in your hand start to lightly throb with pre-cum, hearing his faint moans');
  scene.text('but soon you start hearing some whispers to your left and turn to see that a couple has noticed you and the woman is clearly disgusted,');
  scene.text('telling her boyfriend "Look at that girl jerking off that guy in a public theater like some trashy whore! I can\'t believe this shit.');
  scene.text('Does she have no shame?" her boyfriend responds, "Some girls just have no morals." while trying to hide the envious look on his face');
  scene.text('as he watches you and Fedor. You to pull your hand back as you bite your lip with embarrassment while trying to watch the movie, hoping that they will forget what they saw.');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Continue watching the movie', goto: ['FedorEv3', 'Movies 2'] },
  ]);
  scene.build();
}

function enterMiddle(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('You point to the middle seats. "I hear the middle is the warmest." and Fedor responds, "It may be warm but you\'re the only hot one here."');
  scene.text('You lightly flick his nose with your finger as you reply, "Oh stop, you\'re going to make me blush ');
  scene.actions([
    { label: 'Take a seat', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 70;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/staring.jpg');
    scene.text('You and Fedor take a seat and he hands you your popcorn and snacks then gives you a kiss on the cheek as the lights dim and the movie begins.');
    // TODO-QSP: dynamic text: You enjoy your snacks and popcorn as you watch the movie. You continue watching ...
    scene.text(`You enjoy your snacks and popcorn as you watch the movie. You continue watching the movie until you hear Fedor whisper in your ear "Hey ${((s as any).pcs_nickname ?? 0)} show me your tits."`);
    scene.actions([
      { label: 'Pull down your shirt', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/top1.jpg');
    scene.text('You pull down your shirt and Fedor begins pawing at your breast giving you an exciting thrill, feeling his strong hands caressing your breasts.');
    scene.text('After a few seconds Fedor unzips his pants as he whispers in your ear "I want to feel your lips around my dick"');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/bj.jpg');
    scene.text('You lean over and take Fedor\'s dick into your mouth and do your best to suck and massage his dick with your tongue.');
    scene.text('Fedor combs his fingers through your hair as you continue pleasing him. After a few minutes Fedor lets out a muffled groan then shoots his load into your mouth');
    scene.text('which you happily swallow before returning to watching the movie like nothing happened.');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish and continue watching the movie', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  } },
      { label: 'Well you need to wait until we are alone', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  } },
      { label: 'Continue watching the movie', goto: ['FedorEv3', 'Movies 2'] },
      { label: 'Go to the restroom', goto: ['FedorEv3', 'Restroom Break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('You point to the back seats. "Let\'s sit in the back where we can get some privacy." and Fedor responds, "Like it in the back huh?"');
  scene.text('You lightly flick his nose with your finger as you reply, "Oh stop, you\'re going to make me blush');
  scene.actions([
    { label: 'Take a seat', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/staring.jpg');
    scene.text('You and Fedor sit on 2 of the back seats and he hands you your popcorn and snacks then gives you a kiss on the cheek as the lights dim and the movie begins.');
    scene.text('You enjoy your snacks and popcorn as you watch the movie. You continue watching the movie when you hear Fedor whisper in your ear.');
    // TODO-QSP: dynamic text: "We're all alone back here <<$pcs_firstname>>, wanna have some fun?"
    scene.text(`"We're all alone back here ${((s as any).pcs_firstname ?? 0)}, wanna have some fun?"`);
    scene.actions([
      { label: 'I\'m always up for some fun', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A5');
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex3.jpg');
    // TODO-QSP: dynamic text: Fedor gives you a lustful smirk as he lean forward and gives you a passionate ki...
    scene.text(`Fedor gives you a lustful smirk as he lean forward and gives you a passionate kiss. You soon feel Fedor pulling your top down, exposing your breasts which fills you with excitement. You reach out for Fedor groin as he kisses you slowly unzipping his pants and then gently stroking his cock after a minute Fedor whispers in your ear. "${((s as any).pcs_nickname ?? 0)} I dare you to get down on your knees and suck me off right here in the theater."`);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Challenge accepted', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex5.jpg');
    scene.text('You slide down to your knees as Fedor quietly pulls down his pants and leans back. You start leaning forward to suck his dick when you hear the guy sitting in the seat in front of you cough which startles you for a second causing you to start second guess what you are doing until you turn to Fedor and see the blissful smile on his face almost begging you to continue.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex6.jpg');
    scene.text('Not wanting to disappoint him, you start sucking Fedor\'s dick enjoying both the warmth of his penis and the excitement of giving a blowjob in a public theater. Fedor starts petting your head as you continue to suck him and after 2 minutes he suggests. "Pull down your pants and ride me." with a confident smile on his face.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex7.jpg');
    scene.text('You nervously pull down your pants and slowly rise up, very worried that someone might turn around and see you but you gather your courage and slide Fedor\'s dick into your pussy and start riding him while your heart pounds with both fear and excitement. A few minutes pass then Fedor grabs you by your hips and pushes you onto the nearby seat.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spread your legs for him', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 10) + 1;
    if (((s as any).VK ?? 0) <= 7  &&  ((s as any).FedorLoveTalk ?? 0) < 1) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Back Sex'] }]);
    } else {
      if (((s as any).VK ?? 0) <= 7  &&  ((s as any).FedorLoveTalk ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Back Preg'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Back Caught'] }]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Maybe next time', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  } },
      { label: 'Watching the movie is fun enough for me', goto: ['FedorEv3', 'Movies 2'] },
      { label: 'Go to the restroom', goto: ['FedorEv3', 'Restroom Break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBackSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex8.jpg');
  // TODO-QSP: dynamic text: You spread your legs and feel Fedor enter you, causing you to moan lightly and F...
  scene.text(`You spread your legs and feel Fedor enter you, causing you to moan lightly and Fedor start to thrust faster. You completely forget where you are as you enjoy Fedor roughly fucking your pussy until he lets out a muffled groan as he pulls out of you and paints your stomach with his seed. After a few seconds he pulls up his pants as you put on yours. "You are a great fuck ${((s as any).pcs_firstname ?? 0)}. I knew I picked the right girl when I chose you." he then kisses your lips.`);
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'kiss', 5);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish watching the movie', goto: ['FedorEv3', 'Movies 2'] },
  ]);
  scene.build();
}

function enterBackCaught(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex9.jpg');
  scene.text('You spread your legs and feel Fedor enter you, causing you to moan lightly and Fedor start to thrust faster. You completely forget where you are as you enjoy Fedor roughly fucking your pussy until he lets out a muffled groan as he pulls out of you and paints your stomach with his seed. You open your eyes to see a flashlight shined on you, then Fedor exclaims. "Oh shit!" as many people in the theater are staring at both of you. You quickly put on your pants while trying to cover yourself as much as possible then you and Fedor quickly walk out of the theater.');
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave the theater', goto: ['FedorEv3', 'Movies 3'] },
  ]);
  scene.build();
}

function enterBackPreg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('Fedor leans forward and whispers in your ear. "Would you like to try for a baby here or would you like me to pull out?"');
  scene.actions([
    { label: 'Cum inside me', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex8.jpg');
    scene.text('You spread your legs and feel Fedor enter you, causing you to moan lightly and Fedor start to thrust faster. You completely forget where you are as you enjoy Fedor roughly fucking your pussy until he lets out a muffled groan,');
    // TODO-QSP: dynamic text: filling you with his seed. After a few seconds he pulls up his pants as you put ...
    scene.text(`filling you with his seed. After a few seconds he pulls up his pants as you put on yours. He looks you in the eyes. "${((s as any).pcs_nickname ?? 0)} You are so precious to me." he then kisses you softly as you both get seated looking around to see if anyone noticed.`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish watching the movie', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  } },
    { label: 'Pull out please', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 10) + 1;
    if (((s as any).VK ?? 0) <= 7) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Back Sex'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Back Caught'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterMovies2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).EndMovie = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('The movie ends and the crowd gets up and starts leaving the theater. Fedor collects the popcorn, drinks and candy bags and throws them in the trash then returns to you. Fedor kisses you on the cheek and asks "Are you ready to go home?"');
  if ((!((s as any).FedorRest ?? 0))) {
    scene.actions([
      { label: 'I\'d like to wash up first', goto: ['FedorEv3', 'Restroom Fedor'] },
    ]);
  } else {
    scene.actions([
      { label: 'I\'d like to wash up first', goto: ['FedorEv3', 'Restroom'] },
    ]);
  }
  scene.actions([
    { label: 'I\'m ready to go home', goto: ['FedorEv3', 'Movies 3'] },
  ]);
  scene.build();
}

function enterRestroomBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('You turn to Fedor. "I need to use the restroom, I\'ll be back soon." as you lean over and give Fedor a quick kiss. Fedor then asks "Will you be alright on your own or would you like me walk you to the restroom?"');
  scene.actions([
    { label: 'Walk with me', goto: ['fedorev3', 'Restroom Fedor'] },
    { label: 'I\'ll be fine on my own', goto: ['fedorev3', 'Restroom'] },
  ]);
  scene.build();
}

function enterRestroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/restrooms.jpg');
  scene.text('You give Fedor a kiss on the cheek then head to the restroom, once you get there you see the men\'s restroom and the ladies restroom.');
  scene.actions([
    { label: 'Enter the ladies room', goto: ['FedorEv3', 'Ladies Room'] },
    { label: 'Enter the Men\'s room', goto: ['FedorEv3', 'Mens Room'] },
  ]);
  scene.build();
}

function enterLadiesRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv3', 'Ladies Room');
  qspCall(s, 'stat', '');
  scene.text('<center><b><h4><font color=#ff00cc>Restroom</font></h4></b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/ladiesrestroom.jpg');
  scene.text('The ladies room is very clean and has 3 <a href="exec:gt \'mirror\', \'start\'">mirrors</a>, 3 sinks and 4 stalls.');
  if (((s as any).EndMovie ?? 0) === 1) {
    scene.actions([
      { label: 'Leave the restroom', goto: ['FedorEv3', 'Movies 3'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go back to the theater', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  }
  scene.actions([
    { label: 'Have a quick wash (0:10)', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 10) + 1;
    if (((s as any).VK ?? 0) <= 4) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Lady'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Wash'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterMensRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv3', 'Mens Room');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Restroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/ladiesrestroom.jpg');
  scene.text('The men\'s room is a little dirty and has a long <a href="exec:gt \'mirror\', \'start\'">mirror</a>, 2 sinks and 4 stalls.');
  if (((s as any).EndMovie ?? 0) === 1) {
    scene.actions([
      { label: 'Leave the restroom', goto: ['FedorEv3', 'Movies 3'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go back to the theater', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  }
  scene.actions([
    { label: 'Have a quick wash (0:10)', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 20) + 1;
    if (((s as any).VK ?? 0) <= 5  &&  (!((s as any).WithFedor ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Man'] }]);
    } else {
      if (((s as any).VK ?? 0) <= 10  &&  ((s as any).WithFedor ?? 0) === 0  &&  (((s as any).succubusflag ?? 0) !== 1  ||  ((s as any).succublvl ?? 0) < 2)) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Man 2'] }]);
      } else {
        if (((s as any).VK ?? 0) <= 15  &&  (!((s as any).WithFedor ?? 0))) {
          scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Gang'] }]);
        } else {
          if (((s as any).VK ?? 0) <= 8  &&  ((s as any).WithFedor ?? 0) === 1) {
            scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Rescue'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Wash 2'] }]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterRestroomFedor(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorRest = 1;
  (s as any).WithFedor = 1;
  qspCall(s, 'stat', '');
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  // TODO-QSP: dynamic text: You and Fedor head toward the restroom while chatting about the movie on the way...
  scene.text(`You and Fedor head toward the restroom while chatting about the movie on the way there. When you both arrive, Fedor tells you "Go on ${((s as any).pcs_nickname ?? 0)}, I'll wait for you here."`);
  scene.actions([
    { label: 'Enter the ladies room', goto: ['FedorEv3', 'Ladies Room'] },
    { label: 'Enter the men\'s room', goto: ['FedorEv3', 'Mens Room'] },
    { label: 'Pull Fedor in the men\'s restroom', goto: ['FedorEv3', 'Fedor Restroom'] },
  ]);
  scene.build();
}

function enterFedorRestroom(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorRestTimes = ((s as any).FedorRestTimes ?? 0) + (1);
  qspCall(s, 'boyStat', 'A5');
  qspCall(s, 'stat', '');
  if (((s as any).fedorKozlovQW ?? 0) < -10) {
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('You grab Fedor by the hand and pull him into the restroom with you. Fedor is surprised at first then starts to fondle your breasts as you pull down his pants then kneel in front of him.');
  scene.actions([
    { label: 'Blowjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrest1.jpg');
    scene.text('You wrap your lips around Fedor\'s cock and begin sucking and massaging his dick. Fedor rubs your head as he remarks "That\'s my girl, Keep sucking just like that." so you continue at the same pace until Fedor then lifts you up by the shoulders and asks you "Which do you prefer? front or back?"');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Front', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestf1.jpg');
    // TODO-QSP: dynamic text: Fedor lifts you up to your feet with almost no effort then pulls down you shirt ...
    scene.text(`Fedor lifts you up to your feet with almost no effort then pulls down you shirt exposing your breasts, he then lifts you up by your waist and places you on the sink where he inserts his ${((s as any).dick ?? 0)} centimeter penis into your pussy. Fedor starts slow then begins to pick up the pace.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestf2.jpg');
    scene.text('Fedor continues pounding your pussy harder and harder causing you to moan uncontrollably, feeling the growing pleasure building up and watching Fedor\'s eyes hungrily craving you. After a few seconds Fedor tells you that he is ready to cum.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Tell him to cum inside', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestf2.jpg');
    scene.text('You tell Fedor "Please cum inside me!" he nods, then you feel a warmth filling your womb, his penis throbbing inside you filling you up more and more with each pump.');
    // TODO-QSP: dynamic text: Fedor catches his breath then looks down to you. "I'm so lucky to have you <<$pc...
    scene.text(`Fedor catches his breath then looks down to you. "I'm so lucky to have you ${((s as any).pcs_firstname ?? 0)}, I hope we remain together forever." You can feel your cheeks growing`);
    scene.text('red as you reply, "Fedor you are so sweet, There is no one I care about more than you." as you both share a kiss before getting dressed.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum5.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 3'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/cumface1.mp4');
    scene.text('You pull Fedor\'s cock out of you then get down on your knees just as Fedor groans and paints your face with his seed. You sit for a few seconds feeling his warm cum slowly');
    // TODO-QSP: dynamic text: leaking down your face as Fedor puts his pants back on then says, "Your pussy is...
    scene.text(`leaking down your face as Fedor puts his pants back on then says, "Your pussy is so tight ${((s as any).pcs_firstname ?? 0)}, I feel like I could fuck you for days but I should get you back`);
    scene.text('home before it gets too late." Fedor then helps you back to your feet and gets you dressed up before walking to the sink to get cleaned up.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestcum.jpg');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 3'] },
    ]);
  } },
      { label: 'Tell him to pull out', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestf2.jpg');
    scene.text('You say to Fedor. "Pull out please, I can\'t afford to get pregnant" he then pulls out and groans as he sprays his warm semen all over your stomach. You then grab him by');
    // TODO-QSP: dynamic text: the back of his head and bring his lips to yours, sharing a deep passionate kiss...
    scene.text(`the back of his head and bring his lips to yours, sharing a deep passionate kiss together and Fedor whispers in your ear "${((s as any).pcs_firstname ?? 0)} you're as amazing as ever."`);
    scene.text('he then puts his pants back on and helps you get dressed before leading you to the sink to get cleaned up.');
    scene.img('images/locations/city/residential/sauna/sex/cumbelly4.mp4');
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 3'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Back', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A5');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestb.jpg');
    // TODO-QSP: dynamic text: Fedor grabs you by your waist and flips you around then pushes you onto the sink...
    scene.text(`Fedor grabs you by your waist and flips you around then pushes you onto the sink as he pulls your shirt open exposing your breasts. You soon feel his ${((s as any).dick ?? 0)} centimeter Penis enter your vagina giving you jolt of stimulation as he begins to thrust his hips.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    scene.actions([
      { label: 'Lean against the sink', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestb2.jpg');
    scene.text('After a few seconds Fedor leans forward and kisses your neck while giving your breasts a gentle squeeze. You can feel Fedor increasing the pace of his thrust which causes your growing pleasure to build up. You turn to face Fedor to see his lustful eyes meet yours.');
    qspCall(s, 'arousal', 'vaginal', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Rest leg on the sink', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestb3.jpg');
    scene.text('As you feel Fedor pounding your pussy you turn to the mirror over the sink to watch yourself getting fucked. At that time the reality of the situation sinks in and you think');
    scene.text('to yourself "I am watching myself being fucked in a public bathroom that someone can walk into at any moment." and the thought excites you so much that you don\'t even notice');
    scene.text('that you are almost climbing onto the sink trying to get Fedor to penetrate you deeper. After a few seconds Fedor tells you that he is ready to cum.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Tell him to cum inside', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestb3.jpg');
    scene.text('You tell Fedor "Please cum inside me!" he then nods and then you feel a warmth filling your womb, his penis throbbing inside you filling you up');
    // TODO-QSP: dynamic text: more and more with each pump. Fedor catches his breath then look down to you and...
    scene.text(`more and more with each pump. Fedor catches his breath then look down to you and says, "I'm so lucky to have you ${((s as any).pcs_firstname ?? 0)}, I hope we`);
    scene.text('remain together forever." You can feel your cheeks growing red as you reply, "Fedor you are so sweet, I can\'t picture myself with anyone other');
    scene.text('than you." as you both share a kiss before getting dressed.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum10.mp4');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 3'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/cumface1.mp4');
    scene.text('You pull Fedor\'s cock out of you then get down on your knees just as Fedor groans and paints your face with his seed. You sit for a few seconds feeling his warm semen');
    // TODO-QSP: dynamic text: slowly leaking down your face as Fedor puts his pants back on then remarks "Your...
    scene.text(`slowly leaking down your face as Fedor puts his pants back on then remarks "Your pussy is so tight ${((s as any).pcs_firstname ?? 0)}, I feel like I could fuck you for days but I should`);
    scene.text('get you back home before it gets too late." Fedor then helps you back to your feet and gets you cleaned up before walking you out of the restroom.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestcum.jpg');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 3'] },
    ]);
  } },
      { label: 'Tell him to pull out', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Fedor/fedrestb3.jpg');
    scene.text('You tell Fedor "Pull out please, I can\'t afford to get pregnant" he then pulls out and groans as he sprays his warm semen all over your ass.');
    scene.text('You then spin around and grab him by the back of his head, bringing his lips to yours, sharing a deep passionate kiss together. Fedor whispers');
    // TODO-QSP: dynamic text: in your ear "<<$pcs_firstname>> you're as amazing as ever." he then puts his pan...
    scene.text(`in your ear "${((s as any).pcs_firstname ?? 0)} you're as amazing as ever." he then puts his pants back on and helps you get cleaned before you both exit the restroom together.`);
    scene.img('images/shared/sex/cum/cum5.mp4');
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 3'] },
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

function enterRestroomLady(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).FedorRestTimes = ((s as any).FedorRestTimes ?? 0) + (3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady1.jpg');
  scene.text('As you approach the sink you see a woman. She appears to be applying her mascara. You stand next to her and she gives you a friendly smile as she continues brushing her eyelashes. You turn on the water and prepare to wash up when you notice that the girl is checking you out while biting her lip clearly aroused.');
  scene.actions([
    { label: 'Seduce her', handler: (st: GameState) => {
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady2.jpg');
    scene.text('You ask "See anything you like?" she shyly turns away clearly embarrassed that you caught her checking you out, so you decide to turn things up. You approach her from');
    scene.text('behind then place your hands on her hips. The woman turns her head to face you with a lustful smile as you rub your hands down her leg then back up her skirt enjoying the feel of her soft smooth skin.');
    qspCall(s, 'arousal', 'foreplay_give', 5, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Undress her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady3.jpg');
    scene.text('When you notice that she isn\'t objecting you begin to undress her while consistently kissing her body as you expose it. After she is undressed you turn her around and start licking her breast as you undress yourself and soon you are both undressed with your nude bodies pressed against one another as you share a passionate kiss.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/kiss1.jpg');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'foreplay_give', (-5), 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull her head to your crotch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull her head to your crotch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady6.jpg');
    scene.text('You both continue kissing as your hands wander down her body, caressing her curves until you grab her by her hair then pull away from her as you begin laying backward on a nearby wall, lightly pulling her head down to your crotch. She looks up at you then begins eagerly licking your vaginal lips while working her way up to your clitoris.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Rest your leg on the counter', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady7.jpg');
    scene.text('As the woman is licking your clitoris, you raise your right leg and place your foot on the counter giving the woman easier access to your vagina which she takes full advantage of as she shoves her tongue inside your pussy, lapping up your juices. She returns to licking your clitoris doing the best she can to pleasure you which is working as you can feel the pleasure building quickly as she increases her pace.');
    qspCall(s, 'arousal', 'cuni', (-5), 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady7.jpg');
    scene.text('The pleasure begins building quickly as you close your eyes, surrendering yourself to the pleasure and soon you feel your entire body begin to heat up as you reach your breaking point. You suddenly feel your muscles stiffen as you hit an explosive orgasm causing your body to twitch and spasm as her soft tongue continues massaging your clit. You ride out your orgasm then take a few seconds to catch your breath before opening your eyes to see the woman\'s face in front of yours as she says, "It looks like you enjoyed yourself. I guess I still have it. I have to go now but I had a great time and I do hope to see you again." she then gets dressed and leaves the restroom.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/kiss1.jpg');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give her cuni', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady4.jpg');
    scene.text('You slowly break off the kiss and then lightly push her down onto a nearby chair and get down on all fours and crawl to her in a catlike manner, trying to entertain her as you make your way to her pussy. When you arrive she reaches out for your head with her hand and lightly pets you as you bury your head in between her legs. You do your best to continue stimulating her, Never taking your tongue off her clitoris.');
    qspCall(s, 'arousal', 'cuni_give', (-5), 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady5.jpg');
    scene.text('You continue licking her as she leans further back trying to push her pussy further in your face but then slips off the chair, you do your best to catch her and then you both laugh as you help her back up. "I\'m such a clutz. But let\'s not let this stop us" She then waves you toward her and as you bury your face in between her legs. She lift her right leg over her head. You can\'t help but think to yourself "She must be a cheerleader" as you continue licking her clit while enjoying the sight of her juices leaking down her leg.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make her cum', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/lady5.jpg');
    scene.text('You start to pick up the pace and she begins moaning louder as you get her closer to her orgasm. You alternate between your tongue and finger to keep your tongue from getting tired and after a few minutes you can feel her body start to spasm and her legs begin to give out. You do your best to support her weight as you finish her off. After her body relaxes you lick her juices off both her legs and her pussy before holding her in your arms, kissing her passionately. After a minute you both help each other get dressed then the girl tells you "That was incredible! Thank you so much, That was exactly what I needed." as she moves in for one last kiss before leaving.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Ladies/kiss2.jpg');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian', 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash'] },
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
    { label: 'Ignore her and wash up', goto: ['FedorEv3', 'Restroom Wash 2'] },
  ]);
  scene.build();
}

function enterRestroomMan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).FedorRestTimes = ((s as any).FedorRestTimes ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/urinal.jpg');
  scene.text('You approach the sink and turn on the water as a man enters the restroom and starts to use the urinal. The man clearly doesn\'t notice you.');
  qspCall(s, 'willpower', 'sex', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Walk up behind him and grab his penis [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Walk up behind him and grab his penis [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npcgeneratec', '', 0, 'Guy in restroom', Math.floor(Math.random() * 27) + 19);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene5.jpg');
    scene.text('You walk up behind him and wait for him to finish peeing then you reach out and grab his penis. The man jumps up obviously surprised, he quickly turns to face you with a shocked look on his face but after looking you up and down he smiles and lays against the wall and enjoys your touch gently stroking your hair as you continue to slowly stroke his penis.');
    qspCall(s, 'arousal', 'hj', (-5), 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scenea1.jpg');
    scene.text('The man grabs your shoulders and spins you around then begins undressing you as he kisses your ass and legs, he then turns on the tap and wets his fingers then uses them to lube up your anus. The man rubs his dick against your anus and then thrusts his dick in your ass causing you to moan loudly. The pain in your rectum is sharp at first but as he remains still inside you your asshole begins to adjust to his cock.');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scenea2.jpg');
    scene.text('The man begins thrusting his hips rubbing his cock against your anus slow at first then he continues picking up the pace until all you can hear is the smacking of his hips against your ass. You are moaning uncontrollably as you feel the pain fade and pleasure build. You turn your head to see a reflection of yourself and the reality of the situation dawns on you causing you to think to yourself "I can\'t believe that I am being fucked by a stranger in a public bathroom." before you can finish your thought you hear the man say, "OH FUCK I\'m gonna cum!"');
    qspCall(s, 'arousal', 'anal', (-5), 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down on you knees', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/cumface1.mp4');
    scene.text('You quickly pull off him and get on your knees in front of him as he groans then paints your face with his seed. He continues to spray his load in your face until he has nothing left, he then takes a few seconds to catch his breath while admiring the view. You begin wiping the cum off of your eyelids as the man says, "Whoa, I must be the luckiest guy in the world right now, you were amazing girl. I hope we meet again." he then pulls up his pants then leaves the restroom.');
    qspCall(s, 'cum_call', 'face');
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 2'] },
    ]);
  } },
      { label: 'Let him cum inside', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/analcreampie/cumanal1.mp4');
    scene.text('Instead of pulling off him you start pushing against his crotch and he grabs your hips firmly as he groans and fills your ass with his seed. You can feel him pumping his seed into your ass almost filling you up completely, he then suddenly pulls out of you sending a stream of semen to leak out of your ass and drip on the floor. The man watches you for a few seconds then says, "Damn girl, I don\'t know what I did to deserve this but thank you, you are a real angel." He kisses you on the forehead as he pulls up his pants then leaves the restroom.');
    qspCall(s, 'cum_call', 'anus');
    qspCall(s, 'arousal', 'anal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 2'] },
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
    { label: 'Ignore him and continue washing up', goto: ['FedorEv3', 'Restroom Wash 2'] },
  ]);
  scene.build();
}

function enterRestroomMan2(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorRestTimes = ((s as any).FedorRestTimes ?? 0) + (1);
  qspCall(s, 'npcgeneratec', '', 0, 'Pyotr', Math.floor(Math.random() * 27) + 19);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene.jpg');
  scene.text('You approach the sink and turn on the water then suddenly you feel your shirt being pulled down and someone\'s hands on your breasts. You jump in shock and the man behind you whispers in your ear "Keep quiet bitch and this will be over quickly."');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Splash water in his face', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 3) + 1;
    if (((s as any).VK ?? 0) === 1  ||  (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).succublvl ?? 0) > 1)) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Escape'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Rape'] }]);
    }
  } },
    { label: 'Submit', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene1.jpg');
    scene.text('Not wanting to risk angering him you remain silent and the guy pulls you to the ground where he removes your clothes while he whispers in your ear "You know your place, Good girl." as he pats your head. After he removes your pants he stands up and points to the sink. "Now get over there and spread you legs!"');
    scene.actions([
      { label: 'Do as he says,', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene2.jpg');
    scene.text('You move to the sink then spread your legs he then pushes you onto the sink and penetrates your pussy causing slight pain at first, then he begins thrusting his hips, fucking you at a modest pace. You do your best to make the most of it thinking to yourself "He may be raping me but I might as well try to enjoy it." as he starts pumping even harder.');
    qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene3.jpg');
    scene.text('after a few minutes the guy pulls away from you and start masturbating as he tells you "Get down on your knees and finish me off" You obediently do as he asks. Crawling to him then looking up at him as you wrap your lips around his dick, doing your best to make him cum as quickly as possible. After a few seconds the guy says, "I\'m cumming."');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Nod', handler: (st: GameState) => {
    (s as any).PyotrPhoto = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/cumface1.mp4');
    scene.text('The man reaches into his pocket and takes out his phone then he pulls his dick out of your mouth. "Open up and say ahh." he then groans as he shoots his load over your face and in your mouth. You can feel his cum leaking down your face and hear the snapping of photos as the man is taking pictures of you with his phone,');
    scene.text('thinking to yourself "I hope these photos don\'t come back to haunt me." he then says, "Good girl, I can\'t wait until we meet again, luckily I\'ll have something to remember you by." as he waves his phone over your face and he then pulls up his pants and walks out of the restroom.');
    qspCall(s, 'cum_call', 'face', 'Pyotr');
    qspCall(s, 'cum_call', 'mouth', 'Pyotr');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 2'] },
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

function enterRestroomEscape(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/mensrestroom.jpg');
  scene.text('You carefully move your hand under the tap and fill your hand with water and then splash it in the attackers face and luckily it stuns him long enough for you to escape.');
  if (((s as any).EndMovie ?? 0) === 1) {
    scene.actions([
      { label: 'Escape', goto: ['FedorEv3', 'Movies 3'] },
    ]);
  } else {
    scene.actions([
      { label: 'Escape', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  }
  scene.build();
}

function enterRestroomRape(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (10);
  qspCall(s, 'mood', 'lower', 'medium');
  (s as any).pain['tummy'] = ((s as any).pain['tummy'] ?? 0) + (15);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/rape.jpg');
  scene.text('You carefully move your hand under the tap and fill your hand with water and then splash it in the attackers face but sadly it only makes him angrier, he then slams you against the wall and then punches you in the stomach as he strips you. The man grabs you by the throat as he exclaims "STUPID BITCH! I warned you but you had to be a brave little bitch! now I\'m going to take my time with you!"');
  scene.actions([
    { label: 'Plead', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/rape1.mp4');
    scene.text('You plead with the man but his only response is "Shut the fuck up! The only thing a whore like you is good for is a getting fucked, so spread your legs and keep quiet!" He then restrains your arms with one hand as he rubs your clitoris with his other. Your heart pounding as you get the growing feeling of helplessness as you are unable to stop this man in any way.');
    qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait and see what he does next', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensrape3.mp4');
    scene.text('He then grabs you by the hair and pulls you up to his dick. You try your best to break free but he is too strong, Just as he lifts his hand to slap you, you raise your hand in submission and then wrap your lips around his cock doing your best to satisfy him, so that this can end as quickly as possible. He then says, "You\'re starting to understand your place. Good! Now get up bitch!"');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    (s as any).pain['asshole'] = ((s as any).pain['asshole'] ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensrape1.mp4');
    scene.text('You start preparing to stand up when he lifts you up by your shoulders and then unzips his pants and you can feel his dick pressing against your anus. You plead with him "Please at least lube…" He then drives his cock into your ass causing a sharp pain. You scream loudly but then he places his hand over your mouth and whispers in your ear "No screaming for you. The only thing I want to hear out of your mouth is "Fuck me harder."');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    (s as any).pain['asshole'] = ((s as any).pain['asshole'] ?? 0) + (5);
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensrape1.mp4');
    scene.text('You continue to give in knowing that there is nothing more you can do. Feeling both pain and fear not knowing what will happen next, how long will this last or if he will even let you go after he is done. You can only try your best to distract yourself from the almost unbearable pain.');
    qspCall(s, 'arousal', 'anal', (-5), 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).pain['asshole'] = ((s as any).pain['asshole'] ?? 0) + (5);
    (s as any).PyotrPhoto = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/mensrestroom.jpg');
    scene.text('After what feels like 2 hours he finally groans and fills your ass with his seed then pushes you on the ground and you lay there feeling relieved that he has stopped but still fearful as to what he will do next. You just listen trying your best to stay still as you hear him taking photos with his phone and then he pulls up his pants. "Now that is what a whore is good for. Remember this before you try some stupid shit like that again!" as he walks out of the restroom.');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'anus', 'Pyotr');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 2'] },
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

function enterRestroomGang(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorRestTimes = ((s as any).FedorRestTimes ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/hide.jpg');
  scene.text('You approach the sink then turn on the water, when you hear some rowdy guys outside, you quickly run into one of the stalls then hear the door slam open and the guys start hollering as they share stories that you can\'t quite hear.');
  scene.actions([
    { label: 'Eavesdrop', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You approach the door to listen to what they are talking about. One guy says, "You had to see the tits on that girl. She was basically flying out of her top." and the other guy said "That\'s nothing. I had this one girl with tits so big you could fuck them for days." another guy replies, "This one bitch I saw claimed that she was…" One of the guys yells out "Hold on guys! We got a girl is in here." You look up to see a man peeking over the stall and your heart stops as someone starts pushing the stall door open.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/gang.jpg');
    scene.actions([
      { label: 'Hold the door closed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/gang1.jpg');
    scene.text('You quickly push the door closed and hold it then the guys start slamming the door while the guy peeping yells to the others "Check this out guys. This girl is hot! I bet she came in here looking for a good fucking." the guys start hollering even louder as the guy continues to make vulgar comments about you. After a few seconds you feel them slamming even harder on the door when it finally gives in, swinging open. You see the men all staring into the stall with lustful looks on their faces.');
    scene.actions([
      { label: 'Plead with them', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/gang2.jpg');
    scene.text('"I didn\'t mean to interrupt. Can I please go." One of the guys grins. "You can go… after we\'re done with you." He then lunges into the stall and grabs you by the throat and whispers in your ear "I bet you came in here hoping to get caught, so that you can get a good fucking. Well we\'ll give you a fucking you\'ll never forget." he then pulls you out of the stall where the other guys are waiting with their cocks in their hand.');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/gang3.jpg');
    // TODO-QSP: dynamic text: Knowing that you are not strong enough to overpower them, you submit to them all...
    scene.text(`Knowing that you are not strong enough to overpower them, you submit to them allowing them to remove your top as they bend you over, so that one of the guys cock is pressing against your lips. You wrap your lips around his dick provoking a moan from him as the rest of the guys touch you all over your body. "Look at this slut. She looks a lot better than that girl from the party. I bet she's a better fuck too." and the other guy responds, "I bet you ${qspFunc(s, 'money', 'format', 200)} that she will be able to take all of our dicks without passing out." and the other guy gives him a high five.`);
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/gang4.jpg');
    scene.text('As you are sucking, the guy behind you shoves his dick into your vagina causing a rush of pain and pleasure. The pain quickly subsides and you start to actually feel less afraid as you enjoy the pleasure build up. You can hear one of the guys say, "Hey look at her. I think she\'s starting to like it." and another responds, "I knew she was a dirty whore when I saw her." the words offend you at first but begin to excite you as you continue getting fucked.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/gang5.jpg');
    scene.text('One of the guys grabs you by your legs and lifts you up as another one lays under you then you feel a sharp sting in your ass as you are lowered onto a guy\'s dick. You let out a pained grunt as you feel another guy\'s dick enter your vagina and one in your mouth so you continue sucking trying your best to make them cum, so that they will no longer need you and hopefully let you go.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/gang6.jpg');
    scene.text('You continue to let them do as they please and after a few minutes one of the guys grabs your throat. "Are you ready for our cum whore?"');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'anal', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Beg them to pull out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/Cum/cum1.jpg');
    scene.text('"You plead. "Please pull out, I want your cum all over my body" and one of the guys responds, "You heard her gentlemen, let\'s cover this bitch from head to toe." as they begin to pull out of you and one by one they release their load on a different part of your body covering you with their cum.');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'face');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'breasts');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'stomach');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'legs');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'labia');
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'hj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'hj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'See what they do', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('Without even realizing it you are rubbing their cum all over your body as you stare at them gazing in adoration at you. "Whoa this whore is a real gem. I\'ll be having dreams of this one." and another responds, "If you love her so much why don\'t you marry her and have fun explaining it to that loud mouth bitch you call a mother!" Causing the first guy to tackle the other and the 2 guys begin fighting as the rest of them start cheering them on. You use this time to quickly grab your clothes then run out of the men\'s room and into the ladies room.');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/fight.jpg');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash'] },
    ]);
  } },
    ]);
  } },
      { label: 'Nod', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/Cum/cum2.jpg');
    scene.text('You meekly nod yes and one of the guys says, "Alright boys, Lets fill this whore up." and one by one the guys begin to cum inside all of your holes and on your face and stomach. After they finish they pull out of you while slowly guiding you to the floor. You lay back to catch your breath as you feel the warm cum sliding down and dripping out of your vagina, anus and off your body. "This has got to be the filthiest whore I have ever seen." and another responds, "That\'s exactly what I said after I fucked your sister." Causing the first guy to tackle the other');
    scene.text('and the 2 guys begin fighting as the rest of them start cheering them on. You use this time to quickly grab your clothes then run out of the men\'s room and into the ladies room');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/fight.jpg');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'anus');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'face');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'breasts');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'stomach');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'legs');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'labia');
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'rough', 'gangbang');
    qspCall(s, 'cum_call', '');
    qspCall(s, 'arousal', 'hj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'hj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough', 'gangbang');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash'] },
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
    { label: 'Hide', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/hide2.jpg');
    scene.text('You climb onto the seat, so that no one can see you feet under the stall door, remaining as quiet as possible, so that no one hears you. Waiting until you hear the men leave. Just to be on the safe side, you wait an additional 2 minutes then head back toward the sink.');
    scene.actions([
      { label: 'Wash up', goto: ['FedorEv3', 'Restroom Wash 2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestroomRescue(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorRestTimes = ((s as any).FedorRestTimes ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/scene.jpg');
  scene.text('You approach the sink and turn on the water then suddenly you feel your shirt being pulled down and someone\'s hands on your breasts. You jump in shock and the man behind you whispers in your ear "Keep quiet bitch and this will be over quickly."');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Cry for help', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    if (((s as any).fedorKozlovQW ?? 0) === -15) {
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    } else {
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
    scene.text('You cry for help then suddenly, the door bursts open and Fedor storms into the room and punches the guy in the face knocking him into the wall. The guy grabbed his face in pain as Fedor approached him then drove his knee into the guy\'s face, breaking his nose. Fedor grabbed the guy then dragged him into one of the stalls where he dipped the guy\'s head into the toilet and began drowning him while shouting "How dare you touch my girl! <b>I WILL FUCKING KILL YOU!</b>"');
    scene.actions([
      { label: 'Calm Fedor', handler: (st: GameState) => {
    (s as any).cumspclnt = 1;
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).pcs_sweat ?? 0) < 30) {
      (s as any).pcs_sweat = 15 + ((s as any).rand ?? 0)(0, 4);
    } else {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + ((s as any).rand ?? 0)(0, 4));
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    if (((s as any).fedorKozlovQW ?? 0) === -15) {
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    } else {
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
    // TODO-QSP: dynamic text: You wrap your arms around Fedor's chest and lightly pull him off the guy as you ...
    scene.text(`You wrap your arms around Fedor's chest and lightly pull him off the guy as you tell him "Hey Fedor, It's over now. I'm safe, thanks to you." as you give him an innocent smile. Fedor closes his eyes as he tilts his head back trying to collect his thoughts and then responds, "You're right ${((s as any).pcs_nickname ?? 0)}, I don't know what came over me." You hug him as you tell him "I'm so lucky to have you." Fedor kisses you then stays with you as you wash up. After you finish Fedor walks you out of the restroom.`);
    if (((s as any).EndMovie ?? 0) === 1) {
      scene.actions([
        { label: 'Leave restroom', goto: ['FedorEv3', 'Movies 3'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the mens restroom', goto: ['FedorEv3', 'Ladies Room'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRestroomWash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).FedorRestTimes = ((s as any).FedorRestTimes ?? 0) + (1);
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + ((s as any).rand ?? 0)(0, 4);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + ((s as any).rand ?? 0)(0, 4));
  }
  (s as any).pcs_hairbsh = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b><h4><font color=#ff00cc>Restroom</font></h4></b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You grab a few paper towels then approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk away from the sink.');
  if (((s as any).FedorRestTimes ?? 0) > 2  &&  ((s as any).EndMovie ?? 0) === 1) {
    scene.actions([
      { label: 'Leave the restroom', goto: ['FedorEv3', 'Movies 3'] },
    ]);
  } else {
    if (((s as any).FedorRestTimes ?? 0) > 2  &&  (!((s as any).EndMovie ?? 0))) {
      scene.actions([
        { label: 'Go back to the theater', goto: ['FedorEv3', 'Movies 2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Dry off', goto: ['FedorEv3', 'Ladies Room'] },
      ]);
    }
  }
  scene.build();
}

function enterRestroomWash2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).FedorRestTimes = ((s as any).FedorRestTimes ?? 0) + (1);
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + ((s as any).rand ?? 0)(0, 4);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + ((s as any).rand ?? 0)(0, 4));
  }
  (s as any).pcs_hairbsh = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Restroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You grab a few paper towels then approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk away from the sink.');
  if (((s as any).FedorRestTimes ?? 0) > 2  &&  ((s as any).EndMovie ?? 0) === 1) {
    scene.actions([
      { label: 'Leave the restroom', goto: ['FedorEv3', 'Movies 3'] },
    ]);
  } else {
    if (((s as any).FedorRestTimes ?? 0) > 2  &&  (!((s as any).EndMovie ?? 0))) {
      scene.actions([
        { label: 'Go back to the theater', goto: ['FedorEv3', 'Movies 2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Dry off', goto: ['FedorEv3', 'Mens Room'] },
      ]);
    }
  }
  scene.build();
}

function enterRestroomWash3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + ((s as any).rand ?? 0)(0, 4);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + ((s as any).rand ?? 0)(0, 4));
  }
  (s as any).pcs_hairbsh = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Restroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You grab a few paper towels then approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk away from the sink.');
  if (((s as any).EndMovie ?? 0) === 1) {
    scene.actions([
      { label: 'Leave the restroom', goto: ['FedorEv3', 'Movies 3'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go back to the theater', goto: ['FedorEv3', 'Movies 2'] },
    ]);
  }
  scene.build();
}

function enterMovies3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).FedorRest = 0;
  (s as any).WithFedor = 0;
  (s as any).EndMovie = 0;
  (s as any).FedorRestTimes = 0;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  // TODO-QSP: dynamic text: Fedor walks you home and you both spend the whole time talking about the movie a...
  scene.text(`Fedor walks you home and you both spend the whole time talking about the movie and some future films you both want to see. After a few minutes you are right in front of your building and Fedor gives your ass a grab as he says, to you "${((s as any).pcs_firstname ?? 0)} I hope you had as much fun as I had. I can't wait to see you again." You respond, "Don't worry Fedor, you won't have to wait long." as you kiss him and then walk away with a confident smile.`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/kiss.mp4');
  scene.actions([
    { label: 'Walk away', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Food':
      enterFood(s, scene);
      break;
    case 'Food 2':
      enterFood2(s, scene);
      break;
    case 'Front':
      enterFront(s, scene);
      break;
    case 'Front HJ':
      enterFrontHJ(s, scene);
      break;
    case 'Front Caught':
      enterFrontCaught(s, scene);
      break;
    case 'Middle':
      enterMiddle(s, scene);
      break;
    case 'Back':
      enterBack(s, scene);
      break;
    case 'Back Sex':
      enterBackSex(s, scene);
      break;
    case 'Back Caught':
      enterBackCaught(s, scene);
      break;
    case 'Back Preg':
      enterBackPreg(s, scene);
      break;
    case 'Movies 2':
      enterMovies2(s, scene);
      break;
    case 'Restroom Break':
      enterRestroomBreak(s, scene);
      break;
    case 'Restroom':
      enterRestroom(s, scene);
      break;
    case 'Ladies Room':
      enterLadiesRoom(s, scene);
      break;
    case 'Mens Room':
      enterMensRoom(s, scene);
      break;
    case 'Restroom Fedor':
      enterRestroomFedor(s, scene);
      break;
    case 'Fedor Restroom':
      enterFedorRestroom(s, scene);
      break;
    case 'Restroom Lady':
      enterRestroomLady(s, scene);
      break;
    case 'Restroom Man':
      enterRestroomMan(s, scene);
      break;
    case 'Restroom Man 2':
      enterRestroomMan2(s, scene);
      break;
    case 'Restroom Escape':
      enterRestroomEscape(s, scene);
      break;
    case 'Restroom Rape':
      enterRestroomRape(s, scene);
      break;
    case 'Restroom Gang':
      enterRestroomGang(s, scene);
      break;
    case 'Restroom Rescue':
      enterRestroomRescue(s, scene);
      break;
    case 'Restroom Wash':
      enterRestroomWash(s, scene);
      break;
    case 'Restroom Wash 2':
      enterRestroomWash2(s, scene);
      break;
    case 'Restroom Wash 3':
      enterRestroomWash3(s, scene);
      break;
    case 'Movies 3':
      enterMovies3(s, scene);
      break;
    default:
      enterFood(s, scene);
      break;
  }
}

export const FedorEv3: LocationDef = {
  name: 'FedorEv3',
  title: '<<"Fyodor [Fedor] Kozlov">>',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'restroom',
  description: ['Upon entering the theater you notice plenty of empty seats, a few seats in the front next to the big screen,'],
  enter: enter,
};
