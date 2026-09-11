import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'get_job_definition', 'pav_barbershop_cleaner');
  if (((s as any).job_status ?? 0)?.['pav_barbershop_cleaner'] === '') {
    scene.actions([
      { label: 'Ask for work', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('You walk up to Mr. Syomin, the owner of the barbershop.');
    scene.text('"Hello Mr. Syomin", you greet him.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>! What can I do for you today?", he asks you in his usua...
    scene.text(`"Hello ${((s as any).pcs_nickname ?? 0)}! What can I do for you today?", he asks you in his usual soothing voice.`);
    scene.text('"I was wondering if you\'re looking for some help around here"');
    scene.text('"Well, I don\'t think you have experience as a hairdresser…" He thinks for a second. "…, but my back isn\'t the best anymore, so I could use some help keeping the shop clean. It\'s not much work, but I\'d be happy if you could come in once a day for about an hour. Just come by, when you\'re done with school and when I\'m still open, obviously."');
    scene.text('You smile cheerfully. "That sound great! What would I have to do?"');
    scene.text('"Well," he says, while looking around and gathering tasks for you. "…, you\'d have to mop the floor here in the main room and the break room in the back as well. Take out all the trash, clean the breakroom kitchen, clean the mirrors, windows, chairs and toilet and of course dust the shelves. It might sound like a lot, but don\'t worry, even doing one thing, makes my life easier."');
    scene.text('You think about it for a second, but you guess it won\'t be too bad and you could need any amount of money… "I… uhm… hate to ask, but how much would I earn per hour?"');
    // TODO-QSP: dynamic text: "Ah yes," Mr. Syomin chuckles. "…, the most important question. Are you alright ...
    scene.text(`"Ah yes," Mr. Syomin chuckles. "…, the most important question. Are you alright with ${qspFunc(s, 'money', 'string_profit', 125)} per hour?"`);
    scene.actions([
      { label: 'Accept the job', handler: (st: GameState) => {
    scene.text('"That\'s great", you nod. "When can I start?"');
    scene.text('"If you could come back tomorrow, that\'d be great."');
    qspCall(s, 'jobs', 'set_employed', 'pav_barbershop_cleaner');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
      { label: 'Think about it', handler: (st: GameState) => {
    scene.text('"I guess I\'ll think about it some more.", you answer.');
    // TODO-QSP: dynamic text: "Sure <<$pcs_nickname>>, come back when you want to work."
    scene.text(`"Sure ${((s as any).pcs_nickname ?? 0)}, come back when you want to work."`);
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).job_status ?? 0)?.['pav_barbershop_cleaner'] === 'employed') {
      if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_barbershop_cleaner') === 1  &&  ((s as any).job_last_work_day ?? 0)?.['pav_barbershop_cleaner'] !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Clean the shop for <<$func(\'money\', \'string_profit\', 125)>> (1:00)', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'clock', 'pav_barbershop_cleaner');
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    // TODO-QSP: dynamic text: You work diligently and fast. You clean the floor, take out the trash, dust off ...
    scene.text(`You work diligently and fast. You clean the floor, take out the trash, dust off the shelves and wipe some mirrors and windows. Before you know an hour has passed and you're ${qspFunc(s, 'money', 'string_profit', 125)} richer.`);
    qspCall(s, 'exp_gain', 'cleaning', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'jobs', 'paycheck', 'pav_barbershop_cleaner');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Buy Scrunchies [+$func(\'money\', \'get_cost_string\', 60)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 60) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 60);
      ((s as any).mc_inventory ?? {})['scrunchies'] = (((s as any).mc_inventory ?? {})['scrunchies'] ?? 0) + (10);
      scene.text('You pay Mr. Syomin and buy the small box.');
      scene.actions([
        { label: 'Move away', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
    { label: 'Buy Hair accessories [+$func(\'money\', \'get_cost_string\', 80)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 80) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 80);
      ((s as any).mc_inventory ?? {})['kirbygrips'] = (((s as any).mc_inventory ?? {})['kirbygrips'] ?? 0) + (10);
      scene.text('You pay Mr. Syomin and buy the small box.');
      scene.actions([
        { label: 'Move away', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Barber Shop</b></center>');
  scene.text('<center>The only barber shop in the area owned by Oleg Anatolyevich Syomin. He denies ever playing football, but your brother is convinced he is "The Oleg Anatolyevich Syomin". While he can\'t do very special hairstyles, he\'s cheap and works fast.</center>');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).pcs_hairlng ?? 0) <= 15) {
    scene.text('Your hair is not long enough to require cutting.');
  } else {
    // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 700) = 1, '"exec: gt 'barbershop', '...
    scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 700) = 1, \'"exec: gt \'barbershop\', \'cuthair\'"\', \') + \'>Cut your hair (\' + $func(\'money\', \'string_price\', 700) + \')</a>');
  }
  // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 750) = 1, '"exec: gt 'barbershop', '...
  scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 750) = 1, \'"exec: gt \'barbershop\', \'dyehair\'"\', \') + \'>Dye your hair (\' + $func(\'money\', \'string_price\', 750) + \')</a>');
  if (((s as any).nathcol ?? 0) !== ((s as any).pcs_haircol ?? 0)) {
    if (((s as any).dyefade ?? 0) > 0  &&  ((s as any).dyefade ?? 0) < 7) {
      // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 375) = 1, '"exec: gt 'barbershop', '...
      scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 375) = 1, \'"exec: gt \'barbershop\', \'touchup\'"\', \') + \'>Touch up hair color (\' + $func(\'money\', \'string_price\', 375) + \')</a>');
    } else {
      if ((!((s as any).dyefade ?? 0))) {
        // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 750) = 1, '"exec: gt 'barbershop', '...
        scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 750) = 1, \'"exec: gt \'barbershop\', \'touchup2\'"\', \') + \'>Re-dye your existing hair color (\' + $func(\'money\', \'string_price\', 750) + \')</a>');
      }
    }
  }
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 20) {
    scene.text('The barber shop is closed at the moment, you should probably come back, when Mr. Syomin is in');
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_commercial', ''] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterCuthair(s: GameState, scene: SceneBuilder): void {
  scene.img(`${qspFunc(s, '$face_image', '')}`);
  scene.text('You look at your yourself in the mirror then ask Mr. Syomin if you can get your hair cut.');
  scene.text('"Of course, how would you like your hair cut?", he asks you.');
  if (((s as any).pcs_hairlng ?? 0) > 10) {
    scene.actions([
      { label: 'Very short', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 700);
    scene.text('You sit down and say, "I want my hair to be very short."');
    scene.text('"Of course", he says with a friendly smile on her face, while leading you to a free seat.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 10;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About half an hour later he is done and shows you your very short buzzcut.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 31) {
    scene.actions([
      { label: 'Short, but not too short', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 700);
    scene.text('"I\'d like to have my hair cut short, but it shouldn\'t get too short. I hope, you know what I mean.", you tell him, hoping he wouldn\'t cut everything off.');
    scene.text('"I know what you mean, that\'s not problem at all", he says, then he turns around one of the free seats and makes a gesture to you, to sit down.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 60) {
      scene.text('"Before we begin, I need to ask, if I should cut you a fringe or not.", he tells you.');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 31;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle, which barely reaches your earlobes.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 31;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle, which barely reaches your earlobes.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_hairlng = 31;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'stat', '');
      scene.img(`${qspFunc(s, '$face_image', '')}`);
      scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle, which barely reaches your earlobes.');
      scene.text('You stand up and pay Mr. Syomin at the counter.');
      scene.actions([
        { label: 'Stand up', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 81) {
    scene.actions([
      { label: 'About chin-line length', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 700);
    scene.text('"Could you cut my hair back to between my chin and shoulder, please?", you ask him.');
    scene.text('"Sure, no problem", he tells you getting a chair for you ready.');
    scene.actions([
      { label: 'Sit down.', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 90) {
      scene.text('"Before we begin, I need to ask, if I should cut you a fringe or not.", he tells you.');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 81;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which goes down to you chin-line and you have a fringe, covering your forehead.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 81;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done and shows you your new hairstyle which goes down to you chin-line.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_hairlng = 81;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'stat', '');
      scene.img(`${qspFunc(s, '$face_image', '')}`);
      scene.text('20 minutes later, he is done and shows you your new hairstyle which goes down to you chin-line.');
      scene.text('You stand up and pay Mr. Syomin at the counter.');
      scene.actions([
        { label: 'Stand up', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 161) {
    scene.actions([
      { label: 'Shoulder Length', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 700);
    scene.text('"I would like to have my hair cut back to about the height of my shoulder.", you tell him.');
    scene.text('"Sure, no problem", he tells you, gesturing you, to sit down into a free chair.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 170) {
      scene.text('"Before we begin, I need to ask, if I should cut you a fringe or not.", he tells you.');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 161;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which just reaches your shoulders and you have a fringe, covering your forehead.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 161;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('30 minutes later, he is done cutting your hair. He shows you your new hairstyle which just reaches your shoulders.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_hairlng = 161;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'stat', '');
      scene.img(`${qspFunc(s, '$face_image', '')}`);
      scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which just reaches your shoulders.');
      scene.text('You stand up and pay Mr. Syomin at the counter.');
      scene.actions([
        { label: 'Stand up', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 261) {
    scene.actions([
      { label: 'About Brastrap length', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 700);
    scene.text('"Could you cut my hair back to about where my bra-strap sits?", you ask him.');
    scene.text('"That\'s absolutely no problem.", he says, when gesturing you sit down on one of the free seat');
    scene.actions([
      { label: 'Sit down.', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 280) {
      scene.text('"Before we begin, I need to ask, if I should cut you a fringe or not.", he tells you.');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 261;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to your bra strap, in addition he made you a fringe, which covers your forehead, as requested.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 261;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to your bra strap.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_hairlng = 261;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'stat', '');
      scene.img(`${qspFunc(s, '$face_image', '')}`);
      scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to your bra strap.');
      scene.text('You stand up and pay Mr. Syomin at the counter.');
      scene.actions([
        { label: 'Stand up', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 401) {
    scene.actions([
      { label: 'About small of back length', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 700);
    scene.text('"Could you cut my hair back to about the small of my back?", you ask him.');
    scene.text('"That\'s absolutely no problem.", he says, when gesturing you sit down on one of the free seat');
    scene.actions([
      { label: 'Sit down.', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 420) {
      scene.text('"Before we begin, I need to ask, if I should cut you a fringe or not.", he tells you.');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 401;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to the small of your back, in addition he made you a fringe, which covers your forehead, as requested.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 401;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to the small of your back.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_hairlng = 401;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'stat', '');
      scene.img(`${qspFunc(s, '$face_image', '')}`);
      scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to the small of your back.');
      scene.text('You stand up and pay Mr. Syomin at the counter.');
      scene.actions([
        { label: 'Stand up', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 601) {
    scene.actions([
      { label: 'About Hip length', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 700);
    scene.text('"Could you cut my hair back to about the top of my hips?", you ask him.');
    scene.text('"That\'s absolutely no problem.", he says, when gesturing you sit down on one of the free seat');
    scene.actions([
      { label: 'Sit down.', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 620) {
      scene.text('"Before we begin, I need to ask, if I should cut you a fringe or not.", he tells you.');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 601;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to the top of your hips, in addition he made you a fringe, which covers your forehead, as requested.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 601;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to the top of your hips.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_hairlng = 601;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'stat', '');
      scene.img(`${qspFunc(s, '$face_image', '')}`);
      scene.text('20 minutes later, he is done cutting your hair. He shows you your new hairstyle which reaches down to the top of your hips.');
      scene.text('You stand up and pay Mr. Syomin at the counter.');
      scene.actions([
        { label: 'Stand up', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 801) {
    scene.actions([
      { label: 'Cut the tips', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 700);
    scene.text('"I\'d like to keep this length, but my tips might need some cutting. Could you do that?", you ask him. ');
    scene.text('"Of course, please sit down.", he says.');
    scene.actions([
      { label: 'Sit down.', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 801) {
      scene.text('"Before we begin, I need to ask, if I should cut you a fringe or not.", he tells you.');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 801;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you how he trimmed your hair as requested keeping it as much of the length as possible, he cut you a nice fringe, which now covers your forehead.');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_hairlng = 801;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('20 minutes later, he is done cutting your hair. He shows you how he trimmed your hair as requested keeping it as much of the length as possible');
    scene.text('You stand up and pay Mr. Syomin at the counter.');
    scene.actions([
      { label: 'Stand up', goto: ['barbershop', 'start'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_hairlng = 801;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'stat', '');
      scene.img(`${qspFunc(s, '$face_image', '')}`);
      scene.text('20 minutes later, he is done cutting your hair. He shows you how he trimmed your hair as requested keeping it as much of the length as possible');
      scene.text('You stand up and pay Mr. Syomin at the counter.');
      scene.actions([
        { label: 'Stand up', goto: ['barbershop', 'start'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Change you mind', goto: ['barbershop', 'start'] },
  ]);
  scene.build();
}

function enterPerm(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'money', 'pay', 1500);
  if ((!((s as any).defcurly ?? 0))) {
    (s as any).curly = Math.floor(Math.random() * 5) + 12;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('You get your hair curled. It should hold for around 2 weeks.');
  } else {
    (s as any).curly = 2147483647;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('You get your hair curled, as it should be naturally.');
  }
  scene.actions([
    { label: 'Leave', goto: ['barbershop', 'start'] },
  ]);
  scene.build();
}

function enterPerm2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'money', 'pay', 1500);
  (s as any).curly = 0;
  if ((!((s as any).defcurly ?? 0))) {
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('You get your hair straightened, as it should be naturally.');
  } else {
    (s as any).straight = Math.floor(Math.random() * 5) + 12;
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('You get your hair straightened. It should hold for around 2 weeks.');
  }
  scene.actions([
    { label: 'Leave', goto: ['barbershop', 'start'] },
  ]);
  scene.build();
}

function enterDyehair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('You ask Mr. Syomin, the barber, if he could dye your hair.');
  scene.text('"Sure.", he says.');
  scene.text('"What colour would like to have your hair dyed?"');
  if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)) {
    scene.actions([
      { label: 'Restore your hair to its natural colour', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I want to go back to my natural hair colour." you say as you pick at your hair ...
    scene.text(`"I want to go back to my natural hair colour." you say as you pick at your hair in the mirror, "I don't think ${((s as any).pcs_haircolor ?? 0)} is working for me."`);
    scene.text('"Sure thing!", he says, "Why don\'t you take a seat?"');
    scene.text('"We\'ll be done in no time!", he says and points your over to sit down on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = ((s as any).nathcol ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('Less than an hour later your hair is dyed and dried.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 0) {
    scene.actions([
      { label: 'Black', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Black", you say, "I want to have it as dark as possible, please."');
    scene.text('"Sure thing!", he says, "Why don\'t you take a seat?"');
    scene.text('"We\'ll be done in no time!", he says and points your over to sit down on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 0;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 28;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('Not even an hour later everything seems to have dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 1) {
    scene.actions([
      { label: 'Brown', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I\'d like to have my hair brown", you say.');
    scene.text('"Sure thing!", he answer in a happy tone, "Why don\'t you take a seat?"');
    scene.text('"We\'ll be done in no time!", he says.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 1;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 28;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('45 minutes later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 2) {
    scene.actions([
      { label: 'Red', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Red is a colour I\'d love to try out.", you say.');
    scene.text('"Sure thing!", he smiles, "Why don\'t you take a seat?"');
    scene.text('"We\'ll be done in no time!", he says as he turns around one of the seats for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 2;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 28;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('45 minutes later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 3) {
    scene.actions([
      { label: 'Blonde', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to have my hair coloured blonde, please", you tell him.');
    scene.text('"As you wish, please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 3;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 28;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 4) {
    scene.actions([
      { label: 'Light Red', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"Light red, like a fire truck." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 4;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 5) {
    scene.actions([
      { label: 'Dark Blue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"I want a really dark blue, almost purple." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 5;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 6) {
    scene.actions([
      { label: 'Medium Blue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"I feel like trying an electric blue." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 6;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 7) {
    scene.actions([
      { label: 'Light Blue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"Make my hair light blue, like candy floss." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 7;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 8) {
    scene.actions([
      { label: 'Dark Green', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"I want a deep green, like emerald." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 8;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.img(`${qspFunc(s, '$face_image', '')}`);
  if (((s as any).pcs_haircol ?? 0) !== 10) {
    scene.actions([
      { label: 'Light Green', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"Can you do a nice light green, sort of like new leaves?" you ask.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 10;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 11) {
    scene.actions([
      { label: 'Dark Pink', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"How about a really dark pink, almost like a cross between purple and red." you tell him with a smile.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 11;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 12) {
    scene.actions([
      { label: 'Medium Pink', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"I want it to be pink like bubble gum with maybe a few really light pink streaks." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 12;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 13) {
    scene.actions([
      { label: 'Light Pink', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"A soft light pink, like candy floss." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 13;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 14) {
    scene.actions([
      { label: 'Dark Purple', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"I want it nice dark purple, like a dark wine." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 14;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 15) {
    scene.actions([
      { label: 'Medium Purple', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"I\'m leaning towards purple, not so dark that you can\'t tell it is purple, you know?" you tell him.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 15;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 16) {
    scene.actions([
      { label: 'Light Purple', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"I\'m thinking a really light purple, like grape soda." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 16;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 17) {
    scene.actions([
      { label: 'Orange', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"Really orange, like a fox." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 17;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 18) {
    scene.actions([
      { label: 'Dark Red', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"Dark Red, like a fine wine." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 18;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 19) {
    scene.actions([
      { label: 'Medium Red', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I want to try something really different." you tell him.');
    scene.text('"And what would that be?" Mr. Syomin asks cheerfully.');
    scene.text('"Medium Red, like a cherry." you announce.');
    scene.text('"As you wish, although I\'ve not done too many like that. Please have a seat.", he says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).pcs_haircol = 19;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 23;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('About an hour later, everything should be dried up.');
    scene.text('Mr. Syomin removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay him ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay him \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Leave', goto: ['barbershop', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Change your mind', goto: ['barbershop', 'start'] },
  ]);
  scene.build();
}

function enterTouchup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  (s as any).dyefade = Math.floor(Math.random() * 8) + 35;
  (s as any).collength = ((s as any).pcs_hairlng ?? 0);
  qspCall(s, 'money', 'pay', 375);
  qspCall(s, 'stat', '');
  scene.text('The hairdresser nods her head excitedly and leads you to an empty chair.');
  scene.text('She has a bubbly personality, chatting about this and that without pause or much feedback from you, but you don\'t mind as it keeps you distracted while you go through the usual wash and dry routine.');
  scene.text('She flits around your head with her tools, and before you know it, your hair is restored to its earlier luster and color.');
  // TODO-QSP: dynamic text: You stand up from the chair and pay her ' + $func('money', 'string_price', 375) ...
  scene.text('You stand up from the chair and pay her \' + $func(\'money\', \'string_price\', 375) + \'.');
  scene.actions([
    { label: 'Move away', goto: ['barbershop', 'start'] },
  ]);
  scene.build();
}

function enterTouchup2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: The hairdresser smiles apologetically, "Sorry, but you're going to need a comple...
  scene.text('The hairdresser smiles apologetically, "Sorry, but you\'re going to need a completely new dye job to cover that up. I can do it, if you want? It\'s only \' + $func(\'money\', \'string_price\', 750) + \'."');
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 35;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    scene.text('About an hour later, everything should be dried up.');
    scene.text('The hairdresser removes the dryer hood. "And we\'re all done."');
    // TODO-QSP: dynamic text: You stand up from the chair and pay her ' + $func('money', 'string_price', 750) ...
    scene.text('You stand up from the chair and pay her \' + $func(\'money\', \'string_price\', 750) + \'.');
    scene.actions([
      { label: 'Move away', goto: ['barbershop', 'start'] },
    ]);
  } },
    { label: 'No thanks', goto: ['barbershop', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'cuthair':
      enterCuthair(s, scene);
      break;
    case 'perm':
      enterPerm(s, scene);
      break;
    case 'perm2':
      enterPerm2(s, scene);
      break;
    case 'dyehair':
      enterDyehair(s, scene);
      break;
    case 'touchup':
      enterTouchup(s, scene);
      break;
    case 'touchup2':
      enterTouchup2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const barbershop: LocationDef = {
  name: 'barbershop',
  title: 'The Barber Shop',
  region: 'other',
  enter: enter,
};
