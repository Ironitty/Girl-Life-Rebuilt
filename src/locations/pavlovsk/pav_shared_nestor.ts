import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'boyStat', 'A265');
  // TODO-QSP: dynamic text: <h3><center><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>></font></h3...
  scene.text(`<h3><center><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3></center>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg');
  // TODO-QSP: $func('npc_notes', $boy)
  if (((s as any).Nestor ?? 0)?.['hadSex'] === 1) {
    // TODO-QSP: dynamic text: As you know very well, <<$npc_firstname[$boy]>> has a <<$npc_thdick[$boy]>> <<np...
    scene.text(`As you know very well, ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} has a ${((s as any).npc_thdick ?? 0)?.[String((s as any).boy ?? 0)]} ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long <a href="exec:gt 'pav_shared_nestor', 'nestor_dick'">dick</a> with somehow maintained pubic hair.`);
  }
  // TODO-QSP: dynamic text: <b>Today he looks to be in a <<$Nestor['mood_txt']>> mood.</b>
  scene.text(`<b>Today he looks to be in a ${((s as any).Nestor ?? 0)?.['mood_txt']} mood.</b>`);
  if ((((s as any).totminut ?? 0) - ((s as any).Nestor ?? 0)?.['served']) < 180) {
    (s as any).Nestor['serve'] = 0;
    // TODO-QSP: dynamic text: It's not even been 3 hours since you last served <<$npc_firstname[$boy]>>
    scene.text(`It's not even been 3 hours since you last served ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}`);
  } else {
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
      (s as any).Nestor['serve'] = 1;
    }
  }
  if (((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0) {
    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey <<$pcs_firstname>>, is that cum? Go wash y...
    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey ${((s as any).pcs_firstname ?? 0)}, is that cum? Go wash yourself, I don't want you near me like that!"</font>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey <<$pcs_firstname>>, is that cum on your cl...
    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey ${((s as any).pcs_firstname ?? 0)}, is that cum on your clothes? Go change, I don't want you near me like that!"</font>`);
    if ((((s as any).cumloc ?? 0)[14] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0  ||  ((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0)  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey <<$pcs_firstname>>, you dirty slut, you fo...
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey ${((s as any).pcs_firstname ?? 0)}, you dirty slut, you forgot to wash the cum off! Get out!"</font>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey chick, here for fun?"</font>
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey chick, here for fun?"</font>`);
      if (((s as any).Nestor ?? 0)?.['serve'] === 1) {
        // TODO-QSP: act 'Offer to serve him': Nestor['served'] = totminut
        scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_Serve'] }]);
      }
      scene.actions([
        { label: 'Just say hello and leave', goto: ['pav_shared_apt', 'start'] },
        { label: 'Chat with him', goto: ['pav_shared_nestor', 'Nestor_Chat'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  }
  scene.build();
}

export const pav_shared_nestor: LocationDef = {
  name: 'pav_shared_nestor',
  region: 'pavlovsk',
  enter: enter,
};
