import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterElectric(s: GameState, scene: SceneBuilder): void {
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
    scene.actions([
      { label: 'Buy the Burny RLG55 VLD [+$func(\'money\', \'get_cost_string\', 43990)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 43990) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).ml_guitars ?? {})['burny-rlg55-vld'] = 1;
      qspCall(s, 'money', 'pay', 43990);
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_gigbag = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'electric'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['epiphone-les-paul-express'] === 0) {
    scene.actions([
      { label: 'Buy the Epiphone Les Paul Express [+$func(\'money\', \'get_cost_string\', 14280)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 14280) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).ml_guitars ?? {})['epiphone-les-paul-express'] = 1;
      qspCall(s, 'money', 'pay', 14280);
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_gigbag = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'electric'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['fender-american-professional-stratocaster'] === 0) {
    scene.actions([
      { label: 'Buy the Fender American Professional Stratocaster [+$func(\'money\', \'get_cost_string\', 179000...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 179000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 179000);
      ((s as any).ml_guitars ?? {})['fender-american-professional-stratocaster'] = 1;
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_hardcase = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'electric'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['fender-player-tele'] === 0) {
    scene.actions([
      { label: 'Buy the Fender Player Tele [+$func(\'money\', \'get_cost_string\', 83000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 83000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).ml_guitars ?? {})['fender-player-tele'] = 1;
      qspCall(s, 'money', 'pay', 83000);
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_hardcase = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'electric'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['gibson-2019-les-paul'] === 0) {
    scene.actions([
      { label: 'Buy the Gibson 2019 Les Paul [+$func(\'money\', \'get_cost_string\', 241000...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 241000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 241000);
      ((s as any).ml_guitars ?? {})['gibson-2019-les-paul'] = 1;
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_hardcase = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'electric'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['yamaha-pacifica-12-rm'] === 0) {
    scene.actions([
      { label: 'Buy the Yamaha Pacifica 012 RM [+$func(\'money\', \'get_cost_string\', 17990)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 17990) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 17990);
      ((s as any).ml_guitars ?? {})['yamaha-pacifica-012-rm'] = 1;
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_gigbag = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'electric'] }]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_musicstore', ''] },
  ]);
  scene.build();
}

function enterAcoustic(s: GameState, scene: SceneBuilder): void {
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
  // TODO-QSP: $temp_html+='<center><font size="+4" color="red"><b>Warning: These guitars don''t yet affect your st...
  // TODO-QSP: $temp_html+='<center><table border=1>
  // TODO-QSP: <tr>
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/martin-hdc-28e.jpg" al...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/martin-d10e-01.jpg" al...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/martin-ed-sheeran.jpg"...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/martin-lx-1.jpg" align...
  // TODO-QSP: </tr>
  // TODO-QSP: </table>
  // TODO-QSP: </center>'
  // TODO-QSP: $func('cleanHTML', $temp_html)
  if (((s as any).ml_guitars ?? 0)?.['martin-hdc-28e'] === 0) {
    scene.actions([
      { label: 'Buy the Martin HDC-28E [+$func(\'money\', \'get_cost_string\', 320000...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 320000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 320000);
      ((s as any).ml_guitars ?? {})['martin-hdc-28e'] = 1;
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_hardcase = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'acoustic'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['martin-d10e-1'] === 0) {
    scene.actions([
      { label: 'Buy the Martin D-10E-01 [+$func(\'money\', \'get_cost_string\', 81990)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 81990) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 81990);
      ((s as any).ml_guitars ?? {})['martin-d10e-01'] = 1;
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_hardcase = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'acoustic'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['martin-ed-sheeran'] === 0) {
    scene.actions([
      { label: 'Buy the Martin Ed Sheeran Signature Edition [+$func(\'money\', \'get_cost_string\', 63900)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 63900) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 63900);
      ((s as any).ml_guitars ?? {})['martin-ed-sheeran'] = 1;
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_hardcase = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'acoustic'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['martin-lx-1'] === 0) {
    scene.actions([
      { label: 'Buy the Martin LX-1 [+$func(\'money\', \'get_cost_string\', 41990)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 41990) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).ml_guitars ?? {})['martin-lx-1'] = 1;
      qspCall(s, 'money', 'pay', 41990);
      (s as any).ml_boughtguitar = ((s as any).ml_boughtguitar ?? 0) + (1);
      (s as any).ml_gigbag = 1;
      ((s as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((s as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((s as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'acoustic'] }]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_musicstore', ''] },
  ]);
  scene.build();
}

function enterAmplifier(s: GameState, scene: SceneBuilder): void {
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
  // TODO-QSP: $temp_html+='<center><font size="+4" color="red"><b>Warning: Right now, these amplifiers have no eff...
  // TODO-QSP: $temp_html+='<center><table border=1>
  // TODO-QSP: <tr>
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/kustom-kg112fx.jpg" al...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/orange-rocker-32.jpg" ...
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/blackstar-artisan-15.j...
  // TODO-QSP: </tr>
  // TODO-QSP: </table>
  // TODO-QSP: </center>'
  // TODO-QSP: $func('cleanHTML', $temp_html)
  if (((s as any).ml_amplifiers ?? 0)?.['kustom-kg112fx'] === 0) {
    scene.actions([
      { label: 'Buy Kustom KG112FX [+$func(\'money\', \'get_cost_string\', 10790)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10790) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 10790);
      ((s as any).ml_amplifiers ?? {})['kustom-kg112fx'] = 1;
      (s as any).ml_boughtamp = ((s as any).ml_boughtamp ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'amplifier'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_amplifiers ?? 0)?.['orange-rocker-32'] === 0) {
    scene.actions([
      { label: 'Buy Orange Rocker 32 [+$func(\'money\', \'get_cost_string\', 99990)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 99990) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 99990);
      ((s as any).ml_amplifiers ?? {})['orange-rocker-32'] = 1;
      (s as any).ml_boughtamp = ((s as any).ml_boughtamp ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'amplifier'] }]);
    }
  } },
    ]);
  }
  if (((s as any).ml_amplifiers ?? 0)?.['blackstar-artisan-15'] === 0) {
    scene.actions([
      { label: 'Buy Blackstar Artisan 15 [+$func(\'money\', \'get_cost_string\', 145900...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 145900) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).ml_amplifiers ?? {})['blackstar-artisan-15'] = 1;
      qspCall(s, 'money', 'pay', 145900);
      (s as any).ml_boughtamp = ((s as any).ml_boughtamp ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'amplifier'] }]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_musicstore', ''] },
  ]);
  scene.build();
}

function enterStudio(s: GameState, scene: SceneBuilder): void {
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
  // TODO-QSP: $temp_html+='<center><table border=1>
  // TODO-QSP: <tr>
  // TODO-QSP: <td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/home-studio.jpg" align...
  // TODO-QSP: </tr>
  // TODO-QSP: </table>
  // TODO-QSP: </center>'
  // TODO-QSP: $func('cleanHTML', $temp_html)
  if (((s as any).ml_studio ?? 0)?.['scarlet-3rd-gen'] === 0) {
    scene.actions([
      { label: 'Buy Focusrite Scarlett Solo Studio 3rd Gen [+$func(\'money\', \'get_cost_string\', 19980)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 19980) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 19980);
      ((s as any).ml_studio ?? {})['scarlet-3rd-gen'] = 1;
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['city_musicstore_stock', 'studio'] }]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_musicstore', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'electric':
      enterElectric(s, scene);
      break;
    case 'acoustic':
      enterAcoustic(s, scene);
      break;
    case 'amplifier':
      enterAmplifier(s, scene);
      break;
    case 'studio':
      enterStudio(s, scene);
      break;
    default:
      enterElectric(s, scene);
      break;
  }
}

export const city_musicstore_stock: LocationDef = {
  name: 'city_musicstore_stock',
  region: 'city',
  enter: enter,
};
