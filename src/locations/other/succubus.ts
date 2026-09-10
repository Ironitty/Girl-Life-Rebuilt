import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterActive(s: GameState, scene: SceneBuilder): void {
  if (((s as any).succubusQW ?? 0) >= ((s as any).ARGS ?? 0)[1]  &&  ((s as any).succubusQW ?? 0) !== 12  &&  ((s as any).succubusQW ?? 0) !== 13) {
    (s as any).result = 1;
  }
  return;
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).succubusQW ?? 0) === 14  &&  ((s as any).scpopt ?? 0) === 1  &&  ((s as any).succhungry ?? 0) < 1) {
    // TODO-QSP: dynamic text: You sense <<$sucself1>> perk up, ready to spring forth…
    scene.text(`You sense ${((s as any).sucself1 ?? 0)} perk up, ready to spring forth…`);
    scene.actions([
      { label: 'Call your power and feed (Takes a lot of time)', handler: (st: GameState) => {
    (st as any).scpopt = 0;
  }, goto: ['succubus', 'init'] },
      { label: 'Try to control your urges', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You try to contain <<$sucself1>>…
    scene.text(`You try to contain ${((s as any).sucself1 ?? 0)}…`);
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    (s as any).will_cost = ((s as any).will_cost ?? 0) * ((s as any).succublvl ?? 0);
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.text('<br>You don\'t have enough willpower to control your urges.');
      // TODO-QSP: dynamic text: <<$sucself1>> continues rising toward the surface of your being.
      scene.text(`${((s as any).sucself1 ?? 0)} continues rising toward the surface of your being.`);
      (s as any).succonfail = 1;
      (s as any).scpopt = 0;
      // TODO-QSP: xgt 'succubus', 'init'
    } else {
      qspCall(s, 'willpower', 'pay', 'resist');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: And you're successful, <<$sucself1>> returns to your core.
      scene.text(`And you're successful, ${((s as any).sucself1 ?? 0)} returns to your core.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).scpopt = 2;
    dynamicGoto(st, 'sclocrt', 'scargrt');
  } },
      ]);
    }
  } },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['succubus', 'firsttime'] }]);
    if (((s as any).succonfail ?? 0) !== 1) {
      // TODO-QSP: dynamic text: You call <<$sucself1>> up from its resting place
      scene.text(`You call ${((s as any).sucself1 ?? 0)} up from its resting place`);
    }
    scene.text('It fills you completely, suffusing through your being with power…');
    scene.text('<center><b>and hunger</b></center>');
    scene.img('images/pc/body/succubusself.jpg');
    (s as any).suceatinit = 1;
    (s as any).succonfail = 0;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'succubus', $scsubloc
  } },
    ]);
  }
  scene.build();
}

function enterFirsttime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).scfwon ?? 0) === 1) {
    scene.text('As the exhilaration from the fight won and the fear of what could have happened fully sets in, time seems to stop.');
  } else {
    scene.text('As the fear of what is about to happen to you fully sets in, time seems to stop.');
  }
  scene.text('You feel, from the same core of power that has been in you since you embraced the fairy\'s energy, something start to…');
  scene.text('');
  scene.text('<i>uncoil…</i>');
  scene.text('');
  if (((s as any).scpopt ?? 0) !== 1  ||  ((s as any).succhungry ?? 0) > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).scpopt = 0;
    (s as any).succubusQW = 14;
    // TODO-QSP: xgt 'succubus', 'init'
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Let go…', handler: (st: GameState) => {
    (s as any).scpopt = 0;
    (s as any).succubusQW = 14;
    // TODO-QSP: xgt 'succubus', 'init'
  } },
      { label: 'Push it back down', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You try to contain <<$sucself1>>…
    scene.text(`You try to contain ${((s as any).sucself1 ?? 0)}…`);
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    // TODO-QSP: will_cost *= succublvl
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      // TODO-QSP: dynamic text: And you fail, <<$sucself1>> continues rising toward the surface of your being.
      scene.text(`And you fail, ${((s as any).sucself1 ?? 0)} continues rising toward the surface of your being.`);
      (s as any).succonfail = 1;
      (s as any).scpopt = 0;
      (s as any).succubusQW = 14;
      // TODO-QSP: xgt 'succubus', 'init'
    } else {
      qspCall(s, 'willpower', 'pay', 'resist');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: And you're successful, <<$sucself1>> returns to your core.
      scene.text(`And you're successful, ${((s as any).sucself1 ?? 0)} returns to your core.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).scpopt = 2;
    dynamicGoto(st, 'sclocrt', 'scargrt');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  (s as any).cheatVars['std'] = 1;
  qspCall(s, 'cheatmenu_din', 'std_cure');
  if (((s as any).sucxpsnapshot ?? 0) >= ((s as any).succubxp ?? 0)) {
    (s as any).succhungry = ((s as any).succhungry ?? 0) + (1);
  }
  (s as any).sucxpsnapshot = ((s as any).succubxp ?? 0);
  if (((s as any).succubxp ?? 0) < 0) {
    (s as any).succubxp = 0;
  }
  if (((s as any).succubxp ?? 0) < 60) {
    (s as any).succublvl = 1;
    (s as any).sucstorecap = 0;
    (s as any).succappbonus = 1;
  } else {
    (s as any).succublvl = 2;
    (s as any).sucstorecap = 0;
    (s as any).succappbonus = 3;
    if (((s as any).succubxp ?? 0) < 270) {
      (s as any).succublvl = 3;
      (s as any).sucstorecap = 100;
      (s as any).succappbonus = 6;
    } else {
      (s as any).succublvl = 4;
      (s as any).sucstorecap = 200;
      (s as any).succappbonus = 10;
    }
    if (((s as any).sucskill ?? 0) >= 2  &&  ((s as any).succublvl ?? 0) >= 2) {
      (s as any).sucstorecap = ((s as any).sucstorecap ?? 0) + (100);
    }
    if (((s as any).sucskill ?? 0) >= 3  &&  ((s as any).succublvl ?? 0) >= 2) {
      (s as any).sucstorecap = ((s as any).sucstorecap ?? 0) + ((((s as any).sucstorecap ?? 0) * 2) / 10);
    }
    if (((s as any).stren_muta ?? 0) < (((s as any).succublvl ?? 0) - 1)) {
      (s as any).stren_muta = (((s as any).succublvl ?? 0) - 1);
    }
    if (((s as any).agil_muta ?? 0) < (((s as any).succublvl ?? 0) - 1)) {
      (s as any).agil_muta = (((s as any).succublvl ?? 0) - 1);
    }
    if (((s as any).vital_muta ?? 0) < (((s as any).succublvl ?? 0) - 1)) {
      (s as any).vital_muta = (((s as any).succublvl ?? 0) - 1);
    }
    if (((s as any).intel_muta ?? 0) < (((s as any).succublvl ?? 0) - 1)) {
      (s as any).intel_muta = (((s as any).succublvl ?? 0) - 1);
    }
    if (((s as any).react_muta ?? 0) < (((s as any).succublvl ?? 0) - 1)) {
      (s as any).react_muta = (((s as any).succublvl ?? 0) - 1);
    }
    if (((s as any).sprt_muta ?? 0) < (((s as any).succublvl ?? 0) - 1)) {
      (s as any).sprt_muta = (((s as any).succublvl ?? 0) - 1);
    }
    if (((s as any).chrsm_muta ?? 0) < (((s as any).succublvl ?? 0) - 1)) {
      (s as any).chrsm_muta = (((s as any).succublvl ?? 0) - 1);
    }
    if (((s as any).prcptn_muta ?? 0) < (((s as any).succublvl ?? 0) - 1)) {
      (s as any).prcptn_muta = (((s as any).succublvl ?? 0) - 1);
    }
    if ((((s as any).sucexcess ?? 0) >= 100  &&  (((s as any).sucskill ?? 0) < 2  ||  ((s as any).succhungry ?? 0) > -2))  ||  (((s as any).sucexcess ?? 0) >= 100 + ((s as any).sucstorecap ?? 0)  &&  ((s as any).sucskill ?? 0) >= 2)) {
      if (((s as any).pcs_stren ?? 0)  < 250) {
        qspCall(s, 'exp_gain', 'stren', 20, 'no_bonus');
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).pcs_agil ?? 0)    < 250) {
        qspCall(s, 'exp_gain', 'agil', 20, 'no_bonus');
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).pcs_vital ?? 0)  < 250) {
        qspCall(s, 'exp_gain', 'vital', 20, 'no_bonus');
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).pcs_intel ?? 0)  < 250) {
        qspCall(s, 'exp_gain', 'intel', 20, 'no_bonus');
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).pcs_react ?? 0)  < 250) {
        qspCall(s, 'exp_gain', 'react', 20, 'no_bonus');
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).pcs_sprt ?? 0)    < 250) {
        qspCall(s, 'exp_gain', 'sprt', 20, 'no_bonus');
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).pcs_chrsm ?? 0)  < 250) {
        qspCall(s, 'exp_gain', 'chrsm', 20, 'no_bonus');
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).pcs_prcptn ?? 0)  < 250) {
        qspCall(s, 'exp_gain', 'prcptn', 20, 'no_bonus');
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).succhungry ?? 0) > (0 - 2 - ((s as any).succublvl ?? 0))) {
        (s as any).succhungry = ((s as any).succhungry ?? 0) - (1);
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).pcs_skin ?? 0) < 100) {
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (1);
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (2);
      }
      if (((s as any).vidageday ?? 0) < 720  &&  ((s as any).vidage ?? 0) >= 28) {
        (s as any).vidageday = ((s as any).vidageday ?? 0) + (4);
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (4);
      }
      if (((s as any).vidageday ?? 0) > 0  &&  ((s as any).vidage ?? 0) <= 20) {
        (s as any).vidageday = ((s as any).vidageday ?? 0) - (4);
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (4);
      }
      if (((s as any).vidageday ?? 0) >= 720  &&  ((s as any).vidage ?? 0) > 28) {
        (s as any).vidageday = ((s as any).vidageday ?? 0) - (360);
        (s as any).vidage = ((s as any).vidage ?? 0) - (1);
      }
      (s as any).temp_ideal_body_mass = qspFunc(s, 'body', 'CalcOptBodyMass');
      if (((s as any).pcs_mass ?? 0)?.['body'] < ((s as any).temp_ideal_body_mass ?? 0) - 1) {
        (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) + (2);
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      } else {
        (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) - (2);
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
      if (((s as any).sucexcess ?? 0) > ((s as any).sucstorecap ?? 0)) {
        (s as any).sucexcess = ((s as any).sucstorecap ?? 0);
      }
    } else {
      (s as any).succhungry = ((s as any).succhungry ?? 0) + (1);
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) + (((s as any).max ?? 0)(-((s as any).sucexcess ?? 0), 10 * ((s as any).succublvl ?? 0)));
    }
    if (((s as any).sucexcess ?? 0) < 0) {
      (s as any).sucpowzeroed = ((s as any).sucpowzeroed ?? 0) + (1);
    }
    if (((s as any).sucexcess ?? 0) >= 0  &&  ((s as any).sucpowzeroed ?? 0) > 0) {
      (s as any).sucpowzeroed = ((s as any).sucpowzeroed ?? 0) - (1);
    }
    if (((s as any).sucskill ?? 0) >= 4) {
      if (((s as any).pcs_vag ?? 0) - 2 >= 25) {
        (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) - (2);
      } else {
        qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
      }
      if (((s as any).pcs_ass ?? 0) - 2 >= 8) {
        (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) - (2);
      } else {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
      }
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  if (((s as any).sucpcinfo ?? 0) >= 4  &&  ((s as any).ARGS ?? 0)[1] === 0) {
    scene.text('"You are a Succubus. Now, the Succubae are not demons, that impression is a byproduct of the masking spell; they are instead a type of Fae, like that Fairy you told me about, and they are native to this plane of existence. As Fae, Succubae have nothing to do with "souls", but they do feed on the energy released during sex. The most efficient means of getting this energy is semen taken internally, but a lot is gained by lesbian orgasm if the Succubus is in sexual contact with the woman as she cums."');
    if (((s as any).tatisucsex ?? 0) !== 0) {
      scene.text('She then gives you a coy smile and says, "I can tell you that sex with a willing Succubus is an <i>amazing experience</i>."');
    } else {
      scene.text('She then gives you a searching look as she says, "I\'m told that sex with a willing Succubus is an amazing experience."');
    }
    scene.text('"Succubae only reproduce by converting normal humans, and by "normal", I mean non-mages. Whatever that Fairy did, it cannot be the normal Succubus conversion, but I don\'t know <i>what</i> the normal method is.');
    scene.text('"They can and should eat normal food as they use more energy just staying alive than a human, but they need sexual energy to survive as well, so you can\'t just eat more and not have sex.');
    if (((s as any).sucskill ?? 0) < 1) {
      scene.text('"And I will be able to teach you how to tell what your energy levels are."');
    }
  }
  if (((s as any).sucpcinfo ?? 0) >= 5  &&  (((s as any).ARGS ?? 0)[1] === 0  ||  ((s as any).ARGS ?? 0)[1] === 1)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('"Succubae can exceed normal human limitations in a way similar to the way Gustav does, but unlike Gustav, since they are Fae, the masking spell ignores them.');
    scene.text('"They automatically store sexual energy in excess of what they need to survive internally, and when this energy builds up enough, let\'s call that point 100 units, their bodies will automatically use this energy to improve themselves; increasing their physical and mental abilities, keeping themselves young looking, and providing a reserve in case they can\'t find food.');
    scene.text('"While lower level Succubae lose any energy not used for improvements, higher level Succubae can store this unused energy in excess of that 100 unit mark.');
    if (((s as any).sucskill ?? 0) >= 2) {
      scene.text('"As you know, they can learn to store energy before their body uses it as well as increase their storage capacity, as long as they have some reserves."');
    } else {
      scene.text('"And," she adds with a grin, "I can teach you to store energy before your body uses it and to increase your storage capacity, as long as you have some reserves! Just make sure your reserves are full before we try to teach you."');
    }
  }
  if (((s as any).sucpcinfo ?? 0) >= 6  &&  (((s as any).ARGS ?? 0)[1] === 0  ||  ((s as any).ARGS ?? 0)[1] === 2)) {
    if (((s as any).sucskill ?? 0) >= 3) {
      scene.text('"They also learned, as you have, to be more efficient with the sexual energy, increasing the amount of energy they have available for survival and storage."');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      // TODO-QSP: dynamic text: "They have found, after what she described as a "multiday sex bender", that a Su...
      scene.text(`"They have found, after what she described as a "multiday sex bender", that a Succubus can learn to be more efficient with the energy, increasing the amount of energy they have available for survival and storage. She then worked out how they did it and passed that to me. In order for this training to not take several days of non-stop sex, I'll need to buy several components worth ${qspFunc(s, 'money', 'string_price', 5000)} and 7 days to build up my own power reserves, and you will need to have at least 3 days of reserve and at least 100 units of stored energy.`);
      scene.text('"Even with these preparations, the training is still going to take 8 to 10 hours of… Non… Stop… Sex…"');
      if (((s as any).tatisucsex ?? 0) <= 0) {
        scene.text('She says those last three words in a tone that is equal parts anticipation and trepidation, and the look in her eyes mirror this.');
      } else {
        scene.text('She says those last three words in a tone that is pure seduction with a look that is equal parts anticipation and lust.');
      }
    }
  }
  if (((s as any).sucpcinfo ?? 0) >= 7  &&  (((s as any).ARGS ?? 0)[1] === 0  ||  ((s as any).ARGS ?? 0)[1] === 3)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('"Succubae are somewhat territorial when hungry, but when sated, the impulse is weak enough to suppress easily. They seem to have established neutral territories in the flesh-pots of the world, like Amsterdam, Morocco, and Las Vegas. Places like that are not claimed by one Succubus, instead groups of them have made their homes there.');
    scene.text('"A Succubae\'s body can learn to expend a bit of power to accommodate nearly any size of… implement." She gives you a smug grin with that.');
    if (((s as any).sucskill ?? 0) < 4) {
      scene.text('And I can teach you, just go get the biggest dildo they sell at that shop down the street, then bring it and 100 units of stored energy back here.');
    }
  }
  if (((s as any).ARGS ?? 0)[1] === 0) {
    scene.text('"They likely have other abilities and weaknesses, but the few Succubae I have encountered were not that willing to part with information, though I have put out requests for more information from my contacts.');
    scene.text('"As far as I know, you are the only Succubus in the region."');
    scene.actions([
      { label: 'Ask if she knows more', handler: (st: GameState) => {
    scene.text('You ask her if she knows anything else.');
    scene.text('She replies, "No, that\'s all I know."');
    scene.actions([
      { label: 'Continue', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', goto: ['tatiana_lab', 'Tatiana'] },
  ]);
  scene.build();
}

function enterTatianasex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).suceatinit ?? 0) === 0) {
    scene.actions([{ label: 'Continue', goto: ['succubus', 'init'] }]);
  }
  (s as any).suceatinit = 0;
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/succubusself.jpg');
  if (((s as any).sucpcinfo ?? 0) < 4) {
    (s as any).tatisucsex = ((s as any).tatisucsex ?? 0) - (2);
    // TODO-QSP: dynamic text: Your power reaches through the connection to Tatiana, enflaming her lust even as...
    scene.text(`Your power reaches through the connection to Tatiana, enflaming her lust even as ${((s as any).sucself1 ?? 0)} grabs ahold of her power.`);
    // TODO-QSP: dynamic text: At this point, you gain some control back and cause her power to cycle through y...
    scene.text(`At this point, you gain some control back and cause her power to cycle through you, as ${((s as any).sucself1 ?? 0)} cycles through her making her passion and yours move together.`);
    scene.text('Tatiana quickly strips down and moves between your legs…');
  } else {
    // TODO-QSP: dynamic text: You take control of <<$sucself1>> and, as you softly kiss her, <<$sucself1>> gen...
    scene.text(`You take control of ${((s as any).sucself1 ?? 0)} and, as you softly kiss her, ${((s as any).sucself1 ?? 0)} gently flows into Tatiana even as you coax her power to flow into you.`);
    // TODO-QSP: dynamic text: With her power and <<$sucself1>> fully intertwined, you set up a gently flowing ...
    scene.text(`With her power and ${((s as any).sucself1 ?? 0)} fully intertwined, you set up a gently flowing cycle, making her passion and yours move together.`);
    scene.text('Tatiana then kisses her way down your body, taking up position between your legs.');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/tatiana/sex/karinsucsex1.jpg');
    scene.text('As she licks you out, she feels the same things you do until you both have your first orgasm.');
    scene.text('You then move her around into a "69" position.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/tatiana/sex/karinsucsex2.jpg');
    scene.text('You pleasure each other for some time, orgasming together, and then at some point you flip over.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sucpcinfo ?? 0) >= 6  &&  ((s as any).sucskill ?? 0) < 3  &&  ((s as any).sctrainprep ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['succubus', 'training3sex'] }]);
    }
    scene.img('images/characters/city/tatiana/sex/karinsucsex3.jpg');
    scene.text('You continue this way for some time, flipping back and forth, having multiple simultaneous orgasms until you sense her body is tiring even though her power level is a bit higher than when you two started.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A176');
    (s as any).scfeed = 2 + ((s as any).succublvl ?? 0) + ((s as any).rand ?? 0)(1, 4);
    if (((s as any).tatianaSex ?? 0) === 0) {
      (s as any).tatianaSex = 1;
      (s as any).girl = ((s as any).girl ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'cuni', 20, 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).pcs_horny = 0;
    (s as any).orgasm = ((s as any).orgasm ?? 0) + (((s as any).scfeed ?? 0));
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (((s as any).scfeed ?? 0));
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (25 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (20 + (20 * ((s as any).scfeed ?? 0)) / ((s as any).succublvl ?? 0));
    (s as any).tatisucsexday = ((s as any).daystart ?? 0) + 1 + ((s as any).scfeed ?? 0) / 3;
    if (((s as any).sucpcinfo ?? 0) < 4) {
      scene.actions([{ label: 'Continue', goto: ['succubus', 'tatianaask'] }]);
    }
    (s as any).tatisucsex = ((s as any).tatisucsex ?? 0) + (1);
    if (((s as any).tatisucsex ?? 0) === 0) {
      (s as any).tatisucsex = 1;
    }
    qspCall(s, 'stat', '');
    scene.text('As you both put yourselves back together, Tatiana says, "That was intense, thank you!"');
    scene.actions([
      { label: 'Continue', goto: ['tatiana_lab', 'Tatiana'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTraining3sex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/tatiana/sex/karinsucsex3.jpg');
  scene.text('You continue this way for hours, changing position occasionally, and the whole time you both are causing the massive amount of energy between you to cycle faster and faster until it almost feels as if you and Tatiana are sharing one body that is having a continuous orgasm.');
  scene.text('You lose track of time and are only barely able to perform the tasks Tatiana said you needed to do.');
  scene.text('Eventually, you sense that the excess energy is depleted, your energy handling channels are significantly improved, and Tatiana, while exhausted, has had a major boost to her own power.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    (s as any).sucskill = 3;
    qspCall(s, 'npcStat', 'A176');
    if (((s as any).tatianaSex ?? 0) === 0) {
      (s as any).tatianaSex = 1;
    }
    // TODO-QSP: gs 'arousal', 'cuni', 15 * rand(1, 8), 'dom', 'lesbian'
    qspCall(s, 'arousal', 'cuni_give', (-15), 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).tatisucsex = ((s as any).tatisucsex ?? 0) + (1);
    if (((s as any).tatisucsex ?? 0) === 0) {
      (s as any).tatisucsex = 1;
    }
    (s as any).pcs_willpwr = ((s as any).willpowermax ?? 0);
    (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (100);
    (s as any).succhungry = ((s as any).succhungry ?? 0) + (1);
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (10);
    (s as any).tatisucsexday = ((s as any).daystart ?? 0) + ((s as any).rand ?? 0) (5, 10);
    (s as any).pcs_hairbsh = 0;
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    (s as any).pcs_energy = 100;
    (s as any).pcs_sleep = 40;
    qspCall(s, 'stat', '');
    scene.text('As you both put yourselves back together, Tatiana says, "Wow… just wow! That was… indescribable! I have never felt <i>anything</i> like that!" She gives you a gentle kiss before adding, "Thank You!"');
    scene.text('She then lies down on the couch and immediately drops off to sleep. You toss the blanket over her and prepare to leave.');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKompresearch(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (10 * ((s as any).rand ?? 0)(3, 6));
  (s as any).sucpcinfo = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/succresrch.jpg');
  scene.text('Other than a host of internet stories, the thing you find that matches closest to what you have been feeling is a succubus, a demonic creature that destroys or corrupts men\'s souls through sex.');
  scene.text('However, you don\'t feel like you have been corrupting anything, and the match isn\'t that great…');
  scene.text('Maybe you should go ask Tatiana…');
  scene.actions([
    { label: 'Continue', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'active':
      enterActive(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'firsttime':
      enterFirsttime(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'tatianasex':
      enterTatianasex(s, scene);
      break;
    case 'training3sex':
      enterTraining3sex(s, scene);
      break;
    case 'kompresearch':
      enterKompresearch(s, scene);
      break;
    default:
      enterActive(s, scene);
      break;
  }
}

export const succubus: LocationDef = {
  name: 'succubus',
  title: 'and hunger',
  region: 'other',
  enter: enter,
};
