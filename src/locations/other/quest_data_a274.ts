import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ballet ?? 0)?.['debug'] === 1) {
    ((s as any).debug ?? {})['code'] = 1;
  }
  if (((s as any).qstage ?? 0) !== 0) {
    // TODO-QSP: gs $loc_id, 'quest_body', 'stage_<<qstage>>'
  } else {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc_id'); } }]);
  }
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc_id'); } }]);
  scene.build();
}

function enterQuestBody(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'stage_1') {
    ((s as any).npc_quest ?? {})['q_back'] = 'null';
    if (((s as any).mayaqw ?? 0)?.['path'] >= 1) {
      ((s as any).npc_quest ?? {})['q_next'] = 'stage_2';
    } else {
      ((s as any).npc_quest ?? {})['q_next'] = 'null';
    }
    ((s as any).npc_quest ?? {})['hints'] = 'Attend the Pushken Ballet School and interact with the students.';
    ((s as any).npc_quest ?? {})['body'] = 'Build Maya\'s trust: Meet Maya at the Residential Dance School in Pushkin.';
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'stage_2') {
    ((s as any).npc_quest ?? {})['q_back'] = 'stage_1';
    if (((s as any).mayaqw ?? 0)?.['path'] >= 3) {
      ((s as any).npc_quest ?? {})['q_next'] = 'stage_3';
    } else {
      ((s as any).npc_quest ?? {})['q_next'] = 'null';
    }
    ((s as any).npc_quest ?? {})['q_next'] = 'null';
    ((s as any).npc_quest ?? {})['hints'] = 'Accept Maya\'s invitation.';
    if (((s as any).mayaqw ?? 0)?.['grave'] === 0) {
      ((s as any).npc_quest ?? {})['body'] = 'Build Maya\'s trust: Continue to meet and talk to Maya.';
    } else {
      if (((s as any).mayaqw ?? 0)?.['grave'] === -1) {
        ((s as any).npc_quest ?? {})['body'] = 'You spent the evening dedicated to studying ballet and ignored Maya\'s visit to your room.';
      } else {
        if (((s as any).mayaqw ?? 0)?.['grave'] === 1) {
          ((s as any).npc_quest ?? {})['body'] = 'You ignored Maya\'s first knock when she came to visit.';
        } else {
          if (((s as any).mayaqw ?? 0)?.['grave'] === 3) {
            ((s as any).npc_quest ?? {})['body'] = 'You invited Maya into your room and had a brief heartfelt conversation about her past.';
          } else {
            if (((s as any).mayaqw ?? 0)?.['grave'] === 4) {
              ((s as any).npc_quest ?? {})['body'] = 'You went to graveyard and supported Maya in her grief, and had a hearftelt conversation with her afterwards in your room.';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterDebug(s: GameState, scene: SceneBuilder): void {
  scene.text('Event init failed, $ARGS not set.');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'quest_body':
      enterQuestBody(s, scene);
      break;
    case 'debug':
      enterDebug(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const quest_data_a274: LocationDef = {
  name: 'quest_data_a274',
  title: 'Event init failed, $ARGS not set.',
  region: 'other',
  enter: enter,
};
