import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'restoran', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Babel</b></center>');
  scene.img('images/locations/city/citycenter/expensiverest/restoran.jpg');
  scene.text('You enter the restaurant and see a well dressed man by the counter at the entrance.');
  if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 36) {
    scene.actions([{ label: 'Continue', goto: ['mey_tamara_events', 'wait_qw'] }]);
  }
  if (((s as any).vladimirQW ?? 0)?.['day'] === ((s as any).daystart ?? 0)  &&  ((s as any).vladimirQW ?? 0)?.['stage'] === 21  &&  ((s as any).hour ?? 0) === 20) {
    scene.actions([{ label: 'Continue', goto: ['vladimirQW_meet', ''] }]);
  }
  scene.actions([
    { label: 'Leave the restaurant', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Approach the maître d\' ', goto: ['restoran', 'maitred'] },
  ]);
  scene.build();
}

function enterMaitred(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'restoran', 'maitred');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown')  &&  ((s as any).pcs_makeup ?? 0) > 1  &&  ((s as any).pcs_hairbsh ?? 0) === 1  &&  ((s as any).pcs_sweat ?? 0) < 20) {
    scene.text('<center><b>Babel</b></center>');
    scene.img('images/locations/city/citycenter/expensiverest/maitredseat.jpg');
    scene.text('The well-dressed maître d\' politely asks whether you would prefer the VIP section or the common room.');
    scene.actions([
      { label: 'Go to the VIP room [+$func(\'money\', \'get_cost_string\', 5000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.text('<center><b>Babel</b></center>');
      scene.img('images/locations/city/citycenter/expensiverest/maitredvip.jpg');
      // TODO-QSP: dynamic text: The maître d' informs you that there will be a VIP charge of <<$func('money', 's...
      scene.text(`The maître d' informs you that there will be a VIP charge of ${qspFunc(s, 'money', 'string_price', 5000)}`);
      scene.actions([
        { label: 'Follow the maître d\' ', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 5000);
  }, goto: ['restoran', 'vip'] },
        { label: 'Change your mind', goto: ['restoran', 'maitred'] },
      ]);
    }
  } },
      { label: 'Go to the Common Room', goto: ['restoran', 'zal'] },
    ]);
  } else {
    scene.text('<center><b>Restaurant</b></center>');
    scene.img('images/locations/city/citycenter/expensiverest/maitredrefuse.jpg');
    scene.text('The maître d\' politely informs you that customers must look presentable and wear formal clothing if they wish to dine here.');
    if (((s as any).clothingworntype ?? 0) !== 'moncheri_dress'  &&  ((s as any).clothingworntype ?? 0) !== 'moncheri_gown') {
      scene.text('He suggests you try shopping at Mon Chéri if you want to meet their dress code.');
    } else {
      if (((s as any).pcs_makeup ?? 0) < 2) {
        scene.text('He tells you that it\'s important for ladies to take the time to look their best and mimes applying make up.');
      } else {
        if (((s as any).pcs_hairbsh ?? 0) !== 1) {
          scene.text('He tells you that one\'s hair must be neat and tidy.');
        } else {
          scene.text('He waves his hand in front of his nose and gives you a disgusted look. It might be time to have a shower.');
        }
      }
    }
  }
  scene.actions([
    { label: 'Return to the foyer', goto: ['restoran', 'start'] },
  ]);
  scene.build();
}

function enterZal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Babel, Common Room</b></center>');
  scene.img('images/locations/city/citycenter/expensiverest/restoran2.jpg');
  scene.text('The room emits a good atmosphere with its soft lighting and light furniture. You hear the sounds of music, the clinks of glasses and female laughter. It seems you can finally relax a little.');
  if ((Math.floor(Math.random() * 101) + 0) > 80  &&  ((s as any).npc_QW ?? 0)?.['A192'] === 0  &&  ((s as any).pcs_energy ?? 0) > 15  &&  ((s as any).nastjaday ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).nastjaday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/anastasia/nastja1.jpg');
    scene.text('You notice an attractive looking girl sitting alone. Your eyes linger on her for a bit and she seems to feel your gaze as she suddenly looks at you.');
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Smile at her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Smile at her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['nastja', 'pos1'] },
      ]);
    }
    scene.actions([
      { label: 'Look down', handler: (st: GameState) => {
    scene.text('She turns away from you.');
    scene.actions([
      { label: 'Leave', goto: ['restoran', 'zal'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Be seated at a table', goto: ['restoran', 'comtable'] },
    { label: 'Leave the Common Room', goto: ['restoran', 'start'] },
  ]);
  scene.build();
}

function enterVip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'restoran', 'vip');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Babel, VIP room</b></center>');
  scene.img('images/locations/city/citycenter/expensiverest/restoran3.jpg');
  scene.text('You are shown into the VIP room by the maître d\', and you can\'t help but smile. Soft lighting and empire style furniture provide a calm and friendly atmosphere. You hear soft music and finally feel safe enough to let your guard down a little.');
  scene.actions([
    { label: 'Be seated at the VIP table', goto: ['restoran', 'viptable'] },
    { label: 'Leave the VIP Room', goto: ['restoran', 'start'] },
  ]);
  scene.build();
}

function enterComtable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'restoran', 'comtable');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Babel, Common Room</b></center>');
  scene.img('images/locations/city/citycenter/expensiverest/maitredseat.jpg');
  scene.text('You are escorted to your seat by the maître d\'. You sit and prepare to order a wonderful meal in the busy restaurant.');
  scene.actions([
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
    { label: 'Get up from the table', goto: ['restoran', 'zal'] },
  ]);
  scene.build();
}

function enterViptable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'restoran', 'viptable');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Babel, VIP room</b></center>');
  scene.img('images/locations/city/citycenter/expensiverest/chefrecommends.jpg');
  scene.text('You sit and prepare to order a wonderful meal, recommended by the chef. You\'ll be dining with pleasure in the peaceful and luxurious VIP Room.');
  scene.actions([
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
    { label: 'Get up from the table', goto: ['restoran', 'vip'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'maitred':
      enterMaitred(s, scene);
      break;
    case 'zal':
      enterZal(s, scene);
      break;
    case 'vip':
      enterVip(s, scene);
      break;
    case 'comtable':
      enterComtable(s, scene);
      break;
    case 'viptable':
      enterViptable(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const restoran: LocationDef = {
  name: 'restoran',
  title: 'Babel',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
