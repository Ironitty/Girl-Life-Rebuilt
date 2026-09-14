import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lover_pref', '');
  scene.build();
}

function enterClotTypePrefTmp(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $ngp_pref[] = 'clothes_style_wealthy'
  // TODO-QSP: $ngp_pref[] = 'clothes_style_fetish'
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'no_clear');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      // TODO-QSP: dynamic text: <<$npcdesc>> says, "I like the type of clothing you are wearing <<$pcs_nickname>...
      scene.text(`${((s as any).npcdesc || '')} says, "I like the type of clothing you are wearing ${((s as any).pcs_nickname || '')}. I think girls look amazing in ' + iif($ngpPrefResult['HasPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothing."`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$npcdesc>> says, "I think girls who wear ' + iif($ngpPrefResult['HasPos'] = 'c...
        scene.text(`${((s as any).npcdesc || '')} says, "I think girls who wear ' + iif($ngpPrefResult['HasPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothing look amazing. I'm glad you chose that type of clothing."`);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
        // TODO-QSP: dynamic text: <<$npcdesc>> says, "<<$pcs_nickname>>, you look fucking hot in ' + iif($ngpPrefR...
        scene.text(`${((s as any).npcdesc || '')} says, "${((s as any).pcs_nickname || '')}, you look fucking hot in ' + iif($ngpPrefResult['HasPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothes. It looks amazing on you!"`);
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        // TODO-QSP: dynamic text: <<$npcdesc>> says nerviously, "I don't mean to be rude <<$pcs_nickname>>, but I ...
        scene.text(`${((s as any).npcdesc || '')} says nerviously, "I don't mean to be rude ${((s as any).pcs_nickname || '')}, but I don't think ${((s as any).clothingworntype || '')} clothing looks nice on girls. I like girls who wear ' + iif($ngpPrefResult['NotPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothing."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> says cafefully, "<<$pcs_nickname>> to be honest, I don't think <<$c...
          scene.text(`${((s as any).npcdesc || '')} says cafefully, "${((s as any).pcs_nickname || '')} to be honest, I don't think ${((s as any).clothingworntype || '')} clothing looks good on you. I think ' + iif($ngpPrefResult['NotPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothing would look better on you."`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * ((-1) - (-2) + 1)) + ((-2))));
          // TODO-QSP: dynamic text: <<$npcdesc>> says rather rudely, "I think girls who wear <<$clothingworntype>> t...
          scene.text(`${((s as any).npcdesc || '')} says rather rudely, "I think girls who wear ${((s as any).clothingworntype || '')} type clothing looks like shit. Girls who wear ' + iif($ngpPrefResult['NotPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' turn me on much more."`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClotQualPrefTmp(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $ngp_pref[] = 'clothes_quality_low'
  // TODO-QSP: $ngp_pref[] = 'clothes_quality_high'
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'no_clear');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
      }
    }
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_quality_low') {
      // TODO-QSP: $temp_text[0] = 'expensive'
    } else {
      // TODO-QSP: $temp_text[0] = 'cheap'
    }
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
        // TODO-QSP: $temp_text[0] = 'high'
        // TODO-QSP: $temp_text[1] = 'expensive'
      } else {
        // TODO-QSP: $temp_text[0] = 'low'
        // TODO-QSP: $temp_text[1] = 'cheap'
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClotTopPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'clothes_cleavage');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_cleavage_none') {
      // TODO-QSP: $temp_text[0] = 'only a little bit of'
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_cleavage_small') {
        // TODO-QSP: $temp_text[0] = 'only some'
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_cleavage_medium') {
          // TODO-QSP: $temp_text[0] = 'a lot of'
        } else {
          // TODO-QSP: $temp_text[0] = 'a huge amount of'
        }
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      // TODO-QSP: dynamic text: <<$npcdesc>> says with a blush <<$Xe>> likes that you are wearing clothes with '...
      scene.text(`${((s as any).npcdesc || '')} says with a blush ${((s as any).Xe || '')} likes that you are wearing clothes with ' + $temp_text[0] + 'cleavage."`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        // TODO-QSP: dynamic text: <<$npcdesc>> looks at your cleavage and says <<$Xe>> is glad you wear clothes wi...
        scene.text(`${((s as any).npcdesc || '')} looks at your cleavage and says ${((s as any).Xe || '')} is glad you wear clothes with ' + $temp_text[0] + ' cleavage."`);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$npcdesc>> looks at your cleavage and says <<$Xe>> likes that you wear clothes...
        scene.text(`${((s as any).npcdesc || '')} looks at your cleavage and says ${((s as any).Xe || '')} likes that you wear clothes with ' + $temp_text[0] + ' cleavage, and anything else is trash."`);
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_cleavage_none') {
        // TODO-QSP: $temp_text[0] = 'only a little bit of'
        // TODO-QSP: $temp_text[1] = 'too much'
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_cleavage_small') {
          // TODO-QSP: $temp_text[0] = 'only some'
          if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_none')) {
            // TODO-QSP: $temp_text[1] = 'too little'
          } else {
            // TODO-QSP: $temp_text[1] = 'too much'
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_cleavage_medium') {
            // TODO-QSP: $temp_text[0] = 'a lot of'
            if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_large') === 0) {
              // TODO-QSP: $temp_text[1] = 'too little'
            } else {
              // TODO-QSP: $temp_text[1] = 'too much'
            }
          } else {
            // TODO-QSP: $temp_text[0] = 'a huge amount of'
            // TODO-QSP: $temp_text[1] = 'too little'
          }
        }
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        // TODO-QSP: dynamic text: <<$npcdesc>> says shyly that <<$Xe>> likes girls who wear clothes with ' + $temp...
        scene.text(`${((s as any).npcdesc || '')} says shyly that ${((s as any).Xe || '')} likes girls who wear clothes with ' + $temp_text[0] + ' cleavage, and you kind of have ' + $temp_text[1] + ' ${((s as any).Xyr || '')} taste."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with ' + $temp_text[0] +...
          scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with ' + $temp_text[0] + ' cleavage, and anything else is way ' + $temp_text[1] + '."`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          // TODO-QSP: dynamic text: <<$npcdesc>> looks at your cleavage and says <<$Xe>> likes girls that wear cloth...
          scene.text(`${((s as any).npcdesc || '')} looks at your cleavage and says ${((s as any).Xe || '')} likes girls that wear clothes with ' + $temp_text[0] + ' cleavage, and anything else is trash."`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBottShorPrefTmp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloSkirt ?? 0) > 0) {
    qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'clothes_skirt');
  } else {
    qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'clothes_pants');
  }
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_long') {
        // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says that <<$Xe>> likes that you are wearin...
        scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says that ${((s as any).Xe || '')} likes that you are wearing clothes with only long skirts."`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt, blushing, and says that <<$Xe>> likes that you...
          scene.text(`${((s as any).npcdesc || '')} looks at your skirt, blushing, and says that ${((s as any).Xe || '')} likes that you are wearing clothes with slightly short skirts."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_short') {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says with a blush <<$Xe>> likes that you ar...
            scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says with a blush ${((s as any).Xe || '')} likes that you are wearing clothes with really short skirts, and that ${((s as any).Xe || '')} thinks the length looks great on you."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says that <<$Xe>> likes that you are wearin...
              scene.text(`${((s as any).npcdesc || '')} looks at your pants and says that ${((s as any).Xe || '')} likes that you are wearing clothes with only long pants."`);
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_normal') {
                // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants, blushing, and says that <<$Xe>> likes that you...
                scene.text(`${((s as any).npcdesc || '')} looks at your pants, blushing, and says that ${((s as any).Xe || '')} likes that you are wearing clothes with short pants."`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says with a blush <<$Xe>> likes that you ar...
                scene.text(`${((s as any).npcdesc || '')} looks at your pants and says with a blush ${((s as any).Xe || '')} likes that you are wearing clothes with really short pants, and that ${((s as any).Xe || '')} thinks the length looks great on you."`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_long') {
          // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says <<$Xe>> is glad you wear clothes with ...
          scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says ${((s as any).Xe || '')} is glad you wear clothes with only long skirts."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_normal') {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says <<$Xe>> is glad you wear clothes with ...
            scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says ${((s as any).Xe || '')} is glad you wear clothes with really short skirts, and yours makes you look like a seductress."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_short') {
              // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says <<$Xe>> is glad you wear clothes with ...
              scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says ${((s as any).Xe || '')} is glad you wear clothes with really short skirts, and yours makes you look like a seductress."`);
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_long') {
                // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says <<$Xe>> is glad you wear clothes with ...
                scene.text(`${((s as any).npcdesc || '')} looks at your pants and says ${((s as any).Xe || '')} is glad you wear clothes with only long pants."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_normal') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says <<$Xe>> is glad you wear clothes with ...
                  scene.text(`${((s as any).npcdesc || '')} looks at your pants and says ${((s as any).Xe || '')} is glad you wear clothes with short pants."`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says <<$Xe>> is glad you wear clothes with ...
                  scene.text(`${((s as any).npcdesc || '')} looks at your pants and says ${((s as any).Xe || '')} is glad you wear clothes with really short pants, and yours makes you look like a seductress."`);
                }
              }
            }
          }
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_long') {
          // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says <<$Xe>> likes that you wear clothes wi...
          scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says ${((s as any).Xe || '')} likes that you wear clothes with long skirts, and anything else is trash."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_normal') {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says <<$Xe>> likes that you wear clothes wi...
            scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says ${((s as any).Xe || '')} likes that you wear clothes with really short skirts, it makes you look sexy."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_skirt_short') {
              // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says <<$Xe>> likes that you wear clothes wi...
              scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says ${((s as any).Xe || '')} likes that you wear clothes with really short skirts, it makes you look sexy."`);
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_long') {
                // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says <<$Xe>> likes that you wear clothes wi...
                scene.text(`${((s as any).npcdesc || '')} looks at your pants and says ${((s as any).Xe || '')} likes that you wear clothes with long pants, and anything else is trash."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_pants_normal') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says <<$Xe>> likes that you wear clothes wi...
                  scene.text(`${((s as any).npcdesc || '')} looks at your pants and says ${((s as any).Xe || '')} likes that you wear clothes with short pants, and anything else is trash."`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says <<$Xe>> likes that you wear clothes wi...
                  scene.text(`${((s as any).npcdesc || '')} looks at your pants and says ${((s as any).Xe || '')} likes that you wear clothes with really short pants, it makes you look sexy."`);
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
          // TODO-QSP: dynamic text: <<$npcdesc>> says shyly that <<$Xe>> likes girls who wear long skirts, and you k...
          scene.text(`${((s as any).npcdesc || '')} says shyly that ${((s as any).Xe || '')} likes girls who wear long skirts, and you kind of show too much for ${((s as any).Xyr || '')} taste."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_normal') {
            if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
              // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says shyly that <<$Xe>> likes girls who wea...
              scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says shyly that ${((s as any).Xe || '')} likes girls who wear clothes with slightly short skirts, and you kind of have too long of clothing for ${((s as any).Xyr || '')} taste."`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> says shyly that <<$Xe>> likes girls who wear clothes with slightly ...
              scene.text(`${((s as any).npcdesc || '')} says shyly that ${((s as any).Xe || '')} likes girls who wear clothes with slightly short skirts, and you kind of show too much for ${((s as any).Xyr || '')} taste."`);
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_short') {
              // TODO-QSP: dynamic text: <<$npcdesc>> looks at your skirt and says shyly that <<$Xe>> likes girls who wea...
              scene.text(`${((s as any).npcdesc || '')} looks at your skirt and says shyly that ${((s as any).Xe || '')} likes girls who wear clothes with really short skirts, and you kind of show too little for ${((s as any).Xyr || '')} taste."`);
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_long') {
                // TODO-QSP: dynamic text: <<$npcdesc>> says shyly that <<$Xe>> likes girls who wear clothes with long pant...
                scene.text(`${((s as any).npcdesc || '')} says shyly that ${((s as any).Xe || '')} likes girls who wear clothes with long pants, and you kind of show too much for ${((s as any).Xyr || '')} taste."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_normal') {
                  if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says shyly that <<$Xe>> likes girls who wea...
                    scene.text(`${((s as any).npcdesc || '')} looks at your pants and says shyly that ${((s as any).Xe || '')} likes girls who wear clothes with short pants, and you kind of have too long pants for ${((s as any).Xyr || '')} taste."`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> says shyly that <<$Xe>> likes girls who wear clothes with short pan...
                    scene.text(`${((s as any).npcdesc || '')} says shyly that ${((s as any).Xe || '')} likes girls who wear clothes with short pants, and you kind of show too much for ${((s as any).Xyr || '')} taste."`);
                  }
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pants and says shyly that <<$Xe>> likes girls who wea...
                  scene.text(`${((s as any).npcdesc || '')} looks at your pants and says shyly that ${((s as any).Xe || '')} likes girls who wear clothes with really short pants, and you kind of show too little for ${((s as any).Xyr || '')} taste."`);
                }
              }
            }
          }
        }
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_long') {
            // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with long skirts, and yo...
            scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with long skirts, and yours makes you look lewd."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_normal') {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with short pants, and yo...
                scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with short pants, and yours makes you look prudish."`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with slightly short skir...
                scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with slightly short skirts, and yours makes you look lewd."`);
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_short') {
                // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with really short skirts...
                scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with really short skirts, and yours makes you look prudish."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_long') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with long pants, and you...
                  scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with long pants, and yours makes you look lewd."`);
                } else {
                  if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_normal') {
                    if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with short pants, and yo...
                      scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with short pants, and yours makes you look prudish."`);
                    } else {
                      // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with short pants, and yo...
                      scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with short pants, and yours makes you look lewd."`);
                    }
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with really short pants,...
                    scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} likes girls that wear clothes with really short pants, and yours makes you look prudish."`);
                  }
                }
              }
            }
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_long') {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your legs and says <<$Xe>> likes girls that wear clothes w...
            scene.text(`${((s as any).npcdesc || '')} looks at your legs and says ${((s as any).Xe || '')} likes girls that wear clothes with long skirts, and yours makes you look like a slut."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_normal') {
              if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                // TODO-QSP: dynamic text: <<$npcdesc>> looks at your legs and says <<$Xe>> likes girls that wear clothes w...
                scene.text(`${((s as any).npcdesc || '')} looks at your legs and says ${((s as any).Xe || '')} likes girls that wear clothes with slightly short skirts, and yours makes you look like a prude."`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> looks at your legs and says <<$Xe>> likes girls that wear clothes w...
                scene.text(`${((s as any).npcdesc || '')} looks at your legs and says ${((s as any).Xe || '')} likes girls that wear clothes with slightly short skirts, and yours makes you look like a slut."`);
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_skirt_short') {
                // TODO-QSP: dynamic text: <<$npcdesc>> looks at your legs and says <<$Xe>> likes girls that wear clothes w...
                scene.text(`${((s as any).npcdesc || '')} looks at your legs and says ${((s as any).Xe || '')} likes girls that wear clothes with really short skirts, and yours makes you look like a prude."`);
              } else {
                if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_long') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> looks at your legs and says <<$Xe>> likes girls that wear clothes w...
                  scene.text(`${((s as any).npcdesc || '')} looks at your legs and says ${((s as any).Xe || '')} likes girls that wear clothes with long pants, and yours makes you look like a slut."`);
                } else {
                  if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_pants_normal') {
                    if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_long')) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> looks at your legs and says <<$Xe>> likes girls that wear clothes w...
                      scene.text(`${((s as any).npcdesc || '')} looks at your legs and says ${((s as any).Xe || '')} likes girls that wear clothes with short pants, and yours makes you look like a prude."`);
                    } else {
                      // TODO-QSP: dynamic text: <<$npcdesc>> looks at your legs and says <<$Xe>> likes girls that wear clothes w...
                      scene.text(`${((s as any).npcdesc || '')} looks at your legs and says ${((s as any).Xe || '')} likes girls that wear clothes with short pants, and yours makes you look like a slut."`);
                    }
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> looks at your legs and says <<$Xe>> likes girls that wear clothes w...
                    scene.text(`${((s as any).npcdesc || '')} looks at your legs and says ${((s as any).Xe || '')} likes girls that wear clothes with really short pants, and yours makes you look like a prude."`);
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

function enterClotThinPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'clothes_thin');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== 'clothes_thin_high') {
        // TODO-QSP: dynamic text: <<$npcdesc>> tells you that <<$Xe>> thinks your outfit's thinness is just right,...
        scene.text(`${((s as any).npcdesc || '')} tells you that ${((s as any).Xe || '')} thinks your outfit's thinness is just right, not too thick and not to thin."`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> tells you that <<$Xe>> thinks your outfit's thinness is perfect, an...
        scene.text(`${((s as any).npcdesc || '')} tells you that ${((s as any).Xe || '')} thinks your outfit's thinness is perfect, and ${((s as any).Xe || '')} says shyly ${((s as any).Xe || '')} likes to look at your body's curves."`);
      }
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== 'clothes_thin_high') {
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you that <<$Xe>> thinks your outfit's thinness is just right,...
          scene.text(`${((s as any).npcdesc || '')} tells you that ${((s as any).Xe || '')} thinks your outfit's thinness is just right, not too thick and not to thin."`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you that <<$Xe>> thinks your outfit's thinness is perfect, an...
          scene.text(`${((s as any).npcdesc || '')} tells you that ${((s as any).Xe || '')} thinks your outfit's thinness is perfect, and ${((s as any).Xe || '')} loves to see every curve of your body."`);
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== 'clothes_thin_high') {
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you that <<$Xe>> thinks your outfit's thinness is just right,...
          scene.text(`${((s as any).npcdesc || '')} tells you that ${((s as any).Xe || '')} thinks your outfit's thinness is just right, not too thick and not to thin."`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you that <<$Xe>> thinks your outfit's thinness is perfect, an...
          scene.text(`${((s as any).npcdesc || '')} tells you that ${((s as any).Xe || '')} thinks your outfit's thinness is perfect, and ${((s as any).Xyr || '')} eyes take in the curves of your body."`);
        }
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_low'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_medium'  &&  qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
          // TODO-QSP: dynamic text: <<$npcdesc>> looks at the thinness of your outfit and says that your outfit is t...
          scene.text(`${((s as any).npcdesc || '')} looks at the thinness of your outfit and says that your outfit is too thin, and looking down ${((s as any).Xe || '')} mumbles that it makes you look like a slut."`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> looks at the thinness of your outfit and says that your outfit is t...
          scene.text(`${((s as any).npcdesc || '')} looks at the thinness of your outfit and says that your outfit is too thick, and looking down ${((s as any).Xe || '')} mumbles that it makes you look like a prude."`);
        }
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_low'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_medium'  &&  qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at the thinness of your outfit and says that your outfit is t...
            scene.text(`${((s as any).npcdesc || '')} looks at the thinness of your outfit and says that your outfit is too thin, and that it makes you look like a slut."`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at the thinness of your outfit and says that your outfit is t...
            scene.text(`${((s as any).npcdesc || '')} looks at the thinness of your outfit and says that your outfit is too thick, and that it makes you look like a prude."`);
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_low'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_medium'  &&  qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at the thinness of your outfit and says that your outfit is t...
            scene.text(`${((s as any).npcdesc || '')} looks at the thinness of your outfit and says that your outfit is too thin, and only whores wear clothes that thin."`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at the thinness of your outfit and says that your outfit is t...
            scene.text(`${((s as any).npcdesc || '')} looks at the thinness of your outfit and says that your outfit is too thick, and only prudes wear clothes that thick."`);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBimbPrefTmp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_pref_values ?? 0)?.['clothes_style_bimbo'] > 0) {
    if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        // TODO-QSP: dynamic text: <<$npcdesc>> tells you blushing that <<$Xe>> likes that you look like a bimbo."
        scene.text(`${((s as any).npcdesc || '')} tells you blushing that ${((s as any).Xe || '')} likes that you look like a bimbo."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you that your bimbo clothes look amazing on you."
          scene.text(`${((s as any).npcdesc || '')} tells you that your bimbo clothes look amazing on you."`);
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you that <<$Xe>> thinks all girls should dress up as much as ...
          scene.text(`${((s as any).npcdesc || '')} tells you that ${((s as any).Xe || '')} thinks all girls should dress up as much as a bimbo as you are."`);
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
      // TODO-QSP: dynamic text: <<$npcdesc>> says you would look much better dressed up as a bimbo."
      scene.text(`${((s as any).npcdesc || '')} says you would look much better dressed up as a bimbo."`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPierPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_piercings');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_piercings_none') {
    // TODO-QSP: dynamic text: <<$npcdesc>> is glad to see you wear no piercings.
    scene.text(`${((s as any).npcdesc || '')} is glad to see you wear no piercings.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_piercings_few') {
      // TODO-QSP: dynamic text: <<$npcdesc>> is glad to see you wear very few piercings.
      scene.text(`${((s as any).npcdesc || '')} is glad to see you wear very few piercings.`);
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_piercings_multiple') {
        // TODO-QSP: dynamic text: <<$npcdesc>> is glad you wear a few piercings, stating it makes any girl look go...
        scene.text(`${((s as any).npcdesc || '')} is glad you wear a few piercings, stating it makes any girl look good.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_piercings_lot') {
          // TODO-QSP: dynamic text: <<$npcdesc>> is glad you wear many piercings, stating makes any girl look good.
          scene.text(`${((s as any).npcdesc || '')} is glad you wear many piercings, stating makes any girl look good.`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_none'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_few') {
            // TODO-QSP: dynamic text: <<$npcdesc>> sees your piercings and tells you that you have to many piercings a...
            scene.text(`${((s as any).npcdesc || '')} sees your piercings and tells you that you have to many piercings and anything more than two is too much.`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_multiple') {
              if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercings_lot') === 0) {
                // TODO-QSP: dynamic text: <<$npcdesc>> comments on your lack of piercings and says a woman should at least...
                scene.text(`${((s as any).npcdesc || '')} comments on your lack of piercings and says a woman should at least have three piercings.`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> comments on your many piercings and says a woman should at most fiv...
                scene.text(`${((s as any).npcdesc || '')} comments on your many piercings and says a woman should at most five piercings.`);
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_piercings_lot') {
                // TODO-QSP: dynamic text: <<$npcdesc>> comments on your lack of piercings and says a woman should at least...
                scene.text(`${((s as any).npcdesc || '')} comments on your lack of piercings and says a woman should at least have six piercings.`);
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

function enterTattPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_tattoos');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_tattoos_none') {
    // TODO-QSP: dynamic text: <<$npcdesc>> is glad to see you have no tattoos.
    scene.text(`${((s as any).npcdesc || '')} is glad to see you have no tattoos.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_tattoos_few') {
      // TODO-QSP: dynamic text: <<$npcdesc>> is glad to see you have very few tattoos.
      scene.text(`${((s as any).npcdesc || '')} is glad to see you have very few tattoos.`);
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_tattoos_multiple') {
        // TODO-QSP: dynamic text: <<$npcdesc>> is glad you have a few tattoos, stating it makes any girl look good...
        scene.text(`${((s as any).npcdesc || '')} is glad you have a few tattoos, stating it makes any girl look good.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'cosmetics_tattoos_lot') {
          // TODO-QSP: dynamic text: <<$npcdesc>> is glad you have many tattoos, stating makes any girl look good.
          scene.text(`${((s as any).npcdesc || '')} is glad you have many tattoos, stating makes any girl look good.`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_none'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_few') {
            // TODO-QSP: dynamic text: <<$npcdesc>> sees your tattoos and tells you that you have to many tattoos and a...
            scene.text(`${((s as any).npcdesc || '')} sees your tattoos and tells you that you have to many tattoos and anything more than two is too much.`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_multiple') {
              if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoos_lot') === 0) {
                // TODO-QSP: dynamic text: <<$npcdesc>> comments on your lack of tattoos and says a woman should at least h...
                scene.text(`${((s as any).npcdesc || '')} comments on your lack of tattoos and says a woman should at least have three tattoos.`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> comments on your many tattoos and says a woman should at most five ...
                scene.text(`${((s as any).npcdesc || '')} comments on your many tattoos and says a woman should at most five tattoos.`);
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_tattoos_lot') {
                // TODO-QSP: dynamic text: <<$npcdesc>> comments on your lack of tattoos and says a woman should at least h...
                scene.text(`${((s as any).npcdesc || '')} comments on your lack of tattoos and says a woman should at least have six tattoos.`);
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

function enterLipsPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_lips');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_thin'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_normal'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_plump') {
    // TODO-QSP: dynamic text: <<$npcdesc>> makes a comment on how <<$Xe>> likes that your lips aren't outrageo...
    scene.text(`${((s as any).npcdesc || '')} makes a comment on how ${((s as any).Xe || '')} likes that your lips aren't outrageously huge.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_big'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_lips_pillowy') {
      // TODO-QSP: dynamic text: <<$npcdesc>> makes a comment on how <<$Xe>> likes that your lips are huge.
      scene.text(`${((s as any).npcdesc || '')} makes a comment on how ${((s as any).Xe || '')} likes that your lips are huge.`);
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_thin'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_normal'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_plump') {
        // TODO-QSP: dynamic text: <<$npcdesc>> makes a quick comment on how <<$Xe>> hates the size of your lips, f...
        scene.text(`${((s as any).npcdesc || '')} makes a quick comment on how ${((s as any).Xe || '')} hates the size of your lips, for ${((s as any).Xem || '')} it's way too big.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_big'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_lips_pillowy') {
          // TODO-QSP: dynamic text: <<$npcdesc>> makes a quick comment on how <<$Xe>> hates the size of your lips, f...
          scene.text(`${((s as any).npcdesc || '')} makes a quick comment on how ${((s as any).Xe || '')} hates the size of your lips, for ${((s as any).Xem || '')} they are not big enough.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMakePrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_makeup');
  if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_running')) {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      // TODO-QSP: dynamic text: <<$npcdesc>> looks at you and nerviously says, "Your makeup is running."
      scene.text(`${((s as any).npcdesc || '')} looks at you and nerviously says, "Your makeup is running."`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        // TODO-QSP: dynamic text: <<$npcdesc>> says in a disapproving tone, "Your makeup is running."
        scene.text(`${((s as any).npcdesc || '')} says in a disapproving tone, "Your makeup is running."`);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        // TODO-QSP: dynamic text: <<$npcdesc>> says in a rude tone, "Your makeup is running."
        scene.text(`${((s as any).npcdesc || '')} says in a rude tone, "Your makeup is running."`);
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== ''  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      if (qspFunc(s, 'pcs_has_attr', 'cosmetics_brushed_not')) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> says timidly "I guess you had to leave in a hurry huh?"
          scene.text(`${((s as any).npcdesc || '')} says timidly "I guess you had to leave in a hurry huh?"`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> says questionly, "I guess you had to leave in a hurry?"
            scene.text(`${((s as any).npcdesc || '')} says questionly, "I guess you had to leave in a hurry?"`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> says rudely, "Couldn't take the time to brush your hair?"
            scene.text(`${((s as any).npcdesc || '')} says rudely, "Couldn't take the time to brush your hair?"`);
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your face and says, "I love the way you did your makeup."
            scene.text(`${((s as any).npcdesc || '')} looks at your face and says, "I love the way you did your makeup."`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              // TODO-QSP: dynamic text: <<$npcdesc>> looks at your face and says, "I love the way you did your makeup. I...
              scene.text(`${((s as any).npcdesc || '')} looks at your face and says, "I love the way you did your makeup. It makes you look beautiful."`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> says with a smile, "Now THAT'S how a woman should do their makeup, ...
              scene.text(`${((s as any).npcdesc || '')} says with a smile, "Now THAT'S how a woman should do their makeup, it looks sexy on you!"`);
            }
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_makeup_light') {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> says timidly "I don't mean to be pushy, but I think girls should we...
              scene.text(`${((s as any).npcdesc || '')} says timidly "I don't mean to be pushy, but I think girls should wear a subtle amount of makeup."`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                // TODO-QSP: dynamic text: <<$npcdesc>> looks at your makeup and says, "I don't mean to be rude, but I real...
                scene.text(`${((s as any).npcdesc || '')} looks at your makeup and says, "I don't mean to be rude, but I really like it when girls wear a subtle amount of makeup."`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> says rather crudely," You should wear a subtle amount of makeup <<$...
                scene.text(`${((s as any).npcdesc || '')} says rather crudely," You should wear a subtle amount of makeup ${((s as any).pcs_nickname || '')}. Anything else and it makes you look ugly."`);
              }
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_makeup_moderate') {
              qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                // TODO-QSP: dynamic text: <<$npcdesc>> says timidly "I don't mean to be pushy, but I think girls should we...
                scene.text(`${((s as any).npcdesc || '')} says timidly "I don't mean to be pushy, but I think girls should wear a good amount of makeup."`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> looks at your makeup and says, "I don't mean to be rude, but I real...
                  scene.text(`${((s as any).npcdesc || '')} looks at your makeup and says, "I don't mean to be rude, but I really like it when girls wear a good amount of makeup."`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> says rather crudely," You should wear a good amount of makeup <<$pc...
                  scene.text(`${((s as any).npcdesc || '')} says rather crudely," You should wear a good amount of makeup ${((s as any).pcs_nickname || '')}. Anything else and it makes you look ugly."`);
                }
              }
            } else {
              if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'cosmetics_makeup_heavy') {
                if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
                  // TODO-QSP: dynamic text: <<$npcdesc>> says timidly "I don't mean to be pushy, but I think girls should we...
                  scene.text(`${((s as any).npcdesc || '')} says timidly "I don't mean to be pushy, but I think girls should wear a slutty amount of makeup."`);
                } else {
                  if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
                    // TODO-QSP: dynamic text: <<$npcdesc>> looks at your makeup and says, "I don't mean to be rude, but I real...
                    scene.text(`${((s as any).npcdesc || '')} looks at your makeup and says, "I don't mean to be rude, but I really like it when girls wear a slutty amount of makeup."`);
                  } else {
                    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
                    // TODO-QSP: dynamic text: <<$npcdesc>> says rather crudely," You should weara slutty amount of makeup <<$p...
                    scene.text(`${((s as any).npcdesc || '')} says rather crudely," You should weara slutty amount of makeup ${((s as any).pcs_nickname || '')}. Anything else and it makes you look ugly."`);
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

function enterHairPref(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
    }
  }
  if (((s as any).temp_pref ?? 0) === 'hair_color_black') {
    (s as any).temp_haircol = 0;
  } else {
    if (((s as any).temp_pref ?? 0) === 'hair_color_brown') {
      (s as any).temp_haircol = 1;
    } else {
      if (((s as any).temp_pref ?? 0) === 'hair_color_red') {
        (s as any).temp_haircol = 2;
      } else {
        if (((s as any).temp_pref ?? 0) === 'hair_color_blonde') {
          (s as any).temp_haircol = 3;
        }
      }
    }
  }
  if (((s as any).temp_pref_haircol ?? 0) !== '') {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> says sweetly "I love the color of your hair <<$pcs_nickname>>, it l...
        scene.text(`${((s as any).npcdesc || '')} says sweetly "I love the color of your hair ${((s as any).pcs_nickname || '')}, it looks pretty on you."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> says, "I think you look amazing with <<$pcs_haircolor>> hair. I lov...
          scene.text(`${((s as any).npcdesc || '')} says, "I think you look amazing with ${((s as any).pcs_haircolor || '')} hair. I love girls that have ${((s as any).pcs_haircolor || '')} hair."`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> says smiling, "I can't even begin to tell you <<$pcs_nickname>> how...
          scene.text(`${((s as any).npcdesc || '')} says smiling, "I can't even begin to tell you ${((s as any).pcs_nickname || '')} how amazing you look with ${((s as any).pcs_haircolor || '')} hair."`);
        }
      }
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> says timidly "I don't mean to judge you, but I kind of like girls w...
        scene.text(`${((s as any).npcdesc || '')} says timidly "I don't mean to judge you, but I kind of like girls with ${((s as any).temp_pref_haircol || '')} hair."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> says to you curtly, "I am your <<$npc_nickname[$npcID]>> and all, b...
          scene.text(`${((s as any).npcdesc || '')} says to you curtly, "I am your ${((s as any).npc_nickname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} and all, but girls with ${((s as any).pcs_haircolor || '')} hair just doesn't do it for me. I like girls with ${((s as any).temp_pref_haircol || '')} hair."`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> says with a candor tone, "You don't look good at all with <<$pcs_ha...
          scene.text(`${((s as any).npcdesc || '')} says with a candor tone, "You don't look good at all with ${((s as any).pcs_haircolor || '')} hair, but girls with ${((s as any).temp_pref_haircol || '')} hair look amazing."`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterIQPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'stats_intel');
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
  // TODO-QSP: end
  scene.build();
}

function enterTitBoy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_tits_small') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> tells you slightly embarrassed, "Um <<$giveNick>>, your breasts mak...
        scene.text(`${((s as any).npcdesc || '')} tells you slightly embarrassed, "Um ${((s as any).giveNick || '')}, your breasts make you look amazing."`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> says to you, "Hey <<$giveNick>>, I want you to know, your breasts m...
          scene.text(`${((s as any).npcdesc || '')} says to you, "Hey ${((s as any).giveNick || '')}, I want you to know, your breasts make you look amazing."`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> says to you, "Hey <<$giveNick>>, I want you to know, your breasts m...
          scene.text(`${((s as any).npcdesc || '')} says to you, "Hey ${((s as any).giveNick || '')}, I want you to know, your breasts make you look amazing."`);
        }
      }
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_tits_average'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_tits_big') {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you slightly embarrassed, "H-Hey <<$giveNick>>, your breasts ...
          scene.text(`${((s as any).npcdesc || '')} tells you slightly embarrassed, "H-Hey ${((s as any).giveNick || '')}, your breasts are beautiful."`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> says to you, "Have I ever told you <<$giveNick>> that your breasts ...
            scene.text(`${((s as any).npcdesc || '')} says to you, "Have I ever told you ${((s as any).giveNick || '')} that your breasts are beautiful?"`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> says to you, "You know your breasts look amazing, right <<$giveNick...
            scene.text(`${((s as any).npcdesc || '')} says to you, "You know your breasts look amazing, right ${((s as any).giveNick || '')}?"`);
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_tits_huge') {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> tells you in slightly embarrassed voice, "H-Hey <<$giveNick>>, I th...
            scene.text(`${((s as any).npcdesc || '')} tells you in slightly embarrassed voice, "H-Hey ${((s as any).giveNick || '')}, I think you look amazing with huge breasts."`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              // TODO-QSP: dynamic text: <<$npcdesc>> tells you, "Oh <<$giveNick>>, I think you look amazing with huge br...
              scene.text(`${((s as any).npcdesc || '')} tells you, "Oh ${((s as any).giveNick || '')}, I think you look amazing with huge breasts."`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> tells you, "Oh <<$giveNick>>, I love girls with huge breasts."
              scene.text(`${((s as any).npcdesc || '')} tells you, "Oh ${((s as any).giveNick || '')}, I love girls with huge breasts."`);
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
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you shyly, "Hey <<$giveNick>>, you look amazing, but I like g...
          scene.text(`${((s as any).npcdesc || '')} tells you shyly, "Hey ${((s as any).giveNick || '')}, you look amazing, but I like girls with petite breasts."`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> tells you cafefully, "Hey <<$giveNick>>, you look amazing, but I li...
            scene.text(`${((s as any).npcdesc || '')} tells you cafefully, "Hey ${((s as any).giveNick || '')}, you look amazing, but I like girls with petite breasts.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> tells you bluntly, "Hey <<$giveNick>>, you look amazing, but I like...
            scene.text(`${((s as any).npcdesc || '')} tells you bluntly, "Hey ${((s as any).giveNick || '')}, you look amazing, but I like girls with petite breasts.`);
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_average') {
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> tells you shyly, "Hey <<$giveNick>>, you look beautiful, but I like...
              scene.text(`${((s as any).npcdesc || '')} tells you shyly, "Hey ${((s as any).giveNick || '')}, you look beautiful, but I like girls with good sized breasts, and yours are just too small."`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                // TODO-QSP: dynamic text: <<$npcdesc>> cafefully says to you, "Hey <<$giveNick>>, you look beautiful, but ...
                scene.text(`${((s as any).npcdesc || '')} cafefully says to you, "Hey ${((s as any).giveNick || '')}, you look beautiful, but girls shouldn't have a flat chest. I like girls with good sized breasts.`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> bluntly says, "Hey <<$giveNick>>, you look beautiful, but your smal...
                scene.text(`${((s as any).npcdesc || '')} bluntly says, "Hey ${((s as any).giveNick || '')}, you look beautiful, but your small breasts make you look like a dude. I like girls with good sized breasts.`);
              }
            }
          } else {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> says to you, "<<$pcs_firstname>>, you look amazing, but I like girl...
              scene.text(`${((s as any).npcdesc || '')} says to you, "${((s as any).pcs_firstname || '')}, you look amazing, but I like girls with good sized breasts, and yours are way too big.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                // TODO-QSP: dynamic text: <<$npcdesc>> says to you, "<<$pcs_firstname>>, you look amazing, but I like girl...
                scene.text(`${((s as any).npcdesc || '')} says to you, "${((s as any).pcs_firstname || '')}, you look amazing, but I like girls with good sized breasts, and yours are way too big.`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> says, "<<$pcs_firstname>>, you look amazing, but I like girls with ...
                scene.text(`${((s as any).npcdesc || '')} says, "${((s as any).pcs_firstname || '')}, you look amazing, but I like girls with good sized breasts, and yours make you look like a cow.`);
              }
            }
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big') {
            if (qspFunc(s, 'pcs_has_attr', 'body_tits_huge') === 0) {
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                // TODO-QSP: dynamic text: <<$npcdesc>> tells you shyly, "Hey <<$giveNick>>, you look beautiful, but I like...
                scene.text(`${((s as any).npcdesc || '')} tells you shyly, "Hey ${((s as any).giveNick || '')}, you look beautiful, but I like girls with big breasts, and yours are just too small."`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> cafefully says to you, "Hey <<$giveNick>>, you look beautiful, but ...
                  scene.text(`${((s as any).npcdesc || '')} cafefully says to you, "Hey ${((s as any).giveNick || '')}, you look beautiful, but girls shouldn't have a flat chest. I like girls with big breasts.`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> bluntly says, "Hey <<$giveNick>>, you look beautiful, but your smal...
                  scene.text(`${((s as any).npcdesc || '')} bluntly says, "Hey ${((s as any).giveNick || '')}, you look beautiful, but your small breasts make you look like a dude. I like girls with big breasts.`);
                }
              }
            } else {
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                // TODO-QSP: dynamic text: <<$npcdesc>> says to you, "<<$pcs_firstname>>, you look amazing, but I like girl...
                scene.text(`${((s as any).npcdesc || '')} says to you, "${((s as any).pcs_firstname || '')}, you look amazing, but I like girls with big breasts, and yours are way too huge.`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> says to you, "<<$pcs_firstname>>, you look amazing, but I like girl...
                  scene.text(`${((s as any).npcdesc || '')} says to you, "${((s as any).pcs_firstname || '')}, you look amazing, but I like girls with big breasts, and yours are way too huge.`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> says, "<<$pcs_firstname>>, you look amazing, but I like girls with ...
                  scene.text(`${((s as any).npcdesc || '')} says, "${((s as any).pcs_firstname || '')}, you look amazing, but I like girls with big breasts, and yours make you look like a cow.`);
                }
              }
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_huge') {
              if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                // TODO-QSP: dynamic text: <<$npcdesc>> says quietly, "Hey <<$giveNick>>, I don't mean to be mean, but I li...
                scene.text(`${((s as any).npcdesc || '')} says quietly, "Hey ${((s as any).giveNick || '')}, I don't mean to be mean, but I like girls with huge breasts, and yours are just too small."`);
              } else {
                if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  // TODO-QSP: dynamic text: <<$npcdesc>> says with a very calm voice, "Hey <<$giveNick>>, I don't mean to be...
                  scene.text(`${((s as any).npcdesc || '')} says with a very calm voice, "Hey ${((s as any).giveNick || '')}, I don't mean to be an ass, but I like girls with huge breasts, and yours are just not big enough for my liking."`);
                } else {
                  // TODO-QSP: dynamic text: <<$npcdesc>> says crudely, "Hey <<$giveNick>>, girls should have a nice big rack...
                  scene.text(`${((s as any).npcdesc || '')} says crudely, "Hey ${((s as any).giveNick || '')}, girls should have a nice big rack, and your chest does't even come close."`);
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

function enterFigPref(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_bmi');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_bmi_starving'  ||  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_bmi_underweight') {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> tells you <<$Xe>> loves your slim figure.
        scene.text(`${((s as any).npcdesc || '')} tells you ${((s as any).Xe || '')} loves your slim figure.`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> says your slim figure proves that slenderness is sexy.
          scene.text(`${((s as any).npcdesc || '')} says your slim figure proves that slenderness is sexy.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> says your slim body makes you look like a goddess.
          scene.text(`${((s as any).npcdesc || '')} says your slim body makes you look like a goddess.`);
        }
      }
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'body_bmi_normal') {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> says your figure is perfect in <<$Xyr>> eyes.
          scene.text(`${((s as any).npcdesc || '')} says your figure is perfect in ${((s as any).Xyr || '')} eyes.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> loves how you are not too skinny or fat.
            scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} loves how you are not too skinny or fat.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> says your body looks amazing.
            scene.text(`${((s as any).npcdesc || '')} says your body looks amazing.`);
          }
        }
      } else {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you <<$Xe>> loves your thick figure.
          scene.text(`${((s as any).npcdesc || '')} tells you ${((s as any).Xe || '')} loves your thick figure.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> says your curvy figure proves that women should have curves.
            scene.text(`${((s as any).npcdesc || '')} says your curvy figure proves that women should have curves.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> says your curvy body makes you look like a goddess.
            scene.text(`${((s as any).npcdesc || '')} says your curvy body makes you look like a goddess.`);
          }
        }
      }
    }
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_starving'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_underweight') {
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> prefers a woman that is skinny, and you are kind of ch...
          scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} prefers a woman that is skinny, and you are kind of chunky.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> prefers a woman that is thin, and you are not at all.
            scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} prefers a woman that is thin, and you are not at all.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> prefers a woman that is slender, and your weight makes...
            scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} prefers a woman that is slender, and your weight makes you look ugly.`);
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_normal') {
          if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_starving', 'body_bmi_underweight')) {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> quietly says you could do to gain a few pounds.
              scene.text(`${((s as any).npcdesc || '')} quietly says you could do to gain a few pounds.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                // TODO-QSP: dynamic text: <<$npcdesc>> says you should eat more, because your body is too thin.
                scene.text(`${((s as any).npcdesc || '')} says you should eat more, because your body is too thin.`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> says you look anarexic.
                scene.text(`${((s as any).npcdesc || '')} says you look anarexic.`);
              }
            }
          } else {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> tells you that you are to overweight, and <<$Xe>> prefers a woman a...
              scene.text(`${((s as any).npcdesc || '')} tells you that you are to overweight, and ${((s as any).Xe || '')} prefers a woman a bit skinnier.`);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                // TODO-QSP: dynamic text: <<$npcdesc>> says your weight is unappealing and <<$Xe>> prefers a woman that is...
                scene.text(`${((s as any).npcdesc || '')} says your weight is unappealing and ${((s as any).Xe || '')} prefers a woman that is slimmer.`);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> crudely says you look fat and you should lose some weight.
                scene.text(`${((s as any).npcdesc || '')} crudely says you look fat and you should lose some weight.`);
              }
            }
          }
        } else {
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> prefers a woman that is thicker, and you are too slim.
            scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} prefers a woman that is thicker, and you are too slim.`);
          } else {
            if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> thinks a woman's figure should be on the thick side, a...
              scene.text(`${((s as any).npcdesc || '')} says ${((s as any).Xe || '')} thinks a woman's figure should be on the thick side, and your body is too skinny.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> crudely tells you <<$Xe>> prefers a woman that is thick, and you lo...
              scene.text(`${((s as any).npcdesc || '')} crudely tells you ${((s as any).Xe || '')} prefers a woman that is thick, and you look anerexic.`);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClothesPref(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotTypePrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotQualPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotTopPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBottShorPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClotThinPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBimbPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterFacePref(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMakePrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHairPref(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBodyPrefTmp(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFigPref(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPierPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTattPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTitBoy(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLipsPrefTmp(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterCheckPier(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'piercing_management', 'count');
  // TODO-QSP: end
  scene.build();
}

function enterCompliance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] >= -1) {
    // TODO-QSP: dynamic text: You are a bit frustrated that <<$Xe>> doesn't like you for who you are.
    scene.text(`You are a bit frustrated that ${((s as any).Xe || '')} doesn't like you for who you are.`);
  } else {
    if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] === -2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (3);
      // TODO-QSP: dynamic text: You have done this at a couple of times and you feel… Strange thinking about how...
      scene.text(`You have done this at a couple of times and you feel… Strange thinking about how you are changing to suit ${((s as any).Xyr || '')} wants.`);
    } else {
      if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] === -3) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
        // TODO-QSP: dynamic text: You can't understand why you feel tingly about changing into <<$Xyr>> dream girl...
        scene.text(`You can't understand why you feel tingly about changing into ${((s as any).Xyr || '')} dream girl…`);
      } else {
        if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] === -4) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (7);
          // TODO-QSP: dynamic text: Your mind briefly fantasizes about turning more and more into <<$Xyr>> ideal gir...
          scene.text(`Your mind briefly fantasizes about turning more and more into ${((s as any).Xyr || '')} ideal girl…`);
        } else {
          if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] === -5) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (8);
            // TODO-QSP: dynamic text: You think to yourself, "<<$Xec>>is my <<$npcrelat>>, I guess it would make sense...
            scene.text(`You think to yourself, "${((s as any).Xec || '')}is my ${((s as any).npcrelat || '')}, I guess it would make sense to try to be the best girl I can be for ${((s as any).Xem || '')}…"`);
          } else {
            if (((s as any).npc_compliance ?? 0)?.[String((s as any).npcID ?? 0)] <= -6) {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
              // TODO-QSP: dynamic text: You feel from the amount of times you have changed for <<$Xem>> you would do any...
              scene.text(`You feel from the amount of times you have changed for ${((s as any).Xem || '')} you would do anything to become ${((s as any).Xyr || '')} ideal girlfriend.`);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
