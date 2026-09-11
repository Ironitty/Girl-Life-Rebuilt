// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterTeachers(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  // TODO-QSP: :teach_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 6  &&  ((s as any).schoolenable ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
    // TODO-QSP: $temp_teach_text += '<td><table bgcolor=<<$theme[''table_bg_alt'']>>><tr><td align="center"><a href=...
    (s as any).temp_teach_count = ((s as any).temp_teach_count ?? 0) + (1);
    if (((s as any).temp_teach_count ?? 0) === 6) {
      // TODO-QSP: $temp_teach_text += '</tr><tr>'
      (s as any).temp_teach_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'teach_loop'
  }
  // TODO-QSP: $temp_teach_text
  scene.text('</table></center>');
  scene.build();
}

function enterNerds(s: GameState, scene: SceneBuilder): void {
  (s as any).nerd_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  // TODO-QSP: :nerd_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 3  &&  ((s as any).schoolenable ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
    // TODO-QSP: $nerd_text += '<td><table bgcolor=<<$theme[''table_bg_alt'']>>><tr><td align="center"><a href="exec:...
    (s as any).nerd_count = ((s as any).nerd_count ?? 0) + (1);
    if (((s as any).nerd_count ?? 0) === 6) {
      // TODO-QSP: $nerd_text += '</tr><tr>'
      (s as any).nerd_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'nerd_loop'
  }
  // TODO-QSP: $nerd_text
  scene.text('</table></center>');
  scene.build();
}

function enterJocks(s: GameState, scene: SceneBuilder): void {
  (s as any).jock_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  // TODO-QSP: :jock_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 2  &&  ((s as any).schoolenable ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
    // TODO-QSP: $jock_text += '<td><table bgcolor=<<$theme[''table_bg_alt'']>>><tr><td align="center"><a href="exec:...
    (s as any).jock_count = ((s as any).jock_count ?? 0) + (1);
    if (((s as any).jock_count ?? 0) === 6) {
      // TODO-QSP: $jock_text += '</tr><tr>'
      (s as any).jock_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'jock_loop'
  }
  // TODO-QSP: $jock_text
  scene.text('</table></center>');
  scene.build();
}

function enterPopular(s: GameState, scene: SceneBuilder): void {
  (s as any).pop_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  // TODO-QSP: :pop_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 1  &&  ((s as any).schoolenable ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
    // TODO-QSP: $pop_text += '<td><table bgcolor=<<$theme[''table_bg_alt'']>>><tr><td align="center"><a href="exec:g...
    (s as any).pop_count = ((s as any).pop_count ?? 0) + (1);
    if (((s as any).pop_count ?? 0) === 6) {
      // TODO-QSP: $pop_text += '</tr><tr>'
      (s as any).pop_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'pop_loop'
  }
  // TODO-QSP: $pop_text
  scene.text('</table></center>');
  scene.build();
}

function enterGopniks(s: GameState, scene: SceneBuilder): void {
  (s as any).gop_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  // TODO-QSP: :gop_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 4  &&  ((s as any).schoolenable ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
    // TODO-QSP: $gop_text += '<td><table bgcolor=<<$theme[''table_bg_alt'']>>><tr><td align="center"><a href="exec:g...
    (s as any).gop_count = ((s as any).gop_count ?? 0) + (1);
    if (((s as any).gop_count ?? 0) === 6) {
      // TODO-QSP: $gop_text += '</tr><tr>'
      (s as any).gop_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'gop_loop'
  }
  // TODO-QSP: $gop_text
  scene.text('</table></center>');
  scene.build();
}

function enterOutcasts(s: GameState, scene: SceneBuilder): void {
  (s as any).oc_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  // TODO-QSP: :oc_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 5  &&  ((s as any).schoolenable ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
    // TODO-QSP: $oc_text += '<td><table bgcolor=<<$theme[''table_bg_alt'']>>><tr><td align="center"><a href="exec:gt...
    (s as any).oc_count = ((s as any).oc_count ?? 0) + (1);
    if (((s as any).oc_count ?? 0) === 6) {
      // TODO-QSP: $oc_text += '</tr><tr>'
      (s as any).oc_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'oc_loop'
  }
  // TODO-QSP: $oc_text
  scene.text('</table></center>');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'teachers':
      enterTeachers(s, scene);
      break;
    case 'nerds':
      enterNerds(s, scene);
      break;
    case 'jocks':
      enterJocks(s, scene);
      break;
    case 'popular':
      enterPopular(s, scene);
      break;
    case 'gopniks':
      enterGopniks(s, scene);
      break;
    case 'outcasts':
      enterOutcasts(s, scene);
      break;
    default:
      enterTeachers(s, scene);
      break;
  }
}

export const gschool_groups: LocationDef = {
  name: 'gschool_groups',
  title: '<center><table cellspacing="3">',
  region: 'other',
  enter: enter,
};
