import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).settings ?? {})['table_start'] = '<center><table width="80%" cellspacing="0" cellpadding="20" valign="top"><tr><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).settings ?? {})['table_second'] = '</td><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).settings ?? {})['table_end'] = '</td></tr></table></center>';
  scene.build();
}

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  scene.build();
}

function enterLookstabs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $tabsname[0] = 'Looks'
  // TODO-QSP: $tabsaction[0] = "menu_page = 0 & gt '$menu_looks'"
  // TODO-QSP: $tabsname[1] = 'Body'
  // TODO-QSP: $tabsaction[1] = "menu_page = 1 & gt '$menu_looks', 'body'"
  // TODO-QSP: $tabsname[2] = 'Clothes'
  // TODO-QSP: $tabsaction[2] = "menu_page = 2 & gt '$menu_looks', 'clothes'"
  // TODO-QSP: $tabsname[3] = 'Tattoos'
  // TODO-QSP: $tabsaction[3] = "menu_page = 3 & gt '$menu_looks', 'tattoos'"
  // TODO-QSP: $tabsname[4] = 'Piercings'
  // TODO-QSP: $tabsaction[4] = "menu_page = 4 & gt '$menu_looks', 'piercing'"
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "_menu_looks" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
  }
  qspCall(s, 'tabhead', '', ((s as any).menu_page ?? 0));
  scene.actions([
    { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_looks', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_page = 0;
  qspCall(s, '$menu_looks', 'lookstabs', 'Looks');
  scene.text('<center><h1>Looks</h1></center>');
  // TODO-QSP: $settings['table_start']
  scene.img(`${((s as any).img_temp ?? 0)}`);
  if (((s as any).face_style ?? 0)?.['avatar_hair'] !== '') {
    // TODO-QSP: dynamic text: Your hair: <<$face_style['avatar_hair']>>.
    scene.text(`Your hair: ${((s as any).face_style ?? 0)?.['avatar_hair']}.`);
  } else {
    // TODO-QSP: dynamic text: <<$hair>>
    scene.text(`${((s as any).hair ?? 0)}`);
  }
  if (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your curls are good for another <<curly>> days.
    scene.text(`Your curls are good for another ${((s as any).curly ?? 0)} days.`);
  }
  if (((s as any).defcurly ?? 0) === 1  &&  ((s as any).straight ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your hair should be straight for another <<straight>> days.
    scene.text(`Your hair should be straight for another ${((s as any).straight ?? 0)} days.`);
  }
  // TODO-QSP: dynamic text: <<$pc_descFull['lip']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['lip']}`);
  // TODO-QSP: $pcs_teeth_txt
  // TODO-QSP: dynamic text: <<$pc_descFull['throat']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['throat']}`);
  // TODO-QSP: dynamic text: <<$pc_descFull['skin']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['skin']}`);
  // TODO-QSP: dynamic text: <<$pc_descFull['eyes']>>
  scene.text(`${((s as any).pc_descFull ?? 0)?.['eyes']}`);
  // TODO-QSP: dynamic text: <<$pc_descFull['makeup']>>.
  scene.text(`${((s as any).pc_descFull ?? 0)?.['makeup']}.`);
  // TODO-QSP: $settings['table_end']
  scene.build();
}

function enterBody(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Body');
  scene.text('<center><h1>Body</h1></center>');
  // TODO-QSP: $settings['table_start']
  if (((s as any).modApi_body_image ?? 0) !== '') {
  }
  scene.img(`${((s as any).img_temp ?? 0)}`);
  if (((s as any).modApi_body_image_msg ?? 0) === '') {
  }
  // TODO-QSP: $settings['table_end']
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Clothes');
  scene.text('<center><h1>Clothes</h1></center>');
  if ((!((s as any).ward_img_hgt ?? 0))) {
    (s as any).ward_img_hgt = 150;
  }
  // TODO-QSP: $temp_table += '<tr>'
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    // TODO-QSP: $temp_table += '<th width="33%">Bra worn</th>'
  } else {
    // TODO-QSP: $temp_table += '<th width="33%">Bodysuit worn</th>'
  }
  // TODO-QSP: $temp_table += '<th width="33%">Outfit worn</th>'
  // TODO-QSP: $temp_table += '<th width="33%">Coat (only worn outside when cold)</th>'
  // TODO-QSP: $temp_table += '</tr><tr>'
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    // TODO-QSP: $temp_table += '<td><center><img Height = <<ward_img_hgt>> src="<<$func(''$body_image'',''bra'')>>">...
  } else {
    // TODO-QSP: $temp_table += '<td rowspan=4><center><img Height = <<ward_img_hgt>>*2 src="<<$func(''$body_image'',...
  }
  // TODO-QSP: $temp_table += '<td><center><img Height = <<ward_img_hgt * 2>> src="<<$func(''$body_image'',''clothe...
  if (((s as any).coatworntype ?? 0) !== 'none') {
    // TODO-QSP: $temp_table += '<td><center><img Height = <<ward_img_hgt * 2>> src="<<$func(''$body_image'', ''coat'...
  } else {
    // TODO-QSP: $temp_table += '<td></td>'
  }
  // TODO-QSP: $temp_table += '</tr><tr>'
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    if (((s as any).braworntype ?? 0) !== 'none') {
      // TODO-QSP: $temp_table += '<td><center>You are wearing <<$braworntype>> bra no. <<brawornnumber>></center></td>...
    } else {
      // TODO-QSP: $temp_table += '<td><center>You are not wearing a bra</center></td>'
    }
  }
  qspCall(s, '$body_image', 'clothes');
  if (((s as any).modApi_clothes_image ?? 0) !== '') {
  }
  if (((s as any).modApi_clothes_image_msg ?? 0) === '') {
    // TODO-QSP: $temp_table += '<td><center><<$body_image_msg>></center></td>'
  } else {
    // TODO-QSP: $temp_table += '<td><center><<$modApi_clothes_image_msg>></center></td>'
  }
  qspCall(s, '$body_image', 'coat');
  if (((s as any).modApi_coat_image_msg ?? 0) === '') {
    // TODO-QSP: $temp_table += '<td><center><<$body_image_msg>></center></td>'
  } else {
    // TODO-QSP: $temp_table += '<td><center><<$modApi_coat_image_msg>></center></td>'
  }
  // TODO-QSP: $temp_table += '</tr><tr>'
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    // TODO-QSP: $temp_table += '<th>Panties worn</th>'
  }
  // TODO-QSP: $temp_table += '<th>Shoes (Only worn outside)</th><th>Purse worn</th>'
  // TODO-QSP: $temp_table += '</tr><tr>'
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    // TODO-QSP: $temp_table += '<td><center><img Height = <<ward_img_hgt>> src="<<$func(''$body_image'',''panties'')...
  }
  // TODO-QSP: $temp_table += '<td><center><img Height = <<ward_img_hgt>> src="<<$func(''$body_image'', ''shoes'')>...
  if (((s as any).bag ?? 0) === 1) {
    // TODO-QSP: $temp_table += '<td><center><img Height = <<ward_img_hgt>> src="<<$func(''$purse_image'', $currentpu...
  } else {
    // TODO-QSP: $temp_table += '<td></td>'
  }
  // TODO-QSP: $temp_table += '</tr><tr>'
  if (((s as any).underwear ?? 0)?.['type'] === 0) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      // TODO-QSP: $temp_table += '<td><center>You are wearing <<$pantyworntype>> panties no. <<pantywornnumber>></cent...
    } else {
      // TODO-QSP: $temp_table += '<td><center>You are not wearing panties</center></td>'
    }
  } else {
    // TODO-QSP: $temp_table += '<td><center>You are wearing <<$bodysuitworntype>> bodysuit no. <<bodysuitwornnumber>...
  }
  if (((s as any).shoeworntype ?? 0) !== 'none') {
    // TODO-QSP: $temp_table += '<td><center>You are wearing <<$shoeworntype>> shoes no. <<shoewornnumber>></center><...
  } else {
    // TODO-QSP: $temp_table += '<td><center>You do not have any shoes selected</center></td>'
  }
  if (((s as any).bag ?? 0) === 1) {
    // TODO-QSP: $temp_table += '<td><center>You are using <<$currentpursetype>> purse no. <<currentpursenumber>></ce...
  } else {
    // TODO-QSP: $temp_table += '<td><center>You do not have a purse equipped</center></td>'
  }
  // TODO-QSP: $temp_table += '</tr></table></center>'
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Clothes');
  scene.text('<center><h1>Shoes</h1></center>');
  // TODO-QSP: $settings['table_start']
  if (((s as any).modApi_shoes_image ?? 0) !== '') {
  }
  scene.img(`${((s as any).img_temp ?? 0)}`);
  if (((s as any).modApi_shoes_image_msg ?? 0) === '') {
    // TODO-QSP: dynamic text: <<$body_image_msg>>
    scene.text(`${((s as any).body_image_msg ?? 0)}`);
  } else {
    // TODO-QSP: dynamic text: <<$modApi_shoes_image_msg>>
    scene.text(`${((s as any).modApi_shoes_image_msg ?? 0)}`);
  }
  // TODO-QSP: $settings['table_end']
  scene.build();
}

function enterTattoos(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'lookstabs', 'Tattoos');
  scene.text('<center><h1>Tattoos</h1></center>');
  // TODO-QSP: $settings['table_start']
  if (((s as any).pcs_tattoos ?? 0)?.['total'] === 0) {
    scene.text('You have a pristine body. Not in terms of debauchery, but in terms of tattoos.');
    // TODO-QSP: $settings['table_end']
    return;
  }
  if (((s as any).pcs_tattoos ?? 0)?.['face'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooface''">Face</a> | '
  } else {
    // TODO-QSP: *p 'Face | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['lip'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattoolip''">Lip</a> | '
  } else {
    // TODO-QSP: *p 'Lip | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['neck'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooneck''">Neck</a> | '
  } else {
    // TODO-QSP: *p 'Neck | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['back'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooback''">Back</a> | '
  } else {
    // TODO-QSP: *p 'Back | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooshoulder''">Shoulder</a> | '
  } else {
    // TODO-QSP: *p 'Shoulder | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['breast'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattoobreast''">Breast</a> | '
  } else {
    // TODO-QSP: *p 'Breast | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['under'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattoounder''">Under Breast</a> | '
  } else {
    // TODO-QSP: *p 'Under Breast | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['chest'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattoochest''">Chest</a> | '
  } else {
    // TODO-QSP: *p 'Chest | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['side'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooside''">Side</a> | '
  } else {
    // TODO-QSP: *p 'Side | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattoobelly''">Belly</a>'
  } else {
    // TODO-QSP: *p 'Belly'
  }
  if (((s as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooarm''">Arm</a> | '
  } else {
    // TODO-QSP: *p 'Arm | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattoowrist''">Wrist</a> | '
  } else {
    // TODO-QSP: *p 'Wrist | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['hand'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattoohand''">Hand</a> | '
  } else {
    // TODO-QSP: *p 'Hand | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooleg''">Leg</a> | '
  } else {
    // TODO-QSP: *p 'Leg | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooankle''">Ankle</a> | '
  } else {
    // TODO-QSP: *p 'Foot | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattootramp''">"Tramp Stamp"</a> | '
  } else {
    // TODO-QSP: *p 'Tramp Stamp | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ass'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattooass''">Butt</a> | '
  } else {
    // TODO-QSP: *p 'Butt | '
  }
  if (((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
    // TODO-QSP: *p '<a href="exec: gs ''$menu_looks'', ''tattoovag''">Groin</a>'
  } else {
    // TODO-QSP: *p 'Groin'
  }
  // TODO-QSP: $settings['table_end']
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
  // TODO-QSP: $settings['table_start']
  if (((s as any).pcs_piercings ?? 0)?.['total'] === 0) {
    scene.text('You have no piercings.');
    // TODO-QSP: $settings['table_end']
    return;
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['wearing'] === 0) {
      scene.text('You are not wearing any piercings');
      // TODO-QSP: $settings['table_end']
      return;
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0) {
    // TODO-QSP: *p '<a href="exec:gs ''$menu_looks'', ''piercing_ears''">Ears</a> | '
  } else {
    // TODO-QSP: *p 'Ears | '
  }
  if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0) {
    // TODO-QSP: *p '<a href="exec:gs ''$menu_looks'', ''piercing_nose''">Nose</a> | '
  } else {
    // TODO-QSP: *p 'Nose | '
  }
  if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0) {
    // TODO-QSP: *p '<a href="exec:gs ''$menu_looks'', ''piercing_brow''">Eyebrows</a> | '
  } else {
    // TODO-QSP: *p 'Eyebrows | '
  }
  if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0) {
    // TODO-QSP: *p '<a href="exec:gs ''$menu_looks'', ''piercing_lip''">Lips</a> | '
  } else {
    // TODO-QSP: *p 'lips | '
  }
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
    // TODO-QSP: *p '<a href="exec:gs ''$menu_looks'', ''piercing_tongue''">Tongue</a> | '
  } else {
    // TODO-QSP: *p 'Tongue | '
  }
  if (((s as any).pcs_piercings ?? 0)?.['navel'] > 0) {
    // TODO-QSP: *p '<a href="exec:gs ''$menu_looks'', ''piercing_navel''">Navel</a> | '
  } else {
    // TODO-QSP: *p 'Navel | '
  }
  if (((s as any).pcs_piercings ?? 0)?.['nipples'] > 0) {
    // TODO-QSP: *p '<a href="exec:gs ''$menu_looks'', ''piercing_nipples''">Nipples</a> | '
  } else {
    // TODO-QSP: *p 'Nipples | '
  }
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0) {
    // TODO-QSP: *p '<a href="exec:gs ''$menu_looks'', ''piercing_pussy''">Pussy</a>'
  } else {
    // TODO-QSP: *p 'Pussy'
  }
  // TODO-QSP: $settings['table_end']
  scene.build();
}

function enterPiercingEars(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/c${((s as any).pcs_piercings ?? 0)?.['ears']}.jpg`);
  scene.build();
}

function enterPiercingNose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/d${((s as any).pcs_piercings ?? 0)?.['nose']}.jpg`);
  scene.build();
}

function enterPiercingBrow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/e${((s as any).pcs_piercings ?? 0)?.['brow']}.jpg`);
  scene.build();
}

function enterPiercingLip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/b${((s as any).pcs_piercings ?? 0)?.['lip']}.jpg`);
  scene.build();
}

function enterPiercingTongue(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/a${((s as any).pcs_piercings ?? 0)?.['tongue']}.jpg`);
  scene.build();
}

function enterPiercingNavel(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/n${((s as any).pcs_piercings ?? 0)?.['navel']}.jpg`);
  scene.build();
}

function enterPiercingNipples(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/f${((s as any).pcs_piercings ?? 0)?.['nipples']}.jpg`);
  scene.build();
}

function enterPiercingPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_looks', 'piercing');
  scene.img(`images/pc/body/piercings/g${((s as any).pcs_piercings ?? 0)?.['pussy']}.jpg`);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'menu_exit':
      enterMenuExit(s, scene);
      break;
    case 'lookstabs':
      enterLookstabs(s, scene);
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
