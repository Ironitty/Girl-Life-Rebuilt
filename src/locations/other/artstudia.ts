import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBodimod1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Patio</b></center>');
  scene.img('images/locations/pushkin/artsudvor.jpg');
  scene.text('A small open courtyard, which is often used by the art school for outdoor projects. Occasionally, some of the students spend time here relaxing or smoking.');
  if (((s as any).arts ?? 0) === 1) {
    scene.actions([
      { label: 'Go to the art studio', handler: (st: GameState) => {
    (st as any).artsb = 1;
  }, goto: ['artstudia', 'bodimod2'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['ugol', ''] },
  ]);
  scene.build();
}

function enterBodimod2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The studio of the artist</b></center>');
  scene.img('images/locations/pushkin/artscor.jpg');
  scene.text('The walls of the hallway leading to the art school are decorated in a variety of art. Even if the sign out front did not indicate this was the school, this hallway would be a dead give away.');
  if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).arts_day ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('There are a number of students gathered here. Some of them have removed their clothes and have already been painted by Masya.');
    scene.text('One of the girls calls you over, "Hello again, I\'m so glad you came to join us again. Quick, get your clothes off. Masya has nearly finished painting Emilia."');
    scene.actions([
      { label: 'Strip off and join in', handler: (st: GameState) => {
    (st as any).arts_day = ((st as any).daystart ?? 0);
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspGoto(st, 'artstudia', 'bodimod3');
    } else {
      qspGoto(st, 'artstudia', 'bodimod4');
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['artstudia', 'bodimod1'] },
  ]);
  scene.build();
}

function enterBodimod3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The studio of the artist</b></center>');
  scene.img('images/locations/pushkin/artstudio/downud.jpg');
  scene.text('After agreeing to join one of the projects, you strip naked and have most of your body painted along with several other students. Once all of you are painted, you are sent to one of the busier streets in the Old Town to model the art.');
  scene.text('After several hours and more than a bit of harassment from some of the men, the project is over, and you all head back to the studio.');
  scene.actions([
    { label: 'Leave', goto: ['artstudia', 'bodimod2'] },
  ]);
  scene.build();
}

function enterBodimod4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The studio of the artist</b></center>');
  scene.img('images/locations/pushkin/artstudio/downud.jpg');
  scene.text('After agreeing to join one of the projects, you strip naked and have most of your body painted along with several other students. Once all of you are painted, you are sent to one of the busier streets in the city center to model the art.');
  scene.text('After several hours and more than a bit of harassment from some of the men, the project is over, and you all head back to the studio.');
  scene.actions([
    { label: 'Leave', goto: ['artstudia', 'bodimod2'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'artstudia';
  (s as any).location_type = 'secluded';
  const arg = s.locArg;
  switch (arg) {
    case 'bodimod1':
      enterBodimod1(s, scene);
      break;
    case 'bodimod2':
      enterBodimod2(s, scene);
      break;
    case 'bodimod3':
      enterBodimod3(s, scene);
      break;
    case 'bodimod4':
      enterBodimod4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artstudia: LocationDef = {
  name: 'artstudia',
  title: 'Patio',
  region: 'other',
  locationType: 'secluded',
  enter: enter,
};
