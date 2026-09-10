import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInitFightVars(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_kickboxVars['pcs_points'] = 0;
  (s as any).temp_kickboxVars['npc_points'] = 0;
  (s as any).temp_kickboxVars['round'] = 1;
  (s as any).temp_kickboxVars['time'] = 0;
  (s as any).temp_kickboxVars['max_rounds'] = 3;
  scene.build();
}

function enterGenerateOpponent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'spar') {
    qspCall(s, 'npcgeneratec', '', 1, 'sparring partner', Math.floor(Math.random() * 27) + 19);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).temp_kickboxVars['npc_stren'] = Math.floor(Math.random() * 11) + 10;
    (s as any).temp_kickboxVars['npc_speed'] = Math.floor(Math.random() * 11) + 10;
    (s as any).temp_kickboxVars['npc_agil'] = Math.floor(Math.random() * 11) + 10;
    (s as any).temp_kickboxVars['npc_react'] = Math.floor(Math.random() * 11) + 10;
    (s as any).temp_kickboxVars['npc_vital'] = Math.floor(Math.random() * 11) + 10;
    (s as any).temp_kickboxVars['npc_intel'] = 10;
    (s as any).temp_kickboxVars['npc_will'] = 10;
    (s as any).temp_kickboxVars['npc_jab'] = Math.floor(Math.random() * 16) + 5;
    (s as any).temp_kickboxVars['npc_punch'] = Math.floor(Math.random() * 16) + 5;
    (s as any).temp_kickboxVars['npc_kick'] = Math.floor(Math.random() * 16) + 5;
    (s as any).temp_kickboxVars['npc_def'] = Math.floor(Math.random() * 16) + 5;
  } else {
    if (((s as any).ARGS ?? 0)[2] <= 0) {
      qspCall(s, 'npcgeneratec', '', 1, 'Useless rival', Math.floor(Math.random() * 27) + 19);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
      (s as any).temp_kickboxVars['npc_stren'] = Math.floor(Math.random() * 11) + 10;
      (s as any).temp_kickboxVars['npc_speed'] = Math.floor(Math.random() * 11) + 10;
      (s as any).temp_kickboxVars['npc_agil'] = Math.floor(Math.random() * 11) + 10;
      (s as any).temp_kickboxVars['npc_react'] = Math.floor(Math.random() * 11) + 10;
      (s as any).temp_kickboxVars['npc_vital'] = Math.floor(Math.random() * 11) + 10;
      (s as any).temp_kickboxVars['npc_intel'] = 10;
      (s as any).temp_kickboxVars['npc_will'] = 10;
      (s as any).temp_kickboxVars['npc_jab'] = Math.floor(Math.random() * 21) + 10;
      (s as any).temp_kickboxVars['npc_punch'] = Math.floor(Math.random() * 21) + 10;
      (s as any).temp_kickboxVars['npc_kick'] = Math.floor(Math.random() * 21) + 10;
      (s as any).temp_kickboxVars['npc_def'] = Math.floor(Math.random() * 21) + 10;
    } else {
      qspCall(s, 'npcgeneratec', '', 1, '3rd class rival', Math.floor(Math.random() * 27) + 19);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
      (s as any).temp_kickboxVars['npc_stren'] = Math.floor(Math.random() * 11) + 15;
      (s as any).temp_kickboxVars['npc_speed'] = Math.floor(Math.random() * 11) + 15;
      (s as any).temp_kickboxVars['npc_agil'] = Math.floor(Math.random() * 11) + 15;
      (s as any).temp_kickboxVars['npc_react'] = Math.floor(Math.random() * 11) + 15;
      (s as any).temp_kickboxVars['npc_vital'] = Math.floor(Math.random() * 11) + 15;
      (s as any).temp_kickboxVars['npc_intel'] = 10;
      (s as any).temp_kickboxVars['npc_will'] = 10;
      (s as any).temp_kickboxVars['npc_jab'] = Math.floor(Math.random() * 21) + 15;
      (s as any).temp_kickboxVars['npc_punch'] = Math.floor(Math.random() * 21) + 15;
      (s as any).temp_kickboxVars['npc_kick'] = Math.floor(Math.random() * 21) + 15;
      (s as any).temp_kickboxVars['npc_def'] = Math.floor(Math.random() * 21) + 15;
      if (((s as any).ARGS ?? 0)[2] === 2) {
        qspCall(s, 'npcgeneratec', '', 1, '2rd class rival', Math.floor(Math.random() * 27) + 19);
        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
        (s as any).temp_kickboxVars['npc_stren'] = Math.floor(Math.random() * 11) + 20;
        (s as any).temp_kickboxVars['npc_speed'] = Math.floor(Math.random() * 11) + 20;
        (s as any).temp_kickboxVars['npc_agil'] = Math.floor(Math.random() * 11) + 20;
        (s as any).temp_kickboxVars['npc_react'] = Math.floor(Math.random() * 11) + 20;
        (s as any).temp_kickboxVars['npc_vital'] = Math.floor(Math.random() * 11) + 20;
        (s as any).temp_kickboxVars['npc_intel'] = 10;
        (s as any).temp_kickboxVars['npc_will'] = 10;
        (s as any).temp_kickboxVars['npc_jab'] = Math.floor(Math.random() * 21) + 30;
        (s as any).temp_kickboxVars['npc_punch'] = Math.floor(Math.random() * 21) + 30;
        (s as any).temp_kickboxVars['npc_kick'] = Math.floor(Math.random() * 21) + 30;
        (s as any).temp_kickboxVars['npc_def'] = Math.floor(Math.random() * 21) + 30;
      } else {
        qspCall(s, 'npcgeneratec', '', 1, '1st class rival', Math.floor(Math.random() * 27) + 19);
        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
        (s as any).temp_kickboxVars['npc_stren'] = Math.floor(Math.random() * 11) + 30;
        (s as any).temp_kickboxVars['npc_speed'] = Math.floor(Math.random() * 11) + 30;
        (s as any).temp_kickboxVars['npc_agil'] = Math.floor(Math.random() * 11) + 30;
        (s as any).temp_kickboxVars['npc_react'] = Math.floor(Math.random() * 11) + 30;
        (s as any).temp_kickboxVars['npc_vital'] = Math.floor(Math.random() * 11) + 30;
        (s as any).temp_kickboxVars['npc_intel'] = 10;
        (s as any).temp_kickboxVars['npc_will'] = 10;
        (s as any).temp_kickboxVars['npc_jab'] = Math.floor(Math.random() * 21) + 40;
        (s as any).temp_kickboxVars['npc_punch'] = Math.floor(Math.random() * 21) + 40;
        (s as any).temp_kickboxVars['npc_kick'] = Math.floor(Math.random() * 21) + 40;
        (s as any).temp_kickboxVars['npc_def'] = Math.floor(Math.random() * 21) + 40;
        if (((s as any).ARGS ?? 0)[2] === 4) {
          qspCall(s, 'npcgeneratec', '', 1, 'Excellent rival', Math.floor(Math.random() * 27) + 19);
          qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
          (s as any).temp_kickboxVars['npc_stren'] = Math.floor(Math.random() * 21) + 40;
          (s as any).temp_kickboxVars['npc_speed'] = Math.floor(Math.random() * 21) + 40;
          (s as any).temp_kickboxVars['npc_agil'] = Math.floor(Math.random() * 21) + 40;
          (s as any).temp_kickboxVars['npc_react'] = Math.floor(Math.random() * 21) + 40;
          (s as any).temp_kickboxVars['npc_vital'] = Math.floor(Math.random() * 21) + 40;
          (s as any).temp_kickboxVars['npc_intel'] = 10;
          (s as any).temp_kickboxVars['npc_will'] = 10;
          (s as any).temp_kickboxVars['npc_jab'] = Math.floor(Math.random() * 21) + 60;
          (s as any).temp_kickboxVars['npc_punch'] = Math.floor(Math.random() * 21) + 60;
          (s as any).temp_kickboxVars['npc_kick'] = Math.floor(Math.random() * 21) + 60;
          (s as any).temp_kickboxVars['npc_def'] = Math.floor(Math.random() * 21) + 60;
        } else {
          qspCall(s, 'npcgeneratec', '', 1, 'Best rival in the gym', Math.floor(Math.random() * 27) + 19);
          qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
          (s as any).temp_kickboxVars['npc_stren'] = Math.floor(Math.random() * 41) + 60;
          (s as any).temp_kickboxVars['npc_speed'] = Math.floor(Math.random() * 41) + 60;
          (s as any).temp_kickboxVars['npc_agil'] = Math.floor(Math.random() * 41) + 60;
          (s as any).temp_kickboxVars['npc_react'] = Math.floor(Math.random() * 41) + 60;
          (s as any).temp_kickboxVars['npc_vital'] = Math.floor(Math.random() * 41) + 60;
          (s as any).temp_kickboxVars['npc_intel'] = 10;
          (s as any).temp_kickboxVars['npc_will'] = 10;
          (s as any).temp_kickboxVars['npc_jab'] = Math.floor(Math.random() * 31) + 80;
          (s as any).temp_kickboxVars['npc_punch'] = Math.floor(Math.random() * 31) + 80;
          (s as any).temp_kickboxVars['npc_kick'] = Math.floor(Math.random() * 31) + 80;
          (s as any).temp_kickboxVars['npc_def'] = Math.floor(Math.random() * 31) + 80;
        }
      }
      (s as any).temp_kickboxVars['npc_max_health'] = ((s as any).temp_kickboxVars ?? 0)?.['npc_vital'] * 10 + ((s as any).temp_kickboxVars ?? 0)?.['npc_stren'] * 5;
      (s as any).temp_kickboxVars['npc_health'] = ((s as any).temp_kickboxVars ?? 0)?.['npc_max_health'];
      (s as any).temp_kickboxVars['npc_stam'] = (30 * (2 * ((s as any).temp_kickboxVars ?? 0)?.['npc_vital'] + ((s as any).temp_kickboxVars ?? 0)?.['npc_agil'] + ((s as any).temp_kickboxVars ?? 0)?.['npc_stren']) + 1000) / 13;
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init_fight_vars':
      enterInitFightVars(s, scene);
      break;
    case 'generate_opponent':
      enterGenerateOpponent(s, scene);
      break;
    default:
      enterInitFightVars(s, scene);
      break;
  }
}

export const kickboxing_funcs: LocationDef = {
  name: 'kickboxing_funcs',
  title: 'You take the initiative.',
  region: 'other',
  enter: enter,
};
