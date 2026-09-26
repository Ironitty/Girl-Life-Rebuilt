import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShoppingAisle(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'item_stock_db', 'cleanup');
  (s as any).curr_aisle = ((s as any).locArgs?.[1] ?? 0);
  qspCall(s, 'item_stock_db', '$ARGS[1]');
  scene.text(`<center><table border=5 cellspacing=0 cellpadding=5 bgcolor="${qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).bcolor ?? ''))}"><td>&nbsp;<font color="${qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).fcolor ?? ''))}" size="+2"><b>${((s as any).shop_title ?? '')}</b></font>&nbsp;</td></table></center>`);
  scene.text(`<center><table border=5 cellspacing=0 cellpadding=5 bgcolor="${qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).bcolor ?? ''))}" width="80%"><tr><th>Item</th><th>You own</th><th>Units/pack</th><th>Cost</th><th colspan="2" width="12%">Remove 10/1</th><th width="8%">In cart</th><th colspan="2" width="12%">Add 1/10</th></tr>`);
  (s as any).icon_selector = ((((s as any).theme ?? 0)?.['is_dark'] === 0) ? ('_b') : ('_w'));
  (s as any).icon_height = ((s as any).fsize ?? 0) * 15 / 10;
  if ((!((s as any).icon_height ?? 0))) {
    (s as any).icon_height = 18;
  }
  (s as any).i = 1;
  do {
    if (((s as any).item_curr_aisle ?? 0)[(((s as any).i ?? 0))] !== '') {
      (s as any).temp_bcolor = qspFunc(s, 'themes', 'alt_color', ((s as any).temp_bcolor ?? 0));
      (s as any).cart_tmp = (((s as any).var_curr_aisle ?? 0)?.[String(((s as any).i ?? 0))]);
      (s as any).item_line = '<TR bgcolor=' + ((s as any).temp_bcolor ?? 0) + '>';
      (s as any).item_line = ((s as any).item_line ?? 0) + ('<td align="left">' + (((s as any).item_curr_aisle ?? 0)?.[String(((s as any).i ?? 0))]) + '</td>');
      (s as any).item_line = ((s as any).item_line ?? 0) + ('<td>' + (((s as any).mc_inventory ?? 0)?.[String((s as any).cart_tmp ?? 0)] ?? 0) + '</td>');
      (s as any).item_line = ((s as any).item_line ?? 0) + ('<td>' + (((s as any).quantity_curr_aisle ?? 0)?.[String(((s as any).i ?? 0))]) + '</td>');
      (s as any).item_line = ((s as any).item_line ?? 0) + ('<td>' + qspFunc(s, 'money', 'string_price', (((s as any).cost_curr_aisle ?? 0)?.[String(((s as any).i ?? 0))])) + '</td>');
      if (((s as any).cart_curr_quantity ?? 0)[(((s as any).i ?? 0))] > 0) {
        (s as any).item_line = ((s as any).item_line ?? 0) + ('<td valign="center" align="center" width="6%"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027item_cart\u0027, \u0027remove\u0027, String((s as any).i ?? \u0027\u0027)); return false;"><img src="images/system/ui/less' + ((s as any).icon_selector ?? 0) + '.png" height="' + ((s as any).icon_height ?? 0) + '"></a></td>');
        (s as any).item_line = ((s as any).item_line ?? 0) + ('<td valign="center" align="center" width="6%"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027item_cart\u0027, \u0027remove\u0027, String((s as any).i ?? \u0027\u0027)); return false;"><img src="images/system/ui/less' + ((s as any).icon_selector ?? 0) + '.png" height="' + ((s as any).icon_height ?? 0) + '"></a></td>');
      } else {
        (s as any).item_line = ((s as any).item_line ?? 0) + ('<td></td><td></td>');
      }
      (s as any).item_line = ((s as any).item_line ?? 0) + ('<td align="center">' + (((s as any).cart_curr_quantity ?? 0)?.[String(((s as any).i ?? 0))]) + '</td>');
      if (((s as any).cart_curr_quantity ?? 0)[(((s as any).i ?? 0))] + ((s as any).mc_inventory ?? 0)?.[String((s as any).cart_tmp ?? 0)] < ((s as any).max_curr_aisle ?? 0)[(((s as any).i ?? 0))]  ||  ((s as any).max_curr_aisle ?? 0)[(((s as any).i ?? 0))] === 0) {
        (s as any).item_line = ((s as any).item_line ?? 0) + ('<td valign="center" align="center" width="6%"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027item_cart\u0027, \u0027add\u0027, String((s as any).i ?? \u0027\u0027)); return false;"><img src="images/system/ui/more' + ((s as any).icon_selector ?? 0) + '.png" height="' + ((s as any).icon_height ?? 0) + '"></a></td>');
        (s as any).item_line = ((s as any).item_line ?? 0) + ('<td valign="center" align="center" width="6%"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027item_cart\u0027, \u0027add\u0027, String((s as any).i ?? \u0027\u0027)); return false;"><img src="images/system/ui/more' + ((s as any).icon_selector ?? 0) + '.png" height="' + ((s as any).icon_height ?? 0) + '"></a></td>');
      } else {
        (s as any).item_line = ((s as any).item_line ?? 0) + ('<td align="center" colspan="2" width="6%">Max</td>');
      }
      (s as any).item_line = ((s as any).item_line ?? 0) + ('</tr>');
      scene.text(String((s as any).item_line ?? ''));
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    scene.text('</table></center>');
    (s as any).temp_bcolor = undefined;
    (s as any).icon_selector = undefined;
    (s as any).icon_height = undefined;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCartTotal(s, scene); (s as any).locArgs = __savedLocArgs; }
  } while (((s as any).i ?? 0) <= ((s as any).item_idx ?? 0));
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[2] = Math.min((((s as any).cart_curr_quantity ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0))]), ((s as any).locArgs?.[2] ?? 0));
  (s as any).cart_tally = ((s as any).cart_tally ?? 0) - (((s as any).cost_curr_aisle ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + ''] * ((s as any).locArgs?.[2] ?? 0));
  ((s as any).cart_curr_quantity = (s as any).cart_curr_quantity ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).cart_curr_quantity[String(((s as any).locArgs?.[1] ?? 0))] ?? 0) - (((s as any).locArgs?.[2] ?? 0));
  dynamicGoto(s, 'loc_s', 'args_s');
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((((s as any).max_curr_aisle ?? 0)[(String((s as any).locArgs?.[1] ?? ''))] !== 0) ? (Math.min(((s as any).max_curr_aisle ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + ''] - (((s as any).cart_curr_quantity ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + ''] + ((s as any).mc_inventory ?? 0)[((s as any).var_curr_aisle ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '']]), ((s as any).locArgs?.[2] ?? 0))) : (((s as any).locArgs?.[2] ?? 0)));
  (s as any).cart_tally = ((s as any).cart_tally ?? 0) + (((s as any).cost_curr_aisle ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + ''] * ((s as any).locArgs?.[2] ?? 0));
  ((s as any).cart_curr_quantity = (s as any).cart_curr_quantity ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).cart_curr_quantity[String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  if (((s as any).event_curr_aisle ?? 0)[(String((s as any).locArgs?.[1] ?? ''))] !== '') {
    // TODO-QSP: dynamic "<<$event_curr_aisle['<<ARGS[1]>>']>>"
  }
  dynamicGoto(s, 'loc_s', 'args_s');
  scene.build();
}

function enterSimpleAdd(s: GameState, scene: SceneBuilder): void {
  (s as any).cart_tally = ((s as any).cart_tally ?? 0) + (((s as any).cost_curr_aisle ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + ''] * Math.max(1, ((s as any).locArgs?.[2] ?? 0)));
  ((s as any).cart_curr_quantity = (s as any).cart_curr_quantity ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).cart_curr_quantity[String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (1 * Math.max(1, ((s as any).locArgs?.[2] ?? 0)));
  scene.build();
}

function enterCartTotal(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><table border=5 cellspacing=0 cellpadding=5 bgcolor="${qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).bcolor ?? ''))}"><td>&nbsp;<b>Total cost of items in cart: ` + qspFunc(s, 'money', 'string_price', ((s as any).cart_tally ?? '')) + '</b>&nbsp;</td></table></center>');
  scene.text('<center><table border=5 cellspacing=0 cellpadding=5 bgcolor=' + qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).bcolor ?? '')) + '><tr>');
  ((s as any).item_line = (s as any).item_line ?? {})[2] = '';
  if (((s as any).cart_tally ?? 0) > 0) {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).cart_tally ?? 0)) === 1) {
      ((s as any).item_line = (s as any).item_line ?? {})[2] = '<td>&nbsp;<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027item_cart\u0027, \u0027purchase\u0027); return false;">Buy</a>&nbsp;</td>';
    } else {
      ((s as any).item_line = (s as any).item_line ?? {})[2] = '<td>&nbsp;You cannot afford this&nbsp;</td>';
    }
  }
  ((s as any).item_line = (s as any).item_line ?? {})[2] = ((s as any).item_line[2] ?? 0) + ('<td>&nbsp;<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027item_cart\u0027, \u0027cancel\u0027); return false;">cancel</a>&nbsp;</td>');
  ((s as any).item_line = (s as any).item_line ?? {})[2] = ((s as any).item_line[2] ?? 0) + ('</tr></table></center>');
  scene.text('$item_line[2]');
  scene.build();
}

function enterPurchase(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 1;
  do {
    (s as any).cart_tmp1 = (((s as any).var_curr_aisle ?? 0)?.[String(((s as any).i ?? 0))]);
    scene.text('cart_quantity = quantity_curr_aisle[\'' + ((s as any).i ?? 0) + '\'] * cart_curr_quantity[\'' + ((s as any).i ?? 0) + '\']');
    scene.text('mc_inventory[\'' + ((s as any).cart_tmp1 ?? 0) + '\'] += cart_quantity');
    (s as any).i = ((s as any).i ?? 0) + (1);
    qspCall(s, 'money', 'pay', ((s as any).cart_tally ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoppingVarClear(s, scene); (s as any).locArgs = __savedLocArgs; }
    dynamicGoto(s, 'loc_s', 'args_s');
  } while (((s as any).i ?? 0) <= ((s as any).item_idx ?? 0));
  scene.build();
}

function enterCancel(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoppingVarClear(s, scene); (s as any).locArgs = __savedLocArgs; }
  dynamicGoto(s, 'loc_s', 'args_s');
  scene.build();
}

function enterShoppingVarClear(s: GameState, scene: SceneBuilder): void {
  (s as any).cart_tally = undefined;
  (s as any).cart_curr_quantity = undefined;
  (s as any).cart_quantity = undefined;
  (s as any).cart_tmp = undefined;
  (s as any).cart_tmp1 = undefined;
  qspCall(s, 'item_stock_db', 'cleanup');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'shopping_aisle':
      enterShoppingAisle(s, scene);
      break;
    case 'remove':
      enterRemove(s, scene);
      break;
    case 'add':
      enterAdd(s, scene);
      break;
    case 'simple_add':
      enterSimpleAdd(s, scene);
      break;
    case 'cart_total':
      enterCartTotal(s, scene);
      break;
    case 'purchase':
      enterPurchase(s, scene);
      break;
    case 'cancel':
      enterCancel(s, scene);
      break;
    case 'shopping_var_clear':
      enterShoppingVarClear(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const item_cart: LocationDef = {
  name: 'item_cart',
  title: '</table></center>',
  region: 'other',
  enter: enter,
};
