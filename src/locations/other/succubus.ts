import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterActive(s: GameState, scene: SceneBuilder): void {
  if (((s as any).succubusQW ?? 0) >= String((s as any).locArgs?.[1] ?? '')  &&  ((s as any).succubusQW ?? 0) !== 12  &&  ((s as any).succubusQW ?? 0) !== 13) {
    (s as any).result = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).succubusQW ?? 0) === 14  &&  ((s as any).scpopt ?? 0) === 1  &&  ((s as any).succhungry ?? 0) < 1) {
    // TODO-QSP: dynamic text: You sense <<$sucself1>> perk up, ready to spring forth…
    scene.text(`You sense ${((s as any).sucself1 ?? '')} perk up, ready to spring forth…`);
    scene.actions([
      { label: 'Call your power and feed (Takes a lot of time)', handler: (st: GameState) => {
    (st as any).scpopt = 0;
  }, goto: ['succubus', 'init'] },
      { label: 'Try to control your urges', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You try to contain <<$sucself1>>…
    scene.text(`You try to contain ${((st as any).sucself1 ?? '')}…`);
    qspCall(st, 'willpower', 'misc', 'resist', 'easy');
    (st as any).will_cost = ((st as any).will_cost ?? 0) * ((st as any).succublvl ?? 0);
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.text('<br>You don\'t have enough willpower to control your urges.');
      // TODO-QSP: dynamic text: <<$sucself1>> continues rising toward the surface of your being.
      scene.text(`${((st as any).sucself1 ?? '')} continues rising toward the surface of your being.`);
      (st as any).succonfail = 1;
      (st as any).scpopt = 0;
      qspGoto(st, 'succubus', 'init');
    } else {
      qspCall(st, 'willpower', 'pay', 'resist');
      qspCall(st, 'stat', '');
      // TODO-QSP: dynamic text: And you''re successful, <<$sucself1>> returns to your core.
      scene.text(`And you're successful, ${((st as any).sucself1 ?? '')} returns to your core.`);
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
      qspGoto(s, 'succubus', 'firsttime');
    } else {
      if (((s as any).succonfail ?? 0) !== 1) {
        // TODO-QSP: dynamic text: You call <<$sucself1>> up from its resting place
        scene.text(`You call ${((s as any).sucself1 ?? '')} up from its resting place`);
      }
      scene.text('It fills you completely, suffusing through your being with power…');
      scene.text('<center><b>and hunger</b></center>');
      scene.img('images/pc/body/succubusself.jpg');
      (s as any).suceatinit = 1;
      (s as any).succonfail = 0;
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'succubus', ((st as any).scsubloc ?? '')); } },
      ]);
    }
  }
  // TODO-QSP: end
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
    (st as any).scpopt = 0;
    (st as any).succubusQW = 14;
    qspGoto(st, 'succubus', 'init');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Let go…', handler: (st: GameState) => {
    (st as any).scpopt = 0;
    (st as any).succubusQW = 14;
    qspGoto(st, 'succubus', 'init');
  } },
      { label: 'Push it back down', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You try to contain <<$sucself1>>…
    scene.text(`You try to contain ${((st as any).sucself1 ?? '')}…`);
    qspCall(st, 'willpower', 'misc', 'resist', 'easy');
    // TODO-QSP: will_cost *= succublvl
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      // TODO-QSP: dynamic text: And you fail, <<$sucself1>> continues rising toward the surface of your being.
      scene.text(`And you fail, ${((st as any).sucself1 ?? '')} continues rising toward the surface of your being.`);
      (st as any).succonfail = 1;
      (st as any).scpopt = 0;
      (st as any).succubusQW = 14;
      qspGoto(st, 'succubus', 'init');
    } else {
      qspCall(st, 'willpower', 'pay', 'resist');
      qspCall(st, 'stat', '');
      // TODO-QSP: dynamic text: And you''re successful, <<$sucself1>> returns to your core.
      scene.text(`And you're successful, ${((st as any).sucself1 ?? '')} returns to your core.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['std'] = 1;
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
    (s as any).sucself1 = 'that feeling';
    (s as any).sucstorecap = 0;
    (s as any).succappbonus = 1;
  } else {
    if (((s as any).succubxp ?? 0) < 150) {
      (s as any).succublvl = 2;
      (s as any).sucself1 = 'the power';
      (s as any).sucstorecap = 0;
      (s as any).succappbonus = 3;
    } else {
      if (((s as any).succubxp ?? 0) < 270) {
        (s as any).succublvl = 3;
        (s as any).sucself1 = 'your other self';
        (s as any).sucstorecap = 100;
        (s as any).succappbonus = 6;
      } else {
        (s as any).succublvl = 4;
        (s as any).sucself1 = 'your true self';
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
      ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) + (2);
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (10);
    } else {
      if (((s as any).pcs_mass ?? 0)?.['body'] > ((s as any).temp_ideal_body_mass ?? 0) + 1) {
        ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = ((s as any).pcs_mass['body'] ?? 0) - (2);
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
  // TODO-QSP: end
  scene.build();
}

function enterRapistFight(s: GameState, scene: SceneBuilder): void {
  (s as any).scsubloc = ((s as any).locArgs?.[0] ?? 0);
  if ((!((s as any).suceatinit ?? 0))) {
    qspGoto(s, 'succubus', 'init');
  }
  (s as any).suceatinit = 0;
  (s as any).pcs_horny = Math.max(100, ((s as any).pcs_horny ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/succubusself.jpg');
  scene.text('Instinctively, you are barely aware of what causes your power to reach out and take hold of your would-be rapist\'s mind.');
  scene.text('You see fear fill his eyes even as lust fills his loins, and you feel his mind fighting your hold.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).scrand = (Math.floor(Math.random() * 4) + 0);
    if (((st as any).fightEnding ?? 0) === 8  &&  ((st as any).scfwon ?? 0) === 1) {
      (st as any).scrand = ((st as any).scrand ?? 0) - (1);
      (st as any).scfwon = 0;
      (st as any).fightEnding = 0;
      if (((st as any).rikudo ?? 0) > 10) {
        (st as any).rikudo = ((st as any).rikudo ?? 0) + (100);
      }
      (st as any).Win = ((st as any).Win ?? 0) + (1);
    } else {
      if (((st as any).fightEnding ?? 0) === 8) {
        (st as any).fightEnding = 0;
        (st as any).SUB = ((st as any).SUB ?? 0) + (1);
        (st as any).Loss = ((st as any).Loss ?? 0) + (1);
        if (((st as any).rikudo ?? 0) > 10) {
          (st as any).rikudo = ((st as any).rikudo ?? 0) - (10);
        }
      } else {
        (st as any).scrand = ((st as any).scrand ?? 0) - (1);
        (st as any).scfwon = 0;
        (st as any).fightEnding = 0;
      }
    }
    if (((st as any).scrand ?? 0) < ((st as any).succublvl ?? 0)) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      if (((st as any).scfeed ?? 0) === 2) {
        (st as any).scxcum = 'twice';
      } else {
        (st as any).scxcum = 'multiple times';
      }
      scene.text('You quickly drag him out of sight, then rip off his pants and expose your now hungry pussy.');
      scene.text('You force him to the ground and immediately mount him, your now hair-trigger snatch sending you into orgasm.');
      scene.text('');
      // TODO-QSP: dynamic text: You ride him for some time, your power forcing him to cum <<$scxcum>> pulling ev...
      scene.text(`You ride him for some time, your power forcing him to cum ${((st as any).scxcum ?? '')} pulling every drop of energy out of each eruption, with the rush causing you to orgasm as he does…`);
      scene.text('');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    ((st as any).succubusQW = (st as any).succubusQW ?? {})['rapist_cash'] = (Math.floor(Math.random() * 251) + 50);
    (st as any).i = 0;
    // TODO-QSP: :sucfeeding_loop
    (st as any).i = ((st as any).i ?? 0) + (1);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-5), 'dom', 'no_orgasm_msg');
    if (((st as any).scfeed ?? 0) > ((st as any).i ?? 0)) {
      // TODO-QSP: jump 'sucfeeding_loop'
    }
    qspCall(st, 'arousal', 'end');
    (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (((st as any).scfeed ?? 0));
    (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
    (st as any).sucabscum = 1;
    (st as any).minut = ((st as any).minut ?? 0) + (15 + (20 * ((st as any).scfeed ?? 0)) / ((st as any).succublvl ?? 0));
    qspCall(st, 'stat', '');
    scene.text('Finally, when your instincts tell you he has nothing left to give, you get off him and fix your clothes.');
    scene.text('As you make ready to leave, you look down upon your would-be-rapist-turned-meal as he lies there utterly exhausted and wonder if this experience will discourage him from such activities in the future…');
    // TODO-QSP: dynamic text: Before you leave him to contemplate such things you check his wallet and grab <<...
    scene.text(`Before you leave him to contemplate such things you check his wallet and grab ${qspFunc(s, 'money', 'string_profit', ((st as any).succubusQW ?? 0)?.['rapist_cash'] ?? '')} as a bonus reward.`);
    // TODO-QSP: gs 'money', 'earn', succubusQW['rapist_cash'], 'cash'
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('');
      scene.text('And you feel his fear overcome his lust and your hold…');
      scene.text('By the time you pull yourself back to the physical world, he is long gone.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
  // TODO-QSP: end
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
    qspCall(st, 'money', 'earn', (Math.floor(Math.random() * 251) + 250), 'cash');
    (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (st as any).i = 0;
    // TODO-QSP: :sucfeeding_loop2
    (st as any).i = ((st as any).i ?? 0) + (1);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-5), 'dom', 'no_orgasm_msg');
    if (((st as any).scfeed ?? 0) > ((st as any).i ?? 0)) {
      // TODO-QSP: jump 'sucfeeding_loop2'
    }
    qspCall(st, 'arousal', 'end');
    (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (((st as any).scfeed ?? 0));
    (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
    (st as any).sucabscum = 1;
    (st as any).minut = ((st as any).minut ?? 0) + (15 + (20 * ((st as any).scfeed ?? 0)) / ((st as any).succublvl ?? 0));
    qspCall(st, 'stat', '');
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
    // TODO-QSP: dynamic text: Distantly, you hear Tatiana mutter, "Huh, what''s this?" and her power pokes <<$...
    scene.text(`Distantly, you hear Tatiana mutter, "Huh, what's this?" and her power pokes ${((s as any).sucself1 ?? '')}.`);
    (s as any).sclocrt = 'succubus';
    (s as any).scargrt = 'tatianaask';
    (s as any).scsubloc = 'tatianasex';
    (s as any).scpopt = 1;
    (s as any).sucpcinfo = 3;
    scene.actions([
{ label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'succubus', 'init'
  } },
]);
    return;
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
  scene.actions([
{ label: 'Get dressed', goto: ['succubus', 'tatianaask'] },
]);
  return;
  // TODO-QSP: end
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  if (((s as any).sucpcinfo ?? 0) >= 4  &&  String((s as any).locArgs?.[1] ?? '') === 0) {
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
  if (((s as any).sucpcinfo ?? 0) >= 5  &&  (String((s as any).locArgs?.[1] ?? '') === 0  ||  String((s as any).locArgs?.[1] ?? '') === 1)) {
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
  if (((s as any).sucpcinfo ?? 0) >= 6  &&  (String((s as any).locArgs?.[1] ?? '') === 0  ||  String((s as any).locArgs?.[1] ?? '') === 2)) {
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
  if (((s as any).sucpcinfo ?? 0) >= 7  &&  (String((s as any).locArgs?.[1] ?? '') === 0  ||  String((s as any).locArgs?.[1] ?? '') === 3)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('"Succubae are somewhat territorial when hungry, but when sated, the impulse is weak enough to suppress easily. They seem to have established neutral territories in the flesh-pots of the world, like Amsterdam, Morocco, and Las Vegas. Places like that are not claimed by one Succubus, instead groups of them have made their homes there.');
    scene.text('"A Succubae\'s body can learn to expend a bit of power to accommodate nearly any size of… implement." She gives you a smug grin with that.');
    if (((s as any).sucskill ?? 0) < 4) {
      scene.text('And I can teach you, just go get the biggest dildo they sell at that shop down the street, then bring it and 100 units of stored energy back here.');
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['tatiana_lab', 'Tatiana'] },
  ]);
  scene.build();
}

function enterTatianasex(s: GameState, scene: SceneBuilder): void {
  (s as any).scsubloc = 'tatianasex';
  if ((!((s as any).suceatinit ?? 0))) {
    qspGoto(s, 'succubus', 'init');
  }
  (s as any).suceatinit = 0;
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/succubusself.jpg');
  if (((s as any).sucpcinfo ?? 0) < 4) {
    (s as any).tatisucsex = ((s as any).tatisucsex ?? 0) - (2);
    // TODO-QSP: dynamic text: Your power reaches through the connection to Tatiana, enflaming her lust even as...
    scene.text(`Your power reaches through the connection to Tatiana, enflaming her lust even as ${((s as any).sucself1 ?? '')} grabs ahold of her power.`);
    // TODO-QSP: dynamic text: At this point, you gain some control back and cause her power to cycle through y...
    scene.text(`At this point, you gain some control back and cause her power to cycle through you, as ${((s as any).sucself1 ?? '')} cycles through her making her passion and yours move together.`);
    scene.text('Tatiana quickly strips down and moves between your legs…');
  } else {
    // TODO-QSP: dynamic text: You take control of <<$sucself1>> and, as you softly kiss her, <<$sucself1>> gen...
    scene.text(`You take control of ${((s as any).sucself1 ?? '')} and, as you softly kiss her, ${((s as any).sucself1 ?? '')} gently flows into Tatiana even as you coax her power to flow into you.`);
    // TODO-QSP: dynamic text: With her power and <<$sucself1>> fully intertwined, you set up a gently flowing ...
    scene.text(`With her power and ${((s as any).sucself1 ?? '')} fully intertwined, you set up a gently flowing cycle, making her passion and yours move together.`);
    scene.text('Tatiana then kisses her way down your body, taking up position between your legs.');
  }
  // TODO-QSP: end
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
    if (((st as any).sucpcinfo ?? 0) >= 6  &&  ((st as any).sucskill ?? 0) < 3  &&  ((st as any).sctrainprep ?? 0) === 1) {
      qspGoto(st, 'succubus', 'training3sex');
    }
    scene.img('images/characters/city/tatiana/sex/karinsucsex3.jpg');
    scene.text('You continue this way for some time, flipping back and forth, having multiple simultaneous orgasms until you sense her body is tiring even though her power level is a bit higher than when you two started.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A176');
    (st as any).scfeed = 2 + ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    if ((!((st as any).tatianaSex ?? 0))) {
      (st as any).tatianaSex = 1;
      (st as any).girl = ((st as any).girl ?? 0) + (1);
    }
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'cuni', 20, 'lesbian');
    qspCall(st, 'arousal', 'end');
    (st as any).pcs_horny = 0;
    (st as any).orgasm = ((st as any).orgasm ?? 0) + (((st as any).scfeed ?? 0));
    (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (((st as any).scfeed ?? 0));
    (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (25 * ((st as any).scfeed ?? 0));
    (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
    (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    (st as any).sucabslez = 1;
    (st as any).minut = ((st as any).minut ?? 0) + (20 + (20 * ((st as any).scfeed ?? 0)) / ((st as any).succublvl ?? 0));
    (st as any).tatisucsexday = ((st as any).daystart ?? 0) + 1 + ((st as any).scfeed ?? 0) / 3;
    if (((st as any).sucpcinfo ?? 0) < 4) {
      qspGoto(st, 'succubus', 'tatianaask');
    }
    (st as any).tatisucsex = ((st as any).tatisucsex ?? 0) + (1);
    if ((!((st as any).tatisucsex ?? 0))) {
      (st as any).tatisucsex = 1;
    }
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    (st as any).sucskill = 3;
    qspCall(st, 'npcStat', 'A176');
    if ((!((st as any).tatianaSex ?? 0))) {
      (st as any).tatianaSex = 1;
    }
    (st as any).orgasm_or = 'no';
    // TODO-QSP: gs 'arousal', 'cuni', 15 * rand(1, 8), 'dom', 'lesbian'
    qspCall(st, 'arousal', 'cuni_give', (-15), 'dom', 'lesbian');
    qspCall(st, 'arousal', 'end');
    (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
    (st as any).tatisucsex = ((st as any).tatisucsex ?? 0) + (1);
    if ((!((st as any).tatisucsex ?? 0))) {
      (st as any).tatisucsex = 1;
    }
    (st as any).pcs_willpwr = ((st as any).willpowermax ?? 0);
    (st as any).sucexcess = ((st as any).sucexcess ?? 0) - (100);
    (st as any).succhungry = ((st as any).succhungry ?? 0) + (1);
    (st as any).succubxp = ((st as any).succubxp ?? 0) + (10);
    (st as any).tatisucsexday = ((st as any).daystart ?? 0) + (Math.floor(Math.random() * 6) + 5);
    (st as any).pcs_hairbsh = 0;
    if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
      (st as any).pcs_makeup = 0;
    }
    (st as any).pcs_energy = 100;
    (st as any).pcs_sleep = 40;
    qspCall(st, 'stat', '');
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
  (s as any).minut = ((s as any).minut ?? 0) + (10 * (Math.floor(Math.random() * 4) + 3));
  (s as any).sucpcinfo = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/succresrch.jpg');
  scene.text('Other than a host of internet stories, the thing you find that matches closest to what you have been feeling is a succubus, a demonic creature that destroys or corrupts men\'s souls through sex.');
  scene.text('However, you don\'t feel like you have been corrupting anything, and the match isn\'t that great…');
  scene.text('Maybe you should go ask Tatiana…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterSucwalkinginit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'bedr'  ||  ((s as any).loc ?? 0) === 'nichBedroomServant'  ||  ((s as any).loc ?? 0) === 'dom_gor'  ||  ((s as any).loc ?? 0) === 'uni_dorm'  ||  ((s as any).loc ?? 0) === 'city_house_res_bedr'  ||  (((s as any).loc ?? 0) === 'HotelRoom'  &&  ((s as any).region ?? 0) === 'city')) {
    (s as any).sucslpzone = 1;
  } else {
    if (((s as any).loc ?? 0) === 'bedrPar'  ||  (((s as any).loc ?? 0) === 'HotelRoom'  &&  ((s as any).region ?? 0) === 'pav')) {
      (s as any).sucslpzone = 2;
    } else {
      if (((s as any).loc_arg ?? 0) === 'ybedroom') {
        (s as any).sucslpzone = 3;
      } else {
        if (((s as any).loc ?? 0) === 'bedr2x') {
          (s as any).sucslpzone = 4;
        } else {
          if ((String(((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'gad_gp') {
            (s as any).sucslpzone = 5;
          } else {
            return;
          }
        }
      }
    }
  }
  if (((s as any).succublvl ?? 0) <= 2) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'underwear', 'remove');
    }
  } else {
    if (((s as any).sleepVars ?? 0)?.['bedPanty'] === 1) {
      qspCall(s, 'underwear', 'wear');
    } else {
      if (((s as any).sleepVars ?? 0)?.['bedPanty'] === 2) {
        qspCall(s, 'underwear', 'remove');
      }
    }
  }
  if (((s as any).analPlugIn ?? 0) === 1  &&  ((s as any).sleepVars ?? 0)?.['bedAnal'] === 1) {
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 0;
  }
  if (((s as any).vibratorIN ?? 0) === 1  &&  ((s as any).sleepVars ?? 0)?.['bedVibrator'] === 1) {
    (s as any).vibratorIN = 0;
  }
  if (((s as any).succublvl ?? 0) === 1  &&  ((s as any).lastwornclothingtype ?? 0) !== 'nude') {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspGoto(s, 'succubus', 'sucwalkinggo');
  }
  // TODO-QSP: $succlocat[0] = 'eroto_dress'
  // TODO-QSP: $succlocat[1] = 'eroto_outfits'
  // TODO-QSP: $succlocat[2] = 'eroto_strip'
  // TODO-QSP: $succlocat[3] = 'scandalicious_dress'
  // TODO-QSP: $succlocat[4] = 'scandalicious_outfits'
  // TODO-QSP: $succlocat[5] = 'salacious_outfit'
  // TODO-QSP: $succlocat[6] = 'salacious_dress'
  // TODO-QSP: $succlocat[7] = 'fashionista_dress'
  // TODO-QSP: $succlocat[8] = 'fashionista_oufits'
  // TODO-QSP: $succlocat[9] = 'cats_dress'
  // TODO-QSP: $succlocat[10] = 'cats_outfits'
  // TODO-QSP: $succlocat[11] = 'coco_dress'
  // TODO-QSP: $succlocat[12] = 'coco_outfits'
  // TODO-QSP: $succlocat[13] = 'flamingos_dress'
  // TODO-QSP: $succlocat[14] = 'flamingos_outfits'
  // TODO-QSP: $succlocat[15] = 'market_outfits'
  // TODO-QSP: $succlocat[16] = 'gm_outfits'
  // TODO-QSP: $succlocat[17] = 'gm_dress'
  // TODO-QSP: $succlocat[18] = 'gm_office'
  // TODO-QSP: $succlocat[19] = 'gm_school'
  // TODO-QSP: $succlocat[20] = 'dolls_outfits'
  // TODO-QSP: $succlocat[21] = 'dolls_dress'
  // TODO-QSP: $succlocat[22] = 'bomba_outfits'
  // TODO-QSP: $succlocat[23] = 'bomba_dress'
  // TODO-QSP: $succlocat[24] = 'danilovich_outfits'
  // TODO-QSP: $succlocat[25] = 'nerdvana_cosplay'
  // TODO-QSP: $succlocat[26] = 'nerdvana_outfits'
  // TODO-QSP: $succlocat[27] = 'moncheri_gown'
  // TODO-QSP: $succlocat[28] = 'moncheri_dress'
  // TODO-QSP: $succlocat[29] = 'materinstvo_dress'
  // TODO-QSP: $succlocat[30] = 'gm_server'
  // TODO-QSP: $succlocat[31] = 'gm_maid'
  (s as any).temp_succubus_x = 0;
  (s as any).temp_succubus_j = 0;
  // TODO-QSP: :loopclotype
  // TODO-QSP: gs 'clothing', 'totals', $succlocat[temp_succubus_j]
  (s as any).temp_succubus_i = 1;
  // TODO-QSP: :loopclonum
  if (qspFunc(s, 'clothing', 'can_wear', ((s as any).succlocat ?? 0)?.[String((s as any).temp_succubus_j ?? 0)], ((s as any).temp_succubus_i ?? 0))) {
    // TODO-QSP: $succlolistn[temp_succubus_x] = $succlocat[temp_succubus_j]
    ((s as any).succlolisti = (s as any).succlolisti ?? {})[String((s as any).temp_succubus_x ?? 0)] = ((s as any).temp_succubus_i ?? 0);
    (s as any).temp_succubus_x = ((s as any).temp_succubus_x ?? 0) + (1);
  }
  (s as any).temp_succubus_i = ((s as any).temp_succubus_i ?? 0) + (1);
  if (((s as any).temp_succubus_i ?? 0) <= ((s as any).total ?? 0)) {
    // TODO-QSP: jump 'loopclonum'
  }
  (s as any).temp_succubus_j = ((s as any).temp_succubus_j ?? 0) + (1);
  if (((s as any).temp_succubus_j ?? 0) < Object.keys((s as any).succlocat ?? {}).length) {
    // TODO-QSP: jump 'loopclotype'
  }
  if (((s as any).succublvl ?? 0) < 3) {
    // TODO-QSP: :oops
    (s as any).clopickrand = (Math.floor(Math.random() * (((s as any).temp_succubus_x ?? 0) - 1 - 0 + 1)) + (0));
    if (((s as any).succlolistn ?? 0)?.[String((s as any).clopickrand ?? 0)] === '') {
      // TODO-QSP: jump 'oops'
    }
    // TODO-QSP: gs 'clothing', 'wear', $succlolistn[clopickrand], succlolisti[clopickrand]
    qspGoto(s, 'succubus', 'sucwalkinggo');
  }
  (s as any).z = 0;
  (s as any).scclocatcnt = 0;
  // TODO-QSP: :randpoploop_bimbo_outer
  (s as any).y = 0;
  // TODO-QSP: :randpoploop_bimbo_inner
  if (((s as any).succlocat ?? 0)?.[String((s as any).scclocatcnt ?? 0)] === ((s as any).succlolistn ?? 0)?.[String((s as any).y ?? 0)]) {
    // TODO-QSP: gs 'clothing_attributes', $succlolistn[y], succlolisti[y]
    if (((s as any).CloBimbo ?? 0) === 1) {
      // TODO-QSP: $succlorandn[z] = $succlolistn[y]
      ((s as any).succlorandi = (s as any).succlorandi ?? {})[String((s as any).z ?? 0)] = ((s as any).succlolisti ?? 0)?.[String((s as any).y ?? 0)];
      (s as any).z = ((s as any).z ?? 0) + (1);
    }
  }
  (s as any).y = ((s as any).y ?? 0) + (1);
  if (((s as any).y ?? 0) <= ((s as any).temp_succubus_x ?? 0)) {
    // TODO-QSP: jump 'randpoploop_bimbo_inner'
  }
  (s as any).scclocatcnt = ((s as any).scclocatcnt ?? 0) + (1);
  if (((s as any).scclocatcnt ?? 0) <= 6) {
    // TODO-QSP: jump 'randpoploop_bimbo_outer'
  }
  if (((s as any).z ?? 0) < 1) {
    (s as any).scpckrnd = 1;
  }
  if (((s as any).scpckrnd ?? 0) > 0) {
    if (((s as any).scclocatcnt ?? 0) <= 10) {
      // TODO-QSP: jump 'randpoploop_bimbo_outer'
    }
  }
  if (((s as any).z ?? 0) < 1) {
    (s as any).scpckrnd = 0;
    (s as any).scclocatcnt = 0;
    // TODO-QSP: :randpoploop_full_outer
    (s as any).y = 0;
    // TODO-QSP: :randpoploop_full_inner
    if (((s as any).succlocat ?? 0)?.[String((s as any).scclocatcnt ?? 0)] === ((s as any).succlolistn ?? 0)?.[String((s as any).y ?? 0)]) {
      // TODO-QSP: $succlorandn[z] = $succlolistn[y]
      ((s as any).succlorandi = (s as any).succlorandi ?? {})[String((s as any).z ?? 0)] = ((s as any).succlolisti ?? 0)?.[String((s as any).y ?? 0)];
      (s as any).z = ((s as any).z ?? 0) + (1);
    }
    (s as any).y = ((s as any).y ?? 0) + (1);
    if (((s as any).y ?? 0) <= ((s as any).temp_succubus_x ?? 0)) {
      // TODO-QSP: jump 'randpoploop_full_inner'
    }
    (s as any).scclocatcnt = ((s as any).scclocatcnt ?? 0) + (1);
    if (((s as any).scclocatcnt ?? 0) <= 6) {
      // TODO-QSP: jump 'randpoploop_full_outer'
    }
    if (((s as any).z ?? 0) < 1) {
      (s as any).scpckrnd = 1;
    }
    if (((s as any).scpckrnd ?? 0) > 0) {
      if (((s as any).scclocatcnt ?? 0) <= 10) {
        // TODO-QSP: jump 'randpoploop_full_outer'
      }
      if (((s as any).z ?? 0) < 1) {
        (s as any).scpckrnd = 2;
      }
      if (((s as any).scpckrnd ?? 0) > 1) {
        if (((s as any).scclocatcnt ?? 0) <= Object.keys((s as any).succlocat ?? {}).length) {
          // TODO-QSP: jump 'randpoploop_full_outer'
        }
      }
    }
  }
  // TODO-QSP: :oops2
  (s as any).clopickrand = (Math.floor(Math.random() * (((s as any).z ?? 0) - 1 - 0 + 1)) + (0));
  if (((s as any).succlorandn ?? 0)?.[String((s as any).clopickrand ?? 0)] === '') {
    // TODO-QSP: jump 'oops2'
  }
  // TODO-QSP: gs 'clothing', 'wear', $succlorandn[clopickrand], succlorandi[clopickrand]
  if (((s as any).succublvl ?? 0) < 4) {
    qspGoto(s, 'succubus', 'sucwalkinggo');
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    (s as any).pcs_hairbsh = 1;
  }
  if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lipbalm'] = ((s as any).mc_inventory['lipbalm'] ?? 0) - (1);
    (s as any).lipkoef = ((s as any).lipkoef ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    if (((s as any).lipkoef ?? 0) > 50) {
      (s as any).lipkoef = 0;
      (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
    }
    (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) + (8);
  }
  if (((s as any).pcs_makeup ?? 0) <= 1  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
    (s as any).pcs_makeup = 4;
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] < 3  &&  ((s as any).pcs_makeup ?? 0) === 4) {
      (s as any).pcs_makeup = 3;
    }
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] < 2  &&  ((s as any).pcs_makeup ?? 0) === 3) {
      (s as any).pcs_makeup = 2;
    }
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] < 1  &&  ((s as any).pcs_makeup ?? 0) !== 1) {
      (s as any).pcs_makeup = 1;
    } else {
      if (((s as any).pcs_makeup ?? 0) === 2) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (1);
      }
      if (((s as any).pcs_makeup ?? 0) === 3) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (2);
      }
      if (((s as any).pcs_makeup ?? 0) === 4) {
        (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (3);
      }
    }
  }
  qspGoto(s, 'succubus', 'sucwalkinggo');
  // TODO-QSP: end
  scene.build();
}

function enterSucwalkinggo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bedroom/dream/sucrandream3.jpg');
  if (((s as any).succublvl ?? 0) < 3) {
    (s as any).sucselftmp = 'a personification of ' + ((s as any).sucself1 ?? 0) + ' in your core';
  } else {
    (s as any).sucselftmp = ((s as any).sucself1 ?? 0);
  }
  // TODO-QSP: dynamic text: You dream that you are arguing with <<$sucselftmp>>.
  scene.text(`You dream that you are arguing with ${((s as any).sucselftmp ?? '')}.`);
  scene.text('You don\'t know what it\'s about, but you think you <b><i>lost</i></b>…');
  (s as any).sucencntrand = (1 + ((s as any).succublvl ?? 0))/2 + (Math.floor(Math.random() * (((s as any).succublvl ?? 0) - 0 + 1)) + (0));
  (s as any).scfeed = (((s as any).succublvl ?? 0) * ((s as any).sucencntrand ?? 0)) + ((s as any).rand ?? 0)(1, (4 * ((s as any).sucencntrand ?? 0)));
  (s as any).minut = ((s as any).minut ?? 0) + (180 + ((((s as any).scfeed ?? 0) * 10) / ((s as any).succublvl ?? 0)));
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5 * (360 + ((((s as any).scfeed ?? 0) * 10) / ((s as any).succublvl ?? 0))));
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (15 * ((360 + ((((s as any).scfeed ?? 0) * 10) / ((s as any).succublvl ?? 0))) / 60));
  ((s as any).pcs_condition = (s as any).pcs_condition ?? {})['lack_of_sleep'] = 0;
  qspCall(s, 'stat', '');
  (s as any).inSleep = 0;
  (s as any).pcs_horny = 0;
  (s as any).orgasm = ((s as any).orgasm ?? 0) + (((s as any).scfeed ?? 0));
  (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (((s as any).scfeed ?? 0));
  (s as any).succubxp = ((s as any).succubxp ?? 0) + (3 * ((s as any).sucencntrand ?? 0));
  (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (25 * ((s as any).scfeed ?? 0));
  (s as any).scwalkmon = ((s as any).rand ?? 0) (50, (100 * ((s as any).sucencntrand ?? 0)));
  qspCall(s, 'money', 'earn', ((s as any).scwalkmon ?? 0), 'cash');
  (s as any).sucwalkday = ((s as any).daystart ?? 0) + ((s as any).sucencntrand ?? 0) + (Math.floor(Math.random() * 6) + 0);
  (s as any).sctemp = (Math.floor(Math.random() * 10) + 1);
  if (((s as any).sucencntrand ?? 0) > 1) {
    if (((s as any).sctemp ?? 0) <= 6) {
      (s as any).sucabscum = 1;
    } else {
      if (((s as any).sctemp ?? 0) === 7) {
        (s as any).sucabslez = 1;
      } else {
        (s as any).sucabslez = 1;
        (s as any).sucabscum = 1;
      }
    }
  } else {
    if (((s as any).sctemp ?? 0) <= 7) {
      (s as any).sucabscum = 1;
    } else {
      (s as any).sucabslez = 1;
    }
  }
  if (((s as any).succublvl ?? 0) >= 4  &&  qspFunc(s, 'car_funcs', 'has_car')  &&  qspFunc(s, 'car_funcs', 'has_wreck') === 0) {
    if (((s as any).car ?? 0)?.['fuel'] < 5) {
      if (qspFunc(s, 'money', 'can_afford', (30 * (((s as any).car ?? 0)?.['tank'] - ((s as any).car ?? 0)?.['fuel'])), 'cash')) {
        // TODO-QSP: gs 'money', 'pay', (30 * (car['fuel'] - car['fuel'])), 'cash'
        ((s as any).car = (s as any).car ?? {})['fuel'] = ((s as any).car ?? 0)?.['tank'];
      } else {
        if (((s as any).kanistra ?? 0) > 0) {
          ((s as any).car = (s as any).car ?? {})['fuel'] = ((s as any).car['fuel'] ?? 0) + (5);
          (s as any).kanistra = ((s as any).kanistra ?? 0) - (1);
        } else {
          qspCall(s, 'money', 'set', 0, 'cash');
          (s as any).scwalkmon = 0;
          ((s as any).car = (s as any).car ?? {})['fuel'] = ((s as any).car['fuel'] ?? 0) + ((Math.floor(Math.random() * (((s as any).car ?? 0)?.['tank'] - 10 + 1)) + (10)));
        }
      }
    }
    (s as any).sctemp = (Math.floor(Math.random() * 11) + 1);
    if (((s as any).sctemp ?? 0) === 1) {
      qspCall(s, 'car_funcs', 'setloc', 'city_residential', '', 'city');
    } else {
      if (((s as any).sctemp ?? 0) === 2) {
        qspCall(s, 'car_funcs', 'setloc', 'city_center', '', 'city');
      } else {
        if (((s as any).sctemp ?? 0) === 3) {
          qspCall(s, 'car_funcs', 'setloc', 'city_industrial', '', 'city');
        } else {
          if (((s as any).sctemp ?? 0) === 4) {
            qspCall(s, 'car_funcs', 'setloc', 'city_industrial_train', 'outside', 'city');
          } else {
            if (((s as any).sctemp ?? 0) === 5) {
              qspCall(s, 'car_funcs', 'setloc', 'city_lake', 'start', 'city');
            } else {
              if (((s as any).sctemp ?? 0) === 6) {
                qspCall(s, 'car_funcs', 'setloc', 'city_park', 'start', 'city');
              } else {
                if (((s as any).sctemp ?? 0) === 7) {
                  qspCall(s, 'car_funcs', 'setloc', 'dachi', '', 'other');
                } else {
                  if (((s as any).sctemp ?? 0) === 8) {
                    qspCall(s, 'car_funcs', 'setloc', 'pushkin', '', 'pushkin');
                  } else {
                    if (((s as any).sctemp ?? 0) === 9) {
                      qspCall(s, 'car_funcs', 'setloc', 'pav_residential', '', 'pav');
                    } else {
                      if (((s as any).sctemp ?? 0) === 10) {
                        qspCall(s, 'car_funcs', 'setloc', 'gadukino', '', 'gad');
                      } else {
                        qspCall(s, 'car_funcs', 'setloc', 'pav_commercial', '', 'pav');
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
    ((s as any).car = (s as any).car ?? {})['fuel'] = ((s as any).car['fuel'] ?? 0) - ((Math.floor(Math.random() * 4) + 1));
    ((s as any).car = (s as any).car ?? {})['current_condition'] = ((s as any).car['current_condition'] ?? 0) - ((Math.floor(Math.random() * 4) + 3));
    qspCall(s, 'carF', '');
    (s as any).sccarflag = 1;
  } else {
    (s as any).sctemp = (Math.floor(Math.random() * 5) + 1);
    if (((s as any).sucslpzone ?? 0) === 1) {
      if (((s as any).sctemp ?? 0) === 1) {
        (s as any).sucgoloc = 'city_industrial';
        (s as any).sucgometka = '';
      }
      if (((s as any).sctemp ?? 0) === 2) {
        (s as any).sucgoloc = 'city_residential';
        (s as any).sucgometka = '';
      }
      if (((s as any).sctemp ?? 0) === 3) {
        (s as any).sucgoloc = 'city_center';
        (s as any).sucgometka = '';
      }
      if (((s as any).sctemp ?? 0) === 4) {
        (s as any).sucgoloc = 'city_park';
        (s as any).sucgometka = 'start';
      }
      if (((s as any).sctemp ?? 0) === 5) {
        (s as any).sucgoloc = 'city_lake';
        (s as any).sucgometka = 'start';
      }
    } else {
      if (((s as any).sucslpzone ?? 0) === 2) {
        if (((s as any).sctemp ?? 0) === 1) {
          (s as any).sucgoloc = 'pav_commercial';
          (s as any).sucgometka = '';
        }
        if (((s as any).sctemp ?? 0) === 2) {
          (s as any).sucgoloc = 'pav_residential';
          (s as any).sucgometka = '';
        }
        if (((s as any).sctemp ?? 0) === 3) {
          (s as any).sucgoloc = 'pav_park';
          (s as any).sucgometka = 'start';
        }
        if (((s as any).sctemp ?? 0) === 4) {
          (s as any).sucgoloc = 'pav_market';
          (s as any).sucgometka = '';
        }
        if (((s as any).sctemp ?? 0) === 5) {
          (s as any).sucgoloc = 'pav_lake';
          (s as any).sucgometka = '';
        }
      } else {
        if (((s as any).sucslpzone ?? 0) === 3) {
          if (((s as any).sctemp ?? 0) === 1) {
            (s as any).sucgoloc = 'city_industrial';
            (s as any).sucgometka = '';
          }
          if (((s as any).sctemp ?? 0) === 2) {
            (s as any).sucgoloc = 'city_park';
            (s as any).sucgometka = 'start';
          }
          if (((s as any).sctemp ?? 0) === 3) {
            (s as any).sucgoloc = 'pav_commercial';
            (s as any).sucgometka = '';
          }
          if (((s as any).sctemp ?? 0) === 4) {
            (s as any).sucgoloc = 'pav_market';
            (s as any).sucgometka = '';
          }
          if (((s as any).sctemp ?? 0) === 5) {
            (s as any).sucgoloc = 'motel';
            (s as any).sucgometka = '';
          }
        } else {
          if (((s as any).sucslpzone ?? 0) === 4) {
            if (((s as any).sctemp ?? 0) === 1) {
              (s as any).sucgoloc = 'pushkin';
              (s as any).sucgometka = '';
            }
            if (((s as any).sctemp ?? 0) === 2) {
              (s as any).sucgoloc = 'pushkin_sq';
              (s as any).sucgometka = '';
            }
            if (((s as any).sctemp ?? 0) === 3) {
              (s as any).sucgoloc = 'pushkin_parks';
              (s as any).sucgometka = '';
            }
            if (((s as any).sctemp ?? 0) === 4) {
              (s as any).sucgoloc = 'pav_market';
              (s as any).sucgometka = '';
            }
            if (((s as any).sctemp ?? 0) === 5) {
              (s as any).sucgoloc = 'city_industrial';
              (s as any).sucgometka = '';
            }
          } else {
            if (((s as any).sucslpzone ?? 0) === 5) {
              if (((s as any).sctemp ?? 0) === 1) {
                (s as any).sucgoloc = 'gadukino';
                (s as any).sucgometka = '';
              }
              if (((s as any).sctemp ?? 0) === 2) {
                (s as any).sucgoloc = 'pav_market';
                (s as any).sucgometka = '';
              }
              if (((s as any).sctemp ?? 0) === 3) {
                (s as any).sucgoloc = 'motel';
                (s as any).sucgometka = '';
              }
              if (((s as any).sctemp ?? 0) === 4) {
                (s as any).sucgoloc = 'city_industrial';
                (s as any).sucgometka = '';
              }
              if (((s as any).sctemp ?? 0) === 5) {
                (s as any).sucgoloc = 'city_park';
                (s as any).sucgometka = 'start';
              }
            }
          }
        }
      }
    }
    // TODO-QSP: killvar 'sctemp'
    // TODO-QSP: killvar 'sucslpzone'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wake Up', handler: (st: GameState) => {
    (st as any).pcs_sleep = 100;
    qspCall(st, 'mood', 'raise', 'medium');
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (((st as any).healthmax ?? 0)/5);
    (st as any).pcs_stam = ((st as any).stammax ?? 0);
    (st as any).pcs_mana = (((st as any).pcs_intel ?? 0) * ((st as any).pcs_magik ?? 0)) + ((st as any).pcs_magik ?? 0) * 100 + ((st as any).pcs_vital ?? 0) * 10 + ((st as any).rikudo ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    (st as any).scwrdtmp = '.';
    scene.text('');
    scene.text('You wake up and realize that you\'re not in your bed…');
    if (((st as any).pcs_hairbsh ?? 0) === 1  &&  ((st as any).pcs_makeup ?? 0) > 1) {
      (st as any).scwrdtmp = ', your hair is brushed, and you\'re wearing makeup.';
    }
    // TODO-QSP: dynamic text: Instead, you are fully dressed<<$scwrdtmp>>
    scene.text(`Instead, you are fully dressed${((st as any).scwrdtmp ?? '')}`);
    if (((st as any).scwalkmon ?? 0) > 0) {
      // TODO-QSP: dynamic text: You find <<$func(''money'', ''string_profit'', scwalkmon)>> stuffed in your clea...
      scene.text(`You find ${qspFunc(s, 'money', 'string_profit', ((st as any).scwalkmon ?? ''))} stuffed in your cleavage (which you place in your wallet).`);
      qspCall(st, 'money', 'earn', ((st as any).scwalkmon ?? 0), 'cash');
    }
    scene.text('And you feel absolutely <i>bursting</i> with energy.');
    scene.text('');
    scene.text('After a moment, you start wondering where you are…');
    scene.actions([
      { label: 'Look around to see where you are', handler: (st: GameState) => {
    if (((st as any).sccarflag ?? 0) === 1) {
    } else {
      dynamicGoto(st, 'sucgoloc', 'sucgometka');
    }
  } },
    ]);
  } },
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
    case 'tatianasex':
      enterTatianasex(s, scene);
      break;
    case 'training3sex':
      enterTraining3sex(s, scene);
      break;
    case 'kompresearch':
      enterKompresearch(s, scene);
      break;
    case 'sucwalkinginit':
      enterSucwalkinginit(s, scene);
      break;
    case 'sucwalkinggo':
      enterSucwalkinggo(s, scene);
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
  enter: enter,
};
