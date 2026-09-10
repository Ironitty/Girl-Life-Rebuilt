import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['pav_commercial', ''] }]);
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
    qspCall(s, 'post_office', 'set_skipline_acts');
    scene.actions([
      { label: 'Wait in line (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
  }, goto: ['post_office', 'counter'] },
    ]);
  }
  if (((s as any).region ?? 0) === 'pav') {
    scene.actions([
      { label: 'Go to the Postmaster\'s office', goto: ['post_master', 'start'] },
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
    // TODO-QSP: exit
  }
  qspCall(s, 'willpower', 'exhib', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Flash your tits to skip the line [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flash your tits to skip the line', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'tits', 'inside', 1);
    qspCall(s, 'stat', '');
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
        { label: 'Flash your pussy to skip the line [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash your pussy to skip the line', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'pussy', 'inside', 1);
    qspCall(s, 'stat', '');
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
        { label: 'Flash both your tits and your pussy to skip the line [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Flash both your tits and your pussy to skip the line', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'flash', 'full', 'inside', 1);
    qspCall(s, 'stat', '');
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
        { label: 'Offer a blowjob in exchange for jumping the queue [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Offer a blowjob in exchange for jumping the queue', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    if (((s as any).cumloc ?? 0)[11] > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'pain', '', 4, 'tummy', 'hit');
      qspCall(s, 'stat', '');
      scene.img('images/locations/shared/postoffice/punch.mp4');
      scene.text('The man punches you in the gut. "Go away bitch, your face is covered in cum!"');
      scene.text('You quickly stagger away.');
      scene.actions([
        { label: 'Recover', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 3);
  }, goto: ['post_office', 'leave'] },
      ]);
    } else {
      qspCall(s, 'npcgeneratec', '', 0, 'stranger', Math.floor(Math.random() * 28) + 18);
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 2);
      qspCall(s, 'arousal', 'bj', 10, 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Cum on your face', handler: (st: GameState) => {
    if ((!((s as any).pcs_haircol ?? 0))) {
    } else {
      if (((s as any).pcs_haircol ?? 0) === 2) {
      }
      scene.img(`images/pc/body/cum/cumface/${((s as any).cum_face_image ?? 0)}.jpg`);
      scene.text('The man cums on your face.');
      qspCall(s, 'cum_call', 'face', 'stranger');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go to the counter', goto: ['post_office', 'counter'] },
      ]);
    }
    scene.actions([
      { label: 'Cum in your mouth', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/cumlip.jpg');
    scene.text('The man cums inside your mouth.');
    qspCall(s, 'cum_call', 'mouth', 'stranger');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to the counter', goto: ['post_office', 'counter'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  }
  (s as any).i = 0;
  // TODO-QSP: :loopcard
  if ((!((s as any).i ?? 0))) {
    (s as any).n = 5;
    (s as any).price = 60;
  } else {
    (s as any).n = 10;
    (s as any).price = 115;
    if (((s as any).i ?? 0) === 2) {
      (s as any).n = 20;
      (s as any).price = 220;
    } else {
      (s as any).n = 50;
      (s as any).price = 520;
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: dynamic text: <tr><td align="center"><<n>> hour internet card </td><td align="right">(you have...
    scene.text(`<tr><td align="center">${((s as any).n ?? 0)} hour internet card </td><td align="right">(you have ${((s as any).internet ?? 0)} hours of internet access) </td><td align="right">${((s as any).buy_link ?? 0)} </td><td align="left">for ${((s as any).price ?? 0)} <b>₽</b></td></tr>`);
    if (((s as any).i ?? 0) < 4) {
      // TODO-QSP: jump 'loopcard'
    }
    scene.text('</table></center>');
    if (((s as any).money ?? 0) > 0) {
      scene.actions([
        { label: 'Put the money on the phone', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).obmennik = ((s as any).input ?? 0) ("((s as any).How ?? 0) ((s as any).much ?? 0) <((s as any).b ?? 0)>₽</((s as any).b ?? 0)> ((s as any).do ?? 0) ((s as any).you ?? 0) ((s as any).want ?? 0) ((s as any).to ?? 0) ((s as any).deposit ?? 0)?");
    if (((s as any).obmennik ?? 0) <= 0) {
      scene.text('<center><br><b>Invalid operation.</b></center>');
      scene.actions([
        { label: 'Return', goto: ['post_office', 'counter'] },
      ]);
    } else {
      if (((s as any).money ?? 0) < ((s as any).obmennik ?? 0)) {
        // TODO-QSP: dynamic text: <center><br>You do not have <b><<obmennik>></b> <b>₽</b>.</center>
        scene.text(`<center><br>You do not have <b>${((s as any).obmennik ?? 0)}</b> <b>₽</b>.</center>`);
        scene.actions([
          { label: 'Return', goto: ['post_office', 'counter'] },
        ]);
      }
      if (((s as any).money ?? 0) >= ((s as any).obmennik ?? 0)) {
        // TODO-QSP: set balans = balans + obmennik
        // TODO-QSP: set money = money - obmennik
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: <center><br>You put <b><<obmennik>></b> <b>₽</b> to the account.</center>
        scene.text(`<center><br>You put <b>${((s as any).obmennik ?? 0)}</b> <b>₽</b> to the account.</center>`);
        scene.text('"Is there anything else I can do for you?"');
        scene.actions([
          { label: 'Yes', goto: ['post_office', 'counter'] },
          { label: 'Leave the post office', goto: ['post_office', 'counter'] },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).askWork ?? 0) === 0  &&  ((s as any).region ?? 0) === 'pav') {
      scene.actions([
        { label: 'Ask for work', handler: (st: GameState) => {
    (s as any).askWork = ((s as any).askWork ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You approach the counter and greet the girl there. "Excuse me, I hear you\'re looking for postal workers?"');
    // TODO-QSP: dynamic text: She nods understandingly. "We're looking for new workers and I'd hire you in an ...
    scene.text('She nods understandingly. "We\'re looking for new workers and I\'d hire you in an instant, but unfortunately it\'s not up to me. You should go see Oleg Koltsov, the postmaster. He\'s usually in his office between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\'. I bet he\'ll hire you! Good luck when you see him!"');
    scene.actions([
      { label: 'Step away from the counter', goto: ['post_office', 'start'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Check received mail', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if ((Array.isArray((s as any).mail_region) ? ((s as any).mail_region as any[]).indexOf(((s as any).region ?? 0)) : -1) < 0  &&  (Array.isArray((s as any).mail_region) ? ((s as any).mail_region as any[]).indexOf('all') : -1) < 0) {
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
    default:
      enterLeave(s, scene);
      break;
  }
}

export const post_office: LocationDef = {
  name: 'post_office',
  title: 'Post Office',
  region: 'other',
  enter: enter,
};
