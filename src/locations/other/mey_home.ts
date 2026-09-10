import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).day ?? 0) <= 25  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] > 40) {
    (s as any).mey_vika['mey_vika_qw'] = 40;
  }
  if (((s as any).args ?? 0)[0] === 'door') {
    qspCall(s, 'core_library', 'setloc', 'mey_home', 'door');
    qspCall(s, 'schedule', 'A14', 'A15');
    qspCall(s, 'stat', '');
    qspCall(s, 'themes', 'indoors');
    scene.text('<center><b>Meynold\'s house</b></center>');
    scene.img('images/locations/pavlovsk/resident/meynolds/mey_home.jpg');
    if (((s as any).mey_vika ?? 0)?.['key'] === 1) {
      scene.text('You open the door with your key and enter the house.');
      if (((s as any).frost ?? 0) > 0) {
        (s as any).frost = 0;
      }
      scene.actions([
        { label: 'Enter', goto: ['mey_home', 'start'] },
      ]);
    } else {
      if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 27) {
        scene.actions([{ label: 'Continue', goto: ['mey_tamara_events', 'next_meet'] }]);
      } else {
        scene.img('images/locations/pavlovsk/resident/meynolds/tamara_tea1.jpg');
        scene.text('You walk up to the Meynolds\' residence and ring the doorbell…');
        scene.text('After a short wait, you hear the lock click, and you see Katja\'s mother, Tamara and sister, Vicky standing by the door');
        // TODO-QSP: dynamic text: "Oh, hi, <<$pcs_nickname>>, welcome! Come in, make yourself at home."
        scene.text(`"Oh, hi, ${((s as any).pcs_nickname ?? 0)}, welcome! Come in, make yourself at home."`);
        if (((s as any).frost ?? 0) > 0) {
          (s as any).frost = 0;
        }
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
        ]);
      }
      if (((s as any).locat ?? 0)?.['katja'] === 7  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 1) {
        scene.text('You walk up to the Meynolds residence and ring the doorbell…');
        scene.text('Katja opens the door and quickly drags you to her room.');
        scene.actions([
          { label: 'Go to Katjas room', handler: (st: GameState) => {
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
  }, goto: ['KatjaHomeTalk', ''] },
        ]);
      } else {
        scene.img('images/locations/pavlovsk/resident/meynolds/tamara_tea0.jpg');
        scene.text('You walk up to the Meynolds\' residence and ring the doorbell…');
        scene.text('No one opens the door. It looks like nobody\'s home, or they are all asleep.');
        scene.text('Maybe you should try again at a more sociable time?');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  scene.build();
}

export const mey_home: LocationDef = {
  name: 'mey_home',
  title: 'Meynold\'s house',
  region: 'other',
  locationType: 'secluded',
  locclass: 'bedroom',
  description: ['You open the door with your key and enter the house.'],
  enter: enter,
};
