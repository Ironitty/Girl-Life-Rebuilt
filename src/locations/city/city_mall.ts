import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'city_mall', '');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Shopping mall</b></center>');
  scene.img('images/locations/city/citycenter/mall/torgcentr.jpg');
  if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The shopping center is closed and security are guiding everyone out so they can lock up.');
    return;
  }
  if (((s as any).hour ?? 0) > 12  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).exhibitionQW ?? 0) >= 5  &&  ((s as any).KsenyaQW ?? 0) === 0  &&  ((s as any).Kignore ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'city_mall', 'ksenya_mall_event');
  }
  (s as any).temp_table = '<center><table cellspacing=5 style="min-width:1000px; max-width:100%">';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center" width="33%"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_pussycats\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/pussycat.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center" width="33%"><a href="#" onclick="window.__gameStore.setState((s) => { s.torg = s.1; s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_gm\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/gm.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center" width="33%"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_danilovich\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/sports.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_fashionista\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/fashionista.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_moncheri\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/moncheri.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_lusso\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/Lusso.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_materinstvo\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/mommy.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_scandalicious\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/scandalicious.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shopdacha\u0027, \u0027\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/constructiont.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027hairsalon\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/goldencurl.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027salon\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/beautybart.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027zoomagazine\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/petstore.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr><tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.ml_boughtamp = s.0; s.ml_boughtguitar = s.0; s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027city_musicstore\u0027, \u0027\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/musicstore.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.3; return s; }); window.__gameStore.getState().doGoto(\u0027shop_photography\u0027, \u0027start\u0027); return false;"><img style="max-width:100%" src="images/locations/city/citycenter/mall/photoshop.png"></a></td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr></table></center>');
  (s as any).temp_table = undefined;
  qspCall(s, 'lover', 'lover_events');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Go to the supermarket', goto: ['shop', 'start'] },
    { label: 'Go bowling', goto: ['bouling', ''] },
    { label: 'Play pool', goto: ['billiard', ''] },
    { label: 'Go to the cinema', goto: ['city_cinema', ''] },
  ]);
  scene.build();
}

function enterKsenyaMallEvent(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pushkin/ksenya/mall1.jpg');
  scene.text('As you approach the mall, you see a beautiful, hot pink Ferrari before you. It\'s top is down and it\'s doors are wide open. Inside you see a familiar face. "Hello Ksenya" You say walking up to her.');
  scene.text('She looks up at you with a smile and steps out of the car. You can see she isn\'t wearing her normal exhibition clothes today but with slight movement, you can get a look at her panties as her dress is rather tight and short.');
  scene.actions([
    { label: 'Talk to Ksenya', handler: (st: GameState) => {
    (st as any).KsenyaQW = 1;
    scene.img('images/characters/pushkin/ksenya/mall5.jpg');
    scene.text(`"Hello ${((st as any).pcs_nickname ?? '')}, What brings you to the city?" she asks leaning on the windshield.`);
    scene.text('"Oh you know, shopping" you reply. "What about you?"');
    scene.text('"My mother is getting her hair done and I\'m waiting for her to finish," she admits. "Stick around long enough and you can meet her if you want" she offers.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/mall4.jpg');
    scene.text('Ksenya is leaning over her car, looking bored as she waits for her mother.');
    scene.actions([
      { label: 'Head into the mall', handler: (st: GameState) => {
    scene.text('"If I had time I would, but I have to get my shopping done. Hope to see you around" You tell her and she gives you a slight smile and lets you head off with a gentle wave.');
    scene.actions([
      { label: 'Continue', goto: ['city_mall', ''] },
    ]);
  } },
      { label: 'Stick around', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/mall3.jpg');
    scene.text('You and Ksenya wait around talking about your shared passion when a woman in a white dress walks up to the car. For a moment you could swear this was her sister but when Ksenya walked up to her and hugged her, you understood that this was her mother. "You look good, mom" She says to the other woman.');
    scene.text('"Who\'s your friend?" she asks leaning on the hood of the car.');
    scene.text(`"Mom, This is ${((st as any).pcs_firstname ?? '')}. She is a friend that I share an interest with and she is also a customer of mine" Ksenya says. "${((st as any).pcs_nickname ?? '')}, This is my mother, Makoto." she says and her mother hugs you. "Any friend of my daughters is a friend of mine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/mall2.jpg');
    scene.text(`Makoto gets into the driver seat and starts up the car. "Come on Ksenya, we need to make a stop at the bank before we head back" she says and looks at you as Ksenya goes to the other side of the car. "Nice to have met you, ${((st as any).pcs_firstname ?? '')}. I hope to see you around" she says and they drive off, leaving you alone in the parking lot.`);
    scene.actions([
      { label: 'Enter the mall', goto: ['city_mall', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Say you don\'t have time right now and enter the mall', handler: (st: GameState) => {
    (st as any).Kignore = ((st as any).daystart ?? 0);
    qspGoto(st, 'city_mall', '');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ksenya_mall_event':
      enterKsenyaMallEvent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_mall: LocationDef = {
  name: 'city_mall',
  title: '<center><b>Shopping mall</b></center>',
  region: 'city',
  locationType: 'public_indoors',
  description: ['The shopping center is closed and security are guiding everyone out so they can lock up.'],
  enter: enter,
};
