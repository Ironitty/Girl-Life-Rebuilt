import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBrodila(s: GameState, scene: SceneBuilder): void {
  (s as any).sexpartkno = 0;
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['korr', ''] }]);
  } else {
    if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['korr2x', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    }
  }
  scene.build();
}

function enterBrodilr(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).accessible_property ?? 0)?.['parents_home'] === 4) {
    scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
  } else {
    if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['pushkin_sq', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    }
  }
  scene.build();
}

function enterBrodilk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['kuhr', ''] }]);
  } else {
    if (((s as any).accessible_property ?? 0)?.['old_town_apartment']=== 1) {
      scene.actions([{ label: 'Continue', goto: ['kuhr2x', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    }
  }
  scene.build();
}

function enterBrodils(s: GameState, scene: SceneBuilder): void {
  if (((s as any).accessible_property ?? 0)?.['city_apartment'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['sitr', ''] }]);
  } else {
    if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['sitr2x', ''] }]);
    } else {
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).accessible_property ?? 0)?.['parents_home'] === 4) {
        scene.actions([{ label: 'Continue', goto: ['sitrPar', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
      }
    }
  }
  scene.build();
}

function enterDogpot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A191');
  scene.build();
}

function enterRexpot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A166');
  scene.build();
}

function enterHypnoDaychange(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hypnoTime ?? 0) > 15) {
    (s as any).hypnoTime = 15;
  }
  (s as any).timeTresh = 76 - 4*((s as any).hypnoTime ?? 0);
  if (((s as any).daystart ?? 0)-((s as any).hypnoDay ?? 0) > 7) {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 1) {
      (s as any).hypnoWithdrawal = 1;
    } else {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
        (s as any).hypnoWithdrawal = 2;
      }
    }
  }
  if (((s as any).hypnoStrength ?? 0) > 0) {
    (s as any).hypnoStrength = ((s as any).hypnoStrength ?? 0) - (1);
  }
  if (((s as any).hypnoTime ?? 0) > 0  &&  (!((s as any).hypnoStrength ?? 0))) {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
      (s as any).hypnoStrength = 19;
      (s as any).hypnoTime = ((s as any).hypnoTime ?? 0) - (1);
    } else {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 1) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          (s as any).hypnoStrength = 19;
          (s as any).hypnoTime = ((s as any).hypnoTime ?? 0) - (1);
          if (((s as any).hypnoTime ?? 0) < 7) {
            qspCall(s, 'traits', 'level', 'cum_addict', 0);
            (s as any).hypnoWithdrawal = 0;
          }
        }
      } else {
        if ((!(Math.floor(Math.random() * 5) + 0))) {
          (s as any).hypnoStrength = 19;
          (s as any).hypnoTime = ((s as any).hypnoTime ?? 0) - (1);
          if (((s as any).hypnoTime ?? 0) < 10) {
            qspCall(s, 'traits', 'level', 'cum_addict', 1);
            (s as any).hypnoWithdrawal = 1;
          }
        }
      }
    }
  }
  scene.build();
}

function enterHypnoAddiction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hypnoWithdrawal ?? 0) > 0) {
    if (((s as any).hypnoWithdrawal ?? 0) === 1) {
      if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
        // TODO-QSP: gs 'exp_deg', 'sprt', 2 * trait_vars['cum_addict']
        qspCall(s, 'mood', 'lower', 'small');
      } else {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: gs 'exp_deg', 'sprt', trait_vars['cum_addict']
        }
        qspCall(s, 'mood', 'lower', 'tiny');
      }
    }
  }
  scene.build();
}

function enterPrezik(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['bad_condoms'] > 0) {
      if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
        (s as any).mc_inventory['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
        (s as any).noprotect = 1;
      }
    } else {
      (s as any).noprotect = 0;
    }
    (s as any).mc_inventory['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] < 0) {
      (s as any).mc_inventory['equipped_condoms'] = 0;
    }
  }
  scene.build();
}

function enterFerteggfather(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fertegg ?? 0) > 0) {
    if (((s as any).thinkpreg ?? 0) === 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).sparrppt ?? 0)?.[String((s as any).sparrtemp ?? 0)] > 0) {
      if (((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 1) {
        if (((s as any).arrcomp ?? 0)('cumfthname', ((s as any).boy ?? 0)) === -1) {
          (s as any).i = 0;
          // TODO-QSP: $cumfthname[i] = $boy
          (s as any).cumtime[String((s as any).i ?? 0)] = 1;
        } else {
          (s as any).i = qspUntranslated(s, "arrpos('cumfthname', boy)", { location: "dina" });
          (s as any).cumtime[String((s as any).i ?? 0)] = ((s as any).cumtime[String((s as any).i ?? 0)] ?? 0) + (1);
        }
      } else {
        if (((s as any).cumarrkno ?? 0)?.[String((s as any).cumarrtemp ?? 0)] === 0) {
          (s as any).cumtime[0] = ((s as any).cumtime[0] ?? 0) + (1);
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'brodila':
      enterBrodila(s, scene);
      break;
    case 'brodilr':
      enterBrodilr(s, scene);
      break;
    case 'brodilk':
      enterBrodilk(s, scene);
      break;
    case 'brodils':
      enterBrodils(s, scene);
      break;
    case 'dogpot':
      enterDogpot(s, scene);
      break;
    case 'rexpot':
      enterRexpot(s, scene);
      break;
    case 'hypnoDaychange':
      enterHypnoDaychange(s, scene);
      break;
    case 'hypnoAddiction':
      enterHypnoAddiction(s, scene);
      break;
    case 'prezik':
      enterPrezik(s, scene);
      break;
    case 'ferteggfather':
      enterFerteggfather(s, scene);
      break;
    default:
      enterBrodila(s, scene);
      break;
  }
}

export const dina: LocationDef = {
  name: 'dina',
  region: 'other',
  enter: enter,
};
