import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'salon', ((s as any).locArgs?.[0] ?? 0));
  (s as any).salonrand = Math.floor(Math.random() * 10) + 0;
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Beauty Bar</b></center>');
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  if (((s as any).locat ?? 0)?.['Mother'] === 21  &&  ((s as any).locat ?? 0)?.['Mom_Salon_daystart'] !== ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['salon', 'mom'] }]);
  }
  if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
    if (((s as any).job_missed_total ?? 0)?.['city_salon_masseuse'] >= 3) {
      scene.actions([{ label: 'Continue', goto: ['masseuse_work', 'fired'] }]);
    }
    if (((s as any).masseuse ?? 0)?.['uniform'] !== 1) {
      if ((((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).daystart ?? 0)) + ', 0'] !== ''  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 13  &&  ((s as any).masseuse ?? 0)?.['worked_' + String(((s as any).daystart ?? 0)) + '_1'] === 0)  ||  (((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).daystart ?? 0)) + ', 1'] !== ''  &&  ((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).masseuse ?? 0)?.['worked_' + String(((s as any).daystart ?? 0)) + '_2'] === 0)  ||  (((s as any).job_booking ?? 0)['city_salon_masseuse, ' + String(((s as any).daystart ?? 0)) + ', 2'] !== ''  &&  ((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).masseuse ?? 0)?.['worked_' + String(((s as any).daystart ?? 0)) + '_3'] === 0)) {
        if (((s as any).masseuse ?? 0)?.['late'] === 0) {
          (s as any).masseuse['late'] = 1;
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
      scene.actions([{ label: 'Continue', goto: ['masseuse_work', 'massage_room'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['salon', 'lei_work'] }]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).masseuse ?? 0)?.['uniform'] === 1) {
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_mall', ''] }]);
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
    // TODO-QSP: dynamic text: "It's after hours, <<$pcs_firstname>>. You should go home."
    scene.text(`"It's after hours, ${((s as any).pcs_firstname ?? 0)}. You should go home."`);
  } else {
    scene.text('"Hello, what can I help you with today?"');
    if (((s as any).masseuse ?? 0)?.['salon_state'] === 'resigned') {
      // TODO-QSP: dynamic text: "Hello again, <<$pcs_firstname>>. What can I help you with?"
      scene.text(`"Hello again, ${((s as any).pcs_firstname ?? 0)}. What can I help you with?"`);
    } else {
      // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>! Are you here to pick up your paycheck?"
      scene.text(`"Hello ${((s as any).pcs_firstname ?? 0)}! Are you here to pick up your paycheck?"`);
      if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
        // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>! Are you scheduled for a shift today? Or are you here ...
        scene.text(`"Hello ${((s as any).pcs_firstname ?? 0)}! Are you scheduled for a shift today? Or are you here for some discount services?"`);
      }
      qspCall(s, 'salon', 'receptionist_talk_menu');
    }
  }
  qspCall(s, 'salon', 'discount', 1000);
  if (((s as any).cosmetic_tattoo ?? 0) <= 4) {
    scene.actions([
      { label: 'Cosmetic tattoos service', goto: ['salon', 'cosmetic_tattoo_start'] },
    ]);
  }
  scene.actions([
    { label: 'Professional makeup [+$func(\'money\', \'get_cost_string\', salon_...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'salon', 'discount', 1000);
      qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
      scene.actions([{ label: 'Continue', goto: ['salon', 'makeup'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterJobInterview1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I actually wanted to know if you had any job openings available."');
  scene.text('"We have several openings for female masseuses. How do you feel about that?"');
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
    qspCall(s, 'salon', 'job_offer');
  } },
    ]);
  } },
    { label: 'Tell me about the job', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I might be interested. Tell me more about it?"');
    scene.text('"I\'d be happy to!" she smiles.');
    qspCall(s, 'salon', 'job_offer');
  } },
  ]);
  scene.build();
}

function enterJobOffer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Shifts are four hours long and pay <<$func('money', 'string_profit', 400)>> per...
  scene.text(`"Shifts are four hours long and pay ${qspFunc(s, 'money', 'string_profit', 400)} per shift. We allow employees to schedule their own shifts rather than being assigned, but senior employees get priority over newer employees. We expect you to work 5 shifts if you're part time or 10 shifts if you're full time. We do not provide overtime compensation, so if you choose to work more shifts or are kept late with a customer, you will only be paid for your shift."`);
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
    qspCall(s, 'salon', 'whore_offer');
  } },
    ]);
  } },
    { label: 'Sounds fine', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Okay, that all sounds fine."');
    scene.text('"Great!" she says. "And are you a certified massage therapist?"');
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      (s as any).masseuse['pending_rank'] = 1;
      (s as any).masseuse['hourly'] = 100;
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
  (s as any).masseuse['brothel_know'] = 1;
  scene.text('"In addition to giving normal massages, some of our masseuses offer more... intimate services. Namely, performing the massages while naked, performing handjobs, performing blowjobs, or having sex with the customer. What I mean to say is that we function as a salon, a massage parlor, and a brothel. If you would like to be paid more, we offer specialty positions for sex work. Are you interested in that kind of work?"');
  scene.actions([
    { label: 'Ew, not interested', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Ew," you say, wrinkling your nose in disgust. "Yeah, no, I\'m not interested in that."');
    // TODO-QSP: dynamic text: "Are you sure? We pay our whores up to <<$func('money', 'string_profit', 1000)>>...
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
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      (s as any).masseuse['pending_rank'] = 1;
      (s as any).masseuse['hourly'] = 100;
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
    qspCall(s, 'salon', 'whore_offer2');
  } },
    ]);
  } },
    { label: 'Tell me more', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Tell me more about this."');
    qspCall(s, 'salon', 'whore_offer2');
  } },
  ]);
  scene.build();
}

function enterWhoreOffer2(s: GameState, scene: SceneBuilder): void {
  scene.text('"Let me explain. If you want the highest pay as a whore, you will be expected to do any of the work we have on the menu. That includes basic body massages, massages given while you are naked, handjobs, blowjobs, and of course, sex. But each customer pays for a different service, we don\'t have any all included packages. If you aren\'t comfortable with going so far, you can choose to perform only lesser services, but for less pay of course. You can just do oral and handjobs if you prefer with no fucking, or just performing normal massages while naked. It\'s no problem for us, we\'ll just pay you less."');
  // TODO-QSP: dynamic text: "We pay <<$func('money', 'string_profit', 1000)>> a shift for full whores, <<$fu...
  scene.text(`"We pay ${qspFunc(s, 'money', 'string_profit', 1000)} a shift for full whores, ${qspFunc(s, 'money', 'string_profit', 700)} for oral masseuses, ${qspFunc(s, 'money', 'string_profit', 600)} for happy end masseuses, ${qspFunc(s, 'money', 'string_profit', 500)} for naked masseuses, and of course, ${qspFunc(s, 'money', 'string_profit', 400)} for regular masseuses. All employees also enjoy a 50% discount of any other services the salon has to offer. Oh, but we don't pay for birth control. And company policy is that we never use condoms with customers. After that, everything else is the same. We let the whores pick and choose their own shifts. Four hour shifts at a time. Pay day is Friday."`);
  scene.text('She lays everything out for you as calmly and methodically as if she were trying to sell a body oil.');
  scene.text('"That about covers it. Still interested?"');
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
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      (s as any).masseuse['pending_rank'] = 1;
      (s as any).masseuse['hourly'] = 100;
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
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      (s as any).masseuse['pending_rank'] = 1;
      (s as any).masseuse['hourly'] = 100;
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
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      (s as any).masseuse['pending_rank'] = 2;
      (s as any).masseuse['hourly'] = 125;
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
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      (s as any).masseuse['pending_rank'] = 3;
      (s as any).masseuse['hourly'] = 150;
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
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      (s as any).masseuse['pending_rank'] = 4;
      (s as any).masseuse['hourly'] = 175;
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
    if (((s as any).license ?? 0)?.['masseuse'] === 1) {
      (s as any).masseuse['pending_rank'] = 5;
      (s as any).masseuse['hourly'] = 250;
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
  scene.actions([
    { label: 'Part time', handler: (st: GameState) => {
    (s as any).masseuse['shifts_required'] = 5;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Part time."');
    scene.text('"Okay," she prints out a piece of paper and pushes a pen towards you. "This is an employee contract for a part time masseuse. Just sign there at the bottom and I\'ll give you a quick orientation."');
    scene.actions([
      { label: 'Sign', handler: (st: GameState) => {
    if (((s as any).masseuse ?? 0)?.['pending_rank'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['salon', 'masseuse_orientation'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['salon', 'whore_orientation'] }]);
    }
  } },
    ]);
  } },
    { label: 'Full time', handler: (st: GameState) => {
    (s as any).masseuse['shifts_required'] = 10;
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Full time."');
    scene.text('"Okay," she prints out a piece of paper and pushes a pen towards you. "This is an employee contract for a full time masseuse. Just sign there at the bottom and I\'ll give you a quick orientation."');
    scene.actions([
      { label: 'Sign', handler: (st: GameState) => {
    if (((s as any).masseuse ?? 0)?.['pending_rank'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['salon', 'masseuse_orientation'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['salon', 'whore_orientation'] }]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMasseuseOrientation(s: GameState, scene: SceneBuilder): void {
  (s as any).masseuse['hired_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'jobs', 'set_employed', 'city_salon_masseuse');
  // TODO-QSP: gs 'jobs', 'set_rank', 'city_salon_masseuse', masseuse['pending_rank']
  (s as any).masseuse['salon_state'] = '';
  (s as any).masseuse['pending_rank'] = 0;
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You scribble out a signature and she takes the paper back from you.');
  scene.text('"Thank you very much! So for future reference, I\'m Xian, one of the managers here. All your clients will come to me and will be able to request you based on whether you are available or not. Now if you\'ll quickly follow me."');
  scene.text('She gets up from her chair and moves around the desk towards the back.');
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
  (s as any).masseuse['hired_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'jobs', 'set_employed', 'city_salon_masseuse');
  // TODO-QSP: gs 'jobs', 'set_rank', 'city_salon_masseuse', masseuse['pending_rank']
  (s as any).masseuse['salon_state'] = '';
  (s as any).masseuse['pending_rank'] = 0;
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You scribble out a signature and she takes the paper back from you.');
  scene.text('"Thank you very much! So for future reference, I\'m Xian, one of the managers here. All your clients will come to me and will be able to request you based on whether you are available or not. Now if you\'ll quickly follow me."');
  scene.text('She gets up from her chair and moves around the desk towards the back.');
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
    (s as any).masseuse['brothel_question'] = 1;
    qspCall(s, 'salon', 'questions');
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"Uhhhh, yeah... Why did you tell me about all the whoring stuff? I thought we agreed I\'m just working as a normal masseuse?"');
    scene.text('"In case you wanted to change jobs," she says simply. "I might have mentioned it before, but even if you\'re just a masseuse right now, you might change your mind in the future. As long as you have the certificate, you are welcome to ascend or descend to any level of masseuse here. As it is such a fluid system, even if you\'re not doing the work, it\'s easiest to explain it all in one orientation."');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Why did you tell me all that... other stuff?', handler: (st: GameState) => {
    (s as any).masseuse['brothel_question'] = 1;
    qspCall(s, 'salon', 'questions');
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
    (s as any).masseuse['brothel_know'] = 1;
    qspCall(s, 'salon', 'questions');
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
  scene.actions([
    { label: 'No more questions', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
    scene.text('"I\'m pretty much clear on everything I think."');
    scene.text('"Great! So would you like to set your shifts for next week then?"');
    scene.text('"Sure."');
    scene.actions([
      { label: 'Look at the schedule', handler: (st: GameState) => {
    // TODO-QSP: gt 'masseuse_work', 'set_schedule', 'this_week'
  } },
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
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/salon/work/lockers.jpg');
  scene.text('The employee locker room where you can put your stuff while working. Empty except for you at the moment.');
  scene.text('There\'s a <a href="exec: gt \'mirror\', \'start\'">mirror</a> hanging on the wall as well.');
  if (((s as any).masseuse ?? 0)?.['uniform'] === 1) {
    scene.actions([
      { label: 'Put your normal clothes back on', handler: (st: GameState) => {
    (s as any).masseuse['uniform'] = 0;
    (s as any).robe = 0;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'outfit', 'dress', 'masseuseQW');
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
      scene.actions([
        { label: 'Get changed for work', goto: ['masseuse_work', 'change_for_work'] },
        { label: 'Get changed for work', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'undress', 'masseuseQW');
    (s as any).masseuse['uniform'] = 1;
    (s as any).robe = 1;
    qspCall(s, 'stat', '');
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
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterLeiWork(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/salon.jpg');
  scene.text('You move towards the massage rooms, but right when you put your hand on the door, you remember you don\'t have a shift scheduled for right now. Right about the same time, you hear moans coming through the door.');
  scene.actions([
    { label: 'Move away', goto: ['salon', 'start'] },
    { label: 'Take a peek', goto: ['salon', 'lei_work2'] },
  ]);
  scene.build();
}

function enterLeiWork2(s: GameState, scene: SceneBuilder): void {
  (s as any).masseuse['lei_peek'] = 1;
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    qspCall(s, 'arousal', 'voyeur', 1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.img(`images/locations/city/citycenter/mall/salon/work/lei/${Math.floor(Math.random() * 3) + 1}.mp4`);
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
  scene.build();
}

function enterResignation(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I actually wanted to resign my position here."');
  scene.text('"Oh," she says. "I\'m sorry to hear that."');
  if (((s as any).job_bonus_pay ?? 0)?.['city_salon_masseuse'] > 0) {
    (s as any).masseuse['paycheck'] = qspFunc(s, 'jobs', 'paycheck', 'city_salon_masseuse', 'cash');
    scene.text('Reaching down below the desk, she shuffles around in a drawer and stuffs some money into an envelope. "Well, here\'s your pay for the shifts you worked earlier this week."');
  }
  scene.text('"If you ever want to come back, you just let us know," she smiles at you.');
  if (((s as any).masseuse ?? 0)?.['uniform'] === 1) {
    (s as any).masseuse['uniform'] = 0;
    (s as any).robe = 0;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'outfit', 'dress', 'masseuseQW');
  }
  scene.text('You retrieve your clothes from your locker and get dressed ready to leave.');
  (s as any).masseuse['last_rank'] = ((s as any).job_rank ?? 0)?.['city_salon_masseuse'];
  qspCall(s, 'jobs', 'set_terminated', 'city_salon_masseuse');
  (s as any).masseuse['salon_state'] = 'resigned';
  scene.actions([
    { label: 'Leave', goto: ['salon', 'start'] },
  ]);
  scene.build();
}

function enterPayday(s: GameState, scene: SceneBuilder): void {
  (s as any).masseuse['paycheck'] = qspFunc(s, 'jobs', 'paycheck', 'city_salon_masseuse', 'cash');
  scene.img('images/locations/city/citycenter/mall/salon/xian.jpg');
  scene.text('"I\'m here to pick up my pay for this week."');
  scene.text('"Okay!" She opens up a drawer and thumbs through a few different labels before reaching into one and picking up an envelope. She hands it over to you.');
  if (((s as any).masseuse ?? 0)?.['hired_day'] <= ((s as any).daystart ?? 0) - 7) {
  } else {
    (s as any).masseuse['warning'] = ((s as any).masseuse['warning'] ?? 0) - (1);
    // TODO-QSP: dynamic text: "Hey, you only worked <<job_shifts_this_period['city_salon_masseuse']>> this wee...
    scene.text(`"Hey, you only worked ${((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse']} this week. You were supposed to work ${((s as any).masseuse ?? 0)?.['shifts_required']}."`);
    scene.text('"Sorry," you say, reaching for the envelope. "Won\'t happen again."');
    // TODO-QSP: dynamic text: "Better not." You try to pull the envelope away, but Xian holds on tight to it, ...
    scene.text(`"Better not." You try to pull the envelope away, but Xian holds on tight to it, not budging until you make eye contact. "${((s as any).masseuse ?? 0)?.['warning']} more times and you're fired."`);
    scene.text('She lets go.');
    if (((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] >= ((s as any).masseuse ?? 0)?.['shifts_required']) {
      if (((s as any).job_shifts_this_period ?? 0)?.['city_salon_masseuse'] > ((s as any).masseuse ?? 0)?.['shifts_required']) {
        // TODO-QSP: dynamic text: "By the way, thank you for covering those extra shifts this week, <<$pcs_firstna...
        scene.text(`"By the way, thank you for covering those extra shifts this week, ${((s as any).pcs_firstname ?? 0)}. Really helpful for us."`);
        scene.text('"No problem, Xian," you say while taking the envelope. "I could use the extra cash."');
      }
    }
    qspCall(s, 'salon', 'payday_end');
    scene.actions([
      { label: 'Leave', goto: ['salon', 'start'] },
    ]);
  }
  qspCall(s, 'salon', 'discount', 5000);
  if (((s as any).lashextensionduration ?? 0) <= 0) {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).salon_rate ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'salon', 'discount', 5000);
      (s as any).lashextensionstyle = 4;
      (s as any).lashextensionnew = 1;
      qspCall(s, 'money', 'pay', ((s as any).salon_rate ?? 0));
      scene.actions([{ label: 'Continue', goto: ['salon', 'lashExtension'] }]);
    }
    scene.actions([
      { label: '4D volume eyelash extensions [+$func(\'money\', \'get_cost_string\', salon_...]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: '4D volume eyelash extensions [+$func(\'money\', \'get_cost_string\', salon_...]', handler: (st: GameState) => {
    // TODO-QSP: msg 'You don''t need this service!'
  } },
  ]);
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const salon: LocationDef = {
  name: 'salon',
  title: 'Beauty Bar',
  region: 'other',
  locationType: 'public_indoors',
  description: ['"Hey!" Xian yells at you from the front desk. "You\'re late! You\'re being docked an hour\'s pay for that! Now get changed and get in there!"'],
  enter: enter,
};
