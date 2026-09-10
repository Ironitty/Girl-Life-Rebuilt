import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 11) {
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] >= 9  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] <= 10) {
      qspCall(s, 'stat', '');
      scene.text('<center><h4>Rolan on the bench</h4></center>');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchsr.jpg');
      scene.text('Rolan stays on the bench reading something. You can talk to him… or investigate…');
      if (qspFunc(s, 'money', 'can_afford', 8000) === 1  &&  ((s as any).rolanblockhome ?? 0) === 1) {
        scene.text('You have some money with you, maybe Rolan wants his old bath back…');
      }
      if (((s as any).rolanblockhome ?? 0) !== 1) {
        scene.actions([
          { label: 'Approach and chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Rolan the janitor</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/headrol.jpg');
    scene.text('You sit down next to him on a nearby bench.');
    if (((s as any).npc_rel ?? 0)?.['A133'] < 20) {
      scene.text('You try to have a conversation with Rolan, but he dislikes you too much to even pretend to be interested in what you have to say.');
      scene.actions([
        { label: 'Chat anyway', handler: (st: GameState) => {
    (s as any).npc_rel['A133'] = ((s as any).npc_rel['A133'] ?? 0) + ((((s as any).pcs_intel ?? 0) / 10) + (((s as any).pcs_apprnc ?? 0) / 20));
    qspCall(s, 'stat', '');
    scene.text('You can tell his attitude towards you is slightly milder.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      scene.text('You have a nice chat with Rolan.');
      if (((s as any).npc_rel ?? 0)?.['A133'] >= 40) {
        scene.text('Rolan likes you too much to even pretend to not stare at your boobs.');
        scene.actions([
          { label: 'Friendly chat', handler: (st: GameState) => {
    (s as any).npc_rel['A133'] = ((s as any).npc_rel['A133'] ?? 0) + ((((s as any).pcs_intel ?? 0) / 10) + (((s as any).pcs_apprnc ?? 0) / 20));
    qspCall(s, 'stat', '');
    scene.text('You can see the bulge in his crotch growing.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
          { label: 'Move away', goto: ['pav_complex', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).npc_rel['A133'] = ((s as any).npc_rel['A133'] ?? 0) + ((((s as any).pcs_intel ?? 0) / 10) + (((s as any).pcs_apprnc ?? 0) / 20));
    qspCall(s, 'stat', '');
    scene.text('You can tell your friendship is growing.');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
    if (((s as any).rolanblockhome ?? 0) === 1  &&  qspFunc(s, 'money', 'can_afford', 8000) === 1  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Rolan the janitor</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturn0.jpg');
    scene.text('You sit down next to him on a nearby bench. Rolan turns his head to the other side.');
    scene.actions([
      { label: 'Speak', handler: (st: GameState) => {
    (st as any).rolanapol = 0;
  }, goto: ['pav_complexrolan', 'friends'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Apologize', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Rolan the janitor</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanturn0.jpg');
    scene.text('You sit down next to him on a nearby bench. Rolan turns his head to the other side.');
    scene.actions([
      { label: 'Speak', goto: ['pav_complexrolan', 'friends'] },
    ]);
  } },
      ]);
    }
    if (((s as any).sunWeather ?? 0) === 1  &&  (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 9  ||  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 10)) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchs.jpg');
      scene.text('An old man sits on the bench. He\'s feeding some birds, which makes you wonder if this bench makes everyone want to feed birds.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchsrainy.jpg');
      scene.text('The large bench where Rolan usually sits. He spends time here to catch butterflies and appreciate nature when he can, in the late afternoons and evenings. However, due to the rain, Rolan isn\'t here right now.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
    if (((s as any).sunWeather ?? 0) === 1) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchw.jpg');
      scene.text('It\'s too cold to meet Rolan here. There\'s snow everywhere - someone should have cleaned the bench to sit on.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/benchws.jpg');
      scene.text('You didn\'t expect to see Rolan here.');
      scene.actions([
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Hide and snoop', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 100) + 1 < 20) {
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/starting.jpg');
      scene.text('You hide behind a tree to see what Rolan is doing. He seems in bad condition, his whole body is shaking, maybe he needs help.');
      scene.actions([
        { label: 'look closer', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('He furiously moves his hand under the coat… "Mmmh… Guess he doesn\'t need help after all…"');
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/looking.jpg');
      scene.text('You hide behind a tree to see what Rolan is doing. He\'s looking around; maybe he has caught something interesting?');
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/feeding.jpg');
      scene.text('You hide behind a tree to see what Rolan is doing. "Oh crap, how old is he? To feed little birds and post photos of himself feeding them?"');
      scene.actions([
        { label: 'look what has caught his attention', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('Looking closer, you see the reason for Rolan\'s interest… well… that\'s a good sight.');
    scene.actions([
      { label: 'Look', goto: ['pav_complexrolan', 'spy'] },
    ]);
  } },
        { label: 'Move away', goto: ['pav_complex', 'start'] },
        { label: 'The good side of Rolan', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).rolanpantyconfession ?? 0) !== 1) {
      scene.text('Well he\'s a good man after all…');
    } else {
      scene.text('Well maybe he\'s a good man after all… even though he steals panties…');
    }
    scene.actions([
      { label: 'Move away', goto: ['pav_complex', 'start'] },
    ]);
  } },
        { label: 'Move away', goto: ['pav_complex', 'start'] },
      ]);
    }
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Stop watching Rolan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_complex', 'start'] },
      ]);
    }
  }
  scene.build();
}

export const pav_complexrolan: LocationDef = {
  name: 'pav_complexrolan',
  title: 'Rolan the janitor',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  description: ['Rolan stays on the bench reading something. You can talk to him… or investigate…'],
  enter: enter,
};
