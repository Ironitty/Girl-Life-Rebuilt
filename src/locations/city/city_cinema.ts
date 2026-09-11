import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_cinema', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cinema</b></center>');
  scene.img('images/locations/city/citycenter/mall/cinema/cinema.jpg');
  // TODO-QSP: dynamic text: Small cinema ticket costs ' + $func('money', 'string_price', 300) + '.
  scene.text('Small cinema ticket costs \' + $func(\'money\', \'string_price\', 300) + \'.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Watch a movie [+$func(\'money\', \'get_cost_string\', 300)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300);
      scene.actions([{ label: 'Continue', goto: ['city_cinema', 'watch_movie'] }]);
    }
  } },
    ]);
  } else {
    scene.text('The cinema is closed.');
  }
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterWatchMovie(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'medium');
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 10) + 0;
  if (((s as any).temp_rand ?? 0) < 8) {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    qspCall(s, 'city_cinema', 'movie');
    scene.actions([
      { label: 'Leave', goto: ['city_cinema', ''] },
    ]);
  } else {
    if (((s as any).temp_rand ?? 0) === 8) {
      scene.actions([{ label: 'Continue', goto: ['city_cinema', 'sex2'] }]);
    } else {
      scene.text('The theater is deserted, except for one man.');
      scene.text('When he notices you looking at him he smiles and waves to you');
      scene.text('He\'s kind of cute, and the place is empty…');
      scene.actions([
        { label: 'Just watch the movie', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    qspCall(s, 'city_cinema', 'movie');
    scene.actions([
      { label: 'Leave', goto: ['city_cinema', ''] },
    ]);
  } },
        { label: 'Seduce him', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kino1.jpg');
    if (((s as any).pcs_apprnc ?? 0) < 60) {
      scene.text('You sit down next to him, and do your best to get in his attention. You try everything you can think of, even going so far as baring you breasts. All he does is say: "Would you please stop it? I\'m trying to watch the film.');
      scene.text('"Whatever fag", you snap at him. You walk off in a huff, feeling unattractive and disappointed.');
      scene.actions([
        { label: 'Leave', goto: ['city_cinema', ''] },
      ]);
    } else {
      qspCall(s, 'npcgeneratec', '', 0, 'guy from the cinema', Math.floor(Math.random() * 27) + 19);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
      scene.text('You walk over to him, and with a wicked grin ask: "Is this seat taken?"');
      scene.text('"Umm… no ma\'am it\'s not", he says.');
      scene.text('"Such a gentleman", you say smiling, as you sit down next to him. You immediately rest a hand on his inner thigh, and begin to gently caress him. It\'s not long before he is breathing heavy.');
      scene.text('With your intentions made clear, you slowly unbutton your top. All that\'s left is to tell him what you want.');
      scene.actions([
        { label: 'Open your legs', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kino2.jpg');
    scene.text('You lean back in you seat with legs spread, and motion form him to kneel between them');
    scene.text('He eagerly drops to his knees, and gets to work pleasing you.');
    scene.text('You moan in pleasure, as his tongue gently licks you clitoris, but after a few minutes you realize this guy just isn\'t good enough to make you cum with his tongue.');
    qspCall(s, 'arousal', 'cuni', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave him hanging', goto: ['city_cinema', ''] },
      { label: 'Go for his crotch', goto: ['city_cinema', 'sex'] },
    ]);
  } },
        { label: 'Blow him', goto: ['city_cinema', 'sex'] },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cinema/sex/kino3.jpg');
  scene.text('You take his cock into your mouth, and begin to suck it');
  scene.text('After a few minutes, his groans of pleasure tell you that he is ready to pop.');
  qspCall(s, 'arousal', 'cuni', 10, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep sucking', handler: (st: GameState) => {
    scene.text('You continue suck until, your mouth is filled with his liquid warmth');
    qspCall(s, 'arousal', 'cuni', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', 'guy from the cinema');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['city_cinema', ''] },
    ]);
  } },
    { label: 'Tell him to fuck you', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kino4.jpg');
    scene.text('Stopping before he pops, you get up on the chair and wiggle your ass invitingly.');
    scene.text('"Oh, you\'re going to get now", he boasts.');
    scene.text('He hurriedly slides into you from behind, and after just a few pumps finishes inside you.');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', '', '', 'guy from the cinema');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave unsatisfied', goto: ['city_cinema', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSex2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex1.jpg');
  scene.text('Halfway though the movie a man sits down next to you. Smiling, he offers you some of his popcorn.');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_cinema', ''] },
    ]);
  }
  scene.actions([
    { label: 'Have some', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex2.jpg');
    scene.text('Reaching into the bag, you quickly realize popcorn isn\'t the only thing he\'s offering, when your hand comes to rest on his erect penis.');
    scene.text('"Go on baby, it\'s already all buttered up", he says, grinning.');
    scene.actions([
      { label: 'Smack him and walk out', goto: ['city_cinema', ''] },
      { label: 'Stroke it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex3.jpg');
    scene.text('You work your hand deeper down into the bag to get a firm grip on his buttery cock.');
    scene.text('The stranger leans back with a smile. "That\'s a good girl," he says, as you stroke your hand along his shaft.');
    qspCall(s, 'arousal', 'hj', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex4.jpg');
    scene.text('Feeling bold, you get him out of the bag. He groans loudly, when you begin to jerk him out in the open.');
    scene.text('Realizing you may be drawing some unwanted attention he says: "Let\'s move to the back, before I make a big mess."');
    qspCall(s, 'arousal', 'hj', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Chicken out', goto: ['city_cinema', ''] },
      { label: 'Move to the back', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex5.jpg');
    scene.text('You move to the back of the theater, trying to seem casual.');
    scene.text('Nervously, you kneel before him, as you scan the crowd.');
    scene.text('"Go on, baby, nobody is looking," he says.');
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex6.jpg');
    scene.text('Too late to turn back now you think, as you wrap you lips around his cock.');
    scene.text('Soon all thoughts of the audience are gone, as you give yourself over to pleasing him.');
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him quick', goto: ['city_cinema', 'kinoswallow'] },
      { label: 'Fuck him', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex7.jpg');
    scene.text('Throwing caution to the wind, you raise yourself up to sit on his lap.');
    scene.text('You moan softly, as you slowly bounce up and down on his cock.');
    scene.text('After a few minutes of this, he says, "Lie down on the seat, someone is going to spot you."');
    qspCall(s, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie down', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex8.jpg');
    scene.text('You lie back on the seats, and open your legs to the stranger. Now in charge, his thrusts come hard and fast. When he reaches a fever pitch, you cry out in pleasure, as he finishes inside you.');
    qspCall(s, 'arousal', 'vaginal', 10, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Oh, Shit', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex9.jpg');
    scene.text('Somebody must\'ve told an usher what was going on. "What the hell do you think you\'re doing? I\'m going to call the police," he says.');
    scene.text('You hurriedly start gathering up your clothes, before he can act. Feeling a little thrill from being discovered like this, you make your escape.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', '', '', 'guy from the cinema');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Flee', goto: ['city_cinema', ''] },
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

function enterKinoswallow(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cinema/sex/kinosex10.jpg');
  scene.text('Still a little worried about being discovered, you make an effort to finish him off.');
  scene.text('A short time later, your efforts are rewarded, when a warm bust of semen fills your mouth.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', 'mouth_swallow', 'guy from the cinema');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['city_cinema', ''] },
  ]);
  scene.build();
}

function enterMovie(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 7) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    scene.img('images/locations/city/citycenter/mall/cinema/movie0.mp4');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      scene.img('images/locations/city/citycenter/mall/cinema/movie1.mp4');
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        scene.img('images/locations/city/citycenter/mall/cinema/movie2.mp4');
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          scene.img('images/locations/city/citycenter/mall/cinema/movie3.mp4');
        } else {
          if (((s as any).temp_rand ?? 0) === 4) {
            scene.img('images/locations/city/citycenter/mall/cinema/movie4.mp4');
          } else {
            if (((s as any).temp_rand ?? 0) === 5) {
              scene.img('images/locations/city/citycenter/mall/cinema/movie5.mp4');
            } else {
              scene.img('images/locations/city/citycenter/mall/cinema/movie6.mp4');
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'watch_movie':
      enterWatchMovie(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'sex2':
      enterSex2(s, scene);
      break;
    case 'kinoswallow':
      enterKinoswallow(s, scene);
      break;
    case 'movie':
      enterMovie(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_cinema: LocationDef = {
  name: 'city_cinema',
  title: 'Cinema',
  region: 'city',
  enter: enter,
};
