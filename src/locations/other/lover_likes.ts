import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterClotTypePrefTmp(s: GameState, scene: SceneBuilder): void {
  (s as any).ngp_pref = undefined;
  (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_style_wealthy'];
  (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_style_fetish'];
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'no_clear');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
      scene.text(`${((s as any).npcdesc ?? '')} says, "I like the type of clothing you are wearing ${((s as any).pcs_nickname ?? '')}. I think girls look amazing in ` + ((((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_style_wealthy') ? ('formal') : ('fetish')) + ' clothing."');
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        scene.text(`${((s as any).npcdesc ?? '')} says, "I think girls who wear ` + ((((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_style_wealthy') ? ('formal') : ('fetish')) + ' clothing look amazing. I\'m glad you chose that type of clothing."');
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
        scene.text(`${((s as any).npcdesc ?? '')} says, "${((s as any).pcs_nickname ?? '')}, you look fucking hot in ` + ((((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_style_wealthy') ? ('formal') : ('fetish')) + ' clothes. It looks amazing on you!"');
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        scene.text(`${((s as any).npcdesc ?? '')} says nerviously, "I don't mean to be rude ${((s as any).pcs_nickname ?? '')}, but I don't think ${((s as any).clothingworntype ?? '')} clothing looks nice on girls. I like girls who wear ` + ((((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_style_wealthy') ? ('formal') : ('fetish')) + ' clothing."');
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          scene.text(`${((s as any).npcdesc ?? '')} says cafefully, "${((s as any).pcs_nickname ?? '')} to be honest, I don't think ${((s as any).clothingworntype ?? '')} clothing looks good on you. I think ` + ((((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_style_wealthy') ? ('formal') : ('fetish')) + ' clothing would look better on you."');
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-1) - (-2) + 1)) + ((-2))));
          scene.text(`${((s as any).npcdesc ?? '')} says rather rudely, "I think girls who wear ${((s as any).clothingworntype ?? '')} type clothing looks like shit. Girls who wear ` + ((((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_style_wealthy') ? ('formal') : ('fetish')) + ' turn me on much more."');
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterClotQualPrefTmp(s: GameState, scene: SceneBuilder): void {
  (s as any).ngp_pref = undefined;
  (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_quality_low'];
  (s as any).ngp_pref = [...((s as any).ngp_pref ?? []), 'clothes_quality_high'];
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'no_clear');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 1));
      }
    }
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_quality_low') {
      ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'expensive';
    } else {
      ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'cheap';
    }
    (s as any).meetQualPref = '' + ((s as any).npcdesc ?? 0) + ' says ' + ((s as any).Xe ?? 0) + ' loves the quality of your clothes and ' + ((s as any).Xe ?? 0) + ' is glad you don\'t wear ' + (((s as any).temp_text ?? 0)?.[0] ?? 0) + ' clothing."';
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-1) - (-2) + 1)) + ((-2))));
        }
      }
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_quality_low') {
        ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'high';
        ((s as any).temp_text = (s as any).temp_text ?? {})[1] = 'expensive';
      } else {
        ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'low';
        ((s as any).temp_text = (s as any).temp_text ?? {})[1] = 'cheap';
      }
      (s as any).meetQualPref = '' + ((s as any).npcdesc ?? 0) + ' says that ' + ((s as any).Xe ?? 0) + ' thinks your clothing quality is way too ' + (((s as any).temp_text ?? 0)?.[0] ?? 0) + ' and ' + ((s as any).Xe ?? 0) + ' likes girls that wear clothing that is ' + (((s as any).temp_text ?? 0)?.[1] ?? 0) + '."';
    }
  }
  (s as any).ngpPrefResult = undefined;
  (s as any).temp_text = undefined;
  scene.build();
}

function enterClotTopPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'clothes_cleavage');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_cleavage_none') {
      ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'only a little bit of';
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_cleavage_small') {
        ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'only some';
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_cleavage_medium') {
          ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'a lot of';
        } else {
          ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'a huge amount of';
        }
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
      scene.text(`${((s as any).npcdesc ?? '')} says with a blush ${((s as any).Xe ?? '')} likes that you are wearing clothes with ` + (((s as any).temp_text ?? 0)?.[0] ?? '') + 'cleavage."');
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
        scene.text(`${((s as any).npcdesc ?? '')} looks at your cleavage and says ${((s as any).Xe ?? '')} is glad you wear clothes with ` + (((s as any).temp_text ?? 0)?.[0] ?? '') + ' cleavage."');
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        scene.text(`${((s as any).npcdesc ?? '')} looks at your cleavage and says ${((s as any).Xe ?? '')} likes that you wear clothes with ` + (((s as any).temp_text ?? 0)?.[0] ?? '') + ' cleavage, and anything else is trash."');
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_cleavage_none') {
        ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'only a little bit of';
        ((s as any).temp_text = (s as any).temp_text ?? {})[1] = 'too much';
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_cleavage_small') {
          ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'only some';
          if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_none')) {
            ((s as any).temp_text = (s as any).temp_text ?? {})[1] = 'too little';
          } else {
            ((s as any).temp_text = (s as any).temp_text ?? {})[1] = 'too much';
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_cleavage_medium') {
            ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'a lot of';
            if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_large') === 0) {
              ((s as any).temp_text = (s as any).temp_text ?? {})[1] = 'too little';
            } else {
              ((s as any).temp_text = (s as any).temp_text ?? {})[1] = 'too much';
            }
          } else {
            ((s as any).temp_text = (s as any).temp_text ?? {})[0] = 'a huge amount of';
            ((s as any).temp_text = (s as any).temp_text ?? {})[1] = 'too little';
          }
        }
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        scene.text(`${((s as any).npcdesc ?? '')} says shyly that ${((s as any).Xe ?? '')} likes girls who wear clothes with ` + (((s as any).temp_text ?? 0)?.[0] ?? '') + ' cleavage, and you kind of have ' + (((s as any).temp_text ?? 0)?.[1] ?? '') + ` ${((s as any).Xyr ?? '')} taste."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with ` + (((s as any).temp_text ?? 0)?.[0] ?? '') + ' cleavage, and anything else is way ' + (((s as any).temp_text ?? 0)?.[1] ?? '') + '."');
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          scene.text(`${((s as any).npcdesc ?? '')} looks at your cleavage and says ${((s as any).Xe ?? '')} likes girls that wear clothes with ` + (((s as any).temp_text ?? 0)?.[0] ?? '') + ' cleavage, and anything else is trash."');
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  (s as any).temp_text = undefined;
  scene.build();
}

function enterBottShorPrefTmp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloSkirt ?? 0) > 0) {
    qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'clothes_skirt');
  } else {
    qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'clothes_pants');
  }
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_long') {
        scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says that ${((s as any).Xe ?? '')} likes that you are wearing clothes with only long skirts."`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_normal') {
          scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt, blushing, and says that ${((s as any).Xe ?? '')} likes that you are wearing clothes with slightly short skirts."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_short') {
            scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says with a blush ${((s as any).Xe ?? '')} likes that you are wearing clothes with really short skirts, and that ${((s as any).Xe ?? '')} thinks the length looks great on you."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_long') {
              scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says that ${((s as any).Xe ?? '')} likes that you are wearing clothes with only long pants."`);
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_normal') {
                scene.text(`${((s as any).npcdesc ?? '')} looks at your pants, blushing, and says that ${((s as any).Xe ?? '')} likes that you are wearing clothes with short pants."`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says with a blush ${((s as any).Xe ?? '')} likes that you are wearing clothes with really short pants, and that ${((s as any).Xe ?? '')} thinks the length looks great on you."`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_long') {
          scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says ${((s as any).Xe ?? '')} is glad you wear clothes with only long skirts."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_normal') {
            scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says ${((s as any).Xe ?? '')} is glad you wear clothes with really short skirts, and yours makes you look like a seductress."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_short') {
              scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says ${((s as any).Xe ?? '')} is glad you wear clothes with really short skirts, and yours makes you look like a seductress."`);
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_long') {
                scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says ${((s as any).Xe ?? '')} is glad you wear clothes with only long pants."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_normal') {
                  scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says ${((s as any).Xe ?? '')} is glad you wear clothes with short pants."`);
                } else {
                  scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says ${((s as any).Xe ?? '')} is glad you wear clothes with really short pants, and yours makes you look like a seductress."`);
                }
              }
            }
          }
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_long') {
          scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says ${((s as any).Xe ?? '')} likes that you wear clothes with long skirts, and anything else is trash."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_normal') {
            scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says ${((s as any).Xe ?? '')} likes that you wear clothes with really short skirts, it makes you look sexy."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_short') {
              scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says ${((s as any).Xe ?? '')} likes that you wear clothes with really short skirts, it makes you look sexy."`);
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_long') {
                scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says ${((s as any).Xe ?? '')} likes that you wear clothes with long pants, and anything else is trash."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_normal') {
                  scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says ${((s as any).Xe ?? '')} likes that you wear clothes with short pants, and anything else is trash."`);
                } else {
                  scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says ${((s as any).Xe ?? '')} likes that you wear clothes with really short pants, it makes you look sexy."`);
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_long') {
          scene.text(`${((s as any).npcdesc ?? '')} says shyly that ${((s as any).Xe ?? '')} likes girls who wear long skirts, and you kind of show too much for ${((s as any).Xyr ?? '')} taste."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_normal') {
            if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
              scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says shyly that ${((s as any).Xe ?? '')} likes girls who wear clothes with slightly short skirts, and you kind of have too long of clothing for ${((s as any).Xyr ?? '')} taste."`);
            } else {
              scene.text(`${((s as any).npcdesc ?? '')} says shyly that ${((s as any).Xe ?? '')} likes girls who wear clothes with slightly short skirts, and you kind of show too much for ${((s as any).Xyr ?? '')} taste."`);
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_short') {
              scene.text(`${((s as any).npcdesc ?? '')} looks at your skirt and says shyly that ${((s as any).Xe ?? '')} likes girls who wear clothes with really short skirts, and you kind of show too little for ${((s as any).Xyr ?? '')} taste."`);
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_long') {
                scene.text(`${((s as any).npcdesc ?? '')} says shyly that ${((s as any).Xe ?? '')} likes girls who wear clothes with long pants, and you kind of show too much for ${((s as any).Xyr ?? '')} taste."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_normal') {
                  if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                    scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says shyly that ${((s as any).Xe ?? '')} likes girls who wear clothes with short pants, and you kind of have too long pants for ${((s as any).Xyr ?? '')} taste."`);
                  } else {
                    scene.text(`${((s as any).npcdesc ?? '')} says shyly that ${((s as any).Xe ?? '')} likes girls who wear clothes with short pants, and you kind of show too much for ${((s as any).Xyr ?? '')} taste."`);
                  }
                } else {
                  scene.text(`${((s as any).npcdesc ?? '')} looks at your pants and says shyly that ${((s as any).Xe ?? '')} likes girls who wear clothes with really short pants, and you kind of show too little for ${((s as any).Xyr ?? '')} taste."`);
                }
              }
            }
          }
        }
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_long') {
            scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with long skirts, and yours makes you look lewd."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_normal') {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with short pants, and yours makes you look prudish."`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with slightly short skirts, and yours makes you look lewd."`);
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_short') {
                scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with really short skirts, and yours makes you look prudish."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_long') {
                  scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with long pants, and yours makes you look lewd."`);
                } else {
                  if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_normal') {
                    if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                      scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with short pants, and yours makes you look prudish."`);
                    } else {
                      scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with short pants, and yours makes you look lewd."`);
                    }
                  } else {
                    scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} likes girls that wear clothes with really short pants, and yours makes you look prudish."`);
                  }
                }
              }
            }
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_long') {
            scene.text(`${((s as any).npcdesc ?? '')} looks at your legs and says ${((s as any).Xe ?? '')} likes girls that wear clothes with long skirts, and yours makes you look like a slut."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_normal') {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                scene.text(`${((s as any).npcdesc ?? '')} looks at your legs and says ${((s as any).Xe ?? '')} likes girls that wear clothes with slightly short skirts, and yours makes you look like a prude."`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} looks at your legs and says ${((s as any).Xe ?? '')} likes girls that wear clothes with slightly short skirts, and yours makes you look like a slut."`);
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_short') {
                scene.text(`${((s as any).npcdesc ?? '')} looks at your legs and says ${((s as any).Xe ?? '')} likes girls that wear clothes with really short skirts, and yours makes you look like a prude."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_long') {
                  scene.text(`${((s as any).npcdesc ?? '')} looks at your legs and says ${((s as any).Xe ?? '')} likes girls that wear clothes with long pants, and yours makes you look like a slut."`);
                } else {
                  if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_normal') {
                    if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                      scene.text(`${((s as any).npcdesc ?? '')} looks at your legs and says ${((s as any).Xe ?? '')} likes girls that wear clothes with short pants, and yours makes you look like a prude."`);
                    } else {
                      scene.text(`${((s as any).npcdesc ?? '')} looks at your legs and says ${((s as any).Xe ?? '')} likes girls that wear clothes with short pants, and yours makes you look like a slut."`);
                    }
                  } else {
                    scene.text(`${((s as any).npcdesc ?? '')} looks at your legs and says ${((s as any).Xe ?? '')} likes girls that wear clothes with really short pants, and yours makes you look like a prude."`);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterClotThinPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'clothes_thin');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== 'clothes_thin_high') {
        scene.text(`${((s as any).npcdesc ?? '')} tells you that ${((s as any).Xe ?? '')} thinks your outfit's thinness is just right, not too thick and not to thin."`);
      } else {
        scene.text(`${((s as any).npcdesc ?? '')} tells you that ${((s as any).Xe ?? '')} thinks your outfit's thinness is perfect, and ${((s as any).Xe ?? '')} says shyly ${((s as any).Xe ?? '')} likes to look at your body's curves."`);
      }
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== 'clothes_thin_high') {
          scene.text(`${((s as any).npcdesc ?? '')} tells you that ${((s as any).Xe ?? '')} thinks your outfit's thinness is just right, not too thick and not to thin."`);
        } else {
          scene.text(`${((s as any).npcdesc ?? '')} tells you that ${((s as any).Xe ?? '')} thinks your outfit's thinness is perfect, and ${((s as any).Xe ?? '')} loves to see every curve of your body."`);
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== 'clothes_thin_high') {
          scene.text(`${((s as any).npcdesc ?? '')} tells you that ${((s as any).Xe ?? '')} thinks your outfit's thinness is just right, not too thick and not to thin."`);
        } else {
          scene.text(`${((s as any).npcdesc ?? '')} tells you that ${((s as any).Xe ?? '')} thinks your outfit's thinness is perfect, and ${((s as any).Xyr ?? '')} eyes take in the curves of your body."`);
        }
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_low'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_medium'  &&  qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
          scene.text(`${((s as any).npcdesc ?? '')} looks at the thinness of your outfit and says that your outfit is too thin, and looking down ${((s as any).Xe ?? '')} mumbles that it makes you look like a slut."`);
        } else {
          scene.text(`${((s as any).npcdesc ?? '')} looks at the thinness of your outfit and says that your outfit is too thick, and looking down ${((s as any).Xe ?? '')} mumbles that it makes you look like a prude."`);
        }
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_low'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_medium'  &&  qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
            scene.text(`${((s as any).npcdesc ?? '')} looks at the thinness of your outfit and says that your outfit is too thin, and that it makes you look like a slut."`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} looks at the thinness of your outfit and says that your outfit is too thick, and that it makes you look like a prude."`);
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_low'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_medium'  &&  qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
            scene.text(`${((s as any).npcdesc ?? '')} looks at the thinness of your outfit and says that your outfit is too thin, and only whores wear clothes that thin."`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} looks at the thinness of your outfit and says that your outfit is too thick, and only prudes wear clothes that thick."`);
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterBimbPrefTmp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_pref_values ?? 0)?.['clothes_style_bimbo'] > 0) {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
        scene.text(`${((s as any).npcdesc ?? '')} tells you blushing that ${((s as any).Xe ?? '')} likes that you look like a bimbo."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
          scene.text(`${((s as any).npcdesc ?? '')} tells you that your bimbo clothes look amazing on you."`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          scene.text(`${((s as any).npcdesc ?? '')} tells you that ${((s as any).Xe ?? '')} thinks all girls should dress up as much as a bimbo as you are."`);
        }
      }
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
        }
      }
      scene.text(`${((s as any).npcdesc ?? '')} says you would look much better dressed up as a bimbo."`);
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterPierPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'cosmetics_piercings');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_piercings_none') {
    scene.text(`${((s as any).npcdesc ?? '')} is glad to see you wear no piercings.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_piercings_few') {
      scene.text(`${((s as any).npcdesc ?? '')} is glad to see you wear very few piercings.`);
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_piercings_multiple') {
        scene.text(`${((s as any).npcdesc ?? '')} is glad you wear a few piercings, stating it makes any girl look good.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_piercings_lot') {
          scene.text(`${((s as any).npcdesc ?? '')} is glad you wear many piercings, stating makes any girl look good.`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_none'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_few') {
            scene.text(`${((s as any).npcdesc ?? '')} sees your piercings and tells you that you have to many piercings and anything more than two is too much.`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_multiple') {
              if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_lot') === 0) {
                scene.text(`${((s as any).npcdesc ?? '')} comments on your lack of piercings and says a woman should at least have three piercings.`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} comments on your many piercings and says a woman should at most five piercings.`);
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_lot') {
                scene.text(`${((s as any).npcdesc ?? '')} comments on your lack of piercings and says a woman should at least have six piercings.`);
              }
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterTattPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'cosmetics_tattoos');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_tattoos_none') {
    scene.text(`${((s as any).npcdesc ?? '')} is glad to see you have no tattoos.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_tattoos_few') {
      scene.text(`${((s as any).npcdesc ?? '')} is glad to see you have very few tattoos.`);
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_tattoos_multiple') {
        scene.text(`${((s as any).npcdesc ?? '')} is glad you have a few tattoos, stating it makes any girl look good.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_tattoos_lot') {
          scene.text(`${((s as any).npcdesc ?? '')} is glad you have many tattoos, stating makes any girl look good.`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_none'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_few') {
            scene.text(`${((s as any).npcdesc ?? '')} sees your tattoos and tells you that you have to many tattoos and anything more than two is too much.`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_multiple') {
              if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_lot') === 0) {
                scene.text(`${((s as any).npcdesc ?? '')} comments on your lack of tattoos and says a woman should at least have three tattoos.`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} comments on your many tattoos and says a woman should at most five tattoos.`);
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_lot') {
                scene.text(`${((s as any).npcdesc ?? '')} comments on your lack of tattoos and says a woman should at least have six tattoos.`);
              }
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterLipsPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'body_lips');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_thin'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_normal'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_plump') {
    scene.text(`${((s as any).npcdesc ?? '')} makes a comment on how ${((s as any).Xe ?? '')} likes that your lips aren't outrageously huge.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_big'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_pillowy') {
      scene.text(`${((s as any).npcdesc ?? '')} makes a comment on how ${((s as any).Xe ?? '')} likes that your lips are huge.`);
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_thin'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_normal'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_plump') {
        scene.text(`${((s as any).npcdesc ?? '')} makes a quick comment on how ${((s as any).Xe ?? '')} hates the size of your lips, for ${((s as any).Xem ?? '')} it's way too big.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_big'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_pillowy') {
          scene.text(`${((s as any).npcdesc ?? '')} makes a quick comment on how ${((s as any).Xe ?? '')} hates the size of your lips, for ${((s as any).Xem ?? '')} they are not big enough.`);
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterMakePrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'cosmetics_makeup');
  if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_running')) {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      scene.text(`${((s as any).npcdesc ?? '')} looks at you and nerviously says, "Your makeup is running."`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        scene.text(`${((s as any).npcdesc ?? '')} says in a disapproving tone, "Your makeup is running."`);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        scene.text(`${((s as any).npcdesc ?? '')} says in a rude tone, "Your makeup is running."`);
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== ''  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_brushed_not')) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text(`${((s as any).npcdesc ?? '')} says timidly "I guess you had to leave in a hurry huh?"`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            scene.text(`${((s as any).npcdesc ?? '')} says questionly, "I guess you had to leave in a hurry?"`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} says rudely, "Couldn't take the time to brush your hair?"`);
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text(`${((s as any).npcdesc ?? '')} looks at your face and says, "I love the way you did your makeup."`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              scene.text(`${((s as any).npcdesc ?? '')} looks at your face and says, "I love the way you did your makeup. It makes you look beautiful."`);
            } else {
              scene.text(`${((s as any).npcdesc ?? '')} says with a smile, "Now THAT'S how a woman should do their makeup, it looks sexy on you!"`);
            }
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_makeup_light') {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text(`${((s as any).npcdesc ?? '')} says timidly "I don't mean to be pushy, but I think girls should wear a subtle amount of makeup."`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                scene.text(`${((s as any).npcdesc ?? '')} looks at your makeup and says, "I don't mean to be rude, but I really like it when girls wear a subtle amount of makeup."`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} says rather crudely," You should wear a subtle amount of makeup ${((s as any).pcs_nickname ?? '')}. Anything else and it makes you look ugly."`);
              }
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_makeup_moderate') {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text(`${((s as any).npcdesc ?? '')} says timidly "I don't mean to be pushy, but I think girls should wear a good amount of makeup."`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  scene.text(`${((s as any).npcdesc ?? '')} looks at your makeup and says, "I don't mean to be rude, but I really like it when girls wear a good amount of makeup."`);
                } else {
                  scene.text(`${((s as any).npcdesc ?? '')} says rather crudely," You should wear a good amount of makeup ${((s as any).pcs_nickname ?? '')}. Anything else and it makes you look ugly."`);
                }
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_makeup_heavy') {
                if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
                  scene.text(`${((s as any).npcdesc ?? '')} says timidly "I don't mean to be pushy, but I think girls should wear a slutty amount of makeup."`);
                } else {
                  if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
                    scene.text(`${((s as any).npcdesc ?? '')} looks at your makeup and says, "I don't mean to be rude, but I really like it when girls wear a slutty amount of makeup."`);
                  } else {
                    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
                    scene.text(`${((s as any).npcdesc ?? '')} says rather crudely," You should weara slutty amount of makeup ${((s as any).pcs_nickname ?? '')}. Anything else and it makes you look ugly."`);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterHairPref(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'hair_color');
  (s as any).temp_pref = undefined;
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    (s as any).temp_pref = (((s as any).ngpPrefResult ?? 0)?.['HasPos']);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      (s as any).temp_pref = (((s as any).ngpPrefResult ?? 0)?.['NotPos']);
    }
  }
  if (((s as any).temp_pref ?? 0) === 'hair_color_black') {
    (s as any).temp_pref_haircol = 'black';
    (s as any).temp_haircol = 0;
  } else {
    if (((s as any).temp_pref ?? 0) === 'hair_color_brown') {
      (s as any).temp_pref_haircol = 'brown';
      (s as any).temp_haircol = 1;
    } else {
      if (((s as any).temp_pref ?? 0) === 'hair_color_red') {
        (s as any).temp_pref_haircol = 'red';
        (s as any).temp_haircol = 2;
      } else {
        if (((s as any).temp_pref ?? 0) === 'hair_color_blonde') {
          (s as any).temp_pref_haircol = 'blonde';
          (s as any).temp_haircol = 3;
        }
      }
    }
  }
  if (((s as any).temp_pref_haircol ?? 0) !== '') {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text(`${((s as any).npcdesc ?? '')} says sweetly "I love the color of your hair ${((s as any).pcs_nickname ?? '')}, it looks pretty on you."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          scene.text(`${((s as any).npcdesc ?? '')} says, "I think you look amazing with ${((s as any).pcs_haircolor ?? '')} hair. I love girls that have ${((s as any).pcs_haircolor ?? '')} hair."`);
        } else {
          scene.text(`${((s as any).npcdesc ?? '')} says smiling, "I can't even begin to tell you ${((s as any).pcs_nickname ?? '')} how amazing you look with ${((s as any).pcs_haircolor ?? '')} hair."`);
        }
      }
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text(`${((s as any).npcdesc ?? '')} says timidly "I don't mean to judge you, but I kind of like girls with ${((s as any).temp_pref_haircol ?? '')} hair."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          scene.text(`${((s as any).npcdesc ?? '')} says to you curtly, "I am your ${(((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} and all, but girls with ${((s as any).pcs_haircolor ?? '')} hair just doesn't do it for me. I like girls with ${((s as any).temp_pref_haircol ?? '')} hair."`);
        } else {
          scene.text(`${((s as any).npcdesc ?? '')} says with a candor tone, "You don't look good at all with ${((s as any).pcs_haircolor ?? '')} hair, but girls with ${((s as any).temp_pref_haircol ?? '')} hair look amazing."`);
        }
      }
    }
  }
  (s as any).temp_pref_haircol = undefined;
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterIQPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'stats_intel');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'stats_intel_dumb') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'stats_intel_normal') {
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'stats_intel_smart') {
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'stats_intel_dumb') {
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'stats_intel_normal') {
            if (qspFunc(s, 'pcs_has_attr', 'stats_intel_dumb')) {
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'stats_intel_smart') {
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterTitBoy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'body_tits');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_tits_small') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text(`${((s as any).npcdesc ?? '')} tells you slightly embarrassed, "Um ${((s as any).giveNick ?? '')}, your breasts make you look amazing."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          scene.text(`${((s as any).npcdesc ?? '')} says to you, "Hey ${((s as any).giveNick ?? '')}, I want you to know, your breasts make you look amazing."`);
        } else {
          scene.text(`${((s as any).npcdesc ?? '')} says to you, "Hey ${((s as any).giveNick ?? '')}, I want you to know, your breasts make you look amazing."`);
        }
      }
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_tits_average'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_tits_big') {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text(`${((s as any).npcdesc ?? '')} tells you slightly embarrassed, "H-Hey ${((s as any).giveNick ?? '')}, your breasts are beautiful."`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            scene.text(`${((s as any).npcdesc ?? '')} says to you, "Have I ever told you ${((s as any).giveNick ?? '')} that your breasts are beautiful?"`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} says to you, "You know your breasts look amazing, right ${((s as any).giveNick ?? '')}?"`);
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_tits_huge') {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text(`${((s as any).npcdesc ?? '')} tells you in slightly embarrassed voice, "H-Hey ${((s as any).giveNick ?? '')}, I think you look amazing with huge breasts."`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              scene.text(`${((s as any).npcdesc ?? '')} tells you, "Oh ${((s as any).giveNick ?? '')}, I think you look amazing with huge breasts."`);
            } else {
              scene.text(`${((s as any).npcdesc ?? '')} tells you, "Oh ${((s as any).giveNick ?? '')}, I love girls with huge breasts."`);
            }
          }
        }
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_small') {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text(`${((s as any).npcdesc ?? '')} tells you shyly, "Hey ${((s as any).giveNick ?? '')}, you look amazing, but I like girls with petite breasts."`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            scene.text(`${((s as any).npcdesc ?? '')} tells you cafefully, "Hey ${((s as any).giveNick ?? '')}, you look amazing, but I like girls with petite breasts.`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} tells you bluntly, "Hey ${((s as any).giveNick ?? '')}, you look amazing, but I like girls with petite breasts.`);
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_average') {
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text(`${((s as any).npcdesc ?? '')} tells you shyly, "Hey ${((s as any).giveNick ?? '')}, you look beautiful, but I like girls with good sized breasts, and yours are just too small."`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                scene.text(`${((s as any).npcdesc ?? '')} cafefully says to you, "Hey ${((s as any).giveNick ?? '')}, you look beautiful, but girls shouldn't have a flat chest. I like girls with good sized breasts.`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} bluntly says, "Hey ${((s as any).giveNick ?? '')}, you look beautiful, but your small breasts make you look like a dude. I like girls with good sized breasts.`);
              }
            }
          } else {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text(`${((s as any).npcdesc ?? '')} says to you, "${((s as any).pcs_firstname ?? '')}, you look amazing, but I like girls with good sized breasts, and yours are way too big.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                scene.text(`${((s as any).npcdesc ?? '')} says to you, "${((s as any).pcs_firstname ?? '')}, you look amazing, but I like girls with good sized breasts, and yours are way too big.`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} says, "${((s as any).pcs_firstname ?? '')}, you look amazing, but I like girls with good sized breasts, and yours make you look like a cow.`);
              }
            }
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big') {
            if (qspFunc(s, 'pcs_has_attr', 'body_tits_huge') === 0) {
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text(`${((s as any).npcdesc ?? '')} tells you shyly, "Hey ${((s as any).giveNick ?? '')}, you look beautiful, but I like girls with big breasts, and yours are just too small."`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  scene.text(`${((s as any).npcdesc ?? '')} cafefully says to you, "Hey ${((s as any).giveNick ?? '')}, you look beautiful, but girls shouldn't have a flat chest. I like girls with big breasts.`);
                } else {
                  scene.text(`${((s as any).npcdesc ?? '')} bluntly says, "Hey ${((s as any).giveNick ?? '')}, you look beautiful, but your small breasts make you look like a dude. I like girls with big breasts.`);
                }
              }
            } else {
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text(`${((s as any).npcdesc ?? '')} says to you, "${((s as any).pcs_firstname ?? '')}, you look amazing, but I like girls with big breasts, and yours are way too huge.`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  scene.text(`${((s as any).npcdesc ?? '')} says to you, "${((s as any).pcs_firstname ?? '')}, you look amazing, but I like girls with big breasts, and yours are way too huge.`);
                } else {
                  scene.text(`${((s as any).npcdesc ?? '')} says, "${((s as any).pcs_firstname ?? '')}, you look amazing, but I like girls with big breasts, and yours make you look like a cow.`);
                }
              }
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_huge') {
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                scene.text(`${((s as any).npcdesc ?? '')} says quietly, "Hey ${((s as any).giveNick ?? '')}, I don't mean to be mean, but I like girls with huge breasts, and yours are just too small."`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  scene.text(`${((s as any).npcdesc ?? '')} says with a very calm voice, "Hey ${((s as any).giveNick ?? '')}, I don't mean to be an ass, but I like girls with huge breasts, and yours are just not big enough for my liking."`);
                } else {
                  scene.text(`${((s as any).npcdesc ?? '')} says crudely, "Hey ${((s as any).giveNick ?? '')}, girls should have a nice big rack, and your chest does't even come close."`);
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterFigPref(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'body_bmi');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_bmi_starving'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_bmi_underweight') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text(`${((s as any).npcdesc ?? '')} tells you ${((s as any).Xe ?? '')} loves your slim figure.`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          scene.text(`${((s as any).npcdesc ?? '')} says your slim figure proves that slenderness is sexy.`);
        } else {
          scene.text(`${((s as any).npcdesc ?? '')} says your slim body makes you look like a goddess.`);
        }
      }
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_bmi_normal') {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text(`${((s as any).npcdesc ?? '')} says your figure is perfect in ${((s as any).Xyr ?? '')} eyes.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} loves how you are not too skinny or fat.`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} says your body looks amazing.`);
          }
        }
      } else {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text(`${((s as any).npcdesc ?? '')} tells you ${((s as any).Xe ?? '')} loves your thick figure.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            scene.text(`${((s as any).npcdesc ?? '')} says your curvy figure proves that women should have curves.`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} says your curvy body makes you look like a goddess.`);
          }
        }
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_starving'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_underweight') {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} prefers a woman that is skinny, and you are kind of chunky.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} prefers a woman that is thin, and you are not at all.`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} prefers a woman that is slender, and your weight makes you look ugly.`);
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_normal') {
          if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_starving', 'body_bmi_underweight')) {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text(`${((s as any).npcdesc ?? '')} quietly says you could do to gain a few pounds.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                scene.text(`${((s as any).npcdesc ?? '')} says you should eat more, because your body is too thin.`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} says you look anarexic.`);
              }
            }
          } else {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text(`${((s as any).npcdesc ?? '')} tells you that you are to overweight, and ${((s as any).Xe ?? '')} prefers a woman a bit skinnier.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                scene.text(`${((s as any).npcdesc ?? '')} says your weight is unappealing and ${((s as any).Xe ?? '')} prefers a woman that is slimmer.`);
              } else {
                scene.text(`${((s as any).npcdesc ?? '')} crudely says you look fat and you should lose some weight.`);
              }
            }
          }
        } else {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} prefers a woman that is thicker, and you are too slim.`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              scene.text(`${((s as any).npcdesc ?? '')} says ${((s as any).Xe ?? '')} thinks a woman's figure should be on the thick side, and your body is too skinny.`);
            } else {
              scene.text(`${((s as any).npcdesc ?? '')} crudely tells you ${((s as any).Xe ?? '')} prefers a woman that is thick, and you look anerexic.`);
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterClothesPref(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotTypePrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotQualPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotTopPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBottShorPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotThinPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBimbPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterFacePref(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMakePrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHairPref(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterBodyPrefTmp(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFigPref(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPierPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTattPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTitBoy(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLipsPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterAllPref(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMakePrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHairPref(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLipsPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotTypePrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotQualPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotTopPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBottShorPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotThinPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBimbPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFigPref(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPierPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTattPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTitBoy(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCheckPier(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'piercing_management', 'count');
  scene.build();
}

function enterCompliance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] >= -1) {
    scene.text(`You are a bit frustrated that ${((s as any).Xe ?? '')} doesn't like you for who you are.`);
  } else {
    if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] === -2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (3);
      scene.text(`You have done this at a couple of times and you feel… Strange thinking about how you are changing to suit ${((s as any).Xyr ?? '')} wants.`);
    } else {
      if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] === -3) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
        scene.text(`You can't understand why you feel tingly about changing into ${((s as any).Xyr ?? '')} dream girl…`);
      } else {
        if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] === -4) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (7);
          scene.text(`Your mind briefly fantasizes about turning more and more into ${((s as any).Xyr ?? '')} ideal girl…`);
        } else {
          if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] === -5) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (8);
            scene.text(`You think to yourself, "${((s as any).Xec ?? '')}is my ${((s as any).npcrelat ?? '')}, I guess it would make sense to try to be the best girl I can be for ${((s as any).Xem ?? '')}…"`);
          } else {
            if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] <= -6) {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
              scene.text(`You feel from the amount of times you have changed for ${((s as any).Xem ?? '')} you would do anything to become ${((s as any).Xyr ?? '')} ideal girlfriend.`);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_pref', '');
  const arg = s.locArg;
  switch (arg) {
    case 'clotTypePrefTmp':
      enterClotTypePrefTmp(s, scene);
      break;
    case 'clotQualPrefTmp':
      enterClotQualPrefTmp(s, scene);
      break;
    case 'clotTopPrefTmp':
      enterClotTopPrefTmp(s, scene);
      break;
    case 'bottShorPrefTmp':
      enterBottShorPrefTmp(s, scene);
      break;
    case 'clotThinPrefTmp':
      enterClotThinPrefTmp(s, scene);
      break;
    case 'bimbPrefTmp':
      enterBimbPrefTmp(s, scene);
      break;
    case 'pierPrefTmp':
      enterPierPrefTmp(s, scene);
      break;
    case 'tattPrefTmp':
      enterTattPrefTmp(s, scene);
      break;
    case 'lipsPrefTmp':
      enterLipsPrefTmp(s, scene);
      break;
    case 'makePrefTmp':
      enterMakePrefTmp(s, scene);
      break;
    case 'hairPref':
      enterHairPref(s, scene);
      break;
    case 'IQPrefTmp':
      enterIQPrefTmp(s, scene);
      break;
    case 'titBoy':
      enterTitBoy(s, scene);
      break;
    case 'figPref':
      enterFigPref(s, scene);
      break;
    case 'clothesPref':
      enterClothesPref(s, scene);
      break;
    case 'facePref':
      enterFacePref(s, scene);
      break;
    case 'bodyPrefTmp':
      enterBodyPrefTmp(s, scene);
      break;
    case 'allPref':
      enterAllPref(s, scene);
      break;
    case 'checkPier':
      enterCheckPier(s, scene);
      break;
    case 'compliance':
      enterCompliance(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lover_likes: LocationDef = {
  name: 'lover_likes',
  region: 'other',
  enter: enter,
};
