import type { GameState } from './types';
import { moodRaise } from './mood';
import { moneyPay } from './money';

interface FoodDef {
  image: string;
  text: (s: GameState) => string;
  time: number;
  health: number | ((s: GameState) => number);
  mood: string | number | null;
  fat: number;
  energy: number;
  hydra: number | ((s: GameState) => number);
  frost: boolean;
  cumCleanup: number | null;
  cumspclnt?: number;
  extraCash?: number;
  noPay?: boolean;
}

function hydraDrain(s: GameState): number {
  return s.pcs_hydra >= 100 ? -5 : -10;
}

function hydraGain(s: GameState, low: number, high: number): number {
  return s.pcs_hydra >= 100 ? low : high;
}

export const FOOD_ITEMS: Record<string, FoodDef> = {
  pirosh: {
    image: 'images/shared/food/pirozhki.jpg',
    text: (s) => s.loc === 'uni_cafe'
      ? 'You buy some vegetarian Piroshki.'
      : `You enjoy some vegetarian Piroshki, and${foodAfterMeal(s)}`,
    time: 15, health: 10, mood: 2, fat: 4, energy: 40,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  golub: {
    image: 'images/shared/food/golubtsy.jpg',
    text: (s) => s.loc === 'uni_cafe'
      ? 'You buy some well-made Golubtsy in a tomato sauce. The portion is of moderate size.'
      : `You enjoy some well made Golubtsy in a tomato sauce. The portions were moderate and${foodAfterMeal(s)}`,
    time: 20, health: 10, mood: 2, fat: 8, energy: 60,
    hydra: (s) => hydraGain(s, 10, 20), frost: true, cumCleanup: 2,
  },
  pozhar: {
    image: 'images/shared/food/pozharsky.jpg',
    text: (s) => s.loc === 'uni_cafe'
      ? 'You buy Pozharsky cutlets. The portions are of moderate size.'
      : `You thoroughly enjoy the nicely cooked Pozharsky Cutlets. The portions were moderate and${foodAfterMeal(s)}`,
    time: 20, health: 15, mood: 'tiny', fat: 6, energy: 70,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  reuben: {
    image: 'images/shared/food/reuben.jpg',
    text: (s) => s.loc === 'uni_cafe'
      ? 'You buy a Reuben sandwich. It is quite large.'
      : `You had trouble finishing the Reuben sandwich, but you enjoyed it immensely. The portion was fairly large and${foodAfterMeal(s)}`,
    time: 25, health: 20, mood: 'small', fat: 12, energy: 110,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  bliny: {
    image: 'images/shared/food/blini.jpg',
    text: (s) => s.loc === 'uni_cafe'
      ? 'You buy some bliny. The portions are fairly small.'
      : `You eat some bliny. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 15, health: 10, mood: 1, fat: 8, energy: 50,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  varenfan: {
    image: 'images/shared/food/varenikifancy.jpg',
    text: (s) => `You sit and eat a plate of yummy Vareniki with potatoes. The portions are fairly moderate and${foodAfterMeal(s)}`,
    time: 25, health: 15, mood: 'tiny', fat: 10, energy: 40,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  salfan: {
    image: 'images/shared/food/salmonfancy.jpg',
    text: (s) => `You thoroughly enjoy the massive fresh salmon steak. The meal was simply colossal and${foodAfterMeal(s)}`,
    time: 40, health: 20, mood: 'small', fat: 12, energy: 80,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  strofan: {
    image: 'images/shared/food/stroganofffancy.jpg',
    text: (s) => `You are loving the delicious Beef Stroganoff. You enjoy it immensely. The portion was fairly moderate and${foodAfterMeal(s)}`,
    time: 35, health: 20, mood: 'small', fat: 6, energy: 120,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  borfan: {
    image: 'images/shared/food/borschtfancy.jpg',
    text: (s) => `You have a steaming hot bowl of Borscht. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 25, health: 10, mood: 'small', fat: 4, energy: 60,
    hydra: (s) => hydraGain(s, 20, 40), frost: true, cumCleanup: 2,
  },
  blifan: {
    image: 'images/shared/food/blinifancy.jpg',
    text: (s) => `You eat a petite caviar bliny appetiser. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 20, health: 30, mood: 'medium', fat: 6, energy: 50,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  ryesna: {
    image: 'images/shared/food/ryesnack.jpg',
    text: (s) => `You have a tasty bowl of toasted rye snacks. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 10, health: (s) => s.pcs_health / 10, mood: 3, fat: 4, energy: 20,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  crisps: {
    image: 'images/shared/food/crisps.jpg',
    text: (s) => `You enjoy the salty flavour of a bowl of crisps. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 10, health: (s) => s.pcs_health / 10, mood: 'tiny', fat: 16, energy: 20,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  onring: {
    image: 'images/shared/food/onionrings.jpg',
    text: (s) => `You push yourself to eat the dry fatty onion rings. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 10, health: 10, mood: 2, fat: 16, energy: 40,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  vegburg: {
    image: 'images/shared/food/vegieburger.jpg',
    text: (s) => `You eat the delicious veggieburger. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 20, health: 20, mood: 3, fat: 8, energy: 60,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  turburg: {
    image: 'images/shared/food/turkeyburger.jpg',
    text: (s) => `You enjoy the turkey burger. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 20, health: 10, mood: 3, fat: 10, energy: 60,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  batfish: {
    image: 'images/shared/food/batteredfish.jpg',
    text: (s) => `You eat the fish, but it has little flavour. The portions were moderate and${foodAfterMeal(s)}`,
    time: 20, health: 15, mood: 1, fat: 11, energy: 80,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  cheeseburger: {
    image: 'images/shared/food/cheeseburger.jpg',
    text: (s) => `You are a little sickened by the greasy looking cheeseburger and fries in front of you. The meal was simply colossal and${foodAfterMeal(s)}`,
    time: 25, health: 20, mood: 'small', fat: 14, energy: 120,
    hydra: hydraDrain, frost: true, cumCleanup: 2,
  },
  snack: {
    image: 'images/shared/food/snack_1.jpg',
    text: (s) => `You enjoy a small tasty, but somewhat fattening, snack. It wasn't very much food, and${foodAfterMeal(s)}`,
    time: 5, health: 10, mood: 'tiny', fat: 6, energy: 20,
    hydra: 0, frost: false, cumCleanup: 2,
  },
  light_snack: {
    image: 'images/shared/food/snack_1.jpg',
    text: (s) => `You enjoy a small tasty, but somewhat fattening, snack. It wasn't very much food, and${foodAfterMeal(s)}`,
    time: 5, health: 10, mood: 'tiny', fat: 3, energy: 20,
    hydra: 0, frost: false, cumCleanup: 2,
  },
  fast_food: {
    image: 'images/shared/food/food.jpg',
    text: (s) => `You happily eat some fast food. The portions are quite generous and${foodAfterMeal(s)}`,
    time: 10, health: 10, mood: null, fat: 14, energy: 70,
    hydra: (s) => hydraGain(s, 35, 70), frost: true, cumCleanup: 2,
  },
  small_meal: {
    image: `images/shared/food/food_${Math.floor(Math.random() * 4) + 1}.jpg`,
    text: (s) => `You happily eat your meal. The portions are fairly small and${foodAfterMeal(s)}`,
    time: 10, health: 10, mood: null, fat: 4, energy: 40,
    hydra: (s) => hydraGain(s, 20, 40), frost: true, cumCleanup: 2,
  },
  medium_meal: {
    image: `images/shared/food/food_${Math.floor(Math.random() * 4) + 1}.jpg`,
    text: (s) => `You thoroughly enjoy the nicely cooked meal. The portions were moderate and${foodAfterMeal(s)}`,
    time: 15, health: 10, mood: null, fat: 8, energy: 60,
    hydra: (s) => hydraGain(s, 30, 60), frost: true, cumCleanup: 2,
  },
  large_meal: {
    image: `images/shared/food/food_${Math.floor(Math.random() * 4) + 1}.jpg`,
    text: (s) => `You are almost overwhelmed by the delicious meal laid before you and enjoy it immensely. The meal was simply colossal and${foodAfterMeal(s)}`,
    time: 20, health: 10, mood: null, fat: 14, energy: 100,
    hydra: (s) => hydraGain(s, 50, 100), frost: true, cumCleanup: 2,
  },
  bagged_lunch: {
    image: 'images/shared/food/bagged_lunch.jpg',
    text: (s) => `You eat the lunch you packed from home. There was nothing fancy about it and${foodAfterMeal(s)}`,
    time: 15, health: 10, mood: null, fat: 5, energy: 40,
    hydra: (s) => hydraGain(s, 30, 60), frost: true, cumCleanup: 2, noPay: true,
  },
  hotel_food: {
    image: 'images/locations/pavlovsk/hotel/roomservice.jpg',
    text: (s) => `The maid brings you a decent meal, ${foodAfterMeal(s)}\nYou accompany it with a mug of tea.`,
    time: 25, health: 10, mood: null, fat: 7, energy: 60,
    hydra: (s) => hydraGain(s, 30, 60), frost: true, cumCleanup: 2, extraCash: 100,
  },
  healthy_meal: {
    image: 'images/shared/food/eating-salad.jpg',
    text: (s) => `You enjoy a crisp salad of fresh greens and${foodAfterMeal(s)}`,
    time: 25, health: 20, mood: null, fat: 1, energy: 50,
    hydra: (s) => hydraGain(s, 25, 50), frost: true, cumCleanup: 2,
  },
  jerky: {
    image: 'images/locations/gadukino/hunters/jerky_mix.jpg',
    text: (s) => `You munch on some dried meat and trail mix. Not a full hot meal by any means but it's better than nothing, and${foodAfterMeal(s)}`,
    time: 10, health: 10, mood: null, fat: 1, energy: 20,
    hydra: -15, frost: true, cumCleanup: 2,
  },
  meat_stew: {
    image: 'images/locations/gadukino/hunters/soup.jpg',
    text: (s) => `You thoroughly enjoy the nicely cooked meat stew, and${foodAfterMeal(s)}\nYou accompany it with a mug of tea.`,
    time: 30, health: 10, mood: null, fat: 3, energy: 50,
    hydra: (s) => hydraGain(s, 10, 20), frost: true, cumCleanup: 2,
  },
  mush_soup: {
    image: 'images/locations/gadukino/hunters/soup.jpg',
    text: (s) => `You thoroughly enjoy some warm mushroom soup, and${foodAfterMeal(s)}\nYou accompany it with a mug of tea.`,
    time: 30, health: 10, mood: null, fat: 3, energy: 40,
    hydra: (s) => hydraGain(s, 20, 30), frost: true, cumCleanup: null, cumspclnt: 2,
  },
  bilberry: {
    image: 'images/locations/gadukino/forest/bilberry.jpg',
    text: (s) => `You ate a few berries, and${foodAfterMeal(s)}`,
    time: 15, health: 10, mood: 2, fat: 1, energy: 10,
    hydra: 10, frost: false, cumCleanup: 2,
  },
};

export function foodAfterMeal(s: GameState): string {
  if (s.pcs_energy > 100) return ' you had to force yourself to finish and now you feel stuffed.';
  if (s.pcs_energy >= 80) return ' it was enough to leave you feeling full and satisfied.';
  if (s.pcs_energy >= 60) return " while you no longer feel especially hungry, you don't feel all that satisfied either.";
  if (s.pcs_energy >= 40) return ' while you no longer feel like you are starving, you are still quite hungry - in fact, you could probably eat the same amount again and still have room for dessert.';
  return ' did nothing to appease your hunger, in fact, it only made you want more.';
}

export function foodApplyStats(s: GameState, item: string): void {
  const def = FOOD_ITEMS[item];
  if (!def) return;
  if (def.frost) s.frost = 0;
  const h = typeof def.health === 'function' ? def.health(s) : def.health;
  s.pcs_health += h;
  if (def.mood !== null) moodRaise(s, def.mood);
  s.fat += def.fat;
  s.pcs_energy += def.energy;
  const hyd = typeof def.hydra === 'function' ? def.hydra(s) : def.hydra;
  s.pcs_hydra += hyd;
  if (def.cumCleanup !== null) {
    (s as any).cumspclnt = def.cumCleanup;
  }
  if (def.cumspclnt) {
    (s as any).cumspclnt = def.cumspclnt;
  }
  s.pcs_breath = 0;
}

export function foodEat(s: GameState, item: string, price: number): string {
  const def = FOOD_ITEMS[item];
  if (!def) return '';
  s.menu_off = 1;
  s.minut += def.time;
  if (def.extraCash) moneyPay(s, def.extraCash, 'cash');
  if (!def.noPay) moneyPay(s, price);
  foodApplyStats(s, item);
  return def.text(s);
}

export function foodOnlyCost(s: GameState, item: string, price: number): void {
  const def = FOOD_ITEMS[item];
  if (!def) return;
  moneyPay(s, price);
  foodApplyStats(s, item);
  if (s.loc === 'uni_cafe') s.uni_lunch_bought = 1;
}

export function foodFamilyMeals(s: GameState, meal: string): void {
  s.frost = 0;
  s.minut += 20;
  s.pcs_health += 10;
  moodRaise(s, 'tiny');
  s.fat += meal === 'dinner' ? 8 : 6;
  s.pcs_energy += 60;
  if (s.pcs_hydra < 20) s.pcs_hydra += 80;
  else if (s.pcs_hydra < 100) s.pcs_hydra += 60;
  else s.pcs_hydra += 30;
  (s as any).cumspclnt = 2;
  s.pcs_breath = 0;
}
