// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PanType ?? 0) === 3  ||  ((s as any).PanType ?? 0) === 4) {
    (s as any).description = ((s as any).description ?? 0) + ('This');
  } else {
    (s as any).description = ((s as any).description ?? 0) + ('These');
  }
  if (((s as any).PanQuality ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' very low quality');
  } else {
    if (((s as any).PanQuality ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' low quality');
    } else {
      if (((s as any).PanQuality ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' average quality');
      } else {
        if (((s as any).PanQuality ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' reasonable quality');
        } else {
          if (((s as any).PanQuality ?? 0) === 5) {
            (s as any).description = ((s as any).description ?? 0) + (' good quality');
          } else {
            if (((s as any).PanQuality ?? 0) === 6) {
              (s as any).description = ((s as any).description ?? 0) + (' outstanding quality');
            }
          }
        }
      }
    }
  }
  if (((s as any).PanMaterial ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (', leather');
  } else {
    if (((s as any).PanMaterial ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (', rubber');
    } else {
      if (((s as any).PanMaterial ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (', mesh');
      } else {
        if (((s as any).PanMaterial ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (', fishnet');
        } else {
          if (((s as any).PanMaterial ?? 0) === 5) {
            (s as any).description = ((s as any).description ?? 0) + (', vinyl');
          } else {
            if (((s as any).PanMaterial ?? 0) === 6) {
              (s as any).description = ((s as any).description ?? 0) + (', lace');
            }
          }
        }
      }
    }
  }
  if (((s as any).PanType ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' panties');
  } else {
    if (((s as any).PanType ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' boy shorts');
    } else {
      if (((s as any).PanType ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' G-string');
      } else {
        if (((s as any).PanType ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' C-string');
        } else {
          if (((s as any).PanType ?? 0) === 5) {
            (s as any).description = ((s as any).description ?? 0) + (' French knickers');
          }
        }
      }
    }
  }
  if (((s as any).PanType ?? 0) === 3  ||  ((s as any).PanType ?? 0) === 4) {
    (s as any).description = ((s as any).description ?? 0) + (' is ');
  } else {
    (s as any).description = ((s as any).description ?? 0) + (' are ');
  }
  if (((s as any).PanThinness ?? 0) === 6) {
    (s as any).description = ((s as any).description ?? 0) + ('transparent.');
  } else {
    if (((s as any).PanThinness ?? 0) === 5) {
      (s as any).description = ((s as any).description ?? 0) + ('semi-transparent.');
    } else {
      if (((s as any).PanThinness ?? 0) === 4) {
        (s as any).description = ((s as any).description ?? 0) + ('slightly transparent.');
      } else {
        if (((s as any).PanThinness ?? 0) === 3) {
          (s as any).description = ((s as any).description ?? 0) + ('thin.');
        } else {
          if (((s as any).PanThinness ?? 0) === 2) {
            (s as any).description = ((s as any).description ?? 0) + ('not particularly thick or thin.');
          } else {
            if (((s as any).PanThinness ?? 0) === 1) {
              (s as any).description = ((s as any).description ?? 0) + ('thick.');
            }
          }
        }
      }
    }
  }
  if (((s as any).PanCoverFront ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' Your pussy can just about be seen in the right light.');
  } else {
    if (((s as any).PanCoverFront ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' Your pussy is partly visible.');
    } else {
      if (((s as any).PanCoverFront ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' Your pussy is clearly visible.');
      } else {
        if (((s as any).PanCoverFront ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' Your pussy is not covered at all.');
        }
      }
    }
  }
  if (((s as any).PanCoverBack ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' Your butt can just about be seen in the right light.');
  } else {
    if (((s as any).PanCoverBack ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' Your butt is partly visible.');
    } else {
      if (((s as any).PanCoverBack ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' Your butt is clearly visible.');
      } else {
        if (((s as any).PanCoverBack ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' Your butt is not covered at all.');
        }
      }
    }
  }
  scene.build();
}

function enterBras(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BraQuality ?? 0) === 1) {
    (s as any).description = 'This very low quality';
  } else {
    if (((s as any).BraQuality ?? 0) === 2) {
      (s as any).description = 'This low quality';
    } else {
      if (((s as any).BraQuality ?? 0) === 3) {
        (s as any).description = 'This average quality';
      } else {
        if (((s as any).BraQuality ?? 0) === 4) {
          (s as any).description = 'This reasonable quality';
        } else {
          if (((s as any).BraQuality ?? 0) === 5) {
            (s as any).description = 'This good quality';
          } else {
            if (((s as any).BraQuality ?? 0) === 6) {
              (s as any).description = 'This outstanding quality';
            }
          }
        }
      }
    }
  }
  if (((s as any).BraMaterial ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (', leather');
  } else {
    if (((s as any).BraMaterial ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (', rubber');
    } else {
      if (((s as any).BraMaterial ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (', mesh');
      } else {
        if (((s as any).BraMaterial ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (', fishnet');
        } else {
          if (((s as any).BraMaterial ?? 0) === 5) {
            (s as any).description = ((s as any).description ?? 0) + (', vinyl');
          } else {
            if (((s as any).BraMaterial ?? 0) === 6) {
              (s as any).description = ((s as any).description ?? 0) + (', lace');
            }
          }
        }
      }
    }
  }
  if (((s as any).BraType ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' balcony');
  } else {
    if (((s as any).BraType ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' bandeau');
    } else {
      if (((s as any).BraType ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' corset');
      } else {
        if (((s as any).BraType ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' push up');
        } else {
          if (((s as any).BraType ?? 0) === 5) {
            (s as any).description = ((s as any).description ?? 0) + (' bralette');
          } else {
            if (((s as any).BraType ?? 0) === 6) {
              (s as any).description = ((s as any).description ?? 0) + (' sports');
            } else {
              if (((s as any).BraType ?? 0) === 7) {
                (s as any).description = ((s as any).description ?? 0) + (' shelf');
              } else {
                if (((s as any).BraType ?? 0) === 8) {
                  (s as any).description = ((s as any).description ?? 0) + (' open');
                } else {
                  if (((s as any).BraType ?? 0) === 9) {
                    (s as any).description = ((s as any).description ?? 0) + (' under wire');
                  } else {
                    if (((s as any).BraType ?? 0) === 10) {
                      (s as any).description = ((s as any).description ?? 0) + (' bikini');
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
  (s as any).description = ((s as any).description ?? 0) + (' bra is ');
  if (((s as any).BraThinness ?? 0) === 6) {
    (s as any).description = ((s as any).description ?? 0) + ('transparent.');
  } else {
    if (((s as any).BraThinness ?? 0) === 5) {
      (s as any).description = ((s as any).description ?? 0) + ('semi-transparent.');
    } else {
      if (((s as any).BraThinness ?? 0) === 4) {
        (s as any).description = ((s as any).description ?? 0) + ('slightly transparent.');
      } else {
        if (((s as any).BraThinness ?? 0) === 3) {
          (s as any).description = ((s as any).description ?? 0) + ('thin.');
        } else {
          if (((s as any).BraThinness ?? 0) === 2) {
            (s as any).description = ((s as any).description ?? 0) + ('not particularly thick or thin.');
          } else {
            if (((s as any).BraThinness ?? 0) === 1) {
              (s as any).description = ((s as any).description ?? 0) + ('thick.');
            }
          }
        }
      }
    }
  }
  if (((s as any).BraCover ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' Your breasts can just about be seen in the right light.');
  } else {
    if (((s as any).BraCover ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' Your breasts are partly visible.');
    } else {
      if (((s as any).BraCover ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' Your breasts are easily visible.');
      } else {
        if (((s as any).BraCover ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' Your breasts are not covered at all.');
        }
      }
    }
  }
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BraQuality ?? 0) === 1) {
    (s as any).description = 'This very low quality';
  } else {
    if (((s as any).BraQuality ?? 0) === 2) {
      (s as any).description = 'This low quality';
    } else {
      if (((s as any).BraQuality ?? 0) === 3) {
        (s as any).description = 'This average quality';
      } else {
        if (((s as any).BraQuality ?? 0) === 4) {
          (s as any).description = 'This reasonable quality';
        } else {
          if (((s as any).BraQuality ?? 0) === 5) {
            (s as any).description = 'This good quality';
          } else {
            if (((s as any).BraQuality ?? 0) === 6) {
              (s as any).description = 'This outstanding quality';
            }
          }
        }
      }
    }
  }
  if (((s as any).BraMaterial ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (', leather');
  } else {
    if (((s as any).BraMaterial ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (', rubber');
    } else {
      if (((s as any).BraMaterial ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (', mesh');
      } else {
        if (((s as any).BraMaterial ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (', fishnet');
        } else {
          if (((s as any).BraMaterial ?? 0) === 5) {
            (s as any).description = ((s as any).description ?? 0) + (', vinyl');
          } else {
            if (((s as any).BraMaterial ?? 0) === 6) {
              (s as any).description = ((s as any).description ?? 0) + (', lace');
            }
          }
        }
      }
    }
  }
  if (((s as any).BraType ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' full');
  } else {
    if (((s as any).BraType ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' long sleeve');
    } else {
      if (((s as any).BraType ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' high neck');
      } else {
        if (((s as any).BraType ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' backless');
        } else {
          if (((s as any).BraType ?? 0) === 5) {
            (s as any).description = ((s as any).description ?? 0) + (' t-shirt');
          } else {
            if (((s as any).BraType ?? 0) === 6) {
              (s as any).description = ((s as any).description ?? 0) + (' vest');
            } else {
              if (((s as any).BraType ?? 0) === 7) {
                (s as any).description = ((s as any).description ?? 0) + (' spaghetti strap');
              } else {
                if (((s as any).BraType ?? 0) === 8) {
                  (s as any).description = ((s as any).description ?? 0) + (' romper');
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).description = ((s as any).description ?? 0) + (' bodysuit is ');
  if (((s as any).BraThinness ?? 0) === 6) {
    (s as any).description = ((s as any).description ?? 0) + ('transparent');
  } else {
    if (((s as any).BraThinness ?? 0) === 5) {
      (s as any).description = ((s as any).description ?? 0) + ('semi-transparent');
    } else {
      if (((s as any).BraThinness ?? 0) === 4) {
        (s as any).description = ((s as any).description ?? 0) + ('slightly transparent');
      } else {
        if (((s as any).BraThinness ?? 0) === 3) {
          (s as any).description = ((s as any).description ?? 0) + ('thin');
        } else {
          if (((s as any).BraThinness ?? 0) === 2) {
            (s as any).description = ((s as any).description ?? 0) + ('not particularly thick or thin');
          } else {
            if (((s as any).BraThinness ?? 0) === 1) {
              (s as any).description = ((s as any).description ?? 0) + ('thick');
            }
          }
        }
      }
    }
  }
  (s as any).description = ((s as any).description ?? 0) + (' on top and ');
  if (((s as any).PanThinness ?? 0) === 6) {
    (s as any).description = ((s as any).description ?? 0) + (' transparent');
  } else {
    if (((s as any).PanThinness ?? 0) === 5) {
      (s as any).description = ((s as any).description ?? 0) + (' semi-transparent');
    } else {
      if (((s as any).PanThinness ?? 0) === 4) {
        (s as any).description = ((s as any).description ?? 0) + (' slightly transparent');
      } else {
        if (((s as any).PanThinness ?? 0) === 3) {
          (s as any).description = ((s as any).description ?? 0) + (' thin');
        } else {
          if (((s as any).PanThinness ?? 0) === 2) {
            (s as any).description = ((s as any).description ?? 0) + (' not particularly thick or thin');
          } else {
            if (((s as any).PanThinness ?? 0) === 1) {
              (s as any).description = ((s as any).description ?? 0) + (' thick');
            }
          }
        }
      }
    }
  }
  (s as any).description = ((s as any).description ?? 0) + (' on the bottom.');
  if (((s as any).PanCoverFront ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' Your pussy can just about be seen in the right light.');
  } else {
    if (((s as any).PanCoverFront ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' Your pussy is partly visible.');
    } else {
      if (((s as any).PanCoverFront ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' Your pussy is clearly visible.');
      } else {
        if (((s as any).PanCoverFront ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' Your pussy is not covered at all.');
        }
      }
    }
  }
  if (((s as any).PanCoverBack ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' Your butt can just about be seen in the right light.');
  } else {
    if (((s as any).PanCoverBack ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' Your butt is partly visible.');
    } else {
      if (((s as any).PanCoverBack ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' Your butt is clearly visible.');
      } else {
        if (((s as any).PanCoverBack ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' Your butt is not covered at all.');
        }
      }
    }
  }
  if (((s as any).BraCover ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (' Your breasts can just about be seen in the right light.');
  } else {
    if (((s as any).BraCover ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (' Your breasts are partly visible.');
    } else {
      if (((s as any).BraCover ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (' Your breasts are easily visible.');
      } else {
        if (((s as any).BraCover ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (' Your breasts are not covered at all.');
        }
      }
    }
  }
  s.scene = { ...s.scene, mainText: String((s as any).description || ''), curActs: [] };
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).description = '';
  const arg = s.locArg;
  switch (arg) {
    case 'panties':
      enterPanties(s, scene);
      break;
    case 'bras':
      enterBras(s, scene);
      break;
    case 'bodysuit':
      enterBodysuit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const underwear_descriptions: LocationDef = {
  name: 'underwear_descriptions',
  region: 'other',
  enter: enter,
};
