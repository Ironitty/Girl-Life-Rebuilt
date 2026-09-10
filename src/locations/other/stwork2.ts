import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStripShowStart(s: GameState, scene: SceneBuilder): void {
  (s as any).strip_club['cust_boos'] = 0;
  (s as any).strip_club['strip_tips'] = 0;
  (s as any).strip_club['dancing_rounds'] = 3;
  (s as any).strip_club['bra_type'] = ((s as any).braworntype ?? 0);
  (s as any).strip_club['bra_number'] = ((s as any).brawornnumber ?? 0);
  (s as any).strip_club['panty_type'] = ((s as any).pantyworntype ?? 0);
  (s as any).strip_club['panty_number'] = ((s as any).pantywornnumber ?? 0);
  (s as any).strip_club['clothing_type'] = ((s as any).clothingworntype ?? 0);
  (s as any).strip_club['clothing_number'] = ((s as any).clothingwornnumber ?? 0);
  (s as any).countmoney = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Stage</b></center>');
  scene.img('images/locations/city/redlight/stripclub/stripclub_stage.jpg');
  scene.text('The music starts blaring as the DJ announces you to the crowd.');
  // TODO-QSP: dynamic text: "Give it up for... <<$pcs_strippername>>!!!"
  scene.text(`"Give it up for... ${((s as any).pcs_strippername ?? 0)}!!!"`);
  scene.text('It\'s now or never. You take a deep breath and strut out onto the stage.');
  qspCall(s, 'jobs', 'clock', 'city_strip_stripper');
  qspCall(s, 'stwork2', 'strip_hub2', 1);
  scene.build();
}

function enterStripShowEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).strip_club ?? 0)?.['bra_type'] !== '') {
    // TODO-QSP: gs 'bras', 'wear', $strip_club['bra_type'], strip_club['bra_number']
  }
  if (((s as any).strip_club ?? 0)?.['panty_type'] !== '') {
    // TODO-QSP: gs 'panties', 'wear', $strip_club['panty_type'], strip_club['panty_number']
  }
  if (((s as any).strip_club ?? 0)?.['clothing_type'] !== '') {
    // TODO-QSP: gs 'clothing', 'wear', $strip_club['clothing_type'], strip_club['clothing_number']
  }
  scene.actions([{ label: 'Continue', goto: ['stwork', 'start'] }]);
  scene.build();
}

function enterStripHub(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Stage</b></center>');
  scene.img('images/locations/city/redlight/stripclub/stripclub_stage.jpg');
  if (((s as any).strip_club ?? 0)?.['strip_tips'] < 10) {
  } else {
    if (((s as any).strip_club ?? 0)?.['strip_tips'] < 30) {
    } else {
      if (((s as any).strip_club ?? 0)?.['strip_tips'] < 70) {
      } else {
        if (((s as any).strip_club ?? 0)?.['strip_tips'] < 90) {
        }
        // TODO-QSP: dynamic text: There are men sitting in front of the stage <<$pubhot>>
        scene.text(`There are men sitting in front of the stage ${((s as any).pubhot ?? 0)}`);
        qspCall(s, 'stwork2', 'strip_hub2');
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'strip_show_start':
      enterStripShowStart(s, scene);
      break;
    case 'strip_show_end':
      enterStripShowEnd(s, scene);
      break;
    case 'strip_hub':
      enterStripHub(s, scene);
      break;
    default:
      enterStripShowStart(s, scene);
      break;
  }
}

export const stwork2: LocationDef = {
  name: 'stwork2',
  title: 'Stage',
  region: 'other',
  description: ['The music starts blaring as the DJ announces you to the crowd.'],
  enter: enter,
};
