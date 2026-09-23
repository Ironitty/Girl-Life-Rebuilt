import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBody(s: GameState, scene: SceneBuilder): void {
  (s as any).body_image_msg = 'You are ' + ((s as any).pcs_hgt ?? 0) + 'cm tall and ' + ((s as any).bodyVars ?? 0)?.['desc'] + '.';
  (s as any).result = ((s as any).bodyVars ?? 0)?.['img'];
  // TODO-QSP: end
  scene.build();
}

function enterTits(s: GameState, scene: SceneBuilder): void {
  (s as any).body_image_msg = 'Your breasts would be considered an EU ' + ((s as any).titsize ?? 0) + '.';
  (s as any).result = 'images/pc/body/tits/t' + ((s as any).tits ?? 0) + '.jpg';
  // TODO-QSP: end
  scene.build();
}

function enterPubes(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/body/pussy/';
  if (String((s as any).locArgs?.[1] ?? '') !== 0) {
    (s as any).temp_pubes = 0;
  }
  if (String((s as any).locArgs?.[2] ?? '') !== 0) {
    (s as any).temp_pubecol = 0;
  }
  if (String((s as any).locArgs?.[3] ?? '') !== 0) {
    (s as any).temp_pubestyle = 0;
  }
  if ((!((s as any).temp_pubecol ?? 0))) {
    (s as any).temp_pubecolor = 'black';
  } else {
    if (((s as any).temp_pubecol ?? 0) === 1) {
      (s as any).temp_pubecolor = 'brunette';
    } else {
      if (((s as any).temp_pubecol ?? 0) === 2) {
        (s as any).temp_pubecolor = 'ginger';
      } else {
        if (((s as any).temp_pubecol ?? 0) === 3) {
          (s as any).temp_pubecolor = 'blonde';
        } else {
          if (((s as any).temp_pubecol ?? 0) === 4) {
            (s as any).temp_pubecolor = 'red';
          } else {
            if (((s as any).temp_pubecol ?? 0) === 5) {
              (s as any).temp_pubecolor = 'blue';
            } else {
              if (((s as any).temp_pubecol ?? 0) === 6) {
                (s as any).temp_pubecolor = 'green';
              } else {
                if (((s as any).temp_pubecol ?? 0) === 7) {
                  (s as any).temp_pubecolor = 'pink';
                } else {
                  if (((s as any).temp_pubecol ?? 0) === 8) {
                    (s as any).temp_pubecolor = 'purple';
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
  // TODO-QSP: end
  scene.build();
}

function enterPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/body/pussy/';
  if (String((s as any).locArgs?.[1] ?? '') !== 0) {
    (s as any).temp_pubes = 0;
  }
  if (String((s as any).locArgs?.[2] ?? '') !== 0) {
    (s as any).temp_pubecol = 0;
  }
  if (String((s as any).locArgs?.[3] ?? '') !== 0) {
    (s as any).temp_pubestyle = 0;
  }
  if ((!((s as any).temp_pubecol ?? 0))) {
    (s as any).temp_pubecolor = 'black';
  } else {
    if (((s as any).temp_pubecol ?? 0) === 1) {
      (s as any).temp_pubecolor = 'brunette';
    } else {
      if (((s as any).temp_pubecol ?? 0) === 2) {
        (s as any).temp_pubecolor = 'ginger';
      } else {
        if (((s as any).temp_pubecol ?? 0) === 3) {
          (s as any).temp_pubecolor = 'blonde';
        } else {
          if (((s as any).temp_pubecol ?? 0) === 4) {
            (s as any).temp_pubecolor = 'red';
          } else {
            if (((s as any).temp_pubecol ?? 0) === 5) {
              (s as any).temp_pubecolor = 'blue';
            } else {
              if (((s as any).temp_pubecol ?? 0) === 6) {
                (s as any).temp_pubecolor = 'green';
              } else {
                if (((s as any).temp_pubecol ?? 0) === 7) {
                  (s as any).temp_pubecolor = 'pink';
                } else {
                  if (((s as any).temp_pubecol ?? 0) === 8) {
                    (s as any).temp_pubecolor = 'purple';
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
  // TODO-QSP: end
  scene.build();
}

function enterAss(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/body/ass/';
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
  // TODO-QSP: end
  scene.build();
}

function enterButt(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/body/ass/';
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
  // TODO-QSP: end
  scene.build();
}

function enterCoat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).coatworntype ?? 0) === 'none') {
    (s as any).body_image_msg = 'You will not wear a coat outside.';
    // TODO-QSP: $body_image_msg += '<br>Your health will suffer if you don''t wear a coat in the winter.'
    (s as any).result = '';
  } else {
    (s as any).body_image_msg = 'Your current coat is ' + ((s as any).coatworntype ?? 0) + ' no.' + ((s as any).coatwornnumber ?? 0) + '.<br>';
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
    (s as any).result = 'images/pc/items/' + ((s as any).coatworntype ?? 0) + '/coats/' + ((s as any).coatwornnumber ?? 0) + '.jpg';
  }
  // TODO-QSP: end
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).towel ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    (s as any).result = 'images/pc/body/towel.jpg';
    (s as any).body_image_msg = 'You are only wearing a towel';
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).robe ?? 0) === 1) {
      (s as any).result = 'images/pc/body/robe.jpg';
      (s as any).body_image_msg = 'You are only wearing a robe';
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
        (s as any).result = 'images/pc/body/nude.jpg';
        (s as any).body_image_msg = 'You are only wearing panties';
      } else {
        if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
          (s as any).result = 'images/pc/body/nude1.jpg';
          (s as any).body_image_msg = 'You are completely naked.';
        } else {
          if (((s as any).clothingworntype ?? 0) === 'misc_outfits'  &&  ((s as any).clothingwornnumber ?? 0) === 1) {
            (s as any).result = qspFunc(s, '$clothing_image', '', ((s as any).clothingworntype ?? 0), ((s as any).clothingwornnumber ?? 0));
            (s as any).body_image_msg = 'You are wearing a hessian sack the hunters gave you.';
          } else {
            (s as any).result = qspFunc(s, '$clothing_image', '', ((s as any).clothingworntype ?? 0), ((s as any).clothingwornnumber ?? 0));
            (s as any).body_image_msg = 'You are wearing ' + qspFunc(s, '$short_description', '', ((s as any).clothingworntype ?? 0), ((s as any).clothingwornnumber ?? 0));
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
  // TODO-QSP: end
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += 'You are not wearing any panties.'
    (s as any).result = qspFunc(s, '$body_image', '', 'pussy');
  } else {
    // TODO-QSP: $body_image_msg += 'You are wearing <<$pantyworntype>> panty no. <<pantywornnumber>>'
    (s as any).result = qspFunc(s, '$panty_image', '', ((s as any).pantyworntype ?? 0), ((s as any).pantywornnumber ?? 0));
  }
  // TODO-QSP: end
  scene.build();
}

function enterBra(s: GameState, scene: SceneBuilder): void {
  if (((s as any).braworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += 'You are not wearing a bra. '
    (s as any).result = qspFunc(s, '$body_image', '', 'tits');
  } else {
    // TODO-QSP: $body_image_msg += 'You are wearing <<$braworntype>> bra no. <<brawornnumber>>. Your breasts would b...
    (s as any).result = qspFunc(s, '$bra_image', '', ((s as any).braworntype ?? 0), ((s as any).brawornnumber ?? 0));
  }
  // TODO-QSP: end
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).braworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += 'You are not wearing a bodysuit. '
    (s as any).result = qspFunc(s, '$body_image', '', 'tits');
  } else {
    // TODO-QSP: $body_image_msg += 'You are wearing <<$bodysuitworntype>> bodysuit <<bodysuitwornnumber>>. Your brea...
    (s as any).result = qspFunc(s, '$pcs_outfit_image', '', ((s as any).bodysuitworntype ?? 0) + '_bodysuits', ((s as any).bodysuitwornnumber ?? 0));
  }
  // TODO-QSP: end
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shoeworntype ?? 0) === 'none') {
    // TODO-QSP: $body_image_msg += 'You are not wearing shoes.'
    (s as any).result = 'images/pc/body/feet.jpg';
  } else {
    // TODO-QSP: $body_image_msg += 'You are wearing ' + $func('$shoe_description', $shoeworntype, shoewornnumber)
    (s as any).result = qspFunc(s, '$shoe_image', '', ((s as any).shoeworntype ?? 0), ((s as any).shoewornnumber ?? 0));
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).body_image_msg = '';
  const arg = s.locArg;
  switch (arg) {
    case 'body':
      enterBody(s, scene);
      break;
    case 'tits':
      enterTits(s, scene);
      break;
    case 'pubes':
      enterPubes(s, scene);
      break;
    case 'pussy':
      enterPussy(s, scene);
      break;
    case 'ass':
      enterAss(s, scene);
      break;
    case 'butt':
      enterButt(s, scene);
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
