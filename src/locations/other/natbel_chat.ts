import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Natasha\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
  scene.text('The two of you lay on her bed and talk about a variety of topics.');
  qspCall(s, 'natbel_chat', 'preg_chat');
  if (((s as any).NatbelQW ?? 0)?.['chrispaid'] <= 3) {
    qspCall(s, 'natbel_chat', 'events_chat');
  }
  if (((s as any).christinaQW ?? 0)?.['subpath'] > 1  &&  ((s as any).NatbelQW ?? 0)?.['evt_day'] + 5 < ((s as any).daystart ?? 0)  &&  ((s as any).NatbelQW ?? 0)?.['FriendLover'] === 3) {
    qspCall(s, 'natbel_chat', 'chris_chat_sub');
  }
  if (((s as any).NatbelQW ?? 0)?.['chrispaid'] === 5) {
    qspCall(s, 'natbel_chat', 'chris_chat');
  }
  if (((s as any).NatbelQW ?? 0)?.['chrispaid'] >= 4) {
    qspCall(s, 'natbel_chat', 'friend_chat');
  }
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['disco_invite'] < 1) {
    qspCall(s, 'natbel_chat', 'first_kiss');
  }
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] > 2) {
    qspCall(s, 'natbel_chat', 'lover_chat');
  }
  if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 0  &&  ((((s as any).day ?? 0) >= 22  &&  ((s as any).month ?? 0) === 6)  ||  (((s as any).day ?? 0) < 6  &&  ((s as any).month ?? 0) === 7))) {
    qspCall(s, 'natbel_chat', 'birthday_invitation');
  } else {
    qspCall(s, 'natbel_chat', 'birthday_missed');
  }
  scene.actions([
    { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    { label: 'Make small talk', goto: ['natbel_chat', 'small_talk'] },
    { label: 'Ask about her mother', goto: ['natbel_chat', 'mom_talk'] },
    { label: 'Ask about her father', goto: ['natbel_chat', 'dad_talk'] },
    { label: 'Snacks', goto: ['natbel_chat', 'snacks'] },
  ]);
  scene.build();
}

function enterEventsChat(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Talk about events', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    scene.text('You talk about the price of clothes and cosmetics for a while. Natasha seems to know a lot about the latest fashion, even though she can\'t afford it.');
    if (((s as any).NatbelQW ?? 0)?.['homework'] < 5) {
      scene.actions([
        { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
        { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      qspCall(s, 'natbel_chat', 'loan_events_chat');
      qspCall(s, 'natbel_chat', 'lover_events_chat');
    }
  } },
  ]);
  scene.build();
}

function enterLoanEventsChat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['Debt'] > 0) {
    if (((s as any).NatashaQW ?? 0)?.['demand_repayment'] > 0) {
      scene.actions([
        { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
        { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['MoneyGivenTimes'] >= 4) {
        scene.text('Natasha looks at the floor.');
        qspCall(s, 'natbel_chat', 'demand_debt_repayment');
      } else {
        if (((s as any).daystart ?? 0) < ((s as any).NatbelQW ?? 0)?.['DebtDay']) {
          // TODO-QSP: dynamic text: Natasha promises you to repay the <<NatbelQW['Debt']>><b>₽</b> in <<NatbelQW['De...
          scene.text(`Natasha promises you to repay the ${((s as any).NatbelQW ?? 0)?.['Debt']}<b>₽</b> in ${((s as any).NatbelQW ?? 0)?.['DebtDay']-((s as any).daystart ?? 0)} days.`);
          scene.actions([
            { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
            { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: Natasha looks at the floor, "<<$pcs_nickname>>, I… I'm sorry, I don't have your ...
          scene.text(`Natasha looks at the floor, "${((s as any).pcs_nickname ?? 0)}, I… I'm sorry, I don't have your money."`);
          qspCall(s, 'natbel_chat', 'demand_debt_repayment');
          qspCall(s, 'natbel_chat', 'debt_forgive');
        }
      }
    }
  } else {
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 1  &&  qspFunc(s, 'money', 'can_afford', qspFunc(s, 'money', 'base_price', 5000)) === 1) {
      // TODO-QSP: dynamic text: Natasha looks down in embarrassment. "<<$pcs_nickname>>, you have lots of money....
      scene.text(`Natasha looks down in embarrassment. "${((s as any).pcs_nickname ?? 0)}, you have lots of money. Could you lend me ${qspFunc(s, 'money', 'format', 5000)}? I will pay it back, I give you my word."`);
      scene.actions([
        { label: 'Don\'t give her the money', goto: ['natbel_chat', 'chat'] },
        { label: 'Lend Natasha the <<$func(\'money\', \'format\', 5000)>>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', qspFunc(s, 'money', 'base_price', 5000));
    (s as any).NatbelQW['Debt'] = 5000;
    (s as any).NatashaQW['demand_repayment'] = 0;
    (s as any).NatbelQW['DebtDay'] = ((s as any).daystart ?? 0) + 30;
    (s as any).NatbelQW['MoneyGivenTimes'] = ((s as any).NatbelQW['MoneyGivenTimes'] ?? 0) + (1);
    (s as any).NatbelQW['QWstage'] = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    scene.text('"Hmmm. Ok, but you have to do my homework whenever I ask, and you still have to pay me back."');
    scene.text('You get your purse and give Natasha the money. Natasha is delighted and says that she will pay it back in a month.');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: Suddenly Natasha says: "Hey <<$pcs_nickname>>, you seem to have tons of cash, co...
      scene.text(`Suddenly Natasha says: "Hey ${((s as any).pcs_nickname ?? 0)}, you seem to have tons of cash, could you lend me '+iif(NatbelQW['QWstage'] = 1, $func('money', 'format', 5000), $func('money', 'format', 2000))+', please? I swear I'll pay you back before you even miss it."`);
      scene.text('You shake your head. "Sorry Natasha, I don\'t have that much money with me."');
      // TODO-QSP: dynamic text: Suddenly Natasha says: "Hey <<$pcs_nickname>>, you seem to have tons of cash, co...
      scene.text(`Suddenly Natasha says: "Hey ${((s as any).pcs_nickname ?? 0)}, you seem to have tons of cash, could you lend me some money, please? I swear I'll pay you back before you even miss it."`);
      if (((s as any).NatbelQW ?? 0)?.['DebtForgiven'] === 1) {
        qspCall(s, 'natbel_chat', 'forgive_chat');
      } else {
        qspCall(s, 'natbel_chat', 'forgive_chat2');
        scene.actions([
          { label: 'Don\'t give her the money', goto: ['natbel_chat', 'chat'] },
          { label: 'Give her the money (<<$func(\'money\', \'format\', 2000)>>)', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', qspFunc(s, 'money', 'base_price', 2000));
    (s as any).NatbelQW['Debt'] = 2000;
    (s as any).NatashaQW['demand_repayment'] = 0;
    (s as any).NatbelQW['DebtDay'] = ((s as any).daystart ?? 0) + 14;
    (s as any).NatbelQW['MoneyGivenTimes'] = ((s as any).NatbelQW['MoneyGivenTimes'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    if (((s as any).NatbelQW ?? 0)?.['MoneyGivenTimes'] < 4) {
      qspCall(s, 'stat', '');
      scene.text('"Ok. I am sure I can think of more things for you to do for me." You get your purse and give Natasha the money.');
      // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>>, you're the best. I promise you'll have it back wit...
      scene.text(`"Thank you ${((s as any).pcs_nickname ?? 0)}, you're the best. I promise you'll have it back within two weeks."`);
      scene.actions([
        { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
        { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      scene.text('"Or I could… uhm… I could do those things again for you to… to repay you."');
      scene.text('"Ok. I am sure I can think of more things for you to do for me." You get your purse and give Natasha the money.');
      // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>>, you're the best. I promise you won't regret it."
      scene.text(`"Thank you ${((s as any).pcs_nickname ?? 0)}, you're the best. I promise you won't regret it."`);
      scene.text('You get your purse and give Natasha the money.');
      scene.text('"I see someone wants to be my little bitch again. You\'re going to do whatever I want until you\'ve worked off that debt."');
      scene.text('"You know I will, I\'ve proven that haven\'t I?"');
      scene.actions([
        { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
        { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
        { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
        { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
        { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
      ]);
    }
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  }
  scene.build();
}

function enterForgiveChat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You take a moment to consider Natasha's request as you've already lent her <<$fu...
  scene.text(`You take a moment to consider Natasha's request as you've already lent her ${qspFunc(s, 'money', 'format', 5000)} which she couldn't repay leading to you forgiving the debt as she's a good friend and you didn't want to impose penalty conditions on her.`);
  scene.text('Although you consider her a very good friend you are concerned that she won\'t be able to repay this loan either so you weigh up your options.');
  // TODO-QSP: dynamic text: "Natasha, you know I value you as a friend but I've already forgiven one debt of...
  scene.text(`"Natasha, you know I value you as a friend but I've already forgiven one debt of ${qspFunc(s, 'money', 'format', 5000)}; are you in some sort of trouble as if so I may be able to help you?"`);
  // TODO-QSP: dynamic text: Natasha looks a little downcast momentarily and stumbles over her response. "Wel...
  scene.text(`Natasha looks a little downcast momentarily and stumbles over her response. "Well." She pauses. "Erm.. no ${((s as any).pcs_nickname ?? 0)} I'll be fine, thanks for asking and I promise to repay you in full this time."`);
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 3) {
    scene.actions([{ label: 'Continue', goto: ['natbel_chat', 'debt_forgive2'] }]);
    scene.actions([
      { label: 'Ask her about what she bought <br> [+$func(\'wrap\', \'neg\', \'This option will b...]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Give her the money (<<$func(\'money\', \'format\', 2000)>>)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    qspCall(s, 'money', 'pay', qspFunc(s, 'money', 'base_price', 2000));
    (s as any).NatbelQW['Debt'] = 2000;
    (s as any).NatashaQW['demand_repayment'] = 0;
    (s as any).NatbelQW['DebtDay'] = ((s as any).daystart ?? 0) + 14;
    (s as any).NatbelQW['MoneyGivenTimes'] = ((s as any).NatbelQW['MoneyGivenTimes'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You look at her questioningly but as she gives no indication that she is going to say anything else so you sigh but decide to agree to her request. "Well okay but as before, you have to do my homework whenever I ask, and you still have to pay me back."');
    // TODO-QSP: dynamic text: Natasha smiles and nods her acceptance and says. "Of course <<$pcs_nickname>>, b...
    scene.text(`Natasha smiles and nods her acceptance and says. "Of course ${((s as any).pcs_nickname ?? 0)}, but you know with the homework, whilst I can do it for you if we did it together I can also show you how to do the parts you don't understand."`);
    scene.text('You smile and nod then get your purse and give Natasha the money. Natasha is delighted and says that she will pay it back in two weeks.');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    { label: 'Don\'t give her the money', goto: ['natbel_chat', 'chat'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat':
      enterChat(s, scene);
      break;
    case 'events_chat':
      enterEventsChat(s, scene);
      break;
    case 'loan_events_chat':
      enterLoanEventsChat(s, scene);
      break;
    case 'forgive_chat':
      enterForgiveChat(s, scene);
      break;
    default:
      enterChat(s, scene);
      break;
  }
}

export const natbel_chat: LocationDef = {
  name: 'natbel_chat',
  title: 'Natasha\'s Room',
  region: 'other',
  description: ['The two of you lay on her bed and talk about a variety of topics.'],
  enter: enter,
};
