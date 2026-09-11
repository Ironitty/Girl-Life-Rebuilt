import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStdTrigger(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['std'] === 1  ||  (Math.floor(Math.random() * (((s as any).pcs_health ?? 0) - ((s as any).pcs_health ?? 0)/10 + 1)) + (((s as any).pcs_health ?? 0)/10)) > 600) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] > (Math.floor(Math.random() * 11) + 80)) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_love ?? 0)?.[String((s as any).boy ?? 0)] > (Math.floor(Math.random() * 21) + 40)) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_sexual ?? 0)?.[String((s as any).boy ?? 0)]+((s as any).npc_vaginal_count ?? 0)?.[String((s as any).boy ?? 0)] > 0  &&  (Math.floor(Math.random() * 11) + 0) > 5) {
    // TODO-QSP: exit
  }
  if ((((s as any).protect ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 3)  &&  (!((s as any).noprotect ?? 0))) {
    if ((Math.floor(Math.random() * 1001) + 0) === 666) {
      if (((s as any).locArgs?.[1] ?? 0) !== 'low') {
        qspCall(s, 'dinSex', 'disease_picker');
      }
    }
  } else {
    if (((s as any).sexcontra ?? 0) === 4  ||  ((s as any).sexcontra ?? 0) === 5) {
      if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'high', 65, ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'low', 85, 75))) {
        qspCall(s, 'dinSex', 'disease_picker');
      }
    } else {
      if (((s as any).sexcontra ?? 0) === 6  ||  ((s as any).sexcontra ?? 0) === 7) {
        if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'high', 70, ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'low', 90, 80))) {
          qspCall(s, 'dinSex', 'disease_picker');
        }
      } else {
        if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'high', 60, ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'low', 80, 70))) {
          qspCall(s, 'dinSex', 'disease_picker');
        }
      }
    }
  }
  scene.build();
}

function enterDiseasePicker(s: GameState, scene: SceneBuilder): void {
  (s as any).tipvenerarand = Math.floor(Math.random() * 11) + 0;
  if (((s as any).tipvenerarand ?? 0) < 5) {
    if ((Math.floor(Math.random() * 100) + 1) > 85  &&  (!((s as any).KandidozOnce ?? 0))) {
      (s as any).KandidozOnce = 1;
      (s as any).Kandidoz = ((s as any).rand ?? 0)(-12, -6);
    }
  } else {
    if (((s as any).tipvenerarand ?? 0) < 7) {
      if ((Math.floor(Math.random() * 100) + 1) > 95  &&  (!((s as any).TriperOnce ?? 0))) {
        (s as any).TriperOnce = 1;
        (s as any).Triper = ((s as any).rand ?? 0)(-11, -6);
        (s as any).Venera = ((s as any).Venera ?? 0) + (1);
      }
    } else {
      if (((s as any).tipvenerarand ?? 0) === 7) {
        if ((Math.floor(Math.random() * 100) + 1) > 95  &&  (!((s as any).SifacOnce ?? 0))) {
          (s as any).SifacOnce = 1;
          (s as any).Sifilis = ((s as any).rand ?? 0)(-9, -5);
          (s as any).Venera = ((s as any).Venera ?? 0) + (1);
        }
      } else {
        if (((s as any).tipvenerarand ?? 0) === 8) {
          if ((Math.floor(Math.random() * 100) + 1) > 90  &&  (!((s as any).GerpesOnce ?? 0))) {
            (s as any).GerpesOnce = 1;
            (s as any).Venera = ((s as any).Venera ?? 0) + (1);
            (s as any).Gerpes = ((s as any).rand ?? 0)(-10, -6);
            (s as any).GenHerpes = 1;
          }
        }
      }
    }
  }
  scene.build();
}

function enterStdTriggerOral(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['std'] === 1  ||  (Math.floor(Math.random() * (((s as any).pcs_health ?? 0) - ((s as any).pcs_health ?? 0)/10 + 1)) + (((s as any).pcs_health ?? 0)/10)) > 300) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] > (Math.floor(Math.random() * 11) + 80)) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_love ?? 0)?.[String((s as any).boy ?? 0)] > (Math.floor(Math.random() * 21) + 40)) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_sexual ?? 0)?.[String((s as any).boy ?? 0)]+((s as any).npc_vaginal_count ?? 0)?.[String((s as any).boy ?? 0)] > 0  &&  (Math.floor(Math.random() * 11) + 0) > 5) {
    // TODO-QSP: exit
  }
  if ((((s as any).protect ?? 0) === 1  ||  ((s as any).sexcontra ?? 0) === 3)  &&  (!((s as any).noprotect ?? 0))) {
    if ((Math.floor(Math.random() * 1001) + 0) === 666) {
      if (((s as any).locArgs?.[1] ?? 0) !== 'low') {
        qspCall(s, 'dinSex', 'disease_picker_oral');
      }
    }
  } else {
    if (((s as any).sexcontra ?? 0) === 4  ||  ((s as any).sexcontra ?? 0) === 5) {
      if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'high', 70, ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'low', 90, 80))) {
        qspCall(s, 'dinSex', 'disease_picker_oral');
      }
    } else {
      if (((s as any).sexcontra ?? 0) === 6  ||  ((s as any).sexcontra ?? 0) === 7) {
        if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'high', 75, ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'low', 95, 85))) {
          qspCall(s, 'dinSex', 'disease_picker_oral');
        }
      } else {
        if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'high', 65, ((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0) === 'low', 85, 75))) {
          qspCall(s, 'dinSex', 'disease_picker_oral');
        }
      }
    }
  }
  scene.build();
}

function enterDiseasePickerOral(s: GameState, scene: SceneBuilder): void {
  (s as any).tipvenerarand = Math.floor(Math.random() * 11) + 0;
  if (((s as any).tipvenerarand ?? 0) >= 5  &&  ((s as any).tipvenerarand ?? 0) < 7) {
    if ((Math.floor(Math.random() * 100) + 1) > 95  &&  (!((s as any).TriperOnce ?? 0))) {
      (s as any).TriperOnce = 1;
      (s as any).TriperOral = ((s as any).rand ?? 0)(-15, -9);
      (s as any).Venera = ((s as any).Venera ?? 0) + (1);
      if ((Math.floor(Math.random() * 101) + 0) < 15) {
        (s as any).TriperOralSigns = 1;
      }
    }
  } else {
    if (((s as any).tipvenerarand ?? 0) === 7) {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        if ((Math.floor(Math.random() * 100) + 1) > 95  &&  (!((s as any).SifacOnce ?? 0))) {
          (s as any).SifacOnce = 1;
          (s as any).Sifilis = ((s as any).rand ?? 0)(-13, -8);
          (s as any).Venera = ((s as any).Venera ?? 0) + (1);
        }
      }
    } else {
      if (((s as any).tipvenerarand ?? 0) < 5) {
        if ((Math.floor(Math.random() * 100) + 1) > 85  &&  (!((s as any).KandidozOnce ?? 0))) {
          (s as any).KandidozOnce = 1;
          (s as any).Kandidoz = ((s as any).rand ?? 0)(-21, -14);
        }
      } else {
        if (((s as any).tipvenerarand ?? 0) === 8) {
          if ((Math.floor(Math.random() * 100) + 1) > 90  &&  (!((s as any).GerpesOnce ?? 0))) {
            (s as any).GerpesOnce = 1;
            (s as any).Venera = ((s as any).Venera ?? 0) + (1);
            (s as any).Gerpes = ((s as any).rand ?? 0)(-16, -11);
            (s as any).OrHerpes = 1;
          }
        }
      }
    }
  }
  scene.build();
}

function enterWearCondom(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = 0;
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    qspCall(s, 'dina', 'prezik');
    (s as any).protect = 1;
    if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
      (s as any).mc_inventory['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
      (s as any).noprotect = 1;
      (s as any).sexcontra = Math.floor(Math.random() * 2) + 4;
      // TODO-QSP: *p '<<ucase(mid($boydesc,1,1))>><<mid($boydesc,2,len($boydesc)-1)>> takes your '+iif(preziktype = 2,...
    } else {
      (s as any).sexcontra = 3;
      // TODO-QSP: *p '<<$boydesc>> takes your condom and puts it on <<$xyr>> cock. '
      (s as any).noprotect = 0;
    }
    if (((s as any).preziktype ?? 0) === 2) {
      (s as any).sexcontra = 7;
      (s as any).noprotect = 1;
    }
  } else {
    (s as any).sexcontra = 0;
  }
  scene.build();
}

function enterVaginalSex(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).ARGS[1] = (-1);
  }
  // TODO-QSP: gs 'arousal', 'vaginal', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[...
  (s as any).grange = 0;
  (s as any).vaginal_tightness = 5 + ((s as any).arousalVars ?? {})?.['girth_diff'] + ((s as any).arousalVars ?? {})?.['length_diff'] - ((s as any).pcs_horny ?? 0) / 10;
  (s as any).arousal_modifier = 12 - ((s as any).vaginal_tightness ?? 0);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    if (((s as any).vaginal_tightness ?? 0) >= 30) {
      // TODO-QSP: dynamic text: You let out a groan when <<$boydesc>> penetrates you. You are too tight to take ...
      scene.text(`You let out a groan when ${((s as any).boydesc ?? 0)} penetrates you. You are too tight to take ${((s as any).xyr ?? 0)} just yet, ${((s as any).xe ?? 0)} is tearing you apart!`);
      // TODO-QSP: dynamic text: You gasp and scream while <<$xyr>> <<$penis_desc>> painfully stretches and tears...
      scene.text(`You gasp and scream while ${((s as any).xyr ?? 0)} ${((s as any).penis_desc ?? 0)} painfully stretches and tears your pussy${((s as any).temp_mens ?? 0)}.`);
    } else {
      if (((s as any).vaginal_tightness ?? 0) >= 20) {
        // TODO-QSP: dynamic text: You wince when <<$boydesc>> enters you, <<$xyr>> <<$penis_desc>> barely fitting<...
        scene.text(`You wince when ${((s as any).boydesc ?? 0)} enters you, ${((s as any).xyr ?? 0)} ${((s as any).penis_desc ?? 0)} barely fitting${((s as any).temp_mens ?? 0)}.`);
        // TODO-QSP: dynamic text: Despite your gasps and moans of pain, <<$boydesc>> enthusiastically pumps your p...
        scene.text(`Despite your gasps and moans of pain, ${((s as any).boydesc ?? 0)} enthusiastically pumps your pussy, mistaking the sounds you are making for enjoyment.`);
      } else {
        if (((s as any).vaginal_tightness ?? 0) >= 12) {
          // TODO-QSP: dynamic text: You bite your lip when <<$boydesc>>'s <<$penis_desc>> penetrates your cunt, stre...
          scene.text(`You bite your lip when ${((s as any).boydesc ?? 0)}'s ${((s as any).penis_desc ?? 0)} penetrates your cunt, stretching you out a bit${((s as any).temp_mens ?? 0)}.`);
          // TODO-QSP: dynamic text: It takes a moment but the discomfort fades away. Before you know it you are gyra...
          scene.text(`It takes a moment but the discomfort fades away. Before you know it you are gyrating your hips to the rhythm of ${((s as any).boydesc ?? 0)} pumping your now perfectly snug pussy.`);
        } else {
          if (((s as any).vaginal_tightness ?? 0) >= 2) {
            // TODO-QSP: dynamic text: You sigh deeply as you savor the feeling of a <<$penis_desc>> slowly entering yo...
            scene.text(`You sigh deeply as you savor the feeling of a ${((s as any).penis_desc ?? 0)} slowly entering your moist tunnel.`);
            // TODO-QSP: dynamic text: Gradually getting into rhythm, you grind your ass against <<$boydesc>>'s crotch ...
            scene.text(`Gradually getting into rhythm, you grind your ass against ${((s as any).boydesc ?? 0)}'s crotch and moan as ${((s as any).xe ?? 0)} fucks your cunt${((s as any).temp_mens ?? 0)}.`);
          } else {
            if (((s as any).vaginal_tightness ?? 0) >= -3) {
              // TODO-QSP: dynamic text: <<$boydesc>> thrusts into you<<$temp_mens>>, <<$xyr>> <<$penis_desc>> rubbing ag...
              scene.text(`${((s as any).boydesc ?? 0)} thrusts into you${((s as any).temp_mens ?? 0)}, ${((s as any).xyr ?? 0)} ${((s as any).penis_desc ?? 0)} rubbing against your inner walls, hitting just the right spot.`);
              // TODO-QSP: dynamic text: Your moans are mixed with lewd, wet slapping sounds from <<$xem>> fucking your p...
              scene.text(`Your moans are mixed with lewd, wet slapping sounds from ${((s as any).xem ?? 0)} fucking your pussy.`);
            } else {
              if (((s as any).vaginal_tightness ?? 0) < -3) {
                // TODO-QSP: dynamic text: You feel <<$boydesc>>'s <<$penis_desc>> sliding through your wet folds<<$temp_me...
                scene.text(`You feel ${((s as any).boydesc ?? 0)}'s ${((s as any).penis_desc ?? 0)} sliding through your wet folds${((s as any).temp_mens ?? 0)}. You savor the intense pleasure from the ${((s as any).penis_desc ?? 0)} inside you, your cunt aching to be filled even more.`);
              }
            }
          }
        }
      }
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).arousal_modifier ?? 0));
    qspCall(s, 'mood', 'raise', ((s as any).arousal_modifier ?? 0));
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).arousal_modifier ?? 0) * 2);
    // TODO-QSP: gs 'mood', 'raise', arousal_modifier * 2
    // TODO-QSP: dynamic text: <<$boydesc>> pushes <<$xyr>> <<$penis_desc>> into your unexplored pussy gently. ...
    scene.text(`${((s as any).boydesc ?? 0)} pushes ${((s as any).xyr ?? 0)} ${((s as any).penis_desc ?? 0)} into your unexplored pussy gently. It is a bit painful, but as your lust builds up you do not want to wait anymore.`);
    // TODO-QSP: dynamic text: With the next push from <<$boydesc>>, you push your ass towards <<$xyr>> cock. Y...
    scene.text(`With the next push from ${((s as any).boydesc ?? 0)}, you push your ass towards ${((s as any).xyr ?? 0)} cock. You feel your hymen break and his cock slide into deep inside you, ${((s as any).xyr ?? 0)} head rubbing against your no longer untouched walls as you both moan very loudly.`);
  }
  scene.build();
}

function enterBoyPutsCondom(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = ((((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) ? (1) : (0));
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
        (s as any).mc_inventory['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
        (s as any).noprotect = 1;
        (s as any).sexcontra = Math.floor(Math.random() * 2) + 4;
        // TODO-QSP: *p '<<ucase(mid($boydesc,1,1))>><<mid($boydesc,2,len($boydesc)-1)>> takes your '+iif(preziktype = 2,...
      } else {
        (s as any).sexcontra = 3;
        // TODO-QSP: *p '<<ucase(mid($boydesc,1,1))>><<mid($boydesc,2,len($boydesc)-1)>> takes your condom and puts it on...
        (s as any).noprotect = 0;
      }
      if (((s as any).preziktype ?? 0) === 2) {
        (s as any).sexcontra = 7;
        (s as any).noprotect = 1;
      }
      (s as any).mc_inventory['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
    } else {
      (s as any).sexcontra = 0;
    }
  } else {
    // TODO-QSP: *p '<<$custmsg>> '
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
        (s as any).mc_inventory['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
        (s as any).noprotect = 1;
        (s as any).sexcontra = Math.floor(Math.random() * 2) + 4;
      } else {
        (s as any).sexcontra = 3;
        (s as any).noprotect = 0;
      }
      if (((s as any).preziktype ?? 0) === 2) {
        (s as any).sexcontra = 7;
        (s as any).noprotect = 1;
      }
      (s as any).mc_inventory['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
    } else {
      (s as any).sexcontra = 0;
    }
  }
  // TODO-QSP: end & !! --- boy_puts_condom ---
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'std_trigger':
      enterStdTrigger(s, scene);
      break;
    case 'disease_picker':
      enterDiseasePicker(s, scene);
      break;
    case 'std_trigger_oral':
      enterStdTriggerOral(s, scene);
      break;
    case 'disease_picker_oral':
      enterDiseasePickerOral(s, scene);
      break;
    case 'wear_condom':
      enterWearCondom(s, scene);
      break;
    case 'vaginal_sex':
      enterVaginalSex(s, scene);
      break;
    case 'boy_puts_condom':
      enterBoyPutsCondom(s, scene);
      break;
    default:
      enterStdTrigger(s, scene);
      break;
  }
}

export const dinSex: LocationDef = {
  name: 'dinSex',
  title: 'You are anxious about the idea of sucking a cock, having nev',
  region: 'other',
  enter: enter,
};
