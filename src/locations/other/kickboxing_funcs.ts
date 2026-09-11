import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitFightVars(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_kickboxVars ?? {})['pcs_points'] = 0;
  ((s as any).temp_kickboxVars ?? {})['npc_points'] = 0;
  ((s as any).temp_kickboxVars ?? {})['round'] = 1;
  ((s as any).temp_kickboxVars ?? {})['time'] = 0;
  ((s as any).temp_kickboxVars ?? {})['max_rounds'] = 3;
  scene.build();
}

function enterGenerateOpponent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'spar') {
    qspCall(s, 'npcgeneratec', '', 1, 'sparring partner', Math.floor(Math.random() * 27) + 19);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    ((s as any).temp_kickboxVars ?? {})['npc_stren'] = Math.floor(Math.random() * 11) + 10;
    ((s as any).temp_kickboxVars ?? {})['npc_speed'] = Math.floor(Math.random() * 11) + 10;
    ((s as any).temp_kickboxVars ?? {})['npc_agil'] = Math.floor(Math.random() * 11) + 10;
    ((s as any).temp_kickboxVars ?? {})['npc_react'] = Math.floor(Math.random() * 11) + 10;
    ((s as any).temp_kickboxVars ?? {})['npc_vital'] = Math.floor(Math.random() * 11) + 10;
    ((s as any).temp_kickboxVars ?? {})['npc_intel'] = 10;
    ((s as any).temp_kickboxVars ?? {})['npc_will'] = 10;
    ((s as any).temp_kickboxVars ?? {})['npc_jab'] = Math.floor(Math.random() * 16) + 5;
    ((s as any).temp_kickboxVars ?? {})['npc_punch'] = Math.floor(Math.random() * 16) + 5;
    ((s as any).temp_kickboxVars ?? {})['npc_kick'] = Math.floor(Math.random() * 16) + 5;
    ((s as any).temp_kickboxVars ?? {})['npc_def'] = Math.floor(Math.random() * 16) + 5;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'amateur_fight') {
      if (((s as any).locArgs?.[2] ?? 0) <= 0) {
        qspCall(s, 'npcgeneratec', '', 1, 'Useless rival', Math.floor(Math.random() * 27) + 19);
        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
        ((s as any).temp_kickboxVars ?? {})['npc_stren'] = Math.floor(Math.random() * 11) + 10;
        ((s as any).temp_kickboxVars ?? {})['npc_speed'] = Math.floor(Math.random() * 11) + 10;
        ((s as any).temp_kickboxVars ?? {})['npc_agil'] = Math.floor(Math.random() * 11) + 10;
        ((s as any).temp_kickboxVars ?? {})['npc_react'] = Math.floor(Math.random() * 11) + 10;
        ((s as any).temp_kickboxVars ?? {})['npc_vital'] = Math.floor(Math.random() * 11) + 10;
        ((s as any).temp_kickboxVars ?? {})['npc_intel'] = 10;
        ((s as any).temp_kickboxVars ?? {})['npc_will'] = 10;
        ((s as any).temp_kickboxVars ?? {})['npc_jab'] = Math.floor(Math.random() * 21) + 10;
        ((s as any).temp_kickboxVars ?? {})['npc_punch'] = Math.floor(Math.random() * 21) + 10;
        ((s as any).temp_kickboxVars ?? {})['npc_kick'] = Math.floor(Math.random() * 21) + 10;
        ((s as any).temp_kickboxVars ?? {})['npc_def'] = Math.floor(Math.random() * 21) + 10;
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 1) {
          qspCall(s, 'npcgeneratec', '', 1, '3rd class rival', Math.floor(Math.random() * 27) + 19);
          qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
          ((s as any).temp_kickboxVars ?? {})['npc_stren'] = Math.floor(Math.random() * 11) + 15;
          ((s as any).temp_kickboxVars ?? {})['npc_speed'] = Math.floor(Math.random() * 11) + 15;
          ((s as any).temp_kickboxVars ?? {})['npc_agil'] = Math.floor(Math.random() * 11) + 15;
          ((s as any).temp_kickboxVars ?? {})['npc_react'] = Math.floor(Math.random() * 11) + 15;
          ((s as any).temp_kickboxVars ?? {})['npc_vital'] = Math.floor(Math.random() * 11) + 15;
          ((s as any).temp_kickboxVars ?? {})['npc_intel'] = 10;
          ((s as any).temp_kickboxVars ?? {})['npc_will'] = 10;
          ((s as any).temp_kickboxVars ?? {})['npc_jab'] = Math.floor(Math.random() * 21) + 15;
          ((s as any).temp_kickboxVars ?? {})['npc_punch'] = Math.floor(Math.random() * 21) + 15;
          ((s as any).temp_kickboxVars ?? {})['npc_kick'] = Math.floor(Math.random() * 21) + 15;
          ((s as any).temp_kickboxVars ?? {})['npc_def'] = Math.floor(Math.random() * 21) + 15;
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 2) {
            qspCall(s, 'npcgeneratec', '', 1, '2rd class rival', Math.floor(Math.random() * 27) + 19);
            qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
            ((s as any).temp_kickboxVars ?? {})['npc_stren'] = Math.floor(Math.random() * 11) + 20;
            ((s as any).temp_kickboxVars ?? {})['npc_speed'] = Math.floor(Math.random() * 11) + 20;
            ((s as any).temp_kickboxVars ?? {})['npc_agil'] = Math.floor(Math.random() * 11) + 20;
            ((s as any).temp_kickboxVars ?? {})['npc_react'] = Math.floor(Math.random() * 11) + 20;
            ((s as any).temp_kickboxVars ?? {})['npc_vital'] = Math.floor(Math.random() * 11) + 20;
            ((s as any).temp_kickboxVars ?? {})['npc_intel'] = 10;
            ((s as any).temp_kickboxVars ?? {})['npc_will'] = 10;
            ((s as any).temp_kickboxVars ?? {})['npc_jab'] = Math.floor(Math.random() * 21) + 30;
            ((s as any).temp_kickboxVars ?? {})['npc_punch'] = Math.floor(Math.random() * 21) + 30;
            ((s as any).temp_kickboxVars ?? {})['npc_kick'] = Math.floor(Math.random() * 21) + 30;
            ((s as any).temp_kickboxVars ?? {})['npc_def'] = Math.floor(Math.random() * 21) + 30;
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 3) {
              qspCall(s, 'npcgeneratec', '', 1, '1st class rival', Math.floor(Math.random() * 27) + 19);
              qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
              ((s as any).temp_kickboxVars ?? {})['npc_stren'] = Math.floor(Math.random() * 11) + 30;
              ((s as any).temp_kickboxVars ?? {})['npc_speed'] = Math.floor(Math.random() * 11) + 30;
              ((s as any).temp_kickboxVars ?? {})['npc_agil'] = Math.floor(Math.random() * 11) + 30;
              ((s as any).temp_kickboxVars ?? {})['npc_react'] = Math.floor(Math.random() * 11) + 30;
              ((s as any).temp_kickboxVars ?? {})['npc_vital'] = Math.floor(Math.random() * 11) + 30;
              ((s as any).temp_kickboxVars ?? {})['npc_intel'] = 10;
              ((s as any).temp_kickboxVars ?? {})['npc_will'] = 10;
              ((s as any).temp_kickboxVars ?? {})['npc_jab'] = Math.floor(Math.random() * 21) + 40;
              ((s as any).temp_kickboxVars ?? {})['npc_punch'] = Math.floor(Math.random() * 21) + 40;
              ((s as any).temp_kickboxVars ?? {})['npc_kick'] = Math.floor(Math.random() * 21) + 40;
              ((s as any).temp_kickboxVars ?? {})['npc_def'] = Math.floor(Math.random() * 21) + 40;
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 4) {
                qspCall(s, 'npcgeneratec', '', 1, 'Excellent rival', Math.floor(Math.random() * 27) + 19);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                ((s as any).temp_kickboxVars ?? {})['npc_stren'] = Math.floor(Math.random() * 21) + 40;
                ((s as any).temp_kickboxVars ?? {})['npc_speed'] = Math.floor(Math.random() * 21) + 40;
                ((s as any).temp_kickboxVars ?? {})['npc_agil'] = Math.floor(Math.random() * 21) + 40;
                ((s as any).temp_kickboxVars ?? {})['npc_react'] = Math.floor(Math.random() * 21) + 40;
                ((s as any).temp_kickboxVars ?? {})['npc_vital'] = Math.floor(Math.random() * 21) + 40;
                ((s as any).temp_kickboxVars ?? {})['npc_intel'] = 10;
                ((s as any).temp_kickboxVars ?? {})['npc_will'] = 10;
                ((s as any).temp_kickboxVars ?? {})['npc_jab'] = Math.floor(Math.random() * 21) + 60;
                ((s as any).temp_kickboxVars ?? {})['npc_punch'] = Math.floor(Math.random() * 21) + 60;
                ((s as any).temp_kickboxVars ?? {})['npc_kick'] = Math.floor(Math.random() * 21) + 60;
                ((s as any).temp_kickboxVars ?? {})['npc_def'] = Math.floor(Math.random() * 21) + 60;
              } else {
                qspCall(s, 'npcgeneratec', '', 1, 'Best rival in the gym', Math.floor(Math.random() * 27) + 19);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                ((s as any).temp_kickboxVars ?? {})['npc_stren'] = Math.floor(Math.random() * 41) + 60;
                ((s as any).temp_kickboxVars ?? {})['npc_speed'] = Math.floor(Math.random() * 41) + 60;
                ((s as any).temp_kickboxVars ?? {})['npc_agil'] = Math.floor(Math.random() * 41) + 60;
                ((s as any).temp_kickboxVars ?? {})['npc_react'] = Math.floor(Math.random() * 41) + 60;
                ((s as any).temp_kickboxVars ?? {})['npc_vital'] = Math.floor(Math.random() * 41) + 60;
                ((s as any).temp_kickboxVars ?? {})['npc_intel'] = 10;
                ((s as any).temp_kickboxVars ?? {})['npc_will'] = 10;
                ((s as any).temp_kickboxVars ?? {})['npc_jab'] = Math.floor(Math.random() * 31) + 80;
                ((s as any).temp_kickboxVars ?? {})['npc_punch'] = Math.floor(Math.random() * 31) + 80;
                ((s as any).temp_kickboxVars ?? {})['npc_kick'] = Math.floor(Math.random() * 31) + 80;
                ((s as any).temp_kickboxVars ?? {})['npc_def'] = Math.floor(Math.random() * 31) + 80;
              }
            }
          }
        }
      }
    }
  }
  ((s as any).temp_kickboxVars ?? {})['npc_max_health'] = ((s as any).temp_kickboxVars ?? {})?.['npc_vital'] * 10 + ((s as any).temp_kickboxVars ?? {})?.['npc_stren'] * 5;
  ((s as any).temp_kickboxVars ?? {})['npc_health'] = ((s as any).temp_kickboxVars ?? 0)?.['npc_max_health'];
  ((s as any).temp_kickboxVars ?? {})['npc_stam'] = (30 * (2 * ((s as any).temp_kickboxVars ?? {})?.['npc_vital'] + ((s as any).temp_kickboxVars ?? {})?.['npc_agil'] + ((s as any).temp_kickboxVars ?? {})?.['npc_stren']) + 1000) / 13;
  scene.build();
}

function enterSetInitiative(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_kickboxVars ?? {})['pcs_init'] = ((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0);
  ((s as any).temp_kickboxVars ?? {})['npc_init'] = ((s as any).temp_kickboxVars ?? {})?.['npc_speed'] + ((s as any).temp_kickboxVars ?? {})?.['npc_react'];
  ((s as any).temp_kickboxVars ?? {})['pcs_init_true'] = (Math.floor(Math.random() * (((s as any).temp_kickboxVars ?? {})?.['pcs_init'] + ((s as any).temp_kickboxVars ?? {})?.['pcs_init'] / 5 - ((s as any).temp_kickboxVars ?? {})?.['pcs_init'] - ((s as any).temp_kickboxVars ?? {})?.['pcs_init'] / 5 + 1)) + (((s as any).temp_kickboxVars ?? {})?.['pcs_init'] - ((s as any).temp_kickboxVars ?? {})?.['pcs_init'] / 5));
  ((s as any).temp_kickboxVars ?? {})['npc_init_true'] = (Math.floor(Math.random() * (((s as any).temp_kickboxVars ?? {})?.['npc_init'] + ((s as any).temp_kickboxVars ?? {})?.['npc_init'] / 5 - ((s as any).temp_kickboxVars ?? {})?.['npc_init'] - ((s as any).temp_kickboxVars ?? {})?.['npc_init'] / 5 + 1)) + (((s as any).temp_kickboxVars ?? {})?.['npc_init'] - ((s as any).temp_kickboxVars ?? {})?.['npc_init'] / 5));
  if (((s as any).temp_kickboxVars ?? 0)?.['set_init'] === 0) {
    ((s as any).temp_kickboxVars ?? {})['set_init'] = 1;
    if (((s as any).temp_kickboxVars ?? 0)?.['pcs_init_true'] > ((s as any).temp_kickboxVars ?? 0)?.['npc_init_true']  &&  ((s as any).temp_kickboxVars ?? 0)?.['pcs_inittime'] < 3  ||  ((s as any).temp_kickboxVars ?? 0)?.['npc_inittime'] >= 3) {
      ((s as any).temp_kickboxVars ?? {})['active_init'] = 0;
      ((s as any).temp_kickboxVars ?? {})['pcs_inittime'] = (((s as any).temp_kickboxVars ?? {})['pcs_inittime'] ?? 0) + (1);
      ((s as any).temp_kickboxVars ?? {})['npc_inittime'] = 0;
      scene.text('You take the initiative.');
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['pcs_init_true'] < ((s as any).temp_kickboxVars ?? 0)?.['npc_init_true']  &&  ((s as any).temp_kickboxVars ?? 0)?.['npc_inittime'] < 3  ||  ((s as any).temp_kickboxVars ?? 0)?.['pcs_inittime'] >= 3) {
        ((s as any).temp_kickboxVars ?? {})['active_init'] = 1;
        ((s as any).temp_kickboxVars ?? {})['pcs_inittime'] = 0;
        ((s as any).temp_kickboxVars ?? {})['npc_inittime'] = (((s as any).temp_kickboxVars ?? {})['npc_inittime'] ?? 0) + (1);
        scene.text(`${((s as any).boydesc ?? 0)} took the initiative.`);
      } else {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          ((s as any).temp_kickboxVars ?? {})['active_init'] = 0;
          ((s as any).temp_kickboxVars ?? {})['pcs_inittime'] = (((s as any).temp_kickboxVars ?? {})['pcs_inittime'] ?? 0) + (1);
          ((s as any).temp_kickboxVars ?? {})['npc_inittime'] = 0;
          scene.text('You take the initiative.');
        } else {
          ((s as any).temp_kickboxVars ?? {})['active_init'] = 1;
          ((s as any).temp_kickboxVars ?? {})['pcs_inittime'] = 0;
          ((s as any).temp_kickboxVars ?? {})['npc_inittime'] = (((s as any).temp_kickboxVars ?? {})['npc_inittime'] ?? 0) + (1);
          scene.text(`${((s as any).boydesc ?? 0)} took the initiative.`);
        }
      }
    }
  }
  scene.build();
}

function enterAttack(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'player') {
    if (((s as any).locArgs?.[2] ?? 0) === 'jab') {
      ((s as any).temp_kickboxVars ?? {})['damage'] = (Math.floor(Math.random() * (pcs_stren / 8 - pcs_stren / 12 + 1)) + (pcs_stren / 12));
      ((s as any).temp_kickboxVars ?? {})['hit_mod'] = (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0) + ((s as any).pcs_jab ?? 0)) * 2;
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'punch') {
        ((s as any).temp_kickboxVars ?? {})['damage'] = ((s as any).pcs_stren ?? 0) + (Math.floor(Math.random() * (pcs_stren / 5 - -pcs_stren / 5 + 1)) + (-pcs_stren / 5));
        ((s as any).temp_kickboxVars ?? {})['hit_mod'] = (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0) + ((s as any).pcs_punch ?? 0));
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'kick') {
          ((s as any).temp_kickboxVars ?? {})['damage'] = 3 * ((s as any).pcs_stren ?? 0) + ((s as any).rand ?? 0)(-3 * (((s as any).pcs_stren ?? 0) / 5), 3 * (((s as any).pcs_stren ?? 0) / 5));
          ((s as any).temp_kickboxVars ?? {})['hit_mod'] = (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0) + ((s as any).pcs_kick ?? 0)) / 2;
        }
      }
    }
    ((s as any).temp_kickboxVars ?? {})['hit_chance'] = ((s as any).temp_kickboxVars ?? {})?.['hit_mod'] + (Math.floor(Math.random() * (((s as any).temp_kickboxVars ?? {})?.['hit_mod'] / 5 - -((s as any).temp_kickboxVars ?? {})?.['hit_mod'] / 5 + 1)) + (-((s as any).temp_kickboxVars ?? {})?.['hit_mod'] / 5));
    if (((s as any).temp_kickboxVars ?? 0)?.['damage'] <= 0) {
      ((s as any).temp_kickboxVars ?? {})['damage'] = 1;
    }
    ((s as any).temp_kickboxVars ?? {})['base_def'] = ((s as any).temp_kickboxVars ?? {})?.['npc_agil'] + ((s as any).temp_kickboxVars ?? {})?.['npc_react'] + ((s as any).temp_kickboxVars ?? {})?.['npc_def'];
    ((s as any).temp_kickboxVars ?? {})['defence'] = ((s as any).temp_kickboxVars ?? {})?.['base_def'] + (Math.floor(Math.random() * (((s as any).temp_kickboxVars ?? {})?.['base_def'] / 5 - -((s as any).temp_kickboxVars ?? {})?.['base_def'] / 5 + 1)) + (-((s as any).temp_kickboxVars ?? {})?.['base_def'] / 5));
    if (((s as any).temp_kickboxVars ?? 0)?.['hit_chance'] < ((s as any).temp_kickboxVars ?? 0)?.['defence']) {
      scene.text('You\'ve missed.');
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['hit_chance'] < ((s as any).temp_kickboxVars ?? 0)?.['defence'] * 2) {
        scene.text('Contact');
      } else {
        scene.text('<center><b>HIT</b></center>');
        ((s as any).temp_kickboxVars ?? {})['damage'] = (((s as any).temp_kickboxVars ?? {})['damage'] ?? 0) + (((s as any).temp_kickboxVars ?? {})?.['damage'] / 5);
      }
      ((s as any).temp_kickboxVars ?? {})['npc_health'] = (((s as any).temp_kickboxVars ?? {})['npc_health'] ?? 0) - (((s as any).temp_kickboxVars ?? 0)?.['damage']);
      ((s as any).temp_kickboxVars ?? {})['pcs_points'] = (((s as any).temp_kickboxVars ?? {})['pcs_points'] ?? 0) + (1);
      scene.text(`You have dealt ${((s as any).temp_kickboxVars ?? 0)?.['damage']} points of damage.`);
      if (((s as any).temp_kickboxVars ?? 0)?.['damage'] >= ((s as any).temp_kickboxVars ?? 0)?.['npc_health'] / 5) {
        ((s as any).temp_kickboxVars ?? {})['pcs_points'] = (((s as any).temp_kickboxVars ?? {})['pcs_points'] ?? 0) + (1);
        scene.text(`${((s as any).boydesc ?? 0)} falls to the ground.`);
        if (((s as any).temp_kickboxVars ?? 0)?.['npc_health'] < ((s as any).temp_kickboxVars ?? 0)?.['npc_max_health'] / 4) {
          scene.text(`${((s as any).boydesc ?? 0)} is knocked out. You've won!`);
          ((s as any).temp_kickboxVars ?? {})['KO'] = 1;
        }
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'enemy') {
    if (((s as any).locArgs?.[2] ?? 0) === 'jab') {
      ((s as any).temp_kickboxVars ?? {})['damage'] = (Math.floor(Math.random() * (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] / 8 - ((s as any).temp_kickboxVars ?? {})?.['npc_stren'] / 12 + 1)) + (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] / 12));
      ((s as any).temp_kickboxVars ?? {})['hit_mod'] = (((s as any).temp_kickboxVars ?? {})?.['npc_speed'] + ((s as any).temp_kickboxVars ?? {})?.['npc_react'] + ((s as any).temp_kickboxVars ?? {})?.['npc_jab']) * 2;
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'punch') {
        ((s as any).temp_kickboxVars ?? {})['damage'] = ((s as any).temp_kickboxVars ?? {})?.['npc_stren'] + (Math.floor(Math.random() * (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] / 5 - -((s as any).temp_kickboxVars ?? {})?.['npc_stren'] / 5 + 1)) + (-((s as any).temp_kickboxVars ?? {})?.['npc_stren'] / 5));
        ((s as any).temp_kickboxVars ?? {})['hit_mod'] = (((s as any).temp_kickboxVars ?? {})?.['npc_speed'] + ((s as any).temp_kickboxVars ?? {})?.['npc_react'] + ((s as any).temp_kickboxVars ?? {})?.['npc_punch']);
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'kick') {
          ((s as any).temp_kickboxVars ?? {})['damage'] = 3 * ((s as any).temp_kickboxVars ?? {})?.['npc_stren'] + ((s as any).rand ?? 0)(-3 * (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] / 5), 3 * (((s as any).temp_kickboxVars ?? {})?.['npc_stren'] / 5));
          ((s as any).temp_kickboxVars ?? {})['hit_mod'] = (((s as any).temp_kickboxVars ?? {})?.['npc_speed'] + ((s as any).temp_kickboxVars ?? {})?.['npc_react'] + ((s as any).temp_kickboxVars ?? {})?.['npc_kick']) / 2;
        }
      }
    }
    ((s as any).temp_kickboxVars ?? {})['hit_chance'] = ((s as any).temp_kickboxVars ?? {})?.['hit_mod'] + (Math.floor(Math.random() * (((s as any).temp_kickboxVars ?? {})?.['hit_mod'] / 5 - -((s as any).temp_kickboxVars ?? {})?.['hit_mod'] / 5 + 1)) + (-((s as any).temp_kickboxVars ?? {})?.['hit_mod'] / 5));
    if (((s as any).temp_kickboxVars ?? 0)?.['damage'] <= 0) {
      ((s as any).temp_kickboxVars ?? {})['damage'] = 1;
    }
    ((s as any).temp_kickboxVars ?? {})['base_def'] = ((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0) + ((s as any).pcs_def ?? 0);
    ((s as any).temp_kickboxVars ?? {})['defence'] = ((s as any).temp_kickboxVars ?? {})?.['base_def'] + (Math.floor(Math.random() * (((s as any).temp_kickboxVars ?? {})?.['base_def'] / 5 - -((s as any).temp_kickboxVars ?? {})?.['base_def'] / 5 + 1)) + (-((s as any).temp_kickboxVars ?? {})?.['base_def'] / 5));
    if (((s as any).temp_kickboxVars ?? 0)?.['hit_chance'] < ((s as any).temp_kickboxVars ?? 0)?.['defence']) {
      scene.text('Missed');
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['hit_chance'] < ((s as any).temp_kickboxVars ?? 0)?.['defence'] * 2) {
        scene.text('You\'ve gotten hit.');
      } else {
        scene.text('<center><b>You\'ve gotten hit.</b></center>');
        ((s as any).temp_kickboxVars ?? {})['damage'] = (((s as any).temp_kickboxVars ?? {})['damage'] ?? 0) + (((s as any).temp_kickboxVars ?? {})?.['damage'] / 5);
      }
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (((s as any).temp_kickboxVars ?? 0)?.['damage']);
      ((s as any).temp_kickboxVars ?? {})['npc_points'] = (((s as any).temp_kickboxVars ?? {})['npc_points'] ?? 0) + (1);
      scene.text(`You have received ${((s as any).temp_kickboxVars ?? 0)?.['damage']} points of damage.`);
      if (((s as any).temp_kickboxVars ?? 0)?.['damage'] >= ((s as any).pcs_health ?? 0) / 5) {
        ((s as any).temp_kickboxVars ?? {})['npc_points'] = (((s as any).temp_kickboxVars ?? {})['npc_points'] ?? 0) + (1);
        scene.text('You have fallen to the ground.');
        if (((s as any).pcs_health ?? 0) < ((s as any).healthmax ?? 0) / 4) {
          scene.text('You are knocked out. You\'ve lost!');
          ((s as any).temp_kickboxVars ?? {})['KO'] = 1;
        }
      }
    }
  }
  scene.build();
}

function enterSashAdvancement(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kickbox ?? 0)?.['sash'] === 0) {
    if (((s as any).kickbox ?? 0)?.['advancement'] >= 5) {
      ((s as any).kickbox ?? {})['sash'] = 1;
      ((s as any).kickbox ?? {})['advancement'] = 0;
      ((s as any).kickbox ?? {})['money'] = 200;
      scene.text('Having covered red, yellow and orange in your basic training, you have now been awarded green sash(rank 4).');
    }
  } else {
    if (((s as any).kickbox ?? 0)?.['sash'] === 1) {
      if (((s as any).kickbox ?? 0)?.['advancement'] >= 10) {
        ((s as any).kickbox ?? {})['sash'] = 2;
        ((s as any).kickbox ?? {})['advancement'] = 0;
        ((s as any).kickbox ?? {})['money'] = 500;
        scene.text('You have been awarded purple sash(rank 5).');
      }
    } else {
      if (((s as any).kickbox ?? 0)?.['sash'] === 2) {
        if (((s as any).kickbox ?? 0)?.['advancement'] >= 15) {
          ((s as any).kickbox ?? {})['sash'] = 3;
          ((s as any).kickbox ?? {})['advancement'] = 0;
          ((s as any).kickbox ?? {})['money'] = 1500;
          scene.text('You have been awarded blue sash(rank 6).');
        }
      } else {
        if (((s as any).kickbox ?? 0)?.['sash'] === 3) {
          if (((s as any).kickbox ?? 0)?.['advancement'] >= 20) {
            ((s as any).kickbox ?? {})['sash'] = 4;
            ((s as any).kickbox ?? {})['advancement'] = 0;
            ((s as any).kickbox ?? {})['money'] = 3500;
            scene.text('You have been awarded brown sash(rank 7).');
          }
        } else {
          if (((s as any).kickbox ?? 0)?.['sash'] === 4) {
            if (((s as any).kickbox ?? 0)?.['advancement'] >= 25) {
              ((s as any).kickbox ?? {})['sash'] = 5;
              ((s as any).kickbox ?? {})['advancement'] = 0;
              ((s as any).kickbox ?? {})['money'] = 7500;
              scene.text('You have been awarded black sash, 1st dan.');
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterDisplayHeader(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <b>= = = = = = = = = = = = = (ROUND <<temp_kickboxVars['round']>>) = = = = = = =...
  scene.text(`<b>= = = = = = = = = = = = = (ROUND ${((s as any).temp_kickboxVars ?? 0)?.['round']}) = = = = = = = = = = = = =</b>`);
  if (((s as any).temp_kickboxVars ?? 0)?.['time'] === 0) {
    scene.text('<b>Start of the round</b>');
  } else {
    if (((s as any).temp_kickboxVars ?? 0)?.['time'] === 1) {
      scene.text('<b>Time in round 0:30</b>');
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['time'] === 2) {
        scene.text('<b>Time in round 1:00</b>');
      } else {
        if (((s as any).temp_kickboxVars ?? 0)?.['time'] === 3) {
          scene.text('<b>Time in round 1:30</b>');
        } else {
          if (((s as any).temp_kickboxVars ?? 0)?.['time'] === 4) {
            scene.text('<b>Time in round 2:00</b>');
          } else {
            if (((s as any).temp_kickboxVars ?? 0)?.['time'] === 5) {
              scene.text('<b>Time in round 2:30</b>');
            } else {
              scene.text('<b>Time in round 3:00</b>');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <b><<$boydesc>></b> health <b><font color="red"><<temp_kickboxVars['npc_health']...
  scene.text(`<b>${((s as any).boydesc ?? 0)}</b> health <b><font color="red">${((s as any).temp_kickboxVars ?? 0)?.['npc_health']}</font></b>, Stamina <b><font color="green">${((s as any).temp_kickboxVars ?? 0)?.['npc_stam']}</font></b>`);
  // TODO-QSP: dynamic text: Your health <b><font color="red"><<pcs_health>></font></b>, stamina <b><font col...
  scene.text(`Your health <b><font color="red">${((s as any).pcs_health ?? 0)}</font></b>, stamina <b><font color="green">${((s as any).pcs_stam ?? 0)}</font></b>`);
  scene.text('<b>= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =</b>');
  // TODO-QSP: dynamic text: Your points: <<temp_kickboxVars['pcs_points']>> Opponent's points: <<temp_kickbo...
  scene.text(`Your points: ${((s as any).temp_kickboxVars ?? 0)?.['pcs_points']} Opponent's points: ${((s as any).temp_kickboxVars ?? 0)?.['npc_points']}`);
  scene.text('<b>= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =</b>');
  scene.build();
}

function enterDisplayHeader2(s: GameState, scene: SceneBuilder): void {
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
    case 'set_initiative':
      enterSetInitiative(s, scene);
      break;
    case 'attack':
      enterAttack(s, scene);
      break;
    case 'sash_advancement':
      enterSashAdvancement(s, scene);
      break;
    case 'display_header':
      enterDisplayHeader(s, scene);
      break;
    case 'display_header2':
      enterDisplayHeader2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kickboxing_funcs: LocationDef = {
  name: 'kickboxing_funcs',
  title: 'You take the initiative.',
  region: 'other',
  enter: enter,
};
