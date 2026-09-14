import type { GameState } from '../../core/types';
import { goto, invoke, getLocation } from '../../core/location';
import { arousal } from '../../core/arousal';
import { arousalStatsEnd, stretch, setVirginityStats, autoLube, checkEvents } from '../../core/arousal_funcs';
import {
  willpowerCalc, willpowerDifficulty, willpowerPay, willpowerGetCostString,
  willpowerVoyeur, willpowerFlash, willpowerMast, willpowerHj, willpowerBj,
  willpowerCuni, willpowerSex, willpowerAnal, willpowerKiss, willpowerMisc, willpowerForeplay,
} from '../../core/willpower';
import {
  moodClamp, moodReset, moodInterpret, moodRaise, moodLower, moodDoormat,
  moodRaiseTrauma, moodLowerTrauma, moodRaiseDisposition, moodLowerDisposition,
  moodHold, moodStatusEffects, moodDecay, moodUpdate,
} from '../../core/mood';
import {
  moneyNormalize, moneyBankTransfer, moneyDeskTransfer, moneyPay, moneyEarn, moneySet,
  moneyPrice, moneyProfit, moneyCanAfford, moneyCanAffordDebt, moneyFormat,
  moneyStringPrice, moneyStringProfit, moneyDebtAdd, moneyDebtPay,
} from '../../core/money';
import {
  npcRelModify, npcRelModifyExact, npcRelSet, npcRelCheck,
  npcRelDefaultFamilyFriends, npcRelSocialGroupSetting, npcRelDefaultFriendship,
  npcRelDefaultNotSchool, npcRelDefault,
} from '../../core/npc_relationship';
import { cumCall } from '../../core/cum_call';
import { sweatAdd, sweatShower, sweatDeo, sweatRemoveDeo, sweatClamp } from '../../core/sweat';
import {
  drugsAlcohol, drugsCaffeine, drugsSmoke, drugsWeed, drugsAmphetamine, drugsCocaine,
  drugsHeroin, drugsPainkiller, drugsAphrodisiac, drugsMentats, drugsSteroids,
  drugsBreastCream, drugsHairCream, drugsButtInjection, drugsCikl, drugsHourlyEvents,
  drugsStat, drugsPainRelief,
} from '../../core/drugs';
import { expGain } from '../../core/exp_gain';
import { fameAdd, fameCalculate, fameCalculateGroups, fameDeg, fameChurchReduction } from '../../core/fame';
import { computeStats, applyCaps, statusMinima, fifteenMinuteLoop } from '../../core/stats';
import { applyTheme } from '../../core/theme';

const num = (v: unknown): number => (typeof v === 'number' ? v : parseFloat(String(v ?? '')) || 0);
const str = (v: unknown): string => String(v ?? '');
const sval = (v: unknown): string | number => (typeof v === 'number' ? v : str(v));

function warn(module: string, func: string, args: unknown[]): void {
  if (import.meta.env.DEV) console.warn(`[qspBridge] unmapped: ${module}.${func}`, args);
}

export function dynamicGoto(s: GameState, targetVar: string, argVar?: string): void {
  const t = String((s as any)[targetVar] ?? '');
  const a = argVar ? String((s as any)[argVar] ?? '') : '';
  goto(s, t, a);
}

export function hasLocation(name: string): boolean {
  return getLocation(name) != null;
}

export function qspCall(s: GameState, module: string, func: string, ...args: unknown[]): void {
  switch (module) {
    case 'arousal': {
      if (func === 'end') {
        arousalStatsEnd(s, str(args[1]));
        return;
      }
      arousal(s, { act: func, time: num(args[0]), themes: args.slice(1).map(str) });
      return;
    }
    case 'willpower': {
      switch (func) {
        case 'pay': willpowerPay(s, str(args[0]), str(args[1])); return;
        case 'calc': willpowerCalc(s, str(args[0])); return;
        case 'misc': case 'chore': willpowerMisc(s, str(args[0]), str(args[1])); return;
        case 'difficulty': willpowerDifficulty(s, str(args[0]), str(args[1])); return;
        case 'sex': willpowerSex(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'voyeur': willpowerVoyeur(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'flash': willpowerFlash(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'mast': willpowerMast(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'hj': willpowerHj(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'bj': willpowerBj(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'cuni': willpowerCuni(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'anal': willpowerAnal(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'kiss': willpowerKiss(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'foreplay': willpowerForeplay(s, str(args[0]), str(args[1]), str(args[2])); return;
        case 'exhib': willpowerDifficulty(s, 'exhib', str(args[0])); return;
      }
      warn(module, func, args);
      return;
    }
    case 'mood': {
      switch (func) {
        case 'raise': moodRaise(s, sval(args[0])); return;
        case 'lower': moodLower(s, sval(args[0])); return;
        case 'raise_disposition': moodRaiseDisposition(s, sval(args[0])); return;
        case 'lower_disposition': moodLowerDisposition(s, sval(args[0])); return;
        case 'raise_trauma': moodRaiseTrauma(s, num(args[0])); return;
        case 'lower_trauma': moodLowerTrauma(s, num(args[0])); return;
        case 'hold': moodHold(s, num(args[0])); return;
        case 'doormat': moodDoormat(s, args.map(str)); return;
        case 'interpret': moodInterpret(s, sval(args[0])); return;
        case 'clamp': moodClamp(s); return;
        case 'reset': moodReset(s); return;
        case 'update': moodUpdate(s); return;
        case 'decay': moodDecay(s); return;
        case 'status_effects': moodStatusEffects(s, str(args[0]), str(args[1])); return;
      }
      warn(module, func, args);
      return;
    }
    case 'money': {
      switch (func) {
        case 'pay': moneyPay(s, num(args[0]), str(args[1]) || 'both'); return;
        case 'earn': moneyEarn(s, num(args[0]), str(args[1]) || 'both'); return;
        case 'set': moneySet(s, num(args[0]), str(args[1]) || 'cash', str(args[2]) || 'earn'); return;
        case 'normalize': moneyNormalize(s); return;
        case 'bank_transfer': moneyBankTransfer(s, num(args[0]), str(args[1]) === 'to_cash' ? 'to_cash' : 'to_bank'); return;
        case 'desk_transfer': moneyDeskTransfer(s, num(args[0]), str(args[1])); return;
        case 'debt_add': moneyDebtAdd(s, str(args[0]), num(args[1])); return;
        case 'debt_pay': moneyDebtPay(s, str(args[0]), num(args[1]), str(args[2]) || 'all'); return;
      }
      warn(module, func, args);
      return;
    }
    case 'npc_relationship': {
      switch (func) {
        case 'modify': npcRelModify(s, str(args[0]), sval(args[1]), num(args[2]) || undefined, str(args[3]) || undefined); return;
        case 'modify_exact': npcRelModifyExact(s, str(args[0]), num(args[1])); return;
        case 'set': npcRelSet(s, str(args[0]), sval(args[1])); return;
        case 'check': npcRelCheck(s, num(args[0]), ...args.slice(1).map(str)); return;
        case 'default': npcRelDefault(s); return;
        case 'default_family_friends': npcRelDefaultFamilyFriends(s); return;
        case 'default_friendship': npcRelDefaultFriendship(s); return;
        case 'default_not_school': npcRelDefaultNotSchool(s); return;
        case 'social_group_setting': npcRelSocialGroupSetting(s, args.slice(0, -1).map(num), num(args[args.length - 1])); return;
      }
      warn(module, func, args);
      return;
    }
    case 'cum_call': {
      cumCall(s, {
        location: func,
        partnerName: str(args[0]) || undefined,
        known: args[1] !== undefined ? num(args[1]) : 0,
        contraception: args[2] !== undefined ? (typeof args[2] === 'number' ? args[2] : str(args[2])) : '',
        potency: args[3] !== undefined ? num(args[3]) : 0,
        volume: args[4] !== undefined ? num(args[4]) : 0,
      });
      return;
    }
    case 'sweat': {
      switch (func) {
        case 'add': sweatAdd(s, num(args[0])); return;
        case 'shower': sweatShower(s); return;
        case 'deo': sweatDeo(s); return;
        case 'remove_deo': sweatRemoveDeo(s); return;
        case 'clamp': sweatClamp(s); return;
      }
      warn(module, func, args);
      return;
    }
    case 'drugs': {
      switch (func) {
        case 'alcohol': drugsAlcohol(s, str(args[0]), num(args[1]) || 1); return;
        case 'caffeine': drugsCaffeine(s, num(args[0]) || 4, num(args[1]) || 1); return;
        case 'smoke': drugsSmoke(s, str(args[0]) || undefined); return;
        case 'weed': case 'joint': drugsWeed(s, str(args[0]) || undefined); return;
        case 'amphetamine': drugsAmphetamine(s, str(args[0]) || undefined); return;
        case 'cocaine': drugsCocaine(s, str(args[0]) || undefined); return;
        case 'heroin': drugsHeroin(s); return;
        case 'painkiller': drugsPainkiller(s, str(args[0]) || undefined); return;
        case 'aphrodisiac': drugsAphrodisiac(s, str(args[0]) || undefined); return;
        case 'mentats': drugsMentats(s, str(args[0]) || undefined); return;
        case 'steroids': drugsSteroids(s, str(args[0]) || undefined); return;
        case 'breast_cream': drugsBreastCream(s, str(args[0]) || undefined); return;
        case 'hair_cream': drugsHairCream(s, str(args[0]) || undefined); return;
        case 'butt_injection': drugsButtInjection(s, str(args[0]) || undefined); return;
        case 'cikle': case 'cikl': drugsCikl(s); return;
        case 'hourly_events': drugsHourlyEvents(s); return;
        case 'stat': drugsStat(s); return;
        case 'pain_relief': drugsPainRelief(s); return;
      }
      warn(module, func, args);
      return;
    }
    case 'exp_gain': {
      expGain(s, func, num(args[0]));
      return;
    }
    case 'fame': {
      switch (func) {
        case 'pav': case 'city': case 'pushkin': case 'village':
          fameAdd(s, func, str(args[0]), args[1] !== undefined ? sval(args[1]) : 0, str(args[2]) || undefined);
          return;
        case '': fameCalculateGroups(s); return;
        case 'calculate': fameCalculate(s, str(args[0])); return;
        case 'calculate_groups': fameCalculateGroups(s); return;
        case 'deg': fameDeg(s); return;
        case 'church_reduction': fameChurchReduction(s, str(args[0]), num(args[1])); return;
      }
      warn(module, func, args);
      return;
    }
    case 'stat': {
      switch (func) {
        case '': case 'compute': computeStats(s); return;
        case 'apply_caps': applyCaps(s); return;
        case 'status_minima': statusMinima(s); return;
        case '15_minute_loop': fifteenMinuteLoop(s); return;
        case 'compute': computeStats(s); return;
      }
      warn(module, func, args);
      return;
    }
    case 'core_library': {
      switch (func) {
        case 'setloc':
          s.loc = str(args[0]);
          s.locArg = str(args[1]);
          return;
      }
      warn(module, func, args);
      return;
    }
    case 'themes': {
      applyTheme(str(args[0]) || func);
      return;
    }
    case 'arousal_funcs': {
      switch (func) {
        case 'stretch': stretch(s, str(args[0]), num(args[1])); return;
        case 'set_virginity_stats': setVirginityStats(s, str(args[0]) || undefined); return;
        case 'auto_lube': autoLube(s, str(args[0])); return;
        case 'check_events': checkEvents(s, args.map(str)); return;
        case 'arousal_stats_end': arousalStatsEnd(s, str(args[0])); return;
      }
      warn(module, func, args);
      return;
    }
    case 'transport_functions': {
      const savedLoc = s.loc, savedArg = s.locArg, savedArg2 = s.locArg2, savedArg3 = s.locArg3;
      const savedLocArgs = (s as any).locArgs;
      s.loc = 'transport_functions';
      s.locArg = func;
      (s as any).locArgs = ['', ...args];
      invoke(s, 'transport_functions', func);
      s.loc = savedLoc; s.locArg = savedArg; s.locArg2 = savedArg2; s.locArg3 = savedArg3;
      (s as any).locArgs = savedLocArgs;
      return;
    }
    default:
      warn(module, func, args);
  }
}

export function qspFunc(s: GameState, module: string, func: string, ...args: unknown[]): any {
  switch (module) {
    case 'money': {
      switch (func) {
        case 'can_afford': return moneyCanAfford(s, num(args[0]), str(args[1]) || 'both');
        case 'can_afford_debt': return moneyCanAffordDebt(s, num(args[0]), str(args[1]) || 'both');
        case 'string_price': return moneyStringPrice(s, num(args[0]));
        case 'string_profit': return moneyStringProfit(s, num(args[0]));
        case 'price': return moneyPrice(s, num(args[0]));
        case 'profit': return moneyProfit(s, num(args[0]));
        case 'format': return moneyFormat(s, num(args[0]));
      }
      warn(module, func, args);
      return 0;
    }
    case 'willpower': {
      switch (func) {
        case 'get_willcost_string': case 'get_cost_string':
          return willpowerGetCostString(s, num(args[0]), num(args[1]));
      }
      warn(module, func, args);
      return 0;
    }
    case 'mood': {
      if (func === 'interpret') return moodInterpret(s, sval(args[0]));
      warn(module, func, args);
      return 0;
    }
    case 'npc_relationship': {
      if (func === 'check') return npcRelCheck(s, num(args[0]), ...args.slice(1).map(str));
      warn(module, func, args);
      return 0;
    }
    case 'drugs': {
      if (func === 'pain_relief') return drugsPainRelief(s);
      warn(module, func, args);
      return 0;
    }
    case 'wrap': {
      return str(args[0]);
    }
    case 'transport_functions': {
      const savedLoc = s.loc, savedArg = s.locArg, savedArg2 = s.locArg2, savedArg3 = s.locArg3;
      const savedLocArgs = (s as any).locArgs;
      s.loc = 'transport_functions';
      s.locArg = func;
      (s as any).locArgs = ['', ...args];
      invoke(s, 'transport_functions', func);
      s.loc = savedLoc; s.locArg = savedArg; s.locArg2 = savedArg2; s.locArg3 = savedArg3;
      (s as any).locArgs = savedLocArgs;
      return (s as any).result ?? 0;
    }
    default:
      warn(module, func, args);
      return 0;
  }
}
