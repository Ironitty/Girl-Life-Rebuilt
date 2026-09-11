import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
    if (((s as any).NatbelQW ?? 0)?.['bday_invite'] === 1  &&  ((s as any).daystart ?? 0) > ((s as any).NatbelQW ?? 0)?.['bday_day']) {
      qspCall(s, 'natbel_chat', 'birthday_missed');
    }
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
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
      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 0) {
        qspCall(s, 'natbel_chat', 'loan_events_chat');
      } else {
        qspCall(s, 'natbel_chat', 'lover_events_chat');
      }
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
          scene.text(`Natasha promises you to repay the ${((s as any).NatbelQW ?? 0)?.['Debt']}<b>₽</b> in ${((s as any).NatbelQW ?? {})?.['DebtDay']-((s as any).daystart ?? 0)} days.`);
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
    if (((s as any).NatbelQW ?? 0)?.['DebtForgiven'] >= 3  ||  ((s as any).NatbelQW ?? 0)?.['QWstage'] === 0) {
      scene.actions([
        { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
        { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 1  &&  qspFunc(s, 'money', 'can_afford', qspFunc(s, 'money', 'base_price', 5000)) === 1) {
        // TODO-QSP: dynamic text: Natasha looks down in embarrassment. "<<$pcs_nickname>>, you have lots of money....
        scene.text(`Natasha looks down in embarrassment. "${((s as any).pcs_nickname ?? 0)}, you have lots of money. Could you lend me ${qspFunc(s, 'money', 'format', 5000)}? I will pay it back, I give you my word."`);
        scene.actions([
          { label: 'Don\'t give her the money', goto: ['natbel_chat', 'chat'] },
          { label: 'Lend Natasha the <<$func(\'money\', \'format\', 5000)>>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', qspFunc(s, 'money', 'base_price', 5000));
    ((s as any).NatbelQW ?? {})['Debt'] = 5000;
    ((s as any).NatashaQW ?? {})['demand_repayment'] = 0;
    ((s as any).NatbelQW ?? {})['DebtDay'] = ((s as any).daystart ?? 0) + 30;
    ((s as any).NatbelQW ?? {})['MoneyGivenTimes'] = (((s as any).NatbelQW ?? {})['MoneyGivenTimes'] ?? 0) + (1);
    ((s as any).NatbelQW ?? {})['QWstage'] = 2;
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
        if (qspFunc(s, 'money', 'can_afford', qspFunc(s, 'money', 'base_price', 2000)) === 0  ||  ((s as any).NatbelQW ?? 0)?.['QWstage'] === 1) {
          // TODO-QSP: dynamic text: Suddenly Natasha says: "Hey <<$pcs_nickname>>, you seem to have tons of cash, co...
          scene.text(`Suddenly Natasha says: "Hey ${((s as any).pcs_nickname ?? 0)}, you seem to have tons of cash, could you lend me '+iif(NatbelQW['QWstage'] = 1, $func('money', 'format', 5000), $func('money', 'format', 2000))+', please? I swear I'll pay you back before you even miss it."`);
          scene.text('You shake your head. "Sorry Natasha, I don\'t have that much money with me."');
          scene.actions([
            { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
            { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: Suddenly Natasha says: "Hey <<$pcs_nickname>>, you seem to have tons of cash, co...
          scene.text(`Suddenly Natasha says: "Hey ${((s as any).pcs_nickname ?? 0)}, you seem to have tons of cash, could you lend me some money, please? I swear I'll pay you back before you even miss it."`);
          if (((s as any).NatbelQW ?? 0)?.['DebtForgiven'] === 1) {
            qspCall(s, 'natbel_chat', 'forgive_chat');
          } else {
            if (((s as any).NatbelQW ?? 0)?.['DebtForgiven'] === 2  &&  ((s as any).NatbelQW ?? 0)?.['QWstage'] < 3) {
              qspCall(s, 'natbel_chat', 'forgive_chat2');
            } else {
              scene.actions([
                { label: 'Don\'t give her the money', goto: ['natbel_chat', 'chat'] },
                { label: 'Give her the money (<<$func(\'money\', \'format\', 2000)>>)', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', qspFunc(s, 'money', 'base_price', 2000));
    ((s as any).NatbelQW ?? {})['Debt'] = 2000;
    ((s as any).NatashaQW ?? {})['demand_repayment'] = 0;
    ((s as any).NatbelQW ?? {})['DebtDay'] = ((s as any).daystart ?? 0) + 14;
    ((s as any).NatbelQW ?? {})['MoneyGivenTimes'] = (((s as any).NatbelQW ?? {})['MoneyGivenTimes'] ?? 0) + (1);
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
      if (((s as any).NatbelQW ?? 0)?.['MoneyGivenTimes'] < 7) {
        scene.text('"Or I could… uhm… I could do those things again for you to… to repay you."');
        scene.text('"Ok. I am sure I can think of more things for you to do for me." You get your purse and give Natasha the money.');
        // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>>, you're the best. I promise you won't regret it."
        scene.text(`"Thank you ${((s as any).pcs_nickname ?? 0)}, you're the best. I promise you won't regret it."`);
        scene.actions([
          { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
          { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
        ]);
      } else {
        scene.text('You get your purse and give Natasha the money.');
        scene.text('"I see someone wants to be my little bitch again. You\'re going to do whatever I want until you\'ve worked off that debt."');
        scene.text('"You know I will, I\'ve proven that haven\'t I?"');
        scene.actions([
          { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
          { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
        ]);
      }
    }
  } },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDemandDebtRepayment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 2) {
    scene.actions([
      { label: 'Demand repayment  [+$func(\'wrap\', \'neg\', \'(This option will ...]', handler: (st: GameState) => {
    ((s as any).NatashaQW ?? {})['demand_repayment'] = 1;
    ((s as any).NatbelQW ?? {})['QWstage'] = 3;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    // TODO-QSP: dynamic text: You decide not to reduce Natasha's debt. You angrily confront her, demanding tha...
    scene.text(`You decide not to reduce Natasha's debt. You angrily confront her, demanding that she return the money to you, one way or another. Natasha curls up into a ball on her bed: "${((s as any).pcs_nickname ?? 0)}, I'm so sorry! I will do anything you say! Anything!"`);
    scene.text('Natasha looks at you with fearful eyes, and you\'re getting some ideas as to how you could "use" her. She did say "anything," after all…');
    scene.text('You snarl at her with an evil hiss: "You\'ll be my little pet until you\'ve worked off every last Kopeck. And don\'t you dare tell anyone about this!"');
    scene.text('You give her a soft slap on the cheek to test your newfound power over her rather than to hurt her, but she flinches and nods profusely. Looks like you\'ve got your own little slave now.');
    qspCall(s, 'natbel_cp_1', 'make_her_do_homework');
    if (((s as any).daystart ?? 0) >= ((s as any).NatashaQW ?? 0)?.['homework_day']) {
      scene.actions([
        { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
        { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Demand repayment', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatashaQW ?? {})['demand_repayment'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    if (((s as any).NatbelQW ?? 0)?.['MoneyGivenTimes'] >= 4) {
      scene.text('"Well, you did agree to be my toy again if you couldn\'t pay me back. I guess we\'re going to have some more fun very soon Natasha."');
    } else {
      // TODO-QSP: dynamic text: You decide not to reduce Natasha's debt. You angrily confront her, demanding tha...
      scene.text(`You decide not to reduce Natasha's debt. You angrily confront her, demanding that she return the money to you, one way or another. Natasha curls up into a ball on her bed: "${((s as any).pcs_nickname ?? 0)}, I'm so sorry! I will do anything you say! Anything!"`);
      scene.text('Natasha looks at you with fearful eyes, and you are getting some more ideas as to how you could "use" her this time. She did say "anything," after all…');
      scene.text('You snarl at her with an evil hiss: "You\'ll be my little pet again until you\'ve worked off every last Kopeck. And don\'t you dare tell anyone about this!"');
      scene.text('You give her a soft slap on the cheek to test your newfound power over her rather than to hurt her, but she flinches and nods profusely. Looks like you\'ve got your own little slave now.');
    }
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
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
    scene.actions([
      { label: 'Ask her about what she bought <br> [+$func(\'wrap\', \'neg\', \'This option will b...]', goto: ['natbel_chat', 'debt_forgive2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Give her the money (<<$func(\'money\', \'format\', 2000)>>)', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    qspCall(s, 'money', 'pay', qspFunc(s, 'money', 'base_price', 2000));
    ((s as any).NatbelQW ?? {})['Debt'] = 2000;
    ((s as any).NatashaQW ?? {})['demand_repayment'] = 0;
    ((s as any).NatbelQW ?? {})['DebtDay'] = ((s as any).daystart ?? 0) + 14;
    ((s as any).NatbelQW ?? {})['MoneyGivenTimes'] = (((s as any).NatbelQW ?? {})['MoneyGivenTimes'] ?? 0) + (1);
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

function enterForgiveChat2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You take a moment to consider Natasha's request as you've already lent her <<$fu...
  scene.text(`You take a moment to consider Natasha's request as you've already lent her ${qspFunc(s, 'money', 'format', 7000)} in total over two loans both of which she couldn't repay leading to you having to forgive the debts as you didn't want to treat her harshly. Although you consider her a very good friend you have serious concerns that she won't be able to repay any further loan either so you very carefully consider your options.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Consider your options', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    // TODO-QSP: dynamic text: "Look Natasha although you are a very good friend and I've already had to forgiv...
    scene.text(`"Look Natasha although you are a very good friend and I've already had to forgive you a total of ${qspFunc(s, 'money', 'format', 7000)}! Why should I lend you more now? I ask you again are you in some sort of trouble? If so perhaps I can help you? I really can't keep lending you money which you can't repay."`);
    scene.text('Natasha looks downcast and replies with a croaky voice. "Well. Erm.. I got myself into debt with some others and well… I had to repay them as they were threatening me with some nasty stuff." She perks up a bit. "However, I think it should be fine now as I think I\'ve sorted most of them. Thanks for your concern but I really don\'t want to burden you further and I definitely promise to repay you in full this time."');
    scene.text('You look at her questioningly. "Really Natasha? As I said if you are in any trouble please tell me."');
    // TODO-QSP: dynamic text: She pauses then shakes her head slowly. "No <<$pcs_nickname>> I should be okay."
    scene.text(`She pauses then shakes her head slowly. "No ${((s as any).pcs_nickname ?? 0)} I should be okay."`);
    scene.text('She doesn\'t give any indication that she is going to say anything else and although you\'re not really sure you believe she\'s told you the whole truth you sigh but decide to agree to her request. "Well okay but as before, you have to do my homework whenever I ask and I do remember what you said about the benefit about explaining stuff to me if we do it together. Also you still have to pay me back. Also this I can\'t keep forgiving your debts so I\'ll only lend it to you if you are sure."');
    scene.text('Natasha smiles and nods her acceptance.');
    scene.actions([
      { label: 'Lend her the <<$func(\'money\', \'format\', 2000)>> <br> [+$func(\'wrap\', \'neg\', \'This option will b...]', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    qspCall(s, 'money', 'pay', qspFunc(s, 'money', 'base_price', 2000));
    ((s as any).NatbelQW ?? {})['Debt'] = 2000;
    ((s as any).NatashaQW ?? {})['demand_repayment'] = 0;
    ((s as any).NatbelQW ?? {})['DebtDay'] = ((s as any).daystart ?? 0) + 14;
    ((s as any).NatbelQW ?? {})['MoneyGivenTimes'] = (((s as any).NatbelQW ?? {})['MoneyGivenTimes'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You get your purse and give Natasha the money. Natasha is delighted and says that she will pay it back in a month.');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      { label: 'Don\'t give her the money', goto: ['natbel_chat', 'chat'] },
      { label: 'Ask her about what she bought <br> [+$func(\'wrap\', \'neg\', \'This option will b...]', goto: ['natbel_chat', 'debt_forgive2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDebtForgive(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['Debt'] > 0  &&  ((s as any).daystart ?? 0) >= ((s as any).NatbelQW ?? 0)?.['DebtDay']) {
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 2) {
      scene.actions([
        { label: 'Forgive Natasha\'s debt', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['Debt'] = 0;
    ((s as any).NatbelQW ?? {})['DebtDay'] = 0;
    ((s as any).NatashaQW ?? {})['demand_repayment'] = 0;
    ((s as any).NatbelQW ?? {})['DebtForgiven'] = (((s as any).NatbelQW ?? {})['DebtForgiven'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'adore');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha1.jpg');
    scene.text('You look at her and it is clear that she is close to tears, probably having feared the worst. Feeling for her, you try to comfort her, "Come on, Natasha. Did you really think I expected you to be able to repay me? I… hear about the gossip at school. You\'ve been a good friend to me and helped me with my homework when I was struggling, so let me help you too."');
    scene.text('Overcome with relief, Natasha starts sobbing. "I\'m just so grateful. I really didn\'t expect you to do that. I really want to repay you, however I can."');
    scene.text('You lift up her chin, kiss her on the cheek and give her a big hug. "Let\'s see where our journey takes us," you say to her as her tears subside.');
    if (((s as any).NatbelQW ?? 0)?.['DebtForgiven'] === 1) {
      scene.actions([
        { label: 'Ask her about what she bought <br> [+$func(\'wrap\', \'neg\', \'This option will b...]', goto: ['natbel_chat', 'debt_forgive2'] },
      ]);
    }
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Forgive Natasha\'s debt', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).NatbelQW ?? {})['Debt'] = 0;
    ((s as any).NatbelQW ?? {})['DebtDay'] = 0;
    ((s as any).NatashaQW ?? {})['demand_repayment'] = 0;
    ((s as any).NatbelQW ?? {})['DebtForgiven'] = (((s as any).NatbelQW ?? {})['DebtForgiven'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha1.jpg');
    scene.text('You decide to forgive Natasha\'s debt. She is delighted and thanks you with all her heart.');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDebtForgive2(s: GameState, scene: SceneBuilder): void {
  ((s as any).NatbelQW ?? {})['FriendLover'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).NatbelQW ?? 0)?.['MoneyGivenTimes'] === 1) {
  } else {
    if (((s as any).NatbelQW ?? 0)?.['MoneyGivenTimes'] === 2) {
    } else {
      if (((s as any).NatbelQW ?? 0)?.['MoneyGivenTimes'] === 3) {
      }
    }
  }
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha1.jpg');
  scene.text('"So Natasha, do you want to show me what you bought with the money I lent you? I\'ve been looking forward to seeing it."');
  // TODO-QSP: dynamic text: Natasha looks worried again and with a very croaky voice replies, "I'm sorry <<$...
  scene.text(`Natasha looks worried again and with a very croaky voice replies, "I'm sorry ${((s as any).pcs_nickname ?? 0)}, I didn't manage to get anything!"`);
  // TODO-QSP: dynamic text: You are a bit confused. "Sorry, Natasha. I gave you <<$temp_given>> rubles! I th...
  scene.text(`You are a bit confused. "Sorry, Natasha. I gave you ${((s as any).temp_given ?? 0)} rubles! I thought you could treat yourself to a new outfit or two?"`);
  scene.text('The girl can\'t hold back her tears and starts sobbing again. A little exasperated, you give her another hug. "Look, Natasha. Please stop crying. I\'m not mad at you, I just want to know what happened. You\'re my friend and I want to help if I can."');
  scene.text('Natasha responds, "You\'ve already helped me more than I could imagine. I couldn\'t hope for more."');
  scene.text('"Look, enough with the tears and the apologies. Please, just tell me."');
  scene.text('Natasha looks at you and is clearly worried. She takes a deep breath, "I had a few debts I had to repay as I was getting chased and then I had to help my mum so there\'s nothing left…"');
  scene.text('You nod your head, "Right, okay. So did you get all your debts repaid?"');
  // TODO-QSP: dynamic text: She shakes her head. "No. I still owe Christina <<$func('money', 'format', 500)>...
  scene.text(`She shakes her head. "No. I still owe Christina ${qspFunc(s, 'money', 'format', 500)}."`);
  scene.text('"And that\'s the last debt you owe?" you ask her.');
  scene.text('"Yeah, that\'s the last one."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her deal with the last debt', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['chrispaid'] = 1;
    ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha2.jpg');
    scene.text('"Okay, well, that\'s not too bad. I think you can handle that one by yourself," you say.');
    scene.text('She nods her head slowly.');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    { label: 'Offer to repay Christina', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['chrispaid'] = 2;
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha3.jpg');
    scene.text('You look at Natasha, who is now slumped on the floor with her head in her hands. You contemplate what she said and how much she\'s clearly terrified of Christina. "Um… Okay."');
    scene.text('A confused Natasha looks at you, "Uh? Sorry, what do you mean?"');
    scene.text('"I mean, leave it to me. I\'ll pay back your debt to Christina. Just try and keep out of her way until then."');
    scene.text('Natasha simply nods, clearly not trusting herself to speak.');
    scene.text('"Okay, Natasha, I\'m going to leave now. See you soon and don\'t worry, just steer clear of Christina for a while!"');
    scene.actions([
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChrisChatSub(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'As her sub you cannot stop Christina bullying Natasha', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['chrispaid'] = 7;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha5.jpg');
    scene.text('"I\'m afraid I can\'t stop Christina from bullying you, so all I can suggest is that you do your best to keep away from her."');
    scene.text('When you mention her name, Natasha immediately looks fearful and she sits on the floor covering her face with her hands. She nods her head. "Okay, I\'m doing everything I can to keep my distance from that bully!"');
    scene.text('You nod, "Yeah, that\'s a good plan. I\'m going to do the same."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha5.jpg');
    // TODO-QSP: dynamic text: Natasha turns to you with a weak smile and gives you a sweet kiss. "Well, I gues...
    scene.text(`Natasha turns to you with a weak smile and gives you a sweet kiss. "Well, I guess we're both in the same boat here, ${((s as any).pcs_nickname ?? 0)}. Let's just support each other as best we can."`);
    scene.text('You share a comforting hug.');
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterChrisChat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Christina has been dealt with', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['chrispaid'] = 6;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha3.jpg');
    scene.text('"Well, I have some good news for you," you say, beaming with pride.');
    scene.text('Natasha smiles at you in acknowledgment and waits for you to continue.');
    scene.text('"You remember that I said Christina needed to be dealt with?"');
    scene.text('When you mention the girl\'s name, Natasha immediately looks fearful and she sits on the floor covering her face with her hands. She simply nods her head to confirm that she remembers the conversation.');
    scene.text('"Natasha, come on, there\'s no need to get all upset, I said it was good news! Or did she do something else to you?"');
    scene.text('"No, nothing happened! She just scares me," she says with a sigh.');
    scene.text('You try to reassure her, "Right, well, I\'ve sorted your problems with her and she shouldn\'t bully you any more."');
    scene.text('Natasha shakes her head in disbelief, "How on Earth… Why would she stop? I don\'t understand!"');
    if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
      scene.actions([
        { label: 'Talk about the fight', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha5.jpg');
    scene.text('"You may have heard that we had a little, shall we say, \'altercation\' which I resolved to my satisfaction," you reply with a knowing smirk.');
    scene.text('"Oh?" She looks up at you, realizing what you meant and breaks into another smile. "Oh! Right, the fight! Yeah, I was there! I wanted to stop you because I didn\'t want to see you getting hurt, but I couldn\'t reach you in time."');
    scene.text('You reply with a chuckle. "Well, you wouldn\'t have stopped me! Anyway, I started the fight. I was walking by her and she ran her mouth, like always. Normally I might have tried to say something back, only this time I decided to hit her as hard as I could and it went from there. I think she was shocked that I stood up to her. She was certainly surprised that I had the strength and skill to beat her. But I was so sick of taking her shit!"');
    scene.text('After, when I spoke to her about leaving you alone, I brought up that I wouldn\'t have a problem beating her up again and I pointed out that it\'d be worse for her if I had to do it a second time. She agreed with me, so everything\'s good now."');
    // TODO-QSP: dynamic text: Natasha turns to you and gives you a sweet kiss. "Thank you, <<$pcs_nickname>>."
    scene.text(`Natasha turns to you and gives you a sweet kiss. "Thank you, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('Your smile widens. "I\'m glad I could help. I couldn\'t let her bully my girlfriend.');
    // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, I like hearing you call me that."
    scene.text(`"You know, ${((s as any).pcs_nickname ?? 0)}, I like hearing you call me that."`);
    scene.text('You giggle. "Okay, <i>girlfriend</i>."');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha5.jpg');
    scene.text('You give her a mischievous grin, "Well, I can\'t tell you any of the details, but let\'s just say she won\'t be causing us any issues going forward."');
    // TODO-QSP: dynamic text: Natasha turns to you and gives you a sweet kiss. "Okay, I guess I don't need to ...
    scene.text(`Natasha turns to you and gives you a sweet kiss. "Okay, I guess I don't need to know everything but thank you, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('Your smile widens. "I\'m glad I could help. I won\'t let her bully my girlfriend.');
    // TODO-QSP: dynamic text: "You know, <<$pcs_nickname>>, I like hearing you call me that."
    scene.text(`"You know, ${((s as any).pcs_nickname ?? 0)}, I like hearing you call me that."`);
    scene.text('You giggle. "Okay, <i>girlfriend</i>."');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterLoverEventsChat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['chrispaid'] === 1  &&  (((s as any).NatbelQW ?? 0)?.['evt_day'] + 1) <= ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Natasha repaid Christina\'s debt', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha1.jpg');
    scene.text('"Have you repaid Christina yet?" you ask Natasha.');
    scene.text('At the mere mention of Christina\'s name, Natasha\'s eyes go wide and she covers her face with her hands. Remaining silent not trusting her voice, she simply nods her head to confirm that she did.');
    scene.text('You look at her with concern, "Did something else happen with her?"');
    scene.text('"No, nothing happened," she says with a sigh. "She\'s just such a bully, she frightens me!"');
    scene.text('You give her a reassuring smile, "I\'m sorry. If I\'d realized that she worried you so much, I\'d have offered to deal with her for you."');
    scene.text('Natasha shakes her head, "No, I wouldn\'t have asked you to do that! I know she picks on you just as much as she does me if not more, and besides it was my debt to pay back. But it was still so nerve-wracking!"');
    scene.text('"Well, it\'s done now," you answer. "So let\'s put it behind us. Just don\'t borrow money from her - or anyone - anymore, okay?"');
    // TODO-QSP: dynamic text: Natasha looks at you with a weak smile, "Don't worry, <<$pcs_nickname>>. I've le...
    scene.text(`Natasha looks at you with a weak smile, "Don't worry, ${((s as any).pcs_nickname ?? 0)}. I've learned my lesson! And thank you for helping me clear all my debts; it was such a worry."`);
    scene.text('Your smile widens, "I\'m glad I could help." After a brief pause you continue "I need to think about how to deal with Christina…"');
    scene.text('A worried looking Natasha pleads with you. "Don\'t do anything and get hurt because of me."');
    scene.text('Giving her a reassuring smile you reply. "Don\'t worry about me with Christina, she\'s my problem to deal with. Okay?"');
    scene.text('Natasha nods in confirmation.');
    ((s as any).NatbelQW ?? {})['chrispaid'] = 4;
    scene.actions([
      { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).NatbelQW ?? 0)?.['chrispaid'] === 3  &&  (((s as any).NatbelQW ?? 0)?.['evt_day'] + 1) <= ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'You paid the debt to Christina', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    ((s as any).NatbelQW ?? {})['chrispaid'] = 4;
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'adore');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha4.jpg');
    scene.text('You look at Natasha and decide to put her out of her misery regarding Christina, "Okay, I\'ve repaid Christina, so you\'re all good there. Now that <i>really</i> is your last debt, isn\'t it? I don\'t want any more nasty surprises."');
    scene.text('"Yes."');
    scene.text('You look at her quizzically, unsure that you really believe her.');
    // TODO-QSP: dynamic text: Natasha sees your expression, "Yes, yes, <<$pcs_nickname>>, I swear! I just ran ...
    scene.text(`Natasha sees your expression, "Yes, yes, ${((s as any).pcs_nickname ?? 0)}, I swear! I just ran out of money; I was so worried as I had loads of little debts and couldn't keep track anymore and I was getting pressured for repayment. I repaid all but Christina's. I was going to do it but Mum needed some help and once I'd done that, I ran out of cash." She continues, "Did… umm, did she say anything?"`);
    scene.actions([
      { label: 'Tell her what Christina said', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha1.jpg');
    scene.text('At this point, even though she\'s relieved that her final debt has been cleared, she still seems to be panicking about Christina. She slumps forward with her head in her hands.');
    scene.text('While comforting her, you reply, "Sorry, you mean Christina? No, why would she?"');
    scene.text('"It\'s just, umm, I\'m so scared of her. She…" Natasha tries to compose herself but fails and starts crying again. "She scares me," she sobs and reaches out for you, hugging you tight. You hug her back, holding her gently until the tears subside.');
    scene.text('"Hey, come on, Natasha. It\'s done now, I\'ve paid her."');
    scene.text('Natasha looks at you a bit confused, she\'s obviously not used to classmates being affectionate towards her. You smile and say, "Well, from here on in, let\'s try to change that. Okay?"');
    // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>," she sniffles. "Thanks!"
    scene.text(`"Okay, ${((s as any).pcs_nickname ?? 0)}," she sniffles. "Thanks!"`);
    scene.text('"Good! And one last thing, enough with the tears, okay. I\'ve told you, you are a good friend and I like looking out for you," you tell her, smiling reassuringly.');
    // TODO-QSP: dynamic text: "Yes, okay, <<$pcs_nickname>>. I'm just not used to this."
    scene.text(`"Yes, okay, ${((s as any).pcs_nickname ?? 0)}. I'm just not used to this."`);
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterFirstKiss(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['FriendLover'] = 2;
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'like');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha5.jpg');
    scene.text('Seeing her so vulnerable and knowing that she needs some love and affection, you kiss Natasha on impulse.');
    scene.text('You feel her ease into you, hesitantly at first. But soon it develops into a full on kiss with her tongue dancing around yours exploring your mouth as you do hers. Both overcome with the emotion of the situation, your hands also start exploring each other\'s bodies.');
    scene.text('Not wanting to overwhelm the poor girl with even more emotions, you soon pull yourself back and each take a few moments to recover your poise.');
    qspCall(s, 'arousal', 'kiss', 1, 'A16', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLoverChat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 3) {
    if (((s as any).NatbelQW ?? 0)?.['chrispaid'] > 4) {
      qspCall(s, 'natbel_chat', 'arrange_shop_trip1');
    }
  } else {
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 4) {
      if (((s as any).daystart ?? 0) >= ((s as any).NatbelQW ?? 0)?.['evt_day'] + 14  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) < 7) {
        scene.actions([
          { label: 'Start shopping trip [+$func(\'money\', \'get_cost_string\', 2550)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2550) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'shopping_trip'] }]);
    }
  } },
        ]);
      }
    } else {
      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 5) {
        qspCall(s, 'natbel_chat', 'arrange_shop_trip2');
      } else {
        if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 6) {
          if (((s as any).daystart ?? 0) >= ((s as any).NatbelQW ?? 0)?.['evt_day'] + 14  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) < 7) {
            scene.actions([
              { label: 'Start shopping trip [+$func(\'money\', \'get_cost_string\', 4350)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 4350) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'shopping_trip2'] }]);
    }
  } },
            ]);
          }
        } else {
          if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 7  &&  ((s as any).NatbelQW ?? 0)?.['FriendLover'] <= 8) {
            if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 3  &&  ((s as any).NatbelQW ?? 0)?.['shopping'] === 2) {
              qspCall(s, 'natbel_chat', 'job_questions');
            } else {
              if (((s as any).NatbelQW ?? 0)?.['shopping'] === 3  &&  ((s as any).daystart ?? 0) >= ((s as any).NatbelQW ?? 0)?.['StP_trip_daystart']  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14  &&  (((s as any).runnerQW ?? 0)?.['comp_day'] === ((s as any).daystart ?? 0)  ||  ((s as any).runnerQW ?? 0)?.['prof_stage'] !== 14  ||  ((s as any).runnerQW ?? 0)?.['qualifiers'] < 9)) {
                scene.actions([
                  { label: 'Get ready for your weekend date in St. Petersburg [+$func(\'money\', \'get_cost_string\', 2100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'city_date1'] }]);
    }
  } },
                ]);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).NatbelQW ?? 0)?.['Isabella'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'isabella_enters'] }]);
  }
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8  &&  qspFunc(s, 'pcs_has_attr', 'body_sweat_none') === 0) {
    scene.actions([{ label: 'Continue', goto: ['natbelEv', 'stinky_shower'] }]);
  }
  if (((s as any).NatbelQW ?? 0)?.['end_of_gschool_chat'] === 0  &&  ((s as any).year ?? 0) === 2017  &&  (((s as any).month ?? 0) === 4  &&  ((s as any).day ?? 0) >= 26  ||  ((s as any).month ?? 0) === 5  &&  ((s as any).day ?? 0) < 26)) {
    qspCall(s, 'natbel_friend', 'end_of_gschool');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss your girlfriend', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A16');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha24a.mp4');
    scene.text('You notice that Natasha is giving you a longing look. Your eyes wander down to her delicious looking lips and you start lusting after your girlfriend. You make your way towards her bed and she quickly joins you.');
    scene.text('She slowly leans in towards you. Taking hold of her face, you press your lips against hers and begin a long, sensual kiss.');
    scene.text('After what seems like ages, but was probably only a few seconds, you breathlessly pull apart.');
    scene.text('Smiling, you greet her. "Hello, hot stuff!"');
    scene.text('"Well, hello to my sizzling girlfriend, too!" she replies, grinning at you and licking her lips. "Fuck! That was hot!"');
    scene.text('You both just sit there for a moment with a silly grin plastered on both your faces while you look at each other.');
    qspCall(s, 'arousal', 'kiss', 4, 'A16', 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8) {
      scene.actions([
        { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha25.mp4');
    scene.text('You slowly wriggle out of your top, allowing it to slip down your body.');
    scene.text('You are both overcome by a loving feeling towards each other and lust quickly takes over.');
    scene.text('She slowly makes her way down your body and tenderly starts kissing and sucking on your breasts.');
    qspCall(s, 'arousal', 'foreplay', 5, 'A16', 'lesbian');
    scene.actions([
      { label: 'Breast play', goto: ['natbel_kissinggames', 'natbelapt_sex'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterArrangeShopTrip1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Arrange a shopping trip for a new school uniform', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['FriendLover'] = 4;
    ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha6.jpg');
    scene.text('You pick up some of the fashion magazines from Natasha\'s desk and motion for her to sit with you.');
    scene.text('You smile at her, "Okay, Natasha, I think we need to get you a new school uniform. What do you say?"');
    // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>, that would be lovely. But…"
    scene.text(`"Oh, ${((s as any).pcs_nickname ?? 0)}, that would be lovely. But…"`);
    scene.actions([
      { label: 'Smack her "butt"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha21.jpg');
    scene.text('You giggle when she mentions the word \'but\'. "Natasha, please stand up."');
    scene.text('She looks at you a little confused but complies.');
    scene.text('"What were the rules for fun stuff?" you ask.');
    scene.text('A smile crosses her face and she leans slightly forward.');
    scene.text('You give her a gentle slap on the butt.');
    scene.text('She wiggles her butt slightly. "Tash is shaking her tush! Tash is shaking her tush!" she says, giggling.');
    scene.text('"Oh, so you like this, eh?" You smack her twice more, a bit less gentle but not so hard as to hurt.');
    scene.text('Natasha initially lets out a small squeal.');
    scene.text('"Alright, that\'s enough for now or you might start to like it. Maybe I need to devise a different punishment?" After a small pause you continue, "Okay, get your sexy butt back here. Where on earth did you get that phrase from?"');
    scene.text('"I can\'t really remember. I think it was some American film I saw a while back."');
    scene.text('You give a small giggle. "Well, it\'s very appropriate. But just stop with the objections, please, or I might change my mind about this trip."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha7.jpg');
    scene.text('Natasha sits beside you and you return to looking through the magazine. "Give me some time to get the money together and we\'ll head over to GM and get you a new uniform."');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, that would be lovely and I'll earn some money too so we can ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, that would be lovely and I'll earn some money too so we can go and get something to eat after."`);
    scene.text('"That would be great, Natasha. Thank you."');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterArrangeShopTrip2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Arrange a shopping trip for an outfit', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['FriendLover'] = 6;
    ((s as any).NatbelQW ?? {})['evt_day'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha6.jpg');
    scene.text('You pick up some of the fashion magazines from Natasha\'s desk and motion for her to sit with you.');
    scene.text('She joins you and you start browsing.');
    // TODO-QSP: dynamic text: You smile at her, "Like I said earlier, I want to get you a general outfit for g...
    scene.text(`You smile at her, "Like I said earlier, I want to get you a general outfit for going out and about. I was thinking we could head off to Coco and Flamingos to see what they've got. Oh and before you reply, the only answer I'll accept is 'Yes, ${((s as any).pcs_nickname ?? 0)}'!`);
    // TODO-QSP: dynamic text: "Oh, yes, <<$pcs_nickname>>! That would be lovely! Thank you. I'll look forward ...
    scene.text(`"Oh, yes, ${((s as any).pcs_nickname ?? 0)}! That would be lovely! Thank you. I'll look forward to it."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha24.jpg');
    scene.text('You giggle. "Good girl, I knew all those brains would get the hang of this in the end and you see you can agree without adding a \'but\'!"');
    scene.text('The girl joins in the giggling when you say that, remembering the last time and stands up and lifts her skirt.');
    // TODO-QSP: dynamic text: She looks at you still smiling and says. "So no smacks then, <<$pcs_nickname>>?"
    scene.text(`She looks at you still smiling and says. "So no smacks then, ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('"Tempting! Yeah, that\'s one cute, sexy butt, girlfriend. Anyway get your butt back here before we get distracted," you say.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha7.jpg');
    scene.text('Natasha sits back down beside you and you keep looking at the magazine. "Okay, well, give me a couple of weeks to get the money together and we\'ll go out to shop for your outfit."');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you know that you don't have to keep spoiling me! I'm just h...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, you know that you don't have to keep spoiling me! I'm just happy you want to be my friend and now my girlfriend," she says with a broad grin."`);
    scene.text('"Yes, I know, Natasha. I\'m just happy to help."');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterJobQuestions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Natasha asks a question', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha7.jpg');
    scene.text('You sit together and both flick through some of Natasha\'s fashion magazines as you chat about school and life in general when Natasha turns to you.');
    // TODO-QSP: dynamic text: "Erm… <<$pcs_nickname>>…"
    scene.text(`"Erm… ${((s as any).pcs_nickname ?? 0)}…"`);
    scene.text('"Yes Natasha what is it? Spit it out…"');
    scene.text('"Well, okay… Umm. Can you tell me what job or jobs you do please?"');
    scene.text('"Umm…"');
    // TODO-QSP: dynamic text: Natasha looks a little embarrassed. "Look <<$pcs_nickname>> if you don't want to...
    scene.text(`Natasha looks a little embarrassed. "Look ${((s as any).pcs_nickname ?? 0)} if you don't want to I guess that's fine at least for now. I'm just interested and if you need any help with anything you know I'll be here for you."`);
    scene.actions([
      { label: 'Don\'t tell her', handler: (st: GameState) => {
    scene.text('"Umm… Well maybe at some point but not now Natasha unless it really bothers you?"');
    // TODO-QSP: dynamic text: "No, <<$pcs_nickname>> I guess that's fine. I'm just curious as I want to know m...
    scene.text(`"No, ${((s as any).pcs_nickname ?? 0)} I guess that's fine. I'm just curious as I want to know more about you." She pauses. "I guess it really doesn't matter."`);
    scene.text('"Okay can leave it there for now?" You reply.');
    scene.text('Natasha fidgets and doesn\'t reply immediately.');
    scene.text('With a sigh you continue. "Okay fine Natasha I\'ll tell you but don\'t judge okay?"');
    scene.actions([
      { label: 'Tell her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha7.jpg');
    // TODO-QSP: dynamic text: "Of course I won't <<$pcs_nickname>>. I'm just asking because I care about you."
    scene.text(`"Of course I won't ${((s as any).pcs_nickname ?? 0)}. I'm just asking because I care about you."`);
    if (((s as any).job_status ?? 0)?.['pav_hotel_maid'] === 'employed') {
      // TODO-QSP: $temp_pav_work[] = 'a maid in the pavlovsk hotel'
    }
    if (((s as any).post_wrk ?? 0) > 0) {
      // TODO-QSP: $temp_pav_work[] = 'a post delivery girl in the post office'
    }
    (s as any).temp_runner = 0;
    if (((s as any).runnerQW ?? 0)?.['joined_team'] > 0  &&  (((s as any).runnerQW ?? 0)?.['bronze_medals'] + ((s as any).runnerQW ?? 0)?.['silver_medals'] + ((s as any).runnerQW ?? 0)?.['gold_medals']) > 0) {
      (s as any).temp_runner = 1;
      // TODO-QSP: $temp_city_work[] = 'an athlete in the Havana Fitness Center'
    }
    if (((s as any).photography_start ?? 0) > 0) {
      // TODO-QSP: $temp_city_work[] = 'a photographer for the Camera & Photography Store'
    }
    if (((s as any).job_status ?? 0)?.['city_salon_masseuse'] === 'employed') {
      // TODO-QSP: $temp_city_work[] = 'a masseuse in the Beauty Bar'
    }
    if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
      // TODO-QSP: $temp_city_work[] = 'a model for Aphrodite Photography'
    }
    if (((s as any).firstkasting ?? 0) > 0  &&  ((s as any).pfilmNo ?? 0) === 0  &&  (!((s as any).pfilmSTOP ?? 0))) {
      // TODO-QSP: $temp_city_work[] = 'a porn star'
    }
    if (Object.keys((s as any).temp_pav_work ?? {}).length > 0) {
      if (Object.keys((s as any).temp_pav_work ?? {}).length === 1) {
        // TODO-QSP: $temp_text += $temp_pav_work[0] + '."'
      } else {
        if (Object.keys((s as any).temp_pav_work ?? {}).length === 2) {
          // TODO-QSP: $temp_text += $temp_pav_work[0] + ' and ' + $temp_pav_work[1] + '."'
        } else {
          (s as any).temp_i = 0;
          // TODO-QSP: :pav_work_loop
          // TODO-QSP: $temp_text += $temp_pav_work[temp_i] + ', '
          (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
          if (((s as any).temp_i ?? 0) < Object.keys((s as any).temp_pav_work ?? {}).length - 1) {
            // TODO-QSP: jump 'pav_work_loop'
          }
          // TODO-QSP: $temp_text += 'and ' + $temp_pav_work[temp_i] + '."'
        }
      }
      // TODO-QSP: dynamic text: <<$temp_text>> You pause then giggle. "Happy little Miss nosey?" You say tapping...
      scene.text(`${((s as any).temp_text ?? 0)} You pause then giggle. "Happy little Miss nosey?" You say tapping her gently on the nose."`);
      // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>>." Natasha smiles at you. "I was just curious as I t...
      scene.text(`"Thank you ${((s as any).pcs_nickname ?? 0)}." Natasha smiles at you. "I was just curious as I thought you might work in St. Petersburg.`);
    }
    if (Object.keys((s as any).temp_city_work ?? {}).length === 0  &&  Object.keys((s as any).temp_pav_work ?? {}).length > 0) {
      scene.text('You return her smile. "No only in Pav at the moment and don\'t worry, it\'s not a problem telling you.');
    } else {
      if (Object.keys((s as any).temp_city_work ?? {}).length > 0) {
        scene.text('"Right. Well I work in St. Petersburg but I won\'t tell you just yet. Soon… Okay?" You look quizzically at Natasha.');
        // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>> that's fine and umm…"
        scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)} that's fine and umm…"`);
        scene.text('"Haha! Just kidding Natasha, I do work there as well and…"');
        scene.text('Natasha jumps up.');
      }
    }
    // TODO-QSP: dynamic text: "One second <<$pcs_nickname>>, I'l be back in a moment. Just need to go to the k...
    scene.text(`"One second ${((s as any).pcs_nickname ?? 0)}, I'l be back in a moment. Just need to go to the kitchen quickly. I left something on the stove…"`);
    ((s as any).NatbelQW ?? {})['StP_trip_daystart'] = ((s as any).daystart ?? 0) + 14 + (13 - ((s as any).week ?? 0)) % 7;
    ((s as any).NatbelQW ?? {})['shopping'] = 3;
    if (((s as any).temp_runner ?? 0) === 1) {
      qspCall(s, 'natbel_chat', 'job_questions_runner');
    } else {
      qspCall(s, 'natbel_chat', 'job_questions_natbel_returns');
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterJobQuestionsRunner(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell Natasha to get her sports kit on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha6.jpg');
    scene.text('Natasha leaves the kitchen and rejoins you in her bedroom. You are looking through some of her fashion magazines and look up at her as she sits with you. "Right Natasha, go and put your sports clothes on; we\'re going for a jog!"');
    // TODO-QSP: dynamic text: Natasha looks at you a bit confused. "Eh?! Why's that <<$pcs_nickname>>?"
    scene.text(`Natasha looks at you a bit confused. "Eh?! Why's that ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('"Well I fancy going for a jog and you\'re coming with me. No arguments!" You pause. Come on, I\'ll get my kit and meet you back here in 5 minutes."');
    scene.text('"Erm… But…"');
    scene.text('You give her a stern look. "Natasha come on… No more arguments! I\'ll get changed. See you in a few minutes."');
    scene.text('With that you leave to cut short any further possible objections.');
    scene.actions([
      { label: 'Natasha isn\'t ready!', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha34.jpg');
    // TODO-QSP: dynamic text: When you return <<$npc_usedname['A191']>> answers the door and tells you that Na...
    scene.text(`When you return ${((s as any).npc_usedname ?? 0)?.['A191']} answers the door and tells you that Natasha is in her room so you head in there to get her… Only she's not ready yet!`);
    scene.text('When you enter her room you are greeted with the sight of Natasha finishing an ice cream and reading a book butt naked!');
    scene.text('Admiring the view you laugh and say "So Natasha I take it you\'re planning on a naked jog?!"');
    // TODO-QSP: dynamic text: "Oh! Shit sorry <<$pcs_nickname>> I got a bit sidetracked!"
    scene.text(`"Oh! Shit sorry ${((s as any).pcs_nickname ?? 0)} I got a bit sidetracked!"`);
    scene.text('"Well yeah! I can see that and just as well we\'re going for a jog or you\'ll be moaning about keeping your figure." You reply pointing to the ice cream cone in her hand and giggling."');
    scene.text('Natasha blushes and mutters something you can\'t properly catch but guess it\'s about the ice cream being nice.');
    scene.text('"Come on girlfriend get a shift on or I might have to take you jogging more often!"');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>> I won't be a sec."
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)} I won't be a sec."`);
    scene.text('True to her word Natasha quickly gets her gym kit on and you head out.');
    scene.actions([
      { label: 'Go for a jog', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'exercise', 'tier1', 20, 'run');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha35.jpg');
    scene.text('You both head down to the park and go for a jog. You have to adjust your pace so as not to leave Natasha behind.');
    scene.text('Despite this Natasha struggles to keep up with you and you have to have a short break.');
    // TODO-QSP: dynamic text: "Pant… Pant… Are you trying to kill me <<$pcs_nickname>>?!"
    scene.text(`"Pant… Pant… Are you trying to kill me ${((s as any).pcs_nickname ?? 0)}?!"`);
    scene.text('"Oh really Natasha?! It\'s just a gentle jog." You say with a giggle. "Okay, shall we head back?"');
    scene.text('A rather red in the face Natasha just nods at you still trying to catch her breath.');
    scene.actions([
      { label: 'Shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npcStat', 'A16');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha36.jpg');
    // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>> I desperately need a shower after that… Erm… Join me?"
    scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)} I desperately need a shower after that… Erm… Join me?"`);
    scene.text('"Absolutely! That was never in doubt!" You respond smiling.');
    scene.text('You both head to the bathroom and undress. Natasha turns the shower on pausing for a passionate kiss before getting in and lathering each other.');
    qspCall(s, 'arousal', 'kiss', 1, 'A16', 'lesbian');
    qspCall(s, 'arousal', 'foreplay', 4, 'A16', 'lesbian');
    qspCall(s, 'arousal', 'foreplay_give', (-4), 'A16', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Escalation', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha37.jpg');
    scene.text('Unable to keep your hands off each other the kissing quickly escalates.');
    scene.text('Natasha\'s hand is soon between your legs as her fingers begin to work their magic.');
    scene.text('You, in turn, push your leg between Natasha\'s as she starts to ride your leg.');
    qspCall(s, 'arousal', 'kiss', 5, 'A16', 'lesbian');
    qspCall(s, 'arousal', 'foreplay', (-5), 'A16', 'lesbian');
    qspCall(s, 'arousal', 'foreplay_give', (-5), 'A16', 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-5), 'A16', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Grind', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha38.jpg');
    scene.text('It\'s not long before you lean forward and push your arse back into Natasha\'s pussy and start grinding on her.');
    // TODO-QSP: dynamic text: Oh! Fuck! <<$pcs_nickname>>! I'm going to…"
    scene.text(`Oh! Fuck! ${((s as any).pcs_nickname ?? 0)}! I'm going to…"`);
    scene.text('You decide to pull back at the last second…');
    qspCall(s, 'arousal', 'kiss', 1, 'A16', 'lesbian');
    qspCall(s, 'arousal', 'trib', 4, 'A16', 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Licking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha39.jpg');
    scene.text('You push Natasha\'s head down to your pussy and hold it there');
    scene.text('Your legs start to feel like jelly so you sit on the small ledge.');
    scene.text('Natasha kneels in front of you and spreads your legs and immediately starts playing with your clit and licking you out.');
    scene.text('Although the build and crescendo seems to take an age it could only have been a couple of minutes before you\'re ready to cum in her mouth.');
    scene.text('"No… Not… yet…" You pant. "Bedroom… Now!"');
    qspCall(s, 'arousal', 'cuni', 5, 'A16', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha40.jpg');
    scene.text('Once on the bed after another long and very passionate kiss you both lie back astride each other\'s leg and start rubbing back and forth… back and forth.');
    scene.text('You both gradually speed up as your excitement grows.');
    scene.text('As your movements get faster and you push against each other you both rapidly near the point of no return.');
    scene.text('Every muscle in your body tightens and pulsate. Your pussy is soaking as your vagina pulses uncontrollably.');
    scene.text('Suddenly juices pour from Natasha\'s clit as you both reach an orgasm simultaneously and bite your lips so as not to scream.');
    // TODO-QSP: dynamic text: As you slowly come down in your afterglow and cuddle up Natasha whispers to you ...
    scene.text(`As you slowly come down in your afterglow and cuddle up Natasha whispers to you with a cheeky grin. "Umm, that was nice ${((s as any).pcs_nickname ?? 0)}, we'll have to have a repeat performance at some point."`);
    scene.text('You give her a hug as you reply. "Yep, 100% but we\'ll need to be careful we don\'t end up too wrinkly from all the water."');
    qspCall(s, 'arousal', 'kiss', 1, 'A16', 'lesbian');
    qspCall(s, 'arousal', 'trib', 4, 'A16', 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Back to jobs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha40.jpg');
    scene.text('After relaxing in each other\'s arms for a couple of minutes you both slowly come down from your high.');
    scene.text('You turn to Natasha. "Well Natasha you remember you asked me about my jobs?"');
    // TODO-QSP: dynamic text: "Yes… <<$pcs_nickname>>." She looks confused; probably because of your choice of...
    scene.text(`"Yes… ${((s as any).pcs_nickname ?? 0)}." She looks confused; probably because of your choice of post passion topic.`);
    scene.text('"Right… Well I thought I\'d show you one of my sources of income."');
    // TODO-QSP: dynamic text: Natasha continues to look confused and the expression on her face is an absolute...
    scene.text(`Natasha continues to look confused and the expression on her face is an absolute picture. "Sorry ${((s as any).pcs_nickname ?? 0)}; you mean…" She stops, goes bright red and turns to you looking worried and somewhat horrified.`);
    scene.text('It takes you a moment to realize what she\'s thinking then you respond after a brief giggle, "Oh! I get it, no not that, the running silly! You know that you\'ve got a filthy mind girl!"');
    scene.text('Natasha is now even redder as she replies. "Oh! Right! I thought you meant… Shit! Sorry!" She leans over and gives you a warm hug but still looks confused.');
    if (((s as any).runnerQW ?? 0)?.['champ_gold'] > 0) {
      scene.actions([
        { label: 'St. Petersburg reigning 400M champion', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/city/citycenter/gym/race/run_win.jpg');
    scene.text('You look at Natasha and smile. "I take it you don\'t look at the sports pages in the local press then?"');
    scene.text('Natasha just continues looking at you only now in total confusion.');
    scene.text('You continue… "Okay… Hang on I think I\'ve got a photo here somewhere." You have a look in your bag. "Yeah here it is; I thought that I hadn\'t taken it out of my bag yet."');
    scene.text('You show her a picture of you in your sports gear arms raised in triumph receiving your medal.');
    scene.text('Natasha\'s mouth drops open and she looks at you in shock muttering something you can\'t make out but sounds suspiciously like: "Holy shit!"');
    scene.text('"Well that probably explains why you were out of breath when I went for a light jog! You still don\'t realize do you?"');
    scene.text('Natasha simply shakes her head looking at you still somewhat bewildered.');
    scene.text('"Right… Well Natasha you can tell your mother that you just went for a jog with the St. Petersburg 400 meter track champion!"');
    scene.actions([
      { label: 'Agree trip to St. Petersburg', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha33.jpg');
    scene.text('"Natasha… Hey Natasha…" You click your fingers in front of her face.');
    // TODO-QSP: dynamic text: "Sorry! Wow! Fuck! Sorry Umm… Sorry I didn't know! You must think I'm a really s...
    scene.text(`"Sorry! Wow! Fuck! Sorry Umm… Sorry I didn't know! You must think I'm a really shitty girlfriend not to have known that! I'm really sorry ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('"Hey! Don\'t stress it\'s not a problem." You pause and click your fingers at her again as she spaces out. "Hey! I race there on a Saturdays so we\'ll go together sometime soon… Okay?"');
    // TODO-QSP: dynamic text: Natasha slowly regains her composure. "Oh yes <<$pcs_nickname>>! I'd love that! ...
    scene.text(`Natasha slowly regains her composure. "Oh yes ${((s as any).pcs_nickname ?? 0)}! I'd love that! Thank you so much." She pauses then gives you a big hug then jumps up.`);
    // TODO-QSP: dynamic text: "One second <<$pcs_nickname>>, I'll be back in a moment. Just need to go to the ...
    scene.text(`"One second ${((s as any).pcs_nickname ?? 0)}, I'll be back in a moment. Just need to go to the kitchen quickly. I left something on the stove and it should be cooked by now…"`);
    scene.text('Natasha returns still holding a wooden spoon and sits next to you so you continue.');
    // TODO-QSP: dynamic text: Shall we go Saturday and we can have a look in some of the shops and maybe see i...
    scene.text('Shall we go Saturday and we can have a look in some of the shops and maybe see if there\'s anything we like? How about I pick you up outside between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\'? Whilst we\'re there I\'ll tell you where I work and I\'ll get you a ticket so you can watch the race."');
    // TODO-QSP: dynamic text: Natasha's smile widens. "Oh yes <<$pcs_nickname>>! That'll be lovely. Umm… Howev...
    scene.text(`Natasha's smile widens. "Oh yes ${((s as any).pcs_nickname ?? 0)}! That'll be lovely. Umm… However, you need to give me a couple of weeks as I want to arrange a small surprise for you as a thank you for all your help."`);
    scene.text('"There\'s really no need for anything special Natasha. I was just thinking about a day out and having a browse."');
    // TODO-QSP: dynamic text: "Yes I know <<$pcs_nickname>> but I want to. I'll need a couple of weeks if that...
    scene.text(`"Yes I know ${((s as any).pcs_nickname ?? 0)} but I want to. I'll need a couple of weeks if that's okay?"`);
    // TODO-QSP: dynamic text: "Okay… So how about I pick you up outside between '+func('time', 'get_time_strin...
    scene.text('"Okay… So how about I pick you up outside between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\' in two weeks? "');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'On the track team for the 400 meter races', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha33.jpg');
    scene.text('"Well Natasha, I race for the St. Petersburg Track team in the 400 meter event and the races are on Saturdays."');
    scene.text('Slowly recovering her poise Natasha smiles and replies. "Well I guess that\'ll explain it then… Even if I didn\'t have a fondness for ice creams I guess I\'d have still been out of breath!… Umm… Maybe I can come along and watch one time?" She asks.');
    scene.text('"Yes of course Natasha, that\'s why I told you about it. We\'ll arrange a trip very soon."');
    scene.text('Your reply obviously doesn\'t register immediately.');
    scene.text('"Natasha… Hey Natasha…" You click your fingers in front of her face. "Hey! I said yes! I race there on a Saturday so we\'ll go together sometime soon… Okay?"');
    // TODO-QSP: dynamic text: "Sorry! Wow! Oh yes <<$pcs_nickname>> I'd love that! Thank you so much."
    scene.text(`"Sorry! Wow! Oh yes ${((s as any).pcs_nickname ?? 0)} I'd love that! Thank you so much."`);
    scene.text('Natasha leans over and kisses you then cuddles up with you for a moment then she jumps up.');
    // TODO-QSP: dynamic text: "One second <<$pcs_nickname>>, I'll be back in a moment. Just need to go to the ...
    scene.text(`"One second ${((s as any).pcs_nickname ?? 0)}, I'll be back in a moment. Just need to go to the kitchen quickly. I left something on the stove and it should be cooked by now…"`);
    scene.text('Natasha returns still holding a wooden spoon and sits next to you so you continue.');
    scene.actions([
      { label: 'Agree trip to St. Petersburgh', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha33.jpg');
    // TODO-QSP: dynamic text: "Anyway… As I was saying, I've been thinking about what we can do next. So if we...
    scene.text('"Anyway… As I was saying, I\'ve been thinking about what we can do next. So if we arrange a trip to St. Petersburg Saturday we can have a look in some of the shops and maybe see if there\'s anything we like. So how about I pick you up outside between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\'? Whilst we\'re there I\'ll tell you where I work and I\'ll get you a ticket so you can watch the race."');
    // TODO-QSP: dynamic text: Natasha's smile widens. "Oh yes <<$pcs_nickname>>! That'll be lovely. Umm… Howev...
    scene.text(`Natasha's smile widens. "Oh yes ${((s as any).pcs_nickname ?? 0)}! That'll be lovely. Umm… However, you need to give me a couple of weeks as I want to arrange a small surprise for you as a thank you for all your help."`);
    scene.text('"There\'s really no need for anything special Natasha. I was just thinking about a day out and having a browse."');
    // TODO-QSP: dynamic text: "Yes I know <<$pcs_nickname>> but I want to. I'll need a couple of weeks if that...
    scene.text(`"Yes I know ${((s as any).pcs_nickname ?? 0)} but I want to. I'll need a couple of weeks if that's okay?"`);
    scene.actions([
      { label: 'Slap', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha41.jpg');
    // TODO-QSP: dynamic text: "Of course Natasha, no problem, how about I pick you up outside between '+func('...
    scene.text('"Of course Natasha, no problem, how about I pick you up outside between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\' in two weeks." You pause then continue. "Just make sure it doesn…"');
    scene.text('Natasha interrupts. "Yes mother!" She says grinning and rolling her eyes.');
    scene.text('"You cheeky mare! If you keep that up you\'re asking for a butt slap!" You respond laughing.');
    scene.text('Natasha laughs and stands up then slowly lifts her dress higher and higher exposing her butt and green panties.');
    scene.text('Slap!');
    scene.text('"Ouch!"');
    scene.text('"Well I did warn you not to be so cheeky! Nice hot butt by the way." You say slowly massaging her arse.');
    scene.text('Natasha pushes her butt against your hand "Umm… You like?"');
    scene.text('"Yeah." You slowly massage her butt before deciding that it\'s gone far enough… for now.');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
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

function enterJobQuestionsNatbelReturns(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Natasha returns', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha33.jpg');
    scene.text('Natasha returns still holding a wooden spoon as you continue.');
    if (Object.keys((s as any).temp_pav_work ?? {}).length > 0) {
      // TODO-QSP: dynamic text: "Anyway… I've been thinking about what we can do next. How about we arrange a tr...
      scene.text('"Anyway… I\'ve been thinking about what we can do next. How about we arrange a trip to St. Petersburg one Saturday and have a look in some of the shops? Maybe see if there\'s anything we like? How about I pick you up outside between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\'?"');
    } else {
      if (Object.keys((s as any).temp_city_work ?? {}).length > 0) {
        // TODO-QSP: dynamic text: "Okay… I've been thinking about what we can do next. How about we arrange a trip...
        scene.text('"Okay… I\'ve been thinking about what we can do next. How about we arrange a trip to St. Petersburg one Saturday and have a look in some of the shops? Maybe see if there\'s anything we like. Whilst we\'re there I\'ll tell you where I work. So how about I pick you up outside between \'+func(\'time\', \'get_time_string\', 12, 0)+\' and \'+func(\'time\', \'get_time_string\', 14, 0)+\'? "');
      }
    }
    // TODO-QSP: dynamic text: Natasha's smile widens. "Oh yes <<$pcs_nickname>>! That'll be lovely. Umm… Howev...
    scene.text(`Natasha's smile widens. "Oh yes ${((s as any).pcs_nickname ?? 0)}! That'll be lovely. Umm… However, you need to give me a couple of weeks as I want to arrange a small surprise for you as a thank you for all your help."`);
    scene.text('"There\'s really no need for anything special Natasha. I was just thinking about a day out and having a browse."');
    // TODO-QSP: dynamic text: "Yes I know <<$pcs_nickname>> but I want to. I'll need a couple of weeks if that...
    scene.text(`"Yes I know ${((s as any).pcs_nickname ?? 0)} but I want to. I'll need a couple of weeks if that's okay?"`);
    scene.actions([
      { label: 'Cheeky mare', handler: (st: GameState) => {
    scene.text('"Of course Natasha, no problem, a couple of weeks it is." You pause then continue. "Just make sure it doesn…"');
    scene.text('Natasha interrupts. "Yes mother!" She says grinning and rolling her eyes.');
    scene.text('"You cheeky mare! If you keep up with that you\'re asking for a butt slap!" You respond laughing.');
    scene.text('Natasha laughs and stands up then slowly lifts her dress and taps her butt with the spoon.');
    scene.text('Slap!');
    scene.text('"Ouch!"');
    scene.text('"Well I did warn you not to be so cheeky! Nice hot butt cheeks by the way." You say slowly massaging her arse.');
    scene.text('Natasha pushes her butt against your hand "Umm… You like?"');
    scene.text('You slowly remove her skirt and massage her butt further before deciding that it\'s gone far enough… for now.');
    scene.actions([
      { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
      { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFriendChat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['shopping'] === 0) {
    scene.actions([
      { label: 'You spot some fashion magazines', goto: ['natbel_friend', 'setup_shopping_spree'] },
    ]);
  } else {
    if (((s as any).NatbelQW ?? 0)?.['shopping'] === 1  &&  (((s as any).daystart ?? 0) >= ((s as any).NatbelQW ?? 0)?.['evt_day'] + 14)) {
      if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 15)  &&  qspFunc(s, 'money', 'can_afford', 2000) === 1) {
        scene.actions([
          { label: 'Go on shopping spree (2:30)', goto: ['natbel_friend', 'shopping_spree'] },
        ]);
      } else {
        if ((((s as any).hour ?? 0) >= 15)) {
          scene.text('It\'s too late to go shopping. Maybe come see Natasha earlier in the day?');
        } else {
          if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
            scene.text('You don\'t have enough money to go shopping. Maybe you can get enough cash to treat Natasha.');
          }
        }
      }
    }
  }
  if ((((s as any).daystart ?? 0) >= ((s as any).NatbelQW ?? 0)?.['evt_day'] + 7)  &&  ((s as any).NatbelQW ?? 0)?.['shopping'] === 2  &&  ((s as any).NatbelQW ?? 0)?.['disco_invite'] === 0) {
    scene.actions([
      { label: 'Talk about shopping spree', goto: ['natbel_friend', 'love_jct'] },
    ]);
  }
  if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 1) {
    scene.actions([
      { label: 'Arrange a disco date', goto: ['natbel_friend', 'disco_1'] },
    ]);
  } else {
    if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 2) {
      if (((s as any).week ?? 0) === 6  &&  (((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) < 21)) {
        // TODO-QSP: act 'Go to disco' : gt 'natbel_friend', 'disco_2'
      }
    } else {
      if (((s as any).NatbelQW ?? 0)?.['disco_invite'] === 3  &&  ((s as any).NatbelQW ?? 0)?.['FriendLover'] < 3) {
        scene.actions([
          { label: 'Kiss Natasha and become her lover', goto: ['natbel_friend', 'kiss_and_become_lovers'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Hangout', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    scene.text('Whilst you are both sitting on Natasha\'s bed chatting about general stuff and flicking through fashion magazines you feel like going outside for a while so putting the magazine down you turn to Natasha and say, "OK Natasha, enough sitting about. Let\'s…"');
    qspCall(s, 'natbel_dates_repeat', 'set_pav_dates_acts');
    scene.actions([
      { label: 'Go back', goto: ['natbel_chat', 'chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSmallTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 7) {
    scene.text('Natasha knows that she lives in a very poor family. She has no father, and her mother works for a pittance at the garment factory. You feel sorry for her.');
    scene.text('She is envious that other girls can dress smartly and buy cosmetics while she has to wear her mother\'s things.');
  } else {
    scene.text('Natasha knows that she lives in a very poor family. She has no father, and her mother works for a pittance at the garment factory. You feel for her and have helped her out so she can now dress smartly and is able to buy some cosmetics and no longer has to wear her mother\'s things.');
  }
  scene.text('You talk with Natasha about this and that, passing fifteen minutes with ease.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterMomTalk(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Natasha\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
  scene.text('You talk with Natasha about her mother. She tells you that her mother seems to be unhappy a lot of the time. She thinks it\'s because of how dreary her job at the garment factory is.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterDadTalk(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Natasha\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
  scene.text('"What about your father? I\'ve never seen him around." You nudge her gently. "Oh don\'t get me started about that. I mean… Like… Well… It\'s not like I really know what I\'m missing. He left my mom and me just after I was born."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep talking', goto: ['natbel_chat', 'chat'] },
    { label: 'Stop talking', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterSnacks(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Natasha\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
  scene.text('You bite your lip a moment, unsure if you should ask. It might seem rude, but you could really use a snack and drink. "Hey, Natasha you got anything to snack on or drink?"');
  scene.text('She looks a bit surprised and then a bit abashed. "Yeah sorry, didn\'t think about it. Feel free to just grab something if you want in the future, but for now, follow me."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow her', goto: ['natbelEv', 'snack'] },
  ]);
  scene.build();
}

function enterNatknows(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk ?? {})['A16'] = 1;
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
    scene.text('"So, do you know who the father is?"');
  } else {
    scene.text('"So, who\'s the father?"');
  }
  if (((s as any).wombthfathID ?? 0) === 'A34'  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 50) {
    scene.text('You smile. "I\'m sure you won\'t be surprised to hear that Kolka got me pregnant."');
    scene.text('"Wow. He really has a thing for knocking girls up." She says while touching her own pregnant belly. "I didn\'t expect that to extend to his own sister, though."');
    scene.text('"Yeah, you know how it is. Some men just want to conquer as many wombs as they can, it doesn\'t matter who they\'re attached to," you reply. "But don\'t worry, he still has a permanent claim on yours. We\'ll make sure he has plenty of opportunities to keep getting you pregnant. Who knows how many of his children you\'ll have before he\'s finished."');
    scene.text('Natasha\'s face goes completely red with embarrassment, and she starts to mumble something before you cut her off with a passionate kiss. When you finally break the kiss, she is still visibly red, but she isn\'t protesting your suggestion. You know what she wants.');
    qspCall(s, 'arousal', 'kiss', (-1), 'A16', 'lesbian');
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).wombthfath ?? 0) === ''  ||  ((s as any).wombthfathID ?? 0) === 'unknown') {
      scene.text('"I don\'t actually know." You laugh. "I guess my life has gotten a little out of hand recently."');
      scene.text('"Yeah, it sounds like it has." She smiles. "Regardless, I\'m glad I won\'t be going through pregnancy alone."');
    } else {
      // TODO-QSP: dynamic text: "It looks like I got knocked up by <<$wombthfath>>."
      scene.text(`"It looks like I got knocked up by ${((s as any).wombthfath ?? 0)}."`);
      scene.text('"Well, I hope for the best for both of you. After our babies are both born, we should start setting up play dates." She pauses for a moment before adding, "Honestly, I\'m happy that I won\'t be going through this alone."');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterNatknows1(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk ?? {})['A16'] = 1;
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
    scene.text('"Do you know if it\'s the same father as last time?"');
  } else {
    scene.text('"Is it the same father as last time?"');
  }
  if (((s as any).wombthfathID ?? 0) === ((s as any).ChildThFath ?? 0)[((s as any).kid ?? 0)-1]) {
    if (((s as any).wombthfathID ?? 0) === 'A34') {
      scene.text('"Yeah, I\'m not sure if I\'ll let him get me pregnant again after this though." You pull your face as close to Natasha\'s as you can without actually touching her and sultrily whisper, "You, on the other hand, are going to be his personal breeding bitch. There won\'t be a single moment where your womb doesn\'t contain either his baby or his cum. He is going to keep you knocked up until he gets bored with you and leaves you a single mother."');
      scene.text('As soon as you finish speaking, you give Natasha a deep, passionate kiss. You pull away, a string of saliva still hanging between you. Natasha just stares at you, unable to respond, but very visibly aroused.');
      qspCall(s, 'arousal', 'kiss', (-1), 'A16', 'lesbian');
      qspCall(s, 'stat', '');
    } else {
      scene.text('"Yeah. I guess I needed him to give me another baby before I could be satisfied," you say jokingly.');
      scene.text('"Well, I hope you find satisfaction," she laughs.');
    }
  } else {
    if (((s as any).wombthfathID ?? 0) === 'A34') {
      scene.text('"No, this time it\'s Kolka\'s," you inform her.');
      scene.text('"Wow. He really has a thing for knocking girls up," she says.');
      scene.text('"Yeah, it seems like he does," you reply. "But don\'t worry, we\'ll make sure he has plenty of opportunities to keep getting you pregnant. Who knows how many of his children you\'ll have before he\'s finished."');
      scene.text('Natasha\'s face goes completely red with embarrassment, and she starts to mumble something before you cut her off with a passionate kiss. When you finally break the kiss, she is still visibly red, but she isn\'t protesting your suggestion. You know what she wants.');
      qspCall(s, 'arousal', 'kiss', (-1), 'A16', 'lesbian');
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).ChildThFath ?? 0)[((s as any).kid ?? 0)-1] === 'A34') {
        scene.text('"Not this time. My body is far too fantastic to limit myself. My brother can\'t be the only person to put a baby in me," you joke. "Plus, he already has a baby factory. That\'s your job." You punctuate your sentence by kissing Natasha. After you pull away, she stares at you in silence, face red, trying to determine if you were serious.');
        qspCall(s, 'arousal', 'kiss', (-1), 'A16', 'lesbian');
        qspCall(s, 'stat', '');
      } else {
        scene.text('"No, I needed to test drive someone else before I could decide what father I like best."');
        scene.text('"If you\'re going that route, you might as well keep shopping around." You laugh together for a while before moving on to another topic.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterPregChat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_pregtalk ?? 0)?.['A16'] === 0  &&  (!((s as any).kid ?? 0))) {
    if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) < 200  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
      scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, are you pregnant, too? Well, I guess I don't have to worry a...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, are you pregnant, too? Well, I guess I don't have to worry about being the only pregnant girl at school," she giggles.`);
      scene.actions([
        { label: 'Continue', goto: ['natbel_chat', 'natknows'] },
      ]);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) < 200  &&  ((s as any).knowpreg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) > 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
        scene.actions([
          { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    scene.text('"If you were worried about being the only pregnant girl at school, that won\'t be a problem anymore." You smirk while rubbing your midriff. "It looks like I got myself knocked up as well."');
    scene.text('Natasha smiles at you excitedly. "Really? Congratulations!"');
    scene.actions([
      { label: 'Continue', goto: ['natbel_chat', 'natknows'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).NatbelQW ?? 0)?.['QWstage'] <= 5  &&  ((s as any).pregChem ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 1) {
          scene.actions([
            { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    ((s as any).npc_pregtalk ?? {})['A16'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you're," she pauses momentarily before continuing in a tone ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, you're," she pauses momentarily before continuing in a tone of shock mixed with disgust, "pregnant? Have you been sleeping around? This will definitely impact your studies."`);
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).pregChem ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 1) {
            scene.actions([
              { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    ((s as any).npc_pregtalk ?? {})['A16'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/natasha/bedtalk.jpg');
    scene.text('"You\'re pregnant? Who\'s the father?"');
    if (((s as any).wombthfath ?? 0) === ''  ||  ((s as any).wombthfathID ?? 0) === 'unknown') {
      scene.text('"Honestly, I don\'t even know."');
      scene.text('"Really? That\'s crazy." Natasha whispers, rubbing her midriff longingly.');
      scene.actions([
        { label: 'Continue', goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: You tell her that <<$wombthfath>> is the father and then give her brief details ...
      scene.text(`You tell her that ${((s as any).wombthfath ?? 0)} is the father and then give her brief details as to how you got pregnant, without getting too explicit.`);
      scene.text('"Really? That\'s crazy." Natasha whispers, rubbing her midriff longingly.');
      scene.actions([
        { label: 'Continue', goto: ['natbelapt', 'natroom'] },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
  }
  if (((s as any).npc_pregtalk ?? 0)?.['A16'] === 0  &&  ((s as any).kid ?? 0) > 0) {
    if ((((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday'])< 200)  ||  (((s as any).NatbelQW ?? 0)?.['babycount'] > 0)  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
      // TODO-QSP: dynamic text: "Wow, <<$pcs_nickname>>, you're pregnant again? You're really committed to makin...
      scene.text(`"Wow, ${((s as any).pcs_nickname ?? 0)}, you're pregnant again? You're really committed to making sure I'm not the only young mother around here, huh?" She playfully smiles and puts a hand on your shoulder. "It's good to know you're looking out for me."`);
      scene.actions([
        { label: 'Next', goto: ['natbel_chat', 'natknows1'] },
      ]);
    } else {
      if ((((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday'])< 200)  ||  (((s as any).NatbelQW ?? 0)?.['babycount'] > 0)  &&  ((s as any).knowpreg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) > 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
        scene.actions([
          { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    scene.text('"Hey, guess who\'s pregnant again. You know, I\'m glad I forced you to let Kolka impregnate you so that I could have someone I can relate to."');
    scene.text('Natasha stares at you for a moment, stunned, trying to determine if the second half of your statement was a joke, before the first half clicks in her mind. "Oh my God, that\'s wonderful!" she exclaims as she throws her arms around you and hugs you. When she finally lets go, she asks');
    scene.actions([
      { label: 'Next', goto: ['natbel_chat', 'natknows1'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).NatbelQW ?? 0)?.['QWstage'] <= 5  &&  ((s as any).pregChem ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 1) {
          scene.actions([
            { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    ((s as any).npc_pregtalk ?? {})['A16'] = 1;
    scene.text('"Really? You\'re pregnant again? You should really try to be more careful."');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).pregChem ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 1) {
            scene.actions([
              { label: 'Tell her you\'re pregnant', handler: (st: GameState) => {
    ((s as any).npc_pregtalk ?? {})['A16'] = 1;
    scene.text('"You got pregnant again. It must be wonderful…" She trails off, clearly envious.');
    scene.actions([
      { label: 'Continue', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthdayInvitation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
    qspCall(s, 'natbel_friend', 'birthday_invitation');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthdayMissed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 3) {
    scene.actions([{ label: 'Continue', goto: ['natbel_friend', 'birthday_missed'] }]);
  }
  // TODO-QSP: end
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
    case 'demand_debt_repayment':
      enterDemandDebtRepayment(s, scene);
      break;
    case 'forgive_chat':
      enterForgiveChat(s, scene);
      break;
    case 'forgive_chat2':
      enterForgiveChat2(s, scene);
      break;
    case 'debt_forgive':
      enterDebtForgive(s, scene);
      break;
    case 'debt_forgive2':
      enterDebtForgive2(s, scene);
      break;
    case 'chris_chat_sub':
      enterChrisChatSub(s, scene);
      break;
    case 'chris_chat':
      enterChrisChat(s, scene);
      break;
    case 'lover_events_chat':
      enterLoverEventsChat(s, scene);
      break;
    case 'first_kiss':
      enterFirstKiss(s, scene);
      break;
    case 'lover_chat':
      enterLoverChat(s, scene);
      break;
    case 'arrange_shop_trip1':
      enterArrangeShopTrip1(s, scene);
      break;
    case 'arrange_shop_trip2':
      enterArrangeShopTrip2(s, scene);
      break;
    case 'job_questions':
      enterJobQuestions(s, scene);
      break;
    case 'job_questions_runner':
      enterJobQuestionsRunner(s, scene);
      break;
    case 'job_questions_natbel_returns':
      enterJobQuestionsNatbelReturns(s, scene);
      break;
    case 'friend_chat':
      enterFriendChat(s, scene);
      break;
    case 'small_talk':
      enterSmallTalk(s, scene);
      break;
    case 'mom_talk':
      enterMomTalk(s, scene);
      break;
    case 'dad_talk':
      enterDadTalk(s, scene);
      break;
    case 'snacks':
      enterSnacks(s, scene);
      break;
    case 'natknows':
      enterNatknows(s, scene);
      break;
    case 'natknows1':
      enterNatknows1(s, scene);
      break;
    case 'preg_chat':
      enterPregChat(s, scene);
      break;
    case 'birthday_invitation':
      enterBirthdayInvitation(s, scene);
      break;
    case 'birthday_missed':
      enterBirthdayMissed(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natbel_chat: LocationDef = {
  name: 'natbel_chat',
  title: 'Natasha\'s Room',
  region: 'other',
  enter: enter,
};
