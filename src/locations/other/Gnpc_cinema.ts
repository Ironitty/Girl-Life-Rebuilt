import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cinema</b></center>');
  scene.img('images/locations/city/citycenter/mall/cinema/cinema.jpg');
  // TODO-QSP: dynamic text: You go with <<$nameBoyfrend[numnpc]>> to the movie theater near the park. <<$nam...
  scene.text(`You go with ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)]} to the movie theater near the park. ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)]} buys the tickets and then you both enter a small cinema hall and find your seats.`);
  scene.actions([
    { label: 'Watch the movie', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    (s as any).minut = ((s as any).minut ?? 0) + 100;
    if (!(s as any).otnBoyFrend) (s as any).otnBoyFrend = {}; (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.text('You got a guy on the chair placed in the back row. Soon the lights dimmed and the movie started on the screen.');
    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80) {
      scene.text('You watched the movie a couple of hours sitting in a chair next to the guy.');
      scene.actions([
        { label: 'Go to the exit', goto: ['Gnpc2', ''] },
      ]);
    } else {
      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
        scene.text('You have been watching a movie and suddenly felt a hand on my knee Man.');
        qspCall(s, 'willpower', 'foreplay', 'self', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Remove his hands [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Remove his hands [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (!(s as any).otnBoyFrend) (s as any).otnBoyFrend = {}; (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (20);
    qspCall(s, 'stat', '');
    scene.text('You have removed palm guy with his knees and continued to watch the movie. The movie finally ends, the lights come up in the hall and the credits roll on the screen.');
    scene.actions([
      { label: 'Go to the exit', goto: ['Gnpc2', ''] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Ignore', handler: (st: GameState) => {
    if (!(s as any).otnBoyFrend) (s as any).otnBoyFrend = {}; (s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.text('You pretended that nothing happens and the guy started more actively stroking your leg. The movie finally ends, the lights come up in the hall and the credits roll on the screen.');
    scene.actions([
      { label: 'Go to the exit', goto: ['Gnpc2', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
          // TODO-QSP: dynamic text: You have been watching the movies, and <<$nameBoyfrend[numnpc]>> put his hand on...
          scene.text(`You have been watching the movies, and ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)]} put his hand on your foot and began to stroke your knee. Movie finally ended. In the hall lights went on and the screen went titles.`);
          scene.actions([
            { label: 'Go to the exit', goto: ['Gnpc2', ''] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const Gnpc_cinema: LocationDef = {
  name: 'Gnpc_cinema',
  title: 'Cinema',
  region: 'other',
  enter: enter,
};
