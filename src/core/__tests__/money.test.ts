import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import {
  moneyNormalize, moneyBankTransfer, moneyDeskTransfer,
  moneyPay, moneyEarn, moneySet, moneyPrice, moneyProfit,
  moneyCanAfford, moneyCanAffordDebt, moneyFormat,
  moneyStringPrice, moneyStringProfit, moneyDebtAdd, moneyDebtPay,
} from '../money';

function makeState(overrides: Partial<GameState> = {}): GameState {
  return {
    money: 0, money_overflow: 0,
    karta: 0, karta_overflow: 0, bankDebtLimit: 0,
    stolmoney: 0, stolmoney_overflow: 0,
    cfg_vars: {},
    bankAccount: 0,
    ...overrides,
  } as GameState;
}

describe('moneyNormalize', () => {
  it('moves money above 1e9 into overflow', () => {
    const s = makeState({ money: 1_500_000_000 });
    moneyNormalize(s);
    expect(s.money).toBe(950_000_000);
    expect(s.money_overflow).toBe(550);
  });

  it('pulls money back from overflow when below 900e6', () => {
    const s = makeState({ money: 500_000_000, money_overflow: 100 });
    moneyNormalize(s);
    expect(s.money).toBe(600_000_000);
    expect(s.money_overflow).toBe(0);
  });

  it('does nothing when money is in normal range', () => {
    const s = makeState({ money: 500_000_000, money_overflow: 0 });
    moneyNormalize(s);
    expect(s.money).toBe(500_000_000);
    expect(s.money_overflow).toBe(0);
  });

  it('handles karta overflow using logical balance (karta - debtLimit)', () => {
    const s = makeState({ karta: 1_500_000_000, bankDebtLimit: 0 });
    moneyNormalize(s);
    expect(s.karta).toBe(950_000_000);
    expect(s.karta_overflow).toBe(550);
  });

  it('handles stolmoney overflow', () => {
    const s = makeState({ stolmoney: 1_200_000_000 });
    moneyNormalize(s);
    expect(s.stolmoney).toBe(950_000_000);
    expect(s.stolmoney_overflow).toBe(250);
  });
});

describe('moneyBankTransfer', () => {
  it('to_bank moves cash to karta', () => {
    const s = makeState({ money: 1000, karta: 0 });
    moneyBankTransfer(s, 400, 'to_bank');
    expect(s.money).toBe(600);
    expect(s.karta).toBe(400);
  });

  it('to_cash moves karta to cash', () => {
    const s = makeState({ money: 0, karta: 1000 });
    moneyBankTransfer(s, 300, 'to_cash');
    expect(s.money).toBe(300);
    expect(s.karta).toBe(700);
  });
});

describe('moneyDeskTransfer', () => {
  it('to_desk moves cash to desk', () => {
    const s = makeState({ money: 1000, stolmoney: 0 });
    moneyDeskTransfer(s, 250, 'to_desk');
    expect(s.money).toBe(750);
    expect(s.stolmoney).toBe(250);
  });

  it('all_to_desk moves everything', () => {
    const s = makeState({ money: 950000000, money_overflow: 5, stolmoney: 0, stolmoney_overflow: 0 });
    moneyDeskTransfer(s, 0, 'all_to_desk');
    expect(s.money).toBe(0);
    expect(s.money_overflow).toBe(0);
    expect(s.stolmoney).toBe(950000000);
    expect(s.stolmoney_overflow).toBe(5);
  });

  it('from_desk moves desk to cash', () => {
    const s = makeState({ money: 0, stolmoney: 1000 });
    moneyDeskTransfer(s, 400, 'from_desk');
    expect(s.money).toBe(400);
    expect(s.stolmoney).toBe(600);
  });

  it('all_from_desk moves everything back', () => {
    const s = makeState({ money: 0, money_overflow: 0, stolmoney: 950000000, stolmoney_overflow: 5 });
    moneyDeskTransfer(s, 0, 'all_from_desk');
    expect(s.money).toBe(950000000);
    expect(s.money_overflow).toBe(5);
    expect(s.stolmoney).toBe(0);
    expect(s.stolmoney_overflow).toBe(0);
  });
});

describe('moneyPay / moneyEarn (cash)', () => {
  it('pays cash when affordable', () => {
    const s = makeState({ money: 1000 });
    moneyPay(s, 300, 'cash');
    expect(s.money).toBe(700);
  });

  it('does not pay cash when unaffordable', () => {
    const s = makeState({ money: 100 });
    moneyPay(s, 300, 'cash');
    expect(s.money).toBe(100);
  });

  it('earns cash', () => {
    const s = makeState({ money: 100 });
    moneyEarn(s, 200, 'cash');
    expect(s.money).toBe(300);
  });

  it('does nothing for zero amount', () => {
    const s = makeState({ money: 100 });
    moneyPay(s, 0, 'cash');
    expect(s.money).toBe(100);
  });
});

describe('moneySet', () => {
  it('sets cash', () => {
    const s = makeState();
    moneySet(s, 500, 'cash');
    expect(s.money).toBe(500);
  });

  it('sets bank (adds debtLimit)', () => {
    const s = makeState({ bankDebtLimit: 100 });
    moneySet(s, 500, 'bank');
    expect(s.karta).toBe(600);
  });

  it('sets desk', () => {
    const s = makeState();
    moneySet(s, 500, 'desk');
    expect(s.stolmoney).toBe(500);
  });
});

describe('moneyPrice / moneyProfit', () => {
  it('returns amount unchanged when no multiplier opt', () => {
    const s = makeState();
    expect(moneyPrice(s, 100)).toBe(100);
    expect(moneyProfit(s, 100)).toBe(100);
  });

  it('applies negative multiplier when opt=1', () => {
    const s = makeState({ cfg_vars: { neg_mult_opt: 1, neg_mult: 2 } });
    expect(moneyPrice(s, 100)).toBe(200);
  });

  it('applies positive multiplier when opt=1', () => {
    const s = makeState({ cfg_vars: { pos_mult_opt: 1, pos_mult: 0.5 } });
    expect(moneyProfit(s, 100)).toBe(50);
  });
});

describe('moneyCanAfford / moneyCanAffordDebt', () => {
  it('cash afford', () => {
    const s = makeState({ money: 100 });
    expect(moneyCanAfford(s, 50, 'cash')).toBe(true);
    expect(moneyCanAfford(s, 200, 'cash')).toBe(false);
  });

  it('bank afford respects debtLimit', () => {
    const s = makeState({ karta: 100, bankDebtLimit: 50 });
    expect(moneyCanAfford(s, 40, 'bank')).toBe(true);
    expect(moneyCanAfford(s, 60, 'bank')).toBe(false);
  });

  it('bank afford with overdraft', () => {
    const s = makeState({ karta: 100, bankDebtLimit: 50, cfg_vars: { allow_overdraft: 1 } });
    expect(moneyCanAfford(s, 90, 'bank')).toBe(true);
  });

  it('desk afford', () => {
    const s = makeState({ money: 50, stolmoney: 50 });
    expect(moneyCanAfford(s, 80, 'desk')).toBe(true);
    expect(moneyCanAfford(s, 120, 'desk')).toBe(false);
  });

  it('debt afford all', () => {
    const s = makeState({ money: 50, stolmoney: 30, karta: 20, bankDebtLimit: 0 });
    expect(moneyCanAffordDebt(s, 90, 'all')).toBe(true);
    expect(moneyCanAffordDebt(s, 100, 'all')).toBe(true);
    expect(moneyCanAffordDebt(s, 101, 'all')).toBe(false);
  });
});

describe('moneyFormat', () => {
  it('formats with sign by default', () => {
    const s = makeState();
    expect(moneyFormat(s, 1000)).toBe('1,000 ₽');
  });

  it('hides sign', () => {
    const s = makeState();
    expect(moneyFormat(s, 1000, true)).toBe('1,000');
  });

  it('asText uses Roubles', () => {
    const s = makeState();
    expect(moneyFormat(s, 1000, false, true)).toBe('1,000 Roubles');
    expect(moneyFormat(s, 1, false, true)).toBe('1 Rouble');
  });

  it('color wraps in span', () => {
    const s = makeState();
    expect(moneyFormat(s, 100, false, false, true)).toContain('color:green');
    expect(moneyFormat(s, -100, false, false, true)).toContain('color:red');
  });
});

describe('moneyStringPrice / moneyStringProfit', () => {
  it('zero price is Free', () => {
    const s = makeState();
    expect(moneyStringPrice(s, 0)).toBe('Free');
  });

  it('nonzero price formats', () => {
    const s = makeState();
    expect(moneyStringPrice(s, 100)).toBe('100 ₽');
  });

  it('profit formats', () => {
    const s = makeState();
    expect(moneyStringProfit(s, 100)).toBe('100 ₽');
  });
});

describe('moneyDebtAdd / moneyDebtPay', () => {
  it('adds debt', () => {
    const s = makeState() as GameState & Record<string, unknown>;
    moneyDebtAdd(s, 'my_debt', 100);
    expect(s.my_debt).toBe(100);
    moneyDebtAdd(s, 'my_debt', 50);
    expect(s.my_debt).toBe(150);
  });

  it('pays debt from cash only', () => {
    const s = makeState({ money: 100 }) as GameState & Record<string, unknown>;
    s.my_debt = 100;
    const paid = moneyDebtPay(s, 'my_debt', 0, 'cash');
    expect(paid).toBe(100);
    expect(s.money).toBe(0);
    expect(s.my_debt).toBe(0);
  });

  it('pays debt from cash then desk', () => {
    const s = makeState({ money: 50, stolmoney: 50 }) as GameState & Record<string, unknown>;
    s.my_debt = 100;
    const paid = moneyDebtPay(s, 'my_debt', 0, 'desk');
    expect(paid).toBe(100);
    expect(s.money).toBe(0);
    expect(s.stolmoney).toBe(0);
    expect(s.my_debt).toBe(0);
  });

  it('pays debt from all sources', () => {
    const s = makeState({ money: 30, stolmoney: 30, karta: 40 }) as GameState & Record<string, unknown>;
    s.my_debt = 100;
    const paid = moneyDebtPay(s, 'my_debt', 0, 'all');
    expect(paid).toBe(100);
    expect(s.money).toBe(0);
    expect(s.stolmoney).toBe(0);
    expect(s.karta).toBe(0);
    expect(s.my_debt).toBe(0);
  });

  it('partial pay with amount cap', () => {
    const s = makeState({ money: 100 }) as GameState & Record<string, unknown>;
    s.my_debt = 100;
    const paid = moneyDebtPay(s, 'my_debt', 40, 'cash');
    expect(paid).toBe(40);
    expect(s.money).toBe(60);
    expect(s.my_debt).toBe(60);
  });

  it('returns 0 when no debt', () => {
    const s = makeState({ money: 100 }) as GameState & Record<string, unknown>;
    s.my_debt = 0;
    expect(moneyDebtPay(s, 'my_debt', 0, 'all')).toBe(0);
  });

  it('source none just reduces debt', () => {
    const s = makeState({ money: 100 }) as GameState & Record<string, unknown>;
    s.my_debt = 100;
    const paid = moneyDebtPay(s, 'my_debt', 0, 'none');
    expect(paid).toBe(100);
    expect(s.money).toBe(100);
    expect(s.my_debt).toBe(0);
  });
});
