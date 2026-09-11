import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'Terminal', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Storage terminal</b></center>');
  scene.img('images/locations/city/industrial/terminal/terminal0.jpg');
  scene.text('A large shipping center with many on and off load truck ports.');
  if (((s as any).trfatherQW ?? 0) === 4  &&  ((s as any).trfatherQW ?? 0)?.['day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14) {
    scene.text('Near one of the dirty trucks is your <a href="exec:trfatherQW[\'day\'] = daystart & gt \'trFatherMisha\'">father</a>.');
  }
  if (((s as any).trfatherQW ?? 0) === 2) {
    scene.actions([
      { label: 'Search for father', goto: ['Terminal', 'searchfather'] },
    ]);
  } else {
    if ((((s as any).trfatherQW ?? 0) >= 3  ||  ((s as any).trfatherQW ?? 0) < 0)  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) === 12) {
      // TODO-QSP: act iif(trfatherQW = 3, 'Search for father', 'Approach the men'):
      scene.actions([{ label: 'Continue', goto: ['Terminal', 'search_approach_men'] }]);
    }
  }
  scene.actions([
    { label: 'Go to the office', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AboutBussines = 0;
    (s as any).AboutDocs = 0;
    (s as any).AboutDocsManager = 0;
    (s as any).YouNotOpenDoorDir = 0;
    (s as any).YouNotOpenDoorBuh = 0;
  }, goto: ['TerminalOffice', '00'] },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

export const Terminal: LocationDef = {
  name: 'Terminal',
  title: 'Storage terminal',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['A large shipping center with many on and off load truck ports.'],
  enter: enter,
};
