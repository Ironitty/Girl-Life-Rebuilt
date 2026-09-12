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
  scene.text('<center><b>Local Church</b></center>');
  scene.img('images/locations/gadukino/church/church.jpg');
  scene.text('The local church is small and relatively old, it is not in the best shape, but it appears well-loved.');
  // TODO-QSP: dynamic text: The vigil is held on Saturdays at '+func('time', 'get_time_string', 19, 0)+'.
  scene.text('The vigil is held on Saturdays at \'+func(\'time\', \'get_time_string\', 19, 0)+\'.');
  // TODO-QSP: dynamic text: The Divine Liturgy is on Sundays between '+func('time', 'get_time_string', 9, 0)...
  scene.text('The Divine Liturgy is on Sundays between \'+func(\'time\', \'get_time_string\', 9, 0)+\' and \'+func(\'time\', \'get_time_string\', 12, 0)+\'.');
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >=19  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Attend vigil', goto: ['gad_church', 'vigil'] },
    ]);
  } else {
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Attend Divine Liturgy', goto: ['gad_church', 'liturgy'] },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the church', goto: ['gad_church', 'Narthex'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the village square', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['gadukino', ''] },
  ]);
  scene.build();
}

function enterSermon(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 5) +\'.jpg');
  scene.text('The candles are dimmed as the sermon begins. You listen intently to the priest as he preaches the word of God. You study His teachings, feeling enlightened until you reach the end of the sermon.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stand up', goto: ['gad_church', 'Narthex'] },
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
  qspCall(s, 'archetypes', 'faith_gain', 'vigil', 40);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'fame', 'church_reduction', 'village', 1);
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 5) +\'.jpg');
  scene.text('You attend the vigil and reflect on the recent events in your life. The harmonies as the hymns and psalms are sung sweep aside some of the worries in your heart; although you know they will return once you leave this holy place, you still enjoy the rest. The sweet scent of incense tickles your nose.');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to Narthex', goto: ['gad_church', 'Narthex'] },
    { label: 'Stay for the Rite of Mutual Forgiveness', handler: (st: GameState) => {
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    qspCall(s, 'fame', 'church_reduction', 'village', 2);
    scene.img('images/locations/pavlovsk/church/church\'+ rand(9, 10) +\'.jpg');
    scene.text('You decide to stay for the Rite of Mutual Forgiveness and feel much better afterwards.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['gad_church', 'Narthex'] },
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
  qspCall(s, 'archetypes', 'faith_gain', 'liturgy', 60);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'fame', 'church_reduction', 'village', 1);
  }
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'fame', 'church_reduction', 'village', 1);
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/church\'+ rand(1, 8) +\'.jpg');
  scene.text('You join the congregation for the Divine Liturgy. You see mostly older people around, but some people around your age are also present. You participate in the singing, but that\'s about it. Your presence seems to go largely unnoticed, and you have the chance to rest. You feel a lot better.');
  qspCall(s, 'exp_gain', 'vokal', Math.floor(Math.random() * 4) + 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the church', goto: ['gad_church', 'start'] },
  ]);
  scene.build();
}

function enterNarthex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
  scene.text('You enter the church, and the scent of incense and beeswax fills your lungs. Your eyes are drawn past the Narthex into the Nave with its walls covered in lovingly painted icons while a thousand points of light dance in joy throughout God\'s house from the magnificent chandelier that hangs from the ceiling.');
  scene.text('To your left is a counter with many candles, icons and prayer books, a small jar resting next to it with a few rubles and donations for taking a candle.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the church', goto: ['gad_church', 'start'] },
    { label: 'Light a candle', goto: ['gad_church', 'candle'] },
    { label: 'Donate for a candle [+$func(\'money\', \'get_cost_string\', 10, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 10, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['gad_church', 'candle1'] }]);
    }
  } },
    { label: 'Pray', goto: ['gad_church', 'pray'] },
  ]);
  scene.build();
}

function enterCandle(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'fame', 'church_reduction', 'village', 1);
  scene.img('images/locations/pavlovsk/church/ch_candle.jpg');
  scene.text('You approach the counter and take one of the candles, lighting it without giving a donation.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to Narthex', goto: ['gad_church', 'Narthex'] },
  ]);
  scene.build();
}

function enterCandle1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
  qspCall(s, 'money', 'pay', 10, 'cash');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'fame', 'church_reduction', 'village', 1);
  scene.img('images/locations/pavlovsk/church/ch_candle.jpg');
  // TODO-QSP: dynamic text: You approach the counter and put ' + $func('money', 'string_price', 10) + ' in t...
  scene.text('You approach the counter and put \' + $func(\'money\', \'string_price\', 10) + \' in the jar for a candle. Then, you take one of the candles and light it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to Narthex', goto: ['gad_church', 'Narthex'] },
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
    qspCall(s, 'fame', 'gad', 'sex', 2);
    qspCall(s, 'archetypes', 'gain', 'bimbo', 'tiny', 'Flashing in church', 1);
    (s as any).pcs_faith = Math.max(0, ((s as any).pcs_faith ?? 0) - 15);
    // TODO-QSP: $flash_text[0] = 'While you''re praying, you get a devious idea. With a sly smile, you expose your a...
    qspCall(s, 'flash', 'butt', 'indoors', 2, 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to Narthex', goto: ['gad_church', 'Narthex'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Pray', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'fame', 'church_reduction', 'village', 1);
    qspCall(s, 'archetypes', 'faith_gain', 'pray', 10);
    if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'fame', 'church_reduction', 'village', 1);
    }
    scene.img('images/locations/pavlovsk/church/ch_praying.jpg');
    if (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) < 30) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
      scene.text('You decide to pray for a while. You\'re not overly religious, but the peace and quiet give you the time to think.');
    } else {
      if (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) >= 30  &&  ((s as any).church_moral ?? 0) < 60) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        qspCall(s, 'mood', 'raise', 'small');
        (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        scene.text('You decide to pray for a while. While you don\'t consider yourself deeply religious, you feel a solid connection to God when you look at the icons around you. You allow yourself to look deeply into your soul as you contemplate your life\'s direction.');
      } else {
        if (((s as any).hour ?? 0) >6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).church_moral ?? 0) >= 60) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (30);
          qspCall(s, 'mood', 'raise', 'medium');
          (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
          (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
          scene.text('You decide to pray. The beauty and glory of being in the body of God overwhelm you, and you lose yourself in prayer. When you finally become aware of your surroundings again, you\'re unsure how much time has passed, but it doesn\'t matter as you are at peace with God and the world.');
        } else {
          if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 6)  &&  ((s as any).church_moral ?? 0) < 30) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (40);
            qspCall(s, 'mood', 'raise', 'medium');
            (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
            (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
            scene.text('The Nave is lit only with small candles, leaving your surroundings in darkness. You start to get a strange vibe you can\'t quite shake. You suddenly get the urge to pray very intensely, and before you know it, an hour has passed, and you feel reborn.');
          } else {
            if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 6)  &&  ((s as any).church_moral ?? 0) >= 30  &&  ((s as any).church_moral ?? 0) < 60) {
              (s as any).pcs_horny = 0;
              qspCall(s, 'mood', 'raise', 'medium');
              (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
              (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
              if (((s as any).drugVars ?? 0)?.['cocaine_system'] > 1) {
                // TODO-QSP: 3 * drugVars['cocaine_system'] = drugVars['cocaine_system'] / 4
              }
              scene.text('The Nave is lit only with small candles, leaving your surroundings in darkness, but you find it comforting. You get the urge to pray very intensely, and before you know it, an hour has passed, and you feel cleansed.');
            } else {
              (s as any).pcs_horny = 0;
              qspCall(s, 'mood', 'raise', 'large');
              (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
              (s as any).minut = ((s as any).minut ?? 0) + 60;
              if (((s as any).drugVars ?? 0)?.['cocaine_system'] > 1) {
                if (!(s as any).drugVars) (s as any).drugVars = {}; (s as any).drugVars['cocaine_system'] = ((s as any).drugVars ?? {})?.['cocaine_system'] / 2;
              }
              scene.text('The Nave is lit only with candles and small presence lights, and the darkness feels very comforting, like being in the womb. You get the urge to pray very intensely, and before you know it, more than an hour has passed, and you feel reborn and cleansed.');
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return to Narthex', goto: ['gad_church', 'Narthex'] },
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
    case 'candle1':
      enterCandle1(s, scene);
      break;
    case 'pray':
      enterPray(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_church: LocationDef = {
  name: 'gad_church',
  title: 'Local Church',
  region: 'gadukino',
  locationType: 'public_indoors',
  enter: enter,
};
