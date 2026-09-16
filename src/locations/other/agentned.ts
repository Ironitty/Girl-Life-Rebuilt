import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'agentned', 'start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  qspCall(s, 'dina', '');
  scene.text('<center><b>Kirsanova Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo.jpg');
  scene.text('This is the head office of the largest real estate agency in the Leningrad Oblast.');
  scene.text('At the reception, you notice a large print banner:');
  scene.text('<b>"Please be aware that all sales transactions are made exclusively through your bank account. Rent payments are excluded from this policy."</b>');
  qspCall(s, 'homes_properties', 'get_rented_properties', 'home');
  (s as any).agentned_count = 0;
  if (((s as any).agentned_count ?? 0) > 0) {
    (s as any).agentned_i = 0;
    scene.text('<h4>Rent Information</h4>');
    // TODO-QSP: :listing_rented_properties_loop
    // TODO-QSP: 'You have <b><<property_days[agentned_i]>> days</b> remaining on the lease of your <<$property_displ...
    // TODO-QSP: dynamic "
    // TODO-QSP: act ""Cancel the lease of the <<$property_display[agentned_i]>>"":
    scene.text('Attention: You won\'t be able to return to your apartment when you cancel the lease.');
    scene.actions([
      { label: 'Return', goto: ['agentned', 'start'] },
      { label: 'Cancel it', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'cancel_rent', '' + ((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] + '');
    qspGoto(s, 'agentned', 'start');
  } },
    ]);
  }
  // TODO-QSP: "
  (s as any).agentned_i = ((s as any).agentned_i ?? 0) + (1);
  if (((s as any).agentned_i ?? 0) < ((s as any).agentned_count ?? 0)) {
    // TODO-QSP: jump 'listing_rented_properties_loop'
  }
  // TODO-QSP: end
  qspCall(s, 'homes_properties', 'get_owned_properties', 'home');
  (s as any).agentned_count = 0;
  if (((s as any).agentned_count ?? 0) > 0) {
    scene.text('<h4>You own the following properties</h4>');
    (s as any).agentned_i = 0;
    // TODO-QSP: :listing_owned_properties_loop
    (s as any).agentned_i = ((s as any).agentned_i ?? 0) + (1);
    if (((s as any).agentned_i ?? 0) < ((s as any).agentned_count ?? 0)) {
      // TODO-QSP: jump 'listing_owned_properties_loop'
    }
    scene.text('We are at your service if you decide to <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027agentned\\u0027, \\u0027sell\\u0027); return false;">sell</a>.');
  }
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  // TODO-QSP: end
  scene.actions([
    { label: 'View rentals', goto: ['agentned', 'rent'] },
    { label: 'View properties for sale', goto: ['agentned', 'buy'] },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterBuy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'agentned', 'buy');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'housing', 'sale');
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  scene.text('<center><b>Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo.jpg');
  scene.text('<h4> The purchase of any properties requires a bank account. The Agency is not conducting business in cash in compliance with the Anti-Money Laundering Regulations</h4>');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'homes_properties', 'get_properties_for_sale');
  (s as any).agentned_count = 0;
  if (((s as any).agentned_count ?? 0) <= 0) {
    scene.text('We currently have no properties listed for sale.');
  } else {
    (s as any).agentned_i = 0;
    scene.text('<h4>We have the following properties for sales</h4>');
    // TODO-QSP: :listing_properties_for_sale_loop
    if (((s as any).property_is_rented ?? 0)?.[String((s as any).agentned_i ?? 0)] === 0) {
      // TODO-QSP: dynamic text: A(n) <<$property_display[agentned_i]>> is available for sale for <<func('money',...
      scene.text(`A(n) ${((s as any).property_display ?? 0)?.[String((s as any).agentned_i ?? 0)] ?? ''} is available for sale for ${qspFunc(s, 'money', 'string_price', ((s as any).property_sales_price ?? 0)?.[String((s as any).agentned_i ?? 0)] ?? '')}.`);
    } else {
      // TODO-QSP: dynamic text: You could buy the <<$property_display[agentned_i]>> you're currently renting, fo...
      scene.text(`You could buy the ${((s as any).property_display ?? 0)?.[String((s as any).agentned_i ?? 0)] ?? ''} you're currently renting, for ${qspFunc(s, 'money', 'string_price', ((s as any).property_sales_price ?? 0)?.[String((s as any).agentned_i ?? 0)] ?? '')}.`);
    }
    if (((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'city_apartment'  ||  ((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'village_cottage'  ||  ((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'city_house'  ||  ((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'matryona_mansion') {
      // TODO-QSP: dynamic "
      // TODO-QSP: act ""Buy the <<$property_display[agentned_i]>>"" + $func('money', 'get_cost_string', <<property_sal...
      if (qspFunc(s, 'money', 'can_afford', ((s as any).property_sales_price ?? 0)?.[String((s as any).agentned_i ?? 0)], 'bank') === 0) {
        s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
      } else {
        qspGoto(s, 'agentned', 'buy_property', qspUntranslated(s, "'<<property_code[agentned_i]>>'", { location: "agentned" }));
      }
    }
    // TODO-QSP: "
  }
  (s as any).agentned_i = ((s as any).agentned_i ?? 0) + (1);
  if (((s as any).agentned_i ?? 0) < ((s as any).agentned_count ?? 0)) {
    // TODO-QSP: jump 'listing_properties_for_sale_loop'
  }
  // TODO-QSP: end
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['agentned', 'start'] },
  ]);
  scene.build();
}

function enterBuyProperty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'get_property_sales_info', ((s as any).locArgs?.[1] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'money', 'pay', ((s as any).property_sales_price ?? 0), 'bank');
  qspCall(s, 'homes_properties', 'buy_property', ((s as any).locArgs?.[1] ?? 0), ((s as any).property_sales_price ?? 0));
  (s as any).set_homeyn = ((s as any).input ?? 0)("((s as any).Would ?? 0) ((s as any).you ?? 0) ((s as any).like ?? 0) ((s as any).to ?? 0) ((s as any).set ?? 0) ((s as any).this ?? 0) ((s as any).as ?? 0) ((s as any).your ?? 0) new ((s as any).home ?? 0)? (((s as any).yes ?? 0)/((s as any).no ?? 0))");
  if (((s as any).set_homeyn ?? 0) === 'yes') {
    qspCall(s, 'homes_properties', 'set_home', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'village_cottage') {
    ((s as any).exhib = (s as any).exhib ?? {})['status'] = 0;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo_paperwork.jpg');
  // TODO-QSP: dynamic text: You spend half an hour filling in the paperwork to buy the <<$property_display>>...
  scene.text(`You spend half an hour filling in the paperwork to buy the ${((s as any).property_display || '')}. ${qspFunc(s, 'money', 'string_price', ((s as any).property_sales_price || ''))} has been removed from your bank account.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['agentned', 'buy'] },
  ]);
  scene.build();
}

function enterSell(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'agentned', 'sell');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  scene.text('<center><b>Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo.jpg');
  scene.text('<h4>Any purchase or sale of a property requires a bank account. The Agency is not conducting business in cash in compliance with the Anti-Money Laundering Regulations</h4>');
  if ((!((s as any).bankAccount ?? 0))) {
    scene.text('<b>You need to open a bank account to sell your property</b>');
  } else {
    qspCall(s, 'homes_properties', 'get_owned_properties', 'home');
    (s as any).agentned_count = 0;
    if (((s as any).agentned_count ?? 0) > 0) {
      scene.text('<h4>Available offers for your properties</h4>');
      (s as any).agentned_i = 0;
      // TODO-QSP: :listing_offers_on_owned_properties_loop
      if (((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] !== 'matryona_mansion'  ||  (((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'matryona_mansion'  &&  ((s as any).property_construction_status ?? 0)?.[String((s as any).agentned_i ?? 0)] === 0)) {
        (s as any).offer = ((s as any).property_sales_price ?? 0) + ((s as any).property_renovation_value ?? 0) + (((s as any).property_sales_price ?? 0) * (Math.floor(Math.random() * (10 - (-10) + 1)) + ((-10)))) / 100 + (((s as any).property_renovation_value ?? 0) * (Math.floor(Math.random() * 11) + 0)) / 100;
        if (((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'city_apartment'  ||  ((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'village_cottage'  ||  ((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'city_house'  ||  ((s as any).property_code ?? 0)?.[String((s as any).agentned_i ?? 0)] === 'matryona_mansion') {
          // TODO-QSP: dynamic text: We have found a buyer for your <<$property_display[agentned_i]>>. They will offe...
          scene.text(`We have found a buyer for your ${((s as any).property_display ?? 0)?.[String((s as any).agentned_i ?? 0)] ?? ''}. They will offer ${qspFunc(s, 'money', 'string_profit', ((s as any).offer || ''))}, minus 5% for fees and taxes to the value of ${qspFunc(s, 'money', 'string_profit', ((s as any).offer ?? '') * 5 / 100)}, bringing the total to ${qspFunc(s, 'money', 'string_profit', ((s as any).offer ?? '') * 95 / 100)}`);
          // TODO-QSP: dynamic "
          // TODO-QSP: act ""Sell the <<$property_display[agentned_i]>> for <<$func('money', 'string_profit', offer * 95 / ...
          // TODO-QSP: gt 'agentned', 'finalise_sale', '<<$property_code[agentned_i]>>', <<agentned_i>>, <<offer>>
        }
        // TODO-QSP: "
      }
    }
    (s as any).agentned_i = ((s as any).agentned_i ?? 0) + (1);
    if (((s as any).agentned_i ?? 0) < ((s as any).agentned_count ?? 0)) {
      // TODO-QSP: jump 'listing_offers_on_owned_properties_loop'
    }
  }
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'homes_properties', 'clean_up_property_data');
    qspGoto(s, 'agentned', 'start');
  } },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterFinaliseSale(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  qspCall(s, 'homes_properties', 'get_property_sales_info', ((s as any).locArgs?.[1] ?? 0));
  scene.text('<center><b>Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo_paperwork.jpg');
  // TODO-QSP: dynamic text: You spend thirty minutes filling out the paperwork for the sale of your <<$prope...
  scene.text(`You spend thirty minutes filling out the paperwork for the sale of your ${qspUntranslated(s, "property_display[ARGS[2]]", { location: "agentned" })}. ${qspFunc(s, 'money', 'string_profit', ((s as any).locArgs?.[3] ?? '') * 95 / 100)} has been paid into your bank account.`);
  // TODO-QSP: gs 'homes_properties', 'sell_property', $ARGS[1], ARGS[3]
  // TODO-QSP: gs 'money', 'earn', ARGS[3] * 95 / 100, 'bank'
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['agentned', 'sell'] },
  ]);
  scene.build();
}

function enterRent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'agentned', 'rent');
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo.jpg');
  qspCall(s, 'homes_properties', 'get_properties_for_rent', 'home');
  (s as any).agentned_count = 0;
  if (((s as any).agentned_count ?? 0) <= 0) {
    scene.text('We currently have no properties listed for rent.');
  } else {
    (s as any).agentned_i = 0;
    scene.text('<h4>Properties currently available for rent</h4>');
    // TODO-QSP: :listing_properties_for_rent_loop
    // TODO-QSP: dynamic text: We have a(n) <<$property_display[agentned_i]>> available for a monthly rent of <...
    scene.text(`We have a(n) ${((s as any).property_display ?? 0)?.[String((s as any).agentned_i ?? 0)] ?? ''} available for a monthly rent of ${qspFunc(s, 'money', 'string_price', ((s as any).property_rent ?? 0)?.[String((s as any).agentned_i ?? 0)] ?? '')}.`);
    // TODO-QSP: dynamic "
    // TODO-QSP: act ""View the <<$property_display[agentned_i]>> details"":
    // TODO-QSP: gt 'agentned', 'view_property_details', '<<$property_code[agentned_i]>>', <<property_rent[agentned_i...
  }
  // TODO-QSP: "
  (s as any).agentned_i = ((s as any).agentned_i ?? 0) + (1);
  if (((s as any).agentned_i ?? 0) < ((s as any).agentned_count ?? 0)) {
    // TODO-QSP: jump 'listing_properties_for_rent_loop'
  }
  // TODO-QSP: end
  qspCall(s, 'homes_properties', 'clean_up_property_data');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['agentned', 'start'] },
  ]);
  scene.build();
}

function enterViewPropertyDetails(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo.jpg');
  // TODO-QSP: dynamic text: <<$func('agentned', 'get_rent_detail_dialogue', $ARGS[1])>> The receptionist say...
  scene.text(`${qspFunc(s, 'agentned', 'get_rent_detail_dialogue', ((s as any).locArgs?.[1] ?? ''))} The receptionist says as he starts pulling out the paperwork, "Rent is ${qspFunc(s, 'money', 'string_price', ((s as any).locArgs?.[2] ?? ''), 1)} and leases have to be renewed every 30 days. Payment will be automatically deducted from your account or you can come into the office to pay. Last, but not least, you must make pay the first month when you sign for the lease."`);
  scene.text('<br>He pulls out a pen and slides the paperwork onto the counter. "Interested? You can move in right away," he says calmly.');
  if (qspFunc(s, 'money', 'can_afford', ((s as any).locArgs?.[2] ?? 0)) === 0) {
    scene.text('You do not have enough money with you or in your bank account to pay the rent.');
  } else {
    // TODO-QSP: dynamic "
    // TODO-QSP: "
    scene.actions([
      { label: 'Agree and pay', handler: (st: GameState) => {
    // TODO-QSP: gt 'agentned', 'finalise_rent', '<<$ARGS[1]>>', <<ARGS[2]>>
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Real Estate Agency</b></center>');
    scene.img('images/locations/city/citycenter/realestate/agenstvo.jpg');
    scene.text('You shake your head, "Actually, I need more time to think about this."');
    scene.text('<br>The receptionist seems a bit miffed, but says nothing as he takes back the paperwork and stuffs it back into his desk drawer.');
    scene.actions([
      { label: 'Return', goto: ['agentned', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGetRentDetailDialogue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'old_town_apartment') {
    (s as any).result = '"We have a small apartment available right now that is in Pushkin\'s city center. It\'s a little bit pricey, but it\'s been recently renovated to be more modern. It looks quite nice, so you won\'t find a place like that outside of Pushkin."';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'city_apartment') {
      (s as any).result = '"We have a flat available right now in the St. Petersburg residential area."';
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetRentDetailDialogueHook(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).result = ((s as any).agency_rental_dialogue ?? 0);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetRentDetailDialogueHook(s: GameState, scene: SceneBuilder): void {
  (s as any).agency_rental_dialogue = '';
  // TODO-QSP: end
  scene.build();
}

function enterFinaliseRent(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: gs 'money', 'pay', ARGS[2]
  qspCall(s, 'homes_properties', 'rent_property', ((s as any).locArgs?.[1] ?? 0));
  if (qspFunc(s, 'homes_properties', 'get_accessible_property_count', 'home') === 1) {
    qspCall(s, 'homes_properties', 'set_home', ((s as any).locArgs?.[1] ?? 0));
  } else {
    (s as any).set_homeyn = ((s as any).input ?? 0)('Would you like to set this as your new home? (yes/no)');
    if (((s as any).set_homeyn ?? 0) === 'yes') {
      qspCall(s, 'homes_properties', 'set_home', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Real Estate Agency</b></center>');
  scene.img('images/locations/city/citycenter/realestate/agenstvo_paperwork.jpg');
  scene.text('You take the pen then start filling out the paperwork. After writing for half an hour, you hand over the money and receive the keys to your new apartment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['agentned', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'buy':
      enterBuy(s, scene);
      break;
    case 'buy_property':
      enterBuyProperty(s, scene);
      break;
    case 'sell':
      enterSell(s, scene);
      break;
    case 'finalise_sale':
      enterFinaliseSale(s, scene);
      break;
    case 'rent':
      enterRent(s, scene);
      break;
    case 'view_property_details':
      enterViewPropertyDetails(s, scene);
      break;
    case 'get_rent_detail_dialogue':
      enterGetRentDetailDialogue(s, scene);
      break;
    case 'get_rent_detail_dialogue_hook':
      enterGetRentDetailDialogueHook(s, scene);
      break;
    case 'finalise_rent':
      enterFinaliseRent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const agentned: LocationDef = {
  name: 'agentned',
  title: 'Kirsanova Real Estate Agency',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
