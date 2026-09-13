import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selobj ?? 0) === '<center>Refresh</center>') {
    qspCall(s, 'stat', '');
    if (((s as any).stat_cfg ?? 0)?.['android']) {
      // TODO-QSP: pl $stat_msg
    }
  }
  if (((s as any).selobj ?? 0) === '<center>Console</center>') {
    if (((s as any).dynamicCommand ?? 0) === '') {
      // TODO-QSP: exit
    }
  }
  if (((s as any).selobj ?? 0) === '<center>Toggle Debug Variables</center>') {
    if ((!((s as any).objectWindowDebug ?? 0))) {
      (s as any).objectWindowDebug = 1;
    } else {
      (s as any).objectWindowDebug = 0;
    }
    qspCall(s, 'stat', '');
  }
  if (((s as any).selobj ?? 0) === '<center>Add Debug Variable</center>') {
    if (((s as any).tmpVar ?? 0) !== '') {
      qspCall(s, 'obj_din', 'AddDebugVar', ((s as any).tmpVar ?? 0));
      qspCall(s, 'stat', '');
    }
  }
  if (((s as any).selobj ?? 0) === '<center>Delete Debug Variable</center>') {
    if (((s as any).tmpVar ?? 0) !== '') {
      qspCall(s, 'obj_din', 'DeleteDebugVar', ((s as any).tmpVar ?? 0));
      qspCall(s, 'stat', '');
    }
  }
  if (((s as any).selobj ?? 0) === '<center>Switch HTML</center>') {
    (s as any).usehtml = ((((s as any).usehtml ?? 0)) ? (0) : (1));
  }
  if ((String(((s as any).selobj ?? 0)).indexOf(String(':'))) + 1 > 0) {
    (s as any).tmpPos = (String(((s as any).selobj ?? 0)).indexOf(String(':'))) + 1 - 1;
    if (((s as any).tmpVal ?? 0) !== '') {
      if ((String(((s as any).tmpVar ?? 0)).indexOf(String('$'))) + 1 === 1) {
        // TODO-QSP: dyneval('<<$tmpVar>> = "<<$tmpVal>>"')
      } else {
        // TODO-QSP: dyneval('<<$tmpVar>> = <<VAL($tmpVal)>>')
      }
    }
    qspCall(s, 'stat', '');
  }
  if (((s as any).selobj ?? 0) === '<center>-1 Hour</center>') {
    qspCall(s, 'obj_din', '-1 Hour');
  }
  if (((s as any).selobj ?? 0) === '<center>+1 Hour</center>') {
    qspCall(s, 'obj_din', '+1 Hour');
  }
  if (((s as any).selobj ?? 0) === '<center><font color === red>Emergency</font></center>') {
    qspCall(s, 'obj_din', 'emergency');
  }
  if (((s as any).selobj ?? 0) === '<center>Remove debug info</center>') {
    (s as any).debug_warning_closed = 1;
    if (!(s as any).cfg_vars) (s as any).cfg_vars = {}; (s as any).cfg_vars['debug'] = 0;
    // TODO-QSP: showobjs cfg_vars['debug']
    qspCall(s, 'stat', '');
  }
  if (((s as any).selobj ?? 0) === '<center>Toggle Call Trace</center>') {
    if (((s as any).debug ?? 0)?.['trace_shown'] === 0) {
      if (!(s as any).debug) (s as any).debug = {}; (s as any).debug['trace_shown'] = 1;
      qspCall(s, 'stat_display', '');
    } else {
      if (!(s as any).debug) (s as any).debug = {}; (s as any).debug['trace_shown'] = 0;
      qspCall(s, 'stat', '');
    }
  }
  // TODO-QSP: unselect
  scene.build();
}

export const onobjsel: LocationDef = {
  name: 'onobjsel',
  region: 'other',
  enter: enter,
};
