import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: <h3><font color=#<<$Yakov['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Yakov ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
  // TODO-QSP: $func('npc_notes', $boy)
  if (((s as any).Yakov ?? 0)?.['hadSex'] === 1) {
    // TODO-QSP: dynamic text: As you know very well, <<$npc_firstname[$boy]>> has <<npc_dick[$boy]>> cm long <...
    scene.text(`As you know very well, ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} has ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long <a href="exec:gt 'pav_shared_yakov', 'yakov_dick'">dick</a> with always smoothly shaved pubic hair.`);
  }
  // TODO-QSP: dynamic text: <b>Today he looks to be in a <<$Yakov['mood_txt']>> mood.</b>
  scene.text(`<b>Today he looks to be in a ${((s as any).Yakov ?? 0)?.['mood_txt']} mood.</b>`);
  if ((((s as any).totminut ?? 0) - ((s as any).Yakov ?? 0)?.['served']) < 180) {
    (s as any).Yakov['serve'] = 0;
    // TODO-QSP: dynamic text: It's not even been 3 hours since you last served <<$npc_firstname[$boy]>>
    scene.text(`It's not even been 3 hours since you last served ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}`);
  } else {
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
      (s as any).Yakov['serve'] = 1;
    }
  }
  if (((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0) {
    // TODO-QSP: dynamic text: <font color=#<<$Yakov['font']>>>"<<$pcs_firstname>> is that a cum? Please go was...
    scene.text(`<font color=#${((s as any).Yakov ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)} is that a cum? Please go wash yourself."</font>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <font color=#<<$Yakov['font']>>>"<<$pcs_firstname>> is that a cum on your clothe...
    scene.text(`<font color=#${((s as any).Yakov ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)} is that a cum on your clothes? Please go change or at least strip it down."</font>`);
    if ((((s as any).cumloc ?? 0)[14] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0  ||  ((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0)  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <font color=#<<$Yakov['font']>>>"<<$pcs_firstname>> did you just have sex with t...
      scene.text(`<font color=#${((s as any).Yakov ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)} did you just have sex with the other guys? Because you forgot to wash out the cum!"</font>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <font color=#<<$Yakov['font']>>>"Hey sweetie, how are you?"</font>
      scene.text(`<font color=#${((s as any).Yakov ?? 0)?.['font']}>"Hey sweetie, how are you?"</font>`);
      if (((s as any).Yakov ?? 0)?.['serve'] === 1) {
        // TODO-QSP: act 'Offer him to serve': Yakov['served'] = totminut
        scene.actions([{ label: 'Continue', goto: ['pav_shared_yakov', 'Yakov_Serve'] }]);
      }
      scene.actions([
        { label: 'Just say hello and leave', goto: ['pav_shared_apt', 'start'] },
        { label: 'Chat with him', goto: ['pav_shared_yakov', 'Yakov_Chat'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  }
  scene.build();
}

export const pav_shared_yakov: LocationDef = {
  name: 'pav_shared_yakov',
  title: 'As you accidentally turn around, he gazes between your assch',
  region: 'pavlovsk',
  enter: enter,
};
