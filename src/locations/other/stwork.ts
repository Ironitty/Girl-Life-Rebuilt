import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
  // TODO-QSP: end
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
    if (((s as any).locArgs?.[1] ?? 0) === 'next_week') {
      qspCall(s, 'stripclub_schedule', 'next_week_set_schedule');
    }
  }
  // TODO-QSP: end
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
    ((s as any).strip_club ?? {})['lapdance_chance'] = 0;
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
      ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (3);
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
        if (((s as any).pcs_pubes ?? 0) > 25) {
          scene.text('"Nobody wants to see a stripper with a jungle between her legs!" one of them laughs. "Have a shave before you go on stage!"');
        } else {
          scene.text('"Nobody wants to see a stripper with hairy legs!" one of them laughs. "Have a shave before you go on stage!"');
        }
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
  // TODO-QSP: end
  scene.build();
}

function enterSetShiftOverAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
      ((s as any).strip_club ?? {})['guard_hookup'] = 0;
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
  ((s as any).lastwornclothingtype ?? {})['strip_club'] = ((s as any).clothingworntype ?? 0);
  ((s as any).lastwornclothingnumber ?? {})['strip_club'] = ((s as any).clothingwornnumber ?? 0);
  ((s as any).lastwornpantytype ?? {})['strip_club'] = ((s as any).pantyworntype ?? 0);
  ((s as any).lastwornpantynumber ?? {})['strip_club'] = ((s as any).pantywornnumber ?? 0);
  ((s as any).lastwornbratype ?? {})['strip_club'] = ((s as any).braworntype ?? 0);
  ((s as any).lastwornbranumber ?? {})['strip_club'] = ((s as any).brawornnumber ?? 0);
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    ((s as any).strip_club ?? {})['school_girl_outfit'] = 1;
  } else {
    ((s as any).strip_club ?? {})['school_girl_outfit'] = 0;
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
  // TODO-QSP: end
  scene.build();
}

function enterTipcalculator(s: GameState, scene: SceneBuilder): void {
  scene.text('You now have a chance to add up any tips you gained from your last show.');
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    ((s as any).strip_club ?? {})['strip_tips'] = (((s as any).strip_club ?? {})['strip_tips'] ?? 0) + (((s as any).stripKoef ?? 0));
  }
  if (((s as any).strip_club ?? 0)?.['strip_tips'] < 25) {
    scene.text('Nobody even noticed you or your efforts on the stage and it\'s no surprise you got nothing for your efforts.');
  } else {
    if (((s as any).strip_club ?? 0)?.['strip_tips'] < 40) {
      scene.text('A few people looked at you, but you didn\'t receive a single tip.');
    } else {
      if (((s as any).strip_club ?? 0)?.['strip_tips'] < 55) {
        scene.text('A few people looked at you, but you didn\'t receive any tips.');
      } else {
        if (((s as any).strip_club ?? 0)?.['strip_tips'] < 70) {
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
        } else {
          if (((s as any).strip_club ?? 0)?.['strip_tips'] < 90) {
            if ((!(Math.floor(Math.random() * 11) + 0))) {
              scene.text('The customers followed your movements between their conversations. You deserved some tips, but luck was against you and you got nothing.');
            } else {
              (s as any).paymoneyrand = (Math.floor(Math.random() * (2 * ((s as any).strip_club ?? {})?.['strip_tips'] - 100 + 1)) + (100));
              qspCall(s, 'money', 'earn', ((s as any).paymoneyrand ?? 0));
              qspCall(s, 'mood', 'raise', 'tiny');
              qspCall(s, 'stat', '');
              // TODO-QSP: dynamic text: The customers followed your movements between their conversations. After countin...
              scene.text(`The customers followed your movements between their conversations. After counting out your tips, it amounts to ${qspFunc(s, 'money', 'string_profit', ((s as any).paymoneyrand ?? 0))}.`);
            }
          } else {
            (s as any).paymoneyrand = (Math.floor(Math.random() * (3 * ((s as any).strip_club ?? {})?.['strip_tips'] - ((s as any).strip_club ?? {})?.['strip_tips'] + 1)) + (((s as any).strip_club ?? {})?.['strip_tips']));
            (s as any).paymoneyrand = 0;
            qspCall(s, 'money', 'earn', ((s as any).paymoneyrand ?? 0));
            qspCall(s, 'mood', 'raise', 'small');
            qspCall(s, 'stat', '');
            // TODO-QSP: dynamic text: The customers were mesmerized by your dancing and tipped you <<$func('money', 's...
            scene.text(`The customers were mesmerized by your dancing and tipped you ${qspFunc(s, 'money', 'string_profit', ((s as any).paymoneyrand ?? 0))}.`);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStripgirl(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/backstage.jpg');
  scene.text('The girls are doing their makeup and hair while gossiping.');
  (s as any).temp_rand = Math.floor(Math.random() * 21) + 0;
  if (((s as any).temp_rand ?? 0) === 0  &&  ((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
    scene.text('"That Amber girl is always stealing the same weekend shifts! She\'s either beating us all to the board or is banging the boss. Probably both."');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      scene.text('"I\'m telling you, girls with tattoos are a <i>huge</i> turn-on for men!"');
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        scene.text('"I didn\'t make much money working the pole until I started working out and toning my ass. Now I make a fortune in tips!"');
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          scene.text('"The amount of money I spend on cosmetics would be enough to bankrupt me if I wasn\'t slutting it up to make extra tips."');
        } else {
          if (((s as any).temp_rand ?? 0) === 4) {
            scene.text('"Private dances might be guaranteed money, but the real cash is in the \'extra\' performance aftwerwards."');
          } else {
            if (((s as any).temp_rand ?? 0) === 5) {
              scene.text('"I remember how shy Azul was when she first got on stage. Poor thing got booed hard by the crowd, but as soon as she started working the pole, their jaws dropped and she made a fortune in tips!"');
            } else {
              if (((s as any).temp_rand ?? 0) === 6) {
                scene.text('"I think Emerald has a harder time putting her clothes <i>back on</i> than she does stripping them off! This really is her dream job!"');
              } else {
                if (((s as any).temp_rand ?? 0) === 7) {
                  scene.text('"The security guard at the back door is always checking me out. I wonder if he\'s interested in hooking up?"');
                } else {
                  if (((s as any).temp_rand ?? 0) === 8) {
                    scene.text('"Where did Amythest even come from? She just shows up one day and the boss expects us to work with her when we know absolutely nothing about her?"');
                  } else {
                    if (((s as any).temp_rand ?? 0) === 9) {
                      scene.text('"We had a comedian work here one time. She was a pretty little thing, and she danced well, but jokes don\'t earn you any tips here."');
                    } else {
                      if (((s as any).temp_rand ?? 0) === 10) {
                        scene.text('"I heard about clubs abroad where the tips are so good that the strippers pay for the right to work there."');
                      } else {
                        if (((s as any).temp_rand ?? 0) === 11) {
                          scene.text('"I\'m telling you, doing the occasional porn shoot on one of your days off is a great way to top up your income!"');
                        } else {
                          if (((s as any).temp_rand ?? 0) === 12) {
                            scene.text('"I got a bonus this week, but I wish he wouldn\'t make me swallow. It tastes icky."');
                          } else {
                            if (((s as any).temp_rand ?? 0) === 13) {
                              scene.text('"I caught Ruby snorting shit right here on the make-up table! Can she at least do it in the fucking bathroom?"');
                            } else {
                              if (((s as any).temp_rand ?? 0) === 14) {
                                scene.text('"Diamond needs to get some respect for herself. I saw her flirting with some old man, trying to sweet talk him into being her sugar daddy. Fucking perv was eating it all up."');
                              } else {
                                if (((s as any).temp_rand ?? 0) === 15) {
                                  scene.text('"I saw a guy basically salivating at Opal\'s huge tits while throwing all his money at her feet. Some girls have it fucking easy…"');
                                } else {
                                  if (((s as any).temp_rand ?? 0) === 16) {
                                    scene.text('"I was on a smoke break when I overheard some of the bouncers talking about how the boss is involved in some pretty shady smuggling operations. Like <i>really</i> shady."');
                                  } else {
                                    if (((s as any).temp_rand ?? 0) === 17) {
                                      scene.text('"Did you hear about the talent scout who always comes in here? I wonder what kind of work he\'s involved in if he\'s scouting girls in a strip club?"');
                                    } else {
                                      if (((s as any).temp_rand ?? 0) === 18) {
                                        scene.text('"I can see why Jade the bimbo didn\'t finish school. I swear that dimwitted brain of hers would forget how to breathe if it wasn\'t an automated bodily function!"');
                                      } else {
                                        if (((s as any).temp_rand ?? 0) === 19) {
                                          scene.text('"Why has that fat, sweaty perv who always feels you up during a dance not been banned yet? I have to shower <i>twice</i> after I\'m done with him."');
                                        } else {
                                          scene.text('"I heard one of the customers talking about how he found an old porn video and that the girl being fucked in it was Onyx!"');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['stwork', 'start'] },
  ]);
  scene.build();
}

function enterGuard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).strip_club ?? 0)?.['guard_meet'] === 0) {
    ((s as any).strip_club ?? {})['guard_meet'] = 1;
    scene.img('images/locations/city/redlight/stripclub/viktor.jpg');
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.text('Standing guard at the door is a bald man with a beard, a towering mountain of muscle who grins as you approach him.');
      scene.text('"Hey girl, I can\'t let you outside like that, even if you do look good naked," he jokes.');
      scene.actions([
        { label: 'Flirt with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).strip_club ?? {})['guard_flirt'] = 1;
    qspCall(s, 'stat', '');
    scene.text('You decide to play him at his own game.');
    scene.text('"Don\'t pretend you wouldn\'t enjoy chasing me. Catching my naked body would be your reward after all…" you joke with a smile while drawing attention to your breasts.');
    if (((s as any).tits ?? 0) >= 4) {
      scene.text('"Nice rack, babe. The sight of those puppies would make any man pay! I\'m Viktor by the way."');
    } else {
      scene.text('He grins at you while checking you out. No, I guess I wouldn\'t… I\'m Viktor by the way."');
    }
    // TODO-QSP: dynamic text: "<<$pcs_strippername>>," you smile. "I'd love to chat, but I need to get going."
    scene.text(`"${((s as any).pcs_strippername ?? 0)}," you smile. "I'd love to chat, but I need to get going."`);
    scene.text('"Come by any time," he replies with a smile.');
    scene.text('You can sense him checking you out as you walk away and decide to add a little sway to your hips.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
        { label: 'Chat with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You ignore his comment as you introduce yourself. "Hey, I'm <<$pcs_strippername>...
    scene.text(`You ignore his comment as you introduce yourself. "Hey, I'm ${((s as any).pcs_strippername ?? 0)}."`);
    scene.text('"Viktor," he replies. "The boss sure knows how to find the pretty ones…"');
    scene.text('"An ugly stripper wouldn\'t make much money now, would she?" you reply and he chuckles.');
    scene.text('"No, I guess she wouldn\'t. Don\'t let me hold you up, but come back any time," he says with a smile.');
    scene.text('You can sense him checking you out as you walk away, but choose to ignore it.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
        { label: 'Avoid him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You're creeped out by him, but manage to force an awkward smile at him. "Hey… I'...
    scene.text(`You're creeped out by him, but manage to force an awkward smile at him. "Hey… I'm ${((s as any).pcs_strippername ?? 0)}…"`);
    scene.text('"Viktor," he replies. "The boss sure knows how to find the pretty ones…"');
    scene.text('"Yeah, I guess he does… Sorry, but I need to get going."');
    scene.text('Come by any time," he replies.');
    scene.text('You can sense him checking you out as you walk away and quicken your pace.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.text('Standing guard at the door is a bald man with a beard, a towering mountain of muscle who grins as you approach him.');
      scene.text('"Hey girl. Aren\'t you looking fine?"');
      scene.actions([
        { label: 'Flirt with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).strip_club ?? {})['guard_flirt'] = 1;
    qspCall(s, 'stat', '');
    scene.text('"Oh? Like what you see?" you ask with a smile while turning to show him your ass.');
    scene.text('He grins at you while checking you out. Yeah, I guess I do… I\'m Viktor by the way."');
    // TODO-QSP: dynamic text: "<<$pcs_strippername>>," you smile. "I'd love to chat, but I need to get going."
    scene.text(`"${((s as any).pcs_strippername ?? 0)}," you smile. "I'd love to chat, but I need to get going."`);
    scene.text('"Come by any time," he replies with a smile.');
    scene.text('You can sense him checking you out as you walk away and decide to add a little sway to your hips.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
        { label: 'Chat with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You ignore his comment as you introduce yourself. "Hey, I'm <<$pcs_strippername>...
    scene.text(`You ignore his comment as you introduce yourself. "Hey, I'm ${((s as any).pcs_strippername ?? 0)}."`);
    scene.text('"Viktor," he replies. "The boss sure knows how to find the pretty ones."');
    scene.text('"An ugly stripper wouldn\'t make much money now, would she?" you reply and he chuckles.');
    scene.text('"No, I guess she wouldn\'t. Don\'t let me hold you up, but come back any time," he says with a smile.');
    scene.text('You can sense him checking you out as you walk away, but choose to ignore it.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
        { label: 'Avoid him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You're creeped out by him, but manage to force an awkward smile at him. "Hey… I'...
    scene.text(`You're creeped out by him, but manage to force an awkward smile at him. "Hey… I'm ${((s as any).pcs_strippername ?? 0)}…"`);
    scene.text('"Viktor," he replies. "The boss sure knows how to find the pretty ones…" He makes no effort to hide the fact that he\'s clearly undressing you with his eyes.');
    scene.text('"Yeah, I guess he does… Sorry, but I need to get going."');
    scene.text('Come by any time," he replies.');
    scene.text('You can sense him checking you out as you walk away and quicken your pace.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).strip_club ?? 0)?.['guard_flirt'] < 2) {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.img('images/locations/city/redlight/stripclub/viktor.jpg');
        // TODO-QSP: dynamic text: Viktor grins as you approach. "Hey <<$pcs_strippername>>. Looking as sexy as eve...
        scene.text(`Viktor grins as you approach. "Hey ${((s as any).pcs_strippername ?? 0)}. Looking as sexy as ever."`);
        if (((s as any).strip_club ?? 0)?.['guard_flirt'] === 0) {
          scene.actions([
            { label: 'Flirt with him', handler: (st: GameState) => {
    ((s as any).strip_club ?? {})['guard_flirt'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You decide that he isn\'t so bad after all and flirt with him.');
    scene.text('"Like what you see?" you ask with a smile as you jiggle your breasts.');
    if (((s as any).tits ?? 0) >= 4) {
      scene.text('"Nice rack, babe. The sight of those puppies would make any man pay! I\'m Viktor by the way."');
    } else {
      scene.text('He grins at you while checking you out. No, I guess I wouldn\'t… I\'m Viktor by the way."');
    }
    scene.text('You give him a quick smile before heading on your way.');
    scene.text('You can sense him checking you out as you walk away and decide to add a little sway to your hips.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).strip_club ?? 0)?.['guard_flirt'] === 1) {
            scene.actions([
              { label: 'Continue flirting with him', handler: (st: GameState) => {
    ((s as any).strip_club ?? {})['guard_flirt'] = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('He\'s pretty good looking for his age and you can tell he\'s interested in you, so you decide to have some fun with him. You turn and wiggle your naked ass at him.');
    scene.text('He grins at you while checking you out and you can\'t help but smile as you see a bulge clearly forming in his pants.');
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')  ||  qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
      scene.text('"Damn, that\'s a fine looking ass! No wonder the boss hired you."');
    }
    scene.text('You finish your show and turn back to face him. "Maybe I\'ll offer you something other than a simple tease next time…" you whisper seductively while placing your hand on his chest.');
    scene.text('All he does is grin as you wink at him before walking away, making sure to add some extra sway to your hips as you do.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Chat with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You keep things friendly with him and strike up a short conversation, even if he is distracted by your naked body.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
          { label: 'Continue to avoid him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You\'re still creeped out by him, which he seems to have picked up on since he just gives you a halfhearted nod as you walk past.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.img('images/locations/city/redlight/stripclub/viktor.jpg');
        // TODO-QSP: dynamic text: Viktor grins as you approach. "Hey <<$pcs_strippername>>. Looking as sexy as eve...
        scene.text(`Viktor grins as you approach. "Hey ${((s as any).pcs_strippername ?? 0)}. Looking as sexy as ever."`);
        if (((s as any).strip_club ?? 0)?.['guard_flirt'] === 0) {
          scene.actions([
            { label: 'Flirt with him', handler: (st: GameState) => {
    ((s as any).strip_club ?? {})['guard_flirt'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You decide that he isn\'t so bad after all and flirt with him.');
    scene.text('"Like what you see?" you ask with a smile as you draw attention to your breasts.');
    if (((s as any).tits ?? 0) >= 4) {
      scene.text('"Nice rack, babe. The sight of those puppies would make any man pay! I\'m Viktor by the way."');
    } else {
      scene.text('He grins at you while checking you out. No, I guess I wouldn\'t… I\'m Viktor by the way."');
    }
    scene.text('You give him a quick smile before heading on your way. You can sense him checking you out as you walk away and decide to add a little sway to your hips.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).strip_club ?? 0)?.['guard_flirt'] === 1) {
            scene.actions([
              { label: 'Continue flirting with him', handler: (st: GameState) => {
    ((s as any).strip_club ?? {})['guard_flirt'] = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('He\'s pretty good looking for his age and you can tell he\'s interested in you, so you decide to have some fun with him. You turn and wiggle your ass at him.');
    scene.text('He grins at you while checking you out and you can\'t help but smile as you see a bulge clearly forming in his pants.');
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')  ||  qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
      scene.text('"Damn, that\'s a fine looking ass! No wonder the boss hired you."');
    }
    scene.text('You finish your show and turn back to face him. "Maybe I\'ll offer you something other than a simple tease next time…" you whisper seductively while placing your hand on his chest.');
    scene.text('All he does is grin as you wink at him before walking away, making sure to add some extra sway to your hips as you do.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Chat with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You keep things friendly with him and strike up a short conversation.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
          { label: 'Continue avoiding him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You\'re still creeped out by him, which he seems to have picked up on since he just gives you a halfhearted nod as you walk past.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).strip_club ?? 0)?.['guard_sex'] === 0) {
        scene.img('images/locations/city/redlight/stripclub/viktor.jpg');
        // TODO-QSP: dynamic text: Viktor grins as you approach. "Hey <<$pcs_strippername>>. Looking as sexy as eve...
        scene.text(`Viktor grins as you approach. "Hey ${((s as any).pcs_strippername ?? 0)}. Looking as sexy as ever."`);
        if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).stat ?? 0)?.['vaginal'] === 0) {
          (s as any).minut = ((s as any).minut ?? 0) + 2;
          ((s as any).strip_club ?? {})['guard_flirt'] = (-1);
          qspCall(s, 'stat', '');
          scene.text('You place your hand on his chest and lean in close to him.');
          scene.text('"You want a piece of this ass, don\'t you?" you whisper.');
          scene.text('To your surprise, he removes your hand. "I need you to be honest with me. Are you still a virgin?"');
          scene.text('"Wha..? Yes, but why does that matter? We can do anal," you say in response, which causes him to chuckle.');
          scene.text('"I don\'t do anal, girl. I like giving sluts a good pounding in the proper hole, and your delicate little virgin pussy won\'t do."');
          scene.text('You\'re about to protest, but he shuts you down. "You\'re not my type, cherry pie, so it\'s best if we just stop this little game."');
          scene.text('You just nod and silently walk away as he chuckles to himself. "A fucking virgin stripper…"');
          return;
          scene.actions([
            { label: 'Move away', goto: ['stwork', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Take him home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).week ?? 0) === 5  &&  ((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
      scene.text('You just smile at him. You know what you want and you\'re going to get it. You place your hand on his chest and lean in close to him.');
      scene.text('"You like me, I like you. So why don\'t you take me home and ravage me like the little slut that I am?" you whisper while brushing your hand across his crotch.');
      // TODO-QSP: dynamic text: He smiles before he removes your hand. "Sorry <<$pcs_strippername>>, but I've al...
      scene.text(`He smiles before he removes your hand. "Sorry ${((s as any).pcs_strippername ?? 0)}, but I've already got a girl I'm taking home tonight."`);
      scene.text('"Oh…" you reply. "Never mind then."');
      scene.actions([
        { label: 'Move away', goto: ['stwork', 'start'] },
      ]);
    } else {
      ((s as any).strip_club ?? {})['guard_hookup'] = 1;
      scene.text('You just smile at him. You know what you want and you\'re going to get it. You place your hand on his chest and lean in close to him.');
      scene.text('"You like me, I like you. So why don\'t you take me home and ravage me like the little slut that I am?" you whisper while brushing your hand across his crotch.');
      scene.text('In response, he grabs your ass cheek and firmly squeezes it in his hand. "You won\'t be able to walk for a week when I\'m done with you!"');
      scene.text('You giggle. "I look forward to it." You then head on your way, feeling a little excited about what\'s to come.');
      scene.actions([
        { label: 'Move away', goto: ['stwork', 'start'] },
      ]);
    }
  } },
          { label: 'Not tonight', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('As much as you want it to happen, now doesn\'t feel like the best time to hook up with him, so you just continue flirting with him, advances that are eagerly reciprocated.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Take him home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You\'re feeling rather horny tonight, and Viktor is a good way to scratch that itch…');
    scene.text('Without hesitation, you walk up and rub your hand against his crotch. "Your little whore could do with a good pounding later…"');
    if (((s as any).week ?? 0) === 5  &&  ((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
      // TODO-QSP: dynamic text: He smiles before he removes your hand. "Sorry <<$pcs_strippername>>, but I've al...
      scene.text(`He smiles before he removes your hand. "Sorry ${((s as any).pcs_strippername ?? 0)}, but I've already got a girl I'm taking home tonight."`);
      scene.text('"Oh…" you reply. "Never mind then."');
      scene.actions([
        { label: 'Move away', goto: ['stwork', 'start'] },
      ]);
    } else {
      ((s as any).strip_club ?? {})['guard_hookup'] = 1;
      scene.text('His hand caresses your back. "Then I\'ll be sure to take good care of you then, baby girl."');
      scene.text('You give him a quick kiss and he slaps your ass before you head on your way.');
      scene.actions([
        { label: 'Move away', goto: ['stwork', 'start'] },
      ]);
    }
  } },
          { label: 'Not tonight', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('As much as the thought of hooking up with Viktor turns you on, tonight isn\'t the best night for it, so you just flirt with him instead.');
    scene.actions([
      { label: 'Move away', goto: ['stwork', 'start'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/bathroom/toilet.jpg');
  scene.text('You enter the staff bathroom that contains a single shower, a toilet stall and a wash basin.');
  // TODO-QSP: dynamic text: Your razor will last <b><<mc_inventory['razor']>></b> more ' + iif(mc_inventory[...
  scene.text(`Your razor will last <b>${((s as any).mc_inventory ?? 0)?.['razor']}</b> more ' + iif(mc_inventory['razor'] = 1, 'shave', 'shaves') + '. <a href="exec:gs 'din_van', 'shave_options'">Shave Options</a>`);
  qspCall(s, 'din_van', 'brit');
  qspCall(s, 'din_van', 'toymanage');
  qspCall(s, 'din_van', 'enema');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  qspCall(s, 'din_van', 'prvt_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the bathroom', goto: ['stwork', 'start'] },
    { label: 'Have a shower', handler: (st: GameState) => {
    qspCall(s, 'din_van', 'showerdin');
    scene.text('<h3>Staff Bathroom</h3>');
    scene.text('<h5>Shower</h5>');
    scene.img('images/locations/shared/brothel/brothelshower.jpg');
    scene.text('After stripping from your clothes, you enter the shower, where you thoroughly wash yourself.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'din_van', 'brit');
    scene.actions([
      { label: 'Get out and dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'schedule', 'A23');
  scene.text('You take a seat to recharge before going back out to the club.');
  if ((Math.floor(Math.random() * 9) + 0) === 0  &&  ((s as any).locat ?? 0)?.['A23'] === 22) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 0) {
      ((s as any).AlbinaQW ?? {})['working_stripclub'] = 1;
      scene.text('A brunette girl wearing a tight silver corset with matching thong is sitting at one of the mirrors touching up her heavy layer of makeup. You don\'t think you\'ve seen her before, so you walk over to introduce yourself.');
      if ((((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')  &&  ((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0) {
        scene.text('"Hey, I\'m-" you start, but stop when the girl turns to look at you. You don\'t recognize her, but the look on her face tells you that she seems to know you.');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>?!" she exclaims. "You're the last person I expected to see he...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}?!" she exclaims. "You're the last person I expected to see here!"`);
        scene.text('"Surprise..." you weakly reply, not entirely sure who this girl is...');
        scene.text('"Well, I guess if you stay out of my way, then I can stay out of yours," she says before she turns back to finish getting ready. You hear her muttering something under her breath, but can\'t make out what she\'s saying.');
      } else {
        scene.text('"Hey, I\'m-" you start, but stop when the girl turns to look at you. It\'s Albina!');
        if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
          scene.text('You see the flash of recognition in her eyes and she quickly stands and pulls you over to a more secluded spot.');
          scene.text('"<i>Albina</i>?!" you blurt out and she quickly shushes you.');
          scene.text('"Don\'t call me that! In here, I\'m known as Amber."');
          // TODO-QSP: dynamic text: "I'm <<$pcs_strippername>>," you reply.
          scene.text(`"I'm ${((s as any).pcs_strippername ?? 0)}," you reply.`);
          // TODO-QSP: dynamic text: She smiles. "Looks like we're going to be collegues from now on. I should finish...
          scene.text(`She smiles. "Looks like we're going to be collegues from now on. I should finish getting ready for my performance. See you around... ${((s as any).pcs_strippername ?? 0)}."`);
          scene.text('She winks at you before turning back to finish her makeup.');
          scene.actions([
            { label: 'Continue', goto: ['stwork', 'start'] },
          ]);
        } else {
          scene.text('You see the flash of recognition in her eyes before she roughly drags you over to a more secluded spot.');
          // TODO-QSP: dynamic text: "I'll be quick here <<$pcs_nickname>>, or whatever you call yourself here. I don...
          scene.text(`"I'll be quick here ${((s as any).pcs_nickname ?? 0)}, or whatever you call yourself here. I don't want to work with you and you won't want to work with me, so just stay out of my way and I'll stay out of yours, yeah?"`);
          scene.text('She doesn\'t wait for an answer as she turns back to finish getting ready. You hear her muttering something under her breath, but can\'t make out what she\'s saying.');
          scene.actions([
            { label: 'Continue', goto: ['stwork', 'start'] },
          ]);
        }
      }
    } else {
      scene.text('A scantily-clad Albina is sitting at one of the mirrors touching up her heavy layer of makeup.');
      if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
        scene.text('She smiles when she sees you and invites you to sit and chat with her as she finishes getting ready.');
        scene.text('Once her makeup is ready, she adjusts her corset and gives her hair a small ruffle before bidding you farewell and strutting out of the room.');
      } else {
        scene.text('She just glares at you and turns her attention back to the mirror. Finishing her makeup, she adjusts her corset and gives her hair a small ruffle before strutting out of the room.');
      }
      scene.actions([
        { label: 'Continue', goto: ['stwork', 'start'] },
      ]);
    }
  } else {
    if ((Math.floor(Math.random() * 9) + 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/redlight/stripclub/snort.mp4');
      if (((s as any).strip_club ?? 0)?.['seen_ruby_drugs'] === 0  ||  ((s as any).strip_club ?? 0)?.['seen_ruby_sex'] === 0) {
        ((s as any).strip_club ?? {})['seen_ruby_drugs'] = 1;
        scene.text('You see a red haired girl in a fishnet bodysuit sitting at one of the mirrors. She looks a little jumpy as she rolls up a ruble bill before she suddenly leans over and snorts what you assume to be drugs up her nose. She blissfully slumps back in her chair before she spots you in the mirror.');
        scene.text('"The fuck are you looking at, bitch?! Mind your own fucking business!" she snarls before she shoves you aside and struts out of the room.');
        scene.text('That must have been Ruby. You\'ve heard the other strippers talking about her having a serious drug problem.');
        scene.actions([
          { label: 'Continue', goto: ['stwork', 'start'] },
        ]);
      } else {
        scene.text('You catch Ruby preparing a line of cocaine on the table in front of her before she quickly snorts it and slumps back in her chair in a stupor.');
        scene.text('You just shake your head before leaving her to it.');
        scene.actions([
          { label: 'Continue', goto: ['stwork', 'start'] },
        ]);
      }
    } else {
      if ((Math.floor(Math.random() * 9) + 0) === 2) {
        (s as any).minut = ((s as any).minut ?? 0) + 2;
        qspCall(s, 'stat', '');
        scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
        if (((s as any).strip_club ?? 0)?.['jade_intro'] === 0) {
          ((s as any).strip_club ?? {})['jade_intro'] = 1;
          scene.text('You see a buxom blonde sitting at one of the mirrors... entirely naked. She excitedly bounces in her seat as she admires her jiggling breasts. Given the way they openly defy gravity, they must be fake.');
          scene.text('You\'ve heard the other strippers mention a girl called "Jade", a dimwitted, big boobed blonde they all call a bimbo. This must be her.');
          scene.text('"Oh hi!" she chirps. "You\'re the new girl!"');
          // TODO-QSP: dynamic text: "Yeah, I'm <<$pcs_strippername>>," you reply. "You must be Jade, right?"
          scene.text(`"Yeah, I'm ${((s as any).pcs_strippername ?? 0)}," you reply. "You must be Jade, right?"`);
          // TODO-QSP: dynamic text: "That's me!" she squeals. "Do you like my boobies, <<$pcs_strippername>>? I had ...
          scene.text(`"That's me!" she squeals. "Do you like my boobies, ${((s as any).pcs_strippername ?? 0)}? I had them made bigger so I could make as much money as Opal does!"`);
          scene.text('"Yeah, they\'re... something..." you reply.');
          scene.text('"I know!" she chirps. "The other girls are <i>sooo</i> jelly of all the money my boobies make me now! Wait a minute, I\'m <i>naked</i>! Where are my clothes?!" she squeals as she jumps out of her seat.');
          scene.text('Before you can say anything, she starts tapping her chin, looking like she\'s actually making a concentrated effort to form a thought.');
          scene.text('"Think, think, think..." she ponders aloud. "Oh I know! I left them in the shower! At least I think I did..." she says before she quickly dashes off, leaving you behind.');
          scene.text('She <i>really is</i> as dimwitted as they say...');
          scene.actions([
            { label: 'Continue', goto: ['stwork', 'start'] },
          ]);
        } else {
          scene.text('You spot Jade sitting at the mirrors, giggling as she plays with her breasts.');
          // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>!" she says excitedly when she spots you.
          scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}!" she says excitedly when she spots you.`);
          scene.text('"Hey Jade," you reply. "Having fun?"');
          scene.text('"Yeah!" she chirps. "I just danced for a man who gave me money because I used my boobies to make him feel good! They got all sticky when he was done, so he gave me even more money to lick it all up!"');
          scene.text('"Oh. Right..." you frown. "At least you had fun."');
          scene.text('"It tasted funny, but I got <i>all</i> this money for it!" she smiles and shows you the stack of cash before happily skipping away.');
          scene.text('She got all that money for a titfuck?!');
          scene.actions([
            { label: 'Continue', goto: ['stwork', 'start'] },
          ]);
        }
      } else {
        if ((Math.floor(Math.random() * 9) + 0) === 3) {
          (s as any).minut = ((s as any).minut ?? 0) + 2;
          qspCall(s, 'stat', '');
          scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
          if (((s as any).strip_club ?? 0)?.['onyx_intro'] === 0) {
            ((s as any).strip_club ?? {})['onyx_intro'] = 1;
            scene.text('Your attention is drawn to one of the strippers sitting at the mirrors, her raven black hair, fashioned into bangs, contrasting with her blue eyes and pale skin. She\'s wearing an elegant black lace corset, complete with matching thong, an outfit which accents her long, slender legs.');
            scene.text('She\'s singing to herself as she touches up her makeup, her voice almost angelic as you notice the treble clef tattoo on her shoulder.');
            scene.text('Seemingly hearing you behind her, she turns to face you.');
            scene.text('"You\'re the new girl, yes?" she asks as her eyes linger on your face, as if memorizing you.');
            // TODO-QSP: dynamic text: "Yes, I'm <<$pcs_strippername>>," you reply.
            scene.text(`"Yes, I'm ${((s as any).pcs_strippername ?? 0)}," you reply.`);
            scene.text('"Onyx," she replies. "I guess I\'ll be seeing you around, new girl," she says before she gets up and seductively struts away with what can only be years of practiced experience.');
            scene.actions([
              { label: 'Continue', goto: ['stwork', 'start'] },
            ]);
          } else {
            scene.text('You spot Onyx at the mirrors, singing to herself as she adjusts her black lace outfit.');
            // TODO-QSP: dynamic text: "Hey <<$pcs_strippername>>," she says when she sees you. "Can I help you?"
            scene.text(`"Hey ${((s as any).pcs_strippername ?? 0)}," she says when she sees you. "Can I help you?"`);
            scene.actions([
              { label: 'Talk about the job', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
    scene.text('"I was just wanting to talk shop if you were okay with that?" you reply.');
    // TODO-QSP: dynamic text: "Ah. Are you enjoying the job then, <<$pcs_strippername>>?" she asks.
    scene.text(`"Ah. Are you enjoying the job then, ${((s as any).pcs_strippername ?? 0)}?" she asks.`);
    scene.text('"I am," you smile. "Do you have any advice? I know you\'ve been doing this longer than the other girls."');
    scene.text('"I guess I have," she smirks. "The best advice I can give you? Don\'t date a customer. It\'s cool if you want to fuck them, but just make it a one night stand and move on. Even just being fuckbuddies can be awkward."');
    scene.text('"Speaking from experience?" you ask and she scoffs.');
    scene.text('"Yeah. I made the mistake of dating this loser I hooked up with after a shift one night. He knew what he was getting into dating a stripper, but still ended up getting jealous and insecure about me \'acting like a slut\' around other guys. When he tried forcing me to quit my job, I said \'fuck that\' and dumped his sorry ass faster than a two pump chump."');
    scene.text('She grins at you via the mirror. "That would be my main piece of advice. I would also tell you that these losers <i>love</i> feeling like they\'re special, so don\'t be scared to slut it up a little during a private dance if it means earning more money from them. Maybe also learn a few self-defense techniques to put them in their place when they get too hands on with you."');
    scene.text('"Anyway, I should get back to it," she says as she gets up and seductively struts out of the room, leaving you behind.');
    scene.actions([
      { label: 'Continue', goto: ['stwork', 'start'] },
    ]);
  } },
              { label: 'Ask about her singing', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
    scene.text('"You have an amazing voice," you reply. "Have you ever considered a singing career?"');
    scene.text('A look you can\'t quite place appears on her face. "I did, but it was never a career I could make money out of, so here I am."');
    scene.text('"Well, I think you would have made a great singer," you tell her, causing a small smile to creep onto her crimson lips.');
    // TODO-QSP: dynamic text: "Oh. Thanks, <<$pcs_strippername>>. I should get back out there. This money make...
    scene.text(`"Oh. Thanks, ${((s as any).pcs_strippername ?? 0)}. I should get back out there. This money maker won't be making me any money if I'm not shaking it!"`);
    scene.text('She stands up and seductively struts out of the room, leaving you behind.');
    scene.actions([
      { label: 'Continue', goto: ['stwork', 'start'] },
    ]);
  } },
            ]);
          }
        } else {
          if ((Math.floor(Math.random() * 9) + 0) === 4) {
            (s as any).minut = ((s as any).minut ?? 0) + 2;
            qspCall(s, 'stat', '');
            scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
            if (((s as any).strip_club ?? 0)?.['emerald_intro'] === 0) {
              ((s as any).strip_club ?? {})['emerald_intro'] = 1;
              scene.text('You see a blonde girl with striking green eyes sitting at one of the mirrors fixing up her hair. Her pink string bikini outfit, if you can even call it that, is so extremely skimpy and offers such little coverage that she might as well be naked.');
              scene.text('When she finishes ruffling her hair, she runs her hands down her tight body, drawing your attention to the large tattoo of an intricately designed rose on her thigh.');
              scene.text('"Oh," she says when she spots you. "Enjoying the show? I can strip for you right now if you want to see more..."');
              scene.text('"What?" you ask. "Aren\'t you supposed to do that for the customers out there?"');
              scene.text('"Yeah, but I fucking <i>love</i> showing off. I would go literally everywhere in the nude if it was legal, but I can settle for the nude beach. Getting a full tan <i>and</i> showing off is a win-win!"');
              scene.text('She can\'t help but smile at your reaction. "I\'m Emerald."');
              // TODO-QSP: dynamic text: "<<$pcs_strippername>>," you reply.
              scene.text(`"${((s as any).pcs_strippername ?? 0)}," you reply.`);
              scene.text('"Cool," she says as she stands up. "I\'d love to chat, but I <i>really</i> need to get out there and perform!"');
              scene.text('You just smile as she dashes past and back out into the club.');
              scene.actions([
                { label: 'Continue', goto: ['stwork', 'start'] },
              ]);
            } else {
              scene.text('You spot Emerald sitting at the mirrors topless as she touches up her makeup.');
              // TODO-QSP: dynamic text: "Hey <<$pcs_strippername>>," she smiles when she sees you, showing off her breas...
              scene.text(`"Hey ${((s as any).pcs_strippername ?? 0)}," she smiles when she sees you, showing off her breasts as she turns to face you. It's at this point that you notice that her nipples are pierced.`);
              scene.text('"I just got back from a private dance and was just freshening up," she says as she turns back to the mirror.');
              scene.text('"I think you were just looking for an excuse to keep your tits out longer," you reply with a laugh. "You really do like being naked, don\'t you?"');
              scene.text('"My sister would tell you I have a problem and that I should be worried about perverts because I like to walk around naked at home, but it\'s just us two and my cat in her apartment, a <i>top floor</i> apartment I might add, so any pervs that could see me <i>deserve</i> to if you ask me!"');
              scene.text('You just smile and the two of you end up chatting about what it\'s like to be a stripper and how she enjoys being paid to get naked and show off her body before she finishes her makeup, puts her skimpy bikini top back on, and struts out of the room with a flirty smile directed your way.');
              scene.actions([
                { label: 'Continue', goto: ['stwork', 'start'] },
              ]);
            }
          } else {
            if ((Math.floor(Math.random() * 9) + 0) === 5) {
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              qspCall(s, 'stat', '');
              scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
              if (((s as any).strip_club ?? 0)?.['amythest_intro'] === 0) {
                ((s as any).strip_club ?? {})['amythest_intro'] = 1;
                scene.text('You see a petite girl with deeply tanned skin sitting at the mirrors, carefully tying a few locks of her dark brown hair into a small braid. She\'s wearing a gold thong bikini and you can\'t help but admire the intricate tattoos covering her hands.');
                // TODO-QSP: dynamic text: "Hi, I don't think we've met," you smile as you approach. "I'm <<$pcs_stripperna...
                scene.text(`"Hi, I don't think we've met," you smile as you approach. "I'm ${((s as any).pcs_strippername ?? 0)}."`);
                scene.text('She jumps a little in surprise, but offers you a small smile. "Oh. Hi. Hello. I\'m... Amythest," she replies, speaking slowly and choosing her words carefully, as if still learning the language.');
                scene.text('"I didn\'t mean to scare you," you smile. "I just wanted to say hi because you look... different from the other girls. I like your tattoos by the way."');
                scene.text('"Oh. Thank... Thank you! They are called... henna tattoos. I learned to do them... back home," she says, once again slowly and carefully choosing her words.');
                scene.text('"So you <i>aren\'t</i> from here," you reply. "If you don\'t mind me asking, what made you come to Russia? And why work in a strip club?"');
                scene.text('She quickly stands up. "So- Sorry, but have to go!"');
                scene.text('She dashes out of the room, leaving you behind feeling rather confused.');
                scene.actions([
                  { label: 'Continue', goto: ['stwork', 'start'] },
                ]);
              } else {
                if (((s as any).strip_club ?? 0)?.['amythest_convo'] === 0) {
                  ((s as any).strip_club ?? {})['amythest_convo'] = 1;
                  scene.text('You see Amythest sitting at the mirrors, touching up the henna tattoos on her hands.');
                  scene.text('"Hi Amythest," you smile as you approach. "I\'ve said it before, but your tattoos are so cool!"');
                  scene.text('A small smile appears on her lips. "Mr. Grinevsky think they look... Oh, what is word? <i>Sexy</i>, so I make sure they always look good for customer."');
                  scene.text('"Mr. Grinevsky?" you ask. "Who\'s that?"');
                  scene.text('"Man who owns club? He is reason I am here and not working as..." she says before cutting herself off. "I say too much. Main thing is I owe life to Mr. Grinevsky- uhh... <i>Sasha</i>, so I make him happy so I can keep job here and not be cheap whore. Oh, I say too much again!"');
                  scene.text('She quickly stands up and dashes out of the room before you can question her further. Why did it sound like she\'s caught up in something bad involving the club owner?');
                  scene.actions([
                    { label: 'Continue', goto: ['stwork', 'start'] },
                  ]);
                } else {
                  if (((s as any).strip_club ?? 0)?.['amythest_convo'] === 1) {
                    ((s as any).strip_club ?? {})['amythest_convo'] = 2;
                    scene.text('You see Amythest sitting at the mirrors as she applies some makeup.');
                    scene.text('"Hey Amythest," you smile. "How are you doing?"');
                    scene.text('She flinches a little when she sees you. "Mr. Grinevsky tell me not talk to you! He think you asking too many questions!"');
                    scene.text('"What?" you reply in confusion. "I only asked about your tattoos and why you came to Russia."');
                    scene.text('"And he say I not allowed to tell you! Or anyone! He punish me for saying too much, so I need to be good girl and work harder to fix stupid mistake! I need go now."');
                    scene.text('As she gets up and dashes away, you can\'t help but notice that she\'s wearing a <i>far<i/> heavier layer of make-up than you\'ve previously seen her wearing, as if trying to cover something up...');
                    scene.actions([
                      { label: 'Continue', goto: ['stwork', 'start'] },
                    ]);
                  } else {
                    scene.text('You see Amythest sitting at the mirrors, but she panics and quickly dashes away before you can even approach her.');
                    scene.text('You wonder what could have happened to her if she\'s too scared to even look at you.');
                    scene.actions([
                      { label: 'Continue', goto: ['stwork', 'start'] },
                    ]);
                  }
                }
              }
            } else {
              if ((Math.floor(Math.random() * 9) + 0) === 6) {
                (s as any).minut = ((s as any).minut ?? 0) + 2;
                qspCall(s, 'stat', '');
                scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
                if (((s as any).strip_club ?? 0)?.['diamond_intro'] === 0) {
                  ((s as any).strip_club ?? {})['diamond_intro'] = 1;
                  scene.text('You spot a girl with platinum blonde hair and icy blue eyes sitting at one of the mirrors, applying what you think is moisturizer and other lotions to her skin. She\'s dressed in an exquisite, yet delicate looking set of sexy white lingerie.');
                  scene.text('"So you\'re the new girl, huh?" she asks as she turns to look you and down. "What name did they give you?"');
                  // TODO-QSP: dynamic text: "<<$pcs_strippername>>," you reply. "And you are?"
                  scene.text(`"${((s as any).pcs_strippername ?? 0)}," you reply. "And you are?"`);
                  scene.text('"Diamond," she states. "And I shine bright like one, so just stay in your lane and don\'t try to outshine me in front of the clients. They\'re looking for <i>entertainment</i> from an <i>exotic dancer</i>, not some cheap skank shaking her saggy tits in their face!"');
                  scene.text('Before you can even reply to her barbed comment, she stands up and brushes past you on her way out of the room.');
                  scene.text('As she struts away, you notice that not only does she have a rather nice looking ass, but also has a tattoo of a diamond on her left cheek.');
                  scene.actions([
                    { label: 'Continue', goto: ['stwork', 'start'] },
                  ]);
                } else {
                  scene.text('You spot Diamond sitting at the mirrors, seemingly doing nothing but checking herself out, looking very pleased with her appearance.');
                  scene.text('"Hey Diamond!" you smile as you approach.');
                  scene.text('"What do <i>you</i> want?" she scowls. "I need to prepare myself for my clients."');
                  scene.text('"I\'ve heard you like to attract a more... mature audience," you reply.');
                  scene.text('"A word of advice, honey?" she scoffs. "Don\'t listen to those jealous skanks when they tell you that I \'gargle old man balls for money.\' They just want what I have, but lack the looks and the charm to <i>earn</i> it."');
                  scene.text('"I never said you did," you reply as you try to block the mental image forming in your head. "And what exactly is it your charming looks \'earn\' you?"');
                  scene.text('"The attention of gentlemen who treat me like a princess because I <i>deserve</i> to be treated like one. Those cunts out there <i>wish</i> they had the sophistication to attract that kind of man."');
                  scene.actions([
                    { label: 'Mock her', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
    scene.text('"Yeah, I can <i>feel</i> the \'sophistication\' just <i>radiating</i> from you!" you laugh. "What sugar daddy, sorry, what <i>gentleman</i>\'s balls did you gargle on like a cheap slut so he would buy you that tacky lingerie?"');
    scene.text('"Oh look, another jealous skank with no ambition beyond shaking her tits for whatever minuscule amount of money is offered to you. I wouldn\'t expect any less from the likes of <i>you.</i>"');
    scene.text('"Oh I see. You done <i>more</i> than just suck that shrivelled old man dick!" you smirk. "Did he have a heart attack when you let him fuck you?"');
    scene.text('"Fuck off, bitch! You don\'t know anything about me!" she fumes as she gets up and stomps away.');
    scene.actions([
      { label: 'Continue', goto: ['stwork', 'start'] },
    ]);
  } },
                    { label: 'Whatever', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
    scene.text('"If you say so..." you mumble.');
    scene.text('"I wouldn\'t expect a cheap skank to understand anyway," she says as she returns her attention to the mirror.');
    scene.text('"Whatever," you scoff before deciding to leave her to it.');
    scene.actions([
      { label: 'Continue', goto: ['stwork', 'start'] },
    ]);
  } },
                  ]);
                }
              } else {
                if ((Math.floor(Math.random() * 9) + 0) === 7) {
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
                  if (((s as any).strip_club ?? 0)?.['azul_intro'] === 0) {
                    ((s as any).strip_club ?? {})['azul_intro'] = 1;
                    scene.text('You spot a brunette girl dressed as a slutty schoolgirl sitting at the mirrors touching up her makeup before she pulls out a book and... starts reading? As you approach, you notice that her eyes are different colors.');
                    // TODO-QSP: dynamic text: "Oh. Hi..." you stutter. "I'm <<$pcs_strippername>>."
                    scene.text(`"Oh. Hi..." you stutter. "I'm ${((s as any).pcs_strippername ?? 0)}."`);
                    scene.text('"Azul," she replies as she looks up from her book. "If you\'re wondering why my eyes look weird, it\'s because I have heterochromia."');
                    scene.text('"I never said they did!" you quickly reply while avoiding her gaze. "Uhh... What are you doing?"');
                    scene.text('"I... I like to read poetry," she blushes. "I know it sounds weird, but it helps me relax and the artistic nature of it always serves to remind me of my goal."');
                    scene.text('"And what\'s that?" you ask.');
                    scene.text('"To make enough money to go to art school so I can get a proper job and support myself without having to do... <i>this.</i> It\'s a great source of income, but I feel like I\'m destined to do better things, you know?"');
                    scene.text('You smile. "That\'s cool. I\'ll leave you to read in peace."');
                    scene.text('She nods before returning her attention to her book as you walk away.');
                    scene.actions([
                      { label: 'Continue', goto: ['stwork', 'start'] },
                    ]);
                  } else {
                    scene.text('You spot Azul sitting at the mirror, brushing her hair before she pulls out a book of some kind and starts sketching.');
                    scene.text('"You draw?" you ask as you approach.');
                    scene.text('"Yes. Do you want to take a look?" she asks.');
                    scene.text('"I\'d love to!" you reply and she starts showing you some of her drawings and sketches.');
                    scene.text('As she flicks through the pages, you catch sight of a curious drawing. It looked like a sketch of her... naked?');
                    scene.text('"Wait, was that drawing there about? The one where-"');
                    scene.text('"I\'m posing naked?" she replies. "It was a sketch my boyfriend done when I posed for him. I forgot he sketched that one in my book."');
                    scene.actions([
                      { label: 'Ask about the drawing', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
    scene.text('"I get that you\'re naked because he\'s your boyfriend, but why pose... like <i>that</i>?" you ask.');
    scene.text('You take another look at the drawing. She\'s standing on the tips of her toes and gazing back as she spreads her ass cheeks, showing off her pussy and asshole.');
    scene.text('"Can you keep a secret?" she whispers and you nod before moving closer. "I... I tried my hand at porn, just as a side gig to make some quick cash. I only filmed one or two videos before I quit, but please don\'t tell anyone!"');
    scene.text('"I won\'t," you reply. "But I don\'t see what that has to do with the way you\'re posing here?"');
    scene.text('She sighs. "This... This was one of the poses I was asked to do for the camera one of the times I was filming. Arthur said he wanted to capture my... <i>sexy</i> side, and this felt... sexy."');
    scene.text('"You\'re telling me!" you chuckle. "Wait. You filmed porn when you already have a boyfriend? Does he know?!"');
    scene.text('"Yes!" she replies, looking almost offended. "He knows I love him and only him, so he fully supported my decision if it meant I could make enough money to achieve my dream of going to art school."');
    scene.text('"But you pulled out," you state. "Did he change his mind?"');
    scene.text('"No. I did," she sighs. "Having sex with a stranger while surrounded by all those other people, knowing it was being filmed and that who knows how many people were going to see it on the internet? It felt like I was betraying not just Arthur, but <i>myself</i>. So I quit."');
    scene.text('You just nod and end up chatting about how she makes extra money by posing as a model for artists other than her boyfriend.');
    scene.actions([
      { label: 'Continue', goto: ['stwork', 'start'] },
    ]);
  } },
                      { label: 'Ask about her boyfriend', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
    scene.text('"You have a boyfriend?" you ask and she nods.');
    scene.text('"Yeah, Arthur. We\'ve been together since school, where we bonded over our love of art."');
    scene.text('She smiles as she looks at the drawing. "He\'s a far better artist than I could ever dream of becoming, but I love being his muse! There\'s no better feeling in the world to me than showing off my beauty to the man I love!"');
    scene.text('"But you\'re a stripper?" you point out. "You\'re kind of already \'showing off your beauty\' to anybody paying to see it."');
    scene.text('"There\'s a difference!" she states, almost offended by your comment. "Stripping like this is... a grotesque necessity, but seeing the genuine love in Arthur\'s eyes as he soaks in my beauty and transfers it to paper or canvas? I might be a stripper here, but I\'m a <i>model</i> for him."');
    scene.text('She sighs. "The men here are perverts paying to objectify me. Arthur... Arthur <i>appreciates</i> my body for its artistic beauty, not as an object of sexual desire. <i>That\'s</i> the difference."');
    scene.text('You just nod and end up chatting about her relationship with her boyfriend and their dream of getting married and being able to make a living off of their art.');
    scene.actions([
      { label: 'Continue', goto: ['stwork', 'start'] },
    ]);
  } },
                    ]);
                  }
                } else {
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/city/redlight/stripclub/makeup.jpg');
                  if (((s as any).strip_club ?? 0)?.['opal_intro'] === 0) {
                    ((s as any).strip_club ?? {})['opal_intro'] = 1;
                    scene.text('You see a young brunette girl sitting at one of the mirrors, touching up her hair and makeup. You can\'t help but notice how her <i>very</i> tight fitting white leather corset is not only accenting her massive breasts, but is struggling to contain them. You think they might actually pop out at any second.');
                    scene.text('She spots your reflection in the mirror and smiles.');
                    if (((s as any).tits ?? 0) >= 5) {
                      scene.text('"It\'s hard finding outfits for girls our size, isn\'t it?"');
                      scene.text('"I\'m sorry?" you reply, suddenly aware that you were staring.');
                      scene.text('"When you have tits as big as ours, it\'s hard to find something slutty that fits," she says with a smile.');
                      scene.text('"Oh. Right!" you laugh. "Yeah, trying to fit into something sexy with <i>these</i> is such a chore!"');
                    } else {
                      scene.text('"If it wasn\'t so hard trying to put them back in, I\'d pull them out and let you have a better look at them."');
                      scene.text('"I\'m sorry?" you reply, suddenly aware that you were staring.');
                      scene.text('"It\'s fine," she smiles. "Having big tits was one of the reasons I became a stripper in the first place. These bad boys have made me more money than I count!"');
                    }
                    scene.text('"I\'m Opal by the way," she says. "I think you saw me when you came into Sasha\'s office looking for a job?"');
                    // TODO-QSP: dynamic text: "Oh yeah, that's right!" you reply as the image of her breasts covered in his cu...
                    scene.text(`"Oh yeah, that's right!" you reply as the image of her breasts covered in his cum comes to mind. "I'm ${((s as any).pcs_strippername ?? 0)}."`);
                    scene.text('"It\'s good to see that you got the job then," she says. "It\'s always nice to have new faces around. I\'ll see you around, yeah?"');
                    scene.text('You nod as she stands up and adjusts her corset before strutting out of the room.');
                    scene.actions([
                      { label: 'Continue', goto: ['stwork', 'start'] },
                    ]);
                  } else {
                    scene.text('You see Opal sitting at the mirrors, looking a little uncomfortable as she stretches.');
                    scene.text('"Hey Opal," you smile. "Everything okay?"');
                    scene.text('"Oh? Yeah," she replies as she turns to you. "I love the money my tits make me, but carrying them around all night and trying to dance with them <i>really</i> does my back in!"');
                    if (((s as any).tits ?? 0) >= 5) {
                      scene.text('"I know that feeling," you laugh. "I swear I\'ll have a hunched back by the time I\'m 30!"');
                      scene.text('She laughs. "Tell me about it! I heard there was a place in the mall that does really good massages. I might pay them a visit and see if it\'s as good as they say."');
                      scene.text('"I know your pain," you reply. "A back massage would feel <i>so good</i> right now!"');
                    } else {
                      scene.text('"Sounds tough," you reply. "Have you ever considered getting them reduced?"');
                      scene.text('"Hell no!" she replies. "They might be a literal pain in the back sometimes, but the amount of money these bad boys make me is absolutely worth it!"');
                      scene.text('"I did hear about this place in the mall that does really good massages. I might pay them a visit and see if it\'s as good as they say."');
                      scene.text('"I don\'t have your problem, but a back massage would feel <i>so good</i> right now!"');
                    }
                    scene.text('"I should get back to it," she says as she stands up. "Wish me luck!"');
                    scene.text('She then struts out of the room, leaving you behind.');
                    scene.actions([
                      { label: 'Continue', goto: ['stwork', 'start'] },
                    ]);
                  }
                }
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

function enterSmokeBreak(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (5);
  qspCall(s, 'drugs', 'smoke');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/smoke5.jpg');
  scene.text('You grab one of the robes hanging up and wrap it around yourself before heading out the back to smoke a cigarette, feeling yourself relax a little as the smoke fills your lungs.');
  scene.text('Once you\'re done, you flick the remains of the cigarette away and head back inside to continue your shift.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head back inside', goto: ['stwork', 'start'] },
  ]);
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
    case 'stripgirl':
      enterStripgirl(s, scene);
      break;
    case 'guard':
      enterGuard(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'rest':
      enterRest(s, scene);
      break;
    case 'smoke_break':
      enterSmokeBreak(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
