import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Man</b></center>');
  scene.img('images/characters/city/vladimir/001.jpg');
  if (((s as any).pcs_makeup ?? 0) > 1  &&  ((s as any).pcs_hairbsh ?? 0) === 1) {
    scene.text('A man standing near the fence noticed your gaze and smiled.');
    scene.actions([
      { label: 'Approach the man', handler: (st: GameState) => {
    scene.text('You approach the man and he leaves the fence to walk towards you.');
  }, goto: ['vladimirQW_loc', 'qwvladdy'] },
      { label: 'Smile', handler: (st: GameState) => {
    scene.text('You smile at the man and he leaves the fence to walk towards you.');
  }, goto: ['vladimirQW_loc', 'qwvladdy'] },
      { label: 'Ignore', handler: (st: GameState) => {
    scene.text('You decide to ignore the man and start walking away but hearing his footsteps behind you, you turn back around.');
  }, goto: ['vladimirQW_loc', 'qwvladdy'] },
    ]);
  } else {
    scene.text('The man returns your gaze for a moment before turning away.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'luna'] },
    ]);
  }
  scene.build();
}

function enterQwvladdy(s: GameState, scene: SceneBuilder): void {
  scene.text('The man smiles at you. "My name is Vladimir. I couldn\'t help but admire your beauty. Would you allow me the honor of your name?"');
  qspCall(s, 'vladimirQW_loc', 'qwnamedy');
  // TODO-QSP: end & !! --- qwladdy ---
  scene.actions([
    { label: 'Sorry, I\'m busy', handler: (st: GameState) => {
    ((s as any).vladimirQW ?? {})['stage'] = 1;
    scene.text('"Sorry, I\'m busy," you excuse yourself.');
    scene.text('Vladimir shakes his head to that. "Well, what are you busy with? I will not bite. I would just like to know the name of a beautiful, young lady."');
    qspCall(s, 'vladimirQW_loc', 'qwnamedy');
    scene.actions([
      { label: 'Leave anyway', handler: (st: GameState) => {
    ((s as any).vladimirQW ?? {})['stage'] = 2;
    scene.text('You turn away from the man with a roll of your eyes and leave.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'luna'] },
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
    case 'qwvladdy':
      enterQwvladdy(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vladimirQW_loc: LocationDef = {
  name: 'vladimirQW_loc',
  title: 'Man',
  region: 'other',
  locationType: 'event_outdoors',
  enter: enter,
};
