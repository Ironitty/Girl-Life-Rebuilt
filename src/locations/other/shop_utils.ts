import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, hasLocation } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterIsInit(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).shop_display ?? 0)?.['init'] !== 0);
  return;
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'start') {
    (s as any).outfitfilter = undefined;
    (s as any).shop_display = undefined;
    (s as any).shop_display_exceptions = undefined;
    (s as any).shop_utils_view = undefined;
    (s as any).shop_display_sorted = undefined;
    (s as any).shop_display_sorted_titles = undefined;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_defaults']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_outfit_file', ((s as any).locArgs?.[2] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_link', ((s as any).locArgs?.[3] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_defaults') {
    ((s as any).shop_display = (s as any).shop_display ?? {})['type_max'] = 0;
    ((s as any).shop_display = (s as any).shop_display ?? {})['step'] = 1;
    ((s as any).shop_display = (s as any).shop_display ?? {})['offset'] = 0;
    ((s as any).shop_display = (s as any).shop_display ?? {})['discount'] = 0;
    ((s as any).shop_display = (s as any).shop_display ?? {})['return_loc'] = ((s as any).loc ?? 0);
    ((s as any).shop_display = (s as any).shop_display ?? {})['return_arg0'] = ((s as any).loc_arg ?? 0);
    ((s as any).shop_display = (s as any).shop_display ?? {})['return_arg1'] = '';
    ((s as any).shop_display = (s as any).shop_display ?? {})['link'] = '';
    ((s as any).shop_display = (s as any).shop_display ?? {})['inclusion_check'] = '1';
    ((s as any).shop_display = (s as any).shop_display ?? {})['bcolor'] = '';
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['number_sort'] = 1;
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'add_type') {
    if ((Array.isArray((s as any).shop_display_types) ? ((s as any).shop_display_types as any[]).indexOf(String((s as any).locArgs?.[2] ?? '')) : -1) < 0) {
      (s as any).shop_display_types = [...((s as any).shop_display_types ?? []), ((s as any).locArgs?.[2] ?? 0)];
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'add_item') {
    if ((Array.isArray((s as any).shop_display_items) ? ((s as any).shop_display_items as any[]).indexOf(String((s as any).locArgs?.[2] ?? '') + '-' + String((s as any).locArgs?.[3] ?? '')) : -1) < 0) {
      (s as any).shop_display_items = [...((s as any).shop_display_items ?? []), ((s as any).locArgs?.[2] ?? 0) + '-' + ((s as any).locArgs?.[3] ?? 0)];
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'add_all_types') {
    if (! hasLocation(((s as any).shop_display ?? 0)?.['view_file'])) {
      alert('shop_utils ERROR: shop_utils, init, add_all_types called with non-existing view_file: "' + (((s as any).shop_display ?? 0)?.['view_file']) + '"');
      return;
    }
    qspCall(s, '$shop_display[\'view_file\']', 'init', 'add_types', 'all');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_outfit_file') {
    if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('clothing'))) + 1)) {
      ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'clothing';
      ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'clothing';
      ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'clothing_view';
      ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'clothing_attributes';
      ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '';
      ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 1;
    } else {
      if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('bra'))) + 1)) {
        ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'bra';
        ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'bras';
        ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'bra_view';
        ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'underwear_attributes';
        ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '_bras';
        ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 1;
      } else {
        if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('panty'))) + 1)  ||  ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('panties'))) + 1)) {
          ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'panty';
          ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'panties';
          ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'panty_view';
          ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'underwear_attributes';
          ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '_panties';
          ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 1;
        } else {
          if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('bodysuit'))) + 1)) {
            ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'bodysuit';
            ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'underwear_bodysuits';
            ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'underwear_bodysuit_view';
            ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'underwear_attributes';
            ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '_bodysuits';
            ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 1;
          } else {
            if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('shoe'))) + 1)) {
              ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'shoe';
              ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'shoes';
              ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'shoe_view';
              ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'shoe_attributes';
              ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '_shoes';
              ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 1;
            } else {
              if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('coat'))) + 1)) {
                ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'coat';
                ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'coats';
                ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'coat_view';
                ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'coat_attributes';
                ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '_coats';
                ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 1;
              } else {
                if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('purse'))) + 1)) {
                  ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'purse';
                  ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'purses';
                  ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'purse_view';
                  ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'purse_attributes';
                  ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '_purses';
                  ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 1;
                } else {
                  if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('tattoo'))) + 1)) {
                    ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'tattoo';
                    ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'tattoo_management';
                    ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'tattoo_view';
                    ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'tattoo_attributes';
                    ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '_tattoos';
                    ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 0;
                  } else {
                    if (((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('piercing'))) + 1)) {
                      ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = 'piercing';
                      ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = 'piercing_management';
                      ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = 'piercing_view';
                      ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = 'piercing_attributes';
                      ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = '_piercings';
                      ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = 0;
                    } else {
                      ((s as any).shop_display = (s as any).shop_display ?? {})['outfit_type'] = ((s as any).locArgs?.[2] ?? 0);
                      ((s as any).shop_display = (s as any).shop_display ?? {})['func_file'] = ((s as any).locArgs?.[3] ?? 0);
                      ((s as any).shop_display = (s as any).shop_display ?? {})['view_file'] = ((s as any).locArgs?.[4] ?? 0);
                      ((s as any).shop_display = (s as any).shop_display ?? {})['attr_file'] = ((s as any).locArgs?.[5] ?? 0);
                      ((s as any).shop_display = (s as any).shop_display ?? {})['type_suffix'] = ((s as any).locArgs?.[6] ?? 0);
                      ((s as any).shop_display = (s as any).shop_display ?? {})['do_sorted'] = ((s as any).locArgs?.[7] ?? 0);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_link') {
    ((s as any).shop_display = (s as any).shop_display ?? {})['link'] = ((s as any).locArgs?.[2] ?? 0);
    if (((s as any).shop_display ?? 0)?.['link'] === 'shop') {
      ((s as any).shop_display = (s as any).shop_display ?? {})['inclusion_check'] = 'func($ARGS[0], \'is_owned\', $ARGS[1], ARGS[2]) = 0';
    } else {
      if (((s as any).shop_display ?? 0)?.['link'] === 'cheat') {
        ((s as any).shop_display = (s as any).shop_display ?? {})['inclusion_check'] = '1';
      } else {
        if (((s as any).shop_display ?? 0)?.['link'] === 'wardrobe') {
          ((s as any).shop_display = (s as any).shop_display ?? {})['inclusion_check'] = 'func($ARGS[0], \'in_wardrobe\', $ARGS[1], ARGS[2])';
        } else {
          if (((s as any).shop_display ?? 0)?.['link'] === 'storage') {
            ((s as any).shop_display = (s as any).shop_display ?? {})['inclusion_check'] = 'func($ARGS[0], \'in_storage\', $ARGS[1], ARGS[2])';
          } else {
            if (((s as any).shop_display ?? 0)?.['link'] === 'unwanted') {
              ((s as any).shop_display = (s as any).shop_display ?? {})['inclusion_check'] = 'func($ARGS[0], \'in_unwanted\', $ARGS[1], ARGS[2])';
            } else {
              ((s as any).shop_display = (s as any).shop_display ?? {})['inclusion_check'] = 'func($ARGS[0], \'is_owned\', $ARGS[1], ARGS[2])';
            }
          }
        }
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_steps') {
    ((s as any).shop_display = (s as any).shop_display ?? {})['step'] = Math.max(1, ((s as any).locArgs?.[2] ?? 0));
    ((s as any).shop_display = (s as any).shop_display ?? {})['offset'] = Math.max(0, ((s as any).locArgs?.[3] ?? 0));
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_discount') {
    ((s as any).shop_display = (s as any).shop_display ?? {})['discount'] = Math.min(Math.max(0, ((s as any).locArgs?.[2] ?? 0)), 100);
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_return') {
    ((s as any).shop_display = (s as any).shop_display ?? {})['return_loc'] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).shop_display = (s as any).shop_display ?? {})['return_arg0'] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).shop_display = (s as any).shop_display ?? {})['return_arg1'] = ((s as any).locArgs?.[4] ?? 0);
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_bcolor') {
    ((s as any).shop_display = (s as any).shop_display ?? {})['bcolor'] = ((s as any).locArgs?.[2] ?? 0);
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_default_exceptions') {
    if (hasLocation(((s as any).shop_display ?? 0)?.['view_file'])) {
      qspCall(s, '$shop_display[\'view_file\']', 'init', 'set_exceptions');
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
  if (String((s as any).locArgs?.[1] ?? '') === 'add_exception') {
    ((s as any).shop_display_exceptions = (s as any).shop_display_exceptions ?? {})[((s as any).locArgs?.[2] ?? 0) + (((s as any).shop_display ?? 0)?.['type_suffix']) + '-' + ((s as any).locArgs?.[3] ?? 0)] = 1;
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'end') {
    ((s as any).shop_display = (s as any).shop_display ?? {})['init'] = 1;
    ((s as any).shop_display = (s as any).shop_display ?? {})['type_max'] = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterSorted(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  return;
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'main') {
    if (! hasLocation(((s as any).shop_display ?? 0)?.['func_file'])) {
      alert('shop_utils ERROR: shop_utils, sorted, main called with non-existing func_file: "' + (((s as any).shop_display ?? 0)?.['func_file']) + '"');
      return;
    }
    if (! hasLocation(((s as any).shop_display ?? 0)?.['view_file'])) {
      alert('shop_utils ERROR: shop_utils, sorted, main called with non-existing view_file: "' + (((s as any).shop_display ?? 0)?.['view_file']) + '"');
      return;
    }
    (s as any).shop_display_sorted_titles = undefined;
    ((s as any).shop_display = (s as any).shop_display ?? {})['type_i'] = 0;
    while (true) {
      if (((s as any).shop_display ?? 0)?.['type_i'] < Object.keys((s as any).shop_display_types ?? {}).length) {
        ((s as any).shop_display = (s as any).shop_display ?? {})['type'] = qspUntranslated(s, "shop_display_types[shop_display['type_i']]", { location: "shop_utils" });
        qspCall(s, '$shop_display[\'func_file\']', 'totals', (((s as any).shop_display ?? 0)?.['type']));
        ((s as any).shop_display = (s as any).shop_display ?? {})['number'] = 1 + (((s as any).shop_display ?? {})?.['offset'] ?? 0);
        while (true) {
          if (((s as any).shop_display ?? 0)?.['number'] <= ((s as any).total ?? 0)) {
            if (((s as any).shop_display_exceptions ?? 0)[((s as any).shop_display ?? 0)?.['type'] + ((s as any).shop_display ?? 0)?.['type_suffix'] + '-' + ((s as any).shop_display ?? 0)?.['number']] === 0) {
              if ((0 as any)) {
                ((s as any).shop_display = (s as any).shop_display ?? {})['shop'] = (String((((s as any).shop_display ?? 0)?.['type'])).slice((1)-1, ((1)-1)+(((String((((s as any).shop_display ?? 0)?.['type']) + '_').indexOf(String('_'))) + 1) - 1)));
                if (((s as any).shop_display ?? 0)?.['shop'] !== '') {
                  if ((Array.isArray((s as any).shop_display_sorted_titles) ? ((s as any).shop_display_sorted_titles as any[]).indexOf(((s as any).shop_display ?? 0)?.['shop']) : -1) < 0) {
                    (s as any).shop_display_sorted_titles = [...((s as any).shop_display_sorted_titles ?? []), (((s as any).shop_display ?? 0)?.['shop'])];
                    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['number_' + shop_display['type_i'] + '_title'] = (((s as any).shop_display ?? 0)?.['shop']);
                  }
                }
                if (((s as any).shop_display ?? 0)?.['do_sorted']) {
                  qspCall(s, '$shop_display[\'view_file\']', 'sorted', 'add', (((s as any).shop_display ?? 0)?.['type']), (((s as any).shop_display ?? 0)?.['number']), (((s as any).shop_display ?? 0)?.['type_i']));
                } else {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_to_number', (((s as any).shop_display ?? 0)?.['type']), (((s as any).shop_display ?? 0)?.['number']), (((s as any).shop_display ?? 0)?.['type_i'])]; enterSorted(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
              }
            }
            ((s as any).shop_display = (s as any).shop_display ?? {})['number'] = ((s as any).shop_display['number'] ?? 0) + ((((s as any).shop_display ?? 0)?.['step']));
            break;
          }
          ((s as any).shop_display = (s as any).shop_display ?? {})['type_i'] = ((s as any).shop_display['type_i'] ?? 0) + (1);
          break;
        }
      }
      ((s as any).shop_display = (s as any).shop_display ?? {})['unused_type_i'] = (((s as any).shop_display ?? 0)?.['type_i']);
      ((s as any).shop_display = (s as any).shop_display ?? {})['item_i'] = 0;
      while (true) {
        if (((s as any).shop_display ?? 0)?.['item_i'] < Object.keys((s as any).shop_display_items ?? {}).length) {
          ((s as any).shop_display = (s as any).shop_display ?? {})['item_entry'] = qspUntranslated(s, "shop_display_items[shop_display['item_i']]", { location: "shop_utils" });
          ((s as any).shop_display = (s as any).shop_display ?? {})['sep_index'] = ((String((((s as any).shop_display ?? 0)?.['item_entry'])).indexOf(String('-'))) + 1);
          ((s as any).shop_display = (s as any).shop_display ?? {})['type'] = (String((((s as any).shop_display ?? 0)?.['item_entry'])).slice((1)-1, ((1)-1)+((((s as any).shop_display ?? {})?.['sep_index'] ?? 0) - 1)));
          ((s as any).shop_display = (s as any).shop_display ?? {})['number'] = parseFloat((String((((s as any).shop_display ?? 0)?.['item_entry'])).slice(((((s as any).shop_display ?? {})?.['sep_index'] ?? 0) + 1)-1)));
          if ((0 as any)) {
            ((s as any).shop_display = (s as any).shop_display ?? {})['shop'] = (String((((s as any).shop_display ?? 0)?.['type']) + '_').slice((1)-1, ((1)-1)+(((String((((s as any).shop_display ?? 0)?.['type'])).indexOf(String('_'))) + 1) - 1)));
            if ((Array.isArray((s as any).shop_display_sorted_titles) ? ((s as any).shop_display_sorted_titles as any[]).indexOf(((s as any).shop_display ?? 0)?.['shop']) : -1) < 0) {
              (s as any).shop_display_sorted_titles = [...((s as any).shop_display_sorted_titles ?? []), (((s as any).shop_display ?? 0)?.['shop'])];
              ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['number_' + shop_display['unused_type_i'] + '_title'] = (((s as any).shop_display ?? 0)?.['shop']);
              ((s as any).shop_display = (s as any).shop_display ?? {})['type_i'] = (((s as any).shop_display ?? 0)?.['unused_type_i']);
              ((s as any).shop_display = (s as any).shop_display ?? {})['unused_type_i'] = ((s as any).shop_display['unused_type_i'] ?? 0) + (1);
            } else {
              ((s as any).shop_display = (s as any).shop_display ?? {})['type_i'] = qspUntranslated(s, "arrpos('shop_display_types', shop_display['type'])", { location: "shop_utils" });
              if (((s as any).shop_display ?? 0)?.['type_i'] < 0) {
                ((s as any).shop_display = (s as any).shop_display ?? {})['type_i'] = 0;
                (s as any).shop_display_types = [...((s as any).shop_display_types ?? []), (((s as any).shop_display ?? 0)?.['type'])];
              }
            }
            if (((s as any).shop_display ?? 0)?.['do_sorted']) {
              qspCall(s, '$shop_display[\'view_file\']', 'sorted', 'add', (((s as any).shop_display ?? 0)?.['type']), (((s as any).shop_display ?? 0)?.['number']), (((s as any).shop_display ?? 0)?.['type_i']));
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_to_number', (((s as any).shop_display ?? 0)?.['type']), (((s as any).shop_display ?? 0)?.['number']), (((s as any).shop_display ?? 0)?.['type_i'])]; enterSorted(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
          ((s as any).shop_display = (s as any).shop_display ?? {})['item_i'] = ((s as any).shop_display['item_i'] ?? 0) + (1);
          break;
        }
        (s as any).shop_display_sorted_titles = undefined;
        return;
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'add_to_number') {
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['number_' + ((s as any).locArgs?.[4] ?? 0) + '_type_' + (((s as any).shop_display_sorted ?? 0)?.['number_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['number_' + ((s as any).locArgs?.[4] ?? 0) + '_number_' + (((s as any).shop_display_sorted ?? 0)?.['number_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['number_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] = ((s as any).shop_display_sorted['number_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] ?? 0) + (1);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['max_number'] = Math.max((((s as any).shop_display_sorted ?? 0)?.['max_number']), ((s as any).locArgs?.[4] ?? 0));
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'add_to_quality') {
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['quality_' + ((s as any).locArgs?.[4] ?? 0) + '_type_' + (((s as any).shop_display_sorted ?? 0)?.['quality_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['quality_' + ((s as any).locArgs?.[4] ?? 0) + '_number_' + (((s as any).shop_display_sorted ?? 0)?.['quality_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['quality_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] = ((s as any).shop_display_sorted['quality_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] ?? 0) + (1);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['max_quality'] = Math.max((((s as any).shop_display_sorted ?? 0)?.['max_quality']), ((s as any).locArgs?.[4] ?? 0));
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'add_to_inhibition') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[4] = ((s as any).ARGS[4] ?? 0) / (5);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['inhibition_' + ((s as any).locArgs?.[4] ?? 0) + '_type_' + (((s as any).shop_display_sorted ?? 0)?.['inhibition_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['inhibition_' + ((s as any).locArgs?.[4] ?? 0) + '_number_' + (((s as any).shop_display_sorted ?? 0)?.['inhibition_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['inhibition_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] = ((s as any).shop_display_sorted['inhibition_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] ?? 0) + (1);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['max_inhibition'] = Math.max((((s as any).shop_display_sorted ?? 0)?.['max_inhibition']), ((s as any).locArgs?.[4] ?? 0));
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'add_to_heelsize') {
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['heelsize_' + ((s as any).locArgs?.[4] ?? 0) + '_type_' + (((s as any).shop_display_sorted ?? 0)?.['heelsize_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['heelsize_' + ((s as any).locArgs?.[4] ?? 0) + '_number_' + (((s as any).shop_display_sorted ?? 0)?.['heelsize_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['heelsize_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] = ((s as any).shop_display_sorted['heelsize_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] ?? 0) + (1);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['max_heelsize'] = Math.max((((s as any).shop_display_sorted ?? 0)?.['max_heelsize']), ((s as any).locArgs?.[4] ?? 0));
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'add_to_price') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[5] = qspFunc(s, 'shop_utils', 'get_discount', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
    ((s as any).ARGS = (s as any).ARGS ?? {})[4] = ((s as any).locArgs?.[4] ?? 0) * (100 - ((s as any).locArgs?.[5] ?? 0)) / 5000 * 50;
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['price_' + ((s as any).locArgs?.[4] ?? 0) + '_type_' + (((s as any).shop_display_sorted ?? 0)?.['price_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['price_' + ((s as any).locArgs?.[4] ?? 0) + '_number_' + (((s as any).shop_display_sorted ?? 0)?.['price_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'])] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['discount_' + ((s as any).locArgs?.[5] ?? 0) + '_type_' + (((s as any).shop_display_sorted ?? 0)?.['discount_' + String(((s as any).locArgs?.[5] ?? 0)) + '_index'])] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['discount_' + ((s as any).locArgs?.[5] ?? 0) + '_number_' + (((s as any).shop_display_sorted ?? 0)?.['discount_' + String(((s as any).locArgs?.[5] ?? 0)) + '_index'])] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['price_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] = ((s as any).shop_display_sorted['price_' + String(((s as any).locArgs?.[4] ?? 0)) + '_index'] ?? 0) + (1);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['discount_' + String(((s as any).locArgs?.[5] ?? 0)) + '_index'] = ((s as any).shop_display_sorted['discount_' + String(((s as any).locArgs?.[5] ?? 0)) + '_index'] ?? 0) + (1);
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['max_price'] = Math.max((((s as any).shop_display_sorted ?? 0)?.['max_price']), ((s as any).locArgs?.[4] ?? 0));
    ((s as any).shop_display_sorted = (s as any).shop_display_sorted ?? {})['max_discount'] = Math.max((((s as any).shop_display_sorted ?? 0)?.['max_discount']), ((s as any).locArgs?.[5] ?? 0));
    return;
  }
  return;
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (! hasLocation(((s as any).shop_display ?? 0)?.['view_file'])) {
    alert('shop_utils ERROR: shop_utils, display called with non-existing view_file: "' + (((s as any).shop_display ?? 0)?.['view_file']) + '"');
    return;
  }
  if (! hasLocation(((s as any).shop_display ?? 0)?.['func_file'])) {
    alert('shop_utils ERROR: shop_utils, display called with non-existing func_file: "' + (((s as any).shop_display ?? 0)?.['func_file']) + '"');
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'init') {
    ((s as any).shop_display = (s as any).shop_display ?? {})['display_func'] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).shop_display = (s as any).shop_display ?? {})['do_shop_title'] = ((s as any).locArgs?.[3] ?? 0);
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'main') {
    if (((s as any).outfitfilter ?? 0)?.['number_sort']) {
      ((s as any).shop_display = (s as any).shop_display ?? {})['sort_type'] = 'number';
    } else {
      if (((s as any).outfitfilter ?? 0)?.['quality_sort']) {
        ((s as any).shop_display = (s as any).shop_display ?? {})['sort_type'] = 'quality';
      } else {
        if (((s as any).outfitfilter ?? 0)?.['inhibition_sort']) {
          ((s as any).shop_display = (s as any).shop_display ?? {})['sort_type'] = 'inhibition';
        } else {
          if (((s as any).outfitfilter ?? 0)?.['heelsize_sort']) {
            ((s as any).shop_display = (s as any).shop_display ?? {})['sort_type'] = 'heelsize';
          } else {
            if (((s as any).outfitfilter ?? 0)?.['price_sort']) {
              ((s as any).shop_display = (s as any).shop_display ?? {})['sort_type'] = 'price';
            } else {
              if (((s as any).outfitfilter ?? 0)?.['discount_sort']) {
                ((s as any).shop_display = (s as any).shop_display ?? {})['sort_type'] = 'discount';
              } else {
                ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['number_sort'] = 1;
                ((s as any).shop_display = (s as any).shop_display ?? {})['sort_type'] = 'number';
              }
            }
          }
        }
      }
    }
    qspCall(s, '$shop_display[\'view_file\']', 'display', (((s as any).shop_display ?? 0)?.['display_func']), 'header');
    if (((s as any).outfitfilter ?? 0)?.['sort_direction'] === 0) {
      ((s as any).shop_display = (s as any).shop_display ?? {})['j'] = 0;
      ((s as any).shop_display = (s as any).shop_display ?? {})['j_inc'] = 1;
      ((s as any).shop_display = (s as any).shop_display ?? {})['j_max'] = (((s as any).shop_display_sorted ?? 0)?.['max_' + (((s as any).shop_display ?? 0)?.['sort_type'])] ?? 0);
    } else {
      ((s as any).shop_display = (s as any).shop_display ?? {})['j'] = (((s as any).shop_display_sorted ?? 0)?.['max_' + (((s as any).shop_display ?? 0)?.['sort_type'])] ?? 0);
      ((s as any).shop_display = (s as any).shop_display ?? {})['j_inc'] = (-1);
      ((s as any).shop_display = (s as any).shop_display ?? {})['j_max'] = 0;
    }
    do {
      if (((s as any).shop_display ?? 0)?.['do_shop_title']  &&  ((s as any).shop_display ?? 0)?.['sort_type'] === 'number') {
        ((s as any).shop_display = (s as any).shop_display ?? {})['shop_header'] = (((s as any).shop_display_sorted ?? 0)?.['number_' + (((s as any).shop_display ?? 0)?.['j']) + '_title'] ?? 0);
        if (((s as any).shop_display ?? 0)?.['shop_header'] !== '') {
        }
      }
      ((s as any).shop_display = (s as any).shop_display ?? {})['i'] = 0;
      while (true) {
        ((s as any).shop_display = (s as any).shop_display ?? {})['type'] = (((s as any).shop_display_sorted ?? 0)?.[(((s as any).shop_display ?? 0)?.['sort_type']) + '_' + (((s as any).shop_display ?? 0)?.['j']) + '_type_' + (((s as any).shop_display ?? 0)?.['i'])] ?? 0);
        ((s as any).shop_display = (s as any).shop_display ?? {})['number'] = (((s as any).shop_display_sorted ?? 0)?.[(((s as any).shop_display ?? 0)?.['sort_type']) + '_' + (((s as any).shop_display ?? 0)?.['j']) + '_number_' + (((s as any).shop_display ?? 0)?.['i'])] ?? 0);
        if (((s as any).shop_display ?? 0)?.['type'] !== ''  &&  ((s as any).shop_display ?? 0)?.['number'] !== 0) {
          if ((0 as any)) {
            qspCall(s, '$shop_display[\'view_file\']', 'display', (((s as any).shop_display ?? 0)?.['display_func']), 'main', (((s as any).shop_display ?? 0)?.['link']), (((s as any).shop_display ?? 0)?.['type']), (((s as any).shop_display ?? 0)?.['number']), (((s as any).shop_display ?? 0)?.['discount']));
          }
          ((s as any).shop_display = (s as any).shop_display ?? {})['i'] = ((s as any).shop_display['i'] ?? 0) + (1);
          break;
        }
        ((s as any).shop_display = (s as any).shop_display ?? {})['j'] = ((s as any).shop_display['j'] ?? 0) + ((((s as any).shop_display ?? 0)?.['j_inc']));
        qspCall(s, '$shop_display[\'view_file\']', 'display', (((s as any).shop_display ?? 0)?.['display_func']), 'footer');
        return;
      }
    } while (0 <= ((s as any).shop_display ?? 0)?.['j']  &&  ((s as any).shop_display ?? 0)?.['j'] <= ((s as any).shop_display_sorted ?? 0)['max_' + ((s as any).shop_display ?? 0)?.['sort_type']]);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'wardrobe_storage_unwanted_header') {
    scene.text('<center><table border=1><tr>');
    if (((s as any).shop_display ?? 0)?.['link'] !== 'wardrobe') {
      scene.text(`<th><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shop_utils/u0027, /u0027cleanup//u0027 & gt //u0027/u0027 + (((s as any).shop_display ?? 0)?.[/u0027view_file/u0027] ?? /u0027/u0027), ((s as any).locArgs?.[2] ?? /u0027/u0027)); return false;">Wardrobe</a></th>`);
    }
    if (((s as any).shop_display ?? 0)?.['link'] !== 'storage') {
      scene.text(`<th><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shop_utils/u0027, /u0027cleanup//u0027 & gt //u0027/u0027 + (((s as any).shop_display ?? 0)?.[/u0027view_file/u0027] ?? /u0027/u0027), ((s as any).locArgs?.[2] ?? /u0027/u0027)); return false;">Storage</a></th>`);
    }
    if (((s as any).shop_display ?? 0)?.['link'] !== 'unwanted') {
      scene.text(`<th><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shop_utils/u0027, /u0027cleanup//u0027 & gt //u0027/u0027 + (((s as any).shop_display ?? 0)?.[/u0027view_file/u0027] ?? /u0027/u0027), ((s as any).locArgs?.[2] ?? /u0027/u0027)); return false;">Unwanted</a></th>`);
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'grid_shop') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'init', 'grid_shop', 0]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'grid_wardrobe') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'init', 'grid_wardrobe', 1]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'list_wardrobe') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'init', 'list_wardrobe', 0]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  return;
  scene.build();
}

function enterDisplayGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayListWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'list_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).outfitfilter = undefined;
  (s as any).shop_display = undefined;
  (s as any).shop_display_exceptions = undefined;
  (s as any).shop_display_types = undefined;
  (s as any).shop_display_items = undefined;
  (s as any).shop_utils_view = undefined;
  (s as any).shop_display_sorted = undefined;
  (s as any).shop_display_sorted_titles = undefined;
  (s as any).outfitfilter_check = undefined;
  scene.build();
}

function enterSetAllExceptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing_view', 'init', 'set_exceptions');
  qspCall(s, 'shoe_view', 'init', 'set_exceptions');
  qspCall(s, 'bra_view', 'init', 'set_exceptions');
  qspCall(s, 'panty_view', 'init', 'set_exceptions');
  qspCall(s, 'underwear_bodysuit_view', 'init', 'set_exceptions');
  qspCall(s, 'coat_view', 'init', 'set_exceptions');
  qspCall(s, 'purse_view', 'init', 'set_exceptions');
  qspCall(s, 'tattoo_management', 'set_shop_display_exceptions');
  qspCall(s, 'piercing_management', 'set_shop_display_exceptions');
  scene.build();
}

function enterGetDiscount(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[1] = qspFunc(s, 'string', 'hash', ((s as any).locArgs?.[1] ?? 0));
  ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Clothingstock ?? 0)?.[1 + (293 + (((s as any).locArgs?.[1] ?? 0) + ((s as any).locArgs?.[2] ?? 0)) % 293) % 293] ?? 0);
  ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Clothingstock ?? 0)?.[1 + (419 + (3 * ((s as any).locArgs?.[1] ?? 0) + 5 * ((s as any).locArgs?.[2] ?? 0)) % 293) % 293] ?? 0);
  (s as any).result = (((s as any).locArgs?.[3] ?? 0) - ((s as any).locArgs?.[4] ?? 0)) * (((s as any).locArgs?.[3] ?? 0) - ((s as any).locArgs?.[4] ?? 0)) * 11 / 10000 * 5;
  return;
  scene.build();
}

function enterFilter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'reset_sorting') {
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['number_sort'] = 0;
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['quality_sort'] = 0;
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['inhibition_sort'] = 0;
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['heelsize_sort'] = 0;
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['price_sort'] = 0;
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['discount_sort'] = 0;
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_pass') {
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['include'] = 1;
    ((s as any).clothingfilter = (s as any).clothingfilter ?? {})['inc'] = 1;
    ((s as any).clothingfilter = (s as any).clothingfilter ?? {})['only'] = 1;
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'set_block') {
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['include'] = 0;
    ((s as any).clothingfilter = (s as any).clothingfilter ?? {})['inc'] = 0;
    ((s as any).clothingfilter = (s as any).clothingfilter ?? {})['only'] = 0;
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'apply') {
    (s as any).result = 0;
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['i'] = 0;
    ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['i_max'] = 0;
    while (true) {
      if (((s as any).outfitfilter ?? 0)?.['i'] < ((s as any).outfitfilter ?? 0)?.['i_max']) {
        if ((!(0 as any))) {
          return;
        }
        ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['i'] = ((s as any).outfitfilter['i'] ?? 0) + (1);
        break;
      }
      (s as any).result = 1;
      return;
    }
  }
  return;
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'init') {
    (s as any).outfitfilter_check = undefined;
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['return_loc'] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['return_arg0'] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['return_arg1'] = ((s as any).locArgs?.[4] ?? 0);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_count'] = 0;
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = 0;
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = '<td>';
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = '<td>';
    if (((s as any).cheatVars ?? 0)?.['shop_alt_color']) {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['inc_alt'] = '_alt';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['inc_color'] = 'blue';
    } else {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['inc_alt'] = '';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['inc_color'] = 'green';
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'finish') {
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td>');
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td>');
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = (String((((s as any).Headerstring ?? 0)?.['sorting'])).slice((10)-1));
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = (String((((s as any).Headerstring ?? 0)?.['filter'])).slice((10)-1));
    if (String((s as any).locArgs?.[2] ?? '') === 'mini') {
      scene.text('<center><table>');
      if (((s as any).Headerstring ?? 0)?.['filter_count'] + ((s as any).Headerstring ?? 0)?.['sorting_count'] > 0) {
        scene.text('<tr>');
        if (((s as any).Headerstring ?? 0)?.['filter_count'] > 0) {
          scene.text(`<th colspan="${(((s as any).Headerstring ?? 0)?.['filter_count'] ?? '')}"><font color="${(((s as any).Headerstring ?? 0)?.['inc_color'] ?? '')}">Include</font>/<font color="red">Exclude</font></th>`);
        }
        if (((s as any).Headerstring ?? 0)?.['sorting_count'] > 0) {
          scene.text(`"<th colspan=""${(((s as any).Headerstring ?? 0)?.['sorting_count'] ?? '')}"">Sort by</th>"`);
        }
        scene.text('</tr><tr>');
        if (((s as any).Headerstring ?? 0)?.['filter_count'] > 0) {
          scene.text('$Headerstring[\'filter\']');
        }
        if (((s as any).Headerstring ?? 0)?.['sorting_count'] > 0) {
          scene.text('$Headerstring[\'sorting\']');
        }
        scene.text('</tr>');
      }
      (s as any).Headerstring = undefined;
      return;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '_set_headerstring_split_widths', 'sorting']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '_set_headerstring_split_widths', 'filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['max_width'] = Math.max((((s as any).Headerstring ?? 0)?.['sorting_width']), (((s as any).Headerstring ?? 0)?.['filter_width']));
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_indent'] = '';
    if (((s as any).Headerstring ?? 0)?.['sorting_width'] / 2 < ((s as any).Headerstring ?? 0)?.['max_width'] / 2) {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['i'] = 0;
      do {
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_indent'] = ((s as any).Headerstring['sorting_indent'] ?? 0) + ('<td></td>');
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['i'] = ((s as any).Headerstring['i'] ?? 0) + (1);
      } while (((s as any).Headerstring ?? 0)?.['i'] < ((s as any).Headerstring ?? 0)?.['max_width'] / 2  - ((s as any).Headerstring ?? 0)?.['sorting_width'] / 2);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_indent'] = '';
    if (((s as any).Headerstring ?? 0)?.['filter_width'] / 2 < ((s as any).Headerstring ?? 0)?.['max_width'] / 2) {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['i'] = 0;
      do {
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_indent'] = ((s as any).Headerstring['filter_indent'] ?? 0) + ('<td></td>');
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['i'] = ((s as any).Headerstring['i'] ?? 0) + (1);
      } while (((s as any).Headerstring ?? 0)?.['i'] < ((s as any).Headerstring ?? 0)?.['max_width'] / 2  - ((s as any).Headerstring ?? 0)?.['filter_width'] / 2);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '_split_headerstring', 'sorting']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '_split_headerstring', 'filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.text('<center><table>');
    if (((s as any).Headerstring ?? 0)?.['sorting_count'] > 0) {
      scene.text(`"<tr><th colspan=""${(((s as any).Headerstring ?? 0)?.['max_width'] ?? '')}"">Sort by</th></tr>"`);
      scene.text('$Headerstring[\'sorting\']');
    }
    if (((s as any).Headerstring ?? 0)?.['filter_count'] > 0) {
      scene.text(`<tr><th colspan="${(((s as any).Headerstring ?? 0)?.['max_width'] ?? '')}"><font color="${(((s as any).Headerstring ?? 0)?.['inc_color'] ?? '')}">Include</font>/<font color="red">Exclude</font></th></tr>`);
      scene.text('$Headerstring[\'filter\']');
    }
    (s as any).Headerstring = undefined;
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === '_set_headerstring_split_widths') {
    if (((s as any).Headerstring ?? 0)[String((s as any).locArgs?.[2] ?? '') + '_count'] <= 10) {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})[((s as any).locArgs?.[2] ?? 0) + '_width'] = (((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '_count'] ?? 0);
      ((s as any).Headerstring = (s as any).Headerstring ?? {})[((s as any).locArgs?.[2] ?? 0) + '_col_overshoot'] = 0;
      return;
    }
    ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['count'] = (((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '_count'] ?? 0);
    ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['cols'] = 2;
    while (true) {
      if (((s as any).temp_sh_hs_vars ?? 0)?.['count'] > ((s as any).temp_sh_hs_vars ?? 0)?.['cols'] * 10) {
        ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['cols'] = ((s as any).temp_sh_hs_vars['cols'] ?? 0) + (1);
        break;
      }
      ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['width'] = (((s as any).temp_sh_hs_vars ?? {})?.['count'] ?? 0) / (((s as any).temp_sh_hs_vars ?? {})?.['cols'] ?? 0);
      ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['cols_overshoot'] = (((s as any).temp_sh_hs_vars ?? {})?.['count'] ?? 0) % (((s as any).temp_sh_hs_vars ?? {})?.['cols'] ?? 0);
      ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['new_width'] = (((s as any).temp_sh_hs_vars ?? {})?.['width'] ?? 0) + ((((s as any).temp_sh_hs_vars ?? 0)?.['cols_overshoot'] > 0) ? (1) : (0));
      ((s as any).Headerstring = (s as any).Headerstring ?? {})[((s as any).locArgs?.[2] ?? 0) + '_width'] = (((s as any).temp_sh_hs_vars ?? 0)?.['new_width']);
      ((s as any).Headerstring = (s as any).Headerstring ?? {})[((s as any).locArgs?.[2] ?? 0) + '_cols'] = (((s as any).temp_sh_hs_vars ?? 0)?.['cols']);
      ((s as any).Headerstring = (s as any).Headerstring ?? {})[((s as any).locArgs?.[2] ?? 0) + '_col_overshoot'] = (((s as any).temp_sh_hs_vars ?? 0)?.['cols_overshoot']);
      (s as any).temp_sh_hs_vars = undefined;
      return;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === '_split_headerstring') {
    if (((s as any).Headerstring ?? 0)[String((s as any).locArgs?.[2] ?? '') + '_count'] <= ((s as any).Headerstring ?? 0)[String((s as any).locArgs?.[2] ?? '') + '_width']) {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})[((s as any).locArgs?.[2] ?? 0)] = '<tr>' + (((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '_indent'] ?? 0) + '' + (((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0)] ?? 0) + '</tr>';
      return;
    }
    ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['cur_string'] = (((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0)] ?? 0);
    ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['new_string'] = '<tr>' + (((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '_indent'] ?? 0);
    ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['i'] = 0;
    while (true) {
      if (((s as any).temp_sh_hs_vars ?? 0)?.['i'] < ((s as any).Headerstring ?? 0)[String((s as any).locArgs?.[2] ?? '') + '_cols'] - 1) {
        ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['temp_width'] = ((s as any).Headerstring ?? 0)[String((s as any).locArgs?.[2] ?? '') + '_width'] - ((s as any).iif ?? 0)(((s as any).Headerstring ?? 0)[String((s as any).locArgs?.[2] ?? '') + '_col_overshoot'] > 0  &&  ((s as any).temp_sh_hs_vars ?? 0)?.['i'] >= ((s as any).Headerstring ?? 0)[String((s as any).locArgs?.[2] ?? '') + '_col_overshoot'], 1, 0);
        ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['j'] = 0;
        ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['new_string'] = ((s as any).temp_sh_hs_vars['new_string'] ?? 0) + ((((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '_indent'] ?? 0));
        while (true) {
          if (((s as any).temp_sh_hs_vars ?? 0)?.['j'] < ((s as any).temp_sh_hs_vars ?? 0)?.['temp_width']) {
            ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['td_index'] = 5 + ((String((((s as any).temp_sh_hs_vars ?? 0)?.['cur_string'])).indexOf(String('</td><td>'))) + 1);
            ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['head'] = (String((((s as any).temp_sh_hs_vars ?? 0)?.['cur_string'])).slice((1)-1, ((1)-1)+((((s as any).temp_sh_hs_vars ?? {})?.['td_index'] ?? 0) - 1)));
            ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['tail'] = (String((((s as any).temp_sh_hs_vars ?? 0)?.['cur_string'])).slice(((((s as any).temp_sh_hs_vars ?? 0)?.['td_index']))-1));
            ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['new_string'] = ((s as any).temp_sh_hs_vars['new_string'] ?? 0) + ((((s as any).temp_sh_hs_vars ?? 0)?.['head']));
            ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['cur_string'] = (((s as any).temp_sh_hs_vars ?? 0)?.['tail']);
            ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['j'] = ((s as any).temp_sh_hs_vars['j'] ?? 0) + (1);
            break;
          }
          ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['new_string'] = ((s as any).temp_sh_hs_vars['new_string'] ?? 0) + ('</tr><tr>' + (((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '_indent'] ?? 0));
          ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['i'] = ((s as any).temp_sh_hs_vars['i'] ?? 0) + (1);
          break;
        }
      }
      ((s as any).temp_sh_hs_vars = (s as any).temp_sh_hs_vars ?? {})['new_string'] = ((s as any).temp_sh_hs_vars['new_string'] ?? 0) + ((((s as any).temp_sh_hs_vars ?? 0)?.['cur_string']) + '</tr>');
      ((s as any).Headerstring = (s as any).Headerstring ?? {})[((s as any).locArgs?.[2] ?? 0)] = (((s as any).temp_sh_hs_vars ?? 0)?.['new_string']);
      (s as any).temp_sh_hs_vars = undefined;
      return;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_number_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['number_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['number_sort'] = 1;
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/number_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png">');
    } else {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027number_sort\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027shop_utils\u0027, \u0027filter\u0027, \u0027reset_sorting/\u0027 & outfitfilter[/\u0027number_sort/\u0027] = 1 & gt /\u0027\u0027 + ((s as any).locArgs?.[2] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/number_exc.png"></a>');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_quality_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['quality_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['quality_sort'] = 1;
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/quality_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png">');
    } else {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027quality_sort\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027shop_utils\u0027, \u0027filter\u0027, \u0027reset_sorting/\u0027 & outfitfilter[/\u0027quality_sort/\u0027] = 1 & gt /\u0027\u0027 + ((s as any).locArgs?.[2] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/quality_exc.png"></a>');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_inhibition_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['inhibition_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['inhibition_sort'] = 1;
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/inhibition_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png">');
    } else {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027inhibition_sort\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027shop_utils\u0027, \u0027filter\u0027, \u0027reset_sorting/\u0027 & outfitfilter[/\u0027inhibition_sort/\u0027] = 1 & gt /\u0027\u0027 + ((s as any).locArgs?.[2] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/inhibition_exc.png"></a>');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_heelsize_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['heelsize_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['heelsize_sort'] = 1;
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/heels_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png">');
    } else {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027heelsize_sort\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027shop_utils\u0027, \u0027filter\u0027, \u0027reset_sorting/\u0027 & outfitfilter[/\u0027heelsize_sort/\u0027] = 1 & gt /\u0027\u0027 + ((s as any).locArgs?.[2] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/heels_exc.png"></a>');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_price_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['price_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['price_sort'] = 1;
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/price_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png">');
    } else {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027price_sort\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027shop_utils\u0027, \u0027filter\u0027, \u0027reset_sorting/\u0027 & outfitfilter[/\u0027price_sort/\u0027] = 1 & gt /\u0027\u0027 + ((s as any).locArgs?.[2] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/price_exc.png"></a>');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_discount_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['discount_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['discount_sort'] = 1;
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/discount_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png">');
    } else {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027discount_sort\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027shop_utils\u0027, \u0027filter\u0027, \u0027reset_sorting/\u0027 & outfitfilter[/\u0027discount_sort/\u0027] = 1 & gt /\u0027\u0027 + ((s as any).locArgs?.[2] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/discount_exc.png"></a>');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_sort_direction') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['sort_direction']) {
      ((s as any).outfitfilter = (s as any).outfitfilter ?? {})['sort_direction'] = 1;
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027sort_direction\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[2] ?? \u0027\u0027), ((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/high_low.png"></a>');
    } else {
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027sort_direction\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[2] ?? \u0027\u0027), ((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/low_high.png"></a>');
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_prostitution_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['prostitution'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['prostitution'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027prostitution\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/prostitute_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['prostitution'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['prostitution'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027prostitution\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/prostitute_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['prostitution'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027prostitution\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/prostitute_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_stripper_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['stripper'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['stripper'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027stripper\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/stripper_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['stripper'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['stripper'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027stripper\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/stripper_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['stripper'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027stripper\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/stripper_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_bimbo_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['bimbo'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['bimbo'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027bimbo\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/bimbo_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['bimbo'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['bimbo'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027bimbo\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/bimbo_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['bimbo'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027bimbo\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/bimbo_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_goth_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['goth'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['goth'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027goth\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/goth_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['goth'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['goth'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027goth\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/goth_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['goth'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027goth\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/goth_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_preppy_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['preppy'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['preppy'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027preppy\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/preppy_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['preppy'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['preppy'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027preppy\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/preppy_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['preppy'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027preppy\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/preppy_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_prude_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['prude'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['prude'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027prude\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/prude_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['prude'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['prude'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027prude\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/prude_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['prude'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027prude\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/prude_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_punk_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['punk'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['punk'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027punk\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/punk_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['punk'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['punk'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027punk\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/punk_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['punk'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027punk\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/punk_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_alternative_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['alternative'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['alternative'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027alternative\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/alternative_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['alternative'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['alternative'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027alternative\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/alternative_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['alternative'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027alternative\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/alternative_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_conservative_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['conservative'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['conservative'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027conservative\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/conservative_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['conservative'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['conservative'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027conservative\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/conservative_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['conservative'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027conservative\u0027 = 1; (s.outfitfilter ??= {})\u0027risque\u0027 = 0; (s.outfitfilter ??= {})\u0027too_risque\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/conservative_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_risque_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['risque'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['risque'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027risque\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/risque_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['risque'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['risque'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027risque\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/risque_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['risque'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027risque\u0027 = 1; (s.outfitfilter ??= {})\u0027conservative\u0027 = 0; (s.outfitfilter ??= {})\u0027too_risque\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/risque_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_too_risque_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['too_risque'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['too_risque'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027too_risque\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/too_risque_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['too_risque'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['too_risque'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027too_risque\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/too_risque_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['too_risque'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027too_risque\u0027 = 1; (s.outfitfilter ??= {})\u0027conservative\u0027 = 0; (s.outfitfilter ??= {})\u0027risque\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/too_risque_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_loose_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['loose'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['loose'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027loose\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/loose_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['loose'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['loose'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027loose\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/loose_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['loose'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027loose\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/loose_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_sport_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['sport'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['sport'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027sport\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/sport_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['sport'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['sport'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027sport\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/sport_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['sport'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027sport\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/sport_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_school_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['school'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['school'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027school\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/school_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['school'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['school'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027school\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/school_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['school'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027school\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/school_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_maid_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['maid'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['maid'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027maid\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/maid_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['maid'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['maid'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027maid\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/maid_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['maid'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027maid\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/maid_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_server_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['server'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['server'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027server\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/server_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['server'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['server'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027server\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/server_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['server'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027server\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/server_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_swim_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['swim'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['swim'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027swim\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/swim_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['swim'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['swim'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027swim\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/swim_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['swim'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027swim\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/swim_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_heels_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['heels'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['heels'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027heels\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/heels_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['heels'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['heels'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027heels\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/heels_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['heels'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027heels\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/heels_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_comfy_heels_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['comfy_heels'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['comfy_heels'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027comfy_heels\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/comfy_heels_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['comfy_heels'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['comfy_heels'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027comfy_heels\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/comfy_heels_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['comfy_heels'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027comfy_heels\u0027 = 1; (s.outfitfilter ??= {})\u0027uncomfy_heels\u0027 = 0; (s.outfitfilter ??= {})\u0027extreme_heels\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/comfy_heels_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_uncomfy_heels_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['uncomfy_heels'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['uncomfy_heels'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027uncomfy_heels\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/uncomfy_heels_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['uncomfy_heels'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['uncomfy_heels'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027uncomfy_heels\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/uncomfy_heels_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['uncomfy_heels'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027uncomfy_heels\u0027 = 1; (s.outfitfilter ??= {})\u0027comfy_heels\u0027 = 0; (s.outfitfilter ??= {})\u0027extreme_heels\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/uncomfy_heels_off.png"></a>');
      }
    }
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'setup_extreme_heels_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[3] = (((s as any).Headerstring ?? 0)?.['return_loc']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[4] = (((s as any).Headerstring ?? 0)?.['return_arg0']);
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).Headerstring ?? 0)?.['return_arg1']);
    }
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['extreme_heels'] > 0) {
      ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['extreme_heels'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ')';
      ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027extreme_heels\u0027 = -1; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/extreme_heels_inc' + (((s as any).Headerstring ?? 0)?.['inc_alt']) + '.png"></a>');
    } else {
      if (((s as any).outfitfilter ?? 0)?.['extreme_heels'] < 0) {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['extreme_heels'] = '(' + ((s as any).locArgs?.[2] ?? 0) + ') = 0';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027extreme_heels\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/extreme_heels_exc.png"></a>');
      } else {
        ((s as any).outfitfilter_check = (s as any).outfitfilter_check ?? {})['extreme_heels'] = '1';
        ((s as any).Headerstring = (s as any).Headerstring ?? {})['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.outfitfilter ??= {})\u0027extreme_heels\u0027 = 1; (s.outfitfilter ??= {})\u0027comfy_heels\u0027 = 0; (s.outfitfilter ??= {})\u0027uncomfy_heels\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(((s as any).locArgs?.[3] ?? \u0027\u0027), ((s as any).locArgs?.[4] ?? \u0027\u0027), ((s as any).locArgs?.[5] ?? \u0027\u0027)); return false;"><img src="images/system/icons/clothing/extreme_heels_off.png"></a>');
      }
    }
    return;
  }
  return;
  scene.build();
}

function enterDisplayClothingGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayClothingGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayClothingListWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'list_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayShoesGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayShoesListWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'list_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayBrasGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayBrasGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayPantiesGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayPantiesGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayBodysuitsGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayBodysuitsGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayCoatsGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayCoatsGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayPursesGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayPursesGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayTattoosGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterDisplayPiercingsGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterInitDisplay(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'start']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_type', ((s as any).locArgs?.[1] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_link', ((s as any).locArgs?.[2] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_steps', ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_discount', ((s as any).locArgs?.[5] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shop_display ?? 0)?.['link'] === 'wardrobe'  ||  ((s as any).shop_display ?? 0)?.['link'] === 'storage'  ||  ((s as any).shop_display ?? 0)?.['link'] === 'unwanted') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_return', 'wardrobe', 'main']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'end']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterInitDisplayMultiple(s: GameState, scene: SceneBuilder): void {
  ((s as any).shop_display = (s as any).shop_display ?? {})['type_max'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'start']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_link', ((s as any).locArgs?.[1] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_steps', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_discount', ((s as any).locArgs?.[4] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shop_display ?? 0)?.['link'] === 'wardrobe'  ||  ((s as any).shop_display ?? 0)?.['link'] === 'storage'  ||  ((s as any).shop_display ?? 0)?.['link'] === 'unwanted') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_return', 'wardrobe', 'main']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'end']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterInitAddTypes(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'clothing') {
    qspCall(s, 'clothing_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'shoes') {
      qspCall(s, 'shoe_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'bras') {
        qspCall(s, 'bra_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'panties') {
          qspCall(s, 'panty_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'bodysuits') {
            qspCall(s, 'underwear_bodysuit_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'coats') {
              qspCall(s, 'coat_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'purses') {
                qspCall(s, 'purse_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
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

function enterAddTypes(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterInitAddTypes(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
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
    case 'sorted':
      enterSorted(s, scene);
      break;
    case 'display':
      enterDisplay(s, scene);
      break;
    case 'display_grid_shop':
      enterDisplayGridShop(s, scene);
      break;
    case 'display_grid_wardrobe':
      enterDisplayGridWardrobe(s, scene);
      break;
    case 'display_list_wardrobe':
      enterDisplayListWardrobe(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    case 'cleanup':
      enterCleanup(s, scene);
      break;
    case 'set_all_exceptions':
      enterSetAllExceptions(s, scene);
      break;
    case 'get_discount':
      enterGetDiscount(s, scene);
      break;
    case 'filter':
      enterFilter(s, scene);
      break;
    case 'filter_builder':
      enterFilterBuilder(s, scene);
      break;
    case 'display_clothing_grid_shop':
      enterDisplayClothingGridShop(s, scene);
      break;
    case 'display_clothing_grid_wardrobe':
      enterDisplayClothingGridWardrobe(s, scene);
      break;
    case 'display_clothing_list_wardrobe':
      enterDisplayClothingListWardrobe(s, scene);
      break;
    case 'display_shoes_grid_shop':
      enterDisplayShoesGridShop(s, scene);
      break;
    case 'display_shoes_list_wardrobe':
      enterDisplayShoesListWardrobe(s, scene);
      break;
    case 'display_bras_grid_shop':
      enterDisplayBrasGridShop(s, scene);
      break;
    case 'display_bras_grid_wardrobe':
      enterDisplayBrasGridWardrobe(s, scene);
      break;
    case 'display_panties_grid_shop':
      enterDisplayPantiesGridShop(s, scene);
      break;
    case 'display_panties_grid_wardrobe':
      enterDisplayPantiesGridWardrobe(s, scene);
      break;
    case 'display_bodysuits_grid_shop':
      enterDisplayBodysuitsGridShop(s, scene);
      break;
    case 'display_bodysuits_grid_wardrobe':
      enterDisplayBodysuitsGridWardrobe(s, scene);
      break;
    case 'display_coats_grid_shop':
      enterDisplayCoatsGridShop(s, scene);
      break;
    case 'display_coats_grid_wardrobe':
      enterDisplayCoatsGridWardrobe(s, scene);
      break;
    case 'display_purses_grid_shop':
      enterDisplayPursesGridShop(s, scene);
      break;
    case 'display_purses_grid_wardrobe':
      enterDisplayPursesGridWardrobe(s, scene);
      break;
    case 'display_tattoos_grid_shop':
      enterDisplayTattoosGridShop(s, scene);
      break;
    case 'display_piercings_grid_shop':
      enterDisplayPiercingsGridShop(s, scene);
      break;
    case 'init_display':
      enterInitDisplay(s, scene);
      break;
    case 'init_display_multiple':
      enterInitDisplayMultiple(s, scene);
      break;
    case 'init_add_types':
      enterInitAddTypes(s, scene);
      break;
    case 'add_types':
      enterAddTypes(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_utils: LocationDef = {
  name: 'shop_utils',
  title: '<center><table border=1><tr>',
  region: 'other',
  enter: enter,
};
