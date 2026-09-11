import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDateRate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'love') {
    qspCall(s, 'date_funcs', 'date_mood', 'improve');
    ((s as any).date_ev ?? {})['date_rating'] = (((s as any).date_ev ?? {})['date_rating'] ?? 0) + (2);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'like') {
      qspCall(s, 'date_funcs', 'date_mood', 'improve');
      ((s as any).date_ev ?? {})['date_rating'] = (((s as any).date_ev ?? {})['date_rating'] ?? 0) + (1);
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'dislike') {
        qspCall(s, 'date_funcs', 'date_mood', 'worsen');
        ((s as any).date_ev ?? {})['date_rating'] = (((s as any).date_ev ?? {})['date_rating'] ?? 0) - (1);
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'hate') {
          qspCall(s, 'date_funcs', 'date_mood', 'worsen');
          ((s as any).date_ev ?? {})['date_rating'] = (((s as any).date_ev ?? {})['date_rating'] ?? 0) - (3);
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'hate');
        }
      }
    }
  }
  scene.build();
}

function enterDateMood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'improve') {
    if (((s as any).date_ev ?? 0)?.['talk_mood'] === 'awkward') {
      ((s as any).date_ev ?? {})['talk_mood'] = 'good';
    } else {
      if (((s as any).date_ev ?? 0)?.['talk_mood'] === 'good') {
        ((s as any).date_ev ?? {})['talk_mood'] = 'great';
      } else {
        if (((s as any).date_ev ?? 0)?.['talk_mood'] === 'great') {
          ((s as any).date_ev ?? {})['talk_mood'] = 'amazing';
        } else {
          ((s as any).date_ev ?? {})['talk_mood'] = 'good';
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'worsen') {
      if (((s as any).date_ev ?? 0)?.['talk_mood'] === 'awkward') {
        ((s as any).date_ev ?? {})['talk_mood'] = 'bad';
      } else {
        if (((s as any).date_ev ?? 0)?.['talk_mood'] === 'good') {
          ((s as any).date_ev ?? {})['talk_mood'] = 'awkward';
        } else {
          if (((s as any).date_ev ?? 0)?.['talk_mood'] === 'great') {
            ((s as any).date_ev ?? {})['talk_mood'] = 'good';
          } else {
            if (((s as any).date_ev ?? 0)?.['talk_mood'] === 'amazing') {
              ((s as any).date_ev ?? {})['talk_mood'] = 'great';
            } else {
              ((s as any).date_ev ?? {})['talk_mood'] = 'bad';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterBreakUp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    qspCall(s, 'lover', 'remove_fuckbuddy', ((s as any).npcID ?? 0));
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      qspCall(s, 'lover', 'remove_sugar_daddy', ((s as any).npcID ?? 0));
    } else {
      qspCall(s, 'lover', 'remove', ((s as any).npcID ?? 0));
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['date_ev', 'exit'] },
  ]);
  scene.build();
}

function enterFuckbuddyAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_fuckbuddy', ((s as any).npcID ?? 0));
  ((s as any).npc_no_booty_call ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  scene.build();
}

function enterSugarDaddyAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_sugar_daddy', ((s as any).npcID ?? 0));
  ((s as any).npc_sugar_daddy_price ?? {})[String((s as any).npcID ?? 0)] = ((s as any).date_ev ?? {})?.['sugar_daddy_offer'] * 100;
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'sugar_daddy') {
    // TODO-QSP: $npc_rel_type[$npcID] = 'sugar_daddy'
    ((s as any).date_ev ?? {})['sugar_daddy_count'] = (((s as any).date_ev ?? {})['sugar_daddy_count'] ?? 0) + (1);
  }
  ((s as any).date_ev ?? {})['sugar_daddy_paid'] = 1;
  ((s as any).date_ev ?? {})['prostitution_paid'] = 1;
  scene.build();
}

function enterLoverAdd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
  scene.build();
}

function enterFirstTime(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).npc_date_locs ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';" + $ARGS[1] + ";'))) + 1 <= 0) {
    ((s as any).date_ev ?? {})['first_time'] = 1;
  }
  scene.build();
}

function enterDateTracker(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['tracker'] !== ((s as any).locArgs?.[1] ?? 0)) {
    ((s as any).date_ev ?? {})['loc'] = ((s as any).locArgs?.[1] ?? 0);
    // TODO-QSP: stat[$ARGS[1]] += 1
    if (((((s as any).npc_date_locs ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';" + $ARGS[1] + ";'))) + 1 <= 0) {
      // TODO-QSP: $npc_date_locs[$npcID] += $ARGS[1] + ";"
    }
  }
  scene.build();
}

function enterSetContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['cont_loc'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).date_ev ?? {})['cont_arg'] = ((s as any).locArgs?.[2] ?? 0);
  scene.build();
}

function enterFlashStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_date_flash ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_date_flash ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  qspCall(s, 'arousal_oneline', 'flash', 1);
  scene.build();
}

function enterAlternatePlans(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Hang out at his place?', handler: (st: GameState) => {
    scene.text('"Want to just go back to your place and hang?"');
    scene.text('"Sure."');
    scene.actions([
      { label: 'Go to <<$npcdesc>>\'s place', goto: ['sex_ev_start', 'date_npc_home_start'] },
    ]);
  } },
    { label: 'Wanna have sex? (casual)', handler: (st: GameState) => {
    scene.text('"Wanna just have sex?" you ask.');
    if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Wh-what?"');
      scene.text('"Sex," you say again. "Instead of a date we could just go to your place and have sex."');
      scene.text('"Th-that s-sounds... nice..." he stammers, face turning red. You smile back.');
      scene.text('"Great! Let\'s go."');
    } else {
      scene.text('"I like that plan," he grins.');
      scene.text('"Great! Let\'s go!"');
    }
    // TODO-QSP: dynamic text: You take <<$npcdesc>> by the arm and head off back to his place for sexy times.
    scene.text(`You take ${((s as any).npcdesc ?? 0)} by the arm and head off back to his place for sexy times.`);
    scene.actions([
      { label: 'Go to <<$npcdesc>>\'s place', goto: ['sex_ev_start', 'date_npc_home_start'] },
    ]);
  } },
    { label: 'Wanna have fuck? (sexy)', handler: (st: GameState) => {
    scene.text('"Well..." you say, a sly smirk spreading across your face. "We <i>could</i> skip the date, head back to your place, and fuck each other\'s brains out."');
    if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Th-that s-sounds... nice..." he stammers, face turning red. You smile back.');
      scene.text('"Great! Let\'s go."');
    } else {
      scene.text('"I like that plan," he grins.');
      scene.text('"Great! Let\'s go!"');
    }
    // TODO-QSP: dynamic text: You take <<$npcdesc>> by the arm and head off back to his place for sexy times.
    scene.text(`You take ${((s as any).npcdesc ?? 0)} by the arm and head off back to his place for sexy times.`);
    scene.actions([
      { label: 'Go to <<$npcdesc>>\'s place', goto: ['sex_ev_start', 'date_npc_home_start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'date_rate':
      enterDateRate(s, scene);
      break;
    case 'date_mood':
      enterDateMood(s, scene);
      break;
    case 'break_up':
      enterBreakUp(s, scene);
      break;
    case 'fuckbuddy_add':
      enterFuckbuddyAdd(s, scene);
      break;
    case 'sugar_daddy_add':
      enterSugarDaddyAdd(s, scene);
      break;
    case 'lover_add':
      enterLoverAdd(s, scene);
      break;
    case 'first_time':
      enterFirstTime(s, scene);
      break;
    case 'date_tracker':
      enterDateTracker(s, scene);
      break;
    case 'set_continue':
      enterSetContinue(s, scene);
      break;
    case 'flash_stats':
      enterFlashStats(s, scene);
      break;
    case 'alternate_plans':
      enterAlternatePlans(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_funcs: LocationDef = {
  name: 'date_funcs',
  region: 'other',
  enter: enter,
};
