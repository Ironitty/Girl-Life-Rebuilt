import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_ass') {
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_flat')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_ass_average')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_ass_heart')) {
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_bmi') {
    if (qspFunc(s, 'pcs_has_attr', 'body_bmi_starving')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_bmi_underweight')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_bmi_normal')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_bmi_overweight')) {
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_eyes') {
    if (qspFunc(s, 'pcs_has_attr', 'body_eyes_brown')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_eyes_grey')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_eyes_green')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_eyes_blue')) {
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_lips') {
    if (qspFunc(s, 'pcs_has_attr', 'body_lips_thin')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_lips_normal')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_lips_plump')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_lips_big')) {
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_skin') {
    if (qspFunc(s, 'pcs_has_attr', 'body_skin_bad')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_skin_normal')) {
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_sweat') {
    if (qspFunc(s, 'pcs_has_attr', 'body_sweat_none')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_sweat_sweaty')) {
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_tits') {
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_tits_average')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_tits_big')) {
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_cleavage') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_none')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_small')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_medium')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_large')) {
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_pants') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_pants_long')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_pants_normal')) {
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_quality') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_low')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_medium')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_high')) {
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_skirt') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_normal')) {
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_thin') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_thin_low')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_thin_medium')) {
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'shoes_heels') {
    if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_flat')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_low')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_medium')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_high')) {
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_ultra')) {
            }
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'cosmetics_makeup') {
    if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_running')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_none')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_light')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_moderate')) {
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'cosmetics_piercings') {
    if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_none')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_few')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_multiple')) {
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'cosmetics_tattoos') {
    if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_none')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_few')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_multiple')) {
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'hair_color') {
    if (qspFunc(s, 'pcs_has_attr', 'hair_color_black')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_color_brown')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_color_red')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'hair_color_blonde')) {
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'hair_pube_length') {
    if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_shaven')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_stubble')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_patch')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_trimmed')) {
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')) {
            }
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'hair_length') {
    if (qspFunc(s, 'pcs_has_attr', 'hair_length_veryshort')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_length_short')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_length_chin')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'hair_length_shoulder')) {
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'hair_length_bra')) {
            }
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'hair_pube_style') {
    if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_shaven')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_stubble')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_patch')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_trimmed')) {
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')) {
            }
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'stats_intel') {
    if (qspFunc(s, 'pcs_has_attr', 'stats_intel_dumb')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'stats_intel_normal')) {
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'stats_strength') {
    if (qspFunc(s, 'pcs_has_attr', 'stats_strength_weak')) {
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'stats_strength_normal')) {
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'stats_strength_athletic')) {
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'stats_strength_strong')) {
          }
        }
      }
    }
    return;
  }
  scene.build();
}

export const pcs_get_attr: LocationDef = {
  name: 'pcs_get_attr',
  region: 'other',
  enter: enter,
};
