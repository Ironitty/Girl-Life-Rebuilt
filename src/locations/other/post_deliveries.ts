import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'clock', 'pav_mailgirl');
  scene.text('He guides you to the back room, where a number of small packages and letters are packed into a shoulder bag.');
  (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
  (s as any).post_vars['load'] = ((((s as any).temp_rand ?? 0) === 1) ? (0) : (((((s as any).temp_rand ?? 0) <= 3) ? (1) : (2))));
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  if (((s as any).post_vars ?? 0)?.['load'] === 0) {
    scene.text('"Not much mail today, should be a piece of cake!" he smiles. "Take it easy."');
    scene.text('You lift the bag and nod. It feels very light indeed!');
  } else {
    scene.text('"We got a decent amount, but nothing you can\'t handle," he says. "Just do what you always do and you\'ll be fine."');
    scene.text('You pick up the bag. It has a bit of weight to it, but still feels fairly light.');
    scene.text('"We\'re swamped today, so I hope you\'re wearing your running shoes!" he smirks. You can tell he feels bad for giving you so much work, but still expects you to get it done on time.');
    // TODO-QSP: dynamic text: Your bag is so heavy that you have to carry it with both hands. You might have t...
    scene.text('Your bag is so heavy that you have to carry it with both hands. You might have to use some shortcuts if you want to finish by \' + func(\'time\', \'get_time_string\', 15, 0) + \'!');
  }
  scene.text('You take some time to get ready for your round, checking all the addresses and planning a route before leaving the post office around noon to get started.');
  return;
  scene.actions([
    { label: 'Start your round', handler: (st: GameState) => {
    (s as any).post_vars['round'] = 0;
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('The first half hour is easy as you work your way through the streets near the post office. As you get further away from the center, you take a look in your bag and ponder how you\'re going to handle your round today.');
    if (((s as any).post_vars ?? 0)?.['load'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 25;
      // TODO-QSP: dynamic text: Your bag feels fairly light, and you don't see that many items left in it. You c...
      scene.text('Your bag feels fairly light, and you don\'t see that many items left in it. You could easily make it back before \' + func(\'time\', \'get_time_string\', 15, 0) + \', and would even have time to relax and take breaks!');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 35;
      scene.text('Your bag is still fairly full, and you\'ll have to keep walking at a brisk pace to make it back on time. Nevertheless, you don\'t think you would need to take any risks in the more dangerous streets.');
      (s as any).minut = ((s as any).minut ?? 0) + 45;
      scene.text('Your bag still feels very full, and you realize there\'s no way you\'ll make it back on time if you stick to the predetermined route!');
      // TODO-QSP: dynamic text: You could stick to the safe roads, but the postmaster won't like you returning l...
      scene.text('You could stick to the safe roads, but the postmaster won\'t like you returning late. Alternatively, you could push your luck and hopefully get all your deliveries done by \' + func(\'time\', \'get_time_string\', 15, 0) + \' by cutting through areas where you might get into trouble.');
    }
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Use the more dangerous shortcuts to save time [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use the more dangerous shortcuts to save time', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).post_vars['danger'] = 1;
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('You decide to use the streets the postmaster told you to avoid in order to finish faster. What\'s the worst that could happen?');
    if (((s as any).post_vars ?? 0)?.['load'] === 0) {
      scene.text('Your bag is emptying rapidly, and you don\'t think you\'ll need much more than a half hour to finish your round.');
    } else {
      scene.text('At this pace, you\'ll be able to finish your round with about half an hour left to spare, assuming nothing happens...');
      scene.text('After another half hour, you take another look in your bag. There\'s still a lot left to deliver, but you should be able to just about get it done on time if you keep at your current pace.');
    }
    scene.actions([
      { label: 'During your round...', goto: ['post_deliveries', 'pick_event'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stick to the safe route', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    (s as any).post_vars['danger'] = 0;
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('You decide to stick to the predetermined route, and continue delivering the mail you have in your bag.');
    if (((s as any).post_vars ?? 0)?.['load'] === 0) {
      scene.text('You have more than enough time to finish your round, even with you taking it slowly.');
    } else {
      // TODO-QSP: dynamic text: You figure you have enough time to stick to your predetermined route and be done...
      scene.text('You figure you have enough time to stick to your predetermined route and be done on time, so that\'s what you do. You won\'t have time to stop for anything or talk to anyone for very long, but will finish just around \' + func(\'time\', \'get_time_string\', 15, 0) + \' as expected.');
      scene.text('After another half hour, you take another look in your bag and see that there\'s still a lot left to deliver! There\'s no way you\'ll be able to finish your round on time if you keep this up.');
    }
    scene.actions([
      { label: 'During your round...', goto: ['post_deliveries', 'pick_event'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPickEvent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).post_vars ?? 0)?.['round'] === 0) {
    (s as any).temp_rand = Math.floor(Math.random() * 26) + 1;
  } else {
    (s as any).temp_rand = Math.floor(Math.random() * 21) + 6;
  }
  if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).post_vars ?? 0)?.['qw_1'] === 0) {
    qspCall(s, 'post_deliveries', '1');
  } else {
    qspCall(s, 'post_deliveries', '2');
    if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).post_vars ?? 0)?.['qw_3'] === 0) {
      qspCall(s, 'post_deliveries', '3');
    } else {
      qspCall(s, 'post_deliveries', '4');
      if (((s as any).temp_rand ?? 0) > 5) {
        // TODO-QSP: gs 'post_deliveries', $str(temp_rand)
      } else {
        scene.actions([{ label: 'Continue', goto: ['post_deliveries', 'pick_event'] }]);
      }
      return;
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
    case 'pick_event':
      enterPickEvent(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const post_deliveries: LocationDef = {
  name: 'post_deliveries',
  title: 'He guides you to the back room, where a number of small pack',
  region: 'other',
  description: ['He guides you to the back room, where a number of small packages and letters are packed into a shoulder bag.'],
  enter: enter,
};
