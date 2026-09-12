import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDinMesec(s: GameState, scene: SceneBuilder): void {
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: <<$boydesc>>: Damn, they weren't lying about that body of yours.
    scene.text(`${((s as any).boydesc ?? 0)}: Damn, they weren't lying about that body of yours.`);
    // TODO-QSP: dynamic text: Don't worry, we were only told good things, <<$pcs_nickname>>. Do you want it in...
    scene.text(`Don't worry, we were only told good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
    // TODO-QSP: dynamic text: Oh, anal won't work for me today <<$boydesc>>, I'm not quite ready… if you know ...
    scene.text(`Oh, anal won't work for me today ${((s as any).boydesc ?? 0)}, I'm not quite ready… if you know what I mean…`);
    // TODO-QSP: dynamic text: I understand, says <<$boydesc>>. - Okay, next time, come with a clean ass!
    scene.text(`I understand, says ${((s as any).boydesc ?? 0)}. - Okay, next time, come with a clean ass!`);
  } else {
    // TODO-QSP: dynamic text: <<$boydesc>>: Damn, they weren't lying about that body of yours.
    scene.text(`${((s as any).boydesc ?? 0)}: Damn, they weren't lying about that body of yours.`);
    // TODO-QSP: dynamic text: Don't worry, we were only told good things, <<$pcs_nickname>>. Do you want it in...
    scene.text(`Don't worry, we were only told good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
    scene.text('"Let\'s not rush things too fast", you say.');
  }
  scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
  // TODO-QSP: end & !! --- din_mesec ---
  scene.build();
}

function enterDinHuntersBjBonusH1(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus1.mp4');
  scene.text('You glide your tongue over the head of his member, gently flicking and poking at his urethra.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$boydesc>> looks down at you: -<<$pcs_nickname>>, what are you doing, stop it,...
    scene.text(`${((s as any).boydesc ?? 0)} looks down at you: -${((s as any).pcs_nickname ?? 0)}, what are you doing, stop it, I'm fucking going to cum from this already.`);
  } else {
    // TODO-QSP: dynamic text: <<$boydesc>> looks down at you: -<<$pcs_nickname>>, what are you doing, stop it,...
    scene.text(`${((s as any).boydesc ?? 0)} looks down at you: -${((s as any).pcs_nickname ?? 0)}, what are you doing, stop it, I'm going to shoot my load already.`);
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonusH1 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bjH1'] },
  ]);
  scene.build();
}

function enterDinHuntersBjH1(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
  }
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj1\' + rand(0, 3) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: You <<$textsexkotov>>
  scene.text(`You ${((s as any).textsexkotov ?? 0)}`);
  scene.text('Gently and quickly slid the tip of your tongue over the head of the cock, playing with the opening.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('<a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonusH1\'">Shove</a> the tip of the tongue in the hole.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('He\'s had enough of your foreplay, the guy asks you…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 4) + 1;
    if (((s as any).k ?? 0) === 1  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_analH\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_analH\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_analH\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_analH\'">lie on your stomach</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 2) + 1;
    if (((s as any).bj ?? 0) <= 10) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      (s as any).i = Math.floor(Math.random() * 4) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).bj ?? 0) <= 10) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
          ]);
        }
      } else {
        if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
          (s as any).i = Math.floor(Math.random() * 2) + 1;
          if (((s as any).i ?? 0) === 1) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
            ]);
          }
          if (((s as any).i ?? 0) === 2) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bjH1 ---
  scene.build();
}

function enterDinHuntersBjBonusH2(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus2.mp4');
  scene.text('He shivers slightly as you gently bite the head of his cock with your pearly white teeth.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -Hey, fuck, <<$pcs_nickname>>, are you mistaking my dick for a banana? Cut that ...
    scene.text(`-Hey, fuck, ${((s as any).pcs_nickname ?? 0)}, are you mistaking my dick for a banana? Cut that shit out!`);
  } else {
    // TODO-QSP: dynamic text: -Be careful <<$pcs_nickname>>, stop joking around with that thing.
    scene.text(`-Be careful ${((s as any).pcs_nickname ?? 0)}, stop joking around with that thing.`);
  }
  scene.text('You smile and look at him.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonusH2 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bjH2'] },
  ]);
  scene.build();
}

function enterDinHuntersBjH2(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
  }
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj2\' + rand(0, 6) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: You <<$textsexkotov>>, and tightly clench your <<$pc_desc['lips']>> lips 
  scene.text(`You ${((s as any).textsexkotov ?? 0)}, and tightly clench your ${((s as any).pc_desc ?? 0)?.['lips']} lips `);
  scene.text('The tenderness of your lips is driving him crazy');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('You try slightly <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonusH2\'">biting</a> the red head of his throbbing member');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 4) + 1;
    if (((s as any).k ?? 0) === 1  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_analH\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_analH\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_analH\'">Bend</a>.');
    }
    if (((s as any).k ?? 0) === 4  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_analH\'">lie on your stomach</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 2) + 1;
    if (((s as any).bj ?? 0) <= 10) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      (s as any).i = Math.floor(Math.random() * 4) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).bj ?? 0) <= 10) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
          ]);
        }
      } else {
        if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
          (s as any).i = Math.floor(Math.random() * 2) + 1;
          if (((s as any).i ?? 0) === 1) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
            ]);
          }
          if (((s as any).i ?? 0) === 2) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bjH2 ---
  scene.build();
}

function enterDinHuntersBjBonusH3(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus3.mp4');
  scene.text('Looking into the eyes of your boyfriend, you use your tongue to tease one of the most erogenous zones of his member.');
  // TODO-QSP: dynamic text: -Class <<$pcs_nickname>>, you know how to make me even harder.
  scene.text(`-Class ${((s as any).pcs_nickname ?? 0)}, you know how to make me even harder.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonusH3 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bjH3'] },
  ]);
  scene.build();
}

function enterDinHuntersBjH3(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj3\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: You cover his cock with sweet kisses, gently touching your <<$pc_desc['lips']>> ...
  scene.text(`You cover his cock with sweet kisses, gently touching your ${((s as any).pc_desc ?? 0)?.['lips']} lips`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('You slightly <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonusH3\'"> tease</a> his member');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 4) + 1;
    if (((s as any).k ?? 0) === 1  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_analH\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_analH\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_analH\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_analH\'">lie on your stomach</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 2) + 1;
    if (((s as any).bj ?? 0) <= 10) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      (s as any).i = Math.floor(Math.random() * 4) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Bend', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).bj ?? 0) <= 10) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
          ]);
        }
      } else {
        if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
          (s as any).i = Math.floor(Math.random() * 2) + 1;
          if (((s as any).i ?? 0) === 1) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
            ]);
          }
          if (((s as any).i ?? 0) === 2) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bjH3 ---
  scene.build();
}

function enterDinHuntersBjBonusH4(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus4.mp4');
  scene.text('Grasping the base of his penis, you do as he asks, slapping his cock against your cheeks.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-Oh yeah, you are my little submissive bitch, get down on that dick honey.');
  } else {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      scene.text('-Oh yeah, you know what I like, go ahead honey.');
    }
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonusH4 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bjH4'] },
  ]);
  scene.build();
}

function enterDinHuntersBjH4(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj4\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('You lightly grasp his member with your hand and pull back his foreskin, exposing the shiny purple head of his cock.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    // TODO-QSP: dynamic text: <<$boydesc>> asks you <a href="exec:gt 'hunterLoveSex', 'din_hunters_bj_bonusH4'...
    scene.text(`${((s as any).boydesc ?? 0)} asks you <a href="exec:gt 'hunterLoveSex', 'din_hunters_bj_bonusH4'">to slap</a> his cock on your cheek.`);
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 4) + 1;
    if (((s as any).k ?? 0) === 1  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_analH\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_analH\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_analH\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_analH\'">lie on your stomach</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.actions([
      { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bjH6'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    (s as any).i = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3) {
      scene.actions([
        { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4) {
      scene.actions([
        { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bjH6'] },
      ]);
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bjH4 ---
  scene.build();
}

function enterDinHuntersBjBonusH6(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus6.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> slaps his member on your face.
  scene.text(`${((s as any).boydesc ?? 0)} slaps his member on your face.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-You are a perfect little slut, he says with a smile.');
  } else {
    scene.text('-Bad girl, now daddy will punish you.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonusH6 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bjH6'] },
  ]);
  scene.build();
}

function enterDinHuntersBjH6(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj6\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('Grasping his thick cock in your hands, you begin to stroke it confidently watching his reaction.');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    // TODO-QSP: dynamic text: -Well, <<$pcs_nickname>>, I can jerk myself off, but lets see what sort of skill...
    scene.text(`-Well, ${((s as any).pcs_nickname ?? 0)}, I can jerk myself off, but lets see what sort of skills you have.`);
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -Come on, <<$pcs_nickname>>, show me what you can do! <<$boydesc>> says, gazing ...
    scene.text(`-Come on, ${((s as any).pcs_nickname ?? 0)}, show me what you can do! ${((s as any).boydesc ?? 0)} says, gazing deep into your eyes.`);
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('You stick out your tongue and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonusH6\'">lick</a> his hot cockhead.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 4) + 1;
    if (((s as any).k ?? 0) === 1  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_analH\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_analH\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_analH\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_analH\'">lie on your stomach</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 2) + 1;
    if (((s as any).bj ?? 0) <= 10) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      (s as any).i = Math.floor(Math.random() * 4) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).bj ?? 0) <= 10) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
          ]);
        }
      } else {
        if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface3'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bjH6 ---
  scene.build();
}

function enterDinHuntersBjBonusH7(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus11.mp4');
  // TODO-QSP: dynamic text: You take his cock into your mouth, your cheeks bulging from his size. <<$boydesc...
  scene.text(`You take his cock into your mouth, your cheeks bulging from his size. ${((s as any).boydesc ?? 0)} begins to roughly fuck you in this position, stretching your mouth to the extreme.`);
  scene.text('-Oh yeah, baby, just take it for a little while, your pretty face looks so fucking sexy like that.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonusH7 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
  ]);
  scene.build();
}

function enterDinHuntersBjH7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj11\' + rand(0, 4) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('You grab the base of his penis and begin to suck greedily. His large cock does not fit completely in your little mouth and you can only accommodate half of his total length. Your hand glides up and down his thick shaft as you do your best to swallow more of his meaty cock.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('You take his cock in your <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonusH7\'">mouth</a> and suck on his cockhead.');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 4) + 1;
    if (((s as any).k ?? 0) === 1  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_analH\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_analH\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_analH\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_analH\'">lie on your stomach</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 2) + 1;
    if (((s as any).bj ?? 0) <= 10) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      (s as any).i = Math.floor(Math.random() * 4) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Bend', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).bj ?? 0) <= 10) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
          ]);
        }
      } else {
        if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
          (s as any).i = Math.floor(Math.random() * 2) + 1;
          if (((s as any).i ?? 0) === 1) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
            ]);
          }
          if (((s as any).i ?? 0) === 2) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bjH7 ---
  scene.build();
}

function enterDinHuntersBjBonusH8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/kotovbjbonus12.mp4');
  scene.text('You try to take his cock even deeper, but, unaccustomed to deepthroating, you gag and almost puked all over him.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text:  -Fuck, fucking<<$pcs_nickname>>, if you are not able to take it all, work on it...
    scene.text(` -Fuck, fucking${((s as any).pcs_nickname ?? 0)}, if you are not able to take it all, work on it at home with a banana, and not on my cock.`);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text:  -Don't worry <<$pcs_nickname>>, maybe you'll be able to take all of it next tim...
    scene.text(` -Don't worry ${((s as any).pcs_nickname ?? 0)}, maybe you'll be able to take all of it next time.`);
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonusH8 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
  ]);
  scene.build();
}

function enterDinHuntersBjH8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj12\' + rand(0, 2) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('You start sucking his cock without touching it with your hands, thinking he\'ll enjoy that more. Unfortunately his dick doesn\'t fit all the way in your mouth, and you\'re only able to swallow half of his length.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
    scene.text('Try <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonusH8\'">swallowing</a> more of it.');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 4) + 1;
    if (((s as any).k ?? 0) === 1  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_analH\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_analH\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_analH\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_analH\'">lie on your stomach</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 2) + 1;
    if (((s as any).bj ?? 0) <= 10) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      (s as any).i = Math.floor(Math.random() * 4) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Bend', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).bj ?? 0) <= 10) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bjH7'] },
          ]);
        }
        if (((s as any).bj ?? 0) > 10  &&  ((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bjH8'] },
          ]);
        }
      } else {
        if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
          (s as any).i = Math.floor(Math.random() * 2) + 1;
          if (((s as any).i ?? 0) === 1) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
            ]);
          }
          if (((s as any).i ?? 0) === 2) {
            scene.actions([
              { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bjH8 ---
  scene.build();
}

function enterDinHuntersBj(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end & !! --- din_hunters_bj ---
  scene.actions([
    { label: 'Kneel', handler: (st: GameState) => {
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/blowjob/kotovbj\' + rand(0, 5) + \'.mp4');
    scene.text('You kneel down in front of him. He looks at you, waiting to see what you\'ll do. You don\'t make him wait long…');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    (s as any).i = Math.floor(Math.random() * 4) + 1;
    if (((s as any).bj ?? 0) > 10) {
      scene.actions([
        { label: 'Suck on the head', goto: ['hunterLoveSex', 'din_hunters_bjH2'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 5  &&  ((s as any).bj ?? 0) <= 10) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bjH1'] },
      ]);
    }
    if (((s as any).bj ?? 0) > 2  &&  ((s as any).bj ?? 0) <= 5) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bjH3'] },
      ]);
    }
    if (((s as any).bj ?? 0) <= 2) {
      scene.actions([
        { label: 'Caress his head with your hand', goto: ['hunterLoveSex', 'din_hunters_bjH4'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexBellAnalH(s: GameState, scene: SceneBuilder): void {
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/facedown/kotovsexanal20.mp4');
  scene.text('After making you lie flat on your belly, he begins to caress your ass. ');
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 2) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) === 1) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) === 2) {
    scene.text('Have you had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 1  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).h ?? 0) === 1  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum5'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 1) {
    scene.actions([
      { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 3) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_bell_analH ---
  scene.build();
}

function enterDinHuntersSexCowAnalH(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/cowgirl/kotovsexanal3\' + rand(0, 4) + \'.mp4');
  scene.text('He lies back and pulls you on top of him, his rock-hard cock rubbing against you as he does. ');
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 2) + 1;
  if (((s as any).h ?? 0) === 1) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and your realize that he is already ...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and your realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) === 2) {
    scene.text('Have you had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 1  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).h ?? 0) === 1  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum4'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 1) {
    scene.actions([
      { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow_analH ---
  scene.build();
}

function enterDinHuntersSexDogAnalH(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/doggy/kotovsexanal1\' + rand(0, 1) + \'.mp4');
  scene.text('He puts you on all fours and begins to caress your ass. ');
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 2) + 1;
  if (((s as any).h ?? 0) === 1) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) === 2) {
    scene.text('Have you had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 1  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).h ?? 0) === 1  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum3'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 1) {
    scene.actions([
      { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_analH'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_dog_analH ---
  scene.build();
}

function enterDinHuntersSexMisionaryAnalH(s: GameState, scene: SceneBuilder): void {
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/mis/kotovsexanal\' + rand(0, 1) + \'.mp4');
  scene.text('He gently lays you down on your back and turns his attention to your ass. ');
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 2) + 1;
  if (((s as any).h ?? 0) === 1) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) === 2) {
    scene.text('Have you had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 1  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).h ?? 0) === 1  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum2'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow_analH'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog_analH'] },
    ]);
  }
  if (((s as any).h ?? 0) === 2  &&  ((s as any).j ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell_analH'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_misionary_analH ---
  scene.build();
}

function enterDinHuntersSexCumface7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cumf70.mp4');
  scene.text('You feel his member begin to throb in your mouth as it unleashes a torrent of hot, tart spunk down your throat.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    // TODO-QSP: dynamic text: -Sorry <<$pcs_nickname>>, I couldn't hold back any longer.
    scene.text(`-Sorry ${((s as any).pcs_nickname ?? 0)}, I couldn't hold back any longer.`);
  }
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: All <<$pcs_nickname>> hare. I can't.
    scene.text(`All ${((s as any).pcs_nickname ?? 0)} hare. I can't.`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: All <<$pcs_nickname>>. I can't.
    scene.text(`All ${((s as any).pcs_nickname ?? 0)}. I can't.`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: All <<$pcs_nickname>>, enough. I can't.
    scene.text(`All ${((s as any).pcs_nickname ?? 0)}, enough. I can't.`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!".
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!".`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cumface7 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCumface6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cumf60.mp4');
  scene.text('You feel his cock start to throb in your mouth as it unleashes a torrent of spunk. Your mouth can\'t possibly accommodate his massive load and your quickly gulp it down as fast as you can.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-Insatiable slut, here\'s what you\'ve been missing all day.');
  }
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cumface6 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCumface5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cumf50.mp4');
  scene.text('His powerful jet of cum hits you on the face chin. It slowly drips onto your tits, leaving them nicely glazed with his fresh load.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -<<$pcs_nickname>>, just dig your kueng Boobs.
    scene.text(`-${((s as any).pcs_nickname ?? 0)}, just dig your kueng Boobs.`);
  }
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cumface5 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCumface4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cumf40.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> cum is on your chest. Warm droplets flow down to your stomach. You ...
  scene.text(`${((s as any).boydesc ?? 0)} cum is on your chest. Warm droplets flow down to your stomach. You smear the sticky cum all over your body, relishing the feeling.`);
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -<<$pcs_nickname>>, it's supposed to help your tits grow. Do you want to be my B...
    scene.text(`-${((s as any).pcs_nickname ?? 0)}, it's supposed to help your tits grow. Do you want to be my Busty beauty?`);
  }
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cumface4 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCumface3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  (s as any).hja = ((s as any).hja ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cumf30.mp4');
  // TODO-QSP: dynamic text: You feel his hard dick begin to throb in your hands and soon <<$boydesc>> cum gu...
  scene.text(`You feel his hard dick begin to throb in your hands and soon ${((s as any).boydesc ?? 0)} cum gushes out covering your hands in a fresh coat of warm spunk.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    scene.text('-Baby, you have some Golden hands! Will you lend them to me sometime?');
  }
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cumface3 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCumface2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cumf20.mp4');
  scene.text('You feel his member start to throb in your mouth and taste the tartness of his cum as his load begins to flow onto your tongue.');
  // TODO-QSP: end & !! --- din_hunters_sex_cumface2 ---
  scene.actions([
    { label: 'Swallow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_\' + rand(13, 14) + \'.mp4');
    scene.text('With great pleasure you swallow every last drop.');
    if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: -Fuck <<$pcs_nickname>>, you're a real cum guzzler, don't forget to mouth wash, ...
      scene.text(`-Fuck ${((s as any).pcs_nickname ?? 0)}, you're a real cum guzzler, don't forget to mouth wash, I still want to kiss you sometime.`);
    }
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Spit it out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_16.mp4');
    scene.text('You don\'t like the taste and you quickly spit out his disgusting load.');
    if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: -Does that not taste good <<$pcs_nickname>>? I thought all women loved the taste...
      scene.text(`-Does that not taste good ${((s as any).pcs_nickname ?? 0)}? I thought all women loved the taste of a fresh load. It's a pity you don't. `);
    }
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCumface1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cumf10.mp4');
  scene.text('The jets of hot sperm hit you in the face and slowly flow down onto your throat and tits.');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    // TODO-QSP: dynamic text: -Ohh, <<$pcs_nickname>>, god that felt good!
    scene.text(`-Ohh, ${((s as any).pcs_nickname ?? 0)}, god that felt good!`);
  }
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cumface1 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCum11(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  if (((s as any).protect ?? 0) === 1) {
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum61.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and realizes that he has cum in the condom. Feeling complete...
    scene.text(`${((s as any).boydesc ?? 0)} groans and realizes that he has cum in the condom. Feeling completely relaxed, he throws the condom on the ground and contentedly lies back on the bed.`);
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum111.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and you feel a jet of sperm pour into you.
    scene.text(`${((s as any).boydesc ?? 0)} groans and you feel a jet of sperm pour into you.`);
    qspCall(s, 'cuminsidereact', '');
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum11 ---
  scene.build();
}

function enterDinHuntersSexCum10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cum110.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls out at the last second and groans as you feel hot streams of ...
  scene.text(`${((s as any).boydesc ?? 0)} pulls out at the last second and groans as you feel hot streams of cum shoot onto your belly and tits, covering you in spunk. Your man lies back on the bed completely relaxed and contented.`);
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum10 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCum9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'stat', '');
  if (((s as any).protect ?? 0) === 1) {
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum91.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and realizes that he has cum in the condom. Feeling complete...
    scene.text(`${((s as any).boydesc ?? 0)} groans and realizes that he has cum in the condom. Feeling completely relaxed, he throws the condom on the ground and contentedly lies back on the bed.`);
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/mouth/cum19.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and you feel a jet of sperm pour into you.
    scene.text(`${((s as any).boydesc ?? 0)} groans and you feel a jet of sperm pour into you.`);
    qspCall(s, 'cuminsidereact', '');
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum9 ---
  scene.build();
}

function enterDinHuntersSexCum81(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'stat', '');
  if (((s as any).protect ?? 0) === 1) {
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum82.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and realizes that he has cum in the condom. Feeling complete...
    scene.text(`${((s as any).boydesc ?? 0)} groans and realizes that he has cum in the condom. Feeling completely relaxed, he throws the condom on the ground and contentedly lies back on the bed.`);
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum81.mp4');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and you feel a jet of sperm pour into you.
    scene.text(`${((s as any).boydesc ?? 0)} groans and you feel a jet of sperm pour into you.`);
    qspCall(s, 'cuminsidereact', '');
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum81 ---
  scene.build();
}

function enterDinHuntersSexCum8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'stat', '');
  if (((s as any).protect ?? 0) === 1) {
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum81.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and realizes that he has cum in the condom. Feeling complete...
    scene.text(`${((s as any).boydesc ?? 0)} groans and realizes that he has cum in the condom. Feeling completely relaxed, he throws the condom on the ground and contentedly lies back on the bed.`);
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum8.mp4');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and you feel a jet of sperm pour into you.
    scene.text(`${((s as any).boydesc ?? 0)} groans and you feel a jet of sperm pour into you.`);
    qspCall(s, 'cuminsidereact', '');
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum8 ---
  scene.build();
}

function enterDinHuntersSexCum7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'stat', '');
  if (((s as any).protect ?? 0) === 1) {
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum71.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and realizes that he has cum in the condom. Feeling complete...
    scene.text(`${((s as any).boydesc ?? 0)} groans and realizes that he has cum in the condom. Feeling completely relaxed, he throws the condom on the ground and contentedly lies back on the bed.`);
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum7.mp4');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and you feel a jet of sperm pour into you.
    scene.text(`${((s as any).boydesc ?? 0)} groans and you feel a jet of sperm pour into you.`);
    qspCall(s, 'cuminsidereact', '');
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum7 ---
  scene.build();
}

function enterDinHuntersSexCum6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'stat', '');
  if (((s as any).protect ?? 0) === 1) {
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum61.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and realizes that he has cum in the condom. Feeling complete...
    scene.text(`${((s as any).boydesc ?? 0)} groans and realizes that he has cum in the condom. Feeling completely relaxed, he throws the condom on the ground and contentedly lies back on the bed.`);
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/cum/cum6.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> groans and you feel a jet of sperm pour into you.
    scene.text(`${((s as any).boydesc ?? 0)} groans and you feel a jet of sperm pour into you.`);
    qspCall(s, 'cuminsidereact', '');
    if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
      scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum6 ---
  scene.build();
}

function enterDinHuntersSexCum5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cum5.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls out his member, groans and you feel his hot streams of sperm ...
  scene.text(`${((s as any).boydesc ?? 0)} pulls out his member, groans and you feel his hot streams of sperm spray onto your ass and back. Your man lies back on the bed, completely contended and relaxed.`);
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum5 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCum41(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cum41.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls out his member and groans. You feel his hot streams of sperm ...
  scene.text(`${((s as any).boydesc ?? 0)} pulls out his member and groans. You feel his hot streams of sperm spray onto your stomach, and slowly ooze down your sides. Your man, completely relaxed and satisfied, lies back on the bed.`);
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum41 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCum4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cum4.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls out his member, groans and you feel his hot streams of sperm ...
  scene.text(`${((s as any).boydesc ?? 0)} pulls out his member, groans and you feel his hot streams of sperm spray onto your ass and back. Your man lies back on the bed, completely contended and relaxed.`);
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum4 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCum3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cum3.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls out his member and groans as you feel his warm drops of sperm...
  scene.text(`${((s as any).boydesc ?? 0)} pulls out his member and groans as you feel his warm drops of sperm drip on your ass and back.`);
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -Hell, <<$pcs_nickname>>, in this position you fuck like a perfect whore. He sla...
    scene.text(`-Hell, ${((s as any).pcs_nickname ?? 0)}, in this position you fuck like a perfect whore. He slaps you lightly on the ass.`);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -<<$pcs_nickname>>, in this position you are simply irresistible. He gently kiss...
    scene.text(`-${((s as any).pcs_nickname ?? 0)}, in this position you are simply irresistible. He gently kisses you on the cheek.`);
  }
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum3 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCum2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cum2.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls out his cock and groans as you feel his warm sperm drip onto ...
  scene.text(`${((s as any).boydesc ?? 0)} pulls out his cock and groans as you feel his warm sperm drip onto your stomach.`);
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -Shit, <<$pcs_nickname>> that was awesome, <<$boydesc>> looks completely satisfi...
    scene.text(`-Shit, ${((s as any).pcs_nickname ?? 0)} that was awesome, ${((s as any).boydesc ?? 0)} looks completely satisfied. He passionately kisses you.`);
  }
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum2 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexCum1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/cum1.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> moans and you feel your ass fill with warmth. -Oh yeah, baby, you'r...
  scene.text(`${((s as any).boydesc ?? 0)} moans and you feel your ass fill with warmth. -Oh yeah, baby, you're just super. ${((s as any).boydesc ?? 0)} kisses you on the forehead.`);
  if (((s as any).silavag ?? 0) === 0  &&  (!((s as any).dikos ?? 0))) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) === 1) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) === 2) {
    // TODO-QSP: dynamic text: Sorry <<$pcs_nickname>>. I couldn't help myself!
    scene.text(`Sorry ${((s as any).pcs_nickname ?? 0)}. I couldn't help myself!`);
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).silavag ?? 0) === 1  &&  ((s as any).dikos ?? 0) < 1  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: <<$boydesc>> answered - "Fuck you <<$pcs_nickname>> you're insatiable!"…
    scene.text(`${((s as any).boydesc ?? 0)} answered - "Fuck you ${((s as any).pcs_nickname ?? 0)} you're insatiable!"…`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).silavag ?? 0) === 2  &&  ((s as any).dikos ?? 0) < 2  &&  ((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: '<<$boydesc>>, you want more?', handler: (st: GameState) => {
    (s as any).dikos = ((s as any).dikos ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    scene.text('You ask him, what else do you want?');
    // TODO-QSP: dynamic text: - Well, <<$pcs_nickname>> you're an insatiable little minx aren't you, <<$boydes...
    scene.text(`- Well, ${((s as any).pcs_nickname ?? 0)} you're an insatiable little minx aren't you, ${((s as any).boydesc ?? 0)} smiles in response to your question.`);
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
        scene.actions([
          { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
        scene.actions([
          { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cum1 ---
  scene.actions([
    { label: 'Depart', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['bj_times'] = 0
    (st as any).dikos = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDinHuntersSexBellAnal(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/facedown/kotovsexanal20.mp4');
  scene.text('Fortunately you had time to prepare for anal. He pulls his cock out of your pussy and begins to slowly rub against your asshole. ');
  // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
  scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum5'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_bell_anal ---
  scene.build();
}

function enterDinHuntersSexCowAnal2(s: GameState, scene: SceneBuilder): void {
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/cowgirl/kotovsexanal34.mp4');
  scene.text('Fortunately you had time to prepare for anal. He pulls his cock out of your pussy and begins to slowly rub against your asshole. ');
  // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
  scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum4'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow_anal2 ---
  scene.build();
}

function enterDinHuntersSexCowAnal1(s: GameState, scene: SceneBuilder): void {
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/cowgirl/kotovsexanal3\' + rand(0, 1) + \'.mp4');
  scene.text('Fortunately you had time to prepare for anal. He pulls his cock out of your pussy and begins to slowly rub against your asshole. ');
  // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
  scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum4'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow_anal1 ---
  scene.build();
}

function enterDinHuntersSexCowAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/cowgirl/kotovsexanal3\' + rand(2, 3) + \'.mp4');
  scene.text('Fortunately you had time to prepare for anal. He pulls his cock out of your pussy and begins to slowly rub against your asshole. ');
  // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
  scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum4'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow_anal ---
  scene.build();
}

function enterDinHuntersSexDogAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/doggy/kotovsexanal1\' + rand(0, 1) + \'.mp4');
  scene.text('Fortunately you had time to prepare for anal. He pulls his cock out of your pussy and begins to slowly rub against your asshole. ');
  // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
  scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum3'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_dog_anal ---
  scene.build();
}

function enterDinHuntersSexMisionaryAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/mis/kotovsexanal\' + rand(0, 1) + \'.mp4');
  scene.text('Fortunately you had time to prepare for anal. He pulls his cock out of your pussy and begins to slowly rub against your asshole. ');
  // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and you realize that he is already o...
  scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and you realize that he is already on edge and ready…`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum1'] },
    ]);
  }
  if (((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum2'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_misionary_anal ---
  scene.build();
}

function enterDinHuntersSexAnalNo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).anal_no = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/anal/kotovsexanalno.mp4');
  // TODO-QSP: dynamic text: -Sorry <<$boydesc>>, but I'm not quite ready. Well, if you know what I mean.
  scene.text(`-Sorry ${((s as any).boydesc ?? 0)}, but I'm not quite ready. Well, if you know what I mean.`);
  scene.text('-I understand. Okay, next time, come with a clean ass.');
  // TODO-QSP: dynamic text: <<$boydesc>> asks you…
  scene.text(`${((s as any).boydesc ?? 0)} asks you…`);
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_anal_no ---
  scene.build();
}

function enterDinHuntersSex_69(s: GameState, scene: SceneBuilder): void {
  (s as any).bja = ((s as any).bja ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/69/kotovsex7\' + rand(0, 2) + \'.mp4');
  scene.text('You sit on your man\'s face and, grabbing his cock, begin to suck passionately.');
  // TODO-QSP: dynamic text: <<$boydesc>> skillfully licks your pussy, you begin moaning and panting as you c...
  scene.text(`${((s as any).boydesc ?? 0)} skillfully licks your pussy, you begin moaning and panting as you continue to suck.`);
  qspCall(s, 'arousal', 'cuni', 5, 'dom');
  qspCall(s, 'arousal', 'bj', (-5), 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    qspCall(s, 'mood', 'raise', 'small');
  } else {
    scene.text('Though his actions are stimulating, they quickly start to bore you.');
  }
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and your realize that he is already ...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and your realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_dog_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface7'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_69 ---
  scene.build();
}

function enterDinHuntersSexHandBonus(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/hug/kotovsex51.mp4');
  scene.text('Encircling the shaft of his cock with your soft hands, you feel how long and hard he is.');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move faster and your realize that he is already ...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move faster and your realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_dog_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum10'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum11'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_hand_bonus ---
  scene.build();
}

function enterDinHuntersSexHand(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/hug/kotovsex50.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> takes you in his strong hands and abruptly enters you.
  scene.text(`${((s as any).boydesc ?? 0)} takes you in his strong hands and abruptly enters you.`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Start <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand_bonus\'">move</a> guy to meet.');
  }
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_dog_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum10'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum11'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_hand ---
  scene.build();
}

function enterDinHuntersSexBellBonus1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/facedown/kotovsexbonus10.mp4');
  // TODO-QSP: dynamic text: Lying relaxed on your stomach, you lazily twist your ass, spreading your cheeks ...
  scene.text(`Lying relaxed on your stomach, you lazily twist your ass, spreading your cheeks open to show off your tight hole. ${((s as any).boydesc ?? 0)} freezes and enjoys the view.`);
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('Oh yeah, my kitty, I never get tired of looking at your tasty ass.');
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -Uhh, <<$pcs_nickname>>, don't stop…
    scene.text(`-Uhh, ${((s as any).pcs_nickname ?? 0)}, don't stop…`);
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    scene.text('-It\'s super cute…');
  }
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_bell_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum5'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum9'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_bell_bonus1 ---
  scene.build();
}

function enterDinHuntersSexBellBonus(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/facedown/kotovsexbonus20.mp4');
  // TODO-QSP: dynamic text: You passionately kiss <<$boydesc>> as he continues to RAM you from behind.
  scene.text(`You passionately kiss ${((s as any).boydesc ?? 0)} as he continues to RAM you from behind.`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'arousal', 'kiss', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_bell_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum5'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum9'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_bell_bonus ---
  scene.build();
}

function enterDinHuntersSexBell(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/facedown/kotovsex4\' + rand(0, 5) + \'.mp4');
  scene.text('You lay on your stomach as he moves around behind you.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  (s as any).g = Math.floor(Math.random() * 2) + 1;
  if (((s as any).g ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).sex ?? 0) > 10) {
    scene.text('Raise your head and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_bonus\'">make out</a> with him.');
  }
  if (((s as any).g ?? 0) === 2  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).sex ?? 0) > 20) {
    scene.text('Clench your <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell_bonus1\'">ass</a> while his cock is inside.');
  }
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_bell_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum5'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum9'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_bell ---
  scene.build();
}

function enterDinHuntersSexCowBonus3(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/hug/kotovsex61.mp4');
  scene.text('You kiss passionately, strongly embracing each other.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'arousal', 'kiss', (-5));
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_cow_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum4'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum8'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow_bonus3 ---
  scene.build();
}

function enterDinHuntersSexCowBonus2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/hug/kotovsex60.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> gets up and you tightly hug him. You clasp his neck, and move your ...
  scene.text(`${((s as any).boydesc ?? 0)} gets up and you tightly hug him. You clasp his neck, and move your waist.`);
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-Umm, what a hot bitch, let me get my hands on those tits of yours…');
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  scene.text('Cling to his lips and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_bonus3\'">kiss</a>.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'arousal', 'kiss', (-5));
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_cow_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum4'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum8'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow_bonus2 ---
  scene.build();
}

function enterDinHuntersSexCowBonus1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/cowgirl/kotovsexbonus\' + rand(17, 19) + \'.mp4');
  scene.text('You turn your back to him and continue to slide your wet pussy up and down his rock-hard member.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-Uhh, baby, your ass looks so fucking great…');
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    // TODO-QSP: dynamic text: -Lookin good <<$pcs_nickname>>…
    scene.text(`-Lookin good ${((s as any).pcs_nickname ?? 0)}…`);
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_cow_anal2'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum41'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum81'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow_bonus1 ---
  scene.build();
}

function enterDinHuntersSexCowBonus(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/cowgirl/kotovsexbonus\' + rand(14, 16) + \'.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> stops, leaving it up to you to do all the work. You began to move r...
  scene.text(`${((s as any).boydesc ?? 0)} stops, leaving it up to you to do all the work. You began to move rhythmically on his cock.`);
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).sex ?? 0) > 30) {
    scene.text('Turn your <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_bonus1\'">back</a> to him and continue to ride his dick.');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_cow_anal1'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum4'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum8'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow_bonus ---
  scene.build();
}

function enterDinHuntersSexCow(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/cowgirl/kotovsex2\' + rand(0, 1) + \'.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> takes you by the hand, helping you to sit on top of him.
  scene.text(`${((s as any).boydesc ?? 0)} takes you by the hand, helping you to sit on top of him.`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  (s as any).g = Math.floor(Math.random() * 2) + 1;
  if (((s as any).g ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).sex ?? 0) > 20) {
    scene.text('Give him a break and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_bonus\'">jump</a> onto his strong dick.');
  }
  if (((s as any).g ?? 0) === 2  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).sex ?? 0) > 10) {
    scene.text('Ask him to get up and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow_bonus2\'">hug</a> you.');
  }
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_cow_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum4'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum8'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_cow ---
  scene.build();
}

function enterDinHuntersSexDogBonus(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/sequence/kotovsexbonus\' + rand(11, 12) + \'.mp4');
  scene.text('Slowing him down, you start to move your dripping pussy to meet his hot member.');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$boydesc>> slows his movements "You're good just so good <<$pcs_nickname>>."
    scene.text(`${((s as any).boydesc ?? 0)} slows his movements "You're good just so good ${((s as any).pcs_nickname ?? 0)}."`);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$boydesc>> slows his movements "Excellent work, bootyful bitch."
      scene.text(`${((s as any).boydesc ?? 0)} slows his movements "Excellent work, bootyful bitch."`);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> slows his movements "Cool <<$pcs_nickname>>."
      scene.text(`${((s as any).boydesc ?? 0)} slows his movements "Cool ${((s as any).pcs_nickname ?? 0)}."`);
    }
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_dog_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum3'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum7'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_dog_bonus ---
  scene.build();
}

function enterDinHuntersSexDogBonus1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/doggy/kotovsexbonus\' + rand(7, 9) + \'.mp4');
  scene.text('Ignoring him, you lazily bury your face in the soft bed, opening your pussy up for the full length of his cock.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_dog_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum3'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum7'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_dog_bonus1 ---
  scene.build();
}

function enterDinHuntersSexDogBonus2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/sequence/kotovsexbonus21.mp4');
  // TODO-QSP: dynamic text: The two of you hold each other tightly, <<$boydesc>> supports you as he continue...
  scene.text(`The two of you hold each other tightly, ${((s as any).boydesc ?? 0)} supports you as he continues to violently batter away at your hole.`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_dog_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum3'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum7'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_dog_bonus2 ---
  scene.build();
}

function enterDinHuntersSexDog(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/doggy/kotovsex1\' + rand(0, 3) + \'.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> pulls you closer and you shake your sexy ass in front of him.
  scene.text(`${((s as any).boydesc ?? 0)} pulls you closer and you shake your sexy ass in front of him.`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  (s as any).g = Math.floor(Math.random() * 2) + 1;
  if (((s as any).g ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).sex ?? 0) > 20) {
    scene.text('Start moving your <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_bonus\'">booty</a> to meet him.');
  }
  if (((s as any).g ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).sex ?? 0) <= 20) {
    scene.text('Bury your <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_bonus1\'">face</a> in the bed, and continue to fuck in this position.');
  }
  if (((s as any).g ?? 0) === 2  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).sex ?? 0) > 20) {
    scene.text('Ask him to help you <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog_bonus2\'">get up</a>.');
  }
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_dog_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your back', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum3'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum7'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_dog ---
  scene.build();
}

function enterDinHuntersSexMisionaryBonus2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/miss/kotovsexbonus\' + rand(5, 6) + \'.mp4');
  // TODO-QSP: dynamic text: You kiss passionately, feeling his hot breath on your face. <<$boydesc>> continu...
  scene.text(`You kiss passionately, feeling his hot breath on your face. ${((s as any).boydesc ?? 0)} continues to fuck you while passionately kissing you.`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum2'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum6'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_misionary_bonus2 ---
  scene.build();
}

function enterDinHuntersSexMisionaryBonus1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'agil', 1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/miss/kotovsexbonus4.mp4');
  scene.text('Not to be outdone, you rather cleverly put your legs behind your head. You feel the movement of his cock plunging into you even better in this position.');
  scene.text('-"Oh, baby, wow. I love what you are doing."');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_sex_cum2'] }]);
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    (st as any).sexa = ((st as any).sexa ?? 0) + (1);
  } },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_sex_cum6'] }]);
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    (st as any).sexa = ((st as any).sexa ?? 0) + (1);
  } },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_misionary_bonus1 ---
  scene.build();
}

function enterDinHuntersSexMisionaryBonus(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/vag/miss/kotovsexbonus\' + rand(0, 3) + \'.mp4');
  scene.text('Not to be outdone, you lift up your legs, giving him an incredible view of your pussy and a bit more freedom for his cock.');
  // TODO-QSP: dynamic text: <<$boydesc>> continues to violently fuck you in this position.
  scene.text(`${((s as any).boydesc ?? 0)} continues to violently fuck you in this position.`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 4) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  if (((s as any).pcs_agil ?? 0) > 50  &&  ((s as any).strenbuf ?? 0) >= ((s as any).pcs_mass ?? 0)?.['body'] + ((s as any).pcs_mass ?? 0)?.['butt']) {
    scene.text('Throw legs <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_bonus1\'">head</a>.');
  }
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_anal'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 0  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 1) {
    scene.actions([
      { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).anal_no ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum2'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum6'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_misionary_bonus ---
  scene.build();
}

function enterDinHuntersSexKuniBonus(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).silavag ?? 0))) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
  }
  if (((s as any).silavag ?? 0) === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  }
  if (((s as any).silavag ?? 0) === 2) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
  }
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/facesit/kotovsexbonus\' + rand(23, 24) + \'.mp4');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -What are you doing? Oh shit, <<$pcs_nickname>>, not this! Why do I let you do t...
    scene.text(`-What are you doing? Oh shit, ${((s as any).pcs_nickname ?? 0)}, not this! Why do I let you do this to me…`);
  }
  scene.text('You climb up and begin rubbing your wet pussy on his face.');
  qspCall(s, 'arousal', 'cuni', 5, 'dom');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    scene.text('He doesn\'t seem to like it, but he dutifully laps at your pussy, making you quiver at the pleasant feeling of a tongue on your clit.');
  }
  qspCall(s, 'arousal', 'cuni', 5, 'dom');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('Apparently he enjoys it, and he diligently licks and sucks at your pussy and clit, causing you to quiver in ecstasy.');
  }
  qspCall(s, 'arousal', 'cuni', 5, 'dom');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    qspCall(s, 'mood', 'raise', 'small');
  } else {
    scene.text('Though his actions are stimulating, they quickly start to bore you.');
  }
  scene.text('You enjoy the sweet efforts of your boyfriend.');
  // TODO-QSP: dynamic text: -Alright <<$boydesc>>, come here and fuck me.
  scene.text(`-Alright ${((s as any).boydesc ?? 0)}, come here and fuck me.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    scene.text('-Yes baby, I\'m going to fuck you like crazy. Come over here, my dick is like stone.');
  }
  (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.actions([
      { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.actions([
        { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        scene.actions([
          { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          scene.actions([
            { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
          ]);
        } else {
          scene.actions([
            { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_sex_kuni_bonus ---
  scene.build();
}

function enterDinHuntersSexKuni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A9']} ${((s as any).npc_lastname ?? 0)?.['A9']}</b></center>`);
    scene.img('images/shared/sex/oface/kotovecho.mp4');
    if (((s as any).pcs_horny ?? 0) >= 80) {
      // TODO-QSP: dynamic text: <<$boydesc>> refuses to lick your pussy.
      scene.text(`${((s as any).boydesc ?? 0)} refuses to lick your pussy.`);
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        // TODO-QSP: dynamic text: -No <<$pcs_nickname>>, leave me alone. Real men don't lick pussy, now spread tho...
        scene.text(`-No ${((s as any).pcs_nickname ?? 0)}, leave me alone. Real men don't lick pussy, now spread those legs.`);
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        scene.text('Maybe another time, honey');
      }
      scene.actions([
        { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
      ]);
    } else {
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$boydesc>> happily agrees to lick you.
        scene.text(`${((s as any).boydesc ?? 0)} happily agrees to lick you.`);
        // TODO-QSP: dynamic text: -<<$pcs_nickname>>, I will deliver you unearthly pleasure.
        scene.text(`-${((s as any).pcs_nickname ?? 0)}, I will deliver you unearthly pleasure.`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$boydesc>> reluctantly agrees to lick you.
          scene.text(`${((s as any).boydesc ?? 0)} reluctantly agrees to lick you.`);
          // TODO-QSP: dynamic text: -Okay, <<$pcs_nickname>>, don't tell anyone or they'll lose all respect for me.
          scene.text(`-Okay, ${((s as any).pcs_nickname ?? 0)}, don't tell anyone or they'll lose all respect for me.`);
        } else {
          // TODO-QSP: dynamic text: <<$boydesc>> agrees to lick you.
          scene.text(`${((s as any).boydesc ?? 0)} agrees to lick you.`);
        }
      }
      scene.actions([
        { label: 'Spread your legs for him', handler: (st: GameState) => {
    ((s as any).hunterVars ?? {})['kuni'] = 1;
    if ((!((s as any).silavag ?? 0))) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    }
    if (((s as any).silavag ?? 0) === 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    }
    if (((s as any).silavag ?? 0) === 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    }
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/kuni/kotovsex3\' + rand(0, 3) + \'.mp4');
    // TODO-QSP: dynamic text: <<$boydesc>> lies down between your legs and begins to work his tongue up and do...
    scene.text(`${((s as any).boydesc ?? 0)} lies down between your legs and begins to work his tongue up and down your pussy.`);
    qspCall(s, 'arousal', 'cuni', 5, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 90) {
      qspCall(s, 'mood', 'raise', 'small');
    } else {
      scene.text('Though his actions are stimulating, they quickly start to bore you.');
    }
    if (((s as any).pcs_horny ?? 0) >= 75) {
      scene.text('Put him on his back and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_kuni_bonus\'">sit</a> on his face.');
    }
    (s as any).i = Math.floor(Math.random() * 5) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3) {
      scene.actions([
        { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4) {
      scene.actions([
        { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
      ]);
    }
    if (((s as any).i ?? 0) === 5) {
      scene.actions([
        { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
      ]);
    }
  } },
      ]);
    }
  } else {
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/kuni/kotovsex3\' + rand(0, 3) + \'.mp4');
    // TODO-QSP: dynamic text: <<$boydesc>> lies down between your legs and begins to work his tongue up and do...
    scene.text(`${((s as any).boydesc ?? 0)} lies down between your legs and begins to work his tongue up and down your pussy.`);
    qspCall(s, 'arousal', 'cuni', 5, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 90) {
      qspCall(s, 'mood', 'raise', 'small');
    } else {
      scene.text('Though his actions are stimulating, they quickly start to bore you.');
    }
    if (((s as any).pcs_horny ?? 0) >= 75) {
      scene.text('Put him on his back and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_kuni_bonus\'">sit</a> on his face.');
    }
    (s as any).i = Math.floor(Math.random() * 5) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3) {
      scene.actions([
        { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4) {
      scene.actions([
        { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
      ]);
    }
    if (((s as any).i ?? 0) === 5) {
      scene.actions([
        { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
      ]);
    }
  }
  // TODO-QSP: end & !! --- din_hunters_sex_kuni ---
  scene.build();
}

function enterDinHuntersSexMisionary(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/kuni/kotovsex3\' + rand(0, 3) + \'.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> puts you on your back and spreads your legs.
  scene.text(`${((s as any).boydesc ?? 0)} puts you on your back and spreads your legs.`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 9) + 1;
  (s as any).j = Math.floor(Math.random() * 3) + 1;
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  (s as any).g = Math.floor(Math.random() * 2) + 1;
  if (((s as any).g ?? 0) === 1  &&  ((s as any).h ?? 0) < 3  &&  ((s as any).sex ?? 0) > 30) {
    scene.text('You are enjoying his every move, and want to lift your legs <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_bonus\'">up</a>.');
  }
  if (((s as any).g ?? 0) === 2  &&  ((s as any).h ?? 0) < 3) {
    scene.text('You groan loudly under your boyfriend <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary_bonus2\'">kissing</a> him passionately.');
  }
  if (((s as any).hunterVars ?? 0)?.['kuni'] === 0  &&  ((s as any).h ?? 0) < 3) {
    scene.text('To ask a guy <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_kuni\'">lick</a> your pussy.');
  }
  if (((s as any).h ?? 0) < 3) {
    scene.text('Having had enough of this position he asks you…');
  }
  if (((s as any).h ?? 0) === 3) {
    // TODO-QSP: dynamic text: Suddenly <<$boydesc>> begins to move even faster and you realize that he is alre...
    scene.text(`Suddenly ${((s as any).boydesc ?? 0)} begins to move even faster and you realize that he is already on edge and ready…`);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0  &&  ((s as any).i ?? 0) === 8  ||  ((s as any).i ?? 0) === 1  ||  ((s as any).i ?? 0) === 2) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0  &&  ((s as any).i ?? 0) === 9  ||  ((s as any).i ?? 0) === 3  ||  ((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'Bend', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 5  ||  ((s as any).i ?? 0) === 6) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).i ?? 0) === 7) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1  &&  ((s as any).i ?? 0) === 8) {
    scene.actions([
      { label: 'Spread your legs for him', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1  &&  ((s as any).i ?? 0) === 9) {
    scene.actions([
      { label: 'Mutually caress each other', goto: ['hunterLoveSex', 'din_hunters_sex_69'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_misionary_anal'] },
    ]);
  }
  if (((s as any).h ?? 0) < 3  &&  ((s as any).j ?? 0) === 3  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Substitute the ass', goto: ['hunterLoveSex', 'din_hunters_sex_anal_no'] },
    ]);
  }
  (s as any).k = Math.floor(Math.random() * 2) + 1;
  if (((s as any).k ?? 0) === 1  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum2'] },
    ]);
  }
  if (((s as any).k ?? 0) === 2  &&  ((s as any).h ?? 0) === 3) {
    scene.actions([
      { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cum6'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sex_misionary ---
  scene.build();
}

function enterDinHuntersBj14(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj14\' + rand(0, 2) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: <<$boydesc>> puts his dick between your <<tits>>size tits and you onto his cockh...
  scene.text(`${((s as any).boydesc ?? 0)} puts his dick between your ${((s as any).tits ?? 0)}size tits and you onto his cockhead to help lube it up. You squeeze your tits together and he starts to move, fucking your gorgeous melons. You have an unusual but pleasant sensation from these actions.`);
  qspCall(s, 'arousal', 'breasts', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 4) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck on the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Hold your tongue against his cock', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        scene.actions([
          { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface5'] },
        ]);
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj14 ---
  scene.build();
}

function enterDinHuntersBj13(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj13\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('Firmly grasping his member, you spend time licking and sucking his pulsing head and sensitive glans. He moans from your skilled ministrations.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 4) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 4  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        scene.actions([
          { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface4'] },
        ]);
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj13 ---
  scene.build();
}

function enterDinHuntersBjBonus12(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/cum/kotovbjbonus12.mp4');
  scene.text('You try to swallow his cock even deeper, but gag in the process. You barely avoid throwing up all over him.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text:  -Fu fucking<<$pcs_nickname>>, if you are not able to swallow normally, practice...
    scene.text(` -Fu fucking${((s as any).pcs_nickname ?? 0)}, if you are not able to swallow normally, practice at home on a banana and not on my cock!`);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text:  -Do not worry <<$pcs_nickname>>, deep throating is hard to learn, but gets easi...
    scene.text(` -Do not worry ${((s as any).pcs_nickname ?? 0)}, deep throating is hard to learn, but gets easier the more you do it.`);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text:  -Do not worry <<$pcs_nickname>>, maybe next time it will work.
    scene.text(` -Do not worry ${((s as any).pcs_nickname ?? 0)}, maybe next time it will work.`);
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus12 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
  ]);
  scene.build();
}

function enterDinHuntersBj12(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj12\' + rand(0, 2) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('You grab the base of his penis and begin to suck greedily. His large cock does not fit completely in your little mouth and you can only accommodate half of his total length. Your hand glides up and down his thick shaft as you do your best to swallow more of his meaty cock.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('Try <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus12\'">to swallow</a> member of the deeper.');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj12 ---
  scene.build();
}

function enterDinHuntersBjBonus11(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus11.mp4');
  // TODO-QSP: dynamic text: You take his cock into your mouth and <<$boydesc>> starts roughly fucking your f...
  scene.text(`You take his cock into your mouth and ${((s as any).boydesc ?? 0)} starts roughly fucking your face, doing his best to shove as much of his cock down your throat as he can.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-Honey, this is amazing, your face looks so sexy.');
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      scene.text('-Oh yeah, baby, just let me do this for a little while, your pretty face looks so sexy.');
    } else {
      // TODO-QSP: dynamic text: -Oh yeah, <<$pcs_nickname>>, come on, that feels so good.
      scene.text(`-Oh yeah, ${((s as any).pcs_nickname ?? 0)}, come on, that feels so good.`);
    }
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus11 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
  ]);
  scene.build();
}

function enterDinHuntersBj11(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj11\' + rand(0, 4) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('You grab the base of his penis and begin to suck greedily. His large cock does not fit completely in your little mouth and you can only accommodate half of his total length. Your hand glides up and down his thick shaft as you do your best to swallow more of his meaty cock.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).bj ?? 0) > 20) {
    scene.text('Take member <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus11\'">cheek</a> and tightly secured with the head.');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj11 ---
  scene.build();
}

function enterDinHuntersBj10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj1\' + rand(0, 3) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: You obey him and fully relax your throat. <<$boydesc>> begins to move his cock, ...
  scene.text(`You obey him and fully relax your throat. ${((s as any).boydesc ?? 0)} begins to move his cock, plunging deeper into your asophagus. You choke and barely keep yourself from vomiting all over his meaty schlong. You can feel the head of his cock resting at the back of your mouth and you do your best to swallow it down, squeezing it with the muscles in your throat.`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        scene.actions([
          { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface6'] },
        ]);
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj10 ---
  scene.build();
}

function enterDinHuntersBj9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj9\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('You start to rhythmically bob your head up and down his cock, swallowing his member of deeper and deeper. You can feel the head of his cock resting at the back of your mouth and you do your best to swallow it down, squeezing it with the muscles in your throat.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        scene.actions([
          { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface6'] },
        ]);
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj9 ---
  scene.build();
}

function enterDinHuntersBjBonus8(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  }
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus8.mp4');
  // TODO-QSP: dynamic text: While <<$boydesc>> continues to enjoy himself, you lick the pucker of his asshol...
  scene.text(`While ${((s as any).boydesc ?? 0)} continues to enjoy himself, you lick the pucker of his asshole, forcing your tongue inside. He jumps and looks down at you startled.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: - Mmmm <<$pcs_nickname>>, don't stop," <<$boydesc>> says.
    scene.text(`- Mmmm ${((s as any).pcs_nickname ?? 0)}, don't stop," ${((s as any).boydesc ?? 0)} says.`);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: -Who told you to fuck my ass with your tongue? No, <<$pcs_nickname>>, I don't li...
      scene.text(`-Who told you to fuck my ass with your tongue? No, ${((s as any).pcs_nickname ?? 0)}, I don't like it. Cut that shit out!`);
    } else {
      // TODO-QSP: dynamic text: - What the hell <<$pcs_nickname>>, stop!
      scene.text(`- What the hell ${((s as any).pcs_nickname ?? 0)}, stop!`);
    }
  }
  qspCall(s, 'arousal', 'cuni_give', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus8 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
  ]);
  scene.build();
}

function enterDinHuntersBj8(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj8\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('You lick down even lower, to the sensitive space below his ballsack. Using your tongue you tease and lick his tightly puckered asshole, bathing it in your saliva.');
  // TODO-QSP: dynamic text: -Oh shit, <<$pcs_nickname>>, what are you doing? Keep going, but you better swea...
  scene.text(`-Oh shit, ${((s as any).pcs_nickname ?? 0)}, what are you doing? Keep going, but you better swear not to tell anyone. Fuck that's good!`);
  qspCall(s, 'arousal', 'cuni_give', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('Try to go even further and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus8\'">shove</a> your tongue in his hole.');
  }
  qspCall(s, 'arousal', 'cuni_give', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj8 ---
  scene.build();
}

function enterDinHuntersBjBonus7(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus7.mp4');
  // TODO-QSP: dynamic text: You continue to play with his balls hugging them <<$pc_desc['lips']>> lips. You ...
  scene.text(`You continue to play with his balls hugging them ${((s as any).pc_desc ?? 0)?.['lips']} lips. You put them in your mouth and use your tongue to tease them as you suck each one separately.`);
  scene.text('-Fuck, baby, don\'t stop!');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus7 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
  ]);
  scene.build();
}

function enterDinHuntersBj7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj7\' + rand(0, 4) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('Lick down his shaft to his hanging ballsack. You spend some time gently licking each one of his testes, covering them with your saliva.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).bj ?? 0) > 15) {
    scene.text('Suck and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus7\'">take</a> both balls in your mouth.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj7 ---
  scene.build();
}

function enterDinHuntersBjBonus6(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus6.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> slaps his cock against your tongue.
  scene.text(`${((s as any).boydesc ?? 0)} slaps his cock against your tongue.`);
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-Bad girl, now daddy will punish you.');
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    scene.text('- You\'re a dirty little girl, he says with a smile.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus6 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
  ]);
  scene.build();
}

function enterDinHuntersBj6(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  (s as any).hja = ((s as any).hja ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj6\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('Capturing hold of his thick meat with your hands, you start to jerk it confidently, watching his reaction.');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    // TODO-QSP: dynamic text: -Well, <<$pcs_nickname>>, I can jerk my dick myself, but I bet you have some bet...
    scene.text(`-Well, ${((s as any).pcs_nickname ?? 0)}, I can jerk my dick myself, but I bet you have some better tools to use on what you're holding there.`);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -Come on, <<$pcs_nickname>>, show me what you can do - <<$boydesc>> says with a ...
    scene.text(`-Come on, ${((s as any).pcs_nickname ?? 0)}, show me what you can do - ${((s as any).boydesc ?? 0)} says with a smile.`);
  }
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).bj ?? 0) > 10) {
    scene.text('You stick out your tongue and he <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus6\'">spanks</a> his cock on it.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    (s as any).j = Math.floor(Math.random() * 4) + 1;
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 1  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 1) {
      scene.actions([
        { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 2) {
      scene.actions([
        { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 3) {
      scene.actions([
        { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).j ?? 0) === 4) {
      scene.actions([
        { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        scene.actions([
          { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface3'] },
        ]);
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj6 ---
  scene.build();
}

function enterDinHuntersBjBonus5(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus5.mp4');
  scene.text('You spit on his dick, and using your hands smere your saliva all over his head and shaft.');
  // TODO-QSP: dynamic text:  -Uhh, <<$pcs_nickname>>, that's the kind of lubrication you don't have to spend...
  scene.text(` -Uhh, ${((s as any).pcs_nickname ?? 0)}, that's the kind of lubrication you don't have to spend money on.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus5 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
  ]);
  scene.build();
}

function enterDinHuntersBj5(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj5\' + rand(0, 3) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('You glide your tongue along the entire length of his penis, lubricating it with your sticky saliva.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).bj ?? 0) > 20) {
    scene.text('<a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus5\'">Spit</a> on his cock and rub it in for lubrication.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj5 ---
  scene.build();
}

function enterDinHuntersBjBonus4(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus4.mp4');
  scene.text('You grasp the base of the penis and, carrying out his request, slap his glistening cock head against your cheeks.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-Oh yeah, you submissive little slut. You\'ve really got me going.');
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('-Oh yeah, you\'ve really got me hard, keep going honey.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus4 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj4'] },
  ]);
  scene.build();
}

function enterDinHuntersBj4(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj4\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  scene.text('Before wrapping your lips around his cock, you lightly grabbed him by the base of his shaft and pull back his foreskin, exposing his gleaming cockhead.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    // TODO-QSP: dynamic text: <<$boydesc>> asks you to <a href="exec:gt 'hunterLoveSex', 'din_hunters_bj_bonus...
    scene.text(`${((s as any).boydesc ?? 0)} asks you to <a href="exec:gt 'hunterLoveSex', 'din_hunters_bj_bonus4'">slap</a> his member against your cheek.`);
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj4 ---
  scene.build();
}

function enterDinHuntersBjBonus3(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus3.mp4');
  scene.text('Looking into the eyes of your boyfriend, you tease your tongue over one of the most erogenous zones of his member.');
  // TODO-QSP: dynamic text: -Mmmm <<$pcs_nickname>>, how do you know how to make me even harder?
  scene.text(`-Mmmm ${((s as any).pcs_nickname ?? 0)}, how do you know how to make me even harder?`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus3 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
  ]);
  scene.build();
}

function enterDinHuntersBj3(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj3\' + rand(0, 1) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: You sweetly kiss at his shaft and cock head, gently rubbing his member against y...
  scene.text(`You sweetly kiss at his shaft and cock head, gently rubbing his member against your ${((s as any).pc_desc ?? 0)?.['lips']} lips`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('You slightly <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus3\'">tease</a> his member');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj3 ---
  scene.build();
}

function enterDinHuntersBjBonus2(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus2.mp4');
  scene.text('He shivers slightly as you bite the head of his dick with your pearly white teeth.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: -Hey, fuck, <<$pcs_nickname>>, are you mistaking my dick for a fucking banana? S...
    scene.text(`-Hey, fuck, ${((s as any).pcs_nickname ?? 0)}, are you mistaking my dick for a fucking banana? Suck it, don't bite it!`);
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    // TODO-QSP: dynamic text: -Careful <<$pcs_nickname>>, don't joke like that!
    scene.text(`-Careful ${((s as any).pcs_nickname ?? 0)}, don't joke like that!`);
  }
  scene.text('You smiled and look at him, deciding to…');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus2 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
  ]);
  scene.build();
}

function enterDinHuntersBj2(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
  }
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj2\' + rand(0, 6) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: You <<$textsexkotov>>, and tightly clench your <<$pc_desc['lips']>> lips 
  scene.text(`You ${((s as any).textsexkotov ?? 0)}, and tightly clench your ${((s as any).pc_desc ?? 0)?.['lips']} lips `);
  scene.text('The tenderness of your lips is driving him crazy');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('You lightly <a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus2\'">bite</a> the red head of his penis');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- din_hunters_bj2 ---
  scene.build();
}

function enterDinHuntersBjBonus1(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) - (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbjbonus1.mp4');
  scene.text('You run your tongue along the tip of his penis, flicking at his urethra.');
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$boydesc>> is already on edge: -<<$pcs_nickname>>, what are you doing, stop it...
    scene.text(`${((s as any).boydesc ?? 0)} is already on edge: -${((s as any).pcs_nickname ?? 0)}, what are you doing, stop it, I'm fucking going to cum from this.`);
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
    // TODO-QSP: dynamic text: <<$boydesc>> is already on edge: -<<$pcs_nickname>>, what are you doing, stop it...
    scene.text(`${((s as any).boydesc ?? 0)} is already on edge: -${((s as any).pcs_nickname ?? 0)}, what are you doing, stop it or i'm going to blow my load!`);
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_bj_bonus1 ---
  scene.actions([
    { label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
  ]);
  scene.build();
}

function enterDinHuntersBj1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).hunterVars ?? {})['bj_times'] = (((s as any).hunterVars ?? {})['bj_times'] ?? 0) + (1);
  ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
  }
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj1\' + rand(0, 3) + \'.mp4');
  (s as any).h = Math.floor(Math.random() * 3) + 1;
  // TODO-QSP: dynamic text: You <<$textsexkotov>>
  scene.text(`You ${((s as any).textsexkotov ?? 0)}`);
  scene.text('You run your tongue along the tip of his penis, flicking at his urethra.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    scene.text('<a href="exec:gt \'hunterLoveSex\', \'din_hunters_bj_bonus1\'">Shove</a> the tip of the tongue in the hole.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Having had enough of your cock sucking, he asks you…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 1) {
    (s as any).k = Math.floor(Math.random() * 5) + 1;
    if (((s as any).k ?? 0) === 1) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_misionary\'">lie on your back</a>.');
    }
    if (((s as any).k ?? 0) === 2) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_cow\'">climb on top of me</a>.');
    }
    if (((s as any).k ?? 0) === 3) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_dog\'">bend over</a>.');
    }
    if (((s as any).k ?? 0) === 4) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_bell\'">lie on your stomach</a>.');
    }
    if (((s as any).k ?? 0) === 5) {
      scene.text('You can stop the Blowjob and <a href="exec:gt \'hunterLoveSex\', \'din_hunters_sex_hand\'">Take him in your hands</a>.');
    }
  }
  if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] === 3) {
    scene.text('Suddenly his cock is even more engorged with blood and begins to noticeably throb, and you realize that he is already on the edge and ready to cum…');
  }
  if (((s as any).hunterVars ?? 0)?.['bj_times'] < 3) {
    (s as any).i = Math.floor(Math.random() * 3) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.actions([
        { label: 'Jerk off', goto: ['hunterLoveSex', 'din_hunters_bj6'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick balls', goto: ['hunterLoveSex', 'din_hunters_bj7'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2) {
      scene.actions([
        { label: 'Lick head', goto: ['hunterLoveSex', 'din_hunters_bj8'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Swallow deeply', goto: ['hunterLoveSex', 'din_hunters_bj9'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) > 15) {
      scene.actions([
        { label: 'Relax your throat', goto: ['hunterLoveSex', 'din_hunters_bj10'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck hard', goto: ['hunterLoveSex', 'din_hunters_bj11'] },
      ]);
    }
    if (((s as any).i ?? 0) === 3  &&  ((s as any).pcs_throat ?? 0) <= 15) {
      scene.actions([
        { label: 'Suck without hands', goto: ['hunterLoveSex', 'din_hunters_bj12'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) < 3) {
      scene.actions([
        { label: 'Rub his cock on your titties', goto: ['hunterLoveSex', 'din_hunters_bj13'] },
      ]);
    }
    if (((s as any).i ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 3) {
      scene.actions([
        { label: 'Squeeze between your Tits', goto: ['hunterLoveSex', 'din_hunters_bj14'] },
      ]);
    }
  } else {
    if (((s as any).h ?? 0) < 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
      (s as any).i = Math.floor(Math.random() * 5) + 1;
      if (((s as any).i ?? 0) === 1) {
        scene.actions([
          { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
        ]);
      }
      if (((s as any).i ?? 0) === 2) {
        scene.actions([
          { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
        ]);
      }
      if (((s as any).i ?? 0) === 3) {
        scene.actions([
          { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
        ]);
      }
      if (((s as any).i ?? 0) === 4) {
        scene.actions([
          { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
        ]);
      }
      if (((s as any).i ?? 0) === 5) {
        scene.actions([
          { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
        ]);
      }
    } else {
      if (((s as any).h ?? 0) === 3  &&  ((s as any).hunterVars ?? 0)?.['bj_times'] >= 3) {
        (s as any).i = Math.floor(Math.random() * 2) + 1;
        if (((s as any).i ?? 0) === 1) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface1'] },
          ]);
        }
        if (((s as any).i ?? 0) === 2) {
          scene.actions([
            { label: 'Cum', goto: ['hunterLoveSex', 'din_hunters_sex_cumface2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end & !! --- 'din_hunters_bj1' ---
  scene.build();
}

function enterDinHuntersBj200(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).bja = ((s as any).bja ?? 0) + (1);
  ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/blowjob/kotovbj\' + rand(0, 5) + \'.mp4');
  scene.text('You kneel in front of your boyfriend. He looks at you, waiting to see what you\'ll do…');
  if (((s as any).bj ?? 0) >= 10  &&  ((s as any).bj ?? 0) < 15) {
    scene.actions([
      { label: 'Lick the head', goto: ['hunterLoveSex', 'din_hunters_bj1'] },
    ]);
  }
  if (((s as any).bj ?? 0) >= 20) {
    scene.actions([
      { label: 'Suck the head', goto: ['hunterLoveSex', 'din_hunters_bj2'] },
    ]);
  }
  if (((s as any).bj ?? 0) >= 5  &&  ((s as any).bj ?? 0) < 10) {
    scene.actions([
      { label: 'Kiss the head', goto: ['hunterLoveSex', 'din_hunters_bj3'] },
    ]);
  }
  if (((s as any).bj ?? 0) < 5) {
    scene.actions([
      { label: 'Jack his cock', goto: ['hunterLoveSex', 'din_hunters_bj4'] },
    ]);
  }
  if (((s as any).bj ?? 0) >= 15  &&  ((s as any).bj ?? 0) < 20) {
    scene.actions([
      { label: 'Lick the shaft', goto: ['hunterLoveSex', 'din_hunters_bj5'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_bj200 ---
  scene.build();
}

function enterDinHuntersSub(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/dom/kotovsub.jpg');
  // TODO-QSP: dynamic text: Like the obedient girl you are, you fully obey his will. Would you like somethin...
  scene.text(`Like the obedient girl you are, you fully obey his will. Would you like something more, ${((s as any).boydesc ?? 0)} asks you…`);
  (s as any).i = Math.floor(Math.random() * 8) + 1;
  if (((s as any).i ?? 0) === 1  ||  ((s as any).i ?? 0) === 7) {
    scene.actions([
      { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
    ]);
  }
  if (((s as any).i ?? 0) === 2  ||  ((s as any).i ?? 0) === 8) {
    scene.actions([
      { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
    ]);
  }
  if (((s as any).i ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
    ]);
  }
  if (((s as any).i ?? 0) === 4) {
    scene.actions([
      { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
    ]);
  }
  if (((s as any).i ?? 0) === 5) {
    scene.actions([
      { label: 'Lie on your stomach', goto: ['hunterLoveSex', 'din_hunters_sex_bell'] },
    ]);
  }
  if (((s as any).i ?? 0) === 6) {
    scene.actions([
      { label: 'Take him in your hands', goto: ['hunterLoveSex', 'din_hunters_sex_hand'] },
    ]);
  }
  // TODO-QSP: end & !! --- din_hunters_sub ---
  scene.build();
}

function enterDinHuntersFirstSex(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  ((s as any).hunterVars ?? {})['VagSex'] = (((s as any).hunterVars ?? {})['VagSex'] ?? 0) + (1);
  scene.text('<center><h4>Hut</h4></center>');
  scene.img('images/shared/sex/oface/kotovfirst.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> puts you on your back and spreads your legs, opening your virgin wo...
  scene.text(`${((s as any).boydesc ?? 0)} puts you on your back and spreads your legs, opening your virgin womb to his gaze and his quivering member.`);
  qspCall(s, 'arousal', 'vaginal', 30, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end & !! --- din_hunters_first_sex ---
  scene.actions([
    { label: 'To recover', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/oface/kotovfirst1.jpg');
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: -<<$pcs_nickname>>, all is well, how are you feeling? 
      scene.text(`-${((s as any).pcs_nickname ?? 0)}, all is well, how are you feeling? `);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        // TODO-QSP: dynamic text: Oh, <<$pcs_nickname>>, you're a fucking woman now, congratulations! Now quit bei...
        scene.text(`Oh, ${((s as any).pcs_nickname ?? 0)}, you're a fucking woman now, congratulations! Now quit being a little crybaby. How do you feel?`);
      } else {
        // TODO-QSP: dynamic text: Well <<$pcs_nickname>>, congratulations, you're not a little girl any more. How ...
        scene.text(`Well ${((s as any).pcs_nickname ?? 0)}, congratulations, you're not a little girl any more. How do you feel?`);
      }
    }
    scene.text('-It hurts damn, never going to do it.');
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: - Calm down, sweetheart, next time will be much better and you'll still like it,...
      scene.text(`- Calm down, sweetheart, next time will be much better and you'll still like it, I promise - ${((s as any).boydesc ?? 0)} says with a smile. He gently kisses and comforts you.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        scene.text('-Ha ha, we\'ll see if we can\'t fix that.');
      } else {
        scene.text('- Come on, all girls do it eventually. It\'s nothing to be upset about.');
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIgor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0  &&  ((s as any).hunterVars ?? 0)?.['IgorQW'] <= 50) {
    ((s as any).npc_gentle ?? {})[String((s as any).boy ?? 0)] = 1;
    (s as any).boyonceA = 1;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    qspCall(s, 'boyStat', 'A173');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/characters/shared/headshots_main/big173.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> hugs you and starts showering you with kisses. "<<$pcs_nickname>>, ...
    scene.text(`${((s as any).boydesc ?? 0)} hugs you and starts showering you with kisses. "${((s as any).pcs_nickname ?? 0)}, take off your clothes."`);
    qspCall(s, 'arousal', 'kiss', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  (!((s as any).sex ?? 0))) {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        scene.actions([
          { label: 'I\'m still a virgin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/pc/reactions/embarrassed.mp4');
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] <= 45) {
      // TODO-QSP: dynamic text: You, blushing, whisper in his ear that you're still a virgin. <<$boydesc>> distr...
      scene.text(`You, blushing, whisper in his ear that you're still a virgin. ${((s as any).boydesc ?? 0)} distractedly scratches his chin "Wow, still a virgin and you've graduated from school? Well, maybe we can try it in your mouth or ass?"`);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] <= 45  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text:  - Oh, anal won't work <<$boydesc>>, I'm not quite ready… errr, or clean if you ...
      scene.text(` - Oh, anal won't work ${((s as any).boydesc ?? 0)}, I'm not quite ready… errr, or clean if you know what I mean…`);
      // TODO-QSP: dynamic text:  - I understand, <<$boydesc>> says. - Okay, next time make sure you clean your a...
      scene.text(` - I understand, ${((s as any).boydesc ?? 0)} says. - Okay, next time make sure you clean your ass first.`);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] > 45) {
      // TODO-QSP: dynamic text: -<<$pcs_nickname>>, I want to be the first man inside you. It will only hurt you...
      scene.text(`-${((s as any).pcs_nickname ?? 0)}, I want to be the first man inside you. It will only hurt you a little and I promise to be gentle.`);
      // TODO-QSP: dynamic text: -<<$boydesc>>, honey, I really want to, but if <<$npc_nickname['A29']>> finds ou...
      scene.text(`-${((s as any).boydesc ?? 0)}, honey, I really want to, but if ${((s as any).npc_nickname ?? 0)?.['A29']} finds out, she is going to kill me.`);
      scene.text('-Well… you know? I will say that we\'re serious, that we\'re in love and everything else…');
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] <= 45) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] > 45) {
      scene.actions([
        { label: 'To lose innocence', goto: ['hunterLoveSex', 'din_hunters_first_sex'] },
      ]);
    }
    if (((s as any).hunterVars ?? 0)?.['IgorQW'] > 45) {
      scene.actions([
        { label: 'Part with a guy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['IgorLove'] = 0;
    ((s as any).hunterVars ?? {})['IgorQW'] = (((s as any).hunterVars ?? {})['IgorQW'] ?? 0) - (100);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/pc/reactions/embarrassed.mp4');
    // TODO-QSP: dynamic text: -Sorry <<$boydesc>>, I'd really like to, but i'm just not ready yet.
    scene.text(`-Sorry ${((s as any).boydesc ?? 0)}, I'd really like to, but i'm just not ready yet.`);
    // TODO-QSP: dynamic text: -<<$pcs_nickname>>, I am a normal guy and want normal sex with my girlfriend now...
    scene.text(`-${((s as any).pcs_nickname ?? 0)}, I am a normal guy and want normal sex with my girlfriend now that we're together. Can't you understand that?`);
    // TODO-QSP: dynamic text: -<<$boydesc>>, I said no. I think we better leave it at that if you don't want m...
    scene.text(`-${((s as any).boydesc ?? 0)}, I said no. I think we better leave it at that if you don't want me to get upset. If this is going to be a problem then I don't think we can be together.`);
    scene.text('You broke up with your boyfriend');
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'I\'m still a virgin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You tell him that you are still a virgin. <<$boydesc>> smiles "<<$pcs_nickname>>...
    scene.text(`You tell him that you are still a virgin. ${((s as any).boydesc ?? 0)} smiles "${((s as any).pcs_nickname ?? 0)} you finished school and you're how old? Do you think you can take me in your mouth or ass?"`);
    qspCall(s, 'hunterLoveSex', 'din_hunters_bj');
    scene.actions([
      { label: 'To lose innocence', goto: ['hunterLoveSex', 'din_hunters_first_sex'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/undress/kotovpre1\' + rand(1, 6) + \'.mp4');
    // TODO-QSP: dynamic text: You quickly peel off each other's clothes and <<$boydesc>> sees you naked for th...
    scene.text(`You quickly peel off each other's clothes and ${((s as any).boydesc ?? 0)} sees you naked for the first time.`);
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
      ]);
    }
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
    }
  } },
      ]);
    }
  } else {
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0  &&  ((s as any).hunterVars ?? 0)?.['IgorQW'] > 50) {
      ((s as any).npc_gentle ?? {})[String((s as any).boy ?? 0)] = 0;
      ((s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 0;
      ((s as any).hunterVars ?? {})['bj_times'] = 0;
      (s as any).boyonceA = 1;
      qspCall(s, 'boyStat', 'A173');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'stat', '');
      (s as any).ihls = Math.floor(Math.random() * 3) + 1;
      if (((s as any).pcs_horny ?? 0) >= 60) {
        scene.text('<center><h4>Hut</h4></center>');
        scene.img('images/shared/sex/sequence/kotovpre\' + rand(1, 2) + \'.mp4');
        // TODO-QSP: dynamic text: <<$boydesc>> and you begin to hug and kiss, carressing each others bodies, getti...
        scene.text(`${((s as any).boydesc ?? 0)} and you begin to hug and kiss, carressing each others bodies, getting more and more excited as you do.`);
        qspCall(s, 'arousal', 'foreplay', 5, 'sub');
        qspCall(s, 'stat', '');
        if (((s as any).mesec ?? 0) > 0  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
          // TODO-QSP: dynamic text:  - <<$boydesc>>: Damn, they weren't lying about what they said about that body o...
          scene.text(` - ${((s as any).boydesc ?? 0)}: Damn, they weren't lying about what they said about that body of yours.`);
          // TODO-QSP: dynamic text: - Only good things, <<$pcs_nickname>>. Do you want it in the ass or in the mouth...
          scene.text(`- Only good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
          // TODO-QSP: dynamic text: - Oh, anal won't work for me today <<$boydesc>>, I'm not quite ready… if you kno...
          scene.text(`- Oh, anal won't work for me today ${((s as any).boydesc ?? 0)}, I'm not quite ready… if you know what I mean…`);
          // TODO-QSP: dynamic text: - I understand, says <<$boydesc>>. - Okay, next time, come with a clean ass!
          scene.text(`- I understand, says ${((s as any).boydesc ?? 0)}. - Okay, next time, come with a clean ass!`);
        }
        if (((s as any).mesec ?? 0) > 0  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
          // TODO-QSP: dynamic text:  - <<$boydesc>>: Damn, they weren't lying about what they said about that body o...
          scene.text(` - ${((s as any).boydesc ?? 0)}: Damn, they weren't lying about what they said about that body of yours.`);
          // TODO-QSP: dynamic text: - Only good things, <<$pcs_nickname>>. Do you want it in the ass or in the mouth...
          scene.text(`- Only good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
          scene.text('- Well… - you mutter.');
        }
        scene.actions([
          { label: 'To jump on him', handler: (st: GameState) => {
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/sequence/kotovpre2\' + rand(0, 2) + \'.mp4');
    scene.text('You jump up onto the lap of your boyfriend.');
    scene.text('Continuing your makeout session, you gently rub your hand against his crotch, feeling his rapidly hardening cock through the fabric of his pants.');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Take his dick', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    }
    if (((s as any).pcs_horny ?? 0) < 80  &&  ((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
      ]);
    }
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
  } },
          { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/undress/kotovpre1\' + rand(1, 6) + \'.mp4');
    // TODO-QSP: dynamic text: You quickly took off <<$boydesc>>'s clothes and gaze at his gorgeous naked body.
    scene.text(`You quickly took off ${((s as any).boydesc ?? 0)}'s clothes and gaze at his gorgeous naked body.`);
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Obey him', goto: ['hunterLoveSex', 'din_hunters_sub'] },
      ]);
    }
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
  } },
        ]);
      } else {
        if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 1) {
          scene.text('<center><h4>Hut</h4></center>');
          scene.img('images/shared/sex/kiss/kotovpre30.mp4');
          // TODO-QSP: dynamic text: <<$boydesc>> throws you on the bed and pounces on top of you, pinning you down.
          scene.text(`${((s as any).boydesc ?? 0)} throws you on the bed and pounces on top of you, pinning you down.`);
          // TODO-QSP: dynamic text: Longing to taste his lips, <<$boydesc>> manages to rip off your clothes as your ...
          scene.text(`Longing to taste his lips, ${((s as any).boydesc ?? 0)} manages to rip off your clothes as your devour his mouth with your own`);
          qspCall(s, 'arousal', 'kiss', 5, 'sub');
          qspCall(s, 'stat', '');
          if (((s as any).mesec ?? 0) <= 0) {
            scene.actions([
              { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
            ]);
          }
          if (((s as any).mesec ?? 0) > 0) {
            scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
          }
        } else {
          if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 2  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
            scene.text('<center><h4>Hut</h4></center>');
            scene.img('images/shared/sex/undress/kotovpre50.mp4');
            // TODO-QSP: dynamic text: <<$boydesc>> throws you on the bed and immediately drops down to begin kissing a...
            scene.text(`${((s as any).boydesc ?? 0)} throws you on the bed and immediately drops down to begin kissing and licking between your legs `);
            qspCall(s, 'arousal', 'foreplay', 5, 'sub');
            qspCall(s, 'stat', '');
            if (((s as any).mesec ?? 0) <= 0) {
              scene.actions([
                { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
              ]);
            }
            if (((s as any).mesec ?? 0) > 0) {
              scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
            }
          } else {
            if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 2  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
              scene.text('<center><h4>Hut</h4></center>');
              scene.img('images/shared/sex/undress/kotovpre60.mp4');
              scene.text('You kiss him as you undress each other. He fondles your tits and pinches your nipples as you begin stroking his cock. You feel him continue to harden in your hands.');
              // TODO-QSP: dynamic text: <<$boydesc>> raises his hands to your shoulders and applies gentle pressure. You...
              scene.text(`${((s as any).boydesc ?? 0)} raises his hands to your shoulders and applies gentle pressure. You know exactly what he's asking you to do…`);
              qspCall(s, 'arousal', 'foreplay', 5, 'sub');
              qspCall(s, 'stat', '');
              if (((s as any).mesec ?? 0) <= 0) {
                scene.actions([
                  { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
                ]);
              }
              if (((s as any).mesec ?? 0) > 0) {
                scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
              }
            } else {
              scene.text('<center><h4>Hut</h4></center>');
              scene.img('images/shared/sex/undress/kotovpre4\' + rand(0, 2) + \'.mp4');
              // TODO-QSP: dynamic text: Bursting into the room <<$boydesc>> pushes you onto the bed, stripping and cares...
              scene.text(`Bursting into the room ${((s as any).boydesc ?? 0)} pushes you onto the bed, stripping and caressing your ass`);
              qspCall(s, 'arousal', 'foreplay', 5, 'sub');
              qspCall(s, 'stat', '');
              if (((s as any).mesec ?? 0) <= 0) {
                scene.actions([
                  { label: 'Bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
                ]);
              }
              if (((s as any).mesec ?? 0) > 0) {
                scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAndrei(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    ((s as any).npc_gentle ?? {})[String((s as any).boy ?? 0)] = 0;
    ((s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 0;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    (s as any).boyonceA = 1;
    qspCall(s, 'boyStat', 'A172');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/characters/shared/headshots_main/big172.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> holds you in his arms and begins kissing you. "<<$pcs_nickname>>, t...
    scene.text(`${((s as any).boydesc ?? 0)} holds you in his arms and begins kissing you. "${((s as any).pcs_nickname ?? 0)}, take off your clothes."`);
    qspCall(s, 'arousal', 'kiss', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'I\'m still a virgin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/pc/reactions/embarrassed.mp4');
    scene.text('You, blushing, whisper to him that you\'re still a virgin.');
    // TODO-QSP: dynamic text: -<<$pcs_nickname>>, I want to be your first, and I'm not gonna hurt you, I promi...
    scene.text(`-${((s as any).pcs_nickname ?? 0)}, I want to be your first, and I'm not gonna hurt you, I promise.`);
    // TODO-QSP: dynamic text: -<<$boydesc>>, honey, I really want to, but if my <<$npc_nickname['A29']>> finds...
    scene.text(`-${((s as any).boydesc ?? 0)}, honey, I really want to, but if my ${((s as any).npc_nickname ?? 0)?.['A29']} finds out, she is going to kill me, you reply.`);
    // TODO-QSP: dynamic text: -Well, you know what? In short, it's either your <<$npc_nickname['A29']>> or me…
    scene.text(`-Well, you know what? In short, it's either your ${((s as any).npc_nickname ?? 0)?.['A29']} or me…`);
    scene.actions([
      { label: 'To lose innocence', goto: ['hunterLoveSex', 'din_hunters_first_sex'] },
      { label: 'Part with a guy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['AndreiLove'] = 0;
    ((s as any).hunterVars ?? {})['AndreiQw'] = (((s as any).hunterVars ?? {})['AndreiQw'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/pc/reactions/embarrassed.mp4');
    // TODO-QSP: dynamic text: -Sorry <<$boydesc>>, I'd really like to, but I've never done it before.
    scene.text(`-Sorry ${((s as any).boydesc ?? 0)}, I'd really like to, but I've never done it before.`);
    // TODO-QSP: dynamic text: -<<$pcs_nickname>>, I'm a normal guy and I want to do the things that normal cou...
    scene.text(`-${((s as any).pcs_nickname ?? 0)}, I'm a normal guy and I want to do the things that normal couples do now that we're together.`);
    // TODO-QSP: dynamic text: -<<$boydesc>>, I said no. If that's going to be your attitude then I don't think...
    scene.text(`-${((s as any).boydesc ?? 0)}, I said no. If that's going to be your attitude then I don't think that we can be together.`);
    scene.text('You broke up with your boyfriend');
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      ((s as any).npc_gentle ?? {})[String((s as any).boy ?? 0)] = 0;
      ((s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 0;
      ((s as any).hunterVars ?? {})['bj_times'] = 0;
      (s as any).boyonceA = 1;
      qspCall(s, 'boyStat', 'A172');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      (s as any).ihls = Math.floor(Math.random() * 3) + 1;
      if (((s as any).pcs_horny ?? 0) >= 60) {
        scene.text('<center><h4>Hut</h4></center>');
        scene.img('images/shared/sex/sequence/kotovpre0.mp4');
        // TODO-QSP: dynamic text: <<$boydesc>> and you began to hug and kiss.
        scene.text(`${((s as any).boydesc ?? 0)} and you began to hug and kiss.`);
        scene.text('Your hands are all over each other, making you both more and more aroused and excited');
        qspCall(s, 'arousal', 'foreplay', 5, 'sub');
        qspCall(s, 'stat', '');
        if (((s as any).mesec ?? 0) > 0  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
          // TODO-QSP: dynamic text:  - <<$boydesc>>, Damn, they weren't lying about what they said about that body o...
          scene.text(` - ${((s as any).boydesc ?? 0)}, Damn, they weren't lying about what they said about that body of yours.`);
          // TODO-QSP: dynamic text: - Only good things, <<$pcs_nickname>>. Do you want it in the ass or in the mouth...
          scene.text(`- Only good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
          // TODO-QSP: dynamic text: - Oh, anal won't work for me today <<$boydesc>>, I'm not quite ready… if you kno...
          scene.text(`- Oh, anal won't work for me today ${((s as any).boydesc ?? 0)}, I'm not quite ready… if you know what I mean…`);
          // TODO-QSP: dynamic text: - Yeah fuck <<$pcs_nickname>>, you say you have a headache, huh? Okay, next time...
          scene.text(`- Yeah fuck ${((s as any).pcs_nickname ?? 0)}, you say you have a headache, huh? Okay, next time, don't forget to come prepared to fuck.`);
        }
        if (((s as any).mesec ?? 0) > 0  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
          // TODO-QSP: dynamic text:  - <<$boydesc>>, Damn, they weren't lying about what they said about that body o...
          scene.text(` - ${((s as any).boydesc ?? 0)}, Damn, they weren't lying about what they said about that body of yours.`);
          // TODO-QSP: dynamic text: - Only good things, <<$pcs_nickname>>. Do you want it in the ass or in the mouth...
          scene.text(`- Only good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
          scene.text('- Well… - you mutter.');
        }
        scene.actions([
          { label: 'To jump on him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/sequence/kotovpre2\' + rand(0, 2) + \'.mp4');
    scene.text('You jump up onto the lap of your boyfriend.');
    scene.text('Continuing your makeout session, you gently rub your hand against his crotch, feeling his rapidly hardening cock through the fabric of his pants.');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Take the dick', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    }
    if (((s as any).pcs_horny ?? 0) < 80  &&  ((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
      ]);
    }
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
  } },
          { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/undress/kotovpre1\' + rand(1, 6) + \'.mp4');
    // TODO-QSP: dynamic text: You quickly take off his clothes and stare at <<$boydesc>>'s naked body for the ...
    scene.text(`You quickly take off his clothes and stare at ${((s as any).boydesc ?? 0)}'s naked body for the first time.`);
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Obey him', goto: ['hunterLoveSex', 'din_hunters_sub'] },
      ]);
    }
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
  } },
        ]);
      } else {
        if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 1) {
          scene.text('<center><h4>Hut</h4></center>');
          scene.img('images/shared/sex/kiss/kotovpre30.mp4');
          // TODO-QSP: dynamic text: <<$boydesc>> throws you on the bed and pounces on top of you
          scene.text(`${((s as any).boydesc ?? 0)} throws you on the bed and pounces on top of you`);
          // TODO-QSP: dynamic text: You long for his kisses. <<$boydesc>> somehow manages to rip off your clothes ev...
          scene.text(`You long for his kisses. ${((s as any).boydesc ?? 0)} somehow manages to rip off your clothes even as you devour his mouth with your own`);
          qspCall(s, 'arousal', 'foreplay', 5, 'sub');
          qspCall(s, 'stat', '');
          if (((s as any).mesec ?? 0) <= 0) {
            scene.actions([
              { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
            ]);
          }
          if (((s as any).mesec ?? 0) > 0) {
            scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
          }
        } else {
          if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 2  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
            scene.text('<center><h4>Hut</h4></center>');
            scene.img('images/shared/sex/undress/kotovpre50.mp4');
            // TODO-QSP: dynamic text: <<$boydesc>> throws you on the bed and lowers himself between your legs, licking...
            scene.text(`${((s as any).boydesc ?? 0)} throws you on the bed and lowers himself between your legs, licking and sucking at your pussy`);
            qspCall(s, 'arousal', 'foreplay', 5, 'sub');
            qspCall(s, 'stat', '');
            if (((s as any).mesec ?? 0) <= 0) {
              scene.actions([
                { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
              ]);
            }
            if (((s as any).mesec ?? 0) > 0) {
              scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
            }
          } else {
            if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 2  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
              scene.text('<center><h4>Hut</h4></center>');
              scene.img('images/shared/sex/undress/kotovpre60.mp4');
              scene.text('You kiss him as you undress each other. He fondles your tits and pinches your nipples as you begin stroking his cock. You feel him continue to harden in your hands.');
              // TODO-QSP: dynamic text: <<$boydesc>> raises his hands to your shoulders and applies gentle pressure. You...
              scene.text(`${((s as any).boydesc ?? 0)} raises his hands to your shoulders and applies gentle pressure. You know exactly what he's asking you to do…`);
              qspCall(s, 'arousal', 'foreplay', 5, 'sub');
              qspCall(s, 'stat', '');
              if (((s as any).mesec ?? 0) <= 0) {
                scene.actions([
                  { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
                ]);
              }
              if (((s as any).mesec ?? 0) > 0) {
                scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
              }
            } else {
              scene.text('<center><h4>Hut</h4></center>');
              scene.img('images/shared/sex/undress/kotovpre4\' + rand(0, 2) + \'.mp4');
              // TODO-QSP: dynamic text: Bursting into the room, <<$boydesc>> pushes you onto the bed, stripping and care...
              scene.text(`Bursting into the room, ${((s as any).boydesc ?? 0)} pushes you onto the bed, stripping and caressing your ass`);
              qspCall(s, 'arousal', 'foreplay', 5, 'sub');
              qspCall(s, 'stat', '');
              if (((s as any).mesec ?? 0) <= 0) {
                scene.actions([
                  { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
                ]);
              }
              if (((s as any).mesec ?? 0) > 0) {
                scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSergei(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0  &&  ((s as any).hunterVars ?? 0)?.['SergeiQw'] <= 40) {
    ((s as any).npc_gentle ?? {})[String((s as any).boy ?? 0)] = 0;
    ((s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 0;
    ((s as any).hunterVars ?? {})['bj_times'] = 0;
    (s as any).boyonceA = 1;
    qspCall(s, 'boyStat', 'A174');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/characters/shared/headshots_main/big174.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> holds you in his arms and kisses you deeply. "<<$pcs_nickname>>, ta...
    scene.text(`${((s as any).boydesc ?? 0)} holds you in his arms and kisses you deeply. "${((s as any).pcs_nickname ?? 0)}, take off your clothes."`);
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  (!((s as any).sex ?? 0))) {
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        scene.actions([
          { label: 'I\'m still a virgin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/pc/reactions/embarrassed.mp4');
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] <= 35) {
      // TODO-QSP: dynamic text: You, blushing, whisper to him that you're still a virgin. <<$boydesc>> distracte...
      scene.text(`You, blushing, whisper to him that you're still a virgin. ${((s as any).boydesc ?? 0)} distractedly scratches his chin "A high school graduate and still a virgin? Wow! Well, maybe in I can use your mouth or ass?."`);
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] <= 35  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text:  - Oh, anal won't work for me today <<$boydesc>>, I'm not quite ready… if you kn...
      scene.text(` - Oh, anal won't work for me today ${((s as any).boydesc ?? 0)}, I'm not quite ready… if you know what I mean…`);
      // TODO-QSP: dynamic text: - I understand, <<$boydesc>> says. - Okay, next time, come with a clean booty.
      scene.text(`- I understand, ${((s as any).boydesc ?? 0)} says. - Okay, next time, come with a clean booty.`);
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] > 35) {
      // TODO-QSP: dynamic text: -<<$pcs_nickname>>, I want to be your first, I won't hurt you.
      scene.text(`-${((s as any).pcs_nickname ?? 0)}, I want to be your first, I won't hurt you.`);
      // TODO-QSP: dynamic text: -<<$boydesc>>, honey, I really want to, but if my <<$npc_nickname['A29']>> finds...
      scene.text(`-${((s as any).boydesc ?? 0)}, honey, I really want to, but if my ${((s as any).npc_nickname ?? 0)?.['A29']} finds out, she is going to kill me.`);
      scene.text('-Well, if she does just tell her that we love each other');
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] <= 35) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] > 35) {
      scene.actions([
        { label: 'To lose innocence', goto: ['hunterLoveSex', 'din_hunters_first_sex'] },
      ]);
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiQw'] > 35) {
      scene.actions([
        { label: 'Part with a guy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).hunterVars ?? {})['SergeiLove'] = 0;
    ((s as any).hunterVars ?? {})['SergeiQw'] = (((s as any).hunterVars ?? {})['SergeiQw'] ?? 0) - (100);
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/pc/reactions/embarrassed.mp4');
    // TODO-QSP: dynamic text: -Sorry <<$boydesc>>, I'd really like, but i've never done that before.
    scene.text(`-Sorry ${((s as any).boydesc ?? 0)}, I'd really like, but i've never done that before.`);
    // TODO-QSP: dynamic text: -<<$pcs_nickname>>, I'm a normal guy and want normal sex with you.
    scene.text(`-${((s as any).pcs_nickname ?? 0)}, I'm a normal guy and want normal sex with you.`);
    // TODO-QSP: dynamic text: -<<$boydesc>>, I said no. If you can't accept that then I don't think this is go...
    scene.text(`-${((s as any).boydesc ?? 0)}, I said no. If you can't accept that then I don't think this is going to work out.`);
    scene.text('You broke up with your boyfriend');
  } },
        { label: 'Go', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'I\'m still a virgin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You tell him that you're still a virgin. <<$boydesc>> smiles "<<$pcs_nickname>> ...
    scene.text(`You tell him that you're still a virgin. ${((s as any).boydesc ?? 0)} smiles "${((s as any).pcs_nickname ?? 0)} you finished school, and you're how old? You think you can take it in your mouth or in your ass."`);
    qspCall(s, 'hunterLoveSex', 'din_hunters_bj');
    scene.actions([
      { label: 'To lose innocence', goto: ['hunterLoveSex', 'din_hunters_first_sex'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/undress/kotovpre1\' + rand(1, 6) + \'.mp4');
    // TODO-QSP: dynamic text: You quickly take off his clothes and see <<$boydesc>> naked for the first time.
    scene.text(`You quickly take off his clothes and see ${((s as any).boydesc ?? 0)} naked for the first time.`);
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
      ]);
    }
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
    }
  } },
      ]);
    }
  } else {
    if (((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0  &&  ((s as any).hunterVars ?? 0)?.['SergeiQw'] > 40) {
      ((s as any).npc_gentle ?? {})[String((s as any).boy ?? 0)] = 0;
      ((s as any).npc_rough ?? {})[String((s as any).boy ?? 0)] = 0;
      ((s as any).hunterVars ?? {})['bj_times'] = 0;
      (s as any).boyonceA = 1;
      qspCall(s, 'boyStat', 'A174');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'stat', '');
      (s as any).ihls = Math.floor(Math.random() * 3) + 1;
      if (((s as any).pcs_horny ?? 0) >= 60) {
        scene.text('<center><h4>Hut</h4></center>');
        scene.img('images/shared/sex/sequence/kotovpre4.mp4');
        // TODO-QSP: dynamic text: <<$boydesc>> and you begin to hug and kiss. Your hands wander all over each othe...
        scene.text(`${((s as any).boydesc ?? 0)} and you begin to hug and kiss. Your hands wander all over each others clearly aroused bodies. The raw sexual energy you're both emitting is overpowering.`);
        qspCall(s, 'arousal', 'foreplay', 5, 'sub');
        qspCall(s, 'stat', '');
        if (((s as any).mesec ?? 0) > 0  &&  ((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
          // TODO-QSP: dynamic text:  - <<$boydesc>>, Damn, they weren't lying about what they said about that body o...
          scene.text(` - ${((s as any).boydesc ?? 0)}, Damn, they weren't lying about what they said about that body of yours.`);
          // TODO-QSP: dynamic text: - Only good things, <<$pcs_nickname>>. Do you want it in the ass or in the mouth...
          scene.text(`- Only good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
          // TODO-QSP: dynamic text: - Oh, anal won't work for me today <<$boydesc>>, I'm not quite ready… if you kno...
          scene.text(`- Oh, anal won't work for me today ${((s as any).boydesc ?? 0)}, I'm not quite ready… if you know what I mean…`);
          // TODO-QSP: dynamic text:  - I understand, <<$boydesc>> says. - Okay, next time, come with a clean ass.
          scene.text(` - I understand, ${((s as any).boydesc ?? 0)} says. - Okay, next time, come with a clean ass.`);
        }
        if (((s as any).mesec ?? 0) > 0  &&  ((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
          // TODO-QSP: dynamic text:  - <<$boydesc>>, Damn, they weren't lying about what they said about that body o...
          scene.text(` - ${((s as any).boydesc ?? 0)}, Damn, they weren't lying about what they said about that body of yours.`);
          // TODO-QSP: dynamic text: - Only good things, <<$pcs_nickname>>. Do you want it in the ass or in the mouth...
          scene.text(`- Only good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
          scene.text('- Well… - you mutter');
        }
        scene.actions([
          { label: 'To jump on him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/sequence/kotovpre2\' + rand(0, 3) + \'.mp4');
    scene.text('You jump onto the lap of your boyfriend.');
    scene.text('Continuing to kiss him, you gently rub your hand against his crotch. You can feel his cock stiffen and straighten as you caress it to attention.');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Take the dick', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    }
    if (((s as any).pcs_horny ?? 0) < 80  &&  ((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
      ]);
    }
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
  } },
          { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Hut</h4></center>');
    scene.img('images/shared/sex/undress/kotovpre1\' + rand(1, 6) + \'.mp4');
    // TODO-QSP: dynamic text: You quickly took off <<$boydesc>>'s clothes, exsposing his naked body to your gr...
    scene.text(`You quickly took off ${((s as any).boydesc ?? 0)}'s clothes, exsposing his naked body to your greedy eyes for the first time.`);
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Jump on top of him', goto: ['hunterLoveSex', 'din_hunters_sex_cow'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
      ]);
    }
    if (((s as any).mesec ?? 0) <= 0) {
      scene.actions([
        { label: 'Obey him', goto: ['hunterLoveSex', 'din_hunters_sub'] },
      ]);
    }
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_hunters_bj'] }]);
    }
  } },
        ]);
      } else {
        if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 1) {
          scene.text('<center><h4>Hut</h4></center>');
          scene.img('images/shared/sex/kiss/kotovpre30.mp4');
          // TODO-QSP: dynamic text: <<$boydesc>> he throws you onto the bed and pounces on top of you.
          scene.text(`${((s as any).boydesc ?? 0)} he throws you onto the bed and pounces on top of you.`);
          // TODO-QSP: dynamic text: As you furiously devour his mouth with your own, <<$boydesc>> somehow manages to...
          scene.text(`As you furiously devour his mouth with your own, ${((s as any).boydesc ?? 0)} somehow manages to tear off your clothes, leaving you naked before him.`);
          qspCall(s, 'arousal', 'foreplay', 5, 'sub');
          qspCall(s, 'stat', '');
          if (((s as any).mesec ?? 0) <= 0) {
            scene.actions([
              { label: 'Spread your legs ', goto: ['hunterLoveSex', 'din_hunters_sex_misionary'] },
            ]);
          }
          if (((s as any).mesec ?? 0) > 0) {
            scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
          }
        } else {
          if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 2  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 1) {
            scene.text('<center><h4>Hut</h4></center>');
            scene.img('images/shared/sex/undress/kotovpre50.mp4');
            // TODO-QSP: dynamic text: <<$boydesc>> throws you on to the bed and, spreading your legs wide, immediately...
            scene.text(`${((s as any).boydesc ?? 0)} throws you on to the bed and, spreading your legs wide, immediately turns his attention to your obviously dripping pussy`);
            qspCall(s, 'arousal', 'foreplay', 5, 'sub');
            qspCall(s, 'stat', '');
            if (((s as any).mesec ?? 0) <= 0) {
              scene.actions([
                { label: 'Enjoy', goto: ['hunterLoveSex', 'din_hunters_sex_kuni'] },
              ]);
            }
            if (((s as any).mesec ?? 0) > 0) {
              scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
            }
          } else {
            if (((s as any).pcs_horny ?? 0) < 60  &&  ((s as any).ihls ?? 0) === 2  &&  ((s as any).hunterVars ?? 0)?.['kuni'] === 0) {
              scene.text('<center><h4>Hut</h4></center>');
              scene.img('images/shared/sex/undress/kotovpre60.mp4');
              // TODO-QSP: dynamic text: You kiss <<$boydesc>> while undressing each other. He fondles your boobs and twe...
              scene.text(`You kiss ${((s as any).boydesc ?? 0)} while undressing each other. He fondles your boobs and tweaks your nipples as you gently massage his rapidly hardening cock.`);
              // TODO-QSP: dynamic text: <<$boydesc>> gently pushes down on your shoulders. You know exactly what he's as...
              scene.text(`${((s as any).boydesc ?? 0)} gently pushes down on your shoulders. You know exactly what he's asking for…`);
              qspCall(s, 'arousal', 'foreplay', 5, 'sub');
              qspCall(s, 'stat', '');
              if (((s as any).mesec ?? 0) <= 0) {
                scene.actions([
                  { label: 'Kneel', goto: ['hunterLoveSex', 'din_hunters_bj200'] },
                ]);
              }
              if (((s as any).mesec ?? 0) > 0) {
                scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
              }
            } else {
              scene.text('<center><h4>Hut</h4></center>');
              scene.img('images/shared/sex/undress/kotovpre4\' + rand(0, 2) + \'.mp4');
              // TODO-QSP: dynamic text: Bursting into the room <<$boydesc>> pushes you down onto the bed while stripping...
              scene.text(`Bursting into the room ${((s as any).boydesc ?? 0)} pushes you down onto the bed while stripping and caressing your ass`);
              qspCall(s, 'arousal', 'foreplay', 5, 'sub');
              qspCall(s, 'stat', '');
              if (((s as any).mesec ?? 0) <= 0) {
                scene.actions([
                  { label: 'bend over', goto: ['hunterLoveSex', 'din_hunters_sex_dog'] },
                ]);
              }
              if (((s as any).mesec ?? 0) > 0) {
                scene.actions([{ label: 'Continue', goto: ['hunterLoveSex', 'din_mesec'] }]);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'din_mesec':
      enterDinMesec(s, scene);
      break;
    case 'din_hunters_bj_bonusH1':
      enterDinHuntersBjBonusH1(s, scene);
      break;
    case 'din_hunters_bjH1':
      enterDinHuntersBjH1(s, scene);
      break;
    case 'din_hunters_bj_bonusH2':
      enterDinHuntersBjBonusH2(s, scene);
      break;
    case 'din_hunters_bjH2':
      enterDinHuntersBjH2(s, scene);
      break;
    case 'din_hunters_bj_bonusH3':
      enterDinHuntersBjBonusH3(s, scene);
      break;
    case 'din_hunters_bjH3':
      enterDinHuntersBjH3(s, scene);
      break;
    case 'din_hunters_bj_bonusH4':
      enterDinHuntersBjBonusH4(s, scene);
      break;
    case 'din_hunters_bjH4':
      enterDinHuntersBjH4(s, scene);
      break;
    case 'din_hunters_bj_bonusH6':
      enterDinHuntersBjBonusH6(s, scene);
      break;
    case 'din_hunters_bjH6':
      enterDinHuntersBjH6(s, scene);
      break;
    case 'din_hunters_bj_bonusH7':
      enterDinHuntersBjBonusH7(s, scene);
      break;
    case 'din_hunters_bjH7':
      enterDinHuntersBjH7(s, scene);
      break;
    case 'din_hunters_bj_bonusH8':
      enterDinHuntersBjBonusH8(s, scene);
      break;
    case 'din_hunters_bjH8':
      enterDinHuntersBjH8(s, scene);
      break;
    case 'din_hunters_bj':
      enterDinHuntersBj(s, scene);
      break;
    case 'din_hunters_sex_bell_analH':
      enterDinHuntersSexBellAnalH(s, scene);
      break;
    case 'din_hunters_sex_cow_analH':
      enterDinHuntersSexCowAnalH(s, scene);
      break;
    case 'din_hunters_sex_dog_analH':
      enterDinHuntersSexDogAnalH(s, scene);
      break;
    case 'din_hunters_sex_misionary_analH':
      enterDinHuntersSexMisionaryAnalH(s, scene);
      break;
    case 'din_hunters_sex_cumface7':
      enterDinHuntersSexCumface7(s, scene);
      break;
    case 'din_hunters_sex_cumface6':
      enterDinHuntersSexCumface6(s, scene);
      break;
    case 'din_hunters_sex_cumface5':
      enterDinHuntersSexCumface5(s, scene);
      break;
    case 'din_hunters_sex_cumface4':
      enterDinHuntersSexCumface4(s, scene);
      break;
    case 'din_hunters_sex_cumface3':
      enterDinHuntersSexCumface3(s, scene);
      break;
    case 'din_hunters_sex_cumface2':
      enterDinHuntersSexCumface2(s, scene);
      break;
    case 'din_hunters_sex_cumface1':
      enterDinHuntersSexCumface1(s, scene);
      break;
    case 'din_hunters_sex_cum11':
      enterDinHuntersSexCum11(s, scene);
      break;
    case 'din_hunters_sex_cum10':
      enterDinHuntersSexCum10(s, scene);
      break;
    case 'din_hunters_sex_cum9':
      enterDinHuntersSexCum9(s, scene);
      break;
    case 'din_hunters_sex_cum81':
      enterDinHuntersSexCum81(s, scene);
      break;
    case 'din_hunters_sex_cum8':
      enterDinHuntersSexCum8(s, scene);
      break;
    case 'din_hunters_sex_cum7':
      enterDinHuntersSexCum7(s, scene);
      break;
    case 'din_hunters_sex_cum6':
      enterDinHuntersSexCum6(s, scene);
      break;
    case 'din_hunters_sex_cum5':
      enterDinHuntersSexCum5(s, scene);
      break;
    case 'din_hunters_sex_cum41':
      enterDinHuntersSexCum41(s, scene);
      break;
    case 'din_hunters_sex_cum4':
      enterDinHuntersSexCum4(s, scene);
      break;
    case 'din_hunters_sex_cum3':
      enterDinHuntersSexCum3(s, scene);
      break;
    case 'din_hunters_sex_cum2':
      enterDinHuntersSexCum2(s, scene);
      break;
    case 'din_hunters_sex_cum1':
      enterDinHuntersSexCum1(s, scene);
      break;
    case 'din_hunters_sex_bell_anal':
      enterDinHuntersSexBellAnal(s, scene);
      break;
    case 'din_hunters_sex_cow_anal2':
      enterDinHuntersSexCowAnal2(s, scene);
      break;
    case 'din_hunters_sex_cow_anal1':
      enterDinHuntersSexCowAnal1(s, scene);
      break;
    case 'din_hunters_sex_cow_anal':
      enterDinHuntersSexCowAnal(s, scene);
      break;
    case 'din_hunters_sex_dog_anal':
      enterDinHuntersSexDogAnal(s, scene);
      break;
    case 'din_hunters_sex_misionary_anal':
      enterDinHuntersSexMisionaryAnal(s, scene);
      break;
    case 'din_hunters_sex_anal_no':
      enterDinHuntersSexAnalNo(s, scene);
      break;
    case 'din_hunters_sex_69':
      enterDinHuntersSex_69(s, scene);
      break;
    case 'din_hunters_sex_hand_bonus':
      enterDinHuntersSexHandBonus(s, scene);
      break;
    case 'din_hunters_sex_hand':
      enterDinHuntersSexHand(s, scene);
      break;
    case 'din_hunters_sex_bell_bonus1':
      enterDinHuntersSexBellBonus1(s, scene);
      break;
    case 'din_hunters_sex_bell_bonus':
      enterDinHuntersSexBellBonus(s, scene);
      break;
    case 'din_hunters_sex_bell':
      enterDinHuntersSexBell(s, scene);
      break;
    case 'din_hunters_sex_cow_bonus3':
      enterDinHuntersSexCowBonus3(s, scene);
      break;
    case 'din_hunters_sex_cow_bonus2':
      enterDinHuntersSexCowBonus2(s, scene);
      break;
    case 'din_hunters_sex_cow_bonus1':
      enterDinHuntersSexCowBonus1(s, scene);
      break;
    case 'din_hunters_sex_cow_bonus':
      enterDinHuntersSexCowBonus(s, scene);
      break;
    case 'din_hunters_sex_cow':
      enterDinHuntersSexCow(s, scene);
      break;
    case 'din_hunters_sex_dog_bonus':
      enterDinHuntersSexDogBonus(s, scene);
      break;
    case 'din_hunters_sex_dog_bonus1':
      enterDinHuntersSexDogBonus1(s, scene);
      break;
    case 'din_hunters_sex_dog_bonus2':
      enterDinHuntersSexDogBonus2(s, scene);
      break;
    case 'din_hunters_sex_dog':
      enterDinHuntersSexDog(s, scene);
      break;
    case 'din_hunters_sex_misionary_bonus2':
      enterDinHuntersSexMisionaryBonus2(s, scene);
      break;
    case 'din_hunters_sex_misionary_bonus1':
      enterDinHuntersSexMisionaryBonus1(s, scene);
      break;
    case 'din_hunters_sex_misionary_bonus':
      enterDinHuntersSexMisionaryBonus(s, scene);
      break;
    case 'din_hunters_sex_kuni_bonus':
      enterDinHuntersSexKuniBonus(s, scene);
      break;
    case 'din_hunters_sex_kuni':
      enterDinHuntersSexKuni(s, scene);
      break;
    case 'din_hunters_sex_misionary':
      enterDinHuntersSexMisionary(s, scene);
      break;
    case 'din_hunters_bj14':
      enterDinHuntersBj14(s, scene);
      break;
    case 'din_hunters_bj13':
      enterDinHuntersBj13(s, scene);
      break;
    case 'din_hunters_bj_bonus12':
      enterDinHuntersBjBonus12(s, scene);
      break;
    case 'din_hunters_bj12':
      enterDinHuntersBj12(s, scene);
      break;
    case 'din_hunters_bj_bonus11':
      enterDinHuntersBjBonus11(s, scene);
      break;
    case 'din_hunters_bj11':
      enterDinHuntersBj11(s, scene);
      break;
    case 'din_hunters_bj10':
      enterDinHuntersBj10(s, scene);
      break;
    case 'din_hunters_bj9':
      enterDinHuntersBj9(s, scene);
      break;
    case 'din_hunters_bj_bonus8':
      enterDinHuntersBjBonus8(s, scene);
      break;
    case 'din_hunters_bj8':
      enterDinHuntersBj8(s, scene);
      break;
    case 'din_hunters_bj_bonus7':
      enterDinHuntersBjBonus7(s, scene);
      break;
    case 'din_hunters_bj7':
      enterDinHuntersBj7(s, scene);
      break;
    case 'din_hunters_bj_bonus6':
      enterDinHuntersBjBonus6(s, scene);
      break;
    case 'din_hunters_bj6':
      enterDinHuntersBj6(s, scene);
      break;
    case 'din_hunters_bj_bonus5':
      enterDinHuntersBjBonus5(s, scene);
      break;
    case 'din_hunters_bj5':
      enterDinHuntersBj5(s, scene);
      break;
    case 'din_hunters_bj_bonus4':
      enterDinHuntersBjBonus4(s, scene);
      break;
    case 'din_hunters_bj4':
      enterDinHuntersBj4(s, scene);
      break;
    case 'din_hunters_bj_bonus3':
      enterDinHuntersBjBonus3(s, scene);
      break;
    case 'din_hunters_bj3':
      enterDinHuntersBj3(s, scene);
      break;
    case 'din_hunters_bj_bonus2':
      enterDinHuntersBjBonus2(s, scene);
      break;
    case 'din_hunters_bj2':
      enterDinHuntersBj2(s, scene);
      break;
    case 'din_hunters_bj_bonus1':
      enterDinHuntersBjBonus1(s, scene);
      break;
    case 'din_hunters_bj1':
      enterDinHuntersBj1(s, scene);
      break;
    case 'din_hunters_bj200':
      enterDinHuntersBj200(s, scene);
      break;
    case 'din_hunters_sub':
      enterDinHuntersSub(s, scene);
      break;
    case 'din_hunters_first_sex':
      enterDinHuntersFirstSex(s, scene);
      break;
    case 'Igor':
      enterIgor(s, scene);
      break;
    case 'Andrei':
      enterAndrei(s, scene);
      break;
    case 'Sergei':
      enterSergei(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hunterLoveSex: LocationDef = {
  name: 'hunterLoveSex',
  title: '<<$npc_firstname[\'A9\']>> <<$npc_lastname[\'A9\']>>',
  region: 'other',
  enter: enter,
};
