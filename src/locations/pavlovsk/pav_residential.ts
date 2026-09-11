import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetSuccubusHuntAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Go hunting near the community center (this can take a lot of time)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (40 + ((s as any).rand ?? 0)(0, 20) - 5 * ((s as any).succublvl ?? 0));
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 8) + 0) - ((s as any).succublvl ?? 0) < 2) {
      scene.actions([{ label: 'Continue', goto: ['succubus', 'pavResfeed'] }]);
    } else {
      scene.text('<center><h2>Pavlovsk</h2></center>');
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
          scene.img('images/locations/pavlovsk/pavreswinter.jpg');
        } else {
          scene.img('images/locations/pavlovsk/pavreswintern.jpg');
        }
      } else {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
          scene.img('images/locations/pavlovsk/pavres.jpg');
        } else {
          scene.img('images/locations/pavlovsk/pavresn.jpg');
        }
      }
      scene.text('The disco is in full swing, which means a lot of adolescents going to and from the community center. You find a spot down the street to lie in wait for your prey.');
      scene.text('You hide for a few minutes, watching groups of students pass by as you wait for a lone victim to pounce on. You lie in wait for almost thirty minutes thinking about the meal ahead, your hand finding its way between your legs a few times.');
      scene.text('You are unsuccessful and fail to find a suitable victim.');
      scene.actions([
        { label: 'Return', goto: ['pav_residential', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMeetMishaStreetEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).npcdaycheck[54] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
      scene.img('images/locations/pavlovsk/pavreswinter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pavreswintern.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
      scene.img('images/locations/pavlovsk/pavres.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pavresn.jpg');
    }
  }
  if ((!((s as any).sosedknow ?? 0))) {
    (s as any).sosedknow = 1;
    scene.text('As you walk through Pavlovsk, someone calls out to you and you turn around and see uncle Misha, your neighbor.');
    scene.text('He looks at your face in amazement. "Your face looks like a mess! What is that?"');
    scene.text('You blush and hesitate, trying to inconspicuously wipe the sperm off your face. It\'s obviously not working; he already noticed and his eyes widen when he realizes what it is.');
    scene.text('"I see. Looks like you had fun," he grins and continues on his way.');
  } else {
    scene.text('Once again, you run into uncle Misha, your neighbor. He notices the sperm on your face.');
    scene.text('"Again? Looks like you\'ve been busy, girl. Nice look, it suits you."');
  }
  return;
  scene.actions([
    { label: 'Continue', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterMeetTatianaMainQW(s: GameState, scene: SceneBuilder): void {
  (s as any).mainQW = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/lab/event/main.jpg');
  scene.text('You see Tatiana and Gustav at the entrance to the apartment building. Tatiana adjusts her glasses and looks around, while Gustav seems to have his head in the clouds, not really paying attention to his surroundings. His tattoos are not visible.');
  scene.text('Tatiana closely looks around you. "I felt a burst of energy. Were you attacked by a mage?"');
  return;
  scene.actions([
    { label: 'No?', goto: ['mainQW', ''] },
  ]);
  scene.build();
}

function enterBoilerroomRevengeEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/lab/event/main.jpg');
  scene.text('It\'s late and you\'re hurrying to get home when you\'re suddenly grabbed from behind. A large hand covers your mouth and you\'re unable to scream as a powerful arm wraps around you and lifts you from your feet. You\'re dragged into an alleyway between two buildings and the arm around you loosens for just a minute.');
  return;
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/lab/event/main.jpg');
    scene.text('Before you can attempt to escape, you feel something sting your arm and your body relaxes against your will. Just before your eyes close and you lose consciousness, you hear a familiar voice rasp in your ear. "Now you\'ll pay for breaking my nose, you little slut."');
    scene.actions([
      { label: 'Continue', goto: ['boilerroom', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBelyPaydayEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).daybelisex = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
  scene.text('As you walk through Pavlovsk, Vadim Bely\'s Mitsubishi Pajero stops near you.');
  return;
  scene.actions([
    { label: 'Go to the jeep', goto: ['belgang', 'payday'] },
  ]);
  scene.build();
}

function enterBelyWorkofdebtEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).daybelisex = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
  scene.text('You see the by now familiar old Mitsubishi Pajero driving through the streets with Vadim Bely and his gang inside. Your heart skips a beat as you notice one of them pointing at you and they pull over.');
  scene.actions([
    { label: 'Go to the jeep', goto: ['belgang', 'workofdebt'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_succubus_hunt_act':
      enterSetSuccubusHuntAct(s, scene);
      break;
    case 'meet_misha_street_events':
      enterMeetMishaStreetEvents(s, scene);
      break;
    case 'meet_tatiana_mainQW':
      enterMeetTatianaMainQW(s, scene);
      break;
    case 'boilerroom_revenge_event':
      enterBoilerroomRevengeEvent(s, scene);
      break;
    case 'bely_payday_event':
      enterBelyPaydayEvent(s, scene);
      break;
    case 'bely_workofdebt_event':
      enterBelyWorkofdebtEvent(s, scene);
      break;
    default:
      enterSetSuccubusHuntAct(s, scene);
      break;
  }
}

export const pav_residential: LocationDef = {
  name: 'pav_residential',
  title: '<center><h2>Pavlovsk</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
