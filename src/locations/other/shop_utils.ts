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
  // TODO-QSP: end
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'start') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_defaults']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_outfit_file', ((s as any).locArgs?.[2] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_link', ((s as any).locArgs?.[3] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_defaults') {
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_max'] = 0;
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['step'] = 1;
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['offset'] = 0;
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['discount'] = 0;
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['return_loc'] = ((s as any).loc ?? 0);
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['return_arg0'] = ((s as any).loc_arg ?? 0);
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['return_arg1'] = '';
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['link'] = '';
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['inclusion_check'] = '1';
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['bcolor'] = '';
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['number_sort'] = 1;
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_type') {
    if ((Array.isArray((s as any).shop_display_types) ? ((s as any).shop_display_types as any[]).indexOf(((s as any).locArgs?.[2] ?? 0)) : -1) < 0) {
      // TODO-QSP: $shop_display_types[] = $ARGS[2]
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_item') {
    if ((Array.isArray((s as any).shop_display_items) ? ((s as any).shop_display_items as any[]).indexOf(((s as any).locArgs?.[2] ?? 0) + '-' + ((s as any).locArgs?.[3] ?? 0)) : -1) < 0) {
      // TODO-QSP: $shop_display_items[] = $ARGS[2] + '-' + ARGS[3]
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_all_types') {
    if (! hasLocation(((s as any).shop_display ?? 0)?.['view_file'])) {
      return;
    }
    // TODO-QSP: gs $shop_display['view_file'], 'init', 'add_types', 'all'
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_outfit_file') {
    if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('clothing'))) + 1) {
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'clothing';
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'clothing';
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'clothing_view';
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'clothing_attributes';
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '';
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 1;
    } else {
      if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('bra'))) + 1) {
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'bra';
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'bras';
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'bra_view';
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'underwear_attributes';
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '_bras';
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 1;
      } else {
        if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('panty'))) + 1  ||  (String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('panties'))) + 1) {
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'panty';
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'panties';
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'panty_view';
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'underwear_attributes';
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '_panties';
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 1;
        } else {
          if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('bodysuit'))) + 1) {
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'bodysuit';
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'underwear_bodysuits';
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'underwear_bodysuit_view';
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'underwear_attributes';
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '_bodysuits';
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 1;
          } else {
            if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('shoe'))) + 1) {
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'shoe';
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'shoes';
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'shoe_view';
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'shoe_attributes';
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '_shoes';
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 1;
            } else {
              if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('coat'))) + 1) {
                if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'coat';
                if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'coats';
                if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'coat_view';
                if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'coat_attributes';
                if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '_coats';
                if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 1;
              } else {
                if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('purse'))) + 1) {
                  if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'purse';
                  if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'purses';
                  if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'purse_view';
                  if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'purse_attributes';
                  if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '_purses';
                  if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 1;
                } else {
                  if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('tattoo'))) + 1) {
                    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'tattoo';
                    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'tattoo_management';
                    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'tattoo_view';
                    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'tattoo_attributes';
                    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '_tattoos';
                    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 0;
                  } else {
                    if ((String(((s as any).locArgs?.[2] ?? 0)).indexOf(String('piercing'))) + 1) {
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = 'piercing';
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = 'piercing_management';
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = 'piercing_view';
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = 'piercing_attributes';
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = '_piercings';
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = 0;
                    } else {
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['outfit_type'] = ((s as any).locArgs?.[2] ?? 0);
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['func_file'] = ((s as any).locArgs?.[3] ?? 0);
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['view_file'] = ((s as any).locArgs?.[4] ?? 0);
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['attr_file'] = ((s as any).locArgs?.[5] ?? 0);
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_suffix'] = ((s as any).locArgs?.[6] ?? 0);
                      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_sorted'] = qspUntranslated(s, "ARGS[7]", { location: "shop_utils" });
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
  if (((s as any).locArgs?.[1] ?? 0) === 'set_link') {
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['link'] = ((s as any).locArgs?.[2] ?? 0);
    if (((s as any).shop_display ?? 0)?.['link'] === 'shop') {
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'is_owned\', $ARGS[1], ARGS[2]) = 0';
    } else {
      if (((s as any).shop_display ?? 0)?.['link'] === 'cheat') {
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['inclusion_check'] = '1';
      } else {
        if (((s as any).shop_display ?? 0)?.['link'] === 'wardrobe') {
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'in_wardrobe\', $ARGS[1], ARGS[2])';
        } else {
          if (((s as any).shop_display ?? 0)?.['link'] === 'storage') {
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'in_storage\', $ARGS[1], ARGS[2])';
          } else {
            if (((s as any).shop_display ?? 0)?.['link'] === 'unwanted') {
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'in_unwanted\', $ARGS[1], ARGS[2])';
            } else {
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['inclusion_check'] = 'func($ARGS[0], \'is_owned\', $ARGS[1], ARGS[2])';
            }
          }
        }
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_steps') {
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['step'] = 0;
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['offset'] = 0;
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_discount') {
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['discount'] = 0;
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_return') {
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['return_loc'] = ((s as any).locArgs?.[2] ?? 0);
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['return_arg0'] = ((s as any).locArgs?.[3] ?? 0);
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['return_arg1'] = ((s as any).locArgs?.[4] ?? 0);
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_bcolor') {
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['bcolor'] = ((s as any).locArgs?.[2] ?? 0);
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_default_exceptions') {
    if (hasLocation(((s as any).shop_display ?? 0)?.['view_file'])) {
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
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['init'] = 1;
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_max'] = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterSorted(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSorted(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'main') {
    if (! hasLocation(((s as any).shop_display ?? 0)?.['func_file'])) {
      return;
    }
    if (! hasLocation(((s as any).shop_display ?? 0)?.['view_file'])) {
      return;
    }
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_i'] = 0;
    // TODO-QSP: :type_loop_sorted
    if (((s as any).shop_display ?? 0)?.['type_i'] < Object.keys((s as any).shop_display_types ?? {}).length) {
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type'] = qspUntranslated(s, "shop_display_types[shop_display['type_i']]", { location: "shop_utils" });
      // TODO-QSP: gs $shop_display['func_file'], 'totals', $shop_display['type']
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['number'] = 1 + (((s as any).shop_display ?? {})?.['offset'] ?? 0);
      // TODO-QSP: :main_loop_sorted
      if (((s as any).shop_display ?? 0)?.['number'] <= ((s as any).total ?? 0)) {
        if (((s as any).shop_display_exceptions ?? 0)[((s as any).shop_display ?? 0)?.['type'] + ((s as any).shop_display ?? 0)?.['type_suffix'] + '-' + ((s as any).shop_display ?? 0)?.['number']] === 0) {
          if ((0 as any)) {
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['shop'] = (String(((s as any).shop_display ?? 0)?.['type']).slice((1)-1, ((1)-1)+((String((((s as any).shop_display ?? {})?.['type'] ?? 0) + '_').indexOf(String('_'))) + 1 - 1)));
            if (((s as any).shop_display ?? 0)?.['shop'] !== '') {
              if ((Array.isArray((s as any).shop_display_sorted_titles) ? ((s as any).shop_display_sorted_titles as any[]).indexOf(((s as any).shop_display ?? 0)?.['shop']) : -1) < 0) {
                // TODO-QSP: $shop_display_sorted_titles[] = $shop_display['shop']
                // TODO-QSP: $shop_display_sorted['number_' + shop_display['type_i'] + '_title'] = $shop_display['shop']
              }
            }
            if (((s as any).shop_display ?? 0)?.['do_sorted']) {
              // TODO-QSP: gs $shop_display['view_file'], 'sorted', 'add', $shop_display['type'], shop_display['number'], shop_...
            } else {
              // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $shop_display['type'], shop_display['number'], shop_disp...
            }
          }
        }
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['number'] = ((s as any).shop_display['number'] ?? 0) + (((s as any).shop_display ?? 0)?.['step']);
        // TODO-QSP: jump 'main_loop_sorted'
      }
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_i'] = ((s as any).shop_display['type_i'] ?? 0) + (1);
      // TODO-QSP: jump 'type_loop_sorted'
    }
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['unused_type_i'] = ((s as any).shop_display ?? 0)?.['type_i'];
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['item_i'] = 0;
    // TODO-QSP: :item_loop_sorted
    if (((s as any).shop_display ?? 0)?.['item_i'] < Object.keys((s as any).shop_display_items ?? {}).length) {
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['item_entry'] = qspUntranslated(s, "shop_display_items[shop_display['item_i']]", { location: "shop_utils" });
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['sep_index'] = (String(((s as any).shop_display ?? 0)?.['item_entry']).indexOf(String('-'))) + 1;
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type'] = (String(((s as any).shop_display ?? 0)?.['item_entry']).slice((1)-1, ((1)-1)+((((s as any).shop_display ?? {})?.['sep_index'] ?? 0) - 1)));
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['number'] = parseFloat((String(((s as any).shop_display ?? 0)?.['item_entry']).slice(((((s as any).shop_display ?? {})?.['sep_index'] ?? 0) + 1)-1)));
      if ((0 as any)) {
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['shop'] = (String((((s as any).shop_display ?? {})?.['type'] ?? 0) + '_').slice((1)-1, ((1)-1)+((String(((s as any).shop_display ?? 0)?.['type']).indexOf(String('_'))) + 1 - 1)));
        if ((Array.isArray((s as any).shop_display_sorted_titles) ? ((s as any).shop_display_sorted_titles as any[]).indexOf(((s as any).shop_display ?? 0)?.['shop']) : -1) < 0) {
          // TODO-QSP: $shop_display_sorted_titles[] = $shop_display['shop']
          // TODO-QSP: $shop_display_sorted['number_' + shop_display['unused_type_i'] + '_title'] = $shop_display['shop']
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_i'] = ((s as any).shop_display ?? 0)?.['unused_type_i'];
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['unused_type_i'] = ((s as any).shop_display['unused_type_i'] ?? 0) + (1);
        } else {
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_i'] = qspUntranslated(s, "arrpos('shop_display_types', shop_display['type'])", { location: "shop_utils" });
          if (((s as any).shop_display ?? 0)?.['type_i'] < 0) {
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_i'] = 0;
            // TODO-QSP: $shop_display_types[] = $shop_display['type']
          }
        }
        if (((s as any).shop_display ?? 0)?.['do_sorted']) {
          // TODO-QSP: gs $shop_display['view_file'], 'sorted', 'add', $shop_display['type'], shop_display['number'], shop_...
        } else {
          // TODO-QSP: gs 'shop_utils', 'sorted', 'add_to_number', $shop_display['type'], shop_display['number'], shop_disp...
        }
      }
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['item_i'] = ((s as any).shop_display['item_i'] ?? 0) + (1);
      // TODO-QSP: jump 'item_loop_sorted'
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_to_number') {
    // TODO-QSP: $shop_display_sorted['number_<<ARGS[4]>>_type_' + shop_display_sorted['number_<<ARGS[4]>>_index']] =...
    // TODO-QSP: shop_display_sorted['number_<<ARGS[4]>>_number_' + shop_display_sorted['number_<<ARGS[4]>>_index']] ...
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['number_' + String((s as any).ARGS[4] || '') + '_index'] = ((s as any).shop_display_sorted['number_' + String((s as any).ARGS[4] || '') + '_index'] ?? 0) + (1);
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['max_number'] = qspUntranslated(s, "max(shop_display_sorted['max_number'], ARGS[4])", { location: "shop_utils" });
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_to_quality') {
    // TODO-QSP: $shop_display_sorted['quality_<<ARGS[4]>>_type_' + shop_display_sorted['quality_<<ARGS[4]>>_index']]...
    // TODO-QSP: shop_display_sorted['quality_<<ARGS[4]>>_number_' + shop_display_sorted['quality_<<ARGS[4]>>_index']...
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['quality_' + String((s as any).ARGS[4] || '') + '_index'] = ((s as any).shop_display_sorted['quality_' + String((s as any).ARGS[4] || '') + '_index'] ?? 0) + (1);
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['max_quality'] = qspUntranslated(s, "max(shop_display_sorted['max_quality'], ARGS[4])", { location: "shop_utils" });
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_to_inhibition') {
    // TODO-QSP: ARGS[4] /= 5
    // TODO-QSP: $shop_display_sorted['inhibition_<<ARGS[4]>>_type_' + shop_display_sorted['inhibition_<<ARGS[4]>>_in...
    // TODO-QSP: shop_display_sorted['inhibition_<<ARGS[4]>>_number_' + shop_display_sorted['inhibition_<<ARGS[4]>>_i...
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['inhibition_' + String((s as any).ARGS[4] || '') + '_index'] = ((s as any).shop_display_sorted['inhibition_' + String((s as any).ARGS[4] || '') + '_index'] ?? 0) + (1);
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['max_inhibition'] = qspUntranslated(s, "max(shop_display_sorted['max_inhibition'], ARGS[4])", { location: "shop_utils" });
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_to_heelsize') {
    // TODO-QSP: $shop_display_sorted['heelsize_<<ARGS[4]>>_type_' + shop_display_sorted['heelsize_<<ARGS[4]>>_index'...
    // TODO-QSP: shop_display_sorted['heelsize_<<ARGS[4]>>_number_' + shop_display_sorted['heelsize_<<ARGS[4]>>_index...
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['heelsize_' + String((s as any).ARGS[4] || '') + '_index'] = ((s as any).shop_display_sorted['heelsize_' + String((s as any).ARGS[4] || '') + '_index'] ?? 0) + (1);
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['max_heelsize'] = qspUntranslated(s, "max(shop_display_sorted['max_heelsize'], ARGS[4])", { location: "shop_utils" });
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'add_to_price') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = qspFunc(s, 'shop_utils', 'get_discount', ((s as any).locArgs?.[2] ?? 0), qspUntranslated(s, "ARGS[3]", { location: "shop_utils" }));
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).ARGS ?? 0)[4] * (100 - ((s as any).ARGS ?? 0)[5]) / 5000 * 50;
    // TODO-QSP: $shop_display_sorted['price_<<ARGS[4]>>_type_' + shop_display_sorted['price_<<ARGS[4]>>_index']] = $...
    // TODO-QSP: shop_display_sorted['price_<<ARGS[4]>>_number_' + shop_display_sorted['price_<<ARGS[4]>>_index']] = ...
    // TODO-QSP: $shop_display_sorted['discount_<<ARGS[5]>>_type_' + shop_display_sorted['discount_<<ARGS[5]>>_index'...
    // TODO-QSP: shop_display_sorted['discount_<<ARGS[5]>>_number_' + shop_display_sorted['discount_<<ARGS[5]>>_index...
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['price_' + String((s as any).ARGS[4] || '') + '_index'] = ((s as any).shop_display_sorted['price_' + String((s as any).ARGS[4] || '') + '_index'] ?? 0) + (1);
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['discount_' + String((s as any).ARGS[5] || '') + '_index'] = ((s as any).shop_display_sorted['discount_' + String((s as any).ARGS[5] || '') + '_index'] ?? 0) + (1);
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['max_price'] = qspUntranslated(s, "max(shop_display_sorted['max_price'], ARGS[4])", { location: "shop_utils" });
    if (!(s as any).shop_display_sorted) (s as any).shop_display_sorted = {}; (s as any).shop_display_sorted['max_discount'] = qspUntranslated(s, "max(shop_display_sorted['max_discount'], ARGS[5])", { location: "shop_utils" });
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if (! hasLocation(((s as any).shop_display ?? 0)?.['view_file'])) {
    return;
  }
  if (! hasLocation(((s as any).shop_display ?? 0)?.['func_file'])) {
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'init') {
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['display_func'] = ((s as any).locArgs?.[2] ?? 0);
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['do_shop_title'] = qspUntranslated(s, "ARGS[3]", { location: "shop_utils" });
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'main') {
    if (((s as any).outfitfilter ?? 0)?.['number_sort']) {
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['sort_type'] = 'number';
    } else {
      if (((s as any).outfitfilter ?? 0)?.['quality_sort']) {
        if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['sort_type'] = 'quality';
      } else {
        if (((s as any).outfitfilter ?? 0)?.['inhibition_sort']) {
          if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['sort_type'] = 'inhibition';
        } else {
          if (((s as any).outfitfilter ?? 0)?.['heelsize_sort']) {
            if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['sort_type'] = 'heelsize';
          } else {
            if (((s as any).outfitfilter ?? 0)?.['price_sort']) {
              if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['sort_type'] = 'price';
            } else {
              if (((s as any).outfitfilter ?? 0)?.['discount_sort']) {
                if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['sort_type'] = 'discount';
              } else {
                if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['number_sort'] = 1;
                if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['sort_type'] = 'number';
              }
            }
          }
        }
      }
    }
    // TODO-QSP: gs $shop_display['view_file'], 'display', $shop_display['display_func'], 'header'
    if (((s as any).outfitfilter ?? 0)?.['sort_direction'] === 0) {
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['j'] = 0;
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['j_inc'] = 1;
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['j_max'] = ((s as any).shop_display_sorted ?? 0)?.['max_' + (((s as any).shop_display ?? {})?.['sort_type'] ?? 0)];
    } else {
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['j'] = ((s as any).shop_display_sorted ?? 0)?.['max_' + (((s as any).shop_display ?? {})?.['sort_type'] ?? 0)];
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['j_inc'] = (-1);
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['j_max'] = 0;
    }
    // TODO-QSP: :display_filter_loop
    if (((s as any).shop_display ?? 0)?.['do_shop_title']  &&  ((s as any).shop_display ?? 0)?.['sort_type'] === 'number') {
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['shop_header'] = ((s as any).shop_display_sorted ?? 0)?.['number_\' + shop_display[\'j\'] + \'_title'];
      if (((s as any).shop_display ?? 0)?.['shop_header'] !== '') {
      }
    }
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['i'] = 0;
    // TODO-QSP: :main_display_loop
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type'] = ((s as any).shop_display_sorted ?? 0)?.[(((s as any).shop_display ?? {})?.['sort_type'] ?? 0) + '_' + (((s as any).shop_display ?? {})?.['j'] ?? 0) + '_type_' + (((s as any).shop_display ?? {})?.['i'] ?? 0)];
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['number'] = ((s as any).shop_display_sorted ?? 0)?.[(((s as any).shop_display ?? {})?.['sort_type'] ?? 0) + '_' + (((s as any).shop_display ?? {})?.['j'] ?? 0) + '_number_' + (((s as any).shop_display ?? {})?.['i'] ?? 0)];
    if (((s as any).shop_display ?? 0)?.['type'] !== ''  &&  ((s as any).shop_display ?? 0)?.['number'] !== 0) {
      if ((0 as any)) {
        // TODO-QSP: gs $shop_display['view_file'], 'display', $shop_display['display_func'], 'main', $shop_display['link...
      }
      if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['i'] = ((s as any).shop_display['i'] ?? 0) + (1);
      // TODO-QSP: jump 'main_display_loop'
    }
    if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['j'] = ((s as any).shop_display['j'] ?? 0) + (((s as any).shop_display ?? 0)?.['j_inc']);
    if (0 <= ((s as any).shop_display ?? 0)?.['j']  &&  ((s as any).shop_display ?? 0)?.['j'] <= ((s as any).shop_display_sorted ?? 0)['max_' + ((s as any).shop_display ?? 0)?.['sort_type']]) {
      // TODO-QSP: jump 'display_filter_loop'
    }
    // TODO-QSP: gs $shop_display['view_file'], 'display', $shop_display['display_func'], 'footer'
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'wardrobe_storage_unwanted_header') {
    scene.text('<center><table border=1><tr>');
    if (((s as any).shop_display ?? 0)?.['link'] !== 'wardrobe') {
      // TODO-QSP: dynamic text: <th><a href="exec:gs 'shop_utils', 'cleanup' & gt '<<$shop_display['view_file']>...
      scene.text(`<th><a href="exec:gs 'shop_utils', 'cleanup' & gt '${((s as any).shop_display ?? 0)?.['view_file'] ?? ''}', '${((s as any).locArgs?.[2] ?? '')}', 'wardrobe'">Wardrobe</a></th>`);
    }
    if (((s as any).shop_display ?? 0)?.['link'] !== 'storage') {
      // TODO-QSP: dynamic text: <th><a href="exec:gs 'shop_utils', 'cleanup' & gt '<<$shop_display['view_file']>...
      scene.text(`<th><a href="exec:gs 'shop_utils', 'cleanup' & gt '${((s as any).shop_display ?? 0)?.['view_file'] ?? ''}', '${((s as any).locArgs?.[2] ?? '')}', 'storage'">Storage</a></th>`);
    }
    if (((s as any).shop_display ?? 0)?.['link'] !== 'unwanted') {
      // TODO-QSP: dynamic text: <th><a href="exec:gs 'shop_utils', 'cleanup' & gt '<<$shop_display['view_file']>...
      scene.text(`<th><a href="exec:gs 'shop_utils', 'cleanup' & gt '${((s as any).shop_display ?? 0)?.['view_file'] ?? ''}', '${((s as any).locArgs?.[2] ?? '')}', 'unwanted'">Unwanted</a></th>`);
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_shop') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'init', 'grid_shop', 0]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'grid_wardrobe') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'init', 'grid_wardrobe', 1]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'list_wardrobe') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'init', 'list_wardrobe', 0]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayListWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'list_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic "
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gt '<<$shop_display['return_loc']>>', '<<$shop_display['return_arg0']>>', '<<$shop_display['return_a...
  // TODO-QSP: "
  // TODO-QSP: end
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterGetDiscount(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[1] = qspFunc(s, 'string', 'hash', ((s as any).locArgs?.[1] ?? 0));
  if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Clothingstock ?? 0)?.[1 + (293 + (((s as any).ARGS ?? 0)[1] + ((s as any).ARGS ?? 0)[2]) % 293) % 293];
  if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Clothingstock ?? 0)?.[1 + (419 + (3 * ((s as any).ARGS ?? 0)[1] + 5 * ((s as any).ARGS ?? 0)[2]) % 293) % 293];
  (s as any).result = (((s as any).ARGS ?? 0)[3] - ((s as any).ARGS ?? 0)[4]) * (((s as any).ARGS ?? 0)[3] - ((s as any).ARGS ?? 0)[4]) * 11 / 10000 * 5;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFilter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'reset_sorting') {
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['number_sort'] = 0;
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['quality_sort'] = 0;
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['inhibition_sort'] = 0;
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['heelsize_sort'] = 0;
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['price_sort'] = 0;
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['discount_sort'] = 0;
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_pass') {
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['include'] = 1;
    if (!(s as any).clothingfilter) (s as any).clothingfilter = {}; (s as any).clothingfilter['inc'] = 1;
    if (!(s as any).clothingfilter) (s as any).clothingfilter = {}; (s as any).clothingfilter['only'] = 1;
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'set_block') {
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['include'] = 0;
    if (!(s as any).clothingfilter) (s as any).clothingfilter = {}; (s as any).clothingfilter['inc'] = 0;
    if (!(s as any).clothingfilter) (s as any).clothingfilter = {}; (s as any).clothingfilter['only'] = 0;
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'apply') {
    (s as any).result = 0;
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['i'] = 0;
    if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['i_max'] = 0;
    // TODO-QSP: :apply_filter_loop
    if (((s as any).outfitfilter ?? 0)?.['i'] < ((s as any).outfitfilter ?? 0)?.['i_max']) {
      if ((!(0 as any))) {
        // TODO-QSP: exit
      }
      if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['i'] = ((s as any).outfitfilter['i'] ?? 0) + (1);
      // TODO-QSP: jump 'apply_filter_loop'
    }
    (s as any).result = 1;
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFilterBuilder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'init') {
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['return_loc'] = ((s as any).locArgs?.[2] ?? 0);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['return_arg0'] = ((s as any).locArgs?.[3] ?? 0);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['return_arg1'] = ((s as any).locArgs?.[4] ?? 0);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_count'] = 0;
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = 0;
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = '<td>';
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = '<td>';
    if (((s as any).cheatVars ?? 0)?.['shop_alt_color']) {
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['inc_alt'] = '_alt';
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['inc_color'] = 'blue';
    } else {
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['inc_alt'] = '';
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['inc_color'] = 'green';
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'finish') {
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td>');
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td>');
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = qspUntranslated(s, "mid(Headerstring['sorting'], 10)", { location: "shop_utils" });
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = qspUntranslated(s, "mid(Headerstring['filter'], 10)", { location: "shop_utils" });
    if (((s as any).locArgs?.[2] ?? 0) === 'mini') {
      scene.text('<center><table>');
      if (((s as any).Headerstring ?? 0)?.['filter_count'] + ((s as any).Headerstring ?? 0)?.['sorting_count'] > 0) {
        scene.text('<tr>');
        if (((s as any).Headerstring ?? 0)?.['filter_count'] > 0) {
          // TODO-QSP: dynamic text: <th colspan="<<Headerstring['filter_count']>>"><font color="<<$Headerstring['inc...
          scene.text(`<th colspan="${((s as any).Headerstring ?? 0)?.['filter_count'] ?? ''}"><font color="${((s as any).Headerstring ?? 0)?.['inc_color'] ?? ''}">Include</font>/<font color="red">Exclude</font></th>`);
        }
        if (((s as any).Headerstring ?? 0)?.['sorting_count'] > 0) {
          // TODO-QSP: dynamic text: "<th colspan=""<<Headerstring['sorting_count']>>"">Sort by</th>"
          scene.text(`"<th colspan=""${((s as any).Headerstring ?? 0)?.['sorting_count'] ?? ''}"">Sort by</th>"`);
        }
        scene.text('</tr><tr>');
        if (((s as any).Headerstring ?? 0)?.['filter_count'] > 0) {
          // TODO-QSP: dynamic text: $Headerstring['filter']
          scene.text('$Headerstring[\'filter\']');
        }
        if (((s as any).Headerstring ?? 0)?.['sorting_count'] > 0) {
          // TODO-QSP: dynamic text: $Headerstring['sorting']
          scene.text('$Headerstring[\'sorting\']');
        }
        scene.text('</tr>');
      }
      return;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '_set_headerstring_split_widths', 'sorting']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '_set_headerstring_split_widths', 'filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['max_width'] = qspUntranslated(s, "max(Headerstring['sorting_width'], Headerstring['filter_width'])", { location: "shop_utils" });
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_indent'] = '';
    if (((s as any).Headerstring ?? 0)?.['sorting_width'] / 2 < ((s as any).Headerstring ?? 0)?.['max_width'] / 2) {
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['i'] = 0;
      // TODO-QSP: :headerstring_sort_loop
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_indent'] = ((s as any).Headerstring['sorting_indent'] ?? 0) + ('<td></td>');
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['i'] = ((s as any).Headerstring['i'] ?? 0) + (1);
      if (((s as any).Headerstring ?? 0)?.['i'] < ((s as any).Headerstring ?? 0)?.['max_width'] / 2  - ((s as any).Headerstring ?? 0)?.['sorting_width'] / 2) {
        // TODO-QSP: jump 'headerstring_sort_loop'
      }
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_indent'] = '';
    if (((s as any).Headerstring ?? 0)?.['filter_width'] / 2 < ((s as any).Headerstring ?? 0)?.['max_width'] / 2) {
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['i'] = 0;
      // TODO-QSP: :headerstring_filter_loop
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_indent'] = ((s as any).Headerstring['filter_indent'] ?? 0) + ('<td></td>');
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['i'] = ((s as any).Headerstring['i'] ?? 0) + (1);
      if (((s as any).Headerstring ?? 0)?.['i'] < ((s as any).Headerstring ?? 0)?.['max_width'] / 2  - ((s as any).Headerstring ?? 0)?.['filter_width'] / 2) {
        // TODO-QSP: jump 'headerstring_filter_loop'
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '_split_headerstring', 'sorting']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '_split_headerstring', 'filter']; enterFilterBuilder(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.text('<center><table>');
    if (((s as any).Headerstring ?? 0)?.['sorting_count'] > 0) {
      // TODO-QSP: dynamic text: "<tr><th colspan=""<<Headerstring['max_width']>>"">Sort by</th></tr>"
      scene.text(`"<tr><th colspan=""${((s as any).Headerstring ?? 0)?.['max_width'] ?? ''}"">Sort by</th></tr>"`);
      // TODO-QSP: dynamic text: $Headerstring['sorting']
      scene.text('$Headerstring[\'sorting\']');
    }
    if (((s as any).Headerstring ?? 0)?.['filter_count'] > 0) {
      // TODO-QSP: dynamic text: <tr><th colspan="<<Headerstring['max_width']>>"><font color="<<$Headerstring['in...
      scene.text(`<tr><th colspan="${((s as any).Headerstring ?? 0)?.['max_width'] ?? ''}"><font color="${((s as any).Headerstring ?? 0)?.['inc_color'] ?? ''}">Include</font>/<font color="red">Exclude</font></th></tr>`);
      // TODO-QSP: dynamic text: $Headerstring['filter']
      scene.text('$Headerstring[\'filter\']');
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === '_set_headerstring_split_widths') {
    if (((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_count'] <= 10) {
      // TODO-QSP: Headerstring[$ARGS[2] + '_width'] = Headerstring[$ARGS[2] + '_count']
      // TODO-QSP: Headerstring[$ARGS[2] + '_col_overshoot'] = 0
      return;
    }
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['count'] = ((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '_count'];
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['cols'] = 2;
    // TODO-QSP: :split_headerstring_loop_1
    if (((s as any).temp_sh_hs_vars ?? 0)?.['count'] > ((s as any).temp_sh_hs_vars ?? 0)?.['cols'] * 10) {
      if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['cols'] = ((s as any).temp_sh_hs_vars['cols'] ?? 0) + (1);
      // TODO-QSP: jump 'split_headerstring_loop_1'
    }
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['width'] = (((s as any).temp_sh_hs_vars ?? {})?.['count'] ?? 0) / (((s as any).temp_sh_hs_vars ?? {})?.['cols'] ?? 0);
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['cols_overshoot'] = (((s as any).temp_sh_hs_vars ?? {})?.['count'] ?? 0) % (((s as any).temp_sh_hs_vars ?? {})?.['cols'] ?? 0);
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['new_width'] = (((s as any).temp_sh_hs_vars ?? {})?.['width'] ?? 0) + ((((s as any).temp_sh_hs_vars ?? 0)?.['cols_overshoot'] > 0) ? (1) : (0));
    // TODO-QSP: Headerstring[$ARGS[2] + '_width'] = temp_sh_hs_vars['new_width']
    // TODO-QSP: Headerstring[$ARGS[2] + '_cols'] = temp_sh_hs_vars['cols']
    // TODO-QSP: Headerstring[$ARGS[2] + '_col_overshoot'] = temp_sh_hs_vars['cols_overshoot']
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === '_split_headerstring') {
    if (((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_count'] <= ((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_width']) {
      // TODO-QSP: $Headerstring[$ARGS[2]] = "<tr><<$Headerstring[$ARGS[2] + '_indent']>><<$Headerstring[$ARGS[2]]>></t...
      return;
    }
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['cur_string'] = ((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0)];
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['new_string'] = '<tr>' + ((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_indent'];
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['i'] = 0;
    // TODO-QSP: :split_headerstring_loop_2_outer
    if (((s as any).temp_sh_hs_vars ?? 0)?.['i'] < ((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_cols'] - 1) {
      if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['temp_width'] = ((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_width'] - ((s as any).iif ?? 0)(((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_col_overshoot'] > 0  &&  ((s as any).temp_sh_hs_vars ?? 0)?.['i'] >= ((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_col_overshoot'], 1, 0);
      if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['j'] = 0;
      if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['new_string'] = ((s as any).temp_sh_hs_vars['new_string'] ?? 0) + (((s as any).Headerstring ?? 0)?.[((s as any).locArgs?.[2] ?? 0) + '_indent']);
      // TODO-QSP: :split_headerstring_loop_2_inner
      if (((s as any).temp_sh_hs_vars ?? 0)?.['j'] < ((s as any).temp_sh_hs_vars ?? 0)?.['temp_width']) {
        if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['td_index'] = 5 + (String(((s as any).temp_sh_hs_vars ?? 0)?.['cur_string']).indexOf(String('</td><td>'))) + 1;
        if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['head'] = (String(((s as any).temp_sh_hs_vars ?? 0)?.['cur_string']).slice((1)-1, ((1)-1)+((((s as any).temp_sh_hs_vars ?? {})?.['td_index'] ?? 0) - 1)));
        if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['tail'] = qspUntranslated(s, "mid(temp_sh_hs_vars['cur_string'], temp_sh_hs_vars['td_index'])", { location: "shop_utils" });
        if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['new_string'] = ((s as any).temp_sh_hs_vars['new_string'] ?? 0) + (((s as any).temp_sh_hs_vars ?? 0)?.['head']);
        if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['cur_string'] = ((s as any).temp_sh_hs_vars ?? 0)?.['tail'];
        if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['j'] = ((s as any).temp_sh_hs_vars['j'] ?? 0) + (1);
        // TODO-QSP: jump 'split_headerstring_loop_2_inner'
      }
      if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['new_string'] = ((s as any).temp_sh_hs_vars['new_string'] ?? 0) + ('</tr><tr>' + ((s as any).Headerstring ?? 0)[((s as any).locArgs?.[2] ?? 0) + '_indent']);
      if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['i'] = ((s as any).temp_sh_hs_vars['i'] ?? 0) + (1);
      // TODO-QSP: jump 'split_headerstring_loop_2_outer'
    }
    if (!(s as any).temp_sh_hs_vars) (s as any).temp_sh_hs_vars = {}; (s as any).temp_sh_hs_vars['new_string'] = ((s as any).temp_sh_hs_vars['new_string'] ?? 0) + ((((s as any).temp_sh_hs_vars ?? {})?.['cur_string'] ?? 0) + '</tr>');
    // TODO-QSP: $Headerstring[$ARGS[2]] = $temp_sh_hs_vars['new_string']
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_number_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['number_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['number_sort'] = 1;
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/number_inc' + qspUntranslated(s, "Headerstring['inc_alt']>", { location: "shop_utils" }) + '.png">');
    } else {
      // TODO-QSP: $Headerstring['sorting'] += '<a href="exec: gs ''shop_utils'', ''filter'', ''reset_sorting'' & outfitfilter[''number_sort''] = 1 & gt ''<<$ARGS[2]>>'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>''"><img src="images/system/icons/clothing/number_exc.png"></a>'
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_quality_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['quality_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['quality_sort'] = 1;
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/quality_inc' + qspUntranslated(s, "Headerstring['inc_alt']>", { location: "shop_utils" }) + '.png">');
    } else {
      // TODO-QSP: $Headerstring['sorting'] += '<a href="exec: gs ''shop_utils'', ''filter'', ''reset_sorting'' & outfitfilter[''quality_sort''] = 1 & gt ''<<$ARGS[2]>>'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>''"><img src="images/system/icons/clothing/quality_exc.png"></a>'
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_inhibition_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['inhibition_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['inhibition_sort'] = 1;
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/inhibition_inc' + qspUntranslated(s, "Headerstring['inc_alt']>", { location: "shop_utils" }) + '.png">');
    } else {
      // TODO-QSP: $Headerstring['sorting'] += '<a href="exec: gs ''shop_utils'', ''filter'', ''reset_sorting'' & outfitfilter[''inhibition_sort''] = 1 & gt ''<<$ARGS[2]>>'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>''"><img src="images/system/icons/clothing/inhibition_exc.png"></a>'
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_heelsize_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['heelsize_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['heelsize_sort'] = 1;
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/heels_inc' + qspUntranslated(s, "Headerstring['inc_alt']>", { location: "shop_utils" }) + '.png">');
    } else {
      // TODO-QSP: $Headerstring['sorting'] += '<a href="exec: gs ''shop_utils'', ''filter'', ''reset_sorting'' & outfitfilter[''heelsize_sort''] = 1 & gt ''<<$ARGS[2]>>'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>''"><img src="images/system/icons/clothing/heels_exc.png"></a>'
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_price_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['price_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['price_sort'] = 1;
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/price_inc' + qspUntranslated(s, "Headerstring['inc_alt']>", { location: "shop_utils" }) + '.png">');
    } else {
      // TODO-QSP: $Headerstring['sorting'] += '<a href="exec: gs ''shop_utils'', ''filter'', ''reset_sorting'' & outfitfilter[''price_sort''] = 1 & gt ''<<$ARGS[2]>>'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>''"><img src="images/system/icons/clothing/price_exc.png"></a>'
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_discount_sort') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['discount_sort']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'reset_sorting']; enterFilter(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['discount_sort'] = 1;
      if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('<img src="images/system/icons/clothing/discount_inc' + qspUntranslated(s, "Headerstring['inc_alt']>", { location: "shop_utils" }) + '.png">');
    } else {
      // TODO-QSP: $Headerstring['sorting'] += '<a href="exec: gs ''shop_utils'', ''filter'', ''reset_sorting'' & outfitfilter[''discount_sort''] = 1 & gt ''<<$ARGS[2]>>'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>''"><img src="images/system/icons/clothing/discount_exc.png"></a>'
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_sort_direction') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting_count'] = ((s as any).Headerstring['sorting_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['sorting'] = ((s as any).Headerstring['sorting'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['sort_direction']) {
      if (!(s as any).outfitfilter) (s as any).outfitfilter = {}; (s as any).outfitfilter['sort_direction'] = 1;
      // TODO-QSP: $Headerstring['sorting'] += '<a href="exec: outfitfilter[''sort_direction''] = 0 & gt ''<<$ARGS[2]>>'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>''"><img src="images/system/icons/clothing/high_low.png"></a>'
    } else {
      // TODO-QSP: $Headerstring['sorting'] += '<a href="exec: outfitfilter[''sort_direction''] = 1 & gt ''<<$ARGS[2]>>'', ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>''"><img src="images/system/icons/clothing/low_high.png"></a>'
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_prostitution_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['prostitution'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['prostitution'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''prostitution''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/prostitute_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['prostitution'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['prostitution'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''prostitution''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/prostitute_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['prostitution'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''prostitution''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/prostitute_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_stripper_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['stripper'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['stripper'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''stripper''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/stripper_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['stripper'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['stripper'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''stripper''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/stripper_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['stripper'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''stripper''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/stripper_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_bimbo_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['bimbo'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['bimbo'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''bimbo''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/bimbo_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['bimbo'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['bimbo'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''bimbo''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/bimbo_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['bimbo'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''bimbo''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/bimbo_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_goth_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['goth'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['goth'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''goth''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/goth_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['goth'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['goth'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''goth''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/goth_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['goth'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''goth''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/goth_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_preppy_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['preppy'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['preppy'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''preppy''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/preppy_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['preppy'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['preppy'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''preppy''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/preppy_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['preppy'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''preppy''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/preppy_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_prude_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['prude'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['prude'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''prude''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/prude_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['prude'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['prude'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''prude''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/prude_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['prude'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''prude''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/prude_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_punk_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['punk'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['punk'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''punk''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/punk_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['punk'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['punk'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''punk''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/punk_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['punk'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''punk''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/punk_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_alternative_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['alternative'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['alternative'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''alternative''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/alternative_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['alternative'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['alternative'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''alternative''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/alternative_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['alternative'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''alternative''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/alternative_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_conservative_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['conservative'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['conservative'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''conservative''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/conservative_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['conservative'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['conservative'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''conservative''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/conservative_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['conservative'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''conservative''] = 1 & outfitfilter[''risque''] = 0 & outfitfilter[''too_risque''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/conservative_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_risque_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['risque'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['risque'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''risque''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/risque_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['risque'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['risque'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''risque''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/risque_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['risque'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''risque''] = 1 & outfitfilter[''conservative''] = 0 & outfitfilter[''too_risque''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/risque_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_too_risque_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['too_risque'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['too_risque'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''too_risque''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/too_risque_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['too_risque'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['too_risque'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''too_risque''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/too_risque_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['too_risque'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''too_risque''] = 1 & outfitfilter[''conservative''] = 0 & outfitfilter[''risque''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/too_risque_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_loose_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['loose'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['loose'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''loose''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/loose_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['loose'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['loose'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''loose''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/loose_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['loose'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''loose''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/loose_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_sport_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['sport'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['sport'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''sport''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/sport_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['sport'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['sport'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''sport''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/sport_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['sport'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''sport''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/sport_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_school_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['school'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['school'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''school''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/school_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['school'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['school'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''school''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/school_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['school'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''school''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/school_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_maid_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['maid'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['maid'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''maid''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/maid_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['maid'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['maid'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''maid''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/maid_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['maid'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''maid''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/maid_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_server_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['server'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['server'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''server''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/server_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['server'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['server'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''server''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/server_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['server'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''server''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/server_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_swim_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['swim'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['swim'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''swim''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/swim_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['swim'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['swim'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''swim''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/swim_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['swim'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''swim''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/swim_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_heels_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['heels'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['heels'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''heels''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/heels_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['heels'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['heels'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''heels''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/heels_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['heels'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''heels''] = 1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/heels_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_comfy_heels_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['comfy_heels'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['comfy_heels'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''comfy_heels''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/comfy_heels_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['comfy_heels'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['comfy_heels'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''comfy_heels''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/comfy_heels_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['comfy_heels'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''comfy_heels''] = 1 & outfitfilter[''uncomfy_heels''] = 0 & outfitfilter[''extreme_heels''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/comfy_heels_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_uncomfy_heels_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['uncomfy_heels'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['uncomfy_heels'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''uncomfy_heels''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/uncomfy_heels_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['uncomfy_heels'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['uncomfy_heels'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''uncomfy_heels''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/uncomfy_heels_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['uncomfy_heels'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''uncomfy_heels''] = 1 & outfitfilter[''comfy_heels''] = 0 & outfitfilter[''extreme_heels''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/uncomfy_heels_off.png"></a>'
      }
    }
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'setup_extreme_heels_filter') {
    if (Object.keys((s as any).ARGS ?? {}).length === 2) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '0';
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 3) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[3] = ((s as any).Headerstring ?? 0)?.['return_loc'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 4) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).Headerstring ?? 0)?.['return_arg0'];
    }
    if (Object.keys((s as any).ARGS ?? {}).length === 5) {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).Headerstring ?? 0)?.['return_arg1'];
    }
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter_count'] = ((s as any).Headerstring['filter_count'] ?? 0) + (1);
    if (!(s as any).Headerstring) (s as any).Headerstring = {}; (s as any).Headerstring['filter'] = ((s as any).Headerstring['filter'] ?? 0) + ('</td><td>');
    if (((s as any).outfitfilter ?? 0)?.['extreme_heels'] > 0) {
      if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['extreme_heels'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ')';
      // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''extreme_heels''] = -1 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/extreme_heels_inc<<$Headerstring[''inc_alt'']>>.png"></a>'
    } else {
      if (((s as any).outfitfilter ?? 0)?.['extreme_heels'] < 0) {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['extreme_heels'] = '(' + qspUntranslated(s, "ARGS[2]>", { location: "shop_utils" }) + ') = 0';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''extreme_heels''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/extreme_heels_exc.png"></a>'
      } else {
        if (!(s as any).outfitfilter_check) (s as any).outfitfilter_check = {}; (s as any).outfitfilter_check['extreme_heels'] = '1';
        // TODO-QSP: $Headerstring['filter'] += '<a href="exec:outfitfilter[''extreme_heels''] = 1 & outfitfilter[''comfy_heels''] = 0 & outfitfilter[''uncomfy_heels''] = 0 & gt ''<<$ARGS[3]>>'', ''<<$ARGS[4]>>'', ''<<$ARGS[5]>>''"><img src="images/system/icons/clothing/extreme_heels_off.png"></a>'
      }
    }
    return;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayClothingGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayClothingGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayClothingListWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'list_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayShoesGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayShoesListWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'list_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayBrasGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayBrasGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayPantiesGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayPantiesGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayBodysuitsGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayBodysuitsGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayCoatsGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayCoatsGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayPursesGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayPursesGridWardrobe(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_wardrobe']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayTattoosGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayPiercingsGridShop(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'grid_shop']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInitDisplay(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'start']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'add_type', ((s as any).locArgs?.[1] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_link', ((s as any).locArgs?.[2] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', ARGS[3], ARGS[4]
  // TODO-QSP: gs 'shop_utils', 'init', 'set_discount', ARGS[5]
  if (((s as any).shop_display ?? 0)?.['link'] === 'wardrobe'  ||  ((s as any).shop_display ?? 0)?.['link'] === 'storage'  ||  ((s as any).shop_display ?? 0)?.['link'] === 'unwanted') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_return', 'wardrobe', 'main']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'end']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInitDisplayMultiple(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).shop_display) (s as any).shop_display = {}; (s as any).shop_display['type_max'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'start']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_link', ((s as any).locArgs?.[1] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', ARGS[2], ARGS[3]
  // TODO-QSP: gs 'shop_utils', 'init', 'set_discount', ARGS[4]
  if (((s as any).shop_display ?? 0)?.['link'] === 'wardrobe'  ||  ((s as any).shop_display ?? 0)?.['link'] === 'storage'  ||  ((s as any).shop_display ?? 0)?.['link'] === 'unwanted') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_return', 'wardrobe', 'main']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'set_return', ((s as any).loc ?? 0), ((s as any).loc_arg ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'end']; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInitAddTypes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'clothing') {
    qspCall(s, 'clothing_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'shoes') {
      qspCall(s, 'shoe_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'bras') {
        qspCall(s, 'bra_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'panties') {
          qspCall(s, 'panty_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'bodysuits') {
            qspCall(s, 'underwear_bodysuit_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'coats') {
              qspCall(s, 'coat_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'purses') {
                qspCall(s, 'purse_view', 'init_add_types', ((s as any).locArgs?.[2] ?? 0));
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

function enterAddTypes(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterInitAddTypes(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
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
