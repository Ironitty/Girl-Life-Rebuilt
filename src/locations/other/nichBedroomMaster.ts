import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).sexpartkno = 1;
  qspCall(s, 'boyStat', 'A52');
  qspCall(s, 'boyStat', 'A161', 'a');
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'start'  ||  ((s as any).locArgs?.[0] ?? 0) === 'return') {
    (s as any).nichGalaPresent = qspFunc(s, 'nichUtil', 'isPresent', 'gala', 'masterBedroom');
    (s as any).nichNichPresent = qspFunc(s, 'nichUtil', 'isPresent', 'nicholas', 'masterBedroom');
    (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', 'masterBedroom');
    if (((s as any).nichGalaAct ?? 0) === 'snooze'  &&  (!((s as any).evtGalaMast1 ?? 0))) {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
    }
    scene.text('<center><b>Nicholas\' Master Bedroom</b></center>');
    scene.img('images/locations/city/citycenter/nichApartment/bedroomMaster.jpg');
    scene.text('');
    scene.text('This is where Nicholas and his wife sleep. There\'s a king-sized bed with matching bedside tables and lamps, a make-up table covered with bottles of expensive perfume, make-up and jewelry, a wall mirror with filigree gold ornaments and an entire wall is dominated by several solid wood wardrobes that look like they must have cost a fortune. Another small door leads to another walk-in wardrobe.');
    if (((s as any).nichNichAct ?? 0) === 'sleep') {
      if (((s as any).nichGalaAct ?? 0) === 'sleep') {
        scene.text('Nicholas and Gala are sleeping in their bed.');
      } else {
        scene.text('Nicholas is sleeping in his bed.');
      }
    }
    if (((s as any).nichGalaAct ?? 0) === 'sleep'  &&  ((s as any).nichNichAct ?? 0) !== 'sleep') {
      scene.text('Gala is sleeping in her bed.');
    } else {
      if (((s as any).nichGalaAct ?? 0) === 'snooze') {
        scene.text('Gala lies on her bed. Her eyes are open but she still looks sleepy. Apparently she wants to get some extra minutes of relaxation before she has to stand up.');
      }
    }
    if (((s as any).nichWork ?? 0) === 2) {
      if (((s as any).nichNichPresent ?? 0) === 1) {
        scene.text('With Nicholas being present it wouldn\'t be appropriate to clean this room now.');
        scene.actions([
          { label: 'Don\'t clean', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
        ]);
      } else {
        if (((s as any).nichGalaPresent ?? 0) === 1) {
          scene.text('With Gala being present it wouldn\'t be appropriate to clean this room now.');
          scene.actions([
            { label: 'Don\'t clean', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
          ]);
        } else {
          if (((s as any).nichTanyPresent ?? 0) === 1) {
            scene.text('With Tanya being present it wouldn\'t be appropriate to clean this room now.');
            scene.actions([
              { label: 'Don\'t clean', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
            ]);
          } else {
            qspCall(s, 'nichChore', 'inspect', 'master');
          }
        }
      }
    }
    scene.actions([
      { label: 'Return to the hallway', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichApartment', ''] },
      { label: 'Go to the master bathroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBathMaster', ''] },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'evtGalaMast1') {
      scene.text('Just before you enter the master bedroom you hear a moan. It sounds like Gala is having fun.');
      scene.actions([
        { label: 'Leave', goto: ['nichApartment', ''] },
        { label: 'Spy', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/masturbation/mast1.jpg');
    (s as any).evtGalaMast1 = 1;
    scene.actions([
      { label: 'Continue spying', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/masturbation/mast0.jpg');
    scene.actions([
      { label: 'Continue spying', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/masturbation/mast2.jpg');
    scene.actions([
      { label: 'Continue spying', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/masturbation/mast5.jpg');
    scene.actions([
      { label: 'Continue spying', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/masturbation/mast4.jpg');
    scene.actions([
      { label: 'Continue spying', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/masturbation/mast3.jpg');
    scene.text('Gala opens her eyes and briefly looks in your direction. It only lasts for a split second but you feel as if she might know that you watched her masturbating.');
    scene.actions([
      { label: 'Leave', goto: ['nichApartment', 'return'] },
    ]);
  } },
      { label: 'Leave', goto: ['nichApartment', 'return'] },
    ]);
  } },
      { label: 'Leave', goto: ['nichApartment', 'return'] },
    ]);
  } },
      { label: 'Leave', goto: ['nichApartment', 'return'] },
    ]);
  } },
      { label: 'Leave', goto: ['nichApartment', 'return'] },
    ]);
  } },
      { label: 'Leave', goto: ['nichApartment', 'return'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

export const nichBedroomMaster: LocationDef = {
  name: 'nichBedroomMaster',
  title: '<center><b>Nicholas\' Master Bedroom</b></center>',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['This is where Nicholas and his wife sleep. There\'s a king-sized bed with matching bedside tables and lamps, a make-up table covered with bottles of expensive perfume, make-up and jewelry, a wall mirror with filigree gold ornaments and an entire wall is dominated by several solid wood wardrobes that look like they must have cost a fortune. Another small door leads to another walk-in wardrobe.'],
  enter: enter,
};
