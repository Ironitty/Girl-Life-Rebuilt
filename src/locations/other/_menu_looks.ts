import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  (s as any).settings = undefined;
  (s as any).menu_page = undefined;
  scene.build();
}

function enterLookstabs(s: GameState, scene: SceneBuilder): void {
  ((s as any).tabsname = (s as any).tabsname ?? {})[0] = 'Looks';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[0] = 'menu_page = 0 & gt \'$menu_looks\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[1] = 'Body';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[1] = 'menu_page = 1 & gt \'$menu_looks\', \'body\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[2] = 'Clothes';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[2] = 'menu_page = 2 & gt \'$menu_looks\', \'clothes\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[3] = 'Tattoos';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[3] = 'menu_page = 3 & gt \'$menu_looks\', \'tattoos\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[4] = 'Piercings';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[4] = 'menu_page = 4 & gt \'$menu_looks\', \'piercing\'';
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "_menu_looks" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
    (s as any).temp_menu_page = undefined;
  }
  qspCall(s, 'tabhead', 'menu_page');
  scene.actions([
    { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_looks', '');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).BACKIMAGE = '';
  (s as any).menu_page = 0;
  qspCall(s, '$menu_looks', 'lookstabs', 'Looks');
  scene.text('<center><h1>Looks</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  (s as any).img_temp = qspFunc(s, '$face_image', '');
  scene.img(`${((s as any).img_temp ?? '')}`);
  (s as any).img_temp = undefined;
  if (((s as any).face_style ?? 0)?.['avatar_hair'] !== '') {
    scene.text(`Your hair: ${(((s as any).face_style ?? 0)?.['avatar_hair'] ?? '')}.`);
  } else {
    scene.text(`${((s as any).hair ?? '')}`);
  }
  if (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) > 0) {
    scene.text(`Your curls are good for another ${((s as any).curly ?? '')} days.`);
  }
  if (((s as any).defcurly ?? 0) === 1  &&  ((s as any).straight ?? 0) > 0) {
    scene.text(`Your hair should be straight for another ${((s as any).straight ?? '')} days.`);
  }
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['lip'] ?? '')}`);
  s.scene = { ...s.scene, mainText: String((s as any).pcs_teeth_txt || ''), curActs: [] };
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['throat'] ?? '')}`);
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['skin'] ?? '')}`);
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['eyes'] ?? '')}`);
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['makeup'] ?? '')}.`);
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterFace(s: GameState, scene: SceneBuilder): void {
  (s as any).BACKIMAGE = '';
  (s as any).menu_page = 0;
  qspCall(s, '$menu_looks', 'lookstabs', 'Looks');
  scene.text('<center><h1>Looks</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  (s as any).img_temp = qspFunc(s, '$face_image', '');
  scene.img(`${((s as any).img_temp ?? '')}`);
  (s as any).img_temp = undefined;
  if (((s as any).face_style ?? 0)?.['avatar_hair'] !== '') {
    scene.text(`Your hair: ${(((s as any).face_style ?? 0)?.['avatar_hair'] ?? '')}.`);
  } else {
    scene.text(`${((s as any).hair ?? '')}`);
  }
  if (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) > 0) {
    scene.text(`Your curls are good for another ${((s as any).curly ?? '')} days.`);
  }
  if (((s as any).defcurly ?? 0) === 1  &&  ((s as any).straight ?? 0) > 0) {
    scene.text(`Your hair should be straight for another ${((s as any).straight ?? '')} days.`);
  }
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['lip'] ?? '')}`);
  s.scene = { ...s.scene, mainText: String((s as any).pcs_teeth_txt || ''), curActs: [] };
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['throat'] ?? '')}`);
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['skin'] ?? '')}`);
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['eyes'] ?? '')}`);
  scene.text(`${(((s as any).pc_descFull ?? 0)?.['makeup'] ?? '')}.`);
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterBody(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Body');
  scene.text('<center><h1>Body</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  if (((s as any).modApi_body_image ?? 0) !== '') {
    (s as any).img_temp = ((s as any).modApi_body_image ?? 0);
  } else {
    (s as any).img_temp = qspFunc(s, '$body_image', '', 'body');
  }
  scene.img(`${((s as any).img_temp ?? '')}`);
  if (((s as any).modApi_body_image_msg ?? 0) === '') {
  }
  (s as any).img_temp = undefined;
  (s as any).body_image_msg = undefined;
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Clothes');
  scene.text('<center><h1>Clothes</h1></center>');
  if ((!((s as any).ward_img_hgt ?? 0))) {
    (s as any).ward_img_hgt = 150;
  }
  (s as any).temp_table = '<center><table border=0 cellspacing=' + ((s as any).ward_img_hgt ?? 0)/25 + ' cellpadding=5>';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th width="33%">Bra worn</th>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th width="33%">Bodysuit worn</th>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th width="33%">Outfit worn</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th width="33%">Coat (only worn outside when cold)</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center><img Height = ' + ((s as any).ward_img_hgt ?? 0) + ' src="' + qspFunc(s, '$body_image', '', 'bra') + '"></center></td>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td rowspan=4><center><img Height = ' + ((s as any).ward_img_hgt ?? 0) + '*2 src="' + qspFunc(s, '$body_image', '', 'bodysuit') + '"></center></td>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center><img Height = ' + ((s as any).ward_img_hgt ?? 0) * 2 + ' src="' + qspFunc(s, '$body_image', '', 'clothes') + '"></center></td>');
  if (((s as any).coatworntype ?? 0) !== 'none') {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center><img Height = ' + ((s as any).ward_img_hgt ?? 0) * 2 + ' src="' + qspFunc(s, '$body_image', '', 'coat') + '"></center></td>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td></td>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    if (((s as any).braworntype ?? 0) !== 'none') {
      (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You are wearing ' + ((s as any).braworntype ?? 0) + ' bra no. ' + ((s as any).brawornnumber ?? 0) + '</center></td>');
    } else {
      (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You are not wearing a bra</center></td>');
    }
  }
  qspCall(s, '$body_image', 'clothes');
  if (((s as any).modApi_clothes_image ?? 0) !== '') {
    (s as any).img_temp = ((s as any).modApi_clothes_image ?? 0);
  }
  if (((s as any).modApi_clothes_image_msg ?? 0) === '') {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>' + ((s as any).body_image_msg ?? 0) + '</center></td>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>' + ((s as any).modApi_clothes_image_msg ?? 0) + '</center></td>');
  }
  qspCall(s, '$body_image', 'coat');
  if (((s as any).modApi_coat_image_msg ?? 0) === '') {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>' + ((s as any).body_image_msg ?? 0) + '</center></td>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>' + ((s as any).modApi_coat_image_msg ?? 0) + '</center></td>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th>Panties worn</th>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th>Shoes (Only worn outside)</th><th>Purse worn</th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center><img Height = ' + ((s as any).ward_img_hgt ?? 0) + ' src="' + qspFunc(s, '$body_image', '', 'panties') + '"></center></td>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center><img Height = ' + ((s as any).ward_img_hgt ?? 0) + ' src="' + qspFunc(s, '$body_image', '', 'shoes') + '"></center></td>');
  if (((s as any).bag ?? 0) === 1) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center><img Height = ' + ((s as any).ward_img_hgt ?? 0) + ' src="' + qspFunc(s, '$purse_image', '', ((s as any).currentpursetype ?? 0), ((s as any).currentpursenumber ?? 0)) + '"></center></td>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td></td>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You are wearing ' + ((s as any).pantyworntype ?? 0) + ' panties no. ' + ((s as any).pantywornnumber ?? 0) + '</center></td>');
    } else {
      (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You are not wearing panties</center></td>');
    }
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You are wearing ' + ((s as any).bodysuitworntype ?? 0) + ' bodysuit no. ' + ((s as any).bodysuitwornnumber ?? 0) + '</center></td>');
  }
  if (((s as any).shoeworntype ?? 0) !== 'none') {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You are wearing ' + ((s as any).shoeworntype ?? 0) + ' shoes no. ' + ((s as any).shoewornnumber ?? 0) + '</center></td>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You do not have any shoes selected</center></td>');
  }
  if (((s as any).bag ?? 0) === 1) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You are using ' + ((s as any).currentpursetype ?? 0) + ' purse no. ' + ((s as any).currentpursenumber ?? 0) + '</center></td>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td><center>You do not have a purse equipped</center></td>');
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr></table></center>');
  (s as any).temp_table = undefined;
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Clothes');
  scene.text('<center><h1>Shoes</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  (s as any).img_temp = qspFunc(s, '$body_image', '', 'shoes');
  if (((s as any).modApi_shoes_image ?? 0) !== '') {
    (s as any).img_temp = ((s as any).modApi_shoes_image ?? 0);
  }
  scene.img(`${((s as any).img_temp ?? '')}`);
  if (((s as any).modApi_shoes_image_msg ?? 0) === '') {
    scene.text(`${((s as any).body_image_msg ?? '')}`);
  } else {
    scene.text(`${((s as any).modApi_shoes_image_msg ?? '')}`);
  }
  (s as any).img_temp = undefined;
  (s as any).body_image_msg = undefined;
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterTattoos(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Tattoos');
  scene.text('<center><h1>Tattoos</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  if (((s as any).pcs_tattoos ?? 0)?.['total'] === 0) {
    scene.text('You have a pristine body. Not in terms of debauchery, but in terms of tattoos.');
    scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
    return;
  }
  if (((s as any).pcs_tattoos ?? 0)?.['face'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooface\u0027); return false;">Face</a> | ');
  } else {
    scene.text('Face | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['lip'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattoolip\u0027); return false;">Lip</a> | ');
  } else {
    scene.text('Lip | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['neck'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooneck\u0027); return false;">Neck</a> | ');
  } else {
    scene.text('Neck | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['back'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooback\u0027); return false;">Back</a> | ');
  } else {
    scene.text('Back | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooshoulder\u0027); return false;">Shoulder</a> | ');
  } else {
    scene.text('Shoulder | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['breast'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattoobreast\u0027); return false;">Breast</a> | ');
  } else {
    scene.text('Breast | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['under'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattoounder\u0027); return false;">Under Breast</a> | ');
  } else {
    scene.text('Under Breast | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['chest'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattoochest\u0027); return false;">Chest</a> | ');
  } else {
    scene.text('Chest | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['side'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooside\u0027); return false;">Side</a> | ');
  } else {
    scene.text('Side | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattoobelly\u0027); return false;">Belly</a>');
  } else {
    scene.text('Belly');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooarm\u0027); return false;">Arm</a> | ');
  } else {
    scene.text('Arm | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattoowrist\u0027); return false;">Wrist</a> | ');
  } else {
    scene.text('Wrist | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['hand'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattoohand\u0027); return false;">Hand</a> | ');
  } else {
    scene.text('Hand | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooleg\u0027); return false;">Leg</a> | ');
  } else {
    scene.text('Leg | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooankle\u0027); return false;">Ankle</a> | ');
  } else {
    scene.text('Foot | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattootramp\u0027); return false;">"Tramp Stamp"</a> | ');
  } else {
    scene.text('Tramp Stamp | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ass'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattooass\u0027); return false;">Butt</a> | ');
  } else {
    scene.text('Butt | ');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027tattoovag\u0027); return false;">Groin</a>');
  } else {
    scene.text('Groin');
  }
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterTattooankle(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'ankle_image')}`);
  scene.build();
}

function enterTattooarm(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'arm_image')}`);
  scene.build();
}

function enterTattooass(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'ass_image')}`);
  scene.build();
}

function enterTattooback(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'back_image')}`);
  scene.build();
}

function enterTattoobelly(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'belly_image')}`);
  scene.build();
}

function enterTattoobreast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'breast_image')}`);
  scene.build();
}

function enterTattoochest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'chest_image')}`);
  scene.build();
}

function enterTattooface(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'face_image')}`);
  scene.build();
}

function enterTattoohand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'hand_image')}`);
  scene.build();
}

function enterTattooleg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'leg_image')}`);
  scene.build();
}

function enterTattoolip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'lip_image')}`);
  scene.build();
}

function enterTattooneck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'neck_image')}`);
  scene.build();
}

function enterTattoovag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'pussy_image')}`);
  scene.build();
}

function enterTattooshoulder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'shoulder_image')}`);
  scene.build();
}

function enterTattooside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'side_image')}`);
  scene.build();
}

function enterTattootramp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'tramp_image')}`);
  scene.build();
}

function enterTattoounder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'under_image')}`);
  scene.build();
}

function enterTattoowrist(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'tattoos');
  scene.img(`${qspFunc(s, 'tattoo_management', 'wrist_image')}`);
  scene.build();
}

function enterPiercing(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Piercings');
  scene.text('<center><h1>Piercings</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  if (((s as any).pcs_piercings ?? 0)?.['total'] === 0) {
    scene.text('You have no piercings.');
    scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
    return;
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['wearing'] === 0) {
      scene.text('You are not wearing any piercings');
      scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
      return;
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027piercing_ears\u0027); return false;">Ears</a> | ');
  } else {
    scene.text('Ears | ');
  }
  if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027piercing_nose\u0027); return false;">Nose</a> | ');
  } else {
    scene.text('Nose | ');
  }
  if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027piercing_brow\u0027); return false;">Eyebrows</a> | ');
  } else {
    scene.text('Eyebrows | ');
  }
  if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027piercing_lip\u0027); return false;">Lips</a> | ');
  } else {
    scene.text('lips | ');
  }
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027piercing_tongue\u0027); return false;">Tongue</a> | ');
  } else {
    scene.text('Tongue | ');
  }
  if (((s as any).pcs_piercings ?? 0)?.['navel'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027piercing_navel\u0027); return false;">Navel</a> | ');
  } else {
    scene.text('Navel | ');
  }
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027piercing_nipples\u0027); return false;">Nipples</a> | ');
  } else {
    scene.text('Nipples | ');
  }
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_looks\u0027, \u0027piercing_pussy\u0027); return false;">Pussy</a>');
  } else {
    scene.text('Pussy');
  }
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterPiercingEars(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/c${(((s as any).pcs_piercings ?? 0)?.['ears'] ?? '')}.jpg`);
  scene.build();
}

function enterPiercingNose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/d${(((s as any).pcs_piercings ?? 0)?.['nose'] ?? '')}.jpg`);
  scene.build();
}

function enterPiercingBrow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/e${(((s as any).pcs_piercings ?? 0)?.['brow'] ?? '')}.jpg`);
  scene.build();
}

function enterPiercingLip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/b${(((s as any).pcs_piercings ?? 0)?.['lip'] ?? '')}.jpg`);
  scene.build();
}

function enterPiercingTongue(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/a${(((s as any).pcs_piercings ?? 0)?.['tongue'] ?? '')}.jpg`);
  scene.build();
}

function enterPiercingNavel(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/n${(((s as any).pcs_piercings ?? 0)?.['navel'] ?? '')}.jpg`);
  scene.build();
}

function enterPiercingNipples(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/f${(((s as any).pcs_piercings ?? 0)?.['nipples'] ?? '')}.jpg`);
  scene.build();
}

function enterPiercingPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/g${(((s as any).pcs_piercings ?? 0)?.['pussy'] ?? '')}.jpg`);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).settings = (s as any).settings ?? {})['table_start'] = '<center><table width="80%" cellspacing="0" cellpadding="20" valign="top"><tr><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).settings = (s as any).settings ?? {})['table_second'] = '</td><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).settings = (s as any).settings ?? {})['table_end'] = '</td></tr></table></center>';
  const arg = s.locArg;
  switch (arg) {
    case 'menu_exit':
      enterMenuExit(s, scene);
      break;
    case 'lookstabs':
      enterLookstabs(s, scene);
      break;
    case 'face':
      enterFace(s, scene);
      break;
    case 'body':
      enterBody(s, scene);
      break;
    case 'clothes':
      enterClothes(s, scene);
      break;
    case 'shoes':
      enterShoes(s, scene);
      break;
    case 'tattoos':
      enterTattoos(s, scene);
      break;
    case 'tattooankle':
      enterTattooankle(s, scene);
      break;
    case 'tattooarm':
      enterTattooarm(s, scene);
      break;
    case 'tattooass':
      enterTattooass(s, scene);
      break;
    case 'tattooback':
      enterTattooback(s, scene);
      break;
    case 'tattoobelly':
      enterTattoobelly(s, scene);
      break;
    case 'tattoobreast':
      enterTattoobreast(s, scene);
      break;
    case 'tattoochest':
      enterTattoochest(s, scene);
      break;
    case 'tattooface':
      enterTattooface(s, scene);
      break;
    case 'tattoohand':
      enterTattoohand(s, scene);
      break;
    case 'tattooleg':
      enterTattooleg(s, scene);
      break;
    case 'tattoolip':
      enterTattoolip(s, scene);
      break;
    case 'tattooneck':
      enterTattooneck(s, scene);
      break;
    case 'tattoovag':
      enterTattoovag(s, scene);
      break;
    case 'tattooshoulder':
      enterTattooshoulder(s, scene);
      break;
    case 'tattooside':
      enterTattooside(s, scene);
      break;
    case 'tattootramp':
      enterTattootramp(s, scene);
      break;
    case 'tattoounder':
      enterTattoounder(s, scene);
      break;
    case 'tattoowrist':
      enterTattoowrist(s, scene);
      break;
    case 'piercing':
      enterPiercing(s, scene);
      break;
    case 'piercing_ears':
      enterPiercingEars(s, scene);
      break;
    case 'piercing_nose':
      enterPiercingNose(s, scene);
      break;
    case 'piercing_brow':
      enterPiercingBrow(s, scene);
      break;
    case 'piercing_lip':
      enterPiercingLip(s, scene);
      break;
    case 'piercing_tongue':
      enterPiercingTongue(s, scene);
      break;
    case 'piercing_navel':
      enterPiercingNavel(s, scene);
      break;
    case 'piercing_nipples':
      enterPiercingNipples(s, scene);
      break;
    case 'piercing_pussy':
      enterPiercingPussy(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _menu_looks: LocationDef = {
  name: '_menu_looks',
  title: '<center><h1>Looks</h1></center>',
  region: 'other',
  enter: enter,
};
