import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIsInit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).shop_display ?? 0)?.['init'] !== 0);
  return;
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'start') {
    qspCall(s, 'shop_utils', 'init', 'set_defaults');
    qspCall(s, 'shop_utils', 'init', 'set_outfit_file', ((s as any).locArgs?.[2] ?? 0));
    qspCall(s, 'shop_utils', 'init', 'set_link', ((s as any).locArgs?.[3] ?? 0));
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_defaults') {
    (s as any).shop_display['type_max'] = 0;
    (s as any).shop_display['step'] = 1;
    (s as any).shop_display['offset'] = 0;
    (s as any).shop_display['discount'] = 0;
    (s as any).shop_display['return_loc'] = ((s as any).loc ?? 0);
    (s as any).shop_display['return_arg0'] = ((s as any).loc_arg ?? 0);
    (s as any).shop_display['return_arg1'] = '';
    (s as any).shop_display['link'] = '';
    (s as any).shop_display['inclusion_check'] = '1';
    (s as any).shop_display['bcolor'] = '';
    qspCall(s, 'shop_utils', 'filter', 'reset_sorting');
    (s as any).outfitfilter['number_sort'] = 1;
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_type') {
    if (((s as any).arrpos ?? 0)('shop_display_types', ((s as any).locArgs?.[2] ?? 0)) < 0) {
      // TODO-QSP: $shop_display_types[] = $ARGS[2]
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_item') {
    if (((s as any).arrpos ?? 0)('shop_display_items', ((s as any).locArgs?.[2] ?? 0) + '-' + ((s as any).ARGS ?? 0)[3]) < 0) {
      // TODO-QSP: $shop_display_items[] = $ARGS[2] + '-' + ARGS[3]
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_all_types') {
    if (! ((s as any).loc ?? 0)(((s as any).shop_display ?? 0)?.['view_file'])) {
      return;
    }
    // TODO-QSP: gs $shop_display['view_file'], 'init', 'add_types', 'all'
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_outfit_file') {
    if (((((s as any).locArgs?.[2] ?? 0)).indexOf(('clothing'))) + 1) {
      (s as any).shop_display['outfit_type'] = 'clothing';
      (s as any).shop_display['func_file'] = 'clothing';
      (s as any).shop_display['view_file'] = 'clothing_view';
      (s as any).shop_display['attr_file'] = 'clothing_attributes';
      (s as any).shop_display['type_suffix'] = '';
      (s as any).shop_display['do_sorted'] = 1;
    } else {
      (s as any).shop_display['outfit_type'] = 'bra';
      (s as any).shop_display['func_file'] = 'bras';
      (s as any).shop_display['view_file'] = 'bra_view';
      (s as any).shop_display['attr_file'] = 'underwear_attributes';
      (s as any).shop_display['type_suffix'] = '_bras';
      (s as any).shop_display['do_sorted'] = 1;
      if (((((s as any).locArgs?.[2] ?? 0)).indexOf(('panty'))) + 1  ||  ((((s as any).locArgs?.[2] ?? 0)).indexOf(('panties'))) + 1) {
        (s as any).shop_display['outfit_type'] = 'panty';
        (s as any).shop_display['func_file'] = 'panties';
        (s as any).shop_display['view_file'] = 'panty_view';
        (s as any).shop_display['attr_file'] = 'underwear_attributes';
        (s as any).shop_display['type_suffix'] = '_panties';
        (s as any).shop_display['do_sorted'] = 1;
      } else {
        (s as any).shop_display['outfit_type'] = 'bodysuit';
        (s as any).shop_display['func_file'] = 'underwear_bodysuits';
        (s as any).shop_display['view_file'] = 'underwear_bodysuit_view';
        (s as any).shop_display['attr_file'] = 'underwear_attributes';
        (s as any).shop_display['type_suffix'] = '_bodysuits';
        (s as any).shop_display['do_sorted'] = 1;
        if (((((s as any).locArgs?.[2] ?? 0)).indexOf(('shoe'))) + 1) {
          (s as any).shop_display['outfit_type'] = 'shoe';
          (s as any).shop_display['func_file'] = 'shoes';
          (s as any).shop_display['view_file'] = 'shoe_view';
          (s as any).shop_display['attr_file'] = 'shoe_attributes';
          (s as any).shop_display['type_suffix'] = '_shoes';
          (s as any).shop_display['do_sorted'] = 1;
        } else {
          (s as any).shop_display['outfit_type'] = 'coat';
          (s as any).shop_display['func_file'] = 'coats';
          (s as any).shop_display['view_file'] = 'coat_view';
          (s as any).shop_display['attr_file'] = 'coat_attributes';
          (s as any).shop_display['type_suffix'] = '_coats';
          (s as any).shop_display['do_sorted'] = 1;
          if (((((s as any).locArgs?.[2] ?? 0)).indexOf(('purse'))) + 1) {
            (s as any).shop_display['outfit_type'] = 'purse';
            (s as any).shop_display['func_file'] = 'purses';
            (s as any).shop_display['view_file'] = 'purse_view';
            (s as any).shop_display['attr_file'] = 'purse_attributes';
            (s as any).shop_display['type_suffix'] = '_purses';
            (s as any).shop_display['do_sorted'] = 1;
          } else {
            (s as any).shop_display['outfit_type'] = 'tattoo';
            (s as any).shop_display['func_file'] = 'tattoo_management';
            (s as any).shop_display['view_file'] = 'tattoo_view';
            (s as any).shop_display['attr_file'] = 'tattoo_attributes';
            (s as any).shop_display['type_suffix'] = '_tattoos';
            (s as any).shop_display['do_sorted'] = 0;
            if (((((s as any).locArgs?.[2] ?? 0)).indexOf(('piercing'))) + 1) {
              (s as any).shop_display['outfit_type'] = 'piercing';
              (s as any).shop_display['func_file'] = 'piercing_management';
              (s as any).shop_display['view_file'] = 'piercing_view';
              (s as any).shop_display['attr_file'] = 'piercing_attributes';
              (s as any).shop_display['type_suffix'] = '_piercings';
              (s as any).shop_display['do_sorted'] = 0;
            } else {
              (s as any).shop_display['outfit_type'] = ((s as any).locArgs?.[2] ?? 0);
              (s as any).shop_display['func_file'] = ((s as any).locArgs?.[3] ?? 0);
              (s as any).shop_display['view_file'] = ((s as any).locArgs?.[4] ?? 0);
              (s as any).shop_display['attr_file'] = ((s as any).locArgs?.[5] ?? 0);
              (s as any).shop_display['type_suffix'] = ((s as any).locArgs?.[6] ?? 0);
              (s as any).shop_display['do_sorted'] = qspUntranslated(s, "ARGS[7]", { location: "shop_utils" });
            }
            return;
          }
          if (((s as any).locArgs?.[1] ?? 0) === 'set_link') {
            (s as any).shop_display['link'] = ((s as any).locArgs?.[2] ?? 0);
            if (((s as any).shop_display ?? 0)?.['link'] === 'shop') {
              (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'is_owned\', $ARGS[1], ARGS[2]) = 0';
            } else {
              (s as any).shop_display['inclusion_check'] = '1';
              if (((s as any).shop_display ?? 0)?.['link'] === 'wardrobe') {
                (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'in_wardrobe\', $ARGS[1], ARGS[2])';
              } else {
                (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'in_storage\', $ARGS[1], ARGS[2])';
                if (((s as any).shop_display ?? 0)?.['link'] === 'unwanted') {
                  (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'in_unwanted\', $ARGS[1], ARGS[2])';
                } else {
                  (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'is_owned\', $ARGS[1], ARGS[2])';
                }
                return;
              }
              if (((s as any).locArgs?.[1] ?? 0) === 'set_steps') {
                (s as any).shop_display['step'] = 0;
                (s as any).shop_display['offset'] = 0;
                return;
              }
              if (((s as any).locArgs?.[1] ?? 0) === 'set_discount') {
                (s as any).shop_display['discount'] = 0;
                return;
              }
              if (((s as any).locArgs?.[1] ?? 0) === 'set_return') {
                (s as any).shop_display['return_loc'] = ((s as any).locArgs?.[2] ?? 0);
                (s as any).shop_display['return_arg0'] = ((s as any).locArgs?.[3] ?? 0);
                (s as any).shop_display['return_arg1'] = ((s as any).locArgs?.[4] ?? 0);
                return;
              }
              if (((s as any).locArgs?.[1] ?? 0) === 'set_bcolor') {
                (s as any).shop_display['bcolor'] = ((s as any).locArgs?.[2] ?? 0);
                return;
              }
              if (((s as any).locArgs?.[1] ?? 0) === 'set_default_exceptions') {
                if (((s as any).loc ?? 0)(((s as any).shop_display ?? 0)?.['view_file'])) {
                  // TODO-QSP: gs $shop_display['view_file'], 'init', 'set_exceptions'
                } else {
                  qspCall(s, 'clothing_view', 'init', 'set_exceptions');
                  qspCall(s, 'bra_view', 'init', 'set_exceptions');
                  qspCall(s, 'panty_view', 'init', 'set_exceptions');
                  qspCall(s, 'underwear_bodysuit_view', 'init', 'set_exceptions');
                  qspCall(s, 'shoe_view', 'init', 'set_exceptions');
                  qspCall(s, 'purse_view', 'init', 'set_exceptions');
                  qspCall(s, 'coat_view', 'init', 'set_exceptions');
                  qspCall(s, 'tattoo_management', 'set_shop_display_exceptions');
                  qspCall(s, 'piercing_management', 'set_shop_display_exceptions');
                }
                return;
              }
              if (((s as any).locArgs?.[1] ?? 0) === 'add_exception') {
                // TODO-QSP: shop_display_exceptions[$ARGS[2] + $shop_display['type_suffix'] + '-' + ARGS[3]] = 1
                return;
              }
              if (((s as any).locArgs?.[1] ?? 0) === 'end') {
                (s as any).shop_display['init'] = 1;
                (s as any).shop_display['type_max'] = 0;
                qspCall(s, 'shop_utils', 'sorted', 'main');
                return;
              }
              return;
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'is_init':
      enterIsInit(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    default:
      enterIsInit(s, scene);
      break;
  }
}

export const shop_utils: LocationDef = {
  name: 'shop_utils',
  region: 'other',
  enter: enter,
};
