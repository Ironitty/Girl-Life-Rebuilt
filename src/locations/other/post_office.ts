import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    qspGoto(s, 'city_center', '');
  } else {
    qspGoto(s, 'pav_commercial', '');
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'post_office', 'start');
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 9  ||  ((s as any).hour ?? 0) >= 11  &&  ((s as any).hour ?? 0) < 15  ||  ((s as any).hour ?? 0) >= 17) {
    scene.text('<center><b>Post Office</b></center>');
    scene.img('images/locations/shared/postoffice/city.jpg');
    scene.text('It is currently quiet and you can walk straight up to the counter.');
    scene.actions([
      { label: 'Go to the counter', goto: ['post_office', 'counter'] },
    ]);
  } else {
    scene.text('<center><b>Post Office</b></center>');
    scene.img('images/locations/shared/postoffice/city.jpg');
    scene.text('It is currently very busy and it looks like you\'ll have to wait your turn to get to the counter.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetSkiplineActs(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Wait in line (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspGoto(st, 'post_office', 'counter');
  } },
    ]);
  }
  if (((s as any).region ?? 0) === 'pav') {
    scene.actions([
      { label: 'Go to the Postmaster\'s office', handler: (st: GameState) => {
    qspGoto(st, 'post_master', 'start');
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['post_office', 'leave'] },
  ]);
  scene.build();
}

function enterSetSkiplineActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] <= 0  &&  ((s as any).pcs_inhib ?? 0) < 45) {
    return;
  }
  qspCall(s, 'willpower', 'exhib', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Flash your tits to skip the line', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flash your tits to skip the line', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'tits', 'inside', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['post_office', 'counter'] },
    ]);
  } },
    ]);
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash your pussy to skip the line', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your pussy to skip the line', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'pussy', 'inside', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['post_office', 'counter'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 2) {
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Flash both your tits and your pussy to skip the line', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash both your tits and your pussy to skip the line', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'flash', 'full', 'inside', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the counter', goto: ['post_office', 'counter'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    qspCall(s, 'willpower', 'bj', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Offer a blowjob in exchange for jumping the queue', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Offer a blowjob in exchange for jumping the queue', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    if (((st as any).cumloc ?? 0)[11] > 0) {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'pain', '4', 'tummy', 'hit');
      qspCall(st, 'stat', '');
      scene.img('images/locations/shared/postoffice/punch.mp4');
      scene.text('The man punches you in the gut. "Go away bitch, your face is covered in cum!"');
      scene.text('You quickly stagger away.');
      scene.actions([
        { label: 'Recover', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 3));
    qspGoto(st, 'post_office', 'leave');
  } },
      ]);
    } else {
      qspCall(st, 'npcgeneratec', '0', 'stranger', (Math.floor(Math.random() * 28) + 18));
      qspCall(st, 'npcStat', '$npclastgenerated');
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 4) + 2));
      qspCall(st, 'arousal', 'bj', 10, 'sub');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Cum on your face', handler: (st: GameState) => {
    if ((!((st as any).pcs_haircol ?? 0))) {
      (st as any).cum_face_image = 'black/' + (Math.floor(Math.random() * 23) + 1);
    } else {
      if (((st as any).pcs_haircol ?? 0) === 1) {
        (st as any).cum_face_image = 'brown/' + (Math.floor(Math.random() * 31) + 1);
      } else {
        if (((st as any).pcs_haircol ?? 0) === 2) {
          (st as any).cum_face_image = 'red/' + (Math.floor(Math.random() * 19) + 1);
        } else {
          if (((st as any).pcs_haircol ?? 0) === 3) {
            (st as any).cum_face_image = 'blonde/' + (Math.floor(Math.random() * 25) + 1);
          } else {
            (st as any).cum_face_image = 'custom/' + (Math.floor(Math.random() * 20) + 1);
          }
        }
      }
    }
    scene.img(`images/pc/body/cum/cumface/${((st as any).cum_face_image ?? '')}.jpg`);
    scene.text('The man cums on your face.');
    qspCall(st, 'cum_call', 'face', 'stranger');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go to the counter', goto: ['post_office', 'counter'] },
    ]);
  } },
        { label: 'Cum in your mouth', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/cumlip.jpg');
    scene.text('The man cums inside your mouth.');
    qspCall(st, 'cum_call', 'mouth', 'stranger');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go to the counter', goto: ['post_office', 'counter'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterCounter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'post_office', 'counter');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Counter</b></center>');
  scene.img('images/locations/shared/postoffice/counter.jpg');
  scene.text('There\'s nothing interesting happening. It\'s rather boring here.');
  if (((s as any).bankAccount ?? 0) === 1  &&  ((s as any).money ?? 0) > 0) {
    scene.actions([
      { label: 'Deposit money into your bank account', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    qspCall(st, 'bank', 'deposit_cash');
    scene.text('"Is there anything else I can do for you?"');
    scene.actions([
      { label: 'Leave the post office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['post_office', 'leave'] },
      { label: 'Yes', goto: ['post_office', 'counter'] },
    ]);
  } },
    ]);
  }
  if (((s as any).policeQW ?? 0)?.['legal_fine'] > 0) {
    if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).policeQW ?? 0)?.['legal_fine'])) {
      scene.actions([
        { label: 'Pay off your fine(s)', handler: (st: GameState) => {
    qspCall(st, 'money', 'debt_pay', 'policeQW[\'legal_fine\']');
    ((st as any).policeQW = (st as any).policeQW ?? {})['legal_fine'] = 0;
    ((st as any).policeQW = (st as any).policeQW ?? {})['missed_fine_deadlines'] = 0;
    ((st as any).policeQW = (st as any).policeQW ?? {})['fine_deadline'] = 0;
    ((st as any).policeQW = (st as any).policeQW ?? {})['arrest_gameover_flag'] = 0;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Counter</b></center>');
    scene.img('images/locations/shared/postoffice/counter.jpg');
    scene.text('You pay the full amount of your outstanding fine(s) to the cashier and they print out a receipt to say that it\'s paid off.');
    scene.actions([
      { label: 'Done', goto: ['post_office', 'counter'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Pay your fine(s)', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You have an outstanding fine of ' + qspFunc(s, 'money', 'string_debt', (((st as any).policeQW ?? 0)?.['legal_fine'] ?? '')) + '.');
    (st as any).fineIN = window.prompt("How much do you want to pay off?") ?? '';
    if (((st as any).fineIN ?? 0) <= 0) {
      scene.text('Invalid operation.');
    } else {
      if (((st as any).fineIN ?? 0) >= ((st as any).policeQW ?? 0)?.['legal_fine']) {
        if (qspFunc(s, 'money', 'can_afford_debt', ((st as any).policeQW ?? 0)?.['legal_fine'])) {
          qspCall(st, 'money', 'debt_pay', 'policeQW[\'legal_fine\']');
          ((st as any).policeQW = (st as any).policeQW ?? {})['legal_fine'] = 0;
          ((st as any).policeQW = (st as any).policeQW ?? {})['missed_fine_deadlines'] = 0;
          ((st as any).policeQW = (st as any).policeQW ?? {})['fine_deadline'] = 0;
          ((st as any).policeQW = (st as any).policeQW ?? {})['arrest_gameover_flag'] = 0;
          scene.text('<br>You pay the full amount of your outstanding fine(s) to the cashier and they print out a receipt to say that it\'s paid off.');
        } else {
          scene.text('<br>You don\'t have enough money to pay that amount.');
        }
      } else {
        if (qspFunc(s, 'money', 'can_afford_debt', ((st as any).fineIN ?? 0))) {
          (st as any).temp_paid = qspFunc(s, 'money', 'debt_pay', 'policeQW[\'legal_fine\']', ((st as any).fineIN ?? 0));
          scene.text('<br>You pay ' + qspFunc(s, 'money', 'string_debt_reduction', ((st as any).temp_paid ?? '')) + ' towards your legal fine(s). You have ' + qspFunc(s, 'money', 'string_debt', (((st as any).policeQW ?? 0)?.['legal_fine'] ?? '')) + ' still outstanding.');
        } else {
          scene.text('<br>You don\'t have enough money to pay that amount.');
        }
        (st as any).temp_paid = undefined;
      }
    }
    (st as any).fineIN = undefined;
  } },
    ]);
  }
  if (((s as any).used_pattest ?? 0) > 0) {
    scene.actions([
      { label: 'Send paternity test ( [20000₽]...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 20000) === 1) {
      qspCall(st, 'money', 'pay', 20000);
      qspFunc(s, 'send_test');
      qspCall(st, 'stat', '');
      scene.text('You pay the fee for the testing, then mail your used paternity test to the lab in Saint Petersburg with the copy of your receipt of payment. You will get answer by SMS within a week.');
    } else {
      scene.text('Unfortunately, you don\'t have enough money to submit the test. They would just throw it out without the receipt of payment.');
    }
    scene.actions([
      { label: 'Done', goto: ['post_office', 'counter'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['post_office', 'leave'] },
    { label: 'Check received mail', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if ((Array.isArray((st as any).mail_region) ? ((st as any).mail_region as any[]).indexOf(((st as any).region ?? 0)) : -1) < 0  &&  (Array.isArray((st as any).mail_region) ? ((st as any).mail_region as any[]).indexOf('all') : -1) < 0) {
      scene.text('You have no mail.');
    } else {
      scene.text('You have mail.');
      scene.actions([
        { label: 'Pickup your mail', goto: ['post_office', 'pickup_mail'] },
      ]);
    }
    scene.text('"Is there anything else I can do for you?"');
    scene.actions([
      { label: 'Yes', goto: ['post_office', 'counter'] },
      { label: 'Leave the post office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['post_office', 'leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPickupMail(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/postoffice/worker.jpg');
  (s as any).temp_mail_counter = 0;
  (s as any)[mail_region] ? (s as any)[mail_region] = { ...(s as any)[temp_mail_region] } : (s as any)[mail_region] = { ...(s as any)[temp_mail_region] };
  (s as any)[mail_code] ? (s as any)[mail_code] = { ...(s as any)[temp_mail_code] } : (s as any)[mail_code] = { ...(s as any)[temp_mail_code] };
  (s as any)[mail_time] ? (s as any)[mail_time] = { ...(s as any)[temp_mail_time] } : (s as any)[mail_time] = { ...(s as any)[temp_mail_time] };
  (s as any).po_i = 0;
  do {
    if (((s as any).temp_mail_region ?? 0)?.[String((s as any).po_i ?? 0)] === ((s as any).region ?? 0)  ||  ((s as any).temp_mail_region ?? 0)?.[String((s as any).po_i ?? 0)] === 'all') {
      if (((s as any).totminut ?? 0) >= ((s as any).temp_mail_time ?? 0)?.[String((s as any).po_i ?? 0)]) {
        (s as any).temp_mail_counter = ((s as any).temp_mail_counter ?? 0) + (1);
      }
    }
    (s as any).po_i = ((s as any).po_i ?? 0) + (1);
    if (((s as any).temp_mail_counter ?? 0) > 0) {
      scene.text(`You have ${((s as any).temp_mail_counter ?? '')} pieces of mail left to pickup.`);
    } else {
      scene.text('You have collected all your mail.');
    }
    (s as any).po_i = undefined;
    (s as any).temp_mail_counter = undefined;
    (s as any).temp_mail_region = undefined;
    (s as any).temp_mail_code = undefined;
    (s as any).temp_mail_time = undefined;
  } while (((s as any).po_i ?? 0) < Object.keys((s as any).temp_mail_region ?? {}).length);
  scene.actions([
    { label: 'Go back', goto: ['post_office', 'counter'] },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['post_office', 'leave'] },
  ]);
  scene.build();
}

function enterAddMail(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = 'all';
  }
  (s as any).mail_region = [...((s as any).mail_region ?? []), ((s as any).locArgs?.[1] ?? 0)];
  (s as any).mail_code = [...((s as any).mail_code ?? []), ((s as any).locArgs?.[2] ?? 0)];
  (s as any).mail_time = [...((s as any).mail_time ?? []), ((s as any).locArgs?.[3] ?? 0)];
  scene.build();
}

function enterRemoveMail(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_mail_index = qspUntranslated(s, "arrpos('mail_code', ARGS[1])", { location: "post_office" });
  if (((s as any).temp_mail_index ?? 0) >= 0) {
    (s as any).mail_region = undefined;
    (s as any).mail_code = undefined;
    (s as any).mail_time = undefined;
  }
  (s as any).temp_mail_index = undefined;
  scene.build();
}

function enterPostOff(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Postmaster Office</b></center>');
  scene.text('An older man sits behind a desk, busy with some paperwork. He\'s dressed quite sharply for his position.');
  if ((!((s as any).post_wrk ?? 0))) {
    scene.actions([
      { label: 'Ask for work', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('You approach the man\'s desk, but he doesn\'t look up from his work. With a soft voice, you carefully try to get his attention. "Umm… Excuse me?"');
    scene.text('He looks up at you. "Oh I\'m sorry, I didn\'t hear you come in. Hello, I\'m Oleg Koltsov, postmaster at this post office. Is there a problem?"');
    scene.text('You smile and shake your head. "No, no problem. I\'m actually looking for a job. I hear you\'re looking for workers?"');
    scene.text('You can feel his eyes exploring your body for a second before he responds. "Yes, we are! We currently only have a part-time vacancy, for sorting the mail. You would be working between these and these hours, give or take. Does that sound good to you?"');
    scene.actions([
      { label: '"Sorry, not interested"', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I need to think about it if it\'s okay?" you reply.');
    scene.text('"Sure. Come back when you\'ve made up your mind."');
    scene.actions([
      { label: 'Exit office', goto: ['post_office', 'start'] },
    ]);
  } },
      { label: '"That sounds great!"', handler: (st: GameState) => {
    (st as any).post_wrk = ((st as any).post_wrk ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('You beam. "That sounds fantastic, thank you so much!"');
    scene.text('Oleg gives you a friendly smile, happy to have found another potential worker. He quickly writes some of your personal data down.');
    scene.text('"If you want to work a shift, you need to be here between this time. There\'s no point in you getting changed just for 20 minutes of work."');
    scene.text('You give him a handshake as you get ready to leave. "Okay. Thank you sir!"');
    scene.actions([
      { label: 'Exit office', goto: ['post_office', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Exit office', goto: ['post_office', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'set_skipline_acts':
      enterSetSkiplineActs(s, scene);
      break;
    case 'counter':
      enterCounter(s, scene);
      break;
    case 'pickup_mail':
      enterPickupMail(s, scene);
      break;
    case 'add_mail':
      enterAddMail(s, scene);
      break;
    case 'remove_mail':
      enterRemoveMail(s, scene);
      break;
    case 'post_off':
      enterPostOff(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const post_office: LocationDef = {
  name: 'post_office',
  title: 'Post Office',
  region: 'other',
  enter: enter,
};
