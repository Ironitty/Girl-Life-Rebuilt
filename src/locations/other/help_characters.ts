import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBuild(s: GameState, scene: SceneBuilder): void {
  if (((s as any)._hc_un ?? 0) !== '') {
  } else {
    if (((s as any)._hc_fn ?? 0) !== '') {
    }
  }
  if (((s as any)._hc_nn ?? 0) !== ''  &&  ((s as any)._hc_nn ?? 0) !== ((s as any)._hc_fn ?? 0)) {
    // TODO-QSP: $_hc_full  += ' ''' + $_hc_nn + ''''
  }
  if (((s as any)._hc_ln ?? 0) !== '') {
    // TODO-QSP: $_hc_full  += ' ' + $_hc_ln
  }
  if (((s as any).npc_dob ?? 0)?.[String((s as any)._hc_npcid ?? 0)] > 0) {
  }
  if (((s as any)._hc_residence ?? 0) === '') {
  }
  if (((s as any)._hc_npcid ?? 0) === 'A28') {
  } else {
    if (((s as any)._hc_npcid ?? 0) === 'A29') {
    } else {
      if (((s as any)._hc_npcid ?? 0) === 'A33') {
      } else {
        if (((s as any)._hc_npcid ?? 0) === 'A34') {
        } else {
          if (((s as any)._hc_npcid ?? 0) === 'A4') {
          } else {
            if (((s as any)._hc_npcid ?? 0) === 'A14') {
            } else {
              if (((s as any)._hc_npcid ?? 0) === 'A15') {
              } else {
                if (((s as any)._hc_npcid ?? 0) === 'A13') {
                } else {
                  if (((s as any)._hc_npcid ?? 0) === 'A18') {
                  } else {
                    if (((s as any)._hc_npcid ?? 0) === 'A23') {
                    } else {
                      if (((s as any)._hc_npcid ?? 0) === 'A248') {
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
  if (((s as any)._hc_locvar ?? 0) !== '') {
    qspCall(s, 'help_characters', 'loc_text');
  }
  (s as any)._hc_i = 0;
  // TODO-QSP: :_hc_relloop
  if (((s as any)._hc_rel ?? 0)?.[String((s as any)._hc_i ?? 0)] !== '') {
    (s as any)._hc_p1 = qspUntranslated(s, "instr(_hc_rel[_hc_i], '|')", { location: "help_characters" });
    (s as any)._hc_p2 = qspUntranslated(s, "instr(_hc_rest, '|')", { location: "help_characters" });
    if (((s as any)._hc_relnpc ?? 0) === 'PC') {
    } else {
      if (((s as any).npc_usedname ?? 0)?.[String((s as any)._hc_relnpc ?? 0)] !== '') {
      }
    }
    // TODO-QSP: $_hc_relhtml += '<li>' + $_hc_reltype + ': <a href="' + $_hc_href + '">' + $_hc_relname + '</a></li>...
    (s as any)._hc_i = ((s as any)._hc_i ?? 0) + (1);
    // TODO-QSP: jump '_hc_relloop'
  }
  // TODO-QSP: $_hc_info += '<table style="margin:4px 0 6px 0;border-collapse:collapse">'
  // TODO-QSP: $_hc_info += '<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Birthday</b></td><td>' + $_hc_b...
  // TODO-QSP: $_hc_info += '<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Residence</b></td><td>' + $_hc_...
  if (((s as any)._hc_curloc ?? 0) !== '') {
    // TODO-QSP: $_hc_info += '<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Location</b></td><td>' + $_hc_c...
  }
  // TODO-QSP: $_hc_info += '</table>'
  if (((s as any)._hc_relhtml ?? 0) !== '') {
    // TODO-QSP: $_hc_info += '<p style="margin:6px 0 2px 0"><b>Relations</b></p>'
    // TODO-QSP: $_hc_info += '<ul style="margin:2px 0 4px 0">' + $_hc_relhtml + '</ul>'
  }
  if (((s as any)._hc_bio ?? 0) === '') {
    if (qspFunc(s, 'npc_notes', ((s as any)._hc_npcid ?? 0)) !== '') {
    }
  }
  // TODO-QSP: $help_page_content += '<td style="width:1%;white-space:nowrap;vertical-align:top;padding-right:14px"...
  // TODO-QSP: $help_page_content += '<img src="' + $_hc_portrait + '" style="height:200px;width:auto;max-width:180...
  // TODO-QSP: $help_page_content += '</td>'
  // TODO-QSP: $help_page_content += '<td style="vertical-align:top">' + $_hc_info + '</td>'
  // TODO-QSP: $help_page_content += '</tr><tr>'
  // TODO-QSP: $help_page_content += '<td colspan="2" style="padding-top:10px;border-top:1px solid rgba(128,128,128...
  // TODO-QSP: $help_page_content += $_hc_bio
  // TODO-QSP: $help_page_content += '</td></tr></table>'
  qspCall(s, 'help', 'render', ((s as any)._hc_key ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLocText(s: GameState, scene: SceneBuilder): void {
  if (((s as any)._hc_locvar ?? 0) === 'Stepdad'  ||  ((s as any)._hc_locvar ?? 0) === 'Mother'  ||  ((s as any)._hc_locvar ?? 0) === 'Anya'  ||  ((s as any)._hc_locvar ?? 0) === 'Kolka') {
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
      return;
    }
  }
  if (((s as any)._hc_locvar ?? 0) === 'Anya'  &&  ((s as any).locat ?? 0)?.['Anya_Gad'] === 1) {
    return;
  }
  (s as any)._hc_lv = ((s as any).locat ?? 0)?.[String((s as any)._hc_locvar ?? 0)];
  if (((s as any)._hc_locvar ?? 0) === 'Stepdad') {
    if (((s as any)._hc_lv ?? 0) === 1) {
    } else {
      if (((s as any)._hc_lv ?? 0) === 2) {
      } else {
        if (((s as any)._hc_lv ?? 0) === 3) {
        } else {
          if (((s as any)._hc_lv ?? 0) === 4) {
          } else {
            if (((s as any)._hc_lv ?? 0) === 5) {
            } else {
              if (((s as any)._hc_lv ?? 0) === 6) {
              } else {
                if (((s as any)._hc_lv ?? 0) === 7) {
                } else {
                  if (((s as any)._hc_lv ?? 0) === 8) {
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 9) {
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 10) {
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 11) {
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 12) {
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
  } else {
    if (((s as any)._hc_locvar ?? 0) === 'Mother') {
      if (((s as any)._hc_lv ?? 0) === 1) {
      } else {
        if (((s as any)._hc_lv ?? 0) === 2) {
        } else {
          if (((s as any)._hc_lv ?? 0) === 3) {
          } else {
            if (((s as any)._hc_lv ?? 0) === 4) {
            } else {
              if (((s as any)._hc_lv ?? 0) === 7) {
              } else {
                if (((s as any)._hc_lv ?? 0) === 8) {
                } else {
                  if (((s as any)._hc_lv ?? 0) === 9) {
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 10) {
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 11) {
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 12) {
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 13) {
                          } else {
                            if (((s as any)._hc_lv ?? 0) === 14) {
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 15) {
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 16) {
                                } else {
                                  if (((s as any)._hc_lv ?? 0) === 17) {
                                  } else {
                                    if (((s as any)._hc_lv ?? 0) === 18) {
                                    } else {
                                      if (((s as any)._hc_lv ?? 0) === 19) {
                                      } else {
                                        if (((s as any)._hc_lv ?? 0) === 20) {
                                        } else {
                                          if (((s as any)._hc_lv ?? 0) === 21) {
                                          } else {
                                            if (((s as any)._hc_lv ?? 0) === 23  ||  ((s as any)._hc_lv ?? 0) === 24  ||  ((s as any)._hc_lv ?? 0) === 25  ||  ((s as any)._hc_lv ?? 0) === 26) {
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
    } else {
      if (((s as any)._hc_locvar ?? 0) === 'Anya') {
        if (((s as any)._hc_lv ?? 0) === 1) {
        } else {
          if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 4  ||  ((s as any)._hc_lv ?? 0) === 5) {
          } else {
            if (((s as any)._hc_lv ?? 0) === 7) {
            } else {
              if (((s as any)._hc_lv ?? 0) === 8  ||  ((s as any)._hc_lv ?? 0) === 9) {
              } else {
                if (((s as any)._hc_lv ?? 0) === 10  ||  ((s as any)._hc_lv ?? 0) === 21) {
                } else {
                  if (((s as any)._hc_lv ?? 0) === 11) {
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 12) {
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 13) {
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 14) {
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 15  ||  ((s as any)._hc_lv ?? 0) === 16  ||  ((s as any)._hc_lv ?? 0) === 23) {
                          } else {
                            if (((s as any)._hc_lv ?? 0) === 17) {
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 24) {
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 26) {
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
      } else {
        if (((s as any)._hc_locvar ?? 0) === 'Kolka') {
          if (((s as any)._hc_lv ?? 0) === 1) {
          } else {
            if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 7  ||  ((s as any)._hc_lv ?? 0) === 8  ||  ((s as any)._hc_lv ?? 0) === 10  ||  ((s as any)._hc_lv ?? 0) === 11) {
            } else {
              if (((s as any)._hc_lv ?? 0) === 4) {
              } else {
                if (((s as any)._hc_lv ?? 0) === 5) {
                } else {
                  if (((s as any)._hc_lv ?? 0) === 6) {
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 9) {
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any)._hc_locvar ?? 0) === 'igor') {
            if (((s as any)._hc_lv ?? 0) === 1) {
            } else {
              if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 7) {
              } else {
                if (((s as any)._hc_lv ?? 0) === 4) {
                } else {
                  if (((s as any)._hc_lv ?? 0) === 5) {
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 6) {
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 8) {
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any)._hc_locvar ?? 0) === 'katja') {
              if (((s as any)._hc_lv ?? 0) === 1  ||  ((s as any)._hc_lv ?? 0) === 20) {
              } else {
                if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 9) {
                } else {
                  if (((s as any)._hc_lv ?? 0) === 4  ||  ((s as any)._hc_lv ?? 0) === 7) {
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 5) {
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 6) {
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 8) {
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 10) {
                          } else {
                            if (((s as any)._hc_lv ?? 0) >= 21  &&  ((s as any)._hc_lv ?? 0) <= 35) {
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 36) {
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 37) {
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
              if (((s as any)._hc_locvar ?? 0) === 'Vicky') {
                if (((s as any)._hc_lv ?? 0) === 1) {
                } else {
                  if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3) {
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 4) {
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 5) {
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 6) {
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 7) {
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if (((s as any)._hc_locvar ?? 0) === 'Lariska') {
                  if (((s as any)._hc_lv ?? 0) === 1) {
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3) {
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 4) {
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 5) {
                        }
                      }
                    }
                  }
                } else {
                  if (((s as any)._hc_locvar ?? 0) === 'Christina') {
                    if (((s as any)._hc_lv ?? 0) === 1) {
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 11  ||  ((s as any)._hc_lv ?? 0) === 12  ||  ((s as any)._hc_lv ?? 0) === 13  ||  ((s as any)._hc_lv ?? 0) === 14  ||  ((s as any)._hc_lv ?? 0) === 22) {
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 4) {
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 5) {
                          } else {
                            if (((s as any)._hc_lv ?? 0) === 6) {
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 7) {
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 9) {
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (((s as any)._hc_locvar ?? 0) === 'A23') {
                      if (((s as any)._hc_lv ?? 0) === 1  ||  ((s as any)._hc_lv ?? 0) === 9) {
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 2) {
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 3) {
                          } else {
                            if (((s as any)._hc_lv ?? 0) === 4) {
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 5) {
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 6) {
                                } else {
                                  if (((s as any)._hc_lv ?? 0) === 7) {
                                  } else {
                                    if (((s as any)._hc_lv ?? 0) === 8) {
                                    } else {
                                      if (((s as any)._hc_lv ?? 0) >= 10  &&  ((s as any)._hc_lv ?? 0) <= 19) {
                                      } else {
                                        if (((s as any)._hc_lv ?? 0) === 20) {
                                        } else {
                                          if (((s as any)._hc_lv ?? 0) === 21  ||  ((s as any)._hc_lv ?? 0) === 22) {
                                          } else {
                                            if (((s as any)._hc_lv ?? 0) === 35) {
                                            } else {
                                              if (((s as any)._hc_lv ?? 0) === 36) {
                                              } else {
                                                if (((s as any)._hc_lv ?? 0) === 37) {
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
                    } else {
                      if (((s as any)._hc_locvar ?? 0) === 'Silvestr') {
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
  // TODO-QSP: end
  scene.build();
}

function enterCharsPc(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharDad(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Married to|char_mom|A29'
  // TODO-QSP: $_hc_rel[1] = 'Stepfather of|chars_pc|PC'
  // TODO-QSP: $_hc_rel[2] = 'Stepfather of|char_anya|A33'
  // TODO-QSP: $_hc_rel[3] = 'Stepfather of|char_kolka|A34'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMom(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Married to|char_dad|A28'
  // TODO-QSP: $_hc_rel[1] = 'Mother of|chars_pc|PC'
  // TODO-QSP: $_hc_rel[2] = 'Mother of|char_anya|A33'
  // TODO-QSP: $_hc_rel[3] = 'Mother of|char_kolka|A34'
  // TODO-QSP: $_hc_rel[4] = 'Sister of|char_luda|A30'
  // TODO-QSP: $_hc_rel[5] = 'Daughter of|char_grandma|A31'
  // TODO-QSP: $_hc_rel[6] = 'Daughter of|char_grandpa|A32'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLuda(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Sister of|char_mom|A29'
  // TODO-QSP: $_hc_rel[1] = 'Daughter of|char_grandma|A31'
  // TODO-QSP: $_hc_rel[2] = 'Daughter of|char_grandpa|A32'
  // TODO-QSP: $_hc_rel[3] = 'Aunt of|chars_pc|PC'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharGrandma(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Married to|char_grandpa|A32'
  // TODO-QSP: $_hc_rel[1] = 'Daughter|char_mom|A29'
  // TODO-QSP: $_hc_rel[2] = 'Daughter|char_luda|A30'
  // TODO-QSP: $_hc_rel[3] = 'Long-time farmhand|char_grigory|A221'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharGrandpa(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Married to|char_grandma|A31'
  // TODO-QSP: $_hc_rel[1] = 'Daughter|char_mom|A29'
  // TODO-QSP: $_hc_rel[2] = 'Daughter|char_luda|A30'
  // TODO-QSP: $_hc_rel[3] = 'Long-time farmhand|char_grigory|A221'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAnya(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Stepfather|char_dad|A28'
  // TODO-QSP: $_hc_rel[1] = 'Mother|char_mom|A29'
  // TODO-QSP: $_hc_rel[2] = 'Younger sister|chars_pc|PC'
  // TODO-QSP: $_hc_rel[3] = 'Younger brother|char_kolka|A34'
  // TODO-QSP: $_hc_rel[4] = 'Boyfriend|char_roma|A56'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharKolka(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Stepfather|char_dad|A28'
  // TODO-QSP: $_hc_rel[1] = 'Mother|char_mom|A29'
  // TODO-QSP: $_hc_rel[2] = 'Older sister|chars_pc|PC'
  // TODO-QSP: $_hc_rel[3] = 'Older sister|char_anya|A33'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharUncleMisha(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Uncle of|chars_pc|PC'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharDimka(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Best friend|char_igor|A4'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharIgor(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Best friend|char_dimka|A1'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMarcus(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Best friend and host family|char_andrey|A147'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAndrey(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Best friend|char_marcus|A146'
  // TODO-QSP: $_hc_rel[1] = 'Girlfriend|char_stasya|A139'
  // TODO-QSP: $_hc_rel[2] = 'Aunt|char_miss_aleksand|A136'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMefodiy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharKatja(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Twin sister|char_vicky|A15'
  // TODO-QSP: $_hc_rel[1] = 'Brother|char_roma|A56'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVicky(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Twin sister|char_katja|A14'
  // TODO-QSP: $_hc_rel[1] = 'Brother|char_roma|A56'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharIrina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharBella(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharStasya(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Boyfriend|char_andrey|A147'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLizaveta(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharSonia(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Step-brother|char_shulyov|A127'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharIvan(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Training partner|char_fedor|A5'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharFedor(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Training partner|char_ivan|A3'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharSvyatoslav(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLazar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharErast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVanya(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLariska(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Best friend|char_christina|A18'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharChristina(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Friend|char_lariska|A13'
  // TODO-QSP: $_hc_rel[1] = 'Friend|char_lina|A19'
  // TODO-QSP: $_hc_rel[2] = 'Older brother|char_silvestr|A248'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLina(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Friend|char_christina|A18'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAlbina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharRonnie(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharArtem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Close friend|char_petka|A6'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharPetka(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Close friend|char_artem|A2'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharEvgeny(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharFeofan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharGerasim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharJulia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharNatashaS(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharZina(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Brother|char_petia|A159'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharNatalia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVitek(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Twin sister|char_lena|A20'
  // TODO-QSP: $_hc_rel[1] = 'Best friend|char_dan|A10'
  // TODO-QSP: $_hc_rel[2] = 'Best friend|char_shulga|A11'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharDan(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Best friend|char_vitek|A9'
  // TODO-QSP: $_hc_rel[1] = 'Best friend|char_shulga|A11'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharShulga(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Best friend|char_vitek|A9'
  // TODO-QSP: $_hc_rel[1] = 'Best friend|char_dan|A10'
  // TODO-QSP: $_hc_rel[2] = 'Father|char_sergey|A112'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharRadomir(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Bandmate (guitarist)|char_anushka|A144'
  // TODO-QSP: $_hc_rel[1] = 'Bandmate (drummer)|char_arkadi|A156'
  // TODO-QSP: $_hc_rel[2] = 'Bandmate (bassist)|char_valentin|A158'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLavrenti(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharArkadi(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Bandmate (lead)|char_radomir|A154'
  // TODO-QSP: $_hc_rel[1] = 'Bandmate|char_anushka|A144'
  // TODO-QSP: $_hc_rel[2] = 'Bandmate|char_valentin|A158'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharRomanY(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Associate|char_niko|A189'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharValentin(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Bandmate (lead)|char_radomir|A154'
  // TODO-QSP: $_hc_rel[1] = 'Bandmate|char_anushka|A144'
  // TODO-QSP: $_hc_rel[2] = 'Bandmate|char_arkadi|A156'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharNiko(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Associate|char_roman_y|A157'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLena(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Twin brother|char_vitek|A9'
  // TODO-QSP: $_hc_rel[1] = 'Best friend|char_lera|A21'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLera(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Father|char_anatoly|A26'
  // TODO-QSP: $_hc_rel[1] = 'Mother|char_vera|A27'
  // TODO-QSP: $_hc_rel[2] = 'Cousin|char_lesco|A7'
  // TODO-QSP: $_hc_rel[3] = 'Best friend|char_lena|A20'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharPauline(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAlyona(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAnushka(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Bandmate (lead)|char_radomir|A154'
  // TODO-QSP: $_hc_rel[1] = 'Bandmate|char_arkadi|A156'
  // TODO-QSP: $_hc_rel[2] = 'Bandmate|char_valentin|A158'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharKatyusha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLesco(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Uncle|char_anatoly|A26'
  // TODO-QSP: $_hc_rel[1] = 'Cousin|char_lera|A21'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharPetia(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Sister|char_zina|A142'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharCoach(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVasilyev(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharIvanov(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharYenotin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharPavlovich(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharKuznetsovT(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMatveev(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMissVolkov(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMissSokoloff(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMissAleksand(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Nephew|char_andrey|A147'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMissBraakman(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMissOrlov(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAnatoly(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Married to|char_vera|A27'
  // TODO-QSP: $_hc_rel[1] = 'Daughter|char_lera|A21'
  // TODO-QSP: $_hc_rel[2] = 'Nephew|char_lesco|A7'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVera(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Married to|char_anatoly|A26'
  // TODO-QSP: $_hc_rel[1] = 'Daughter|char_lera|A21'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharOlu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Nephew|char_djibril|A82'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharRoma(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Sister|char_katja|A14'
  // TODO-QSP: $_hc_rel[1] = 'Sister|char_vicky|A15'
  // TODO-QSP: $_hc_rel[2] = 'Girlfriend|char_anya|A33'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharRex(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Friend|char_anya|A33'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharArthur(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMarisha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharSergey(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Son|char_shulga|A11'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVadim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharShulyov(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Step-sister|char_sonia|A25'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharPavlin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMira(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Father|char_afanasiy|A64'
  // TODO-QSP: $_hc_rel[1] = 'Brother|char_vitaliy|A65'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharKolyamba(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVasyan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMitka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAfanasiy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Daughter|char_mira|A60'
  // TODO-QSP: $_hc_rel[1] = 'Son|char_vitaliy|A65'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVitaliy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Sister|char_mira|A60'
  // TODO-QSP: $_hc_rel[1] = 'Father|char_afanasiy|A64'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAndreiG(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharIgorG(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharSergeiG(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharJora(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharNicholas(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Sister|char_tanya|A218'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharIlyushkin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharTryndin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharEugene(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharTatiana(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharNastja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharSavva(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharTanya(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Brother|char_nicholas|A52'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharKat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'University roommate|char_sofia_u|A260'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharGrigory(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Farmhand on land of|char_grandma|A31'
  // TODO-QSP: $_hc_rel[1] = 'Farmhand on land of|char_grandpa|A32'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAlex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharAmelia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharDjibril(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Uncle|char_olu|A55'
  // TODO-QSP: $_hc_rel[1] = 'Friend|char_haruna|A245'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharGoshi(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharKendra(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharVikaU(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharErmias(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharHaruna(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Friend|char_djibril|A82'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharLilly(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharSilvestr(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'Younger sister|char_christina|A18'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharSofiaU(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $_hc_rel[0] = 'University roommate|char_kat|A219'
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharProfMarinova(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharProfKudelina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharProfBorisov(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharMaya(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharTanis(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharGasha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharRudolf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharBronya(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help_characters', 'build');
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'build':
      enterBuild(s, scene);
      break;
    case 'loc_text':
      enterLocText(s, scene);
      break;
    case 'chars_pc':
      enterCharsPc(s, scene);
      break;
    case 'char_dad':
      enterCharDad(s, scene);
      break;
    case 'char_mom':
      enterCharMom(s, scene);
      break;
    case 'char_luda':
      enterCharLuda(s, scene);
      break;
    case 'char_grandma':
      enterCharGrandma(s, scene);
      break;
    case 'char_grandpa':
      enterCharGrandpa(s, scene);
      break;
    case 'char_anya':
      enterCharAnya(s, scene);
      break;
    case 'char_kolka':
      enterCharKolka(s, scene);
      break;
    case 'char_uncle_misha':
      enterCharUncleMisha(s, scene);
      break;
    case 'char_dimka':
      enterCharDimka(s, scene);
      break;
    case 'char_igor':
      enterCharIgor(s, scene);
      break;
    case 'char_marcus':
      enterCharMarcus(s, scene);
      break;
    case 'char_andrey':
      enterCharAndrey(s, scene);
      break;
    case 'char_mefodiy':
      enterCharMefodiy(s, scene);
      break;
    case 'char_katja':
      enterCharKatja(s, scene);
      break;
    case 'char_vicky':
      enterCharVicky(s, scene);
      break;
    case 'char_irina':
      enterCharIrina(s, scene);
      break;
    case 'char_bella':
      enterCharBella(s, scene);
      break;
    case 'char_stasya':
      enterCharStasya(s, scene);
      break;
    case 'char_lizaveta':
      enterCharLizaveta(s, scene);
      break;
    case 'char_sonia':
      enterCharSonia(s, scene);
      break;
    case 'char_ivan':
      enterCharIvan(s, scene);
      break;
    case 'char_fedor':
      enterCharFedor(s, scene);
      break;
    case 'char_svyatoslav':
      enterCharSvyatoslav(s, scene);
      break;
    case 'char_lazar':
      enterCharLazar(s, scene);
      break;
    case 'char_erast':
      enterCharErast(s, scene);
      break;
    case 'char_vanya':
      enterCharVanya(s, scene);
      break;
    case 'char_lariska':
      enterCharLariska(s, scene);
      break;
    case 'char_christina':
      enterCharChristina(s, scene);
      break;
    case 'char_lina':
      enterCharLina(s, scene);
      break;
    case 'char_albina':
      enterCharAlbina(s, scene);
      break;
    case 'char_ronnie':
      enterCharRonnie(s, scene);
      break;
    case 'char_artem':
      enterCharArtem(s, scene);
      break;
    case 'char_petka':
      enterCharPetka(s, scene);
      break;
    case 'char_evgeny':
      enterCharEvgeny(s, scene);
      break;
    case 'char_feofan':
      enterCharFeofan(s, scene);
      break;
    case 'char_gerasim':
      enterCharGerasim(s, scene);
      break;
    case 'char_julia':
      enterCharJulia(s, scene);
      break;
    case 'char_natasha_s':
      enterCharNatashaS(s, scene);
      break;
    case 'char_zina':
      enterCharZina(s, scene);
      break;
    case 'char_natalia':
      enterCharNatalia(s, scene);
      break;
    case 'char_vitek':
      enterCharVitek(s, scene);
      break;
    case 'char_dan':
      enterCharDan(s, scene);
      break;
    case 'char_shulga':
      enterCharShulga(s, scene);
      break;
    case 'char_radomir':
      enterCharRadomir(s, scene);
      break;
    case 'char_lavrenti':
      enterCharLavrenti(s, scene);
      break;
    case 'char_arkadi':
      enterCharArkadi(s, scene);
      break;
    case 'char_roman_y':
      enterCharRomanY(s, scene);
      break;
    case 'char_valentin':
      enterCharValentin(s, scene);
      break;
    case 'char_niko':
      enterCharNiko(s, scene);
      break;
    case 'char_lena':
      enterCharLena(s, scene);
      break;
    case 'char_lera':
      enterCharLera(s, scene);
      break;
    case 'char_pauline':
      enterCharPauline(s, scene);
      break;
    case 'char_alyona':
      enterCharAlyona(s, scene);
      break;
    case 'char_anushka':
      enterCharAnushka(s, scene);
      break;
    case 'char_katyusha':
      enterCharKatyusha(s, scene);
      break;
    case 'char_lesco':
      enterCharLesco(s, scene);
      break;
    case 'char_petia':
      enterCharPetia(s, scene);
      break;
    case 'char_coach':
      enterCharCoach(s, scene);
      break;
    case 'char_vasilyev':
      enterCharVasilyev(s, scene);
      break;
    case 'char_ivanov':
      enterCharIvanov(s, scene);
      break;
    case 'char_yenotin':
      enterCharYenotin(s, scene);
      break;
    case 'char_pavlovich':
      enterCharPavlovich(s, scene);
      break;
    case 'char_kuznetsov_t':
      enterCharKuznetsovT(s, scene);
      break;
    case 'char_matveev':
      enterCharMatveev(s, scene);
      break;
    case 'char_miss_volkov':
      enterCharMissVolkov(s, scene);
      break;
    case 'char_miss_sokoloff':
      enterCharMissSokoloff(s, scene);
      break;
    case 'char_miss_aleksand':
      enterCharMissAleksand(s, scene);
      break;
    case 'char_miss_braakman':
      enterCharMissBraakman(s, scene);
      break;
    case 'char_miss_orlov':
      enterCharMissOrlov(s, scene);
      break;
    case 'char_anatoly':
      enterCharAnatoly(s, scene);
      break;
    case 'char_vera':
      enterCharVera(s, scene);
      break;
    case 'char_olu':
      enterCharOlu(s, scene);
      break;
    case 'char_roma':
      enterCharRoma(s, scene);
      break;
    case 'char_rex':
      enterCharRex(s, scene);
      break;
    case 'char_arthur':
      enterCharArthur(s, scene);
      break;
    case 'char_marisha':
      enterCharMarisha(s, scene);
      break;
    case 'char_sergey':
      enterCharSergey(s, scene);
      break;
    case 'char_vadim':
      enterCharVadim(s, scene);
      break;
    case 'char_shulyov':
      enterCharShulyov(s, scene);
      break;
    case 'char_pavlin':
      enterCharPavlin(s, scene);
      break;
    case 'char_mira':
      enterCharMira(s, scene);
      break;
    case 'char_kolyamba':
      enterCharKolyamba(s, scene);
      break;
    case 'char_vasyan':
      enterCharVasyan(s, scene);
      break;
    case 'char_mitka':
      enterCharMitka(s, scene);
      break;
    case 'char_afanasiy':
      enterCharAfanasiy(s, scene);
      break;
    case 'char_vitaliy':
      enterCharVitaliy(s, scene);
      break;
    case 'char_andrei_g':
      enterCharAndreiG(s, scene);
      break;
    case 'char_igor_g':
      enterCharIgorG(s, scene);
      break;
    case 'char_sergei_g':
      enterCharSergeiG(s, scene);
      break;
    case 'char_jora':
      enterCharJora(s, scene);
      break;
    case 'char_nicholas':
      enterCharNicholas(s, scene);
      break;
    case 'char_ilyushkin':
      enterCharIlyushkin(s, scene);
      break;
    case 'char_tryndin':
      enterCharTryndin(s, scene);
      break;
    case 'char_eugene':
      enterCharEugene(s, scene);
      break;
    case 'char_tatiana':
      enterCharTatiana(s, scene);
      break;
    case 'char_nastja':
      enterCharNastja(s, scene);
      break;
    case 'char_savva':
      enterCharSavva(s, scene);
      break;
    case 'char_tanya':
      enterCharTanya(s, scene);
      break;
    case 'char_kat':
      enterCharKat(s, scene);
      break;
    case 'char_grigory':
      enterCharGrigory(s, scene);
      break;
    case 'char_alex':
      enterCharAlex(s, scene);
      break;
    case 'char_amelia':
      enterCharAmelia(s, scene);
      break;
    case 'char_djibril':
      enterCharDjibril(s, scene);
      break;
    case 'char_goshi':
      enterCharGoshi(s, scene);
      break;
    case 'char_kendra':
      enterCharKendra(s, scene);
      break;
    case 'char_vika_u':
      enterCharVikaU(s, scene);
      break;
    case 'char_ermias':
      enterCharErmias(s, scene);
      break;
    case 'char_haruna':
      enterCharHaruna(s, scene);
      break;
    case 'char_lilly':
      enterCharLilly(s, scene);
      break;
    case 'char_silvestr':
      enterCharSilvestr(s, scene);
      break;
    case 'char_sofia_u':
      enterCharSofiaU(s, scene);
      break;
    case 'char_prof_marinova':
      enterCharProfMarinova(s, scene);
      break;
    case 'char_prof_kudelina':
      enterCharProfKudelina(s, scene);
      break;
    case 'char_prof_borisov':
      enterCharProfBorisov(s, scene);
      break;
    case 'char_maya':
      enterCharMaya(s, scene);
      break;
    case 'char_tanis':
      enterCharTanis(s, scene);
      break;
    case 'char_gasha':
      enterCharGasha(s, scene);
      break;
    case 'char_rudolf':
      enterCharRudolf(s, scene);
      break;
    case 'char_bronya':
      enterCharBronya(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const help_characters: LocationDef = {
  name: 'help_characters',
  region: 'other',
  enter: enter,
};
