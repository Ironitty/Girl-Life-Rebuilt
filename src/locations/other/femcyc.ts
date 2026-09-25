import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFemcycErrhdl(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).rcntorgzm ?? 0) === 1) {
    if (((s as any).rcntorgzmtmp ?? 0) === 1) {
      (s as any).rcntorgzm = 0;
      (s as any).rcntorgzmtmp = 0;
    }
    if ((!((s as any).rcntorgzmtmp ?? 0))) {
      (s as any).rcntorgzmtmp = 1;
    }
  }
  (s as any).cumarr_idx = 0;
  while (true) {
    if (((s as any).cumarr_idx ?? 0) < Object.keys((s as any).cumarrnam ?? {}).length) {
      if (((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] > 0  &&  ((s as any).cumarrage ?? 0)?.[String((s as any).cumarr_idx ?? 0)] < 144) {
        if (((s as any).rcntorgzm ?? 0) === 1  &&  ((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] < ((s as any).cumarrppt ?? 0)?.[String((s as any).cumarr_idx ?? 0)]  &&  ((s as any).cumarrage ?? 0)?.[String((s as any).cumarr_idx ?? 0)] < 1) {
          ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).cumarr_idx ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarr_idx ?? 0)] ?? 0) + ((((s as any).cumarrppt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] ?? 0) / 12);
        }
        (s as any).cumpdrop = (((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] ?? 0) / (144 - (((s as any).cumarrage ?? 0)?.[String((s as any).cumarr_idx ?? 0)] ?? 0));
        if (((s as any).cycle ?? 0) !== 2) {
          (s as any).cumpdrop = ((s as any).cumpdrop ?? 0) + (((s as any).cumpdrop ?? 0) * (Math.floor(Math.random() * 3) + 0));
        }
        ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).cumarr_idx ?? 0)] = ((s as any).cumarrcpt[String((s as any).cumarr_idx ?? 0)] ?? 0) - (((s as any).cumpdrop ?? 0));
        if (((s as any).cumarrcpt ?? 0)?.[String((s as any).cumarr_idx ?? 0)] <= 0) {
          qspCall(s, 'cum_cleanup', 'cleanwomb', ((s as any).cumarr_idx ?? 0));
        } else {
          ((s as any).cumarrage = (s as any).cumarrage ?? {})[String((s as any).cumarr_idx ?? 0)] = ((s as any).cumarrage[String((s as any).cumarr_idx ?? 0)] ?? 0) + (1);
          (s as any).cumarr_idx = ((s as any).cumarr_idx ?? 0) + (1);
        }
      } else {
        qspCall(s, 'cum_cleanup', 'cleanwomb', ((s as any).cumarr_idx ?? 0));
      }
      break;
    }
    if (((s as any).succubusflag ?? 0) === 1) {
      if (Object.keys((s as any).cumarrppt ?? {}).length > 0) {
        (s as any).succycletmp = 0;
        do {
          if (((s as any).cumarrdel ?? 0)?.[String((s as any).succycletmp ?? 0)] === 0) {
            if (((s as any).cumarrcpt ?? 0)?.[String((s as any).succycletmp ?? 0)] > 10000) {
              (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).succublvl ?? 0));
              (s as any).succubxp = ((s as any).succubxp ?? 0) + (3);
            } else {
              if (((s as any).cumarrcpt ?? 0)?.[String((s as any).succycletmp ?? 0)] < 3000  &&  ((s as any).cumarrcpt ?? 0)?.[String((s as any).succycletmp ?? 0)] > 1000) {
                (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (5 * ((s as any).succublvl ?? 0));
                (s as any).succubxp = ((s as any).succubxp ?? 0) + (2);
              } else {
                if (((s as any).cumarrcpt ?? 0)?.[String((s as any).succycletmp ?? 0)] <= 1000) {
                  (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (((s as any).succublvl ?? 0));
                } else {
                  (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (25 * ((s as any).succublvl ?? 0));
                  (s as any).succubxp = ((s as any).succubxp ?? 0) + (3);
                }
              }
            }
            qspCall(s, 'cum_cleanup', 'cleanwomb', ((s as any).succycletmp ?? 0));
            (s as any).sucabscum = 1;
          } else {
            (s as any).succycletmp = ((s as any).succycletmp ?? 0) + (1);
          }
        } while (((s as any).succycletmp ?? 0) < Object.keys((s as any).cumarrppt ?? {}).length);
      }
      (s as any).succycletmp = undefined;
    }
    (s as any).cumarrtemp = 0;
    if (Object.keys((s as any).sparrvol ?? {}).length > 0) {
      while (true) {
        if (((s as any).succubusflag ?? 0) === 1) {
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3  ||  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 12) {
            (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (25 * ((s as any).succublvl ?? 0));
            (s as any).succubxp = ((s as any).succubxp ?? 0) + (3);
            (s as any).sucabscum = 1;
            if (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] > 0) {
              ((s as any).sparrvol = (s as any).sparrvol ?? {})[String((s as any).cumarrtemp ?? 0)] = 0;
            }
          }
          (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30*((s as any).succublvl ?? 0));
          ((s as any).sparrvol = (s as any).sparrvol ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).cumarrtemp ?? 0)] ?? 0) - (30*((s as any).succublvl ?? 0));
          if (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 0) {
            (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + ((((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0));
            ((s as any).sparrvol = (s as any).sparrvol ?? {})[String((s as any).cumarrtemp ?? 0)] = 0;
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
                ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = ((s as any).cumarrcpt[String((s as any).sparrtmpv ?? 0)] ?? 0) + ((((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 5);
              } else {
                if (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 10) {
                  ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = ((s as any).cumarrcpt[String((s as any).sparrtmpv ?? 0)] ?? 0) + ((((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 30);
                }
              }
            }
          } else {
            if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 0) {
              (s as any).sparrtmpv = qspUntranslated(s, "arrpos('cumarrcnt', sparrcnt[cumarrtemp])", { location: "femcyc" });
              if (((s as any).sparrtmpv ?? 0) >= 0) {
                if (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 4) {
                  ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = ((s as any).cumarrcpt[String((s as any).sparrtmpv ?? 0)] ?? 0) + ((((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 40);
                } else {
                  if (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 10) {
                    ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = ((s as any).cumarrcpt[String((s as any).sparrtmpv ?? 0)] ?? 0) + ((((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 60);
                  }
                }
              }
            } else {
              if (((s as any).sparrslc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 1  &&  ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 5) {
                if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 1) {
                  ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) * (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 1000;
                  ((s as any).cumarrppt = (s as any).cumarrppt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                  ((s as any).cumarrnam = (s as any).cumarrnam ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrnam ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                  ((s as any).cumarrage = (s as any).cumarrage ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                  ((s as any).cumarrdel = (s as any).cumarrdel ?? {})[String((s as any).sparrtmpv ?? 0)] = 1;
                  ((s as any).cumarrkno = (s as any).cumarrkno ?? {})[String((s as any).sparrtmpv ?? 0)] = (-1);
                  ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).sparrtmpv ?? 0)] = 0;
                  ((s as any).cumarrcnt = (s as any).cumarrcnt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                }
              } else {
                if (((s as any).sparrslc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3  &&  ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 5) {
                  if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 2) {
                    ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) * (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 1000;
                    ((s as any).cumarrppt = (s as any).cumarrppt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                    ((s as any).cumarrnam = (s as any).cumarrnam ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrnam ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                    ((s as any).cumarrage = (s as any).cumarrage ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                    ((s as any).cumarrdel = (s as any).cumarrdel ?? {})[String((s as any).sparrtmpv ?? 0)] = 3;
                    ((s as any).cumarrkno = (s as any).cumarrkno ?? {})[String((s as any).sparrtmpv ?? 0)] = (-1);
                    ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).sparrtmpv ?? 0)] = 0;
                    ((s as any).cumarrcnt = (s as any).cumarrcnt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                  } else {
                    if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 4) {
                      ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) * (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 1000;
                      ((s as any).cumarrppt = (s as any).cumarrppt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                      ((s as any).cumarrnam = (s as any).cumarrnam ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrnam ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                      ((s as any).cumarrage = (s as any).cumarrage ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                      ((s as any).cumarrdel = (s as any).cumarrdel ?? {})[String((s as any).sparrtmpv ?? 0)] = 2;
                      ((s as any).cumarrkno = (s as any).cumarrkno ?? {})[String((s as any).sparrtmpv ?? 0)] = (-1);
                      ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).sparrtmpv ?? 0)] = 0;
                      ((s as any).cumarrcnt = (s as any).cumarrcnt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                    }
                  }
                } else {
                  if (((s as any).sparrslc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 5  &&  ((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 5) {
                    if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3) {
                      ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) * (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 1000;
                      ((s as any).cumarrppt = (s as any).cumarrppt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                      ((s as any).cumarrnam = (s as any).cumarrnam ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrnam ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                      ((s as any).cumarrage = (s as any).cumarrage ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                      ((s as any).cumarrdel = (s as any).cumarrdel ?? {})[String((s as any).sparrtmpv ?? 0)] = 2;
                      ((s as any).cumarrkno = (s as any).cumarrkno ?? {})[String((s as any).sparrtmpv ?? 0)] = (-1);
                      ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).sparrtmpv ?? 0)] = 0;
                      ((s as any).cumarrcnt = (s as any).cumarrcnt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                    } else {
                      if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 5) {
                        ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) * (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 1000;
                        ((s as any).cumarrppt = (s as any).cumarrppt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                        ((s as any).cumarrnam = (s as any).cumarrnam ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrnam ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                        ((s as any).cumarrage = (s as any).cumarrage ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                        ((s as any).cumarrdel = (s as any).cumarrdel ?? {})[String((s as any).sparrtmpv ?? 0)] = 3;
                        ((s as any).cumarrkno = (s as any).cumarrkno ?? {})[String((s as any).sparrtmpv ?? 0)] = (-1);
                        ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).sparrtmpv ?? 0)] = 0;
                        ((s as any).cumarrcnt = (s as any).cumarrcnt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                      } else {
                        if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 6) {
                          ((s as any).cumarrcpt = (s as any).cumarrcpt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) * (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 1000;
                          ((s as any).cumarrppt = (s as any).cumarrppt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrppt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                          ((s as any).cumarrnam = (s as any).cumarrnam ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrnam ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                          ((s as any).cumarrage = (s as any).cumarrage ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                          ((s as any).cumarrdel = (s as any).cumarrdel ?? {})[String((s as any).sparrtmpv ?? 0)] = 3;
                          ((s as any).cumarrkno = (s as any).cumarrkno ?? {})[String((s as any).sparrtmpv ?? 0)] = (-1);
                          ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).sparrtmpv ?? 0)] = 0;
                          ((s as any).cumarrcnt = (s as any).cumarrcnt ?? {})[String((s as any).sparrtmpv ?? 0)] = (((s as any).sparrcnt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 0  ||  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3  ||  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 12) {
            ((s as any).sparrvol = (s as any).sparrvol ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).sparrvol[String((s as any).cumarrtemp ?? 0)] ?? 0) - ((((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) / 2);
            if (((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] < 0) {
              ((s as any).sparrvol = (s as any).sparrvol ?? {})[String((s as any).cumarrtemp ?? 0)] = 0;
            }
          }
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 0  &&  ((s as any).cumsumvag ?? 0) > 60) {
            ((s as any).sparrslc = (s as any).sparrslc ?? {})[String((s as any).cumarrtemp ?? 0)] = 1;
          }
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3  &&  ((s as any).cumsumass ?? 0) > 60) {
            ((s as any).sparrslc = (s as any).sparrslc ?? {})[String((s as any).cumarrtemp ?? 0)] = 1;
          }
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 17) {
            (s as any).cumcondslip = ((s as any).cumcondslip ?? 0) + (1);
            if (((s as any).sparridt ?? 0)?.[String((s as any).cumarrtemp ?? 0)] >= 0) {
              (s as any).cumcondslip_aware = 1;
            }
            if (((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] > 48) {
              (s as any).cumcondslip_aware = 1;
              if (((s as any).pcs_health ?? 0) > 100) {
                (s as any).pcs_health = ((s as any).pcs_health ?? 0) - ((Math.floor(Math.random() * ((((s as any).sparrage ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0) - 45 - 3 + 1)) + (3)));
              }
              scene.text('<center><b><br>You feel nauseous.</b></center>');
            }
          }
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] !== 0  &&  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] !== 3  &&  ((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] !== 12  &&  ((s as any).sparrage ?? 0) < 5) {
            ((s as any).sparrslc = (s as any).sparrslc ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).sparrslc[String((s as any).cumarrtemp ?? 0)] ?? 0) + (1);
          }
          ((s as any).sparrage = (s as any).sparrage ?? {})[String((s as any).cumarrtemp ?? 0)] = ((s as any).sparrage[String((s as any).cumarrtemp ?? 0)] ?? 0) + (1);
          ((s as any).ctemp = (s as any).ctemp ?? {})[0] = ((s as any).ctemp[0] ?? 0) + ((((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0));
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 0) {
            ((s as any).ctemp = (s as any).ctemp ?? {})[1] = ((s as any).ctemp[1] ?? 0) + ((((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0));
          }
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 3) {
            ((s as any).ctemp = (s as any).ctemp ?? {})[2] = ((s as any).ctemp[2] ?? 0) + ((((s as any).sparrvol ?? 0)?.[String((s as any).cumarrtemp ?? 0)] ?? 0));
          }
        }
        if (((s as any).cumarrtemp ?? 0) < Object.keys((s as any).sparrvol ?? {}).length) {
          (s as any).cumarrtemp = ((s as any).cumarrtemp ?? 0) + (1);
          break;
        }
        (s as any).cumsumbod = (((s as any).ctemp ?? 0)?.[0] ?? 0);
        (s as any).cumsumvag = (((s as any).ctemp ?? 0)?.[1] ?? 0);
        (s as any).cumsumass = (((s as any).ctemp ?? 0)?.[2] ?? 0);
        (s as any).ctemp = undefined;
        (s as any).sparrtmpv = undefined;
        (s as any).cumarrtemp = undefined;
      }
    }
    if (((s as any).cheatVars ?? 0)?.['no_lactation'] > 0) {
      qspCall(s, 'lact_lib', 'lactate_optout');
    } else {
      qspCall(s, 'lact_lib', 'breastcycle');
    }
    if (((s as any).cycle ?? 0) <= 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCyc0(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).cycle ?? 0) === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCyc1(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).cycle ?? 0) === 2) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCyc2(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).cycle ?? 0) === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCyc3(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).cycle ?? 0) === 4) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCyc4(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).cycle ?? 0) === 5) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPreg(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            }
          }
        }
      }
    }
    ((s as any).stat = (s as any).stat ?? {})['safe_day'] = 0;
    ((s as any).stat = (s as any).stat ?? {})['probably_safe_day'] = 0;
    ((s as any).stat = (s as any).stat ?? {})['dangerous_day'] = 0;
    if (((s as any).daystart ?? 0) === ((s as any).daylastperiod ?? 0) + 17) {
      ((s as any).stat = (s as any).stat ?? {})['safe_period_start'] = ((s as any).daystart ?? 0);
    } else {
      if (((s as any).daylastperiod ?? 0) === ((s as any).daystart ?? 0)) {
        ((s as any).stat = (s as any).stat ?? {})['safe_days_remaining'] = 8;
      } else {
        ((s as any).stat = (s as any).stat ?? {})['safe_days_remaining'] = ((s as any).stat['safe_days_remaining'] ?? 0) - (1);
      }
    }
    if (((s as any).mesec ?? 0) > 0  ||  ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) < 6  ||  ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 18) {
      ((s as any).stat = (s as any).stat ?? {})['safe_day'] = 1;
      ((s as any).stat = (s as any).stat ?? {})['preg_risk'] = 'safe';
    } else {
      if (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) < 8  ||  ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) >= 17) {
        ((s as any).stat = (s as any).stat ?? {})['probably_safe_day'] = 1;
        ((s as any).stat = (s as any).stat ?? {})['preg_risk'] = 'prob_safe';
      } else {
        ((s as any).stat = (s as any).stat ?? {})['dangerous_day'] = 1;
        ((s as any).stat = (s as any).stat ?? {})['preg_risk'] = 'danger';
      }
    }
    qspCall(s, 'din_bad', 'd_cycreport_update');
  }
  scene.build();
}

function enterCyc0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mesec ?? 0) <= 0) {
    (s as any).lastmens = ((s as any).daystart ?? 0);
    (s as any).cycle = 1;
    (s as any).mesec = 0;
    if ((Math.floor(Math.random() * 1001) + 0) === 1000) {
      (s as any).EggRH = (Math.floor(Math.random() * 61) + 20);
    } else {
      (s as any).EggRH = 0;
    }
    (s as any).focH = ((s as any).focH ?? 0) + (((s as any).EggRH ?? 0));
  } else {
    (s as any).mesec = ((s as any).mesec ?? 0) - (1);
    (s as any).focH = ((s as any).focH ?? 0) + (1);
  }
  ((s as any).stat = (s as any).stat ?? {})['cycle_phase'] = 'menstruation';
  scene.build();
}

function enterCyc1(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['cycle_phase'] = 'follicular';
  (s as any).FertEgg = 0;
  if (((s as any).focH ?? 0) <= ((s as any).focH_max ?? 0)) {
    if (((s as any).pillcon ?? 0) <= 7000) {
      (s as any).EggRH = ((s as any).EggRH ?? 0) + (1);
    }
    if ((!(Math.floor(Math.random() * 10) + 0))) {
      (s as any).EggRH = ((s as any).EggRH ?? 0) + (1);
    }
    (s as any).focH = ((s as any).focH ?? 0) + (1);
    (s as any).temprand = (Math.floor(Math.random() * (9 - 0 + 1)) + (0));
    if (((s as any).temprand ?? 0) < 0) {
      (s as any).EggRH = ((s as any).EggRH ?? 0) - (1);
    } else {
      if (((s as any).temprand ?? 0) > 9) {
        (s as any).EggRH = ((s as any).EggRH ?? 0) + (1);
      }
    }
  } else {
    (s as any).lutH_max = (Math.floor(Math.random() * 49) + 312);
    // TODO-QSP: !{If you are ready to ovulate, it creates a chance to double ovulate. That chance is increased by yo...
    (s as any).temprand = (Math.floor(Math.random() * 21) + 0);
    (s as any).temprand = ((s as any).temprand ?? 0) + (((s as any).age ?? 0) / 15);
    (s as any).temprand = ((s as any).temprand ?? 0) - (((s as any).pillcon ?? 0) / 1000);
    if (((s as any).temprand ?? 0) > 20) {
      (s as any).EggRH = ((s as any).EggRH ?? 0) + (205);
      (s as any).temprand = (Math.floor(Math.random() * 21) + 0);
      (s as any).temprand = ((s as any).temprand ?? 0) + (((s as any).age ?? 0) / 15);
      if (((s as any).temprand ?? 0) > 20) {
        (s as any).EggRH = ((s as any).EggRH ?? 0) + (410);
      }
    }
    (s as any).focH = 0;
    (s as any).lastovulation = ((s as any).daystart ?? 0);
    (s as any).ovulate = 24 + (Math.floor(Math.random() * 21) + 0);
    (s as any).cycle = 2;
    (s as any).ferteggage = 0;
  }
  scene.build();
}

function enterCyc2(s: GameState, scene: SceneBuilder): void {
  (s as any).can_sz = 0;
  if (((s as any).ovulate ?? 0) > 0  &&  ((s as any).can_sz ?? 0) > 0  &&  ((s as any).UnfertEgg ?? 0) > 0) {
    (s as any).cumtime = undefined;
    (s as any).cumfthname = undefined;
    (s as any).wombpotfath = undefined;
    ((s as any).cumfthname = (s as any).cumfthname ?? {})[0] = 'unknown';
    ((s as any).cumtime = (s as any).cumtime ?? {})[0] = 0;
    (s as any).can_idx = 0;
    (s as any).cum_total = 0;
    do {
      (s as any).y = qspUntranslated(s, "arrpos('wombName', cumarrnam[can_idx])", { location: "femcyc" });
      if (((s as any).y ?? 0) === -1) {
        (s as any).wombName = [...((s as any).wombName ?? []), (((s as any).cumarrnam ?? 0)?.[String((s as any).can_idx ?? 0)] ?? 0)];
        (s as any).wombAmount = [...((s as any).wombAmount ?? []), (((s as any).cumarrcpt ?? 0)?.[String((s as any).can_idx ?? 0)] ?? 0)];
      } else {
        ((s as any).wombAmount = (s as any).wombAmount ?? {})[String((s as any).y ?? 0)] = ((s as any).wombAmount[String((s as any).y ?? 0)] ?? 0) + ((((s as any).cumarrcpt ?? 0)?.[String((s as any).can_idx ?? 0)] ?? 0));
      }
      (s as any).y = undefined;
      if (((s as any).cumarrkno ?? 0)?.[String((s as any).can_idx ?? 0)] === 1  &&  (Array.isArray((s as any).wombpotfath) ? ((s as any).wombpotfath as any[]).indexOf(((s as any).cumarrnam ?? 0)?.[String((s as any).can_idx ?? 0)]) : -1) < 0) {
        ((s as any).wombpotfath = (s as any).wombpotfath ?? {})[0] = (((s as any).cumarrnam ?? 0)?.[String((s as any).can_idx ?? 0)] ?? 0);
      }
      if (((s as any).cumarrdel ?? 0)?.[String((s as any).can_idx ?? 0)] === 0  &&  ((s as any).cumarrkno ?? 0)?.[String((s as any).can_idx ?? 0)] >= 0) {
        if ((Array.isArray((s as any).cumfthname) ? ((s as any).cumfthname as any[]).indexOf(((s as any).cumarrnam ?? 0)?.[String((s as any).can_idx ?? 0)]) : -1) === -1) {
          ((s as any).cumfthname = (s as any).cumfthname ?? {})[0] = (((s as any).cumarrnam ?? 0)?.[String((s as any).can_idx ?? 0)] ?? 0);
          ((s as any).cumtime = (s as any).cumtime ?? {})[0] = 1;
        } else {
          ((s as any).cumtime = (s as any).cumtime ?? {})[qspUntranslated(s, "arrpos('cumfthname', cumarrnam[can_idx])", { location: "femcyc" })] = ((s as any).cumtime[qspUntranslated(s, "arrpos('cumfthname', cumarrnam[can_idx])", { location: "femcyc" })] ?? 0) + (1);
        }
      }
      (s as any).cum_total = ((s as any).cum_total ?? 0) + ((((s as any).cumarrcpt ?? 0)?.[String((s as any).can_idx ?? 0)] ?? 0));
      (s as any).can_idx = ((s as any).can_idx ?? 0) + (1);
      if (Object.keys((s as any).cumfthname ?? {}).length === 2  &&  ((s as any).cumtime ?? 0)[0] === 0) {
        ((s as any).wombpotfath = (s as any).wombpotfath ?? {})[0] = (((s as any).cumfthname ?? 0)?.[1] ?? 0);
      } else {
        if (Object.keys((s as any).cumfthname ?? {}).length === 1) {
          ((s as any).wombpotfath = (s as any).wombpotfath ?? {})[0] = (((s as any).cumfthname ?? 0)?.[0] ?? 0);
        }
      }
      (s as any).cumfathlotto = undefined;
      (s as any).cfw_idx = 0;
      (s as any).cfw_sz = 0;
      while (true) {
        if (((s as any).cfw_idx ?? 0) < ((s as any).cfw_sz ?? 0)  &&  ((s as any).cum_total ?? 0) > 0) {
          (s as any).cfl_ct = ((((s as any).wombAmount ?? 0)?.[String((s as any).cfw_idx ?? 0)] ?? 0) * 100) / ((s as any).cum_total ?? 0);
          if (((s as any).cfl_ct ?? 0) < 1) {
            (s as any).cfl_ct = 1;
          }
          (s as any).cfl_idx = 0;
          while (true) {
            if (((s as any).cfl_ct ?? 0) > 0) {
              ((s as any).cumfathlotto = (s as any).cumfathlotto ?? {})[String((s as any).cfl_idx ?? 0)] = (((s as any).wombName ?? 0)?.[String((s as any).cfw_idx ?? 0)] ?? 0);
              (s as any).cfl_idx = ((s as any).cfl_idx ?? 0) + (1);
              (s as any).cfl_ct = ((s as any).cfl_ct ?? 0) - (1);
              break;
            }
            (s as any).cfw_idx = ((s as any).cfw_idx ?? 0) + (1);
            break;
          }
        }
        (s as any).wombName = undefined;
        (s as any).wombAmount = undefined;
        (s as any).cfl_sz = 0;
        (s as any).egg_idx = 0;
        (s as any).egg_sz = ((s as any).UnfertEgg ?? 0);
        if (((s as any).cheatVars ?? 0)?.['no_pregnancy'] === 1) {
          (s as any).egg_idx = ((s as any).egg_sz ?? 0);
        }
        while (true) {
          if (((s as any).egg_idx ?? 0) < ((s as any).egg_sz ?? 0)) {
            (s as any).fert_thresh = (Math.floor(Math.random() * 250000) + 1);
            if (((s as any).pillcon ?? 0) < 0) {
              (s as any).pillcon = 0;
            }
            if (((s as any).steriletu ?? 0) === 1) {
              (s as any).fert_thresh = ((s as any).fert_thresh ?? 0) + (((s as any).fert_thresh ?? 0) * 30);
            }
            if (((s as any).broodcurse ?? 0) > 0) {
              // TODO-QSP: fert_thresh /= 2
            }
            if (((s as any).cheatVars ?? 0)?.['preg_chance'] !== 0) {
              (s as any).fert_thresh = (((s as any).fert_thresh ?? 0) * 100) / qspFunc(s, '_difficulty', 'get_multiplied', (((s as any).cheatVars ?? 0)?.['preg_chance']), 100, (((s as any).cheatVars ?? 0)?.['preg_chance_custom']));
            }
            if (((s as any).trait_vars ?? 0)?.['fertility'] > 0) {
              // TODO-QSP: fert_thresh /= 2
            }
            if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
              // TODO-QSP: fert_thresh *= 2
            }
            if (((s as any).fert_thresh ?? 0) <= ((s as any).cum_total ?? 0)  &&  ((s as any).trait_vars ?? 0)?.['fertility'] !== -2) {
              (s as any).lotto_idx = (Math.floor(Math.random() * (((s as any).cfl_sz ?? 0) - 1 - 0 + 1)) + (0));
              (s as any).UnfertEgg = ((s as any).UnfertEgg ?? 0) - (1);
              (s as any).FertEgg = ((s as any).FertEgg ?? 0) + (1);
              (s as any).nextBaby = 0;
              ((s as any).polkid = (s as any).polkid ?? {})[String((s as any).nextBaby ?? 0)] = (Math.floor(Math.random() * 2) + 0);
              ((s as any).kidname = (s as any).kidname ?? {})[String((s as any).nextBaby ?? 0)] = 'unborn';
              ((s as any).kidage = (s as any).kidage ?? {})[String((s as any).nextBaby ?? 0)] = 0;
              ((s as any).daykid = (s as any).daykid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
              ((s as any).monthkid = (s as any).monthkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
              ((s as any).yearkid = (s as any).yearkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
              ((s as any).Babyptype = (s as any).Babyptype ?? {})[String((s as any).nextBaby ?? 0)] = 0;
              ((s as any).ChildFath = (s as any).ChildFath ?? {})[String((s as any).nextBaby ?? 0)] = (((s as any).cumfathlotto ?? 0)?.[String((s as any).lotto_idx ?? 0)] ?? 0);
              ((s as any).hairkid = (s as any).hairkid ?? {})[String((s as any).nextBaby ?? 0)] = (Math.floor(Math.random() * 4) + 0);
              ((s as any).eyeskid = (s as any).eyeskid ?? {})[String((s as any).nextBaby ?? 0)] = (Math.floor(Math.random() * 4) + 0);
              ((s as any).ChildConType = (s as any).ChildConType ?? {})[String((s as any).nextBaby ?? 0)] = (((s as any).cumarrcon ?? 0)?.[String((s as any).nextBaby ?? 0)] ?? 0);
              if (((s as any).FertEgg ?? 0) > 1) {
                ((s as any).childtype = (s as any).childtype ?? {})[String((s as any).nextBaby ?? 0)] = 'fraternal twin';
                ((s as any).childtype = (s as any).childtype ?? {})[((s as any).nextBaby ?? 0)-1] = 'fraternal twin';
              } else {
                ((s as any).childtype = (s as any).childtype ?? {})[String((s as any).nextBaby ?? 0)] = '';
              }
            }
            (s as any).egg_idx = ((s as any).egg_idx ?? 0) + (1);
            break;
          }
          (s as any).cumfathlotto = undefined;
          (s as any).temp = undefined;
          (s as any).tempovbonus = 0;
        }
      }
    } while (((s as any).can_idx ?? 0) < ((s as any).can_sz ?? 0));
  }
  if (((s as any).pillcon ?? 0) > 26000  &&  (Math.floor(Math.random() * 401) + 0) !== 0) {
    (s as any).EggRH = 0;
  }
  while (true) {
    if (((s as any).EggRH ?? 0) > ((((s as any).UnfertEgg ?? 0) + ((s as any).FertEgg ?? 0)) * 150)) {
      (s as any).UnfertEgg = ((s as any).UnfertEgg ?? 0) + (1);
      (s as any).EggRH = ((s as any).EggRH ?? 0) - ((200 * ((s as any).UnfertEgg ?? 0)));
      break;
    }
    if (((s as any).ovulate ?? 0) <= 0) {
      (s as any).cycle = 3;
      (s as any).UnfertEgg = 0;
    }
    if (((s as any).FertEgg ?? 0) === 1  &&  ((s as any).ferteggage ?? 0) < 330) {
      if ((!(Math.floor(Math.random() * ((2000 - ((s as any).age ?? 0) * 20 - 0 + 1)) + (0))))) {
        (s as any).FertEgg = ((s as any).FertEgg ?? 0) + (1);
        (s as any).nextBaby = 0;
        ((s as any).polkid = (s as any).polkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).polkid ?? 0)[((s as any).nextBaby ?? 0)-1];
        ((s as any).kidname = (s as any).kidname ?? {})[String((s as any).nextBaby ?? 0)] = 'unborn';
        ((s as any).kidage = (s as any).kidage ?? {})[String((s as any).nextBaby ?? 0)] = 0;
        ((s as any).daykid = (s as any).daykid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
        ((s as any).monthkid = (s as any).monthkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
        ((s as any).yearkid = (s as any).yearkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
        ((s as any).Babyptype = (s as any).Babyptype ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).Babyptype ?? 0)[((s as any).nextBaby ?? 0)-1];
        ((s as any).ChildFath = (s as any).ChildFath ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).ChildFath ?? 0)[((s as any).nextBaby ?? 0)-1];
        ((s as any).hairkid = (s as any).hairkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).hairkid ?? 0)[((s as any).nextBaby ?? 0)-1];
        ((s as any).eyeskid = (s as any).eyeskid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).eyeskid ?? 0)[((s as any).nextBaby ?? 0)-1];
        ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).cumarrcon ?? 0)[((s as any).nextBaby ?? 0)-1];
        ((s as any).childtype = (s as any).childtype ?? {})[String((s as any).nextBaby ?? 0)] = 'identical twin';
        ((s as any).childtype = (s as any).childtype ?? {})[((s as any).nextBaby ?? 0)-1] = 'identical twin';
      }
    }
    (s as any).ferteggage = ((s as any).ferteggage ?? 0) + (1);
    (s as any).Ovulate = ((s as any).Ovulate ?? 0) - (1);
    (s as any).LutH = ((s as any).LutH ?? 0) + (1);
    ((s as any).stat = (s as any).stat ?? {})['cycle_phase'] = 'ovulation';
    if (((s as any).bodyVars ?? 0)?.['bust_cycle'] < 12) {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_cycle'] = ((s as any).bodyVars['bust_cycle'] ?? 0) + (1);
    } else {
      ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_cycle'] = 0;
      if ((Math.floor(Math.random() * 3) + 1) >= 2) {
        ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_menst'] = ((s as any).bodyVars['bust_menst'] ?? 0) + (1);
      }
    }
  }
  scene.build();
}

function enterCyc3(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['cycle_phase'] = 'luteal';
  if (((s as any).FertEgg ?? 0) === 1  &&  ((s as any).ferteggage ?? 0) < 330) {
    if ((!(Math.floor(Math.random() * ((2000 - ((s as any).age ?? 0) * 20 - 0 + 1)) + (0))))) {
      (s as any).FertEgg = ((s as any).FertEgg ?? 0) + (1);
      (s as any).nextBaby = 0;
      ((s as any).polkid = (s as any).polkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).polkid ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).kidname = (s as any).kidname ?? {})[String((s as any).nextBaby ?? 0)] = 'unborn';
      ((s as any).kidage = (s as any).kidage ?? {})[String((s as any).nextBaby ?? 0)] = 0;
      ((s as any).daykid = (s as any).daykid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
      ((s as any).monthkid = (s as any).monthkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
      ((s as any).yearkid = (s as any).yearkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
      ((s as any).Babyptype = (s as any).Babyptype ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).Babyptype ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).ChildFath = (s as any).ChildFath ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).ChildFath ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).hairkid = (s as any).hairkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).hairkid ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).eyeskid = (s as any).eyeskid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).eyeskid ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).cumarrcon ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).childtype = (s as any).childtype ?? {})[String((s as any).nextBaby ?? 0)] = 'identical twin';
      ((s as any).childtype = (s as any).childtype ?? {})[((s as any).nextBaby ?? 0)-1] = 'identical twin';
    }
  }
  (s as any).ferteggage = ((s as any).ferteggage ?? 0) + (1);
  (s as any).implant_idx = 0;
  (s as any).implant_sz = 0;
  while (true) {
    if (((s as any).implant_idx ?? 0) < ((s as any).implant_sz ?? 0)) {
      if (((s as any).Babyptype ?? 0)?.[String((s as any).implant_idx ?? 0)] === 0  &&  ((s as any).ChildFath ?? 0)?.[String((s as any).implant_idx ?? 0)] !== '') {
        (s as any).imp_rand = (Math.floor(Math.random() * 120001) + 0);
        if (((s as any).ferteggage ?? 0) < 120  &&  ((s as any).broodcurse ?? 0) <= 0) {
          (s as any).imp_rand = ((s as any).imp_rand ?? 0) + (170);
          (s as any).imp_rand = ((s as any).imp_rand ?? 0) - (((s as any).age ?? 0) * 10);
          if (((s as any).steriletu ?? 0) === 1) {
            (s as any).imp_rand = ((s as any).imp_rand ?? 0) - (200);
          }
          if (((s as any).imp_rand ?? 0) <= 0) {
            ((s as any).Babyptype = (s as any).Babyptype ?? {})[String((s as any).implant_idx ?? 0)] = 2;
            (s as any).FertEgg = ((s as any).FertEgg ?? 0) - (1);
            (s as any).babyembryo = ((s as any).babyembryo ?? 0) + (1);
            (s as any).pregChem = (Math.floor(Math.random() * 21) + 10);
            (s as any).pregChemFrac = 0;
            if ((!((s as any).preg ?? 0))) {
              (s as any).preg = 1;
            }
            (s as any).implant_day = ((s as any).daystart ?? 0);
            (s as any).implant_hour = ((s as any).hour ?? 0);
          }
        } else {
          (s as any).imp_rand = ((s as any).imp_rand ?? 0) + (((s as any).sterilewb ?? 0));
          (s as any).imp_rand = ((s as any).imp_rand ?? 0) - (((s as any).tempwbbonus ?? 0));
          if (((s as any).broodcurse ?? 0) > 0  &&  ((s as any).ferteggage ?? 0) >= 120) {
            (s as any).imp_rand = 0;
          }
          if (((s as any).imp_rand ?? 0) <= (1200 - (((s as any).age ?? 0) * 7))) {
            ((s as any).Babyptype = (s as any).Babyptype ?? {})[String((s as any).implant_idx ?? 0)] = 1;
            (s as any).FertEgg = ((s as any).FertEgg ?? 0) - (1);
            (s as any).babyembryo = ((s as any).babyembryo ?? 0) + (1);
            (s as any).pregChem = (Math.floor(Math.random() * 21) + 10);
            (s as any).pregChemFrac = 0;
            if ((!((s as any).preg ?? 0))) {
              (s as any).preg = 1;
            }
            (s as any).implant_day = ((s as any).daystart ?? 0);
            (s as any).implant_hour = ((s as any).hour ?? 0);
          }
          (s as any).tempwbbonus = 0;
        }
      }
      (s as any).implant_idx = ((s as any).implant_idx ?? 0) + (1);
      break;
    }
    if (((s as any).lutH ?? 0) > ((s as any).lutH_max ?? 0)) {
      (s as any).rej_idx = 0;
      (s as any).rej_sz = 0;
      while (true) {
        if (((s as any).rej_idx ?? 0) < ((s as any).rej_sz ?? 0)) {
          if (((s as any).Babyptype ?? 0)?.[String((s as any).rej_idx ?? 0)] === 0) {
            (s as any).polkid = undefined;
            (s as any).kidname = undefined;
            (s as any).kidage = undefined;
            (s as any).daykid = undefined;
            (s as any).monthkid = undefined;
            (s as any).yearkid = undefined;
            (s as any).Babyptype = undefined;
            (s as any).ChildFath = undefined;
            (s as any).hairkid = undefined;
            (s as any).eyeskid = undefined;
            (s as any).cumarrcon = undefined;
            (s as any).FertEgg = ((s as any).FertEgg ?? 0) - (1);
          }
          (s as any).rej_idx = ((s as any).rej_idx ?? 0) + (1);
          break;
        }
        (s as any).lutH = 0;
        if (((s as any).preg ?? 0) === 1) {
          (s as any).cycle = 5;
        } else {
          if (((s as any).menoage ?? 0) <= ((s as any).age ?? 0)) {
            (s as any).wombpotfath = undefined;
            (s as any).cumfthname = undefined;
            (s as any).cumfthusedname = undefined;
            (s as any).cumtime = undefined;
            (s as any).cycle = 6;
          } else {
            (s as any).wombpotfath = undefined;
            (s as any).cumfthname = undefined;
            (s as any).cumfthusedname = undefined;
            (s as any).cumtime = undefined;
            (s as any).focH_max = (Math.floor(Math.random() * 49) + 312);
            (s as any).temprand = (Math.floor(Math.random() * 11) + 0);
            if (((s as any).pillcon ?? 0) >= 38000  ||  (((s as any).pillcon ?? 0) > 0  &&  (Math.floor(Math.random() * 24) + 1) === 1)) {
              (s as any).EggRH = 0;
              (s as any).cycle = 1;
              (s as any).mesec = 0;
            } else {
              (s as any).cycle = 0;
              (s as any).abortionbirthdate = undefined;
              if (((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                (s as any).daylastperiod = ((s as any).daystart ?? 0);
              }
              (s as any).firstmens = ((s as any).daystart ?? 0);
              (s as any).temprand = (Math.floor(Math.random() * 11) + 0);
              if (((s as any).temprand ?? 0) === 0  &&  ((s as any).pillcon ?? 0) < 10000) {
                (s as any).mesec = (Math.floor(Math.random() * 33) + 104);
              } else {
                if (((s as any).temprand ?? 0) < 9  &&  ((s as any).pillcon ?? 0) < 15000) {
                  (s as any).mesec = (Math.floor(Math.random() * 29) + 76);
                } else {
                  if (((s as any).pillcon ?? 0) < 20000) {
                    (s as any).mesec = (Math.floor(Math.random() * 25) + 52);
                  } else {
                    (s as any).mesec = (Math.floor(Math.random() * 9) + 44);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).preg ?? 0) === 1) {
        (s as any).pregChemFrac = ((s as any).pregChemFrac ?? 0) + (qspFunc(s, '_difficulty', 'get_multiplied', (((s as any).cheatVars ?? 0)?.['preg_speed']), 100, (((s as any).cheatVars ?? 0)?.['preg_speed_custom'])));
        (s as any).pregChem = ((s as any).pregChem ?? 0) + (((s as any).pregChemFrac ?? 0) / 100);
        (s as any).pregChemFrac = ((s as any).pregChemFrac ?? 0) % 100;
      }
      if ((Math.floor(Math.random() * 101) + 0) < 100) {
        (s as any).lutH = ((s as any).lutH ?? 0) + (1);
      }
    }
  }
  scene.build();
}

function enterCyc4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).RecovH ?? 0) <= 0) {
    (s as any).cycle = 1;
    if (((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
      (s as any).knowpregloss = 0;
      (s as any).knowpregrecover = 0;
    }
    if ((Math.floor(Math.random() * 1001) + 0) === 1000) {
      (s as any).EggRH = (Math.floor(Math.random() * 61) + 20);
    } else {
      (s as any).EggRH = 0;
    }
    (s as any).focH = ((s as any).EggRH ?? 0);
  } else {
    (s as any).RecovH = ((s as any).RecovH ?? 0) - (1);
    if ((!(Math.floor(Math.random() * 11) + 0))) {
      (s as any).RecovH = ((s as any).RecovH ?? 0) - (1);
    }
  }
  scene.build();
}

function enterPreg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).FertEgg ?? 0) === 1  &&  ((s as any).ferteggage ?? 0) < 330) {
    if ((!(Math.floor(Math.random() * ((2000 - ((s as any).age ?? 0) * 20 - 0 + 1)) + (0))))) {
      (s as any).babyembryo = ((s as any).babyembryo ?? 0) + (1);
      (s as any).pregChem = ((s as any).pregChem ?? 0) + ((Math.floor(Math.random() * 21) + 10));
      (s as any).nextBaby = 0;
      ((s as any).polkid = (s as any).polkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).polkid ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).kidname = (s as any).kidname ?? {})[String((s as any).nextBaby ?? 0)] = 'unborn';
      ((s as any).kidage = (s as any).kidage ?? {})[String((s as any).nextBaby ?? 0)] = 0;
      ((s as any).daykid = (s as any).daykid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
      ((s as any).monthkid = (s as any).monthkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
      ((s as any).yearkid = (s as any).yearkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
      ((s as any).Babyptype = (s as any).Babyptype ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).Babyptype ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).ChildFath = (s as any).ChildFath ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).ChildFath ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).hairkid = (s as any).hairkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).hairkid ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).eyeskid = (s as any).eyeskid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).eyeskid ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).cumarrcon = (s as any).cumarrcon ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).cumarrcon ?? 0)[((s as any).nextBaby ?? 0)-1];
      ((s as any).childtype = (s as any).childtype ?? {})[String((s as any).nextBaby ?? 0)] = 'identical twin';
      ((s as any).childtype = (s as any).childtype ?? {})[((s as any).nextBaby ?? 0)-1] = 'identical twin';
    }
  }
  (s as any).pregChemFrac = ((s as any).pregChemFrac ?? 0) + (qspFunc(s, '_difficulty', 'get_multiplied', (((s as any).cheatVars ?? 0)?.['preg_speed']), 100, (((s as any).cheatVars ?? 0)?.['preg_speed_custom'])));
  (s as any).pregChem = ((s as any).pregChem ?? 0) + (((s as any).pregChemFrac ?? 0) / 100);
  (s as any).pregChemFrac = ((s as any).pregChemFrac ?? 0) % 100;
  (s as any).temprand = (Math.floor(Math.random() * (800 - (-400) + 1)) + ((-400)));
  (s as any).temprand = ((s as any).temprand ?? 0) - ((((s as any).babyembryo ?? 0) - 1) * 588);
  if (((s as any).pregChem ?? 0) > 6573 + ((s as any).temprand ?? 0)  &&  ((s as any).preg ?? 0) !== 2) {
    scene.text('A sharp pain pierces your abdomen, and you feel something flow down your legs. Your water has broken!');
    if (((s as any).lactation ?? 0)?.['active'] < 1) {
      scene.text(String(qspFunc(s, 'lact_lib', 'lact_switch') || ''));
    }
    (s as any).cycreport_txt = 'In labour';
    (s as any).arrmodtmp = 0;
    (s as any).arrmodtmp = ((s as any).arrmodtmp ?? 0) - (qspUntranslated(s, "(babyembryo)", { location: "femcyc" }));
    while (true) {
      if (((s as any).arrmodtmp ?? 0) < Object.keys((s as any).ChildFath ?? {}).length  &&  ((s as any).daykid ?? 0)?.[String((s as any).arrmodtmp ?? 0)] === 0) {
        ((s as any).daykid = (s as any).daykid ?? {})[String((s as any).arrmodtmp ?? 0)] = 42;
        if (((s as any).npc_usedname ?? 0)?.[String((s as any).wombthfathID ?? 0)] !== '') {
          ((s as any).ChildThFath = (s as any).ChildThFath ?? {})[String((s as any).arrmodtmp ?? 0)] = ((s as any).wombthfathID ?? 0);
        } else {
          ((s as any).ChildThFath = (s as any).ChildThFath ?? {})[String((s as any).arrmodtmp ?? 0)] = 'unknown';
        }
        (s as any).arrmodtmp = ((s as any).arrmodtmp ?? 0) + (1);
        break;
      }
      (s as any).wombpotfath = undefined;
      (s as any).wombthfath = undefined;
      (s as any).preg = 2;
      (s as any).pregminut = ((s as any).totminut ?? 0) + 1440;
      if (((s as any).babyembryo ?? 0) > 1) {
        scene.text('Your babies are coming…');
      } else {
        scene.text('Your baby is coming…');
      }
      if (((s as any).pregChem ?? 0) < 3885) {
        scene.text('Way too early!');
      } else {
        if (((s as any).pregChem ?? 0) < 5229) {
          scene.text('Very early!');
        } else {
          if (((s as any).pregChem ?? 0) < 6069) {
            scene.text('Early.');
          } else {
            if (((s as any).pregChem ?? 0) > 6959) {
              scene.text('Late.');
            } else {
              if (((s as any).pregChem ?? 0) > 7245) {
                scene.text('Very late!');
              }
            }
          }
        }
      }
      scene.text('You need to get to a clinic.');
    }
  }
  if (((s as any).pregChem ?? 0) > 2203) {
    if (((s as any).pregChem ?? 0) > 2853  ||  ((s as any).kid ?? 0) > 0) {
      if ((!(Math.floor(Math.random() * 8) + 0))) {
        qspCall(s, 'din_bad', 'd_pregmovement');
      }
    } else {
      if ((!(Math.floor(Math.random() * 501) + 0))) {
        qspCall(s, 'din_bad', 'd_pregmovement');
      }
    }
  }
  scene.build();
}

function enterFemcycErrhdl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cycle ?? 0) < 0  ||  ((s as any).cycle ?? 0) > 6) {
    (s as any).cycle = 0;
  }
  if (((s as any).rcntorgzmtmp ?? 0) < 0  ||  ((s as any).rcntorgzmtmp ?? 0) > 1) {
    (s as any).rcntorgzmtmp = 0;
  }
  if (((s as any).rcntorgzm ?? 0) < 0  ||  ((s as any).rcntorgzm ?? 0) > 1) {
    (s as any).rcntorgzm = 0;
  }
  if (((s as any).pregChem ?? 0) < 0) {
    (s as any).pregChem = 0;
  }
  if (((s as any).preg ?? 0) < 0  ||  ((s as any).preg ?? 0) > 2) {
    (s as any).preg = 0;
  }
  if (((s as any).ferteggage ?? 0) < 0) {
    (s as any).ferteggage = 0;
  }
  if (((s as any).EggRH ?? 0) < 0) {
    (s as any).EggRH = 0;
  }
  if (((s as any).focH ?? 0) < 0) {
    (s as any).focH = 0;
  }
  if (((s as any).FertEgg ?? 0) < 0) {
    (s as any).FertEgg = 0;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).lutH_max ?? 0))) {
    (s as any).lutH_max = (Math.floor(Math.random() * 49) + 312);
    // TODO-QSP: !! 13-15 days including ovulation
  }
  if ((!((s as any).focH_max ?? 0))) {
    (s as any).focH_max = (Math.floor(Math.random() * 49) + 312);
    // TODO-QSP: !! 13-15 days including menstruation
  }
  const arg = s.locArg;
  switch (arg) {
    case 'cyc0':
      enterCyc0(s, scene);
      break;
    case 'cyc1':
      enterCyc1(s, scene);
      break;
    case 'cyc2':
      enterCyc2(s, scene);
      break;
    case 'cyc3':
      enterCyc3(s, scene);
      break;
    case 'cyc4':
      enterCyc4(s, scene);
      break;
    case 'preg':
      enterPreg(s, scene);
      break;
    case 'femcyc_errhdl':
      enterFemcycErrhdl(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const femcyc: LocationDef = {
  name: 'femcyc',
  title: '<br>You feel nauseous.',
  region: 'other',
  enter: enter,
};
