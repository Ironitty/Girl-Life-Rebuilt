import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).vladimirQW ?? {})['stage'] = 25;
  ((s as any).vladimirQW ?? {})['day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vladimir</b></center>');
  scene.img('images/characters/city/vladimir/001.jpg');
  // TODO-QSP: dynamic text: As you enter the lobby of the restaurant, Vladimir comes to you carrying a lush ...
  scene.text(`As you enter the lobby of the restaurant, Vladimir comes to you carrying a lush bouquet of roses. "Hello ${((s as any).pcs_nickname ?? 0)}. Well, let's go to the restaurant?"`);
  scene.actions([
    { label: 'Take the bouquet and enter the restaurant with Vladimir', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('You\'re a little confused but take the bouquet of roses from Vladimir and let him steer you as he takes you by the elbow and leads you into the restaurant. He takes you to a table with a discreet "reserved" sign upon it and gallantly pulls out the chair for you to sit.');
    scene.actions([
      { label: 'Take a seat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.text('Soon a waiter presents you with a menu and Vladimir asks you not to hesitate and to order whatever you want.');
    scene.actions([
      { label: 'Place an order', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You make the order and the waiter whisks the menu away. At the table, an awkward...
    scene.text(`You make the order and the waiter whisks the menu away. At the table, an awkward silence descends. Vladimir pauses for a moment and asks. "So ${((s as any).pcs_nickname ?? 0)} who do you work for?"`);
    if (((s as any).job_status ?? 0)?.['city_market_saleswoman'] === 'employed') {
    } else {
      if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed') {
      } else {
        if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed') {
        }
      }
    }
    scene.actions([
      { label: '<<$qwvladwork>>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "<<$qwvladwork>>" You tell him.
    scene.text(`"${((s as any).qwvladwork ?? 0)}" You tell him.`);
    scene.text('"Right. I work behind a big desk, a businessman. I buy and sell, for short."');
    scene.text('At this time the waiter appears carrying your orders to the table. After the plates are placed, Vladimir continues.');
    scene.text('"I\'m 40 years old. Married and have a child. I\'ve been with my wife for a long time and nothing binds us together any more, I\'m ready to divorce her at any time."');
    scene.text('Vladimir pours the wine and raises a toast to the relationship.');
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_energy = 100;
    (s as any).pcs_hydra = 100;
    qspCall(s, 'stat', '');
    scene.text('You drink the wine and begin to dig in to the salad with the fork as Vladimir says, "Let\'s move on, I hope you do not mind?" You shake your head confirming that you too find this formal conversation style a bit much.');
    scene.text('Vladimir continues "In business terms I\'m a wolf. I find it impossible to stand still, I have to constantly find new prey. Now I\'m opening another business. Therefore I could take you to work."');
    scene.text('You stop chewing your salad and stare at him. "We just met, you don\'t know me," you protest.');
    scene.text('Vladimir nods "Yes, but you\'re a special girl. Unique. I just feel it."');
    scene.text('The restaurant band has been playing throughout and now Vladimir stands, inviting you to dance.');
    scene.actions([
      { label: 'Dancing with Vladimir', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('Vladimir takes you by the hand and leads you to the dance floor. There you firmly embrace and begin to dance. You can clearly feel your breasts pressed firmly against his chest as his warm hands clasp your waist and pull you tight against his body.');
    scene.text('Soon the song fades and Vladimir guides you back towards your table, pulling out your chair to help you sit down. You continue to dine and talk. This time, Vladimir doesn\'t mention serious topics and recounts a story from his recent trip to a ski resort.');
    scene.text('After you eat and drink your fill, Vladimir offers a lift home. He pays the waiter, leaves a generous tip and takes you by the hand to lead you from the restaurant.');
    scene.actions([
      { label: 'Leave the restaurant', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/vladimir/car.jpg');
    scene.text('The restaurant car is already prepared for you and Vladimir helps you sit in the back seat and climbs into the seat next to you. The driver closes the door and sits behind the wheel. Without looking back, he asks where to go and you call out your address.');
    scene.text('You practically fly through the streets at breakneck speed. The driver seems to be a real ace, he deftly sweps around the turns and goes around barely moving cars, all while never hitting the brakes. Before long you pull to a halt outside your home. Vladimir shakes his head sadly, "I unfortunately have a couple of things to do, so I\'m in a hurry. I\'ll call you soon."');
    scene.text('He leans towards you, plainly expecting a kiss.');
    scene.actions([
      { label: 'Give a kiss on the cheek', handler: (st: GameState) => {
    scene.text('You move towards Vladimir and give his cheek a brief, chaste, kiss.');
  }, goto: ['vladimirQW_meet', 'qwmeetdy'] },
      { label: 'Kiss on the lips', handler: (st: GameState) => {
    scene.text('You kiss Vladimir on the mouth, his strong, firm, lips pressing hard against your pliant mouth.');
  }, goto: ['vladimirQW_meet', 'qwmeetdy'] },
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

function enterQwmeetdy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/vladimir/car.jpg');
  scene.text('The door opens and the driver offers to take your hand.');
  // TODO-QSP: end & !! --- qwmeetdy ---
  scene.actions([
    { label: 'Climb out of the car with the driver\'s assistance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/glory/001.jpg');
    scene.text('Stepping out of the car you just now get a good look at the driver. He appears to be a young man of Asian origin. Apparently confident he smiles at you with a hint of impudence.');
    // TODO-QSP: dynamic text: Vladimir looks out of the car "This is my driver, Glory. He may be a little scar...
    scene.text(`Vladimir looks out of the car "This is my driver, Glory. He may be a little scary. I'll call you ${((s as any).pcs_nickname ?? 0)}"`);
    scene.text('The Asian man smiles again and you shut the back door. Leaping into the driver\'s seat, he again looks at you greedily, undressing you with his eyes, and slams his door with a smirk. The wheels screech and the car immediately jumps away from the pavement and speeds away, disappearing into the distance.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    qspCall(st, 'dina', 'brodilr');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'qwmeetdy':
      enterQwmeetdy(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vladimirQW_meet: LocationDef = {
  name: 'vladimirQW_meet',
  title: 'Vladimir',
  region: 'other',
  enter: enter,
};
