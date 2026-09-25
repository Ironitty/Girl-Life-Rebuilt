import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBody(s: GameState, scene: SceneBuilder): void {
  (s as any).body_image_msg = 'You are ' + ((s as any).pcs_hgt ?? 0) + 'cm tall and ' + (((s as any).bodyVars ?? 0)?.['desc']) + '.';
  (s as any).result = (((s as any).bodyVars ?? 0)?.['img']);
  scene.build();
}

function enterTits(s: GameState, scene: SceneBuilder): void {
  (s as any).body_image_msg = 'Your breasts would be considered an EU ' + ((s as any).titsize ?? 0) + '.';
  (s as any).result = 'images/pc/body/tits/t' + ((s as any).tits ?? 0) + '.jpg';
  scene.build();
}

function enterPubes(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/body/pussy/';
  if (String((s as any).locArgs?.[1] ?? '') !== 0) {
    (s as any).temp_pubes = ((s as any).locArgs?.[1] ?? 0);
  } else {
    (s as any).temp_pubes = ((s as any).pcs_pubes ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') !== 0) {
    (s as any).temp_pubecol = ((s as any).locArgs?.[2] ?? 0);
  } else {
    (s as any).temp_pubecol = (((s as any).pcs_pubecol ?? 0)?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[3] ?? '') !== 0) {
    (s as any).temp_pubestyle = ((s as any).locArgs?.[3] ?? 0);
  } else {
    (s as any).temp_pubestyle = ((s as any).pubestyle ?? 0);
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
      (s as any).result = ((s as any).result ?? 0) + ('hair/pussy');
    } else {
      if (((s as any).temp_pubes ?? 0) <= 10) {
        (s as any).result = ((s as any).result ?? 0) + ('hair/stubble');
      } else {
        if (((s as any).temp_pubes ?? 0) <= 15) {
          (s as any).result = ((s as any).result ?? 0) + ('hair/very_short');
        } else {
          if (((s as any).temp_pubes ?? 0) <= 25) {
            if (((s as any).temp_pubestyle ?? 0) === 2) {
              (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_v');
            } else {
              if (((s as any).temp_pubestyle ?? 0) === 3) {
                (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_triangle');
              } else {
                if (((s as any).temp_pubestyle ?? 0) === 4) {
                  (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_landing');
                } else {
                  if (((s as any).temp_pubestyle ?? 0) === 5) {
                    (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_heart');
                  } else {
                    if (((s as any).temp_pubestyle ?? 0) === 6) {
                      (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_flame');
                    } else {
                      if (((s as any).temp_pubestyle ?? 0) === 7) {
                        (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_cross');
                      } else {
                        if (((s as any).temp_pubestyle ?? 0) === 8) {
                          (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_trimmed');
                        } else {
                          if (((s as any).temp_pubestyle ?? 0) === 12) {
                            (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_mini');
                          } else {
                            (s as any).result = ((s as any).result ?? 0) + ('hair/' + ((s as any).temp_pubecolor ?? 0) + '_small');
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
              (s as any).result = ((s as any).result ?? 0) + ('hair/' + ((s as any).temp_pubecolor ?? 0) + '_mid');
            } else {
              (s as any).result = ((s as any).result ?? 0) + ('hair/' + ((s as any).temp_pubecolor ?? 0) + '_full');
            }
          }
        }
      }
    }
  } else {
    (s as any).result = ((s as any).result ?? 0) + ('hair/pussy');
  }
  (s as any).temp_pubes = undefined;
  (s as any).temp_pubecol = undefined;
  (s as any).temp_pubestyle = undefined;
  (s as any).temp_pubecolor = undefined;
  (s as any).result = ((s as any).result ?? 0) + ('.jpg');
  scene.build();
}

function enterPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/body/pussy/';
  if (String((s as any).locArgs?.[1] ?? '') !== 0) {
    (s as any).temp_pubes = ((s as any).locArgs?.[1] ?? 0);
  } else {
    (s as any).temp_pubes = ((s as any).pcs_pubes ?? 0);
  }
  if (String((s as any).locArgs?.[2] ?? '') !== 0) {
    (s as any).temp_pubecol = ((s as any).locArgs?.[2] ?? 0);
  } else {
    (s as any).temp_pubecol = (((s as any).pcs_pubecol ?? 0)?.[2] ?? 0);
  }
  if (String((s as any).locArgs?.[3] ?? '') !== 0) {
    (s as any).temp_pubestyle = ((s as any).locArgs?.[3] ?? 0);
  } else {
    (s as any).temp_pubestyle = ((s as any).pubestyle ?? 0);
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
      (s as any).result = ((s as any).result ?? 0) + ('hair/pussy');
    } else {
      if (((s as any).temp_pubes ?? 0) <= 10) {
        (s as any).result = ((s as any).result ?? 0) + ('hair/stubble');
      } else {
        if (((s as any).temp_pubes ?? 0) <= 15) {
          (s as any).result = ((s as any).result ?? 0) + ('hair/very_short');
        } else {
          if (((s as any).temp_pubes ?? 0) <= 25) {
            if (((s as any).temp_pubestyle ?? 0) === 2) {
              (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_v');
            } else {
              if (((s as any).temp_pubestyle ?? 0) === 3) {
                (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_triangle');
              } else {
                if (((s as any).temp_pubestyle ?? 0) === 4) {
                  (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_landing');
                } else {
                  if (((s as any).temp_pubestyle ?? 0) === 5) {
                    (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_heart');
                  } else {
                    if (((s as any).temp_pubestyle ?? 0) === 6) {
                      (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_flame');
                    } else {
                      if (((s as any).temp_pubestyle ?? 0) === 7) {
                        (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_cross');
                      } else {
                        if (((s as any).temp_pubestyle ?? 0) === 8) {
                          (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_trimmed');
                        } else {
                          if (((s as any).temp_pubestyle ?? 0) === 12) {
                            (s as any).result = ((s as any).result ?? 0) + ('shave/' + ((s as any).temp_pubecolor ?? 0) + '_mini');
                          } else {
                            (s as any).result = ((s as any).result ?? 0) + ('hair/' + ((s as any).temp_pubecolor ?? 0) + '_small');
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
              (s as any).result = ((s as any).result ?? 0) + ('hair/' + ((s as any).temp_pubecolor ?? 0) + '_mid');
            } else {
              (s as any).result = ((s as any).result ?? 0) + ('hair/' + ((s as any).temp_pubecolor ?? 0) + '_full');
            }
          }
        }
      }
    }
  } else {
    (s as any).result = ((s as any).result ?? 0) + ('hair/pussy');
  }
  (s as any).temp_pubes = undefined;
  (s as any).temp_pubecol = undefined;
  (s as any).temp_pubestyle = undefined;
  (s as any).temp_pubecolor = undefined;
  (s as any).result = ((s as any).result ?? 0) + ('.jpg');
  scene.build();
}

function enterAss(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/body/ass/';
  if (((s as any).bodyVars ?? 0)?.['butt_silicone'] > 0) {
    (s as any).result = ((s as any).result ?? 0) + ('9s.jpg');
  } else {
    if (((s as any).pcs_buttsize ?? 0) <= 7) {
      (s as any).result = ((s as any).result ?? 0) + ('1.jpg');
    } else {
      if (((s as any).pcs_buttsize ?? 0) <= 14) {
        (s as any).result = ((s as any).result ?? 0) + ('2.jpg');
      } else {
        if (((s as any).pcs_buttsize ?? 0) <= 21) {
          (s as any).result = ((s as any).result ?? 0) + ('3.jpg');
        } else {
          if (((s as any).pcs_buttsize ?? 0) <= 29) {
            (s as any).result = ((s as any).result ?? 0) + ('4.jpg');
          } else {
            if (((s as any).pcs_buttsize ?? 0) <= 36) {
              (s as any).result = ((s as any).result ?? 0) + ('5.jpg');
            } else {
              if (((s as any).pcs_buttsize ?? 0) <= 44) {
                (s as any).result = ((s as any).result ?? 0) + ('6.jpg');
              } else {
                if (((s as any).pcs_buttsize ?? 0) <= 51) {
                  (s as any).result = ((s as any).result ?? 0) + ('7.jpg');
                } else {
                  if (((s as any).pcs_buttsize ?? 0) <= 59) {
                    (s as any).result = ((s as any).result ?? 0) + ('8.jpg');
                  } else {
                    (s as any).result = ((s as any).result ?? 0) + ('9.jpg');
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

function enterButt(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'images/pc/body/ass/';
  if (((s as any).bodyVars ?? 0)?.['butt_silicone'] > 0) {
    (s as any).result = ((s as any).result ?? 0) + ('9s.jpg');
  } else {
    if (((s as any).pcs_buttsize ?? 0) <= 7) {
      (s as any).result = ((s as any).result ?? 0) + ('1.jpg');
    } else {
      if (((s as any).pcs_buttsize ?? 0) <= 14) {
        (s as any).result = ((s as any).result ?? 0) + ('2.jpg');
      } else {
        if (((s as any).pcs_buttsize ?? 0) <= 21) {
          (s as any).result = ((s as any).result ?? 0) + ('3.jpg');
        } else {
          if (((s as any).pcs_buttsize ?? 0) <= 29) {
            (s as any).result = ((s as any).result ?? 0) + ('4.jpg');
          } else {
            if (((s as any).pcs_buttsize ?? 0) <= 36) {
              (s as any).result = ((s as any).result ?? 0) + ('5.jpg');
            } else {
              if (((s as any).pcs_buttsize ?? 0) <= 44) {
                (s as any).result = ((s as any).result ?? 0) + ('6.jpg');
              } else {
                if (((s as any).pcs_buttsize ?? 0) <= 51) {
                  (s as any).result = ((s as any).result ?? 0) + ('7.jpg');
                } else {
                  if (((s as any).pcs_buttsize ?? 0) <= 59) {
                    (s as any).result = ((s as any).result ?? 0) + ('8.jpg');
                  } else {
                    (s as any).result = ((s as any).result ?? 0) + ('9.jpg');
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
    (s as any).body_image_msg = 'You will not wear a coat outside.';
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('<br>Your health will suffer if you don\'t wear a coat in the winter.');
    (s as any).result = '';
  } else {
    (s as any).body_image_msg = 'Your current coat is ' + ((s as any).coatworntype ?? 0) + ' no.' + ((s as any).coatwornnumber ?? 0) + '.<br>';
    if (((s as any).PCoatWarm ?? 0) === 1) {
      (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('It\'ll keep you fairly warm down to -10C.');
    } else {
      if (((s as any).PCoatWarm ?? 0) === 2) {
        (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('It will handle temperatures down to -20C.');
      } else {
        if (((s as any).PCoatWarm ?? 0) === 3) {
          (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You will be nice and warm even in the depths of winter.');
        }
      }
    }
    (s as any).result = 'images/pc/items/' + ((s as any).coatworntype ?? 0) + '/coats/' + ((s as any).coatwornnumber ?? 0) + '.jpg';
  }
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
              (s as any).body_image_msg = ((s as any).body_image_msg ?? '') + '<br>You are dressed like a bimbo.';
            }
            qspCall(s, 'clothing_attributes', '$clothingworntype', ((s as any).clothingwornnumber ?? 0));
            if ((!((s as any).PSwim ?? 0))) {
              qspCall(s, 'clothing_descriptions', '');
              (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('<br>' + ((s as any).description ?? 0) + '');
            } else {
              (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + (((s as any).swimwear_description ?? 0));
            }
            if (((s as any).PMaid ?? 0)) {
              (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('<br>This outfit is considered to be a maid uniform.');
            } else {
              if (((s as any).PServer ?? 0)) {
                (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('<br>This outfit is a server uniform, suitable for jobs that require one.');
              } else {
                if (((s as any).PStrip ?? 0)) {
                  (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('<br>This is a stripper outfit.');
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
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You are not wearing any panties.');
    (s as any).result = qspFunc(s, '$body_image', '', 'pussy');
  } else {
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You are wearing ' + ((s as any).pantyworntype ?? 0) + ' panty no. ' + ((s as any).pantywornnumber ?? 0) + '');
    (s as any).result = qspFunc(s, '$panty_image', '', ((s as any).pantyworntype ?? 0), ((s as any).pantywornnumber ?? 0));
  }
  scene.build();
}

function enterBra(s: GameState, scene: SceneBuilder): void {
  if (((s as any).braworntype ?? 0) === 'none') {
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You are not wearing a bra. ');
    (s as any).result = qspFunc(s, '$body_image', '', 'tits');
  } else {
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You are wearing ' + ((s as any).braworntype ?? 0) + ' bra no. ' + ((s as any).brawornnumber ?? 0) + '. Your breasts would be considered an EU ' + ((s as any).titsize ?? 0) + '');
    (s as any).result = qspFunc(s, '$bra_image', '', ((s as any).braworntype ?? 0), ((s as any).brawornnumber ?? 0));
  }
  scene.build();
}

function enterBodysuit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).braworntype ?? 0) === 'none') {
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You are not wearing a bodysuit. ');
    (s as any).result = qspFunc(s, '$body_image', '', 'tits');
  } else {
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You are wearing ' + ((s as any).bodysuitworntype ?? 0) + ' bodysuit ' + ((s as any).bodysuitwornnumber ?? 0) + '. Your breasts would be considered an EU ' + ((s as any).titsize ?? 0) + '');
    (s as any).result = qspFunc(s, '$pcs_outfit_image', '', ((s as any).bodysuitworntype ?? 0) + '_bodysuits', ((s as any).bodysuitwornnumber ?? 0));
  }
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shoeworntype ?? 0) === 'none') {
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You are not wearing shoes.');
    (s as any).result = 'images/pc/body/feet.jpg';
  } else {
    (s as any).body_image_msg = ((s as any).body_image_msg ?? 0) + ('You are wearing ' + qspFunc(s, '$shoe_description', '', ((s as any).shoeworntype ?? 0), ((s as any).shoewornnumber ?? 0)));
    (s as any).result = qspFunc(s, '$shoe_image', '', ((s as any).shoeworntype ?? 0), ((s as any).shoewornnumber ?? 0));
  }
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
