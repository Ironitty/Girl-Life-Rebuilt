import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBuild(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_fn = (((s as any).npc_firstname ?? 0)?.[String((s as any)._hc_npcid ?? 0)] ?? 0);
  (s as any)._hc_nn = (((s as any).npc_nickname ?? 0)?.[String((s as any)._hc_npcid ?? 0)] ?? 0);
  (s as any)._hc_ln = (((s as any).npc_lastname ?? 0)?.[String((s as any)._hc_npcid ?? 0)] ?? 0);
  (s as any)._hc_un = (((s as any).npc_usedname ?? 0)?.[String((s as any)._hc_npcid ?? 0)] ?? 0);
  if (((s as any)._hc_un ?? 0) !== '') {
    (s as any).help_page_title = ((s as any)._hc_un ?? 0);
  } else {
    if (((s as any)._hc_fn ?? 0) !== '') {
      (s as any).help_page_title = ((s as any)._hc_fn ?? 0);
    } else {
      (s as any).help_page_title = '(Unknown)';
    }
  }
  (s as any)._hc_full = ((s as any)._hc_fn ?? 0);
  if (((s as any)._hc_nn ?? 0) !== ''  &&  ((s as any)._hc_nn ?? 0) !== ((s as any)._hc_fn ?? 0)) {
    (s as any)._hc_full = ((s as any)._hc_full ?? 0) + (' \'' + ((s as any)._hc_nn ?? 0) + '\'');
  }
  if (((s as any)._hc_ln ?? 0) !== '') {
    (s as any)._hc_full = ((s as any)._hc_full ?? 0) + (' ' + ((s as any)._hc_ln ?? 0));
  }
  if (((s as any).npc_dob ?? 0)?.[String((s as any)._hc_npcid ?? 0)] > 0) {
    (s as any)._hc_birthday = qspFunc(s, 'shortgs', 'convert_dob', ((s as any)._hc_npcid ?? 0));
  } else {
    (s as any)._hc_birthday = 'Unknown';
  }
  if (((s as any)._hc_residence ?? 0) === '') {
    (s as any)._hc_residence = 'Unknown';
  }
  (s as any)._hc_curloc = '';
  if (((s as any)._hc_npcid ?? 0) === 'A28') {
    (s as any)._hc_locvar = 'Stepdad';
  } else {
    if (((s as any)._hc_npcid ?? 0) === 'A29') {
      (s as any)._hc_locvar = 'Mother';
    } else {
      if (((s as any)._hc_npcid ?? 0) === 'A33') {
        (s as any)._hc_locvar = 'Anya';
      } else {
        if (((s as any)._hc_npcid ?? 0) === 'A34') {
          (s as any)._hc_locvar = 'Kolka';
        } else {
          if (((s as any)._hc_npcid ?? 0) === 'A4') {
            (s as any)._hc_locvar = 'igor';
          } else {
            if (((s as any)._hc_npcid ?? 0) === 'A14') {
              (s as any)._hc_locvar = 'katja';
            } else {
              if (((s as any)._hc_npcid ?? 0) === 'A15') {
                (s as any)._hc_locvar = 'Vicky';
              } else {
                if (((s as any)._hc_npcid ?? 0) === 'A13') {
                  (s as any)._hc_locvar = 'Lariska';
                } else {
                  if (((s as any)._hc_npcid ?? 0) === 'A18') {
                    (s as any)._hc_locvar = 'Christina';
                  } else {
                    if (((s as any)._hc_npcid ?? 0) === 'A23') {
                      (s as any)._hc_locvar = 'A23';
                    } else {
                      if (((s as any)._hc_npcid ?? 0) === 'A248') {
                        (s as any)._hc_locvar = 'Silvestr';
                      } else {
                        (s as any)._hc_locvar = '';
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLocText(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any)._hc_curloc = ((s as any).result ?? 0);
  }
  (s as any)._hc_relhtml = '';
  (s as any)._hc_i = 0;
  while (true) {
    if (((s as any)._hc_rel ?? 0)?.[String((s as any)._hc_i ?? 0)] !== '') {
      (s as any)._hc_p1 = ((String((((s as any)._hc_rel ?? 0)?.[String((s as any)._hc_i ?? 0)] ?? 0)).indexOf(String('|'))) + 1);
      (s as any)._hc_reltype = (String((((s as any)._hc_rel ?? 0)?.[String((s as any)._hc_i ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(((s as any)._hc_p1 ?? 0) - 1)));
      (s as any)._hc_rest = (String((((s as any)._hc_rel ?? 0)?.[String((s as any)._hc_i ?? 0)] ?? 0)).slice((((s as any)._hc_p1 ?? 0) + 1)-1));
      (s as any)._hc_p2 = ((String(((s as any)._hc_rest ?? 0)).indexOf(String('|'))) + 1);
      (s as any)._hc_relkey = (String(((s as any)._hc_rest ?? 0)).slice((1)-1, ((1)-1)+(((s as any)._hc_p2 ?? 0) - 1)));
      (s as any)._hc_relnpc = (String(((s as any)._hc_rest ?? 0)).slice((((s as any)._hc_p2 ?? 0) + 1)-1));
      if (((s as any)._hc_relnpc ?? 0) === 'PC') {
        (s as any)._hc_relname = ((s as any).pcs_firstname ?? 0);
      } else {
        if (((s as any).npc_usedname ?? 0)?.[String((s as any)._hc_relnpc ?? 0)] !== '') {
          (s as any)._hc_relname = (((s as any).npc_usedname ?? 0)?.[String((s as any)._hc_relnpc ?? 0)] ?? 0);
        } else {
          (s as any)._hc_relname = (((s as any).npc_firstname ?? 0)?.[String((s as any)._hc_relnpc ?? 0)] ?? 0);
        }
      }
      (s as any)._hc_href = 'exec: gs ' + '\'' + 'help_characters' + '\'' + ', ' + '\'' + ((s as any)._hc_relkey ?? 0) + '\'';
      (s as any)._hc_relhtml = ((s as any)._hc_relhtml ?? 0) + ('<li>' + ((s as any)._hc_reltype ?? 0) + ': <a href="' + ((s as any)._hc_href ?? 0) + '">' + ((s as any)._hc_relname ?? 0) + '</a></li>');
      (s as any)._hc_i = ((s as any)._hc_i ?? 0) + (1);
      break;
    }
    (s as any)._hc_info = '<b style="font-size:1.05em">' + ((s as any)._hc_full ?? 0) + '</b>';
    (s as any)._hc_info = ((s as any)._hc_info ?? 0) + ('<table style="margin:4px 0 6px 0;border-collapse:collapse">');
    (s as any)._hc_info = ((s as any)._hc_info ?? 0) + ('<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Birthday</b></td><td>' + ((s as any)._hc_birthday ?? 0) + '</td></tr>');
    (s as any)._hc_info = ((s as any)._hc_info ?? 0) + ('<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Residence</b></td><td>' + ((s as any)._hc_residence ?? 0) + '</td></tr>');
    if (((s as any)._hc_curloc ?? 0) !== '') {
      (s as any)._hc_info = ((s as any)._hc_info ?? 0) + ('<tr><td style="padding:1px 10px 1px 0;opacity:0.65"><b>Location</b></td><td>' + ((s as any)._hc_curloc ?? 0) + '</td></tr>');
    }
    (s as any)._hc_info = ((s as any)._hc_info ?? 0) + ('</table>');
    if (((s as any)._hc_relhtml ?? 0) !== '') {
      (s as any)._hc_info = ((s as any)._hc_info ?? 0) + ('<p style="margin:6px 0 2px 0"><b>Relations</b></p>');
      (s as any)._hc_info = ((s as any)._hc_info ?? 0) + ('<ul style="margin:2px 0 4px 0">' + ((s as any)._hc_relhtml ?? 0) + '</ul>');
    }
    if (((s as any)._hc_bio ?? 0) === '') {
      if (qspFunc(s, 'npc_notes', ((s as any)._hc_npcid ?? 0)) !== '') {
        (s as any)._hc_bio = '<p>' + qspFunc(s, 'npc_notes', ((s as any)._hc_npcid ?? 0)) + '</p>';
      }
    }
    (s as any).help_page_content = '<table cellspacing="0" cellpadding="0" style="margin:4px 0 8px 0;width:100%"><tr>';
    (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<td style="width:1%;white-space:nowrap;vertical-align:top;padding-right:14px">');
    (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<img src="' + ((s as any)._hc_portrait ?? 0) + '" style="height:200px;width:auto;max-width:180px">');
    (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('</td>');
    (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<td style="vertical-align:top">' + ((s as any)._hc_info ?? 0) + '</td>');
    (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('</tr><tr>');
    (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<td colspan="2" style="padding-top:10px;border-top:1px solid rgba(128,128,128,0.25)">');
    (s as any).help_page_content = ((s as any).help_page_content ?? 0) + (((s as any)._hc_bio ?? 0));
    (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('</td></tr></table>');
    (s as any)._hc_npcid = undefined;
    (s as any)._hc_portrait = undefined;
    (s as any)._hc_bio = undefined;
    (s as any)._hc_rel = undefined;
    (s as any)._hc_fn = undefined;
    (s as any)._hc_nn = undefined;
    (s as any)._hc_ln = undefined;
    (s as any)._hc_un = undefined;
    (s as any)._hc_full = undefined;
    (s as any)._hc_birthday = undefined;
    (s as any)._hc_residence = undefined;
    (s as any)._hc_locvar = undefined;
    (s as any)._hc_curloc = undefined;
    (s as any)._hc_info = undefined;
    (s as any)._hc_relhtml = undefined;
    (s as any)._hc_i = undefined;
    (s as any)._hc_p1 = undefined;
    (s as any)._hc_p2 = undefined;
    (s as any)._hc_reltype = undefined;
    (s as any)._hc_rest = undefined;
    (s as any)._hc_relkey = undefined;
    (s as any)._hc_relnpc = undefined;
    (s as any)._hc_relname = undefined;
    (s as any)._hc_href = undefined;
    qspCall(s, 'help', 'render', ((s as any)._hc_key ?? 0));
    (s as any)._hc_key = undefined;
    return;
  }
  scene.build();
}

function enterLocText(s: GameState, scene: SceneBuilder): void {
  if (((s as any)._hc_locvar ?? 0) === 'Stepdad'  ||  ((s as any)._hc_locvar ?? 0) === 'Mother'  ||  ((s as any)._hc_locvar ?? 0) === 'Anya'  ||  ((s as any)._hc_locvar ?? 0) === 'Kolka') {
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
      (s as any).result = 'In the village (Gad)';
      return;
    }
  }
  if (((s as any)._hc_locvar ?? 0) === 'Anya'  &&  ((s as any).locat ?? 0)?.['Anya_Gad'] === 1) {
    (s as any).result = 'In the village (Gad)';
    return;
  }
  (s as any)._hc_lv = (((s as any).locat ?? 0)?.[String((s as any)._hc_locvar ?? 0)] ?? 0);
  if (((s as any)._hc_locvar ?? 0) === 'Stepdad') {
    if (((s as any)._hc_lv ?? 0) === 1) {
      (s as any).result = 'Asleep';
    } else {
      if (((s as any)._hc_lv ?? 0) === 2) {
        (s as any).result = 'Home - getting ready';
      } else {
        if (((s as any)._hc_lv ?? 0) === 3) {
          (s as any).result = 'Home - breakfast';
        } else {
          if (((s as any)._hc_lv ?? 0) === 4) {
            (s as any).result = 'Home - kitchen';
          } else {
            if (((s as any)._hc_lv ?? 0) === 5) {
              (s as any).result = 'Home - getting dressed';
            } else {
              if (((s as any)._hc_lv ?? 0) === 6) {
                (s as any).result = 'At work (driving)';
              } else {
                if (((s as any)._hc_lv ?? 0) === 7) {
                  (s as any).result = 'Home - setting the table';
                } else {
                  if (((s as any)._hc_lv ?? 0) === 8) {
                    (s as any).result = 'Home - dinner';
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 9) {
                      (s as any).result = 'In the garage';
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 10) {
                        (s as any).result = 'Home - living room';
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 11) {
                          (s as any).result = 'Home - shower';
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 12) {
                            (s as any).result = 'Away';
                          } else {
                            (s as any).result = 'Unknown';
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
        (s as any).result = 'Asleep';
      } else {
        if (((s as any)._hc_lv ?? 0) === 2) {
          (s as any).result = 'Home - shower';
        } else {
          if (((s as any)._hc_lv ?? 0) === 3) {
            (s as any).result = 'Home - getting dressed';
          } else {
            if (((s as any)._hc_lv ?? 0) === 4) {
              (s as any).result = 'Home - kitchen';
            } else {
              if (((s as any)._hc_lv ?? 0) === 7) {
                (s as any).result = 'At the supermarket';
              } else {
                if (((s as any)._hc_lv ?? 0) === 8) {
                  (s as any).result = 'Walking home';
                } else {
                  if (((s as any)._hc_lv ?? 0) === 9) {
                    (s as any).result = 'At work (cafe)';
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 10) {
                      (s as any).result = 'Walking home from work';
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 11) {
                        (s as any).result = 'Home - making dinner';
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 12) {
                          (s as any).result = 'Home - dinner';
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 13) {
                            (s as any).result = 'Home - cleaning up';
                          } else {
                            if (((s as any)._hc_lv ?? 0) === 14) {
                              (s as any).result = 'Traveling';
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 15) {
                                (s as any).result = 'Shopping';
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 16) {
                                  (s as any).result = 'At church';
                                } else {
                                  if (((s as any)._hc_lv ?? 0) === 17) {
                                    (s as any).result = 'Out (evening)';
                                  } else {
                                    if (((s as any)._hc_lv ?? 0) === 18) {
                                      (s as any).result = 'At church (evening mass)';
                                    } else {
                                      if (((s as any)._hc_lv ?? 0) === 19) {
                                        (s as any).result = 'Home - watching TV';
                                      } else {
                                        if (((s as any)._hc_lv ?? 0) === 20) {
                                          (s as any).result = 'Visiting Luda';
                                        } else {
                                          if (((s as any)._hc_lv ?? 0) === 21) {
                                            (s as any).result = 'At the salon';
                                          } else {
                                            if (((s as any)._hc_lv ?? 0) === 23  ||  ((s as any)._hc_lv ?? 0) === 24  ||  ((s as any)._hc_lv ?? 0) === 25  ||  ((s as any)._hc_lv ?? 0) === 26) {
                                              (s as any).result = 'Home - cleaning';
                                            } else {
                                              (s as any).result = 'Unknown';
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
          (s as any).result = 'Asleep';
        } else {
          if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 4  ||  ((s as any)._hc_lv ?? 0) === 5) {
            (s as any).result = 'Home';
          } else {
            if (((s as any)._hc_lv ?? 0) === 7) {
              (s as any).result = 'At work';
            } else {
              if (((s as any)._hc_lv ?? 0) === 8  ||  ((s as any)._hc_lv ?? 0) === 9) {
                (s as any).result = 'Commuting';
              } else {
                if (((s as any)._hc_lv ?? 0) === 10  ||  ((s as any)._hc_lv ?? 0) === 21) {
                  (s as any).result = 'At community center';
                } else {
                  if (((s as any)._hc_lv ?? 0) === 11) {
                    (s as any).result = 'Home - in room';
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 12) {
                      (s as any).result = 'Home - dinner';
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 13) {
                        (s as any).result = 'Out with friends';
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 14) {
                          (s as any).result = 'Out with Roma';
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 15  ||  ((s as any)._hc_lv ?? 0) === 16  ||  ((s as any)._hc_lv ?? 0) === 23) {
                            (s as any).result = 'Home';
                          } else {
                            if (((s as any)._hc_lv ?? 0) === 17) {
                              (s as any).result = 'At the beach';
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 24) {
                                (s as any).result = 'At a party';
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 26) {
                                  (s as any).result = 'Returning from party';
                                } else {
                                  (s as any).result = 'Unknown';
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
            (s as any).result = 'Asleep';
          } else {
            if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 7  ||  ((s as any)._hc_lv ?? 0) === 8  ||  ((s as any)._hc_lv ?? 0) === 10  ||  ((s as any)._hc_lv ?? 0) === 11) {
              (s as any).result = 'Home';
            } else {
              if (((s as any)._hc_lv ?? 0) === 4) {
                (s as any).result = 'Walking to school';
              } else {
                if (((s as any)._hc_lv ?? 0) === 5) {
                  (s as any).result = 'At school';
                } else {
                  if (((s as any)._hc_lv ?? 0) === 6) {
                    (s as any).result = 'Track field';
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 9) {
                      (s as any).result = 'Out with friends';
                    } else {
                      (s as any).result = 'Unknown';
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any)._hc_locvar ?? 0) === 'igor') {
            if (((s as any)._hc_lv ?? 0) === 1) {
              (s as any).result = 'Asleep';
            } else {
              if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 7) {
                (s as any).result = 'Home';
              } else {
                if (((s as any)._hc_lv ?? 0) === 4) {
                  (s as any).result = 'Walking to school';
                } else {
                  if (((s as any)._hc_lv ?? 0) === 5) {
                    (s as any).result = 'At school';
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 6) {
                      (s as any).result = 'Near school';
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 8) {
                        (s as any).result = 'At community center disco';
                      } else {
                        (s as any).result = 'Unknown';
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any)._hc_locvar ?? 0) === 'katja') {
              if (((s as any)._hc_lv ?? 0) === 1  ||  ((s as any)._hc_lv ?? 0) === 20) {
                (s as any).result = 'Asleep';
              } else {
                if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 9) {
                  (s as any).result = 'Home (Meynold house)';
                } else {
                  if (((s as any)._hc_lv ?? 0) === 4  ||  ((s as any)._hc_lv ?? 0) === 7) {
                    (s as any).result = 'Walking to school';
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 5) {
                      (s as any).result = 'At school';
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 6) {
                        (s as any).result = 'Near school';
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 8) {
                          (s as any).result = 'At community center disco';
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 10) {
                            (s as any).result = 'At the lake beach';
                          } else {
                            if (((s as any)._hc_lv ?? 0) >= 21  &&  ((s as any)._hc_lv ?? 0) <= 35) {
                              (s as any).result = 'At university (dorm / campus)';
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 36) {
                                (s as any).result = 'Out - restaurant';
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 37) {
                                  (s as any).result = 'Out - party / bar / cafe';
                                } else {
                                  (s as any).result = 'Unknown';
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
                  (s as any).result = 'Asleep';
                } else {
                  if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3) {
                    (s as any).result = 'Home (Meynold house)';
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 4) {
                      (s as any).result = 'Walking to school';
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 5) {
                        (s as any).result = 'At school';
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 6) {
                          (s as any).result = 'Cheerleader practice';
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 7) {
                            (s as any).result = 'Game night';
                          } else {
                            (s as any).result = 'Unknown';
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                if (((s as any)._hc_locvar ?? 0) === 'Lariska') {
                  if (((s as any)._hc_lv ?? 0) === 1) {
                    (s as any).result = 'Asleep';
                  } else {
                    if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3) {
                      (s as any).result = 'Home';
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 4) {
                        (s as any).result = 'Walking to school';
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 5) {
                          (s as any).result = 'At school';
                        } else {
                          (s as any).result = 'Unknown';
                        }
                      }
                    }
                  }
                } else {
                  if (((s as any)._hc_locvar ?? 0) === 'Christina') {
                    if (((s as any)._hc_lv ?? 0) === 1) {
                      (s as any).result = 'Asleep';
                    } else {
                      if (((s as any)._hc_lv ?? 0) === 2  ||  ((s as any)._hc_lv ?? 0) === 3  ||  ((s as any)._hc_lv ?? 0) === 11  ||  ((s as any)._hc_lv ?? 0) === 12  ||  ((s as any)._hc_lv ?? 0) === 13  ||  ((s as any)._hc_lv ?? 0) === 14  ||  ((s as any)._hc_lv ?? 0) === 22) {
                        (s as any).result = 'Home (Zvereva house)';
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 4) {
                          (s as any).result = 'Walking to school';
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 5) {
                            (s as any).result = 'At school';
                          } else {
                            if (((s as any)._hc_lv ?? 0) === 6) {
                              (s as any).result = 'Cheerleader practice';
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 7) {
                                (s as any).result = 'Game night';
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 9) {
                                  (s as any).result = 'Jogging';
                                } else {
                                  (s as any).result = 'Unknown';
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
                        (s as any).result = 'Asleep';
                      } else {
                        if (((s as any)._hc_lv ?? 0) === 2) {
                          (s as any).result = 'At school';
                        } else {
                          if (((s as any)._hc_lv ?? 0) === 3) {
                            (s as any).result = 'At Starlets';
                          } else {
                            if (((s as any)._hc_lv ?? 0) === 4) {
                              (s as any).result = 'Cheerleading practice';
                            } else {
                              if (((s as any)._hc_lv ?? 0) === 5) {
                                (s as any).result = 'At community center disco';
                              } else {
                                if (((s as any)._hc_lv ?? 0) === 6) {
                                  (s as any).result = 'At the lake';
                                } else {
                                  if (((s as any)._hc_lv ?? 0) === 7) {
                                    (s as any).result = 'In the city';
                                  } else {
                                    if (((s as any)._hc_lv ?? 0) === 8) {
                                      (s as any).result = 'Jogging';
                                    } else {
                                      if (((s as any)._hc_lv ?? 0) >= 10  &&  ((s as any)._hc_lv ?? 0) <= 19) {
                                        (s as any).result = 'At university (dorm / campus)';
                                      } else {
                                        if (((s as any)._hc_lv ?? 0) === 20) {
                                          (s as any).result = 'At the gym';
                                        } else {
                                          if (((s as any)._hc_lv ?? 0) === 21  ||  ((s as any)._hc_lv ?? 0) === 22) {
                                            (s as any).result = 'At work (strip club)';
                                          } else {
                                            if (((s as any)._hc_lv ?? 0) === 35) {
                                              (s as any).result = 'On vacation';
                                            } else {
                                              if (((s as any)._hc_lv ?? 0) === 36) {
                                                (s as any).result = 'At Lazar\'s place';
                                              } else {
                                                if (((s as any)._hc_lv ?? 0) === 37) {
                                                  (s as any).result = 'Walking home from Lazar\'s place';
                                                } else {
                                                  (s as any).result = 'Unknown';
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
                        (s as any).result = 'Unknown';
                      } else {
                        (s as any).result = 'Unknown';
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
  (s as any)._hc_lv = undefined;
  return;
  scene.build();
}

function enterCharsPc(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = ((s as any).pcs_firstname ?? 0) + ' ' + ((s as any).pcs_lastname ?? 0) + ' (You)';
  (s as any).help_page_content = '<p><em>Coming soon.</em></p>';
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  return;
  scene.build();
}

function enterCharDad(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A28';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big28.jpg';
  (s as any)._hc_residence = 'Apt. 7, apartment building, Pavlovsk';
  (s as any)._hc_locvar = 'Stepdad';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Married to|char_mom|A29';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Stepfather of|chars_pc|PC';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Stepfather of|char_anya|A33';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[3] = 'Stepfather of|char_kolka|A34';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMom(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A29';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big29.jpg';
  (s as any)._hc_residence = 'Apt. 7, apartment building, Pavlovsk';
  (s as any)._hc_locvar = 'Mother';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Married to|char_dad|A28';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Mother of|chars_pc|PC';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Mother of|char_anya|A33';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[3] = 'Mother of|char_kolka|A34';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[4] = 'Sister of|char_luda|A30';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[5] = 'Daughter of|char_grandma|A31';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[6] = 'Daughter of|char_grandpa|A32';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLuda(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A30';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big30.jpg';
  (s as any)._hc_residence = 'Apt. 21, apartment building, Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Sister of|char_mom|A29';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Daughter of|char_grandma|A31';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Daughter of|char_grandpa|A32';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[3] = 'Aunt of|chars_pc|PC';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharGrandma(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A31';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big31.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Married to|char_grandpa|A32';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Daughter|char_mom|A29';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Daughter|char_luda|A30';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[3] = 'Long-time farmhand|char_grigory|A221';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharGrandpa(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A32';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big32.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Married to|char_grandma|A31';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Daughter|char_mom|A29';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Daughter|char_luda|A30';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[3] = 'Long-time farmhand|char_grigory|A221';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAnya(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A33';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big33.jpg';
  (s as any)._hc_residence = 'Apt. 7, apartment building, Pavlovsk';
  (s as any)._hc_locvar = 'Anya';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Stepfather|char_dad|A28';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Mother|char_mom|A29';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Younger sister|chars_pc|PC';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[3] = 'Younger brother|char_kolka|A34';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[4] = 'Boyfriend|char_roma|A56';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharKolka(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A34';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big34.jpg';
  (s as any)._hc_residence = 'Apt. 7, apartment building, Pavlovsk';
  (s as any)._hc_locvar = 'Kolka';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Stepfather|char_dad|A28';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Mother|char_mom|A29';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Older sister|chars_pc|PC';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[3] = 'Older sister|char_anya|A33';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharUncleMisha(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A54';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big54.jpg';
  (s as any)._hc_residence = 'Apt. 9, apartment building, Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Uncle of|chars_pc|PC';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharDimka(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A1';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big1.jpg';
  (s as any)._hc_residence = 'Private house, Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Best friend|char_igor|A4';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharIgor(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A4';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big4.jpg';
  (s as any)._hc_residence = 'Private house, Pavlovsk';
  (s as any)._hc_locvar = 'igor';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Best friend|char_dimka|A1';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMarcus(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A146';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big146.jpg';
  (s as any)._hc_residence = 'Staying with the Aleksandrov family, Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Best friend and host family|char_andrey|A147';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAndrey(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A147';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big147.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Best friend|char_marcus|A146';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Girlfriend|char_stasya|A139';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Aunt|char_miss_aleksand|A136';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMefodiy(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A148';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big148.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharKatja(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A14';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big14.jpg';
  (s as any)._hc_residence = 'Meynold house, Pavlovsk';
  (s as any)._hc_locvar = 'katja';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Twin sister|char_vicky|A15';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Brother|char_roma|A56';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVicky(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A15';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big15.jpg';
  (s as any)._hc_residence = 'Meynold house, Pavlovsk';
  (s as any)._hc_locvar = 'Vicky';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Twin sister|char_katja|A14';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Brother|char_roma|A56';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharIrina(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A17';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big17.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharBella(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A22';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big22.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharStasya(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A139';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big139.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Boyfriend|char_andrey|A147';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLizaveta(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A140';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big140.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharSonia(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A25';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big25.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Step-brother|char_shulyov|A127';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharIvan(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A3';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big3.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Training partner|char_fedor|A5';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharFedor(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A5';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big5.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Training partner|char_ivan|A3';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharSvyatoslav(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A8';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big8.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLazar(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A149';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big149.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharErast(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A150';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big150.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVanya(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A165';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big165.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLariska(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A13';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big13.jpg';
  (s as any)._hc_residence = 'Private house, Pavlovsk (richer district)';
  (s as any)._hc_locvar = 'Lariska';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Best friend|char_christina|A18';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharChristina(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A18';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big18.jpg';
  (s as any)._hc_residence = 'Private house, Pavlovsk';
  (s as any)._hc_locvar = 'Christina';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Friend|char_lariska|A13';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Friend|char_lina|A19';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Older brother|char_silvestr|A248';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLina(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A19';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big19.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Friend|char_christina|A18';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAlbina(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A23';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big23.jpg';
  (s as any)._hc_residence = 'Mansion, Pavlovsk';
  (s as any)._hc_locvar = 'A23';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharRonnie(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A141';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big141.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharArtem(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A2';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big2.jpg';
  (s as any)._hc_residence = 'Apt. 2, apartment building, Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Close friend|char_petka|A6';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharPetka(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A6';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big6.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Close friend|char_artem|A2';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharEvgeny(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A151';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big151.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharFeofan(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A152';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big152.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharGerasim(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A153';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big153.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharJulia(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A12';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big12.jpg';
  (s as any)._hc_residence = 'Apt. 15, apartment building, Pavlovsk';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharNatashaS(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A16';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big16.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharZina(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A142';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big142.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Brother|char_petia|A159';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharNatalia(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A240';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big240.jpg';
  (s as any)._hc_residence = 'Apt. 19, apartment building, Pavlovsk';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVitek(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A9';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big9.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Twin sister|char_lena|A20';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Best friend|char_dan|A10';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Best friend|char_shulga|A11';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharDan(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A10';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big10.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Best friend|char_vitek|A9';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Best friend|char_shulga|A11';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharShulga(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A11';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big11.jpg';
  (s as any)._hc_residence = 'Apt. 13, apartment building, Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Best friend|char_vitek|A9';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Best friend|char_dan|A10';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Father|char_sergey|A112';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharRadomir(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A154';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big154.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Bandmate (guitarist)|char_anushka|A144';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Bandmate (drummer)|char_arkadi|A156';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Bandmate (bassist)|char_valentin|A158';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLavrenti(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A155';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big155.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharArkadi(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A156';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big156.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Bandmate (lead)|char_radomir|A154';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Bandmate|char_anushka|A144';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Bandmate|char_valentin|A158';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharRomanY(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A157';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big157.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Associate|char_niko|A189';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharValentin(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A158';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big158.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Bandmate (lead)|char_radomir|A154';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Bandmate|char_anushka|A144';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Bandmate|char_arkadi|A156';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharNiko(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A189';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big189.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Associate|char_roman_y|A157';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLena(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A20';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big20.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Twin brother|char_vitek|A9';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Best friend|char_lera|A21';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLera(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A21';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big21.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Father|char_anatoly|A26';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Mother|char_vera|A27';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Cousin|char_lesco|A7';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[3] = 'Best friend|char_lena|A20';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharPauline(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A24';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big24.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAlyona(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A143';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big143.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAnushka(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A144';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big144.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Bandmate (lead)|char_radomir|A154';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Bandmate|char_arkadi|A156';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Bandmate|char_valentin|A158';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharKatyusha(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A145';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big145.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLesco(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A7';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big7.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Uncle|char_anatoly|A26';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Cousin|char_lera|A21';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharPetia(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A159';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big159.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Sister|char_zina|A142';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharCoach(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A69';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big69.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVasilyev(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A128';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big128.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharIvanov(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A129';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big129.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharYenotin(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A130';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big130.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharPavlovich(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A131';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big131.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharKuznetsovT(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A132';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big132.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMatveev(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A133';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big133.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMissVolkov(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A134';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big134.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMissSokoloff(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A135';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big135.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMissAleksand(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A136';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big136.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Nephew|char_andrey|A147';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMissBraakman(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A137';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big137.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMissOrlov(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A138';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big138.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAnatoly(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A26';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big26.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Married to|char_vera|A27';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Daughter|char_lera|A21';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Nephew|char_lesco|A7';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVera(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A27';
  (s as any)._hc_portrait = 'images/characters/pavlovsk/resident/vera/verasmoke.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Married to|char_anatoly|A26';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Daughter|char_lera|A21';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharOlu(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A55';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big55.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Nephew|char_djibril|A82';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharRoma(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A56';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big56.jpg';
  (s as any)._hc_residence = 'Meynold house, Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Sister|char_katja|A14';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Sister|char_vicky|A15';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[2] = 'Girlfriend|char_anya|A33';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharRex(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A57';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big57.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Friend|char_anya|A33';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharArthur(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A73';
  (s as any)._hc_portrait = 'images/characters/pavlovsk/resident/arthur/artur.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMarisha(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A93';
  (s as any)._hc_portrait = 'images/characters/pavlovsk/resident/marisha/marisha.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharSergey(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A112';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big112.jpg';
  (s as any)._hc_residence = 'Apt. 13, apartment building, Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Son|char_shulga|A11';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVadim(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A113';
  (s as any)._hc_portrait = 'images/characters/pavlovsk/vadim/belyjeep.jpg';
  (s as any)._hc_residence = 'Pavlovsk';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharShulyov(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A127';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big127.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Step-sister|char_sonia|A25';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharPavlin(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A217';
  (s as any)._hc_portrait = 'images/characters/pavlovsk/pavlin/clown1.jpg';
  (s as any)._hc_residence = 'Pavlovsk';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMira(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A60';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big60.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Father|char_afanasiy|A64';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Brother|char_vitaliy|A65';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharKolyamba(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A61';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big61.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVasyan(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A62';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big62.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMitka(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A63';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big63.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAfanasiy(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A64';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big64.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Daughter|char_mira|A60';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Son|char_vitaliy|A65';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVitaliy(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A65';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big65.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Sister|char_mira|A60';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Father|char_afanasiy|A64';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAndreiG(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A172';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big172.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharIgorG(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A173';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big173.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharSergeiG(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A174';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big174.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharJora(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A44';
  (s as any)._hc_portrait = 'images/characters/city/jora/11 1.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharNicholas(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A52';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big52.jpg';
  (s as any)._hc_residence = 'Pavlovsk';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Sister|char_tanya|A218';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharIlyushkin(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A76';
  (s as any)._hc_portrait = 'images/characters/city/ilyushkin/event/kpz.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharTryndin(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A77';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big77.jpg';
  (s as any)._hc_residence = 'Apt. 37, residential area, city';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharEugene(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A89';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big89.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharTatiana(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A176';
  (s as any)._hc_portrait = 'images/characters/city/tatiana/Tatianalesson.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharNastja(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A192';
  (s as any)._hc_portrait = 'images/characters/city/anastasia/1avtostop.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharSavva(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A204';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big204.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharTanya(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A218';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big218.jpg';
  (s as any)._hc_residence = 'City';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Brother|char_nicholas|A52';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharKat(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A219';
  (s as any)._hc_portrait = 'images/characters/city/katja/bedroom.jpg';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'University roommate|char_sofia_u|A260';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharGrigory(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A221';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big221.jpg';
  (s as any)._hc_residence = 'Gadukino village';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Farmhand on land of|char_grandma|A31';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Farmhand on land of|char_grandpa|A32';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAlex(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A241';
  (s as any)._hc_portrait = 'images/characters/city/alexandria/alexandria.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharAmelia(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A267';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big267.jpg';
  (s as any)._hc_residence = 'University dorm, room 702 (city)';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharDjibril(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A82';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big82.jpg';
  (s as any)._hc_residence = 'University dorm, room 810 (city)';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Uncle|char_olu|A55';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[1] = 'Friend|char_haruna|A245';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharGoshi(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A83';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big83.jpg';
  (s as any)._hc_residence = 'University dorm, room 602 (city)';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharKendra(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A84';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big84.jpg';
  (s as any)._hc_residence = 'University dorm, room 801 (city)';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharVikaU(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A220';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big220.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharErmias(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A243';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big243.jpg';
  (s as any)._hc_residence = 'University dorm (city)';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharHaruna(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A245';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big245.jpg';
  (s as any)._hc_residence = 'University dorm, 8th floor (city)';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Friend|char_djibril|A82';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharLilly(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A247';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big247.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharSilvestr(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A248';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big248.jpg';
  (s as any)._hc_residence = 'Pavlovsk';
  (s as any)._hc_locvar = 'Silvestr';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'Younger sister|char_christina|A18';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharSofiaU(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A260';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big260.jpg';
  (s as any)._hc_residence = 'University dorm, room 204 (city)';
  ((s as any)._hc_rel = (s as any)._hc_rel ?? {})[0] = 'University roommate|char_kat|A219';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharProfMarinova(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A269';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big269.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharProfKudelina(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A270';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big270.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharProfBorisov(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A271';
  (s as any)._hc_portrait = 'images/characters/shared/headshots_main/big271.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharMaya(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A274';
  (s as any)._hc_portrait = 'images/characters/pushkin/maya/274_profile.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharTanis(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A276';
  (s as any)._hc_portrait = 'images/characters/ballet/276_profile.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharGasha(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A280';
  (s as any)._hc_portrait = 'images/characters/pushkin/gasha/280_profile.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharRudolf(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A283';
  (s as any)._hc_portrait = 'images/characters/pushkin/rudolph/1292-3.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterCharBronya(s: GameState, scene: SceneBuilder): void {
  (s as any)._hc_key = ((s as any).locArgs?.[0] ?? 0);
  (s as any)._hc_npcid = 'A286';
  (s as any)._hc_portrait = 'images/characters/ballet/286.jpg';
  (s as any)._hc_bio = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
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
