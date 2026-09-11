import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBrothel(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bordel', 'brothel');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/sauna/borroom.jpg');
  scene.text('This is your room in the brothel. In the middle is a huge bed sits in the middle and there\'s a small side door to the <a href="exec:gt \'bordel\', \'dysh\'">bathroom</a>, but not much else.');
  scene.text('There is a lot of competition at the brothel. In order to avoid any fights, they introduced a rule - no more than two clients per day.');
  if (qspFunc(s, 'bordel', 'is_open') === 0) {
    scene.text('The brothel is closed for the night. You won\'t be able to work now.');
  } else {
    if (((s as any).borsexkol ?? 0) >= 2) {
      scene.text('You have already hit this limit, so you won\'t be able to work again until midnight.');
    } else {
      scene.actions([
        { label: 'Go to the reception room and wait for customers', handler: (st: GameState) => {
    if (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1  ||  ((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).pcs_makeup ?? 0) < 2  ||  ((s as any).pcs_leghair ?? 0) > 3  ||  ((s as any).pcs_pubes ?? 0) > 3  ||  ((s as any).pcs_sweat ?? 0) > 25  ||  ((s as any).pcs_hairbsh ?? 0) < 1) {
      scene.text('The brothel madam comes approaches you. "Our customers expect you to be cleanshaven, made-up and with your hair looking nice. Go and sort yourself out, now!"');
      scene.actions([
        { label: 'Go to the bathroom', goto: ['bordel', 'dysh'] },
      ]);
    } else {
      if (((s as any).clothingworntype ?? 0) !== 'fancy_burlesque'  &&  ((s as any).PCloStyle ?? 0) !== 4  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.text('You need to wear an outfit that can be used for prostitution. If you haven\'t got anything suitable, you can work naked, but you\'ll be paid less and might get treated badly.');
        scene.text('You can change your clothes in the bathroom.');
        scene.actions([
          { label: 'Go to the bathroom', goto: ['bordel', 'dysh'] },
        ]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['bordel', 'var'] }]);
      }
    }
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.actions([{ label: 'Continue', goto: ['city_redlight', 'start'] }]);
    } else {
      scene.text('You can\'t go outside naked.');
      scene.actions([
        { label: 'Go to the bathroom', goto: ['bordel', 'dysh'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterDysh(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bordel', 'dysh');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/sauna/bordysh.jpg');
  scene.text('The bathroom is well fitted and clean since customers can access it and hygiene is very important in a brothel.');
  scene.text('Your room is so dedicated to its purpose that your clothes are stored in here.');
  scene.actions([
    { label: 'Return to your room', goto: ['bordel', 'brothel'] },
    { label: 'Bathroom functions', goto: ['vann', 'start'] },
    { label: 'Use the mirror', goto: ['mirror', 'start'] },
    { label: 'Change your clothes', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Client', Math.floor(Math.random() * 23) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  (s as any).borrand = Math.floor(Math.random() * 11) + 0;
  if ((!((s as any).borrand ?? 0))) {
    (s as any).bordelpay = ((s as any).bordelpay ?? 0) + (((s as any).rand ?? 0)(10, 30) * 10);
    // TODO-QSP: dynamic text: A customer orders you (<<$func('money', 'string_profit', bordelpay)>>).
    scene.text(`A customer orders you (${qspFunc(s, 'money', 'string_profit', ((s as any).bordelpay ?? 0))}).`);
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['bordel', 'brothel'] },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (s as any).borsexkol = ((s as any).borsexkol ?? 0) + (1);
    qspCall(s, 'money', 'earn', ((s as any).bordelpay ?? 0));
    (s as any).stat['prostitution_count'] = ((s as any).stat['prostitution_count'] ?? 0) + (1);
    (s as any).bordelslutty = ((s as any).bordelslutty ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).zpprand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).zpprand ?? 0) >= 70) {
      qspCall(s, 'dinSex', 'std_trigger');
    }
    (s as any).picrand = Math.floor(Math.random() * 41) + 0;
  }, goto: ['sex', 'start'] },
    ]);
  } else {
    if (((s as any).borrand ?? 0) === 1) {
      (s as any).bordelpay = ((s as any).bordelpay ?? 0) + (((s as any).rand ?? 0)(10, 30) * 10);
      // TODO-QSP: dynamic text: A customer orders you and another girl (<<$func('money', 'string_profit', bordel...
      scene.text(`A customer orders you and another girl (${qspFunc(s, 'money', 'string_profit', ((s as any).bordelpay ?? 0))}).`);
      qspCall(s, 'willpower', 'sex', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['bordel', 'brothel'] },
        ]);
      }
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    (s as any).borsexkol = ((s as any).borsexkol ?? 0) + (1);
    qspCall(s, 'money', 'earn', ((s as any).bordelpay ?? 0));
    (s as any).stat['prostitution_count'] = ((s as any).stat['prostitution_count'] ?? 0) + (1);
    (s as any).bordelslutty = ((s as any).bordelslutty ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).zpprand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).zpprand ?? 0) >= 70) {
      qspCall(s, 'dinSex', 'std_trigger');
    }
  }, goto: ['podrsex', 'start'] },
      ]);
    } else {
      if (((s as any).borrand ?? 0) === 2) {
        (s as any).bordelpay = ((s as any).bordelpay ?? 0) + (((s as any).rand ?? 0)(15, 45) * 10);
        // TODO-QSP: dynamic text: Two clients book you (<<$func('money', 'string_profit', bordelpay)>>).
        scene.text(`Two clients book you (${qspFunc(s, 'money', 'string_profit', ((s as any).bordelpay ?? 0))}).`);
        qspCall(s, 'willpower', 'sex', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['bordel', 'brothel'] },
          ]);
        }
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    (s as any).borsexkol = ((s as any).borsexkol ?? 0) + (1);
    qspCall(s, 'money', 'earn', ((s as any).bordelpay ?? 0));
    (s as any).stat['prostitution_count'] = ((s as any).stat['prostitution_count'] ?? 0) + (1);
    (s as any).bordelslutty = ((s as any).bordelslutty ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).zpprand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).zpprand ?? 0) >= 70) {
      qspCall(s, 'dinSex', 'std_trigger');
    }
    qspCall(s, 'npcgeneratec', '', 0, 'Client', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), '1');
  }, goto: ['sexdvoe', 'start'] },
        ]);
      } else {
        if (((s as any).borrand ?? 0) === 3) {
          (s as any).bordelpay = ((s as any).bordelpay ?? 0) + (((s as any).rand ?? 0)(15, 45) * 10);
          // TODO-QSP: dynamic text: Two clients book you and another girl (<<$func('money', 'string_profit', bordelp...
          scene.text(`Two clients book you and another girl (${qspFunc(s, 'money', 'string_profit', ((s as any).bordelpay ?? 0))}).`);
          qspCall(s, 'willpower', 'sex', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['bordel', 'brothel'] },
            ]);
          }
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    (s as any).borsexkol = ((s as any).borsexkol ?? 0) + (1);
    qspCall(s, 'money', 'earn', ((s as any).bordelpay ?? 0));
    (s as any).stat['prostitution_count'] = ((s as any).stat['prostitution_count'] ?? 0) + (1);
    (s as any).bordelslutty = ((s as any).bordelslutty ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).zpprand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).zpprand ?? 0) >= 70) {
      qspCall(s, 'dinSex', 'std_trigger');
    }
    qspCall(s, 'npcgeneratec', '', 0, 'Client', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), '1');
  }, goto: ['sexdvanadva', 'start'] },
          ]);
        } else {
          if (((s as any).borrand ?? 0) === 4) {
            (s as any).bordelpay = ((s as any).bordelpay ?? 0) + (((s as any).rand ?? 0)(20, 60) * 10);
            // TODO-QSP: dynamic text: A group of customers order you (<<$func('money', 'string_profit', bordelpay)>>).
            scene.text(`A group of customers order you (${qspFunc(s, 'money', 'string_profit', ((s as any).bordelpay ?? 0))}).`);
            qspCall(s, 'willpower', 'sex', 'resist', 'hard');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['bordel', 'brothel'] },
              ]);
            }
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    (s as any).borsexkol = ((s as any).borsexkol ?? 0) + (1);
    qspCall(s, 'money', 'earn', ((s as any).bordelpay ?? 0));
    (s as any).stat['prostitution_count'] = ((s as any).stat['prostitution_count'] ?? 0) + (1);
    (s as any).bordelslutty = ((s as any).bordelslutty ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).zpprand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).zpprand ?? 0) >= 70) {
      qspCall(s, 'dinSex', 'std_trigger');
    }
    (s as any).guy = ((s as any).guy ?? 0) + (3);
    qspCall(s, 'npcgeneratec', '', 0, 'Bordel Client', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Bordel Client', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 1);
    qspCall(s, 'npcgeneratec', '', 0, 'Bordel Client', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0), 2);
  }, goto: ['paysex', 'start'] },
            ]);
          } else {
            if (qspFunc(s, 'bordel', 'is_open')) {
              scene.text('You are not chosen.');
              scene.actions([
                { label: 'Wait for another', goto: ['bordel', 'var'] },
              ]);
            } else {
              scene.text('You are not chosen, and the brothel is now closed.');
            }
            scene.actions([
              { label: 'Go to your room', goto: ['bordel', 'brothel'] },
            ]);
          }
        }
      }
    }
  }
  if (((s as any).borrand ?? 0) <= 4  &&  qspFunc(s, 'bordel', 'is_open') === 0) {
    scene.text('The brothel is closing now, so this is your last chance to work today.');
  }
  scene.build();
}

function enterIsOpen(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = ((s as any).hour ?? 0) >= qspFunc(s, 'bordel', 'open_hour')  ||  ((s as any).hour ?? 0) <= qspFunc(s, 'bordel', 'close_hour');
  scene.build();
}

function enterOpenHour(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 20;
  scene.build();
}

function enterCloseHour(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 3;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'brothel':
      enterBrothel(s, scene);
      break;
    case 'dysh':
      enterDysh(s, scene);
      break;
    case 'var':
      enterVar(s, scene);
      break;
    case 'is_open':
      enterIsOpen(s, scene);
      break;
    case 'open_hour':
      enterOpenHour(s, scene);
      break;
    case 'close_hour':
      enterCloseHour(s, scene);
      break;
    default:
      enterBrothel(s, scene);
      break;
  }
}

export const bordel: LocationDef = {
  name: 'bordel',
  title: '<center><b>Brothel</b></center>',
  region: 'other',
  locationType: 'event',
  locclass: 'restroom',
  description: ['There is a lot of competition at the brothel. In order to avoid any fights, they introduced a rule - no more than two clients per day.'],
  enter: enter,
};
