import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'boyStat', 'A266');
  // TODO-QSP: dynamic text: <h3><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg');
  // TODO-QSP: $func('npc_notes', $boy)
  if (((s as any).Oleg ?? 0)?.['hadSex'] === 1) {
    // TODO-QSP: dynamic text: As you know very well, <<$npc_firstname[$boy]>> has a <<$npc_thdick[$boy]>> <<np...
    scene.text(`As you know very well, ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} has a ${((s as any).npc_thdick ?? 0)?.[String((s as any).boy ?? 0)]} ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long <a href="exec:gt 'pav_shared_oleg', 'oleg_dick'">dick</a> with wildly growing pubic hair.`);
  }
  // TODO-QSP: dynamic text: <b>Today he looks to be in a <<$Oleg['mood_txt']>> mood.</b>
  scene.text(`<b>Today he looks to be in a ${((s as any).Oleg ?? 0)?.['mood_txt']} mood.</b>`);
  if ((((s as any).totminut ?? 0) - ((s as any).Oleg ?? 0)?.['served']) < 180) {
    (s as any).Oleg['serve'] = 0;
    // TODO-QSP: dynamic text: It's not even been 3 hours since you last served <<$npc_firstname[$boy]>>
    scene.text(`It's not even been 3 hours since you last served ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}`);
  } else {
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
      (s as any).Oleg['serve'] = 1;
    }
  }
  if (((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cumloc ?? 0)[10] >0  ||  ((s as any).cumloc ?? 0)[9] >0) {
    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hello <<$pcs_firstname>>, I think you have sperm...
    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hello ${((s as any).pcs_firstname ?? 0)}, I think you have sperm on you. Please go wash it off."</a>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hello <<$pcs_firstname>>, I think you have sperm...
    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hello ${((s as any).pcs_firstname ?? 0)}, I think you have sperm on your clothes. Please go change."</a>`);
    if ((((s as any).cumloc ?? 0)[14] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0  ||  ((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0)  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hello <<$pcs_firstname>>, why are you naked? And...
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hello ${((s as any).pcs_firstname ?? 0)}, why are you naked? And is that sperm on you? It's gross, please go wash yourself and put on some clothes."</a>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hello <<$pcs_firstname>>, what do you need?"</a>
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hello ${((s as any).pcs_firstname ?? 0)}, what do you need?"</a>`);
      if (((s as any).Oleg ?? 0)?.['serve'] === 1) {
        // TODO-QSP: act 'Offer him to serve': Oleg['served'] = totminut
        scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Serve'] }]);
      }
      scene.actions([
        { label: 'Just say hello and leave', goto: ['pav_shared_apt', 'start'] },
        { label: 'Chat with him', goto: ['pav_shared_oleg', 'Oleg_Chat'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  }
  scene.build();
}

export const pav_shared_oleg: LocationDef = {
  name: 'pav_shared_oleg',
  title: 'As you accidentally turn around, he gazes between your assch',
  region: 'pavlovsk',
  enter: enter,
};
