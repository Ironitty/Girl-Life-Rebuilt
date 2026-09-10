import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  if (((s as any).cumloc ?? 0)[6]+((s as any).cumloc ?? 0)[7] === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/locations/pavlovsk/trainstation/vokbimbo1.jpg');
    scene.text('You are now standing in the middle of the station\'s men\'s room in a rather revealing outfit. What are you thinking, or are you even thinking?');
  } else {
    scene.img('images/locations/pavlovsk/trainstation/vokbimbo11.jpg');
    scene.text('You are standing in the middle of the stations men\'s room naked and covered in sperm.');
    scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  }
  (s as any).bimbo_temp = Math.floor(Math.random() * 10) + 1;
  (s as any).bimbo_rand1 = Math.floor(Math.random() * 101) + 0;
  if (((s as any).bimbo_temp ?? 0) > 8) {
    scene.text('The restroom door opens, and a young man comes in. He is taken aback when he see\'s you in the men\'s room.');
    if (((s as any).pcs_horny ?? 0) > 50) {
      scene.actions([
        { label: 'Look at him and smile', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'young man', Math.floor(Math.random() * 8) + 18, 0, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  }, goto: ['trainbimbo', 'pos2'] },
      ]);
    }
    scene.actions([
      { label: 'Pretend to straighten your hair', goto: ['trainbimbo', 'pos4'] },
    ]);
  } else {
    scene.text('The restroom door opens, and an older man in his fifties comes in. He is taken aback when he see\'s you in the men\'s room.');
    if (((s as any).pcs_horny ?? 0) > 50) {
      scene.actions([
        { label: 'Look at him and smile', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'fifty year old man', Math.floor(Math.random() * 10) + 50, 0, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  }, goto: ['trainbimbo', 'pos3'] },
      ]);
    }
    if (((s as any).bimbo_temp ?? 0) === 5) {
      scene.text('The restroom door opens, and a group of drunk guys come in. They are taken aback when they see you in the men\'s room.');
      if (((s as any).pcs_horny ?? 0) > 70) {
        scene.actions([
          { label: 'Look at them and smile', goto: ['trainbimbo', 'pos6'] },
        ]);
      }
      scene.actions([
        { label: 'Pretend to straighten your hair', goto: ['trainbimbo', 'pos4'] },
      ]);
    }
    scene.actions([
      { label: 'Pretend to straighten your hair', goto: ['trainbimbo', 'pos4'] },
      { label: 'Wait for men', goto: ['trainbimbo', 'pos1'] },
      { label: 'Leave', goto: ['pav_train_hall', 'male'] },
    ]);
  }
  scene.build();
}

export const trainbimbo: LocationDef = {
  name: 'trainbimbo',
  title: 'You are now standing in the middle of the station\'s men\'s ro',
  region: 'other',
  description: ['You are now standing in the middle of the station\'s men\'s room in a rather revealing outfit. What are you thinking, or are you even thinking?'],
  enter: enter,
};
