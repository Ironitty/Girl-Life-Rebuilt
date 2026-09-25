import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).loc = 'gargazel';
  (s as any).menu_loc = 'gargazel';
  (s as any).menu_arg = '';
  (s as any).location_type = 'secluded';
  (s as any).fatherdrunk = 0;
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Garage</h4></center>');
  if (((s as any).locat ?? 0)?.['Stepdad'] === 9) {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/gargazel.jpg');
    scene.text('A large garage that belongs to your stepfather. He spends time in there working on his beloved Gazelle pickup truck whenever he can in the late afternoons and evenings. You can tell the door is not locked, he\'s probably in there now.');
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/gargazel_empty.jpg');
    scene.text('A large garage that belongs to your stepfather. He spends time in there working on his beloved Gazelle pickup truck whenever he can in the late afternoons and evenings. Right now the garage is closed, and the door is locked with a large padlock.');
  }
  if (((s as any).locat ?? 0)?.['Stepdad'] === 9) {
    if (((s as any).fatherdrunk ?? 0) === 1) {
      scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027garfather\u0027, \u0027\u0027); return false;">stepfather and uncle Misha</a> are in the garage, drinking vodka.');
    } else {
      scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027garfather\u0027, \u0027\u0027); return false;">stepfather</a> is in the garage, working on his Gazelle pickup truck.');
    }
  }
  if (((s as any).YouCanGar ?? 0) > 0) {
    scene.text(`You have stored ${(((s as any).mc_inventory ?? 0)?.['trinkets_garage'] ?? '')} trinkets in the garage currently. Your stepfather allowed you to store some things in his garage but doesn't want you taking up all his space, he has allowed you to store up to 100 trinkets here. The garage is not very easily accessible; if you want to sell the trinkets at the station, you will have to bring them back home first.`);
    if (((s as any).mc_inventory ?? 0)?.['trinkets_home'] >= 30) {
      scene.text('You already have too much stored at home and do not have any more space.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['trinkets_home'] < 30) {
        (s as any).trinkets_can_take = 30 - (((s as any).mc_inventory ?? {})?.['trinkets_home'] ?? 0);
        scene.text(`You can bring ${((s as any).trinkets_can_take ?? '')} trinkets home and store them somewhere, until you have time to collect and sell them at the train station.`);
        if (((s as any).mc_inventory ?? 0)?.['trinkets_garage'] > 0) {
          if (((s as any).mc_inventory ?? 0)?.['trinkets_garage'] >= ((s as any).trinkets_can_take ?? 0)) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Move ' + String(((s as any).trinkets_can_take ?? '') ?? '') + ' trinkets to your home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['trinkets_home'] = ((st as any).mc_inventory['trinkets_home'] ?? 0) + (((st as any).trinkets_can_take ?? 0));
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['trinkets_garage'] = ((st as any).mc_inventory['trinkets_garage'] ?? 0) - (((st as any).trinkets_can_take ?? 0));
    qspCall(st, 'stat', '');
    scene.text('You spend an hour gathering your trinkets from various places, bringing them home and hiding them there.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          }
          if (((s as any).mc_inventory ?? 0)?.['trinkets_garage'] < ((s as any).trinkets_can_take ?? 0)) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Collect ' + String((((s as any).mc_inventory ?? 0)?.['trinkets_garage'] ?? '') ?? '') + ' trinkets to take with you', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['trinkets_home'] = ((st as any).mc_inventory['trinkets_home'] ?? 0) + ((((st as any).mc_inventory ?? 0)?.['trinkets_garage']));
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['trinkets_garage'] = 0;
    qspCall(st, 'stat', '');
    scene.text('You spend half an hour gathering your trinkets from various places in the garage, putting them in a bag so you can go sell them at the station.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave the garage', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_complex', 'garages'] },
  ]);
  scene.build();
}

export const gargazel: LocationDef = {
  name: 'gargazel',
  title: '<center><h4>Garage</h4></center>',
  region: 'other',
  locationType: 'secluded',
  description: ['A large garage that belongs to your stepfather. He spends time in there working on his beloved Gazelle pickup truck whenever he can in the late afternoons and evenings. You can tell the door is not locked, he\'s probably in there now.'],
  enter: enter,
};
