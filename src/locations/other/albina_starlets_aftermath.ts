import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['RideDaystart'] = 0;
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['albride'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/bmw.jpg');
  scene.text('An expensive looking SUV pulls up to you and the front window rolls down. Albina is sitting in the driver\'s seat and smiles at you. "Let\'s go to my place. We need to talk."');
  scene.actions([
    { label: 'Get in', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/drive.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You climb into the car next to Albina. She puts the car into gear and starts driving through town.');
    if (((st as any).AlbinaQW ?? 0)?.['Chernov'] === 1) {
      scene.text('"Is this your car? And since when could you drive?" you ask.');
      scene.text('She laughs in response. "No, this is one of my father\'s cars that I… borrowed. And before you ask, no, I don\'t have a licence, but the police around here don\'t give a shit."');
      scene.text(`She stops at a red light and turns to you, looking rather happy. "You don't know what good you've done, ${((st as any).pcs_nickname ?? '')}. I didn't think Chernov would have acted this fast with those leads."`);
      scene.text('"Wait, <i>you</i> were his \'anonymous source\' that exposed the Starlets? Why?" you ask in surprise.');
      scene.text('"Me? No. Well, not exactly…"');
      scene.text('"Who then? What aren\'t you telling me here?" you ask, but she looks away meekly as the light turns green and she continues driving in silence.');
      scene.text('After driving for a while, you reach her house. She drives up the driveway and stops outside the front door before she tells you to follow her and exits the car.');
    }
    if (((st as any).AlbinaQW ?? 0)?.['Chernov'] === 2) {
      scene.text('"Is this your car? And since when could you drive?" you ask.');
      scene.text('She laughs in response. "No, this is one of my father\'s cars that I… borrowed. And before you ask, no, I don\'t have a licence, but the police around here don\'t give a shit."');
      scene.text(`She stops at a red light and turns to you. "I really wish you had told that man everything he was asking for ${((st as any).pcs_nickname ?? '')}," she says It would have been very helpful to me."`);
      scene.text('"What do you mean \'helpful to you?\' He was trying to get me to speak out against the Starlets!" you reply.');
      scene.text('Yeah, because he was given the evidence he needed."');
      scene.text('"What? How? By who?" you ask in confusion.');
      scene.text('Instead of replying, she just meekly looks away as the light turns green and she continues driving in silence.');
      scene.text('After driving for a while, you reach her house. She drives up the driveway and stops outside the front door before she tells you to follow her and exits the car.');
    }
    scene.actions([
      { label: 'Go with Albina', goto: ['albina_house_events', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

export const albina_starlets_aftermath: LocationDef = {
  name: 'albina_starlets_aftermath',
  title: 'An expensive looking SUV pulls up to you and the front windo',
  region: 'other',
  description: ['An expensive looking SUV pulls up to you and the front window rolls down. Albina is sitting in the driver\'s seat and smiles at you. "Let\'s go to my place. We need to talk."'],
  enter: enter,
};
