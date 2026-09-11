import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShellOpen(s: GameState, scene: SceneBuilder): void {
  (s as any).cs_icon_size = ((((s as any).card_in ?? 0)?.['icon_size'] > 0) ? (((s as any).card_in ?? 0)?.['icon_size']) : (48));
  (s as any).cs_col_w = ((s as any).cs_icon_size ?? 0) + 22;
  // TODO-QSP: $result += '<tr>'
  if (((s as any).card_in ?? 0)?.['icon'] !== '') {
    // TODO-QSP: $result += '<td width="<<cs_col_w>>" valign="middle" align="center" style="padding: 10px;">'
    // TODO-QSP: $result += '<img src="<<$card_in[''icon'']>>" width="<<cs_icon_size>>" height="<<cs_icon_size>>" sty...
    // TODO-QSP: $result += '</td>'
  }
  // TODO-QSP: $result += '<td valign="middle" style="padding: 10px 10px 10px <<iif($card_in[''icon''] <> '''', ''0...
  if (((s as any).card_in ?? 0)?.['extra'] !== '') {
    // TODO-QSP: $result += '<div style="display:flex; justify-content:space-between; align-items:baseline; gap:8px;"...
    if (((s as any).card_in ?? 0)?.['title_sub'] !== '') {
      // TODO-QSP: $result += ' <span style="opacity:0.7; font-size:0.9em;"><<$card_in[''title_sub'']>></span>'
    }
    // TODO-QSP: $result += '</span><<$card_in[''extra'']>></div>'
  } else {
    // TODO-QSP: $result += '<div><b><<$card_in[''title'']>></b>'
    if (((s as any).card_in ?? 0)?.['title_sub'] !== '') {
      // TODO-QSP: $result += ' <span style="opacity:0.7; font-size:0.9em;"><<$card_in[''title_sub'']>></span>'
    }
    // TODO-QSP: $result += '</div>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShellClose(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShell(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cards', 'shell_open');
  if (((s as any).card_in ?? 0)?.['body'] !== '') {
    // TODO-QSP: $ch_result += $card_in['body']
  }
  qspCall(s, 'cards', 'shell_close');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSectionOpen(s: GameState, scene: SceneBuilder): void {
  ((s as any).card_in ?? {})['icon'] = ((((s as any).locArgs?.[2] ?? 0) > 0) ? ('images/characters/shared/headshots_main/\' + $str(ARGS[2]) + \'.jpg') : (''));
  ((s as any).card_in ?? {})['icon_size'] = 90;
  ((s as any).card_in ?? {})['title'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).card_in ?? {})['border'] = ((s as any).theme_hex ?? 0)?.['accent'];
  ((s as any).card_in ?? {})['bg'] = qspFunc(s, 'themes', 'alt_color', '');
  qspCall(s, 'cards', 'shell_open');
  // TODO-QSP: *p $result
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSectionClose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cards', 'shell_close');
  // TODO-QSP: *p $result
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'shell_open':
      enterShellOpen(s, scene);
      break;
    case 'shell_close':
      enterShellClose(s, scene);
      break;
    case 'shell':
      enterShell(s, scene);
      break;
    case 'section_open':
      enterSectionOpen(s, scene);
      break;
    case 'section_close':
      enterSectionClose(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const cards: LocationDef = {
  name: 'cards',
  region: 'other',
  enter: enter,
};
