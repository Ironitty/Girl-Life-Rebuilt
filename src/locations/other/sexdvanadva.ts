import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (2);
  (s as any).girl = ((s as any).girl ?? 0) + (1);
  (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 2) + 0;
  // TODO-QSP: xgt 'sexdvanadva', 'var'
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) + (1);
  (s as any).sexdvarand = Math.floor(Math.random() * 7) + 0;
  if (((s as any).picrand ?? 0) === 11) {
    (s as any).sexdvarand = Math.floor(Math.random() * 6) + 0;
  }
  if (((s as any).picrand ?? 0) === 12) {
    (s as any).sexdvarand = Math.floor(Math.random() * 6) + 1;
  }
  if (((s as any).picrand ?? 0) === 14) {
    (s as any).sexdvarand = Math.floor(Math.random() * 5) + 0;
  }
  if ((!((s as any).sexdvarand ?? 0))) {
    scene.img(`images/locations/shared/sex/sexdvanadva/minet${((s as any).picrand ?? 0)}.jpg`);
    scene.text('The two of you suck their cocks.');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
  } else {
    scene.img(`images/locations/shared/sex/sexdvanadva/vag${((s as any).picrand ?? 0)}.jpg`);
    scene.text('While she enjoys a stiff cock in her pussy, you are not left wanting for attention.');
    qspCall(s, 'arousal', 'erotic', 10, 'sub');
    if (((s as any).sexdvarand ?? 0) === 2) {
      scene.img(`images/locations/shared/sex/sexdvanadva/uvag${((s as any).picrand ?? 0)}.jpg`);
      scene.text('He thrusts into you. His cock sends waves of pleasure over your body.');
      qspCall(s, 'arousal', 'vaginal', 10, 'sub');
    } else {
      scene.img(`images/locations/shared/sex/sexdvanadva/anal${((s as any).picrand ?? 0)}.jpg`);
      scene.text('You enjoy the sight of a cock in her ass, but you are mostly too distracted by the cock in your mouth.');
      qspCall(s, 'arousal', 'bj', 10, 'sub');
      if (((s as any).sexdvarand ?? 0) === 4) {
        scene.img(`images/locations/shared/sex/sexdvanadva/uanal${((s as any).picrand ?? 0)}.jpg`);
        scene.text('When he enters your backdoor, it hurts a little, but soon, the pain goes away. Pleasure takes its place, as he slowly moves back and forth, stretching your hole.');
        qspCall(s, 'arousal', 'anal', 10, 'sub');
      } else {
        scene.img(`images/locations/shared/sex/sexdvanadva/udp${((s as any).picrand ?? 0)}.jpg`);
        scene.text('Both men enter you at the same time. The feeling is almost too intense. Your moans of pleasure urge them on.');
        qspCall(s, 'arousal', 'vaginal', 10, 'sub');
        qspCall(s, 'arousal', 'anal', (-10), 'sub');
        if (((s as any).sexdvarand ?? 0) === 6) {
          scene.img(`images/locations/shared/sex/sexdvanadva/dp${((s as any).picrand ?? 0)}.jpg`);
          scene.text('She has both men fucking her. It makes you feel a little envious as you watch, playing with yourself.');
          qspCall(s, 'arousal', 'clit_finger', 10, 'sub', 'masturbate');
        }
        qspCall(s, 'stat', '');
        if (((s as any).sexvar ?? 0) < 3) {
          // TODO-QSP: act 'More': xgt 'sexdvanadva', 'var'
        }
        if (((s as any).sexvar ?? 0) >= 3) {
          // TODO-QSP: act 'Finish': gt 'sexdvanadva', 'end'
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'var':
      enterVar(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const sexdvanadva: LocationDef = {
  name: 'sexdvanadva',
  title: 'The two of you suck their cocks.',
  region: 'other',
  enter: enter,
};
