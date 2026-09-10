import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Alley entrance next to cafe</b></center>');
  scene.img('images/locations/city/residential/street/gopnews.jpg');
  scene.text('You walk around the cafe going into a back alley, where you see several guys. They did their best to look like Gopniks, wearing the stereotypical track suits. They mostly just seem to be loitering about, drinking beer and harassing people passing by their alley. You\'re certain none of these guys have jobs, and mostly live off the spoils they gain from their petty crime.');
  qspCall(s, 'gopwho', '');
  qspCall(s, 'goplust', '');
  if (((s as any).gopnew ?? 0)?.['feed'] >= 1) {
    scene.actions([{ label: 'Continue', goto: ['gopnew', 'succubus_1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['gopnew', 'mistress_1'] }]);
    if (((s as any).gnewQW ?? 0) === 0  &&  ((s as any).gopnew ?? 0)?.['ran'] >= 1) {
      scene.actions([{ label: 'Continue', goto: ['gopnew', 'coward_1'] }]);
    } else {
      if (((s as any).gnewQW ?? 0) === 0) {
        qspCall(s, 'gopnew', 'start0');
      } else {
        qspCall(s, 'gopnew', 'start1');
        if (((s as any).gnewQW ?? 0) === 2) {
          qspCall(s, 'gopnew', 'start2');
        } else {
          qspCall(s, 'gopnew', 'start3');
          if (((s as any).gnewQW ?? 0) === 4) {
            qspCall(s, 'gopnew', 'start4');
          } else {
            qspCall(s, 'gopnew', 'start5');
            if (((s as any).sipovka ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 6) {
              qspCall(s, 'gopnew', 'start6');
            } else {
              qspCall(s, 'gopnew', 'start7');
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const gopnew: LocationDef = {
  name: 'gopnew',
  title: '(Succubus)',
  region: 'other',
  description: ['You walk around the cafe going into a back alley, where you see several guys. They did their best to look like Gopniks, wearing the stereotypical track suits. They mostly just seem to be loitering about, drinking beer and harassing people passing by their alley. You\'re certain none of these guys have jobs, and mostly live off the spoils they gain from their petty crime.'],
  enter: enter,
};
