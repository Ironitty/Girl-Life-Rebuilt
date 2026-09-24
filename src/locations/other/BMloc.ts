import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['pav_disco', ''] },
    { label: 'Dance', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'boystat', '', (((st as any).bmNane ?? 0)?.[String((st as any).Tboynum ?? 0)] ?? 0));
    (st as any).hookupboy = (((st as any).bmNane ?? 0)?.[String((st as any).Tboynum ?? 0)] ?? 0);
    // TODO-QSP: $npc_usedname[$npclastcalled] = $npc_nickname[$npclastcalled]
    if (((st as any).bmFrend ?? 0)?.[String((st as any).Tboynum ?? 0)] === 0) {
      if (((st as any).bmHJ ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0  ||  ((st as any).bmBJ ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0  ||  ((st as any).bmSEX ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0  ||  ((st as any).bmANAL ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0  ||  ((st as any).bmGANG ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0) {
        if (((st as any).bmHJ ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0) {
          (st as any).text2 = 'you gave me a hand job.';
        }
        if (((st as any).bmBJ ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0) {
          (st as any).text2 = 'you gave me a blowjob.';
        }
        if (((st as any).bmSEX ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0) {
          (st as any).text2 = 'you let me fuck you.';
        }
        if (((st as any).bmANAL ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0) {
          (st as any).text2 = 'you let me fuck you in the ass.';
        }
        if (((st as any).bmGANG ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0) {
          (st as any).text2 = 'you let me and my friend fuck you.';
        }
        // TODO-QSP: dynamic text: <<$niknameboy>> tells you "Remember me, <<$text2>>. I''m <<$boydesc>>."
        scene.text(`${((st as any).niknameboy ?? '')} tells you "Remember me, ${((st as any).text2 ?? '')}. I'm ${((st as any).boydesc ?? '')}."`);
      } else {
        if (((st as any).bmKISS ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0  ||  ((st as any).bmTITS ?? 0)?.[String((st as any).Tboynum ?? 0)] > 0) {
          // TODO-QSP: dynamic text: <<$niknameboy>> tells you "Remember me, we hung out and drank together beer. I''...
          scene.text(`${((st as any).niknameboy ?? '')} tells you "Remember me, we hung out and drank together beer. I'm ${((st as any).boydesc ?? '')}."`);
        } else {
          // TODO-QSP: dynamic text: <<$niknameboy>> tells you "Remember me, we danced together. I''m <<$boydesc>>."
          scene.text(`${((st as any).niknameboy ?? '')} tells you "Remember me, we danced together. I'm ${((st as any).boydesc ?? '')}."`);
        }
      }
    }
    if (((st as any).bmTip ?? 0)?.[String((st as any).Tboynum ?? 0)] === 0) {
      // TODO-QSP: dynamic text: After the Dance <<$boydesc>> offers to go out and drink beer.
      scene.text(`After the Dance ${((st as any).boydesc ?? '')} offers to go out and drink beer.`);
    }
    if (((st as any).bmTip ?? 0)?.[String((st as any).Tboynum ?? 0)] === 1) {
      // TODO-QSP: dynamic text: After the Dance <<$boydesc>> offers to go hang out.
      scene.text(`After the Dance ${((st as any).boydesc ?? '')} offers to go hang out.`);
    }
    if (((st as any).bmTip ?? 0)?.[String((st as any).Tboynum ?? 0)] === 2) {
      // TODO-QSP: dynamic text: After the Dance <<$boydesc>> offers to go to his hotel.
      scene.text(`After the Dance ${((st as any).boydesc ?? '')} offers to go to his hotel.`);
    }
    qspCall(st, 'willpower', 'drink', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'sprt', (Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'willpower', 'drink', 'resist');
    qspCall(st, 'willpower', 'pay');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_disco', '');
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).boynumBlock = 1;
    if (((st as any).bmTip ?? 0)?.[String((st as any).Tboynum ?? 0)] === 0) {
      (st as any).gdk_nice_guy = 1;
      qspGoto(st, 'pav_disco_sex', 'outside');
    }
    if (((st as any).bmTip ?? 0)?.[String((st as any).Tboynum ?? 0)] === 1) {
      qspGoto(st, 'pav_disco_sex', 'outside');
    }
    if (((st as any).bmTip ?? 0)?.[String((st as any).Tboynum ?? 0)] === 2) {
      (st as any).DPtipe = 2;
      qspGoto(st, 'pav_disco_sex', 'hotel');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const BMloc: LocationDef = {
  name: 'BMloc',
  region: 'other',
  enter: enter,
};
