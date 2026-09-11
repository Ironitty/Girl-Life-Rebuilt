import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGuitar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).ml_performance ?? {})['performed_minutes'] = (((s as any).ml_performance ?? {})['performed_minutes'] ?? 0) + (15);
  ((s as any).ml_performance ?? {})['total_time_performed'] = (((s as any).ml_performance ?? {})['total_time_performed'] ?? 0) + (15);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/music/guitarpractice_1.jpg');
  if (((s as any).ml_guitarlesson ?? 0)?.['lessoncount'] === 0  &&  ((s as any).ml_guitar ?? 0)?.['chordbook'] === 1  &&  ((s as any).instrmusic_lvl ?? 0) <= 10) {
    qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'pain', '', 1, 'fingers', 'ache');
    qspCall(s, 'stat', '');
    scene.text('You open the book you got from Jimmy and start to practice the chords and basic techniques on the guitar.');
    scene.text('It goes slowly, your fingers get in the way and start to hurt after a short time because the strings dig into them, but you fight your way through.');
    scene.text('The strings still buzz or don\'t sound right, but in the end you get a feel for how to do it better.');
  } else {
    if (((s as any).ml_guitarlesson ?? 0)?.['lessoncount'] === 0  &&  ((s as any).ml_guitar ?? 0)?.['chordbook'] === 1  &&  ((s as any).instrmusic_lvl ?? 0) > 15  &&  ((s as any).access ?? 0) === 'denied') {
      scene.text('You open the chordbook you got from Jimmy and start to practice, but you feel that you don\'t really improve that much.');
      qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 2) + 1);
    } else {
      if (((s as any).ml_guitarlesson ?? 0)?.['lessoncount'] === 0  &&  ((s as any).ml_guitar ?? 0)?.['chordbook'] === 1  &&  ((s as any).instrmusic ?? 0) > 15  &&  ((s as any).access ?? 0) !== 'denied') {
        scene.img('images/pc/activities/music/onlineguitarlesson.mp4');
        scene.text('You look at the book you got from Jimmy, then decide to turn to the internet for new lessons.');
        qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 3) + 1);
      } else {
        if (((s as any).ml_guitarlesson ?? 0)?.['lessoncount'] > 0  &&  ((s as any).instrmusic_lvl ?? 0) >= 15  &&  ((s as any).access ?? 0) !== 'denied') {
          qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 2) + 2);
          scene.img('images/pc/activities/music/onlineguitarlesson.mp4');
          scene.text('You work through the practices from your guitarlesson then turn to the internet to learn some more new songs.');
        } else {
          scene.text('You pick up you guitar and the lessons from the guitar teacher and start to practice.');
          qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 2) + 2);
        }
      }
    }
  }
  scene.actions([
    { label: 'Finish practice', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
  ]);
  scene.build();
}

function enterVocals(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRehearse(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'tiny');
  ((s as any).ml_performance ?? {})['performed_minutes'] = (((s as any).ml_performance ?? {})['performed_minutes'] ?? 0) + (30);
  ((s as any).ml_performance ?? {})['total_time_performed'] = (((s as any).ml_performance ?? {})['total_time_performed'] ?? 0) + (30);
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/music/guitarpractice_1.jpg');
  scene.text('You run through your set, playing guitar and singing along to work both into a routine.');
  if (((s as any).ml_performance ?? 0)?.['set_quality'] < 25) {
    scene.text('You\'re still at the very beginning, fumbling through chords and missing your cues more often than not.');
  } else {
    if (((s as any).ml_performance ?? 0)?.['set_quality'] < 50) {
      scene.text('It\'s getting better. You have the main parts down and remember most of the lyrics now.');
    } else {
      if (((s as any).ml_performance ?? 0)?.['set_quality'] < 75) {
        scene.text('Not perfect yet, but you can make it through the set with only a few errors and stumbles.');
      } else {
        if (((s as any).ml_performance ?? 0)?.['set_quality'] < 95) {
          scene.text('Almost perfect. You only make the occasional minor mistake or miss a word here and there.');
        } else {
          scene.text('Done and dusted, you have the whole set perfectly memorized and executed.');
        }
      }
    }
  }
  if (((s as any).ml_performance ?? 0)?.['set_quality'] < 85) {
    qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 3) + 1);
    if (((s as any).perform_lvl ?? 0) < 35) {
      qspCall(s, 'exp_gain', 'perform', Math.floor(Math.random() * 3) + 1);
    }
  }
  ((s as any).ml_performance ?? {})['set_quality'] = (((s as any).ml_performance ?? {})['set_quality'] ?? 0) + (((s as any).rand ?? 0)(1, (((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0))/10));
  ((s as any).ml_performance ?? {})['set_lastpracticeday'] = ((s as any).daystart ?? 0);
  scene.actions([
    { label: 'Finish practice', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'guitar':
      enterGuitar(s, scene);
      break;
    case 'vocals':
      enterVocals(s, scene);
      break;
    case 'rehearse':
      enterRehearse(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const music_bedroompractice: LocationDef = {
  name: 'music_bedroompractice',
  title: 'You open the book you got from Jimmy and start to practice t',
  region: 'other',
  enter: enter,
};
