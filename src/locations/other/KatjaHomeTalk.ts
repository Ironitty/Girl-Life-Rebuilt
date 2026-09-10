import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'katja_bedroom');
  qspCall(s, 'vicky_meynold_schedule', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14']} ${((s as any).npc_lastname ?? 0)?.['A14']}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      scene.text('Katja looks calm and stoic.');
    } else {
      scene.text('Katja looks at you with a naughty twinkle in her eyes.');
      if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
        scene.text('Katja looks at you, a faint blush on her cheeks as she smiles at you mischievously.');
      } else {
        scene.text('Katja is blushing fairly obviously and looks at you longingly.');
        scene.text('Katja\'s face is flushed bright red and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another.');
      }
      scene.text('Katja looks at you with a smile.');
    }
    if (((s as any).locat ?? 0)?.['katja'] === 10) {
      scene.text('"The others are meeting up at the beach right now. Come on, let\'s go meet them," she says.');
      scene.actions([
        { label: 'Go to the beach with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_lake', 'school_mates'] },
      ]);
    } else {
      scene.text('"Let\'s go to the disco!" Katja suggests with a smile.');
      if (((s as any).locat ?? 0)?.['katja'] === 9) {
        scene.text('Katja notices how late it is and politely asks you to leave.');
      } else {
        if (((s as any).pcs_sweat ?? 0) >= 20) {
          // TODO-QSP: dynamic text: Katja wrinkles her nose. "<<$pcs_nickname>>, you're all sweaty! Do you want to u...
          scene.text(`Katja wrinkles her nose. "${((s as any).pcs_nickname ?? 0)}, you're all sweaty! Do you want to use my shower?"`);
          scene.actions([
            { label: 'Have a shower', goto: ['katjaEvDin', 'shower'] },
          ]);
        } else {
          if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (((s as any).month ?? 0) > 6  ||  (((s as any).month ?? 0) === 6  &&  ((s as any).day ?? 0) > 15))) {
            scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'katja_uni_tell'] }]);
          } else {
            if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 0  &&  ((s as any).artemQW ?? 0)?.['bf'] === 1) {
              scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'Artem_talk'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'Artem_break_up_talk'] }]);
              if (((s as any).katjaQW ?? 0)?.['QWstage'] === 6  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] >= 3  &&  ((s as any).katjaQW ?? 0)?.['slut'] > 100  &&  ((s as any).katjaQW ?? 0)?.['horny'] > 60  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
                scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'random_park_sex_talk'] }]);
              } else {
                if (((s as any).katjaQW ?? 0)?.['Artem_pussy'] > 0) {
                  scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'first_boy_sex_Artem_follow_up'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'first_boy_sex_follow_up'] }]);
                }
                if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 0  &&  ((s as any).yearstart ?? 0) === 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['marcus_asked'] === 0  &&  (Math.floor(Math.random() * 101) + 50) < ((s as any).min ?? 0)(((s as any).katjaQW ?? 0)?.['horny'], 100)) {
                  scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'Marcus_discussion'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'Marcus_answer_talk'] }]);
                  if (((s as any).katjaQW ?? 0)?.['QWstage'] < 4  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  (((s as any).katjaQW ?? 0)?.['knows_BJ'] + ((s as any).katjaQW ?? 0)?.['knows_sex']) >= 2  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] !== 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
                    scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'sex_with_boy_ask'] }]);
                  } else {
                    scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'sex_with_Artem_ask'] }]);
                    if (((s as any).katjaQW ?? 0)?.['slut'] >= 60  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  (((s as any).katjaQW ?? 0)?.['knows_BJ'] + ((s as any).katjaQW ?? 0)?.['knows_anal']) >= 2  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['anal_quest'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] !== 4  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['anal_sex'] === 0) {
                      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'anal_sex_with_boy_ask'] }]);
                    } else {
                      if (((s as any).min ?? 0)(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 361) + 40)  ||  (((s as any).katjaQW ?? 0)?.['QWstage'] === 2  &&  ((s as any).min ?? 0)(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 121) + 40))  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
                        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  (((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13)  &&  (Math.floor(Math.random() * 7) + 0) ===0  &&  ((s as any).katjaQW ?? 0)?.['Marcus_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['marcus_pussy'] > 0) {
                          (s as any).katjaQW['Marcus_day'] = ((s as any).daystart ?? 0);
                          scene.actions([{ label: 'Continue', goto: ['katjaHomeTalk', 'marcus_kiss'] }]);
                        } else {
                          scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'hornykiss'] }]);
                          scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'tender_kiss'] }]);
                        }
                      } else {
                        if (((s as any).npc_pregtalk ?? 0)?.['A14'] === 0  &&  (((s as any).KatjaConflict ?? 0) === 0  ||  ((s as any).KatjaConflict ?? 0) === 2)  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
                          if (((s as any).kid ?? 0) > 0) {
                            qspCall(s, 'stat', '');
                            (s as any).minut = ((s as any).minut ?? 0) + 5;
                            (s as any).KatjaConflict = 1;
                            (s as any).KatConCheck = ((s as any).daystart ?? 0);
                            scene.text('"You\'re pregnant again?" Her face turns red and her expression is far angrier than you\'ve ever seen her. "After everything, you still didn\'t trust me enough to tell me?" she screams at you. "I thought there was something special between us."');
                            scene.text('Tears begin rolling down her cheeks. "Just leave me alone, I don\'t even want to see you right now."');
                          } else {
                            qspCall(s, 'stat', '');
                            (s as any).minut = ((s as any).minut ?? 0) + 5;
                            (s as any).KatjaConflict = 1;
                            (s as any).KatConCheck = ((s as any).daystart ?? 0);
                            scene.text('"Are you pregnant? Why didn\'t you tell me? I thought we were closer than that. I told you when I got pregnant. I need to think. We\'ll talk later."');
                            (s as any).minut = ((s as any).minut ?? 0) + 5;
                            (s as any).KatjaConflict = 1;
                            (s as any).KatConCheck = ((s as any).daystart ?? 0);
                            scene.text('"Are you pregnant? Why didn\'t you tell me? I thought we were closer than that. I need to think. We\'ll talk later."');
                          }
                        } else {
                          scene.actions([{ label: 'Continue', goto: ['katjaHomeTalk', 'chat'] }]);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          scene.actions([
            { label: 'Leave the room', goto: ['mey_home', 'start'] },
          ]);
        }
      }
      scene.actions([
        { label: 'Go to the disco [+$func(\'money\', \'get_cost_string\', 25)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 25) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 25);
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.actions([{ label: 'Continue', goto: ['pav_disco', ''] }]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

export const KatjaHomeTalk: LocationDef = {
  name: 'KatjaHomeTalk',
  title: '<<$npc_firstname[\'A14\']>> <<$npc_lastname[\'A14\']>>',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  description: ['Katja looks calm and stoic.'],
  enter: enter,
};
