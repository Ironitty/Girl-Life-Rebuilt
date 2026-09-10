import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).wardrobeDefaultPagePref ?? 0) === '') {
  }
  qspCall(s, 'shop_utils', 'cleanup');
  scene.text('<center><b>Please select an option</b></center>');
  scene.img('images/system/icons/clothing/clothes.png');
  scene.img('images/system/icons/clothing/default.png');
  scene.img('images/system/icons/clothing/organize.png');
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    // TODO-QSP: dynamic text: <center><b>You put the '+iif($pursepantytype ! ', 'panties', ')+iif($pursepantyt...
    scene.text('<center><b>You put the \'+iif($pursepantytype ! \', \'panties\', \')+iif($pursepantytype ! \' and $pursebratype ! \', \' and \', \')+iif($pursebratype ! \', \'bra\', \')+\' from your purse back in the wardrobe.</b></center><br>');
  }
  qspCall(s, 'wardrobe', 'wardrobe_enter_save_outfit');
  if (((s as any).wardrobeDefaultPagePref ?? 0) === 'currentOutfit') {
    scene.actions([{ label: 'Continue', goto: ['wardrobe', 'main'] }]);
  } else {
    // TODO-QSP: gt 'clothing_view', 'view_lists_list', 'wardrobe'
    if (((s as any).wardrobeDefaultPagePref ?? 0) !== '') {
      // TODO-QSP: gt 'wardrobe', $wardrobeDefaultPagePref
    }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'wardrobe', 'wardrobe_exit_check_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Current outfit', goto: ['wardrobe', 'main'] },
      { label: 'Saved outfit sets', handler: (st: GameState) => {
    if (((s as any).wardrobeDefaultPagePref ?? 0) !== 'currentOutfit'  &&  ((s as any).wardrobeDefaultPagePref ?? 0) !== 'viewClothing') {
      // TODO-QSP: gt 'wardrobe', $wardrobeDefaultPagePref
    } else {
      // TODO-QSP: gt 'wardrobe', $wloc
    }
  } },
      { label: 'Open wardrobe', goto: ['clothing_view', 'view_lists_list'] },
    ]);
  }
  (s as any).result = ((s as any).defclothingnumber ?? 0)[((s as any).ARGS ?? 0)[0]]+ ((s as any).defbranumber ?? 0)[((s as any).ARGS ?? 0)[0]] + ((s as any).defpantynumber ?? 0)[((s as any).ARGS ?? 0)[0]] + ((s as any).defshoenumber ?? 0)[((s as any).ARGS ?? 0)[0]] + ((s as any).defpursenumber ?? 0)[((s as any).ARGS ?? 0)[0]] + ((s as any).defcoatnumber ?? 0)[((s as any).ARGS ?? 0)[0]];
  scene.build();
}

export const wardrobe: LocationDef = {
  name: 'wardrobe',
  title: 'Please select an option',
  region: 'other',
  enter: enter,
};
