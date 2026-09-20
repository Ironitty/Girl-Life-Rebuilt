import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'secluded';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Vegetable</b></center>');
  scene.img('images/locations/suburban/cottage/burjan.jpg');
  if (((s as any).exhib ?? 0)?.['status'] < 11) {
    scene.text('The entire vegetable garden is overgrown with weeds. Growing any crops here is impossible. It seems the former owners did not care about their garden. You need to find a way how to clean out the weeds.');
  } else {
    if (((s as any).exhib ?? 0)?.['status'] === 11) {
      scene.text('The workers are slowly making progress, taking many smoke breaks as they clean the weeds out.');
    } else {
      if (((s as any).exhib ?? 0)?.['status'] >= 12  &&  ((s as any).exhib ?? 0)?.['status'] < 14) {
        scene.text('Workers dig up the ground and remove weeds and tree stumps.');
      } else {
        if (((s as any).exhib ?? 0)?.['status'] === 14  &&  ((s as any).temp ?? 0) !== ((s as any).daystart ?? 0)) {
          qspCall(s, 'stat', '');
          scene.text('<center><b>Vegetable</b></center>');
          scene.img('images/locations/suburban/cottage/vspah.jpg');
          scene.text('Your kitchen garden has been plowed, vegetable beds are finished and apple trees have been planted.');
          scene.text('The satisfied drunk workers are resting in the shade. For the money they\'ve earned they bought alcohol and apparently it helps them to finish faster.');
          scene.actions([
            { label: 'Pay', goto: ['ETO_village', 'worker_assault'] },
          ]);
        } else {
          if (((s as any).exhib ?? 0)?.['status'] === 15  &&  ((s as any).temp ?? 0) !== ((s as any).daystart ?? 0)) {
            qspCall(s, 'stat', '');
            scene.text('<center><b>Vegetable</b></center>');
            scene.img('images/locations/suburban/cottage/vspah.jpg');
            scene.text('Your kitchen garden has been plowed, vegetable beds are finished and apple trees have been planted.');
            scene.text('The tired workers are resting in the shade.');
            if (((s as any).exhib ?? 0)?.['status'] === 15  &&  ((s as any).pcs_horny ?? 0) > 30) {
              scene.actions([
                { label: 'Pay with your body', goto: ['ETO_village', 'garden_strip'] },
              ]);
            }
            scene.actions([
              { label: 'Pay them', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 3000, 'cash');
      ((st as any).exhib = (st as any).exhib ?? {})['status'] = 16;
      qspCall(st, 'stat', '');
      // TODO-QSP: dynamic text: You paid the workers ' + $func('money', 'string_price', 3000) + '.
      scene.text('You paid the workers 3000₽.');
      scene.actions([
        { label: 'To lodge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['dachamy', ''] },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'To lodge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['dachamy', ''] },
  ]);
  scene.build();
}

export const dachaogr0: LocationDef = {
  name: 'dachaogr0',
  title: 'Vegetable',
  region: 'other',
  locationType: 'secluded',
  description: ['The entire vegetable garden is overgrown with weeds. Growing any crops here is impossible. It seems the former owners did not care about their garden. You need to find a way how to clean out the weeds.'],
  enter: enter,
};
