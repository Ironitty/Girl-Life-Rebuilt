import { registerLocation } from '../core/location';
import type { LocationDef } from '../core/types';

const modules = import.meta.glob<{ default?: LocationDef; locations?: LocationDef[] } & Record<string, unknown>>(
  './**/*.{ts,tsx}',
  { eager: true }
);

function isLocationDef(v: unknown): v is LocationDef {
  if (typeof v !== 'object' || v === null) return false;
  const o = v as Record<string, unknown>;
  return typeof o.name === 'string' &&
    (typeof o.enter === 'function' || typeof o.description === 'string' || Array.isArray(o.description) || typeof o.component === 'function' || typeof o.component === 'object');
}

let count = 0;
for (const [path, mod] of Object.entries(modules)) {
  if (path.includes('auto-register') || path.includes('/test.ts')) continue;

  const toRegister: LocationDef[] = [];

  if (mod.default && isLocationDef(mod.default)) {
    toRegister.push(mod.default);
  } else if (mod.locations && Array.isArray(mod.locations)) {
    toRegister.push(...mod.locations);
  } else {
    for (const v of Object.values(mod)) {
      if (isLocationDef(v)) {
        toRegister.push(v);
      }
    }
  }

  for (const loc of toRegister) {
    registerLocation(loc);
    count++;
  }
}

export { count as registeredCount };
