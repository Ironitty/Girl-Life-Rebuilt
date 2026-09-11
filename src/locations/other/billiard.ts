import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterRandwin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_pool ?? 0) < 10) {
    (s as any).billwin = Math.floor(Math.random() * 11) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 10  &&  ((s as any).pcs_pool ?? 0) < 20) {
    (s as any).billwin = Math.floor(Math.random() * 13) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 20  &&  ((s as any).pcs_pool ?? 0) < 30) {
    (s as any).billwin = Math.floor(Math.random() * 15) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 30  &&  ((s as any).pcs_pool ?? 0) < 40) {
    (s as any).billwin = Math.floor(Math.random() * 17) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 40  &&  ((s as any).pcs_pool ?? 0) < 50) {
    (s as any).billwin = Math.floor(Math.random() * 19) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 50  &&  ((s as any).pcs_pool ?? 0) < 60) {
    (s as any).billwin = Math.floor(Math.random() * 21) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 60  &&  ((s as any).pcs_pool ?? 0) < 70) {
    (s as any).billwin = Math.floor(Math.random() * 23) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 70  &&  ((s as any).pcs_pool ?? 0) < 80) {
    (s as any).billwin = Math.floor(Math.random() * 25) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 80  &&  ((s as any).pcs_pool ?? 0) < 90) {
    (s as any).billwin = Math.floor(Math.random() * 27) + 0;
  }
  if (((s as any).pcs_pool ?? 0) >= 90) {
    (s as any).billwin = Math.floor(Math.random() * 29) + 0;
  }
  if (((s as any).billwin ?? 0) > 10  &&  (!((s as any).billvar ?? 0))) {
    qspCall(s, 'money', 'earn', 1000, 'cash');
    // TODO-QSP: dynamic text: You won and received ' + $func('money', 'string_profit', 1000) + '.
    scene.text('You won and received \' + $func(\'money\', \'string_profit\', 1000) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['billiard', ''] },
    ]);
  } else {
    if (((s as any).billwin ?? 0) > 10  &&  ((s as any).billvar ?? 0) === 1) {
      scene.img('images/locations/city/citycenter/mall/pool/sex/strapon.jpg');
      scene.text('You win, put your strapon, and look at the guy, "Well bend over, today you\'re my bitch."');
      scene.text('The guy drops his pants and bends over, you peg that butt.');
      qspCall(s, 'arousal', 'anal_strap_give', 10, 'dom');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['billiard', ''] },
      ]);
    } else {
      if (((s as any).billwin ?? 0) > 10  &&  ((s as any).billvar ?? 0) === 2) {
        scene.img('images/locations/city/citycenter/mall/pool/sex/strapon.jpg');
        scene.text('You win, put on your strapon, and look at the guys, "Come on girls panties down and asses up, now I\'m going to fuck this whole harem."');
        scene.text('You fuck them all in turn.');
        qspCall(s, 'arousal', 'anal_strap_give', 10, 'dom');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['billiard', ''] },
        ]);
      } else {
        if (((s as any).billwin ?? 0) > 10  &&  ((s as any).billvar ?? 0) === 3) {
          qspCall(s, 'money', 'earn', 250, 'cash');
          // TODO-QSP: dynamic text: You won and received ' + $func('money', 'string_profit', 250) + '.
          scene.text('You won and received \' + $func(\'money\', \'string_profit\', 250) + \'.');
          scene.actions([
            { label: 'Get_Away', goto: ['billiard', ''] },
          ]);
        } else {
          if (((s as any).billwin ?? 0) <= 10  &&  (!((s as any).billvar ?? 0))) {
            qspCall(s, 'money', 'pay', 1000, 'cash');
            // TODO-QSP: dynamic text: You lost and paid ' + $func('money', 'string_price', 1000) + '.
            scene.text('You lost and paid \' + $func(\'money\', \'string_price\', 1000) + \'.');
            scene.actions([
              { label: 'Leave', goto: ['billiard', ''] },
            ]);
          } else {
            if (((s as any).billwin ?? 0) <= 10  &&  ((s as any).billvar ?? 0) === 1) {
              scene.text('You lose, open those legs.');
              (s as any).picrand = 16;
              scene.actions([
                { label: 'Pay', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex', 'var'
  } },
              ]);
            } else {
              if (((s as any).billwin ?? 0) <= 10  &&  ((s as any).billvar ?? 0) === 2) {
                scene.text('You lose, open those legs.');
                qspCall(s, 'npcgeneratec', '', 0, 'Billiard Player', Math.floor(Math.random() * 23) + 18);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                qspCall(s, 'npcgeneratec', '', 0, 'Billiard Player', Math.floor(Math.random() * 23) + 18);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), '1');
                qspCall(s, 'npcgeneratec', '', 0, 'Billiard Player', Math.floor(Math.random() * 23) + 18);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), '2');
                (s as any).picrand = 12;
                scene.actions([
                  { label: 'Pay', goto: ['paysex', 'var'] },
                ]);
              } else {
                if (((s as any).billwin ?? 0) <= 10  &&  ((s as any).billvar ?? 0) === 3) {
                  qspCall(s, 'money', 'pay', 300, 'cash');
                  // TODO-QSP: dynamic text: You lost and paid ' + $func('money', 'string_price', 300) + '.
                  scene.text('You lost and paid \' + $func(\'money\', \'string_price\', 300) + \'.');
                  scene.actions([
                    { label: 'Leave', goto: ['billiard', ''] },
                  ]);
                } else {
                  qspCall(s, 'money', 'pay', 300, 'cash');
                  // TODO-QSP: dynamic text: You lost and paid ' + $func('money', 'string_price', 300) + '.
                  scene.text('You lost and paid \' + $func(\'money\', \'string_price\', 300) + \'.');
                  scene.actions([
                    { label: 'Leave', goto: ['billiard', ''] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Pool</b></center>');
  scene.img('images/locations/city/citycenter/mall/pool/bil.jpg');
  scene.actions([
    { label: 'Leave', goto: ['billiard', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'randwin':
      enterRandwin(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    default:
      enterRandwin(s, scene);
      break;
  }
}

export const billiard: LocationDef = {
  name: 'billiard',
  title: '<center><b>Pool</b></center>',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
