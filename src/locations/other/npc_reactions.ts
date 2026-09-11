import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStat(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGeneral(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_reaction_first_time ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_tan'] === 1  &&  (!((s as any).pcs_tan ?? 0))) {
    (s as any).npc_reaction_first_time['' + String((s as any).$ARGS[1] || '') + '_tan'] = 0;
  }
  if (qspFunc(s, 'pcs_has_attr', 'cum_face')  &&  ((s as any).npc_reaction_hourly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_cum_on_face'] === 0) {
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'cum_clothes')  &&  ((s as any).npc_reaction_hourly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_cum_on_clothes'] === 0) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_pregnant')  &&  ((s as any).npc_reaction_pregnant ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
      } else {
        if (((s as any).npc_reaction_weekly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_fit'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'body_fit')) {
            // TODO-QSP: $npc_reaction_choice[] = 'fit'
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_piercing'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercing_visible')) {
            // TODO-QSP: $npc_reaction_choice[] = 'piercing'
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_strong'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'stats_strength_strong')) {
            // TODO-QSP: $npc_reaction_choice[] = 'strong'
          }
        }
        if (((s as any).npc_reaction_first_time ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_tan'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'body_tan')) {
            // TODO-QSP: $npc_reaction_choice[] = 'tan'
          }
        }
        if (((s as any).npc_reaction_first_time ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_tattoo'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoo_visible')) {
            // TODO-QSP: $npc_reaction_choice[] = 'tattoo'
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_bimbo'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
            // TODO-QSP: $npc_reaction_choice[] = 'bimbo_look'
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_goth'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
            // TODO-QSP: $npc_reaction_choice[] = 'goth_look'
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_punk'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
            // TODO-QSP: $npc_reaction_choice[] = 'punk_look'
          }
        }
        if (((s as any).npc_reaction_daily ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_short_skirt'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_short')) {
            // TODO-QSP: $npc_reaction_choice[] = 'short_skirt'
          }
        }
        if (((s as any).npc_reaction_daily ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_clothes_thinnes'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
            // TODO-QSP: $npc_reaction_choice[] = 'clothes_thinnes'
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_makeup'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_any')) {
            // TODO-QSP: $npc_reaction_choice[] = 'makeup'
          }
        }
        if (((s as any).npc_reaction_chosen ?? 0) === '') {
        }
      }
    }
  }
  scene.build();
}

function enterBimboLook(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_weekly[$ARGS[1] + '_bimbo'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_bimbo'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['bimbo'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_bimbo'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['bimbo'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterGothLook(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_weekly[$ARGS[1] + '_goth'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_goth'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['goth'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_goth'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['goth'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPunkLook(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_weekly[$ARGS[1] + '_punk'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_punk'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['punk'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_punk'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['punk'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterClothesThinnes(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_daily[$ARGS[1] + '_clothes_thinnes'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_thin'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['clothes_thinnes'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_thin'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['clothes_thinnes'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterShortSkirt(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_daily[$ARGS[1] + '_short_skirt'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_skirt_short'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['short_skirt'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_skirt_short'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['short_skirt'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPiercing(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_weekly[$ARGS[1] + '_piercing'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_piercing_visible'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['piercing'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_piercing_visible'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['piercing'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_weekly[$ARGS[1] + '_makeup'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_makeup_any'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['makeup'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_makeup_any'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['makeup'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterTattoo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_first_time[$ARGS[1] + '_tattoo'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_tattoo_visible'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['tattoo'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_tattoo_visible'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['tattoo'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumOnFace(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_hourly[$ARGS[1] + '_cum_on_face'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['cum_face'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['cum_on_face'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cum_face'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['cum_on_face'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumOnClothes(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_hourly[$ARGS[1] + '_cum_on_clothes'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['cum_clothes'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['cum_on_clothes'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cum_clothes'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['cum_on_clothes'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPregnant(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_pregnant[$ARGS[1]] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['body_pregnant'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['pregnant'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['body_pregnant'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['pregnant'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterTan(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_first_time[$ARGS[1] + '_tan'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['body_tan'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['tan'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['body_tan'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['tan'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterStrong(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_weekly[$ARGS[1] + '_strong'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['stats_strength_strong'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['strong'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['stats_strength_strong'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['strong'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterFit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_reaction_weekly[$ARGS[1] + '_fit'] = 1
  if (((s as any).npc_nr_pref_values ?? 0)?.['body_fit'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['fit'] === 1) {
    if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['body_fit'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['fit'] === -1) {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 80  ||  ((s as any).locArgs?.[2] ?? 0) === 'love') {
      } else {
        if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 60  ||  ((s as any).locArgs?.[2] ?? 0) === 'like') {
        } else {
          if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 40  ||  ((s as any).locArgs?.[2] ?? 0) === 'indifferent') {
          } else {
            if (((s as any).npc_rel ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 20  ||  ((s as any).locArgs?.[2] ?? 0) === 'dislike') {
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
    case 'stat':
      enterStat(s, scene);
      break;
    case 'general':
      enterGeneral(s, scene);
      break;
    case 'bimbo_look':
      enterBimboLook(s, scene);
      break;
    case 'goth_look':
      enterGothLook(s, scene);
      break;
    case 'punk_look':
      enterPunkLook(s, scene);
      break;
    case 'clothes_thinnes':
      enterClothesThinnes(s, scene);
      break;
    case 'short_skirt':
      enterShortSkirt(s, scene);
      break;
    case 'piercing':
      enterPiercing(s, scene);
      break;
    case 'makeup':
      enterMakeup(s, scene);
      break;
    case 'tattoo':
      enterTattoo(s, scene);
      break;
    case 'cum_on_face':
      enterCumOnFace(s, scene);
      break;
    case 'cum_on_clothes':
      enterCumOnClothes(s, scene);
      break;
    case 'pregnant':
      enterPregnant(s, scene);
      break;
    case 'tan':
      enterTan(s, scene);
      break;
    case 'strong':
      enterStrong(s, scene);
      break;
    case 'fit':
      enterFit(s, scene);
      break;
    default:
      enterStat(s, scene);
      break;
  }
}

export const npc_reactions: LocationDef = {
  name: 'npc_reactions',
  region: 'other',
  enter: enter,
};
