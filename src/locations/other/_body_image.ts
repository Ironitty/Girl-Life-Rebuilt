import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBody(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTits(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) !== 0) {
    (s as any).temp_pubes = 0;
  }
  if (((s as any).locArgs?.[2] ?? 0) !== 0) {
    (s as any).temp_pubecol = 0;
  }
  if (((s as any).locArgs?.[3] ?? 0) !== 0) {
    (s as any).temp_pubestyle = 0;
  }
  if ((!((s as any).temp_pubecol ?? 0))) {
  } else {
    if (((s as any).temp_pubecol ?? 0) === 1) {
    } else {
      if (((s as any).temp_pubecol ?? 0) === 2) {
      } else {
        if (((s as any).temp_pubecol ?? 0) === 3) {
        } else {
          if (((s as any).temp_pubecol ?? 0) === 4) {
          } else {
            if (((s as any).temp_pubecol ?? 0) === 5) {
            } else {
              if (((s as any).temp_pubecol ?? 0) === 6) {
              } else {
                if (((s as any).temp_pubecol ?? 0) === 7) {
                } else {
                  if (((s as any).temp_pubecol ?? 0) === 8) {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).temp_pubes ?? 0) !== 0) {
    if (((s as any).temp_pubes ?? 0) <= 3) {
      // TODO-QSP: $result += 'hair/pussy'
    } else {
      if (((s as any).temp_pubes ?? 0) <= 10) {
        // TODO-QSP: $result += 'hair/stubble'
      } else {
        if (((s as any).temp_pubes ?? 0) <= 15) {
          // TODO-QSP: $result += 'hair/very_short'
        } else {
          if (((s as any).temp_pubes ?? 0) <= 25) {
            if (((s as any).temp_pubestyle ?? 0) === 2) {
              // TODO-QSP: $result += 'shave/<<$temp_pubecolor>>_v'
            } else {
              if (((s as any).temp_pubestyle ?? 0) === 3) {
                // TODO-QSP: $result += 'shave/<<$temp_pubecolor>>_triangle'
              } else {
                if (((s as any).temp_pubestyle ?? 0) === 4) {
                  // TODO-QSP: $result += 'shave/<<$temp_pubecolor>>_landing'
                } else {
                  if (((s as any).temp_pubestyle ?? 0) === 5) {
                    // TODO-QSP: $result += 'shave/<<$temp_pubecolor>>_heart'
                  } else {
                    if (((s as any).temp_pubestyle ?? 0) === 6) {
                      // TODO-QSP: $result += 'shave/<<$temp_pubecolor>>_flame'
                    } else {
                      if (((s as any).temp_pubestyle ?? 0) === 7) {
                        // TODO-QSP: $result += 'shave/<<$temp_pubecolor>>_cross'
                      } else {
                        if (((s as any).temp_pubestyle ?? 0) === 8) {
                          // TODO-QSP: $result += 'shave/<<$temp_pubecolor>>_trimmed'
                        } else {
                          if (((s as any).temp_pubestyle ?? 0) === 12) {
                            // TODO-QSP: $result += 'shave/<<$temp_pubecolor>>_mini'
                          } else {
                            // TODO-QSP: $result += 'hair/<<$temp_pubecolor>>_small'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).temp_pubes ?? 0) <= 35) {
              // TODO-QSP: $result += 'hair/<<$temp_pubecolor>>_mid'
            } else {
              // TODO-QSP: $result += 'hair/<<$temp_pubecolor>>_full'
            }
          }
        }
      }
    }
  } else {
    // TODO-QSP: $result += 'hair/pussy'
  }
  // TODO-QSP: $result += '.jpg'
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bodyVars ?? 0)?.['butt_silicone'] > 0) {
    // TODO-QSP: $result += '9s.jpg'
  } else {
    if (((s as any).pcs_buttsize ?? 0) <= 7) {
      // TODO-QSP: $result += '1.jpg'
    } else {
      if (((s as any).pcs_buttsize ?? 0) <= 14) {
        // TODO-QSP: $result += '2.jpg'
      } else {
        if (((s as any).pcs_buttsize ?? 0) <= 21) {
          // TODO-QSP: $result += '3.jpg'
        } else {
          if (((s as any).pcs_buttsize ?? 0) <= 29) {
            // TODO-QSP: $result += '4.jpg'
          } else {
            if (((s as any).pcs_buttsize ?? 0) <= 36) {
              // TODO-QSP: $result += '5.jpg'
            } else {
              if (((s as any).pcs_buttsize ?? 0) <= 44) {
                // TODO-QSP: $result += '6.jpg'
              } else {
                if (((s as any).pcs_buttsize ?? 0) <= 51) {
                  // TODO-QSP: $result += '7.jpg'
                } else {
                  if (((s as any).pcs_buttsize ?? 0) <= 59) {
                    // TODO-QSP: $result += '8.jpg'
                  } else {
                    // TODO-QSP: $result += '9.jpg'
                  }
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

function enterCoat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).coatworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += '<br>Your health will suffer if you don''t wear a coat in the winter.'
  } else {
    if (((s as any).PCoatWarm ?? 0) === 1) {
      // TODO-QSP: $body_image_msg += 'It''ll keep you fairly warm down to -10C.'
    } else {
      if (((s as any).PCoatWarm ?? 0) === 2) {
        // TODO-QSP: $body_image_msg += 'It will handle temperatures down to -20C.'
      } else {
        if (((s as any).PCoatWarm ?? 0) === 3) {
          // TODO-QSP: $body_image_msg += 'You will be nice and warm even in the depths of winter.'
        }
      }
    }
  }
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).towel ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none') {
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).robe ?? 0) === 1) {
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      } else {
        if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
        } else {
          if (((s as any).clothingworntype ?? 0) === 'misc_outfits'  &&  ((s as any).clothingwornnumber ?? 0) === 1) {
          } else {
            if (((s as any).PClobimbo ?? 0) === 1) {
              // TODO-QSP: $body_image_msg += '<br>You are dressed like a bimbo.'
            }
            qspCall(s, 'clothing_attributes', '', ((s as any).clothingworntype ?? 0), ((s as any).clothingwornnumber ?? 0));
            if ((!((s as any).PSwim ?? 0))) {
              qspCall(s, 'clothing_descriptions', '');
              // TODO-QSP: $body_image_msg += '<br><<$description>>'
            } else {
              // TODO-QSP: $body_image_msg += $swimwear_description
            }
            if (((s as any).PMaid ?? 0)) {
              // TODO-QSP: $body_image_msg += '<br>This outfit is considered to be a maid uniform.'
            } else {
              if (((s as any).PServer ?? 0)) {
                // TODO-QSP: $body_image_msg += '<br>This outfit is a server uniform, suitable for jobs that require one.'
              } else {
                if (((s as any).PStrip ?? 0)) {
                  // TODO-QSP: $body_image_msg += '<br>This is a stripper outfit.'
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

function enterPanties(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += 'You are not wearing any panties.'
  } else {
    // TODO-QSP: $body_image_msg += 'You are wearing <<$pantyworntype>> panty no. <<pantywornnumber>>'
  }
  scene.build();
}

function enterBra(s: GameState, scene: SceneBuilder): void {
  if (((s as any).braworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += 'You are not wearing a bra. '
  } else {
    // TODO-QSP: $body_image_msg += 'You are wearing <<$braworntype>> bra no. <<brawornnumber>>. Your breasts would b...
  }
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).braworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += 'You are not wearing a bodysuit. '
  } else {
    // TODO-QSP: $body_image_msg += 'You are wearing <<$bodysuitworntype>> bodysuit <<bodysuitwornnumber>>. Your brea...
  }
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shoeworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += 'You are not wearing shoes.'
  } else {
    // TODO-QSP: $body_image_msg += 'You are wearing ' + $func('$shoe_description', $shoeworntype, shoewornnumber)
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'body':
      enterBody(s, scene);
      break;
    case 'tits':
      enterTits(s, scene);
      break;
    case 'coat':
      enterCoat(s, scene);
      break;
    case 'clothes':
      enterClothes(s, scene);
      break;
    case 'panties':
      enterPanties(s, scene);
      break;
    case 'bra':
      enterBra(s, scene);
      break;
    case 'bodysuit':
      enterBodysuit(s, scene);
      break;
    case 'shoes':
      enterShoes(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _body_image: LocationDef = {
  name: '_body_image',
  region: 'other',
  enter: enter,
};
