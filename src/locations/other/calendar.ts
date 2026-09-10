import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterShow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] > 0) {
    (s as any).calendar_ui_week_start = qspUntranslated(s, "ARGS[1]", { location: "calendar" });
  } else {
    (s as any).calendar_ui_week_start = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
  }
  qspCall(s, 'calendar_schedule', 'build_week_schedule', ((s as any).calendar_ui_week_start ?? 0));
  // TODO-QSP: $result += '<a href="exec: gs ''calendar'', ''navigate'', ''prev''">« Previous Week</a> | '
  // TODO-QSP: $result += '<a href="exec: gs ''calendar'', ''navigate'', ''today''">Today</a> | '
  // TODO-QSP: $result += '<a href="exec: gs ''calendar'', ''navigate'', ''next''">Next Week »</a>'
  // TODO-QSP: $result += '</div></center>'
  // TODO-QSP: $result +=  $func('calendar_render', 'render_calendar')
  qspCall(s, 'journal', 'journalmenu');
  // TODO-QSP: $result
  return;
  scene.build();
}

function enterNavigate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_nav_direction ?? 0) === 'prev') {
    (s as any).calendar_ui_week_start = ((s as any).calendar_ui_week_start ?? 0) - (7);
  } else {
    (s as any).calendar_ui_week_start = ((s as any).calendar_ui_week_start ?? 0) + (7);
    if (((s as any).temp_nav_direction ?? 0) === 'today') {
      (s as any).calendar_ui_week_start = ((s as any).daystart ?? 0) - ((s as any).week ?? 0) + 1;
    }
    qspCall(s, 'calendar', 'show', ((s as any).calendar_ui_week_start ?? 0));
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'show':
      enterShow(s, scene);
      break;
    case 'navigate':
      enterNavigate(s, scene);
      break;
    default:
      enterShow(s, scene);
      break;
  }
}

export const calendar: LocationDef = {
  name: 'calendar',
  region: 'other',
  enter: enter,
};
