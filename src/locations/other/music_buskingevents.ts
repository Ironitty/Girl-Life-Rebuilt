import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBusking(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_buskingtime = 60;
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).ml_buskingtime ?? 0));
  qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 3) + 1);
  (s as any).ml_busking['busking_count'] = ((s as any).ml_busking['busking_count'] ?? 0) + (1);
  (s as any).ml_busking['busking_time'] = ((s as any).ml_busking['busking_time'] ?? 0) + (((s as any).ml_buskingtime ?? 0));
  if (((s as any).perform_lvl ?? 0) < 50) {
    qspCall(s, 'exp_gain', 'perform', Math.floor(Math.random() * 3) + 1);
  }
  qspCall(s, 'music_buskingevents', 'calculate_tips');
  qspCall(s, 'money', 'earn', ((s as any).ml_tipsearned ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic '<<$ARGS[1]>>_music += rand(0,3)'
  (s as any).ml_performance['total_time_performed'] = ((s as any).ml_performance['total_time_performed'] ?? 0) + (((s as any).ml_buskingtime ?? 0));
  (s as any).ml_performance['performed_minutes'] = ((s as any).ml_performance['performed_minutes'] ?? 0) + (((s as any).ml_buskingtime ?? 0));
  (s as any).ml_busking['busking_count'] = ((s as any).ml_busking['busking_count'] ?? 0) + (1);
  (s as any).ml_busking['busking_time'] = ((s as any).ml_busking['busking_time'] ?? 0) + (((s as any).ml_buskingtime ?? 0));
  (s as any).ml_busking['total_earnings'] = ((s as any).ml_busking['total_earnings'] ?? 0) + (((s as any).ml_tipsearned ?? 0));
  scene.img('images/pc/activities/music/guitarf\'+ rand(1, 2) +\'.jpg');
  // TODO-QSP: dynamic text: You start to play the songs you know, pushing your open guitar case forward a li...
  scene.text(`You start to play the songs you know, pushing your open guitar case forward a little in case people drop some change there.' + iif(ml_online['account'] = 1 and ml_online['active'] = 1, ' You also set up the sign with the link to your webprofile.', ') + ' After playing for an hour you have made ${((s as any).ml_tipsearned ?? 0)} <b>P</b> in tips.`);
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_buskingevents', 'finish');
  } },
  ]);
  scene.build();
}

function enterCalculateTips(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    (s as any).ml_location_mod = 30;
  } else {
    (s as any).ml_location_mod = 0;
    if (((s as any).region ?? 0) === 'pushkin') {
      (s as any).ml_location_mod = 15;
    }
    (s as any).ml_time_mod = 5;
    if (((s as any).week ?? 0) >= 5) {
      (s as any).ml_time_mod = ((s as any).ml_time_mod ?? 0) + (10);
    }
    if (((s as any).hour ?? 0) >= 17) {
      (s as any).ml_time_mod = ((s as any).ml_time_mod ?? 0) + (10);
    }
    (s as any).ml_time_loc_mod = (((s as any).ml_location_mod ?? 0) + ((s as any).ml_time_mod ?? 0));
    (s as any).ml_tipsmax = ((((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0) + ((((s as any).pcs_hotcat ?? 0)-4)*35)) * ((s as any).ml_time_loc_mod ?? 0))/50;
    (s as any).ml_tipsearned = (((s as any).max ?? 0)(((s as any).rand ?? 0)(((s as any).ml_time_loc_mod ?? 0), ((s as any).ml_tipsmax ?? 0)), 0)*((s as any).ml_buskingtime ?? 0)) / 60;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'busking':
      enterBusking(s, scene);
      break;
    case 'calculate_tips':
      enterCalculateTips(s, scene);
      break;
    default:
      enterBusking(s, scene);
      break;
  }
}

export const music_buskingevents: LocationDef = {
  name: 'music_buskingevents',
  title: 'As you stop playing and get ready to pack up, you spot Anush',
  region: 'other',
  enter: enter,
};
