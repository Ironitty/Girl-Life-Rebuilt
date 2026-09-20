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

export function qspGoto(s: GameState, target: string, arg: string, arg2?: string, arg3?: string): void {
  goto(s, target, arg, arg2, arg3);
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
          (s as any).locArgs = [s.locArg, '', ''];
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
    case 'shop_utils': {
      if (func === 'cleanup') {
        delete (s as any).outfitfilter;
        delete (s as any).shop_display;
        delete (s as any).shop_display_exceptions;
        delete (s as any).shop_display_types;
        delete (s as any).shop_display_items;
        delete (s as any).shop_utils_view;
        delete (s as any).shop_display_sorted;
        delete (s as any).shop_display_sorted_titles;
        delete (s as any).outfitfilter_check;
        return;
      }
      warn(module, func, args);
      return;
    }
    case 'themes': {
      if (func === 'clothing') {
        const hex = (s as any).theme_hex ?? {};
        const cur = (s as any).temp_bcolor ?? '';
        (s as any).temp_bcolor = cur === hex['table_bg'] ? hex['table_bg_alt'] : hex['table_bg'];
        return;
      }
      if (func === 'alt_color') {
        const hex = (s as any).theme_hex ?? {};
        const cur = str(args[0]);
        (s as any).result = cur === hex['table_bg'] ? hex['table_bg_alt'] : hex['table_bg'];
        return;
      }
      applyTheme(str(args[0]) || func);
      return;
    }
    case 'clothing': {
      if (func === 'reset_CloVars') {
        const st = s as any;
        st.CloQuality = 0; st.CloThinness = 0; st.CloTopCut = 0; st.CloBra = 0;
        st.CloPanties = 0; st.CloPantsShortness = 0; st.CloSkirtShortness = 0;
        st.CloDress = 0; st.CloOnePiece = 0; st.CloInhibit = 0;
        st.CloCoverFront = 0; st.CloCoverBack = 0; st.CloCoverTop = 0;
        st.CloStyle = 0; st.CloStyle2 = 0; st.CloStyle3 = 0;
        st.CloBimbo = 0; st.CloGoth = 0; st.CloPunk = 0; st.CloPrep = 0;
        st.CloPrude = 0; st.CloProstitute = 0; st.CloMaid = 0; st.CloServer = 0;
        st.CloStrip = 0; st.CloSchool = 0; st.CloOffice = 0; st.CloSport = 0;
        st.CloSwim = 0; st.CloPrice = 0; st.CloDirt = 0; st.CloStrength = 0;
        st.CloMaxStrength = 0;
        return;
      }
      warn(module, func, args);
      return;
    }
    case 'bras': {
      if (func === 'reset_BraVars') {
        const st = s as any;
        st.BraMaterial = 0; st.BraType = 0; st.BraFun = 0; st.BraQuality = 0;
        st.BraThinness = 0; st.BraCover = 4; st.BraSport = 0; st.BraPrice = 0;
        st.BraDirt = 0; st.BraStrength = 0; st.BraMaxStrength = 0;
        st.underwear = { ...st.underwear, pair: 0 };
        return;
      }
      warn(module, func, args);
      return;
    }
    case 'panties': {
      if (func === 'reset_PanVars') {
        const st = s as any;
        st.PanMaterial = 0; st.PanType = 0; st.PanFun = 0; st.PanQuality = 0;
        st.PanThinness = 0; st.PanCoverFront = 4; st.PanCoverBack = 4;
        st.PanSport = 0; st.PanPrice = 0; st.PanDirt = 0; st.PanStrength = 0;
        st.PanMaxStrength = 0;
        st.underwear = { ...st.underwear, pair: 0 };
        return;
      }
      warn(module, func, args);
      return;
    }
    case 'shoes': {
      if (func === 'reset_ShoVars') {
        const st = s as any;
        st.ShoQuality = 0; st.ShoHeels = 0; st.ShoCut = 0; st.ShoStyle = 0;
        st.ShoStyle2 = 0; st.ShoStrip = 0; st.ShoSport = 0; st.ShoBimbo = 0;
        st.ShoGoth = 0; st.ShoPunk = 0; st.ShoPrice = 0; st.ShoStrength = 0;
        st.ShoMaxStrength = 0; st.ShoSkill = 0;
        st.ShoPain = { severe: 0, medium: 0, mild: 0 };
        return;
      }
      warn(module, func, args);
      return;
    }
    case 'coats': {
      if (func === 'reset_CoatVars') {
        const st = s as any;
        st.CoatWarm = 0; st.CoatQuality = 0; st.CoatPrice = 0;
        st.CoatStrength = 0; st.CoatMaxStrength = 0; st.coat_description = '';
        return;
      }
      warn(module, func, args);
      return;
    }
    case 'purses': {
      if (func === 'reset_PurseVars') {
        const st = s as any;
        st.PurseQuality = 0; st.PursePrice = 0; st.PurseStrength = 0;
        return;
      }
      warn(module, func, args);
      return;
    }
    case 'clothing_attributes': {
      const type = str(args[0]), idx = num(args[1]);
      qspCall(s, 'clothing', 'reset_CloVars');
      const attrLoc = `$attributes_${type}`;
      if (hasLocation(attrLoc)) {
        const savedLoc = s.loc, savedArg = s.locArg, savedArg2 = s.locArg2, savedArg3 = s.locArg3;
        const savedLocArgs = (s as any).locArgs;
        s.loc = attrLoc; s.locArg = String(idx);
        (s as any).locArgs = ['', String(idx)];
        invoke(s, attrLoc, 'enter');
        s.loc = savedLoc; s.locArg = savedArg; s.locArg2 = savedArg2; s.locArg3 = savedArg3;
        (s as any).locArgs = savedLocArgs;
      }
      const st = s as any;
      if (st.CloQuality === 0) return;
      if (st.CloTopCut === 2 && num(s.tits) >= 6) st.CloTopCut = 3;
      else if (st.CloTopCut === 3 && num(s.tits) >= 4) st.CloTopCut = 4;
      if (!type.includes('swimsuit') && !type.includes('bikinis')) {
        if (st.CloCoverFront >= 4) st.CloInhibit = 50;
        else if (st.CloCoverFront === 3 || st.CloCoverTop >= 4 || st.CloBra === 2) st.CloInhibit = 45;
        else if (st.CloCoverFront === 2 || st.CloCoverTop === 3) st.CloInhibit = 40;
        else if (st.CloSkirtShortness >= 6 || st.CloThinness >= 6 || st.CloCoverFront === 1 || st.CloCoverTop === 2) st.CloInhibit = 35;
        else if (st.CloSkirtShortness === 5 || st.CloPantsShortness >= 6 || st.CloBra === 1 || st.CloCoverTop === 1) st.CloInhibit = 30;
        else if (st.CloPantsShortness === 5 || st.CloThinness === 5 || st.CloTopCut >= 4 || st.CloPanties === 1) st.CloInhibit = 25;
        else if (st.CloSkirtShortness === 4) st.CloInhibit = 20;
        else if (st.CloPantsShortness === 4 || st.CloTopCut === 3) st.CloInhibit = 15;
        else if (st.CloSkirtShortness === 3 || st.CloThinness === 4) st.CloInhibit = 10;
        else if (st.CloSkirtShortness === 2 || st.CloPantsShortness === 3 || st.CloTopCut === 2 || st.CloThinness === 3) st.CloInhibit = 5;
        else st.CloInhibit = 0;
      }
      st.CloMaxStrength = st.CloStrength;
      const owned = (st[type]?.[idx] ?? 0) > 0;
      if (owned) {
        st.CloDirt = st[type + '_dirt']?.[idx] ?? 0;
        st.CloStrength = st[type + '_h']?.[idx] ?? 0;
      }
      return;
    }
    case 'underwear_attributes': {
      const type = str(args[0]), idx = num(args[1]);
      qspCall(s, 'bras', 'reset_BraVars');
      qspCall(s, 'panties', 'reset_PanVars');
      const st = s as any;
      st.underwear = { ...st.underwear, pair: 0 };
      const attrLoc = `$attributes_${type}`;
      if (hasLocation(attrLoc)) {
        const savedLoc = s.loc, savedArg = s.locArg, savedArg2 = s.locArg2, savedArg3 = s.locArg3;
        const savedLocArgs = (s as any).locArgs;
        s.loc = attrLoc; s.locArg = String(idx);
        (s as any).locArgs = ['', String(idx)];
        invoke(s, attrLoc, 'enter');
        s.loc = savedLoc; s.locArg = savedArg; s.locArg2 = savedArg2; s.locArg3 = savedArg3;
        (s as any).locArgs = savedLocArgs;
      }
      if (st.BraQuality === 0 && st.PanQuality === 0) return;
      st.PanMaxStrength = st.PanStrength;
      st.BraMaxStrength = st.BraStrength;
      const owned = (st[type]?.[idx] ?? 0) === 1;
      if (owned) {
        st.PanDirt = st[type + '_dirt']?.[idx] ?? 0;
        st.BraDirt = st.PanDirt;
        st.PanStrength = st[type + '_h']?.[idx] ?? 0;
        st.BraStrength = st.PanStrength;
      }
      return;
    }
    case 'shoe_attributes': {
      const type = str(args[0]), idx = num(args[1]);
      qspCall(s, 'shoes', 'reset_ShoVars');
      const st = s as any;
      const attrLoc = `$attributes_${type}_shoes`;
      if (hasLocation(attrLoc)) {
        const savedLoc = s.loc, savedArg = s.locArg, savedArg2 = s.locArg2, savedArg3 = s.locArg3;
        const savedLocArgs = (s as any).locArgs;
        s.loc = attrLoc; s.locArg = String(idx);
        (s as any).locArgs = ['', String(idx)];
        invoke(s, attrLoc, 'enter');
        s.loc = savedLoc; s.locArg = savedArg; s.locArg2 = savedArg2; s.locArg3 = savedArg3;
        (s as any).locArgs = savedLocArgs;
      }
      if (st.ShoQuality === 0) return;
      const heels = st.ShoHeels;
      if (heels < 2) { st.ShoSkill = 0; st.ShoPain = { severe: 0, medium: 0, mild: 0 }; }
      else if (heels === 2) { st.ShoSkill = 0; st.ShoPain = { severe: 0, medium: 25, mild: 40 }; }
      else if (heels === 3) { st.ShoSkill = 15; st.ShoPain = { severe: 0, medium: 35, mild: 50 }; }
      else if (heels === 4) { st.ShoSkill = 30; st.ShoPain = { severe: 0, medium: 45, mild: 60 }; }
      else if (heels === 5) { st.ShoSkill = 45; st.ShoPain = { severe: 55, medium: 65, mild: 75 }; }
      else { st.ShoSkill = 60; st.ShoPain = { severe: 70, medium: 80, mild: 90 }; }
      st.ShoMaxStrength = st.ShoStrength;
      const owned = (st[type + '_shoe']?.[idx] ?? 0) > 0;
      if (owned) st.ShoStrength = st[type + '_shoe_h']?.[idx] ?? 0;
      return;
    }
    case 'coat_attributes': {
      const type = str(args[0]), idx = num(args[1]);
      qspCall(s, 'coats', 'reset_CoatVars');
      const st = s as any;
      const attrLoc = `$attributes_${type}_coats`;
      if (hasLocation(attrLoc)) {
        const savedLoc = s.loc, savedArg = s.locArg, savedArg2 = s.locArg2, savedArg3 = s.locArg3;
        const savedLocArgs = (s as any).locArgs;
        s.loc = attrLoc; s.locArg = String(idx);
        (s as any).locArgs = ['', String(idx)];
        invoke(s, attrLoc, 'enter');
        s.loc = savedLoc; s.locArg = savedArg; s.locArg2 = savedArg2; s.locArg3 = savedArg3;
        (s as any).locArgs = savedLocArgs;
      }
      if (st.CoatQuality === 0) return;
      st.CoatMaxStrength = st.CoatStrength;
      const owned = (st[type + '_coats']?.[idx] ?? 0) > 0;
      if (owned) st.CoatStrength = st[type + '_coats_h']?.[idx] ?? 0;
      return;
    }
    case 'purse_attributes': {
      const type = str(args[0]), idx = num(args[1]);
      qspCall(s, 'purses', 'reset_PurseVars');
      const st = s as any;
      const attrLoc = `$attributes_${type}_purses`;
      if (hasLocation(attrLoc)) {
        const savedLoc = s.loc, savedArg = s.locArg, savedArg2 = s.locArg2, savedArg3 = s.locArg3;
        const savedLocArgs = (s as any).locArgs;
        s.loc = attrLoc; s.locArg = String(idx);
        (s as any).locArgs = ['', String(idx)];
        invoke(s, attrLoc, 'enter');
        s.loc = savedLoc; s.locArg = savedArg; s.locArg2 = savedArg2; s.locArg3 = savedArg3;
        (s as any).locArgs = savedLocArgs;
      }
      if (st.PurseQuality === 0) return;
      return;
    }
    default:
      warn(module, func, args);
  }
}

const CLO_VAR: Record<string, { owned: (t: string) => string; storage?: (t: string) => string; health?: (t: string) => string; body?: (t: string) => string; wardrobeVal: number }> = {
  clothing: { owned: (t) => t, storage: (t) => t + '_s', health: (t) => t + '_h', body: (t) => t + '_b', wardrobeVal: 1 },
  bras: { owned: (t) => t + '_bras', storage: (t) => t + '_brasS', health: (t) => t + '_bras_h', wardrobeVal: 0 },
  panties: { owned: (t) => t + '_panties', storage: (t) => t + '_pantiesS', health: (t) => t + '_panties_h', wardrobeVal: 0 },
  shoes: { owned: (t) => t + '_shoe', storage: (t) => t + '_shoeS', health: (t) => t + '_shoe_h', wardrobeVal: 0 },
  purses: { owned: (t) => t + '_purses', wardrobeVal: 0 },
  coats: { owned: (t) => t + '_coats', storage: (t) => t + '_coatsS', health: (t) => t + '_coats_h', wardrobeVal: 0 },
  underwear_bodysuits: { owned: (t) => t + '_bodysuits', storage: (t) => t + '_bodysuitsS', health: (t) => t + '_bodysuits_h', wardrobeVal: 0 },
};

function notWearReason(s: GameState, category: string, type: string, idx: number): string {
  const st = s as any;
  const v = CLO_VAR[category];
  if (!v) return '';
  const isImmutable = (cat: string, t: string, i: number): boolean => {
    if (cat === 'clothing') {
      if (t === 'gm_outfits' && i === 3) return true;
      const stLoc = String(st.start_type?.['loc'] ?? '');
      const gsVars = st.gschoolVars ?? {};
      if (stLoc === 'sg' && num(gsVars['school_diploma']) === 0 && num(gsVars['block']) === 0 && t === 'gm_school' && i === 6) return true;
      if (num(st.misc_outfits?.[1]) > 0 && t === 'misc_outfits' && i === 1) return true;
    }
    return false;
  };
  if (isImmutable(category, type, idx)) return '';
  const ownedVar = v.owned(type);
  if (num(st[ownedVar]?.[idx] ?? 0) <= 0) return 'not_owned';
  const losTyp = st.CloLosTyp ?? [];
  const losNum = st.CloLosNum ?? [];
  for (let i = 0; i < losTyp.length; i++) {
    if (losTyp[i] === type && num(losNum[i]) === idx) return 'is_lost';
  }
  if (v.storage) {
    const stVar = v.storage(type);
    if (num(st[stVar]?.[idx] ?? -1) !== v.wardrobeVal) return 'not_in_wardrobe';
  }
  if (v.health) {
    const hVar = v.health(type);
    if (num(st[hVar]?.[idx] ?? 1) <= 0) return 'low_strength';
  }
  if (num(st.pcs_inhib ?? 0) < num(st.CloInhibit ?? 0)) return 'low_inhib';
  if (category === 'clothing') {
    if (!(num(st.CloStyle2 ?? 0) === 6 || num(st.CloStyle ?? 0) === 5 || type === 'nude')) {
      const bVar = v.body!(type);
      const b = num(st[bVar]?.[idx] ?? 0);
      const hips = num(st.pcs_hips ?? 0);
      if (b > 0 && b < hips - 8) return 'too_small';
      if (b > 0 && b > hips + 8) return 'too_large';
    }
  }
  if (num(st.hypnoClothes ?? 0) > 0) {
    if (type !== 'salacious_outfits' && type !== 'salacious_dress') {
      if (num(st.CloThinness ?? 0) < 6) {
        if (!(num(st.CloStyle2 ?? 0) === 6 || num(st.CloSport ?? 0) === 1) || num(st.CloThinness ?? 0) < 5) {
          if (!((type === 'eroto_outfits' || type === 'eroto_dress' || type === 'eroto_strip') && num(st.CloThinness ?? 0) >= 3)) {
            if (!(num(st.CloStyle2 ?? 0) === 4 && num(st.CloThinness ?? 0) >= 4)) return 'hypno';
          }
        }
      }
    }
  }
  return '';
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
      if (func !== 'neg') { warn(module, func, args); return str(args[1] ?? args[0]); }
      const colorKey = str(args[0]);
      const text = str(args[1]);
      const spaceIdx = colorKey.indexOf(' ');
      const wkey = spaceIdx > 0 ? colorKey.substring(0, spaceIdx) : colorKey;
      const wmods = ' ' + colorKey + ' ';
      const hex = (s as any).theme_hex ?? {};
      let color: string;
      if (wkey === 'none' || wkey === '') {
        const fcolor = (s as any).theme?.['fcolor'] ?? '000000';
        color = qspFunc(s, 'shortgs', 'rgb_to_hex', fcolor);
      } else if (wkey === 'preppy') {
        color = hex['accent'] ?? '000000';
      } else if (wkey === 'prude') {
        color = hex['neutral'] ?? '000000';
      } else {
        color = hex[wkey] ?? '000000';
      }
      let result = `<font color="${color}">${text}</font>`;
      if (wmods.includes(' b ')) result = `<b>${result}</b>`;
      if (wmods.includes(' i ')) result = `<i>${result}</i>`;
      if (wmods.includes(' u ')) result = `<u>${result}</u>`;
      if (wmods.includes(' s ')) result = `<s>${result}</s>`;
      if (wmods.includes(' center ')) result = `<center>${result}</center>`;
      for (const h of ['h1','h2','h3','h4','h5','h6']) {
        if (wmods.includes(` ${h} `)) result = `<${h}>${result}</${h}>`;
      }
      return result;
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
    case '$shoe_image': {
      const shop = str(args[0]), idx = str(args[1]);
      const valid = ['moncheri','cats','bomba','dolls','eroto','scandalicious','gm','danilovich'];
      return valid.includes(shop) ? `images/pc/items/${shop}/shoes/${idx}.jpg` : '';
    }
    case '$panty_image': {
      const shop = str(args[0]), idx = str(args[1]);
      const valid = ['gm','lusso','salacious','fashionista','cats','eroto','danilovich'];
      return valid.includes(shop) ? `images/pc/items/${shop}/panties/${idx}.jpg` : '';
    }
    case '$purse_image': {
      const shop = str(args[0]), idx = str(args[1]);
      const valid = ['dolls','fashionista','coco','flamingos','danilovich','gm','cats','nerdvana','moncheri','bomba'];
      return valid.includes(shop) ? `images/pc/items/${shop}/purses/${idx}.jpg` : '';
    }
    case '$bra_image': {
      const shop = str(args[0]), idx = str(args[1]);
      const valid = ['gm','lusso','salacious','fashionista','cats','eroto','danilovich'];
      return valid.includes(shop) ? `images/pc/items/${shop}/bras/${idx}.jpg` : '';
    }
    case '$coat_image': {
      const shop = str(args[0]), idx = str(args[1]);
      const valid = ['gm','lusso','salacious','fashionista','cats','eroto','danilovich'];
      return valid.includes(shop) ? `images/pc/items/${shop}/coats/${idx}.jpg` : '';
    }
    case '$bodysuit_image': {
      const shop = str(args[0]), idx = str(args[1]);
      const valid = ['gm','lusso','salacious','fashionista','cats','eroto','danilovich'];
      return valid.includes(shop) ? `images/pc/items/${shop}/bodysuits/${idx}.jpg` : '';
    }
    case '$pcs_outfit_image': {
      const group = str(args[0]), idx = str(args[1]);
      let sub = '';
      if (group === 'misc_outfits') sub = 'misc';
      else if (group === 'allure_swimsuit') sub = 'allure/one';
      else if (group === 'allure_bikinis') sub = 'allure/two';
      else if (group === 'scandalicious_swimsuit') sub = 'scandalicious/swim/one';
      else if (group === 'scandalicious_bikinis') sub = 'scandalicious/swim/two';
      else if (group === 'danilovich_swimsuit') sub = 'danilovich/swimwear';
      else if (group === 'market_outfits') sub = 'market/clothes';
      else if (group === 'materinstvo_dress') sub = 'mommy';
      else if (group === 'nerdvana_bikinis') sub = 'nerdvana/swim/two';
      else if (group === 'nerdvana_swimsuit') sub = 'nerdvana/swim/one';
      else {
        const us = group.indexOf('_');
        if (us > 0) sub = `${group.substring(0, us)}/${group.substring(us + 1)}`;
      }
      return sub ? `images/pc/items/${sub}/${idx}.jpg` : '';
    }
    case '$mid': {
      const strVal = str(args[0]);
      const start = num(args[1]);
      const len = args.length > 2 ? num(args[2]) : undefined;
      if (len !== undefined) return strVal.substring(start - 1, start - 1 + len);
      return strVal.substring(start - 1);
    }
    case '$body_image': {
      const part = str(args[0]);
      if (part === 'body') {
        const bodyVars = (s as any).bodyVars ?? {};
        return str(bodyVars['img']);
      }
      if (part === 'tits') {
        return `images/pc/body/tits/t${num(s.tits)}.jpg`;
      }
      if (part === 'pubes' || part === 'pussy') {
        const pubes = num(args[1]) || num(s.pcs_pubes);
        const pubecol = num(args[2]) || num((s as any).pcs_pubecol?.[2] ?? 0);
        const pubestyle = num(args[3]) || num((s as any).pubestyle);
        const colorMap: Record<number, string> = { 0: 'black', 1: 'brunette', 2: 'ginger', 3: 'blonde', 4: 'red', 5: 'blue', 6: 'green', 7: 'pink', 8: 'purple' };
        const color = colorMap[pubecol] ?? 'black';
        if (pubes !== 0) {
          const size = pubes <= 3 ? 'pussy' : pubes <= 6 ? 'light' : pubes <= 9 ? 'medium' : 'heavy';
          return `images/pc/body/pussy/hair/${size}/${color}/${pubestyle}.jpg`;
        }
        return `images/pc/body/pussy/shave/${color}/${pubestyle}.jpg`;
      }
      return '';
    }
    case '$clothing_image': {
      const group = str(args[0]), idx = str(args[1]);
      const map: Record<string, string> = {
        gm_outfits: 'gm/outfits', gm_dress: 'gm/dress', misc_outfits: 'misc',
        cats_dress: 'cats/dress', cats_outfits: 'cats/outfits',
        flamingos_outfits: 'flamingos/outfits', flamingos_dress: 'flamingos/dress',
        coco_outfits: 'coco/outfits', coco_dress: 'coco/dress',
        fashionista_dress: 'fashionista/dress', fashionista_outfits: 'fashionista/outfits',
        moncheri_gown: 'moncheri/gown', moncheri_dress: 'moncheri/dress',
        gm_office: 'gm/office', gm_school: 'gm/school',
        danilovich_outfits: 'danilovich/outfits',
        eroto_dress: 'eroto/dress', eroto_outfits: 'eroto/outfits', eroto_strip: 'eroto/strip',
        salacious_outfits: 'salacious/outfits', salacious_dress: 'salacious/dress',
        gm_maid: 'gm/maid', gm_server: 'gm/server',
        allure_swimsuit: 'allure/one', allure_bikinis: 'allure/two',
        fancy_burlesque: 'fancy/burlesque',
        dolls_dress: 'dolls/dress', dolls_outfits: 'dolls/outfits',
        bomba_dress: 'bomba/dress', bomba_outfits: 'bomba/outfits',
        scandalicious_dress: 'scandalicious/dress', scandalicious_outfits: 'scandalicious/outfits',
        scandalicious_swimsuit: 'scandalicious/swim/one', scandalicious_bikinis: 'scandalicious/swim/two',
        danilovich_swimsuit: 'danilovich/swimwear',
        market_outfits: 'market/clothes', materinstvo_dress: 'mommy',
        nerdvana_cosplay: 'nerdvana/cosplay', nerdvana_outfits: 'nerdvana/outfits',
        nerdvana_bikinis: 'nerdvana/swim/two', nerdvana_swimsuit: 'nerdvana/swim/one',
      };
      const sub = map[group];
      return sub ? `images/pc/items/${sub}/${idx}.jpg` : '';
    }
    case '$face_image': {
      const faceStyle = (s as any).face_style ?? {};
      const type = num(faceStyle['type']);
      if (type === 1) {
        return str(faceStyle['avatar_path']) || 'images/avatar.jpg';
      }
      if (type === 2) {
        let r = 'images/pc/body/head/';
        const glass = num(s.glass);
        r += glass >= 2 ? 'stylish/' : glass === 1 ? 'stylish/' : 'noglass/';
        const eyecol = num(s.pcs_eyecol);
        r += [0,1,2,3].includes(eyecol) ? (eyecol === 2 ? 'green/' : 'blue/') : 'blue/';
        const haircol = num(s.pcs_haircol);
        r += haircol === 0 ? 'black/' : haircol === 2 ? 'red/' : haircol === 3 ? 'blonde/' : 'brunette/';
        const hairlng = num(s.pcs_hairlng);
        r += hairlng > 260 ? 'long/' : hairlng > 80 ? 'medium/' : hairlng > 30 ? 'short/' : 'very_short/';
        const bsh = num(s.pcs_hairbsh);
        if (bsh <= 0) r += 'messy/';
        else if (hairlng > 80) {
          if (num(s.hbraids) > 0) r += 'braids/';
          else if (num(s.hpigtail) > 0) r += 'pigtails/';
          else if (num(s.curly) > 0) r += 'curly/';
          else if (num(s.hbangs) > 0) r += 'bangs/';
          else if (num(s.hpingripw) > 0) r += 'buns/';
          else if (num(s.hscrunchw) > 0) r += 'scrunch/';
          else r += 'normal/';
        } else if (hairlng > 30) {
          if (num(s.hbangs) > 0) r += 'bangs/';
          else if (num(s.hpingripw) > 0) r += 'buns/';
          else if (num(s.hscrunchw) > 0) r += 'scrunch/';
          else r += 'normal/';
        } else {
          r += 'normal/';
        }
        r += 'face.jpg';
        return r;
      }
      return 'images/avatar.jpg';
    }
    case 'fight': {
      if (func === 'AvailableTargets') {
        const type = str(args[0]);
        const health = (s as any)[type + '_health'];
        if (typeof health === 'object' && health !== null) {
          let count = 0;
          for (const k of Object.keys(health)) {
            if (Number(health[k]) > 0) count++;
          }
          return count;
        }
        if (typeof health === 'number' && health > 0) return 1;
        return 0;
      }
      warn(module, func, args);
      return 0;
    }
    case 'shortgs': {
      if (func === 'rgb_to_hex') {
        const n = num(args[0]);
        let r: number, g: number, b: number;
        if (n >= 0) {
          r = n % 256;
          g = Math.floor(n / 256) % 256;
          b = Math.floor(n / 65536) % 256;
        } else {
          r = ((n % 256) + 256) % 256;
          g = (Math.floor(((n % 65536) + 65536) / 256)) % 256;
          b = (Math.floor((((n % 16777216) + 16777216) / 65536))) % 256;
        }
        const toHex = (v: number) => v.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      }
      warn(module, func, args);
      return 0;
    }
    case 'clothing': case 'bras': case 'panties': case 'shoes':
    case 'purses': case 'coats': case 'underwear_bodysuits': {
      if (func === 'not_wear_reason') {
        return notWearReason(s, module, str(args[0]), num(args[1]));
      }
      warn(module, func, args);
      return 0;
    }
    case 'wardrobe': {
      if (func === 'default_clothing_line') {
        const st = s as any;
        qspCall(s, 'themes', 'clothing');
        const entry = num(st.default_entry ?? 0);
        const bcolor = str(st.temp_bcolor ?? '');
        let result = `<TR bgcolor='${bcolor}'>`;
        result += `<TD><b>${str(st.def_clothing_name?.[entry] ?? '')}</b></TD>`;
        const cloNum = num(st.defclothingnumber?.[entry] ?? 0);
        if (cloNum === 0) {
          result += `<TD><img width="100" src="images/pc/items/blank.jpg"></TD>`;
        } else {
          const cloType = str(st.defclothingtype?.[entry] ?? '');
          qspCall(s, 'clothing_attributes', cloType, cloNum);
          const img = qspFunc(s, '$clothing_image', cloType, cloNum);
          result += `<TD><img width="100" src="${img}"></TD>`;
        }
        const underw = num(st.defunderwear?.[entry] ?? 0);
        if (underw === 2) {
          const bsNum = num(st.defbodysuitnumber?.[entry] ?? 0);
          if (bsNum === 0) {
            result += `<TD><img width="100" src="images/pc/items/blank.jpg"></TD>`;
          } else {
            const bsType = str(st.defbodysuittype?.[entry] ?? '');
            qspCall(s, 'underwear_attributes', bsType + '_bodysuits', bsNum);
            const img = qspFunc(s, '$pcs_outfit_image', bsType + '_bodysuits', bsNum);
            result += `<TD><img width="100" src="${img}"></TD>`;
          }
          result += `<TD><img width="100" src="images/pc/items/blank.jpg"></TD>`;
        } else {
          const braNum = num(st.defbranumber?.[entry] ?? 0);
          if (braNum === 0) {
            result += `<TD><img width="100" src="images/pc/items/blank.jpg"></TD>`;
          } else {
            const braType = str(st.defbratype?.[entry] ?? '');
            qspCall(s, 'underwear_attributes', braType + '_bras', braNum);
            const img = qspFunc(s, '$bra_image', braType, braNum);
            result += `<TD><img width="100" src="${img}"></TD>`;
          }
          const panNum = num(st.defpantynumber?.[entry] ?? 0);
          if (panNum === 0) {
            result += `<TD><img width="100" src="images/pc/items/blank.jpg"></TD>`;
          } else {
            const panType = str(st.defpantytype?.[entry] ?? '');
            qspCall(s, 'underwear_attributes', panType + '_panties', panNum);
            const img = qspFunc(s, '$panty_image', panType, panNum);
            result += `<TD><img width="100" src="${img}"></TD>`;
          }
        }
        const shoeNum = num(st.defshoenumber?.[entry] ?? 0);
        if (shoeNum === 0) {
          result += `<TD><img width="100" src="images/pc/items/blank.jpg"></TD>`;
        } else {
          const shoeType = str(st.defshoetype?.[entry] ?? '');
          qspCall(s, 'shoe_attributes', shoeType, shoeNum);
          const img = qspFunc(s, '$shoe_image', shoeType, shoeNum);
          result += `<TD><img width="100" src="${img}"></TD>`;
        }
        const coatNum = num(st.defcoatnumber?.[entry] ?? 0);
        if (coatNum === 0) {
          result += `<TD><img width="100" src="images/pc/items/blank.jpg"></TD>`;
        } else {
          const coatType = str(st.defcoattype?.[entry] ?? '');
          qspCall(s, 'coat_attributes', coatType, coatNum);
          const img = qspFunc(s, '$coat_image', coatType, coatNum);
          result += `<TD><img width="100" src="${img}"></TD>`;
        }
        const purseNum = num(st.defpursenumber?.[entry] ?? 0);
        if (purseNum === 0) {
          result += `<TD><img width="100" src="images/pc/items/blank.jpg"></TD>`;
        } else {
          const purseType = str(st.defpursetype?.[entry] ?? '');
          qspCall(s, 'purse_attributes', purseType, purseNum);
          const img = qspFunc(s, '$purse_image', purseType, purseNum);
          result += `<TD><img width="100" src="${img}"></TD>`;
        }
        result += `<TD><a href="#" onclick="window.__gameStore.getState().doGoto('wardrobe', 'default_entry_wear', ${entry}); return false;"><img src="images/system/icons/clothing/wear.png"></a></TD>`;
        result += `<TD><a href="#" onclick="window.__gameStore.getState().doGoto('wardrobe', 'default_entry_set', ${entry}); return false;"><img src="images/system/icons/clothing/overwrite.png"></a></TD>`;
        result += `<TD><a href="#" onclick="window.__gameStore.getState().doGoto('wardrobe', 'default_entry_rename', ${entry}); return false;"><img src="images/system/icons/clothing/rename.png"></a></TD>`;
        result += `<TD><a href="#" onclick="window.__gameStore.getState().doGoto('wardrobe', 'default_entry_delete', ${entry}); return false;"><img src="images/system/icons/clothing/delete_on.png"></a></TD>`;
        if (cloNum === 0 || shoeNum === 0) {
          result += `<TD></TD><TR>`;
        } else {
          const shoStyle2 = num(st.ShoStyle2 ?? 0);
          const shoSport = num(st.ShoSport ?? 0);
          const cloStyle2 = num(st.CloStyle2 ?? 0);
          const cloSport = num(st.CloSport ?? 0);
          if ((shoStyle2 === 2 || shoSport === 1) && (cloStyle2 === 6 || cloSport === 1)) {
            if (num(st.default_sport_number?.[entry] ?? 0) !== entry) {
              result += `<TD><a href="#" onclick="window.__gameStore.getState().doGoto('wardrobe', 'default_sport_set', ${entry}); return false;"><img src="images/system/icons/clothing/sport_off.png"></a></TD><TR>`;
            } else {
              result += `<TD><img src="images/system/icons/clothing/sport.png"></TD><TR>`;
            }
          } else if (num((st as any).gschoolVars?.['school_diploma'] ?? 0) === 0 && (cloStyle2 === 4 || num(st.CloSchool ?? 0) === 1)) {
            if (num(st.default_school_number?.[entry] ?? 0) !== entry) {
              result += `<TD><a href="#" onclick="window.__gameStore.getState().doGoto('wardrobe', 'default_school_set', ${entry}); return false;"><img src="images/system/icons/clothing/school_off.png"></a></TD><TR>`;
            } else {
              result += `<TD><img src="images/system/icons/clothing/school.png"></TD><TR>`;
            }
          } else {
            result += `<TD></TD><TR>`;
          }
        }
        return result;
      }
      warn(module, func, args);
      return 0;
    }
    default:
      warn(module, func, args);
      return 0;
  }
}
