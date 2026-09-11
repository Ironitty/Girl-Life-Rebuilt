import type { SceneState, ActionDef } from './types';

export class SceneBuilder {
  mainText = '';
  statText = '';
  curActs: ActionDef[] = [];
  curobjs = '';
  backimage = '';
  menuOff = false;

  text(t: string) { this.mainText += (this.mainText ? '\n\n' : '') + t; return this; }
  stat(t: string) { this.statText = t; return this; }
  actions(a: ActionDef[]) { this.curActs = a; return this; }
  action(a: ActionDef) { this.curActs.push(a); return this; }
  act(label: string, a: Omit<ActionDef, 'label'>) { this.curActs.push({ label, ...a } as ActionDef); return this; }
  img(p: string) { this.backimage = p; return this; }
  nl() { return this; }
  obj(o: string) { this.curobjs = o; return this; }
  background(b: string) { this.backimage = b; return this; }
  hideMenu() { this.menuOff = true; return this; }

  build(): SceneState {
    return this;
  }
}
