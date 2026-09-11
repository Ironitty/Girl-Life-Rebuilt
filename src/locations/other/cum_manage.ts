import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

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
  ((s as any).stat ?? {})['cum_count'] = (((s as any).stat ?? {})['cum_count'] ?? 0) + (1);
  (s as any).condom_break = 0;
  if (((((s as any).npcID ?? 0)).length) > 1  &&  (('ABM').indexOf((((((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1)))))) + 1 > 0  &&  !isNaN(((((s as any).npcID ?? 0)).slice((2)-1))) && ((((s as any).npcID ?? 0)).slice((2)-1)) !== '') {
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
    (s as any).sexspecpot = ((s as any).sexvolume ?? 0) * (Math.floor(Math.random() * 51) + 250);
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
    ((s as any).cumarrkno ?? {})[String((s as any).cumarrtemp ?? 0)] = (-1);
    qspCall(s, 'dinSex', 'std_trigger');
  } else {
    if (((s as any).sexunaware ?? 0) > 0) {
      ((s as any).cumarrkno ?? {})[String((s as any).cumarrtemp ?? 0)] = (-2);
    } else {
      if (((s as any).sexpartkno ?? 0) === 1) {
        ((s as any).cumarrkno ?? {})[String((s as any).cumarrtemp ?? 0)] = 1;
      } else {
        ((s as any).cumarrkno ?? {})[String((s as any).cumarrtemp ?? 0)] = 0;
      }
    }
  }
  if (((s as any).spafinloc ?? 0) <= 0  &&  ((s as any).cumcondslip ?? 0) > 0) {
    if (((s as any).dick_length ?? 0) > ((s as any).cumcondslip_deep ?? 0)) {
      (s as any).cumcondslip_deep = ((s as any).dick_length ?? 0) + (Math.floor(Math.random() * 3) + 0);
    } else {
      (s as any).cumcondslip_deep = ((s as any).cumcondslip_deep ?? 0) + (Math.floor(Math.random() * 3) + 0);
    }
  }
  (s as any).sparrtemp = 0;
  if (((s as any).cumprecheck ?? 0) === 1) {
    if (((s as any).sexcontra ?? 0) < 3  &&  (!((s as any).spafinloc ?? 0))) {
      // TODO-QSP: $cumarrnam[cumarrtemp] = $npcID
      ((s as any).cumarrcnt ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
      ((s as any).cumarrppt ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
      ((s as any).cumarrage ?? {})[String((s as any).cumarrtemp ?? 0)] = 0;
      ((s as any).cumarrdel ?? {})[String((s as any).cumarrtemp ?? 0)] = 0;
      ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).sexcontra ?? 0);
      ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/12);
      if (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < ((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]) {
        ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
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
      ((s as any).cumarrage ?? {})[String((s as any).cumarrtemp ?? 0)] = 0;
      ((s as any).cumarrdel ?? {})[String((s as any).cumarrtemp ?? 0)] = 0;
      ((s as any).cumarrcnt ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
      ((s as any).cumarrppt ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
      if (((s as any).sexcontra ?? 0) > 2) {
        if (((s as any).noprotect ?? 0) === 1) {
          (s as any).noprotect = 0;
          (s as any).sexcontra = 4;
        }
        if (((s as any).sexcontra ?? 0) === 3) {
          (s as any).temprand = Math.floor(Math.random() * 1001) + 0;
          (s as any).dick_wid = Math.max(4, Math.min(4 * ((s as any).dick_width ?? 0) / 3 - 8, 12));
          if (((s as any).dick_girth ?? 0) === 'skinny') {
            (s as any).dick_wid = 4;
          } else {
            if (((s as any).dick_girth ?? 0) === 'slim') {
              (s as any).dick_wid = 5;
            } else {
              if (((s as any).dick_girth ?? 0) === 'well proportioned') {
                (s as any).dick_wid = 6;
              } else {
                if (((s as any).dick_girth ?? 0) === 'thicker than average') {
                  (s as any).dick_wid = 7;
                } else {
                  if (((s as any).dick_girth ?? 0) === 'thick') {
                    (s as any).dick_wid = 8;
                  } else {
                    if (((s as any).dick_girth ?? 0) === 'massive') {
                      (s as any).dick_wid = 10;
                    } else {
                      if (((s as any).dick_girth ?? 0) === 'monstrous') {
                        (s as any).dick_wid = 12;
                      } else {
                        (s as any).dick_wid = 6;
                      }
                    }
                  }
                }
              }
            }
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
            ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/4);
            ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 3;
          } else {
            if (((s as any).temprand ?? 0) <= ((s as any).break_thresh ?? 0)) {
              ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/2);
              ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 4;
              (s as any).sexcontra = 4;
              ((s as any).sparrage ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
              ((s as any).sparrloc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
              // TODO-QSP: $sparrnam[sparrtemp] = $npcID
              ((s as any).sparrcnt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
              ((s as any).sparrppt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
              ((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] = (((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
              (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
              (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
              ((s as any).cumloc ?? {})[0] = 1;
              (s as any).condom_break = 1;
              if (((s as any).npcCondom ?? 0) !== '') {
              }
              ((s as any).stat ?? {})['broken_condoms'] = (((s as any).stat ?? {})['broken_condoms'] ?? 0) + (1);
              ((s as any).stat ?? {})['last_broken_condom'] = ((s as any).daystart ?? 0);
              ((s as any).stat ?? {})['cum_vagina_ml'] = (((s as any).stat ?? {})['cum_vagina_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
              ((s as any).sparridt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              ((s as any).sparrslc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
              qspCall(s, 'dina', 'ferteggfather');
            } else {
              ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (5);
              ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 3;
              if (((s as any).npcCondom ?? 0) !== '') {
              }
            }
          }
        } else {
          if (((s as any).sexcontra ?? 0) === 4) {
            ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/2);
            ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 4;
            ((s as any).sparrage ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
            ((s as any).sparrloc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
            // TODO-QSP: $sparrnam[sparrtemp] = $npcID
            ((s as any).sparrcnt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
            ((s as any).sparrppt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
            ((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] = (((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
            (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
            (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
            ((s as any).cumloc ?? {})[0] = 1;
            (s as any).condom_break = 1;
            ((s as any).stat ?? {})['cum_vagina_ml'] = (((s as any).stat ?? {})['cum_vagina_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
            ((s as any).sparridt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
            ((s as any).sparrslc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
            qspCall(s, 'dina', 'ferteggfather');
          } else {
            if (((s as any).sexcontra ?? 0) === 5) {
              ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/200);
              ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 5;
              (s as any).cumcondslip = 1;
              (s as any).cumcondsanb = ((s as any).cumarrtemp ?? 0);
              ((s as any).sparrage ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
              ((s as any).sparrloc ?? {})[String((s as any).sparrtemp ?? 0)] = 17;
              // TODO-QSP: $sparrnam[sparrtemp] = $npcID
              ((s as any).sparrcnt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
              ((s as any).sparrppt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
              ((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] = (((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
              (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
              (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
              ((s as any).cumloc ?? {})[0] = 1;
              ((s as any).sparridt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              ((s as any).sparrslc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
              (s as any).cumcondslip = ((s as any).cumcondslip ?? 0) + (1);
              if (((s as any).cumcondslip_deep ?? 0) <= 0) {
                (s as any).cumcondslip_deep = 0;
              }
              if (((s as any).sparridt ?? 0)?.[String((s as any).sparrtemp ?? 0)] >= 0) {
                (s as any).cumcondslip_aware = 1;
              }
              qspCall(s, 'dina', 'ferteggfather');
            } else {
              if (((s as any).sexcontra ?? 0) === 6) {
              } else {
                if (((s as any).sexcontra ?? 0) === 6  ||  ((s as any).npcCondom ?? 0) === 'sabotaged') {
                  // TODO-QSP: break_thresh * 3
                  ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/3);
                  ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 6;
                  if (((s as any).temprand ?? 0) <= ((s as any).break_thresh ?? 0)) {
                    ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/2);
                    ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 4;
                    (s as any).sexcontra = 4;
                    ((s as any).sparrage ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
                    ((s as any).sparrloc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
                    // TODO-QSP: $sparrnam[sparrtemp] = $boy
                    ((s as any).sparrcnt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                    ((s as any).sparrppt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                    ((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] = (((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                    (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
                    ((s as any).cumloc ?? {})[0] = 1;
                    (s as any).condom_break = 1;
                    ((s as any).stat ?? {})['broken_condoms'] = (((s as any).stat ?? {})['broken_condoms'] ?? 0) + (1);
                    ((s as any).stat ?? {})['last_broken_condom'] = ((s as any).daystart ?? 0);
                    ((s as any).stat ?? {})['cum_vagina_ml'] = (((s as any).stat ?? {})['cum_vagina_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
                    ((s as any).sparridt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                    ((s as any).sparrslc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
                  }
                } else {
                  if (((s as any).sexcontra ?? 0) === 7) {
                    // TODO-QSP: break_thresh * 3
                    ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/3);
                    ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 7;
                    if (((s as any).temprand ?? 0) <= ((s as any).break_thresh ?? 0)) {
                      ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]/2);
                      ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = 4;
                      (s as any).sexcontra = 4;
                      ((s as any).sparrage ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
                      ((s as any).sparrloc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
                      // TODO-QSP: $sparrnam[sparrtemp] = $boy
                      ((s as any).sparrcnt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
                      ((s as any).sparrppt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
                      ((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] = (((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
                      (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
                      (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
                      ((s as any).cumloc ?? {})[0] = 1;
                      (s as any).condom_break = 1;
                      ((s as any).stat ?? {})['broken_condoms'] = (((s as any).stat ?? {})['broken_condoms'] ?? 0) + (1);
                      ((s as any).stat ?? {})['last_broken_condom'] = ((s as any).daystart ?? 0);
                      ((s as any).stat ?? {})['cum_vagina_ml'] = (((s as any).stat ?? {})['cum_vagina_ml'] ?? 0) + (((s as any).sexvolume ?? 0));
                      ((s as any).sparridt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                      ((s as any).sparrslc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
                    }
                    qspCall(s, 'dina', 'ferteggfather');
                  }
                }
              }
            }
          }
        }
      } else {
        ((s as any).sparrage ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
        ((s as any).sparrloc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
        // TODO-QSP: $sparrnam[sparrtemp] = $npcID
        ((s as any).sparrcnt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
        ((s as any).sparrppt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
        ((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] = (((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
        (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
        (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (((s as any).sexvolume ?? 0));
        ((s as any).cumloc ?? {})[0] = 1;
        ((s as any).sparridt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
        ((s as any).sparrslc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
        ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = (((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 5 * 4);
        ((s as any).cumarrcon ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).sexcontra ?? 0);
        qspCall(s, 'dina', 'ferteggfather');
      }
      if (((s as any).spafinloc ?? 0) === 0  &&  (!((s as any).cumnostd ?? 0))) {
        qspCall(s, 'dinSex', 'std_trigger');
      }
      if (((s as any).spafinloc ?? 0) === 0  &&  ((s as any).sexcontra ?? 0) !== 3) {
        ((s as any).stat ?? {})['last_creampie'] = ((s as any).daystart ?? 0);
        if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
          ((s as any).stat ?? {})['last_creampie_hidden'] = ((s as any).daystart ?? 0);
        } else {
          ((s as any).stat ?? {})['last_creampie_known'] = ((s as any).daystart ?? 0);
        }
        // TODO-QSP: npc_last_creampie[$sparrnam[sparrtemp]] = daystart
        if ((!((s as any).cumnostd ?? 0))) {
          qspCall(s, 'dinSex', 'std_trigger');
        }
        if (((s as any).cycle ?? 0) > 3  ||  ((s as any).birth_control ?? 0)?.['safe'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
          if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
            ((s as any).stat ?? {})['creampies_safe_unknown'] = (((s as any).stat ?? {})['creampies_safe_unknown'] ?? 0) + (1);
          } else {
            ((s as any).stat ?? {})['creampies_safe_known'] = (((s as any).stat ?? {})['creampies_safe_known'] ?? 0) + (1);
          }
        } else {
          if (((s as any).cycle ?? 0) === 0  ||  ((s as any).cycle ?? 0) === 3) {
            if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
              ((s as any).stat ?? {})['creampies_notsafe_unknown'] = (((s as any).stat ?? {})['creampies_notsafe_unknown'] ?? 0) + (1);
            } else {
              ((s as any).stat ?? {})['creampies_notsafe_known'] = (((s as any).stat ?? {})['creampies_notsafe_known'] ?? 0) + (1);
            }
          } else {
            if (((s as any).sexunaware ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 6) {
              ((s as any).stat ?? {})['creampies_risky_unknown'] = (((s as any).stat ?? {})['creampies_risky_unknown'] ?? 0) + (1);
            } else {
              ((s as any).stat ?? {})['creampies_risky_known'] = (((s as any).stat ?? {})['creampies_risky_known'] ?? 0) + (1);
            }
          }
        }
        if (((s as any).npcID ?? 0) === 'A28'  ||  ((s as any).npcID ?? 0) === 'A32'  ||  ((s as any).npcID ?? 0) === 'A34'  ||  ((s as any).npcID ?? 0) === 'A35') {
          (s as any).pcs_cp_risk_daylastincest = ((s as any).daystart ?? 0);
        }
        // TODO-QSP: gs 'fetish', 'set_exp', 'creampie', stat['creampies_safe_known'] + stat['creampies_notsafe_known'] +...
        ((s as any).stat ?? {})['total_creampies'] = ((s as any).stat ?? {})?.['creampies_safe_known'] + ((s as any).stat ?? {})?.['creampies_notsafe_known'] + ((s as any).stat ?? {})?.['creampies_risky_known'];
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
            if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 1) {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
              qspCall(s, 'arousal', 'vaginal', (-30), 'creampie');
            }
          }
        } else {
          qspCall(s, 'fetish', 'check_for_traits', 'creampie');
        }
      }
    } else {
      if (((s as any).sexcontra ?? 0) < 3) {
        ((s as any).sparrage ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
        ((s as any).sparrcnt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).stat ?? 0)?.['cum_count'];
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
            if (((s as any).spafinloc ?? 0) === 7) {
              (s as any).spafinloc = 15;
              if ((!(Math.floor(Math.random() * 2) + 0))) {
                (s as any).spafinloc = 8;
              }
              if ((!(Math.floor(Math.random() * 2) + 0))) {
                (s as any).spafinloc = 14;
              }
            }
          }
        }
        ((s as any).sparrloc ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).spafinloc ?? 0);
        if (((s as any).spafinloc ?? 0) === 12  &&  ((s as any).pcs_breath ?? 0) === 1) {
          (s as any).pcs_breath = 0;
        }
        if (((s as any).spafinloc ?? 0) === 12  &&  ((s as any).trait_vars ?? 0)?.['cumeater'] > 0  &&  (!(Math.floor(Math.random() * 4) + 0))) {
          (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (2);
          (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (1);
        }
        // TODO-QSP: $sparrnam[sparrtemp] = $npcID
        ((s as any).sparrppt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).sexspecpot ?? 0);
        ((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] = (((s as any).sparrvol ?? {})[String((s as any).sparrtemp ?? 0)] ?? 0) + (((s as any).sexvolume ?? 0));
        (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).sexvolume ?? 0));
        if (((s as any).spafinloc ?? 0) === 3) {
          (s as any).cumsumass = ((s as any).cumsumass ?? 0) + (((s as any).sexvolume ?? 0));
        }
        ((s as any).sparridt ?? {})[String((s as any).sparrtemp ?? 0)] = ((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
        ((s as any).sparrslc ?? {})[String((s as any).sparrtemp ?? 0)] = 0;
        ((s as any).cumloc ?? {})[String((s as any).spafinloc ?? 0)] = 1;
      }
    }
    if (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < ((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarrtemp ?? 0)]) {
      ((s as any).cumarrcpt ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).cumarrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
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
      ((s as any).sparrslc ?? {})[String((s as any).arrmodtmp ?? 0)] = (((s as any).sparrslc ?? {})[String((s as any).arrmodtmp ?? 0)] ?? 0) + (1);
    }
  }
  if (((s as any).cumsumvag ?? 0) >= 60) {
    (s as any).arrmodtmp = qspUntranslated(s, "arrpos('sparrloc', 0)", { location: "cum_manage" });
    if (((s as any).sparrslc ?? 0)?.[String((s as any).arrmodtmp ?? 0)] <= 0) {
      ((s as any).sparrslc ?? {})[String((s as any).arrmodtmp ?? 0)] = (((s as any).sparrslc ?? {})[String((s as any).arrmodtmp ?? 0)] ?? 0) + (1);
    }
  }
  if (((s as any).cumnpcID ?? 0) !== '') {
  }
  return;
  scene.build();
}

function enterCumCompute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).Enable_clearcum ?? 0) > 0) {
    qspCall(s, 'cum_cleanup', 'reset');
  }
  if (Object.keys((s as any).sparrvol ?? {}).length > 0) {
    (s as any).idx = 0;
    // TODO-QSP: :cum_c_spermloop
    (s as any).temp_cum_manage_i = ((s as any).sparrloc ?? 0)?.[String((s as any).idx ?? 0)];
    if ((!((s as any).temp_cum_manage_i ?? 0))) {
      (s as any).temp_cum_manage_j = 4;
    } else {
      if (((s as any).temp_cum_manage_i ?? 0) === 3) {
        (s as any).temp_cum_manage_j = 4;
      } else {
        if (((s as any).temp_cum_manage_i ?? 0) === 12) {
          (s as any).temp_cum_manage_j = 0;
        } else {
          if (((s as any).temp_cum_manage_i ?? 0) === 17) {
            if (((s as any).sparrage ?? 0)?.[String((s as any).idx ?? 0)] <= 12) {
              (s as any).temp_cum_manage_j = 5;
            } else {
              if (((s as any).sparrage ?? 0)?.[String((s as any).idx ?? 0)] <= 48) {
                (s as any).temp_cum_manage_j = 6;
              } else {
                (s as any).temp_cum_manage_j = 7;
              }
            }
          } else {
            if (((s as any).sparrage ?? 0)?.[String((s as any).idx ?? 0)] <= 1) {
              (s as any).temp_cum_manage_j = 1;
            } else {
              if (((s as any).sparrage ?? 0)?.[String((s as any).idx ?? 0)] <= 5) {
                (s as any).temp_cum_manage_j = 2;
              } else {
                (s as any).temp_cum_manage_j = 3;
              }
            }
          }
        }
      }
    }
    ((s as any).cumvolume ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] = (((s as any).cumvolume ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] ?? 0) + (((s as any).sparrvol ?? 0)?.[String((s as any).idx ?? 0)]);
    if (((s as any).sparrvol ?? 0)?.[String((s as any).idx ?? 0)] > 0) {
      if (((s as any).sparridt ?? 0)?.[String((s as any).idx ?? 0)] === 0) {
        ((s as any).cumcount ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] = (((s as any).cumcount ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] ?? 0) + (1);
      } else {
        if (((s as any).sparridt ?? 0)?.[String((s as any).idx ?? 0)] === 1) {
          if (((s as any).knownguy ?? 0)[((s as any).temp_cum_manage_i ?? 0) + ':' + ((s as any).temp_cum_manage_j ?? 0)] > 0) {
            (s as any).gchk = 0;
            // TODO-QSP: :cum_c_sameguy
            if (((s as any).cumowner ?? 0)[((s as any).temp_cum_manage_i ?? 0) + ':' + ((s as any).temp_cum_manage_j ?? 0) + ':' + ((s as any).gchk ?? 0)] !== ((s as any).sparrnam ?? 0)?.[String((s as any).idx ?? 0)]  &&  ((s as any).gchk ?? 0) <= ((s as any).knownguy ?? 0)[((s as any).temp_cum_manage_i ?? 0) + ':' + ((s as any).temp_cum_manage_j ?? 0)]) {
              (s as any).gchk = ((s as any).gchk ?? 0) + (1);
              // TODO-QSP: jump 'cum_c_sameguy'
            }
            if (((s as any).gchk ?? 0) > ((s as any).knownguy ?? 0)[((s as any).temp_cum_manage_i ?? 0) + ':' + ((s as any).temp_cum_manage_j ?? 0)]) {
              // TODO-QSP: $cumowner['<<temp_cum_manage_i>>:<<temp_cum_manage_j>>:<<knownguy[''<<temp_cum_manage_i>>:<<temp_cum...
              ((s as any).knownguy ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] = (((s as any).knownguy ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] ?? 0) + (1);
              ((s as any).cumcount ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] = (((s as any).cumcount ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] ?? 0) + (1);
            }
          } else {
            // TODO-QSP: $cumowner['<<temp_cum_manage_i>>:<<temp_cum_manage_j>>:<<knownguy[''<<temp_cum_manage_i>>:<<temp_cum...
            ((s as any).knownguy ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] = (((s as any).knownguy ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] ?? 0) + (1);
            ((s as any).cumcount ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] = (((s as any).cumcount ?? {})['' + String((s as any).temp_cum_manage_i || '') + ':' + String((s as any).temp_cum_manage_j || '') + ''] ?? 0) + (1);
          }
        }
      }
    }
    (s as any).idx = ((s as any).idx ?? 0) - (1);
    if (((s as any).idx ?? 0) >= 0) {
      // TODO-QSP: jump 'cum_c_spermloop'
    }
  }
  (s as any).cumsumbod = 0;
  (s as any).cumsumvag = 0;
  (s as any).cumsumass = 0;
  (s as any).temp_cum_manage_i = 0;
  // TODO-QSP: :cum_c_locloop
  (s as any).temp_cum_manage_j = 0;
  // TODO-QSP: :cum_c_ageloop
  if (((s as any).cumvolume ?? 0)[((s as any).temp_cum_manage_i ?? 0) + ':' + ((s as any).temp_cum_manage_j ?? 0)] > 0) {
    ((s as any).cumloc ?? {})[String((s as any).temp_cum_manage_i ?? 0)] = 1;
    ((s as any).cumvol ?? {})[String((s as any).temp_cum_manage_i ?? 0)] = ((s as any).cumvolume ?? 0)?.[String(((s as any).temp_cum_manage_i ?? 0)) + ':' + String(((s as any).temp_cum_manage_j ?? 0))];
    if (((s as any).temp_cum_manage_j ?? 0) === 4) {
      (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).cumvolume ?? 0)?.[String(((s as any).temp_cum_manage_i ?? 0)) + ':' + String(((s as any).temp_cum_manage_j ?? 0))]);
      (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + ((((!((s as any).temp_cum_manage_i ?? 0))) ? (((s as any).cumvolume ?? 0)?.[String(((s as any).temp_cum_manage_i ?? 0)) + ':' + String(((s as any).temp_cum_manage_j ?? 0))]) : (0)));
      (s as any).cumsumass = ((s as any).cumsumass ?? 0) + (((((s as any).temp_cum_manage_i ?? 0) === 3) ? (((s as any).cumvolume ?? 0)?.[String(((s as any).temp_cum_manage_i ?? 0)) + ':' + String(((s as any).temp_cum_manage_j ?? 0))]) : (0)));
    } else {
      if (((s as any).temp_cum_manage_j ?? 0) < 4  &&  ((s as any).temp_cum_manage_j ?? 0) > 0) {
        (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) + (((s as any).cumvolume ?? 0)?.[String(((s as any).temp_cum_manage_i ?? 0)) + ':' + String(((s as any).temp_cum_manage_j ?? 0))]);
      }
    }
  }
  (s as any).temp_cum_manage_j = ((s as any).temp_cum_manage_j ?? 0) + (1);
  if (((s as any).temp_cum_manage_j ?? 0) < 8) {
    // TODO-QSP: jump 'cum_c_ageloop'
  }
  (s as any).temp_cum_manage_i = ((s as any).temp_cum_manage_i ?? 0) + (1);
  if (((s as any).temp_cum_manage_i ?? 0) < 19) {
    // TODO-QSP: jump 'cum_c_locloop'
  }
  (s as any).stat_visible_cum = qspFunc(s, 'cum_manage', 'check_visible');
  (s as any).temp_cum_manage_i = 0;
  // TODO-QSP: :cum_c_namemap
  // TODO-QSP: cum_vol[$cum_names[temp_cum_manage_i]] = cumvol[temp_cum_manage_i]
  // TODO-QSP: cum_loc[$cum_names[temp_cum_manage_i]] = cumloc[temp_cum_manage_i]
  (s as any).temp_cum_manage_i = ((s as any).temp_cum_manage_i ?? 0) + (1);
  if (((s as any).temp_cum_manage_i ?? 0) < 17) {
    // TODO-QSP: jump 'cum_c_namemap'
  }
  return;
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_manage', 'cum_compute');
  ((s as any).stat_texts ?? {})['cum'] = '';
  if (Object.keys((s as any).cumvolume ?? {}).length === 0) {
    // TODO-QSP: exit
  }
  ((s as any).sd_cum ?? {})['loc_check'] = 0;
  ((s as any).sd_cum ?? {})['i'] = 0;
  // TODO-QSP: :cum_locloop
  if (((s as any).sd_cum ?? 0)?.['i'] === 0) {
    ((s as any).sd_cum ?? {})['icon_loc'] = 'your pussy';
    ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/creampie/cumpussy\' + rand(1, 14) + \'.jpg\'">pussy</a>';
  } else {
    if (((s as any).sd_cum ?? 0)?.['i'] === 1) {
      ((s as any).sd_cum ?? {})['loc_adj'] = 'all over ';
      ((s as any).sd_cum ?? {})['icon_loc'] = 'your labia';
      ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/cumpussy/cumpus\' + rand(1, 4) + \'.jpg\'">labia</a>';
    } else {
      if (((s as any).sd_cum ?? 0)?.['i'] === 2  &&  ((s as any).PCloPanties ?? 0) === 1) {
        ((s as any).sd_cum ?? {})['loc_adj'] = 'across ';
        ((s as any).sd_cum ?? {})['loc'] = 'the front of your panties';
        ((s as any).sd_cum ?? {})['icon_loc'] = ((s as any).sd_cum ?? 0)?.['loc'];
      } else {
        if (((s as any).sd_cum ?? 0)?.['i'] === 3) {
          ((s as any).sd_cum ?? {})['loc_adj'] = 'across ';
          ((s as any).sd_cum ?? {})['icon_loc'] = 'your ass';
          ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/cumanal/cumanal\' + rand(1, 11) + \'.jpg\'">ass</a>';
        } else {
          if (((s as any).sd_cum ?? 0)?.['i'] === 4) {
            ((s as any).sd_cum ?? {})['loc_adj'] = 'all over ';
            ((s as any).sd_cum ?? {})['icon_loc'] = 'your butt';
            ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/cumass/cumass\' + rand(1, 6) + \'.jpg\'">butt</a>';
          } else {
            if (((s as any).sd_cum ?? 0)?.['i'] === 5  &&  ((s as any).PCloPanties ?? 0) === 1) {
              ((s as any).sd_cum ?? {})['loc_adj'] = 'painting ';
              ((s as any).sd_cum ?? {})['loc'] = 'the back of your panties';
              ((s as any).sd_cum ?? {})['icon_loc'] = ((s as any).sd_cum ?? 0)?.['loc'];
            } else {
              if (((s as any).sd_cum ?? 0)?.['i'] === 6) {
                ((s as any).sd_cum ?? {})['loc_adj'] = 'on ';
                ((s as any).sd_cum ?? {})['icon_loc'] = 'your clothes near your groin';
                if (((s as any).PCloPants ?? 0) > 0) {
                  ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/cumclothes/\' + rand(1, 3) + \'.jpg\'">clothes near your groin</a>';
                } else {
                  ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/cumclothes/cumclothes1.jpg\'">clothes near your groin</a>';
                }
              } else {
                if (((s as any).sd_cum ?? 0)?.['i'] === 7  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
                  ((s as any).sd_cum ?? {})['loc_adj'] = 'on ';
                  ((s as any).sd_cum ?? {})['icon_loc'] = 'your clothes';
                  ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/cumclothes/cumclothes\' + rand(1, 21) + \'.jpg\'">clothes</a>';
                } else {
                  if (((s as any).sd_cum ?? 0)?.['i'] === 8) {
                    ((s as any).sd_cum ?? {})['loc_adj'] = 'down ';
                    ((s as any).sd_cum ?? {})['loc'] = 'your back';
                    ((s as any).sd_cum ?? {})['icon_loc'] = ((s as any).sd_cum ?? 0)?.['loc'];
                  } else {
                    if (((s as any).sd_cum ?? 0)?.['i'] === 9) {
                      ((s as any).sd_cum ?? {})['loc_adj'] = 'on ';
                      ((s as any).sd_cum ?? {})['loc'] = 'your legs';
                      ((s as any).sd_cum ?? {})['icon_loc'] = ((s as any).sd_cum ?? 0)?.['loc'];
                    } else {
                      if (((s as any).sd_cum ?? 0)?.['i'] === 10) {
                        ((s as any).sd_cum ?? {})['loc_adj'] = 'on ';
                        ((s as any).sd_cum ?? {})['loc'] = 'your arms';
                        ((s as any).sd_cum ?? {})['icon_loc'] = ((s as any).sd_cum ?? 0)?.['loc'];
                      } else {
                        if (((s as any).sd_cum ?? 0)?.['i'] === 11) {
                          if ((!((s as any).pcs_haircol ?? 0))) {
                            ((s as any).sd_cum ?? {})['face_img'] = 'brown/' + qspUntranslated(s, "rand(1,31)>", { location: "cum_manage" }) + '';
                          } else {
                            if (((s as any).pcs_haircol ?? 0) === 1) {
                              ((s as any).sd_cum ?? {})['face_img'] = 'black/' + qspUntranslated(s, "rand(1,23)>", { location: "cum_manage" }) + '';
                            } else {
                              if (((s as any).pcs_haircol ?? 0) === 2) {
                                ((s as any).sd_cum ?? {})['face_img'] = 'red/' + qspUntranslated(s, "rand(1,19)>", { location: "cum_manage" }) + '';
                              } else {
                                if (((s as any).pcs_haircol ?? 0) === 3) {
                                  ((s as any).sd_cum ?? {})['face_img'] = 'blonde/' + qspUntranslated(s, "rand(1,25)>", { location: "cum_manage" }) + '';
                                } else {
                                  if (((s as any).pcs_haircol ?? 0) > 3) {
                                    ((s as any).sd_cum ?? {})['face_img'] = 'custom/' + qspUntranslated(s, "rand(1,20)>", { location: "cum_manage" }) + '';
                                  }
                                }
                              }
                            }
                          }
                          ((s as any).sd_cum ?? {})['loc_adj'] = 'across ';
                          ((s as any).sd_cum ?? {})['icon_loc'] = 'your face';
                          ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/cumface/' + qspUntranslated(s, "sd_cum['face_img']>", { location: "cum_manage" }) + '.jpg\'">face</a>';
                        } else {
                          if (((s as any).sd_cum ?? 0)?.['i'] === 13) {
                            ((s as any).sd_cum ?? {})['loc_adj'] = 'over ';
                            ((s as any).sd_cum ?? {})['loc'] = 'your hands';
                            ((s as any).sd_cum ?? {})['icon_loc'] = ((s as any).sd_cum ?? 0)?.['loc'];
                          } else {
                            if (((s as any).sd_cum ?? 0)?.['i'] === 14) {
                              ((s as any).sd_cum ?? {})['loc_adj'] = 'across ';
                              ((s as any).sd_cum ?? {})['icon_loc'] = 'across your stomach';
                              ((s as any).sd_cum ?? {})['loc'] = 'across your <a href="exec:view\'images/pc/body/cum/cumbelly/cumbelly\' + rand(1, 12) + \'.jpg\'">stomach</a>';
                            } else {
                              if (((s as any).sd_cum ?? 0)?.['i'] === 15) {
                                ((s as any).sd_cum ?? {})['loc_adj'] = 'on ';
                                ((s as any).sd_cum ?? {})['icon_loc'] = 'on your breasts';
                                ((s as any).sd_cum ?? {})['loc'] = 'your <a href="exec:view\'images/pc/body/cum/cumtits/cumtits\' + rand(1, 19) + \'.jpg\'">breasts</a>';
                              } else {
                                if (((s as any).sd_cum ?? 0)?.['i'] === 16) {
                                  ((s as any).sd_cum ?? {})['loc_adj'] = 'in ';
                                  ((s as any).sd_cum ?? {})['icon_loc'] = 'your hair';
                                  ((s as any).sd_cum ?? {})['loc'] = 'your hair';
                                } else {
                                  if (((s as any).sd_cum ?? 0)?.['i'] === 17) {
                                    ((s as any).sd_cum ?? {})['loc'] = 'in your vagina in a slipped condom';
                                    ((s as any).sd_cum ?? {})['icon_loc'] = ((s as any).sd_cum ?? 0)?.['loc'];
                                  } else {
                                    ((s as any).sd_cum ?? {})['loc_adj'] = 'on ';
                                    ((s as any).sd_cum ?? {})['icon_loc'] = 'the gusset of your panties';
                                    ((s as any).sd_cum ?? {})['loc'] = 'the gusset of your panties';
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ((s as any).sd_cum ?? {})['j'] = 0;
  // TODO-QSP: :cum_ageloop
  if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] > 0) {
    if (((s as any).sd_cum ?? 0)?.['loc_check'] !== 1  &&  ((s as any).sd_cum ?? 0)?.['i'] !== 12) {
      ((s as any).sd_cum ?? {})['loc_check'] = 1;
    }
    if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] > 250) {
      ((s as any).sd_cum ?? {})['amount'] = 'Enormous ';
    } else {
      if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] > 100) {
        ((s as any).sd_cum ?? {})['amount'] = 'Huge ';
      } else {
        if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] >= 20) {
          ((s as any).sd_cum ?? {})['amount'] = 'Decent ';
        } else {
          ((s as any).sd_cum ?? {})['amount'] = 'Small ';
        }
      }
    }
    if (((s as any).sd_cum ?? 0)?.['j'] === 4) {
      if (((((s as any).vibratorIN ?? 0) === 1  ||  ((s as any).isprok ?? 0) === 1)  &&  ((s as any).sd_cum ?? 0)?.['i'] === 0)  ||  (((s as any).analPlugIn ?? 0) === 1  &&  ((s as any).sd_cum ?? 0)?.['i'] === 3)) {
        ((s as any).sd_cum ?? {})['proxy'] = 'being plugged in ';
      } else {
        if (((s as any).sd_cum ?? 0)?.['i'] === 0  &&  ((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] < qspFunc(s, 'cum_manage', 'get_inner_capacity', 0)) {
          ((s as any).sd_cum ?? {})['proxy'] = 'staying inside ';
        } else {
          if (((s as any).sd_cum ?? 0)?.['i'] === 3  &&  ((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] < qspFunc(s, 'cum_manage', 'get_inner_capacity', 3)) {
            ((s as any).sd_cum ?? {})['proxy'] = 'staying inside ';
          } else {
            if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] > 250) {
              ((s as any).sd_cum ?? {})['proxy'] = 'gushing out of ';
            } else {
              if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] > 100) {
                ((s as any).sd_cum ?? {})['proxy'] = 'flowing out of ';
              } else {
                if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] >= 40) {
                  ((s as any).sd_cum ?? {})['proxy'] = 'seeping out of ';
                } else {
                  ((s as any).sd_cum ?? {})['proxy'] = 'staying inside ';
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sd_cum ?? 0)?.['j'] >= 5) {
        if (((s as any).sd_cum ?? 0)?.['j'] === 5) {
          ((s as any).sd_cum ?? {})['proxy'] = 'buried ';
        } else {
          if (((s as any).sd_cum ?? 0)?.['j'] === 6) {
            ((s as any).sd_cum ?? {})['proxy'] = 'marinating ';
          } else {
            ((s as any).sd_cum ?? {})['proxy'] = 'rotting ';
          }
        }
        if (((s as any).cumcondslip_deep ?? 0) > (((s as any).vagina ?? 0) / 2)) {
          ((s as any).sd_cum ?? {})['proxy'] = (((s as any).sd_cum ?? {})['proxy'] ?? 0) + ('deep ');
        }
      } else {
        if (((s as any).sd_cum ?? 0)?.['j'] < 4  &&  ((s as any).sd_cum ?? 0)?.['j'] > 0) {
          if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] > 160) {
            ((s as any).sd_cum ?? {})['proxy'] = 'coating ';
          } else {
            if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] > 40) {
              ((s as any).sd_cum ?? {})['proxy'] = 'covering ';
            } else {
              ((s as any).sd_cum ?? {})['proxy'] = 'spattered ';
            }
          }
          if (((s as any).sd_cum ?? 0)?.['j'] === 1) {
            ((s as any).sd_cum ?? {})['proxy'] = (((s as any).sd_cum ?? {})['proxy'] ?? 0) + ('wetly ');
          } else {
            if (((s as any).sd_cum ?? 0)?.['j'] === 2) {
              ((s as any).sd_cum ?? {})['proxy'] = (((s as any).sd_cum ?? {})['proxy'] ?? 0) + ('dryly ');
            } else {
              ((s as any).sd_cum ?? {})['proxy'] = (((s as any).sd_cum ?? {})['proxy'] ?? 0) + ('powderly ');
            }
          }
          if (((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] < 40) {
            ((s as any).sd_cum ?? {})['proxy'] = (((s as any).sd_cum ?? {})['proxy'] ?? 0) + (((s as any).sd_cum ?? 0)?.['loc_adj']);
          }
        }
      }
    }
    ((s as any).sd_cum ?? {})['person'] = '';
    if (((s as any).cumcount ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] === 0) {
      ((s as any).sd_cum ?? {})['iscum'] = 'some whitish substance ';
    } else {
      ((s as any).sd_cum ?? {})['iscum'] = 'cum';
      if (((s as any).cumcount ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] === ((s as any).knownguy ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']]) {
        if (((s as any).knownguy ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] === 1) {
          if (((s as any).npc_usedname ?? 0)[((s as any).cumowner ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j'] + ':0']] === 'stranger') {
            ((s as any).sd_cum ?? {})['person'] = ((s as any).npc_firstname ?? 0)[((s as any).cumowner ?? 0)['' + ((s as any).sd_cum ?? 0)?.['i'] + ':<<sd_cum[\'j\']>>:0']] + ' ';
          } else {
            ((s as any).sd_cum ?? {})['person'] = ((s as any).npc_usedname ?? 0)[((s as any).cumowner ?? 0)['' + ((s as any).sd_cum ?? 0)?.['i'] + ':<<sd_cum[\'j\']>>:0']] + ' ';
          }
        } else {
          ((s as any).sd_cum ?? {})['kmax'] = 0;
          // TODO-QSP: :cum_nullocator1
          if (((s as any).cumowner ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j'] + ':' + ((s as any).sd_cum ?? 0)?.['kmax']] !== '') {
            ((s as any).sd_cum ?? {})['kmax'] = (((s as any).sd_cum ?? {})['kmax'] ?? 0) + (1);
            // TODO-QSP: jump 'cum_nullocator1'
          }
          ((s as any).sd_cum ?? {})['kmax'] = (((s as any).sd_cum ?? {})['kmax'] ?? 0) - (1);
          ((s as any).sd_cum ?? {})['k'] = 0;
          // TODO-QSP: :cum_knownloop
          ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + (((s as any).npc_usedname ?? 0)?.[qspUntranslated(s, "cumowner['<<sd_cum['i']>>:<<sd_cum['j']>>:<<sd_cum['k']>>']", { location: "cum_manage" })]);
          if (((s as any).sd_cum ?? 0)?.['k'] < ((s as any).sd_cum ?? 0)?.['kmax'] - 1) {
            ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + (', ');
            ((s as any).sd_cum ?? {})['k'] = (((s as any).sd_cum ?? {})['k'] ?? 0) + (1);
            // TODO-QSP: jump 'cum_knownloop'
          }
          ((s as any).sd_cum ?? {})['k'] = (((s as any).sd_cum ?? {})['k'] ?? 0) + (1);
          if (((s as any).npc_usedname ?? 0)[((s as any).cumowner ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j'] + ':' + ((s as any).sd_cum ?? 0)?.['k']]] === 'stranger') {
            ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + (' and \' + $npc_firstname[$cumowner[\'' + qspUntranslated(s, "sd_cum['i']>", { location: "cum_manage" }) + ':<<sd_cum[\'j\']>>:<<sd_cum[\'k\']>>\']] + \' ');
          } else {
            ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + (' and \' + $npc_usedname[$cumowner[\'' + qspUntranslated(s, "sd_cum['i']>", { location: "cum_manage" }) + ':<<sd_cum[\'j\']>>:<<sd_cum[\'k\']>>\']] + \' ');
          }
        }
      } else {
        if (((s as any).knownguy ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] === 0) {
          if (((s as any).cumcount ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] === 1) {
            ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + ('some guy ');
          } else {
            ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + ('some guys ');
          }
        } else {
          if (((s as any).knownguy ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] === 1) {
            if (((s as any).npc_usedname ?? 0)[((s as any).cumowner ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j'] + ':' + ((s as any).sd_cum ?? 0)?.['k']]] === 'stranger') {
              ((s as any).sd_cum ?? {})['person'] = ((s as any).npc_firstname ?? 0)[((s as any).cumowner ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j'] + ':0']] + '  &&  some guy';
            } else {
              ((s as any).sd_cum ?? {})['person'] = ((s as any).npc_usedname ?? 0)[((s as any).cumowner ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j'] + ':0']] + '  &&  some guy';
            }
          } else {
            ((s as any).sd_cum ?? {})['kmax'] = 0;
            // TODO-QSP: :cum_nullocator2
            if (((s as any).cumowner ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j'] + ':' + ((s as any).sd_cum ?? 0)?.['kmax']] !== '') {
              ((s as any).sd_cum ?? {})['kmax'] = (((s as any).sd_cum ?? {})['kmax'] ?? 0) + (1);
              // TODO-QSP: jump 'cum_nullocator2'
            }
            ((s as any).sd_cum ?? {})['kmax'] = (((s as any).sd_cum ?? {})['kmax'] ?? 0) - (1);
            ((s as any).sd_cum ?? {})['k'] = 0;
            // TODO-QSP: :cum_mixloop
            if (((s as any).npc_usedname ?? 0)[((s as any).cumowner ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j'] + ':' + ((s as any).sd_cum ?? 0)?.['k']]] === 'stranger') {
              ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + (((s as any).npc_firstname ?? 0)[((s as any).cumowner ?? 0)['' + ((s as any).sd_cum ?? 0)?.['i'] + ':<<sd_cum[\'j\']>>:<<sd_cum[\'k\']>>']] + ', ');
            } else {
              ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + (((s as any).npc_usedname ?? 0)[((s as any).cumowner ?? 0)['' + ((s as any).sd_cum ?? 0)?.['i'] + ':<<sd_cum[\'j\']>>:<<sd_cum[\'k\']>>']] + ', ');
            }
            if (((s as any).sd_cum ?? 0)?.['k'] < ((s as any).sd_cum ?? 0)?.['kmax']) {
              ((s as any).sd_cum ?? {})['k'] = (((s as any).sd_cum ?? {})['k'] ?? 0) + (1);
              // TODO-QSP: jump 'cum_mixloop'
            }
            ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + ('and some guy');
          }
          if (((s as any).cumcount ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] - ((s as any).knownguy ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] > 1) {
            ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + ('s ');
          } else {
            ((s as any).sd_cum ?? {})['person'] = (((s as any).sd_cum ?? {})['person'] ?? 0) + (' ');
          }
        }
      }
    }
    ((s as any).sd_cum ?? {})['icon_iscum'] = ((s as any).sd_cum ?? 0)?.['iscum'];
    if (((s as any).sd_cum ?? 0)?.['j'] <= 4  &&  ((s as any).trait_vars ?? 0)?.['cumeater'] === 1  &&  ((s as any).sd_cum ?? 0)?.['iscum'] === 'cum'  &&  qspFunc(s, 'cum_manage', 'check_private', ((s as any).sd_cum ?? 0)?.['i']) === 1  &&  ((((s as any).sd_cum ?? 0)?.['i'] !== 0  &&  ((s as any).sd_cum ?? 0)?.['i'] !== 3)  ||  qspFunc(s, 'cum_manage', 'check_inner_overflow', ((s as any).sd_cum ?? 0)?.['i']) === 1  ||  ((s as any).cheatVars ?? 0)?.['enema'] === 1)) {
      ((s as any).sd_cum ?? {})['iscum'] = '<a href="exec:gs \'cum_manage\', \'cumeater\', ' + qspUntranslated(s, "sd_cum['i']>", { location: "cum_manage" }) + '"><<$sd_cum[\'iscum\']>></a>';
    }
    if (((s as any).sd_cum ?? 0)?.['person'] !== '') {
      ((s as any).sd_cum ?? {})['person'] = ' from ' + qspUntranslated(s, "sd_cum['person']>", { location: "cum_manage" }) + '';
    }
    if (((s as any).sd_cum ?? 0)?.['j'] === 0) {
      ((s as any).sd_cum ?? {})['display'] = 'Your mouth has the tangy aftertaste of sperm.';
      ((s as any).sd_cum ?? {})['tooltip'] = ((s as any).sd_cum ?? 0)?.['display'];
    } else {
      ((s as any).sd_cum ?? {})['tail'] = '.';
      if (((s as any).sd_cum ?? 0)?.['i'] === 0  &&  ((s as any).sd_cum ?? 0)?.['j'] === 4  &&  ((s as any).vibratorIN ?? 0) === 0  &&  ((s as any).pcs_vag ?? 0) * 10 < ((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']]  &&  ((s as any).cumvolume ?? 0)[((s as any).sd_cum ?? 0)?.['i'] + ':' + ((s as any).sd_cum ?? 0)?.['j']] >= 20) {
        ((s as any).sd_cum ?? {})['tail'] = ((((s as any).pantyworntype ?? 0) !== 'none') ? (' into your panties.') : (' down your legs.'));
      }
      ((s as any).sd_cum ?? {})['tooltip'] = '' + qspUntranslated(s, "sd_cum['amount']>", { location: "cum_manage" }) + 'amounts of <<$sd_cum[\'icon_iscum\']>><<$sd_cum[\'person\']>> is <<$sd_cum[\'proxy\']>><<$sd_cum[\'icon_loc\']>><<$sd_cum[\'tail\']>>';
      if (((s as any).sd_cum ?? 0)?.['j'] >= 5  &&  (!((s as any).cumcondslip_aware ?? 0))) {
        ((s as any).sd_cum ?? {})['display'] = '';
      } else {
        ((s as any).sd_cum ?? {})['display'] = '' + qspUntranslated(s, "sd_cum['amount']>", { location: "cum_manage" }) + 'amounts of <<$sd_cum[\'iscum\']>><<$sd_cum[\'person\']>> is <<$sd_cum[\'proxy\']>><<$sd_cum[\'loc\']>><<$sd_cum[\'tail\']>>';
      }
    }
    if (((s as any).sd_cum ?? 0)?.['display'] !== '') {
      ((s as any).stat_texts ?? {})['cum'] = (((s as any).stat_texts ?? {})['cum'] ?? 0) + (((((s as any).stat_texts ?? 0)?.['cum'] === '') ? ('') : ('<br>')));
    }
    // TODO-QSP: $stat_cum_msg += $iif($stat_cum_msg <> '', '<br>', '') + '''<<$sd_cum[''tooltip'']>>'''
  }
  ((s as any).sd_cum ?? {})['j'] = (((s as any).sd_cum ?? {})['j'] ?? 0) + (1);
  if (((s as any).sd_cum ?? 0)?.['j'] < 8) {
    // TODO-QSP: jump 'cum_ageloop'
  }
  if (((s as any).sd_cum ?? 0)?.['loc_check'] === 1  &&  ((((s as any).sd_cum ?? 0)?.['i'] !== 0  &&  ((s as any).cumsumass ?? 0) === 0  &&  ((s as any).cumsumvag ?? 0) > 0  &&  qspFunc(s, 'cum_manage', 'check_inner_overflow', 0) === 0)  ||  (((s as any).sd_cum ?? 0)?.['i'] !== 3  &&  ((s as any).cumsumvag ?? 0) === 0  &&  ((s as any).cumsumass ?? 0) > 0  &&  qspFunc(s, 'cum_manage', 'check_inner_overflow', 3) === 0)  ||  (((s as any).sd_cum ?? 0)?.['i'] > 3  &&  ((s as any).cumsumvag ?? 0) > 0  &&  qspFunc(s, 'cum_manage', 'check_inner_overflow', 0) === 0  &&  ((s as any).cumsumass ?? 0) > 0  &&  qspFunc(s, 'cum_manage', 'check_inner_overflow', 3) === 0))) {
    ((s as any).sd_cum ?? {})['loc_check'] = 0;
  }
  ((s as any).sd_cum ?? {})['i'] = (((s as any).sd_cum ?? {})['i'] ?? 0) + (1);
  if (((s as any).sd_cum ?? 0)?.['i'] < 19) {
    // TODO-QSP: jump 'cum_locloop'
  }
  if (((s as any).stat_visible_cum ?? 0) === 1) {
    if (((s as any).cumloc ?? 0)[6] === 1) {
      // TODO-QSP: $stat_visible_cum_temp += ', on your clothes near your groin'
    }
    if (((s as any).cumloc ?? 0)[7] === 1) {
      // TODO-QSP: $stat_visible_cum_temp += ', on your clothes'
    }
    if (((s as any).cumloc ?? 0)[11] === 1) {
      // TODO-QSP: $stat_visible_cum_temp += ', on your face'
    }
    if (((s as any).cumloc ?? 0)[13] === 1) {
      // TODO-QSP: $stat_visible_cum_temp += ', on your hands'
    }
    if (((s as any).cumloc ?? 0)[16] === 1) {
      // TODO-QSP: $stat_visible_cum_temp += ', in your hair'
    }
  }
  if (((s as any).stat_texts ?? 0)?.['cum'] !== '') {
    ((s as any).stat_texts ?? {})['cum_tooltip'] = ((s as any).stat_cum_msg ?? 0);
    qspCall(s, 'stat_display_compute', 'queue_msg', 'cum', '', 'status/cum_covered', 3, 'msg $stat_texts[\'cum_tooltip\']');
  }
  if (((s as any).stat_visible_cum_msg ?? 0) !== '') {
    ((s as any).stat_texts ?? {})['visible_cum'] = ((s as any).stat_visible_cum_msg ?? 0);
    qspCall(s, 'stat_display_compute', 'queue_msg', 'visible_cum', 'v_neg', 'status/visible_cum', 3);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'People can see cum on you.', 'v_neg');
  }
  if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1  &&  qspFunc(s, 'cum_manage', 'check_removeable_cum')) {
    ((s as any).stat_texts ?? {})['cumeater_icon_tooltip'] = 'Click to lick up all that delicious cum.';
    if (qspFunc(s, 'cum_manage', 'check_removeable_cum_actionable')) {
      qspCall(s, 'stat_display_compute', 'queue_msg', 'cumeater_icon', '', 'status/cum_eater', 3, 'gs \'cum_manage\', \'cumeater_icon\' & gs \'stat\'');
    } else {
      ((s as any).stat_texts ?? {})['cumeater_icon_tooltip'] = 'Need a private place.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'cumeater_icon', '', 'status/cum_eater', 3, 'msg \'Need a private place.\'');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0  &&  qspFunc(s, 'cum_manage', 'check_removeable_cum')) {
    ((s as any).stat_texts ?? {})['wipes_icon_tooltip'] = 'Click to use your wipes.';
    if (qspFunc(s, 'cum_manage', 'check_removeable_cum_actionable')) {
      qspCall(s, 'stat_display_compute', 'queue_msg', 'wipes_icon', '', 'status/wipes', 3, 'gs \'din_bad\', \'d_salf\'');
    } else {
      ((s as any).stat_texts ?? {})['wipes_icon_tooltip'] = 'Need a private place.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'wipes_icon', '', 'status/wipes', 3, 'msg \'Need a private place.\'');
    }
  }
  return;
  scene.build();
}

function enterCumgather(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_cum_manage_pos = qspUntranslated(s, "arrpos('sparrloc', ARGS[1])", { location: "cum_manage" });
  if (((s as any).temp_cum_manage_pos ?? 0) >= 0  &&  ((s as any).temp_cum_manage_pos ?? 0) < Object.keys((s as any).sparrloc ?? {}).length) {
    if ((!((s as any).locArgs?.[1] ?? 0))) {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 1) {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 2  ||  ((s as any).locArgs?.[1] ?? 0) === 5) {
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 3) {
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 4) {
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 6  ||  ((s as any).locArgs?.[1] ?? 0) === 7) {
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 8) {
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 9) {
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 10) {
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 11) {
                        ((s as any).stat ?? {})['cum_facial'] = (((s as any).stat ?? {})['cum_facial'] ?? 0) + (1);
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 14) {
                        } else {
                          if (((s as any).locArgs?.[1] ?? 0) === 15) {
                          } else {
                            if (((s as any).locArgs?.[1] ?? 0) === 16) {
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
      ((s as any).mc_inventory ?? {})['makeup_wipes'] = (((s as any).mc_inventory ?? {})['makeup_wipes'] ?? 0) - (1);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      // TODO-QSP: dynamic text: You use a wipe to clean the sperm from your <<$part>>.
      scene.text(`You use a wipe to clean the sperm from your ${((s as any).part ?? 0)}.`);
      // TODO-QSP: gs 'cum_cleanup', 'cleanloc', ARGS[1]
      qspCall(s, 'stat', '');
    }
  }
  return;
  scene.build();
}

function enterCumeaterIcon(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_cum_manage_j = 0;
  // TODO-QSP: :cumeater_icon_jump
  if (((s as any).cumloc ?? 0)?.[String((s as any).temp_cum_manage_j ?? 0)] > 0  &&  ((s as any).temp_cum_manage_j ?? 0) !== 12) {
    if (qspFunc(s, 'cum_manage', 'check_private', ((s as any).temp_cum_manage_j ?? 0)) === 1) {
      if ((((s as any).temp_cum_manage_j ?? 0) !== 0  &&  ((s as any).temp_cum_manage_j ?? 0) !== 3)  ||  qspFunc(s, 'cum_manage', 'check_inner_overflow', ((s as any).temp_cum_manage_j ?? 0)) === 1  ||  ((s as any).cheatVars ?? 0)?.['enema'] === 1) {
        qspCall(s, 'cum_manage', 'cumeater', ((s as any).temp_cum_manage_j ?? 0));
      }
    }
  }
  (s as any).temp_cum_manage_j = ((s as any).temp_cum_manage_j ?? 0) + (1);
  if (((s as any).temp_cum_manage_j ?? 0) < 18) {
    // TODO-QSP: jump 'cumeater_icon_jump'
  }
  return;
  scene.build();
}

function enterCumeater(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_cum_cleanup_cumeater_pos = qspUntranslated(s, "arrpos('sparrloc', ARGS[1])", { location: "cum_manage" });
  if (((s as any).temp_cum_cleanup_cumeater_pos ?? 0) >= 0  &&  ((s as any).temp_cum_cleanup_cumeater_pos ?? 0) < Object.keys((s as any).sparrloc ?? {}).length) {
    ((s as any).cumloc ?? {})[12] = 1;
    (s as any).spafinloc = 12;
    (s as any).sexvolume = ((s as any).sparrvol ?? 0)?.[String((s as any).temp_cum_cleanup_cumeater_pos ?? 0)];
    (s as any).sexunaware = 0;
    (s as any).sexspecpot = (-1);
    (s as any).cumnostd = 0;
    qspCall(s, 'cum_manage', '');
    if (((s as any).locArgs?.[1] ?? 0) === 13) {
      // TODO-QSP: gs 'cum_cleanup', 'cleanloc', ARGS[1]
      scene.text('You carefully lick the sperm residue from your hands, enjoying the tart taste.');
    } else {
      if ((!((s as any).locArgs?.[1] ?? 0))) {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 1) {
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 2  ||  ((s as any).locArgs?.[1] ?? 0) === 5) {
            qspCall(s, 'cum_cleanup', 'cleanloc', 2);
            qspCall(s, 'cum_cleanup', 'cleanloc', 5);
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 3) {
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 4) {
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 6  ||  ((s as any).locArgs?.[1] ?? 0) === 7) {
                  qspCall(s, 'cum_cleanup', 'cleanloc', 6);
                  qspCall(s, 'cum_cleanup', 'cleanloc', 7);
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 8) {
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 9) {
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 10) {
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 11) {
                        } else {
                          if (((s as any).locArgs?.[1] ?? 0) === 14) {
                          } else {
                            if (((s as any).locArgs?.[1] ?? 0) === 15) {
                            } else {
                              if (((s as any).locArgs?.[1] ?? 0) === 16) {
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        // TODO-QSP: dynamic text: You collect a handful of sperm from your <<$part>> in your hand and lick it up, ...
        scene.text(`You collect a handful of sperm from your ${((s as any).part ?? 0)} in your hand and lick it up, enjoying the tart taste.`);
      } else {
        // TODO-QSP: dynamic text: You collect the sperm from your <<$part>> with your fingers and lick them, enjoy...
        scene.text(`You collect the sperm from your ${((s as any).part ?? 0)} with your fingers and lick them, enjoying the tart taste.`);
      }
      if (qspFunc(s, 'cum_manage', 'check_inner_overflow', qspUntranslated(s, "ARGS[1]", { location: "cum_manage" })) === 1  &&  ((s as any).cheatVars ?? 0)?.['enema'] === 0) {
        (s as any).cumspclnt = 15;
        qspCall(s, 'cum_cleanup', '');
      } else {
        if ((((s as any).locArgs?.[1] ?? 0) !== 0  &&  ((s as any).locArgs?.[1] ?? 0) !== 3)  ||  ((s as any).cheatVars ?? 0)?.['enema'] === 1) {
          // TODO-QSP: gs 'cum_cleanup', 'cleanloc', ARGS[1]
        }
      }
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
  }
  return;
  scene.build();
}

function enterIsPrivateLocation(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).location_type ?? 0) === 'private') {
    (s as any).result = 1;
    // TODO-QSP: exit
  }
  if (((s as any).location_type ?? 0) === 'private_shared') {
    (s as any).result = 1;
    // TODO-QSP: exit
  }
  if (((s as any).location_type ?? 0) === 'bathroom') {
    (s as any).result = 1;
    // TODO-QSP: exit
  }
  if (((s as any).location_type ?? 0) === 'restroom') {
    (s as any).result = 1;
    // TODO-QSP: exit
  }
  if (((s as any).location_type ?? 0) === 'kitchen') {
    (s as any).result = 1;
    // TODO-QSP: exit
  }
  return;
  scene.build();
}

function enterCheckPrivate(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'cum_manage', 'is_private_location');
  if ((!((s as any).result ?? 0))) {
    if (((s as any).locArgs?.[1] ?? 0) === 2  ||  ((s as any).locArgs?.[1] ?? 0) === 5  ||  ((s as any).locArgs?.[1] ?? 0) === 6  ||  ((s as any).locArgs?.[1] ?? 0) === 7  ||  ((s as any).locArgs?.[1] ?? 0) === 8  ||  ((s as any).locArgs?.[1] ?? 0) === 9  ||  ((s as any).locArgs?.[1] ?? 0) === 10  ||  ((s as any).locArgs?.[1] ?? 0) === 11  ||  ((s as any).locArgs?.[1] ?? 0) === 13  ||  ((s as any).locArgs?.[1] ?? 0) === 14  ||  ((s as any).locArgs?.[1] ?? 0) === 16) {
      (s as any).result = 1;
    }
  }
  return;
  scene.build();
}

function enterCheckInnerOverflow(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 0  ||  ((s as any).locArgs?.[1] ?? 0) === -1) {
    if (((s as any).cumsumvag ?? 0) >= qspFunc(s, 'cum_manage', 'get_inner_capacity', 0)  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).vibratorIN ?? 0))) {
      (s as any).result = 1;
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 3  ||  ((s as any).locArgs?.[1] ?? 0) === -1) {
    if (((s as any).cumsumass ?? 0) >= qspFunc(s, 'cum_manage', 'get_inner_capacity', 3)  &&  (!((s as any).analPlugIn ?? 0))) {
      (s as any).result = 1;
    }
  }
  return;
  scene.build();
}

function enterGetInnerCapacity(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1;
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).result = Math.max(1, 3 * ((s as any).pcs_vag ?? 0) - 30 * ((s as any).vgape ?? 0) - Math.min(100, ((s as any).pcs_horny ?? 0)) / 10);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 3) {
      (s as any).result = Math.max(1, 6 * ((s as any).pcs_ass ?? 0) - 40 * ((s as any).agape ?? 0));
    }
  }
  return;
  scene.build();
}

function enterCheckInnards(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) > 0) {
    (s as any).result = qspFunc(s, 'cum_manage', 'get_inner_capacity', qspUntranslated(s, "ARGS[1]", { location: "cum_manage" }));
  } else {
    (s as any).result = qspFunc(s, 'cum_manage', 'check_inner_overflow', qspUntranslated(s, "ARGS[1]", { location: "cum_manage" }));
  }
  return;
  scene.build();
}

function enterCheckVisible(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((((s as any).cumloc ?? 0)[6] + ((s as any).cumloc ?? 0)[7] + ((s as any).cumloc ?? 0)[11] + ((s as any).cumloc ?? 0)[13] + ((s as any).cumloc ?? 0)[16]) > 0);
  return;
  scene.build();
}

function enterCheckCovered(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((((s as any).cumloc ?? 0)[2] + ((s as any).cumloc ?? 0)[5] + ((s as any).cumloc ?? 0)[8] + ((s as any).cumloc ?? 0)[9] + ((s as any).cumloc ?? 0)[10] + ((s as any).cumloc ?? 0)[14]) > 0);
  return;
  scene.build();
}

function enterCheckHidden(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).cumloc ?? 0)[1] + ((s as any).cumloc ?? 0)[4] + ((s as any).cumloc ?? 0)[15]) > 0;
  return;
  scene.build();
}

function enterCheckRemoveableCum(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((qspFunc(s, 'cum_manage', 'check_visible')  ||  qspFunc(s, 'cum_manage', 'check_covered')) ? (1) : (0));
  if ((!((s as any).result ?? 0))) {
    (s as any).result = ((qspFunc(s, 'cum_manage', 'check_hidden')  ||  qspFunc(s, 'cum_manage', 'check_inner_overflow', (-1)) === 1) ? (1) : (0));
  }
  return;
  scene.build();
}

function enterCheckRemoveableCumActionable(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((qspFunc(s, 'cum_manage', 'check_visible')  ||  qspFunc(s, 'cum_manage', 'check_covered')) ? (1) : (0));
  if ((!((s as any).result ?? 0))) {
    if (qspFunc(s, 'cum_manage', 'check_hidden')  ||  qspFunc(s, 'cum_manage', 'check_inner_overflow', (-1)) === 1) {
      (s as any).result = qspFunc(s, 'cum_manage', 'is_private_location');
    }
  }
  return;
  scene.build();
}

function enterCheckOutside(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((qspFunc(s, 'cum_manage', 'check_visible')  ||  qspFunc(s, 'cum_manage', 'check_covered')) ? (1) : (0));
  return;
  scene.build();
}

function enterCheckInside(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'cum_manage', 'check_inner_overflow', (-1));
  return;
  scene.build();
}

function enterCumDecay(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).locArgs?.[1] ?? 0) === 0  &&  (((s as any).menu_off ?? 0) === 1  ||  ((s as any).totminut ?? 0) < ((s as any).cumdectime ?? 0) + 15))  ||  ((s as any).cheatVars ?? 0)?.['no_cum_leak'] === 1) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).sparrvol ?? {}).length > 0) {
    (s as any).cumsumvag = 0;
    (s as any).cumsumass = 0;
    (s as any).idx = 0;
    // TODO-QSP: :sparrlocloop
    (s as any).temp_cum_manage_i = ((s as any).sparrloc ?? 0)?.[String((s as any).idx ?? 0)];
    if (((s as any).sparrvol ?? 0)?.[String((s as any).idx ?? 0)] <= 0) {
      if (((s as any).sparrnam ?? 0)?.[String((s as any).idx ?? 0)] === ''  ||  ((s as any).temp_cum_manage_i ?? 0) !== 0  ||  (((s as any).temp_cum_manage_i ?? 0) === 0  &&  ((s as any).sparrage ?? 0)?.[String((s as any).idx ?? 0)] > 10)) {
        qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).idx ?? 0));
      }
    } else {
      if ((!((s as any).temp_cum_manage_i ?? 0))) {
        // TODO-QSP: gs 'cum_manage', 'cum_decay_vagina', idx, ARGS[1]
      } else {
        if (((s as any).temp_cum_manage_i ?? 0) === 1) {
          // TODO-QSP: gs 'cum_manage', 'cum_decay_labia', idx, ARGS[1]
        } else {
          if (((s as any).temp_cum_manage_i ?? 0) === 3) {
            // TODO-QSP: gs 'cum_manage', 'cum_decay_anus', idx, ARGS[1]
          } else {
            if (((s as any).temp_cum_manage_i ?? 0) === 4) {
              // TODO-QSP: gs 'cum_manage', 'cum_decay_butt', idx, ARGS[1]
            } else {
              if (((s as any).temp_cum_manage_i ?? 0) === 12) {
              } else {
                if (((s as any).temp_cum_manage_i ?? 0) === 17) {
                  // TODO-QSP: gs 'cum_manage', 'cum_decay_condom_vagina', idx, ARGS[1]
                } else {
                  // TODO-QSP: gs 'cum_manage', 'cum_decay_body_clothing', idx, ARGS[1]
                }
              }
            }
          }
        }
      }
      if (((s as any).sparrvol ?? 0)?.[String((s as any).idx ?? 0)] <= 0) {
        ((s as any).cumloc ?? {})[String((s as any).temp_cum_manage_i ?? 0)] = 0;
        ((s as any).cumvol ?? {})[String((s as any).idx ?? 0)] = 0;
      } else {
        ((s as any).cumloc ?? {})[String((s as any).temp_cum_manage_i ?? 0)] = 1;
        ((s as any).cumvol ?? {})[String((s as any).idx ?? 0)] = (((s as any).cumvol ?? {})[String((s as any).idx ?? 0)] ?? 0) + (((s as any).sparrvol ?? 0)?.[String((s as any).idx ?? 0)]);
      }
    }
    (s as any).sexvolume = 0;
    (s as any).cumnostd = 0;
    (s as any).idx = ((s as any).idx ?? 0) - (1);
    if (((s as any).idx ?? 0) >= 0) {
      // TODO-QSP: jump 'sparrlocloop'
    }
    if (((s as any).cumsumbod ?? 0) < 0) {
      (s as any).cumsumbod = 0;
    }
    if (((s as any).cumsumvag ?? 0) <= 0) {
      (s as any).cumsumvag = 0;
      ((s as any).cumvol ?? {})[0] = 0;
      ((s as any).cumloc ?? {})[0] = 0;
    }
    if (((s as any).cumsumass ?? 0) <= 0) {
      (s as any).cumsumass = 0;
      ((s as any).cumvol ?? {})[3] = 0;
      ((s as any).cumloc ?? {})[3] = 0;
    }
    (s as any).temp_cum_manage_i = 0;
    // TODO-QSP: :cum_manage_decays_names_loop
    // TODO-QSP: cum_vol[$cum_names[temp_cum_manage_i]] = cumvol[temp_cum_manage_i]
    // TODO-QSP: cum_loc[$cum_names[temp_cum_manage_i]] = cumloc[temp_cum_manage_i]
    (s as any).temp_cum_manage_i = ((s as any).temp_cum_manage_i ?? 0) + (1);
    if (((s as any).temp_cum_manage_i ?? 0) < 17) {
      // TODO-QSP: jump 'cum_manage_decays_names_loop'
    }
  }
  (s as any).cumdectime = ((s as any).totminut ?? 0);
  return;
  scene.build();
}

function enterCumDecayVagina(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 0) {
    // TODO-QSP: exit
  }
  if ((!((s as any).succubusflag ?? 0))) {
    (s as any).cumamount = (((s as any).totminut ?? 0)-((s as any).cumdectime ?? 0))/15 * Math.max(Math.floor(Math.random() * 2) + 0, (Math.floor(Math.random() * (sparrvol[ARGS[1]]/30 - sparrvol[ARGS[1]]/60 + 1)) + (sparrvol[ARGS[1]]/60)) + (Math.floor(Math.random() * (0, inSleep*(Math.floor(Math.random() * 3) + 1) + 1))) + ((s as any).isprok ?? 0)*(Math.floor(Math.random() * 6) + 5) + (Math.floor(Math.random() * ((Math.floor(Math.random() * (sparrvol[ARGS[1]]/30 - sparrvol[ARGS[1]]/60 + 1)) + (sparrvol[ARGS[1]]/60)) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((Math.floor(Math.random() * 3) + 1) - 0 + 1)) + (0)));
    // TODO-QSP: sparrvol[ARGS[1]] -= cumamount
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) + (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_manage" }));
    if (qspFunc(s, 'cum_manage', 'check_inner_overflow', 0) === 1  ||  ((s as any).locArgs?.[2] ?? 0) / (Math.floor(Math.random() * 2) + 2) > ((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      (s as any).cumamount = Math.min(((s as any).sparrvol ?? 0)[((s as any).ARGS ?? 0)[1]]*3/2, (((s as any).totminut ?? 0)-((s as any).cumdectime ?? 0))/15 * Math.max(Math.floor(Math.random() * 3) + 1, (Math.floor(Math.random() * (vgape*40 - sparrvol[ARGS[1]] / Math.max(1, ((s as any).pcs_vag ?? 0)) + 1)) + (sparrvol[ARGS[1]] / Math.max(1, ((s as any).pcs_vag ?? 0)))) - ((s as any).inSleep ?? 0)*(Math.floor(Math.random() * 4) + 2) + Math.max(1, ((s as any).pcs_vag ?? 0))) + ((s as any).cumforced ?? 0) / (Math.floor(Math.random() * 6) + 5));
      // TODO-QSP: sparrvol[ARGS[1]] -= cumamount & cumsumvag -= cumamount
      ((s as any).cumvol ?? {})[0] = (((s as any).cumvol ?? {})[0] ?? 0) - (((s as any).cumamount ?? 0));
      (s as any).sexvolume = Math.max(((s as any).cumamount ?? 0)/10, ((s as any).cumamount ?? 0)/2 - (((!((s as any).locArgs?.[2] ?? 0))) ? (((s as any).isprokp ?? 0) * (Math.floor(Math.random() * 11) + 10)) : (0)));
      if (((s as any).sexvolume ?? 0) > 0) {
        (s as any).spafinloc = 1;
        (s as any).sexunaware = (((!((s as any).locArgs?.[2] ?? 0))) ? ((((Math.floor(Math.random() * 5) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0))) : (0));
        (s as any).sexspecpot = (-1);
        (s as any).cumnostd = 1;
        qspCall(s, 'cum_manage', '');
        ((s as any).cumvol ?? {})[1] = (((s as any).cumvol ?? {})[1] ?? 0) + (((s as any).sexvolume ?? 0));
        ((s as any).cumloc ?? {})[1] = 1;
      }
      if ((!((s as any).locArgs?.[2] ?? 0))) {
        if (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).PCloPanties ?? 0) === 1) {
          if (((s as any).isprokp ?? 0) !== 1) {
            (s as any).spafinloc = 2;
            (s as any).sexvolume = Math.max(1, ((s as any).cumamount ?? 0)/2);
            (s as any).sexunaware = (((Math.floor(Math.random() * 4) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0));
            (s as any).sexspecpot = (-1);
            (s as any).cumnostd = 1;
            qspCall(s, 'cum_manage', '');
            ((s as any).cumvol ?? {})[2] = (((s as any).cumvol ?? {})[2] ?? 0) + (((s as any).sexvolume ?? 0));
            ((s as any).cumloc ?? {})[2] = 1;
          }
        } else {
          if ((((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PCloSkirt ?? 0) > 0  ||  ((s as any).PCloDress ?? 0) > 0)  &&  (Math.floor(Math.random() * 10) + 1) > 6 + ((s as any).inSleep ?? 0)*2) {
            (s as any).sexvolume = Math.max(0, ((s as any).cumamount ?? 0)/4);
            if (((s as any).sexvolume ?? 0) > 0) {
              (s as any).spafinloc = 9;
              (s as any).sexunaware = (((Math.floor(Math.random() * 3) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0));
              (s as any).sexspecpot = (-1);
              (s as any).cumnostd = 1;
              qspCall(s, 'cum_manage', '');
              ((s as any).cumvol ?? {})[9] = (((s as any).cumvol ?? {})[9] ?? 0) + (((s as any).sexvolume ?? 0));
              ((s as any).cumloc ?? {})[9] = 1;
            }
          }
        }
        if (((s as any).PCloPants ?? 0) > 0) {
          (s as any).sexvolume = Math.max(0, ((s as any).cumamount ?? 0) / (3 + ((((s as any).pantyworntype ?? 0) !== 'none') ? (12) : (0))));
          if (((s as any).sexvolume ?? 0) > 0) {
            (s as any).spafinloc = 6;
            (s as any).sexunaware = (((Math.floor(Math.random() * 5) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0));
            (s as any).sexspecpot = (-1);
            (s as any).cumnostd = 1;
            qspCall(s, 'cum_manage', '');
            ((s as any).cumvol ?? {})[6] = (((s as any).cumvol ?? {})[6] ?? 0) + (((s as any).sexvolume ?? 0));
            ((s as any).cumloc ?? {})[6] = 1;
          }
        }
      }
    }
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 0) {
    // TODO-QSP: gs 'cum_cleanup', 'cleandeposit', ARGS[1]
  }
  return;
  scene.build();
}

function enterCumDecayAnus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 3) {
    // TODO-QSP: exit
  }
  if ((!((s as any).succubusflag ?? 0))) {
    (s as any).cumamount = (((s as any).totminut ?? 0)-((s as any).cumdectime ?? 0))/15 * Math.max(Math.floor(Math.random() * 3) + 0, (Math.floor(Math.random() * (sparrvol[ARGS[1]]/20 - sparrvol[ARGS[1]]/40 + 1)) + (sparrvol[ARGS[1]]/40)) + (Math.floor(Math.random() * (0, inSleep*(Math.floor(Math.random() * 4) + 3) + 1))) + (Math.floor(Math.random() * ((Math.floor(Math.random() * (sparrvol[ARGS[1]]/20 - sparrvol[ARGS[1]]/40 + 1)) + (sparrvol[ARGS[1]]/40)) - 0 + 1)) + (0)));
    // TODO-QSP: sparrvol[ARGS[1]] -= cumamount
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    (s as any).cumsumass = ((s as any).cumsumass ?? 0) + (qspUntranslated(s, "sparrvol[ARGS[1]]", { location: "cum_manage" }));
    if (qspFunc(s, 'cum_manage', 'check_inner_overflow', 3) === 1  ||  ((s as any).locArgs?.[2] ?? 0) / (Math.floor(Math.random() * 3) + 2) > ((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
      (s as any).cumamount = Math.min(((s as any).sparrvol ?? 0)[((s as any).ARGS ?? 0)[1]]*3/2, (((s as any).totminut ?? 0)-((s as any).cumdectime ?? 0))/15 * (Math.floor(Math.random() * 9) + 7) + ((s as any).ARGS ?? 0)[2]/(Math.floor(Math.random() * 9) + 7));
      // TODO-QSP: sparrvol[ARGS[1]] -= cumamount & cumsumass -= cumamount
      ((s as any).cumvol ?? {})[3] = (((s as any).cumvol ?? {})[3] ?? 0) - (((s as any).cumamount ?? 0));
      (s as any).sexvolume = Math.max(((s as any).cumamount ?? 0)/10, ((s as any).cumamount ?? 0)/4 - (((!((s as any).locArgs?.[2] ?? 0))) ? (((s as any).isprokp ?? 0)*(Math.floor(Math.random() * 11) + 10)) : (0)));
      if (((s as any).sexvolume ?? 0) > 0) {
        (s as any).spafinloc = 1;
        (s as any).sexunaware = (((!((s as any).locArgs?.[2] ?? 0))) ? ((((Math.floor(Math.random() * 5) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0))) : (0));
        (s as any).sexspecpot = (-1);
        (s as any).cumnostd = 1;
        qspCall(s, 'cum_manage', '');
        ((s as any).cumvol ?? {})[1] = (((s as any).cumvol ?? {})[1] ?? 0) + (((s as any).sexvolume ?? 0));
        ((s as any).cumloc ?? {})[1] = 1;
      }
      if (((s as any).locArgs?.[2] ?? 0) > 0) {
        (s as any).sexvolume = Math.max(((s as any).cumamount ?? 0)/15, ((s as any).cumamount ?? 0)/3);
        if (((s as any).sexvolume ?? 0) > 0) {
          (s as any).spafinloc = 4;
          (s as any).sexvolume = Math.max(0, ((s as any).cumamount ?? 0)/2);
          (s as any).sexunaware = 0;
          (s as any).sexspecpot = (-1);
          (s as any).cumnostd = 1;
          qspCall(s, 'cum_manage', '');
          ((s as any).cumvol ?? {})[4] = (((s as any).cumvol ?? {})[4] ?? 0) + (((s as any).sexvolume ?? 0));
          ((s as any).cumloc ?? {})[4] = 1;
        }
      } else {
        if (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).PCloPanties ?? 0) === 1) {
          if (((s as any).isprokp ?? 0) !== 1) {
            (s as any).spafinloc = 5;
            (s as any).sexvolume = Math.max(1, ((s as any).cumamount ?? 0) / 3);
            (s as any).sexunaware = (((Math.floor(Math.random() * 4) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0));
            (s as any).sexspecpot = (-1);
            (s as any).cumnostd = 1;
            qspCall(s, 'cum_manage', '');
            ((s as any).cumvol ?? {})[5] = (((s as any).cumvol ?? {})[5] ?? 0) + (((s as any).sexvolume ?? 0));
            ((s as any).cumloc ?? {})[5] = 1;
          }
        } else {
          if ((((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PCloSkirt ?? 0) > 0  ||  ((s as any).PCloDress ?? 0) > 0)  &&  (Math.floor(Math.random() * 10) + 1) > 4 + ((s as any).inSleep ?? 0)*3) {
            (s as any).sexvolume = Math.max(0, ((s as any).cumamount ?? 0) / 5);
            if (((s as any).sexvolume ?? 0) > 0) {
              (s as any).spafinloc = 9;
              (s as any).sexunaware = (((Math.floor(Math.random() * 3) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0));
              (s as any).sexspecpot = (-1);
              (s as any).cumnostd = 1;
              qspCall(s, 'cum_manage', '');
              ((s as any).cumvol ?? {})[9] = (((s as any).cumvol ?? {})[9] ?? 0) + (((s as any).sexvolume ?? 0));
              ((s as any).cumloc ?? {})[9] = 1;
            }
          }
        }
        if (((s as any).PCloPants ?? 0) > 0) {
          (s as any).sexvolume = Math.max(0, ((s as any).cumamount ?? 0) / (4 + ((((s as any).pantyworntype ?? 0)!=='none') ? (16) : (0))));
          if (((s as any).sexvolume ?? 0) > 0) {
            (s as any).spafinloc = 6;
            (s as any).sexunaware = (((Math.floor(Math.random() * 5) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0));
            (s as any).sexspecpot = (-1);
            (s as any).cumnostd = 1;
            qspCall(s, 'cum_manage', '');
            ((s as any).cumvol ?? {})[6] = (((s as any).cumvol ?? {})[6] ?? 0) + (((s as any).sexvolume ?? 0));
            ((s as any).cumloc ?? {})[6] = 1;
          }
        }
      }
    }
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 0) {
    // TODO-QSP: gs 'cum_cleanup', 'cleandeposit', ARGS[1]
  }
  return;
  scene.build();
}

function enterCumDecayLabia(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 1) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] * ((((s as any).totminut ?? 0) - ((s as any).cumdectime ?? 0)) / 15) < (Math.floor(Math.random() * 4) + 3)) {
    return;
  }
  if (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).PCloPanties ?? 0) === 1) {
    (s as any).sexvolume = (Math.floor(Math.random() * (sparrvol[ARGS[1]] - sparrvol[ARGS[1]]/2 + 1)) + (sparrvol[ARGS[1]]/2)) - ((s as any).isprokp ?? 0) * (Math.floor(Math.random() * 16) + 15);
    if (((s as any).sexvolume ?? 0) > 0) {
      // TODO-QSP: sparrvol[ARGS[1]] -= sexvolume
      (s as any).spafinloc = 2;
      (s as any).sexunaware = 1;
      (s as any).sexspecpot = (-1);
      (s as any).cumnostd = 0;
      qspCall(s, 'cum_manage', '');
      ((s as any).cumvol ?? {})[2] = (((s as any).cumvol ?? {})[2] ?? 0) + (((s as any).sexvolume ?? 0));
      ((s as any).cumloc ?? {})[2] = 1;
    }
  } else {
    if (((s as any).PCloPants ?? 0) > 0) {
      (s as any).sexvolume = (Math.floor(Math.random() * (sparrvol[ARGS[1]] - sparrvol[ARGS[1]] / 2 + 1)) + (sparrvol[ARGS[1]] / 2));
      if (((s as any).sexvolume ?? 0) > 0) {
        (s as any).spafinloc = 6;
        (s as any).sexunaware = (((Math.floor(Math.random() * 5) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0));
        (s as any).sexspecpot = (-1);
        (s as any).cumnostd = 0;
        qspCall(s, 'cum_manage', '');
        ((s as any).cumvol ?? {})[6] = (((s as any).cumvol ?? {})[6] ?? 0) + (((s as any).sexvolume ?? 0));
        ((s as any).cumloc ?? {})[6] = 1;
      }
    }
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 0) {
    // TODO-QSP: gs 'cum_cleanup', 'cleandeposit', ARGS[1]
  }
  return;
  scene.build();
}

function enterCumDecayButt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 4) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] * ((((s as any).totminut ?? 0) - ((s as any).cumdectime ?? 0)) / 15) < (Math.floor(Math.random() * 5) + 5)) {
    return;
  }
  if (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).PCloPanties ?? 0) === 1) {
    (s as any).sexvolume = (Math.floor(Math.random() * (sparrvol[ARGS[1]] - sparrvol[ARGS[1]]/2 + 1)) + (sparrvol[ARGS[1]]/2));
    if (((s as any).sexvolume ?? 0) > 0) {
      // TODO-QSP: sparrvol[ARGS[1]] -= sexvolume
      (s as any).spafinloc = 5;
      (s as any).sexunaware = 1;
      (s as any).sexspecpot = (-1);
      (s as any).cumnostd = 0;
      qspCall(s, 'cum_manage', '');
      ((s as any).cumvol ?? {})[5] = (((s as any).cumvol ?? {})[5] ?? 0) + (((s as any).sexvolume ?? 0));
      ((s as any).cumloc ?? {})[5] = 1;
    }
  } else {
    if (((s as any).PCloPants ?? 0) > 0) {
      (s as any).sexvolume = (Math.floor(Math.random() * (sparrvol[ARGS[1]] - sparrvol[ARGS[1]] / 2 + 1)) + (sparrvol[ARGS[1]] / 2));
      if (((s as any).sexvolume ?? 0) > 0) {
        (s as any).spafinloc = 6;
        (s as any).sexunaware = (((Math.floor(Math.random() * 5) + 0) === 1  ||  ((s as any).sparridt ?? 0)[((s as any).locArgs?.[1] ?? 0)] === -2) ? (1) : (0));
        (s as any).sexspecpot = (-1);
        (s as any).cumnostd = 0;
        qspCall(s, 'cum_manage', '');
        ((s as any).cumvol ?? {})[6] = (((s as any).cumvol ?? {})[6] ?? 0) + (((s as any).sexvolume ?? 0));
        ((s as any).cumloc ?? {})[6] = 1;
      }
    }
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 0) {
    // TODO-QSP: gs 'cum_cleanup', 'cleandeposit', ARGS[1]
  }
  return;
  scene.build();
}

function enterCumDecayCondomVagina(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 17) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] < (Math.floor(Math.random() * 6) + 11)) {
    // TODO-QSP: exit
  }
  (s as any).sexvolume = Math.min(((s as any).sparrvol ?? 0)[((s as any).ARGS ?? 0)[1]]/3, (((s as any).totminut ?? 0)-((s as any).cumdectime ?? 0))/15 * (Math.floor(Math.random() * 6) + 5) + ((s as any).ARGS ?? 0)[2] / (Math.floor(Math.random() * 6) + 5));
  if (((s as any).sexvolume ?? 0) > 0) {
    (s as any).cumsumvag = ((s as any).cumsumvag ?? 0) - (((s as any).sexvolume ?? 0));
    // TODO-QSP: sparrvol[ARGS[1]] -= sexvolume
    (s as any).spafinloc = 0;
    (s as any).sexunaware = 1;
    (s as any).sexspecpot = (-1);
    (s as any).cumnostd = 0;
    qspCall(s, 'cum_manage', '');
    ((s as any).cumvol ?? {})[17] = (((s as any).cumvol ?? {})[17] ?? 0) - (((s as any).sexvolume ?? 0));
    ((s as any).cumvol ?? {})[0] = (((s as any).cumvol ?? {})[0] ?? 0) + (((s as any).sexvolume ?? 0));
    ((s as any).cumloc ?? {})[0] = 1;
  }
  return;
  scene.build();
}

function enterCumDecayBodyClothing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 4) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 12) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 17) {
    // TODO-QSP: exit
  }
  if (((s as any).sparrvol ?? 0)[((s as any).locArgs?.[1] ?? 0)] < (Math.floor(Math.random() * 4) + 1)) {
    // TODO-QSP: exit
  }
  if ((Math.floor(Math.random() * (((s as any).sparrage ?? 0)[((s as any).locArgs?.[1] ?? 0)] + (((s as any).totminut ?? 0) - ((s as any).cumdectime ?? 0) - -1 * Math.max(1 - ((s as any).inSleep ?? 0), ((s as any).sparrvol ?? 0)[((s as any).ARGS ?? 0)[1]] / 5) + 1)) + (-1 * Math.max(1 - ((s as any).inSleep ?? 0), ((s as any).sparrvol ?? 0)[((s as any).ARGS ?? 0)[1]] / 5))) / 30) >= 1) {
    if (((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] < 5  ||  ((s as any).sparrloc ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 7) {
      qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * (Math.max(1, ((s as any).sparrvol ?? 0)[((s as any).ARGS ?? 0)[1]] / 10) - 0 + 1)) + (0)));
    }
    // TODO-QSP: gs 'cum_cleanup', 'cleandeposit', ARGS[1]
  }
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'cum_compute':
      enterCumCompute(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    case 'cumgather':
      enterCumgather(s, scene);
      break;
    case 'cumeater_icon':
      enterCumeaterIcon(s, scene);
      break;
    case 'cumeater':
      enterCumeater(s, scene);
      break;
    case 'is_private_location':
      enterIsPrivateLocation(s, scene);
      break;
    case 'check_private':
      enterCheckPrivate(s, scene);
      break;
    case 'check_inner_overflow':
      enterCheckInnerOverflow(s, scene);
      break;
    case 'get_inner_capacity':
      enterGetInnerCapacity(s, scene);
      break;
    case 'check_innards':
      enterCheckInnards(s, scene);
      break;
    case 'check_visible':
      enterCheckVisible(s, scene);
      break;
    case 'check_covered':
      enterCheckCovered(s, scene);
      break;
    case 'check_hidden':
      enterCheckHidden(s, scene);
      break;
    case 'check_removeable_cum':
      enterCheckRemoveableCum(s, scene);
      break;
    case 'check_removeable_cum_actionable':
      enterCheckRemoveableCumActionable(s, scene);
      break;
    case 'check_outside':
      enterCheckOutside(s, scene);
      break;
    case 'check_inside':
      enterCheckInside(s, scene);
      break;
    case 'cum_decay':
      enterCumDecay(s, scene);
      break;
    case 'cum_decay_vagina':
      enterCumDecayVagina(s, scene);
      break;
    case 'cum_decay_anus':
      enterCumDecayAnus(s, scene);
      break;
    case 'cum_decay_labia':
      enterCumDecayLabia(s, scene);
      break;
    case 'cum_decay_butt':
      enterCumDecayButt(s, scene);
      break;
    case 'cum_decay_condom_vagina':
      enterCumDecayCondomVagina(s, scene);
      break;
    case 'cum_decay_body_clothing':
      enterCumDecayBodyClothing(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const cum_manage: LocationDef = {
  name: 'cum_manage',
  title: 'You carefully lick the sperm residue from your hands, enjoyi',
  region: 'other',
  locationType: 'kitchen',
  enter: enter,
};
