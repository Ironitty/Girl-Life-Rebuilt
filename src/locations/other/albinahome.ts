import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'albinahome', 'zoya_schedule');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinahome.jpg');
  if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) <= 9) {
    scene.text('There are better times for a house call than right now!');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You walk up the long driveway to the front door of Albina\'s house and ring the doorbell.');
    if (((s as any).locat ?? 0)?.['A23'] === 35) {
      scene.text('You wait for a few minutes, but not even the maid comes to answer the door. It seems like nobody is home.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['albina_mother_events', 'zoya_meet'] }]);
      if (((s as any).locat ?? 0)?.['zoya'] === 8  ||  ((s as any).locat ?? 0)?.['zoya'] === 9) {
        scene.text('You hear the latch unlocking before the door is opened by the maid.');
        // TODO-QSP: dynamic text: "Hello Miss <<$pcs_firstname>>," she smiles. "Miss Albina isn't home right now, ...
        scene.text(`"Hello Miss ${((s as any).pcs_firstname ?? 0)}," she smiles. "Miss Albina isn't home right now, but should return by 5pm. Ms. Zoya said that you're free to come in and wait for her if you wish."`);
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    scene.text('You shake your head. "No, that\'s okay. I\'ll just come back later."');
    scene.text('She nods. "As I said, Miss Albina is usually home by 5pm if you wish to return then."');
    scene.text('You nod back before she closes the door and you head back down the driveway.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
          { label: 'Wait for Albina inside', handler: (st: GameState) => {
    scene.text('"I\'ll come in and wait then, if that\'s okay?" you reply.');
    scene.text('The maid smiles and stands aside to let you enter.');
    // TODO-QSP: dynamic text: "Please follow me, Miss <<$pcs_firstname>>."
    scene.text(`"Please follow me, Miss ${((s as any).pcs_firstname ?? 0)}."`);
    if (((s as any).locat ?? 0)?.['zoya'] === 8) {
      scene.actions([{ label: 'Continue', goto: ['albina_mother_events', 'zoya_sunbathing_solo1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['albina_mother_events', 'zoya_workout_solo'] }]);
    }
  } },
        ]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['albina_mother_events', 'zoya_sunbathing_albina'] }]);
        if (((s as any).locat ?? 0)?.['zoya'] === 11) {
          scene.actions([{ label: 'Continue', goto: ['albina_mother_events', 'zoya_yoga_albina'] }]);
        } else {
          scene.text('A few seconds later, you hear the click of the latch unlocking before the door opens to reveal the maid.');
          // TODO-QSP: dynamic text: "Hello Miss <<$pcs_firstname>>," she says with a polite smile.
          scene.text(`"Hello Miss ${((s as any).pcs_firstname ?? 0)}," she says with a polite smile.`);
          scene.text('"Hi. Is Albina home?" you politely ask.');
          if (((s as any).locat ?? 0)?.['A23'] !== 1) {
            if (((s as any).locat ?? 0)?.['A23'] === 2) {
              scene.text('"Miss Albina is at school," she replies with a frown. "Shouldn\'t you also be there?"');
              scene.text('You just awkwardly mumble under your breath and turn around, hearing the door close behind you as you walk away.');
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
              ]);
            } else {
              scene.text('She shakes her head while offering another polite smile. "I\'m sorry, but Miss Albina is not available right now."');
              scene.text('"Oh. Okay. I\'ll come back later then," you reply.');
              if (((s as any).locat ?? 0)?.['A23'] === 6) {
                scene.text('"I believe she is at the beach with your other friends if you want to try there?" she says before closing the door.');
              } else {
                scene.text('She just nods before closing the door.');
              }
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
              ]);
            }
          } else {
            scene.text('She nods and stands aside to let you enter.');
            scene.actions([
              { label: 'Enter', goto: ['albinahome', 'maid_greet'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

export const albinahome: LocationDef = {
  name: 'albinahome',
  title: 'There are better times for a house call than right now!',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  description: ['There are better times for a house call than right now!'],
  enter: enter,
};
