import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_bmi');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    }
  }
  if (((s as any).temp_trait ?? 0) === 'body_bmi_starving'  ||  ((s as any).temp_trait ?? 0) === 'body_bmi_underweight') {
    (s as any).figurePrefMin = 0;
    (s as any).figurePrefMax = 18;
  } else {
    if (((s as any).temp_trait ?? 0) === 'body_bmi_normal') {
      (s as any).figurePrefMin = 19;
      (s as any).figurePrefMax = 25;
    } else {
      if (((s as any).temp_trait ?? 0) === 'body_bmi_overweight'  ||  ((s as any).temp_trait ?? 0) === 'body_bmi_obese') {
        (s as any).figurePrefMin = 26;
        (s as any).figurePrefMax = 99;
      } else {
        (s as any).figurePrefMin = 0;
        (s as any).figurePrefMax = 99;
      }
    }
  }
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    }
  }
  if (((s as any).temp_trait ?? 0) === 'body_tits_small') {
    (s as any).titMin = 0;
    (s as any).titMax = 1;
  } else {
    if (((s as any).temp_trait ?? 0) === 'body_tits_average') {
      (s as any).titMin = 2;
      (s as any).titMax = 3;
    } else {
      if (((s as any).temp_trait ?? 0) === 'body_tits_big') {
        (s as any).titMin = 4;
        (s as any).titMax = 5;
      } else {
        if (((s as any).temp_trait ?? 0) === 'body_tits_huge') {
          (s as any).titMin = 6;
          (s as any).titMax = 99;
        } else {
          (s as any).titMin = 0;
          (s as any).titMax = 99;
        }
      }
    }
  }
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    }
  }
  if (((s as any).temp_trait ?? 0) === 'hair_color_black') {
    (s as any).temp_haircol = 0;
  } else {
    if (((s as any).temp_trait ?? 0) === 'hair_color_brown') {
      (s as any).temp_haircol = 1;
    } else {
      if (((s as any).temp_trait ?? 0) === 'hair_color_red') {
        (s as any).temp_haircol = 2;
      } else {
        if (((s as any).temp_trait ?? 0) === 'hair_color_blonde') {
          (s as any).temp_haircol = 3;
        }
      }
    }
  }
  (s as any).husb_birth_year = ((s as any).year ?? 0) - ((s as any).boyage ?? 0);
  (s as any).husbAge = ((s as any).boyage ?? 0);
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_piercings');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    }
  }
  if (((s as any).temp_trait ?? 0) === 'cosmetics_piercings_none'  ||  ((s as any).temp_trait ?? 0) === 'cosmetics_piercings_few') {
    (s as any).pierPrefTmpMin = 0;
    (s as any).pierPrefTmpMax = 2;
  } else {
    if (((s as any).temp_trait ?? 0) === 'cosmetics_piercings_multiple') {
      (s as any).pierPrefTmpMin = 3;
      (s as any).pierPrefTmpMax = 5;
    } else {
      if (((s as any).temp_trait ?? 0) === 'cosmetics_piercings_lot') {
        (s as any).pierPrefTmpMin = 6;
        (s as any).pierPrefTmpMax = 99;
      } else {
        (s as any).pierPrefTmpMin = 0;
        (s as any).pierPrefTmpMax = 99;
      }
    }
  }
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_tattoos');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    }
  }
  if (((s as any).temp_trait ?? 0) === 'cosmetics_tattoos_none'  ||  ((s as any).temp_trait ?? 0) === 'cosmetics_tattoos_few') {
    (s as any).tattPrefTmpMin = 0;
    (s as any).tattPrefTmpMax = 2;
  } else {
    if (((s as any).temp_trait ?? 0) === 'cosmetics_tattoos_multiple') {
      (s as any).tattPrefTmpMin = 3;
      (s as any).tattPrefTmpMax = 5;
    } else {
      if (((s as any).temp_trait ?? 0) === 'cosmetics_tattoos_lot') {
        (s as any).tattPrefTmpMin = 6;
        (s as any).tattPrefTmpMax = 99;
      } else {
        (s as any).tattPrefTmpMin = 0;
        (s as any).tattPrefTmpMax = 99;
      }
    }
  }
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_lips');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    }
  }
  if (((s as any).temp_trait ?? 0) === 'body_lips_normal'  ||  ((s as any).temp_trait ?? 0) === 'body_lips_plump') {
    (s as any).lipsPrefTmpMin = 2;
    (s as any).lipsPrefTmpMax = 3;
  } else {
    if (((s as any).temp_trait ?? 0) === 'body_lips_big'  ||  ((s as any).temp_trait ?? 0) === 'body_lips_pillowy') {
      (s as any).lipsPrefTmpMin = 3;
      (s as any).lipsPrefTmpMax = 99;
    } else {
      (s as any).lipsPrefTmpMin = 0;
      (s as any).lipsPrefTmpMax = 99;
    }
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] <= 40) {
  } else {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] <= 80) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
      }
    } else {
      (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
      if (((s as any).temp_rand ?? 0) === 0  &&  ((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      } else {
        if (((s as any).temp_rand ?? 0) <= 1) {
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetMakeupPref(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_makeup');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    }
  }
  if (((s as any).temp_trait ?? 0) === 'cosmetics_makeup_light') {
    (s as any).temp_makepref = 2;
  } else {
    if (((s as any).temp_trait ?? 0) === 'cosmetics_makeup_moderate') {
      (s as any).temp_makepref = 3;
    } else {
      if (((s as any).temp_trait ?? 0) === 'cosmetics_makeup_heavy') {
        (s as any).temp_makepref = 4;
      }
    }
  }
  // TODO-QSP: $result += ' amount of'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPiercingPref(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_piercings');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_none'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_few') {
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_multiple') {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_lot')) {
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_lot') {
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTattooPref(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_tattoos');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_none'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_few') {
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_multiple') {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_lot')) {
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_lot') {
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPierChange(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_piercings');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_none'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_few') {
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_multiple') {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_lot')) {
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_lot') {
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTattChange(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_tattoos');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_none'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_few') {
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_multiple') {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_lot')) {
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_lot') {
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetLipChange(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_lips');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_thin') {
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_normal'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_plump') {
        if (qspFunc(s, 'pcs_has_attr', 'body_lips_thin')) {
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_big'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_pillowy') {
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckPiercings(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_piercings');
  (s as any).result = 1;
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckTattoos(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_tattoos');
  (s as any).result = 1;
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckMakeup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_makeup');
  (s as any).result = 1;
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckHaircol(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
  (s as any).result = 1;
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === ''  &&  (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_black'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_brown'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_red'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_blonde')) {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckTits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
  (s as any).result = 1;
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckLips(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_lips');
  (s as any).result = 1;
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckBmi(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_bmi');
  (s as any).result = 1;
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === ''  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_makeup_pref':
      enterGetMakeupPref(s, scene);
      break;
    case 'get_piercing_pref':
      enterGetPiercingPref(s, scene);
      break;
    case 'get_tattoo_pref':
      enterGetTattooPref(s, scene);
      break;
    case 'get_pier_change':
      enterGetPierChange(s, scene);
      break;
    case 'get_tatt_change':
      enterGetTattChange(s, scene);
      break;
    case 'get_lip_change':
      enterGetLipChange(s, scene);
      break;
    case 'check_piercings':
      enterCheckPiercings(s, scene);
      break;
    case 'check_tattoos':
      enterCheckTattoos(s, scene);
      break;
    case 'check_makeup':
      enterCheckMakeup(s, scene);
      break;
    case 'check_haircol':
      enterCheckHaircol(s, scene);
      break;
    case 'check_tits':
      enterCheckTits(s, scene);
      break;
    case 'check_lips':
      enterCheckLips(s, scene);
      break;
    case 'check_bmi':
      enterCheckBmi(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lover_pref: LocationDef = {
  name: 'lover_pref',
  region: 'other',
  enter: enter,
};
