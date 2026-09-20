import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', 10);
  (s as any).girl = ((s as any).girl ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
  (s as any).picrand = (Math.floor(Math.random() * 2) + 0);
  qspGoto(s, 'podrsex', 'var');
  // TODO-QSP: end
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  (s as any).randhorny = (Math.floor(Math.random() * 51) + 50);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his dick', goto: ['podrsex', 'suck'] },
    { label: 'Let him fuck your pussy', goto: ['podrsex', 'pussy'] },
    { label: 'Let him fuck your ass', goto: ['podrsex', 'ass'] },
    { label: 'Watch him fuck the other girl', goto: ['podrsex', 'voy'] },
  ]);
  scene.build();
}

function enterSuck(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  if (((s as any).sexvar ?? 0) < 0) {
    (s as any).sexstart = 0;
  }
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).pos = 1;
  if ((!((s as any).pdsxbj ?? 0))) {
    (s as any).pdsxbj = 1;
  }
  scene.img(`images/locations/shared/sex/pod/minet${((s as any).picrand ?? '')}.jpg`);
  scene.text('You look the other girl deep in the eyes as the two of you suck the man\'s cock, touching her tongue with yours when you reach around his shaft.');
  scene.text('The two of you then take turns sucking him off while the other licks and sucks on his balls.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= (((s as any).randhorny ?? 0) - ((s as any).trait_vars ?? 0)?.['exhibitionist_exp'])) {
    scene.text('You\'re very close to having a spontaneous orgasm with the guy\'s cock still in your mouth, which the other girl notices.');
    scene.text('She gives you a sweet wink before she takes over, giving you some time to rub your clit furiously.');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate');
    qspCall(s, 'stat', '');
  }
  if (((s as any).sexvar ?? 0) === 1) {
    scene.text('<br>The man groans that he will cum soon.');
  }
  if (((s as any).sexvar ?? 0) > 0) {
    qspGoto(s, 'podrsex', 'var');
  } else {
    qspGoto(s, 'podrsex', 'end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  if (((s as any).sexvar ?? 0) < 0) {
    (s as any).sexstart = 0;
  }
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).pos = 2;
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '');
  if ((!((s as any).pdsxsex ?? 0))) {
    (s as any).pdsxsex = 1;
  }
  scene.img(`images/locations/shared/sex/pod/uvag${((s as any).picrand ?? '')}.jpg`);
  scene.text('The man eagerly penetrates your pussy before he thrusts his length inside you over and over, bringing you pleasure.');
  qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= (((s as any).randhorny ?? 0) - ((s as any).trait_vars ?? 0)?.['exhibitionist_exp'])) {
    scene.text('You close your eyes and surrender yourself to the moment, reaching an explosive orgasm without ever touching yourself.');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
  }
  if (((s as any).sexvar ?? 0) === 1) {
    scene.text('<br>The man groans that he will cum soon.');
  }
  if (((s as any).sexvar ?? 0) > 0) {
    qspGoto(s, 'podrsex', 'var');
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAss(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  if (((s as any).sexvar ?? 0) < 0) {
    (s as any).sexstart = 0;
  }
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).pos = 3;
  if ((!((s as any).pdsxanal ?? 0))) {
    (s as any).pdsxanal = 1;
  }
  if (((s as any).picrand ?? 0) === 12) {
    scene.img('images/locations/shared/sex/sexdvanadva/uanal12.jpg');
  } else {
    scene.img(`images/locations/shared/sex/pod/uanal${((s as any).picrand ?? '')}.jpg`);
  }
  scene.text('The man slowly works the tip of his cock inside your ass before he halts so you can get used to the sensation.');
  scene.text('He then starts thrusting his length inside you, fucking you ntensely with little regard for your feelings.');
  qspCall(s, 'arousal', 'anal', 10, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= (((s as any).randhorny ?? 0) - ((s as any).trait_vars ?? 0)?.['exhibitionist_exp'])) {
    scene.text('You close your eyes and surrender yourself to the moment, reaching an explosive orgasm without ever touching yourself.');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'stat', '');
  }
  if (((s as any).sexvar ?? 0) === 1) {
    scene.text('<br>The man groans that he will cum soon.');
  }
  if (((s as any).sexvar ?? 0) > 0) {
    qspGoto(s, 'podrsex', 'var');
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVoy(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  if (((s as any).sexvar ?? 0) < 0) {
    (s as any).sexstart = 0;
  }
  qspCall(s, 'dinsex2', 'stamina_npc');
  if (((s as any).pcs_horny ?? 0) >= (((s as any).randhorny ?? 0) - ((s as any).trait_vars ?? 0)?.['exhibitionist_exp'])) {
    (s as any).orgasm_or = 'custom';
    (s as any).orgasm_txt = 'You have an orgasm.';
    qspCall(s, 'stat', '');
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pos = 4;
    scene.img(`images/locations/shared/sex/pod/vag${((s as any).picrand ?? '')}.jpg`);
    scene.text('While the other girl is enjoying getting her pussy fucked, you find that she\'ll do whatever you want her to do.');
    scene.text('She eagerly licks your pussy when you sit on her face while the guy rams his cock inside her repeatedly.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom', 'group');
    qspCall(s, 'stat', '');
  } else {
    (s as any).pos = 5;
    scene.img(`images/locations/shared/sex/pod/anal${((s as any).picrand ?? '')}.jpg`);
    scene.text('While the other girl is enjoying getting her ass fucked, you find that she\'ll do whatever you want her to do.');
    scene.text('She eagerly licks your pussy when you sit on her face while the guy rams his cock inside her repeatedly.');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian', 'dom', 'group');
    qspCall(s, 'stat', '');
  }
  if (((s as any).sexvar ?? 0) === 1) {
    scene.text('<br>The man groans that he will cum soon.');
  }
  if (((s as any).sexvar ?? 0) > 0) {
    qspGoto(s, 'podrsex', 'var');
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).pdsxbj = 0;
  (s as any).pdsxsex = 0;
  (s as any).pdsxanal = 0;
  (s as any).sexstart = 0;
  if (((s as any).pos ?? 0) === 1) {
    scene.img(`images/locations/shared/sex/pod/cum${((s as any).picrand ?? '')}.jpg`);
    scene.text('The man shoots his load over you and the other girl\'s faces. The two of you giggle and lick his cock clean, kissing each other in the process.');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
  } else {
    if (((s as any).pos ?? 0) === 2) {
      scene.text('The man groans, pumping his seed deep inside your pussy.');
      (s as any).tmp = qspFunc(s, 'pregriskeval', '\'');
      if ((!((s as any).tmp ?? 0))) {
        scene.text('<br>"Oh, shit!" you think, when you feel his cock pumping his load deep inside you. Hopefully you won\'t end up pregnant…');
        qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).tmp ?? 0) > 0) {
          scene.text('<br>You push against him when you feel his cock pumping his load deep inside you. Maybe you\'ll end up pregnant…');
          qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
          qspCall(s, 'arousal', 'end');
        }
      }
    } else {
      if (((s as any).pos ?? 0) === 3) {
        (s as any).spafinloc = 3;
        scene.text('The man groans as he pumps his load deep inside your ass.');
        qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).pos ?? 0) === 4) {
          scene.text('He groans as he fills her pussy with his cum.');
          (s as any).tmp = qspFunc(s, 'pregriskeval', '\'');
          if (((s as any).tmp ?? 0) > 0) {
            scene.text('<br>It\'s exciting to watch another woman being filled with cum. Maybe\'ll she end up pregnant…');
            qspCall(s, 'arousal', 'end');
          } else {
            scene.text('<br>It\'s hot to see another woman being filled with cum. You just hope she\'s on the pill…');
            qspCall(s, 'arousal', 'end');
          }
        } else {
          if (((s as any).pos ?? 0) === 5) {
            scene.text('He groans as he pumps her ass full of cum.');
            qspCall(s, 'arousal', 'end');
          }
        }
      }
    }
  }
  (s as any).pos = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).picrand ?? 0) === 26  ||  ((st as any).picrand ?? 0) === 27  ||  ((st as any).picrand ?? 0) === 29) {
      qspGoto(st, 'office', 'work');
    }
    if (((st as any).picrand ?? 0) >= 30  &&  ((st as any).picrand ?? 0) <= 32) {
      qspGoto(st, 'city_center', '');
    }
    if (((st as any).picrand ?? 0) === 19) {
      qspGoto(st, 'nichLivingroom', '');
    }
    if (((st as any).kazsexdva ?? 0) === 1) {
      (st as any).kazsexdva = 0;
      qspGoto(st, 'kazinosvid', '3');
    }
    dynamicGoto(st, 'sexloc');
  } },
  ]);
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
    case 'suck':
      enterSuck(s, scene);
      break;
    case 'pussy':
      enterPussy(s, scene);
      break;
    case 'ass':
      enterAss(s, scene);
      break;
    case 'voy':
      enterVoy(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const podrsex: LocationDef = {
  name: 'podrsex',
  title: 'You look the other girl deep in the eyes as the two of you s',
  region: 'other',
  enter: enter,
};
