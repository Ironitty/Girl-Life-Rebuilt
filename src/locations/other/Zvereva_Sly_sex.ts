import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSlyRandomSexActs(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A248');
    ((st as any).slyQW = (st as any).slyQW ?? {})['sex_stam'] = ((st as any).slyQW['sex_stam'] ?? 0) + (1);
    (st as any).pursepantytype = ((st as any).pantyworntype ?? 0);
    (st as any).pursepantynumber = ((st as any).pantywornnumber ?? 0);
    (st as any).pursebratype = ((st as any).braworntype ?? 0);
    (st as any).pursebranumber = ((st as any).brawornnumber ?? 0);
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'underwear', 'remove');
    if (((st as any).slyQW ?? 0)?.['Chris_peek_daystart'] !== ((st as any).daystart ?? 0)) {
      ((st as any).slyQW = (st as any).slyQW ?? {})['Chris_peek_daystart'] = ((st as any).daystart ?? 0);
      if (((st as any).slyQW ?? 0)?.['Chris_caught'] < 5) {
        if ((Math.floor(Math.random() * 4) + 1) === 1) {
          ((st as any).slyQW = (st as any).slyQW ?? {})['Chris_caught'] = ((st as any).slyQW['Chris_caught'] ?? 0) + (1);
          ((st as any).slyQW = (st as any).slyQW ?? {})['Chris_peeking'] = 1;
        }
      } else {
        if (((st as any).slyQW ?? 0)?.['Chris_caught'] < 10  &&  ((st as any).christinaQW ?? 0)?.['subpath'] >= 6) {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            ((st as any).slyQW = (st as any).slyQW ?? {})['Chris_caught'] = ((st as any).slyQW['Chris_caught'] ?? 0) + (1);
            ((st as any).slyQW = (st as any).slyQW ?? {})['Chris_peeking'] = 1;
          }
        } else {
          if (((st as any).slyQW ?? 0)?.['Chris_caught'] === 10  &&  ((st as any).christinaQW ?? 0)?.['subpath'] >= 6) {
            if (((st as any).christinaQW ?? 0)?.['subpath'] === 6) {
              ((st as any).christinaQW = (st as any).christinaQW ?? {})['subpath'] = 7;
            }
            ((st as any).slyQW = (st as any).slyQW ?? {})['Chris_peeking'] = 1;
          }
        }
      }
    }
    if (((st as any).slyQW ?? 0)?.['sex_stam'] < 6) {
      while (true) {
        ((st as any).slyQW = (st as any).slyQW ?? {})['sex_act'] = (Math.floor(Math.random() * 8) + 1);
        if (((st as any).slyQW ?? 0)?.['sex_act'] === 1  &&  ((st as any).slyQW ?? 0)?.['foreplay'] !== ((st as any).daystart ?? 0)) {
          ((st as any).slyQW = (st as any).slyQW ?? {})['foreplay'] = ((st as any).daystart ?? 0);
          qspGoto(st, 'Zvereva_Sly_sex', 'hj_1');
        } else {
          if (((st as any).slyQW ?? 0)?.['sex_act'] === 2  &&  ((st as any).slyQW ?? 0)?.['foreplay'] !== ((st as any).daystart ?? 0)) {
            ((st as any).slyQW = (st as any).slyQW ?? {})['foreplay'] = ((st as any).daystart ?? 0);
            qspGoto(st, 'Zvereva_Sly_sex', 'bj_1');
          } else {
            if (((st as any).slyQW ?? 0)?.['sex_act'] === 3  &&  ((st as any).slyQW ?? 0)?.['virgin'] !== 2) {
              ((st as any).slyQW = (st as any).slyQW ?? {})['foreplay'] = ((st as any).daystart ?? 0);
              qspGoto(st, 'Zvereva_Sly_sex', 'vag_cow_1');
            } else {
              if (((st as any).slyQW ?? 0)?.['sex_act'] === 4  &&  ((st as any).slyQW ?? 0)?.['virgin'] !== 2) {
                ((st as any).slyQW = (st as any).slyQW ?? {})['foreplay'] = ((st as any).daystart ?? 0);
                qspGoto(st, 'Zvereva_Sly_sex', 'vag_doggy_1');
              } else {
                if (((st as any).slyQW ?? 0)?.['sex_act'] === 5  &&  ((st as any).slyQW ?? 0)?.['virgin'] !== 2) {
                  ((st as any).slyQW = (st as any).slyQW ?? {})['foreplay'] = ((st as any).daystart ?? 0);
                  qspGoto(st, 'Zvereva_Sly_sex', 'vag_stomach_1');
                } else {
                  if (((st as any).slyQW ?? 0)?.['sex_act'] === 6) {
                    ((st as any).slyQW = (st as any).slyQW ?? {})['foreplay'] = ((st as any).daystart ?? 0);
                    qspGoto(st, 'Zvereva_Sly_sex', 'anal_doggy_1');
                  } else {
                    if (((st as any).slyQW ?? 0)?.['sex_act'] === 7) {
                      ((st as any).slyQW = (st as any).slyQW ?? {})['foreplay'] = ((st as any).daystart ?? 0);
                      qspGoto(st, 'Zvereva_Sly_sex', 'anal_stomach_1');
                    } else {
                      if (((st as any).slyQW ?? 0)?.['sex_act'] === 8) {
                        ((st as any).slyQW = (st as any).slyQW ?? {})['foreplay'] = ((st as any).daystart ?? 0);
                        qspGoto(st, 'Zvereva_Sly_sex', 'anal_piledriver_1');
                      } else {
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      qspGoto(st, 'Zvereva_Sly_sex', 'cum_decide');
    }
  } },
  ]);
  scene.build();
}

function enterSlyVibe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vibratorIN ?? 0) === 1) {
    (s as any).vibratorIN = 0;
    (s as any).vibratorOUT = 1;
    scene.text('You spread your legs and take the vibrator out of your pussy, letting out a slight moan as you do so. You feel somewhat empty now.');
  }
  scene.build();
}

function enterSlyPlug(s: GameState, scene: SceneBuilder): void {
  if (((s as any).analPlugIn ?? 0) === 1) {
    if (((s as any).pcs_ass ?? 0) < 16) {
      (s as any).analPlugOut = 1;
      (s as any).analPlugIn = 0;
      scene.text('Sly pulls the plug out of your tight asshole, making you give an involuntary gasp. You feel empty now.');
    } else {
      (s as any).analPlugOut = 1;
      (s as any).analPlugIn = 0;
      scene.text('Sly pulls the plug out of your asshole, making you give an involuntary moan. You feel empty now.');
    }
  }
  scene.build();
}

function enterChristinaPeek(s: GameState, scene: SceneBuilder): void {
  if (((s as any).slyQW ?? 0)?.['Chris_peeking'] === 1) {
    if (((s as any).slyQW ?? 0)?.['Chris_caught'] <= 5) {
      ((s as any).slyQW = (s as any).slyQW ?? {})['Chris_peeking'] = 2;
      scene.text('You think you hear a moan that didn\'t come from you, but you\'re too busy to figure out where it\'s coming from.');
      scene.text('Sly doesn\'t seem to have heard anything and keeps thrusting into you.');
    } else {
      if (((s as any).slyQW ?? 0)?.['Chris_caught'] < 10) {
        ((s as any).slyQW = (s as any).slyQW ?? {})['Chris_peeking'] = 2;
        scene.text('You hear a moan coming from the doorway and sneak a look in that direction. Christina is peeking around the corner, obviously masturbating to the sight of her brother fucking you.');
        scene.text('Sly seems surprised to see her, but neither him nor her slow down.');
      } else {
        ((s as any).slyQW = (s as any).slyQW ?? {})['Chris_peeking'] = 2;
        scene.text('You hear a loud moan coming from the doorway again. Looking over, you see Christina boldly standing in the doorway naked and rubbing her clit, while watching the two of you fuck.');
        scene.text('Sly no longer seems to be surprised to see her watching and frequently looks in her direction to watch her masturbate.');
      }
    }
  } else {
    if (((s as any).slyQW ?? 0)?.['Chris_peeking'] === 2) {
      if (((s as any).slyQW ?? 0)?.['Chris_caught'] <= 5) {
        scene.text('You hear another moan but you ignore it.');
        scene.text('Sly doesn\'t appear to have noticed anything seems off.');
      } else {
        if (((s as any).slyQW ?? 0)?.['Chris_caught'] < 10) {
          scene.text('You hear more moaning coming from Christina, as she masturbates to the sight of her brother fucking you.');
          scene.text('Sly\'s attention keeps shifting from you to her. He seems unable to decide if he should be looking or not, judging by the war taking place on his face.');
        } else {
          scene.text('Looking towards the doorway, you see Christina has two fingers shoved up inside herself while rubbing her tits with her other hand.');
          scene.text('Sly doesn\'t slow down his thrusts, but by the way he is staring at her and pretty much ignoring you, you imagine he is fucking her in his mind.');
        }
      }
    }
  }
  scene.build();
}

function enterCumDecide(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = (Math.floor(Math.random() * 10) + 1);
  if (((s as any).temp ?? 0) <= 2  &&  ((s as any).slyQW ?? 0)?.['virgin'] !== 2) {
    qspGoto(s, 'Zvereva_Sly_sex', 'vag_doggy_cum_1');
  } else {
    if (((s as any).temp ?? 0) <= 5) {
      qspGoto(s, 'Zvereva_Sly_sex', 'anal_doggy_cum_1');
    } else {
      qspGoto(s, 'Zvereva_Sly_sex', 'swallow_cum_1');
    }
  }
  scene.build();
}

function enterSexEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Clean up', handler: (st: GameState) => {
    ((st as any).slyQW = (st as any).slyQW ?? {})['sex_act'] = 0;
    ((st as any).slyQW = (st as any).slyQW ?? {})['sex_stam'] = 0;
    ((st as any).slyQW = (st as any).slyQW ?? {})['trained'] = ((st as any).slyQW['trained'] ?? 0) + (1);
    ((st as any).slyQW = (st as any).slyQW ?? {})['Chris_peeking'] = 0;
    qspCall(st, 'panties', 'wear', ((st as any).pursepantytype ?? 0), ((st as any).pursepantynumber ?? 0));
    qspCall(st, 'bras', 'wear', ((st as any).pursebratype ?? 0), ((st as any).pursebranumber ?? 0));
    (st as any).pursepantytype = undefined;
    (st as any).pursebratype = undefined;
    qspCall(st, 'clothing', 'wear_last_worn');
    qspCall(st, 'shoes', 'wear', 'last_worn');
    qspCall(st, 'purses', 'wear', 'last_worn');
    qspCall(st, 'coats', 'wear', 'last_worn');
    if (((st as any).analPlugOut ?? 0) === 1) {
      qspCall(st, 'dinsex', 'after_anal');
    }
    if (((st as any).vibratorOUT ?? 0) === 1) {
      (st as any).vibratorIN = 1;
      (st as any).vibratorOUT = 0;
    }
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'Zvereva_house', 'hallw');
  } },
  ]);
  scene.build();
}

function enterHj_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/handjob/hj2.mp4');
  scene.text('You wrap your hand around his dick and start jacking him off slowly ' + ((((s as any).christinaQW ?? 0)?.['fight'] === -1) ? ('while trying not to look him in the eye.') : ('and seductively, while staring into his eyes.')) + '');
  scene.text('He seems to enjoy it for a few minutes before saying "You can speed up a bit now."');
  scene.text('Pumping his cock harder draws a small groan from his lips, but he quickly stops you from continuing.');
  qspCall(s, 'arousal', 'hj', 3, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).slyQW ?? 0)?.['trained'] === 0) {
    scene.actions([
      { label: 'Blowjob', goto: ['Zvereva_Sly_sex', 'bj_1'] },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyRandomSexActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterBj_1(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/sex/blowjob/kotovbj` + (Math.floor(Math.random() * 5) + 110) + '.mp4"></video></center>');
  scene.text('He grabs his dick with one hand, the back of your head with his other hand, and lines the tip of it up with your lips.');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('You try to keep your lips pressed tightly shut, but he forces his way in, trying to fit the whole thing down your throat all at once! Almost immediately you find yourself unable to breathe, gagging and drooling all over his cock.');
  } else {
    scene.text('Submitting to him entirely, you open your mouth as wide as you can while staring straight into his eyes. Without any hesitation, he tries to shove it straight down your throat, making your eyes water as you drool all over his cock trying to breathe.');
  }
  scene.text('He finds a rhythm pumping it down your throat for a while before letting go of your head and pulling it out of your mouth.');
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).slyQW ?? 0)?.['trained'] === 0) {
    ((s as any).slyQW = (s as any).slyQW ?? {})['Chris_caught'] = ((s as any).slyQW['Chris_caught'] ?? 0) + (1);
    ((s as any).slyQW = (s as any).slyQW ?? {})['Chris_peeking'] = 1;
    if (((s as any).slyQW ?? 0)?.['virgin'] !== 2) {
      scene.actions([
        { label: 'Continue', goto: ['Zvereva_Sly_sex', 'vag_cow_1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['Zvereva_Sly_sex', 'anal_doggy_1'] },
      ]);
    }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyRandomSexActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterVagCow_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).slyQW ?? 0)?.['virgin'] === 1) {
    ((s as any).slyQW = (s as any).slyQW ?? {})['virgin'] = 3;
  }
  qspCall(s, 'cum_call', 'precum', 'A248', 1);
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/sex/vag/cowgirl/hard` + (Math.floor(Math.random() * 4) + 1) + '.mp4"></video></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyVibe(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Sitting on his bed, he pulls you onto his lap, lines you up and shoves his cock in hard, without any attempt to be gentle. ' + ((qspFunc(s, 'pcs_has_attr', 'sex_virgin')) ? ('You feel your hymen rip, you\'re no longer a virgin. ') : ('')) + '"Start shaking those hips," he says, laying back with his arms behind his head.');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('You reluctantly move your hips back and forth until he seems to get annoyed at your pace. Grabbing your hips, he takes over, thrusting in and out as he pulls you forward and pushes you back.');
  } else {
    scene.text('You happily start bouncing up and down on his cock. You let out a few loud moans, partly because it feels good, but mostly to make him happy. Eventually he takes over, grabbing your hips and thrusting in and out as he pulls you forward and pushes you back.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChristinaPeek(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('Feeling a bit like a fuck toy, you try to ignore the sloshing sounds coming from your pussy, telling yourself over and over how this isn\'t exciting you.');
  } else {
    scene.text('You lose yourself in the feeling of his cock stretching you out, the sounds of wet slaps filling the room each time your crotch collides with his.');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).slyQW ?? 0)?.['trained'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_Sly_sex', 'vag_doggy_1'] },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyRandomSexActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterVagDoggy_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).slyQW ?? 0)?.['virgin'] === 1) {
    ((s as any).slyQW = (s as any).slyQW ?? {})['virgin'] = 3;
  }
  qspCall(s, 'cum_call', 'precum', 'A248', 1);
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/sex/vag/doggy/kotovsex` + (Math.floor(Math.random() * 4) + 10) + '.mp4"></video></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyVibe(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('He flips you onto your hands and knees and just slams his cock inside without warning. ' + ((qspFunc(s, 'pcs_has_attr', 'sex_virgin')) ? ('You feel your hymen rip, you\'re no longer a virgin. ') : ('')) + 'He presses your face into the bed and, finding his rhythm, pounds away.');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('You grunt into the blankets with each thrust, annoyed at how your body reacts to the unwanted stimulus. Even with your face smashed into the blankets, you can hear the wet sounds your pussy makes as he plunges in and out of you.');
  } else {
    scene.text('You reach behind with both hands and spread yourself wide, to give him easier access. Even with your face smashed into the blankets, you can hear the wet sounds your pussy makes as he plunges in and out of you.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChristinaPeek(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('He spanks your ass several times while fucking you, leaving red handmarks all over your asscheeks. The rough treatment has you leaking like crazy, running down your thighs and onto the bed below.');
  qspCall(s, 'pain', '2', 'asscheeks', 'spank');
  qspCall(s, 'arousal', 'foreplay', (-5));
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).slyQW ?? 0)?.['trained'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_Sly_sex', 'vag_stomach_1'] },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyRandomSexActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterVagStomach_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).slyQW ?? 0)?.['virgin'] === 1) {
    ((s as any).slyQW = (s as any).slyQW ?? {})['virgin'] = 3;
  }
  qspCall(s, 'cum_call', 'precum', 'A248', 1);
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/sex/vag/facedown/kotovsex` + (Math.floor(Math.random() * 6) + 40) + '.mp4"></video></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyVibe(s, scene); (s as any).locArgs = __savedLocArgs; }
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.text('Sly pushes you to your stomach and pushes his way inside. ' + ((qspFunc(s, 'pcs_has_attr', 'sex_virgin')) ? ('You feel your hymen rip, you\'re no longer a virgin. ') : ('')) + 'He starts fucking you hard, giving you no chance to adjust to the speed of his thrusts.');
    scene.text('As you think he\'s going to ease up, instead the pace picks up and Sly is now violently thrusting into you. The pain is making you teary-eyed as you\'re not able to handle the pounding.');
  } else {
    if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
      scene.text('"W-Wait…" you manage to yell out before as he grabs hold of the back of your head pushes you down onto your stomach, facefirst into the bed. "I-I…" You take too long to utter a word as he enters you without pardon. ' + ((qspFunc(s, 'pcs_has_attr', 'sex_virgin')) ? ('You feel your hymen rip, you\'re no longer a virgin, as ') : ('')) + 'Sly plunges deep into your pussy, leaving you barely able to keep in control of yourself.');
    } else {
      scene.text('He grabs hold of you and throws you on the bed with ease. You try to squirm into a more pleasant position, but he\'s got you firmly held on your stomach with your face down, not letting you move an inch in any direction.');
      scene.text('Without any hesitation, his cock plunges inside of you. ' + ((qspFunc(s, 'pcs_has_attr', 'sex_virgin')) ? ('You feel your hymen rip, you\'re no longer a virgin. ') : ('')) + 'You let out a little screech, to let him know that he\'s hurting you, but he\'s not easing up as he continues to furiously thrust without any consideration.');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChristinaPeek(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('He smacks your ass a bit, then pulls on your hair as he pumps his cock in and out of you. Every time he does, you squeal out and tighten down on his dick. He seems to enjoy the feeling, as he does it on and off for several minutes.');
  qspCall(s, 'pain', '2', 'asscheeks', 'spank');
  qspCall(s, 'pain', '2', 'hair', 'pull');
  qspCall(s, 'arousal', 'foreplay', (-5));
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).slyQW ?? 0)?.['trained'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_Sly_sex', 'anal_doggy_1'] },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyRandomSexActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterAnalDoggy_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/doggy/kotovsexanal11.mp4');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyPlug(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('Sly forces you on your hands and knees as he gets in position behind you, pushing his cock inside your ass. Within seconds he\'s pounding you, disregarding your shrieks and even slapping your buttcheeks as your ass is getting stretched out.');
  } else {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('"Get down on your hands and knees," he orders you. You quickly comply and even tease him a little as you wiggle your ass in front of him. He gives your ass a few slaps, grabs his cock and enters you. Not expecting him to fuck you in the ass, at first you gasp, but as he picks up his pace you start wailing from his firm thrusts.');
    } else {
      scene.text('You present yourself wide for him, awaiting his cock and to give him easier access. To your surprise, instead of Sly fucking your wet pussy, he instead shoves his cock inside your anus and starts plunging in and out of you while giving your asscheeks a few slaps.');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChristinaPeek(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You try to spread your cheeks wider, so it will hurt less, but he\'s pounding you too hard and fast for it to make much difference.');
  qspCall(s, 'pain', '2', 'asscheeks', 'spank');
  qspCall(s, 'arousal', 'foreplay', (-5));
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).slyQW ?? 0)?.['trained'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_Sly_sex', 'anal_stomach_1'] },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyRandomSexActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterAnalStomach_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/facedown/kotovsexanal20.mp4');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyPlug(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('"I\'m going to enjoy this," he grunts as he forces himself on top of you. He scoots forward, holding your head down with one hand while pushing his cock inside of you with his other. Without giving you a chance to adjust, he picks up his pace and before you know it he\'s plowing you.');
  scene.text('Your shrieks are muffled by the blankets on the bed, which your face is smushed into. He seems to enjoy the noise, because he reaches around, underneath you, and starts pinching your nipples. It hurts, and your screams grow even louder.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChristinaPeek(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('You cry for it to stop, but he doesn\'t pay you any attention, using you for as a human fleshlight for quite some time.');
  } else {
    scene.text('You beg for more, and he complies, more for his own pleasure than any need to please you. The humiliation of being treated as a human fleshlight only makes you more aroused.');
  }
  qspCall(s, 'pain', '2', 'nipples', 'pinch');
  qspCall(s, 'arousal', 'foreplay', (-5));
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).slyQW ?? 0)?.['trained'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_Sly_sex', 'anal_piledriver_1'] },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyRandomSexActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterAnalPiledriver_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/piledriver/kotovsexanal36.mp4');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyPlug(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('He pushes you onto your back, grabs your ankles, and pushes them behind your ears. Without hesitation, he plunges in full hilt. "S-Stop! It hurts," you cry out, but he pays no heed. Each time he slams down, he grunts, but draws a shriek out of you.');
  } else {
    scene.text('He pushes you onto your back, grabs your ankles, and pushes them behind your ears. Without hesitation, he plunges in full hilt. "Yes! More," you cry out. Each time he slams down, he grunts, but draws a shriek out of you.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChristinaPeek(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('The sex is hard and fast. You hate it, but your body seems to respond to the pain by turning it into pleasure. Due to the awkward position your body is in, your own juices keeps splashing in your face until you\'re soaked.');
  } else {
    scene.text('The sex is hard and fast. You love it, and your body seems to respond to the pain by turning it into pleasure. Due to the awkward position your body is in, your own juices keeps splashing in your face until you\'re soaked.');
  }
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).slyQW ?? 0)?.['trained'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_Sly_sex', 'cum_decide'] },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSlyRandomSexActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterAnalDoggyCum_1(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/sex/cum/analcreampie/cumanal` + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>');
  scene.text('You suddenly find yourself bent over, his dick in your asshole. You can feel it twitching inside you, and a warmth is spreading. He pulls out, and you feel his cum leaking out.');
  scene.text('"Now clean up and get the fuck out of my room." He starts getting dressed, so you gather your own clothes and leave.');
  qspCall(s, 'cum_call', 'anus', 'A248', 1);
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterVagDoggyCum_1(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/sex/cum/vagcreampie/doggy` + (Math.floor(Math.random() * 3) + 1) + '.mp4"></video></center>');
  scene.text('You suddenly find yourself bent over, his dick shoved in your pussy. You can feel it twitching inside you, and a warmth is spreading. He pulls out, and you feel his cum leaking out.');
  scene.text('"Now clean up and get the fuck out of my room." He starts getting dressed, so you gather your own clothes and leave.');
  qspCall(s, 'cum_call', '', 'A248', 1);
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterSwallowCum_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.img('images/shared/sex/cum/mouth/yuck1.mp4');
    scene.text('Sly sits you up, puts the tip of his cock in your mouth, and says "Swallow it all."');
    scene.text('You give him an angry look, but before you can refuse, he is already pumping his seed into your mouth. You do your best to swallow his hateful seed without spitting it out, but cannot manage to keep the revulsion off your face.');
    scene.text('"Well, that wasn\'t exactly enthusiastic, but we will work on that. Now clean up and get the fuck out of my room." He starts getting dressed, so you gather your own clothes and gladly leave.');
  } else {
    scene.img('images/shared/sex/cum/mouth/swallow3.mp4');
    scene.text('Sly sits you up, shoves his cock down your throat, and starts pumping his seed out. First he pumps your stomach, then partially pulls out and fills your mouth up too. "Show me you swallow it," he says.');
    scene.text('Dutifully, you open your mouth to show him his cum in your mouth, swallow it, then show him your mouth is empty.');
    scene.text('"Good girl. Now clean up and get the fuck out of my room." He starts getting dressed, so you gather your own clothes and leave.');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', 'A248', 1);
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Sly_random_sex_acts':
      enterSlyRandomSexActs(s, scene);
      break;
    case 'sly_vibe':
      enterSlyVibe(s, scene);
      break;
    case 'sly_plug':
      enterSlyPlug(s, scene);
      break;
    case 'Christina_peek':
      enterChristinaPeek(s, scene);
      break;
    case 'cum_decide':
      enterCumDecide(s, scene);
      break;
    case 'sex_end':
      enterSexEnd(s, scene);
      break;
    case 'hj_1':
      enterHj_1(s, scene);
      break;
    case 'bj_1':
      enterBj_1(s, scene);
      break;
    case 'vag_cow_1':
      enterVagCow_1(s, scene);
      break;
    case 'vag_doggy_1':
      enterVagDoggy_1(s, scene);
      break;
    case 'vag_stomach_1':
      enterVagStomach_1(s, scene);
      break;
    case 'anal_doggy_1':
      enterAnalDoggy_1(s, scene);
      break;
    case 'anal_stomach_1':
      enterAnalStomach_1(s, scene);
      break;
    case 'anal_piledriver_1':
      enterAnalPiledriver_1(s, scene);
      break;
    case 'anal_doggy_cum_1':
      enterAnalDoggyCum_1(s, scene);
      break;
    case 'vag_doggy_cum_1':
      enterVagDoggyCum_1(s, scene);
      break;
    case 'swallow_cum_1':
      enterSwallowCum_1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Zvereva_Sly_sex: LocationDef = {
  name: 'Zvereva_Sly_sex',
  title: 'You spread your legs and take the vibrator out of your pussy',
  region: 'other',
  enter: enter,
};
