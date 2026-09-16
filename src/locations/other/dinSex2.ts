import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStaminaNpc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sexstart ?? 0) <= 0) {
    (s as any).sexstart = 1;
    (s as any).sexvar = Math.floor(Math.random() * 4) + 2;
  }
  (s as any).sh_ind = ((s as any).sexvar ?? 0);
  if (((s as any).sh_ind ?? 0) === 6) {
    (s as any).ind_npc = '<font color = green  > ██████ </font> ';
  }
  if (((s as any).sh_ind ?? 0) === 5) {
    (s as any).ind_npc = '<font color = green  > █████_ </font> ';
  }
  if (((s as any).sh_ind ?? 0) === 4) {
    (s as any).ind_npc = qspFunc(s, 'wrap', 'accent', ' ████__ ') + ' ';
  }
  if (((s as any).sh_ind ?? 0) === 3) {
    (s as any).ind_npc = qspFunc(s, 'wrap', 'accent', ' ███___ ') + ' ';
  }
  if (((s as any).sh_ind ?? 0) === 2) {
    (s as any).ind_npc = '<font color = red  > ██____ </font> ';
  }
  if (((s as any).sh_ind ?? 0) === 1) {
    (s as any).ind_npc = '<font color = red  > █_____ </font> ';
  }
  if (((s as any).sh_ind ?? 0) <=0) {
    (s as any).ind_npc = '<font color = red  > Cumming! </font> ';
  }
  // TODO-QSP: dynamic text: <center>You have sex with <<$boydesc>>, his stamina: <<$ind_npc>></center>
  scene.text(`<center>You have sex with ${((s as any).boydesc || '')}, his stamina: ${((s as any).ind_npc || '')}</center>`);
  // TODO-QSP: end
  scene.build();
}

function enterDStraponVag(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (-1);
  }
  (s as any).frost = 0;
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    (s as any).grange = 0;
    (s as any).temp_mens = ((((s as any).cycle ?? 0) <= 0) ? (' and menstruation blood leaks from your vagina') : (''));
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 30) {
      // TODO-QSP: dynamic text: You groan in pain when <<$boydesc>> penetrates you. Tears flow from your eyes an...
      scene.text(`You groan in pain when ${((s as any).boydesc || '')} penetrates you. Tears flow from your eyes and it feels like someone drove a red-hot rod into your vagina. You cry and moan while ${((s as any).xyr || '')} fake ${((s as any).dick || '')} centimeter dick fucks your pussy${((s as any).temp_mens || '')}.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 30) {
      // TODO-QSP: dynamic text: You bite your lip in pain when <<$boydesc>> enters you. It is very painful. You ...
      scene.text(`You bite your lip in pain when ${((s as any).boydesc || '')} enters you. It is very painful. You frown and moan in pain while ${((s as any).xyr || '')} fake ${((s as any).dick || '')} centimeter dick fucks your pussy${((s as any).temp_mens || '')}.`);
    }
    if (((s as any).cycle ?? 0) <= 0) {
      (s as any).temp_mens = ', even though' + ((s as any).temp_mens ?? 0);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 12  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 20) {
      // TODO-QSP: dynamic text: You wince at the sudden pain when <<$boydesc>> enters you, it hurts but graduall...
      scene.text(`You wince at the sudden pain when ${((s as any).boydesc || '')} enters you, it hurts but gradually becomes quite tolerable. You are trying to get aroused while fake ${((s as any).xyr || '')} ${((s as any).dick || '')} centimeter dick fucks your pussy${((s as any).temp_mens || '')}, but you do not succeed.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 7  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 12) {
      // TODO-QSP: dynamic text: You are startled by the feeling that your pussy is stretching when <<$boydesc>> ...
      scene.text(`You are startled by the feeling that your pussy is stretching when ${((s as any).boydesc || '')} enters you. It feels good when rubber ${((s as any).xyr || '')} ${((s as any).dick || '')} centimeter dick fucks your pussy${((s as any).temp_mens || '')}.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >=  2  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 7) {
      // TODO-QSP: dynamic text: You are startled by the feeling that your pussy is stretching as <<$boydesc>> en...
      scene.text(`You are startled by the feeling that your pussy is stretching as ${((s as any).boydesc || '')} enters you. It feels good when ${((s as any).xyr || '')} ${((s as any).dick || '')} centimeter rubber dick fucks your pussy. Gradually, a pleasant warmth and some pulsations start building up in your stomach, then the feeling decreases a little and remains like that until the end${((s as any).temp_mens || '')}.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= -3  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 2) {
      // TODO-QSP: dynamic text: You flinch from a pleasant feeling when your pussy is stretched by <<$xyr>> dick...
      scene.text(`You flinch from a pleasant feeling when your pussy is stretched by ${((s as any).xyr || '')} dick. It feels good when ${((s as any).xyr || '')} ${((s as any).dick || '')} centimeter fake dick fucks your pussy${((s as any).temp_mens || '')}. Gradually, a pleasant warmth and some pulsations start building up in your stomach, then the feeling becomes unbearable and your entire body is covered with hot waves of orgasm as you scream with pleasure.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) <  -3) {
      // TODO-QSP: dynamic text: You feel <<$xyr>> fake penis enter your pussy. This gives you a nice tingling fe...
      scene.text(`You feel ${((s as any).xyr || '')} fake penis enter your pussy. This gives you a nice tingling feeling between your legs, but ${((s as any).xyr || '')} ${((s as any).dick || '')} cm rubber dick is significantly less than what your pussy needs. It is not big enough for you. Gradually a pleasant warmth and some pulsations start building up in your stomach. Then the feeling decreases a little and remains like that until the end${((s as any).temp_mens || '')}.`);
    }
    // TODO-QSP: gs 'arousal', 'vaginal_strap', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], ...
  } else {
    (s as any).temp_mens = ((((s as any).cycle ?? 0) <= 0) ? (' and menstruation blood leaks from your vagina') : (''));
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'medium');
    // TODO-QSP: dynamic text: You bite your <<$pc_desc['lips']>> lips in pain while tears start to flow from y...
    scene.text(`You bite your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips in pain while tears start to flow from your eyes when ${((s as any).boydesc || '')} penetrates you, breaking your hymen. You moan while crying and ${((s as any).xyr || '')} rubber ${((s as any).dick || '')} centimeter dick fucks your bloody pussy.`);
    // TODO-QSP: gs 'arousal', 'vaginal', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[...
  }
  // TODO-QSP: end
  scene.build();
}

function enterDVagSexBottle(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).dick = ((((s as any).locArgs?.[2] ?? 0) > 0) ? (((s as any).locArgs?.[2] ?? 0)) : (20));
  (s as any).dick_girth = 'well proportioned';
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (-1);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    (s as any).temp_mens = ((((s as any).cycle ?? 0) <= 0) ? (' and menstruation blood leaks from your vagina') : (''));
    (s as any).grange = 0;
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 30) {
      // TODO-QSP: dynamic text: You groan in pain when the <<dick>> cm dildo enters your pussy. Tears flow from ...
      scene.text(`You groan in pain when the ${((s as any).dick || '')} cm dildo enters your pussy. Tears flow from your eyes and between your legs feels as if you drove in a red-hot rod${((s as any).temp_mens || '')}.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 30) {
      // TODO-QSP: dynamic text: You bite your lip in pain when the <<dick>> cm dildo enters your pussy. You feel...
      scene.text(`You bite your lip in pain when the ${((s as any).dick || '')} cm dildo enters your pussy. You feel pain between your legs${((s as any).temp_mens || '')}.`);
    }
    if (((s as any).cycle ?? 0) <= 0) {
      (s as any).temp_mens = ', even though' + ((s as any).temp_mens ?? 0);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 12  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 20) {
      // TODO-QSP: dynamic text: You flinch at the sudden pain when the <<dick>>cm dildo enters your pussy, but t...
      scene.text(`You flinch at the sudden pain when the ${((s as any).dick || '')}cm dildo enters your pussy, but the pain between your legs slowly calms down and becomes quite tolerable. You are trying to be excited while moving the ${((s as any).dick || '')} cm dildo inside your pussy ${((s as any).temp_mens || '')}, you don't want it to go out.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 7  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 12) {
      // TODO-QSP: dynamic text: You flinch, from feeling your pussy being stretched, with a thrust from a <<dick...
      scene.text(`You flinch, from feeling your pussy being stretched, with a thrust from a ${((s as any).dick || '')}cm dildo. Between your legs feels a little nice, when you fuck yourself with the dildo${((s as any).temp_mens || '')}.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >=  2  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 7) {
      // TODO-QSP: dynamic text: You flinch, from feeling your pussy being stretched, with a thrust from a <<dick...
      scene.text(`You flinch, from feeling your pussy being stretched, with a thrust from a ${((s as any).dick || '')}cm dildo. Between your legs feels a little nice, when you fuck yourself with the dildo. Gradually, a warm and throbbing feeling grows in your lower abdomen, then the feeling subsides and feels nice until the end of${((s as any).temp_mens || '')}.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= -3  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 2) {
      // TODO-QSP: dynamic text: You're startled by a pleasant sensation, when your pussy ravishly starts taking ...
      scene.text(`You're startled by a pleasant sensation, when your pussy ravishly starts taking the dildo. Between your legs becomes very warm, and you feel a pleasant sensation, when a strong ${((s as any).dick || '')} cm dildo moves back and forth in your wet pussy${((s as any).temp_mens || '')}. Gradually, a warm and throbbing feeling grows in your lower abdomen, then the feeling descends on you and your entire body is covered in hot waves of orgasm. You start giving out involuntarily shouts of pleasure while ravishing the dildo.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) <  -3) {
      // TODO-QSP: dynamic text: You feel the dildo penetrating your pussy. Between your legs feels nice, but the...
      scene.text(`You feel the dildo penetrating your pussy. Between your legs feels nice, but the ${((s as any).dick || '')}cm dildo is a bit too small for your pussy. Gradually, a warm and throbbing feeling grows in your lower abdomen, then the feeling slightly subsides and remains steady until the end of${((s as any).temp_mens || '')}.`);
    }
    // TODO-QSP: gs 'arousal', 'vaginal_dildo', ARGS[1], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[8]
  } else {
    (s as any).temp_mens = ((((s as any).cycle ?? 0) <= 0) ? (' and menstruation blood leaks from your vagina') : (''));
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'medium');
    // TODO-QSP: dynamic text: You bite your lip in pain while tears stream from your eyes when the bottle ente...
    scene.text(`You bite your lip in pain while tears stream from your eyes when the bottle enters you, breaking your hymen. You cry out in pain and afterwards reveals a bloody bottle${((s as any).temp_mens || '')}.`);
    // TODO-QSP: gs 'arousal', 'vaginal_dildo', ARGS[1], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[8]
  }
  // TODO-QSP: end
  scene.build();
}

function enterDStraponAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (-1);
  }
  // TODO-QSP: dynamic text: <<$boydesc>> tucks a finger into your anus, then a second one.
  scene.text(`${((s as any).boydesc || '')} tucks a finger into your anus, then a second one.`);
  if (((s as any).pcs_ass ?? 0) < 10) {
    // TODO-QSP: dynamic text: When <<$xec>> inserts three fingers into your ass you groan in pain.
    scene.text(`When ${((s as any).xec || '')} inserts three fingers into your ass you groan in pain.`);
  }
  if (((s as any).pcs_ass ?? 0) >= 10) {
    // TODO-QSP: dynamic text: <<$xec>> starts to stretch your anus using three fingers.
    scene.text(`${((s as any).xec || '')} starts to stretch your anus using three fingers.`);
  }
  // TODO-QSP: dynamic text: <<$boydesc>> pulls <<$xyr>> fingers out of your ass and you feel 
  scene.text(`${((s as any).boydesc || '')} pulls ${((s as any).xyr || '')} fingers out of your ass and you feel `);
  if ((Math.floor(Math.random() * 2) + 0)===0) {
    // TODO-QSP: dynamic text: <<$xyr>> fake cock near your hole.' else '<<$xem>> pushing <<$xyr>> fake cock in...
    scene.text(`${((s as any).xyr || '')} fake cock near your hole.' else '${((s as any).xem || '')} pushing ${((s as any).xyr || '')} fake cock into your hole.`);
  }
  (s as any).grange = 0;
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20) {
    // TODO-QSP: dynamic text: You scream and bite your lip from a sharp pain when <<$xyr>> fake <<dick>> centi...
    scene.text(`You scream and bite your lip from a sharp pain when ${((s as any).xyr || '')} fake ${((s as any).dick || '')} centimeter dick enters your ass.`);
  }
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) <  20) {
    // TODO-QSP: dynamic text: You moan when <<$xyr>> <<dick>>cm rubber dick enters your ass.
    scene.text(`You moan when ${((s as any).xyr || '')} ${((s as any).dick || '')}cm rubber dick enters your ass.`);
  }
  // TODO-QSP: dynamic text: <<$boydesc>> stops for a moment, giving your ass time to adjust to <<$xyr>> cock...
  scene.text(`${((s as any).boydesc || '')} stops for a moment, giving your ass time to adjust to ${((s as any).xyr || '')} cock inside it. Then ${((s as any).xe || '')} starts to slowly move, stretching your anus.`);
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 30) {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    // TODO-QSP: dynamic text: You cry and bite your lip when the <<dick>> centimeter fake cock begins to fuck ...
    scene.text(`You cry and bite your lip when the ${((s as any).dick || '')} centimeter fake cock begins to fuck your ass with full force!. Your ass feels like it is on fire and all you want is for this torture to be over quickly.`);
  } else {
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 30) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      // TODO-QSP: dynamic text: You feel like your anus is stretching when <<$xyr>> fake shaft enters you. You s...
      scene.text(`You feel like your anus is stretching when ${((s as any).xyr || '')} fake shaft enters you. You start to moan rhythmically in unison with ${((s as any).xyr || '')} fake cock's movements inside of you.`);
    }
  }
  // TODO-QSP: gs 'arousal', 'anal', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[8]
  // TODO-QSP: end
  scene.build();
}

function enterDAnalsexBottle(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).dick = ((((s as any).locArgs?.[2] ?? 0) > 0) ? (((s as any).locArgs?.[2] ?? 0)) : (20));
  (s as any).dick_girth = 'well proportioned';
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (-1);
  }
  if (((s as any).analPlugIn ?? 0) === 1) {
    scene.text('You pull the plug out of your narrow and tight ass.');
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 1;
  }
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
    scene.text('You have no lube, so you spit on your fingers and, using saliva, you massage your anus.');
    qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
  } else {
    scene.text('You take a tube of lubricant and squeeze a little on your palm and rub your anus.');
    qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
  }
  scene.text('You begin to massage your anus with your fingers.');
  if (((s as any).pcs_ass ?? 0) < 10) {
    scene.text('As you insert three fingers into your ass you groan in pain.');
  }
  if (((s as any).pcs_ass ?? 0) >= 10) {
    scene.text('You start to stretch your anus using three fingers.');
  }
  scene.text('You pull your fingers out of your ass and then put the bottle near your hole.');
  scene.text('You stopped for a moment, giving your ass time to adjust to the bottle neck inside it, and then start to slowly move, stretching your anus.');
  (s as any).grange = 0;
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20) {
    scene.text('You scream and bite your lip from a sharp pain when the bottle enters your ass.');
  }
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) <  20) {
    scene.text('You moan when the bottle enters your ass.');
  }
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 30) {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    scene.text('You feel like your anus is stretching when the bottle enters you. You start to moan rhythmically in unison with the bottle\'s movements inside of you.');
  } else {
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 30) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      scene.text('You moan in pleasure when the bottle moves inside your ass.');
    }
  }
  // TODO-QSP: gs 'arousal', 'anal_dildo', ARGS[1], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $ARGS[7], $ARGS[8]
  // TODO-QSP: end
  scene.build();
}

function enterDoublepenetration(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).totPain = 0;
  if (((s as any).locArgs?.[1] ?? 0) / 2 === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = (-2);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    (s as any).grange = 0;
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 30) {
      (s as any).totPain = ((s as any).totPain ?? 0) + (4);
      // TODO-QSP: dynamic text: You groan in pain when <<$boydesc1>> penetrates you, tears flow from your eyes a...
      scene.text(`You groan in pain when ${((s as any).boydesc1 || '')} penetrates you, tears flow from your eyes and it feels like someone drove a red-hot rod into your vagina.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 30) {
      (s as any).totPain = ((s as any).totPain ?? 0) + (3);
      // TODO-QSP: dynamic text: You bite your lip in pain when <<$boydesc1>> enters you, it is very painful.
      scene.text(`You bite your lip in pain when ${((s as any).boydesc1 || '')} enters you, it is very painful.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 12  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 20) {
      (s as any).totPain = ((s as any).totPain ?? 0) + (2);
      // TODO-QSP: dynamic text: You wince at the sudden pain when <<$boydesc1>> enters, it hurts but gradually i...
      scene.text(`You wince at the sudden pain when ${((s as any).boydesc1 || '')} enters, it hurts but gradually it becomes quite tolerable.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 7  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 12) {
      (s as any).totPain = ((s as any).totPain ?? 0) + (1);
      // TODO-QSP: dynamic text: You are startled by the feeling of your pussy stretching when <<$boydesc1>> ente...
      scene.text(`You are startled by the feeling of your pussy stretching when ${((s as any).boydesc1 || '')} enters you.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >=  2  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 7) {
      // TODO-QSP: dynamic text: You are startled by the feeling of your pussy stretching as <<$boydesc1>> enters...
      scene.text(`You are startled by the feeling of your pussy stretching as ${((s as any).boydesc1 || '')} enters you.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= -3  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 2) {
      // TODO-QSP: dynamic text: You flinch from a pleasant feeling when your pussy is stretched by <<$xyr1>> dic...
      scene.text(`You flinch from a pleasant feeling when your pussy is stretched by ${((s as any).xyr1 || '')} dick.`);
    }
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) <  -3) {
      // TODO-QSP: dynamic text: You feel <<$xyr1>> penis entering your pussy. This gives you a nice tingling fee...
      scene.text(`You feel ${((s as any).xyr1 || '')} penis entering your pussy. This gives you a nice tingling feeling between your legs, but ${((s as any).xyr || '')} ${((s as any).dick || '')} cm dick is significantly smaller than what your pussy needs.`);
    }
  } else {
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'lower', 'medium');
    (s as any).totPain = ((s as any).totPain ?? 0) + (4);
    // TODO-QSP: dynamic text: You bite your <<$pc_desc['lips']>> lips in pain and tears start to flow from you...
    scene.text(`You bite your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips in pain and tears start to flow from your eyes when ${((s as any).boydesc1 || '')} penetrates you, breaking your hymen.`);
  }
  (s as any).grange = 0;
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20) {
    (s as any).totPain = ((s as any).totPain ?? 0) + (1);
    // TODO-QSP: dynamic text: You scream and bite your lip from a sharp pain when <<$xyr2>> <<dick2>> centimet...
    scene.text(`You scream and bite your lip from a sharp pain when ${((s as any).xyr2 || '')} ${((s as any).dick2 || '')} centimeter dick enters your ass.`);
  }
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) <  20) {
    // TODO-QSP: dynamic text: You moan when <<$xyr2>> <<dick2>> centimeter dick enters your ass.
    scene.text(`You moan when ${((s as any).xyr2 || '')} ${((s as any).dick2 || '')} centimeter dick enters your ass.`);
  }
  // TODO-QSP: dynamic text: <<$boydesc2>> stops for a moment, giving your ass time to adjust to <<$xyr2>> co...
  scene.text(`${((s as any).boydesc2 || '')} stops for a moment, giving your ass time to adjust to ${((s as any).xyr2 || '')} cock inside it. He then starts to slowly move, stretching your anus.`);
  if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 30) {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    // TODO-QSP: dynamic text: You cry and bite your lip when the <<dick2>>cm cock begins to fuck your ass.
    scene.text(`You cry and bite your lip when the ${((s as any).dick2 || '')}cm cock begins to fuck your ass.`);
    (s as any).totPain = ((s as any).totPain ?? 0) + (1);
  } else {
    if ((((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) >= 20  &&  (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff']) < 30) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      // TODO-QSP: dynamic text: You feel like your anus is stretching when <<$xyr2>> penis enters you. You start...
      scene.text(`You feel like your anus is stretching when ${((s as any).xyr2 || '')} penis enters you. You start to moan rhythmically in unison with ${((s as any).xyr2 || '')} cock's movements inside of you.`);
    }
  }
  if ((!((s as any).totPain ?? 0))) {
    // TODO-QSP: dynamic text: Feelings merge together when you move inside two members in contact with each ot...
    scene.text(`Feelings merge together when you move inside two members in contact with each other through a thin opening sharing your vagina filled ${((s as any).dick1 || '')} centimeter and a member of your ${((s as any).anustipe || '')} anus filled ${((s as any).dick2 || '')} centimeter member. Your abdomen burns as if pleasant sunlight was spreading heat throughout your body.`);
    (s as any).bonusMana = ((s as any).pcs_mood ?? 0);
    (s as any).DPplus = (((s as any).vaginalOrgasm ?? 0) * 10) + ((s as any).pcs_horny ?? 0) + ((s as any).bonusMana ?? 0);
    (s as any).DPminus = Math.floor(Math.random() * 101) + 250;
    if (((s as any).DPplus ?? 0) > ((s as any).DPminus ?? 0)) {
      (s as any).vaginalOrgasm = ((s as any).vaginalOrgasm ?? 0) + (1);
      (s as any).DPorgasm = ((s as any).DPorgasm ?? 0) + (1);
      (s as any).orgasm = ((s as any).orgasm ?? 0) + (1);
      (s as any).pcs_horny = 0;
      scene.text('Suddenly you powerfully orgasm while moaning and screaming until your muscles are tightening frantically around two members on the inside of your body.');
    }
  } else {
    if (((s as any).totPain ?? 0) === 1) {
      // TODO-QSP: dynamic text: Feelings merge together when you move inside two members in contact with each ot...
      scene.text(`Feelings merge together when you move inside two members in contact with each other through a thin opening share your vagina filled ${((s as any).dick1 || '')} centimeter and a member of your ${((s as any).anustipe || '')} anus filled ${((s as any).dick2 || '')} centimeter member. It hurts a little, but still very nice while all free holes are being filled by members.`);
    } else {
      if (((s as any).totPain ?? 0) === 2) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0)/2;
        (s as any).pcs_mood = 50;
        // TODO-QSP: dynamic text: You strattle themselves and feel like your holes are about ready to burst when y...
        scene.text(`You strattle themselves and feel like your holes are about ready to burst when you move inside two members in contact with each other through a thin opening sharing your vagina filled ${((s as any).dick || '')} centimeter and a member of your ${((s as any).anustipe || '')} anus filled ${((s as any).dick2 || '')} centimeter member. Feeling very strange, in a tangle of mixed pain, pleasure and painful overcrowding.`);
      } else {
        if (((s as any).totPain ?? 0) === 3) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0)/4;
          (s as any).pcs_mood = 25;
          if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
            (s as any).pcs_makeup = 0;
          }
          // TODO-QSP: dynamic text: You hurt and sometimes sharp bursts of pain shoot through your groan when you mo...
          scene.text(`You hurt and sometimes sharp bursts of pain shoot through your groan when you move inside two members in contact with each other through a thin opening sharing your vagina filled ${((s as any).dick || '')} centimeter and a member of your ${((s as any).anustipe || '')} anus filled ${((s as any).dick2 || '')} centimeter member. You feel like you are being split in two as your ass and pussy feel merged into one pretty painful lump. Your eyes are a veil of tears.`);
        } else {
          if (((s as any).totPain ?? 0) >= 4) {
            (s as any).pcs_mood = 5;
            (s as any).pcs_horny = 0;
            if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
              (s as any).pcs_makeup = 0;
            }
            // TODO-QSP: dynamic text: Squeals and tears stream pouring out of your eyes from the terrible pain, your e...
            scene.text(`Squeals and tears stream pouring out of your eyes from the terrible pain, your entire abdomen and genitals feel a sharp pain while ${((s as any).boydesc1 || '')} fucks your vagina with ${((s as any).xyr1 || '')} ${((s as any).dick1 || '')} centimeter dick and ${((s as any).boydesc2 || '')} almost tearing your ${((s as any).anustipe || '')} with ${((s as any).xyr2 || '')} ${((s as any).dick2 || '')} centimeter instrument.`);
          }
        }
      }
    }
  }
  // TODO-QSP: gs 'arousal', 'vaginal',  ARGS[1] / 2, $npcID1, $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $A...
  // TODO-QSP: gs 'arousal', 'anal',    ARGS[1] / 2, $npcID2, $ARGS[2], $ARGS[3], $ARGS[4], $ARGS[5], $ARGS[6], $AR...
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'stamina_npc':
      enterStaminaNpc(s, scene);
      break;
    case 'd_strapon_vag':
      enterDStraponVag(s, scene);
      break;
    case 'd_vag_sex_bottle':
      enterDVagSexBottle(s, scene);
      break;
    case 'd_strapon_anal':
      enterDStraponAnal(s, scene);
      break;
    case 'd_analsex_bottle':
      enterDAnalsexBottle(s, scene);
      break;
    case 'doublepenetration':
      enterDoublepenetration(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dinSex2: LocationDef = {
  name: 'dinSex2',
  title: '████__',
  region: 'other',
  enter: enter,
};
