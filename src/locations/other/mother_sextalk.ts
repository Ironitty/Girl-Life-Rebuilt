import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBathroomDildoShriek1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0) {
    scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildo_shriek4'] }]);
  }
  (s as any).motherQW['bathroom_dildos'] = ((s as any).vanrPar_suction_dildo ?? 0);
  if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 0) {
    (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  } else {
    if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 1) {
      (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
      scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildo_shriek2'] }]);
    } else {
      if (((s as any).motherQW ?? 0)?.['dildo_caught'] >= 2) {
        (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
        scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildo_shriek3'] }]);
      }
    }
  }
  scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
  scene.text('You\'re walking down the hall when you suddenly hear a shriek come from the bathroom. It sounds like your mother. You run to the door just as it opens and you see her there.');
  // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>>! What happe-"
  scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']}! What happe-"`);
  if (((s as any).vanrPar_suction_dildo ?? 0) === 1) {
    scene.text('She cuts you off by holding up a dildo in front of your face.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>. <b>What is this doing in the bathroom</b>?"
    scene.text(`"${((s as any).pcs_firstname ?? 0)}. <b>What is this doing in the bathroom</b>?"`);
    if (((s as any).pcs_inhib ?? 0) > 30) {
      scene.actions([
        { label: '"It\'s my dildo"', handler: (st: GameState) => {
    (s as any).dildo_ownership = 1;
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"It\'s my dildo?" you nonchalantly reply.');
    scene.text('"What do you think you\'re doing with something like this?! It\'s improper for a young lady your age! Not to mention if Kolka or your father saw this stuck inside the bathtub! You\'ll ruin your brother\'s innocence! Vladimir would have a heart attack! And you\'ll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.');
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
      ]);
    }
    scene.actions([
      { label: 'Shamelessly lie your ass off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"It\'s not mine! I don\'t know where it came from!" It\'s an obvious lie, made even more obvious by the fact that your face turns bright red when you say it, but as long as you deny it maybe you can get away with it? "Maybe it\'s An-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know it's yo...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know it's yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
      { label: 'Blame it on Anya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"It\'s not mine! It must be Anya\'s!" you protest, trying to throw your sister under the bus. "She-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know it's yo...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know it's yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
    ]);
  } else {
    scene.text('She cuts you off by holding up a pair of dildos in front of your face.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>. <b>What are these doing in the bathroom?</b>"
    scene.text(`"${((s as any).pcs_firstname ?? 0)}. <b>What are these doing in the bathroom?</b>"`);
    if (((s as any).pcs_inhib ?? 0) > 30) {
      scene.actions([
        { label: '"They\'re my dildos"', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"They\'re my dildos?" you nonchalantly reply, not even bothering to hide it.');
    scene.text('"What do you think you\'re doing with things like these?! They\'re improper for a young lady your age! Not to mention if Kolka or your father saw these! Stuck all over the bathtub and the walls! You\'ll ruin your brother\'s innocence! Vladimir would have a heart attack! And you\'ll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.');
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_multiple');
  } },
        { label: 'Shamelessly lie your ass off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"They\'re not mine! I don\'t know where they came from!" It\'s an obvious lie, made even more obvious by the fact that your face turns bright red when you say it, but as long as you deny it maybe you can get away with it? "Maybe they\'re An-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know they're...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know they're yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_multiple');
  } },
        { label: 'Blame it on Anya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"They\'re not mine! They must be Anya\'s!" you protest, trying to throw your sister under the bus. "She-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know they're...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know they're yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_multiple');
  } },
      ]);
    }
  }
  scene.build();
}

function enterBathroomDildoShriek2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 1) {
    (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  } else {
    if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 2) {
      scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildo_shriek3'] }]);
    }
  }
  scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
  scene.text('You\'re walking down the hall when you suddenly hear a shriek come from the bathroom. Not again… Right as you get to the door, it flies open to show your very angry mother.');
  // TODO-QSP: dynamic text: "Again, <<$pcs_firstname>>?!"
  scene.text(`"Again, ${((s as any).pcs_firstname ?? 0)}?!"`);
  if (((s as any).motherKnowDildo ?? 0) === 1  ||  ((s as any).dildo_ownership ?? 0) === 1) {
    scene.actions([
      { label: '"Sorry…?"', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('Unfortunately, you don\'t think you can weasel out of this one.');
    scene.text('"Uhh… Sorry?" you say, hopeful that she won\'t do what she did last time.');
    scene.text('She returns your apology with a glare. "Confiscated."');
    scene.text('She slams the door in your face and you sigh.');
    scene.text('<i>Well, so much for that…</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } else {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).motherKnowDildo = 1;
    scene.text('You feel a sinking feeling in your chest. It\'s not like you\'re going to be able to weasel your way out of this one.');
    scene.text('"Do you have an excuse this time?"');
    scene.actions([
      { label: '"No…"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"No…" you say dejectedly.');
    // TODO-QSP: dynamic text: "Honestly," she huffs, shaking her head in disappointment. "I expected more of y...
    scene.text(`"Honestly," she huffs, shaking her head in disappointment. "I expected more of you, ${((s as any).pcs_firstname ?? 0)}."`);
    qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending2');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'I need some kind of outlet!', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"I need some kind of outlet!" you say, throwing your arms up in exasperation.');
    scene.text('Your mother steps back, apparently surprised at your change of tactics.');
    // TODO-QSP: dynamic text: "You're always telling me to stay away from men and not to act like a slut. Well...
    scene.text(`"You're always telling me to stay away from men and not to act like a slut. Well ${((s as any).npc_nickname ?? 0)?.['A29']}, <i>I get horny</i>! Yeah, I was masturbating with it last time too! And if you don't want me fucking boys, getting pregnant, or worse, then this is what it takes!"`);
    scene.text('She blinks at your outburst but recomposes herself, taking a dignified stance. "Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage!" You roll your eyes in response.');
    scene.text('"Anyway, you shouldn\'t be leaving stuff like this around the house regardless. I\'m taking this as punishment," she says.');
    // TODO-QSP: dynamic text: "But <<$npc_nickname['A29']>>!"
    scene.text(`"But ${((s as any).npc_nickname ?? 0)?.['A29']}!"`);
    scene.text('"No buts, young lady! Other people live in this household too, so you need to learn to control yourself. If you can\'t do that much, then you don\'t deserve to have one of these."');
    if (((s as any).motherQW ?? 0)?.['dildo_shower_discovery'] === 1) {
      (s as any).motherQW['dildo_shower_discovery'] = 0;
      qspCall(s, 'mother_sextalk', 'dildo_shower_ending1');
    } else {
      qspCall(s, 'mother_sextalk', 'dildo_ending1');
    }
    // TODO-QSP: dynamic text: <i>Ugh. Great. Now I need a new one. At least this gets <<$npc_nickname['A29']>>...
    scene.text(`<i>Ugh. Great. Now I need a new one. At least this gets ${((s as any).npc_nickname ?? 0)?.['A29']} off my back…</i>`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBathroomDildoShriek3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
  (s as any).vanrPar_bathtub_dildo = 0;
  (s as any).vanrPar_bath_shower_dildo = 0;
  (s as any).vanrPar_suction_dildo = 0;
  (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (((s as any).motherQW ?? 0)?.['bathroom_dildos']);
  (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  (s as any).motherQW['bathroom_dildos'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
  scene.text('You\'re walking down the hall when you suddenly hear a shriek come from the bathroom. Not again! Right as you get to the door, it opens up to reveal your mother. She looks more exasperated than angry this time though.');
  // TODO-QSP: dynamic text: "Again, <<$pcs_firstname>>?" she sighs before tossing your toy at you and puttin...
  scene.text(`"Again, ${((s as any).pcs_firstname ?? 0)}?" she sighs before tossing your toy at you and putting a hand to her forehead. "God, I hope you washed everything before I touched it. I'm not going to throw it away this time because I know you're just going to buy more, but please think of your brother and father and stop leaving stuff like this lying around!"`);
  scene.text('She shuts the door and you hear the faucet turn and water spray from the shower.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterBathroomDildoShriek4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
  (s as any).vanrPar_bathtub_dildo = 0;
  (s as any).vanrPar_bath_shower_dildo = 0;
  (s as any).vanrPar_suction_dildo = 0;
  (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (((s as any).motherQW ?? 0)?.['bathroom_dildos']);
  (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  (s as any).motherQW['bathroom_dildos'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
  scene.text('You\'re walking down the hall when you suddenly hear a shriek come from the bathroom. Not again! Right as you get to the door, it flies open to show your very angry mother.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, you disgusting whore! How dare you leave filth like this ly...
  scene.text(`"${((s as any).pcs_firstname ?? 0)}, you disgusting whore! How dare you leave filth like this lying around the house! This is going straight into the garbage!"`);
  scene.text('She stomps straight past you to the front door and flings it open before going down the stairs.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterBathroomDildos1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 0) {
    if (((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildos4'] }]);
    }
    (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  } else {
    if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 1) {
      (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
      scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildos2'] }]);
    } else {
      if (((s as any).motherQW ?? 0)?.['dildo_caught'] >= 2) {
        if (((s as any).motherKnowSpravka ?? 0) > 0  ||  ((s as any).motherKnowWhore ?? 0) > 0) {
          scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildos5'] }]);
        }
        scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'bathroom_dildos3'] }]);
      }
    }
  }
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  scene.text('As you step into the hall, you see your mother there waiting for you. She looks pissed…');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>? Care to explain what I found in the bathroom this morning?"
  scene.text(`"${((s as any).pcs_firstname ?? 0)}? Care to explain what I found in the bathroom this morning?"`);
  if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 1) {
    scene.text('She holds up a suction dildo in her hand. The one you stuck in the bathroom.');
  } else {
    scene.text('She holds up a pair of suction dildos in her hand. The ones you stuck in the bathroom.');
  }
  scene.actions([
    { label: 'Shamelessly lie your ass off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"It\'s not mine! I don\'t know where it came from!" It\'s an obvious lie, made even more obvious by the fact that your face turns bright red when you say it, but as long as you deny it maybe you can get away with it? "Maybe it\'s An-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know it's yo...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know it's yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
    { label: 'Blame it on Anya', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"It\'s not mine! It must be Anya\'s!" you protest, trying to throw your sister under the bus. "She-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know it's yo...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know it's yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
    { label: 'I need some kind of outlet!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Well I need some kind of outlet!" you say, throwing your arms up in exasperation.');
    scene.text('Your mother steps back, apparently surprised at your change of tactics.');
    // TODO-QSP: dynamic text: "You're always telling me to stay away from men and not to act like a slut. Well...
    scene.text(`"You're always telling me to stay away from men and not to act like a slut. Well ${((s as any).npc_nickname ?? 0)?.['A29']}, <i>I get horny</i>! If you don't want me fucking boys, getting pregnant, or worse, then this is what it takes!"`);
    scene.text('She blinks at your outburst but recomposes herself, taking a dignified stance.');
    if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 2) {
      scene.text('"Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage and you certainly don\'t need <i>two</i> of these!" You roll your eyes in response.');
    } else {
      scene.text('"Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage!" You roll your eyes in response.');
    }
    scene.text('"Regardless, you shouldn\'t be leaving stuff like this around the house. I\'m taking these as punishment," she says.');
    // TODO-QSP: dynamic text: "But <<$npc_nickname['A29']>>!"
    scene.text(`"But ${((s as any).npc_nickname ?? 0)?.['A29']}!"`);
    scene.text('"No buts, young lady! Other people live in this household too, so you need to learn to control yourself. If you can\'t do that much, then you don\'t deserve to have these either."');
    if (((s as any).motherQW ?? 0)?.['dildo_shower_discovery'] === 1) {
      (s as any).motherQW['dildo_shower_discovery'] = 0;
      qspCall(s, 'mother_sextalk', 'dildo_shower_ending1');
    } else {
      qspCall(s, 'mother_sextalk', 'dildo_ending1');
    }
    scene.text('<i>Ugh. Great. Now I need new ones.</i>');
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).motherKnowDildo = 1;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathroomDildos2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  scene.text('As you step into the hall, you see your mother there waiting for you. She looks pissed…');
  scene.text('"What\'s your excuse this time?"');
  if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 1) {
    scene.text('She holds up your suction dildo in her hand.');
  } else {
    scene.text('She holds up your suction dildos in her hand.');
  }
  if (((s as any).motherKnowDildo ?? 0) === 1  ||  ((s as any).dildo_ownership ?? 0) === 1) {
    scene.actions([
      { label: '"Sorry…?"', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('Unfortunately, you don\'t think you can weasel out of this one.');
    scene.text('"Uhh… Sorry?" you say, hopeful that she won\'t do what she did last time.');
    scene.text('She returns your apology with a glare. "Confiscated."');
    // TODO-QSP: dynamic text: She walks away into her bedroom still carrying ' + iif(motherQW['bathroom_dildos...
    scene.text('She walks away into her bedroom still carrying \' + iif(motherQW[\'bathroom_dildos\'] = 1, \'it\', \'them\') + \'.');
    scene.text('<i>Well, so much for that…</i>');
    (s as any).motherQW['bathroom_dildos'] = 0;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } else {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherKnowDildo = 1;
    (s as any).motherQW['bathroom_dildos'] = 0;
    scene.actions([
      { label: '"No…"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('"No…" you say dejectedly.');
    // TODO-QSP: dynamic text: "Honestly," she huffs, shaking her head in disappointment. "I expected more of y...
    scene.text(`"Honestly," she huffs, shaking her head in disappointment. "I expected more of you, ${((s as any).pcs_firstname ?? 0)}."`);
    qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending2');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'I need some kind of outlet!', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Well I need some kind of outlet!" you say, throwing your arms up in exasperation.');
    scene.text('Your mother steps back, apparently surprised at your change of tactics.');
    // TODO-QSP: dynamic text: "You're always telling me to stay away from men and not to act like a slut. Well...
    scene.text(`"You're always telling me to stay away from men and not to act like a slut. Well ${((s as any).npc_nickname ?? 0)?.['A29']}, <i>I get horny</i>! Yeah, I was masturbating with it last time too! If you don't want me fucking boys, getting pregnant, or worse, then this is what it takes!"`);
    scene.text('She blinks at your outburst but recomposes herself, taking a dignified stance. "Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage!" You roll your eyes in response.');
    scene.text('"Anyway, you shouldn\'t be leaving stuff like this around the house regardless. I\'m taking this as punishment," she says.');
    // TODO-QSP: dynamic text: "But <<$npc_nickname['A29']>>!"
    scene.text(`"But ${((s as any).npc_nickname ?? 0)?.['A29']}!"`);
    scene.text('"No buts, young lady! Other people live in this household too, so you need to learn to control yourself. If you can\'t do that much, then you don\'t deserve to have one of these."');
    if (((s as any).motherQW ?? 0)?.['dildo_shower_discovery'] === 1) {
      (s as any).motherQW['dildo_shower_discovery'] = 0;
      qspCall(s, 'mother_sextalk', 'dildo_shower_ending1');
    } else {
      qspCall(s, 'mother_sextalk', 'dildo_ending1');
    }
    // TODO-QSP: dynamic text: <i>Ugh. Great. Now I need a new one. At least this gets <<$npc_nickname['A29']>>...
    scene.text(`<i>Ugh. Great. Now I need a new one. At least this gets ${((s as any).npc_nickname ?? 0)?.['A29']} off my back…</i>`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBathroomDildos3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
  (s as any).vanrPar_bathtub_dildo = 0;
  (s as any).vanrPar_bath_shower_dildo = 0;
  (s as any).vanrPar_suction_dildo = 0;
  (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (((s as any).motherQW ?? 0)?.['bathroom_dildos']);
  (s as any).motherQW['bathroom_dildos'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
  scene.text('As you step into the hall, you see your mother there waiting for you. She looks more exasperated than angry though.');
  // TODO-QSP: dynamic text: "Again, <<$pcs_firstname>>?" She sighs and tosses your toy at you before putting...
  scene.text(`"Again, ${((s as any).pcs_firstname ?? 0)}?" She sighs and tosses your toy at you before putting a hand to her forehead. "God, I hope you washed everything before I touched it. I'm not going to throw it away this time because I know you're just going to buy more, but please think of your brother and father and stop leaving stuff like this lying around!"`);
  if (((s as any).locat ?? 0)?.['Mother'] === 11  ||  ((s as any).locat ?? 0)?.['Mother'] === 12) {
    scene.text('With that, she walks off into the kitchen.');
  } else {
    if (((s as any).locat ?? 0)?.['Mother'] === 13) {
      scene.text('With that, she walks off into the living room where you hear your stepfather watching TV.');
    }
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterBathroomDildos4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
  (s as any).vanrPar_bathtub_dildo = 0;
  (s as any).vanrPar_bath_shower_dildo = 0;
  (s as any).vanrPar_suction_dildo = 0;
  (s as any).motherQW['bathroom_dildos'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
  scene.text('As you step into the hall, you see your mother there waiting for you. She looks very angry.');
  scene.text('"I want you to know that I found your whore things that you left in the bathroom!" You look at her in confusion.');
  scene.text('"What thi-" Then it hits you. You left your dildo in the bathroom!');
  scene.text('"I also want you to know that I threw them out. If you want to be a slut, you can go do it somewhere else."');
  if (((s as any).locat ?? 0)?.['Mother'] === 11  ||  ((s as any).locat ?? 0)?.['Mother'] === 12) {
    scene.text('With that, she walks off into the kitchen.');
  } else {
    if (((s as any).locat ?? 0)?.['Mother'] === 13) {
      scene.text('With that, she walks off into the living room where you hear your stepfather watching TV.');
    }
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterBathroomDildos5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
  (s as any).vanrPar_bathtub_dildo = 0;
  (s as any).vanrPar_bath_shower_dildo = 0;
  (s as any).vanrPar_suction_dildo = 0;
  (s as any).motherQW['bathroom_dildos'] = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
  scene.text('As you step into the hall, you see your mother there waiting for you. She looks very angry.');
  scene.text('"I want you to know that I found your whore things that you left in the bathroom." She glares at you. "Again."');
  scene.text('"… Did you throw them awa-"');
  scene.text('"<i>Yes.</i> Obviously. I can\'t believe that you\'re such a whore that you\'re leaving things like that around for your family to find! Do you have no conscience at all?!" She then sighs deeply. "My daughter is a shameless slut… What am I going to do?"');
  if (((s as any).locat ?? 0)?.['Mother'] === 11  ||  ((s as any).locat ?? 0)?.['Mother'] === 12) {
    scene.text('With that, she walks off into the kitchen.');
  } else {
    if (((s as any).locat ?? 0)?.['Mother'] === 13) {
      scene.text('With that, she walks off into the living room where you hear your stepfather watching TV.');
    }
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDildoWakeup1(s: GameState, scene: SceneBuilder): void {
  (s as any).motherQW['dildo_wakeup'] = 1;
  (s as any).inSleep = 0;
  qspCall(s, 'stat', '');
  if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 0) {
    (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  } else {
    if (((s as any).motherQW ?? 0)?.['dildo_caught'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'dildo_wakeup2'] }]);
    } else {
      if (((s as any).motherQW ?? 0)?.['dildo_caught'] >= 2  &&  ((s as any).motherKnowDildo ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'dildo_wakeup3'] }]);
      }
    }
  }
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 1) {
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, what the hell is this?!"
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, what the hell is this?!"`);
    scene.text('You wake up in a shock when your door bangs open and you see your mother standing in the doorway holding… a dildo?');
    scene.text('Oh <i>fuck</i>, it\'s the dildo you left in the bathroom!');
  } else {
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> what the hell are these?!"
    scene.text(`"${((s as any).pcs_firstname ?? 0)} what the hell are these?!"`);
    scene.text('You wake up in a shock when your door bangs open and you see your mother standing in the doorway holding… a pair of dildos?');
    scene.text('Oh <i>fuck</i>, they\'re the dildos you left in the bathroom!');
  }
  (s as any).motherQW['bathroom_dildos'] = 0;
  scene.actions([
    { label: 'Shamelessly lie your ass off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"What\'re you talkin\' about…?" you say blearily, feigning being drowsy from just having woken up. It\'s an obvious lie, made even more obvious by the fact that your face turns bright red when you say it. "Is that a dildo? I-"');
    // TODO-QSP: dynamic text: "Don't you lie to me <<$pcs_firstname>>, <i>I am your mother.</i> I know it's yo...
    scene.text(`"Don't you lie to me ${((s as any).pcs_firstname ?? 0)}, <i>I am your mother.</i> I know it's yours because Anya isn't stupid enough to bring home another one of these after the last time I caught her with one, let alone stupid enough to leave it in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You'll ruin your brother's innocence behaving like this, give your father a heart attack too! And you'll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.`);
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
    { label: 'Blame it on Anya', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"It\'s not mine," you say blearily, feigning being drowsy from just having woken up. "It must be Anya\'s."');
    scene.text('"Mmrrph! Not mine," your sister mumbles from her bed before rolling over to the other side and going back to sleep.');
    scene.text('Your mother puts her hands on her hips and glares at you. "I can\'t believe you\'re stupid enough to leave this in the bathroom where Kolka or Vladimir could find it! What were you thinking?! You\'ll ruin your brother\'s innocence behaving like this, give your father a heart attack too! And you\'ll ruin yourself for marriage if you-" She cuts off suddenly with a horrified look on her face.');
    scene.text('"My God… You haven\'t…"');
    scene.text('You can see where this is going and you don\'t like it.');
    qspCall(s, 'mother_sextalk', 'bathroom_dildo_response_single');
  } },
    { label: 'I need some kind of outlet!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Well I need some kind of outlet!" you say, sitting up in bed and throwing your arms up in exasperation.');
    scene.text('Your mother steps back, apparently surprised at your change of tactics.');
    // TODO-QSP: dynamic text: "You're always telling me to stay away from men and not to act like a slut. Well...
    scene.text(`"You're always telling me to stay away from men and not to act like a slut. Well ${((s as any).npc_nickname ?? 0)?.['A29']}, <i>I get horny</i>! If you don't want me fucking boys, getting pregnant, or worse, then this is what it takes!"`);
    scene.text('"Mmmm. She\'s right, mom. Horny girls need satisfaction," Anya mumbles before rolling over and going back to sleep.');
    scene.text('Your mother blinks at your outburst but recomposes herself, taking a dignified stance.');
    if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 2) {
      scene.text('"Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage and you certainly don\'t need <i>two</i> of these!" You roll your eyes in response.');
    } else {
      scene.text('"Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage!" You roll your eyes in response.');
    }
    scene.text('"Regardless, you shouldn\'t be leaving stuff like this around the house. I\'m taking these as punishment," she says.');
    // TODO-QSP: dynamic text: "But <<$npc_nickname['A29']>>!"
    scene.text(`"But ${((s as any).npc_nickname ?? 0)?.['A29']}!"`);
    scene.text('"No buts, young lady! Other people live in this household too, so you need to learn to control yourself. If you can\'t do that much, then you don\'t deserve to have these either."');
    if (((s as any).motherQW ?? 0)?.['dildo_shower_discovery'] === 1) {
      (s as any).motherQW['dildo_shower_discovery'] = 0;
      qspCall(s, 'mother_sextalk', 'dildo_shower_ending1');
    } else {
      qspCall(s, 'mother_sextalk', 'dildo_ending1');
    }
    scene.text('<i>Ugh. Great. Now I need new ones.</i>');
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).motherKnowDildo = 1;
    scene.actions([
      { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDildoWakeup2(s: GameState, scene: SceneBuilder): void {
  (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 1) {
    scene.text('You wake up in a shock when your door bangs open and you see your mother standing in the doorway holding a dildo.');
    scene.text('Oh <i>fuck</i>, you left it in the bathroom again!');
  } else {
    scene.text('You wake up in a shock when your door bangs open and you see your mother standing in the doorway holding a pair of dildos.');
    scene.text('Oh <i>fuck</i>, you left them in the bathroom again!');
  }
  scene.text('"What\'s your excuse this time?" she asks while glaring at you.');
  if (((s as any).motherKnowDildo ?? 0) === 1  ||  ((s as any).dildo_ownership ?? 0) === 1) {
    scene.actions([
      { label: '"Sorry?"', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('Unfortunately, you don\'t think you can weasel out of this one.');
    scene.text('"Uhh… Sorry?" you say, hopeful that she won\'t do what she did last time.');
    scene.text('She returns your apology with a glare. "Confiscated."');
    scene.text('She walks out of your bedroom and shuts the door.');
    scene.text('<i>Well, so much for that…</i>');
    scene.actions([
      { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
    ]);
  } },
    ]);
  } else {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).motherKnowDildo = 1;
    scene.actions([
      { label: '"No…"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"No…" you say dejectedly.');
    // TODO-QSP: dynamic text: "Honestly," she huffs, shaking her head in disappointment. "I expected more of y...
    scene.text(`"Honestly," she huffs, shaking her head in disappointment. "I expected more of you, ${((s as any).pcs_firstname ?? 0)}."`);
    scene.text('She walks out of your bedroom and shuts the door.');
    scene.actions([
      { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
    ]);
  } },
      { label: 'I need some kind of outlet!', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Well I need some kind of outlet!" you say, throwing your arms up in exasperation.');
    scene.text('Your mother steps back, apparently surprised at your change of tactics.');
    // TODO-QSP: dynamic text: "You're always telling me to stay away from men and not to act like a slut. Well...
    scene.text(`"You're always telling me to stay away from men and not to act like a slut. Well ${((s as any).npc_nickname ?? 0)?.['A29']}, <i>I get horny</i>! Yeah, I was masturbating with it last time too! If you don't want me fucking boys, getting pregnant, or worse, then this is what it takes!" She blinks at your outburst but recomposes herself, taking a dignified stance.`);
    scene.text('"Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage!" You roll your eyes in response.');
    scene.text('"Anyway, you shouldn\'t be leaving stuff like this around the house regardless. I\'m taking this as punishment," she says.');
    // TODO-QSP: dynamic text: "But <<$npc_nickname['A29']>>!"
    scene.text(`"But ${((s as any).npc_nickname ?? 0)?.['A29']}!"`);
    scene.text('"No buts, young lady! Other people live in this household too, so you need to learn to control yourself. If you can\'t do that much, then you don\'t deserve to have one of these."');
    scene.text('She walks out of your bedroom and shuts the door.');
    // TODO-QSP: dynamic text: <i>Ugh. Great.</i> you think, throwing your head back against your pillow. <i>No...
    scene.text(`<i>Ugh. Great.</i> you think, throwing your head back against your pillow. <i>Now I need a new one. But maybe at least this gets ${((s as any).npc_nickname ?? 0)?.['A29']} off my back…</i>`);
    scene.actions([
      { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterDildoWakeup3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A29', (-10));
  (s as any).vanrPar_bathtub_dildo = 0;
  (s as any).vanrPar_bath_shower_dildo = 0;
  (s as any).vanrPar_suction_dildo = 0;
  (s as any).motherQW['dildo_caught'] = ((s as any).motherQW['dildo_caught'] ?? 0) + (1);
  (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (((s as any).motherQW ?? 0)?.['bathroom_dildos']);
  (s as any).motherQW['bathroom_dildos'] = 0;
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 1) {
    scene.text('You wake up in shock to something made of rubber slapping you in the face. Startled, you sit up in bed and look around, seeing a dildo laying on your covers.');
    // TODO-QSP: dynamic text: "Again, <<$pcs_firstname>>?" Looking up, you see your mother sighing in the door...
    scene.text(`"Again, ${((s as any).pcs_firstname ?? 0)}?" Looking up, you see your mother sighing in the doorway to your bedroom with a hand on her forehead. "God, I hope you washed everything before I touched it. I'm not going to throw it away this time because I know you're just going to buy another one, but please think of your brother and father and stop leaving it lying around like that."`);
  } else {
    scene.text('You wake up in shock to something made of rubber slapping you in the face. Startled, you sit up in bed and look around, seeing a pair of dildos laying on your covers.');
    // TODO-QSP: dynamic text: "Again, <<$pcs_firstname>>?" Looking up, you see your mother sighing in the door...
    scene.text(`"Again, ${((s as any).pcs_firstname ?? 0)}?" Looking up, you see your mother sighing in the doorway to your bedroom with a hand on her forehead. "God, I hope you washed everything before I touched those. I'm not going to throw them away this time because I know you're just going to buy more, but please think of your brother and father and stop leaving these lying around like that."`);
  }
  scene.text('She walks out of your bedroom and shuts the door.');
  scene.actions([
    { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
  ]);
  scene.build();
}

function enterBathroomDildoResponseSingle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dildo_ownership ?? 0) !== 1) {
    scene.actions([
      { label: 'I swear it\'s not mine!', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).Gspravka = 0;
    (s as any).GspravkaT = 0;
    (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
    (s as any).dildo_gyno_check = 1;
    (s as any).GspravkaTimes = 2;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: "I swear, <<$npc_nickname['A29']>>! It's not mine! I don't know where it came fr...
    scene.text(`"I swear, ${((s as any).npc_nickname ?? 0)?.['A29']}! It's not mine! I don't know where it came from!"`);
    // TODO-QSP: dynamic text: "Yeah? Then you won't mind if I throw this straight into the garbage. And you wo...
    scene.text(`"Yeah? Then you won't mind if I throw this straight into the garbage. And you won't mind getting a referral from the clinic either. <i>Today</i> ${((s as any).pcs_firstname ?? 0)}!"`);
    qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending1');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.text('<i>Great. Now I\'m going to get in even bigger trouble. <b>And</b> I lost my dildo…</i>');
    } else {
      scene.text('<i>Great. Now I have to do that too. I didn\'t even get to use it…</i>');
    }
    if (((s as any).motherQW ?? 0)?.['dildo_wakeup'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'I didn\'t get to use it yet', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).Gspravka = 0;
    (s as any).GspravkaT = 0;
    (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
    (s as any).dildo_gyno_check = 1;
    (s as any).GspravkaTimes = 2;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    if (((s as any).stat ?? 0)?.['vaginal_dildo'] === 0  ||  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"No! I haven\'t! I… I didn\'t get to use it yet…"');
      // TODO-QSP: dynamic text: "You think I'm going to fall for an obvious lie like that, <<$pcs_firstname>>??"
      scene.text(`"You think I'm going to fall for an obvious lie like that, ${((s as any).pcs_firstname ?? 0)}??"`);
      scene.text('"No! I swear! It\'s true!"');
      // TODO-QSP: dynamic text: "Yeah? Then you won't mind getting a referral from the clinic. <i>Today</i> <<$p...
      scene.text(`"Yeah? Then you won't mind getting a referral from the clinic. <i>Today</i> ${((s as any).pcs_firstname ?? 0)}!"`);
      qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending1');
      scene.text('<i>Great. Now I have to do that too. I didn\'t even get to use it…</i>');
    } else {
      scene.text('At this point, you decide it\'s time to come clean. Well, at least about the ownership.');
      scene.text('"No! I haven\'t! I… I didn\'t get to use it yet…" You decide to double down on the lie instead.');
      // TODO-QSP: dynamic text: "You think I'm going to fall for an obvious lie like that, <<$pcs_firstname>>??"
      scene.text(`"You think I'm going to fall for an obvious lie like that, ${((s as any).pcs_firstname ?? 0)}??"`);
      scene.text('"No! I swear! It\'s true!"');
      // TODO-QSP: dynamic text: "Then prove it. Get a new referral from the clinic. <i>Today</i> <<$pcs_firstnam...
      scene.text(`"Then prove it. Get a new referral from the clinic. <i>Today</i> ${((s as any).pcs_firstname ?? 0)}. And I'm taking this. It's going in the trash right now."`);
      qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending1');
      scene.text('<i>Great. Now I\'m going to get in even bigger trouble. <b>And</b> I lost my dildo…</i>');
    }
    if (((s as any).motherQW ?? 0)?.['dildo_wakeup'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    { label: 'I just suck on it', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).Gspravka = 0;
    (s as any).GspravkaT = 0;
    (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
    (s as any).dildo_gyno_check = 1;
    (s as any).GspravkaTimes = 2;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"No! I haven\'t! I… I just suck on it in the shower…"');
    // TODO-QSP: dynamic text: "Do you really expect me to believe that, <<$pcs_firstname>>?"
    scene.text(`"Do you really expect me to believe that, ${((s as any).pcs_firstname ?? 0)}?"`);
    scene.text('"Yes! It\'s the truth!" you lie.');
    // TODO-QSP: dynamic text: "Yeah? Then you won't mind getting a referral from the clinic. <i>Today</i> <<$p...
    scene.text(`"Yeah? Then you won't mind getting a referral from the clinic. <i>Today</i> ${((s as any).pcs_firstname ?? 0)}."`);
    qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending1');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.text('<i>Great. Now I\'m going to get in even bigger trouble. <b>And</b> I lost my dildo…</i>');
    } else {
      scene.text('<i>Great. Now I have to do that too. I didn\'t even get to use it…</i>');
    }
    if (((s as any).motherQW ?? 0)?.['dildo_wakeup'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    { label: 'I need some kind of outlet!', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).motherKnowDildo = 1;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Well I need some kind of outlet!" you say, throwing your arms up in exasperation.');
    scene.text('Your mother steps back, apparently surprised at your change of tactics.');
    // TODO-QSP: dynamic text: "You're always telling me to stay away from men and not to act like a slut. Well...
    scene.text(`"You're always telling me to stay away from men and not to act like a slut. Well ${((s as any).npc_nickname ?? 0)?.['A29']}, <i>I get horny</i>! If you don't want me fucking boys, getting pregnant, or worse, then this is what it takes!"`);
    scene.text('She blinks at your outburst but recomposes herself, taking a dignified stance. "Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage!" You roll your eyes in response.');
    scene.text('"Anyway, you shouldn\'t be leaving stuff like this around the house regardless. I\'m taking this as punishment," she says.');
    // TODO-QSP: dynamic text: "But <<$npc_nickname['A29']>>!"
    scene.text(`"But ${((s as any).npc_nickname ?? 0)?.['A29']}!"`);
    scene.text('"No buts, young lady! Other people live in this household too, so you need to learn to control yourself. If you can\'t do that much, then you can\'t have this back."');
    if (((s as any).motherQW ?? 0)?.['dildo_shower_discovery'] === 1) {
      (s as any).motherQW['dildo_shower_discovery'] = 0;
      qspCall(s, 'mother_sextalk', 'dildo_shower_ending1');
    } else {
      qspCall(s, 'mother_sextalk', 'dildo_ending1');
    }
    scene.text('<i>Ugh. Great. Now I need a new one.</i>');
    if (((s as any).motherQW ?? 0)?.['dildo_wakeup'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBathroomDildoResponseMultiple(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dildo_ownership ?? 0) !== 1) {
    scene.actions([
      { label: 'I swear they\'re not mine!', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).Gspravka = 0;
    (s as any).GspravkaT = 0;
    (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
    (s as any).dildo_gyno_check = 1;
    (s as any).GspravkaTimes = 2;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: "I swear <<$npc_nickname['A29']>>! They're not mine! I don't know where they cam...
    scene.text(`"I swear ${((s as any).npc_nickname ?? 0)?.['A29']}! They're not mine! I don't know where they came from!"`);
    // TODO-QSP: dynamic text: "Yeah? Then you won't mind if I throw these straight into the garbage. And you w...
    scene.text(`"Yeah? Then you won't mind if I throw these straight into the garbage. And you won't mind getting a referral from the clinic either. <i>Today</i> ${((s as any).pcs_firstname ?? 0)}."`);
    qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending1');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.text('<i>Great. Now I\'m going to get in even bigger trouble. <b>And</b> I lost my dildos…</i>');
    } else {
      scene.text('<i>Great. Now I have to do that too. I didn\'t even get to use them…</i>');
    }
    if (((s as any).motherQW ?? 0)?.['dildo_wakeup'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'I didn\'t get to use them yet', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).Gspravka = 0;
    (s as any).GspravkaT = 0;
    (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
    (s as any).dildo_gyno_check = 1;
    (s as any).GspravkaTimes = 2;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    if (((s as any).stat ?? 0)?.['vaginal_dildo'] === 0  ||  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"No! I haven\'t! I… I didn\'t get to use them yet…"');
      // TODO-QSP: dynamic text: "You think I'm going to fall for an obvious lie like that, <<$pcs_firstname>>? T...
      scene.text(`"You think I'm going to fall for an obvious lie like that, ${((s as any).pcs_firstname ?? 0)}? There were <i>two of them</i> in there!"`);
      scene.text('"I swear! It\'s true!"');
      // TODO-QSP: dynamic text: "Yeah? Then you won't mind getting a referral from the clinic. <i>Today</i> <<$p...
      scene.text(`"Yeah? Then you won't mind getting a referral from the clinic. <i>Today</i> ${((s as any).pcs_firstname ?? 0)}."`);
      qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending1');
      scene.text('<i>Great. Now I have to do that too. I didn\'t even get to use them…</i>');
    } else {
      scene.text('At this point, you decide it\'s time to come clean. Well, at least about the ownership.');
      scene.text('"No! I haven\'t! I… I didn\'t get to use it yet…" You decide to double down on the lie instead.');
      // TODO-QSP: dynamic text: "You think I'm going to fall for an obvious lie like that, <<$pcs_firstname>>??"
      scene.text(`"You think I'm going to fall for an obvious lie like that, ${((s as any).pcs_firstname ?? 0)}??"`);
      scene.text('"I swear! It\'s true!"');
      // TODO-QSP: dynamic text: "Then prove it. Get a new referral from the clinic. <i>Today</i> <<$pcs_firstnam...
      scene.text(`"Then prove it. Get a new referral from the clinic. <i>Today</i> ${((s as any).pcs_firstname ?? 0)}. And I'm taking these. They're going in the trash right now."`);
      qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending1');
      scene.text('<i>Great. Now I\'m going to get in even bigger trouble. <b>And</b> I lost my dildos…</i>');
    }
    if (((s as any).motherQW ?? 0)?.['dildo_wakeup'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    { label: 'I just suck on them', handler: (st: GameState) => {
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).Gspravka = 0;
    (s as any).GspravkaT = 0;
    (s as any).GspravkaTalked = ((s as any).daystart ?? 0);
    (s as any).dildo_gyno_check = 1;
    (s as any).GspravkaTimes = 3;
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"No! I haven\'t! I… I just suck on them in the shower…"');
    // TODO-QSP: dynamic text: "Do you really expect me to believe that, <<$pcs_firstname>>?
    scene.text(`"Do you really expect me to believe that, ${((s as any).pcs_firstname ?? 0)}?`);
    scene.text('"Yes! It\'s the truth!" you lie.');
    // TODO-QSP: dynamic text: There were <i>two of them</i> in there! Are you jerking one off while you suck o...
    scene.text(`There were <i>two of them</i> in there! Are you jerking one off while you suck on the other? Besides, you shouldn't be doing that either!" she sputters. "Well, if you're telling the truth, then you won't mind if I throw these straight into the garbage. And you won't mind getting a referral from the clinic either. <i>Today</i> ${((s as any).pcs_firstname ?? 0)}."`);
    qspCall(s, 'mother_sextalk', 'dildo_dumpster_ending1');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.text('<i>Great. Now I\'m going to get in even bigger trouble. <b>And</b> I lost my dildos…</i>');
    } else {
      scene.text('<i>Great. Now I have to do that too. I didn\'t even get to use them…</i>');
    }
    if (((s as any).motherQW ?? 0)?.['dildo_wakeup'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    { label: 'I need some kind of outlet!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('"Well I need some kind of outlet!" you say, throwing your arms up in exasperation.');
    scene.text('Your mother steps back, apparently surprised at your change of tactics.');
    // TODO-QSP: dynamic text: "You're always telling me to stay away from men and not to act like a slut. Well...
    scene.text(`"You're always telling me to stay away from men and not to act like a slut. Well, ${((s as any).npc_nickname ?? 0)?.['A29']}, <i>I get horny</i>! If you don't want me fucking boys, getting pregnant, or worse, then this is what it takes!"`);
    scene.text('She blinks at your outburst but recomposes herself, taking a dignified stance.');
    if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 2) {
      scene.text('"Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage and you certainly don\'t need <i>two</i> of these!" You roll your eyes in response.');
    } else {
      scene.text('"Well, there are other ways you can deal with that!" she sniffs. "You didn\'t have to ruin yourself for marriage!" You roll your eyes in response.');
    }
    scene.text('"Regardless, you shouldn\'t be leaving stuff like this around the house. I\'m taking these as punishment," she says.');
    // TODO-QSP: dynamic text: "But <<$npc_nickname['A29']>>!"
    scene.text(`"But ${((s as any).npc_nickname ?? 0)?.['A29']}!"`);
    scene.text('"No buts, young lady! Other people live in this household too, so you need to learn to control yourself. If you can\'t do that much, then you don\'t deserve to have these either."');
    qspCall(s, 'mother_sextalk', 'dildo_ending1');
    scene.text('<i>Ugh. Great. Now I need new ones.</i>');
    (s as any).vanrPar_bathtub_dildo = 0;
    (s as any).vanrPar_bath_shower_dildo = 0;
    (s as any).vanrPar_suction_dildo = 0;
    (s as any).motherQW['bathroom_dildos'] = 0;
    (s as any).motherKnowDildo = 1;
    if (((s as any).motherQW ?? 0)?.['dildo_wakeup'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['wakeup_events', 'event_end'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterDildoEnding1(s: GameState, scene: SceneBuilder): void {
  scene.text('She stalks off holding your dildo, moving to another room in the house and leaving you alone in the hallway.');
  scene.build();
}

function enterDildoDumpsterEnding1(s: GameState, scene: SceneBuilder): void {
  scene.text('She stomps past you and out the front door, presumably to make good on her promise to throw away your dildo. You sigh deeply.');
  scene.build();
}

function enterDildoDumpsterEnding2(s: GameState, scene: SceneBuilder): void {
  scene.text('With that, she stalks outside, presumably to throw your dildo into a dumpster.');
  scene.build();
}

function enterDildoShowerEnding1(s: GameState, scene: SceneBuilder): void {
  scene.text('That being her last word on the matter, she walks back inside the bathroom with your dildo and shuts the door on you. Moments later, you hear the shower start spraying.');
  scene.build();
}

function enterDildoShowerEnding2(s: GameState, scene: SceneBuilder): void {
  scene.text('She shuts the door and you hear the faucet turn and water spray from the shower.');
  scene.build();
}

function enterDiscoverDildo(s: GameState, scene: SceneBuilder): void {
  (s as any).motherQW['bathroom_dildos'] = ((s as any).vanrPar_suction_dildo ?? 0);
  (s as any).vanrPar_suction_dildo = 0;
  if (((s as any).vanrPar_bathtub_dildo ?? 0) === 1) {
    (s as any).vanrPar_bathtub_dildo = 0;
  }
  if (((s as any).vanrPar_bath_shower_dildo ?? 0) === 1) {
    (s as any).vanrPar_bath_shower_dildo = 0;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bathroom_dildo_shriek1':
      enterBathroomDildoShriek1(s, scene);
      break;
    case 'bathroom_dildo_shriek2':
      enterBathroomDildoShriek2(s, scene);
      break;
    case 'bathroom_dildo_shriek3':
      enterBathroomDildoShriek3(s, scene);
      break;
    case 'bathroom_dildo_shriek4':
      enterBathroomDildoShriek4(s, scene);
      break;
    case 'bathroom_dildos1':
      enterBathroomDildos1(s, scene);
      break;
    case 'bathroom_dildos2':
      enterBathroomDildos2(s, scene);
      break;
    case 'bathroom_dildos3':
      enterBathroomDildos3(s, scene);
      break;
    case 'bathroom_dildos4':
      enterBathroomDildos4(s, scene);
      break;
    case 'bathroom_dildos5':
      enterBathroomDildos5(s, scene);
      break;
    case 'dildo_wakeup1':
      enterDildoWakeup1(s, scene);
      break;
    case 'dildo_wakeup2':
      enterDildoWakeup2(s, scene);
      break;
    case 'dildo_wakeup3':
      enterDildoWakeup3(s, scene);
      break;
    case 'bathroom_dildo_response_single':
      enterBathroomDildoResponseSingle(s, scene);
      break;
    case 'bathroom_dildo_response_multiple':
      enterBathroomDildoResponseMultiple(s, scene);
      break;
    case 'dildo_ending1':
      enterDildoEnding1(s, scene);
      break;
    case 'dildo_dumpster_ending1':
      enterDildoDumpsterEnding1(s, scene);
      break;
    case 'dildo_dumpster_ending2':
      enterDildoDumpsterEnding2(s, scene);
      break;
    case 'dildo_shower_ending1':
      enterDildoShowerEnding1(s, scene);
      break;
    case 'dildo_shower_ending2':
      enterDildoShowerEnding2(s, scene);
      break;
    case 'discover_dildo':
      enterDiscoverDildo(s, scene);
      break;
    default:
      enterBathroomDildoShriek1(s, scene);
      break;
  }
}

export const mother_sextalk: LocationDef = {
  name: 'mother_sextalk',
  title: 'You\'re walking down the hall when you suddenly hear a shriek',
  region: 'other',
  description: ['You\'re walking down the hall when you suddenly hear a shriek come from the bathroom. It sounds like your mother. You run to the door just as it opens and you see her there.'],
  enter: enter,
};
