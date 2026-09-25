import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_wkey = ((((String(((s as any).locArgs?.[0] ?? 0)).indexOf(String(' '))) + 1) > 0) ? ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(((String(((s as any).locArgs?.[0] ?? 0)).indexOf(String(' '))) + 1) - 1)))) : (((s as any).locArgs?.[0] ?? 0)));
  (s as any).temp_wmods = ' ' + ((s as any).locArgs?.[0] ?? 0) + ' ';
  if (((s as any).temp_wkey ?? 0) === 'none'  ||  ((s as any).temp_wkey ?? 0) === '') {
    (s as any).temp_color = qspFunc(s, 'shortgs', 'rgb_to_hex', (((s as any).theme ?? 0)?.['fcolor']));
  } else {
    if (((s as any).temp_wkey ?? 0) === 'preppy') {
      (s as any).temp_color = (((s as any).theme_hex ?? 0)?.['accent']);
    } else {
      if (((s as any).temp_wkey ?? 0) === 'prude') {
        (s as any).temp_color = (((s as any).theme_hex ?? 0)?.['neutral']);
      } else {
        (s as any).temp_color = (((s as any).theme_hex ?? 0)?.[String((s as any).temp_wkey ?? 0)] ?? 0);
      }
    }
  }
  (s as any).result = '<font color="' + ((s as any).temp_color ?? 0) + '">' + ((s as any).locArgs?.[1] ?? 0) + '</font>';
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' b '))) + 1) > 0) {
    (s as any).result = '<b>' + ((s as any).result ?? 0) + '</b>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' i '))) + 1) > 0) {
    (s as any).result = '<i>' + ((s as any).result ?? 0) + '</i>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' u '))) + 1) > 0) {
    (s as any).result = '<u>' + ((s as any).result ?? 0) + '</u>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' s '))) + 1) > 0) {
    (s as any).result = '<s>' + ((s as any).result ?? 0) + '</s>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' center '))) + 1) > 0) {
    (s as any).result = '<center>' + ((s as any).result ?? 0) + '</center>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h1 '))) + 1) > 0) {
    (s as any).result = '<h1>' + ((s as any).result ?? 0) + '</h1>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h2 '))) + 1) > 0) {
    (s as any).result = '<h2>' + ((s as any).result ?? 0) + '</h2>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h3 '))) + 1) > 0) {
    (s as any).result = '<h3>' + ((s as any).result ?? 0) + '</h3>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h4 '))) + 1) > 0) {
    (s as any).result = '<h4>' + ((s as any).result ?? 0) + '</h4>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h5 '))) + 1) > 0) {
    (s as any).result = '<h5>' + ((s as any).result ?? 0) + '</h5>';
  }
  if (((String(((s as any).temp_wmods ?? 0)).indexOf(String(' h6 '))) + 1) > 0) {
    (s as any).result = '<h6>' + ((s as any).result ?? 0) + '</h6>';
  }
  (s as any).temp_color = undefined;
  (s as any).temp_wkey = undefined;
  (s as any).temp_wmods = undefined;
  scene.build();
}

export const wrap: LocationDef = {
  name: 'wrap',
  region: 'other',
  enter: enter,
};
