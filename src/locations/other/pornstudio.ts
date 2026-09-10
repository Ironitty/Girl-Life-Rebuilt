import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('Inside the small office is a young man sitting at a computer, tapping away at the keyboard.');
  if ((!((s as any).film ?? 0))) {
    scene.text('"Who are you? This office is for staff only."');
  } else {
    scene.text('"Hi there, what can I do for you?"');
    if ((!((s as any).pfilmNO ?? 0))) {
      scene.actions([
        { label: 'Change your porn name', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Is it possible for me to change my stage name?" you ask.');
    scene.text('"Of course! Just give me a minute to register it in the database. So, what would you like to be called?" he replies.');
    scene.actions([
      { label: '"I want to be called…"', handler: (st: GameState) => {
    if (((s as any).pfname ?? 0) === '') {
    }
  }, goto: ['pornstudio', 'pa'] },
      { label: 'Nothing', goto: ['pornstudio', 'pa'] },
    ]);
  } },
      ]);
    }
    if ((!((s as any).pfilmSTOP ?? 0))) {
      scene.actions([
        { label: 'What\'s the rating of my videos?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "You've made <<film>> films."
    scene.text(`"You've made ${((s as any).film ?? 0)} films."`);
    if (((s as any).porn_fame ?? 0) < 10) {
      scene.text('"Nobody knows your name. You\'re one of hundreds of amateur actresses whose fims are sold really cheap."');
    } else {
      scene.text('"You\'re still unknown and are unlikely to be recognized. Your own films are still sold cheap."');
      if (((s as any).porn_fame ?? 0) < 40) {
        scene.text('"You\'re mentioned here and there, but still mostly get minor roles. Your name is slowly emerging and you have your own fanbase."');
      } else {
        scene.text('"You get the occasional back cover appearance and your films are getting more popular, which means more fans and more money."');
        if (((s as any).porn_fame ?? 0) < 80) {
          scene.text('"You\'re a known porn actress who appears on the front cover. Your films are sold at a decent price, and in big numbers."');
        } else {
          scene.text('"You\'re a very well known porn actress and your films are sold at a premium. You\'re likely to receive offers to work with renowned studios and producers."');
        }
        if (((s as any).porn_fame ?? 0) >= 20) {
          (s as any).ftypecount[0] = ((s as any).pornvag ?? 0);
          (s as any).ftypecount_text[0] = 'vaginal';
          (s as any).ftypecount[1] = ((s as any).pornanal ?? 0);
          (s as any).ftypecount_text[1] = 'anal';
          (s as any).ftypecount[2] = ((s as any).porngasm ?? 0);
          (s as any).ftypecount_text[2] = 'orgasm';
          (s as any).ftypecount[3] = ((s as any).porngang ?? 0);
          (s as any).ftypecount_text[3] = 'group sex';
          (s as any).ftypecount[4] = ((s as any).porncream ?? 0);
          (s as any).ftypecount_text[4] = 'creampie';
          (s as any).ftypecount[5] = ((s as any).pornhole ?? 0);
          (s as any).ftypecount_text[5] = 'gloryhole';
          (s as any).ftypecount[6] = ((s as any).pornbdsm ?? 0);
          (s as any).ftypecount_text[6] = 'bdsm';
          (s as any).ftypecount[7] = ((s as any).pornlesbo ?? 0);
          (s as any).ftypecount_text[7] = 'lesbian';
          (s as any).ftypecount[8] = ((s as any).pornpreg ?? 0);
          (s as any).ftypecount_text[8] = 'pregnant';
          (s as any).ftypecount[9] = ((s as any).pornexhib ?? 0);
          (s as any).ftypecount_text[9] = 'public';
          (s as any).ftypecount[10] = ((s as any).pornmast ?? 0);
          (s as any).ftypecount_text[10] = 'masturbation';
          (s as any).ftypecount[11] = ((s as any).pornbukk ?? 0);
          (s as any).ftypecount_text[11] = 'cumshot';
          (s as any).ftypecount[12] = ((s as any).pornbj ?? 0);
          (s as any).ftypecount_text[12] = 'blowjob';
          (s as any).ftypecount[13] = ((s as any).pornhj ?? 0);
          (s as any).ftypecount_text[13] = 'handjob';
          (s as any).ftypecount[14] = ((s as any).pornswall ?? 0);
          (s as any).ftypecount_text[14] = 'cum swallowing';
          (s as any).temp['max0'] = qspUntranslated(s, "max('ftypecount')", { location: "pornstudio" });
          (s as any).temp['pos0'] = qspUntranslated(s, "arrpos('ftypecount', temp['max0'])", { location: "pornstudio" });
          (s as any).temp['type0'] = qspUntranslated(s, "ftypecount_text[temp['pos0']]", { location: "pornstudio" });
          (s as any).temp['max1'] = qspUntranslated(s, "max('ftypecount')", { location: "pornstudio" });
          (s as any).temp['pos1'] = qspUntranslated(s, "arrpos('ftypecount', temp['max1'])", { location: "pornstudio" });
          (s as any).temp['type1'] = qspUntranslated(s, "ftypecount_text[temp['pos1']]", { location: "pornstudio" });
          if (10 * ((s as any).temp ?? 0)?.['max1'] < 9 * ((s as any).temp ?? 0)?.['max0']) {
            // TODO-QSP: dynamic text: You're known for your <<$temp['type0']>> scenes.
            scene.text(`You're known for your ${((s as any).temp ?? 0)?.['type0']} scenes.`);
          } else {
            (s as any).temp['max2'] = qspUntranslated(s, "max('ftypecount')", { location: "pornstudio" });
            (s as any).temp['pos2'] = qspUntranslated(s, "arrpos('ftypecount', temp['max2'])", { location: "pornstudio" });
            (s as any).temp['type2'] = qspUntranslated(s, "ftypecount_text[temp['pos2']]", { location: "pornstudio" });
            if (10 * ((s as any).temp ?? 0)?.['max2'] < 9 * ((s as any).temp ?? 0)?.['max0']) {
              // TODO-QSP: dynamic text: You're known for your <<$temp['type0']>> and <<$temp['type1']>> scenes.
              scene.text(`You're known for your ${((s as any).temp ?? 0)?.['type0']} and ${((s as any).temp ?? 0)?.['type1']} scenes.`);
            } else {
              // TODO-QSP: dynamic text: You're known for your <<$temp['type0']>>, <<$temp['type1']>> and <<$temp['type2'...
              scene.text(`You're known for your ${((s as any).temp ?? 0)?.['type0']}, ${((s as any).temp ?? 0)?.['type1']} and ${((s as any).temp ?? 0)?.['type2']} scenes.`);
            }
          }
        }
        if (((s as any).film ?? 0) < 10  &&  ((s as any).porn_fame ?? 0) < 10) {
          scene.text('"By the way, if you wanted, I could completely remove them from our systems - for the right price of course…" the guy whispers.');
          scene.actions([
            { label: 'Tell me more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).films_stop_payment = ((s as any).film ?? 0) * 40000;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Seeing as you're not well known, it's unlikely anyone would notice. However, to...
    scene.text('"Seeing as you\'re not well known, it\'s unlikely anyone would notice. However, to remove them you\'d have to cover the loss of the studio\'s profits- \' + $func(\'money\', \'string_price\', 40000) + \' per film. That\'s a total of \' + $func(\'money\', \'string_price\', films_stop_payment) + \'."');
    scene.text('"Also, it would piss off your co-stars and director, and likely end your porn career. You should also know that there\'s no guarantee there\'s no other copies out there, so think carefully."');
    scene.actions([
      { label: 'Remove them [+$func(\'money\', \'get_cost_string\', films_...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).films_stop_payment ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', ((s as any).films_stop_payment ?? 0));
      (s as any).pfilmSTOP = 1;
      (s as any).job_termination_reason['city_pornstudio_actress'] = 'retired';
      qspCall(s, 'jobs', 'set_terminated', 'city_pornstudio_actress');
      (s as any).job_booking_debt['city_pornstudio_actress'] = 0;
      (s as any).job_last_miss_cost['city_pornstudio_actress'] = 0;
      (s as any).film = 0;
      qspCall(s, 'stat', '');
      scene.text('"We never met. Have a nice day, and don\'t come back."');
      scene.actions([
        { label: 'Leave', goto: ['pornstudio', ''] },
      ]);
    }
  } },
      { label: 'Not interested', goto: ['pornstudio', ''] },
    ]);
  } },
            { label: 'Leave', goto: ['pornstudio', ''] },
          ]);
        }
        scene.actions([
          { label: 'Leave', goto: ['pornstudio', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pornstudio', ''] },
    ]);
  } },
        { label: 'Leave', goto: ['pornstudio', ''] },
      ]);
    }
  }
  scene.build();
}

export const pornstudio: LocationDef = {
  name: 'pornstudio',
  title: 'You enter the studio and are greeted by a busy scene of acto',
  region: 'other',
  locationType: 'bathroom',
  description: ['Inside the small office is a young man sitting at a computer, tapping away at the keyboard.'],
  enter: enter,
};
