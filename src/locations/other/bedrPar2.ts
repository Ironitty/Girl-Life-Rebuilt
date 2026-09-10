import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bedrPar2', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'family_schedule', '');
  scene.text('<center><b>Master bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar2.jpg');
  scene.text('The room in which your parents sleep. Their large bed, <a href="exec: gt \'bedrPar2\',\'parents_wardrobe\'">wardrobe</a> and other closets take up most of the space.');
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
    if (((s as any).locat ?? 0)?.['Mother'] === 1  &&  ((s as any).locat ?? 0)?.['Stepdad'] === 1) {
      scene.text('Your mother and stepfather are sleeping on the bed.');
    } else {
      scene.text('Your mother is sleeping on the bed.');
      if (((s as any).locat ?? 0)?.['Stepdad'] === 1) {
        scene.text('Your stepfather is sleeping on the bed.');
      }
    }
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1  ||  (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 21)) {
      if (((s as any).kamasutra_day ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.text('You notice a <a href="exec: gt \'bedrPar2\',\'kamasutra\'">book laying on the bed</a>.');
      }
      if (((s as any).prezikday ?? 0) !== ((s as any).daystart ?? 0)) {
        if (((s as any).prezikProver ?? 0) >= 3) {
          (s as any).prezikday = ((s as any).daystart ?? 0) - 4;
          scene.actions([
            { label: 'Steal condoms from your parents\' stash', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 5);
    qspCall(s, 'stat', '');
    if (((s as any).preziktype ?? 0) === 0) {
      (s as any).mc_inventory['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    if (((s as any).preziktype ?? 0) === 1  ||  ((s as any).preziktype ?? 0) === 2) {
      (s as any).mc_inventory['normal_condoms'] = ((s as any).mc_inventory['normal_condoms'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    (s as any).prezikday = ((s as any).daystart ?? 0);
    (s as any).prezikProver = 0;
    scene.img('images/pc/items/accessories/birthcontrol/condoms_steal.jpg');
    // TODO-QSP: dynamic text: After you make sure you're not seen, you quickly search your parents' room for t...
    scene.text(`After you make sure you're not seen, you quickly search your parents' room for their condom stash and take a few. You now have '+iif(preziktype = 0, '${((s as any).mc_inventory ?? 0)?.['equipped_condoms']}', '${((s as any).mc_inventory ?? 0)?.['normal_condoms']}')+' condoms.`);
    scene.actions([
      { label: 'Continue', goto: ['bedrPar2', ''] },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Return to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
    ]);
  }
  scene.build();
}

export const bedrPar2: LocationDef = {
  name: 'bedrPar2',
  title: 'Master bedroom',
  region: 'other',
  locationType: 'private',
  description: ['Your mother and stepfather are sleeping on the bed.'],
  enter: enter,
};
