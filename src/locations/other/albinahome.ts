import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'din_van', 'prvt_pee');
  scene.build();
}

function enterDoorBell(s: GameState, scene: SceneBuilder): void {
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
      if ((((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7)  &&  ((s as any).locat ?? 0)?.['A23'] === 1  &&  ((s as any).AlbinaQW ?? 0)?.['meet_zoya'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['albina_mother_events', 'zoya_meet'] }]);
      } else {
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
          if (((s as any).locat ?? 0)?.['zoya'] === 10) {
            scene.actions([{ label: 'Continue', goto: ['albina_mother_events', 'zoya_sunbathing_albina'] }]);
          } else {
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
    }
  }
  scene.build();
}

function enterMaidGreet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) <= ((s as any).AlbinaQW ?? 0)?.['visiting']) {
    scene.actions([{ label: 'Continue', goto: ['albinahome', 'hallway'] }]);
  }
  ((s as any).AlbinaQW ?? {})['visiting'] = ((s as any).daystart ?? 0);
  (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['albina_house_events', 'alb_yoga_start'] }]);
  } else {
    if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).daystart ?? 0) > ((s as any).AlbinaQW ?? 0)?.['daily_event']) {
      ((s as any).AlbinaQW ?? {})['daily_event'] = ((s as any).daystart ?? 0);
      scene.actions([{ label: 'Continue', goto: ['albina_sex_scenes', 'lazar_start'] }]);
    } else {
      if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['albina_house_events', 'albina_sunbathe_solo'] }]);
      } else {
        scene.img('images/locations/pavlovsk/resident/albinahome/maid.jpg');
        // TODO-QSP: dynamic text: "Please make yourself at home, Miss <<$pcs_firstname>>. I will let Miss Albina k...
        scene.text(`"Please make yourself at home, Miss ${((s as any).pcs_firstname ?? 0)}. I will let Miss Albina know that you have arrived," she says before excusing herself.`);
        scene.actions([
          { label: 'Continue', goto: ['albinahome', 'hallway'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
  scene.text('The foyer is well-appointed with hardwood flooring, numerous arches and tasteful decor. Lighting is sunk into the exquisite staircase with wraparound balconies on either side.');
  scene.text('You have been asked not to wander around the house alone, so you\'re limited in where you can go.');
  if (((s as any).hour ?? 0) >= 21) {
    // TODO-QSP: dynamic text: The maid approaches with a polite smile. "My apologies Miss <<$pcs_firstname>>, ...
    scene.text(`The maid approaches with a polite smile. "My apologies Miss ${((s as any).pcs_firstname ?? 0)}, but it is time for you to leave. You may visit again tomorrow."`);
    scene.text('You nod and gather your belongings before the maid shows you to the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
  }, goto: ['pav_residential', ''] },
      { label: 'Go to Albina\'s bedroom', goto: ['albinahome', 'bedroom'] },
      { label: 'Go to Zoya\'s bedroom', goto: ['albinahome', 'zoya_room'] },
      { label: 'Go to the living room', goto: ['albinahome', 'living_room'] },
      { label: 'Go to the bathroom', goto: ['albinahome', 'downstairs_bathroom'] },
      { label: 'Go to the kitchen', goto: ['albinahome', 'kitchen'] },
      { label: 'Go to the pool', goto: ['albinahome', 'pool_side'] },
    ]);
  }
  scene.build();
}

function enterDownstairsBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/albinahome/bathroom.jpg');
  scene.text('The bathroom is just as well appointed as the rest of the house, with polished marble used throughout its furnishings.');
  // TODO-QSP: dynamic text: There is a shower, toilet, sink, <a href="exec:gt 'mirror', 'start'">mirror</a>,...
  scene.text('There is a shower, toilet, sink, <a href="exec:gt \'mirror\', \'start\'">mirror</a>, where you can \' + iif(pcs_hairbsh < 1, \'<a href="exec:gt \'mirror\', \'brush\'">brush</a>\', \'brush\') + \' your hair, and even a separate bathtub.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0) {
    if (((s as any).pain ?? 0)?.['total'] > 0) {
      // TODO-QSP: act $func('drugs', 'painkiller_act_str'):
      qspCall(s, 'drugs', 'painkiller');
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
      qspCall(s, 'stat', '');
      scene.text('You take a painkiller and gulp it down with a glass of water.');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Return to the hallway', goto: ['albinahome', 'hallway'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'door_bell':
      enterDoorBell(s, scene);
      break;
    case 'maid_greet':
      enterMaidGreet(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'downstairs_bathroom':
      enterDownstairsBathroom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albinahome: LocationDef = {
  name: 'albinahome',
  title: 'There are better times for a house call than right now!',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  enter: enter,
};
