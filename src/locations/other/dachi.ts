import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  qspCall(s, 'core_library', 'setloc', 'dachi', '');
  (s as any).region = 'other';
  (s as any).location_type = 'public_outdoors';
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Suburban Cooperative</h4></center>');
  scene.img('images/locations/suburban/dachi.jpg');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: In the parking is <a href="exec: gs 'carF', 'start'">your <<$car['name']>></a>.
    scene.text(`In the parking is <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027carF\\u0027, \\u0027start\\u0027); return false;">your ${((s as any).car ?? 0)?.['name'] ?? ''}</a>.`);
  }
  scene.text('At the alley entrance dug into the ground is a <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027ETO_village\\u0027, \\u0027info_column\\u0027); return false;">column with ads</a>.');
  scene.text('At the end of the alley there is <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027ETO_village\\u0027, \\u0027spring_water\\u0027); return false;">a spring with spring water</a>.');
  if (qspFunc(s, 'homes_properties', 'has_access', 'village_cottage')) {
    scene.text('Enter <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027dachamy\\u0027, \\u0027start\\u0027); return false;">your yard</a>.');
    scene.text('Across the street from your cottage is another <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027ETO_village\\u0027, \\u0027neighbor_cottage\\u0027); return false;">cottage</a> almost identical to yours.');
    if (Object.keys((s as any).lover ?? {}).length > 0) {
      (s as any).temp_i = 0;
      (s as any).temp_max_i = 0;
      // TODO-QSP: :lover_pickup_loop
      (s as any).temp_npcid = ((s as any).lover ?? 0)?.[String((s as any).temp_i ?? 0)];
      if (((s as any).npc_meetday ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).npc_meethour ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).hour ?? 0)) {
        // TODO-QSP: dynamic text: <b>Near the entrance you expect <a href="exec: gt 'lover_meet', 'start', '<<$tem...
        scene.text(`<b>Near the entrance you expect <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027lover_meet\\u0027, \\u0027start\\u0027, \\u0027${((s as any).temp_npcid || '')}\\u0027); return false;">${((s as any).npc_usedname ?? 0)?.[String((s as any).temp_npcid ?? 0)] ?? ''}</a></b>`);
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      if (((s as any).temp_i ?? 0) < ((s as any).temp_max_i ?? 0)) {
        // TODO-QSP: jump 'lover_pickup_loop'
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'is_current_home', 'village_cottage')) {
    if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 30  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027vladimirQW_meet\\u0027, \\u00272\\u0027); return false;">There\'s an Audi parked in front of your cottage, and standing beside it, you notice Vladimir</a>.');
    }
    if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 40  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) === 6) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027vladimirQW_meet\\u0027, \\u00273\\u0027); return false;">There\'s an Audi parked in front of your cottage, and standing beside it, you notice Vladimir</a>.');
    }
    if (Object.keys((s as any).lover ?? {}).length > 0) {
      (s as any).temp_i = 0;
      (s as any).temp_max_i = 0;
      // TODO-QSP: :lover_pickup_loop2
      (s as any).temp_npcid = ((s as any).lover ?? 0)?.[String((s as any).temp_i ?? 0)];
      if (((s as any).npc_meetday ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).daystart ?? 0)  &&  ((s as any).npc_meethour ?? 0)?.[String((s as any).temp_npcid ?? 0)] === ((s as any).hour ?? 0)) {
        // TODO-QSP: dynamic text: <b><a href="exec: gt 'lover_meet', 'start', '<<$temp_npcid>>'"><<$npc_usedname[$...
        scene.text(`<b><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027lover_meet\\u0027, \\u0027start\\u0027, \\u0027${((s as any).temp_npcid || '')}\\u0027); return false;">${((s as any).npc_usedname ?? 0)?.[String((s as any).temp_npcid ?? 0)] ?? ''}</a> is waiting at the entrance to your yard.</b>`);
      }
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      if (((s as any).temp_i ?? 0) < ((s as any).temp_max_i ?? 0)) {
        // TODO-QSP: jump 'lover_pickup_loop2'
      }
    }
  }
  if (((s as any).exhib ?? 0)?.['status'] < 13) {
    scene.text('You feel a slight presence of magic.');
  }
  scene.actions([
    { label: 'Walk to the bus station (0:03)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['bus', 'communal'] },
    { label: 'Go to the highway (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '5'] },
    { label: 'Stroll through the alleys', goto: ['ETO_village', 'community_alleys'] },
  ]);
  scene.build();
}

export const dachi: LocationDef = {
  name: 'dachi',
  title: '<center><h4>Suburban Cooperative</h4></center>',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['You feel a slight presence of magic.'],
  enter: enter,
};
