import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'ears') {
    (s as any).result = 24;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'nose') {
      (s as any).result = 7;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'brow') {
        (s as any).result = 2;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'lip') {
          (s as any).result = 7;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'tongue') {
            (s as any).result = 4;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'navel') {
              (s as any).result = 4;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'nipples') {
                (s as any).result = 7;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'pussy') {
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
  // TODO-QSP: end
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'piercing_management', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  (s as any).result = (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_owned'] !== 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsPierced(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  (s as any).result = ((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  (s as any).result = (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] === ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).result = (((s as any).pcs_piercings ?? 0)?.['total'] > 0);
  } else {
    (s as any).result = (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetManageString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)?.['total'] > 0) {
    scene.text('<a href="exec: gt \'piercing_management\', \'main\'">Manage Piercings</a>');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetManageAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)?.['total'] > 0) {
    scene.actions([
      { label: 'Manage Piercings', goto: ['piercing_management', 'main'] },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPierce(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'piercing_management', 'get_total', ((s as any).locArgs?.[1] ?? 0)) === 0) {
    // TODO-QSP: exit
  }
  ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
  // TODO-QSP: pcs_piercings[$ARGS[1]] = -999
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'piercing_management', 'get_total', ((s as any).locArgs?.[1] ?? 0)) < ((s as any).locArgs?.[2] ?? 0)) {
    // TODO-QSP: exit
  }
  qspCall(s, 'piercing_management', 'pierce', ((s as any).locArgs?.[1] ?? 0));
  ((s as any).pcs_piercings ?? {})['' + String((s as any).$ARGS[1] || '') + '_' + String((s as any).ARGS[2] || '') + '_owned'] = 1;
  // TODO-QSP: gs 'piercing_management', 'wear', $ARGS[1], ARGS[2]
  if (((s as any).locArgs?.[1] ?? 0) === 'brow'  ||  ((s as any).locArgs?.[1] ?? 0) === 'nose'  ||  ((s as any).locArgs?.[1] ?? 0) === 'lip'  ||  ((s as any).locArgs?.[1] ?? 0) === 'tongue') {
    qspCall(s, 'archetypes', 'gain', 'punk', 'small', 'Facial piercing');
    qspCall(s, 'archetypes', 'gain', 'goth', 'tiny', 'Facial piercing');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'navel') {
      qspCall(s, 'archetypes', 'gain', 'punk', 'tiny', 'Navel piercing');
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[2] = -((s as any).ARGS ?? 0)[2];
  }
  if (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0  ||  (!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  if (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).locArgs?.[2] ?? 0) + '_owned'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] < 0) {
    ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
  }
  // TODO-QSP: pcs_piercings[$ARGS[1]] = ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWearLast(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] >= 0) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gs 'piercing_management', 'wear', $ARGS[1], -pcs_piercings[$ARGS[1]]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 0) {
    // TODO-QSP: exit
  }
  ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) - (1);
  // TODO-QSP: pcs_piercings[$ARGS[1]] = -pcs_piercings[$ARGS[1]]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterImage(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterFullReset(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCount(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_piercings ?? {})['total'] = 0;
  ((s as any).pcs_piercings ?? {})['wearing'] = 0;
  if (((s as any).pcs_piercings ?? 0)?.['ears'] !== 0) {
    ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0) {
      ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['nose'] !== 0) {
    ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0) {
      ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['brow'] !== 0) {
    ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0) {
      ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['lip'] !== 0) {
    ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0) {
      ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] !== 0) {
    ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
      ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['navel'] !== 0) {
    ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['navel'] > 0) {
      ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] !== 0) {
    ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['nipples'] > 0) {
      ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] !== 0) {
    ((s as any).pcs_piercings ?? {})['total'] = (((s as any).pcs_piercings ?? {})['total'] ?? 0) + (1);
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0) {
      ((s as any).pcs_piercings ?? {})['wearing'] = (((s as any).pcs_piercings ?? {})['wearing'] ?? 0) + (1);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'piercing_view', 'init', 'set_exceptions');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 3) {
    ((s as any).ARGS ?? {})[3] = ((s as any).price ?? 0);
  }
  if (((s as any).pcs_piercings ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    scene.img(`${0}_image', ARGS[2])>>`);
    // TODO-QSP: dynamic text: The tattooist disinfects the area, pierces your <<$ARGS[1]>> and inserts your ch...
    scene.text(`The tattooist disinfects the area, pierces your ${((s as any).locArgs?.[1] ?? 0)} and inserts your chosen piercing.`);
  } else {
    scene.text('You buy the piercing.');
  }
  // TODO-QSP: gs 'money', 'pay', ARGS[3]
  // TODO-QSP: gs 'piercing_management', 'add', $ARGS[1], ARGS[2]
  qspCall(s, 'piercing_management', 'count');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
  qspCall(s, 'piercing_management', 'mirror_table');
  // TODO-QSP: end
  scene.actions([
    { label: 'Close Piercing management', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterMirrorTable(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: *p  '<center><table border=0 cellspacing=<<ward_img_hgt / 25>> cellpadding=5>'
  // TODO-QSP: *p    '<tr align="center">'
  // TODO-QSP: *p      '<th>'
  // TODO-QSP: *p        'Ear piercings'
  // TODO-QSP: *p      '</th>'
  // TODO-QSP: *p      '<th>'
  // TODO-QSP: *p        'Nose piercing'
  // TODO-QSP: *p      '</th>'
  // TODO-QSP: *p      '<th>'
  // TODO-QSP: *p        'Brow piercing'
  // TODO-QSP: *p      '</th>'
  // TODO-QSP: *p      '<th>'
  // TODO-QSP: *p        'Lip piercing'
  // TODO-QSP: *p      '</th>'
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr align="center">'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['ears'] === 0) {
    // TODO-QSP: *p      '<img height=<<ward_img_hgt>> src="images/pc/body/piercings/unpierced/ears.jpg">'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['ears'] < 0) {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''ears''"><img height=<<ward_img_hgt>> src="image...
    } else {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''ears''"><img height=<<ward_img_hgt>> src="<<fun...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['nose'] === 0) {
    // TODO-QSP: *p      '<img height=<<ward_img_hgt>> src="images/pc/body/piercings/unpierced/nose.jpg">'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['nose'] < 0) {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''nose''"><img height=<<ward_img_hgt>> src="image...
    } else {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''nose''"><img height=<<ward_img_hgt>> src="<<fun...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['brow'] === 0) {
    // TODO-QSP: *p      '<img height=<<ward_img_hgt>> src="images/pc/body/piercings/unpierced/brow.jpg">'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['brow'] < 0) {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''brow''"><img height=<<ward_img_hgt>> src="image...
    } else {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''brow''"><img height=<<ward_img_hgt>> src="<<fun...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['lip'] === 0) {
    // TODO-QSP: *p      '<img height=<<ward_img_hgt>> src="images/pc/body/piercings/unpierced/lip.jpg">'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['lip'] < 0) {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''lip''"><img height=<<ward_img_hgt>> src="images...
    } else {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''lip''"><img height=<<ward_img_hgt>> src="<<func...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr align="center">'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['ears'] === 0) {
    // TODO-QSP: *p      'Not pierced'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['ears'] < 0) {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''wear_last'', ''ears'' & gt ''piercing_manageme...
    } else {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''remove'', ''ears'' & gt ''piercing_management'...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['nose'] === 0) {
    // TODO-QSP: *p      'Not pierced'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['nose'] < 0) {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''wear_last'', ''nose'' & gt ''piercing_manageme...
    } else {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''remove'', ''nose'' & gt ''piercing_management'...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['brow'] === 0) {
    // TODO-QSP: *p      'Not pierced'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['brow'] < 0) {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''wear_last'', ''brow'' & gt ''piercing_manageme...
    } else {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''remove'', ''brow'' & gt ''piercing_management'...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['lip'] === 0) {
    // TODO-QSP: *p      'Not pierced'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['lip'] < 0) {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''wear_last'', ''lip'' & gt ''piercing_managemen...
    } else {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''remove'', ''lip'' & gt ''piercing_management''...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr align="center">'
  // TODO-QSP: *p      '<th>'
  // TODO-QSP: *p        'Tongue piercing'
  // TODO-QSP: *p      '</th>'
  // TODO-QSP: *p      '<th>'
  // TODO-QSP: *p        'Navel piercings'
  // TODO-QSP: *p      '</th>'
  // TODO-QSP: *p      '<th>'
  // TODO-QSP: *p        'Nipple piercing'
  // TODO-QSP: *p      '</th>'
  // TODO-QSP: *p      '<th>'
  // TODO-QSP: *p        'Pussy piercing'
  // TODO-QSP: *p      '</th>'
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr align="center">'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] === 0) {
    // TODO-QSP: *p      '<img height=<<ward_img_hgt>> src="images/pc/body/piercings/unpierced/tongue.jpg">'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] < 0) {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''tongue''"><img height=<<ward_img_hgt>> src="ima...
    } else {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''tongue''"><img height=<<ward_img_hgt>> src="<<f...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['navel'] === 0) {
    // TODO-QSP: *p      '<img height=<<ward_img_hgt>> src="images/pc/body/piercings/unpierced/navel.jpg">'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['navel'] < 0) {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''navel''"><img height=<<ward_img_hgt>> src="imag...
    } else {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''navel''"><img height=<<ward_img_hgt>> src="<<fu...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] === 0) {
    // TODO-QSP: *p      '<img height=<<ward_img_hgt>> src="<<func(''$body_image'', ''tits'')>>">'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['nipples'] < 0) {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''nipples''"><img height=<<ward_img_hgt>> src="<<...
    } else {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''nipples''"><img height=<<ward_img_hgt>> src="<<...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] === 0) {
    // TODO-QSP: *p      '<img height=<<ward_img_hgt>> src="<<$pcs_vag_image>>">'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] < 0) {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''pussy''"><img height=<<ward_img_hgt>> src="<<$p...
    } else {
      // TODO-QSP: *p      '<a href="exec:gt ''piercing_management'', ''pussy''"><img height=<<ward_img_hgt>> src="<<fu...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr align="center">'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] === 0) {
    // TODO-QSP: *p      'Not pierced'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] < 0) {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''wear_last'', ''tongue'' & gt ''piercing_manage...
    } else {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''remove'', ''tongue'' & gt ''piercing_managemen...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['navel'] === 0) {
    // TODO-QSP: *p      'Not pierced'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['navel'] < 0) {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''wear_last'', ''navel'' & gt ''piercing_managem...
    } else {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''remove'', ''navel'' & gt ''piercing_management...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] === 0) {
    // TODO-QSP: *p      'Not pierced'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['nipples'] < 0) {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''wear_last'', ''nipples'' & gt ''piercing_manag...
    } else {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''remove'', ''nipples'' & gt ''piercing_manageme...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p      '<td>'
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] === 0) {
    // TODO-QSP: *p      'Not pierced'
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] < 0) {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''wear_last'', ''pussy'' & gt ''piercing_managem...
    } else {
      // TODO-QSP: *p      '<a href="exec: gs ''piercing_management'', ''remove'', ''pussy'' & gt ''piercing_management...
    }
  }
  // TODO-QSP: *p      '</td>'
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: end
  scene.build();
}

function enterEars(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'ears');
  (s as any).pmm_i = 1;
  // TODO-QSP: :loopears
  if (((s as any).pcs_piercings ?? 0)['ears_' + ((s as any).pmm_i ?? 0) + '_owned'] === 1) {
    // TODO-QSP: *p '<a href="exec: gs ''piercing_management'', ''wear'', ''ears'', <<pmm_i>> & gt ''piercing_managem...
  }
  (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
  if (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0)) {
    // TODO-QSP: jump 'loopears'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['piercing_management', 'main'] },
  ]);
  scene.build();
}

function enterEarsImage(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pcs_piercings ?? 0)?.['ears'];
  }
  if (((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[1] = -((s as any).ARGS ?? 0)[1];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNose(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'nose');
  (s as any).pmm_i = 1;
  // TODO-QSP: :loopnose
  if (((s as any).pcs_piercings ?? 0)['nose_' + ((s as any).pmm_i ?? 0) + '_owned'] === 1) {
    // TODO-QSP: *p '<a href="exec: gs ''piercing_management'', ''wear'', ''nose'', <<pmm_i>> & gt ''piercing_managem...
  }
  (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
  if (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0)) {
    // TODO-QSP: jump 'loopnose'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['piercing_management', 'main'] },
  ]);
  scene.build();
}

function enterNoseImage(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pcs_piercings ?? 0)?.['nose'];
  }
  if (((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[1] = -((s as any).ARGS ?? 0)[1];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBrow(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'brow');
  (s as any).pmm_i = 1;
  // TODO-QSP: :loopbrow
  if (((s as any).pcs_piercings ?? 0)['brow_' + ((s as any).pmm_i ?? 0) + '_owned'] === 1) {
    // TODO-QSP: *p '<a href="exec: gs ''piercing_management'', ''wear'', ''brow'', <<pmm_i>> & gt ''piercing_managem...
  }
  (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
  if (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0)) {
    // TODO-QSP: jump 'loopbrow'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['piercing_management', 'main'] },
  ]);
  scene.build();
}

function enterBrowImage(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pcs_piercings ?? 0)?.['brow'];
  }
  if (((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[1] = -((s as any).ARGS ?? 0)[1];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLip(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'lip');
  (s as any).pmm_i = 1;
  // TODO-QSP: :looplip
  if (((s as any).pcs_piercings ?? 0)['lip_' + ((s as any).pmm_i ?? 0) + '_owned'] === 1) {
    // TODO-QSP: *p '<a href="exec: gs ''piercing_management'', ''wear'', ''lip'', <<pmm_i>> & gt ''piercing_manageme...
  }
  (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
  if (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0)) {
    // TODO-QSP: jump 'looplip'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['piercing_management', 'main'] },
  ]);
  scene.build();
}

function enterLipImage(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pcs_piercings ?? 0)?.['lip'];
  }
  if (((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[1] = -((s as any).ARGS ?? 0)[1];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTongue(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'tongue');
  (s as any).pmm_i = 1;
  // TODO-QSP: :looptongue
  if (((s as any).pcs_piercings ?? 0)['tongue_' + ((s as any).pmm_i ?? 0) + '_owned'] === 1) {
    // TODO-QSP: *p '<a href="exec: gs ''piercing_management'', ''wear'', ''tongue'', <<pmm_i>> & gt ''piercing_manag...
  }
  (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
  if (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0)) {
    // TODO-QSP: jump 'looptongue'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['piercing_management', 'main'] },
  ]);
  scene.build();
}

function enterTongueImage(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pcs_piercings ?? 0)?.['tongue'];
  }
  if (((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[1] = -((s as any).ARGS ?? 0)[1];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNavel(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'navel');
  (s as any).pmm_i = 1;
  // TODO-QSP: :loopnavel
  if (((s as any).pcs_piercings ?? 0)['navel_' + ((s as any).pmm_i ?? 0) + '_owned'] === 1) {
    // TODO-QSP: *p '<a href="exec: gs ''piercing_management'', ''wear'', ''navel'', <<pmm_i>> & gt ''piercing_manage...
  }
  (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
  if (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0)) {
    // TODO-QSP: jump 'loopnavel'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['piercing_management', 'main'] },
  ]);
  scene.build();
}

function enterNavelImage(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pcs_piercings ?? 0)?.['navel'];
  }
  if (((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[1] = -((s as any).ARGS ?? 0)[1];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNipples(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'nipples');
  (s as any).pmm_i = 1;
  // TODO-QSP: :loopnipples
  if (((s as any).pcs_piercings ?? 0)['nipples_' + ((s as any).pmm_i ?? 0) + '_owned'] === 1) {
    // TODO-QSP: *p '<a href="exec: gs ''piercing_management'', ''wear'', ''nipples'', <<pmm_i>> & gt ''piercing_mana...
  }
  (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
  if (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0)) {
    // TODO-QSP: jump 'loopnipples'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['piercing_management', 'main'] },
  ]);
  scene.build();
}

function enterNipplesImage(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pcs_piercings ?? 0)?.['nipples'];
  }
  if (((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[1] = -((s as any).ARGS ?? 0)[1];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).pmm_total = qspFunc(s, 'piercing_management', 'get_total', 'pussy');
  (s as any).pmm_i = 1;
  // TODO-QSP: :looppussy
  if (((s as any).pcs_piercings ?? 0)['pussy_' + ((s as any).pmm_i ?? 0) + '_owned'] === 1) {
    // TODO-QSP: *p '<a href="exec: gs ''piercing_management'', ''wear'', ''pussy'', <<pmm_i>> & gt ''piercing_manage...
  }
  (s as any).pmm_i = ((s as any).pmm_i ?? 0) + (1);
  if (((s as any).pmm_i ?? 0) <= ((s as any).pmm_total ?? 0)) {
    // TODO-QSP: jump 'looppussy'
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['piercing_management', 'main'] },
  ]);
  scene.build();
}

function enterPussyImage(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS ?? {})[1] = ((s as any).pcs_piercings ?? 0)?.['pussy'];
  }
  if (((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS ?? {})[1] = -((s as any).ARGS ?? 0)[1];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayGridShop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'piercing_view', 'view_item', $ARGS[1], $ARGS[2], ARGS[3], ARGS[4]
  return;
  // TODO-QSP: end
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
