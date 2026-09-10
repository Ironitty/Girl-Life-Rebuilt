import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).week ?? 0) === 7) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 12) {
      }
      if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 7) {
      }
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  qspCall(s, 'themes', 'outdoors');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kazan Cathedral</b></center>');
  scene.img('images/locations/city/residential/church/kazan.jpg');
  scene.text('Kazan Cathedral, also known as the Cathedral of Our Lady of Kazan. It\'s old, but well maintained by the worshipers of the parish.');
  scene.text('');
  // TODO-QSP: dynamic text: You can attend confession every weekday between '+func('time', 'get_time_string'...
  scene.text('You can attend confession every weekday between \'+func(\'time\', \'get_time_string\', 7, 0)+\' and \'+func(\'time\', \'get_time_string\', 9, 0)+\' or \'+func(\'time\', \'get_time_string\', 16, 0)+\' and \'+func(\'time\', \'get_time_string\', 18, 0)+\', and on the weekend between \'+func(\'time\', \'get_time_string\', 16, 0)+\' and \'+func(\'time\', \'get_time_string\', 18, 0)+\'.');
  // TODO-QSP: dynamic text: Vigil is held on Saturdays at '+func('time', 'get_time_string', 19, 0)+'.
  scene.text('Vigil is held on Saturdays at \'+func(\'time\', \'get_time_string\', 19, 0)+\'.');
  // TODO-QSP: dynamic text: The Divine Liturgy is on Sundays between '+func('time', 'get_time_string', 9, 0)...
  scene.text('The Divine Liturgy is on Sundays between \'+func(\'time\', \'get_time_string\', 9, 0)+\' and \'+func(\'time\', \'get_time_string\', 12, 0)+\'.');
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Attend vigil', goto: ['city_church', 'vigil'] },
    ]);
  } else {
    scene.actions([
      { label: 'Attend Divine Liturgy', goto: ['city_church', 'liturgy'] },
      { label: 'Enter the church', goto: ['city_church', 'Narthex'] },
    ]);
  }
  scene.actions([
    { label: 'Return to the city', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterSermon(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 5) +\'.jpg');
  scene.text('The candles dim as the sermon begins. You listen intently to the priest as he preaches the word of god. You study his teachings, feeling enlightened until you reach the end of the sermon.');
  scene.actions([
    { label: 'Stand up', goto: ['city_church', 'Narthex'] },
  ]);
  scene.build();
}

function enterVigil(s: GameState, scene: SceneBuilder): void {
  (s as any).churchday = ((s as any).daystart ?? 0);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).temprand = Math.floor(Math.random() * 6) + 0;
  if (Math.floor(Math.random() * 2) + 0 === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).temprand ?? 0));
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (((s as any).temprand ?? 0));
  }
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'themes', 'indoors');
  (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
  qspCall(s, 'archetypes', 'gain', 'prude', 'small', 'Church vigil', 1);
  qspCall(s, 'archetypes', 'faith_gain', 'vigil', 40);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'fame', 'church_reduction', 'city', 1);
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 5) +\'.jpg');
  scene.text('You attend the vigil and reflect on the recent events in your life. The harmonies as the hymns and psalms are sung sweep aside some of the worries in your heart, although you know they will return once you leave this holy place. You still enjoy the rest of the vigil as the sweet scent of incense tickles your nose.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Return to Narthex', goto: ['city_church', 'Narthex'] },
    { label: 'Stay for the Rite of Mutual Forgiveness', handler: (st: GameState) => {
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    qspCall(s, 'fame', 'church_reduction', 'city', 2);
    scene.img('images/locations/pavlovsk/church/church\'+ rand(9, 10) +\'.jpg');
    scene.text('You decide to stay for the Rite of Mutual Forgiveness and feel much better afterwards.');
    scene.actions([
      { label: 'Return to the Narthex', goto: ['city_church', 'Narthex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLiturgy(s: GameState, scene: SceneBuilder): void {
  (s as any).churchday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
  qspCall(s, 'archetypes', 'gain', 'prude', 'small', 'Divine Liturgy', 1);
  qspCall(s, 'archetypes', 'faith_gain', 'liturgy', 60);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'fame', 'church_reduction', 'city', 1);
  }
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'fame', 'church_reduction', 'city', 1);
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 8) +\'.jpg');
  scene.text('You join the congregation for the Divine Liturgy. You see mostly older people around, but there are some people around your age present as well. You participate in the singing, but that\'s about it. Your presence seems to go largely unnoticed and you have the chance to rest. You feel a lot better.');
  qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 4) + 0);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave the church', goto: ['city_church', 'start'] },
  ]);
  scene.build();
}

function enterNarthex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
  scene.text('You enter the church and the scent of incense and beeswax fills your lungs. Your eyes are drawn past the Narthex into the Nave, its walls covered in lovingly painted icons while a thousand points of light dance in joy throughout God\'s house from the magnificent chandelier that hangs from the ceiling.');
  scene.text('To your left is a counter where a deacon sells candles, icons and prayer books. He smiles and nods at you absently, acknowledging your presence without really seeing you.');
  scene.actions([
    { label: 'Leave the church', goto: ['city_church', 'start'] },
    { label: 'Light a candle', goto: ['city_church', 'candle'] },
    { label: 'Pray', goto: ['city_church', 'pray'] },
  ]);
  scene.build();
}

function enterCandle(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'fame', 'church_reduction', 'city', 1);
  scene.img('images/locations/pavlovsk/church/ch_candle.jpg');
  if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 1  &&  ((s as any).owechurch ?? 0) === 0) {
    qspCall(s, 'money', 'pay', 10, 'cash');
    // TODO-QSP: dynamic text: You approach the deacon and hand over the ' + $func('money', 'string_price', 10)...
    scene.text('You approach the deacon and hand over the \' + $func(\'money\', \'string_price\', 10) + \' for a candle.');
  } else {
    (s as any).owechurch = 0;
    qspCall(s, 'money', 'pay', 10, 'cash');
    qspCall(s, 'mood', 'lower', 'small');
    // TODO-QSP: dynamic text: You approach the deacon and hope that he doesn't recognize you since you couldn'...
    scene.text('You approach the deacon and hope that he doesn\'t recognize you since you couldn\'t pay for your last candle. You give him \' + $func(\'money\', \'string_price\', 10) + \' and he hands you a candle. You hustle away from the counter while guilt gnaws at you.');
    if (qspFunc(s, 'money', 'can_afford', 20, 'cash') === 1  &&  ((s as any).owechurch ?? 0) === 1) {
      (s as any).owechurch = 0;
      qspCall(s, 'money', 'pay', 20, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      // TODO-QSP: dynamic text: You approach the deacon. He is confused when you hand him ' + $func('money', 'st...
      scene.text('You approach the deacon. He is confused when you hand him \' + $func(\'money\', \'string_price\', 20) + \' before smiling in understanding. You feel relieved that the debt is paid.');
    } else {
      (s as any).owechurch = 1;
      scene.text('You approach the deacon and indicate that you would like a candle, but when you look in your purse to pay, you realize that you have no money. The deacon sighs and hands you the candle anyway. You promise yourself to pay double next time.');
    }
    if (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20) {
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
      scene.text('You approach the iconostasis and light your candle. It gives you a nice feeling and you say a prayer while looking at the image of Christ the Savior.');
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.text('You approach the iconostasis and light your candle in the dark church before you start praying. The darkness, combined with the pleasant sight of fire, makes you feel warm inside.');
    }
    scene.actions([
      { label: 'Return to the Narthex', goto: ['city_church', 'Narthex'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'Sermon':
      enterSermon(s, scene);
      break;
    case 'vigil':
      enterVigil(s, scene);
      break;
    case 'liturgy':
      enterLiturgy(s, scene);
      break;
    case 'Narthex':
      enterNarthex(s, scene);
      break;
    case 'candle':
      enterCandle(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const city_church: LocationDef = {
  name: 'city_church',
  title: 'Kazan Cathedral',
  region: 'city',
  locationType: 'public_indoors',
  description: ['Kazan Cathedral, also known as the Cathedral of Our Lady of Kazan. It\'s old, but well maintained by the worshipers of the parish.'],
  enter: enter,
};
