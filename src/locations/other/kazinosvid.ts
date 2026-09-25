import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).kisvrand = 0;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cinema</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/cards/0.jpg');
  scene.text(`You sit down with ${((s as any).telsob ?? '')} to have some drinks, and play some cards.`);
  scene.actions([
    { label: 'Play', handler: (st: GameState) => {
    if (((st as any).telsob ?? 0) === 'Alla') {
      (st as any).alla = ((st as any).alla ?? 0) + (1);
      if (((st as any).alla ?? 0) >= 20) {
        (st as any).kisvrand = (Math.floor(Math.random() * 9) + 0);
        if (((st as any).kisvrand ?? 0) < 2) {
          qspGoto(st, 'kazinosvid', '1');
        } else {
          if (((st as any).kisvrand ?? 0) < 4) {
            qspGoto(st, 'kazinosvid', '2');
          } else {
            qspGoto(st, 'kazinosvid', '3');
          }
        }
      } else {
        qspGoto(st, 'kazinosvid', '3');
      }
    } else {
      if (((st as any).telsob ?? 0) === 'Masha') {
        (st as any).masha = ((st as any).masha ?? 0) + (1);
        if (((st as any).masha ?? 0) >= 20) {
          (st as any).kisvrand = (Math.floor(Math.random() * 9) + 0);
          if (((st as any).kisvrand ?? 0) < 2) {
            qspGoto(st, 'kazinosvid', '1');
          } else {
            if (((st as any).kisvrand ?? 0) < 4) {
              qspGoto(st, 'kazinosvid', '2');
            } else {
              qspGoto(st, 'kazinosvid', '3');
            }
          }
        } else {
          qspGoto(st, 'kazinosvid', '3');
        }
      } else {
        if (((st as any).telsob ?? 0) === 'Kate') {
          qspCall(st, 'npc_relationship', 'modify', 'A219', 1);
          if (((st as any).npc_rel ?? 0)?.['A219'] >= 20) {
            (st as any).kisvrand = (Math.floor(Math.random() * 9) + 0);
            if (((st as any).kisvrand ?? 0) < 2) {
              qspGoto(st, 'kazinosvid', '1');
            } else {
              if (((st as any).kisvrand ?? 0) < 4) {
                qspGoto(st, 'kazinosvid', '2');
              } else {
                qspGoto(st, 'kazinosvid', '3');
              }
            }
          } else {
            qspGoto(st, 'kazinosvid', '3');
          }
        } else {
          if (((st as any).telsob ?? 0) === ((st as any).npcdesc ?? 0)) {
            qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
            if (((st as any).npc_rel ?? 0)?.[String((st as any).npcID ?? 0)] < 60) {
              qspGoto(st, 'kazinosvid', '3');
            } else {
              (st as any).kisvrand = (Math.floor(Math.random() * 9) + 0);
              if (((st as any).kisvrand ?? 0) <= 1) {
                (st as any).kisvrand = undefined;
                qspGoto(st, 'kazinosvid', '1');
              } else {
                if (((st as any).kisvrand ?? 0) <= 3) {
                  (st as any).kisvrand = undefined;
                  qspGoto(st, 'kazinosvid', '2');
                } else {
                  (st as any).kisvrand = undefined;
                  qspGoto(st, 'kazinosvid', '3');
                }
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cards/0.jpg');
  scene.text(`While playing with ${((s as any).telsob ?? '')}, two guys walk up your table.`);
  scene.text('"Would you lovely ladies care to join us in our room for a game of cards," one man offers.');
  scene.text(`${((s as any).telsob ?? '')} says she does't mind, and looks at you for an answer.`);
  scene.actions([
    { label: 'Refuse', goto: ['kazinosvid', '3'] },
    { label: 'Agree', handler: (st: GameState) => {
    (st as any).picrand = (Math.floor(Math.random() * 2) + 14);
    scene.img(`images/characters/city/boyfriend/sex/event/cards/${((st as any).picrand ?? '')}.jpg`);
    (st as any).randkazinv = (Math.floor(Math.random() * 2) + 0);
    (st as any).randkazinvsum = (Math.floor(Math.random() * 9901) + 100);
    if (((st as any).randkazinv ?? 0) === 1) {
      qspCall(st, 'money', 'earn', ((st as any).randkazinvsum ?? 0), 'cash');
      scene.text(`These guys didn't stand a chance. You won ${qspFunc(s, 'money', 'string_profit', ((st as any).randkazinvsum ?? ''))}. As you and ${((st as any).telsob ?? '')} are about to leave, the guys beg you stay: "Come on girls, you can't just take our money and run. Sit down have another drink. We have entertainments other than cards to offer."<br>From the bulge is his pants, It's pretty clear what kind of entertainment he has in mind.`);
      (st as any).telsobnastr = (Math.floor(Math.random() * 11) + 0);
      if (((st as any).telsobnastr ?? 0) < 4) {
        scene.text(`No, it's time we were on our way," says ${((st as any).telsob ?? '')}. She takes you by the hand, and leads you out of the room.`);
        scene.actions([
          { label: 'Finish', goto: ['kazinosvid', '3'] },
        ]);
      } else {
        scene.text(`"I wouldn't mind consoling the losers," says ${((st as any).telsob ?? '')}, with a lustful look in her eye. One of the men starts to unbutton his fly.`);
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Take ' + String(((st as any).telsob ?? '') ?? '') + ' and leave.', goto: ['kazinosvid', '3'] },
          { label: 'Console the losers', handler: (st: GameState) => {
    (st as any).kazsexdva = 1;
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    qspGoto(st, 'sexdvanadva', 'var');
  } },
        ]);
      }
    } else {
      scene.text(`Those guys were better card players than they looked. You lost ${qspFunc(s, 'money', 'string_price', ((st as any).randkazinvsum ?? ''))} to them.`);
      if (qspFunc(s, 'money', 'can_afford', ((st as any).randkazinvsum ?? 0), 'cash') === 0) {
        scene.text(`You and ${((st as any).telsob ?? '')} don't even have enough cash to pay them. It looks like you have no choice other than spreading your legs for them.`);
        scene.actions([
          { label: 'Pay them', handler: (st: GameState) => {
    (st as any).kazsexdva = 1;
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    qspGoto(st, 'sexdvanadva', 'var');
  } },
        ]);
      } else {
        scene.text('You have enough money to pay them, but the guys are obviously hinting that they would rather take another form of payment from you.');
        if (((st as any).telsobnastr ?? 0) < 4) {
          qspCall(st, 'money', 'pay', ((st as any).randkazinvsum ?? 0), 'cash');
          scene.text(`"Here's your money, we are leaving," says ${((st as any).telsob ?? '')}. She takes you by the hand, and leads you out of the room.`);
          scene.actions([
            { label: 'Finish', goto: ['kazinosvid', '3'] },
          ]);
        } else {
          scene.text(`"I wouldn't mind an alternative payment plan," says ${((st as any).telsob ?? '')}, smiling lasciviously.`);
          qspCall(st, 'willpower', 'misc', 'self', 'hard');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Use an alternative form of payment', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Use an alternative form of payment', handler: (st: GameState) => {
    (st as any).kazsexdva = 1;
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'sexdvanadva', 'var');
  } },
            ]);
          }
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Give them the money, and leave with ' + String(((st as any).telsob ?? '') ?? '') + '.', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).randkazinvsum ?? 0), 'cash');
    qspGoto(st, 'kazinosvid', '3');
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cards/0.jpg');
  scene.text(`While you are playing with ${((s as any).telsob ?? '')}, you attract the attention of a man.`);
  scene.text('"Would you lovely ladies like to join me in my room for a private game?" he asks.');
  scene.text(`${((s as any).telsob ?? '')} says she does't mind, and looks at you for an answer.`);
  scene.actions([
    { label: 'Refuse', goto: ['kazinosvid', '3'] },
    { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cards/3.jpg');
    scene.text('After arriving in his room, everyone sits on the bed and begins to play cards.');
    scene.text('A few minutes later the man says: "Let\'s up the stakes. I\'m willing to gamble with my clothing if you ladies are."');
    scene.text(`${((st as any).telsob ?? '')} giggled, "You may end up naked and ashamed, ${((st as any).pcs_nickname ?? '')} and I haven't lost a hand yet."`);
    scene.text('"I have nothing to be ashamed of," the man grins.');
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Take ' + String(((st as any).telsob ?? '') ?? '') + ' and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Take ' + String(((st as any).telsob ?? '') ?? '') + ' and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'kazinosvid', '3');
  } },
      ]);
    }
    scene.actions([
      { label: 'Play strip poker', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cards/4.jpg');
    scene.text(`It's not until you and ${((st as any).telsob ?? '')} are down to your panties that you think this guy might have been sandbagging. He still has all his clothes!`);
    scene.text(`${((st as any).telsob ?? '')} pouts, "I know we agreed, but you have to cheating."`);
    scene.text('The man replies: "Be a good girl and get those panties off. For the next round I\'ll even let you change cards, either way I feel like I\'ve already won."');
    scene.text(`"Fine," ${((st as any).telsob ?? '')} says, with an exaggerated sigh. "${((st as any).pcs_nickname ?? '')} help me remove my panties."`);
    scene.actions([
      { label: 'Keep playing', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cards/5.jpg');
    scene.text('Minutes later, you are both naked, and he is standing in front of you with his pants down. It must\'ve been the wine that lead you to this predicament.');
    scene.text('"Well ladies, it looks you\'re all out of clothes. There is only one thing you have left to offer as payment," he says, while slowly stroking himself.');
    scene.actions([
      { label: 'Go for it', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).picrand = 23;
    (st as any).kazsexdva = 1;
    qspGoto(st, 'podrsex', 'suck');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = 10;
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/boyfriend/sex/event/cards/0.jpg');
  if (((s as any).telsob ?? 0) === 'Alla'  ||  ((s as any).telsob ?? 0) === 'Masha'  ||  ((s as any).telsob ?? 0) === 'Kate') {
    scene.text(`After your fun, ${((s as any).telsob ?? '')} says she has to go. She leaves you with a little kiss on the cheek.`);
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } else {
    scene.text(`After your fun, ${((s as any).telsob ?? '')} looks at you and waits for your next move.`);
    scene.actions([
      { label: 'Say goodbye', goto: ['city_industrial', ''] },
      { label: 'Invite her to your home', goto: ['lezbsex', 'startloverhome'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kazinosvid: LocationDef = {
  name: 'kazinosvid',
  title: '<center><b>Cinema</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
