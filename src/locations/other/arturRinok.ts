import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).arturKnow ?? 0))) {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    scene.text('The handsome Armenian man smiles while handing you a plump tangerine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
  }, goto: ['pav_train_market', 'start'] },
      { label: 'Take a tangerine', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    scene.text('You take the delicious looking fruit and return his smile with one of your own. The man grins and says in a thick accent "You are so beautiful girl! Come to my place and eat barbecue, I have Chacha brandy for us to enjoy together, it will be wonderful time."');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    // TODO-QSP: dynamic text: Sensing the man has "other" intentions, you start to refuse and back away from t...
    scene.text(`Sensing the man has "other" intentions, you start to refuse and back away from the Armenian. He puts his hand out to stop your retreat and says "Hey, I mean no offense. Perhaps my Russian is no good. Nothing bad will happen I swear! I'll even give you ${((((s as any).bag ?? 0)===0) ? ('a handbag') : ('cosmetics'))} if you come and spend some time with me."`);
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_train_market', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Show interest', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    scene.text('You can\'t help but show interested in the gift the unfamiliar Armenian is offering. Suddenly another Armenian comes up to you and leans in with an equally friendly smile. "Do not fear girl, Uncle Arturik does not bite. He is good man." The second stranger insists.');
    qspCall(s, 'willpower', 'drink', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'drink', 'resist', 'hard');
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
  } },
      ]);
    }
    scene.actions([
      { label: 'Go with Arthur', goto: ['arturHome', ''] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).arturday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['arturQW', 'arturQW_1'] }]);
    } else {
      if (((s as any).arturday ?? 0) === ((s as any).daystart ?? 0)) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        if (((s as any).arturblowday ?? 0) === ((s as any).daystart ?? 0)) {
          scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
          scene.text('Arthur smiles kindly at you. "There is much work to do, I\'m sorry."');
          scene.actions([
            { label: 'Leave', goto: ['pav_train_market', 'start'] },
          ]);
        } else {
          scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
          scene.text('Arthur smiles kindly and hands you a particularly juicy looking tangerine. "Sorry, girl, but I have work to do. Unless we make it quick."');
          qspCall(s, 'willpower', 'bj', 'resist', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_train_market', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Go with Arthur', goto: ['arturkiosk', ''] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterWork_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
  // TODO-QSP: dynamic text: "Good job <<$pcs_nickname>>, but time has come to get to work darling."
  scene.text(`"Good job ${((s as any).pcs_nickname ?? 0)}, but time has come to get to work darling."`);
  scene.actions([
    { label: 'Trade', handler: (st: GameState) => {
    (s as any).hour = 18;
    (s as any).arturDaysWorked1 = ((s as any).arturDaysWorked1 ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    scene.text('You work until the evening at the counter, selling fresh fruit. It was a rough day as you quarreled with several customers over prices and you find yourself very tired.');
    if (((s as any).arturDaysWorked1 ?? 0) >= 10) {
      scene.actions([{ label: 'Continue', goto: ['arturQW', 'arturQW_2'] }]);
    } else {
      scene.actions([
        { label: 'Go with Arthur', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'earn', 1250);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/arturqw_4.jpg');
    // TODO-QSP: dynamic text: Arthur comes up behind you and firmly grabs a handful of your ass. "<<$pcs_nickn...
    scene.text(`Arthur comes up behind you and firmly grabs a handful of your ass. "${((s as any).pcs_nickname ?? 0)}, here you go, you earned this." He hands you ${qspFunc(s, 'money', 'string_profit', 1250)}.`);
    scene.text('"I like helping you very much, thank you very much Arturik." You look at him with grateful eyes and take the money.');
    scene.text('"Well, you know, the sight of your beautiful eyes nearly overwhelm me every time I see them. So does your tight ass." He says, smiling lecherously at you');
    scene.text('You turn and give him a quick shake of your rump before departing.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_market', 'start'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWork_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
  if ((!((s as any).arturDaysWorked2 ?? 0))) {
    scene.text('"I see my new, super sexy secretary came." Arthur smiles while eyeing you lustfully.');
  }
  scene.text('You quickly get to work. "We\'ve got the usual paperwork to complete." Arthur instructs you as you begin.');
  scene.actions([
    { label: 'Work', handler: (st: GameState) => {
    (s as any).hour = 17;
    (s as any).arturDaysWorked2 = ((s as any).arturDaysWorked2 ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/arturqw_6.jpg');
    scene.text('You work at the computer for hours, checking inventory, buying and selling, calculating daily expenses and income. The work is complicated and time consuming, but you feel satisfied in the end.');
    scene.actions([
      { label: 'Go with Arthur', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'earn', 2500);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/arturqw_7.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>> that looks perfect! Now that the accounts are taken care of, ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)} that looks perfect! Now that the accounts are taken care of, I can relax." Arthur says, leaning back in his chair in a relaxed pose.`);
    scene.text('"Yes, but you\'ve still got a lot I haven\'t finished yet. There is far more to do." You say, concerned.');
    scene.text('"Oh well, we will have time to figure it all out. Some other night, perhaps." He says nonchalantly.');
    scene.text('"Now let\'s go eat barbecue and drink Chacha brandy. Then I can grab you by that fine ass of yours." Arthur suggests as he walks over and begins roughly palming your ass.');
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
    case 'work_1':
      enterWork_1(s, scene);
      break;
    case 'work_2':
      enterWork_2(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const arturRinok: LocationDef = {
  name: 'arturRinok',
  title: 'The handsome Armenian man smiles while handing you a plump t',
  region: 'other',
  description: ['The handsome Armenian man smiles while handing you a plump tangerine.'],
  enter: enter,
};
