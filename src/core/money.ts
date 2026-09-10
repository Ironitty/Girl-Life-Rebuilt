import type { GameState } from './types';

function getMultiplied(opt: number, val: number, mult: number): number {
  if (opt === 0) return val;
  if (opt === 1) return Math.round(val * mult);
  return val;
}

export function moneyNormalize(s: GameState): void {
  if (s.money >= 1000000000) {
    const t = Math.floor((s.money - 950000000) / 1000000);
    s.money -= t * 1000000;
    s.money_overflow += t;
  } else if (s.money < 900000000 && s.money_overflow > 0) {
    const t = Math.min(s.money_overflow, Math.floor((950000000 - s.money) / 1000000));
    s.money += t * 1000000;
    s.money_overflow -= t;
  }

  const kartaLogical = s.karta - s.bankDebtLimit;
  if (kartaLogical >= 1000000000) {
    const t = Math.floor((kartaLogical - 950000000) / 1000000);
    s.karta -= t * 1000000;
    s.karta_overflow += t;
  } else if (kartaLogical < 900000000 && s.karta_overflow > 0) {
    const t = Math.min(s.karta_overflow, Math.floor((950000000 - kartaLogical) / 1000000));
    s.karta += t * 1000000;
    s.karta_overflow -= t;
  }

  if (s.stolmoney >= 1000000000) {
    const t = Math.floor((s.stolmoney - 950000000) / 1000000);
    s.stolmoney -= t * 1000000;
    s.stolmoney_overflow += t;
  } else if (s.stolmoney < 900000000 && s.stolmoney_overflow > 0) {
    const t = Math.min(s.stolmoney_overflow, Math.floor((950000000 - s.stolmoney) / 1000000));
    s.stolmoney += t * 1000000;
    s.stolmoney_overflow -= t;
  }
}

export function moneyBankTransfer(s: GameState, amount: number, dir: 'to_bank' | 'to_cash'): void {
  if (dir === 'to_bank') {
    s.money -= amount;
    s.karta += amount;
  } else {
    s.karta -= amount;
    s.money += amount;
  }
  moneyNormalize(s);
}

export function moneyDeskTransfer(s: GameState, amount: number, mode: string): void {
  if (mode === 'to_desk') {
    s.money -= amount;
    s.stolmoney += amount;
  } else if (mode === 'all_to_desk') {
    s.stolmoney += s.money;
    s.stolmoney_overflow += s.money_overflow;
    s.money = 0;
    s.money_overflow = 0;
  } else if (mode === 'from_desk') {
    s.stolmoney -= amount;
    s.money += amount;
  } else if (mode === 'all_from_desk') {
    s.money += s.stolmoney;
    s.money_overflow += s.stolmoney_overflow;
    s.stolmoney = 0;
    s.stolmoney_overflow = 0;
  }
  moneyNormalize(s);
}

function applyModifiers(s: GameState, amount: number, type: 'price' | 'profit'): number {
  if (type === 'price') {
    return getMultiplied(s.cfg_vars['neg_mult_opt'] as number || 0, amount, s.cfg_vars['neg_mult'] as number || 1);
  }
  return getMultiplied(s.cfg_vars['pos_mult_opt'] as number || 0, amount, s.cfg_vars['pos_mult'] as number || 1);
}

function canAffordInner(s: GameState, cost: number, method: string): boolean {
  if (method === 'cash') return s.money >= cost;
  if (method === 'bank') {
    if (s.cfg_vars['allow_overdraft'] === 1) return s.karta >= cost;
    return Math.max(s.karta - s.bankDebtLimit, 0) >= cost;
  }
  if (method === 'desk') return (s.money + s.stolmoney) >= cost;
  if (s.cfg_vars['allow_overdraft'] === 1) return (s.money + s.karta) >= cost;
  return (s.money + Math.max(s.karta - s.bankDebtLimit, 0)) >= cost;
}

function cashPayment(s: GameState, amount: number, dir: 'pay' | 'earn'): void {
  if (dir === 'pay') s.money -= amount;
  else s.money += amount;
}

function bankPayment(s: GameState, amount: number, dir: 'pay' | 'earn'): void {
  if (dir === 'pay') s.karta -= amount;
  else s.karta += amount;
}

function deskPayment(s: GameState, amount: number): void {
  if (s.money >= amount) {
    cashPayment(s, amount, 'pay');
  } else {
    const cashPortion = s.money;
    cashPayment(s, cashPortion, 'pay');
    s.stolmoney -= amount - cashPortion;
  }
}

function hybridPayment(s: GameState, amount: number): void {
  if (s.money >= amount) {
    s.money -= amount;
  } else if (s.cfg_vars['allow_overdraft'] === 1 && s.money + s.karta >= amount) {
    s.karta -= amount - s.money;
    s.money = 0;
  } else if (s.cfg_vars['allow_overdraft'] === 0 && s.money + Math.max(s.karta - s.bankDebtLimit, 0) >= amount) {
    s.karta -= amount - s.money;
    s.money = 0;
  } else {
    console.warn('Hybrid payment: cannot afford');
  }
}

function paymentMethod(s: GameState, amount: number, dir: 'pay' | 'earn'): void {
  if (dir === 'pay') {
    const payOpt = s.cfg_vars['pay_opt'] as number || 0;
    const backup = s.cfg_vars['pay_opt_backup'] as number || 0;
    if (payOpt === 0) {
      if (canAffordInner(s, amount, 'cash')) {
        cashPayment(s, amount, 'pay');
      } else if (backup === 0) {
        if (canAffordInner(s, amount, 'bank')) bankPayment(s, amount, 'pay');
        else hybridPayment(s, amount);
      } else if (backup === 1) {
        hybridPayment(s, amount);
      } else {
        if (canAffordInner(s, amount, 'cash')) cashPayment(s, amount, 'pay');
        else if (canAffordInner(s, amount, 'bank')) bankPayment(s, amount, 'pay');
        else hybridPayment(s, amount);
      }
    } else if (payOpt === 1) {
      if (canAffordInner(s, amount, 'bank')) {
        bankPayment(s, amount, 'pay');
      } else if (backup === 0) {
        if (canAffordInner(s, amount, 'cash')) cashPayment(s, amount, 'pay');
        else hybridPayment(s, amount);
      } else if (backup === 1) {
        hybridPayment(s, amount);
      } else {
        if (canAffordInner(s, amount, 'cash')) cashPayment(s, amount, 'pay');
        else if (canAffordInner(s, amount, 'bank')) bankPayment(s, amount, 'pay');
        else hybridPayment(s, amount);
      }
    } else {
      if (canAffordInner(s, amount, 'cash')) cashPayment(s, amount, 'pay');
      else if (canAffordInner(s, amount, 'bank')) bankPayment(s, amount, 'pay');
      else hybridPayment(s, amount);
    }
  } else {
    const incomeOpt = s.cfg_vars['income_opt'] as number || 0;
    if (incomeOpt === 0) {
      cashPayment(s, amount, 'earn');
    } else if (incomeOpt === 1) {
      if (s.bankAccount === 1) bankPayment(s, amount, 'earn');
      else cashPayment(s, amount, 'earn');
    } else {
      cashPayment(s, amount, 'earn');
    }
  }
}

export function moneyPay(s: GameState, amount: number, method: string = 'both'): void {
  if (amount === 0) return;
  const modAmount = applyModifiers(s, amount, 'price');
  if (method === 'cash') {
    if (canAffordInner(s, modAmount, 'cash')) cashPayment(s, modAmount, 'pay');
    else console.warn('Not enough cash to pay');
  } else if (method === 'bank') {
    if (canAffordInner(s, modAmount, 'bank')) bankPayment(s, modAmount, 'pay');
    else console.warn('Not enough credit to pay');
  } else if (method === 'desk') {
    if (canAffordInner(s, modAmount, 'cash')) cashPayment(s, modAmount, 'pay');
    else if (canAffordInner(s, modAmount, 'desk')) deskPayment(s, modAmount);
    else console.warn('Not enough cash/desk to pay');
  } else {
    paymentMethod(s, modAmount, 'pay');
  }
}

export function moneyEarn(s: GameState, amount: number, method: string = 'both'): void {
  if (amount === 0) return;
  const modAmount = applyModifiers(s, amount, 'profit');
  if (method === 'cash') cashPayment(s, modAmount, 'earn');
  else if (method === 'bank') bankPayment(s, modAmount, 'earn');
  else paymentMethod(s, modAmount, 'earn');
}

export function moneySet(s: GameState, amount: number, method: string = 'cash', dir: string = 'earn'): void {
  const modType = dir === 'pay' ? 'price' : 'profit';
  const modAmount = applyModifiers(s, amount, modType as 'price' | 'profit');
  if (method === 'bank') s.karta = modAmount + s.bankDebtLimit;
  else if (method === 'desk') s.stolmoney = modAmount;
  else s.money = modAmount;
}

export function moneyPrice(s: GameState, basePrice: number): number {
  return applyModifiers(s, basePrice, 'price');
}

export function moneyProfit(s: GameState, baseProfit: number): number {
  return applyModifiers(s, baseProfit, 'profit');
}

export function moneyCanAfford(s: GameState, cost: number, method: string = 'both'): boolean {
  return canAffordInner(s, applyModifiers(s, cost, 'price'), method);
}

export function moneyCanAffordDebt(s: GameState, cost: number, method: string = 'both'): boolean {
  if (method === 'cash') return s.money >= cost;
  if (method === 'bank') {
    if (s.cfg_vars['allow_overdraft'] === 1) return s.karta >= cost;
    return Math.max(s.karta - s.bankDebtLimit, 0) >= cost;
  }
  if (method === 'desk') return (s.money + s.stolmoney) >= cost;
  if (method === 'all') {
    if (s.cfg_vars['allow_overdraft'] === 1) return (s.money + s.stolmoney + s.karta) >= cost;
    return (s.money + s.stolmoney + Math.max(s.karta - s.bankDebtLimit, 0)) >= cost;
  }
  if (s.cfg_vars['allow_overdraft'] === 1) return (s.money + s.karta) >= cost;
  return (s.money + Math.max(s.karta - s.bankDebtLimit, 0)) >= cost;
}

export function moneyFormat(_s: GameState, amount: number, hideSign: boolean = false, asText: boolean = false, color: boolean = false): string {
  let str: string;
  if (asText) {
    str = amount.toLocaleString();
    if (!hideSign) str += ' Rouble' + (amount !== 1 ? 's' : '');
  } else {
    str = amount.toLocaleString('en-US');
    if (!hideSign) str += ' ₽';
  }
  if (color) {
    str = amount > 0 ? `<span style="color:green">${str}</span>` : `<span style="color:red">${str}</span>`;
  }
  return str;
}

export function moneyStringPrice(s: GameState, baseCost: number): string {
  if (baseCost === 0) return 'Free';
  return moneyFormat(s, applyModifiers(s, baseCost, 'price'));
}

export function moneyStringProfit(s: GameState, baseProfit: number): string {
  return moneyFormat(s, applyModifiers(s, baseProfit, 'profit'));
}

export function moneyDebtAdd(s: GameState, debtVar: string, amount: number): void {
  if (amount === 0) return;
  const modAmount = moneyPrice(s, amount);
  const rec = s as unknown as Record<string, unknown>;
  rec[debtVar] = ((rec[debtVar] as number) || 0) + modAmount;
}

export function moneyDebtPay(s: GameState, debtVar: string, amount: number = 0, source: string = 'all'): number {
  const rec = s as unknown as Record<string, unknown>;
  const debt = (rec[debtVar] as number) || 0;
  if (debt <= 0) return 0;

  let target = amount > 0 ? Math.min(amount, debt) : debt;
  let paid = 0;

  if (source === 'none') {
    rec[debtVar] = debt - target;
    return target;
  }

  if (s.money > 0) {
    const fromCash = Math.min(s.money, target);
    s.money -= fromCash;
    paid += fromCash;
    target -= fromCash;
  }

  if (target > 0 && (source === 'desk' || source === 'all') && s.stolmoney > 0) {
    const fromDesk = Math.min(s.stolmoney, target);
    s.stolmoney -= fromDesk;
    paid += fromDesk;
    target -= fromDesk;
  }

  if (target > 0 && (source === 'all' || source === '') && s.karta > 0) {
    const fromBank = Math.min(s.karta, target);
    s.karta -= fromBank;
    paid += fromBank;
    target -= fromBank;
  }

  rec[debtVar] = debt - paid;
  return paid;
}
