import { qspCall, qspFunc, qspSave } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(_s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAutosave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cfg_vars ?? 0)?.['disable_autosave'] === 0) {
    if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
      qspSave(1, s);
    } else {
      if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
        qspSave(1, s);
      } else {
        qspSave(1, s);
      }
    }
  }
  return;
  scene.build();
}

function enterShowTable(s: GameState, scene: SceneBuilder): void {
  (s as any).tab_tmp = Math.max(1, parseFloat(((s as any).locArgs?.[2] ?? 0)), ((s as any).locArgs?.[2] ?? 0));
  (s as any).result = '';
  if ((!(((s as any).st_count ?? 0) % ((s as any).tab_tmp ?? 0)))) {
    (s as any).result = ((s as any).result ?? '') + '<tr>';
  }
  (s as any).result = ((s as any).result ?? 0) + ('<td>' + ((s as any).locArgs?.[1] ?? 0) + '</td>');
  if ((((s as any).st_count ?? 0) % ((s as any).tab_tmp ?? 0)) + 1 === ((s as any).tab_tmp ?? 0)) {
    (s as any).result = ((s as any).result ?? '') + '</tr>';
  }
  (s as any).show_table = ((s as any).show_table ?? 0) + (((s as any).result ?? 0));
  (s as any).st_count = ((s as any).st_count ?? 0) + (1);
  (s as any).tab_tmp = undefined;
  return;
  scene.build();
}

function enterGuy(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    (s as any).temptask = 'ABCM';
  } else {
    (s as any).temptask = ((s as any).locArgs?.[1] ?? 0);
  }
  if (((s as any).temptask ?? 0) === 'ABCM') {
    (s as any).result = (((s as any).stat ?? 0)?.['male_sexual_partners']);
  } else {
    (s as any).result = qspFunc(s, 'npc', 'get_npc_count', 'npc_sexual', ((s as any).locArgs?.[1] ?? 0), '0');
  }
  (s as any).temptask = undefined;
  return;
  scene.build();
}

function enterGirl(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    (s as any).temptask = 'ABCM';
  } else {
    (s as any).temptask = ((s as any).locArgs?.[1] ?? 0);
  }
  if (((s as any).temptask ?? 0) === 'ABCM') {
    (s as any).result = (((s as any).stat ?? 0)?.['female_sexual_partners']);
  } else {
    (s as any).result = qspFunc(s, 'npc', 'get_npc_count', 'npc_sexual', ((s as any).locArgs?.[1] ?? 0), '1');
  }
  (s as any).temptask = undefined;
  return;
  scene.build();
}

function enterUndress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'undress', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'dress', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterCheckdress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    alert(qspFunc(s, 'wrap', 'neg b', 'You need to get dressed before going out.'));
  }
  scene.build();
}

function enterPayments(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  const ep = (s as any).epayments ?? {};
  if (ep['value'] === 0) {
    alert('<b>Error, Cash Value not set</b> in shortgs, payments.');
    scene.build();
    return;
  }
  if (ep['description'] === '') {
    alert('<b>Error, Item Description not set</b> in shortgs, payments.');
    scene.build();
    return;
  }
  const qty = ep['quantity'] ?? 1;
  let constructCash: string, constructCard: string;
  if (ep['item_variable'] !== '') {
    constructCash = `<a href="exec: $epayments['method'] = 'cash' & money -= ${ep['value']} & ${ep['item_variable']} += ${qty} & gs 'shortgs', 'paymentcomplete'">Cash</a>`;
    constructCard = `<a href="exec: $epayments['method'] = 'card' & karta -= ${ep['value']} & ${ep['item_variable']} += ${qty} & gs 'shortgs', 'paymentcomplete'">Card</a>`;
  } else {
    constructCash = `<a href="exec: $epayments['method'] = 'cash' & money -= ${ep['value']} & gs 'shortgs', 'paymentcomplete'">Cash</a>`;
    constructCard = `<a href="exec: $epayments['method'] = 'card' & karta -= ${ep['value']} & gs 'shortgs', 'paymentcomplete'">Card</a>`;
  }
  if (ep['banner'] !== '') {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/${ep['banner']}"></center>`);
  }
  const method = ep['method'] ?? '';
  const money = (s as any).money ?? 0;
  const karta = (s as any).karta ?? 0;
  if (method !== 'cash' && method !== 'card' && ep['value'] <= money && ep['value'] <= karta) {
    scene.text(`How do you want to pay for the ${ep['description']}? ${constructCash} or ${constructCard}`);
  } else if ((method === 'cash' || method === '') && ep['value'] <= money) {
    scene.text(`Pay for the ${ep['description']} with ${constructCash}?`);
  } else if ((method === 'card' || method === '') && ep['value'] <= karta) {
    scene.text(`Pay for the ${ep['description']} with your ${constructCard}?`);
  } else {
    scene.text("You don't have enough money in your purse or bank account for this item.");
  }
  (s as any).epayments = { ...ep, paid: -1 };
  scene.action({ label: 'Cancel Payment', goto: [(s as any).loc ?? '', (s as any).locArg ?? ''] });
  scene.build();
}

function enterPaymentComplete(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  const ep = (s as any).epayments ?? {};
  (s as any).epayments = { ...ep, paid: 0 };
  scene.text('Thank you for your purchase! We look forward to seeing you again.');
  scene.nl();
  const method = ep['method'] ?? '';
  scene.text(`You paid ${ep['value']}<b>₽</b>${method === 'cash' ? ' in cash' : ' with your bank card'} for your ${ep['description']}`);
  qspCall(s, 'stat', '');
  (s as any).construct_cash = undefined;
  (s as any).construct_card = undefined;
  if (ep['loc']) {
    scene.action({ label: 'Finish payment', goto: [ep['loc'], ep['loc_arg'] ?? ''] });
  } else {
    scene.action({ label: 'Finish Payment', goto: [(s as any).loc ?? '', (s as any).locArg ?? ''] });
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'autosave':
      enterAutosave(s, scene);
      break;
    case 'show_table':
      enterShowTable(s, scene);
      break;
    case 'guy':
      enterGuy(s, scene);
      break;
    case 'girl':
      enterGirl(s, scene);
      break;
    case 'undress':
      enterUndress(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case 'checkdress':
      enterCheckdress(s, scene);
      break;
    case 'payments':
      enterPayments(s, scene);
      break;
    case 'paymentcomplete':
      enterPaymentComplete(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shortgs: LocationDef = {
  name: 'shortgs',
  title: 'You need to get dressed before going out.',
  region: 'other',
  enter: enter,
};
