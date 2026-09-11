import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAtticTeens(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  scene.text('You hear some muffled voices and head straight toward a group of teenagers who have gathered here to smoke, chat, and drink beer. There are 7 young people, ranging from 18 to 20 years old. They watch you with interest, waiting to see what you will say.');
  scene.text('You obviously didn\'t expect there to be so many people in the dark. You start to severely chastise them for what they\'re doing—they could start a fire! You ask them to leave immediately and never come back here. The teens look at each other and then laugh.');
  scene.text('You begin to back away, but you can\'t get far. You\'re surrounded on all sides, and they begin to look at you in a disturbing way. You feel uneasy. The teens start to harass you, touching your clothes. One of them, standing behind you, pulls up your blouse, exposing your breasts to the others. Their laughter intensifies, and insults rain down on you from all sides.');
  scene.text('You try to retrieve your clothes, but the teenagers constantly push and pull you in different directions. You beg them to let you go, promising never to come here again. But the teenagers only laugh and have openly pinned you down. Suddenly, you feel someone\'s hands at your pants, pulling sharply to force them down. Another one pulls off your bra and any remaining clothes.');
  scene.text('Now you\'re standing completely naked in front of them. They begin to push you toward the depths of the attic, and only now do you notice a huge old sofa with broken legs. As they force you toward the couch, you try again to calm the teenagers, but they pay no attention. They abruptly push you onto the couch. The teenagers begin to unbutton their jeans. A powerfully built man approaches first, shoves your shoulders down onto your back, unceremoniously spreads your legs, lies on top of you, and abruptly penetrates you.');
  qspCall(s, 'arousal', 'vaginal', 30, 'gangbang');
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/cherdak1.jpg');
    scene.text('He fucks you at a fast and intense pace. After he finishes, a second guy takes his place, and the same thing happens. This continues until all of them have taken turns with you, one by one. And then some want a second turn.');
    qspCall(s, 'arousal', 'vaginal', 30, 'gangbang');
    scene.actions([
      { label: 'Next', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/cherdak0.jpg');
    scene.text('After the last person ejaculates in your mouth, the teens button their pants and leave, laughing loudly and discussing what just happened. You pick up your clothes, get dressed, and slowly walk back to your apartment.');
    qspCall(s, 'arousal', 'vaginal', 30, 'gangbang');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to the apartment', goto: ['korr', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBuildingEntrance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/podezd.jpg');
  scene.text('Entrance to the 5-floor building where you live. The lock on the attic door is broken.');
  if (((s as any).neighborQW ?? 0)?.['stage'] === 0) {
    scene.text('<br>Suddenly, in the stairwell, you encounter a young man climbing up the stairs. He bumps into you and appears noticeably embarrassed.<font color="#1589FF">"I\'m sorry, I didn\'t see you there. You\'ve moved into apartment 69, right?"</font>');
    return;
    scene.actions([
      { label: 'Yes, I live in apartment 69', handler: (st: GameState) => {
    ((s as any).neighborQW ?? {})['stage'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You nod, confirming that you live in apartment 69. The guy looks visibly delighted and says, <font color="#1589FF">"Wonderful. I lived there before Petrovich. He tormented the whole building. By the way, I\'m Timofei, and you are?"</font> ');
    scene.actions([
      { label: '<<$pcs_nickname>>', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <font color="magenta">"My name is <<$pcs_nickname>>,"</font> you say. He nods an...
    scene.text(`<font color="magenta">"My name is ${((s as any).pcs_nickname ?? 0)},"</font> you say. He nods and begins to retrieve the key to open apartment 68. The curious face of an elderly woman appears in the doorway. She points her sharp nose at you and stares curiously. Timofei enters the apartment and says irritably, "Mother, stop hanging around the front door!" before closing the door.`);
    scene.actions([
      { label: 'Continue', goto: ['ETO_building', 'building_entrance'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).neighborQW ?? 0)?.['stage'] > 0  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).neighborQW ?? 0)?.['last_day'] !== ((s as any).daystart ?? 0)) {
      ((s as any).neighborQW ?? {})['rand'] = Math.floor(Math.random() * 101) + 0;
      if (((s as any).neighborQW ?? 0)?.['rand'] >= 70) {
        scene.text('Your neighbor, Timofei, is in the hallway. He\'s smoking a cigarette, flicking the ashes into a jar.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the building', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('<center><b>You need to get dressed.</b></center>');
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'curloc'); } }]);
    } else {
      if (((s as any).sick ?? 0) > 72) {
        scene.text('<center><b>You are too ill to go outside.</b></center>');
        scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'curloc'); } }]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
      }
    }
  } },
    { label: 'Go to the attic', goto: ['ETO_building', 'attic'] },
    { label: 'Apartment 69: Your home', goto: ['korr', ''] },
  ]);
  scene.build();
}

function enterAttic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/cherdak.jpg');
  scene.text('A flight of stairs leads to the roof through the attic. It\'s dark and scary. This is clearly no place for a decent girl.');
  if ((Math.floor(Math.random() * 100) + 1) > 90) {
    scene.text('In the depths of the attic, you hear a group of <a href="exec:gt \'ETO_building\', \'attic_teens\'">teens</a> talking. It seems they don\'t notice you.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hallway', goto: ['ETO_building', 'building_entrance'] },
    { label: 'Go up to the roof', goto: ['ETO_building', 'roof'] },
  ]);
  scene.build();
}

function enterRoof(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).curloc ?? 0), ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/roof.jpg');
  scene.text('The roof of your apartment building.');
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'joint');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Change back into clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['swim'], lastwornclothingnumber['swim']
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
  }, goto: ['ETO_building', 'roof'] },
    ]);
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20) {
    if ((!((s as any).PSwim ?? 0))) {
      if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
        scene.actions([
          { label: 'Change into a bikini', goto: ['changingroom', ''] },
        ]);
      }
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.actions([
        { label: 'Sunbathe (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    if (((s as any).pcs_sweat ?? 0) < 35) {
      qspCall(s, 'sweat', 'add', 5);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/city/residential/apartment/zagar1.jpg');
    if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
      scene.text('You lie down to sunbathe.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['suncream'] > 0) {
        ((s as any).mc_inventory ?? {})['suncream'] = (((s as any).mc_inventory ?? {})['suncream'] ?? 0) - (1);
        (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
        scene.text('You apply sunblock to your body and lie down on the roof to sunbathe.');
      }
    }
    scene.actions([
      { label: 'Get up', goto: ['ETO_building', 'roof'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go down to the attic', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['ETO_building', 'roof'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['ETO_building', 'attic'] }]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'attic_teens':
      enterAtticTeens(s, scene);
      break;
    case 'building_entrance':
      enterBuildingEntrance(s, scene);
      break;
    case 'attic':
      enterAttic(s, scene);
      break;
    case 'roof':
      enterRoof(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const ETO_building: LocationDef = {
  name: 'ETO_building',
  title: 'You need to get dressed.',
  region: 'other',
  locationType: 'secluded',
  enter: enter,
};
