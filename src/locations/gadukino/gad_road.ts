import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_road', 'start');
  qspCall(s, 'schedule', 'A60');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Forest road</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/gadroad.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadroad_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/gadukino/village/gadroad_winter.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadroad_winter_night.jpg');
    }
  }
  scene.text('A dirt road leading to the outskirts of Gadukino. You are surrounded by grainfields where the grains appear, reaching all the way to the heavens.');
  // TODO-QSP: dynamic text: The forest ' + iif(gad_meadow_found = 1, 'and meadow ', ') + 'can be found furth...
  scene.text('The forest \' + iif(gad_meadow_found = 1, \'and meadow \', \') + \'can be found further down the road, away from the village.');
  if ((Math.floor(Math.random() * 10) + 0) === 0  &&  ((s as any).GadBoy ?? 0)?.['first_drink'] > 0  &&  ((s as any).GadBoy ?? 0)?.['mitka_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 20  &&  (((s as any).npc_QW ?? 0)?.['A63'] < 11  ||  ((s as any).GadBoy ?? 0)?.['river_gang'] > 2)) {
    scene.text('<a href="exec:gt \'mitka\'">Mitka</a> is smoking near the road, he smiles at you as you walk by.');
  } else {
    scene.text('<a href="exec:gt \'gad_road\', \'drinking_invite\'">Mitka, Kolyamba, and Vasyan</a> are walking down the road towards the woods, drinking moonshine and talking loudly.');
    if (((s as any).GadBoy ?? 0)?.['first_drink'] === 2  &&  ((s as any).hour ?? 0) > 20  &&  ((s as any).alko ?? 0) < 10  &&  ((s as any).GadBoy ?? 0)?.['drinkday'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).locat ?? 0)?.['A60_loc'] === 'mitkabuh_group') {
        if (((s as any).MiraVars ?? 0)?.['QW'] >= 16  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
          scene.text('You can go drink with Mira, Mitka, Kolyamba and Vasyan at their <a href="exec:gt \'mitkabuh_group\'">trailer</a> hidden in the woods.');
        } else {
          scene.text('You can go drink with Mira, Mitka, Kolyamba and Vasyan at their <a href="exec:gt \'mitkabuh\'">trailer</a> hidden in the woods.');
        }
      } else {
        scene.text('You can go drink with Mitka, Kolyamba and Vasyan at their <a href="exec:gt \'mitkabuh\'">trailer</a> hidden in the woods.');
      }
    }
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      if ((!((s as any).PSport ?? 0))) {
        scene.text('You could go for a run here if you were wearing sports clothes and shoes.');
      } else {
        if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
          scene.actions([
            { label: 'Go for a run (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 20) {
            scene.actions([
              { label: 'Go for a run (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are so thirsty you cannot face...
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go for a run (1:00)', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier1', 60, 'run');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/gadukino/village/gadbeg4.jpg');
    } else {
      scene.img('images/locations/gadukino/village/gadbeg3.jpg');
      if (((s as any).strenbuf ?? 0) >= ((s as any).pcs_mass ?? 0)?.['body']) {
        scene.img('images/locations/gadukino/village/gadbeg1.jpg');
      } else {
        scene.img('images/locations/gadukino/village/gadbeg2.jpg');
      }
    }
    scene.text('You run for an hour enjoying the scenery.');
    scene.actions([
      { label: 'Finish', goto: ['gad_road', 'start'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Go for a run (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are so hungry you cannot face ...
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Walk to Gadukino (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gadukino', ''] },
      { label: 'Walk down to the river (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_river', 'start'] },
      { label: 'Walk to the fields (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_field', 'field'] },
      { label: 'Walk into the woods (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_edge'] },
      { label: 'Walk to the bus station (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bus', 'gadukino'] },
    ]);
  }
  scene.build();
}

export const gad_road: LocationDef = {
  name: 'gad_road',
  title: '<br>You are too exhausted to do this. Recover your stamina before trying to go for a run.',
  region: 'gadukino',
  locationType: 'secluded',
  description: ['A dirt road leading to the outskirts of Gadukino. You are surrounded by grainfields where the grains appear, reaching all the way to the heavens.'],
  enter: enter,
};
