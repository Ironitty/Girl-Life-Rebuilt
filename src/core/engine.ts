import type { GameState, ActionDef } from './types';
import { goto, invoke } from './location';
import { pushState, popState } from './stateStack';
import { computeStats } from './stats';
import { loca } from './loca';
import { checkReminders } from '../systems/calendar';

export interface Reminder {
  id: string;
  title: string;
  startTs: number;
  color: string;
}

export function processAction(s: GameState, action: ActionDef): Reminder[] {
  const navBefore = s.navigationVersion;

  if (action.handler) {
    action.handler(s);
  }

  computeStats(s);

  const handlerNavigated = s.navigationVersion !== navBefore;

  if (!handlerNavigated) {
    if (action.goto) {
      goto(s, action.goto[0], action.goto[1], action.goto[2]);
      loca(s);
    } else if (action.call) {
      pushState(s);
      goto(s, action.call[0], action.call[1], action.call[2]);
      loca(s);
    } else if (action.invoke) {
      invoke(s, action.invoke[0], action.invoke[1]);
    }
  }

  computeStats(s);

  const reminders = checkReminders(s);
  return reminders;
}

export function returnFromCall(s: GameState): void {
  popState(s);
  computeStats(s);
}
