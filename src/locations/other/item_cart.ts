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
  // TODO-QSP: dynamic text: <center><table border=5 cellspacing=0 cellpadding=5 bgcolor="<<$func("shortgs", ...
  scene.text(`<center><table border=5 cellspacing=0 cellpadding=5 bgcolor="${qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).bcolor ?? ''))}"><td>&nbsp;<font color="${qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).fcolor ?? ''))}" size="+2"><b>${((s as any).shop_title ?? '')}</b></font>&nbsp;</td></table></center>`);
  // TODO-QSP: dynamic text: <center><table border=5 cellspacing=0 cellpadding=5 bgcolor="<<$func("shortgs", ...
  scene.text(`<center><table border=5 cellspacing=0 cellpadding=5 bgcolor="${qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).bcolor ?? ''))}" width="80%"><tr><th>Item</th><th>You own</th><th>Units/pack</th><th>Cost</th><th colspan="2" width="12%">Remove 10/1</th><th width="8%">In cart</th><th colspan="2" width="12%">Add 1/10</th></tr>`);
  (s as any).icon_selector = ((((s as any).theme ?? 0)?.['is_dark'] === 0) ? ('_b') : ('_w'));
  (s as any).icon_height = ((s as any).fsize ?? 0) * 15 / 10;
  if ((!((s as any).icon_height ?? 0))) {
    (s as any).icon_height = 18;
  }
  (s as any).i = 1;
  // TODO-QSP: :loopshopping_cart
  if (((s as any).item_curr_aisle ?? 0)[(((s as any).i ?? 0))] !== '') {
    (s as any).temp_bcolor = qspFunc(s, 'themes', 'alt_color', ((s as any).temp_bcolor ?? 0));
    (s as any).cart_tmp = (((s as any).var_curr_aisle ?? 0)?.[String(((s as any).i ?? 0))]);
    (s as any).item_line = '<TR bgcolor=' + ((s as any).temp_bcolor ?? 0) + '>';
    // TODO-QSP: $item_line += '<td align="left"><<$item_curr_aisle[''<<i>>'']>></td>'
    // TODO-QSP: $item_line += '<td><<mc_inventory[$cart_tmp]>></td>'
    // TODO-QSP: $item_line += '<td><<quantity_curr_aisle[''<<i>>'']>></td>'
    // TODO-QSP: $item_line += '<td>' + $func('money', 'string_price', cost_curr_aisle['<<i>>']) + '</td>'
    if (((s as any).cart_curr_quantity ?? 0)[(((s as any).i ?? 0))] > 0) {
      // TODO-QSP: $item_line += '<td valign="center" align="center" width="6%"><a href="exec:gt ''item_cart'', ''remov...
      // TODO-QSP: $item_line += '<td valign="center" align="center" width="6%"><a href="exec:gt ''item_cart'', ''remov...
    } else {
      // TODO-QSP: $item_line += '<td></td><td></td>'
    }
    // TODO-QSP: $item_line += '<td align="center"><<cart_curr_quantity[''<<i>>'']>></td>'
    if (((s as any).cart_curr_quantity ?? 0)[(((s as any).i ?? 0))] + ((s as any).mc_inventory ?? 0)?.[String((s as any).cart_tmp ?? 0)] < ((s as any).max_curr_aisle ?? 0)[(((s as any).i ?? 0))]  ||  ((s as any).max_curr_aisle ?? 0)[(((s as any).i ?? 0))] === 0) {
      // TODO-QSP: $item_line += '<td valign="center" align="center" width="6%"><a href="exec:gt ''item_cart'', ''add''...
      // TODO-QSP: $item_line += '<td valign="center" align="center" width="6%"><a href="exec:gt ''item_cart'', ''add''...
    } else {
      // TODO-QSP: $item_line += '<td align="center" colspan="2" width="6%">Max</td>'
    }
    // TODO-QSP: $item_line += '</tr>'
    // TODO-QSP: dynamic text: $item_line
    scene.text(String((s as any).item_line ?? ''));
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).item_idx ?? 0)) {
    // TODO-QSP: jump 'loopshopping_cart'
  }
  scene.text('</table></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCartTotal(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  ((s as any).ARGS = (s as any).ARGS ?? {})[2] = Math.min((((s as any).cart_curr_quantity ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0))]), ((s as any).locArgs?.[2] ?? 0));
  (s as any).cart_tally = ((s as any).cart_tally ?? 0) - (((s as any).cost_curr_aisle ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + ''] * ((s as any).locArgs?.[2] ?? 0));
  ((s as any).cart_curr_quantity = (s as any).cart_curr_quantity ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).cart_curr_quantity[String(((s as any).locArgs?.[1] ?? 0))] ?? 0) - (((s as any).locArgs?.[2] ?? 0));
  dynamicGoto(s, 'loc_s', 'args_s');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterSimpleAdd(s: GameState, scene: SceneBuilder): void {
  (s as any).cart_tally = ((s as any).cart_tally ?? 0) + (((s as any).cost_curr_aisle ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + ''] * Math.max(1, ((s as any).locArgs?.[2] ?? 0)));
  ((s as any).cart_curr_quantity = (s as any).cart_curr_quantity ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).cart_curr_quantity[String(((s as any).locArgs?.[1] ?? 0))] ?? 0) + (1 * Math.max(1, ((s as any).locArgs?.[2] ?? 0)));
  // TODO-QSP: end
  scene.build();
}

function enterCartTotal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><table border=5 cellspacing=0 cellpadding=5 bgcolor="<<$func("shortgs",...
  scene.text(`<center><table border=5 cellspacing=0 cellpadding=5 bgcolor="${qspFunc(s, 'shortgs', 'rgb_to_hex', ((s as any).bcolor ?? ''))}"><td>&nbsp;<b>Total cost of items in cart: ' + $func('money', 'string_price', cart_tally) + '</b>&nbsp;</td></table></center>`);
  // TODO-QSP: dynamic text: '<center><table border=5 cellspacing=0 cellpadding=5 bgcolor='+$func("shortgs", ...
  scene.text('<center><table border=5 cellspacing=0 cellpadding=5 bgcolor=\'+$func("shortgs", "rgb_to_hex", bcolor)+\'><tr>');
  // TODO-QSP: $item_line[2] = ''
  if (((s as any).cart_tally ?? 0) > 0) {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).cart_tally ?? 0)) === 1) {
      // TODO-QSP: $item_line[2] = '<td>&nbsp;<a href="exec:gt ''item_cart'', ''purchase''">Buy</a>&nbsp;</td>'
    } else {
      // TODO-QSP: $item_line[2] = '<td>&nbsp;You cannot afford this&nbsp;</td>'
    }
  }
  // TODO-QSP: $item_line[2] += '<td>&nbsp;<a href="exec:gt ''item_cart'', ''cancel''">cancel</a>&nbsp;</td>'
  // TODO-QSP: $item_line[2] += '</tr></table></center>'
  // TODO-QSP: dynamic text: $item_line[2]
  scene.text('$item_line[2]');
  // TODO-QSP: end
  scene.build();
}

function enterPurchase(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 1;
  // TODO-QSP: :loopshopping_purchase
  (s as any).cart_tmp1 = (((s as any).var_curr_aisle ?? 0)?.[String(((s as any).i ?? 0))]);
  // TODO-QSP: dynamic 'cart_quantity = quantity_curr_aisle[''<<i>>''] * cart_curr_quantity[''<<i>>'']'
  // TODO-QSP: dynamic 'mc_inventory[''<<$cart_tmp1>>''] += cart_quantity'
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).item_idx ?? 0)) {
    // TODO-QSP: jump 'loopshopping_purchase'
  }
  qspCall(s, 'money', 'pay', ((s as any).cart_tally ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoppingVarClear(s, scene); (s as any).locArgs = __savedLocArgs; }
  dynamicGoto(s, 'loc_s', 'args_s');
  // TODO-QSP: end
  scene.build();
}

function enterCancel(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShoppingVarClear(s, scene); (s as any).locArgs = __savedLocArgs; }
  dynamicGoto(s, 'loc_s', 'args_s');
  // TODO-QSP: end
  scene.build();
}

function enterShoppingVarClear(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'item_stock_db', 'cleanup');
  // TODO-QSP: end
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
