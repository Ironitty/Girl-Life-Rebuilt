import { registerLocation } from '../core/location';
import type { LocationDef } from '../core/types';

const modules = import.meta.glob<{ default?: LocationDef; locations?: LocationDef[] } & Record<string, unknown>>(
  './**/*.{ts,tsx}',
  { eager: true }
);

function resolve(v: unknown): unknown {
  if (typeof v === 'function') {
    try { return (v as () => unknown)(); } catch { return v; }
  }
  return v;
}

function isLocationDef(v: unknown): v is LocationDef {
  if (typeof v !== 'object' || v === null) return false;
  const o = v as Record<string, unknown>;
  return typeof o.name === 'string' &&
    (typeof o.enter === 'function' || typeof o.description === 'string' || Array.isArray(o.description) || typeof o.component === 'function' || typeof o.component === 'object');
}

let count = 0;
for (const [path, mod] of Object.entries(modules)) {
  if (path.includes('auto-register') || path.includes('/test.ts') || path.includes('/other/map_view.ts')) continue;

  const toRegister: LocationDef[] = [];

  const resolvedDefault = resolve(mod.default);
  const resolvedLocations = resolve(mod.locations);
  if (resolvedDefault && isLocationDef(resolvedDefault)) {
    toRegister.push(resolvedDefault);
  } else if (resolvedLocations && Array.isArray(resolvedLocations)) {
    toRegister.push(...resolvedLocations.map(resolve).filter(isLocationDef));
  } else {
    for (const v of Object.values(mod)) {
      const resolved = resolve(v);
      if (isLocationDef(resolved)) {
        toRegister.push(resolved);
      }
    }
  }

  for (const loc of toRegister) {
    registerLocation(loc);
    count++;
  }
}

export { count as registeredCount };
