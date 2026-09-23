import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).FSneedExpNextLvl = (((s as any).FSlvl ?? 0) * 10) * ((s as any).FSlvl ?? 0);
  (s as any).FSneedExp = ((s as any).FSneedExpNextLvl ?? 0) - ((s as any).FSexp ?? 0);
  if (((s as any).FSneedExp ?? 0) <= 0  &&  ((s as any).FSlvl ?? 0) > ((s as any).FSlvlr ?? 0)) {
    (s as any).FSlvlr = ((s as any).FSlvl ?? 0);
    (s as any).FSpoint = ((s as any).FSpoint ?? 0) + (5);
    (s as any).FSlvl = ((s as any).FSlvl ?? 0) + (1);
    (s as any).FSexp = 0;
  }
  if (((s as any).FSfemin ?? 0) < 45) {
    ((s as any).FSfemin = (s as any).FSfemin ?? {})['text'] = 'Men';
  } else {
    if (((s as any).FSfemin ?? 0) <= 55) {
      ((s as any).FSfemin = (s as any).FSfemin ?? {})['text'] = 'Androgynous';
    } else {
      ((s as any).FSfemin = (s as any).FSfemin ?? {})['text'] = 'Female';
    }
  }
  if (((s as any).FSfigur ?? 0) < 45) {
    ((s as any).FSfigur = (s as any).FSfigur ?? {})['text'] = 'Male figure';
  } else {
    if (((s as any).FSfigur ?? 0) <= 55) {
      ((s as any).FSfigur = (s as any).FSfigur ?? {})['text'] = 'Androgynous figure';
    } else {
      ((s as any).FSfigur = (s as any).FSfigur ?? {})['text'] = 'Female figure';
    }
  }
  if (((s as any).FScolor ?? 0) < 0) {
    (s as any).FScolor = 0;
  } else {
    if (((s as any).FScolor ?? 0) > 5) {
      (s as any).FScolor = 5;
    }
  }
  if ((!((s as any).FScolor ?? 0))) {
    ((s as any).FScolor = (s as any).FScolor ?? {})['text'] = 'Black hair';
    ((s as any).FSsherst = (s as any).FSsherst ?? {})['text'] = 'Black';
  } else {
    if (((s as any).FScolor ?? 0) === 1) {
      ((s as any).FScolor = (s as any).FScolor ?? {})['text'] = 'Brown hair';
      ((s as any).FSsherst = (s as any).FSsherst ?? {})['text'] = 'Brown';
    } else {
      if (((s as any).FScolor ?? 0) === 2) {
        ((s as any).FScolor = (s as any).FScolor ?? {})['text'] = 'Foxy hair';
        ((s as any).FSsherst = (s as any).FSsherst ?? {})['text'] = 'Redhead';
      } else {
        if (((s as any).FScolor ?? 0) === 3) {
          ((s as any).FScolor = (s as any).FScolor ?? {})['text'] = 'Blonde hair';
          ((s as any).FSsherst = (s as any).FSsherst ?? {})['text'] = ((s as any).pcs_nickname ?? 0);
        } else {
          if (((s as any).FScolor ?? 0) === 4) {
            ((s as any).FScolor = (s as any).FScolor ?? {})['text'] = 'Pink hair';
            ((s as any).FSsherst = (s as any).FSsherst ?? {})['text'] = 'Pink';
          } else {
            ((s as any).FScolor = (s as any).FScolor ?? {})['text'] = 'White hair';
            ((s as any).FSsherst = (s as any).FSsherst ?? {})['text'] = 'White';
          }
        }
      }
    }
  }
  if (((s as any).FSface ?? 0) <= 0) {
    ((s as any).FSface = (s as any).FSface ?? {})['text'] = 'person';
  } else {
    if (((s as any).FSface ?? 0) === 1) {
      ((s as any).FSface = (s as any).FSface ?? {})['text'] = 'a person with cat ears and a cat-like nose';
    } else {
      if (((s as any).FSface ?? 0) === 2) {
        ((s as any).FSface = (s as any).FSface ?? {})['text'] = 'a person with dog ears and a dog-like nose';
      } else {
        if (((s as any).FSface ?? 0) === 3) {
          ((s as any).FSface = (s as any).FSface ?? {})['text'] = 'a person with fox ears and a fox-like nose';
        } else {
          if (((s as any).FSface ?? 0) === 4) {
            ((s as any).FSface = (s as any).FSface ?? {})['text'] = 'a person with protruding ears and nose';
          } else {
            if (((s as any).FSface ?? 0) === 5) {
              ((s as any).FSface = (s as any).FSface ?? {})['text'] = 'a person with cow\'s ears and nose';
            } else {
              ((s as any).FSface = (s as any).FSface ?? {})['text'] = 'a person with reptile-like ears and nose';
            }
          }
        }
      }
    }
  }
  if (((s as any).FSskin ?? 0) <= 0) {
    ((s as any).FSskin = (s as any).FSskin ?? {})['text'] = 'Normal skin';
  } else {
    if (((s as any).FSskin ?? 0) === 1) {
      ((s as any).FSskin = (s as any).FSskin ?? {})['text'] = '' + ((s as any).FSsherst ?? 0)?.['text'] + ' fur on the body';
    } else {
      ((s as any).FSskin = (s as any).FSskin ?? {})['text'] = 'Scales on body';
    }
  }
  if (((s as any).FShvost ?? 0) <= 0) {
    ((s as any).FShvost = (s as any).FShvost ?? {})['text'] = '';
  } else {
    if (((s as any).FShvost ?? 0) === 1) {
      ((s as any).FShvost = (s as any).FShvost ?? {})['text'] = 'Cat\'s tail';
    } else {
      if (((s as any).FShvost ?? 0) === 2) {
        ((s as any).FShvost = (s as any).FShvost ?? {})['text'] = 'Dog\'s tail';
      } else {
        if (((s as any).FShvost ?? 0) === 3) {
          ((s as any).FShvost = (s as any).FShvost ?? {})['text'] = 'Foxtail';
        } else {
          if (((s as any).FShvost ?? 0) === 4) {
            ((s as any).FShvost = (s as any).FShvost ?? {})['text'] = 'Horse\'s tail';
          } else {
            if (((s as any).FShvost ?? 0) === 5) {
              ((s as any).FShvost = (s as any).FShvost ?? {})['text'] = 'Cow\'s Tail';
            } else {
              ((s as any).FShvost = (s as any).FShvost ?? {})['text'] = 'Reptile tail';
            }
          }
        }
      }
    }
  }
  if (((s as any).dicktipe ?? 0) <= 0) {
    ((s as any).dicktipe = (s as any).dicktipe ?? {})['text'] = 'Normal male';
  } else {
    if (((s as any).dicktipe ?? 0) === 1) {
      ((s as any).dicktipe = (s as any).dicktipe ?? {})['text'] = 'Conical, covered with soft spines';
    } else {
      if (((s as any).dicktipe ?? 0) === 2) {
        ((s as any).dicktipe = (s as any).dicktipe ?? {})['text'] = 'Red, large dog-like at the base';
      } else {
        if (((s as any).dicktipe ?? 0) === 3) {
          ((s as any).dicktipe = (s as any).dicktipe ?? {})['text'] = 'Covered with coarse black leather';
        } else {
          ((s as any).dicktipe = (s as any).dicktipe ?? {})['text'] = 'Powerful horse';
        }
      }
    }
  }
  if (((s as any).FSdick ?? 0) > 0) {
    ((s as any).FSdick = (s as any).FSdick ?? {})['text'] = '' + ((s as any).dicktipe ?? 0)?.['text'] + ' long dick ' + ((s as any).FSdick ?? 0) + '';
  } else {
    ((s as any).FSdick = (s as any).FSdick ?? {})['text'] = '';
  }
  if (((s as any).FSvagina ?? 0) > 0) {
    ((s as any).FSvagina = (s as any).FSvagina ?? {})['text'] = 'A snatch between the legs';
  } else {
    ((s as any).FSvagina = (s as any).FSvagina ?? {})['text'] = '';
  }
  if (((s as any).FStits ?? 0) <= 0) {
    ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = '';
  } else {
    if (((s as any).FStits ?? 0) === 1) {
      ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = 'AA';
    } else {
      if (((s as any).FStits ?? 0) === 2) {
        ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = 'A';
      } else {
        if (((s as any).FStits ?? 0) === 3) {
          ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = 'Size B';
        } else {
          if (((s as any).FStits ?? 0) === 4) {
            ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = 'Size C';
          } else {
            if (((s as any).FStits ?? 0) === 5) {
              ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = 'Size D';
            } else {
              if (((s as any).FStits ?? 0) === 6) {
                ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = 'Size E';
              } else {
                if (((s as any).FStits ?? 0) === 7) {
                  ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = 'Size F';
                } else {
                  ((s as any).FStitrazm = (s as any).FStitrazm ?? {})['text'] = 'size F +';
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).FStits ?? 0) <= 0) {
    ((s as any).FStits = (s as any).FStits ?? {})['text'] = '';
  } else {
    if ((!((s as any).FStitsLine ?? 0))) {
      ((s as any).FStits = (s as any).FStits ?? {})['text'] = 'Female breast ' + ((s as any).FStitrazm ?? 0)?.['text'] + '';
    } else {
      if (((s as any).FStitsLine ?? 0) === 1) {
        ((s as any).FStits = (s as any).FStits ?? {})['text'] = 'Two pairs of women\'s breasts ' + ((s as any).FStitrazm ?? 0)?.['text'] + '';
      } else {
        if (((s as any).FStitsLine ?? 0) >= 2) {
          ((s as any).FStits = (s as any).FStits ?? {})['text'] = 'Three pairs of nipples ' + ((s as any).FStitrazm ?? 0)?.['text'] + '';
        }
      }
    }
  }
  if (((s as any).FSpers ?? 0) <= 0) {
    ((s as any).FSpers = (s as any).FSpers ?? {})['text'] = 'You have no character';
  } else {
    ((s as any).FSpers = (s as any).FSpers ?? {})['text'] = '' + ((s as any).FSname ?? 0)?.['text'] + '. ' + ((s as any).FSfemin ?? 0)?.['text'] + ' ' + ((s as any).FSface ?? 0)?.['text'] + ' ' + ((s as any).FScolor ?? 0)?.['text'] + ' ' + ((s as any).FSfigur ?? 0)?.['text'] + ' ' + ((s as any).FStits ?? 0)?.['text'] + ' ' + ((s as any).FSskin ?? 0)?.['text'] + ' ' + ((s as any).FShvost ?? 0)?.['text'] + ' ' + ((s as any).FSdick ?? 0)?.['text'] + ' ' + ((s as any).FSvagina ?? 0)?.['text'] + '';
  }
  // TODO-QSP: dynamic text: Level <<FSlvl>>, exp <<FSexp>>, need for next level <<FSneedExp>> exp
  scene.text(`Level ${((s as any).FSlvl ?? '')}, exp ${((s as any).FSexp ?? '')}, need for next level ${((s as any).FSneedExp ?? '')} exp`);
  // TODO-QSP: dynamic text: Life <<FSHP>>
  scene.text(`Life ${((s as any).FSHP ?? '')}`);
  // TODO-QSP: dynamic text: Strength <<FSstren>>
  scene.text(`Strength ${((s as any).FSstren ?? '')}`);
  // TODO-QSP: dynamic text: Speed <<FSspeed>>
  scene.text(`Speed ${((s as any).FSspeed ?? '')}`);
  // TODO-QSP: dynamic text: Agility <<FSagil>>
  scene.text(`Agility ${((s as any).FSagil ?? '')}`);
  // TODO-QSP: dynamic text: Initiative <<FSreakt>>
  scene.text(`Initiative ${((s as any).FSreakt ?? '')}`);
  // TODO-QSP: dynamic text: Endurance <<FSvital>>
  scene.text(`Endurance ${((s as any).FSvital ?? '')}`);
  if (((s as any).FShour ?? 0) >= 24) {
    (s as any).FShour = ((s as any).FShour ?? 0) - (24);
    (s as any).FSday = ((s as any).FSday ?? 0) + (1);
    if ((!((s as any).FSsup ?? 0))) {
      (s as any).FSHP = ((s as any).FSHP ?? 0) - (10);
    } else {
      (s as any).FSsup = ((s as any).FSsup ?? 0) - (1);
    }
  }
  if (((s as any).FSHP ?? 0) > 100) {
    (s as any).FSHP = 100;
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027FSstart/u0027, /u0027/u0027); return false;">Get out of the game</a>');
  // TODO-QSP: dynamic text: Day <<FSday>>, h <<FShour>>
  scene.text(`Day ${((s as any).FSday ?? '')}, h ${((s as any).FShour ?? '')}`);
  // TODO-QSP: dynamic text: <<FSgem>> of coins. Food enough for <<FSsup>> days
  scene.text(`${((s as any).FSgem ?? '')} of coins. Food enough for ${((s as any).FSsup ?? '')} days`);
  scene.text('');
  (s as any).FSatk = qspUntranslated(s, "{", { location: "FSstat" });
  (s as any).KGOLzas = (Math.floor(Math.random() * (((s as any).FSagilV ?? 0) - ((s as any).FSagilV ?? 0) / 4 + 1)) + (((s as any).FSagilV ?? 0) / 4));
  (s as any).KGOLataka = (Math.floor(Math.random() * (((s as any).FSspeed ?? 0) * 2 - ((s as any).FSspeed ?? 0) / 2 + 1)) + (((s as any).FSspeed ?? 0) / 2));
  if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzas ?? 0)) {
    if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzas ?? 0) * 2) {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).FSstren ?? 0) - ((s as any).FSstren ?? 0)/2 + 1)) + (((s as any).FSstren ?? 0)/2));
      (s as any).FSHPV = ((s as any).FSHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`CRETE ${((s as any).KGHPnpow ?? '')}`);
    } else {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).FSstren ?? 0)/2 - ((s as any).FSstren ?? 0)/4 + 1)) + (((s as any).FSstren ?? 0)/4));
      (s as any).KGHPntpow = ((s as any).KGHPnpow ?? 0) - ((s as any).FSbronaV ?? 0);
      if (((s as any).KGHPntpow ?? 0) <= 0) {
        (s as any).KGHPntpow = 1;
      }
      (s as any).FSHPV = ((s as any).FSHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`<center><b>Contact with ${((s as any).KGHPnpow ?? '')}</b></center>`);
    }
  } else {
    scene.text(`${((s as any).FSnameV ?? 0)?.['text'] ?? ''} dodged your attack`);
  }
  (s as any).FSatkV = qspUntranslated(s, "{", { location: "FSstat" });
  (s as any).KGOLzas = (Math.floor(Math.random() * (((s as any).FSagil ?? 0) - ((s as any).FSagil ?? 0) / 4 + 1)) + (((s as any).FSagil ?? 0) / 4));
  (s as any).KGOLataka = (Math.floor(Math.random() * (((s as any).FSspeedV ?? 0) * 2 - ((s as any).FSspeedV ?? 0) / 2 + 1)) + (((s as any).FSspeedV ?? 0) / 2));
  if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzas ?? 0)) {
    if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzas ?? 0) * 2) {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).FSstrenV ?? 0) - ((s as any).FSstrenV ?? 0)/2 + 1)) + (((s as any).FSstrenV ?? 0)/2));
      (s as any).FSHP = ((s as any).FSHP ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`CRETE ${((s as any).KGHPnpow ?? '')}`);
    } else {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).FSstrenV ?? 0)/2 - ((s as any).FSstrenV ?? 0)/4 + 1)) + (((s as any).FSstrenV ?? 0)/4));
      (s as any).KGHPntpow = ((s as any).KGHPnpow ?? 0) - ((s as any).FSbrona ?? 0);
      if (((s as any).KGHPntpow ?? 0) <= 0) {
        (s as any).KGHPntpow = 1;
      }
      (s as any).FSHP = ((s as any).FSHP ?? 0) - (((s as any).KGHPnpow ?? 0));
      // TODO-QSP: dynamic text: <font color="brown">Contact with <<KGHPnpow>></font>
      scene.text(`<font color="brown">Contact with ${((s as any).KGHPnpow ?? '')}</font>`);
    }
  } else {
    scene.text('You dodged the attack');
  }
  scene.build();
}

export const FSstat: LocationDef = {
  name: 'FSstat',
  title: 'CRETE',
  region: 'other',
  enter: enter,
};
