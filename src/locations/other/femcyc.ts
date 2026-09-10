import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'femcyc', 'femcyc_errhdl');
  if (((s as any).rcntorgzm ?? 0) === 1) {
    if (((s as any).rcntorgzmtmp ?? 0) === 1) {
      (s as any).rcntorgzm = 0;
      (s as any).rcntorgzmtmp = 0;
    }
    if (((s as any).rcntorgzmtmp ?? 0) === 0) {
      (s as any).rcntorgzmtmp = 1;
    }
  }
  (s as any).cumarr_idx = 0;
  // TODO-QSP: :cumarrloop
  if (((s as any).cumarr_idx ?? 0) < ((s as any).arrsize ?? 0)('cumarrnam')) {
    if (((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] > 0  &&  ((s as any).cumarrage ?? 0)?.[String((s as any).cumarr_idx ?? 0)] < 144) {
      if (((s as any).rcntorgzm ?? 0) === 1  &&  ((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] < ((s as any).cumarrppt ?? 0)?.[String((s as any).cumarr_idx ?? 0)]  &&  ((s as any).cumarrage ?? 0)?.[String((s as any).cumarr_idx ?? 0)] < 1) {
        (s as any).cumarrcpt[cumarr_idx] = ((s as any).cumarrcpt[cumarr_idx] ?? 0) + (((s as any).cumarrppt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] / 12);
      }
      (s as any).cumpdrop = ((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] / (144 - ((s as any).cumarrage ?? 0)?.[String((s as any).cumarr_idx ?? 0)]);
      if (((s as any).cycle ?? 0) !== 2) {
        (s as any).cumpdrop = ((s as any).cumpdrop ?? 0) + (((s as any).cumpdrop ?? 0) * ((s as any).rand ?? 0)(0, 2));
      }
      (s as any).cumarrcpt[cumarr_idx] = ((s as any).cumarrcpt[cumarr_idx] ?? 0) - (((s as any).cumpdrop ?? 0));
      if (((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] <= 0) {
        qspCall(s, 'cum_cleanup', 'cleanwomb', ((s as any).cumarr_idx ?? 0));
      } else {
        (s as any).cumarrage[cumarr_idx] = ((s as any).cumarrage[cumarr_idx] ?? 0) + (1);
        (s as any).cumarr_idx = ((s as any).cumarr_idx ?? 0) + (1);
      }
    } else {
      qspCall(s, 'cum_cleanup', 'cleanwomb', ((s as any).cumarr_idx ?? 0));
    }
    // TODO-QSP: jump 'cumarrloop'
  }
  if (((s as any).succubusflag ?? 0) === 1) {
    if (((s as any).arrsize ?? 0)('cumarrppt') > 0) {
      (s as any).succycletmp = 0;
      // TODO-QSP: :sucvagabs
      if (((s as any).cumarrdel ?? 0)?.[String((s as any).succycletmp ?? 0)] === 0) {
        if (((s as any).cumarrcpt ?? 0)?.[String((s as any).succycletmp ?? 0)] > 10000) {
          (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).succublvl ?? 0));
          (s as any).succubxp = ((s as any).succubxp ?? 0) + (3);
        } else {
          (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (5 * ((s as any).succublvl ?? 0));
          (s as any).succubxp = ((s as any).succubxp ?? 0) + (2);
          if (((s as any).cumarrcpt ?? 0)?.[String((s as any).succycletmp ?? 0)] <= 1000) {
            (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (((s as any).succublvl ?? 0));
          } else {
            (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (25 * ((s as any).succublvl ?? 0));
            (s as any).succubxp = ((s as any).succubxp ?? 0) + (3);
          }
          qspCall(s, 'cum_cleanup', 'cleanwomb', ((s as any).succycletmp ?? 0));
          (s as any).sucabscum = 1;
          (s as any).succycletmp = ((s as any).succycletmp ?? 0) + (1);
        }
        if (((s as any).succycletmp ?? 0) < ((s as any).arrsize ?? 0)('cumarrppt')) {
          // TODO-QSP: jump 'sucvagabs'
        }
      }
    }
    (s as any).cumarrtemp = 0;
    if (((s as any).arrsize ?? 0)('sparrvol') > 0) {
      // TODO-QSP: :cumspaloop
      if (((s as any).succubusflag ?? 0) === 1) {
        if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3  ||  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 12) {
          (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (25 * ((s as any).succublvl ?? 0));
          (s as any).succubxp = ((s as any).succubxp ?? 0) + (3);
          (s as any).sucabscum = 1;
          if (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] > 0) {
            (s as any).sparrvol[cumarrtemp] = 0;
          }
        }
        (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30*((s as any).succublvl ?? 0));
        (s as any).sparrvol[cumarrtemp] = ((s as any).sparrvol[cumarrtemp] ?? 0) - (30*((s as any).succublvl ?? 0));
        if (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 0) {
          (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)]);
          (s as any).sparrvol[cumarrtemp] = 0;
        }
        // TODO-QSP: end !}
      }
      if (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] <= 0  &&  (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] !== 0  ||  ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] >= 10  ||  ((s as any).sparrnam ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === '')) {
        qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).cumarrtemp ?? 0));
      } else {
        (s as any).sparrtmpv = 0;
        if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 17) {
          (s as any).sparrtmpv = qspUntranslated(s, "arrpos('cumarrcnt', sparrcnt[cumarrtemp])", { location: "femcyc" });
          if (((s as any).sparrtmpv ?? 0) >= 0) {
            if (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 4) {
              (s as any).cumarrcpt[sparrtmpv] = ((s as any).cumarrcpt[sparrtmpv] ?? 0) + (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 5);
            } else {
              (s as any).cumarrcpt[sparrtmpv] = ((s as any).cumarrcpt[sparrtmpv] ?? 0) + (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 30);
            }
          }
        } else {
          (s as any).sparrtmpv = qspUntranslated(s, "arrpos('cumarrcnt', sparrcnt[cumarrtemp])", { location: "femcyc" });
          if (((s as any).sparrtmpv ?? 0) >= 0) {
            if (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 4) {
              (s as any).cumarrcpt[sparrtmpv] = ((s as any).cumarrcpt[sparrtmpv] ?? 0) + (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 40);
            } else {
              (s as any).cumarrcpt[sparrtmpv] = ((s as any).cumarrcpt[sparrtmpv] ?? 0) + (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 60);
            }
          }
          if (((s as any).sparrslc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 1  &&  ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 5) {
            if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 1) {
              (s as any).cumarrcpt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] * ((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 1000;
              (s as any).cumarrppt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              // TODO-QSP: $cumarrnam[sparrtmpv] = $sparrnam[cumarrtemp]
              (s as any).cumarrage[sparrtmpv] = ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              (s as any).cumarrdel[sparrtmpv] = 1;
              (s as any).cumarrkno[sparrtmpv] = (-1);
              (s as any).cumarrcon[sparrtmpv] = 0;
              (s as any).cumarrcnt[sparrtmpv] = ((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
            }
          } else {
            if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 2) {
              (s as any).cumarrcpt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] * ((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 1000;
              (s as any).cumarrppt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              // TODO-QSP: $cumarrnam[sparrtmpv] = $sparrnam[cumarrtemp]
              (s as any).cumarrage[sparrtmpv] = ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              (s as any).cumarrdel[sparrtmpv] = 3;
              (s as any).cumarrkno[sparrtmpv] = (-1);
              (s as any).cumarrcon[sparrtmpv] = 0;
              (s as any).cumarrcnt[sparrtmpv] = ((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
            } else {
              (s as any).cumarrcpt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] * ((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 1000;
              (s as any).cumarrppt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              // TODO-QSP: $cumarrnam[sparrtmpv] = $sparrnam[cumarrtemp]
              (s as any).cumarrage[sparrtmpv] = ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              (s as any).cumarrdel[sparrtmpv] = 2;
              (s as any).cumarrkno[sparrtmpv] = (-1);
              (s as any).cumarrcon[sparrtmpv] = 0;
              (s as any).cumarrcnt[sparrtmpv] = ((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
            }
            if (((s as any).sparrslc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 5  &&  ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 5) {
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3) {
                (s as any).cumarrcpt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] * ((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 1000;
                (s as any).cumarrppt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                // TODO-QSP: $cumarrnam[sparrtmpv] = $sparrnam[cumarrtemp]
                (s as any).cumarrage[sparrtmpv] = ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                (s as any).cumarrdel[sparrtmpv] = 2;
                (s as any).cumarrkno[sparrtmpv] = (-1);
                (s as any).cumarrcon[sparrtmpv] = 0;
                (s as any).cumarrcnt[sparrtmpv] = ((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
              } else {
                (s as any).cumarrcpt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] * ((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 1000;
                (s as any).cumarrppt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                // TODO-QSP: $cumarrnam[sparrtmpv] = $sparrnam[cumarrtemp]
                (s as any).cumarrage[sparrtmpv] = ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                (s as any).cumarrdel[sparrtmpv] = 3;
                (s as any).cumarrkno[sparrtmpv] = (-1);
                (s as any).cumarrcon[sparrtmpv] = 0;
                (s as any).cumarrcnt[sparrtmpv] = ((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 6) {
                  (s as any).cumarrcpt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] * ((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 1000;
                  (s as any).cumarrppt[sparrtmpv] = ((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                  // TODO-QSP: $cumarrnam[sparrtmpv] = $sparrnam[cumarrtemp]
                  (s as any).cumarrage[sparrtmpv] = ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                  (s as any).cumarrdel[sparrtmpv] = 3;
                  (s as any).cumarrkno[sparrtmpv] = (-1);
                  (s as any).cumarrcon[sparrtmpv] = 0;
                  (s as any).cumarrcnt[sparrtmpv] = ((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)];
                }
              }
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 0  ||  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3  ||  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 12) {
                (s as any).sparrvol[cumarrtemp] = ((s as any).sparrvol[cumarrtemp] ?? 0) - (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] / 2);
                if (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 0) {
                  (s as any).sparrvol[cumarrtemp] = 0;
                }
              }
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 0  &&  ((s as any).cumsumvag ?? 0) > 60) {
                (s as any).sparrslc[cumarrtemp] = 1;
              }
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3  &&  ((s as any).cumsumass ?? 0) > 60) {
                (s as any).sparrslc[cumarrtemp] = 1;
              }
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 17) {
                (s as any).cumcondslip = ((s as any).cumcondslip ?? 0) + (1);
                if (((s as any).sparridt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] >= 0) {
                  (s as any).cumcondslip_aware = 1;
                }
                if (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] > 48) {
                  (s as any).cumcondslip_aware = 1;
                  if (((s as any).pcs_health ?? 0) > 100) {
                    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (((s as any).rand ?? 0)(3, ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] - 45));
                  }
                  scene.text('<center><b><br>You feel nauseous.</b></center>');
                }
              }
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] !== 0  &&  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] !== 3  &&  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] !== 12  &&  ((s as any).sparrage ?? 0) < 5) {
                (s as any).sparrslc[cumarrtemp] = ((s as any).sparrslc[cumarrtemp] ?? 0) + (1);
              }
              (s as any).sparrage[cumarrtemp] = ((s as any).sparrage[cumarrtemp] ?? 0) + (1);
              (s as any).ctemp[0] = ((s as any).ctemp[0] ?? 0) + (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)]);
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 0) {
                (s as any).ctemp[1] = ((s as any).ctemp[1] ?? 0) + (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)]);
              }
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3) {
                (s as any).ctemp[2] = ((s as any).ctemp[2] ?? 0) + (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)]);
              }
            }
            if (((s as any).cumarrtemp ?? 0) < ((s as any).arrsize ?? 0)('sparrvol')) {
              (s as any).cumarrtemp = ((s as any).cumarrtemp ?? 0) + (1);
              // TODO-QSP: jump 'cumspaloop'
            }
            (s as any).cumsumbod = qspUntranslated(s, "ctemp[0]", { location: "femcyc" });
            (s as any).cumsumvag = qspUntranslated(s, "ctemp[1]", { location: "femcyc" });
            (s as any).cumsumass = qspUntranslated(s, "ctemp[2]", { location: "femcyc" });
          }
          if (((s as any).cheatVars ?? 0)?.['no_lactation'] > 0) {
            qspCall(s, 'lact_lib', 'lactate_optout');
          } else {
            qspCall(s, 'lact_lib', 'breastcycle');
          }
          if (((s as any).cycle ?? 0) <= 0) {
            qspCall(s, 'femcyc', 'cyc0');
          } else {
            qspCall(s, 'femcyc', 'cyc1');
            if (((s as any).cycle ?? 0) === 2) {
              qspCall(s, 'femcyc', 'cyc2');
            } else {
              qspCall(s, 'femcyc', 'cyc3');
              if (((s as any).cycle ?? 0) === 4) {
                qspCall(s, 'femcyc', 'cyc4');
              } else {
                qspCall(s, 'femcyc', 'preg');
              }
              (s as any).stat['safe_day'] = 0;
              (s as any).stat['probably_safe_day'] = 0;
              (s as any).stat['dangerous_day'] = 0;
              if (((s as any).daystart ?? 0) === ((s as any).daylastperiod ?? 0) + 17) {
                (s as any).stat['safe_period_start'] = ((s as any).daystart ?? 0);
              } else {
                (s as any).stat['safe_days_remaining'] = 8;
                (s as any).stat['safe_days_remaining'] = ((s as any).stat['safe_days_remaining'] ?? 0) - (1);
              }
              if (((s as any).mesec ?? 0) > 0  ||  ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) < 6  ||  ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 18) {
                (s as any).stat['safe_day'] = 1;
                (s as any).stat['preg_risk'] = 'safe';
              } else {
                (s as any).stat['probably_safe_day'] = 1;
                (s as any).stat['preg_risk'] = 'prob_safe';
                (s as any).stat['dangerous_day'] = 1;
                (s as any).stat['preg_risk'] = 'danger';
              }
              qspCall(s, 'din_bad', 'd_cycreport_update');
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const femcyc: LocationDef = {
  name: 'femcyc',
  title: '<br>You feel nauseous.',
  region: 'other',
  enter: enter,
};
