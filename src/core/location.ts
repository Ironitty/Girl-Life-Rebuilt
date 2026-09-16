import type { GameState, LocationDef } from './types';
import { SceneBuilder } from './scene';
import { getRoutine } from './routines';

const locationRegistry: Record<string, LocationDef> = {};
let _currentScene: SceneBuilder | null = null;

export function defineLocation<T extends LocationDef>(loc: T): T {
  return loc;
}

export function registerLocation(def: LocationDef): void {
  const existing = locationRegistry[def.name];
  if (existing) {
    if (existing.enter && !def.enter) return;
    locationRegistry[def.name] = def;
    return;
  }
  locationRegistry[def.name] = def;
}

export function getLocation(name: string): LocationDef | undefined {
  return locationRegistry[name];
}

export function getRegisteredLocations(): string[] {
  return Object.keys(locationRegistry);
}

export function isMenuLoc(name: string): boolean {
  return name === 'start' || name.startsWith('map_') || name.endsWith('_view') || name === 'wardrobe';
}

export function inferLegacyLocationType(loc: string): string | undefined {
  if (loc.startsWith('pav_')) return 'pav';
  if (loc.startsWith('city_')) return 'city';
  if (loc.startsWith('gad')) return 'gad';
  if (loc.startsWith('pushkin')) return 'pushkin';
  return undefined;
}

export function setloc(s: GameState, loc: string, arg: string, arg2?: string, arg3?: string): void {
  if (s.loc !== loc) {
    s.prevLoc = s.loc;
    s.prevArg = s.locArg;
  }
  s.loc = loc;
  s.menuLoc = loc;
  s.locArg = arg;
  s.locArg2 = arg2 ?? '';
  s.locArg3 = arg3 ?? '';
  (s as any).locArgs = [arg, arg2 ?? '', arg3 ?? ''];
  s.menuArg = arg;

  const def = getLocation(loc);
  const type = def?.locationType ?? inferLegacyLocationType(loc);
  if (type) {
    s.locationType = type;
  }
  if (import.meta.env.DEV && def?.enter && !def.locationType) {
    console.warn(`[location] ${loc} is fully ported but missing explicit locationType; using fallback`);
  }
}

export function goto(s: GameState, loc: string, arg: string, arg2?: string, arg3?: string): void {
  if (s.loc && s.loc !== loc) {
    const prevDef = getLocation(s.loc);
    if (prevDef?.exit) {
      prevDef.exit(s, { targetLoc: loc, targetArg: arg });
    }
  }

  setloc(s, loc, arg, arg2, arg3);
  s.navigationVersion++;
  const def = getLocation(loc);
  if (def) {
    const scene = new SceneBuilder();
    _currentScene = scene;
    if (def.background) scene.background(def.background);
    if (def.enter) {
      def.enter(s, scene);
    } else if (def.description && def.description.length > 0) {
      scene.text(def.description[0]);
      if (def.actions) scene.actions(def.actions);
    } else {
      scene.text('');
      if (def.actions) scene.actions(def.actions);
    }
    _currentScene = null;
    s.scene = scene.build();
  }
}

(window as any).__goto = goto;

export function call(s: GameState, loc: string, arg: string): void {
  s.stateStack.push({
    loc: s.loc,
    locArg: s.locArg,
    prevLoc: s.prevLoc,
    prevArg: s.prevArg,
  });
  goto(s, loc, arg);
}

export function invoke(s: GameState, name: string, arg: string): void {
  const routine = getRoutine(name);
  if (routine) {
    routine.run(s, arg);
    return;
  }

  const version = s.navigationVersion;
  const savedScene = s.scene;

  const def = getLocation(name);
  if (def?.enter) {
    const target = _currentScene ?? new SceneBuilder();
    def.enter(s, target);
    if (s.navigationVersion !== version) return;
    if (!_currentScene && target.curActs.length > 0) {
      s.scene = { ...savedScene, curActs: [...(savedScene.curActs ?? []), ...target.curActs] };
    } else {
      s.scene = savedScene;
    }
  } else {
    if (s.navigationVersion !== version) return;
    s.scene = savedScene;
  }
}
