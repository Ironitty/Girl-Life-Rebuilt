import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterClotTypePrefTmp(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $ngp_pref[] = 'clothes_style_wealthy'
  // TODO-QSP: $ngp_pref[] = 'clothes_style_fetish'
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'no_clear');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      // TODO-QSP: dynamic text: <<$npcdesc>> says, "I like the type of clothing you are wearing <<$pcs_nickname>...
      scene.text(`${((s as any).npcdesc ?? 0)} says, "I like the type of clothing you are wearing ${((s as any).pcs_nickname ?? 0)}. I think girls look amazing in ' + iif($ngpPrefResult['HasPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothing."`);
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
      // TODO-QSP: dynamic text: <<$npcdesc>> says, "I think girls who wear ' + iif($ngpPrefResult['HasPos'] = 'c...
      scene.text(`${((s as any).npcdesc ?? 0)} says, "I think girls who wear ' + iif($ngpPrefResult['HasPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothing look amazing. I'm glad you chose that type of clothing."`);
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
      // TODO-QSP: dynamic text: <<$npcdesc>> says, "<<$pcs_nickname>>, you look fucking hot in ' + iif($ngpPrefR...
      scene.text(`${((s as any).npcdesc ?? 0)} says, "${((s as any).pcs_nickname ?? 0)}, you look fucking hot in ' + iif($ngpPrefResult['HasPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothes. It looks amazing on you!"`);
    }
  } else {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
      // TODO-QSP: dynamic text: <<$npcdesc>> says nerviously, "I don't mean to be rude <<$pcs_nickname>>, but I ...
      scene.text(`${((s as any).npcdesc ?? 0)} says nerviously, "I don't mean to be rude ${((s as any).pcs_nickname ?? 0)}, but I don't think ${((s as any).clothingworntype ?? 0)} clothing looks nice on girls. I like girls who wear ' + iif($ngpPrefResult['NotPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothing."`);
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
      // TODO-QSP: dynamic text: <<$npcdesc>> says cafefully, "<<$pcs_nickname>> to be honest, I don't think <<$c...
      scene.text(`${((s as any).npcdesc ?? 0)} says cafefully, "${((s as any).pcs_nickname ?? 0)} to be honest, I don't think ${((s as any).clothingworntype ?? 0)} clothing looks good on you. I think ' + iif($ngpPrefResult['NotPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' clothing would look better on you."`);
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-2, -1));
      // TODO-QSP: dynamic text: <<$npcdesc>> says rather rudely, "I think girls who wear <<$clothingworntype>> t...
      scene.text(`${((s as any).npcdesc ?? 0)} says rather rudely, "I think girls who wear ${((s as any).clothingworntype ?? 0)} type clothing looks like shit. Girls who wear ' + iif($ngpPrefResult['NotPos'] = 'clothes_style_wealthy', 'formal', 'fetish') + ' turn me on much more."`);
    }
  }
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
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 1);
    }
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_quality_low') {
      // TODO-QSP: $temp_text[0] = 'expensive'
    } else {
      // TODO-QSP: $temp_text[0] = 'cheap'
    }
  } else {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
    } else {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-2, -1));
    }
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_quality_low') {
      // TODO-QSP: $temp_text[0] = 'high'
      // TODO-QSP: $temp_text[1] = 'expensive'
    } else {
      // TODO-QSP: $temp_text[0] = 'low'
      // TODO-QSP: $temp_text[1] = 'cheap'
    }
  }
  scene.build();
}

function enterClotTopPrefTmp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'clothes_cleavage');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_cleavage_none') {
      // TODO-QSP: $temp_text[0] = 'only a little bit of'
    } else {
      // TODO-QSP: $temp_text[0] = 'only some'
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'clothes_cleavage_medium') {
        // TODO-QSP: $temp_text[0] = 'a lot of'
      } else {
        // TODO-QSP: $temp_text[0] = 'a huge amount of'
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        // TODO-QSP: dynamic text: <<$npcdesc>> says with a blush <<$Xe>> likes that you are wearing clothes with '...
        scene.text(`${((s as any).npcdesc ?? 0)} says with a blush ${((s as any).Xe ?? 0)} likes that you are wearing clothes with ' + $temp_text[0] + 'cleavage."`);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        // TODO-QSP: dynamic text: <<$npcdesc>> looks at your cleavage and says <<$Xe>> is glad you wear clothes wi...
        scene.text(`${((s as any).npcdesc ?? 0)} looks at your cleavage and says ${((s as any).Xe ?? 0)} is glad you wear clothes with ' + $temp_text[0] + ' cleavage."`);
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        // TODO-QSP: dynamic text: <<$npcdesc>> looks at your cleavage and says <<$Xe>> likes that you wear clothes...
        scene.text(`${((s as any).npcdesc ?? 0)} looks at your cleavage and says ${((s as any).Xe ?? 0)} likes that you wear clothes with ' + $temp_text[0] + ' cleavage, and anything else is trash."`);
      }
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_cleavage_none') {
          // TODO-QSP: $temp_text[0] = 'only a little bit of'
          // TODO-QSP: $temp_text[1] = 'too much'
        } else {
          // TODO-QSP: $temp_text[0] = 'only some'
          if (qspFunc(s, 'pcs_has_attr', 'clothes_cleavage_none')) {
            // TODO-QSP: $temp_text[1] = 'too little'
          } else {
            // TODO-QSP: $temp_text[1] = 'too much'
          }
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
          if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
            // TODO-QSP: dynamic text: <<$npcdesc>> says shyly that <<$Xe>> likes girls who wear clothes with ' + $temp...
            scene.text(`${((s as any).npcdesc ?? 0)} says shyly that ${((s as any).Xe ?? 0)} likes girls who wear clothes with ' + $temp_text[0] + ' cleavage, and you kind of have ' + $temp_text[1] + ' ${((s as any).Xyr ?? 0)} taste."`);
          } else {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
            // TODO-QSP: dynamic text: <<$npcdesc>> says <<$Xe>> likes girls that wear clothes with ' + $temp_text[0] +...
            scene.text(`${((s as any).npcdesc ?? 0)} says ${((s as any).Xe ?? 0)} likes girls that wear clothes with ' + $temp_text[0] + ' cleavage, and anything else is way ' + $temp_text[1] + '."`);
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your cleavage and says <<$Xe>> likes girls that wear cloth...
            scene.text(`${((s as any).npcdesc ?? 0)} looks at your cleavage and says ${((s as any).Xe ?? 0)} likes girls that wear clothes with ' + $temp_text[0] + ' cleavage, and anything else is trash."`);
          }
        }
      }
    }
  }
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
    default:
      enterClotTypePrefTmp(s, scene);
      break;
  }
}

export const lover_likes: LocationDef = {
  name: 'lover_likes',
  region: 'other',
  enter: enter,
};
