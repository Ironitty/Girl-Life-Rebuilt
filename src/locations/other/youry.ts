import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Yuri\'s Flat</b></center>');
  scene.img('images/characters/city/peter/peterdoor.jpg');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
    { label: 'Ring the doorbell', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) > 16) {
      // TODO-QSP: dynamic text: You ring the doorbell, and it doesn't take long for Yuri to open the door as he ...
      scene.text(`You ring the doorbell, and it doesn't take long for Yuri to open the door as he was expecting you, "Come in ${((s as any).pcs_firstname ?? 0)} no need to be standing outside."`);
      return;
      scene.actions([
        { label: 'Enter apartment', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You enter Yuri\'s apartment and follow him to the living room where you take a seat on a chair. Yuri quickly goes to the kitchen and brings back a bottle of champagne and two glasses.');
    scene.actions([
      { label: 'Have a drink with Yuri', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    qspCall(s, 'boyStat', 'A38');
    (s as any).Yuri_sex = 1;
    (s as any).NoGuy = 1;
    (s as any).gtGuy = 1;
    (s as any).finance = 1;
    scene.text('You gladly accept as Yuri hands a glass of champagne over to you. As you take a sip of the champagne, Yuri begins to praise your sex skills. You blush a little as he keeps complementing you.');
    scene.text('As you finish the second glass of champagne, Yuri suggests that you should continue in the bedroom.');
    scene.actions([
      { label: 'Accept', goto: ['BDsex', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You ring the doorbell, but nobody answers. Yuri\'s probably at work.');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterQuest(s: GameState, scene: SceneBuilder): void {
  (s as any).jouryQwNo = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.text('You and Yuri walk together to the metro. You get in the car and sit in silence for the length of the trip to the industrial part of the city. Exiting the subway station, Yuri grabs hold of your hand and leads you in the direction of some newly erected buildings. Yuri looks tense as he doesn\'t say one word while you\'re walking either.');
  scene.text('Finally you come to a new nine-story building. Yuri opens the entrance door, and you walk inside. Yuri moves over to the elevator and calls it. It doesn\'t take long before you arrive at his pad.');
  scene.actions([
    { label: 'Enter the apartment', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.text('You enter a small, cozy one-bedroom apartment. It is surprisingly neat for a bachelor pad.');
    scene.text('Yuri leads you into the hall and has you sit on a chair. He goes into the kitchen and brings back champagne with some cheese and puts it on the table between the two of you. He takes a seat in a nearby chair and turns on some music.');
    scene.text('As Yuri struggles to come up with conversation topics, the attraction between you diminishes by the minute. Finally Yuri takes a deep breath and resolutely stands up and offers his hand to you, "Shall we dance?"');
    scene.actions([
      { label: 'Dance with Yuri', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You\'re feeling a buzz after having a couple of glasses of champagne and gladly accept his invitation. You take his hand with a smile, and Yuri, standing, moves a chair out into the middle of the room. Yuri walks up and embraces you, slowly moving his hips to the beat.');
    scene.text('His hands gently glide over your body. As Yuri embraces you, he presses into you and you can clearly feel his rock-hard cock through the fabric.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Touch his crotch', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('Without any hesitation, you slide your hand all over his body, not stopping before reaching his crotch. You begin touching his erect cock through the fabric, Yuri stifles a sigh as he\'s getting more excited.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Unbutton his pants', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You unbutton his pants and slide your hand into his underwear, grabbing hold of his erect cock. You quickly slide it out of his underwear, exposing it in the open. The penis head is hidden under the foreskin, which fits snuggly around the head. You slide the skin back, revealing its crimson, hard head.');
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Squat and suck him off', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).jourySex = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yuri/sex/bjdance.jpg');
    // TODO-QSP: dynamic text: You tease Yuri's cock a little further with your hands before squatting in front...
    scene.text(`You tease Yuri's cock a little further with your hands before squatting in front of him, grabbing it by the base and licking it. After a moment, you cup his purple head with your ${((s as any).pc_desc ?? 0)?.['lips']} lips and start sucking his cock. Your lips slide up and down his rock-hard cock.`);
    scene.text('It doesn\'t take long before Yuri is groaning loudly, looking down at you while you do your best to please him. All of a sudden, he grabs hold of your head and says, "Let\'s move to the bedroom."');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to bed', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A38');
    (s as any).sexpartkno = 1;
    (s as any).pose = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yuri/sex/sex.jpg');
    scene.text('As soon as you enter the bedroom, Yuri quickly helps you undress and puts you on all fours, spreading your legs as he prepares to enter you.');
    qspCall(s, 'dinSex', 'wear_condom');
    scene.text('He steps behind you, grabbing your hip with his hand while he teases your wet clit with his erect cock…');
    scene.text('With your wetness acting as lubricant, Yuri thrusts his cock inside of you. After a while, he picks up his pace, and by the end, he\'s fucking you so hard you\'re barely able to hold on against the pleasure.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    (s as any).pose = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yuri/sex/sex1.jpg');
    scene.text('By now you\'re loudly moaning, and Yuri does not let up, continuing to plow his cock into you.');
    scene.text('He furiously kisses your body, and you moan under him, feeling his cock ram your insides, pushing deeper with his every move.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    qspCall(s, 'dinsex', 'sexcum');
    scene.text('Finally, Yuri pulls out and finishes on you. He then kisses you on the cheek and heads over to the bathroom.');
    scene.actions([
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yuri/sex/van.jpg');
    scene.text('Shortly thereafter, you follow him into the bathroom. You see that he\'s taking a bath, and he invites you to join him. You nod as you wearily climb in.');
    scene.text('Yuri begins to lather you, and you feel his soft member rubbing against your hip begin to harden once again.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss Yuri', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yuri/sex/shower.jpg');
    scene.text('Yuri embraces you, and the two of you begin making out. You\'re already feeling fatigued, but the situation excites you, and you respond by caressing Yuri as well, feeling his body.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yuri/sex/shower1.jpg');
    scene.text('Yuri grabs you by the shoulders and forces you to hunch as he sticks his still somewhat limp cock in your mouth. You start to suck his cock, which gets harder thanks to your mouth skills. It doesn\'t take long before his cock is hard as steel and he begins to groan. A few moments later, he takes his member out of your mouth as he prepares to cum.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On your face', handler: (st: GameState) => {
    (s as any).sexpartkno = 1;
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/yuri/sex/shower2.jpg');
    scene.text('Yuri cums violently, his hot blasts slapping you in the face, though there aren\'t that many of them as Yuri already spent most of his load before.');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('Yuri quickly finishes and leaves you alone so you can shower and clean up. As you step into the hall, Yuri is nervously awaiting you and makes it immediately clear that he wants you to leave…');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'quest':
      enterQuest(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const youry: LocationDef = {
  name: 'youry',
  title: 'Yuri\'s Flat',
  region: 'other',
  enter: enter,
};
