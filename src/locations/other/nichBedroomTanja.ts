import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Tanya\'s Room</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bedroomTanja.jpg');
  scene.text('This room belongs to <a href="exec: gt \'nichTanya\', \'desc\'">Tanya</a>, Nicholas\' stepdaughter. While she is a little bit selfish, quick-tempered and spoiled, her heart seems to be in the right place.');
  scene.text('Her room is usually in a state of chaos - typical for somebody who\'s gotten used to others cleaning up after them - but otherwise displays the warmth and mix of colors you would expect of a woman who is still trying to figure herself out and doesn\'t worry too much about the future.');
  (s as any).nichNichPresent = qspFunc(s, 'nichUtil', 'isPresent', 'nicholas', 'bedroomTanya');
  (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', 'bedroomTanya');
  (s as any).nichCleanAppropriate = 1;
  if (((s as any).nichNichAct ?? 0) === 'tanya'  &&  ((s as any).nichTanyAct ?? 0) === 'nicholas'  &&  ((s as any).nichNTRelation ?? 0) < 10) {
    if (((s as any).nichNTRelation ?? 0) > 0) {
      scene.text('The door to Tanyas room seems to be locked. You assume that Nicholas is in there with her now. You could spy through the keyhole.');
    } else {
      scene.text('The door to Tanyas room seems to be locked. You could spy through the keyhole.');
    }
    return;
    scene.actions([
      { label: 'Spy', handler: (st: GameState) => {
    (s as any).nichRand = Math.floor(Math.random() * 4) + 0;
    if (((s as any).nichRand ?? 0) === 0  ||  ((s as any).nichTanyaSpyLast ?? 0) === ((s as any).daystart ?? 0)  ||  (!((s as any).nichTanyaSpyCounter ?? 0))) {
      scene.text('The view is obscured by something. You can\'t see anything.');
    } else {
      if (((s as any).nichTanyaSpyCounter ?? 0) < 2) {
        scene.img(`${((s as any).nichTempPic ?? 0)}`);
        scene.text('You can see Tanya having sex with a man. You can\'t see his face. From your location you can\'t figure out who he is. Afraid of getting caught spying through the keyhole you turn away.');
        qspCall(s, 'arousal', 'voyeur_sex', (-5));
      } else {
        (s as any).nichNTRelation = 1;
        scene.img(`${((s as any).nichTempPic ?? 0)}`);
        scene.text('You can see Tanya having sex with a man. You can\'t see his face but from the clothes lying around, the body stature and the muffled sounds there is no doubt that Tanya is fucking her stepfather.');
        qspCall(s, 'arousal', 'voyeur_sex', (-5), 'incest');
      }
    }
    (s as any).nichTanyaSpyLast = ((s as any).daystart ?? 0);
    (s as any).nichTanyaSpyCounter = ((s as any).nichTanyaSpyCounter ?? 0) + (1);
    scene.actions([
      { label: 'Walk away', goto: ['nichApartment', 'return'] },
    ]);
  } },
      { label: 'Walk away', goto: ['nichApartment', 'return'] },
    ]);
  } else {
    if (((s as any).nichTanyAct ?? 0) === 'boyfriend') {
      scene.text('The door to Tanyas room seems to be locked. You assume that her boyfriend is in there with her now. You could spy through the keyhole.');
      return;
      scene.actions([
        { label: 'Spy', handler: (st: GameState) => {
    scene.img(`${((s as any).nichTempPic ?? 0)}`);
    scene.text('"Through the keyhole you can see Tanya and her boyfriend. They are obviously in the act of doing it."');
    scene.actions([
      { label: 'Walk away', goto: ['nichApartment', 'return'] },
    ]);
  } },
        { label: 'Walk away', goto: ['nichApartment', 'return'] },
      ]);
    } else {
      if (((s as any).nichTanyAct ?? 0) === 'sleep') {
        scene.text('Tanya is sleeping in her bed.');
        (s as any).nichCleanAppropriate = 0;
      } else {
        if (((s as any).nichTanyAct ?? 0) === 'tanya') {
          (s as any).nichRand = Math.floor(Math.random() * 4) + 0;
          if ((!((s as any).nichRand ?? 0))) {
            scene.text('<a href="exec: gt \'nichTanya\', \'bedroomTanya\'">Tanya</a> is lying on her bed listening to music.');
          } else {
            if (((s as any).nichRand ?? 0) === 1) {
              scene.text('<a href="exec: gt \'nichTanya\', \'bedroomTanya\'">Tanya</a> is lying on her bed watching TV.');
            } else {
              if (((s as any).nichRand ?? 0) === 2) {
                scene.text('<a href="exec: gt \'nichTanya\', \'bedroomTanya\'">Tanya</a> is in her walk-in closet trying on some outfits.');
              } else {
                scene.text('<a href="exec: gt \'nichTanya\', \'bedroomTanya\'">Tanya</a> is sitting at her desk surfing the internet.');
              }
            }
          }
        } else {
          scene.text('Tanya is not here at the moment.');
        }
      }
    }
  }
  if (((s as any).nichWork ?? 0) === 2) {
    if ((!((s as any).nichCleanAppropriate ?? 0))) {
      scene.text('It wouldn\'t be appropriate to clean this room now.');
    } else {
      qspCall(s, 'nichChore', 'inspect', 'tanya');
    }
  }
  scene.actions([
    { label: '<b>Return to the hallway</b>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichApartment', ''] },
    { label: 'Go to the master bathroom', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichBathMaster', ''] },
  ]);
  scene.build();
}

export const nichBedroomTanja: LocationDef = {
  name: 'nichBedroomTanja',
  title: '<center><b>Tanya\'s Room</b></center>',
  region: 'other',
  locationType: 'private',
  description: ['Her room is usually in a state of chaos - typical for somebody who\'s gotten used to others cleaning up after them - but otherwise displays the warmth and mix of colors you would expect of a woman who is still trying to figure herself out and doesn\'t worry too much about the future.'],
  enter: enter,
};
