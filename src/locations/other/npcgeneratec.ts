import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  !isNaN(((s as any).locArgs?.[0] ?? 0)) && ((s as any).locArgs?.[0] ?? 0) !== '') {
    if (((s as any).locArgs?.[0] ?? 0) !== '') {
      ((s as any).ARGS ?? {})[0] = qspUntranslated(s, "val(ARGS[0])", { location: "npcgeneratec" });
    }
    (s as any).npcgen_lastrun = 1;
    ((s as any).npcgeneratecVars ?? {})['gender'] = qspUntranslated(s, "ARGS[0]", { location: "npcgeneratec" });
    if (((s as any).locArgs?.[2] ?? 0) !== 0) {
      ((s as any).npcgeneratecVars ?? {})['age'] = qspUntranslated(s, "ARGS[2]", { location: "npcgeneratec" });
    } else {
      ((s as any).npcgeneratecVars ?? {})['age'] = Math.floor(Math.random() * 18) + 18;
    }
    if (((s as any).locArgs?.[1] ?? 0) !== '') {
      ((s as any).npcgeneratecVars ?? {})['name'] = ((s as any).locArgs?.[1] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
        ((s as any).npcgeneratecVars ?? {})['name'] = 'A Male';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 1) {
          ((s as any).npcgeneratecVars ?? {})['name'] = ((((s as any).npcgeneratecVars ?? 0)?.['age'] <= 25) ? ('A Girl') : ('A Woman'));
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
            ((s as any).npcgeneratecVars ?? {})['name'] = ((((s as any).npcgeneratecVars ?? 0)?.['age'] <= 25) ? ('A Girl') : ('A Woman'));
          } else {
            ((s as any).npcgeneratecVars ?? {})['name'] = 'A Male';
          }
        }
      }
    }
    if (((s as any).locArgs?.[3] ?? 0) !== 0) {
      ((s as any).npcgeneratecVars ?? {})['loc'] = qspUntranslated(s, "ARGS[3]", { location: "npcgeneratec" });
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        ((s as any).npcgeneratecVars ?? {})['loc'] = 1;
      } else {
        if (((s as any).region ?? 0) === 'city') {
          ((s as any).npcgeneratecVars ?? {})['loc'] = Math.floor(Math.random() * 2) + 3;
        }
      }
    }
    ((s as any).npcgeneratecVars ?? {})['anonymous'] = qspUntranslated(s, "ARGS[4]", { location: "npcgeneratec" });
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('attracted') : -1) > 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('like') : -1) > 0) {
      ((s as any).npcgeneratecVars ?? {})['attracted'] = 'like';
    } else {
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('unattracted') : -1) > 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('dislike') : -1) > 0) {
        ((s as any).npcgeneratecVars ?? {})['attracted'] = 'dislike';
      } else {
        ((s as any).npcgeneratecVars ?? {})['attracted'] = '';
      }
    }
    qspCall(s, 'npcgeneratec', 'init');
  }
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', 'assign_index');
  qspCall(s, 'npcgeneratec', 'assign_dob', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'assign_stats', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_details', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_lifestyle', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_occupation', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_personality', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_preferences', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_apprnc', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_other_vars', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'cleanup');
  scene.build();
}

function enterAssignIndex(s: GameState, scene: SceneBuilder): void {
  if (((qspUntranslated(s, "cemptyarray[0]", { location: "npcgeneratec" })).slice((1)-1, ((1)-1)+(1))) === 'C') {
  } else {
    // TODO-QSP: :npcgencsanityloop
    (s as any).ngc_scheck = 0;
    ((s as any).npcgeneratecVars ?? {})['npcID'] = 'C\' + \'' + ((s as any).carraynumber ?? 0)-1> + '';
    if (((s as any).npc_perstype ?? 0)[((s as any).npcgeneratecVars ?? 0)?.['npcID']] === ''  &&  ((s as any).carraynumber ?? 0) > 0) {
      (s as any).carraynumber = ((s as any).carraynumber ?? 0) - (1);
      (s as any).ngc_scheck = 1;
    } else {
      if (((s as any).npc_perstype ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === '') {
        (s as any).ngc_scheck = 0;
      } else {
        (s as any).carraynumber = ((s as any).carraynumber ?? 0) + (1);
        (s as any).ngc_scheck = 1;
      }
    }
    if (((s as any).ngc_scheck ?? 0) === 1) {
      // TODO-QSP: jump 'npcgencsanityloop'
    }
  }
  (s as any).carraynumber = ((s as any).carraynumber ?? 0) + (1);
  // TODO-QSP: $npc_index[$npclastgenerated] = $npclastgenerated
  scene.build();
}

function enterAssignDob(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'time', 'to_daystart', year - npcgeneratecVars['age'] - 1, month, day
  ((s as any).npcgeneratecVars ?? {})['min_daystart'] = ((s as any).dateVars ?? {})?.['daystart'] + 1;
  ((s as any).npcgeneratecVars ?? {})['birth_daystart'] = (Math.floor(Math.random() * (((s as any).npcgeneratecVars ?? {})?.['min_daystart'] + 364 - ((s as any).npcgeneratecVars ?? {})?.['min_daystart'] + 1)) + (((s as any).npcgeneratecVars ?? {})?.['min_daystart']));
  // TODO-QSP: gs 'time', 'to_date', npcgeneratecVars['birth_daystart']
  // TODO-QSP: npc_dob[$ARGS[1]] = dateVars['year'] * 10000
  // TODO-QSP: npc_dob[$ARGS[1]] += dateVars['month'] * 100
  // TODO-QSP: npc_dob[$ARGS[1]] += dateVars['day']
  scene.build();
}

function enterAssignStats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcgeneratecVars ?? 0)?.['age'] < 18) {
    ((s as any).npcgeneratecVars ?? {})['virgin'] = Math.floor(Math.random() * 21) + 0;
    ((s as any).npcgeneratecVars ?? {})['mind'] = Math.floor(Math.random() * 21) + 20;
    ((s as any).npcgeneratecVars ?? {})['body'] = Math.floor(Math.random() * 21) + 40;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['age'] < 22) {
      ((s as any).npcgeneratecVars ?? {})['virgin'] = Math.floor(Math.random() * 13) + 10;
      ((s as any).npcgeneratecVars ?? {})['mind'] = Math.floor(Math.random() * 21) + 25;
      ((s as any).npcgeneratecVars ?? {})['body'] = Math.floor(Math.random() * 21) + 35;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['age'] < 30) {
        ((s as any).npcgeneratecVars ?? {})['virgin'] = Math.floor(Math.random() * 6) + 19;
        ((s as any).npcgeneratecVars ?? {})['mind'] = Math.floor(Math.random() * 21) + 30;
        ((s as any).npcgeneratecVars ?? {})['body'] = Math.floor(Math.random() * 21) + 30;
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['age'] < 35) {
          ((s as any).npcgeneratecVars ?? {})['virgin'] = Math.floor(Math.random() * 8) + 19;
          ((s as any).npcgeneratecVars ?? {})['mind'] = Math.floor(Math.random() * 21) + 35;
          ((s as any).npcgeneratecVars ?? {})['body'] = Math.floor(Math.random() * 21) + 25;
        } else {
          ((s as any).npcgeneratecVars ?? {})['virgin'] = Math.floor(Math.random() * 12) + 19;
          ((s as any).npcgeneratecVars ?? {})['mind'] = Math.floor(Math.random() * 21) + 40;
          ((s as any).npcgeneratecVars ?? {})['body'] = Math.floor(Math.random() * 21) + 20;
        }
      }
    }
  }
  (s as any).temp_statmin = Math.min(((s as any).npcgeneratecVars ?? {})?.['age'] / 2, 20);
  // TODO-QSP: npc_stren[$ARGS[1]]    = rand(temp_statmin, npcgeneratecVars['body'])
  // TODO-QSP: npc_agil[$ARGS[1]]    = rand(temp_statmin, npcgeneratecVars['body'])
  // TODO-QSP: npc_vital[$ARGS[1]]    = rand(temp_statmin, npcgeneratecVars['body'])
  // TODO-QSP: npc_intel[$ARGS[1]]    = rand(temp_statmin, npcgeneratecVars['mind'])
  // TODO-QSP: npc_prcptn[$ARGS[1]]  = rand(temp_statmin, npcgeneratecVars['mind'])
  // TODO-QSP: npc_react[$ARGS[1]]    = rand(temp_statmin, npcgeneratecVars['mind'])
  // TODO-QSP: npc_chrsm[$ARGS[1]]    = rand(npcgeneratecVars['body'] / 2, npcgeneratecVars['mind'])
  // TODO-QSP: npc_sprt[$ARGS[1]]    = rand(npcgeneratecVars['body'] / 2, npcgeneratecVars['mind'])
  // TODO-QSP: npc_magik[$ARGS[1]]    = 0
  if (((s as any).npcgeneratecVars ?? 0)?.['virgin'] < 20) {
    // TODO-QSP: npc_sexskill[$ARGS[1]] = 0
  } else {
    // TODO-QSP: npc_sexskill[$ARGS[1]] = rand(1, 100)
  }
  scene.build();
}

function enterSetDetails(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
    ((s as any).npcgeneratecVars ?? {})['firstname'] = qspFunc(s, 'npcrnamefile', 'rusMale');
    qspCall(s, 'npcgeneratec', 'gen_dick');
    qspCall(s, 'npcgeneratec', 'set_dick', ((s as any).locArgs?.[1] ?? 0));
    // TODO-QSP: npc_gender[$ARGS[1]] = 0
    ((s as any).npcgeneratecVars ?? {})['av_height'] = 175;
    // TODO-QSP: npc_height[$ARGS[1]] = npcgeneratecVars['av_height'] + rand(-10, 10) + rand(-8, 8) + rand(-5, 5)
    ((s as any).npcgeneratecVars ?? {})['av_weight'] = 68;
    // TODO-QSP: npc_weight[$ARGS[1]] = npcgeneratecVars['av_weight'] + rand(-23, 23)
    // TODO-QSP: $npc_notes[$ARGS[1]] = 'A male.'
    // TODO-QSP: npc_bust[$ARGS[1]] = 0
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 1) {
      ((s as any).npcgeneratecVars ?? {})['firstname'] = qspFunc(s, 'npcrnamefile', 'rusFemale');
      // TODO-QSP: npc_gender[$ARGS[1]] = 1
      ((s as any).npcgeneratecVars ?? {})['av_height'] = 165;
      // TODO-QSP: npc_height[$ARGS[1]] = npcgeneratecVars['av_height'] + rand(-10, 10) + rand(-8, 8) + rand(-5, 5)
      ((s as any).npcgeneratecVars ?? {})['av_weight'] = 60;
      // TODO-QSP: npc_weight[$ARGS[1]] = npcgeneratecVars['av_weight'] + rand(-21, 21)
      // TODO-QSP: npc_spermpot[$ARGS[1]] = -1
      // TODO-QSP: npc_spermvol[$ARGS[1]] = -1
      // TODO-QSP: $npc_thdick[$ARGS[1]] = 'clitoris'
      // TODO-QSP: npc_dick[$ARGS[1]] = rand(0, 1)
      // TODO-QSP: $npc_notes[$ARGS[1]] = 'A female.'
      // TODO-QSP: npc_bust[$ARGS[1]] = rand(0, 15) + rand(0, 15) + rand(0, 15)
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        // TODO-QSP: npc_bust[$ARGS[1]] += rand(0, 15)
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
        ((s as any).npcgeneratecVars ?? {})['firstname'] = qspFunc(s, 'npcrnamefile', 'rusFemale');
        qspCall(s, 'npcgeneratec', 'gen_dick');
        qspCall(s, 'npcgeneratec', 'set_dick', ((s as any).locArgs?.[1] ?? 0));
        // TODO-QSP: npc_gender[$ARGS[1]] = 1
        ((s as any).npcgeneratecVars ?? {})['av_height'] = 165;
        // TODO-QSP: npc_height[$ARGS[1]] = npcgeneratecVars['av_height'] + rand(-15, 15)
        ((s as any).npcgeneratecVars ?? {})['av_weight'] = 60;
        // TODO-QSP: npc_weight[$ARGS[1]] = npcgeneratecVars['av_weight'] + rand(-21, 21)
        // TODO-QSP: npc_spermpot[$ARGS[1]] = -1
        // TODO-QSP: $npc_thdick[$ARGS[1]] = 'clitoris'
        // TODO-QSP: $npc_notes[$ARGS[1]] = 'A female Hermaphrodite.'
        // TODO-QSP: npc_bust[$ARGS[1]] = rand(0, 15) + rand(0, 15) + rand(0, 15)
      } else {
        ((s as any).npcgeneratecVars ?? {})['firstname'] = qspFunc(s, 'npcrnamefile', 'rusMale');
        qspCall(s, 'npcgeneratec', 'gen_dick');
        qspCall(s, 'npcgeneratec', 'set_dick', ((s as any).locArgs?.[1] ?? 0));
        // TODO-QSP: npc_gender[$ARGS[1]] = 0
        ((s as any).npcgeneratecVars ?? {})['av_height'] = 175;
        // TODO-QSP: npc_height[$ARGS[1]] = npcgeneratecVars['av_height'] + rand(-15, 15)
        ((s as any).npcgeneratecVars ?? {})['av_weight'] = 68;
        // TODO-QSP: npc_weight[$ARGS[1]] = npcgeneratecVars['av_height'] + rand(-15, 15)
        // TODO-QSP: $npc_notes[$ARGS[1]] = 'A male Hermaphrodite.'
        // TODO-QSP: npc_bust[$ARGS[1]] = rand(0, 10)
      }
    }
  }
  ((s as any).npcgeneratecVars ?? {})['nickname'] = qspFunc(s, 'npcrnamefile', 'get_nickname', ((s as any).npcgeneratecVars ?? 0)?.['firstname']);
  ((s as any).npcgeneratecVars ?? {})['lastname'] = qspFunc(s, 'npcrnamefile', 'rusSur');
  // TODO-QSP: npc_haircol[$ARGS[1]] = rand(1, 4)
  if (((s as any).npc_haircol ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: $npc_hair_desc[$ARGS[1]] = 'black'
  } else {
    if (((s as any).npc_haircol ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
      // TODO-QSP: $npc_hair_desc[$ARGS[1]] = 'blonde'
    } else {
      if (((s as any).npc_haircol ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3) {
        // TODO-QSP: $npc_hair_desc[$ARGS[1]] = 'brown'
      } else {
        if (((s as any).npc_haircol ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 4) {
          // TODO-QSP: $npc_hair_desc[$ARGS[1]] = 'red'
        }
      }
    }
  }
  // TODO-QSP: $npc_firstname[$ARGS[1]] = $npcgeneratecVars['firstname']
  // TODO-QSP: $npc_nickname[$ARGS[1]] = $npcgeneratecVars['nickname']
  // TODO-QSP: $npc_lastname[$ARGS[1]] = $npcgeneratecVars['lastname']
  if (((s as any).npcgeneratecVars ?? 0)?.['anonymous'] === 0  ||  ((s as any).npcgeneratecVars ?? 0)?.['name'] === '') {
    // TODO-QSP: $npc_usedname[$ARGS[1]] = $npcgeneratecVars['firstname']
  } else {
    // TODO-QSP: $npc_usedname[$ARGS[1]] = $npcgeneratecVars['name']
  }
  scene.build();
}

function enterGenDick(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'tiny') {
    ((s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
    ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 8;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'short') {
      ((s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
      ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 10;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'chode') {
        ((s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
        ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 12;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'skinny') {
          ((s as any).npcgeneratecVars ?? {})['dick_length'] = 12;
          ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 9;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'normal') {
            ((s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
            ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 11;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'thick') {
              ((s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
              ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 13;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'long') {
                ((s as any).npcgeneratecVars ?? {})['dick_length'] = 17;
                ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 10;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'huge') {
                  ((s as any).npcgeneratecVars ?? {})['dick_length'] = 17;
                  ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 12;
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'enormous') {
                    ((s as any).npcgeneratecVars ?? {})['dick_length'] = 17;
                    ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 14;
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 'lengthy') {
                      ((s as any).npcgeneratecVars ?? {})['dick_length'] = 22;
                      ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 11;
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 'gigantic') {
                        ((s as any).npcgeneratecVars ?? {})['dick_length'] = 22;
                        ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 13;
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 'monstrous') {
                          ((s as any).npcgeneratecVars ?? {})['dick_length'] = 22;
                          ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 15;
                        } else {
                          ((s as any).npcgeneratecVars ?? {})['dick_length'] = 1 + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1);
                          if ((!(Math.floor(Math.random() * 7) + 0))) {
                            ((s as any).npcgeneratecVars ?? {})['dick_length'] = (((s as any).npcgeneratecVars ?? {})['dick_length'] ?? 0) + (Math.floor(Math.random() * 8) + 1);
                          }
                          if ((!(Math.floor(Math.random() * 5) + 0))) {
                            ((s as any).npcgeneratecVars ?? {})['dick_length'] = (((s as any).npcgeneratecVars ?? {})['dick_length'] ?? 0) + (Math.floor(Math.random() * 6) + 1);
                          }
                          if ((!(Math.floor(Math.random() * 3) + 0))) {
                            ((s as any).npcgeneratecVars ?? {})['dick_length'] = (((s as any).npcgeneratecVars ?? {})['dick_length'] ?? 0) + (Math.floor(Math.random() * 4) + 1);
                          }
                          if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] > 30) {
                            ((s as any).npcgeneratecVars ?? {})['dick_length'] = 30;
                          }
                          if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 8) {
                            ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 10;
                          } else {
                            if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 11) {
                              ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 11;
                            } else {
                              if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 14) {
                                ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 12;
                              } else {
                                if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 20) {
                                  ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 13;
                                } else {
                                  if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 23) {
                                    ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 14;
                                  } else {
                                    ((s as any).npcgeneratecVars ?? {})['dick_girth'] = 15;
                                  }
                                }
                              }
                            }
                          }
                          ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 18) + 1;
                          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
                            ((s as any).npcgeneratecVars ?? {})['dick_girth'] = (((s as any).npcgeneratecVars ?? {})['dick_girth'] ?? 0) - (3);
                          } else {
                            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 3) {
                              ((s as any).npcgeneratecVars ?? {})['dick_girth'] = (((s as any).npcgeneratecVars ?? {})['dick_girth'] ?? 0) - (2);
                            } else {
                              if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 6) {
                                ((s as any).npcgeneratecVars ?? {})['dick_girth'] = (((s as any).npcgeneratecVars ?? {})['dick_girth'] ?? 0) - (1);
                              } else {
                                if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 7) {
                                  ((s as any).npcgeneratecVars ?? {})['dick_girth'] = (((s as any).npcgeneratecVars ?? {})['dick_girth'] ?? 0) + (0);
                                } else {
                                  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 13) {
                                    ((s as any).npcgeneratecVars ?? {})['dick_girth'] = (((s as any).npcgeneratecVars ?? {})['dick_girth'] ?? 0) + (1);
                                  } else {
                                    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 16) {
                                      ((s as any).npcgeneratecVars ?? {})['dick_girth'] = (((s as any).npcgeneratecVars ?? {})['dick_girth'] ?? 0) + (2);
                                    } else {
                                      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 18) {
                                        ((s as any).npcgeneratecVars ?? {})['dick_girth'] = (((s as any).npcgeneratecVars ?? {})['dick_girth'] ?? 0) + (3);
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
  if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 9) {
    ((s as any).npcgeneratecVars ?? {})['thdick'] = 'skinny';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 10) {
      ((s as any).npcgeneratecVars ?? {})['thdick'] = 'slim';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 11) {
        ((s as any).npcgeneratecVars ?? {})['thdick'] = 'well proportioned';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 12) {
          ((s as any).npcgeneratecVars ?? {})['thdick'] = 'thicker than average';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 13) {
            ((s as any).npcgeneratecVars ?? {})['thdick'] = 'thick';
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 14) {
              ((s as any).npcgeneratecVars ?? {})['thdick'] = 'massive';
            } else {
              ((s as any).npcgeneratecVars ?? {})['thdick'] = 'monstrous';
            }
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 8) {
    ((s as any).npcgeneratecVars ?? {})['dick_class'] = 'short';
    if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 9) {
      ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'tiny';
      ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'micropenis';
      ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 7501) + 4000;
      ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 41) + 5;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 11) {
        ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'short';
        ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'short cock';
        ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 7001) + 5000;
        ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 41) + 10;
      } else {
        ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'chode';
        ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'chode';
        ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6501) + 6000;
        ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 41) + 15;
      }
    }
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 14) {
      ((s as any).npcgeneratecVars ?? {})['dick_class'] = 'average';
      if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 10) {
        ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'skinny';
        ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'pencil dick';
        ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6501) + 6000;
        ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 41) + 15;
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 12) {
          ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'normal';
          ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'dick';
          ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6001) + 7000;
          ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 41) + 20;
        } else {
          ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'thick';
          ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'thick cock';
          ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6001) + 7500;
          ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 42) + 22;
        }
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 19) {
        ((s as any).npcgeneratecVars ?? {})['dick_class'] = 'big';
        if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 11) {
          ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'long';
          ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'long cock';
          ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6001) + 7500;
          ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 42) + 22;
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 13) {
            ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'huge';
            ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'sizeable cock';
            ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6001) + 8000;
            ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 41) + 25;
          } else {
            ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'enormous';
            ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'enormous cock';
            ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6001) + 8500;
            ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 42) + 27;
          }
        }
      } else {
        ((s as any).npcgeneratecVars ?? {})['dick_class'] = 'extra_big';
        if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 12) {
          ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'lengthy';
          ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'lengthy dick';
          ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6001) + 8500;
          ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 42) + 27;
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 14) {
            ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'gigantic';
            ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'gigantic cock';
            ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6001) + 9000;
            ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 41) + 30;
          } else {
            ((s as any).npcgeneratecVars ?? {})['dick_desc'] = 'monstrous';
            ((s as any).npcgeneratecVars ?? {})['dick_noun'] = 'monster cock';
            ((s as any).npcgeneratecVars ?? {})['potency'] = Math.floor(Math.random() * 6001) + 9500;
            ((s as any).npcgeneratecVars ?? {})['volume'] = Math.floor(Math.random() * 42) + 32;
          }
        }
      }
    }
  }
  scene.build();
}

function enterSetDick(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_dick[$ARGS[1]] = npcgeneratecVars['dick_length']
  // TODO-QSP: npc_girth[$ARGS[1]] = npcgeneratecVars['dick_girth']
  // TODO-QSP: $npc_thdick[$ARGS[1]] = $npcgeneratecVars['thdick']
  // TODO-QSP: $npc_dick_class[$ARGS[1]] = $npcgeneratecVars['dick_class']
  // TODO-QSP: $npc_dick_desc[$ARGS[1]] = $npcgeneratecVars['dick_desc']
  // TODO-QSP: $npc_dick_noun[$ARGS[1]] = $npcgeneratecVars['dick_noun']
  // TODO-QSP: npc_spermpot[$ARGS[1]] = npcgeneratecVars['potency']
  // TODO-QSP: npc_spermvol[$ARGS[1]] = npcgeneratecVars['volume']
  scene.build();
}

function enterSetLifestyle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcgeneratecVars ?? 0)?.['loc'] === 1) {
    // TODO-QSP: $npc_residence[$ARGS[1]] = 'pav_residential'
    // TODO-QSP: npc_finance[$ARGS[1]] = rand(0, 1)
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['loc'] === 2) {
      // TODO-QSP: $npc_residence[$ARGS[1]] = 'uni_grounds'
      // TODO-QSP: npc_finance[$ARGS[1]] = 0
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['loc'] === 3) {
        // TODO-QSP: $npc_residence[$ARGS[1]] = 'city_residential'
        // TODO-QSP: npc_finance[$ARGS[1]] = rand(1, 2)
      } else {
        // TODO-QSP: $npc_residence[$ARGS[1]] = 'city_center'
        // TODO-QSP: npc_finance[$ARGS[1]] = 2
      }
    }
  }
  if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      // TODO-QSP: npc_start_free_time[$ARGS[1]] = 8
      // TODO-QSP: npc_end_free_time[$ARGS[1]] = 12
      // TODO-QSP: npc_work_start[$ARGS[1]] = 13
      // TODO-QSP: npc_work_end[$ARGS[1]] = 21
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        // TODO-QSP: npc_start_free_time[$ARGS[1]] = 15
        // TODO-QSP: npc_end_free_time[$ARGS[1]] = 20
        // TODO-QSP: npc_work_start[$ARGS[1]] = 6
        // TODO-QSP: npc_work_end[$ARGS[1]] = 14
      } else {
        // TODO-QSP: npc_start_free_time[$ARGS[1]] = 18
        // TODO-QSP: npc_end_free_time[$ARGS[1]] = 22
        // TODO-QSP: npc_work_start[$ARGS[1]] = 9
        // TODO-QSP: npc_work_end[$ARGS[1]] = 17
      }
    }
    if (((s as any).npc_residence ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 'pav_residential'  &&  ((s as any).npc_residence ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 'city_center'  &&  ((s as any).npcgeneratecVars ?? 0)?.['age'] < 28) {
      // TODO-QSP: npc_student[$ARGS[1]] = rand(0, 1)
      // TODO-QSP: npc_apt_type[$ARGS[1]] = rand(1, 4)
    } else {
      if (((s as any).npc_residence ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'uni_grounds') {
        // TODO-QSP: npc_student[$ARGS[1]] = 1
        // TODO-QSP: npc_apt_type[$ARGS[1]] = 2
      } else {
        // TODO-QSP: npc_apt_type[$ARGS[1]] = rand(2, 4)
      }
    }
    // TODO-QSP: npc_style[$ARGS[1]] = rand(1, 5)
  } else {
    if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        // TODO-QSP: npc_start_free_time[$ARGS[1]] = 8
        // TODO-QSP: npc_end_free_time[$ARGS[1]] = 12
        // TODO-QSP: npc_work_start[$ARGS[1]] = 13
        // TODO-QSP: npc_work_end[$ARGS[1]] = 21
      } else {
        // TODO-QSP: npc_start_free_time[$ARGS[1]] = 18
        // TODO-QSP: npc_end_free_time[$ARGS[1]] = 22
        // TODO-QSP: npc_work_start[$ARGS[1]] = 9
        // TODO-QSP: npc_work_end[$ARGS[1]] = 17
      }
      // TODO-QSP: npc_apt_type[$ARGS[1]] = rand(2, 5)
      // TODO-QSP: npc_car[$ARGS[1]] = rand(-3, 1)
      // TODO-QSP: npc_style[$ARGS[1]] = rand(1, 5)
    } else {
      if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: npc_start_free_time[$ARGS[1]] = 8
          // TODO-QSP: npc_end_free_time[$ARGS[1]] = 12
          // TODO-QSP: npc_work_start[$ARGS[1]] = 13
          // TODO-QSP: npc_work_end[$ARGS[1]] = 21
        } else {
          // TODO-QSP: npc_start_free_time[$ARGS[1]] = 18
          // TODO-QSP: npc_end_free_time[$ARGS[1]] = 22
          // TODO-QSP: npc_work_start[$ARGS[1]] = 9
          // TODO-QSP: npc_work_end[$ARGS[1]] = 17
        }
        // TODO-QSP: npc_apt_type[$ARGS[1]] = rand(5, 6)
        // TODO-QSP: npc_car[$ARGS[1]] = rand(0, 1)
        // TODO-QSP: npc_style[$ARGS[1]] = 1 + (rand(2, 6) mod 6)
      }
    }
  }
  if (((s as any).npc_apt_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 4) {
    // TODO-QSP: npc_apt_type[$ARGS[1]] = 5
  }
  if (((s as any).npc_apt_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 6) {
    // TODO-QSP: npc_apt_type[$ARGS[1]] = 5
  }
  // TODO-QSP: npc_day_off[$ARGS[1]] = rand(1, 7)
  if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: $npc_style_label[$ARGS[1]] = 'normal'
    // TODO-QSP: $npc_outfit[$ARGS[1]] = 'jeans and a ' + iif(npc_gender[$ARGS[1]] = 0, 'sweater', 'blouse')
  } else {
    if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
      // TODO-QSP: $npc_style_label[$ARGS[1]] = 'gopnik'
      // TODO-QSP: $npc_outfit[$ARGS[1]] = 'a tracksuit'
    } else {
      if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3) {
        // TODO-QSP: $npc_style_label[$ARGS[1]] = 'nerdy'
        // TODO-QSP: $npc_outfit[$ARGS[1]] = 'jeans and a ' + iif(rand(0, 1), 't.A.T.u ', 'Tetris ') + 'shirt'
      } else {
        if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 4) {
          // TODO-QSP: $npc_style_label[$ARGS[1]] = 'sporty'
          // TODO-QSP: $npc_outfit[$ARGS[1]] = iif(npc_gender[$ARGS[1]] = 0, 'jogging', 'hot') + ' pants and a tanktop'
        } else {
          if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 5) {
            // TODO-QSP: $npc_style_label[$ARGS[1]] = 'fashionable'
            // TODO-QSP: $npc_outfit[$ARGS[1]] = 'a fashionable ' + iif(npc_gender[$ARGS[1]] = 0, 'suit', 'dress')
          } else {
            // TODO-QSP: $npc_style_label[$ARGS[1]] = 'businessman'
            // TODO-QSP: $npc_outfit[$ARGS[1]] = 'an expensive ' + iif(npc_gender[$ARGS[1]] = 0, 'suit', 'dress')
          }
        }
      }
    }
  }
  ((s as any).npcgeneratecVars ?? {})['home_path'] = 'images/shared/romance/lovers/homes';
  if (((s as any).npc_apt_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 6) {
    // TODO-QSP: $npc_apt_type_label[$ARGS[1]] = 'mansion'
    if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3) {
      ((s as any).npcgeneratecVars ?? {})['spare_room'] = 1;
    } else {
      if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2  ||  ((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 4) {
        ((s as any).npcgeneratecVars ?? {})['spare_room'] = 2;
      } else {
        ((s as any).npcgeneratecVars ?? {})['spare_room'] = Math.floor(Math.random() * 2) + 1;
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['spare_room'] === 1) {
      // TODO-QSP: $npc_apt_sparetype[$ARGS[1]] = 'gaming'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['spare_room'] === 2) {
        // TODO-QSP: $npc_apt_sparetype[$ARGS[1]] = 'gym'
      }
    }
    // TODO-QSP: npc_apt_number[$ARGS[1]] = rand(1, 2)
    // TODO-QSP: $npc_apt_bedroom[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/mans...
    // TODO-QSP: $npc_apt_guestroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/mans...
    // TODO-QSP: $npc_apt_kitchen[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/mans...
    // TODO-QSP: $npc_apt_livingroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/man...
    // TODO-QSP: $npc_apt_bathroom[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/man...
    // TODO-QSP: $npc_apt_guest_bathroom[$ARGS[1]]  = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/m...
    // TODO-QSP: $npc_apt_hall[$ARGS[1]]        = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/mansi...
    // TODO-QSP: $npc_apt_office[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/mansi...
    // TODO-QSP: $npc_apt_pool[$ARGS[1]]        = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/mansi...
    // TODO-QSP: $npc_apt_sauna[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/mansio...
  } else {
    if (((s as any).npc_apt_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 4  ||  ((s as any).npc_apt_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 5) {
      // TODO-QSP: $npc_apt_type_label[$ARGS[1]] = 'multi_bedroom'
      if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3) {
        ((s as any).npcgeneratecVars ?? {})['spare_room'] = 1;
      } else {
        if (((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2  ||  ((s as any).npc_style ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 4) {
          ((s as any).npcgeneratecVars ?? {})['spare_room'] = 2;
        } else {
          ((s as any).npcgeneratecVars ?? {})['spare_room'] = Math.floor(Math.random() * 2) + 1;
        }
      }
      if (((s as any).npcgeneratecVars ?? 0)?.['spare_room'] === 1) {
        // TODO-QSP: $npc_apt_sparetype[$ARGS[1]] = 'gaming'
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['spare_room'] === 2) {
          // TODO-QSP: $npc_apt_sparetype[$ARGS[1]] = 'gym'
        }
      }
      // TODO-QSP: npc_apt_number[$ARGS[1]] = rand(1, 2)
      // TODO-QSP: $npc_apt_bedroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/multib...
      // TODO-QSP: $npc_apt_kitchen[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/multib...
      // TODO-QSP: $npc_apt_livingroom[$ARGS[1]]  = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/multi...
      // TODO-QSP: $npc_apt_bathroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/multi...
      // TODO-QSP: $npc_apt_hall[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/multibe...
      // TODO-QSP: $npc_apt_spare[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/multibed...
    } else {
      if (((s as any).npc_apt_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3) {
        // TODO-QSP: npc_apt_number[$ARGS[1]] = rand(1, 3)
        // TODO-QSP: $npc_apt_type_label[$ARGS[1]] = 'one_bedroom'
        // TODO-QSP: $npc_apt_bedroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedro...
        // TODO-QSP: $npc_apt_kitchen[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedro...
        // TODO-QSP: $npc_apt_livingroom[$ARGS[1]]  = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedr...
        // TODO-QSP: $npc_apt_bathroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedr...
        // TODO-QSP: $npc_apt_hall[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedroo...
      } else {
        if (((s as any).npc_apt_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
          // TODO-QSP: npc_apt_number[$ARGS[1]] = rand(1, 2)
          // TODO-QSP: $npc_apt_type_label[$ARGS[1]] = 'studio'
          // TODO-QSP: $npc_apt_bedroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/studio...
          // TODO-QSP: $npc_apt_kitchen[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/studio...
          // TODO-QSP: $npc_apt_livingroom[$ARGS[1]]  = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/studi...
          // TODO-QSP: $npc_apt_bathroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/studi...
          // TODO-QSP: $npc_apt_hall[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/studio/...
        } else {
          if (((s as any).npc_apt_type ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
            // TODO-QSP: npc_apt_number[$ARGS[1]] = rand(1, 3)
            // TODO-QSP: $npc_apt_type_label[$ARGS[1]] = 'student_dorm'
            // TODO-QSP: $npc_apt_bedroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedro...
            // TODO-QSP: $npc_apt_kitchen[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedro...
            // TODO-QSP: $npc_apt_livingroom[$ARGS[1]]  = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedr...
            // TODO-QSP: $npc_apt_bathroom[$ARGS[1]]    = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/1bedr...
            // TODO-QSP: $npc_apt_hall[$ARGS[1]]      = '<img <<$set_imgh>> src="<<$npcgeneratecVars[''home_path'']>>/studio/...
          }
        }
      }
    }
  }
  scene.build();
}

function enterSetOccupation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    qspCall(s, 'npcgeneratec', 'poor_jobs', ((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      qspCall(s, 'npcgeneratec', 'middle_jobs', ((s as any).locArgs?.[1] ?? 0));
    } else {
      if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
        qspCall(s, 'npcgeneratec', 'rich_jobs', ((s as any).locArgs?.[1] ?? 0));
      }
    }
  }
  scene.build();
}

function enterPoorJobs(s: GameState, scene: SceneBuilder): void {
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 16) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    // TODO-QSP: npc_criminal[$ARGS[1]] = 1
    // TODO-QSP: npc_criminal_open[$ARGS[1]] = rand(0, 1)
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 4) + 0;
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      // TODO-QSP: $npc_occupation[$ARGS[1]] = 'pimp'
      // TODO-QSP: npc_gun[$ARGS[1]] = rand(0, 1)
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        // TODO-QSP: $npc_occupation[$ARGS[1]] = 'drug_dealer'
        // TODO-QSP: npc_gun[$ARGS[1]] = 1
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          // TODO-QSP: $npc_occupation[$ARGS[1]] = 'enforcer'
          // TODO-QSP: npc_gun[$ARGS[1]] = 1
        } else {
          // TODO-QSP: $npc_occupation[$ARGS[1]] = 'thief'
        }
      }
    }
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: $npc_police_type[$ARGS[1]] = 'undercover'
      // TODO-QSP: npc_criminal[$ARGS[1]] = 1
      // TODO-QSP: npc_gun[$ARGS[1]] = 1
      // TODO-QSP: npc_criminal_open[$ARGS[1]] = rand(0, 1)
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        // TODO-QSP: $npc_occupation[$ARGS[1]] = 'enforcer'
      } else {
        // TODO-QSP: $npc_occupation[$ARGS[1]] = 'thief'
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        // TODO-QSP: $npc_occupation[$ARGS[1]] = 'police_officer'
        // TODO-QSP: npc_gun[$ARGS[1]] = 1
        if ((!(Math.floor(Math.random() * 3) + 0))) {
          // TODO-QSP: $npc_police_type[$ARGS[1]] = 'honest'
        } else {
          // TODO-QSP: $npc_police_type[$ARGS[1]] = 'corrupt'
        }
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
          // TODO-QSP: $npc_occupation[$ARGS[1]] = 'cashier_supermarket'
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'cashier_liquor'
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
              // TODO-QSP: $npc_occupation[$ARGS[1]] = 'cashier_coffee'
            } else {
              if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 6) {
                // TODO-QSP: $npc_occupation[$ARGS[1]] = 'barista'
              } else {
                if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 7) {
                  // TODO-QSP: $npc_occupation[$ARGS[1]] = 'fast_food'
                } else {
                  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 8) {
                    // TODO-QSP: $npc_occupation[$ARGS[1]] = 'taxi_driver'
                    // TODO-QSP: npc_car[$ARGS[1]] = 1
                  } else {
                    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 9) {
                      // TODO-QSP: $npc_occupation[$ARGS[1]] = 'masseuse'
                    } else {
                      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 10) {
                        // TODO-QSP: $npc_occupation[$ARGS[1]] = 'masseuse_sexual'
                      } else {
                        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 11) {
                          // TODO-QSP: $npc_occupation[$ARGS[1]] = 'factory'
                        } else {
                          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 12) {
                            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'bartender'
                          } else {
                            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 13) {
                              // TODO-QSP: $npc_occupation[$ARGS[1]] = 'mechanic'
                            } else {
                              if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 14) {
                                // TODO-QSP: $npc_occupation[$ARGS[1]] = 'line_cook'
                              } else {
                                // TODO-QSP: $npc_occupation[$ARGS[1]] = 'waiter'
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
  scene.build();
}

function enterMiddleJobs(s: GameState, scene: SceneBuilder): void {
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 11) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    // TODO-QSP: $npc_occupation[$ARGS[1]] = 'masseuse'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: $npc_occupation[$ARGS[1]] = 'masseuse_sexual'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        // TODO-QSP: $npc_occupation[$ARGS[1]] = 'factory'
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
          // TODO-QSP: $npc_occupation[$ARGS[1]] = 'bartender'
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'mechanic'
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
              // TODO-QSP: $npc_occupation[$ARGS[1]] = 'line_cook'
            } else {
              if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 6) {
                // TODO-QSP: $npc_occupation[$ARGS[1]] = 'waiter'
              } else {
                if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 7) {
                  // TODO-QSP: $npc_occupation[$ARGS[1]] = 'personal_trainer'
                } else {
                  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 8) {
                    // TODO-QSP: $npc_occupation[$ARGS[1]] = 'programmer'
                  } else {
                    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 9) {
                      // TODO-QSP: npc_criminal[$ARGS[1]] = 1
                      // TODO-QSP: npc_criminal_open[$ARGS[1]] = rand(0, 1)
                      ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 4) + 0;
                      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
                        // TODO-QSP: $npc_occupation[$ARGS[1]] = 'pimp'
                      } else {
                        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
                          // TODO-QSP: $npc_occupation[$ARGS[1]] = 'drug_dealer'
                        } else {
                          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
                            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'enforcer'
                          } else {
                            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'thief'
                          }
                        }
                      }
                    } else {
                      // TODO-QSP: $npc_occupation[$ARGS[1]] = 'businessman'
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
  scene.build();
}

function enterRichJobs(s: GameState, scene: SceneBuilder): void {
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 7) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    // TODO-QSP: $npc_occupation[$ARGS[1]] = 'personal_trainer'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: $npc_occupation[$ARGS[1]] = 'programmer'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        // TODO-QSP: npc_criminal[$ARGS[1]] = 1
        // TODO-QSP: npc_criminal_open[$ARGS[1]] = rand(0, 1)
        ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
          // TODO-QSP: $npc_occupation[$ARGS[1]] = 'pimp'
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'drug_dealer'
          } else {
            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'enforcer'
          }
        }
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
          // TODO-QSP: $npc_police_type[$ARGS[1]] = 'undercover'
          // TODO-QSP: npc_criminal[$ARGS[1]] = 1
          // TODO-QSP: npc_criminal_open[$ARGS[1]] = rand(0, 1)
          ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'enforcer'
          } else {
            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'thief'
          }
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
            // TODO-QSP: $npc_occupation[$ARGS[1]] = 'businessman'
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
              // TODO-QSP: $npc_occupation[$ARGS[1]] = 'lawyer'
            } else {
              // TODO-QSP: $npc_occupation[$ARGS[1]] = 'investment_banker'
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterSetPersonality(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    // TODO-QSP: $npc_perstype[$ARGS[1]] = 'E'
  } else {
    // TODO-QSP: $npc_perstype[$ARGS[1]] = 'I'
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    // TODO-QSP: $npc_perstype[$ARGS[1]] += 'S'
  } else {
    // TODO-QSP: $npc_perstype[$ARGS[1]] += 'N'
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    // TODO-QSP: $npc_perstype[$ARGS[1]] += 'T'
  } else {
    // TODO-QSP: $npc_perstype[$ARGS[1]] += 'F'
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    // TODO-QSP: $npc_perstype[$ARGS[1]] += 'J'
  } else {
    // TODO-QSP: $npc_perstype[$ARGS[1]] += 'P'
  }
  if (((((s as any).npc_perstype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]).slice((3)-1, ((3)-1)+(1))) === 'T') {
    if (((((s as any).npc_perstype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]).slice((1)-1, ((1)-1)+(1))) === 'E') {
      ((s as any).npcgeneratecVars ?? {})['humor'] = Math.floor(Math.random() * 2) + 2;
    } else {
      ((s as any).npcgeneratecVars ?? {})['humor'] = 3;
    }
  } else {
    if (((((s as any).npc_perstype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]).slice((1)-1, ((1)-1)+(1))) === 'E') {
      ((s as any).npcgeneratecVars ?? {})['humor'] = Math.floor(Math.random() * 2) + 1;
    } else {
      ((s as any).npcgeneratecVars ?? {})['humor'] = 1;
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['humor'] === 1) {
    // TODO-QSP: $npc_humor[$ARGS[1]] = 'childish'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['humor'] === 2) {
      // TODO-QSP: $npc_humor[$ARGS[1]] = 'perverted'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['humor'] === 3) {
        // TODO-QSP: $npc_humor[$ARGS[1]] = 'intellectual'
      }
    }
  }
  // TODO-QSP: npc_smoker[$ARGS[1]] = rand(0, 2)
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 50) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 9) {
    // TODO-QSP: npc_sexdrive[$ARGS[1]] = rand(1, 3)
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 29) {
      // TODO-QSP: npc_sexdrive[$ARGS[1]] = rand(3, 5)
    } else {
      // TODO-QSP: npc_sexdrive[$ARGS[1]] = rand(1, 10)
    }
  }
  if (((s as any).npc_sexdrive ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 5) {
    ((s as any).npc_energetic ?? {})[String((s as any).npcID ?? 0)] = Math.floor(Math.random() * 2) + 0;
  }
  if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'perverted'  &&  ((s as any).npc_sexdrive ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 3) {
    // TODO-QSP: npc_pervert[$ARGS[1]] = 1
  } else {
    // TODO-QSP: npc_pervert[$ARGS[1]] = 0
  }
  if ((!(Math.floor(Math.random() * 6) + 0))) {
    // TODO-QSP: npc_mj[$ARGS[1]] = 1 + (rand(0, 3) / 3)
  }
  if (((((s as any).npc_perstype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]).slice((1)-1, ((1)-1)+(1))) === 'E') {
    // TODO-QSP: $npc_door_pref[$ARGS[1]] = 'outdoor'
  } else {
    // TODO-QSP: $npc_door_pref[$ARGS[1]] = 'indoor'
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 1;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
    // TODO-QSP: $npc_rel_goal[$ARGS[1]] = 'sex'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
      // TODO-QSP: $npc_rel_goal[$ARGS[1]] = 'casual'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
        // TODO-QSP: $npc_rel_goal[$ARGS[1]] = 'serious'
      }
    }
  }
  // TODO-QSP: npc_fidelity[$ARGS[1]] = rand(1, 10)
  if (((s as any).npc_fidelity ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 4) {
    // TODO-QSP: $npc_fidelity_label[$ARGS[1]] = 'cheater'
  } else {
    if (((s as any).npc_fidelity ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 6) {
      // TODO-QSP: $npc_fidelity_label[$ARGS[1]] = 'seduced'
    } else {
      if (((s as any).npc_fidelity ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 7) {
        // TODO-QSP: $npc_fidelity_label[$ARGS[1]] = 'open'
      } else {
        // TODO-QSP: $npc_fidelity_label[$ARGS[1]] = 'faithful'
      }
    }
  }
  if (((s as any).npc_fidelity ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= 5) {
    if (((s as any).npcgeneratecVars ?? 0)?.['age'] >= 26  &&  (Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        // TODO-QSP: npc_wife[$ARGS[1]] = 1
        if (((s as any).npcgeneratecVars ?? 0)?.['age'] >= 38) {
          // TODO-QSP: npc_wife_age[$ARGS[1]] = npcgeneratecVars['age'] - rand(-4,20)
        } else {
          // TODO-QSP: npc_wife_age[$ARGS[1]] = npcgeneratecVars['age'] + rand(-4,4) + rand(-4,4)
        }
        if ((Math.floor(Math.random() * 4) + 1) === 1) {
          // TODO-QSP: $npc_wife_feelings[$ARGS[1]] = 'estranged'
        } else {
          if ((Math.floor(Math.random() * 3) + 1) === 1) {
            // TODO-QSP: $npc_wife_feelings[$ARGS[1]] = 'loveless'
          } else {
            if ((Math.floor(Math.random() * 2) + 1) === 1) {
              // TODO-QSP: $npc_wife_feelings[$ARGS[1]] = 'transactional'
            } else {
              // TODO-QSP: $npc_wife_feelings[$ARGS[1]] = 'love'
            }
          }
        }
      }
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        // TODO-QSP: npc_ex_wife[$ARGS[1]] = 1
        if (((s as any).npcgeneratecVars ?? 0)?.['age'] >= 38) {
          // TODO-QSP: npc_ex_age[$ARGS[1]] = npcgeneratecVars['age'] - rand(-4,20)
        } else {
          // TODO-QSP: npc_ex_age[$ARGS[1]] = npcgeneratecVars['age'] + rand(-4,4) + rand(-4,4)
        }
        // TODO-QSP: npc_divorced[$ARGS[1]] = rand(1,(npc_age[$ARGS[1]]/15))
      }
    } else {
      // TODO-QSP: npc_girlfriend[$ARGS[1]] = rand(0,1)
      if (((s as any).npcgeneratecVars ?? 0)?.['age'] >= 38) {
        // TODO-QSP: npc_gf_age[$ARGS[1]] = npcgeneratecVars['age'] - rand(-4,20)
      } else {
        // TODO-QSP: npc_gf_age[$ARGS[1]] = npcgeneratecVars['age'] + rand(-4,4) + rand(-4,4)
      }
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    // TODO-QSP: npc_earlyriser[$ARGS[1]] = 1
    // TODO-QSP: npc_latesleeper[$ARGS[1]] = 0
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: npc_earlyriser[$ARGS[1]] = 0
      // TODO-QSP: npc_latesleeper[$ARGS[1]] = 1
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    // TODO-QSP: npc_generous[$ARGS[1]] = 1
    // TODO-QSP: npc_selfish[$ARGS[1]] = 0
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: npc_generous[$ARGS[1]] = 0
      // TODO-QSP: npc_selfish[$ARGS[1]] = 1
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    // TODO-QSP: npc_gentle[$ARGS[1]] = 1
    // TODO-QSP: npc_rough[$ARGS[1]] = 0
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: npc_gentle[$ARGS[1]] = 0
      // TODO-QSP: npc_rough[$ARGS[1]] = 1
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    // TODO-QSP: npc_diligent[$ARGS[1]] = 1
    // TODO-QSP: npc_risktaker[$ARGS[1]] = 0
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: npc_diligent[$ARGS[1]] = 0
      // TODO-QSP: npc_risktaker[$ARGS[1]] = 1
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 9) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2 + 2 * ((s as any).npc_diligent ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: npc_messy[$ARGS[1]] = 0
    // TODO-QSP: npc_neat[$ARGS[1]] = 1
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 6) {
      // TODO-QSP: npc_messy[$ARGS[1]] = 1
      // TODO-QSP: npc_neat[$ARGS[1]] = 0
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0) - ((s as any).npc_neat ?? 0)[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 1) {
    // TODO-QSP: $npc_pubes[$ARGS[1]] = 'shaved'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: $npc_pubes[$ARGS[1]] = 'trimmed'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        // TODO-QSP: $npc_pubes[$ARGS[1]] = 'bush'
      }
    }
  }
  // TODO-QSP: npc_argumentative[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 9) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2 + 2 * ((s as any).npc_diligent ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    // TODO-QSP: npc_shy[$ARGS[1]] = 0
    // TODO-QSP: npc_assertive[$ARGS[1]] = 1
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 6) {
      // TODO-QSP: npc_shy[$ARGS[1]] = 1
      // TODO-QSP: npc_assertive[$ARGS[1]] = 0
    }
  }
  // TODO-QSP: npc_willpwr[$ARGS[1]] = rand(1, 50)
  // TODO-QSP: npc_willpwr[$ARGS[1]] += npc_argumentative[$ARGS[1]] * 10
  if (((s as any).npc_shy ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    // TODO-QSP: npc_arrogant[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  }
  if (((s as any).npc_shy ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    // TODO-QSP: npc_pushy[$ARGS[1]] = iif(rand(-3, 1) + 2 * npc_selfish[$ARGS[1]] > 0, 1, 0)
  }
  // TODO-QSP: npc_snob[$ARGS[1]] = iif(rand(-3, 1) + 2 * npc_arrogant[$ARGS[1]] > 0, 1, 0)
  // TODO-QSP: npc_competitive[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  // TODO-QSP: npc_insecure[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  // TODO-QSP: npc_gymrat[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  // TODO-QSP: npc_foodie[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  // TODO-QSP: npc_jealous[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_romantic[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_wander_eyes[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_abusive[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_manipulative[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  if (((s as any).npc_selfish ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 1) {
    // TODO-QSP: npc_caretaker[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  }
  // TODO-QSP: npc_indiscreet[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_womanizer[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_misogynist[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_trust_issues[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    // TODO-QSP: $npc_diet[$ARGS[1]] = 'vegetarian'
  } else {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: $npc_diet[$ARGS[1]] = 'protein'
    } else {
      // TODO-QSP: $npc_diet[$ARGS[1]] = 'normal'
    }
  }
  if (((s as any).npc_humor ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'perverted') {
    // TODO-QSP: npc_pineapple[$ARGS[1]] = iif(rand(0, 4) > 2, 1, 0)
  } else {
    // TODO-QSP: npc_pineapple[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  }
  if (((s as any).npc_pineapple ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  ||  ((s as any).npc_diet ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'vegetarian') {
    // TODO-QSP: $npc_cum_flavor[$ARGS[1]] = 'sweet'
  } else {
    if (((s as any).npc_diet ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'protein') {
      // TODO-QSP: $npc_cum_flavor[$ARGS[1]] = 'bitter'
    } else {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        // TODO-QSP: $npc_cum_flavor[$ARGS[1]] = 'sweet'
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          // TODO-QSP: $npc_cum_flavor[$ARGS[1]] = 'bitter'
        } else {
          // TODO-QSP: $npc_cum_flavor[$ARGS[1]] = 'normal'
        }
      }
    }
  }
  // TODO-QSP: npc_likes_cute[$ARGS[1]]    = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_likes_girly[$ARGS[1]]    = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_likes_gopnik[$ARGS[1]]    = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_likes_tomboyish[$ARGS[1]]  = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_likes_slutty[$ARGS[1]]    = iif(rand(0, 4) = 0, 1, 0)
  if ((Math.floor(Math.random() * 2) + 0) >= 1) {
    if (((s as any).npc_diligent ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      // TODO-QSP: npc_condom_conscious[$ARGS[1]] = max(0, rand(-1, 2))
    } else {
      // TODO-QSP: npc_condom_conscious[$ARGS[1]] = max(0, rand(-2, 2))
    }
  } else {
    if (((s as any).npc_risktaker ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      // TODO-QSP: npc_no_condoms[$ARGS[1]] = max(0, rand(-1, 2))
    } else {
      // TODO-QSP: npc_no_condoms[$ARGS[1]] = max(0, rand(-2, 2))
    }
  }
  if ((Math.floor(Math.random() * 100) + 1) <= 29) {
    // TODO-QSP: npc_condom_conscious[$ARGS[1]] = rand(0,2)
  } else {
    // TODO-QSP: npc_no_condoms[$ARGS[1]] = rand(0,2)
  }
  if (((s as any).npc_condom_conscious ?? 0)[((s as any).locArgs?.[1] ?? 0)] < 0) {
    // TODO-QSP: npc_condom_conscious[$ARGS[1]] = 0
  }
  if (((s as any).npc_no_condoms ?? 0)[((s as any).locArgs?.[1] ?? 0)] < 0) {
    // TODO-QSP: npc_no_condoms[$ARGS[1]] = 0
  }
  if ((!(Math.floor(Math.random() * 50) + 0))) {
    // TODO-QSP: npc_latex_allergy[$ARGS[1]] = 1
    // TODO-QSP: npc_no_condoms[$ARGS[1]] = 1
    // TODO-QSP: npc_condom_conscious[$ARGS[1]] = 0
  }
  if (((s as any).npc_no_condoms ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    if (((s as any).npc_risktaker ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
      // TODO-QSP: $npc_condom_type[$ARGS[1]] = 'extra thin'
    } else {
      if (((s as any).npc_generous ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
        // TODO-QSP: $npc_condom_type[$ARGS[1]] = 'ribbed'
      } else {
        if ((Math.floor(Math.random() * 3) + 1) === 1) {
          // TODO-QSP: $npc_condom_type[$ARGS[1]] = 'normal'
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: $npc_condom_type[$ARGS[1]] = 'extra thin'
          } else {
            // TODO-QSP: $npc_condom_type[$ARGS[1]] = 'ribbed'
          }
        }
      }
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 7) + 1;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
    // TODO-QSP: $npc_fav_pos[$ARGS[1]] = 'miss'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
      // TODO-QSP: $npc_fav_pos[$ARGS[1]] = 'doggy'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
        // TODO-QSP: $npc_fav_pos[$ARGS[1]] = 'cowgirl'
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
          // TODO-QSP: $npc_fav_pos[$ARGS[1]] = 'blowjob'
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
            // TODO-QSP: $npc_fav_pos[$ARGS[1]] = 'titjob'
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 6) {
              // TODO-QSP: $npc_fav_pos[$ARGS[1]] = '69'
            } else {
              // TODO-QSP: $npc_fav_pos[$ARGS[1]] = 'anal'
            }
          }
        }
      }
    }
  }
  if (((s as any).npc_fav_pos ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 'anal') {
    // TODO-QSP: npc_no_anal[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  }
  // TODO-QSP: npc_sex_speed[$ARGS[1]] = rand(1, 3)
  // TODO-QSP: npc_sex_volume[$ARGS[1]] = rand(0, 3)
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 4) + 0;
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0  &&  ((s as any).npc_sex_speed ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      // TODO-QSP: npc_gentle_lover[$ARGS[1]] = 1
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        // TODO-QSP: npc_dirty_lover[$ARGS[1]] = 1
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          // TODO-QSP: npc_sensual_lover[$ARGS[1]] = 1
        }
      }
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 6) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
    // TODO-QSP: $npc_cum_pref[$ARGS[1]] = 'creampie'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
      // TODO-QSP: $npc_cum_pref[$ARGS[1]] = 'mouth'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
        // TODO-QSP: $npc_cum_pref[$ARGS[1]] = 'facial'
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
          // TODO-QSP: $npc_cum_pref[$ARGS[1]] = 'tits'
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
            // TODO-QSP: $npc_cum_pref[$ARGS[1]] = 'pullout'
          }
        }
      }
    }
  }
  if ((Math.floor(Math.random() * 5) + 0) === 0  ||  ((Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'facial')) {
    // TODO-QSP: npc_bukakke_fetish[$ARGS[1]] = 1
  } else {
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).npc_cum_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 'facial') {
      // TODO-QSP: npc_dislikes_facials[$ARGS[1]] = 1
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 4) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    // TODO-QSP: $npc_fav_body_part[$ARGS[1]] = 'pussy'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      // TODO-QSP: $npc_fav_body_part[$ARGS[1]] = 'tits'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        // TODO-QSP: $npc_fav_body_part[$ARGS[1]] = 'ass'
      } else {
        // TODO-QSP: $npc_fav_body_part[$ARGS[1]] = 'thighs'
      }
    }
  }
  // TODO-QSP: npc_sex_stamina[$ARGS[1]] = rand(1, 10)
  // TODO-QSP: npc_sex_spanker[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  // TODO-QSP: npc_childfree[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_pussyeater[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  // TODO-QSP: npc_cuddler[$ARGS[1]] = iif(rand(0, 2) = 0, 1, 0)
  // TODO-QSP: npc_cum_cannon[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_sex_filmer[$ARGS[1]] = iif(rand(0, 4) = 0, 1, 0)
  // TODO-QSP: npc_two_pump[$ARGS[1]] = iif(rand(0, 5) = 0, 1, 0)
  if (((s as any).npc_door_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'indoor') {
    if (((s as any).npc_apt_sparetype ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'gaming') {
      // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';video_games;'
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';video_games;'
      }
    }
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';reading_books;'
    }
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';film_and_tv;'
    }
  } else {
    if (((s as any).npc_door_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'outdoor') {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';going_out;'
      }
    }
  }
  if (((s as any).npc_foodie ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';dining_out;'
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';dining_out;'
    }
  }
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';cooking;'
  }
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';sports;'
  }
  if (((s as any).npc_gymrat ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';exercising;'
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      // TODO-QSP: $npc_hobbies[$ARGS[1]] += ';exercising;'
    }
  }
  if ((((s as any).npc_door_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'indoor'  &&  (Math.floor(Math.random() * 3) + 0) !== 0)  ||  (((s as any).npc_door_pref ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 'outdoor'  &&  (Math.floor(Math.random() * 3) + 0) === 0)) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 5) + 0;
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'casual_meal'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'coffee_date'
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'takeout_date'
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
            // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'netflix_chill'
          } else {
            // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'movie_date'
          }
        }
      }
    }
  } else {
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 6) + 0;
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'casual_meal'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'picnic_date'
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'beach_date'
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
            // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'fancy_meal'
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
              // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'amusement_park'
            } else {
              // TODO-QSP: $npc_fav_date[$ARGS[1]] = 'shopping_date'
            }
          }
        }
      }
    }
  }
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 50) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 15) {
    // TODO-QSP: $npc_fav_genre[$ARGS[1]] = 'action'
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 30) {
      // TODO-QSP: $npc_fav_genre[$ARGS[1]] = 'horror'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 42) {
        if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
          // TODO-QSP: $npc_fav_genre[$ARGS[1]] = 'raunchy_comedy'
        } else {
          // TODO-QSP: $npc_fav_genre[$ARGS[1]] = 'comedy'
        }
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 46) {
          // TODO-QSP: $npc_fav_genre[$ARGS[1]] = 'drama'
        } else {
          // TODO-QSP: $npc_fav_genre[$ARGS[1]] = 'romance'
        }
      }
    }
  }
  scene.build();
}

function enterSetPreferences(s: GameState, scene: SceneBuilder): void {
  ((s as any).pref_ids ?? {})['body_tits_small'] = 1;
  ((s as any).pref_ids ?? {})['body_tits_average'] = 2;
  ((s as any).pref_ids ?? {})['body_tits_big'] = 3;
  ((s as any).pref_ids ?? {})['body_tits_huge'] = 4;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 5) + 0;
  if ((Math.floor(Math.random() * 10) + 0) < 3) {
    if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_tits');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['rand'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
  }
  ((s as any).pref_ids ?? {})['hair_pubes_shaven'] = 1;
  ((s as any).pref_ids ?? {})['hair_pubes_stubble'] = 2;
  ((s as any).pref_ids ?? {})['hair_pubes_patch'] = 2;
  ((s as any).pref_ids ?? {})['hair_pubes_trimmed'] = 2;
  ((s as any).pref_ids ?? {})['hair_pubes_bush'] = 3;
  ((s as any).pref_ids ?? {})['hair_pubes_untrimmed'] = 3;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 4) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'hair_pube_length');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['rand'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
  }
  ((s as any).pref_ids ?? {})['body_bmi_starving'] = 1;
  ((s as any).pref_ids ?? {})['body_bmi_underweight'] = 1;
  ((s as any).pref_ids ?? {})['body_bmi_normal'] = 2;
  ((s as any).pref_ids ?? {})['body_bmi_overweight'] = 3;
  ((s as any).pref_ids ?? {})['body_bmi_obese'] = 3;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 4) + 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_bmi');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['rand'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
  }
  if ((Math.floor(Math.random() * 10) + 0) < 3) {
    if (((s as any).npc_pervert ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  &&  (!(Math.floor(Math.random() * (1 + (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] % 2 - 0 + 1)) + (0))))) {
      ((s as any).npcgeneratecVars ?? {})['CloTypePref'] = 4;
    } else {
      if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
        ((s as any).npcgeneratecVars ?? {})['CloTypePref'] = 0;
      } else {
        if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
          ((s as any).npcgeneratecVars ?? {})['CloTypePref'] = Math.floor(Math.random() * 3) + 1;
        } else {
          ((s as any).npcgeneratecVars ?? {})['CloTypePref'] = Math.floor(Math.random() * 2) + 2;
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 1) {
    ((s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 2) {
      ((s as any).npcgeneratecVars ?? {})['CloQualPref'] = Math.floor(Math.random() * 2) + 1;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 3) {
        ((s as any).npcgeneratecVars ?? {})['CloQualPref'] = 2;
        qspCall(s, 'npc_set_preference', '', ((s as any).locArgs?.[1] ?? 0), 'clothes_style_wealthy', 'like');
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 4) {
          ((s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
          qspCall(s, 'npc_set_preference', '', ((s as any).locArgs?.[1] ?? 0), 'clothes_style_fetish', 'like');
        }
      }
    }
  }
  ((s as any).pref_ids ?? {})['clothes_quality_low'] = 1;
  ((s as any).pref_ids ?? {})['clothes_quality_medium'] = 1;
  ((s as any).pref_ids ?? {})['clothes_quality_high'] = 2;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloQualPref'] === 0) {
    if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
      ((s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
    } else {
      if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
        ((s as any).npcgeneratecVars ?? {})['CloQualPref'] = Math.floor(Math.random() * 2) + 1;
      } else {
        if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
          if ((!(Math.floor(Math.random() * 3) + 0))) {
            ((s as any).npcgeneratecVars ?? {})['CloQualPref'] = 2;
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_quality');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['CloQualPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref'] > 0) {
  }
  if (((s as any).npc_pervert ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  &&  (!(Math.floor(Math.random() * (1 + ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] - 0 + 1)) + (0)))) {
    ((s as any).npcgeneratecVars ?? {})['slutconstant'] = 1;
  }
  ((s as any).pref_ids ?? {})['clothes_cleavage_none'] = 1;
  ((s as any).pref_ids ?? {})['clothes_cleavage_small'] = 2;
  ((s as any).pref_ids ?? {})['clothes_cleavage_medium'] = 3;
  ((s as any).pref_ids ?? {})['clothes_cleavage_large'] = 4;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 6) + 0) - ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)];
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars ?? {})['CloTopPref'] = 1 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
        ((s as any).npcgeneratecVars ?? {})['CloTopPref'] = 2 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars ?? {})['CloTopPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref'] !== 0  &&  ((s as any).npc_bust ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
      ((s as any).npcgeneratecVars ?? {})['CloTopPref'] = (((s as any).npcgeneratecVars ?? {})['CloTopPref'] ?? 0) + (1);
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_cleavage');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['CloTopPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref'] > 0) {
  }
  ((s as any).pref_ids ?? {})['clothes_pants_long'] = 1;
  ((s as any).pref_ids ?? {})['clothes_skirt_long'] = 1;
  ((s as any).pref_ids ?? {})['clothes_pants_normal'] = 2;
  ((s as any).pref_ids ?? {})['clothes_skirt_normal'] = 2;
  ((s as any).pref_ids ?? {})['clothes_pants_short'] = 3;
  ((s as any).pref_ids ?? {})['clothes_skirt_short'] = 3;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 6) + 0) - ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)];
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars ?? {})['PanShorPref'] = 1;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars ?? {})['PanShorPref'] = 2;
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars ?? {})['PanShorPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['slutconstant'] === 1  &&  (Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 4) {
      ((s as any).npcgeneratecVars ?? {})['PanShorPref'] = 3;
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_skirt');
      } else {
        ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_pants');
      }
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['PanShorPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref'] > 0) {
  }
  ((s as any).pref_ids ?? {})['clothes_thin_low'] = 1;
  ((s as any).pref_ids ?? {})['clothes_thin_medium'] = 2;
  ((s as any).pref_ids ?? {})['clothes_thin_high'] = 3;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 6) + 0) - ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)];
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2) {
      ((s as any).npcgeneratecVars ?? {})['CloThinPref'] = 1 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars ?? {})['CloThinPref'] = 2 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars ?? {})['CloThinPref'] = 3;
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_thin');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['CloThinPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref'] > 0) {
  }
  ((s as any).pref_ids ?? {})['shoes_heels_flat'] = 1;
  ((s as any).pref_ids ?? {})['shoes_heels_low'] = 1;
  ((s as any).pref_ids ?? {})['shoes_heels_medium'] = 2;
  ((s as any).pref_ids ?? {})['shoes_heels_high'] = 3;
  ((s as any).pref_ids ?? {})['shoes_heels_ultra'] = 4;
  ((s as any).pref_ids ?? {})['shoes_heels_fetish'] = 4;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 6) + 0) - ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)];
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 1 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
        ((s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 2 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 5  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 3 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
            ((s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 4;
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'shoes_heels');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref'] > 0) {
  }
  if ((Math.floor(Math.random() * (2 + 8 * ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] - 0 + 1)) + (0)) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
    qspCall(s, 'npc_set_preference', '', ((s as any).locArgs?.[1] ?? 0), 'clothes_style_bimbo', 'like');
    ((s as any).npcgeneratec ?? {})['bimbo_pref'] = 1;
  }
  ((s as any).pref_ids ?? {})['cosmetics_piercings_none'] = 1;
  ((s as any).pref_ids ?? {})['cosmetics_piercings_few'] = 1;
  ((s as any).pref_ids ?? {})['cosmetics_piercings_multiple'] = 2;
  ((s as any).pref_ids ?? {})['cosmetics_piercings_lot'] = 3;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars ?? {})['pierPref'] = Math.min(3, (Math.floor(Math.random() * 3) + 1) + ((s as any).npcgeneratecVars ?? {})?.['slutconstant']);
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_piercings');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['pierPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['pierPref'] > 0) {
  }
  ((s as any).pref_ids ?? {})['cosmetics_tattoos_none'] = 1;
  ((s as any).pref_ids ?? {})['cosmetics_tattoos_few'] = 1;
  ((s as any).pref_ids ?? {})['cosmetics_tattoos_multiple'] = 2;
  ((s as any).pref_ids ?? {})['cosmetics_tattoos_lot'] = 3;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npcgeneratecVars ?? {})['tatPref'] = 1 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npcgeneratecVars ?? {})['tatPref'] = 2 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npcgeneratecVars ?? {})['tatPref'] = 3;
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_tattoos');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['tatPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['tatPref'] > 0) {
  }
  ((s as any).pref_ids ?? {})['body_lips_normal'] = 1;
  ((s as any).pref_ids ?? {})['body_lips_plump'] = 1;
  ((s as any).pref_ids ?? {})['body_lips_big'] = 2;
  ((s as any).pref_ids ?? {})['body_lips_pillowy'] = 2;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * (2 + ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] - 0 + 1)) + (0)))) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 3) + 0;
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npcgeneratecVars ?? {})['lipPref'] = 1 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npcgeneratecVars ?? {})['lipPref'] = 2;
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_lips');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['lipPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['lipPref'] > 0) {
  }
  ((s as any).pref_ids ?? {})['cosmetics_makeup_light'] = 1;
  ((s as any).pref_ids ?? {})['cosmetics_makeup_moderate'] = 2;
  ((s as any).pref_ids ?? {})['cosmetics_makeup_heavy'] = 3;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 6) + 0) - ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)];
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2) {
      ((s as any).npcgeneratecVars ?? {})['makeupPref'] = 1 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars ?? {})['makeupPref'] = 2 + ((s as any).npcgeneratecVars ?? {})?.['slutconstant'];
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] >= 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars ?? {})['makeupPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['bimbo_pref'] === 1) {
      ((s as any).npcgeneratecVars ?? {})['makeupPref'] = 3;
    }
  }
  if ((Math.floor(Math.random() * 10) + 0) < 3  &&  ((s as any).npcgeneratecVars ?? 0)?.['bimbo_pref'] === 0) {
    if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_makeup');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['makeupPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['makeupPref'] > 0) {
  }
  ((s as any).pref_ids ?? {})['hair_color_black'] = 1;
  ((s as any).pref_ids ?? {})['hair_color_brown'] = 1;
  ((s as any).pref_ids ?? {})['hair_color_red'] = 1;
  ((s as any).pref_ids ?? {})['hair_color_blonde'] = 1;
  ((s as any).pref_ids ?? {})['hair_color_dyed'] = 1;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'hair_color');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        // TODO-QSP: gs 'npc_set_preference', $ARGS[1], $npcgeneratecVars['pref_attr'], $npcgeneratecVars['attracted']
      }
    }
  }
  ((s as any).pref_ids ?? {})['stats_intel_dumb'] = 1;
  ((s as any).pref_ids ?? {})['stats_intel_normal'] = 2;
  ((s as any).pref_ids ?? {})['stats_intel_smart'] = 3;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
      ((s as any).npcgeneratecVars ?? {})['IQPref'] = Math.floor(Math.random() * 3) + 1;
    } else {
      ((s as any).npcgeneratecVars ?? {})['IQPref'] = 0;
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'stats_intel');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['IQPref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['IQPref'] > 0) {
  }
  ((s as any).pref_ids ?? {})['stats_strength_weak'] = 1;
  ((s as any).pref_ids ?? {})['stats_strength_normal'] = 2;
  ((s as any).pref_ids ?? {})['stats_strength_athletic'] = 3;
  ((s as any).pref_ids ?? {})['stats_strength_strong'] = 4;
  ((s as any).pref_ids ?? {})['stats_strength_manly'] = 4;
  ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
      ((s as any).npcgeneratecVars ?? {})['MusclePref'] = Math.floor(Math.random() * 3) + 1;
    } else {
      ((s as any).npcgeneratecVars ?? {})['MusclePref'] = 0;
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'stats_strength');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars ?? {})['MusclePref'] = ((s as any).pref_ids ?? 0)?.[((s as any).npcgeneratecVars ?? 0)?.['pref_attr']];
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['MusclePref'] > 0) {
  }
  scene.build();
}

function enterSetApprnc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    ((s as any).npcgeneratecVars ?? {})['apprnc'] = Math.floor(Math.random() * 81) + 60;
  } else {
    if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      ((s as any).npcgeneratecVars ?? {})['apprnc'] = Math.floor(Math.random() * 71) + 90;
    } else {
      if (((s as any).npc_finance ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
        ((s as any).npcgeneratecVars ?? {})['apprnc'] = Math.floor(Math.random() * 41) + 130;
      }
    }
  }
  if (((s as any).npc_gentle ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    ((s as any).npcgeneratecVars ?? {})['apprnc'] = (((s as any).npcgeneratecVars ?? {})['apprnc'] ?? 0) - (Math.floor(Math.random() * 21) + 10);
  } else {
    if (((s as any).npc_rough ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
      ((s as any).npcgeneratecVars ?? {})['apprnc'] = (((s as any).npcgeneratecVars ?? {})['apprnc'] ?? 0) + (Math.floor(Math.random() * 21) + 10);
    } else {
      ((s as any).npcgeneratecVars ?? {})['apprnc'] = (((s as any).npcgeneratecVars ?? {})['apprnc'] ?? 0) + ((Math.floor(Math.random() * (10 - -10 + 1)) + (-10)));
    }
  }
  // TODO-QSP: npc_apprnc[$ARGS[1]] = npcgeneratecVars['apprnc']
  // TODO-QSP: npc_hotcat[$ARGS[1]] = func('AppearanceSystem', 'ConvertToHotcat', npcgeneratecVars['apprnc'])
  if (((s as any).npc_height ?? 0)[((s as any).locArgs?.[1] ?? 0)] < ((s as any).npcgeneratecVars ?? 0)?.['av_height'] - 5) {
    ((s as any).npcgeneratecVars ?? {})['body_type'] = 1;
    // TODO-QSP: $npc_height_desc[$ARGS[1]] = 'short'
  } else {
    if (((s as any).npc_height ?? 0)[((s as any).locArgs?.[1] ?? 0)] <= ((s as any).npcgeneratecVars ?? 0)?.['av_height'] + 5) {
      ((s as any).npcgeneratecVars ?? {})['body_type'] = 2;
      // TODO-QSP: $npc_height_desc[$ARGS[1]] = 'average'
    } else {
      ((s as any).npcgeneratecVars ?? {})['body_type'] = 3;
      // TODO-QSP: $npc_height_desc[$ARGS[1]] = 'tall'
    }
  }
  ((s as any).npcgeneratecVars ?? {})['bmi'] = 100000 * ((s as any).npc_weight ?? 0)[((s as any).locArgs?.[1] ?? 0)] / (((s as any).npc_height ?? 0)[((s as any).locArgs?.[1] ?? 0)] * ((s as any).npc_height ?? 0)[((s as any).locArgs?.[1] ?? 0)]);
  if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
    if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 190) {
      // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'thin'
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 225) {
        // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'athletic'
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 250) {
          // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'chunky'
        } else {
          // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'fat'
        }
      }
    }
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 190) {
      if (((s as any).npcgeneratecVars ?? 0)?.['body_type'] === 1) {
        // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'petite'
      } else {
        // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'slender'
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 225) {
        // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'toned'
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 250) {
          // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'average'
        } else {
          // TODO-QSP: $npc_build_desc[$ARGS[1]] = 'chubby'
        }
      }
    }
  }
  if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 30) + 31;
    // TODO-QSP: $npc_icon[$ARGS[1]] = 'images/system/phone/icons/icon_bf<<npcgeneratecVars[''rand'']>>.png'
    // TODO-QSP: $npc_pic[$ARGS[1]] = 'images/characters/shared/headshots_generic/<<npcgeneratecVars[''rand'']>>.jpg'
  } else {
    ((s as any).npcgeneratecVars ?? {})['rand'] = Math.floor(Math.random() * 30) + 1;
    // TODO-QSP: $npc_icon[$ARGS[1]] = 'images/system/phone/icons/icon_bf<<npcgeneratecVars[''rand'']>>.png'
    // TODO-QSP: $npc_pic[$ARGS[1]] = 'images/characters/shared/headshots_generic/<<npcgeneratecVars[''rand'']>>.jpg'
  }
  scene.build();
}

function enterSetOtherVars(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: npc_drunk[$ARGS[1]] = 0
  // TODO-QSP: npc_horny[$ARGS[1]] = rand(2 * pcs_hotcat, 8 * pcs_hotcat)
  if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 1  ||  ((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
    // TODO-QSP: npc_horny[$ARGS[1]] = max(0, npc_horny[$ARGS[1]] - 20)
  }
  // TODO-QSP: npc_lover_days[$ARGS[1]] = 0
  // TODO-QSP: npc_daygenerated[$ARGS[1]] = daystart
  // TODO-QSP: npc_eventday[$ARGS[1]] = 0
  // TODO-QSP: npc_meetday[$ARGS[1]] = 0
  // TODO-QSP: npc_meethour[$ARGS[1]] = 0
  // TODO-QSP: npc_dates[$ARGS[1]] = 0
  // TODO-QSP: npc_compliance[$ARGS[1]] = 0
  // TODO-QSP: npc_lover_keys[$ARGS[1]] = 0
  // TODO-QSP: npc_QW[$ARGS[1]] = 0
  // TODO-QSP: npc_rel[$ARGS[1]] = 40
  // TODO-QSP: npc_love[$ARGS[1]] = 0
  // TODO-QSP: npc_had_sex[$ARGS[1]] = 0
  // TODO-QSP: npc_perv[$ARGS[1]] = 0
  // TODO-QSP: npc_herpes[$ARGS[1]] = 0
  // TODO-QSP: npc_syth[$ARGS[1]] = 0
  // TODO-QSP: npc_gon[$ARGS[1]] = 0
  // TODO-QSP: npc_thrush[$ARGS[1]] = 0
  // TODO-QSP: copyarr('$ngp_pref', '$npc_pref_traits')
  qspCall(s, 'npc_get_preference', '', ((s as any).locArgs?.[1] ?? 0), 'randomPosIndNeg', 'no_clear');
  // TODO-QSP: $npc_origin_attract[$ARGS[1]] = $ngpPrefResult['HasPos']
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'assign_index':
      enterAssignIndex(s, scene);
      break;
    case 'assign_dob':
      enterAssignDob(s, scene);
      break;
    case 'assign_stats':
      enterAssignStats(s, scene);
      break;
    case 'set_details':
      enterSetDetails(s, scene);
      break;
    case 'gen_dick':
      enterGenDick(s, scene);
      break;
    case 'set_dick':
      enterSetDick(s, scene);
      break;
    case 'set_lifestyle':
      enterSetLifestyle(s, scene);
      break;
    case 'set_occupation':
      enterSetOccupation(s, scene);
      break;
    case 'poor_jobs':
      enterPoorJobs(s, scene);
      break;
    case 'middle_jobs':
      enterMiddleJobs(s, scene);
      break;
    case 'rich_jobs':
      enterRichJobs(s, scene);
      break;
    case 'set_personality':
      enterSetPersonality(s, scene);
      break;
    case 'set_preferences':
      enterSetPreferences(s, scene);
      break;
    case 'set_apprnc':
      enterSetApprnc(s, scene);
      break;
    case 'set_other_vars':
      enterSetOtherVars(s, scene);
      break;
    case 'cleanup':
      enterCleanup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npcgeneratec: LocationDef = {
  name: 'npcgeneratec',
  region: 'other',
  enter: enter,
};
