import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).week ?? 0) === 7) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 12) {
      }
      if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).week ?? 0) === 6) {
        if (((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 23) {
        }
        if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 7) {
        }
      } else {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
        }
        if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
        }
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
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Attend Divine Liturgy', goto: ['city_church', 'liturgy'] },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the church', goto: ['city_church', 'Narthex'] },
      ]);
    }
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Stand up', goto: ['city_church', 'Narthex'] },
  ]);
  scene.build();
}

function enterVigil(s: GameState, scene: SceneBuilder): void {
  (s as any).churchday = ((s as any).daystart ?? 0);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).temprand = Math.floor(Math.random() * 6) + 0;
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 1  &&  (!((s as any).owechurch ?? 0))) {
    qspCall(s, 'money', 'pay', 10, 'cash');
    // TODO-QSP: dynamic text: You approach the deacon and hand over the ' + $func('money', 'string_price', 10)...
    scene.text('You approach the deacon and hand over the \' + $func(\'money\', \'string_price\', 10) + \' for a candle.');
  } else {
    if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 1  &&  qspFunc(s, 'money', 'can_afford', 20, 'cash') === 0  &&  ((s as any).owechurch ?? 0) === 1) {
      (s as any).owechurch = 0;
      qspCall(s, 'money', 'pay', 10, 'cash');
      qspCall(s, 'mood', 'lower', 'small');
      // TODO-QSP: dynamic text: You approach the deacon and hope that he doesn't recognize you since you couldn'...
      scene.text('You approach the deacon and hope that he doesn\'t recognize you since you couldn\'t pay for your last candle. You give him \' + $func(\'money\', \'string_price\', 10) + \' and he hands you a candle. You hustle away from the counter while guilt gnaws at you.');
    } else {
      if (qspFunc(s, 'money', 'can_afford', 20, 'cash') === 1  &&  ((s as any).owechurch ?? 0) === 1) {
        (s as any).owechurch = 0;
        qspCall(s, 'money', 'pay', 20, 'cash');
        qspCall(s, 'mood', 'raise', 'tiny');
        // TODO-QSP: dynamic text: You approach the deacon. He is confused when you hand him ' + $func('money', 'st...
        scene.text('You approach the deacon. He is confused when you hand him \' + $func(\'money\', \'string_price\', 20) + \' before smiling in understanding. You feel relieved that the debt is paid.');
      } else {
        if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 0) {
          (s as any).owechurch = 1;
          scene.text('You approach the deacon and indicate that you would like a candle, but when you look in your purse to pay, you realize that you have no money. The deacon sighs and hands you the candle anyway. You promise yourself to pay double next time.');
        }
      }
    }
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the Narthex', goto: ['city_church', 'Narthex'] },
  ]);
  scene.build();
}

function enterPray(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/ch_praying.jpg');
  scene.text('You approach the prayer bench and kneel down to pray.');
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    scene.actions([
      { label: 'Be naughty', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'sex', 2);
    qspCall(s, 'archetypes', 'gain', 'bimbo', 'tiny', 'Flashing in church', 1);
    (s as any).pcs_faith = Math.max(0, ((s as any).pcs_faith ?? 0) - 15);
    // TODO-QSP: $flash_text[0] = 'While you''re praying, you get a devious idea. With a sly smile, you expose your a...
    qspCall(s, 'flash', 'butt', 'indoors', 2, 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the Narthex', goto: ['city_church', 'Narthex'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Pray', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'fame', 'church_reduction', 'city', 1);
    qspCall(s, 'archetypes', 'faith_gain', 'pray', 10);
    if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'fame', 'church_reduction', 'city', 1);
    }
    scene.img('images/locations/pavlovsk/church/ch_praying.jpg');
    if (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) < 30) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
      qspCall(s, 'mood', 'raise', 'small');
      (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
      scene.text('You decide to pray for a while. You\'re not overly religious, but the peace and quiet gives you the time to think.');
    } else {
      if (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) >= 30  &&  ((s as any).church_moral ?? 0) < 60) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        qspCall(s, 'mood', 'raise', 'medium');
        (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        scene.text('You decide to pray for a while. While you don\'t consider yourself to be deeply religious, you do feel a strong connection to God when you look at the icons around you. You allow yourself to look deeply into your soul as you contemplate the direction your life is going.');
      } else {
        if (((s as any).hour ?? 0) >6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) >= 60) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (30);
          qspCall(s, 'mood', 'raise', 'medium');
          (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
          (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
          scene.text('You decide to pray. The beauty and glory of being in the body of God overwhelms you and you lose yourself in prayer. You\'re unsure how much time has passed when you finally become aware of your surroundings again, but it doesn\'t matter as you are at peace with God and the world.');
        } else {
          if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 6)  &&  ((s as any).church_moral ?? 0) < 30) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (40);
            qspCall(s, 'mood', 'raise', 'large');
            (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
            (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
            scene.text('The Nave is lit only with small candles, leaving your surroundings in darkness. You start to get a strange vibe, one you can\'t quite shake. You suddenly get the urge to pray very intensely and before you know it, an hour has passed and you feel reborn.');
          } else {
            if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 6)  &&  ((s as any).church_moral ?? 0) >= 30  &&  ((s as any).church_moral ?? 0) < 60) {
              (s as any).pcs_horny = 0;
              qspCall(s, 'mood', 'raise', 'large');
              (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
              (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
              if (((s as any).drugVars ?? 0)?.['cocaine_system'] > 1) {
                if (!(s as any).drugVars) (s as any).drugVars = {}; (s as any).drugVars['cocaine_system'] = 3 * ((s as any).drugVars ?? {})?.['cocaine_system'] / 4;
              }
              scene.text('The Nave is lit only with small candles, leaving your surroundings in darkness, but you find it comforting. You get the urge to pray very intensely and before you know it, an hour has passed and you feel cleansed.');
            } else {
              (s as any).pcs_horny = 0;
              qspCall(s, 'mood', 'raise', 'medium');
              (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
              (s as any).minut = ((s as any).minut ?? 0) + 60;
              if (((s as any).drugVars ?? 0)?.['cocaine_system'] > 1) {
                if (!(s as any).drugVars) (s as any).drugVars = {}; (s as any).drugVars['cocaine_system'] = ((s as any).drugVars ?? {})?.['cocaine_system'] / 2;
              }
              scene.text('The Nave is lit only with candles and small presence lights and the darkness feels very comforting, like being in the womb. You get the urge to pray very intensely and before you know it, more than an hour has passed and you feel reborn and cleansed.');
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to the Narthex', goto: ['city_church', 'Narthex'] },
    ]);
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
    case 'pray':
      enterPray(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_church: LocationDef = {
  name: 'city_church',
  title: 'Kazan Cathedral',
  region: 'city',
  locationType: 'public_indoors',
  enter: enter,
};
