import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterElectric(s: GameState, scene: SceneBuilder): void {
  (s as any).store = 'musicstore';
  (s as any).temp_html = '<center><table border=1>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027electric\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Electric guitars</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027acoustic\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Acoustic guitars</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027amplifier\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Amplifiers</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027studio\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Studio Equipment</a></center>\n</th>\n</table></center>';
  scene.text('<center><font size="+4" color="red"><b>Warning: These guitars don\'t yet have any unique gameplay effects.</b></font></center>');
  scene.img('images/locations/city/citycenter/mall/musicstore/musictorestock/burny-rlg55-vld.jpg');
  scene.text(qspFunc(s, 'cleanHTML', ((s as any).temp_html ?? '')));
  (s as any).temp_html = undefined;
  if (((s as any).ml_guitars ?? 0)?.['burny-rlg55-vld'] === 0) {
    scene.actions([
      { label: 'Buy the Burny RLG55 VLD', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 43990) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['burny-rlg55-vld'] = 1;
      qspCall(st, 'money', 'pay', 43990);
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_gigbag = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'electric');
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['epiphone-les-paul-express'] === 0) {
    scene.actions([
      { label: 'Buy the Epiphone Les Paul Express', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 14280) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['epiphone-les-paul-express'] = 1;
      qspCall(st, 'money', 'pay', 14280);
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_gigbag = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'electric');
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['fender-american-professional-stratocaster'] === 0) {
    scene.actions([
      { label: 'Buy the Fender American Professional Stratocaster', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 179000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 179000);
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['fender-american-professional-stratocaster'] = 1;
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_hardcase = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'electric');
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['fender-player-tele'] === 0) {
    scene.actions([
      { label: 'Buy the Fender Player Tele', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 83000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['fender-player-tele'] = 1;
      qspCall(st, 'money', 'pay', 83000);
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_hardcase = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'electric');
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['gibson-2019-les-paul'] === 0) {
    scene.actions([
      { label: 'Buy the Gibson 2019 Les Paul', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 241000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 241000);
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['gibson-2019-les-paul'] = 1;
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_hardcase = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'electric');
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['yamaha-pacifica-12-rm'] === 0) {
    scene.actions([
      { label: 'Buy the Yamaha Pacifica 012 RM', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 17990) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 17990);
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['yamaha-pacifica-012-rm'] = 1;
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_gigbag = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'electric');
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
  (s as any).store = 'musicstore';
  (s as any).temp_html = '<center><table border=1>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027electric\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Electric guitars</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027acoustic\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Acoustic guitars</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027amplifier\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Amplifiers</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027studio\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Studio Equipment</a></center>\n</th>\n</table></center>';
  (s as any).temp_html = ((s as any).temp_html ?? 0) + ('<center><font size="+4" color="red"><b>Warning: These guitars don\'t yet affect your stats or performance - buying one just gives you a guitar to practice and play with.</b></font></center>');
  (s as any).temp_html = ((s as any).temp_html ?? 0) + ('<center><table border=1>\n<tr>\n<td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/martin-hdc-28e.jpg" align="left"></td>\n<td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/martin-d10e-01.jpg" align="left"></td>\n<td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/martin-ed-sheeran.jpg" align="left"></td>\n<td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/martin-lx-1.jpg" align="left"></td>\n</tr>\n</table>\n</center>');
  scene.text(qspFunc(s, 'cleanHTML', ((s as any).temp_html ?? '')));
  (s as any).temp_html = undefined;
  if (((s as any).ml_guitars ?? 0)?.['martin-hdc-28e'] === 0) {
    scene.actions([
      { label: 'Buy the Martin HDC-28E', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 320000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 320000);
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['martin-hdc-28e'] = 1;
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_hardcase = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'acoustic');
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['martin-d10e-1'] === 0) {
    scene.actions([
      { label: 'Buy the Martin D-10E-01', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 81990) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 81990);
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['martin-d10e-01'] = 1;
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_hardcase = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'acoustic');
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['martin-ed-sheeran'] === 0) {
    scene.actions([
      { label: 'Buy the Martin Ed Sheeran Signature Edition', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 63900) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 63900);
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['martin-ed-sheeran'] = 1;
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_hardcase = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'acoustic');
    }
  } },
    ]);
  }
  if (((s as any).ml_guitars ?? 0)?.['martin-lx-1'] === 0) {
    scene.actions([
      { label: 'Buy the Martin LX-1', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 41990) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).ml_guitars = (st as any).ml_guitars ?? {})['martin-lx-1'] = 1;
      qspCall(st, 'money', 'pay', 41990);
      (st as any).ml_boughtguitar = ((st as any).ml_boughtguitar ?? 0) + (1);
      (st as any).ml_gigbag = 1;
      ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['hasguitar'] = 1;
      if (((st as any).ml_guitar ?? 0)?.['carried'] === 0) {
        ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
      }
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'acoustic');
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
  (s as any).store = 'musicstore';
  (s as any).temp_html = '<center><table border=1>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027electric\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Electric guitars</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027acoustic\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Acoustic guitars</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027amplifier\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Amplifiers</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027studio\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Studio Equipment</a></center>\n</th>\n</table></center>';
  (s as any).temp_html = ((s as any).temp_html ?? 0) + ('<center><font size="+4" color="red"><b>Warning: Right now, these amplifiers have no effect on gameplay!</b></font></center>');
  (s as any).temp_html = ((s as any).temp_html ?? 0) + ('<center><table border=1>\n<tr>\n<td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/kustom-kg112fx.jpg" align="left"></td>\n<td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/orange-rocker-32.jpg" align="left"></td>\n<td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/blackstar-artisan-15.jpg" align="left"></td>\n</tr>\n</table>\n</center>');
  scene.text(qspFunc(s, 'cleanHTML', ((s as any).temp_html ?? '')));
  (s as any).temp_html = undefined;
  if (((s as any).ml_amplifiers ?? 0)?.['kustom-kg112fx'] === 0) {
    scene.actions([
      { label: 'Buy Kustom KG112FX', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10790) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 10790);
      ((st as any).ml_amplifiers = (st as any).ml_amplifiers ?? {})['kustom-kg112fx'] = 1;
      (st as any).ml_boughtamp = ((st as any).ml_boughtamp ?? 0) + (1);
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'amplifier');
    }
  } },
    ]);
  }
  if (((s as any).ml_amplifiers ?? 0)?.['orange-rocker-32'] === 0) {
    scene.actions([
      { label: 'Buy Orange Rocker 32', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 99990) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 99990);
      ((st as any).ml_amplifiers = (st as any).ml_amplifiers ?? {})['orange-rocker-32'] = 1;
      (st as any).ml_boughtamp = ((st as any).ml_boughtamp ?? 0) + (1);
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'amplifier');
    }
  } },
    ]);
  }
  if (((s as any).ml_amplifiers ?? 0)?.['blackstar-artisan-15'] === 0) {
    scene.actions([
      { label: 'Buy Blackstar Artisan 15', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 145900) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).ml_amplifiers = (st as any).ml_amplifiers ?? {})['blackstar-artisan-15'] = 1;
      qspCall(st, 'money', 'pay', 145900);
      (st as any).ml_boughtamp = ((st as any).ml_boughtamp ?? 0) + (1);
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'amplifier');
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
  (s as any).store = 'musicstore';
  (s as any).temp_html = '<center><table border=1>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027electric\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Electric guitars</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027acoustic\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Acoustic guitars</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027amplifier\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Amplifiers</a></center>\n</th>\n<th>\n<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027city_musicstore_stock\u0027\u0027, \u0027\u0027studio\u0027\u0027, \u0027\u0027store\u0027\u0027); return false;">Studio Equipment</a></center>\n</th>\n</table></center>';
  (s as any).temp_html = ((s as any).temp_html ?? 0) + ('<center><table border=1>\n<tr>\n<td><img src="images/locations/city/citycenter/mall/musicstore/musictorestock/home-studio.jpg" align="left"></td>\n</tr>\n</table>\n</center>');
  scene.text(qspFunc(s, 'cleanHTML', ((s as any).temp_html ?? '')));
  (s as any).temp_html = undefined;
  if (((s as any).ml_studio ?? 0)?.['scarlet-3rd-gen'] === 0) {
    scene.actions([
      { label: 'Buy Focusrite Scarlett Solo Studio 3rd Gen', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 19980) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 19980);
      ((st as any).ml_studio = (st as any).ml_studio ?? {})['scarlet-3rd-gen'] = 1;
      qspCall(st, 'stat', '');
      qspGoto(st, 'city_musicstore_stock', 'studio');
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
      enterDefault(s, scene);
      break;
  }
}

export const city_musicstore_stock: LocationDef = {
  name: 'city_musicstore_stock',
  region: 'city',
  enter: enter,
};
