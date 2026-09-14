import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['weapon'] === 0) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['weapon_text'] = 'Fists';
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['weapon_texta'] = 'Fist';
  }
  if (((s as any).KGZVars ?? 0)?.['weapon'] === 1) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['weapon_text'] = 'Baton';
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['weapon_texta'] = 'Shillelagh';
  }
  if (((s as any).KGZVars ?? 0)?.['weapon'] === 2) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['weapon_text'] = 'Ax';
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['weapon_texta'] = 'Ax';
  }
  if (((s as any).KGZVars ?? 0)?.['gun'] > 0) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gun_text'] = '' + qspUntranslated(s, "KGZVars['bullet']>", { location: "KGZdyn" }) + ' pistol bullets';
  }
  if (((s as any).KGZVars ?? 0)?.['gun2'] > 0) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gun2_text'] = '' + qspUntranslated(s, "KGZVars['bullet2']>", { location: "KGZdyn" }) + ' shotgun cartridges';
  }
  if (((s as any).KGZVars ?? 0)?.['gun3'] > 0) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gun3_text'] = '' + qspUntranslated(s, "KGZVars['bullet3']>", { location: "KGZdyn" }) + ' rifle bullets';
  }
  if (((s as any).KGZVars ?? 0)?.['hour'] >= 24) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) - (24);
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['day'] = ((s as any).KGZVars['day'] ?? 0) + (1);
    if (((s as any).KGZVars ?? 0)?.['sup'] === 0) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['HP'] = ((s as any).KGZVars['HP'] ?? 0) - (10);
    } else {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['sup'] = ((s as any).KGZVars['sup'] ?? 0) - (1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGZvihod(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['weapon'] === 0) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['weapon'] = 1;
    scene.text('You find a cudgel lying on the pavement, seemingly having been dropped by another survivor.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to your apartment', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You enter your apartment while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Go to the store', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 2;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously enter the store while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Go to the hospital', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 3;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously enter the hospital while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Go to the boulevard', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 4;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You gingerly walk down the street while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the street', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back out to the street while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search for provisions', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You start searching the store for food and other supplies.');
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['supoisk'] = Math.floor(Math.random() * 101) + 0;
    if (((s as any).KGZVars ?? 0)?.['supoisk'] === 100) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['sup'] = ((s as any).KGZVars['sup'] ?? 0) + (1);
      scene.text('You find enough food to stretch another day.');
    } else {
      if (((s as any).KGZVars ?? 0)?.['day'] < ((s as any).KGZVars ?? 0)?.['supoisk']) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['sup'] = ((s as any).KGZVars['sup'] ?? 0) + (1);
        scene.text('You find enough food to stretch another day.');
      } else {
        scene.text('You don\'t find anything useful. Everything you see is either rotten or otherwise inedible.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the street', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back out to the street while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search for medical supplies', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You start searching the hospital for medical supplies.');
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['supoisk'] = Math.floor(Math.random() * 101) + 0;
    if (((s as any).KGZVars ?? 0)?.['supoisk'] === 100) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['medkit'] = ((s as any).KGZVars['medkit'] ?? 0) + (1);
      scene.text('You find a first aid kit.');
    } else {
      if (((s as any).KGZVars ?? 0)?.['day'] < ((s as any).KGZVars ?? 0)?.['supoisk']) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['medkit'] = ((s as any).KGZVars['medkit'] ?? 0) + (1);
        scene.text('You find a first aid kit.');
      } else {
        scene.text('You don\'t find anything useful.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['copcar'] === 0) {
    scene.actions([
      { label: 'Search the police car', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['copcar'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bullet'] = ((s as any).KGZVars['bullet'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('You search the police car for anything useful.');
    if (((s as any).KGZVars ?? 0)?.['gun'] === 0) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gun'] = 1;
      scene.text('You have found a pistol!');
    }
    scene.text('You find 10 bullets for your pistol.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go down the side street', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way down a side street while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Go to the hunting store', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 5;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully enter the hunting store while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Go to the police station', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 6;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously enter the police station while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Go to the hardware store', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 7;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously enter the hardware store while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Walk to the highway', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 8;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously walk towards the highway while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod5(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the store', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 4;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back out to the street while trying not alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search the store', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bulletrand'] = Math.floor(Math.random() * 18) + 3;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bullet2'] = ((s as any).KGZVars['bullet2'] ?? 0) + (((s as any).KGZVars ?? 0)?.['bulletrand']);
    qspCall(s, 'stat', '');
    scene.text('You search the store for anything useful.');
    if (((s as any).KGZVars ?? 0)?.['gun2'] === 0) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gun2'] = 1;
      scene.text('You have found a shotgun!');
    }
    // TODO-QSP: dynamic text: You find <<KGZVars['bulletrand']>> shotgun cartridges.
    scene.text(`You find ${((s as any).KGZVars ?? 0)?.['bulletrand'] ?? ''} shotgun cartridges.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['copdoor'] === 0) {
    scene.text('A steel door is locked up tight with a very sturdy padlock. Peering through the window, it looks like it leads to a secure storage room of some kind.');
    if (((s as any).KGZVars ?? 0)?.['bolgarka'] === 0) {
      scene.text('You don\'t have anything that can break the padlock, but some of the abandoned stores might have a suitable tool.');
    } else {
      scene.actions([
        { label: 'Use your angle grinder to break the lock', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['copdoor'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bullet3'] = ((s as any).KGZVars['bullet3'] ?? 0) + (500);
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10;
    qspCall(s, 'stat', '');
    scene.text('You start up your angle grinder and use it to cut through the padlock.');
    scene.text('The broken padlock falls to the floor and you push the door open, finding yourself in the station\'s armory.');
    if (((s as any).KGZVars ?? 0)?.['gun3'] === 0) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gun3'] = 1;
      scene.text('You take one of the machine guns from the rack.');
    }
    scene.text('You have found 500 bullets for your machine gun, but the noise you made has alerted the dead.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 8)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).KGZVars ?? 0)?.['copdoor'] === 1) {
      scene.text('Dead zombies litter the floor from when you were first here, but the armory otherwise contains nothing of interest.');
      if (((s as any).KGZVars ?? 0)?.['ratia'] === 0) {
        scene.actions([
          { label: 'Pick up the radio', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['ratia'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 1;
    qspCall(s, 'stat', '');
    scene.text('Having seemingly missed it on your last visit, you find a radio on the floor, which is broadcasting a message repeating the same phrase.');
    scene.text('"To anyone who can hear me. Safe haven at Fort Bragg."');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the street', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 4;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back out to the street while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search the police station', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bulletrand'] = Math.floor(Math.random() * 18) + 3;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bullet'] = ((s as any).KGZVars['bullet'] ?? 0) + (((s as any).KGZVars ?? 0)?.['bulletrand']);
    qspCall(s, 'stat', '');
    scene.text('You search the police station for anything useful.');
    if (((s as any).KGZVars ?? 0)?.['gun'] === 0) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gun'] = 1;
      scene.text('You have found a pistol!');
    }
    // TODO-QSP: dynamic text: You find <<KGZVars['bulletrand']>> bullets for your pistol.
    scene.text(`You find ${((s as any).KGZVars ?? 0)?.['bulletrand'] ?? ''} bullets for your pistol.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod7(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the street', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 4;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back out to the street while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search the hardware store', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You search the hardware store for anything useful.');
    if (((s as any).KGZVars ?? 0)?.['weapon'] < 2) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['weapon'] = 2;
      scene.text('You find an axe.');
      return;
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    if (((s as any).KGZVars ?? 0)?.['bolgarka'] === 0) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bolgarka'] = 1;
      scene.text('You find a battery operated angle grinder and decide to take it, certain that it will come in handy at some point.');
      return;
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    scene.text('You don\'t find anything useful.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod8(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['ratia'] > 0) {
    scene.actions([
      { label: 'Head in the direction of Fort Bragg', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 10;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You make your way towards Fort Bragg.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the Boulevard', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 4;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back to the boulevard while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Go to the gas station', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 9;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously make your way to the gas station.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod9(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the highway', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 8;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully return to the highway while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod10(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['placeA'] < 10) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA_text'] = 'Fort Bragg';
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeB_text'] = 'the city';
  }
  if (((s as any).KGZVars ?? 0)?.['placeA'] > 10) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA_text'] = 'the city';
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeB_text'] = 'Fort Bragg';
  }
  if (((s as any).KGZVars ?? 0)?.['placeA'] > 10) {
    scene.actions([
      { label: 'Go to the forest', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 200;
    qspCall(s, 'stat', '');
    scene.text('You have gone off the highway and into the woods.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head towards <<$KGZVars[\'placeA_text\']>>', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = ((s as any).KGZVars['placeA'] ?? 0) + (1);
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously make your way along the highway while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Head towards <<$KGZVars[\'placeB_text\']>>', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = ((s as any).KGZVars['placeA'] ?? 0) - (1);
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You cautiously make your way along the highway while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod11(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['fortQW'] === 0) {
    scene.text('The crack of a rifle pierces the air before a man on the roof starts screaming at you.');
    scene.text('"Fort Bragg has fallen! There\'s nothing here but the dead! Leave while you can!"');
  }
  if (((s as any).KGZVars ?? 0)?.['fortQW'] === 2) {
    scene.actions([
      { label: 'Run to the warehouse', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 13;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 30 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20));
    qspCall(s, 'stat', '');
    scene.text('You run to the warehouse while surrounded on all sides by the dead.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 12)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
      { label: 'Run to the infirmary', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 14;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 30 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20));
    qspCall(s, 'stat', '');
    scene.text('You run to the infirmary while surrounded on all sides by zombies.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 12)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
      { label: 'Run to the armory', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 15;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 30 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20));
    qspCall(s, 'stat', '');
    scene.text('You run to the armory while surrounded on all sides by zombies.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 12)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
      { label: 'Run to the garage', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 16;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 30 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20));
    qspCall(s, 'stat', '');
    scene.text('You run to the garage while surrounded on all sides by zombies.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 12)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the highway', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = 9;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 10;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back to the highway while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Make your way to the roof', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (((s as any).KGZVars ?? 0)?.['fortQW'] === 0) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['fortQW'] = 1;
    }
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 12;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 30 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 20));
    qspCall(s, 'stat', '');
    scene.text('You head for the roof while surrounded on all sides by zombies.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 12)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod13(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Head outside', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 11;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back outside while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search the warehouse', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You search the warehouse for anything useful, but the dim light doesn\'t make it easy.');
    (s as any).udacharand = Math.floor(Math.random() * 2) + 0;
    if (((s as any).udacharand ?? 0) === 1) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['suprand'] = Math.floor(Math.random() * 3) + 1;
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['sup'] = ((s as any).KGZVars['sup'] ?? 0) + (((s as any).KGZVars ?? 0)?.['suprand']);
      // TODO-QSP: dynamic text: You have found enough provisions to last <<KGZVars['suprand']>> day(s).
      scene.text(`You have found enough provisions to last ${((s as any).KGZVars ?? 0)?.['suprand'] ?? ''} day(s).`);
    } else {
      if ((!((s as any).udacharand ?? 0))) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 5 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 5));
        scene.text('Stuck in the dark, you struggle to read what\'s written on a box when you suddenly hear the dead screeching and moaning as they rush towards you.');
        return;
        scene.actions([
          { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 10)
  }, goto: ['KGZfight', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod14(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Head outside', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 11;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back outside while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search the infirmary', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You search the infirmary for anything useful, but the dim light doesn\'t make it easy.');
    (s as any).udacharand = Math.floor(Math.random() * 2) + 0;
    if (((s as any).udacharand ?? 0) === 1) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['medkit'] = ((s as any).KGZVars['medkit'] ?? 0) + (1);
      scene.text('You have found a first aid kit!');
    } else {
      if ((!((s as any).udacharand ?? 0))) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 10 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 5 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 5));
        scene.text('Stuck in the dark, you struggle to read what\'s written on a box when you suddenly hear the dead screeching and moaning as they rush towards you.');
        return;
        scene.actions([
          { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 10)
  }, goto: ['KGZfight', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod15(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Head outside', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 11;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back outside while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search the armory', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    if (((s as any).KGZVars ?? 0)?.['fortOru'] === 1) {
      scene.text('You already took what was left when you first visited and find nothing useful.');
    } else {
      if (((s as any).KGZVars ?? 0)?.['fortOru'] === 0) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['fortOru'] = 1;
        scene.text('You find 300 rounds of ammunition for your machine gun and 10 grenades.');
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['granade'] = ((s as any).KGZVars['granade'] ?? 0) + (10);
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bullet3'] = ((s as any).KGZVars['bullet3'] ?? 0) + (300);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod16(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['gruzovik'] === 0) {
    scene.actions([
      { label: 'Climb into the truck', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    if (((s as any).KGZVars ?? 0)?.['gruzBenz'] === 1) {
      scene.text('You spot an army truck and climb into the cab before turning the key.');
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    scene.text('The engine growls into life and you drive out into the courtyard of the fort, where a crowd of dead has gathered. You aim for them and floor it, smashing into the mass of zombies with such force that the truck almost stalls.');
    scene.text('You push the pedal to the floor and the engine roars as you start driving over the zombies, crushing them beneath your wheels. Some manage to briefly cling to the front of the truck, only to fall and be crushed alongside the others.');
    scene.text('The barricaded gate to the fort is locked up tight. While such a flimsy structure would stop zombies, it would be no match against your truck.');
    scene.actions([
      { label: 'Smash through the gate', handler: (st: GameState) => {
    scene.text('You drive at the gate and effortlessly smash through it, the cab of the truck rattling as it collapses underneath you.');
    scene.actions([
      { label: 'Drive very quickly along the road back to the city', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gruzovik'] = 3;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 10;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = 7;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 100 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 50 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 50));
    scene.text('You floor it along the road, dodging abandoned cars littering the area until the truck slides on the slippery road and overturns as it crashes into a ditch. You\'re soon surrounded by a group of zombies and have no choice but to fight your way out.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 10)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
      { label: 'Drive quickly along the road back to the city', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gruzovik'] = 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 10;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = 9;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 100 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 50 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 50));
    scene.text('You make good progress until you reach a group of cars you can\'t pass. You try going offroad to get around them, but end up getting stuck. You\'re soon surrounded by a group of zombies and have no choice but to fight your way out.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 10)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
      { label: 'Drive carefully along the road back to the city', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gruzovik'] = 2;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 10;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = 11;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 100 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 50 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 50));
    scene.text('You take your time driving along the road, but soon come to a group of cars you can\'t pass and climb out of the truck to investigate. As you try to figure out what to do, you\'re quickly surrounded by a group of zombies and have no choice but to fight your way out.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 10)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
      { label: 'Drive slowly along the road back to the city', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gruzovik'] = 4;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 10;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = 13;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 100 - (((s as any).KGZVars ?? {})?.['day'] ?? 0) * 50 + 1)) + ((((s as any).KGZVars ?? {})?.['day'] ?? 0) * 50));
    scene.text('You drive slowly along the road, weaving around the various cars littering the area before you suddenly collide with something and are forced to stop. You climb out of the truck to investigate, but are quickly surrounded by a group of zombies and have no choice but to fight your way out.');
    scene.actions([
      { label: 'Defend yourself', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['dist'] = rand(5, 10)
  }, goto: ['KGZfight', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gruzBenzMark'] = 1;
      scene.text('The engine fails to start and realize that the truck is out of fuel. Luckily, you spot what looks like some cans of gasoline nearby.');
    }
    scene.actions([
      { label: 'Climb out of the cab', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['gruzBenzMark'] === 1) {
    scene.actions([
      { label: 'Fill the truck with fuel', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['gruzBenz'] = 1;
    qspCall(s, 'stat', '');
    scene.text('You quickly but carefully fill the truck up with gasoline while keeping an eye out for zombies.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head outside', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 11;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back outside while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod100(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['lok'] === 1) {
    scene.actions([
      { label: 'Enter the house', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 101;
    dynamicGoto(st, 'curloc');
  } },
    ]);
  }
  if (((s as any).KGZVars ?? 0)?.['lok2'] === 1) {
    scene.actions([
      { label: 'Enter the supermarket', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 102;
    dynamicGoto(st, 'curloc');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wander through the suburbs', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 100;
    qspCall(s, 'stat', '');
    scene.text('You cautiously make your way through the ruins of the suburbs while trying not to alert the dead.');
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['locrand'] = Math.floor(Math.random() * 101) + 0;
    if (((s as any).KGZVars ?? 0)?.['locrand'] >= 90  &&  ((s as any).KGZVars ?? 0)?.['lok'] === 0) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['lok'] = 1;
      scene.text('You find a solid house with iron bars on the windows.');
      scene.actions([
        { label: 'Enter the house', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['place'] = 101
    dynamicGoto(st, 'curloc');
  } },
      ]);
    } else {
      if (((s as any).KGZVars ?? 0)?.['locrand'] >= 80  &&  ((s as any).KGZVars ?? 0)?.['lok2'] === 0) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['lok2'] = 1;
        scene.text('You find a large supermarket which might contain a variety of worthwhile supplies.');
        scene.actions([
          { label: 'Enter the supermarket', handler: (st: GameState) => {
    // TODO-QSP: KGZVars['place'] = 102
    dynamicGoto(st, 'curloc');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Return to the highway', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['placeA'] = 19;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 10;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You carefully make your way back to the highway while while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod102(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the supermarket', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 100;
    qspCall(s, 'stat', '');
    scene.text('You cautiously leave the supermarket while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Search the supermarket', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    qspCall(s, 'stat', '');
    scene.text('You start searching the supermarket in search of anything useful while trying not to alert the dead.');
    (s as any).udarand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).udarand ?? 0) >= 90) {
      (s as any).tiprand = Math.floor(Math.random() * 2) + 0;
      if ((!((s as any).tiprand ?? 0))) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['sup'] = ((s as any).KGZVars['sup'] ?? 0) + (1);
        scene.text('You find some food!');
      }
      if (((s as any).tiprand ?? 0) === 1) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['medkit'] = ((s as any).KGZVars['medkit'] ?? 0) + (1);
        scene.text('You find a first aid kit!');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod200(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk through the forest towards the highway', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 10;
    qspCall(s, 'stat', '');
    scene.text('You cautiously make your way through the trees while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Walk through the woods away from the highway', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 201;
    qspCall(s, 'stat', '');
    scene.text('You cautiously make your way through the trees while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvihod201(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the forest', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 200;
    qspCall(s, 'stat', '');
    scene.text('You cautiously make your way to the forest while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    { label: 'Go to the farmhouse', handler: (st: GameState) => {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['hour'] = ((s as any).KGZVars['hour'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['batl'] = 0;
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['place'] = 202;
    qspCall(s, 'stat', '');
    scene.text('You cautiously make your way to the farmhouse while trying not to alert the dead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGZvincent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['fortQW'] === 1) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['fortQW'] = 2;
    scene.text('The man introduces himself as Vincent and tells you that, while the fort has an armory, a warehouse, an infirmary and a garage that all might contain worthwhile supplies, it has been entirely overrun by the dead and that you shouldn\'t hang around unless absolutely necessary.');
  } else {
    scene.text('Vincent questions why you\'re here and wonders aloud if you have a deathwish running around the zombie infested base.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
  ]);
  scene.build();
}

function enterKGZfizatk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['weapon'] === 0) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
    if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 30) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
      scene.text('You punch the zombie hard on the head and it falls to the ground, motionless.');
    } else {
      scene.text('The zombie ignores your punch and continues its attack.');
    }
  } else {
    if (((s as any).KGZVars ?? 0)?.['weapon'] === 1) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 50) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('You smash your club down on the zombie\'s head and it falls to the ground, motionless.');
      } else {
        scene.text('You swing your club at the zombie\'s head, but it pays no attention to your attack and keeps moving.');
      }
    } else {
      if (((s as any).KGZVars ?? 0)?.['weapon'] === 2) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
        if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 70) {
          if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
          scene.text('You swing your axe into the zombie\'s head before kicking it to the ground. It lies motionless with a large wound in its head.');
        } else {
          scene.text('You swing your axe into the zombie, but it pays no attention to your attack and keeps moving.');
        }
      }
    }
  }
  if (((s as any).KGZVars ?? 0)?.['dead'] > 0) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uron'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['dead'] ?? 0) * 5 - (((s as any).KGZVars ?? {})?.['dead'] ?? 0) * 2 + 1)) + ((((s as any).KGZVars ?? {})?.['dead'] ?? 0) * 2));
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['HP'] = ((s as any).KGZVars['HP'] ?? 0) - (((s as any).KGZVars ?? 0)?.['uron']);
    // TODO-QSP: dynamic text: <<KGZVars['dead']>> zombie(s) swipe(s) at you while trying to bite.
    scene.text(`${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombie(s) swipe(s) at you while trying to bite.`);
    scene.text(`<center><b>You have taken ${((s as any).KGZVars ?? 0)?.['uron'] ?? ''} damage.</b></center>`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGZgunatk(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).KGZVars ?? 0)?.['dist'] <= 5) {
    if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 90) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
      scene.text('At this range, it\'s almost impossible to miss. You take aim at the zombie\'s head and fire, the gunshot ringing out as the zombie falls to the ground motionless.');
    } else {
      scene.text('You shoot the zombie, but it has no effect.');
    }
  } else {
    if (((s as any).KGZVars ?? 0)?.['dist'] <= 10) {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 80) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('You carefully take aim at the zombie\'s head and fire, the gunshot ringing out as the zombie falls to the ground motionless.');
      } else {
        scene.text('You shoot the zombie, but it has no effect.');
      }
    } else {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 70) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('The zombie is at a distance, but you decide to take the shot anyway. You take aim at the zombie\'s head and fire, the gunshot ringing out as the zombie falls to the ground motionless.');
      } else {
        scene.text('You shoot the zombie, but it has no effect.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGZgunatk2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).KGZVars ?? 0)?.['dist'] <= 5) {
    if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 100) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
      scene.text('At this range, it\'s almost impossible to miss. You take aim with your shotgun and fire, the zombie\'s head exploding before it falls to the ground motionless.');
    } else {
      scene.text('You blast the zombie with your shotgun, but even at this range it has surprisingly little effect.');
    }
  } else {
    if (((s as any).KGZVars ?? 0)?.['dist'] <= 10) {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 70) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('You carefully take aim with your shotgun and fire, the zombie\'s head exploding before it falls to the ground motionless.');
      } else {
        scene.text('You blast the zombie with your shotgun, but it has little effect.');
      }
    } else {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 50) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('It\'s a difficult shot at this range, but you decide to take it anyway. You take aim with your shotgun and fire, the zombie\'s head exploding before it falls to the ground motionless.');
      } else {
        scene.text('You blast the zombie with your shotgun, but it has little effect given the distance.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGZgunatk3(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).KGZVars ?? 0)?.['dist'] <= 5) {
    if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 70) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
      scene.text('At this range, it\'s almost impossible to miss. You take aim at the zombie\'s head and fire, the gunshot ringing out as the zombie falls to the ground motionless.');
    } else {
      scene.text('You shoot the zombie, but it has no effect.');
    }
  } else {
    if (((s as any).KGZVars ?? 0)?.['dist'] <= 10) {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 95) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('You carefully take aim at the zombie\'s head and fire, the gunshot ringing out as the zombie falls to the ground motionless.');
      } else {
        scene.text('You shoot the zombie, but it has no effect.');
      }
    } else {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 85) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('The zombie is at a distance, but you decide to take the shot anyway. You take aim at the zombie\'s head and fire, the gunshot ringing out as the zombie falls to the ground motionless.');
      } else {
        scene.text('You shoot the zombie, but it has no effect.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGZgunatk4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :KGZmarkgun
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bulgun'] = ((s as any).KGZVars['bulgun'] ?? 0) - (1);
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).KGZVars ?? 0)?.['dead'] > 0) {
    if (((s as any).KGZVars ?? 0)?.['dist'] <= 5) {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 80) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('At this range, it\'s almost impossible to miss. You take aim at the zombie\'s head and fire, the burst of gunshots ringing out as the zombie falls to the ground motionless.');
      } else {
        scene.text('You shoot the zombie, but it has no effect.');
      }
    } else {
      if (((s as any).KGZVars ?? 0)?.['dist'] <= 10) {
        if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 70) {
          if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
          scene.text('You carefully take aim at the zombie\'s head and fire, the burst of gunshots ringing out as the zombie falls to the ground motionless.');
        } else {
          scene.text('You shoot the zombie, but it has no effect.');
        }
      } else {
        if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 60) {
          if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
          scene.text('The zombie is at a distance, but you decide to take the shot anyway. You take aim at the zombie\'s head and fire, the burst of gunshots ringing out as the zombie falls to the ground motionless.');
        } else {
          scene.text('You shoot the zombie, but it has no effect.');
        }
      }
    }
  }
  if (((s as any).KGZVars ?? 0)?.['bulgun'] > 0) {
    // TODO-QSP: jump 'KGZmarkgun'
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGZgunatk5(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :KGZmarkgunb
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['bulgun'] = ((s as any).KGZVars['bulgun'] ?? 0) - (1);
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).KGZVars ?? 0)?.['dead'] > 0) {
    if (((s as any).KGZVars ?? 0)?.['dist'] <= 5) {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 70) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('At this range, it\'s almost impossible to miss. You take aim at the zombie\'s head and fire, gunshots continuing to ring out even after the zombie falls to the ground motionless.');
      } else {
        scene.text('You shoot the zombie, but even going full auto has no effect.');
      }
    } else {
      if (((s as any).KGZVars ?? 0)?.['dist'] <= 10) {
        if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 60) {
          if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
          scene.text('You carefully take aim at the zombie\'s head and fire, the burst of gunshots ringing out as the zombie falls to the ground motionless.');
        } else {
          scene.text('You shoot the zombie, but even going full auto has no effect.');
        }
      } else {
        if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 50) {
          if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
          scene.text('The zombie is at a distance, but you decide to take the shot anyway. You take aim at the zombie\'s head and fire, gunshots continuing to ring out even after the zombie falls to the ground motionless.');
        } else {
          scene.text('You shoot the zombie, but even going full auto has no effect.');
        }
      }
    }
  }
  if (((s as any).KGZVars ?? 0)?.['bulgun'] > 0) {
    // TODO-QSP: jump 'KGZmarkgunb'
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGZdeadmanatk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KGZVars ?? 0)?.['dist'] > 0) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dist'] = ((s as any).KGZVars['dist'] ?? 0) - (1);
  }
  if (((s as any).KGZVars ?? 0)?.['dead'] > 0  &&  ((s as any).KGZVars ?? 0)?.['dist'] <= 2) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uron'] = (Math.floor(Math.random() * ((((s as any).KGZVars ?? {})?.['dead'] ?? 0) * 5 - (((s as any).KGZVars ?? {})?.['dead'] ?? 0) * 2 + 1)) + ((((s as any).KGZVars ?? {})?.['dead'] ?? 0) * 2));
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['HP'] = ((s as any).KGZVars['HP'] ?? 0) - (((s as any).KGZVars ?? 0)?.['uron']);
    // TODO-QSP: dynamic text: <<KGZVars['dead']>> zombie(s) swipe(s) at you while trying to bite.
    scene.text(`${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombie(s) swipe(s) at you while trying to bite.`);
    scene.text(`<center><b>You have taken ${((s as any).KGZVars ?? 0)?.['uron'] ?? ''} damage.</b></center>`);
  } else {
    if (((s as any).KGZVars ?? 0)?.['dist'] > 2  &&  ((s as any).KGZVars ?? 0)?.['dead'] > 0) {
      // TODO-QSP: dynamic text: <<KGZVars['dead']>> zombie(s) limp(s) towards you.
      scene.text(`${((s as any).KGZVars ?? 0)?.['dead'] ?? ''} zombie(s) limp(s) towards you.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGZgranatk(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['uspeh'] = Math.floor(Math.random() * 101) + 0;
  if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['granade'] = ((s as any).KGZVars['granade'] ?? 0) - (1);
  scene.text('You pull the pin on a grenade and throw it.');
  if (((s as any).KGZVars ?? 0)?.['dist'] <= 5) {
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dist'] = ((s as any).KGZVars['dist'] ?? 0) + (Math.floor(Math.random() * 5) + 1);
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (Math.floor(Math.random() * 16) + 5);
    if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['HP'] = ((s as any).KGZVars['HP'] ?? 0) - (Math.floor(Math.random() * 16) + 5);
    scene.text('The powerful explosion blasts the dead away, but you\'re close enough to take damage yourself.');
  } else {
    if (((s as any).KGZVars ?? 0)?.['dist'] <= 10) {
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dist'] = ((s as any).KGZVars['dist'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
      if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (Math.floor(Math.random() * 8) + 3);
      scene.text('The powerful explosion blasts the dead away.');
    } else {
      if (((s as any).KGZVars ?? 0)?.['uspeh'] <= 5) {
        if (!(s as any).KGZVars) (s as any).KGZVars = {}; (s as any).KGZVars['dead'] = ((s as any).KGZVars['dead'] ?? 0) - (1);
        scene.text('You toss the grenade as far as you can, but it only kills a single zombie.');
      } else {
        scene.text('The dead are too far away. The grenade lands nowhere near the target and explodes without causing any damage.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'KGZvihod':
      enterKGZvihod(s, scene);
      break;
    case 'KGZvihod2':
      enterKGZvihod2(s, scene);
      break;
    case 'KGZvihod3':
      enterKGZvihod3(s, scene);
      break;
    case 'KGZvihod4':
      enterKGZvihod4(s, scene);
      break;
    case 'KGZvihod5':
      enterKGZvihod5(s, scene);
      break;
    case 'KGZvihod6':
      enterKGZvihod6(s, scene);
      break;
    case 'KGZvihod7':
      enterKGZvihod7(s, scene);
      break;
    case 'KGZvihod8':
      enterKGZvihod8(s, scene);
      break;
    case 'KGZvihod9':
      enterKGZvihod9(s, scene);
      break;
    case 'KGZvihod10':
      enterKGZvihod10(s, scene);
      break;
    case 'KGZvihod11':
      enterKGZvihod11(s, scene);
      break;
    case 'KGZvihod13':
      enterKGZvihod13(s, scene);
      break;
    case 'KGZvihod14':
      enterKGZvihod14(s, scene);
      break;
    case 'KGZvihod15':
      enterKGZvihod15(s, scene);
      break;
    case 'KGZvihod16':
      enterKGZvihod16(s, scene);
      break;
    case 'KGZvihod100':
      enterKGZvihod100(s, scene);
      break;
    case 'KGZvihod102':
      enterKGZvihod102(s, scene);
      break;
    case 'KGZvihod200':
      enterKGZvihod200(s, scene);
      break;
    case 'KGZvihod201':
      enterKGZvihod201(s, scene);
      break;
    case 'KGZvincent':
      enterKGZvincent(s, scene);
      break;
    case 'KGZfizatk':
      enterKGZfizatk(s, scene);
      break;
    case 'KGZgunatk':
      enterKGZgunatk(s, scene);
      break;
    case 'KGZgunatk2':
      enterKGZgunatk2(s, scene);
      break;
    case 'KGZgunatk3':
      enterKGZgunatk3(s, scene);
      break;
    case 'KGZgunatk4':
      enterKGZgunatk4(s, scene);
      break;
    case 'KGZgunatk5':
      enterKGZgunatk5(s, scene);
      break;
    case 'KGZdeadmanatk':
      enterKGZdeadmanatk(s, scene);
      break;
    case 'KGZgranatk':
      enterKGZgranatk(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const KGZdyn: LocationDef = {
  name: 'KGZdyn',
  title: 'You have taken <<KGZVars[\'uron\']>> damage.',
  region: 'kgd',
  enter: enter,
};
