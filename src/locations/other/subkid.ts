import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).rkidloc = (Math.floor(Math.random() * 11) + 0);
  if (((s as any).kid ?? 0) > 0) {
    (s as any).kidI = 0;
    // TODO-QSP: :loop
    ((s as any).kidSelected = (s as any).kidSelected ?? {})[String((s as any).kidLoops ?? 0)] = ((s as any).kidI ?? 0);
    if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 1  &&  (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) < 12  ||  ((s as any).hour ?? 0) > 18 )) {
      // TODO-QSP: dynamic text: <a href="exec:gt ''kid'',''start'' ">In the crib lies <<$kidname[kidI]>>.</a>
      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">In the crib lies ${((s as any).kidname ?? 0)?.[String((s as any).kidI ?? 0)] ?? ''}.</a>`);
    } else {
      if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 1  &&  (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 18 )) {
        // TODO-QSP: dynamic text: <a href="exec:gt ''kid'',''start'' ">On a blanket lies <<$kidname[kidI]>>.</a>
        scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">On a blanket lies ${((s as any).kidname ?? 0)?.[String((s as any).kidI ?? 0)] ?? ''}.</a>`);
      } else {
        if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 7  &&  (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) > 21)) {
          // TODO-QSP: dynamic text: <a href="exec:gt ''kid'',''start'' ">Asleep in bed lies <<$kidname[kidI]>>.</a>
          scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">Asleep in bed lies ${((s as any).kidname ?? 0)?.[String((s as any).kidI ?? 0)] ?? ''}.</a>`);
        } else {
          if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 7  &&  (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21)  &&  ((s as any).rkidloc ?? 0) < 8) {
            // TODO-QSP: dynamic text: <a href="exec:gt ''kid'',''start'' "><<$kidname[kidI]>> is playing with toys on ...
            scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">${((s as any).kidname ?? 0)?.[String((s as any).kidI ?? 0)] ?? ''} is playing with toys on the floor.</a>`);
          } else {
            if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] >= 1  &&  ((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 7  &&  (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21)  &&  ((s as any).rkidloc ?? 0) >= 8) {
              // TODO-QSP: dynamic text: <a href="exec:gt ''kid'',''start'' "><<$kidname[kidI]>> is watching TV.</a>
              scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">${((s as any).kidname ?? 0)?.[String((s as any).kidI ?? 0)] ?? ''} is watching TV.</a>`);
            } else {
              if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 18  &&  (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 9)) {
                // TODO-QSP: dynamic text: <a href="exec:gt ''kid'',''start'' "><<$kidname[kidI]>> is getting ready for sch...
                scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">${((s as any).kidname ?? 0)?.[String((s as any).kidI ?? 0)] ?? ''} is getting ready for school.</a>`);
              } else {
                if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 18  &&  (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom'  ||  ((s as any).locclass ?? 0) === 'singleroom'  ||  ((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom')  &&  ( ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16)) {
                  // TODO-QSP: dynamic text: <<$kidname[kidI]>> is at school.
                  scene.text(`${((s as any).kidname ?? 0)?.[String((s as any).kidI ?? 0)] ?? ''} is at school.`);
                } else {
                  if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 18  &&  (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 18)) {
                    // TODO-QSP: dynamic text: <a href="exec:gt ''kid'', ''start''"><<$kidname[kidi]>> is working on homework.<...
                    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">${((s as any).kidname ?? 0)?.[String((s as any).kidi ?? 0)] ?? ''} is working on homework.</a>`);
                  } else {
                    if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 18  &&  (((s as any).locclass ?? 0) === 'livingr'  ||  ((s as any).locclass ?? 0) === 'livingroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) <= 21)) {
                      // TODO-QSP: dynamic text: <a href="exec:gt ''kid'',''start'' "><<$kidname[kidi]>> is watching TV.</a>
                      scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">${((s as any).kidname ?? 0)?.[String((s as any).kidi ?? 0)] ?? ''} is watching TV.</a>`);
                    } else {
                      if (((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] >= 7  &&  ((s as any).kidage ?? 0)?.[String((s as any).kidI ?? 0)] < 18  &&  (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom'  ||  ((s as any).locclass ?? 0) === 'singleroom')  &&  ( ((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) > 21)) {
                        // TODO-QSP: dynamic text: <a href="exec:gt ''kid'',''start'' ">Asleep in bed lies <<$kidname[kidI]>>.</a>
                        scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kid/u0027, /u0027start/u0027); return false;">Asleep in bed lies ${((s as any).kidname ?? 0)?.[String((s as any).kidI ?? 0)] ?? ''}.</a>`);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    (s as any).kidI = ((s as any).kidI ?? 0) + (1);
    if (((s as any).kidI ?? 0) < ((s as any).kid ?? 0)) {
      // TODO-QSP: jump 'loop'
    }
  }
  scene.build();
}

export const subkid: LocationDef = {
  name: 'subkid',
  region: 'other',
  locclass: 'bedr',
  enter: enter,
};
