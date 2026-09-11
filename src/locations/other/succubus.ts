import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  if (((s as any).sucpcinfo ?? 0) >= 4  &&  (!((s as any).locArgs?.[1] ?? 0))) {
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
  if (((s as any).sucpcinfo ?? 0) >= 5  &&  (((s as any).locArgs?.[1] ?? 0) === 0  ||  ((s as any).locArgs?.[1] ?? 0) === 1)) {
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
  if (((s as any).sucpcinfo ?? 0) >= 6  &&  (((s as any).locArgs?.[1] ?? 0) === 0  ||  ((s as any).locArgs?.[1] ?? 0) === 2)) {
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
  if (((s as any).sucpcinfo ?? 0) >= 7  &&  (((s as any).locArgs?.[1] ?? 0) === 0  ||  ((s as any).locArgs?.[1] ?? 0) === 3)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('"Succubae are somewhat territorial when hungry, but when sated, the impulse is weak enough to suppress easily. They seem to have established neutral territories in the flesh-pots of the world, like Amsterdam, Morocco, and Las Vegas. Places like that are not claimed by one Succubus, instead groups of them have made their homes there.');
    scene.text('"A Succubae\'s body can learn to expend a bit of power to accommodate nearly any size of… implement." She gives you a smug grin with that.');
    if (((s as any).sucskill ?? 0) < 4) {
      scene.text('And I can teach you, just go get the biggest dildo they sell at that shop down the street, then bring it and 100 units of stored energy back here.');
    }
  }
  if ((!((s as any).locArgs?.[1] ?? 0))) {
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

function enterActive(s: GameState, scene: SceneBuilder): void {
  if (((s as any).succubusQW ?? 0) >= ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).succubusQW ?? 0) !== 12  &&  ((s as any).succubusQW ?? 0) !== 13) {
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
      scene.actions([{ label: 'Continue', goto: ['succubus', 'init'] }]);
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
    if (((s as any).succubusQW ?? 0) === 11) {
      scene.actions([{ label: 'Continue', goto: ['succubus', 'firsttime'] }]);
    } else {
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
  }
  scene.build();
}

function enterFirsttime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).scfwon ?? 0) === 1) {
    scene.text('As the exhilaration from the fight won and the fear of what could have happened fully sets in, time seems to stop.');
  } else {
    if ((!((s as any).scfwon ?? 0))) {
      scene.text('As the fear of what is about to happen to you fully sets in, time seems to stop.');
    }
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
  }, goto: ['succubus', 'init'] },
    ]);
  } else {
    scene.actions([
      { label: 'Let go…', handler: (st: GameState) => {
    (s as any).scpopt = 0;
    (s as any).succubusQW = 14;
  }, goto: ['succubus', 'init'] },
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
      scene.actions([{ label: 'Continue', goto: ['succubus', 'init'] }]);
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
  ((s as any).cheatVars ?? {})['std'] = 1;
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
    if (((s as any).succubxp ?? 0) < 150) {
      (s as any).succublvl = 2;
      (s as any).sucstorecap = 0;
      (s as any).succappbonus = 3;
    } else {
      if (((s as any).succubxp ?? 0) < 270) {
        (s as any).succublvl = 3;
        (s as any).sucstorecap = 100;
        (s as any).succappbonus = 6;
      } else {
        (s as any).succublvl = 4;
        (s as any).sucstorecap = 200;
        (s as any).succappbonus = 10;
      }
    }
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
      ((s as any).pcs_mass ?? {})['body'] = (((s as any).pcs_mass ?? {})['body'] ?? 0) + (2);
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
    } else {
      if (((s as any).pcs_mass ?? 0)?.['body'] > ((s as any).temp_ideal_body_mass ?? 0) + 1) {
        ((s as any).pcs_mass ?? {})['body'] = (((s as any).pcs_mass ?? {})['body'] ?? 0) - (2);
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
      }
    }
    if (((s as any).sucexcess ?? 0) > ((s as any).sucstorecap ?? 0)) {
      (s as any).sucexcess = ((s as any).sucstorecap ?? 0);
    }
  } else {
    if (((s as any).sucexcess ?? 0) < 0  &&  ((s as any).succhungry ?? 0) < 0) {
      (s as any).succhungry = ((s as any).succhungry ?? 0) + (1);
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) + (Math.max(-((s as any).sucexcess ?? 0), 10 * ((s as any).succublvl ?? 0)));
    }
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
      if (((s as any).pcs_vag ?? 0) + 2 <= 25) {
        qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
      }
    }
    if (((s as any).pcs_ass ?? 0) - 2 >= 8) {
      (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) - (2);
    } else {
      if (((s as any).pcs_ass ?? 0) + 2 <= 8) {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
      }
    }
  }
  scene.build();
}

function enterRapistFight(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).suceatinit ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['succubus', 'init'] }]);
  }
  (s as any).suceatinit = 0;
  (s as any).pcs_horny = 0;
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/succubusself.jpg');
  scene.text('Instinctively, you are barely aware of what causes your power to reach out and take hold of your would-be rapist\'s mind.');
  scene.text('You see fear fill his eyes even as lust fills his loins, and you feel his mind fighting your hold.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).scrand = Math.floor(Math.random() * 4) + 0;
    if (((s as any).fightEnding ?? 0) === 8  &&  ((s as any).scfwon ?? 0) === 1) {
      (s as any).scrand = ((s as any).scrand ?? 0) - (1);
      (s as any).scfwon = 0;
      (s as any).fightEnding = 0;
      if (((s as any).rikudo ?? 0) > 10) {
        (s as any).rikudo = ((s as any).rikudo ?? 0) + (100);
      }
      (s as any).Win = ((s as any).Win ?? 0) + (1);
    } else {
      if (((s as any).fightEnding ?? 0) === 8) {
        (s as any).fightEnding = 0;
        (s as any).SUB = ((s as any).SUB ?? 0) + (1);
        (s as any).Loss = ((s as any).Loss ?? 0) + (1);
        if (((s as any).rikudo ?? 0) > 10) {
          (s as any).rikudo = ((s as any).rikudo ?? 0) - (10);
        }
      } else {
        (s as any).scrand = ((s as any).scrand ?? 0) - (1);
        (s as any).scfwon = 0;
        (s as any).fightEnding = 0;
      }
    }
    if (((s as any).scrand ?? 0) < ((s as any).succublvl ?? 0)) {
      (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      if (((s as any).scfeed ?? 0) === 2) {
      }
      scene.text('You quickly drag him out of sight, then rip off his pants and expose your now hungry pussy.');
      scene.text('You force him to the ground and immediately mount him, your now hair-trigger snatch sending you into orgasm.');
      scene.text('');
      // TODO-QSP: dynamic text: You ride him for some time, your power forcing him to cum <<$scxcum>> pulling ev...
      scene.text(`You ride him for some time, your power forcing him to cum ${((s as any).scxcum ?? 0)} pulling every drop of energy out of each eruption, with the rush causing you to orgasm as he does…`);
      scene.text('');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    ((s as any).succubusQW ?? {})['rapist_cash'] = Math.floor(Math.random() * 251) + 50;
    (s as any).i = 0;
    // TODO-QSP: :sucfeeding_loop
    (s as any).i = ((s as any).i ?? 0) + (1);
    qspCall(s, 'arousal', 'vaginal', (-5), 'dom', 'no_orgasm_msg');
    if (((s as any).scfeed ?? 0) > ((s as any).i ?? 0)) {
      // TODO-QSP: jump 'sucfeeding_loop'
    }
    qspCall(s, 'arousal', 'end');
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (((s as any).scfeed ?? 0));
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).scfeed ?? 0));
    (s as any).sucabscum = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (15 + (20 * ((s as any).scfeed ?? 0)) / ((s as any).succublvl ?? 0));
    qspCall(s, 'stat', '');
    scene.text('Finally, when your instincts tell you he has nothing left to give, you get off him and fix your clothes.');
    scene.text('As you make ready to leave, you look down upon your would-be-rapist-turned-meal as he lies there utterly exhausted and wonder if this experience will discourage him from such activities in the future…');
    // TODO-QSP: dynamic text: Before you leave him to contemplate such things you check his wallet and grab <<...
    scene.text(`Before you leave him to contemplate such things you check his wallet and grab ${qspFunc(s, 'money', 'string_profit', ((s as any).succubusQW ?? 0)?.['rapist_cash'])} as a bonus reward.`);
    // TODO-QSP: gs 'money', 'earn', succubusQW['rapist_cash'], 'cash'
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('');
      scene.text('And you feel his fear overcome his lust and your hold…');
      scene.text('By the time you pull yourself back to the physical world, he is long gone.');
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

function enterPavResfeed(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk_night.jpg');
  scene.text('The disco is in full swing, which means a lot of adolescents going to and from the community center. You find a spot down the street from the community center to lie in wait for your prey.');
  scene.text('You hide for a few minutes, watching groups of students pass you by as you wait for a lone victim to pounce on. You lie in wait for almost thirty minutes, thinking about the meal ahead, your hand finding its way between your legs a few times.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/pc/body/succubusself.jpg');
    scene.text('Just as you are starting to think no one would walk by alone, a young guy in a tracksuit walks right past you into the bushes. He pulls his pants down to take a piss.');
    scene.text('"Wow, what do we have here?" you say from the darkness, causing him to jump.');
    scene.text('"Who the hell is there," he says as he pulls up his pants and searches for you in vain.');
    scene.text('"Exposing yourself in public? What a pervert!"');
    scene.text('"Says the girl watching. Where are you?"');
    scene.text('"Right here," you say as you sneak up behind him and reach around and stick a hand into his pants. You spend some time groping him and trying to find out what he is packing.');
    scene.text('"Find something you like?" he asks in a cocky tone. You don\'t know why. He doesn\'t have anything that impressive down there.');
    scene.actions([
      { label: 'Warm him up', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', Math.floor(Math.random() * 251) + 250, 'cash');
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).i = 0;
    // TODO-QSP: :sucfeeding_loop2
    (s as any).i = ((s as any).i ?? 0) + (1);
    qspCall(s, 'arousal', 'vaginal', (-5), 'dom', 'no_orgasm_msg');
    if (((s as any).scfeed ?? 0) > ((s as any).i ?? 0)) {
      // TODO-QSP: jump 'sucfeeding_loop2'
    }
    qspCall(s, 'arousal', 'end');
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (((s as any).scfeed ?? 0));
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).scfeed ?? 0));
    (s as any).sucabscum = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (15 + (20 * ((s as any).scfeed ?? 0)) / ((s as any).succublvl ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/boybj2.jpg');
    scene.text('"Meh, it will have to do," you tell him. He drags you into the bushes and pushes you down to your knees. You decide to play along for now and place your lips around his cock and work your magic. Literally. You give him the kind of blowjob only a succubus like yourself can give. It isn\'t long before he cums in your mouth. You swallow it, savoring the appetizer before the main course with a smile on your face. He grabs your chin and looks at you with contempt.');
    scene.text('"What a slut, if you enjoy cum that much, maybe I should call my friends to give you all you can eat. Would you like that, whore?"');
    scene.img('images/pc/body/succubusself.jpg');
    scene.text('Your contented smile turns into a confident grin as you pull the guy\'s legs out from under him. He tries to get up, but you push him back down with unnatural strength. You let instinct take over as you undress and lower yourself on top of his hardening member. You ride him hard, trying to milk him as fast as you can. He cums once, then twice, then three times, then more. He begs you to stop, but you aren\'t listening.');
    scene.text('Eventually, he runs out of energy to give, and you lift yourself off of him. He lies on the ground unconscious with a pained expression on his face. Now to make him pay for that whore comment. You check his pockets for valuables and find a cellphone and some loose change.');
    scene.text('You pocket the money and crush the phone in your hand. Then, after making sure the coast is clear, you drag him back to the sidewalk and leave him there, unconscious with no pants for someone to find. He won\'t remember this punishment or most of the night, but you sure had fun.');
    scene.actions([
      { label: 'Continue', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTatianaask(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Tatiana</b></center>');
  if (((s as any).sucpcinfo ?? 0) === 2) {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/city/citycenter/lab/event/main1.jpg');
    scene.text('You undress and lie down on the couch, and Tatiana begins to examine you.');
    scene.text('This time, as she uses her charms and strange devices, you actually feel her power reach into you and move around inside, poking and prodding.');
    if (((s as any).succubusQW ?? 0) === 11) {
      scene.text('Something in you panics at this, and the fear overtakes your mind.');
    }
    // TODO-QSP: dynamic text: Distantly, you hear Tatiana mutter, "Huh, what's this?" and her power pokes <<$s...
    scene.text(`Distantly, you hear Tatiana mutter, "Huh, what's this?" and her power pokes ${((s as any).sucself1 ?? 0)}.`);
    (s as any).scpopt = 1;
    (s as any).sucpcinfo = 3;
    return;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'succubus', 'init'
  } },
    ]);
  } else {
    if (((s as any).sucpcinfo ?? 0) === 3) {
      scene.img('images/locations/city/citycenter/lab/event/main1.jpg');
      (s as any).scpopt = 0;
      // TODO-QSP: If tatisucsex <> 0:
      scene.text('Once you finish that unintended feeding and Tatiana has pulled herself back together, she says "Well, that was unexpected, go ahead and get dressed."');
    } else {
      scene.text('Looking flushed once she has finished, Tatiana says "Well, that was interesting, go ahead and get dressed."');
    }
  }
  (s as any).sucpcinfo = 4;
  (s as any).sucinfoday = ((s as any).daystart ?? 0) + 10 + (Math.floor(Math.random() * 8) + 0);
  return;
  scene.actions([
    { label: 'Get dressed', goto: ['succubus', 'tatianaask'] },
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
    case 'RapistFight':
      enterRapistFight(s, scene);
      break;
    case 'pavResfeed':
      enterPavResfeed(s, scene);
      break;
    case 'tatianaask':
      enterTatianaask(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const succubus: LocationDef = {
  name: 'succubus',
  title: 'and hunger',
  region: 'other',
  description: ['"You are a Succubus. Now, the Succubae are not demons, that impression is a byproduct of the masking spell; they are instead a type of Fae, like that Fairy you told me about, and they are native to this plane of existence. As Fae, Succubae have nothing to do with "souls", but they do feed on the energy released during sex. The most efficient means of getting this energy is semen taken internally, but a lot is gained by lesbian orgasm if the Succubus is in sexual contact with the woman as she cums."'],
  enter: enter,
};
