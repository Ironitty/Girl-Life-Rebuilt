import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'KGZdyn', '');
  if (((s as any).KGZVars ?? 0)?.['HP'] <= 0) {
    qspCall(s, 'mood', 'lower', 'tiny');
    scene.text('<center><b>GAME OVER</b></center>');
    return;
    scene.actions([
      { label: 'Quit', goto: ['KGZstart', ''] },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['dead'] <= 0) {
    ((s as any).KGZVars ?? {})['batl'] = 1;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('You have defeated all of the zombies.');
    return;
    scene.actions([
      { label: 'Leave', goto: ['KGZgame', ''] },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['dist'] < 0) {
    ((s as any).KGZVars ?? {})['dist'] = 0;
  }
  // TODO-QSP: dynamic text: Health <<KGZVars['HP']>>. Day <<KGZVars['day']>>, h <<KGZVars['hour']>>.
  scene.text(`Health ${((s as any).KGZVars ?? 0)?.['HP']}. Day ${((s as any).KGZVars ?? 0)?.['day']}, h ${((s as any).KGZVars ?? 0)?.['hour']}.`);
  // TODO-QSP: dynamic text: Edged weapons:<<$KGZVars['weapon_text']>>
  scene.text(`Edged weapons:${((s as any).KGZVars ?? 0)?.['weapon_text']}`);
  if (((s as any).KGZVars ?? 0)?.['gun_text'] !== '') {
    // TODO-QSP: dynamic text: l $KGZVars['gun_text']
    scene.text('l $KGZVars[\'gun_text\']');
  }
  if (((s as any).KGZVars ?? 0)?.['gun2_text'] !== '') {
    // TODO-QSP: dynamic text: l $KGZVars['gun2_text']
    scene.text('l $KGZVars[\'gun2_text\']');
  }
  if (((s as any).KGZVars ?? 0)?.['gun3_text'] !== '') {
    // TODO-QSP: dynamic text: l $KGZVars['gun3_text']
    scene.text('l $KGZVars[\'gun3_text\']');
  }
  // TODO-QSP: dynamic text: <<KGZVars['dead']>> zombies are making their way towards you. They are <<KGZVars...
  scene.text(`${((s as any).KGZVars ?? 0)?.['dead']} zombies are making their way towards you. They are ${((s as any).KGZVars ?? 0)?.['dist']} meters away.`);
  if (((s as any).KGZVars ?? 0)?.['dost'] === 1) {
    ((s as any).KGZVars ?? {})['dead'] = (((s as any).KGZVars ?? {})['dead'] ?? 0) - (1);
    scene.text('Vincent fires his rifle and a zombie falls to the ground with a hole in its head.');
    if (((s as any).KGZVars ?? 0)?.['dead'] <= 0) {
      // TODO-QSP: gt $curloc
    }
  }
  if (((s as any).KGZVars ?? 0)?.['gun'] > 0  &&  ((s as any).KGZVars ?? 0)?.['bullet'] > 0) {
    scene.actions([
      { label: 'Shoot your pistol', handler: (st: GameState) => {
    ((s as any).KGZVars ?? {})['bullet'] = (((s as any).KGZVars ?? {})['bullet'] ?? 0) - (1);
    qspCall(s, 'KGZdyn', 'KGZgunatk');
    qspCall(s, 'KGZdyn', 'KGZdeadmanatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['gun2'] > 0  &&  ((s as any).KGZVars ?? 0)?.['bullet2'] > 0) {
    scene.actions([
      { label: 'Fire your shotgun', handler: (st: GameState) => {
    ((s as any).KGZVars ?? {})['bullet2'] = (((s as any).KGZVars ?? {})['bullet2'] ?? 0) - (1);
    qspCall(s, 'KGZdyn', 'KGZgunatk2');
    qspCall(s, 'KGZdyn', 'KGZdeadmanatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['gun3'] > 0  &&  ((s as any).KGZVars ?? 0)?.['bullet3'] > 0) {
    if (((s as any).KGZVars ?? 0)?.['bullet3'] >= 3) {
      scene.actions([
        { label: 'Shoot machine gun (short burst)', handler: (st: GameState) => {
    ((s as any).KGZVars ?? {})['bullet3'] = (((s as any).KGZVars ?? {})['bullet3'] ?? 0) - (3);
    ((s as any).KGZVars ?? {})['bulgun'] = 3;
    qspCall(s, 'KGZdyn', 'KGZgunatk4');
    qspCall(s, 'KGZdyn', 'KGZdeadmanatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).KGZVars ?? 0)?.['bullet3'] >= 10) {
      scene.actions([
        { label: 'Shoot machine gun (full auto)', handler: (st: GameState) => {
    ((s as any).KGZVars ?? {})['bullet3'] = (((s as any).KGZVars ?? {})['bullet3'] ?? 0) - (10);
    ((s as any).KGZVars ?? {})['bulgun'] = 10;
    qspCall(s, 'KGZdyn', 'KGZgunatk5');
    qspCall(s, 'KGZdyn', 'KGZdeadmanatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Shoot machine gun (single)', handler: (st: GameState) => {
    ((s as any).KGZVars ?? {})['bullet3'] = (((s as any).KGZVars ?? {})['bullet3'] ?? 0) - (1);
    qspCall(s, 'KGZdyn', 'KGZgunatk3');
    qspCall(s, 'KGZdyn', 'KGZdeadmanatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['granade'] > 0) {
    scene.actions([
      { label: 'Throw a grenade', handler: (st: GameState) => {
    qspCall(s, 'KGZdyn', 'KGZgranatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['dist'] <= 2) {
    scene.actions([
      { label: 'Strike with <<$KGZVars[\'weapon_texta\']>>', handler: (st: GameState) => {
    qspCall(s, 'KGZdyn', 'KGZfizatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    ((s as any).KGZVars ?? {})['dist'] = (((s as any).KGZVars ?? {})['dist'] ?? 0) - (1);
    dynamicGoto(st, 'curloc');
  } },
      { label: 'Approach', handler: (st: GameState) => {
    ((s as any).KGZVars ?? {})['dist'] = (((s as any).KGZVars ?? {})['dist'] ?? 0) - (2);
    dynamicGoto(st, 'curloc');
  } },
      { label: 'Scoot', handler: (st: GameState) => {
    if (((s as any).KGZVars ?? 0)?.['dead'] >= 10) {
      ((s as any).KGZVars ?? {})['dist'] = (((s as any).KGZVars ?? {})['dist'] ?? 0) - (5);
      scene.text('The dead surround you. You cannot escape.');
      scene.actions([
        { label: 'Fuck!', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    } else {
      ((s as any).KGZVars ?? {})['dedrandrun'] = Math.floor(Math.random() * 2) + 0;
      if (((s as any).KGZVars ?? 0)?.['dedrandrun'] === 0) {
        ((s as any).KGZVars ?? {})['batl'] = 1;
        scene.text('You manage to escape from the dead.');
        scene.actions([
          { label: 'Leave', goto: ['KGZgame', ''] },
        ]);
      } else {
        if (((s as any).KGZVars ?? 0)?.['dedrandrun'] === 1) {
          ((s as any).KGZVars ?? {})['dist'] = (((s as any).KGZVars ?? {})['dist'] ?? 0) - (5);
          ((s as any).KGZVars ?? {})['dead'] = (((s as any).KGZVars ?? {})['dead'] ?? 0) + ((Math.floor(Math.random() * (((s as any).KGZVars ?? {})?.['dead'] * 5 - ((s as any).KGZVars ?? {})?.['dead'] + 1)) + (((s as any).KGZVars ?? {})?.['dead'])));
          scene.text('You make a cautious approach, but manage to alert even more zombies.');
          scene.actions([
            { label: 'Fuck!', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
          ]);
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

export const KGZfight: LocationDef = {
  name: 'KGZfight',
  title: '<center><b>GAME OVER</b></center>',
  region: 'kgd',
  description: ['You have defeated all of the zombies.'],
  enter: enter,
};
