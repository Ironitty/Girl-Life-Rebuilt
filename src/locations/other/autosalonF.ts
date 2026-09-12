import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'autosalonF', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Car Dealership</b></center>');
  scene.img('images/locations/city/industrial/cardealer/manager.jpg');
  scene.text('<b><center>Vehicles for sale, all brand new</center></b>');
  // TODO-QSP: $car_table +=  '<tr><th>Car</th><th></th><th>Price</th></tr>'
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 6)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 7)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 8)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 9)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 13)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 102)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 110)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 104)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 95)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 103)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 105)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 106)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 109)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 97)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 101)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 107)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 99)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 96)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 98)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 108)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 100)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 111)
  // TODO-QSP: $car_table +=  $func('autosalonF', 'vehicle_table_row', 112)
  // TODO-QSP: $car_table += '</table></center>'
  // TODO-QSP: $car_table
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to the manager', goto: ['autosalonF', 'manager1'] },
    { label: 'Return', goto: ['autotraidF', 'start'] },
  ]);
  scene.build();
}

function enterVehicleTableRow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'car_attributes', ARGS[1]
  // TODO-QSP: $result +=  '<td><a href="exec:gs ''autosalonF'', ''display_vehicle'', <<ARGS[1]>>"><<$CarName>></a>...
  // TODO-QSP: $result +=  '<td> - </td>'
  // TODO-QSP: $result +=  '<td>' + func('money', 'string_price', CarPrice) + '</td>'
  // TODO-QSP: $result += '</tr>'
  // TODO-QSP: end
  scene.build();
}

function enterDisplayVehicle(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((!((s as any).autosalonF_carnum ?? 0))) {
    (s as any).autosalonF_carnum = qspUntranslated(s, "ARGS[1]", { location: "autosalonF" });
    qspCall(s, 'car_attributes', '', ((s as any).autosalonF_carnum ?? 0));
  }
  if (((s as any).CarName ?? 0) === '') {
    scene.text('It appears the car you selected does not actually exist.');
  } else {
    // TODO-QSP: dynamic text: <center><b><<$CarName>></b></center>
    scene.text(`<center><b>${((s as any).CarName ?? 0)}</b></center>`);
    scene.img(`images/pc/items/accessories/car/car${((s as any).autosalonF_carnum ?? 0)}.jpg`);
    scene.actions([
      { label: 'Sit behind the wheel', handler: (st: GameState) => {
    scene.img(`images/pc/items/accessories/car/salon${((s as any).autosalonF_carnum ?? 0)}.jpg`);
    scene.actions([
      { label: 'Return', goto: ['autosalonF', 'display_vehicle'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    // TODO-QSP: killvar 'autosalonF_carnum'
  }, goto: ['autosalonF', 'start'] },
  ]);
  scene.build();
}

function enterManager1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'autosalonF', 'manager1');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Car Dealership</b></center>');
  scene.img('images/locations/city/industrial/cardealer/manager.jpg');
  // TODO-QSP: dynamic text: You have <<$func('money', 'format', karta - bankDebtLimit)>> in your bank accoun...
  scene.text(`You have ${qspFunc(s, 'money', 'format', ((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0))} in your bank account.`);
  scene.text('The manager smiles affably and explains routinely what is required to purchase a car: A driver\'s license and the sum, in full, in your bank account.');
  scene.text('"With how the economy is right now, we can\'t accept payment by installments at this time I\'m afraid," he apologizes. "A few new laws have also been passed too: We cannot accept cash payment - the Duma believes that will help fight crime - and it is currently not possible to own more than one car, according to the Oblast\'s new anti-corruption law.');
  if (qspFunc(s, 'car_funcs', 'has_car')) {
    scene.text('"You already have a car, you should sell your old car before you buy a new one."');
  }
  if (((s as any).license ?? 0)?.['drive'] === 1  &&  qspFunc(s, 'car_funcs', 'has_car') === 0) {
    qspCall(s, 'autosalonF', 'set_buy_act', 6);
    qspCall(s, 'autosalonF', 'set_buy_act', 7);
    qspCall(s, 'autosalonF', 'set_buy_act', 8);
    qspCall(s, 'autosalonF', 'set_buy_act', 9);
    qspCall(s, 'autosalonF', 'set_buy_act', 10);
    qspCall(s, 'autosalonF', 'set_buy_act', 13);
    qspCall(s, 'autosalonF', 'set_buy_act', 102);
    qspCall(s, 'autosalonF', 'set_buy_act', 110);
    qspCall(s, 'autosalonF', 'set_buy_act', 104);
    qspCall(s, 'autosalonF', 'set_buy_act', 95);
    qspCall(s, 'autosalonF', 'set_buy_act', 103);
    qspCall(s, 'autosalonF', 'set_buy_act', 105);
    qspCall(s, 'autosalonF', 'set_buy_act', 106);
    qspCall(s, 'autosalonF', 'set_buy_act', 109);
    qspCall(s, 'autosalonF', 'set_buy_act', 97);
    qspCall(s, 'autosalonF', 'set_buy_act', 101);
    qspCall(s, 'autosalonF', 'set_buy_act', 107);
    qspCall(s, 'autosalonF', 'set_buy_act', 99);
    qspCall(s, 'autosalonF', 'set_buy_act', 96);
    qspCall(s, 'autosalonF', 'set_buy_act', 98);
    qspCall(s, 'autosalonF', 'set_buy_act', 108);
    qspCall(s, 'autosalonF', 'set_buy_act', 100);
    qspCall(s, 'autosalonF', 'set_buy_act', 111);
    qspCall(s, 'autosalonF', 'set_buy_act', 112);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['autosalonF', 'start'] },
  ]);
  scene.build();
}

function enterSetBuyAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'car_attributes', ARGS[1]
  if (qspFunc(s, 'money', 'can_afford', ((s as any).CarPrice ?? 0), 'bank') === 0) {
    scene.actions([
      { label: 'Buy a <<$CarName>>  [+$func(\'wrap\', \'neg\', \'(<<$func(\'money\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
  } },
    ]);
  } else {
    // TODO-QSP: dynamic "
    // TODO-QSP: act ""Buy a <<$CarName>> (<<$func('money', 'string_price', CarPrice)>>)"":
    // TODO-QSP: gt 'autosalonF', 'buy', <<ARGS[1]>>
  }
  // TODO-QSP: "
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterBuy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'car_funcs', 'add_car', ARGS[1]
  qspCall(s, 'money', 'pay', ((s as any).CarPrice ?? 0), 'bank');
  if (!(s as any).car) (s as any).car = {}; (s as any).car['fuel'] = 3;
  qspCall(s, 'car_funcs', 'setloc', 'autotraidF', 'start', 'city');
  scene.text('The manager draws up a purchasing contract, and you inform the bank of the impending transaction. Once the bank has confirmed the write-off, the manager hands you the key to your new car.');
  scene.text('"It\'s waiting for you outside," he says. "The fuel tank is almost empty though, so you should stop by the gas station right away."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['autotraidF', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'vehicle_table_row':
      enterVehicleTableRow(s, scene);
      break;
    case 'display_vehicle':
      enterDisplayVehicle(s, scene);
      break;
    case 'manager1':
      enterManager1(s, scene);
      break;
    case 'set_buy_act':
      enterSetBuyAct(s, scene);
      break;
    case 'buy':
      enterBuy(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const autosalonF: LocationDef = {
  name: 'autosalonF',
  title: '(<<$func(\'money\', \'string_price\', CarPrice)>>)',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
