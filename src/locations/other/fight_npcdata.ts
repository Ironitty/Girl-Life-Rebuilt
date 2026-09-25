import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGustav(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Gustav');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/city/jugo/jugopre.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 100);
  qspFunc(s, 'setNPCFightStats', 'run', 75);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 75);
  qspFunc(s, 'setNPCFightStats', 'kick', 75);
  qspFunc(s, 'setNPCFightStats', 'punch', 85);
  qspFunc(s, 'setNPCFightStats', 'jab', 75);
  qspFunc(s, 'setNPCFightStats', 'stren', 250);
  qspFunc(s, 'setNPCFightStats', 'agil', 60);
  qspFunc(s, 'setNPCFightStats', 'vital', 200);
  qspFunc(s, 'setNPCFightStats', 'react', 50);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 50);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 2;
  scene.build();
}

function enterTatiana(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Tatiana');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/city/tatiana/magiclook.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 30);
  qspFunc(s, 'setNPCFightStats', 'run', 75);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 50);
  qspFunc(s, 'setNPCFightStats', 'punch', 50);
  qspFunc(s, 'setNPCFightStats', 'jab', 50);
  qspFunc(s, 'setNPCFightStats', 'stren', 30);
  qspFunc(s, 'setNPCFightStats', 'agil', 75);
  qspFunc(s, 'setNPCFightStats', 'vital', 100);
  qspFunc(s, 'setNPCFightStats', 'react', 60);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'magik', 1);
  qspFunc(s, 'setNPCFightStats', 'mana', 200);
  qspFunc(s, 'setNPCFightStats', 'spells', 'fog,clone,stun,energo');
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 3;
  scene.build();
}

function enterProstitute(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Prostitute');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/city/shared/streetwalker/working' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'run', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'wrstlng', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'kick', 5);
  qspFunc(s, 'setNPCFightStats', 'punch', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'jab', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'stren', (Math.floor(Math.random() * 11) + 15));
  qspFunc(s, 'setNPCFightStats', 'agil', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'vital', (Math.floor(Math.random() * 11) + 45));
  qspFunc(s, 'setNPCFightStats', 'react', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'willpwr', 50);
  qspFunc(s, 'setNPCFightStats', 'shoot', 10);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 4;
  scene.build();
}

function enterBandit(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Bandit');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/shared/street/mugger.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'run', 30);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'jab', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'stren', (Math.floor(Math.random() * 21) + 95));
  qspFunc(s, 'setNPCFightStats', 'agil', (Math.floor(Math.random() * 11) + 15));
  qspFunc(s, 'setNPCFightStats', 'vital', (Math.floor(Math.random() * 11) + 65));
  qspFunc(s, 'setNPCFightStats', 'react', (Math.floor(Math.random() * 11) + 15));
  qspFunc(s, 'setNPCFightStats', 'willpwr', 50);
  qspFunc(s, 'setNPCFightStats', 'shoot', 10);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 5;
  scene.build();
}

function enterProstitute2(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Prostitute');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/city/shared/streetwalker/working' + (Math.floor(Math.random() * 4) + 1) + '.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 10);
  qspFunc(s, 'setNPCFightStats', 'run', 50);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 10);
  qspFunc(s, 'setNPCFightStats', 'jab', 10);
  qspFunc(s, 'setNPCFightStats', 'stren', 50);
  qspFunc(s, 'setNPCFightStats', 'agil', 40);
  qspFunc(s, 'setNPCFightStats', 'vital', 60);
  qspFunc(s, 'setNPCFightStats', 'react', 30);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 50);
  qspFunc(s, 'setNPCFightStats', 'shoot', 10);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 6;
  scene.build();
}

function enterRapist(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Rapist');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/shared/street/rapist.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'run', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'wrstlng', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'jab', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'stren', (Math.floor(Math.random() * 21) + 70));
  qspFunc(s, 'setNPCFightStats', 'agil', (Math.floor(Math.random() * 21) + 30));
  qspFunc(s, 'setNPCFightStats', 'vital', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'react', (Math.floor(Math.random() * 21) + 30));
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 8;
  scene.build();
}

function enterRobber(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Robber');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/shared/street/mugger.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'run', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'wrstlng', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'jab', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'stren', (Math.floor(Math.random() * 21) + 60));
  qspFunc(s, 'setNPCFightStats', 'agil', (Math.floor(Math.random() * 21) + 30));
  qspFunc(s, 'setNPCFightStats', 'vital', (Math.floor(Math.random() * 41) + 40));
  qspFunc(s, 'setNPCFightStats', 'react', (Math.floor(Math.random() * 21) + 30));
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  if ((Math.floor(Math.random() * 11) + 0) < 5) {
    (s as any).fightEnding = 8;
  } else {
    (s as any).fightEnding = 9;
  }
  scene.build();
}

function enterSnatcher(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Purse Snatcher');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/shared/street/pursesnatch.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'run', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'wrstlng', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'jab', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'stren', (Math.floor(Math.random() * 21) + 60));
  qspFunc(s, 'setNPCFightStats', 'agil', (Math.floor(Math.random() * 21) + 30));
  qspFunc(s, 'setNPCFightStats', 'vital', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'react', (Math.floor(Math.random() * 21) + 30));
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 9;
  scene.build();
}

function enterDimka(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Dimka');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/big1.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 50);
  qspFunc(s, 'setNPCFightStats', 'run', 50);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 50);
  qspFunc(s, 'setNPCFightStats', 'jab', 50);
  qspFunc(s, 'setNPCFightStats', 'stren', 100);
  qspFunc(s, 'setNPCFightStats', 'agil', 40);
  qspFunc(s, 'setNPCFightStats', 'vital', 50);
  qspFunc(s, 'setNPCFightStats', 'react', 40);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 10;
  scene.build();
}

function enterStranger(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Stranger');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/shared/street/rapist.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 10);
  qspFunc(s, 'setNPCFightStats', 'run', 20);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 10);
  qspFunc(s, 'setNPCFightStats', 'jab', 10);
  qspFunc(s, 'setNPCFightStats', 'stren', 100);
  qspFunc(s, 'setNPCFightStats', 'agil', 10);
  qspFunc(s, 'setNPCFightStats', 'vital', 50);
  qspFunc(s, 'setNPCFightStats', 'react', 10);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 11;
  scene.build();
}

function enterChristina(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Christina');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/18.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 45);
  qspFunc(s, 'setNPCFightStats', 'run', 80);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 10);
  qspFunc(s, 'setNPCFightStats', 'punch', 35);
  qspFunc(s, 'setNPCFightStats', 'jab', 35);
  qspFunc(s, 'setNPCFightStats', 'stren', 85);
  qspFunc(s, 'setNPCFightStats', 'agil', 75);
  qspFunc(s, 'setNPCFightStats', 'vital', 95);
  qspFunc(s, 'setNPCFightStats', 'react', 75);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 45);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 12;
  scene.build();
}

function enterStallion(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Naked Man');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/shared/street/rapist.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 100);
  qspFunc(s, 'setNPCFightStats', 'run', 100);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 100);
  qspFunc(s, 'setNPCFightStats', 'kick', 100);
  qspFunc(s, 'setNPCFightStats', 'punch', 100);
  qspFunc(s, 'setNPCFightStats', 'jab', 100);
  qspFunc(s, 'setNPCFightStats', 'stren', 100);
  qspFunc(s, 'setNPCFightStats', 'agil', 300);
  qspFunc(s, 'setNPCFightStats', 'vital', 200);
  qspFunc(s, 'setNPCFightStats', 'react', 100);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 10);
  qspFunc(s, 'setNPCFightStats', 'magik', 1);
  qspFunc(s, 'setNPCFightStats', 'mana', 200);
  qspFunc(s, 'setNPCFightStats', 'spells', 'clone,energo');
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 13;
  scene.build();
}

function enterGanggirl(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Gang Girl');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/' + (Math.floor(Math.random() * 30) + 31) + '.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'run', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'wrstlng', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'kick', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'punch', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'jab', (Math.floor(Math.random() * 11) + 5));
  qspFunc(s, 'setNPCFightStats', 'stren', (Math.floor(Math.random() * 16) + 15));
  qspFunc(s, 'setNPCFightStats', 'agil', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'vital', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'react', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'willpwr', 50);
  qspFunc(s, 'setNPCFightStats', 'shoot', (Math.floor(Math.random() * 11) + 25));
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 14;
  scene.build();
}

function enterGirls(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'The group of girls');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/shared/street/girlgang.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 50);
  qspFunc(s, 'setNPCFightStats', 'run', 50);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 50);
  qspFunc(s, 'setNPCFightStats', 'jab', 50);
  qspFunc(s, 'setNPCFightStats', 'stren', 100);
  qspFunc(s, 'setNPCFightStats', 'agil', 60);
  qspFunc(s, 'setNPCFightStats', 'vital', 60);
  qspFunc(s, 'setNPCFightStats', 'react', 60);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 14;
  scene.build();
}

function enterSilvestr(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Silvestr');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/248.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 30);
  qspFunc(s, 'setNPCFightStats', 'run', 50);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 10);
  qspFunc(s, 'setNPCFightStats', 'punch', 40);
  qspFunc(s, 'setNPCFightStats', 'jab', 30);
  qspFunc(s, 'setNPCFightStats', 'stren', 50);
  qspFunc(s, 'setNPCFightStats', 'agil', 45);
  qspFunc(s, 'setNPCFightStats', 'vital', 60);
  qspFunc(s, 'setNPCFightStats', 'react', 50);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 25);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 15;
  scene.build();
}

function enterBitchSquad(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'The bitch squad');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/pavlovsk/school/girl/katja/KWT14.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 50);
  qspFunc(s, 'setNPCFightStats', 'run', 50);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 50);
  qspFunc(s, 'setNPCFightStats', 'jab', 50);
  qspFunc(s, 'setNPCFightStats', 'stren', 100);
  qspFunc(s, 'setNPCFightStats', 'agil', 60);
  qspFunc(s, 'setNPCFightStats', 'vital', 60);
  qspFunc(s, 'setNPCFightStats', 'react', 60);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 100);
  qspFunc(s, 'setNPCFightStats', 'shoot', 100);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 16;
  scene.build();
}

function enterBtatiana(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'BTatiana');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/city/btatiana/ST1.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 55);
  qspFunc(s, 'setNPCFightStats', 'run', 100);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 1);
  qspFunc(s, 'setNPCFightStats', 'kick', 25);
  qspFunc(s, 'setNPCFightStats', 'punch', 25);
  qspFunc(s, 'setNPCFightStats', 'jab', 25);
  qspFunc(s, 'setNPCFightStats', 'stren', 5);
  qspFunc(s, 'setNPCFightStats', 'agil', 75);
  qspFunc(s, 'setNPCFightStats', 'vital', 75);
  qspFunc(s, 'setNPCFightStats', 'react', 85);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 75);
  qspFunc(s, 'setNPCFightStats', 'shoot', 75);
  qspFunc(s, 'setNPCFightStats', 'magik', 1);
  qspFunc(s, 'setNPCFightStats', 'mana', 100);
  qspFunc(s, 'setNPCFightStats', 'spells', 'energo,dambonus,init');
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 17;
  scene.build();
}

function enterSandbaggingana(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Ana');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/city/ana/action.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 65);
  qspFunc(s, 'setNPCFightStats', 'run', 100);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 25);
  qspFunc(s, 'setNPCFightStats', 'kick', 35);
  qspFunc(s, 'setNPCFightStats', 'punch', 40);
  qspFunc(s, 'setNPCFightStats', 'jab', 35);
  qspFunc(s, 'setNPCFightStats', 'stren', 75);
  qspFunc(s, 'setNPCFightStats', 'agil', 110);
  qspFunc(s, 'setNPCFightStats', 'vital', 110);
  qspFunc(s, 'setNPCFightStats', 'react', 115);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 75);
  qspFunc(s, 'setNPCFightStats', 'shoot', 75);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 18;
  scene.build();
}

function enterAnagopniks(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Pissed Gopniks');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/city/ana/gopniks.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 60);
  qspFunc(s, 'setNPCFightStats', 'run', 60);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 20);
  qspFunc(s, 'setNPCFightStats', 'kick', 10);
  qspFunc(s, 'setNPCFightStats', 'punch', 60);
  qspFunc(s, 'setNPCFightStats', 'jab', 60);
  qspFunc(s, 'setNPCFightStats', 'stren', 100);
  qspFunc(s, 'setNPCFightStats', 'agil', 70);
  qspFunc(s, 'setNPCFightStats', 'vital', 70);
  qspFunc(s, 'setNPCFightStats', 'react', 70);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 110);
  qspFunc(s, 'setNPCFightStats', 'shoot', 110);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 19;
  scene.build();
}

function enterBossana(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Ana');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/city/ana/boss.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 75);
  qspFunc(s, 'setNPCFightStats', 'run', 100);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 50);
  qspFunc(s, 'setNPCFightStats', 'kick', 50);
  qspFunc(s, 'setNPCFightStats', 'punch', 60);
  qspFunc(s, 'setNPCFightStats', 'jab', 50);
  qspFunc(s, 'setNPCFightStats', 'stren', 150);
  qspFunc(s, 'setNPCFightStats', 'agil', 150);
  qspFunc(s, 'setNPCFightStats', 'vital', 150);
  qspFunc(s, 'setNPCFightStats', 'react', 150);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 75);
  qspFunc(s, 'setNPCFightStats', 'shoot', 75);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  (s as any).fightEnding = 20;
  scene.build();
}

function enterGopnews_1(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Vasan');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/102.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 15);
  qspFunc(s, 'setNPCFightStats', 'run', 30);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 50);
  qspFunc(s, 'setNPCFightStats', 'kick', 10);
  qspFunc(s, 'setNPCFightStats', 'punch', 30);
  qspFunc(s, 'setNPCFightStats', 'jab', 20);
  qspFunc(s, 'setNPCFightStats', 'stren', 40);
  qspFunc(s, 'setNPCFightStats', 'agil', 30);
  qspFunc(s, 'setNPCFightStats', 'vital', 30);
  qspFunc(s, 'setNPCFightStats', 'react', 30);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 25);
  qspFunc(s, 'setNPCFightStats', 'shoot', 35);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterGopnews_2(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Bereza');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/103.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 10);
  qspFunc(s, 'setNPCFightStats', 'run', 20);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 20);
  qspFunc(s, 'setNPCFightStats', 'jab', 10);
  qspFunc(s, 'setNPCFightStats', 'stren', 20);
  qspFunc(s, 'setNPCFightStats', 'agil', 20);
  qspFunc(s, 'setNPCFightStats', 'vital', 20);
  qspFunc(s, 'setNPCFightStats', 'react', 20);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 15);
  qspFunc(s, 'setNPCFightStats', 'shoot', 15);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterGopnews_3(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Konstantin');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/104.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 10);
  qspFunc(s, 'setNPCFightStats', 'run', 20);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 20);
  qspFunc(s, 'setNPCFightStats', 'jab', 10);
  qspFunc(s, 'setNPCFightStats', 'stren', 20);
  qspFunc(s, 'setNPCFightStats', 'agil', 20);
  qspFunc(s, 'setNPCFightStats', 'vital', 20);
  qspFunc(s, 'setNPCFightStats', 'react', 20);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 15);
  qspFunc(s, 'setNPCFightStats', 'shoot', 15);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterGopnews_4(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Kostil');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/105.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 10);
  qspFunc(s, 'setNPCFightStats', 'run', 20);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 10);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 20);
  qspFunc(s, 'setNPCFightStats', 'jab', 10);
  qspFunc(s, 'setNPCFightStats', 'stren', 20);
  qspFunc(s, 'setNPCFightStats', 'agil', 20);
  qspFunc(s, 'setNPCFightStats', 'vital', 20);
  qspFunc(s, 'setNPCFightStats', 'react', 20);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 15);
  qspFunc(s, 'setNPCFightStats', 'shoot', 15);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterGopnews_5(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Udmurt');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/106.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 15);
  qspFunc(s, 'setNPCFightStats', 'run', 50);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 0);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 20);
  qspFunc(s, 'setNPCFightStats', 'jab', 20);
  qspFunc(s, 'setNPCFightStats', 'stren', 30);
  qspFunc(s, 'setNPCFightStats', 'agil', 20);
  qspFunc(s, 'setNPCFightStats', 'vital', 20);
  qspFunc(s, 'setNPCFightStats', 'react', 20);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 15);
  qspFunc(s, 'setNPCFightStats', 'shoot', 15);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterGopnews_6(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Gray');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/107.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 75);
  qspFunc(s, 'setNPCFightStats', 'run', 100);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 20);
  qspFunc(s, 'setNPCFightStats', 'kick', 0);
  qspFunc(s, 'setNPCFightStats', 'punch', 40);
  qspFunc(s, 'setNPCFightStats', 'jab', 40);
  qspFunc(s, 'setNPCFightStats', 'stren', 50);
  qspFunc(s, 'setNPCFightStats', 'agil', 50);
  qspFunc(s, 'setNPCFightStats', 'vital', 50);
  qspFunc(s, 'setNPCFightStats', 'react', 50);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 25);
  qspFunc(s, 'setNPCFightStats', 'shoot', 50);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterLena(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Lena');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/20.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 50);
  qspFunc(s, 'setNPCFightStats', 'run', 50);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 60);
  qspFunc(s, 'setNPCFightStats', 'kick', 60);
  qspFunc(s, 'setNPCFightStats', 'punch', 70);
  qspFunc(s, 'setNPCFightStats', 'jab', 65);
  qspFunc(s, 'setNPCFightStats', 'stren', 85);
  qspFunc(s, 'setNPCFightStats', 'agil', 70);
  qspFunc(s, 'setNPCFightStats', 'vital', 80);
  qspFunc(s, 'setNPCFightStats', 'react', 65);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 90);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterLera(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', 'Lera');
  qspFunc(s, 'setNPCFightStats', 'image', 'images/characters/shared/headshots_main/21.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', 30);
  qspFunc(s, 'setNPCFightStats', 'run', 40);
  qspFunc(s, 'setNPCFightStats', 'wrstlng', 30);
  qspFunc(s, 'setNPCFightStats', 'kick', 50);
  qspFunc(s, 'setNPCFightStats', 'punch', 50);
  qspFunc(s, 'setNPCFightStats', 'jab', 40);
  qspFunc(s, 'setNPCFightStats', 'stren', 70);
  qspFunc(s, 'setNPCFightStats', 'agil', 60);
  qspFunc(s, 'setNPCFightStats', 'vital', 70);
  qspFunc(s, 'setNPCFightStats', 'react', 60);
  qspFunc(s, 'setNPCFightStats', 'willpwr', 80);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterRandomGopfem(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', qspFunc(s, 'npcrnamefile', 'rusFemale'));
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/pavlovsk/school/oldschool/fightnight/girls_fighting' + (Math.floor(Math.random() * 11) + 1) + '.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'run', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'wrstlng', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'kick', (Math.floor(Math.random() * 11) + 30));
  qspFunc(s, 'setNPCFightStats', 'punch', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'jab', (Math.floor(Math.random() * 11) + 30));
  qspFunc(s, 'setNPCFightStats', 'stren', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'agil', (Math.floor(Math.random() * 11) + 50));
  qspFunc(s, 'setNPCFightStats', 'vital', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'react', (Math.floor(Math.random() * 11) + 50));
  qspFunc(s, 'setNPCFightStats', 'willpwr', 80);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  scene.build();
}

function enterRandomGopmale(s: GameState, scene: SceneBuilder): void {
  qspFunc(s, 'setNPCFightStats', 'name', qspFunc(s, 'npcrnamefile', 'rusMale'));
  qspFunc(s, 'setNPCFightStats', 'image', 'images/locations/pavlovsk/school/oldschool/fightnight/boys_fighting' + (Math.floor(Math.random() * 11) + 1) + '.jpg');
  qspFunc(s, 'setNPCFightStats', 'def', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'run', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'wrstlng', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'kick', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'punch', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'jab', (Math.floor(Math.random() * 21) + 20));
  qspFunc(s, 'setNPCFightStats', 'stren', (Math.floor(Math.random() * 21) + 60));
  qspFunc(s, 'setNPCFightStats', 'agil', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'vital', (Math.floor(Math.random() * 21) + 60));
  qspFunc(s, 'setNPCFightStats', 'react', (Math.floor(Math.random() * 21) + 40));
  qspFunc(s, 'setNPCFightStats', 'willpwr', 80);
  qspFunc(s, 'setNPCFightStats', 'health', 0);
  if (String((s as any).locArgs?.[2] ?? '') !== '') {
    qspFunc(s, 'setNPCFightStats', 'name', ((s as any).locArgs?.[2] ?? 0));
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).NPCFS_Team = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).NPCFS_Team ?? 0) === '') {
    (s as any).NPCFS_Team = 'opp';
  }
  (s as any).NPCFS_TeamSlot = 0;
  (s as any).setNPCFightStats = qspUntranslated(s, "{", { location: "fight_npcdata" });
  (s as any).NPCFS_Attrib = ((s as any).locArgs?.[0] ?? 0);
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    (s as any).NPCFS_Value = ((s as any).locArgs?.[1] ?? 0);
    // TODO-QSP: dynamic '<<$NPCFS_Team>>_<<$NPCFS_Attrib>>[<<NPCFS_TeamSlot>>] = <<NPCFS_Value>>'
  } else {
    (s as any).NPCFS_Value = ((s as any).locArgs?.[1] ?? 0);
    // TODO-QSP: dynamic '$<<$NPCFS_Team>>_<<$NPCFS_Attrib>>[<<NPCFS_TeamSlot>>] = ''<<$NPCFS_Value>>'''
  }
  (s as any).calcNPCFightHealth = qspUntranslated(s, "{", { location: "fight_npcdata" });
  (s as any).NPCFightStatStr = 0;
  (s as any).NPCFightStatVit = 0;
  (s as any).result = 5 * (((s as any).NPCFightStatStr ?? 0) + ((s as any).NPCFightStatVit ?? 0));
  const arg = s.locArg;
  switch (arg) {
    case 'gustav':
      enterGustav(s, scene);
      break;
    case 'tatiana':
      enterTatiana(s, scene);
      break;
    case 'prostitute':
      enterProstitute(s, scene);
      break;
    case 'bandit':
      enterBandit(s, scene);
      break;
    case 'prostitute2':
      enterProstitute2(s, scene);
      break;
    case 'rapist':
      enterRapist(s, scene);
      break;
    case 'robber':
      enterRobber(s, scene);
      break;
    case 'snatcher':
      enterSnatcher(s, scene);
      break;
    case 'dimka':
      enterDimka(s, scene);
      break;
    case 'stranger':
      enterStranger(s, scene);
      break;
    case 'christina':
      enterChristina(s, scene);
      break;
    case 'stallion':
      enterStallion(s, scene);
      break;
    case 'ganggirl':
      enterGanggirl(s, scene);
      break;
    case 'girls':
      enterGirls(s, scene);
      break;
    case 'silvestr':
      enterSilvestr(s, scene);
      break;
    case 'bitch squad':
      enterBitchSquad(s, scene);
      break;
    case 'btatiana':
      enterBtatiana(s, scene);
      break;
    case 'sandbaggingana':
      enterSandbaggingana(s, scene);
      break;
    case 'anagopniks':
      enterAnagopniks(s, scene);
      break;
    case 'bossana':
      enterBossana(s, scene);
      break;
    case 'gopnews_1':
      enterGopnews_1(s, scene);
      break;
    case 'gopnews_2':
      enterGopnews_2(s, scene);
      break;
    case 'gopnews_3':
      enterGopnews_3(s, scene);
      break;
    case 'gopnews_4':
      enterGopnews_4(s, scene);
      break;
    case 'gopnews_5':
      enterGopnews_5(s, scene);
      break;
    case 'gopnews_6':
      enterGopnews_6(s, scene);
      break;
    case 'lena':
      enterLena(s, scene);
      break;
    case 'lera':
      enterLera(s, scene);
      break;
    case 'random_gopfem':
      enterRandomGopfem(s, scene);
      break;
    case 'random_gopmale':
      enterRandomGopmale(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fight_npcdata: LocationDef = {
  name: 'fight_npcdata',
  region: 'other',
  enter: enter,
};
