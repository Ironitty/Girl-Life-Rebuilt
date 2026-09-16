import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).menu_loc = 'rasputin_walkway';
  (s as any).menu_arg = '';
  (s as any).loc_arg = '';
  (s as any).loc = 'rasputin_walkway';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/rasputin/walkway.jpg');
  scene.text('You enter the passage way that leads to various sections of the club.');
  if (((s as any).hour ?? 0) > 2  &&  ((s as any).hour ?? 0) < 15) {
    qspGoto(s, 'pushkin_sq', '');
  } else {
    if ((((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) < 30)) {
      scene.text('A member of staff informs you that it is too early to watch either show.');
    } else {
      if (((s as any).hour ?? 0) === 17  ||  (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30)) {
        scene.actions([
          { label: 'Go watch the burlesque show', handler: (st: GameState) => {
    if (((s as any).rasputin ?? 0)?.['burlesque_ticket'] === 0) {
      scene.text('You must first purchase a ticket from the hostess.');
    } else {
      ((s as any).rasputin = (s as any).rasputin ?? {})['burlesque_ticket'] = 0;
      qspGoto(s, 'rasputin_show_bur', '');
    }
  } },
        ]);
      } else {
        if (((s as any).hour ?? 0) === 17  ||  (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30)) {
          // TODO-QSP: dynamic text: The staff informs you that you are too late for the first half of the burlesque ...
          scene.text('The staff informs you that you are too late for the first half of the burlesque show, but you can still enter after the intermission between 19:30 and 20:00.');
        } else {
          if (((s as any).hour ?? 0) === 18  ||  (((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) < 30)) {
            if (((s as any).rasputin ?? 0)?.['burlesque_ticket'] === 2) {
              // TODO-QSP: dynamic text: A member of staff informs you that entry for the second half of the burlesque sh...
              scene.text('A member of staff informs you that entry for the second half of the burlesque show is between 19:30 and 20:00');
            } else {
              // TODO-QSP: dynamic text: A member of staff informs you that you are too late for the first half of the bu...
              scene.text('A member of staff informs you that you are too late for the first half of the burlesque show, but you can still enter after the intermission between 19:30 and 20:00.');
            }
          } else {
            if (((s as any).hour ?? 0) === 19) {
              scene.actions([
                { label: 'Watch second half of the burlesque show', handler: (st: GameState) => {
    if (((s as any).rasputin ?? 0)?.['burlesque_ticket'] === 0) {
      scene.text('You must first purchase a ticket from the hostess.');
    } else {
      ((s as any).rasputin = (s as any).rasputin ?? {})['burlesque_ticket'] = 0;
      qspGoto(s, 'rasputin_show_bur', '');
    }
  } },
              ]);
            } else {
              if (((s as any).hour ?? 0) < 21) {
                // TODO-QSP: dynamic text: A member of staff informs you that the burlesque show has finished and the exoti...
                scene.text('A member of staff informs you that the burlesque show has finished and the exotic variety show will be starting from 21:00');
              } else {
                if (((s as any).hour ?? 0) === 21) {
                  scene.actions([
                    { label: 'Go watch the exotic variety show', handler: (st: GameState) => {
    if (((s as any).rasputin ?? 0)?.['variety_ticket'] === 0) {
      scene.text('You must first purchase a ticket from the hostess.');
    } else {
      ((s as any).rasputin = (s as any).rasputin ?? {})['variety_ticket'] = 0;
      qspGoto(s, 'rasputin_show_var', '');
    }
  } },
                  ]);
                } else {
                  if (((s as any).hour ?? 0) === 22) {
                    // TODO-QSP: dynamic text: The staff apologizes and let you know that you are too late for the enter the fi...
                    scene.text('The staff apologizes and let you know that you are too late for the enter the first half of the show and asks you to return during the intermission between 23:30 and midnight.');
                  } else {
                    if (((s as any).hour ?? 0) === 23  &&  ((s as any).minut ?? 0) < 30) {
                      if (((s as any).rasputin ?? 0)?.['variety_ticket'] === 2) {
                        // TODO-QSP: dynamic text: A member of staff informs you that entry for the second half of the erotic varie...
                        scene.text('A member of staff informs you that entry for the second half of the erotic variety show is between 23:30 and 0:00');
                      } else {
                        // TODO-QSP: dynamic text: A member of staff informs you that you are too late for the first half of the er...
                        scene.text('A member of staff informs you that you are too late for the first half of the erotic variety show, but you can still enter after the intermission between 23:30 and midnight.');
                      }
                      scene.actions([
                        { label: 'Watch second half of the erotic variety show', handler: (st: GameState) => {
    if (((s as any).rasputin ?? 0)?.['burlesque_ticket'] === 0) {
      scene.text('You must first purchase a ticket from the hostess.');
    } else {
      ((s as any).rasputin = (s as any).rasputin ?? {})['burlesque_ticket'] = 0;
      qspGoto(s, 'rasputin_show_bur', '');
    }
  } },
                      ]);
                    } else {
                      scene.text('The inner door to the variety shows is closed. A member of staff informs you that the last show is in progress and that there are no more shows tonight.');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).rasputin ?? 0)?.['free_drink'] !== ((s as any).daystart ?? 0)) {
      if ((((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) > 30)  ||  (((s as any).hour ?? 0) === 20  &&  ((s as any).minut ?? 0) < 30)  &&  ((s as any).rasputin ?? 0)?.['burlesque_ticket'] > 0) {
        scene.actions([
          { label: 'Take a free drink', handler: (st: GameState) => {
    ((s as any).rasputin = (s as any).rasputin ?? {})['free_drink'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/drinks_free_2.jpg');
    scene.text('You decide to take a glass of champagne freely offered from the staff and relax yourself a bit.');
    scene.actions([
      { label: 'Return', goto: ['rasputin_walkway', ''] },
    ]);
  } },
        ]);
      }
      if ((((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) > 30)  ||  ((s as any).hour ?? 0) > 21  ||  ((s as any).hour ?? 0) < 2  &&  ((s as any).rasputin ?? 0)?.['variety_ticket'] > 0) {
        scene.actions([
          { label: 'Take a free drink', handler: (st: GameState) => {
    ((s as any).rasputin = (s as any).rasputin ?? {})['free_drink'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pushkin/rasputin/drinks_free_3.jpg');
    scene.text('You decide to take a glass of free champagne from the pretty server.');
    scene.actions([
      { label: 'Return', goto: ['rasputin_walkway', ''] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspGoto(s, 'rasputin_entrance', '');
  } },
    ]);
  }
  scene.build();
}

export const rasputin_walkway: LocationDef = {
  name: 'rasputin_walkway',
  title: 'You enter the passage way that leads to various sections of ',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You enter the passage way that leads to various sections of the club.'],
  enter: enter,
};
