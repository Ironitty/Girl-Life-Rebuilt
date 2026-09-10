import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_cinema', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cinema</b></center>');
  scene.img('images/locations/city/citycenter/mall/cinema/cinema.jpg');
  // TODO-QSP: dynamic text: Small cinema ticket costs ' + $func('money', 'string_price', 300) + '.
  scene.text('Small cinema ticket costs \' + $func(\'money\', \'string_price\', 300) + \'.');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300);
      scene.actions([{ label: 'Continue', goto: ['city_cinema', 'watch_movie'] }]);
    }
    scene.actions([
      { label: 'Watch a movie [+$func(\'money\', \'get_cost_string\', 300)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.text('The cinema is closed.');
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
  ]);
  scene.build();
}

export const city_cinema: LocationDef = {
  name: 'city_cinema',
  title: 'Cinema',
  region: 'city',
  description: ['The cinema is closed.'],
  enter: enter,
};
