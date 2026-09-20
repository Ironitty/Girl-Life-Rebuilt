import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).loc = 'pav_hotelAdmin';
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/goteladmin.jpg');
  scene.text('A man who looks to be in his early 30s is sitting behind a desk, busy with some paperwork. He\'s dressed quite sharply; you never expected the hotel manager would be this young.');
  if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] >= 3  &&  ((s as any).job_status ?? 0)?.['pav_hotel_maid'] !== 'employed') {
    scene.actions([
      { label: 'Ask about your old maid job', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You approach the man\'s desk. He glances up and recognizes you.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I didn''t expect to see you back here. What can I do for you...
    scene.text(`"${((st as any).pcs_nickname ?? '')}! I didn't expect to see you back here. What can I do for you?"`);
    scene.text('"I was wondering if the maid position is still open," you ask. "I\'d like to come back, if that\'s alright."');
    scene.text('Herman leans back in his chair, thinking it over for a moment. "Well, we\'ve been a bit short-staffed, to be honest. I don\'t see why not."');
    // TODO-QSP: dynamic text: "Same terms as before: working between '+func('time', 'get_time_string', 16, 0)+...
    scene.text(`"Same terms as before: working between 16:00 and 19:00, give or take, ${qspFunc(s, 'money', 'string_profit', 375)} per shift. Sound good?"`);
    scene.actions([
      { label: 'Sounds great', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).job_hiring_step = (st as any).job_hiring_step ?? {})['pav_hotel_maid'] = 3;
    qspCall(st, 'jobs', 'set_employed', 'pav_hotel_maid');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/goteladmin.jpg');
    scene.text('You smile. "Thank you, I really appreciate it!"');
    // TODO-QSP: dynamic text: Herman nods. "Your uniform should still be in the locker room. Come by between '...
    scene.text('Herman nods. "Your uniform should still be in the locker room. Come by between 16:00 and 17:00 whenever you\'re ready to start a shift."');
    scene.actions([
      { label: 'Return to the lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Not right now', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/goteladmin.jpg');
    scene.text('"Actually, never mind, sorry," you say.');
    scene.text('Herman shrugs. "No worries. The offer stands whenever you change your mind."');
    scene.actions([
      { label: 'Return to the lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).job_hiring_step ?? 0)?.['pav_hotel_maid'] < 3) {
      scene.actions([
        { label: 'Ask about the maid job', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('You approach the man\'s desk, but he doesn\'t look up from his work.');
    scene.text('You carefully try to get his attention with a soft voice. "Umm… Excuse me?"');
    scene.text('He looks up from his paperwork. "Oh, I\'m sorry, I didn\'t hear you come in. Hello, I\'m Herman Leonidovich, manager of this hotel. Is there a problem?"');
    scene.text('You smile and shake your head. "No, no problem. I\'m actually looking for a job and I heard that you\'re often looking for maids?"');
    // TODO-QSP: dynamic text: You can feel his eyes exploring your body for a moment before he responds. "Yes,...
    scene.text('You can feel his eyes exploring your body for a moment before he responds. "Yes, we are! We currently only have a part-time vacancy for a maid. You would be working between 16:00 and 19:00, give or take. Most of the hotel rooms are empty then, before the new guests come in."');
    // TODO-QSP: dynamic text: "You can work any day you like, no pressure. It would pay <<$func(''money'', ''s...
    scene.text(`"You can work any day you like, no pressure. It would pay ${qspFunc(s, 'money', 'string_profit', 375)} per shift. After your work, you can immediately collect your salary at the reception, or you can save it up and collect it all at once later. Does that sound good to you?"`);
    scene.actions([
      { label: 'Sounds great', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).job_hiring_step = (st as any).job_hiring_step ?? {})['pav_hotel_maid'] = 3;
    qspCall(st, 'jobs', 'set_employed', 'pav_hotel_maid');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/goteladmin.jpg');
    scene.text('You smile. "That sounds fantastic! Thank you so much!"');
    scene.text('Herman gives you a friendly smile, happy to have found another potential worker. ');
    scene.text('He quickly writes some of your personal data down. "Oh by the way, two more things: you\'ll be required to wear a maid uniform during your working hours. Don\'t worry, we have them right here. You can change before you start your shift, and your own stuff will be safe in a locker."');
    scene.text('You nod. "Sounds fair… What\'s the other thing?"');
    // TODO-QSP: dynamic text: He continues. "If you want to work a shift, you need to be here between '+func('...
    scene.text('He continues. "If you want to work a shift, you need to be here between 16:00 and 17:00. There\'s no point in you getting changed for just 20 minutes of work."');
    scene.text('"That also sounds fair," you say and give him a handshake as you get ready to leave. "Okay. Thank you sir!"');
    scene.actions([
      { label: 'Return to the lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Not interested', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/goteladmin.jpg');
    scene.text('You frown. "Sorry for wasting your time, but that\'s not something for me."');
    scene.text('Herman gives you a friendly nod. "Not a problem. If you ever change your mind, then come and see me again."');
    scene.actions([
      { label: 'Return to the lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Return to the lobby', goto: ['pav_hotel', ''] },
  ]);
  scene.build();
}

export const pav_hotelAdmin: LocationDef = {
  name: 'pav_hotelAdmin',
  title: 'A man who looks to be in his early 30s is sitting behind a d',
  region: 'pavlovsk',
  locationType: 'event',
  description: ['A man who looks to be in his early 30s is sitting behind a desk, busy with some paperwork. He\'s dressed quite sharply; you never expected the hotel manager would be this young.'],
  enter: enter,
};
