import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterQueueAlert(s: GameState, scene: SceneBuilder): void {
  (s as any).sd_qa['text'] = (((s as any).locArgs?.[2] ?? 0) !== ''  &&  ((s as any).locArgs?.[2] ?? 0) !== 'none') ? (qspFunc(s, 'wrap', '$ARGS[2]', ((s as any).locArgs?.[1] ?? 0))) : (((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: $sd_alerts[] = $sd_qa['text']
  return;
  scene.build();
}

function enterQueueMsg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[3] ?? 0) === 'pos'  ||  ((s as any).locArgs?.[3] ?? 0) === 'const') {
    (s as any).sd_qm['icon_arg'] = '';
    (s as any).sd_qm['row_arg'] = 0;
    (s as any).sd_qm['action_arg'] = '';
    (s as any).sd_qm['gate'] = ((s as any).locArgs?.[3] ?? 0);
  } else {
    (s as any).sd_qm['icon_arg'] = ((s as any).locArgs?.[3] ?? 0);
    (s as any).sd_qm['row_arg'] = qspUntranslated(s, "ARGS[4]", { location: "stat_display_compute" });
    (s as any).sd_qm['action_arg'] = '';
    (s as any).sd_qm['gate'] = ((s as any).locArgs?.[5] ?? 0);
    (s as any).sd_qm['icon_arg'] = ((s as any).locArgs?.[3] ?? 0);
    (s as any).sd_qm['row_arg'] = qspUntranslated(s, "ARGS[4]", { location: "stat_display_compute" });
    (s as any).sd_qm['action_arg'] = ((s as any).locArgs?.[5] ?? 0);
    (s as any).sd_qm['gate'] = ((s as any).locArgs?.[6] ?? 0);
  }
  (s as any).sd_qm['title'] = (((s as any).stat_texts ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_tooltip'] !== '') ? (((s as any).stat_texts ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '((s as any)._tooltip ?? 0)']) : (((s as any).stat_texts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]);
  (s as any).sd_qm['display'] = ((s as any).stat_texts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).sd_qm ?? 0)?.['action_arg'] !== '') {
    (s as any).sd_qm['action'] = ((s as any).sd_qm ?? 0)?.['action_arg'];
  } else {
    (s as any).sd_qm['action'] = 'msg $stat_texts[\' + $ARGS[1] + \']';
    (s as any).sd_qm['action'] = 'msg $stat_texts[\' + $ARGS[1] + \'_tooltip\']';
  }
  if (((s as any).menu_off ?? 0)  &&  ((s as any).sd_qm ?? 0)?.['action_arg'] !== '') {
    (s as any).sd_qm['action'] = 'msg $func(\'wrap\', \'v_neg\', \'You can\'t use the menu right now.\')';
  }
  if (((s as any).sd_qm ?? 0)?.['icon_arg'] !== ''  &&  ((qspUntranslated(s, "\u00001\u0000", { location: "stat_display_compute" })).indexOf(('|'))) + 1 > 0) {
    if (((s as any).theme ?? 0)?.['is_dark'] === 0) {
      (s as any).sd_qm['icon'] = ((((s as any).sd_qm ?? 0)?.['icon_arg']).slice((1)-1, ((1)-1)+(((((s as any).sd_qm ?? 0)?.['icon_arg']).indexOf(('|'))) + 1 - 1)));
    } else {
      (s as any).sd_qm['icon'] = ((((s as any).sd_qm ?? 0)?.['icon_arg']).slice((((((s as any).sd_qm ?? 0)?.['icon_arg']).indexOf(('|'))) + 1 + 1)-1));
    }
  } else {
    (s as any).sd_qm['icon'] = ((s as any).sd_qm ?? 0)?.['icon_arg'];
  }
  (s as any).sd_qm['bg_color'] = '';
  if (((qspUntranslated(s, "\u00000\u0000", { location: "stat_display_compute" })).indexOf((':'))) + 1 > 0) {
    (s as any).sd_qm['bg_color'] = ((((s as any).sd_qm ?? 0)?.['icon']).slice((((((s as any).sd_qm ?? 0)?.['icon']).indexOf((':'))) + 1 + 1)-1));
    (s as any).sd_qm['icon'] = ((((s as any).sd_qm ?? 0)?.['icon']).slice((1)-1, ((1)-1)+(((((s as any).sd_qm ?? 0)?.['icon']).indexOf((':'))) + 1 - 1)));
  }
  if (((s as any).sd_qm ?? 0)?.['gate'] === 'pos') {
    if (((s as any).stat_cfg ?? 0)?.['show_positive_icons'] === 0) {
      (s as any).sd_qm['icon'] = '';
    }
    if (((s as any).stat_cfg ?? 0)?.['show_positive_texts'] === 0) {
      (s as any).sd_qm['display'] = '';
    }
  } else {
    if (((s as any).stat_cfg ?? 0)?.['show_constant_texts'] === 0) {
      (s as any).sd_qm['display'] = '';
    }
  }
  if (((s as any).sd_qm ?? 0)?.['icon'] !== ''  &&  (((s as any).stat_cfg ?? 0)?.['msg_display_mode'] === 0  ||  ((s as any).stat_cfg ?? 0)?.['msg_display_mode'] === 1)) {
    if (((s as any).sd_qm ?? 0)?.['bg_color'] !== '') {
      (s as any).sd_qm['final_icon'] = '<a href="exec: <<$sd_qm[\'action\']>>"><span style="display:inline-block;background:<<$sd_qm[\'bg_color\']>>;border-radius:12px;width:<<stat_cfg[\'icon_height\']>>px;height:<<stat_cfg[\'icon_height\']>>px;padding:5%;box-sizing:border-box;"><img src="images/system/icons/<<$sd_qm[\'icon\']>>.png" title="<<$sd_qm[\'title\']>>" style="width:100%;height:100%;display:block;"></span></a>';
    } else {
      (s as any).sd_qm['final_icon'] = '<a href="exec: <<$sd_qm[\'action\']>>"><img src="images/system/icons/<<$sd_qm[\'icon\']>>.png" title="<<$sd_qm[\'title\']>>" height="<<stat_cfg[\'icon_height\']>>"></a>';
    }
    if (((s as any).sd_qm ?? 0)?.['row_arg'] === 1) {
      // TODO-QSP: $sd_icons_1[] = $sd_qm['final_icon']
    } else {
      // TODO-QSP: $sd_icons_2[] = $sd_qm['final_icon']
      if (((s as any).sd_qm ?? 0)?.['row_arg'] === 3) {
        // TODO-QSP: $sd_icons_3[] = $sd_qm['final_icon']
      } else {
        // TODO-QSP: $sd_icons_4[] = $sd_qm['final_icon']
      }
    }
    if (((s as any).sd_qm ?? 0)?.['display'] !== ''  &&  (((s as any).stat_cfg ?? 0)?.['msg_display_mode'] === 0  ||  ((s as any).stat_cfg ?? 0)?.['msg_display_mode'] === 2  ||  ((s as any).sd_qm ?? 0)?.['icon'] === '')) {
      (s as any).sd_qm['final_text'] = ((s as any).iif ?? 0)(((s as any).locArgs?.[2] ?? 0) !== '', qspFunc(s, 'wrap', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "\u00000\u0000", { location: "stat_display_compute" })), ((s as any).sd_qm ?? 0)?.['display']);
      // TODO-QSP: $sd_texts[] = $sd_qm['final_text']
    }
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'queue_alert':
      enterQueueAlert(s, scene);
      break;
    case 'queue_msg':
      enterQueueMsg(s, scene);
      break;
    default:
      enterQueueAlert(s, scene);
      break;
  }
}

export const stat_display_compute: LocationDef = {
  name: 'stat_display_compute',
  title: 'bimbo',
  region: 'other',
  enter: enter,
};
