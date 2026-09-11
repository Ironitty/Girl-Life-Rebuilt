import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gkafe', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Borislav\'s cafe</b></center>');
  scene.img('images/locations/pavlovsk/trainstation/cafe/gkafe.jpg');
  // TODO-QSP: dynamic text: A small shabby cafe attached to the train station. It's closed right now, but is...
  scene.text('A small shabby cafe attached to the train station. It\'s closed right now, but is usually open between \'+func(\'time\', \'get_time_string\', 8, 0)+\' and \'+func(\'time\', \'get_time_string\', 20, 0)+\'.');
  if ((((s as any).locat ?? 0)?.['Mother'] === 7  ||  ((s as any).locat ?? 0)?.['Mother'] === 9)  &&  ((s as any).hour ?? 0) === 16  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).locat ?? 0)?.['Mom_cafe_sex'] === 1) {
    scene.img('images/locations/pavlovsk/trainstation/cafe/gkafe.jpg');
    scene.text('A small shabby cafe attached to the train station.');
    scene.text('The door is currently locked and there\'s a "closed" sign in the window. That\'s strange, the cafe is supposed to be open right now…');
    scene.actions([
      { label: 'Walk around the cafe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You walk around back to try and figure out why the cafe is closed and hear voices through the wall. It sounds like a woman screaming! You quickly look around and notice a stack of old crates. If you stand on them, you could reach a small window and see what\'s happening.');
    scene.actions([
      { label: 'Peek through the window', handler: (st: GameState) => {
    ((s as any).mother ?? {})['slava_fuck'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/event/momslut.jpg');
    if (((s as any).momslut ?? 0) >= 1) {
      scene.text('You carefully climb onto the boxes and stand on your toes to reach the small window, giving you a view into the back room of the cafe. Through the window you see your mother on her knees, giving the cafe owner a blowjob. She\'s very enthusiastic about it, and alternates between sucking his dick and licking his balls before she begins to deepthroat him, sliding his dick further and further down her throat until his balls rest on her chin.');
    } else {
      if (((s as any).momslut ?? 0)===0) {
        (s as any).momslut = 1;
        scene.text('You carefully climb onto the boxes and stand on your toes to reach the small window, giving you a view into the back room of the cafe. Through the window you see a woman on her knees, giving the cafe owner a blowjob. She\'s very enthusiastic about it, and alternates between sucking his dick and licking his balls before she begins to deepthroat him, sliding his dick further and further down her throat until his balls rest on her chin. When you look closer, you realize that it\'s your mother!');
      }
    }
    scene.actions([
      { label: 'Keep looking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).locat ?? {})['Mom_cafe_sex'] = 0;
    if (((s as any).slavatalk ?? 0) === 1  &&  ((s as any).pcafejob ?? 0) > 0) {
      (s as any).slavatalk = 2;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/event/momslut2.jpg');
    scene.text('The cafe owner abruptly pulls his cock out of your mother\'s mouth, a string of saliva still attached to it as he roughly pulls her up and tells her to lean against the wall. You can\'t hear them talking but he definitely seems to be in charge, and your mother is all too willing to comply with his every demand. Your mother lewdly turns her back to him and gently wiggles her ass, and he immediately shoves his cock into her pussy. His thrusting is fast and furious and you figure that he doesn\'t intend to do this much longer, knowing he has to open the cafe again before too many people notice. Your mother is moaning loudly as her pussy is roughly pounded by her boss. A few minutes later, he grabs her ass as his body spasms, dumping his load deep inside her. Your mother drops to her knees and cleans him up with her tongue, after which he pulls up his pants and goes to re-open the cafe. Your mother sits on the ground for a while to recuperate, licking her lips with a dreamy look in her eyes. You quickly get off the crates before she sees you.');
    scene.actions([
      { label: 'Leave', goto: ['pav_market', ''] },
    ]);
  } },
      { label: 'You\'ve seen enough', goto: ['pav_market', ''] },
    ]);
  } },
      { label: 'You\'ve seen enough', goto: ['pav_market', ''] },
    ]);
  } },
      { label: 'You\'ve seen enough', goto: ['pav_market', ''] },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 19) {
      scene.img('images/locations/pavlovsk/trainstation/cafe/gkafe2.jpg');
      scene.text('A small shabby cafe attached to the train station.');
      qspCall(s, 'gkafe', 'menu');
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
        if (((s as any).gschoolVars ?? 0)?.['block'] === 0) {
          if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
            // TODO-QSP: dynamic text: Since your <<$npc_nickname['A29']>> works here, you can eat-in for free.
            scene.text(`Since your ${((s as any).npc_nickname ?? 0)?.['A29']} works here, you can eat-in for free.`);
          } else {
            scene.text('Since you left home, you can no longer eat here for free.');
          }
        } else {
          if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
            // TODO-QSP: dynamic text: Since you got kicked out of school, you can no longer eat here for free. Your <<...
            scene.text(`Since you got kicked out of school, you can no longer eat here for free. Your ${((s as any).npc_nickname ?? 0)?.['A29']} wants you to earn a living.`);
          } else {
            scene.text('Since you were expelled from school and left home, you can no longer eat here for free.');
          }
        }
      } else {
        // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> works here and when you were a kid you used to be ...
        scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29']} works here and when you were a kid you used to be able to eat for free.`);
      }
      if (((s as any).week ?? 0) < 6) {
        if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 16) {
          scene.text('Your <a href="exec: gt \'mother\'">mother</a> is currently working at the cafe, taking orders behind the counter.');
        } else {
          scene.text('The bar owner <a href="exec: gt \'gkafe\', \'boris\'">Borislav</a> is currently taking orders at the counter. Most people call him Slava.');
        }
      }
      (s as any).razvrand = Math.floor(Math.random() * 10) + 1;
      if (((s as any).razvrand ?? 0) > 7  &&  ((s as any).hour ?? 0) > 16  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).age ?? 0) < 18  &&  ((s as any).dyadyamishaevent ?? 0) === 0  &&  ((s as any).sosedknow ?? 0) === 1) {
        scene.text('');
        // TODO-QSP: dynamic text: A male figure walks closely by your table. You look up and recognize him as Mish...
        scene.text(`A male figure walks closely by your table. You look up and recognize him as Misha, your neighbor. He stops when he recognizes you as well and sits down next to you, giving you a friendly smile. "Oh hello ${((s as any).pcs_nickname ?? 0)}. Listen, me and your stepfather were working late in the garage yesterday, and went for a nightcap at my place when we were finished. When your stepfather left, he accidentally left some of his tools behind. I'm fairly sure he needs them again today, and I could use a hand bringing them back to the garage. Could you help me out? I'll give you money for your troubles."`);
        scene.actions([
          { label: 'Help Misha', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A54');
    (st as any).sexpartkno = 1;
  }, goto: ['gevent', '1'] },
        ]);
      } else {
        if (((s as any).razvrand ?? 0) > 7  &&  ((s as any).hour ?? 0) > 16  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).dyadyamishaevent ?? 0) === 1  &&  ((s as any).dmishaday ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.text('');
          // TODO-QSP: dynamic text: A man suddenly slides into the seat next to you as you eat your meal. You look u...
          scene.text(`A man suddenly slides into the seat next to you as you eat your meal. You look up and see that it's Misha. He has a greedy look in his eyes, the kind that is already stripping you naked in his thoughts. His eyes are fixated on your breasts as he speaks. "Hey, ${((s as any).pcs_nickname ?? 0)}. Would you like to join me for some tea at my place? We can have a bit of fun just like last time, and you can earn some more money…"`);
          scene.actions([
            { label: '"Drink tea" with Misha', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A54');
    (st as any).sexpartkno = 1;
  }, goto: ['gevent', '1-1'] },
          ]);
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_market', ''] },
      ]);
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      if ((((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) <= 0)  &&  (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).week ?? 0) < 6)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 20)) {
        // TODO-QSP: dynamic text: <a href="exec: minut += 3 & gt 'gopskver'">Vitek, Dan and Vasily</a> are sitting...
        scene.text('<a href="exec: minut += 3 & gt \'gopskver\'">Vitek, Dan and Vasily</a> are sitting at a table in the far corner.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_market', ''] },
  ]);
  scene.build();
}

function enterMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Order from the menu', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
    { label: 'Order take-out [+$func(\'money\', \'get_cost_string\', 350)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 350) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 350);
      scene.actions([{ label: 'Continue', goto: ['food', 'fast_food'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterBoris(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Borislav\'s cafe</b></center>');
  scene.img('images/locations/pavlovsk/cafe/borislav.jpg');
  scene.text('The owner of the cafe is called Borislav. He is a tall, overweight man in his forties. Most people call him Slava.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['gkafe', ''] },
    { label: 'Talk', goto: ['motherkafeboss', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'menu':
      enterMenu(s, scene);
      break;
    case 'boris':
      enterBoris(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gkafe: LocationDef = {
  name: 'gkafe',
  title: 'Borislav\'s cafe',
  region: 'other',
  locationType: 'public_indoors',
  description: ['A small shabby cafe attached to the train station.'],
  enter: enter,
};
