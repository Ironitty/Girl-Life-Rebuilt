import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: <th>
  // TODO-QSP: <center><a href="exec:gs ''city_musicstore_stock'', ''electric'', ''store'', ''<<$store>>''">Electri...
  // TODO-QSP: </th>
  // TODO-QSP: <th>
  // TODO-QSP: <center><a href="exec:gs ''city_musicstore_stock'', ''acoustic'', ''store'', ''<<$store>>''">Acousti...
  // TODO-QSP: </th>
  // TODO-QSP: <th>
  // TODO-QSP: <center><a href="exec:gs ''city_musicstore_stock'', ''amplifier'', ''store'', ''<<$store>>''">Amplif...
  // TODO-QSP: </th>
  // TODO-QSP: <th>
  // TODO-QSP: <center><a href="exec:gs ''city_musicstore_stock'', ''studio'', ''store'', ''<<$store>>''">Studio Eq...
  // TODO-QSP: </th>
  // TODO-QSP: </table></center>'
  // TODO-QSP: dynamic text: <center><font size="+4" color="red"><b>Warning: These guitars don't yet have any...
  scene.text('<center><font size="+4" color="red"><b>Warning: These guitars don\'t yet have any unique gameplay effects.</b></font></center>');
  // TODO-QSP: '<center><table border=1>
  // TODO-QSP: <tr>
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/burny-rlg55-vld.jpg" a...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/epiphone-les-paul-expr...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/fender-american-profes...
  // TODO-QSP: </tr>
  // TODO-QSP: <tr>
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/fender-player-tele.jpg...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/gibson-2019-les-paul.j...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/yamaha-pacifica-012-rm...
  // TODO-QSP: </tr>
  // TODO-QSP: </table>
  // TODO-QSP: </center>'
  // TODO-QSP: $func('cleanHTML', $temp_html)
  if (((s as any).ml_guitars ?? 0)?.['burny-rlg55-vld'] === 0) {
    if (qspFunc(s, 'money', 'can_afford', 43990) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      (s as any).ml_guitars['burny-rlg55-vld'] = 1;
      qspCall(s, 'money', 'pay', 43990);
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_gigbag = 1;
      (s as any).ml_guitar['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        (s as any).ml_guitar['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'electric'] }]);
    }
    scene.actions([
      { label: 'Buy the Burny RLG55 VLD [+$func(\'money\', \'get_cost_string\', 43990)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_musicstore', ''] },
  ]);
  scene.build();
}

export const city_musicstore_stock: LocationDef = {
  name: 'city_musicstore_stock',
  region: 'city',
  enter: enter,
};
