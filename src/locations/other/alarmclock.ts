import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bedroom/bed2.jpg');
  scene.text('<center><h4>Enter the time using the number pad and click on set to change alarm times, don\'t forget to turn your alarm on.</h></center>');
  qspCall(s, 'alarmclock', 'build_table');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    (s as any).bud1 = 0;
    (s as any).bud2 = 0;
    (s as any).bud3 = 0;
    (s as any).bud4 = 0;
    (s as any).numbud = 0;
  }, goto: ['alarmclock', 'fin'] },
    { label: 'Clear time display', handler: (st: GameState) => {
    (s as any).bud1 = 0;
    (s as any).bud2 = 0;
    (s as any).bud3 = 0;
    (s as any).bud4 = 0;
    (s as any).numbud = 0;
  }, goto: ['alarmclock', 'start'] },
  ]);
  scene.build();
}

function enterAlarmDisplay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGetWeekDisplay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGetWeekendDisplay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterBaseAlarmclockText(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterClear(s: GameState, scene: SceneBuilder): void {
  (s as any).bud1 = 0;
  (s as any).bud2 = 0;
  (s as any).bud3 = 0;
  (s as any).bud4 = 0;
  (s as any).numbud = 0;
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterTime(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['alarmOn'] = 1;
  if (((s as any).bud_weekend ?? 0) === 1) {
    if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerEndH'] = ((s as any).bud1 ?? 0) * 10 + ((s as any).bud2 ?? 0);
    if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerEndM'] = ((s as any).bud3 ?? 0) * 10 + ((s as any).bud4 ?? 0);
    if (((s as any).alarmVars ?? 0)?.['timerEndH'] > 23) {
      if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerEndH'] = 0;
    }
    if (((s as any).alarmVars ?? 0)?.['timerEndM'] > 60) {
      if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerEndM'] = 0;
    }
  } else {
    if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerH'] = ((s as any).bud1 ?? 0) * 10 + ((s as any).bud2 ?? 0);
    if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerM'] = ((s as any).bud3 ?? 0) * 10 + ((s as any).bud4 ?? 0);
    if (((s as any).alarmVars ?? 0)?.['timerH'] > 23) {
      if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerH'] = 0;
    }
    if (((s as any).alarmVars ?? 0)?.['timerM'] > 60) {
      if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerM'] = 0;
    }
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 1;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 1;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 1;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 1;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 2;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 2;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 2;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 2;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 3;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 3;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 3;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 3;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 4;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 4;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 4;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 4;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 5;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 5;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 5;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 5;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 6;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 6;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 6;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 6;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 7;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 7;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 7;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 7;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 8;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 8;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 8;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 8;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 9;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 9;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 9;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 9;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 3) {
    (s as any).bud4 = 0;
    (s as any).numbud = 4;
  }
  if (((s as any).numbud ?? 0) === 2) {
    (s as any).bud3 = 0;
    (s as any).numbud = 3;
  }
  if (((s as any).numbud ?? 0) === 1) {
    (s as any).bud2 = 0;
    (s as any).numbud = 2;
  }
  if ((!((s as any).numbud ?? 0))) {
    (s as any).bud1 = 0;
    (s as any).numbud = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bud_weekend ?? 0) === 1) {
    if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerEndH'] = 0;
    if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerEndM'] = 0;
  } else {
    if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerH'] = 0;
    if (!(s as any).alarmVars) (s as any).alarmVars = {}; (s as any).alarmVars['timerM'] = 0;
  }
  (s as any).bud1 = 0;
  (s as any).bud2 = 0;
  (s as any).bud3 = 0;
  (s as any).bud4 = 0;
  (s as any).numbud = 0;
  scene.actions([{ label: 'Continue', goto: ['alarmclock', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterFin(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'menu_loc', 'menu_arg'); } }]);
  scene.build();
}

function enterBuildTable(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numbud ?? 0) === 4) {
  }
  if (((s as any).numbud ?? 0) === 3) {
  }
  if (((s as any).numbud ?? 0) === 2) {
  }
  if (((s as any).numbud ?? 0) === 1) {
  }
  if ((!((s as any).numbud ?? 0))) {
  }
  // TODO-QSP: $numbud_table += '<tr><<$num_html>><a href="exec:gt ''alarmclock'', ''1''">1<<$html_num>>'
  // TODO-QSP: $numbud_table += '<<$num_html>><a href="exec:gt ''alarmclock'', ''2''">2<<$html_num>>'
  // TODO-QSP: $numbud_table += '<<$num_html>><a href="exec:gt ''alarmclock'', ''3''">3<<$html_num>></tr>'
  // TODO-QSP: $numbud_table += '<tr><<$num_html>><a href="exec:gt ''alarmclock'', ''4''">4<<$html_num>>'
  // TODO-QSP: $numbud_table += '<<$num_html>><a href="exec:gt ''alarmclock'', ''5''">5<<$html_num>>'
  // TODO-QSP: $numbud_table += '<<$num_html>><a href="exec:gt ''alarmclock'', ''6''">6<<$html_num>></tr>'
  // TODO-QSP: $numbud_table += '<tr><<$num_html>><a href="exec:gt ''alarmclock'', ''7''">7<<$html_num>>'
  // TODO-QSP: $numbud_table += '<<$num_html>><a href="exec:gt ''alarmclock'', ''8''">8<<$html_num>>'
  // TODO-QSP: $numbud_table += '<<$num_html>><a href="exec:gt ''alarmclock'', ''9''">9<<$html_num>></tr>'
  // TODO-QSP: $numbud_table += '<tr><td colspan=3 align="center"><b><font size="+2"><a href="exec:gt ''alarmclock'...
  // TODO-QSP: $alarmVars_table += '<tr><td><b><a href="exec: bud_weekend = 0 & gt ''alarmclock'', ''Reset''">Reset...
  // TODO-QSP: $alarmVars_table += '<td><b><a href="exec: bud_weekend = 0 & gt ''alarmclock'', ''Time''">Set weekda...
  // TODO-QSP: $alarmVars_table += '<td><b>Currently set for <<func(''time'', ''get_time_string'', alarmVars[''time...
  // TODO-QSP: $alarmVars_table += '<tr><td><b><a href="exec: bud_weekend = 1 & gt ''alarmclock'', ''Reset''">Reset...
  // TODO-QSP: $alarmVars_table += '<td><b><a href="exec: bud_weekend = 1 & gt ''alarmclock'', ''Time''">Set weeken...
  // TODO-QSP: $alarmVars_table += '<td><b>Currently set for <<func(''time'', ''get_time_string'', alarmVars[''time...
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    // TODO-QSP: $alarmVars_table += '<tr><td colspan="3"><b>Use weekend alarm for holidays - ' + iif(alarmVars['alar...
  }
  // TODO-QSP: $alarmVars_table += '<tr><td colspan="3"><b>Your alarm is currently turned ' + iif(alarmVars['alarmO...
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1) {
    // TODO-QSP: $alarmVars_table += '</table></center><center><table border=0 cellpadding=0 cellspacing=10><tr><td><...
  }
  // TODO-QSP: $alarmVars_table += '</b></font></table></center>'
  // TODO-QSP: dynamic text: <<$more_html>><<$alarm_html>><<$even_more_html>><<$numbud_table>>
  scene.text(`${((s as any).more_html ?? 0)}${((s as any).alarm_html ?? 0)}${((s as any).even_more_html ?? 0)}${((s as any).numbud_table ?? 0)}`);
  // TODO-QSP: dynamic text: <<$alarmVars_table>>
  scene.text(`${((s as any).alarmVars_table ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'alarm_display':
      enterAlarmDisplay(s, scene);
      break;
    case 'get_week_display':
      enterGetWeekDisplay(s, scene);
      break;
    case 'get_weekend_display':
      enterGetWeekendDisplay(s, scene);
      break;
    case 'base_alarmclock_text':
      enterBaseAlarmclockText(s, scene);
      break;
    case 'clear':
      enterClear(s, scene);
      break;
    case 'Time':
      enterTime(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    case 'Reset':
      enterReset(s, scene);
      break;
    case 'fin':
      enterFin(s, scene);
      break;
    case 'build_table':
      enterBuildTable(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const alarmclock: LocationDef = {
  name: 'alarmclock',
  title: '<center><h4>Enter the time using the number pad and click on',
  region: 'other',
  enter: enter,
};
