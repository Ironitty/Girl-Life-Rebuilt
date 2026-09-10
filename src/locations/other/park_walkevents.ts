import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEmpty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
  return;
  scene.actions([
    { label: 'Finish your walk', goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 21) {
    scene.text('Hidden by a tree\'s shadow, you notice a man standing there, he watches you and when you look back at him he shouts "Whore!" at you.');
    return;
    scene.actions([
      { label: 'Silently leave', goto: ['city_park', 'start'] },
      { label: 'Tell him to shut up', handler: (st: GameState) => {
    scene.text('"Shut your trap, jackass." You\'re surprised when you see him quickly running away.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('From the shadow of the tree, a guy walks out…');
    scene.text('He comes up to you, grabs you, and, through gritted teeth says, "Com\'ear Bitch", dragging you into the bushes.');
    scene.text('He never notices your little smile as you anticipate the meal to come.');
    (s as any).suchunt = 0;
    (s as any).scfwon = 1;
    (s as any).suchuntday = ((s as any).daystart ?? 0);
    scene.text('From the shadow of the tree, a guy walks out…');
    scene.text('He comes up to you, grabs you, and, through gritted teeth says, "Com\'ear Bitch", dragging you into the bushes.');
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    scene.actions([
      { label: 'Continue', goto: ['succubus', 'RapistFight'] },
      { label: 'Fight him', handler: (st: GameState) => {
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'rapist');
  }, goto: ['fight', 'start'] },
      { label: 'Try to run away', handler: (st: GameState) => {
    if (((s as any).pcs_run ?? 0) < 10) {
      (s as any).peshimraperand = Math.floor(Math.random() * 12) + 0;
    } else {
      (s as any).peshimraperand = Math.floor(Math.random() * 21) + 0;
      if (((s as any).pcs_run ?? 0) < 50) {
        (s as any).peshimraperand = Math.floor(Math.random() * 31) + 0;
      } else {
        (s as any).peshimraperand = Math.floor(Math.random() * 41) + 0;
        if (((s as any).pcs_run ?? 0) < 90) {
          (s as any).peshimraperand = Math.floor(Math.random() * 51) + 0;
        } else {
          (s as any).peshimraperand = Math.floor(Math.random() * 61) + 0;
          if (((s as any).pcs_run ?? 0) < 130) {
            (s as any).peshimraperand = Math.floor(Math.random() * 71) + 0;
          } else {
            (s as any).peshimraperand = Math.floor(Math.random() * 81) + 0;
            if (((s as any).pcs_run ?? 0) < 170) {
              (s as any).peshimraperand = Math.floor(Math.random() * 91) + 0;
            } else {
              (s as any).peshimraperand = 11;
            }
            if (((s as any).peshimraperand ?? 0) <= 10) {
              scene.text('You try to run away, but you\'re not quick enough and he catches you. He drags you back into the bushes.');
              if (qspFunc(s, 'succubus', 'active', 4)) {
                scene.actions([
                  { label: 'Continue', goto: ['succubus', 'RapistFight'] },
                ]);
              } else {
                scene.actions([
                  { label: 'Continue', goto: ['city_park', 'rape1'] },
                ]);
              }
            } else {
              (s as any).minut = ((s as any).minut ?? 0) + 60;
              scene.text('You rush through the park, not caring where you\'re going. You\'re just trying to get the hell away from him. After almost running for an hour, you finally catch your breath and the rapist is nowhere to be seen.');
              scene.actions([
                { label: 'Further', handler: (st: GameState) => {
    (s as any).locbegrand = Math.floor(Math.random() * 5) + 0;
    if (((s as any).locbegrand ?? 0) === 0) {
      scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
    }
    if (((s as any).locbegrand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    }
    if (((s as any).locbegrand ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    }
    if (((s as any).locbegrand ?? 0) === 3) {
      scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
    }
    if (((s as any).locbegrand ?? 0) === 4) {
      scene.actions([{ label: 'Continue', goto: ['city_lake', 'start'] }]);
    }
  } },
              ]);
            }
          }
          if (((s as any).succubusQW ?? 0) === 14) {
            scene.actions([
              { label: 'Lure him in and feed (this can take a lot of time)', handler: (st: GameState) => {
    scene.text('You wait until he has dragged you almost to the bushes before turning on him.');
    scene.actions([
      { label: 'Continue', goto: ['succubus', 'RapistFight'] },
    ]);
  } },
            ]);
          }
          return;
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'empty':
      enterEmpty(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    default:
      enterEmpty(s, scene);
      break;
  }
}

export const park_walkevents: LocationDef = {
  name: 'park_walkevents',
  title: 'One of the other guys takes your camera and smashes it against a rock',
  region: 'other',
  description: ['You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.'],
  enter: enter,
};
