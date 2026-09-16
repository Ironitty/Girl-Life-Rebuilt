import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_ass') {
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_flat')) {
      (s as any).result = 'body_ass_flat';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_ass_average')) {
        (s as any).result = 'body_ass_average';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
          (s as any).result = 'body_ass_big';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_ass_heart')) {
            (s as any).result = 'body_ass_heart';
          } else {
            (s as any).result = 'body_ass_bubble';
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_bmi') {
    if (qspFunc(s, 'pcs_has_attr', 'body_bmi_starving')) {
      (s as any).result = 'body_bmi_starving';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_bmi_underweight')) {
        (s as any).result = 'body_bmi_underweight';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_bmi_normal')) {
          (s as any).result = 'body_bmi_normal';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_bmi_overweight')) {
            (s as any).result = 'body_bmi_overweight';
          } else {
            (s as any).result = 'body_bmi_obese';
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_eyes') {
    if (qspFunc(s, 'pcs_has_attr', 'body_eyes_brown')) {
      (s as any).result = 'body_eyes_brown';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_eyes_grey')) {
        (s as any).result = 'body_eyes_grey';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_eyes_green')) {
          (s as any).result = 'body_eyes_green';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_eyes_blue')) {
            (s as any).result = 'body_eyes_blue';
          } else {
            (s as any).result = 'none';
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_lips') {
    if (qspFunc(s, 'pcs_has_attr', 'body_lips_thin')) {
      (s as any).result = 'body_lips_thin';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_lips_normal')) {
        (s as any).result = 'body_lips_normal';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_lips_plump')) {
          (s as any).result = 'body_lips_plump';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_lips_big')) {
            (s as any).result = 'body_lips_big';
          } else {
            (s as any).result = 'body_lips_pillowy';
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_skin') {
    if (qspFunc(s, 'pcs_has_attr', 'body_skin_bad')) {
      (s as any).result = 'body_skin_bad';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_skin_normal')) {
        (s as any).result = 'body_skin_normal';
      } else {
        (s as any).result = 'body_skin_good';
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_sweat') {
    if (qspFunc(s, 'pcs_has_attr', 'body_sweat_none')) {
      (s as any).result = 'body_sweat_none';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_sweat_sweaty')) {
        (s as any).result = 'body_sweat_sweaty';
      } else {
        (s as any).result = 'body_sweat_stinky';
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'body_tits') {
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
      (s as any).result = 'body_tits_small';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_tits_average')) {
        (s as any).result = 'body_tits_average';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_tits_big')) {
          (s as any).result = 'body_tits_big';
        } else {
          (s as any).result = 'body_tits_huge';
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_cleavage') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_none')) {
      (s as any).result = 'clothes_cleavage_none';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_small')) {
        (s as any).result = 'clothes_cleavage_small';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_medium')) {
          (s as any).result = 'clothes_cleavage_medium';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_large')) {
            (s as any).result = 'clothes_cleavage_large';
          } else {
            (s as any).result = 'none';
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_pants') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_pants_long')) {
      (s as any).result = 'clothes_pants_long';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_pants_normal')) {
        (s as any).result = 'clothes_pants_normal';
      } else {
        (s as any).result = 'clothes_pants_short';
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_quality') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_low')) {
      (s as any).result = 'clothes_quality_low';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_medium')) {
        (s as any).result = 'clothes_quality_medium';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_quality_high')) {
          (s as any).result = 'clothes_quality_high';
        } else {
          (s as any).result = 'none';
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_skirt') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
      (s as any).result = 'clothes_skirt_long';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_normal')) {
        (s as any).result = 'clothes_skirt_normal';
      } else {
        (s as any).result = 'clothes_skirt_short';
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'clothes_thin') {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_thin_low')) {
      (s as any).result = 'clothes_thin_low';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'clothes_thin_medium')) {
        (s as any).result = 'clothes_thin_medium';
      } else {
        (s as any).result = 'clothes_thin_high';
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'shoes_heels') {
    if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_flat')) {
      (s as any).result = 'shoes_heels_flat';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_low')) {
        (s as any).result = 'shoes_heels_low';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_medium')) {
          (s as any).result = 'shoes_heels_medium';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_high')) {
            (s as any).result = 'shoes_heels_high';
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'shoes_heels_ultra')) {
              (s as any).result = 'shoes_heels_ultra';
            } else {
              (s as any).result = 'shoes_heels_fetish';
            }
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'cosmetics_makeup') {
    if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_running')) {
      (s as any).result = 'cosmetics_makeup_running';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_none')) {
        (s as any).result = 'cosmetics_makeup_none';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_light')) {
          (s as any).result = 'cosmetics_makeup_light';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_moderate')) {
            (s as any).result = 'cosmetics_makeup_moderate';
          } else {
            (s as any).result = 'cosmetics_makeup_heavy';
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'cosmetics_piercings') {
    if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_none')) {
      (s as any).result = 'cosmetics_piercings_none';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_few')) {
        (s as any).result = 'cosmetics_piercings_few';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_multiple')) {
          (s as any).result = 'cosmetics_piercings_multiple';
        } else {
          (s as any).result = 'cosmetics_piercings_lot';
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'cosmetics_tattoos') {
    if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_none')) {
      (s as any).result = 'cosmetics_tattoos_none';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_few')) {
        (s as any).result = 'cosmetics_tattoos_few';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_multiple')) {
          (s as any).result = 'cosmetics_tattoos_multiple';
        } else {
          (s as any).result = 'cosmetics_tattoos_lot';
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'hair_color') {
    if (qspFunc(s, 'pcs_has_attr', 'hair_color_black')) {
      (s as any).result = 'hair_color_black';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_color_brown')) {
        (s as any).result = 'hair_color_brown';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_color_red')) {
          (s as any).result = 'hair_color_red';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'hair_color_blonde')) {
            (s as any).result = 'hair_color_blonde';
          } else {
            (s as any).result = 'hair_color_dyed';
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'hair_pube_length') {
    if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_shaven')) {
      (s as any).result = 'hair_pubes_shaven';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_stubble')) {
        (s as any).result = 'hair_pubes_stubble';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_patch')) {
          (s as any).result = 'hair_pubes_patch';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_trimmed')) {
            (s as any).result = 'hair_pubes_trimmed';
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')) {
              (s as any).result = 'hair_pubes_bush';
            } else {
              (s as any).result = 'hair_pubes_untrimmed';
            }
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'hair_length') {
    if (qspFunc(s, 'pcs_has_attr', 'hair_length_veryshort')) {
      (s as any).result = 'hair_length_veryshort';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_length_short')) {
        (s as any).result = 'hair_length_short';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_length_chin')) {
          (s as any).result = 'hair_length_chin';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'hair_length_shoulder')) {
            (s as any).result = 'hair_length_shoulder';
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'hair_length_bra')) {
              (s as any).result = 'hair_length_bra';
            } else {
              (s as any).result = 'hair_length_long';
            }
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'hair_pube_style') {
    if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_shaven')) {
      (s as any).result = 'hair_pubes_shaven';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_stubble')) {
        (s as any).result = 'hair_pubes_stubble';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_patch')) {
          (s as any).result = 'hair_pubes_patch';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_trimmed')) {
            (s as any).result = 'hair_pubes_trimmed';
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'hair_pubes_bush')) {
              (s as any).result = 'hair_pubes_bush';
            } else {
              (s as any).result = 'hair_pubes_untrimmed';
            }
          }
        }
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'stats_intel') {
    if (qspFunc(s, 'pcs_has_attr', 'stats_intel_dumb')) {
      (s as any).result = 'stats_intel_dumb';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'stats_intel_normal')) {
        (s as any).result = 'stats_intel_normal';
      } else {
        (s as any).result = 'stats_intel_smart';
      }
    }
    return;
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).toLowerCase()) === 'stats_strength') {
    if (qspFunc(s, 'pcs_has_attr', 'stats_strength_weak')) {
      (s as any).result = 'stats_strength_weak';
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'stats_strength_normal')) {
        (s as any).result = 'stats_strength_normal';
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'stats_strength_athletic')) {
          (s as any).result = 'stats_strength_athletic';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'stats_strength_strong')) {
            (s as any).result = 'stats_strength_strong';
          } else {
            (s as any).result = 'stats_strength_manly';
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
