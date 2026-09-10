import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'start'  ||  ((s as any).locArgs?.[0] ?? 0) === '') {
    qspCall(s, 'core_library', 'setloc', 'gad_meadow', 'start');
    qspCall(s, 'miroslava_schedule', '');
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Meadow</h4></center>');
    scene.img(`images/locations/gadukino/meadow/meadow1_${Math.floor(Math.random() * 6) + 0}.jpg`);
    scene.text('A quiet and deserted open field of grass and wildflowers in the forest, well hidden from civilization.');
    scene.text('There are <a href="exec:gt \'gad_meadow\', \'ruins\'">ruins</a> of a long-abandoned house and some <a href="exec: gt \'gad_meadow\', \'fruit_trees\'">fruit trees</a> hinting at the area\'s original purpose.');
    if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
      if ((((s as any).MiraVars ?? 0)?.['meadow'] === 2  ||  ((s as any).MiraVars ?? 0)?.['meadow'] === 5)  &&  ((s as any).MiraVars ?? 0)?.['QW'] === 2  &&  ((s as any).temper ?? 0) >= 12  &&  ((s as any).sunWeather ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['gad_meadow', 'mira_mitka'] }]);
      }
      if ((((s as any).MiraVars ?? 0)?.['meadow'] === 2  ||  ((s as any).MiraVars ?? 0)?.['meadow'] === 5)  &&  ((s as any).daystart ?? 0) >= ((s as any).MiraVars ?? 0)?.['emb_day']  &&  ((s as any).MiraVars ?? 0)?.['QW'] === 33  &&  ((s as any).temper ?? 0) >= 12  &&  ((s as any).sunWeather ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['gad_meadow', 'mira_gang'] }]);
      }
      if (((s as any).npc_QW ?? 0)?.['A63'] > 13  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 0  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 11) {
        scene.actions([{ label: 'Continue', goto: ['gad_meadow', 'mira_lesb_talk1'] }]);
      }
      if (((s as any).npc_QW ?? 0)?.['A63'] > 13  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 1  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 11  &&  (Math.floor(Math.random() * 5) + 1) === 1  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['gad_meadow', 'mira_lesb_talk3'] }]);
      }
      if (((s as any).npc_QW ?? 0)?.['A63'] > 13  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] === 1  &&  ((s as any).MiraVars ?? 0)?.['QW'] > 11) {
        scene.actions([{ label: 'Continue', goto: ['gad_meadow', 'mira_lesb_talk2'] }]);
      }
      if (((s as any).MiraVars ?? 0)?.['had_sex'] === 2  &&  (Math.floor(Math.random() * 5) + 1) > 3  &&  ((s as any).MiraVars ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).npc_rel ?? 0)?.['A60'] >= 15) {
        scene.actions([{ label: 'Continue', goto: ['gad_meadow', 'mira_lesb'] }]);
      }
      if (((s as any).MiraVars ?? 0)?.['meadow'] !== 2  &&  ((s as any).MiraVars ?? 0)?.['meadow'] !== 5) {
        qspCall(s, 'gad_meadow', 'Mira_free_and_here');
      } else {
        (s as any).temp_md = Math.floor(Math.random() * 21) + 0;
        if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 15  &&  ((s as any).temper ?? 0) >= 12  &&  (!((s as any).temp_md ?? 0))) {
          scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'0\'">Mira</a>.');
        } else {
          scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'1\'">Mira with Mitka</a>.');
          if (((s as any).MiraVars ?? 0)?.['QW'] >= 8  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).temp_md ?? 0) === 2) {
            scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'2\'">Mira with Mitka</a>.');
          } else {
            scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'3\'">Mira with Kolyamba</a>.');
            if (((s as any).MiraVars ?? 0)?.['QW'] >= 11  &&  ((s as any).temper ?? 0) >= 10  &&  ((s as any).temp_md ?? 0) === 4) {
              scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'4\'">Mira with Vasyan</a>.');
            } else {
              scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'5\'">Mira with Vasyan</a>.');
              if (((s as any).MiraVars ?? 0)?.['QW'] >= 11  &&  ((s as any).temper ?? 0) >= 12  &&  ((s as any).temp_md ?? 0) === 6) {
                scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'6\'">Mira with Mitka, Vasyan and Kolyamba</a>.');
              } else {
                scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'7\'">Mira with Vasyan and Kolyamba</a>.');
                if (((s as any).MiraVars ?? 0)?.['QW'] >= 30  &&  ((s as any).temper ?? 0) >= 20  &&  ((s as any).temp_md ?? 0) === 8) {
                  scene.text('In the clearing you notice <a href="exec: gt \'gad_meadow\', \'8\'">A bunch of half-naked hillbilly men</a>.');
                } else {
                  scene.text('In a clearing you see <a href="exec: gt \'gad_meadow\', \'9\'">Mira</a>.');
                  qspCall(s, 'gad_meadow', 'Mira_free_and_here');
                }
              }
            }
            if (((s as any).MiraVars ?? 0)?.['meadow'] !== 1) {
              if ((!((s as any).sunWeather ?? 0))) {
                scene.text('You can exercise in your meadow once the weather improves.');
              } else {
                if (((s as any).pcs_stam ?? 0) < 10  ||  ((s as any).pcs_stam ?? 0) < 15  &&  (!(((s as any).mc_inventory ?? 0)?.['book_yoga'] + ((s as any).mc_inventory ?? 0)?.['hula_hoop']))) {
                  scene.text('Your meadow is a perfect place to exercise, but you don\'t have the energy right now.');
                } else {
                  if (((s as any).PSport ?? 0)) {
                    scene.text('Your meadow is a perfect place to exercise.');
                    scene.actions([
                      { label: 'Exercise', goto: ['gad_meadow', 'workout'] },
                    ]);
                  } else {
                    scene.text('Your meadow would be a perfect place to workout if you were wearing exercise clothes');
                    if (((s as any).temper ?? 0) >= 10) {
                      if ((! qspFunc(s, 'miroslava_schedule', 'is_here'))  ||  (((s as any).npc_rel ?? 0)?.['A60'] > 40  &&  ((s as any).npc_known ?? 0)?.['A60'] === 1)  ||  ((s as any).MiraVars ?? 0)?.['had_sex'] === 1) {
                        if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
                          scene.text('Your meadow is a perfect place to exercise. Mira is here, but she wouldn\'t mind if you exercised for a little bit, even if in the nude.');
                        } else {
                          scene.text('Your meadow is a perfect place to exercise. No one is around, so you could probably exercise nude if you wanted.');
                        }
                        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
                        if (((s as any).will_cost ?? 0) > ((s as any).pcs_willpwr ?? 0)) {
                          scene.actions([
                            { label: 'Exercise nude [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                          ]);
                        } else {
                          scene.actions([
                            { label: 'Exercise nude', handler: (st: GameState) => {
    // TODO-QSP: gt 'gad_meadow', 'workout', 'nude'
  } },
                          ]);
                        }
                      }
                    }
                  }
                }
              }
              scene.actions([
                { label: 'Walk back to the forest', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
      (s as any).MiraVars['follower'] = 1;
    }
  }, goto: ['gad_forest', 'forest_edge'] },
              ]);
            }
          }
          if (((s as any).locArgs?.[0] ?? 0) === '4'  ||  ((s as any).locArgs?.[0] ?? 0) === '5') {
            if (((s as any).temper ?? 0) < 12) {
              scene.img('images/characters/gadukino/mira/sex/mirameadowbj5.jpg');
              scene.text('Mira is tied to a tree as Vasyan enthusiastically drives his cock in her mouth. She gags and coughs, but simultaneously, she moves her head farther down his member. After a couple of minutes, Vasyan tilts back his head and, with a blissful roar cums in her mouth…');
              qspCall(s, 'arousal', 'voyeur_sex', 5);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
              ]);
            } else {
              scene.img('images/characters/gadukino/mira/sex/mirameadowbj3.jpg');
              scene.text('They are completely naked, and Mira sticks her ass up in the air as she deepthroats Vasyan. After a few minutes, you see Mira gulp down his sperm without removing her mouth from his cock.');
              qspCall(s, 'arousal', 'voyeur_sex', 5);
              qspCall(s, 'arousal', 'end');
              if (((s as any).temper ?? 0) >= 15  &&  ((s as any).temper ?? 0) < 20) {
                scene.img('images/characters/gadukino/mira/sex/mirameadowbj4.jpg');
                scene.text('They are completely naked, and Mira squeals joyfully as she rides on Vasyan\'s member. Unfortunately, he does not last long and cums all over her butt as soon as he pulls out of her.');
                qspCall(s, 'arousal', 'voyeur_sex', 5);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
                ]);
              } else {
                scene.img('images/characters/gadukino/mira/sex/mirameadowbj6.jpg');
                scene.text('Mira is completely naked and bent over in front of Vasyan. She is really enjoying it as he thrusts into her ass. After a few minutes, he pulls and sprays cum over her back.');
                qspCall(s, 'arousal', 'voyeur_sex', 5);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
                ]);
              }
              scene.actions([
                { label: 'Hide until they leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gad_meadow', 'start'] },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const gad_meadow: LocationDef = {
  name: 'gad_meadow',
  title: '<center><h4>Meadow</h4></center>',
  region: 'gadukino',
  locationType: 'secluded',
  description: ['A quiet and deserted open field of grass and wildflowers in the forest, well hidden from civilization.'],
  enter: enter,
};
