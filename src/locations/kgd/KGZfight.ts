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
    scene.actions([
{ label: 'Quit', goto: ['KGZstart', ''] },
]);
    return;
  }
  if (((s as any).KGZVars ?? 0)?.['dead'] <= 0) {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['batl'] = 1;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('You have defeated all of the zombies.');
    scene.actions([
{ label: 'Leave', goto: ['KGZgame', ''] },
]);
    return;
  }
  if (((s as any).KGZVars ?? 0)?.['dist'] < 0) {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['dist'] = 0;
  }
  // TODO-QSP: dynamic text: Health <<KGZVars[''HP'']>>. Day <<KGZVars[''day'']>>, h <<KGZVars[''hour'']>>.
  scene.text(`Health ${((s as any).KGZVars ?? 0)?.['HP'] ?? ''}. Day ${((s as any).KGZVars ?? 0)?.['day'] ?? ''}, h ${((s as any).KGZVars ?? 0)?.['hour'] ?? ''}.`);
  // TODO-QSP: dynamic text: Edged weapons:<<$KGZVars[''weapon_text'']>>
  scene.text(`Edged weapons:${((s as any).KGZVars ?? 0)?.['weapon_text'] ?? ''}`);
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
  // TODO-QSP: dynamic text: <<KGZVars[''dead'']>> zombies are making their way towards you. They are <<KGZVa...
  scene.text(`${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombies are making their way towards you. They are ${((s as any).KGZVars ?? 0)?.['dist'] ?? ''} meters away.`);
  if (((s as any).KGZVars ?? 0)?.['dost'] === 1) {
    ((s as any).KGZVars = (s as any).KGZVars ?? {})['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
    scene.text('Vincent fires his rifle and a zombie falls to the ground with a hole in its head.');
    if (((s as any).KGZVars ?? 0)?.['dead'] <= 0) {
      // TODO-QSP: gt $curloc
    }
  }
  if (((s as any).KGZVars ?? 0)?.['gun'] > 0  &&  ((s as any).KGZVars ?? 0)?.['bullet'] > 0) {
    scene.actions([
      { label: 'Shoot your pistol', handler: (st: GameState) => {
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['bullet'] = ((st as any).KGZVars['bullet'] ?? 0) - (1);
    qspCall(st, 'KGZdyn', 'KGZgunatk');
    qspCall(st, 'KGZdyn', 'KGZdeadmanatk');
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
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['bullet2'] = ((st as any).KGZVars['bullet2'] ?? 0) - (1);
    qspCall(st, 'KGZdyn', 'KGZgunatk2');
    qspCall(st, 'KGZdyn', 'KGZdeadmanatk');
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
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['bullet3'] = ((st as any).KGZVars['bullet3'] ?? 0) - (3);
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['bulgun'] = 3;
    qspCall(st, 'KGZdyn', 'KGZgunatk4');
    qspCall(st, 'KGZdyn', 'KGZdeadmanatk');
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
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['bullet3'] = ((st as any).KGZVars['bullet3'] ?? 0) - (10);
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['bulgun'] = 10;
    qspCall(st, 'KGZdyn', 'KGZgunatk5');
    qspCall(st, 'KGZdyn', 'KGZdeadmanatk');
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
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['bullet3'] = ((st as any).KGZVars['bullet3'] ?? 0) - (1);
    qspCall(st, 'KGZdyn', 'KGZgunatk3');
    qspCall(st, 'KGZdyn', 'KGZdeadmanatk');
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
    qspCall(st, 'KGZdyn', 'KGZgranatk');
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
      { label: '', labelFn: (s: GameState) => 'Strike with ' + String(((s as any).KGZVars ?? 0)?.['weapon_texta'] ?? '' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'KGZdyn', 'KGZfizatk');
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
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['dist'] = ((st as any).KGZVars['dist'] ?? 0) - (1);
    dynamicGoto(st, 'curloc');
  } },
      { label: 'Approach', handler: (st: GameState) => {
    ((st as any).KGZVars = (st as any).KGZVars ?? {})['dist'] = ((st as any).KGZVars['dist'] ?? 0) - (2);
    dynamicGoto(st, 'curloc');
  } },
      { label: 'Scoot', handler: (st: GameState) => {
    if (((st as any).KGZVars ?? 0)?.['dead'] >= 10) {
      ((st as any).KGZVars = (st as any).KGZVars ?? {})['dist'] = ((st as any).KGZVars['dist'] ?? 0) - (5);
      scene.text('The dead surround you. You cannot escape.');
      scene.actions([
        { label: 'Fuck!', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    } else {
      ((st as any).KGZVars = (st as any).KGZVars ?? {})['dedrandrun'] = (Math.floor(Math.random() * 2) + 0);
      if (((st as any).KGZVars ?? 0)?.['dedrandrun'] === 0) {
        ((st as any).KGZVars = (st as any).KGZVars ?? {})['batl'] = 1;
        scene.text('You manage to escape from the dead.');
        scene.actions([
          { label: 'Leave', goto: ['KGZgame', ''] },
        ]);
      } else {
        if (((st as any).KGZVars ?? 0)?.['dedrandrun'] === 1) {
          ((st as any).KGZVars = (st as any).KGZVars ?? {})['dist'] = ((st as any).KGZVars['dist'] ?? 0) - (5);
          ((st as any).KGZVars = (st as any).KGZVars ?? {})['dead'] = ((st as any).KGZVars['dead'] ?? 0) + ((Math.floor(Math.random() * ((((st as any).KGZVars ?? {})?.['dead'] ?? 0) * 5 - (((st as any).KGZVars ?? {})?.['dead'] ?? 0) + 1)) + ((((st as any).KGZVars ?? {})?.['dead'] ?? 0))));
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
