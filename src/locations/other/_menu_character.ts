import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  (s as any).settings = undefined;
  (s as any).menu_page = undefined;
  scene.build();
}

function enterCharactertabs(s: GameState, scene: SceneBuilder): void {
  ((s as any).tabsname = (s as any).tabsname ?? {})[0] = 'Character';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[0] = 'menu_page = 0 & gt \'$menu_character\', \'description\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[1] = 'Skills';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[1] = 'menu_page = 1 & gt \'$menu_character\', \'skills\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[2] = 'Statistics';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[2] = 'menu_page = 2 & gt \'$menu_character\', \'stats\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[3] = 'Pain';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[3] = 'menu_page = 3 & gt \'$menu_character\', \'pain\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[4] = 'Archetypes';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[4] = 'menu_page = 4 & gt \'$menu_character\', \'archetypes\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[5] = 'Traits';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[5] = 'menu_page = 5 & gt \'$menu_character\', \'traits\'';
  ((s as any).tabsname = (s as any).tabsname ?? {})[6] = 'Renown';
  ((s as any).tabsaction = (s as any).tabsaction ?? {})[6] = 'menu_page = 6 & gt \'$menu_character\', \'reputation\'';
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    ((s as any).tabsname = (s as any).tabsname ?? {})[7] = 'Magic';
    ((s as any).tabsaction = (s as any).tabsaction ?? {})[7] = 'menu_page = 7 & gt \'$menu_character\', \'magic\'';
  }
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "_menu_character" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
    (s as any).temp_menu_page = undefined;
  }
  qspCall(s, 'tabhead', 'menu_page');
  scene.actions([
    { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_character', '');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).BACKIMAGE = '';
  (s as any).menu_page = 0;
  qspCall(s, '$menu_character', 'charactertabs', 'Character');
  qspCall(s, 'AppearanceSystem', '');
  qspCall(s, 'body_desc', '');
  scene.text('<center><h1>Character Description</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  scene.text(`Your name is ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}.`);
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.text(`Your friends and family call you ${((s as any).pcs_nickname ?? '')}.`);
  } else {
    scene.text(`Your friends call you ${((s as any).pcs_nickname ?? '')}.`);
  }
  if (((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
    scene.text('Your start background is: Good Girl');
  } else {
    if (((s as any).start_type ?? 0)?.['cat'] === 'uglyduckling') {
      scene.text('Your start background is: Ugly Duckling');
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'gopnikstart') {
        scene.text('Your start background is: Gopnik Start');
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'vitekgf') {
          scene.text('Your start background is: Vitek\'s Girlfriend');
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'nerdqueen') {
            scene.text('Your start background is: Nerd Queen');
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'goodstudent') {
              scene.text('Your start background is: Good Student');
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'computergeek') {
                scene.text('Your start background is: Computer Geek');
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'chessplayer') {
                  scene.text('Your start background is: Chess Player');
                } else {
                  scene.text('Your start background is: ' + (String((String((((s as any).start_type ?? 0)?.['cat'] ?? '')).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String((((s as any).start_type ?? 0)?.['cat'] ?? '')).slice((2)-1)));
                }
              }
            }
          }
        }
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'get_accessible_property_count') === 0) {
    scene.text('You have nowhere to live, if this is an error, you can set your current home <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027current_home\u0027); return false;">here</a>.');
  } else {
    if (((s as any).home ?? 0)?.['current'] === '') {
      scene.text('You don\'t have a current home set. If this is an error, you can set your current home <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027current_home\u0027); return false;">here</a>.');
    } else {
      scene.text(`Your current home is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027current_home/u0027); return false;">${(((s as any).home ?? 0)?.['name'] ?? '')}</a>.`);
    }
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucpcinfo ?? 0) >= 4) {
    scene.text('You are a Succubus.');
    scene.text(`Succubus Level: ${((s as any).succublvl ?? '')}`);
  }
  if (((s as any).age ?? 0) === ((s as any).vidage ?? 0)) {
    scene.text(`You are ${((s as any).age ?? '')} years old.`);
  } else {
    scene.text(`You are ${((s as any).age ?? '')} years old, but you appear to be ${((s as any).vidage ?? '')}.`);
  }
  if (((s as any).birthday ?? 0) <= 9  &&  ((s as any).birthmonth ?? 0) <= 9) {
    (s as any).birthdayD = '0' + ((s as any).birthday ?? 0) + '.0' + ((s as any).birthmonth ?? 0) + '.' + ((s as any).birthyear ?? 0) + '.';
  } else {
    if (((s as any).birthday ?? 0) > 9  &&  ((s as any).birthmonth ?? 0) <= 9) {
      (s as any).birthdayD = '' + ((s as any).birthday ?? 0) + '.0' + ((s as any).birthmonth ?? 0) + '.' + ((s as any).birthyear ?? 0) + '.';
    } else {
      if (((s as any).birthday ?? 0) > 9  &&  ((s as any).birthmonth ?? 0) > 9) {
        (s as any).birthdayD = '' + ((s as any).birthday ?? 0) + '.' + ((s as any).birthmonth ?? 0) + '.' + ((s as any).birthyear ?? 0) + '.';
      } else {
        (s as any).birthdayD = '0' + ((s as any).birthday ?? 0) + '.' + ((s as any).birthmonth ?? 0) + '.' + ((s as any).birthyear ?? 0) + '.';
      }
    }
  }
  scene.text(`Your date of birth is ${((s as any).birthdayD ?? '')}`);
  scene.text(`You are ${((s as any).pcs_hgt ?? '')}cm tall and <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = String(qspFunc(s, /u0027$body_image/u0027, /u0027body/u0027) || /u0027/u0027); return s; }); return false;">${(((s as any).bodyVars ?? 0)?.['desc'] ?? '')}</a>.`);
  scene.text(`Your breasts would be considered an EU <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = String(qspFunc(s, /u0027$body_image/u0027, /u0027tits/u0027) || /u0027/u0027); return s; }); return false;">${((s as any).titsize ?? '')}</a>.`);
  if (((s as any).preg ?? 0) === 1) {
    if (((s as any).denypreg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) > 2688) {
      scene.text('You seem to be putting on a bit of weight, your belly is definitely bigger.');
    } else {
      if (((s as any).pregChem ?? 0) > 4704) {
        scene.text('You\'re rapidly approaching the finish line and have entered the third trimester. Your belly is so big now that you can barely remember what your toes look like. Your back hurts most of the time and it is a struggle to get to your feet if you sit down. The baby seems to think that your bladder makes a nice punching bag.');
      } else {
        if (((s as any).pregChem ?? 0) > 3696) {
          scene.text('Your belly is quite swollen now and shows under even the loosest of clothes. You find yourself constantly caressing your belly without realizing it.');
        } else {
          if (((s as any).pregChem ?? 0) > 3192  &&  ((s as any).knowpreg ?? 0) === 1) {
            scene.text('You are showing for sure now. Your tummy is starting to become rounder as it grows larger each day, although you can still wear baggy clothes to hide it. At least the morning sickness and nausea seem to have gone away for the most part.');
          } else {
            if (((s as any).pregChem ?? 0) > 3192  &&  (!((s as any).knowpreg ?? 0))) {
              scene.text('You can\'t seem to stop gaining weight and your belly looks like it is getting bigger everyday, although you can still wear baggy clothes to hide it. At least the flu you\'ve been fighting lately seems to have finally gone away for the most part.');
            } else {
              if (((s as any).pregChem ?? 0) > 1800  &&  ((s as any).knowpreg ?? 0) === 1) {
                scene.text(((((s as any).lactation ?? 0)?.['growthsoreness_on']>0) ? ('Your breasts look and feel swollen and tingle at the slightest touch. ') : ('')) + 'Waking up is getting harder to do and it takes you longer to get going in the morning. Lately, just the thought of food is enough to turn your stomach.');
              } else {
                if (((s as any).pregChem ?? 0) > 1800  &&  (!((s as any).knowpreg ?? 0))) {
                  scene.text(((((s as any).lactation ?? 0)?.['growthsoreness_on']>0) ? ('Your breasts look and feel swollen and tingle at the slightest touch. ') : ('')) + 'Waking up is getting harder to do and it takes you longer to get going in the morning. Lately, just the thought of food is enough to turn your stomach.');
                } else {
                  if (((s as any).pregChem ?? 0) > 1200  &&  ((s as any).lactation ?? 0)?.['preggrowth'] > 0) {
                    scene.text('You\'ve noticed that your breasts seem firmer lately and your nipples seem to be sticking out more.');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).face_style ?? 0)?.['avatar_hair'] !== '') {
    scene.text(`Your hair: ${(((s as any).face_style ?? 0)?.['avatar_hair'] ?? '')}.`);
  } else {
    scene.text(`${((s as any).hair ?? '')}`);
  }
  if (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) > 0) {
    scene.text(`Your curls are good for another ${((s as any).curly ?? '')} days.`);
  }
  if (((s as any).defcurly ?? 0) === 1  &&  ((s as any).straight ?? 0) > 0) {
    scene.text(`Your hair should be straight for another ${((s as any).straight ?? '')} days.`);
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10  &&  ((s as any).strenbuf ?? 0) > 0  &&  (!((s as any).dounspell ?? 0))) {
    scene.text(qspFunc(s, 'wrap', 'neg b', 'You are showing signs of malnourishment. You should probably eat more and more often.'));
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10  &&  ((s as any).strenbuf ?? 0) === 0  &&  (!((s as any).dounspell ?? 0))) {
    scene.text(qspFunc(s, 'wrap', 'v_neg b', 'You are dangerously malnourished, which has led to a loss in muscle mass. You\'re in a critical condition and likely to pass out!'));
  }
  if (((s as any).pcs_brace ?? 0) === 1) {
    qspCall(s, 'time', 'to_date', ((s as any).dentistday ?? 0));
    scene.text(`You are wearing a brace on your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027obj_din/u0027, /u0027show_teeth/u0027); return false;">teeth</a>, you can remove them on or after the ${(((s as any).dateVars ?? 0)?.['day'] ?? '')}${(((s as any).dateVars ?? 0)?.['suffix'] ?? '')} of ${qspUntranslated(s, "monthName[dateVars['month']]", { location: "_menu_character" })}, ${(((s as any).dateVars ?? 0)?.['year'] ?? '')}.`);
  }
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterDescription(s: GameState, scene: SceneBuilder): void {
  (s as any).BACKIMAGE = '';
  (s as any).menu_page = 0;
  qspCall(s, '$menu_character', 'charactertabs', 'Character');
  qspCall(s, 'AppearanceSystem', '');
  qspCall(s, 'body_desc', '');
  scene.text('<center><h1>Character Description</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  scene.text(`Your name is ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}.`);
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.text(`Your friends and family call you ${((s as any).pcs_nickname ?? '')}.`);
  } else {
    scene.text(`Your friends call you ${((s as any).pcs_nickname ?? '')}.`);
  }
  if (((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
    scene.text('Your start background is: Good Girl');
  } else {
    if (((s as any).start_type ?? 0)?.['cat'] === 'uglyduckling') {
      scene.text('Your start background is: Ugly Duckling');
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'gopnikstart') {
        scene.text('Your start background is: Gopnik Start');
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'vitekgf') {
          scene.text('Your start background is: Vitek\'s Girlfriend');
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'nerdqueen') {
            scene.text('Your start background is: Nerd Queen');
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'goodstudent') {
              scene.text('Your start background is: Good Student');
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'computergeek') {
                scene.text('Your start background is: Computer Geek');
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'chessplayer') {
                  scene.text('Your start background is: Chess Player');
                } else {
                  scene.text('Your start background is: ' + (String((String((((s as any).start_type ?? 0)?.['cat'] ?? '')).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String((((s as any).start_type ?? 0)?.['cat'] ?? '')).slice((2)-1)));
                }
              }
            }
          }
        }
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'get_accessible_property_count') === 0) {
    scene.text('You have nowhere to live, if this is an error, you can set your current home <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027current_home\u0027); return false;">here</a>.');
  } else {
    if (((s as any).home ?? 0)?.['current'] === '') {
      scene.text('You don\'t have a current home set. If this is an error, you can set your current home <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027current_home\u0027); return false;">here</a>.');
    } else {
      scene.text(`Your current home is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027current_home/u0027); return false;">${(((s as any).home ?? 0)?.['name'] ?? '')}</a>.`);
    }
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucpcinfo ?? 0) >= 4) {
    scene.text('You are a Succubus.');
    scene.text(`Succubus Level: ${((s as any).succublvl ?? '')}`);
  }
  if (((s as any).age ?? 0) === ((s as any).vidage ?? 0)) {
    scene.text(`You are ${((s as any).age ?? '')} years old.`);
  } else {
    scene.text(`You are ${((s as any).age ?? '')} years old, but you appear to be ${((s as any).vidage ?? '')}.`);
  }
  if (((s as any).birthday ?? 0) <= 9  &&  ((s as any).birthmonth ?? 0) <= 9) {
    (s as any).birthdayD = '0' + ((s as any).birthday ?? 0) + '.0' + ((s as any).birthmonth ?? 0) + '.' + ((s as any).birthyear ?? 0) + '.';
  } else {
    if (((s as any).birthday ?? 0) > 9  &&  ((s as any).birthmonth ?? 0) <= 9) {
      (s as any).birthdayD = '' + ((s as any).birthday ?? 0) + '.0' + ((s as any).birthmonth ?? 0) + '.' + ((s as any).birthyear ?? 0) + '.';
    } else {
      if (((s as any).birthday ?? 0) > 9  &&  ((s as any).birthmonth ?? 0) > 9) {
        (s as any).birthdayD = '' + ((s as any).birthday ?? 0) + '.' + ((s as any).birthmonth ?? 0) + '.' + ((s as any).birthyear ?? 0) + '.';
      } else {
        (s as any).birthdayD = '0' + ((s as any).birthday ?? 0) + '.' + ((s as any).birthmonth ?? 0) + '.' + ((s as any).birthyear ?? 0) + '.';
      }
    }
  }
  scene.text(`Your date of birth is ${((s as any).birthdayD ?? '')}`);
  scene.text(`You are ${((s as any).pcs_hgt ?? '')}cm tall and <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = String(qspFunc(s, /u0027$body_image/u0027, /u0027body/u0027) || /u0027/u0027); return s; }); return false;">${(((s as any).bodyVars ?? 0)?.['desc'] ?? '')}</a>.`);
  scene.text(`Your breasts would be considered an EU <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = String(qspFunc(s, /u0027$body_image/u0027, /u0027tits/u0027) || /u0027/u0027); return s; }); return false;">${((s as any).titsize ?? '')}</a>.`);
  if (((s as any).preg ?? 0) === 1) {
    if (((s as any).denypreg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) > 2688) {
      scene.text('You seem to be putting on a bit of weight, your belly is definitely bigger.');
    } else {
      if (((s as any).pregChem ?? 0) > 4704) {
        scene.text('You\'re rapidly approaching the finish line and have entered the third trimester. Your belly is so big now that you can barely remember what your toes look like. Your back hurts most of the time and it is a struggle to get to your feet if you sit down. The baby seems to think that your bladder makes a nice punching bag.');
      } else {
        if (((s as any).pregChem ?? 0) > 3696) {
          scene.text('Your belly is quite swollen now and shows under even the loosest of clothes. You find yourself constantly caressing your belly without realizing it.');
        } else {
          if (((s as any).pregChem ?? 0) > 3192  &&  ((s as any).knowpreg ?? 0) === 1) {
            scene.text('You are showing for sure now. Your tummy is starting to become rounder as it grows larger each day, although you can still wear baggy clothes to hide it. At least the morning sickness and nausea seem to have gone away for the most part.');
          } else {
            if (((s as any).pregChem ?? 0) > 3192  &&  (!((s as any).knowpreg ?? 0))) {
              scene.text('You can\'t seem to stop gaining weight and your belly looks like it is getting bigger everyday, although you can still wear baggy clothes to hide it. At least the flu you\'ve been fighting lately seems to have finally gone away for the most part.');
            } else {
              if (((s as any).pregChem ?? 0) > 1800  &&  ((s as any).knowpreg ?? 0) === 1) {
                scene.text(((((s as any).lactation ?? 0)?.['growthsoreness_on']>0) ? ('Your breasts look and feel swollen and tingle at the slightest touch. ') : ('')) + 'Waking up is getting harder to do and it takes you longer to get going in the morning. Lately, just the thought of food is enough to turn your stomach.');
              } else {
                if (((s as any).pregChem ?? 0) > 1800  &&  (!((s as any).knowpreg ?? 0))) {
                  scene.text(((((s as any).lactation ?? 0)?.['growthsoreness_on']>0) ? ('Your breasts look and feel swollen and tingle at the slightest touch. ') : ('')) + 'Waking up is getting harder to do and it takes you longer to get going in the morning. Lately, just the thought of food is enough to turn your stomach.');
                } else {
                  if (((s as any).pregChem ?? 0) > 1200  &&  ((s as any).lactation ?? 0)?.['preggrowth'] > 0) {
                    scene.text('You\'ve noticed that your breasts seem firmer lately and your nipples seem to be sticking out more.');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).face_style ?? 0)?.['avatar_hair'] !== '') {
    scene.text(`Your hair: ${(((s as any).face_style ?? 0)?.['avatar_hair'] ?? '')}.`);
  } else {
    scene.text(`${((s as any).hair ?? '')}`);
  }
  if (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) > 0) {
    scene.text(`Your curls are good for another ${((s as any).curly ?? '')} days.`);
  }
  if (((s as any).defcurly ?? 0) === 1  &&  ((s as any).straight ?? 0) > 0) {
    scene.text(`Your hair should be straight for another ${((s as any).straight ?? '')} days.`);
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10  &&  ((s as any).strenbuf ?? 0) > 0  &&  (!((s as any).dounspell ?? 0))) {
    scene.text(qspFunc(s, 'wrap', 'neg b', 'You are showing signs of malnourishment. You should probably eat more and more often.'));
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10  &&  ((s as any).strenbuf ?? 0) === 0  &&  (!((s as any).dounspell ?? 0))) {
    scene.text(qspFunc(s, 'wrap', 'v_neg b', 'You are dangerously malnourished, which has led to a loss in muscle mass. You\'re in a critical condition and likely to pass out!'));
  }
  if (((s as any).pcs_brace ?? 0) === 1) {
    qspCall(s, 'time', 'to_date', ((s as any).dentistday ?? 0));
    scene.text(`You are wearing a brace on your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027obj_din/u0027, /u0027show_teeth/u0027); return false;">teeth</a>, you can remove them on or after the ${(((s as any).dateVars ?? 0)?.['day'] ?? '')}${(((s as any).dateVars ?? 0)?.['suffix'] ?? '')} of ${qspUntranslated(s, "monthName[dateVars['month']]", { location: "_menu_character" })}, ${(((s as any).dateVars ?? 0)?.['year'] ?? '')}.`);
  }
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterCurrentHome(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><h1>${((s as any).pcs_firstname ?? '')}'s Home Location</h1></center>`);
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  scene.text(`Your current home is ${(((s as any).home ?? 0)?.['name'] ?? '')}.`);
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'city_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027city_apartment\u0027    & gt \u0027$menu_character\u0027); return false;">City residential apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'parents_home')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027parents_home\u0027      & gt \u0027$menu_character\u0027); return false;">Parent\'s home in Pavlovsk</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'village_cottage')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027village_cottage\u0027    & gt \u0027$menu_character\u0027); return false;">My cottage in the cooperative farm</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'old_town_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027old_town_apartment\u0027  & gt \u0027$menu_character\u0027); return false;">Old town apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'matryona_mansion')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027matryona_mansion\u0027    & gt \u0027$menu_character\u0027); return false;">Matryona mansion</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'pavlovsk_hotel')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027pavlovsk_hotel\u0027    & gt \u0027$menu_character\u0027); return false;">My hotel room in Pavlovsk</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'maid_bedroom')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027maid_bedroom\u0027      & gt \u0027$menu_character\u0027); return false;">Nicholas\' apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'niko_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027niko_apartment\u0027    & gt \u0027$menu_character\u0027); return false;">Niko\'s apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'shulga_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027shulga_apartment\u0027    & gt \u0027$menu_character\u0027); return false;">Uncle Sergey\'s apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'lyceum_dorm')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027lyceum_dorm\u0027      & gt \u0027$menu_character\u0027); return false;">Lyceum school</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'university_dorm')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027university_dorm\u0027    & gt \u0027$menu_character\u0027); return false;">University halls</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'hunters_lodge')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027hunters_lodge\u0027      & gt \u0027$menu_character\u0027); return false;">Hunter\'s lodge in Gadukino</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'shared_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027shared_apartment\u0027    & gt \u0027$menu_character\u0027); return false;">Shared apartment in Pavlovsk</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'grandparents_house')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027grandparents_house\u0027  & gt \u0027$menu_character\u0027); return false;">Grandparent\'s house in Gadukino</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'city_house')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027city_house\u0027      & gt \u0027$menu_character\u0027); return false;">My house in the City residential district</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'meynold_household')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027set_home\u0027, \u0027meynold_household\u0027    & gt \u0027$menu_character\u0027); return false;">Meynold Houshold</a>');
  }
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.actions([
    { label: 'Return to main description', goto: ['$menu_character', 'description'] },
  ]);
  scene.build();
}

function enterSkills(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Skills');
  scene.text('<center><h1>Character Skills</h1></center>');
  scene.text('<center><table width="95%" cellspacing="0" cellpadding="5" valign="top"><tr>');
  scene.text('<td width="50%" cellspacing="0" cellpadding="5" valign="top">');
  scene.text('<h2>Base Attributes</h2>');
  (s as any).temp_table = '<table><tr><th align="left">Attribute</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'stren', 'Physical power, how much oomph the PC can put behind what shes doing physically.<br><br>Your strength (\'1\') === Base strength (\'2\') + Musculature (\'3\') + Archetype (\'4\')'));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'agil', 'Muscle response speed, accuracy,  &&  kinaesthetic sense; basically covering anything where physical finesse was needed instead of raw power.<br><br>Your agility is never modified', 1));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'vital', 'Base physical stamina, staying power  &&  also cover overall health.<br><br>Your endurance is never modified', 1));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'intel', 'Raw processing power  &&  memory retention.<br><br>Your intelligence (\'1\') === Base intelligence (\'2\') + Archetype (\'3\') - noorgasm (\'4\')'));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'react', 'How quickly the PC can respond to input.<br><br>Your reaction is never modified', 1));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'sprt', 'Mental stamina  &&  overall mental health.<br><br>Your spirit (\'1\') === Base spirit (\'2\') + Archetype (\'3\')'));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'chrsm', 'Force of personality, sort of the mental equivalent of <i>Strength</i> as it relates to dealing with others.<br><br>Your charisma (\'1\') === Base charisma (\'2\') + Archetype (\'3\')'));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'prcptn', 'All aspects of the natural ability at personal, interpersonal,  &&  situational awareness.<br><br>Your perception (\'1\') === Base perception (\'2\') + Archetype (\'3\')'));
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'magik', 'Measures how much power the PC can handle, which effects which spells the PC can cast (but !== learn), the power behind those spells,  &&  their duration. Is directly increased by orgasms.<br><br>Your magic is never modified', 1);
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
  scene.text(`Attractiveness - ${((s as any).pcs_apprnc ?? '')}`);
  if (((s as any).pcs_splcstng ?? 0) + ((s as any).pcs_humint ?? 0) + ((s as any).pcs_persuas ?? 0) + ((s as any).pcs_observ ?? 0) > 0) {
    scene.text('<h2>Mental Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).pcs_splcstng ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'splcstng', 'The ability to Successfully cast spells.<br><br>Your spell casting (\'0\') === (Base spell casting (\'1\') + (Int (\'2\') + Rea (\'3\')) / 2) / 2');
    }
    if (((s as any).pcs_humint ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'humint', 'Basic human interaction skill set. Influences relationship point gains  &&  losses (can go up to double the gains  &&  half the losses).<br><br>Your people skills (\'1\') === (Base people skills (\'2\') + (Per (\'3\') + Cha (\'4\') + Rea (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_persuas ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'persuas', 'Trained skill at getting people to agree with you  ||  like you. Influences <i>force</i> willpower costs (up to half).<br><br>Your persuasion (\'2\') === (Base persuasion (\'3\') + (Per (\'4\') + Cha (\'5\')) / 2) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_observ ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'observ', 'trained skill in noticing one\'s surroundings  &&  events (nothing but surface detail).<br><br>Your observation (\'0\') === (Base observation (\'1\') + (Per (\'2\') + Rea (\'3\') + Int (\'4\')) / 3) / 2');
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
  }
  if (((s as any).pcs_compskl ?? 0) + ((s as any).pcs_comphckng ?? 0) + ((s as any).pcs_hndiwrk ?? 0) + ((s as any).pcs_sewng ?? 0) + ((s as any).pcs_servng ?? 0) + ((s as any).pcs_medcn ?? 0) + ((s as any).pcs_mdlng ?? 0) + ((s as any).pcs_cleaning ?? 0) > 0) {
    scene.text('<h2>Job Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_compskl ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'compskl', 'Skill at using  &&  repairing computers.<br><br>Your computer skills (\'1\') === (Base computer skills (\'2\') + Int (\'3\')) / 2 + Archetype (\'4\')');
    }
    if (((s as any).pcs_comphckng ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'comphckng', 'Skill at hacking computer systems.<br><br>Your hacking (\'1\') === (Base hacking (\'2\') + (Int (\'3\') + Rea (\'4\')) / 2) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_hndiwrk ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'hndiwrk', 'Used for non-mechanic work, i.e. plumbing.<br><br>Your handiwork (\'0\') === (Base handiwork (\'1\') + (Int (\'2\') + 2 * Agi (\'3\')) / 3) / 2');
    }
    if (((s as any).pcs_sewng ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'sewng', 'Should be self-explanatory.<br><br>Your tailoring (\'1\') === (Base tailoring (\'2\') + (Int (\'3\') + Agi (\'4\')) / 2) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_servng ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'servng', 'Covers all aspects of waitressing  &&  bartending.<br><br>Your serving (\'1\') === (Base serving (\'2\') + (Int (\'3\') + End (\'4\')) / 2) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_medcn ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'medcn', 'Basic medical knowledge up to the level of Nursing.<br><br>Your medicine (\'0\') === (Base medicine (\'1\') + (Int (\'2\') + Rea (\'3\') + Per (\'4\')) / 3) / 2');
    }
    if (((s as any).pcs_cleaning ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'cleaning', 'Should be self-explanatory.<br><br>Your cleaning (\'1\') === (Base cleaning (\'2\') + (Int (\'3\') + End (\'4\')) / 2) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_mdlng ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'mdlng', 'Knowing how to pose  &&  hold poses for long periods of time.<br><br>Your modeling (\'1\') === (Base modeling (\'2\') * 3 / 2 + (End (\'3\') + Agi (\'4\')) / 4) / 2 + Archetype (\'5\')');
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
    if (((s as any).teacher ?? 0)?.['level'] > 0) {
      scene.text(`Teacher - credibility ${(((s as any).teacher ?? 0)?.['level'] ?? '')}`);
    }
  } else {
    if (((s as any).teacher ?? 0)?.['level'] > 0) {
      scene.text('<h2>Job Skills</h2>');
      scene.text(`Teacher - credibility ${(((s as any).teacher ?? 0)?.['level'] ?? '')}`);
    }
  }
  if (((s as any).pcs_vokal ?? 0) + ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_photoskl ?? 0) + ((s as any).pcs_artskls ?? 0) + ((s as any).pcs_perform ?? 0) + ((s as any).pcs_musicprod ?? 0) > 0) {
    scene.text('<h2>Artistic Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_vokal ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'vokal', 'Should be self-explanatory.<br><br>Your singing (\'1\') === (Base singing (\'2\') + (Int (\'3\') + Cha (\'4\')) / 2) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_instrmusic ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'instrmusic', 'Skill at playing an instrument(s).<br><br>Your instrumental music (\'1\') === (Base instrumental music (\'2\') + (Int (\'3\') + 2 * Agi (\'4\')) / 3) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_photoskl ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'photoskl', 'Should be self-explanatory.<br><br>Your photography (\'0\') === (Base photography (\'1\') + (2 * Int (\'2\') + Rea (\'3\')) / 3) / 2');
    }
    if (((s as any).pcs_artskls ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'artskls', 'Painting, drawing etc.<br><br>Your artistic skills (\'1\') === (Base artistic skills (\'2\') + (Int (\'3\') + Agi (\'4\') + Rea (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_perform ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'perform', 'Public performances such as busking  &&  dancing.<br><br>Your performance (\'1\') === (Base performance (\'2\') + (Cha (\'3\') + Per (\'4\')) / 2) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_musicprod ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'musicprod', 'Processing music you recorded to make it more professional.<br><br>Your music production (\'1\') === (Base music production (\'2\') + (Int (\'3\') + Per (\'4\') + Spi (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
  }
  if (((s as any).gschoolVars ?? 0)?.['absence_count'] > 0) {
    scene.text('<h2>Other Skills</h2>');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      if (((s as any).gschoolVars ?? 0)?.['absence_count'] > 0) {
        scene.text(`School absenteeism - ${(((s as any).gschoolVars ?? 0)?.['absence_count'] ?? '')} days`);
      }
    }
  }
  scene.text('</td><td width="50%" cellspacing="0" cellpadding="5" valign="top">');
  if (((s as any).pcs_run ?? 0) + ((s as any).pcs_vball ?? 0) + ((s as any).pcs_ftbll ?? 0) + ((s as any).pcs_wrstlng ?? 0) + ((s as any).pcs_chess ?? 0) + ((s as any).pcs_icesktng ?? 0) + ((s as any).pcs_gaming ?? 0) + ((s as any).pcs_pool ?? 0) > 0) {
    scene.text('<h2>Sport Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_run ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'run', 'Should be self-explanatory.<br><br>Your running (\'1\') === (Base running (\'2\') + (2 * (Agi (\'3\') + Str (\'4\')) + End (\'5\')) / 5) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_vball ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'vball', 'Should be self-explanatory.<br><br>Your volleyball (\'0\') === (Volleyball Block (\'1\') + Volleyball Receive (\'2\') + Volleyball Serve (\'3\') + Volleyball Set (\'4\') + Volleyball Spike (\'5\')) / 5'));
      if (((s as any).pcs_vball_block ?? 0) > 0) {
        (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'vball_block', 'Your volleyball block (\'1\') === (Base volleyball (\'2\') + (End (\'3\') + Rea (\'4\')) / 2) / 2 + Height bonus (\'5\') + Archetype (\'6\')', '<i>Block</i>', 1, 1);
      }
      if (((s as any).pcs_vball_rec ?? 0) > 0) {
        (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'vball_rec', 'Your volleyball receive (\'1\') === (Base volleyball (\'2\') + (Agi (\'3\') + Rea (\'4\')) / 2) / 2 + Archetype (\'5\')', '<i>Receive</i>', 1, 1);
      }
      if (((s as any).pcs_vball_serve ?? 0) > 0) {
        (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'vball_serve', 'Your volleyball serve (\'1\') === (Base volleyball (\'2\') + (Str (\'3\') + Per (\'4\')) / 2) / 2 + Archetype (\'5\')', '<i>Serve</i>', 1, 1);
      }
      if (((s as any).pcs_vball_set ?? 0) > 0) {
        (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'vball_set', 'Your volleyball setting (\'1\') === (Base volleyball (\'2\') + (Agi (\'3\') + Per (\'4\')) / 2) / 2 + Archetype (\'5\')', '<i>Set</i>', 1, 1);
      }
      if (((s as any).pcs_vball_spike ?? 0) > 0) {
        (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'vball_spike', 'Your volleyball spike (\'1\') === (Base volleyball (\'2\') + (Str (\'3\') + End (\'4\')) / 2) / 2 + Archetype (\'5\')', '<i>Spike</i>', 1, 1);
      }
    }
    if (((s as any).pcs_ftbll ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'ftbll', 'Should be self-explanatory.<br><br>Your football (\'1\') === (Base football (\'2\') + (Agi (\'3\') + Str (\'4\') + End (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_bkbll ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'bkbll', 'Should be self-explanatory.<br><br>Your basketball (\'1\') === (Base basketball (\'2\') + (Agi (\'3\') + End (\'4\') + Rea (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_wrstlng ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'wrstlng', 'Should be self-explanatory.<br><br>Your wrestling (\'1\') === (Base wrestling (\'2\') + (Agi (\'3\') + 2 * Str (\'4\') + End (\'5\')) / 4) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_icesktng ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'icesktng', 'Should be self-explanatory.<br><br>Your ice skating (\'1\') === (Base ice skating (\'2\') + (2 * Agi (\'3\') + Str (\'4\')) / 3) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_gaming ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'gaming', 'Skill in video games.<br><br>Your gaming (\'0\') === (Base gaming (\'1\') + (2 * Int (\'2\') + Rea (\'3\')) / 3) / 2');
    }
    if (((s as any).pcs_chess ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'chess', 'Should be self-explanatory.<br><br>Your chess (\'1\') === (Base chess (\'2\') + Int (\'3\')) / 2 + Archetype (\'4\')');
    }
    if (((s as any).pcs_pool ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'pool', 'How skillfully you can handle sticks  &&  balls, in the game of pool of course.<br><br>Your pool (\'0\') === (Base pool (\'1\') * 3 + Int (\'2\')) / 4');
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
  }
  if (((s as any).pcs_jab ?? 0) + ((s as any).pcs_punch ?? 0) + ((s as any).pcs_kick ?? 0) + ((s as any).pcs_def ?? 0) + ((s as any).pcs_shoot ?? 0) + ((s as any).pcs_bushcraft ?? 0) > 0) {
    scene.text('<h2>Combat Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_jab ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'jab', 'Quick strikes that do !== have much power.<br><br>Your jabs (\'1\') === (Base jabs (\'2\') + (Str (\'3\') + 2 * Agi (\'4\')) / 3) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_punch ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'punch', 'Hard strikes that are harder to land.<br><br>Your power strikes (\'1\') === (Base power strikes (\'2\') + (2 * Str (\'3\') + Agi (\'4\')) / 3) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_kick ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'kick', 'Kicking, enough said.<br><br>Your kicks (\'1\') === (Base kicks (\'2\') + (3 * Str (\'3\') + Agi (\'4\')) / 4) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_def ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'def', 'Covers both blocking  &&  dodging.<br><br>Your defense (\'1\') === (Base defense (\'2\') + (Str (\'3\') + Agi (\'4\') + Rea (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_shoot ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'shoot', 'Could be guns, bows,  ||  spells.<br><br>Your shooting accuracy (\'1\') === (Base accuracy (\'2\') + (Agi (\'3\') + Rea (\'4\')) / 2) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_bushcraft ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'bushcraft', 'Skill at surviving in the wild.<br><br>Your bushcraft (\'0\') === (Base bushcraft (\'1\') + (Str (\'2\') + Agi (\'3\') + Int (\'4\')) / 3) / 2');
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
  }
  if (((s as any).pcs_makupskl ?? 0) + ((s as any).pcs_danc ?? 0) + ((s as any).pcs_dancero ?? 0) + ((s as any).pcs_dancpol ?? 0) + ((s as any).pcs_cheer ?? 0) + ((s as any).pcs_heels ?? 0) > 0) {
    scene.text('<h2>Beauty Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_makupskl ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'makupskl', 'Skill at applying makeup. Influences how much makeup improves your appearance (between -5  &&  +20).<br><br>Your makeup skill (\'1\') === (Base makeup skill (\'2\') + (Agi (\'3\') + Int (\'4\')) / 2) / 2 + Archetype (\'5\')');
    }
    if (((s as any).pcs_danc ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'danc', 'This is the basic dance skill.<br><br>Your modern dancing (\'1\') === (Base modern dancing (\'2\') + (Agi (\'3\') + Rea (\'4\') + End (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_dancero ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'dancero', 'This is used when individual eroticism is being displayed, also covers strip tease.<br><br>Your erotic dancing (\'1\') === (Base erotic dancing (\'2\') + (Agi (\'3\') + Cha (\'4\') + End (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_dancpol ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'dancpol', 'Should be self-explanatory.<br><br>Your pole dancing (\'1\') === (Base pole dancing (\'2\') + (Agi (\'3\') + Cha (\'4\') + Str (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_cheer ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'cheer', 'Should be self-explanatory.<br><br>Your cheerleading (\'1\') === (Base cheerleading (\'2\') + (Agi (\'3\') + Rea (\'4\') + End (\'5\')) / 3) / 2 + Archetype (\'6\')');
    }
    if (((s as any).pcs_heels ?? 0) > 0) {
      (s as any).temp_table = ((s as any).temp_table ?? '') + qspFunc(s, '$menu_character', '', 'skill_format_func', 'heels', 'Skill at walking in high heels. Low skill can cause pain when walking in high heels.<br><br>Your heels (\'5\') === (Base heels (\'6\') + (Agi (\'7\') + Rea (\'8\')) / 2) / 2 + Archetype (\'9\')' + ((((s as any).trait_vars ?? 0)?.['heel_preference'] >= 0) ? ('') : (' + Bambi trait (\'10\')')) + ((((s as any).trait_vars ?? 0)?.['heels_preference'] <= 0) ? ('') : ('Heels Preference trait (\'11\')')));
    }
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
  }
  scene.text('<h2>Sexual Skills</h2>');
  (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'skill_format_func', 'inhib', 'How confident Sveta is with her body  &&  how willing she is to show it off.<br><br>Your inhibition (\'1\') === min(Base inhibition (\'2\') + intoxication (\'3\') + Archetype (\'4\'), 100)', 0, 0, 1));
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</table>');
  scene.text('Exhibitionist preference: ' + qspFunc(s, 'fetish', 'get_pref', 'exhibitionism'));
  scene.text('Exhibitionist sex: ' + qspFunc(s, 'fetish', 'get_exp', 'exhibitionism'));
  if (((s as any).SUB ?? 0) > 0) {
    scene.text(`Submissiveness ${((s as any).SUB ?? '')}`);
  }
  if (((s as any).pcs_dom ?? 0) > 0) {
    scene.text(`Dominance ${((s as any).pcs_dom ?? '')}`);
  }
  scene.text('Submissive sex: ' + qspFunc(s, 'fetish', 'get_exp', 'sub'));
  scene.text('Dominant sex: ' + qspFunc(s, 'fetish', 'get_exp', 'dom'));
  scene.text('Lesbian sex preference: ' + qspFunc(s, 'fetish', 'get_pref', 'lesbian'));
  scene.text('Lesbian sex: ' + qspFunc(s, 'fetish', 'get_exp', 'lesbian'));
  scene.text('</td></tr></table></center>');
  (s as any).temp_table = undefined;
  scene.build();
}

function enterSkillFormatFunc(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp = (s as any).temp ?? {})['skl_name'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp = (s as any).temp ?? {})['skl_popup'] = ((s as any).locArgs?.[2] ?? 0);
  if (String((s as any).locArgs?.[3] ?? '') !== '') {
    ((s as any).temp = (s as any).temp ?? {})['skl_desc'] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['skl_only'] = ((s as any).locArgs?.[4] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['no_exp'] = ((s as any).locArgs?.[5] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['inverse'] = ((s as any).locArgs?.[6] ?? 0);
  } else {
    ((s as any).temp = (s as any).temp ?? {})['skl_only'] = ((s as any).locArgs?.[3] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['no_exp'] = ((s as any).locArgs?.[4] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['inverse'] = ((s as any).locArgs?.[5] ?? 0);
  }
  if (((s as any).temp ?? 0)?.['skl_desc'] === '') {
    ((s as any).temp = (s as any).temp ?? {})['skl_desc'] = (((s as any).skl_desc ?? 0)?.[(((s as any).temp ?? 0)?.['skl_name'])] ?? 0);
  }
  if (((s as any).temp ?? 0)?.['skl_desc'] === '') {
    ((s as any).temp = (s as any).temp ?? {})['skl_desc'] = (((s as any).att_desc ?? 0)?.[(((s as any).temp ?? 0)?.['skl_name'])] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['skl_desc'] = '<b>' + (String((((s as any).temp ?? 0)?.['skl_desc'])).slice((1)-1, ((1)-1)+(3))) + '</b>' + (String((((s as any).temp ?? 0)?.['skl_desc'])).slice((4)-1)) + '';
  }
  if (((s as any).temp ?? 0)?.['skl_name'] === 'stren') {
    ((s as any).temp = (s as any).temp ?? {})['skl_lvl'] = ((s as any).stren_lvl ?? 0) + ((s as any).stren_plus_lvl ?? 0);
  } else {
    ((s as any).temp = (s as any).temp ?? {})['skl_lvl'] = 0;
  }
  ((s as any).temp = (s as any).temp ?? {})['pcs_skl'] = 0;
  if (((s as any).temp ?? 0)?.['inverse']) {
    ((s as any).temp = (s as any).temp ?? {})['skl_lvl'] = 100 - (((s as any).temp ?? {})?.['skl_lvl'] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['pcs_skl'] = 100 - (((s as any).temp ?? {})?.['pcs_skl'] ?? 0);
  }
  (s as any).result = '<tr>';
  if (((s as any).temp ?? 0)?.['no_exp'] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<td align="left">');
  } else {
    (s as any).result = ((s as any).result ?? 0) + ('<td align="left">&nbsp;-&nbsp;');
  }
  if (((s as any).temp ?? 0)?.['skl_popup'] === '') {
    (s as any).result = ((s as any).result ?? 0) + ('' + (((s as any).temp ?? 0)?.['skl_desc']) + '');
  } else {
    // TODO-QSP: $result += '<a href="exec:msg ''<<$temp["skl_popup"]>>''"><<$temp[''skl_desc'']>></a>'
  }
  (s as any).result = ((s as any).result ?? 0) + ('</td><td>-</td>');
  (s as any).result = ((s as any).result ?? 0) + ('<td align="center">');
  if (((s as any).temp ?? 0)?.['skl_only'] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('' + (((s as any).temp ?? 0)?.['skl_lvl']) + '&nbsp;/&nbsp;' + (((s as any).temp ?? 0)?.['pcs_skl']) + '');
  } else {
    (s as any).result = ((s as any).result ?? 0) + ('' + (((s as any).temp ?? 0)?.['pcs_skl']) + '');
  }
  if (((s as any).temp ?? 0)?.['no_exp'] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('</td><td>-</td><td>|</td>');
    if (((s as any).temp ?? 0)?.['inverse']) {
      if (((s as any).temp ?? 0)?.['skl_lvl'] <= 0) {
        (s as any).result = ((s as any).result ?? 0) + ('<td align="center">Min&nbsp;Level</td><td>|</td></tr>');
        (s as any).temp = undefined;
        return;
      }
    } else {
      if (((s as any).temp ?? 0)?.['skl_lvl'] >= 100) {
        if (((s as any).temp ?? 0)?.['skl_name'] === 'stren'  &&  ((s as any).stren_plus_lvl ?? 0) > 0  &&  ((s as any).temp ?? 0)?.['skl_lvl'] < 200) {
          ((s as any).temp = (s as any).temp ?? {})['skl_name'] = 'stren_plus';
        } else {
          (s as any).result = ((s as any).result ?? 0) + ('<td align="center">Max&nbsp;Level</td><td>|</td></tr>');
          (s as any).temp = undefined;
          return;
        }
      }
    }
    ((s as any).temp = (s as any).temp ?? {})['skl_exp'] = 0;
    ((s as any).temp = (s as any).temp ?? {})['skl_xpprv'] = 0;
    ((s as any).temp = (s as any).temp ?? {})['skl_xpnxt'] = 0;
    ((s as any).temp = (s as any).temp ?? {})['exp_into_level'] = (((s as any).temp ?? {})?.['skl_exp'] ?? 0)-(((s as any).temp ?? {})?.['skl_xpprv'] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['level_exp_width'] = (((s as any).temp ?? {})?.['skl_xpnxt'] ?? 0)-(((s as any).temp ?? {})?.['skl_xpprv'] ?? 0);
    if (((s as any).temp ?? 0)?.['level_exp_width'] === 0) {
      ((s as any).temp = (s as any).temp ?? {})['exp_fraction'] = 0;
    } else {
      ((s as any).temp = (s as any).temp ?? {})['exp_fraction'] = (((s as any).temp ?? {})?.['exp_into_level'] ?? 0) * 100 / (((s as any).temp ?? {})?.['level_exp_width'] ?? 0);
    }
    (s as any).result = ((s as any).result ?? 0) + ('<td align="center">' + qspFunc(s, 'progressbar', 'mono:accent', (((s as any).temp ?? 0)?.['exp_into_level']), (((s as any).temp ?? 0)?.['level_exp_width'])) + '</td>');
    (s as any).result = ((s as any).result ?? 0) + ('<td>|</td>');
    (s as any).result = ((s as any).result ?? 0) + ('<td align="center">' + (((s as any).temp ?? 0)?.['level_exp_width']) + '</td>');
  }
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  (s as any).temp = undefined;
  scene.build();
}

function enterStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Statistics');
  qspCall(s, 'housing', 'rent');
  scene.text('<center><h1>Character Statistics</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  scene.text('<center><b>General Statistics</b></center>');
  if ((!((s as any).opPRE ?? 0))) {
    scene.text(`It has been ${((s as any).daystart ?? '') - ((s as any).daystart_start ?? '')} days since the game started.`);
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    qspCall(s, 'grades', 'assign_grade_description', 'school');
    qspCall(s, 'grades', 'grade above', 'school', 90);
    qspCall(s, 'grades', 'grade above', 'school', 70);
    qspCall(s, 'grades', 'grade above', 'school', 50);
    qspCall(s, 'grades', 'grade above', 'school', 40);
    if (((s as any).class ?? 0)?.['school_grades_above_90'] === 13) {
      scene.text('You are getting top marks in all your classes. You are one of the best students in the school, maybe even the best student in the school.');
    } else {
      if (((s as any).class ?? 0)?.['school_grades_above_90'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
        scene.text('You are getting top marks in more than half of your classes and are not failing any of the others. You are one of the best students in the school.');
      } else {
        if (((s as any).class ?? 0)?.['school_grades_above_90'] > 6) {
          scene.text('You are getting top marks in more than half of your classes, and even if you are failing some of the others, you are still one of the best students in the school and should have no problem getting into university if you want.');
        } else {
          if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] === 13) {
            scene.text('You are only getting top marks in a few of your classes, but the rest of your grades are still good. You should have no trouble getting into university if you want.');
          } else {
            if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] > 10  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] ===13) {
              scene.text('You are only getting top marks in a few of your classes, but only a few of your grades are bad, and you are not failing any classes. You should probably have no trouble getting into university if you want, but improving the bad grades would not be a bad idea.');
            } else {
              if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] > 10) {
                scene.text('You are only getting top marks in a few of your classes, but only a few of your grades are bad, and you are failing some classes. If you want to get into university, you should probably try to improve your failing and bad grades.');
              } else {
                if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 6) {
                  scene.text('You are getting top marks in a few of your classes but are failing a lot of classes. If you want to get into university, you need to do something about your failing and bad grades.');
                } else {
                  if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0) {
                    scene.text('Even a top mark or two is not enough to help when you are failing more than half your classes. It will require a lot of work if you want to go to university after school.');
                  } else {
                    if (((s as any).class ?? 0)?.['school_grades_above_70'] === 13) {
                      scene.text('You are getting good grades in all of your classes but no excellent grades. You should probably have no trouble getting into university if you want, but getting some excellent marks would not hurt.');
                    } else {
                      if (((s as any).class ?? 0)?.['school_grades_above_70'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] ===13) {
                        scene.text('You are getting good grades in over half of your classes but no excellent grades. At least you are not failing any classes. If you want to get into university, it would not hurt to improve some of your bad grades.');
                      } else {
                        if (((s as any).class ?? 0)?.['school_grades_above_70'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] >10) {
                          scene.text('You are getting good grades in over half of your classes but no excellent grades, and you are failing a few classes. If you want to get into university, you need to improve some of your bad grades.');
                        } else {
                          if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                            scene.text('You are getting good grades in a few of your classes and no excellent grades. At least you are not failing any classes. If you want to get into university, you need to improve some of your bad grades.');
                          } else {
                            if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] >10) {
                              scene.text('You are getting good grades in a few of your classes but no excellent grades, and you are failing a few classes. If you want to get into university, you need to improve some of your bad grades.');
                            } else {
                              if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] >6) {
                                scene.text('You are getting good grades in a few of your classes but no excellent grades, and you are failing a lot of classes. If you want to get into university, you really need to improve the grades in the classes you are failing.');
                              } else {
                                if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0) {
                                  scene.text('A good grade or two is not enough when you are failing more than half your classes. It will require a lot of work to turn this around.');
                                } else {
                                  if (((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                                    scene.text('You are not getting any good grades, but at least you are not failing any classes. It will require a lot of work if you want to go to university after school.');
                                  } else {
                                    if (((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                                      scene.text('With your generally poor grades, failing a few classes puts you in danger of not graduating from high school.');
                                    } else {
                                      if (((s as any).class ?? 0)?.['school_grades_above_40'] > 6) {
                                        scene.text('With failing a lot of classes and barely passing the rest, you will not graduate from high school unless you can get your grades up before graduation.');
                                      } else {
                                        scene.text('You are failing high school. You need to do something about this right now if you want to graduate.');
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).gschoolVars ?? 0)?.['absence_count'] > 0) {
      scene.text(`School absenteeism - ${(((s as any).gschoolVars ?? 0)?.['absence_count'] ?? '')} days`);
    }
  }
  if ((((s as any).accessible_property ?? 0)?.['city_apartment'] === 1  &&  qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment') > 0)  ||  (((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1  &&  qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment') > 0)) {
    if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 1) {
      (s as any).rentdue = qspFunc(s, 'homes_properties', 'get_rent_amount', 'city_apartment');
      scene.text(`You have rented an apartment in the city residential area, which is paid up for <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment')}</b> days`);
      scene.text(`The monthly rent for your city apartment is ${qspFunc(s, 'money', 'string_price', ((s as any).rentdue ?? ''))}.`);
      if (qspFunc(s, 'money', 'can_afford', ((s as any).rentdue ?? 0))) {
        scene.text(' You can make an advance <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027money\u0027, \u0027pay\u0027, \u0027rentdue & gs \u0027homes_properties\u0027\u0027); return false;">payment</a>.');
      } else {
        scene.text(' You can\'t afford to make an advance payment right now, but you should try to have enough money in your account, so you don\'t get evicted.');
      }
      (s as any).rentdue = undefined;
    }
    if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] > 0) {
      (s as any).rentdue = qspFunc(s, 'homes_properties', 'get_rent_amount', 'old_town_apartment');
      scene.text(`You have rented an apartment in Pushkin, and you're paid up for ${qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment')} days`);
      scene.text(`The monthly rent for your Pushkin apartment is ${qspFunc(s, 'money', 'string_price', ((s as any).rentdue ?? ''))}.`);
      if (qspFunc(s, 'money', 'can_afford', ((s as any).rentdue ?? 0))) {
        scene.text(' You can make an advance <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027money\u0027, \u0027pay\u0027, \u0027rentdue & gs \u0027homes_properties\u0027\u0027); return false;">payment</a>.');
      } else {
        scene.text(' You can\'t afford to make an advance payment right now, but you should try to have enough money in your account, so you don\'t get evicted.');
      }
      (s as any).rentdue = undefined;
    }
    if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 1  ||  ((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1) {
      scene.text(`Utilities are due on the 25th of ${((s as any).monthName ?? '')}.`);
    }
  }
  if (((s as any).kid ?? 0) === 1) {
    scene.text('You have 1 child:');
  } else {
    if (((s as any).kid ?? 0) > 1) {
      scene.text(`You have ${((s as any).kid ?? '')} children:`);
    }
  }
  if (((s as any).kid ?? 0) > 0) {
    (s as any).k = 0;
    while (true) {
      if (((s as any).k ?? 0) < ((s as any).kid ?? 0)) {
        qspCall(s, '$menu_character', 'kidlist', ((s as any).k ?? 0));
        (s as any).k = ((s as any).k ?? 0) + (1);
        break;
      }
    }
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    scene.text(`Reputation as a teacher ${(((s as any).teacher ?? 0)?.['level'] ?? '')}`);
  }
  scene.text('<center><b>Sports Career</b></center>');
  if (((s as any).kickbox ?? 0)?.['proWin'] + ((s as any).kickbox ?? 0)?.['proLoss'] + ((s as any).kickbox ?? 0)?.['proDraw'] > 0) {
    scene.text('Professional Kickboxing Record:Win (Victory KO) - Loss (Defeat KO) - Draw');
    scene.text(`${(((s as any).kickbox ?? 0)?.['proWin'] ?? '')} (${(((s as any).kickbox ?? 0)?.['proWinKO'] ?? '')}KO) - ${(((s as any).kickbox ?? 0)?.['proLoss'] ?? '')} (${(((s as any).kickbox ?? 0)?.['proLossKO'] ?? '')}KO) - ${(((s as any).kickbox ?? 0)?.['proDraw'] ?? '')}`);
  }
  if (((s as any).Win ?? 0) > 0  ||  ((s as any).Loss ?? 0) > 0) {
    scene.text(`Wins in fights ${((s as any).Win ?? '')}, losses in fights ${((s as any).Loss ?? '')}`);
  }
  if (((s as any).kickbox ?? 0)?.['sash'] > 0) {
    if (((s as any).kickbox ?? 0)?.['sash'] === 1) {
      scene.text('You have earned green sash(rank 4) in kickboxing');
    }
    if (((s as any).kickbox ?? 0)?.['sash'] === 2) {
      scene.text('You have earned purple sash(rank 5) in kickboxing');
    }
    if (((s as any).kickbox ?? 0)?.['sash'] === 3) {
      scene.text('You have earned blue sash(rank 6) in kickboxing');
    }
    if (((s as any).kickbox ?? 0)?.['sash'] === 4) {
      scene.text('You have earned brown sash(rank 7) in kickboxing');
    }
    if (((s as any).kickbox ?? 0)?.['sash'] === 5) {
      scene.text('You have earned black sash, 1st dan in kickboxing');
    }
  }
  if (((s as any).kickbox ?? 0)?.['amateurWin'] + ((s as any).kickbox ?? 0)?.['amateurLoss'] + ((s as any).kickbox ?? 0)?.['amateurDraw'] > 0) {
    scene.text(`Amateur Kickboxing Record:<br>Wins: ${(((s as any).kickbox ?? 0)?.['amateurWin'] ?? '')} (${(((s as any).kickbox ?? 0)?.['amateurWinKO'] ?? '')} by KO) - Losses: ${(((s as any).kickbox ?? 0)?.['amateurLoss'] ?? '')} (${(((s as any).kickbox ?? 0)?.['amateurLossKO'] ?? '')} by KO) - Draws: ${(((s as any).kickbox ?? 0)?.['amateurDraw'] ?? '')}`);
  }
  if (((s as any).runnerQW ?? 0)?.['races_ran'] > 0) {
    scene.text(`You ran in ${(((s as any).runnerQW ?? 0)?.['races_ran'] ?? '')} competitive race` + ((((s as any).runnerQW ?? 0)?.['races_ran'] === 1) ? ('') : ('s')));
  }
  if (((s as any).runnerQW ?? 0)?.['pav_wins2'] >= 3) {
    scene.text('You have won the school race trophy twice');
  } else {
    if (((s as any).runnerQW ?? 0)?.['pav_wins1'] >= 3) {
      scene.text('You have won a school race trophy');
    }
  }
  if (((s as any).runnerQW ?? 0)?.['bronze_medals'] > 0) {
    scene.text(`As a runner you have won ${(((s as any).runnerQW ?? 0)?.['bronze_medals'] ?? '')} bronze medal` + ((((s as any).runnerQW ?? 0)?.['bronze_medals'] === 1) ? ('') : ('s')));
  }
  if (((s as any).runnerQW ?? 0)?.['silver_medals'] > 0) {
    scene.text(`As a runner you have won ${(((s as any).runnerQW ?? 0)?.['silver_medals'] ?? '')} silver medal` + ((((s as any).runnerQW ?? 0)?.['silver_medals'] === 1) ? ('') : ('s')));
  }
  if (((s as any).runnerQW ?? 0)?.['gold_medals'] > 0) {
    scene.text(`As a runner you have won ${(((s as any).runnerQW ?? 0)?.['gold_medals'] ?? '')} gold medal` + ((((s as any).runnerQW ?? 0)?.['gold_medals'] === 1) ? ('') : ('s')));
  }
  if (((s as any).runnerQW ?? 0)?.['bronze_medals'] > 0) {
    scene.text(`In the St. Petersburg Track Championship race you have won ${(((s as any).runnerQW ?? 0)?.['champ_bronze'] ?? '')} bronze medal` + ((((s as any).runnerQW ?? 0)?.['champ_bronze'] === 1) ? ('') : ('s')));
  }
  if (((s as any).runnerQW ?? 0)?.['champ_silver'] > 0) {
    scene.text(`In the St. Petersburg Track Championship race you have won ${(((s as any).runnerQW ?? 0)?.['champ_silver'] ?? '')} silver medal` + ((((s as any).runnerQW ?? 0)?.['champ_silver'] === 1) ? ('') : ('s')));
  }
  if (((s as any).runnerQW ?? 0)?.['champ_gold'] > 0) {
    scene.text(`In the St. Petersburg Track Championship race you have won ${(((s as any).runnerQW ?? 0)?.['champ_gold'] ?? '')} gold medal` + ((((s as any).runnerQW ?? 0)?.['champ_gold'] === 1) ? ('') : ('s')));
  }
  if (((s as any).runnerQW ?? 0)?.['prof_stage'] > 0) {
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 1) {
      scene.text('You\'re registered for a semi-professional\'s race, in the junior squad');
    }
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 2) {
      scene.text('You\'re registered for a semi-professional\'s race, in the veteran squad');
    }
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] >= 3  &&  ((s as any).runnerQW ?? 0)?.['prof_stage'] < 14) {
      scene.text('You can run in the qualifying races for the championship on the professional circuit.');
    }
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 14  &&  ((s as any).runnerQW ?? 0)?.['qualifiers'] < 9) {
      scene.text('You failed to quaify for the championship.');
    }
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 5) {
      scene.text('You are one of the best track athletes in Russia and thus qualified for the Russian National Championship.');
    }
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 14  &&  ((s as any).runnerQW ?? 0)?.['qualifiers'] >= 9) {
      scene.text(`You qualified for the ${((s as any).year ?? '')} St. Petersburg Track Championship, taking place this season in the Petrovsky Stadium.`);
    }
  }
  if (((s as any).chess_win ?? 0) > 0  ||  ((s as any).chess_loss ?? 0) > 0) {
    scene.text(`Chess Record: Win ${((s as any).chess_win ?? '')}, Loss ${((s as any).chess_loss ?? '')}`);
  }
  if (((s as any).chess_rank ?? 0) > 0) {
    if (((s as any).chess_rank ?? 0) === 1) {
      scene.text('You have mastered the basics of chess');
    }
    if (((s as any).chess_rank ?? 0) === 2) {
      scene.text('You\'re starting to get good at chess');
    }
    if (((s as any).chess_rank ?? 0) === 3) {
      scene.text('You\'re a good chess player');
    }
    if (((s as any).chess_rank ?? 0) === 4) {
      scene.text('You\'re an excellent chess player');
    }
    if (((s as any).chess_rank ?? 0) === 5) {
      scene.text('You\'re a candidate for chess master');
    }
    if (((s as any).chess_rank ?? 0) === 6) {
      scene.text('You\'re a chess master');
    }
    if (((s as any).chess_rank ?? 0) === 7) {
      scene.text('You\'re a chess Grandmaster');
    }
  }
  if (((s as any).chess_world_rank ?? 0) > 0) {
    if (((s as any).chess_world_rank ?? 0) === 1) {
      scene.text('The title of FIDE Master Chess');
    }
    if (((s as any).chess_world_rank ?? 0) === 2) {
      scene.text('The title of International Chess Master');
    }
    if (((s as any).chess_world_rank ?? 0) === 3) {
      scene.text('The title of International Grandmaster Chess');
    }
  }
  scene.text('<center><b>Job Statistics</b></center>');
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
    if (((s as any).modelfoto ?? 0)?.['shoots'] > 0) {
      scene.text('<b>Modelling</b>');
      if (((s as any).model ?? 0)?.['firstname'] === ((s as any).pcs_firstname ?? 0)  &&  ((s as any).model ?? 0)?.['lastname'] === ((s as any).pcs_lastname ?? 0)) {
        scene.text('You are working as a model using your real name.');
      } else {
        scene.text(`You are working as a model under the name ${(((s as any).model ?? 0)?.['firstname'] ?? '')} ${(((s as any).model ?? 0)?.['lastname'] ?? '')}.`);
      }
      scene.text(`${(((s as any).modelfoto ?? 0)?.['shoots'] ?? '')} - Number of times you have worked as a model`);
      scene.text(`${(((s as any).modelfoto ?? 0)?.['earnings'] ?? '')} - The amount of money you've made modelling`);
      if (((s as any).modelfoto ?? 0)?.['catalog'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['catalog'] ?? '')} - Number of catalog shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['fashion'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['fashion'] ?? '')} - Number of fashion shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['bikini'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['bikini'] ?? '')} - Number of swimsuit shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['lingerie'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['lingerie'] ?? '')} - Number of lingerie shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['trans_ling'] > 0) {
        scene.text(`  ${(((s as any).modelfoto ?? 0)?.['trans_ling'] ?? '')} of those were with transparent lingerie`);
      }
      if (((s as any).modelfoto ?? 0)?.['sexy'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['sexy'] ?? '')} - Number of sexy clothing shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['transparent'] > 0) {
        scene.text(`  ${(((s as any).modelfoto ?? 0)?.['transparent'] ?? '')} of those were with transparent clothing that exposed your breasts`);
      }
      if (((s as any).modelfoto ?? 0)?.['fitness'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['fitness'] ?? '')} - Number of fitness shoots you have participated in`);
      }
      if (((s as any).modelfoto ?? 0)?.['glamour'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['glamour'] ?? '')} - Number of glamour shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['topless'] ?? '')} - Number of topless shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['nude'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['nude'] ?? '')} - Number of shoots in which you have been nude`);
      }
      if (((s as any).modelfoto ?? 0)?.['tastenude'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['tastenude'] ?? '')} - Number of shoots in which you have been nude but not shown breasts or pussy`);
      }
      if (((s as any).modelfoto ?? 0)?.['toplessnude'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['toplessnude'] ?? '')} - Number of nude shoots you have shown your breasts but not your pussy`);
      }
      if (((s as any).modelfoto ?? 0)?.['fullnude'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['fullnude'] ?? '')} - Number of full frontal nude shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['erotic'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['erotic'] ?? '')} - Number of softcore erotic shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['nip'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['nip'] ?? '')} - Number of shoots your nipples have been visible`);
      }
      if (((s as any).modelfoto ?? 0)?.['pussy'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['pussy'] ?? '')} - Number of shoots your pussy has been visible`);
      }
      if (((s as any).modelfoto ?? 0)?.['bush'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['bush'] ?? '')} - Number of shoots you have had visible pubic hair`);
      }
      if (((s as any).modelfoto ?? 0)?.['asshole'] > 0) {
        scene.text(`${(((s as any).modelfoto ?? 0)?.['asshole'] ?? '')} - Number of shoots your asshole has been visible`);
      }
    }
  }
  if ((((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed'  ||  ((s as any).masseuse ?? 0)?.['salon_state'] !== '')  &&  ((s as any).masseuse ?? 0)?.['money_earned'] > 0) {
    scene.text('<b>Masseuse</b>');
    scene.text(`You have earned ${qspFunc(s, 'money', 'string_profit', (((s as any).masseuse ?? 0)?.['money_earned'] ?? ''))} working at the salon as well as ${qspFunc(s, 'money', 'string_profit', (((s as any).massage ?? {})?.['shift_tips_total'] ?? 0) + (((s as any).massage ?? {})?.['sex_tips_total'] ?? 0))} in tips.`);
    if (((s as any).masseuse ?? 0)?.['nude_mass_money_earned'] > 0) {
      scene.text(` - ${qspFunc(s, 'money', 'string_profit', (((s as any).masseuse ?? 0)?.['nude_mass_money_earned'] ?? ''))} of it was made working as a nude masseuse.`);
    }
    if (((s as any).masseuse ?? 0)?.['sex_money_earned'] > 0) {
      scene.text(` - ${qspFunc(s, 'money', 'string_profit', (((s as any).masseuse ?? 0)?.['sex_money_earned'] ?? ''))} of it was made working as a whore.`);
    }
    if (((s as any).massage ?? 0)?.['sex_tips_total'] > 0) {
      scene.text(` - ${qspFunc(s, 'money', 'string_profit', (((s as any).massage ?? 0)?.['sex_tips_total'] ?? ''))} of your tips came after performing a sexual act.`);
    }
  }
  scene.text('<center><b>Miscellaneous</b></center>');
  if (((s as any).slavafuck ?? 0) > 0) {
    scene.text(`You have let Borislav fuck you ${((s as any).slavafuck ?? '')} time` + ((((s as any).slavafuck ?? 0) > 1) ? ('s') : ('')));
  }
  if (((s as any).slava_bj ?? 0) > 0) {
    scene.text(`You have given Borislav ${((s as any).slava_bj ?? '')} blowjob` + ((((s as any).slava_bj ?? 0) > 1) ? ('s') : ('')));
  }
  if (((s as any).maxdamage ?? 0) > 0) {
    scene.text(`The impact force on the dynamometer ${((s as any).maxdamage ?? '')} kgN`);
  }
  if (((s as any).slavafuck ?? 0) > 0  ||  ((s as any).slava_bj ?? 0) > 0  ||  ((s as any).maxdamage ?? 0) > 0) {
  }
  if (((s as any).strip_club ?? 0)?.['total_stripshows'] > 0  &&  (!((s as any).hidden_stripdancesum ?? 0))) {
    scene.text(`You have danced ${(((s as any).strip_club ?? 0)?.['total_stripshows'] ?? '')} times in the stripclub`);
  } else {
    if (((s as any).strip_club ?? 0)?.['total_stripshows'] === 0  &&  ((s as any).hidden_stripdancesum ?? 0) > 0) {
      scene.text(`You have danced ${((s as any).hidden_stripdancesum ?? '')} times in the stripclub, but you do not remember it`);
    } else {
      if (((s as any).strip_club ?? 0)?.['total_stripshows'] > 0  &&  ((s as any).hidden_stripdancesum ?? 0) > 0) {
        scene.text(`You have danced ${(((s as any).strip_club ?? {})?.['total_stripshows'] ?? 0) + ((s as any).hidden_stripdancesum ?? '')} times in the stripclub, but you only remember ${(((s as any).strip_club ?? 0)?.['total_stripshows'] ?? '')} times`);
      }
    }
  }
  if (((s as any).profiDanceTime ?? 0) > 0) {
    scene.text(`You danced ${((s as any).profiDanceTime ?? '')} times professionally.`);
  }
  if (((s as any).strip_club ?? 0)?.['total_stripshows'] > 0  ||  ((s as any).hidden_stripdancesum ?? 0) > 0  ||  ((s as any).profiDanceTime ?? 0) > 0) {
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1) {
    scene.text('You have finished school.');
  }
  if (((s as any).university ?? 0)?.['diploma'] > 0) {
    scene.text('You graduated.');
  }
  if (((s as any).teacher ?? 0)?.['level'] > 0) {
    scene.text(`Your credibility as a teacher is ${(((s as any).teacher ?? 0)?.['level'] ?? '')}`);
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] > 0  ||  ((s as any).university ?? 0)?.['diploma'] > 0  ||  ((s as any).teacher ?? 0)?.['level'] > 0) {
  }
  (s as any).table = '<table width="100%" border="0">';
  (s as any).table = ((s as any).table ?? 0) + ('<tr>');
  (s as any).table = ((s as any).table ?? 0) + ('<th width="40%" cellpadding align="left"><b>  Sex Statistics</b></th>');
  (s as any).table = ((s as any).table ?? 0) + ('<th width="40%" align="left"><b>  Fetish Statistics</b></th>');
  (s as any).table = ((s as any).table ?? 0) + ('</tr>');
  (s as any).table = ((s as any).table ?? 0) + ('<tr>');
  (s as any).table = ((s as any).table ?? 0) + ('<td width="50%" valign="top" align="left">');
  (s as any).table = ((s as any).table ?? 0) + ('<br><ul>');
  if (((s as any).stat ?? 0)?.['kiss'] > 0) {
    (s as any).table = ((s as any).table ?? '') + '<li>Times you have kissed someone: ' + (((s as any).stat ?? 0)?.['kiss']) + '</li>';
  }
  if (((s as any).mastr ?? 0) > 0  ||  ((s as any).stat ?? 0)?.['mast'] > 0) {
    (s as any).table = ((s as any).table ?? '') + '<li>Times you have masturbated: ' + (((s as any).stat ?? 0)?.['mast']) + '</li>';
  }
  (s as any).table = ((s as any).table ?? 0) + ('<li><b>Virginity & First Time</b></li>');
  (s as any).table = ((s as any).table ?? 0) + ('<ul>');
  (s as any).temp_known = (((s as any).stat ?? {})?.['male_sexual_partners'] ?? 0) + (((s as any).stat ?? {})?.['female_sexual_partners'] ?? 0) + (((s as any).stat ?? {})?.['herm_sexual_partners'] ?? 0);
  (s as any).temp_unknown = ((s as any).hidden_guy ?? 0) + ((s as any).hidden_girl ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_sexual_partners'] ?? 0);
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === ''  &&  ((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) === 0) {
    (s as any).table = ((s as any).table ?? 0) + ('<li>You have never had sex.</li>');
  } else {
    if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
      (s as any).table = ((s as any).table ?? 0) + ('<li>You have never had vaginal sex, but you are no longer sexually inexperienced.</li>');
    } else {
      if (((s as any).virgin_stats ?? 0)?.['unique_npc'] === 1) {
        if (((s as any).virgin_stats ?? 0)?.['taker_ID'] === 'A23') {
          if (((s as any).albinaQW ?? 0)?.['big_dildo_hurt'] === 1  ||  ((s as any).albinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
            (s as any).table = ((s as any).table ?? 0) + ('<li>You lost your virginity when you asked Albina to take it with a big strapon.</li>');
          } else {
            (s as any).table = ((s as any).table ?? 0) + ('<li>You lost your virginity when you asked Albina to take it with a strapon.</li>');
          }
        } else {
          if (((s as any).virgin_stats ?? 0)?.['taker_ID'] === 'A11') {
            if (((s as any).vasilyQW ?? 0)?.['lost_together'] === 1) {
              (s as any).table = ((s as any).table ?? 0) + ('<li>You lost your virginity together with your childhood friend Vasily. He said he would pull out but accidentally came inside you anyways.</li>');
            } else {
              (s as any).table = ((s as any).table ?? 0) + ('<li>You lost your virginity to your childhood friend Vasily.</li>');
            }
          }
        }
      } else {
        (s as any).table = ((s as any).table ?? 0) + ('<li>You lost your virginity ');
        (s as any).table = ((s as any).table ?? 0) + (((((s as any).virgin_stats ?? 0)?.['birthday'] === 1) ? ('on your ' + (((s as any).virgin_stats ?? 0)?.['age_lost']) + 'th birthday ') : ('when you were ' + (((s as any).virgin_stats ?? 0)?.['age_lost']) + ' ')));
        if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'fisting') {
          (s as any).table = ((s as any).table ?? 0) + ('from fisting.');
        } else {
          if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'birth') {
            (s as any).table = ((s as any).table ?? 0) + ('when you gave birth to ' + (((s as any).kidname ?? 0)?.[0] ?? 0) + '.');
          } else {
            if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'dildo') {
              if (((s as any).virgin_stats ?? 0)?.['taker_ID'] !== 'self') {
                (s as any).table = ((s as any).table ?? 0) + ('when ' + (((s as any).virgin_stats ?? 0)?.['virgin_taker']) + ' took it with a ' + (((s as any).virgin_stats ?? 0)?.['cock_size']) + ' cm dildo.');
              } else {
                (s as any).table = ((s as any).table ?? 0) + ('when you took it with a ' + (((s as any).virgin_stats ?? 0)?.['cock_size']) + ' cm dildo.');
              }
            } else {
              if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'vaginal') {
                if (((s as any).virgin_stats ?? 0)?.['shemale'] === 1) {
                  (s as any).table = ((s as any).table ?? 0) + ('to ' + (((s as any).virgin_stats ?? 0)?.['virgin_taker']) + ', a hermaphrodite');
                } else {
                  (s as any).table = ((s as any).table ?? 0) + ('to ' + (((s as any).virgin_stats ?? 0)?.['virgin_taker']) + ',');
                }
                if (((s as any).virgin_stats ?? 0)?.['prostitute'] === 1) {
                  (s as any).table = ((s as any).table ?? 0) + (' when you sold it.');
                } else {
                  if (((s as any).virgin_stats ?? 0)?.['rape'] === 1) {
                    (s as any).table = ((s as any).table ?? 0) + (' who raped you.');
                  }
                }
                (s as any).table = ((s as any).table ?? 0) + (' \' + iif(virgin_stats[\'shemale\'] = 1, \'Her\', \'His\') + \' cock was ' + (((s as any).virgin_stats ?? 0)?.['cock_desc']) + '.');
              } else {
                if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'strapon') {
                  (s as any).table = ((s as any).table ?? 0) + ('to ' + (((s as any).virgin_stats ?? 0)?.['virgin_taker']) + ', ');
                  if (((s as any).virgin_stats ?? 0)?.['prostitute'] === 1) {
                    (s as any).table = ((s as any).table ?? 0) + ('when you sold it.');
                  } else {
                    if (((s as any).virgin_stats ?? 0)?.['rape'] === 1) {
                      (s as any).table = ((s as any).table ?? 0) + ('who raped you.');
                    }
                  }
                  if (((s as any).virgin_stats ?? 0)?.['prostitute'] === 1  ||  ((s as any).virgin_stats ?? 0)?.['rape'] === 1) {
                    (s as any).table = ((s as any).table ?? 0) + (' She used a strapon.');
                  }
                }
              }
            }
          }
        }
        if (((s as any).virgin_stats ?? 0)?.['orgasm'] === 1) {
          (s as any).table = ((s as any).table ?? 0) + (' You had an orgasm.');
        }
        (s as any).table = ((s as any).table ?? 0) + ('</li>');
      }
    }
  }
  (s as any).table = ((s as any).table ?? 0) + ('</ul>');
  (s as any).table = ((s as any).table ?? 0) + ('<li><b>Frequency & Recency</b></li>');
  (s as any).table = ((s as any).table ?? 0) + ('<ul>');
  (s as any).su_ld_keys = undefined;
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_sex_day\'      & $su_ld_labels[] = \'Sex of any kind'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_sex_day_vaginal\'  & $su_ld_labels[] = \'Vaginal sex'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_sex_day_anal\'    & $su_ld_labels[] = \'Anal sex'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_sex_day_oral\'    & $su_ld_labels[] = \'Oral sex'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_sex_day_man\'    & $su_ld_labels[] = \'Sex with a man'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_sex_day_woman\'  & $su_ld_labels[] = \'Sex with a woman'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_sex_day_herm\'    & $su_ld_labels[] = \'Sex with a herm'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_sex_day_rape\'    & $su_ld_labels[] = \'You were raped'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_creampie\'      & $su_ld_labels[] = \'A creampie'];
  (s as any).su_ld_keys = [...((s as any).su_ld_keys ?? []), 'last_mast_day\'      & $su_ld_labels[] = \'Masturbation'];
  (s as any).su_ld_i = 0;
  do {
    (s as any).su_ld_key = (((s as any).su_ld_keys ?? 0)?.[String((s as any).su_ld_i ?? 0)] ?? 0);
    (s as any).su_ld_val = (((s as any).stat ?? 0)?.[String((s as any).su_ld_key ?? 0)] ?? 0);
    if (((s as any).su_ld_val ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>\' + $su_ld_labels[su_ld_i] + \': \' + iif(su_ld_val = daystart, \'earlier today\', iif(su_ld_val = daystart - 1, \'yesterday\', (daystart - su_ld_val) + \' days ago\')) + \'</li>');
      (s as any).su_ld_known = (((s as any).stat ?? 0)?.[((s as any).su_ld_key ?? 0) + '_known'] ?? 0);
      (s as any).su_ld_hidden = (((s as any).stat ?? 0)?.[((s as any).su_ld_key ?? 0) + '_hidden'] ?? 0);
      if (((s as any).su_ld_known ?? 0) > 0  ||  ((s as any).su_ld_hidden ?? 0) > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        if (((s as any).su_ld_known ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Aware: \' + iif(su_ld_known = daystart, \'earlier today\', iif(su_ld_known = daystart - 1, \'yesterday\', (daystart - su_ld_known) + \' days ago\')) + \'</li>';
        }
        if (((s as any).su_ld_hidden ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Unaware: \' + iif(su_ld_hidden = daystart, \'earlier today\', iif(su_ld_hidden = daystart - 1, \'yesterday\', (daystart - su_ld_hidden) + \' days ago\')) + \'</li>';
        }
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
    }
    (s as any).su_ld_i = ((s as any).su_ld_i ?? 0) + (1);
    (s as any).su_ld_keys = undefined;
    if (((s as any).stat ?? 0)?.['BDSM'] > 0  ||  ((s as any).stat ?? 0)?.['BDSM_give'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>BDSM participation (sub/dom): ' + (((s as any).stat ?? 0)?.['BDSM']) + '/' + (((s as any).stat ?? 0)?.['BDSM_give']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['hookup'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>You have randomly hooked up with ' + (((s as any).stat ?? 0)?.['hookup']) + ' people.</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Sexual Partners</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).stat ?? 0)?.['men_fucked'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] > 0  &&  (!((s as any).hidden_guy ?? 0))) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + (((s as any).stat ?? 0)?.['male_sexual_partners']) + ' guys.</li>');
    } else {
      if (((s as any).stat ?? 0)?.['men_fucked'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] === 0  &&  ((s as any).hidden_guy ?? 0) > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + ((s as any).hidden_guy ?? 0) + ' guys, but you do not have any recollection of it. You still think of yourself as a virgin.</li>');
      } else {
        if (((s as any).stat ?? 0)?.['men_fucked'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] > 0  &&  ((s as any).hidden_guy ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + (((s as any).stat ?? {})?.['male_sexual_partners'] ?? 0) + ((s as any).hidden_guy ?? 0) + ' guys, but you know only about ' + (((s as any).stat ?? 0)?.['male_sexual_partners']) + ' of them.</li>');
        }
      }
    }
    if (((s as any).stat ?? 0)?.['women_fucked'] + ((s as any).stat ?? 0)?.['female_sexual_partners'] > 0  &&  (!((s as any).hidden_girl ?? 0))) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + (((s as any).stat ?? 0)?.['female_sexual_partners']) + ' girls.</li>');
    } else {
      if (((s as any).stat ?? 0)?.['women_fucked'] + ((s as any).stat ?? 0)?.['female_sexual_partners'] === 0  &&  ((s as any).hidden_girl ?? 0) > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + ((s as any).hidden_girl ?? 0) + ' girls, but you do not have any recollection of any of it.</li>');
      } else {
        if (((s as any).stat ?? 0)?.['women_fucked'] + ((s as any).stat ?? 0)?.['female_sexual_partners'] > 0  &&  ((s as any).hidden_girl ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + (((s as any).stat ?? {})?.['female_sexual_partners'] ?? 0) + ((s as any).hidden_girl ?? 0) + ' girls, but you know only about ' + (((s as any).stat ?? 0)?.['female_sexual_partners']) + ' of them.</li>');
        }
      }
    }
    if (((s as any).stat ?? 0)?.['herm_sexual_partners'] > 0  &&  ((s as any).stat ?? 0)?.['herm_hidden_sexual_partners'] === 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + (((s as any).stat ?? 0)?.['herm_sexual_partners']) + ' herms.</li>');
    } else {
      if (((s as any).stat ?? 0)?.['herm_sexual_partners'] === 0  &&  ((s as any).stat ?? 0)?.['herm_hidden_sexual_partners'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + (((s as any).stat ?? 0)?.['herm_hidden_sexual_partners']) + ' herms, but you do not have any recollection of it.</li>');
      } else {
        if (((s as any).stat ?? 0)?.['herm_sexual_partners'] > 0  &&  ((s as any).stat ?? 0)?.['herm_hidden_sexual_partners'] > 0) {
          (s as any).table = ((s as any).table ?? 0) + ('<li>You had sex with ' + (((s as any).stat ?? {})?.['herm_sexual_partners'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_sexual_partners'] ?? 0) + ' herms, but you know only about ' + (((s as any).stat ?? 0)?.['herm_sexual_partners']) + ' of them.</li>');
        }
      }
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Relationships</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).stat ?? 0)?.['dating_current'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Current partners you are dating: ' + (((s as any).stat ?? 0)?.['dating_current']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Current boyfriends: ' + (((s as any).stat ?? 0)?.['boyfriends_current']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['girlfriends_current'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Current girlfriends: ' + (((s as any).stat ?? 0)?.['girlfriends_current']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['fuckbuddies_current'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Current fuck buddies: ' + (((s as any).stat ?? 0)?.['fuckbuddies_current']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['sugardaddies_current'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Current sugar daddies: ' + (((s as any).stat ?? 0)?.['sugardaddies_current']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['husbands_current'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Current husbands: ' + (((s as any).stat ?? 0)?.['husbands_current']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['wifes_current'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Current wives: ' + (((s as any).stat ?? 0)?.['wifes_current']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['ex_boyfriends'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Ex-boyfriends: ' + (((s as any).stat ?? 0)?.['ex_boyfriends']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['ex_girlfriends'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Ex-girlfriends: ' + (((s as any).stat ?? 0)?.['ex_girlfriends']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['ex_fuckbuddies'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Ex-fuck buddies: ' + (((s as any).stat ?? 0)?.['ex_fuckbuddies']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['ex_sugardaddies'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Ex-sugar daddies: ' + (((s as any).stat ?? 0)?.['ex_sugardaddies']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['ex_husbands'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Ex-husbands: ' + (((s as any).stat ?? 0)?.['ex_husbands']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['ex_wifes'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Ex-wives: ' + (((s as any).stat ?? 0)?.['ex_wifes']) + '</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Prostitution & Exhibitionism</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).stat ?? 0)?.['porn'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Times you have watched porn: ' + (((s as any).stat ?? 0)?.['porn']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['flashlite'] > 0  ||  ((s as any).stat ?? 0)?.['flash'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Times you have flashed: ' + (((s as any).stat ?? {})?.['flashlite'] ?? 0) + (((s as any).stat ?? {})?.['flash'] ?? 0) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['voyeur'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Times you have spied on erotic displays of others: ' + (((s as any).stat ?? 0)?.['voyeur']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['voyeur_sex'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Times you have watched others have sex: ' + (((s as any).stat ?? 0)?.['voyeur_sex']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['erotic_nudity'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Times you were exposed to others\' nudity: ' + (((s as any).stat ?? 0)?.['erotic_nudity']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['prostitution_count'] > 0  ||  ((s as any).stat ?? 0)?.['hidden_prostitution_count'] > 0) {
      if ((!((s as any).bordelslutty ?? 0))) {
        (s as any).table = ((s as any).table ?? '') + '<li>Sold your body ' + (((s as any).stat ?? 0)?.['prostitution_count']) + ' times.</li>';
      }
      if (((s as any).bordelslutty ?? 0) > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Sold your body ' + ((s as any).bordelslutty ?? 0) + ' times in a brothel.</li>';
      }
      if (((s as any).stat ?? 0)?.['hidden_prostitution_count'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Sold your body ' + (((s as any).stat ?? 0)?.['hidden_prostitution_count']) + ' times, and gave all the money to your therapist. You do not remember any of it.</li>';
      }
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Nonconsensual</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).stat ?? 0)?.['rape_unaware_count'] === 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>You have been raped ' + (((s as any).stat ?? 0)?.['rape_count']) + ' times.</li>');
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] === 0  &&  ((s as any).stat ?? 0)?.['rape_unaware_count'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li>You have been raped ' + (((s as any).stat ?? 0)?.['rape_unaware_count']) + ' times, but you do not remember any of it.</li>');
      } else {
        if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).stat ?? 0)?.['rape_unaware_count'] > 0) {
          (s as any).table = ((s as any).table ?? 0) + ('<li>You have been raped ' + (((s as any).stat ?? {})?.['rape_count'] ?? 0) + (((s as any).stat ?? {})?.['rape_unaware_count'] ?? 0) + ' times, but you only remember ' + (((s as any).stat ?? 0)?.['rape_count']) + ' of them.</li>');
        }
      }
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Orgasms</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).orgasm ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>You have experienced ' + ((s as any).orgasm ?? 0) + ' orgasms.</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).orgasm_masturbate ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>' + ((s as any).orgasm_masturbate ?? 0) + ' of them from masturbation.</li>';
    }
    if (((s as any).orgasm_clit ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>' + ((s as any).orgasm_clit ?? 0) + ' of them from clitoral stimulation.</li>';
    }
    if (((s as any).orgasm_vaginal ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>' + ((s as any).orgasm_vaginal ?? 0) + ' of them vaginal orgasms.</li>';
    }
    if (((s as any).orgasm_anal ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>' + ((s as any).orgasm_anal ?? 0) + ' of them anal orgasms.</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Fluids & Creampies</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).stat ?? 0)?.['swallow'] > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>You\'ve swallowed ' + (((s as any).stat ?? 0)?.['swallow']) + ' times.</li>');
      (s as any).table = ((s as any).table ?? 0) + ('<li>That\'s about ' + (((s as any).stat ?? 0)?.['cum_swallowed_ml']) + 'ml of cum!</li>');
    }
    if (((s as any).stat ?? 0)?.['cum_facial'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>You have taken ' + (((s as any).stat ?? 0)?.['cum_facial']) + ' facials.</li>';
    }
    if (((s as any).frot ?? 0) > 0  ||  ((s as any).hump ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Your clothes have been come on ' + ((s as any).frot ?? 0) + ((s as any).hump ?? 0) + ' times.</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Personal Records</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).stat ?? 0)?.['biggest_cock'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Biggest cock you have taken vaginally: ' + (((s as any).stat ?? 0)?.['biggest_cock']) + 'cm</li>';
    }
    if (((s as any).stat ?? 0)?.['biggest_girth'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Biggest girth you have taken vaginally: ' + (((s as any).stat ?? 0)?.['biggest_girth']) + 'cm</li>';
    }
    if (((s as any).stat ?? 0)?.['biggest_cock_anal'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Biggest cock you have taken anally: ' + (((s as any).stat ?? 0)?.['biggest_cock_anal']) + 'cm</li>';
    }
    if (((s as any).stat ?? 0)?.['biggest_girth_anal'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Biggest girth you have taken anally: ' + (((s as any).stat ?? 0)?.['biggest_girth_anal']) + 'cm</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Miscellaneous</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).spank ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>You have had your ass spanked ' + ((s as any).spank ?? 0) + ' times</li>';
    }
    if (((s as any).divorced ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>You were married ' + ((s as any).divorced ?? 0) + ' times.</li>');
    }
    if (((s as any).suprdolg ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>You performed your conjugal duty for your husband ' + ((s as any).suprdolg ?? 0) + ' times</li>');
    }
    if (((s as any).stat ?? 0)?.['pee_give'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>You\'ve peed on others ' + (((s as any).stat ?? 0)?.['pee_give']) + ' times.</li>';
    }
    if (((s as any).stat ?? 0)?.['pee'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>You\'ve been peed on ' + (((s as any).stat ?? 0)?.['pee']) + ' times.</li>';
    }
    if (((s as any).swallowpee ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>You swallowed urine ' + ((s as any).swallowpee ?? 0) + ' times.</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    qspCall(s, '$menu_character', 'husb_cheat_count');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Detailed Act Breakdown</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    (s as any).temp_known = (((s as any).stat ?? {})?.['men_kissed_times'] ?? 0) + (((s as any).stat ?? {})?.['women_kissed_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_kissed_times'] ?? 0);
    (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_kissed_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_kissed_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_kissed_times'] ?? 0);
    if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li><b>Kisses received</b> (known/unknown): ' + ((s as any).temp_known ?? 0) + '/' + ((s as any).temp_unknown ?? 0) + '');
      (s as any).table = ((s as any).table ?? 0) + ('<ul>');
      if (((s as any).stat ?? 0)?.['men_kissed_times'] + ((s as any).stat ?? 0)?.['men_hidden_kissed_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Kisses from men</b>: ' + (((s as any).stat ?? 0)?.['men_kissed_times']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_kissed_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Men kissed: ' + (((s as any).stat ?? 0)?.['men_kissed']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_kissed']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['women_kissed_times'] + ((s as any).stat ?? 0)?.['women_hidden_kissed_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Kisses from women</b>: ' + (((s as any).stat ?? 0)?.['women_kissed_times']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_kissed_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Women kissed: ' + (((s as any).stat ?? 0)?.['women_kissed']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_kissed']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['herm_kissed_times'] + ((s as any).stat ?? 0)?.['herm_hidden_kissed_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Kisses from herms</b>: ' + (((s as any).stat ?? 0)?.['herm_kissed_times']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_kissed_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Herms kissed: ' + (((s as any).stat ?? 0)?.['herm_kissed']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_kissed']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['kiss'] + ((s as any).stat ?? 0)?.['hidden_kiss'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Kiss events: ' + (((s as any).stat ?? 0)?.['kiss']) + '/' + (((s as any).stat ?? 0)?.['hidden_kiss']) + '</li>';
      }
      (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    }
    (s as any).temp_known = (((s as any).stat ?? {})?.['men_jerked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_fingered_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_jerked_times'] ?? 0);
    (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_jerked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_fingered_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_jerked_times'] ?? 0);
    if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li><b>Used your hands</b> (known/unknown): ' + ((s as any).temp_known ?? 0) + '/' + ((s as any).temp_unknown ?? 0) + '');
      (s as any).table = ((s as any).table ?? 0) + ('<ul>');
      if (((s as any).stat ?? 0)?.['men_jerked_times'] + ((s as any).stat ?? 0)?.['men_hidden_jerked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Dicks jerked</b>: ' + (((s as any).stat ?? 0)?.['men_jerked_times']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_jerked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Men jerked: ' + (((s as any).stat ?? 0)?.['men_jerked']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_jerked']) + '</li>');
        if (((s as any).hja ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Jerked off your boyfriend: ' + ((s as any).hja ?? 0) + '</li>';
        }
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['women_fingered_times'] + ((s as any).stat ?? 0)?.['women_hidden_fingered_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Pussies fingered</b>: ' + (((s as any).stat ?? 0)?.['women_fingered_times']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_fingered_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Women fingered: ' + (((s as any).stat ?? 0)?.['women_fingered']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_fingered']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['herm_jerked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_jerked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Herm-Dicks jerked</b>: ' + (((s as any).stat ?? 0)?.['herm_jerked_times']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_jerked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Herms jerked: ' + (((s as any).stat ?? 0)?.['herm_jerked']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_jerked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['hj'] + ((s as any).stat ?? 0)?.['hidden_hj'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Cock jerk events: ' + (((s as any).stat ?? 0)?.['hj']) + '/' + (((s as any).stat ?? 0)?.['hidden_hj']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['vaginal_finger_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_finger_give'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Fingered a girl events: ' + (((s as any).stat ?? 0)?.['vaginal_finger_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_finger_give']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['vaginal_fist_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_fist_give'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Fisted a girl events: ' + (((s as any).stat ?? 0)?.['vaginal_fist_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_fist_give']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['anal_finger_give'] + ((s as any).stat ?? 0)?.['hidden_anal_finger_give'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Fingered someone else\'s ass: ' + (((s as any).stat ?? 0)?.['anal_finger_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_finger_give']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['anal_fist_give'] + ((s as any).stat ?? 0)?.['hidden_anal_fist_give'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Fisted someone else\'s ass: ' + (((s as any).stat ?? 0)?.['anal_fist_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_fist_give']) + '</li>';
      }
      (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    }
    (s as any).temp_known = (((s as any).stat ?? {})?.['men_feetfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_feetfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_feetfucked_times'] ?? 0);
    (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_feetfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_feetfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_feetfucked_times'] ?? 0);
    if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li><b>Used your feet</b> (known/unknown): ' + ((s as any).temp_known ?? 0) + '/' + ((s as any).temp_unknown ?? 0) + '');
      (s as any).table = ((s as any).table ?? 0) + ('<ul>');
      if (((s as any).stat ?? 0)?.['men_feetfucked_times'] + ((s as any).stat ?? 0)?.['men_hidden_feetfucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Dicks jerked with your feet</b>: ' + (((s as any).stat ?? 0)?.['men_feetfucked_times']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_feetfucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Men jerked with your feet: ' + (((s as any).stat ?? 0)?.['men_feetfucked']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_feetfucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['women_feetfucked_times'] + ((s as any).stat ?? 0)?.['women_hidden_feetfucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Pussies toed with your feet</b>: ' + (((s as any).stat ?? 0)?.['women_feetfucked_times']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_feetfucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Women toed with your feet: ' + (((s as any).stat ?? 0)?.['women_feetfucked']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_feetfucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['herm_feetfucked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_feetfucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Herm-Dicks jerked with your feet</b>: ' + (((s as any).stat ?? 0)?.['herm_feetfucked_times']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_feetfucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Herms jerked with your feet: ' + (((s as any).stat ?? 0)?.['herm_feetfucked']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_feetfucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['footjob'] + ((s as any).stat ?? 0)?.['hidden_footjob'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Feet events: ' + (((s as any).stat ?? 0)?.['footjob']) + '/' + (((s as any).stat ?? 0)?.['hidden_footjob']) + '</li>';
      }
      (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    }
    (s as any).temp_known = (((s as any).stat ?? {})?.['men_titfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_titfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_titfucked_times'] ?? 0);
    (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_titfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_titfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_titfucked_times'] ?? 0);
    if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li><b>Used your tits</b> (known/unknown): ' + ((s as any).temp_known ?? 0) + '/' + ((s as any).temp_unknown ?? 0) + '');
      (s as any).table = ((s as any).table ?? 0) + ('<ul>');
      if (((s as any).stat ?? 0)?.['men_titfucked_times'] + ((s as any).stat ?? 0)?.['men_hidden_titfucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Dicks jerked with your tits</b>: ' + (((s as any).stat ?? 0)?.['men_titfucked_times']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_titfucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Men jerked with your tits: ' + (((s as any).stat ?? 0)?.['men_titfucked']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_titfucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['women_titfucked_times'] + ((s as any).stat ?? 0)?.['women_hidden_titfucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Pussies pleasured with your tits</b>: ' + (((s as any).stat ?? 0)?.['women_titfucked_times']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_titfucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Women pleasured with your tits: ' + (((s as any).stat ?? 0)?.['women_titfucked']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_titfucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['herm_titfucked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_titfucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Herm-Dicks jerked with your tits</b>: ' + (((s as any).stat ?? 0)?.['herm_titfucked_times']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_titfucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Herms jerked with your tits: ' + (((s as any).stat ?? 0)?.['herm_titfucked']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_titfucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['titjob'] + ((s as any).stat ?? 0)?.['hidden_titjob'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Titfuck events: ' + (((s as any).stat ?? 0)?.['titjob']) + '/' + (((s as any).stat ?? 0)?.['hidden_titjob']) + '</li>';
      }
      (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    }
    (s as any).temp_known = (((s as any).stat ?? {})?.['men_blown_times'] ?? 0) + (((s as any).stat ?? {})?.['women_munched_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_blown_times'] ?? 0);
    (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_blown_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_munched_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_blown_times'] ?? 0);
    if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li><b>Used your mouth</b> (known/unknown): ' + ((s as any).temp_known ?? 0) + '/' + ((s as any).temp_unknown ?? 0) + '');
      (s as any).table = ((s as any).table ?? 0) + ('<ul>');
      if (((s as any).stat ?? 0)?.['men_blown_times'] + ((s as any).stat ?? 0)?.['men_hidden_blown_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Dicks sucked</b>: ' + (((s as any).stat ?? 0)?.['men_blown_times']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_blown_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Men sucked: ' + (((s as any).stat ?? 0)?.['men_blown']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_blown']) + '</li>');
        if (((s as any).bja ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Sucked your boyfriends cock: ' + ((s as any).bja ?? 0) + '</li>';
        }
        if (((s as any).stat ?? 0)?.['gloryhole'] + ((s as any).stat ?? 0)?.['hidden_gloryhole'] > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Gloryhole: ' + (((s as any).stat ?? 0)?.['gloryhole']) + '/' + (((s as any).stat ?? 0)?.['hidden_gloryhole']) + '</li>';
        }
        if (((s as any).furibj ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Sucked off truckers for a ride ' + ((s as any).furibj ?? 0) + ' times</li>';
        }
        if (((s as any).furi ?? 0)?.['road_head_girl'] === 1) {
          (s as any).table = ((s as any).table ?? '') + '<li>The truckers who drive the lorries nicknamed you "Road Head Girl".</li>';
        }
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['women_munched_times'] + ((s as any).stat ?? 0)?.['women_hidden_munched_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Pussies munched</b>: ' + (((s as any).stat ?? 0)?.['women_munched_times']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_munched_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Women munched: ' + (((s as any).stat ?? 0)?.['women_munched']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_munched']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['herm_blown_times'] + ((s as any).stat ?? 0)?.['herm_hidden_blown_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Herm-Dicks sucked</b>: ' + (((s as any).stat ?? 0)?.['herm_blown_times']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_blown_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Herms sucked: ' + (((s as any).stat ?? 0)?.['herm_blown']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_blown']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['bj'] + ((s as any).stat ?? 0)?.['hidden_bj'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Cock suck events: ' + (((s as any).stat ?? 0)?.['bj']) + '/' + (((s as any).stat ?? 0)?.['hidden_bj']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['cuni_give'] + ((s as any).stat ?? 0)?.['hidden_cuni_give'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Performed cunnilingus events: ' + (((s as any).stat ?? 0)?.['cuni_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_cuni_give']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['rimming_give'] + ((s as any).stat ?? 0)?.['hidden_rimming_give'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Rimmed someone: ' + (((s as any).stat ?? 0)?.['rimming_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_rimming_give']) + '</li>';
      }
      (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    }
    (s as any).temp_known = (((s as any).stat ?? {})?.['men_vaginal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_vaginal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_vaginal_fucked_times'] ?? 0);
    (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_vaginal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_vaginal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_vaginal_fucked_times'] ?? 0);
    if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li><b>Used your pussy</b> (known/unknown): ' + ((s as any).temp_known ?? 0) + '/' + ((s as any).temp_unknown ?? 0) + '');
      (s as any).table = ((s as any).table ?? 0) + ('<ul>');
      if (((s as any).stat ?? 0)?.['men_vaginal_fucked_times'] + ((s as any).stat ?? 0)?.['men_hidden_vaginal_fucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Fucked by men</b>: ' + (((s as any).stat ?? 0)?.['men_vaginal_fucked_times']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_vaginal_fucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Men fucked: ' + (((s as any).stat ?? 0)?.['men_vaginal_fucked']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_vaginal_fucked']) + '</li>');
        if (((s as any).sexa ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Vaginal sex with your boyfriend: ' + ((s as any).sexa ?? 0) + '</li>';
        }
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['women_vaginal_fucked_times'] + ((s as any).stat ?? 0)?.['women_hidden_vaginal_fucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Fucked by women</b>: ' + (((s as any).stat ?? 0)?.['women_vaginal_fucked_times']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_vaginal_fucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Women fucked: ' + (((s as any).stat ?? 0)?.['women_vaginal_fucked']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_vaginal_fucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['herm_vaginal_fucked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_vaginal_fucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Fucked by Herms</b>: ' + (((s as any).stat ?? 0)?.['herm_vaginal_fucked_times']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_vaginal_fucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Herms fucked: ' + (((s as any).stat ?? 0)?.['herm_vaginal_fucked']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_vaginal_fucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['vaginal'] + ((s as any).stat ?? 0)?.['hidden_vaginal'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Cock fuck events: ' + (((s as any).stat ?? 0)?.['vaginal']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['vaginal_dildo'] + ((s as any).stat ?? 0)?.['hidden_vaginal_dildo'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Dildo fuck events: ' + (((s as any).stat ?? 0)?.['vaginal_dildo']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_dildo']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['vaginal_strap'] + ((s as any).stat ?? 0)?.['hidden_vaginal_strap'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Strap fuck events: ' + (((s as any).stat ?? 0)?.['vaginal_strap']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_strap']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['vaginal_vibe'] + ((s as any).stat ?? 0)?.['hidden_vaginal_vibe'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Vibrator fuck events: ' + (((s as any).stat ?? 0)?.['vaginal_vibe']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_vibe']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['trib'] + ((s as any).stat ?? 0)?.['hidden_trib'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Tribadism events: ' + (((s as any).stat ?? 0)?.['trib']) + '/' + (((s as any).stat ?? 0)?.['hidden_trib']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li>Known vaginal creampies:</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>You have been cum inside ' + (((s as any).stat ?? 0)?.['total_creampies']) + ' times you can remember.</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>A grand total of ' + (((s as any).stat ?? 0)?.['cum_vagina_ml']) + 'ml have been deposited in your vagina.</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        if (((s as any).stat ?? 0)?.['creampies_safe_known'] > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>You were safe for ' + (((s as any).stat ?? 0)?.['creampies_safe_known']) + ' of those times.</li>';
        }
        if (((s as any).stat ?? 0)?.['creampies_notsafe_known'] > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>You were a little unsafe ' + (((s as any).stat ?? 0)?.['creampies_notsafe_known']) + ' of those times.</li>';
        }
        if (((s as any).stat ?? 0)?.['creampies_risky_known'] > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>You were at risk of pregnancy ' + (((s as any).stat ?? 0)?.['creampies_risky_known']) + ' of those times.</li>';
        }
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if ((((s as any).stat ?? 0)?.['creampies_safe_unknown'] + ((s as any).stat ?? 0)?.['creampies_notsafe_unknown'] + ((s as any).stat ?? 0)?.['creampies_risky_unknown']) > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li>Unknown vaginal creampies:</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        if (((s as any).stat ?? 0)?.['creampies_safe_unknown'] > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Safe: ' + (((s as any).stat ?? 0)?.['creampies_safe_unknown']) + '</li>';
        }
        if (((s as any).stat ?? 0)?.['creampies_notsafe_unknown'] > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Likely safe: ' + (((s as any).stat ?? 0)?.['creampies_notsafe_unknown']) + '</li>';
        }
        if (((s as any).stat ?? 0)?.['creampies_risky_unknown'] > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Risky: ' + (((s as any).stat ?? 0)?.['creampies_risky_unknown']) + '</li>';
        }
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    }
    (s as any).temp_known = (((s as any).stat ?? {})?.['men_anal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_anal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_anal_fucked_times'] ?? 0);
    (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_anal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_anal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_anal_fucked_times'] ?? 0);
    if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li><b>Used your asshole</b> (known/unknown): ' + ((s as any).temp_known ?? 0) + '/' + ((s as any).temp_unknown ?? 0) + '');
      (s as any).table = ((s as any).table ?? 0) + ('<ul>');
      if (((s as any).stat ?? 0)?.['men_anal_fucked_times'] + ((s as any).stat ?? 0)?.['men_hidden_anal_fucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Anal fucked by men</b>: ' + (((s as any).stat ?? 0)?.['men_anal_fucked_times']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_anal_fucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Men anal fucked: ' + (((s as any).stat ?? 0)?.['men_anal_fucked']) + '/' + (((s as any).stat ?? 0)?.['men_hidden_anal_fucked']) + '</li>');
        if (((s as any).anala ?? 0) > 0) {
          (s as any).table = ((s as any).table ?? '') + '<li>Anal sex with your boyfriend: ' + ((s as any).anala ?? 0) + '</li>';
        }
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['women_anal_fucked_times'] + ((s as any).stat ?? 0)?.['women_hidden_anal_fucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Anal fucked by women</b>: ' + (((s as any).stat ?? 0)?.['women_anal_fucked_times']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_anal_fucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Women anal fucked: ' + (((s as any).stat ?? 0)?.['women_anal_fucked']) + '/' + (((s as any).stat ?? 0)?.['women_hidden_anal_fucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['herm_anal_fucked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_anal_fucked_times'] > 0) {
        (s as any).table = ((s as any).table ?? 0) + ('<li><b>Anal fucked by herms</b>: ' + (((s as any).stat ?? 0)?.['herm_anal_fucked_times']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_anal_fucked_times']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('<ul>');
        (s as any).table = ((s as any).table ?? 0) + ('<li>Herms anal fucked: ' + (((s as any).stat ?? 0)?.['herm_anal_fucked']) + '/' + (((s as any).stat ?? 0)?.['herm_hidden_anal_fucked']) + '</li>');
        (s as any).table = ((s as any).table ?? 0) + ('</ul>');
      }
      if (((s as any).stat ?? 0)?.['anal'] + ((s as any).stat ?? 0)?.['hidden_anal'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Cock anal fuck events: ' + (((s as any).stat ?? 0)?.['anal']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['anal_dildo'] + ((s as any).stat ?? 0)?.['hidden_anal_dildo'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Dildo anal fuck events: ' + (((s as any).stat ?? 0)?.['anal_dildo']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_dildo']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['anal_strap'] + ((s as any).stat ?? 0)?.['hidden_anal_strap'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Strap anal fuck events: ' + (((s as any).stat ?? 0)?.['anal_strap']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_strap']) + '</li>';
      }
      if (((s as any).stat ?? 0)?.['anal_vibe'] + ((s as any).stat ?? 0)?.['hidden_anal_vibe'] > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Vibrator anal fuck events: ' + (((s as any).stat ?? 0)?.['anal_vibe']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_vibe']) + '</li>';
      }
      if (((s as any).pcs_acp_known ?? 0) > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Known anal creampies: ' + ((s as any).pcs_acp_known ?? 0) + '</li>';
      }
      if (((s as any).pcs_acp_unknown ?? 0) > 0) {
        (s as any).table = ((s as any).table ?? '') + '<li>Unknown anal creampies: ' + ((s as any).pcs_acp_unknown ?? 0) + '</li>';
      }
      (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    }
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Toys & Extras</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).kuni ?? 0) + ((s as any).stat ?? 0)?.['cuni'] + ((s as any).stat ?? 0)?.['hidden_cuni'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Received cunnilingus (known/unknown): ' + (((s as any).stat ?? 0)?.['cuni']) + '/' + (((s as any).stat ?? 0)?.['hidden_cuni']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['vaginal_finger'] + ((s as any).stat ?? 0)?.['hidden_vaginal_finger'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Fingered (known/unknown): ' + (((s as any).stat ?? 0)?.['vaginal_finger']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_finger']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['vaginal_fist'] + ((s as any).stat ?? 0)?.['vaginal_fist'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Fisted (known/unknown): ' + (((s as any).stat ?? 0)?.['vaginal_fist']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_fist']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['anal_finger'] + ((s as any).stat ?? 0)?.['hidden_anal_finger'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Anally fingered (known/unknown): ' + (((s as any).stat ?? 0)?.['anal_finger']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_finger']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['anal_fist'] + ((s as any).stat ?? 0)?.['hidden_anal_fist']> 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Anally fisted (known/unknown): ' + (((s as any).stat ?? 0)?.['anal_fist']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_fist']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['rimming'] + ((s as any).stat ?? 0)?.['hidden_rimming'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Ass rimmed (known/unknown): ' + (((s as any).stat ?? 0)?.['rimming']) + '/' + (((s as any).stat ?? 0)?.['hidden_rimming']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['vaginal_dildo_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_dildo_give'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Dildoed a girl (known/unknown): ' + (((s as any).stat ?? 0)?.['vaginal_dildo_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_dildo_give']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['vaginal_strap_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_strap_give'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Strap-on fucked a girl (known/unknown): ' + (((s as any).stat ?? 0)?.['vaginal_strap_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_strap_give']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['vaginal_vibe_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_vibe_give'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Used vibrator on a girl (known/unknown): ' + (((s as any).stat ?? 0)?.['vaginal_vibe_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_vaginal_vibe_give']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['anal_dildo_give'] + ((s as any).stat ?? 0)?.['hidden_anal_dildo_give'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Dildoed someone else\'s ass (known/unknown): ' + (((s as any).stat ?? 0)?.['anal_dildo_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_dildo_give']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['anal_vibe_give'] + ((s as any).stat ?? 0)?.['hidden_anal_vibe_give'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Used a vibrator on someone else\'s ass (known/unknown): ' + (((s as any).stat ?? 0)?.['anal_vibe_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_vibe_give']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['anal_strap_give'] + ((s as any).stat ?? 0)?.['hidden_anal_strap_give'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Fucked someone else\'s ass with a strap-on (known/unknown): ' + (((s as any).stat ?? 0)?.['anal_strap_give']) + '/' + (((s as any).stat ?? 0)?.['hidden_anal_strap_give']) + '</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li><b>Group & Public Sex</b></li>');
    (s as any).table = ((s as any).table ?? 0) + ('<ul>');
    if (((s as any).stat ?? 0)?.['lesbian_count'] + ((s as any).stat ?? 0)?.['lesbian_unaware_count'] > 0) {
      (s as any).table = ((s as any).table ?? 0) + ('<li>Lesbian sex (known/unknown): ' + (((s as any).stat ?? 0)?.['lesbian_count']) + '/' + (((s as any).stat ?? 0)?.['lesbian_unaware_count']) + '</li>');
    }
    if (((s as any).stat ?? 0)?.['groupsex_count'] + ((s as any).stat ?? 0)?.['groupsex_unaware_count'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Group sex (known/unknown): ' + (((s as any).stat ?? 0)?.['groupsex_count']) + '/' + (((s as any).stat ?? 0)?.['groupsex_unaware_count']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['orgy_count'] + ((s as any).stat ?? 0)?.['orgy_unaware_count'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Orgy sex (known/unknown): ' + (((s as any).stat ?? 0)?.['orgy_count']) + '/' + (((s as any).stat ?? 0)?.['orgy_unaware_count']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['gangbang_count'] + ((s as any).stat ?? 0)?.['gangbang_unaware_count'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Gangbang sex (known/unknown): ' + (((s as any).stat ?? 0)?.['gangbang_count']) + '/' + (((s as any).stat ?? 0)?.['gangbang_unaware_count']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['public_hj'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Handjobs given in public: ' + (((s as any).stat ?? 0)?.['public_hj']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['public_bj'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Blowjobs given in public: ' + (((s as any).stat ?? 0)?.['public_bj']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['public_sex'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Vaginal sex in public: ' + (((s as any).stat ?? 0)?.['public_sex']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['public_anal'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Anal sex in public: ' + (((s as any).stat ?? 0)?.['public_anal']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['park_flash'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Times flashed in the park: ' + (((s as any).stat ?? 0)?.['park_flash']) + '</li>';
    }
    if (((s as any).stat ?? 0)?.['parents_home_sex'] > 0) {
      (s as any).table = ((s as any).table ?? '') + '<li>Times had sex at your parents\' home: ' + (((s as any).stat ?? 0)?.['parents_home_sex']) + '</li>';
    }
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('</td>');
    (s as any).table = ((s as any).table ?? 0) + ('<td width="50%" valign="top" align="left">');
    (s as any).table = ((s as any).table ?? 0) + ('<br><ul>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Feet preference: ' + qspFunc(s, 'fetish', 'get_pref', 'feet') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Foot jobs/worship: ' + qspFunc(s, 'fetish', 'get_exp', 'feet') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Deepthroat preference: ' + qspFunc(s, 'fetish', 'get_pref', 'deepthroat') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Deepthroated: ' + qspFunc(s, 'fetish', 'get_exp', 'deepthroat') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Group preference: ' + qspFunc(s, 'fetish', 'get_pref', 'group') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Group acts: ' + qspFunc(s, 'fetish', 'get_exp', 'group') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Orgy preference: ' + qspFunc(s, 'fetish', 'get_pref', 'orgy') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Orgies: ' + qspFunc(s, 'fetish', 'get_exp', 'orgy') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Gangbang preference: ' + qspFunc(s, 'fetish', 'get_pref', 'gangbang') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Gangbangs: ' + qspFunc(s, 'fetish', 'get_exp', 'gangbang') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Humiliation preference: ' + qspFunc(s, 'fetish', 'get_pref', 'humiliation') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Humiliation experiences: ' + qspFunc(s, 'fetish', 'get_exp', 'humiliation') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Prostitution preference: ' + qspFunc(s, 'fetish', 'get_pref', 'prostitution') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Prostituted yourself: ' + qspFunc(s, 'fetish', 'get_exp', 'prostitution') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Bondage preference: ' + qspFunc(s, 'fetish', 'get_pref', 'bound') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Bondage play: ' + qspFunc(s, 'fetish', 'get_exp', 'bound') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Masochism preference: ' + qspFunc(s, 'fetish', 'get_pref', 'maso') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Masochism experiences: ' + qspFunc(s, 'fetish', 'get_exp', 'maso') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Bestiality encounters: ' + qspFunc(s, 'fetish', 'get_pref', 'beast') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Bestiality experience: ' + qspFunc(s, 'fetish', 'get_exp', 'beast') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Rough acts preference: ' + qspFunc(s, 'fetish', 'get_pref', 'rough') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Rough acts: ' + qspFunc(s, 'fetish', 'get_exp', 'rough') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Incest preference: ' + qspFunc(s, 'fetish', 'get_pref', 'incest') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('<li>Incestuous acts: ' + qspFunc(s, 'fetish', 'get_exp', 'incest') + '</li>');
    (s as any).table = ((s as any).table ?? 0) + ('</ul>');
    (s as any).table = ((s as any).table ?? 0) + ('</td>');
    (s as any).table = ((s as any).table ?? 0) + ('</tr>');
    (s as any).table = ((s as any).table ?? 0) + ('</table>');
    scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
    (s as any).table = undefined;
  } while (((s as any).su_ld_i ?? 0) < Object.keys((s as any).su_ld_keys ?? {}).length);
  scene.build();
}

function enterHusbCheatCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
    return;
  }
  (s as any).guy_cheat = (((s as any).stat ?? {})?.['men_fucked'] ?? 0) - (((s as any).spouseVars ?? {})?.['men_fucked_before'] ?? 0);
  (s as any).girl_cheat = (((s as any).stat ?? {})?.['women_fucked'] ?? 0) - (((s as any).spouseVars ?? {})?.['women_fucked_before'] ?? 0);
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).girl_cheat ?? 0) > 0  &&  ((s as any).guy_cheat ?? 0) > 0) {
      scene.text(`During your marriage you have cheated on your husband with ${((s as any).guy_cheat ?? '')} guys and ${((s as any).girl_cheat ?? '')} girls.`);
    } else {
      if (((s as any).guy_cheat ?? 0) > 0) {
        scene.text(`During your marriage you have cheated on your husband with ${((s as any).guy_cheat ?? '')} guys.`);
      } else {
        if (((s as any).girl_cheat ?? 0) > 0) {
          scene.text(`During your marriage you have cheated on your husband with ${((s as any).girl_cheat ?? '')} girls.`);
        }
      }
    }
  } else {
    if (((s as any).girl_cheat ?? 0) > 0  &&  ((s as any).guy_cheat ?? 0) > 0) {
      scene.text(`During your marriage you have cheated on your wife with ${((s as any).guy_cheat ?? '')} guys and ${((s as any).girl_cheat ?? '')} girls.`);
    } else {
      if (((s as any).guy_cheat ?? 0) > 0) {
        scene.text(`During your marriage you have cheated on your wife with ${((s as any).guy_cheat ?? '')} guys.`);
      } else {
        if (((s as any).girl_cheat ?? 0) > 0) {
          scene.text(`During your marriage you have cheated on your wife with ${((s as any).girl_cheat ?? '')} girls.`);
        }
      }
    }
  }
  (s as any).guy_cheat = undefined;
  (s as any).girl_cheat = undefined;
  scene.build();
}

function enterKidlist(s: GameState, scene: SceneBuilder): void {
  (s as any).kidnumber = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).kidage ?? 0)?.[String((s as any).kidnumber ?? 0)] < 1) {
    if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).kidnumber ?? 0)]) < 1  &&  (((s as any).day ?? 0)-((s as any).daykid ?? 0)?.[String((s as any).kidnumber ?? 0)]) < 7) {
      ((s as any).kiddaycalc = (s as any).kiddaycalc ?? {})[String((s as any).kidnumber ?? 0)] = ((s as any).day ?? 0) - (((s as any).daykid ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0);
      if (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] === 0) {
        ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'was born today';
      } else {
        if (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] === 1) {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'is ' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0) + ' day old';
        } else {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'is ' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0) + ' days old';
        }
      }
    } else {
      if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).kidnumber ?? 0)]) < 1) {
        ((s as any).kiddaycalc = (s as any).kiddaycalc ?? {})[String((s as any).kidnumber ?? 0)] = (((s as any).day ?? 0) - (((s as any).daykid ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0)) / 7;
        if (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] === 1) {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'is ' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0) + ' week old';
        } else {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'is ' + (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0) + ' weeks old';
        }
      } else {
        ((s as any).kidmonthcalc = (s as any).kidmonthcalc ?? {})[String((s as any).kidnumber ?? 0)] = (((s as any).month ?? 0) - (((s as any).monthkid ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0));
        if (((s as any).kidmonthcalc ?? 0)?.[String((s as any).kidnumber ?? 0)] === 1) {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'is ' + (((s as any).kidmonthcalc ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0) + ' month old';
        } else {
          ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'is ' + (((s as any).kidmonthcalc ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0) + ' months old';
        }
      }
    }
  } else {
    if (((s as any).kidage ?? 0)?.[String((s as any).kidnumber ?? 0)] === 1) {
      ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'is ' + (((s as any).kidage ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0) + ' year old';
    } else {
      ((s as any).kidagetext = (s as any).kidagetext ?? {})[String((s as any).kidnumber ?? 0)] = 'is ' + (((s as any).kidage ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0) + ' years old';
    }
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).kidnumber ?? 0)] === 0) {
    ((s as any).sdtext = (s as any).sdtext ?? {})[String((s as any).kidnumber ?? 0)] = 'daughter';
    ((s as any).kidPosProPN = (s as any).kidPosProPN ?? {})[String((s as any).kidnumber ?? 0)] = 'She';
  } else {
    ((s as any).sdtext = (s as any).sdtext ?? {})[String((s as any).kidnumber ?? 0)] = 'son';
    ((s as any).kidPosProPN = (s as any).kidPosProPN ?? {})[String((s as any).kidnumber ?? 0)] = 'He';
  }
  (s as any).kidnumber = undefined;
  scene.build();
}

function enterPain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Pain');
  scene.text('<center><h1>Pain</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  if (((s as any).pain ?? 0)?.['head'] > 0) {
    if (((s as any).pain ?? 0)?.['head'] > 70) {
      scene.text('<center><b>Your head is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['head'] > 40) {
        scene.text('Your head is very sore.');
      } else {
        scene.text('Your head hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['hair'] > 0) {
    if (((s as any).pain ?? 0)?.['hair'] > 70) {
      scene.text('<center><b>Your scalp is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['hair'] > 40) {
        scene.text('Your scalp is very sore.');
      } else {
        scene.text('Your scalp hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['ears'] > 0) {
    if (((s as any).pain ?? 0)?.['ears'] > 70) {
      scene.text('<center><b>Your ears are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['ears'] > 40) {
        scene.text('Your ears are very sore.');
      } else {
        scene.text('Your ears hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['eyebrows'] > 0) {
    if (((s as any).pain ?? 0)?.['eyebrows'] > 70) {
      scene.text('<center><b>Your eyebrows are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['eyebrows'] > 40) {
        scene.text('Your eyebrows are very sore.');
      } else {
        scene.text('Your eyebrows hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['eyes'] > 0) {
    if (((s as any).pain ?? 0)?.['eyes'] > 70) {
      scene.text('<center><b>Your eyes are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['eyes'] > 40) {
        scene.text('Your eyes are very sore.');
      } else {
        scene.text('Your eyes hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['cheeks'] > 0) {
    if (((s as any).pain ?? 0)?.['cheeks'] > 70) {
      scene.text('<center><b>Your cheeks are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['cheeks'] > 40) {
        scene.text('Your cheeks are very sore.');
      } else {
        scene.text('Your cheeks hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['nose'] > 0) {
    if (((s as any).pain ?? 0)?.['nose'] > 70) {
      scene.text('<center><b>Your nose is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['nose'] > 40) {
        scene.text('Your nose is very sore.');
      } else {
        scene.text('Your nose hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['mouth'] > 0) {
    if (((s as any).pain ?? 0)?.['mouth'] > 70) {
      scene.text('<center><b>Your mouth is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['mouth'] > 40) {
        scene.text('Your mouth is very sore.');
      } else {
        scene.text('Your mouth hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['jaw'] > 0) {
    if (((s as any).pain ?? 0)?.['jaw'] > 70) {
      scene.text('<center><b>Your jaw is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['jaw'] > 40) {
        scene.text('Your jaw is very sore.');
      } else {
        scene.text('Your jaw hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['lips'] > 0) {
    if (((s as any).pain ?? 0)?.['lips'] > 70) {
      scene.text('<center><b>Your lips are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['lips'] > 40) {
        scene.text('Your lips are very sore.');
      } else {
        scene.text('Your lips hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['tongue'] > 0) {
    if (((s as any).pain ?? 0)?.['tongue'] > 70) {
      scene.text('<center><b>Your tongue is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['tongue'] > 40) {
        scene.text('Your tongue is very sore.');
      } else {
        scene.text('Your tongue hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['throat'] > 0) {
    if (((s as any).pain ?? 0)?.['throat'] > 70) {
      scene.text('<center><b>Your throat is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['throat'] > 40) {
        scene.text('Your throat is very sore.');
      } else {
        scene.text('Your throat hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['neck'] > 0) {
    if (((s as any).pain ?? 0)?.['neck'] > 70) {
      scene.text('<center><b>Your neck is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['neck'] > 40) {
        scene.text('Your neck is very sore.');
      } else {
        scene.text('Your neck hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['back'] > 0) {
    if (((s as any).pain ?? 0)?.['back'] > 70) {
      scene.text('<center><b>Your back is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['back'] > 40) {
        scene.text('Your back is very sore.');
      } else {
        scene.text('Your back hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['asscheeks'] + (((s as any).spanked ?? 0) * 24) > 0) {
    if (((s as any).pain ?? 0)?.['asscheeks'] + (((s as any).spanked ?? 0) * 24) > 70) {
      scene.text('<center><b>Your <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/pc/body/spankedass2.jpg\u0027; return s; }); return false;">asscheeks</a> are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['asscheeks'] + (((s as any).spanked ?? 0) * 24) > 40) {
        scene.text('<center><b>Your <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/pc/body/spankedass1.jpg\u0027; return s; }); return false;">asscheeks</a> are very sore.</b></center>');
      } else {
        scene.text('<center><b>Your <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/pc/body/spankedass.jpg\u0027; return s; }); return false;">asscheeks</a> hurt.</b></center>');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['asshole'] + (((s as any).agape ?? 0) * 10) > 0) {
    if (((s as any).pain ?? 0)?.['asshole'] + (((s as any).agape ?? 0) * 10) > 70) {
      scene.text('<center><b>You have an extremely sore anus and it is bleeding.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['asshole'] + (((s as any).agape ?? 0) * 10) > 40) {
        scene.text('<center><b>You have a very sore anus.</b></center>');
      } else {
        scene.text('<center><b>You have a sore and itchy anus.</b></center>');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['hips'] > 0) {
    if (((s as any).pain ?? 0)?.['hips'] > 70) {
      scene.text('<center><b>Your hips are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['hips'] > 40) {
        scene.text('Your hips are very sore.');
      } else {
        scene.text('Your hips hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['thighs'] > 0) {
    if (((s as any).pain ?? 0)?.['thighs'] > 70) {
      scene.text('<center><b>Your thighs are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['thighs'] > 40) {
        scene.text('Your thighs are very sore.');
      } else {
        scene.text('Your thighs hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['legL'] > 0) {
    if (((s as any).pain ?? 0)?.['legL'] > 70) {
      scene.text('<center><b>Your left leg is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['legL'] > 40) {
        scene.text('Your left leg is very sore.');
      } else {
        scene.text('Your left leg hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['legR'] > 0) {
    if (((s as any).pain ?? 0)?.['legR'] > 70) {
      scene.text('<center><b>Your right leg is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['legR'] > 40) {
        scene.text('Your right leg is very sore.');
      } else {
        scene.text('Your right leg hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['feet'] > 0) {
    if (((s as any).pain ?? 0)?.['feet'] > 70) {
      scene.text('<center><b>Your feet are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['feet'] > 40) {
        scene.text('Your feet are very sore.');
      } else {
        scene.text('Your feet hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['toes'] > 0) {
    if (((s as any).pain ?? 0)?.['toes'] > 70) {
      scene.text('<center><b>Your toes are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['toes'] > 40) {
        scene.text('Your toes are very sore.');
      } else {
        scene.text('Your toes foot hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['shoulders'] > 0) {
    if (((s as any).pain ?? 0)?.['shoulders'] > 70) {
      scene.text('<center><b>Your shoulders are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['shoulders'] > 40) {
        scene.text('Your shoulders are very sore.');
      } else {
        scene.text('Your shoulders hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['armL'] > 0) {
    if (((s as any).pain ?? 0)?.['armL'] > 70) {
      scene.text('<center><b>Your left arm is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['armL'] > 40) {
        scene.text('Your left arm is very sore.');
      } else {
        scene.text('Your left arm hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['armR'] > 0) {
    if (((s as any).pain ?? 0)?.['armR'] > 70) {
      scene.text('<center><b>Your right arm is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['armR'] > 40) {
        scene.text('Your right arm is very sore.');
      } else {
        scene.text('Your right arm hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['hands'] > 0) {
    if (((s as any).pain ?? 0)?.['hands'] > 70) {
      scene.text('<center><b>Your hands are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['hands'] > 40) {
        scene.text('Your hands are very sore.');
      } else {
        scene.text('Your hands hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['fingers'] > 0) {
    if (((s as any).pain ?? 0)?.['fingers'] > 70) {
      scene.text('<center><b>Your fingers are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['fingers'] > 40) {
        scene.text('Your fingers are very sore.');
      } else {
        scene.text('Your fingers hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['chest'] > 0) {
    if (((s as any).pain ?? 0)?.['chest'] > 70) {
      scene.text('<center><b>Your chest is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['chest'] > 40) {
        scene.text('Your chest is very sore.');
      } else {
        scene.text('Your chest hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['breasts'] > 0) {
    if (((s as any).pain ?? 0)?.['breasts'] > 70) {
      scene.text('<center><b>Your breasts are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['breasts'] > 40) {
        scene.text('Your breasts are very sore.');
      } else {
        scene.text('Your breasts hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['nipples'] > 0) {
    if (((s as any).pain ?? 0)?.['nipples'] > 70) {
      scene.text('<center><b>Your nipples are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['nipples'] > 40) {
        scene.text('Your nipples are very sore.');
      } else {
        scene.text('Your nipples hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['ribs'] > 0) {
    if (((s as any).pain ?? 0)?.['ribs'] > 70) {
      scene.text('<center><b>Your ribs are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['ribs'] > 40) {
        scene.text('Your ribs are very sore.');
      } else {
        scene.text('Your ribs hurt.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['tummy'] > 0) {
    if (((s as any).pain ?? 0)?.['tummy'] > 70) {
      scene.text('<center><b>Your tummy is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['tummy'] > 40) {
        scene.text('Your tummy is very sore.');
      } else {
        scene.text('Your tummy hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['pubic'] > 0) {
    if (((s as any).pain ?? 0)?.['pubic'] > 70) {
      scene.text('<center><b>Your pubis is extremely painful.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['pubic'] > 40) {
        scene.text('Your pubis is very sore.');
      } else {
        scene.text('Your pubis hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['labia'] > 0) {
    if (((s as any).pain ?? 0)?.['labia'] > 70) {
      scene.text('<center><b>Your labia is extremely painful.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['labia'] > 40) {
        scene.text('Your labia is very sore.');
      } else {
        scene.text('Your labia hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['vaginal'] + (((s as any).vgape ?? 0) * 8) > 0) {
    if (((s as any).pain ?? 0)?.['vaginal'] + (((s as any).vgape ?? 0) * 8) > 70) {
      scene.text('<center><b>You have very sore vagina, you can hardly even walk, while trying to keep your feet apart.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['vaginal'] + (((s as any).vgape ?? 0) * 8) > 40) {
        scene.text('<center><b>You have a very sore vagina and you can hardly keep your feet together.</b></center>');
      } else {
        scene.text('<center><b>You have a sore vagina.</b></center>');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['clitoris'] > 0) {
    if (((s as any).pain ?? 0)?.['clitoris'] > 70) {
      scene.text('<center><b>Your clitoris is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['clitoris'] > 40) {
        scene.text('Your clitoris is very sore.');
      } else {
        scene.text('Your clitoris hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['urethra'] > 0) {
    if (((s as any).pain ?? 0)?.['urethra'] > 70) {
      scene.text('<center><b>Your urethra is extremely painful.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['urethra'] > 40) {
        scene.text('Your urethra is very sore.');
      } else {
        scene.text('Your urethra hurts.');
      }
    }
  }
  if (((s as any).pain ?? 0)?.['cervix'] > 0) {
    if (((s as any).pain ?? 0)?.['cervix'] > 70) {
      scene.text('<center><b>Your cervix is in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['cervix'] > 40) {
        scene.text('Your cervix is very sore.');
      } else {
        scene.text('Your cervix hurts.');
      }
    }
  }
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterArchetypes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Archetypes');
  scene.text('<center><h2>Archetypes</h2></center>');
  qspCall(s, 'archetypes', 'arch_tabs', ((String((s as any).locArgs?.[1] ?? '') !== '') ? (((s as any).locArgs?.[1] ?? 0)) : ('main')));
  if (String((s as any).locArgs?.[1] ?? '') === 'catalog') {
    qspCall(s, 'archetypes', 'cause_catalog');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'history') {
      qspCall(s, 'archetypes', 'history_page');
    } else {
      scene.text('$settings[\'table_start\']');
      qspCall(s, 'archetypes', 'display_page');
      scene.text('$settings[\'table_end\']');
    }
  }
  scene.build();
}

function enterTraits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Traits');
  scene.text('<center><h2>Traits</h2></center>');
  scene.text('$settings[\'table_start\']');
  scene.text(qspFunc(s, 'traits', 'show_all'));
  scene.text('$settings[\'table_end\']');
  scene.build();
}

function enterReputation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Renown');
  scene.text('<center><h1>Renown</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  scene.text('<center><b>Family</b></center>');
  if ((!((s as any).Enable_family_Reputation ?? 0))) {
    scene.text('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_family_Reputation = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Show details</a></center>');
  }
  if (((s as any).Enable_family_Reputation ?? 0) === 1) {
    scene.text('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_family_Reputation = s.0; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Hide details</a></center>');
    if (((s as any).rinslut ?? 0) > 0  ||  ((s as any).kavslut ?? 0) > 0) {
      scene.text('In the residential area of you are known as a whore that sleeps with Caucasians.');
    }
    if (((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) >= 5) {
      scene.text('In the residential area it is well known by all the guys that you are a whore.');
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      if (((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowDildo ?? 0) > 0  ||  ((s as any).motherKnowRaped ?? 0) > 0) {
        if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
          (s as any).motherknows = 'Your mother thinks you ';
        } else {
          (s as any).motherknows = 'Your mother knows you ';
        }
        if (((s as any).motherKnowWhore ?? 0) > 0) {
          (s as any).motherknows = ((s as any).motherknows ?? 0) + ('are sexually active and considers you a whore');
        } else {
          if (((s as any).motherKnowSpravka ?? 0) > 0) {
            (s as any).motherknows = ((s as any).motherknows ?? 0) + ('are sexually active');
          }
        }
        if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  (((s as any).motherKnowDildo ?? 0) > 0  ||  ((s as any).motherKnowRaped ?? 0) > 0)) {
          (s as any).motherknows = ((s as any).motherknows ?? '') + '. Additionally she knows you ';
        }
        if (((s as any).motherKnowDildo ?? 0) > 0) {
          (s as any).motherknows = ((s as any).motherknows ?? '') + 'masturbate with a dildo';
        }
        if (((s as any).motherKnowDildo ?? 0) > 0  &&  ((s as any).motherKnowRaped ?? 0) > 0) {
          (s as any).motherknows = ((s as any).motherknows ?? '') + ' and that you ';
        }
        if (((s as any).motherKnowRaped ?? 0) > 0) {
          (s as any).motherknows = ((s as any).motherknows ?? '') + 'were raped';
        }
        (s as any).motherknows = ((s as any).motherknows ?? 0) + ('.');
        scene.text(`${((s as any).motherknows ?? '')}`);
        (s as any).motherknows = undefined;
      }
      if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowDildo ?? 0) === 0  &&  (!((s as any).motherKnowRaped ?? 0))) {
        scene.text('Your mother thinks that you are a virgin.');
      }
      if (((s as any).brotherQW ?? 0)?.['Sex'] === 10) {
        scene.text('You and your brother have professed forbidden love to each other.');
      } else {
        if (((s as any).brotherQW ?? 0)?.['Sex'] === 9) {
          scene.text('You and your brother are siblings with benefits.');
        } else {
          if (((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
            scene.text('Your brother thinks you are a total whore.');
          } else {
            if (((s as any).evgenQW ?? 0) >= 3) {
              scene.text('Your brother thinks you are a slut.');
            } else {
              if (((s as any).brotherQW ?? 0)?.['Sex'] > 4) {
                scene.text('You are in a sexual relationship with your brother');
              } else {
                if (((s as any).brotherQW ?? 0)?.['know_slut'] === 1) {
                  scene.text('Your brother saw semen on your body and thinks that you fuck around.');
                } else {
                  if (((s as any).brotherQW ?? 0)?.['know_slut'] >= 2) {
                    scene.text('Your brother saw you in the park screwing Gopniks.');
                  } else {
                    scene.text('Your brother has a good opinion of you.');
                  }
                }
              }
            }
          }
        }
      }
      if (((s as any).sisterknowslut ?? 0) > 1  &&  ((s as any).sisboypartyQW ?? 0) >= 2) {
        scene.text('Your sister thinks you are a slut');
      } else {
        if (((s as any).sisterknowslut ?? 0) > 0) {
          scene.text('Your sister knows that you sleep around.');
        } else {
          scene.text('Your sister has a good opinion of you.');
        }
      }
      if (((s as any).brotherQW ?? 0)?.['shower_talk'] > 0) {
        scene.text(`${(((s as any).brotherQW ?? 0)?.['shower_talk'] ?? '')} - Number of conversations you've had with your brother in the shower.`);
      }
      if (((s as any).brotherQW ?? 0)?.['shower_look']) {
        scene.text('You let your brother look at you when you\'re shower');
      }
      if (((s as any).brotherQW ?? 0)?.['shave'] > 0) {
        scene.text(`${(((s as any).brotherQW ?? 0)?.['shave'] ?? '')} - Number of times you've let your brother watch you shave your pussy`);
      }
      if (((s as any).brotherQW ?? 0)?.['kiss'] > 0) {
        scene.text(`${(((s as any).brotherQW ?? 0)?.['kiss'] ?? '')} - Number of times you and your brother have kissed`);
      }
      if (((s as any).brotherQW ?? 0)?.['bj'] > 0) {
        scene.text(`${(((s as any).brotherQW ?? 0)?.['bj'] ?? '')} - Number of times you've given your brother blowjobs`);
      }
      if (((s as any).brotherQW ?? 0)?.['fuck'] + ((s as any).brotherQW ?? 0)?.['anal'] > 0) {
        scene.text(`${(((s as any).brotherQW ?? {})?.['fuck'] ?? 0) + (((s as any).brotherQW ?? {})?.['anal'] ?? 0)} - Number of times you've had sex with your brother`);
      }
    }
  }
  (s as any).temp_table = '<center><table cellpadding=20 style="table-layout: fixed">';
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th><center>Pavlovsk</center></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th><center>St. Petersburg</center></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th><center>Pushkin</center></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<th><center>Gadukino</center></th>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<td width="25%" style="vertical-align:top">');
  if ((!((s as any).Enable_pav_Reputation ?? 0))) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_pav_Reputation = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Show details</a></center>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_pav_Reputation = s.0; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Hide details</a></center>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'display_region_fames', 'pav'));
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</td><td width="25%" style="vertical-align:top">');
  if ((!((s as any).Enable_city_Reputation ?? 0))) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_city_Reputation = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Show details</a></center>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_city_Reputation = s.0; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Hide details</a></center>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'display_region_fames', 'city'));
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</td><td width="25%" style="vertical-align:top">');
  if ((!((s as any).Enable_oldtown_Reputation ?? 0))) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_oldtown_Reputation = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Show details</a></center>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_oldtown_Reputation = s.0; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Hide details</a></center>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'display_region_fames', 'pushkin'));
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</td><td width="25%" style="vertical-align:top">');
  if ((!((s as any).Enable_village_Reputation ?? 0))) {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_village_Reputation = s.1; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Show details</a></center>');
  } else {
    (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_village_Reputation = s.0; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_character\u0027, \u0027reputation\u0027); return false;">Hide details</a></center>');
    (s as any).temp_table = ((s as any).temp_table ?? 0) + (qspFunc(s, '$menu_character', '', 'display_region_fames', 'village'));
  }
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</td>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('</tr>');
  (s as any).temp_table = ((s as any).temp_table ?? 0) + ('<table></center>');
  (s as any).temp_table = undefined;
  if (((s as any).film ?? 0) > 0) {
    scene.text('<b>Pornographic Filmography</b>');
    qspCall(s, 'pornhist', 'short');
    if ((!((s as any).pfilmSTOP ?? 0))) {
      scene.text(`<font color="magenta">${((s as any).pfname ?? '')}</font> has starred in <b>${((s as any).film ?? '')}</b> porn films:`);
    } else {
      scene.text(`<font color="magenta">${((s as any).pfname ?? '')}</font> retired after <b>${((s as any).film ?? '')}</b> porn films:`);
    }
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pornhist\u0027, \u0027pdetail\u0027); return false;">View detailed Filmography</a>');
    scene.text(`${((s as any).pfilmhistory ?? '')}`);
  }
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enterDisplayRegionFames(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "
  (s as any).result = (String(((s as any).result ?? 0)).split('  ').join(''));
  scene.build();
}

function enterMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Magic');
  scene.text('<center><h1>Magic</h1></center>');
  scene.text(String(qspFunc(s, 'settings', 'table_start') || ''));
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    scene.text('You are unable to use magic.');
    scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
    return;
  }
  scene.text(`You have ${((s as any).pcs_mana ?? '')} units of mana available to you.`);
  // TODO-QSP: </center>"
  (s as any).i = undefined;
  (s as any).ThisSpellName = undefined;
  (s as any).SpellListStr = undefined;
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucpcinfo ?? 0) >= 4  &&  ((s as any).sucskill ?? 0) >= 1) {
    scene.text('<center><b>Succubus Stats</b></center>');
    scene.text(`Succubus Level = ${((s as any).succublvl ?? '')}`);
    scene.text(`Succubus XP = ${((s as any).succubxp ?? '')}`);
    scene.text(`"Food" Energy Reserve = ${0 - ((s as any).succhungry ?? '')} day(s)`);
    scene.text(`Stored Sexual Energy = ${((s as any).sucexcess ?? '')}`);
    scene.text(`Sexual Energy Storage Capacity = ${((s as any).sucstorecap ?? '')}`);
    if (((s as any).sucskill ?? 0) >= 2) {
      scene.text('You have learned to increase your storage capacity and to store energy before using it.');
    }
    if (((s as any).sucskill ?? 0) >= 3) {
      scene.text('You have learned to be more efficient in your energy handling.');
    }
    if (((s as any).sucskill ?? 0) >= 4) {
      scene.text('You have learned the accommodation ability.');
    }
  }
  scene.text(String(qspFunc(s, 'settings', 'table_end') || ''));
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).settings = (s as any).settings ?? {})['table_start'] = '<center><table width="80%" cellspacing="0" cellpadding="20" valign="top"><tr><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).settings = (s as any).settings ?? {})['table_second'] = '</td><td width="500" cellspacing="0" cellpadding="20" valign="top">';
  ((s as any).settings = (s as any).settings ?? {})['table_end'] = '</td></tr></table></center>';
  const arg = s.locArg;
  switch (arg) {
    case 'menu_exit':
      enterMenuExit(s, scene);
      break;
    case 'charactertabs':
      enterCharactertabs(s, scene);
      break;
    case 'description':
      enterDescription(s, scene);
      break;
    case 'current_home':
      enterCurrentHome(s, scene);
      break;
    case 'skills':
      enterSkills(s, scene);
      break;
    case 'skill_format_func':
      enterSkillFormatFunc(s, scene);
      break;
    case 'stats':
      enterStats(s, scene);
      break;
    case 'husb_cheat_count':
      enterHusbCheatCount(s, scene);
      break;
    case 'kidlist':
      enterKidlist(s, scene);
      break;
    case 'pain':
      enterPain(s, scene);
      break;
    case 'archetypes':
      enterArchetypes(s, scene);
      break;
    case 'traits':
      enterTraits(s, scene);
      break;
    case 'reputation':
      enterReputation(s, scene);
      break;
    case 'display_region_fames':
      enterDisplayRegionFames(s, scene);
      break;
    case 'magic':
      enterMagic(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _menu_character: LocationDef = {
  name: '_menu_character',
  title: 'You are showing signs of malnourishment. You should probably',
  region: 'other',
  enter: enter,
};
