import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'salon', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'public_indoors';
  (s as any).sexloc = 'salon';
  (s as any).salonrand = (Math.floor(Math.random() * 10) + 0);
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Beauty Bar</b></center>');
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  if (((s as any).locat ?? 0)?.['Mother'] === 21  &&  ((s as any).locat ?? 0)?.['Mom_Salon_daystart'] !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'salon', 'mom');
  }
  if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
    if (((s as any).job_missed_total ?? 0)?.['city_salon_masseuse'] >= 3) {
      qspGoto(s, 'masseuse_work', 'fired');
    }
    if (((s as any).masseuse ?? 0)?.['uniform'] !== 1) {
      if ((((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).daystart ?? 0)) + ', 0'] !== ''  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 13  &&  ((s as any).masseuse ?? 0)['worked_' + (((s as any).daystart ?? 0)) + '_1'] === 0)  ||  (((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).daystart ?? 0)) + ', 1'] !== ''  &&  ((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).masseuse ?? 0)['worked_' + (((s as any).daystart ?? 0)) + '_2'] === 0)  ||  (((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).daystart ?? 0)) + ', 2'] !== ''  &&  ((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).masseuse ?? 0)['worked_' + (((s as any).daystart ?? 0)) + '_3'] === 0)) {
        if (((s as any).masseuse ?? 0)?.['late'] === 0) {
          ((s as any).masseuse = (s as any).masseuse ?? {})['late'] = 1;
          scene.text('"Hey!" Xian yells at you from the front desk. "You\'re late! You\'re being docked an hour\'s pay for that! Now get changed and get in there!"');
        }
      }
    }
  }
  if (((s as any).hour ?? 0) < 8  ||  (((s as any).hour ?? 0) > 20  &&  ((s as any).job_status ?? 0)?.['city_salon_masseuse'] !== 'employed')) {
    scene.text('The salon is closing and you are politely asked to leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
    scene.actions([
      { label: 'Locker room', goto: ['salon', 'lockers'] },
      { label: 'Go to a massage room', handler: (st: GameState) => {
    if (qspFunc(s, 'jobs', 'is_work_time', 'city_salon_masseuse') === 1) {
      qspGoto(st, 'masseuse_work', 'massage_room');
    } else {
      qspGoto(st, 'salon', 'lei_work');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((st as any).masseuse ?? 0)?.['uniform'] === 1) {
    } else {
      qspGoto(st, 'city_mall', '');
    }
  } },
    { label: 'Approach the receptionist', goto: ['salon', 'receptionist'] },
  ]);
  scene.build();
}

function enterReceptionist(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'salon', ((s as any).locArgs?.[0] ?? 0));
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] !== 'employed'  &&  ((s as any).masseuse ?? 0)?.['salon_state'] === '') {
    scene.text('You walk over to the front desk to speak to the pretty young Asian woman who sits behind it.');
    scene.text('"Hello! What can I help you with today?" Her Russian has a heavy accent to it.');
  } else {
    scene.text('You walk over to the front desk to speak to Xian.');
  }
  if (((s as any).hour ?? 0) >= 21) {
    // TODO-QSP: dynamic text: "It''s after hours, <<$pcs_firstname>>. You should go home."
    scene.text(`"It's after hours, ${((s as any).pcs_firstname ?? '')}. You should go home."`);
  } else {
    if (((s as any).masseuse ?? 0)?.['salon_state'] === 'fired') {
      scene.text('"Hello, what can I help you with today?"');
    } else {
      if (((s as any).masseuse ?? 0)?.['salon_state'] === 'resigned') {
        // TODO-QSP: dynamic text: "Hello again, <<$pcs_firstname>>. What can I help you with?"
        scene.text(`"Hello again, ${((s as any).pcs_firstname ?? '')}. What can I help you with?"`);
      } else {
        if (((s as any).week ?? 0) === 5  &&  ((s as any).job_bonus_pay ?? 0)?.['city_salon_masseuse'] > 0) {
          // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>! Are you here to pick up your paycheck?"
          scene.text(`"Hello ${((s as any).pcs_firstname ?? '')}! Are you here to pick up your paycheck?"`);
        } else {
          if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
            // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>! Are you scheduled for a shift today? Or are you here ...
            scene.text(`"Hello ${((s as any).pcs_firstname ?? '')}! Are you scheduled for a shift today? Or are you here for some discount services?"`);
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReceptionistTalkMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterReceptionistTalkMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 21) {
    scene.actions([
      { label: 'I\'d like to take a look at your services', goto: ['salon', 'services'] },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] !== 'employed'  &&  ((s as any).masseuse ?? 0)?.['salon_state'] === '') {
    scene.actions([
      { label: 'Do you have any job openings?', goto: ['masseuse_work', 'job_interview1'] },
    ]);
  } else {
    if (((s as any).masseuse ?? 0)?.['salon_state'] === 'resigned') {
      scene.actions([
        { label: 'Can I start working here again?', goto: ['masseuse_work', 'rehire1'] },
      ]);
    } else {
      if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
        if (((s as any).job_bonus_pay ?? 0)?.['city_salon_masseuse'] > 0) {
          scene.actions([
            { label: 'I\'m here for my paycheck', goto: ['masseuse_work', 'payday'] },
          ]);
        }
        scene.actions([
          { label: 'Can I set my schedule?', handler: (st: GameState) => {
    scene.text('"Of course. And if you schedule for next week, you\'ll get better pickings on time slots."');
    scene.actions([
      { label: 'Set current week schedule', goto: ['masseuse_work', 'set_schedule', 'this_week'] },
      { label: 'Set next week schedule', goto: ['masseuse_work', 'set_schedule', 'next_week'] },
    ]);
  } },
          { label: 'I want to change jobs', goto: ['masseuse_work', 'job_change'] },
          { label: 'I\'d like to quit', goto: ['masseuse_work', 'resignation'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterDiscount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
    (s as any).salon_rate = ((s as any).locArgs?.[1] ?? 0) / 2;
  } else {
    (s as any).salon_rate = ((s as any).locArgs?.[1] ?? 0);
  }
  // TODO-QSP: end
  scene.build();
}

function enterServices(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"What are you interested in today?"');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).salon ?? 0)?.['skin_care_day'] < Math.max(((s as any).daystart ?? 0) - 7, 1)) {
    scene.actions([
      { label: 'Skin care', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 5000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'skin_care');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Skin care',  },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 25000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lashair ?? 0) !== 1) {
    if (((s as any).pcs_pubes ?? 0) > 2  ||  ((s as any).pcs_leghair ?? 0) > 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Partial or full body hair removal up to', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'salon', 'hair_removal');
    }
  } },
      ]);
    } else {
      if (((s as any).pcs_pubes ?? 0) <= 2  ||  ((s as any).pcs_leghair ?? 0) <= 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'Body hair removal',  },
        ]);
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_pubes ?? 0) > 20) {
      scene.actions([
        { label: 'Dye your pubic hair', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 500]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'pubes');
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Dye your pubic hair',  },
      ]);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).cosmetic_tattoo ?? 0) <= 4) {
    scene.actions([
      { label: 'Cosmetic tattoos service', goto: ['salon', 'cosmetic_tattoo_start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    qspCall(st, 'salon', '');
  }, goto: ['salon', 'start'] },
    { label: 'Tanning booth', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'tanning_booth');
    }
  } },
    { label: 'Massage services', goto: ['salon', 'massage'] },
    { label: 'See the eyelash specialist', goto: ['salon', 'eyelashes'] },
    { label: 'Full body rejuvination', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 25000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'rejuvination');
    }
  } },
    { label: 'Professional makeup', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'makeup');
    }
  } },
  ]);
  scene.build();
}

function enterJobInterview1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I actually wanted to know if you had any job openings available."');
  scene.text('"We have several openings for female masseuses. How do you feel about that?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m not interested', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I\'m not really interested in that kind of work. Don\'t you have anything else like a makeup assistant or salesgirl or something?"');
    scene.text('"Well, we really don\'t have anything else we need help with right now. We do have those positions you\'re asking about, but they\'re all filled." The woman gives you a sympathetic smile. "Sorry."');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
      { label: 'Tell me more about the masseuse job', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Well... if that\'s all you have, tell me more about the masseuse job then."');
    scene.text('"I\'d be happy to!" she smiles.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJobOffer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Tell me about the job', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I might be interested. Tell me more about it?"');
    scene.text('"I\'d be happy to!" she smiles.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterJobOffer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterJobOffer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Shifts are four hours long and pay <<$func(''money'', ''string_profit'', 400)>>...
  scene.text(`"Shifts are four hours long and pay ${qspFunc(s, 'money', 'string_profit', 400)} per shift. We allow employees to schedule their own shifts rather than being assigned, but senior employees get priority over newer employees. We expect you to work 5 shifts if you're part time or 10 shifts if you're full time. We do not provide overtime compensation, so if you choose to work more shifts or are kept late with a customer, you will only be paid for your shift."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'That\'s not a lot of pay', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"That\'s not a lot of money in terms of pay..."');
    scene.text('"You get to keep the tips," the woman shrugs. She looks around the room to see if anyone is standing nearby before leaning forward to whisper to you.');
    scene.text('"To be honest, we do have... other kinds of work available if you want. But it isn\'t, strictly speaking, legal..."');
    scene.actions([
      { label: 'I don\'t want to hear about this', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I don\'t want to hear about this!" you recoil in disgust. "I just wanted to have a job, not break the law!"');
    scene.text('With that, you step away from her.');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
    ]);
  } },
      { label: 'What kind of work?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"What kind of work?" you ask curiously.');
    scene.text('"Well..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOffer(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Sounds fine', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Okay, that all sounds fine."');
    scene.text('"Great!" she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
      scene.text('"Yes, I am."');
      scene.text('"Okay, can I see your certificate?"');
      scene.text('You pull out the paper that certifies you as a massage therapist.');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['salon', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"No..."');
      scene.text('"Sorry, but we need you to have one of those to work here. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWhoreOffer(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['brothel_know'] = 1;
  scene.text('"In addition to giving normal massages, some of our masseuses offer more... intimate services. Namely, performing the massages while naked, performing handjobs, performing blowjobs, or having sex with the customer. What I mean to say is that we function as a salon, a massage parlor, and a brothel. If you would like to be paid more, we offer specialty positions for sex work. Are you interested in that kind of work?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ew, not interested', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Ew," you say, wrinkling your nose in disgust. "Yeah, no, I\'m not interested in that."');
    // TODO-QSP: dynamic text: "Are you sure? We pay our whores up to <<$func(''money'', ''string_profit'', 100...
    scene.text(`"Are you sure? We pay our whores up to ${qspFunc(s, 'money', 'string_profit', 1000)} per shift. And you don't have to do anything you don't want to. There are plenty of girls who only do naked massages and no sexual acts or girls who give blowjobs but don't have sex. If you're really not interested, a normal masseuse position is all we have to offer."`);
    scene.actions([
      { label: 'Not interested at all', handler: (st: GameState) => {
    scene.text('"Not at all!" you say. "As if anybody would want to work at a place like this!"');
    scene.text('"Oh. Well I\'m sorry to hear that. We really could use the help. Let me know if you change your mind. In the mean time, can I offer you in any of our other services?"');
    scene.actions([
      { label: 'Just leave', goto: ['salon', 'start'] },
      { label: 'Take a look while you\'re here', goto: ['salon', 'services'] },
    ]);
  } },
      { label: 'I\'d rather just work as a masseuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"No way," you say. "I\'m not about selling my body like that. But I guess a normal masseuse job is fine."');
    scene.text('"Okay! We always need those." she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
      scene.text('"Yes, I am."');
      scene.text('"Okay, can I see your certificate?"');
      scene.text('You pull out the paper that certifies you as a massage therapist."');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['salon', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"No..."');
      scene.text('"Sorry, but we need you to have one of those to work here. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
      { label: 'Well...', handler: (st: GameState) => {
    scene.text('"Well..." you say. The money is pretty tempting. "I guess you could tell me more about working as a whore to find out if I\'m really interested or not..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOffer2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Tell me more', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Tell me more about this."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhoreOffer2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterWhoreOffer2(s: GameState, scene: SceneBuilder): void {
  scene.text('"Let me explain. If you want the highest pay as a whore, you will be expected to do any of the work we have on the menu. That includes basic body massages, massages given while you are naked, handjobs, blowjobs, and of course, sex. But each customer pays for a different service, we don\'t have any all included packages. If you aren\'t comfortable with going so far, you can choose to perform only lesser services, but for less pay of course. You can just do oral and handjobs if you prefer with no fucking, or just performing normal massages while naked. It\'s no problem for us, we\'ll just pay you less."');
  // TODO-QSP: dynamic text: "We pay <<$func(''money'', ''string_profit'', 1000)>> a shift for full whores, <...
  scene.text(`"We pay ${qspFunc(s, 'money', 'string_profit', 1000)} a shift for full whores, ${qspFunc(s, 'money', 'string_profit', 700)} for oral masseuses, ${qspFunc(s, 'money', 'string_profit', 600)} for happy end masseuses, ${qspFunc(s, 'money', 'string_profit', 500)} for naked masseuses, and of course, ${qspFunc(s, 'money', 'string_profit', 400)} for regular masseuses. All employees also enjoy a 50% discount of any other services the salon has to offer. Oh, but we don't pay for birth control. And company policy is that we never use condoms with customers. After that, everything else is the same. We let the whores pick and choose their own shifts. Four hour shifts at a time. Pay day is Friday."`);
  scene.text('She lays everything out for you as calmly and methodically as if she were trying to sell a body oil.');
  scene.text('"That about covers it. Still interested?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'On second thought, maybe not', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"On second thought, maybe not..."');
    scene.text('"Oh, okay. Well what about being a regular masseuse? Still not interested?"');
    scene.actions([
      { label: 'Still no', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I don\'t think so either."');
    scene.text('"Hmm. Well if you ever change your mind, you\'re welcome to come back. While you\'re here is there anything else I can offer you?"');
    scene.actions([
      { label: 'No', goto: ['salon', 'start'] },
      { label: 'Sure, let me look', goto: ['salon', 'services'] },
    ]);
  } },
      { label: 'I guess that\'s fine', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I guess that\'s fine."');
    scene.text('"So, are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
      scene.text('"Yes, I am."');
      scene.text('"Okay, can I see your certificate?"');
      scene.text('You pull out the paper that certifies you as a massage therapist.');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['salon', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"No..."');
      scene.text('"Sorry, but we need you to have one of those to work here. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Rather just be a regular masseuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I think I\'d rather just be a regular masseuse."');
    scene.text('"That\'s fine too! Always need those," she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 1;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 100;
      scene.text('"Yes I am."');
      scene.text('"Okay, can I see your certificate?"');
      scene.text('You pull out the paper that certifies you as a massage therapist.');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['salon', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"No..."');
      scene.text('"Sorry, but we need you to have one of those to work here. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
    { label: 'I wouldn\'t mind being a naked masseuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I wouldn\'t mind being a naked masseuse," you say.');
    scene.text('"Alright, that\'s fine," she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 2;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 125;
      scene.text('"Yes I am."');
      scene.text('"Okay, can I see your certificate?"');
      scene.text('You pull out the paper that certifies you as a massage therapist.');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['salon', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"What? No?"');
      scene.text('"Sorry, but we need you to have one of those to work here."');
      scene.text('"But I thought you said I was an off the books whore?"');
      scene.text('"But you\'re still an on the books employee. We need the deniability that every employee is who they say they are, and that means being certified as necessary. Besides, just because you\'re naked doesn\'t mean that you can\'t know how to not give a massage. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
    { label: 'I can give handjobs', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I wouldn\'t mind giving the occasional handjob," you say.');
    scene.text('"Alright, that\'s fine," she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 3;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 150;
      scene.text('"Yes, I am."');
      scene.text('"Okay, can I see your certificate?"');
      scene.text('You pull out the paper that certifies you as a massage therapist.');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['salon', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"What? No?"');
      scene.text('"Sorry, but we need you to have one of those to work here."');
      scene.text('"But I thought you said I was an off the books whore?"');
      scene.text('"But you\'re still an on the books employee. We need the deniability that every employee is who they say they are, and that means being certified as necessary. Besides, as a happy end masseuse, you\'re expected to give handjobs <i>and</i> massages. It is still a prerequisite skill. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
    { label: 'I can give blowjobs', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I can give blowjobs," you say.');
    scene.text('"Great!" she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 4;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 175;
      scene.text('"Yes, I am."');
      scene.text('"Okay, can I see your certificate?"');
      scene.text('You pull out the paper that certifies you as a massage therapist.');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['salon', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"What? No?"');
      scene.text('"Sorry, but we need you to have one of those to work here."');
      scene.text('"But I thought you said I was an off the books whore?"');
      scene.text('"But you\'re still an on the books employee. We need the deniability that every employee is who they say they are, and that means being certified as necessary. Besides, as an oral masseuse, you\'re expected to give blowjobs <i>and</i> massages. It is still a prerequisite skill. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
    { label: 'Sure, I\'ll be a whore', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Sure, I\'ll be your whore," you say. "Easy enough to fuck people for money."');
    scene.text('"Fantastic!" she says. "And are you a certified massage therapist?"');
    if (((st as any).license ?? 0)?.['masseuse'] === 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['pending_rank'] = 5;
      ((st as any).masseuse = (st as any).masseuse ?? {})['hourly'] = 250;
      scene.text('"Yes I am."');
      scene.text('"Okay, can I see your certificate?"');
      scene.text('You pull out the paper that certifies you as a massage therapist.');
      scene.text('"Great. I\'ll just get your contract set up for you," she says, typing something out on her computer.');
      scene.actions([
        { label: 'Next', goto: ['salon', 'part_time_full_time'] },
      ]);
    } else {
      scene.text('"What? No?"');
      scene.text('"Sorry, but we need you to have one of those to work here."');
      scene.text('"But I thought you said I was an off the books whore?"');
      scene.text('"But you\'re still an on the books employee. We need the deniability that every employee is who they say they are, and that means being certified as necessary, even if you\'re mostly just using your pussy. If you\'re still interested, they offer a 10 session course at the community center in the industrial area."');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPartTimeFullTime(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"And were you looking to be a full timer or a part timer? As a reminder, full timers are expected to work 10 shifts a week, part timers work 5. Full timers also get priority on available shifts."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Part time', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['shifts_required'] = 5;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Part time."');
    scene.text('"Okay," she prints out a piece of paper and pushes a pen towards you. "This is an employee contract for a part time masseuse. Just sign there at the bottom and I\'ll give you a quick orientation."');
    scene.actions([
      { label: 'Sign', handler: (st: GameState) => {
    if (((st as any).masseuse ?? 0)?.['pending_rank'] === 1) {
      qspGoto(st, 'salon', 'masseuse_orientation');
    } else {
      qspGoto(st, 'salon', 'whore_orientation');
    }
  } },
    ]);
  } },
    { label: 'Full time', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['shifts_required'] = 10;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Full time."');
    scene.text('"Okay," she prints out a piece of paper and pushes a pen towards you. "This is an employee contract for a full time masseuse. Just sign there at the bottom and I\'ll give you a quick orientation."');
    scene.actions([
      { label: 'Sign', handler: (st: GameState) => {
    if (((st as any).masseuse ?? 0)?.['pending_rank'] === 1) {
      qspGoto(st, 'salon', 'masseuse_orientation');
    } else {
      qspGoto(st, 'salon', 'whore_orientation');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMasseuseOrientation(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['hired_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'jobs', 'set_employed', 'city_salon_masseuse');
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', (((s as any).masseuse ?? 0)?.['pending_rank']));
  ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = '';
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 0;
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You scribble out a signature and she takes the paper back from you.');
  scene.text('"Thank you very much! So for future reference, I\'m Xian, one of the managers here. All your clients will come to me and will be able to request you based on whether you are available or not. Now if you\'ll quickly follow me."');
  scene.text('She gets up from her chair and moves around the desk towards the back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
    scene.text('"Here is the locker room for you to put your personal things when working. We have a strict uniform policy here. All massage therapists must wear one of the salon robes. No personal clothing is allowed under the robe. That means no shirts, no dresses, no pants, or underwear of any kind is allowed beneath the robe. By the way, here\'s yours."');
    scene.text('Picking a hanger up off a rack, she hands you a thin white robe that your nipples might tear through on a cold day and a hemline that ends just above the halfway point of your thigh. Not waiting for any questions, she assigns you a locker as well before quickly moving on to the next room.');
    scene.actions([
      { label: 'Follow', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('"These are our massage rooms. You will be assigned a random one on a given day and expected to be inside and ready within a half hour of your shift starting. When your shift is over, you are expected to make it clean and ready for the next girl or for the next day if you are working a closing shift."');
    scene.text('She gestures at the wall. "On that wall there is a clock to keep track of how long the session is going and when a client\'s time is up. By the door you will also notice an intercom. Before each client comes in, I will buzz you to let you know you have a customer and what kind of service he wishes to receive. Our massage services are as follows:');
    scene.text('A massage is simply a body massage.');
    scene.text(' A naked massage is \'a massage with a view.\' ');
    scene.text('Handjob requests are referred to as an \'old fashioned\' massage and oral requests are \'head\' massages. ');
    scene.text('Clients who pay to fuck are requesting \'full body\' massages. ');
    scene.text('And of course, if any client is roughhousing, you may use the intercom to signal me that security intervention is necessary."');
    scene.text('She continues to speak at a rapid pace, leaving no room for you to squeeze in any sort of question.');
    scene.text('"If a customer cums in your mouth, you are expected to swallow. If a customer cums inside your pussy, they are not liable if you become pregnant. We do not offer birth control or additional compensation for birth control if you are not already on it. Every new customer should be greeted with a clean face and body, so again if a customer cums inside you, you are expected to wipe yourself for the next customer. Any towel with bodily fluids can be thrown into the pink laundry bin, any other towel can be thrown in the blue. When the customer is preparing to leave, you are not to redress if already naked. When they exit the room, you will bow and say, \'Thank you for your patronage sir,\'" she says, modelling the action and words for you. "I will continue to send in clients unless you are 5 minutes or less from the end of your shift. If your shift ends while still with a client, you must still finish the session with them. You will not be compensated for extra time. Next we\'ll move to the break room."');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/break.jpg');
    scene.text('"You are allowed one 15 minute break per shift taken at a time of your choosing. Feel free to rehydrate, have a snack, or smoke a cigarette if that is your habit while in this room. And that concludes orientation."');
    scene.text('She leads you back out to the front.');
    scene.actions([
      { label: 'Follow her!', goto: ['salon', 'questions'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhoreOrientation(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['hired_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'jobs', 'set_employed', 'city_salon_masseuse');
  qspCall(s, 'jobs', 'set_rank', 'city_salon_masseuse', (((s as any).masseuse ?? 0)?.['pending_rank']));
  ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = '';
  ((s as any).masseuse = (s as any).masseuse ?? {})['pending_rank'] = 0;
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You scribble out a signature and she takes the paper back from you.');
  scene.text('"Thank you very much! So for future reference, I\'m Xian, one of the managers here. All your clients will come to me and will be able to request you based on whether you are available or not. Now if you\'ll quickly follow me."');
  scene.text('She gets up from her chair and moves around the desk towards the back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
    scene.text('"Here is the locker room for you to put your personal things when working. We have a strict uniform policy here. All massage therapists must wear one of the salon robes. No personal clothing is allowed under the robe. That means no shirts, no dresses, no pants, or underwear of any kind is allowed beneath the robe. By the way, here\'s yours."');
    scene.text('Picking a hanger up off a rack, she hands you a thin white robe that your nipples might tear through on a cold day and a hemline that ends just above the halfway point of your thigh. Not waiting for any questions, she assigns you a locker as well before quickly moving on to the next room.');
    scene.actions([
      { label: 'Follow', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('"These are our massage rooms. You will be assigned a random one on a given day and expected to be inside and ready within a half hour of your shift starting. When your shift is over, you are expected to make it clean and ready for the next girl or for the next day if you are working a closing shift."');
    scene.text('She gestures at the wall. "On that wall there is a clock to keep track of how long the session is going and when a client\'s time is up. By the door you will also notice an intercom. Before each client comes in, I will buzz you to let you know you have a customer and what kind of service he wishes to receive. Our massage services are as follows:');
    scene.text('A massage is simply a body massage.');
    scene.text(' A naked massage is \'a massage with a view.\' ');
    scene.text('Handjob requests are referred to as an \'old fashioned\' massage and oral requests are \'head\' massages. ');
    scene.text('Clients who pay to fuck are requesting \'full body\' massages. ');
    scene.text('And of course, if any client is roughhousing, you may use the intercom to signal me that security intervention is necessary."');
    scene.text('She continues to speak at a rapid pace, leaving no room for you to squeeze in any sort of question.');
    scene.text('"If a customer cums in your mouth, you are expected to swallow. If a customer cums inside your pussy, they are not liable if you become pregnant. We do not offer birth control or additional compensation for birth control if you are not already on it. Every new customer should be greeted with a clean face and body, so again if a customer cums inside you, you are expected to wipe yourself for the next customer. Any towel with bodily fluids can be thrown into the pink laundry bin, any other towel can be thrown in the blue. When the customer is preparing to leave, you are not to redress if already naked. When they exit the room, you will bow and say, \'Thank you for your patronage sir,\'" she says, modelling the action and words for you. "I will continue to send in clients unless you are 5 minutes or less from the end of your shift. If your shift ends while still with a client, you must still finish the session with them. You will not be compensated for extra time. Next we\'ll move to the break room."');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/break.jpg');
    scene.text('"You are allowed one 15 minute break per shift taken at a time of your choosing. Feel free to rehydrate, have a snack, or smoke a cigarette if that is your habit while in this room. And that concludes orientation."');
    scene.text('She leads you back out to the front.');
    scene.actions([
      { label: 'Follow her!', goto: ['salon', 'questions'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQuestions(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"We schedule who\'s working every Sunday, so be sure to come in then to set your hours. Pay day is Friday. You can pick it up from me any time on or after that day. Do you have any questions?"');
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 1) {
    if (((s as any).masseuse ?? 0)?.['brothel_know'] === 1) {
      scene.actions([
        { label: 'Why did you tell me about the whoring?', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['brothel_question'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQuestions(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Uhhhh, yeah... Why did you tell me about all the whoring stuff? I thought we agreed I\'m just working as a normal masseuse?"');
    scene.text('"In case you wanted to change jobs," she says simply. "I might have mentioned it before, but even if you\'re just a masseuse right now, you might change your mind in the future. As long as you have the certificate, you are welcome to ascend or descend to any level of masseuse here. As it is such a fluid system, even if you\'re not doing the work, it\'s easiest to explain it all in one orientation."');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Why did you tell me all that... other stuff?', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['brothel_question'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQuestions(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Uhhhh, yeah... Why did you tell me about all that... other stuff?"');
    scene.text('"In case you wanted to change jobs. And because I didn\'t want to you to be surprised by any of the other work we do here," she says simply. "We also offer many sex services to customers. As long as you have the certificate, you are welcome to ascend or descend to any level of employee here. As it is such a fluid system, even if you\'re not doing the work, it\'s easiest to explain it all in one orientation."');
  } },
      ]);
    }
  }
  if (((s as any).masseuse ?? 0)?.['brothel_question'] === 1) {
    scene.actions([
      { label: 'This is a brothel?!', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['brothel_know'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQuestions(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Wait, do you mean this is some kind of brothel?!"');
    scene.text('"Well, yes. Of course," she says, giving you an eye. "Surely you didn\'t think that a massage parlor in this town was <i>just</i> a massage parlor?"');
  } },
    ]);
  }
  if (((s as any).masseuse ?? 0)?.['brothel_know'] === 1) {
    scene.actions([
      { label: 'What if I want to change jobs?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"What if I want to change jobs?" you ask.');
    scene.text('"You just let me know and we\'ll change it. You\'ll start on your new position with new pay immediately after. If you do it before payday, you\'ll be paid for that rate instead of your previous rate."');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No more questions', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I\'m pretty much clear on everything I think."');
    scene.text('"Great! So would you like to set your shifts for next week then?"');
    scene.text('"Sure."');
    scene.actions([
      { label: 'Look at the schedule', goto: ['masseuse_work', 'set_schedule', 'this_week'] },
    ]);
  } },
    { label: 'Why the uniform?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Why is the uniform policy so uhh..." You glance at the skimpy robe. "Strict?"');
    scene.text('"It is important to maintain a sense of uniformity here. It ensures our customers that everyone working here is a professional and that any employee is just as good as another. And we are also a beauty salon. As the essence of beauty, we must do our best to make sure our girls look beautiful. Thinly veiled beauty is only exceeded by naked beauty. But that would openly advertise us as a brothel since public nudity does not abide with public law. We dress for the customers, not ourselves."');
    scene.text('"Ahuh..." you say. "Right. And was that policy invented by a man or a woman?"');
    scene.text('Xian blinks at you. "A woman of course. All our policies were created by the owner, Madam Lao."');
  } },
  ]);
  scene.build();
}

function enterLockers(s: GameState, scene: SceneBuilder): void {
  (s as any).locM = 'salon';
  (s as any).locM_arg = 'lockers';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
  scene.text('The employee locker room where you can put your stuff while working. Empty except for you at the moment.');
  scene.text('There\'s a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> hanging on the wall as well.');
  if (((s as any).masseuse ?? 0)?.['uniform'] === 1) {
    scene.actions([
      { label: 'Put your normal clothes back on', handler: (st: GameState) => {
    ((st as any).masseuse = (st as any).masseuse ?? {})['uniform'] = 0;
    (st as any).robe = 0;
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'outfit', 'dress', 'masseuseQW');
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('Slipping out of your robe, you fold it neatly to put back in your locker, taking your clothes out as you do.');
    scene.text('You spend a few minutes redressing and then slam the locker shut, ready to leave.');
    scene.actions([
      { label: 'Continue', goto: ['salon', 'lockers'] },
    ]);
  } },
    ]);
  } else {
    if ((((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2  &&  ((s as any).pcs_inhib ?? 0) < 35)  ||  (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 3  &&  (((s as any).pcs_inhib ?? 0) < 40  &&  ((s as any).stat ?? 0)?.['prostitute_times'] < 20))  ||  (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 4  &&  (((s as any).pcs_inhib ?? 0) < 50  &&  ((s as any).stat ?? 0)?.['prostitute_times'] < 35))  ||  (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 5  &&  (((s as any).pcs_inhib ?? 0) < 60  &&  ((s as any).stat ?? 0)?.['prostitute_times'] < 50))  &&  ((s as any).masseuse ?? 0)?.['uniform'] !== 1) {
      scene.actions([
        { label: 'Get changed for work', goto: ['masseuse_work', 'change_for_work_stress'] },
      ]);
    } else {
      if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed'  &&  ((s as any).masseuse ?? 0)?.['uniform'] !== 1) {
        scene.actions([
          { label: 'Get changed for work', goto: ['masseuse_work', 'change_for_work'] },
        ]);
      } else {
        scene.actions([
          { label: 'Get changed for work', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'undress', 'masseuseQW');
    ((st as any).masseuse = (st as any).masseuse ?? {})['uniform'] = 1;
    (st as any).robe = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
    scene.text('You strip down out of your clothes and stuff them into your locker, pulling out your robe as you do so. After slipping it on and tying the belt, you check yourself in the mirror.');
    scene.text('Nipples are clearly outlined. Thighs are fully on display. Hemline likely to flash your pussy if you bend the wrong way. Ass definitely going to get flashed if you bend over.');
    scene.text('Yup. That\'s your uniform.');
    scene.actions([
      { label: 'Continue', goto: ['salon', 'lockers'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterLeiWork(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You move towards the massage rooms, but right when you put your hand on the door, you remember you don\'t have a shift scheduled for right now. Right about the same time, you hear moans coming through the door.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['salon', 'start'] },
    { label: 'Take a peek', goto: ['salon', 'lei_work2'] },
  ]);
  scene.build();
}

function enterLeiWork2(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['lei_peek'] = 1;
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    qspCall(s, 'arousal', 'voyeur', 1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img(`images/locations/city/citycenter/mall/salon/work/lei/${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    if (((s as any).masseuse ?? 0)?.['meet_lei'] === 0) {
      scene.text('Unable to resist, you carefully turn the door handle and crack the door open to peek through.');
      scene.text('The sight you\'re presented with is a tiny Asian girl getting absolutely <i>pounded</i> by a customer.');
      scene.text('She\'s practically screaming at the client, saying various expletives that communicate just how much she\'s loving his cock and how good he is at fucking. Despite her shouts, the staccato slap of every thrust is heard quite clearly.');
      scene.text('Not wanting to get in trouble, you ease the door back shut and move away.');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    } else {
      scene.text('Unable to resist, you carefully turn the door handle and crack the door open to peek through.');
      scene.text('"Nnngh! Yeah! Yeah! Pound my pussy with your fat cock!"');
      scene.text('Lei is inside, fucking a client while screaming her expletives as usual. She\'s got him totally entranced.');
      scene.text('You decide to leave before you get in trouble and ease the door shut.');
      scene.actions([
        { label: 'Move away', goto: ['salon', 'start'] },
      ]);
    }
  } else {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/4.mp4');
    if (((s as any).masseuse ?? 0)?.['meet_lei'] === 0) {
      scene.text('Unable to resist, you carefully turn the door handle and crack the door open to peek through.');
      scene.text('It looks like a small Asian girl just finished getting a facial from a customer.');
      scene.text('Since he could leave at any second, you ease the door closed and quickly back away.');
      scene.actions([
        { label: 'Leave', goto: ['salon', 'start'] },
      ]);
    } else {
      scene.text('Unable to resist, you carefully turn the door handle and crack the door open to peek through.');
      scene.text('You see Lei inside puckering her lips, her face covered in cum.');
      scene.text('"Mmmm, you taste <i>sooo goooood</i>. I love it when you cum all over my face..."');
      scene.text('You decide to leave before you get in trouble and ease the door shut.');
      scene.actions([
        { label: 'Move away', goto: ['salon', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterResignation(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I actually wanted to resign my position here."');
  scene.text('"Oh," she says. "I\'m sorry to hear that."');
  if (((s as any).job_bonus_pay ?? 0)?.['city_salon_masseuse'] > 0) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['paycheck'] = qspFunc(s, 'jobs', 'paycheck', 'city_salon_masseuse', 'cash');
    scene.text('Reaching down below the desk, she shuffles around in a drawer and stuffs some money into an envelope. "Well, here\'s your pay for the shifts you worked earlier this week."');
  }
  scene.text('"If you ever want to come back, you just let us know," she smiles at you.');
  if (((s as any).masseuse ?? 0)?.['uniform'] === 1) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['uniform'] = 0;
    (s as any).robe = 0;
    (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(s, 'outfit', 'dress', 'masseuseQW');
  }
  scene.text('You retrieve your clothes from your locker and get dressed ready to leave.');
  ((s as any).masseuse = (s as any).masseuse ?? {})['last_rank'] = (((s as any).job_rank ?? 0)?.['city_salon_masseuse']);
  qspCall(s, 'jobs', 'set_terminated', 'city_salon_masseuse');
  ((s as any).masseuse = (s as any).masseuse ?? {})['salon_state'] = 'resigned';
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterPayday(s: GameState, scene: SceneBuilder): void {
  ((s as any).masseuse = (s as any).masseuse ?? {})['paycheck'] = qspFunc(s, 'jobs', 'paycheck', 'city_salon_masseuse', 'cash');
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I\'m here to pick up my pay for this week."');
  scene.text('"Okay!" She opens up a drawer and thumbs through a few different labels before reaching into one and picking up an envelope. She hands it over to you.');
  if (((s as any).masseuse ?? 0)?.['hired_day'] <= ((s as any).daystart ?? 0) - 7) {
  } else {
    if (((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] < ((s as any).masseuse ?? 0)?.['shifts_required']) {
      ((s as any).masseuse = (s as any).masseuse ?? {})['warning'] = ((s as any).masseuse['warning'] ?? 0) - (1);
      // TODO-QSP: dynamic text: "Hey, you only worked <<job_shifts_this_period[''city_salon_masseuse'']>> this w...
      scene.text(`"Hey, you only worked ${(((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] ?? '')} this week. You were supposed to work ${(((s as any).masseuse ?? 0)?.['shifts_required'] ?? '')}."`);
      scene.text('"Sorry," you say, reaching for the envelope. "Won\'t happen again."');
      // TODO-QSP: dynamic text: "Better not." You try to pull the envelope away, but Xian holds on tight to it, ...
      scene.text(`"Better not." You try to pull the envelope away, but Xian holds on tight to it, not budging until you make eye contact. "${(((s as any).masseuse ?? 0)?.['warning'] ?? '')} more times and you're fired."`);
      scene.text('She lets go.');
    } else {
      if (((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] >= ((s as any).masseuse ?? 0)?.['shifts_required']) {
        if (((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] > ((s as any).masseuse ?? 0)?.['shifts_required']) {
          // TODO-QSP: dynamic text: "By the way, thank you for covering those extra shifts this week, <<$pcs_firstna...
          scene.text(`"By the way, thank you for covering those extra shifts this week, ${((s as any).pcs_firstname ?? '')}. Really helpful for us."`);
          scene.text('"No problem, Xian," you say while taking the envelope. "I could use the extra cash."');
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPaydayEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterPaydayEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Looking inside, you see it''s stuffed with cash that counts out to <<$func(''mon...
  scene.text(`Looking inside, you see it's stuffed with cash that counts out to ${qspFunc(s, 'money', 'string_profit', (((s as any).masseuse ?? 0)?.['paycheck'] ?? ''))}.`);
  ((s as any).masseuse = (s as any).masseuse ?? {})['money_earned'] = ((s as any).masseuse['money_earned'] ?? 0) + ((((s as any).masseuse ?? 0)?.['paycheck']));
  if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] === 2) {
    ((s as any).masseuse = (s as any).masseuse ?? {})['nude_mass_money_earned'] = ((s as any).masseuse['nude_mass_money_earned'] ?? 0) + ((((s as any).masseuse ?? 0)?.['paycheck']));
  } else {
    if (((s as any).job_rank ?? 0)?.['city_salon_masseuse'] > 2) {
      ((s as any).masseuse = (s as any).masseuse ?? {})['sex_money_earned'] = ((s as any).masseuse['sex_money_earned'] ?? 0) + ((((s as any).masseuse ?? 0)?.['paycheck']));
    }
  }
  ((s as any).masseuse = (s as any).masseuse ?? {})['paycheck'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterEyelashes(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/eyelash_salon.jpg');
  scene.text('You\'re met by a young, dolled-up woman who explains the various lash treatments she can perform:');
  scene.text('"Well," she says, "I can put on temporary false lashes for you if you\'re just going out for the night; you\'ll look great, but they won\'t last much longer than that."');
  scene.text('She motions over to a small display of stacked boxes. "I can also, if you want a more permanent solution, treat your lashes to help stimulate their growth, but you won\'t get the kind of dramatic results you get from falsies."');
  scene.text('"There\'s also lash extensions," she explains. "With those we bond either two, four, or six individual lashes to each of your own for what can be a truly dramatic, always-on look. It\'s very glam, but they\'re expensive and you\'ll have to keep up maintenance on them by coming in regularly."');
  scene.text('"I guess I could also manually remove your eyelash extensions if you ever needed me to," she muses, but seems to hesitate. "But... I really wouldn\'t recommend it. Better to let them grow out naturally."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_naturallashes ?? 0) < 2) {
    scene.actions([
      { label: 'Eyelash growth treatment', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 5000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashTreatment');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Eyelash growth treatment', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_lashes ?? 0) < 3  &&  ((s as any).false_lashes ?? 0) <= 0) {
    scene.actions([
      { label: 'Simple false lashes', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 500]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashfalsiesstyle = 1;
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashFalsies');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Simple false lashes', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_lashes ?? 0) < 4  &&  ((s as any).false_lashes ?? 0) <= 0) {
    scene.actions([
      { label: 'Dramatic false lashes', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashfalsiesstyle = 2;
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashFalsies');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Dramatic false lashes', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lashextensionduration ?? 0) <= 0) {
    scene.actions([
      { label: '2D volume eyelash extensions', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 2000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashextensionstyle = 2;
      (st as any).lashextensionnew = 1;
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashExtension');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: '2D volume eyelash extensions', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lashextensionduration ?? 0) <= 0) {
    scene.actions([
      { label: '4D volume eyelash extensions', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 5000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashextensionstyle = 4;
      (st as any).lashextensionnew = 1;
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashExtension');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: '4D volume eyelash extensions', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 10000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lashextensionduration ?? 0) <= 0) {
    scene.actions([
      { label: '6D volume eyelash extensions', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 10000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashextensionstyle = 6;
      (st as any).lashextensionnew = 1;
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashExtension');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: '6D volume eyelash extensions', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lashextensionduration ?? 0) >= 1  &&  ((s as any).lashextensionduration ?? 0) <= 4  &&  ((s as any).lashextensionstyle ?? 0) === 2) {
    scene.actions([
      { label: 'Refill your 2D lash extension', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashextensionnew = 0;
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashExtension');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refill your 2D lash extension', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lashextensionduration ?? 0) >= 1  &&  ((s as any).lashextensionduration ?? 0) <= 4  &&  ((s as any).lashextensionstyle ?? 0) === 4) {
    scene.actions([
      { label: 'Refill your 4D lash extension', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 2500]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashextensionnew = 0;
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashExtension');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refill your 4D lash extension', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lashextensionduration ?? 0) >= 1  &&  ((s as any).lashextensionduration ?? 0) <= 4  &&  ((s as any).lashextensionstyle ?? 0) === 6) {
    scene.actions([
      { label: 'Refill your 6D lash extension', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 5000]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashextensionnew = 0;
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashExtension');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refill your 6D lash extension', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lashextensionduration ?? 0) > 0) {
    scene.actions([
      { label: 'Remove your eyelash extensions', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 500]; enterDiscount(st, scene); (st as any).locArgs = __savedLocArgs; }
      (st as any).lashextensionnew = (-1);
      qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
      qspGoto(st, 'salon', 'lashExtension');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Remove your eyelash extensions', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterLashTreatment(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).pcs_lashes ?? 0) < 2) {
    (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (1);
  }
  if (((s as any).pcs_naturallashes ?? 0) < 2) {
    (s as any).pcs_naturallashes = ((s as any).pcs_naturallashes ?? 0) + (1);
  }
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 5) + 1));
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/eyelash_salon.jpg');
  scene.text('The specialist collects your payment and moves you over to a chair with a headrest, which she has you tilt your head back up against.');
  scene.text('It scarcely takes any time at all -- she takes a cleansing wipe up to your eyes and dabs at them gently until she\'s convinced they\'re clean, then very carefully brushes an applicator not unlike a mascara wand up against the base of your lashes.');
  scene.text('She gently blots what little excess there is and sends you on your way, letting you know you should see results fairly soon.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterLashFalsies(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  scene.img('images/locations/city/citycenter/mall/salon/eyelash_salon.jpg');
  scene.text('The specialist collects your payment and moves you over to a chair with a headrest, which she has you tilt your head back up against.');
  if (((s as any).lashfalsiesstyle ?? 0) === 1) {
    if (((s as any).pcs_lashes ?? 0) < 3) {
      (s as any).pcs_lashes = 3;
    }
    (s as any).false_lashes = 1;
    scene.text('She spends a few minutes selecting and trimming a set of simple, if dramatic false lashes to get them to line up neatly with your own natural set, and glues them delicately in place with practiced ease, only having to give them one or two gentle, settling nudges.');
  }
  if (((s as any).lashfalsiesstyle ?? 0) === 2) {
    if (((s as any).pcs_lashes ?? 0) < 4) {
      (s as any).pcs_lashes = 4;
    }
    (s as any).false_lashes = 1;
    scene.text('She spends a few minutes selecting and trimming a set of ornate, dramatically-feathered false lashes to get them to line up neatly with your own natural set, and glues them delicately in place with practiced ease, only having to give them one or two gentle, settling nudges.');
  }
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'stat', '');
  scene.text('"There you go! You\'re all set! Have fun with wherever you\'re going!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterLashExtension(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/eyelash_salon.jpg');
  scene.text('The specialist collects your payment and brings you into a back room, asking you to lay down and relax upon a salon-style table.');
  if (((s as any).lashextensionnew ?? 0) === 1) {
    if (((s as any).false_lashes ?? 0) >= 1) {
      scene.text('She gently peels off your old, daily-wear false lashes, and spends a few minute cleaning off the glue that held them there. "You won\'t be needing these anymore!"');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).false_lashes = 0;
      (s as any).pcs_lashes = ((s as any).pcs_naturallashes ?? 0);
    }
    if (((s as any).lashextensionstyle ?? 0) === 2) {
      if (((s as any).pcs_lashes ?? 0) < 3) {
        (s as any).pcs_lashes = 3;
      }
      scene.text('Over the next hour and a half, you have to lay there quietly, keeping your eyes closed while the technician works at very carefully and precisely bonding a pair of dark, longer lashes to every single one of your natural ones.');
      (s as any).minut = ((s as any).minut ?? 0) + 90;
    }
    if (((s as any).lashextensionstyle ?? 0) === 4) {
      if (((s as any).pcs_lashes ?? 0) < 4) {
        (s as any).pcs_lashes = 4;
      }
      scene.text('Over the next two hours, you have to lay there quietly, keeping your eyes closed while the technician works at very carefully and precisely bonding two pairs of dark, longer lashes to each and every one of your real ones.');
      (s as any).minut = ((s as any).minut ?? 0) + 140;
    }
    if (((s as any).lashextensionstyle ?? 0) === 6) {
      if (((s as any).pcs_lashes ?? 0) < 5) {
        (s as any).pcs_lashes = 5;
      }
      scene.text('It feels like you\'re there forever, listening to customers come and go in the salon\'s main room while you lay there with your eyes shut. It takes the technician almost four hours to bond the countless lashes to your own, some even studded with tiny, lightweight jewels. You can feel the weight of them upon your own natural set, hidden somewhere beneath.');
      (s as any).minut = ((s as any).minut ?? 0) + 210;
    }
    scene.text('"Alright!" she says, expelling a deep breath after her hard work. "Now, just be sure to come in every two weeks or so for your lash fills; if you let most of them fall out, I\'m going to charge you for a whole new set, okay?"');
    (s as any).lashextensionduration = 16;
  }
  if ((!((s as any).lashextensionnew ?? 0))) {
    if (((s as any).false_lashes ?? 0) >= 1) {
      scene.text('She carefully removes the false lashes that you\'ve frankly ill-advised glued on over the vastly more expensive set.');
      scene.text('"Don\'t put glue on these!" she admonishes you. "You should know better!"');
      scene.text('It takes her a while to clean them properly.');
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      (s as any).false_lashes = 0;
      (s as any).pcs_lashes = ((s as any).pcs_naturallashes ?? 0);
    }
    if (((s as any).lashextensionstyle ?? 0) === 2) {
      if (((s as any).pcs_lashes ?? 0) < 3) {
        (s as any).pcs_lashes = 3;
      }
      scene.text('Over the next hour or so, you lay there to have your lashes tidied up; the technician re-glues any loose ones and applies new ones to the new growth you\'ve had over the past few weeks.');
      (s as any).minut = ((s as any).minut ?? 0) + 60;
    }
    if (((s as any).lashextensionstyle ?? 0) === 4) {
      if (((s as any).pcs_lashes ?? 0) < 4) {
        (s as any).pcs_lashes = 4;
      }
      scene.text('An hour and a half passes and the technician makes idle small talk with you while maintaining your bonded extensions, applying new ones to newly-grown lashes and re-affixing any that might\'ve come loose.');
      (s as any).minut = ((s as any).minut ?? 0) + 90;
    }
    if (((s as any).lashextensionstyle ?? 0) === 6) {
      if (((s as any).pcs_lashes ?? 0) < 5) {
        (s as any).pcs_lashes = 5;
      }
      scene.text('Even the maintenance on your extravagantly ornate lashes takes forever, the lash technician hunched uncomfortably forward while she applies countless new lashes to each of your newly-sprouted ones and tidies up any loose ones among the fold.');
      (s as any).minut = ((s as any).minut ?? 0) + 120;
    }
    scene.text('"Alright!" she says, expelling a deep breath after her lengthy maintenance. "You\'re back to being beautiful! See you in another two weeks or so?"');
    (s as any).lashextensionduration = 16;
  }
  if (((s as any).lashextensionnew ?? 0) === -1) {
    if (((s as any).false_lashes ?? 0) >= 1) {
      scene.text('"Well, I\'m afraid I\'ll have to get these falsies off first. I\'m sorry," she explains while carefully removing the glued-on lash strips you have on over your extensions.');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
    }
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.text('Though the technician seems reluctant, she compliantly starts the slightly-painful process of trying to soak off and remove the lash extensions you have left. It stings a little, and you feel like you probably lost some of your natural ones in the bargain as well.');
    if (((s as any).pcs_naturallashes ?? 0) > 0) {
      (s as any).pcs_naturallashes = ((s as any).pcs_naturallashes ?? 0) - (1);
    }
    (s as any).pcs_lashes = ((s as any).pcs_naturallashes ?? 0);
  }
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'stat', '');
  scene.text('After what seems like forever, you\'re finally allowed to open your eyes and take a look.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterTanningBooth(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (10);
  qspCall(s, 'outfit', 'undress');
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 3) + 0));
  qspCall(s, 'archetypes', 'gain', 'bimbo', 'tiny', 'Tanning booth');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/solarium.jpg');
  scene.text('You strip out of all your clothes and fold them neatly on the stool proved, then spend 15 minutes in the tanning booth bronzing your skin.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Re-dress and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'outfit', 'dress');
    qspGoto(st, 'salon', 'start');
  } },
  ]);
  scene.build();
}

function enterHairRemoval(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
    (s as any).partialservice = 500;
    (s as any).fullservice = 1000;
  } else {
    (s as any).partialservice = 1000;
    (s as any).fullservice = 2000;
  }
  scene.img('images/locations/city/citycenter/mall/salon/depilation.jpg');
  if (((s as any).pcs_leghair ?? 0) > 2  &&  qspFunc(s, 'money', 'can_afford', ((s as any).partialservice ?? 0))) {
    // TODO-QSP: dynamic text: Get your legs waxed <a href="exec: gs ''money'', ''pay'', <<partialservice>> & g...
    scene.text(`Get your legs waxed <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027money/u0027, /u0027pay/u0027); return false;">${qspFunc(s, 'money', 'string_price', ((s as any).partialservice ?? ''))}</a> `);
  } else {
    if (((s as any).pcs_leghair ?? 0) > 2) {
      // TODO-QSP: dynamic text: 'Get your legs waxed (' + $func('wrap', 'neg', '<<$func(''money'', ''string_pric...
      scene.text(`Get your legs waxed (' + $func('wrap', 'neg', '${qspFunc(s, 'money', 'string_price', ((s as any).partialservice ?? ''))}') + ') `);
    }
  }
  if (((s as any).pcs_pubes ?? 0) > 2  &&  qspFunc(s, 'money', 'can_afford', ((s as any).partialservice ?? 0))) {
    // TODO-QSP: dynamic text: Get your pubic area waxed <a href="exec: gs ''money'', ''pay'', <<partialservice...
    scene.text(`Get your pubic area waxed <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027money/u0027, /u0027pay/u0027); return false;">${qspFunc(s, 'money', 'string_price', ((s as any).partialservice ?? ''))}</a> `);
  } else {
    if (((s as any).pcs_pubes ?? 0) > 2) {
      // TODO-QSP: dynamic text: 'Get your pubic area waxed (' + $func('wrap', 'neg', '<<$func(''money'', ''strin...
      scene.text(`Get your pubic area waxed (' + $func('wrap', 'neg', '${qspFunc(s, 'money', 'string_price', ((s as any).partialservice ?? ''))}') + ') `);
    }
  }
  if (((s as any).pcs_pubes ?? 0) > 2  &&  ((s as any).pcs_leghair ?? 0) > 2  &&  qspFunc(s, 'money', 'can_afford', ((s as any).fullservice ?? 0))) {
    // TODO-QSP: dynamic text: Get your body waxed <a href="exec: gs ''money'', ''pay'', <<fullservice>> & gt '...
    scene.text(`Get your body waxed <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027money/u0027, /u0027pay/u0027); return false;">${qspFunc(s, 'money', 'string_price', ((s as any).fullservice ?? ''))}</a> `);
  } else {
    if (((s as any).pcs_pubes ?? 0) > 2  &&  ((s as any).pcs_leghair ?? 0) > 2) {
      // TODO-QSP: dynamic text: 'Get your body waxed (' + $func('wrap', 'neg', '<<$func(''money'', ''string_pric...
      scene.text(`Get your body waxed (' + $func('wrap', 'neg', '${qspFunc(s, 'money', 'string_price', ((s as any).fullservice ?? ''))}') + ') `);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'salon', '');
  }, goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterWaxlegs(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_leghair = (-10);
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 5) + 1));
  qspCall(s, 'pain', '5', 'legL', 'pull');
  qspCall(s, 'pain', '5', 'legR', 'pull');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/depilation.jpg');
  scene.text('You get your legs waxed, leaving them feeling silky smooth and completely hair free.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'salon', '');
  }, goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterWaxpubic(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_pubes = (-10);
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 5) + 1));
  qspCall(s, 'pain', '5', 'pubic', 'pull');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/depilation.jpg');
  scene.text('You get your pubic region waxed, leaving it feeling silky smooth and completely hair free.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'salon', '');
  }, goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterWaxbody(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_leghair = (-10);
  (s as any).pcs_pubes = (-10);
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 5) + 1));
  qspCall(s, 'pain', '5', 'legL', 'pull');
  qspCall(s, 'pain', '5', 'legR', 'pull');
  qspCall(s, 'pain', '5', 'pubic', 'pull');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/depilation.jpg');
  scene.text('You get a full body hair removal treatment, giving you a smooth and completely hair free body.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'salon', '');
  }, goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterPubes(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'salon';
  (s as any).menu_arg = 'pubes';
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You go to the technician and tell her you want to dye you pubic hair.');
  scene.text('She asks what colour you\'d like.');
  if (((s as any).pcs_pubecol ?? 0)[2] !== ((s as any).pcs_pubecol ?? 0)) {
    scene.actions([
      { label: 'Return to natural colour', handler: (st: GameState) => {
    scene.text('"I\'m looking to reverse the change of pube colour. I\'d like my natural colour back."');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = ((st as any).pcs_pubecol ?? 0);
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_pubecol ?? 0)[2] !== 0) {
    scene.actions([
      { label: 'Black', handler: (st: GameState) => {
    scene.text('"Black," you say. "I want to be dark and alluring."');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 0;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = ((st as any).pcs_pubes ?? 0)*2;
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_pubecol ?? 0)[2] !== 1) {
    scene.actions([
      { label: 'Brown', handler: (st: GameState) => {
    scene.text('"Brown," you say. "I think that looks nice."');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 1;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = (Math.floor(Math.random() * 8) + 35);
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_pubecol ?? 0)[2] !== 2) {
    scene.actions([
      { label: 'Ginger', handler: (st: GameState) => {
    scene.text('"Ginger. I think that\'s a bit different and hot" you say.');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 2;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = ((st as any).pcs_pubes ?? 0)*2;
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 3) {
    scene.actions([
      { label: 'Blonde', handler: (st: GameState) => {
    scene.text('"Blonde! Blondes have more fun. I don\'t know if that works for pubes, but I want to find out," you giggle.');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 3;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = ((st as any).pcs_pubes ?? 0)*2;
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 4) {
    scene.actions([
      { label: 'Red', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"Red. Like really red," you reply.');
    scene.text('"And what would that be?" The hairdresser asks cheerfully.');
    scene.text('"Light red red. Like a fire truck," you announce.');
    scene.text('"No problem! Please have a seat," she says and turns around one of the chairs for you.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 4;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = ((st as any).pcs_pubes ?? 0)*2;
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 5) {
    scene.actions([
      { label: 'Blue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"This is a bit unusual, but I want to try blue," you reply.');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 5;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = ((st as any).pcs_pubes ?? 0)*2;
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 6) {
    scene.actions([
      { label: 'Green', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"Green. To help the rainforest," you giggle.');
    scene.text('"I don\'t think that\'s how it works..." she says, looking a little confused.');
    scene.text('"Can we at least try?" you ask.');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 6;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = ((st as any).pcs_pubes ?? 0)*2;
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 7) {
    scene.actions([
      { label: 'Pink', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"Pink," you say.');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 7;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = ((st as any).pcs_pubes ?? 0)*2;
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 8) {
    scene.actions([
      { label: 'Purple', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"Do you have any purple dye?" you ask.');
    scene.text('"Sure thing!" she says in a cheerful manner and leads you to a private room.');
    scene.text('"Take a seat and pull down your clothes. We\'ll be done in no time!" she says and points you over to sit on one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[2] = 8;
    ((st as any).pcs_pubecol = (st as any).pcs_pubecol ?? {})[3] = ((st as any).pcs_pubes ?? 0)*2;
    qspCall(st, 'stat', '');
    scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
    scene.text('45 minutes later, the dye has taken and dried in and the technician checks that everything is okay. "All done! You can get dressed."');
    // TODO-QSP: dynamic text: You pull your clothes back up and pay her <<$func(''money'', ''string_price'', 5...
    scene.text(`You pull your clothes back up and pay her ${qspFunc(s, 'money', 'string_price', 500)}.`);
    scene.actions([
      { label: 'Move away', goto: ['salon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSkinCare(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 5) + 1));
  ((s as any).salon = (s as any).salon ?? {})['skin_care_day'] = ((s as any).daystart ?? 0);
  if (((s as any).pcs_skin ?? 0) < 200) {
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (50);
  } else {
    if (((s as any).pcs_skin ?? 0) <= 400) {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (25);
    } else {
      if (((s as any).pcs_skin ?? 0) <= 600) {
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (15);
      } else {
        if (((s as any).pcs_skin ?? 0) <= 800) {
          (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (10);
        } else {
          if (((s as any).pcs_skin ?? 0) <=995) {
            (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (5);
          } else {
            (s as any).pcs_skin = 1000;
          }
        }
      }
    }
  }
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/facialmask.jpg');
  scene.text('You get a beauty mask treatment and your face feels silky smooth.');
  scene.text('You\'re told that you should wait a week before getting a new treatment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterRejuvination(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 5) + 1));
  (s as any).vidageday = ((s as any).vidageday ?? 0) + (50);
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/bodyscrub.jpg');
  scene.text('You get a full body rejuvenation procedure and your skin feels soft and silky smooth.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterMassage(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I was looking to get a massage today."');
  if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] !== 'employed') {
    scene.text('"We have several types of massages for women."');
    scene.text('"First off, we have your <b>standard body massage</b>, <i>guaranteed</i> to leave you feeling relaxed and refreshed!"');
    scene.text('"Then we also have a <b>special wellness massage</b>. Very relaxing as well and the use of special oils will leave you feeling younger and delay the aging process of your skin."');
    scene.text('"There is also the <b>magic finger massage</b>, which relaxes you in a <i>different</i> way. Designed to release tension from your body, we\'re sure it will have you moaning for the entire session! It has very <i>climactic</i> results."');
    scene.text('"We also have a <b>throat massage</b> for those who have a bit of an oral fixation. Helps to satisfy the need to suck on something. Comes with a complimentary cocktail or facial, whichever you choose."');
    scene.text('"We have the <b>hardcore massage</b> and the <b>double hardcore massage</b>. The hardcore massage is there to quite literally pound the stress from your body. Our massage therapists are extremely skilled when it comes to relieving stress in this manner. A double hardcore massage is simply adding one more person. Instead of a single massage therapist, two of them will simultaneously pound you for maximum stress relief."');
    scene.text('"Lastly, we have a <b>gentle massage</b>. Not everybody likes it hard, so we have a more gentle version as well that should fill your needs quite nicely if you are inclined."');
    scene.text('"What kind of massage were you interested in today? By the way, we\'re cash only."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Normal massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get a standard body massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'normal_massage'] },
      ]);
    }
  } },
      { label: 'Wellness massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the special wellness massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'wellness_massage'] },
      ]);
    }
  } },
      { label: 'Magic finger massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the magic finger massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'magic_massage'] },
      ]);
    }
  } },
      { label: 'Throat massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get a throat massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'throat_massage'] },
      ]);
    }
  } },
      { label: 'Hardcore massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the hardcore massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'hardcore_massage'] },
      ]);
    }
  } },
      { label: 'Double hardcore massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the double hardcore massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'double_hardcore_massage'] },
      ]);
    }
  } },
      { label: 'Gentle massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the gentle massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'gentle_massage'] },
      ]);
    }
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Looking to receive instead of give today <<$pcs_firstname>>?"
    scene.text(`"Looking to receive instead of give today ${((s as any).pcs_firstname ?? '')}?"`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'What kind of massages are there?', handler: (st: GameState) => {
    qspCall(st, 'salon', '');
  } },
      { label: 'Normal massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get a standard body massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'normal_massage'] },
      ]);
    }
  } },
      { label: 'Wellness massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the special wellness massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'wellness_massage'] },
      ]);
    }
  } },
      { label: 'Magic finger massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the magic finger massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'magic_massage'] },
      ]);
    }
  } },
      { label: 'Throat massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get a throat massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'throat_massage'] },
      ]);
    }
  } },
      { label: 'Hardcore massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the hardcore massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'hardcore_massage'] },
      ]);
    }
  } },
      { label: 'Double hardcore massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the double hardcore massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'double_hardcore_massage'] },
      ]);
    }
  } },
      { label: 'Gentle massage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
      scene.text('"You want to get the gentle massage?"');
      scene.actions([
        { label: 'Never mind, I don\'t want a massage', goto: ['salon', 'services'] },
        { label: 'Let me see the other options again', goto: ['salon', 'massage'] },
        { label: 'Yes, I\'d like this one', goto: ['salon', 'gentle_massage'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Never mind', goto: ['salon', 'services'] },
  ]);
  scene.build();
}

function enterMassageExplain(s: GameState, scene: SceneBuilder): void {
  scene.text('"We have several types of massages for women."');
  scene.text('"First off, we have your <b>standard body massage</b>, <i>guaranteed</i> to leave you feeling relaxed and refreshed!"');
  scene.text('"Then we also have a <b>special wellness massage</b>. Very relaxing as well and with the use of special oils will leave you feeling younger and delay the aging process of your skin."');
  scene.text('"There is also the <b>magic finger massage</b>, which relaxes you in a <i>different</i> way. Designed to release tension from your body, we\'re sure it will have you moaning for the entire session! It has very <i>climactic</i> results."');
  scene.text('"We also have a <b>throat massage</b> for those who have a bit of an oral fixation. Helps to satisfy the need to suck on something. Comes with a complimentary cocktail or facial, whichever you choose."');
  scene.text('"We have the <b>hardcore massage</b> and the <b>double hardcore massage</b>. The hardcore massage is there to quite literally pound the stress from your body. Our massage therapists are extremely skilled when it comes to relieving stress in this manner. A double hardcore massage is simply adding one more person. Instead of a single massage therapist, two of them will simultaneously pound you for maximum stress relief."');
  scene.text('"Lastly, we have a <b>gentle massage</b>. Not everybody likes it hard, so we have a more gentle version as well that should fill your needs quite nicely if you are inclined."');
  // TODO-QSP: end
  scene.build();
}

function enterMassageEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'dress');
  qspCall(s, 'arousal', 'end');
  qspGoto(s, 'salon', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterNormalMassage(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'undress');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (25);
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'arousal', 'massage', 30);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/mass.jpg');
  scene.text('After undressing and laying on the table, you spend the next 30 minutes in bliss while a massage therapist kneads through the muscles in your back.');
  scene.text('Truth be told, his touch is almost... sensual, and you notice a growing heat between your legs. Fortunately, a towel covers your hips so he shouldn\'t be able to see your wetness.');
  scene.text('But soon enough, the massage is over and you\'re left to redress, a renewed energy coming with your relaxed body.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'massage_end'] },
  ]);
  scene.build();
}

function enterWellnessMassage(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'undress');
  qspCall(s, 'arousal', 'massage', 30);
  qspCall(s, 'stat', '');
  (s as any).vidageday = ((s as any).vidageday ?? 0) + (30);
  (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (4);
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (25);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/mass.jpg');
  scene.text('You undress and lay on the table before an attendant comes in. He begins kneading your back and rubbing a tingling oil all over your body. During your massage, you moan with pleasure as the guy really knows how to get your muscles to relax. It even makes you a little aroused...');
  scene.text('The massage continues and you feel your whole body starting to heat up. The oil is also still tingles and your breathing starts to increase as well. Your face is hot and your nipples feel very sensitive against the soft fabric of the table as you struggle not to squirm beneath the touch of your masseur, your legs very much wanting to grind together.');
  scene.text('And suddenly the massage is over. With a flushed face, you dress yourself after the masseur has left, wondering what the hell was in that oil.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'massage_end'] },
  ]);
  scene.build();
}

function enterMagicMassage(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
  qspCall(s, 'outfit', 'undress');
  qspCall(s, 'arousal', 'massage', 5);
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/nipple_play1.mp4');
  scene.text('You undress and lay on the table before an attendant comes in. He begins by rubbing oil across your body and massaging your shoulders before reaching for your breasts. He massages those too, groping you in such a perfect way that your nipples are already stiff before he ever touches them. When he does, your breath hitches and you feel a growing wetness between your legs.');
  scene.text('After a few minutes of teasing you and building your arousal, he turns you over to lay on your stomach.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn over', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/finger_orgasm1.mp4');
    scene.text('The next part passes by in a blur of pleasure and orgasms. He starts by reaching for your ass and massaging that, but very quickly moves between you legs and starts showing you why they call it a "magic finger" massage. He digs into your pussy, leaving you writhing under his touch as he does something weird with his fingers, causing you gasp and immediately clench down on them. Holy shit, you just came! And then he makes you cum again. And again. And <i>again</i>... You start drooling into the table and lose track of what\'s happening altogether.');
    scene.text('This guy\'s hands know your pussy better than you do. They massage every spot that sets you off, playing with your clit in just the right ways and snaking fingers inside you to rub G-spots you didn\'t know existed. Your entire body becomes stuck in a repetitive cycle of tension while your orgasm builds, followed by mind-numbing release after your climax winds down before it starts building up again. Under his touch, the only thing you know how to do is drool from both sets of lips...');
    (st as any).i = 0;
    // TODO-QSP: :salon_loop
    (st as any).i = ((st as any).i ?? 0) + (1);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_finger', 2, 'no_orgasm_msg');
    if (((st as any).i ?? 0) <= 10) {
      // TODO-QSP: jump 'salon_loop'
    }
    qspCall(st, 'stat', '');
    scene.text('<i>Ohhhhhh myyyyy godddddd...</i>');
    scene.actions([
      { label: 'Next', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'medium');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/after2.jpg');
    scene.text('The massage eventually comes to an end and you\'re left on your own to recover from the experience. Your entire body is flushed, your nipples are rock-hard, your thighs are slick with your own juices, and your post orgasmic high makes you feel like you\'re floating in space. And what do you know? You actually <i>do</i> feel pretty relaxed too! You could fall asleep right there.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'dress');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'salon', 'start');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterThroatMassage(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'undress');
  qspCall(s, 'npcgeneratec', '0', 'masseur', (Math.floor(Math.random() * 43) + 18), 0, 1);
  (s as any).salon_masseur_id = ((s as any).npclastgenerated ?? 0);
  qspCall(s, 'arousal', 'foreplay', 15);
  qspCall(s, 'arousal', 'bj', 15, ((s as any).salon_masseur_id ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'mood', 'raise', 'small');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/bj1.mp4');
  scene.text('You undress and lay on the table before an attendant comes in. He quickly removes his robe to reveal a big beautiful cock and gently hangs your head off the table with a pillow to cushion your neck. He then proceeds to carefully begin throat fucking you.');
  scene.text('You let your eyes roll back into your head as his hands roam your breasts and body while he plows his cock into your mouth, but you\'re eventually woken from your stupor by repeated taps on the shoulder.');
  scene.text('"Ma\'am. Where would you like your cum?"');
  // TODO-QSP: end
  scene.actions([
    { label: '"Mmm mm mmrph" (in my mouth)', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).salon_masseur_id ?? 0));
    scene.img('images/shared/sex/massage/bj1.mp4');
    scene.text('"Mmm mm mmrph," you choke around the masseur\'s cock. Surprisingly, he understands you perfectly and you immediately feel a hot liquid splash into your mouth, which you swallow.');
    scene.text('Once you\'ve finished gulping down everything, the masseur cleans his cock on a towel, thanks you for your patronage, and leaves while you get dressed.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'dress');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'salon', 'start');
  } },
    ]);
  } },
    { label: '"Mmrph mrr mrrrph" (on my face)', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', ((st as any).salon_masseur_id ?? 0));
    qspCall(st, 'cum_call', 'hair', ((st as any).salon_masseur_id ?? 0));
    scene.img('images/shared/sex/massage/facial2.mp4');
    scene.text('"Mmrph mrr mrrrph," you choke around the masseur\'s cock. Surprisingly, he understands you perfectly and without hesitation pulls out of your mouth and climbs onto the edge of the table before blowing his load all over you.');
    scene.text('The hot, sticky liquid coats your face and hair and the masseur smears it everywhere with his cock for as much coverage as possible. It\'s strangely comforting after being throatfucked for half an hour.');
    scene.text('Once your face is fully covered, he steps down off the table, cleans his cock with a towel, and thanks you for your patronage before leaving you to get dressed.');
    scene.actions([
      { label: 'Wipe the cum off your face', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    scene.text('Taking a nearby towel, you wipe your face and hair clean, tossing it into a bin and redressing before preparing to leave.');
    scene.text('"How was your massage?" the receptionist asks.');
    scene.text('"Very good. I really enjoyed the complimentary facial," you say with a smile.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'dress');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'salon', 'start');
  } },
    ]);
  } },
      { label: 'Leave with it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('Ignoring the plentiful supply of towels, you put your clothes back on and head out to the main salon.');
    scene.text('"How was your massage?" the receptionist asks.');
    scene.text('"Very good. I really enjoyed the complimentary facial," you say with a cum webbed smile.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'dress');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'salon', 'start');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHardcoreMassage(s: GameState, scene: SceneBuilder): void {
  (s as any).cumnostd = 1;
  qspCall(s, 'outfit', 'undress');
  qspCall(s, 'npcgeneratec', '0', 'masseur', (Math.floor(Math.random() * 43) + 18), 0, 1);
  (s as any).salon_masseur_id = ((s as any).npclastgenerated ?? 0);
  qspCall(s, 'arousal', 'vaginal', 30, ((s as any).salon_masseur_id ?? 0), 'rough');
  qspCall(s, 'stat', '');
  qspCall(s, 'mood', 'raise', 'small');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
  qspCall(s, 'stat', '');
  scene.img(`images/shared/sex/massage/doggy${(Math.floor(Math.random() * 6) + 1)}.mp4`);
  scene.text('The next 30 minutes are spent getting absolutely <i>railed</i> by a man whose cock must be harder than steel.');
  scene.text('The repetitive sensation of flesh being pounded into your pussy is all you can think about and it\'s driving you insane with pleasure.');
  scene.text('But all good things must come to an end. At the edge of your consciousness, you hear the grunts of the masseur.');
  scene.text('"Would you like a creampie or a facial ma\'am?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Moan incoherently', handler: (st: GameState) => {
    qspCall(st, 'cum_call', '', ((st as any).salon_masseur_id ?? 0));
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).salon_masseur_id ?? 0), 'rough', 'no_orgasm_msg');
    scene.img(`images/shared/sex/massage/creampie${(Math.floor(Math.random() * 3) + 2)}.mp4`);
    scene.text('You don\'t really understand what he\'s saying and just make some kind of sound with your voice as a response. It didn\'t really sound like words, but you thought you should make some kind of response.');
    scene.text('His response is to plunge into you balls deep, all the way to the hilt. Your toes curl in pleasure and a "Nnnngh~!" sound escapes your mouth before a flood of liquid fills the cracks between his cock and your pussy, and you cum hard.');
    scene.text('Everything tightens up and you feel yourself clenching onto his cock like a vise so hard that it straddles the line between pain and pleasure. Then, like a long held breath, everything is released from you. You collapse on the table and feel him slip out of you, whimpering at the empty feeling. Moments later, cum gushes from your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('The masseuse cleans himself off and thanks you for your patronage before giving you a little time to pull yourself back together.');
    scene.text('They weren\'t kidding when they said they\'d pound the stress from your body...');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['salon', 'massage_end'] },
    ]);
  } },
    ]);
  } },
    { label: 'Inside! Inside!', handler: (st: GameState) => {
    qspCall(st, 'cum_call', '', ((st as any).salon_masseur_id ?? 0));
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).salon_masseur_id ?? 0), 'rough', 'no_orgasm_msg');
    scene.img(`images/shared/sex/massage/creampie${(Math.floor(Math.random() * 3) + 2)}.mp4`);
    scene.text('"Inside! Inside! Inside! <i><b>Inside!</b></i>" you scream.');
    scene.text('Your response is savage and visceral. You\'re so high on pleasure and this guy\'s cock that you can barely think. The only thing you know is you want to feel him cum inside you <i><b>now</b></i>.');
    scene.text('At your word, he plunges balls deep into you, thrusting all the way to the hilt. Your toes curl in pleasure and a "Nnnngh~!" sound escapes your mouth before a flood of liquid fills the cracks between his cock and your pussy, and you cum hard.');
    scene.text('Everything tightens up and you feel yourself clenching onto his cock like a vise so hard that it straddles the line between pain and pleasure. Then, like a long held breath, everything is released from you. You collapse on the table and feel him slip out of you, whimpering at the empty feeling. Moments later, cum gushes from your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('The masseuse cleans himself off and thanks you for your patronage before giving you a little time to pull yourself back together.');
    scene.text('You feel dazed. They weren\'t kidding when they said they\'d pound the stress from your body...');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['salon', 'massage_end'] },
    ]);
  } },
    ]);
  } },
    { label: 'Face! Face! Face!', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', ((st as any).salon_masseur_id ?? 0));
    qspCall(st, 'cum_call', 'hair', ((st as any).salon_masseur_id ?? 0));
    qspCall(st, 'cum_call', 'mouth', ((st as any).salon_masseur_id ?? 0));
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).salon_masseur_id ?? 0), 'rough', 'no_orgasm_msg');
    scene.img(`images/shared/sex/massage/facial${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    scene.text('"Face! Face! Face!" you cry out.');
    scene.text('Your response is savage and visceral. You\'re so high on pleasure and this guy\'s cock that you can barely think. The only thing you know is you want to feel him cum all over your face right now.');
    scene.text('You spread your legs wide and he pulls himself from you before immediately rushing to your head. The moment he gets there, cum splatters all over your face and hair. The moment it touches your skin, you feel an enormous rush and cum <i>hard.</i>');
    scene.text('You moan open mouthed with your tongue sticking out, the only thing you\'re aware of being his cum being smeared over the rest of your face by his cock.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('The masseuse cleans himself off and thanks you for your patronage before giving you a little time to pull yourself back together.');
    scene.text('You feel dazed. To think you could cum just from someone ejaculating over your face... The buildup must have been intense...');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['salon', 'massage_end'] },
      { label: 'Wipe your face off first', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspGoto(st, 'salon', 'massage_end');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoubleHardcoreMassage(s: GameState, scene: SceneBuilder): void {
  (s as any).cumnostd = 1;
  qspCall(s, 'outfit', 'undress');
  qspCall(s, 'npcgeneratec', '0', 'masseur', (Math.floor(Math.random() * 43) + 18), 0, 1);
  (s as any).salon_masseur_id = ((s as any).npclastgenerated ?? 0);
  qspCall(s, 'npcgeneratec', '0', 'masseur', (Math.floor(Math.random() * 43) + 18), 0, 1);
  (s as any).salon_masseur2_id = ((s as any).npclastgenerated ?? 0);
  qspCall(s, 'arousal', 'vaginal', 30, ((s as any).salon_masseur_id ?? 0), 'rough');
  qspCall(s, 'arousal', 'bj', (-30), ((s as any).salon_masseur2_id ?? 0), 'rough');
  qspCall(s, 'stat', '');
  qspCall(s, 'mood', 'raise', 'small');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/spitroast1.mp4');
  scene.text('"Mmmmm..." you moan around the cock in your mouth while the one behind you slams into you again and again for the hundredth time. Or is it two? Or probably more like four.');
  scene.text('You have no idea how long it\'s been since you started. Twenty minutes? Half an hour? The only thing you know is how much you\'ve been enjoying being pistoned back and forth between these two cocks. And the guys attached to them know <i>exactly</i> what they\'re doing. Every thrust fills you up just right, and the one you\'ve been sucking on has the perfect shape and flavor for a girl\'s enjoyment. You could stay between these cocks forever...');
  scene.text('But all good things must come to an end.');
  scene.text('"Time is almost up, ma\'am. Would you like us to cum inside you or give you a double facial?" one of them asks.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Mm-mm mmm" (inside please)', handler: (st: GameState) => {
    qspCall(st, 'cum_call', '', ((st as any).salon_masseur_id ?? 0));
    qspCall(st, 'cum_call', 'mouth', ((st as any).salon_masseur2_id ?? 0));
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'bj', (-5), ((st as any).salon_masseur2_id ?? 0), 'rough', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/spitroast1.mp4');
    scene.text('"Mm-mm mmm," you mumble around the cock in your mouth. Interestingly enough, they seem to understand perfectly and begin to pick up the pace until they simultaneously thrust into both your holes, filling them to the limit with flesh and immediately after, cum.');
    scene.text('The tangy taste fills your mouth and you feel another thick liquid spurting into your pussy at the same time. It drives you crazy and sends you into a toe curling orgasm. Somewhere in the back of your mind, you notice cum in your mouth tastes remarkably sweet and you wonder if the salon encourages them to add lots of sweet fruits to their diet.');
    scene.text('As they both withdraw from you, you feel cum dribble from both sets of lips, though you can only lick one of them.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('After thanking you for your patronage, the two masseurs depart, giving you a little time to catch your breath and get dressed.');
    scene.text('You lick your lips again, still feeling cum sticking to the corners of your mouth. Turns out that getting double teamed by trained masseurs is a very delicious experience, in more ways than one.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['salon', 'massage_end'] },
    ]);
  } },
    ]);
  } },
    { label: '"Mmm mmm mm mmmmph" (give me the facial)', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', ((st as any).salon_masseur_id ?? 0));
    qspCall(st, 'cum_call', 'face', ((st as any).salon_masseur2_id ?? 0));
    qspCall(st, 'cum_call', 'hair', ((st as any).salon_masseur_id ?? 0));
    qspCall(st, 'cum_call', 'hair', ((st as any).salon_masseur2_id ?? 0));
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'bj', (-5), ((st as any).salon_masseur2_id ?? 0), 'rough', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial28.jpg');
    scene.text('"Mmm mmm mm mmmmph," you mumble around the cock in your mouth. Interestingly enough, they seem to understand perfectly and immediately withdraw from your holes, gathering around your face. You stick out your tongue in anticipation and are rewarded with hot streams of cum spattering across your face. It\'s thick, it\'s sticky, and makes you feel so fucking hot.');
    scene.text('You massage your clit furiously while they shoot load after load that coats your face and hair before you\'re finally sent over the edge into orgasm.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('While your orgasm winds down, the two masseurs wipe themselves clean and thank you for your patronage before departing to give you a little time to catch your breath and get dressed.');
    scene.text('You stretch and sigh in deep satisfaction. This place knows how to treat ladies right.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['salon', 'massage_end'] },
      { label: 'Wipe your face off first', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspGoto(st, 'salon', 'massage_end');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGentleMassage(s: GameState, scene: SceneBuilder): void {
  (s as any).cumnostd = 1;
  qspCall(s, 'outfit', 'undress');
  qspCall(s, 'npcgeneratec', '0', 'masseur', (Math.floor(Math.random() * 43) + 18), 0, 1);
  (s as any).salon_masseur_id = ((s as any).npclastgenerated ?? 0);
  qspCall(s, 'arousal', 'massage', 5);
  qspCall(s, 'arousal', 'vaginal', 25, ((s as any).salon_masseur_id ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'mood', 'raise', 'small');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2500]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/massage/miss8.mp4');
  scene.text('After a short but incredibly sensual massage, you have spent the last half an hour being sexually pampered by this masseur\'s cock.');
  scene.text('Within minutes of starting, you were soaking wet and his cock slid inside you so smoothly. From then on, it\'s been almost torturously gentle, every thrust long and slow, filling you up and stretching your walls, before retreating again like an ocean wave. In a weird way, it feels like breathing if breathing could bring you to orgasm.');
  scene.text('Still thrusting slowly and gently, the masseur whispers in your ear. "Where would you like your cum, ma\'am? Inside or on your face?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Inside', handler: (st: GameState) => {
    qspCall(st, 'cum_call', '', ((st as any).salon_masseur_id ?? 0));
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).salon_masseur_id ?? 0), 'rough', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/creampie5.mp4');
    scene.text('"Inside please," you mew back.');
    scene.text('The masseur pushes into you until you\'re stretched to the limit. Once he\'s reached the deepest point inside you, that\'s when you feel it. Something hot spreads inside you and you can feel it filling your uterus. His cock pulses inside you and you cum as well, eyes rolling back into your head as you do.');
    scene.text('He eventually finishes and pulls out of you, a thick stream of liquid flowing out after.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('The masseuse cleans himself off and thanks you for your patronage before giving you a little time to clean up and get dressed, but you continue to lay on the table for a few minutes.');
    scene.text('That might have been the most relaxing orgasm of your life...');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['salon', 'massage_end'] },
    ]);
  } },
    ]);
  } },
    { label: 'My face', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).salon_masseur_id ?? 0));
    qspCall(st, 'cum_call', 'face', ((st as any).salon_masseur_id ?? 0));
    qspCall(st, 'cum_call', 'hair', ((st as any).salon_masseur_id ?? 0));
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', (-5), ((st as any).salon_masseur_id ?? 0), 'rough', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/massage/facial2.mp4');
    scene.text('"Face please," you mew.');
    scene.text('He thrusts slowly into you a few more times, playing with your clit until you start orgasming. Once you start, he immediately pulls out and moves to your face to start cumming himself.');
    scene.text('The sensation of climax combined with the cum painting your face is incredible, and you spend the next few minutes in bliss.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
    scene.text('The masseuse cleans himself off and thanks you for your patronage before giving you a little time to clean up and get dressed, but you continue to lay on the table for a few minutes.');
    scene.text('That might have been the most relaxing fuck of your life...');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['salon', 'massage_end'] },
      { label: 'Wipe your face off first', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    qspGoto(st, 'salon', 'massage_end');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 5;
  (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) + (8);
  scene.img('images/locations/city/citycenter/photo/makeup.jpg');
  scene.text('When the makeover is finished, you look at yourself in the mirror.');
  scene.text('It looks as if you aren\'t even wearing makeup. You still look like yourself, but a more perfect version.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'salon', '');
  }, goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterCosmeticTattooStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2000]; enterDiscount(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <br>We currently offer five levels of cosmetic tattoos: light, vibrant, sultry, ...
  scene.text(`<br>We currently offer five levels of cosmetic tattoos: light, vibrant, sultry, professional and celebrity.<br>Please keep in mind that these procedures are permanent.<br>Also, be aware that after procedure using regular cosmetics will be difficult.<br>Price is set at ${qspFunc(s, 'money', 'string_price', ((s as any).salon_rate ?? ''))}`);
  if (qspFunc(s, 'money', 'can_afford', ((s as any).salon_rate ?? 0))) {
    if (((s as any).cosmetic_tattoo ?? 0) === 5) {
      scene.text('You already have the heaviest cosmetic tattoo that is on offer.');
    } else {
      if (((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo'  ||  ((s as any).inhib_lvl ?? 0) >= 10) {
        if (((s as any).cosmetic_tattoo ?? 0) < 1) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Get light cosmetic tattoo - ' + String(qspFunc(s, 'money', 'string_price', ((s as any).salon_rate ?? '')) ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
    qspGoto(st, 'salon', 'cosmetic_tattoo_operation', '1');
  } },
          ]);
        }
        if (((s as any).cosmetic_tattoo ?? 0) < 2) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Get vibrant cosmetic tattoo - ' + String(qspFunc(s, 'money', 'string_price', ((s as any).salon_rate ?? '')) ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
    qspGoto(st, 'salon', 'cosmetic_tattoo_operation', '2');
  } },
          ]);
        }
        if (((s as any).cosmetic_tattoo ?? 0) < 3) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Get sultry cosmetic tattoo - ' + String(qspFunc(s, 'money', 'string_price', ((s as any).salon_rate ?? '')) ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
    qspGoto(st, 'salon', 'cosmetic_tattoo_operation', '3');
  } },
          ]);
        }
        if (((s as any).cosmetic_tattoo ?? 0) < 4) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Get professional cosmetic tattoo - ' + String(qspFunc(s, 'money', 'string_price', ((s as any).salon_rate ?? '')) ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
    qspGoto(st, 'salon', 'cosmetic_tattoo_operation', '4');
  } },
          ]);
        }
        if (((s as any).cosmetic_tattoo ?? 0) < 5) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Get celebrity(bimbo) cosmetic tattoo - ' + String(qspFunc(s, 'money', 'string_price', ((s as any).salon_rate ?? '')) ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).salon_rate ?? 0));
    qspGoto(st, 'salon', 'cosmetic_tattoo_operation', '5');
  } },
          ]);
        }
      } else {
        scene.text('<br>You dont feel confident enough to get one of these.');
      }
    }
  } else {
    scene.text('<br>You can\'t afford this treatment.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterCosmeticTattooOperation(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_tattoo = ((s as any).locArgs?.[1] ?? 0);
  scene.img(`images/locations/city/citycenter/mall/salon/ct${((s as any).temp_tattoo ?? '')}.jpg`);
  if (((s as any).temp_tattoo ?? 0) === 1) {
    scene.text('The technician works away with the needle for 45 minutes until your light cosmetic tattoo is completed.');
  } else {
    if (((s as any).temp_tattoo ?? 0) === 2) {
      scene.text('The technician works away with the needle for 45 minutes until your vibrant cosmetic tattoo is completed.');
    } else {
      if (((s as any).temp_tattoo ?? 0) === 3) {
        scene.text('The technician works away with the needle for 45 minutes until your sultry cosmetic tattoo is completed.');
      } else {
        if (((s as any).temp_tattoo ?? 0) === 4) {
          scene.text('The technician works away with the needle for 45 minutes until your professional cosmetic tattoo is completed.');
        } else {
          if (((s as any).temp_tattoo ?? 0) === 5) {
            scene.text('The technician works away with the needle for 45 minutes until your celebrity(bimbo) cosmetic tattoo is completed.');
            qspCall(s, 'archetypes', 'gain', 'bimbo', 'medium', 'Cosmetic bimbo tattoo');
          }
        }
      }
    }
  }
  (s as any).cosmetic_tattoo = ((s as any).temp_tattoo ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['salon', 'services'] },
  ]);
  scene.build();
}

function enterMom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/mom/salon.jpg');
  // TODO-QSP: dynamic text: The salon seems to be pretty busy today. As you enter, you see your <<$npc_nickn...
  scene.text(`The salon seems to be pretty busy today. As you enter, you see your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')} and Aunt Luda. They haven't seen you yet and seem to just be chatting as they wait for their turn.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore them and leave', goto: ['city_mall', ''] },
    { label: 'Go talk to them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/momsalon.jpg');
    // TODO-QSP: dynamic text: You walk over to your <<$npc_nickname[''A29'']>> and Luda. "Hi <<$npc_nickname['...
    scene.text(`You walk over to your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} and Luda. "Hi ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}, hi Aunt Luda! Are you guys getting your hair done?"`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> looks up at you and seems a little surprised to ...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} looks up at you and seems a little surprised to see you. "Yes. We're going to get a manicure as well. You should join us. I'll pay."`);
    scene.text('Luda speaks up as well. "Yes dear, you should join us."');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>>''s name is called and she gets up and takes a se...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}'s name is called and she gets up and takes a seat to get her hair styled. A free manicure would be nice, but that also means having to spend time with them and listening to them talk about boring stuff.`);
    scene.actions([
      { label: 'Tell her you\'re busy', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', (-1));
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/salon.jpg');
    scene.text('You shakes your head. "Sorry, but I can\'t. I already have plans."');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> sighs a little, clearly disappointed. "Well okay...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} sighs a little, clearly disappointed. "Well okay then. Don't stay out too late."`);
    scene.text('You say goodbye to each other and they go back to talking again as you leave.');
    scene.actions([
      { label: 'Leave', goto: ['city_mall', ''] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A29', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A30', 1);
    ((st as any).locat = (st as any).locat ?? {})['Mom_Salon_daystart'] = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/momsvetsalon.jpg');
    scene.text('You sit next to Luda, but only for a moment since her name is soon called and she gets up to get her hair done.');
    // TODO-QSP: dynamic text: Once she''s done, they''re both taken to have a manicure done and you''re called...
    scene.text(`Once she's done, they're both taken to have a manicure done and you're called over to join them. The three of you sit near each other as you get manicures. Luda and your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} talk about a variety of topics, mostly gossip about what's going on in Pavlovsk or the people they both know, or stories about what happened at their work.`);
    scene.text('You occasionally chime in, telling them about some stuff you\'ve been up to of late. It\'s surprisingly fun and you got a nice manicure out of it.');
    // TODO-QSP: dynamic text: Once you''re finished, your <<$npc_nickname[''A29'']>> pays for both of you and ...
    scene.text(`Once you're finished, your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} pays for both of you and Luda pays for herself and you all walk out together.`);
    scene.text('"That was fun, but I should get back and make dinner for me and Olu," Luda says.');
    // TODO-QSP: dynamic text: Your <<$npc_nickname[''A29'']>> and Luda share a brief hug. "Same here. Vlad wou...
    scene.text(`Your ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} and Luda share a brief hug. "Same here. Vlad wouldn't know what to do and would likely starve if I don't get dinner started soon."`);
    scene.text('They both laugh at that and Luda says goodbye before she walks away. Your mother starts for home as well.');
    scene.text('"Dinner will be ready in about half a hour. You should come home and join us."');
    scene.actions([
      { label: 'Leave', goto: ['city_mall', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCleanvar(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'receptionist':
      enterReceptionist(s, scene);
      break;
    case 'receptionist_talk_menu':
      enterReceptionistTalkMenu(s, scene);
      break;
    case 'discount':
      enterDiscount(s, scene);
      break;
    case 'services':
      enterServices(s, scene);
      break;
    case 'job_interview1':
      enterJobInterview1(s, scene);
      break;
    case 'job_offer':
      enterJobOffer(s, scene);
      break;
    case 'whore_offer':
      enterWhoreOffer(s, scene);
      break;
    case 'whore_offer2':
      enterWhoreOffer2(s, scene);
      break;
    case 'part_time_full_time':
      enterPartTimeFullTime(s, scene);
      break;
    case 'masseuse_orientation':
      enterMasseuseOrientation(s, scene);
      break;
    case 'whore_orientation':
      enterWhoreOrientation(s, scene);
      break;
    case 'questions':
      enterQuestions(s, scene);
      break;
    case 'lockers':
      enterLockers(s, scene);
      break;
    case 'lei_work':
      enterLeiWork(s, scene);
      break;
    case 'lei_work2':
      enterLeiWork2(s, scene);
      break;
    case 'resignation':
      enterResignation(s, scene);
      break;
    case 'payday':
      enterPayday(s, scene);
      break;
    case 'payday_end':
      enterPaydayEnd(s, scene);
      break;
    case 'eyelashes':
      enterEyelashes(s, scene);
      break;
    case 'lashTreatment':
      enterLashTreatment(s, scene);
      break;
    case 'lashFalsies':
      enterLashFalsies(s, scene);
      break;
    case 'lashExtension':
      enterLashExtension(s, scene);
      break;
    case 'tanning_booth':
      enterTanningBooth(s, scene);
      break;
    case 'hair_removal':
      enterHairRemoval(s, scene);
      break;
    case 'waxlegs':
      enterWaxlegs(s, scene);
      break;
    case 'waxpubic':
      enterWaxpubic(s, scene);
      break;
    case 'waxbody':
      enterWaxbody(s, scene);
      break;
    case 'pubes':
      enterPubes(s, scene);
      break;
    case 'skin_care':
      enterSkinCare(s, scene);
      break;
    case 'rejuvination':
      enterRejuvination(s, scene);
      break;
    case 'massage':
      enterMassage(s, scene);
      break;
    case 'massage_explain':
      enterMassageExplain(s, scene);
      break;
    case 'massage_end':
      enterMassageEnd(s, scene);
      break;
    case 'normal_massage':
      enterNormalMassage(s, scene);
      break;
    case 'wellness_massage':
      enterWellnessMassage(s, scene);
      break;
    case 'magic_massage':
      enterMagicMassage(s, scene);
      break;
    case 'throat_massage':
      enterThroatMassage(s, scene);
      break;
    case 'hardcore_massage':
      enterHardcoreMassage(s, scene);
      break;
    case 'double_hardcore_massage':
      enterDoubleHardcoreMassage(s, scene);
      break;
    case 'gentle_massage':
      enterGentleMassage(s, scene);
      break;
    case 'makeup':
      enterMakeup(s, scene);
      break;
    case 'cosmetic_tattoo_start':
      enterCosmeticTattooStart(s, scene);
      break;
    case 'cosmetic_tattoo_operation':
      enterCosmeticTattooOperation(s, scene);
      break;
    case 'mom':
      enterMom(s, scene);
      break;
    case 'cleanvar':
      enterCleanvar(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const salon: LocationDef = {
  name: 'salon',
  title: 'Beauty Bar',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
