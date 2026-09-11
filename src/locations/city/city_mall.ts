import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'city_mall', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Shopping mall</b></center>');
  scene.img('images/locations/city/citycenter/mall/torgcentr.jpg');
  if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('The shopping center is closed and security are guiding everyone out so they can lock up.');
    return;
  }
  if (((s as any).hour ?? 0) > 12  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).exhibitionQW ?? 0) >= 5  &&  ((s as any).KsenyaQW ?? 0) === 0  &&  ((s as any).Kignore ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['city_mall', 'ksenya_mall_event'] }]);
  }
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<td align="center" width="33%"><a href="exec: minut += 3 & gt ''shop_pussycats'',...
  // TODO-QSP: $temp_table +=    '<td align="center" width="33%"><a href="exec:torg = 1 & minut += 3 & gt ''shop_gm...
  // TODO-QSP: $temp_table +=    '<td align="center" width="33%"><a href="exec: minut += 3 & gt ''shop_danilovich''...
  // TODO-QSP: $temp_table +=  '</tr><tr>'
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''shop_fashionista'',''start''"...
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''shop_moncheri'', ''start''"><...
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''shop_lusso'', ''start''"><img...
  // TODO-QSP: $temp_table +=  '</tr><tr>'
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''shop_materinstvo'',''start''"...
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''shop_scandalicious'',''start'...
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''shopdacha''"><img style="max-...
  // TODO-QSP: $temp_table +=  '</tr><tr>'
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''hairsalon'', ''start''"><img ...
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''salon'', ''start''"><img styl...
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''zoomagazine'',''start''"><img...
  // TODO-QSP: $temp_table +=  '</tr><tr>'
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: ml_boughtamp = 0 & ml_boughtguitar = 0 & minut ...
  // TODO-QSP: $temp_table +=    '<td align="center"><a href="exec: minut += 3 & gt ''shop_photography'',''start''"...
  // TODO-QSP: $temp_table += '</tr></table></center>'
  qspCall(s, 'lover', 'lover_events');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to Ksenya', handler: (st: GameState) => {
    (s as any).KsenyaQW = 1;
    scene.img('images/characters/pushkin/ksenya/mall5.jpg');
    // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>, What brings you to the city?" she asks leaning on the ...
    scene.text(`"Hello ${((s as any).pcs_nickname ?? 0)}, What brings you to the city?" she asks leaning on the windshield.`);
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
    // TODO-QSP: dynamic text: "Mom, This is <<$pcs_firstname>>. She is a friend that I share an interest with ...
    scene.text(`"Mom, This is ${((s as any).pcs_firstname ?? 0)}. She is a friend that I share an interest with and she is also a customer of mine" Ksenya says. "${((s as any).pcs_nickname ?? 0)}, This is my mother, Makoto." she says and her mother hugs you. "Any friend of my daughters is a friend of mine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/mall2.jpg');
    // TODO-QSP: dynamic text: Makoto gets into the driver seat and starts up the car. "Come on Ksenya, we need...
    scene.text(`Makoto gets into the driver seat and starts up the car. "Come on Ksenya, we need to make a stop at the bank before we head back" she says and looks at you as Ksenya goes to the other side of the car. "Nice to have met you, ${((s as any).pcs_firstname ?? 0)}. I hope to see you around" she says and they drive off, leaving you alone in the parking lot.`);
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
    (s as any).Kignore = ((s as any).daystart ?? 0);
  }, goto: ['city_mall', ''] },
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
