import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  // TODO-QSP: end
  scene.build();
}

function enterCharactertabs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $tabsname[0] = 'Character'
  // TODO-QSP: $tabsaction[0] = "menu_page = 0 & gt '$menu_character', 'description'"
  // TODO-QSP: $tabsname[1] = 'Skills'
  // TODO-QSP: $tabsaction[1] = "menu_page = 1 & gt '$menu_character', 'skills'"
  // TODO-QSP: $tabsname[2] = 'Statistics'
  // TODO-QSP: $tabsaction[2] = "menu_page = 2 & gt '$menu_character', 'stats'"
  // TODO-QSP: $tabsname[3] = 'Pain'
  // TODO-QSP: $tabsaction[3] = "menu_page = 3 & gt '$menu_character', 'pain'"
  // TODO-QSP: $tabsname[4] = 'Archetypes'
  // TODO-QSP: $tabsaction[4] = "menu_page = 4 & gt '$menu_character', 'archetypes'"
  // TODO-QSP: $tabsname[5] = 'Traits'
  // TODO-QSP: $tabsaction[5] = "menu_page = 5 & gt '$menu_character', 'traits'"
  // TODO-QSP: $tabsname[6] = 'Renown'
  // TODO-QSP: $tabsaction[6] = "menu_page = 6 & gt '$menu_character', 'reputation'"
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    // TODO-QSP: $tabsname[7] = 'Magic'
    // TODO-QSP: $tabsaction[7] = "menu_page = 7 & gt '$menu_character', 'magic'"
  }
  if (String((s as any).locArgs?.[1] ?? '') !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "_menu_character" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
  }
  qspCall(s, 'tabhead', 'menu_page');
  // TODO-QSP: end
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
  // TODO-QSP: $settings['table_start']
  // TODO-QSP: dynamic text: Your name is <<$pcs_firstname>> <<$pcs_lastname>>.
  scene.text(`Your name is ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}.`);
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    // TODO-QSP: dynamic text: Your friends and family call you <<$pcs_nickname>>.
    scene.text(`Your friends and family call you ${((s as any).pcs_nickname ?? '')}.`);
  } else {
    // TODO-QSP: dynamic text: Your friends call you <<$pcs_nickname>>.
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
                  // TODO-QSP: 'Your start background is: ' + $ucase($mid($start_type['cat'], 1, 1)) + $mid($start_type['cat'], 2)
                }
              }
            }
          }
        }
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'get_accessible_property_count') === 0) {
    scene.text('You have nowhere to live, if this is an error, you can set your current home <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027current_home/u0027); return false;">here</a>.');
  } else {
    if (((s as any).home ?? 0)?.['current'] === '') {
      scene.text('You don\'t have a current home set. If this is an error, you can set your current home <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027current_home/u0027); return false;">here</a>.');
    } else {
      // TODO-QSP: dynamic text: Your current home is <a href="exec:gs ''$menu_character'', ''current_home''"><<$...
      scene.text(`Your current home is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027current_home/u0027); return false;">${((s as any).home ?? 0)?.['name'] ?? ''}</a>.`);
    }
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucpcinfo ?? 0) >= 4) {
    scene.text('You are a Succubus.');
    // TODO-QSP: dynamic text: Succubus Level: <<succublvl>>
    scene.text(`Succubus Level: ${((s as any).succublvl ?? '')}`);
  }
  if (((s as any).age ?? 0) === ((s as any).vidage ?? 0)) {
    // TODO-QSP: dynamic text: You are <<age>> years old.
    scene.text(`You are ${((s as any).age ?? '')} years old.`);
  } else {
    // TODO-QSP: dynamic text: You are <<age>> years old, but you appear to be <<vidage>>.
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
  // TODO-QSP: dynamic text: Your date of birth is <<$birthdayD>>
  scene.text(`Your date of birth is ${((s as any).birthdayD ?? '')}`);
  // TODO-QSP: dynamic text: You are <<pcs_hgt>>cm tall and <a href="exec:view $func(''$body_image'', ''body'...
  scene.text(`You are ${((s as any).pcs_hgt ?? '')}cm tall and <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: view $func(/u0027$body_image/u0027, /u0027body/u0027) */ return s; }); return false;">${((s as any).bodyVars ?? 0)?.['desc'] ?? ''}</a>.`);
  // TODO-QSP: dynamic text: Your breasts would be considered an EU <a href="exec:view $func(''$body_image'',...
  scene.text(`Your breasts would be considered an EU <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: view $func(/u0027$body_image/u0027, /u0027tits/u0027) */ return s; }); return false;">${((s as any).titsize ?? '')}</a>.`);
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
                // TODO-QSP: iif(lactation['growthsoreness_on']>0, 'Your breasts look and feel swollen and tingle at the slightes...
              } else {
                if (((s as any).pregChem ?? 0) > 1800  &&  (!((s as any).knowpreg ?? 0))) {
                  // TODO-QSP: iif(lactation['growthsoreness_on']>0, 'Your breasts look and feel swollen and tingle at the slightes...
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
    // TODO-QSP: dynamic text: Your hair: <<$face_style[''avatar_hair'']>>.
    scene.text(`Your hair: ${((s as any).face_style ?? 0)?.['avatar_hair'] ?? ''}.`);
  } else {
    // TODO-QSP: dynamic text: <<$hair>>
    scene.text(`${((s as any).hair ?? '')}`);
  }
  if (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your curls are good for another <<curly>> days.
    scene.text(`Your curls are good for another ${((s as any).curly ?? '')} days.`);
  }
  if (((s as any).defcurly ?? 0) === 1  &&  ((s as any).straight ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your hair should be straight for another <<straight>> days.
    scene.text(`Your hair should be straight for another ${((s as any).straight ?? '')} days.`);
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10  &&  ((s as any).strenbuf ?? 0) > 0  &&  (!((s as any).dounspell ?? 0))) {
    // TODO-QSP: $func('wrap', 'neg b', 'You are showing signs of malnourishment. You should probably eat more and mo...
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10  &&  ((s as any).strenbuf ?? 0) === 0  &&  (!((s as any).dounspell ?? 0))) {
    // TODO-QSP: $func('wrap', 'v_neg b', 'You are dangerously malnourished, which has led to a loss in muscle mass. ...
  }
  if (((s as any).pcs_brace ?? 0) === 1) {
    qspCall(s, 'time', 'to_date', ((s as any).dentistday ?? 0));
    // TODO-QSP: dynamic text: You are wearing a brace on your <a href="exec:gs ''obj_din'', ''show_teeth''">te...
    scene.text(`You are wearing a brace on your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027obj_din/u0027, /u0027show_teeth/u0027); return false;">teeth</a>, you can remove them on or after the ${((s as any).dateVars ?? 0)?.['day'] ?? ''}${((s as any).dateVars ?? 0)?.['suffix'] ?? ''} of ${qspUntranslated(s, "monthName[dateVars['month']]", { location: "_menu_character" })}, ${((s as any).dateVars ?? 0)?.['year'] ?? ''}.`);
  }
  // TODO-QSP: $settings['table_end']
  // TODO-QSP: end
  scene.build();
}

function enterDescription(s: GameState, scene: SceneBuilder): void {
  (s as any).BACKIMAGE = '';
  (s as any).menu_page = 0;
  qspCall(s, '$menu_character', 'charactertabs', 'Character');
  qspCall(s, 'AppearanceSystem', '');
  qspCall(s, 'body_desc', '');
  scene.text('<center><h1>Character Description</h1></center>');
  // TODO-QSP: $settings['table_start']
  // TODO-QSP: dynamic text: Your name is <<$pcs_firstname>> <<$pcs_lastname>>.
  scene.text(`Your name is ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}.`);
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    // TODO-QSP: dynamic text: Your friends and family call you <<$pcs_nickname>>.
    scene.text(`Your friends and family call you ${((s as any).pcs_nickname ?? '')}.`);
  } else {
    // TODO-QSP: dynamic text: Your friends call you <<$pcs_nickname>>.
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
                  // TODO-QSP: 'Your start background is: ' + $ucase($mid($start_type['cat'], 1, 1)) + $mid($start_type['cat'], 2)
                }
              }
            }
          }
        }
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'get_accessible_property_count') === 0) {
    scene.text('You have nowhere to live, if this is an error, you can set your current home <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027current_home/u0027); return false;">here</a>.');
  } else {
    if (((s as any).home ?? 0)?.['current'] === '') {
      scene.text('You don\'t have a current home set. If this is an error, you can set your current home <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027current_home/u0027); return false;">here</a>.');
    } else {
      // TODO-QSP: dynamic text: Your current home is <a href="exec:gs ''$menu_character'', ''current_home''"><<$...
      scene.text(`Your current home is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027current_home/u0027); return false;">${((s as any).home ?? 0)?.['name'] ?? ''}</a>.`);
    }
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucpcinfo ?? 0) >= 4) {
    scene.text('You are a Succubus.');
    // TODO-QSP: dynamic text: Succubus Level: <<succublvl>>
    scene.text(`Succubus Level: ${((s as any).succublvl ?? '')}`);
  }
  if (((s as any).age ?? 0) === ((s as any).vidage ?? 0)) {
    // TODO-QSP: dynamic text: You are <<age>> years old.
    scene.text(`You are ${((s as any).age ?? '')} years old.`);
  } else {
    // TODO-QSP: dynamic text: You are <<age>> years old, but you appear to be <<vidage>>.
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
  // TODO-QSP: dynamic text: Your date of birth is <<$birthdayD>>
  scene.text(`Your date of birth is ${((s as any).birthdayD ?? '')}`);
  // TODO-QSP: dynamic text: You are <<pcs_hgt>>cm tall and <a href="exec:view $func(''$body_image'', ''body'...
  scene.text(`You are ${((s as any).pcs_hgt ?? '')}cm tall and <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: view $func(/u0027$body_image/u0027, /u0027body/u0027) */ return s; }); return false;">${((s as any).bodyVars ?? 0)?.['desc'] ?? ''}</a>.`);
  // TODO-QSP: dynamic text: Your breasts would be considered an EU <a href="exec:view $func(''$body_image'',...
  scene.text(`Your breasts would be considered an EU <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: view $func(/u0027$body_image/u0027, /u0027tits/u0027) */ return s; }); return false;">${((s as any).titsize ?? '')}</a>.`);
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
                // TODO-QSP: iif(lactation['growthsoreness_on']>0, 'Your breasts look and feel swollen and tingle at the slightes...
              } else {
                if (((s as any).pregChem ?? 0) > 1800  &&  (!((s as any).knowpreg ?? 0))) {
                  // TODO-QSP: iif(lactation['growthsoreness_on']>0, 'Your breasts look and feel swollen and tingle at the slightes...
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
    // TODO-QSP: dynamic text: Your hair: <<$face_style[''avatar_hair'']>>.
    scene.text(`Your hair: ${((s as any).face_style ?? 0)?.['avatar_hair'] ?? ''}.`);
  } else {
    // TODO-QSP: dynamic text: <<$hair>>
    scene.text(`${((s as any).hair ?? '')}`);
  }
  if (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your curls are good for another <<curly>> days.
    scene.text(`Your curls are good for another ${((s as any).curly ?? '')} days.`);
  }
  if (((s as any).defcurly ?? 0) === 1  &&  ((s as any).straight ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your hair should be straight for another <<straight>> days.
    scene.text(`Your hair should be straight for another ${((s as any).straight ?? '')} days.`);
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10  &&  ((s as any).strenbuf ?? 0) > 0  &&  (!((s as any).dounspell ?? 0))) {
    // TODO-QSP: $func('wrap', 'neg b', 'You are showing signs of malnourishment. You should probably eat more and mo...
  }
  if (((s as any).pcs_mass ?? 0)?.['body'] < 10  &&  ((s as any).strenbuf ?? 0) === 0  &&  (!((s as any).dounspell ?? 0))) {
    // TODO-QSP: $func('wrap', 'v_neg b', 'You are dangerously malnourished, which has led to a loss in muscle mass. ...
  }
  if (((s as any).pcs_brace ?? 0) === 1) {
    qspCall(s, 'time', 'to_date', ((s as any).dentistday ?? 0));
    // TODO-QSP: dynamic text: You are wearing a brace on your <a href="exec:gs ''obj_din'', ''show_teeth''">te...
    scene.text(`You are wearing a brace on your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027obj_din/u0027, /u0027show_teeth/u0027); return false;">teeth</a>, you can remove them on or after the ${((s as any).dateVars ?? 0)?.['day'] ?? ''}${((s as any).dateVars ?? 0)?.['suffix'] ?? ''} of ${qspUntranslated(s, "monthName[dateVars['month']]", { location: "_menu_character" })}, ${((s as any).dateVars ?? 0)?.['year'] ?? ''}.`);
  }
  // TODO-QSP: $settings['table_end']
  // TODO-QSP: end
  scene.build();
}

function enterCurrentHome(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <center><h1><<$pcs_firstname>>''s Home Location</h1></center>
  scene.text(`<center><h1>${((s as any).pcs_firstname ?? '')}'s Home Location</h1></center>`);
  // TODO-QSP: $settings['table_start']
  // TODO-QSP: dynamic text: Your current home is <<$home[''name'']>>.
  scene.text(`Your current home is ${((s as any).home ?? 0)?.['name'] ?? ''}.`);
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'city_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027city_apartment/u0027); return false;">City residential apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'parents_home')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027parents_home/u0027); return false;">Parent\'s home in Pavlovsk</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'village_cottage')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027village_cottage/u0027); return false;">My cottage in the cooperative farm</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'old_town_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027old_town_apartment/u0027); return false;">Old town apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'matryona_mansion')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027matryona_mansion/u0027); return false;">Matryona mansion</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'pavlovsk_hotel')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027pavlovsk_hotel/u0027); return false;">My hotel room in Pavlovsk</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'maid_bedroom')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027maid_bedroom/u0027); return false;">Nicholas\' apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'niko_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027niko_apartment/u0027); return false;">Niko\'s apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'shulga_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027shulga_apartment/u0027); return false;">Uncle Sergey\'s apartment</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'lyceum_dorm')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027lyceum_dorm/u0027); return false;">Lyceum school</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'university_dorm')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027university_dorm/u0027); return false;">University halls</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'hunters_lodge')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027hunters_lodge/u0027); return false;">Hunter\'s lodge in Gadukino</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'shared_apartment')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027shared_apartment/u0027); return false;">Shared apartment in Pavlovsk</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'grandparents_house')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027grandparents_house/u0027); return false;">Grandparent\'s house in Gadukino</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'city_house')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027city_house/u0027); return false;">My house in the City residential district</a>');
  }
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'meynold_household')) {
    scene.text('Set current home as <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027homes_properties/u0027, /u0027set_home/u0027, /u0027meynold_household/u0027); return false;">Meynold Houshold</a>');
  }
  // TODO-QSP: $settings['table_end']
  // TODO-QSP: end
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
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'stren',  "Physical power, how much oom...
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'agil',  "Muscle response speed, accura...
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'vital',  "Base physical stamina, stayi...
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'intel',  "Raw processing power and mem...
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'react',  "How quickly the PC can respo...
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'sprt',  "Mental stamina and overall me...
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'chrsm',  "Force of personality, sort o...
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'prcptn',  "All aspects of the natural ...
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'magik',  "Measures how much power the ...
  }
  // TODO-QSP: $temp_table += '</table>'
  // TODO-QSP: dynamic text: Attractiveness - <<pcs_apprnc>>
  scene.text(`Attractiveness - ${((s as any).pcs_apprnc ?? '')}`);
  if (((s as any).pcs_splcstng ?? 0) + ((s as any).pcs_humint ?? 0) + ((s as any).pcs_persuas ?? 0) + ((s as any).pcs_observ ?? 0) > 0) {
    scene.text('<h2>Mental Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).pcs_splcstng ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'splcstng',  "The ability to Successful...
    }
    if (((s as any).pcs_humint ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'humint',  "Basic human interaction ski...
    }
    if (((s as any).pcs_persuas ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'persuas',  "Trained skill at getting p...
    }
    if (((s as any).pcs_observ ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'observ',  "trained skill in noticing o...
    }
    // TODO-QSP: $temp_table += '</table>'
  }
  if (((s as any).pcs_compskl ?? 0) + ((s as any).pcs_comphckng ?? 0) + ((s as any).pcs_hndiwrk ?? 0) + ((s as any).pcs_sewng ?? 0) + ((s as any).pcs_servng ?? 0) + ((s as any).pcs_medcn ?? 0) + ((s as any).pcs_mdlng ?? 0) + ((s as any).pcs_cleaning ?? 0) > 0) {
    scene.text('<h2>Job Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_compskl ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'compskl',    "Skill at using and repai...
    }
    if (((s as any).pcs_comphckng ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'comphckng',  "Skill at hacking compute...
    }
    if (((s as any).pcs_hndiwrk ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'hndiwrk',    "Used for non-mechanic wo...
    }
    if (((s as any).pcs_sewng ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'sewng',    "Should be self-explanatory...
    }
    if (((s as any).pcs_servng ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'servng',    "Covers all aspects of wai...
    }
    if (((s as any).pcs_medcn ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'medcn',    "Basic medical knowledge up...
    }
    if (((s as any).pcs_cleaning ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'cleaning',    "Should be self-explanat...
    }
    if (((s as any).pcs_mdlng ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'mdlng',    "Knowing how to pose and ho...
    }
    // TODO-QSP: $temp_table += '</table>'
    if (((s as any).teacher ?? 0)?.['level'] > 0) {
      // TODO-QSP: dynamic text: Teacher - credibility <<teacher[''level'']>>
      scene.text(`Teacher - credibility ${((s as any).teacher ?? 0)?.['level'] ?? ''}`);
    }
  } else {
    if (((s as any).teacher ?? 0)?.['level'] > 0) {
      scene.text('<h2>Job Skills</h2>');
      // TODO-QSP: dynamic text: Teacher - credibility <<teacher[''level'']>>
      scene.text(`Teacher - credibility ${((s as any).teacher ?? 0)?.['level'] ?? ''}`);
    }
  }
  if (((s as any).pcs_vokal ?? 0) + ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_photoskl ?? 0) + ((s as any).pcs_artskls ?? 0) + ((s as any).pcs_perform ?? 0) + ((s as any).pcs_musicprod ?? 0) > 0) {
    scene.text('<h2>Artistic Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_vokal ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'vokal',    "Should be self-explanatory...
    }
    if (((s as any).pcs_instrmusic ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'instrmusic',  "Skill at playing an ins...
    }
    if (((s as any).pcs_photoskl ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'photoskl',  "Should be self-explanator...
    }
    if (((s as any).pcs_artskls ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'artskls',    "Painting, drawing etc.<b...
    }
    if (((s as any).pcs_perform ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'perform',    "Public performances such...
    }
    if (((s as any).pcs_musicprod ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'musicprod',  "Processing music you rec...
    }
    // TODO-QSP: $temp_table += '</table>'
  }
  if (((s as any).gschoolVars ?? 0)?.['absence_count'] > 0) {
    scene.text('<h2>Other Skills</h2>');
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      if (((s as any).gschoolVars ?? 0)?.['absence_count'] > 0) {
        // TODO-QSP: dynamic text: School absenteeism - <<gschoolVars[''absence_count'']>> days
        scene.text(`School absenteeism - ${((s as any).gschoolVars ?? 0)?.['absence_count'] ?? ''} days`);
      }
    }
  }
  scene.text('</td><td width="50%" cellspacing="0" cellpadding="5" valign="top">');
  if (((s as any).pcs_run ?? 0) + ((s as any).pcs_vball ?? 0) + ((s as any).pcs_ftbll ?? 0) + ((s as any).pcs_wrstlng ?? 0) + ((s as any).pcs_chess ?? 0) + ((s as any).pcs_icesktng ?? 0) + ((s as any).pcs_gaming ?? 0) + ((s as any).pcs_pool ?? 0) > 0) {
    scene.text('<h2>Sport Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_run ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'run',    "Should be self-explanatory.<...
    }
    if (((s as any).pcs_vball ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'vball',  "Should be self-explanatory.<...
      if (((s as any).pcs_vball_block ?? 0) > 0) {
        // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'vball_block',  "Your volleyball block ...
      }
      if (((s as any).pcs_vball_rec ?? 0) > 0) {
        // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'vball_rec',  "Your volleyball receive ...
      }
      if (((s as any).pcs_vball_serve ?? 0) > 0) {
        // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'vball_serve',  "Your volleyball serve ...
      }
      if (((s as any).pcs_vball_set ?? 0) > 0) {
        // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'vball_set',  "Your volleyball setting ...
      }
      if (((s as any).pcs_vball_spike ?? 0) > 0) {
        // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'vball_spike',  "Your volleyball spike ...
      }
    }
    if (((s as any).pcs_ftbll ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'ftbll',    "Should be self-explanatory...
    }
    if (((s as any).pcs_bkbll ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'bkbll',    "Should be self-explanatory...
    }
    if (((s as any).pcs_wrstlng ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'wrstlng',    "Should be self-explanato...
    }
    if (((s as any).pcs_icesktng ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'icesktng',  "Should be self-explanator...
    }
    if (((s as any).pcs_gaming ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'gaming',    "Skill in video games.<br>...
    }
    if (((s as any).pcs_chess ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'chess',    "Should be self-explanatory...
    }
    if (((s as any).pcs_pool ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'pool',    "How skillfully you can hand...
    }
    // TODO-QSP: $temp_table += '</table>'
  }
  if (((s as any).pcs_jab ?? 0) + ((s as any).pcs_punch ?? 0) + ((s as any).pcs_kick ?? 0) + ((s as any).pcs_def ?? 0) + ((s as any).pcs_shoot ?? 0) + ((s as any).pcs_bushcraft ?? 0) > 0) {
    scene.text('<h2>Combat Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_jab ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'jab',      "Quick strikes that do not ...
    }
    if (((s as any).pcs_punch ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'punch',    "Hard strikes that are hard...
    }
    if (((s as any).pcs_kick ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'kick',    "Kicking, enough said.<br><b...
    }
    if (((s as any).pcs_def ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'def',      "Covers both blocking and d...
    }
    if (((s as any).pcs_shoot ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'shoot',    "Could be guns, bows, or sp...
    }
    if (((s as any).pcs_bushcraft ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'bushcraft',  "Skill at surviving in th...
    }
    // TODO-QSP: $temp_table += '</table>'
  }
  if (((s as any).pcs_makupskl ?? 0) + ((s as any).pcs_danc ?? 0) + ((s as any).pcs_dancero ?? 0) + ((s as any).pcs_dancpol ?? 0) + ((s as any).pcs_cheer ?? 0) + ((s as any).pcs_heels ?? 0) > 0) {
    scene.text('<h2>Beauty Skills</h2>');
    (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
    if (((s as any).pcs_makupskl ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'makupskl',  "Skill at applying makeup....
    }
    if (((s as any).pcs_danc ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'danc',    "This is the basic dance ski...
    }
    if (((s as any).pcs_dancero ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'dancero',    "This is used when indivi...
    }
    if (((s as any).pcs_dancpol ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'dancpol',    "Should be self-explanato...
    }
    if (((s as any).pcs_cheer ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'cheer',    "Should be self-explanatory...
    }
    if (((s as any).pcs_heels ?? 0) > 0) {
      // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'heels',    "Skill at walking in high h...
    }
    // TODO-QSP: $temp_table += '</table>'
  }
  scene.text('<h2>Sexual Skills</h2>');
  (s as any).temp_table = '<table><tr><th align="left">Skill</th><td>-</td><th align="center"><font color="grey">base&nbsp;/&nbsp;mod</font></th><td>-</td><td>|</td><th>Progress</th><td>|</td><td><center>▲</center></td></tr>';
  // TODO-QSP: $temp_table += $func('$menu_character', 'skill_format_func', 'inhib',    "How confident Sveta is wit...
  // TODO-QSP: $temp_table += '</table>'
  // TODO-QSP: 'Exhibitionist preference: ' + func('fetish', 'get_pref', 'exhibitionism')
  // TODO-QSP: 'Exhibitionist sex: ' + func('fetish', 'get_exp', 'exhibitionism')
  if (((s as any).SUB ?? 0) > 0) {
    // TODO-QSP: dynamic text: Submissiveness <<SUB>>
    scene.text(`Submissiveness ${((s as any).SUB ?? '')}`);
  }
  if (((s as any).pcs_dom ?? 0) > 0) {
    // TODO-QSP: dynamic text: Dominance <<pcs_dom>>
    scene.text(`Dominance ${((s as any).pcs_dom ?? '')}`);
  }
  // TODO-QSP: 'Submissive sex: ' + func('fetish', 'get_exp', 'sub')
  // TODO-QSP: 'Dominant sex: ' + func('fetish', 'get_exp', 'dom')
  // TODO-QSP: 'Lesbian sex preference: ' + func('fetish', 'get_pref', 'lesbian')
  // TODO-QSP: 'Lesbian sex: ' + func('fetish', 'get_exp', 'lesbian')
  scene.text('</td></tr></table></center>');
  // TODO-QSP: end
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
    ((s as any).temp = (s as any).temp ?? {})['skl_desc'] = (((s as any).skl_desc ?? 0)?.[((s as any).temp ?? 0)?.['skl_name']] ?? 0);
  }
  if (((s as any).temp ?? 0)?.['skl_desc'] === '') {
    ((s as any).temp = (s as any).temp ?? {})['skl_desc'] = (((s as any).att_desc ?? 0)?.[((s as any).temp ?? 0)?.['skl_name']] ?? 0);
    ((s as any).temp = (s as any).temp ?? {})['skl_desc'] = '<b>' + (String(((s as any).temp ?? 0)?.['skl_desc']).slice((1)-1, ((1)-1)+(3))) + '</b>' + (String(((s as any).temp ?? 0)?.['skl_desc']).slice((4)-1)) + '';
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
    // TODO-QSP: $result += '<td align="left">'
  } else {
    // TODO-QSP: $result += '<td align="left">&nbsp;-&nbsp;'
  }
  if (((s as any).temp ?? 0)?.['skl_popup'] === '') {
    // TODO-QSP: $result += '<<$temp[''skl_desc'']>>'
  } else {
    // TODO-QSP: $result += '<a href="exec:msg ''<<$temp["skl_popup"]>>''"><<$temp[''skl_desc'']>></a>'
  }
  // TODO-QSP: $result += '</td><td>-</td>'
  // TODO-QSP: $result += '<td align="center">'
  if (((s as any).temp ?? 0)?.['skl_only'] === 0) {
    // TODO-QSP: $result += '<<temp[''skl_lvl'']>>&nbsp;/&nbsp;<<temp[''pcs_skl'']>>'
  } else {
    // TODO-QSP: $result += '<<temp[''pcs_skl'']>>'
  }
  if (((s as any).temp ?? 0)?.['no_exp'] === 0) {
    // TODO-QSP: $result += '</td><td>-</td><td>|</td>'
    if (((s as any).temp ?? 0)?.['inverse']) {
      if (((s as any).temp ?? 0)?.['skl_lvl'] <= 0) {
        // TODO-QSP: $result += '<td align="center">Min&nbsp;Level</td><td>|</td></tr>'
        return;
      }
    } else {
      if (((s as any).temp ?? 0)?.['skl_lvl'] >= 100) {
        if (((s as any).temp ?? 0)?.['skl_name'] === 'stren'  &&  ((s as any).stren_plus_lvl ?? 0) > 0  &&  ((s as any).temp ?? 0)?.['skl_lvl'] < 200) {
          ((s as any).temp = (s as any).temp ?? {})['skl_name'] = 'stren_plus';
        } else {
          // TODO-QSP: $result += '<td align="center">Max&nbsp;Level</td><td>|</td></tr>'
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
    // TODO-QSP: $result += '<td align="center">' + $func('progressbar', 'mono:accent', temp['exp_into_level'], temp[...
    // TODO-QSP: $result += '<td>|</td>'
    // TODO-QSP: $result += '<td align="center"><<temp[''level_exp_width'']>></td>'
  }
  // TODO-QSP: $result += '</tr>'
  // TODO-QSP: end
  scene.build();
}

function enterStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Statistics');
  qspCall(s, 'housing', 'rent');
  scene.text('<center><h1>Character Statistics</h1></center>');
  // TODO-QSP: $settings['table_start']
  scene.text('<center><b>General Statistics</b></center>');
  if ((!((s as any).opPRE ?? 0))) {
    // TODO-QSP: dynamic text: It has been <<daystart - daystart_start>> days since the game started.
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
      // TODO-QSP: dynamic text: School absenteeism - <<gschoolVars[''absence_count'']>> days
      scene.text(`School absenteeism - ${((s as any).gschoolVars ?? 0)?.['absence_count'] ?? ''} days`);
    }
  }
  if ((((s as any).accessible_property ?? 0)?.['city_apartment'] === 1  &&  qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment') > 0)  ||  (((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1  &&  qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment') > 0)) {
    if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 1) {
      (s as any).rentdue = qspFunc(s, 'homes_properties', 'get_rent_amount', 'city_apartment');
      // TODO-QSP: dynamic text: You have rented an apartment in the city residential area, which is paid up for ...
      scene.text(`You have rented an apartment in the city residential area, which is paid up for <b>${qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment')}</b> days`);
      // TODO-QSP: dynamic text: The monthly rent for your city apartment is <<$func('money', 'string_price', ren...
      scene.text(`The monthly rent for your city apartment is ${qspFunc(s, 'money', 'string_price', ((s as any).rentdue ?? ''))}.`);
      if (qspFunc(s, 'money', 'can_afford', ((s as any).rentdue ?? 0))) {
        scene.text(' You can make an advance <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027money/u0027, /u0027pay/u0027, String(window.__gameStore.getState().rentdue ?? /u0027/u0027)); return false;">payment</a>.');
      } else {
        scene.text(' You can\'t afford to make an advance payment right now, but you should try to have enough money in your account, so you don\'t get evicted.');
      }
    }
    if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] > 0) {
      (s as any).rentdue = qspFunc(s, 'homes_properties', 'get_rent_amount', 'old_town_apartment');
      // TODO-QSP: dynamic text: You have rented an apartment in Pushkin, and you''re paid up for <<func(''homes_...
      scene.text(`You have rented an apartment in Pushkin, and you're paid up for ${qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment')} days`);
      // TODO-QSP: dynamic text: The monthly rent for your Pushkin apartment is <<$func('money', 'string_price', ...
      scene.text(`The monthly rent for your Pushkin apartment is ${qspFunc(s, 'money', 'string_price', ((s as any).rentdue ?? ''))}.`);
      if (qspFunc(s, 'money', 'can_afford', ((s as any).rentdue ?? 0))) {
        scene.text(' You can make an advance <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027money/u0027, /u0027pay/u0027, String(window.__gameStore.getState().rentdue ?? /u0027/u0027)); return false;">payment</a>.');
      } else {
        scene.text(' You can\'t afford to make an advance payment right now, but you should try to have enough money in your account, so you don\'t get evicted.');
      }
    }
    if (((s as any).accessible_property ?? 0)?.['city_apartment'] === 1  ||  ((s as any).accessible_property ?? 0)?.['old_town_apartment'] === 1) {
      // TODO-QSP: dynamic text: Utilities are due on the 25th of <<$monthName>>.
      scene.text(`Utilities are due on the 25th of ${((s as any).monthName ?? '')}.`);
    }
  }
  if (((s as any).kid ?? 0) === 1) {
    scene.text('You have 1 child:');
  } else {
    if (((s as any).kid ?? 0) > 1) {
      // TODO-QSP: dynamic text: You have <<kid>> children:
      scene.text(`You have ${((s as any).kid ?? '')} children:`);
    }
  }
  if (((s as any).kid ?? 0) > 0) {
    (s as any).k = 0;
    // TODO-QSP: :kidloop
    if (((s as any).k ?? 0) < ((s as any).kid ?? 0)) {
      qspCall(s, '$menu_character', 'kidlist', ((s as any).k ?? 0));
      (s as any).k = ((s as any).k ?? 0) + (1);
      // TODO-QSP: jump 'kidloop'
    }
  }
  if (((s as any).job_status ?? 0)?.['pav_voc_school_teacher'] === 'employed') {
    // TODO-QSP: dynamic text: Reputation as a teacher <<teacher[''level'']>>
    scene.text(`Reputation as a teacher ${((s as any).teacher ?? 0)?.['level'] ?? ''}`);
  }
  scene.text('<center><b>Sports Career</b></center>');
  if (((s as any).kickbox ?? 0)?.['proWin'] + ((s as any).kickbox ?? 0)?.['proLoss'] + ((s as any).kickbox ?? 0)?.['proDraw'] > 0) {
    scene.text('Professional Kickboxing Record:Win (Victory KO) - Loss (Defeat KO) - Draw');
    // TODO-QSP: dynamic text: <<kickbox[''proWin'']>> (<<kickbox[''proWinKO'']>>KO) - <<kickbox[''proLoss'']>>...
    scene.text(`${((s as any).kickbox ?? 0)?.['proWin'] ?? ''} (${((s as any).kickbox ?? 0)?.['proWinKO'] ?? ''}KO) - ${((s as any).kickbox ?? 0)?.['proLoss'] ?? ''} (${((s as any).kickbox ?? 0)?.['proLossKO'] ?? ''}KO) - ${((s as any).kickbox ?? 0)?.['proDraw'] ?? ''}`);
  }
  if (((s as any).Win ?? 0) > 0  ||  ((s as any).Loss ?? 0) > 0) {
    // TODO-QSP: dynamic text: Wins in fights <<Win>>, losses in fights <<Loss>>
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
    // TODO-QSP: dynamic text: Amateur Kickboxing Record:<br>Wins: <<kickbox[''amateurWin'']>> (<<kickbox[''ama...
    scene.text(`Amateur Kickboxing Record:<br>Wins: ${((s as any).kickbox ?? 0)?.['amateurWin'] ?? ''} (${((s as any).kickbox ?? 0)?.['amateurWinKO'] ?? ''} by KO) - Losses: ${((s as any).kickbox ?? 0)?.['amateurLoss'] ?? ''} (${((s as any).kickbox ?? 0)?.['amateurLossKO'] ?? ''} by KO) - Draws: ${((s as any).kickbox ?? 0)?.['amateurDraw'] ?? ''}`);
  }
  if (((s as any).runnerQW ?? 0)?.['races_ran'] > 0) {
    // TODO-QSP: 'You ran in <<runnerQW[''races_ran'']>> competitive race' + iif(runnerQW['races_ran'] = 1, '', 's')
  }
  if (((s as any).runnerQW ?? 0)?.['pav_wins2'] >= 3) {
    scene.text('You have won the school race trophy twice');
  } else {
    if (((s as any).runnerQW ?? 0)?.['pav_wins1'] >= 3) {
      scene.text('You have won a school race trophy');
    }
  }
  if (((s as any).runnerQW ?? 0)?.['bronze_medals'] > 0) {
    // TODO-QSP: 'As a runner you have won <<runnerQW[''bronze_medals'']>> bronze medal' + iif(runnerQW['bronze_medal...
  }
  if (((s as any).runnerQW ?? 0)?.['silver_medals'] > 0) {
    // TODO-QSP: 'As a runner you have won <<runnerQW[''silver_medals'']>> silver medal' + iif(runnerQW['silver_medal...
  }
  if (((s as any).runnerQW ?? 0)?.['gold_medals'] > 0) {
    // TODO-QSP: 'As a runner you have won <<runnerQW[''gold_medals'']>> gold medal' + iif(runnerQW['gold_medals'] = ...
  }
  if (((s as any).runnerQW ?? 0)?.['bronze_medals'] > 0) {
    // TODO-QSP: 'In the St. Petersburg Track Championship race you have won <<runnerQW[''champ_bronze'']>> bronze me...
  }
  if (((s as any).runnerQW ?? 0)?.['champ_silver'] > 0) {
    // TODO-QSP: 'In the St. Petersburg Track Championship race you have won <<runnerQW[''champ_silver'']>> silver me...
  }
  if (((s as any).runnerQW ?? 0)?.['champ_gold'] > 0) {
    // TODO-QSP: 'In the St. Petersburg Track Championship race you have won <<runnerQW[''champ_gold'']>> gold medal'...
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
      // TODO-QSP: dynamic text: You qualified for the <<year>> St. Petersburg Track Championship, taking place t...
      scene.text(`You qualified for the ${((s as any).year ?? '')} St. Petersburg Track Championship, taking place this season in the Petrovsky Stadium.`);
    }
  }
  if (((s as any).chess_win ?? 0) > 0  ||  ((s as any).chess_loss ?? 0) > 0) {
    // TODO-QSP: dynamic text: Chess Record: Win <<chess_win>>, Loss <<chess_loss>>
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
        // TODO-QSP: dynamic text: You are working as a model under the name <<$model[''firstname'']>> <<$model[''l...
        scene.text(`You are working as a model under the name ${((s as any).model ?? 0)?.['firstname'] ?? ''} ${((s as any).model ?? 0)?.['lastname'] ?? ''}.`);
      }
      // TODO-QSP: dynamic text: <<modelfoto[''shoots'']>> - Number of times you have worked as a model
      scene.text(`${((s as any).modelfoto ?? 0)?.['shoots'] ?? ''} - Number of times you have worked as a model`);
      // TODO-QSP: dynamic text: <<modelfoto[''earnings'']>> - The amount of money you''ve made modelling
      scene.text(`${((s as any).modelfoto ?? 0)?.['earnings'] ?? ''} - The amount of money you've made modelling`);
      if (((s as any).modelfoto ?? 0)?.['catalog'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''catalog'']>> - Number of catalog shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['catalog'] ?? ''} - Number of catalog shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['fashion'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''fashion'']>> - Number of fashion shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['fashion'] ?? ''} - Number of fashion shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['bikini'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''bikini'']>> - Number of swimsuit shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['bikini'] ?? ''} - Number of swimsuit shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['lingerie'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''lingerie'']>> - Number of lingerie shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['lingerie'] ?? ''} - Number of lingerie shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['trans_ling'] > 0) {
        // TODO-QSP: dynamic text:   <<modelfoto[''trans_ling'']>> of those were with transparent lingerie
        scene.text(`  ${((s as any).modelfoto ?? 0)?.['trans_ling'] ?? ''} of those were with transparent lingerie`);
      }
      if (((s as any).modelfoto ?? 0)?.['sexy'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''sexy'']>> - Number of sexy clothing shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['sexy'] ?? ''} - Number of sexy clothing shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['transparent'] > 0) {
        // TODO-QSP: dynamic text:   <<modelfoto[''transparent'']>> of those were with transparent clothing that ex...
        scene.text(`  ${((s as any).modelfoto ?? 0)?.['transparent'] ?? ''} of those were with transparent clothing that exposed your breasts`);
      }
      if (((s as any).modelfoto ?? 0)?.['fitness'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''fitness'']>> - Number of fitness shoots you have participated in
        scene.text(`${((s as any).modelfoto ?? 0)?.['fitness'] ?? ''} - Number of fitness shoots you have participated in`);
      }
      if (((s as any).modelfoto ?? 0)?.['glamour'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''glamour'']>> - Number of glamour shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['glamour'] ?? ''} - Number of glamour shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''topless'']>> - Number of topless shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['topless'] ?? ''} - Number of topless shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['nude'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''nude'']>> - Number of shoots in which you have been nude
        scene.text(`${((s as any).modelfoto ?? 0)?.['nude'] ?? ''} - Number of shoots in which you have been nude`);
      }
      if (((s as any).modelfoto ?? 0)?.['tastenude'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''tastenude'']>> - Number of shoots in which you have been nude but ...
        scene.text(`${((s as any).modelfoto ?? 0)?.['tastenude'] ?? ''} - Number of shoots in which you have been nude but not shown breasts or pussy`);
      }
      if (((s as any).modelfoto ?? 0)?.['toplessnude'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''toplessnude'']>> - Number of nude shoots you have shown your breas...
        scene.text(`${((s as any).modelfoto ?? 0)?.['toplessnude'] ?? ''} - Number of nude shoots you have shown your breasts but not your pussy`);
      }
      if (((s as any).modelfoto ?? 0)?.['fullnude'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''fullnude'']>> - Number of full frontal nude shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['fullnude'] ?? ''} - Number of full frontal nude shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['erotic'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''erotic'']>> - Number of softcore erotic shoots you''ve done
        scene.text(`${((s as any).modelfoto ?? 0)?.['erotic'] ?? ''} - Number of softcore erotic shoots you've done`);
      }
      if (((s as any).modelfoto ?? 0)?.['nip'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''nip'']>> - Number of shoots your nipples have been visible
        scene.text(`${((s as any).modelfoto ?? 0)?.['nip'] ?? ''} - Number of shoots your nipples have been visible`);
      }
      if (((s as any).modelfoto ?? 0)?.['pussy'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''pussy'']>> - Number of shoots your pussy has been visible
        scene.text(`${((s as any).modelfoto ?? 0)?.['pussy'] ?? ''} - Number of shoots your pussy has been visible`);
      }
      if (((s as any).modelfoto ?? 0)?.['bush'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''bush'']>> - Number of shoots you have had visible pubic hair
        scene.text(`${((s as any).modelfoto ?? 0)?.['bush'] ?? ''} - Number of shoots you have had visible pubic hair`);
      }
      if (((s as any).modelfoto ?? 0)?.['asshole'] > 0) {
        // TODO-QSP: dynamic text: <<modelfoto[''asshole'']>> - Number of shoots your asshole has been visible
        scene.text(`${((s as any).modelfoto ?? 0)?.['asshole'] ?? ''} - Number of shoots your asshole has been visible`);
      }
    }
  }
  if ((((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed'  ||  ((s as any).masseuse ?? 0)?.['salon_state'] !== '')  &&  ((s as any).masseuse ?? 0)?.['money_earned'] > 0) {
    scene.text('<b>Masseuse</b>');
    // TODO-QSP: dynamic text: You have earned <<func(''money'', ''string_profit'', masseuse[''money_earned''])...
    scene.text(`You have earned ${qspFunc(s, 'money', 'string_profit', ((s as any).masseuse ?? 0)?.['money_earned'] ?? '')} working at the salon as well as ${qspFunc(s, 'money', 'string_profit', (((s as any).massage ?? {})?.['shift_tips_total'] ?? 0) + (((s as any).massage ?? {})?.['sex_tips_total'] ?? 0))} in tips.`);
    if (((s as any).masseuse ?? 0)?.['nude_mass_money_earned'] > 0) {
      // TODO-QSP: dynamic text:  - <<func(''money'', ''string_profit'', masseuse[''nude_mass_money_earned''])>> ...
      scene.text(` - ${qspFunc(s, 'money', 'string_profit', ((s as any).masseuse ?? 0)?.['nude_mass_money_earned'] ?? '')} of it was made working as a nude masseuse.`);
    }
    if (((s as any).masseuse ?? 0)?.['sex_money_earned'] > 0) {
      // TODO-QSP: dynamic text:  - <<func(''money'', ''string_profit'', masseuse[''sex_money_earned''])>> of it ...
      scene.text(` - ${qspFunc(s, 'money', 'string_profit', ((s as any).masseuse ?? 0)?.['sex_money_earned'] ?? '')} of it was made working as a whore.`);
    }
    if (((s as any).massage ?? 0)?.['sex_tips_total'] > 0) {
      // TODO-QSP: dynamic text:  - <<func(''money'', ''string_profit'', massage[''sex_tips_total''])>> of your t...
      scene.text(` - ${qspFunc(s, 'money', 'string_profit', ((s as any).massage ?? 0)?.['sex_tips_total'] ?? '')} of your tips came after performing a sexual act.`);
    }
  }
  scene.text('<center><b>Miscellaneous</b></center>');
  if (((s as any).slavafuck ?? 0) > 0) {
    // TODO-QSP: 'You have let Borislav fuck you <<slavafuck>> time'+ iif(slavafuck > 1, 's', '')
  }
  if (((s as any).slava_bj ?? 0) > 0) {
    // TODO-QSP: 'You have given Borislav <<slava_bj>> blowjob'+ iif(slava_bj > 1, 's', '')
  }
  if (((s as any).maxdamage ?? 0) > 0) {
    // TODO-QSP: dynamic text: The impact force on the dynamometer <<maxdamage>> kgN
    scene.text(`The impact force on the dynamometer ${((s as any).maxdamage ?? '')} kgN`);
  }
  if (((s as any).slavafuck ?? 0) > 0  ||  ((s as any).slava_bj ?? 0) > 0  ||  ((s as any).maxdamage ?? 0) > 0) {
  }
  if (((s as any).strip_club ?? 0)?.['total_stripshows'] > 0  &&  (!((s as any).hidden_stripdancesum ?? 0))) {
    // TODO-QSP: dynamic text: You have danced <<strip_club[''total_stripshows'']>> times in the stripclub
    scene.text(`You have danced ${((s as any).strip_club ?? 0)?.['total_stripshows'] ?? ''} times in the stripclub`);
  } else {
    if (((s as any).strip_club ?? 0)?.['total_stripshows'] === 0  &&  ((s as any).hidden_stripdancesum ?? 0) > 0) {
      // TODO-QSP: dynamic text: You have danced <<hidden_stripdancesum>> times in the stripclub, but you do not ...
      scene.text(`You have danced ${((s as any).hidden_stripdancesum ?? '')} times in the stripclub, but you do not remember it`);
    } else {
      if (((s as any).strip_club ?? 0)?.['total_stripshows'] > 0  &&  ((s as any).hidden_stripdancesum ?? 0) > 0) {
        // TODO-QSP: dynamic text: You have danced <<strip_club[''total_stripshows''] + hidden_stripdancesum>> time...
        scene.text(`You have danced ${(((s as any).strip_club ?? {})?.['total_stripshows'] ?? 0) + ((s as any).hidden_stripdancesum ?? '')} times in the stripclub, but you only remember ${((s as any).strip_club ?? 0)?.['total_stripshows'] ?? ''} times`);
      }
    }
  }
  if (((s as any).profiDanceTime ?? 0) > 0) {
    // TODO-QSP: dynamic text: You danced <<profiDanceTime>> times professionally.
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
    // TODO-QSP: dynamic text: Your credibility as a teacher is <<teacher[''level'']>>
    scene.text(`Your credibility as a teacher is ${((s as any).teacher ?? 0)?.['level'] ?? ''}`);
  }
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] > 0  ||  ((s as any).university ?? 0)?.['diploma'] > 0  ||  ((s as any).teacher ?? 0)?.['level'] > 0) {
  }
  (s as any).table = '<table width="100%" border="0">';
  // TODO-QSP: $table += '<tr>'
  // TODO-QSP: $table += '<th width="40%" cellpadding align="left"><b>  Sex Statistics</b></th>'
  // TODO-QSP: $table += '<th width="40%" align="left"><b>  Fetish Statistics</b></th>'
  // TODO-QSP: $table += '</tr>'
  // TODO-QSP: $table += '<tr>'
  // TODO-QSP: $table += '<td width="50%" valign="top" align="left">'
  // TODO-QSP: $table += '<br><ul>'
  if (((s as any).stat ?? 0)?.['kiss'] > 0) {
    // TODO-QSP: $table += '<li>Times you have kissed someone: <<stat[''kiss'']>></li>'
  }
  if (((s as any).mastr ?? 0) > 0  ||  ((s as any).stat ?? 0)?.['mast'] > 0) {
    // TODO-QSP: $table += '<li>Times you have masturbated: <<stat[''mast'']>></li>'
  }
  // TODO-QSP: $table += '<li><b>Virginity & First Time</b></li>'
  // TODO-QSP: $table += '<ul>'
  (s as any).temp_known = (((s as any).stat ?? {})?.['male_sexual_partners'] ?? 0) + (((s as any).stat ?? {})?.['female_sexual_partners'] ?? 0) + (((s as any).stat ?? {})?.['herm_sexual_partners'] ?? 0);
  (s as any).temp_unknown = ((s as any).hidden_guy ?? 0) + ((s as any).hidden_girl ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_sexual_partners'] ?? 0);
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === ''  &&  ((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) === 0) {
    // TODO-QSP: $table += '<li>You have never had sex.</li>'
  } else {
    if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
      // TODO-QSP: $table += '<li>You have never had vaginal sex, but you are no longer sexually inexperienced.</li>'
    } else {
      if (((s as any).virgin_stats ?? 0)?.['unique_npc'] === 1) {
        if (((s as any).virgin_stats ?? 0)?.['taker_ID'] === 'A23') {
          if (((s as any).albinaQW ?? 0)?.['big_dildo_hurt'] === 1  ||  ((s as any).albinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
            // TODO-QSP: $table += '<li>You lost your virginity when you asked Albina to take it with a big strapon.</li>'
          } else {
            // TODO-QSP: $table += '<li>You lost your virginity when you asked Albina to take it with a strapon.</li>'
          }
        } else {
          if (((s as any).virgin_stats ?? 0)?.['taker_ID'] === 'A11') {
            if (((s as any).vasilyQW ?? 0)?.['lost_together'] === 1) {
              // TODO-QSP: $table += '<li>You lost your virginity together with your childhood friend Vasily. He said he would ...
            } else {
              // TODO-QSP: $table += '<li>You lost your virginity to your childhood friend Vasily.</li>'
            }
          }
        }
      } else {
        // TODO-QSP: $table += '<li>You lost your virginity '
        // TODO-QSP: $table += iif(virgin_stats['birthday'] = 1, 'on your <<virgin_stats[''age_lost'']>>th birthday ', 'w...
        if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'fisting') {
          // TODO-QSP: $table += 'from fisting.'
        } else {
          if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'birth') {
            // TODO-QSP: $table += 'when you gave birth to ' + $kidname[0] + '.'
          } else {
            if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'dildo') {
              if (((s as any).virgin_stats ?? 0)?.['taker_ID'] !== 'self') {
                // TODO-QSP: $table += 'when <<$virgin_stats[''virgin_taker'']>> took it with a <<virgin_stats[''cock_size'']>> c...
              } else {
                // TODO-QSP: $table += 'when you took it with a <<virgin_stats[''cock_size'']>> cm dildo.'
              }
            } else {
              if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'vaginal') {
                if (((s as any).virgin_stats ?? 0)?.['shemale'] === 1) {
                  // TODO-QSP: $table += 'to <<$virgin_stats[''virgin_taker'']>>, a hermaphrodite'
                } else {
                  // TODO-QSP: $table += 'to <<$virgin_stats[''virgin_taker'']>>,'
                }
                if (((s as any).virgin_stats ?? 0)?.['prostitute'] === 1) {
                  // TODO-QSP: $table += ' when you sold it.'
                } else {
                  if (((s as any).virgin_stats ?? 0)?.['rape'] === 1) {
                    // TODO-QSP: $table += ' who raped you.'
                  }
                }
                // TODO-QSP: $table += ' ' + iif(virgin_stats['shemale'] = 1, 'Her', 'His') + ' cock was <<$virgin_stats[''cock_d...
              } else {
                if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'strapon') {
                  // TODO-QSP: $table += 'to <<$virgin_stats[''virgin_taker'']>>, '
                  if (((s as any).virgin_stats ?? 0)?.['prostitute'] === 1) {
                    // TODO-QSP: $table += 'when you sold it.'
                  } else {
                    if (((s as any).virgin_stats ?? 0)?.['rape'] === 1) {
                      // TODO-QSP: $table += 'who raped you.'
                    }
                  }
                  if (((s as any).virgin_stats ?? 0)?.['prostitute'] === 1  ||  ((s as any).virgin_stats ?? 0)?.['rape'] === 1) {
                    // TODO-QSP: $table += ' She used a strapon.'
                  }
                }
              }
            }
          }
        }
        if (((s as any).virgin_stats ?? 0)?.['orgasm'] === 1) {
          // TODO-QSP: $table += ' You had an orgasm.'
        }
        // TODO-QSP: $table += '</li>'
      }
    }
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Frequency & Recency</b></li>'
  // TODO-QSP: $table += '<ul>'
  // TODO-QSP: $su_ld_keys[] = 'last_sex_day'      & $su_ld_labels[] = 'Sex of any kind'
  // TODO-QSP: $su_ld_keys[] = 'last_sex_day_vaginal'  & $su_ld_labels[] = 'Vaginal sex'
  // TODO-QSP: $su_ld_keys[] = 'last_sex_day_anal'    & $su_ld_labels[] = 'Anal sex'
  // TODO-QSP: $su_ld_keys[] = 'last_sex_day_oral'    & $su_ld_labels[] = 'Oral sex'
  // TODO-QSP: $su_ld_keys[] = 'last_sex_day_man'    & $su_ld_labels[] = 'Sex with a man'
  // TODO-QSP: $su_ld_keys[] = 'last_sex_day_woman'  & $su_ld_labels[] = 'Sex with a woman'
  // TODO-QSP: $su_ld_keys[] = 'last_sex_day_herm'    & $su_ld_labels[] = 'Sex with a herm'
  // TODO-QSP: $su_ld_keys[] = 'last_sex_day_rape'    & $su_ld_labels[] = 'You were raped'
  // TODO-QSP: $su_ld_keys[] = 'last_creampie'      & $su_ld_labels[] = 'A creampie'
  // TODO-QSP: $su_ld_keys[] = 'last_mast_day'      & $su_ld_labels[] = 'Masturbation'
  (s as any).su_ld_i = 0;
  // TODO-QSP: :su_ld_loop
  (s as any).su_ld_key = (((s as any).su_ld_keys ?? 0)?.[String((s as any).su_ld_i ?? 0)] ?? 0);
  (s as any).su_ld_val = (((s as any).stat ?? 0)?.[String((s as any).su_ld_key ?? 0)] ?? 0);
  if (((s as any).su_ld_val ?? 0) > 0) {
    // TODO-QSP: $table += '<li>' + $su_ld_labels[su_ld_i] + ': ' + iif(su_ld_val = daystart, 'earlier today', iif(su...
    (s as any).su_ld_known = (((s as any).stat ?? 0)?.[((s as any).su_ld_key ?? 0) + '_known'] ?? 0);
    (s as any).su_ld_hidden = (((s as any).stat ?? 0)?.[((s as any).su_ld_key ?? 0) + '_hidden'] ?? 0);
    if (((s as any).su_ld_known ?? 0) > 0  ||  ((s as any).su_ld_hidden ?? 0) > 0) {
      // TODO-QSP: $table += '<ul>'
      if (((s as any).su_ld_known ?? 0) > 0) {
        // TODO-QSP: $table += '<li>Aware: ' + iif(su_ld_known = daystart, 'earlier today', iif(su_ld_known = daystart - ...
      }
      if (((s as any).su_ld_hidden ?? 0) > 0) {
        // TODO-QSP: $table += '<li>Unaware: ' + iif(su_ld_hidden = daystart, 'earlier today', iif(su_ld_hidden = daystar...
      }
      // TODO-QSP: $table += '</ul>'
    }
  }
  (s as any).su_ld_i = ((s as any).su_ld_i ?? 0) + (1);
  if (((s as any).su_ld_i ?? 0) < Object.keys((s as any).su_ld_keys ?? {}).length) {
    // TODO-QSP: jump 'su_ld_loop'
  }
  if (((s as any).stat ?? 0)?.['BDSM'] > 0  ||  ((s as any).stat ?? 0)?.['BDSM_give'] > 0) {
    // TODO-QSP: $table += '<li>BDSM participation (sub/dom): <<stat[''BDSM'']>>/<<stat[''BDSM_give'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['hookup'] > 0) {
    // TODO-QSP: $table += '<li>You have randomly hooked up with <<stat[''hookup'']>> people.</li>'
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Sexual Partners</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).stat ?? 0)?.['men_fucked'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] > 0  &&  (!((s as any).hidden_guy ?? 0))) {
    // TODO-QSP: $table += '<li>You had sex with <<stat[''male_sexual_partners'']>> guys.</li>'
  } else {
    if (((s as any).stat ?? 0)?.['men_fucked'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] === 0  &&  ((s as any).hidden_guy ?? 0) > 0) {
      // TODO-QSP: $table += '<li>You had sex with <<hidden_guy>> guys, but you do not have any recollection of it. You...
    } else {
      if (((s as any).stat ?? 0)?.['men_fucked'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] > 0  &&  ((s as any).hidden_guy ?? 0) > 0) {
        // TODO-QSP: $table += '<li>You had sex with <<stat[''male_sexual_partners''] + hidden_guy>> guys, but you know o...
      }
    }
  }
  if (((s as any).stat ?? 0)?.['women_fucked'] + ((s as any).stat ?? 0)?.['female_sexual_partners'] > 0  &&  (!((s as any).hidden_girl ?? 0))) {
    // TODO-QSP: $table += '<li>You had sex with <<stat[''female_sexual_partners'']>> girls.</li>'
  } else {
    if (((s as any).stat ?? 0)?.['women_fucked'] + ((s as any).stat ?? 0)?.['female_sexual_partners'] === 0  &&  ((s as any).hidden_girl ?? 0) > 0) {
      // TODO-QSP: $table += '<li>You had sex with <<hidden_girl>> girls, but you do not have any recollection of any o...
    } else {
      if (((s as any).stat ?? 0)?.['women_fucked'] + ((s as any).stat ?? 0)?.['female_sexual_partners'] > 0  &&  ((s as any).hidden_girl ?? 0) > 0) {
        // TODO-QSP: $table += '<li>You had sex with <<stat[''female_sexual_partners''] + hidden_girl>> girls, but you kn...
      }
    }
  }
  if (((s as any).stat ?? 0)?.['herm_sexual_partners'] > 0  &&  ((s as any).stat ?? 0)?.['herm_hidden_sexual_partners'] === 0) {
    // TODO-QSP: $table += '<li>You had sex with <<stat[''herm_sexual_partners'']>> herms.</li>'
  } else {
    if (((s as any).stat ?? 0)?.['herm_sexual_partners'] === 0  &&  ((s as any).stat ?? 0)?.['herm_hidden_sexual_partners'] > 0) {
      // TODO-QSP: $table += '<li>You had sex with <<stat[''herm_hidden_sexual_partners'']>> herms, but you do not have...
    } else {
      if (((s as any).stat ?? 0)?.['herm_sexual_partners'] > 0  &&  ((s as any).stat ?? 0)?.['herm_hidden_sexual_partners'] > 0) {
        // TODO-QSP: $table += '<li>You had sex with <<stat[''herm_sexual_partners''] + stat[''herm_hidden_sexual_partner...
      }
    }
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Relationships</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).stat ?? 0)?.['dating_current'] > 0) {
    // TODO-QSP: $table += '<li>Current partners you are dating: <<stat[''dating_current'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
    // TODO-QSP: $table += '<li>Current boyfriends: <<stat[''boyfriends_current'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['girlfriends_current'] > 0) {
    // TODO-QSP: $table += '<li>Current girlfriends: <<stat[''girlfriends_current'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['fuckbuddies_current'] > 0) {
    // TODO-QSP: $table += '<li>Current fuck buddies: <<stat[''fuckbuddies_current'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['sugardaddies_current'] > 0) {
    // TODO-QSP: $table += '<li>Current sugar daddies: <<stat[''sugardaddies_current'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['husbands_current'] > 0) {
    // TODO-QSP: $table += '<li>Current husbands: <<stat[''husbands_current'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['wifes_current'] > 0) {
    // TODO-QSP: $table += '<li>Current wives: <<stat[''wifes_current'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['ex_boyfriends'] > 0) {
    // TODO-QSP: $table += '<li>Ex-boyfriends: <<stat[''ex_boyfriends'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['ex_girlfriends'] > 0) {
    // TODO-QSP: $table += '<li>Ex-girlfriends: <<stat[''ex_girlfriends'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['ex_fuckbuddies'] > 0) {
    // TODO-QSP: $table += '<li>Ex-fuck buddies: <<stat[''ex_fuckbuddies'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['ex_sugardaddies'] > 0) {
    // TODO-QSP: $table += '<li>Ex-sugar daddies: <<stat[''ex_sugardaddies'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['ex_husbands'] > 0) {
    // TODO-QSP: $table += '<li>Ex-husbands: <<stat[''ex_husbands'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['ex_wifes'] > 0) {
    // TODO-QSP: $table += '<li>Ex-wives: <<stat[''ex_wifes'']>></li>'
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Prostitution & Exhibitionism</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).stat ?? 0)?.['porn'] > 0) {
    // TODO-QSP: $table += '<li>Times you have watched porn: <<stat[''porn'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['flashlite'] > 0  ||  ((s as any).stat ?? 0)?.['flash'] > 0) {
    // TODO-QSP: $table += '<li>Times you have flashed: <<stat[''flashlite''] + stat[''flash'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['voyeur'] > 0) {
    // TODO-QSP: $table += '<li>Times you have spied on erotic displays of others: <<stat[''voyeur'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['voyeur_sex'] > 0) {
    // TODO-QSP: $table += '<li>Times you have watched others have sex: <<stat[''voyeur_sex'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['erotic_nudity'] > 0) {
    // TODO-QSP: $table += '<li>Times you were exposed to others'' nudity: <<stat[''erotic_nudity'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['prostitution_count'] > 0  ||  ((s as any).stat ?? 0)?.['hidden_prostitution_count'] > 0) {
    if ((!((s as any).bordelslutty ?? 0))) {
      // TODO-QSP: $table += '<li>Sold your body <<stat[''prostitution_count'']>> times.</li>'
    }
    if (((s as any).bordelslutty ?? 0) > 0) {
      // TODO-QSP: $table += '<li>Sold your body <<bordelslutty>> times in a brothel.</li>'
    }
    if (((s as any).stat ?? 0)?.['hidden_prostitution_count'] > 0) {
      // TODO-QSP: $table += '<li>Sold your body <<stat[''hidden_prostitution_count'']>> times, and gave all the money ...
    }
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Nonconsensual</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).stat ?? 0)?.['rape_unaware_count'] === 0) {
    // TODO-QSP: $table += '<li>You have been raped <<stat[''rape_count'']>> times.</li>'
  } else {
    if (((s as any).stat ?? 0)?.['rape_count'] === 0  &&  ((s as any).stat ?? 0)?.['rape_unaware_count'] > 0) {
      // TODO-QSP: $table += '<li>You have been raped <<stat[''rape_unaware_count'']>> times, but you do not remember a...
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).stat ?? 0)?.['rape_unaware_count'] > 0) {
        // TODO-QSP: $table += '<li>You have been raped <<stat[''rape_count''] + stat[''rape_unaware_count'']>> times, bu...
      }
    }
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Orgasms</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).orgasm ?? 0) > 0) {
    // TODO-QSP: $table += '<li>You have experienced <<orgasm>> orgasms.</li>'
  }
  // TODO-QSP: $table += '<ul>'
  if (((s as any).orgasm_masturbate ?? 0) > 0) {
    // TODO-QSP: $table += '<li><<orgasm_masturbate>> of them from masturbation.</li>'
  }
  if (((s as any).orgasm_clit ?? 0) > 0) {
    // TODO-QSP: $table += '<li><<orgasm_clit>> of them from clitoral stimulation.</li>'
  }
  if (((s as any).orgasm_vaginal ?? 0) > 0) {
    // TODO-QSP: $table += '<li><<orgasm_vaginal>> of them vaginal orgasms.</li>'
  }
  if (((s as any).orgasm_anal ?? 0) > 0) {
    // TODO-QSP: $table += '<li><<orgasm_anal>> of them anal orgasms.</li>'
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Fluids & Creampies</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).stat ?? 0)?.['swallow'] > 0) {
    // TODO-QSP: $table += '<li>You''ve swallowed <<stat[''swallow'']>> times.</li>'
    // TODO-QSP: $table += '<li>That''s about <<stat[''cum_swallowed_ml'']>>ml of cum!</li>'
  }
  if (((s as any).stat ?? 0)?.['cum_facial'] > 0) {
    // TODO-QSP: $table += '<li>You have taken <<stat[''cum_facial'']>> facials.</li>'
  }
  if (((s as any).frot ?? 0) > 0  ||  ((s as any).hump ?? 0) > 0) {
    // TODO-QSP: $table += '<li>Your clothes have been come on <<frot + hump>> times.</li>'
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Personal Records</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).stat ?? 0)?.['biggest_cock'] > 0) {
    // TODO-QSP: $table += '<li>Biggest cock you have taken vaginally: <<stat[''biggest_cock'']>>cm</li>'
  }
  if (((s as any).stat ?? 0)?.['biggest_girth'] > 0) {
    // TODO-QSP: $table += '<li>Biggest girth you have taken vaginally: <<stat[''biggest_girth'']>>cm</li>'
  }
  if (((s as any).stat ?? 0)?.['biggest_cock_anal'] > 0) {
    // TODO-QSP: $table += '<li>Biggest cock you have taken anally: <<stat[''biggest_cock_anal'']>>cm</li>'
  }
  if (((s as any).stat ?? 0)?.['biggest_girth_anal'] > 0) {
    // TODO-QSP: $table += '<li>Biggest girth you have taken anally: <<stat[''biggest_girth_anal'']>>cm</li>'
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Miscellaneous</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).spank ?? 0) > 0) {
    // TODO-QSP: $table += '<li>You have had your ass spanked <<spank>> times</li>'
  }
  if (((s as any).divorced ?? 0) > 0) {
    // TODO-QSP: $table += '<li>You were married <<divorced>> times.</li>'
  }
  if (((s as any).suprdolg ?? 0) > 0) {
    // TODO-QSP: $table += '<li>You performed your conjugal duty for your husband <<suprdolg>> times</li>'
  }
  if (((s as any).stat ?? 0)?.['pee_give'] > 0) {
    // TODO-QSP: $table += '<li>You''ve peed on others <<stat[''pee_give'']>> times.</li>'
  }
  if (((s as any).stat ?? 0)?.['pee'] > 0) {
    // TODO-QSP: $table += '<li>You''ve been peed on <<stat[''pee'']>> times.</li>'
  }
  if (((s as any).swallowpee ?? 0) > 0) {
    // TODO-QSP: $table += '<li>You swallowed urine <<swallowpee>> times.</li>'
  }
  // TODO-QSP: $table += '</ul>'
  qspCall(s, '$menu_character', 'husb_cheat_count');
  // TODO-QSP: $table += '<li><b>Detailed Act Breakdown</b></li>'
  // TODO-QSP: $table += '<ul>'
  (s as any).temp_known = (((s as any).stat ?? {})?.['men_kissed_times'] ?? 0) + (((s as any).stat ?? {})?.['women_kissed_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_kissed_times'] ?? 0);
  (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_kissed_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_kissed_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_kissed_times'] ?? 0);
  if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
    // TODO-QSP: $table += '<li><b>Kisses received</b> (known/unknown): <<temp_known>>/<<temp_unknown>>'
    // TODO-QSP: $table += '<ul>'
    if (((s as any).stat ?? 0)?.['men_kissed_times'] + ((s as any).stat ?? 0)?.['men_hidden_kissed_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Kisses from men</b>: <<stat[''men_kissed_times'']>>/<<stat[''men_hidden_kissed_tim...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Men kissed: <<stat[''men_kissed'']>>/<<stat[''men_hidden_kissed'']>></li>'
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['women_kissed_times'] + ((s as any).stat ?? 0)?.['women_hidden_kissed_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Kisses from women</b>: <<stat[''women_kissed_times'']>>/<<stat[''women_hidden_kiss...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Women kissed: <<stat[''women_kissed'']>>/<<stat[''women_hidden_kissed'']>></li>'
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['herm_kissed_times'] + ((s as any).stat ?? 0)?.['herm_hidden_kissed_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Kisses from herms</b>: <<stat[''herm_kissed_times'']>>/<<stat[''herm_hidden_kissed...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Herms kissed: <<stat[''herm_kissed'']>>/<<stat[''herm_hidden_kissed'']>></li>'
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['kiss'] + ((s as any).stat ?? 0)?.['hidden_kiss'] > 0) {
      // TODO-QSP: $table += '<li>Kiss events: <<stat[''kiss'']>>/<<stat[''hidden_kiss'']>></li>'
    }
    // TODO-QSP: $table += '</ul>'
  }
  (s as any).temp_known = (((s as any).stat ?? {})?.['men_jerked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_fingered_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_jerked_times'] ?? 0);
  (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_jerked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_fingered_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_jerked_times'] ?? 0);
  if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
    // TODO-QSP: $table += '<li><b>Used your hands</b> (known/unknown): <<temp_known>>/<<temp_unknown>>'
    // TODO-QSP: $table += '<ul>'
    if (((s as any).stat ?? 0)?.['men_jerked_times'] + ((s as any).stat ?? 0)?.['men_hidden_jerked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Dicks jerked</b>: <<stat[''men_jerked_times'']>>/<<stat[''men_hidden_jerked_times'...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Men jerked: <<stat[''men_jerked'']>>/<<stat[''men_hidden_jerked'']>></li>'
      if (((s as any).hja ?? 0) > 0) {
        // TODO-QSP: $table += '<li>Jerked off your boyfriend: <<hja>></li>'
      }
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['women_fingered_times'] + ((s as any).stat ?? 0)?.['women_hidden_fingered_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Pussies fingered</b>: <<stat[''women_fingered_times'']>>/<<stat[''women_hidden_fin...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Women fingered: <<stat[''women_fingered'']>>/<<stat[''women_hidden_fingered'']>></li>...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['herm_jerked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_jerked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Herm-Dicks jerked</b>: <<stat[''herm_jerked_times'']>>/<<stat[''herm_hidden_jerked...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Herms jerked: <<stat[''herm_jerked'']>>/<<stat[''herm_hidden_jerked'']>></li>'
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['hj'] + ((s as any).stat ?? 0)?.['hidden_hj'] > 0) {
      // TODO-QSP: $table += '<li>Cock jerk events: <<stat[''hj'']>>/<<stat[''hidden_hj'']>></li>'
    }
    if (((s as any).stat ?? 0)?.['vaginal_finger_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_finger_give'] > 0) {
      // TODO-QSP: $table += '<li>Fingered a girl events: <<stat[''vaginal_finger_give'']>>/<<stat[''hidden_vaginal_fin...
    }
    if (((s as any).stat ?? 0)?.['vaginal_fist_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_fist_give'] > 0) {
      // TODO-QSP: $table += '<li>Fisted a girl events: <<stat[''vaginal_fist_give'']>>/<<stat[''hidden_vaginal_fist_gi...
    }
    if (((s as any).stat ?? 0)?.['anal_finger_give'] + ((s as any).stat ?? 0)?.['hidden_anal_finger_give'] > 0) {
      // TODO-QSP: $table += '<li>Fingered someone else''s ass: <<stat[''anal_finger_give'']>>/<<stat[''hidden_anal_fin...
    }
    if (((s as any).stat ?? 0)?.['anal_fist_give'] + ((s as any).stat ?? 0)?.['hidden_anal_fist_give'] > 0) {
      // TODO-QSP: $table += '<li>Fisted someone else''s ass: <<stat[''anal_fist_give'']>>/<<stat[''hidden_anal_fist_gi...
    }
    // TODO-QSP: $table += '</ul>'
  }
  (s as any).temp_known = (((s as any).stat ?? {})?.['men_feetfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_feetfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_feetfucked_times'] ?? 0);
  (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_feetfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_feetfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_feetfucked_times'] ?? 0);
  if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
    // TODO-QSP: $table += '<li><b>Used your feet</b> (known/unknown): <<temp_known>>/<<temp_unknown>>'
    // TODO-QSP: $table += '<ul>'
    if (((s as any).stat ?? 0)?.['men_feetfucked_times'] + ((s as any).stat ?? 0)?.['men_hidden_feetfucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Dicks jerked with your feet</b>: <<stat[''men_feetfucked_times'']>>/<<stat[''men_h...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Men jerked with your feet: <<stat[''men_feetfucked'']>>/<<stat[''men_hidden_feetfucke...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['women_feetfucked_times'] + ((s as any).stat ?? 0)?.['women_hidden_feetfucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Pussies toed with your feet</b>: <<stat[''women_feetfucked_times'']>>/<<stat[''wom...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Women toed with your feet: <<stat[''women_feetfucked'']>>/<<stat[''women_hidden_feetf...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['herm_feetfucked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_feetfucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Herm-Dicks jerked with your feet</b>: <<stat[''herm_feetfucked_times'']>>/<<stat['...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Herms jerked with your feet: <<stat[''herm_feetfucked'']>>/<<stat[''herm_hidden_feetf...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['footjob'] + ((s as any).stat ?? 0)?.['hidden_footjob'] > 0) {
      // TODO-QSP: $table += '<li>Feet events: <<stat[''footjob'']>>/<<stat[''hidden_footjob'']>></li>'
    }
    // TODO-QSP: $table += '</ul>'
  }
  (s as any).temp_known = (((s as any).stat ?? {})?.['men_titfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_titfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_titfucked_times'] ?? 0);
  (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_titfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_titfucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_titfucked_times'] ?? 0);
  if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
    // TODO-QSP: $table += '<li><b>Used your tits</b> (known/unknown): <<temp_known>>/<<temp_unknown>>'
    // TODO-QSP: $table += '<ul>'
    if (((s as any).stat ?? 0)?.['men_titfucked_times'] + ((s as any).stat ?? 0)?.['men_hidden_titfucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Dicks jerked with your tits</b>: <<stat[''men_titfucked_times'']>>/<<stat[''men_hi...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Men jerked with your tits: <<stat[''men_titfucked'']>>/<<stat[''men_hidden_titfucked'...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['women_titfucked_times'] + ((s as any).stat ?? 0)?.['women_hidden_titfucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Pussies pleasured with your tits</b>: <<stat[''women_titfucked_times'']>>/<<stat['...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Women pleasured with your tits: <<stat[''women_titfucked'']>>/<<stat[''women_hidden_t...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['herm_titfucked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_titfucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Herm-Dicks jerked with your tits</b>: <<stat[''herm_titfucked_times'']>>/<<stat[''...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Herms jerked with your tits: <<stat[''herm_titfucked'']>>/<<stat[''herm_hidden_titfuc...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['titjob'] + ((s as any).stat ?? 0)?.['hidden_titjob'] > 0) {
      // TODO-QSP: $table += '<li>Titfuck events: <<stat[''titjob'']>>/<<stat[''hidden_titjob'']>></li>'
    }
    // TODO-QSP: $table += '</ul>'
  }
  (s as any).temp_known = (((s as any).stat ?? {})?.['men_blown_times'] ?? 0) + (((s as any).stat ?? {})?.['women_munched_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_blown_times'] ?? 0);
  (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_blown_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_munched_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_blown_times'] ?? 0);
  if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
    // TODO-QSP: $table += '<li><b>Used your mouth</b> (known/unknown): <<temp_known>>/<<temp_unknown>>'
    // TODO-QSP: $table += '<ul>'
    if (((s as any).stat ?? 0)?.['men_blown_times'] + ((s as any).stat ?? 0)?.['men_hidden_blown_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Dicks sucked</b>: <<stat[''men_blown_times'']>>/<<stat[''men_hidden_blown_times'']...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Men sucked: <<stat[''men_blown'']>>/<<stat[''men_hidden_blown'']>></li>'
      if (((s as any).bja ?? 0) > 0) {
        // TODO-QSP: $table += '<li>Sucked your boyfriends cock: <<bja>></li>'
      }
      if (((s as any).stat ?? 0)?.['gloryhole'] + ((s as any).stat ?? 0)?.['hidden_gloryhole'] > 0) {
        // TODO-QSP: $table += '<li>Gloryhole: <<stat[''gloryhole'']>>/<<stat[''hidden_gloryhole'']>></li>'
      }
      if (((s as any).furibj ?? 0) > 0) {
        // TODO-QSP: $table += '<li>Sucked off truckers for a ride <<furibj>> times</li>'
      }
      if (((s as any).furi ?? 0)?.['road_head_girl'] === 1) {
        // TODO-QSP: $table += '<li>The truckers who drive the lorries nicknamed you "Road Head Girl".</li>'
      }
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['women_munched_times'] + ((s as any).stat ?? 0)?.['women_hidden_munched_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Pussies munched</b>: <<stat[''women_munched_times'']>>/<<stat[''women_hidden_munch...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Women munched: <<stat[''women_munched'']>>/<<stat[''women_hidden_munched'']>></li>'
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['herm_blown_times'] + ((s as any).stat ?? 0)?.['herm_hidden_blown_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Herm-Dicks sucked</b>: <<stat[''herm_blown_times'']>>/<<stat[''herm_hidden_blown_t...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Herms sucked: <<stat[''herm_blown'']>>/<<stat[''herm_hidden_blown'']>></li>'
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['bj'] + ((s as any).stat ?? 0)?.['hidden_bj'] > 0) {
      // TODO-QSP: $table += '<li>Cock suck events: <<stat[''bj'']>>/<<stat[''hidden_bj'']>></li>'
    }
    if (((s as any).stat ?? 0)?.['cuni_give'] + ((s as any).stat ?? 0)?.['hidden_cuni_give'] > 0) {
      // TODO-QSP: $table += '<li>Performed cunnilingus events: <<stat[''cuni_give'']>>/<<stat[''hidden_cuni_give'']>><...
    }
    if (((s as any).stat ?? 0)?.['rimming_give'] + ((s as any).stat ?? 0)?.['hidden_rimming_give'] > 0) {
      // TODO-QSP: $table += '<li>Rimmed someone: <<stat[''rimming_give'']>>/<<stat[''hidden_rimming_give'']>></li>'
    }
    // TODO-QSP: $table += '</ul>'
  }
  (s as any).temp_known = (((s as any).stat ?? {})?.['men_vaginal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_vaginal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_vaginal_fucked_times'] ?? 0);
  (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_vaginal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_vaginal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_vaginal_fucked_times'] ?? 0);
  if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
    // TODO-QSP: $table += '<li><b>Used your pussy</b> (known/unknown): <<temp_known>>/<<temp_unknown>>'
    // TODO-QSP: $table += '<ul>'
    if (((s as any).stat ?? 0)?.['men_vaginal_fucked_times'] + ((s as any).stat ?? 0)?.['men_hidden_vaginal_fucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Fucked by men</b>: <<stat[''men_vaginal_fucked_times'']>>/<<stat[''men_hidden_vagi...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Men fucked: <<stat[''men_vaginal_fucked'']>>/<<stat[''men_hidden_vaginal_fucked'']>><...
      if (((s as any).sexa ?? 0) > 0) {
        // TODO-QSP: $table += '<li>Vaginal sex with your boyfriend: <<sexa>></li>'
      }
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['women_vaginal_fucked_times'] + ((s as any).stat ?? 0)?.['women_hidden_vaginal_fucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Fucked by women</b>: <<stat[''women_vaginal_fucked_times'']>>/<<stat[''women_hidde...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Women fucked: <<stat[''women_vaginal_fucked'']>>/<<stat[''women_hidden_vaginal_fucked...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['herm_vaginal_fucked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_vaginal_fucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Fucked by Herms</b>: <<stat[''herm_vaginal_fucked_times'']>>/<<stat[''herm_hidden_...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Herms fucked: <<stat[''herm_vaginal_fucked'']>>/<<stat[''herm_hidden_vaginal_fucked''...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['vaginal'] + ((s as any).stat ?? 0)?.['hidden_vaginal'] > 0) {
      // TODO-QSP: $table += '<li>Cock fuck events: <<stat[''vaginal'']>>/<<stat[''hidden_vaginal'']>></li>'
    }
    if (((s as any).stat ?? 0)?.['vaginal_dildo'] + ((s as any).stat ?? 0)?.['hidden_vaginal_dildo'] > 0) {
      // TODO-QSP: $table += '<li>Dildo fuck events: <<stat[''vaginal_dildo'']>>/<<stat[''hidden_vaginal_dildo'']>></li...
    }
    if (((s as any).stat ?? 0)?.['vaginal_strap'] + ((s as any).stat ?? 0)?.['hidden_vaginal_strap'] > 0) {
      // TODO-QSP: $table += '<li>Strap fuck events: <<stat[''vaginal_strap'']>>/<<stat[''hidden_vaginal_strap'']>></li...
    }
    if (((s as any).stat ?? 0)?.['vaginal_vibe'] + ((s as any).stat ?? 0)?.['hidden_vaginal_vibe'] > 0) {
      // TODO-QSP: $table += '<li>Vibrator fuck events: <<stat[''vaginal_vibe'']>>/<<stat[''hidden_vaginal_vibe'']>></l...
    }
    if (((s as any).stat ?? 0)?.['trib'] + ((s as any).stat ?? 0)?.['hidden_trib'] > 0) {
      // TODO-QSP: $table += '<li>Tribadism events: <<stat[''trib'']>>/<<stat[''hidden_trib'']>></li>'
    }
    if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
      // TODO-QSP: $table += '<li>Known vaginal creampies:</li>'
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>You have been cum inside <<stat[''total_creampies'']>> times you can remember.</li>'
      // TODO-QSP: $table += '<li>A grand total of <<stat[''cum_vagina_ml'']>>ml have been deposited in your vagina.</l...
      // TODO-QSP: $table += '<ul>'
      if (((s as any).stat ?? 0)?.['creampies_safe_known'] > 0) {
        // TODO-QSP: $table += '<li>You were safe for <<stat[''creampies_safe_known'']>> of those times.</li>'
      }
      if (((s as any).stat ?? 0)?.['creampies_notsafe_known'] > 0) {
        // TODO-QSP: $table += '<li>You were a little unsafe <<stat[''creampies_notsafe_known'']>> of those times.</li>'
      }
      if (((s as any).stat ?? 0)?.['creampies_risky_known'] > 0) {
        // TODO-QSP: $table += '<li>You were at risk of pregnancy <<stat[''creampies_risky_known'']>> of those times.</li...
      }
      // TODO-QSP: $table += '</ul>'
    }
    if ((((s as any).stat ?? 0)?.['creampies_safe_unknown'] + ((s as any).stat ?? 0)?.['creampies_notsafe_unknown'] + ((s as any).stat ?? 0)?.['creampies_risky_unknown']) > 0) {
      // TODO-QSP: $table += '<li>Unknown vaginal creampies:</li>'
      // TODO-QSP: $table += '<ul>'
      if (((s as any).stat ?? 0)?.['creampies_safe_unknown'] > 0) {
        // TODO-QSP: $table += '<li>Safe: <<stat[''creampies_safe_unknown'']>></li>'
      }
      if (((s as any).stat ?? 0)?.['creampies_notsafe_unknown'] > 0) {
        // TODO-QSP: $table += '<li>Likely safe: <<stat[''creampies_notsafe_unknown'']>></li>'
      }
      if (((s as any).stat ?? 0)?.['creampies_risky_unknown'] > 0) {
        // TODO-QSP: $table += '<li>Risky: <<stat[''creampies_risky_unknown'']>></li>'
      }
      // TODO-QSP: $table += '</ul>'
    }
    // TODO-QSP: $table += '</ul>'
  }
  (s as any).temp_known = (((s as any).stat ?? {})?.['men_anal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_anal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_anal_fucked_times'] ?? 0);
  (s as any).temp_unknown = (((s as any).stat ?? {})?.['men_hidden_anal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['women_hidden_anal_fucked_times'] ?? 0) + (((s as any).stat ?? {})?.['herm_hidden_anal_fucked_times'] ?? 0);
  if (((s as any).temp_known ?? 0) + ((s as any).temp_unknown ?? 0) > 0) {
    // TODO-QSP: $table += '<li><b>Used your asshole</b> (known/unknown): <<temp_known>>/<<temp_unknown>>'
    // TODO-QSP: $table += '<ul>'
    if (((s as any).stat ?? 0)?.['men_anal_fucked_times'] + ((s as any).stat ?? 0)?.['men_hidden_anal_fucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Anal fucked by men</b>: <<stat[''men_anal_fucked_times'']>>/<<stat[''men_hidden_an...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Men anal fucked: <<stat[''men_anal_fucked'']>>/<<stat[''men_hidden_anal_fucked'']>></...
      if (((s as any).anala ?? 0) > 0) {
        // TODO-QSP: $table += '<li>Anal sex with your boyfriend: <<anala>></li>'
      }
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['women_anal_fucked_times'] + ((s as any).stat ?? 0)?.['women_hidden_anal_fucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Anal fucked by women</b>: <<stat[''women_anal_fucked_times'']>>/<<stat[''women_hid...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Women anal fucked: <<stat[''women_anal_fucked'']>>/<<stat[''women_hidden_anal_fucked'...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['herm_anal_fucked_times'] + ((s as any).stat ?? 0)?.['herm_hidden_anal_fucked_times'] > 0) {
      // TODO-QSP: $table += '<li><b>Anal fucked by herms</b>: <<stat[''herm_anal_fucked_times'']>>/<<stat[''herm_hidde...
      // TODO-QSP: $table += '<ul>'
      // TODO-QSP: $table += '<li>Herms anal fucked: <<stat[''herm_anal_fucked'']>>/<<stat[''herm_hidden_anal_fucked'']...
      // TODO-QSP: $table += '</ul>'
    }
    if (((s as any).stat ?? 0)?.['anal'] + ((s as any).stat ?? 0)?.['hidden_anal'] > 0) {
      // TODO-QSP: $table += '<li>Cock anal fuck events: <<stat[''anal'']>>/<<stat[''hidden_anal'']>></li>'
    }
    if (((s as any).stat ?? 0)?.['anal_dildo'] + ((s as any).stat ?? 0)?.['hidden_anal_dildo'] > 0) {
      // TODO-QSP: $table += '<li>Dildo anal fuck events: <<stat[''anal_dildo'']>>/<<stat[''hidden_anal_dildo'']>></li>...
    }
    if (((s as any).stat ?? 0)?.['anal_strap'] + ((s as any).stat ?? 0)?.['hidden_anal_strap'] > 0) {
      // TODO-QSP: $table += '<li>Strap anal fuck events: <<stat[''anal_strap'']>>/<<stat[''hidden_anal_strap'']>></li>...
    }
    if (((s as any).stat ?? 0)?.['anal_vibe'] + ((s as any).stat ?? 0)?.['hidden_anal_vibe'] > 0) {
      // TODO-QSP: $table += '<li>Vibrator anal fuck events: <<stat[''anal_vibe'']>>/<<stat[''hidden_anal_vibe'']>></li...
    }
    if (((s as any).pcs_acp_known ?? 0) > 0) {
      // TODO-QSP: $table += '<li>Known anal creampies: <<pcs_acp_known>></li>'
    }
    if (((s as any).pcs_acp_unknown ?? 0) > 0) {
      // TODO-QSP: $table += '<li>Unknown anal creampies: <<pcs_acp_unknown>></li>'
    }
    // TODO-QSP: $table += '</ul>'
  }
  // TODO-QSP: $table += '<li><b>Toys & Extras</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).kuni ?? 0) + ((s as any).stat ?? 0)?.['cuni'] + ((s as any).stat ?? 0)?.['hidden_cuni'] > 0) {
    // TODO-QSP: $table += '<li>Received cunnilingus (known/unknown): <<stat[''cuni'']>>/<<stat[''hidden_cuni'']>></l...
  }
  if (((s as any).stat ?? 0)?.['vaginal_finger'] + ((s as any).stat ?? 0)?.['hidden_vaginal_finger'] > 0) {
    // TODO-QSP: $table += '<li>Fingered (known/unknown): <<stat[''vaginal_finger'']>>/<<stat[''hidden_vaginal_finger...
  }
  if (((s as any).stat ?? 0)?.['vaginal_fist'] + ((s as any).stat ?? 0)?.['vaginal_fist'] > 0) {
    // TODO-QSP: $table += '<li>Fisted (known/unknown): <<stat[''vaginal_fist'']>>/<<stat[''hidden_vaginal_fist'']>><...
  }
  if (((s as any).stat ?? 0)?.['anal_finger'] + ((s as any).stat ?? 0)?.['hidden_anal_finger'] > 0) {
    // TODO-QSP: $table += '<li>Anally fingered (known/unknown): <<stat[''anal_finger'']>>/<<stat[''hidden_anal_finge...
  }
  if (((s as any).stat ?? 0)?.['anal_fist'] + ((s as any).stat ?? 0)?.['hidden_anal_fist']> 0) {
    // TODO-QSP: $table += '<li>Anally fisted (known/unknown): <<stat[''anal_fist'']>>/<<stat[''hidden_anal_fist'']>>...
  }
  if (((s as any).stat ?? 0)?.['rimming'] + ((s as any).stat ?? 0)?.['hidden_rimming'] > 0) {
    // TODO-QSP: $table += '<li>Ass rimmed (known/unknown): <<stat[''rimming'']>>/<<stat[''hidden_rimming'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['vaginal_dildo_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_dildo_give'] > 0) {
    // TODO-QSP: $table += '<li>Dildoed a girl (known/unknown): <<stat[''vaginal_dildo_give'']>>/<<stat[''hidden_vagi...
  }
  if (((s as any).stat ?? 0)?.['vaginal_strap_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_strap_give'] > 0) {
    // TODO-QSP: $table += '<li>Strap-on fucked a girl (known/unknown): <<stat[''vaginal_strap_give'']>>/<<stat[''hid...
  }
  if (((s as any).stat ?? 0)?.['vaginal_vibe_give'] + ((s as any).stat ?? 0)?.['hidden_vaginal_vibe_give'] > 0) {
    // TODO-QSP: $table += '<li>Used vibrator on a girl (known/unknown): <<stat[''vaginal_vibe_give'']>>/<<stat[''hid...
  }
  if (((s as any).stat ?? 0)?.['anal_dildo_give'] + ((s as any).stat ?? 0)?.['hidden_anal_dildo_give'] > 0) {
    // TODO-QSP: $table += '<li>Dildoed someone else''s ass (known/unknown): <<stat[''anal_dildo_give'']>>/<<stat[''h...
  }
  if (((s as any).stat ?? 0)?.['anal_vibe_give'] + ((s as any).stat ?? 0)?.['hidden_anal_vibe_give'] > 0) {
    // TODO-QSP: $table += '<li>Used a vibrator on someone else''s ass (known/unknown): <<stat[''anal_vibe_give'']>>/...
  }
  if (((s as any).stat ?? 0)?.['anal_strap_give'] + ((s as any).stat ?? 0)?.['hidden_anal_strap_give'] > 0) {
    // TODO-QSP: $table += '<li>Fucked someone else''s ass with a strap-on (known/unknown): <<stat[''anal_strap_give'...
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '<li><b>Group & Public Sex</b></li>'
  // TODO-QSP: $table += '<ul>'
  if (((s as any).stat ?? 0)?.['lesbian_count'] + ((s as any).stat ?? 0)?.['lesbian_unaware_count'] > 0) {
    // TODO-QSP: $table += '<li>Lesbian sex (known/unknown): <<stat[''lesbian_count'']>>/<<stat[''lesbian_unaware_cou...
  }
  if (((s as any).stat ?? 0)?.['groupsex_count'] + ((s as any).stat ?? 0)?.['groupsex_unaware_count'] > 0) {
    // TODO-QSP: $table += '<li>Group sex (known/unknown): <<stat[''groupsex_count'']>>/<<stat[''groupsex_unaware_cou...
  }
  if (((s as any).stat ?? 0)?.['orgy_count'] + ((s as any).stat ?? 0)?.['orgy_unaware_count'] > 0) {
    // TODO-QSP: $table += '<li>Orgy sex (known/unknown): <<stat[''orgy_count'']>>/<<stat[''orgy_unaware_count'']>></...
  }
  if (((s as any).stat ?? 0)?.['gangbang_count'] + ((s as any).stat ?? 0)?.['gangbang_unaware_count'] > 0) {
    // TODO-QSP: $table += '<li>Gangbang sex (known/unknown): <<stat[''gangbang_count'']>>/<<stat[''gangbang_unaware_...
  }
  if (((s as any).stat ?? 0)?.['public_hj'] > 0) {
    // TODO-QSP: $table += '<li>Handjobs given in public: <<stat[''public_hj'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['public_bj'] > 0) {
    // TODO-QSP: $table += '<li>Blowjobs given in public: <<stat[''public_bj'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['public_sex'] > 0) {
    // TODO-QSP: $table += '<li>Vaginal sex in public: <<stat[''public_sex'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['public_anal'] > 0) {
    // TODO-QSP: $table += '<li>Anal sex in public: <<stat[''public_anal'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['park_flash'] > 0) {
    // TODO-QSP: $table += '<li>Times flashed in the park: <<stat[''park_flash'']>></li>'
  }
  if (((s as any).stat ?? 0)?.['parents_home_sex'] > 0) {
    // TODO-QSP: $table += '<li>Times had sex at your parents'' home: <<stat[''parents_home_sex'']>></li>'
  }
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '</td>'
  // TODO-QSP: $table += '<td width="50%" valign="top" align="left">'
  // TODO-QSP: $table += '<br><ul>'
  // TODO-QSP: $table += '<li>Feet preference: ' + func('fetish', 'get_pref', 'feet') + '</li>'
  // TODO-QSP: $table += '<li>Foot jobs/worship: ' + func('fetish', 'get_exp', 'feet') + '</li>'
  // TODO-QSP: $table += '<li>Deepthroat preference: ' + func('fetish', 'get_pref', 'deepthroat') + '</li>'
  // TODO-QSP: $table += '<li>Deepthroated: ' + func('fetish', 'get_exp', 'deepthroat') + '</li>'
  // TODO-QSP: $table += '<li>Group preference: ' + func('fetish', 'get_pref', 'group') + '</li>'
  // TODO-QSP: $table += '<li>Group acts: ' + func('fetish', 'get_exp', 'group') + '</li>'
  // TODO-QSP: $table += '<li>Orgy preference: ' + func('fetish', 'get_pref', 'orgy') + '</li>'
  // TODO-QSP: $table += '<li>Orgies: ' + func('fetish', 'get_exp', 'orgy') + '</li>'
  // TODO-QSP: $table += '<li>Gangbang preference: ' + func('fetish', 'get_pref', 'gangbang') + '</li>'
  // TODO-QSP: $table += '<li>Gangbangs: ' + func('fetish', 'get_exp', 'gangbang') + '</li>'
  // TODO-QSP: $table += '<li>Humiliation preference: ' + func('fetish', 'get_pref', 'humiliation') + '</li>'
  // TODO-QSP: $table += '<li>Humiliation experiences: ' + func('fetish', 'get_exp', 'humiliation') + '</li>'
  // TODO-QSP: $table += '<li>Prostitution preference: ' + func('fetish', 'get_pref', 'prostitution') + '</li>'
  // TODO-QSP: $table += '<li>Prostituted yourself: ' + func('fetish', 'get_exp', 'prostitution') + '</li>'
  // TODO-QSP: $table += '<li>Bondage preference: ' + func('fetish', 'get_pref', 'bound') + '</li>'
  // TODO-QSP: $table += '<li>Bondage play: ' + func('fetish', 'get_exp', 'bound') + '</li>'
  // TODO-QSP: $table += '<li>Masochism preference: ' + func('fetish', 'get_pref', 'maso') + '</li>'
  // TODO-QSP: $table += '<li>Masochism experiences: ' + func('fetish', 'get_exp', 'maso') + '</li>'
  // TODO-QSP: $table += '<li>Bestiality encounters: ' + func('fetish', 'get_pref', 'beast') + '</li>'
  // TODO-QSP: $table += '<li>Bestiality experience: ' + func('fetish', 'get_exp', 'beast') + '</li>'
  // TODO-QSP: $table += '<li>Rough acts preference: ' + func('fetish', 'get_pref', 'rough') + '</li>'
  // TODO-QSP: $table += '<li>Rough acts: ' + func('fetish', 'get_exp', 'rough') + '</li>'
  // TODO-QSP: $table += '<li>Incest preference: ' + func('fetish', 'get_pref', 'incest') + '</li>'
  // TODO-QSP: $table += '<li>Incestuous acts: ' + func('fetish', 'get_exp', 'incest') + '</li>'
  // TODO-QSP: $table += '</ul>'
  // TODO-QSP: $table += '</td>'
  // TODO-QSP: $table += '</tr>'
  // TODO-QSP: $table += '</table>'
  // TODO-QSP: $settings['table_end']
  // TODO-QSP: end
  scene.build();
}

function enterHusbCheatCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
    // TODO-QSP: exit
  }
  (s as any).guy_cheat = (((s as any).stat ?? {})?.['men_fucked'] ?? 0) - (((s as any).spouseVars ?? {})?.['men_fucked_before'] ?? 0);
  (s as any).girl_cheat = (((s as any).stat ?? {})?.['women_fucked'] ?? 0) - (((s as any).spouseVars ?? {})?.['women_fucked_before'] ?? 0);
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).girl_cheat ?? 0) > 0  &&  ((s as any).guy_cheat ?? 0) > 0) {
      // TODO-QSP: dynamic text: During your marriage you have cheated on your husband with <<guy_cheat>> guys an...
      scene.text(`During your marriage you have cheated on your husband with ${((s as any).guy_cheat ?? '')} guys and ${((s as any).girl_cheat ?? '')} girls.`);
    } else {
      if (((s as any).guy_cheat ?? 0) > 0) {
        // TODO-QSP: dynamic text: During your marriage you have cheated on your husband with <<guy_cheat>> guys.
        scene.text(`During your marriage you have cheated on your husband with ${((s as any).guy_cheat ?? '')} guys.`);
      } else {
        if (((s as any).girl_cheat ?? 0) > 0) {
          // TODO-QSP: dynamic text: During your marriage you have cheated on your husband with <<girl_cheat>> girls.
          scene.text(`During your marriage you have cheated on your husband with ${((s as any).girl_cheat ?? '')} girls.`);
        }
      }
    }
  } else {
    if (((s as any).girl_cheat ?? 0) > 0  &&  ((s as any).guy_cheat ?? 0) > 0) {
      // TODO-QSP: dynamic text: During your marriage you have cheated on your wife with <<guy_cheat>> guys and <...
      scene.text(`During your marriage you have cheated on your wife with ${((s as any).guy_cheat ?? '')} guys and ${((s as any).girl_cheat ?? '')} girls.`);
    } else {
      if (((s as any).guy_cheat ?? 0) > 0) {
        // TODO-QSP: dynamic text: During your marriage you have cheated on your wife with <<guy_cheat>> guys.
        scene.text(`During your marriage you have cheated on your wife with ${((s as any).guy_cheat ?? '')} guys.`);
      } else {
        if (((s as any).girl_cheat ?? 0) > 0) {
          // TODO-QSP: dynamic text: During your marriage you have cheated on your wife with <<girl_cheat>> girls.
          scene.text(`During your marriage you have cheated on your wife with ${((s as any).girl_cheat ?? '')} girls.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKidlist(s: GameState, scene: SceneBuilder): void {
  (s as any).kidnumber = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).kidage ?? 0)?.[String((s as any).kidnumber ?? 0)] < 1) {
    if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).kidnumber ?? 0)]) < 1  &&  (((s as any).day ?? 0)-((s as any).daykid ?? 0)?.[String((s as any).kidnumber ?? 0)]) < 7) {
      ((s as any).kiddaycalc = (s as any).kiddaycalc ?? {})[String((s as any).kidnumber ?? 0)] = ((s as any).day ?? 0) - (((s as any).daykid ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0);
      if (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] === 0) {
        // TODO-QSP: $kidagetext[kidnumber] = 'was born today'
      } else {
        if (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] === 1) {
          // TODO-QSP: $kidagetext[kidnumber] = 'is <<kiddaycalc[kidnumber]>> day old'
        } else {
          // TODO-QSP: $kidagetext[kidnumber] = 'is <<kiddaycalc[kidnumber]>> days old'
        }
      }
    } else {
      if ((((s as any).month ?? 0) - ((s as any).monthkid ?? 0)?.[String((s as any).kidnumber ?? 0)]) < 1) {
        ((s as any).kiddaycalc = (s as any).kiddaycalc ?? {})[String((s as any).kidnumber ?? 0)] = (((s as any).day ?? 0) - (((s as any).daykid ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0)) / 7;
        if (((s as any).kiddaycalc ?? 0)?.[String((s as any).kidnumber ?? 0)] === 1) {
          // TODO-QSP: $kidagetext[kidnumber] = 'is <<kiddaycalc[kidnumber]>> week old'
        } else {
          // TODO-QSP: $kidagetext[kidnumber] = 'is <<kiddaycalc[kidnumber]>> weeks old'
        }
      } else {
        ((s as any).kidmonthcalc = (s as any).kidmonthcalc ?? {})[String((s as any).kidnumber ?? 0)] = (((s as any).month ?? 0) - (((s as any).monthkid ?? 0)?.[String((s as any).kidnumber ?? 0)] ?? 0));
        if (((s as any).kidmonthcalc ?? 0)?.[String((s as any).kidnumber ?? 0)] === 1) {
          // TODO-QSP: $kidagetext[kidnumber] = 'is <<kidmonthcalc[kidnumber]>> month old'
        } else {
          // TODO-QSP: $kidagetext[kidnumber] = 'is <<kidmonthcalc[kidnumber]>> months old'
        }
      }
    }
  } else {
    if (((s as any).kidage ?? 0)?.[String((s as any).kidnumber ?? 0)] === 1) {
      // TODO-QSP: $kidagetext[kidnumber] = 'is <<kidage[kidnumber]>> year old'
    } else {
      // TODO-QSP: $kidagetext[kidnumber] = 'is <<kidage[kidnumber]>> years old'
    }
  }
  if (((s as any).polkid ?? 0)?.[String((s as any).kidnumber ?? 0)] === 0) {
    // TODO-QSP: $sdtext[kidnumber] = 'daughter'
    // TODO-QSP: $kidPosProPN[kidnumber] = 'She'
  } else {
    // TODO-QSP: $sdtext[kidnumber] = 'son'
    // TODO-QSP: $kidPosProPN[kidnumber] = 'He'
  }
  // TODO-QSP: end
  scene.build();
}

function enterPain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Pain');
  scene.text('<center><h1>Pain</h1></center>');
  // TODO-QSP: $settings['table_start']
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
      scene.text('<center><b>Your <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = /u0027images/pc/body/spankedass2.jpg/u0027; return s; }); return false;">asscheeks</a> are in extreme pain.</b></center>');
    } else {
      if (((s as any).pain ?? 0)?.['asscheeks'] + (((s as any).spanked ?? 0) * 24) > 40) {
        scene.text('<center><b>Your <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = /u0027images/pc/body/spankedass1.jpg/u0027; return s; }); return false;">asscheeks</a> are very sore.</b></center>');
      } else {
        scene.text('<center><b>Your <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = /u0027images/pc/body/spankedass.jpg/u0027; return s; }); return false;">asscheeks</a> hurt.</b></center>');
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
  // TODO-QSP: $settings['table_end']
  // TODO-QSP: end
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
      // TODO-QSP: dynamic text: $settings['table_start']
      scene.text('$settings[\'table_start\']');
      qspCall(s, 'archetypes', 'display_page');
      // TODO-QSP: dynamic text: $settings['table_end']
      scene.text('$settings[\'table_end\']');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTraits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Traits');
  scene.text('<center><h2>Traits</h2></center>');
  // TODO-QSP: dynamic text: $settings['table_start']
  scene.text('$settings[\'table_start\']');
  // TODO-QSP: $func('traits', 'show_all')
  // TODO-QSP: dynamic text: $settings['table_end']
  scene.text('$settings[\'table_end\']');
  // TODO-QSP: end
  scene.build();
}

function enterReputation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Renown');
  scene.text('<center><h1>Renown</h1></center>');
  // TODO-QSP: $settings['table_start']
  scene.text('<center><b>Family</b></center>');
  if ((!((s as any).Enable_family_Reputation ?? 0))) {
    scene.text('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_family_Reputation = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027reputation/u0027); return false;">Show details</a></center>');
  }
  if (((s as any).Enable_family_Reputation ?? 0) === 1) {
    scene.text('<center><a href="#" onclick="window.__gameStore.setState((s) => { s.Enable_family_Reputation = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027$menu_character/u0027, /u0027reputation/u0027); return false;">Hide details</a></center>');
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
          // TODO-QSP: $motherknows += 'are sexually active and considers you a whore'
        } else {
          if (((s as any).motherKnowSpravka ?? 0) > 0) {
            // TODO-QSP: $motherknows += 'are sexually active'
          }
        }
        if ((((s as any).motherKnowWhore ?? 0) > 0  ||  ((s as any).motherKnowSpravka ?? 0) > 0)  &&  (((s as any).motherKnowDildo ?? 0) > 0  ||  ((s as any).motherKnowRaped ?? 0) > 0)) {
          // TODO-QSP: $motherknows += '. Additionally she knows you '
        }
        if (((s as any).motherKnowDildo ?? 0) > 0) {
          // TODO-QSP: $motherknows += 'masturbate with a dildo'
        }
        if (((s as any).motherKnowDildo ?? 0) > 0  &&  ((s as any).motherKnowRaped ?? 0) > 0) {
          // TODO-QSP: $motherknows += ' and that you '
        }
        if (((s as any).motherKnowRaped ?? 0) > 0) {
          // TODO-QSP: $motherknows += 'were raped'
        }
        // TODO-QSP: $motherknows += '.'
        // TODO-QSP: dynamic text: <<$motherknows>>
        scene.text(`${((s as any).motherknows ?? '')}`);
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
        // TODO-QSP: dynamic text: <<brotherQW[''shower_talk'']>> - Number of conversations you''ve had with your b...
        scene.text(`${((s as any).brotherQW ?? 0)?.['shower_talk'] ?? ''} - Number of conversations you've had with your brother in the shower.`);
      }
      if (((s as any).brotherQW ?? 0)?.['shower_look']) {
        scene.text('You let your brother look at you when you\'re shower');
      }
      if (((s as any).brotherQW ?? 0)?.['shave'] > 0) {
        // TODO-QSP: dynamic text: <<brotherQW[''shave'']>> - Number of times you''ve let your brother watch you sh...
        scene.text(`${((s as any).brotherQW ?? 0)?.['shave'] ?? ''} - Number of times you've let your brother watch you shave your pussy`);
      }
      if (((s as any).brotherQW ?? 0)?.['kiss'] > 0) {
        // TODO-QSP: dynamic text: <<brotherQW[''kiss'']>> - Number of times you and your brother have kissed
        scene.text(`${((s as any).brotherQW ?? 0)?.['kiss'] ?? ''} - Number of times you and your brother have kissed`);
      }
      if (((s as any).brotherQW ?? 0)?.['bj'] > 0) {
        // TODO-QSP: dynamic text: <<brotherQW[''bj'']>> - Number of times you''ve given your brother blowjobs
        scene.text(`${((s as any).brotherQW ?? 0)?.['bj'] ?? ''} - Number of times you've given your brother blowjobs`);
      }
      if (((s as any).brotherQW ?? 0)?.['fuck'] + ((s as any).brotherQW ?? 0)?.['anal'] > 0) {
        // TODO-QSP: dynamic text: <<brotherQW[''fuck''] + brotherQW[''anal'']>> - Number of times you''ve had sex ...
        scene.text(`${(((s as any).brotherQW ?? {})?.['fuck'] ?? 0) + (((s as any).brotherQW ?? {})?.['anal'] ?? 0)} - Number of times you've had sex with your brother`);
      }
    }
  }
  (s as any).temp_table = '<center><table cellpadding=20 style="table-layout: fixed">';
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<th><center>Pavlovsk</center></th>'
  // TODO-QSP: $temp_table +=    '<th><center>St. Petersburg</center></th>'
  // TODO-QSP: $temp_table +=    '<th><center>Pushkin</center></th>'
  // TODO-QSP: $temp_table +=    '<th><center>Gadukino</center></th>'
  // TODO-QSP: $temp_table +=  '</tr>'
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<td width="25%" style="vertical-align:top">'
  if ((!((s as any).Enable_pav_Reputation ?? 0))) {
    // TODO-QSP: $temp_table +=    '<center><a href="exec:Enable_pav_Reputation = 1 & gs ''$menu_character'', ''reput...
  } else {
    // TODO-QSP: $temp_table +=    '<center><a href="exec:Enable_pav_Reputation = 0 & gs ''$menu_character'', ''reput...
    // TODO-QSP: $temp_table +=    $func('$menu_character', 'display_region_fames', 'pav')
  }
  // TODO-QSP: $temp_table +=    '</td><td width="25%" style="vertical-align:top">'
  if ((!((s as any).Enable_city_Reputation ?? 0))) {
    // TODO-QSP: $temp_table +=    '<center><a href="exec:Enable_city_Reputation = 1 & gs ''$menu_character'', ''repu...
  } else {
    // TODO-QSP: $temp_table +=    '<center><a href="exec:Enable_city_Reputation = 0 & gs ''$menu_character'', ''repu...
    // TODO-QSP: $temp_table +=    $func('$menu_character', 'display_region_fames', 'city')
  }
  // TODO-QSP: $temp_table +=    '</td><td width="25%" style="vertical-align:top">'
  if ((!((s as any).Enable_oldtown_Reputation ?? 0))) {
    // TODO-QSP: $temp_table +=    '<center><a href="exec:Enable_oldtown_Reputation = 1 & gs ''$menu_character'', ''r...
  } else {
    // TODO-QSP: $temp_table +=    '<center><a href="exec:Enable_oldtown_Reputation = 0 & gs ''$menu_character'', ''r...
    // TODO-QSP: $temp_table +=    $func('$menu_character', 'display_region_fames', 'pushkin')
  }
  // TODO-QSP: $temp_table +=    '</td><td width="25%" style="vertical-align:top">'
  if ((!((s as any).Enable_village_Reputation ?? 0))) {
    // TODO-QSP: $temp_table +=    '<center><a href="exec:Enable_village_Reputation = 1 & gs ''$menu_character'', ''r...
  } else {
    // TODO-QSP: $temp_table +=    '<center><a href="exec:Enable_village_Reputation = 0 & gs ''$menu_character'', ''r...
    // TODO-QSP: $temp_table +=    $func('$menu_character', 'display_region_fames', 'village')
  }
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=  '</tr>'
  // TODO-QSP: $temp_table += '<table></center>'
  if (((s as any).film ?? 0) > 0) {
    scene.text('<b>Pornographic Filmography</b>');
    qspCall(s, 'pornhist', 'short');
    if ((!((s as any).pfilmSTOP ?? 0))) {
      // TODO-QSP: dynamic text: <font color="magenta"><<$pfname>></font> has starred in <b><<film>></b> porn fil...
      scene.text(`<font color="magenta">${((s as any).pfname ?? '')}</font> has starred in <b>${((s as any).film ?? '')}</b> porn films:`);
    } else {
      // TODO-QSP: dynamic text: <font color="magenta"><<$pfname>></font> retired after <b><<film>></b> porn film...
      scene.text(`<font color="magenta">${((s as any).pfname ?? '')}</font> retired after <b>${((s as any).film ?? '')}</b> porn films:`);
    }
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pornhist/u0027, /u0027pdetail/u0027); return false;">View detailed Filmography</a>');
    // TODO-QSP: dynamic text: <<$pfilmhistory>>
    scene.text(`${((s as any).pfilmhistory ?? '')}`);
  }
  // TODO-QSP: $settings['table_end']
  // TODO-QSP: end
  scene.build();
}

function enterDisplayRegionFames(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "
  (s as any).result = (String(((s as any).result ?? 0)).split('  ').join(''));
  // TODO-QSP: end
  scene.build();
}

function enterMagic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, '$menu_character', 'charactertabs', 'Magic');
  scene.text('<center><h1>Magic</h1></center>');
  // TODO-QSP: $settings['table_start']
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    scene.text('You are unable to use magic.');
    // TODO-QSP: $settings['table_end']
    return;
  }
  // TODO-QSP: dynamic text: You have <<pcs_mana>> units of mana available to you.
  scene.text(`You have ${((s as any).pcs_mana ?? '')} units of mana available to you.`);
  // TODO-QSP: </center>"
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucpcinfo ?? 0) >= 4  &&  ((s as any).sucskill ?? 0) >= 1) {
    scene.text('<center><b>Succubus Stats</b></center>');
    // TODO-QSP: dynamic text: Succubus Level = <<succublvl>>
    scene.text(`Succubus Level = ${((s as any).succublvl ?? '')}`);
    // TODO-QSP: dynamic text: Succubus XP = <<succubxp>>
    scene.text(`Succubus XP = ${((s as any).succubxp ?? '')}`);
    // TODO-QSP: dynamic text: "Food" Energy Reserve = <<0 - succhungry>> day(s)
    scene.text(`"Food" Energy Reserve = ${0 - ((s as any).succhungry ?? '')} day(s)`);
    // TODO-QSP: dynamic text: Stored Sexual Energy = <<sucexcess>>
    scene.text(`Stored Sexual Energy = ${((s as any).sucexcess ?? '')}`);
    // TODO-QSP: dynamic text: Sexual Energy Storage Capacity = <<sucstorecap>>
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
  // TODO-QSP: $settings['table_end']
  // TODO-QSP: end
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
