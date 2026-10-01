// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTeachers(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table cellspacing="3">');
  const aarraynumber = Number((s as any).aarraynumber ?? 0);
  let i = 1;
  let teachText = '';
  let teachCount = 0;
  do {
    const id = 'A' + i;
    if (Number((s as any).npc_grupTipe?.[id] ?? 0) === 6 && Number((s as any).schoolenable?.[id] ?? 0) === 1) {
      const name = String((s as any).npc_usedname?.[id] ?? '');
      teachText += `<td><table bgcolor=${String((s as any).theme?.['table_bg_alt'] ?? '')}><tr><td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.numnpc = ${i}; return s; }); window.__gameStore.getState().doGoto('Snpc', ''); return false;"><img height="100" src="images/characters/shared/headshots_main/${i}.jpg"></a></td></tr><tr><td align="center">${name}</td></tr></table></td>`;
      teachCount += 1;
      if (teachCount === 6) {
        teachText += '</tr><tr>';
        teachCount = 0;
      }
    }
    i += 1;
  } while (i <= aarraynumber);
  scene.text(teachText);
  scene.text('</table></center>');
  scene.build();
}

function enterNerds(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table cellspacing="3">');
  const aarraynumber = Number((s as any).aarraynumber ?? 0);
  let i = 1;
  let nerdText = '';
  let nerdCount = 0;
  do {
    const id = 'A' + i;
    if (Number((s as any).npc_grupTipe?.[id] ?? 0) === 3 && Number((s as any).schoolenable?.[id] ?? 0) === 1) {
      const name = String((s as any).npc_usedname?.[id] ?? '');
      const lcaseNerd = name.toLowerCase();
      nerdText += `<td><table bgcolor=${String((s as any).theme?.['table_bg_alt'] ?? '')}><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto('gschool_nerd_chats', '${lcaseNerd}'); return false;"><img height="100" src="images/characters/shared/headshots_main/${i}.jpg"></a></td></tr><tr><td align="center">${name}</td></tr></table></td>`;
      nerdCount += 1;
      if (nerdCount === 6) {
        nerdText += '</tr><tr>';
        nerdCount = 0;
      }
    }
    i += 1;
  } while (i <= aarraynumber);
  scene.text(nerdText);
  scene.text('</table></center>');
  scene.build();
}

function enterJocks(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table cellspacing="3">');
  const aarraynumber = Number((s as any).aarraynumber ?? 0);
  let i = 1;
  let jockText = '';
  let jockCount = 0;
  do {
    const id = 'A' + i;
    if (Number((s as any).npc_grupTipe?.[id] ?? 0) === 2 && Number((s as any).schoolenable?.[id] ?? 0) === 1) {
      const name = String((s as any).npc_usedname?.[id] ?? '');
      const lcaseJock = name.toLowerCase();
      jockText += `<td><table bgcolor=${String((s as any).theme?.['table_bg_alt'] ?? '')}><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto('gschool_jock_chats', '${lcaseJock}'); return false;"><img height="100" src="images/characters/shared/headshots_main/${i}.jpg"></a></td></tr><tr><td align="center">${name}</td></tr></table></td>`;
      jockCount += 1;
      if (jockCount === 6) {
        jockText += '</tr><tr>';
        jockCount = 0;
      }
    }
    i += 1;
  } while (i <= aarraynumber);
  scene.text(jockText);
  scene.text('</table></center>');
  scene.build();
}

function enterPopular(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table cellspacing="3">');
  const aarraynumber = Number((s as any).aarraynumber ?? 0);
  let i = 1;
  let popText = '';
  let popCount = 0;
  do {
    const id = 'A' + i;
    if (Number((s as any).npc_grupTipe?.[id] ?? 0) === 1 && Number((s as any).schoolenable?.[id] ?? 0) === 1) {
      const name = String((s as any).npc_usedname?.[id] ?? '');
      const lcasePop = name.toLowerCase();
      popText += `<td><table bgcolor=${String((s as any).theme?.['table_bg_alt'] ?? '')}><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto('gschool_coolkid_chats', '${lcasePop}'); return false;"><img height="100" src="images/characters/shared/headshots_main/${i}.jpg"></a></td></tr><tr><td align="center">${name}</td></tr></table></td>`;
      popCount += 1;
      if (popCount === 6) {
        popText += '</tr><tr>';
        popCount = 0;
      }
    }
    i += 1;
  } while (i <= aarraynumber);
  scene.text(popText);
  scene.text('</table></center>');
  scene.build();
}

function enterGopniks(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table cellspacing="3">');
  const aarraynumber = Number((s as any).aarraynumber ?? 0);
  let i = 1;
  let gopText = '';
  let gopCount = 0;
  do {
    const id = 'A' + i;
    if (Number((s as any).npc_grupTipe?.[id] ?? 0) === 4 && Number((s as any).schoolenable?.[id] ?? 0) === 1) {
      const name = String((s as any).npc_usedname?.[id] ?? '');
      const lcaseGop = name.toLowerCase();
      gopText += `<td><table bgcolor=${String((s as any).theme?.['table_bg_alt'] ?? '')}><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto('gschool_gopnik_chats', '${lcaseGop}'); return false;"><img height="100" src="images/characters/shared/headshots_main/${i}.jpg"></a></td></tr><tr><td align="center">${name}</td></tr></table></td>`;
      gopCount += 1;
      if (gopCount === 6) {
        gopText += '</tr><tr>';
        gopCount = 0;
      }
    }
    i += 1;
  } while (i <= aarraynumber);
  scene.text(gopText);
  scene.text('</table></center>');
  scene.build();
}

function enterOutcasts(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table cellspacing="3">');
  const aarraynumber = Number((s as any).aarraynumber ?? 0);
  let i = 1;
  let ocText = '';
  let ocCount = 0;
  do {
    const id = 'A' + i;
    if (Number((s as any).npc_grupTipe?.[id] ?? 0) === 5 && Number((s as any).schoolenable?.[id] ?? 0) === 1) {
      const name = String((s as any).npc_usedname?.[id] ?? '');
      const lcaseOc = name.toLowerCase();
      ocText += `<td><table bgcolor=${String((s as any).theme?.['table_bg_alt'] ?? '')}><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto('gschool_outcast_chats', '${lcaseOc}'); return false;"><img height="100" src="images/characters/shared/headshots_main/${i}.jpg"></a></td></tr><tr><td align="center">${name}</td></tr></table></td>`;
      ocCount += 1;
      if (ocCount === 6) {
        ocText += '</tr><tr>';
        ocCount = 0;
      }
    }
    i += 1;
  } while (i <= aarraynumber);
  scene.text(ocText);
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
      enterDefault(s, scene);
      break;
  }
}

export const gschool_groups: LocationDef = {
  name: 'gschool_groups',
  title: '<center><table cellspacing="3">',
  region: 'other',
  enter: enter,
};
