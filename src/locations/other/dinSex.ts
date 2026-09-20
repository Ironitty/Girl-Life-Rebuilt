import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
      if (Number((s as any).locArgs?.[1] ?? 0) !== 'low') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiseasePicker(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } else {
    if (((s as any).sexcontra ?? 0) === 4  ||  ((s as any).sexcontra ?? 0) === 5) {
      if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'high', 65, ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'low', 85, 75))) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiseasePicker(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).sexcontra ?? 0) === 6  ||  ((s as any).sexcontra ?? 0) === 7) {
        if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'high', 70, ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'low', 90, 80))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiseasePicker(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'high', 60, ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'low', 80, 70))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiseasePicker(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDiseasePicker(s: GameState, scene: SceneBuilder): void {
  (s as any).tipvenerarand = (Math.floor(Math.random() * 11) + 0);
  if (((s as any).tipvenerarand ?? 0) < 5) {
    if ((Math.floor(Math.random() * 100) + 1) > 85  &&  (!((s as any).KandidozOnce ?? 0))) {
      (s as any).KandidozOnce = 1;
      (s as any).Kandidoz = (Math.floor(Math.random() * ((-6) - (-12) + 1)) + ((-12)));
    }
  } else {
    if (((s as any).tipvenerarand ?? 0) < 7) {
      if ((Math.floor(Math.random() * 100) + 1) > 95  &&  (!((s as any).TriperOnce ?? 0))) {
        (s as any).TriperOnce = 1;
        (s as any).Triper = (Math.floor(Math.random() * ((-6) - (-11) + 1)) + ((-11)));
        (s as any).Venera = ((s as any).Venera ?? 0) + (1);
      }
    } else {
      if (((s as any).tipvenerarand ?? 0) === 7) {
        if ((Math.floor(Math.random() * 100) + 1) > 95  &&  (!((s as any).SifacOnce ?? 0))) {
          (s as any).SifacOnce = 1;
          (s as any).Sifilis = (Math.floor(Math.random() * ((-5) - (-9) + 1)) + ((-9)));
          (s as any).Venera = ((s as any).Venera ?? 0) + (1);
        }
      } else {
        if (((s as any).tipvenerarand ?? 0) === 8) {
          if ((Math.floor(Math.random() * 100) + 1) > 90  &&  (!((s as any).GerpesOnce ?? 0))) {
            (s as any).GerpesOnce = 1;
            (s as any).Venera = ((s as any).Venera ?? 0) + (1);
            (s as any).Gerpes = (Math.floor(Math.random() * ((-6) - (-10) + 1)) + ((-10)));
            (s as any).GenHerpes = 1;
          }
        }
      }
    }
  }
  // TODO-QSP: end
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
      if (Number((s as any).locArgs?.[1] ?? 0) !== 'low') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiseasePickerOral(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } else {
    if (((s as any).sexcontra ?? 0) === 4  ||  ((s as any).sexcontra ?? 0) === 5) {
      if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'high', 70, ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'low', 90, 80))) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiseasePickerOral(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).sexcontra ?? 0) === 6  ||  ((s as any).sexcontra ?? 0) === 7) {
        if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'high', 75, ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'low', 95, 85))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiseasePickerOral(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if ((Math.floor(Math.random() * 101) + 0) >= ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'high', 65, ((s as any).iif ?? 0)(Number((s as any).locArgs?.[1] ?? 0) === 'low', 85, 75))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDiseasePickerOral(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDiseasePickerOral(s: GameState, scene: SceneBuilder): void {
  (s as any).tipvenerarand = (Math.floor(Math.random() * 11) + 0);
  if (((s as any).tipvenerarand ?? 0) >= 5  &&  ((s as any).tipvenerarand ?? 0) < 7) {
    if ((Math.floor(Math.random() * 100) + 1) > 95  &&  (!((s as any).TriperOnce ?? 0))) {
      (s as any).TriperOnce = 1;
      (s as any).TriperOral = (Math.floor(Math.random() * ((-9) - (-15) + 1)) + ((-15)));
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
          (s as any).Sifilis = (Math.floor(Math.random() * ((-8) - (-13) + 1)) + ((-13)));
          (s as any).Venera = ((s as any).Venera ?? 0) + (1);
        }
      }
    } else {
      if (((s as any).tipvenerarand ?? 0) < 5) {
        if ((Math.floor(Math.random() * 100) + 1) > 85  &&  (!((s as any).KandidozOnce ?? 0))) {
          (s as any).KandidozOnce = 1;
          (s as any).Kandidoz = (Math.floor(Math.random() * ((-14) - (-21) + 1)) + ((-21)));
        }
      } else {
        if (((s as any).tipvenerarand ?? 0) === 8) {
          if ((Math.floor(Math.random() * 100) + 1) > 90  &&  (!((s as any).GerpesOnce ?? 0))) {
            (s as any).GerpesOnce = 1;
            (s as any).Venera = ((s as any).Venera ?? 0) + (1);
            (s as any).Gerpes = (Math.floor(Math.random() * ((-11) - (-16) + 1)) + ((-16)));
            (s as any).OrHerpes = 1;
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWearCondom(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = 0;
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    qspCall(s, 'dina', 'prezik');
    (s as any).protect = 1;
    if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
      (s as any).noprotect = 1;
      (s as any).sexcontra = (Math.floor(Math.random() * 2) + 4);
      // TODO-QSP: dynamic text: '<<ucase(mid($boydesc,1,1))>><<mid($boydesc,2,len($boydesc)-1)>> takes your '+ii...
      scene.text('\'' + (String((String(((s as any).boydesc ?? '')).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String(((s as any).boydesc ?? '')).slice((2)-1, ((2)-1)+((String(((s as any).boydesc ?? '')).length)-1))) + ' takes your \'+iif(preziktype = 2, \'sabotaged condom and puts it on, not even noticing anything off.\', \'condom and puts it on ' + ((s as any).xyr ?? '') + ' cock. \')');
    } else {
      (s as any).sexcontra = 3;
      // TODO-QSP: dynamic text: <<$boydesc>> takes your condom and puts it on <<$xyr>> cock. 
      scene.text(`${((s as any).boydesc ?? '')} takes your condom and puts it on ${((s as any).xyr ?? '')} cock. `);
      (s as any).noprotect = 0;
    }
    if (((s as any).preziktype ?? 0) === 2) {
      (s as any).sexcontra = 7;
      (s as any).noprotect = 1;
    }
  } else {
    (s as any).sexcontra = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterVaginalSex(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (-1);
  }
  // TODO-QSP: gs 'arousal', 'vaginal', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[...
  (s as any).grange = 0;
  (s as any).vaginal_tightness = 5 + (((s as any).arousalVars ?? {})?.['girth_diff'] ?? 0) + (((s as any).arousalVars ?? {})?.['length_diff'] ?? 0) - ((s as any).pcs_horny ?? 0) / 10;
  (s as any).arousal_modifier = 12 - ((s as any).vaginal_tightness ?? 0);
  (s as any).temp_mens = ((((s as any).cycle ?? 0) <= 0) ? (' and a bit of your period leaks from your vagina') : (''));
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    if (((s as any).vaginal_tightness ?? 0) >= 30) {
      // TODO-QSP: dynamic text: You let out a groan when <<$boydesc>> penetrates you. You are too tight to take ...
      scene.text(`You let out a groan when ${((s as any).boydesc ?? '')} penetrates you. You are too tight to take ${((s as any).xyr ?? '')} just yet, ${((s as any).xe ?? '')} is tearing you apart!`);
      // TODO-QSP: dynamic text: You gasp and scream while <<$xyr>> <<$penis_desc>> painfully stretches and tears...
      scene.text(`You gasp and scream while ${((s as any).xyr ?? '')} ${((s as any).penis_desc ?? '')} painfully stretches and tears your pussy${((s as any).temp_mens ?? '')}.`);
    } else {
      if (((s as any).vaginal_tightness ?? 0) >= 20) {
        // TODO-QSP: dynamic text: You wince when <<$boydesc>> enters you, <<$xyr>> <<$penis_desc>> barely fitting<...
        scene.text(`You wince when ${((s as any).boydesc ?? '')} enters you, ${((s as any).xyr ?? '')} ${((s as any).penis_desc ?? '')} barely fitting${((s as any).temp_mens ?? '')}.`);
        // TODO-QSP: dynamic text: Despite your gasps and moans of pain, <<$boydesc>> enthusiastically pumps your p...
        scene.text(`Despite your gasps and moans of pain, ${((s as any).boydesc ?? '')} enthusiastically pumps your pussy, mistaking the sounds you are making for enjoyment.`);
      } else {
        if (((s as any).vaginal_tightness ?? 0) >= 12) {
          // TODO-QSP: dynamic text: You bite your lip when <<$boydesc>>''s <<$penis_desc>> penetrates your cunt, str...
          scene.text(`You bite your lip when ${((s as any).boydesc ?? '')}'s ${((s as any).penis_desc ?? '')} penetrates your cunt, stretching you out a bit${((s as any).temp_mens ?? '')}.`);
          // TODO-QSP: dynamic text: It takes a moment but the discomfort fades away. Before you know it you are gyra...
          scene.text(`It takes a moment but the discomfort fades away. Before you know it you are gyrating your hips to the rhythm of ${((s as any).boydesc ?? '')} pumping your now perfectly snug pussy.`);
        } else {
          if (((s as any).vaginal_tightness ?? 0) >= 2) {
            // TODO-QSP: dynamic text: You sigh deeply as you savor the feeling of a <<$penis_desc>> slowly entering yo...
            scene.text(`You sigh deeply as you savor the feeling of a ${((s as any).penis_desc ?? '')} slowly entering your moist tunnel.`);
            // TODO-QSP: dynamic text: Gradually getting into rhythm, you grind your ass against <<$boydesc>>''s crotch...
            scene.text(`Gradually getting into rhythm, you grind your ass against ${((s as any).boydesc ?? '')}'s crotch and moan as ${((s as any).xe ?? '')} fucks your cunt${((s as any).temp_mens ?? '')}.`);
          } else {
            if (((s as any).vaginal_tightness ?? 0) >= -3) {
              // TODO-QSP: dynamic text: <<$boydesc>> thrusts into you<<$temp_mens>>, <<$xyr>> <<$penis_desc>> rubbing ag...
              scene.text(`${((s as any).boydesc ?? '')} thrusts into you${((s as any).temp_mens ?? '')}, ${((s as any).xyr ?? '')} ${((s as any).penis_desc ?? '')} rubbing against your inner walls, hitting just the right spot.`);
              // TODO-QSP: dynamic text: Your moans are mixed with lewd, wet slapping sounds from <<$xem>> fucking your p...
              scene.text(`Your moans are mixed with lewd, wet slapping sounds from ${((s as any).xem ?? '')} fucking your pussy.`);
            } else {
              if (((s as any).vaginal_tightness ?? 0) < -3) {
                // TODO-QSP: dynamic text: You feel <<$boydesc>>''s <<$penis_desc>> sliding through your wet folds<<$temp_m...
                scene.text(`You feel ${((s as any).boydesc ?? '')}'s ${((s as any).penis_desc ?? '')} sliding through your wet folds${((s as any).temp_mens ?? '')}. You savor the intense pleasure from the ${((s as any).penis_desc ?? '')} inside you, your cunt aching to be filled even more.`);
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
    scene.text(`${((s as any).boydesc ?? '')} pushes ${((s as any).xyr ?? '')} ${((s as any).penis_desc ?? '')} into your unexplored pussy gently. It is a bit painful, but as your lust builds up you do not want to wait anymore.`);
    // TODO-QSP: dynamic text: With the next push from <<$boydesc>>, you push your ass towards <<$xyr>> cock. Y...
    scene.text(`With the next push from ${((s as any).boydesc ?? '')}, you push your ass towards ${((s as any).xyr ?? '')} cock. You feel your hymen break and his cock slide into deep inside you, ${((s as any).xyr ?? '')} head rubbing against your no longer untouched walls as you both moan very loudly.`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyPutsCondom(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = ((((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) ? (1) : (0));
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
        (s as any).noprotect = 1;
        (s as any).sexcontra = (Math.floor(Math.random() * 2) + 4);
        // TODO-QSP: dynamic text: '<<ucase(mid($boydesc,1,1))>><<mid($boydesc,2,len($boydesc)-1)>> takes your '+ii...
        scene.text('\'' + (String((String(((s as any).boydesc ?? '')).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String(((s as any).boydesc ?? '')).slice((2)-1, ((2)-1)+((String(((s as any).boydesc ?? '')).length)-1))) + ' takes your \'+iif(preziktype = 2, \'sabotaged \', )+ \'condom and puts it on ' + ((s as any).xyr ?? '') + ' ' + ((s as any).dick ?? '') + ' centimeter dick. \'');
      } else {
        (s as any).sexcontra = 3;
        // TODO-QSP: dynamic text: <<ucase(mid($boydesc,1,1))>><<mid($boydesc,2,len($boydesc)-1)>> takes your condo...
        scene.text(`${(String((String(((s as any).boydesc ?? '')).slice((1)-1, ((1)-1)+(1)))).toUpperCase())}${(String(((s as any).boydesc ?? '')).slice((2)-1, ((2)-1)+((String(((s as any).boydesc ?? '')).length)-1)))} takes your condom and puts it on ${((s as any).xyr ?? '')} ${((s as any).dick ?? '')} centimeter dick. `);
        (s as any).noprotect = 0;
      }
      if (((s as any).preziktype ?? 0) === 2) {
        (s as any).sexcontra = 7;
        (s as any).noprotect = 1;
      }
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
    } else {
      (s as any).sexcontra = 0;
    }
  } else {
    (s as any).custmsg = ((s as any).locArgs?.[1] ?? 0);
    // TODO-QSP: dynamic text: <<$custmsg>> 
    scene.text(`${((s as any).custmsg ?? '')} `);
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
        (s as any).noprotect = 1;
        (s as any).sexcontra = (Math.floor(Math.random() * 2) + 4);
      } else {
        (s as any).sexcontra = 3;
        (s as any).noprotect = 0;
      }
      if (((s as any).preziktype ?? 0) === 2) {
        (s as any).sexcontra = 7;
        (s as any).noprotect = 1;
      }
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
    } else {
      (s as any).sexcontra = 0;
    }
  }
  // TODO-QSP: end & !! --- boy_puts_condom ---
  scene.build();
}

function enterBoyPutsHisCondom(s: GameState, scene: SceneBuilder): void {
  (s as any).bwa_boy = ((Number((s as any).locArgs?.[1] ?? 0) === '') ? (((s as any).boydesc ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  (s as any).protect = 1;
  (s as any).sexcontra = 3;
  // TODO-QSP: dynamic text: <<ucase(mid($bwa_boy,1,1))>><<mid($bwa_boy,2,len($bwa_boy)-1)>> takes his condom...
  scene.text(`${(String((String(((s as any).bwa_boy ?? '')).slice((1)-1, ((1)-1)+(1)))).toUpperCase())}${(String(((s as any).bwa_boy ?? '')).slice((2)-1, ((2)-1)+((String(((s as any).bwa_boy ?? '')).length)-1)))} takes his condom and puts it on ${((s as any).xyr ?? '')} ${((s as any).penis_desc ?? '')}. `);
  // TODO-QSP: end & !! --- boy_puts_his_condom ---
  scene.build();
}

function enterPcPutsCondom(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = ((((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) ? (1) : (0));
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
        (s as any).noprotect = 1;
        (s as any).sexcontra = (Math.floor(Math.random() * 2) + 4);
        // TODO-QSP: dynamic text: 'You take your '+iif(preziktype = 2, 'sabotaged ', '')+ 'condom and put it on <<...
        scene.text('\'You take your \'+iif(preziktype = 2, \'sabotaged \', )+ \'condom and put it on ' + ((s as any).xyr ?? '') + ' ' + ((s as any).dick ?? '') + ' centimeter dick. \'');
      } else {
        (s as any).sexcontra = 3;
        // TODO-QSP: dynamic text: You take your condom and put it on <<$xyr>> <<dick>> centimeter dick. 
        scene.text(`You take your condom and put it on ${((s as any).xyr ?? '')} ${((s as any).dick ?? '')} centimeter dick. `);
        (s as any).noprotect = 0;
      }
      if (((s as any).preziktype ?? 0) === 2) {
        (s as any).sexcontra = 7;
        (s as any).noprotect = 1;
      }
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
    } else {
      (s as any).sexcontra = 0;
    }
  } else {
    (s as any).custmsg = ((s as any).locArgs?.[1] ?? 0);
    // TODO-QSP: dynamic text: <<$custmsg>> 
    scene.text(`${((s as any).custmsg ?? '')} `);
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bad_condoms'] = ((s as any).mc_inventory['bad_condoms'] ?? 0) - (1);
        (s as any).noprotect = 1;
        (s as any).sexcontra = (Math.floor(Math.random() * 2) + 4);
      } else {
        (s as any).sexcontra = 3;
        (s as any).noprotect = 0;
      }
      if (((s as any).preziktype ?? 0) === 2) {
        (s as any).sexcontra = 7;
        (s as any).noprotect = 1;
      }
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
    } else {
      (s as any).sexcontra = 0;
    }
  }
  // TODO-QSP: end & !! --- pc_puts_condom ---
  scene.build();
}

function enterBoyWantsAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).bwa_boy = ((Number((s as any).locArgs?.[1] ?? 0) === '') ? (((s as any).boydesc ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  if (((s as any).bwa_boy ?? 0) === 'lubri') {
    (s as any).bwa_boy = ((s as any).boydesc ?? 0);
  }
  if (((s as any).analPlugIn ?? 0) === 1) {
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 1;
    if (((s as any).pcs_ass ?? 0) < 16) {
      // TODO-QSP: dynamic text: <<$bwa_boy>> pulls the plug out of your narrow and tight ass, 
      scene.text(`${((s as any).bwa_boy ?? '')} pulls the plug out of your narrow and tight ass, `);
    } else {
      // TODO-QSP: dynamic text: <<$bwa_boy>> pulls the plug out of your ass, 
      scene.text(`${((s as any).bwa_boy ?? '')} pulls the plug out of your ass, `);
    }
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 'lubri') {
    // TODO-QSP: dynamic text: <<iif(analPlugOut = 1,$xe,$bwa_boy)>> takes a tube of lubricant, squeezes a litt...
    scene.text(`${((((s as any).analPlugOut ?? 0) === 1) ? (((s as any).xe ?? '')) : (((s as any).bwa_boy ?? '')))} takes a tube of lubricant, squeezes a little on ${((s as any).xyr ?? '')} palm and rubs your anus. `);
    qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
      // TODO-QSP: dynamic text: You have no lube, <<iif(analPlugOut = 1,$xe,$bwa_boy)>> spits on his fingers and...
      scene.text(`You have no lube, ${((((s as any).analPlugOut ?? 0) === 1) ? (((s as any).xe ?? '')) : (((s as any).bwa_boy ?? '')))} spits on his fingers and using saliva he massages your anus. `);
      qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
    } else {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
      if ((!(Math.floor(Math.random() * 3) + 0))) {
        // TODO-QSP: dynamic text: You take a tube of lubricant and hand it to <<$bwa_boy>>, he squeezes a little o...
        scene.text(`You take a tube of lubricant and hand it to ${((s as any).bwa_boy ?? '')}, he squeezes a little on his palm and rubs your anus. `);
      } else {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: You squeeze anal lube on your hand and begin to smear it in your ass. Then you g...
          scene.text(`You squeeze anal lube on your hand and begin to smear it in your ass. Then you give the guy a tube and ${((s as any).xe ?? '')} starts lucricating ${((s as any).xyr ?? '')} cock. `);
        } else {
          // TODO-QSP: dynamic text: You squeeze anal lube on your hand and begin to smear it in your ass. Then you g...
          scene.text(`You squeeze anal lube on your hand and begin to smear it in your ass. Then you give it to ${((s as any).xem ?? '')} and ${((s as any).xe ?? '')} smears it on ${((s as any).xyr ?? '')} dick. `);
        }
      }
      qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
    }
  }
  // TODO-QSP: end & !! --- boy_wants_anal ---
  scene.build();
}

function enterGirlWantsAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).bwa_girl = ((Number((s as any).locArgs?.[1] ?? 0) === '') ? (((s as any).boydesc ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  if (((s as any).bwa_girl ?? 0) === 'lubri') {
    (s as any).bwa_girl = ((s as any).boydesc ?? 0);
  }
  if (((s as any).analPlugIn ?? 0) === 1) {
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 1;
    if (((s as any).pcs_ass ?? 0) < 16) {
      // TODO-QSP: dynamic text: <<$bwa_girl>> pulls the plug out of your narrow and tight ass, 
      scene.text(`${((s as any).bwa_girl ?? '')} pulls the plug out of your narrow and tight ass, `);
    } else {
      // TODO-QSP: dynamic text: <<$bwa_girl>> pulls the plug out of your ass, 
      scene.text(`${((s as any).bwa_girl ?? '')} pulls the plug out of your ass, `);
    }
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 'lubri') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) + (1);
    // TODO-QSP: dynamic text: <<iif(analPlugOut = 1,$xe,$bwa_girl)>> takes a tube of lubricant, squeezes a lit...
    scene.text(`${((((s as any).analPlugOut ?? 0) === 1) ? (((s as any).xe ?? '')) : (((s as any).bwa_girl ?? '')))} takes a tube of lubricant, squeezes a little on her palm and rubs your anus. `);
    qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
      // TODO-QSP: dynamic text: You have no lube, <<iif(analPlugOut = 1,$xe,$bwa_girl)>> spits on her fingers an...
      scene.text(`You have no lube, ${((((s as any).analPlugOut ?? 0) === 1) ? (((s as any).xe ?? '')) : (((s as any).bwa_girl ?? '')))} spits on her fingers and using saliva she massages your anus. `);
      qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        // TODO-QSP: dynamic text: You take a tube of lubricant and hand it to <<$bwa_girl>>, she squeezes a little...
        scene.text(`You take a tube of lubricant and hand it to ${((s as any).bwa_girl ?? '')}, she squeezes a little on her palm and rubs your anus. `);
        qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
      }
    }
  }
  // TODO-QSP: end & !! --- girl_wants_anal ---
  scene.build();
}

function enterAfterAnal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).analPlugOut ?? 0) === 1) {
    (s as any).analPlugIn = 1;
    if (Number((s as any).locArgs?.[1] ?? 0) === 'boy') {
      // TODO-QSP: dynamic text: <<$ARGS[2]>> takes your butt plug and he puts it back into your anus. He grins: ...
      scene.text(`${((s as any).locArgs?.[2] ?? '')} takes your butt plug and he puts it back into your anus. He grins: "Continue your training"`);
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'girl') {
        // TODO-QSP: dynamic text: <<$ARGS[2]>> takes your butt plug and she puts it back into your anus. She grins...
        scene.text(`${((s as any).locArgs?.[2] ?? '')} takes your butt plug and she puts it back into your anus. She grins: "Continue your training"`);
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'pc') {
          scene.text('You take your butt plug and put it back into your anus. You grin: "I have to keep my butt trained"');
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 'no_plug'  ||  ((s as any).pain ?? 0)?.['asshole'] > 10) {
            (s as any).analPlugIn = 0;
            scene.text('You take your butt plug and put it into your purse. Your anus has to rest for a while now.');
          }
        }
      }
    }
  }
  // TODO-QSP: end & !! --- after_anal ---
  scene.build();
}

function enterAnalsex(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  // TODO-QSP: dynamic text: <<$boydesc>> fingers your anus, slowly pushing in before squeezing in a second o...
  scene.text(`${((s as any).boydesc ?? '')} fingers your anus, slowly pushing in before squeezing in a second one, `);
  // TODO-QSP: dynamic text: iif(pcs_ass < 10, 'when <<$xe>> tries inserting a third finger you groan in pain...
  scene.text(`iif(pcs_ass < 10, 'when ${((s as any).xe ?? '')} tries inserting a third finger you groan in pain. ', '${((s as any).xe ?? '')} inserts a third finger, very slowly thrusting and wiggling to stretch your anus, ')`);
  // TODO-QSP: dynamic text: <<$xe>> pulls <<$xyr>> fingers out of your ass and you feel <<$xyr>> <<$penis_de...
  scene.text(`${((s as any).xe ?? '')} pulls ${((s as any).xyr ?? '')} fingers out of your ass and you feel ${((s as any).xyr ?? '')} ${((s as any).penis_desc ?? '')} pushing against your butthole. `);
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (-1);
  }
  // TODO-QSP: gs 'arousal', 'anal', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[8]
  (s as any).grange = 0;
  // TODO-QSP: dynamic text: iif(arousalVars['girth_diff'] + arousalVars['length_diff'] >= 20, 'You scream an...
  scene.text(`iif(arousalVars['girth_diff'] + arousalVars['length_diff'] >= 20, 'You scream and bite your lip from the sharp pain when ${((s as any).xe ?? '')} penetrates your ass, ', 'You moan when ${((s as any).xe ?? '')} penetrates your ass, ')`);
  // TODO-QSP: dynamic text: <<$xe>> stops for a moment, giving your ass time to adjust to <<$xyr>> cock in i...
  scene.text(`${((s as any).xe ?? '')} stops for a moment, giving your ass time to adjust to ${((s as any).xyr ?? '')} cock in it. Then he starts to slowly move, pumping your anus. `);
  if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] >= (Math.floor(Math.random() * 11) + 25)) {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    // TODO-QSP: dynamic text: You cry and bite your lip when the <<$penis_desc>> begins to thrust in and out o...
    scene.text(`You cry and bite your lip when the ${((s as any).penis_desc ?? '')} begins to thrust in and out of your ass. Your anus feels like it is going to tear apart and all you want is for this torture to be over quickly.`);
  } else {
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] < (Math.floor(Math.random() * 11) + 15)) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      // TODO-QSP: dynamic text: You savor <<$xyr>> cock moving inside you, lightly moaning in rhythm.
      scene.text(`You savor ${((s as any).xyr ?? '')} cock moving inside you, lightly moaning in rhythm.`);
    }
  }
  (s as any).tmp = ((((s as any).sexcontra ?? 0) === 7) ? ('sabotaged ') : (''));
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1, ((s as any).sexcontra ?? 0));
  if (((s as any).sexcontra ?? 0) === 4) {
    // TODO-QSP: dynamic text: Pulling out of you and looking at <<$xyr>> dick, <<$boydesc>> said "Hmm, the con...
    scene.text(`Pulling out of you and looking at ${((s as any).xyr ?? '')} dick, ${((s as any).boydesc ?? '')} said "Hmm, the condom burst."`);
  }
  if (((s as any).analPlugOut ?? 0) > 0) {
    if (((s as any).pain ?? 0)?.['asshole'] > 10) {
      qspCall(s, 'dinsex', 'after_anal', 'no_plug', ((s as any).boydesc ?? 0));
    } else {
      qspCall(s, 'dinsex', 'after_anal', 'boy', ((s as any).boydesc ?? 0));
    }
  }
  // TODO-QSP: end & !! --- analsex ---
  scene.build();
}

function enterSexcum(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).npcID ?? 0);
  }
  qspCall(s, 'npcStat', '', ((s as any).locArgs?.[1] ?? 0), 'm');
  (s as any).frost = 0;
  if (((s as any).protect ?? 0) !== 1) {
    if ((Math.floor(Math.random() * 2) + 0) === 0  ||  ((s as any).pose ?? 0) === 3) {
      (s as any).cumvag_text = (Math.floor(Math.random() * 3) + 0);
      if ((!((s as any).cumvag_text ?? 0))) {
        // TODO-QSP: dynamic text: <<$xyrc13>> movements speed up and <<$xe13>> drives <<$xyr13>> cock balls deep i...
        scene.text(`${((s as any).xyrc13 ?? '')} movements speed up and ${((s as any).xe13 ?? '')} drives ${((s as any).xyr13 ?? '')} cock balls deep into you. With a beatific smile, ${((s as any).xe13 ?? '')} cums deep inside you. You feel a warm jet pour into your womb.`);
      }
      if (((s as any).cumvag_text ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$xec13>> does not pull out and instead pulls you tightly against <<$xem13>> an...
        scene.text(`${((s as any).xec13 ?? '')} does not pull out and instead pulls you tightly against ${((s as any).xem13 ?? '')} and your pussy is filled with splashes of semen.`);
      }
      if (((s as any).cumvag_text ?? 0) === 2) {
        // TODO-QSP: dynamic text: <<$xec13>> groans, and you feel a jet of sperm hit you inside your body.
        scene.text(`${((s as any).xec13 ?? '')} groans, and you feel a jet of sperm hit you inside your body.`);
      }
      qspCall(s, 'cuminsidereact', '', ((s as any).npcdesc13 ?? 0));
      qspCall(s, 'cum_call', '', '', ((s as any).npcID13 ?? 0), 1);
    } else {
      if ((!((s as any).pose ?? 0))) {
        (s as any).spafinloc = 14;
        // TODO-QSP: dynamic text: <<$npcdesc13>> groans and after pulling out <<$xyr13>> dick, <<$xe13>> came on y...
        scene.text(`${((s as any).npcdesc13 ?? '')} groans and after pulling out ${((s as any).xyr13 ?? '')} dick, ${((s as any).xe13 ?? '')} came on your stomach.`);
        qspCall(s, 'cum_call', 'stomach', ((s as any).npcID13 ?? 0), 1);
      } else {
        if (((s as any).pose ?? 0) === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc13>> groans and after pulling out <<$xyr13>> dick, <<$xe13>> came on y...
          scene.text(`${((s as any).npcdesc13 ?? '')} groans and after pulling out ${((s as any).xyr13 ?? '')} dick, ${((s as any).xe13 ?? '')} came on your ass.`);
          qspCall(s, 'cum_call', 'butt', ((s as any).npcID13 ?? 0), 1);
        }
      }
    }
  } else {
    (s as any).tmp = ((((s as any).sexcontra ?? 0) === 7) ? ('sabotaged ') : (''));
    // TODO-QSP: dynamic text: <<$npcdesc13>> groans and you realized that <<$xe13>> ejaculated in the <<$tmp>>...
    scene.text(`${((s as any).npcdesc13 ?? '')} groans and you realized that ${((s as any).xe13 ?? '')} ejaculated in the ${((s as any).tmp ?? '')}condom.`);
    if (((s as any).sexcontra ?? 0) === 4) {
      // TODO-QSP: dynamic text: Pulling out of you and looking at <<$xyr13>> dick, <<$boydesc13>> said "Hmm, the...
      scene.text(`Pulling out of you and looking at ${((s as any).xyr13 ?? '')} dick, ${((s as any).boydesc13 ?? '')} said "Hmm, the condom burst."`);
    } else {
      if (((s as any).sexcontra ?? 0) === 5) {
        // TODO-QSP: dynamic text: Pulling out of you and looking at <<$xyr13>> dick, <<$boydesc13>> said "Fuck! Th...
        scene.text(`Pulling out of you and looking at ${((s as any).xyr13 ?? '')} dick, ${((s as any).boydesc13 ?? '')} said "Fuck! The condom is missing."`);
      }
    }
    (s as any).eff_contra = ((s as any).sexcontra ?? 0);
    qspCall(s, 'cum_call', '', '', ((s as any).npcID13 ?? 0), 1, ((s as any).sexcontra ?? 0));
    qspCall(s, 'cuminsidereact', '', ((s as any).npcdesc13 ?? 0), ((s as any).eff_contra ?? 0));
    (s as any).protect = 0;
  }
  (s as any).pose = 0;
  // TODO-QSP: end & !! --- sexcum ---
  scene.build();
}

function enterBjRandom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['bj'] === 0) {
    scene.text('You are anxious about the idea of sucking a cock, having never given a blowjob before. You wonder what it will taste like.');
  }
  if (((s as any).stat ?? 0)?.['bj'] <= 10) {
    // TODO-QSP: dynamic text: Hesitantly bringing your face to <<$boydesc>>''s crotch, you lightly press your ...
    scene.text(`Hesitantly bringing your face to ${((s as any).boydesc ?? '')}'s crotch, you lightly press your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips against ${((s as any).xyr ?? '')} dick, tasting the slight saltiness.`);
    scene.text('Then you start flicking your tongue around the head as you wrap your lips further, stroking the shaft in the meantime.');
  } else {
    if (((s as any).stat ?? 0)?.['bj'] <= 25) {
      // TODO-QSP: dynamic text: You lightly put <<$boydesc>>''s cock into your mouth, rolling your tongue around...
      scene.text(`You lightly put ${((s as any).boydesc ?? '')}'s cock into your mouth, rolling your tongue around the head as you rhythmically stroke the shaft.`);
      scene.text('After a moment you start getting into rhythm, lightly bobbing your head although not sucking his dick much further than the tip.');
    } else {
      if (((s as any).stat ?? 0)?.['bj'] <= 40) {
        // TODO-QSP: dynamic text: You wrap your <<$pc_desc[''lips'']>> lips around the <<$penis_desc>> in front of...
        scene.text(`You wrap your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips around the ${((s as any).penis_desc ?? '')} in front of you. You give ${((s as any).boydesc ?? '')} a moment to adjust to the warmthness with more than half his cock resting in your mouth`);
        // TODO-QSP: dynamic text: Then you greedily lean forwards, taking <<$xyr>> dick deeper in your mouth and s...
        scene.text(`Then you greedily lean forwards, taking ${((s as any).xyr ?? '')} dick deeper in your mouth and start to bob your head back and forth along ${((s as any).xyr ?? '')} ${((s as any).penis_desc ?? '')}`);
      } else {
        if (((s as any).stat ?? 0)?.['bj'] <= 60) {
          // TODO-QSP: dynamic text: Imagining how the hard cock in front of your face would feel between your <<$pc_...
          scene.text(`Imagining how the hard cock in front of your face would feel between your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips, you just can't hold back and hungrily take the whole length in your mouth until its tip is resting at the entrance of your throat`);
          scene.text('You playfully roll your tongue around the cock you are sucking and try to see if you can swallow the whole length down your throat.');
        } else {
          // TODO-QSP: dynamic text: You lock eyes with <<$boydesc>> and relax your throat as you swallow <<$xyr>> <<...
          scene.text(`You lock eyes with ${((s as any).boydesc ?? '')} and relax your throat as you swallow ${((s as any).xyr ?? '')} ${((s as any).penis_desc ?? '')} in one move like the veteran cocksucker you are, milking ${((s as any).xyr ?? '')} cock with just your throat.`);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- bj_random ---
  scene.build();
}

function enterBjSwallowRandom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['bj'] <= 10) {
    scene.text('Not knowing what else to do, you forcefully gulp down and swallow the sperm filling your mouth. The taste lingers at the back of your throat');
  } else {
    if (((s as any).stat ?? 0)?.['bj'] <= 25) {
      scene.text('You swallow the viscous semen that is filling your mouth, then lick the softening member clean.');
      scene.text('Afterwards you lean forward to plant a tender kiss on the freshly milked cock.');
    } else {
      if (((s as any).stat ?? 0)?.['bj'] <= 40) {
        scene.text('You swallow the warm cum that fills your mouth and smile as you lick the sticky leftovers with your tongue.');
      } else {
        if (((s as any).stat ?? 0)?.['bj'] <= 60) {
          scene.text('Your mouth is quickly filled with warm sperm and you smile as you gulp it down and enjoy the now familiar tart taste.');
        } else {
          scene.text('You let the warm cum drain down the throat, enjoying the familiar taste as you feel it slowly making its way down.');
        }
      }
    }
  }
  // TODO-QSP: end & !! --- bj_swallow_random ---
  scene.build();
}

function enterEnema(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 7;
  qspCall(s, 'cum_cleanup', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).klismaday = ((s as any).daystart ?? 0);
  (s as any).klismaday1 = 1;
  if (Number((s as any).locArgs?.[1] ?? 0)==='') {
    scene.text('You give yourself an enema, feeling clean down there. Your ass is now ready for anal sex without any awkward surprises. ');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0)!== ' ') {
      // TODO-QSP: dynamic text: <<$ARGS[1]>> 
      scene.text(`${((s as any).locArgs?.[1] ?? '')} `);
    }
  }
  // TODO-QSP: end & !! --- enema ---
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).roll_3d = (Math.floor(Math.random() * 3) + 1);
  (s as any).roll_2d = (Math.floor(Math.random() * 2) + 1);
  if (((s as any).dick ?? 0) <= 8) {
    if (((s as any).roll_3d ?? 0) === 1) {
      (s as any).penis_desc = 'laughably tiny prick';
    }
    if (((s as any).roll_3d ?? 0) === 2) {
      (s as any).penis_desc = 'micropenis';
    }
    if (((s as any).roll_3d ?? 0) === 3) {
      (s as any).penis_desc = 'erect light switch';
    }
  } else {
    if (((s as any).dick ?? 0) <= 11) {
      if (((s as any).roll_2d ?? 0) === 1) {
        (s as any).penis_desc = 'short dick';
      }
      if (((s as any).roll_2d ?? 0) === 2) {
        (s as any).penis_desc = 'little peeper';
      }
    } else {
      if (((s as any).dick ?? 0) <= 14) {
        if (((s as any).roll_3d ?? 0) === 1) {
          (s as any).penis_desc = 'average dick';
        }
        if (((s as any).roll_3d ?? 0) === 2) {
          (s as any).penis_desc = 'mid-sized penis';
        }
        if (((s as any).roll_3d ?? 0) === 3) {
          (s as any).penis_desc = 'medium length cock';
        }
      } else {
        if (((s as any).dick ?? 0) <= 17) {
          if (((s as any).roll_2d ?? 0) === 1) {
            (s as any).penis_desc = 'above average penis';
          }
          if (((s as any).roll_2d ?? 0) === 2) {
            (s as any).penis_desc = 'somewhat long dick';
          }
        } else {
          if (((s as any).dick ?? 0) <= 20) {
            if (((s as any).roll_2d ?? 0) === 1) {
              (s as any).penis_desc = 'long cock';
            }
            if (((s as any).roll_2d ?? 0) === 2) {
              (s as any).penis_desc = 'perfect-length meatstick';
            }
          } else {
            if (((s as any).dick ?? 0) <= 23) {
              if (((s as any).roll_2d ?? 0) === 1) {
                (s as any).penis_desc = 'elephant-trunk rod';
              }
              if (((s as any).roll_2d ?? 0) === 2) {
                (s as any).penis_desc = 'worryingly long fuckpole';
              }
            } else {
              if (((s as any).dick ?? 0) >= 24) {
                if (((s as any).roll_3d ?? 0) === 1) {
                  (s as any).penis_desc = 'ridiculously long dick';
                }
                if (((s as any).roll_3d ?? 0) === 2) {
                  (s as any).penis_desc = 'frightening fuckspear';
                }
                if (((s as any).roll_3d ?? 0) === 3) {
                  (s as any).penis_desc = 'literal third leg';
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).penis_desc = ((s as any).dick_girth ?? 0) + ', ' + ((s as any).penis_desc ?? 0);
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
    case 'boy_puts_his_condom':
      enterBoyPutsHisCondom(s, scene);
      break;
    case 'pc_puts_condom':
      enterPcPutsCondom(s, scene);
      break;
    case 'boy_wants_anal':
      enterBoyWantsAnal(s, scene);
      break;
    case 'girl_wants_anal':
      enterGirlWantsAnal(s, scene);
      break;
    case 'after_anal':
      enterAfterAnal(s, scene);
      break;
    case 'analsex':
      enterAnalsex(s, scene);
      break;
    case 'sexcum':
      enterSexcum(s, scene);
      break;
    case 'bj_random':
      enterBjRandom(s, scene);
      break;
    case 'bj_swallow_random':
      enterBjSwallowRandom(s, scene);
      break;
    case 'enema':
      enterEnema(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dinSex: LocationDef = {
  name: 'dinSex',
  title: 'You are anxious about the idea of sucking a cock, having nev',
  region: 'other',
  enter: enter,
};
