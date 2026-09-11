import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPreSleep2(s: GameState, scene: SceneBuilder): void {
  (s as any).sleepVars['stat_display'] = 0;
  if (((s as any).clo_flag ?? 0)?.['bed'] === 0) {
    (s as any).clo_flag['bed'] = 1;
    qspCall(s, 'outfit', 'backup', 'bed');
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).strip_here = 1;
    }
    qspCall(s, 'clothing', 'strip');
    if (((s as any).sleepVars ?? 0)?.['bedPanty'] === 2) {
      qspCall(s, 'underwear', 'strip');
    }
  }
  scene.actions([{ label: 'Continue', goto: ['pre_sleep', 'prepare_sleep'] }]);
  scene.build();
}

function enterPrepareSleep(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/shared/home/bed.jpg');
  } else {
    scene.img('images/shared/home/bedroom/son.jpg');
  }
  qspCall(s, 'stat', '');
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 1) {
    if (((s as any).alarmVars ?? 0)?.['alarm_holiday'] === 1  &&  ((s as any).kanikuli ?? 0) !== 0  ||  ((((s as any).hour ?? 0) >= ((s as any).alarmVars ?? 0)?.['timerEndH']  &&  (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6))  ||  (((s as any).hour ?? 0) < ((s as any).alarmVars ?? 0)?.['timerEndH']  &&  (((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7)))) {
      // TODO-QSP: dynamic text: You run through your regular nightly routine, setting your alarm for <<func('ala...
      scene.text(`You run through your regular nightly routine, setting your alarm for ${qspFunc(s, 'alarmclock', 'get_weekend_display')}, you undress, and prepare for sleep:`);
    } else {
      // TODO-QSP: dynamic text: You run through your regular nightly routine, setting your alarm for <<func('ala...
      scene.text(`You run through your regular nightly routine, setting your alarm for ${qspFunc(s, 'alarmclock', 'get_week_display')}, you undress, and prepare for sleep:`);
    }
  } else {
    scene.text('You run through your regular nightly routine, not bothering to setting your alarm, you undress, and prepare for sleep:');
  }
  (s as any).pcs_hairbsh = 0;
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).loc ?? 0) !== 'bedrPar'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    (s as any).sleepVars['notathomesleep'] = ((s as any).sleepVars['notathomesleep'] ?? 0) + (1);
  } else {
    (s as any).sleepVars['notathomesleep'] = 0;
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucwalkday ?? 0) <= ((s as any).daystart ?? 0)  &&  ((((s as any).succhungry ?? 0) > ((s as any).succublvl ?? 0)/2 + (Math.floor(Math.random() * 3) + 1))  ||  ((s as any).pcs_willpwr ?? 0) < ((((s as any).succublvl ?? 0) * ((s as any).willpowermax ?? 0)) / 13)  ||  ((s as any).sucpowzeroed ?? 0) >= 3)) {
    qspCall(s, 'succubus', 'sucwalkinginit');
  }
  if (((s as any).analPlugIn ?? 0) === 1  &&  ((s as any).vibratorIN ?? 0) === 1) {
    if (((s as any).sleepVars ?? 0)?.['bedAnal'] === 1  &&  ((s as any).sleepVars ?? 0)?.['bedVibrator'] === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 0;
      (s as any).vibratorIN = 0;
      qspCall(s, 'stat', '');
      scene.text('Before going to bed, you take out your butt plug and vibrator and give it a quick wash.');
    } else {
      if (((s as any).sleepVars ?? 0)?.['bedAnal'] === 0  &&  ((s as any).sleepVars ?? 0)?.['bedVibrator'] === 1) {
        (s as any).vibratorIN = 0;
        qspCall(s, 'stat', '');
        scene.text('Before going to bed, you take out your vibrator and give it a quick wash.');
        scene.text('You decide to leave your butt plug in.');
      } else {
        if (((s as any).sleepVars ?? 0)?.['bedAnal'] === 1  &&  ((s as any).sleepVars ?? 0)?.['bedVibrator'] === 0) {
          (s as any).analPlugIn = 0;
          (s as any).analPlugOut = 0;
          qspCall(s, 'stat', '');
          scene.text('Before going to bed, you take out your butt plug and give it a quick wash.');
          scene.text('You decide to leave your vibrator in.');
        } else {
          scene.text('You decide to leave your butt plug and vibrator in.');
        }
      }
    }
  } else {
    if (((s as any).analPlugIn ?? 0) === 1  &&  (!((s as any).vibratorIN ?? 0))) {
      if (((s as any).sleepVars ?? 0)?.['bedAnal'] === 1) {
        (s as any).analPlugIn = 0;
        (s as any).analPlugOut = 0;
        qspCall(s, 'stat', '');
        scene.text('Before going to bed, you take out your butt plug and give it a quick wash.');
      } else {
        scene.text('You decide to leave your butt plug in.');
      }
    } else {
      if (((s as any).analPlugIn ?? 0) === 0  &&  ((s as any).vibratorIN ?? 0) === 1) {
        if (((s as any).sleepVars ?? 0)?.['bedVibrator'] === 1) {
          (s as any).vibratorIN = 0;
          scene.text('Before going to bed, you take out your vibrator and give it a quick wash.');
        } else {
          scene.text('You decide to leave your vibrator in.');
        }
      }
    }
  }
  if (((s as any).sleepVars ?? 0)?.['bedPanty'] === 1) {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).braworntype ?? 0) === 'none') {
      scene.text('You put on your bra and panties.');
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) === 'none') {
        scene.text('You put on your bra.');
      } else {
        if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== 'none') {
          scene.text('You put on your panties.');
        } else {
          scene.text('You change your bra and panties.');
        }
      }
    }
  } else {
    if (((s as any).sleepVars ?? 0)?.['bedPanty'] === 2) {
      if (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).braworntype ?? 0) !== 'none') {
        scene.text('You remove your bra and panties.');
      } else {
        if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) === 'none') {
          scene.text('You remove your panties.');
        } else {
          if (((s as any).braworntype ?? 0) !== 'none') {
            scene.text('You remove your bra.');
          }
        }
      }
    } else {
      scene.text('You were too tired to worry about your underwear, so for tonight you left it as is.');
    }
  }
  if (((s as any).hairstyle ?? 0) !== '') {
    // TODO-QSP: $hairstyle
  } else {
    scene.text('Your hair is loose and free.');
  }
  if (((s as any).pcs_makeup ?? 0) > ((s as any).cosmetic_tattoo ?? 0) + 1) {
    (s as any).pcs_makeup = 0;
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    qspCall(s, 'body', 'SkinLoss', 'MakeUpSleep');
    scene.text('You went to bed wearing your makeup, which will smear your face as you sleep; your skin will age faster from this!');
  }
  if (((s as any).fat ?? 0) > 5  &&  ((s as any).stringimplant ?? 0) === 1) {
    (s as any).bodyVars['bust_silicone'] = ((s as any).bodyVars['bust_silicone'] ?? 0) + (1);
    (s as any).fat = ((s as any).fat ?? 0) - (5);
  }
  // TODO-QSP: xgt 'pre_sleep', 'mod_sleeptriggers'
  scene.build();
}

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'pre_sleep', 'mod_sleeptriggers');
  // TODO-QSP: xgt 'pre_sleep', 'end'
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Sleep…', handler: (st: GameState) => {
    (s as any).clo_flag['bed'] = 0;
    (s as any).inSleep = 1;
    qspCall(s, 'stat', '');
    qspCall(s, 'mood', 'reset');
  }, goto: ['sleep', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pre_sleep2':
      enterPreSleep2(s, scene);
      break;
    case 'prepare_sleep':
      enterPrepareSleep(s, scene);
      break;
    case 'mod_sleeptriggers':
      enterModSleeptriggers(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterPreSleep2(s, scene);
      break;
  }
}

export const pre_sleep: LocationDef = {
  name: 'pre_sleep',
  title: 'Before going to bed, you take out your butt plug and vibrato',
  region: 'other',
  enter: enter,
};
