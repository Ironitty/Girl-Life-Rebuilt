import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSauna(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_lake_nude', 'sauna');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/sauna.jpg');
  scene.text('You walk up the small trail from the beach to the sauna. They say it was built for the tourists, but you wonder why they put it on a secluded beach where tourists can\'t possibly find it. Either way, you and many others are glad they built it. It\'s well built inside and out with three sections - the mens section, the women\'s section and a co-ed section. You need swimwear to use the sauna, but some people use it naked.');
  if (((s as any).PSwim ?? 0) === 1  &&  ((s as any).temper ?? 0) < 15) {
    scene.text('It is too cold to go back to the beach in your swimwear. You need to dress first.');
  } else {
    if (((s as any).clothingworntype ?? 0) !== 'nude'  ||  (!((s as any).sauna_stripped ?? 0))) {
      scene.actions([
        { label: 'Go back to the beach', goto: ['pav_lake_nude', ''] },
      ]);
    } else {
      qspCall(s, 'willpower', 'exhib', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go back to the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go to the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['pav_lake_nude', ''] },
        ]);
      }
    }
  }
  if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
    scene.actions([
      { label: 'Use changing room', goto: ['changingroom', ''] },
    ]);
  } else {
    scene.text('You should buy some swimwear if you intend on spending time at the beach.');
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (((s as any).pcs_inhib ?? 0) > 25  ||  (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  ((s as any).pcs_horny ?? 0) >= 60))) {
    scene.actions([
      { label: 'Take your clothes off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).sauna_stripped = 1;
    if ((!((s as any).PSwim ?? 0))) {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.text('You strip out of your clothes, folding them neatly and placing them in one of the open shelves.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).sauna_stripped ?? 0) === 1) {
      scene.actions([
        { label: 'Put your clothes back on', handler: (st: GameState) => {
    (s as any).sauna_stripped = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'restore', 'swim');
    qspCall(s, 'stat', '');
    scene.text('You put your clothes back on.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PSwim ?? 0))) {
    scene.text('You need to undress or wear a swimsuit to enter the sauna.');
  } else {
    scene.actions([
      { label: 'Go to the women\'s section', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 22) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
      scene.text('It appears to be empty at the moment.');
    } else {
      (s as any).saunarand = Math.floor(Math.random() * 5) + 1;
      if (((s as any).saunarand ?? 0) === 4) {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/womennude.jpg');
        scene.text('You find several other girls inside who are completely naked.');
      } else {
        if (((s as any).saunarand ?? 0) > 4) {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/womenbikini.jpg');
          scene.text('You find several other girls inside using the sauna while wearing their bikinis.');
        } else {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
          scene.text('It appears to be empty at the moment.');
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
      { label: 'Use the sauna', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).sauna_daystart = ((s as any).daystart ?? 0);
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (3);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunabikini.jpg');
      if (((s as any).pcs_inhib ?? 0) < 40) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunanude.jpg');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
      }
    }
    qspCall(s, 'stat', '');
    scene.text('You spend 30 minutes relaxing in the sauna.');
    if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
      qspCall(s, 'pav_lake_nude', 'ice_plunge');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
    ]);
  } },
      { label: 'Go to the mens section', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
    scene.text('It appears to be empty at the moment.');
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    if (((s as any).saunarand ?? 0) < 4  ||  ((s as any).PSwim ?? 0) === 1) {
      (s as any).will_cost = 3;
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Use the sauna [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use the sauna [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).sauna_daystart = ((s as any).daystart ?? 0);
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (3);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunabikini.jpg');
      if (((s as any).pcs_inhib ?? 0) < 40) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunanude.jpg');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
      }
    }
    scene.text('You spend 30 minutes relaxing in the sauna.');
    if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
      qspCall(s, 'pav_lake_nude', 'ice_plunge');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
      { label: 'Go to the co-ed section', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 22) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
      scene.text('It appears to be empty at the moment.');
    } else {
      (s as any).saunarand = Math.floor(Math.random() * 5) + 1;
      if (((s as any).saunarand ?? 0) === 4) {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/coednude.jpg');
        scene.text('You find several other people in here, both men and women. All of them are completely naked.');
      } else {
        if (((s as any).saunarand ?? 0) > 4) {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/coedtowel.jpg');
          scene.text('You find several other people in here, both men and women. Some are wearing their swimwear while others are wearing towels.');
        } else {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
          scene.text('It appears to be empty at the moment.');
        }
      }
    }
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    if (((s as any).saunarand ?? 0) < 4  ||  ((s as any).PSwim ?? 0) === 1) {
      (s as any).will_cost = 0;
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Use the sauna [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use the sauna [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).sauna_daystart = ((s as any).daystart ?? 0);
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (3);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunabikini.jpg');
      if (((s as any).pcs_inhib ?? 0) < 40) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunanude.jpg');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
      }
    }
    qspCall(s, 'stat', '');
    scene.text('You spend 30 minutes relaxing in the sauna.');
    if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
      qspCall(s, 'pav_lake_nude', 'ice_plunge');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterIcePlunge(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take an ice plunge', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).pcs_sweat ?? 0) > 10) {
      (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/icedipbikini.jpg');
      if (((s as any).pcs_inhib ?? 0) < 50) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/icedipnude.jpg');
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'stat', '');
    scene.text('You exit the sauna and the cold air nips at your body as you rush down to the edge of the lake where the ice is broken and a ladder has been put in place. You take the plunge into the ice cold water. The sudden change from the hot sauna to the freezing waters of the lake is refreshing, if a little sudden. After a few minutes, you climb out of the water.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Go back to the sauna', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sauna':
      enterSauna(s, scene);
      break;
    case 'ice_plunge':
      enterIcePlunge(s, scene);
      break;
    default:
      enterSauna(s, scene);
      break;
  }
}

export const pav_lake_nude: LocationDef = {
  name: 'pav_lake_nude',
  title: '<center><h4>Secluded beach</h4></center>',
  region: 'pavlovsk',
  locationType: 'secluded',
  locclass: 'beach',
  description: ['You walk up the small trail from the beach to the sauna. They say it was built for the tourists, but you wonder why they put it on a secluded beach where tourists can\'t possibly find it. Either way, you and many others are glad they built it. It\'s well built inside and out with three sections - the mens section, the women\'s section and a co-ed section. You need swimwear to use the sauna, but some people use it naked.'],
  enter: enter,
};
