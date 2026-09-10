import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'dress');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Fetish dresses - for all your personal needs</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, Clothingstock mod 2
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_erotomaniac', 'start'] },
  ]);
  scene.build();
}

function enterOutfits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'outfits');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Fetish outfits - for all your personal needs</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 2, (Clothingstock / 2) mod 2
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_erotomaniac', 'start'] },
  ]);
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'strip');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Stripper clothing - for work or the bedroom</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto_strip');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_erotomaniac', 'start'] },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'shoes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Erotomaniac shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_erotomaniac', 'start'] },
  ]);
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'panties');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Erotomaniac panties</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_erotomaniac', 'start'] },
  ]);
  scene.build();
}

function enterBras(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'bras');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Erotomaniac bras</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'eroto');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_erotomaniac', 'start'] },
  ]);
  scene.build();
}

function enterBasement(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'basement');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Basement</b></center>');
  scene.img('images/locations/city/redlight/erotomaniac/gloryholebooths1.jpg');
  scene.text('There are several booths here for viewing adult films. They offer full privacy and are conveniently adjacent to each other.');
  scene.text('The shop toilets are also located down here.');
  if (((s as any).hour ?? 0) >= 11  ||  ((s as any).hour ?? 0) < 3) {
    scene.actions([
      { label: 'Enter a free booth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'peepbooth'] },
    ]);
  } else {
    scene.text('The booths are closed until 11am.');
  }
  if (((s as any).masharab ?? 0) === 1) {
    // TODO-QSP: act 'Go to Masha': gt 'masharoom', 'start'
  }
  scene.actions([
    { label: 'Leave the basement', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'start'] },
    { label: 'Enter the bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['shop_erotomaniac', 'toilet'] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_erotomaniac', 'toilet');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/shared/bathroom/publictoilet.jpg');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    // TODO-QSP: act 'Brush your hair': gt 'mirror', 'brush'
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  scene.actions([
    { label: 'Leave', goto: ['shop_erotomaniac', 'basement'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterPeepbooth(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Movie Booth</b></center>');
  scene.img('images/shared/sex/gloryhole/ghbooths.jpg');
  scene.text('The small booth has a TV on the wall, a terminal to choose films and a chair to sit in. There is also two holes in the walls at waist level.');
  if (((s as any).mistressqwest ?? 0) > 0  &&  ((s as any).mistressqwest ?? 0) <= 20) {
    (s as any).GHchance = Math.floor(Math.random() * 5) + 6;
    (s as any).ghnowcheck = ((s as any).ghnow ?? 0);
  } else {
    (s as any).GHchance = Math.floor(Math.random() * 10) + 1;
    (s as any).ghnowcheck = ((s as any).ghnow ?? 0) * 2;
  }
  if (((s as any).ghnow ?? 0) > 0) {
    // TODO-QSP: dynamic text: You served <<ghnow>> cocks on this visit.
    scene.text(`You served ${((s as any).ghnow ?? 0)} cocks on this visit.`);
  }
  if (((s as any).hour ?? 0) >= 11  ||  ((s as any).hour ?? 0) < 3) {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: You insert ' + $func('money', 'string_price', 50) + ' into the terminal and the ...
      scene.text('You insert \' + $func(\'money\', \'string_price\', 50) + \' into the terminal and the TV on the wall starts showing a pornographic film.');
      scene.text('You sit in the chair and watch the film, feeling yourself becoming a little excited.');
      if (((s as any).GHchance ?? 0) >= 10 - ((s as any).ghnowcheck ?? 0)) {
        scene.text('You hear the TV in the next stall turn on.');
        scene.actions([
          { label: 'Stick a finger in the hole (serve a stranger)', handler: (st: GameState) => {
    (s as any).ghnow = ((s as any).ghnow ?? 0) + (1);
    (s as any).ghnow['sexshop_total'] = ((s as any).ghnow['sexshop_total'] ?? 0) + (1);
    if (((s as any).ghnow ?? 0) < 5) {
      qspCall(s, 'money', 'earn', 300, 'cash');
    } else {
      qspCall(s, 'money', 'earn', 150, 'cash');
    }
    scene.img(`images/shared/sex/gloryhole/ghfinger${Math.floor(Math.random() * 5) + 1}.jpg`);
    scene.text('You poke your finger in the hole, letting whoever\'s on the other side know that you\'re ready to serve him.');
    // TODO-QSP: dynamic text: The stranger slips ' + iif(ghnow < 5, $func('money', 'string_price', 300), $func...
    scene.text('The stranger slips \' + iif(ghnow < 5, $func(\'money\', \'string_price\', 300), $func(\'money\', \'string_price\', 150)) +  \' into the hole, followed by his erect cock.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Guy at the gloryhole', Math.floor(Math.random() * 30) + 21);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).stat['gloryhole'] = ((s as any).stat['gloryhole'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    (s as any).ghprand = Math.floor(Math.random() * 36) + 1;
    scene.img(`images/shared/sex/gloryhole/gloryhole${((s as any).ghprand ?? 0)}.jpg`);
    scene.text('You take the cock into your mouth and start enthusiastically sucking it.');
    scene.text('After a few minutes, he stranger\'s cock begins to throb and he cums in your mouth, filling it with a huge amount of thick cum. You swallow it, and once you\'ve licked his cock clean, it disappears back into the hole. You hear the man sighing in satisfaction before he leaves the booth.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'arousal', 'end');
    if (((s as any).mistressqwest ?? 0) > 0) {
      (s as any).mistressqwest = ((s as any).mistressqwest ?? 0) + (1);
      // TODO-QSP: dynamic text: You have sucked <<mistressqwest - 1>> cocks for Mistress.
      scene.text(`You have sucked ${((s as any).mistressqwest ?? 0) - 1} cocks for Mistress.`);
    }
    scene.actions([
      { label: 'Wipe your face', goto: ['shop_erotomaniac', 'peepbooth'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'The film ends', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_erotomaniac', 'peepbooth'] },
        { label: 'Masturbate', handler: (st: GameState) => {
    scene.text('You caress your pussy as you watch the film, enjoying the pleasant sensation between your legs.');
    qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'The film ends', goto: ['shop_erotomaniac', 'peepbooth'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Watch porn [+$func(\'money\', \'get_cost_string\', 50, \'c...]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Leave the booth', goto: ['shop_erotomaniac', 'basement'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dress':
      enterDress(s, scene);
      break;
    case 'outfits':
      enterOutfits(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'shoes':
      enterShoes(s, scene);
      break;
    case 'panties':
      enterPanties(s, scene);
      break;
    case 'bras':
      enterBras(s, scene);
      break;
    case 'basement':
      enterBasement(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'peepbooth':
      enterPeepbooth(s, scene);
      break;
    default:
      enterDress(s, scene);
      break;
  }
}

export const shop_erotomaniac: LocationDef = {
  name: 'shop_erotomaniac',
  title: 'The Erotomaniac',
  region: 'other',
  locationType: 'event',
  locclass: 'changingroom',
  enter: enter,
};
