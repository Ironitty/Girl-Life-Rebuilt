import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Sewing circle</b></center>');
  scene.img('images/locations/pavlovsk/community/sew/sewing_lesson.jpg');
  if (((s as any).pcs_sewng ?? 0) < 40) {
    qspCall(s, 'exp_gain', 'sewng', (Math.floor(Math.random() * (pcs_intel/10 - pcs_intel/20 + 1)) + (pcs_intel/20)));
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.text('You spend an hour learning different sewing techniques.');
  }
  if (((s as any).pcs_sewng ?? 0) >= 40) {
    if ((!((s as any).tkanfirst ?? 0))) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'exp_gain', 'sewng', (Math.floor(Math.random() * (pcs_intel/10 - pcs_intel/20 + 1)) + (pcs_intel/20)));
      scene.text('She has some spare fabric for you as it\'s the first time you need some, but she tells you to bring some next time.');
      (s as any).tkanfirst = 1;
    } else {
      if (((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
        scene.text('You can\'t do your lesson without fabric so there is nothing you can do here now.');
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['sewing_fabric'] = ((s as any).mc_inventory['sewing_fabric'] ?? 0) - (1);
        qspCall(s, 'exp_gain', 'sewng', (Math.floor(Math.random() * (pcs_intel/10 - pcs_intel/20 + 1)) + (pcs_intel/20)));
        scene.text('For an hour you learn more advanced techniques and practice cutting and sewing the fabric you purchased.');
        if (((s as any).pcs_sewng ?? 0) >= 60  &&  (!((s as any).poTalk ?? 0))) {
          (s as any).poTalk = 1;
          scene.text('With a satisfied smile your teacher tells you, "Well done, now you can alter clothes to fit your size perfectly! However, this does not mean that any further studies would be useless. With further lessons I feel that I can teach you how to embroider splendid tapestries, which would be highly sought after, although very laborious to make."');
        }
        if (((s as any).pcs_sewng ?? 0) >= 80  &&  ((s as any).poTalk ?? 0) === 1) {
          scene.text('The teacher nods quietly and says, "You have mastered simple tapestries. It\'s not without flaws, but good enough to be able to sell them and as your skills continue to grow, the quality will improve as well."');
        }
      }
    }
  }
  // TODO-QSP: dynamic text: Your sewing skill is now <<pcs_sewng>>.
  scene.text(`Your sewing skill is now ${((s as any).pcs_sewng ?? 0)}.`);
  if (((s as any).mc_inventory ?? 0)?.['sewing_fabric'] >= 0) {
    // TODO-QSP: dynamic text: Your cloth will suffice for <<mc_inventory['sewing_fabric']>> more lessons.
    scene.text(`Your cloth will suffice for ${((s as any).mc_inventory ?? 0)?.['sewing_fabric']} more lessons.`);
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['pav_commclubs', ''] },
  ]);
  scene.build();
}

export const krupo: LocationDef = {
  name: 'krupo',
  title: 'Sewing circle',
  region: 'other',
  locationType: 'event',
  description: ['You spend an hour learning different sewing techniques.'],
  enter: enter,
};
