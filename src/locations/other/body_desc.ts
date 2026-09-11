import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'throat');
  qspCall(s, 'body_desc', 'pussy');
  qspCall(s, 'body_desc', 'anus');
  if ((!((s as any).dounspell ?? 0))) {
    qspCall(s, 'body_desc', 'butt');
    qspCall(s, 'body_desc', 'breasts');
    qspCall(s, 'body_desc', 'BMI');
  }
  qspCall(s, 'body_desc', 'lips');
  qspCall(s, 'body_desc', 'hair');
  qspCall(s, 'body_desc', 'tan');
  qspCall(s, 'body_desc', 'skin');
  qspCall(s, 'body_desc', 'eye_color');
  qspCall(s, 'body_desc', 'eyelashes');
  qspCall(s, 'body_desc', 'glasses');
  qspCall(s, 'body_desc', 'eye_size');
  qspCall(s, 'body_desc', 'makeup');
  qspCall(s, 'body_desc', 'nipples');
  qspCall(s, 'body_desc', 'clit');
  qspCall(s, 'body_desc', 'pubes');
  qspCall(s, 'body_desc', 'legs');
  qspCall(s, 'body_desc', 'teeth');
  qspCall(s, 'body_desc', 'appearance');
  return;
  scene.build();
}

function enterChooseDescWord(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterThroat(s: GameState, scene: SceneBuilder): void {
  ((s as any).pc_descFull ?? {})['throat'] = '';
  ((s as any).pc_desc ?? {})['throat'] = '';
  ((s as any).pc_descWordy ?? {})['throat'] = '';
  if (((s as any).pcs_throat ?? 0) <= 0) {
    (s as any).pcs_throat = 0;
    ((s as any).pc_descFull ?? {})['throat'] = 'You have a chaste <a href="exec:view\'images/pc/body/throat/th0.jpg\'">mouth</a>.';
    ((s as any).pc_desc ?? {})['throat'] = 'virgin';
    ((s as any).pc_descWordy ?? {})['throat'] = 'virginal, unused';
  } else {
    if (((s as any).pcs_throat ?? 0) <= 5) {
      ((s as any).pc_descFull ?? {})['throat'] = 'You have an extremely inexperienced <a href="exec:view\'images/pc/body/throat/th1.jpg\'">mouth</a>.';
      ((s as any).pc_desc ?? {})['throat'] = 'narrow';
      ((s as any).pc_descWordy ?? {})['throat'] = 'reluctant, gag-prone';
    } else {
      if (((s as any).pcs_throat ?? 0) <= 10) {
        ((s as any).pc_descFull ?? {})['throat'] = 'Your slightly-experienced mouth leads to a sensitive <a href="exec:view\'images/pc/body/throat/th2.jpg\'">throat</a> with an easily-triggered gag reflex.';
        ((s as any).pc_desc ?? {})['throat'] = 'delicate';
        ((s as any).pc_descWordy ?? {})['throat'] = 'delicate, barely-experienced';
      } else {
        if (((s as any).pcs_throat ?? 0) <= 15) {
          ((s as any).pc_descFull ?? {})['throat'] = 'You have an experienced mouth and fairly practiced <a href="exec:view\'images/pc/body/throat/th3.jpg\'">throat</a>.';
          ((s as any).pc_desc ?? {})['throat'] = 'fairly practiced';
          ((s as any).pc_descWordy ?? {})['throat'] = 'fairly practiced';
        } else {
          if (((s as any).pcs_throat ?? 0) <= 25) {
            ((s as any).pc_descFull ?? {})['throat'] = 'You have a willing mouth and trained <a href="exec:view\'images/pc/body/throat/th4.jpg\'">throat</a>.';
            ((s as any).pc_desc ?? {})['throat'] = 'well-trained';
            ((s as any).pc_descWordy ?? {})['throat'] = 'experienced, well-trained and eager';
          } else {
            if (((s as any).pcs_throat ?? 0) <= 35) {
              ((s as any).pc_descFull ?? {})['throat'] = 'Your deep tunnel of a <a href="exec:view\'images/pc/body/throat/th5.jpg\'">throat</a> may adopt any member.';
              ((s as any).pc_desc ?? {})['throat'] = 'capacious';
              ((s as any).pc_descWordy ?? {})['throat'] = 'seasoned, effortlessly-plumbed';
            } else {
              ((s as any).pc_descFull ?? {})['throat'] = 'Your gag reflex is completely absent and your <a href="exec:view\'images/pc/body/throat/th6.jpg\'">throat</a> has seen nearly as much cock as it has food.';
              ((s as any).pc_desc ?? {})['throat'] = 'bottomless';
              ((s as any).pc_descWordy ?? {})['throat'] = 'elastic, oft-fucked';
            }
          }
        }
      }
    }
  }
  if (((s as any).pcs_breath ?? 0) === 1) {
    ((s as any).pc_descFull ?? {})['throat'] = (((s as any).pc_descFull ?? {})['throat'] ?? 0) + (' Last you checked, your breath smelled fresh and minty.');
  }
  return;
  scene.build();
}

function enterPussy(s: GameState, scene: SceneBuilder): void {
  ((s as any).pc_desc ?? {})['pussy'] = '';
  ((s as any).pc_descWordy ?? {})['pussy'] = '';
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0  &&  ((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
    ((s as any).pc_desc ?? {})['pussy'] = 'pierced and tattooed ';
    ((s as any).pc_descWordy ?? {})['pussy'] = 'pierced and tattooed ';
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0) {
      ((s as any).pc_desc ?? {})['pussy'] = 'pierced ';
      ((s as any).pc_descWordy ?? {})['pussy'] = 'pierced ';
    } else {
      if (((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
        ((s as any).pc_desc ?? {})['pussy'] = 'tattooed ';
        ((s as any).pc_descWordy ?? {})['pussy'] = 'tattooed ';
      }
    }
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    ((s as any).pc_desc ?? {})['pussy'] = (((s as any).pc_desc ?? {})['pussy'] ?? 0) + ('virgin');
    ((s as any).pc_descWordy ?? {})['pussy'] = (((s as any).pc_descWordy ?? {})['pussy'] ?? 0) + ('virgin');
  } else {
    if (((s as any).vgape ?? 0) === 0  &&  ((s as any).pcs_vag ?? 0) <= 30) {
      ((s as any).pc_desc ?? {})['pussy'] = (((s as any).pc_desc ?? {})['pussy'] ?? 0) + (qspFunc(s, 'body_desc', 'ChooseDescWord', 'snug', 'tight', 'cosy'));
      ((s as any).pc_descWordy ?? {})['pussy'] = (((s as any).pc_descWordy ?? {})['pussy'] ?? 0) + ('tight and unused');
    } else {
      if (((s as any).vgape ?? 0) <= 1) {
        ((s as any).pc_desc ?? {})['pussy'] = (((s as any).pc_desc ?? {})['pussy'] ?? 0) + (qspFunc(s, 'body_desc', 'ChooseDescWord', 'pliable', 'used'));
        ((s as any).pc_descWordy ?? {})['pussy'] = (((s as any).pc_descWordy ?? {})['pussy'] ?? 0) + ('worn in');
      } else {
        if (((s as any).vgape ?? 0) === 2) {
          ((s as any).pc_desc ?? {})['pussy'] = (((s as any).pc_desc ?? {})['pussy'] ?? 0) + (qspFunc(s, 'body_desc', 'ChooseDescWord', 'recovering', 'recently used', 'welcoming'));
          ((s as any).pc_descWordy ?? {})['pussy'] = (((s as any).pc_descWordy ?? {})['pussy'] ?? 0) + ('experienced, welcoming');
        } else {
          if (((s as any).vgape ?? 0) === 3) {
            ((s as any).pc_desc ?? {})['pussy'] = (((s as any).pc_desc ?? {})['pussy'] ?? 0) + (qspFunc(s, 'body_desc', 'ChooseDescWord', 'gaping', 'open', 'extended', 'wide'));
            ((s as any).pc_descWordy ?? {})['pussy'] = (((s as any).pc_descWordy ?? {})['pussy'] ?? 0) + ('gaping and well used');
          } else {
            if ((!(Math.floor(Math.random() * 2) + 0))) {
            }
            ((s as any).pc_desc ?? {})['pussy'] = (((s as any).pc_desc ?? {})['pussy'] ?? 0) + (qspFunc(s, 'body_desc', 'ChooseDescWord', 'ruined', 'broken', 'proplapsed', 'destroyed', 'annihilated', 'obliterated', 'decimated'));
            ((s as any).pc_descWordy ?? {})['pussy'] = (((s as any).pc_descWordy ?? {})['pussy'] ?? 0) + ('prolapsed, ruined, chasm of a');
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterAnus(s: GameState, scene: SceneBuilder): void {
  ((s as any).pc_desc ?? {})['anus'] = '';
  ((s as any).pc_descWordy ?? {})['anus'] = '';
  if (((s as any).analPlugIn ?? 0)) {
    ((s as any).pc_desc ?? {})['anus'] = 'plugged';
    ((s as any).pc_descWordy ?? {})['anus'] = 'plug-stuffed';
    if (((s as any).pantyworntype ?? 0) !== 'none') {
    } else {
      if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0) {
      }
    }
  } else {
    if (((s as any).agape ?? 0) >= 4) {
      (s as any).anpic = 5;
      if ((!(Math.floor(Math.random() * 2) + 0))) {
      }
      ((s as any).pc_desc ?? {})['anus'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'gaping', 'yawning', 'destroyed', 'demolished', 'uselessly loose', 'ruined', 'wrecked');
      ((s as any).pc_descWordy ?? {})['anus'] = 'gaping, seemingly constantly-fucked';
    } else {
      if (((s as any).agape ?? 0) === 3) {
        (s as any).anpic = 4;
        ((s as any).pc_desc ?? {})['anus'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'loose', 'casually open', 'routinely-fucked');
        ((s as any).pc_descWordy ?? {})['anus'] = 'loose, open';
      } else {
        if (((s as any).agape ?? 0) === 2) {
          (s as any).anpic = 3;
          ((s as any).pc_desc ?? {})['anus'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'stretchy', 'welcomingly ready', 'experienced');
          ((s as any).pc_descWordy ?? {})['anus'] = 'stretchy, regularly-fucked';
        } else {
          if (((s as any).agape ?? 0) === 1  ||  ((s as any).pcs_ass ?? 0) > 10) {
            (s as any).anpic = 2;
            ((s as any).pc_desc ?? {})['anus'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'flexible', 'slightly experienced', 'pliable');
            ((s as any).pc_descWordy ?? {})['anus'] = 'flexible, still-snug';
          } else {
            if (((s as any).pcs_ass ?? 0) > 0) {
              (s as any).anpic = 1;
              ((s as any).pc_desc ?? {})['anus'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'tight', 'tightly-clenching', 'snug');
              ((s as any).pc_descWordy ?? {})['anus'] = 'tight, scarcely-used';
            } else {
              (s as any).anpic = 0;
              ((s as any).pc_desc ?? {})['anus'] = 'virgin';
              ((s as any).pc_descWordy ?? {})['anus'] = 'virgin';
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterBMI(s: GameState, scene: SceneBuilder): void {
  ((s as any).bodyVars ?? {})['bmi_desc'] = qspFunc(s, 'body_structure', 'bmi_desc');
  return;
  scene.build();
}

function enterBreasts(s: GameState, scene: SceneBuilder): void {
  (s as any).tits = 0;
  ((s as any).pc_desc ?? {})['breast'] = '';
  ((s as any).pc_descWordy ?? {})['breast'] = '';
  (s as any).pcs_bustdisparity = (((s as any).bodyVars ?? {})?.['bust_silicone'] - ((s as any).pcs_mass ?? {})?.['bust']) / 10;
  if (((s as any).pcs_bustdisparity ?? 0) <= 0) {
    if (((s as any).pcs_cupsize ?? 0) <= 30) {
    }
  } else {
    if (((s as any).pcs_bustdisparity ?? 0) === 2) {
    } else {
      if (((s as any).pcs_bustdisparity ?? 0) === 3) {
      } else {
        if (((s as any).pcs_bustdisparity ?? 0) === 4) {
        } else {
          if (((s as any).pcs_bustdisparity ?? 0) === 5) {
          } else {
            if (((s as any).pcs_bustdisparity ?? 0) === 6) {
            } else {
              if (((s as any).pcs_bustdisparity ?? 0) === 7) {
              } else {
                if (((s as any).pcs_bustdisparity ?? 0) >= 8) {
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
  }
  if (qspFunc(s, 'pcs_has_attr', 'body_tits_aa_cup')) {
    (s as any).tits = 0;
    ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'tiny', 'barely-there');
    if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
      // TODO-QSP: $pc_descWordy['breast'] = 'scarcely-augmented<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
    } else {
      ((s as any).pc_descWordy ?? {})['breast'] = 'tiny, mosquito-bite ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
    }
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'body_tits_a_cup')) {
      (s as any).tits = 1;
      (s as any).rand_breasts = Math.floor(Math.random() * 2) + 0;
      if ((!((s as any).rand_breasts ?? 0))) {
      } else {
        if (((s as any).rand_breasts ?? 0) === 1) {
        }
      }
      ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'petite', 'smaller than a handful');
      if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
        // TODO-QSP: $pc_descWordy['breast'] = 'barely modified<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
      } else {
        ((s as any).pc_descWordy ?? {})['breast'] = 'petite, puffy little ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
      }
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_tits_b_cup')) {
        (s as any).tits = 2;
        ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'small', 'sporty');
        if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
          // TODO-QSP: $pc_descWordy['breast'] = 'small, subtly augmented<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
        } else {
          ((s as any).pc_descWordy ?? {})['breast'] = 'small, handful-sized ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
        }
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'body_tits_c_cup')) {
          (s as any).tits = 3;
          ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'ample', 'average-sized');
          if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
            // TODO-QSP: $pc_descWordy['breast'] = 'ample, silicone-padded<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
          } else {
            ((s as any).pc_descWordy ?? {})['breast'] = 'ample, handful-sized ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
          }
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_d_cup')) {
            (s as any).tits = 4;
            ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'full', 'hefty');
            if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
              // TODO-QSP: $pc_descWordy['breast'] = 'full, silicone-padded<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
            } else {
              ((s as any).pc_descWordy ?? {})['breast'] = 'jiggly, womanly full ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
            }
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'body_tits_e_cup')) {
              (s as any).tits = 5;
              ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'generous', 'heavy', 'fairly large');
              if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
                // TODO-QSP: $pc_descWordy['breast'] = 'heavy, fake<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
              } else {
                ((s as any).pc_descWordy ?? {})['breast'] = 'soft, generously-sized ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
              }
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'body_tits_f_cup')) {
                (s as any).tits = 6;
                ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'big', 'large');
                if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
                  // TODO-QSP: $pc_descWordy['breast'] = 'big, implant-stuffed<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
                } else {
                  ((s as any).pc_descWordy ?? {})['breast'] = 'big, jiggly and sizeable ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
                }
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'body_tits_g_cup')) {
                  (s as any).tits = 7;
                  ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'considerably large', 'quite large');
                  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
                    // TODO-QSP: $pc_descWordy['breast'] = 'considerably large, implant-stuffed<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
                  } else {
                    ((s as any).pc_descWordy ?? {})['breast'] = 'quite large and jiggly ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
                  }
                } else {
                  if (qspFunc(s, 'pcs_has_attr', 'body_tits_h_cup')) {
                    (s as any).tits = 8;
                    ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'extremely large', 'incredibly stacked');
                    if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
                      // TODO-QSP: $pc_descWordy['breast'] = 'extremely large, silicone-stuffed<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
                    } else {
                      ((s as any).pc_descWordy ?? {})['breast'] = 'extremely large, over-stacked ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
                    }
                  } else {
                    if (qspFunc(s, 'pcs_has_attr', 'body_tits_i_cup')) {
                      (s as any).tits = 9;
                      ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'huge', 'impractically big', 'figure-dominating');
                      if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
                        // TODO-QSP: $pc_descWordy['breast'] = 'huge, silicone-swollen<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
                      } else {
                        ((s as any).pc_descWordy ?? {})['breast'] = 'huge, wholly impractical ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
                      }
                    } else {
                      if (qspFunc(s, 'pcs_has_attr', 'body_tits_j_cup')) {
                        (s as any).tits = 10;
                        ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'massive', 'enormous');
                        if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
                          // TODO-QSP: $pc_descWordy['breast'] = 'massively fake<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
                        } else {
                          ((s as any).pc_descWordy ?? {})['breast'] = 'massive, attention-grabbing ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
                        }
                      } else {
                        (s as any).tits = 11;
                        ((s as any).pc_desc ?? {})['breast'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'whorishly oversized', 'fucktoy-appropriate', 'ridiculously big');
                        if (((s as any).bodyVars ?? 0)?.['bust_silicone'] <= 0) {
                          // TODO-QSP: $pc_descWordy['breast'] = 'whorishly oversized<<$pcdesc_breastsqualifierinsertive>> <<$pcdesc_breastsword>>'
                        } else {
                          ((s as any).pc_descWordy ?? {})['breast'] = 'ridiculously big and figure-dominating ' + qspUntranslated(s, "pcdesc_breastsword>", { location: "body_desc" }) + '';
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
    }
  }
  return;
  scene.build();
}

function enterButt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bodyVars ?? 0)?.['butt_silicone'] > 0) {
    ((s as any).pc_desc ?? {})['butt'] = 'jiggly bubble';
    ((s as any).pc_descFull ?? {})['butt'] = 'Through the use of implants, you have given yourself a jiggly bubble <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\'">butt</a>.';
  } else {
    if (((s as any).pcs_buttsize ?? 0) <= 7) {
      ((s as any).pc_desc ?? {})['butt'] = 'square and flat';
      ((s as any).pc_descFull ?? {})['butt'] = 'Your <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">ass</a> is square and as flat as a plank.';
    } else {
      if (((s as any).pcs_buttsize ?? 0) <= 14) {
        ((s as any).pc_desc ?? {})['butt'] = 'square';
        ((s as any).pc_descFull ?? {})['butt'] = 'Your <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">ass</a> is square but not completely flat.';
      } else {
        if (((s as any).pcs_buttsize ?? 0) <= 21) {
          ((s as any).pc_desc ?? {})['butt'] = 'average';
          ((s as any).pc_descFull ?? {})['butt'] = 'You have an average, feminine looking <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">ass</a>.';
        } else {
          if (((s as any).pcs_buttsize ?? 0) <= 29) {
            ((s as any).pc_desc ?? {})['butt'] = 'above average';
            ((s as any).pc_descFull ?? {})['butt'] = 'You have an above-average, feminine looking <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">ass</a>.';
          } else {
            if (((s as any).pcs_buttsize ?? 0) <= 36) {
              ((s as any).pc_desc ?? {})['butt'] = 'big';
              ((s as any).pc_descFull ?? {})['butt'] = 'Your <a href="exec:view\'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">ass</a> is bigger, rounder and firmer than average.';
            } else {
              if (((s as any).pcs_buttsize ?? 0) <= 44) {
                ((s as any).pc_desc ?? {})['butt'] = 'ample';
                ((s as any).pc_descFull ?? {})['butt'] = 'Your ample <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">ass</a> is bigger, rounder and firmer than most.';
              } else {
                if (((s as any).pcs_buttsize ?? 0) <= 51) {
                  ((s as any).pc_desc ?? {})['butt'] = 'heart-shaped';
                  ((s as any).pc_descFull ?? {})['butt'] = 'You have a heart-shaped <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">butt</a> that jiggles as you walk.';
                } else {
                  if (((s as any).pcs_buttsize ?? 0) <= 59) {
                    ((s as any).pc_desc ?? {})['butt'] = 'large heart-shaped';
                    ((s as any).pc_descFull ?? {})['butt'] = 'You have a large heart-shaped <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">butt</a> that jiggles and sways as you walk.';
                  } else {
                    ((s as any).pc_desc ?? {})['butt'] = 'large bubble';
                    ((s as any).pc_descFull ?? {})['butt'] = 'You have a large bubble <a href="exec: view \'' + qspUntranslated(s, "temp_img>", { location: "body_desc" }) + '\' ">butt</a> that jiggles and sways as you walk.';
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterLips(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) <= 0) {
    (s as any).pcs_lip = 0;
    ((s as any).pc_desc ?? {})['lip size'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'thin', 'narrow', 'slender');
    ((s as any).pc_descWordy ?? {})['lip size'] = 'thin, scarcely-noticeable';
  } else {
    if (((s as any).pcs_lip ?? 0) === 1) {
      ((s as any).pc_desc ?? {})['lip size'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'kissable', 'normal');
      ((s as any).pc_descWordy ?? {})['lip size'] = 'kissable, if average';
    } else {
      if (((s as any).pcs_lip ?? 0) === 2) {
        ((s as any).pc_desc ?? {})['lip size'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'plump', 'full', 'inviting');
        ((s as any).pc_descWordy ?? {})['lip size'] = 'invitingly full';
      } else {
        if (((s as any).pcs_lip ?? 0) === 3) {
          ((s as any).pc_desc ?? {})['lip size'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'thick', 'big', 'pouty');
          ((s as any).pc_descWordy ?? {})['lip size'] = 'big, pouty and full';
        } else {
          (s as any).pcs_lip = 4;
          ((s as any).pc_desc ?? {})['lip size'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'fat', 'pillowy', 'plush');
          ((s as any).pc_descWordy ?? {})['lip size'] = 'plush, pillowy and inviting';
        }
      }
    }
  }
  if (((s as any).pcs_lipbalm ?? 0) <= 0) {
    ((s as any).pc_desc ?? {})['lip gloss'] = 'soft';
    ((s as any).pc_desc ?? {})['lip glossed'] = 'softened';
  } else {
    ((s as any).pc_desc ?? {})['lip gloss'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'shiny', 'glossy', 'juicy', 'slippery');
    ((s as any).pc_desc ?? {})['lip glossed'] = 'glossed';
    if (((s as any).pcs_lip ?? 0) === 1) {
      ((s as any).pc_descWordy ?? {})['lip glossed'] = 'gloss-slicked';
    } else {
      if (((s as any).pcs_lip ?? 0) === 2) {
        ((s as any).pc_descWordy ?? {})['lip glossed'] = 'invitingly glossed';
      } else {
        if (((s as any).pcs_lip ?? 0) === 3) {
          ((s as any).pc_descWordy ?? {})['lip glossed'] = 'wetly-glossed';
        } else {
          if (((s as any).pcs_lip ?? 0) === 4) {
            ((s as any).pc_descWordy ?? {})['lip glossed'] = 'suggestively gloss-glazed';
          } else {
            ((s as any).pc_descWordy ?? {})['lip glossed'] = 'gloss-slicked';
          }
        }
      }
    }
  }
  // TODO-QSP: $pc_descFull['lip'] = 'You have <<$pcs_lipSize>>, <<$pc_desc[''lip gloss'']>> ' + iif(pcs_lip = 4, 'suggestively full ', '') + 'lips. <<$pcs_piercings[''lip_desc'']>> <<$pcs_piercings[''tongue_desc'']>>'
  // TODO-QSP: $pc_desc['lips'] = '<<$pc_desc[''lip size'']>> <<$pc_desc[''lip gloss'']>>'
  // TODO-QSP: $pc_descWordy['lips'] = '<<$pc_desc[''lip gloss'']>>, <<$pc_descWordy[''lip size'']>>'
  return;
  scene.build();
}

function enterTan(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_tan ?? 0))) {
    ((s as any).pc_desc ?? {})['tan'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'pale', 'alabaster', 'porcelain', 'fair');
    ((s as any).pc_descWordy ?? {})['tan'] = 'pale, alabaster';
  } else {
    if (((s as any).pcs_tan ?? 0) <= 5) {
      ((s as any).pc_desc ?? {})['tan'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'lightly tanned', 'barely tanned', 'scarcely darkened');
      ((s as any).pc_descWordy ?? {})['tan'] = 'just barely sun-kissed';
    } else {
      if (((s as any).pcs_tan ?? 0) <= 10) {
        ((s as any).pc_desc ?? {})['tan'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'tanned', 'lightly bronzed', 'sun-kissed', 'lightly browned');
        ((s as any).pc_descWordy ?? {})['tan'] = 'gently sun-kissed';
      } else {
        if (((s as any).pcs_tan ?? 0) <= 25) {
          ((s as any).pc_desc ?? {})['tan'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'bronzed', 'browned', 'light caramel');
          ((s as any).pc_descWordy ?? {})['tan'] = 'sun-swept, beach-bunny brown';
        } else {
          if (((s as any).pcs_tan ?? 0) <= 50) {
            ((s as any).pc_desc ?? {})['tan'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'deeply tanned', 'very dark', 'richly browned', 'tawny');
            ((s as any).pc_descWordy ?? {})['tan'] = 'dark, richly browned';
          } else {
            ((s as any).pc_desc ?? {})['tan'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'extremely darkly tanned', 'nearly unnaturally darkened', 'dark, desert-tanned');
            ((s as any).pc_descWordy ?? {})['tan'] = 'practically swarthy';
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSkin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_skin ?? 0) < 200) {
    ((s as any).pc_desc ?? {})['skin'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'terrible', 'awful', 'greasy', 'pimple-strewn');
    ((s as any).pc_descWordy ?? {})['skin'] = 'awful, greasy and pimply';
    // TODO-QSP: $pc_descFull['skin'] = 'Your <<$pcs_tanstate>> skin is rough and covered with pimples and moles. <<$pcs_piercings[''ears_desc'']>> <<$pcs_piercings[''nose_desc'']>> <<$pcs_piercings[''brow_desc'']>> <<$pcs_piercings[''navel_desc'']>>'
  } else {
    if (((s as any).pcs_skin ?? 0) < 400) {
      ((s as any).pc_desc ?? {})['skin'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'bad', 'greasy', 'rough', 'unappealing');
      ((s as any).pc_descWordy ?? {})['skin'] = 'poorly-kept, unappealing';
      // TODO-QSP: $pc_descFull['skin'] = 'Your <<$pcs_tanstate>> skin is rough and has a few pimples. <<$pcs_piercings[''ears_desc'']>> <<$pcs_piercings[''nose_desc'']>> <<$pcs_piercings[''brow_desc'']>> <<$pcs_piercings[''navel_desc'']>>'
    } else {
      if (((s as any).pcs_skin ?? 0) < 600) {
        ((s as any).pc_desc ?? {})['skin'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'average', 'normal', 'clear');
        ((s as any).pc_descWordy ?? {})['skin'] = 'normal, slightly rough';
        // TODO-QSP: $pc_descFull['skin'] = 'Your <<$pcs_tanstate>> skin is clear of acne but still slightly rough. <<$pcs_piercings[''ears_desc'']>> <<$pcs_piercings[''nose_desc'']>> <<$pcs_piercings[''brow_desc'']>> <<$pcs_piercings[''navel_desc'']>>'
      } else {
        if (((s as any).pcs_skin ?? 0) < 800) {
          ((s as any).pc_desc ?? {})['skin'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'good', 'nice', 'smooth', 'great', 'well-kept');
          ((s as any).pc_descWordy ?? {})['skin'] = 'smooth, well-kept';
          // TODO-QSP: $pc_descFull['skin'] = 'You have <<$pcs_tanstate>>, smooth and well-groomed skin. <<$pcs_piercings[''ears_desc'']>> <<$pcs_piercings[''nose_desc'']>> <<$pcs_piercings[''brow_desc'']>> <<$pcs_piercings[''navel_desc'']>>'
        } else {
          ((s as any).pc_desc ?? {})['skin'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'excellent', 'silken', 'soft', 'silky', 'immaculate');
          ((s as any).pc_descWordy ?? {})['skin'] = 'immaculate, silky-soft';
          // TODO-QSP: $pc_descFull['skin'] = 'You have <<$pcs_tanstate>> and very smooth skin which almost feels like silk to the touch. <<$pcs_piercings[''ears_desc'']>> <<$pcs_piercings[''nose_desc'']>> <<$pcs_piercings[''brow_desc'']>> <<$pcs_piercings[''navel_desc'']>>'
        }
      }
    }
  }
  return;
  scene.build();
}

function enterEyelashes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_naturallashes ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) <= 2  &&  ((s as any).retroactivenaturallashes ?? 0) <= 0) {
    (s as any).pcs_naturallashes = ((s as any).pcs_lashes ?? 0);
    (s as any).retroactivenaturallashes = 1;
  }
  if (((s as any).pcs_lashes ?? 0) <= 0) {
    ((s as any).pc_desc ?? {})['eyelashes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'short', 'scarce', 'faint');
    ((s as any).pc_descWordy ?? {})['eyelashes'] = 'short, barely-noticeable';
  } else {
    if (((s as any).pcs_lashes ?? 0) === 1) {
      ((s as any).pc_desc ?? {})['eyelashes'] = 'average';
      ((s as any).pc_descWordy ?? {})['eyelashes'] = 'average';
    } else {
      if (((s as any).pcs_lashes ?? 0) === 2) {
        ((s as any).pc_desc ?? {})['eyelashes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'lengthy', 'long', 'fluttery', 'seductive');
        ((s as any).pc_descWordy ?? {})['eyelashes'] = 'long, fluttery';
      } else {
        if (((s as any).pcs_lashes ?? 0) === 3) {
          ((s as any).pc_desc ?? {})['eyelashes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'lavish', 'lush, dark', 'seductively-curled', 'flirtatiously lengthy');
          if (((s as any).false_lashes ?? 0) >= 1) {
            ((s as any).pc_descWordy ?? {})['eyelashes'] = 'lavish, attention-grabbing false';
          } else {
            ((s as any).pc_descWordy ?? {})['eyelashes'] = 'lavish, seductively dark';
          }
        } else {
          if (((s as any).pcs_lashes ?? 0) === 4) {
            if (((s as any).false_lashes ?? 0) >= 1) {
              ((s as any).pc_desc ?? {})['eyelashes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'mink-feathered', 'attention-grabbing', 'intoxicatingly seductive false', 'wildly flirtatious false');
              ((s as any).pc_descWordy ?? {})['eyelashes'] = 'fabulous, mink-feathered false';
            } else {
              ((s as any).pc_desc ?? {})['eyelashes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'amazingly lengthy', 'show-stealing', 'incredibly lush', 'stunningly dark  &&  full');
              ((s as any).pc_descWordy ?? {})['eyelashes'] = 'stunningly dark and full, show-stealing';
            }
          } else {
            ((s as any).pc_desc ?? {})['eyelashes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'long, jewel-dusted', 'incredibly extravagant', 'overwhelmingly indulgent', 'jewel-sparkled, showgirl');
            ((s as any).pc_descWordy ?? {})['eyelashes'] = 'incredibly extravagant, jewel-dusted';
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGlasses(s: GameState, scene: SceneBuilder): void {
  if (((s as any).glass ?? 0) <= 0) {
    (s as any).glass = 0;
    ((s as any).pc_descWordy ?? {})['vision'] = '';
  } else {
    if (((s as any).glass ?? 0) === 1) {
      ((s as any).pc_desc ?? {})['vision'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'glasses', 'lenses', 'dorky glasses', 'geeky lenses');
      ((s as any).pc_descWordy ?? {})['vision'] = 'cheap, utilitarian glasses';
    } else {
      ((s as any).pc_desc ?? {})['vision'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'glasses', 'lenses');
      ((s as any).pc_descWordy ?? {})['vision'] = 'chic, stylish glasses';
    }
  }
  return;
  scene.build();
}

function enterEyeColor(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_eyecol ?? 0))) {
    ((s as any).pc_desc ?? {})['eye colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'brown', 'hazel');
    ((s as any).pc_descWordy ?? {})['eye colour'] = 'warm, hazel';
  } else {
    if (((s as any).pcs_eyecol ?? 0) === 1) {
      ((s as any).pc_desc ?? {})['eye colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'pale', 'grey', 'silvery');
      ((s as any).pc_descWordy ?? {})['eye colour'] = 'pale, silvery-grey';
    } else {
      if (((s as any).pcs_eyecol ?? 0) === 2) {
        ((s as any).pc_desc ?? {})['eye colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'green', 'emerald');
        ((s as any).pc_descWordy ?? {})['eye colour'] = 'sparkling green';
      } else {
        if (((s as any).pcs_eyecol ?? 0) === 3) {
          ((s as any).pc_desc ?? {})['eye colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'blue', 'sapphire');
          ((s as any).pc_descWordy ?? {})['eye colour'] = 'vibrant, crystal blue';
        } else {
          ((s as any).pc_desc ?? {})['eye colour'] = 'attractive';
          ((s as any).pc_descWordy ?? {})['eye colour'] = 'attractive';
        }
      }
    }
  }
  return;
  scene.build();
}

function enterEyeSize(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_eyesize ?? 0) <= 0) {
    (s as any).pcs_eyesize = 0;
    ((s as any).pc_desc ?? {})['eye size'] = '';
    ((s as any).pc_descWordy ?? {})['eye size'] = 'little';
    // TODO-QSP: $pc_descFull['eyes'] = 'You have little <<$pcs_eyecolor>> eyes <<$pcs_lashes_txt>>.<<$glasses>>'
  } else {
    if (((s as any).pcs_eyesize ?? 0) === 1) {
      ((s as any).pc_desc ?? {})['eye size'] = '';
      ((s as any).pc_descWordy ?? {})['eye size'] = 'medium-sized';
      // TODO-QSP: $pc_descFull['eyes'] = 'You have medium-sized <<$pcs_eyecolor>> eyes <<$pcs_lashes_txt>>.<<$glasses>>'
    } else {
      if (((s as any).pcs_eyesize ?? 0) === 2) {
        ((s as any).pc_desc ?? {})['eye size'] = 'large';
        ((s as any).pc_descWordy ?? {})['eye size'] = 'large, expressive';
        // TODO-QSP: $pc_descFull['eyes'] = 'You have large <<$pcs_eyecolor>> eyes <<$pcs_lashes_txt>>.<<$glasses>>'
      } else {
        (s as any).pcs_eyesize = 3;
        ((s as any).pc_desc ?? {})['eye size'] = 'huge';
        ((s as any).pc_descWordy ?? {})['eye size'] = 'huge';
        // TODO-QSP: $pc_descFull['eyes'] = 'You have huge <<$pcs_eyecolor>> eyes that almost look like they''re out of an anime, <<$pcs_lashes_txt>>.<<$glasses>>'
      }
    }
  }
  return;
  scene.build();
}

function enterPiercing(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_piercings ?? {})['ears_desc'] = '';
  ((s as any).pc_descRandom ?? {})['ears'] = '';
  ((s as any).pc_descWordy ?? {})['ears'] = '';
  ((s as any).pc_desc ?? {})['ears'] = '';
  if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0) {
    ((s as any).pcs_piercings ?? {})['ears_desc'] = 'You are wearing earrings.';
    if (1) {
      ((s as any).pc_descRandom ?? {})['ears'] = 'pierced';
    }
    ((s as any).pc_descWordy ?? {})['ears'] = 'pierced';
    ((s as any).pc_desc ?? {})['ears'] = 'pierced';
  }
  ((s as any).pcs_piercings ?? {})['nose_desc'] = '';
  ((s as any).pc_descRandom ?? {})['nose'] = '';
  ((s as any).pc_descWordy ?? {})['nose'] = '';
  ((s as any).pc_desc ?? {})['nose'] = '';
  if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0) {
    ((s as any).pcs_piercings ?? {})['nose_desc'] = 'You have a piercing inserted in your nose.';
    ((s as any).pc_descRandom ?? {})['nose'] = 'pierced';
    ((s as any).pc_descWordy ?? {})['nose'] = 'jewelry-studded';
    ((s as any).pc_desc ?? {})['nose'] = 'pierced';
  }
  ((s as any).pcs_piercings ?? {})['brow_desc'] = '';
  ((s as any).pc_descRandom ?? {})['brow'] = '';
  ((s as any).pc_descWordy ?? {})['brow'] = '';
  ((s as any).pc_desc ?? {})['brow'] = '';
  if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0) {
    ((s as any).pcs_piercings ?? {})['brow_desc'] = 'Your eyebrow is pierced.';
    ((s as any).pc_descRandom ?? {})['brow'] = 'pierced';
    ((s as any).pc_descWordy ?? {})['brow'] = 'pierced';
    ((s as any).pc_desc ?? {})['brow'] = 'pierced';
  }
  ((s as any).pcs_piercings ?? {})['lip_desc'] = '';
  ((s as any).pc_descRandom ?? {})['lower_lip'] = '';
  ((s as any).pc_descWordy ?? {})['lower_lip'] = '';
  ((s as any).pc_desc ?? {})['lower_lip'] = '';
  if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0) {
    ((s as any).pcs_piercings ?? {})['lip_desc'] = 'Your lip is pierced.';
    ((s as any).pc_descRandom ?? {})['lower_lip'] = 'pierced';
    ((s as any).pc_descWordy ?? {})['lower_lip'] = 'jewelry-studded';
    ((s as any).pc_desc ?? {})['lower_lip'] = 'pierced';
  }
  ((s as any).pcs_piercings ?? {})['tongue_desc'] = '';
  ((s as any).pc_descRandom ?? {})['tongue'] = '';
  ((s as any).pc_descWordy ?? {})['tongue'] = '';
  ((s as any).pc_desc ?? {})['tongue'] = '';
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
    ((s as any).pcs_piercings ?? {})['tongue_desc'] = 'When you talk to people, they can sometimes get a glimpse of your tongue piercing.';
    ((s as any).pc_descRandom ?? {})['tongue'] = 'pierced';
    ((s as any).pc_descWordy ?? {})['tongue'] = 'barbell-pierced';
    ((s as any).pc_desc ?? {})['tongue'] = 'pierced';
  }
  ((s as any).pcs_piercings ?? {})['navel_desc'] = '';
  ((s as any).pc_descRandom ?? {})['navel'] = '';
  ((s as any).pc_descWordy ?? {})['navel'] = '';
  ((s as any).pc_desc ?? {})['navel'] = '';
  if (((s as any).pcs_piercings ?? 0)?.['navel'] > 0) {
    ((s as any).pcs_piercings ?? {})['navel_desc'] = 'You are wearing a navel piercing.';
    ((s as any).pc_descRandom ?? {})['navel'] = 'pierced';
    ((s as any).pc_descWordy ?? {})['navel'] = 'pierced';
    ((s as any).pc_desc ?? {})['navel'] = 'pierced';
  }
  return;
  scene.build();
}

function enterTattoo(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_tattoos ?? {})['ankle_desc'] = '';
  ((s as any).pc_descRandom ?? {})['ankle'] = '';
  ((s as any).pc_descWordy ?? {})['ankle'] = '';
  ((s as any).pc_desc ?? {})['ankle'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0) {
    ((s as any).pcs_tattoos ?? {})['aankle_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['ankle'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['ankle'] = 'tattooed';
    ((s as any).pc_desc ?? {})['ankle'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['arm_desc'] = '';
  ((s as any).pc_descRandom ?? {})['arm'] = '';
  ((s as any).pc_descWordy ?? {})['arm'] = '';
  ((s as any).pc_desc ?? {})['arm'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
    ((s as any).pcs_tattoos ?? {})['arm_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['arm'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['arm'] = 'tattooed';
    ((s as any).pc_desc ?? {})['arm'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['ass_desc'] = '';
  ((s as any).pc_descRandom ?? {})['ass'] = '';
  ((s as any).pc_descWordy ?? {})['ass'] = '';
  ((s as any).pc_desc ?? {})['ass'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['ass'] > 0) {
    ((s as any).pcs_tattoos ?? {})['ass_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['ass'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['ass'] = 'tattooed';
    ((s as any).pc_desc ?? {})['ass'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['back_desc'] = '';
  ((s as any).pc_descRandom ?? {})['back'] = '';
  ((s as any).pc_descWordy ?? {})['back'] = '';
  ((s as any).pc_desc ?? {})['back'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['back'] > 0) {
    ((s as any).pcs_tattoos ?? {})['back_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['back'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['back'] = 'tattooed';
    ((s as any).pc_desc ?? {})['back'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['belly_desc'] = '';
  ((s as any).pc_descRandom ?? {})['belly'] = '';
  ((s as any).pc_descWordy ?? {})['belly'] = '';
  ((s as any).pc_desc ?? {})['belly'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
    ((s as any).pcs_tattoos ?? {})['belly_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['belly'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['belly'] = 'tattooed';
    ((s as any).pc_desc ?? {})['belly'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['chest_desc'] = '';
  ((s as any).pc_descRandom ?? {})['chest'] = '';
  ((s as any).pc_descWordy ?? {})['chest'] = '';
  ((s as any).pc_desc ?? {})['chest'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['chest'] > 0) {
    ((s as any).pcs_tattoos ?? {})['chest_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['chest'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['chest'] = 'tattooed';
    ((s as any).pc_desc ?? {})['chest'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['face_desc'] = '';
  ((s as any).pc_descRandom ?? {})['face'] = '';
  ((s as any).pc_descWordy ?? {})['face'] = '';
  ((s as any).pc_desc ?? {})['face'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['face'] > 0) {
    ((s as any).pcs_tattoos ?? {})['face_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['face'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['face'] = 'tattooed';
    ((s as any).pc_desc ?? {})['face'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['hand_desc'] = '';
  ((s as any).pc_descRandom ?? {})['hand'] = '';
  ((s as any).pc_descWordy ?? {})['hand'] = '';
  ((s as any).pc_desc ?? {})['hand'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['hand'] > 0) {
    ((s as any).pcs_tattoos ?? {})['hand_desc'] = '';
    ((s as any).pc_descRandom ?? {})['hand'] = 'tattooed';
    ((s as any).pc_descWordy ?? {})['hand'] = 'tattooed';
    ((s as any).pc_desc ?? {})['hand'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['leg_desc'] = '';
  ((s as any).pc_descRandom ?? {})['leg'] = '';
  ((s as any).pc_descWordy ?? {})['leg'] = '';
  ((s as any).pc_desc ?? {})['leg'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
    ((s as any).pcs_tattoos ?? {})['leg_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['leg'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['leg'] = 'tattooed';
    ((s as any).pc_desc ?? {})['leg'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['neck_desc'] = '';
  ((s as any).pc_descRandom ?? {})['neck'] = '';
  ((s as any).pc_descWordy ?? {})['neck'] = '';
  ((s as any).pc_desc ?? {})['neck'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['neck'] > 0) {
    ((s as any).pcs_tattoos ?? {})['neck_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['neck'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['neck'] = 'tattooed';
    ((s as any).pc_desc ?? {})['neck'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['shoulder_desc'] = '';
  ((s as any).pc_descRandom ?? {})['shoulder'] = '';
  ((s as any).pc_descWordy ?? {})['shoulder'] = '';
  ((s as any).pc_desc ?? {})['shoulder'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
    ((s as any).pcs_tattoos ?? {})['shoulder_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['shoulder'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['shoulder'] = 'tattooed';
    ((s as any).pc_desc ?? {})['shoulder'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['side_desc'] = '';
  ((s as any).pc_descRandom ?? {})['side'] = '';
  ((s as any).pc_descWordy ?? {})['side'] = '';
  ((s as any).pc_desc ?? {})['side'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['side'] > 0) {
    ((s as any).pcs_tattoos ?? {})['side_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['side'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['side'] = 'tattooed';
    ((s as any).pc_desc ?? {})['side'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['tramp_desc'] = '';
  ((s as any).pc_descRandom ?? {})['tramp'] = '';
  ((s as any).pc_descWordy ?? {})['tramp'] = '';
  ((s as any).pc_desc ?? {})['tramp'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    ((s as any).pcs_tattoos ?? {})['tramp_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['tramp'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['tramp'] = 'tattooed';
    ((s as any).pc_desc ?? {})['tramp'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['under_desc'] = '';
  ((s as any).pc_descRandom ?? {})['under'] = '';
  ((s as any).pc_descWordy ?? {})['under'] = '';
  ((s as any).pc_desc ?? {})['under'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['under'] > 0) {
    ((s as any).pcs_tattoos ?? {})['under_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['under'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['under'] = 'tattooed';
    ((s as any).pc_desc ?? {})['under'] = 'tattooed';
  }
  ((s as any).pcs_tattoos ?? {})['wrist_desc'] = '';
  ((s as any).pc_descRandom ?? {})['wrist'] = '';
  ((s as any).pc_descWordy ?? {})['wrist'] = '';
  ((s as any).pc_desc ?? {})['wrist'] = '';
  if (((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0) {
    ((s as any).pcs_tattoos ?? {})['wrist_desc'] = '';
    if (1) {
      ((s as any).pc_descRandom ?? {})['wrist'] = 'tattooed';
    }
    ((s as any).pc_descWordy ?? {})['wrist'] = 'tattooed';
    ((s as any).pc_desc ?? {})['wrist'] = 'tattooed';
  }
  return;
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_makeup ?? 0))) {
    ((s as any).pc_desc ?? {})['makeup'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'makeup-ruined', 'makeup-smeared', 'makeup-trashed');
    ((s as any).pc_descWordy ?? {})['makeup'] = 'clownishly makeup-smeared';
    ((s as any).pc_descFull ?? {})['makeup'] = qspFunc(s, 'wrap', 'neg b', 'Your makeup is smeared all over your face');
  } else {
    if (((s as any).pcs_makeup ?? 0) === 1) {
      ((s as any).pc_desc ?? {})['makeup'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'natural', 'bare');
      ((s as any).pc_descWordy ?? {})['makeup'] = 'bare, natural';
      ((s as any).pc_descFull ?? {})['makeup'] = 'You\'re not wearing any kind of makeup';
    } else {
      if (((s as any).pcs_makeup ?? 0) === 2) {
        ((s as any).pc_desc ?? {})['makeup'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'lightly-accented', 'subtly-highlighted');
        ((s as any).pc_descWordy ?? {})['makeup'] = 'almost natural, subtly-accented';
        ((s as any).pc_descFull ?? {})['makeup'] = 'Your makeup is light and subtle, with neutral tones to bring out your natural beauty';
      } else {
        if (((s as any).pcs_makeup ?? 0) === 3) {
          ((s as any).pc_desc ?? {})['makeup'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'colourfully done-up', 'vibrantly done-up');
          ((s as any).pc_descWordy ?? {})['makeup'] = 'colourful, tastefully done-up';
          ((s as any).pc_descFull ?? {})['makeup'] = 'Your makeup has some mildly vibrant tones, covering your minor imperfections and enhancing your best features';
        } else {
          if (((s as any).pcs_makeup ?? 0) === 4) {
            ((s as any).pc_desc ?? {})['makeup'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'painted-on', 'makeup-caked', 'dolled-up', 'sultry, dramatically done-up');
            ((s as any).pc_descWordy ?? {})['makeup'] = 'heavily dolled-up and painted';
            ((s as any).pc_descFull ?? {})['makeup'] = 'Your makeup is thick enough to cover most imperfections, with rich shades drawing attention to your eyes and lips';
          } else {
            if (((s as any).pcs_makeup ?? 0) === 5) {
              ((s as any).pc_desc ?? {})['makeup'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'painted-on', 'makeup-caked', 'dolled-up', 'sultry, dramatically done-up');
              ((s as any).pc_descWordy ?? {})['makeup'] = 'heavily dolled-up and painted';
              ((s as any).pc_descFull ?? {})['makeup'] = 'Your makeup is professional grade, covering up any and all imperfections and flawlessly complimenting the natural hues of your eyes, face, and hair';
            } else {
              if (((s as any).pcs_makeup ?? 0) === 6) {
                ((s as any).pc_desc ?? {})['makeup'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'bimbo', 'hawt', 'O M G', 'just, the best');
                ((s as any).pc_descWordy ?? {})['makeup'] = 'really fucking bimbo-y';
                ((s as any).pc_descFull ?? {})['makeup'] = 'You look, like super hawt and everyone is so jelly because their makeup is boring and ugly.';
              } else {
                if (((s as any).pcs_makeup ?? 0) === 7) {
                  ((s as any).pc_desc ?? {})['makeup'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'goth', 'dark', 'heavy');
                  ((s as any).pc_descWordy ?? {})['makeup'] = 'completely obscured and goth';
                  ((s as any).pc_descFull ?? {})['makeup'] = 'Your makeup is goth style, covering up any and all imperfections and fully obscures your natural features.';
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterNipples(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_nips ?? 0) < 20) {
    ((s as any).pc_desc ?? {})['nipples'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'small', 'tiny', 'little');
    ((s as any).pc_descWordy ?? {})['nipples'] = 'small, tiny';
  } else {
    if (((s as any).pcs_nips ?? 0) < 40) {
      ((s as any).pc_desc ?? {})['nipples'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'slightly large', 'decently-sized');
      ((s as any).pc_descWordy ?? {})['nipples'] = 'slightly large';
    } else {
      if (((s as any).pcs_nips ?? 0) < 60) {
        ((s as any).pc_desc ?? {})['nipples'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'puffy', 'swollen', 'large');
        ((s as any).pc_descWordy ?? {})['nipples'] = 'large, puffy';
      } else {
        if (((s as any).pcs_nips ?? 0) < 80) {
          ((s as any).pc_desc ?? {})['nipples'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'big', 'thick');
          ((s as any).pc_descWordy ?? {})['nipples'] = 'big, thick';
        } else {
          ((s as any).pc_desc ?? {})['nipples'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'enormous', 'meaty', 'huge', 'unmistakably big');
          ((s as any).pc_descWordy ?? {})['nipples'] = 'huge, meaty';
        }
      }
    }
  }
  return;
  scene.build();
}

function enterClit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clit_size ?? 0) < 20) {
    ((s as any).pc_descWordy ?? {})['clit'] = 'small, oft-hidden';
    ((s as any).pc_desc ?? {})['clit'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'small', 'tiny');
  } else {
    if (((s as any).clit_size ?? 0) < 40) {
      ((s as any).pc_descWordy ?? {})['clit'] = 'average, regular sized';
      ((s as any).pc_desc ?? {})['clit'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'average', 'regular');
    } else {
      if (((s as any).clit_size ?? 0) < 60) {
        ((s as any).pc_descWordy ?? {})['clit'] = 'big, easily-found';
        ((s as any).pc_desc ?? {})['clit'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'large', 'big', 'engorged');
      } else {
        if (((s as any).clit_size ?? 0) < 80) {
          ((s as any).pc_descWordy ?? {})['clit'] = 'thick, meaty';
          ((s as any).pc_desc ?? {})['clit'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'meaty', 'thick', 'swollen');
        } else {
          ((s as any).pc_desc ?? {})['clit'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'oversized', 'huge');
          ((s as any).pc_descWordy ?? {})['clit'] = 'big, practically phallic';
        }
      }
    }
  }
  return;
  scene.build();
}

function enterPubes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lashair ?? 0) === 1) {
    ((s as any).pc_desc ?? {})['pubes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'hairless', 'smooth', 'bald', 'silky-smooth');
    ((s as any).pc_descWordy ?? {})['pubes'] = 'eternally silky-smooth';
    ((s as any).pube_style ?? {})['word'] = 'shaved';
  } else {
    ((s as any).pube_style ?? {})['shape'] = '';
    if (((s as any).pcs_pubes ?? 0) <= 3) {
      (s as any).lobkoef = 3;
      ((s as any).pc_desc ?? {})['pubes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'silky', 'hairless', 'smooth-shaven', 'freshly-shaven');
      ((s as any).pc_descWordy ?? {})['pubes'] = 'silky, freshly-shaven';
      ((s as any).pube_style ?? {})['word'] = 'shaved';
    } else {
      if (((s as any).pcs_pubes ?? 0) <= 10) {
        (s as any).lobkoef = 0;
        ((s as any).pc_desc ?? {})['pubes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'stubbly', 'scratchy', 'roughly-stubbled');
        ((s as any).pc_descWordy ?? {})['pubes'] = 'scratchy, roughly-stubbled';
        ((s as any).pube_style ?? {})['word'] = 'stubble';
      } else {
        if (((s as any).pcs_pubes ?? 0) <= 15) {
          (s as any).lobkoef = 0;
          ((s as any).pc_desc ?? {})['pubes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'almost bare', 'barely-haired', 'well-kept');
          ((s as any).pc_descWordy ?? {})['pubes'] = 'scratchy, roughly-stubbled';
          ((s as any).pube_style ?? {})['word'] = 'patch';
        } else {
          if (((s as any).pcs_pubes ?? 0) <= 25) {
            (s as any).lobkoef = 0;
            ((s as any).pube_style ?? {})['word'] = 'trimmed';
            if (((s as any).pubestyle ?? 0) === 9) {
              ((s as any).pube_style ?? {})['shape'] = 'bush';
            } else {
              if (((s as any).pubestyle ?? 0) === 12) {
                ((s as any).pube_style ?? {})['word'] = 'patch';
              } else {
                if (((s as any).pubestyle ?? 0) === 13) {
                  ((s as any).pube_style ?? {})['shape'] = 'strip';
                } else {
                  if (((s as any).pubestyle ?? 0) === 14) {
                    ((s as any).pube_style ?? {})['shape'] = 'rectangle';
                  } else {
                    if (((s as any).pubestyle ?? 0) === 2) {
                      ((s as any).pube_style ?? {})['shape'] = 'V';
                    } else {
                      if (((s as any).pubestyle ?? 0) === 3) {
                        ((s as any).pube_style ?? {})['shape'] = 'triangle';
                      } else {
                        if (((s as any).pubestyle ?? 0) === 4) {
                          ((s as any).pube_style ?? {})['shape'] = 'landing strip';
                        } else {
                          if (((s as any).pubestyle ?? 0) === 5) {
                            ((s as any).pube_style ?? {})['shape'] = 'heart';
                          } else {
                            if (((s as any).pubestyle ?? 0) === 6) {
                              ((s as any).pube_style ?? {})['shape'] = 'flame';
                            } else {
                              if (((s as any).pubestyle ?? 0) === 7) {
                                ((s as any).pube_style ?? {})['shape'] = 'cross';
                              } else {
                                if (((s as any).pubestyle ?? 0) === 8) {
                                  ((s as any).pube_style ?? {})['shape'] = 'bush';
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
            }
            ((s as any).pc_desc ?? {})['pubes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'wispy-haired', 'lightly-furred', 'trimmed', 'well-maintained');
            ((s as any).pc_descWordy ?? {})['pubes'] = 'trimmed, well-kept';
          } else {
            if (((s as any).pcs_pubes ?? 0) <= 30) {
              (s as any).lobkoef = 0;
              ((s as any).pc_desc ?? {})['pubes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'furred', 'bushy', 'partially-maintained');
              ((s as any).pc_descWordy ?? {})['pubes'] = 'bushy, thick';
              ((s as any).pube_style ?? {})['shape'] = 'bush';
              ((s as any).pube_style ?? {})['word'] = 'bush';
            } else {
              (s as any).lobkoef = 0;
              ((s as any).pc_desc ?? {})['pubes'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'thickly-furred', 'very hairy', 'ill-maintained');
              ((s as any).pc_descWordy ?? {})['pubes'] = 'hairy, wild-maned';
              ((s as any).pube_style ?? {})['shape'] = 'bush';
              ((s as any).pube_style ?? {})['word'] = 'untrimmed';
            }
          }
        }
      }
    }
  }
  qspCall(s, 'body_desc', 'pube_desc_update');
  return;
  scene.build();
}

function enterPubeDescUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pubes ?? 0) <= 3) {
    if (((s as any).lashair ?? 0) === 1) {
    }
  } else {
    if (((s as any).pcs_pubes ?? 0) <= 10) {
    } else {
      if (((s as any).pcs_pubes ?? 0) <= 15) {
      } else {
        if (((s as any).pcs_pubes ?? 0) <= 25) {
          if (((s as any).pubestyle ?? 0) === 2) {
          } else {
            if (((s as any).pubestyle ?? 0) === 3) {
            } else {
              if (((s as any).pubestyle ?? 0) === 4) {
              } else {
                if (((s as any).pubestyle ?? 0) === 5) {
                } else {
                  if (((s as any).pubestyle ?? 0) === 6) {
                  } else {
                    if (((s as any).pubestyle ?? 0) === 7) {
                    } else {
                      if (((s as any).pubestyle ?? 0) === 8) {
                      } else {
                        if (((s as any).pubestyle ?? 0) === 9) {
                        } else {
                          if (((s as any).pubestyle ?? 0) === 12) {
                          } else {
                            if (((s as any).pubestyle ?? 0) === 13) {
                            } else {
                              if (((s as any).pubestyle ?? 0) === 14) {
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
          }
        } else {
          if (((s as any).pcs_pubes ?? 0) <= 30) {
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterLegs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_leghair ?? 0) <= 0) {
    ((s as any).pc_desc ?? {})['legs'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'smooth', 'silky', 'soft');
    ((s as any).pc_descWordy ?? {})['legs'] = 'soft and silky-smooth';
  } else {
    if (((s as any).pcs_leghair ?? 0) <= 3) {
      ((s as any).pc_desc ?? {})['legs'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'slightly scratchy', 'faintly stubbly');
      ((s as any).pc_descWordy ?? {})['legs'] = 'slightly rough, invisibly-stubbled';
    } else {
      if (((s as any).pcs_leghair ?? 0) <= 6) {
        ((s as any).pc_desc ?? {})['legs'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'somewhat hairy', 'lightly-furred');
        ((s as any).pc_descWordy ?? {})['legs'] = 'lightly-furred, soft-haired';
      } else {
        ((s as any).pc_desc ?? {})['legs'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'hairy', 'unshaven', 'ungroomed');
        ((s as any).pc_descWordy ?? {})['legs'] = 'hairy, unshaven';
      }
    }
  }
  return;
  scene.build();
}

function enterHair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hairlng ?? 0) <= 80) {
    (s as any).hpigtail = 0;
    (s as any).hscrunchw = 0;
    (s as any).hpingripw = 0;
    if ((!((s as any).defcurly ?? 0))) {
      (s as any).curly = 0;
    } else {
      (s as any).curly = 2147483647;
    }
    (s as any).hbraids = 0;
    if (((s as any).pcs_hairlng ?? 0) <= 30  &&  ((s as any).hbangs ?? 0) === 1) {
      (s as any).hbangs = 0;
    }
  }
  if (((s as any).pcs_hairlng ?? 0) > 800) {
    (s as any).hpingripw = 0;
    (s as any).hbraids = 0;
    if (((s as any).hpigtail ?? 0) >= 1) {
      (s as any).hscrunchw = 0;
      (s as any).hpigtail = 0;
    }
  }
  if (((s as any).hbraids ?? 0) >= 1) {
    (s as any).hscrunchw = 0;
    (s as any).hpingripw = 0;
    (s as any).hpigtail = 0;
  }
  if (((s as any).pcs_hairbsh ?? 0) < 0) {
    ((s as any).pc_desc ?? {})['hair status'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'bed-tangled', 'sex-tousled', 'disheveled', 'mussed');
    ((s as any).pc_descWordy ?? {})['hair status'] = 'messy, just-fucked';
  } else {
    if ((!((s as any).pcs_hairbsh ?? 0))) {
      if (((s as any).pcs_hairlng ?? 0) <= 30) {
        ((s as any).pc_desc ?? {})['hair status'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'tangled', 'tousled', 'disheveled', 'mussed');
        ((s as any).pc_descWordy ?? {})['hair status'] = 'messy, poorly-kept';
      } else {
        ((s as any).pc_desc ?? {})['hair status'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'tangled', 'tousled', 'disheveled', 'mussed');
        ((s as any).pc_descWordy ?? {})['hair status'] = 'tangled, poorly-kept';
      }
    } else {
      ((s as any).pc_desc ?? {})['hair status'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'tangled', 'tousled', 'disheveled', 'mussed');
      ((s as any).pc_descWordy ?? {})['hair status'] = 'neat, well-maintained';
    }
  }
  if (((s as any).curly ?? 0) <= 0) {
    ((s as any).pc_desc ?? {})['hair texture'] = 'straight';
    ((s as any).pc_descWordy ?? {})['hair texture'] = 'locks';
  } else {
    ((s as any).pc_desc ?? {})['hair texture'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'curls', 'ringlets');
    ((s as any).pc_descWordy ?? {})['hair texture'] = 'playfully curly';
  }
  if (((s as any).hbangs ?? 0) <= 0) {
    ((s as any).pc_desc ?? {})['hair bang'] = 'forehead';
    ((s as any).pc_descWordy ?? {})['hair bang'] = 'forehead';
  } else {
    ((s as any).pc_desc ?? {})['hair bang'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'bangs', 'fringe');
    ((s as any).pc_descWordy ?? {})['hair bang'] = 'fringe';
  }
  if ((!((s as any).pcs_haircol ?? 0))) {
    ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'black', 'ebony', 'obsidian', 'jet-black', 'charcoal black', 'ravenblack', 'sable');
    ((s as any).pc_descWordy ?? {})['hair colour'] = 'dark, obsidian-black';
  } else {
    if (((s as any).pcs_haircol ?? 0) === 1) {
      ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'brown', 'russet brown', 'chestnut brown');
      ((s as any).pc_descWordy ?? {})['hair colour'] = 'russet brown';
    } else {
      if (((s as any).pcs_haircol ?? 0) === 2) {
        ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'fiery red', 'coppery red', 'ginger');
        ((s as any).pc_descWordy ?? {})['hair colour'] = 'fiery red';
      } else {
        if (((s as any).pcs_haircol ?? 0) === 3) {
          ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'blonde', 'golden-blonde', 'golden', 'fair, blonde');
          ((s as any).pc_descWordy ?? {})['hair colour'] = 'beautiful golden-blonde';
        } else {
          if (((s as any).pcs_haircol ?? 0) === 4) {
            ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'strawberry blonde', 'fire-engine red', 'scarlet');
            ((s as any).pc_descWordy ?? {})['hair colour'] = 'glowing, pale red';
          } else {
            if (((s as any).pcs_haircol ?? 0) === 5) {
              ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'dark blue', 'blurple', 'midnight blue');
              ((s as any).pc_descWordy ?? {})['hair colour'] = 'rich, purplish-blue';
            } else {
              if (((s as any).pcs_haircol ?? 0) === 6) {
                ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'blue', 'electric blue');
                ((s as any).pc_descWordy ?? {})['hair colour'] = 'vibrant, electric blue';
              } else {
                if (((s as any).pcs_haircol ?? 0) === 7) {
                  ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'light blue', 'azure', 'pale blue', 'candy-floss blue');
                  ((s as any).pc_descWordy ?? {})['hair colour'] = 'pale, candy-coloured blue';
                } else {
                  if (((s as any).pcs_haircol ?? 0) === 8) {
                    ((s as any).pc_desc ?? {})['hair colour'] = 'dark green';
                    ((s as any).pc_descWordy ?? {})['hair colour'] = 'deep, emerald-green';
                  } else {
                    if (((s as any).pcs_haircol ?? 0) === 9) {
                      ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'green', 'forest green', 'fern-green');
                      ((s as any).pc_descWordy ?? {})['hair colour'] = 'vibrant, forest-green';
                    } else {
                      if (((s as any).pcs_haircol ?? 0) === 10) {
                        ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'light green', 'pale green', 'leaf-green', 'minty green', 'candy-floss green');
                        ((s as any).pc_descWordy ?? {})['hair colour'] = 'pale, leaf-green';
                      } else {
                        if (((s as any).pcs_haircol ?? 0) === 11) {
                          ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'dark pink', 'purplish-pink');
                          ((s as any).pc_descWordy ?? {})['hair colour'] = 'dark, purplish-pink';
                        } else {
                          if (((s as any).pcs_haircol ?? 0) === 12) {
                            ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'bubblegum-pink', 'Barbie pink', 'fuchsia', 'pink', 'bright pink');
                            ((s as any).pc_descWordy ?? {})['hair colour'] = 'bright, bubblegum-pink';
                          } else {
                            if (((s as any).pcs_haircol ?? 0) === 13) {
                              ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'light pink', 'pale pink', 'babydoll pink', 'China pink', 'cotton-candy pink', 'candy-floss pink');
                              ((s as any).pc_descWordy ?? {})['hair colour'] = 'pale, cotton-candy pink';
                            } else {
                              if (((s as any).pcs_haircol ?? 0) === 14) {
                                ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'dark purple', 'deep purple', 'midnight purple', 'indigo');
                                ((s as any).pc_descWordy ?? {})['hair colour'] = 'deep, bluish-purple';
                              } else {
                                if (((s as any).pcs_haircol ?? 0) === 15) {
                                  ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'purple', 'plum purple', 'royal purple');
                                  ((s as any).pc_descWordy ?? {})['hair colour'] = 'rich, royal purple';
                                } else {
                                  if (((s as any).pcs_haircol ?? 0) === 16) {
                                    ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'light purple', 'pale purple', 'amethyst coloured', 'lavender');
                                    ((s as any).pc_descWordy ?? {})['hair colour'] = 'pale, floral purple';
                                  } else {
                                    if (((s as any).pcs_haircol ?? 0) === 17) {
                                      ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'light orange', 'pumpkin orange', 'bright orange');
                                      ((s as any).pc_descWordy ?? {})['hair colour'] = 'bright, fiery orange';
                                    } else {
                                      if (((s as any).pcs_haircol ?? 0) === 18) {
                                        ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'dark red', 'wine red', 'auburn');
                                        ((s as any).pc_descWordy ?? {})['hair colour'] = 'deep, seductive red';
                                      } else {
                                        if (((s as any).pcs_haircol ?? 0) === 19) {
                                          ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'medium red', 'cherry red', 'bronze');
                                          ((s as any).pc_descWordy ?? {})['hair colour'] = 'strong, fiery red';
                                        } else {
                                          if (((s as any).pcs_haircol ?? 0) === 20) {
                                            ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'turquoise', 'ultramarine', 'aquamarine', 'sea green');
                                            ((s as any).pc_descWordy ?? {})['hair colour'] = 'soft milky blue';
                                          } else {
                                            if (((s as any).pcs_haircol ?? 0) === 21) {
                                              ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'medium orange', 'pumpkin orange', 'carrot orange');
                                              ((s as any).pc_descWordy ?? {})['hair colour'] = 'strong, fiery orange';
                                            } else {
                                              if (((s as any).pcs_haircol ?? 0) === 22) {
                                                ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'dark orange', 'burnt Orange', 'rust');
                                                ((s as any).pc_descWordy ?? {})['hair colour'] = 'strong, burnt orange';
                                              } else {
                                                ((s as any).pc_desc ?? {})['hair colour'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'strangely-coloured', 'multicoloured');
                                                ((s as any).pc_descWordy ?? {})['hair colour'] = 'exceptionally variegated';
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
      }
    }
  }
  if (((s as any).hscrunchw ?? 0) === 1) {
    ((s as any).pc_desc ?? {})['hair style'] = 'ponytail';
    ((s as any).pc_descWordy ?? {})['hair style'] = 'tight, high-set ' + qspUntranslated(s, "pcs_haircolor>", { location: "body_desc" }) + ' ponytail';
  } else {
    if (((s as any).hscrunchw ?? 0) === 2) {
      ((s as any).pc_desc ?? {})['hair style'] = 'pigtails';
      ((s as any).pc_descWordy ?? {})['hair style'] = 'youthful, playful and flirty ' + qspUntranslated(s, "pcs_haircolor>", { location: "body_desc" }) + ' pigtails';
    } else {
      if (((s as any).hbraids ?? 0) > 0) {
        ((s as any).pc_desc ?? {})['hair style'] = 'braid';
        ((s as any).pc_descWordy ?? {})['hair style'] = 'delicately-wound ' + qspUntranslated(s, "pcs_haircolor>", { location: "body_desc" }) + ' braid';
      } else {
        if (((s as any).hpingripw ?? 0) > 0) {
          ((s as any).pc_desc ?? {})['hair style'] = 'upswept';
          ((s as any).pc_descWordy ?? {})['hair style'] = 'ornate, intricately-pinned ' + qspUntranslated(s, "pcs_haircolor>", { location: "body_desc" }) + ' updo';
        } else {
          ((s as any).pc_desc ?? {})['hair style'] = 'loose';
          ((s as any).pc_descWordy ?? {})['hair style'] = 'loose and free ' + qspUntranslated(s, "pcs_haircolor>", { location: "body_desc" }) + ' hair';
        }
      }
    }
  }
  (s as any).temp_norm_hair = ((s as any).pcs_hairlng ?? 0) * 165 / ((s as any).pcs_hgt ?? 0);
  if (((s as any).face_style ?? 0)?.['avatar_hair'] !== '') {
    ((s as any).pc_desc ?? {})['hair length'] = 'normal length';
    ((s as any).pc_descWordy ?? {})['hair length'] = 'normal length';
  } else {
    if (((s as any).pcs_hairlng ?? 0) <= 30) {
      ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'buzz-cut', 'close-cropped');
      ((s as any).pc_descWordy ?? {})['hair length'] = 'buzz-cut';
    } else {
      if (((s as any).temp_norm_hair ?? 0) <= 80) {
        ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'ear-length', 'cropped');
        ((s as any).pc_descWordy ?? {})['hair length'] = 'short, ear-length';
      } else {
        if (((s as any).temp_norm_hair ?? 0) <= 120) {
          ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'pixie-cut', 'jaw-length');
          ((s as any).pc_descWordy ?? {})['hair length'] = 'pixie-cut';
        } else {
          if (((s as any).temp_norm_hair ?? 0) <= 190) {
            ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'chin-length', 'bob-cut');
            ((s as any).pc_descWordy ?? {})['hair length'] = 'chin-length bob';
          } else {
            if (((s as any).temp_norm_hair ?? 0) <= 260) {
              ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'collarbone-length', 'collarbone-grazing');
              ((s as any).pc_descWordy ?? {})['hair length'] = 'collarbone-length';
            } else {
              if (((s as any).temp_norm_hair ?? 0) <= 420) {
                ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'shoulder-length', 'shoulder-grazing');
                ((s as any).pc_descWordy ?? {})['hair length'] = 'shoulder-length';
              } else {
                if (((s as any).temp_norm_hair ?? 0) <= 540) {
                  ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'chest-length', 'armpit-length');
                  ((s as any).pc_descWordy ?? {})['hair length'] = 'chest-length';
                } else {
                  if (((s as any).temp_norm_hair ?? 0) <= 640) {
                    ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'bra-strap-length', 'upper-back-length');
                    ((s as any).pc_descWordy ?? {})['hair length'] = 'bra-strap length';
                  } else {
                    if (((s as any).temp_norm_hair ?? 0) <= 740) {
                      ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'mid-back-length', 'lower-back-length');
                      ((s as any).pc_descWordy ?? {})['hair length'] = 'mid-back length';
                    } else {
                      if (((s as any).temp_norm_hair ?? 0) <= 870) {
                        ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'waist-length', 'waist-grazing');
                        ((s as any).pc_descWordy ?? {})['hair length'] = 'waist-length';
                      } else {
                        if (((s as any).temp_norm_hair ?? 0) <= 970) {
                          ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'hip-length', 'hip-grazing');
                          ((s as any).pc_descWordy ?? {})['hair length'] = 'hip-length';
                        } else {
                          ((s as any).pc_desc ?? {})['hair length'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'tailbone-length', 'exceptionally long');
                          ((s as any).pc_descWordy ?? {})['hair length'] = 'tailbone-length';
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
    }
  }
  // TODO-QSP: $pc_desc['hair'] = '<<$pc_desc[''hair status'']>>, <<$pc_desc[''hair length'']>> <<$pc_desc[''hair colour'']>> <<$pc_descWordy[''hair texture'']>>'
  // TODO-QSP: $pc_descWordy['hair'] = '<<$pc_desc[''hair status'']>>, <<$pc_descWordy[''hair length'']>> <<$pc_descWordy[''hair texture'']>> of <<$pc_descWordy[''hair colour'']>>'
  return;
  scene.build();
}

function enterTeeth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_missing_teeth ?? 0) <= 0) {
    if (((s as any).pcs_brace ?? 0) === 1) {
      if (((s as any).pcs_teeth ?? 0) < 0) {
        ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'sparkling', 'white');
        ((s as any).pc_descWordy ?? {})['teeth'] = 'braced, perfect, sparkling white';
      } else {
        if ((!((s as any).pcs_teeth ?? 0))) {
          ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'normal', 'average');
          ((s as any).pc_descWordy ?? {})['teeth'] = 'braced, normal, average';
        } else {
          ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'crooked', 'misaligned');
          ((s as any).pc_descWordy ?? {})['teeth'] = 'braced, crooked, misaligned';
        }
      }
    } else {
      if (((s as any).pcs_teeth ?? 0) < 0) {
        ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'perfect', 'sparkling', 'white');
        ((s as any).pc_descWordy ?? {})['teeth'] = 'perfect, sparkling white';
      } else {
        if ((!((s as any).pcs_teeth ?? 0))) {
          ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'average', 'normal');
          ((s as any).pc_descWordy ?? {})['teeth'] = 'normal, average';
        } else {
          ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'crooked', 'uneven', 'misaligned');
          ((s as any).pc_descWordy ?? {})['teeth'] = 'crooked, misaligned';
        }
      }
    }
  } else {
    if (((s as any).pcs_missing_teeth ?? 0) === 1) {
      if (((s as any).pcs_brace ?? 0) === 1) {
        if (((s as any).pcs_teeth ?? 0) < 0) {
          ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'sparkling', 'white');
          ((s as any).pc_descWordy ?? {})['teeth'] = 'one missing, braced, perfect, sparkling white';
        } else {
          if ((!((s as any).pcs_teeth ?? 0))) {
            ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'normal', 'average');
            ((s as any).pc_descWordy ?? {})['teeth'] = 'one missing, braced, average';
          } else {
            ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'uneven', 'misaligned');
            ((s as any).pc_descWordy ?? {})['teeth'] = 'one missing, braced, uneven, misaligned';
          }
        }
      } else {
        if (((s as any).pcs_teeth ?? 0) < 0) {
          ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'slightly imperfect', 'sparkling', 'white');
          ((s as any).pc_descWordy ?? {})['teeth'] = 'one missing, slightly imperfect';
        } else {
          if ((!((s as any).pcs_teeth ?? 0))) {
            ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'average', 'normal');
            ((s as any).pc_descWordy ?? {})['teeth'] = 'one missing, normal';
          } else {
            ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'uneven', 'misaligned');
            ((s as any).pc_descWordy ?? {})['teeth'] = 'one missing, uneven';
          }
        }
      }
    } else {
      if (((s as any).pcs_missing_teeth ?? 0) === 2) {
        if (((s as any).pcs_brace ?? 0) === 1) {
          if (((s as any).pcs_teeth ?? 0) < 0) {
            ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'sparkling', 'white');
            ((s as any).pc_descWordy ?? {})['teeth'] = 'two missing, braced, slightly imperfect, sparkling white';
          } else {
            if ((!((s as any).pcs_teeth ?? 0))) {
              ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'normal', 'average');
              ((s as any).pc_descWordy ?? {})['teeth'] = 'two missing, braced, average';
            } else {
              ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'gappy', 'misaligned');
              ((s as any).pc_descWordy ?? {})['teeth'] = 'two missing, braced, gappy, misaligned';
            }
          }
        } else {
          if (((s as any).pcs_teeth ?? 0) < 0) {
            ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'slightly imperfect', 'flawed', 'white');
            ((s as any).pc_descWordy ?? {})['teeth'] = 'two missing, slightly imperfect';
          } else {
            if ((!((s as any).pcs_teeth ?? 0))) {
              ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'average', 'normal');
              ((s as any).pc_descWordy ?? {})['teeth'] = 'two missing, average';
            } else {
              ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'gappy', 'misaligned');
              ((s as any).pc_descWordy ?? {})['teeth'] = 'two missing, gappy';
            }
          }
        }
      } else {
        if (((s as any).pcs_brace ?? 0) === 1) {
          if (((s as any).pcs_teeth ?? 0) < 0) {
            ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'gappy', 'flawed', 'white');
            ((s as any).pc_descWordy ?? {})['teeth'] = 'several missing, braced, gappy, flawed, sparkling white';
          } else {
            if ((!((s as any).pcs_teeth ?? 0))) {
              ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'gappy', 'irregular');
              ((s as any).pc_descWordy ?? {})['teeth'] = 'several missing, braced, gappy, irregular';
            } else {
              ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'braced', 'gappy', 'crooked');
              ((s as any).pc_descWordy ?? {})['teeth'] = 'several missing, braced, gappy, crooked';
            }
          }
        } else {
          if (((s as any).pcs_teeth ?? 0) < 0) {
            ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'gappy', 'flawed', 'white');
            ((s as any).pc_descWordy ?? {})['teeth'] = 'several missing, gappy';
          } else {
            if ((!((s as any).pcs_teeth ?? 0))) {
              ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'gappy', 'irregular');
              ((s as any).pc_descWordy ?? {})['teeth'] = 'several missing, irregular';
            } else {
              ((s as any).pc_desc ?? {})['teeth'] = qspFunc(s, 'body_desc', 'ChooseDescWord', 'gappy', 'irregular', 'crooked');
              ((s as any).pc_descWordy ?? {})['teeth'] = 'several missing, gappy and crooked';
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterAppearance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_apprnc ?? 0) < 40) {
    ((s as any).pc_desc ?? {})['apprnc'] = 'awful';
    ((s as any).pc_descWordy ?? {})['apprnc'] = 'worse than terrible, god-awful';
  } else {
    if (((s as any).pcs_apprnc ?? 0) < 60) {
      ((s as any).pc_desc ?? {})['apprnc'] = 'terrible';
      ((s as any).pc_descWordy ?? {})['apprnc'] = 'terrible, to be made fun of';
    } else {
      if (((s as any).pcs_apprnc ?? 0) < 80) {
        ((s as any).pc_desc ?? {})['apprnc'] = 'bad';
        ((s as any).pc_descWordy ?? {})['apprnc'] = 'bad, ignorable';
      } else {
        if (((s as any).pcs_apprnc ?? 0) < 100) {
          ((s as any).pc_desc ?? {})['apprnc'] = 'below average';
          ((s as any).pc_descWordy ?? {})['apprnc'] = 'below average, hardly noticeable';
        } else {
          if (((s as any).pcs_apprnc ?? 0) < 125) {
            ((s as any).pc_desc ?? {})['apprnc'] = 'average';
            ((s as any).pc_descWordy ?? {})['apprnc'] = 'average, barely noticeable';
          } else {
            if (((s as any).pcs_apprnc ?? 0) < 150) {
              ((s as any).pc_desc ?? {})['apprnc'] = 'cute';
              ((s as any).pc_descWordy ?? {})['apprnc'] = 'cute, girl next door cute';
            } else {
              if (((s as any).pcs_apprnc ?? 0) < 165) {
                ((s as any).pc_desc ?? {})['apprnc'] = 'attractive';
                ((s as any).pc_descWordy ?? {})['apprnc'] = 'obviously attractive,';
              } else {
                if (((s as any).pcs_apprnc ?? 0) < 180) {
                  ((s as any).pc_desc ?? {})['apprnc'] = 'good';
                  ((s as any).pc_descWordy ?? {})['apprnc'] = 'good, model like';
                } else {
                  if (((s as any).pcs_apprnc ?? 0) < 199) {
                    ((s as any).pc_desc ?? {})['apprnc'] = 'georgeous';
                    ((s as any).pc_descWordy ?? {})['apprnc'] = 'unquestionably gorgeous';
                  } else {
                    if (((s as any).pcs_apprnc ?? 0) < 220) {
                      ((s as any).pc_desc ?? {})['apprnc'] = 'stunning';
                      ((s as any).pc_descWordy ?? {})['apprnc'] = 'simply stunning';
                    } else {
                      ((s as any).pc_desc ?? {})['apprnc'] = 'divine';
                      ((s as any).pc_descWordy ?? {})['apprnc'] = 'divine like a goddess';
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
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ChooseDescWord':
      enterChooseDescWord(s, scene);
      break;
    case 'throat':
      enterThroat(s, scene);
      break;
    case 'pussy':
      enterPussy(s, scene);
      break;
    case 'anus':
      enterAnus(s, scene);
      break;
    case 'BMI':
      enterBMI(s, scene);
      break;
    case 'breasts':
      enterBreasts(s, scene);
      break;
    case 'butt':
      enterButt(s, scene);
      break;
    case 'lips':
      enterLips(s, scene);
      break;
    case 'tan':
      enterTan(s, scene);
      break;
    case 'skin':
      enterSkin(s, scene);
      break;
    case 'eyelashes':
      enterEyelashes(s, scene);
      break;
    case 'glasses':
      enterGlasses(s, scene);
      break;
    case 'eye_color':
      enterEyeColor(s, scene);
      break;
    case 'eye_size':
      enterEyeSize(s, scene);
      break;
    case 'piercing':
      enterPiercing(s, scene);
      break;
    case 'tattoo':
      enterTattoo(s, scene);
      break;
    case 'makeup':
      enterMakeup(s, scene);
      break;
    case 'nipples':
      enterNipples(s, scene);
      break;
    case 'clit':
      enterClit(s, scene);
      break;
    case 'pubes':
      enterPubes(s, scene);
      break;
    case 'pube_desc_update':
      enterPubeDescUpdate(s, scene);
      break;
    case 'legs':
      enterLegs(s, scene);
      break;
    case 'hair':
      enterHair(s, scene);
      break;
    case 'teeth':
      enterTeeth(s, scene);
      break;
    case 'appearance':
      enterAppearance(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const body_desc: LocationDef = {
  name: 'body_desc',
  title: 'Your makeup is smeared all over your face',
  region: 'other',
  enter: enter,
};
