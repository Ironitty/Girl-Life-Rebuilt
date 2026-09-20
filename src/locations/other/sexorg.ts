import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'sweat', 'add', 10);
  (s as any).picrand = (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  qspGoto(s, 'sexorg', 'var');
  // TODO-QSP: end
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) + (1);
  (s as any).sexorgrand = (Math.floor(Math.random() * 7) + 0);
  if ((!((s as any).sexorgrand ?? 0))) {
    scene.img(`images/locations/city/citycenter/mall/bowling/sex/minet${((s as any).picrand || '')}.jpg`);
    scene.text('You and one of the girls switch back and forth sucking one guy\'s cock for a while, getting off on his moans of pleasure but never pushing him so far that he could actually cum. Every now and then, you both lick his head simultaneously, French kissing while your "victim" watches and enjoys.');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'group');
    qspCall(s, 'arousal', 'kiss', (-10), 'sub', 'group');
  } else {
    if (((s as any).sexorgrand ?? 0) === 1) {
      scene.img(`images/locations/city/citycenter/mall/bowling/sex/vag${((s as any).picrand || '')}.jpg`);
      scene.text('You watch as one of the girls gets her pussy filled from behind by a big cock, listening to her loud moans and idly rubbing your own clit while you wait your turn.');
      qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    } else {
      if (((s as any).sexorgrand ?? 0) === 2) {
        scene.img(`images/locations/city/citycenter/mall/bowling/sex/uvag${((s as any).picrand || '')}.jpg`);
        scene.text('You lie down on your back and almost instantly feel one of the guys\' cocks entering your moist cunt. His movements are fast and rough, and you\'d cry out in ecstasy if it weren\'t for the pussy you are busy licking.');
        qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'group', 'rough');
        qspCall(s, 'arousal', 'cuni_give', (-10), 'sub', 'group');
      } else {
        if (((s as any).sexorgrand ?? 0) === 3) {
          scene.img(`images/locations/city/citycenter/mall/bowling/sex/anal${((s as any).picrand || '')}.jpg`);
          scene.text('You watch one of the girls - you don\'t even know her name - not breaking eye contact with her as she lowers herself onto one of the guys, impaling her tight ass on his hard dick. "You\'d love to take my place, wouldn\'t you?" she asks sweetly, then cries out as her partner loses patience and starts fucking her from below. You don\'t have to answer - the fingers you have buried in your pussy as you watch tell her everything she needs to know.');
          qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
        } else {
          if (((s as any).sexorgrand ?? 0) === 4) {
            scene.img(`images/locations/city/citycenter/mall/bowling/sex/uanal${((s as any).picrand || '')}.jpg`);
            scene.text('You are not as well prepared as you thought you were, and it hurts a little as one of the guys pushes past your sphincter, but soon the pain is forgotten and replaced by a pleasant sense of fullness… and that\'s before he starts really fucking you. You lean into the girl in front of you\'s cunt and enjoy yourself.');
            qspCall(s, 'arousal', 'anal', 10, 'sub', 'group', 'rough');
            qspCall(s, 'arousal', 'cuni_give', (-10), 'sub', 'group');
          } else {
            if (((s as any).sexorgrand ?? 0) === 5) {
              scene.img(`images/locations/city/citycenter/mall/bowling/sex/udp${((s as any).picrand || '')}.jpg`);
              scene.text('At first you are a little reluctant about being double penetrated - the two guys are both pretty well endowed, after all - but in the end, your curiosity and horniness wins over all concerns, and you thoroughly enjoy the feeling of having both your nether holes filled at the same time.');
              qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'group', 'rough');
              qspCall(s, 'arousal', 'anal', 10, 'sub', 'group', 'rough');
              qspCall(s, 'arousal', 'cuni_give', (-10), 'sub', 'group');
            } else {
              scene.img(`images/locations/city/citycenter/mall/bowling/sex/dp${((s as any).picrand || '')}.jpg`);
              scene.text('Her expression of bliss and loud utterances leave no doubt in your mind: having her ass and pussy filled at the same time has sent this girl straight to heaven, and while you watch on in jealousy, you have no other choice than to rub your clit and wait your turn.');
              qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
            }
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).sexvar ?? 0) >= 3) {
    scene.actions([
      { label: 'Let the guys finish.', goto: ['sexorg', 'end'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue the orgy', goto: ['sexorg', 'var'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  if (((s as any).pcs_horny ?? 0) >= 80) {
    (s as any).orgasm_or = 'yes';
  }
  scene.img(`images/locations/city/citycenter/mall/bowling/sex/cum${((s as any).picrand || '')}.jpg`);
  scene.text('The guys put you and the other two girls on your knees in front of them and furiously stroke their dicks into your expectant mouths. You barely even taste the sperm, even though you catch a full spurt of it on your tongue - to you, it marks the end of a thrilling adventure. It\'s not every day that you have an orgy in a bowling center.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'That should about cover your debt - Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'sexloc', 'start');
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
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sexorg: LocationDef = {
  name: 'sexorg',
  title: 'You and one of the girls switch back and forth sucking one g',
  region: 'other',
  enter: enter,
};
