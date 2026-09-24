import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetRandomTemplate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'intro_character_templates', 'get_random_template')]; enterSetTemplate(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetRandomTemplate(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 22) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).result = 'nerdqueen';
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).result = 'goodstudent';
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        (s as any).result = 'computergeek';
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          (s as any).result = 'chessplayer';
        } else {
          if (((s as any).temp_rand ?? 0) === 4) {
            (s as any).result = 'volleyball';
          } else {
            if (((s as any).temp_rand ?? 0) === 5) {
              (s as any).result = 'dancer';
            } else {
              if (((s as any).temp_rand ?? 0) === 6) {
                (s as any).result = 'runner';
              } else {
                if (((s as any).temp_rand ?? 0) === 7) {
                  (s as any).result = 'football';
                } else {
                  if (((s as any).temp_rand ?? 0) === 8) {
                    (s as any).result = 'socialite';
                  } else {
                    if (((s as any).temp_rand ?? 0) === 9) {
                      (s as any).result = 'beautiful';
                    } else {
                      if (((s as any).temp_rand ?? 0) === 10) {
                        (s as any).result = 'anorexic';
                      } else {
                        if (((s as any).temp_rand ?? 0) === 11) {
                          (s as any).result = 'bimbo';
                        } else {
                          if (((s as any).temp_rand ?? 0) === 12) {
                            (s as any).result = 'gopnikstart';
                          } else {
                            if (((s as any).temp_rand ?? 0) === 13) {
                              (s as any).result = 'troublemaker';
                            } else {
                              if (((s as any).temp_rand ?? 0) === 14) {
                                if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
                                  (s as any).result = qspFunc(s, 'intro_character_templates', 'get_random_template');
                                  return;
                                }
                                (s as any).result = 'vitekgf';
                              } else {
                                if (((s as any).temp_rand ?? 0) === 15) {
                                  (s as any).result = 'alternative';
                                } else {
                                  if (((s as any).temp_rand ?? 0) === 16) {
                                    (s as any).result = 'friendless';
                                  } else {
                                    if (((s as any).temp_rand ?? 0) === 17) {
                                      (s as any).result = 'uglyduckling';
                                    } else {
                                      if (((s as any).temp_rand ?? 0) === 18) {
                                        (s as any).result = 'goodgirl';
                                      } else {
                                        if (((s as any).temp_rand ?? 0) === 19) {
                                          (s as any).result = 'slut';
                                        } else {
                                          if (((s as any).temp_rand ?? 0) === 20) {
                                            (s as any).result = 'goth';
                                          } else {
                                            (s as any).result = 'poor';
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetTemplate(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterSetGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'body']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'traits']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'skills']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'inventory']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'relationships']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'school']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'sex']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'fame']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'other']; enterDoSubgroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetGroup(s: GameState, scene: SceneBuilder): void {
  if (((String(';nerdqueen;goodstudent;computergeek;chessplayer;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
    ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'nerd';
  } else {
    if (((String(';volleyball;dancer;runner;football;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
      ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'jock';
    } else {
      if (((String(';socialite;beautiful;anorexic;bimbo;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
        ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'cool';
      } else {
        if (((String(';gopnikstart;troublemaker;vitekgf;alternative;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
          ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'gopnik';
        } else {
          if (((String(';friendless;uglyduckling;goodgirl;slut;goth;poor;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
            ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'outcast';
          } else {
            return;
          }
        }
      }
    }
  }
  ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((s as any).locArgs?.[1] ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDoSubgroup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_functions', 'reset_' + ((s as any).locArgs?.[2] ?? 0) + '');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', ((s as any).locArgs?.[2] ?? 0));
  qspCall(s, 'intro_character_templates', '$ARGS[1]', ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterModOnlySetGroup(s: GameState, scene: SceneBuilder): void {
  ((s as any).start_type = (s as any).start_type ?? {})['group'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((s as any).locArgs?.[2] ?? 0);
  qspCall(s, 'intro_functions', 'reset_body');
  qspCall(s, 'intro_functions', 'reset_traits');
  qspCall(s, 'intro_functions', 'reset_skills');
  qspCall(s, 'intro_functions', 'reset_inventory');
  qspCall(s, 'intro_functions', 'reset_relationships');
  qspCall(s, 'intro_functions', 'reset_school');
  qspCall(s, 'intro_functions', 'reset_sex');
  qspCall(s, 'intro_functions', 'reset_fame');
  qspCall(s, 'intro_functions', 'reset_other');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'body');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'traits');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'skills');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'inventory');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'relationships');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'school');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'sex');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'fame');
  qspCall(s, 'intro_character_templates', '$start_type[\'group\']', 'other');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNerd(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 300;
    qspCall(s, 'traits', 'level', 'academic', 2);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['nerd_learn_home'] = 5;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
    }
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) - (1);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) - (1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    (s as any).money = ((s as any).money ?? 0) + (3000);
    ((s as any).BookVars = (s as any).BookVars ?? {})['fantasy_pages'] = 500;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 20;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = 40;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + (20);
    (s as any).pcs_chess = ((s as any).pcs_chess ?? 0) + (20);
    (s as any).pcs_gaming = ((s as any).pcs_gaming ?? 0) + (20);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (5);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (5);
    (s as any).pcs_compskl = ((s as any).pcs_compskl ?? 0) + (20);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + (5);
      (s as any).pcs_chess = ((s as any).pcs_chess ?? 0) - (15);
      (s as any).pcs_gaming = ((s as any).pcs_gaming ?? 0) + (10);
      (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (5);
      (s as any).pcs_compskl = ((s as any).pcs_compskl ?? 0) - (10);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    (s as any).grupTipe = 3;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 200;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 800;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[6] = 600;
      qspCall(s, 'npc_relationship', 'socialgroup_setting', (-10), (-10), 25, 0, 5, 20);
    } else {
      qspCall(s, 'npc_relationship', 'socialgroup_setting', (-5), (-5), 30, 0, 5, 30);
    }
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A129', 10);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'art', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'his', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', 25);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNerdqueen(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 22;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 27;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 60;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (200);
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (2);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (1);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
    (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (100);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = 10;
    qspCall(s, 'piercing_management', 'add', 'ears', 2);
    qspCall(s, 'purses', 'add_item', 'fashionista', 13);
    qspCall(s, 'purses', 'wear', 'fashionista', 13);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 52;
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (5);
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (5);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
    (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) - (10);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (5);
    (s as any).pcs_icesktng = ((s as any).pcs_icesktng ?? 0) + (10);
    (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) + (20);
    (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) + (20);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (5);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (15);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
      (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) - (10);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 300;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 900;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[6] = 700;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting', 10, 5, 10, 5, 5, 5);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', (-5));
    qspCall(s, 'grades', 'grade_award', 'school', 'art', (-10));
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', (-5));
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', (-5));
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', (-5));
    qspCall(s, 'grades', 'grade_award', 'school', 'his', (-5));
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', (-5));
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', (-10));
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', 5);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGoodstudent(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 500;
    qspCall(s, 'traits', 'level', 'academic', 3);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = 10;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 18;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 105;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (100);
    (s as any).glass = 1;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    (s as any).money = ((s as any).money ?? 0) + (2000);
    qspCall(s, 'purses', 'add_item', 'gm', 3);
    qspCall(s, 'purses', 'wear', 'gm', 3);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 48;
    (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + (5);
    (s as any).pcs_instrmusic = ((s as any).pcs_instrmusic ?? 0) + (10);
    (s as any).pcs_artskls = ((s as any).pcs_artskls ?? 0) + (10);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) - (5);
    } else {
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 850;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[6] = 700;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting', 0, 0, 5, 0, 0, 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', 20);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'art', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'his', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', 10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputergeek(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = 10;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 13;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 40;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (180);
    } else {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (100);
    }
    (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) + (1);
    (s as any).glass = 1;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_computer'] = 1;
    (s as any).internet = 20;
    qspCall(s, 'purses', 'add_item', 'gm', 3);
    qspCall(s, 'purses', 'wear', 'gm', 3);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 48;
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
    (s as any).pcs_gaming = ((s as any).pcs_gaming ?? 0) + (10);
    (s as any).pcs_comphckng = ((s as any).pcs_comphckng ?? 0) + (20);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (15);
    (s as any).pcs_compskl = ((s as any).pcs_compskl ?? 0) + (20);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
      (s as any).pcs_compskl = ((s as any).pcs_compskl ?? 0) + (20);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    qspCall(s, 'npc_relationship', 'modify_exact', 'A129', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A142', 15);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A152', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A153', 10);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', 10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChessplayer(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 13;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 90;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (100);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'other') {
    (s as any).chessyear = ((s as any).year ?? 0);
    (s as any).chessmonth = ((s as any).month ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    qspCall(s, 'purses', 'add_item', 'gm', 14);
    qspCall(s, 'purses', 'wear', 'gm', 14);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 45;
    (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (5);
    (s as any).pcs_prcptn = ((s as any).pcs_prcptn ?? 0) + (5);
    (s as any).pcs_chess = ((s as any).pcs_chess ?? 0) + (20);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (10);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    qspCall(s, 'npc_relationship', 'modify_exact', 'A151', 20);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', (-5));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterJock(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (20);
    (s as any).pcs_haircol = 3;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (245);
    (s as any).pcs_eyecol = 3;
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (1);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['scrunchies'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = 20;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 20;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = 20;
    }
    qspCall(s, 'piercing_management', 'add', 'ears', 1);
    qspCall(s, 'purses', 'add_item', 'fashionista', 11);
    qspCall(s, 'purses', 'wear', 'fashionista', 11);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (40);
    (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (10);
    (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (10);
    (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (10);
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (10);
    (s as any).strenbuf = ((s as any).strenbuf ?? 0) + (40);
    (s as any).agilbuf = ((s as any).agilbuf ?? 0) + (10);
    (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + (10);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
    (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) + (10);
    (s as any).pcs_run = ((s as any).pcs_run ?? 0) + (20);
    (s as any).pcs_vball = ((s as any).pcs_vball ?? 0) + (10);
    (s as any).pcs_ftbll = ((s as any).pcs_ftbll ?? 0) + (10);
    (s as any).pcs_icesktng = ((s as any).pcs_icesktng ?? 0) + (20);
    (s as any).pcs_bushcraft = ((s as any).pcs_bushcraft ?? 0) + (5);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (20);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (15);
    (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (10);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (5);
      (s as any).agilbuf = ((s as any).agilbuf ?? 0) + (5);
      (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) - (5);
      (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) - (30);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    (s as any).grupTipe = 2;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 400;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 800;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 300;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[6] = 200;
      qspCall(s, 'npc_relationship', 'socialgroup_setting', 10, 25, (-5), 0, (-10), 0);
    } else {
      qspCall(s, 'npc_relationship', 'socialgroup_setting', 15, 30, (-5), 0, (-10), 0);
    }
    qspCall(s, 'npc_relationship', 'modify_exact', 'A34', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A129', (-10));
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', 40);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterVolleyball(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 27;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 56;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'other') {
    ((s as any).vballVars = (s as any).vballVars ?? {})['lessons_remaining'] = ((s as any).vballVars['lessons_remaining'] ?? 0) + (30);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 45;
    (s as any).pcs_vball = ((s as any).pcs_vball ?? 0) + (40);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (5);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (5);
      (s as any).pcs_vball = ((s as any).pcs_vball ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    qspCall(s, 'npc_relationship', 'modify_exact', 'A13', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A69', 10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDancer(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 12;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 27;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 51;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) - (15);
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (145);
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) - (1);
    (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (20);
      (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (245);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'fame') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      qspCall(s, 'fame', 'pushkin', 'ballet', 15, 'local');
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'other') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).ballet = (s as any).ballet ?? {})['blocker'] = 1;
      qspCall(s, 'pushkin_ballet_init', 'start');
    }
    (s as any).gsAboDance = ((s as any).gsAboDance ?? 0) + (30);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 55;
    (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (5);
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (15);
    (s as any).agilbuf = ((s as any).agilbuf ?? 0) + (5);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (15);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (5);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (5);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (10);
    (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (45);
    (s as any).pcs_perform = ((s as any).pcs_perform ?? 0) + (35);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) - (5);
      (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (5);
      (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) - (10);
      (s as any).agilbuf = ((s as any).agilbuf ?? 0) - (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
      (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) + (40);
      (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (15);
      (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (5);
      (s as any).pcs_perform = ((s as any).pcs_perform ?? 0) - (35);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 500;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting', 5, 0, 0, (-5), 0, 0);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A23', 25);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A144', 10);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      qspCall(s, 'npc_relationship', 'modify_exact', 'A23', 25);
      ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Friends'] = 2;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', 25);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRunner(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 12;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 27;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 61;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'other') {
    (s as any).gsAboBeg = ((s as any).gsAboBeg ?? 0) + (30);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 50;
    (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (5);
    (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (5);
    (s as any).agilbuf = ((s as any).agilbuf ?? 0) + (5);
    (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + (5);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (10);
    (s as any).pcs_run = ((s as any).pcs_run ?? 0) + (30);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) - (5);
      (s as any).agilbuf = ((s as any).agilbuf ?? 0) - (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
      (s as any).pcs_run = ((s as any).pcs_run ?? 0) + (5);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 850;
    }
    qspCall(s, 'npc_relationship', 'modify_exact', 'A3', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A5', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A8', 5);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A131', 10);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', 20);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFootball(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 27;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 60;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    qspCall(s, 'purses', 'add_item', 'fashionista', 11);
    qspCall(s, 'purses', 'wear', 'fashionista', 11);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 50;
    (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (5);
    (s as any).pcs_kick = ((s as any).pcs_kick ?? 0) + (20);
    (s as any).pcs_ftbll = ((s as any).pcs_ftbll ?? 0) + (40);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) - (5);
      (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (5);
      (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (5);
      (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + (5);
      (s as any).pcs_ftbll = ((s as any).pcs_ftbll ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 900;
    }
    qspCall(s, 'npc_relationship', 'modify_exact', 'A34', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A131', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A149', 10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCool(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (5);
    (s as any).pcs_haircol = 2;
    (s as any).pcs_eyecol = 2;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    (s as any).money = ((s as any).money ?? 0) + (1000);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = 20;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = 20;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (10);
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (10);
    (s as any).pcs_prcptn = ((s as any).pcs_prcptn ?? 0) + (10);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
    (s as any).pcs_icesktng = ((s as any).pcs_icesktng ?? 0) + (10);
    (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) + (20);
    (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) + (30);
    (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (35);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) - (45);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    (s as any).grupTipe = 1;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 800;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 300;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 200;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[6] = 300;
      qspCall(s, 'npc_relationship', 'socialgroup_setting', 25, 15, 0, (-10), (-20), 10);
    } else {
      qspCall(s, 'npc_relationship', 'socialgroup_setting', 30, 20, 0, (-10), (-20), 10);
      qspCall(s, 'npc_relationship', 'modify_exact', 'A144', 10);
    }
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A129', (-20));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSocialite(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['preppy_points'] = 125000;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 18;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 32;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 60;
    (s as any).pcs_hairlng = 200;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (200);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 20;
    qspCall(s, 'piercing_management', 'add', 'ears', 1);
    qspCall(s, 'purses', 'add_item', 'fashionista', 4);
    qspCall(s, 'purses', 'wear', 'fashionista', 4);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 55;
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (5);
    (s as any).pcs_perform = ((s as any).pcs_perform ?? 0) + (20);
    (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) + (20);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (30);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (25);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (5);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    qspCall(s, 'npc_relationship', 'modify_exact', 'A140', 10);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', 35);
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'art', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'his', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', 10);
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', 10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBeautiful(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 22;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 32;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 56;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (400);
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (45);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (1);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (2);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
    }
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (5);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'fame') {
    qspCall(s, 'fame', 'pav', 'sex', 20);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['comb'] = 1;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 50;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_fake'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_mink'] = 2;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['suncream'] = 10;
    qspCall(s, 'piercing_management', 'add', 'ears', 2);
    qspCall(s, 'purses', 'add_item', 'fashionista', 9);
    qspCall(s, 'purses', 'wear', 'fashionista', 9);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 55;
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (40);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (35);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (5);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
      (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) + (5);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 900;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 300;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting_boys', 10, 10, 10, 10, 10, 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'art', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'his', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', 5);
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', 5);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAnorexic(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 13;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 15;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (100);
    (s as any).pcs_haircol = 2;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (50);
    (s as any).pcs_eyecol = 2;
    (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['comb'] = 1;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['suncream'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = 10;
    qspCall(s, 'purses', 'add_item', 'coco', 29);
    qspCall(s, 'purses', 'wear', 'coco', 29);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 35;
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) - (10);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) - (10);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (15);
    (s as any).pcs_run = ((s as any).pcs_run ?? 0) + (15);
    (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) - (5);
    (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) + (10);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (20);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (20);
    (s as any).pcs_compskl = ((s as any).pcs_compskl ?? 0) + (5);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (10);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    qspCall(s, 'npc_relationship', 'modify_exact', 'A15', 30);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A148', 30);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBimbo(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['bimbo_points'] = 100000;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 22;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 32;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 60;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (100);
    (s as any).pcs_haircol = 3;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (50);
    (s as any).pcs_eyecol = 3;
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (45);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (1);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (2);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
    } else {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (400);
      (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (100);
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (20);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'fame') {
    qspCall(s, 'fame', 'pav', 'sex', 60);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['comb'] = 1;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 50;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['suncream'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_fake'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_mink'] = 2;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) + (100);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = ((s as any).mc_inventory['travel_makeup'] ?? 0) + (30);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) + (10);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = ((s as any).mc_inventory['razor'] ?? 0) + (30);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_fake'] = ((s as any).mc_inventory['eyelash_fake'] ?? 0) + (10);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_mink'] = ((s as any).mc_inventory['eyelash_mink'] ?? 0) + (3);
    }
    qspCall(s, 'piercing_management', 'add', 'ears', 2);
    qspCall(s, 'piercing_management', 'add', 'navel', 1);
    qspCall(s, 'piercing_management', 'add', 'tongue', 2);
    qspCall(s, 'purses', 'add_item', 'cats', 2);
    qspCall(s, 'purses', 'wear', 'cats', 2);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 60;
    (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) - (10);
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) - (10);
    (s as any).pcs_inhib = 35;
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (15);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (50);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (35);
    (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) - (10);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + (10);
      (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (5);
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) - (5);
      (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (40);
      (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) + (5);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    qspCall(s, 'npc_relationship', 'socialgroup_setting_boys', 20, 20, (-10), 20, 20, (-5));
    qspCall(s, 'npc_relationship', 'socialgroup_setting_girls', (-10), (-10), (-20), (-10), (-10), (-10));
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'art', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'his', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', (-35));
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', (-5));
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', (-5));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGopnik(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (10);
    (s as any).pcs_haircol = 0;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (180);
    (s as any).pcs_eyecol = 1;
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (1);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
    (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (1);
    (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (5);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (8);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'fame') {
    qspCall(s, 'fame', 'pav', 'sex', 30);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'sex') {
    ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (10);
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (5);
    ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (1);
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_man'] = ((s as any).daystart ?? 0) - 1;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['day_lost'] = 0;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['age_lost'] = 16;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'vaginal';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['taker_ID'] = '';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['virgin_taker'] = 'Goryunov Bogdan Nikitovich';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_desc'] = 'huge';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_size'] = 18;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (20);
      ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (15);
      ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (11);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    (s as any).fakepassport = 1;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cigarettes'] = 20;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 20;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = 30;
    }
    qspCall(s, 'piercing_management', 'add', 'ears', 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (15);
    (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (5);
    (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (5);
    (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (5);
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (5);
    (s as any).strenbuf = ((s as any).strenbuf ?? 0) + (15);
    (s as any).agilbuf = ((s as any).agilbuf ?? 0) + (5);
    (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + (5);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (15);
    (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) + (10);
    (s as any).pcs_run = ((s as any).pcs_run ?? 0) + (20);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (15);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (5);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) - (5);
      (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) - (5);
      (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) - (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    (s as any).grupTipe = 4;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 300;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 800;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[6] = 100;
      qspCall(s, 'npc_relationship', 'socialgroup_setting', (-5), 0, (-10), 25, (-10), (-10));
    } else {
      qspCall(s, 'npc_relationship', 'socialgroup_setting', (-5), 0, (-10), 30, (-10), (-10));
    }
    qspCall(s, 'npc_relationship', 'modify_exact', 'A11', 10);
    qspCall(s, 'npc_relationship', 'set', 'A23', 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A129', (-30));
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'art', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'his', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'shop', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', 25);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGopnikstart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 13;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 65;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) + (1);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    qspCall(s, 'purses', 'add_item', 'danilovich', 12);
    qspCall(s, 'purses', 'wear', 'danilovich', 12);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 45;
    (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (20);
    (s as any).strenbuf = ((s as any).strenbuf ?? 0) + (20);
    (s as any).pcs_jab = ((s as any).pcs_jab ?? 0) + (35);
    (s as any).pcs_punch = ((s as any).pcs_punch ?? 0) + (35);
    (s as any).pcs_kick = ((s as any).pcs_kick ?? 0) + (35);
    (s as any).pcs_def = ((s as any).pcs_def ?? 0) + (35);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (15);
      (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + (15);
    } else {
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 900;
      qspCall(s, 'npc_relationship', 'socialgroup_setting', (-10), (-10), (-10), 10, (-10), (-10));
    } else {
      qspCall(s, 'npc_relationship', 'socialgroup_setting', (-10), (-10), (-10), 5, (-10), (-10));
    }
    qspCall(s, 'npc_relationship', 'modify_exact', 'A9', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A10', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A11', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A20', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A21', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A24', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A34', (-10));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTroublemaker(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['punk_points'] = 75000;
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = (-250);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 13;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 53;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (65);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    qspCall(s, 'piercing_management', 'add', 'nose', 4);
    qspCall(s, 'purses', 'add_item', 'dolls', 32);
    qspCall(s, 'purses', 'wear', 'dolls', 32);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 45;
    (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (10);
    (s as any).strenbuf = ((s as any).strenbuf ?? 0) + (10);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
    (s as any).pcs_jab = ((s as any).pcs_jab ?? 0) + (20);
    (s as any).pcs_punch = ((s as any).pcs_punch ?? 0) + (20);
    (s as any).pcs_kick = ((s as any).pcs_kick ?? 0) + (20);
    (s as any).pcs_def = ((s as any).pcs_def ?? 0) + (20);
    (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) + (10);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (10);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (5);
    } else {
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (10);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    qspCall(s, 'npc_relationship', 'socialgroup_setting', 0, 0, (-10), 10, (-10), (-10));
    qspCall(s, 'npc_relationship', 'set', 'A23', 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A24', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A34', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A143', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A144', 15);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A145', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A155', 15);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A157', 10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterVitekgf(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = (-50);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 32;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 95;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) - (5);
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (80);
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) - (1);
    (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'sex') {
    ((s as any).stat = (s as any).stat ?? {})['hj'] = 10;
    ((s as any).stat = (s as any).stat ?? {})['bj'] = 5;
    ((s as any).stat = (s as any).stat ?? {})['vaginal'] = 2;
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_man'] = ((s as any).daystart ?? 0) - 1;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['day_lost'] = 0;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['age_lost'] = 16;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'vaginal';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['taker_ID'] = 'A9';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['virgin_taker'] = 'Vitek';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_desc'] = 'thick';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_size'] = 18;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    qspCall(s, 'piercing_management', 'add', 'nose', 3);
    qspCall(s, 'purses', 'add_item', 'dolls', 19);
    qspCall(s, 'purses', 'wear', 'dolls', 19);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 40;
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (5);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (15);
    (s as any).pcs_jab = ((s as any).pcs_jab ?? 0) + (10);
    (s as any).pcs_punch = ((s as any).pcs_punch ?? 0) + (10);
    (s as any).pcs_kick = ((s as any).pcs_kick ?? 0) + (10);
    (s as any).pcs_def = ((s as any).pcs_def ?? 0) + (10);
    (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) + (10);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (5);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (20);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 700;
    qspCall(s, 'npc_relationship', 'modify_exact', 'A9', 50);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A10', 5);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A11', 5);
    qspCall(s, 'npc_relationship', 'set', 'A23', 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A24', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', (-10));
    (s as any).kotovLoveQW = 1;
    (s as any).vitekvisit = 5;
    ((s as any).npc_vaginal_count = (s as any).npc_vaginal_count ?? {})['A9'] = ((s as any).npc_vaginal_count['A9'] ?? 0) + (5);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'art', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'his', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'shop', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', 30);
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', (-25));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAlternative(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_exp'] = 2;
    qspCall(s, 'traits', 'level', 'addictive_personality', 1);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = 25;
    qspCall(s, 'traits', 'level', 'exhibitionist', 1);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = 30;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 18;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 17;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 56;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) - (5);
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) - (1);
    (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
    (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (4);
    (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (1);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (4);
      (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (6);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'fame') {
    qspCall(s, 'fame', 'pav', 'sex', 40);
    ((s as any).fame = (s as any).fame ?? {})['pav_flash'] = 65;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      qspCall(s, 'fame', 'pav', 'sex', 20);
      ((s as any).fame = (s as any).fame ?? {})['pav_flash'] = ((s as any).fame['pav_flash'] ?? 0) + (10);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'sex') {
    ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (5);
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (5);
    ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (2);
    ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (1);
    ((s as any).stat = (s as any).stat ?? {})['vaginal_finger'] = ((s as any).stat['vaginal_finger'] ?? 0) + (5);
    ((s as any).stat = (s as any).stat ?? {})['vaginal_finger_give'] = ((s as any).stat['vaginal_finger_give'] ?? 0) + (5);
    ((s as any).stat = (s as any).stat ?? {})['cuni'] = ((s as any).stat['cuni'] ?? 0) + (3);
    ((s as any).stat = (s as any).stat ?? {})['cuni_give'] = ((s as any).stat['cuni_give'] ?? 0) + (3);
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_man'] = ((s as any).daystart ?? 0) - 1;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (10);
      ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (20);
      ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (22);
      ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (4);
      ((s as any).stat = (s as any).stat ?? {})['vaginal_finger'] = ((s as any).stat['vaginal_finger'] ?? 0) + (20);
      ((s as any).stat = (s as any).stat ?? {})['vaginal_finger_give'] = ((s as any).stat['vaginal_finger_give'] ?? 0) + (10);
      ((s as any).stat = (s as any).stat ?? {})['cuni'] = ((s as any).stat['cuni'] ?? 0) + (9);
      ((s as any).stat = (s as any).stat ?? {})['cuni_give'] = ((s as any).stat['cuni_give'] ?? 0) + (9);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_fake'] = 5;
    qspCall(s, 'piercing_management', 'add', 'nose', 5);
    qspCall(s, 'piercing_management', 'add', 'tongue', 2);
    qspCall(s, 'purses', 'add_item', 'dolls', 15);
    qspCall(s, 'purses', 'wear', 'dolls', 15);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 50;
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (10);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (10);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (10);
    (s as any).pcs_humint = ((s as any).pcs_humint ?? 0) + (10);
    (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) + (10);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (15);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (10);
    (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (20);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) - (15);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
      (s as any).pcs_persuas = ((s as any).pcs_persuas ?? 0) + (10);
      (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (5);
      (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) - (20);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 300;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting', 5, 0, 0, 10, 0, 0);
    qspCall(s, 'npc_relationship', 'set', 'A23', 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A143', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A144', 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A154', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A155', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A156', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A158', 10);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'shop', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', 30);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOutcast(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (100);
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) - (1);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) - (1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 20;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = 40;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) - (5);
      (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) - (5);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    (s as any).grupTipe = 5;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 300;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 100;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[6] = 200;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting', (-20), (-10), 0, (-10), 0, 0);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A11', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A34', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A133', 20);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFriendless(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 12;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 7;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 42;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (100);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) + (1);
    }
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (100);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 30;
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) - (15);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) - (5);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (15);
    (s as any).pcs_observ = ((s as any).pcs_observ ?? 0) + (20);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) - (5);
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 50;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 200;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting', (-10), (-10), (-10), (-10), (-10), 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', (-30));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUglyduckling(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 28;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 7;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 150;
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) - (1);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (2);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) - (1);
    (s as any).glass = 1;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (500);
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) + (2);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      qspCall(s, 'purses', 'add_item', 'gm', 8);
      qspCall(s, 'purses', 'wear', 'gm', 8);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 25;
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) - (5);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (20);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) - (10);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 0;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting_boys', (-10), (-10), 0, (-10), 0, 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', (-30));
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', (-30));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGoodgirl(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['prude_points'] = 100000;
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 500;
    qspCall(s, 'traits', 'level', 'academic', 3);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['nerd_learn_home'] = 5;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 13;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 7;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 111;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (100);
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (2);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (1);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (300);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'other') {
    (s as any).church_moral = 40;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    (s as any).money = ((s as any).money ?? 0) + (1000);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 10;
    qspCall(s, 'purses', 'add_item', 'cats', 5);
    qspCall(s, 'purses', 'wear', 'cats', 5);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 40;
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (25);
    (s as any).pcs_inhib = 0;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 400;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting', (-10), (-5), 10, (-20), 0, 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A11', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A25', (-5));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', 10);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'art', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'his', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', 25);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSlut(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = 40;
    qspCall(s, 'traits', 'level', 'exhibitionist', 1);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = 50;
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference_exp'] = 35000;
    qspCall(s, 'traits', 'level', 'panty_preference', 2);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_exp'] = 50;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 22;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 22;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 60;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (100);
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (20);
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (1);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (1);
    (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
    (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (10);
    (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (10);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) - (80);
    } else {
      (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (10);
      (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (5);
      (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'fame') {
    qspCall(s, 'fame', 'pav', 'sex', 600);
    ((s as any).fame = (s as any).fame ?? {})['pav_flash'] = 100;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).fame = (s as any).fame ?? {})['pav_flash'] = ((s as any).fame['pav_flash'] ?? 0) + (25);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'sex') {
    (s as any).guy = ((s as any).guy ?? 0) + (15);
    (s as any).orgasm = ((s as any).orgasm ?? 0) + (120);
    ((s as any).stat = (s as any).stat ?? {})['swallow'] = ((s as any).stat['swallow'] ?? 0) + (40);
    ((s as any).stat = (s as any).stat ?? {})['porn'] = ((s as any).stat['porn'] ?? 0) + (75);
    ((s as any).stat = (s as any).stat ?? {})['mast'] = ((s as any).stat['mast'] ?? 0) + (100);
    ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (70);
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (50);
    ((s as any).stat = (s as any).stat ?? {})['vaginal_finger'] = ((s as any).stat['vaginal_finger'] ?? 0) + (20);
    ((s as any).stat = (s as any).stat ?? {})['cuni'] = ((s as any).stat['cuni'] ?? 0) + (5);
    ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (30);
    ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (20);
    ((s as any).stat = (s as any).stat ?? {})['group'] = ((s as any).stat['group'] ?? 0) + (5);
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_man'] = ((s as any).daystart ?? 0) - 1;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['day_lost'] = 0;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['age_lost'] = 16;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'vaginal';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['taker_ID'] = '';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['virgin_taker'] = 'Goryunov Bogdan Nikitovich';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_desc'] = 'huge';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_size'] = 18;
    (s as any).motherKnowSpravka = 2;
    (s as any).motherKnowWhore = 1;
    (s as any).sisterknowslut = 1;
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 1;
    (s as any).GspravkaT = 2;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).guy = ((s as any).guy ?? 0) + (30);
      (s as any).orgasm = ((s as any).orgasm ?? 0) + (170);
      ((s as any).stat = (s as any).stat ?? {})['swallow'] = ((s as any).stat['swallow'] ?? 0) + (87);
      ((s as any).stat = (s as any).stat ?? {})['porn'] = ((s as any).stat['porn'] ?? 0) + (182);
      ((s as any).stat = (s as any).stat ?? {})['mast'] = ((s as any).stat['mast'] ?? 0) + (176);
      ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (133);
      ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (77);
      ((s as any).stat = (s as any).stat ?? {})['vaginal_finger'] = ((s as any).stat['vaginal_finger'] ?? 0) + (33);
      ((s as any).stat = (s as any).stat ?? {})['cuni'] = ((s as any).stat['cuni'] ?? 0) + (7);
      ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (27);
      ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (11);
      ((s as any).stat = (s as any).stat ?? {})['group'] = ((s as any).stat['group'] ?? 0) + (9);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['comb'] = 1;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_mirror'] = 1;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 30;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['travel_makeup'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['makeup_wipes'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['eyelash_fake'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = 1;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 20;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = 40;
    }
    qspCall(s, 'piercing_management', 'add', 'ears', 2);
    qspCall(s, 'purses', 'add_item', 'cats', 10);
    qspCall(s, 'purses', 'wear', 'cats', 10);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 35;
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (45);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (25);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (20);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (45);
    (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (20);
    (s as any).pcs_perform = ((s as any).pcs_perform ?? 0) + (20);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
      (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (10);
      (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) - (45);
      (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) - (20);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 0;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 50;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 50;
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 100;
    }
    qspCall(s, 'npc_relationship', 'socialgroup_setting', (-10), (-10), (-10), (-10), (-10), (-10));
    qspCall(s, 'npc_relationship', 'socialgroup_setting_boys', 15, 15, 0, 20, 0, 0);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A11', 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A25', 30);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', (-30));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A34', (-10));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A144', 10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGoth(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).arch_vars = (s as any).arch_vars ?? {})['goth_points'] = 100000;
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = ((s as any).trait_vars['academic_exp'] ?? 0) - (50);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 13;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 7;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 51;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (200);
    (s as any).pcs_haircol = 0;
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (65);
    (s as any).pcs_eyecol = 1;
    (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (1);
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (1);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).pcs_teeth = ((s as any).pcs_teeth ?? 0) - (1);
    }
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (1);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['umbrella'] = 1;
    (s as any).money = ((s as any).money ?? 0) - (1000);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = 25;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['razor'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = 10;
    qspCall(s, 'purses', 'add_item', 'dolls', 18);
    qspCall(s, 'purses', 'wear', 'dolls', 18);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 45;
    (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + (5);
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (10);
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (5);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (10);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (10);
    (s as any).pcs_observ = ((s as any).pcs_observ ?? 0) + (5);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (40);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (25);
    (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (10);
    (s as any).pcs_artskls = ((s as any).pcs_artskls ?? 0) + (35);
    (s as any).pcs_sewng = ((s as any).pcs_sewng ?? 0) + (20);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (15);
      (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (10);
      (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) - (10);
      (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) - (20);
      (s as any).pcs_artskls = ((s as any).pcs_artskls ?? 0) - (30);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 300;
      qspCall(s, 'npc_relationship', 'socialgroup_setting', (-5), 0, 0, 10, 0, (-10));
    } else {
      qspCall(s, 'npc_relationship', 'socialgroup_setting', 0, 0, 5, 20, 0, 0);
    }
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A34', (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A144', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A155', 5);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'art', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', 25);
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', 15);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPoor(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'inventory') {
    (s as any).money = ((s as any).money ?? 0) - (((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1750) : (1500)));
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'traits') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_exp'] = 50;
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (10) : (15));
    qspCall(s, 'traits', 'level', 'exhibitionist', 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'body') {
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 16;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 7;
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 52;
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (150);
    (s as any).pcs_haircol = 1;
    (s as any).pcs_eyecol = 3;
    (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (10);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (10);
      (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (5);
      (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (5);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'fame') {
    qspCall(s, 'fame', 'pav', 'sex', 100);
    ((s as any).fame = (s as any).fame ?? {})['pav_flash'] = 25;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      qspCall(s, 'fame', 'pav', 'sex', 100);
      qspCall(s, 'fame', 'pav', 'prostitute', 200);
      ((s as any).fame = (s as any).fame ?? {})['pav_flash'] = ((s as any).fame['pav_flash'] ?? 0) + (15);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'sex') {
    ((s as any).stat = (s as any).stat ?? {})['porn'] = ((s as any).stat['porn'] ?? 0) + (36);
    ((s as any).stat = (s as any).stat ?? {})['mast'] = ((s as any).stat['mast'] ?? 0) + (24);
    ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (15);
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (23);
    ((s as any).stat = (s as any).stat ?? {})['vaginal_finger'] = ((s as any).stat['vaginal_finger'] ?? 0) + (24);
    (s as any).guy = ((s as any).guy ?? 0) + (9);
    (s as any).orgasm = ((s as any).orgasm ?? 0) + (21);
    ((s as any).stat = (s as any).stat ?? {})['swallow'] = ((s as any).stat['swallow'] ?? 0) + (19);
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_man'] = ((s as any).daystart ?? 0) - 1;
    (s as any).motherKnowSpravka = 2;
    (s as any).motherKnowWhore = 1;
    (s as any).sisterknowslut = 1;
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 1;
    (s as any).GspravkaT = 2;
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      ((s as any).stat = (s as any).stat ?? {})['porn'] = ((s as any).stat['porn'] ?? 0) + (17);
      ((s as any).stat = (s as any).stat ?? {})['mast'] = ((s as any).stat['mast'] ?? 0) + (37);
      ((s as any).stat = (s as any).stat ?? {})['hj'] = ((s as any).stat['hj'] ?? 0) + (38);
      ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (95);
      ((s as any).stat = (s as any).stat ?? {})['vaginal_finger'] = ((s as any).stat['vaginal_finger'] ?? 0) + (44);
      ((s as any).stat = (s as any).stat ?? {})['cuni'] = ((s as any).stat['cuni'] ?? 0) + (4);
      ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (27);
      ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (6);
      ((s as any).stat = (s as any).stat ?? {})['group'] = ((s as any).stat['group'] ?? 0) + (3);
      (s as any).guy = ((s as any).guy ?? 0) + (18);
      (s as any).orgasm = ((s as any).orgasm ?? 0) + (105);
      ((s as any).stat = (s as any).stat ?? {})['swallow'] = ((s as any).stat['swallow'] ?? 0) + (73);
      ((s as any).stat = (s as any).stat ?? {})['last_sex_day_man'] = ((s as any).daystart ?? 0) - 5;
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['age_lost'] = 17;
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_size'] = 15;
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['taker_ID'] = 'A57';
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['virgin_taker'] = 'Rex Borisyuk';
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_desc'] = 'massive';
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'skills') {
    ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 30;
    (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (5);
    (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (1);
    (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (3);
    (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (2);
    (s as any).pcs_prcptn = ((s as any).pcs_prcptn ?? 0) + (2);
    (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (15);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (2);
    (s as any).pcs_run = ((s as any).pcs_run ?? 0) + (20);
    (s as any).pcs_jab = ((s as any).pcs_jab ?? 0) + (15);
    (s as any).pcs_punch = ((s as any).pcs_punch ?? 0) + (15);
    (s as any).pcs_kick = ((s as any).pcs_kick ?? 0) + (15);
    (s as any).pcs_def = ((s as any).pcs_def ?? 0) + (15);
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (10);
      (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (4);
      (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (12);
      (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (8);
      (s as any).pcs_prcptn = ((s as any).pcs_prcptn ?? 0) + (3);
      (s as any).pcs_inhib = ((s as any).pcs_inhib ?? 0) + (5);
      (s as any).willpowermax = ((s as any).willpowermax ?? 0) + (3);
      (s as any).pcs_run = ((s as any).pcs_run ?? 0) + (5);
      (s as any).pcs_jab = ((s as any).pcs_jab ?? 0) + (5);
      (s as any).pcs_punch = ((s as any).pcs_punch ?? 0) + (5);
      (s as any).pcs_kick = ((s as any).pcs_kick ?? 0) + (5);
      (s as any).pcs_def = ((s as any).pcs_def ?? 0) + (5);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'relationships') {
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = 100;
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = 100;
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = 100;
    ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = 300;
    qspCall(s, 'npc_relationship', 'socialgroup_setting', (-15), 5, (-10), 15, 0, (-20));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A9', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A10', 10);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A11', 15);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A28', (-25));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A29', (-25));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A33', 20);
    qspCall(s, 'npc_relationship', 'modify_exact', 'A34', (-15));
    qspCall(s, 'npc_relationship', 'modify_exact', 'A143', 45);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'school') {
    qspCall(s, 'grades', 'grade_award', 'school', 'math', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'rus', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'lit', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'art', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'bio', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'eng', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'geo', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'sci', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'his', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'shop', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'comp', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'mus', (-25));
    qspCall(s, 'grades', 'grade_award', 'school', 'pe', 25);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_random_template':
      enterSetRandomTemplate(s, scene);
      break;
    case 'get_random_template':
      enterGetRandomTemplate(s, scene);
      break;
    case 'set_template':
      enterSetTemplate(s, scene);
      break;
    case 'set_group':
      enterSetGroup(s, scene);
      break;
    case 'do_subgroup':
      enterDoSubgroup(s, scene);
      break;
    case 'mod_only_set_group':
      enterModOnlySetGroup(s, scene);
      break;
    case 'nerd':
      enterNerd(s, scene);
      break;
    case 'nerdqueen':
      enterNerdqueen(s, scene);
      break;
    case 'goodstudent':
      enterGoodstudent(s, scene);
      break;
    case 'computergeek':
      enterComputergeek(s, scene);
      break;
    case 'chessplayer':
      enterChessplayer(s, scene);
      break;
    case 'jock':
      enterJock(s, scene);
      break;
    case 'volleyball':
      enterVolleyball(s, scene);
      break;
    case 'dancer':
      enterDancer(s, scene);
      break;
    case 'runner':
      enterRunner(s, scene);
      break;
    case 'football':
      enterFootball(s, scene);
      break;
    case 'cool':
      enterCool(s, scene);
      break;
    case 'socialite':
      enterSocialite(s, scene);
      break;
    case 'beautiful':
      enterBeautiful(s, scene);
      break;
    case 'anorexic':
      enterAnorexic(s, scene);
      break;
    case 'bimbo':
      enterBimbo(s, scene);
      break;
    case 'gopnik':
      enterGopnik(s, scene);
      break;
    case 'gopnikstart':
      enterGopnikstart(s, scene);
      break;
    case 'troublemaker':
      enterTroublemaker(s, scene);
      break;
    case 'vitekgf':
      enterVitekgf(s, scene);
      break;
    case 'alternative':
      enterAlternative(s, scene);
      break;
    case 'outcast':
      enterOutcast(s, scene);
      break;
    case 'friendless':
      enterFriendless(s, scene);
      break;
    case 'uglyduckling':
      enterUglyduckling(s, scene);
      break;
    case 'goodgirl':
      enterGoodgirl(s, scene);
      break;
    case 'slut':
      enterSlut(s, scene);
      break;
    case 'goth':
      enterGoth(s, scene);
      break;
    case 'poor':
      enterPoor(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_character_templates: LocationDef = {
  name: 'intro_character_templates',
  region: 'other',
  enter: enter,
};
