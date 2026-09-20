import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).loc = 'BDSM';
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.text('You make your way to a room where a makeshift decor has been setup to shoot a porn movie.');
  scene.actions([
    { label: 'Begin participating in the shooting', handler: (st: GameState) => {
    scene.text('You started filming a scene with two actors');
    scene.actions([
      { label: 'Shoot a scene with blowjob', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    ((st as any).stat = (st as any).stat ?? {})['bj'] = ((st as any).stat['bj'] ?? 0) + (2);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    scene.text('You purse your lips and start sucking on the first cock while vigorously pistoning the other shaft with your hand. You alternate sucking and pistoning each cock with gusto, going as far as trying to swallow both simultaneously all while making eye contact with the lens in the hope of enticing your viewers.');
    scene.actions([
      { label: 'Get into doggy-style', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['anal'] = ((st as any).stat['anal'] ?? 0) + (1);
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.text('One of the actors bends on all fours and unceremoniously jams his rod up your ass. He then proceeds to pound your butt into submission while you continue sucking away on your 2nd costars juicy man meat…');
    scene.actions([
      { label: 'Sit on top…', handler: (st: GameState) => {
    scene.text('You change positions. Your fellow porn actor lies down and you proceed to impale your anal cavity on his rigid rod. The third actor shoves his cock in your face and you immediately return to your hooverish ways…');
    scene.actions([
      { label: 'Continue movements', handler: (st: GameState) => {
    scene.text('Your male costars exchange roles fucking your face and ass. You slather away unpreoccupied by the taste of your own ass.');
    scene.actions([
      { label: 'Prepare for double penetration', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['vaginal'] = ((st as any).stat['vaginal'] ?? 0) + (1);
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    scene.text('Your juicy pussy is being jackhammered to heaven when you feel something large probing your backdoor. Your ass tingles with arousal as it stretches to accommodate your new invader.-');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.text('You let yourself be manhandled and stretched by the two brutes fucking you into pleasure numbing submission with their large pleasure rods. They roll you over and spread your legs farther apart giving the camera an excellent view of dripping quim and orgasming rosebud.');
    scene.actions([
      { label: 'Time to finish…', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    scene.text('Reaching their limits the men pull out of you in earnest. You quickly kneel and open your mouth licking your lips as you await your favorite tasty treat. The actors jackoff furiously as jets of hot cum start raining down on your face. You must have worked them pretty good as your face is rapidly drenched in cock juice that starts to drip down your chin and on to your chest!');
    scene.actions([
      { label: 'Get paid', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 480;
    (st as any).film = ((st as any).film ?? 0) + 1;
    (st as any).BDSMfilm = ((st as any).BDSMfilm ?? 0) + 1;
    // TODO-QSP: gs 'money', 'earn', pcs_apprnc * 125
    (st as any).actr = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/dvd-disx.jpg');
    scene.text('You spent 9 hours for the filming');
    // TODO-QSP: dynamic text: and received <<$func(''money'', ''string_profit'', pcs_apprnc * 125)>> in cash
    scene.text(`and received ${qspFunc(s, 'money', 'string_profit', ((st as any).pcs_apprnc ?? '') * 125)} in cash`);
    scene.actions([
      { label: 'Leave the studio', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const BDSM: LocationDef = {
  name: 'BDSM',
  title: 'You make your way to a room where a makeshift decor has been',
  region: 'other',
  locationType: 'event',
  description: ['You make your way to a room where a makeshift decor has been setup to shoot a porn movie.'],
  enter: enter,
};
