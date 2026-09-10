import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $cum_names[0] = 'vagina'
  // TODO-QSP: $cum_names[1] = 'labia'
  // TODO-QSP: $cum_names[2] = 'panty_front'
  // TODO-QSP: $cum_names[3] = 'anus'
  // TODO-QSP: $cum_names[4] = 'butt'
  // TODO-QSP: $cum_names[5] = 'panty_back'
  // TODO-QSP: $cum_names[6] = 'clothes_groin'
  // TODO-QSP: $cum_names[7] = 'clothes'
  // TODO-QSP: $cum_names[8] = 'back'
  // TODO-QSP: $cum_names[9] = 'legs'
  // TODO-QSP: $cum_names[10] = 'arms'
  // TODO-QSP: $cum_names[11] = 'face'
  // TODO-QSP: $cum_names[12] = 'mouth'
  // TODO-QSP: $cum_names[13] = 'hands'
  // TODO-QSP: $cum_names[14] = 'stomach'
  // TODO-QSP: $cum_names[15] = 'tits'
  // TODO-QSP: $cum_names[16] = 'hair'
  // TODO-QSP: $cum_names[17] = 'condom_in_pussy'
  return;
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).stat['cum_count'] = ((s as any).stat['cum_count'] ?? 0) + (1);
  (s as any).condom_break = 0;
  if (((((s as any).npcID ?? 0)).length) > 1  &&  (('ABM').indexOf((qspUntranslated(s, "\u00000\u0000", { location: "cum_manage" })))) + 1 > 0  &&  ((s as any).isnum ?? 0)(((((s as any).npcID ?? 0)).slice((2)-1)))) {
    (s as any).cumnostd = 1;
  }
  (s as any).cumnostd = 0;
  if (((s as any).sexvolume ?? 0) <= 0) {
    (s as any).sexvolume = 0;
  }
  if ((!((s as any).sexspecpot ?? 0))) {
    (s as any).sexspecpot = ((s as any).npcSpermPot ?? 0);
  }
  if ((!((s as any).sexspecpot ?? 0))) {
    (s as any).sexspecpot = ((s as any).sexvolume ?? 0) * ((s as any).rand ?? 0)(250, 300);
  }
  if (((s as any).sexspecpot ?? 0) < 0) {
    (s as any).sexspecpot = 0;
  }
  if (((s as any).vibratorIN ?? 0) === 1  &&  (!((s as any).spafinloc ?? 0))) {
    (s as any).vibratorIN = 0;
  }
  if (((s as any).isprok ?? 0) === 1  &&  (!((s as any).spafinloc ?? 0))) {
    (s as any).isprok = 0;
  }
  if (((s as any).analPlugIn ?? 0) === 1  &&  ((s as any).spafinloc ?? 0) === 3) {
    (s as any).analPlugIn = 0;
  }
  (s as any).cumarrtemp = 0;
  if (((s as any).sexcontra ?? 0) === 0  &&  ((s as any).pillcon2 ?? 0) > 1000) {
    (s as any).sexcontra = 2;
  }
  if (((s as any).cumprecheck ?? 0) === 1  &&  (!((s as any).cumnostd ?? 0))) {
    (s as any).cumarrkno[String((s as any).cumarrtemp ?? 0)] = (-1);
    qspCall(s, 'dinSex', 'std_trigger');
  } else {
    (s as any).cumarrkno[String((s as any).cumarrtemp ?? 0)] = (-2);
    if (((s as any).sexpartkno ?? 0) === 1) {
      (s as any).cumarrkno[String((s as any).cumarrtemp ?? 0)] = 1;
    } else {
      (s as any).cumarrkno[String((s as any).cumarrtemp ?? 0)] = 0;
    }
    if (((s as any).spafinloc ?? 0) <= 0  &&  ((s as any).cumcondslip ?? 0) > 0) {
      if (((s as any).dick_length ?? 0) > ((s as any).cumcondslip_deep ?? 0)) {
        (s as any).cumcondslip_deep = ((s as any).dick_length ?? 0) + ((s as any).rand ?? 0)(0, 2);
      } else {
        (s as any).cumcondslip_deep = ((s as any).cumcondslip_deep ?? 0) + (Math.floor(Math.random() * 3) + 0);
      }
    }
    (s as any).sparrtemp = 0;
    if (((s as any).cumprecheck ?? 0) === 1) {
      if (((s as any).sexcontra ?? 0) < 3  &&  (!((s as any).spafinloc ?? 0))) {
        // TODO-QSP: $cumarrnam[cumarrtemp] = $npcID
        (s as any).cumarrcnt[String((s as any).cumarrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
        (s as any).cumarrppt[String((s as any).cumarrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
        (s as any).cumarrage[String((s as any).cumarrtemp ?? 0)] = 0;
        (s as any).cumarrdel[String((s as any).cumarrtemp ?? 0)] = 0;
        (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = ((s as any).sexcontra ?? 0);
        (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/12);
        if (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < ((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]) {
          (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
        }
      }
    } else {
      if (((s as any).spafinloc ?? 0) === 3) {
        if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
          (s as any).pcs_acp_unknown = ((s as any).pcs_acp_unknown ?? 0) + (1);
        } else {
          (s as any).pcs_acp_known = ((s as any).pcs_acp_known ?? 0) + (1);
        }
      }
      if (((s as any).spafinloc ?? 0) <= 0) {
        // TODO-QSP: $cumarrnam[cumarrtemp] = $npcID
        (s as any).cumarrage[String((s as any).cumarrtemp ?? 0)] = 0;
        (s as any).cumarrdel[String((s as any).cumarrtemp ?? 0)] = 0;
        (s as any).cumarrcnt[String((s as any).cumarrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
        (s as any).cumarrppt[String((s as any).cumarrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
        if (((s as any).sexcontra ?? 0) > 2) {
          if (((s as any).noprotect ?? 0) === 1) {
            (s as any).noprotect = 0;
            (s as any).sexcontra = 4;
          }
          if (((s as any).sexcontra ?? 0) === 3) {
            (s as any).temprand = Math.floor(Math.random() * 1001) + 0;
            (s as any).dick_wid = ((s as any).max ?? 0)(4, ((s as any).min ?? 0)(4 * ((s as any).dick_width ?? 0) / 3 - 8, 12));
            if (((s as any).dick_girth ?? 0) === 'skinny') {
              (s as any).dick_wid = 4;
            } else {
              (s as any).dick_wid = 5;
              if (((s as any).dick_girth ?? 0) === 'well proportioned') {
                (s as any).dick_wid = 6;
              } else {
                (s as any).dick_wid = 7;
                if (((s as any).dick_girth ?? 0) === 'thick') {
                  (s as any).dick_wid = 8;
                } else {
                  (s as any).dick_wid = 10;
                  if (((s as any).dick_girth ?? 0) === 'monstrous') {
                    (s as any).dick_wid = 12;
                  } else {
                    (s as any).dick_wid = 6;
                  }
                  (s as any).break_thresh = ((s as any).dick_wid ?? 0);
                  (s as any).break_thresh = ((s as any).break_thresh ?? 0) - (((s as any).pcs_vag ?? 0) / 4);
                  (s as any).break_thresh = ((s as any).break_thresh ?? 0) + (((s as any).dick_length ?? 0) / 4);
                  (s as any).slip_thresh = 36 - ((s as any).dick_wid ?? 0);
                  (s as any).slip_thresh = ((s as any).slip_thresh ?? 0) - ((((s as any).pcs_vag ?? 0) / 2));
                  (s as any).slip_thresh = ((s as any).slip_thresh ?? 0) - (((s as any).dick_length ?? 0) / 2);
                  if (((s as any).break_thresh ?? 0) < 1) {
                    (s as any).break_thresh = 1;
                  }
                  if (((s as any).npcCondom ?? 0) === 'extra_thin') {
                    // TODO-QSP: break_thresh *= 2
                  }
                  if (((s as any).slip_thresh ?? 0) < 4) {
                    (s as any).slip_thresh = 4;
                  }
                  (s as any).break_thresh = ((s as any).break_thresh ?? 0) + (((s as any).slip_thresh ?? 0));
                  (s as any).slip_thresh = 0;
                  if ((!((s as any).temprand ?? 0))) {
                    (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/4);
                    (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 3;
                  } else {
                    (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/2);
                    (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 4;
                    (s as any).sexcontra = 4;
                    (s as any).sparrage[String((s as any).sparrtemp ?? 0)] = 0;
                    (s as any).sparrloc[String((s as any).sparrtemp ?? 0)] = 0;
                    // TODO-QSP: $sparrnam[sparrtemp] = $npcID
                    (s as any).sparrcnt[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                    (s as any).sparrppt[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                    (s as any).sparrvol[String((s as any).sparrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumloc[0] = 1;
                    (s as any).condom_break = 1;
                    if (((s as any).npcCondom ?? 0) !== '') {
                    }
                    (s as any).stat['broken_condoms'] = ((s as any).stat['broken_condoms'] ?? 0) + (1);
                    (s as any).stat['last_broken_condom'] = ((s as any).daystart ?? 0);
                    (s as any).stat['cum_vagina_ml'] = ((s as any).stat['cum_vagina_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).sparridt[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                    (s as any).sparrslc[String((s as any).sparrtemp ?? 0)] = 0;
                    qspCall(s, 'dina', 'ferteggfather');
                    (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (5);
                    (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 3;
                    if (((s as any).npcCondom ?? 0) !== '') {
                    }
                  }
                  if (((s as any).sexcontra ?? 0) === 4) {
                    (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/2);
                    (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 4;
                    (s as any).sparrage[String((s as any).sparrtemp ?? 0)] = 0;
                    (s as any).sparrloc[String((s as any).sparrtemp ?? 0)] = 0;
                    // TODO-QSP: $sparrnam[sparrtemp] = $npcID
                    (s as any).sparrcnt[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                    (s as any).sparrppt[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                    (s as any).sparrvol[String((s as any).sparrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumloc[0] = 1;
                    (s as any).condom_break = 1;
                    (s as any).stat['cum_vagina_ml'] = ((s as any).stat['cum_vagina_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).sparridt[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                    (s as any).sparrslc[String((s as any).sparrtemp ?? 0)] = 0;
                    qspCall(s, 'dina', 'ferteggfather');
                  } else {
                    (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/200);
                    (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 5;
                    (s as any).cumcondslip = 1;
                    (s as any).cumcondsanb = ((s as any).cumarrtemp ?? 0);
                    (s as any).sparrage[String((s as any).sparrtemp ?? 0)] = 0;
                    (s as any).sparrloc[String((s as any).sparrtemp ?? 0)] = 17;
                    // TODO-QSP: $sparrnam[sparrtemp] = $npcID
                    (s as any).sparrcnt[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                    (s as any).sparrppt[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                    (s as any).sparrvol[String((s as any).sparrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumloc[0] = 1;
                    (s as any).sparridt[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                    (s as any).sparrslc[String((s as any).sparrtemp ?? 0)] = 0;
                    (s as any).cumcondslip = ((s as any).cumcondslip ?? 0) + (1);
                    if (((s as any).cumcondslip_deep ?? 0) <= 0) {
                      (s as any).cumcondslip_deep = 0;
                    }
                    if (((s as any).sparridt ?? 0)?.[String((s as any).sparrtemp ?? 0)] >= 0) {
                      (s as any).cumcondslip_aware = 1;
                    }
                    qspCall(s, 'dina', 'ferteggfather');
                    if (((s as any).sexcontra ?? 0) === 6) {
                    } else {
                      // TODO-QSP: break_thresh * 3
                      (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/3);
                      (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 6;
                      if (((s as any).temprand ?? 0) <= ((s as any).break_thresh ?? 0)) {
                        (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/2);
                        (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 4;
                        (s as any).sexcontra = 4;
                        (s as any).sparrage[String((s as any).sparrtemp ?? 0)] = 0;
                        (s as any).sparrloc[String((s as any).sparrtemp ?? 0)] = 0;
                        // TODO-QSP: $sparrnam[sparrtemp] = $boy
                        (s as any).sparrcnt[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                        (s as any).sparrppt[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                        (s as any).sparrvol[String((s as any).sparrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                        (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                        (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
                        (s as any).cumloc[0] = 1;
                        (s as any).condom_break = 1;
                        (s as any).stat['broken_condoms'] = ((s as any).stat['broken_condoms'] ?? 0) + (1);
                        (s as any).stat['last_broken_condom'] = ((s as any).daystart ?? 0);
                        (s as any).stat['cum_vagina_ml'] = ((s as any).stat['cum_vagina_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
                        (s as any).sparridt[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                        (s as any).sparrslc[String((s as any).sparrtemp ?? 0)] = 0;
                      }
                      if (((s as any).sexcontra ?? 0) === 7) {
                        // TODO-QSP: break_thresh * 3
                        (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/3);
                        (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 7;
                        if (((s as any).temprand ?? 0) <= ((s as any).break_thresh ?? 0)) {
                          (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/2);
                          (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = 4;
                          (s as any).sexcontra = 4;
                          (s as any).sparrage[String((s as any).sparrtemp ?? 0)] = 0;
                          (s as any).sparrloc[String((s as any).sparrtemp ?? 0)] = 0;
                          // TODO-QSP: $sparrnam[sparrtemp] = $boy
                          (s as any).sparrcnt[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                          (s as any).sparrppt[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                          (s as any).sparrvol[String((s as any).sparrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                          (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                          (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
                          (s as any).cumloc[0] = 1;
                          (s as any).condom_break = 1;
                          (s as any).stat['broken_condoms'] = ((s as any).stat['broken_condoms'] ?? 0) + (1);
                          (s as any).stat['last_broken_condom'] = ((s as any).daystart ?? 0);
                          (s as any).stat['cum_vagina_ml'] = ((s as any).stat['cum_vagina_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
                          (s as any).sparridt[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                          (s as any).sparrslc[String((s as any).sparrtemp ?? 0)] = 0;
                        }
                        qspCall(s, 'dina', 'ferteggfather');
                      }
                      (s as any).sparrage[String((s as any).sparrtemp ?? 0)] = 0;
                      (s as any).sparrloc[String((s as any).sparrtemp ?? 0)] = 0;
                      // TODO-QSP: $sparrnam[sparrtemp] = $npcID
                      (s as any).sparrcnt[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                      (s as any).sparrppt[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                      (s as any).sparrvol[String((s as any).sparrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                      (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                      (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
                      (s as any).cumloc[0] = 1;
                      (s as any).sparridt[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                      (s as any).sparrslc[String((s as any).sparrtemp ?? 0)] = 0;
                      (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 5 * 4);
                      (s as any).cumarrcon[String((s as any).cumarrtemp ?? 0)] = ((s as any).sexcontra ?? 0);
                      qspCall(s, 'dina', 'ferteggfather');
                    }
                    if (((s as any).spafinloc ?? 0) === 0  &&  (!((s as any).cumnostd ?? 0))) {
                      qspCall(s, 'dinSex', 'std_trigger');
                    }
                    if (((s as any).spafinloc ?? 0) === 0  &&  ((s as any).sexcontra ?? 0) !== 3) {
                      (s as any).stat['last_creampie'] = ((s as any).daystart ?? 0);
                      if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
                        (s as any).stat['last_creampie_hidden'] = ((s as any).daystart ?? 0);
                      } else {
                        (s as any).stat['last_creampie_known'] = ((s as any).daystart ?? 0);
                      }
                      // TODO-QSP: npc_last_creampie[$sparrnam[sparrtemp]] = daystart
                      if ((!((s as any).cumnostd ?? 0))) {
                        qspCall(s, 'dinSex', 'std_trigger');
                      }
                      if (((s as any).cycle ?? 0) > 3  ||  ((s as any).birth_control ?? 0)?.['safe'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
                        if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
                          (s as any).stat['creampies_safe_unknown'] = ((s as any).stat['creampies_safe_unknown'] ?? 0) + (1);
                        } else {
                          (s as any).stat['creampies_safe_known'] = ((s as any).stat['creampies_safe_known'] ?? 0) + (1);
                        }
                      } else {
                        if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
                          (s as any).stat['creampies_notsafe_unknown'] = ((s as any).stat['creampies_notsafe_unknown'] ?? 0) + (1);
                        } else {
                          (s as any).stat['creampies_notsafe_known'] = ((s as any).stat['creampies_notsafe_known'] ?? 0) + (1);
                        }
                        if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
                          (s as any).stat['creampies_risky_unknown'] = ((s as any).stat['creampies_risky_unknown'] ?? 0) + (1);
                        } else {
                          (s as any).stat['creampies_risky_known'] = ((s as any).stat['creampies_risky_known'] ?? 0) + (1);
                        }
                      }
                      if (((s as any).npcID ?? 0) === 'A28'  ||  ((s as any).npcID ?? 0) === 'A32'  ||  ((s as any).npcID ?? 0) === 'A34'  ||  ((s as any).npcID ?? 0) === 'A35') {
                        (s as any).pcs_cp_risk_daylastincest = ((s as any).daystart ?? 0);
                      }
                      // TODO-QSP: gs 'fetish', 'set_exp', 'creampie', stat['creampies_safe_known'] + stat['creampies_notsafe_known'] +...
                      (s as any).stat['total_creampies'] = ((s as any).stat ?? 0)?.['creampies_safe_known'] + ((s as any).stat ?? 0)?.['creampies_notsafe_known'] + ((s as any).stat ?? 0)?.['creampies_risky_known'];
                      if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] > 0  &&  (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1)) {
                        if (((s as any).orgasm_txt ?? 0) === '') {
                          if (((s as any).npcID ?? 0) === '') {
                          }
                        }
                        if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 2) {
                          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
                          if ((((s as any).cycle ?? 0) === 1  ||  ((s as any).cycle ?? 0) === 2)  &&  ((s as any).birth_control ?? 0)?.['safe'] === 0) {
                          }
                          qspCall(s, 'arousal', 'vaginal', (-50), 'creampie');
                        } else {
                          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
                          qspCall(s, 'arousal', 'vaginal', (-30), 'creampie');
                        }
                      } else {
                        qspCall(s, 'fetish', 'check_for_traits', 'creampie');
                      }
                    }
                    if (((s as any).sexcontra ?? 0) < 3) {
                      (s as any).sparrage[String((s as any).sparrtemp ?? 0)] = 0;
                      (s as any).sparrcnt[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                      if ((((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).clothingworntype ?? 0) === 'nude')  &&  (((s as any).spafinloc ?? 0) === 2  ||  ((s as any).spafinloc ?? 0) === 5)) {
                        (s as any).spafinloc = ((s as any).spafinloc ?? 0) - (1);
                      }
                      if (((s as any).clothingworntype ?? 0) === 'nude') {
                        if (((s as any).spafinloc ?? 0) === 6) {
                          (s as any).spafinloc = 4;
                          if ((!(Math.floor(Math.random() * 2) + 0))) {
                            (s as any).spafinloc = 1;
                          }
                        } else {
                          (s as any).spafinloc = 15;
                          if ((!(Math.floor(Math.random() * 2) + 0))) {
                            (s as any).spafinloc = 8;
                          }
                          if ((!(Math.floor(Math.random() * 2) + 0))) {
                            (s as any).spafinloc = 14;
                          }
                        }
                      }
                      (s as any).sparrloc[String((s as any).sparrtemp ?? 0)] = ((s as any).spafinloc ?? 0);
                      if (((s as any).spafinloc ?? 0) === 12  &&  ((s as any).pcs_breath ?? 0) === 1) {
                        (s as any).pcs_breath = 0;
                      }
                      if (((s as any).spafinloc ?? 0) === 12  &&  ((s as any).trait_vars ?? 0)?.['cumeater'] > 0  &&  (!(Math.floor(Math.random() * 4) + 0))) {
                        (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (2);
                        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (1);
                      }
                      // TODO-QSP: $sparrnam[sparrtemp] = $npcID
                      (s as any).sparrppt[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                      (s as any).sparrvol[String((s as any).sparrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                      (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                      if (((s as any).spafinloc ?? 0) === 3) {
                        (s as any).cumsumass = ((s as any).cumsumass ?? 0) + (((s as any).sexvolume ?? 0));
                      }
                      (s as any).sparridt[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                      (s as any).sparrslc[String((s as any).sparrtemp ?? 0)] = 0;
                      (s as any).cumloc[String((s as any).spafinloc ?? 0)] = 1;
                    }
                    if (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < ((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]) {
                      (s as any).cumarrcpt[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                    }
                    (s as any).sexpartkno = 0;
                    (s as any).sexunaware = 0;
                  }
                  if (((s as any).spafinloc ?? 0) === 3  &&  (!((s as any).cumnostd ?? 0))) {
                    qspCall(s, 'dinSex', 'std_trigger');
                  }
                  if (((s as any).spafinloc ?? 0) === 12  &&  (!((s as any).cumnostd ?? 0))) {
                    qspCall(s, 'dinSex', 'std_trigger_oral');
                  }
                  (s as any).cumprecheck = 0;
                  (s as any).spafinloc = 0;
                  (s as any).sexvolume = 0;
                  qspCall(s, 'din_bad', 'din_Update_Condom_Counts');
                  if (((s as any).cumsumass ?? 0) >= 60) {
                    (s as any).arrmodtmp = qspUntranslated(s, "arrpos('sparrloc', 3)", { location: "cum_manage" });
                    if (((s as any).sparrslc ?? 0)?.[String((s as any).arrmodtmp ?? 0)] <= 0) {
                      (s as any).sparrslc[String((s as any).arrmodtmp ?? 0)] = ((s as any).sparrslc[String((s as any).arrmodtmp ?? 0)] ?? 0) + (1);
                    }
                  }
                  if (((s as any).cumsumvag ?? 0) >= 60) {
                    (s as any).arrmodtmp = qspUntranslated(s, "arrpos('sparrloc', 0)", { location: "cum_manage" });
                    if (((s as any).sparrslc ?? 0)?.[String((s as any).arrmodtmp ?? 0)] <= 0) {
                      (s as any).sparrslc[String((s as any).arrmodtmp ?? 0)] = ((s as any).sparrslc[String((s as any).arrmodtmp ?? 0)] ?? 0) + (1);
                    }
                  }
                  if (((s as any).cumnpcID ?? 0) !== '') {
                  }
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const cum_manage: LocationDef = {
  name: 'cum_manage',
  region: 'other',
  locationType: 'kitchen',
  enter: enter,
};
