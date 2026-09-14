import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).kisvrand = 0;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cinema</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/cards/0.jpg');
  // TODO-QSP: dynamic text: You sit down with <<$telsob>> to have some drinks, and play some cards.
  scene.text(`You sit down with ${((s as any).telsob || '')} to have some drinks, and play some cards.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Play', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).kisvrand = Math.floor(Math.random() * 9) + 0;
        if (((s as any).kisvrand ?? 0) < 2) {
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '1'] }]);
        } else {
          if (((s as any).kisvrand ?? 0) < 4) {
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '2'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
          }
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
      }
    } else {
      if (((s as any).telsob ?? 0) === 'Masha') {
        (s as any).masha = ((s as any).masha ?? 0) + (1);
        if (((s as any).masha ?? 0) >= 20) {
          (s as any).kisvrand = Math.floor(Math.random() * 9) + 0;
          if (((s as any).kisvrand ?? 0) < 2) {
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '1'] }]);
          } else {
            if (((s as any).kisvrand ?? 0) < 4) {
              scene.actions([{ label: 'Continue', goto: ['kazinosvid', '2'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
            }
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
        }
      } else {
        if (((s as any).telsob ?? 0) === 'Kate') {
          qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
          if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
            (s as any).kisvrand = Math.floor(Math.random() * 9) + 0;
            if (((s as any).kisvrand ?? 0) < 2) {
              scene.actions([{ label: 'Continue', goto: ['kazinosvid', '1'] }]);
            } else {
              if (((s as any).kisvrand ?? 0) < 4) {
                scene.actions([{ label: 'Continue', goto: ['kazinosvid', '2'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
              }
            }
          } else {
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
          }
        } else {
          if (((s as any).telsob ?? 0) === ((s as any).npcdesc ?? 0)) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
            if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
              scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
            } else {
              (s as any).kisvrand = Math.floor(Math.random() * 9) + 0;
              if (((s as any).kisvrand ?? 0) <= 1) {
                scene.actions([{ label: 'Continue', goto: ['kazinosvid', '1'] }]);
              } else {
                if (((s as any).kisvrand ?? 0) <= 3) {
                  scene.actions([{ label: 'Continue', goto: ['kazinosvid', '2'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
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
  // TODO-QSP: dynamic text: While playing with <<$telsob>>, two guys walk up your table.
  scene.text(`While playing with ${((s as any).telsob || '')}, two guys walk up your table.`);
  scene.text('"Would you lovely ladies care to join us in our room for a game of cards," one man offers.');
  // TODO-QSP: dynamic text: <<$telsob>> says she does't mind, and looks at you for an answer.
  scene.text(`${((s as any).telsob || '')} says she does't mind, and looks at you for an answer.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', goto: ['kazinosvid', '3'] },
    { label: 'Agree', handler: (st: GameState) => {
    (s as any).picrand = Math.floor(Math.random() * 2) + 14;
    scene.img(`images/characters/city/boyfriend/sex/event/cards/${((s as any).picrand || '')}.jpg`);
    (s as any).randkazinv = Math.floor(Math.random() * 2) + 0;
    (s as any).randkazinvsum = Math.floor(Math.random() * 9901) + 100;
    if (((s as any).randkazinv ?? 0) === 1) {
      qspCall(s, 'money', 'earn', ((s as any).randkazinvsum ?? 0), 'cash');
      // TODO-QSP: dynamic text: These guys didn't stand a chance. You won <<$func('money', 'string_profit', rand...
      scene.text(`These guys didn't stand a chance. You won ${qspFunc(s, 'money', 'string_profit', ((s as any).randkazinvsum || ''))}. As you and ${((s as any).telsob || '')} are about to leave, the guys beg you stay: "Come on girls, you can't just take our money and run. Sit down have another drink. We have entertainments other than cards to offer."<br>From the bulge is his pants, It's pretty clear what kind of entertainment he has in mind.`);
      (s as any).telsobnastr = Math.floor(Math.random() * 11) + 0;
      if (((s as any).telsobnastr ?? 0) < 4) {
        // TODO-QSP: dynamic text: No, it's time we were on our way," says <<$telsob>>. She takes you by the hand, ...
        scene.text(`No, it's time we were on our way," says ${((s as any).telsob || '')}. She takes you by the hand, and leads you out of the room.`);
        scene.actions([
          { label: 'Finish', goto: ['kazinosvid', '3'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: "I wouldn't mind consoling the losers," says <<$telsob>>, with a lustful look in...
        scene.text(`"I wouldn't mind consoling the losers," says ${((s as any).telsob || '')}, with a lustful look in her eye. One of the men starts to unbutton his fly.`);
        scene.actions([
          { label: 'Take <<$telsob>> and leave.', goto: ['kazinosvid', '3'] },
          { label: 'Console the losers', handler: (st: GameState) => {
    (s as any).kazsexdva = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  }, goto: ['sexdvanadva', 'var'] },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: Those guys were better card players than they looked. You lost <<$func('money', ...
      scene.text(`Those guys were better card players than they looked. You lost ${qspFunc(s, 'money', 'string_price', ((s as any).randkazinvsum || ''))} to them.`);
      if (qspFunc(s, 'money', 'can_afford', ((s as any).randkazinvsum ?? 0), 'cash') === 0) {
        // TODO-QSP: dynamic text: You and <<$telsob>> don't even have enough cash to pay them. It looks like you h...
        scene.text(`You and ${((s as any).telsob || '')} don't even have enough cash to pay them. It looks like you have no choice other than spreading your legs for them.`);
        scene.actions([
          { label: 'Pay them', handler: (st: GameState) => {
    (s as any).kazsexdva = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  }, goto: ['sexdvanadva', 'var'] },
        ]);
      } else {
        scene.text('You have enough money to pay them, but the guys are obviously hinting that they would rather take another form of payment from you.');
        if (((s as any).telsobnastr ?? 0) < 4) {
          qspCall(s, 'money', 'pay', ((s as any).randkazinvsum ?? 0), 'cash');
          // TODO-QSP: dynamic text: "Here's your money, we are leaving," says <<$telsob>>. She takes you by the hand...
          scene.text(`"Here's your money, we are leaving," says ${((s as any).telsob || '')}. She takes you by the hand, and leads you out of the room.`);
          scene.actions([
            { label: 'Finish', goto: ['kazinosvid', '3'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "I wouldn't mind an alternative payment plan," says <<$telsob>>, smiling lascivi...
          scene.text(`"I wouldn't mind an alternative payment plan," says ${((s as any).telsob || '')}, smiling lasciviously.`);
          qspCall(s, 'willpower', 'misc', 'self', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Use an alternative form of payment', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Use an alternative form of payment', handler: (st: GameState) => {
    (s as any).kazsexdva = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['sexdvanadva', 'var'] },
            ]);
          }
          scene.actions([
            { label: 'Give them the money, and leave with <<$telsob>>.', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', ((s as any).randkazinvsum ?? 0), 'cash');
  }, goto: ['kazinosvid', '3'] },
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
  // TODO-QSP: dynamic text: While you are playing with <<$telsob>>, you attract the attention of a man.
  scene.text(`While you are playing with ${((s as any).telsob || '')}, you attract the attention of a man.`);
  scene.text('"Would you lovely ladies like to join me in my room for a private game?" he asks.');
  // TODO-QSP: dynamic text: <<$telsob>> says she does't mind, and looks at you for an answer.
  scene.text(`${((s as any).telsob || '')} says she does't mind, and looks at you for an answer.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', goto: ['kazinosvid', '3'] },
    { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cards/3.jpg');
    scene.text('After arriving in his room, everyone sits on the bed and begins to play cards.');
    scene.text('A few minutes later the man says: "Let\'s up the stakes. I\'m willing to gamble with my clothing if you ladies are."');
    // TODO-QSP: dynamic text: <<$telsob>> giggled, "You may end up naked and ashamed, <<$pcs_nickname>> and I ...
    scene.text(`${((s as any).telsob || '')} giggled, "You may end up naked and ashamed, ${((s as any).pcs_nickname || '')} and I haven't lost a hand yet."`);
    scene.text('"I have nothing to be ashamed of," the man grins.');
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take <<$telsob>> and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take <<$telsob>> and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['kazinosvid', '3'] },
      ]);
    }
    scene.actions([
      { label: 'Play strip poker', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cards/4.jpg');
    // TODO-QSP: dynamic text: It's not until you and <<$telsob>> are down to your panties that you think this ...
    scene.text(`It's not until you and ${((s as any).telsob || '')} are down to your panties that you think this guy might have been sandbagging. He still has all his clothes!`);
    // TODO-QSP: dynamic text: <<$telsob>> pouts, "I know we agreed, but you have to cheating."
    scene.text(`${((s as any).telsob || '')} pouts, "I know we agreed, but you have to cheating."`);
    scene.text('The man replies: "Be a good girl and get those panties off. For the next round I\'ll even let you change cards, either way I feel like I\'ve already won."');
    // TODO-QSP: dynamic text: "Fine," <<$telsob>> says, with an exaggerated sigh. "<<$pcs_nickname>> help me r...
    scene.text(`"Fine," ${((s as any).telsob || '')} says, with an exaggerated sigh. "${((s as any).pcs_nickname || '')} help me remove my panties."`);
    scene.actions([
      { label: 'Keep playing', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cards/5.jpg');
    scene.text('Minutes later, you are both naked, and he is standing in front of you with his pants down. It must\'ve been the wine that lead you to this predicament.');
    scene.text('"Well ladies, it looks you\'re all out of clothes. There is only one thing you have left to offer as payment," he says, while slowly stroking himself.');
    scene.actions([
      { label: 'Go for it', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).picrand = 23;
    (s as any).kazsexdva = 1;
  }, goto: ['podrsex', 'suck'] },
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
    // TODO-QSP: dynamic text: After your fun, <<$telsob>> says she has to go. She leaves you with a little kis...
    scene.text(`After your fun, ${((s as any).telsob || '')} says she has to go. She leaves you with a little kiss on the cheek.`);
    scene.actions([
      { label: 'Leave', goto: ['city_industrial', ''] },
    ]);
  } else {
    // TODO-QSP: dynamic text: After your fun, <<$telsob>> looks at you and waits for your next move.
    scene.text(`After your fun, ${((s as any).telsob || '')} looks at you and waits for your next move.`);
    scene.actions([
      { label: 'Say goodbye', goto: ['city_industrial', ''] },
      { label: 'Invite her to your home', goto: ['lezbsex', 'startloverhome'] },
    ]);
  }
  // TODO-QSP: end
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
