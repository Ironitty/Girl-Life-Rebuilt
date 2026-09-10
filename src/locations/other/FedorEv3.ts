import { qspCall } from '../_shared/qspBridge';

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
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Back Preg'] }]);
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Back Caught'] }]);
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
      scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Man 2'] }]);
      if (((s as any).VK ?? 0) <= 15  &&  (!((s as any).WithFedor ?? 0))) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Gang'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Rescue'] }]);
        scene.actions([{ label: 'Continue', goto: ['FedorEv3', 'Restroom Wash 2'] }]);
      }
    }
  } },
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
