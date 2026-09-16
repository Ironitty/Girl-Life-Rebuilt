import type { GameState } from './types';

export function pushState(s: GameState): void {
  s.stateStack.push({
    loc: s.loc,
    locArg: s.locArg,
    prevLoc: s.prevLoc,
    prevArg: s.prevArg,
  });
}

export function popState(s: GameState): void {
  const frame = s.stateStack.pop();
  if (frame) {
    s.loc = frame.loc;
    s.locArg = frame.locArg;
    (s as any).locArgs = [frame.locArg, '', ''];
    if (frame.prevLoc !== undefined) s.prevLoc = frame.prevLoc;
    if (frame.prevArg !== undefined) s.prevArg = frame.prevArg;
  }
}
