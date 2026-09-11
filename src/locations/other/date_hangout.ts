import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
  if (((s as any).locArgs?.[1] ?? 0) === 'knock') {
    // TODO-QSP: dynamic text: You knock on the door and <<$npcdesc>> opens up.
    scene.text(`You knock on the door and ${((s as any).npcdesc ?? 0)} opens up.`);
    scene.text('"Hey, come on in."');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'together') {
      // TODO-QSP: dynamic text: You and <<$npcdesc>> saunter up to his door together, which he unlocks and leads...
      scene.text(`You and ${((s as any).npcdesc ?? 0)} saunter up to his door together, which he unlocks and leads you inside.`);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'disco') {
        // TODO-QSP: dynamic text: Strolling away from the disco, you come to <<$npcdesc>>'s apartment with him, an...
        scene.text(`Strolling away from the disco, you come to ${((s as any).npcdesc ?? 0)}'s apartment with him, and he unlocks the door to lead you inside.`);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'club') {
          // TODO-QSP: dynamic text: Leaving the club, you take a cab ride to <<$npcdesc>>'s apartment with him, and ...
          scene.text(`Leaving the club, you take a cab ride to ${((s as any).npcdesc ?? 0)}'s apartment with him, and he unlocks the door to lead you inside.`);
        } else {
          // TODO-QSP: dynamic text: You and <<$npcdesc>> saunter up to his door together, which he unlocks and leads...
          scene.text(`You and ${((s as any).npcdesc ?? 0)} saunter up to his door together, which he unlocks and leads you inside.`);
        }
      }
    }
  }
  qspCall(s, 'date_hangout', 'init', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: dynamic text: <center><<$npc_apt_hall[$npcID]>></center>
  scene.text(`<center>${((s as any).npc_apt_hall ?? 0)?.[String((s as any).npcID ?? 0)]}</center>`);
  qspCall(s, 'date_hangout', 'settle_in');
  // TODO-QSP: end
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['init'] < ((s as any).totminut ?? 0) - 60) {
    ((s as any).date_ev ?? {})['init'] = ((s as any).totminut ?? 0);
    ((s as any).date_ev ?? {})['at_home'] = 1;
    ((s as any).date_ev ?? {})['type'] = 'home_date';
    ((s as any).date_ev ?? {})['loc'] = 'date_hangout';
    ((s as any).date_ev ?? {})['loc_img'] = 'loc_img';
    ((s as any).date_ev ?? {})['talk_img'] = 'talk_img';
    ((s as any).date_ev ?? {})['activity_count'] = (((s as any).date_ev ?? {})['activity_count'] ?? 0) + (1);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_hangout: LocationDef = {
  name: 'date_hangout',
  title: '"Hey, come on in."',
  region: 'other',
  enter: enter,
};
