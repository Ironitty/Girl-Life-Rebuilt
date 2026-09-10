import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'stwork', 'start');
  (s as any).stripMir = 1;
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  // TODO-QSP: close 'sound/street_club.mp3'
  scene.text('<center><b>Dressing Room</b></center>');
  scene.img('images/locations/city/redlight/stripclub/backstage.jpg');
  scene.text('The room has <a href="exec:gt \'mirror\', \'start\'">mirrors</a> all along the walls, where you can <a href="exec:gt \'mirror\', \'brush\'">brush</a> your hair, and a selection of <a href="exec:gt \'wardrobe\', \'start\'">clothes</a> hanging on rails for the girls to dress in. The whiteboard serving as the signup sheet for <a href="exec: gt \'stwork\', \'set_schedule\', \'this_week\' ">this week</a> and <a href="exec: gt \'stwork\', \'set_schedule\', \'next_week\' ">next week</a> is suctioned to one of the mirrors with a pen on top.');
  scene.text('There are some stairs leading to the <a href="exec:gt \'stwork\', \'stripgirl\'">stage</a> where you can head out to perform.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('To the side is a door which overlooks the staff parking lot to the rear, used as a private entrance so girls don\'t to deal with scummy customers queuing out front. Always standing by this entrance is a <a href="exec:gt \'stwork\', \'guard\'">security guard</a>, who isn\'t going to let you walk outside unless you put some clothes on.');
  } else {
    scene.text('To the side is a <a href="exec:stripMir = 0 & gt \'stripclub\', \'start\'">door</a> which overlooks the staff parking lot to the rear, used as a private entrance so girls don\'t to deal with scummy customers queuing out front. Always standing by this entrance is a <a href="exec:gt \'stwork\', \'guard\'">security guard</a> keeping the girls safe.');
  }
  // TODO-QSP: dynamic text: Near the exit door is a vending machine selling '+iif(func('money', 'can_afford'...
  scene.text('Near the exit door is a vending machine selling \'+iif(func(\'money\', \'can_afford\', 100) = 1, \'<a href="exec:gs \'money\', \'pay\', 100 & gt \'food\', \'snack\'">snacks</a>\', \'snacks\')+\' and a <a href="exec:gt \'beverage\', \'water\'">water cooler</a> which is used heavily by girls coming off stage.');
  scene.text('A wooden door leads to the <a href="exec:gt \'stwork\', \'toilet\'">staff bathroom</a>.');
  if (((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
    (s as any).stripKoef1 = Math.floor(Math.random() * 3) + 1;
  }
  if (((s as any).pcs_tattoos ?? 0)?.['back'] > 0) {
    (s as any).stripKoef2 = Math.floor(Math.random() * 3) + 1;
  }
  if (((s as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
    (s as any).stripKoef3 = Math.floor(Math.random() * 3) + 1;
  }
  if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    (s as any).stripKoef4 = Math.floor(Math.random() * 4) + 3;
  }
  if (((s as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
    (s as any).stripKoef5 = Math.floor(Math.random() * 3) + 1;
  }
  if (((s as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
    (s as any).stripKoef6 = Math.floor(Math.random() * 3) + 1;
  }
  if (((s as any).pcs_tattoos ?? 0)?.['side'] > 0) {
    (s as any).stripKoef7 = Math.floor(Math.random() * 3) + 1;
  }
  (s as any).stripKoef = ((s as any).stripKoef1 ?? 0) + ((s as any).stripKoef2 ?? 0) + ((s as any).stripKoef3 ?? 0) + ((s as any).stripKoef4 ?? 0) + ((s as any).stripKoef5 ?? 0) + ((s as any).stripKoef6 ?? 0) + ((s as any).stripKoef7 ?? 0);
  if (((s as any).countmoney ?? 0) === 1) {
    (s as any).countmoney = 0;
    qspCall(s, 'stwork', 'tipcalculator');
  }
  if (qspFunc(s, 'jobs', 'is_work_time', 'city_strip_stripper')) {
    qspCall(s, 'stwork', 'set_perform_acts');
  } else {
    if (((s as any).job_worked_count ?? 0)?.['city_strip_stripper'] >= 1) {
      qspCall(s, 'stwork', 'set_shift_over_act');
    } else {
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'start'] },
      ]);
    }
  }
  if (((s as any).hour ?? 0) < 3  ||  (((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) < 45)) {
    // TODO-QSP: act 'Take a break': gt 'stwork', 'rest'
  }
  if ((((s as any).hour ?? 0) < 3  ||  (((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) < 45))  &&  ((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    // TODO-QSP: act 'Take a smoke break': gt 'stwork', 'smoke_break'
  }
  scene.actions([
    { label: 'Go to the staff bathroom', goto: ['stwork', 'toilet'] },
    { label: 'Change your clothes', goto: ['wardrobe', 'start'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
    { label: 'Have a snack (0:15) [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: gs 'money', 'pay', 100 & gs 'food', 'snack'
    }
  } },
    { label: 'Have a cup of water (0:05)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water');
  } },
  ]);
  scene.build();
}

function enterSetSchedule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'this_week') {
    qspCall(s, 'stripclub_schedule', 'set_schedule');
  } else {
    qspCall(s, 'stripclub_schedule', 'next_week_set_schedule');
  }
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSetPerformActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).strip_club ?? 0)?.['lapdance_chance'] > 0) {
    (s as any).stpriv = ((s as any).stripKoef ?? 0) + (((s as any).pcs_apprnc ?? 0) / 3);
    if (((s as any).strip_club ?? 0)?.['lapdance_chance'] === 2) {
      (s as any).stprive = ((s as any).stprive ?? 0) + (20);
    }
    if (((s as any).stpriv ?? 0) > (Math.floor(Math.random() * 101) + 0)) {
      scene.text('One of the bouncers walks up and tells you that a customer is waiting for you in one of the private rooms.');
      scene.actions([
        { label: 'Perform a private dance', handler: (st: GameState) => {
    (s as any).strip_club['lapdance_chance'] = 0;
  }, goto: ['stwork2', 'privatdance'] },
      ]);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['cosmetics'] < 3  &&  ((s as any).pcs_makeup ?? 0) < 4) {
    scene.text('You don\'t have enough make-up to get ready.');
  } else {
    scene.actions([
      { label: 'Prepare for your show', handler: (st: GameState) => {
    if (((s as any).pcs_sweat ?? 0) >= 20  ||  (((s as any).pcs_leghair ?? 0) > 3  ||  ((((s as any).pcs_pubes ?? 0) > 3  &&  ((s as any).pubestyle ?? 0) === 1)  ||  (((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <=7)  &&  ((s as any).pcs_pubes ?? 0) > 11))) {
      qspCall(s, 'din_van', 'showerdin');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.text('<h3>Staff Bathroom</h3>');
      scene.text('<h5>Shower</h5>');
      scene.img('images/locations/shared/brothel/brothelshower.jpg');
      qspCall(s, 'din_van', 'brit');
      scene.text('After stripping from your clothes, you gather up your towel, washcloth and soap and head to the shower, where you thoroughly wash yourself.');
      if (((s as any).deodorant_on ?? 0) === 1) {
        qspCall(s, 'sweat', 'remove_deo');
        scene.text('<br>Your deodorant gets washed away in the shower.');
      }
    }
    if (((s as any).pcs_makeup ?? 0) < 4) {
      qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
      (s as any).mc_inventory['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (3);
      (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
      (s as any).pcs_makeup = 4;
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.text('You brush your hair and put on heavy makeup for the customers.');
    }
    (s as any).pcs_hairbsh = 1;
    scene.actions([
      { label: 'Go on stage', handler: (st: GameState) => {
    if (((s as any).pcs_leghair ?? 0) <= 3  &&  ((s as any).pcs_pubes ?? 0) <= 25) {
      scene.actions([{ label: 'Continue', goto: ['stwork2', 'strip_show_start'] }]);
    } else {
      scene.img('images/locations/city/redlight/stripclub/backstage.jpg');
      scene.text('You start climbing the steps to the stage when a shout from behind makes you stop.');
      scene.text('"You\'re gonna go on stage like that?"');
      scene.text('Turning, you see some of the other strippers snickering at you.');
      if (((s as any).pcs_leghair ?? 0) > 3  &&  ((s as any).pcs_pubes ?? 0) > 25) {
        scene.text('"Nobody wants to see a stripper with hairy legs and untrimmed pubes!" one of them laughs. "Have a shave before you go on stage!"');
      } else {
        scene.text('"Nobody wants to see a stripper with a jungle between her legs!" one of them laughs. "Have a shave before you go on stage!"');
        scene.text('"Nobody wants to see a stripper with hairy legs!" one of them laughs. "Have a shave before you go on stage!"');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterSetShiftOverAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Shift over', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'paycheck', 'city_strip_stripper');
    scene.img('images/locations/city/redlight/stripclub/viktor.jpg');
    scene.text('Your shift is over, so you prepare to leave for the night.');
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      if (((s as any).strip_club ?? 0)?.['guard_meet'] === 0) {
        scene.text('The muscular security guard stops you in your tracks. "You only need to be naked <i>inside</i> the club, girl! Get dressed before you leave."');
        scene.text('His eyes dart up and down as he checks you out.');
      } else {
        // TODO-QSP: dynamic text: Viktor grins as you approach. "Looking fine, <<$pcs_strippername>>! As much as I...
        scene.text(`Viktor grins as you approach. "Looking fine, ${((s as any).pcs_strippername ?? 0)}! As much as I hate to say it, you need to put your clothes on first."`);
        scene.text('His eyes dart up and down as he checks you out.');
      }
      return;
      scene.actions([
        { label: 'Return to dressing room', goto: ['stwork', 'start'] },
      ]);
    }
    if (((s as any).strip_club ?? 0)?.['guard_hookup'] === 0) {
      if (((s as any).strip_club ?? 0)?.['guard_meet'] === 0) {
        scene.text('The muscular security guard silently nods at you as you walk past, but you sense him checking you out as you leave.');
      } else {
        // TODO-QSP: dynamic text: Viktor grins as you approach. "Looking fine, <<$pcs_strippername>>!"
        scene.text(`Viktor grins as you approach. "Looking fine, ${((s as any).pcs_strippername ?? 0)}!"`);
        scene.text('You sense him checking you out as you leave.');
      }
      if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).fame ?? 0)?.['city_stripping'] >= 200) {
        scene.actions([
          { label: 'Leave', goto: ['stripclub', 'fan_approach'] },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', goto: ['stripclub', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Speak with Sasha about your job', goto: ['stripclub', 'manager_job_change'] },
      ]);
    } else {
      (s as any).strip_club['guard_hookup'] = 0;
      scene.text('You finish getting dressed and pack up your belongings before heading out the back door. Viktor is waiting for you outside.');
      if (((s as any).strip_club ?? 0)?.['guard_sex'] === 0) {
        scene.text('"I\'ve been looking forward to this. I want to know just what kind of minx you are!"');
        scene.text('You smile and give him a kiss. "Well, why don\'t we find out?"');
        scene.text('He wraps his arm around your waist and leads you to his car.');
      } else {
        scene.text('"Hey baby girl," he says as he firmly squeezes your ass. "You ready?"');
        scene.text('You smile and give him a kiss. "I\'ve been thinking about your cock all night…"');
        scene.text('He grins as he wraps his arm around your waist and leads you to his car.');
      }
      scene.actions([
        { label: 'Go with him', goto: ['viktor_sex', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterStripClothing(s: GameState, scene: SceneBuilder): void {
  (s as any).lastwornclothingtype['strip_club'] = ((s as any).clothingworntype ?? 0);
  (s as any).lastwornclothingnumber['strip_club'] = ((s as any).clothingwornnumber ?? 0);
  (s as any).lastwornpantytype['strip_club'] = ((s as any).pantyworntype ?? 0);
  (s as any).lastwornpantynumber['strip_club'] = ((s as any).pantywornnumber ?? 0);
  (s as any).lastwornbratype['strip_club'] = ((s as any).braworntype ?? 0);
  (s as any).lastwornbranumber['strip_club'] = ((s as any).brawornnumber ?? 0);
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    (s as any).strip_club['school_girl_outfit'] = 1;
  } else {
    (s as any).strip_club['school_girl_outfit'] = 0;
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    qspCall(s, 'clothing', 'strip');
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    qspCall(s, 'bras', 'remove');
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    qspCall(s, 'panties', 'remove');
  }
  scene.build();
}

function enterTipcalculator(s: GameState, scene: SceneBuilder): void {
  scene.text('You now have a chance to add up any tips you gained from your last show.');
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    (s as any).strip_club['strip_tips'] = ((s as any).strip_club['strip_tips'] ?? 0) + (((s as any).stripKoef ?? 0));
  }
  if (((s as any).strip_club ?? 0)?.['strip_tips'] < 25) {
    scene.text('Nobody even noticed you or your efforts on the stage and it\'s no surprise you got nothing for your efforts.');
  } else {
    scene.text('A few people looked at you, but you didn\'t receive a single tip.');
    if (((s as any).strip_club ?? 0)?.['strip_tips'] < 55) {
      scene.text('A few people looked at you, but you didn\'t receive any tips.');
    } else {
      if ((!(Math.floor(Math.random() * 6) + 0))) {
        scene.text('The customers were pleased with your performance, but not enough to tip you.');
      } else {
        (s as any).paymoneyrand = Math.floor(Math.random() * 71) + 30;
        qspCall(s, 'money', 'earn', ((s as any).paymoneyrand ?? 0));
        qspCall(s, 'mood', 'raise', 'tiny');
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: The customers were pleased with your performance. They gave you <<$func('money',...
        scene.text(`The customers were pleased with your performance. They gave you ${qspFunc(s, 'money', 'string_profit', ((s as any).paymoneyrand ?? 0))} in tips.`);
      }
      if (((s as any).strip_club ?? 0)?.['strip_tips'] < 90) {
        if ((!(Math.floor(Math.random() * 11) + 0))) {
          scene.text('The customers followed your movements between their conversations. You deserved some tips, but luck was against you and you got nothing.');
        } else {
          (s as any).paymoneyrand = ((s as any).rand ?? 0)(100, 2 * ((s as any).strip_club ?? 0)?.['strip_tips']);
          qspCall(s, 'money', 'earn', ((s as any).paymoneyrand ?? 0));
          qspCall(s, 'mood', 'raise', 'tiny');
          qspCall(s, 'stat', '');
          // TODO-QSP: dynamic text: The customers followed your movements between their conversations. After countin...
          scene.text(`The customers followed your movements between their conversations. After counting out your tips, it amounts to ${qspFunc(s, 'money', 'string_profit', ((s as any).paymoneyrand ?? 0))}.`);
        }
      } else {
        (s as any).paymoneyrand = ((s as any).rand ?? 0)(((s as any).strip_club ?? 0)?.['strip_tips'], 3 * ((s as any).strip_club ?? 0)?.['strip_tips']);
        (s as any).paymoneyrand = 0;
        qspCall(s, 'money', 'earn', ((s as any).paymoneyrand ?? 0));
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: The customers were mesmerized by your dancing and tipped you <<$func('money', 's...
        scene.text(`The customers were mesmerized by your dancing and tipped you ${qspFunc(s, 'money', 'string_profit', ((s as any).paymoneyrand ?? 0))}.`);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'set_schedule':
      enterSetSchedule(s, scene);
      break;
    case 'set_perform_acts':
      enterSetPerformActs(s, scene);
      break;
    case 'set_shift_over_act':
      enterSetShiftOverAct(s, scene);
      break;
    case 'strip_clothing':
      enterStripClothing(s, scene);
      break;
    case 'tipcalculator':
      enterTipcalculator(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const stwork: LocationDef = {
  name: 'stwork',
  title: 'Dressing Room',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
