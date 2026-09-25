import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetFilterHeader(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'shop') {
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_shop_filters');
  } else {
    if (((s as any).ward_list_file ?? 0) === 'clothing') {
      qspCall(s, 'clothing_view', 'filter_builder', 'setup_home_list_filters');
    } else {
      qspCall(s, 'clothing_view', 'filter_builder', 'setup_home_grid_filters');
    }
  }
  return;
  scene.build();
}

function enterGetShopFilterHeader(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing_view', 'filter_builder', 'setup_shop_filters');
  return;
  scene.build();
}

function enterGetFilterHeaderBase(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'shop') {
    qspCall(s, 'clothing_view', 'filter_builder', 'setup_shop_filters');
  } else {
    if (((s as any).ward_list_file ?? 0) === 'clothing') {
      qspCall(s, 'clothing_view', 'filter_builder', 'setup_home_list_filters');
    } else {
      qspCall(s, 'clothing_view', 'filter_builder', 'setup_home_grid_filters');
    }
  }
  return;
  scene.build();
}

function enterShopFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing_view', 'shop_filter');
  return;
  scene.build();
}

function enterCloFilter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing_view', 'home_filter');
  return;
  scene.build();
}

function enterFiltersBase(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'shop') {
    qspCall(s, 'clothing_view', 'shop_filter');
  } else {
    qspCall(s, 'clothing_view', 'home_filter');
  }
  return;
  scene.build();
}

function enterViewClothingList(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'clothing_view', 'view_grids_list');
  scene.build();
}

function enterClothingList(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'clothing_view', 'view_grid', String((s as any).locArgs?.[1] ?? ''));
  scene.build();
}

function enterGym(s: GameState, scene: SceneBuilder): void {
  if (((s as any).regularwornclothingtype ?? 0) === '') {
    (s as any).regularwornclothingtype = ((s as any).clothingworntype ?? 0);
    (s as any).regularwornclothingnumber = ((s as any).clothingwornnumber ?? 0);
  }
  scene.img('images/locations/city/citycenter/mall/sports.png');
  (s as any).clo_i = 0;
  while (true) {
    (s as any).i = 1;
    do {
      if (((s as any).danilovich_outfits ?? 0)?.[String((s as any).i ?? 0)] === 1) {
        qspCall(s, 'clothing_attributes', 'danilovich_outfits', ((s as any).i ?? 0));
        qspCall(s, 'clothing_view', 'home_filter');
        if ((((s as any).outfitfilter ?? 0)?.['quality_sort'] === 1  &&  ((s as any).CloQuality ?? 0) === ((s as any).clo_i ?? 0))  ||  (((s as any).outfitfilter ?? 0)?.['inhibition_sort'] === 1  &&  ((s as any).CloInhibit ?? 0) === ((s as any).clo_i ?? 0))  ||  ((s as any).outfitfilter ?? 0)?.['number_sort'] === 1) {
          if (((s as any).outfitfilter ?? 0)?.['include'] === 1  &&  ((s as any).outfitfilter ?? 0)?.['sport'] >= 0) {
            if (qspFunc(s, 'clothing', 'can_wear', 'danilovich', ((s as any).i ?? 0))) {
              scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027clothing_QV/u0027, /u0027change/u0027, /u0027danilovich_outfits/u0027); return false;"><img height="250" src="images/pc/items/danilovich/outfits/${((s as any).i ?? '')}.jpg"/></a>`);
            }
          }
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      (s as any).clo_i = ((s as any).clo_i ?? 0) + (1);
      if (((s as any).outfitfilter ?? 0)?.['quality'] === 0  &&  ((s as any).clo_i ?? 0) <= 7) {
        break;
      } else {
        if (((s as any).outfitfilter ?? 0)?.['inhibition'] === 0  &&  ((s as any).clo_i ?? 0) <= 50) {
          break;
        }
      }
      if (((s as any).clothingworntype ?? 0) !== ((s as any).regularwornclothingtype ?? 0)) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGym2(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.actions([
          { label: 'Strip', goto: ['clothing_QV', 'strip'] },
        ]);
      }
      scene.actions([
        { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } while (((s as any).i ?? 0) <= Object.keys((s as any).danilovich_outfits ?? {}).length);
  }
  scene.build();
}

function enterGym2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Change back into your regular clothes', handler: (st: GameState) => {
    (st as any).clothingworntype = ((st as any).regularwornclothingtype ?? 0);
    (st as any).clothingwornnumber = ((st as any).regularwornclothingnumber ?? 0);
    (st as any).regularwornclothingtype = undefined;
    (st as any).regularwornclothingnumber = undefined;
    qspGoto(st, 'clothing_QV', 'gym');
  } },
  ]);
  scene.build();
}

function enterCloak(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 1;
  do {
    if (((s as any).coat ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      if (((s as any).coat_h ?? 0)?.[String((s as any).i ?? 0)] > 0) {
        scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027clothing_QV/u0027, /u0027change/u0027, /u0027coat/u0027); return false;"><img height="250" src="images/pc/clothing/11coat/${((s as any).i ?? '')}.jpg"/></a>`);
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
  } while (((s as any).i ?? 0) <= Object.keys((s as any).coat ?? {}).length);
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.img('images/pc/body/nude.jpg');
    scene.text('<center>You strip down to your panties.</center>');
  } else {
    scene.img('images/pc/body/nude1.jpg');
    scene.text('<center>You strip completely naked.</center>');
  }
  qspCall(s, 'clothing', 'strip');
  scene.actions([
    { label: 'Choose something to wear', handler: (st: GameState) => {
    if (((st as any).regularwornclothingtype ?? 0) === '') {
      qspGoto(st, 'clothing_QV', 'list');
    } else {
      qspGoto(st, 'clothing_QV', 'gym');
    }
  } },
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterChange(s: GameState, scene: SceneBuilder): void {
  (s as any).swimwear_description = '';
  qspCall(s, 'clothing_attributes', '$ARGS[1]', ((s as any).locArgs?.[2] ?? 0));
  scene.img(`${qspFunc(s, '$clothing_image', '', ((s as any).locArgs?.[1] ?? ''), ((s as any).locArgs?.[2] ?? ''))}`);
  if (String((s as any).locArgs?.[1] ?? '') === 'misc_outfits'  &&  String((s as any).locArgs?.[2] ?? '') === 1) {
    scene.text('A hessian sack the hunters gave you.');
  } else {
    if (((s as any).swimwear_description ?? 0) === '') {
      qspCall(s, 'clothing_descriptions', '');
      scene.text(`${((s as any).description ?? '')}`);
    } else {
      // TODO-QSP: $swimwear_description
    }
  }
  if (((s as any).CloBimbo ?? 0) === 1  &&  ((s as any).cheatVars ?? 0)?.['bimbo'] === 0) {
    (s as any).temp_clo_text = [...((s as any).temp_clo_text ?? []), 'bimbo'];
  }
  if (((s as any).CloGoth ?? 0) === 1) {
    (s as any).temp_clo_text = [...((s as any).temp_clo_text ?? []), 'goth'];
  }
  if (((s as any).CloPunk ?? 0) === 1) {
    (s as any).temp_clo_text = [...((s as any).temp_clo_text ?? []), 'punk'];
  }
  if (Object.keys((s as any).temp_clo_text ?? {}).length > 0) {
    scene.text(`This item is considered ${qspFunc(s, 'string', 'enumerate_list', '$temp_clo_text')} clothing.`);
  }
  (s as any).temp_clo_text = undefined;
  if (((s as any).CloStyle ?? 0) === 4) {
    scene.text('This outfit can be used for prostitution.');
  }
  if (((s as any).CloStyle2 ?? 0) === 1  ||  ((s as any).CloMaid ?? 0) === 1) {
    scene.text('This is a maid uniform.');
  }
  if (((s as any).CloStyle2 ?? 0) === 2  ||  ((s as any).CloServer ?? 0) === 1) {
    scene.text('This outfit is a server uniform.');
  }
  if (((s as any).CloStyle2 ?? 0) === 3  ||  ((s as any).CloStrip ?? 0) === 1) {
    scene.text('This outfit is a stripper uniform.');
  }
  if (((s as any).CloStyle2 ?? 0) === 4  ||  ((s as any).CloSchool ?? 0) === 1) {
    qspCall(s, 'clothing', 'school_check', 'check');
  }
  if (((s as any).CloStyle2 ?? 0) === 5  ||  ((s as any).CloOffice ?? 0) === 1) {
    scene.text('This outfit is an office uniform.');
  }
  if (((s as any).CloStyle2 ?? 0) === 6  ||  ((s as any).CloSport ?? 0) === 1) {
    scene.text('This outfit is a gym outfit.');
  }
  if (((s as any).clothingworntype ?? 0) === String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).clothingwornnumber ?? 0) === String((s as any).locArgs?.[2] ?? '')) {
    scene.text('You are wearing this outfit.');
  } else {
    if (((s as any).CloInhibit ?? 0) > ((s as any).pcs_inhib ?? 0)) {
      scene.text('You don\'t feel confident enough to wear an outfit this revealing.');
    } else {
      if ((Array.isArray((s as any).CloLosTyp) ? ((s as any).CloLosTyp as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0  &&  (Array.isArray((s as any).CloLosNum) ? ((s as any).CloLosNum as any[]).indexOf(String((s as any).locArgs?.[2] ?? '')) : -1) >= 0) {
        scene.text('You lost these clothes somewhere, maybe you can find them again?.');
      } else {
        if (((s as any).CloInhibit ?? 0) > 10) {
          if (((s as any).CloInhibit ?? 0) + 10 > ((s as any).pcs_inhib ?? 0)) {
            scene.text('You find this outfit more revealing than you are completely comfortable with but that makes it quite exciting too.');
          }
        }
        if (((s as any).hypnoClothes ?? 0) <= 0  ||  qspFunc(s, 'clothing', 'is_hypno_approved', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0))) {
          scene.actions([
            { label: 'Wear this outfit', handler: (st: GameState) => {
    qspCall(st, 'clothing', 'wear', ((st as any).locArgs?.[1] ?? 0), ((st as any).locArgs?.[2] ?? 0));
    if (((st as any).regularwornclothingtype ?? 0) === '') {
      qspGoto(st, 'wardrobe', 'main');
    } else {
      qspGoto(st, 'clothing_QV', 'gym');
    }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Wear this outfit', handler: (st: GameState) => {
    scene.text('You pick up the outfit and think about trying them on… but you don\'t really like wearing these type of outfits');
    qspCall(st, 'willpower', 'misc', 'resist', 'easy');
    if (((st as any).cheatVars ?? 0)?.['willpower'] === 0) {
      (st as any).will_cost = ((st as any).will_cost ?? 0) + (((st as any).hypnoTime ?? 0));
    }
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Put them on anyways', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Put them on anyways', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspCall(st, 'clothing', 'wear', ((st as any).locArgs?.[1] ?? 0), ((st as any).locArgs?.[2] ?? 0));
    if (((st as any).regularwornclothingtype ?? 0) === '') {
      qspGoto(st, 'wardrobe', 'main');
    } else {
      qspGoto(st, 'clothing_QV', 'gym');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    if (((st as any).regularwornclothingtype ?? 0) === '') {
      qspGoto(st, 'wardrobe', 'main');
    } else {
      qspGoto(st, 'clothing_QV', 'gym');
    }
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Return', goto: ['clothing_QV', 'clothing_list', '' + ((s as any).ward_list_store ?? 0) + ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_filter_header':
      enterGetFilterHeader(s, scene);
      break;
    case 'get_shop_filter_header':
      enterGetShopFilterHeader(s, scene);
      break;
    case 'get_filter_header_base':
      enterGetFilterHeaderBase(s, scene);
      break;
    case 'shop_filter':
      enterShopFilter(s, scene);
      break;
    case 'clo_filter':
      enterCloFilter(s, scene);
      break;
    case 'filters_base':
      enterFiltersBase(s, scene);
      break;
    case 'view_clothing_list':
      enterViewClothingList(s, scene);
      break;
    case 'clothing_list':
      enterClothingList(s, scene);
      break;
    case 'gym':
      enterGym(s, scene);
      break;
    case 'gym2':
      enterGym2(s, scene);
      break;
    case 'cloak':
      enterCloak(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'change':
      enterChange(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const clothing_QV: LocationDef = {
  name: 'clothing_QV',
  title: '<center>You strip down to your panties.</center>',
  region: 'other',
  enter: enter,
};
