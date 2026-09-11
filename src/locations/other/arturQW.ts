import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterArturQW_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).arturTimes ?? 0) >= 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((s as any).pcs_hotcat ?? 0) >= 7) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you are the most beautiful girl I have ever laid eyes on and...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, you are the most beautiful girl I have ever laid eyes on and fully deserve my respect." Arthur says, bowing his head to you in an act of humility.`);
    scene.text('"Oh, thanks Arturik, that is very kind of you to say." You respond, blushing slightly at the compliment.');
    scene.text('"Why don\'t you work for me at my stall on the weekends? You do a good job and I will pay you enough to live like a queen!" Arthur offers, looking at you intently.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if ((!((s as any).arturQW ?? 0))) {
      (s as any).arturQW = 1;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/arturqw_1.jpg');
    scene.text('"Well, if you\'re really going to pay that well, then I can hardly refuse." You say smiling at the handsome Armenian.');
    scene.text('My beauty, I will not only pay you that well, but I will treat you like the treasure you are." He assures you.');
    scene.text('Excitedly Arthur comes over and gives your ass a hard squeeze, his fingers sinking into your plump flesh. You moan lightly, feeling him taking a sense of ownership over your body as he grips your butt cheek. "Now that the business is settled, let\'s go eat barbecue, drink Chacha brandy!" He declares happily.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_train_market', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go with Arthur', goto: ['arturHome', ''] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/arturqw_2.jpg');
    scene.text('You smile sadly at him. "Thank you for the tempting offer, but I have so much to do. School work, dancing, volleyball, and I simply don\'t have any free time as it is.');
    scene.text('"As you like beautiful." He responds somewhat sadly before adding. "Ah forget it, now let\'s go eat barbecue, drink Chacha brandy." He says as he grabs you by your ass and gives it a squeeze, his fingers sinking into your soft flesh. You moan lightly, feeling him taking a sense of ownership over your body as he grips your butt cheek.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_train_market', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go with Arthur', goto: ['arturHome', ''] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.text('Arthur smiles kindly and hands you a tangerine. "Come to eat barbecue, drink Chacha brandy!"');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_train_market', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go with Arthur', goto: ['arturHome', ''] },
    ]);
  }
  scene.build();
}

function enterArturQW_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'money', 'earn', 5000);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you are my treasure! Because of you our profits have doubled...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, you are my treasure! Because of you our profits have doubled. I always said what we need is a sexy girl behind the counter, and I was right!" Arthur declares proudly.`);
  scene.text('"Thanks Arturik, but I\'m tired of working behind the counter. I think I need to find something else. I\'m sorry." You say regretfully, hoping he won\'t be upset with you.');
  scene.text('"What? Damn it! I thought you liked it. It is fine, it is fine, a girl like you should have a decent place to work."');
  scene.text('He appears to be thinking to himself before his eyes light up and he quickly adds. "Look, I fired my bookkeeper, the old hag. Now you can take over her job! You will enjoy it much more, I promise. You will receive twice the money and won\'t have to deal with asshole customers. Just come every day by 16.00, otherwise I will have to fire you, despite your fine ass." Arthur says.');
  scene.text('You see a look of desperation in his eyes as he finishes the job offer. He clearly doesn\'t want to lose having you around every day. You consider your options…');
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).arturQW ?? 0) === 1) {
      (s as any).arturQW = 2;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/arturqw_5.jpg');
    scene.text('You smile at him, a mix of joy and lust. "Well, Arthur, that changes everything, I would love to keep the books for you."');
    scene.text('"Yes! I knew you would." The Armenian exclaims happily. "Come my beauty, let\'s go eat barbecue and drink Chaha brandy." He says as he roughly grabs your ass, palming your soft cheeks with his thick, muscular hands.');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_train_market', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go with Arthur', goto: ['arturHome', ''] },
    ]);
  } },
    { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/arturqw_2.jpg');
    scene.text('"Thank you for the tempting offer, but I have so much to do. School work, dancing, volleyball, and I don\'t have any free time as it is. It\'s just too much." You say, sad to have to turn down such a generous opportunity.');
    scene.text('"As you like beautiful." He said somewhat sadly before adding. "Ah forget it, now let\'s go eat barbecue, drink Chacha brandy." He says as he grabs you by your ass and gives it a squeeze.');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_train_market', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go with Arthur', goto: ['arturHome', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'arturQW_1':
      enterArturQW_1(s, scene);
      break;
    case 'arturQW_2':
      enterArturQW_2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const arturQW: LocationDef = {
  name: 'arturQW',
  title: '"Oh, thanks Arturik, that is very kind of you to say." You r',
  region: 'other',
  enter: enter,
};
