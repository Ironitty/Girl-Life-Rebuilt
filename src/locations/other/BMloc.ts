import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['pav_disco', ''] },
    { label: 'Dance', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: gs 'boystat', $bmNane[Tboynum]
    // TODO-QSP: $npc_usedname[$npclastcalled] = $npc_nickname[$npclastcalled]
    if (((s as any).bmFrend ?? 0)?.[String((s as any).Tboynum ?? 0)] === 0) {
      if (((s as any).bmHJ ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmBJ ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmSEX ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmANAL ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmGANG ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
        if (((s as any).bmHJ ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
        }
        if (((s as any).bmBJ ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
        }
        if (((s as any).bmSEX ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
        }
        if (((s as any).bmANAL ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
        }
        if (((s as any).bmGANG ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
        }
        // TODO-QSP: dynamic text: <<$niknameboy>> tells you "Remember me, <<$text2>>. I'm <<$boydesc>>."
        scene.text(`${((s as any).niknameboy ?? 0)} tells you "Remember me, ${((s as any).text2 ?? 0)}. I'm ${((s as any).boydesc ?? 0)}."`);
      } else {
        if (((s as any).bmKISS ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0  ||  ((s as any).bmTITS ?? 0)?.[String((s as any).Tboynum ?? 0)] > 0) {
          // TODO-QSP: dynamic text: <<$niknameboy>> tells you "Remember me, we hung out and drank together beer. I'm...
          scene.text(`${((s as any).niknameboy ?? 0)} tells you "Remember me, we hung out and drank together beer. I'm ${((s as any).boydesc ?? 0)}."`);
        } else {
          // TODO-QSP: dynamic text: <<$niknameboy>> tells you "Remember me, we danced together. I'm <<$boydesc>>."
          scene.text(`${((s as any).niknameboy ?? 0)} tells you "Remember me, we danced together. I'm ${((s as any).boydesc ?? 0)}."`);
        }
      }
    }
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 0) {
      // TODO-QSP: dynamic text: After the Dance <<$boydesc>> offers to go out and drink beer.
      scene.text(`After the Dance ${((s as any).boydesc ?? 0)} offers to go out and drink beer.`);
    }
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 1) {
      // TODO-QSP: dynamic text: After the Dance <<$boydesc>> offers to go hang out.
      scene.text(`After the Dance ${((s as any).boydesc ?? 0)} offers to go hang out.`);
    }
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 2) {
      // TODO-QSP: dynamic text: After the Dance <<$boydesc>> offers to go to his hotel.
      scene.text(`After the Dance ${((s as any).boydesc ?? 0)} offers to go to his hotel.`);
    }
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'sprt', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay');
    qspCall(s, 'stat', '');
  }, goto: ['pav_disco', ''] },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).boynumBlock = 1;
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 0) {
      (s as any).gdk_nice_guy = 1;
      scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'outside'] }]);
    }
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'outside'] }]);
    }
    if (((s as any).bmTip ?? 0)?.[String((s as any).Tboynum ?? 0)] === 2) {
      (s as any).DPtipe = 2;
      scene.actions([{ label: 'Continue', goto: ['pav_disco_sex', 'hotel'] }]);
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
