import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'kickboxing_funcs', 'sash_advancement');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Kickboxing Gym</b></center>');
  scene.img('images/locations/city/citycenter/gym/kickboxing/kik.jpg');
  scene.text('This section is dominated by the ring itself, the only equipment that can\'t be easily moved.');
  scene.text('Around it are various punching bags of different sizes and weights and a few coaches with practice pads.');
  scene.text('You can try your luck in a fight here on Saturdays, but safety concerns limit everyone to a maximum of 1 bout per week.');
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
    scene.text('You\'re too fatigued to do any more exercises right now.');
  } else {
    scene.text('You\'re too hungry to do anymore exercises right now.');
    if (((s as any).pcs_hydra ?? 0) < 20) {
      scene.text('You\'re too thirsty to do anymore exercises right now.');
    } else {
      if (((s as any).week ?? 0) === 6  &&  ((s as any).kickbox ?? 0)?.['amateur_fight_day'] !== ((s as any).daystart ?? 0)) {
        scene.text('You can take part in an amateur fight.');
        scene.actions([
          { label: 'Amateur fight', handler: (st: GameState) => {
    (s as any).kickbox['amateur_fight_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(s, 'kickboxing_funcs', 'init_fight_vars');
    (s as any).kickbox['opponent'] = ((s as any).kickbox ?? 0)?.['sash'] + (((s as any).rand ?? 0)(-2, 5) / 2);
    (s as any).temp_kickboxVars['fight_type'] = 1;
    // TODO-QSP: gs 'kickboxing_funcs', 'generate_opponent', 'amateur_fight', kickbox['opponent']
  }, goto: ['havana_kickboxing', 'match'] },
        ]);
      }
      scene.actions([
        { label: 'Work on your jabs', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'react');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your jabs on the speed bag and double-end bag. These strikes are not very powerful, but they\'re fast.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
        { label: 'Work on your heavy punches', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'stren', 'punch');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your power punches on the heavy bag. These are high impact and powerful, but are hard to land on the target.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
        { label: 'Work on your kicking', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'stren', 'kick');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your kicks on a kickboxing bag. These are very powerful and are able to cut down an opponent, but are very difficult to land.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
        { label: 'Work on defence', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'def', 'agil');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your defensive movements.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
        { label: 'Sparring (training bout in the ring)', handler: (st: GameState) => {
    scene.text('You need to choose a partner for sparring');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.actions([
      { label: 'Pick a random partner', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(s, 'kickboxing_funcs', 'init_fight_vars');
    (s as any).temp_kickboxVars['fight_type'] = 0;
    qspCall(s, 'kickboxing_funcs', 'generate_opponent', 'spar');
  }, goto: ['havana_kickboxing', 'match'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Go to the changing room', goto: ['havana_kickboxing', 'leave'] },
  ]);
  scene.build();
}

export const havana_kickboxing: LocationDef = {
  name: 'havana_kickboxing',
  title: 'Kickboxing Gym',
  region: 'other',
  description: ['This section is dominated by the ring itself, the only equipment that can\'t be easily moved.'],
  enter: enter,
};
