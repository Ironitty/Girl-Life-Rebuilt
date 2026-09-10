import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMetro(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/waiting_metro.jpg');
  qspCall(s, 'katja_meynold_schedule', '');
  // TODO-QSP: dynamic text: You walk to the Metro station '+iif(func('money', 'can_afford', 16) = 1, 'and pa...
  scene.text('You walk to the Metro station \'+iif(func(\'money\', \'can_afford\', 16) = 1, \'and pay the fare.\', \'but don\'t have any money, so Katja pays the fare for you.\')+\' You then go down to the platform and chat while you wait for the train.');
  if (qspFunc(s, 'money', 'can_afford', 16) === 1) {
    qspCall(s, 'money', 'pay', 16);
  }
  scene.actions([
    { label: 'Wait for the train', goto: ['katja_city', 'metro_ride'] },
  ]);
  scene.build();
}

function enterMetroRide(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/riding_metro.jpg');
  scene.text('The train arrives and you board before finding a place to sit as it leaves the station.');
  scene.actions([
    { label: 'Chat with Katja', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['drinks'] > (Math.floor(Math.random() * 5) + 10)) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/metro_drunk.jpg');
      scene.text('Katja is so drunk that she doesn\'t make it to a seat and just lies on the floor.');
      scene.text('You try to get her up, but she insists that she\'s fine and just needs a nap.');
      scene.text('You manage to get her to stand up just as you arrive at your station.');
      scene.actions([
        { label: 'Leave the metro', goto: ['katja_city', 'metro_destination'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['katja_city', 'metro_get_off'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterMetroGetOff(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/riding_metro.jpg');
  scene.text('You chat with Katja as the train heads through the tunnel. After a short time, you arrive at your destination.');
  scene.actions([
    { label: 'Leave the metro', goto: ['katja_city', 'metro_destination'] },
  ]);
  scene.build();
}

function enterMetroDestination(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/Leaving_metro.jpg');
  if (((s as any).locat ?? 0)?.['katja'] === 44) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You exit the metro station and walk to the Galleria shopping mall.');
    scene.actions([
      { label: 'Start shopping', goto: ['katja_chat', 'chat1'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).katjaQW['disco_arrival'] = ((s as any).totminut ?? 0);
    qspCall(s, 'stat', '');
    qspCall(s, 'themes', 'indoors');
    scene.text('You exit the metro station and walk to the nightclub, where you get in line.');
    if (((s as any).pcs_hotcat ?? 0) === 10) {
      scene.text('The bouncer almost immediately spots the two of you and lets you in, allowing you to skip the long line. You can hear several complaints, but also some whistling and lewd comments.');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.text('The two of you stand in line for a short while before the bouncer singles you out and you get to jump ahead of several people, much to their annoyance.');
      if (((s as any).pcs_hotcat ?? 0) > 5) {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        scene.text('You wait in line for some time, but finally make it to the door.');
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 15);
        scene.text('You wait in line for a long time as several more attractive girls are allowed to jump ahead of you, but are eventually allowed in.');
      }
      if (qspFunc(s, 'money', 'can_afford', 250) === 1) {
        qspCall(s, 'money', 'pay', 250);
        // TODO-QSP: dynamic text: You pay the ' + $func('money', 'string_price', 250) + ' entrance fee and head in...
        scene.text('You pay the \' + $func(\'money\', \'string_price\', 250) + \' entrance fee and head into the club.');
      } else {
        scene.text('You don\'t have enough to pay the entrance fee, so Katja pays for you.');
        scene.text('"You\'re paying for us next time," she says with a slight hint of annoyance.');
      }
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('"Let\'s start with a dance," she says when you\'re finally inside the club and drags you to the dance floor.');
        scene.actions([
          { label: 'Go to the dance floor', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).frost = 0;
    qspCall(s, 'themes', 'indoors');
  }, goto: ['katja_nightclub', 'dance'] },
        ]);
      } else {
        scene.text('"Let\'s start with a drink," she says when you\'re finally inside the club and drags you to the bar.');
        scene.actions([
          { label: 'Go to the bar', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).frost = 0;
    qspCall(s, 'themes', 'indoors');
  }, goto: ['katja_nightclub', 'bar_arrive'] },
        ]);
      }
      if (((s as any).katjaQW ?? 0)?.['on_date'] === 1) {
        (s as any).katjaQW['on_date'] = 0;
        if (((s as any).katjaQW ?? 0)?.['drinks'] > (Math.floor(Math.random() * 5) + 8)) {
          (s as any).minut = ((s as any).minut ?? 0) + 30;
          qspCall(s, 'stat', '');
          scene.text('Katja is so drunk that she can barely walk, so you decide to help her home. It takes quite a while since she tries to sit down several times and refuses to walk further, but you eventually manage to get her back to her dorm room and into her bed, where she immediately falls asleep. You leave her to sleep and quietly leave the room.');
          scene.actions([
            { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
          ]);
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 41) + 40)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
            scene.text('You exit the metro station near the university and Katja suggests that you come with her to her room.');
            scene.actions([
              { label: 'Go with her', goto: ['katja_uni_sex', 'coming_home_from_date'] },
              { label: 'Leave her', goto: ['city_island', ''] },
            ]);
          } else {
            scene.text('You exit the metro station near the university and say goodbye to each other.');
            scene.actions([
              { label: 'Continue', goto: ['city_island', ''] },
            ]);
          }
        }
      } else {
        scene.text('You exit the metro station near the university and say goodbye to each other.');
        scene.actions([
          { label: 'Continue', goto: ['city_island', ''] },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'metro':
      enterMetro(s, scene);
      break;
    case 'metro_ride':
      enterMetroRide(s, scene);
      break;
    case 'metro_get_off':
      enterMetroGetOff(s, scene);
      break;
    case 'metro_destination':
      enterMetroDestination(s, scene);
      break;
    default:
      enterMetro(s, scene);
      break;
  }
}

export const katja_city: LocationDef = {
  name: 'katja_city',
  title: 'Pussy-Cats',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
