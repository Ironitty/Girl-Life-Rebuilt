import { useShallow } from 'zustand/react/shallow';
import { useGameStore } from './store';
import type { SceneState } from './types';
import type { FaceImageState } from './clothingImage';

export function usePlayerStatus() {
  return useGameStore(useShallow(s => ({
    mood: s.pcs_mood,
    health: s.pcs_health,
    hydration: s.pcs_hydra,
    energy: s.pcs_energy,
    money: s.money,
    mana: s.pcs_mana,
    willpower: s.pcs_willpwr,
    horny: s.pcs_horny,
  })));
}

export function useScene(): SceneState {
  return useGameStore(s => s.scene);
}

export function useLocation() {
  return useGameStore(useShallow(s => ({ loc: s.loc, locArg: s.locArg })));
}

export function useTime() {
  return useGameStore(useShallow(s => ({
    hour: s.hour,
    minut: s.minut,
    day: s.day,
    month: s.month,
    year: s.year,
    week: s.week,
  })));
}

export function useCombat() {
  return useGameStore(s => s.combat);
}

export function useNpc(id: string) {
  return useGameStore(s => s.npcs[id]);
}

export function useNpcRelationship(id: string): number {
  return useGameStore(s => s.npcs[id]?.relationship ?? 0);
}

export function useNpcKnown(id: string): boolean {
  return useGameStore(s => s.npcs[id]?.met ?? false);
}

export function useClothing() {
  return useGameStore(useShallow(s => ({
    clothing: s.clothingworntype,
    clothingNumber: s.clothingwornnumber,
    panty: s.pantyworntype,
    pantyNumber: s.pantywornnumber,
    bra: s.braworntype,
    braNumber: s.brawornnumber,
    shoes: s.shoeworntype,
    shoesNumber: s.shoewornnumber,
    coat: s.coatworntype,
    coatNumber: s.coatwornnumber,
  })));
}

export function useWeather() {
  return useGameStore(useShallow(s => ({
    weatherFall: s.weatherFall,
    sunWeather: s.sunWeather,
    temper: s.temper,
  })));
}

export function useStats(): Record<string, number> {
  return useGameStore(s => s.stat);
}

export function useSkill(level: string): number {
  return useGameStore(s => s.skill_levels[level] ?? 0);
}

export function useJobStates() {
  return useGameStore(s => s.jobStates);
}

export function useReminders() {
  return useGameStore(s => s.reminders);
}

export function useFaceImageState(): FaceImageState {
  return useGameStore(useShallow(s => ({
    face_style: s.face_style,
    glass: s.glass,
    pcs_eyecol: s.pcs_eyecol,
    pcs_haircol: s.pcs_haircol,
    pcs_hairlng: s.pcs_hairlng,
    pcs_hairbsh: s.pcs_hairbsh,
    hbraids: s.hbraids,
    hpigtail: s.hpigtail,
    curly: s.curly,
    hbangs: s.hbangs,
    hpingripw: s.hpingripw,
    hscrunchw: s.hscrunchw,
    pcs_makeup: s.pcs_makeup,
    cumloc: s.cumloc,
    cumvol: s.cumvol,
  })));
}
