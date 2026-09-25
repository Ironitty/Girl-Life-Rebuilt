import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = '';
  (s as any).loc = 'pav_commclubs';
  (s as any).menu_loc = 'pav_commclubs';
  (s as any).menu_arg = '';
  (s as any).location_type = 'public_indoors';
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>The community center</b></center>');
  scene.img('images/locations/pavlovsk/community/gdkkru.jpg');
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 20  &&  ((s as any).yearstart ?? 0) === 1) {
    scene.actions([
      { label: '<b>Join nerds</b>', goto: ['nerd_game_night', 'game'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20) {
    scene.text('At this time of day, the community center operates various clubs.');
    if (((s as any).krumonth ?? 0) === ((s as any).month ?? 0)  &&  ((s as any).kruyear ?? 0) === ((s as any).year ?? 0)) {
      scene.actions([
        { label: 'Go to the sewing club', goto: ['krupo', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Go to the sewing club', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Sewing circle</b></center>');
    scene.img('images/locations/pavlovsk/community/sew/sewing_class.jpg');
    scene.text(`You go to the sewing club room. As you walk in, a teacher looks at you and says "It costs ${qspFunc(s, 'money', 'string_price', 500)} for one month's lessons and you can attend as many times as you like. The days you did not attend are not refundable when the one month is finished."`);
    if (qspFunc(s, 'money', 'can_afford', 500) === 1) {
      scene.actions([
        { label: 'Sign up', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 500);
    (st as any).krumonth = ((st as any).month ?? 0);
    (st as any).kruyear = ((st as any).year ?? 0);
    qspCall(st, 'stat', '');
    scene.text('You pay for the tuition.');
    scene.actions([
      { label: 'Leave', goto: ['pav_commclubs', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_commclubs', ''] },
    ]);
  } },
      ]);
    }
    if (((s as any).chessmonth ?? 0) === ((s as any).month ?? 0)  &&  ((s as any).chessyear ?? 0) === ((s as any).year ?? 0)) {
      scene.actions([
        { label: 'Go to the chess club', goto: ['kruchess', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Go to the chess club', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Chess Circle</b></center>');
    scene.img('images/locations/pavlovsk/community/chess/kruchess.jpg');
    scene.text(`You go to the chess club room. As you walk in, a teacher looks at you and says "It costs ${qspFunc(s, 'money', 'string_price', 500)} for one month to join and you can come as many days as you like. Once the month is up, any days you did not attend are not refunded."`);
    if (qspFunc(s, 'money', 'can_afford', 500) === 1) {
      scene.actions([
        { label: 'Sign up', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 500);
    (st as any).chessmonth = ((st as any).month ?? 0);
    (st as any).chessyear = ((st as any).year ?? 0);
    qspCall(st, 'stat', '');
    scene.text('You pay for the tuition.');
    scene.actions([
      { label: 'Leave', goto: ['pav_commclubs', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_commclubs', ''] },
    ]);
  } },
      ]);
    }
    if (((s as any).ml_guitarlesson ?? 0)?.['advertisement'] === 1  &&  ((s as any).ml_guitarlesson ?? 0)?.['enquired'] === 0) {
      scene.actions([
        { label: 'Enquire about the guitar lessons', goto: ['music_guitarlesson', 'enquiry'] },
      ]);
    }
    if (((s as any).ml_guitarlesson ?? 0)?.['enquired'] === 1  &&  ((s as any).ml_guitarlesson ?? 0)?.['lessonday'] === 8) {
      scene.actions([
        { label: 'Arrange a lesson day', goto: ['music_guitarlesson', 'setlessonday'] },
      ]);
    }
    if ((((s as any).ml_guitarlesson ?? 0)?.['nextlesson'] === ((s as any).daystart ?? 0))) {
      if ((((s as any).ml_guitarlesson ?? 0)?.['lessonhour']-1 === ((s as any).hour ?? 0))) {
        scene.actions([
          { label: 'Wait for your guitar lesson', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).ml_guitarlesson ?? 0)?.['lessoncost']) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + ((60 - ((st as any).minut ?? 0)));
      qspGoto(st, 'music_guitarlesson', 'lesson');
    }
  } },
        ]);
      }
      if ((((s as any).ml_guitarlesson ?? 0)?.['lessonhour'] === ((s as any).hour ?? 0))) {
        scene.actions([
          { label: 'Go to your guitar lesson', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).ml_guitarlesson ?? 0)?.['lessoncost']) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'music_guitarlesson', 'lesson');
    }
  } },
        ]);
      }
    }
  } else {
    scene.text('Club\'s closed.');
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_commcenter', ''] },
    { label: 'Go to the toilets', goto: ['gdktoilet', 'start'] },
  ]);
  scene.build();
}

export const pav_commclubs: LocationDef = {
  name: 'pav_commclubs',
  title: 'The community center',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['At this time of day, the community center operates various clubs.'],
  enter: enter,
};
