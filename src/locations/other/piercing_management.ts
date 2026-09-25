import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'ears') {
    (s as any).result = 24;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'nose') {
      (s as any).result = 7;
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'brow') {
        (s as any).result = 2;
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'lip') {
          (s as any).result = 7;
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'tongue') {
            (s as any).result = 4;
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'navel') {
              (s as any).result = 4;
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'nipples') {
                (s as any).result = 7;
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'pussy') {
                  (s as any).result = 10;
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'piercing_management', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    return;
  }
  (s as any).result = (((s as any).pcs_piercings ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_' + (String((s as any).locArgs?.[2] ?? '')) + '_owned'] !== 0);
  return;
  scene.build();
}

function enterIsPierced(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  (s as any).result = ((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 0;
  return;
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    return;
  }
  (s as any).result = (((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] === String((s as any).locArgs?.[2] ?? ''));
  return;
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    (s as any).result = (((s as any).pcs_piercings ?? 0)?.['total'] > 0);
  } else {
    (s as any).result = (((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0);
  }
  return;
  scene.build();
}

function enterSetManageString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)?.['total'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027main\u0027); return false;">Manage Piercings</a>');
  }
  return;
  scene.build();
}

function enterSetManageAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)?.['total'] > 0) {
    scene.actions([
      { label: 'Manage Piercings', goto: ['piercing_management', 'main'] },
    ]);
  }
  return;
  scene.build();
}

function enterPierce(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 0) {
    return;
  }
  if (qspFunc(s, 'piercing_management', 'get_total', ((s as any).locArgs?.[1] ?? 0)) === 0) {
    return;
  }
  ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
  ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})[((s as any).locArgs?.[1] ?? 0)] = (-999);
  return;
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') <= 0) {
    return;
  }
  if (qspFunc(s, 'piercing_management', 'get_total', ((s as any).locArgs?.[1] ?? 0)) < String((s as any).locArgs?.[2] ?? '')) {
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterPierce(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_' + String(((s as any).locArgs?.[2] ?? 0)) + '_owned'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterWear(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (String((s as any).locArgs?.[1] ?? '') === 'brow'  ||  String((s as any).locArgs?.[1] ?? '') === 'nose'  ||  String((s as any).locArgs?.[1] ?? '') === 'lip'  ||  String((s as any).locArgs?.[1] ?? '') === 'tongue') {
    qspCall(s, 'archetypes', 'gain', 'punk', 'small', 'Facial piercing');
    qspCall(s, 'archetypes', 'gain', 'goth', 'tiny', 'Facial piercing');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'navel') {
      qspCall(s, 'archetypes', 'gain', 'punk', 'tiny', 'Navel piercing');
    }
  }
  return;
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = -((s as any).locArgs?.[2] ?? 0);
  }
  if (((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
    return;
  }
  if (((s as any).pcs_piercings ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_' + (String((s as any).locArgs?.[2] ?? '')) + '_owned'] === 0) {
    return;
  }
  if (((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] < 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
  }
  ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  return;
  scene.build();
}

function enterWearLast(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] >= 0) {
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), -((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)]]; enterWear(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 0) {
    return;
  }
  ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) - (1);
  ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})[((s as any).locArgs?.[1] ?? 0)] = -((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)];
  return;
  scene.build();
}

function enterImage(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'piercing_management', ((s as any).locArgs?.[1] ?? 0) + '_image', ((s as any).locArgs?.[2] ?? 0));
  scene.build();
}

function enterFullReset(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_piercings = undefined;
  return;
  scene.build();
}

function enterCount(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = 0;
  ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = 0;
  if (((s as any).pcs_piercings ?? 0)?.['ears'] !== 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['nose'] !== 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['brow'] !== 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['lip'] !== 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] !== 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['navel'] !== 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['navel'] > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] !== 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['nipples'] > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] !== 0) {
    ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['total'] = ((s as any).pcs_piercings['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0) {
      ((s as any).pcs_piercings = (s as any).pcs_piercings ?? {})['wearing'] = ((s as any).pcs_piercings['wearing'] ?? 0) + (1);
    }
  }
  return;
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'piercing_view', 'init', 'set_exceptions');
  return;
  scene.build();
}

function enterBuy(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    return;
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 3) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = ((s as any).price ?? 0);
  }
  if (((s as any).pcs_piercings ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    scene.img(`${qspFunc(s, 'piercing_management', '<<$ARGS[1]>>_image', ((s as any).locArgs?.[2] ?? ''))}`);
    scene.text(`The tattooist disinfects the area, pierces your ${((s as any).locArgs?.[1] ?? '')} and inserts your chosen piercing.`);
  } else {
    scene.text('You buy the piercing.');
  }
  qspCall(s, 'money', 'pay', ((s as any).locArgs?.[3] ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!((s as any).ward_img_hgt ?? 0))) {
    (s as any).ward_img_hgt = 150;
  }
  scene.text('<center><b>Piercing Management</b></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMirrorTable(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Close Piercing management', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterMirrorTable(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><table border=0 cellspacing=${((s as any).ward_img_hgt ?? '') / 25} cellpadding=5>`);
  scene.text('<tr align="center">');
  scene.text('<th>');
  scene.text('Ear piercings');
  scene.text('</th>');
  scene.text('<th>');
  scene.text('Nose piercing');
  scene.text('</th>');
  scene.text('<th>');
  scene.text('Brow piercing');
  scene.text('</th>');
  scene.text('<th>');
  scene.text('Lip piercing');
  scene.text('</th>');
  scene.text('</tr>');
  scene.text('<tr align="center">');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['ears'] === 0) {
    scene.img('images/pc/body/piercings/unpierced/ears.jpg');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['ears'] < 0) {
      scene.img('images/pc/body/piercings/unpierced/ears.jpg');
    } else {
      scene.img(`${qspFunc(s, 'piercing_management', 'ears_image')}`);
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['nose'] === 0) {
    scene.img('images/pc/body/piercings/unpierced/nose.jpg');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['nose'] < 0) {
      scene.img('images/pc/body/piercings/unpierced/nose.jpg');
    } else {
      scene.img(`${qspFunc(s, 'piercing_management', 'nose_image')}`);
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['brow'] === 0) {
    scene.img('images/pc/body/piercings/unpierced/brow.jpg');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['brow'] < 0) {
      scene.img('images/pc/body/piercings/unpierced/brow.jpg');
    } else {
      scene.img(`${qspFunc(s, 'piercing_management', 'brow_image')}`);
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['lip'] === 0) {
    scene.img('images/pc/body/piercings/unpierced/lip.jpg');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['lip'] < 0) {
      scene.img('images/pc/body/piercings/unpierced/lip.jpg');
    } else {
      scene.img(`${qspFunc(s, 'piercing_management', 'lip_image')}`);
    }
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr align="center">');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['ears'] === 0) {
    scene.text('Not pierced');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['ears'] < 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027wear_last\u0027, \u0027ears\u0027 & gt \u0027piercing_management\u0027); return false;">Wear last</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027remove\u0027, \u0027ears\u0027 & gt \u0027piercing_management\u0027); return false;">Remove</a>');
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['nose'] === 0) {
    scene.text('Not pierced');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['nose'] < 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027wear_last\u0027, \u0027nose\u0027 & gt \u0027piercing_management\u0027); return false;">Wear last</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027remove\u0027, \u0027nose\u0027 & gt \u0027piercing_management\u0027); return false;">Remove</a>');
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['brow'] === 0) {
    scene.text('Not pierced');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['brow'] < 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027wear_last\u0027, \u0027brow\u0027 & gt \u0027piercing_management\u0027); return false;">Wear last</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027remove\u0027, \u0027brow\u0027 & gt \u0027piercing_management\u0027); return false;">Remove</a>');
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['lip'] === 0) {
    scene.text('Not pierced');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['lip'] < 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027wear_last\u0027, \u0027lip\u0027 & gt \u0027piercing_management\u0027); return false;">Wear last</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027remove\u0027, \u0027lip\u0027 & gt \u0027piercing_management\u0027); return false;">Remove</a>');
    }
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr align="center">');
  scene.text('<th>');
  scene.text('Tongue piercing');
  scene.text('</th>');
  scene.text('<th>');
  scene.text('Navel piercings');
  scene.text('</th>');
  scene.text('<th>');
  scene.text('Nipple piercing');
  scene.text('</th>');
  scene.text('<th>');
  scene.text('Pussy piercing');
  scene.text('</th>');
  scene.text('</tr>');
  scene.text('<tr align="center">');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] === 0) {
    scene.img('images/pc/body/piercings/unpierced/tongue.jpg');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] < 0) {
      scene.img('images/pc/body/piercings/unpierced/tongue.jpg');
    } else {
      scene.img(`${qspFunc(s, 'piercing_management', 'tongue_image')}`);
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['navel'] === 0) {
    scene.img('images/pc/body/piercings/unpierced/navel.jpg');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['navel'] < 0) {
      scene.img('images/pc/body/piercings/unpierced/navel.jpg');
    } else {
      scene.img(`${qspFunc(s, 'piercing_management', 'navel_image')}`);
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] === 0) {
    scene.img(`${qspFunc(s, '$body_image', '', 'tits')}`);
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['nipples'] < 0) {
      scene.img(`${qspFunc(s, '$body_image', '', 'tits')}`);
    } else {
      scene.img(`${qspFunc(s, 'piercing_management', 'nipples_image')}`);
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] === 0) {
    scene.img(`${((s as any).pcs_vag_image ?? '')}`);
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] < 0) {
      scene.img(`${((s as any).pcs_vag_image ?? '')}`);
    } else {
      scene.img(`${qspFunc(s, 'piercing_management', 'pussy_image')}`);
    }
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.text('<tr align="center">');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] === 0) {
    scene.text('Not pierced');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] < 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027wear_last\u0027, \u0027tongue\u0027 & gt \u0027piercing_management\u0027); return false;">Wear last</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027remove\u0027, \u0027tongue\u0027 & gt \u0027piercing_management\u0027); return false;">Remove</a>');
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['navel'] === 0) {
    scene.text('Not pierced');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['navel'] < 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027wear_last\u0027, \u0027navel\u0027 & gt \u0027piercing_management\u0027); return false;">Wear last</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027remove\u0027, \u0027navel\u0027 & gt \u0027piercing_management\u0027); return false;">Remove</a>');
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] === 0) {
    scene.text('Not pierced');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['nipples'] < 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027wear_last\u0027, \u0027nipples\u0027 & gt \u0027piercing_management\u0027); return false;">Wear last</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027remove\u0027, \u0027nipples\u0027 & gt \u0027piercing_management\u0027); return false;">Remove</a>');
    }
  }
  scene.text('</td>');
  scene.text('<td>');
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] === 0) {
    scene.text('Not pierced');
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] < 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027wear_last\u0027, \u0027pussy\u0027 & gt \u0027piercing_management\u0027); return false;">Wear last</a>');
    } else {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027piercing_management\u0027, \u0027remove\u0027, \u0027pussy\u0027 & gt \u0027piercing_management\u0027); return false;">Remove</a>');
    }
  }
  scene.text('</td>');
  scene.text('</tr>');
  scene.build();
}

function enterEars(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'ears');
  (s as any).pmm_i = 1;
  do {
    if (((s as any).pcs_piercings ?? 0)['ears_' + (((s as any).pmm_i ?? 0)) + '_owned'] === 1) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027wear/u0027, /u0027ears/u0027); return false;"><img height="250" src="${qspFunc(s, 'piercing_management', 'ears_image', ((s as any).pmm_i ?? ''))}"></a>`);
    }
    (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
    scene.actions([
{ label: 'Return', goto: ['piercing_management', 'main'] },
]);
    return;
  } while (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0));
  scene.build();
}

function enterEarsImage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).pcs_piercings ?? 0)?.['ears']);
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/piercings/c' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  scene.build();
}

function enterNose(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'nose');
  (s as any).pmm_i = 1;
  do {
    if (((s as any).pcs_piercings ?? 0)['nose_' + (((s as any).pmm_i ?? 0)) + '_owned'] === 1) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027wear/u0027, /u0027nose/u0027); return false;"><img height="250" src="${qspFunc(s, 'piercing_management', 'nose_image', ((s as any).pmm_i ?? ''))}"></a>`);
    }
    (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
    scene.actions([
{ label: 'Return', goto: ['piercing_management', 'main'] },
]);
    return;
  } while (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0));
  scene.build();
}

function enterNoseImage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).pcs_piercings ?? 0)?.['nose']);
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/piercings/d' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  scene.build();
}

function enterBrow(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'brow');
  (s as any).pmm_i = 1;
  do {
    if (((s as any).pcs_piercings ?? 0)['brow_' + (((s as any).pmm_i ?? 0)) + '_owned'] === 1) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027wear/u0027, /u0027brow/u0027); return false;"><img height="250" src="${qspFunc(s, 'piercing_management', 'brow_image', ((s as any).pmm_i ?? ''))}"></a>`);
    }
    (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
    scene.actions([
{ label: 'Return', goto: ['piercing_management', 'main'] },
]);
    return;
  } while (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0));
  scene.build();
}

function enterBrowImage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).pcs_piercings ?? 0)?.['brow']);
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/piercings/e' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  scene.build();
}

function enterLip(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'lip');
  (s as any).pmm_i = 1;
  do {
    if (((s as any).pcs_piercings ?? 0)['lip_' + (((s as any).pmm_i ?? 0)) + '_owned'] === 1) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027wear/u0027, /u0027lip/u0027); return false;"><img height="250" src="${qspFunc(s, 'piercing_management', 'lip_image', ((s as any).pmm_i ?? ''))}"></a>`);
    }
    (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
    scene.actions([
{ label: 'Return', goto: ['piercing_management', 'main'] },
]);
    return;
  } while (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0));
  scene.build();
}

function enterLipImage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).pcs_piercings ?? 0)?.['lip']);
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/piercings/b' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  scene.build();
}

function enterTongue(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'tongue');
  (s as any).pmm_i = 1;
  do {
    if (((s as any).pcs_piercings ?? 0)['tongue_' + (((s as any).pmm_i ?? 0)) + '_owned'] === 1) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027wear/u0027, /u0027tongue/u0027); return false;"><img height="250" src="${qspFunc(s, 'piercing_management', 'tongue_image', ((s as any).pmm_i ?? ''))}"></a>`);
    }
    (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
    scene.actions([
{ label: 'Return', goto: ['piercing_management', 'main'] },
]);
    return;
  } while (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0));
  scene.build();
}

function enterTongueImage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).pcs_piercings ?? 0)?.['tongue']);
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/piercings/a' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  scene.build();
}

function enterNavel(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'navel');
  (s as any).pmm_i = 1;
  do {
    if (((s as any).pcs_piercings ?? 0)['navel_' + (((s as any).pmm_i ?? 0)) + '_owned'] === 1) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027wear/u0027, /u0027navel/u0027); return false;"><img height="250" src="${qspFunc(s, 'piercing_management', 'navel_image', ((s as any).pmm_i ?? ''))}"></a>`);
    }
    (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
    scene.actions([
{ label: 'Return', goto: ['piercing_management', 'main'] },
]);
    return;
  } while (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0));
  scene.build();
}

function enterNavelImage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).pcs_piercings ?? 0)?.['navel']);
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/piercings/n' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  scene.build();
}

function enterNipples(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'nipples');
  (s as any).pmm_i = 1;
  do {
    if (((s as any).pcs_piercings ?? 0)['nipples_' + (((s as any).pmm_i ?? 0)) + '_owned'] === 1) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027wear/u0027, /u0027nipples/u0027); return false;"><img height="250" src="${qspFunc(s, 'piercing_management', 'nipples_image', ((s as any).pmm_i ?? ''))}"></a>`);
    }
    (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
    scene.actions([
{ label: 'Return', goto: ['piercing_management', 'main'] },
]);
    return;
  } while (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0));
  scene.build();
}

function enterNipplesImage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).pcs_piercings ?? 0)?.['nipples']);
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/piercings/f' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  scene.build();
}

function enterPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'pussy');
  (s as any).pmm_i = 1;
  do {
    if (((s as any).pcs_piercings ?? 0)['pussy_' + (((s as any).pmm_i ?? 0)) + '_owned'] === 1) {
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027piercing_management/u0027, /u0027wear/u0027, /u0027pussy/u0027); return false;"><img height="250" src="${qspFunc(s, 'piercing_management', 'pussy_image', ((s as any).pmm_i ?? ''))}"></a>`);
    }
    (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
    scene.actions([
{ label: 'Return', goto: ['piercing_management', 'main'] },
]);
    return;
  } while (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0));
  scene.build();
}

function enterPussyImage(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (((s as any).pcs_piercings ?? 0)?.['pussy']);
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/piercings/g' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  (s as any).pmm_total = undefined;
  (s as any).pmm_i = undefined;
  scene.build();
}

function enterDisplayGridShop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  return;
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'piercing_view', 'view_item', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_total':
      enterGetTotal(s, scene);
      break;
    case 'totals':
      enterTotals(s, scene);
      break;
    case 'is_owned':
      enterIsOwned(s, scene);
      break;
    case 'is_pierced':
      enterIsPierced(s, scene);
      break;
    case 'is_wearing':
      enterIsWearing(s, scene);
      break;
    case 'is_wearing_any':
      enterIsWearingAny(s, scene);
      break;
    case 'set_manage_string':
      enterSetManageString(s, scene);
      break;
    case 'set_manage_act':
      enterSetManageAct(s, scene);
      break;
    case 'pierce':
      enterPierce(s, scene);
      break;
    case 'add':
      enterAdd(s, scene);
      break;
    case 'wear':
      enterWear(s, scene);
      break;
    case 'wear_last':
      enterWearLast(s, scene);
      break;
    case 'remove':
      enterRemove(s, scene);
      break;
    case 'image':
      enterImage(s, scene);
      break;
    case 'full_reset':
      enterFullReset(s, scene);
      break;
    case 'count':
      enterCount(s, scene);
      break;
    case 'set_shop_display_exceptions':
      enterSetShopDisplayExceptions(s, scene);
      break;
    case 'buy':
      enterBuy(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    case 'mirror_table':
      enterMirrorTable(s, scene);
      break;
    case 'ears':
      enterEars(s, scene);
      break;
    case 'ears_image':
      enterEarsImage(s, scene);
      break;
    case 'nose':
      enterNose(s, scene);
      break;
    case 'nose_image':
      enterNoseImage(s, scene);
      break;
    case 'brow':
      enterBrow(s, scene);
      break;
    case 'brow_image':
      enterBrowImage(s, scene);
      break;
    case 'lip':
      enterLip(s, scene);
      break;
    case 'lip_image':
      enterLipImage(s, scene);
      break;
    case 'tongue':
      enterTongue(s, scene);
      break;
    case 'tongue_image':
      enterTongueImage(s, scene);
      break;
    case 'navel':
      enterNavel(s, scene);
      break;
    case 'navel_image':
      enterNavelImage(s, scene);
      break;
    case 'nipples':
      enterNipples(s, scene);
      break;
    case 'nipples_image':
      enterNipplesImage(s, scene);
      break;
    case 'pussy':
      enterPussy(s, scene);
      break;
    case 'pussy_image':
      enterPussyImage(s, scene);
      break;
    case 'display_grid_shop':
      enterDisplayGridShop(s, scene);
      break;
    case 'view_item':
      enterViewItem(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const piercing_management: LocationDef = {
  name: 'piercing_management',
  title: 'Piercing Management',
  region: 'other',
  enter: enter,
};
